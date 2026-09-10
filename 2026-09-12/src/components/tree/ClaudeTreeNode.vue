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

<style scoped>
li {
  line-height: var(--leading-tight);

  > details {
    > summary {
      line-height: var(--leading-tight);

      &::before {
        margin-top: 3px;
      }

      > img {
        display: inline-block;
        width: var(--icon-xs);
        height: var(--icon-xs);
        margin-right: var(--space-2);
        vertical-align: text-bottom;
      }

      > .note {
        margin-left: var(--space-4);
        font-family: var(--font-body);
        color: var(--c-shadow);
        text-shadow: 1px 1px var(--c-light);
      }
    }

    > ul {
      display: block;
      gap: 0;
      margin: 3px 0 0 16px;
      padding: 0 0 0 16px;
      font-size: inherit;
    }
  }

  /* v-else branch: <template> renders no wrapper, so these are direct li children */
  > img {
    display: inline-block;
    width: var(--icon-xs);
    height: var(--icon-xs);
    margin-right: var(--space-2);
    vertical-align: text-bottom;
  }

  > .note {
    margin-left: var(--space-4);
    font-family: var(--font-body);
    color: var(--c-shadow);
    text-shadow: 1px 1px var(--c-light);
  }
}
</style>
