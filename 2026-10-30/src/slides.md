---
theme: default
title: How I Contributed to Vize
info: |
  ## How I Contributed to Vize

  I opened 30 issues on Vize between June and October, and all of them were fixed, most within a day.
  This talk is about how those issues were put together.

  Speaker: [@naitokosuke](https://twitter.com/naitokosuke)
duration: 5min
colorSchema: light
transition: fade
fonts:
  sans: "Space Grotesk"
  mono: "JetBrains Mono"
---

<div class="cover">
  <h1>How I Contributed to Vize</h1>
  <p class="muted">30 issues, June to October</p>
  <p class="byline">
    <img class="avatar" src="/naitokosuke.png" alt="" />
    <a href="https://github.com/naitokosuke" target="_blank" rel="noopener noreferrer">@naitokosuke</a>
    <span>· 2026-10-30</span>
  </p>
</div>

---

<div class="big">
  <strong>30</strong>
  <span>issues I opened on Vize</span>
</div>

---

# All 30 were fixed, <em>most within a day</em>

<IssueBubbles />

---

<div class="logo">
  <VizeLogo />
</div>

---

# I use Vize because it is <em>much faster</em>

<div class="evidence">
  <div class="speed">
    <p><span>Lint</span><span class="muted">vs eslint-plugin-vue</span><strong>182×</strong></p>
    <p><span>Format</span><span class="muted">vs Oxfmt</span><strong>50×</strong></p>
    <p><span>Type check</span><span class="muted">vs vue-tsc v3</span><strong>4.9×</strong></p>
  </div>
  <div class="source">
    <p>Lint, type check: <a href="https://github.com/ubugeeei-prod/vize#benchmarks" target="_blank" rel="noopener noreferrer">Vize's benchmarks</a></p>
    <p>Format: 2,940 <code>.vue</code> files from my app, on an M1</p>
  </div>
</div>

---

<div class="tweet">
  <Tweet id="2113609909329953099" cards="hidden" conversation="none" />
  <h1>Vue Language Tools v4 <em>takes the same path</em></h1>
</div>

---

# Vize already type-checks <code>.vue</code> <em>on TypeScript 7</em>

<div class="evidence">
  <pre class="snippet">"contentMappers": [
  { "package": "vize",
    "extensions": [".vue"] }
]</pre>
  <p class="muted">Vue Language Tools v4 is still in alpha</p>
</div>

---

<h1 class="split">It's still being tested,</h1>

<a class="og" href="https://vizejs.dev/blog/notes/2026-06-07-real-world-testing/" target="_blank" rel="noopener noreferrer">
  <img src="/real-world-testing.png" alt="Real World Testing, on the Vize blog" />
</a>

<p class="headline-end"><em>and that is the exciting part</em></p>

---

# I build a Vue app and use <em>every part of Vize</em>

<div class="evidence">
  <div class="chips compact">
    <span>Compile</span>
    <span>Lint</span>
    <span>Format</span>
    <span>Check</span>
    <span>Musea</span>
    <span>Editor</span>
  </div>
  <p class="source">All on one parser, per <a href="https://github.com/ubugeeei-prod/vize#what-is-vize" target="_blank" rel="noopener noreferrer">Vize's README</a></p>
</div>

---

# When something looks off, Claude Code <em>makes a repro</em>

<div class="evidence prompted">
  <p class="muted">To Claude Code</p>
  <div class="prompt">
    <span class="caret" aria-hidden="true">&gt;</span>
    <p>Make a minimal repro of this in a new repo, with nothing from the app.</p>
  </div>
  <p class="muted">→ <a href="https://github.com/naitokosuke/vize-placeholder-label-option-repro" target="_blank" rel="noopener noreferrer">vize-placeholder-label-option-repro</a></p>
</div>

---

# Then it checks whether <em>someone already filed it</em>

<div class="evidence prompted">
  <p class="muted">To Claude Code</p>
  <div class="prompt">
    <span class="caret" aria-hidden="true">&gt;</span>
    <p>Has anyone filed this already? Search <code>ubugeeei-prod/vize</code> issues and PRs, open and closed, before we write one.</p>
  </div>
</div>

---

# Vize ships twice a day, so the repro runs on <em>the latest release</em>

<div class="evidence prompted">
  <p class="muted">To Claude Code</p>
  <div class="prompt">
    <span class="caret" aria-hidden="true">&gt;</span>
    <p>Run the repro again on the latest Vize release and check that it still fails.</p>
  </div>
  <p class="muted">303 releases in 136 days, <code>0.206.0</code> → <code>0.574.0</code></p>
</div>

---

# TypeScript 7 is still moving, so it checks <em>whether it is really Vize</em>

<div class="evidence prompted">
  <p class="muted">To Claude Code</p>
  <div class="prompt">
    <span class="caret" aria-hidden="true">&gt;</span>
    <p>Run it with tsgo too, TypeScript 7.0 and the 7.1 beta, not only tsrs.</p>
  </div>
</div>

---

<div class="closing">
  <p>Right now, trying Vize on your app <em>is a contribution.</em></p>
  <a href="https://vizejs.dev/blog/notes/2026-06-07-real-world-testing/" target="_blank" rel="noopener noreferrer">vizejs.dev · Real World Testing</a>
</div>
