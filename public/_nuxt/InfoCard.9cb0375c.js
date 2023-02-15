import { _ as p } from "./InfoCard.vue_vue_type_style_index_0_scoped_b1c8dc52_lang.08b16729.js";
import l from "./AppImage.9bc8cdcc.js";
import {
  o,
  I as t,
  c as n,
  Z as s,
  ab as a,
  O as m,
  R as _,
  X as c,
  P as u,
  af as h,
  ak as f,
  a7 as k,
} from "./entry.e50f0f50.js";
import "./nuxt-img.6cd8cff3.js";
const b = { class: "info-card" },
  v = { class: "info-card__image" },
  y = { class: "info-card__content" },
  g = { key: 0, class: "author" },
  I = { key: 2, class: "info-card__border themed" };
function $(e, B, N, V, x, w) {
  const i = l,
    r = h,
    d = f;
  return (
    o(),
    t("div", b, [
      e.image
        ? (o(),
          n(
            r,
            { key: 0 },
            {
              default: s(() => [
                a("div", v, [
                  m(
                    i,
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
        : _("", !0),
      a("div", y, [
        a("h3", null, c(e.title), 1),
        e.author ? (o(), t("p", g, "Text av " + c(e.author), 1)) : _("", !0),
      ]),
      e.link
        ? (o(),
          n(
            d,
            { key: 1, class: "info-card__link themed", href: e.link },
            { default: s(() => [u("L\xE4s")]), _: 1 },
            8,
            ["href"]
          ))
        : (o(), t("div", I)),
    ])
  );
}
const L = k(p, [
  ["render", $],
  ["__scopeId", "data-v-b1c8dc52"],
]);
export { L as default };
