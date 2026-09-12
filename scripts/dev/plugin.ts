import fs from "node:fs";
import fsp from "node:fs/promises";
import type http from "node:http";
import type { Socket } from "node:net";
import path from "node:path";
import process from "node:process";
import {
  freePort,
  killChildren,
  pipeLogs,
  spawnChild,
  waitForPort,
} from "./children.ts";
import {
  deckStatus,
  ensureDeck,
  isSlideFolder,
  readyDeckPort,
} from "./decks.ts";
import {
  proxyRequest,
  proxyUpgrade,
  send,
  sendHtml,
  sendText,
} from "./http.ts";
import { backLink, errorPage, loadingPage, STATUS_PREFIX } from "./pages.ts";
import { publicDir, rootDir, siteDir } from "./paths.ts";
import { printQrCode } from "./qr.ts";

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

function deckPortFromReferer(req: http.IncomingMessage) {
  const referer = req.headers.referer;
  if (!referer) return undefined;
  if (req.headers["sec-fetch-mode"] === "navigate") return undefined;
  if (String(req.headers.accept ?? "").includes("text/html")) return undefined;

  let pathname: string;
  try {
    pathname = new URL(referer).pathname;
  } catch {
    return undefined;
  }

  const match = DECK_ROUTE.exec(pathname);
  return match ? readyDeckPort(match[1]) : undefined;
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

export function slidesDevServer() {
  return {
    name: "slides-dev-server",
    apply: "serve",
    async configureServer(server) {
      const sitePort = await startSite();

      const printUrls = server.printUrls.bind(server);
      server.printUrls = () => {
        printUrls();
        printQrCode(server.resolvedUrls?.network[0]);
      };

      server.middlewares.use((req, res) => {
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
          if (servePublicFile(pathname, res)) return;
          proxyRequest(req, res, deckPortFromReferer(req) ?? sitePort);
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

      const httpServer = server.httpServer;
      if (httpServer) {
        httpServer.removeAllListeners("upgrade");
        httpServer.on("upgrade", (req, socket, head) => {
          const match = DECK_ROUTE.exec(req.url ?? "/");
          const deckPort = match ? readyDeckPort(match[1]) : undefined;
          proxyUpgrade(req, socket as Socket, head, deckPort ?? sitePort);
        });
      }

      const shutdown = () => {
        killChildren();
        process.exit(0);
      };
      process.on("SIGINT", shutdown);
      process.on("SIGTERM", shutdown);
      process.on("exit", killChildren);
    },
  };
}
