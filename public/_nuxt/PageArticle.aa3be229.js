import { _ as l } from "./PageArticle.vue.e748534d.js";
import { _ as p } from "./AppImage.1a4d91cf.js";
import { _ as m } from "./client-only.9e138b79.js";
import { _ as u } from "./SearchInput.ae3910f0.js";
import f from "./ContentRenderer.32ebd34d.js";
import {
  o,
  b as s,
  c as v,
  w as a,
  a as t,
  f as n,
  z as c,
  L as h,
  S as b,
  g as $,
} from "./entry.bc63e51a.js";
const w = { class: "article" },
  y = { class: "cover" },
  k = { key: 1, class: "pb-40" },
  I = { class: "content max-w-4xl" },
  C = { key: 0, class: "sidebar" };
function B(e, x, N, V, g, z) {
  const r = p,
    _ = m,
    d = u,
    i = f;
  return (
    o(),
    s("div", w, [
      e.coverCloudinaryId
        ? (o(),
          v(
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
        : (o(), s("div", k)),
      t(
        "div",
        { class: b(["wrapper", { "with-cover": e.coverCloudinaryId }]) },
        [
          n(d, { class: "search" }),
          t("main", I, [
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
            : h("", !0),
        ],
        2
      ),
    ])
  );
}
const D = $(l, [
  ["render", B],
  ["__scopeId", "data-v-d3e8b27d"],
]);
export { D as _ };
