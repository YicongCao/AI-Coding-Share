import WebSocket from "ws";

const URL = "ws://localhost:5174/ws";

function connect(label) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(URL);
    const messages = [];
    ws.on("open", () => {
      console.log(`[${label}] open`);
    });
    ws.on("message", (data) => {
      const msg = JSON.parse(data.toString());
      messages.push(msg);
      console.log(
        `[${label}] msg type=${msg.type} index=${msg.payload?.currentIndex} total=${msg.payload?.totalSlides} seed=${msg.payload?.seed}`
      );
    });
    ws.on("error", reject);
    setTimeout(() => resolve({ ws, messages }), 200);
  });
}

async function main() {
  const admin = await connect("admin");
  await new Promise((r) => setTimeout(r, 100));

  admin.ws.send(JSON.stringify({ type: "setTotal", total: 79 }));
  await new Promise((r) => setTimeout(r, 100));

  admin.ws.send(JSON.stringify({ type: "reset" }));
  await new Promise((r) => setTimeout(r, 100));

  const viewerA = await connect("viewerA");
  const viewerB = await connect("viewerB");
  await new Promise((r) => setTimeout(r, 100));

  admin.ws.send(JSON.stringify({ type: "next" }));
  await new Promise((r) => setTimeout(r, 100));
  admin.ws.send(JSON.stringify({ type: "next" }));
  await new Promise((r) => setTimeout(r, 100));
  admin.ws.send(JSON.stringify({ type: "next" }));
  await new Promise((r) => setTimeout(r, 200));

  admin.ws.send(JSON.stringify({ type: "jumpTo", index: 7 }));
  await new Promise((r) => setTimeout(r, 200));

  admin.ws.send(JSON.stringify({ type: "prev" }));
  await new Promise((r) => setTimeout(r, 200));

  const lastA = viewerA.messages.at(-1);
  const lastB = viewerB.messages.at(-1);
  const lastAdmin = admin.messages.at(-1);
  console.log("---");
  console.log("admin last index =", lastAdmin?.payload?.currentIndex);
  console.log("viewerA last index =", lastA?.payload?.currentIndex);
  console.log("viewerB last index =", lastB?.payload?.currentIndex);
  console.log("viewerA last seed =", lastA?.payload?.seed);
  console.log("viewerB last seed =", lastB?.payload?.seed);

  const ok =
    lastA?.payload?.currentIndex === lastAdmin?.payload?.currentIndex &&
    lastA?.payload?.seed === lastB?.payload?.seed &&
    lastB?.payload?.currentIndex === 6;
  console.log("SYNC_OK", ok);

  admin.ws.close();
  viewerA.ws.close();
  viewerB.ws.close();
  process.exit(ok ? 0 : 1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
