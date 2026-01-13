import federation from "@originjs/vite-plugin-federation";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "shell",
      remotes: {
        vue: "http://127.0.0.1:5174/assets/remoteEntry.js",
        react: "http://127.0.0.1:5175/assets/remoteEntry.js"
      },
      shared: ["vue"]
    })
  ],
  build: {
    target: "esnext"
  }
});
