import { defineConfig } from 'vite'

export default defineConfig({
  root: './frontend', // set root to frontend folder where Vite is located
  build: {
    outDir: '../dist', // set the output directory to the root dist folder
    rollupOptions: {
      input: '../index.html', // make sure to point to the correct root-level index.html
    },
  },
})
