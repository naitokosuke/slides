---
theme: default
transition: slide-left
title: 最高の DX (lite) - Nuxt Typed Router と Pinia Colada で実現する次世代 Vue/Nuxt 開発
fonts:
  sans: "Noto Sans JP"
  serif: "Murecho"
  mono: "JetBrains Mono"
seoMeta:
  ogTitle: 最高の DX (lite) - Nuxt Typed Router と Pinia Colada で実現する次世代 Vue/Nuxt 開発
  ogImage: https://slides.naito.dev/2025-10-25-lite/og-image.png
  ogUrl: https://slides.naito.dev/2025-10-25-lite/
  twitterCard: summary_large_image
---

# 最高の DX (lite) - Nuxt Typed Router と Pinia Colada で実現する次世代 Vue/Nuxt 開発

---

## Twitter Share

発表中、もしよろしければツイートしてください。

---

## 自己紹介

![ナイトウコウスケ](/naitokosuke-sns-icon.png)

**ナイトウコウスケ**

Composition API 生まれ
script setup 育ち

---

## 株式会社メイツ

**株式会社メイツ**

- EdTech 企業
- Web アプリ
- Vue / Nuxt

---

![株式会社メイツ](/mates-logo.png)

---

## カジュアル面談

---

![Wantedly](/wantedly.png)

---

## クイズ なんの数字？

---
layout: center
class: text-8xl
---

**57** **44** **54**


<br />

**35** **42**

---

![Vue Fes Japan 2025](/vue-fes-japan-2025.png)

---

## Vue Fes Japan 2025 に関わる数

| スポンサー企業 | 個人スポンサー | スタッフ |
| :------------: | :------------: | :------: |
|     **57**     |     **44**     |  **54**  |

| ボランティア | 登壇者 |
| :----------: | :----: |
|    **35**    | **42** |

※ https://vuefes.jp/2025/sponsors
※ 同じ人をめっちゃ重複して数えている
※ ざっくり数え

---
layout: center
class: text-9xl
---

感謝

---
layout: center
class: text-9xl
---

<logos-vue /> <logos-nuxt-icon />

---
layout: center
class: text-9xl
---

<logos-react /> <logos-nextjs-icon />

---
layout: center
class: text-9xl
---

<logos-angular-icon />

---
layout: center
class: text-9xl
---

<logos-svelte-icon />

---
layout: center
class: text-9xl
---

<logos-solidjs-icon />

---
layout: center
class: text-9xl
---

<logos-qwik-icon />

---
layout: center
class: text-9xl
---

<logos-astro-icon />

---
layout: center
class: text-9xl
---

<logos-preact />

---

## 懇親会の話のタネに

懇親会の話のタネになれば嬉しいです

- 「ナイトウの発表見ました！」
- 「Pinia Colada って...」
- 「データフェッチってどうしてますか？」
- 「Nuxt Typed Router って良さそうですね！」
- 「React / Next.js ではどんな感じ？」

---
layout: center
class: text-9xl
---

エコシステム

---
layout: center
class: text-9xl
---

Vue の未来

---

## "The limits of my language mean the limits of my world."

「人間は、いま自分が話している言葉の範囲でしか、世界を考えることができない。」

— Ludwig Wittgenstein, 1922

たまには外の世界に出て知らない人の話を聞こう！

---

「どうせ技術的負債になるから」
っていうのは設計とか実装とか
上手くなる機会を逃している

---

![lacolaco さん TS Kaigi 2025](/lacolaco-tskaigi.png)

---

「ライブラリの話かな」
って思っちゃうけど、
抽象化すれば抽象的に見れば
その言語がどのような課題を有しているかわかる

ライブラリを見ることで
言語の未来を
想像することができる

https://youtu.be/OUsXjtkLYu0

---
layout: center
class: text-9xl
---

ということで

---

## タイトル再表示

最高の DX - Nuxt Typed Router と Pinia Colada で実現する次世代 Vue/Nuxt 開発

「最高の」という表現は主観的で誇張的である可能性があります。
より客観的な評価を示すことを検討してください。
(ai-writing/no-ai-hype-expressions)

---
layout: center
class: text-9xl
---

DX

---

## Developer Experience = 開発者体験

開発プロセス全体で
開発者が感じる体験の総体

DX = なんかいいな

---

## 最高の DX

開発者の認知負荷を最小化
本質的な問題解決に集中

---
layout: center
class: text-9xl
---

課題

---
layout: center
class: text-9xl
---

開発って大変

---

## Web アプリ開発(フロントエンド)

- **ルーティング**
- **データフェッチ**
- **フォーム**
- **エラーハンドリング**
- **認証・認可**
- **パフォーマンス**
- **状態管理**
- **アクセシビリティ**
- **国際化(i18n)**
- **テスト**
- **SEO 対策**
- **セキュリティ**
- **UI/UX**
- **ビルド・デプロイ**
- **モニタリング**

特に大変じゃないですか？
ルーティング
データフェッチ

---
layout: center
class: text-7xl
---

切っても切れない

---
layout: center
class: text-9xl
---

のに

---

## ルーティングを手打ち(TS 使ってるのに)

```ts
router.push(`/user/${userId}`);
router.push("/user/profile");
router.push("/user/settings");
```

---

## データフェッチングのボイラープレート

```ts
const question = ref("");
const answer = ref("Questions usually contain a question mark. ;-)");
const loading = ref(false);

watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes("?")) {
    loading.value = true;
    answer.value = "Thinking...";
    try {
      const res = await fetch("https://yesno.wtf/api");
      answer.value = (await res.json()).answer;
    } catch (error) {
      answer.value = "Error! Could not reach the API. " + error;
    } finally {
      loading.value = false;
    }
  }
});
```

from https://vuejs.org/guide/essentials/watchers

---

## Nuxt Typed Router と Pinia Colada

型安全なルーティング
宣言的データフェッチング

---
layout: center
class: text-9xl
---

どこで
<br />
<br />
<br />
<br />
<br />
出会ったか

---

## 技術スタック

<div class="text-9xl text-center">
<logos-nuxt-icon /> <logos-graphql /> <logos-pinia />
</div>

<br />

<div class="flex justify-center"><img src="/icons/nuxt-typed-router.svg" class="inline-block h-60" /> <img src="/icons/pinia-colada.svg" class="inline-block h-60" /></div>

---
layout: center
---

## Nuxt Typed Router

![Nuxt Typed Router](/icons/nuxt-typed-router.svg)

---

## 公式ドキュメント

https://nuxt-typed-router.vercel.app/

---

## Nuxt Typed Router とは

型安全なルーティング
Nuxt モジュール

---

## nuxt-typed-router

![Victor Garcia GitHub](/victorgarciaesgi-github.png)

by victorgarciaesgi
Victor Garcia

---

## ファイル構造から自動型生成

Nuxt のファイルベースルーティング

```
pages/
  index.vue        → /
  users/
    index.vue      → /users
    [id].vue       → /users/:id
  login/
    index.vue      → /login
```

---

## 生成される型

```ts
// @typed-router エイリアスから利用可能
import { RoutesNamesList, RoutesParamsRecord } from "@typed-router";

// ルート名のユニオン型
type RoutesNamesList = "index" | "users" | "users-id" | "login";

// パラメータの型辞書
type RoutesParamsRecord = {
  index: never;
  users: never;
  "users-id": { id: string };
  login: never;
};
```

---

## 型安全なナビゲーション

```ts
// RoutesNamedLocations - router.push() の型安全化
type RoutesNamedLocations =
  | { name: "index" }
  | { name: "users" }
  | { name: "users-id"; params: { id: string } }
  | { name: "login" };

// ルート名に応じて params が自動的に切り替わる
router.push({ name: "users-id", params: { id: "123" } }); // ✓ OK
router.push({ name: "users-id" }); // ✗ エラー: params が必須
router.push({ name: "login", params: {} }); // ✗ エラー: params 不要
```

---

## 型による絞り込み

```ts
const route = useRoute();

// route.name で分岐すると params の型が絞り込まれる
if (route.name === "users-id") {
  console.log(route.params.id); // string 型
}

// ルート名を指定してアサーションも可能
const route = useRoute("login");
console.log(route.name); // "login" 型
```

---

## 生成される `routesNames`

```ts
const routeName = routesNames.usersId; // "users-id"

// 実際に生成されるオブジェクト
export const routesNames = {
  index: "index" as const,
  users: "users" as const,
  usersId: "users-id" as const,
  login: "login" as const,
};
```

---

## TypeScript の恩恵

IDE の補完が効く
typo に気づく

---

## 快適な開発体験

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

## 従来のルーティング問題

```ts
const router = useRouter();

const navigateToUser = (userId) => {
  router.push(`/usr/${userId}`); // ❌ typo: actual "user"
};
```

⚠️ typo の危険性

---

## 従来のルーティング問題

```ts
// /users/123/posts/456/comments?sort=latest
import { useRoute } from "vue-router";

const route = useRoute();

const currentUserId = route.params.id;
const currentTab = route.query.tab;
```

🫠 パラメータの型が曖昧

---

## 従来のルーティング問題

🥳 < ユーザー詳細画面だからきっと `user-detail` だよね

😉 < ユーザー ID だからパラメータはもちろん `userId` 👍

```ts
router.push({
  name: "user-detail", // ❌ 実際は user-id
  params: { userId }, // ❌ 実際は id
});
```

😭 IDE の補完が効かない

---
layout: center
class: text-7xl
---

こうなったら嬉しい

---

## 理想的なルーティング開発体験

- typo したらすぐ気づく
- パラメータの型が明確
- リファクタリングが安全
- IDE の補完が効く

---

## Nuxt Typed Router による解決

---

## typo を防ぐ & IDE 補完が効く

```ts
import { useRouter } from "@typed-router";
const router = useRouter();

// ✅ IDE が自動補完候補を表示
router.push({
  name: "articles-slug", // Tab で候補が出る
  params: { slug: "hello-world" }, // 必須パラメータを提案
});

// ❌ typo や存在しないルートはコンパイルエラー
router.push({ name: "usr-id" }); // TypeScript Error!
```

---

## 型が明確

```ts
import { useRoute } from "@typed-router";

const route = useRoute();

// 条件分岐で型が自動的に絞り込まれる
if (route.name === "articles-slug") {
  const slug = route.params.slug; // string型として推論
  console.log(slug.length); // ✅ stringメソッドが補完
}
```

体験してみてください⌨️

---

## Nuxt Typed Router で DX 向上

IDE の補完が効く

- ルート名やパラメータ名が自動補完される
- typo を未然に防ぐ

静的解析でエラー検知

- 存在しないルートへの遷移を検出
- リファクタリング時の修正漏れを防ぐ

レビューコスト減

- 型システムが正しさを保証
- レビュアーは型エラーではなくロジックに集中できる
- (最近は AI がそれっぽいのを提出してくる)

---

## 型安全なコンポーネント

---

## `<NuxtLink />` をラップしたコンポーネント

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

🤔

---

## Script Setup Generics とは

Vue 3.3+

`<script setup>` に直接ジェネリック型パラメータを定義できる

```vue
<script setup lang="ts" generic="T extends SomeType">
// T は型パラメータとして利用可能
</script>
```

コンポーネント単位で型安全な props を実現

---

## Generics による型安全なコンポーネント

```vue
<script setup lang="ts" generic="T extends RoutesNamesList, P extends string">
import type { RoutesNamesList, NuxtRoute } from "@typed-router";

const props = defineProps<{
  to: NuxtRoute<T, P>;
}>();
</script>
```

- `T`: ルート名の型（e.g. `'index' | 'about' | 'articles-slug'`）
- `P`: パス文字列の型
- `NuxtRoute<T, P>`: 型安全なルート定義

---

## Nuxt Typed Router のここが好き

---

## Out-of-Box I18n Support

`@nuxtjs/i18n`

`useLocalePath()`, `useLocaleRoute()`, `<NuxtLinkLocale>`

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
  <NuxtLinkLocale :to="{ name: 'users' }" locale="fr"> />
</template>
```

---
layout: center
class: text-9xl
---

え、まって

---
layout: center
class: text-6xl
---

Nuxt Typed Pages は？

---

## Nuxt Typed Router と Nuxt Typed Pages は別物

3rd party module VS Official feature

安定 VS 実験的機能

---

## Nuxt Typed Router は 3rd party module

🦾 安定

---

## Nuxt Typed Pages は公式機能

🧪 実験的機能

---

## Nuxt Typed Pages

- `unplugin-vue-router` をベースにした型安全ルーティング
- Nuxt Typed Router と同様の機能を Nuxt 本体で提供

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  experimental: {
    typedPages: true,
  },
});
```

Nuxt 3.5+

---

## unplugin-vue-router

**型付きファイルベースルーティング**

for Vue 3

Nuxt Typed Pages の基盤技術

Not Only Nuxt

---

## unplugin-vue-router と Nuxt Typed Router

![unplugin-vue-router と Nuxt Typed Router](/uvr-ntr.png)

unplugin-vue-router は Nuxt Typed Router からインスピレーションを得て作られました

---

## unplugin-vue-router

![posva GitHub](/posva-github.png)

by posva
Eduardo San Martin Morote

---

## posva's OSS

- Vue Router / unplugin-vue-router
- Pinia / Pinia Colada
- VueFire
- mande
- vue-promised

---
layout: center
class: text-9xl
---

Pinia Colada

---

![piña colada](/pina-colada.jpg)

---

## piña colada

ラムをベースにパイナップルジュースとココナッツミルクを砕いた氷と一緒にシェイクして作るロングドリンク。黄白色で甘みが強い。

---

![Pinia Colada](/icons/pinia-colada.svg)

---
layout: center
class: text-9xl
---

Pinia Colada

---

## 公式ドキュメント

https://pinia-colada.esm.dev/

---

## Pinia Colada とは

Vue 用の非同期状態管理ライブラリ

Vue 用のデータフェッチングライブラリ

---
layout: center
class: text-9xl
---

特徴

---

## ⚡️ Automatic Caching

client-side cache
dedupe

---

## 🗄️ Async State

あらゆる非同期状態の処理

---

## 🔌 Plugins

強力なプラグインシステム

---

## ✨ Optimistic Updates

楽観的更新も簡単に実現

---

## 💡 Sensible Defaults

健全なデフォルト設定
完全なカスタマイズ性

---

## 🧩 Out-of-the-Box Plugins

データフェッチング用の
composables

---

## 🔑 TypeScript Support

TypeScript 型サポート

---

## 💨 Small Bundle Size

約 2kb のベースライン
fully tree-shakeable

---

## 📦 Zero Dependencies

依存関係なし(Pinia 以外)

---

## ⚙️ SSR

SSR サポート

---

## 🔄 Data Loaders

Vue Router Data Loaders

---

## インストール

```bash
ni @pinia/colada
```

❗ Pinia も必要

"peerDependencies": {
"pinia": "^2.2.6 || ^3.0.0",
"vue": "^3.5.17"
}

---

## Vue プラグインを設定

```ts
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { PiniaColada } from "@pinia/colada";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(PiniaColada, {
  /** Options */
});
```

---

## もちろん Nuxt module も

```bash
nlx nuxi@latest module add @pinia/colada-nuxt
```

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@pinia/colada-nuxt"],
});
```

---

## BEFORE と AFTER

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

refresh(); // 手動の初回データフェッチ
```

```ts
// AFTER ☺️

const { data, error, isPending, isLoading, refresh } = useQuery({
  key: ["users"],
  query: () => fetchUsers(),
});
```

🍹 すっきり
🍍 状態管理
🏖️ 再利用性

---

## いい感じのデータフェッチ

- **宣言的**に記述
- ボイラープレートなし
- いい感じに**キャッシュ**
- **型**

---
layout: center
class: text-6xl
---

Pinia Colada による解決

---
layout: center
class: text-9xl
---

その前に

---
layout: center
class: text-7xl
---

データフェッチの

---
layout: center
class: text-8xl
---

考え方や用語を

---

## Query と Mutation

🔍 Query
データを**読み取る**

✏️ Mutation
データを**書き込む**

---

## 💾 Cache

取得したデータを保存して再利用

同じデータへのリクエストを削減
アプリケーションの応答性が向上

---

## 🌞 Active Query

コンポーネントで使用中のクエリ

画面に表示されているデータ
自動的に更新・管理される

---

## 💤 Inactive Query

使用されていないクエリ

キャッシュには残っているが非表示
一定時間後にガベージコレクション

---

## 🍣 Stale / Fresh

キャッシュデータの鮮度管理

データの新鮮さを判断する基準
鮮度に応じて自動的に再取得

---

## 🔄 Invalidation

キャッシュを明示的に無効化

データ更新後に関連キャッシュを無効化
最新のデータを再取得して表示

---

## Pinia Colada による解決

改めて🍹

---

## 宣言的

```ts
// 「何をフェッチするか」だけを記述
const { data, error, status } = useQuery({
  key: ["todos"],
  query: () => $fetch("/api/todos"),
});

// ✅ loading, error, data の状態管理は自動
// ✅ 初回フェッチも自動
// ✅ cache, dedupe も自動
```

query 関数は引数を取らない

Pinia Colada が
「必要なときに自動的にトリガー」

開発者は「何を」フェッチするかだけを宣言
「いつ」フェッチするかは Pinia Colada が判断

---

## 型

```ts
const { data } = useQuery({
  key: ["users"],
  query: () => $fetch("/api/users"),
});

// ShallowRef<SerializeObject<User>[] | undefined>
console.log(data);
```

---

## `useQuery()`

```vue
<script setup lang="ts">
const { state, asyncStatus, refresh } = useQuery({
  key: () => ["users"],
  query: () => $fetch("/api/users"),
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

query は引数を取らない
宣言的に記述できる

---

## `useMutation()`

```vue
<script setup lang="ts">
const { mutate: createTodo, status } = useMutation({
  mutation: (newTodo: { title: string }) => {
    $fetch("/api/todos", { method: "POST", body: newTodo });
  },
});
</script>

<template>
  <button
    @click="createTodo({ title: '新しいタスク' })"
    :disabled="status === 'pending'"
  >
    {{ status === "pending" ? "作成中..." : "タスク作成" }}
  </button>
</template>
```

mutate は引数を取る

---

## Query と Mutation の連携

Mutation でデータを変更✨

Query のキャッシュを無効化🏷️

---

## Pinia を Cache に使用

内部でキャッシュ管理に
Pinia ストアを使用

---

## キャッシュストアの構造

![DevTools - _pc_query](/devtools-pc-query.png)

\_pc_query

---

## Query Invalidation

```ts
const queryCache = useQueryCache();

const { state } = useQuery({ key: ["todos"], query: () => $("/api/todos") });

const { mutate } = useMutation({
  mutation: (text: string) =>
    $fetch("/api/todos", {
      method: "POST",
      body: { text },
    }),
  onSettled: () => {
    queryCache.invalidateQueries({ key: ["todos"] });
  },
});
```

query cache の無効化(onSettled)
新しいデータを取得

---

## Hooks

Mutation のライフサイクル

---

## Mutation Hooks

- `onMutate` - リクエスト送信直前
- `onSuccess` - リクエスト成功時
- `onError` - リクエスト失敗時
- `onSettled` - 成功・失敗に関わらず実行

---

## Hooks で実現できること

- クエリの無効化
- 楽観的更新（Optimistic Updates）
- エラー時のロールバック
- コンテキストの受け渡し

---

## Query Invalidation

```ts
// key: ["todos"] を指定すると
// その key とその子のクエリが無効化される

// exact: true を付けると
// 指定した key のクエリだけ無効化される

// 引数なしで呼ぶと
// すべてのアクティブなクエリが無効化される
```

データ更新後、関連するクエリを無効化

---

## `useQuery()` の 2 つの重要なこと

```ts
const { state, asyncStatus } = useQuery({
  key: ["todos"],
  query: () => $fetch("/api/todos"),
});
```

- `key`: キャッシュの識別子(配列による階層構造)
- `query`: Promise を返す関数

---

## Query Key の設計が重要

- **配列形式**で構造化されたキー
- **階層的な設計**でキャッシュを柔軟に管理
- **リアクティブな key** は関数で定義

```ts
// 静的な key
key: ["products"];

// 動的な key(関数形式)
key: () => ["products", route.params.id];
key: () => ["products", route.params.id, { searchResult: true }];
```

---

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

## Query Keys の重要性

Query Keys はクエリを
一意に識別するための**配列**

---

## キャッシュ管理の基盤

同じ key を持つクエリは同じキャッシュを共有

key が異なれば別々にキャッシュされる

---

## 階層的な構造

`["todos"], ["todos", id], ...`

親 key で子も含めて一括無効化が可能

---

## 適切な無効化

Mutation 後に関連するクエリを効率的に更新

部分的な無効化で必要なデータだけ再取得

---

## Key 設計の例

```ts
// 基本: 単純なリスト取得
const { data } = useQuery({
  key: ["todos"],
  query: () => $fetch("/api/todos"),
});

// 階層: ID を含むクエリ
const { data } = useQuery({
  key: () => ["todos", todoId],
  query: () => $fetch(`/api/todos/${todoId}`),
});

// ["todos"] で無効化すると、
// すべての todos 関連のクエリが無効化される

// 階層: さらに詳細な条件
const { data } = useQuery({
  key: () => ["todos", todoId, { withComments: true }],
  query: () => $fetch(`/api/todos/${todoId}?comments=true`),
});

// ["todos"] で無効化 → すべての todos
// ["todos", todoId] で無効化 → 特定の todo だけ
// ["todos", todoId, {}] で無効化 → 特定の todo のすべての条件
```

---

## 型安全なキー設計

```ts
// Before: 文字列キーの問題
const { data } = useQuery({
  key: () => ["users", userId], // typo の可能性
  query: () => fetchUser(userId),
});

// 別の場所で同じキーを使おうとすると...
cache.invalidateQueries({ key: ["user", userId] }); // ❌ typo

// After: defineQueryOptions で型安全に
const userQuery = defineQueryOptions((id: string) => ({
  key: ["users", id],
  query: () => fetchUser(id),
}));

// 使用時は型付きのキーが自動生成される
const { data } = useQuery(userQuery(userId));

// キャッシュ操作も型安全
cache.invalidateQueries(userQuery(userId));
```

---
layout: center
class: text-9xl
---

key 設計

---
layout: center
class: text-9xl
---

って

---
layout: center
class: text-9xl
---

また文字列？

---

## Key Factory パターン

Query Key を一元管理する
型安全なパターン

---

## Key Factory の実装例

```ts
export const TODO_KEYS = {
  root: ["todos"] as const,
  withFilters: (filters?: TodoFilters) => [...TODO_KEYS.root, filters] as const,
  byId: (id: string) => [...TODO_KEYS.root, id] as const,
  comments: (id: string) => [...TODO_KEYS.byId(id), "comments"] as const,
};
```

---

## Key Factory の使用例

```ts
// Before: 文字列ベース
const { data } = useQuery({
  key: ["todos"], // typo の可能性
  query: () => fetchTodos(),
});

// After: Key Factory
import { TODO_KEYS } from "~/queries/key-factory";

const { data } = useQuery({
  key: TODO_KEYS.root, // 型安全！
  query: () => fetchTodos(),
});

// 無効化も簡単
const queryCache = useQueryCache();

// すべての todos を無効化
queryCache.invalidateQueries({ key: TODO_KEYS.root });

// 特定の todo だけ無効化
queryCache.invalidateQueries({ key: TODO_KEYS.byId(todoId) });
```

---
layout: center
class: text-7xl
---

query の設定も共有

---

## defineQueryOptions

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

## defineQueryOptions の使用例

```ts
// Before: 毎回 key と query を書く
const { state } = useQuery({
  key: ["todos", todoId],
  query: () => $fetch(`/api/todos/${todoId}`),
});

// Cache に手動で型を指定
const queryCache = useQueryCache();
const todo = queryCache.getQueryData<Todo>(["todos", todoId]);

// After: 再利用可能な定義
import { todoByIdQuery } from "~/queries/todos";

const { state } = useQuery(todoByIdQuery, todoId);

// Cache の型が推論される
const queryCache = useQueryCache();
const todo = queryCache.getQueryData(todoByIdQuery(todoId).key);
```

---

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

## 実装パターン比較

プロジェクト規模に応じた
3 つの実装パターン

---

## ① 直書き（インライン）

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
  query: () => $fetch(`/api/teams/${route.params.id}/users`),
});
</script>
```

**特徴**: 最少コードだが、キー・取得ロジックが画面に分散しやすい

---

## ② Key Factory 単独

```ts
// queries/key-factory.ts
export const TEAM_KEYS = {
  root: ["teams"] as const,
  byId: (id: string) => [...TEAM_KEYS.root, id] as const,
  users: (id: string) => [...TEAM_KEYS.byId(id), "users"] as const,
};
```

---

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
  query: () => $fetch(`/api/teams/${route.params.id}/users`),
});
</script>
```

**特徴**: キー形状を一元化でき、キャッシュ整合性が向上。取得ロジックは画面に残る

---

## ③ Key Factory × defineQueryOptions

```ts
// queries/key-factory.ts
export const TEAM_KEYS = {
  root: ["teams"] as const,
  byId: (id: string) => [...TEAM_KEYS.root, id] as const,
  users: (id: string) => [...TEAM_KEYS.byId(id), "users"] as const,
};

// queries/team.ts
import { defineQueryOptions } from "@pinia/colada";
import { TEAM_KEYS } from "./key-factory";

export const teamByIdQuery = defineQueryOptions((teamId: string) => ({
  key: TEAM_KEYS.byId(teamId),
  query: () => $fetch(`/api/teams/${teamId}`),
}));

export const teamUsersQuery = defineQueryOptions((teamId: string) => ({
  key: TEAM_KEYS.users(teamId),
  query: () => $fetch(`/api/teams/${teamId}/users`),
}));
```

---

```vue
<!-- pages/teams/[id].vue -->
<script setup lang="ts">
import { teamByIdQuery, teamUsersQuery } from "~/queries/team";

const route = useRoute();

const team = useQuery(teamByIdQuery, route.params.id);
const members = useQuery(teamUsersQuery, route.params.id);
</script>
```

**特徴**: キー整合性（Factory）とパラメータ契約・取得ロジック（defineQueryOptions）を集約

---

## 3つのパターンの比較

| 構成                                 | キー整合性 | パラメータ共有 | 変更耐性 | 規模   |
| :----------------------------------- | :--------- | :------------- | :------- | :----- |
| 直書き                               | 低         | 低             | 低       | 小     |
| Key Factory 単独                     | 中         | 中             | 中       | 中     |
| **Key Factory × defineQueryOptions** | **高**     | **高**         | **高**   | **大** |

Scalable & Progressive

気軽にも書けるし
ガチガチにも書ける

---

## Pinia Colada を使用すると

デメリットなく
クエリとコンポーネントを
近くにかける

---
layout: center
class: text-7xl
---

じゃあどうやって決めるか

---

## 公式ドキュメントに書いてある

"As your project grows" and you start using more and more queries as well as concepts as Optimistic Updates, you will want to organize your queries.

プロジェクトが成長したら整理しよう

https://pinia-colada.esm.dev/guide/queries.html#Organizing-Queries

---

## defineQueryOptions で prefetch

```ts
// クエリ定義を再利用可能に
const userListQuery = defineQueryOptions({
  key: ["users"],
  query: () => $fetch("/api/users"),
});

// use
const { data, status } = useQuery(userListQuery);

// prefetch (`cache.ensure()`)
const queryCache = useQueryCache();
await queryCache.refresh(queryCache.ensure(userListQuery));
```

---
layout: center
class: text-6xl
---

Pinia Colada で DX 向上

---

## Pinia Colada のここが好き

いい感じにクエリとコンポーネントを近くに書ける

---
layout: center
class: text-9xl
---

⁉️

---
layout: center
---

![posva 天才](/genius-posva.png)

---

## Nuxt Typed Router + Pinia Colada

型安全なデータフローの完成

---

## IDE とのシームレスな統合

ルート名の自動補完 + データ状態の推論

リファクタリング時の安全性

AI 時代

---

## データフェッチとナビゲーションの課題

コンポーネント内でのデータフェッチ

---
layout: center
class: text-5xl
---

ナビゲーションガードでのプリフェッチ

---
layout: center
class: text-5xl
---

カスケードフェッチ：依存クエリ

---
layout: center
class: text-3xl
---

カスケードフェッチ：コンポーネントネスト

---

## unplugin-vue-router の Data Loaders

次世代の
データフェッチング手法

---
layout: center
class: text-5xl
---

unplugin-vue-router の Data Loaders

---

![posva's last year vue fes japan](/posva-last-year.png)

---

https://youtu.be/lhjS-6FIxgk

---
layout: center
class: text-7xl
---

ありがとうございました
