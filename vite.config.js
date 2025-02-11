import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',  // Ensures that assets are placed in the 'assets' folder in 'dist'
    rollupOptions: {
      input: './src/index.html', // Specify the entry point
    },
  },
});
