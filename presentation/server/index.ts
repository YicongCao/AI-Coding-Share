import http from "node:http";
import path from "node:path";
import fs from "node:fs";
import url from "node:url";
import crypto from "node:crypto";
import { WebSocketServer, type WebSocket } from "ws";

const PORT = Number(process.env.WS_PORT ?? 5174);
const isProd = process.env.NODE_ENV === "production";

type Role = "admin" | "audience";

type AdminCommand =
  | { type: "next" }
  | { type: "prev" }
  | { type: "jumpTo"; index: number }
  | { type: "reset" }
  | { type: "start" }
  | { type: "setTotal"; total: number };

type ClientMessage =
  | AdminCommand
  | { type: "identify"; role: Role }
  | { type: "ping" }
  | { type: "signup"; name: string; role: string; favoriteAI: string; useCase: string };

type ServerState = {
  totalSlides: number;
  currentIndex: number;
  seed: number;
  transitionStartedAt: number;
  presentationStartedAt: number | null;
  slideEnteredAt: number;
  slideDurations: number[];
};

type StatsPayload = {
  totalClients: number;
  adminClients: number;
  audienceClients: number;
  activeAudience: number;
};

type ServerMessage =
  | { type: "hello"; payload: ServerState; serverTime: number; clientId: string }
  | { type: "state"; payload: ServerState; serverTime: number }
  | { type: "stats"; payload: StatsPayload; serverTime: number };

type ClientRecord = {
  id: string;
  socket: WebSocket;
  role: Role | null;
  lastPingAt: number;
};

const ACTIVE_TIMEOUT_MS = 8500;

const state: ServerState = {
  totalSlides: 1,
  currentIndex: 0,
  seed: makeSeed(),
  transitionStartedAt: Date.now(),
  presentationStartedAt: null,
  slideEnteredAt: Date.now(),
  slideDurations: [],
};

const clients = new Map<string, ClientRecord>();

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

function computeStats(): StatsPayload {
  const now = Date.now();
  let adminClients = 0;
  let audienceClients = 0;
  let activeAudience = 0;
  for (const c of clients.values()) {
    if (c.role === "admin") adminClients++;
    else if (c.role === "audience") {
      audienceClients++;
      if (now - c.lastPingAt < ACTIVE_TIMEOUT_MS) activeAudience++;
    }
  }
  return {
    totalClients: clients.size,
    adminClients,
    audienceClients,
    activeAudience,
  };
}

function sendTo(client: ClientRecord, msg: ServerMessage) {
  if (client.socket.readyState !== client.socket.OPEN) return;
  try {
    client.socket.send(JSON.stringify(msg));
  } catch {
    /* ignore */
  }
}

function broadcastState() {
  const msg: ServerMessage = {
    type: "state",
    payload: state,
    serverTime: Date.now(),
  };
  const payload = JSON.stringify(msg);
  for (const c of clients.values()) {
    if (c.socket.readyState === c.socket.OPEN) {
      try {
        c.socket.send(payload);
      } catch {
        /* ignore */
      }
    }
  }
}

function broadcastStats() {
  const stats = computeStats();
  const msg: ServerMessage = {
    type: "stats",
    payload: stats,
    serverTime: Date.now(),
  };
  const payload = JSON.stringify(msg);
  for (const c of clients.values()) {
    if (c.role !== "admin") continue;
    if (c.socket.readyState !== c.socket.OPEN) continue;
    try {
      c.socket.send(payload);
    } catch {
      /* ignore */
    }
  }
}

function broadcastSignup(entry: SignupEntry) {
  const msg = { type: "signup_new", entry, total: signupEntries.length, serverTime: Date.now() };
  const payload = JSON.stringify(msg);
  for (const c of clients.values()) {
    if (c.role !== "admin") continue;
    if (c.socket.readyState !== c.socket.OPEN) continue;
    try { c.socket.send(payload); } catch { /* ignore */ }
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

type SignupEntry = {
  name: string;
  role: string;
  favoriteAI: string;
  useCase: string;
  submittedAt: string;
};

const signupEntries: SignupEntry[] = [];

function readBody(req: http.IncomingMessage): Promise<string> {
  return new Promise((resolve) => {
    let body = "";
    req.on("data", (chunk: Buffer) => { body += chunk.toString(); });
    req.on("end", () => resolve(body));
  });
}

const httpServer = http.createServer(async (req, res) => {
  const urlStr = req.url ?? "/";
  const parsedUrl = url.parse(urlStr, true);
  const pathname = parsedUrl.pathname ?? "/";

  if (pathname === "/healthz") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("ok");
    return;
  }

  if (pathname === "/api/signup" && req.method === "POST") {
    try {
      const raw = await readBody(req);
      const data = JSON.parse(raw);
      const entry: SignupEntry = {
        name: String(data.name ?? "").slice(0, 100),
        role: String(data.role ?? "").slice(0, 50),
        favoriteAI: String(data.favoriteAI ?? "").slice(0, 200),
        useCase: String(data.useCase ?? "").slice(0, 500),
        submittedAt: new Date().toISOString(),
      };
      signupEntries.push(entry);
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ ok: true, count: signupEntries.length }));
    } catch {
      res.writeHead(400, { "content-type": "application/json" });
      res.end(JSON.stringify({ ok: false, error: "invalid body" }));
    }
    return;
  }

  if (pathname === "/api/signup" && req.method === "GET") {
    if (parsedUrl.query.format === "csv") {
      const header = "name,role,favoriteAI,useCase,submittedAt\n";
      const csvEscape = (s: string) => `"${s.replace(/"/g, '""')}"`;
      const rows = signupEntries.map((e) =>
        [e.name, e.role, e.favoriteAI, e.useCase, e.submittedAt].map(csvEscape).join(",")
      ).join("\n");
      res.writeHead(200, {
        "content-type": "text/csv; charset=utf-8",
        "content-disposition": "attachment; filename=signup-entries.csv",
      });
      res.end("\uFEFF" + header + rows);
    } else {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(signupEntries));
    }
    return;
  }

  serveStatic(req, res);
});

const wss = new WebSocketServer({ server: httpServer, path: "/ws" });

function isAdminCommand(t: string): t is AdminCommand["type"] {
  return (
    t === "next" ||
    t === "prev" ||
    t === "jumpTo" ||
    t === "reset" ||
    t === "start" ||
    t === "setTotal"
  );
}

wss.on("connection", (socket) => {
  const id = crypto.randomUUID();
  const record: ClientRecord = {
    id,
    socket,
    role: null,
    lastPingAt: 0,
  };
  clients.set(id, record);

  sendTo(record, {
    type: "hello",
    payload: state,
    serverTime: Date.now(),
    clientId: id,
  });

  socket.on("message", (data) => {
    let parsed: unknown;
    try {
      parsed = JSON.parse(data.toString());
    } catch {
      return;
    }
    if (!parsed || typeof parsed !== "object") return;
    const msg = parsed as ClientMessage;

    if (msg.type === "identify") {
      if (msg.role === "admin" || msg.role === "audience") {
        record.role = msg.role;
        if (msg.role === "audience") {
          record.lastPingAt = Date.now();
        }
        broadcastStats();
      }
      return;
    }

    if (msg.type === "ping") {
      if (record.role === "audience") {
        record.lastPingAt = Date.now();
        broadcastStats();
      }
      return;
    }

    if (msg.type === "signup") {
      const d = msg as Record<string, unknown>;
      const entry: SignupEntry = {
        name: String(d.name ?? "").slice(0, 100),
        role: String(d.role ?? "").slice(0, 50),
        favoriteAI: String(d.favoriteAI ?? "").slice(0, 200),
        useCase: String(d.useCase ?? "").slice(0, 500),
        submittedAt: new Date().toISOString(),
      };
      signupEntries.push(entry);
      broadcastSignup(entry);
      return;
    }

    if (isAdminCommand(msg.type)) {
      applyCommand(msg);
      broadcastState();
      broadcastStats();
    }
  });

  socket.on("close", () => {
    clients.delete(id);
    broadcastStats();
  });

  broadcastStats();
});

setInterval(() => {
  broadcastStats();
}, 2500);

httpServer.listen(PORT, () => {
  console.log(
    `[ws] listening on http://localhost:${PORT} (mode=${isProd ? "prod" : "dev"})`
  );
});
