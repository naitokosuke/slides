<script setup lang="ts">
import { useNav } from "@slidev/client";
import { watch } from "vue";

const { currentSlideNo } = useNav();

watch(
  currentSlideNo,
  (to, from) => {
    document.documentElement.classList.toggle(
      "win98-zooming",
      to === 1 || from === 1,
    );
  },
  { flush: "sync" },
);
</script>

<template />
