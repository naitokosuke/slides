---
theme: default
title: V が名前に入ってる(再)
info: |
  ## 「V が名前に入ってる(再)」
  Funabashi.dev supported by KIKKAKE CREATION 2024.09.14
class: text-right
transition: slide-left
fonts:
  sans: "Kosugi Maru"
  mono: "Fira Code"
seoMeta:
  ogTitle: V が名前に入ってる(再)
  ogImage: https://slides.naito.dev/2024-09-14/og-image.png
  ogUrl: https://slides.naito.dev/2024-09-14/
  twitterCard: summary_large_image
---

<h1>V <span v-click>が名前に入ってる(再)</span></h1>

<div first-letter:text-blue>ナイトウ <a href="https://twitter.com/engineer_naito" target="_blank" rel="noopener noreferrer"><carbon-logo-twitter /></a></div>

<div class="pt-12 first-letter:text-blue">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 first-letter:text-blue">
  {{ nowStrRef }}
</div>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const now = new Date();
const nowStr = now.toLocaleString();
const nowStrRef = ref(nowStr);

function tick() {
  const newTime = new Date();
  const newTimeStr = newTime.toLocaleString();
  nowStrRef.value = newTimeStr;
}

onMounted(() => {
  setInterval(tick, 1000);
  tick();
})
</script>

<style>
h1::first-letter {
  color: green;
  font-size: 300%;
}
</style>

---
transition: view-transition
---

<h1>こ<span text-blue>の</span>スライドはこちらで</h1>

<div
  mt-10
  flex="~ col"
  gap-16
  justify-center
  items-center
  class="view-transition-qr"
>
  <input v-model="text" type="text" w-full />
  <img :src="qrcode" alt="QR Code" w-64/>
</div>

<PageNumber :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<ProgressBar :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<script setup>
import { ref } from "vue";
import { useQRCode } from "@vueuse/integrations/useQRCode";

const text = ref("https://slides.naito.dev/2024-09-14/");
const qrcode = useQRCode(text);
</script>

<style>
.view-transition-qr {
  view-transition-name: view-transition-qr;
}
</style>

---
transition: slide-left
layout: two-cols
---

<h1>Table <span text-blue>o</span>f contents</h1>

おしながき

<br />
<br />

<Toc minDepth="1" maxDepth="1"></Toc>

::right::

<div
  mt-10
  flex="~ col"
  gap-16
  justify-center
  items-center
  class="view-transition-qr"
>
  <input v-model="text" type="text" w-full />
  <img :src="qrcode" alt="QR Code" w-64/>
</div>

<PageNumber :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<ProgressBar :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<script setup>
import { ref } from "vue";
import { useQRCode } from "@vueuse/integrations/useQRCode";

const text = ref("https://slides.naito.dev/2024-09-14/");
const qrcode = useQRCode(text);
</script>

<style>
.view-transition-qr {
  view-transition-name: view-transition-qr;
}
</style>

---
transition: slide-left
title: 自己紹介
layout: two-cols
layoutClass: gap-16
---

<img src="/images/green_heart.png" />

<ul>
  <li>
    <a href="https://twitter.com/engineer_naito" target="_blank" rel="noopener noreferrer">
      <carbon-logo-twitter text-blue /> 旧 Twitter <carbon-new-tab />
    </a>
  </li>
  <li>
    <a href="https://github.com/naitokosuke" target="_blank" rel="noopener noreferrer">
      <carbon-logo-github text-blue /> GitHub <carbon-new-tab />
    </a>
  </li>
  <li>
    <a href="https://zenn.dev/kosuke_naito" target="_blank" rel="noopener noreferrer">
      <carbon-blog text-blue /> Zenn <carbon-new-tab />
    </a>
  </li>
</ul>

<br />

<Tweet
  id="1764917140338147519"
  scale="0.6"
/>

::right::

<h1>
  <span class="text-gradation">I'm ナイトウ</span>
</h1>

<br />

<ul class="text-2xl">
  <li>
    <span class="color-python">Python</span> <logos-python /> が好き
  </li>
  <li v-after><span class="text-gradation">Vue</span> <logos-vue text-xl /> も好き</li>
  <li v-after><span class="color-itf">筑波大</span>卒 (非 CS 専攻)</li>
  <li><span text-yellow>柏</span> (<a href="https://toukatsu.connpass.com/">東葛de<span text-green>v</span></a> 運営)</li>
  <li>自作キーボード</li>
</ul>

<PageNumber :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<ProgressBar :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<script setup lang="ts">
import { ref } from "vue";
const now = new Date();
const START_DATE = new Date(2021, 1, 1);
const years = now.getFullYear() - START_DATE.getFullYear() + 1;
</script>

<style>
.text-gradation {
  background: linear-gradient(45deg, #52D422, #2266D4);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400% 400%;
}

h1 span.text-gradation {
  animation: GradientBackground 3s ease infinite;
}

ul li span.text-gradation {
  animation: GradientBackground 5s ease infinite;
}

.color-python {
  background: linear-gradient(45deg, #3776AB, #FFD43B);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400% 400%;
  animation: GradientBackground 5s ease infinite;
}

.color-itf {
  background: linear-gradient(45deg, #00BFD6, #6600CC);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400% 400%;
  animation: GradientBackground 5s ease infinite;
}

@keyframes GradientBackground {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
};
</style>

<!--
推しキーキャップは Kailh Clione Limacina Switch / Linear です。
-->

---
transition: view-transition
title: V が名前に入ってる技術
---

<h1><span class="emphasized-V">V</span></h1>

<style>
@view-transition {
  navigation: auto;
}

h1 {
  margin-top: 300px;
  margin-left: 600px;
}

.emphasized-V {
  view-transition-name: emphasized-V;
  font-size: 400px;
  background: linear-gradient(45deg, #52D422, #2266D4);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400% 400%;
  animation: GradientBackground 3s ease infinite;
}

@keyframes GradientBackground {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
};
</style>

---
transition: slide-left
layout: cover
class: text-left text-8xl
---

<span class="text-green emphasized-V">V</span>ue <logos-vue />

<style>
.emphasized-V {
  view-transition-name: emphasized-V;
}
</style>

---
transition: slide-down
layout: cover
class: text-center text-7xl
---

Slide<span class="text-green">v</span> <logos-slidev />

---
transition: slide-right
layout: cover
class: text-right text-9xl
---

<p>u<span class="text-green">v</span> <img src="/images/uv_logo.svg" inline-block w-1em h-1em /></p>

---
transition: slide-up
layout: cover
class: text-left text-8xl
---

<span class="text-green">V</span>S Code <logos-visual-studio-code />

---
transition: slide-left
layout: cover
class: text-center text-7xl
---

<span class="text-green">V</span>ite <logos-vitejs />

---
transition: slide-down
layout: cover
class: text-right text-9xl
---

<span class="text-green">V</span>ercel <logos-vercel-icon bg-white />

---
transition: slide-right
layout: cover
class: text-center text-8xl
---

S<span class="text-green">v</span>elte <logos-svelte-icon />

---
transition: slide-up
layout: cover
class: text-left text-7xl
---

<p><span class="text-green">V</span>olta <img src="/images/volta_logo.jpg" inline-block w-1em h-1em /></p>

---
transition: slide-down
layout: cover
class: text-right text-8xl
---

<span class="text-green">V</span>agrant <logos-vagrant-icon />

---
transition: slide-left
layout: cover
class: text-center text-9xl
---

Hyper-<span class="text-green">V</span>

---
transition: slide-up
layout: cover
class: text-left text-7xl
---

<span class="text-green">V</span>im <logos-vim />

---
transition: slide-right
layout: cover
class: text-center text-8xl
---

Ja<span class="text-green">v</span>a <logos-java />

---
transition: slide-down
layout: cover
class: text-right text-9xl
---

Ja<span class="text-green">v</span>aScript <logos-javascript />

---
transition: slide-left
layout: cover
class: text-left text-8xl
---

n<span class="text-green">v</span>m <logos-nvm />

---
transition: slide-up
layout: cover
class: text-center text-9xl
---

<span class="text-green">V</span>8 <logos-v8 />

---
transition: slide-right
layout: cover
class: text-right text-7xl
---

<p><span class="text-green">v</span>0 <img src="/images/v0_logo.png" inline-block w-2em h-2em /></p>

---
transition: slide-left
layout: cover
class: text-left text-9xl
---

<p><span class="text-green">V</span>alibot <img src="/images/valibot_logo.jpg" inline-block w-1.2em h-1.2em /></p>

---
transition: slide-up
layout: cover
class: text-center text-7xl
---

Lara<span class="text-green">v</span>el <logos-laravel />

---
transition: slide-down
layout: cover
class: text-right text-8xl
---

<span class="text-green">V</span>lang <logos-vlang />

---
transition: view-transition
layout: cover
class: text-center text-9xl
---

<p><span class="text-green emphasized-V">V</span>alkey <img src="/images/valkey_logo.png" inline-block w-1em h-1em /></p>

<style>
.emphasized-V {
  view-transition-name: emphasized-V;
}
</style>

---
transition: slide-up
layout: two-cols-header
---

<h1><span class="emphasized-V text-green text-9xl">V</span></h1>

::left::

<ul>
  <li v-for="item in itemsLeft" :key="item">
    <span v-html="highlightV(item)"></span>
  </li>
</ul>

::right::

<ul>
  <li v-for="item in itemsRight" :key="item">
    <span v-html="highlightV(item)"></span>
  </li>
</ul>

<PageNumber :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<ProgressBar :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<script setup lang="ts">
import { ref } from "vue";

const itemsLeft = ref([
  "Vue",
  "Slidev",
  "uv",
  "VS Code",
  "Vite",
  "Vercel",
  "Svelte",
  "Volta",
  "Vagrant",
  "Hyper-V"
]);

const itemsRight = ref([
  "Vim",
  "Java",
  "JavaScript",
  "nvm",
  "V8",
  "v0",
  "Valibot",
  "Laravel",
  "Vlang",
  "Valkey"
]);

const highlightV = (text) => {
  return text.replace(/(v|V)/g, '<span class="text-green">$1</span>');
};
</script>

<style>
@view-transition {
  navigation: auto;
}

.emphasized-V {
  view-transition-name: emphasized-V;
}
</style>

<!--
ここで他に何か浮かぶ人がいないかを聞いてみる
-->

---
transition: slide-left
level: 2
---

<h1>今日<span text-blue>話</span>すのは</h1>

<br />
<br />
<br />

<ul text-4xl>
  <li>Slide<span class="text-green">v</span></li>
  <li><span class="text-green">V</span>ue</li>
  <li>u<span class="text-green">v</span></li>
</ul>

<PageNumber :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<ProgressBar :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

---
transition: view-transition
layout: center
---

<h1><span class="view-transition-slidev">Slide<span text-green>v</span></span></h1>

<style>
.view-transition-slidev {
  view-transition-name: view-transition-slidev;
}
</style>

<!--
まずは Slidev から
-->

---
transition: slide-up
title: What is Slidev?
---

<h1><span class="view-transition-slidev">Slide<span text-green>v</span></span></h1>

Presentation Slides for Developers

<br />
<br />

- 📝 **テ<span text-blue>キ</span>ストベース** - Markdown と HTML, CSS のいいとこどり
- 🧑‍💻 **<span text-blue>開</span>発者フレンドリー** - Web の知識がそのまま転用できる
- 🤹 **インタラクティ<span text-blue>ブ</span>** - <span text-green>V</span>ue コンポーネントを埋め込み可能
- 🎥 **録画<span text-blue>機</span>能** - 録画機能とカメラビューもある
- 📤 **<span text-blue>ポ</span>ータブル** - PDF、PPTX、PNG、または SPA としてエクスポート可能
- 🛠 **ハッカブ<span text-blue>ル</span>** - Web でできることはほぼ全て Slide<span text-green>v</span> でも可能

<br />
<br />
<br />

[Why Slidev?](https://sli.dev/guide/why)

<PageNumber :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<ProgressBar :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<style>
.view-transition-slidev {
  view-transition-name: view-transition-slidev;
}
</style>

<!--
Web やってる方だったら楽しくスライド作れる
マークダウンで内容を考えて、見た目は HTML, CSS, JS
-->

---
transition: slide-up
level: 2
---

<h1>クリック<span text-blue>ア</span>ニメーション</h1>

<br />
<br />
<br />

<div v-click>

`v-click`

```html
<div v-click>v-click</div>
```

</div>

<br />

<v-click>

<span v-mark.green="3" v-mark.circle.blue="4"><code>v-mark</code></span>

```html
<span v-mark.green="3" v-mark.circle.blue="4">v-mark</span>
```

</v-click>

<PageNumber :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<ProgressBar :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<!--
Slidev のいい感じの機能を紹介していきます
-->

---
transition: slide-up
level: 2
---

<h1>Shiki <span text-blue>M</span>agic Mo<span text-green>v</span>e</h1>

<br />

<br />

````md magic-move {lines: true}
```ts {*|2|*}
// step 1
const author = reactive({
  name: "John Doe",
  books: [
    "Vue 2 - Advanced Guide",
    "Vue 3 - Basic Guide",
    "Vue 4 - The Mystery",
  ],
});
```

```ts {*|1-2|3-4|3-4,8}
// step 2
export default {
  data() {
    return {
      author: {
        name: "John Doe",
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - Basic Guide",
          "Vue 4 - The Mystery",
        ],
      },
    };
  },
};
```

```ts
// step 3
export default {
  data: () => ({
    author: {
      name: "John Doe",
      books: [
        "Vue 2 - Advanced Guide",
        "Vue 3 - Basic Guide",
        "Vue 4 - The Mystery",
      ],
    },
  }),
};
```

```vue
<!-- step 4 -->
<script setup>
const author = {
  name: "John Doe",
  books: [
    "Vue 2 - Advanced Guide",
    "Vue 3 - Basic Guide",
    "Vue 4 - The Mystery",
  ],
};
</script>
```
````

<PageNumber :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<ProgressBar :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<!--
Vue2 から Vue3 への移行の例のはず
Shiki: シンタックスハイライター、VS Code と同じエンジン
Shiki Magic Move: コードにアニメーション
-->

---
transition: slide-up
---

<h1>Motio<span text-blue>n</span>s</h1>

<br />

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }"
  :click-3="{ x: 80 }"
  :leave="{ x: 1000 }"
>
  Slidev
</div>
```

<div class="w-60 relative">
  <div class="relative w-40 h-40">
    <img
      v-motion
      :initial="{ x: 800, y: -100, scale: 1.5, rotate: -50 }"
      :enter="final"
      class="absolute inset-0"
      src="https://sli.dev/logo-square.png"
      alt=""
    />
    <img
      v-motion
      :initial="{ y: 500, x: -100, scale: 2 }"
      :enter="final"
      class="absolute inset-0"
      src="https://sli.dev/logo-circle.png"
      alt=""
    />
    <img
      v-motion
      :initial="{ x: 600, y: 400, scale: 2, rotate: 100 }"
      :enter="final"
      class="absolute inset-0"
      src="https://sli.dev/logo-triangle.png"
      alt=""
    />
  </div>

  <div
    class="text-5xl absolute top-14 left-40 text-[#2B90B6] -z-1"
    v-motion
    :initial="{ x: -80, opacity: 0}"
    :enter="{ x: 0, opacity: 1, transition: { delay: 2000, duration: 1000 } }">
    Slidev
  </div>
</div>

<PageNumber :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<ProgressBar :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}
</script>

<div
  v-motion
  :initial="{ x:35, y: 30, opacity: 0}"
  :enter="{ y: 0, opacity: 1, transition: { delay: 3500 } }">

[Learn more](https://sli.dev/guide/animations.html#motion)

</div>

<PageNumber :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<ProgressBar :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

---
transition: slide-up
---

<h1>Monaco <span text-blue>E</span>ditor</h1>

<br />
<br />

```ts {monaco-run}
import { version } from "vue";
import { emptyArray } from "./external";

console.log(`vue ${version}`);
console.log(
  emptyArray<number>(10).reduce(
    (fib) => [...fib, fib.at(-1)! + fib.at(-2)!],
    [1, 1],
  ),
);
```

<PageNumber :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<ProgressBar :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<!--
VS Code を Web で使える
インタラクティブなコードエディタ
動的な編集も可能
補完とかエラーチェックとかも
-->

---
layout: center
transition: view-transition
---

<h1><span class="view-transition-vue"><span text-green>V</span>ue</span></h1>

<style>
.view-transition-vue {
  view-transition-name: view-transition-vue;
}
</style>

---
transition: slide-up
title: Vue コミュニティ
---

<h1><span class="view-transition-vue"><span text-green>V</span>ue</span> コミ<span text-blue>ュ</span>ニティ</h1>

あなたもすでにコミュニティの一員！？

<br />

<span text-blue>で</span>きること

- 仲<span text-blue>間</span>のユーザーを助ける
- issue のトリアージ<span text-blue>を</span>助ける
- コー<span text-blue>ド</span>の貢献(バグ修正、新機能)
- 経験を共<span text-blue>有</span>する(記事、ブログ)
- ドキュメントを翻訳す<span text-blue>る</span>
- イベント<span text-blue>で</span>発表する、支援する

<PageNumber :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<ProgressBar :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<style>
.view-transition-vue {
  view-transition-name: view-transition-vue;
}
</style>

---
transition: slide-up
class: bg-white
---

<h1 text-black><span text-blue>「</span>コミュニティとはグラデーション<span text-blue>」</span></h1>

<span text-gray >[【初学者にこそ伝えたい】Vue.js コミュニティ入門](https://zenn.dev/comm_vue_nuxt/articles/vue-community) より引用</span>

<div flex justify-center items-center>
  <img src="/images/vue_community_gradation.png" h-400px />
</div>

<!--
コミュニティに明確な境界線はない
自分の行動が Vue.js にとってどう映るかを意識する
技術の裏にいる方たちへのリスペクトを忘れずに
-->

---
transition: slide-up
---

<h1>ぼくがやってる<span text-blue>こ</span>と</h1>

<span text-green>V</span>ue 書いてなくてもできることはある

<br />

- <span text-green>v</span>-tokyo <span text-blue>参</span>加
- <span text-green>V</span><span text-blue>u</span>e 教えてもらう(勉強会を開く)
- ドキュメント<span text-blue>日</span>本語訳の改善に挑戦
- <span text-green>V</span>ue Fes Japan のボランティ<span text-blue>ア</span>
- 記事<span text-blue>を</span>書く
- Twitter, Discord でわち<span text-blue>ゃ</span>わちゃする

<PageNumber :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<ProgressBar :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<!--
明確に境界がないということは逆に書いてない人でもできることはある
-->

---
transition: slide-up
---

<h1>コミュニ<span text-blue>テ</span>ィ</h1>

世界中の <span text-blue>V</span>ue カンファレンス

<div grid grid-cols-4 gap-x-3 items-center >
  <Tweet id="1582391536318173184" scale="0.7" h-64 />
  <Tweet id="1762760127625531481" scale="0.7" h-16 />
  <Tweet id="1718194948376596941" scale="0.7" h-64 />
  <Tweet id="1182324722316562432" scale="0.7" h-16 />
</div>

<PageNumber :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<ProgressBar :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

---
transition: slide-left
---

<h1><span text-green>V</span>ue F<span text-blue>e</span>s Japan 2024 <openmoji-flag-japan /> <logos-vue /></h1>

2024.10.19 Sat @Otemachi PLACE HALL & CONFERENCE

<div
  mt-10
  flex="~ col"
  gap-16
  justify-center
  items-center
>
  <input v-model="text" type="text" w-full />
  <img :src="qrcode" alt="QR Code" w-64/>r
</div>

<PageNumber :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<ProgressBar :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<script setup>
import { ref } from "vue";
import { useQRCode } from "@vueuse/integrations/useQRCode";

const text = ref("https://vuefes.jp/2024/");
const qrcode = useQRCode(text);
</script>

---
layout: center
transition: view-transition
---

<h1><span class="view-transition-uv">u<span text-green>v</span></span></h1>

<style>
.view-transition-uv {
  view-transition-name: view-transition-uv;
}
</style>

---
transition: slide-up
title: What is uv? (cargo for Python?)
---

<h1><span class="view-transition-uv"><span text-blue>u</span><span text-green>v</span></span></h1>

Rust 製 Python 用パッケージ & プロジェクトマネージャー

<br />

<div flex gap-50px items-center>
  以下を置き換えるツール
  <a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener noreferrer"><img src="/images/uv_logo.svg" /></a>
</div>

<br />

- `pip`
- `pip-tools`
- `pipx`
- `poetry`
- `pyenv`
- `virtualenv`
- and more ...

<PageNumber :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<ProgressBar :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<style>
.view-transition-uv {
  view-transition-name: view-transition-uv;
}
</style>

---
transition: slide-up
---

<h1>Python やるならまずは u<span text-green>v</span> <span text-blue >？</span></h1>

one-stop shop tool for Python

<br />

- Rust 製で高速
- Python 自体のインストール & バージョン管理
- Python スクリプトの実行
- パッケージ管理
- プロジェクト管理
- ツール管理
- 慣れ親しんだ pip インターフェース
- u<span text-green>v</span> 自体のアップデートなど各種ユーティリティ

<PageNumber :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<ProgressBar :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

---
transition: slide-up
---

<h1>これまでの Py<span text-blue>t</span>hon パッケージツール</h1>

乱世、混沌、錯綜、、、

<br />

- どのツールもいいところと課題があった
  - pip: シンプル but 依存関係管理が困難
  - poetry: 依存関係 & プロジェクト管理 but 速くない

<br />

- 併用するとコンフリクトしたり
- 互換性なかったり
- 依存関係管理に `requirements.txt` が使われていたことも
- バージョンの固定(`.lock`)ができない
- 手動で管理
- 複数環境(`dev`, `staging`, `prod`)の管理が難しい

<PageNumber :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<ProgressBar :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

---
transition: slide-up
---

<h1>pyprojec<span text-blue>t</span>.toml & .lock ファイル</h1>

モダンなパッケージ管理へ

<br />
<br />

- `.lock` ファイルでバージョン固定
- ツールが `pyproject.toml` を読んで自動的に依存関係の解決
- パッケージ管理とプロジェクト管理も
- 開発依存とプロダクション依存を分離して管理可能に

<PageNumber :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<ProgressBar :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

---
transition: slide-up
layout: two-cols-header
---

<h1>Rye の登<span text-blue>場</span> <a href="https://rye.astral.sh/" target="_blank" rel="noopener noreferrer"> <simple-icons-rye /></a></h1>

パッケージ & プロジェクト管理

::left::

<Tweet id="1649903576750104576" scale="0.5" />

::right::

<v-click>

- <div>mitsuhiko さん <a href="https://twitter.com/mitsuhiko" target="_blank" rel="noopener noreferrer"><carbon-logo-twitter /></a> <a href="https://github.com/mitsuhiko" target="_blank" rel="noopener noreferrer"><carbon-logo-github /></a> が自分のために開発</div>
- デフォルトの依存関係なし
- `virtualenv` を利用
- (当時の) `uv` を採用
- 標準化された `indygreg` Python ビルドを利用
- `pyproject.toml` に依存関係 & プロジェクト設定
- `pyproject.toml` を見てよしなに Python 環境

</v-click>

<br />

<v-click>
Rye 自体が特別な機能を提供しているわけではない
</v-click>

<br />

<span v-click><span v-mark.yellow>エコシステムのツールに委譲</span>している</span>

<PageNumber :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<ProgressBar :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

---
transition: slide-up
layout: two-cols-header
---

<h1>当時の u<span text-green>v</span></h1>

Rust 製高速 Python パッケージインストーラー & リゾルバー

<br />

::left::

<Tweet id="1758252944409956675" scale="0.5" />

::right::

<v-click>

- [Ruff](https://astral.sh/ruff) を手がける [astral](https://astral.sh/) 社製
- Rust 製で高速
- `pip`, `pip-tools` を代替する
- 使いやすいツール
- `virtualenv` の代わりも
- `pip` のインターフェース
- Python に依存していない
- Python のバージョンに依存しない

</v-click>

<PageNumber :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<ProgressBar :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

---
transition: slide-left
---

<h1>Rye & u<span text-green>v</span></h1>

"cargo for Python" へ

<br />
<br />

- `Rye` と `uv` は目指している地点が近かった

<v-clicks>

- `Rye` 作者と astral 社の話し合いのもと、
- astral 社で `Rye` を管理することに！

</v-clicks>

<br />
<br />

<v-clicks>

- そして最終的には `uv` と `Rye` が一つになって、
- 完全体 <span v-mark.yellow>"cargo for Python"</span> の実現を目指す！

</v-clicks>

<PageNumber :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<ProgressBar :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

---
layout: two-cols
title: まとめ
---

<h1>ま<span text-blue>と</span>め  <logos-vue animate-ping /></h1>

名前に V 入ってること多くない？

<br />
<br />
<br />

<div text-3xl>

- Slide<span text-green>v</span> <logos-slidev /> で遊ぼう！
- <span text-green>V</span>ue Fes Japan 2024
- u<span text-green>v</span> 流行るといいな

</div>

::right::

<Tweet id="1718194948376596941"/>

<PageNumber :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />

<ProgressBar :currentPage="$slidev.nav.currentPage" :totalPages="$slidev.nav.total" />
