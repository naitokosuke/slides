<script setup lang="ts">
interface Props {
  currentPage: number;
  totalPages: number;
  bgColor?: string;
}

const { currentPage, totalPages, bgColor="bg-green" } = defineProps<Props>();
</script>

<template>
  <div class="fixed bottom-0 right-0 h-full w-2 bg-gray-200">
    <div
      class="absolute bottom-0 w-full transition-all duration-300"
      :class="bgColor"
      :style="{ height: `${(currentPage / totalPages) * 100}%` }"
    />
  </div>
</template>

