import { defineConfig } from 'vite';

export default defineConfig({
  root: './frontend',  // Set the root to your 'frontend' folder
  build: {
    outDir: '../dist',  // Set the output directory for the build
  },
});
