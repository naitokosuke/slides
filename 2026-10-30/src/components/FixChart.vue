<!--
  One dot per issue: when it was filed (x) against hours until it was closed (y, log scale).
  Each dot links to its issue, and hovering one shows the issue's number, title and time to close.
-->
<script setup lang="ts">
import { sanitizeUrl } from "@braintree/sanitize-url";
import { computed, ref } from "vue";
import { issues } from "../data/issues";
import { formatMinutes, minutesToClose } from "../data/time";

const width = 820;
const height = 360;
const pad = { top: 16, right: 24, bottom: 36, left: 56 };

// The hover card, in viewBox units
const cardWidth = 300;
const cardHeight = 110;
const cardGap = 14;

const start = Date.parse("2026-06-01T00:00:00Z");
const end = Date.parse("2026-11-01T00:00:00Z");
const minHours = 0.5;
const maxHours = 200;

const x = (t: number) =>
  pad.left + ((t - start) / (end - start)) * (width - pad.left - pad.right);
const y = (hours: number) =>
  pad.top +
  (1 - Math.log(hours / minHours) / Math.log(maxHours / minHours)) *
    (height - pad.top - pad.bottom);

const dots = issues.map((issue) => {
  const minutes = minutesToClose(issue.filed, issue.closed);
  return {
    ...issue,
    label: formatMinutes(minutes),
    cx: x(Date.parse(issue.filed)),
    cy: y(minutes / 60),
  };
});

const hourTicks = [1, 6, 24, 96].map((h) => ({
  y: y(h),
  label: h >= 24 ? `${h / 24}d` : `${h}h`,
}));
const months = ["Jun", "Jul", "Aug", "Sep", "Oct"].map((label, i) => ({
  x: x(Date.UTC(2026, 5 + i, 1)),
  label,
}));

const active = ref<(typeof dots)[number] | null>(null);

// Beside the dot, on whichever side has room, and kept inside the chart
const card = computed(() => {
  const dot = active.value;
  if (!dot) return null;
  const left = dot.cx + cardGap + cardWidth <= width;
  return {
    x: left ? dot.cx + cardGap : dot.cx - cardGap - cardWidth,
    y: Math.min(Math.max(dot.cy - cardHeight / 2, 0), height - cardHeight),
  };
});
</script>

<template>
  <figure class="fix-chart fill">
    <svg
      :viewBox="`0 0 ${width} ${height}`"
      role="img"
      aria-label="Hours to close per issue"
    >
      <g class="grid">
        <line
          v-for="tick in hourTicks"
          :key="tick.label"
          :x1="pad.left"
          :x2="width - pad.right"
          :y1="tick.y"
          :y2="tick.y"
        />
      </g>
      <g class="axis">
        <text
          v-for="tick in hourTicks"
          :key="tick.label"
          :x="pad.left - 12"
          :y="tick.y"
          text-anchor="end"
          dominant-baseline="middle"
        >
          {{ tick.label }}
        </text>
        <text
          v-for="month in months"
          :key="month.label"
          :x="month.x"
          :y="height - 8"
          text-anchor="start"
        >
          {{ month.label }}
        </text>
      </g>
      <a
        v-for="dot in dots"
        :key="dot.number"
        class="dot"
        :class="{ repro: dot.repro, active: active === dot }"
        :href="sanitizeUrl(dot.url)"
        :aria-label="`#${dot.number} ${dot.title}`"
        target="_blank"
        rel="noopener noreferrer"
        @mouseenter="active = dot"
        @mouseleave="active = null"
        @focus="active = dot"
        @blur="active = null"
      >
        <circle :cx="dot.cx" :cy="dot.cy" />
      </a>
      <foreignObject
        v-if="active && card"
        :x="card.x"
        :y="card.y"
        :width="cardWidth"
        :height="cardHeight"
        class="hover"
      >
        <div class="card">
          <header>
            <span>#{{ active.number }}</span>
            <span>{{ active.label }} to close</span>
          </header>
          <section>
            <p class="title">{{ active.title }}</p>
            <p v-if="active.repro" class="label">with a repro repo</p>
          </section>
        </div>
      </foreignObject>
    </svg>
    <figcaption>
      <span class="key"><i class="repro" /> with a repro repo</span>
      <span class="key"><i /> without</span>
    </figcaption>
  </figure>
</template>

<style scoped>
.fix-chart {
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  gap: var(--space-2);
  margin: 0;
}

svg {
  width: 100%;
  height: 100%;
  overflow: visible;
}

.grid line {
  stroke: var(--color-border);
  stroke-dasharray: var(--dash);
}

.axis text {
  fill: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
}

.dot {
  cursor: pointer;
}

.dot:focus-visible {
  outline: none;
}

circle {
  r: var(--size-chart-dot);
  fill: var(--color-bg);
  stroke: var(--color-pool);
  stroke-width: var(--stroke-width);
  transition: r var(--duration-fast) var(--easing-out);
}

.repro circle {
  fill: var(--color-accent);
  stroke: var(--color-accent);
}

.active circle {
  r: var(--size-chart-dot-active);
}

.hover {
  overflow: visible;
  pointer-events: none;
}

.hover .card {
  font-size: var(--text-xs);
  box-shadow: var(--shadow-raised);
}

.hover header {
  justify-content: space-between;
}

.hover .title {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--clamp-title);
  font-size: var(--text-sm);
  line-height: var(--leading-tight);
}

figcaption {
  display: flex;
  justify-content: flex-end;
  gap: var(--space-5);
  color: var(--color-text-muted);
  font-size: var(--text-sm);
}

.key {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
}

.key i {
  width: var(--size-dot);
  height: var(--size-dot);
  border: var(--stroke-width) solid var(--color-pool);
  border-radius: var(--radius-full);
}

.key i.repro {
  border-color: var(--color-accent);
  background: var(--color-accent);
}
</style>
