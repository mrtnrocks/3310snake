import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, d as renderSlot, e as renderHead, f as addAttribute } from './astro/server_CCcisOlg.mjs';
import 'kleur/colors';
/* empty css                        */

const $$Astro$1 = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} `;
}, "/app/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="robots" content="index,follow"><link rel="sitemap" href="/sitemap-index.xml"><meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"><link rel="icon" type="image/png" href="/favicon.png"><meta name="generator"', '><title>Nokia Snake Game</title><meta property="og:title" content="Nokia Snake Game"><meta name="description" content="Nokia Snake Game"><meta property="og:description" content="Nokia Snake Game"><meta property="og:image" content="https://3310snake.com/preview.png">', '<script defer data-api="https://23ba6c8a-70f3-4ba6-a654-7777260b7c39-analytic-worker.lunaxodd.workers.dev/events" data-site-id="3310snake.com" src="https://pub-ee29bf8321df42aa9d18950bcad06caf.r2.dev/tracker.js">\n		<\/script><script defer data-site-id="3310snake.com" src="https://assets.onedollarstats.com/tracker.js">\n		<\/script><script defer data-domain="3310snake.com" src="https://plausible.io/js/script.js"><\/script><script src="https://cdn.usefathom.com/script.js" data-site="NNOQZDXE" defer><\/script><link rel="stylesheet" href="style.css">', "</head> <body> ", " <script>\n		if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {\n			document.querySelector('body').classList.add('safari');\n		}\n	<\/script> </body> </html>"])), addAttribute(Astro2.generator, "content"), renderComponent($$result, "SpeedInsights", $$Index, {}), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/app/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
