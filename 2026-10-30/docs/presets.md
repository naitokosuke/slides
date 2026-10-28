# Vize のプリセットと rule

2026-10-27 に、手元のプロジェクトにインストール済みの Vize から取り出した。
`@vizejs/native` の `getPatinaRules()` が、rule ごとに名前、カテゴリ、既定の重大度、含まれるプリセットを返す。
oxlint-plugin-vize は native を使わず JS 側でプリセットを展開するので、`createVizeRuleConfig({ preset })` の結果を数えた。

## プリセットの rule 数

`happy-path` は `general-recommended` の別名で、プリセットを指定しないときの既定。

| バージョン | 全 rule | essential | general-recommended | ecosystem | nuxt | opinionated |
| ---------- | ------- | --------- | ------------------- | --------- | ---- | ----------- |
| 0.347.7    | 227     | 34        | 89                  | 97        | 173  | 170         |
| 0.501.0    | 258     | 85        | 147                 | 155       | 213  | 213         |
| 0.549.0    | 266     | 91        | 153                 | 161       | 221  | 221         |
| 0.562.0    | 266     | 91        | 153                 | 161       | 221  | 221         |

oxlint-plugin-vize で展開した数は次のとおり。

- 0.428.0（blog）: happy-path 112、ecosystem 95、nuxt 158、opinionated 156
- 0.347.7（kifue）: ecosystem 95、`includeTypeAware: true` で 97

## プリセットの関係（0.562.0）

- essential ⊂ general-recommended ⊂ ecosystem。ecosystem が足すのは `ecosystem/*` の 8 件（vue-router、vue-i18n、Pinia、vue-test-utils、void-link）
- nuxt と opinionated はどちらも 221 件で、216 件が共通
  - nuxt だけにあるもの: `ecosystem/nuxt-prefer-nuxt-link`、`nuxt/prefer-import-meta`、`nuxt/no-page-meta-runtime-values`、`nuxt/no-nuxt-config-test-key`、`nuxt/nuxt-config-keys-order`
  - opinionated だけにあるもの: `vue/require-component-registration`、`script/no-options-api`、`script/no-get-current-instance`、`script/no-with-defaults`、`script/require-prop-types`
- どのプリセットにも入らない rule が 32 件ある。`type/strict-boolean-expressions`、`musea/*` の 6 件、`script/prefer-use-id` などで、使うには明示的に有効にする
- 0.501.0 から 0.562.0 で増えた 8 件は、すべて Options API 向けの `script/*`（`order-in-components`、`one-component-per-file` など）

## カテゴリ別の件数（0.562.0）

| カテゴリ            | essential | general-recommended | ecosystem | nuxt | opinionated | 全体 |
| ------------------- | --------- | ------------------- | --------- | ---- | ----------- | ---- |
| Accessibility       | 0         | 25                  | 25        | 30   | 30          | 31   |
| Css                 | 0         | 0                   | 0         | 10   | 10          | 10   |
| Ecosystem           | 0         | 0                   | 8         | 1    | 0           | 9    |
| Essential           | 49        | 49                  | 49        | 50   | 50          | 54   |
| HtmlConformance     | 1         | 8                   | 8         | 9    | 9           | 9    |
| Musea               | 0         | 0                   | 0         | 0    | 0           | 6    |
| Nuxt                | 0         | 0                   | 0         | 4    | 0           | 4    |
| Recommended         | 2         | 15                  | 15        | 39   | 40          | 46   |
| Script              | 39        | 42                  | 42        | 57   | 59          | 72   |
| StronglyRecommended | 0         | 11                  | 11        | 12   | 12          | 12   |
| TypeAware           | 0         | 2                   | 2         | 5    | 5           | 6    |
| Vapor               | 0         | 1                   | 1         | 4    | 6           | 7    |

## プロジェクトごとの実効 rule

| プロジェクト               | 経路               | バージョン | プリセット          | 件数 | 上書き                                                                                                                                                  |
| -------------------------- | ------------------ | ---------- | ------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| chirashitabi               | Vite+ `lint.vue`   | 0.562.0    | opinionated         | 221  | `vue/multi-word-component-names` を off、`type/strict-boolean-expressions` を追加、ほか 4 件を warning から error へ。差し引き 221 件、`maxWarnings: 0` |
| awesome-vue-ui-collections | Vite+ `lint.vue`   | 0.501.0    | happy-path          | 147  | `html/deprecated-attr` を off で 146 件                                                                                                                 |
| slides                     | Vite+ `vue.linter` | 0.549.0    | 既定（happy-path）  | 153  | なし                                                                                                                                                    |
| blog                       | oxlint-plugin-vize | 0.428.0    | nuxt                | 158  | ファイル単位で 3 件を off                                                                                                                               |
| kifue                      | oxlint-plugin-vize | 0.347.7    | ecosystem（型あり） | 97   | なし                                                                                                                                                    |
| quiz-study-quiz            | CLI                | ^0.8.0     | 既定                | —    | node_modules がないので未確認                                                                                                                           |

chirashitabi が error に上げた rule の既定と所属は次のとおり。

- `vue/prefer-props-shorthand`: warning、nuxt と opinionated
- `type/require-typed-props`、`type/require-typed-emits`: warning、general-recommended 以上
- `type/no-floating-promises`: warning、nuxt と opinionated
- `type/strict-boolean-expressions`: warning、どのプリセットにもない

## rule とプリセットの対応（0.562.0）

### Accessibility（31 件）

| rule                                     | 既定    | essential | general-recommended | ecosystem | nuxt | opinionated |
| ---------------------------------------- | ------- | --------- | ------------------- | --------- | ---- | ----------- |
| `a11y/alt-text`                          | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `a11y/anchor-has-content`                | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `a11y/anchor-is-valid`                   | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `a11y/aria-props`                        | error   |           | ✓                   | ✓         | ✓    | ✓           |
| `a11y/aria-role`                         | error   |           | ✓                   | ✓         | ✓    | ✓           |
| `a11y/aria-unsupported-elements`         | error   |           | ✓                   | ✓         | ✓    | ✓           |
| `a11y/click-events-have-key-events`      | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `a11y/form-control-has-label`            | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `a11y/heading-has-content`               | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `a11y/heading-levels`                    | warning |           |                     |           | ✓    | ✓           |
| `a11y/iframe-has-title`                  | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `a11y/img-alt`                           | warning |           |                     |           |      |             |
| `a11y/interactive-supports-focus`        | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `a11y/label-has-for`                     | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `a11y/landmark-roles`                    | warning |           |                     |           | ✓    | ✓           |
| `a11y/media-has-caption`                 | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `a11y/mouse-events-have-key-events`      | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `a11y/no-access-key`                     | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `a11y/no-aria-hidden-on-focusable`       | error   |           | ✓                   | ✓         | ✓    | ✓           |
| `a11y/no-autofocus`                      | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `a11y/no-distracting-elements`           | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `a11y/no-i-for-icon`                     | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `a11y/no-redundant-roles`                | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `a11y/no-refer-to-non-existent-id`       | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `a11y/no-role-presentation-on-focusable` | error   |           | ✓                   | ✓         | ✓    | ✓           |
| `a11y/no-static-element-interactions`    | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `a11y/placeholder-label-option`          | warning |           |                     |           | ✓    | ✓           |
| `a11y/role-has-required-aria-props`      | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `a11y/tabindex-no-positive`              | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `a11y/use-list`                          | warning |           |                     |           | ✓    | ✓           |
| `vue/use-unique-element-ids`             | warning |           |                     |           | ✓    | ✓           |

### Css（10 件）

| rule                            | 既定    | essential | general-recommended | ecosystem | nuxt | opinionated |
| ------------------------------- | ------- | --------- | ------------------- | --------- | ---- | ----------- |
| `css/no-display-none`           | warning |           |                     |           | ✓    | ✓           |
| `css/no-hardcoded-values`       | warning |           |                     |           | ✓    | ✓           |
| `css/no-id-selectors`           | warning |           |                     |           | ✓    | ✓           |
| `css/no-important`              | warning |           |                     |           | ✓    | ✓           |
| `css/no-utility-classes`        | warning |           |                     |           | ✓    | ✓           |
| `css/no-v-bind-performance`     | warning |           |                     |           | ✓    | ✓           |
| `css/prefer-logical-properties` | warning |           |                     |           | ✓    | ✓           |
| `css/prefer-nested-selectors`   | warning |           |                     |           | ✓    | ✓           |
| `css/prefer-slotted`            | warning |           |                     |           | ✓    | ✓           |
| `css/require-font-display`      | warning |           |                     |           | ✓    | ✓           |

### Ecosystem（9 件）

| rule                                        | 既定    | essential | general-recommended | ecosystem | nuxt | opinionated |
| ------------------------------------------- | ------- | --------- | ------------------- | --------- | ---- | ----------- |
| `ecosystem/nuxt-prefer-nuxt-link`           | warning |           |                     |           | ✓    |             |
| `ecosystem/pinia-prefer-store-to-refs`      | warning |           |                     | ✓         |      |             |
| `ecosystem/router-link-require-to`          | error   |           |                     | ✓         |      |             |
| `ecosystem/void-link-require-href`          | error   |           |                     | ✓         |      |             |
| `ecosystem/void-link-valid-method`          | warning |           |                     | ✓         |      |             |
| `ecosystem/vue-i18n-no-missing-key`         | warning |           |                     | ✓         |      |             |
| `ecosystem/vue-router-prefer-named-link`    | warning |           |                     | ✓         |      |             |
| `ecosystem/vue-router-prefer-named-push`    | warning |           |                     | ✓         |      |             |
| `ecosystem/vue-test-utils-no-html-snapshot` | warning |           |                     | ✓         |      |             |

### Essential（54 件）

| rule                                      | 既定    | essential | general-recommended | ecosystem | nuxt | opinionated |
| ----------------------------------------- | ------- | --------- | ------------------- | --------- | ---- | ----------- |
| `petite-vue/no-unsupported-directive`     | error   |           |                     |           |      |             |
| `petite-vue/valid-v-effect`               | error   |           |                     |           |      |             |
| `petite-vue/valid-v-scope`                | error   |           |                     |           |      |             |
| `vue/multi-word-component-names`          | error   | ✓         |                     |           | ✓    | ✓           |
| `vue/no-child-content`                    | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-deprecated-filter`                | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-deprecated-functional-template`   | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-deprecated-html-element-is`       | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-deprecated-inline-template`       | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-deprecated-router-link-tag-prop`  | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-deprecated-scope-attribute`       | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-deprecated-slot-attribute`        | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-deprecated-slot-scope-attribute`  | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-deprecated-v-bind-sync`           | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-deprecated-v-is`                  | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-deprecated-v-on-native-modifier`  | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-deprecated-v-on-number-modifiers` | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-dupe-v-else-if`                   | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-duplicate-attributes`             | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-multiple-template-root`           | error   |           |                     |           |      |             |
| `vue/no-mutating-props`                   | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-reserved-component-names`         | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-template-key`                     | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-textarea-mustache`                | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-unused-components`                | warning | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-unused-vars`                      | warning | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-use-v-if-with-v-for`              | warning | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-useless-template-attributes`      | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-v-for-template-key-on-child`      | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-v-html`                           | warning | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-v-text-v-html-on-component`       | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/permitted-contents`                  | error   |           | ✓                   | ✓         | ✓    | ✓           |
| `vue/require-component-is`                | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/require-toggle-inside-transition`    | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/require-v-for-key`                   | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/use-v-on-exact`                      | warning | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/valid-attribute-name`                | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/valid-template-root`                 | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/valid-v-bind`                        | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/valid-v-cloak`                       | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/valid-v-else`                        | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/valid-v-else-if`                     | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/valid-v-for`                         | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/valid-v-html`                        | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/valid-v-if`                          | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/valid-v-is`                          | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/valid-v-memo`                        | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/valid-v-model`                       | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/valid-v-on`                          | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/valid-v-once`                        | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/valid-v-pre`                         | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/valid-v-show`                        | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/valid-v-slot`                        | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/valid-v-text`                        | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |

### HtmlConformance（9 件）

| rule                             | 既定    | essential | general-recommended | ecosystem | nuxt | opinionated |
| -------------------------------- | ------- | --------- | ------------------- | --------- | ---- | ----------- |
| `html/deprecated-attr`           | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `html/deprecated-element`        | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `html/id-duplication`            | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `html/no-consecutive-br`         | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `html/no-dupe-style-properties`  | warning |           |                     |           | ✓    | ✓           |
| `html/no-duplicate-class`        | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `html/no-duplicate-dt`           | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `html/no-empty-palpable-content` | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `html/require-datetime`          | warning |           | ✓                   | ✓         | ✓    | ✓           |

### Musea（6 件）

| rule                         | 既定    | essential | general-recommended | ecosystem | nuxt | opinionated |
| ---------------------------- | ------- | --------- | ------------------- | --------- | ---- | ----------- |
| `musea/no-empty-variant`     | warning |           |                     |           |      |             |
| `musea/prefer-design-tokens` | warning |           |                     |           |      |             |
| `musea/require-component`    | warning |           |                     |           |      |             |
| `musea/require-title`        | error   |           |                     |           |      |             |
| `musea/unique-variant-names` | error   |           |                     |           |      |             |
| `musea/valid-variant`        | error   |           |                     |           |      |             |

### Nuxt（4 件）

| rule                               | 既定  | essential | general-recommended | ecosystem | nuxt | opinionated |
| ---------------------------------- | ----- | --------- | ------------------- | --------- | ---- | ----------- |
| `nuxt/no-nuxt-config-test-key`     | error |           |                     |           | ✓    |             |
| `nuxt/no-page-meta-runtime-values` | error |           |                     |           | ✓    |             |
| `nuxt/nuxt-config-keys-order`      | error |           |                     |           | ✓    |             |
| `nuxt/prefer-import-meta`          | error |           |                     |           | ✓    |             |

### Recommended（46 件）

| rule                                    | 既定    | essential | general-recommended | ecosystem | nuxt | opinionated |
| --------------------------------------- | ------- | --------- | ------------------- | --------- | ---- | ----------- |
| `ssr/no-browser-globals-in-ssr`         | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `ssr/no-hydration-mismatch`             | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `vue/a11y-img-alt`                      | warning |           |                     |           |      |             |
| `vue/attribute-order`                   | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `vue/component-name-in-template-casing` | warning |           |                     |           | ✓    | ✓           |
| `vue/html-button-has-type`              | warning |           |                     |           | ✓    | ✓           |
| `vue/max-template-complexity`           | warning |           |                     |           |      |             |
| `vue/no-array-index-key`                | warning |           |                     |           | ✓    | ✓           |
| `vue/no-bare-strings-in-template`       | warning |           |                     |           |      |             |
| `vue/no-boolean-attr-value`             | warning |           |                     |           | ✓    | ✓           |
| `vue/no-empty-component-block`          | warning |           |                     |           | ✓    | ✓           |
| `vue/no-inline-style`                   | warning |           |                     |           | ✓    | ✓           |
| `vue/no-invalid-html-attribute`         | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-lone-template`                  | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-multiple-objects-in-class`      | warning |           |                     |           | ✓    | ✓           |
| `vue/no-negated-v-if-condition`         | warning |           |                     |           | ✓    | ✓           |
| `vue/no-non-component-keep-alive-child` | warning | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-preprocessor-lang`              | warning |           |                     |           | ✓    | ✓           |
| `vue/no-root-v-if`                      | warning |           |                     |           | ✓    | ✓           |
| `vue/no-script-non-standard-lang`       | warning |           |                     |           | ✓    | ✓           |
| `vue/no-src-attribute`                  | warning |           |                     |           | ✓    | ✓           |
| `vue/no-static-inline-styles`           | warning |           |                     |           |      |             |
| `vue/no-template-lang`                  | warning |           |                     |           | ✓    | ✓           |
| `vue/no-template-target-blank`          | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-undefined-refs`                 | warning |           |                     |           |      |             |
| `vue/no-unsafe-url`                     | warning | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-unsandboxed-iframe`             | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-unused-refs`                    | warning |           |                     |           | ✓    | ✓           |
| `vue/no-unused-setup-bindings`          | warning |           |                     |           |      |             |
| `vue/no-use-v-else-with-v-for`          | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-useless-mustaches`              | warning |           |                     |           | ✓    | ✓           |
| `vue/no-useless-v-bind`                 | warning |           |                     |           | ✓    | ✓           |
| `vue/no-v-text`                         | warning |           |                     |           | ✓    | ✓           |
| `vue/prefer-props-shorthand`            | warning |           |                     |           | ✓    | ✓           |
| `vue/prefer-true-attribute-shorthand`   | warning |           |                     |           | ✓    | ✓           |
| `vue/require-component-registration`    | warning |           |                     |           |      | ✓           |
| `vue/require-scoped-style`              | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `vue/scoped-event-names`                | warning |           |                     |           | ✓    | ✓           |
| `vue/sfc-element-order`                 | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `vue/single-style-block`                | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `vue/slot-name-casing`                  | warning |           |                     |           | ✓    | ✓           |
| `vue/this-in-template`                  | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `vue/v-on-event-hyphenation`            | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `vue/v-on-handler-style`                | warning |           |                     |           | ✓    | ✓           |
| `vue/warn-custom-block`                 | warning |           |                     |           | ✓    | ✓           |
| `vue/warn-custom-directive`             | warning |           |                     |           | ✓    | ✓           |

### Script（72 件）

| rule                                            | 既定    | essential | general-recommended | ecosystem | nuxt | opinionated |
| ----------------------------------------------- | ------- | --------- | ------------------- | --------- | ---- | ----------- |
| `script/component-options-name-casing`          | error   |           |                     |           | ✓    | ✓           |
| `script/custom-event-name-casing`               | error   |           |                     |           | ✓    | ✓           |
| `script/define-emits-declaration`               | warning |           |                     |           | ✓    | ✓           |
| `script/define-macros-order`                    | warning |           |                     |           | ✓    | ✓           |
| `script/define-props-declaration`               | warning |           |                     |           | ✓    | ✓           |
| `script/define-props-destructuring`             | warning |           |                     |           |      |             |
| `script/no-arrow-functions-in-watch`            | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/no-async-in-computed`                   | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/no-boolean-default`                     | warning |           |                     |           | ✓    | ✓           |
| `script/no-computed-properties-in-data`         | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/no-deep-destructure-in-props`           | warning |           |                     |           | ✓    | ✓           |
| `script/no-deprecated-data-object-declaration`  | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/no-deprecated-delete-set`               | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/no-deprecated-destroyed-lifecycle`      | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/no-deprecated-dollar-listeners-api`     | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/no-deprecated-dollar-scopedslots-api`   | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/no-deprecated-events-api`               | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/no-deprecated-model-definition`         | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/no-deprecated-props-default-this`       | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/no-deprecated-vue-config-keycodes`      | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/no-dupe-keys`                           | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/no-duplicate-attr-inheritance`          | warning | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/no-export-in-script-setup`              | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/no-expose-after-await`                  | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/no-import-compiler-macros`              | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/no-internal-imports`                    | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/no-lifecycle-after-await`               | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/no-multiple-slot-args`                  | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `script/no-potential-component-option-typo`     | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/no-reactive-destructure`                | warning |           |                     |           |      |             |
| `script/no-ref-as-operand`                      | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/no-required-prop-with-default`          | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/no-reserved-identifiers`                | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/no-reserved-keys`                       | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/no-reserved-props`                      | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/no-restricted-globals`                  | error   |           |                     |           |      |             |
| `script/no-restricted-members`                  | error   |           |                     |           |      |             |
| `script/no-side-effects-in-computed-properties` | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/no-top-level-ref-in-script`             | error   |           |                     |           |      |             |
| `script/no-unstable-nested-components`          | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `script/no-unused-emit-declarations`            | warning |           |                     |           | ✓    | ✓           |
| `script/no-use-computed-property-like-method`   | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/no-watch-after-await`                   | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/no-with-defaults`                       | warning |           |                     |           |      | ✓           |
| `script/one-component-per-file`                 | warning |           |                     |           | ✓    | ✓           |
| `script/order-in-components`                    | warning |           |                     |           | ✓    | ✓           |
| `script/prefer-computed`                        | warning |           |                     |           |      |             |
| `script/prefer-define-options`                  | warning |           |                     |           | ✓    | ✓           |
| `script/prefer-import-from-vue`                 | warning | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/prefer-ref-over-reactive`               | warning |           |                     |           |      |             |
| `script/prefer-use-attrs`                       | warning |           |                     |           |      |             |
| `script/prefer-use-id`                          | warning |           |                     |           |      |             |
| `script/prefer-use-slots`                       | warning |           |                     |           |      |             |
| `script/prefer-use-template-ref`                | warning |           |                     |           | ✓    | ✓           |
| `script/require-default-prop`                   | error   |           |                     |           | ✓    | ✓           |
| `script/require-explicit-emits`                 | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `script/require-explicit-slots`                 | warning |           |                     |           | ✓    | ✓           |
| `script/require-function-return-type`           | warning |           |                     |           |      |             |
| `script/require-prop-type-constructor`          | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/require-prop-types`                     | error   |           |                     |           |      | ✓           |
| `script/require-render-return`                  | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/require-slots-as-functions`             | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/require-symbol-provide`                 | warning |           |                     |           |      |             |
| `script/require-typed-object-prop`              | warning |           |                     |           | ✓    | ✓           |
| `script/require-typed-ref`                      | warning |           |                     |           |      |             |
| `script/require-valid-default-prop`             | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/return-in-computed-property`            | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/return-in-emits-validator`              | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/valid-define-emits`                     | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/valid-define-options`                   | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/valid-define-props`                     | error   | ✓         | ✓                   | ✓         | ✓    | ✓           |
| `script/valid-next-tick`                        | warning | ✓         | ✓                   | ✓         | ✓    | ✓           |

### StronglyRecommended（12 件）

| rule                                   | 既定    | essential | general-recommended | ecosystem | nuxt | opinionated |
| -------------------------------------- | ------- | --------- | ------------------- | --------- | ---- | ----------- |
| `vue/attribute-hyphenation`            | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `vue/component-definition-name-casing` | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `vue/html-quotes`                      | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `vue/html-self-closing`                | warning |           |                     |           | ✓    | ✓           |
| `vue/mustache-interpolation-spacing`   | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-multi-spaces`                  | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-template-shadow`               | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `vue/no-unused-properties`             | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `vue/prop-name-casing`                 | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `vue/v-bind-style`                     | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `vue/v-on-style`                       | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `vue/v-slot-style`                     | warning |           | ✓                   | ✓         | ✓    | ✓           |

### TypeAware（6 件）

| rule                              | 既定    | essential | general-recommended | ecosystem | nuxt | opinionated |
| --------------------------------- | ------- | --------- | ------------------- | --------- | ---- | ----------- |
| `type/no-floating-promises`       | warning |           |                     |           | ✓    | ✓           |
| `type/no-reactivity-loss`         | warning |           |                     |           | ✓    | ✓           |
| `type/no-unsafe-template-binding` | warning |           |                     |           | ✓    | ✓           |
| `type/require-typed-emits`        | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `type/require-typed-props`        | warning |           | ✓                   | ✓         | ✓    | ✓           |
| `type/strict-boolean-expressions` | warning |           |                     |           |      |             |

### Vapor（7 件）

| rule                             | 既定    | essential | general-recommended | ecosystem | nuxt | opinionated |
| -------------------------------- | ------- | --------- | ------------------- | --------- | ---- | ----------- |
| `script/no-get-current-instance` | error   |           |                     |           |      | ✓           |
| `script/no-next-tick`            | error   |           |                     |           |      |             |
| `script/no-options-api`          | error   |           |                     |           |      | ✓           |
| `vapor/no-inline-template`       | error   |           |                     |           | ✓    | ✓           |
| `vapor/no-vue-lifecycle-events`  | error   |           | ✓                   | ✓         | ✓    | ✓           |
| `vapor/prefer-static-class`      | warning |           |                     |           | ✓    | ✓           |
| `vapor/require-vapor-attribute`  | warning |           |                     |           | ✓    | ✓           |
