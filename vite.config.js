import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // Set the root to the project's root
  build: {
    outDir: 'dist', // Output will be generated in dist
    rollupOptions: {
      input: './index.html', // Entry point remains in the root index.html
    },
  },
});
