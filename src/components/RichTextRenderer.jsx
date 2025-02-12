// src/components/RichTextRenderer.jsx
import React from "react";
import { PortableText } from "@portabletext/react";

const myPortableTextComponents = {
  // Mapping for block-level content
  block: {
    // Render normal text as a paragraph with a custom class
    normal: ({ children }) => <p className="paragraph">{children}</p>,
    // Render h1 blocks as an h1 element with a custom class
    h1: ({ children }) => <h1 className="heading1">{children}</h1>,
    // Render h2 blocks as an h2 element with a custom class
    h2: ({ children }) => <h2 className="heading2">{children}</h2>,
    // Render blockquotes with a custom class
    blockquote: ({ children }) => (
      <blockquote className="blockquote">{children}</blockquote>
    ),
    // Add more block styles as needed…
  },
  // Mapping for custom types (e.g., images)
  types: {
    image: ({ value }) => {
      return (
        <img
          src={value.asset?.url || ""}
          alt={value.alt || "Content image"}
          className="content-image"
        />
      );
    },
  },
};

const RichTextRenderer = ({ content }) => {
  return <PortableText value={content} components={myPortableTextComponents} />;
};

export default RichTextRenderer;
