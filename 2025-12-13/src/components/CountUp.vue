<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed, useTemplateRef } from "vue";
import { useIsSlideActive, useSlideContext } from "@slidev/client";

const {
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  separator = "",
  at = 0,
  onStart,
  onEnd,
} = defineProps<{
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  separator?: string;
  at?: number;
  onStart?: () => void;
  onEnd?: () => void;
}>();

const isSlideActive = useIsSlideActive();
const { $clicks } = useSlideContext();

const elementRef = useTemplateRef<HTMLSpanElement>("elementRef");
const currentValue = ref(direction === "down" ? to : from);
const animationId = ref<number | null>(null);
const hasStarted = ref(false);

const damping = computed(() => 20 + 40 * (1 / duration));
const stiffness = computed(() => 100 * (1 / duration));

let velocity = 0;
let startTime = 0;

const formatNumber = (value: number) => {
  const options = {
    useGrouping: !!separator,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  };

  const formattedNumber = Intl.NumberFormat("en-US", options).format(Number(value.toFixed(0)));

  return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
};

const updateDisplay = () => {
  if (elementRef.value) {
    elementRef.value.textContent = formatNumber(currentValue.value);
  }
};

const springAnimation = (timestamp: number) => {
  if (!startTime) startTime = timestamp;

  const target = direction === "down" ? from : to;
  const current = currentValue.value;

  const displacement = target - current;
  const springForce = displacement * stiffness.value;
  const dampingForce = velocity * damping.value;
  const acceleration = springForce - dampingForce;

  velocity += acceleration * 0.016; // Assuming 60fps
  currentValue.value += velocity * 0.016;

  updateDisplay();

  if (Math.abs(displacement) > 0.01 || Math.abs(velocity) > 0.01) {
    animationId.value = requestAnimationFrame(springAnimation);
  } else {
    currentValue.value = target;
    updateDisplay();
    animationId.value = null;

    if (onEnd) {
      onEnd();
    }
  }
};

const canStart = computed(() => isSlideActive.value && $clicks.value >= at);

const startAnimation = () => {
  if (hasStarted.value || !canStart.value) return;

  hasStarted.value = true;

  if (onStart) {
    onStart();
  }

  setTimeout(() => {
    startTime = 0;
    velocity = 0;
    animationId.value = requestAnimationFrame(springAnimation);
  }, delay * 1000);
};

watch(
  [() => from, () => to, () => direction],
  () => {
    currentValue.value = direction === "down" ? to : from;
    updateDisplay();
    hasStarted.value = false;
  },
  { immediate: true }
);

watch(
  canStart,
  (value) => {
    if (value && !hasStarted.value) {
      startAnimation();
    }
  }
);

onMounted(() => {
  updateDisplay();
});

onUnmounted(() => {
  if (animationId.value) {
    cancelAnimationFrame(animationId.value);
    animationId.value = null;
  }
});
</script>

<template>
  <span ref="elementRef" :class="className" />
</template>
