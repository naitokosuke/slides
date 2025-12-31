export interface Env {
  ASSETS: R2Bucket;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    let path = url.pathname.slice(1); // Remove leading slash

    // Try to get the object directly
    let object = await env.ASSETS.get(path);

    // If not found and path ends with / or has no extension, try index.html
    if (!object) {
      if (path === "" || path.endsWith("/")) {
        object = await env.ASSETS.get(path + "index.html");
      } else if (!path.includes(".")) {
        // Try with /index.html appended
        object = await env.ASSETS.get(path + "/index.html");
      }
    }

    if (!object) {
      return new Response("Not Found", { status: 404 });
    }

    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set("etag", object.httpEtag);

    // Set content-type based on file extension if not set
    if (!headers.has("content-type")) {
      const contentType = getContentType(path);
      if (contentType) {
        headers.set("content-type", contentType);
      }
    }

    return new Response(object.body, { headers });
  },
};

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
