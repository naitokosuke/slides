<template>
  <div class="slidev-layout center h-full grid place-content-center">
    <div class="my-auto">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.center {
  background: var(--slidev-theme-background);
  color: var(--slidev-theme-text);
}
</style>
