---
theme: default
title: AIによって仕事のスタイルが変わった、大掃除だ
info: |
  ## AIによって仕事のスタイルが変わった、大掃除だ
  2026-09-12 発表スライド

  Speaker: ナイトウコウスケ (@naitokosuke)
duration: 10min
colorSchema: light
transition: view-transition
fonts:
  mono: "Fira Code"
seoMeta:
  description: "issue ごとに worktree を切って Claude Code を並列で走らせるようになった結果、何が肥大化したのか。319.6GB の棚卸しの記録"
  author: "ナイトウコウスケ"
  ogTitle: AIによって仕事のスタイルが変わった、大掃除だ
  ogDescription: "issue ごとに worktree を切って Claude Code を並列で走らせるようになった結果、何が肥大化したのか。319.6GB の棚卸しの記録"
  ogImage: https://slides.naito.dev/2026-09-12/og-image.png
  ogUrl: https://slides.naito.dev/2026-09-12/
  ogType: website
  twitterCard: summary_large_image
  twitterSite: "@naitokosuke"
  twitterCreator: "@naitokosuke"
layout: cover
---

# AIによって仕事のスタイルが変わった、<br>大掃除だ

<footer>
  <span>2026-09-12</span>
  <span>ナイトウコウスケ / @naitokosuke</span>
</footer>

---
clicks: 1
---

## 仕事のスタイルが変わった

<WorktreeGrid />

---

## ある日、容量を見た

```bash
$ du -sh ~/.claude
2.5G    /Users/naito/.claude
```

<Win98Dialog title="ディスクのクリーンアップ" icon="drive" :buttons="['OK', 'キャンセル']">
  <code>~/.claude</code> が 2.5GB 使用しています。
</Win98Dialog>

---

## `~/.claude` の中身

<ClaudeTree />

---

## `.claude/projects/` の中身

<ProjectList />

---

## ところが、掃除が進まない

<ProjectList status />

---

## そこで worktree 側を見た

### <PixelIcon name="drive" /> 176 worktree / 319.6GB

<dl>
  <div>
    <dt>~/.claude</dt>
    <dd><meter value="2.5" max="319.6"></meter></dd>
    <dd>2.5GB</dd>
  </div>
  <div>
    <dt>worktree 全体</dt>
    <dd><meter value="319.6" max="319.6"></meter></dd>
    <dd>319.6GB</dd>
  </div>
</dl>

<small>同じ縮尺</small>

---

## 主犯は `.claude` ではなかった

<figure class="scale">
  <div class="whole">
    <div class="part"></div>
  </div>
  <figcaption>
    <PixelIcon name="mirror" />
    <strong>127 倍</strong>
    <small>■ worktree 319.6GB<br>□ ~/.claude 2.5GB</small>
  </figcaption>
</figure>

---
layout: section
---

<PixelIcon name="folder" />

# PART 1

## 消していい worktree を見分ける

---

## まず gwq に聞く

```bash
$ gwq status --filter inactive
BRANCH              STATUS      CHANGES   ACTIVITY
1234-fix-login      inactive              3 weeks ago
1301-add-export     inactive              2 months ago
```

<small>14 日触っていなければ inactive。ファイルの更新日時を見ているだけで、merged かどうかは見ていない</small>

---

## `.claude` 側にも聞く

```bash
$ cclens sql "SELECT root, COUNT(*) AS sessions, MAX(started_at) AS last
              FROM sessions GROUP BY root ORDER BY last"
```

<table>
  <thead>
    <tr><th>root</th><th>sessions</th><th>last</th></tr>
  </thead>
  <tbody>
    <tr><td>/Users/naito/src/app---12-login</td><td>3</td><td>2026-06-20</td></tr>
    <tr><td>/Users/naito/src/app---47-retry</td><td>1</td><td>2026-07-02</td></tr>
    <tr><td>/Users/naito/src/app---63-cache</td><td>8</td><td>2026-09-01</td></tr>
    <tr><td>/Users/naito/src/app---94-oauth</td><td>5</td><td>2026-09-02</td></tr>
  </tbody>
</table>

<small>transcript の cwd から復元した実パスと、最後にセッションを始めた日。gwq の mtime とは別の一次情報</small>

---

## gwq の答えは `git branch -d`

```bash
$ gwq remove -b 1234-fix-login
```

<Win98Dialog title="エラー" icon="drive" :buttons="['OK']">
  <code>not fully merged</code>
</Win98Dialog>

<small>squash merge だとローカルのコミットは main に残らない。git には merged が見えない</small>

---

## 判定の根拠

<fieldset>
  <legend>merged と言えるか</legend>
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

---

## 判定フロー

<ol>
  <li>
    <PixelIcon name="folder" />
    <p>未コミット差分</p>
    <code>gwq status --json</code>
  </li>
  <li>
    <PixelIcon name="mirror" />
    <p>PR 履歴</p>
    <code>gh pr list --state merged</code>
  </li>
  <li>
    <PixelIcon name="trash" />
    <p>merged だけ削除</p>
    <code>gwq remove -b --force-delete-branch</code>
  </li>
</ol>

---

## 176 worktree の棚卸し

<table>
  <thead>
    <tr><th>区分</th><th>件数</th><th>容量</th><th></th></tr>
  </thead>
  <tbody>
    <tr data-selected><td>削除候補（clean かつ merged 確認済み）</td><td>117</td><td>219.45GB</td><td><meter value="219.45" max="319.6"></meter></td></tr>
    <tr><td>個別確認（PR 履歴なし）</td><td>30</td><td>38.63GB</td><td><meter value="38.63" max="319.6"></meter></td></tr>
    <tr><td>保持（作業中）</td><td>15</td><td>27.91GB</td><td><meter value="27.91" max="319.6"></meter></td></tr>
    <tr><td>個別確認（未コミット差分あり）</td><td>13</td><td>25.46GB</td><td><meter value="25.46" max="319.6"></meter></td></tr>
  </tbody>
  <tfoot>
    <tr><td>合計</td><td>176</td><td>319.6GB</td><td><meter value="319.6" max="319.6"></meter></td></tr>
  </tfoot>
</table>

---

## 削除と、そのエッジケース

```bash
gwq remove -b --force-delete-branch "<branch>"
rm -rf "<path>" && gwq prune
```

<Win98Dialog title="エラー" icon="drive" :buttons="['OK']">
  <code>File name too long</code>
</Win98Dialog>

<small><code>--force-delete-branch</code> は <code>git branch -D</code>。gh で merged を確かめたから使える</small>

---
layout: section
---

<PixelIcon name="folder" />

# PART 2

## `.claude/projects` に戻る

---
clicks: 1
---

## 掃除の順番が逆だった

<ProjectList status />

```bash
claude project purge
```

<small>EXISTS / GONE は cclens の <code>root</code> に <code>test -d</code> を足しただけ</small>

---

## 掃除は一度では終わらない

<dl>
  <div>
    <dt><PixelIcon name="trash" /> purge 済み</dt>
    <dd>11 件</dd>
  </div>
  <div>
    <dt><PixelIcon name="folder" /> 新しく増えた</dt>
    <dd>14 件</dd>
  </div>
</dl>

<small>増えた 14 件のうち 1 件は、この発表のための worktree</small>

---
layout: section
---

<PixelIcon name="chip" />

# PART 3

## auto memory は別の軸で溜まる

---

## worktree とは無関係に積み上がる

<fieldset>
  <legend>cleanupPeriodDays の対象</legend>
  <div class="field-row">
    <input id="cleanup-history" type="checkbox" checked />
    <label for="cleanup-history">会話履歴</label>
  </div>
  <div class="field-row">
    <input id="cleanup-memory" type="checkbox" disabled />
    <label for="cleanup-memory">auto memory</label>
  </div>
</fieldset>

---

## `MEMORY.md` には上限がある

<MemoryLines />

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
    <strong>117 件・219.45GB</strong>
  </figcaption>
</figure>

---

## 反省

<ol>
  <li>
    <PixelIcon name="mirror" />
    <p>鏡の方を掃除していた</p>
    <code>worktree から消す</code>
  </li>
  <li>
    <PixelIcon name="drive" />
    <p>git に merged を聞いていた</p>
    <code>gh pr list --state merged</code>
  </li>
  <li>
    <PixelIcon name="chip" />
    <p>捨て時を決めていなかった</p>
    <code>gwq add --expires 7d</code>
  </li>
</ol>

---

## そして今も溜まっている

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

<small>このスライドを作っていた Claude Code のセッション</small>

---
layout: section
---

## 働き方はこれからも変わる

# 掃除も、続く仕事になる

---

## 参考

<ul>
  <li>Claude Code / メモリ <a href="https://code.claude.com/docs/en/memory">code.claude.com/docs/en/memory</a></li>
  <li>Claude Code / .claude ディレクトリ <a href="https://code.claude.com/docs/en/claude-directory">code.claude.com/docs/en/claude-directory</a></li>
  <li>Claude Code / セッション <a href="https://code.claude.com/docs/en/sessions#where-transcripts-are-stored">code.claude.com/docs/en/sessions</a></li>
  <li>cclens <a href="https://github.com/lambdalisue/cclens">github.com/lambdalisue/cclens</a> &mdash; <code>sql</code> / <code>doctor</code></li>
  <li>gwq <a href="https://github.com/d-kuro/gwq">github.com/d-kuro/gwq</a> &mdash; <code>status --filter inactive</code> / <code>remove -b</code> / <code>add --expires</code> / <code>prune --expired</code></li>
</ul>
