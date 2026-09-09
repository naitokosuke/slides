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
      <div>
        <div
          v-for="item in items"
          :key="item.key"
          :style="{ viewTransitionName: item.key }"
        >
          <PixelIcon name="folder" />
          <span>{{ item.label }}</span>
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

<style scoped>
.worktree-grid {
  > .sunken-panel {
    padding: var(--space-4);

    > div {
      height: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-content: center;
      justify-items: center;
      gap: var(--space-6) var(--space-4);

      > div {
        view-transition-class: morph;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-2);

        > img {
          width: var(--icon-xl);
          height: var(--icon-xl);
        }

        > span {
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: var(--text-sm);
          line-height: var(--leading-tight);
        }

        > .progress-indicator {
          width: 82%;
          height: var(--space-5);

          &[data-idle="true"] {
            visibility: hidden;
          }
        }
      }
    }
  }

  &[data-stage="1"] {
    > .sunken-panel {
      > div {
        grid-template-columns: repeat(7, 1fr);
        gap: var(--space-2) var(--space-3);

        > div {
          gap: var(--space-1);

          > img {
            width: var(--icon-md);
            height: var(--icon-md);
          }

          > span {
            font-size: var(--text-3xs);
          }

          > .progress-indicator {
            height: var(--space-3);
          }
        }
      }
    }
  }
}
</style>
