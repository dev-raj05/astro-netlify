import { s as sanityClient } from '../../chunks/page-ssr_BP2uGixO.mjs';
import { b as createAstro, c as createComponent, r as renderTemplate } from '../../chunks/astro/server_DrWRQmYu.mjs';
import 'kleur/colors';
import 'clsx';
import { s as slugify } from '../../chunks/Slugify_Ta8JJPF6.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://stargazers.club");
async function getStaticPaths() {
  return allCategories.map((category) => ({
    params: { category }
  }));
}
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const posts = await sanityClient.fetch(`*[_type == "post"]{ "categories": categories[]->name }`);
  [...new Set(posts.flatMap((post) => post.categories || []))].map(slugify);
  const { category } = Astro2.params;
  await sanityClient.fetch(
    `*[_type == "post" && $category in categories[]->name]{
    title,
    slug,
    mainImage,
    "categories": categories[]->name
  }`,
    { category }
  );
  return renderTemplate``;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/category/[category].astro", void 0);

const $$file = "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/category/[category].astro";
const $$url = "/category/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
