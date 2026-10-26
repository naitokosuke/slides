<!--
  Prompt lines typed into an agent's input box, one character at a time, when the slide is shown.
  Each line is a list of parts; a part is plain text or { code } for inline code.
  The untyped rest of every line keeps its place, so the box never changes size while typing.
-->
<script setup lang="ts">
import { onSlideEnter, onSlideLeave } from "@slidev/client";
import { computed, onBeforeUnmount, ref } from "vue";

type Part = string | { code: string };

const props = defineProps<{ lines: Part[][] }>();

// Typing pace, in milliseconds
const perCharacter = 32;
const betweenLines = 450;
const beforeFirst = 300;

const textOf = (part: Part) => (typeof part === "string" ? part : part.code);

// Where each line starts and ends, counted in characters across all lines
const bounds = computed(() => {
  let start = 0;
  return props.lines.map((line) => {
    const length = line.reduce((sum, part) => sum + textOf(part).length, 0);
    const range = { start, end: start + length };
    start = range.end;
    return range;
  });
});
const total = computed(() => bounds.value.at(-1)?.end ?? 0);

// Characters typed so far; everything shows until the slide plays it
const typed = ref(Number.POSITIVE_INFINITY);

const rows = computed(() => {
  const states = bounds.value.map(({ start, end }, i) =>
    typed.value <= start && i > 0
      ? "waiting"
      : typed.value < end
        ? "typing"
        : "done",
  );
  // The cursor stays on the last line that has started, even after it is finished
  const active = states.findLastIndex((state) => state !== "waiting");
  return props.lines.map((line, i) => {
    let left = Math.max(typed.value - bounds.value[i].start, 0);
    let cursorPlaced = false;
    const parts = line.map((part, j) => {
      const text = textOf(part);
      const shown = Math.min(left, text.length);
      left -= shown;
      // After the last typed character: in the first part not fully typed, or after the last part
      const cursor =
        i === active &&
        !cursorPlaced &&
        (shown < text.length || j === line.length - 1);
      if (cursor) cursorPlaced = true;
      return {
        code: typeof part !== "string",
        done: text.slice(0, shown),
        rest: text.slice(shown),
        cursor,
      };
    });
    return { state: states[i], parts };
  });
});

let timer = 0;

function stop() {
  window.clearTimeout(timer);
}

function play() {
  stop();
  typed.value = 0;
  const ends = new Set(bounds.value.map((b) => b.end));
  const step = () => {
    typed.value += 1;
    if (typed.value >= total.value) return;
    timer = window.setTimeout(
      step,
      ends.has(typed.value) ? betweenLines : perCharacter,
    );
  };
  timer = window.setTimeout(step, beforeFirst);
}

const reducedMotion =
  typeof matchMedia === "function" &&
  matchMedia("(prefers-reduced-motion: reduce)").matches;

onSlideEnter(() => {
  if (!reducedMotion) play();
});
onSlideLeave(() => {
  stop();
  typed.value = Number.POSITIVE_INFINITY;
});
onBeforeUnmount(stop);
</script>

<template>
  <div class="prompt">
    <template v-for="(row, i) in rows" :key="i">
      <span class="caret" :class="row.state" aria-hidden="true">&gt;</span>
      <p :class="row.state">
        <template v-for="(part, j) in row.parts" :key="j">
          <component
            :is="part.code ? 'code' : 'span'"
            :class="{ rest: !part.done && !part.cursor }"
          >
            {{ part.done
            }}<span v-if="part.cursor" class="cursor" aria-hidden="true" /><span
              class="rest"
              >{{ part.rest }}</span
            >
          </component>
        </template>
      </p>
    </template>
  </div>
</template>

<style scoped>
.waiting {
  visibility: hidden;
}

.rest {
  visibility: hidden;
}

/* A block cursor that blinks and takes no room, so the text never shifts */
.cursor {
  display: inline-block;
  width: var(--size-cursor);
  height: 1em;
  margin-right: calc(var(--size-cursor) * -1);
  vertical-align: text-bottom;
  background: var(--color-text);
  animation: blink var(--duration-blink) steps(1) infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
