<script setup lang="ts">
import type { TreeNode } from "./ClaudeTreeNode.vue";

const root: TreeNode = {
  name: "~/.claude/",
  children: [
    {
      name: "projects/",
      children: [
        {
          name: "-Users-naito-src-app/",
          note: "repo 本体",
          children: [
            {
              name: "memory/",
              note: "worktree 間で共有、sweep 対象外",
              children: [{ name: "MEMORY.md" }],
            },
            { name: "6f2a….jsonl", note: "cleanupPeriodDays で消える" },
          ],
        },
        {
          name: "-Users-naito-src-app---12-login/",
          note: "worktree ごと",
          children: [
            { name: "8c1d….jsonl" },
            {
              name: "8c1d…/",
              children: [{ name: "subagents/" }, { name: "tool-results/" }],
            },
          ],
        },
        { name: "-Users-naito-src-app---47-retry/" },
      ],
    },
    { name: "history.jsonl" },
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
