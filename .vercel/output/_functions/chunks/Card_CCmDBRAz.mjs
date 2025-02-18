import { c as createComponent, b as createAstro, r as renderTemplate, m as maybeRenderHead, a as addAttribute } from './astro/server_BvdISoo7.mjs';
import 'kleur/colors';
import 'clsx';
import { f as formatDate } from './Formatdate_LN7BU_Tt.mjs';

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card rounded-xl overflow-hidden bg-white shadow-xl transition-transform duration-500 hover:-translate-y-1 hover:scale-105"> <a${addAttribute(`/post/${post.slug}`, "href")} class="block">  <figure class="w-full"> <img class="w-full h-64 object-cover"${addAttribute(post.mainImage, "src")}${addAttribute(post.alt, "alt")}> </figure>  <div class="p-5">  <div class="flex flex-wrap gap-2 text-xs mb-2"> ${post.tags?.map((tag) => renderTemplate`<span class="badge badge-outline border border-black px-3 py-1"> ${tag} </span>`)} </div> <!-- {post.category.map(cate => (
        <a href={\`/category/\${slugify(cate)}\`} class="bg-gray-200 px-2 py-1 text-sm rounded hover:bg-gray-300">
          {cate}
        </a>
      ))} -->  <p class="text-xs text-gray-500">${formatDate(post.publishedAt)}</p>  <h3 class="text-lg font-semibold">${post.title}</h3> </div> </a> </div>`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/components/Card.astro", void 0);

export { $$Card as $ };
