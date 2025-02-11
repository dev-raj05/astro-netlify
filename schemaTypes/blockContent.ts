import { defineType, defineArrayMember } from "sanity";
// import { codeInput } from "@sanity/code-input"; // ✅ Import the Sanity Code Input Plugin

export const blockContentType = defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    // Text Blocks
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" }, // ✅ Inline Code Support
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [{ title: "URL", name: "href", type: "url" }],
          },
        ],
      },
    }),

    // ✅ Image Block
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alternative Text" }],
    }),

    // ✅ Code Block (Fix for "Unknown type: code" error)
    defineArrayMember({
      type: "object",
      name: "code",
      title: "Code Block",
      fields: [
        {
          name: "language",
          title: "Language",
          type: "string",
          options: {
            list: [
              { title: "JavaScript", value: "javascript" },
              { title: "TypeScript", value: "typescript" },
              { title: "Python", value: "python" },
              { title: "HTML", value: "html" },
              { title: "CSS", value: "css" },
              { title: "JSON", value: "json" },
            ],
          },
        },
        {
          name: "code",
          title: "Code",
          type: "text", // ✅ Store code as text
          rows: 10,
        },
      ],
    }),

    // ✅ Table Block
    defineArrayMember({
      type: "object",
      name: "table",
      title: "Table",
      fields: [
        {
          name: "rows",
          title: "Rows",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "columns",
                  title: "Columns",
                  type: "array",
                  of: [{ type: "string" }],
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
