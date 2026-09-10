import net from "node:net";
import process from "node:process";
import { execa, type ResultPromise } from "execa";

const START_TIMEOUT = 120_000;

const pids: number[] = [];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function freePort() {
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

export async function waitForPort(
  port: number,
  abort: () => string | undefined,
) {
  const deadline = Date.now() + START_TIMEOUT;
  while (Date.now() < deadline) {
    const reason = abort();
    if (reason) throw new Error(reason);
    if (await canConnect(port)) return;
    await delay(120);
  }
  throw new Error(`Timed out after ${START_TIMEOUT / 1000}s`);
}

export function spawnChild(command: string, args: string[], cwd: string) {
  const child = execa(command, args, {
    cwd,
    detached: true,
    stdio: ["ignore", "pipe", "pipe"],
    reject: false,
  });
  if (child.pid) pids.push(child.pid);
  return child;
}

export function pipeLogs(
  child: ResultPromise,
  prefix: string,
  sink?: string[],
) {
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

export function killChildren() {
  for (const pid of pids.splice(0)) {
    try {
      process.kill(-pid, "SIGTERM");
    } catch {
      continue;
    }
  }
}
