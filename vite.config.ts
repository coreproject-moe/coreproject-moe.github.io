import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    // exclude: ['@coreproject-moe/icons'],
  },
  plugins: [sveltekit()],
  esbuild: {
    target: "esnext",
    legalComments: "external",
  },
  css: {
    devSourcemap: true,
    // Switch to lightning.css when tailwind supports it
    transformer: "postcss",
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    chunkSizeWarningLimit: 2048,
    emptyOutDir: true,
    target: "esnext",
    cssTarget: "esnext",
    minify: "terser",
    // sourcemap: true,
  },
  worker: {
    format: "es",
  },
});
