import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      copyDtsFiles: true,
      include: ['src']
    })
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'OrgUI',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'index.js' : 'index.cjs')
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        '@fluentui/react-components',
        '@griffel/react'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    css: true
  }
});
