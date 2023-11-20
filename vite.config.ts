import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginRequire from 'vite-plugin-require';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/cv-portfolio/",
  plugins: [react(), vitePluginRequire.default({ fileRegex:/(.jsx?|.tsx)$/ })],
})
