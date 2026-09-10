import fs from "node:fs";
import path from "node:path";
import { freePort, pipeLogs, spawnChild, waitForPort } from "./children.ts";
import { rootDir } from "./paths.ts";

export type DeckStatus = "starting" | "ready" | "failed";

export interface Deck {
  status: DeckStatus;
  port?: number;
  error?: string;
}

const decks = new Map<string, Deck>();

export function isSlideFolder(folder: string) {
  return fs.existsSync(path.join(rootDir, folder));
}

export function deckStatus(folder: string): DeckStatus {
  return decks.get(folder)?.status ?? "starting";
}

function preflight(folder: string) {
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
  const blocked = preflight(folder);
  if (blocked) {
    deck.status = "failed";
    deck.error = blocked;
    return;
  }

  const port = await freePort();
  const logs: string[] = [];
  let exited: string | undefined;

  console.log(`[${folder}] starting slidev on port ${port}`);
  const child = spawnChild(
    "pnpm",
    ["exec", "slidev", "--port", String(port), "--base", `/${folder}/`],
    path.join(rootDir, folder, "src"),
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

export function ensureDeck(folder: string) {
  const known = decks.get(folder);
  if (known) return known;

  const deck: Deck = { status: "starting" };
  decks.set(folder, deck);
  void bootDeck(folder, deck);
  return deck;
}

export function readyDeckPort(folder: string) {
  const deck = decks.get(folder);
  return deck?.status === "ready" ? deck.port : undefined;
}
