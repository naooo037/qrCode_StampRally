import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['smarthr-ui']
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    cors: true,
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
})
