---
title: ぼくのきたく RTA
transition: view-transition
fonts:
  sans: "Kodomo Rounded"
  mono: "Fira Code"
layout: cover
---

# ぼくのきたく

---
layout: BiimSystem
text: はい、はつとうこうです。よろしくおねがいします
megaton: true
section: しょうかい
chart: "かいしゃから\nおうちまで"
gaba: 0
---

<p text-4xl>レギュレーション</p>

<div text-left text-xl mt-4 space-y-2>
  <p>カテゴリ: Any%</p>
  <p>けいそくかいし: たいきんボタンをおしたしゅんかん</p>
  <p>けいそくしゅうりょう: じたくのげんかんをあけたしゅんかん</p>
</div>

---
layout: BiimSystem
text: つづいてレギュレーションですね
section: しょうかい
chart: "かいしゃから\nおうちまで"
gaba: 0
---

<p text-4xl>レギュレーション</p>

<div text-left text-xl mt-4 space-y-2>
  <p>しようかのう: でんしゃ、バス、とほ</p>
  <p>きんし: タクシー、じてんしゃ、じかようしゃ</p>
  <p>びこう: ねおちは 1 かいまでゆるされます</p>
</div>

---
layout: BiimSystem
text: はい、それではスタートしていきます
megaton: true
section: しょうかい
chart: "かいしゃから\nおうちまで"
gaba: 0
---

<p text-9xl>よーい</p>

<StartButton label="しゅっきん" @click="$slidev.nav.next()" />
<StartButton label="たいきん" @click="$slidev.nav.next()" />

---
layout: BiimSystem
text: たいきんをおしてスタート
megaton: true
section: しょうかい
chart: "かいしゃから\nおうちまで"
gaba: 1
---

<p text-6xl>🏢高田馬場🤮</p>
<p text-2xl op-70>ポチッ</p>

---
layout: BiimSystem
text: まずせんくしゃ兄きのチャート
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
<p text-2xl mt-4>山手線ルート</p>

---
layout: BiimSystem
text: ただ山手線はひとが多いきがするんですよね
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

<p text-7xl>👥👥👥</p>
<p text-7xl>👥👥👥</p>
<p text-7xl>👥👥👥</p>

---
layout: BiimSystem
text: にっこり帰りたいので
megaton: true
section: ルートかいせつ
gaba: 1
---

<template #chart>

</template>

<p text-8xl>オリチャー発動！</p>

---
layout: BiimSystem
text: オリチャーの東西線ルートでいきます
megaton: true
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
<p text-2xl mt-4>東西線ルートをさいようします</p>

---
layout: BiimSystem
text: 大手町のりかえがネックですが、れんしゅうでカバーしていきます
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

<p text-6xl>🗺️</p>
<p text-2xl mt-4>大手町ダンジョン</p>
<p text-xl op-70>ほろよい気分でカバー</p>

---
layout: BiimSystem
text: ねおちするとタイムしゅうりょうです
megaton: true
section: ガバポイント
chart: "南かしわ\n↓ ねおち\n我孫子\n↓ ばくすい\n取手"
gaba: 1
---

<p text-7xl>😴💤</p>
<p text-2xl mt-4>ねおちのりすごし</p>
<p text-xl op-70>取手(BADEND)</p>

---
layout: BiimSystem
text: これはRTAてきにはダメですね、タイマーストップあつかいです
megaton: true
section: ガバポイント
chart: "南かしわ着\n↓\n地元でのむ\n↓\nきおくなし"
gaba: 99
---

<p text-7xl>🍺🍻</p>
<p text-2xl mt-4>地元でのんでからきたく</p>
<p text-xl op-70>これはもうべつカテゴリ</p>

---
layout: BiimSystem
text: のみありカテゴリはじつはあります、せんくしゃ兄きにかんしゃ
section: ガバポイント
chart: "南かしわ着\n↓\n地元でのむ\n↓\nきおくなし"
gaba: 99
---

<p text-6xl>📊</p>
<p text-2xl mt-4>べつカテゴリとしてけいそく中</p>
<p text-xl op-70>のみありAny%</p>

---
layout: BiimSystem
text: はい、おつかれさまでした。ご視聴ありがとうございました
megaton: true
section: ゴール
chart: "高田馬場\n↓\n南かしわ\n🏠"
gaba: 0
---

<p text-8xl>🏠</p>
<p text-3xl mt-4>ゴール！</p>
<p text-xl op-70 mt-2>WR めざしてがんばります</p>
