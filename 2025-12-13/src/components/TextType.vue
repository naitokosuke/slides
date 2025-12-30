<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, computed, useTemplateRef } from "vue";
import { gsap } from "gsap";
import { useIsSlideActive, useSlideContext } from "@slidev/client";

const {
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorBlinkDuration = 0.5,
  cursorClassName,
  text,
  as = "div",
  typingSpeed = 50,
  delay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  at = 0,
  reverseMode = false
} = defineProps<{
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string;
  cursorBlinkDuration?: number;
  cursorClassName?: string;
  text: string | string[];
  as?: string;
  typingSpeed?: number;
  delay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
  onSentenceComplete?: (sentence: string, index: number) => void;
  at?: number;
  reverseMode?: boolean;
}>();

const isSlideActive = useIsSlideActive();
const { $clicks } = useSlideContext();

const displayedText = ref("");
const currentCharIndex = ref(0);
const isDeleting = ref(false);
const currentTextIndex = ref(0);
const hasStarted = ref(false);
const cursorRef = useTemplateRef("cursorRef");
const containerRef = useTemplateRef("containerRef");

const textArray = computed(() => (Array.isArray(text) ? text : [text]));
const canStart = computed(() => isSlideActive.value && $clicks.value >= at);

const getRandomSpeed = () => {
  if (!variableSpeed) return typingSpeed;
  const { min, max } = variableSpeed;
  return Math.random() * (max - min) + min;
};

const getCurrentTextColor = () => {
  if (!textColors.length) return "#ffffff";
  return textColors[currentTextIndex.value % textColors.length];
};

let timeout: ReturnType<typeof setTimeout> | null = null;

const executeTypingAnimation = () => {
  const currentText = textArray.value[currentTextIndex.value];
  const processedText = reverseMode ? currentText.split("").reverse().join("") : currentText;

  if (isDeleting.value) {
    if (displayedText.value === "") {
      isDeleting.value = false;
      if (currentTextIndex.value === textArray.value.length - 1 && !loop) return;

      onSentenceComplete?.(textArray.value[currentTextIndex.value], currentTextIndex.value);

      currentTextIndex.value = (currentTextIndex.value + 1) % textArray.value.length;
      currentCharIndex.value = 0;
      timeout = setTimeout(() => {}, pauseDuration);
    } else {
      timeout = setTimeout(() => {
        displayedText.value = displayedText.value.slice(0, -1);
      }, deletingSpeed);
    }
  } else {
    if (currentCharIndex.value < processedText.length) {
      timeout = setTimeout(
        () => {
          displayedText.value += processedText[currentCharIndex.value];
          currentCharIndex.value += 1;
        },
        variableSpeed ? getRandomSpeed() : typingSpeed
      );
    } else if (textArray.value.length > 1) {
      timeout = setTimeout(() => {
        isDeleting.value = true;
      }, pauseDuration);
    }
  }
};

const startAnimation = () => {
  if (hasStarted.value || !canStart.value) return;
  hasStarted.value = true;

  setTimeout(() => {
    executeTypingAnimation();
  }, delay * 1000);
};

watch(
  [displayedText, currentCharIndex, isDeleting],
  () => {
    if (!hasStarted.value) return;
    if (timeout) clearTimeout(timeout);
    executeTypingAnimation();
  }
);

watch(canStart, value => {
  if (value && !hasStarted.value) {
    startAnimation();
  }
});

onMounted(() => {
  if (showCursor && cursorRef.value) {
    gsap.set(cursorRef.value, { opacity: 1 });
    gsap.to(cursorRef.value, {
      opacity: 0,
      duration: cursorBlinkDuration,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });
  }
});
onBeforeUnmount(() => {
  if (timeout) clearTimeout(timeout);
});
</script>

<template>
  <component
    :is="as"
    ref="containerRef"
    :class="`inline-block whitespace-pre-wrap tracking-tight ${className}`"
    v-bind="$attrs"
  >
    <span class="inline" :style="{ color: getCurrentTextColor() }">
      {{ displayedText }}
    </span>
    <span
      v-if="showCursor"
      ref="cursorRef"
      :class="`ml-1 inline-block opacity-100 ${
        hideCursorWhileTyping && (currentCharIndex < textArray[currentTextIndex].length || isDeleting) ? 'hidden' : ''
      } ${cursorClassName}`"
    >
      {{ cursorCharacter }}
    </span>
  </component>
</template>
