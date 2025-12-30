<script setup lang="ts">
import { ref, onMounted, useTemplateRef } from "vue";

const fired = ref(false);
const el = useTemplateRef("el");

const fireFireworks = async () => {
  if (typeof window === "undefined") return;
  if (fired.value) return;
  fired.value = true;

  const confetti = (await import("canvas-confetti")).default;

  const duration = 3000;
  const end = Date.now() + duration;

  const colors = ["#FFD700", "#FF6347", "#00FF7F", "#1E90FF", "#FF69B4"];

  const frame = () => {
    confetti({
      particleCount: 30,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2,
      },
      colors,
      shapes: ["star"],
      ticks: 60,
      gravity: 1,
      scalar: 1.2,
    });

    if (Date.now() < end) setTimeout(frame, 200);
  };

  frame();
};

onMounted(() => {
  if (!el.value) return;

  const observer = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          fireFireworks();
          observer.disconnect();
          break;
        }
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(el.value);
});
</script>

<template>
  <span ref="el" />
</template>
