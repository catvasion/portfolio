import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
module.exports = {
  build: {
    chunkSizeWarningLimit: 2000000,
  },
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
