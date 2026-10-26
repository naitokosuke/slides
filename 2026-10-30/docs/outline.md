# outline: How I Contributed to Vize

5 分の LT。
表示する文言はすべて英語。このアウトラインだけ日本語で保守する。

## 軸

1 文で言うと「Vize は今 Real World Testing の段階なので、自分のアプリで使ってフィードバックするだけで contribution になる。自分はそれをこうやって続けている」。

結果（30 件、全部すぐ直った）→ Vize を使う理由（速い、TypeScript 7、まだテスト段階で面白い）→ やり方 → 持ち帰り、の順で進む。

## 使う実データ

### GitHub と npm（2026-10-26 に `gh` と `npm view` で取得）

issue ごとの一覧は `issues.md`、チャートと円の元データは `src/data/issues.ts`。

- issue 30 件（#1563〜#10661、2026-06-12〜2026-10-25）、すべて closed as completed
- 起票から close までの中央値は 341.5 分（約 5.7 時間）。最速は #10660 の 56 分、最遅は #8752〜#8756 の 6011 分（5 件まとめて #8765 で修正、v0.457.0）
- 12 時間以内に閉じたのは 30 件中 22 件
- npm の `vize` は 2026-06-12〜2026-10-26 の 136 日間に 303 リリース（0.206.0 → 0.574.0）
- 再現リポジトリ（`naitokosuke/vize-*-repro`）は #2010 で一度使い、#9747 以降の 9 件はすべてに付いている
- close までの中央値: #1563〜#9180 の 21 件は 496 分（約 8.3 時間）、#9747 以降の 9 件は 255 分（約 4.3 時間）。対照実験ではないのでスライドにも注記する
- 先行修正の取りこぼしを報告した follow-up: #6898（#6767 の続き）、#9747（#8752 の続き）

### Claude Code の memory と transcript（2026-10-26 に確認）

`~/.claude/projects/-Users-naitokosuke-src-github-com-naitokosuke-chirashitabi/memory/` が中心。

- 出どころ
  - chirashitabi 17 件: #7816、#7817、#8752〜#8756、#9180、#9747〜#9752、#10659〜#10661（memory の `use-route-no-name-pending.md`、`vize-lint-false-positives.md`、`vapor-get-current-instance.md`、`vize-repros-repo.md`）
  - #7816、#7817 は vuefes-2026 の transcript にも URL があるが、`gh search` で自分の issue を一覧した出力に含まれていただけで、起票元ではない

  - blog 5 件: #6684、#6766、#6767 は blog の transcript に `gh issue create` と URL がある。#6897、#6898 は同じ Nuxt 4.5.2 / `@vizejs/nuxt` 環境で同日の起票なので blog と推定（要確認）
  - 残り 8 件（#1563、#1837、#2010、#5966、#6234、#7273、#7377、#7417）は記録が残っておらず、スライドには出していない
- 手順（`vize-repros-repo.md`、`vize-tsrs-upgrade-blocked.md`、`vapor-get-current-instance.md`）
  - `vp run check` の警告を、ルールの実装と仕様、`@vitejs/plugin-vue` / `@vue/compiler-sfc` / `vue-tsc` の挙動と突き合わせる
  - 再現はリポジトリ 1 つに 1 件。アプリの名前もコードも入れない
  - 起票はユーザーの許可が出てから。`gh issue create` で、まとめて出すときは 5〜7 分ずつ空ける（連投による BAN を避けるため。fake gh で dry run してから）
  - 修正のリリース後は chirashitabi の Vize を上げて警告を確かめ直し、再現リポジトリは archive する
- 起票しなかったもの
  - 10 月に作った再現リポジトリは 11 個（10-19 に 6 個、10-25 に 5 個）、起票したのは 9 個。2 個はユーザーが削除した
  - tsrs でだけ壊れるもの（`vize-report-tsgo-only.md`: Vize は tsgo を対象にしている）
  - 型チェッカーが起動できないときに警告を出して exit 0 で終わる挙動（Vize の意図した挙動）
  - `no-reactivity-loss` の判定が狭いこと（意図的。書き直したコードのほうが良かった）
- chirashitabi の lint 警告: 80 → 17（chirashitabi#195 で自分のコードを修正）→ 6（Vize 0.501.0 時点。Vize 側の修正と #197 の書き直し）。残り 6 件はルールの実装と仕様に照らして誤検知と確認済み

## スライド構成

各スライドは「主張を言い切る見出し 1 文」と「その根拠になる図 1 つ」で組む。

1. cover「How I Contributed to Vize」。副題「30 issues, June to October」、アイコンと GitHub へのリンク付きの @naitokosuke。タイトルは一色
2. 30（issues I opened on Vize）
3. All 30 were fixed, most within a day。根拠は close までの時間に面積が反比例する円 30 個（速く直ったものほど大きい。最大は #10660 の 56 分）。1 日以内に閉じたのは 23 件。番号と時間はどんなに小さい円でも出す
4. Vize のロゴだけを中央に大きく置く。Vize の紹介と、使う理由への入り。ロゴは ubugeeei-prod/vize の assets/logo.svg（MIT）を src/components/VizeLogo.vue にしたもの。色は元の #000000 のまま変えない（切り抜くのは viewBox だけ）
5. I use Vize because it is much faster。根拠は 2 行。Lint は eslint-plugin-vue より 182×（Vize の README のベンチマーク、2026-09-16、3,000 ファイル、20.75s → 114ms）。Format は Oxfmt より 50×（toy app の .vue 2,940 ファイルで手元で計測、docs/benchmark.md）。Lint を Oxlint と比べると Oxlint のほうが 2.4 倍速い（ただし `<script>` しか見ない）ので、Lint は ESLint と比べる。型チェックは vue language tools v4 が同じ content mapper の仕組みに移る（vuejs/language-tools#6170、draft）ので、vue-tsc との比較は出さない
6. It type-checks .vue on TypeScript 7。根拠は tsconfig の contentMappers と、vue-tsc が TypeScript 7 を読めないこと（このリポジトリの CLAUDE.md）
7. It is still being tested, and that is the exciting part。根拠は公式ブログ「Real World Testing」（2026-06-07）の OG 画像。画像は src/public/real-world-testing.png（vizejs.dev の OG 画像を保存したもの）
8. The blog asks for reports from real projects。根拠は同じ記事の 1 文「Real-world applications are the test suite now.」
9. I build a Vue app and use every part of Vize。根拠は Compile / Lint / Format / Check / Musea / Editor の 6 ブロック。どれも同じパーサーの上にある（README の What Is Vize?）
10. When something looks off, Claude Code makes a repro。根拠は再現リポジトリ 1 つ（vize-placeholder-label-option-repro）とコマンド。アプリのものは何も入れない
11. Then it checks whether someone already filed it。根拠は `gh search issues --repo ubugeeei-prod/vize` のコマンド
12. Vize ships twice a day, so the repro runs on the latest release。根拠は 136 日で 303 リリース（0.206.0 → 0.574.0）
13. TypeScript 7 is still moving, so it checks whether it is really Vize。根拠は、再現リポジトリをリリース済みの TypeScript 7 でも走らせる 2 つのコマンド（同梱の tsgo で動く `vize check` と、TypeScript 7.1 beta の content mapper で動く `tsc --runExternalCode --noEmit`）。tsrs は TypeScript main を追っているので、tsrs だけで壊れるものは Vize の問題とは限らない（`vize-report-tsgo-only.md`）。起票するかどうかの振り分けは見せない
14. 締めは聞き手への呼びかけ。「Right now, trying Vize on your app is a contribution.」Real World Testing の今は、自分のアプリで使ってフィードバックするだけで contribution になる。リンクは Real World Testing の記事

散布図、6 月と 10 月の比較、8.3h → 4.3h、取りこぼし、lint 警告 80 → 6、報告のテンプレート、正しく動くものとの突き合わせ、起票しなかったものの分類は 5 分に収めるため外した。散布図のコンポーネントは 9914715 にある。

## 未決

- blog の 5 件のうち #6897、#6898 は推定
- 記録のない 8 件の出どころ

## 文言とデザインの方針

- スローガン調の言い回し（「X, not Y」、三つ並べ、決め台詞）を避け、事実を平叙で書く
- 色・サイズ・余白・角丸・線幅などの値は `src/style.css` の `:root` にあるトークンだけを使う。コンポーネントもスライドもトークンを参照する
- 配色は Palm Springs の 5 色（#024873 #048ABF #049DBF #055902 #F2C2C2）だけを使い、どれも単色のベタ塗りにする。背景はピンク、文字は濃い青、カードやタイルはプールの青、アクセントは緑。白はブロックの上の文字にだけ使う
- 文字は 1.75rem（28px）より小さくしない。980 × 552 のスライドで高さの約 5% にあたり、Guy Kawasaki の 10/20/30 の 30pt と同じ比率。例外は 3 枚目の円の中の番号と時間で、小さくても必ず出す
- 見出しは主張の 1 文にして（Michael Alley の Assertion-Evidence）、覚えてほしい語だけアクセント色にする（Mayer の signaling）。話す内容をそのままスライドに書かない（redundancy）
- 根拠の図は、見出しの下に残った高さの中で上下中央に置く。下に大きな余白を残さない
