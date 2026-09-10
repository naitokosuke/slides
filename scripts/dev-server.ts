import fs from "node:fs";
import fsp from "node:fs/promises";
import http from "node:http";
import type { Socket } from "node:net";
import path from "node:path";
import process from "node:process";
import { execa } from "execa";
import {
  freePort,
  killChildren,
  pipeLogs,
  spawnChild,
  waitForPort,
} from "./dev/children.ts";
import {
  deckStatus,
  ensureDeck,
  isSlideFolder,
  readyDeckPort,
} from "./dev/decks.ts";
import {
  proxyRequest,
  proxyUpgrade,
  send,
  sendHtml,
  sendText,
} from "./dev/http.ts";
import {
  backLink,
  errorPage,
  loadingPage,
  STATUS_PREFIX,
} from "./dev/pages.ts";
import { publicDir, rootDir, siteDir } from "./dev/paths.ts";

const DECK_ROUTE = /^\/(\d{4}-\d{2}-\d{2}(?:-\w+)?)(?=$|[/?])(\/[^?]*)?/;

function servePublicFile(pathname: string, res: http.ServerResponse) {
  const name = pathname.slice(1);
  if (!name || name.includes("/")) return false;

  const file = path.join(publicDir, name);
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
    sendText(res, 404, "No OG image for this deck");
  }
}

function serveDeck(
  req: http.IncomingMessage,
  res: http.ServerResponse,
  folder: string,
) {
  const deck = ensureDeck(folder);
  const wantsHtml = String(req.headers.accept ?? "").includes("text/html");

  if (deck.status === "failed") {
    const error = deck.error ?? "Unknown error";
    if (wantsHtml) sendHtml(res, 500, errorPage(folder, error));
    else sendText(res, 502, error);
    return;
  }

  if (deck.status === "starting" || !deck.port) {
    if (wantsHtml) sendHtml(res, 200, loadingPage(folder));
    else sendText(res, 503, `${folder} is starting`);
    return;
  }

  proxyRequest(req, res, deck.port, backLink);
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
    const pathname = url.split("?")[0];

    if (pathname.startsWith(STATUS_PREFIX)) {
      const folder = pathname.slice(STATUS_PREFIX.length);
      send(
        res,
        200,
        "application/json; charset=utf-8",
        JSON.stringify({ status: deckStatus(folder) }),
      );
      return;
    }

    const match = DECK_ROUTE.exec(url);
    if (!match || !isSlideFolder(match[1])) {
      if (!servePublicFile(pathname, res)) proxyRequest(req, res, sitePort);
      return;
    }

    const [, folder, rest] = match;

    if (!rest) {
      res.writeHead(302, { location: `/${folder}/` });
      res.end();
      return;
    }

    if (rest === "/og-image.png") {
      void serveOgImage(folder, res);
      return;
    }

    serveDeck(req, res, folder);
  });

  server.on("upgrade", (req, socket, head) => {
    const match = DECK_ROUTE.exec(req.url ?? "/");
    const deckPort = match ? readyDeckPort(match[1]) : undefined;
    proxyUpgrade(req, socket as Socket, head, deckPort ?? sitePort);
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
