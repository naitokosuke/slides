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

# I use Vize because it is <em>much faster</em>

<div class="evidence">
  <div class="speed">
    <p><span>Lint</span><span class="muted">vs eslint-plugin-vue</span><strong>182×</strong></p>
    <p><span>Format</span><span class="muted">vs Prettier</span><strong>85×</strong></p>
    <p><span>Type check</span><span class="muted">vs vue-tsc</span><strong>4.9×</strong></p>
  </div>
  <p class="source">Source: <a href="https://github.com/ubugeeei-prod/vize#benchmarks" target="_blank" rel="noopener noreferrer">Vize's benchmarks</a></p>
</div>

---

# One parser runs <em>every Vue tool</em>

<div class="evidence">
  <div class="chips compact">
    <span>Compile</span>
    <span>Lint</span>
    <span>Format</span>
    <span>Type check</span>
    <span>Editor</span>
    <span>Musea</span>
  </div>
  <p class="source">Source: <a href="https://github.com/ubugeeei-prod/vize#what-is-vize" target="_blank" rel="noopener noreferrer">Vize's README</a></p>
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

# Claude Code checks Vize against <em>something that already works</em>

<div class="evidence">
  <div class="rows">
    <p><span>"<code>vize check</code> is fine"</span><small>#8752</small></p>
    <p><span>"<code>@vue/compiler-sfc</code> emits …"</span><small>#6766</small></p>
    <p><span>"unlike markuplint and the HTML spec"</span><small>#9749</small></p>
  </div>
</div>

---

# Then it cuts the case down to <em>one small repo</em>

<div class="evidence">
  <a class="repo" href="https://github.com/naitokosuke/vize-placeholder-label-option-repro" target="_blank" rel="noopener noreferrer">
    <span><span class="owner">naitokosuke/</span><br />vize-placeholder-label-option-repro</span>
    <code>pnpm install && pnpm lint</code>
  </a>
  <p class="muted">One repo per issue, with nothing from my app</p>
</div>

---

# I decide what gets filed, <em>and what doesn't</em>

<div class="evidence">
  <p class="muted">Not filed</p>
  <div class="chips">
    <span>Fails only on tsrs</span>
    <span class="palm">Works as designed</span>
    <span class="deep">Narrow on purpose</span>
  </div>
</div>

---

<div class="closing">
  <p>Use Vize in your app.</p>
  <p><em>File what breaks.</em></p>
  <a href="https://github.com/ubugeeei-prod/vize" target="_blank" rel="noopener noreferrer">github.com/ubugeeei-prod/vize</a>
</div>
