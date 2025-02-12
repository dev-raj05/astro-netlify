// export const myPortableTextComponents = {
//   types: {
//     block: ({ node, children }) => {
//       const style = node.font || "normal";

//       // Apply custom font size if specified
//       const customFontSize =
//         node.fontSize && node.fontSize.value && node.fontSize.unit
//           ? { fontSize: `${node.fontSize.value}${node.fontSize.unit}` }
//           : {};

//       switch (style) {
//         case "h1":
//           return (
//             <h1 style={customFontSize} class="text-4xl font-bold">
//               {children}
//             </h1>
//           );
//         case "h2":
//           return (
//             <h2 style={customFontSize} class="text-3xl font-bold">
//               {children}
//             </h2>
//           );
//         case "h3":
//           return (
//             <h3 style={customFontSize} class="text-2xl font-bold">
//               {children}
//             </h3>
//           );
//         case "h4":
//           return (
//             <h4 style={customFontSize} class="text-xl font-bold">
//               {children}
//             </h4>
//           );
//         case "blockquote":
//           return (
//             <blockquote
//               style={customFontSize}
//               class="border-l-4 pl-4 italic text-gray-600"
//             >
//               {children}
//             </blockquote>
//           );
//         default:
//           return (
//             <p style={customFontSize} class="text-base">
//               {children}
//             </p>
//           );
//       }
//     },
//   },
// };
