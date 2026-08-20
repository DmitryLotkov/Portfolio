import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: '/Portfolio/',
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
      src: path.resolve(import.meta.dirname, './src'),
    },
  },
  css: {
    devSourcemap: true,
    modules: {
      generateScopedName:
        mode === 'development'
          ? '[name]__[local]'
          : '[hash:base64:6]',
    },
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
}));
