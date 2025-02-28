import 'kleur/colors';
import { o as NOOP_MIDDLEWARE_HEADER, p as decodeKey } from './chunks/astro/server_8nq5quqT.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/","cacheDir":"file:///C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/.astro/","outDir":"file:///C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/dist/","srcDir":"file:///C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/src/","publicDir":"file:///C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/public/","buildClientDir":"file:///C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/dist/","buildServerDir":"file:///C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body{margin:0;overflow:hidden;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;background:linear-gradient(#0009,#0009),url(https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg);background-position:center;background-size:cover;background-repeat:no-repeat;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px}.card[data-astro-cid-zetdm5md]{background:#fff;border-radius:15px;box-shadow:0 8px 16px #0003;padding:2rem;text-align:center;max-width:500px;width:100%}h1[data-astro-cid-zetdm5md]{font-size:4rem;margin:0 0 1rem;color:#16c8c7;animation:bounceIn 1s ease}p[data-astro-cid-zetdm5md]{font-size:1.25rem;margin:0 0 1.5rem;color:#555}a[data-astro-cid-zetdm5md]{display:inline-block;padding:.75rem 1.5rem;background-color:#16c8c7;color:#fff;border-radius:5px;text-decoration:none;font-weight:700;transition:background-color .3s ease}a[data-astro-cid-zetdm5md]:hover{background-color:#0da1a0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}to{transform:scale(1)}}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/post-1.DLuOZaac.css"}],"routeData":{"route":"/author/[author]","isIndex":false,"type":"page","pattern":"^\\/author\\/([^/]+?)\\/?$","segments":[[{"content":"author","dynamic":false,"spread":false}],[{"content":"author","dynamic":true,"spread":false}]],"params":["author"],"component":"src/pages/author/[author].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/post-1.DLuOZaac.css"}],"routeData":{"route":"/blog/post-1","isIndex":false,"type":"page","pattern":"^\\/blog\\/post-1\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"post-1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/post-1.md","pathname":"/blog/post-1","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/post-1.DLuOZaac.css"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/post-1.DLuOZaac.css"}],"routeData":{"route":"/posts/[...slug]","isIndex":false,"type":"page","pattern":"^\\/posts(?:\\/(.*?))?\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/posts/[...slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/post-1.DLuOZaac.css"}],"routeData":{"route":"/search","isIndex":false,"type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search.astro","pathname":"/search","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/studio/[...params]","pattern":"^\\/studio(?:\\/(.*?))?\\/?$","segments":[[{"content":"studio","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/post-1.DLuOZaac.css"}],"routeData":{"route":"/tags/[tag]","isIndex":false,"type":"page","pattern":"^\\/tags\\/([^/]+?)\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}],[{"content":"tag","dynamic":true,"spread":false}]],"params":["tag"],"component":"src/pages/tags/[tag].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://stargazers.club","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/src/pages/blog/post-1.md",{"propagation":"none","containsHead":true}],["C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/src/pages/author/[author].astro",{"propagation":"none","containsHead":true}],["C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/src/pages/posts/[...slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/src/pages/search.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/src/pages/tags/[tag].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/author/[author]@_@astro":"pages/author/_author_.astro.mjs","\u0000@astro-page:src/pages/blog/post-1@_@md":"pages/blog/post-1.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/posts/[...slug]@_@astro":"pages/posts/_---slug_.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/search@_@astro":"pages/search.astro.mjs","\u0000@astro-page:node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/studio/_---params_.astro.mjs","\u0000@astro-page:src/pages/tags/[tag]@_@astro":"pages/tags/_tag_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Df9HKjin.mjs","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_ByqEN1Zs.mjs","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/src/pages/posts/[...slug].astro?astro&type=script&index=0&lang.ts":"_astro/_...slug_.astro_astro_type_script_index_0_lang.l0sNRNKZ.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/@sanity/astro/dist/visual-editing/visual-editing-component":"_astro/visual-editing-component.DV-HCyTM.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/src/pages/posts/[...slug].astro?astro&type=script&index=1&lang.ts":"_astro/_...slug_.astro_astro_type_script_index_1_lang.CbUcU0P1.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/src/pages/posts/[...slug].astro?astro&type=script&index=2&lang.ts":"_astro/_...slug_.astro_astro_type_script_index_2_lang.CYFycPRQ.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/src/components/Navbar2.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar2.astro_astro_type_script_index_0_lang.DWlOI_4n.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.66N3QmKg.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/sanity/lib/_chunks-es/resources4.mjs":"_astro/resources4.C1qsJhJh.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.BLRUDDrt.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.RW1UYPTa.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.mjs":"_astro/ViteDevServerStopped.D0Fb_sxC.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.BMRWeKmY.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/@sanity/ui/dist/_chunks-es/refractor.mjs":"_astro/refractor.BhS73yy8.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/sanity/lib/_chunks-es/resources5.mjs":"_astro/resources5.C-rkbHcS.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/@sanity/vision/lib/_chunks-es/resources.mjs":"_astro/resources.Bd_Kh53l.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/sanity/lib/_chunks-es/resources6.mjs":"_astro/resources6.BmTsiFky.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/sanity/lib/_chunks-es/BroadcastDisplayedDocument.mjs":"_astro/BroadcastDisplayedDocument.2c_phYCK.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/@sanity/visual-editing/dist/_chunks-es/renderVisualEditing.js":"_astro/renderVisualEditing.SpoJfHkM.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.D_02ygZ5.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.1vFPwV7m.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/sanity/lib/_chunks-es/QRCodeSVG.mjs":"_astro/QRCodeSVG.DPcGaOSM.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/sanity/lib/_chunks-es/PostMessageDocuments.mjs":"_astro/PostMessageDocuments.BFMqoqRt.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/sanity/lib/_chunks-es/PostMessageRefreshMutations.mjs":"_astro/PostMessageRefreshMutations.DAuI3qdJ.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/sanity/lib/_chunks-es/PostMessagePerspective.mjs":"_astro/PostMessagePerspective.BFHUe851.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/sanity/lib/_chunks-es/PostMessageSchema.mjs":"_astro/PostMessageSchema.CziFIlHN.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/sanity/lib/_chunks-es/PostMessageTelemetry.mjs":"_astro/PostMessageTelemetry.BTDMhPo9.js","@astrojs/react/client.js":"_astro/client.CpTVhGCD.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.Ca4i-b9q.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/sanity/lib/_chunks-es/PostMessagePreviewSnapshots.mjs":"_astro/PostMessagePreviewSnapshots.DDqZfdzx.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.p3EzFYDN.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/sanity/lib/_chunks-es/LiveQueries.mjs":"_astro/LiveQueries.Bfg5tW1P.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/@sanity/vision/lib/_chunks-es/SanityVision.mjs":"_astro/SanityVision.D9JQTcrE.js","@astrojs/preact/client.js":"_astro/client.C9TUdT_q.js","C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.ZaMdRMeu.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/src/pages/posts/[...slug].astro?astro&type=script&index=0&lang.ts",""],["C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/src/pages/posts/[...slug].astro?astro&type=script&index=1&lang.ts","const e=document.querySelector(\".share-btn\"),t=document.getElementById(\"#share-options\");e?.addEventListener(\"click\",()=>{t?.classList.toggle(\"active\")});"],["C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/src/pages/posts/[...slug].astro?astro&type=script&index=2&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const e=document.querySelector(\".share-btn\"),t=document.getElementById(\"share-options\"),o=document.getElementById(\"copy-url-btn\");e.addEventListener(\"click\",function(){t.classList.toggle(\"opacity-0\"),t.classList.toggle(\"scale-95\"),t.classList.toggle(\"pointer-events-none\")}),document.addEventListener(\"click\",function(n){!e.contains(n.target)&&!t.contains(n.target)&&(t.classList.add(\"opacity-0\"),t.classList.add(\"scale-95\"),t.classList.add(\"pointer-events-none\"))}),o.addEventListener(\"click\",function(){navigator.clipboard.writeText(window.location.href).then(()=>{alert(\"URL copied to clipboard!\")})})});"],["C:/Users/User/OneDrive/Desktop/netlify/working-venv-astro/src/components/Navbar2.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"menu-btn\"),n=document.getElementById(\"close-btn\"),e=document.getElementById(\"sidebar\");t.addEventListener(\"click\",()=>{e.classList.remove(\"-translate-x-full\")});n.addEventListener(\"click\",()=>{e.classList.add(\"-translate-x-full\")});"]],"assets":["/_astro/post-1.DLuOZaac.css","/favicon.svg","/master.png","/styles.css","/images/post-1.jpg","/_astro/BroadcastDisplayedDocument.2c_phYCK.js","/_astro/browser.BQTJNVRR.js","/_astro/client.Bk-yX8el.js","/_astro/client.C9TUdT_q.js","/_astro/client.CpTVhGCD.js","/_astro/client.DpVR5GFL.js","/_astro/DisplayedDocumentBroadcaster.B_8zkI9P.js","/_astro/index.B7XohNAo.js","/_astro/index.DLQVULUf.js","/_astro/index.D_02ygZ5.js","/_astro/index.m_8SQ_Iu.js","/_astro/index2.1vFPwV7m.js","/_astro/index3.Ca4i-b9q.js","/_astro/LiveQueries.Bfg5tW1P.js","/_astro/PostMessageDocuments.BFMqoqRt.js","/_astro/PostMessagePerspective.BFHUe851.js","/_astro/PostMessagePreviewSnapshots.DDqZfdzx.js","/_astro/PostMessageRefreshMutations.DAuI3qdJ.js","/_astro/PostMessageSchema.CziFIlHN.js","/_astro/PostMessageTelemetry.BTDMhPo9.js","/_astro/preload-helper.CLcXU_4U.js","/_astro/PresentationToolGrantsCheck.DkCy2fou.js","/_astro/QRCodeSVG.DPcGaOSM.js","/_astro/refractor.BhS73yy8.js","/_astro/renderVisualEditing.SpoJfHkM.js","/_astro/resolveEditInfo.E94RRmSo.js","/_astro/resources.66N3QmKg.js","/_astro/resources.Bd_Kh53l.js","/_astro/resources2.BLRUDDrt.js","/_astro/resources3.RW1UYPTa.js","/_astro/resources4.C1qsJhJh.js","/_astro/resources5.C-rkbHcS.js","/_astro/resources6.BmTsiFky.js","/_astro/SanityVision.D9JQTcrE.js","/_astro/signals.module.p3EzFYDN.js","/_astro/stegaEncodeSourceMap.BMRWeKmY.js","/_astro/studio-component.B8vidMWo.js","/_astro/studio-component.ZaMdRMeu.js","/_astro/visual-editing-component.DV-HCyTM.js","/_astro/ViteDevServerStopped.D0Fb_sxC.js","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"QnrvKoFJ3er46NmR+TfnOD615ZWinlEqImxI6zt2jbw="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
