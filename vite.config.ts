import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    // Use esbuild instead of rollup for faster builds
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
  build: {
    rollupOptions: {
      // Disable rollup native modules
      external: [],
    },
  },
});
