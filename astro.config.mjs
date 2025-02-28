// astro.config.mjs
import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import preact from "@astrojs/preact";
import { loadEnv } from "vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify";

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  ""
);

export default defineConfig({
  site: "https://yoursite.netlify.app",
  integrations: [
    preact(),
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: false, // See note on using the CDN
      // apiVersion: "2025-01-28", // insert the current date to access the latest version of the API
      studioBasePath: "/studio",
      visualEditing: true,
      stega: {
        enabled: false,
        studioUrl: "/studio",
      },
    }),
    react(),
    icon(),
    sitemap(),
  ],
  vite: {
    base: "/",
    server: {
      port: 4321,
      strictPort: true,
      host: true,
      allowedHosts: [
        "devserver.booleanmaths.com,blogdev.booleanmaths.com,blogdevback.booleanmaths.com",
      ],
      watch: {
        usePolling: true,
      },
      origin: "http://127.0.0.1:4321",
    },
    optimizeDeps: {
      exclude: ["node_modules/.cache"],
    },
    plugins: [tailwindcss()],
  },
  output: "server",
  // output: "static",
  adapter: netlify({
    edgeMiddleware: true,
  }),
  devToolbar: {
    enabled: false,
  },
});
