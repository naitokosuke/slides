---
theme: seriph
title: Vize を使い倒して起票した issue と PR
info: |
  ## Vize を使い倒して起票した issue と PR

  Vize に起票した issue 30 件と PR 3 件を振り返る。

  Speaker: [@naitokosuke](https://twitter.com/naitokosuke)
class: text-center
transition: fade-out
fonts:
  sans: "Kiwi Maru"
  mono: "Fira Code"
---

# Vize を使い倒して起票した issue と PR

2026-10-30 · @naitokosuke

---

# Hi

<img class="avatar" src="/naitokosuke.png" alt="naitokosuke" />

<style scoped>
.avatar {
  width: 14rem;
  height: 14rem;
  margin: 0 auto;
  border-radius: 9999px;
}
</style>

---

# 数字

- issue 30 件、すべて closed
- PR 3 件、すべて merged
- 2026-06 から 2026-10 まで

---
layout: section
---

# エディタと LSP

---

## PR #38

chore(npm/vscode-vize): Icon

<div class="mt-8 text-xl">

vscode-vize のアイコン

</div>

<div class="abs-bl m-6 text-sm opacity-60">

merged · 2026-02-03 · <https://github.com/ubugeeei-prod/vize/pull/38>

</div>

---

## PR #1369

docs: fix vscode extension build commands in install guide

<div class="mt-8 text-xl">

インストールガイドの `vp install` / `vp build` を動くコマンドに直した

</div>

<div class="abs-bl m-6 text-sm opacity-60">

merged · 2026-06-10 · <https://github.com/ubugeeei-prod/vize/pull/1369>

</div>

---

## PR #1370

fix(flake): correct PATH parameter expansion in moonbit shellHook

<div class="mt-8 text-xl">

Nix devShell の PATH 置換が `$HOME` 配下のエントリを全部壊していた

</div>

<div class="abs-bl m-6 text-sm opacity-60">

merged · 2026-06-10 · <https://github.com/ubugeeei-prod/vize/pull/1370>

</div>

---

## Issue #1563

Recoverable HTML parse repairs (e.g. self-closing non-void elements) suppress all dependent diagnostics in the LSP, including type checking

<div class="mt-8 text-xl">

`<span />` の回復可能なパース修復で、LSP がそのファイルの lint と型検査を全部止める

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-06-12 · <https://github.com/ubugeeei-prod/vize/issues/1563>

</div>

---

## Issue #1837

vscode-vize: nested `<template>` closes the root template block early, breaking syntax highlighting

<div class="mt-8 text-xl">

`<template v-if>` の `</template>` がルートを閉じ、以降のハイライトが消える

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-06-17 · <https://github.com/ubugeeei-prod/vize/issues/1837>

</div>

---

## Issue #2010

[LSP(canon)] virtual *.vue.ts files are materialized into the source tree (and never removed) when the workspace path contains a percent-encoded character such as "="

<div class="mt-8 text-xl">

パスに `=` があると仮想 `*.vue.ts` がソースの隣に書き出され、残り続ける

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-06-19 · <https://github.com/ubugeeei-prod/vize/issues/2010>

</div>

---
layout: section
---

# Patina へのルール提案

---

## Issue #5966

feat(patina): detect KeepAlive/Transition whose direct child isn't a component

<div class="mt-8 text-xl">

`<KeepAlive>` の直下が要素だと、キャッシュが黙って効かない

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-09-09 · <https://github.com/ubugeeei-prod/vize/issues/5966>

</div>

---

## Issue #6234

[Patina] extend no-required-prop-with-default to `<script setup>` TypeScript required props

<div class="mt-8 text-xl">

`defineProps<{ isOpened: boolean }>()` の分割代入デフォルトは決して効かない

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-09-18 · <https://github.com/ubugeeei-prod/vize/issues/6234>

</div>

---

## Issue #7273

cross-file lint: detect attrs passed to a component whose template root can't receive fallthrough attrs

<div class="mt-8 text-xl">

fallthrough attrs を受け取れない子に `class` を渡したら、呼び出し側で教えてほしい

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-09-30 · <https://github.com/ubugeeei-prod/vize/issues/7273>

</div>

---

## Issue #7377

feat(patina): add type/strict-boolean-expressions

<div class="mt-8 text-xl">

ESLint 時代の `strict-boolean-expressions` を `.vue` でも

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-10-01 · <https://github.com/ubugeeei-prod/vize/issues/7377>

</div>

---

## Issue #7417

lint(vue/prefer-props-shorthand): same-name bindings on native elements (`:style="style"`) are not reported

<div class="mt-8 text-xl">

`prefer-props-shorthand` をネイティブ要素の `:style` にも

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-10-02 · <https://github.com/ubugeeei-prod/vize/issues/7417>

</div>

---
layout: section
---

# Nuxt と SSR

---

## Issue #6684

@vizejs/nuxt: Nuxt 4 production build splits Vue across two instances, every prerendered page throws NUXT_E1001

<div class="mt-8 text-xl">

本番ビルドで Vue が 2 インスタンスに分かれ、全ページ NUXT_E1001。それでも exit 0

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-09-25 · <https://github.com/ubugeeei-prod/vize/issues/6684>

</div>

---

## Issue #6766

`v-bind()` with a non-identifier expression emits a malformed CSS custom property

<div class="mt-8 text-xl">

`v-bind()` に式を渡すと、式がそのまま CSS プロパティ名になる

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-09-26 · <https://github.com/ubugeeei-prod/vize/issues/6766>

</div>

---

## Issue #6767

`[object object]` emitted as an attribute name on SSR component roots

<div class="mt-8 text-xl">

レイアウトに `<style scoped>` があると `[object object]` 属性が生える

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-09-26 · <https://github.com/ubugeeei-prod/vize/issues/6767>

</div>

---

## Issue #6897

Nuxt SSR critical CSS is never inlined or linked — SFC module ids end in `.vue.ts`

<div class="mt-8 text-xl">

モジュール id が `.vue.ts` で終わり、クリティカル CSS が一切出ない

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-09-26 · <https://github.com/ubugeeei-prod/vize/issues/6897>

</div>

---

## Issue #6898

SSR emits a slotted scope id on slot outlets even when the parent has no `:slotted()`

<div class="mt-8 text-xl">

`:slotted()` がないのに `data-v-xxx-s` を常に出す（#6767 の続き）

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-09-26 · <https://github.com/ubugeeei-prod/vize/issues/6898>

</div>

---
layout: section
---

# vue-router 連携

---

## Issue #7816

fix: ecosystem/vue-router-route-param reads a `[param=parser]` page file name as the param name

<div class="mt-8 text-xl">

`[id=int].vue` の `id=int` をパラメータ名として読む

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-10-04 · <https://github.com/ubugeeei-prod/vize/issues/7816>

</div>

---

## Issue #7817

feat: type an argument-less `useRoute()` in page SFCs, as vue-router's `sfc-typed-router` does

<div class="mt-8 text-xl">

引数なし `useRoute()` に `sfc-typed-router` と同じ型を

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-10-04 · <https://github.com/ubugeeei-prod/vize/issues/7817>

</div>

---
layout: section
---

# type-aware lint の誤検知

---

## Issue #8752

lint(type/no-unsafe-template-binding): a call with an object literal argument in `v-if` is reported as `any` / `unknown` (vize check is fine)

<div class="mt-8 text-xl">

`v-if` のオブジェクトリテラル引数が `any` 扱い。`vize check` は通る

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-10-12 · <https://github.com/ubugeeei-prod/vize/issues/8752>

</div>

---

## Issue #8753

lint(type/no-unsafe-template-binding): a bound attribute whose value starts on a new line is reported as `any` / `unknown` (vize check is fine)

<div class="mt-8 text-xl">

改行で始まる属性値が `any` 扱い。フォーマッタが折り返すと踏む

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-10-12 · <https://github.com/ubugeeei-prod/vize/issues/8753>

</div>

---

## Issue #8754

lint(type/no-unsafe-template-binding): a ternary split across lines with an object literal in its alternate is reported as `any` / `unknown` (vize check is fine)

<div class="mt-8 text-xl">

複数行の三項演算子が `any` 扱い

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-10-12 · <https://github.com/ubugeeei-prod/vize/issues/8754>

</div>

---

## Issue #8755

lint(type/no-unsafe-template-binding): `<RouterView v-slot="{ Component }">` is reported as `any` / `unknown` though vue-router types it (vize check is fine)

<div class="mt-8 text-xl">

`<RouterView v-slot="{ Component }">` が `any` 扱い

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-10-12 · <https://github.com/ubugeeei-prod/vize/issues/8755>

</div>

---

## Issue #8756

lint(type/no-reactivity-loss): reading `.value` into a local inside a `computed()` getter is reported as a snapshot, and spreading its field as a copy

<div class="mt-8 text-xl">

`computed()` の getter 内のローカル変数を reactivity loss と言う

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-10-12 · <https://github.com/ubugeeei-prod/vize/issues/8756>

</div>

---

## Issue #9747

lint(type/no-unsafe-template-binding): a call with an object literal argument in a nested `v-if` or a `v-else-if` is reported as `any` / `unknown` (follow-up to #8752)

<div class="mt-8 text-xl">

#8752 の修正から漏れた、ネストした `v-if` と `v-else-if`

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-10-19 · <https://github.com/ubugeeei-prod/vize/issues/9747>

</div>

---
layout: section
---

# a11y / SSR lint と Musea

---

## Issue #9748

lint(ssr/no-browser-globals-in-ssr): an inline handler's parameter named like a browser global (`(open) => open`) is reported as the global

<div class="mt-8 text-xl">

ハンドラ引数の `open` を `window.open` と見なす

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-10-19 · <https://github.com/ubugeeei-prod/vize/issues/9748>

</div>

---

## Issue #9749

lint(a11y/placeholder-label-option): a `<select>` that is not `required` is flagged, and `disabled` is asked for, unlike markuplint and the HTML spec

<div class="mt-8 text-xl">

`required` でない `<select>` の空 option に `disabled` を求める

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-10-19 · <https://github.com/ubugeeei-prod/vize/issues/9749>

</div>

---

## Issue #9750

lint(a11y/interactive-supports-focus): the combobox exemption misses bound `:id` / `:aria-controls` and never covers `role="option"` (follow-up to #5941)

<div class="mt-8 text-xl">

APG の combobox パターンの除外に穴がある（#5941 の続き）

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-10-19 · <https://github.com/ubugeeei-prod/vize/issues/9750>

</div>

---

## Issue #9751

lint(a11y/form-control-has-label): a form control with the `hidden` attribute is asked for a label

<div class="mt-8 text-xl">

`hidden` の file input にラベルを求める

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-10-19 · <https://github.com/ubugeeei-prod/vize/issues/9751>

</div>

---

## Issue #9752

musea: in an art file with `<style scoped>`, an arrow function in an attribute breaks the variant (`() = data-v-… > {}`)

<div class="mt-8 text-xl">

`<style scoped>` の art ファイルで、アロー関数属性が壊れる

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-10-19 · <https://github.com/ubugeeei-prod/vize/issues/9752>

</div>

---
layout: section
---

# Vapor・ビルド・content-mapper

---

## Issue #9180

atelier(sfc): Vapor dev output sets setupState through getCurrentInstance(), so an HMR re-render calls render with an undefined _ctx

<div class="mt-8 text-xl">

Vapor の dev 出力で、HMR の再描画が undefined の `_ctx` で落ちる

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-10-15 · <https://github.com/ubugeeei-prod/vize/issues/9180>

</div>

---

## Issue #10659

vite-plugin: since 0.516.0, a relative `@import` in a `<style>` block fails `vite build` (production style ids became root-relative in #10079)

<div class="mt-8 text-xl">

0.516.0 から `<style>` 内の相対 `@import` が `vite build` で解決できない

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-10-25 · <https://github.com/ubugeeei-prod/vize/issues/10659>

</div>

---

## Issue #10660

content-mapper: a `v-for` component with an explicit `<template #default>` in a `v-else` branch re-emits the narrowed guard past its `@ts-ignore` — false TS2367 in unmapped virtual code

<div class="mt-8 text-xl">

`v-else` 内の slot host で、絞り込み済みのガードを再出力して TS2367

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-10-25 · <https://github.com/ubugeeei-prod/vize/issues/10660>

</div>

---

## Issue #10661

content-mapper: a prop named `from`, `of` or `as` is bound as `_from` but anchored as `void from;` — TS2552 in unmapped virtual code

<div class="mt-8 text-xl">

`from` という prop を `_from` と宣言して `from` で参照し TS2552

</div>

<div class="abs-bl m-6 text-sm opacity-60">

closed · 2026-10-25 · <https://github.com/ubugeeei-prod/vize/issues/10661>

</div>

---
layout: center
---

# まとめ

TBD
