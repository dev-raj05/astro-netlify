import { s as sanityClient } from '../chunks/page-ssr_BP2uGixO.mjs';
import { b as createAstro, c as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_Bt2qJKtQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Formatdate_CnL7MNo-.mjs';
import { $ as $$Card } from '../chunks/Card_9mJI9nUK.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://stargazers.club");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const searchQuery = Astro2.url.searchParams.get("q") || "";
  const posts = await sanityClient.fetch(
    `*[_type == "post" && 
    (title match $query || tags[] match $query)
  ]{
    title,
    "mainImage": coalesce(mainImage.asset->url, ""),
    body,
    tags,
    "slug": slug.current
  }`,
    { query: `*${searchQuery}*` }
    // Use the search query to filter
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<form method="GET" class="w-full max-w-xl mx-auto p-6 flex  justify-center items-center gap-5"> <input type="text" name="q" placeholder="Search posts..."${addAttribute(searchQuery, "value")} class="w-full p-4 text-lg border border-gray-300 rounded-xl shadow-md"> <button type="submit" class="w-[7rem] p-3 text-white bg-blue-500 rounded-lg shadow-md">Search</button> </form>  <div class="mt-6 space-y-4"> ${posts.length > 0 ? renderTemplate`<div class="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "post": post })}`)} </div>` : renderTemplate`<p class="text-red-600 text-center">No such post related to your query</p>`} </div> ` })} <!-- ---
import SearchComponent from "../components/Search.jsx";
import Layout from "../layouts/Layout.astro";
---
<Layout>
    <SearchComponent client:load />
</Layout> -->`;
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
