import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// In development, requests to /api/* are forwarded to the Express backend,
// so you don't need to configure CORS or an API URL locally.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
});
