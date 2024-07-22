import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/js/app.tsx',
      refresh: true,
    }),
    react(),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
    alias: {
      '@': '/resources/js',
    },
  },
});
