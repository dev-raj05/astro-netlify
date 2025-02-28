import '../chunks/page-ssr_BP2uGixO.mjs';
import { f as createComponent, r as renderTemplate, i as renderHead } from '../chunks/astro/server_8nq5quqT.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const title = "Page Not Found";
  return renderTemplate`<html lang="en" data-astro-cid-zetdm5md> <head><meta charset="UTF-8"><title>${title}</title>${renderHead()}</head> <body data-astro-cid-zetdm5md> <div class="card" data-astro-cid-zetdm5md> <h1 data-astro-cid-zetdm5md>404</h1> <p data-astro-cid-zetdm5md>Oops! We can't seem to find the page you're looking for.</p> <p data-astro-cid-zetdm5md><a href="/" data-astro-cid-zetdm5md>Go Back Home</a></p> </div> </body></html>`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/404.astro", void 0);

const $$file = "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
