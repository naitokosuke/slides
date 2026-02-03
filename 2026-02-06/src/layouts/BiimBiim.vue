<script setup lang="ts">
import { computed, provide, ref } from "vue";
import { sanitizeUrl } from "@braintree/sanitize-url";
import TimerTimer from "../components/TimerTimer.vue";

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

const safeIcon = computed(() => sanitizeUrl(icon));

const timerRef = ref<InstanceType<typeof TimerTimer>>();
provide("timer", timerRef);
</script>

<template>
  <div class="biim-layout">
    <main>
      <slot />
      <TimerTimer ref="timerRef" />
    </main>
    <aside>
      <div>{{ section }}</div>
      <div class="chart">{{ chart }}</div>
      <div class="gaba">
        ガバ <span>{{ gaba }}</span>
      </div>
    </aside>
    <footer>
      <img :src="safeIcon" alt="" />
      <p :class="{ megaton }">{{ text }}</p>
    </footer>
  </div>
</template>

<style scoped>
.biim-layout {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 180px;
  grid-template-rows: 1fr 100px;
  background: #000;
  color: #fff;

  main {
    position: relative;
    display: grid;
    place-items: center;
    background: var(--color-background);
    color: var(--color-blue);
    padding: 16px;

    :deep(img),
    :deep(video) {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }

  aside {
    display: grid;
    grid-template-rows: 3fr 6fr 1fr;
    background: #1a1a1a;
    border-left: 2px solid #444;
    padding: 8px;
    gap: 8px;

    > div {
      padding: 8px;
      background: #222;
      border: 2px solid #444;
      text-align: center;

      &:first-child {
        font-size: 1.1em;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
      }
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

      span {
        color: #f66;
        font-weight: bold;
        font-family: "Fira Code", monospace;
      }
    }
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

    img {
      width: 80px;
      height: 80px;
      object-fit: contain;
    }

    p {
      margin: 0;
      font-size: 1.3em;
      line-height: 1.5;

      &.megaton {
        font-size: 1.8em;
        font-weight: bold;
        color: #fc0;
        text-shadow:
          2px 2px 0 #000,
          -2px -2px 0 #000,
          2px -2px 0 #000,
          -2px 2px 0 #000;
      }
    }
  }
}
</style>
