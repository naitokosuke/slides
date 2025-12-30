<script setup lang="ts">
interface FileNode {
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[];
}

defineProps<{
  node: FileNode;
}>();
</script>

<template>
  <div class="tree-node">
    <div class="node-content">
      <span v-if="node.type === 'folder'" class="icon folder-icon">📁</span>
      <span v-else class="icon file-icon">📄</span>
      <span class="node-name">{{ node.name }}</span>
    </div>
    <div v-if="node.children && node.children.length > 0" class="node-children">
      <TreeNode v-for="(child, index) in node.children" :key="index" :node="child" />
    </div>
  </div>
</template>

<style scoped>
.tree-node {
  margin: 2px 0;
}

.node-content {
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4px;
  transition: background-color 0.15s ease;
  cursor: default;
}

.node-content:hover {
  background-color: rgba(137, 180, 250, 0.1);
}

.icon {
  margin-right: 8px;
  font-size: 1em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
}

.node-name {
  color: var(--ctp-text);
  font-weight: 400;
  flex-shrink: 0;
}

.node-children {
  border-left: 1px solid rgba(186, 194, 222, 0.1);
  margin-left: 12px;
  padding-left: 8px;
}

/* File type specific colors */
.tree-node:has(.folder-icon) .node-name {
  color: var(--ctp-blue);
  font-weight: 500;
}

.tree-node:has(.file-icon) .node-name {
  color: var(--ctp-green);
}
</style>
