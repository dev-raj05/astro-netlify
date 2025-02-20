import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DS6kTmkR.mjs';
import { manifest } from './manifest_Csrjgt1k.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/author/_author_.astro.mjs');
const _page3 = () => import('./pages/category/_category_.astro.mjs');
const _page4 = () => import('./pages/post/_---slug_.astro.mjs');
const _page5 = () => import('./pages/robots.txt.astro.mjs');
const _page6 = () => import('./pages/search.astro.mjs');
const _page7 = () => import('./pages/studio/_---params_.astro.mjs');
const _page8 = () => import('./pages/tags/_tag_.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/author/[author].astro", _page2],
    ["src/pages/category/[category].astro", _page3],
    ["src/pages/post/[...slug].astro", _page4],
    ["src/pages/robots.txt.ts", _page5],
    ["src/pages/search.astro", _page6],
    ["node_modules/@sanity/astro/dist/studio/studio-route.astro", _page7],
    ["src/pages/tags/[tag].astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "5f8bdc51-cc7b-45b9-8931-2d5be1e5b963",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
