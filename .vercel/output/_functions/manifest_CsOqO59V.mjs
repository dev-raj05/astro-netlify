import 'kleur/colors';
import { f as decodeKey } from './chunks/astro/server_BoqlVpRv.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DJajku-L.mjs';
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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/User/OneDrive/Desktop/New/venv-astro/","cacheDir":"file:///C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/.astro/","outDir":"file:///C:/Users/User/OneDrive/Desktop/New/venv-astro/dist/","srcDir":"file:///C:/Users/User/OneDrive/Desktop/New/venv-astro/src/","publicDir":"file:///C:/Users/User/OneDrive/Desktop/New/venv-astro/public/","buildClientDir":"file:///C:/Users/User/OneDrive/Desktop/New/venv-astro/dist/client/","buildServerDir":"file:///C:/Users/User/OneDrive/Desktop/New/venv-astro/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DUll2kTw.css"}],"routeData":{"route":"/post/[...slug]","isIndex":false,"type":"page","pattern":"^\\/post(?:\\/(.*?))?\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/post/[...slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/studio/[...params]","pattern":"^\\/studio(?:\\/(.*?))?\\/?$","segments":[[{"content":"studio","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DUll2kTw.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/post/[...slug].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/studio/_---params_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/post/[...slug]@_@astro":"pages/post/_---slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CO4gywQQ.mjs","\u0000@astrojs-manifest":"manifest_CsOqO59V.mjs","C:/Users/User/OneDrive/Desktop/New/venv-astro/src/components/RichTextRenderer":"_astro/RichTextRenderer.CQGK6s0A.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/@sanity/astro/dist/visual-editing/visual-editing-component":"_astro/visual-editing-component.BJORQd2W.js","@astrojs/react/client.js":"_astro/client.D2Jj_a6q.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.D3NXNgjd.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/resources4.mjs":"_astro/resources4.CzeK6W_p.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.BLRUDDrt.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.Ch7y6loy.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.mjs":"_astro/ViteDevServerStopped.CaXuz8hw.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.DUSxbJcL.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/@sanity/ui/dist/_chunks-es/refractor.mjs":"_astro/refractor.COCeD51b.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/resources5.mjs":"_astro/resources5.DrjneFDd.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.C_Zo--AB.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/@sanity/vision/lib/_chunks-es/resources.mjs":"_astro/resources.N9aOayFV.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/@sanity/vision/lib/_chunks-es/SanityVision.mjs":"_astro/SanityVision.SFdlKWhq.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/resources6.mjs":"_astro/resources6.BmTsiFky.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/BroadcastDisplayedDocument.mjs":"_astro/BroadcastDisplayedDocument.DRza9RUM.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/@sanity/visual-editing/dist/_chunks-es/renderVisualEditing.js":"_astro/renderVisualEditing.B96k_pX5.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.CGSi-z3e.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.BmeWJ2vh.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/QRCodeSVG.mjs":"_astro/QRCodeSVG.hNJZWuMV.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/LiveQueries.mjs":"_astro/LiveQueries.Ckc64yDl.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/PostMessageDocuments.mjs":"_astro/PostMessageDocuments.C4Y7TANh.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/PostMessageRefreshMutations.mjs":"_astro/PostMessageRefreshMutations.1Ed-jY9S.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/PostMessagePerspective.mjs":"_astro/PostMessagePerspective.CTqFEzhT.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/PostMessagePreviewSnapshots.mjs":"_astro/PostMessagePreviewSnapshots.CfPKJP1d.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/PostMessageSchema.mjs":"_astro/PostMessageSchema.Dm83LbkJ.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/sanity/lib/_chunks-es/PostMessageTelemetry.mjs":"_astro/PostMessageTelemetry.DHJdvRo6.js","C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.B3O536Am.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.DUll2kTw.css","/favicon.svg","/_astro/BroadcastDisplayedDocument.DRza9RUM.js","/_astro/browser.Wviuhq1y.js","/_astro/client.BEhzNGs6.js","/_astro/client.D2Jj_a6q.js","/_astro/DisplayedDocumentBroadcaster.COjD-hrA.js","/_astro/index.BSdWIT0n.js","/_astro/index.BvwzchQc.js","/_astro/index.CEP1uwJt.js","/_astro/index.CGSi-z3e.js","/_astro/index.COgMFQbj.js","/_astro/index.DBLTWGwQ.js","/_astro/index2.BmeWJ2vh.js","/_astro/index3.C_Zo--AB.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/LiveQueries.Ckc64yDl.js","/_astro/PostMessageDocuments.C4Y7TANh.js","/_astro/PostMessagePerspective.CTqFEzhT.js","/_astro/PostMessagePreviewSnapshots.CfPKJP1d.js","/_astro/PostMessageRefreshMutations.1Ed-jY9S.js","/_astro/PostMessageSchema.Dm83LbkJ.js","/_astro/PostMessageTelemetry.DHJdvRo6.js","/_astro/PresentationToolGrantsCheck.8U4xE6jI.js","/_astro/QRCodeSVG.hNJZWuMV.js","/_astro/refractor.COCeD51b.js","/_astro/renderVisualEditing.B96k_pX5.js","/_astro/resolveEditInfo.BkX0kGSt.js","/_astro/resources.D3NXNgjd.js","/_astro/resources.N9aOayFV.js","/_astro/resources2.BLRUDDrt.js","/_astro/resources3.Ch7y6loy.js","/_astro/resources4.CzeK6W_p.js","/_astro/resources5.DrjneFDd.js","/_astro/resources6.BmTsiFky.js","/_astro/RichTextRenderer.CQGK6s0A.js","/_astro/SanityVision.SFdlKWhq.js","/_astro/stegaEncodeSourceMap.DUSxbJcL.js","/_astro/studio-component.B3O536Am.js","/_astro/studio-component.BLzbh3Zt.js","/_astro/visual-editing-component.BJORQd2W.js","/_astro/ViteDevServerStopped.CaXuz8hw.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"21SnuopaBH/n0AxZJ/AU1kax99QE2LfNEnugzZhmv7Q="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
