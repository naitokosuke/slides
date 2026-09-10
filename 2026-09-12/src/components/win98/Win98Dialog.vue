<script setup lang="ts">
const {
  title,
  icon = "drive",
  buttons = ["OK"],
} = defineProps<{ title: string; icon?: string; buttons?: string[] }>();
</script>

<template>
  <div class="window">
    <div class="title-bar">
      <div class="title-bar-text">{{ title }}</div>
      <div class="title-bar-controls">
        <button aria-label="Close" />
      </div>
    </div>
    <div class="window-body">
      <PixelIcon :name="icon" />
      <p><slot /></p>
    </div>
    <footer>
      <button v-for="label in buttons" :key="label">{{ label }}</button>
    </footer>
  </div>
</template>

<style scoped>
.window {
  width: min(100%, 36rem);
  font-family: var(--font-body);

  > .window-body {
    display: flex;
    align-items: center;
    gap: var(--space-5);
    padding: var(--space-5) var(--space-4) var(--space-3);

    > img {
      flex: none;
      width: var(--icon-lg);
      height: var(--icon-lg);
      image-rendering: pixelated;
    }

    > p {
      margin: 0;
      font-size: var(--text-md);
      line-height: var(--leading-relaxed);
    }
  }

  > footer {
    display: flex;
    justify-content: flex-end;
    gap: var(--space-2);
    padding: var(--space-3) var(--space-4) var(--space-4);

    > button {
      min-width: var(--dialog-button-w);
      font-family: var(--font-body);
      font-size: var(--text-xs);
    }
  }
}
</style>
