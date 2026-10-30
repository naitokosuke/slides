<!--
  Ferris, the Rust crab, walking sideways across the whole parser block, over the words too.
  Each step picks a random length, sometimes a turn, and a random pause, so the walk never loops.
  Sits still when motion is reduced.
-->
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

// Step length in px, walking speed in px per ms, longest pause between steps in ms
const stepMin = 8;
const stepMax = 40;
const speed = 0.12;
const pauseMax = 300;
const turnChance = 0.15;

const el = ref<HTMLImageElement>();
const x = ref(0);
const duration = ref(0);
let heading = Math.random() < 0.5 ? -1 : 1;
let timer = 0;

const reducedMotion =
  typeof matchMedia === "function" &&
  matchMedia("(prefers-reduced-motion: reduce)").matches;

// How far it can go: the block's inner width minus its own
function reach() {
  const img = el.value;
  const block = img?.parentElement;
  return img && block ? Math.max(block.clientWidth - img.clientWidth, 0) : 0;
}

function step() {
  const max = reach();
  if (Math.random() < turnChance) heading = -heading;
  let next =
    x.value + heading * (stepMin + Math.random() * (stepMax - stepMin));
  if (next < 0 || next > max) {
    heading = -heading;
    next = Math.min(Math.max(next, 0), max);
  }
  duration.value = Math.abs(next - x.value) / speed;
  x.value = next;
  timer = window.setTimeout(step, duration.value + Math.random() * pauseMax);
}

onMounted(() => {
  x.value = Math.random() * reach();
  if (!reducedMotion) step();
});
onBeforeUnmount(() => window.clearTimeout(timer));
</script>

<template>
  <img
    ref="el"
    class="ferris"
    src="/ferris.svg"
    alt="Rust"
    :style="{
      transform: `translateX(${x}px)`,
      transitionDuration: `${duration}ms`,
    }"
  />
</template>

<style scoped>
.ferris {
  transition-property: transform;
  transition-timing-function: ease-in-out;
}
</style>
