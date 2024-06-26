import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://inventory.w3studio.pro/api/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },

    },
  },
})
