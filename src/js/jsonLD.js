import siteData from "../data/siteData.json";
import { slugify } from "../lib/Slugify";

export default function jsonLDGenerator({ type, post, url }) {
  if (type === "post") {
    const ldData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
      headline: post.title,
      description: post.description,
      image: post.image.src,
      author: {
        "@type": "Person",
        name: post.author,
        url: `/author/${slugify(post.author)}`,
      },
      datePublished: post.date,
    };
    return `<script type="application/ld+json">${JSON.stringify(ldData)}</script>`;
  }

  const websiteData = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: siteData.title,
    url: import.meta.env.SITE || "http://localhost:4321/",
  };

  return `<script type="application/ld+json">${JSON.stringify(websiteData)}</script>`;
}

// export default function jsonLDGenerator({ type, post, url }) {
//   if (type === "post") {
//     return `<script type="application/ld+json">
//       {
//         "@context": "https://schema.org",
//         "@type": "BlogPosting",
//         "mainEntityOfPage": {
//           "@type": "WebPage",
//           "@id": "${url}"
//         },
//         "headline": "${post.title}",
//         "description": "${post.description}",
//         "image": "${post.image.src}",
//         "author": {
//           "@type": "Person",
//           "name": "${post.author}",
//           "url": "/author/${slugify(post.author)}"
//         },
//         "datePublished": "${post.date}"
//       }
//     </script>`;
//   }
//   return `<script type="application/ld+json">
//       {
//       "@context": "https://schema.org/",
//       "@type": "WebSite",
//       "name": "${siteData.title}",
//       "url": "${import.meta.env.SITE} || http://localhost:4321/"
//       }
//     </script>`;
// }
