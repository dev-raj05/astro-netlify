import 'kleur/colors';
import { f as decodeKey } from './chunks/astro/server_BDnHfdZN.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DHoWbkXo.mjs';
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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/User/OneDrive/Desktop/New/venv-astro/","cacheDir":"file:///C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/.astro/","outDir":"file:///C:/Users/User/OneDrive/Desktop/New/venv-astro/dist/","srcDir":"file:///C:/Users/User/OneDrive/Desktop/New/venv-astro/src/","publicDir":"file:///C:/Users/User/OneDrive/Desktop/New/venv-astro/public/","buildClientDir":"file:///C:/Users/User/OneDrive/Desktop/New/venv-astro/dist/client/","buildServerDir":"file:///C:/Users/User/OneDrive/Desktop/New/venv-astro/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/author/[slug]","isIndex":false,"type":"page","pattern":"^\\/author\\/([^/]+?)\\/?$","segments":[[{"content":"author","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/author/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/category/[category]","isIndex":false,"type":"page","pattern":"^\\/category\\/([^/]+?)\\/?$","segments":[[{"content":"category","dynamic":false,"spread":false}],[{"content":"category","dynamic":true,"spread":false}]],"params":["category"],"component":"src/pages/category/[category].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BKwojyyq.css"}],"routeData":{"route":"/post/[...slug]","isIndex":false,"type":"page","pattern":"^\\/post(?:\\/(.*?))?\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/post/[...slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BKwojyyq.css"}],"routeData":{"route":"/search","isIndex":false,"type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search.astro","pathname":"/search","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/studio/[...params]","pattern":"^\\/studio(?:\\/(.*?))?\\/?$","segments":[[{"content":"studio","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BKwojyyq.css"}],"routeData":{"route":"/tags/[tag]","isIndex":false,"type":"page","pattern":"^\\/tags\\/([^/]+?)\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}],[{"content":"tag","dynamic":true,"spread":false}]],"params":["tag"],"component":"src/pages/tags/[tag].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BKwojyyq.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/post/[...slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/search.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/tags/[tag].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/author/[slug]@_@astro":"pages/author/_slug_.astro.mjs","\u0000@astro-page:src/pages/category/[category]@_@astro":"pages/category/_category_.astro.mjs","\u0000@astro-page:src/pages/search@_@astro":"pages/search.astro.mjs","\u0000@astro-page:node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/studio/_---params_.astro.mjs","\u0000@astro-page:src/pages/tags/[tag]@_@astro":"pages/tags/_tag_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/post/[...slug]@_@astro":"pages/post/_---slug_.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CpV2_Ujg.mjs","\u0000@astrojs-manifest":"manifest_hznUwSL5.mjs","C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/post/[...slug].astro?astro&type=script&index=0&lang.ts":"_astro/_...slug_.astro_astro_type_script_index_0_lang.l0sNRNKZ.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/@sanity/astro/dist/visual-editing/visual-editing-component":"_astro/visual-editing-component.DV-HCyTM.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/post/[...slug].astro?astro&type=script&index=1&lang.ts":"_astro/_...slug_.astro_astro_type_script_index_1_lang.CbUcU0P1.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/post/[...slug].astro?astro&type=script&index=2&lang.ts":"_astro/_...slug_.astro_astro_type_script_index_2_lang.CYFycPRQ.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.CDMmh4Ge.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/resources4.mjs":"_astro/resources4.BZGf5iBM.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.BLRUDDrt.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.CKukP4c1.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.mjs":"_astro/ViteDevServerStopped.n1miZzEJ.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.EpqO9Z0q.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/@sanity/ui/dist/_chunks-es/refractor.mjs":"_astro/refractor.DHCb2X4Y.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/resources5.mjs":"_astro/resources5.COBJpskb.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/@sanity/vision/lib/_chunks-es/resources.mjs":"_astro/resources.BZC8WWNE.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/resources6.mjs":"_astro/resources6.BmTsiFky.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/BroadcastDisplayedDocument.mjs":"_astro/BroadcastDisplayedDocument.C54jefBb.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/@sanity/visual-editing/dist/_chunks-es/renderVisualEditing.js":"_astro/renderVisualEditing.Dax7Svfj.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.cPniSSgL.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.COXmV9-H.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/QRCodeSVG.mjs":"_astro/QRCodeSVG.P1FHrwZl.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/PostMessageDocuments.mjs":"_astro/PostMessageDocuments.D224xJWJ.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/PostMessageRefreshMutations.mjs":"_astro/PostMessageRefreshMutations.ViuQJsvv.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/PostMessagePerspective.mjs":"_astro/PostMessagePerspective.BOZo1Cnk.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/PostMessageSchema.mjs":"_astro/PostMessageSchema.CFNzMZ7Q.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/PostMessageTelemetry.mjs":"_astro/PostMessageTelemetry.DddE2qJZ.js","@astrojs/react/client.js":"_astro/client.BGzJYPiv.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.DzOsnOYB.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/PostMessagePreviewSnapshots.mjs":"_astro/PostMessagePreviewSnapshots.DBL698z9.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.CLilu3rm.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/LiveQueries.mjs":"_astro/LiveQueries.TjGs8TTH.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/@sanity/vision/lib/_chunks-es/SanityVision.mjs":"_astro/SanityVision.Cmhu2nvq.js","@astrojs/preact/client.js":"_astro/client.Ct4t9aoY.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.Ly2JxhiI.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/post/[...slug].astro?astro&type=script&index=0&lang.ts",""],["C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/post/[...slug].astro?astro&type=script&index=1&lang.ts","const e=document.querySelector(\".share-btn\"),t=document.getElementById(\"#share-options\");e?.addEventListener(\"click\",()=>{t?.classList.toggle(\"active\")});"],["C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/post/[...slug].astro?astro&type=script&index=2&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const e=document.querySelector(\".share-btn\"),t=document.getElementById(\"share-options\"),o=document.getElementById(\"copy-url-btn\");e.addEventListener(\"click\",function(){t.classList.toggle(\"opacity-0\"),t.classList.toggle(\"scale-95\"),t.classList.toggle(\"pointer-events-none\")}),document.addEventListener(\"click\",function(n){!e.contains(n.target)&&!t.contains(n.target)&&(t.classList.add(\"opacity-0\"),t.classList.add(\"scale-95\"),t.classList.add(\"pointer-events-none\"))}),o.addEventListener(\"click\",function(){navigator.clipboard.writeText(window.location.href).then(()=>{alert(\"URL copied to clipboard!\")})})});"]],"assets":["/_astro/index.BKwojyyq.css","/favicon.svg","/styles.css","/_astro/BroadcastDisplayedDocument.C54jefBb.js","/_astro/browser.BQTJNVRR.js","/_astro/client.BGzJYPiv.js","/_astro/client.Ct4t9aoY.js","/_astro/client.FjEbQPyk.js","/_astro/client.iDfSejvz.js","/_astro/DisplayedDocumentBroadcaster.Bp7kFLc4.js","/_astro/index.B7XohNAo.js","/_astro/index.cPniSSgL.js","/_astro/index.DLQVULUf.js","/_astro/index.m_8SQ_Iu.js","/_astro/index2.COXmV9-H.js","/_astro/index3.DzOsnOYB.js","/_astro/LiveQueries.TjGs8TTH.js","/_astro/PostMessageDocuments.D224xJWJ.js","/_astro/PostMessagePerspective.BOZo1Cnk.js","/_astro/PostMessagePreviewSnapshots.DBL698z9.js","/_astro/PostMessageRefreshMutations.ViuQJsvv.js","/_astro/PostMessageSchema.CFNzMZ7Q.js","/_astro/PostMessageTelemetry.DddE2qJZ.js","/_astro/preload-helper.CLcXU_4U.js","/_astro/PresentationToolGrantsCheck.CXtE-ciZ.js","/_astro/QRCodeSVG.P1FHrwZl.js","/_astro/refractor.DHCb2X4Y.js","/_astro/renderVisualEditing.Dax7Svfj.js","/_astro/resolveEditInfo.E94RRmSo.js","/_astro/resources.BZC8WWNE.js","/_astro/resources.CDMmh4Ge.js","/_astro/resources2.BLRUDDrt.js","/_astro/resources3.CKukP4c1.js","/_astro/resources4.BZGf5iBM.js","/_astro/resources5.COBJpskb.js","/_astro/resources6.BmTsiFky.js","/_astro/SanityVision.Cmhu2nvq.js","/_astro/signals.module.CLilu3rm.js","/_astro/stegaEncodeSourceMap.EpqO9Z0q.js","/_astro/studio-component.BcGNM5Ex.js","/_astro/studio-component.Ly2JxhiI.js","/_astro/visual-editing-component.DV-HCyTM.js","/_astro/ViteDevServerStopped.n1miZzEJ.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"iuFf0eYiGNgHohFPpUHs2gSfgce3APpGgk7xv8ytYK8="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
