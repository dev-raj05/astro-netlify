import { s as sanityClient } from '../chunks/page-ssr_FyCvyDbI.mjs';
import { c as createComponent, a as createAstro, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderComponent } from '../chunks/astro/server_BoqlVpRv.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout } from '../chunks/Layout_C_uN_6o9.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$HeroCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeroCard;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card overflow-hidden rounded-xl border bg-base-100 shadow-xl transition-transform duration-500 hover:-translate-y-1 hover:scale-105"> <a${addAttribute(`/post/${post.slug}`, "href")} class="block lg:flex">  <div class="lg:w-2/3"> <img class="w-full h-full object-cover"${addAttribute(post.mainImage, "src")}${addAttribute(post.alt, "alt")}> </div>  <div class="card-body flex flex-col justify-between p-6 lg:w-1/3">  <div class="flex flex-col flex-wrap gap-2 text-xs"> <div class="flex flex-wrap gap-2 text-xs"> ${post.tags.map((tag) => renderTemplate`<span class="badge badge-outline border border-black px-3 py-1"> ${tag} </span>`)} </div> <p class="text-xs text-gray-500">${post.publishedAt}</p> </div>   <h3 class="card-title text-lg font-semibold">${post.title}</h3>  <p class="text-sm text-gray-600">${post.description}</p> </div> </a> </div>`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/components/HeroCard.astro", void 0);

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card rounded-xl overflow-hidden border bg-white shadow-xl transition-transform duration-500 hover:-translate-y-1 hover:scale-105"> <a${addAttribute(`/post/${post.slug}`, "href")} class="block">  <figure class="w-full"> <img class="w-full h-64 object-cover"${addAttribute(post.mainImage, "src")}${addAttribute(post.alt, "alt")}> </figure>  <div class="p-5">  <div class="flex flex-wrap gap-2 text-xs mb-2"> ${post.tags?.map((tag, index) => renderTemplate`<span${addAttribute(index, "key")} class="badge badge-outline border border-black px-3 py-1"> ${tag} </span>`)} </div>  <p class="text-xs text-gray-500">${post.publishedAt}</p>  <h3 class="text-lg font-semibold">${post.title}</h3> </div> </a> </div>`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/components/Card.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Query = `*[_type == "post"]{
    title,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    publishedAt,   
    author,
    body,
	tags
}`;
  const posts = await sanityClient.fetch(Query);
  console.log("Posts", posts);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<div class="grid grid-cols-1 gap-5"> <div class="col-span-1 mb-4"> ${posts.length > 0 && renderTemplate`${renderComponent($$result2, "HeroCard", $$HeroCard, { "post": posts[0] })}`} </div> <div class="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2"> ${posts.slice(1, 3).map((post) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "post": post })}`)} </div> <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"> ${posts.slice(3).map((post) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "post": post })}`)} </div> </div> ` })}`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
