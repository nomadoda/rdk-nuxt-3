import { _ as t } from "./PageTitle.vue.14c34ae6.js";
import {
  o as a,
  b as s,
  a as r,
  M as o,
  S as n,
  L as p,
  g as c,
} from "./entry.bc63e51a.js";
const i = { class: "page-title" },
  l = { key: 0, class: "preamble" };
function _(e, m, d, f, u, b) {
  return (
    a(),
    s("div", i, [
      r("h2", { class: n(e.variant) }, o(e.title), 3),
      e.preamble ? (a(), s("p", l, o(e.preamble), 1)) : p("", !0),
    ])
  );
}
const g = c(t, [
  ["render", _],
  ["__scopeId", "data-v-50d460a4"],
]);
export { g as _ };
