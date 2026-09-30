import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures assets load correctly when deployed to GitHub Pages or any subpath
  server: {
    port: 3000,
    open: true
  }
})
