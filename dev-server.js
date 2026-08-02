#!/usr/bin/env node
/**
 * Minimal static dev server for the 拾光工作台 PWA.
 * Forwards CLI host/port arguments: `npm run dev -- --port 7100 --host 0.0.0.0`
 */
const http = require("http");
const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
function argValue(name, fallback) {
  const idx = args.indexOf(`--${name}`);
  if (idx !== -1 && args[idx + 1]) return args[idx + 1];
  const prefixed = args.find((a) => a.startsWith(`--${name}=`));
  if (prefixed) return prefixed.split("=")[1];
  return fallback;
}

const PORT = Number(argValue("port", process.env.PORT || 7100));
const HOST = argValue("host", process.env.HOST || "0.0.0.0");
const ROOT = __dirname;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
  let filePath = path.join(ROOT, urlPath === "/" ? "index.html" : urlPath);
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403).end("Forbidden");
    return;
  }
  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      // Fallback to index.html for unknown routes
      filePath = path.join(ROOT, "index.html");
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": MIME[ext] || "application/octet-stream",
      "Cache-Control": "no-cache",
      "Service-Worker-Allowed": "/",
    });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`拾光工作台 dev server running at http://${HOST}:${PORT}/`);
});
