import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    port: 4321,
    strictPort: true,
    host: true,
    allowedHosts: (process.env.VITE_ALLOWED_HOSTS || "").split(","),
    watch: {
      usePolling: true,
    },
    origin: "http://127.0.0.1:4321",
  },
  optimizeDeps: { exclude: ["node_modules/.cache"] },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: "/",
//   plugins: [react()],
//   // preview: {
//   //   host: "0.0.0.0",
//   //   port: 5173,
//   //   strictPort: true,
//   // },

//   server: {
//     port: 5173,
//     strictPort: true,
//     host: true,
//     watch: {
//       usePolling: true,
//     },
//     origin: "http://127.0.0.1:4321",
//   },
//   optimizeDeps: { exclude: ["node_modules/.cache"] },
// });
