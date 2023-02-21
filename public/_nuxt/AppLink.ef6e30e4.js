import { _ as r } from "./AppLink.vue.55029462.js";
import { _ as s } from "./nuxt-link.b84c39ea.js";
import {
  o as t,
  b as a,
  z as o,
  c as l,
  w as _,
  g as f,
} from "./entry.bc63e51a.js";
const c = ["href"];
function p(e, i, m, k, u, d) {
  const n = s;
  return e.external || e.hrefIsExternal
    ? (t(),
      a(
        "a",
        {
          key: 0,
          class: "link",
          href: e.href,
          ref: "external",
          target: "_blank",
        },
        [o(e.$slots, "default")],
        8,
        c
      ))
    : (t(),
      l(
        n,
        { key: 1, class: "link", to: e.href },
        { default: _(() => [o(e.$slots, "default")]), _: 3 },
        8,
        ["to"]
      ));
}
const B = f(r, [["render", p]]);
export { B as _ };
