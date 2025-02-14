import { s as sanityClient } from '../../chunks/page-ssr_FyCvyDbI.mjs';
import { c as createComponent, a as createAstro, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, g as renderSlot, d as renderComponent, b as addAttribute, h as renderScript } from '../../chunks/astro/server_BDnHfdZN.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Icon, f as formatDate } from '../../chunks/Formatdate_Dg-7c8bM.mjs';
import { l as loadQuery } from '../../chunks/load-query_CRUvnqpv.mjs';
import { LIST_NEST_MODE_HTML, isPortableTextToolkitList, isPortableTextListItemBlock, isPortableTextToolkitSpan, isPortableTextBlock, isPortableTextToolkitTextNode, nestLists, buildMarksTree } from '@portabletext/toolkit';
import 'clsx';
import imageUrlBuilder from '@sanity/image-url';
/* empty css                                    */
import { s as slugify } from '../../chunks/Slugify_Ta8JJPF6.mjs';
export { renderers } from '../../renderers.mjs';

function isComponent(it) {
  return typeof it === "function";
}
function mergeComponents(components, overrides) {
  const cmps = { ...components };
  for (const [key, override] of Object.entries(overrides)) {
    const current = components[key];
    const value = !current || isComponent(override) || isComponent(current) ? override : {
      ...current,
      ...override
    };
    cmps[key] = value;
  }
  return cmps;
}

const getTemplate = (prop, type) => `PortableText [components.${prop}] is missing "${type}"`;
const unknownTypeWarning = (type) => getTemplate("type", type);
const unknownMarkWarning = (markType) => getTemplate("mark", markType);
const unknownBlockWarning = (style) => getTemplate("block", style);
const unknownListWarning = (listItem) => getTemplate("list", listItem);
const unknownListItemWarning = (listStyle) => getTemplate("listItem", listStyle);
const getWarningMessage = (nodeType, type) => {
  const fncs = {
    block: unknownBlockWarning,
    list: unknownListWarning,
    listItem: unknownListItemWarning,
    mark: unknownMarkWarning,
    type: unknownTypeWarning
  };
  return fncs[nodeType](type);
};
function printWarning(message) {
  console.warn(message);
}

const key = Symbol("astro-portabletext");
function usePortableText(node) {
  if (!(key in globalThis)) {
    throw new Error(`PortableText "context" has not been initialised`);
  }
  return globalThis[key](node);
}

const $$Astro$9 = createAstro();
const $$Block = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Block;
  const props = Astro2.props;
  const { node, index, isInline, ...attrs } = props;
  const styleIs = (style) => style === node.style;
  const { getUnknownComponent } = usePortableText(node);
  const UnknownStyle = getUnknownComponent();
  return renderTemplate`${styleIs("h1") ? renderTemplate`${maybeRenderHead()}<h1${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h1>` : styleIs("h2") ? renderTemplate`<h2${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h2>` : styleIs("h3") ? renderTemplate`<h3${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h3>` : styleIs("h4") ? renderTemplate`<h4${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h4>` : styleIs("h5") ? renderTemplate`<h5${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h5>` : styleIs("h6") ? renderTemplate`<h6${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h6>` : styleIs("blockquote") ? renderTemplate`<blockquote${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</blockquote>` : styleIs("normal") ? renderTemplate`<p${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</p>` : renderTemplate`${renderComponent($$result, "UnknownStyle", UnknownStyle, { ...props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/astro-portabletext/components/Block.astro", void 0);

const $$HardBreak = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<br>`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/astro-portabletext/components/HardBreak.astro", void 0);

const $$Astro$8 = createAstro();
const $$List = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$List;
  const { node, index, isInline, ...attrs } = Astro2.props;
  const listItemIs = (listItem) => listItem === node.listItem;
  return renderTemplate`${listItemIs("menu") ? renderTemplate`${maybeRenderHead()}<menu${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</menu>` : listItemIs("number") ? renderTemplate`<ol${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</ol>` : renderTemplate`<ul${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</ul>`}`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/astro-portabletext/components/List.astro", void 0);

const $$Astro$7 = createAstro();
const $$ListItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ListItem;
  const { node, index, isInline, ...attrs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</li>`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/astro-portabletext/components/ListItem.astro", void 0);

const $$Astro$6 = createAstro();
const $$Mark = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Mark;
  const props = Astro2.props;
  const { node, index, isInline, ...attrs } = props;
  const markTypeIs = (markType) => markType === node.markType;
  const { getUnknownComponent } = usePortableText(node);
  const UnknownMarkType = getUnknownComponent();
  return renderTemplate`${markTypeIs("code") ? renderTemplate`${maybeRenderHead()}<code${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</code>` : markTypeIs("em") ? renderTemplate`<em${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</em>` : markTypeIs("link") ? renderTemplate`<a${addAttribute(node.markDef.href, "href")}${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</a>` : markTypeIs("strike-through") ? renderTemplate`<del${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</del>` : markTypeIs("strong") ? renderTemplate`<strong${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</strong>` : markTypeIs("underline") ? renderTemplate`<span style="text-decoration: underline;"${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</span>` : renderTemplate`${renderComponent($$result, "UnknownMarkType", UnknownMarkType, { ...props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/astro-portabletext/components/Mark.astro", void 0);

const $$Astro$5 = createAstro();
const $$Text = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Text;
  const { node } = Astro2.props;
  return renderTemplate`${node.text}`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/astro-portabletext/components/Text.astro", void 0);

const $$UnknownBlock = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<p data-portabletext-unknown="block">${renderSlot($$result, $$slots["default"])}</p>`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/astro-portabletext/components/UnknownBlock.astro", void 0);

const $$UnknownList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul data-portabletext-unknown="list">${renderSlot($$result, $$slots["default"])}</ul>`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/astro-portabletext/components/UnknownList.astro", void 0);

const $$UnknownListItem = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<li data-portabletext-unknown="listitem">${renderSlot($$result, $$slots["default"])}</li>`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/astro-portabletext/components/UnknownListItem.astro", void 0);

const $$UnknownMark = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span data-portabletext-unknown="mark">${renderSlot($$result, $$slots["default"])}</span>`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/astro-portabletext/components/UnknownMark.astro", void 0);

const $$Astro$4 = createAstro();
const $$UnknownType = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$UnknownType;
  const { node, isInline } = Astro2.props;
  const warning = getWarningMessage("type", node._type);
  return renderTemplate`${isInline ? renderTemplate`${maybeRenderHead()}<span style="display:none" data-portabletext-unknown="type">${warning}</span>` : renderTemplate`<div style="display:none" data-portabletext-unknown="type">${warning}</div>`}`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/astro-portabletext/components/UnknownType.astro", void 0);

const $$Astro$3 = createAstro();
const $$PortableText$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PortableText$1;
  const {
    value,
    components: componentOverrides = {},
    listNestingMode = LIST_NEST_MODE_HTML,
    onMissingComponent = true
  } = Astro2.props;
  const components = mergeComponents(
    {
      type: {},
      unknownType: $$UnknownType,
      block: {
        h1: $$Block,
        h2: $$Block,
        h3: $$Block,
        h4: $$Block,
        h5: $$Block,
        h6: $$Block,
        blockquote: $$Block,
        normal: $$Block
      },
      unknownBlock: $$UnknownBlock,
      list: {
        bullet: $$List,
        number: $$List,
        menu: $$List
      },
      unknownList: $$UnknownList,
      listItem: {
        bullet: $$ListItem,
        number: $$ListItem,
        menu: $$ListItem
      },
      unknownListItem: $$UnknownListItem,
      mark: {
        code: $$Mark,
        em: $$Mark,
        link: $$Mark,
        "strike-through": $$Mark,
        strong: $$Mark,
        underline: $$Mark
      },
      unknownMark: $$UnknownMark,
      text: $$Text,
      hardBreak: $$HardBreak
    },
    componentOverrides
  );
  const noop = () => {
  };
  const missingComponentHandler = ((handler) => {
    if (typeof handler === "function") {
      return handler;
    }
    return !handler ? noop : printWarning;
  })(onMissingComponent);
  const asComponentProps = (node, index, isInline) => ({
    node,
    index,
    isInline
  });
  const provideComponent = (nodeType, type, fallbackComponent) => {
    const component = ((component2) => {
      return component2[type] || component2;
    })(components[nodeType]);
    if (isComponent(component)) {
      return component;
    }
    missingComponentHandler(getWarningMessage(nodeType, type), {
      nodeType,
      type
    });
    return fallbackComponent;
  };
  const cachedNodes = /* @__PURE__ */ new WeakMap();
  let fallbackRenderOptions;
  const portableTextRender = (options, isInline) => {
    if (!fallbackRenderOptions) {
      throw new Error(
        "[PortableText portableTextRender] fallbackRenderOptions is undefined"
      );
    }
    return function renderNode(node, index) {
      const renderOptions = { ...fallbackRenderOptions, ...options ?? {} };
      function run(handler, props) {
        if (!isComponent(handler)) {
          throw new Error(
            `[PortableText render] No handler found for node type ${node._type}.`
          );
        }
        return handler(props);
      }
      if (isPortableTextToolkitList(node)) {
        const UnknownComponent2 = components.unknownList ?? $$UnknownList;
        cachedNodes.set(node, { Default: $$List, Unknown: UnknownComponent2 });
        return run(renderOptions.list, {
          Component: provideComponent("list", node.listItem, UnknownComponent2),
          props: asComponentProps(node, index, false),
          children: node.children?.map(portableTextRender(options, false))
        });
      }
      if (isPortableTextListItemBlock(node)) {
        const { listItem, ...blockNode } = node;
        const isStyled = node.style && node.style !== "normal";
        node.children = isStyled ? renderNode(blockNode, index) : buildMarksTree(node);
        const UnknownComponent2 = components.unknownListItem ?? $$UnknownListItem;
        cachedNodes.set(node, { Default: $$ListItem, Unknown: UnknownComponent2 });
        return run(renderOptions.listItem, {
          Component: provideComponent(
            "listItem",
            node.listItem,
            UnknownComponent2
          ),
          props: asComponentProps(node, index, false),
          children: isStyled ? node.children : node.children.map(portableTextRender(options, true))
        });
      }
      if (isPortableTextToolkitSpan(node)) {
        const UnknownComponent2 = components.unknownMark ?? $$UnknownMark;
        cachedNodes.set(node, { Default: $$Mark, Unknown: UnknownComponent2 });
        return run(renderOptions.mark, {
          Component: provideComponent("mark", node.markType, UnknownComponent2),
          props: asComponentProps(node, index, true),
          children: node.children?.map(portableTextRender(options, true))
        });
      }
      if (isPortableTextBlock(node)) {
        node.style ??= "normal";
        node.children = buildMarksTree(node);
        const UnknownComponent2 = components.unknownBlock ?? $$UnknownBlock;
        cachedNodes.set(node, { Default: $$Block, Unknown: UnknownComponent2 });
        return run(renderOptions.block, {
          Component: provideComponent("block", node.style, UnknownComponent2),
          props: asComponentProps(node, index, false),
          children: node.children.map(portableTextRender(options, true))
        });
      }
      if (isPortableTextToolkitTextNode(node)) {
        const isHardBreak = "\n" === node.text;
        const props = asComponentProps(node, index, true);
        if (isHardBreak) {
          return run(renderOptions.hardBreak, {
            Component: isComponent(components.hardBreak) ? components.hardBreak : $$HardBreak,
            props
          });
        }
        return run(renderOptions.text, {
          Component: isComponent(components.text) ? components.text : $$Text,
          props
        });
      }
      const UnknownComponent = components.unknownType ?? $$UnknownType;
      return run(renderOptions.type, {
        Component: provideComponent("type", node._type, UnknownComponent),
        props: asComponentProps(
          node,
          index,
          isInline ?? false
          /* default to block */
        )
      });
    };
  };
  globalThis[key] = (node) => {
    return {
      getDefaultComponent: provideDefaultComponent.bind(null, node),
      getUnknownComponent: provideUnknownComponent.bind(null, node),
      render: (options) => node.children?.map(portableTextRender(options))
    };
  };
  const provideDefaultComponent = (node) => {
    const DefaultComponent = cachedNodes.get(node)?.Default;
    if (DefaultComponent) return DefaultComponent;
    if (isPortableTextToolkitList(node)) return $$List;
    if (isPortableTextListItemBlock(node)) return $$ListItem;
    if (isPortableTextToolkitSpan(node)) return $$Mark;
    if (isPortableTextBlock(node)) return $$Block;
    if (isPortableTextToolkitTextNode(node)) {
      return "\n" === node.text ? $$HardBreak : $$Text;
    }
    return $$UnknownType;
  };
  const provideUnknownComponent = (node) => {
    const UnknownComponent = cachedNodes.get(node)?.Unknown;
    if (UnknownComponent) return UnknownComponent;
    if (isPortableTextToolkitList(node)) {
      return components.unknownList ?? $$UnknownList;
    }
    if (isPortableTextListItemBlock(node)) {
      return components.unknownListItem ?? $$UnknownListItem;
    }
    if (isPortableTextToolkitSpan(node)) {
      return components.unknownMark ?? $$UnknownMark;
    }
    if (isPortableTextBlock(node)) {
      return components.unknownBlock ?? $$UnknownBlock;
    }
    if (!isPortableTextToolkitTextNode(node)) {
      return components.unknownType ?? $$UnknownType;
    }
    throw new Error(
      `[PortableText getUnknownComponent] Unable to provide component with node type ${node._type}`
    );
  };
  const blocks = Array.isArray(value) ? value : [value];
  const nodes = nestLists(blocks, listNestingMode);
  const render = (options) => {
    fallbackRenderOptions = options;
    return portableTextRender(options);
  };
  const hasTypeSlot = Astro2.slots.has("type");
  const hasBlockSlot = Astro2.slots.has("block");
  const hasListSlot = Astro2.slots.has("list");
  const hasListItemSlot = Astro2.slots.has("listItem");
  const hasMarkSlot = Astro2.slots.has("mark");
  const hasTextSlot = Astro2.slots.has("text");
  const hasHardBreakSlot = Astro2.slots.has("hardBreak");
  const createSlotRenderer = (slotName) => Astro2.slots.render.bind(Astro2.slots, slotName);
  return renderTemplate`${(() => {
    const renderNode = (slotRenderer) => {
      return ({ Component, props, children }) => slotRenderer?.([{ Component, props, children }]) ?? renderTemplate`${renderComponent($$result, "Component", Component, { ...props }, { "default": ($$result2) => renderTemplate`${children}` })}`;
    };
    return nodes.map(
      render({
        type: renderNode(hasTypeSlot ? createSlotRenderer("type") : void 0),
        block: renderNode(
          hasBlockSlot ? createSlotRenderer("block") : void 0
        ),
        list: renderNode(hasListSlot ? createSlotRenderer("list") : void 0),
        listItem: renderNode(
          hasListItemSlot ? createSlotRenderer("listItem") : void 0
        ),
        mark: renderNode(hasMarkSlot ? createSlotRenderer("mark") : void 0),
        text: renderNode(hasTextSlot ? createSlotRenderer("text") : void 0),
        hardBreak: renderNode(
          hasHardBreakSlot ? createSlotRenderer("hardBreak") : void 0
        )
      })
    );
  })()}`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/node_modules/astro-portabletext/components/PortableText.astro", void 0);

const imageBuilder = imageUrlBuilder(sanityClient);
function urlForImage(source) {
  return imageBuilder.image(source);
}

const $$Astro$2 = createAstro();
const $$PortableTextImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PortableTextImage;
  const { asset, alt } = Astro2.props.node;
  const url = urlForImage(asset).url();
  const webpUrl = urlForImage(asset).format("webp").url();
  return renderTemplate`${maybeRenderHead()}<picture> <source${addAttribute(webpUrl, "srcset")} type="image/webp"> <img class="h-[30%] w-full m-auto"${addAttribute(url, "src")}${addAttribute(alt, "alt")}> </picture>`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/components/PortableTextImage.astro", void 0);

const $$Astro$1 = createAstro();
const $$PortableText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PortableText;
  const { portableText } = Astro2.props;
  const components = {
    type: {
      image: $$PortableTextImage
    }
  };
  return renderTemplate`${renderComponent($$result, "PortableTextInternal", $$PortableText$1, { "value": portableText, "components": components })}`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/components/PortableText.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
async function getStaticPaths() {
  const { data: posts } = await loadQuery({
    query: `*[_type == "post"]`
  });
  return posts.map(({ slug }) => {
    return {
      params: {
        slug: slug.current
      }
    };
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  encodeURIComponent(Astro2.url.href);
  const { params } = Astro2;
  const { slug } = Astro2.params;
  const querypost = `*[_type == 'post' && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  "mainImage": coalesce(mainImage.asset->url, ""),
  "author":author->name,
  body,
  publishedAt,
  tags,
}`;
  const { data: post } = await loadQuery({
    query: querypost,
    params
  });
  console.log("Fetched Post Data:", post);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<main class="px-4 md:px-10 lg:px-20 py-10 max-w-4xl mx-auto"> <article class="prose mx-auto dark:prose-invert text-center w-full"> <!-- Blog Title --> <h1 class="text-3xl md:text-4xl font-bold leading-tight mb-6">', "</h1> <!-- Blog Image --> ", ' <!-- Tags --> <div class="flex flex-wrap justify-center gap-3 mt-7"> ', ' </div> <!-- <p class=" mt-5 p-2 w-[20%] m-auto">Created by<a href="" class="ml-3"> {post.author}</a></p> --> <!-- <p className="border border-black mt-5 p-2 w-[20%] m-auto flex items-center gap-2">\n        {post.author && post.author.image && (\n          <img src={post.author.image} alt={post.author.name} className="w-8 h-8 rounded-full" />\n        )}\n        <a href="#" className="text-blue-500 hover:underline">{post.author?.name}</a>\n      </p> --> <div class="mt-4 text-sm text-gray-500"> <a', ' class="text-lg font-bold cursor-pointer">Created by ', '</a> </div> <!-- Publish Date --> <div class="mt-4 text-sm text-gray-500"> <!-- <small>Published on {post.publishedAt}</small> --> <p class="text-xs text-gray-500">', '</p> <!-- <small></small> --> </div> </article> <!-- Blog Content --> <div class="mt-12"> ', ' <!-- <RichTextRenderer content={post.body} client:load /> --> </div> <!-- Social Share Section --> <div class="max-w-3xl mx-auto mt-8 p-6  text-center"> <!-- <span class="block w-[100%] h-[2px] bg-gray-300"></span> --> <!-- <div class="flex flex-wrap justify-center gap-4"> --> <!-- Facebook --> <!-- <a href={`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`} target="_blank"\n          class="p-3 hover:scale-110 transition-transform">\n          <Icon name="facebook" size={30} />\n        </a> --> <!-- Twitter/X --> <!-- <a href={`https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`} target="_blank"\n          class="p-3  hover:scale-110 transition-transform">\n          <Icon name="X" size={30} />\n        </a> --> <!-- LinkedIn --> <!-- <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${pageTitle}`} target="_blank"\n          class="p-3  hover:scale-110 transition-transform">\n          <Icon name="Linkedin" size={30} />\n        </a> --> <!-- WhatsApp --> <!-- <a href={`https://wa.me/?text=${pageTitle}%20${pageUrl}`} target="_blank"\n          class="p-3  hover:scale-110 transition-transform">\n          <Icon name="whatsapp" size={30} />\n        </a> --> <!-- <span\n            id="copy-url-btn"\n            class="p-3  hover:scale-110 transition-transform"\n            onclick="copyCurrentURL()"\n          >\n          <Icon name="copyicon" size={30} />\n        </span> --> <div class="relative flex items-center justify-end"> <!-- Share Button --> <button class="share-btn relative border-none bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-3xl shadow-md hover:scale-105 transition-transform cursor-pointer z-10"> ', ' </button> <!-- Share Options --> <div id="share-options" class="absolute bottom-20 left-1/2 -translate-x-1/2 w-[280px] md:w-[320px] bg-gray-900 bg-opacity-80 text-white p-4 rounded-lg shadow-lg opacity-0 scale-95 pointer-events-none transition-all duration-300"> <!-- Title --> <p class="text-lg font-semibold uppercase border-b border-white pb-2 mb-3 text-center">\nShare\n</p> <!-- Social Media Links --> <div class="flex justify-around items-center"> <!-- Facebook --> <a href="https://www.facebook.com/sharer/sharer.php?u=yourURL" target="_blank" class="p-3 rounded-full bg-white hover:scale-110 transition-transform"> ', ' </a> <!-- Twitter/X --> <a href="https://twitter.com/intent/tweet?url=yourURL&text=yourTitle" target="_blank" class="p-3 rounded-full bg-white text-black hover:scale-110 transition-transform"> ', ' </a> <!-- LinkedIn --> <a href="https://www.linkedin.com/shareArticle?mini=true&url=yourURL&title=yourTitle" target="_blank" class="p-3 rounded-full bg-white hover:scale-110 transition-transform"> ', ' </a> <!-- WhatsApp --> <a href="https://wa.me/?text=yourTitle yourURL" target="_blank" class="p-3 rounded-full bg-green-100 hover:scale-110 transition-transform"> ', ' </a> <!-- Copy URL --> <span id="copy-url-btn" class="p-3 rounded-full bg-gray-300 hover:scale-110 transition-transform cursor-pointer"> ', " </span> </div> </div> </div> ", " ", ' <!-- </div> --> <!-- <span class="block w-[100%] h-[2px] bg-gray-300"></span> --> </div> ', ` <!-- <div class="mt-6">
      <button 
        onclick={"copyLink()"}
        class="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
      >
        Copy Link
      </button>
    </div> --> </main> <script type="text/javascript">
    // Function to copy the current page URL
    function copyCurrentURL() {
      const btn = document.getElementById('copy-url-btn'); // Remove '#' from the ID
      const url = window.location.href; // Get the current page URL
      navigator.clipboard.writeText(url) // Copy URL to clipboard
        .then(() => {
          btn.textContent = "Copied!"; // Change the button text to "Copied!"
          // Optionally, you can use an alert here as well
          // alert('URL copied to clipboard!');
        })
        .catch((err) => {
          console.error('Failed to copy URL: ', err); // Handle any errors
        });
    }
  <\/script>  `], [" ", '<main class="px-4 md:px-10 lg:px-20 py-10 max-w-4xl mx-auto"> <article class="prose mx-auto dark:prose-invert text-center w-full"> <!-- Blog Title --> <h1 class="text-3xl md:text-4xl font-bold leading-tight mb-6">', "</h1> <!-- Blog Image --> ", ' <!-- Tags --> <div class="flex flex-wrap justify-center gap-3 mt-7"> ', ' </div> <!-- <p class=" mt-5 p-2 w-[20%] m-auto">Created by<a href="" class="ml-3"> {post.author}</a></p> --> <!-- <p className="border border-black mt-5 p-2 w-[20%] m-auto flex items-center gap-2">\n        {post.author && post.author.image && (\n          <img src={post.author.image} alt={post.author.name} className="w-8 h-8 rounded-full" />\n        )}\n        <a href="#" className="text-blue-500 hover:underline">{post.author?.name}</a>\n      </p> --> <div class="mt-4 text-sm text-gray-500"> <a', ' class="text-lg font-bold cursor-pointer">Created by ', '</a> </div> <!-- Publish Date --> <div class="mt-4 text-sm text-gray-500"> <!-- <small>Published on {post.publishedAt}</small> --> <p class="text-xs text-gray-500">', '</p> <!-- <small></small> --> </div> </article> <!-- Blog Content --> <div class="mt-12"> ', ' <!-- <RichTextRenderer content={post.body} client:load /> --> </div> <!-- Social Share Section --> <div class="max-w-3xl mx-auto mt-8 p-6  text-center"> <!-- <span class="block w-[100%] h-[2px] bg-gray-300"></span> --> <!-- <div class="flex flex-wrap justify-center gap-4"> --> <!-- Facebook --> <!-- <a href={\\`https://www.facebook.com/sharer/sharer.php?u=\\${pageUrl}\\`} target="_blank"\n          class="p-3 hover:scale-110 transition-transform">\n          <Icon name="facebook" size={30} />\n        </a> --> <!-- Twitter/X --> <!-- <a href={\\`https://twitter.com/intent/tweet?url=\\${pageUrl}&text=\\${pageTitle}\\`} target="_blank"\n          class="p-3  hover:scale-110 transition-transform">\n          <Icon name="X" size={30} />\n        </a> --> <!-- LinkedIn --> <!-- <a href={\\`https://www.linkedin.com/shareArticle?mini=true&url=\\${pageUrl}&title=\\${pageTitle}\\`} target="_blank"\n          class="p-3  hover:scale-110 transition-transform">\n          <Icon name="Linkedin" size={30} />\n        </a> --> <!-- WhatsApp --> <!-- <a href={\\`https://wa.me/?text=\\${pageTitle}%20\\${pageUrl}\\`} target="_blank"\n          class="p-3  hover:scale-110 transition-transform">\n          <Icon name="whatsapp" size={30} />\n        </a> --> <!-- <span\n            id="copy-url-btn"\n            class="p-3  hover:scale-110 transition-transform"\n            onclick="copyCurrentURL()"\n          >\n          <Icon name="copyicon" size={30} />\n        </span> --> <div class="relative flex items-center justify-end"> <!-- Share Button --> <button class="share-btn relative border-none bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-3xl shadow-md hover:scale-105 transition-transform cursor-pointer z-10"> ', ' </button> <!-- Share Options --> <div id="share-options" class="absolute bottom-20 left-1/2 -translate-x-1/2 w-[280px] md:w-[320px] bg-gray-900 bg-opacity-80 text-white p-4 rounded-lg shadow-lg opacity-0 scale-95 pointer-events-none transition-all duration-300"> <!-- Title --> <p class="text-lg font-semibold uppercase border-b border-white pb-2 mb-3 text-center">\nShare\n</p> <!-- Social Media Links --> <div class="flex justify-around items-center"> <!-- Facebook --> <a href="https://www.facebook.com/sharer/sharer.php?u=yourURL" target="_blank" class="p-3 rounded-full bg-white hover:scale-110 transition-transform"> ', ' </a> <!-- Twitter/X --> <a href="https://twitter.com/intent/tweet?url=yourURL&text=yourTitle" target="_blank" class="p-3 rounded-full bg-white text-black hover:scale-110 transition-transform"> ', ' </a> <!-- LinkedIn --> <a href="https://www.linkedin.com/shareArticle?mini=true&url=yourURL&title=yourTitle" target="_blank" class="p-3 rounded-full bg-white hover:scale-110 transition-transform"> ', ' </a> <!-- WhatsApp --> <a href="https://wa.me/?text=yourTitle yourURL" target="_blank" class="p-3 rounded-full bg-green-100 hover:scale-110 transition-transform"> ', ' </a> <!-- Copy URL --> <span id="copy-url-btn" class="p-3 rounded-full bg-gray-300 hover:scale-110 transition-transform cursor-pointer"> ', " </span> </div> </div> </div> ", " ", ' <!-- </div> --> <!-- <span class="block w-[100%] h-[2px] bg-gray-300"></span> --> </div> ', ` <!-- <div class="mt-6">
      <button 
        onclick={"copyLink()"}
        class="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
      >
        Copy Link
      </button>
    </div> --> </main> <script type="text/javascript">
    // Function to copy the current page URL
    function copyCurrentURL() {
      const btn = document.getElementById('copy-url-btn'); // Remove '#' from the ID
      const url = window.location.href; // Get the current page URL
      navigator.clipboard.writeText(url) // Copy URL to clipboard
        .then(() => {
          btn.textContent = "Copied!"; // Change the button text to "Copied!"
          // Optionally, you can use an alert here as well
          // alert('URL copied to clipboard!');
        })
        .catch((err) => {
          console.error('Failed to copy URL: ', err); // Handle any errors
        });
    }
  <\/script>  `])), maybeRenderHead(), post.title, post.mainImage && renderTemplate`<div class="w-full overflow-hidden rounded-xl shadow-lg"> <img class="head-img"${addAttribute(post.mainImage, "src")}${addAttribute(post.alt, "alt")}> </div>`, post.tags.map((tag) => renderTemplate`<span class="px-3 py-1 text-sm font-medium badge badge-outline border border-black shadow-md hover:scale-105 transition"> <a${addAttribute(`/tags/${slugify(tag)}`, "href")} class="">${tag}</a> </span>`), addAttribute(`/author/${slugify(post.author)}`, "href"), post.author, formatDate(post.publishedAt), renderComponent($$result2, "PortableText", $$PortableText, { "portableText": post.body }), renderComponent($$result2, "Icon", $$Icon, { "name": "share", "size": 30 }), renderComponent($$result2, "Icon", $$Icon, { "name": "facebook", "size": 24 }), renderComponent($$result2, "Icon", $$Icon, { "name": "X", "size": 24 }), renderComponent($$result2, "Icon", $$Icon, { "name": "Linkedin", "size": 24 }), renderComponent($$result2, "Icon", $$Icon, { "name": "whatsapp", "size": 24 }), renderComponent($$result2, "Icon", $$Icon, { "name": "copyicon", "size": 24 }), renderScript($$result2, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/post/[...slug].astro?astro&type=script&index=0&lang.ts"), renderScript($$result2, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/post/[...slug].astro?astro&type=script&index=1&lang.ts"), renderScript($$result2, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/post/[...slug].astro?astro&type=script&index=2&lang.ts")) })}`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/post/[...slug].astro", void 0);

const $$file = "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/post/[...slug].astro";
const $$url = "/post/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
