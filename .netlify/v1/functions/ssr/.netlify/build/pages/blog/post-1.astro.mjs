import '../../chunks/page-ssr_BP2uGixO.mjs';
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead, h as addAttribute, k as renderSlot, u as unescapeHTML } from '../../chunks/astro/server_8nq5quqT.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BfJ4Bn0f.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://stargazers.club");
const $$BlogPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPostLayout;
  const { frontmatter } = Astro2.props;
  console.log("jjjjjjj", frontmatter);
  const { title, description, date, category, author, image } = frontmatter;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header> <div class="container"> <small> <a href="">${category}</a> </small> <h1>${title}</h1> <p>${author}</p> <p>${date}</p> </div> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")}> </header> <div class="post-content"> <div class="content"> ${renderSlot($$result2, $$slots["default"])} </div> </div> <div class="sidebar"></div> ` })}`;
}, "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/layouts/BlogPostLayout.astro", void 0);

const html = () => "<p>Nisi duis ex aliqua eu officia eiusmod duis magna pariatur. Irure laborum qui aliqua nulla esse cillum laborum aliquip nulla elit. Id id Lorem duis irure cillum culpa. Nulla sint et aliqua velit do. Nulla sit sit proident consectetur enim ullamco aliqua in reprehenderit ullamco officia.</p>\n<p>Ad ipsum velit sint enim exercitation mollit consequat elit mollit qui commodo aute. Laboris culpa voluptate aliquip incididunt duis. Cupidatat aliquip et sunt aute fugiat cupidatat irure voluptate. Occaecat officia et sunt.</p>\n<p>Officia tempor voluptate enim consequat cillum aute fugiat cupidatat incididunt magna labore in commodo. Eiusmod nostrud non deserunt. Incididunt excepteur pariatur magna. Proident aute ad in velit labore enim sit cillum ad mollit proident et qui. Esse sunt ullamco ullamco ipsum enim eu esse id eu exercitation laboris magna Lorem. Anim nostrud officia anim velit do exercitation labore mollit excepteur excepteur ex.</p>\n<p>Ipsum adipisicing exercitation dolor pariatur labore qui. Culpa cupidatat ea elit eiusmod tempor ea qui dolor Lorem laborum adipisicing. Ad ea laboris qui cupidatat deserunt culpa. Nulla ex velit adipisicing proident fugiat deserunt sunt eu adipisicing sint incididunt quis qui. Nulla fugiat labore duis ullamco reprehenderit excepteur laboris tempor ullamco aliquip laborum aliqua. Est tempor nisi magna ut elit pariatur commodo.</p>\n<p>Labore commodo do incididunt amet ad et exercitation magna veniam veniam aute laboris excepteur occaecat Lorem. Fugiat in magna commodo magna nulla eu. Fugiat nulla aliqua sunt duis enim irure aliquip fugiat aliqua Lorem ad tempor incididunt proident incididunt. Labore fugiat tempor esse cillum voluptate culpa anim sunt consequat. Ipsum minim nostrud laborum sit aliquip duis officia consequat est. Fugiat mollit elit nulla. Sit minim est elit labore. Sunt eu pariatur pariatur ut deserunt nulla labore in non sit tempor voluptate ex.</p>";

				const frontmatter = {"layout":"../../layouts/BlogPostLayout.astro","title":"A Post about Important Items Of Life","date":"2022-11-20T00:00:00.000Z","author":"Darnell McClure","image":{"src":"/images/post-1.jpg","alt":"A picture of a coder"},"description":"Have you ever wondered what the most important items of life are? Well, wonder no more!","draft":false,"category":"Reference Docs"};
				const file = "C:/Users/User/OneDrive/Desktop/New/venv-astro/src/pages/blog/post-1.md";
				const url = "/blog/post-1";
				function rawContent() {
					return "   \n                                            \n                                           \n                \n                       \n                                                                 \n                                                                                                    \n            \n                        \n   \n\nNisi duis ex aliqua eu officia eiusmod duis magna pariatur. Irure laborum qui aliqua nulla esse cillum laborum aliquip nulla elit. Id id Lorem duis irure cillum culpa. Nulla sint et aliqua velit do. Nulla sit sit proident consectetur enim ullamco aliqua in reprehenderit ullamco officia.\n\nAd ipsum velit sint enim exercitation mollit consequat elit mollit qui commodo aute. Laboris culpa voluptate aliquip incididunt duis. Cupidatat aliquip et sunt aute fugiat cupidatat irure voluptate. Occaecat officia et sunt.\n\nOfficia tempor voluptate enim consequat cillum aute fugiat cupidatat incididunt magna labore in commodo. Eiusmod nostrud non deserunt. Incididunt excepteur pariatur magna. Proident aute ad in velit labore enim sit cillum ad mollit proident et qui. Esse sunt ullamco ullamco ipsum enim eu esse id eu exercitation laboris magna Lorem. Anim nostrud officia anim velit do exercitation labore mollit excepteur excepteur ex.\n\nIpsum adipisicing exercitation dolor pariatur labore qui. Culpa cupidatat ea elit eiusmod tempor ea qui dolor Lorem laborum adipisicing. Ad ea laboris qui cupidatat deserunt culpa. Nulla ex velit adipisicing proident fugiat deserunt sunt eu adipisicing sint incididunt quis qui. Nulla fugiat labore duis ullamco reprehenderit excepteur laboris tempor ullamco aliquip laborum aliqua. Est tempor nisi magna ut elit pariatur commodo.\n\nLabore commodo do incididunt amet ad et exercitation magna veniam veniam aute laboris excepteur occaecat Lorem. Fugiat in magna commodo magna nulla eu. Fugiat nulla aliqua sunt duis enim irure aliquip fugiat aliqua Lorem ad tempor incididunt proident incididunt. Labore fugiat tempor esse cillum voluptate culpa anim sunt consequat. Ipsum minim nostrud laborum sit aliquip duis officia consequat est. Fugiat mollit elit nulla. Sit minim est elit labore. Sunt eu pariatur pariatur ut deserunt nulla labore in non sit tempor voluptate ex.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$BlogPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    Content,
    compiledContent,
    default: Content,
    file,
    frontmatter,
    getHeadings,
    rawContent,
    url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
