import { s as sanityClient } from '../chunks/page-ssr_FyCvyDbI.mjs';
import { c as createComponent, a as createAstro, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderComponent } from '../chunks/astro/server_Cc2yo0Cj.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout } from '../chunks/Layout_Bt9Kk3i5.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$HeroCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeroCard;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card overflow-hidden rounded-xl border bg-base-100 shadow-xl transition-transform duration-500 lg:card-side hover:-translate-y-1 hover:scale-105 w-[60%]"> <a${addAttribute(`/post/${post.slug}`, "href")} class="block md:flex md:flex-1"> <div class="h-[20%] md:w-full"> <img${addAttribute(700, "width")}${addAttribute(post.mainImage, "src")}${addAttribute("", "alt")}> </div> <div class="flex border border-black w-[60%]"> <div class="mt-8 flex items-center gap-2 text-xs ml-3"></div> <!-- <p class="text-xs"><FormattedDate date={post.publishedAt} /></p> --> <h3 class="card-title text-2xl block"> ${post.title} </h3> </div> </a> </div>`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/components/HeroCard.astro", void 0);

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { post } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"> <a${addAttribute(`/post/${post.slug}`, "href")} class="block"> <!-- Image Section --> <div class="relative h-72 w-full"> <img${addAttribute(post.mainImage, "src")}${addAttribute(post.title, "alt")} class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"> </div> <!-- Card Content --> <div class="p-4"> <div class="flex items-center justify-between"> <p class="text-xs text-gray-500">  </p> ${post.tags && renderTemplate`<div class="flex flex-wrap gap-2"> ${post.tags.map((tag) => renderTemplate`<span${addAttribute(tag, "key")} class="rounded bg-indigo-600 px-3 py-1 text-xs font-medium text-white"> ${tag} </span>`)} </div>`} </div> <h3 class="mt-3 text-lg font-bold text-gray-900">${post.title}</h3> </div> </a> </div> ` })}`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/components/Card.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="z-50 flex w-full flex-wrap py-5 md:flex-nowrap md:justify-between bg-white shadow-md"> <nav class="relative mx-auto flex w-full max-w-7xl items-center justify-between px-6" aria-label="Global"> <!-- Logo Section --> <div> <a class="text-2xl font-semibold text-gray-800" href="/" aria-label="MedBlog">
MedBlog
</a> </div> <!-- Navigation Links & Search Bar (Aligned to the Right) --> <div class="hidden md:flex items-center gap-x-16 ms-auto"> <a href="#" class="hover:text-blue-600 transition-all duration-300">About</a> <a href="#" class="hover:text-blue-600 transition-all duration-300">Services</a> <a href="#" class="hover:text-blue-600 transition-all duration-300">Visit</a> <!-- Search Bar --> <div class="relative"> <input type="text" placeholder="Search blog..." class="w-48 md:w-64 h-10 rounded-full border border-gray-400 bg-white px-10 text-gray-700 shadow-sm outline-none transition-all duration-300 focus:w-72 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"> <i class="absolute left-4 top-3 text-gray-500 i-tabler-search"></i> </div> </div> </nav> </header>`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/components/Header.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Query = `*[_type == "post"]{
    title,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    publishedAt,   
    author,
    body
}`;
  const posts = await sanityClient.fetch(Query);
  console.log("Posts", posts);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})}  ${maybeRenderHead()}<div class="grid grid-cols-1"> <div class="col-span-1 mb-4"> ${posts.length > 0 && renderTemplate`${renderComponent($$result2, "HeroCard", $$HeroCard, { "post": posts[0] })}`} </div> <div class="container mx-auto px-4"> <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2"> ${posts.slice(1).map((post) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "key": post.slug, "post": post })}`)} </div> </div> </div> ` })}`;
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
