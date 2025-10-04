import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname2 = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: __dirname2,
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@org/ui': resolve(__dirname2, '../src'),
    }
  },
  build: {
    outDir: resolve(__dirname2, '../docs'),
    emptyOutDir: false,
    assetsDir: 'assets'
  },
});
