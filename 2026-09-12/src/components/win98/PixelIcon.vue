<script setup lang="ts">
import folder from "../../node_modules/@react95/icons/png/Folder_32x32_4.png?url";
import open from "../../node_modules/@react95/icons/png/FolderOpen_32x32_4.png?url";
import file from "../../node_modules/@react95/icons/png/FileText_32x32_4.png?url";
import drive from "../../node_modules/@react95/icons/png/Defrag_32x32_4.png?url";
import trash from "../../node_modules/@react95/icons/png/RecycleFull_32x32_4.png?url";
import chip from "../../node_modules/@react95/icons/png/Memory_32x32_4.png?url";
import mirror from "../../node_modules/@react95/icons/png/Computer_32x32_4.png?url";
import start from "../../node_modules/@react95/icons/png/Logo_16x16_4.png?url";

const { name } = defineProps<{ name: string }>();

const icons: Record<string, string> = {
  folder,
  open,
  file,
  drive,
  trash,
  chip,
  mirror,
  start,
};
</script>

<template>
  <img :src="icons[name]" alt="" />
</template>
