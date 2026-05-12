import http from "node:http";
import path from "node:path";
import fs from "node:fs";
import url from "node:url";
import { WebSocketServer, type WebSocket } from "ws";

const PORT = Number(process.env.WS_PORT ?? 5174);
const isProd = process.env.NODE_ENV === "production";

type AdminCommand =
  | { type: "next" }
  | { type: "prev" }
  | { type: "jumpTo"; index: number }
  | { type: "reset" }
  | { type: "start" }
  | { type: "setTotal"; total: number };

type ServerState = {
  totalSlides: number;
  currentIndex: number;
  seed: number;
  transitionStartedAt: number;
  presentationStartedAt: number | null;
  slideEnteredAt: number;
  slideDurations: number[];
};

type ServerMessage =
  | { type: "state"; payload: ServerState; serverTime: number }
  | { type: "hello"; payload: ServerState; serverTime: number };

const state: ServerState = {
  totalSlides: 1,
  currentIndex: 0,
  seed: makeSeed(),
  transitionStartedAt: Date.now(),
  presentationStartedAt: null,
  slideEnteredAt: Date.now(),
  slideDurations: [],
};

function makeSeed(): number {
  return Math.floor(Math.random() * 0x7fffffff);
}

function recordSlideDuration(now: number) {
  const elapsed = now - state.slideEnteredAt;
  if (state.presentationStartedAt !== null && elapsed > 200) {
    state.slideDurations.push(elapsed);
  }
}

function gotoIndex(next: number, now: number) {
  if (next < 0) next = 0;
  if (next > state.totalSlides - 1) next = state.totalSlides - 1;
  if (next === state.currentIndex) return;
  recordSlideDuration(now);
  state.currentIndex = next;
  state.seed = makeSeed();
  state.transitionStartedAt = now;
  state.slideEnteredAt = now;
}

function applyCommand(cmd: AdminCommand) {
  const now = Date.now();
  switch (cmd.type) {
    case "next":
      gotoIndex(state.currentIndex + 1, now);
      break;
    case "prev":
      gotoIndex(state.currentIndex - 1, now);
      break;
    case "jumpTo":
      gotoIndex(cmd.index, now);
      break;
    case "reset":
      state.currentIndex = 0;
      state.seed = makeSeed();
      state.transitionStartedAt = now;
      state.slideEnteredAt = now;
      state.presentationStartedAt = null;
      state.slideDurations = [];
      break;
    case "start":
      state.presentationStartedAt = now;
      state.slideEnteredAt = now;
      state.slideDurations = [];
      break;
    case "setTotal":
      state.totalSlides = Math.max(1, cmd.total | 0);
      if (state.currentIndex >= state.totalSlides) {
        state.currentIndex = state.totalSlides - 1;
      }
      break;
  }
}

const clients = new Set<WebSocket>();

function broadcast(message: ServerMessage) {
  const payload = JSON.stringify(message);
  for (const client of clients) {
    if (client.readyState === client.OPEN) {
      client.send(payload);
    }
  }
}

const MIME: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");

function serveStatic(req: http.IncomingMessage, res: http.ServerResponse) {
  if (!isProd) {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("dev mode: open Vite dev server at http://localhost:5173");
    return;
  }
  const requestUrl = req.url ?? "/";
  const cleanPath = requestUrl.split("?")[0] ?? "/";
  let filePath = path.join(distDir, cleanPath);
  if (!filePath.startsWith(distDir)) {
    res.writeHead(403);
    res.end();
    return;
  }
  fs.stat(filePath, (err, stat) => {
    if (err || stat.isDirectory()) {
      filePath = path.join(distDir, "index.html");
    }
    fs.readFile(filePath, (readErr, data) => {
      if (readErr) {
        res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
        res.end("not found");
        return;
      }
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, {
        "content-type": MIME[ext] ?? "application/octet-stream",
        "cache-control": ext === ".html" ? "no-store" : "public, max-age=3600",
      });
      res.end(data);
    });
  });
}

const httpServer = http.createServer((req, res) => {
  if ((req.url ?? "").startsWith("/healthz")) {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("ok");
    return;
  }
  serveStatic(req, res);
});

const wss = new WebSocketServer({ server: httpServer, path: "/ws" });

wss.on("connection", (socket) => {
  clients.add(socket);
  socket.send(
    JSON.stringify({ type: "hello", payload: state, serverTime: Date.now() })
  );

  socket.on("message", (data) => {
    let parsed: unknown;
    try {
      parsed = JSON.parse(data.toString());
    } catch {
      return;
    }
    if (!parsed || typeof parsed !== "object") return;
    const cmd = parsed as AdminCommand;
    if (
      cmd.type !== "next" &&
      cmd.type !== "prev" &&
      cmd.type !== "jumpTo" &&
      cmd.type !== "reset" &&
      cmd.type !== "start" &&
      cmd.type !== "setTotal"
    ) {
      return;
    }
    applyCommand(cmd);
    broadcast({ type: "state", payload: state, serverTime: Date.now() });
  });

  socket.on("close", () => {
    clients.delete(socket);
  });
});

httpServer.listen(PORT, () => {
  console.log(`[ws] listening on http://localhost:${PORT} (mode=${isProd ? "prod" : "dev"})`);
});
