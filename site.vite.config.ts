import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path';

export default defineConfig(({ command }) => {
  const isBuild = command === 'build';
  return {
    root: resolve(__dirname, 'src/site'),
    base: './',
    plugins: [react()],
    resolve: {
      alias: {
        // Use local source during dev for instant feedback; use built dist in production build
        '@org/ui': isBuild ? resolve(__dirname, 'dist/index.js') : resolve(__dirname, 'src'),
      },
    },
    build: {
      outDir: resolve(__dirname, 'docs'),
      emptyOutDir: false,
      assetsDir: 'assets',
    },
  };
});
