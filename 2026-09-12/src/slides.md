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

---

# AI Changed How I Work.<br>My Disk Paid for It

<footer>
  <span><a href="https://twitter.com/naitokosuke">@naitokosuke</a></span>
</footer>

---
clicks: 1
---

## <span v-if="$clicks">One worktree per issue</span><span v-else>One branch per issue</span>

<WorktreeGrid />

---

## Then one day I ran du

```bash
$ du -sh ~/.claude
2.5G    /Users/naito/.claude
```

<Win98Dialog title="Disk Cleanup" icon="drive" :buttons="['OK', 'Cancel']">
  <code>~/.claude</code> is using 2.5GB.
</Win98Dialog>

---

## What is actually in `~/.claude`

<ClaudeTree />

---

## Inside `.claude/projects/`

<ProjectList />

---

## Except nothing was safe to delete

<ProjectList status />

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

---
layout: section
---

<PixelIcon name="folder" />

# PART 1

## Which worktrees are safe to delete?

---

## Ask gwq first

```bash
$ gwq status --filter inactive
BRANCH              STATUS      CHANGES   ACTIVITY
1234-fix-login      inactive              3 weeks ago
1301-add-export     inactive              2 months ago
```

<small>Inactive only means nothing has touched the files for 14 days. It says nothing about whether the branch ever merged</small>

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

---

## gwq defers to `git branch -d`

```bash
$ gwq remove -b 1234-fix-login
```

<Win98Dialog title="Error" icon="drive" :buttons="['OK']">
  <code>not fully merged</code>
</Win98Dialog>

<small>With squash merges the local commits never reach main, so git never sees the merge</small>

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

---
layout: section
---

<PixelIcon name="folder" />

# PART 2

## Back to `.claude/projects`

---
clicks: 1
---

## I had been cleaning in the wrong order

<ProjectList status />

```bash
claude project purge
```

<small>EXISTS / GONE is nothing clever. It is cclens's <code>root</code> plus a <code>test -d</code></small>

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

---
layout: section
---

<PixelIcon name="chip" />

# PART 3

## auto memory grows on its own axis

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

---

## `MEMORY.md` has a ceiling

<MemoryLines />

<small>The later you add a rule, the more quietly it stops being read</small>

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

---
layout: section
---

## The way we work keeps changing

# So cleaning up is part of the job

---

## References

<ul>
  <li>Claude Code / Memory <a href="https://code.claude.com/docs/en/memory">code.claude.com/docs/en/memory</a></li>
  <li>Claude Code / .claude directory <a href="https://code.claude.com/docs/en/claude-directory">code.claude.com/docs/en/claude-directory</a></li>
  <li>Claude Code / Sessions <a href="https://code.claude.com/docs/en/sessions#where-transcripts-are-stored">code.claude.com/docs/en/sessions</a></li>
  <li>cclens <a href="https://github.com/lambdalisue/cclens">github.com/lambdalisue/cclens</a> &mdash; <code>sql</code> / <code>doctor</code></li>
  <li>gwq <a href="https://github.com/d-kuro/gwq">github.com/d-kuro/gwq</a> &mdash; <code>status --filter inactive</code> / <code>remove -b</code> / <code>add --expires</code> / <code>prune --expired</code></li>
</ul>
