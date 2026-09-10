---
theme: default
transition: slide-left
title: 最高の DX - Nuxt Typed Router と Pinia Colada で実現する次世代 Vue/Nuxt 開発
favicon: "/naitokosuke-sns-icon.png"
monacoTypesSource: local
colorSchema: dark
fonts:
  sans: "Noto Sans JP"
  serif: "Murecho"
  mono: "JetBrains Mono"
info: |
  ## 最高の DX - Nuxt Typed Router と Pinia Colada で実現する次世代 Vue/Nuxt 開発

  Vue Fes Japan 2025 での発表スライドです。

  Speaker: ナイトウコウスケ (@naitokosuke)
seoMeta:
  description: "Vue Fes Japan 2025 『最高の DX - Nuxt Typed Router と Pinia Colada で実現する次世代 Vue/Nuxt 開発』の登壇資料"
  keywords: "Vue.js, Nuxt, TypeScript, Nuxt Typed Router, Pinia Colada, DX, Vue Fes Japan 2025"
  author: "ナイトウコウスケ"
  ogTitle: "最高の DX - Nuxt Typed Router と Pinia Colada で実現する次世代 Vue/Nuxt 開発"
  ogDescription: "Vue Fes Japan 2025 『最高の DX - Nuxt Typed Router と Pinia Colada で実現する次世代 Vue/Nuxt 開発』の登壇資料"
  ogImage: "https://naitokosuke.github.io/vue-fes-japan-2025-slide/og-image.png"
  ogType: "website"
  ogUrl: "https://naitokosuke.github.io/vue-fes-japan-2025-slide/"
  twitterCard: "summary_large_image"
  twitterSite: "@naitokosuke"
  twitterCreator: "@naitokosuke"
  twitterTitle: "最高の DX - Nuxt Typed Router と Pinia Colada で実現する次世代 Vue/Nuxt 開発"
  twitterDescription: "Vue Fes Japan 2025 『最高の DX - Nuxt Typed Router と Pinia Colada で実現する次世代 Vue/Nuxt 開発』の登壇資料"
  twitterImage: "https://naitokosuke.github.io/vue-fes-japan-2025-slide/og-image.png"
download: false
---

<Cover />

---
layout: center
---

<div class="text-center">
  <p class="text-8xl">Built with</p>
  <logos-slidev class="text-9xl " />
  <p class="text-8xl">Powered by</p>
</div>

---
layout: center
---

<div class="h-full grid place-items-center">
  <QRCode url="https://naitokosuke.github.io/vue-fes-japan-2025-slide-lite/" :size="500" />
  <a class="text-3xl opacity-80" href="https://naitokosuke.github.io/vue-fes-japan-2025-slide-lite/">https://naitokosuke.github.io/vue-fes-japan-2025-slide-lite/</a>
</div>

---
layout: center
transition: fade
---

<div class="h-full grid place-items-center">
  <QRCode url="https://naitokosuke.github.io/vue-fes-japan-2025-slide/" :size="500" />
  <a class="text-3xl opacity-80" href="https://naitokosuke.github.io/vue-fes-japan-2025-slide/">https://naitokosuke.github.io/vue-fes-japan-2025-slide/</a>
</div>

---
layout: center
---

<TweetButton
  text="『最高の DX - Nuxt Typed Router と Pinia Colada で実現する次世代 Vue/Nuxt 開発』の発表を見てます"
  button-text="「ナイトウの発表を見にきました」をツイート"
  variant="success"
/>

---

<div class="h-full grid place-items-center">
  <div class="place-items-center p-1rem text-center">
    <div class="grid grid-flow-col auto-cols-max items-center gap-6">
      <a href="https://x.com/naitokosuke" target="_blank" rel="noopener">
        <img src="/naitokosuke-sns-icon.png" class="w-42 drop-shadow-[0_16px_38px_rgba(0,0,0,0.28)]" />
      </a>
      <span class="text-7xl font-bold tracking-wide text-white">
        ナイトウコウスケ
      </span>
    </div>
    <p class="text-5xl">
      Composition API 生まれ<br />script setup 育ち
    </p>
    <logos-vue class="text-6xl" />
  </div>
</div>

---
transition: view-transition
---

<div class="grid place-items-center h-full">
  <img src="/mates-logo.png" class="w-1/2 mates-logo" style="view-transition-name: mates-logo" />
</div>

---
class: text-6xl
---

<div class="grid h-full w-full place-items-center gap-8">
  <div class="flex items-center gap-6 justify-self-center">
    <img src="/mates-logo.png" class="mates-logo w-10rem" style="view-transition-name: mates-logo" />
    <span class="text-7xl font-bold">株式会社メイツ</span>
  </div>
  <div class="grid grid-cols-[auto_auto_1fr] items-center gap-x-6 justify-self-center">
    <logos-vue class="text-7xl" />
    <logos-nuxt-icon class="text-7xl" />
    <img src="/edutech.png" class="w-140 rounded-xl shadow-xl" alt="EdTech" />
  </div>
</div>

<Overlay v-click type="full">
  <div class="grid place-items-center h-full w-full p-8">
    <img src="/wantedly.png" class="w-9/10 rounded-2xl shadow-2xl" alt="Wantedly" />
  </div>
</Overlay>

<Overlay v-click="2" type="fit-content" bottom="40%" left="11%" :z-index="1001" class="text-black text-7xl">
  カジュアル面談募集中
</Overlay>

---
transition: fade
---

<iframe src="/2025-06-17/" class="w-full h-full" title="Vue.js Tokyo v23 LT" />

---

<div class="h-full grid place-items-center">
  <QRCode url="https://slides.naito.dev/2025-06-17/" :size="400" />
  <a class="text-4xl opacity-80" href="https://slides.naito.dev/2025-06-17/">https://slides.naito.dev/2025-06-17/</a>
</div>

---
layout: center
class: text-center
transition: fade
---

<div class="absolute inset-0 flex items-center justify-center p-8">
  <img src="/vue-fes-japan-2025.png" alt="Vue Fes Japan 2025" class="max-w-4xl max-h-full object-contain rounded-3xl shadow-2xl" />
</div>

---
layout: center
class: text-center
---

<div class="absolute inset-0 flex items-center justify-center p-8">
  <img src="/vue-fes-japan-2025.png" alt="Vue Fes Japan 2025" class="max-w-4xl max-h-full object-contain rounded-3xl shadow-2xl opacity-40" />
</div>

<div class="z-10">
  <div class="grid grid-cols-3 gap-8 text-center">
    <div class="flex flex-col items-center justify-center p-6 rounded-lg bg-warm-gold/10 backdrop-blur">
      <div class="text-6xl font-bold text-warm-gold mb-3">57</div>
      <div class="text-xl text-green">スポンサー企業</div>
    </div>
    <div class="flex flex-col items-center justify-center p-6 rounded-lg bg-warm-gold/10 backdrop-blur">
      <div class="text-6xl font-bold text-warm-gold mb-3">44</div>
      <div class="text-xl text-green">個人スポンサー</div>
    </div>
    <div class="flex flex-col items-center justify-center p-6 rounded-lg bg-warm-gold/10 backdrop-blur">
      <div class="text-6xl font-bold text-warm-gold mb-3">54</div>
      <div class="text-xl text-green">スタッフ</div>
    </div>
  </div>

  <div class="grid grid-cols-2 gap-8 text-center mt-8">
    <div class="flex flex-col items-center justify-center p-6 rounded-lg bg-warm-gold/10 backdrop-blur">
      <div class="text-6xl font-bold text-warm-gold mb-3">35</div>
      <div class="text-xl text-green">ボランティア</div>
    </div>
    <div class="flex flex-col items-center justify-center p-6 rounded-lg bg-warm-gold/10 backdrop-blur">
      <div class="text-6xl font-bold text-warm-gold mb-3">42</div>
      <div class="text-xl text-green">登壇者</div>
    </div>
  </div>

  <div class="mt-12 text-4xl  font-bold">
    Vue Fes Japan 2025 に関わる数
  </div>

  <div class="absolute bottom-32 right-4 text-sm text-left">
    ざっくり数え(重複ありあり)<br />
  </div>
</div>

---
layout: section
---

<p class="font-yuji-syuku">感謝</p>

---

## Vue Fes Japan 2024

<div class="grid grid-cols-2 gap-8 place-items-center">
  <Youtube id="gQOVFrb93Uc" :width="360" :height="200" />
  <Youtube id="kXOP7UkiTJA" :width="360" :height="200" />
  <Youtube id="lhjS-6FIxgk" :width="360" :height="200" />
  <Youtube id="H7ZMaUVFgoQ" :width="360" :height="200" />
</div>

<Overlay type="fit-content" top="16rem" left="15%" :z-index="1001" class="text-6xl opacity-85">
  ありがとうございます！
</Overlay>

---

<Tweet id="1847546966844080203" scale="1.6" />

---
transition: fade
---

<div class="h-full grid place-items-center">
  <p class="text-9xl">
    <logos-vue /> <logos-nuxt-icon />
  </p>
</div>

---
transition: fade
---

<div class="grid grid-cols-2 place-items-center gap-20 h-full ">
  <logos-react class="text-9xl" />
  <logos-nextjs-icon class="text-9xl" />
  <logos-remix-icon class="text-9xl" />
  <logos-react-router class="text-9xl" />
</div>

---
transition: fade
---

<div class="grid place-items-center h-full">
  <logos-angular-icon class="text-9xl" />
  <logos-analog class="text-9xl" />
</div>

---
transition: fade
---

<div class="grid place-items-center h-full">
  <logos-svelte-icon class="text-9xl" />
</div>

---
transition: fade
---

<div class="grid place-items-center h-full">
  <logos-solidjs-icon class="text-9xl" />
</div>

---
transition: fade
---

<div class="grid place-items-center h-full">
  <logos-qwik-icon class="text-9xl" />
</div>

---
transition: fade
---

<div class="grid place-items-center h-full">
  <logos-astro-icon class="text-9xl" />
</div>

---

<div class="grid place-items-center h-full">
  <logos-preact class="text-9xl" />
</div>

---

<div class="grid place-items-center h-full">
  <p class="text-8xl font-bold">懇親会の話のタネに</p>
</div>

<Overlay v-click="1" type="fit-content" top="8rem" left="15%" :z-index="1001" class="text-6xl opacity-85 whitespace-nowrap">
  「ナイトウの発表見ました！」
</Overlay>

<Overlay v-click="2" type="fit-content" bottom="25%" right="8%" :z-index="1002" class="text-6xl opacity-75 whitespace-nowrap">
  「Pinia Colada って...」
</Overlay>

<Overlay v-click="3" type="fit-content" top="35%" left="5%" :z-index="1003" class="text-4xl opacity-80 whitespace-nowrap">
  「データフェッチってどうしてますか？」
</Overlay>

<Overlay v-click="4" type="fit-content" bottom="15%" left="0%" :z-index="1004" class="text-3xl opacity-78 whitespace-nowrap">
  「Nuxt Typed Router って良さそうですね！」
</Overlay>

<Overlay v-click="5" type="fit-content" top="55%" right="10%" :z-index="1005" class="text-5xl opacity-82 whitespace-nowrap">
  「<logos-react /><logos-nextjs-icon /> ではどんな感じ？」
</Overlay>

---
layout: section
transition: view-transition
---

<logos-vue style="view-transition-name: pinia-colada-icon" />エコシステム

---
layout: section
---

<logos-vue style="view-transition-name: pinia-colada-icon" /> の未来

---
layout: quote
transition: slide-up
---

## "The limits of my language mean the limits of my world."

「人間は、いま自分が話している言葉の範囲でしか、世界を考えることができない。」

— Ludwig Wittgenstein, 1922

<Overlay type="fit-content" top="7%" right="5%" :z-index="1001">
  <div class="text-3xl opacity-85 whitespace-nowrap text-yellow">
    🤖Vibe Slide🌈
  </div>
</Overlay>

---
transition: slide-up
---

<div class="grid place-items-center h-full">
  <Youtube id="OUsXjtkLYu0" :width="800" :height="450" />
</div>

<Overlay v-click="1" type="full">
  <div class="grid place-items-center h-full">
    <div class="text-6xl font-bold leading-relaxed">
      「ライブラリの話かな」<br />
      って思っちゃうけど、<br />
      抽象化すれば抽象的に見れば<br />
      その言語がどのような課題を有しているかわかる
    </div>
  </div>
</Overlay>

<Overlay v-click="2" type="full">
  <div class="grid place-items-center h-full">
    <div class="text-7xl font-bold leading-relaxed">
      ライブラリを見ることで<br />
      言語の未来を<br />
      想像することができる
    </div>
  </div>
</Overlay>

---
layout: section
transition: fade
---

ということで

---
transition: fade
---

<Cover :show-textlint-error="true" />

<Overlay v-click="2" type="fit-content" bottom="6rem" right="2rem" :z-index="1001">
  <material-icon-theme-textlint class="text-9xl" />
</Overlay>

<Overlay v-click="2" type="fit-content" border top="50%" left="50%" transform="translate(-50%, -50%)">
  <div class="tooltip-content font-mono grid grid-rows-3 grid-cols-2 gap-2">
    <div class="col-span-2">「最高の」という表現は主観的で誇張的である可能性があります。</div>
    <div class="col-span-2">より客観的な評価を示すことを検討してください。</div>
    <small>(ai-writing/no-ai-hype-expressions)</small>
  </div>
</Overlay>

<style>
.textlint-error-inline {
  text-decoration: underline;
  text-decoration-color: var(--color-error);
  text-decoration-style: wavy;
  text-decoration-thickness: 3px;
  text-underline-offset: 2px;
}

.tooltip-content {
  display: grid;
  grid-template-columns: 1fr auto;
  font-size: 1.75rem !important;
  text-align: left;
  width: 50vw;

  & * {
    color: var(--color-text-accent) !important;
  }
}
</style>

---
layout: section
---

<p class="font-bold">DX</p>

---
class: text-5xl
transition: slide-up
---

<div v-mark.crossed-off="{ at: 1, color: 'red', strokeWidth: 15 }">

## Developer Experience = 開発者体験

開発プロセス全体で<br />
開発者が感じる体験の総体

</div>

<Overlay v-click="2" type="full">
  <div class="grid place-items-center h-full">
    <div class="text-7xl font-bold">
      最高の DX = なんかいいな
    </div>
  </div>
</Overlay>

<Overlay v-click="2" type="fit-content" left-4 top-16>
  このスライドでは
</Overlay>

---

<!-- textlint-disable ai-writing/no-ai-hype-expressions -->

<h2>最高の DX</h2>

<!-- textlint-enable ai-writing/no-ai-hype-expressions -->

<br />
<br />

<p class="text-7xl">開発者の認知負荷を最小化</p>
<p class="text-7xl"><span v-mark.box.green>本質的な問題解決</span>に集中</p>

---
transition: fade
---

<!-- textlint-disable ai-writing/no-ai-hype-expressions -->

## 次世代の <logos-vue /> <logos-nuxt-icon /> 開発

<!-- textlint-enable ai-writing/no-ai-hype-expressions -->

<div class="grid place-items-center h-full">
  <img src="/pc-release.png" class="w-170 rounded-xl shadow-xl" alt="Pinia Colada Release" />
</div>

<custom-pinia-colada class="w-80 h-80 absolute right-0 bottom-0" />

<Overlay v-click type="fit-content" top="17%" right="2%" :z-index="1001">
  <img src="/stars-on-pc.png" class="rounded-xl shadow-xl" alt="1.8k stars on Pinia Colada!" />
</Overlay>

---
transition: fade
---

<!-- textlint-disable ai-writing/no-ai-hype-expressions -->

## 次世代の <logos-vue /> <logos-nuxt-icon /> 開発

<!-- textlint-enable ai-writing/no-ai-hype-expressions -->

<div class="grid place-items-center h-full">
  <img src="/trends-vue-data-fetch.png" class="w-170 rounded-xl shadow-xl" alt="Vue Data Fetch Trends" />
</div>

<p class="absolute top-16 right-20 opacity-50 text-2xl">
<a href="https://tanstack.com/stats/npm?packageGroups=%5B%7B%22packages%22:%5B%7B%22name%22:%22@tanstack/vue-query%22%7D%5D%7D,%7B%22packages%22:%5B%7B%22name%22:%22@pinia/colada%22%7D%5D,%22color%22:%22%23ffe70d%22%7D,%7B%22packages%22:%5B%7B%22name%22:%22swrv%22,%22hidden%22:false%7D%5D%7D,%7B%22packages%22:%5B%7B%22name%22:%22@rstore/vue%22%7D%5D%7D%5D&range=365-days&transform=none&binType=weekly&showDataMode=all&height=400">Tanstack stats</a>
</p>

---
transition: fade
---

<!-- textlint-disable ai-writing/no-ai-hype-expressions -->

## 次世代の <logos-vue /> <logos-nuxt-icon /> 開発

<!-- textlint-enable ai-writing/no-ai-hype-expressions -->

<div class="grid place-items-center h-full">
  <img src="/zenn-search-pc.png" class="w-170 rounded-xl shadow-xl" alt="Zenn Search Pinia Colada" />
</div>

---
layout: section
transition: fade
---

課題

---
layout: section
---

開発って大変

---
layout: two-cols-header
class: text-2xl
---

## Web アプリ開発(フロントエンド)

::left::

- **ルーティング**
- **データフェッチ**
- **フォーム**
- **エラーハンドリング**
- **認証・認可**
- **パフォーマンス**
- **状態管理**

::right::

- **アクセシビリティ**
- **国際化(i18n)**
- **テスト**
- **SEO 対策**
- **セキュリティ**
- **UI/UX**
- **ビルド・デプロイ**
- **モニタリング**

<Overlay v-click type="full">
  <div class="grid place-items-center h-full font-bold text-center">
    <div>
      <p class="text-4xl">特に大変じゃないですか？</p>
      <div class="text-8xl">
        <p>ルーティング</p>
        <p>データフェッチ</p>
      </div>
    </div>
  </div>
</Overlay>

<Overlay type="fit-content" top="7%" right="5%" :z-index="999">
  <div class="text-3xl opacity-85 whitespace-nowrap text-yellow">
    🤖Vibe Slide🌈
  </div>
</Overlay>

---
layout: section
transition: fade
---

切っても切れない

---
layout: section
transition: fade
---

のに

---
transition: slide-up
---

## ルーティングを手打ち(TS 使ってるのに)

<br />
<br />
<br />
<br />
<br />

<div class="scale-250 translate-x-130 w-200">

```ts
router.push(`/user/${userId}`);
router.push("/user/profile");
router.push("/user/settings");
```

</div>

---

## データフェッチングのボイラープレート

<!-- prettier-ignore -->
```ts
const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)

watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes('?')) {
    loading.value = true
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    }
    catch (error) {
      answer.value = `Error! Could not reach the API. ${error}`
    }
    finally {
      loading.value = false
    }
  }
})
```

<style>
pre { max-height: 45vh !important; }
</style>

---

<div class="grid grid-cols-2 place-items-center gap-20 h-full" :class="{ 'opacity-20': $slidev.nav.clicks >= 1 }">
  <custom-nuxt-typed-router style="view-transition-name: nuxt-typed-router-icon" class="w-full" />
  <custom-pinia-colada style="view-transition-name: pinia-colada-icon" class="w-full" />
</div>

<div v-click="1" class="absolute inset-0 grid place-items-center text-7xl">
  <p><span v-mark.circle.yellow>型安全</span>なルーティング</p>
  <p><span v-mark.box.green>宣言的</span>データフェッチング</p>
</div>

---
layout: section
transition: fade
---

どこでこの 2 つに出会ったか

---

<Tweet id="1851572672393888034" scale="1.6"/>

---

<img src="/mates-logo.png" class="absolute top-0 left-0 w-20 h-20" alt="Mates Logo" />

<div class="h-full grid place-items-center">
  <div class="flex flex-col items-center gap-2">
    <div class="flex gap-24 items-center">
      <logos-nuxt-icon class="w-56 h-56" />
      <logos-graphql class="w-48 h-48" />
      <logos-pinia class="w-40 h-40" />
    </div>
    <div class="flex items-center">
      <custom-nuxt-typed-router class="w-80 h-80" />
      <custom-pinia-colada class="w-80 h-80" />
    </div>
  </div>
</div>

---
transition: slide-up
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-nuxt-typed-router class="w-128" />
</div>

<div class="h-full grid place-items-center">
  <p class="text-8xl">Nuxt Typed Router</p>
</div>

---
transition: slide-up
---

<div class="h-full grid place-items-center">
  <QRCode url="https://nuxt-typed-router.vercel.app/" :size="400" />
  <a class="text-4xl opacity-80" href="https://nuxt-typed-router.vercel.app/">https://nuxt-typed-router.vercel.app/</a>
</div>

---
transition: slide-up
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-nuxt-typed-router class="w-128" />
</div>

## Nuxt Typed Router とは

<br />
<br />
<br />

<p class="text-80l">型安全なルーティング</p>
<p class="text-7xl"><logos-nuxt-icon /> モジュール</p>

<style scoped>
.nuxt-typed-router-text {
  view-transition-name: nuxt-typed-router-text;
}
</style>

---

<div class="h-full grid place-items-center">
  <div class="text-center space-y-12">
    <p class="text-6xl">nuxt-typed-router</p>
    <p class="text-7xl font-bold">by victorgarciaesgi</p>
    <p class="text-4xl opacity-80">Victor Garcia</p>
  </div>
</div>

<Overlay v-click type="fit-content" top="7%" left="2%" :z-index="1001">
  <img src="/victorgarciaesgi-github.png" class="rounded-xl shadow-xl" alt="Victor Garcia GitHub" />
</Overlay>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-nuxt-typed-router class="w-128" />
</div>

## 快適な開発体験

<br />

```ts
router.push({ name: "user-id" }); // Error! ❌
router.push({ name: "user-id", params: { bar: "baz" } }); // Error! ❌
router.push("/user"); // Error! ❌

const id = "ey7878";
router.push(`/user/${id}`); // Good! ✅
router.push({ name: "user-id", params: { id } }); // Good! ✅

router.push(`/user/${id}/baguette`); // Error! ❌
```

---
transition: slide-up
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-nuxt-typed-router class="w-128" />
</div>

## 従来のルーティング問題

<br />
<br />

```ts
const router = useRouter();

function navigateToUser(userId) {
  router.push(`/usr/${userId}`); // ❌ typo: actual "user"
}
```

<Overlay type="fit-content" top="15%" right="5%" :z-index="1001">
  <div class="text-5xl opacity-85 font-bold">
    ⚠️ typo の危険性
  </div>
</Overlay>

---
transition: slide-up
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-nuxt-typed-router class="w-128" />
</div>

## 従来のルーティング問題

<br />
<br />
<br />
<br />

```ts twoslash
// /user/123
import { useRoute } from "vue-router";
const route = useRoute();

// params はキーごとに string | string[]
console.log(route.params.id);
```

<Overlay type="fit-content" top="25%" right="5%" :z-index="1001" class="text-5xl opacity-85 font-bold">
  🫠 パラメータの型が曖昧
</Overlay>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-nuxt-typed-router class="w-128" />
</div>

## 従来のルーティング問題

🥳 < ユーザー詳細画面だからきっと `user-detail` だよね
<br />
<br />
😉 < ユーザー ID だからパラメータはもちろん `userId` 👍

```ts
router.push({
  name: "user-detail", // ❌ 実際は user-id
  params: { userId }, // ❌ 実際は id
});
```

<Overlay type="fit-content" bottom="15%" right="5%" :z-index="1001">
  <div class="text-5xl opacity-85 font-bold">
    😭 IDE の補完が効かない
  </div>
</Overlay>

---
layout: section
transition: fade
---

こうなったら嬉しい

---
class: text-5xl
transition: fade
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-nuxt-typed-router class="w-128" />
</div>

## 理想的なルーティング開発体験

- typo したらすぐ気づく
- パラメータの型が明確
- リファクタリングが安全
- IDE の補完が効く

---
transition: slide-up
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-nuxt-typed-router class="w-128" />
</div>

<div class="h-full grid place-items-center">
  <p class="text-8xl font-bold">Nuxt Typed Router による解決</p>
</div>

---
transition: view-transition
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-nuxt-typed-router class="w-128" />
</div>

## <logos-nuxt-icon /> のファイルベースルーティング

<br />
<br />

<div class="scale-130 flex justify-center">

<FileTree
  title="EXPLORER"
  :nodes="[
    {
      name: 'app/',
      type: 'folder',
      children: [
        {
          name: 'pages/',
          type: 'folder',
          children: [
            { name: 'index.vue', type: 'file' },
            {
              name: 'user/',
              type: 'folder',
              children: [
                { name: 'index.vue', type: 'file' },
                { name: '[id].vue', type: 'file' }
              ]
            },
            {
              name: 'login/',
              type: 'folder',
              children: [
                { name: 'index.vue', type: 'file' }
              ]
            }
          ]
        }
      ]
    }
  ]"
/>

</div>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-nuxt-typed-router class="w-128" />
</div>

## <logos-nuxt-icon /> のファイルベースルーティング

<br />
<br />

<div class="scale-100 flex justify-center -translate-x-40">

<FileTreeWithRoutes
  title="EXPLORER"
  :nodes="[
    {
      name: 'app/',
      type: 'folder',
      children: [
        {
          name: 'pages/',
          type: 'folder',
          children: [
            { name: 'index.vue', type: 'file', route: '/' },
            {
              name: 'user/',
              type: 'folder',
              children: [
                { name: 'index.vue', type: 'file', route: '/user' },
                { name: '[id].vue', type: 'file', route: '/user/:id' }
              ]
            },
            {
              name: 'login/',
              type: 'folder',
              children: [
                { name: 'index.vue', type: 'file', route: '/login' }
              ]
            }
          ]
        }
      ]
    }
  ]"
/>

</div>

---
transition: slide-up
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-nuxt-typed-router class="w-128" />
</div>

## 生成される型

<br />

```ts
// @typed-router エイリアスから利用可能
import { RoutesNamesList, RoutesParamsRecord } from "@typed-router";

// ルート名のユニオン型
type RoutesNamesList = "index" | "user" | "user-id" | "login";

// パラメータの型辞書
interface RoutesParamsRecord {
  index: never;
  user: never;
  "user-id": { id: string };
  login: never;
}
```

---
transition: slide-up
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-nuxt-typed-router class="w-128" />
</div>

## 型安全なナビゲーション

<br />

```ts
// RoutesNamedLocations - router.push() の型安全化
type RoutesNamedLocations =
  | { name: "index" }
  | { name: "user" }
  | { name: "user-id"; params: { id: string } }
  | { name: "login" };

// ルート名に応じて params が自動的に切り替わる
router.push({ name: "user-id", params: { id: "123" } }); // ✓ OK
router.push({ name: "user-id" }); // ✗ エラー: params が必須
router.push({ name: "login", params: {} }); // ✗ エラー: params 不要
```

---
transition: slide-up
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-nuxt-typed-router class="w-128" />
</div>

## 型による絞り込み

<br />

```ts
const route = useRoute();

// route.name で分岐すると params の型が絞り込まれる
if (route.name === "user-id") {
  console.log(route.params.id); // string 型
}

// ルート名を指定してアサーションも可能
const route = useRoute("login");
console.log(route.name); // "login" 型
```

---
transition: slide-up
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-nuxt-typed-router class="w-128" />
</div>

## 生成される `routesNames`

<br />

```ts
const routeName = routesNames.userId; // "user-id"

// 実際に生成されるオブジェクト
export const routesNames = {
  index: "index" as const,
  user: "user" as const,
  userId: "user-id" as const,
  login: "login" as const,
};
```

---
transition: slide-up
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-nuxt-typed-router class="w-128" />
</div>

## TypeScript の恩恵

<br />
<br />
<br />

<p class="text-6xl">IDE の補完が効く</p>
<p class="text-6xl"> typo に気づく</p>

---
transition: slide-up
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-nuxt-typed-router class="w-128" />
</div>

<br />
<br />

```ts {monaco}
import { useRoute } from "@typed-router";

const route = useRoute();

// 条件分岐で型が自動的に絞り込まれる
if (route.name === "articles-slug") {
  const slug = route.params.slug; // string型として推論
  console.log(slug.length); // ✅ stringメソッドが補完
}
```

<Overlay type="fit-content" top="10%" right="3%" class="text-4xl">
  ちょっと体験⌨️
</Overlay>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-nuxt-typed-router class="w-128" />
</div>

## Nuxt Typed Router で DX 向上

<Overlay type="full" v-click>

<div class="grid place-items-center h-full">
  <span class="text-8xl font-bold">IDE の補完</span>
</div>

</Overlay>

<Overlay type="full" v-click>

<div class="grid place-items-center h-full">
  <span class="text-9xl font-bold">静的解析</span>
</div>

</Overlay>

<Overlay type="full" v-click>

<div class="grid place-items-center h-full">
  <span class="text-8xl font-bold ">レビューコスト減</span>
</div>

</Overlay>

---
layout: section
transition: slide-up
---

Nuxt Typed Router のここが好き

---
transition: slide-up
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-nuxt-typed-router class="w-128" />
</div>

## Nuxt Typed Router のインストール

<br />

```bash
nlx nuxi@latest module add typed-router
```

<br />
<br />

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ["nuxt-typed-router"],
});
```

`nr dev`, `nr prepare`, `nr generate`, `nr build`

のどれかをすれば生成される！！

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-nuxt-typed-router class="w-128" />
</div>

## `<NuxtLink />` をラップしたコンポーネント

<br />

````md magic-move
```vue
<script setup lang="ts" generic="T extends RoutesNamesList, P extends string">
import type { RoutesNamesList, NuxtRoute } from "@typed-router";

const { to } = defineProps<{
  to: NuxtRoute<T, P>;
}>();
</script>

<template>
  <NuxtLink :to><slot /></NuxtLink>
</template>
```

```vue
<script setup lang="ts" generic="T extends RoutesNamesList, P extends string">
import type { RoutesNamesList, NuxtRoute } from "@typed-router";

// 外部リンク
const { to, external } = defineProps<
  { to: NuxtRoute<T, P>; external?: false } | { to: string; external: true }
>();
</script>

<template>
  <NuxtLink :to :external><slot /></NuxtLink>
</template>
```
````

<Overlay type="fit-content" top="15%" left="35%" :z-index="1001" v-click>
  <div class="text-4xl opacity-85 font-bold ">
    🤔
  </div>
</Overlay>

---
transition: slide-up
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-nuxt-typed-router class="w-128" />
</div>

## Script Setup Generics とは

<br />

<Overlay type="fit-content" top="30%" right="8%" :z-index="1001">
  <div class="text-6xl opacity-85 font-bold">
    <logos-vue /> 3.3+
  </div>
</Overlay>

<br />

`<script setup>` に直接ジェネリック型パラメータを定義できる

<br />

```vue
<script setup lang="ts" generic="T extends SomeType">
```

<br />

<Overlay type="fit-content" bottom="10%" right="8%" :z-index="1001">
  <div class="text-4xl opacity-85 font-bold ">
    コンポーネント単位で型安全な props を実現
  </div>
</Overlay>

---
transition: slide-up
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-nuxt-typed-router class="w-128" />
</div>

## Script Setup Generics の例

<br />

````md magic-move
```vue
<script setup lang="ts">
type Color = "red" | "green" | "blue";

const { items, value } = defineProps<{
  items: Color[];
  value: Color;
}>();
</script>
```

```vue
<script setup lang="ts" generic="T extends string | number">
const { value, items } = defineProps<{
  items: T[];
  value: T;
}>();
</script>
```
````

<Overlay type="fit-content" bottom="20%" right="5%" :z-index="1001">
  <img src="/script-setup-generics-example.png" class="w-160 rounded-xl shadow-xl" alt="Script Setup Generics Example" />
</Overlay>

<div class="absolute bottom-3 right-5">

https://azukiazusa.dev/blog/vue-generic-component/

</div>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-nuxt-typed-router class="w-128" />
</div>

## Generics による型安全なコンポーネント

```vue
<script setup lang="ts" generic="T extends RoutesNamesList, P extends string">
import type { NuxtRoute, RoutesNamesList } from "@typed-router";

const props = defineProps<{
  to: NuxtRoute<T, P>;
}>();
</script>
```

<br />

- `T`: ルート名の型（e.g. `'index' | 'about' | 'articles-slug'`）
- `P`: パス文字列の型
- `NuxtRoute<T, P>`: 型安全なルート定義

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-nuxt-typed-router class="w-128" />
</div>

## 型安全なコンポーネントの使用例

````md magic-move
```vue
<script setup lang="ts" generic="T extends RoutesNamesList, P extends string">
import type { RoutesNamesList, NuxtRoute } from "@typed-router";

const { to } = defineProps<{
  to: NuxtRoute<T, P>;
}>();
</script>

<template>
  <NuxtLink :to>
    <slot />
  </NuxtLink>
</template>
```

```vue
<!-- ✅ -->
<template>
  <SafeNuxtLink :to="{ name: 'articles-slug', params: { slug: 'hello' } }">
    記事を読む
  </SafeNuxtLink>

  <SafeNuxtLink :to="{ name: 'user-id', params: { id: 123 } }">
    ユーザー詳細
  </SafeNuxtLink>
</template>
```

```vue
<!-- ❌ 存在しないルート -->
<template>
  <SafeNuxtLink :to="{ name: 'invalid-route' }"> リンク </SafeNuxtLink>
</template>

<!-- ❌ params の型が違う -->
<template>
  <SafeNuxtLink :to="{ name: 'user-id', params: { id: 'string' } }">
    ユーザー
  </SafeNuxtLink>
</template>
```
````

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-nuxt-typed-router class="w-128" />
</div>

## 型安全なコンポーネントの利点

### リファクタリングに強い

```ts
// ルート名を変更したら、全ての使用箇所でコンパイルエラー
// articles-slug → blog-slug
```

### チーム開発で安全

```ts
// 新しいメンバーも、存在するルートだけを使える
// IDE の補完で利用可能なルートが全て表示される
```

### 補完が効く

```ts
// 体験がいい
```

---
transition: slide-up
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-nuxt-typed-router class="w-128" />
</div>

## Out-of-Box i18n Support

<br />

`@nuxtjs/i18n`<br />
<br />
`useLocalePath()`, `useLocaleRoute()`, `<NuxtLinkLocale>`

````md magic-move
```ts
const localePath = useLocalePath();

// Error ❌
navigateTo(localePath({ name: "user-id" }, "fr"));

// Good ✅
navigateTo(localePath({ name: "user-id", params: { id: 1 } }, "fr"));
```

```ts
const localeRoute = useLocaleRoute();

// Error ❌
const route = localeRoute({ name: "user-id" }, "fr");

// Good ✅
const route = localeRoute({ name: "user-id", params: { id: 1 } }, "fr"));
if (route) navigateTo(route.fullPath);
```

```vue
<template>
  <NuxtLinkLocale :to="{ name: 'user' }" locale="fr"> />
</template>
```
````

---
layout: section
transition: fade
---

え、まって

---
layout: section
transition: fade
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <logos-nuxt-icon class="text-9xl" />
</div>

Nuxt Typed Pages は？

---
transition: slide-up
---

<div class="grid grid-cols-2 place-items-center gap-20 h-full absolute inset-0 opacity-10 pointer-events-none">
  <custom-nuxt-typed-router class="w-70" />
  <logos-nuxt-icon class="text-9xl" />
</div>

<div class="h-full grid place-items-center">
  <div class="text-center">
    <div class="flex items-center justify-center gap-8 mb-8">
      <span class="text-7xl font-bold">Nuxt Typed Router</span>
      <span class="text-7xl font-bold">と</span>
    </div>
    <div class="text-7xl font-bold  mb-12">Nuxt Typed Pages</div>
    <div class="text-7xl font-bold text-primary-sand">は別物</div>
  </div>
</div>

<Overlay type="fit-content" :z-index="1001" bottom="22%" right="15%" v-click>
  <div class="text-4xl font-bold whitespace-nowrap">
    3rd party module<span class="mx-6">VS</span>Official feature
  </div>
</Overlay>

<Overlay type="fit-content" :z-index="1001" bottom="7%" right="30%" v-click>
  <div class="text-4xl font-bold">
    安定<span class="mx-6">VS</span>実験的機能
  </div>
</Overlay>

---
transition: slide-up
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-nuxt-typed-router class="w-128" />
</div>

<div class="h-full grid place-items-center">
  <p class="text-7xl font-bold">Nuxt Typed Router は</p>
  <p class="text-6xl font-bold">3rd party module</p>
</div>

<Overlay type="fit-content" :z-index="1001" bottom="40%" right="36%" v-click>
  <div class="text-6xl font-bold">
    🦾 安定
  </div>
</Overlay>

---
transition: slide-up
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <logos-nuxt-icon class="text-9xl" />
</div>

<div class="h-full grid place-items-center">
  <p class="text-7xl font-bold">Nuxt Typed Pages は</p>
  <p class="text-6xl font-bold">公式機能</p>
</div>

<Overlay type="fit-content" :z-index="1001" bottom="40%" right="30%" v-click>
  <div class="text-6xl font-bold">
    🧪 実験的機能
  </div>
</Overlay>

---

## Nuxt Typed Pages

<br />
<br />

- `unplugin-vue-router` をベースにした型安全ルーティング
- Nuxt Typed Router と同様の機能を <logos-nuxt-icon /> 本体で提供

<br />

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  experimental: {
    typedPages: true,
  },
});
```

<Overlay type="fit-content" bottom="10%" right="8%" :z-index="1001">
  <div class="text-4xl opacity-85 font-bold ">
    <logos-nuxt-icon /> 3.5+
  </div>
</Overlay>

---
transition: slide-up
---

## unplugin-vue-router

<br />

<div class="text-4xl">

**型付きファイルベースルーティング**

</div>

<p class="text-8xl">for <span v-mark.circle.yellow>Vue 3</span> <logos-vue /></p>

<br />

<p class="text-3xl"><logos-nuxt-icon /> Nuxt Typed Pages の基盤技術</p>

<Overlay v-click type="fit-content" top="38%" right="5%" :z-index="1001">
  <div class="text-4xl opacity-85 font-bold text-primary-sand">
    Not Only Nuxt <logos-nuxt-icon />
  </div>
</Overlay>

---
transition: slide-up
---

<div class="grid grid-cols-2 place-items-center gap-20 h-full absolute inset-0 opacity-10 pointer-events-none">
  <custom-nuxt-typed-router class="w-70" />
  <logos-nuxt-icon class="text-9xl" />
</div>

<div class="h-full grid place-items-center">
  <img src="/uvr-ntr.png" class="w-200 rounded-xl shadow-xl" alt="unplugin-vue-router と Nuxt Typed Router" />
</div>

<div class="absolute bottom-10 right-10 text-3xl opacity-70">

https://uvr.esm.is/why.html

</div>

---

<div class="h-full grid place-items-center">
  <div class="text-center space-y-12">
    <p class="text-6xl">unplugin-vue-router</p>
    <p class="text-7xl font-bold">by posva</p>
    <p class="text-4xl opacity-80">Eduardo San Martin Morote</p>
  </div>
</div>

<Overlay v-click type="fit-content" top="7%" left="2%" :z-index="1001">
  <img src="/posva-github.png" class="rounded-xl shadow-xl" alt="posva GitHub" />
</Overlay>

---
transition: view-transition
---

## posva's OSS

<div class="h-full grid place-items-center">
  <div class="text-center">
    <div class="text-5xl space-y-4">
      <div class="flex items-center justify-center gap-6">
        <span class="font-bold">Vue Router</span> /
        <span class="font-bold">unplugin-vue-router</span>
      </div>
      <div class="flex items-center justify-center gap-6">
        <logos-pinia class="text-6xl" />
        <span class="font-bold">Pinia</span>
        /
        <custom-pinia-colada class="w-16" style="view-transition-name: pinia-colada-icon" />
        <span class="font-bold">Pinia Colada</span>
      </div>
      <div class="flex items-center justify-center gap-6">
        <img src="/icons/vuefire-logo.svg" class="w-16 h-16" alt="VueFire" />
        <span class="font-bold">VueFire</span>
      </div>
      <div class="flex items-center justify-center gap-6">
        <span class="font-bold">mande</span>
      </div>
      <div class="flex items-center justify-center gap-6">
        <span class="font-bold">vue-promised</span>
      </div>
    </div>
  </div>
</div>

---
transition: fade
---

<div class="absolute inset-0 grid place-items-center pointer-events-none">
  <custom-pinia-colada class="w-120" style="view-transition-name: pinia-colada-icon" />
</div>

---
transition: fade
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

<img src="/pina-colada.jpg" alt="pina colada のカクテル画像" class="w-160 mx-auto rounded-xl shadow-xl" />

<p class="text-right opacity-50">
<a href="https://unsplash.com/ja/@yesmorecontent?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">YesMore Content</a> : <a href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E9%80%8F%E6%98%8E%E3%81%AA%E3%82%B3%E3%83%83%E3%83%97%E3%81%AB%E5%85%A5%E3%81%A3%E3%81%9F%E9%BB%84%E8%89%B2%E3%81%84%E3%82%B8%E3%83%A5%E3%83%BC%E3%82%B9-ywS7HzUNjuM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
</p>

<Overlay type="fit-content" top="4%" right="21%" :z-index="1001">
  <div class="text-8xl opacity-90 font-bold text-yellow">
    piña colada
  </div>
</Overlay>

<Overlay type="fit-content" bottom="14%" right="14%" :z-index="1001">
  <div class="text-xl opacity-85 font-bold text-green">
    ラムをベースにパイナップルジュースとココナッツミルクを砕いた氷と一緒に<br /> シェイクして作るロングドリンク。黄白色で甘みが強い。
  </div>
</Overlay>

---
transition: fade
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

<div class="h-full grid place-items-center">
  <p class="text-9xl">Pinia Colada</p>
</div>

---

<div class="h-full grid place-items-center">
  <QRCode url="https://pinia-colada.esm.dev/" :size="400" />
  <a class="text-4xl opacity-80" href="https://pinia-colada.esm.dev/">https://pinia-colada.esm.dev/</a>
</div>

---
transition: fade
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## Pinia Colada とは

<br />
<br />
<br />
<br />
<br />

<p class="text-5xl"><logos-vue /> 用の非同期状態管理ライブラリ</p>

<Overlay v-click type="fit-content" bottom="25%" left="20%" class="text-4xl">
  <logos-vue /> 用のデータフェッチングライブラリ
</Overlay>

---
transition: slide-up
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

<div class="h-full grid place-items-center">
  <p class="text-9xl font-bold">特徴</p>
</div>

---
transition: fade
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## ⚡️ Automatic Caching

<br />

<p class="text-8xl">client-side cache</p>
<p class="text-8xl">dedupe</p>

---
transition: fade
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## 🗄️ Async State

<br />
<br />
<br />
<br />

<p class="text-7xl">あらゆる非同期状態の処理</p>

---
transition: fade
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## 🔌 Plugins

<br />
<br />
<br />
<br />

<p class="text-7xl">強力なプラグインシステム</p>

---
transition: fade
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## ✨ Optimistic Updates

<br />
<br />
<br />
<br />

<p class="text-7xl">楽観的更新も簡単に実現</p>

---
transition: fade
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## 💡 Sensible Defaults

<br />
<br />

<p class="text-7xl">健全なデフォルト設定</p>
<p class="text-7xl">完全なカスタマイズ性</p>

---
transition: fade
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## 🧩 Out-of-the-Box Plugins

<br />
<br />

<p class="text-7xl">データフェッチング用の</p>
<p class="text-7xl">composables</p>

---
transition: fade
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## 🔑 TypeScript Support

<br />
<br />
<br />
<br />

<p class="text-8xl"><logos-typescript-icon /> 型サポート</p>

---
transition: fade
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## 💨 Small Bundle Size

<br />
<br />
<br />

<p class="text-6xl">約 2kb のベースライン</p>
<p class="text-6xl">fully tree-shakeable</p>

---
transition: fade
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## 📦 Zero Dependencies

<br />
<br />
<br />
<br />

<p class="text-7xl">依存関係なし(<logos-pinia /> 以外)</p>

---
transition: fade
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## ⚙️ SSR

<br />
<br />
<br />

<p class="text-8xl">SSR サポート</p>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## 🔄 Data Loaders

<br />
<br />
<br />
<br />
<br />

<p class="text-7xl">Vue Router Data Loaders</p>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## インストール

<br />
<br />
<br />
<br />
<br />

```bash
ni @pinia/colada
```

<Overlay type="fit-content" :z-index="1001" bottom="24%" right="20%" v-click>
  <div class="text-7xl font-bold">
    ❗ Pinia も必要 <logos-pinia />
  </div>
</Overlay>

<Overlay type="fit-content" :z-index="1002" top="10%" left="12%" v-click>
  <div class="text-4xl font-mono bg-gray-800 px-8 py-6 rounded-xl shadow-2xl">
    <div class="mb-4">"peerDependencies": {</div>
    <div class="pl-8 space-y-2">
      <div>"pinia": "^2.2.6 || ^3.0.0",</div>
      <div>"vue": "^3.5.17"</div>
    </div>
    <div>}</div>
  </div>
</Overlay>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## <logos-vue /> プラグインを設定

<br />

<!-- prettier-ignore -->
```ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { PiniaColada } from '@pinia/colada'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(PiniaColada, {/** Options */})
```

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## もちろん <logos-nuxt-icon /> module も

<br />

<!-- prettier-ignore -->
```bash
nlx nuxi@latest module add @pinia/colada-nuxt
```

<br />
<br />
<br />

<!-- prettier-ignore -->
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@pinia/colada-nuxt'],
})
```

---

<style>
pre { max-height: 46vh !important; overflow-y: auto !important; }
</style>

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

````md magic-move
```ts
// BEFORE 😐

// 状態
const isLoading = ref(false);
const isPending = ref(true);
const error = shallowRef(null);
const data = shallowRef(null);

// データフェッチ
async function refresh() {
  isLoading.value = true; // 手動更新
  try {
    data.value = await fetchUsers();
    error.value = null; // 手動更新
    isPending.value = false; // 手動更新
  } catch (err) {
    error.value = err; // 手動更新
  } finally {
    isLoading.value = false; // 手動更新
  }
}

// 手動の初回データフェッチ
refresh();
```

```ts
// AFTER ☺️

import { useQuery } from "@pinia/colada";
const { data, error, isPending, isLoading } = useQuery({
  key: ["users"],
  query: () => fetchUsers(),
});
```
````

<Overlay v-click="2" type="fit-content" top="42%" left="40%" :z-index="1001">
  <div class="text-5xl opacity-85 whitespace-nowrap font-bold">
    🍹 すっきり
  </div>
</Overlay>

<Overlay v-click="3" type="fit-content" top="60%" left="50%" :z-index="1002">
  <div class="text-5xl opacity-85 whitespace-nowrap font-bold text-primary-bronze">
    🍍 状態管理
  </div>
</Overlay>

<Overlay v-click="4" type="fit-content" top="78%" left="60%" :z-index="1003">
  <div class="text-5xl opacity-85 whitespace-nowrap font-bold ">
    🏖️ 再利用性
  </div>
</Overlay>

---
class: text-5xl
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## いい感じのデータフェッチ

- **宣言的**に記述
- ボイラープレートなし
- いい感じに**キャッシュ**
- **型**

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## 🍹 Similar API to Tanstack Query 🏝️

<br />
<br />

````md magic-move
```tsx
// TanStack Query (React)
import { useQuery } from "@tanstack/react-query";

const { data, isLoading, error } = useQuery({
  queryKey: ["todos"],
  queryFn: fetchTodos,
});
```

```ts
// TanStack Vue Query
import { useQuery } from "@tanstack/vue-query";

const { data, isLoading, error } = useQuery({
  queryKey: ["todos"],
  queryFn: fetchTodos,
});
```

```ts
// Pinia Colada
import { useQuery } from "@pinia/colada";

const { data, isLoading, error } = useQuery({
  key: ["todos"],
  query: fetchTodos,
});
```
````

<Overlay v-click type="fit-content" bottom="7%" right="42%" :z-index="1001">
  <logos-vue class="text-7xl" />
</Overlay>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## TanStack Query からの移行

https://pinia-colada.esm.dev/cookbook/migration-tvq.html

<br />
<br />
<br />

<div class="text-3xl">

- `queryFn` → `query`
- `queryKey` → `key`
- `mutationFn` → `mutation`
- etc...

</div>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

<div class="h-full grid place-items-center">
  <p class="text-8xl font-bold">Pinia Colada</p>
  <p class="text-8xl font-bold">による解決</p>
</div>

---
layout: section
---

その前に

---
layout: section
---

データフェッチの

---
layout: section
---

考え方や用語を

---

<br />
<br />
<br />
<br />
<br />

<div class="grid grid-cols-2 gap-16">
  <div>
    <p class="text-6xl mb-8">🔍 Query</p>
    <p class="text-4xl" v-click>データを<strong>読み取る</strong></p>
  </div>
  <div>
    <p class="text-6xl mb-8">✏️ Mutation</p>
    <p class="text-4xl" v-click>データを<strong>書き込む</strong></p>
  </div>
</div>

---

<br />

<div class="text-center">
  <p class="text-7xl mb-12">💾 Cache</p>
  <p class="text-5xl mb-8">取得したデータを保存して再利用</p>
  <div class="text-4xl opacity-80">
    <p>同じデータへのリクエストを削減</p>
    <p>アプリケーションの応答性が向上</p>
  </div>
</div>

---

<br />
<br />
<br />

<div class="grid grid-cols-2 gap-16">
  <div class="text-center">
    <p class="text-5xl mb-8">🌞 Active Query</p>
    <p class="text-4xl mb-6"><span v-mark.yellow>使用中</span></p>
    <div class="text-3xl opacity-80">
      <p>画面に表示されているなど</p>
    </div>
  </div>
  <div class="text-center">
    <p class="text-5xl mb-8">💤 Inactive Query</p>
    <p class="text-4xl mb-6"><span v-mark.green>使用されていない</span></p>
    <div class="text-3xl opacity-80">
      <p>一定時間後に 👋</p>
    </div>
  </div>
</div>

---

<br />

<div class="text-center">
  <p class="text-7xl mb-12">🍣 Fresh / Stale </p>
  <p class="text-5xl mb-8">キャッシュデータの<span v-mark.yellow>鮮度</span>管理</p>
  <div class="text-4xl opacity-80">
    <p>データの新鮮さを判断する基準</p>
  </div>
</div>

---

<br />

<div class="text-center">
  <p class="text-7xl mb-12">🔄 Invalidation</p>
  <p class="text-5xl mb-8">キャッシュを明示的に<span v-mark.green>無効</span>化</p>
  <div class="text-4xl opacity-80">
    <p>データ更新後に関連キャッシュを無効化</p>
  </div>
</div>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
<custom-pinia-colada class="w-120" />
</div>

<div class="h-full grid place-items-center">
<p class="text-8xl font-bold">Pinia Colada</p>
<p class="text-8xl font-bold">による解決</p>
</div>

<Overlay type="fit-content" top="10%" right="3%" class="text-6xl">
  改めて🍹
</Overlay>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-128" />
</div>

## 宣言的

<br />

```ts
// 「何をフェッチするか」だけを記述
const { state, asyncStatus } = useQuery({
  key: ["todos"],
  query: () => $fetch("/api/todos"),
});

// ✅ loading, error, data の状態管理は自動
// ✅ 初回フェッチも自動
// ✅ cache, dedupe も自動
```

<Overlay v-click type="fit-content" top="30%" right="5%" :z-index="1001" class="text-4xl font-bold">
  query 関数は引数を取らない
</Overlay>

<Overlay v-click="2" type="fit-content" top="45%" right="10%" :z-index="1002" class="text-4xl font-bold">
  「必要なときに自動的にトリガー」
</Overlay>

<Overlay v-click="3" type="fit-content" bottom="15%" left="5%" :z-index="1003" class="text-4xl font-bold">
  開発者は「何を」フェッチするかだけを宣言<br />
  → Pinia Colada が判断
</Overlay>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-128" />
</div>

## 型

<br />
<br />
<br />
<br />

<div class="scale-170 translate-x-55 w-200">

```ts
const { state } = useQuery({
  key: ["users"],
  query: () => $fetch("/api/user"),
});

// ShallowRef<SerializeObject<User>[] | undefined>
console.log(state.data);
```

</div>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## `useQuery()`

```vue
<script setup lang="ts">
const { state, asyncStatus } = useQuery({
  key: () => ["users"],
  query: () => $fetch("/api/user"),
});
</script>

<template>
  <p v-if="asyncStatus === 'loading'">読み込み中...</p>
  <p v-else-if="state.status === 'error'" role="alert">
    エラー: {{ state.error.message }}
  </p>
  <section v-else-if="state.status === 'success'">
    <p>{{ state.data.name }}</p>
    <button @click="refresh">更新</button>
  </section>
</template>
```

<Overlay v-click type="fit-content" bottom="40%" right="15%" :z-index="1001" class="text-4xl font-bold">
  query は引数を取らない
</Overlay>

<Overlay v-click type="fit-content" bottom="25%" right="10%" :z-index="1002" class="text-4xl font-bold">
  宣言的に記述できる
</Overlay>

<style>
pre { max-height: 41.7vh !important; }
</style>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## `state` と `asyncStatus` の違い

<br />

```ts
// state: データの状態を表す
{
  status: "pending" | "error" | "success";
  data: T | undefined;
  error: Error | null;
}

// asyncStatus: 非同期処理の進行状況
"idle" | "loading";
```

<Overlay v-click type="fit-content" bottom="60%" left="10%">
  <p class="text-5xl font-bold text-white">何を持っているか (data, error, status)</p>
</Overlay>

<Overlay v-click type="fit-content" bottom="8%" right="10%">
  <p class="text-5xl font-bold text-white">今何をしているか (loading, success)</p>
</Overlay>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## `state` と `asyncStatus` の使い分け

<br />
<br />
<br />

```ts
// 初回ローディング
asyncStatus === "loading" && state.status === "pending";

// バックグラウンド更新中
asyncStatus === "loading" && state.status === "success";

// データ表示完了
asyncStatus === "idle" && state.status === "success";
```

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## `useMutation()`

```vue
<script setup lang="ts">
const { mutate: createTodo, state } = useMutation({
  mutation: (newTodo: { title: string }) => {
    $fetch("/api/todos", { method: "POST", body: newTodo });
  },
});
</script>

<template>
  <button
    :disabled="state.status === 'pending'"
    @click="createTodo({ title: '新しいタスク' })"
  >
    {{ state.status === "pending" ? "作成中..." : "タスク作成" }}
  </button>
</template>
```

<Overlay v-click type="fit-content" bottom="40%" right="15%" :z-index="1001">
  <div class="text-4xl font-bold">
    mutate は引数を取る
  </div>
</Overlay>

<style>
pre { max-height: 41.7vh !important; }
</style>

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## Cache

<br />
<br />

<p class="text-6xl">内部でキャッシュ管理に</p>
<p class="text-7xl">Pinia ストアを使用 <logos-pinia class="animate-bounce" /></p>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## キャッシュストア <logos-pinia /> の構造

<div class="grid place-items-center">
  <img src="/devtools-pc-query.png" class="w-180" />
</div>

<Overlay v-click type="fit-content" top="35%" left="10%" :z-index="1002">
  <div class="text-5xl font-bold">
    _pc_query
  </div>
</Overlay>

---

## Pinia Colada Devtools

```bash
ni -D @pinia/colada-devtools
```

<br />

```vue
<script setup lang="ts">
import { PiniaColadaDevtools } from "@pinia/colada-devtools";
</script>

<template>
  <main />
  <PiniaColadaDevtools />
</template>
```

<Overlay v-click type="fit-content" top="15%" right="0%" :z-index="1001">
  <img src="/pc-devtools.png" alt="Pinia Colada Devtools" />
</Overlay>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## Query と Mutation の連携

<br />
<br />

<div class="text-center space-y-12">
  <div class="text-5xl">Mutation でデータを変更✨</div>
  <div class="text-7xl">↓</div>
  <div class="text-5xl">Query のキャッシュを無効化🏷️</div>
</div>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## Query Invalidation

<br />

````md magic-move
```ts
const { state } = useQuery({ key: ["todos"], query: () => $("/api/todos") });
const { mutate } = useMutation({
  mutation: (text: string) =>
    $fetch("/api/todos", { method: "POST", body: { text } }),
});
```

```ts
const queryCache = useQueryCache();
const { state } = useQuery({ key: ["todos"], query: () => $("/api/todos") });
const { mutate } = useMutation({
  mutation: (text: string) =>
    $fetch("/api/todos", { method: "POST", body: { text } }),
  onSettled: () =>
    queryCache.invalidateQueries({ key: ["todos"] });
});
```
````

<Overlay v-click type="fit-content" bottom="40%" right="5%" :z-index="1001">
  <div class="text-4xl font-bold">
    query cache の無効化(onSettled)
  </div>
</Overlay>

<Overlay v-click type="fit-content" bottom="25%" right="10%" :z-index="1002">
  <div class="text-4xl font-bold">
    新しいデータを取得
  </div>
</Overlay>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

<div class="h-full grid place-items-center text-center">
  <div>
    <p class="text-8xl font-bold mb-12">Hooks</p>
    <p class="text-5xl opacity-90">Mutation のライフサイクル</p>
  </div>
</div>

---
class: text-3xl
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## Mutation Hooks

<br />
<br />

- `onMutate` - 直前
- `onSuccess` - 成功したら
- `onError` - 失敗したら
- `onSettled` - 成功・失敗に関わらず

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

<div class="h-full grid place-items-center">
  <p class="text-7xl font-bold">Hooks で実現できること</p>
</div>

<Overlay type="fit-content" bottom="30%" left="15%" :z-index="1003" v-click>
  <div class="text-4xl rounded-lg">
    クエリの無効化
  </div>
</Overlay>

<Overlay type="fit-content" top="15%" left="10%" :z-index="1001" v-click>
  <div class="text-4xl rounded-lg">
    楽観的更新（Optimistic Updates）
  </div>
</Overlay>

<Overlay type="fit-content" top="35%" right="10%" :z-index="1002" v-click>
  <div class="text-4xl rounded-lg">
    エラー時のロールバック
  </div>
</Overlay>

<Overlay type="fit-content" bottom="15%" right="15%" :z-index="1004" v-click>
  <div class="text-4xl rounded-lg">
    コンテキストの受け渡し
  </div>
</Overlay>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## Query Invalidation

````md magic-move
```ts
const queryCache = useQueryCache();

const { mutate: updateTodo } = useMutation({
  mutation: (todo) => updateTodo(todo),
  onSuccess: () => {
    // Invalidate a specific query and it's children
    queryCache.invalidateQueries({ key: ["todos"] });
  },
});
```

```ts
const queryCache = useQueryCache();

const { mutate: updateTodo } = useMutation({
  mutation: (todo) => updateTodo(todo),
  onSuccess: () => {
    // Invalidate a specific query only
    queryCache.invalidateQueries({ key: ["todos"], exact: true });
  },
});
```

```ts
const queryCache = useQueryCache();

const { mutate: updateTodo } = useMutation({
  mutation: (todo) => updateTodo(todo),
  onSuccess: () => {
    // Refetch all active queries
    queryCache.invalidateQueries();
  },
});
```
````

<div class="text-center text-3xl mt-8 opacity-80" v-click>
データ更新後、関連するクエリを無効化
</div>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## `useQuery()` の 2 つの重要なこと

<br />
<br />

```ts
const { state, asyncStatus } = useQuery({
  key: ["todos"],
  query: () => $fetch("/api/todos"),
});
```

<br />
<br />

- `key`: キャッシュの識別子(配列による階層構造)
- `query`: Promise を返す関数

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## Query Key の設計が重要

- **配列形式**で構造化されたキー
- **階層的な設計**でキャッシュを柔軟に管理
- **リアクティブな key** は関数で定義

<br />

```ts
// 静的な key
key: ["products"];

// 動的な key(関数形式)
key: () => ["products", route.params.id];
key: () => ["products", route.params.id, { searchResult: true }];
```

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## Query, Mutate, Invalidate

```ts
const queryCache = useQueryCache();

// Todo リストの Query
const { data: todos } = useQuery({
  key: ["todos"],
  query: () => $fetch("/api/todos"),
});

// Todo 作成の Mutation
const { mutate: createTodo } = useMutation({
  mutation: (text: string) =>
    $fetch("/api/todos", {
      method: "POST",
      body: { text },
    }),
  onSettled: () => {
    // 作成後に todos リストを無効化して最新データを取得
    queryCache.invalidateQueries({ key: ["todos"] });
  },
});
```

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## Query Keys の重要性

<br />
<br />
<br />

<p class="text-center text-5xl">Query Keys はクエリを</p>
<p class="text-center text-5xl">一意に識別するための<span v-mark.yellow>配列</span></p>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

<div class="h-full grid place-items-center">
  <p class="text-7xl font-bold">キャッシュ管理の基盤</p>
</div>

<Overlay type="fit-content" top="20%" left="10%" :z-index="1001" v-click>
  <div class="text-4xl rounded-lg">
    同じ key を持つクエリは同じキャッシュを共有
  </div>
</Overlay>

<Overlay type="fit-content" bottom="25%" right="10%" :z-index="1002" v-click>
  <div class="text-4xl rounded-lg">
    key が異なれば別々にキャッシュされる
  </div>
</Overlay>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

<div class="h-full grid place-items-center">
  <p class="text-9xl font-bold">階層的な構造</p>
</div>

<Overlay type="fit-content" top="20%" left="10%" :z-index="1001" v-click>
  <div class="text-3xl px-8 py-4 rounded-lg">
    <code>["todos"], ["todos", id], ...</code>
  </div>
</Overlay>

<Overlay type="fit-content" bottom="25%" right="10%" :z-index="1002" v-click>
  <div class="text-4xl rounded-lg">
    親 key で子も含めて一括無効化が可能
  </div>
</Overlay>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

<div class="h-full grid place-items-center">
  <p class="text-9xl font-bold">適切な無効化</p>
</div>

<Overlay type="fit-content" top="20%" left="10%" :z-index="1001" v-click>
  <div class="text-4xl rounded-lg">
    Mutation 後に関連するクエリを効率的に更新
  </div>
</Overlay>

<Overlay type="fit-content" bottom="25%" right="10%" :z-index="1002" v-click>
  <div class="text-4xl rounded-lg">
    部分的な無効化で必要なデータだけ再取得
  </div>
</Overlay>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## Key 設計の例

````md magic-move
```ts
// 基本: 単純なリスト取得
const { data } = useQuery({
  key: ["todos"],
  query: () => $fetch("/api/todos"),
});
```

```ts
// 階層: ID を含むクエリ
const { data } = useQuery({
  key: () => ["todos", todoId],
  query: () => $fetch(`/api/todos/${todoId}`),
});

// ["todos"] で無効化すると、
// すべての todos 関連のクエリが無効化される
```

```ts
// 階層: さらに詳細な条件
const { data } = useQuery({
  key: () => ["todos", todoId, { withComments: true }],
  query: () => $fetch(`/api/todos/${todoId}?comments=true`),
});

// ["todos"] で無効化 → すべての todos
// ["todos", todoId] で無効化 → 特定の todo だけ
// ["todos", todoId, {}] で無効化 → 特定の todo のすべての条件
```
````

---
layout: section
---

key 設計

---
layout: section
---

って

---
layout: section
---

また文字列？

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## Key Factory パターン

<br />
<br />

<p class="text-6xl text-center">Query Key を一元管理する</p>
<p class="text-6xl text-center">型安全なパターン</p>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## Key Factory の実装例

<br />
<br />
<br />

```ts
export const TODO_KEYS = {
  root: ["todos"] as const,
  withFilters: (filters?: TodoFilters) => [...TODO_KEYS.root, filters] as const,
  byId: (id: string) => [...TODO_KEYS.root, id] as const,
  comments: (id: string) => [...TODO_KEYS.byId(id), "comments"] as const,
};
```

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## Key Factory の使用例

<br />
<br />
<br />

````md magic-move
```ts
// Before: 文字列ベース
const { data } = useQuery({
  key: ["todos"], // typo の可能性
  query: () => fetchTodos(),
});
```

```ts
// After: Key Factory
import { TODO_KEYS } from "~/queries/key-factory";

const { data } = useQuery({
  key: TODO_KEYS.root,
  query: () => fetchTodos(),
});
```

```ts
// 無効化も簡単
const queryCache = useQueryCache();

// すべての todos を無効化
queryCache.invalidateQueries({ key: TODO_KEYS.root });

// 特定の todo だけ無効化
queryCache.invalidateQueries({ key: TODO_KEYS.byId(todoId) });
```
````

---
layout: section
---

query の設定も共有

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## defineQueryOptions

<br />

```ts
import { defineQueryOptions } from "@pinia/colada";

export const todoListQuery = defineQueryOptions(() => ({
  key: ["todos"],
  query: () => $fetch("/api/todos"),
}));

export const todoByIdQuery = defineQueryOptions((id: string) => ({
  key: ["todos", id],
  query: () => $fetch(`/api/todos/${id}`),
}));
```

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## defineQueryOptions の使用例

<br />

````md magic-move
```ts
// Before: 毎回 key と query を書く
const { state } = useQuery({
  key: ["todos", todoId],
  query: () => $fetch(`/api/todos/${todoId}`),
});

// Cache に手動で型を指定
const queryCache = useQueryCache();
const todo = queryCache.getQueryData<Todo>(["todos", todoId]);
```

```ts
// After: 再利用可能な定義
import { todoByIdQuery } from "~/queries/todos";

const { state } = useQuery(todoByIdQuery, todoId);

// Cache の型が推論される
const queryCache = useQueryCache();
const todo = queryCache.getQueryData(todoByIdQuery(todoId).key);
```
````

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## Key Factory × defineQueryOptions

```ts
import { defineQueryOptions } from "@pinia/colada";

export const TODO_KEYS = {
  root: ["todos"] as const,
  byId: (id: string) => [...TODO_KEYS.root, id] as const,
};

export const todoByIdQuery = defineQueryOptions((id: string) => ({
  key: TODO_KEYS.byId(id),
  query: () => $fetch(`/api/todos/${id}`),
}));
```

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## 実装パターン比較

<br />
<br />
<br />

<p class="text-center text-5xl">プロジェクト規模に応じた</p>
<p class="text-center text-5xl">3つの実装パターン</p>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## 1. そのまま

```vue
<!-- pages/teams/[id].vue -->
<script setup lang="ts">
const route = useRoute();

const team = useQuery({
  key: () => ["teams", route.params.id],
  query: () => $fetch(`/api/teams/${route.params.id}`),
});

const members = useQuery({
  key: () => ["teams", route.params.id, "users"],
  query: () => $fetch(`/api/teams/${route.params.id}/user`),
});
</script>
```

<Overlay type="fit-content" bottom="2%" left="5%" v-click>
  <div class="text-3xl opacity-90">
    <strong>特徴</strong>: シンプルだけどキー・取得ロジックが画面に分散しやすい
  </div>
</Overlay>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## 2. Key Factory

````md magic-move
```ts
// queries/key-factory.ts
export const TEAM_KEYS = {
  root: ["teams"] as const,
  byId: (id: string) => [...TEAM_KEYS.root, id] as const,
  users: (id: string) => [...TEAM_KEYS.byId(id), "users"] as const,
};
```

```vue
<!-- pages/teams/[id].vue -->
<script setup lang="ts">
import { TEAM_KEYS } from "~/queries/key-factory";

const route = useRoute();

const team = useQuery({
  key: () => TEAM_KEYS.byId(route.params.id),
  query: () => $fetch(`/api/teams/${route.params.id}`),
});

const members = useQuery({
  key: () => TEAM_KEYS.users(route.params.id),
  query: () => $fetch(`/api/teams/${route.params.id}/user`),
});
</script>
```
````

<Overlay type="fit-content" top="2%" left="5%" v-click>
  <div class="text-3xl opacity-90">
    <strong>特徴</strong>: キー管理を一元化できてキャッシュ整合性が向上。取得ロジックは画面に残る
  </div>
</Overlay>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## 3. Key Factory × defineQueryOptions

````md magic-move
```ts
// queries/key-factory.ts
export const TEAM_KEYS = {
  root: ["teams"] as const,
  byId: (id: string) => [...TEAM_KEYS.root, id] as const,
  users: (id: string) => [...TEAM_KEYS.byId(id), "users"] as const,
};
```

```ts
// queries/team.ts
import { defineQueryOptions } from "@pinia/colada";
import { TEAM_KEYS } from "./key-factory";

export const teamByIdQuery = defineQueryOptions((teamId: string) => ({
  key: TEAM_KEYS.byId(teamId),
  query: () => $fetch(`/api/teams/${teamId}`),
}));

export const teamUsersQuery = defineQueryOptions((teamId: string) => ({
  key: TEAM_KEYS.users(teamId),
  query: () => $fetch(`/api/teams/${teamId}/user`),
}));
```

```vue
<!-- pages/teams/[id].vue -->
<script setup lang="ts">
import { teamByIdQuery, teamUsersQuery } from "~/queries/team";

const route = useRoute();

const team = useQuery(teamByIdQuery, route.params.id);
const members = useQuery(teamUsersQuery, route.params.id);
</script>
```
````

<Overlay type="fit-content" bottom="5%" left="5%" v-click>
  <div class="text-3xl opacity-90">
    <strong>特徴</strong>: キー・取得ロジックを集約
  </div>
</Overlay>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

<Overlay type="fit-content" top="7%" right="5%" :z-index="999">
  <div class="text-3xl opacity-85 whitespace-nowrap text-yellow">
    🤖Vibe Slide🌈
  </div>
</Overlay>

## 3つのパターンの比較

<br />
<br />

| 構成                                 | キー整合性 | パラメータ共有 | 変更耐性 | 規模   |
| :----------------------------------- | :--------- | :------------- | :------- | :----- |
| 直書き                               | 低         | 低             | 低       | 小     |
| Key Factory 単独                     | 中         | 中             | 中       | 中     |
| **Key Factory × defineQueryOptions** | **高**     | **高**         | **高**   | **大** |

<Overlay type="full" v-click>

<div class="grid place-items-center h-full">
  <div class="text-left text-8xl space-y-16">
    <p>シンプルに書けるし</p>
    <p>ガチガチにも書ける</p>
  </div>
</div>

</Overlay>

---
layout: section
---

じゃあどうやって決めるか

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## 公式ドキュメントに書いてある

<div class="text-center space-y-12">
  <div class="font-inter text-5xl leading-relaxed px-16 bg-black">
    <span v-mark.yellow="1">"As your project grows"</span> and you start using <span v-mark.green="2">more and more queries</span> as well as concepts as <span v-mark.orange="3">Optimistic Updates</span>, you will want to <span v-mark.blue="4">organize your queries</span>.
  </div>

  <div class="text-4xl opacity-80 pt-8" v-click="5">
    プロジェクトが成長したら整理しよう
  </div>
</div>

<div class="absolute bottom--2 right-12 text-xl opacity-40">

[Pinia Colada 公式ドキュメント](https://pinia-colada.esm.dev/guide/queries.html#Organizing-Queries)

</div>

<Overlay type="fit-content" top="7%" right="5%" :z-index="1001">
  <div class="text-3xl opacity-85 whitespace-nowrap text-yellow">
    🤖Vibe Underline🌈
  </div>
</Overlay>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## defineQueryOptions で prefetch

<br />

````md magic-move
```ts
// クエリ定義を再利用可能に
const userListQuery = defineQueryOptions({
  key: ["users"],
  query: () => $fetch("/api/user"),
});
```

```ts
// reusable
const userListQuery = defineQueryOptions({
  key: ["users"],
  query: () => $fetch("/api/user"),
});

// use
const { data, status } = useQuery(userListQuery);
```

```ts
// reuseable
const userListQuery = defineQueryOptions({
  key: ["users"],
  query: () => $fetch("/api/user"),
});

// use
const { data, status } = useQuery(userListQuery);

// prefetch (`cache.ensure()`)
const queryCache = useQueryCache();
await queryCache.refresh(queryCache.ensure(userListQuery));
```
````

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## Pinia Colada で DX 向上

<Overlay type="full" v-click>

<div class="grid place-items-center h-full">
  <span class="text-8xl font-bold">宣言的データフェッチ</span>
</div>

</Overlay>

<Overlay type="full" v-click>

<div class="grid place-items-center h-full">
  <span class="text-7xl font-bold">ボイラープレート削減</span>
</div>

</Overlay>

<Overlay type="full" v-click>

<div class="grid place-items-center h-full">
  <span class="text-8xl font-bold ">キャッシュ</span>
</div>

</Overlay>

<Overlay type="full" v-click>

<div class="grid place-items-center h-full">
  <span class="text-7xl font-bold">型</span>
</div>

</Overlay>

---
layout: section
transition: slide-up
---

Pinia Colada のここが好き

---
transition: slide-up
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## 使いやすいしコードが整理できる

<div class="h-full grid place-items-center">
  <p class="text-5xl">いい感じにクエリとコンポーネントを近くに書ける</p>
</div>

<Overlay type="fit-content" top="30%" left="5%" v-click="1" class="text-5xl font-bold bg-gray-800/90 px-10 py-8 rounded-xl">
  cache
</Overlay>

<Overlay type="fit-content" top="15%" right="5%" v-click="2" class="text-5xl font-bold bg-gray-800/90 px-10 py-8 rounded-xl">
  dedupe
</Overlay>

<Overlay type="fit-content" bottom="10%" left="30%" v-click="3" class="text-5xl font-bold bg-gray-800/90 px-10 py-8 rounded-xl">
  宣言的クエリ
</Overlay>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## 便利機能で UX も向上

<br />
<br />
<br />

```typescript
useQuery({
  key: ["users"],
  query: () => $fetch("/api/users"),
  refetchOnWindowFocus: true, // ウィンドウがフォーカスを取り戻したら再取得
  refetchOnMount: true, // コンポーネントのマウント時に再取得
  refetchOnReconnect: true, // ネットワーク接続が復旧したら再取得
});
```

<Overlay v-click type="fit-content" top="23%" right="3%" class="text-4xl">
  すべてデフォルトで <code>true</code>
</Overlay>

<Overlay v-click type="fit-content" bottom="13%" left="3%" class="text-4xl">
  必要なければにも <code>false</code> にできる
</Overlay>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <custom-pinia-colada class="w-120" />
</div>

## ドキュメントが丁寧(コードも綺麗)

<div class="grid place-items-center h-full">
  <img src="/pc-doc.png" class="w-120 rounded-xl shadow-xl" />
</div>

<div class="absolute top-17 right-50">

https://pinia-colada.esm.dev/why.html#Comparison-to-other-solutions

</div>

---

<div class="grid grid-cols-2 place-items-center gap-20 h-full">
  <custom-nuxt-typed-router class="w-full" />
  <custom-pinia-colada class="w-full" />
</div>

<Overlay v-click type="full">
  <div class="grid place-items-center h-full">
    <div class="text-center space-y-12">
      <p class="text-7xl">型安全なルーティング</p>
      <p class="text-7xl">宣言的データフェッチ</p>
    </div>
  </div>
</Overlay>

---
layout: default
---

## Nuxt Typed Router + Pinia Colada

### 型安全なデータフローの完成

<br />
<br />

```ts
const route = useRoute("todos-id");
const { state } = useQuery({
  key: () => ["post", route.params.id],
  query: () => fetchPost(route.params.id),
});
```

---

## IDE とのシームレスな統合

<div class="space-y-8">

### ルート名の自動補完 + データ状態の推論

型情報がエディタ全体に伝播し、開発体験が向上

### リファクタリング時の安全性

ルート名変更やパラメータ変更時にコンパイルエラーで検知

### AI 時代

統一的なメンタルモデル(書き方の統一)<br />
AI (ジュニアエンジニア)が静的解析によって自らチェックできる<br />
型情報を元にした正確なコード補完・生成が可能？

</div>

---

<div class="h-full grid place-items-center">
  <QRCode url="https://github.com/naitokosuke/dx-pc-ntr" :size="400" />
  <a class="text-4xl opacity-80" href="https://github.com/naitokosuke/dx-pc-ntr">https://github.com/naitokosuke/dx-pc-ntr</a>
</div>

---
layout: section
---

けど

---
layout: section
---

データフェッチはむずい

---
layout: section
---

ナビゲーションもむずい

---

## ナビゲーションとデータフェッチはむずい

<br />

- **コンポーネント内でのデータフェッチの分散**
- **ナビゲーションガードによるプリフェッチの分散・肥大化**
- **カスケードフェッチ（ウォーターフォール）による遅延**
- **ルート遷移サイクルとデータ取得の非連携（描画前後の不整合）**
- **ロジック重複と再利用性の欠如**
- **並列化・重複抑制（dedupe）の欠如**
- **SSR／初期ロードとの整合性不足**
- **遷移中のエラー処理・キャンセル制御の不統一**
- **プロジェクト全体の規約・責務分離の欠如**
- etc...

---
layout: section
---

データフェッチはむずい

---
layout: section
---

銀の弾丸は存在しない

---
layout: section
---

<logos-vue /> の未来

---
layout: section
---

のデータフェッチ

---
layout: section
---

Data Loaders

---
transition: fade
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <logos-vue text-16rem />
</div>

## unplugin-vue-router の Data Loaders

<div class="grid place-items-center h-full">
  <p class="text-8xl font-bold text-center">未来の</p>
  <p class="text-8xl font-bold text-center">データフェッチ</p>
</div>

<Overlay v-click type="full" blur="20px" background-color="rgba(0, 0, 0, 0.6)">
  <div class="grid place-items-center h-full">
    <div class="text-center space-y-8">
      <p class="text-5xl font-bold">ルーティングとデータフェッチの統合</p>
      <p class="text-4xl">ナビゲーションガード内で自動的にデータフェッチを実行</p>
    </div>
  </div>
</Overlay>

<Overlay v-click type="full" blur="20px" background-color="rgba(0, 0, 0, 0.6)">
  <div class="grid place-items-center h-full">
    <div class="text-center space-y-8">
      <p class="text-6xl font-bold">これまでの課題を解決</p>
      <div class="text-4xl space-y-4">
        <p>ナビゲーション完了前にデータ取得</p>
        <p>ルート定義とデータ取得を同じ場所に</p>
        <p>カスケードフェッチの最適化</p>
      </div>
    </div>
  </div>
</Overlay>

<Overlay v-click type="full" blur="20px" background-color="rgba(0, 0, 0, 0.6)">
  <div class="grid place-items-center h-full">
    <div class="text-center space-y-8">
      <p class="text-6xl font-bold">既存ライブラリとの統合</p>
      <p class="text-4xl">Pinia Colada や Apollo などのライブラリをシームレスに</p>
    </div>
  </div>
</Overlay>

---

<div class="grid place-items-center h-full">
  <Youtube id="lhjS-6FIxgk" :width="800" :height="450" />
</div>

---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <logos-vue text-16rem />
</div>

## unplugin-vue-router の Data Loaders

<br />

```vue
<script lang="ts">
import { defineBasicLoader } from "unplugin-vue-router/data-loaders/basic";
import { getUserById } from "../api";

export const useUserData = defineBasicLoader("/user/[id]", async (to) => {
  return getUserById(to.params.id);
});
</script>

<script setup lang="ts">
const { data, isLoading, error, reload } = useUserData();
</script>
```

---

<div class="h-full grid place-items-center">
  <QRCode url="https://uvr.esm.is/data-loaders/" :size="400" />
  <a class="text-4xl opacity-80" href="https://uvr.esm.is/data-loaders/">https://uvr.esm.is/data-loaders/</a>
</div>

---
layout: center
class: text-center
---

<div class="absolute inset-0 grid place-items-center opacity-10 pointer-events-none">
  <logos-vue text-16rem />
</div>

<div class="grid place-items-center h-full">
  <div class="space-y-12">
    <p class="text-4xl font-bold">一緒にウォッチしていきましょう！</p>
    <p class="text-7xl" v-click><logos-vue /> の未来を</p>
  </div>
</div>

---

<Tweet id="1954833342114783538" scale="1.4" />

<Overlay v-click.hide="1" type="fit-content" bottom="15%" right="3%" :z-index="1002">
  <div class="text-7xl">⁉️</div>
</Overlay>

<Overlay v-click="1" type="fit-content" top="20%" left="0%" :z-index="1001">
  <img src="/genius-posva.png" class="w-320 rounded-xl shadow-2xl" alt="Genius posva" />
</Overlay>

<Overlay v-click="1" type="fit-content" bottom="15%" right="10%" :z-index="1002">
  <div class="text-9xl">‼️</div>
</Overlay>

---
layout: section
---

Thank you!

---
layout: center
---

<TweetButton
  text="『最高の DX - Nuxt Typed Router と Pinia Colada で実現する次世代 Vue/Nuxt 開発』の発表を見ました"
  button-text="「ナイトウの発表を見ました」をツイート"
  variant="info"
/>
