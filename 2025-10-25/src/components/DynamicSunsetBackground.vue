<template>
  <div class="dynamic-sunset-background" :style="backgroundStyle">
    <div class="atmospheric-overlay" :style="atmosphericOverlayStyle"></div>
    <div class="progress-overlay" :style="overlayStyle"></div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useNav } from "@slidev/client";

const { currentPage, total } = useNav();

// Cache CSS variables once on mount instead of reading every render
const cssVars = ref({
  primaryBg: '#1a1f35',
  secondaryBg: '#0f1220',
  tertiaryBg: '#2d1b3d',
  bronze: '#cd7f32',
  copper: '#b87333',
  sienna: '#a0522d',
});

// Pre-computed RGB values cache to avoid repeated hex parsing
const rgbCache = new Map();

onMounted(() => {
  // Read CSS variables once and cache them
  const root = getComputedStyle(document.documentElement);
  cssVars.value = {
    primaryBg: root.getPropertyValue('--color-bg-dark-primary').trim() || '#1a1f35',
    secondaryBg: root.getPropertyValue('--color-bg-dark-secondary').trim() || '#0f1220',
    tertiaryBg: root.getPropertyValue('--color-bg-dark-tertiary').trim() || '#2d1b3d',
    bronze: root.getPropertyValue('--color-primary-bronze').trim() || '#cd7f32',
    copper: root.getPropertyValue('--color-primary-copper').trim() || '#b87333',
    sienna: root.getPropertyValue('--color-primary-sienna').trim() || '#a0522d',
  };

  // Pre-populate RGB cache with all colors we'll use
  const allColors = [
    ...Object.values(cssVars.value),
    "#0f0f1a", "#4a2c4a", "#6b3a47", "#0a0a12", "#3a1f2a",
    "#05050c", "#1a1328"
  ];
  allColors.forEach(color => {
    if (!rgbCache.has(color)) {
      rgbCache.set(color, hexToRgb(color));
    }
  });
});

// Calculate progress as a value between 0 and 1
const progress = computed(() => {
  if (!total.value || !currentPage.value) return 0;
  return Math.min((currentPage.value - 1) / Math.max(total.value - 1, 1), 1);
});

// Fast RGB lookup with cache
function getRgb(hex) {
  if (!rgbCache.has(hex)) {
    rgbCache.set(hex, hexToRgb(hex));
  }
  return rgbCache.get(hex);
}

// Optimized color interpolation using cached RGB values
function interpolateColor(color1, color2, factor) {
  const c1 = getRgb(color1);
  const c2 = getRgb(color2);

  const r = Math.round(c1.r + (c2.r - c1.r) * factor);
  const g = Math.round(c1.g + (c2.g - c1.g) * factor);
  const b = Math.round(c1.b + (c2.b - c1.b) * factor);

  return `rgb(${r}, ${g}, ${b})`;
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}

// Dynamic background with smooth transitions using CSS variables
const backgroundStyle = computed(() => {
  const p = progress.value;
  const vars = cssVars.value;

  // Define key color sets for each stage using cached CSS variables
  const stage1 = [vars.primaryBg, vars.tertiaryBg, vars.sienna, vars.copper, vars.bronze]; // Early sunset
  const stage2 = ["#0f0f1a", vars.primaryBg, "#4a2c4a", "#6b3a47", vars.sienna]; // Mid sunset
  const stage3 = ["#0a0a12", "#0f0f1a", vars.tertiaryBg, "#4a2c4a", "#3a1f2a"]; // Late sunset
  const stage4 = ["#05050c", "#0a0a12", "#0f0f1a", "#1a1328", vars.tertiaryBg]; // Night

  let gradientStops;

  if (p < 0.2) {
    // Pure stage 1
    gradientStops = stage1;
  } else if (p < 0.5) {
    // Smooth transition from stage 1 to stage 2
    const localP = (p - 0.2) / 0.3;
    gradientStops = stage1.map((color, i) =>
      interpolateColor(color, stage2[i], localP),
    );
  } else if (p < 0.8) {
    // Smooth transition from stage 2 to stage 3
    const localP = (p - 0.5) / 0.3;
    gradientStops = stage2.map((color, i) =>
      interpolateColor(color, stage3[i], localP),
    );
  } else {
    // Smooth transition from stage 3 to stage 4
    const localP = (p - 0.8) / 0.2;
    gradientStops = stage3.map((color, i) =>
      interpolateColor(color, stage4[i], localP),
    );
  }

  return {
    background: `linear-gradient(180deg, ${gradientStops.join(", ")})`,
    transition: "background 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
  };
});

// Atmospheric overlay (static, no need for computed)
const atmosphericOverlayStyle = {
  background: `
    radial-gradient(
      ellipse at top center,
      rgba(160, 82, 45, 0.08) 0%,
      transparent 60%
    ),
    radial-gradient(
      ellipse at bottom,
      rgba(45, 27, 61, 0.12) 0%,
      transparent 50%
    )
  `,
};

// Smooth overlay transitions
const overlayStyle = computed(() => {
  const p = progress.value;
  const vars = cssVars.value;

  // Smoothly interpolate overlay intensity and color
  const baseOpacity = Math.sin(p * Math.PI) * 0.2; // Gentle wave pattern
  const targetOpacity = Math.min(p * 0.25, 0.25);
  const finalOpacity = Math.max(baseOpacity, targetOpacity * 0.5);

  // Smooth color transition for overlay using cached variables
  let overlayColor;
  if (p < 0.3) {
    overlayColor = interpolateColor(vars.tertiaryBg, "#4a2c4a", p / 0.3);
  } else if (p < 0.7) {
    overlayColor = interpolateColor("#4a2c4a", vars.primaryBg, (p - 0.3) / 0.4);
  } else {
    overlayColor = interpolateColor(vars.primaryBg, "#0a0a12", (p - 0.7) / 0.3);
  }

  const rgb = getRgb(overlayColor);

  return {
    background: `radial-gradient(ellipse at bottom, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${finalOpacity}) 0%, transparent 70%)`,
    transition: "background 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  };
});
</script>

<style scoped>
.dynamic-sunset-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -10;
}

/* Atmospheric overlay */
.atmospheric-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
}

/* Progress overlay */
.progress-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .dynamic-sunset-background,
  .atmospheric-overlay,
  .progress-overlay {
    transition: none !important;
    animation: none !important;
  }
}
</style>
