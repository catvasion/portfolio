import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 2000000,
  },
  base: "portfolio",
  plugins: [react()],
});
