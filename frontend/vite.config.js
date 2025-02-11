import { defineConfig } from 'vite'

export default defineConfig({
  root: './frontend', // set the root to the 'frontend' folder
  build: {
    outDir: 'dist', // output directory
    rollupOptions: {
      input: './index.html', // explicitly set the path to your index.html
    },
  },
})
