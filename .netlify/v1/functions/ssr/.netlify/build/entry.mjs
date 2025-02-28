import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BsOZky-h.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/author/_author_.astro.mjs');
const _page3 = () => import('./pages/blog/post-1.astro.mjs');
const _page4 = () => import('./pages/blog.astro.mjs');
const _page5 = () => import('./pages/post/_slug_.astro.mjs');
const _page6 = () => import('./pages/robots.txt.astro.mjs');
const _page7 = () => import('./pages/search.astro.mjs');
const _page8 = () => import('./pages/studio/_---params_.astro.mjs');
const _page9 = () => import('./pages/tags/_tag_.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/author/[author].astro", _page2],
    ["src/pages/blog/post-1.md", _page3],
    ["src/pages/blog/index.astro", _page4],
    ["src/pages/post/[slug].astro", _page5],
    ["src/pages/robots.txt.ts", _page6],
    ["src/pages/search.astro", _page7],
    ["node_modules/@sanity/astro/dist/studio/studio-route.astro", _page8],
    ["src/pages/tags/[tag].astro", _page9],
    ["src/pages/index.astro", _page10]
]);
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: undefined
});
const _args = {
    "middlewareSecret": "d15a0c6d-298b-471f-8316-e454686e296d"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
