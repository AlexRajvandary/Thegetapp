import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // позволяет принимать подключения извне
    allowedHosts: true, // разрешает любые хосты (в том числе *.tuna.am)
  },
})
