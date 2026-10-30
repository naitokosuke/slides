<!--
  A sign on two cords that drops in from the top edge of the slide on a click and covers it,
  headline included, to a margin. It takes one click of the slide, like v-click. The cords are of
  different lengths, so it hangs a little askew even once it is still. On that click it falls under gravity, the cords catch it and stretch
  like a spring, it bounces back up until they go slack and falls again, and so on until it hangs
  still. All the while it swings about the hook like a pendulum, and the jolt of each catch feeds
  the swing, so it rocks hardest just as it lands. The motion is simulated, not hand-keyed, as in
  BrakeIn. Stepping back lifts it out of sight; arriving with the click already made (from the next
  slide, or when printing) shows it at rest.
-->
<script setup lang="ts">
import { useSlideContext } from "@slidev/client";
import { onMounted, onUnmounted, ref, useTemplateRef, watch } from "vue";

const gravity = 4000; // px/s², a world where the slide is about 2.5 m tall
const clearance = 24; // px above the slide it is let go from
// Cords: how fast they spring once taut, in Hz, and their damping ratio (under 1, so it bounces)
const cord = { frequency: 8, damping: 0.35 };
// Swing: how far askew it is let go, in degrees, and its damping ratio
const swing = { start: 5, damping: 0.35 };
// How far the plate hangs askew once still, in degrees: the cords are that different in length
const tilt = 3;
// Where the cords meet the plate, as a share of its width either side of the centre
const spread = 0.1;

const step = 1 / 1000; // s, for the simulation
const frame = 1 / 60; // s, between keyframes
const longest = 6; // s, in case it never hangs still

/**
 * height: the whole thing's height in px, so it starts clear of the slide
 * reach: px from the hook to the plate's centre, which sets how fast it swings
 */
function simulate(height: number, reach: number) {
  const wc = 2 * Math.PI * cord.frequency;
  const wp = Math.sqrt(gravity / reach);
  // How far the cords stretch under the sign's weight, so that it rests at 0
  const sag = gravity / (wc * wc);
  let y = -(height + clearance);
  let v = 0;
  let angle = (swing.start * Math.PI) / 180;
  let spin = 0;
  const frames: Keyframe[] = [];
  const every = Math.round(frame / step);
  for (let i = 0; i <= longest / step; i++) {
    if (i % every === 0) {
      frames.push({
        transform: `translateY(${y}px) rotate(${(angle * 180) / Math.PI}deg)`,
      });
      // Still to well under a pixel at the plate's corners, so the last frame does not show as a jump
      const still =
        Math.abs(y) < 0.1 &&
        Math.abs(v) < 1 &&
        Math.abs(angle) < 0.0003 &&
        Math.abs(spin) < 0.002;
      if (i > 0 && still) break;
    }
    // Gravity, plus the cords once they are taut: a spring that only pulls
    const taut = y > -sag;
    const a =
      gravity + (taut ? -wc * wc * (y + sag) - 2 * cord.damping * wc * v : 0);
    v += a * step;
    y += v * step;
    // Seen from the sign, the hook's acceleration adds to gravity: none in free fall, a jolt at each catch
    const pull = gravity - a;
    spin +=
      (-(pull / reach) * Math.sin(angle) - 2 * swing.damping * wp * spin) *
      step;
    angle += spin * step;
  }
  frames.push({ transform: "none" });
  return frames;
}

const el = useTemplateRef("el");
const plate = useTemplateRef("plate");
let animation: Animation | undefined;

// The cords run from the hook, at the top centre, to the plate's top edge as it hangs tilted
const ends = ref<{ x: number; y: number }[]>([]);
function hang() {
  const p = plate.value;
  if (!p) return;
  const cx = p.offsetLeft + p.offsetWidth / 2;
  const cy = p.offsetTop + p.offsetHeight / 2;
  const t = (tilt * Math.PI) / 180;
  ends.value = [-spread, spread].map((share) => {
    const dx = share * p.offsetWidth;
    const dy = -p.offsetHeight / 2;
    return {
      x: cx + dx * Math.cos(t) - dy * Math.sin(t),
      y: cy + dx * Math.sin(t) + dy * Math.cos(t),
    };
  });
}

const reducedMotion =
  typeof matchMedia === "function" &&
  matchMedia("(prefers-reduced-motion: reduce)").matches;

function stop() {
  animation?.cancel();
  animation = undefined;
}

// Out of sight above the slide, without needing its height
function lift() {
  stop();
  if (el.value) el.value.style.transform = "translateY(-200%)";
}

function rest() {
  stop();
  if (el.value) el.value.style.transform = "";
}

function drop() {
  const box = el.value;
  if (!box || !plate.value) return;
  rest();
  const reach = plate.value.offsetTop + plate.value.offsetHeight / 2;
  const frames = simulate(box.offsetHeight, reach);
  animation = box.animate(frames, {
    duration: (frames.length - 1) * frame * 1000,
  });
}

const { $clicksContext: clicks, $clicks } = useSlideContext();

onMounted(() => {
  const box = el.value;
  if (!box) return;
  hang();
  // Takes the next click of the slide, as v-click would
  const info = clicks.calculate("+1");
  if (info) clicks.register(box, info);
  const start = info?.start ?? 1;
  watch(
    $clicks,
    (now, before) => {
      if (now < start) lift();
      else if (before !== undefined && before < start && !reducedMotion) drop();
      else rest();
    },
    { immediate: true },
  );
});
onUnmounted(() => {
  if (el.value) clicks.unregister(el.value);
  stop();
});
</script>

<template>
  <div ref="el" class="drop-sign">
    <svg class="cords" aria-hidden="true">
      <line
        v-for="end in ends"
        :key="end.x"
        x1="50%"
        y1="0"
        :x2="end.x"
        :y2="end.y"
      />
    </svg>
    <div ref="plate" class="plate" :style="{ rotate: `${tilt}deg` }">
      <slot />
    </div>
  </div>
</template>

<style scoped>
/*
  Hangs from a hook above the top edge of the slide, which is also what it swings about, so the
  cords come in from the edge and the plate covers the slide, headline included, to a margin
*/
.drop-sign {
  position: absolute;
  inset: calc(var(--space-6) - var(--size-sign-cord)) var(--space-6)
    var(--space-6);
  display: grid;
  padding-top: var(--size-sign-cord);
  transform-origin: 50% 0;
}

.cords {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  stroke: var(--color-text);
  stroke-width: var(--rule-thick);
  stroke-linecap: round;
}

/* A yellow plate with royal type, like a caution sign */
.plate {
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
}

/* The warning, then why, both read from the back of the room */
.plate :slotted(strong) {
  font-size: var(--text-display);
}

.plate :slotted(span) {
  font-size: var(--text-headline);
}
</style>
