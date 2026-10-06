import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // GitHub repo name — keeps asset paths correct on GH Pages
  server: {
    port: 5173,
  },
});
