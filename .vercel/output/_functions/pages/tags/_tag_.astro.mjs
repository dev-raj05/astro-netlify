import { s as sanityClient } from '../../chunks/page-ssr_FyCvyDbI.mjs';
import { c as createComponent, a as createAstro, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_BDnHfdZN.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Formatdate_Dg-7c8bM.mjs';
import { $ as $$Card } from '../../chunks/Card_CLyUDPvn.mjs';
import { u as unSlugify } from '../../chunks/Slugify_Ta8JJPF6.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  return allTags.map((tag) => ({
    params: { tag }
  }));
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const posts = await sanityClient.fetch(`*[_type == "post"]{
  "tags": tags[]
}`);
  [...new Set(posts.flatMap((post) => post.tags || []))];
  const { tag } = Astro2.params;
  const filteredPosts = await sanityClient.fetch(
    `*[_type == "post" && $tag in tags[]]{
    title,
    slug,
    "mainImage": coalesce(mainImage.asset->url, ""),
    tags
  }`,
    { tag: `${unSlugify(tag)}` }
  );
  console.log(tag);
  console.log(filteredPosts);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl font-bold">Posts for ${tag}</h1> ${filteredPosts.length > 0 ? renderTemplate`<div class="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2"> ${filteredPosts.map((post) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "post": post })}`)} </div>` : renderTemplate`<p>No post available related to this tag</p>`}` })}`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/tags/[tag].astro", void 0);

const $$file = "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
