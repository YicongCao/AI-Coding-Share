import WebSocket from "ws";

const URL = "ws://localhost:5174/ws";

function open(label) {
  return new Promise((resolve) => {
    const ws = new WebSocket(URL);
    const messages = [];
    ws.on("open", () => {
      // wait for hello, then resolve
    });
    ws.on("message", (data) => {
      const msg = JSON.parse(data.toString());
      messages.push(msg);
      if (msg.type === "hello") resolve({ ws, messages });
    });
    ws.on("error", (e) => console.warn(label, "error", e.message));
  });
}

function send(ws, obj) {
  ws.send(JSON.stringify(obj));
}

function lastStats(messages) {
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i].type === "stats") return messages[i].payload;
  }
  return null;
}

async function main() {
  const admin = await open("admin");
  send(admin.ws, { type: "identify", role: "admin" });
  send(admin.ws, { type: "setTotal", total: 79 });
  send(admin.ws, { type: "reset" });
  await new Promise((r) => setTimeout(r, 200));

  const a = await open("aud-a");
  send(a.ws, { type: "identify", role: "audience" });
  send(a.ws, { type: "ping" });
  const b = await open("aud-b");
  send(b.ws, { type: "identify", role: "audience" });
  send(b.ws, { type: "ping" });
  await new Promise((r) => setTimeout(r, 400));

  const s1 = lastStats(admin.messages);
  console.log("after both audience pinged:", s1);
  if (!s1 || s1.activeAudience !== 2 || s1.audienceClients !== 2 || s1.adminClients !== 1) {
    console.error("FAIL: stats mismatch", s1);
    process.exit(1);
  }

  send(admin.ws, { type: "next" });
  await new Promise((r) => setTimeout(r, 200));
  const lastStateAdmin = [...admin.messages].reverse().find((m) => m.type === "state");
  if (!lastStateAdmin || lastStateAdmin.payload.currentIndex !== 1) {
    console.error("FAIL: state not propagated after admin next", lastStateAdmin);
    process.exit(1);
  }
  console.log("admin saw state index", lastStateAdmin.payload.currentIndex);

  // Verify audience clients ALSO got the new state
  const lastStateA = [...a.messages].reverse().find((m) => m.type === "state");
  if (!lastStateA || lastStateA.payload.currentIndex !== 1) {
    console.error("FAIL: audience did not receive state", lastStateA);
    process.exit(1);
  }
  console.log("audience saw state index", lastStateA.payload.currentIndex);

  // Verify audience clients did NOT receive stats messages (only admin should)
  const audStats = a.messages.find((m) => m.type === "stats");
  if (audStats) {
    console.error("FAIL: audience received stats message", audStats);
    process.exit(1);
  }
  console.log("audience filtered out of stats broadcast: OK");

  a.ws.close();
  await new Promise((r) => setTimeout(r, 200));
  const s2 = lastStats(admin.messages);
  console.log("after one audience closed:", s2);
  if (!s2 || s2.audienceClients !== 1) {
    console.error("FAIL: audienceClients not decremented", s2);
    process.exit(1);
  }

  // Wait for active timeout (server uses 8.5s) — skip that test, just verify ping refreshes work
  send(b.ws, { type: "ping" });
  await new Promise((r) => setTimeout(r, 200));
  const s3 = lastStats(admin.messages);
  console.log("after surviving audience repinged:", s3);
  if (s3.activeAudience !== 1) {
    console.error("FAIL: active should be 1", s3);
    process.exit(1);
  }

  admin.ws.close();
  b.ws.close();
  console.log("STATS_SMOKE_OK");
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
