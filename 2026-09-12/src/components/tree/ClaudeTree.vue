<script setup lang="ts">
import type { TreeNode } from "./ClaudeTreeNode.vue";

const root: TreeNode = {
  name: "~/.claude/",
  children: [
    {
      name: "projects/",
      children: [
        {
          name: "app-some/",
          note: "the repo itself",
          children: [
            {
              name: "memory/",
              note: "shared across worktrees, never swept",
              children: [{ name: "MEMORY.md" }],
            },
            { name: "6f2a….jsonl", note: "removed by cleanupPeriodDays" },
          ],
        },
        {
          name: "app-some---12-login/",
          note: "one per worktree",
          children: [{ name: "8c1d….jsonl" }],
        },
      ],
    },
  ],
};
</script>

<template>
  <div class="claude-tree">
    <div class="sunken-panel">
      <ul class="tree-view">
        <ClaudeTreeNode :node="root" />
      </ul>
    </div>
    <div class="status-bar">
      <p class="status-bar-field">
        <a href="https://code.claude.com/docs/en/claude-directory">
          code.claude.com/docs/en/claude-directory
        </a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.claude-tree {
  > .sunken-panel {
    padding: var(--space-2) var(--space-4);

    > .tree-view {
      padding: 0;
      background: none;
      box-shadow: none;
      font-family: var(--font-mono);
      font-size: var(--text-3xs);
      line-height: var(--leading-tight);
    }
  }
}
</style>
