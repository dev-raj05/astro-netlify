import { c as createComponent, a as createAstro, r as renderTemplate, e as renderComponent, m as maybeRenderHead, s as spreadAttributes, b as addAttribute, F as Fragment, u as unescapeHTML, d as renderHead, g as renderSlot } from './astro/server_BoqlVpRv.mjs';
import 'kleur/colors';
import { getIconData, iconToSVG } from '@iconify/utils';
/* empty css                         */

const $$Astro$3 = createAstro();
const $$VisualEditing = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$VisualEditing;
  const { enabled, zIndex } = Astro2.props;
  return renderTemplate`${enabled ? renderTemplate`${renderComponent($$result, "VisualEditingComponent", null, { "client:only": "react", "zIndex": zIndex, "client:component-hydration": "only", "client:component-path": "C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/@sanity/astro/dist/visual-editing/visual-editing-component", "client:component-export": "VisualEditingComponent" })}` : null}`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/@sanity/astro/dist/visual-editing/visual-editing.astro", void 0);

const icons = {"local":{"prefix":"local","lastModified":1739358120,"icons":{"search":{"body":"<g fill=\"none\"><g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h24v24H0z\"/><circle cx=\"10.5\" cy=\"10.5\" r=\"6.5\" stroke=\"currentColor\" stroke-linejoin=\"round\"/><path fill=\"currentColor\" d=\"M19.646 20.354a.5.5 0 0 0 .708-.708zm.708-.708-5-5-.708.708 5 5z\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h24v24H0z\"/></clipPath></defs></g>","width":24,"height":24}}}};

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

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate(_a || (_a = __template(["", '<header class="z-50 flex w-full flex-wrap py-7 md:flex-nowrap md:justify-start"> <nav class="relative mx-auto flex w-full max-w-7xl basis-full flex-wrap items-center px-4" aria-label="Global"> <div class=""> <a class="flex-none text-xl font-semibold" href="/" aria-label="Astromelody"> ', ' </a> </div> <div class="ms-auto flex items-center gap-x-2 py-1"> <a class="inline-flex items-center gap-x-2 rounded-xl border border-transparent px-3 py-2 text-sm font-medium disabled:pointer-events-none disabled:opacity-50" href="/search/" href="/search/"> <i class="icon-base i-tabler-search"></i> </a> <div class="dropdown dropdown-end"> <div tabindex="0" role="button" class="flex size-[38px] items-center justify-center rounded-xl text-sm font-semibold"> <i class="icon-base i-tabler-category-2"></i> </div> <!-- <ul\n          tabindex="0"\n          class="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"\n        >\n          {\n            HeaderLinks.map((link) => (\n              <li>\n                <Link href={link.href} class="px-4 py-3 font-medium">\n                  {link.title}\n                </Link>\n              </li>\n            ))\n          }\n        </ul> --> </div> <label class="swap swap-rotate rounded-xl px-3 py-2 text-sm"> <!-- this hidden checkbox controls the state --> <!-- <input type="text" class="theme-controller" data-unchecked-value={LIGHT_THEME} value={DARK_THEME} /> --> <!-- sun icon --> <!-- <i class="icon-base swap-off i-tabler-sun-filled"></i> --> <!-- moon icon --> <!-- <i class="icon-base swap-on i-tabler-moon-filled"></i> --> ', ` </label> </div> </nav> </header> <!-- Save theme to localStorage
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
<\/script> -->`])), maybeRenderHead(), "MedBlog", renderComponent($$result, "Icon", $$Icon, { "size": 30, "name": "search" }));
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/components/Navbar.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const visualEditingEnabled = true;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>MedBlogs</title>${renderHead()}</head> <body class="flex flex-col justify-center" data-astro-cid-sckkx6r4> <div class="flex flex-col min-h-screen mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 container" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-sckkx6r4": true })} <main class="flex-grow" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "VisualEditing", $$VisualEditing, { "enabled": visualEditingEnabled, "zIndex": 1e3, "data-astro-cid-sckkx6r4": true })} </main> </div> </body></html>`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
