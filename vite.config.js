import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

module.exports = {
  build: {
    chunkSizeWarningLimit: 500, // Set your desired chunk size limit in kilobytes
  },
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
