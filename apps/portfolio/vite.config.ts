import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/Anastasiya-Gurina/",
  plugins: [react(), tailwindcss()],

  server: {
    port: 3003,
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@workspace/ui": path.resolve(__dirname, "../../packages/ui/src"),
    },
  },

  root: ".",
  build: {
    outDir: "dist",
  },
  publicDir: "public",
});
