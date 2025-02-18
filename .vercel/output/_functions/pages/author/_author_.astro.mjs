import { s as sanityClient } from '../../chunks/page-ssr_BP2uGixO.mjs';
import { c as createComponent, b as createAstro, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_BvdISoo7.mjs';
import 'kleur/colors';
import { l as loadQuery, $ as $$PortableText } from '../../chunks/PortableText_CG9w_4Sw.mjs';
import { u as unSlugify } from '../../chunks/Slugify_Ta8JJPF6.mjs';
import { $ as $$Layout } from '../../chunks/Formatdate_LN7BU_Tt.mjs';
import { $ as $$Card } from '../../chunks/Card_CCmDBRAz.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const { data: posts } = await loadQuery({
    query: `*[_type == "post"]`
  });
  return posts.map(({ author }) => ({
    params: {
      author: author.title
    }
  }));
}
const $$author = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$author;
  const { author } = Astro2.params;
  const realName = unSlugify(author);
  const authorData = await sanityClient.fetch(
    `*[_type == "author" && slug.current == $author][0]{
    _id,
    name,
    bio,
    "imageUrl": image.asset->url
  }`,
    { author }
  );
  console.log(authorData);
  const authorPosts = await sanityClient.fetch(
    `*[_type == "post" && author->name == $author]{
    _id,
    title,
    slug,
    "mainImage": mainImage.asset->url,
    publishedAt
  }`,
    { author: realName }
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-6"> <!-- Author Profile Section --> <div class="flex flex-col items-center text-center mt-10"> ${authorData?.imageUrl ? renderTemplate`<img${addAttribute(authorData.imageUrl, "src")}${addAttribute(authorData.name, "alt")} class="w-20 h-20 md:w-30 md:h-30 rounded-full shadow-lg ">` : renderTemplate`<img${addAttribute("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", "src")}${addAttribute(authorData.name, "alt")} class="w-20 h-20 md:w-30 md:h-30 rounded-full shadow-lg">`} <h1 class="text-3xl font-bold mt-4">${authorData.name}</h1> <p class="text-gray-500">${renderComponent($$result2, "PortableText", $$PortableText, { "portableText": authorData.bio })}</p> </div> <!-- Posts Section --> <h2 class="text-2xl font-bold mt-4 mb-4 text-center">Posts</h2> ${authorPosts.length > 0 ? renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10"> ${authorPosts.map((post) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "post": post })}`)} </div>` : renderTemplate`<p class="text-center text-gray-500">No posts available for this author.</p>`} </div> ` })}`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/author/[author].astro", void 0);

const $$file = "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/author/[author].astro";
const $$url = "/author/[author]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$author,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
