import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: {
    host: true,
    port: 8000,
  },
  optimizeDeps: {
    include: ['vue','buffer'],
  },
  plugins: [
    vue(),
    // basicSsl()
  ],
})
