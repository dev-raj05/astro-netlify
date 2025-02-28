import { f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './astro/server_8nq5quqT.mjs';
import 'kleur/colors';
import 'clsx';

const $$Subscribe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mt-5"> <iframe src="https://booleanmaths.substack.com/embed" width="100%" height="400"${addAttribute({ background: "gray", "boxShadow": "none" }, "style")}></iframe> </div> <!-- class="bg-gray-300  shadow-none" -->`;
}, "C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/src/components/Subscribe.astro", void 0);

export { $$Subscribe as $ };
