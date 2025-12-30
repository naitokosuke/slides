<script setup lang="ts">
interface FileNode {
  name: string;
  type: 'file' | 'folder';
  route?: string;
  children?: FileNode[];
}

defineProps<{
  nodes: FileNode[];
  title?: string;
}>();
</script>

<template>
  <div class="file-tree-with-routes">
    <div class="file-tree-editor" style="view-transition-name: file-tree">
      <div class="editor-header">
        <div class="editor-title">{{ title || 'EXPLORER' }}</div>
      </div>
      <div class="file-tree">
        <TreeNodeWithRoute v-for="(node, index) in nodes" :key="index" :node="node" />
      </div>
    </div>

    <div class="route-overlay">
      <div class="overlay-title">Routes</div>
      <div class="route-list">
        <TreeNodeRoute v-for="(node, index) in nodes" :key="index" :node="node" />
      </div>
    </div>
  </div>
</template>

<style>
/* Catppuccin Mocha Colors - Global variables for child components */
:root {
  --ctp-base: #1e1e2e;
  --ctp-mantle: #181825;
  --ctp-crust: #11111b;
  --ctp-text: #cdd6f4;
  --ctp-subtext1: #bac2de;
  --ctp-subtext0: #a6adc8;
  --ctp-blue: #89b4fa;
  --ctp-mauve: #cba6f7;
  --ctp-yellow: #f9e2af;
  --ctp-green: #a6e3a1;
}
</style>

<style scoped>
.file-tree-with-routes {
  position: relative;
  display: inline-block;
}

.file-tree-editor {
  background-color: var(--ctp-base);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  font-family: 'JetBrains Mono', 'Consolas', 'Monaco', monospace;
  font-size: 0.9em;
  min-width: 450px;
  margin: 0 auto;
}

.editor-header {
  background-color: var(--ctp-mantle);
  padding: 8px 16px;
  border-bottom: 1px solid var(--ctp-crust);
}

.editor-title {
  color: var(--ctp-subtext0);
  font-size: 0.75em;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.file-tree {
  padding: 12px 8px;
}

.route-overlay {
  position: absolute;
  right: -320px;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(30, 30, 46, 0.95);
  border: 2px solid var(--ctp-blue);
  border-radius: 8px;
  padding: 16px;
  min-width: 300px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  font-family: 'JetBrains Mono', 'Consolas', 'Monaco', monospace;
  font-size: 0.9em;
}

.overlay-title {
  color: var(--ctp-blue);
  font-size: 0.85em;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(137, 180, 250, 0.3);
}

.route-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
</style>
