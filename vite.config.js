// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // This ensures proper asset loading on Vercel
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})