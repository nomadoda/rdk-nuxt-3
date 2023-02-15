import { b as c } from "./PageSearch.vue_vue_type_style_index_0_scoped_99e80430_lang.a8536c95.js";
import {
  o as t,
  I as o,
  ab as i,
  V as _,
  W as m,
  O as p,
  Z as s,
  P as n,
  X as l,
  c as u,
  R as d,
  ak as k,
  a7 as f,
} from "./entry.e50f0f50.js";
const h = { class: "tags-list" };
function x(e, b, L, V, B, N) {
  const r = k;
  return (
    t(),
    o("div", h, [
      i("ul", null, [
        (t(!0),
        o(
          _,
          null,
          m(
            e.links,
            (a) => (
              t(),
              o("li", { key: a.linkText.toLowerCase() }, [
                p(
                  r,
                  { class: "link", href: a.url },
                  { default: s(() => [n(l(a.linkText), 1)]), _: 2 },
                  1032,
                  ["href"]
                ),
              ])
            )
          ),
          128
        )),
      ]),
      e.moreLink
        ? (t(),
          u(
            r,
            { key: 0, class: "btn-more", href: e.moreLink.url },
            { default: s(() => [n(l(e.moreLink.linkText), 1)]), _: 1 },
            8,
            ["href"]
          ))
        : d("", !0),
    ])
  );
}
const g = f(c, [
  ["render", x],
  ["__scopeId", "data-v-6192b8be"],
]);
export { g as default };
