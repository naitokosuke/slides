# Vize に起票した issue と PR

`ubugeeei-prod/vize` で author が naitokosuke のもの（2026-10-26 時点）。
`gh search issues --author naitokosuke --repo ubugeeei-prod/vize` と `gh search prs` で取得した。
issue 30 件はすべて closed（stateReason は COMPLETED）、PR 3 件はすべて merged。

## issue

| #                                                            | 起票日     | 領域              | タイトル                                                                                  | 修正 PR      |
| ------------------------------------------------------------ | ---------- | ----------------- | ----------------------------------------------------------------------------------------- | ------------ |
| [#1563](https://github.com/ubugeeei-prod/vize/issues/1563)   | 2026-06-12 | LSP               | Recoverable HTML parse repairs suppress all dependent diagnostics in the LSP              | #1566        |
| [#1837](https://github.com/ubugeeei-prod/vize/issues/1837)   | 2026-06-17 | vscode-vize       | nested `<template>` closes the root template block early                                  | #1839        |
| [#2010](https://github.com/ubugeeei-prod/vize/issues/2010)   | 2026-06-19 | LSP (canon)       | virtual `*.vue.ts` files are materialized into the source tree when the path contains `=` | #2019        |
| [#5966](https://github.com/ubugeeei-prod/vize/issues/5966)   | 2026-09-09 | Patina            | detect KeepAlive/Transition whose direct child isn't a component                          | #5968        |
| [#6234](https://github.com/ubugeeei-prod/vize/issues/6234)   | 2026-09-18 | Patina            | extend no-required-prop-with-default to `<script setup>` TS props                         | #6244        |
| [#6684](https://github.com/ubugeeei-prod/vize/issues/6684)   | 2026-09-25 | @vizejs/nuxt      | Nuxt 4 production build splits Vue across two instances (NUXT_E1001)                      | #6687        |
| [#6766](https://github.com/ubugeeei-prod/vize/issues/6766)   | 2026-09-26 | SFC (CSS)         | `v-bind()` with a non-identifier expression emits a malformed custom property             | #6769        |
| [#6767](https://github.com/ubugeeei-prod/vize/issues/6767)   | 2026-09-26 | SSR               | `[object object]` emitted as an attribute name on SSR component roots                     | #6768        |
| [#6897](https://github.com/ubugeeei-prod/vize/issues/6897)   | 2026-09-26 | @vizejs/nuxt      | Nuxt SSR critical CSS is never inlined or linked                                          | #6904        |
| [#6898](https://github.com/ubugeeei-prod/vize/issues/6898)   | 2026-09-26 | SSR               | slotted scope id emitted even when the parent has no `:slotted()`                         | —            |
| [#7273](https://github.com/ubugeeei-prod/vize/issues/7273)   | 2026-09-30 | lint (cross-file) | attrs passed to a component whose root can't receive fallthrough attrs                    | #7276, #7281 |
| [#7377](https://github.com/ubugeeei-prod/vize/issues/7377)   | 2026-10-01 | Patina            | add type/strict-boolean-expressions                                                       | #7403        |
| [#7417](https://github.com/ubugeeei-prod/vize/issues/7417)   | 2026-10-02 | lint              | prefer-props-shorthand misses native elements                                             | #7419        |
| [#7816](https://github.com/ubugeeei-prod/vize/issues/7816)   | 2026-10-04 | ecosystem         | vue-router-route-param reads `[param=parser]` as the param name                           | #7833        |
| [#7817](https://github.com/ubugeeei-prod/vize/issues/7817)   | 2026-10-04 | ecosystem         | type an argument-less `useRoute()` like `sfc-typed-router`                                | #7845        |
| [#8752](https://github.com/ubugeeei-prod/vize/issues/8752)   | 2026-10-12 | lint (type)       | object literal argument in `v-if` reported as `any`                                       | —            |
| [#8753](https://github.com/ubugeeei-prod/vize/issues/8753)   | 2026-10-12 | lint (type)       | bound attribute starting on a new line reported as `any`                                  | —            |
| [#8754](https://github.com/ubugeeei-prod/vize/issues/8754)   | 2026-10-12 | lint (type)       | multi-line ternary with an object literal reported as `any`                               | —            |
| [#8755](https://github.com/ubugeeei-prod/vize/issues/8755)   | 2026-10-12 | lint (type)       | `<RouterView v-slot="{ Component }">` reported as `any`                                   | —            |
| [#8756](https://github.com/ubugeeei-prod/vize/issues/8756)   | 2026-10-12 | lint (type)       | no-reactivity-loss false positive inside `computed()`                                     | —            |
| [#9180](https://github.com/ubugeeei-prod/vize/issues/9180)   | 2026-10-15 | atelier (Vapor)   | Vapor dev HMR re-render calls render with an undefined `_ctx`                             | —            |
| [#9747](https://github.com/ubugeeei-prod/vize/issues/9747)   | 2026-10-19 | lint (type)       | nested `v-if` / `v-else-if` leftover of #8752                                             | #9769        |
| [#9748](https://github.com/ubugeeei-prod/vize/issues/9748)   | 2026-10-19 | lint (ssr)        | handler parameter named `open` reported as the browser global                             | #9761        |
| [#9749](https://github.com/ubugeeei-prod/vize/issues/9749)   | 2026-10-19 | lint (a11y)       | placeholder-label-option flags a non-`required` `<select>`                                | #9766        |
| [#9750](https://github.com/ubugeeei-prod/vize/issues/9750)   | 2026-10-19 | lint (a11y)       | combobox exemption misses bound ids and `role="option"`                                   | #9770        |
| [#9751](https://github.com/ubugeeei-prod/vize/issues/9751)   | 2026-10-19 | lint (a11y)       | form control with `hidden` asked for a label                                              | #9759        |
| [#9752](https://github.com/ubugeeei-prod/vize/issues/9752)   | 2026-10-19 | Musea             | arrow function in an attribute breaks a `<style scoped>` art variant                      | #9762        |
| [#10659](https://github.com/ubugeeei-prod/vize/issues/10659) | 2026-10-25 | vite-plugin       | relative `@import` in `<style>` fails `vite build` since 0.516.0                          | #10665       |
| [#10660](https://github.com/ubugeeei-prod/vize/issues/10660) | 2026-10-25 | content-mapper    | narrowed `v-if` guard re-emitted in a `v-else` slot host (TS2367)                         | #10664       |
| [#10661](https://github.com/ubugeeei-prod/vize/issues/10661) | 2026-10-25 | content-mapper    | prop named `from` bound as `_from` but read as `from` (TS2552)                            | #10666       |

「修正 PR」は GitHub の closedByPullRequestsReferences にあるもの。
「—」は参照がないだけで、コミット側で閉じられた可能性がある。
発表前に各 issue のタイムラインで確認する。

## PR

| #                                                        | 作成日     | タイトル                                                          | 状態   |
| -------------------------------------------------------- | ---------- | ----------------------------------------------------------------- | ------ |
| [#38](https://github.com/ubugeeei-prod/vize/pull/38)     | 2026-02-03 | chore(npm/vscode-vize): Icon                                      | merged |
| [#1369](https://github.com/ubugeeei-prod/vize/pull/1369) | 2026-06-10 | docs: fix vscode extension build commands in install guide        | merged |
| [#1370](https://github.com/ubugeeei-prod/vize/pull/1370) | 2026-06-10 | fix(flake): correct PATH parameter expansion in moonbit shellHook | merged |

## 要点

### エディタと LSP（6 月）

- #1563: `<span />` のような回復可能なパース修復を LSP がエラー扱いし、そのファイルの lint と型検査が全部止まる。`vize check` は正常
- #1837: `<template v-if>` の最初の `</template>` がルートを閉じてしまい、以降のハイライトが消える。原因は vscode-vize の TextMate 文法
- #2010: ワークスペースのパスに `=` などパーセントエンコードされる文字があると、仮想 `*.vue.ts` がソースの隣に書き出され残り続ける。旧 worktree 名 `slides=...` で踏んだものと思われる（要確認）
- PR #1369: インストールガイドの `vp install --ignore-workspace` と `vp build` が動かないので `vp install -- --ignore-workspace` と `vp pack` に直した
- PR #1370: Nix devShell の `${PATH//:$HOME/.moon/bin/}` が `/` の区切りを誤解され、`$HOME` 配下の PATH を全部壊していた
- PR #38: vscode-vize のアイコン

### Patina のルール提案（9〜10 月）

- #5966: `<KeepAlive>` / `<Transition>` の直下が要素だとキャッシュが黙って効かない。Vue 2 の実コードで踏んだ
- #6234: `defineProps<{ isOpened: boolean }>()` の分割代入デフォルトは決して効かない。Options API 形式しか検出していなかった
- #7273: Teleport ルートや `inheritAttrs: false` の子に `class` を渡しても届かない。親の呼び出し側で報告してほしい
- #7377: ESLint 時代の `strict-boolean-expressions` が `.vue` で失われた。oxlint の type-aware は `.ts` しか見ない
- #7417: `prefer-props-shorthand` がコンポーネントにしか効かない。Vue 3.4+ ではネイティブ要素でも `:style` と書ける

### Nuxt と SSR（9 月末）

- #6684: `@vizejs/nuxt` の本番ビルドで Vue が 2 インスタンスに分かれ、全プリレンダーページが NUXT_E1001。しかも exit 0
- #6766: `v-bind("\`${fontSize}px\`")` が式をそのままプロパティ名に入れ、壊れた CSS を出す
- #6767: レイアウトに `<style scoped>` があると、ページのルートに `[object object]` という属性が付く
- #6898: #6767 の修正後も、`:slotted()` がないのに `data-v-xxx-s` を常に出す。stock コンパイラとの差分比較を邪魔する
- #6897: SFC のモジュール id が `.vue.ts` で終わるため Nuxt の SSRStylesPlugin が拾わず、クリティカル CSS が一切出ない

### vue-router 連携（10 月上旬）

- #7816: `[id=int].vue` の `id=int` をパラメータ名として読み、`route.params.id` を未定義と報告する
- #7817: vue-router の `sfc-typed-router` のように、ページ SFC の引数なし `useRoute()` に型を付けてほしい

### type-aware lint の誤検知（10 月中旬）

- #8752〜#8755: `vize check` は通るのに `no-unsafe-template-binding` が `any` と言う。オブジェクトリテラル引数、改行で始まる属性値、複数行三項演算子、`RouterView` のスロット
- #8756: `computed()` の getter 内で `.value` をローカルに読むと reactivity loss と言われる
- #9747: #8752 の修正から漏れた、ネストした `v-if` と `v-else-if`

### a11y / SSR lint と Musea（10 月 19 日）

この回から、再現リポジトリ（`naitokosuke/vize-*-repro`）を毎回切って添えるようにした。

- #9748: インラインハンドラの引数 `open` を `window.open` と見なす
- #9749: `required` でない `<select>` の空 option にまで `disabled` を求める。markuplint と HTML 仕様に反する
- #9750: APG の combobox パターンの除外が、バインドされた `:id` と `role="option"` を見ていない
- #9751: `hidden` 属性付きの file input にラベルを求める
- #9752: Musea の art ファイルで `<style scoped>` とアロー関数属性が組み合わさると `() = data-v-… > {}` に壊れる

### Vapor・ビルド・content-mapper（10 月中旬〜下旬）

- #9180: Vapor の dev 出力が `getCurrentInstance()` 経由で setupState を書くが、Vapor インスタンスでは返らないので HMR の再描画が落ちる
- #10659: 0.516.0 から本番の style id がルート相対になり、`<style>` 内の相対 `@import` が `vite build` で解決できない
- #10660: `v-else` 内の `v-for` + `<template #default>` で、絞り込み済みのガードを再出力して TS2367
- #10661: `from` という prop を `_from` と宣言して `from` で参照し TS2552

## 発表の切り口（案）

- 4 か月で issue 30 件、すべて閉じられた。修正の速さ自体が話題になる
- 起票の型が途中で変わった。最初は文章だけ、10 月から再現リポジトリを毎回添える
- 「`vize check` は通るのに lint が言う」のように、比較対象（stock コンパイラ、markuplint、HTML 仕様、vue-router）を必ず置いている
- 実プロジェクトの移行（ESLint → Patina、vue-tsc → vize check、Nuxt 4）で踏んだものが中心
