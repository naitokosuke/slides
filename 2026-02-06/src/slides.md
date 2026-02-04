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
gaba: 1
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
text: まずかいしゃちかくのコンビニにIN
section: バフかくとく
gaba: 1
---

<template #chart>

<div text-sm space-y-1>
  <p>🏢たいきん</p>
  <carbon-arrow-down mx-auto />
  <p>🏪コンビニ</p>
  <carbon-arrow-down mx-auto />
  <p>🚃えき</p>
</div>
</template>

<p text-8xl>🏪</p>
<p text-2xl mt-4>ファミマIN</p>
<p text-xl op-70>これがじゅうようです</p>

---
layout: BiimSystem
text: ほろよいをかくほ...あっ
section: バフかくとく
gaba: 1
---

<template #chart>

<div text-sm space-y-1>
  <p>🏢たいきん</p>
  <carbon-arrow-down mx-auto />
  <p>🏪コンビニ</p>
  <carbon-arrow-down mx-auto />
  <p>🚃えき</p>
</div>
</template>

<p text-7xl>🍑</p>
<p text-3xl mt-4>ほろよい</p>
<p text-xl op-70>もも味をねらいます</p>

---
layout: BiimSystem
text: ガバです、ストゼロつかんでました
megaton: true
section: バフかくとく
gaba: 2
---

<template #chart>

<div text-sm space-y-1>
  <p>🏢たいきん</p>
  <carbon-arrow-down mx-auto />
  <p>🏪コンビニ</p>
  <carbon-arrow-down mx-auto />
  <p>🚃えき</p>
</div>
</template>

<p text-7xl>🍋</p>
<p text-3xl mt-4>ストロングゼロ</p>
<p text-xl op-70>レモン</p>

---
layout: BiimSystem
text: ここでそくプシュですね、RTAのきほんです
megaton: true
section: バフかくとく
gaba: 1
---

<template #chart>

<div text-sm space-y-1>
  <p>🏢たいきん</p>
  <carbon-arrow-down mx-auto />
  <p>🏪コンビニ</p>
  <carbon-arrow-down mx-auto />
  <p>🚃えき</p>
</div>
</template>

<p text-8xl>🫳🍋💨</p>
<p text-3xl mt-4>そくプシュ</p>
<p text-xl op-70>これがタイムたんしゅくのカギ</p>

---
layout: BiimSystem
text: ほろよいバフがつきました、きたくがラクになります
section: バフかくとく
gaba: 1
---

<template #chart>

<div text-sm space-y-1>
  <p>🏢たいきん</p>
  <carbon-arrow-down mx-auto />
  <p>🏪コンビニ</p>
  <carbon-arrow-down mx-auto />
  <p>🚃えき</p>
</div>
</template>

<p text-6xl>✨🧑✨</p>
<p text-2xl mt-4>ほろよいバフ付与</p>
<div text-left text-lg mt-4 space-y-1 mx-auto w-fit>
  <p>・ストレスたいせい +50</p>
  <p>・だんじょんこうりゃく +30</p>
  <p>・ねおちリスク +20</p>
</div>

---
layout: BiimSystem
text: バフをのせたままえきにむかいます
section: バフかくとく
gaba: 1
---

<template #chart>

<div text-sm space-y-1>
  <p>🏢たいきん</p>
  <carbon-arrow-down mx-auto />
  <p>🏪コンビニ</p>
  <carbon-arrow-down mx-auto />
  <p>🚃えき</p>
</div>
</template>

<p text-8xl>🚶✨</p>
<p text-2xl mt-4>えきにいどう</p>
<p text-xl op-70>のみながらあるく</p>

---
layout: BiimSystem
text: ただ山手線はひとが多いきがするんですよね
section: ルートかいせつ
gaba: 1
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
gaba: 1
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
gaba: 1
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
gaba: 1
---

<template #chart>

<div text-sm space-y-1>
  <p>南かしわ</p>
  <div flex items-center justify-center gap-1>
    <carbon-arrow-down />
    <span text-xs>ねおち</span>
  </div>
  <p>我孫子</p>
  <div flex items-center justify-center gap-1>
    <carbon-arrow-down />
    <span text-xs>ばくすい</span>
  </div>
  <p>取手</p>
</div>
</template>

<p text-7xl>😴💤</p>
<p text-2xl mt-4>ねおちのりすごし</p>
<p text-xl op-70>取手(BADEND)</p>

---
layout: BiimSystem
text: これはRTAてきにはダメですね、タイマーストップあつかいです
megaton: true
section: ガバポイント
gaba: 99
---

<template #chart>

<div text-sm space-y-1>
  <p>南かしわ着</p>
  <carbon-arrow-down mx-auto />
  <p>地元でのむ</p>
  <carbon-arrow-down mx-auto />
  <p>きおくなし</p>
</div>
</template>

<p text-7xl>🍺🍻</p>
<p text-2xl mt-4>地元でのんでからきたく</p>
<p text-xl op-70>これはもうべつカテゴリ</p>

---
layout: BiimSystem
text: のみありカテゴリはじつはあります、せんくしゃ兄きにかんしゃ
section: ガバポイント
gaba: 99
---

<template #chart>

<div text-sm space-y-1>
  <p>南かしわ着</p>
  <carbon-arrow-down mx-auto />
  <p>地元でのむ</p>
  <carbon-arrow-down mx-auto />
  <p>きおくなし</p>
</div>
</template>

<p text-6xl>📊</p>
<p text-2xl mt-4>べつカテゴリとしてけいそく中</p>
<p text-xl op-70>のみありAny%</p>

---
layout: BiimSystem
text: はい、おつかれさまでした。ご視聴ありがとうございました
megaton: true
section: ゴール
gaba: 1
---

<template #chart>

<div text-sm space-y-1>
  <p>高田馬場</p>
  <carbon-arrow-down mx-auto />
  <p>南かしわ</p>
  <p>🏠</p>
</div>
</template>

<p text-8xl>🏠</p>
<p text-3xl mt-4>ゴール！</p>
<p text-xl op-70 mt-2>WR めざしてがんばります</p>
