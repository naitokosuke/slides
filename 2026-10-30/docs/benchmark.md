# Vize と Oxc 系ツールの比較

2026-10-26 に手元で測った。
README のベンチマークは ESLint と Prettier としか比べていないので、Oxlint と Oxfmt を同じ `.vue` 群に対して走らせた。

## 条件

- マシン: Apple M1、8 スレッド
- コーパス: toy app（chirashitabi）の `src` 以下の `.vue` 98 ファイル（`.art.vue` は除く）を 30 回複製した 2,940 ファイル
- バージョン: vize 0.575.0、oxlint 1.89.0、oxfmt 0.74.0（いずれも npm から単体で入れた CLI。設定ファイルなし）
- 計測: 各コマンドを 1 回空回ししたあと 5 回実行し、壁時計時間の中央値を取る

## コマンド

```sh
vize lint 'corpus30/**/*.vue'
oxlint corpus30
vize fmt --check --no-config 'corpus30/**/*.vue'
oxfmt --check corpus30
```

## 結果

| 対象   | Vize  | Oxc 系         | 倍率                 |
| ------ | ----- | -------------- | -------------------- |
| Lint   | 503ms | Oxlint 206ms   | Oxlint が 2.4 倍速い |
| Format | 283ms | Oxfmt 14,184ms | Vize が 50 倍速い    |

最小と最大は、Vize lint 493〜524ms、Oxlint 188〜417ms、Vize fmt 282〜295ms、Oxfmt 13,088〜15,421ms。

## 注意

- Oxlint は `.vue` の `<script>` だけを見る。既定のルールは 96 個。Vize lint はテンプレートも見る
- コーパスは Vize で整形済みなので、Vize fmt は差分 0、Oxfmt は 1,050 ファイルに差分ありと判定した。どちらも確認モードで、全ファイルを整形して比べる処理は同じ
- Oxc には `.vue` の型チェッカーがないので、型チェックは比べていない
