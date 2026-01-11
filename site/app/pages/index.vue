<script setup lang="ts">
const { data: slides } = await useFetch("/api/slides");
</script>

<template>
  <div class="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] p-8">
    <div class="max-w-800px mx-auto">
      <h1 class="text-2rem mb-8 text-white">Slides</h1>
      <div class="flex flex-col gap-4">
        <a
          v-for="slide in slides"
          :key="slide.folder"
          :href="`/${slide.folder}/`"
          class="flex items-center gap-6 py-5 px-6 bg-[#1a1a1a] rounded-lg no-underline text-inherit transition-all hover:bg-[#252525] hover:translate-x-1"
        >
          <span class="font-mono text-sm text-[#888] whitespace-nowrap">
            {{ slide.date }}
          </span>
          <span class="text-lg text-white overflow-x-auto whitespace-nowrap">
            {{ slide.title }}
          </span>
        </a>
      </div>
    </div>
  </div>
</template>
