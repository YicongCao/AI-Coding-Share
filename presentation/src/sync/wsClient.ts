import { useEffect, useRef, useState } from "react";

export type SyncRole = "admin" | "audience";

export type SyncState = {
  totalSlides: number;
  currentIndex: number;
  seed: number;
  transitionStartedAt: number;
  presentationStartedAt: number | null;
  slideEnteredAt: number;
  slideDurations: number[];
};

export type SyncStats = {
  totalClients: number;
  adminClients: number;
  audienceClients: number;
  activeAudience: number;
};

export type SyncStatus = "connecting" | "open" | "closed";

export type AdminCommand =
  | { type: "next" }
  | { type: "prev" }
  | { type: "jumpTo"; index: number }
  | { type: "reset" }
  | { type: "start" }
  | { type: "setTotal"; total: number };

export type SignupEntry = {
  name: string;
  role: string;
  favoriteAI: string;
  useCase: string;
  submittedAt: string;
};

export type SyncBag = {
  state: SyncState | null;
  status: SyncStatus;
  timeOffsetMs: number;
  stats: SyncStats | null;
  clientId: string | null;
  signupEntries: SignupEntry[];
  send: (cmd: AdminCommand) => void;
  sendJson: (msg: object) => void;
};

export type SyncOptions = {
  role: SyncRole;
  pingIntervalMs?: number;
};

function buildWsUrl(): string {
  const proto = location.protocol === "https:" ? "wss" : "ws";
  return `${proto}://${location.host}/ws`;
}

const DEFAULT_PING_INTERVAL = 5000;

export function useSync({
  role,
  pingIntervalMs = DEFAULT_PING_INTERVAL,
}: SyncOptions): SyncBag {
  const [state, setState] = useState<SyncState | null>(null);
  const [stats, setStats] = useState<SyncStats | null>(null);
  const [status, setStatus] = useState<SyncStatus>("connecting");
  const [timeOffsetMs, setTimeOffsetMs] = useState(0);
  const [clientId, setClientId] = useState<string | null>(null);
  const [signupEntries, setSignupEntries] = useState<SignupEntry[]>([]);

  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimerRef = useRef<number | null>(null);
  const attemptRef = useRef(0);
  const isClosedRef = useRef(false);
  const pingTimerRef = useRef<number | null>(null);

  useEffect(() => {
    isClosedRef.current = false;

    const sendRaw = (obj: object) => {
      const ws = wsRef.current;
      if (!ws || ws.readyState !== WebSocket.OPEN) return false;
      try {
        ws.send(JSON.stringify(obj));
        return true;
      } catch {
        return false;
      }
    };

    const stopPingLoop = () => {
      if (pingTimerRef.current !== null) {
        clearInterval(pingTimerRef.current);
        pingTimerRef.current = null;
      }
    };

    const startPingLoop = () => {
      if (role !== "audience") return;
      stopPingLoop();
      if (document.visibilityState !== "visible") return;
      sendRaw({ type: "ping" });
      pingTimerRef.current = window.setInterval(() => {
        if (document.visibilityState === "visible") {
          sendRaw({ type: "ping" });
        }
      }, pingIntervalMs);
    };

    const onVisibilityChange = () => {
      if (role !== "audience") return;
      if (document.visibilityState === "visible") {
        startPingLoop();
      } else {
        stopPingLoop();
      }
    };

    const connect = () => {
      if (isClosedRef.current) return;
      setStatus("connecting");
      let ws: WebSocket;
      try {
        ws = new WebSocket(buildWsUrl());
      } catch (err) {
        console.warn("[sync] failed to open ws", err);
        scheduleReconnect();
        return;
      }
      wsRef.current = ws;

      ws.onopen = () => {
        attemptRef.current = 0;
        setStatus("open");
        sendRaw({ type: "identify", role });
        if (role === "audience" && document.visibilityState === "visible") {
          startPingLoop();
        }
      };

      ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);
          if (!msg || typeof msg !== "object") return;
          const sv = (msg as { serverTime?: number }).serverTime;
          if (typeof sv === "number") {
            const offset = sv - Date.now();
            setTimeOffsetMs((prev) =>
              Math.abs(prev - offset) > 30 ? offset : prev
            );
          }
          if (msg.type === "hello") {
            const id = (msg as { clientId?: string }).clientId;
            if (typeof id === "string") setClientId(id);
            const payload = (msg as { payload?: SyncState }).payload;
            if (payload && typeof payload === "object") setState(payload);
          } else if (msg.type === "state") {
            const payload = (msg as { payload?: SyncState }).payload;
            if (payload && typeof payload === "object") setState(payload);
          } else if (msg.type === "stats") {
            const payload = (msg as { payload?: SyncStats }).payload;
            if (payload && typeof payload === "object") setStats(payload);
          } else if (msg.type === "signup_new") {
            const entry = (msg as { entry?: SignupEntry }).entry;
            if (entry) setSignupEntries((prev) => [...prev, entry]);
          }
        } catch (err) {
          console.warn("[sync] bad message", err);
        }
      };

      ws.onclose = () => {
        setStatus("closed");
        wsRef.current = null;
        stopPingLoop();
        scheduleReconnect();
      };

      ws.onerror = () => {
        ws.close();
      };
    };

    const scheduleReconnect = () => {
      if (isClosedRef.current) return;
      if (reconnectTimerRef.current !== null) return;
      const attempt = Math.min(attemptRef.current + 1, 8);
      attemptRef.current = attempt;
      const delay = Math.min(8000, 400 * Math.pow(1.6, attempt));
      reconnectTimerRef.current = window.setTimeout(() => {
        reconnectTimerRef.current = null;
        connect();
      }, delay);
    };

    if (role === "audience") {
      document.addEventListener("visibilitychange", onVisibilityChange);
    }

    connect();

    return () => {
      isClosedRef.current = true;
      if (reconnectTimerRef.current !== null) {
        clearTimeout(reconnectTimerRef.current);
        reconnectTimerRef.current = null;
      }
      stopPingLoop();
      if (role === "audience") {
        document.removeEventListener("visibilitychange", onVisibilityChange);
      }
      const ws = wsRef.current;
      wsRef.current = null;
      if (ws) {
        ws.onopen = null;
        ws.onmessage = null;
        ws.onclose = null;
        ws.onerror = null;
        try {
          ws.close();
        } catch {
          /* ignore */
        }
      }
    };
  }, [role, pingIntervalMs]);

  const send = (cmd: AdminCommand) => {
    const ws = wsRef.current;
    if (!ws || ws.readyState !== WebSocket.OPEN) return;
    try {
      ws.send(JSON.stringify(cmd));
    } catch (err) {
      console.warn("[sync] send failed", err);
    }
  };

  const sendJson = (msg: object) => {
    const ws = wsRef.current;
    if (!ws || ws.readyState !== WebSocket.OPEN) return;
    try {
      ws.send(JSON.stringify(msg));
    } catch (err) {
      console.warn("[sync] sendJson failed", err);
    }
  };

  return { state, status, timeOffsetMs, stats, clientId, signupEntries, send, sendJson };
}
