<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";

const {
  gaba = 0,
  section = "",
  chart = "",
  icon = "/images/icon.png",
  text = "",
  megaton = false,
} = defineProps<{
  gaba?: number;
  section?: string;
  chart?: string;
  icon?: string;
  text?: string;
  megaton?: boolean;
}>();

const elapsed = ref(0);
let intervalId: ReturnType<typeof setInterval> | null = null;

const timer = computed(() => {
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
</script>

<template>
  <div class="root">
    <main>
      <slot />
      <span class="timer">{{ timer }}</span>
    </main>
    <aside>
      <div>{{ section }}</div>
      <div class="chart">{{ chart }}</div>
      <div class="gaba">
        ガバ <span>{{ gaba }}</span>
      </div>
    </aside>
    <footer>
      <img :src="icon" alt="" />
      <p :class="{ megaton }">{{ text }}</p>
    </footer>
  </div>
</template>

<style scoped>
.root {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 180px;
  grid-template-rows: 1fr 100px;
  background: #000;
  color: #fff;
}

main {
  position: relative;
  display: grid;
  place-items: center;
  background: var(--color-background);
  color: var(--color-blue);
  padding: 16px;
}

main :deep(img),
main :deep(video) {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

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

aside {
  display: grid;
  grid-template-rows: 3fr 6fr 1fr;
  background: #1a1a1a;
  border-left: 2px solid #444;
  padding: 8px;
  gap: 8px;
}

aside > div {
  padding: 8px;
  background: #222;
  border: 2px solid #444;
  text-align: center;
}

aside > div:first-child {
  font-size: 1.1em;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chart {
  font-size: 0.9em;
  color: #ccc;
  white-space: pre-line;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gaba {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  color: #888;
}

.gaba span {
  color: #f66;
  font-weight: bold;
  font-family: "Fira Code", monospace;
}

footer {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: #111;
  border-top: 2px solid #444;
}

footer img {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

footer p {
  margin: 0;
  font-size: 1.3em;
  line-height: 1.5;
}

footer .megaton {
  font-size: 1.8em;
  font-weight: bold;
  color: #fc0;
  text-shadow:
    2px 2px 0 #000,
    -2px -2px 0 #000,
    2px -2px 0 #000,
    -2px 2px 0 #000;
}
</style>
