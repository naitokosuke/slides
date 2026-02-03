<script lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";

const useElapsedTimer = () => {
  const elapsed = ref(0);
  let intervalId: ReturnType<typeof setInterval> | null = null;

  const formatted = computed(() => {
    const h = Math.floor(elapsed.value / 3600);
    const m = Math.floor((elapsed.value % 3600) / 60);
    const s = elapsed.value % 60;
    return [h, m, s].map((v) => String(v).padStart(2, "0")).join(":");
  });

  onMounted(() => {
    intervalId = setInterval(() => elapsed.value++, 1000);
  });
  onUnmounted(() => {
    if (intervalId) clearInterval(intervalId);
  });

  return { formatted };
};
</script>

<script setup lang="ts">
const { formatted: timer } = useElapsedTimer();
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
  color: #0f0;
  font-family: "Fira Code", monospace;
  text-shadow:
    2px 2px 0 #000,
    -2px -2px 0 #000,
    2px -2px 0 #000,
    -2px 2px 0 #000;
}
</style>
