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

<p text-9xl>よーい</p>

<StartButton @click="$slidev.nav.next()" />

---
layout: BiimSystem
text: スタート！
megaton: true
section: しょうかい
chart: "かいしゃから\nおうちまで"
gaba: 0
---

<p text-6xl>🏢 高田馬場</p>
<p text-2xl op-70>たいきん ポチッ</p>

---
layout: BiimSystem
text: まずは先く者兄きのチャートのかくにんですね
section: ルートかいせつ
gaba: 0
---

<template #chart>
<RouteChart :items="[
  { type: 'station', name: '高田馬場' },
  { type: 'line', name: '山手線', time: 20, color: '#9acd32' },
  { type: 'station', name: '西日っぽ里' },
  { type: 'line', name: '千代田線', time: 35, color: '#00bb85' },
  { type: 'station', name: '南かしわ' },
]" />
</template>

<p text-8xl>🚃</p>
<p text-2xl mt-4>山手線ホームへダッシュ</p>

---
layout: BiimSystem
text: これがオリチャーです、研究中
section: ルートかいせつ
gaba: 0
---

<template #chart>
<RouteChart :items="[
  { type: 'station', name: '高田馬場' },
  { type: 'line', name: '東西線', time: 15, color: '#00a7db' },
  { type: 'station', name: '大手町' },
  { type: 'line', name: '千代田線', time: 40, color: '#00bb85' },
  { type: 'station', name: '南かしわ' },
]" />
</template>

<p text-8xl>🚇</p>
<p text-2xl mt-4>東西線ホームへダッシュ</p>

---
layout: BiimSystem
text: ここで寝落ちするとタイム終了です
megaton: true
section: ガバポイント
chart: "南かしわ\n↓ 寝落ち\n我孫子\n↓ 爆睡\n取手"
gaba: 1
---

<p text-7xl>😴💤</p>
<p text-2xl mt-4>寝落ち乗り過ごし</p>
<p text-xl op-70>気づいたら取手</p>

---
layout: BiimSystem
text: 飲みイベントは実質タイマーストップ
megaton: true
section: ガバポイント
chart: "南かしわ着\n↓\n地元で飲む\n↓\n記憶なし"
gaba: 99
---

<p text-7xl>🍺🍻</p>
<p text-2xl mt-4>地元で飲んでから帰宅</p>
<p text-xl op-70>これはもう別カテゴリ</p>

---
layout: BiimSystem
text: おつかれさまでした
megaton: true
section: ゴール
chart: "高田馬場\n↓\n南かしわ\n🏠"
gaba: 0
---

<p text-8xl>🏠</p>
<p text-3xl mt-4>ゴール！</p>
