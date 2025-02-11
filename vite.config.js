import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures relative paths for assets
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Ensures assets are placed in 'dist/assets'
    rollupOptions: {
      input: 'src/index.html', // Corrected entry point
    },
  },
});
