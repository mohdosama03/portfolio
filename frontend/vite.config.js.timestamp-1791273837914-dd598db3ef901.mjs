
import { defineConfig } from "file:///C:/Users/Surface%20Pro%205/Downloads/portfolio2.0/portfolio/frontend/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Surface%20Pro%205/Downloads/portfolio2.0/portfolio/frontend/node_modules/@vitejs/plugin-react/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": "http://localhost:5000"
    }
  }
});
export {
  vite_config_default as default
};
