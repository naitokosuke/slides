<template>
  <div class="slidev-layout cover">
    <slot />
  </div>
</template>

<style scoped>
.slidev-page {
  display: grid;
  place-items: center;
  background-image: url("/cover.png");
  background-size: cover;

  .slidev-layout.cover {
    justify-self: center;
  }
}
</style>
