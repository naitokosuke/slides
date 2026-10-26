<!-- All 30 issues as closed badges, each with the time it took to close and a link to the issue -->
<script setup lang="ts">
import { sanitizeUrl } from "@braintree/sanitize-url";
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
        class="link-box"
        :href="sanitizeUrl(issue.url)"
        target="_blank"
        rel="noopener noreferrer"
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
  font-size: var(--text-sm);
}

.time {
  margin-left: auto;
  color: var(--color-text-muted);
}
</style>
