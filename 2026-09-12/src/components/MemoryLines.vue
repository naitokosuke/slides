<script setup lang="ts">
const read = [92, 74, 88, 61, 96, 55, 83, 70, 90, 48];

const over = [81, 58, 89, 72, 66, 85, 51, 93, 68, 79, 60, 87, 71, 95];
</script>

<template>
  <div class="memory-lines">
    <div class="sunken-panel">
      <div class="lines">
        <span
          v-for="(width, i) in read"
          :key="i"
          :style="{ width: `${width}%` }"
        />
      </div>
      <div class="cut" />
      <div class="lines" data-over="true">
        <span
          v-for="(width, i) in over"
          :key="i"
          :style="{ width: `${width}%` }"
        />
      </div>
    </div>
    <div class="status-bar">
      <p class="status-bar-field">先頭 200 行 / 25KB</p>
      <p class="status-bar-field">以降は読まれない</p>
    </div>
  </div>
</template>

<style scoped>
.memory-lines {
  > .sunken-panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--space-3);
    padding: var(--space-5);

    > .lines {
      display: flex;
      flex-direction: column;
      gap: var(--space-1);

      > span {
        height: var(--space-2);
        background: var(--c-ink);
      }

      &[data-over="true"] > span {
        background: var(--c-shadow);
        box-shadow: 1px 1px var(--c-light);
      }
    }

    > .cut {
      flex: none;
      height: var(--dither-w);
      background-image: var(--dither);
      background-size: var(--dither-w) var(--dither-w);
    }
  }
}
</style>
