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
  <div class="biim">
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
.biim {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 180px;
  grid-template-rows: 1fr 17%;
  overflow: hidden;
  background: var(--color-pink);
  color: var(--color-blue);

  main {
    position: relative;
    display: grid;
    place-items: center;
    background: var(--color-background);
    color: var(--color-blue);
    padding: 16px;
    min-height: 0;
  }

  aside {
    display: grid;
    grid-template-rows: 3fr 6fr 1fr;
    background: var(--color-pink);
    border-left: 2px solid var(--color-pink-tint);
    padding: 8px;
    gap: 8px;
    min-height: 0;

    > div {
      padding: 8px;
      background: var(--color-pink-tint);
      border: 2px solid var(--color-white);
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
      color: var(--color-blue);
      white-space: pre-line;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .gaba {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      color: var(--color-blue);

      span {
        color: var(--color-blue);
        font-weight: bold;
        font-family: "Fira Code", monospace;
      }
    }
  }

  footer {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 70px 1fr;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    background: var(--color-pink-tint);
    border-top: 2px solid var(--color-pink);

    img {
      width: 70px;
      height: 70px;
      object-fit: contain;
    }

    p {
      margin: 0;
      font-size: 1.3em;
      line-height: 1.5;
      color: var(--color-blue);

      &.megaton {
        font-size: 1.8em;
        font-weight: bold;
        color: var(--color-blue);
      }
    }
  }
}
</style>
