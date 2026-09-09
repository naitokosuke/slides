<script setup lang="ts">
import { useNav } from "@slidev/client";

const { currentSlideNo, total } = useNav();
</script>

<template>
  <footer>
    <button>
      <PixelIcon name="start" />
      スタート
    </button>
    <button>大掃除.exe - {{ currentSlideNo }} / {{ total }}</button>
    <div class="status-field-border">2026-09-12</div>
  </footer>
</template>

<style scoped>
footer {
  flex: none;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  height: var(--taskbar-h);
  padding: 0 var(--space-2);
  background: var(--c-face);
  box-shadow: var(--bevel-taskbar);
  view-transition-name: win98-taskbar;

  > button {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    height: var(--taskbar-button-h);
    min-width: auto;
    font-size: var(--text-2xs);

    > img {
      width: var(--icon-xs);
      height: var(--icon-xs);
      image-rendering: pixelated;
    }

    & + button {
      flex: none;
      width: var(--taskbar-task-w);
      justify-content: flex-start;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  > .status-field-border {
    margin-left: auto;
    padding: var(--space-1) var(--space-3);
    font-family: var(--font-ui);
    font-size: var(--text-3xs);
  }
}
</style>
