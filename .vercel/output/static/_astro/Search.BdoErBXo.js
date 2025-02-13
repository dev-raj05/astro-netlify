import{h as f,y as d}from"./hooks.module.BJ0VdvEi.js";import{c as _}from"./index.browser.Dind23vk.js";import{l as p}from"./preact.module.DJ8o9e64.js";import"./preload-helper.CLcXU_4U.js";import"./shareReplay.zbqmjNtv.js";const h=_({apiVersion:"v2023-08-24",projectId:"f9zwkku2",dataset:"production",useCdn:!1,visualEditing:!0,stega:{studioUrl:"/studio"}});var y=0;function u(e,r,s,a,o,l){r||(r={});var i,t,n=r;if("ref"in n)for(t in n={},r)t=="ref"?i=r[t]:n[t]=r[t];var c={type:e,props:n,key:s,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--y,__i:-1,__u:0,__source:o,__self:l};if(typeof e=="function"&&(i=e.defaultProps))for(t in i)n[t]===void 0&&(n[t]=i[t]);return p.vnode&&p.vnode(c),c}const k=()=>{const[e,r]=f(""),[s,a]=f([]);return d(()=>{async function o(){if(e.trim()===""){a([]);return}const l=await h.fetch(`*[_type == "post" && 
            (title match $query || body match $query || tags[] match $query)
          ]{
            title,
            body,
            tags,
            "slug": slug.current
          }`,{query:`*${e}*`});a(l)}o()},[e]),u("div",{children:[u("input",{type:"text",name:"q",placeholder:"Search posts...",value:e,onInput:o=>r(o.target.value)}),u("ul",{children:s.map(o=>u("li",{children:u("h2",{children:o.title})},o.slug))})]})};export{k as default};
