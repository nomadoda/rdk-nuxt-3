import { _ as p } from "./InfoCard.vue.249e50fd.js";
import { _ as l } from "./AppImage.1a4d91cf.js";
import { _ as m } from "./client-only.9e138b79.js";
import { _ as u } from "./AppLink.ef6e30e4.js";
import {
  o,
  b as t,
  c as n,
  w as _,
  a,
  f,
  L as s,
  M as c,
  e as h,
  g as k,
} from "./entry.bc63e51a.js";
const b = { class: "info-card" },
  g = { class: "info-card__image" },
  v = { class: "info-card__content" },
  y = { key: 0, class: "author" },
  $ = { key: 2, class: "info-card__border themed" };
function B(e, I, N, V, w, x) {
  const r = l,
    i = m,
    d = u;
  return (
    o(),
    t("div", b, [
      e.image
        ? (o(),
          n(
            i,
            { key: 0 },
            {
              default: _(() => [
                a("div", g, [
                  f(
                    r,
                    { publicId: e.pubId, width: "auto", height: "260" },
                    null,
                    8,
                    ["publicId"]
                  ),
                ]),
              ]),
              _: 1,
            }
          ))
        : s("", !0),
      a("div", v, [
        a("h3", null, c(e.title), 1),
        e.author ? (o(), t("p", y, "Text av " + c(e.author), 1)) : s("", !0),
      ]),
      e.link
        ? (o(),
          n(
            d,
            { key: 1, class: "info-card__link themed", href: e.link },
            { default: _(() => [h("Läs")]), _: 1 },
            8,
            ["href"]
          ))
        : (o(), t("div", $)),
    ])
  );
}
const M = k(p, [
  ["render", B],
  ["__scopeId", "data-v-b1c8dc52"],
]);
export { M as _ };
