# outline: AIによって仕事のスタイルが変わった、大掃除だ

想定時間: 10分（本編8〜9分 + 導入・まとめ）

## 軸

単なる掃除 Tips 集ではなく、実際の調査の時系列（発見の順）で構成

「.claude ディレクトリの肥大化が気になった → 調べ始めた → 実は worktree の肥大化の方が桁違いに支配的だと気づいた」という「思っていたのと違う主犯が見つかる」流れを背骨にする

## 使う実データ

- `~/dotclaude-before`（掃除前バックアップ、2026-09-02 16:49 作成）: 2.5GB、projects 130件
- 現在の `~/.claude`: 2.5GB（サイズは同じだが中身は入れ替わっている）、projects 133件
- 業務で使用している worktree 棚卸し実例（実行日 2026-09-02）
  - 対象: 176 worktree、合計 319.6GB
  - 削除候補（clean + PR merged確認済み）: 117件、219.45GB → 実際に削除済み
  - 個別確認（PR履歴なし）: 30件、38.63GB
  - 保持（作業中）: 15件、27.91GB
  - 個別確認（未コミット差分あり）: 13件、25.46GB
- 対比の要点: `.claude` の 2.5GB に対し worktree 側は 319.6GB → **約127倍**の桁違い

## スライド構成

### 導入（〜1分）

- タイトル: 「AIによって仕事のスタイルが変わった、大掃除だ」
- 働き方の変化 — 以前は手元でブランチをいくつか切る程度 → 今は issue ごとに worktree を切って Claude Code を並行稼働。これが今日の話の前提

### 発端（〜1.5分）

- ある日 `du -sh ~/.claude` を叩いたら **2.5GB** あった →「これは掃除しないと」と思った（`dotclaude-before` バックアップの実データを見せる）
- `~/.claude` の構成を Explorer 風のフォルダツリーで見せる（公式: code.claude.com/docs/en/claude-directory）。transcript は作業ディレクトリごと、memory は repo ごとで worktree 間共有、という違いをここで示す
- `.claude/projects/` の中身を見ると issue worktree ごとにディレクトリができている。本当にゴミかどうか `cwd` を見て EXISTS/GONE 判定で調べ始めた

### 主犯は `.claude` ではなかった（〜1.5分、話の転換点）

- `.claude` 側を掃除しようとしても、対応する worktree がまだ存在する限り EXISTS 判定 → 掃除が進まない
- worktree 本体を見てみたら **176 worktree / 319.6GB**。桁が違った（2.5GB の約127倍）
- `.claude` の肥大化は原因ではなく「worktree 肥大化を映す鏡」でしかなかった、という構造の転換点

### 消していい worktree を見分ける（〜2分）

- gwq の設計に沿って語る。gwq に merged 判定機能はなく、ライフサイクルは `status` / `remove -b` / `add --expires` + `prune --expired` で回す設計
- 入口は `gwq status --filter inactive`（既定 14 日、ファイル mtime ベース）。触られていないことは分かるが merged かは分からない
- `.claude` 側の一次情報として cclens（lambdalisue/cclens）の `sql`。`sessions.root` は transcript の `cwd` から復元した実パスなので、worktree ごとの最終セッション日が出る。PART 2 の EXISTS/GONE 判定はこれに `test -d` を足しただけ、と種明かしする
- gwq の標準ルートは `gwq remove -b` = `git branch -d`。squash merge 運用だとローカルのコミットが main に含まれず、常に `not fully merged` で拒否される
- だから forge の一次情報 `gh pr list --state merged` を根拠にし、その上で `--force-delete-branch`（= `git branch -D`）を使う
- 棚卸し結果の表 → 削除コマンドとエッジケース（`File name too long`）

### `.claude/projects` 掃除に戻ってくる（〜1.5分）

- worktree 本体を消したあとで改めて EXISTS/GONE 判定 → GONE になったものだけ `claude project purge`
- 実データ: バックアップ時点との差分（11件 purge 済み・14件新規作成）で「掃除は一度やって終わりではなく今も動いている」ことを見せる

### auto memory の継続メンテ（〜1分）

- これは別軸の話 — worktree とは無関係に積み上がり続け、`cleanupPeriodDays` の自動削除対象外
- `MEMORY.md` は先頭200行/25KBしか読まれない → 気づかぬうちに一部無効化される問題と、メンテ手段（手動編集・`autoMemoryEnabled`トグル・`claude project purge`）

### 締め（〜1.5分）

- Before / After
- 「反省」として自分の失敗を 3 つ並べる（教訓の押し付けにしない）
  - 鏡の方を掃除していた → worktree から消す
  - git に merged を聞いていた → `gh pr list --state merged`
  - 捨て時を決めていなかった → `gwq add --expires 7d`
- 「そして今も溜まっている」: このスライドを作っていた Claude Code セッションに対する `cclens doctor` の実出力（style.css を 10 分で 20 回編集して詰まった、hook に 9 回ブロックされた、`~/.claude` に未使用 surface が 13 個）。自分の作業ディレクトリ以外の話は出さない
- 働き方はこれからも変わる、掃除も続く仕事になる
