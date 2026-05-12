import { useEffect, useRef, useState } from "react";

export type SyncState = {
  totalSlides: number;
  currentIndex: number;
  seed: number;
  transitionStartedAt: number;
  presentationStartedAt: number | null;
  slideEnteredAt: number;
  slideDurations: number[];
};

export type SyncStatus = "connecting" | "open" | "closed";

export type AdminCommand =
  | { type: "next" }
  | { type: "prev" }
  | { type: "jumpTo"; index: number }
  | { type: "reset" }
  | { type: "start" }
  | { type: "setTotal"; total: number };

export type SyncBag = {
  state: SyncState | null;
  status: SyncStatus;
  timeOffsetMs: number;
  send: (cmd: AdminCommand) => void;
};

function buildWsUrl(): string {
  const proto = location.protocol === "https:" ? "wss" : "ws";
  return `${proto}://${location.host}/ws`;
}

export function useSync(): SyncBag {
  const [state, setState] = useState<SyncState | null>(null);
  const [status, setStatus] = useState<SyncStatus>("connecting");
  const [timeOffsetMs, setTimeOffsetMs] = useState(0);
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimerRef = useRef<number | null>(null);
  const attemptRef = useRef(0);
  const isClosedRef = useRef(false);

  useEffect(() => {
    isClosedRef.current = false;
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
      };

      ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);
          if (!msg || typeof msg !== "object") return;
          if (msg.type === "state" || msg.type === "hello") {
            const sv = (msg as { serverTime?: number }).serverTime;
            if (typeof sv === "number") {
              const offset = sv - Date.now();
              setTimeOffsetMs((prev) =>
                Math.abs(prev - offset) > 30 ? offset : prev
              );
            }
            const payload = (msg as { payload?: SyncState }).payload;
            if (payload && typeof payload === "object") {
              setState(payload);
            }
          }
        } catch (err) {
          console.warn("[sync] bad message", err);
        }
      };

      ws.onclose = () => {
        setStatus("closed");
        wsRef.current = null;
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

    connect();

    return () => {
      isClosedRef.current = true;
      if (reconnectTimerRef.current !== null) {
        clearTimeout(reconnectTimerRef.current);
        reconnectTimerRef.current = null;
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
  }, []);

  const send = (cmd: AdminCommand) => {
    const ws = wsRef.current;
    if (!ws || ws.readyState !== WebSocket.OPEN) return;
    try {
      ws.send(JSON.stringify(cmd));
    } catch (err) {
      console.warn("[sync] send failed", err);
    }
  };

  return { state, status, timeOffsetMs, send };
}
