import { defineConfig } from 'vite'
import { resolve } from 'path'



export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        QCW1: resolve(__dirname, 'HV/QCW1/index.html')
      }
    }

  }
})