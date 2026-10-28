# outline: How I Contributed to Vize

5 分の LT。
表示する文言はすべて英語。このアウトラインだけ日本語で保守する。

## 主張

1 文で言うと「Vize は今 Real World Testing の段階にある。自分のアプリで使い、おかしいと思ったところを小さな再現にして出せば、それがそのまま contribution になる。調べる手間は AI に任せられるが、出す前には自分で読む」。

聞き手への持ち帰りは「`npx vize lint` で試して、変だったら小さな再現を送る」。

結果（30 件すべて closed as completed）→ Vize とは何か、なぜ使うか（Vibe Coding のガードレールが欲しい。速くて、Vue を分かっているルールが要る。v4 も同じ道、まだテスト段階で面白い）→ どこに当たったか → やり方（Claude Code の下調べ、自分が読む、1 件の流れ）→ 持ち帰り、の順で進む。

## 使う実データ

### GitHub と npm（2026-10-26 に `gh` と `npm view` で取得）

issue ごとの一覧は `issues.md`、円の元データは `src/data/issues.ts`。

- issue 30 件（#1563〜#10661、2026-06-12〜2026-10-25）、すべて closed as completed。うち 5 件（#5966、#6234、#7273、#7377、#7817）は機能追加の要望なので、スライドでは「25 fixes and 5 new features」と書く
- 起票から close までの中央値は 341.5 分（約 5.7 時間）。最速は #10660 の 56 分、最遅は #8752〜#8756 の 6011 分（5 件まとめて #8765 で修正、v0.457.0）
- 同じ期間（9/1〜10/25）に close した他の issue 973 件は中央値 498 分、1 日以内 76%（自分の 30 件は 1 日以内 77%）。ただし 904 件はメンテナー自身の起票なので比べる基準として弱い。なので「速く直った」はこの発表の主張にしない
- npm の `vize` は 2026-06-12〜2026-10-26 の 136 日間に 303 リリース（0.206.0 → 0.574.0）
- 当たった箇所（タイトルから分類）: Lint 15（#5966、#6234、#7273、#7377、#7417、#8752〜#8756、#9747〜#9751）、Build 7（#6684、#6766、#6767、#6897、#6898、#9180、#10659）、Editor 4（#1563、#1837、#2010、#7816）、Type check 3（#7817、#10660、#10661）、Musea 1（#9752）
- #9751 の流れ（日本時間）: 10/19 22:07 に起票（vize-hidden-input-label-repro 付き）、10/20 09:40 に #9759 で close、09:59 に vize 0.486.0 として公開、同日 toy app が 0.501.0 に上げて警告が消えた（chirashitabi#249、memory の `vize-lint-false-positives.md`）

### Claude Code の memory と transcript（2026-10-26 に確認）

`~/.claude/projects/-Users-naitokosuke-src-github-com-naitokosuke-chirashitabi/memory/` が中心。

- 出どころ
  - chirashitabi 17 件: #7816、#7817、#8752〜#8756、#9180、#9747〜#9752、#10659〜#10661（memory の `use-route-no-name-pending.md`、`vize-lint-false-positives.md`、`vapor-get-current-instance.md`、`vize-repros-repo.md`）
  - #7816、#7817 は vuefes-2026 の transcript にも URL があるが、`gh search` で自分の issue を一覧した出力に含まれていただけで、起票元ではない
  - blog 5 件: #6684、#6766、#6767 は blog の transcript に `gh issue create` と URL がある。#6897、#6898 は同じ Nuxt 4.5.2 / `@vizejs/nuxt` 環境で同日の起票なので blog と推定（要確認）
  - 残り 8 件（#1563、#1837、#2010、#5966、#6234、#7273、#7377、#7417）は記録が残っていない
- 手順（`vize-repros-repo.md`、`vize-tsrs-upgrade-blocked.md`、`vapor-get-current-instance.md`）
  - `vp run check` の警告を、ルールの実装と仕様、`@vitejs/plugin-vue` / `@vue/compiler-sfc` / `vue-tsc` の挙動と突き合わせる
  - 再現はリポジトリ 1 つに 1 件。アプリの名前もコードも入れない
  - 起票はユーザーの許可が出てから。`gh issue create` で、まとめて出すときは 5〜7 分ずつ空ける（fake gh で dry run してから）
  - 修正のリリース後は chirashitabi の Vize を上げて警告を確かめ直し、再現リポジトリは archive する
- 起票しなかったもの
  - 10 月に作った再現リポジトリは 11 個（10-19 に 6 個、10-25 に 5 個）、起票したのは 9 個
  - tsrs でだけ壊れるもの（`vize-report-tsgo-only.md`: Vize は tsgo を対象にしている）
  - 型チェッカーが起動できないときに警告を出して exit 0 で終わる挙動（Vize の意図した挙動）
- chirashitabi の lint 警告: 80 → 17（chirashitabi#195 で自分のコードを修正）→ 6（Vize 0.501.0 時点）。残り 6 件はルールの実装と仕様に照らして誤検知と確認済み

## スライド構成（14 枚）

各スライドは「主張を言い切る見出し 1 文」と「その根拠 1 つ」で組む。

1. cover「How I Contributed to Vize」。副題「30 issues, June to October」、アイコンと GitHub へのリンク付きの @naitokosuke
2. 30 issues, all closed as completed。根拠は close までの時間に面積が反比例する円 30 個（速く直ったものほど大きい）。円の色は 6 時間未満が黄色、1 日未満が Baby Pink、それ以上が Royal Blue。番号と時間はどんなに小さい円でも出す。下に「25 fixes and 5 new features. Bigger means closed sooner.」
3. Vize のロゴだけを中央に大きく置き、Vize が何かを話す。ロゴは ubugeeei-prod/vize の assets/logo.svg（MIT）。色は元の #000000 のまま（切り抜くのは viewBox だけ）。スライドに入ると、フェードが終わってから右から滑り込み、中央を少し行きすぎて止まり、ブレーキで前につんのめってから中央に収まる（src/components/BrakeIn.vue）。動きは手で打たず、ばねで中央に引かれる台車と、その減速で倒される起き上がりこぼしとして計算する。動きを減らす設定では動かさない
4. I vibe-code, so I need guardrails。根拠は Vize のブログ「Static Analysis for AI」（ubugeeei、2026-03-26）の 2 文「They predict likely continuations. They do not enforce invariants.」。原文の They は LLM のことで、スライドだけで分かるように最初の They を [Models] と補う。記事の要旨は、AI は確率的なので、決定的で速い静的解析がその歯止めになる、というもの。以前は同じ記事の「No. This is wrong.」を使っていたが、前後の文脈がないと誰が誰に言っているのか分からないので差し替えた。引用を左、記事の OG 画像（src/public/static-analysis-for-ai.png、記事へのリンク）を右に、同じ高さで並べ、見出しの下の高さの中で上下中央に置く。引用は見出しと同じ 2.75rem の通常の太さ（太字だと見出しと一続きに見える）で、1 文を 2 行ずつ手で改行する。このとき引用は幅 417px、高さ 202px、24rem の画像は高さ 201px でほぼ揃い、合わせて 852px の幅に収まる。出典の文字は置かない（OG 画像が記事名を示しているので重複する）
5. Guardrails have to be fast。Lint 182×（vs eslint-plugin-vue、README）、Format 50×（vs Oxfmt、自分で計測、docs/benchmark.md）、Type check 4.9×（vs vue-tsc v3、README）。下に「Oxlint lints 2.4× faster, but reads only <script>」と出典
6. The rules have to know Vue。`vize explain --list`（vize 0.575.0）から数えたルールの数。Vue 108、Accessibility 30、Runtime 10（SSR 2、Nuxt 4、Vapor 4）、Type-aware 6。下に「266 lint rules in all, each explained by vize explain」（コンパイラの診断 56 と TypeScript のコード 22 は数えない）
7. Johnson Chu の v4 alpha 告知ツイート（https://x.com/johnsoncodehk/status/2113609909329953099）を左に、右に「Vue Language Tools v4 takes the same path」。<Tweet> の埋め込みなので会場のネット接続が必要
8. 見出しを画像の上下に分ける。上に「It's still being tested,」、真ん中に Real World Testing の OG 画像（src/public/real-world-testing.png）、下に右寄せで「and that is the exciting part」
9. I run Vize on my side projects。テスト段階だと言った直後に、自分がその実地テストをしている側だと示し、次の「当たった箇所」につなぐ。どのアプリかは出さない。根拠は 2026-10-27 に github.com/naitokosuke/ 下を調べた、Vize を使っている趣味のプロジェクト 8 個の用途別の数（Lint 7、Type check 5、Build 4、Format 4、Musea 2）。Lint の説明は使っているプリセットの幅（happy-path から opinionated まで、詳細は docs/presets.md）。プロジェクトの総数は出さない。再現リポジトリ（vize-\*-repro）と、コミットのない poc-eiken-niji は数えない
10. My issues hit five parts of Vize。Format には 1 件も当たっていないので every とは書かない。当たった箇所の内訳（Lint 15、Build 7、Editor 4、Type check 3、Musea 1）
11. Claude Code does the legwork。1 つの入力欄に依頼 4 行。スライドに入ると 1 文字ずつ打ち込まれ（src/components/PromptTyping.vue）、打ち終えたあとも最後の行の末尾でカーソルが点滅し続ける。一覧表示や書き出し、動きを減らす設定では最初から全文を出す。見出しに Claude Code とあるので「To Claude Code」のラベルは付けない（再現を作る、既存の issue を探す、最新リリースで再実行、tsgo でも走らせる）
12. I read them, and some don't get filed。出さなかった 2 つのケースをカード 2 枚で見せ、それぞれ理由を書く。「Fails only on tsrs」は「Vize targets tsgo. tsrs follows TypeScript's unreleased main.」（Vize の対象はリリース済みの TypeScript 7 である tsgo。tsrs はまだリリースされていない TypeScript main の API を追っているので、tsrs だけで壊れるのは Vize の不具合ではない。`vize-report-tsgo-only.md`）。「Exits 0 when the checker can't start」は「Vize does that on purpose.」。全部を自分で読んだわけではないので every とは書かない。件数（9、2）は意味がないので出さない
13. One issue, from my app to a release。#9751 を横のタイムラインで見せる。点は 4 つ（アプリの警告、#9751 を再現付きで起票 10/19 22:07、#9759 が vize 0.486.0 で公開 10/20 09:59、警告が消える 10/20）。2 つ目から 3 つ目の点の間に括弧と「under 12 hours」（11 時間 52 分）。最後の点だけ黄色
14. Try Vize on your app. Send a small repro.（`npx vize lint` と issue ページへのリンク）

## 敵対的レビューへの対応（2026-10-26）

- 「most within a day」をやめ、「all closed as completed」と「25 fixes and 5 new features」に直した
- 速さのスライドに Oxlint のほうが lint は速いことを明記した
- Vize の説明と v4 の話は残すことにしたので、ロゴとツイートのスライドは残した。TypeScript 7 の contentMappers のスライドは外した
- Claude Code の 4 枚を 1 枚にまとめ、自分が読むことと出さなかった例を 1 枚足した
- 9 枚目の「every part」に根拠がないという指摘に、当たった箇所の内訳を出した
- 1 件の流れ（#9751）を足した
- 締めを「試すだけ」から「試して、変だったら小さな再現を送る」に直し、試すコマンドを出した
- 2 枚目の「30」は表紙と重複なので外した

## 未決

- blog の 5 件のうち #6897、#6898 は推定
- 記録のない 8 件の出どころ

## 文言とデザインの方針

- スローガン調の言い回し（「X, not Y」、三つ並べ、決め台詞）を避け、事実を平叙で書く
- 色・サイズ・余白・角丸・線幅などの値は `src/style.css` の `:root` にあるトークンだけを使う。コンポーネントもスライドもトークンを参照する
- 配色は 4 色だけを使い、どれも単色のベタ塗りにする。Royal Blue #3A2D71（文字とブロック）、Tea Pink #E9D1E1（背景とブロックの上の文字）、Yellow #F6D60D（強調）、Baby Pink #A08AC0（2 枚目の円の中間）。黄色は Tea Pink の上では文字として読めないので、文字色にはせず、マーカー（語の下半分に敷く）と影にだけ使う。Vize のロゴは元の黒のまま
- 文字は 1.75rem（28px）より小さくしない。980 × 552 のスライドで高さの約 5% にあたり、Guy Kawasaki の 10/20/30 の 30pt と同じ比率。例外は 2 枚目の円の中の番号と時間で、小さくても必ず出す
- 見出しは主張の 1 文にして（Michael Alley の Assertion-Evidence）、覚えてほしい語だけマーカーで強調する（Mayer の signaling）。話す内容をそのままスライドに書かない（redundancy）
- レイアウトを揃える。見出しは左上、根拠は見出しのすぐ下から同じ間隔（32px）で始め、スライドの下端まで使う。表は行ごとに高さを等分し、カードと入力欄は残りの高さいっぱいに伸ばして中身を上下中央に置く。上に詰まって下半分が空くことがないようにする。注意書きと出典はスライドの下端に置く。表はすべて同じ行の型（太字のラベル列、説明、右端の数字）。例外は表紙、ロゴ、締めと、形を指定した 7 枚目（ツイート）と 8 枚目（テスト段階）
