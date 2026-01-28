import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',     // Root is current directory
  publicDir: 'public', // Static assets
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    open: true,
  },
});
