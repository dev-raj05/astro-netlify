import 'kleur/colors';
import { g as decodeKey } from './chunks/astro/server_Cc2yo0Cj.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_dTp8JZrm.mjs';
import 'es-module-lexer';

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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/User/OneDrive/Desktop/New/venv-astro/","cacheDir":"file:///C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/.astro/","outDir":"file:///C:/Users/User/OneDrive/Desktop/New/venv-astro/dist/","srcDir":"file:///C:/Users/User/OneDrive/Desktop/New/venv-astro/src/","publicDir":"file:///C:/Users/User/OneDrive/Desktop/New/venv-astro/public/","buildClientDir":"file:///C:/Users/User/OneDrive/Desktop/New/venv-astro/dist/client/","buildServerDir":"file:///C:/Users/User/OneDrive/Desktop/New/venv-astro/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,body{margin:0;width:100%;height:100%}\n"}],"routeData":{"route":"/post/[slug]","isIndex":false,"type":"page","pattern":"^\\/post\\/([^/]+?)\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/post/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/studio/[...params]","pattern":"^\\/studio(?:\\/(.*?))?\\/?$","segments":[[{"content":"studio","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Bh7XMhCE.css"},{"type":"inline","content":"html,body{margin:0;width:100%;height:100%}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/post/[slug].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/studio/_---params_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/post/[slug]@_@astro":"pages/post/_slug_.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Cui3SI7z.mjs","\u0000@astrojs-manifest":"manifest_BlDSZKyq.mjs","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/@sanity/astro/dist/visual-editing/visual-editing-component":"_astro/visual-editing-component.C76PExQK.js","@astrojs/react/client.js":"_astro/client.Bh4_t8Pz.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.Co1cuL19.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/resources4.mjs":"_astro/resources4.BmYuHKJ_.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.BLRUDDrt.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.B5kAXPo2.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.mjs":"_astro/ViteDevServerStopped.b2YG6xFY.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.DEOR7U2-.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/@sanity/ui/dist/_chunks-es/refractor.mjs":"_astro/refractor.lQZOoq6l.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/resources5.mjs":"_astro/resources5.wiaXwZVc.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.CjVk4cwa.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/@sanity/vision/lib/_chunks-es/resources.mjs":"_astro/resources.waYtrPHf.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/@sanity/vision/lib/_chunks-es/SanityVision.mjs":"_astro/SanityVision.R-w7OVvD.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/resources6.mjs":"_astro/resources6.BmTsiFky.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/BroadcastDisplayedDocument.mjs":"_astro/BroadcastDisplayedDocument.BkVBNU4o.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/@sanity/visual-editing/dist/_chunks-es/renderVisualEditing.js":"_astro/renderVisualEditing.BPrKKLOO.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.Dzb5URUJ.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.CUph8Iis.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/QRCodeSVG.mjs":"_astro/QRCodeSVG.B-6e5MIz.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/LiveQueries.mjs":"_astro/LiveQueries.CqcsFgeC.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/PostMessageDocuments.mjs":"_astro/PostMessageDocuments.BxYOJfhq.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/PostMessageRefreshMutations.mjs":"_astro/PostMessageRefreshMutations.DA_mwE6D.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/PostMessagePerspective.mjs":"_astro/PostMessagePerspective.Batcjvy9.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/PostMessagePreviewSnapshots.mjs":"_astro/PostMessagePreviewSnapshots.BqNJrZRl.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/PostMessageSchema.mjs":"_astro/PostMessageSchema.CMWtimPP.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/PostMessageTelemetry.mjs":"_astro/PostMessageTelemetry.DGq07eBZ.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.DCQDhTwi.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.Bh7XMhCE.css","/favicon.svg","/_astro/BroadcastDisplayedDocument.BkVBNU4o.js","/_astro/browser.CqDFoB_e.js","/_astro/client.Bh4_t8Pz.js","/_astro/client.DNcGm92_.js","/_astro/DisplayedDocumentBroadcaster.6MWHf9Uu.js","/_astro/index.BLssQ-63.js","/_astro/index.D7GtjQQP.js","/_astro/index.Dk9WLl2X.js","/_astro/index.Dzb5URUJ.js","/_astro/index2.CUph8Iis.js","/_astro/index3.CjVk4cwa.js","/_astro/LiveQueries.CqcsFgeC.js","/_astro/PostMessageDocuments.BxYOJfhq.js","/_astro/PostMessagePerspective.Batcjvy9.js","/_astro/PostMessagePreviewSnapshots.BqNJrZRl.js","/_astro/PostMessageRefreshMutations.DA_mwE6D.js","/_astro/PostMessageSchema.CMWtimPP.js","/_astro/PostMessageTelemetry.DGq07eBZ.js","/_astro/PresentationToolGrantsCheck.C1dkJH8G.js","/_astro/QRCodeSVG.B-6e5MIz.js","/_astro/refractor.lQZOoq6l.js","/_astro/renderVisualEditing.BPrKKLOO.js","/_astro/resolveEditInfo.DNvwi3J-.js","/_astro/resources.Co1cuL19.js","/_astro/resources.waYtrPHf.js","/_astro/resources2.BLRUDDrt.js","/_astro/resources3.B5kAXPo2.js","/_astro/resources4.BmYuHKJ_.js","/_astro/resources5.wiaXwZVc.js","/_astro/resources6.BmTsiFky.js","/_astro/SanityVision.R-w7OVvD.js","/_astro/stegaEncodeSourceMap.DEOR7U2-.js","/_astro/studio-component.C8nMpXKv.js","/_astro/studio-component.DCQDhTwi.js","/_astro/visual-editing-component.C76PExQK.js","/_astro/ViteDevServerStopped.b2YG6xFY.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"vzqkNH1tMXZR95hYUWoLy0N24AKkbfQ+UBdg0wSt4pY="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
