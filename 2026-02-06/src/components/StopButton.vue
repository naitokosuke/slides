<script setup lang="ts">
import { useTimer } from "./TimerTimer.vue";

const { label = "ストップ" } = defineProps<{ label: string }>();

const { stop } = useTimer();
</script>

<template>
  <button @click="stop">{{ label }}</button>
</template>

<style scoped>
button {
  font-size: 2em;
  font-weight: bold;
  padding: 0.5em 1.5em;
  background: var(--color-pink);
  color: var(--color-blue);
  border: 4px solid var(--color-blue);
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: var(--color-pink-tint);
  }

  &:active {
    background: var(--color-blue-tint);
  }
}
</style>
