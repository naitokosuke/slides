<!-- All 30 issues as closed badges, each with the time it took to close -->
<script setup lang="ts">
import { issues } from "../data/issues";

function timeToClose(filed: string, closed: string) {
  const minutes = (Date.parse(closed) - Date.parse(filed)) / 60_000;
  if (minutes < 60) return `${Math.floor(minutes)}m`;
  if (minutes < 60 * 24) return `${(minutes / 60).toFixed(1)}h`;
  return `${(minutes / 60 / 24).toFixed(1)}d`;
}
</script>

<template>
  <ul class="wall">
    <li v-for="issue in issues" :key="issue.number">
      <ClosedIcon />
      <span>#{{ issue.number }}</span>
      <span class="time">{{ timeToClose(issue.filed, issue.closed) }}</span>
    </li>
  </ul>
</template>

<style scoped>
.wall {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--space-3);
  margin: 0;
  padding: 0;
  list-style: none;
}

.wall li {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  border: var(--border-width) solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
}

.time {
  margin-left: auto;
  color: var(--color-text-muted);
}
</style>
