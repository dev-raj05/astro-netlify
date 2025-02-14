import { c as createComponent, a as createAstro, r as renderTemplate, d as renderComponent, m as maybeRenderHead, s as spreadAttributes, b as addAttribute, F as Fragment, u as unescapeHTML, e as renderHead, g as renderSlot } from './astro/server_BDnHfdZN.mjs';
import 'kleur/colors';
import { getIconData, iconToSVG } from '@iconify/utils';
/* empty css                         */
import 'clsx';

const $$Astro$3 = createAstro();
const $$VisualEditing = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$VisualEditing;
  const { enabled, zIndex } = Astro2.props;
  return renderTemplate`${enabled ? renderTemplate`${renderComponent($$result, "VisualEditingComponent", null, { "client:only": "react", "zIndex": zIndex, "client:component-hydration": "only", "client:component-path": "C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/@sanity/astro/dist/visual-editing/visual-editing-component", "client:component-export": "VisualEditingComponent" })}` : null}`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/@sanity/astro/dist/visual-editing/visual-editing.astro", void 0);

const icons = {"local":{"prefix":"local","lastModified":1739517076,"icons":{"copyicon":{"body":"<g fill=\"#0F0F0F\"><path fill-rule=\"evenodd\" d=\"M21 8a3 3 0 0 0-3-3h-8a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3zm-2 0a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1z\" clip-rule=\"evenodd\"/><path d=\"M6 3h10a1 1 0 1 0 0-2H6a3 3 0 0 0-3 3v14a1 1 0 1 0 2 0V4a1 1 0 0 1 1-1\"/></g>"},"facebook":{"body":"<path fill=\"#4460A0\" fill-rule=\"evenodd\" d=\"M25.638 48H2.65A2.65 2.65 0 0 1 0 45.35V2.65A2.65 2.65 0 0 1 2.65 0h42.7A2.65 2.65 0 0 1 48 2.65v42.7A2.65 2.65 0 0 1 45.351 48H33.119V29.412h6.24l.934-7.244h-7.174v-4.625c0-2.098.583-3.527 3.59-3.527l3.836-.002V7.535c-.663-.088-2.94-.285-5.59-.285-5.53 0-9.317 3.376-9.317 9.575v5.343h-6.255v7.244h6.255z\"/>","width":48,"height":48},"Linkedin":{"body":"<path fill=\"#0A66C2\" d=\"M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728zM4.67 5.715a1.037 1.037 0 0 1-1.032-1.031c0-.566.466-1.032 1.032-1.032s1.031.466 1.032 1.032c0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78zM13.11 2H2.885A.88.88 0 0 0 2 2.866v10.268a.88.88 0 0 0 .885.866h10.226a.88.88 0 0 0 .889-.866V2.865a.88.88 0 0 0-.889-.864z\"/>","width":16,"height":16},"search":{"body":"<g fill=\"none\"><g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h24v24H0z\"/><circle cx=\"10.5\" cy=\"10.5\" r=\"6.5\" stroke=\"currentColor\" stroke-linejoin=\"round\"/><path fill=\"currentColor\" d=\"M19.646 20.354a.5.5 0 0 0 .708-.708zm.708-.708-5-5-.708.708 5 5z\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h24v24H0z\"/></clipPath></defs></g>"},"share":{"body":"<path fill=\"currentColor\" d=\"M23 3a4 4 0 0 0-4 4 4 4 0 0 0 .094.836l-9.082 4.541A4 4 0 0 0 7 11a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 3.014-1.375l9.076 4.54A4 4 0 0 0 19 23a4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4 4 4 0 0 0-3.014 1.375l-9.076-4.54A4 4 0 0 0 11 15a4 4 0 0 0-.094-.834l9.082-4.541A4 4 0 0 0 23 11a4 4 0 0 0 4-4 4 4 0 0 0-4-4\"/>","width":30,"height":30},"whatsapp":{"body":"<path fill=\"#67C15E\" fill-rule=\"evenodd\" d=\"M23.993 0C10.763 0 0 10.765 0 24a23.82 23.82 0 0 0 4.57 14.067l-2.99 8.917 9.224-2.948A23.8 23.8 0 0 0 24.007 48C37.237 48 48 37.234 48 24S37.238 0 24.007 0zm-6.7 12.19c-.466-1.114-.818-1.156-1.523-1.185a14 14 0 0 0-.804-.027c-.918 0-1.877.268-2.455.86-.705.72-2.454 2.398-2.454 5.841s2.51 6.773 2.849 7.239c.353.465 4.895 7.632 11.947 10.553 5.515 2.286 7.152 2.074 8.407 1.806 1.834-.395 4.133-1.75 4.711-3.386s.579-3.034.41-3.33c-.17-.296-.636-.465-1.34-.818-.706-.353-4.134-2.046-4.783-2.272-.634-.24-1.24-.155-1.72.522-.677.946-1.34 1.905-1.876 2.483-.423.452-1.115.509-1.693.268-.776-.324-2.948-1.086-5.628-3.47-2.074-1.849-3.484-4.148-3.893-4.84-.41-.705-.042-1.114.282-1.495.353-.438.691-.748 1.044-1.157.352-.41.55-.621.776-1.1.24-.466.07-.946-.1-1.3-.168-.352-1.579-3.795-2.157-5.191\"/>","width":48,"height":48},"X":{"body":"<path fill=\"currentColor\" d=\"M11 4a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h28a7 7 0 0 0 7-7V11a7 7 0 0 0-7-7zm2.086 9h7.937l5.637 8.01L33.5 13H36l-8.21 9.613L37.913 37H29.98l-6.541-9.293L15.5 37H13l9.309-10.896zm3.828 2 14.107 20h3.065L19.979 15z\"/>","width":50,"height":50}},"width":24,"height":24}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$2 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/astro-icon/components/Icon.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  const currentPath = Astro2.url.pathname;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<header class="z-50 flex w-full flex-wrap py-10 md:flex-nowrap md:justify-start"> <nav class="relative mx-auto flex w-full max-w-7xl basis-full flex-wrap items-center px-4" aria-label="Global"> <div class=""> <a class="flex-none text-xl font-semibold" href="/" aria-label="Astromelody"> ', ' </a> </div> <div class="ms-auto flex items-center gap-x-2 py-1"> <a class="inline-flex items-center gap-x-2 rounded-xl border border-transparent px-3 py-2 text-sm font-medium disabled:pointer-events-none disabled:opacity-50" href="/search"> <i class="icon-base i-tabler-search"></i> </a> <div class="dropdown dropdown-end"> <div tabindex="0" role="button" class="flex size-[38px] items-center justify-center rounded-xl text-sm font-semibold"> <i class="icon-base i-tabler-category-2"></i> </div> <!-- <ul\n          tabindex="0"\n          class="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"\n        >\n          {\n            HeaderLinks.map((link) => (\n              <li>\n                <Link href={link.href} class="px-4 py-3 font-medium">\n                  {link.title}\n                </Link>\n              </li>\n            ))\n          }\n        </ul> --> </div> ', ` </div> </nav> </header> <!-- Save theme to localStorage
<script is:inline>
  const lightTheme =  document.querySelector('.theme-controller')?.getAttribute('data-unchecked-value');
  // \u261D\uFE0F This script prevent the FART effect.
  if (localStorage.getItem("theme") === null) {
    document.documentElement.setAttribute("data-theme", lightTheme);
  } else
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme"),
    );
  // "theme" LocalStorage value is set by the package to remember user preference.
  // The value is checked and applyed before rendering anything.
<\/script>
<script>
  const themeController: HTMLInputElement | null =
    document.querySelector(".theme-controller");

  themeController?.addEventListener("change", () => {
    const t = themeController?.checked ? themeController?.value : themeController?.getAttribute('data-unchecked-value');
    localStorage.setItem("theme", t ?? '');
  });
  // \u{1F446} you could import the CDN directly instead of these two lines
<\/script> -->`])), maybeRenderHead(), "MedBlog", currentPath === "http://localhost:4321/search" ? renderTemplate`<a href="/">Goback</a>` : renderTemplate`<a href="/search" class="swap swap-rotate rounded-xl px-3 py-2 text-sm"> <!-- this hidden checkbox controls the state --> <!-- <input type="text" class="theme-controller" data-unchecked-value={LIGHT_THEME} value={DARK_THEME} /> --> <!-- sun icon --> <!-- <i class="icon-base swap-off i-tabler-sun-filled"></i> --> <!-- moon icon --> <!-- <i class="icon-base swap-on i-tabler-moon-filled"></i> --> ${renderComponent($$result, "Icon", $$Icon, { "href": "/seacrh", "size": 30, "name": "search" })} </a>`);
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/components/Navbar.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<footer class="bg-gray-900 text-white py-8"> <div class="max-w-7xl mx-auto px-6"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left"> <!-- Logo and Description --> <div> <h2 class="text-2xl font-bold">Dev Dhanak</h2> <p class="text-gray-400 mt-2">Building modern and scalable web applications.</p> </div> <!-- Navigation Links --> <div> <h3 class="text-lg font-semibold">Quick Links</h3> <ul class="mt-2 space-y-2"> <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Home</a></li> <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Projects</a></li> <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Blog</a></li> <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Contact</a></li> </ul> </div> <!-- Social Media Links --> <div> <h3 class="text-lg font-semibold">Follow Me</h3> <div class="flex justify-center md:justify-start gap-4 mt-2"> <a href="https://github.com/yourgithub" target="_blank" class="text-gray-400 hover:text-white transition-transform transform hover:scale-110"> <i class="fab fa-github text-2xl"></i> </a> <a href="https://linkedin.com/in/yourlinkedin" target="_blank" class="text-gray-400 hover:text-white transition-transform transform hover:scale-110"> <i class="fab fa-linkedin text-2xl"></i> </a> <a href="https://twitter.com/yourtwitter" target="_blank" class="text-gray-400 hover:text-white transition-transform transform hover:scale-110"> <i class="fab fa-twitter text-2xl"></i> </a> </div> </div> </div> <!-- Copyright --> <div class="mt-8 text-center text-gray-500 text-sm">\n\xA9 2025 Dev Dhanak. All rights reserved.\n</div> </div> </footer> <!-- FontAwesome Icons --> <script src="https://kit.fontawesome.com/YOUR_KIT_CODE.js" crossorigin="anonymous"><\/script>'])), maybeRenderHead());
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const visualEditingEnabled = true;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>MedBlogs</title><link rel="stylesheet" href="/styles.css"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">${renderHead()}</head> <body class="flex flex-col" data-astro-cid-sckkx6r4> <div data-astro-cid-sckkx6r4> <div class="flex flex-col min-h-screen mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 container" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-sckkx6r4": true })} <main class="flex-grow" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "VisualEditing", $$VisualEditing, { "enabled": visualEditingEnabled, "zIndex": 1e3, "data-astro-cid-sckkx6r4": true })} </main> </div> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </div> </body></html>`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/layouts/Layout.astro", void 0);

function formatDate(date) {
  // Create a new Date object from the input string
  const newDate = new Date(date);

  // Format the date to a human-readable format
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  // Format and return the string
  const formattedDate = newDate.toLocaleDateString("en-US", options);
  return `Published on ${formattedDate}`;
}

// Example usage:
//   const date = "2022-12-03T10:00:00.000Z";
//   console.log(formatPublishedDate(date)); // Output: "Published on December 3, 2022"

export { $$Layout as $, $$Icon as a, formatDate as f };
