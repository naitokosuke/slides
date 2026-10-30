<!--
  A sign hung on two cords from a hook well above the slide. On a click it is let go from above
  the top edge and falls: the cords are slack at first and flop about, then straighten and catch it
  with a jolt, it swings, and the cords bow with the swing until everything hangs still. The left
  cord is a little shorter than the right, so it hangs askew once still. It takes one click of
  the slide, like v-click. Stepping back lifts it out of sight; arriving with the click already
  made (from the next slide, or when printing) shows it at rest.

  The motion is a particle simulation run every frame, not keyframes: each cord is a chain of
  points joined by distance constraints that only pull (so a cord can go slack but not stretch),
  the plate is four heavy points held rigid by six more constraints, and the hook is pinned. The
  same scheme as a rope in a physics engine, in two dimensions.
-->
<script setup lang="ts">
import { onSlideEnter, useSlideContext } from "@slidev/client";
import { onMounted, onUnmounted, useTemplateRef, watch } from "vue";

const gravity = 2500; // px/s², a world where the slide is about 4 m tall
const hookAbove = 520; // px above the top edge of the slide the cords hang from
const segments = 16; // points per cord
const spread = 0.1; // the cords meet the plate this share of its width either side of the centre
const shorter = 0.02; // the left cord is this much shorter, so the plate hangs askew
// Only a little heavier than the cord, or the catch throws the plate back up: a heavy plate makes
// the solver squeeze the cord first and the cord then snaps back like a spring
const plateWeight = 2;
const clearance = 40; // px above the slide the plate is let go from
const crimp = 24; // px the slack cords zigzag by before the drop, so they flop instead of unrolling
const keep = { cord: 0.1, plate: 0.5 }; // share of the speed left after a second of air drag
// Share of the speed along a taut cord taken out at every substep. A real cord does not carry a
// jolt up to the hook and back down like a spring; without this the plate bounces back up
const stiffness = 0.5;
// A fixed substep, so the motion is the same at 60 and 120 frames a second. Small substeps rather
// than many iterations are what keep a cord from stretching like a spring
const substep = 1 / 1440; // s
const iterations = 12;
const stillFor = 30; // frames nothing moves before the simulation stops
const stillBelow = 0.05; // px per frame that counts as not moving
const longest = 10; // s, in case it never hangs still

type Point = { x: number; y: number; px: number; py: number; w: number };

function point(x: number, y: number, w: number): Point {
  return { x, y, px: x, py: y, w };
}

// Moves the points apart or together to the given distance, the lighter one further
function pull(a: Point, b: Point, rest: number, onlyWhenLonger: boolean) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const d = Math.hypot(dx, dy);
  if (d === 0 || (onlyWhenLonger && d <= rest)) return;
  const total = a.w + b.w;
  if (total === 0) return;
  const k = (d - rest) / d / total;
  a.x += dx * k * a.w;
  a.y += dy * k * a.w;
  b.x -= dx * k * b.w;
  b.y -= dy * k * b.w;
}

// Takes the speed along a taut cord out of its two ends, so a jolt dies in the cord
function soak(a: Point, b: Point, rest: number) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const d = Math.hypot(dx, dy);
  const total = a.w + b.w;
  if (d < rest * 0.999 || total === 0) return;
  const nx = dx / d;
  const ny = dy / d;
  const along =
    (b.x - b.px - (a.x - a.px)) * nx + (b.y - b.py - (a.y - a.py)) * ny;
  const j = (along * stiffness) / total;
  a.px -= nx * j * a.w;
  a.py -= ny * j * a.w;
  b.px += nx * j * b.w;
  b.py += ny * j * b.w;
}

type World = {
  hook: Point;
  left: Point[]; // from the hook to the plate
  right: Point[];
  plate: Point[]; // left and right cord ends on the top edge, then the bottom right and left corners
  sticks: [Point, Point, number][];
  segment: { left: number; right: number };
  rest: { x: number; y: number }; // where the left cord meets the plate when it hangs straight
  origin: { x: number; y: number }; // the plate's top left corner at rest
};

function build(
  width: number,
  plate: { left: number; top: number; width: number; height: number },
  lifted: boolean,
): World {
  const hook = point(width / 2, -hookAbove, 0);
  const lift = lifted ? plate.top + plate.height + clearance : 0;
  const top = plate.top - lift;
  const ax = plate.left + plate.width * (0.5 - spread);
  const bx = plate.left + plate.width * (0.5 + spread);
  const a = point(ax, top, 1 / plateWeight);
  const b = point(bx, top, 1 / plateWeight);
  const c = point(
    plate.left + plate.width,
    top + plate.height,
    1 / plateWeight,
  );
  const d = point(plate.left, top + plate.height, 1 / plateWeight);
  const corners = [a, b, c, d];
  const sticks: World["sticks"] = [];
  for (let i = 0; i < corners.length; i++)
    for (let j = i + 1; j < corners.length; j++) {
      const p = corners[i];
      const q = corners[j];
      sticks.push([p, q, Math.hypot(q.x - p.x, q.y - p.y)]);
    }

  const length = Math.hypot(bx - hook.x, plate.top - hook.y);
  const chain = (end: Point, side: number) => {
    const points = [hook];
    for (let i = 1; i < segments; i++) {
      const t = i / segments;
      // Perpendicular to the cord, alternating sides
      const x = hook.x + (end.x - hook.x) * t;
      const y = hook.y + (end.y - hook.y) * t;
      const dx = end.x - hook.x;
      const dy = end.y - hook.y;
      const n = Math.hypot(dx, dy) || 1;
      const zig = lifted ? crimp * (i % 2 ? 1 : -1) * side : 0;
      points.push(point(x + (-dy / n) * zig, y + (dx / n) * zig, 1));
    }
    points.push(end);
    return points;
  };

  return {
    hook,
    left: chain(a, 1),
    right: chain(b, -1),
    plate: corners,
    sticks,
    segment: {
      left: (length * (1 - shorter)) / segments,
      right: length / segments,
    },
    rest: { x: ax, y: plate.top },
    origin: { x: plate.left, y: plate.top },
  };
}

// One frame of the simulation; returns how far the farthest point moved
function advance(world: World, dt: number) {
  const steps = Math.max(1, Math.round(dt / substep));
  const dragCord = keep.cord ** substep;
  const dragPlate = keep.plate ** substep;
  const all = [
    ...world.left.slice(1, -1),
    ...world.right.slice(1, -1),
    ...world.plate,
  ];
  let moved = 0;
  for (let s = 0; s < steps; s++) {
    for (const p of all) {
      const drag = world.plate.includes(p) ? dragPlate : dragCord;
      const vx = (p.x - p.px) * drag;
      const vy = (p.y - p.py) * drag;
      p.px = p.x;
      p.py = p.y;
      p.x += vx;
      p.y += vy + gravity * substep * substep;
    }
    for (let i = 0; i < iterations; i++) {
      for (const [a, b, rest] of world.sticks) pull(a, b, rest, false);
      for (let j = 1; j < world.left.length; j++)
        pull(world.left[j - 1], world.left[j], world.segment.left, true);
      for (let j = 1; j < world.right.length; j++)
        pull(world.right[j - 1], world.right[j], world.segment.right, true);
    }
    for (let j = 1; j < world.left.length; j++)
      soak(world.left[j - 1], world.left[j], world.segment.left);
    for (let j = 1; j < world.right.length; j++)
      soak(world.right[j - 1], world.right[j], world.segment.right);
  }
  for (const p of all)
    moved = Math.max(moved, Math.hypot(p.x - p.px, p.y - p.py));
  return moved;
}

const el = useTemplateRef("el");
const plate = useTemplateRef("plate");
const leftPath = useTemplateRef("leftPath");
const rightPath = useTemplateRef("rightPath");

let world: World | undefined;
let frame = 0;

function trace(points: Point[]) {
  return points
    .map((p, i) => `${i ? "L" : "M"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
    .join(" ");
}

function draw() {
  if (!world || !plate.value || !leftPath.value || !rightPath.value) return;
  const [a, b] = world.plate;
  const angle = Math.atan2(b.y - a.y, b.x - a.x);
  plate.value.style.transform = `translate(${(a.x - world.rest.x).toFixed(2)}px, ${(a.y - world.rest.y).toFixed(2)}px) rotate(${angle.toFixed(4)}rad)`;
  leftPath.value.setAttribute("d", trace(world.left));
  rightPath.value.setAttribute("d", trace(world.right));
}

// Nothing to measure while the slide is hidden: every slide stays mounted, shown or not
function measure() {
  const box = el.value;
  const p = plate.value;
  if (!box || !p || box.clientWidth === 0) return;
  return {
    width: box.clientWidth,
    plate: {
      left: p.offsetLeft,
      top: p.offsetTop,
      width: p.offsetWidth,
      height: p.offsetHeight,
    },
  };
}

function stop() {
  cancelAnimationFrame(frame);
  frame = 0;
}

// Held above the slide, out of sight, with the cords slack
function lift() {
  stop();
  const m = measure();
  if (!m) return;
  world = build(m.width, m.plate, true);
  draw();
}

// Hanging still, as it ends up after the drop, without showing the drop
function rest() {
  stop();
  const m = measure();
  if (!m) return;
  world = build(m.width, m.plate, false);
  let still = 0;
  for (let i = 0; i < longest * 60 && still < stillFor; i++)
    still = advance(world, 1 / 60) < stillBelow ? still + 1 : 0;
  draw();
}

function drop() {
  lift();
  if (!world) return;
  let last = performance.now();
  const started = last;
  let still = 0;
  const tick = (now: number) => {
    const dt = Math.min((now - last) / 1000, 1 / 30);
    last = now;
    const moved = advance(world!, dt);
    draw();
    still = moved < stillBelow ? still + 1 : 0;
    if (still < stillFor && now - started < longest * 1000)
      frame = requestAnimationFrame(tick);
  };
  frame = requestAnimationFrame(tick);
}

const reducedMotion =
  typeof matchMedia === "function" &&
  matchMedia("(prefers-reduced-motion: reduce)").matches;

const { $clicksContext: clicks, $clicks } = useSlideContext();
let start = 1;

// Out of sight before its click, dropped on the click, hanging still otherwise
function apply(now: number, before?: number) {
  if (now < start) lift();
  else if (before !== undefined && before < start && !reducedMotion) drop();
  else rest();
}

onMounted(() => {
  const box = el.value;
  if (!box) return;
  // Takes the next click of the slide, as v-click would
  const info = clicks.calculate("+1");
  if (info) clicks.register(box, info);
  start = info?.start ?? 1;
  watch($clicks, apply, { immediate: true });
});
// The slide is laid out only from the frame after it is shown, and the pose needs its size
onSlideEnter(() => {
  stop();
  frame = requestAnimationFrame(() => apply($clicks.value));
});
onUnmounted(() => {
  if (el.value) clicks.unregister(el.value);
  stop();
});
</script>

<template>
  <div ref="el" class="drop-sign">
    <svg class="cords" aria-hidden="true">
      <path ref="leftPath" />
      <path ref="rightPath" />
    </svg>
    <div ref="plate" class="plate"><slot /></div>
  </div>
</template>

<style scoped>
/* Covers the slide; the cords and the plate are placed in its pixels */
.drop-sign {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.cords {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  fill: none;
  stroke: var(--color-text);
  stroke-width: var(--rule-thick);
  stroke-linecap: round;
  stroke-linejoin: round;
}

/*
  A yellow plate with royal type, like a caution sign. It covers the slide, headline included, to
  a margin, and is moved and turned about the point where the left cord meets its top edge
*/
.plate {
  position: absolute;
  inset: var(--space-6);
  display: grid;
  align-content: center;
  justify-items: center;
  gap: var(--space-5);
  padding: var(--space-6);
  border: var(--border-width) solid var(--color-text);
  border-radius: var(--radius-md);
  background: var(--color-accent);
  line-height: var(--leading-tight);
  text-align: center;
  white-space: nowrap;
  transform-origin: 40% 0;
}

/* The warning, then why, both read from the back of the room */
.plate :slotted(strong) {
  font-size: var(--text-display);
}

.plate :slotted(span) {
  font-size: var(--text-headline);
}
</style>
