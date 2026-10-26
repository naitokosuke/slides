<!--
  All 30 issues as circles whose area is proportional to the time each took to close.
  The circles push each other apart and are pulled toward the middle, so they settle into a cluster.
  Each one links to its issue and can be dragged into the others.
-->
<script setup lang="ts">
import { sanitizeUrl } from "@braintree/sanitize-url";
import { onSlideEnter, onSlideLeave } from "@slidev/client";
import { onBeforeUnmount, onMounted, reactive, useTemplateRef } from "vue";
import { issues } from "../data/issues";
import { formatMinutes, minutesToClose } from "../data/time";

const width = 880;
const height = 400;

// Area follows minutes to close; the floor keeps the fastest ones big enough to read
const maxRadius = 84;
const minRadius = 27;
const gap = 3;

// Simulation tuning, in viewBox units per frame
const pullX = 0.0018;
const pullY = 0.006;
const repelRange = 18;
const repelStrength = 0.06;
const damping = 0.86;
const restSpeed = 0.02;

// Deterministic scatter, so every run starts from the same layout
function seeded(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4_294_967_296;
  };
}

// Deeper blue for longer waits: lagoon under 6 hours, pool under a day, deep blue past that
function depthOf(minutes: number) {
  if (minutes < 60 * 6) return "lagoon";
  if (minutes < 60 * 24) return "pool";
  return "deep";
}

const longest = Math.max(
  ...issues.map((i) => minutesToClose(i.filed, i.closed)),
);

type Bubble = {
  number: number;
  url: string;
  label: string;
  depth: string;
  r: number;
  mass: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  held: boolean;
};

const bubbles = reactive<Bubble[]>(
  issues.map((issue) => {
    const minutes = minutesToClose(issue.filed, issue.closed);
    const r = Math.max(maxRadius * Math.sqrt(minutes / longest), minRadius);
    return {
      number: issue.number,
      url: issue.url,
      label: formatMinutes(minutes),
      depth: depthOf(minutes),
      r,
      mass: r * r,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      held: false,
    };
  }),
);

function scatter() {
  const random = seeded(20261030);
  for (const b of bubbles) {
    b.x = b.r + random() * (width - 2 * b.r);
    b.y = b.r + random() * (height - 2 * b.r);
    b.vx = 0;
    b.vy = 0;
  }
}

function step() {
  for (const b of bubbles) {
    if (b.held) continue;
    b.vx += (width / 2 - b.x) * pullX;
    b.vy += (height / 2 - b.y) * pullY;
  }

  for (let i = 0; i < bubbles.length; i++) {
    for (let j = i + 1; j < bubbles.length; j++) {
      const a = bubbles[i];
      const b = bubbles[j];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const distance = Math.hypot(dx, dy) || 0.01;
      const touching = a.r + b.r + gap;
      if (distance >= touching + repelRange) continue;

      const nx = dx / distance;
      const ny = dy / distance;
      // The lighter circle gives way more; a held circle does not move at all
      const share = a.held ? 0 : b.held ? 1 : b.mass / (a.mass + b.mass);

      if (distance < touching) {
        const overlap = touching - distance;
        a.x -= nx * overlap * share;
        a.y -= ny * overlap * share;
        b.x += nx * overlap * (1 - share);
        b.y += ny * overlap * (1 - share);
      }

      const push =
        (repelStrength * (touching + repelRange - distance)) / repelRange;
      a.vx -= nx * push * share;
      a.vy -= ny * push * share;
      b.vx += nx * push * (1 - share);
      b.vy += ny * push * (1 - share);
    }
  }

  let fastest = 0;
  for (const b of bubbles) {
    if (b.held) continue;
    b.vx *= damping;
    b.vy *= damping;
    b.x = Math.min(Math.max(b.x + b.vx, b.r), width - b.r);
    b.y = Math.min(Math.max(b.y + b.vy, b.r), height - b.r);
    fastest = Math.max(fastest, Math.hypot(b.vx, b.vy));
  }
  // A single pass leaves overlaps in a crowded cluster, so push apart a few more times
  for (let pass = 0; pass < 3; pass++) separate();
  // The pushes can move a circle past a wall, so put it back inside
  for (const b of bubbles) {
    b.x = Math.min(Math.max(b.x, b.r), width - b.r);
    b.y = Math.min(Math.max(b.y, b.r), height - b.r);
  }
  return fastest;
}

function separate() {
  for (let i = 0; i < bubbles.length; i++) {
    for (let j = i + 1; j < bubbles.length; j++) {
      const a = bubbles[i];
      const b = bubbles[j];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const distance = Math.hypot(dx, dy) || 0.01;
      const overlap = a.r + b.r + gap - distance;
      if (overlap <= 0) continue;
      const share = a.held ? 0 : b.held ? 1 : b.mass / (a.mass + b.mass);
      a.x -= (dx / distance) * overlap * share;
      a.y -= (dy / distance) * overlap * share;
      b.x += (dx / distance) * overlap * (1 - share);
      b.y += (dy / distance) * overlap * (1 - share);
    }
  }
}

let frame = 0;

function run() {
  cancelAnimationFrame(frame);
  const tick = () => {
    const fastest = step();
    if (fastest > restSpeed || bubbles.some((b) => b.held)) {
      frame = requestAnimationFrame(tick);
    }
  };
  frame = requestAnimationFrame(tick);
}

function settleAtOnce() {
  for (let i = 0; i < 800; i++) step();
}

const reducedMotion =
  typeof matchMedia === "function" &&
  matchMedia("(prefers-reduced-motion: reduce)").matches;

function start() {
  scatter();
  if (reducedMotion) settleAtOnce();
  else run();
}

// Dragging: the held circle follows the pointer and shoves the others
const svg = useTemplateRef<SVGSVGElement>("svg");
let dragged: Bubble | null = null;
let moved = false;

function toViewBox(event: PointerEvent) {
  const matrix = svg.value?.getScreenCTM()?.inverse();
  if (!matrix) return null;
  return new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix);
}

function grab(bubble: Bubble, event: PointerEvent) {
  dragged = bubble;
  moved = false;
  bubble.held = true;
  (event.currentTarget as Element).setPointerCapture(event.pointerId);
  run();
}

function drag(event: PointerEvent) {
  if (!dragged) return;
  const point = toViewBox(event);
  if (!point) return;
  if (Math.hypot(point.x - dragged.x, point.y - dragged.y) > 2) moved = true;
  dragged.x = Math.min(Math.max(point.x, dragged.r), width - dragged.r);
  dragged.y = Math.min(Math.max(point.y, dragged.r), height - dragged.r);
}

function release() {
  if (!dragged) return;
  dragged.held = false;
  dragged = null;
  run();
}

// A drag should not also open the issue
function follow(event: MouseEvent) {
  if (moved) event.preventDefault();
  moved = false;
}

// Settled straight away for the overview and exports; animated from a scatter when the slide is shown
onMounted(() => {
  scatter();
  settleAtOnce();
});
onSlideEnter(start);
onSlideLeave(() => cancelAnimationFrame(frame));
onBeforeUnmount(() => cancelAnimationFrame(frame));
</script>

<template>
  <svg
    ref="svg"
    class="bubbles fill"
    :viewBox="`0 0 ${width} ${height}`"
    role="img"
    aria-label="Issues sized by time to close"
    @pointermove="drag"
    @pointerup="release"
    @pointercancel="release"
  >
    <a
      v-for="b in bubbles"
      :key="b.number"
      :class="['bubble', b.depth]"
      :href="sanitizeUrl(b.url)"
      target="_blank"
      rel="noopener noreferrer"
      :transform="`translate(${b.x} ${b.y})`"
      @pointerdown="grab(b, $event)"
      @click="follow"
    >
      <circle :r="b.r" />
      <text class="number" :font-size="Math.min(b.r * 0.34, 22)" dy="-0.15em">
        #{{ b.number }}
      </text>
      <text class="time" :font-size="Math.min(b.r * 0.3, 18)" dy="1.05em">
        {{ b.label }}
      </text>
    </a>
  </svg>
</template>

<style scoped>
.bubbles {
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
  touch-action: none;
  user-select: none;
}

.bubble {
  cursor: grab;
}

.bubble:active {
  cursor: grabbing;
}

.bubble {
  --bubble-fill: var(--color-pool);
  --bubble-text: var(--color-white);
}

.bubble.lagoon {
  --bubble-fill: var(--color-lagoon);
}

.bubble.deep {
  --bubble-fill: var(--color-deep);
}

.bubble circle {
  fill: var(--bubble-fill);
  stroke: var(--bubble-fill);
  stroke-width: var(--stroke-width);
  transition: stroke var(--duration-fast) var(--easing-out);
}

.bubble:hover circle,
.bubble:focus-visible circle {
  stroke: var(--color-accent);
}

.bubble:focus-visible {
  outline: none;
}

.bubble text {
  fill: var(--bubble-text);
  font-family: var(--font-mono);
  text-anchor: middle;
  pointer-events: none;
}

.time {
  opacity: var(--opacity-secondary);
}
</style>
