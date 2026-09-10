<script setup lang="ts">
const { title = "AI Changed How I Work. My Disk Paid for It" } = defineProps<{
  title?: string;
}>();
</script>

<template>
  <div class="slidev-layout win98-desktop win98-scope">
    <main>
      <div class="window">
        <div class="title-bar">
          <div class="title-bar-text">{{ title }}</div>
          <div class="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>
        <div class="window-body">
          <slot />
        </div>
      </div>
    </main>
    <Win98Taskbar />
  </div>
</template>
