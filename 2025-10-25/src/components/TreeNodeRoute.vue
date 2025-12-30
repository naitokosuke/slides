<script setup lang="ts">
interface FileNode {
  name: string;
  type: 'file' | 'folder';
  route?: string;
  children?: FileNode[];
}

defineProps<{
  node: FileNode;
}>();
</script>

<template>
  <div v-if="node.route" class="route-item">
    <span class="route-path">{{ node.route }}</span>
  </div>
  <template v-if="node.children">
    <TreeNodeRoute v-for="(child, index) in node.children" :key="index" :node="child" />
  </template>
</template>

<style scoped>
.route-item {
  padding: 6px 12px;
  background-color: rgba(166, 227, 161, 0.1);
  border-left: 3px solid var(--ctp-green);
  border-radius: 4px;
  transition: all 0.15s ease;
}

.route-item:hover {
  background-color: rgba(166, 227, 161, 0.15);
  transform: translateX(2px);
}

.route-path {
  color: var(--ctp-green);
  font-weight: 500;
  font-size: 0.95em;
}
</style>
