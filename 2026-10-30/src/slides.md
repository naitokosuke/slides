---
theme: default
title: How I Contributed to Vize
info: |
  ## How I Contributed to Vize

  Vize is in its Real World Testing phase. Using it on your own app and sending a small repro of what looks off is a real contribution right now.
  I opened 30 issues that way, with Claude Code doing the legwork and me reading the repros before they went up.

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

# 30 issues, <em>all closed as completed</em>

<IssueBubbles />

<p class="muted">25 fixes and 5 new features. Bigger means closed sooner.</p>

---

<div class="logo">
  <VizeLogo />
</div>

---

# I vibe-code, so I need <em>guardrails</em>

<div class="evidence pair">
  <blockquote class="quote">
    <p>“[Models] predict<br />likely continuations.<br />They do not enforce<br />invariants.”</p>
  </blockquote>
  <a class="og-side" href="https://vizejs.dev/blog/notes/2026-03-26-why-ai-needs-deterministic-fast-static-analysis/" target="_blank" rel="noopener noreferrer">
    <img src="/static-analysis-for-ai.png" alt="Static Analysis for AI by ubugeeei, on the Vize blog" />
  </a>
</div>

---

# Guardrails have to be <em>fast</em>

<div class="evidence">
  <div class="rows">
    <p><span>Lint</span><span class="muted">vs eslint-plugin-vue</span><strong>182×</strong></p>
    <p><span>Format</span><span class="muted">vs Oxfmt</span><strong>50×</strong></p>
    <p><span>Type check</span><span class="muted">vs vue-tsc v3</span><strong>4.9×</strong></p>
  </div>
  <div class="source">
    <p>Oxlint lints 2.4× faster, but reads only <code>&lt;script&gt;</code></p>
    <p>Sources: <a href="https://github.com/ubugeeei-prod/vize#benchmarks" target="_blank" rel="noopener noreferrer">Vize's benchmarks</a>, and my app for format</p>
  </div>
</div>

---

# The rules have to <em>know Vue</em>

<div class="evidence">
  <div class="rows">
    <p><span>Vue</span><span class="muted">templates, props, slots, events</span><strong>108</strong></p>
    <p><span>Accessibility</span><span class="muted">labels, roles, focus</span><strong>30</strong></p>
    <p><span>Runtime</span><span class="muted">SSR, Nuxt, Vapor</span><strong>10</strong></p>
    <p><span>Type-aware</span><span class="muted">types inside the template</span><strong>6</strong></p>
  </div>
  <p class="source">266 lint rules in all, each explained by <code>vize explain</code></p>
</div>

---

<div class="tweet">
  <Tweet id="2113609909329953099" cards="hidden" conversation="none" />
  <h1>Vue Language Tools v4 <em>takes the same path</em></h1>
</div>

---

<h1 class="split">It's still being tested,</h1>

<a class="og" href="https://vizejs.dev/blog/notes/2026-06-07-real-world-testing/" target="_blank" rel="noopener noreferrer">
  <img src="/real-world-testing.png" alt="Real World Testing, on the Vize blog" />
</a>

<p class="headline-end"><em>and that is the exciting part</em></p>

---

# I run Vize on <em>my side projects</em>

<div class="evidence">
  <div class="rows">
    <p><span>Lint</span><span class="muted">happy-path to opinionated</span><strong>7</strong></p>
    <p><span>Type check</span><span class="muted"><code>vize check</code></span><strong>5</strong></p>
    <p><span>Build</span><span class="muted">Vite plugin, Vapor</span><strong>4</strong></p>
    <p><span>Format</span><span class="muted"><code>.vue</code> files</span><strong>4</strong></p>
    <p><span>Musea</span><span class="muted">story catalog</span><strong>2</strong></p>
  </div>
</div>

---

# My issues hit <em>five parts of Vize</em>

<div class="evidence">
  <div class="rows">
    <p><span>Lint</span><span class="muted">a11y, type-aware, new rules</span><strong>15</strong></p>
    <p><span>Build</span><span class="muted">SSR, Nuxt, Vapor, CSS</span><strong>7</strong></p>
    <p><span>Editor</span><span class="muted">LSP, VS Code</span><strong>4</strong></p>
    <p><span>Type check</span><span class="muted">content mapper, vue-router</span><strong>3</strong></p>
    <p><span>Musea</span><span class="muted">story catalog</span><strong>1</strong></p>
  </div>
</div>

---

# Claude Code does <em>the legwork</em>

<div class="evidence">
  <PromptTyping
    :lines="[
      ['Make a minimal repro, with nothing from the app.'],
      ['Search ', { code: 'ubugeeei-prod/vize' }, ' for an existing issue.'],
      ['Run it again on the latest Vize release.'],
      ['Run it with tsgo too, not only tsrs.'],
    ]"
  />
</div>

---

# I read them, and some <em>don't get filed</em>

<div class="evidence">
  <div class="verdicts">
    <div class="verdict">
      <span class="label">Fails only on tsrs</span>
      <p>Vize targets tsgo. tsrs follows TypeScript's unreleased main.</p>
    </div>
    <div class="verdict">
      <span class="label">Exits 0 when the checker can't start</span>
      <p>Vize does that on purpose.</p>
    </div>
  </div>
</div>

---

# One issue, <em>from my app to a release</em>

<div class="evidence">
  <div class="journey">
    <p class="journey-span"><em>under 12 hours</em></p>
    <ol>
      <li><span class="when">Before</span><strong>A warning in my app</strong></li>
      <li><span class="when">Oct 19 22:07</span><strong><a href="https://github.com/ubugeeei-prod/vize/issues/9751" target="_blank" rel="noopener noreferrer">#9751</a> with a repro</strong></li>
      <li><span class="when">Oct 20 09:59</span><strong><a href="https://github.com/ubugeeei-prod/vize/pull/9759" target="_blank" rel="noopener noreferrer">#9759</a> in vize 0.486.0</strong></li>
      <li class="arrived"><span class="when">Oct 20</span><strong>The warning is gone</strong></li>
    </ol>
  </div>
</div>

---

<div class="closing">
  <p>Try Vize on your app. <em>Send a small repro.</em></p>
  <pre class="snippet">npx vize lint</pre>
  <a href="https://github.com/ubugeeei-prod/vize/issues" target="_blank" rel="noopener noreferrer">github.com/ubugeeei-prod/vize/issues</a>
</div>
