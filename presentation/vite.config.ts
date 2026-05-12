import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const WS_PORT = Number(process.env.WS_PORT ?? 5174);

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    fs: {
      allow: [".."],
    },
    proxy: {
      "/ws": {
        target: `ws://localhost:${WS_PORT}`,
        ws: true,
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
