<script setup lang="ts">
const { title } = defineProps<{ title?: string }>();
</script>

<template>
  <Win98Window :title="title">
    <slot />
  </Win98Window>
</template>
