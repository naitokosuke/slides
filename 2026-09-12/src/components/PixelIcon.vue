<script setup lang="ts">
import { computed } from "vue";

const { name } = defineProps<{ name: string }>();

const files: Record<string, string> = {
  chip: "chip_ramdrive-4",
  drive: "hard_disk_drive-4",
  folder: "directory_closed-4",
  mirror: "monitor_blue_grad-0",
  trash: "recycle_bin_full-4",
};

const src = computed(
  () => `${import.meta.env.BASE_URL}icons/${files[name]}.png`,
);
</script>

<template>
  <img :src="src" alt="" />
</template>
