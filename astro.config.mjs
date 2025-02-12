// astro.config.mjs
import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

import { loadEnv } from "vite";
import icon from "astro-icon";
const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  ""
);

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: false, // See note on using the CDN
      // apiVersion: "2025-01-28", // insert the current date to access the latest version of the API
      studioBasePath: "/studio",
      visualEditing: true,
      stega: {
        // enabled: false,
        studioUrl: "/studio",
      },
    }),
    react(),
    icon(),
  ],
  output: "server",
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar: {
    enabled: false,
  },
});
