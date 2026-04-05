import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // This ensures assets are placed in the right spot for Netlify
    outDir: 'dist',
    assetsDir: 'assets',
  },
  // If you are deploying to a custom sub-path, change '/' to '/your-path/'
  base: '/', 
})