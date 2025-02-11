import { defineConfig } from 'vite'

export default defineConfig({
  root: './', // set the root to the project's root
  build: {
    outDir: 'dist', // you can specify the output directory here
    rollupOptions: {
      input: './index.html', // explicitly set the path to your index.html
    },
  },
})
