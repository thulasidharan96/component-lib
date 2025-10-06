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
        '@org/ui': isBuild ? resolve(__dirname, 'dist/index.js') : resolve(__dirname, 'src/index.ts'),
      },
    },
    optimizeDeps: {
      // Prevent Vite from trying to prebundle the aliased library as a package
      exclude: ['@org/ui'],
    },
    build: {
      outDir: resolve(__dirname, 'docs'),
      emptyOutDir: false,
      assetsDir: 'assets',
    },
  };
});
