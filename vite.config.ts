import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
      src: path.resolve(import.meta.dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [path.resolve(import.meta.dirname, './')],
        silenceDeprecations: ['import', 'legacy-js-api'],
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
