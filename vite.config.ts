import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginRequire from 'vite-plugin-require';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgLoader(), vitePluginRequire.default({ fileRegex:/(.jsx?|.tsx?|.svg)$/ })],
})
