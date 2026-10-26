<!-- All 30 issues as closed badges, each with the time it took to close and a link to the issue -->
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
      <a
        :href="`https://github.com/ubugeeei-prod/vize/issues/${issue.number}`"
        target="_blank"
        rel="noopener"
      >
        <ClosedIcon />
        <span>#{{ issue.number }}</span>
        <span class="time">{{ timeToClose(issue.filed, issue.closed) }}</span>
      </a>
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

.wall a {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  border: var(--border-width) solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  color: var(--color-text);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  text-decoration: none;
  transition:
    translate var(--duration-fast) var(--easing-out),
    border-color var(--duration-fast) var(--easing-out),
    box-shadow var(--duration-fast) var(--easing-out);
}

.wall a:hover,
.wall a:focus-visible {
  translate: 0 var(--lift);
  border-color: var(--color-accent);
  box-shadow: var(--shadow-raised);
  outline: none;
}

@media (prefers-reduced-motion: reduce) {
  .wall a:hover,
  .wall a:focus-visible {
    translate: none;
  }
}

.time {
  margin-left: auto;
  color: var(--color-text-muted);
}
</style>
