import { resolve } from 'path'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')
const public_dir = resolve(__dirname, 'public')

export default defineConfig({
  root,
  base: process.env.NODE_ENV === 'production' ? '/prod-base-url' : '/',
  define: {
    'process.env.PUBLIC_URL': JSON.stringify(process.env.NODE_ENV === 'production' ? '/prod-base-url' : '/')
  },
  plugins: [react(), splitVendorChunkPlugin(), basicSsl()],
  build: {
    outDir,
    emptyOutDir: true,
    manifest: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3002,
    open: false,
    public: public_dir,
    watch: {
      usePolling: true,
      disableGlobbing: false
    }
  }
})
