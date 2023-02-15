import { a as c } from "./SourceListItem.vue_vue_type_style_index_0_scoped_764c6338_lang.767669ff.js";
import {
  o as s,
  I as t,
  ab as r,
  X as o,
  R as a,
  P as n,
  ac as u,
  ad as i,
  a7 as p,
} from "./entry.e50f0f50.js";
const d = (e) => (u("data-v-764c6338"), (e = e()), i(), e),
  l = { class: "source-list-item" },
  _ = { key: 0 },
  h = { key: 1 },
  m = ["href"],
  f = { key: 2 },
  I = d(() => r("br", null, null, -1));
function k(e, S, $, y, N, b) {
  return (
    s(),
    t("li", l, [
      r("span", null, o(e.source.sourceName), 1),
      e.source.authorOrInstitution
        ? (s(), t("span", _, o(`, ${e.source.authorOrInstitution}`), 1))
        : a("", !0),
      e.source.url
        ? (s(),
          t("span", h, [
            n(o(", URL: ")),
            r("a", { href: e.source.url }, o(e.source.url), 9, m),
          ]))
        : a("", !0),
      e.source.urlDate
        ? (s(),
          t("span", f, [
            I,
            n(o(" Sidan bes\xF6kt: ") + " " + o(e.source.urlDate), 1),
          ]))
        : a("", !0),
    ])
  );
}
const V = p(c, [
  ["render", k],
  ["__scopeId", "data-v-764c6338"],
]);
export { V as default };
