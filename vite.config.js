import { defineConfig } from 'vite'
import path from 'path'; // ✅ Add this line
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  base: "/", 
    resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
})
