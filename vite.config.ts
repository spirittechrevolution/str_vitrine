import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isCI = process.env.CI === "true";

const plugins = isCI
  ? [react()]
  : (() => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const { youwareVitePlugin } = require("@youware/vite-plugin-react");
        return [youwareVitePlugin(), react()];
      } catch {
        return [react()];
      }
    })();

// https://vite.dev/config/
export default defineConfig({
  plugins,
  server: {
    host: "127.0.0.1",
    port: 5173,
  },
  build: {
    sourcemap: false,
  },
});
