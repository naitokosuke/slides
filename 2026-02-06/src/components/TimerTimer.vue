<script lang="ts">
import { ref, computed } from "vue";

const elapsed = ref(0);
const isRunning = ref(false);

const formatted = computed(() => {
  const h = Math.floor(elapsed.value / 3600);
  const m = Math.floor((elapsed.value % 3600) / 60);
  const s = elapsed.value % 60;
  return [h, m, s].map((v) => String(v).padStart(2, "0")).join(":");
});

let intervalId: ReturnType<typeof setInterval> | null = null;

const start = () => {
  if (isRunning.value) return;
  intervalId = setInterval(() => elapsed.value++, 1000);
  isRunning.value = true;
};
const stop = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
  isRunning.value = false;
};
const reset = () => {
  stop();
  elapsed.value = 0;
};

export const useTimer = () => {
  return { formatted, start, stop, reset, isRunning, elapsed };
};
</script>

<script setup lang="ts">
const { formatted: timer, start, stop, reset, isRunning, elapsed } = useTimer();

defineExpose({ start, stop, reset, isRunning, elapsed });
</script>

<template>
  <span class="timer">{{ timer }}</span>
</template>

<style scoped>
.timer {
  position: absolute;
  right: 12px;
  bottom: 12px;
  font-size: 1.8em;
  font-weight: bold;
  color: var(--color-blue);
  font-family: "Fira Code", monospace;
}
</style>
