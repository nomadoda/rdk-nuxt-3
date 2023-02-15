import { m as r } from "./SearchResults.vue_vue_type_style_index_0_scoped_fbfddc59_lang.8d17b183.js";
import {
  o as a,
  I as t,
  ab as o,
  X as n,
  Q as d,
  R as i,
  ae as l,
  ac as c,
  ad as _,
  a7 as p,
} from "./entry.e50f0f50.js";
const f = (e) => (c("data-v-0fa42f5b"), (e = e()), _(), e),
  u = { class: "sidebar__header themed" },
  h = f(() =>
    o(
      "svg",
      { class: "x w-6 h-6", viewBox: "0 0 20 20", fill: "currentColor" },
      [
        o("path", {
          "fill-rule": "evenodd",
          d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
          "clip-rule": "evenodd",
        }),
      ],
      -1
    )
  ),
  m = [h],
  v = { class: "sidebar__content" },
  b = { key: 0, class: "sidebar__footer" };
function $(e, s, I, S, k, w) {
  return (
    a(),
    t(
      "aside",
      { class: l(["sidebar", { "with-footer": e.hasFooter }]) },
      [
        o("div", u, [
          o("h1", null, n(e.title), 1),
          o("button", { onClick: s[0] || (s[0] = (B) => e.$emit("close")) }, m),
        ]),
        o("div", v, [d(e.$slots, "default", {}, void 0, !0)]),
        e.hasFooter
          ? (a(), t("div", b, [d(e.$slots, "footer", {}, void 0, !0)]))
          : i("", !0),
      ],
      2
    )
  );
}
const g = p(r, [
  ["render", $],
  ["__scopeId", "data-v-0fa42f5b"],
]);
export { g as default };
