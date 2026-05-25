import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/portfolio-dataprojects/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
