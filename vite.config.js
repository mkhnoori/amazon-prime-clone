import { defineConfig } from 'vite';

export default defineConfig({
  root: './src', // Set the root to the src directory
  build: {
    outDir: '../dist', // Output will be generated in dist
    rollupOptions: {
      input: 'src/index.html', // Entry point in src/index.html
    },
  },
});
