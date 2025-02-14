import { s as sanityClient } from '../../chunks/page-ssr_FyCvyDbI.mjs';
import { c as createComponent, a as createAstro, r as renderTemplate } from '../../chunks/astro/server_BDnHfdZN.mjs';
import 'kleur/colors';
import 'clsx';
import { l as loadQuery } from '../../chunks/load-query_CRUvnqpv.mjs';
export { renderers } from '../../renderers.mjs';

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
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  await sanityClient.fetch(
    `*[_type == "author" && slug.current == $slug][0]{
    _id,
    name,
    bio,
    "imageUrl": image.asset->url
  }`,
    { slug }
  );
  console.log(slug);
  return renderTemplate``;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/author/[slug].astro", void 0);

const $$file = "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/author/[slug].astro";
const $$url = "/author/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
