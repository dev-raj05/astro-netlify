// // vite.config.js
// import { defineConfig } from "vite";

// export default defineConfig({
//   optimizeDeps: {
//     esbuildOptions: {
//       plugins: [
//         {
//           name: "fix-shallowequal",
//           setup(build) {
//             // Intercept imports of "shallowequal"
//             build.onResolve({ filter: /^shallowequal$/ }, (args) => {
//               return { path: args.path, namespace: "fix-shallowequal" };
//             });
//             // Re-export everything from "shallowequal" as a default export
//             build.onLoad(
//               { filter: /.*/, namespace: "fix-shallowequal" },
//               async () => {
//                 return {
//                   contents:
//                     'import * as se from "shallowequal"; export default se;',
//                   loader: "js",
//                 };
//               }
//             );
//           },
//         },
//       ],
//     },
//   },
// });
