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
