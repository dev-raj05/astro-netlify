import { s as sanityClient } from '../../chunks/page-ssr_FyCvyDbI.mjs';
import { c as createComponent, a as createAstro, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_BoqlVpRv.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_acmHNYUL.mjs';
import { jsx } from 'react/jsx-runtime';
import 'react';
import { PortableText } from '@portabletext/react';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const visualEditingEnabled = true;
const token = "skZQ4VQ8Mnch1UmBqrHI8sjHWCU2VvzMrqD2F57s22C6Y3kQjSkr3bPPfUKSoxmuwI18BqrehxYtqzv7V6uvAlTKfsGAXyAqzCaWee8sQwvRjBI6NU6QBOBl8jfRgIrOndAT6JNu88dZnp7pRRMrtKADGB44Wqf4Ohphfmow6OS18Vuyk7bB";
async function loadQuery({
  query,
  params
}) {
  const perspective = "previewDrafts" ;
  const { result, resultSourceMap } = await sanityClient.fetch(
    query,
    params ?? {},
    {
      filterResponse: false,
      perspective,
      resultSourceMap: "withKeyArraySelector" ,
      stega: visualEditingEnabled,
      ...{ token } 
    }
  );
  return {
    data: result,
    sourceMap: resultSourceMap,
    perspective
  };
}

const myPortableTextComponents = {
  // Mapping for block-level content
  block: {
    // Render normal text as a paragraph with a custom class
    normal: ({ children }) => /* @__PURE__ */ jsx("p", { className: "paragraph", children }),
    // Render h1 blocks as an h1 element with a custom class
    h1: ({ children }) => /* @__PURE__ */ jsx("h1", { className: "heading1", children }),
    // Render h2 blocks as an h2 element with a custom class
    h2: ({ children }) => /* @__PURE__ */ jsx("h2", { className: "heading2", children }),
    // Render blockquotes with a custom class
    blockquote: ({ children }) => /* @__PURE__ */ jsx("blockquote", { className: "blockquote", children })
    // Add more block styles as needed…
  },
  // Mapping for custom types (e.g., images)
  types: {
    image: ({ value }) => {
      return /* @__PURE__ */ jsx(
        "img",
        {
          src: value.asset?.url || "",
          alt: value.alt || "Content image",
          className: "content-image"
        }
      );
    }
  }
};
const RichTextRenderer = ({ content }) => {
  return /* @__PURE__ */ jsx(PortableText, { value: content, components: myPortableTextComponents });
};

const $$Astro = createAstro();
async function getStaticPaths() {
  const { data: posts } = await loadQuery({
    query: `*[_type == "post"]`
  });
  return posts.map(({ slug }) => {
    return {
      params: {
        slug: slug.current
      }
    };
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { params } = Astro2;
  const querypost = `*[_type == 'post' && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  "mainImage": coalesce(mainImage.asset->url, ""),
  author,
  body,
  publishedAt,
  tags
}`;
  const { data: post } = await loadQuery({
    query: querypost,
    params
  });
  console.log("Fetched Post Data:", post);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4 md:px-10 lg:px-20 py-10"> <article class="prose mx-auto dark:prose-invert text-center w-[60%]"> <!-- Blog Title --> <h1 class="text-3xl md:text-4xl font-bold leading-tight mb-6">${post.title}</h1> <!-- Blog Image --> ${post.mainImage && renderTemplate`<div class="w-full overflow-hidden rounded-xl shadow-lg"> <img class="w-full h-[30rem] object-cover"${addAttribute(post.mainImage, "src")}${addAttribute(post.alt, "alt")}> </div>`} <!-- Tags --> <div class="flex flex-wrap justify-center gap-3 mt-5"> ${post.tags.map((tag) => renderTemplate`<span class="px-3 py-1 text-sm font-medium bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full shadow-md hover:scale-105 transition"> <a href="#" class="">${tag}</a> </span>`)} </div> <!-- Publish Date --> <div class="mt-4 text-sm text-gray-500"> <small>Published on ${post.publishedAt}</small> <small></small> </div> </article> <!-- Blog Content --> <div class="mt-12"> <!-- <PortableText portableText={post.body} /> --> ${renderComponent($$result2, "RichTextRenderer", RichTextRenderer, { "content": post.body, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/components/RichTextRenderer", "client:component-export": "default" })} </div> </main> ` })} <!-- 
  <div>
    <article>
    <div>
      <h1 class="text-sm text-center">{post.title}</h1>
    </div>
    <div class="flex justify-center items-center">
      <img class="h-[50%] w-[70%]" src={post.mainImage} alt={post.alt}>
      <p>{post.author}</p>
      <p>{post.publishedAt}</p>
    </div>
  </article>
</div> -->`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/post/[...slug].astro", void 0);

const $$file = "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/post/[...slug].astro";
const $$url = "/post/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
