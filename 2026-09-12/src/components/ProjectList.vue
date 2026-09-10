<script setup lang="ts">
import { computed } from "vue";
import { useStage } from "../composables/useStage";

const { status = false } = defineProps<{ status?: boolean }>();

const stage = useStage();

const rows = [
  { name: "app-some---12-login", removed: true },
  { name: "app-some---47-retry", removed: true },
  { name: "app-some---94-oauth", removed: false },
  { name: "app-other---58-typo", removed: true },
  { name: "app-other---63-cache", removed: false },
  { name: "app-other---71-modal", removed: true },
  { name: "app-other---88-flags", removed: true },
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
      <p class="status-bar-field">133 items</p>
      <p v-if="status" class="status-bar-field">
        {{ purged ? goneCount : 0 }} removable
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
