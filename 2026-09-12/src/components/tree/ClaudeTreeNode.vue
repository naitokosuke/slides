<script setup lang="ts">
export interface TreeNode {
  name: string;
  note?: string;
  children?: TreeNode[];
}

const { node } = defineProps<{ node: TreeNode }>();
</script>

<template>
  <li>
    <details v-if="node.children" open>
      <summary>
        <PixelIcon name="open" />
        <span>{{ node.name }}</span>
        <span v-if="node.note" class="note">{{ node.note }}</span>
      </summary>
      <ul>
        <ClaudeTreeNode
          v-for="child in node.children"
          :key="child.name"
          :node="child"
        />
      </ul>
    </details>
    <template v-else>
      <PixelIcon :name="node.name.endsWith('/') ? 'folder' : 'file'" />
      <span>{{ node.name }}</span>
      <span v-if="node.note" class="note">{{ node.note }}</span>
    </template>
  </li>
</template>
