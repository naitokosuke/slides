<!-- One dot per issue: when it was filed (x) against hours until it was closed (y, log scale) -->
<script setup lang="ts">
import { issues } from "../data/issues";

const width = 820;
const height = 360;
const pad = { top: 16, right: 24, bottom: 36, left: 56 };

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
  const filed = Date.parse(issue.filed);
  const hours = (Date.parse(issue.closed) - filed) / 3_600_000;
  return { ...issue, cx: x(filed), cy: y(hours) };
});

const hourTicks = [1, 6, 24, 96].map((h) => ({
  y: y(h),
  label: h >= 24 ? `${h / 24}d` : `${h}h`,
}));
const months = ["Jun", "Jul", "Aug", "Sep", "Oct"].map((label, i) => ({
  x: x(Date.UTC(2026, 5 + i, 1)),
  label,
}));
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
      <circle
        v-for="dot in dots"
        :key="dot.number"
        :cx="dot.cx"
        :cy="dot.cy"
        :class="{ repro: dot.repro }"
      />
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

circle {
  r: var(--size-chart-dot);
  fill: var(--color-bg);
  stroke: var(--color-accent);
  stroke-width: var(--stroke-width);
}

circle.repro {
  fill: var(--color-accent);
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
  border: var(--stroke-width) solid var(--color-accent);
  border-radius: var(--radius-full);
}

.key i.repro {
  background: var(--color-accent);
}
</style>
