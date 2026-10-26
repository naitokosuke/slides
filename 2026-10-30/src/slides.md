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
  </div>
  <div class="source">
    <p>Lint: <a href="https://github.com/ubugeeei-prod/vize#benchmarks" target="_blank" rel="noopener noreferrer">Vize's benchmarks</a></p>
    <p>Format: 2,940 <code>.vue</code> files from my app, on an M1</p>
  </div>
</div>

---

# It type-checks <code>.vue</code> <em>on TypeScript 7</em>

<div class="evidence">
  <pre class="snippet">"contentMappers": [
  { "package": "vize",
    "extensions": [".vue"] }
]</pre>
  <p class="muted">vue-tsc cannot load TypeScript 7</p>
</div>

---

# It is still being tested, <em>and that is the exciting part</em>

<a class="og" href="https://vizejs.dev/blog/notes/2026-06-07-real-world-testing/" target="_blank" rel="noopener noreferrer">
  <img src="/real-world-testing.png" alt="Real World Testing, on the Vize blog" />
</a>

---

# The blog asks for <em>reports from real projects</em>

<div class="evidence">
  <blockquote class="quote">
    <p>“Real-world applications are the test suite now.”</p>
    <cite><a href="https://vizejs.dev/blog/notes/2026-06-07-real-world-testing/" target="_blank" rel="noopener noreferrer">Real World Testing</a>, 2026-06-07</cite>
  </blockquote>
</div>

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

<div class="evidence">
  <a class="repo" href="https://github.com/naitokosuke/vize-placeholder-label-option-repro" target="_blank" rel="noopener noreferrer">
    <span><span class="owner">naitokosuke/</span><br />vize-placeholder-label-option-repro</span>
    <code>pnpm install && pnpm lint</code>
  </a>
  <p class="muted">One repo per issue, with nothing from my app</p>
</div>

---

# Then it checks whether <em>someone already filed it</em>

<div class="evidence">
  <pre class="snippet">gh search issues --repo ubugeeei-prod/vize \
  "placeholder-label-option"</pre>
</div>

---

# Vize ships twice a day, so the repro runs on <em>the latest release</em>

<div class="big">
  <strong>303</strong>
  <span>releases in 136 days · <code>0.206.0</code> → <code>0.574.0</code></span>
</div>

---

# TypeScript 7 is still moving, so it checks <em>whether it is really Vize</em>

<div class="evidence">
  <pre class="snippet">vize check
tsc --runExternalCode --noEmit</pre>
  <p class="muted">The repro runs on released TypeScript 7, not only on tsrs</p>
</div>

---

<div class="closing">
  <p>Right now, trying Vize on your app <em>is a contribution.</em></p>
  <a href="https://vizejs.dev/blog/notes/2026-06-07-real-world-testing/" target="_blank" rel="noopener noreferrer">vizejs.dev · Real World Testing</a>
</div>
