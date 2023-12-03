import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// import vitePluginRequire from 'vite-plugin-require';
// import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "cv-portfolio",
      fileName: "cv-portfolio",
    },
    outDir: "./dist",
    target: "esnext", // transpile as little as possible
  },
  plugins: [dts({ insertTypesEntry: true }), react()],
  // plugins: [react()], // , svgLoader(), vitePluginRequire.default({ fileRegex:/(.jsx?|.tsx?|.svg)$/ })],
});
