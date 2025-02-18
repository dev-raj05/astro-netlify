import { s as sanityClient } from '../../chunks/page-ssr_BP2uGixO.mjs';
import { c as createComponent, b as createAstro, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_BvdISoo7.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Formatdate_LN7BU_Tt.mjs';
import { $ as $$Card } from '../../chunks/Card_CCmDBRAz.mjs';
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class=" font-bold mt-10 text-center">Posts related to ${unSlugify(tag)} Tag</h1> ${filteredPosts.length > 0 ? renderTemplate`<div class="mb-4 mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2"> ${filteredPosts.map((post) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "post": post })}`)} </div>` : renderTemplate`<p>No post available related to this tag</p>`}` })}`;
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
