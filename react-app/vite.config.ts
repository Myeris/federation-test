import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "react",
      filename: "remoteEntry.js",
      exposes: { "./mount": "./src/mount.tsx" },
      shared: ["react", "react-dom"]
    })
  ],
  build: {
    target: "esnext"
  }
});
