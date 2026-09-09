<script setup lang="ts">
import { useNav } from "@slidev/client";

const { currentSlideNo, total } = useNav();
</script>

<template>
  <footer>
    <button>
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
        <rect x="0" y="1" width="7" height="6" fill="#e33" />
        <rect x="8" y="0" width="8" height="7" fill="#3a3" />
        <rect x="0" y="8" width="7" height="7" fill="#36c" />
        <rect x="8" y="8" width="8" height="8" fill="#eb0" />
      </svg>
      スタート
    </button>
    <button>大掃除.exe - {{ currentSlideNo }} / {{ total }}</button>
    <div class="status-field-border">2026-09-12</div>
  </footer>
</template>
