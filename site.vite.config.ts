import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path';

export default defineConfig({
  root: resolve(__dirname, 'src/site'),
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@org/ui': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: resolve(__dirname, 'docs'),
    emptyOutDir: false,
    assetsDir: 'assets',
  },
});
