---
theme: default
title: AI Changed How I Work. My Disk Paid for It
info: |
  ## AI Changed How I Work. My Disk Paid for It

  I started cutting a worktree per issue and running Claude Code in parallel.
  Here is what quietly grew to 319.6GB, and how I cleaned it up.

  Speaker: [@naitokosuke](https://twitter.com/naitokosuke)
duration: 10min
colorSchema: light
transition: view-transition
fonts:
  mono: "Fira Code"
seoMeta:
  description: "I started cutting a worktree per issue and running Claude Code in parallel. Here is what quietly grew to 319.6GB, and how I cleaned it up"
  author: "Kosuke Naito"
  ogTitle: AI Changed How I Work. My Disk Paid for It
  ogDescription: "I started cutting a worktree per issue and running Claude Code in parallel. Here is what quietly grew to 319.6GB, and how I cleaned it up"
  ogImage: https://slides.naito.dev/2026-09-12/og-image.png
  ogUrl: https://slides.naito.dev/2026-09-12/
  ogType: website
  twitterCard: summary_large_image
  twitterSite: "@naitokosuke"
  twitterCreator: "@naitokosuke"
layout: cover
---

---

# Hi

<!--
- こんにちは、naito です
- 今日は「AI に合わせて働き方を変えたら、その代金をディスクが払っていた」という話をします
-->

---

# AI Changed How I Work.<br>My Disk Paid for It

<footer>
  <span><a href="https://twitter.com/naitokosuke">@naitokosuke</a></span>
</footer>

<!--
- タイトルはこのままの意味です
- 働き方を AI に合わせて変えた結果、ディスクが 319.6GB 払っていた話をします
-->

---

<QrCode url="https://slides.naito.dev/2026-09-12/1" label="slides.naito.dev/2026-09-12" />

<!--
- スライドはこの QR から開けます
- 手元で見たい人はどうぞ
-->

---

<QrCode
  url="https://claude.com/blog/the-new-rules-of-context-engineering-for-claude-5-generation-models"
  label="The new rules of context engineering"
/>

<!--
- そしてもう一枚、今日の話のきっかけになった Anthropic の記事です
- あとで 2 回出てくるので、先に撮っておいてください
-->

---
clicks: 1
---

## <span v-if="$clicks">One worktree per issue</span><span v-else>One branch per issue</span>

<WorktreeGrid />

<!--
- 少し前まで、私は 1 つの作業ディレクトリでブランチを切り替えるだけでした
- ブランチが何本あっても、動いているのは常に 1 つ
- [click] 今は issue ごとに worktree を切って、その上で Claude Code を並列に走らせています
- 画面にあるのは実際に並んでいた 21 個の issue worktree です
- この変化が今日の話の前提になります
-->

---

## Somewhere I'd read this

<div class="tip-body">
  <div class="dialog-wrap">
    <Win98Dialog title="Tip of the Day" icon="chip" :buttons="['Next Tip', 'Close']">
      Review your agent's skills and rules. Regularly.
    </Win98Dialog>
  </div>
  <small class="evidence">
    <a href="https://x.com/MyWestLord/status/2082855525956415987">https://x.com/MyWestLord/status/2082855525956415987</a>
  </small>
</div>

<style>
.tip-body {
  flex: 1;
  display: grid;
  grid-template-rows: 1fr auto;

  .dialog-wrap {
    display: grid;
    place-items: center;
  }

  .evidence {
    justify-self: end;
  }

  :deep(.window-body) {
    padding-top: var(--space-8);
    padding-bottom: var(--space-7);
    gap: var(--space-7);

    > img {
      width: var(--icon-xl);
      height: var(--icon-xl);
    }

    > p {
      font-size: var(--text-lg);
    }
  }

  :deep(footer) {
    padding-top: var(--space-6);
    padding-bottom: var(--space-6);
  }
}
</style>

<!--
- きっかけは自分の思いつきではなく、他人のポストでした
- エージェントの skill と rule は定期的に見直せ、と
- 言われてみると、私は書きっぱなしでした
-->

---

## And then Anthropic deleted 80% of theirs

<figure>
  <PixelIcon name="chip" />
  <figcaption>
    <strong>&minus;80%</strong>
    <span>of Claude Code's own system prompt, with no drop in quality on Claude 5 generation models</span>
  </figcaption>
</figure>

<small><a href="https://claude.com/blog/the-new-rules-of-context-engineering-for-claude-5-generation-models">The new rules of context engineering for Claude 5 generation models</a></small>

<!--
- その少しあとに、Anthropic が Claude Code 自身のシステムプロンプトを 8 割削ったと書いていました
- それで品質は落ちていない
- だったら私の手元にも削れる行があるはずです
-->

---

## The rules for writing rules changed

<table class="then-now">
  <thead>
    <tr><th>Then</th><th>Now</th></tr>
  </thead>
  <tbody>
    <tr><td>Give Claude explicit rules</td><td>Let Claude use judgement</td></tr>
    <tr><td>Load every bit of context up front</td><td>Progressive disclosure</td></tr>
    <tr><td>Repeat the instruction everywhere</td><td>Say it once, where it is used</td></tr>
    <tr><td>Write memories into <code>CLAUDE.md</code> by hand</td><td>auto memory</td></tr>
  </tbody>
</table>

<small>Every line I wrote for an older model is still sitting there, read on every turn</small>

<style>
.then-now {
  font-size: var(--text-sm);

  thead th:last-child {
    text-align: right;
  }
}
</style>

<!--
- ルールの書き方の前提そのものが変わっています
- 明示的に指示するのではなく判断に任せる
- 前もって全部積むのではなく、必要なときに開く
- あちこちで繰り返すのではなく、使う場所で一度だけ言う
- そして手書きの CLAUDE.md ではなく auto memory
- 古いモデルのために書いた行が、今も毎ターン読まれ続けています
-->

---

## So I went to read what I had piled up

<fieldset>
  <legend>Up for review</legend>
  <div class="field-row">
    <input id="review-rules" type="checkbox" checked />
    <label for="review-rules">Rules and skills I wrote for an older model</label>
  </div>
  <div class="field-row">
    <input id="review-memory" type="checkbox" checked />
    <label for="review-memory">Memories the agent had written for itself</label>
  </div>
</fieldset>

<small>I opened <code>~/.claude</code> to read it. I never got that far</small>

<!--
- 読み直す対象は 2 つありました
- 自分が書いた rule と skill、そしてエージェントが自分のために書いた memory
- 読むだけのつもりで `~/.claude` を開きました
- そこまで行き着きませんでした
-->

---

## Then, I ran du

```bash
$ du -sh ~/.claude
2.5G    /Users/naito/.claude
```

<Win98Dialog title="Disk Cleanup" icon="drive" :buttons="['OK', 'Cancel']">
  <code>~/.claude</code> is using 2.5GB.
</Win98Dialog>

<!--
- 先に `du` を叩いてしまったからです
- 2.5GB
- 何を読むかより、なぜこの大きさなのかが気になりました
-->

---

## What is actually in `~/.claude`

<ClaudeTree />

<!--
- 中を見ると、性質の違うものが同居しています
- transcript は作業ディレクトリごとに積まれ、`cleanupPeriodDays` で消えていきます
- memory はリポジトリごとで、worktree 間で共有され、自動削除の対象外です
-->

---

## Inside `.claude/projects/`

<ProjectList />

<!--
- projects の中は 133 件
- issue ごとに worktree を切っているので、worktree の数だけディレクトリが増えます
-->

---

## Except nothing was safe to delete

<ProjectList status />

<!--
- ところが、消せるものが 1 件もありません
- 対応する worktree がまだ残っている限り、その記録は現役だからです
-->

---

## I had been chasing the wrong 2.5GB

<dl>
  <div>
    <dt>~/.claude</dt>
    <dd><meter value="2.5" max="319.6"></meter></dd>
    <dd>2.5GB</dd>
  </div>
  <div>
    <dt>176 worktrees</dt>
    <dd><meter value="319.6" max="319.6"></meter></dd>
    <dd>319.6GB</dd>
  </div>
</dl>

<figure>
  <PixelIcon name="drive" />
  <figcaption>
    <strong>127&times;</strong>
  </figcaption>
</figure>

<small>The 2.5GB was never the cause. It was a mirror of the 319.6GB</small>

<!--
- ここで気付きました
- 消せない理由が worktree の存在なら、見るべきは worktree の側です
- 同じ縮尺で並べます
- `~/.claude` が 2.5GB、そのとき手元にあった 176 worktree が 319.6GB
- 127 倍
- 2.5GB は原因ではなく、319.6GB を映した鏡でした
-->

---
layout: section
---

<PixelIcon name="folder" />

## Which worktrees are safe to delete?

<!--
- ここから、消していい worktree をどう見分けたかの話です
-->

---

## Ask gwq first

```bash
$ gwq status --filter inactive
BRANCH              STATUS      CHANGES   ACTIVITY
1234-fix-login      inactive              3 weeks ago
1301-add-export     inactive              2 months ago
```

<small>Inactive only means nothing has touched the files for 14 days. It says nothing about whether the branch ever merged</small>

<!--
- worktree の管理には gwq を使っています
- まず `gwq status --filter inactive`
- 既定は 14 日、ファイルの mtime で見ます
- 触っていないことは分かりますが、merge 済みかは分かりません
-->

---

## Then ask `.claude`

```bash
$ cclens sql "SELECT root, COUNT(*) AS sessions, MAX(started_at) AS last
              FROM sessions GROUP BY root ORDER BY last"
```

<table>
  <thead>
    <tr><th>root</th><th>sessions</th><th>last</th></tr>
  </thead>
  <tbody>
    <tr><td>~/src/app-some---12-login</td><td>3</td><td>2026-06-20</td></tr>
    <tr><td>~/src/app-some---47-retry</td><td>1</td><td>2026-07-02</td></tr>
    <tr><td>~/src/app-other---63-cache</td><td>8</td><td>2026-09-01</td></tr>
    <tr><td>~/src/app-some---94-oauth</td><td>5</td><td>2026-09-02</td></tr>
  </tbody>
</table>

<small>The real path from each transcript's cwd, and the last day I worked there. A second opinion, independent of file mtime</small>

<!--
- もう一つの物差しが `.claude` 側にありました
- cclens の `sql` です
- `sessions.root` は transcript の cwd から復元した実パスなので、worktree ごとの最終セッション日が出ます
- mtime とは独立した second opinion として使えます
-->

---

## What is `cclens`?

<figure>
  <PixelIcon name="mirror" />
  <figcaption>
    <strong>A lens on <code>~/.claude</code></strong>
    <span>It reads session transcripts and live config into a local SQLite store. The store is incremental and it outlives the transcripts it was built from. Nothing leaves the machine</span>
  </figcaption>
</figure>

<ul>
  <li><code>cclens doctor</code> &mdash; one screen of findings: recurring tool failures, stuck points, config nobody uses</li>
  <li><code>cclens sql</code> &mdash; read-only SQL against that store, for the questions <code>doctor</code> does not ask</li>
</ul>

<small><a href="https://github.com/lambdalisue/cclens">https://github.com/lambdalisue/cclens</a></small>

<!--
- ここで cclens を紹介しておきます
- transcript と設定をローカルの SQLite に取り込むツールです
- 取り込みは差分で、transcript が消えても store は残ります
- `doctor` が一画面の所見を出し、`sql` はその store に読み取り専用で問い合わせます
- 外には何も出ません
-->

---

## gwq defers to `git branch -d`

```bash
$ gwq remove -b 1234-fix-login
```

<Win98Dialog title="Error" icon="drive" :buttons="['OK']">
  <code>not fully merged</code>
</Win98Dialog>

<small>With squash merges the local commits never reach main, so git never sees the merge</small>

<!--
- 削除に戻ります
- gwq の標準ルートは `gwq remove -b`、中身は `git branch -d` です
- ところが squash merge の運用では、ローカルのコミットは main に入りません
- なので git は永遠に not fully merged と言い続けます
-->

---

## Who do you trust for "merged"?

<fieldset>
  <legend>Can you call it merged?</legend>
  <div class="field-row">
    <input id="judge-d" type="radio" name="judge" disabled />
    <label for="judge-d"><code>gwq remove -b</code> = <code>git branch -d</code></label>
  </div>
  <div class="field-row">
    <input id="judge-merged" type="radio" name="judge" disabled />
    <label for="judge-merged"><code>git branch --merged</code></label>
  </div>
  <div class="field-row">
    <input id="judge-pr" type="radio" name="judge" checked />
    <label for="judge-pr"><code>gh pr list --state merged</code></label>
  </div>
</fieldset>

<!--
- merged かどうかを誰に聞くかという問題です
- `git branch -d` も `git branch --merged` も、squash merge には答えられません
- forge の一次情報、`gh pr list --state merged` に聞きます
-->

---

## Three checks before deleting

<ol>
  <li>
    <PixelIcon name="folder" />
    <p>Uncommitted work</p>
    <code>gwq status --json</code>
  </li>
  <li>
    <PixelIcon name="mirror" />
    <p>PR history</p>
    <code>gh pr list --state merged</code>
  </li>
  <li>
    <PixelIcon name="trash" />
    <p>Delete only what merged</p>
    <code>gwq remove -b --force-delete-branch</code>
  </li>
</ol>

<!--
- 順番はこの 3 つです
- 未コミットの差分がないか
- PR の履歴があるか
- merged と確認できたものだけ消す
-->

---

## Taking stock: 176 worktrees

<table>
  <thead>
    <tr><th>Verdict</th><th>Count</th><th>Size</th><th></th></tr>
  </thead>
  <tbody>
    <tr data-selected><td>Safe to delete (clean and merged)</td><td>117</td><td>219.45GB</td><td><meter value="219.45" max="319.6"></meter></td></tr>
    <tr><td>Needs a look (no PR history)</td><td>30</td><td>38.63GB</td><td><meter value="38.63" max="319.6"></meter></td></tr>
    <tr><td>Keep (still working on it)</td><td>15</td><td>27.91GB</td><td><meter value="27.91" max="319.6"></meter></td></tr>
    <tr><td>Needs a look (uncommitted work)</td><td>13</td><td>25.46GB</td><td><meter value="25.46" max="319.6"></meter></td></tr>
  </tbody>
  <tfoot>
    <tr><td>Total</td><td>176</td><td>319.6GB</td><td><meter value="319.6" max="319.6"></meter></td></tr>
  </tfoot>
</table>

<!--
- 実際の棚卸しです
- clean かつ merged 確認済みが 117 件で 219.45GB
- PR 履歴がなく個別確認が 30 件
- 作業中で保持が 15 件
- 未コミットの差分ありが 13 件
-->

---

## Deleting them, and one surprise

```bash
gwq remove -b --force-delete-branch "<branch>"
rm -rf "<path>" && gwq prune
```

<Win98Dialog title="Error" icon="drive" :buttons="['OK']">
  <code>File name too long</code>
</Win98Dialog>

<small><code>--force-delete-branch</code> is <code>git branch -D</code>. I only reach for it because gh already confirmed the merge</small>

<!--
- 削除は remove と prune です
- 1 つ引っかかったのが File name too long
- `--force-delete-branch` は `git branch -D` なので本来は怖い
- gh で merged を確かめてあるから使えます
-->

---
layout: section
---

<PixelIcon name="folder" />

## Back to `.claude/projects`

<!--
- worktree を消したので、最初の話に戻ります
-->

---
clicks: 1
---

## I had been cleaning in the wrong order

<ProjectList status />

```bash
claude project purge
```

<small>EXISTS / GONE is nothing clever. It is cclens's <code>root</code> plus a <code>test -d</code></small>

<!--
- worktree の本体を消したあとに、もう一度 projects を見ます
- [click] EXISTS だったものが GONE に変わり、ここで `claude project purge` が効きます
- 順番が逆だっただけでした
- この EXISTS と GONE の判定は、さっきの cclens の root に `test -d` を足しただけです
-->

---

## This is not a one-time job

<dl>
  <div>
    <dt><PixelIcon name="trash" /> Purged</dt>
    <dd>11</dd>
  </div>
  <div>
    <dt><PixelIcon name="folder" /> Newly created</dt>
    <dd>14</dd>
  </div>
</dl>

<small>One of those 14 is the worktree for this talk</small>

<!--
- 一度やって終わりでもありません
- バックアップ時点と比べると、11 件 purge した一方で、14 件が新しくできていました
- 増えた 14 件のうち 1 件は、この発表のために切った worktree です
-->

---
layout: section
---

<PixelIcon name="chip" />

## auto memory grows on its own axis

<!--
- ここから、worktree とは別の軸の話をします
-->

---

## I found the remains of an old directory too

```bash
$ ls ~/.claude/.../
before-move/app-some/memory
app-some/memory
```

<small>
  Two projects, one repo.

  <br />
  <code>before-move</code> hasn't existed since I moved to ghq + gwq, but its <code>memory/</code> still has 20 files
</small>

<!--
- projects を眺めていて、もう存在しないディレクトリの残骸を見つけました
- ghq に移す前のパスです
- 本体はないのに、memory だけ 20 ファイル残っていました
-->

---

## It outlives every worktree

<fieldset>
  <legend>What cleanupPeriodDays covers</legend>
  <div class="field-row">
    <input id="cleanup-history" type="checkbox" checked />
    <label for="cleanup-history">Conversation history</label>
  </div>
  <div class="field-row">
    <input id="cleanup-memory" type="checkbox" disabled />
    <label for="cleanup-memory">auto memory</label>
  </div>
</fieldset>

<!--
- `cleanupPeriodDays` が面倒を見るのは会話履歴だけです
- auto memory は対象外で、worktree より長く生き残ります
-->

---

## `MEMORY.md` is the index

```text
~/.claude/projects/<project>/memory/
├── MEMORY.md      # index, one line per memory
├── feedback_*.md  # one memory
├── project_*.md   # one memory
└── ...
```

<small>&ldquo;MEMORY.md acts as an index of the memory directory&rdquo; &mdash; <a href="https://code.claude.com/docs/en/memory">code.claude.com/docs/en/memory</a></small>

<!--
- memory ディレクトリの入口は `MEMORY.md` です
- memory 1 件につき 1 行の索引になっています
-->

---

## `MEMORY.md` has a ceiling

<MemoryLines />

<small>112 lines, 27.7KB &mdash; under the 200-line cap, already past the 25KB one</small>

<!--
- その索引には上限があります
- 読まれるのは先頭 200 行、25KB まで
- 私のは 112 行で 27.7KB
- 行数には余裕があるのに、バイト数は超えています
- つまり後から書いた行ほど、気付かないまま読まれていません
-->

---
layout: section
---

<PixelIcon name="chip" />

## Here's the whole list

<!--
- 何が溜まっていたのか、全部出します
-->

---

<MemoryWall :items="[
  'Query Sentry directly, don\'t guess a URL',
  'ADRs: only real decisions',
  'Adversarial review before calling it best',
  'Agent prompts: direct, imperative',
]" />

<!--
- 読み上げません
- 1 枚 1 秒強で流す
- 毎ターン読まれているのがこの量だと見てもらえれば十分です
-->

---

<MemoryWall :items="[
  'Answer only what\'s asked',
  'Check child tasks before porting',
  'Confirm before acting on scope',
  'Correct means edit in place',
]" />

---

<MemoryWall :items="[
  'Pure CSS only',
  'A memo scopes to investigation only',
  'Discuss before forcing a choice',
  'Docs are a contract, not fact',
]" />

---

<MemoryWall :items="[
  'Don\'t drop content over branch gaps',
  'Don\'t idle-wait, keep working',
  'Don\'t satisfy reviews superficially',
  'Enrich the ticket, not a local memo',
]" />

---

<MemoryWall :items="[
  'Exclusion needs inclusion\'s rigor',
  'Use headings in tracker comments',
  'Tracker markdown needs a trailing backslash',
  'Reply in-thread, not a new comment',
]" />

---

<MemoryWall :items="[
  'Verify files before grouping',
  'Notes: no summaries, no negatives',
  'No progress meta in ticket text',
  'Locate by query, not by guess',
]" />

---

<MemoryWall :items="[
  'Match an existing list\'s terseness',
  'A shared memo folder is write-only',
  'Verify the dev build before merging',
  'Minimal code comments',
]" />

---

<MemoryWall :items="[
  'Minimize character count',
  'Fill placeholders from the diff',
  'No trivia in change descriptions',
  'A notes folder isn\'t a WIP fallback',
]" />

---

<MemoryWall :items="[
  'A notes folder isn\'t for the team',
  'Never fabricate tool results',
  'No unprompted at-mentions',
  'Don\'t iterate reviews on your own',
]" />

---

<MemoryWall :items="[
  'Re-explain fully, don\'t just point back',
  'No re-confirming after just act',
  'After pushing, check CI yourself',
  'Exclude debug code without asking',
]" />

---

<MemoryWall :items="[
  'No praising the user\'s own input',
  'Don\'t drop a feature for green CI',
  'No file:line refs in docs',
  'No flip-flopping',
]" />

---

<MemoryWall :items="[
  'No force-push',
  'No invented abstractions or fake choices',
  'No jargon',
  'No stiff formality in tracker comments',
]" />

---

<MemoryWall :items="[
  'No trailing periods in short text',
  'No language-specific jargon',
  'No lies',
  'No meaningless labels',
]" />

---

<MemoryWall :items="[
  'No meta fluff in docs',
  'No meta narrative in prompts',
  'No mocking without permission',
  'No unexplained internal abbreviations',
]" />

---

<MemoryWall :items="[
  'No self-mentions in a design talk',
  'No personal paths baked into code',
  'No numbered lists for short updates',
  'Don\'t hardcode a busy dev port',
]" />

---

<MemoryWall :items="[
  'No progress notes in code',
  'No pushing without being asked',
  'Don\'t reload a page mid-score',
  'Don\'t repeat template variations',
]" />

---

<MemoryWall :items="[
  'Verify side effects with a dry run',
  'Skills shouldn\'t reference each other',
  'Skip TDD ritual for a clear fix',
  'No unilateral prerequisite actions',
]" />

---

<MemoryWall :items="[
  'No unprompted tracker comments',
  'No unprompted ticket creation',
  'No unrequested browser navigation',
  'No unrequested title edits',
]" />

---

<MemoryWall :items="[
  'No unrequested worktree changes',
  'No vacuous precondition asserts',
  'No UI library, write it plain',
  'An operation needs no caller context',
]" />

---

<MemoryWall :items="[
  'A plan is a statement, not an order',
  'Port from the real merge branch',
  'No fabricated artifacts in a port',
  'A port invents no prerequisites',
]" />

---

<MemoryWall :items="[
  'A pure file list needs no caption',
  'A refactor branch can lead main',
  'Escaping matters in regex replacement',
  'Define symptom and data first',
]" />

---

<MemoryWall :items="[
  'Respond first, then keep working',
  'Run the formatter before pushing',
  'Semantic HTML',
  'Link a blocker, don\'t just comment',
]" />

---

<MemoryWall :items="[
  'A skill counts once it\'s deployed',
  'Splitting a ticket means summarizing its parent',
  'Split scope creep into its own ticket',
  'Use formal language when expected',
]" />

---

<MemoryWall :items="[
  'Use the project\'s own CLI wrapper',
  'An explicit format beats a skill default',
  'Verify a command before running it',
  'Verify UI fixes in the browser',
]" />

---

<MemoryWall :items="[
  'Verify via exit code, not output',
  'Baking a prop into a const loses reactivity',
  'A setup script needs no export',
  'Wait for one tool call at a time',
]" />

---

<MemoryWall :items="[
  'Watch events instead of polling',
  'Don\'t force direction on someone\'s WIP',
  'One ticket, one change, no child tasks',
  'A CDN script import needed a workaround',
]" />

---

<MemoryWall :items="[
  'A cached component\'s hook stopped firing',
  'Surveyed every cached-component usage',
  'A stale cache showed old content',
  'A GraphQL client is being phased out',
]" />

---

<MemoryWall :items="[
  'Commit messages: English, not Japanese',
  'A personal sandbox has limits on its use',
  'A migration branch will become main',
  'A framework migration\'s branch strategy',
]" />

---

<MemoryWall :items="[
  'Type-check scope for the migration branch',
  'A router plugin fires after first navigation',
  'What was burning the error-tracking quota',
  'Context needed when a session finishes',
]" />

---

## So you trim it by hand

<ol>
  <li>
    <PixelIcon name="file" />
    <p>Cut lines</p>
    <code>edit MEMORY.md</code>
  </li>
  <li>
    <PixelIcon name="chip" />
    <p>Stop writing more</p>
    <code>autoMemoryEnabled: false</code>
  </li>
  <li>
    <PixelIcon name="trash" />
    <p>Drop the whole project</p>
    <code>claude project purge</code>
  </li>
</ol>

<small>Nothing expires it for you, so it has to be on your list</small>

<!--
- 減らし方は手作業です
- 行を削る
- `autoMemoryEnabled: false` で書かせるのを止める
- プロジェクトごと `claude project purge` で消す
-->

---

## Some of it is tomorrow's noise

<fieldset>
  <legend>Worth the space in MEMORY.md?</legend>
  <div class="field-row">
    <input id="keep-pref" type="radio" name="keep-check" checked />
    <label for="keep-pref">A preference the model can't infer on its own</label>
  </div>
  <div class="field-row">
    <input id="keep-gap" type="radio" name="keep-check" disabled />
    <label for="keep-gap">A gap this model has, the next one won't</label>
  </div>
</fieldset>

<small>The second kind is noise waiting for a model upgrade to happen</small>

<!--
- 削る基準として、私は 2 種類に分けました
- モデルが自力で推測できない自分の好みは残します
- 今のモデルの弱点を埋めるための指示は、次のモデルが来た時点でノイズになります
-->

---

## 44 of them, gone

<dl>
  <div>
    <dt>Before</dt>
    <dd><meter value="117" max="117"></meter></dd>
    <dd>117 memories</dd>
  </div>
  <div>
    <dt>After</dt>
    <dd><meter value="73" max="117"></meter></dd>
    <dd>73 memories</dd>
  </div>
</dl>

<small>Nowhere near the worktree scale &mdash; but <code>MEMORY.md</code> went from 112 lines / 27.7KB back under both caps, to 72 lines / 17.4KB</small>

<!--
- 結果、117 件から 73 件になりました
- `MEMORY.md` は 72 行 17.4KB で、両方の上限の下に戻っています
- worktree とは規模が比べようもないですが、こちらは読まれる行が増えるという形で効きます
-->

---

## Before / After

<dl>
  <div>
    <dt>Before</dt>
    <dd><meter value="319.6" max="319.6"></meter></dd>
    <dd>319.6GB</dd>
  </div>
  <div>
    <dt>After</dt>
    <dd><meter value="100.15" max="319.6"></meter></dd>
    <dd>100.15GB</dd>
  </div>
  <div>
    <dt>~/.claude</dt>
    <dd><meter value="2.5" max="319.6"></meter></dd>
    <dd>2.5GB</dd>
  </div>
</dl>

<figure>
  <PixelIcon name="trash" />
  <figcaption>
    <strong>117 worktrees &middot; 219.45GB</strong>
  </figcaption>
</figure>

<!--
- 全体では 319.6GB から 100.15GB
- 削除したのは 117 worktree、219.45GB
- `~/.claude` の 2.5GB はほぼそのままです
-->

---

## Three things I got wrong

<ol>
  <li>
    <PixelIcon name="mirror" />
    <p>I cleaned the mirror</p>
    <code>delete the worktree</code>
  </li>
  <li>
    <PixelIcon name="drive" />
    <p>I asked git about merges</p>
    <code>gh pr list --state merged</code>
  </li>
  <li>
    <PixelIcon name="chip" />
    <p>I never set an expiry</p>
    <code>gwq add --expires 7d</code>
  </li>
</ol>

<!--
- 間違っていたのは 3 つでした
- 鏡の方を掃除していた
- merged を git に聞いていた
- 捨て時を決めていなかった、`gwq add --expires` を最初から使えばよかった
-->

---

## And it is piling up again

```text
$ cclens doctor

WHAT TO FIX FIRST
  1. In ~/src/github.com/naitokosuke/slides---40-2026-09-12, 13 tool calls failed in recurring ways:
        9× blocked-by-hook — a habit keeps hitting a rule/hook
        4× path-not-found — paths are being guessed wrong
     …and Claude got stuck re-editing style.css (20 edits in 10m).

CONFIG WORTH PRUNING
  ~/.claude: 13 surfaces installed but never used
```

<small>From the Claude Code session that built these slides</small>

<!--
- 最後に、このスライドを作っていたセッションに `cclens doctor` をかけた出力です
- hook に 9 回ブロックされ、style.css を 10 分で 20 回編集して詰まっています
- `~/.claude` には使っていない surface が 13 個
- 掃除の話をしながら、また積んでいます
-->

---
layout: section
---

## The way we work keeps changing

# So cleaning up is part of the job

<!--
- 働き方は変わり続けます
- だから掃除は仕事の一部です
-->

---

## References

<ul>
  <li>Claude Code / Memory <a href="https://code.claude.com/docs/en/memory">code.claude.com/docs/en/memory</a></li>
  <li>Claude Code / .claude directory <a href="https://code.claude.com/docs/en/claude-directory">code.claude.com/docs/en/claude-directory</a></li>
  <li>Claude Code / Sessions <a href="https://code.claude.com/docs/en/sessions#where-transcripts-are-stored">code.claude.com/docs/en/sessions</a></li>
  <li>The new rules of context engineering for Claude 5 generation models <a href="https://claude.com/blog/the-new-rules-of-context-engineering-for-claude-5-generation-models">claude.com/blog</a></li>
  <li>cclens <a href="https://github.com/lambdalisue/cclens">github.com/lambdalisue/cclens</a> &mdash; <code>sql</code> / <code>doctor</code></li>
  <li>gwq <a href="https://github.com/d-kuro/gwq">github.com/d-kuro/gwq</a> &mdash; <code>status --filter inactive</code> / <code>remove -b</code> / <code>add --expires</code> / <code>prune --expired</code></li>
</ul>

<!--
- 参照はスライドに置いてあります
- 以上です
-->
