import { s as sanityClient } from '../chunks/page-ssr_BP2uGixO.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent } from '../chunks/astro/server_Bt2qJKtQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Formatdate_DiLZIKWd.mjs';
import { $ as $$Card } from '../chunks/Card_sekIs18v.mjs';
/* empty css                                    */
import { $ as $$Subscribe } from '../chunks/Subscribe_C1xqdV1p.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full py-10"> <!-- <div class=" bg-white shadow-sm border border-gray-200 rounded-2xl p-5 ">
    </div> --> <div class="max-w-6xl mx-auto bg-white"> <p class="text-black font-medium text-sm mt-5">Booleanmaths’s Blog</p> <h1 class="text-3xl md:text-5xl font-bold text-black mt-2 leading-tight">
Stay Updated with our latest <br> <span class="block mb-10">ongoings.</span> </h1> </div> </section>`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/components/Header.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Query = `*[_type == "post"]{
    title,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    publishedAt,   
    author,
    body,
	tags,
	category
}`;
  const posts = await sanityClient.fetch(Query);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="grid grid-cols-1 gap-5"> <!-- <div class="col-span-1 mb-4">
				{posts.length > 0 && <HeroCard post={posts[0]} />}
			</div> --> <div class="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2"> ${posts.slice(0, 2).map((post) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "post": post })}`)} </div> <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"> ${posts.slice(2).map((post) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "post": post })}`)} </div> </div>  ${renderComponent($$result2, "Subscribe", $$Subscribe, {})} ` })}`;
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
