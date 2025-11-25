import { defineConfig } from 'vite';

export default defineConfig({
  root: './frontend/src',    // frontend/src as root
  build: {
    outDir: '../build',      // output to frontend/build
    emptyOutDir: true,
    rollupOptions: {
      input: 'main.ts',      // relative to root
      output: { entryFileNames: 'main.js' }
    },
    minify: 'terser'
  }
});
