---
theme: default
transition: slide-left
---

# Vue を仕事で書くようになりました

---

<script setup>
import { useQRCode } from '@vueuse/integrations/useQRCode'

const text = 'https://naitokosuke.github.io/20250913-talk/'
const qrcode = useQRCode(text)
</script>

<div class="flex flex-col items-center justify-center h-full">
  <img :src="qrcode" alt="QR Code" class="w-96 h-96 mb-8" />
  <p class="text-2xl text-gray-600">{{ text }}</p>
</div>

---
layout: center
class: text-9xl
---

1 周年

<script setup>
import { onMounted } from 'vue'
import { onSlideEnter } from '@slidev/client'
import confetti from 'canvas-confetti'

onSlideEnter(() => {
  const duration = 5 * 1000
  const animationEnd = Date.now() + duration
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now()

    if (timeLeft <= 0) {
      return clearInterval(interval)
    }

    const particleCount = 50 * (timeLeft / duration)
    
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
    })
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
    })
  }, 250)
})
</script>

---
layout: center
class: text-9xl
transition: zoom
---

ごめんなさい

---
layout: center
class: text-6xl
transition: zoom
---

準備の時間が取れませんでした

---
layout: center
class: text-9xl
---

どうしよう

---
layout: center
class: text-9xl
---

どうしよう

---
layout: center
class: text-9xl
transition: zoom
---

どうしよう

---
layout: center
transition: zoom
---

---
layout: center
class: text-8xl
transition: zoom
---

発表練習なしで

---
layout: center
class: text-8xl
transition: zoom
---

時間管理なしで

---
layout: center
class: text-8xl
---

構成管理なしで

---
layout: center
class: text-9xl
---

大丈夫なやつ

---
layout: center
class: text-9xl
transition: zoom
---

...

---
layout: center
class: text-9xl
transition: zoom
---

💡

---
layout: center
class: text-6xl
transition: zoom
---

入社して半年

---
layout: center
class: text-6xl
transition: zoom
---

山ほどレビューもらった

---
layout: center
class: text-9xl
transition: zoom
---

山ほど

---
layout: center
class: text-6xl
transition: zoom
---

レビューしてもらったことを

---
layout: center
class: text-7xl
transition: zoom
---

発表中に振り返ろう！

---
layout: center
class: text-9xl
transition: zoom
---

🥴

---
layout: center
class: text-8xl
---

やった回

---
layout: center
class: text-8xl
---

やらかし

---
layout: center
class: text-8xl
---

何回かやりました

---
layout: center
class: text-4xl
---

- `v-if` (`if` 文) に Falsy を入れてバグらせる
- タイムゾーンと `new Date();` でやらかす

<!--
タイムゾーンやらかし発覚経緯が面白い
先輩社員 (not 王) の方が現在アメリカにいらっしゃる
海外告知していないサービスだけど
時差が 14h って言っていたな
タイムゾーンはどこだろう
ちょっと試してみよう！
-->

---
layout: center
class: text-7xl
---

🥳

---
layout: center
class: text-7xl
---

AI と一緒に頑張った

---
layout: center
class: text-4xl
---

- デザインシステムで breakpoint の名前を提案した
  (デバイス種に寄せるかサイズに寄せるか)
- AWS Cognito を使用した認証フローの実装
- 初非同期状態管理設計
- 250 ファイルくらいの rename 対応

---
layout: center
class: text-6xl
---

😶‍🌫️

---
layout: center
class: text-6xl
---

挑戦したけどできなかったこと

---
layout: center
class: text-4xl
---

- breadcrumbs を `pages/` からいい感じに作るやつ

<!--
ページ名が一意に定まらないことが多くて断念
-->

---
layout: center
class: text-8xl
---

👑

---
layout: center
---

王であって神ではない

---
layout: center
class: text-4xl
---

- 理解できてないことはないけど
- 知らないことはある
- 信奉するのではなく尊敬する

<!--
- Vue Router の `.active` クラスと `.router-link-exact-active` の 2 種類あった
-->

---
layout: center
class: text-9xl
---

？

---
layout: center
class: text-9xl
---

というわけで

---
layout: center
class: text-7xl
---

指摘事項の振り返り！

---
layout: two-cols
class: text-sm
---

- 凝集度を意識しよう
- import 文の順番を気をつけよう
- `computed()` の型は `ComputedRef<T>` (`Ref<T>` ではない)
- 凝集度を意識しよう
- (`switch` が文なのが気に食わないけど)IIFE でいい感じに書ける
- MVVM における VM のレイヤーにある必要がないロジックは分離しよう(ベタ書きしたくない)
  - (ステートレス v.s. ステートフル)
- 安定ソート v.s. 不安定ソート
- Vitest の in-source testing がいいよ
- msw を使っているから mock を書こう
- 微妙だけど今よりマシだからマージします
- 凝集度を意識しよう
- `<script>` で使ってない時に `defineProps();` を変数に受けるかどうか
- 仕様を盲信しないように
- ADR を書こう
- 実装の詳細にフォーカスしたテストを書かない
- テストデータで IIFE を使用しよう

::right::

- feature にナビゲーションの処理を書くのはやめよう(page から渡そう)
- 未実装なら思いっきり未実装にしておこう
  - 変にそれっぽい見た目にしとくと確認が漏れる
- プロパティを読むだけの `computed()` はキリがないのでやめよう
- fragment colocation しよう
- 凝集度を意識しよう
- 三項演算子を使った方がいい時もある(意味的に)
- issue を分割しよう
- pending の範囲を限りなく小さくしよう
- state の lifecycle を意識しよう
- 凝集度を意識しよう
- store は言ってしまえばグローバル変数、可能な限りシンプルに
- `TODO: ` コメントには対応 issue のリンクも記載しよう
- docs にサンプルコード載せすぎるとコード変更時に追従するの大変
- 気が利く
- `fooFilter()` 中で sort しない
- `reduce()` を使おう

---
layout: center
class: text-9xl
---

🥲

---
layout: two-cols
class: text-sm
---

- `chat.sync()`, `chat.stream()` -> `chat`, `chat.stream()`
- 子に props 経由で handler を渡さずに emit しよう
- プリミティブトークン < セマンティックトークン
- `Ref<boolean>` を 5 つ並べると 2^5 通りの状態
- `reduce()` を使おう
- `null` を渡すよりも `[]` を渡そう
- `script setup` と `script` を使い分けよう
- `foo.name` しか使わないなら `Pick` を使おう
- schema の型を直接 import しない
- sentry の mask 気をつけて
- `script setup` 内でも純粋な関数と状態の場所を分けよう
- 一時的な対応ならコードの側にもそれを記載しよう

::right::

- `if (true) return true;` はもっと簡単に書けます
- `computed()` 内の `return` を省略しよう
- `setTimeout()` の ID は `ref` じゃなくて `let` でいい
- この `ref()` って本当に必要ですか？
- 一貫性がないように思えました
- DOM の実装に任せるのか、こっちが持った関数やステートによって制御するのか

---
layout: center
class: text-8xl
---

これだけあれば

---
layout: center
class: text-8xl
---

足りるでしょう

---
layout: center
class: text-9xl
---

👉

---

## switch は文なので IIFE で式にする

<div class="grid grid-cols-2 gap-4">
<div>

### ❌ switch は文（statement）

```javascript
// これはできない
const result = switch (props.foo) {
  case "FOO": "FOOFOO";
  case "BAR": "BARBAR";
}
```

</div>
<div>

### ✅ IIFE で解決

```javascript
// 関数でラップして即実行
const result = (() => {
  switch (props.foo) {
    case "FOO":
      return "FOOFOO";
    case "BAR":
      return "BARBAR";
  }
})();
```

</div>
</div>

<div class="mt-4 text-sm opacity-80">

Rust の `match` や Kotlin の `when`

</div>

---

## `<script>` で使ってない時に `defineProps();` を変数に受けるかどうか

分割代入できるようになったのはかなり最近

````md magic-move
```vue
<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<template>
  <p>{{ msg }}</p>
</template>
```

```vue
<script setup lang="ts">
const props = defineProps<{ msg: string }>();
</script>

<template>
  <p>{{ props.msg }}</p>
</template>
```

```vue
<script setup lang="ts">
const { msg } = defineProps<{ msg: string }>();
</script>

<template>
  <p>{{ msg }}</p>
</template>
```
````

---

## Fragment Colocation

GraphQL のクエリをコンポーネントと同じ場所に配置する

<div class="grid grid-cols-2 gap-4">
<div>

### ❌ クエリを別ファイルで管理

```
src/
├── components/
│   └── UserCard.vue
└── graphql/
    └── queries/
        └── user.ts
```

クエリとコンポーネントが離れている

</div>
<div>

### ✅ コンポーネントと同じ場所に

```vue
<script setup lang="ts">
graphql(`
  fragment UserCard on User {
    id
    name
    avatar
  }
`);
// with GraphQL Codegen
const { user } = defineProps<{
  user: UserCardFragment;
}>();
</script>
```

使くていいね🥳

</div>
</div>

<!--
コンポーネントが必要とするデータが明確・変更時の影響範囲が限定的
GraphQL Codegen と一緒に使用すると props の型もいい感じ
-->

---

## State の Lifecycle を意識しよう

状態を個別の変数ではなく、ライフサイクルを表現する型で管理

````md magic-move
```ts
// ❌
// どの組み合わせが有効？
// いつどの値が必要？
const email = ref("");
const username = ref("");
const name = ref("");
const isConfirming = ref(false);
```

```ts
// ✅
type SignupState =
  | { step: "signup" }
  | { step: "confirm"; username: string; email: string }
  | { step: "complete"; userId: string };

const state = ref<SignupState>({
  step: "signup",
});
```
````

<!--
ビジネスロジックが型で明確・不正な状態遷移を防げる・各ステップで必要なデータが明確
-->

---

## `setTimeout()` の ID は `ref` じゃなくて `let` でいい

- 状態とは何か
- reactive とは何か
- `let` で十分

````md magic-move
```vue
<script setup lang="ts">
import { ref } from "vue";

const timerId = ref<number | null>(null); // ❌ 監視不要

function start() {
  timerId.value = setTimeout(() => {
    console.log("done");
  }, 1000);
}

function clear() {
  if (timerId.value !== null) {
    clearTimeout(timerId.value);
  }
}
</script>
```

```vue
<script setup lang="ts">
let timerId: ReturnType<typeof setTimeout> | null = null; // ✅ ただの変数

function start() {
  timerId = setTimeout(() => {
    console.log("done");
  }, 1000);
}

function clear() {
  if (timerId !== null) {
    clearTimeout(timerId);
  }
}
</script>
```
````

---

## 凝集度を意識しよう

凝集しているといいよね☺️

````md magic-move
```ts
// ❌
function useFoo(hooks?: {
  onFooSuccess?: () => void;
  onFooError?: () => void;
  onBarSuccess?: () => void;
  onBarError?: () => void;
}) {
  // ...
}
```

```ts
// ✅
function useFoo(hooks?: {
  bar?: {
    onSuccess?: () => void;
    onError?: () => void;
  };
  baz?: {
    onSuccess?: () => void;
    onError?: () => void;
  };
}) {
  // ...
}
```
````

---

## 三項演算子を使った方がいい時もある(意味的に)

<br />

- 値を条件で決める場合(式)
- 二択の値のを決めたいだけの場合

````md magic-move
```ts
let label: string;
if (isActive) {
  label = "有効";
} else {
  label = "無効";
}
```

```ts
const label = isActive ? "有効" : "無効";
```
````

---

## `null` を渡すよりも `[]` を渡そう

<br />

```ts
// `null` を渡す
function doSomething(items: string[] | null) {
  if (items === null) return; // null チェックが必要
  items.forEach((item) => doSomethingElse(item));
}

// `[]` を渡す
function doSomething(items: string[]) {
  // そのまま使える
  items.forEach((item) => doSomethingElse(item));
}
```

---

## `foo.name` しか使わないなら `Pick` を使おう

<div class="grid grid-cols-2 gap-4 mt-10">
<div>

### ❌ 全体の型を要求

```ts {monaco}
interface User {
  id: string;
  name: string;
  email: string;
}

// name しか使わないのに全部渡すと?
function greetUser(user: User) {
  return `Hello, ${user.name}!`;
}

// テスト時に全プロパティが必要
greetUser({
  id: "1",
  name: "Alice",
  email: "alice@example.com",
});
```

</div>
<div>

### ✅ Pick で必要な部分だけ

```ts {monaco}
interface User {
  id: string;
  name: string;
  email: string;
}

// 必要なのは `name` のみ
function greetUser(user: Pick<User, "name">) {
  return `Hello, ${user.name}!`;
}

// テストが簡単
greetUser({ name: "Alice" });
```

</div>
</div>

---

## schema の型を直接 import しない

<br />

- graphql codegen を使用
- entity を定義してフロントエンド専用の型を定義する
- ACL をかませる

---

## `computed()` の型は `ComputedRef<T>` (not `Ref<T>`)

<br />

- `ComputedRef<T>` は `Ref<T>` のサブタイプ
- `ComputedRef<T>` の方がより狭い
- 特に意味もなく緩い型をしない
- 型安全でなくなるし
- 混乱の原因

---

## MVVM における VM のレイヤーにある必要がないロジックを分離しよう

````md magic-move
```vue
<script setup lang="ts">
const priceWithTax = computed(() => Math.round(price.value * (1 + taxRate)));
</script>
```

```vue
<script setup lang="ts">
export const priceWithTax = (price: number, taxRate: number = 0.1) =>
  Math.round(price * (1 + taxRate));

const computedPrice = computed(() => priceWithTax(price.value));
</script>
```
````

---

## 安定ソート v.s. 不安定ソート

<br />

「安定なのか不安定なのかを意識しましたか？」

### 安定ソート

同じ値（キー）の要素の相対的な順序を保持
→同じキー同士の並びは崩さない

### 不安定ソート

同じ値（キー）の要素の相対的な順序が保持される保証がない
→ 結果的に順序が変わることもある

<!--
UI ではとても重要
メリデメ
-->

---

## Vitest の in-source testing がいいよ

実装とテストが近くていいね☺️

```ts
export function add(a: number, b: number) {
  return a + b;
}
export function multiply(a: number, b: number) {
  return a * b;
}

if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest;

describe("math utils", () => {
  it("adds two numbers and returns their sum", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("multiplies two numbers and returns their product", () => {
    expect(multiply(2, 3)).toBe(6);
  });
});
```

---

## MSW を使用して mock を書こう

- MSW は fetch を横取りしてモックレスポンス
- 開発時は Service Worker、テスト時は setupServer で同じハンドラ

````md magic-move
```ts
// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/foo", () => {
    return HttpResponse.json({
      id: "123",
      name: "bar",
    });
  }),
  // ...
];
```

```ts
// src/mocks/browser.ts
import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);
```

```ts
const res = await fetch("/user");
const data = await res.json();
console.log(data); // { id: "123", name: "Alice" }
```
````

---

## 今よりマシだからマージします

<br />

- ぼく「この辺はちょっとアレなんですけど、、、」
- 「改善はされているのでマージします」
- ぼく「(あ、いいんだ)」

---

## 仕様を盲信しないように

<br />

- 疑問があったらすぐに確認しましょう
- Figma の運用を一時的な中間成果物としている

---

## ADR を書こう

<br />

- ADR
- Architecture Design Record
- 意思決定をドキュメント化しよう
- VitePress だったり docstring だったり

---

## 実装の詳細にフォーカスしたテストを書かない

<br />

```ts
export function sortNumbers(arr: number[]): number[] {
  return arr.toSorted((a, b) => a - b);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  // ❌ 実装の書き方に依存
  it("BAD: assumes implementation uses comparator (a - b)", () => {
    // 内部で a - b を使うことを前提にしている
    // 実装を localeCompare に変えたり、別アルゴリズムにしても落ちる可能性あり
    const arr = [3, 1, 2];
    const result = sortNumbers(arr);
    // 「比較関数が a-b であること」を前提にした過剰なチェック
    expect(result.join(",")).toBe("1,2,3"); // これは結果のみに見えるが、
    // テスト名が「内部実装」を縛っている
  });

  // ✅ 外から見える振る舞い（仕様）のみを検証
  it("returns numbers sorted in ascending order", () => {
    expect(sortNumbers([3, 1, 2])).toEqual([1, 2, 3]);
    expect(sortNumbers([])).toEqual([]);
  });
}
```

---

## テストデータは変数じゃなくて関数にしておこう

````md magic-move
```ts
// ❌
const users = [
  { id: 123, name: "foo" },
  { id: 321, name: "bar" },
  { id: 231, name: "baz" },
];

it("case A: mutates data", () => {
  users.popAndDoSomething();
  expect(users.length).toBe(2);
});
it("case B: expects original length", () => {
  expect(users.length).toBe(3);
});
```

```ts
// ✅
const users = () => [
  { id: 123, name: "foo" },
  { id: 321, name: "bar" },
  { id: 231, name: "baz" },
];

it("case A: mutates local copy", () => {
  const data = users();
  data.popAndDoSomething();
  expect(data.length).toBe(2);
});
it("case B: unaffected by A", () => {
  const data = users();
  expect(data.length).toBe(3);
});
```
````

- テスト間で共有すると副作用が波及してしまう可能性
- 関数(ファクトリ？ビルダ？)にしておくと独立したテストが保障される

---

## 未実装なら思いっきり未実装にしておこう

<br />

- 変にそれっぽい見た目にしておくと確認が漏れる
- TODO: コメントには issue のリンクも含めておく

---

## issue を分割しよう

- これができてない
- 難しい

---

## pending の範囲を意識しよう

<br />

- ぼく「ここだけ PM 回答待ちなのでそれ次第でレビュー出します」
- 「じゃあその pending の部分だけ issue 切り出しましょう」
- ぼく「はぇ」

---
dragPos:
  pinia: 0,-10,0,0
---

## store は言ってしまえばグローバル変数、可能な限りシンプルに

<br />

- アプリ全体で共有する必要がある状態
- その状態を変更する最小の手続き
- "God Store" を作らない

<img v-drag="'pinia'" class="i-logos-pinia text-3xl" />

---

## ドキュメントの内容が実装の詳細を書きすぎている

<br />

- 仕様変更、リファクタリングで乖離し始めることになる
- 二重管理状態

---

## `fooFilter()` の中で sort しない

<br />

````md magic-move
```ts
// ❌
function fooFilter<T>(arr: T[]): T[] {
  return arr
    .filter((x) => Boolean(x))
    .sort((a, b) => String(a).localeCompare(String(b))); // ← filter のついでに sort
}
```

```ts
// ✅
function fooFilter<T>(arr: T[]): T[] {
  return arr.filter((x) => Boolean(x));
}
function barSort<T>(arr: T[], compareFn?: (a: T, b: T) => number): T[] {
  return [...arr].sort(compareFn);
}
```
````

---

## `reduce()` を使用しよう

<br />

- `reduce()` を手でかけません泣
- ムズすぎる
- `map()` とか `for` 文ばかり書いてしまう

---
class: text-7xl
---

## `if (true) return true;` はもっと簡単に書けます

<br />

- 二度と指摘されない

---

## プリミティブトークンよりもセマンティックトークン

<br />

### プリミティブトークン

- 具体値を直接表す（例: `--color-blue-500`, `--spacing-8`）
- 値の由来はわかるが、用途が伝わらない

### セマンティックトークン

- 意味や用途に基づく（例: `--color-primary`, `--spacing-card-padding`）
- デザイン意図や役割がコードから読み取れる
- 値を変更しても UI 意味は崩れない

---

## `script setup` と `script` を使い分けよう

```vue
<script lang="ts">
export function greet(name: string) {
  return `Hello, ${name}!`;
}
</script>

<script setup lang="ts">
const props = defineProps<{ name: string }>();
const message = greet(props.name);
</script>

<template>
  <p>{{ message }}</p>
</template>
```

- `<script setup>` は SFC コンパイラが内部で `setup()` に変換する特殊な構文
- `export` できない
- `<script>` からなら可能
- 凝集度高

---

## `chat.sync()`, `chat.stream()` -> `chat`, `chat.stream()` にしよう

レトロニムになってしまっていた

````md magic-move
```ts
// `chat.sync()`, `chat.stream()`
export interface Repo {
  chat: {
    sync(contexts: Context[]): Promise<string>;
    stream(contexts: Context[]): AsyncIterable<ChatStreamEvent>;
  };
}
```

```ts
// `chat`, `chat.stream()`
export interface Repo {
  chat: (contexts: Context[]) => Promise<string> & {
    stream: (contexts: Context[]) => AsyncIterable<ChatStreamEvent>;
  };
}
```

```ts
const repo = (): Repo => {
  return {
    chat: (() => {
      const fn = async (contexts: Context[]) => {
        // ...
      };
      fn.stream = (contexts: Context[]) => {
        /** ... */
      };
      return fn;
    })(),
  };
};
```
````

---

## 「気が利く」

---

## feature にナビゲーションの処理を書かない

<br />

- 「feature は feature なのでページの事情は知らない」

---

## プロパティを読むだけの `computed()` はキリがないのでやめよう

```ts
const user = ref({ id: 123, name: foo });
const username = computed(() => user.value.name);
```

使うならビジネスロジックや文字通り『計算』が絡む時で

---
layout: center
class: text-9xl
---

Thank you
