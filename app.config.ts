import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	server: {
		static: true,
	},
	vite: {
		plugins: [tailwindcss()],
		base: "/Anastasiya-Gurina/",
	},
});
