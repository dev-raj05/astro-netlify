import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BuK9A9nq.mjs';
import { manifest } from './manifest_BlDSZKyq.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/post/_slug_.astro.mjs');
const _page2 = () => import('./pages/studio/_---params_.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/post/[slug].astro", _page1],
    ["node_modules/@sanity/astro/dist/studio/studio-route.astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d383f577-c4ac-4506-8eec-e8010c065a87",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
