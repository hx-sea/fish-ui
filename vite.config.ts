import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "fish-ui-xh": path.resolve(__dirname, "./src/index.ts"),
    },
  },
});
