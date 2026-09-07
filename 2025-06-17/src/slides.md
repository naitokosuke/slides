---
title: インタラクティブな ICT 教材の実装に DSL で立ち向かう
info: |
  ## インタラクティブな ICT 教材の実装に DSL で立ち向かう
  「Vue.js の活用事例特集」
favicon: /mates-logo.png
transition: slide-left
fonts:
  sans: Noto Sans JP
  mono: Input Mono, monospace
theme: ./theme
seoMeta:
  ogTitle: インタラクティブな ICT 教材の実装に DSL で立ち向かう
  ogDescription: 株式会社メイツの ICT 教材開発の課題に DSL で立ち向かった話です。
  ogImage: https://mates-system.github.io/v-tokyo-23/og.png
  ogUrl: https://mates-system.github.io/v-tokyo-23/
  twitterCard: summary_large_image
  twitterTitle: インタラクティブな ICT 教材の実装に DSL で立ち向かう
  twitterDescription: 株式会社メイツの ICT 教材開発の課題に DSL で立ち向かった話です。
  twitterImage: https://mates-system.github.io/v-tokyo-23/og.png
  twitterSite: naitokosuke
  twitterUrl: https://mates-system.github.io/v-tokyo-23/
---

<h1>
  <span class="line-1"><span class="accent">インタラクティブ</span>な</span>
  <br />
  <span class="line-2"><span class="accent">ICT教材</span>の実装に</span>
  <br />
  <span class="line-3"><span class="accent">DSL</span>で立ち向かう</span>
</h1>

<p class="abs-bl left-14 bottom-6">
  <a href="https://vuejs-meetup.connpass.com/event/355473/" class="flex gap-3 items-center"><img src="/vuejs-jp.png" alt="v-tokyo" class="w-10 pt-2" />v-tokyo #23</a>
</p>
<p class="abs-br right-14 bottom-6"><a href="https://x.com/naitokosuke">@naitokosuke</a></p>

<style>
h1 {
  margin-top: 2rem;
  font-size: 6rem !important;
  font-weight: 1000;
  line-height: 1.25;
  text-align: center;
  width: 100%;

  span { color: white; }

  .accent {
    color: color-mix(in srgb, var(--slidev-theme-primary), black 10%);
    font-weight: 1000;
  }

  .line-2 { letter-spacing: 1.05rem }
  .line-3 { letter-spacing: 0.82rem }
}

p {
  font-size: 2.25rem;
  font-weight: 1000;
  color: color-mix(in srgb, var(--slidev-theme-primary), black 10%);
}
</style>

---
layout: center
class: text-center
transition: slide-up
---

<div class="relative inline-block">
  <img src="/japanese-companies-using-vuejs.png" alt="[https://github.com/chibivue-land/japanese-companies-using-vuejs の OGP]" class="mx-auto h-130" />
  <a href="https://github.com/chibivue-land/japanese-companies-using-vuejs">
    <img src="/qr-japanese-companies-using-vuejs.png" alt="[https://github.com/chibivue-land/japanese-companies-using-vuejs の QR コード]" class="absolute bottom-4 right-10 z-10 w-70 screen-shot-embed" />
  </a>
</div>

---

<img
  src="/mates-on-japanese-companies-using-vuejs.png"
  alt="[https://github.com/chibivue-land/japanese-companies-using-vuejs に株式会社メイツが載っているスクショ]"
  class="flex items-center mx-auto screen-shot-embed"
/>

<div
  class="animated-ellipse"
  style="top: 54%; left: 8%; width: 594px; height: 90px;"
/>

<img src="/mates-logo.png" alt="株式会社メイツ" class="absolute bottom-66 left-140 w-36 mates-logo" />

<style scoped>
.animated-ellipse {
  @apply absolute border-4 border-red-500;
  transform: scale(0);
  animation: pop-in 0.4s ease-out forwards;
  animation-delay: 1s;
  transform-origin: center;
}
@keyframes pop-in {
  0% { transform: scale(0); opacity: 0; }
  60% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); }
}

img.mates-logo {
  transform: scale(0);
  animation: pop-in 0.4s ease-out forwards;
  animation-delay: 1s;
  transform-origin: center;
}
</style>

---
layout: center
class: text-center
transition: slide-up
---

<h1>株式会社メイツ</h1>

<p :class="$slidev.nav.clicks === 1 ? 'clicked' : ''">一言で表すと</p>

<img src="/edutech.png" alt="edutech" class="mx-auto my-4 px-4" :class="$slidev.nav.clicks === 1 ? 'clicked' : ''" />

<div
  v-if="$slidev.nav.clicks === 1"
  class="overlay"
>
  <img src="/aim-at-logo.png" alt="aim@" class="mx-auto my-4" />
  <img src="/reco-logo.png" alt="reco" class="mx-auto my-4 w-50" />
</div>

<div style="display: none;" v-click />

<style scoped>
p.clicked { color: var(--slidev-theme-background); }
img.clicked { filter: blur(40px); }

.overlay {
  top: 5vh;
}
</style>

---
layout: center
---

<div class="flex items-center gap-12">
  <div class="flex-shrink-0">
    <a href="https://x.com/naitokosuke"><img src="/naitokosuke-sns-icon.png" class="w-56 h-56 rounded-full shadow-lg" /></a>
  </div>
  <div class="flex-1">
    <h2 class="text-5xl font-bold mb-6">ナイトウコウスケ</h2>
    <ul class="space-y-3 text-3xl">
      <li class="flex items-center">
        <span class="text-[#42b883] mr-2">▸</span>
        Compostion API 生まれ script setup 育ち
      </li>
      <li class="flex items-center">
        <span class="text-[#35495e] mr-2">▸</span>
        <logos-vue class="h-7 mt-1 mr-2" /> 3.2+
      </li>
    </ul>
    <div class="mt-8 pt-6 border-t border-gray-200">
      <p class="text-2xl text-gray-600">
        株式会社メイツ (2025.02~) <img src="/mates-logo.png" class="ml-2 h-10 inline-block" /><br/>
        フロントエンドエンジニア
      </p>
    </div>
  </div>
</div>

---
layout: center
---

<h1 class="text-8xl leading-36 font-bold mb-0">インタラクティブな<br /> ICT 教材の実装に<br /> DSL で立ち向かう</h1>

<div class="overlay overlay-white" v-click>
  <div>
    <h2 class="text-6xl">今日話すこと</h2>
    <ul class="mx-12 list-disc">
      <li class="text-5xl/24">株式会社メイツ</li>
      <li class="text-5xl/24">ICT 教材開発の課題</li>
      <li class="text-5xl/24">aim@ contents definition language</li>
    </ul>
  </div>
</div>

<style scoped>
.overlay { padding: 0 16px; }
</style>

---
layout: section
---

<h1 class="flex items-center justify-center text-8xl gap-4">
  <span>株式会社メイツ</span>
  <img src="/mates-logo.png" alt="mates inc." class="w-24 mt-4" />
</h1>

---
transition: slide-up
---

<div class="grid gap-4 grid-cols-3 items-center text-5xl my-20">
  <ul class="grid gap-12">
    <li class="font-bold underline underline-#D79A02 underline-offset-8">学習塾事業</li>
    <li class="font-bold underline underline-#e82518 underline-offset-8">アプリ事業</li>
  </ul>

  <img src="/mates-teams.svg" alt="[メイツの事業概要図]" class="col-span-2" />
</div>

---

<h1 class="flex items-center mb-12">
  <img src="/aim-at-logo.png" alt="aim@" aria-hidden="true" class="w-56" />
</h1>

<div class="grid grid-cols-2 gap-8 items-center">
  <ul class="space-y-4 text-4xl">
    <template v-if="$slidev.nav.clicks === 0">
      <li>学習塾向け ICT 教材</li>
      <li>定期テスト、英検、<br />高校入試、etc...</li>
      <li>Web アプリケーション</li>
    </template>
    <template v-if="$slidev.nav.clicks === 1">
      <li class="flex items-center">Web アプリ <logos-vue class="ml-2 h-8" /></li>
      <li>豊富な問題/解答形式</li>
      <li>マルチデバイス (& PWA)</li>
      <li>時間管理、メディアストリーミング、etc...</li>
    </template>
  </ul>
  <div>
    <img
      src="/aim-at-image.png"
      alt="[aim@ のイメージ]"
      class="mx-auto max-h-96"
    />
  </div>
</div>

<div style="display: none;" v-click />

---
class: text-center
layout: section
transition: slide-up
---

<h1 class="text-6xl">学習教材のドメイン知識は複雑</h1>

<p class="text-5xl">(一般的な話)</p>

---
transition: slide-up
---

<div class="mx-auto grid items-center justify-center">
  <h1>多様な学習形式と多様な問題形式</h1>
  <div class="grid grid-cols-3 gap-16 mx-auto">
    <ul class="grid gap-6 text-3xl border border-lightblue-200 bg-lightblue-50 rounded-lg p-4 h-100">
      <li>テスト</li>
      <li>一問一答</li>
      <li>ドリル</li>
      <li>模試</li>
      <li>講義動画</li>
      <li>インプット教材</li>
    </ul>
    <div class="grid col-span-2 grid-cols-2 gap-16 border border-lightblue-200 bg-lightblue-50 rounded-lg p-4 h-100">
      <ul class="grid gap-4 text-3xl">
        <li>択一</li>
        <li>複数選択</li>
        <li>穴埋め</li>
        <li>長文記述</li>
        <li>正誤</li>
        <li>書き順</li>
        <li>並び替え</li>
      </ul>
      <ul class="grid gap-4 text-3xl">
        <li>数式</li>
        <li>画像問題</li>
        <li>長文読解</li>
        <li>グラフ</li>
        <li>リスニング</li>
        <li>スピーキング</li>
        <li>作文添削</li>
      </ul>
    </div>
  </div>
</div>

---
transition: slide-up
layout: center
class: text-center
---

<h2 class="flex items-center text-7xl">
  <img src="/aim-at-logo.png" class="aim-at-logo" alt="aim@" aria-hidden="true" />
  <span>で扱う問題形式</span>
</h2>

<style scoped>
.aim-at-logo {
  width: 240px;
  margin-right: 1rem;
}
</style>

---
transition: slide-up
---

<h1 class="text-7xl">ChoiceFormat</h1>

<div class="grid grid-cols-3 gap-4 text-3xl mt-12">
  <ul class="grid gap-4">
    <li>単一選択/複数選択</li>
    <li>複数重複選択</li>
    <li>選択肢の解除機能</li>
    <li>選択肢のシャッフル</li>
    <li>選択肢に数式</li>
    <li>解答欄の結合</li>
  </ul>
  <img
    src="/choice-format.png"
    alt="[選択式問題のスクリーンショット]"
    class="mx-auto col-span-2 screen-shot-embed"
  />
</div>

---
transition: slide-up
---

<h1 class="text-7xl">WriteFormat</h1>

<div class="grid grid-cols-3 gap-4 text-4xl mt-12">
  <ul class="grid gap-4">
    <li>textarea (作文)</li>
    <li>解答欄の伸び縮み</li>
    <li>解答欄のクリア</li>
  </ul>
  <img
    src="/write-format.png"
    alt="記述形式のスクリーンショット"
    class="mx-auto col-span-2 screen-shot-embed"
  />
</div>

---
transition: slide-up
---

<h1 class="text-5xl">KanjiHiraganaHandWritingFormat</h1>

<div class="grid grid-cols-3 gap-4 text-4xl mt-12">
  <ul class="grid text-5xl gap-4">
    <li>書き順</li>
    <li>消しゴム</li>
    <li>undo</li>
  </ul>
  <img
    src="/kanji-hiragana-hand-writing-format.png"
    alt="手書き形式のスクリーンショット"
    class="mx-auto col-span-2 screen-shot-embed"
  />
</div>

---
transition: slide-up
---

<h1 class="text-7xl">全形式共通</h1>

<div class="grid grid-cols-3 gap-4 text-4xl mt-12">
  <ul class="grid">
    <li>マルバツ</li>
    <li>模範解答</li>
    <li>採点
    </li>
    <li>etc...</li>
  </ul>
  <img src="/scored-with-answer.png" alt="[採点後の模範解答の表示]" class="mx-auto col-span-2 screen-shot-embed" />
</div>

---

<h1 class="text-7xl mb-16">他にも...</h1>

<ul class="space-y-8 text-5xl">
  <li>Hiragana (ひらがなのみ入力)</li>
  <li>SelfScoring (自己採点)</li>
  <li>Speak (音声入力)</li>
  <li>etc...</li>
</ul>

---
layout: section
transition: slide-up
---

<h1 class="text-6xl">実際のコンテンツ開発とその課題</h1>

---
transition: slide-up
---

<h1 v-click>元々の学習画面</h1>

<img src="/old-aim-at.png" alt="元々の学習画面" class="mx-auto screen-shot-embed" />

<p class="text-4xl" v-click>CSV + 問題画像</p>

<ul class="grid gap-4 text-4xl" v-click>
  <li>問題画像の拡大・縮小</li>
  <li>解答欄と問題文が離れている</li>
</ul>

<div class="overlay overlay-blur" v-click>
  <img src="/sp-csv.png" alt="スマホで見た CSV コンテンツ" class="mx-auto my-20 screen-shot-embed" />
</div>

<p v-click class="overlay text-7xl emoji">🥲</p>

<style scoped>
:is(h1, ul, p) {
  position: absolute;
  width: fit-content;
  z-index: 10;
  background-color: var(--vue-green);
  border-radius: 10px;
  padding: 10px;
}

h1 { top: 30px; left: 30px; }

ul { top:300px; right: 10px; }

p { top: 150px; right: 10px; }

p.emoji {
  top: 330px;
  left: 660px;
  z-index: 1000;
  height: 130px;
  width: 130px;
}

.overlay { img { height: 500px; } }
</style>

---

<img src="/csv-content.png" alt="CSV コンテンツ" class="mx-auto screen-shot-embed h-125" />

<div :class="$slidev.nav.clicks === 0 ? 'hidden' : 'overlay overlay-blur'">
  <div class="text-3xl bg-white/90 p-8 rounded-lg">
    <ul v-if="$slidev.nav.clicks === 1">
      <li>問題文中に出てくる解答欄に直接入力できない</li>
      <li>スマホで見ると問題も解答欄もどちらも狭い</li>
      <li>問題画像の読み込みが完了するまでコンテンツを利用できない</li>
    </ul>
    <ul v-if="$slidev.nav.clicks === 2">
      <li>CSV のバリデーションがめんどい</li>
      <li>コンテンツ作成時のプレビューが大変</li>
      <li>画像データなのでレスポンシブ対応が大変 <br />(画像の拡大縮小くらい)</li>
      <li>PDF は扱いたくない、、、</li>
    </ul>
  </div>
</div>

<div style="display: none;" v-click />
<div style="display: none;" v-click />

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 1000;

  > div {
    background: rgba(255, 255, 255, 0.9);
    padding: 2rem;
    border-radius: 0.5rem;
    width: 80%;
    margin-top: 20vh;
    overflow-y: auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    h2 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      color: #333;
    }

    ul {
      list-style-type: disc;
      padding-left: 1.5rem;
      margin-bottom: 1rem;

      ul {
        list-style-type: circle;
        margin-top: 0.5rem;
      }
    }

    li {
      margin-bottom: 0.5rem;
      line-height: 1.5;
    }
  }
}

.hidden { display: none; }
</style>

---
layout: section
transition: slide-up
---

<h1 class="text-8xl">DSL で立ち向かう</h1>

---
transition: slide-up
---

<h1>何でどうやってコンテンツを作る？(ベース)</h1>

<br />

<ul class="grid gap-8 text-6xl">
  <li>LaTeX？ <devicon-latex /></li>
  <li>HTML？ <logos-html5 /></li>
  <li>Markdown？ <logos-markdown /></li>
  <li>独自フォーマット？</li>
</ul>

<style scoped>
h1 { font-size: 46px; }
</style>

---
transition: slide-up
---

<h1 class="flex items-center gap-5 mb-0">LaTeX <devicon-latex text-7xl mt-2 /></h1>

<br />
<br />

<p class="text-6xl flex gap-2 items-center"><mdi-circle-outline class="text-green-500" />表現力</p>
<small class="ml-20">数式や図表の表現力が高い</small>

<br />
<br />

<p class="text-6xl flex gap-2 items-center"><mdi-triangle-outline class="text-blue-500" />Web との親和性</p>
<small class="ml-20">HTML に変換できるけど、、、</small>

<br />
<br />

<p class="text-6xl flex gap-2 items-center"><mdi-triangle-outline class="text-blue-500" />馴染みのない開発者も多少</p>
<small class="ml-20">開発者都合だけど、、、</small>

---
transition: slide-up
---

<h1>HTML <logos-html5 /> (+ CSS)</h1>

<br />
<br />

<p class="text-6xl flex gap-2 items-center"><mdi-circle-outline class="text-green-500" />Web での表現力</p>

<br />
<br />

<p class="text-6xl flex gap-2 items-center"><mdi-close class="text-red-500" />手書きが面倒</p>
<small class="ml-20">タグを全部書くのが大変</small><br />
<small class="ml-20">数式も MathML で書く、、、？</small>

---
transition: slide-up
---

<h1>Markdown <logos-markdown /></h1>

<br />
<br />

<p class="text-6xl flex gap-2 items-center"><mdi-circle-outline class="text-green-500" />比較的書きやすい/読みやすい</p>

<br />
<br />

<p class="text-6xl flex gap-2 items-center"><mdi-circle-outline class="text-green-500" />拡張が容易</p>
<small class="ml-20">既存のプロセッサやプラグインが利用できる(markdown-it など)</small>

---
layout: center
---

<div class="grid gap-8 text-7xl">
  <p>HTML を書きたい！</p>
  <p>(手書きは大変)</p>
  <p>HTML を簡潔に書きたい！！</p>
  <p>基本的には Markdown で</p>
  <p>LaTeX などは局所的に</p>
</div>

---
layout: section
class: text-7xl
transition: view-transition
---

<br />

<h1 class="flex items-center justify-center gap-12">
  <span class="view-a">A</span><span class="view-c">C</span><span class="view-d">D</span><span class="view-l">L</span>
</h1>

<style scoped>
.view-a { view-transition-name: a; color: var(--aim-at-red) !important; }
.view-c { view-transition-name: c; color: var(--aim-at-red) !important; }
.view-d { view-transition-name: d; color: var(--aim-at-red) !important; }
.view-l { view-transition-name: l; color: var(--aim-at-red) !important; }
</style>

---
layout: center
class: text-center
transition: view-transition
---

<h1><span class="view-a">A</span>im@ <span class="view-c">C</span>ontents <span class="view-d">D</span>efinition <span class="view-l">L</span>anguage</h1>

<style scoped>
.view-a { view-transition-name: a; color: var(--aim-at-red); }
.view-c { view-transition-name: c; color: var(--aim-at-red); }
.view-d { view-transition-name: d; color: var(--aim-at-red); }
.view-l { view-transition-name: l; color: var(--aim-at-red); }
</style>

---
transition: slide-up
---

<h1>
  <span class="view-a">A</span>im@ 
  <span class="view-c">C</span>ontents 
  <span class="view-d">D</span>efinition 
  <span class="view-l">L</span>anguage
</h1>

<div class="grid gap-16">
  <h2 class="text-4xl grid items-center">
    Markdown 拡張した DSL <span class="text-2xl">
    (<span class="font-bold text-#2897c8">D</span>omain <span class="font-bold text-#2897c8">S</span>pecific <span class="font-bold text-#2897c8">L</span>anguage)</span>
  </h2>
  <div class="grid grid-cols-3 gap-24">
    <div>
      <ul class="grid gap-2 text-3xl">
        <li>KaTeX</li>
        <li>ルビ、画像、動画</li>
        <li>sanitize</li>
      </ul>
    </div>
    <div class="col-span-2">
      <ul class="grid gap-2 text-3xl">
        <li>塾固有のレイアウト</li>
        <li>専用のタグ</li>
        <li>問題ごとのメタ情報</li>
      </ul>
    </div>
  </div>
  <div v-click class="overlay overlay-white">
    <div>
      <p class="text-5xl text-center">
        <span>1 問の問題、ヒント、解説、メタ情報を</span><br />
        <span>1 つのファイルで記述できる</span>
      </p>
      <p class="text-3xl text-end mt-15 mr-5"><logos-vue text-3xl mr-2 />SFC...?</p>
    </div>
  </div>
</div>

<style scoped>
.view-a { view-transition-name: a; color: var(--aim-at-red); }
.view-c { view-transition-name: c; color: var(--aim-at-red); }
.view-d { view-transition-name: d; color: var(--aim-at-red); }
.view-l { view-transition-name: l; color: var(--aim-at-red); }

.overlay {
  p:first-child {
    margin-top: 100px;
    background-color: var(--slidev-theme-background);
    padding: 10px;
    border-radius: 10px;
    border: 2px solid var(--slidev-theme-text);
  }
}
</style>

---
transition: slide-up
---

<h1 class="text-4xl">ACDL 例</h1>

<div class="grid grid-cols-2 gap-2">

```markdown
<aim-question>
## 因数分解小テスト

### １. 因数分解しなさい

(1) $9x^2 - 16=$ <aim-input />
</aim-question>

<aim-meta>
配点: '0'
解説画像:
  - kaisetsu.png
問題種類*: その他
問題形式: 演習問題形式
...
</aim-meta>
```

```markdown
<aim-answer>
(1) $9x^2 - 16 = (3x + 4)(3x - 4)$

<aim-img
  filename="kaisetsu.png"
  width="600px"
/>
</aim-answer>

<aim-hint>
# ヒント

- ヒント 1
- ヒント 2
- ヒント 3

</aim-hint>
```

</div>

<style scoped>
:deep(.slidev-code) {
  code {
    font-size: 1.2rem;
    line-height: 1.3;
  }
}
</style>

---

<img src="/cms-example.png" alt="aim@ CMS のサンプル" class="w-200 mx-auto screen-shot-embed" />

---
layout: section
transition: slide-up
---

<h1 class="text-6xl">ACDL のランタイム</h1>

---
transition: slide-up
layout: center
---

<div class="grid grid-cols-2 gap-6">
  <div class="border border-gray-300 rounded-xl p-6 shadow-lg w-110">
    <h2 class="text-4xl font-bold mb-4">ユーザー入力</h2>
    <ul class="space-y-2 text-2xl">
      <li class="flex items-start">
        <span class="mr-2 mt-1">•</span>
        自作ソフトウェアキーボード
      </li>
      <li class="flex items-start">
        <span class="mr-2 mt-1">•</span>
        入力フィールドの状態管理
      </li>
      <li class="flex items-start">
        <span class="mr-2 mt-1">•</span>
        解答のバリデーション
      </li>
    </ul>
  </div>
  <div class="border border-gray-300 rounded-xl p-6 shadow-lg">
    <h2 class="text-4xl font-bold mb-4">メディアの取り扱い</h2>
    <ul class="space-y-2 text-2xl">
      <li class="flex items-start">
        <span class="mr-2 mt-1">•</span>
        ストリーミング
      </li>
      <li class="flex items-start">
        <span class="mr-2 mt-1">•</span>
        プレイヤー
      </li>
      <li class="flex items-start">
        <span class="mr-2 mt-1">•</span>
        認可
      </li>
      <li class="flex items-start">
        <span class="mr-2 mt-1">•</span>
        cleanup の処理
      </li>
    </ul>
  </div>
</div>

---

<h1>インタラクション実装 (ランタイム) の課題</h1>

<br />

<div v-if="$slidev.nav.clicks === 0" class="text-4xl grid">
  <ul class="grid gap-10">
    <li>コンテンツは DSL で記述されて、生の HTML (DOM) <br />に変換される</li>
    <li><logos-vue /> で実装する部分と生 DOM を混ぜ合わせて<br />インタラクティブにする必要がある</li>
  </ul>
  <br />
  <span class="mb-4 text-3xl">例えば</span>
  <span class="text-2xl font-bold">ソフトウェアキーボード、採点処理時に正誤を表示、etc...</span>
</div>

<div v-if="$slidev.nav.clicks === 1" class="overlay overlay-white">
  <div>
    <ul class="text-4xl grid gap-6">
      <li>愚直にやると <logos-vue /> の世界と生 DOM の世界を<br />何度も行き来することになる</li>
      <li>
        生 DOM をいじると UI の記述が命令的になる
        <ul class="mt-6 text-3xl grid gap-4 list-disc px-10">
          <li>selector はどうするか</li>
          <li>その時点での DOM 全体の構造が不明</li>
          <li>イベントリスナーの管理がめんどくさい</li>
        </ul>
      </li>
    </ul>
    <p class="mt-12 font-bold text-4xl text-center">UI の仕様がわからなくなる (なんでもできてしまう)</p>
  </div>
</div>

<p v-if="$slidev.nav.clicks === 2" class="text-4xl leading-18">
  あらゆるところで <logos-vue /> のスケジューラーのことを考慮<br />しながら実装する必要がある
  <br />
  <span class="text-3xl">(どこで nextTick() を使うか使わないか)</span>
</p>

<template v-if="$slidev.nav.clicks === 3">
  <p class="text-4xl font-bold underline mt-4">これらをうまく解決したい</p>

  <ul class="text-5xl grid gap-10 mt-10">
    <li><logos-vue /> と生 DOM の組み合わせ</li>
    <li>生 DOM 操作の命令的な記述</li>
    <li><logos-vue /> のスケジューラー (nextTick())</li>
  </ul>
</template>

<div style="display: none;" v-click />
<div style="display: none;" v-click />
<div style="display: none;" v-click />

<style scoped>
h1 { font-size: 47px; }
</style>

---
transition: slide-up
---

<h1 class="text-6xl">ランタイムの実装のアプローチ</h1>

<p class="text-5xl mt-16">実装を 2 つの空間に分離する</p>

<div class="grid grid-cols-2 gap-8 mt-10">
  <div class="border p-8 border-solid border-gray-300 rounded-lg">
    <h2 class="text-6xl mb-4 font-bold">Infra</h2>
    <p class="text-4xl mt-8">UI 更新の仕組み</p>
  </div>
  <div class="border p-8 border-solid border-gray-300 rounded-lg">
    <h2 class="text-6xl mb-4 font-bold">Impl</h2>
    <p class="text-4xl mt-8">ビジネスロジック</p>
  </div>
</div>

---

# Infra のアーキテクチャ

<img
  src="/aim-at-markdown-arch.png"
  alt="aim@ のアーキテクチャ"
  class="w-145 mx-auto"
/>

<p
  style="position: absolute; bottom: 345px; right: 520px;"
  class="text-4xl description"
  v-click
>
  宣言的な UI の状態
  <br />
  (デカい reactive object)
</p>

<p
  style="position: absolute; bottom: 130px; right: 100px;"
  class="text-4xl description"
  v-click
>
  ACDL → HTML
</p>

<p
  style="position: absolute; bottom: 235px; right: 20px;"
  class="text-4xl description"
  v-click
>
  HTML にインタラクティブな機能を注入
</p>

<style scoped>
.description {
  background-color: var(--slidev-theme-accent);
  color: var(--slidev-theme-background);
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: bold;
}
</style>

---

<h1 class="text-6xl">Render</h1>

<div class="grid grid-cols-3">
<div>

<ul class="grid gap-4 text-4xl">
  <li>ACDL → HTML</li>
  <br />
  <li>pre process</li>
  <li>post process</li>
  <li>sanitize</li>
</ul>

</div>
<div class="col-span-2">

```ts
function render(s: string, opts?: RenderOptions): string {
  return [preProcess, markdown.render, postProcess, sanitize].reduce(
    (acc, p) => p(acc, opts),
    s,
  );
}

interface RenderOptions {
  shouldRenderMedia: boolean;
  isVertical: boolean;
  // etc...
}
```

</div>
</div>

<div
  v-if="$slidev.nav.clicks === 1"
  class="overlay overlay-blur"
  style="overflow: hidden; padding: 10px;"
>
<div class="w-200 relative">

<div class="absolute top-7 right-10 text-white bg-gray-800 px-2 py-1 rounded text-3xl font-bold z-10">ACDL</div>

```html
## 因数分解小テスト ### １. 因数分解しなさい (1) $9x^2 - 16=$ <aim-input />
```

<div
  class="absolute top-7 right-10 text-white bg-gray-800 px-2 py-1 rounded text-3xl font-bold z-10"
  style="margin-top: 10rem;;"
>
  HTML
</div>

<br />

```html
<div class="pa-2 rendered overflow-y-auto full-height">
  <h2>因数分解小テスト</h2>
  <h3>１. 因数分解しなさい</h3>
  <p>
    (1)
    <span class="katex">
      <span class="katex-html">
        <span class="base">
          <span
            class="strut"
            style="height:0.897438em;vertical-align:-0.08333em;"
          ></span>
          <span class="mord">9</span>
          <span class="mord">
            <span class="mord mathnormal">x</span>
            <span class="msupsub">
              <span class="vlist-t">
                <span class="vlist-r">
                  <span class="vlist" style="height:0.8141079999999999em;">
                    <span style="top:-3.063em;margin-right:0.05em;">
                      <span class="pstrut" style="height:2.7em;"></span>
                      <span class="sizing reset-size6 size3 mtight">
                        <span class="mord mtight">2</span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
          <span
            class="mspace"
            style="margin-right:0.2222222222222222em;"
          ></span>
          <span class="mbin">−</span>
          <span
            class="mspace"
            style="margin-right:0.2222222222222222em;"
          ></span>
        </span>
        <span class="base">
          <span
            class="strut"
            style="height:0.64444em;vertical-align:0em;"
          ></span>
          <span class="mord">1</span>
          <span class="mord">6</span>
          <span
            class="mspace"
            style="margin-right:0.2777777777777778em;"
          ></span>
          <span class="mrel">=</span>
        </span>
      </span>
    </span>
    <span class="question-field">
      <span class="question-field-input-wrapper">
        <input class="question-field-input" data-aim-tag="" placeholder="" />
      </span>
      <span class="question-field-error"></span>
    </span>
  </p>
</div>
```

</div>
</div>

<div v-click style="display: none;" />

<style scoped>
.overlay { display: grid; justify-items: center; }

:deep(.slidev-code) {
  code { font-size: 1.1rem; line-height: 1.2; }
}
</style>

---
transition: slide-up
---

<h1 class="text-5xl">Bridge</h1>

<div class="grid gap-8">
<ul class="grid gap-2">
  <li class="text-3xl">宣言的な UI の状態</li>
  <li class="text-3xl">問題データから作成されるリアクティブオブジェクト</li>
</ul>

<div>

<img src="/vue-bridge-dom.drawio.svg" alt="what is bridge?" class="w-170 mx-auto" />

</div>
</div>

---
layout: center
transition: slide-up
---

<img src="/bridge-structure.drawio.svg" alt="what is bridge?" class="h-120 mx-auto" />

<div v-if="$slidev.nav.clicks === 1" class="overlay overlay-blur">
<div class="bg-white/90 p-8 rounded-lg">

```ts
const bridge = ref<MarkdownQuestionBridge | null>(null);

interface MarkdownQuestionBridge {
  questionFormatsBridges: QuestionFormatBridge[];
}

type QuestionFormatBridge =
  | SingleFormatBridge
  | SpeakFormatBridge
  | ChoiceFormatBridge
  | WriteFormatBridge
  | SelfScoringFormatBridge;
//  ...
```

</div>
</div>

<div v-click style="display: none;" />

<style scoped>
.overlay {
  > div {
    width: fit-content;
    display: grid;
    justify-self: center;
    place-items: center;
    height: 100%;

    :deep(.slidev-code) {
      code {
        font-size: 1.5rem;
        line-height: 1.3;
      }
    }
  }
}
</style>

---

<h1 class="text-5xl">Bridge は巨大リアクティブオブジェクト</h1>

<div class="grid gap-8 mt-12">
  <p class="text-5xl text-gray-600"><span v-mark="{ color: 'var(--aim-at-red)' }">すべての UI 状態を管理</span></p>

  <div class="mt-8">
    <p class="text-4xl flex items-center gap-2"><logos-vue /> の reactivity system が嬉しい</p>
    <div class="grid grid-cols-2 gap-8 mt-12">
      <div class="p-8 border bg-#42b883 rounded-lg text-center">
        <p class="text-4xl font-bold text-#35495e">.value</p>
      </div>
      <div class="p-8 border bg-#35495e rounded-lg text-center">
        <p class="text-4xl font-bold text-#42b883">deep watch</p>
      </div>
    </div>
  </div>
</div>

<style scoped>
.text-aim-at-red { color: var(--aim-at-red); }
</style>

---
transition: slide-up
---

<h1 class="text-8xl">Hydration</h1>

<br />

<div class="grid grid-cols-2">

<ul class="grid gap-10 ">
  <li class="text-4xl">DOM と Bridge のリンク</li>
  <li class="text-3xl">Vue の世界の外で DOM 操作</li>
</ul>

```ts
hydrate({
  markdownQuestionBridge,
  inputElementClassName,
  // ...
});
```

</div>

<style scoped>
:deep(.slidev-code) {
  height: fit-content;
  code {
    font-size: 1.5rem;
    line-height: 1.3;
  }
}
</style>

---
transition: slide-up
---

<p class="text-5xl">{{ message }}</p>

<br />
<br />

````md magic-move
```ts
const real = document.getElementById(hydrationId);
```

```ts
ctx.markdownQuestionBridge.value?.questionFormatsBridges.forEach(
  (markdownQuestionFormat, i) => {
    switch (markdownQuestionFormat.type) {
      case QuestionFormatBridgeType.Write:
      case QuestionFormatBridgeType.Choice: {
        hydrateInput(ctx, real, markdownQuestionFormat, i);
        break;
      }
      // ...
    }
  },
);
```

```ts
function hydrate(ctx: HydrateContext): HydratedHandler {
  // ...
  const update = () => {
    try {
      internalUpdate(ctx, real);
    } catch (e) {
      // error handling
    }
  };

  // HydratedHandler
  return { update /* ... */ };
}
```
````

<script setup>
import { computed } from "vue";
const message = computed(() => {
  if ($slidev.nav.clicks === 0) return "1. 対象の DOM 要素を取得";
  if ($slidev.nav.clicks === 1) return "2. DOM に Bridge を hydrate ";
  if ($slidev.nav.clicks === 2) return "3. HydratedHandler の生成";
  return "";
});
</script>

<style scoped>
:deep(.slidev-code) {
  font-size: 1.4rem !important;
  line-height: 1.3 !important;
}
</style>

---

```ts
// bridge を生成
bridge.value = build(questionFormats /* ... */);

// DOM を生成 (v-html で挿入)
renderedQuestionText.value = render(acdl /* ... */);

// bridge を DOM に hydrate
nextTick(() => {
  hydratedHandler = hydrate({
    markdownQuestionBridge: bridge,
    targetSelector: "#question-42445345736",
    /* ... */
  });
});
```

<br />

```ts
// Bridge を watch して受け取った HydratedHandler を実行することで UI を更新する
const bridge = ref<MarkdownQuestionBridge | null>(null);
watch([bridge, activeQuestionFieldInfo], () => hydratedHandler?.update?.(), {
  deep: true,
});
```

<div v-if="$slidev.nav.clicks === 1" class="overlay">

<img
  src="/aim-at-markdown-arch.png"
  alt="aim@ のアーキテクチャ"
  class="mx-auto h-130"
/>

</div>

<div v-click style="display: none;" />

<style scoped>
h1 {
  font-size: 4rem;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 999;
  border: 1px solid var(--slidev-theme-text);
  padding: 1px;
  border-radius: 10px;
}


:deep(.slidev-code) {
  code {
    font-size: 1.1rem;
    line-height: 1.3;
  }
}
</style>

---

<h1 class="text-7xl">ここまでで Infra は揃った</h1>

<br />

<p class="text-6xl leading-18">Bridge を操作することで<br />UI が更新される</p><br />
<p class="text-6xl leading-18">Bridge を使って UI に関する<br />ビジネスロジックを実装していく</p>

---

<h1 class="text-5xl">Impl</h1>

<div class="grid gap-8">
  <p class="text-4xl">Bridge を使って UI に関するビジネスロジックを記述</p>

  <ul class="grid gap-4 text-3xl">
    <li>時間切れ → 自動採点 → <mdi-circle-outline class="text-green-500" /><mdi-close class="text-red-500" /></li>
    <li>学習フェーズ (回答中、採点後、見直し) の変更 → UI の更新</li>
    <li>選択肢選択のビジネスロジック <span class="text-xl">(コンテンツの設定によって挙動が変わる)</span>
      <ul class="mt-3 text-xl list-disc ml-6">
        <li :class="$slidev.nav.clicks === 1 ? 'text-aim-at-red' : ''">選択済み選択肢 (追加されるのか、解除されるのか)</li>
      </ul>
    </li>
    <li>数式入力の不正な入力に対するバリデーション
      <ul class="mt-3 text-xl list-disc ml-6">
        <li>累乗のネストや 2 重根号、半分数の禁止、etc...</li>
      </ul>
    </li>
    <li>
      <span :class="$slidev.nav.clicks === 1 ? 'text-aim-at-red' : ''">左右キーの押下で解答欄移動</span>、etc...
    </li>
  </ul>

  <div v-if="$slidev.nav.clicks === 1" class="overlay overlay-blur">
    <p class="text-4xl leading-relaxed px-8">
      中でも DSL によってレンダリングされた部分からの<br />イベント (input, focus, blur, etc...) は <span class="text-aim-at-red">UserAction</span> <br />という名前で実装されている
    </p>
  </div>
</div>

<div v-click style="display: none;" />

<style scoped>
.overlay {
  z-index: 999;
  padding: 2rem;

  > p {
    margin-bottom: 250px;
    padding: 1rem;
    border-radius: 1rem;
    background-color: var(--slidev-theme-background);
    height: fit-content;
    border: 2px solid var(--slidev-theme-text);
  }
}

.overlay-blur { backdrop-filter: blur(1px); }

.text-aim-at-red { color: var(--aim-at-red); }
</style>

---

<h1 class="text-4xl">キーボードごとに多様なアクションが実装</h1>

<br />
<br />
<br />

<img v-if="$slidev.nav.clicks === 0" src="/keyboard-math.png" alt="" class="w-full mx-auto screen-shot-embed" />
<img v-if="$slidev.nav.clicks === 1" src="/keyboard-choice.png" alt="" class="w-full mx-auto screen-shot-embed" />
<img v-if="$slidev.nav.clicks === 2" src="/keyboard-chemistry.png" alt="" class="w-full mx-auto screen-shot-embed" />
<img v-if="$slidev.nav.clicks === 3" src="/keyboard-tegaki.png" alt="" class="w-full mx-auto screen-shot-embed" />

<div v-if="$slidev.nav.clicks === 4" class="mt-4">
    <h2 class="text-3xl font-semibold mb-10">実 DOM にバインドされる UserActions</h2>
    <ul class="list-disc list-inside space-y-6 text-2xl">
      <li>handleInput</li>
      <li>handleFocus</li>
      <li>handleBlur</li>
      <li>handleClickDeleteButton</li>
    </ul>
    <img src="/hydration-binding-user-actions.png" alt="" class="h-110 mx-auto screen-shot-embed absolute bottom-5 right-30" />
</div>

<img v-if="$slidev.nav.clicks === 5" src="/user-actions.png" alt="" class="w-full mx-auto screen-shot-embed" />

<div v-click style="display: none;" />
<div v-click style="display: none;" />
<div v-click style="display: none;" />
<div v-click style="display: none;" />
<div v-click style="display: none;" />

---
transition: slide-up
---

<h1 class="text-6xl">binding</h1>

<p class="text-4xl">キーボードごとのアクションを DOM に紐付ける</p>

<br />
<br />
<br />

  <div class="grid gap-16 ">
    <ul class="text-4xl grid gap-8">
      <li><logos-vue /> コンポーネント (キーボード等) のイベント</li>
      <li>生 DOM (DSL でレンダリングされた要素) のイベント</li>
    </ul>
    <p class="text-4xl">異なる世界のイベントを統一的に扱いたい</p>
  </div>

---
transition: slide-up
---

<h1 class="text-6xl">2 つのバインディング方法</h1>

<h2 class="text-3xl">bind via <logos-vue text-2xl /> template</h2>

```html
<template>
  <EnglishKeyboard
    @click:english-key="bridge.userActions.english.vueBindings.swKeyboard.handleClickKey"
    ...
  />
</template>
```

<br />

<h2 class="text-3xl">bind via hydration</h2>

```ts
const hydrate = (/** ... */) => {
  // ...
  target.addEventListener("input", (e) =>
    bridge.userActions.english.hydrationBindings.handleInput(e),
  );
};
```

<div v-if="$slidev.nav.clicks === 1" class="overlay overlay-blur">
  <img src="/binding-methods.png" alt="user action binding" class="h-100 mx-auto mt-20" />
</div>

<div v-click style="display: none;" />

<style scoped>
ol { font-size: 1.4rem; }

:deep(.slidev-code) {
  code { font-size: 1.1rem; line-height: 1.1; }
}
</style>

---
layout: center
---

<img src="/cohesion.png" alt="VS Code でのディレクトリツリー" class="h-130 mx-auto" />

<style scoped>
.slidev-layout { background-color: #1E1F30 !important; }
</style>

---

<br />
<div class="grid gap-12 grid-cols-2">
  <div>
    <h2 class="text-6xl mb-8">Infra</h2>
    <ul class="grid text-4xl gap-4">
      <li>Bridge: UI の状態管理</li>
      <li>Render: ACDL → HTML</li>
      <li>Hydration: DOM 連携</li>
    </ul>
  </div>
  <div>
    <h2 class="text-6xl mb-8">Impl</h2>
    <ul class="grid text-4xl gap-4">
      <li>ビジネスロジック</li>
      <li>ユーザーアクション</li>
      <li>Bridge を操作して UI 更新</li>
    </ul>
  </div>
</div>

<ul class="text-4xl tracking-wider mt-24 grid gap-4">
  <li><span v-mark="{ color: 'var(--aim-at-red)' }">生 DOM と Vue の境界を明確にした</span></li>
  <li><span v-mark="{ color: 'var(--aim-at-red)' }">Bridge を操作して UI を更新 (UI を宣言的に記述)</span></li>
</ul>

---
layout: section
transition: slide-up
---

<h1 class="text-5xl">DSL でインタラクティブ教材に立ち向かう</h1>

---

# まとめ

<div class="grid gap-16 text-5xl">
  <div class="before-after-container">
    <div class="image-wrapper">
      <img src="/choice-format-old.png" alt="Before: CSV + 画像形式" :class="$slidev.nav.clicks <= 1 ? 'active' : 'inactive'" />
      <div class="image-label" :class="$slidev.nav.clicks === 0 ? 'visible' : 'hidden'">Before (CSV + 画像)</div>
    </div>
    <div class="image-wrapper">
      <img src="/choice-format.png" alt="After: ACDL形式" :class="$slidev.nav.clicks <= 1 ? 'inactive' : 'active'" />
      <div class="image-label" :class="$slidev.nav.clicks === 0 ? 'hidden' : 'visible'">After (ACDL)</div>
    </div>
  </div>

  <div v-click style="display: none;" />

  <div class="overlay overlay-white" v-if="$slidev.nav.clicks === 1">
    <div>
      <ul class="grid gap-4">
        <li>CSV + 画像では解答欄と問題文が分離</li>
        <li>レスポンシブ対応の困難さ</li>
        <li>インタラクティブな教材実装の複雑性</li>
      </ul>
    </div>
  </div>

  <div v-click style="display: none;" />

  <div class="overlay overlay-white" v-click>
    <div>
      <ul class="grid gap-4">
        <li>問題文中に直接解答欄を配置</li>
        <li>マルチデバイス対応の実現</li>
        <li>コンテンツ開発の DX 改善</li>
        <li class="text-3xl">(単一ファイル、 プレビュー環境)</li>
      </ul>
    </div>
  </div>

  <div class="overlay overlay-white" v-click>
    <div>
      <ul class="grid gap-4">
        <li>ACDL (DSL) によるコンテンツ記述</li>
        <li>Bridge による宣言的な UI 記述</li>
        <li>ドメインロジックの凝集度の向上</li>
      </ul>
    </div>
  </div>
</div>

<style scoped>
.before-after-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  margin: 0 auto 2rem;
  height: 400px;
}

.image-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.image-wrapper img {
  height: 300px;
  width: auto;
  transition: all 0.6s ease-in-out;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.image-wrapper img.active {
  height: 380px;
  filter: brightness(1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.image-wrapper img.inactive {
  height: 150px;
  filter: brightness(0.3) opacity(0.5);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.image-label {
  color: var(--slidev-theme-text);
  font-size: 1.5rem;
  font-weight: 600;
  transition: opacity 0.6s ease;
  margin-top: 0.5rem;
}

.image-label.visible { opacity: 1; }

.image-label.hidden { opacity: 0.3; }

</style>

---
layout: center
transition: slide-up
---

<h1 class="text-6xl">今後の課題</h1>

<div class="grid gap-8">
  <div>
    <h2 class="text-4xl mb-2 font-bold">レガシー CSV コンテンツの負債</h2>
    <ul class="grid gap-2 text-3xl ml-9 list-disc">
      <li>膨大なフォーマット、複雑怪奇な実装...</li>
      <li>ACDL 実装との二重管理</li>
    </ul>
  </div>

  <div>
    <h2 class="text-4xl mb-2 font-bold">テストと品質保証</h2>
    <ul class="grid gap-2 text-3xl ml-9 list-disc">
      <li>要件が複雑すぎて、動作確認が非常に大変</li>
      <li>テストの拡充と改善</li>
    </ul>
  </div>

  <div>
    <h2 class="text-4xl mb-2 font-bold">ACDL 自身の進化</h2>
    <ul class="grid gap-2 text-3xl ml-9 list-disc">
      <li>より表現力豊かに、より使いやすく</li>
    </ul>
  </div>
</div>

---

<h1 class="text-7xl">Time is up...</h1>

<ul class="text-4xl grid gap-4 mx-16">
  <li v-click>タイマー</li>
  <li>
    <span class="block mb-3" v-click>生徒の学習フェーズ</span>
    <ul class="ml-8 mt-2 text-3xl list-disc grid">
      <li v-after>解答中</li>
      <li v-after>マルバツ</li>
      <li v-after>やり直し</li>
      <li v-after>etc...</li>
    </ul>
  </li>
  <li v-click>発音問題</li>
  <li v-after>etc...</li>
</ul>

<div v-click class="overlay overlay-white">
  <p class="text-4xl">But!!!!!!</p>
</div>

<div v-click class="overlay overlay-white">
  <div class="grid grid-cols-2 items-center mx-16">
    <p class="text-5xl">
      tech-lead of <img src="/mates-logo.png" alt="aim@" class="h-12 inline-block mx-2 mb-4" /><br />
      is here today ...lol<br/>
      <span class="text-2xl">(Ask him anything!)</span>
    </p>
    <img src="/ubugeeei-icon.jpg" alt="aim@" class="h-100" />
  </div>
</div>

<style scoped>
</style>

---
layout: center
class: text-center
---

<h1 class="text-5xl">仲間を募集しています</h1>

<div class="mt-12 grid grid-cols-2 gap-8">
  <div class="flex flex-col items-center">
    <img src="/wantedly.png" alt="Wantedly 上のメイツのページ" class="h-60 screen-shot-embed mb-4" />
    <p class="text-3xl text-center">Wantedly で<br />「メイツ」と検索！</p>
  </div>
  <div class="flex flex-col items-center">
    <img src="/vue-fes-japan-2025.png" alt="Vue Fes Japan 2025" class="h-60 screen-shot-embed mb-4" />
    <p class="text-3xl text-center">Vue Fes Japan<br />スポンサー (予定)</p>
  </div>
</div>

---
layout: section
class: text-3xl
---

# ありがとうございました
