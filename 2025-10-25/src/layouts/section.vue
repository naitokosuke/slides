<script setup lang="ts">
import { useTemplateRef, onMounted, onBeforeUnmount } from "vue";

const textRef = useTemplateRef("textRef");

// Cache: text content + container width -> font size
const fontSizeCache = new Map<string, number>();

const fitText = () => {
  if (!textRef.value) return;

  const text = textRef.value;
  const container = text.parentElement;
  if (!container) return;

  const textContent = text.textContent || "";
  const containerWidth = container.clientWidth;
  const cacheKey = `${textContent}:${containerWidth}`;

  // Check cache first
  if (fontSizeCache.has(cacheKey)) {
    text.style.fontSize = `${fontSizeCache.get(cacheKey)}px`;
    return;
  }

  // Binary search for optimal font size
  let min = 10;
  let max = 1000;
  let optimalSize = min;

  while (max - min > 1) {
    const mid = Math.floor((min + max) / 2);
    text.style.fontSize = `${mid}px`;

    if (text.scrollWidth > container.clientWidth) {
      max = mid;
    } else {
      min = mid;
      optimalSize = mid;
    }
  }

  // Final check: try max
  text.style.fontSize = `${max}px`;
  if (text.scrollWidth <= container.clientWidth) {
    optimalSize = max;
  } else {
    text.style.fontSize = `${optimalSize}px`;
  }

  // Store in cache
  fontSizeCache.set(cacheKey, optimalSize);
};

let resizeObserver: ResizeObserver;

onMounted(() => {
  fitText();

  if (textRef.value?.parentElement) {
    resizeObserver = new ResizeObserver(fitText);
    resizeObserver.observe(textRef.value.parentElement);
  }
});

onBeforeUnmount(() => {
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
});
</script>

<template>
  <div ref="textRef" class="section-title">
    <slot />
  </div>
</template>

<style scoped>
.section-title {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(
    135deg,
    var(--color-primary-gold) 0%,
    var(--color-primary-sand) 50%,
    var(--color-primary-bronze) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(4px 8px 16px rgba(0, 0, 0, 0.6));
  white-space: nowrap;
}
</style>
