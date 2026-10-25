<!-- All 30 issues as closed badges -->
<script setup lang="ts">
import { issues } from "../data/issues";
</script>

<template>
  <ul class="wall">
    <li v-for="issue in issues" :key="issue.number">
      <ClosedIcon />
      <span>#{{ issue.number }}</span>
    </li>
  </ul>
</template>

<style scoped>
.wall {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
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
</style>
