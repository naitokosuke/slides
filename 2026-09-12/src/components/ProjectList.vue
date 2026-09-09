<script setup lang="ts">
import { computed } from "vue";
import { useStage } from "../composables/useStage";

const { status = false } = defineProps<{ status?: boolean }>();

const stage = useStage();

const rows = [
  { name: "-Users-naito-src-app---12-login", removed: true },
  { name: "-Users-naito-src-app---47-retry", removed: true },
  { name: "-Users-naito-src-docs---58-typo", removed: true },
  { name: "-Users-naito-src-api---63-cache", removed: false },
  { name: "-Users-naito-src-web---71-modal", removed: true },
  { name: "-Users-naito-src-cli---88-flags", removed: true },
  { name: "-Users-naito-src-app---94-oauth", removed: false },
];

const purged = computed(() => stage.value > 0);

const goneCount = computed(() => rows.filter((row) => row.removed).length);
</script>

<template>
  <div class="project-list">
    <div class="sunken-panel">
      <table>
        <tbody>
          <tr v-for="row in rows" :key="row.name">
            <td class="name">
              <PixelIcon name="folder" />
              <span>{{ row.name }}</span>
            </td>
            <td v-if="status" class="state" :data-gone="purged && row.removed">
              {{ purged && row.removed ? "GONE" : "EXISTS" }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="status-bar">
      <p class="status-bar-field">176 件</p>
      <p v-if="status" class="status-bar-field">
        削除できる {{ purged ? goneCount : 0 }} 件
      </p>
    </div>
  </div>
</template>

<style scoped>
.project-list {
  > .sunken-panel {
    view-transition-name: project-list;
    view-transition-class: morph;
    padding: var(--space-2);

    > table {
      box-shadow: none;
      font-size: var(--text-3xs);

      td {
        padding: var(--space-1) var(--space-3);
      }

      .name {
        display: flex;
        align-items: center;
        gap: var(--space-3);
        font-family: var(--font-mono);

        > img {
          width: var(--icon-sm);
          height: var(--icon-sm);
        }
      }

      .state {
        width: 1%;

        &[data-gone="true"] {
          color: var(--c-shadow);
          text-shadow: 1px 1px var(--c-light);
        }
      }
    }
  }
}
</style>
