import { s as sanityClient } from '../../chunks/page-ssr_FyCvyDbI.mjs';
import { c as createComponent, a as createAstro, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_BoqlVpRv.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Nd-vBnvh.mjs';
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
  "tags": tags[]->name
}`);
  [...new Set(posts.flatMap((post) => post.tags || []))];
  const { tag } = Astro2.params;
  const filteredPosts = await sanityClient.fetch(
    `*[_type == "post" && $tag in tags[]->name]{
    title,
    slug,
    mainImage,
    "tags": tags[]->name
  }`,
    { tag }
  );
  console.log(filteredPosts);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl font-bold">Posts for ${tag}</h1> ${filteredPosts.length > 0 ? filteredPosts.map((post) => renderTemplate`<div class="border p-4 my-2"> <img${addAttribute(post.mainImage, "src")}${addAttribute(post.title, "alt")} class="w-full h-40 object-cover rounded-md"> <h2 class="text-xl font-semibold mt-2"> <a${addAttribute(`/posts/${post.slug}`, "href")} class="text-blue-500 hover:underline">${post.title}</a> </h2> </div>`) : renderTemplate`<p>No posts found for this tag.</p>`}` })}`;
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
