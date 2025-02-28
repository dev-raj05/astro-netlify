import '../../chunks/page-ssr_BP2uGixO.mjs';
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, l as renderScript, h as addAttribute, m as maybeRenderHead } from '../../chunks/astro/server_8nq5quqT.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Icon, s as slugify } from '../../chunks/Layout_CyuG8tUY.mjs';
import { l as loadQuery, $ as $$PortableText } from '../../chunks/PortableText_B10N0pIW.mjs';
/* empty css                                     */
import { f as formatDate } from '../../chunks/Formatdate_DeP9SLGK.mjs';
import { $ as $$Subscribe } from '../../chunks/Subscribe_2Qv8Xlxz.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://stargazers.club");
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
  encodeURIComponent(Astro2.url.href);
  const { params } = Astro2;
  const querypost = `*[_type == 'post' && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  "mainImage": coalesce(mainImage.asset->url, ""),
  "author":author->name,
  body,
  publishedAt,
  tags,
}`;
  const { data: post } = await loadQuery({
    query: querypost,
    params
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.title, "description": "Sigle post" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<main class="px-4 md:px-10 lg:px-20 py-10 max-w-4xl mx-auto mt-5"> <article class="prose mx-auto dark:prose-invert text-center w-full"> <!-- Blog Title --> <h1 class="text-3xl md:text-4xl font-bold leading-tight mb-6">', "</h1> <!-- Blog Image --> ", ' <!-- Tags --> <div class="flex flex-wrap justify-center gap-3 mt-7"> ', ' </div> <div class="mt-4 text-sm text-gray-500"> <a', ' class="text-lg font-bold cursor-pointer">Created by ', '</a> </div> <!-- Publish Date --> <div class="mt-4 text-sm text-gray-500"> <!-- <small>Published on {post.publishedAt}</small> --> <p class="text-xs text-gray-500">', '</p> <!-- <small></small> --> </div> </article> <!-- Blog Content --> <div class="mt-12"> ', ' <!-- <RichTextRenderer content={post.body} client:load /> --> </div> <!-- Social Share Section --> <div class="max-w-3xl mx-auto p-6  text-center"> <div class="relative flex items-center justify-end"> <!-- Share Button --> <button class="share-btn relative border-none bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-3xl shadow-md hover:scale-105 transition-transform cursor-pointer z-10"> ', ' </button> <!-- Share Options --> <div id="share-options" class="absolute bottom-20 left-1/2 -translate-x-1/2 w-[280px] md:w-[320px] bg-gray-900 bg-opacity-80 text-white p-4 rounded-lg shadow-lg opacity-0 scale-95 pointer-events-none transition-all duration-300"> <!-- Title --> <p class="text-lg font-semibold uppercase border-b border-white pb-2 mb-3 text-center">\nShare\n</p> <!-- Social Media Links --> <div class="flex justify-around items-center"> <!-- Facebook --> <a href="https://www.facebook.com/sharer/sharer.php?u=yourURL" target="_blank" class="p-3 rounded-full bg-white hover:scale-110 transition-transform"> ', ' </a> <!-- Twitter/X --> <a href="https://twitter.com/intent/tweet?url=yourURL&text=yourTitle" target="_blank" class="p-3 rounded-full bg-white text-black hover:scale-110 transition-transform"> ', ' </a> <!-- LinkedIn --> <a href="https://www.linkedin.com/shareArticle?mini=true&url=yourURL&title=yourTitle" target="_blank" class="p-3 rounded-full bg-white hover:scale-110 transition-transform"> ', ' </a> <!-- WhatsApp --> <a href="https://wa.me/?text=yourTitle yourURL" target="_blank" class="p-3 rounded-full bg-green-100 hover:scale-110 transition-transform"> ', ' </a> <!-- Copy URL --> <span id="copy-url-btn" class="p-3 rounded-full bg-gray-300 hover:scale-110 transition-transform cursor-pointer"> ', " </span> </div> </div> </div> ", " ", " </div> ", " ", ` <!-- <div class="mt-6">
      <button 
        onclick={"copyLink()"}
        class="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
      >
        Copy Link
      </button>
    </div> --> </main> <script type="text/javascript">
    // Function to copy the current page URL
    function copyCurrentURL() {
      const btn = document.getElementById('copy-url-btn'); // Remove '#' from the ID
      const url = window.location.href; // Get the current page URL
      navigator.clipboard.writeText(url) // Copy URL to clipboard
        .then(() => {
          btn.textContent = "Copied!"; // Change the button text to "Copied!"
          // Optionally, you can use an alert here as well
          // alert('URL copied to clipboard!');
        })
        .catch((err) => {
          console.error('Failed to copy URL: ', err); // Handle any errors
        });
    }
  <\/script>  `])), maybeRenderHead(), post.title, post.mainImage && renderTemplate`<div class="w-full overflow-hidden rounded-xl shadow-lg"> <img class="head-img"${addAttribute(post.mainImage, "src")}${addAttribute(post.alt, "alt")}> </div>`, post.tags.map((tag) => renderTemplate`<span class="badge badge-outline k px-3 py-1 rounded-full bg-[#F2F2F2] hover:scale-105 transition"> <a${addAttribute(`/tags/${slugify(tag)}`, "href")} class="">${tag}</a> </span>`), addAttribute(`/author/${slugify(post.author)}`, "href"), post.author, formatDate(post.publishedAt), renderComponent($$result2, "PortableText", $$PortableText, { "portableText": post.body }), renderComponent($$result2, "Icon", $$Icon, { "name": "share", "size": 30 }), renderComponent($$result2, "Icon", $$Icon, { "name": "facebook", "size": 24 }), renderComponent($$result2, "Icon", $$Icon, { "name": "X", "size": 24 }), renderComponent($$result2, "Icon", $$Icon, { "name": "Linkedin", "size": 24 }), renderComponent($$result2, "Icon", $$Icon, { "name": "whatsapp", "size": 24 }), renderComponent($$result2, "Icon", $$Icon, { "name": "copyicon", "size": 24 }), renderScript($$result2, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/post/[slug].astro?astro&type=script&index=0&lang.ts"), renderScript($$result2, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/post/[slug].astro?astro&type=script&index=1&lang.ts"), renderComponent($$result2, "Subscribe", $$Subscribe, {}), renderScript($$result2, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/post/[slug].astro?astro&type=script&index=2&lang.ts")) })}`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/post/[slug].astro", void 0);

const $$file = "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/post/[slug].astro";
const $$url = "/post/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
