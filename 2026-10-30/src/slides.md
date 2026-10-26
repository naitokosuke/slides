---
theme: default
title: How I Contributed to Vize
info: |
  ## How I Contributed to Vize

  I reported 30 bugs to Vize between June and October, and all of them got fixed, most on the same day.
  This talk is about how my bug reports changed along the way.

  Speaker: [@naitokosuke](https://twitter.com/naitokosuke)
duration: 10min
colorSchema: dark
transition: fade
fonts:
  sans: "Space Grotesk"
  mono: "JetBrains Mono"
---

<div class="cover">
  <h1>How I Contributed to Vize</h1>
  <p class="muted">30 bug reports, June to October</p>
  <p class="byline">@naitokosuke · 2026-10-30</p>
</div>

---

# Where the bugs came from

<div class="columns" style="--columns: 3">
  <div class="card large"><section><p class="label">chirashitabi · 15</p><p>Vue Vapor app on <code>vize lint</code>, <code>vize check</code> and Musea</p></section></div>
  <div class="card large"><section><p class="label">My blog · 5</p><p>Nuxt 4 with <code>@vizejs/nuxt</code>, built and prerendered</p></section></div>
  <div class="card large"><section><p class="label">Vue Fes Japan 2026 site · 2</p><p>File-based routing with vue-router</p></section></div>
</div>

---

<div class="big">
  <strong>30</strong>
  <span>issues I opened, June to October</span>
</div>

---

# All closed, and how long each one took

<IssueBubbles />

---

<div class="big">
  <strong>5.7<small>h</small></strong>
  <span>median time until closed · fastest was <em>56 min</em></span>
</div>

---

# Hours until closed, per issue

<FixChart />

---

<div class="big">
  <strong>303</strong>
  <span>releases in 136 days · <code>0.206.0</code> → <code>0.574.0</code></span>
</div>

---

# The fixes came fast. My reports were the slow part.

---

# How each one got filed

<ol class="steps">
  <li><span><code>vp run check</code> on the app shows a warning or an error</span></li>
  <li><span>Claude Code reads the rule source and the spec, and runs the same file through <code>@vitejs/plugin-vue</code>, <code>@vue/compiler-sfc</code> or <code>vue-tsc</code></span></li>
  <li><span>If Vize is the odd one out, Claude Code builds a repro repo with none of the app's code in it</span></li>
  <li><span>I read the repo and decide whether it gets filed</span></li>
  <li><span>It goes up with <code>gh issue create</code>, in English. A batch goes out 5 to 7 minutes apart</span></li>
  <li><span>When the fix is released, the app gets the new Vize and the warning is checked again</span></li>
</ol>

---

# Claude Code does the digging. I decide what gets filed.

Rules I gave it along the way, still in its memory

<div class="quotes compact">
  <p><small>vize-repros-repo.md</small><span>Never file upstream until the user says so</span></p>
  <p><small>vapor-get-current-instance.md</small><span>Read the runtime source and the upstream decision before naming whose bug it is</span></p>
  <p><small>vize-repros-repo.md</small><span>No trace of the app: generic names, no app code</span></p>
  <p><small>github-issues-prs-in-english.md</small><span>Everything on GitHub is in English</span></p>
</div>

---

# June vs October

<div class="columns">
  <div class="stack">
    <p class="muted">June · #1837</p>
    <div class="card">
      <header><ClosedIcon /> nested &lt;template&gt; closes the root template block early</header>
      <section>
        <div class="shot">screenshot</div>
        <p>A paragraph on what goes wrong and where in the grammar it lives.</p>
      </section>
    </div>
  </div>
  <div class="stack">
    <p class="muted">October · #10661</p>
    <div class="card">
      <header><ClosedIcon /> a prop named from is bound as _from</header>
      <section>
        <h4>Version</h4><p><code>vize 0.569.0</code>, TS 7.1.0-beta, Node 26.12.1</p>
        <h4>Reproduction</h4><p><code>pnpm install</code>, then <code>pnpm check</code></p>
        <h4>Actual / Expected</h4><p>TS2552 at a virtual position / no error</p>
      </section>
    </div>
  </div>
</div>

---

# From #9747 on, each issue has its own repro repo

<ReproTiles />

<p class="note"><code>pnpm install</code>, then one command that shows the bug</p>

---

# Each report points at something that already works

<div class="quotes">
  <p><small>#8752 – #8755</small><span>"<code>vize check</code> is fine"</span></p>
  <p><small>#6766, #6767</small><span>"<code>@vue/compiler-sfc</code> emits …"</span></p>
  <p><small>#9749</small><span>"unlike markuplint and the HTML spec"</span></p>
  <p><small>#7817</small><span>"as vue-router's <code>sfc-typed-router</code> does"</span></p>
</div>

---

# What I kept to myself

<div class="quotes">
  <p><small>tsrs only</small><span>Vize targets tsgo, so a failure that tsgo does not show is not a Vize bug</span></p>
  <p><small>by design</small><span>A type checker that fails to start gives a warning and exit 0, on purpose</span></p>
  <p><small>cautious on purpose</small><span><code>no-reactivity-loss</code> stays narrow, and the rewritten code was better anyway</span></p>
</div>

---

<div class="big">
  <strong>8.3<small>h</small> → 4.3<small>h</small></strong>
  <span>median time until closed, #1563 – #9180 → #9747 onward</span>
</div>

<p class="caveat">21 issues vs 9, and they are different bugs. Take it loosely.</p>

---

# Some fixes missed a case

<div class="quotes">
  <p><small>#6767 → #6898</small><span>After the <code>[object object]</code> fix, the scope id was still emitted where Vue emits none</span></p>
  <p><small>#8752 → #9747</small><span>After the <code>v-if</code> fix, nested <code>v-if</code> and <code>v-else-if</code> still failed</span></p>
</div>

<p class="note">I run the repro again on the release that has the fix</p>

---

<div class="big">
  <strong>80 → 17 → 6</strong>
  <span>lint warnings in chirashitabi</span>
</div>

<p class="caveat">80 → 17 by fixing my own code, 17 → 6 by Vize fixes and two rewrites. The last 6 are false positives, each checked against the rule source and the spec.</p>

---

# What I put in a report now

<dl class="terms">
  <dt>Summary</dt><dd>What is wrong, in one sentence</dd>
  <dt>Version</dt><dd>Every package and runtime involved</dd>
  <dt>Reproduction</dt><dd>Repo URL and the command that fails</dd>
  <dt>Actual / Expected</dt><dd>Pasted output</dd>
  <dt>Reference</dt><dd>A tool or spec that gets it right</dd>
</dl>

---

<div class="big">
  <strong>Thanks</strong>
  <span>github.com/ubugeeei-prod/vize</span>
</div>
