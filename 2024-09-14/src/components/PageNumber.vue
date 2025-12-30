<script setup lang="ts">
import { computed } from "vue";
interface Props {
  currentPage: number;
  totalPages: number;
}

const { currentPage, totalPages } = defineProps<Props>();


</script>

<template>
  <div class="abs-br m-6">
    {{ currentPage }} / {{ totalPages }}
  </div>
</template>
