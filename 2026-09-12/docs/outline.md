# outline: AI Changed How I Work. My Disk Paid for It

想定時間: 10分 (本編8〜9分 + 導入・まとめ)

表示する文言はすべて英語。このアウトラインだけ日本語で保守する。

## 軸

単なる掃除 Tips 集ではなく、実際の調査の時系列 (発見の順) で構成する。

「.claude ディレクトリの肥大化が気になった → 調べ始めた → 実は worktree の肥大化の方が桁違いに支配的だと気づいた」という「思っていたのと違う主犯が見つかる」流れを背骨にする。

## 使う実データ

- 働き方の変化: 以前は 1 つの作業ディレクトリでブランチを切り替えていただけで、worktree は使っていなかった
- `~/dotclaude-before` (掃除前バックアップ、2026-09-02 16:49 作成): 2.5GB、projects 130 件
- 現在の `~/.claude`: 2.5GB (サイズは同じだが中身は入れ替わっている)、projects 133 件
- 業務で使用している worktree 棚卸し実例 (実行日 2026-09-02)
  - 対象: 176 worktree、合計 319.6GB
  - 削除候補 (clean かつ PR merged 確認済み): 117 件、219.45GB → 実際に削除済み
  - 個別確認 (PR 履歴なし): 30 件、38.63GB
  - 保持 (作業中): 15 件、27.91GB
  - 個別確認 (未コミット差分あり): 13 件、25.46GB
- 対比の要点: `.claude` の 2.5GB に対し worktree 側は 319.6GB で約 127 倍
- auto memory (`before-move` = 旧パスのプロジェクトディレクトリ、現行 = ghq 移行後のプロジェクトディレクトリ、いずれも同一リポジトリ)
  - `before-move`: 20 files (feedback 17 + reference 2 + MEMORY.md)、MEMORY.md は 17行 / 2.5KB
  - 現行: 118 files (feedback 102 + project 15 + MEMORY.md)、MEMORY.md は 112行 / 27.7KB
  - 112行は200行の上限未満だが、27.7KBは25KBの上限を超過。1行平均約253バイトなので、行数より先にバイト数の壁に当たる計算(概算で終盤の十数行が切れている可能性)

スライド中のパスは `app-some` / `app-other` の 2 リポジトリに簡略化してある。実データの数字は変えない。

## スライド構成

見出しは実際のスライドの文言。

### 導入 (〜1分)

- cover「AI Changed How I Work. My Disk Paid for It」
- 「One branch per issue」→ クリックで「One worktree per issue」に切り替わる。1 フォルダの中に 3 ブランチがあって動いているのは 1 つだけ、という過去の姿から、21 の issue worktree が並列で走る現在へ

### 発端 (〜1.5分)

- 「Then one day I ran du」`du -sh ~/.claude` が 2.5GB。ディスクのクリーンアップ風ダイアログで見せる
- 「What is actually in `~/.claude`」Explorer 風のツリー。transcript は作業ディレクトリごと、memory は repo ごとで worktree 間共有かつ sweep 対象外、という違いをここで示す
- 「Inside `.claude/projects/`」133 件。issue worktree ごとにディレクトリができている
- 「Except nothing was safe to delete」対応する worktree がまだ存在する限り EXISTS 判定になり、削除できるものが 0 件

### 主犯は `.claude` ではなかった (〜1.5分)

話の転換点。1 枚で完結させる。

- 見出し「I had been chasing the wrong 2.5GB」が主張
- 同じ縮尺のバー 2 本が証拠。`~/.claude` 2.5GB と 176 worktree の 319.6GB
- 127× が結論
- 締めの 1 行で「2.5GB は原因ではなく 319.6GB を映す鏡でしかなかった」と言い切る。「Three things I got wrong」の 1 つ目への伏線

### PART 1: 消していい worktree を見分ける (〜2分)

gwq の設計に沿って語る。gwq に merged 判定機能はなく、ライフサイクルは `status` / `remove -b` / `add --expires` + `prune --expired` で回す設計になっている。

- 「Ask gwq first」入口は `gwq status --filter inactive`。既定 14 日、ファイル mtime ベース。触られていないことは分かるが merged かは分からない
- 「Then ask `.claude`」cclens (lambdalisue/cclens) の `sql`。`sessions.root` は transcript の `cwd` から復元した実パスなので、worktree ごとの最終セッション日が出る。PART 2 の EXISTS/GONE 判定はこれに `test -d` を足しただけ、と後で種明かしする
- 「gwq defers to `git branch -d`」gwq の標準ルートは `gwq remove -b` = `git branch -d`。squash merge 運用だとローカルのコミットが main に含まれず、常に `not fully merged` で拒否される
- 「Who do you trust for "merged"?」forge の一次情報 `gh pr list --state merged` を根拠に選ぶ
- 「Three checks before deleting」未コミット差分 → PR 履歴 → merged だけ削除
- 「Taking stock: 176 worktrees」棚卸しの表
- 「Deleting them, and one surprise」削除コマンドとエッジケース (`File name too long`)。`--force-delete-branch` = `git branch -D` を使えるのは gh で merged を確かめたから

### PART 2: `.claude/projects` に戻る (〜1.5分)

- 「I had been cleaning in the wrong order」worktree 本体を消したあとで改めて判定するとクリックで GONE に変わり、そこで `claude project purge` が効く
- 「This is not a one-time job」バックアップ時点との差分で 11 件 purge 済み、14 件新規作成。増えた 14 件のうち 1 件はこの発表のための worktree

### PART 3: auto memory の継続メンテ (〜1分)

worktree とは別軸の話として置く。

- 「It outlives every worktree」`cleanupPeriodDays` の対象は会話履歴だけで、auto memory は自動削除されない
- 「`MEMORY.md` has a ceiling」先頭 200 行 / 25KB しか読まれない。後から追記したルールほど気づかぬうちに無効化される
- 「So you trim it by hand」手で行を削る、`autoMemoryEnabled: false` で書かせるのを止める、`claude project purge` でプロジェクトごと消す

### 締め (〜1.5分)

- 「Before / After」319.6GB → 100.15GB、削除したのは 117 件 219.45GB
- 「Three things I got wrong」教訓の押し付けにせず自分の失敗として並べる。鏡の方を掃除していた、git に merged を聞いていた、捨て時を決めていなかった
- 「And it is piling up again」このスライドを作っていた Claude Code セッションに対する `cclens doctor` の実出力。style.css を 10 分で 20 回編集して詰まった、hook に 9 回ブロックされた、`~/.claude` に未使用 surface が 13 個。自分の作業ディレクトリ以外の話は出さない
- クロージング「The way we work keeps changing」「So cleaning up is part of the job」
- 「References」
