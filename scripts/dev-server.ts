import fs from "node:fs";
import fsp from "node:fs/promises";
import http from "node:http";
import net from "node:net";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { execa, type ResultPromise } from "execa";

const rootDir = fileURLToPath(new URL("..", import.meta.url));
const siteDir = path.join(rootDir, "site");

const DECK_ROUTE = /^\/(\d{4}-\d{2}-\d{2}(?:-\w+)?)(?=$|[/?])(\/[^?]*)?/;
const STATUS_ROUTE = /^\/__dev\/status\/(\d{4}-\d{2}-\d{2}(?:-\w+)?)$/;
const START_TIMEOUT = 120_000;

type DeckStatus = "starting" | "ready" | "failed";

interface Deck {
  status: DeckStatus;
  port?: number;
  error?: string;
}

const decks = new Map<string, Deck>();
const childPids: number[] = [];

function freePort() {
  return new Promise<number>((resolve, reject) => {
    const probe = net.createServer();
    probe.on("error", reject);
    probe.listen(0, () => {
      const { port } = probe.address() as net.AddressInfo;
      probe.close(() => resolve(port));
    });
  });
}

function canConnect(port: number) {
  return new Promise<boolean>((resolve) => {
    const socket = net.connect({ port, host: "localhost" });
    socket.on("connect", () => {
      socket.destroy();
      resolve(true);
    });
    socket.on("error", () => {
      socket.destroy();
      resolve(false);
    });
  });
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function waitForPort(port: number, abort: () => string | undefined) {
  const deadline = Date.now() + START_TIMEOUT;
  while (Date.now() < deadline) {
    const reason = abort();
    if (reason) throw new Error(reason);
    if (await canConnect(port)) return;
    await delay(120);
  }
  throw new Error(`Timed out after ${START_TIMEOUT / 1000}s`);
}

function spawnChild(command: string, args: string[], cwd: string) {
  const child = execa(command, args, {
    cwd,
    detached: true,
    stdio: ["ignore", "pipe", "pipe"],
    reject: false,
  });
  if (child.pid) childPids.push(child.pid);
  return child;
}

function pipeLogs(child: ResultPromise, prefix: string, sink?: string[]) {
  for (const stream of [child.stdout, child.stderr]) {
    stream?.on("data", (chunk: Buffer) => {
      for (const line of chunk.toString().split("\n")) {
        if (!line.trim()) continue;
        if (sink) {
          sink.push(line);
          if (sink.length > 12) sink.shift();
        }
        console.log(`${prefix} ${line}`);
      }
    });
  }
}

function killChildren() {
  for (const pid of childPids.splice(0)) {
    try {
      process.kill(-pid, "SIGTERM");
    } catch {
      continue;
    }
  }
}

async function preflight(folder: string) {
  const folderDir = path.join(rootDir, folder);
  const srcDir = path.join(folderDir, "src");

  if (!fs.existsSync(path.join(srcDir, "package.json"))) {
    return `${folder}/src/package.json is missing, so there is no Slidev project to start.`;
  }

  const standalone = fs.existsSync(path.join(folderDir, "pnpm-workspace.yaml"));
  if (standalone && !fs.existsSync(path.join(srcDir, "node_modules"))) {
    return [
      `${folder} is a standalone workspace and its dependencies are not installed yet.`,
      "",
      `cd ${folder}`,
      "pnpm install",
      "pnpm run build:demo",
      "pnpm run copy:types",
    ].join("\n");
  }

  return undefined;
}

async function bootDeck(folder: string, deck: Deck) {
  const blocked = await preflight(folder);
  if (blocked) {
    deck.status = "failed";
    deck.error = blocked;
    return;
  }

  const srcDir = path.join(rootDir, folder, "src");
  const port = await freePort();
  const logs: string[] = [];
  let exited: string | undefined;

  console.log(`[${folder}] starting slidev on port ${port}`);
  const child = spawnChild(
    "pnpm",
    ["exec", "slidev", "--port", String(port), "--base", `/${folder}/`],
    srcDir,
  );
  pipeLogs(child, `[${folder}]`, logs);
  child.on("exit", (code) => {
    exited = `slidev exited with code ${code ?? 0}`;
    if (deck.status === "ready") decks.delete(folder);
  });

  try {
    await waitForPort(port, () => exited);
    deck.port = port;
    deck.status = "ready";
    console.log(`[${folder}] ready`);
  } catch (error) {
    deck.status = "failed";
    deck.error = [(error as Error).message, "", ...logs].join("\n");
  }
}

function ensureDeck(folder: string) {
  const known = decks.get(folder);
  if (known) return known;

  const deck: Deck = { status: "starting" };
  decks.set(folder, deck);
  void bootDeck(folder, deck);
  return deck;
}

const backLink = `<style>#slides-dev-index{position:fixed;top:0;left:0;z-index:2147483647;padding:6px 12px;border-bottom-right-radius:8px;background:rgba(8,20,35,.75);color:#e0e8f0;font:500 12px/1.2 ui-sans-serif,system-ui,sans-serif;text-decoration:none;opacity:.3;transition:opacity .2s}#slides-dev-index:hover,#slides-dev-index:focus-visible{opacity:1}</style><a id="slides-dev-index" href="/">&#8592; Index</a>`;

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

function loadingPage(folder: string) {
  return page(
    `Starting ${folder}`,
    `<div class="spinner"></div>
<h1>Starting ${folder}</h1>
<p>Booting the Slidev dev server. This page reloads on its own.</p>
<a href="/">&#8592; Index</a>
<script>
  const poll = async () => {
    try {
      const res = await fetch(${JSON.stringify(`/__dev/status/${folder}`)});
      const deck = await res.json();
      if (deck.status !== "starting") return location.reload();
    } catch {}
    setTimeout(poll, 400);
  };
  poll();
</script>`,
  );
}

function errorPage(folder: string, error: string) {
  const escaped = error
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
  return page(
    `Cannot start ${folder}`,
    `<h1>Cannot start ${folder}</h1>
<p>The Slidev dev server for this deck did not come up.</p>
<pre>${escaped}</pre>
<a href="/">&#8592; Index</a>`,
  );
}

function send(
  res: http.ServerResponse,
  status: number,
  type: string,
  body: string | Buffer,
) {
  res.writeHead(status, {
    "content-type": type,
    "content-length": Buffer.byteLength(body),
    "cache-control": "no-store",
  });
  res.end(body);
}

function proxyRequest(
  req: http.IncomingMessage,
  res: http.ServerResponse,
  port: number,
  inject?: string,
) {
  const proxyReq = http.request(
    {
      host: "localhost",
      port,
      path: req.url,
      method: req.method,
      headers: req.headers,
    },
    (proxyRes) => {
      const status = proxyRes.statusCode ?? 502;
      const html = String(proxyRes.headers["content-type"] ?? "").includes(
        "text/html",
      );
      if (!inject || !html || proxyRes.headers["content-encoding"]) {
        res.writeHead(status, proxyRes.headers);
        proxyRes.pipe(res);
        return;
      }

      const chunks: Buffer[] = [];
      proxyRes.on("data", (chunk: Buffer) => chunks.push(chunk));
      proxyRes.on("end", () => {
        const body = Buffer.concat(chunks).toString();
        const patched = body.includes("</body>")
          ? body.replace("</body>", `${inject}</body>`)
          : body + inject;
        res.writeHead(status, {
          ...proxyRes.headers,
          "content-length": Buffer.byteLength(patched),
        });
        res.end(patched);
      });
    },
  );

  proxyReq.on("error", (error) => {
    if (res.headersSent) {
      res.destroy();
      return;
    }
    send(
      res,
      502,
      "text/plain; charset=utf-8",
      `Proxy error: ${error.message}`,
    );
  });

  req.pipe(proxyReq);
}

function proxyUpgrade(
  req: http.IncomingMessage,
  socket: net.Socket,
  head: Buffer,
  port: number,
) {
  const proxyReq = http.request({
    host: "localhost",
    port,
    path: req.url,
    method: req.method,
    headers: req.headers,
  });

  proxyReq.on("upgrade", (proxyRes, proxySocket, proxyHead) => {
    const headers = Object.entries(proxyRes.headers)
      .map(([key, value]) => `${key}: ${value}\r\n`)
      .join("");
    socket.write(`HTTP/1.1 101 Switching Protocols\r\n${headers}\r\n`);
    if (proxyHead?.length) proxySocket.unshift(proxyHead);
    if (head?.length) socket.unshift(head);
    proxySocket.on("error", () => socket.destroy());
    socket.on("error", () => proxySocket.destroy());
    proxySocket.pipe(socket).pipe(proxySocket);
  });

  proxyReq.on("error", () => socket.destroy());
  proxyReq.end();
}

function servePublicFile(url: string, res: http.ServerResponse) {
  const name = url.split("?")[0].slice(1);
  if (!name || name.includes("/")) return false;

  const file = path.join(rootDir, "public", name);
  if (!fs.existsSync(file)) return false;

  const type = name.endsWith(".png") ? "image/png" : "image/x-icon";
  send(res, 200, type, fs.readFileSync(file));
  return true;
}

async function serveOgImage(folder: string, res: http.ServerResponse) {
  try {
    const image = await fsp.readFile(
      path.join(rootDir, folder, "og-image.png"),
    );
    send(res, 200, "image/png", image);
  } catch {
    send(res, 404, "text/plain; charset=utf-8", "No OG image for this deck");
  }
}

function isSlideFolder(folder: string) {
  return fs.existsSync(path.join(rootDir, folder));
}

async function startSite() {
  const port = await freePort();
  const child = spawnChild(
    "pnpm",
    ["exec", "nuxt", "dev", "--port", String(port)],
    siteDir,
  );
  pipeLogs(child, "[site]");
  let exited: string | undefined;
  child.on("exit", (code) => {
    exited = `The site dev server exited with code ${code ?? 0}`;
  });
  await waitForPort(port, () => exited);
  return port;
}

function openBrowser(url: string) {
  const command =
    process.platform === "darwin"
      ? "open"
      : process.platform === "win32"
        ? "start"
        : "xdg-open";
  void execa(command, [url], {
    stdio: "ignore",
    reject: false,
    shell: process.platform === "win32",
  });
}

export async function startDevServer({
  port,
  open,
}: {
  port: number;
  open: boolean;
}) {
  const sitePort = await startSite();

  const server = http.createServer((req, res) => {
    const url = req.url ?? "/";

    const status = STATUS_ROUTE.exec(url.split("?")[0]);
    if (status) {
      const deck = decks.get(status[1]) ?? { status: "starting" };
      send(
        res,
        200,
        "application/json; charset=utf-8",
        JSON.stringify({ status: deck.status }),
      );
      return;
    }

    const match = DECK_ROUTE.exec(url);
    if (!match || !isSlideFolder(match[1])) {
      if (!servePublicFile(url, res)) proxyRequest(req, res, sitePort);
      return;
    }

    const folder = match[1];
    const rest = match[2];

    if (!rest) {
      res.writeHead(302, { location: `/${folder}/` });
      res.end();
      return;
    }

    if (rest === "/og-image.png") {
      void serveOgImage(folder, res);
      return;
    }

    const deck = ensureDeck(folder);
    const wantsHtml = String(req.headers.accept ?? "").includes("text/html");

    if (deck.status === "failed") {
      if (wantsHtml) {
        send(
          res,
          500,
          "text/html; charset=utf-8",
          errorPage(folder, deck.error ?? "Unknown error"),
        );
      } else {
        send(res, 502, "text/plain; charset=utf-8", deck.error ?? "Failed");
      }
      return;
    }

    if (deck.status === "starting" || !deck.port) {
      if (wantsHtml) {
        send(res, 200, "text/html; charset=utf-8", loadingPage(folder));
      } else {
        send(res, 503, "text/plain; charset=utf-8", `${folder} is starting`);
      }
      return;
    }

    proxyRequest(req, res, deck.port, backLink);
  });

  server.on("upgrade", (req, socket, head) => {
    const match = DECK_ROUTE.exec(req.url ?? "/");
    const deck = match ? decks.get(match[1]) : undefined;
    const target = deck?.status === "ready" && deck.port ? deck.port : sitePort;
    proxyUpgrade(req, socket as net.Socket, head, target);
  });

  await new Promise<void>((resolve) => server.listen(port, resolve));

  const url = `http://localhost:${port}/`;
  console.log(`\n  Slides dev server ready at ${url}\n`);
  if (open) openBrowser(url);

  const shutdown = () => {
    killChildren();
    process.exit(0);
  };
  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
  process.on("exit", killChildren);
}
