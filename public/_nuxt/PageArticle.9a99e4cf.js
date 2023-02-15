import { _ as l } from "./PageArticle.vue_vue_type_style_index_0_scoped_d3e8b27d_lang.2510b67f.js";
import p from "./AppImage.9bc8cdcc.js";
import {
  o,
  I as s,
  c as m,
  Z as a,
  ab as t,
  O as n,
  Q as c,
  R as u,
  ae as f,
  af as v,
  ag as h,
  k as b,
  a7 as $,
} from "./entry.e50f0f50.js";
import "./nuxt-img.6cd8cff3.js";
const k = { class: "article" },
  y = { class: "cover" },
  I = { key: 1, class: "pb-40" },
  w = { class: "content max-w-4xl" },
  C = { key: 0, class: "sidebar" };
function B(e, x, N, V, g, j) {
  const r = p,
    _ = v,
    d = h,
    i = b;
  return (
    o(),
    s("div", k, [
      e.coverCloudinaryId
        ? (o(),
          m(
            _,
            { key: 0 },
            {
              default: a(() => [
                t("div", y, [
                  n(
                    r,
                    {
                      class: "w-full h-full object-cover",
                      publicId: e.pubId,
                      responsive: "width",
                    },
                    null,
                    8,
                    ["publicId"]
                  ),
                ]),
              ]),
              _: 1,
            }
          ))
        : (o(), s("div", I)),
      t(
        "div",
        { class: f(["wrapper", { "with-cover": e.coverCloudinaryId }]) },
        [
          n(d, { class: "search" }),
          t("main", w, [
            c(e.$slots, "content", {}, void 0, !0),
            n(
              i,
              { class: "rendered", value: e.document },
              { empty: a(() => []), _: 1 },
              8,
              ["value"]
            ),
          ]),
          e.$slots.sidebar
            ? (o(), s("aside", C, [c(e.$slots, "sidebar", {}, void 0, !0)]))
            : u("", !0),
        ],
        2
      ),
    ])
  );
}
const R = $(l, [
  ["render", B],
  ["__scopeId", "data-v-d3e8b27d"],
]);
export { R as default };
