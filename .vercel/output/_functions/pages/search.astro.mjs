import { s as sanityClient } from '../chunks/page-ssr_FyCvyDbI.mjs';
import { c as createComponent, r as renderTemplate, e as renderComponent } from '../chunks/astro/server_BoqlVpRv.mjs';
import 'kleur/colors';
import { useState, useEffect } from 'preact/hooks';
import { jsxs, jsx } from 'preact/jsx-runtime';
import { $ as $$Layout } from '../chunks/Layout_5ZVhW5qT.mjs';
export { renderers } from '../renderers.mjs';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      if (searchQuery.trim() === "") {
        setPosts([]);
        return;
      }
      const data = await sanityClient.fetch(`*[_type == "post" && 
            (title match $query || body match $query || tags[] match $query)
          ]{
            title,
            body,
            tags,
            "slug": slug.current
          }`, {
        query: `*${searchQuery}*`
      });
      setPosts(data);
    }
    fetchPosts();
  }, [searchQuery]);
  return jsxs("div", {
    children: [jsx("input", {
      type: "text",
      name: "q",
      placeholder: "Search posts...",
      value: searchQuery,
      onInput: (e) => setSearchQuery(e.target.value)
    }), jsx("ul", {
      children: posts.map((post) => jsx("li", {
        children: jsx("h2", {
          children: post.title
        })
      }, post.slug))
    })]
  });
};

const $$Search = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SearchComponent", Search, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/components/Search.jsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/search.astro", void 0);

const $$file = "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
