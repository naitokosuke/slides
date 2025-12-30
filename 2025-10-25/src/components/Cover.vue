<script setup lang="ts">
import { useSlideContext } from "@slidev/client";

interface Props {
  subtitle?: string;
  showTextlintError?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  subtitle: "Vue Fes Japan 2025",
  showTextlintError: false,
});

const { $clicks } = useSlideContext();
</script>

<template>
  <div class="tropical-background relative h-full">
    <noto:tropical-drink class="bg-emoji drink-bg" />
    <noto:desert-island class="bg-emoji island-bg" />

    <h1 class="absolute top-1/2 left-0 -translate-y-1/2">
      <span
        class="text-small"
        :class="{
          'textlint-error-inline': props.showTextlintError && $clicks >= 1,
        }"
        >最高の</span
      >
      <span class="text-small"> DX</span><br />
      <span class="tech-highlight">Nuxt Typed Router</span><br />
      <span class="text-small">と</span><br />
      <span class="tech-highlight">Pinia Colada</span><br />
      <span class="text-small">で実現する次世代</span>
      <span class="vue-gradient text-medium"> Vue</span>
      <span class="text-small"> / </span>
      <span class="nuxt-gradient text-medium">Nuxt </span>
      <span class="text-small">開発</span>
    </h1>

    <p
      v-if="props.subtitle"
      style="position: fixed; bottom: 0.5rem; right: 2rem"
    >
      {{ props.subtitle }}
    </p>
  </div>
</template>

<style scoped>
.tropical-background {
  h1 {
    font-size: 4rem !important;
    line-height: 1.2 !important;
  }

  .text-small {
    font-size: 2.4rem !important;
  }

  .text-medium {
    font-size: 3.6rem !important;
  }

  .tech-highlight {
    font-size: 6rem !important;
    font-weight: 700;
    color: var(--color-primary-gold);
    text-shadow: 0 0 20px
      color-mix(in srgb, var(--color-primary-gold) 50%, transparent);
    letter-spacing: 0.03em;
  }
}

.bg-emoji {
  position: absolute;
  opacity: 0.15;
  pointer-events: none;
  z-index: -1;

  &.drink-bg {
    font-size: 40rem;
    top: -16rem;
    right: -20rem;
  }

  &.island-bg {
    font-size: 32rem;
    bottom: -12rem;
    left: -16rem;
  }
}

.textlint-error-inline {
  text-decoration: underline;
  text-decoration-color: var(--color-error);
  text-decoration-style: wavy;
  text-decoration-thickness: 3px;
  text-underline-offset: 2px;
}

@keyframes vue-wave {
  0%,
  100% {
    filter: brightness(1) saturate(1);
  }
  50% {
    filter: brightness(1.3) saturate(1.2);
  }
}

@keyframes nuxt-wave {
  0%,
  100% {
    filter: brightness(1) saturate(1);
  }
  50% {
    filter: brightness(1.3) saturate(1.2);
  }
}

.vue-gradient {
  background: linear-gradient(
    135deg,
    var(--vue-green) 0%,
    var(--vue-dark) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  animation: vue-wave 3s ease-in-out infinite;
}

.nuxt-gradient {
  background: linear-gradient(
    135deg,
    var(--nuxt-green) 0%,
    var(--nuxt-navy) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  animation: nuxt-wave 3s ease-in-out infinite 0.5s;
}
</style>
