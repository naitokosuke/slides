<script setup lang="ts">
import { computed } from "vue";
import { useStage } from "../composables/useStage";

const stage = useStage();

const branches = ["feature/login", "fix/typo", "chore/deps"];

const issues = [
  12, 47, 58, 63, 71, 88, 94, 103, 118, 126, 131, 149, 155, 162, 170, 178, 184,
  190, 203, 211, 219,
];

const widths = [
  72, 35, 88, 21, 56, 63, 44, 91, 17, 68, 39, 82, 27, 74, 51, 95, 33, 60, 47,
  86, 24,
];

const items = computed(() =>
  stage.value === 0
    ? branches.map((label, i) => ({
        key: `wt-${i}`,
        label,
        running: i === 0,
        width: 44,
      }))
    : issues.map((issue, i) => ({
        key: `wt-${i}`,
        label: `#${issue}`,
        running: true,
        width: widths[i],
      })),
);
</script>

<template>
  <div class="worktree-grid" :data-stage="stage">
    <div class="sunken-panel">
      <div class="items">
        <div
          v-for="item in items"
          :key="item.key"
          class="item"
          :style="{ viewTransitionName: item.key }"
        >
          <PixelIcon name="folder" />
          <span class="label">{{ item.label }}</span>
          <div
            class="progress-indicator segmented"
            :data-idle="String(!item.running)"
          >
            <span
              class="progress-indicator-bar"
              :style="{ width: `${item.width}%` }"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="status-bar">
      <p class="status-bar-field">
        {{ stage === 0 ? "ブランチ" : "worktree" }} {{ items.length }}
      </p>
      <p class="status-bar-field">
        実行中 {{ stage === 0 ? 1 : items.length }}
      </p>
    </div>
  </div>
</template>
