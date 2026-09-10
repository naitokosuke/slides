export const STATUS_PREFIX = "/__dev/status/";

export const backLink = `<style>#slides-dev-index{position:fixed;top:0;left:0;z-index:2147483647;padding:6px 12px;border-bottom-right-radius:8px;background:rgba(8,20,35,.75);color:#e0e8f0;font:500 12px/1.2 ui-sans-serif,system-ui,sans-serif;text-decoration:none;opacity:.3;transition:opacity .2s}#slides-dev-index:hover,#slides-dev-index:focus-visible{opacity:1}</style><a id="slides-dev-index" href="/">&#8592; Index</a>`;

function escapeHtml(text: string) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function page(title: string, body: string) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<style>
:root{color-scheme:dark}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:#081423;color:#e0e8f0;font:400 15px/1.6 ui-sans-serif,system-ui,sans-serif}
main{max-width:640px;padding:32px;text-align:center}
h1{margin:0 0 12px;font-size:1.25rem;font-weight:500;letter-spacing:.02em}
p{margin:0 0 24px;color:rgba(140,170,200,.8)}
pre{margin:0 0 24px;padding:16px;text-align:left;overflow-x:auto;border:1px solid rgba(255,255,255,.08);border-radius:8px;background:rgba(255,255,255,.03);color:rgba(220,235,250,.9);font:400 12px/1.6 ui-monospace,monospace;white-space:pre-wrap}
a{color:rgba(160,190,220,.9);text-decoration:none}
a:hover{color:#fff}
.spinner{width:28px;height:28px;margin:0 auto 24px;border:2px solid rgba(160,190,220,.25);border-top-color:rgba(160,190,220,.9);border-radius:50%;animation:spin .8s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
</style>
</head>
<body><main>${body}</main></body>
</html>
`;
}

export function loadingPage(folder: string) {
  return page(
    `Starting ${folder}`,
    `<div class="spinner"></div>
<h1>Starting ${escapeHtml(folder)}</h1>
<p>Booting the Slidev dev server. This page reloads on its own.</p>
<a href="/">&#8592; Index</a>
<script>
  const poll = async () => {
    try {
      const res = await fetch(${JSON.stringify(STATUS_PREFIX + folder)});
      const deck = await res.json();
      if (deck.status !== "starting") return location.reload();
    } catch {}
    setTimeout(poll, 400);
  };
  poll();
</script>`,
  );
}

export function errorPage(folder: string, error: string) {
  return page(
    `Cannot start ${folder}`,
    `<h1>Cannot start ${escapeHtml(folder)}</h1>
<p>The Slidev dev server for this deck did not come up.</p>
<pre>${escapeHtml(error)}</pre>
<a href="/">&#8592; Index</a>`,
  );
}
