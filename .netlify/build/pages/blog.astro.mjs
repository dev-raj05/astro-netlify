import '../chunks/page-ssr_BP2uGixO.mjs';
import { f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_8nq5quqT.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D0FhF8qv.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul><li><a href="/blog/post-1/">Post 1</a></li></ul> ` })}`;
}, "C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
