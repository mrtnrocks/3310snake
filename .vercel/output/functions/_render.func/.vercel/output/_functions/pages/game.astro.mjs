import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CCcisOlg.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CnmDZpAX.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Game = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-gpfhifiw": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-gpfhifiw> ${renderComponent($$result2, "SnakeGameComponent", null, { "client:only": "react", "client:component-hydration": "only", "data-astro-cid-gpfhifiw": true, "client:component-path": "/app/src/components/SnakeGameComponent", "client:component-export": "default" })} </main> ` })} `;
}, "/app/src/pages/game.astro", void 0);

const $$file = "/app/src/pages/game.astro";
const $$url = "/game";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Game,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
