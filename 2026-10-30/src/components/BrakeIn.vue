<!--
  Slides its content in from the right when the slide is shown, brakes hard just past the centre,
  and lurches forward on its base before settling, like a cart with a weight standing on it.
  The motion is simulated, not hand-keyed: the cart is a damped spring pulled to the centre once
  it reaches the brake point, and the tilt is a damped pendulum driven by the cart's deceleration.
-->
<script setup lang="ts">
import { onSlideEnter, onSlideLeave } from "@slidev/client";
import { onBeforeUnmount, useTemplateRef } from "vue";

// Cart: arrives at a constant speed, then a spring pulls it to the centre (x = 0)
const start = 980; // px right of the centre, off the slide
const speed = 3200; // px/s
const brakeAt = 40; // px right of the centre
const spring = { frequency: 3, damping: 0.6 };
// Tilt: an upright spring at the base, pushed over by the deceleration
const tilt = { frequency: 3.4, damping: 0.45, height: 600 };

const step = 1 / 1000; // s, for the simulation
const frame = 1 / 60; // s, between keyframes
const length = 1; // s, long enough to settle

function simulate(): Keyframe[] {
  const w = 2 * Math.PI * spring.frequency;
  const wt = 2 * Math.PI * tilt.frequency;
  let x = start;
  let v = -speed;
  let angle = 0;
  let spin = 0;
  let braking = false;
  const frames: Keyframe[] = [];
  const total = Math.round(length / step);
  const every = Math.round(frame / step);
  for (let i = 0; i <= total; i++) {
    if (i % every === 0) {
      frames.push({
        transform: `translateX(${x}px) rotate(${(angle * 180) / Math.PI}deg)`,
      });
    }
    braking ||= x <= brakeAt;
    const a = braking ? -w * w * x - 2 * spring.damping * w * v : 0;
    v += a * step;
    x += v * step;
    // Braking pushes leftwards motion back to the right, so the top tips forward, to the left
    const turn =
      -wt * wt * angle - 2 * tilt.damping * wt * spin - a / tilt.height;
    spin += turn * step;
    angle += spin * step;
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

function stop() {
  animation?.cancel();
}

const reducedMotion =
  typeof matchMedia === "function" &&
  matchMedia("(prefers-reduced-motion: reduce)").matches;

onSlideEnter(() => {
  if (reducedMotion || !box.value) return;
  stop();
  const frames = simulate();
  animation = box.value.animate(frames, {
    duration: (frames.length - 1) * frame * 1000,
    // Waits off the slide until the slide has faded in, so the whole run is seen
    delay: fadeDuration(),
    fill: "backwards",
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
