<!--
  Slides its content in from the right when the slide is shown, skids to a stop just past the
  centre, and lurches forward on its base before easing back upright and into the centre.
  The motion is simulated, not hand-keyed. The cart arrives at a constant speed, brakes at a
  constant deceleration, then a critically damped spring draws it back to the centre. The lurch
  is a skew whose top is pushed forward by that deceleration and drawn back by a critically
  damped spring, so it leans once and never swings back past upright.
-->
<script setup lang="ts">
import { onSlideEnter, onSlideLeave } from "@slidev/client";
import { onBeforeUnmount, useTemplateRef } from "vue";

// Cart, in px right of the centre (x = 0)
const start = 980; // off the slide
const speed = 3200; // px/s
const brakeAt = 40; // where the brakes go on
const overshoot = 60; // how far past the centre it skids
const returnFrequency = 2; // Hz, back to the centre once stopped
// Lurch: how fast it comes back upright, in Hz
const lurchFrequency = 2.2;

const step = 1 / 1000; // s, for the simulation
const frame = 1 / 60; // s, between keyframes
const length = 1; // s, long enough to settle

// height: the content's height in px, which sets how far the deceleration tips it
function simulate(height: number): Keyframe[] {
  const deceleration = (speed * speed) / (2 * (brakeAt + overshoot));
  const wr = 2 * Math.PI * returnFrequency;
  const wl = 2 * Math.PI * lurchFrequency;
  // A uniform slab pivoting on its base: the deceleration acts at its centre of mass (height / 2)
  // against a moment of inertia of m × height² / 3, so it turns at 3a / (2 × height)
  const gain = height > 0 ? 3 / (2 * height) : 0;
  let x = start;
  let v = -speed;
  let phase: "arrive" | "skid" | "return" = "arrive";
  let lean = 0;
  let leanSpeed = 0;
  const frames: Keyframe[] = [];
  const total = Math.round(length / step);
  const every = Math.round(frame / step);
  for (let i = 0; i <= total; i++) {
    if (i % every === 0) {
      frames.push({
        transform: `translateX(${x}px) skewX(${(lean * 180) / Math.PI}deg)`,
      });
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
    const leanAcceleration = -wl * wl * lean - 2 * wl * leanSpeed + gain * a;
    leanSpeed += leanAcceleration * step;
    lean += leanSpeed * step;
  }
  frames.push({ transform: "none" });
  return frames;
}

// Slidev's slide transition length, in ms
function fadeDuration() {
  const value = getComputedStyle(document.documentElement).getPropertyValue(
    "--slidev-transition-duration",
  );
  return parseFloat(value) * (value.trim().endsWith("ms") ? 1 : 1000) || 0;
}

const box = useTemplateRef("box");
let animation: Animation | undefined;
let request = 0;

function stop() {
  cancelAnimationFrame(request);
  animation?.cancel();
  if (box.value) box.value.style.transform = "";
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
  request = requestAnimationFrame(() => {
    el.style.transform = "";
    const frames = simulate(el.offsetHeight);
    animation = el.animate(frames, {
      duration: (frames.length - 1) * frame * 1000,
      // Waits off the slide until the slide has faded in, so the whole run is seen
      delay: fadeDuration(),
      fill: "backwards",
    });
  });
});
onSlideLeave(stop);
onBeforeUnmount(stop);
</script>

<template>
  <div ref="box" class="brake-in">
    <slot />
  </div>
</template>

<style scoped>
/* Pivots on its base, where the brake acts */
.brake-in {
  transform-origin: 50% 100%;
}
</style>
