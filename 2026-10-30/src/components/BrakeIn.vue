<!--
  Slides its content in from the right when the slide is shown, skids to a stop just past the
  centre, and lurches forward on its base before easing back upright and into the centre.
  The motion is simulated, not hand-keyed. The cart arrives at a constant speed, brakes at a
  constant deceleration, then a critically damped spring draws it back to the centre. That
  deceleration drives three more critically damped springs, so each moves once and never swings
  back: the lurch (the top tips forward), the squash (it sinks into the stop), and the trail (the
  parts matched by the `trail` selector, inside an SVG, carry on past the stop and catch up).
  Whatever is in the `follow` slot comes along behind, pulled by one more critically damped
  spring, hopping as long as it is still moving.
-->
<script setup lang="ts">
import { onSlideEnter, onSlideLeave } from "@slidev/client";
import { onBeforeUnmount, useTemplateRef } from "vue";

const props = defineProps<{ trail?: string }>();

// Cart, in px right of the centre (x = 0)
const start = 980; // off the slide
const speed = 3200; // px/s
const brakeAt = 40; // where the brakes go on
const overshoot = 60; // how far past the centre it skids
const returnFrequency = 2.6; // Hz, back to the centre once stopped
// Lurch: how fast it comes back upright, and how far past the physical amount it is drawn
const lurch = { frequency: 2.2, exaggeration: 1.3 };
// Squash: how fast it springs back, and how much it sinks per px/s² (about 4% at this stop)
const squash = { frequency: 6, gain: 0.0015 };
// Trail: how fast the trailing parts catch up, in Hz
const trailFrequency = 4;
// Follower: how far behind it starts, how fast it closes in (Hz), and its hops (px high, per s)
const follow = { gap: 240, frequency: 3, hop: { height: 48, rate: 7 } };

const step = 1 / 1000; // s, for the simulation
const frame = 1 / 60; // s, between keyframes
const length = 0.85; // s, long enough to settle

/**
 * height: the content's height in px, which sets how far the deceleration tips it
 * trailScale: SVG user units per px, for the trailing parts
 */
function simulate(height: number, trailScale: number) {
  const deceleration = (speed * speed) / (2 * (brakeAt + overshoot));
  const wr = 2 * Math.PI * returnFrequency;
  const wl = 2 * Math.PI * lurch.frequency;
  const ws = 2 * Math.PI * squash.frequency;
  const wt = 2 * Math.PI * trailFrequency;
  // A uniform slab pivoting on its base: the deceleration acts at its centre of mass (height / 2)
  // against a moment of inertia of m × height² / 3, so it turns at 3a / (2 × height)
  const gain = height > 0 ? 3 / (2 * height) : 0;
  let x = start;
  let v = -speed;
  let phase: "arrive" | "skid" | "return" = "arrive";
  let lean = 0;
  let leanSpeed = 0;
  let sink = 0;
  let sinkSpeed = 0;
  let lag = 0;
  let lagSpeed = 0;
  const wf = 2 * Math.PI * follow.frequency;
  let fx = start + follow.gap;
  let fv = 0;
  const frames: Keyframe[] = [];
  const trailFrames: Keyframe[] = [];
  const followFrames: Keyframe[] = [];
  const total = Math.round(length / step);
  const every = Math.round(frame / step);
  for (let i = 0; i <= total; i++) {
    if (i % every === 0) {
      const tilt = lean * lurch.exaggeration;
      // A tipped slab's top drops along an arc, by cos(tilt); the squash flattens it on top of that
      const scaleY = Math.cos(tilt) * (1 - sink);
      frames.push({
        transform: `translateX(${x}px) skewX(${(tilt * 180) / Math.PI}deg) scale(${1 / (1 - sink)}, ${scaleY})`,
      });
      trailFrames.push({ transform: `translateX(${lag * trailScale}px)` });
      // Hops as high as it is fast, so they die away as it settles
      const hop =
        follow.hop.height *
        Math.min(Math.abs(fv) / speed, 1) *
        Math.abs(Math.sin(Math.PI * follow.hop.rate * i * step));
      followFrames.push({ transform: `translate(${fx}px, ${-hop}px)` });
    }
    if (phase === "arrive" && x <= brakeAt) phase = "skid";
    let a = 0;
    if (phase === "skid") {
      a = deceleration;
      if (v + a * step >= 0) {
        phase = "return";
        v = 0;
        a = 0;
      }
    } else if (phase === "return") {
      a = -wr * wr * x - 2 * wr * v;
    }
    v += a * step;
    x += v * step;
    // Braking pushes back against the leftwards motion; the top keeps going, so it leans left
    leanSpeed += (-wl * wl * lean - 2 * wl * leanSpeed + gain * a) * step;
    lean += leanSpeed * step;
    sinkSpeed +=
      (-ws * ws * sink - 2 * ws * sinkSpeed + squash.gain * a) * step;
    sink += sinkSpeed * step;
    // The trailing parts are held only by a spring, so they carry on leftwards while the rest stops
    lagSpeed += (-wt * wt * lag - 2 * wt * lagSpeed - a) * step;
    lag += lagSpeed * step;
    // The follower is drawn towards wherever the cart is now
    fv += (-wf * wf * (fx - x) - 2 * wf * fv) * step;
    fx += fv * step;
  }
  frames.push({ transform: "none" });
  trailFrames.push({ transform: "none" });
  followFrames.push({ transform: "none" });
  return { frames, trailFrames, followFrames };
}

// Slidev's slide transition length, in ms
function fadeDuration() {
  const value = getComputedStyle(document.documentElement).getPropertyValue(
    "--slidev-transition-duration",
  );
  return parseFloat(value) * (value.trim().endsWith("ms") ? 1 : 1000) || 0;
}

const box = useTemplateRef("box");
const follower = useTemplateRef("follower");
let animations: Animation[] = [];
let request = 0;

function stop() {
  cancelAnimationFrame(request);
  for (const animation of animations) animation.cancel();
  animations = [];
  if (box.value) box.value.style.transform = "";
  if (follower.value) follower.value.style.transform = "";
}

const reducedMotion =
  typeof matchMedia === "function" &&
  matchMedia("(prefers-reduced-motion: reduce)").matches;

onSlideEnter(() => {
  const el = box.value;
  if (reducedMotion || !el) return;
  stop();
  // The slide is laid out only from the next frame, and the lurch needs the height; wait off the slide
  el.style.transform = `translateX(${start}px)`;
  if (follower.value)
    follower.value.style.transform = `translateX(${start + follow.gap}px)`;
  request = requestAnimationFrame(() => {
    el.style.transform = "";
    if (follower.value) follower.value.style.transform = "";
    const trail = props.trail
      ? el.querySelector<SVGGraphicsElement>(props.trail)
      : null;
    const svg = trail?.ownerSVGElement;
    const trailScale =
      svg && svg.clientWidth > 0
        ? svg.viewBox.baseVal.width / svg.clientWidth
        : 1;
    const { frames, trailFrames, followFrames } = simulate(
      el.offsetHeight,
      trailScale,
    );
    const timing: KeyframeAnimationOptions = {
      duration: (frames.length - 1) * frame * 1000,
      // Waits off the slide until the slide has faded in, so the whole run is seen
      delay: fadeDuration(),
      fill: "backwards",
    };
    animations = [el.animate(frames, timing)];
    if (trail) animations.push(trail.animate(trailFrames, timing));
    if (follower.value)
      animations.push(follower.value.animate(followFrames, timing));
  });
});
onSlideLeave(stop);
onBeforeUnmount(stop);
</script>

<template>
  <div class="brake-in-stage">
    <div ref="box" class="brake-in">
      <slot />
    </div>
    <div v-if="$slots.follow" ref="follower" class="brake-in-follower">
      <slot name="follow" />
    </div>
  </div>
</template>

<style scoped>
/* The content and its follower stand on the same floor */
.brake-in-stage {
  display: flex;
  align-items: flex-end;
  gap: var(--space-6);
  height: 100%;
}

/* Pivots on its base, where the brake acts */
.brake-in {
  height: 100%;
  transform-origin: 50% 100%;
}
</style>
