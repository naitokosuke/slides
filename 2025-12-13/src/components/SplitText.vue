<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick, useTemplateRef, computed } from "vue"
import { gsap } from "gsap"
import { SplitText as GSAPSplitText } from "gsap/SplitText"
import { useIsSlideActive, useSlideContext } from "@slidev/client"

gsap.registerPlugin(GSAPSplitText)

const {
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  textAlign = "center",
  at = 0,
  onLetterAnimationComplete
} = defineProps<{
  text: string
  className?: string
  delay?: number
  duration?: number
  ease?: string | ((t: number) => number)
  splitType?: "chars" | "words" | "lines" | "words, chars"
  from?: gsap.TweenVars
  to?: gsap.TweenVars
  textAlign?: "left" | "center" | "right" | "justify"
  at?: number
  onLetterAnimationComplete?: () => void
}>()

const emit = defineEmits<{
  "animation-complete": []
}>()

const isSlideActive = useIsSlideActive()
const { $clicks } = useSlideContext()

const textRef = useTemplateRef<HTMLParagraphElement>("textRef")
const animationCompletedRef = ref(false)
const hasStarted = ref(false)
const timelineRef = ref<gsap.core.Timeline | null>(null)
const splitterRef = ref<GSAPSplitText | null>(null)
const targetsRef = ref<Element[]>([])

const canStart = computed(() => isSlideActive.value && $clicks.value >= at)

const initializeSplit = async () => {
  if (typeof window === "undefined" || !textRef.value || !text) return

  await nextTick()

  const el = textRef.value

  const absoluteLines = splitType === "lines"
  if (absoluteLines) el.style.position = "relative"

  let splitter: GSAPSplitText
  try {
    splitter = new GSAPSplitText(el, {
      type: splitType,
      absolute: absoluteLines,
      linesClass: "split-line"
    })
    splitterRef.value = splitter
  } catch (error) {
    console.error("Failed to create SplitText:", error)
    return
  }

  let targets: Element[]
  switch (splitType) {
    case "lines":
      targets = splitter.lines
      break
    case "words":
      targets = splitter.words
      break
    case "chars":
      targets = splitter.chars
      break
    default:
      targets = splitter.chars
  }

  if (!targets || targets.length === 0) {
    console.warn("No targets found for SplitText animation")
    splitter.revert()
    return
  }

  targetsRef.value = targets

  targets.forEach(t => {
    (t as HTMLElement).style.willChange = "transform, opacity"
  })

  gsap.set(targets, { ...from, immediateRender: true, force3D: true })
}

const startAnimation = () => {
  if (hasStarted.value || !canStart.value || targetsRef.value.length === 0) return

  hasStarted.value = true

  const targets = targetsRef.value

  const tl = gsap.timeline({
    smoothChildTiming: true,
    onComplete: () => {
      animationCompletedRef.value = true
      gsap.set(targets, {
        ...to,
        clearProps: "willChange",
        immediateRender: true
      })
      onLetterAnimationComplete?.()
      emit("animation-complete")
    }
  })

  timelineRef.value = tl

  tl.to(targets, {
    ...to,
    duration,
    ease,
    stagger: delay / 1000,
    force3D: true
  })
}

const cleanup = () => {
  if (timelineRef.value) {
    timelineRef.value.kill()
    timelineRef.value = null
  }
  if (splitterRef.value) {
    gsap.killTweensOf(textRef.value)
    splitterRef.value.revert()
    splitterRef.value = null
  }
  targetsRef.value = []
  hasStarted.value = false
  animationCompletedRef.value = false
}

watch(
  canStart,
  (value) => {
    if (value && !hasStarted.value) {
      startAnimation()
    }
  }
)

onMounted(async () => {
  await initializeSplit()
  if (canStart.value) {
    startAnimation()
  }
})

onUnmounted(() => {
  cleanup()
})

watch(
  [
    () => text,
    () => delay,
    () => duration,
    () => ease,
    () => splitType,
    () => from,
    () => to,
    () => onLetterAnimationComplete
  ],
  async () => {
    cleanup()
    await initializeSplit()
    if (canStart.value) {
      startAnimation()
    }
  }
)
</script>

<template>
  <p
    ref="textRef"
    :class="`split-parent inline-block whitespace-normal ${className}`"
    :style="{
      textAlign,
      wordWrap: 'break-word'
    }"
  >
    {{ text }}
  </p>
</template>
