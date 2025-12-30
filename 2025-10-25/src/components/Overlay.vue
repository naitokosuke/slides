<script setup lang="ts">
import { computed } from "vue";

interface OverlayCommon {
  type?: "full" | "fit-content";
  zIndex?: number;
  blur?: string;
  backgroundColor?: string;
}

interface OverlayFull extends OverlayCommon {
  type?: "full";
}

interface OverlayFitContent extends OverlayCommon {
  type: "fit-content";
  position?: "fixed" | "absolute" | "relative";
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  transform?: string;
  border?: boolean;
  borderColor?: string;
  borderWidth?: string;
  borderRadius?: string;
  padding?: string;
  boxShadow?: string;
}

const props = defineProps<OverlayFull | OverlayFitContent>();

// Destructure with defaults
const zIndex = props.zIndex ?? 1000;
const blur = props.blur ?? "12px";
const backgroundColor = props.backgroundColor ?? "rgba(0, 0, 0, 0.3)";
const type = props.type ?? "full";

// Compute CSS class based on type
const overlayClass = computed(() => {
  return type === "full" ? "overlay-full" : "overlay-fit-content";
});

// Compute inline styles (only dynamic values)
const overlayStyle = computed(() => {
  const style: Record<string, string | undefined> = {
    "--overlay-z-index": String(zIndex),
    "--overlay-blur": blur,
    "--overlay-bg": backgroundColor,
  };

  if (type === "fit-content") {
    const fitProps = props as OverlayFitContent;
    style.position = fitProps.position ?? "fixed";
    style.padding = fitProps.padding ?? "1rem";
    style.borderRadius = fitProps.borderRadius ?? "0.5rem";
    style.boxShadow = fitProps.boxShadow ?? "0 8px 20px rgba(0, 0, 0, 0.4)";

    if (fitProps.top) style.top = fitProps.top;
    if (fitProps.bottom) style.bottom = fitProps.bottom;
    if (fitProps.left) style.left = fitProps.left;
    if (fitProps.right) style.right = fitProps.right;
    if (fitProps.transform) style.transform = fitProps.transform;

    if (fitProps.border) {
      style.border = `${fitProps.borderWidth ?? "2px"} solid ${fitProps.borderColor ?? "var(--color-error-border)"}`;
    }
  }

  return style;
});
</script>

<template>
  <div :class="overlayClass" :style="overlayStyle">
    <slot />
  </div>
</template>

<style scoped>
.overlay-full,
.overlay-fit-content {
  z-index: var(--overlay-z-index);
  background-color: var(--overlay-bg);
  backdrop-filter: blur(var(--overlay-blur));
  -webkit-backdrop-filter: blur(var(--overlay-blur));
}

.overlay-full {
  position: fixed;
  inset: 0;
}

/* Performance optimization: only apply GPU acceleration when visible */
@media (prefers-reduced-motion: no-preference) {
  .overlay-full,
  .overlay-fit-content {
    will-change: opacity;
  }
}

/* Reduce blur complexity on lower-end devices */
@media (max-width: 768px) {
  .overlay-full,
  .overlay-fit-content {
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
}
</style>
