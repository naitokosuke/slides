import http from "node:http";
import type { Socket } from "node:net";

export function send(
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

export function sendHtml(
  res: http.ServerResponse,
  status: number,
  body: string,
) {
  send(res, status, "text/html; charset=utf-8", body);
}

export function sendText(
  res: http.ServerResponse,
  status: number,
  body: string,
) {
  send(res, status, "text/plain; charset=utf-8", body);
}

export function proxyRequest(
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
    sendText(res, 502, `Proxy error: ${error.message}`);
  });

  req.pipe(proxyReq);
}

export function proxyUpgrade(
  req: http.IncomingMessage,
  socket: Socket,
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
