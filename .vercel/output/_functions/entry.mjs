import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_B5fIdpm1.mjs';
import { manifest } from './manifest_CQoGM7Cy.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/author/_author_.astro.mjs');
const _page2 = () => import('./pages/category/_category_.astro.mjs');
const _page3 = () => import('./pages/post/_---slug_.astro.mjs');
const _page4 = () => import('./pages/search.astro.mjs');
const _page5 = () => import('./pages/studio/_---params_.astro.mjs');
const _page6 = () => import('./pages/tags/_tag_.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/author/[author].astro", _page1],
    ["src/pages/category/[category].astro", _page2],
    ["src/pages/post/[...slug].astro", _page3],
    ["src/pages/search.astro", _page4],
    ["node_modules/@sanity/astro/dist/studio/studio-route.astro", _page5],
    ["src/pages/tags/[tag].astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "83f31c17-bf0c-4088-b528-ab27f4567edc",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
