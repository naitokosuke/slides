<!-- The repro repos attached to the issues from #9747 on, each linking to the repo -->
<script setup lang="ts">
import { sanitizeUrl } from "@braintree/sanitize-url";

const owner = "naitokosuke";
const repos = [
  "vize-nested-v-if-type-binding-repro",
  "vize-ssr-arrow-param-repro",
  "vize-placeholder-label-option-repro",
  "vize-combobox-focus-repro",
  "vize-hidden-input-label-repro",
  "vize-musea-scoped-arrow-repro",
  "vize-style-relative-import-repro",
  "vize-narrowed-slot-condition-repro",
  "vize-from-prop-template-repro",
];
</script>

<template>
  <ul class="tiles">
    <li v-for="repo in repos" :key="repo">
      <a
        class="link-box"
        :href="sanitizeUrl(`https://github.com/${owner}/${repo}`)"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="owner">{{ owner }}/</span>
        <span>{{ repo }}</span>
      </a>
    </li>
  </ul>
</template>

<style scoped>
.tiles {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-2);
  margin: var(--space-6) 0 0;
  padding: 0;
  list-style: none;
  font-size: var(--text-xs);
}

.tiles .link-box {
  gap: 0;
}

.owner {
  color: var(--color-text-muted);
}
</style>
