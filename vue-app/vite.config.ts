import federation from "@originjs/vite-plugin-federation";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "vue",
      filename: "remoteEntry.js",
      exposes: { "./mount": "./src/mount.ts" },
      shared: ["vue"]
    })
  ],
  build: {
    target: "esnext"
  }
});
