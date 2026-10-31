export interface Env {
  ASSETS: R2Bucket;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    let path = url.pathname.slice(1); // Remove leading slash
    // Answered with a 304 when the browser's copy is still current, so its body is not sent again
    const get = (key: string) =>
      env.ASSETS.get(key, { onlyIf: request.headers });

    // Try to get the object directly
    let object = await get(path);

    // If not found and path ends with / or has no extension, try index.html
    if (!object) {
      if (path === "" || path.endsWith("/")) {
        path += "index.html";
        object = await get(path);
      } else if (!path.includes(".")) {
        // For SPA routing: find the nearest index.html by walking up the path
        // e.g., "2025-10-25/6" should serve "2025-10-25/index.html"
        const segments = path.split("/").filter(Boolean);
        while (segments.length > 0 && !object) {
          const basePath = segments.join("/") + "/index.html";
          object = await get(basePath);
          if (!object) {
            segments.pop();
          }
        }
        path = segments.length > 0 ? segments.join("/") + "/index.html" : "";
        // Fallback to root index.html if no nested index.html found
        if (!object) {
          path = "index.html";
          object = await get(path);
        }
      }
    }

    if (!object) {
      return new Response("Not Found", { status: 404 });
    }

    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set("etag", object.httpEtag);
    headers.set("cache-control", getCacheControl(path));

    // Set content-type based on file extension if not set
    if (!headers.has("content-type")) {
      const contentType = getContentType(path);
      if (contentType) {
        headers.set("content-type", contentType);
      }
    }

    // The conditional get matched the browser's etag, so R2 left the body out
    if (!("body" in object)) {
      return new Response(null, { status: 304, headers });
    }

    return new Response(object.body, { headers });
  },
};

function getCacheControl(path: string): string {
  // Vite and Nuxt put a content hash in these file names, so a file there never changes
  if (/(^|\/)(assets|_nuxt)\//.test(path)) {
    return "public, max-age=31536000, immutable";
  }
  // Pages name the hashed files of the current build, so they are checked on every visit
  if (path.endsWith(".html")) {
    return "no-cache";
  }
  // Images, feeds and the like keep their names across deploys; an hour is as stale as they get
  return "public, max-age=3600";
}

function getContentType(path: string): string | null {
  const ext = path.split(".").pop()?.toLowerCase();
  const types: Record<string, string> = {
    html: "text/html; charset=utf-8",
    css: "text/css; charset=utf-8",
    js: "application/javascript; charset=utf-8",
    json: "application/json; charset=utf-8",
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    svg: "image/svg+xml",
    webp: "image/webp",
    mp4: "video/mp4",
    webm: "video/webm",
    woff: "font/woff",
    woff2: "font/woff2",
    ttf: "font/ttf",
    ico: "image/x-icon",
  };
  return ext ? types[ext] || null : null;
}
