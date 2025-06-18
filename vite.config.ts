import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import  tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // 외부 접속 허용
    port: 5173, // 필요시 포트 변경
    strictPort: true,
    watch: { usePolling: true }
  }
})
