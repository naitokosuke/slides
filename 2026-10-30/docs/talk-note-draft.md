# talk note draft: How I Contributed to Vize

5 分の LT で話す原稿の下書き。
スライドの文言は英語のまま、話すのは日本語にする。
スライドに書いてあることを読み上げず、書いていないことを足す (outline の redundancy の方針)。
`>` の行は話さない、動きのための覚え書き。

## 時間配分

全 15 枚、約 1600 字で 300 秒。
1 分におよそ 330 字 (1 秒に 5.5 字) で話す前提で、各スライドの秒数を原稿の長さから決めた。
3 枚目はロゴが止まるまで、12 枚目はプロンプトが打ち込まれるまでの間を足してある。

| 枚目 | スライド                     | 字数 | 秒  | 終わる時刻 |
| ---- | ---------------------------- | ---- | --- | ---------- |
| 1    | 表紙                         | 52   | 10  | 0:10       |
| 2    | 30 issues                    | 91   | 17  | 0:27       |
| 3    | Vize のロゴ                  | 79   | 16  | 0:43       |
| 4    | guardrails                   | 114  | 21  | 1:04       |
| 5    | fast                         | 134  | 25  | 1:29       |
| 6    | know Vue                     | 107  | 20  | 1:49       |
| 7    | type-checks Vue              | 141  | 25  | 2:14       |
| 8    | Vue Language Tools v4        | 101  | 19  | 2:33       |
| 9    | still being tested           | 88   | 16  | 2:49       |
| 10   | side projects                | 89   | 17  | 3:06       |
| 11   | five parts of Vize           | 97   | 18  | 3:24       |
| 12   | Claude Code does the legwork | 111  | 23  | 3:47       |
| 13   | don't get filed              | 128  | 24  | 4:11       |
| 14   | from my app to a release     | 137  | 25  | 4:36       |
| 15   | 締め                         | 128  | 24  | 5:00       |

## 1 枚目: 表紙

naitokosuke です。
今日は、6 月から 10 月までに Vize へ 30 件の issue を出した話をします。

## 2 枚目: 30 issues, all closed as completed

出した 30 件は、全部 completed で閉じてもらいました。
25 件が不具合の修正、5 件が新しい機能です。
円が大きいほど早く直ったもので、いちばん早いものは起票から 56 分で閉じました。

## 3 枚目: Vize のロゴ

> ロゴが止まるのを待ってから話し始める (フェード 0.5 秒と動き 0.85 秒)。

Vize は、ubugeeei さんが作っている Rust 製の Vue のツールチェーンです。
コンパイラ、フォーマッタ、リンタ、型チェッカーまで、ひとつに入っています。

## 4 枚目: I vibe-code, so I need guardrails

なぜ使うのか。
僕はバイブコーディングで書くので、ガードレールが欲しいんです。
Vize のブログにあるとおり、モデルはそれらしい続きを予測するだけで、守るべき決まりを守ってはくれません。
だから、毎回同じ結果を返す静的解析で止めたい。

## 5 枚目: Guardrails have to be fast

ガードレールは、速くないと回し続けられません。
lint は eslint-plugin-vue の 182 倍、型チェックは vue-tsc v3 の 4.9 倍。
フォーマットは手元で測って Oxfmt の 50 倍でした。
Oxlint は lint がもっと速いですが、見るのは script だけです。

## 6 枚目: The rules have to know Vue

もう 1 つ、ルールが Vue を分かっていてほしい。
テンプレート、props、slots、アクセシビリティ、SSR や Vapor まで、lint のルールは全部で 266 個あります。
どれも `vize explain` で説明が読めます。

## 7 枚目: It type-checks Vue on TypeScript 7

lint だけでなく、型チェックもできます。
`vize check` は TypeScript 7 のネイティブのチェッカーで動いて、vue-tsc は要りません。
TypeScript 7.1 からは Vize の content mapper で tsc が `.vue` を直接読めて、tsrs でも同じように検査できます。

## 8 枚目: Vue Language Tools v4 takes the same path

> ツイートの埋め込みなので、会場のネット接続が要る。

Vue Language Tools の v4 alpha も、content mapper で tsc に `.vue` を読ませる道を選びました。
Vize が進んでいる方向は、Vue の型チェック全体が向かっている方向と同じです。

## 9 枚目: It's still being tested

ただ、Vize はまだテストの段階です。
ブログでは Real World Testing と呼んでいて、実際のプロジェクトで使いながら直していく段階です。
僕はそこが面白いと思っています。

## 10 枚目: I run Vize on my side projects

なので、趣味のプロジェクトで使っています。
lint は 7 つ、型チェックは 5 つのプロジェクトで回していて、ビルドやフォーマット、コンポーネントのカタログの Musea でも使っています。

## 11 枚目: My issues hit five parts of Vize

使っていると、いろいろなところに当たります。
30 件のうち半分の 15 件が lint で、ビルドが 7 件、エディタが 4 件、型チェックが 3 件、Musea が 1 件でした。
フォーマットには 1 件も当たっていません。

## 12 枚目: Claude Code does the legwork

> プロンプトが打ち込まれていく間に話す。

出し方です。
下調べは Claude Code に任せています。
アプリのコードを含まない最小の再現を作る、既存の issue がないか探す、最新のリリースでもう一度試す、tsrs だけでなく tsgo でも試す。
この 4 つを毎回頼んでいます。

## 13 枚目: I read them, and some don't get filed

ただし、出す前に自分で読みます。
読んで、出さなかったものもあります。
tsrs でだけ壊れるものは出しません。Vize が対象にしているのはリリース済みの tsgo だからです。
型チェッカーが起動できないときに 0 で終わるのも、Vize が意図してやっている動きでした。

## 14 枚目: One issue, from my app to a release

1 件だけ、流れを見せます。
アプリで、hidden を付けた入力欄にラベルがないという警告が出ていました。
10 月 19 日の夜 10 時に再現付きで #9751 を出したら、翌朝 10 時前には修正が vize 0.486.0 で公開されて、その日のうちに警告が消えました。
12 時間かかっていません。

## 15 枚目: Try Vize on your app. Send a small repro.

Vize は今、実際のアプリで使われることで良くなっていく段階です。
`npx vize lint --preset opinionated` で試してみて、変だと思ったら小さな再現を送ってください。
それがそのまま contribution になります。
ありがとうございました。

## 話す前に確かめること

- 8 枚目のツイートが会場のネットで読み込めるか。読み込めないときは「Vue Language Tools の v4 alpha も content mapper を使う」と口で補う
- 2 枚目の「56 分」は #10660 の起票から close まで (`docs/issues.md`)。話す前に issue のタイムラインで確かめる
- 14 枚目の時刻は日本時間
