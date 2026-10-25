<!-- GitHub's "closed as completed": a circle with a check -->
<template>
  <svg class="closed-icon" viewBox="0 0 16 16" aria-hidden="true">
    <circle cx="8" cy="8" r="6.75" />
    <path d="M5.25 8.25 7.1 10l3.65-4" />
  </svg>
</template>

<style scoped>
.closed-icon {
  flex: none;
  width: var(--size-icon);
  height: var(--size-icon);
  fill: none;
  stroke: var(--color-accent);
  stroke-width: var(--stroke-width-icon);
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>
