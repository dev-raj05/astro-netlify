import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { presentationTool } from "sanity/presentation";
import { resolve } from "./src/lib/resolve";
import { enableVisualEditing } from "@sanity/visual-editing";

export default defineConfig({
  name: "default",
  title: "astro-env-studio",
  projectId: "f9zwkku2",
  dataset: "production",

  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      // resolve,
      // previewUrl: location.origin,
      previewUrl: {
        origin: "http://localhost:4321",
        previewMode: {
          enable: "/",
          disable: "/api/draft-mode/disable",
        },
      },
    }),
    enableVisualEditing(),
  ],

  schema: {
    types: schemaTypes,
  },
});
