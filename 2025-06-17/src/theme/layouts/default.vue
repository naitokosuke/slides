<template>
  <div class="slidev-layout default">
    <slot />
  </div>
</template>

<script setup>
// ここにカスタムロジックを追加できます
</script>

<style scoped>
.slidev-layout.default {
  padding: 2rem;
  background: var(--slidev-theme-background);
  color: var(--slidev-theme-text);
  min-height: 100vh;
}
</style>
