<script setup lang="ts">
const { items } = defineProps<{ items: string[] }>();
</script>

<template>
  <div class="memory-wall" :class="{ 'is-single': items.length === 1 }">
    <Win98Dialog v-for="item in items" :key="item" title="Memory" icon="chip" :buttons="['OK']">
      {{ item }}
    </Win98Dialog>
  </div>
</template>

<style scoped>
.memory-wall {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
  height: 100%;
  align-content: center;

  :deep(.window) {
    width: 100%;
  }

  &.is-single {
    grid-template-columns: 1fr;
    justify-items: center;

    :deep(.window) {
      width: min(100%, 36rem);
    }
  }
}
</style>
