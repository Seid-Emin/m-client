import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      core: `${path.resolve(__dirname, './src/core/')}`,
      store:`${path.resolve(__dirname, './src/core/+store/')}`,
      app:`${path.resolve(__dirname, './src/core/+app/')}`,
      hooks:`${path.resolve(__dirname, './src/core/hooks/')}`,

      components:`${path.resolve(__dirname, './src/components/')}`,
      routes:`${path.resolve(__dirname, './src/routes/')}`,
    },
  }
});
