<template>
  <div class="slidev-layout center h-full grid place-content-center">
    <div class="my-auto">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.center {
  background-color: color-mix(in srgb, var(--slidev-theme-text), black 60%);

  * {
    color: var(--slidev-theme-background);
  }
}
</style>
