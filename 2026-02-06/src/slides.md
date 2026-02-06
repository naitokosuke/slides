---
title: ぼくのきたく
favicon: /images/icon.png
transition: view-transition
fonts:
  sans: "Kodomo Rounded"
  mono: "Fira Code"
seoMeta:
  ogTitle: ぼくのきたく
  ogImage: https://slides.naito.dev/2026-02-06/og-image.png
  ogUrl: https://slides.naito.dev/2026-02-06/
  twitterCard: summary_large_image
layout: cover
---

# ぼくのきたく

---
layout: BiimSystem
text: 『ぼくのきたく』 LT は〜じ〜ま〜るよ〜
megaton: true
section: しょうかい
chart: "かいしゃから\nおうちまで"
gaba: 0
---

<p text-4xl>レギュレーション</p>

<div text-left text-xl mt-4 space-y-2>
  <p>カテゴリ: Any%</p>
  <p>けいそくかいし: たいきんボタンをおしたしゅんかん</p>
  <p>けいそくしゅうりょう: おうちのげんかんをあけたしゅんかん</p>
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
text: 内ようがないよう
section: かえりたい
chart: "学びようそは\nないです"
gaba: 0
---

<p text-7xl>トイレ休けいわくだよ</p>

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
text: 山手線をり用するため駅に向かいます
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
text: ひつようなアイテムを手に入れるためコンビニへ
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
<p text-2xl mt-4>コンビニへ</p>
<p text-xl op-70>(絵文字あってる？)</p>

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
text: でも時間はないのでストゼロでOKとします
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

<p text-8xl>🫳🍋💨</p>
<p text-3xl mt-4>そくプシュ</p>
<p text-xl op-70>これがタイムたんしゅくのカギ</p>

---
layout: BiimSystem
text: ほろよいバフがつきました、きたくがラクになります
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

<p text-8xl>🚶✨</p>
<p text-2xl mt-4>えきにいどう</p>
<p text-xl op-70>のみながらあるく</p>

---
layout: BiimSystem
text: ただ山手線はひとが多いきがするんですよね
section: ルートかいせつ
gaba: 2
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
gaba: 2
---

<template #chart>

<div text-sm space-y-2>
  <p>ん？</p>
  <p>あっ</p>
  <p>これは...</p>
  <p text-lg font-bold>💡</p>
</div>
</template>

<p text-8xl>オリチャー発動！</p>

---
layout: BiimSystem
text: オリチャーの東西線ルートでいきます
megaton: true
section: ルートかいせつ
gaba: 2
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
text: 大手町のりかえがネックですが、ほろよいでカバーしていきます
section: ルートかいせつ
gaba: 2
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
text: ここでねおちすると取手なのできをつけます
section: ルートかいせつ
gaba: 2
---

<template #chart>
<RouteChart :items="[
  { type: 'station', name: '高田馬場' },
  { type: 'line', name: '東西線', time: 15, color: '#00a7db' },
  { type: 'station', name: '大手町' },
  { type: 'line', name: '千代田線', time: 40, color: '#00bb85', active: true },
  { type: 'station', name: '南かしわ' },
]" />
</template>

<p text-8xl>🚃💤</p>
<p text-2xl mt-4>千代田線</p>
<p text-xl op-70>ねおちちゅうい</p>

---
layout: BiimSystem
text: ぎじゅつしょをよんでねおちをかいひします
section: ルートかいせつ
gaba: 2
---

<template #chart>
<RouteChart :items="[
  { type: 'station', name: '高田馬場' },
  { type: 'line', name: '東西線', time: 15, color: '#00a7db' },
  { type: 'station', name: '大手町' },
  { type: 'line', name: '千代田線', time: 40, color: '#00bb85', active: true },
  { type: 'station', name: '南かしわ' },
]" />
</template>

<p text-8xl>📖👀</p>
<p text-2xl mt-4>ぎじゅつしょでねおちかいひ</p>
<p text-xl op-70>よむことでいしきをたもつ</p>

---
layout: BiimSystem
text: ...
megaton: true
section: ルートかいせつ
gaba: 3
---

<template #chart>
<RouteChart :items="[
  { type: 'station', name: '高田馬場' },
  { type: 'line', name: '東西線', time: 15, color: '#00a7db' },
  { type: 'station', name: '大手町' },
  { type: 'line', name: '千代田線', time: 40, color: '#00bb85', active: true },
  { type: 'station', name: '南かしわ' },
]" />
</template>

<p text-8xl>📖😴💤</p>
<p text-2xl mt-4>あーあ</p>
<p text-xl op-70>ぐーぐー</p>

---
layout: BiimSystem
text: 新まつ戸でおきました、セーフです
megaton: true
section: ルートかいせつ
gaba: 3
---

<template #chart>
<RouteChart :items="[
  { type: 'station', name: '高田馬場' },
  { type: 'line', name: '東西線', time: 15, color: '#00a7db' },
  { type: 'station', name: '大手町' },
  { type: 'line', name: '千代田線', time: 40, color: '#00bb85', active: true },
  { type: 'station', name: '南かしわ' },
]" />
</template>

<p text-8xl>😳✨</p>
<p text-2xl mt-4>新まつ戸でかくせい</p>
<p text-xl op-70>のりすごしかいひ！</p>

---
layout: BiimSystem
text: ぶ事に南かしわにとうちゃくしました
megaton: true
section: きたくパート
gaba: 2
---

<template #chart>
<RouteChart :items="[
  { type: 'station', name: '高田馬場' },
  { type: 'line', name: '東西線', time: 15, color: '#00a7db' },
  { type: 'station', name: '大手町' },
  { type: 'line', name: '千代田線', time: 40, color: '#00bb85' },
  { type: 'station', name: '南かしわ', active: true },
]" />
</template>

<p text-8xl>🚉</p>
<p text-2xl mt-4>南かしわ とうちゃく</p>
<p text-xl op-70>ここからがほんばん</p>

---
layout: BiimSystem
text: ひつよう行動をたっせいします
section: もより駅についた
gaba: 2
---

<template #chart>

<div text-sm space-y-1>
  <p>🚉南かしわ</p>
  <carbon-arrow-down mx-auto />
  <p>🍺のむ</p>
  <carbon-arrow-down mx-auto />
  <p>🚌バス</p>
  <carbon-arrow-down mx-auto />
  <p>🏠おうち</p>
</div>
</template>

<p text-8xl>🍺🍻</p>
<p text-2xl mt-4>南かしわでのむ</p>
<p text-xl op-70>これがメインイベント</p>

---
layout: BiimSystem
text: いい気分でのんでいたら...
section: きたくパート
gaba: 2
---

<template #chart>

<div text-sm space-y-1>
  <p>🚉南かしわ</p>
  <carbon-arrow-down mx-auto />
  <p>🍺のむ</p>
  <carbon-arrow-down mx-auto />
  <p>🚌バス</p>
  <carbon-arrow-down mx-auto />
  <p>🏠おうち</p>
</div>
</template>

<p text-8xl>🍻😊</p>
<p text-2xl mt-4>いい気分</p>
<p text-xl op-70>さいこう</p>

---
layout: BiimSystem
text: 終バスが行ってしまっていました
megaton: true
section: ガバ
gaba: 3
---

<template #chart>

<div text-sm space-y-1>
  <p>🚉南かしわ</p>
  <carbon-arrow-down mx-auto />
  <p>🍺のむ</p>
  <carbon-arrow-down mx-auto />
  <p op-50 line-through>🚌バス</p>
  <carbon-arrow-down mx-auto />
  <p>🏠おうち</p>
</div>
</template>

<p text-8xl>🚌❌</p>
<p text-2xl mt-4>バス終りょう</p>
<p text-xl op-70>お酒ってこわい</p>

---
layout: BiimSystem
text: あるくしかないですね
section: きたくパート
gaba: 3
---

<template #chart>

<div text-sm space-y-1>
  <p>🚉南かしわ</p>
  <carbon-arrow-down mx-auto />
  <p>🍺のむ</p>
  <carbon-arrow-down mx-auto />
  <p>🚶とほ</p>
  <carbon-arrow-down mx-auto />
  <p>🏠おうち</p>
</div>
</template>

<p text-8xl>🚶</p>
<p text-2xl mt-4>とほにへんこう</p>
<p text-xl op-70>しかたない</p>

---
layout: BiimSystem
text: よっぱらいながらやみよをあるきます
section: きたくパート
gaba: 3
---

<template #chart>

<div text-sm space-y-1>
  <p>🚉南かしわ</p>
  <carbon-arrow-down mx-auto />
  <p>🍺のむ</p>
  <carbon-arrow-down mx-auto />
  <p>🚶とほ</p>
  <carbon-arrow-down mx-auto />
  <p>🏠おうち</p>
</div>
</template>

<p text-8xl>🌙🚶💫</p>
<p text-2xl mt-4>よみちをあるく</p>
<p text-xl op-70>ふらふら</p>

---
layout: BiimSystem
text: おうちがみえてきました
megaton: true
section: きたくパート
gaba: 3
---

<template #chart>

<div text-sm space-y-1>
  <p>🚉南かしわ</p>
  <carbon-arrow-down mx-auto />
  <p>🍺のむ</p>
  <carbon-arrow-down mx-auto />
  <p>🚶とほ</p>
  <carbon-arrow-down mx-auto />
  <p>🏠おうち</p>
</div>
</template>

<p text-8xl>🏠</p>
<p text-2xl mt-4>おうちはっけん</p>
<p text-xl op-70>あとすこし</p>

---
layout: BiimSystem
text: げんかんをあけます、ここでタイマーストップです
megaton: true
section: きたくパート
gaba: 3
---

<template #chart>

<div text-sm space-y-1>
  <p>🚉南かしわ</p>
  <carbon-arrow-down mx-auto />
  <p>🍺のむ</p>
  <carbon-arrow-down mx-auto />
  <p>🚶とほ</p>
  <carbon-arrow-down mx-auto />
  <p>🏠おうち</p>
</div>
</template>

<StopButton label="🚪げんかんオープン" @click="$slidev.nav.next()" />

---
layout: BiimSystem
text: はい、おつかれさまでした。ごしちょうありがとうございました
megaton: true
section: ゴール
gaba: 3
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
<p text-xl op-70 mt-2>ザ・エンドってね</p>
