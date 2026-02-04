---
title: ぼくのきたく
transition: view-transition
fonts:
  sans: "Kodomo Rounded"
  mono: "Fira Code"
layout: cover
---

# ぼくのきたく

---
layout: BiimSystem
text: はつとうこうです
megaton: true
section: しょうかい
chart: "かいしゃから\nおうちまで"
gaba: 0
---

<script setup lang="ts">
import { inject } from "vue";

const timerRef = inject<any>("timer");

const handleStart = () => {
  timerRef?.value?.start();
  $slidev.nav.next();
};
</script>

<p text-9xl>よーい</p>

<StartButton @click="handleStart" />

---
layout: BiimSystem
text: スタート！
section: しょうかい
chart: "かいしゃから\nおうちまで"
gaba: 0
---

<p text-9xl>スタート！</p>
