import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/postcss";

export default defineConfig({
  server: {
    static: true,
  },
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
  },
  routeDir: "/Anastasiya-Gurina/",
});
