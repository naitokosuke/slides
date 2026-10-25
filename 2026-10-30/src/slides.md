---
theme: default
title: 30 Bugs, 0 Replies
info: |
  ## 30 Bugs, 0 Replies

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
  <p class="eyebrow"><ClosedIcon /> 30 Closed · 0 Open</p>
  <h1>30 Bugs, 0 Replies</h1>
  <p class="muted">Four months of reporting bugs to Vize</p>
  <p class="byline">@naitokosuke · 2026-10-30</p>
</div>

---

# Hi

<img class="avatar" src="/naitokosuke.png" alt="naitokosuke" />

---

# I moved my Vue tooling to Vize this summer

<div class="columns" style="--columns: 3">
  <div class="card large"><section><p class="label">Lint</p><p>ESLint → <code>vize lint</code></p></section></div>
  <div class="card large"><section><p class="label">Type check</p><p>vue-tsc → <code>vize check</code></p></section></div>
  <div class="card large"><section><p class="label">Build</p><p>Nuxt 4 + <code>@vizejs/nuxt</code></p></section></div>
</div>

---

<div class="big">
  <strong>30</strong>
  <span>issues I opened, June to October</span>
</div>

---

# All of them are closed

<IssueWall />

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

<div class="big">
  <strong>0</strong>
  <span>comments from me after opening</span>
</div>

<p class="caveat">16 issues have no comments at all. The other 14 only have progress updates from ubugeeei.</p>

---

# The fixes came fast. My reports were the slow part.

Nobody asked me anything, so the first post had to have it all

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

<div class="tiles">
  <span>vize-nested-v-if-type-binding-repro</span>
  <span>vize-ssr-arrow-param-repro</span>
  <span>vize-placeholder-label-option-repro</span>
  <span>vize-combobox-focus-repro</span>
  <span>vize-hidden-input-label-repro</span>
  <span>vize-musea-scoped-arrow-repro</span>
  <span>vize-style-relative-import-repro</span>
  <span>vize-narrowed-slot-condition-repro</span>
  <span>vize-from-prop-template-repro</span>
</div>

<p class="note"><code>pnpm install</code>, then one command that shows the bug</p>

---

# Each report points at something that already works

<div class="quotes">
  <p>"<code>vize check</code> is fine"<small>#8752 – #8755</small></p>
  <p>"<code>@vue/compiler-sfc</code> emits …"<small>#6766, #6767</small></p>
  <p>"unlike markuplint and the HTML spec"<small>#9749</small></p>
  <p>"as vue-router's <code>sfc-typed-router</code> does"<small>#7817</small></p>
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
  <p>#6767 fixed <code>[object object]</code><small>#6898: the scope id was still emitted where Vue emits none</small></p>
  <p>#8752 fixed <code>v-if</code><small>#9747: nested <code>v-if</code> and <code>v-else-if</code> still failed</small></p>
</div>

<p class="note">I run the repro again on the release that has the fix</p>

---

# What I put in a report now

<div class="card large stack">
  <section>
    <h4>Summary</h4><p class="muted">What is wrong, in one sentence</p>
    <h4>Version</h4><p class="muted">Every package and runtime involved</p>
    <h4>Reproduction</h4><p class="muted">Repo URL and the command that fails</p>
    <h4>Actual / Expected</h4><p class="muted">Pasted output</p>
    <h4>Reference</h4><p class="muted">A tool or spec that gets it right</p>
  </section>
</div>

---

<div class="big">
  <strong>Thanks</strong>
  <span>github.com/ubugeeei-prod/vize</span>
</div>
