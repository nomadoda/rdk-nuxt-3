import {
  A as b,
  a as v,
  m as u,
  q as _,
  o as a,
  c as y,
  a0 as A,
  Z as n,
  R as o,
  I as r,
  ab as t,
  u as m,
  X as s,
  V as I,
  W as C,
  O as g,
  P as k,
  N,
  ac as S,
  ad as V,
  a7 as B,
} from "./entry.e50f0f50.js";
import { u as P } from "./usePageHead.f7f7da2b.js";
import { s as l } from "./urlTools.7e20410a.js";
import D from "./PageArticle.9a99e4cf.js";
import "./PageArticle.vue_vue_type_style_index_0_scoped_d3e8b27d_lang.2510b67f.js";
import "./AppImage.9bc8cdcc.js";
import "./nuxt-img.6cd8cff3.js";
const L = b({
    setup() {
      const { params: e, fullPath: i } = v(),
        { data: p } = u(
          i,
          async () => _(`pages/${e.parent}/${e.slug}`).findOne(),
          "$YLE2tbdkbL"
        ),
        { data: h } = u(`${i}-parent`, async () =>
          _(`pages/${e.parent}/index`)
            .only(["title", "_dir", "_path"])
            .findOne()
        ),
        { data: f } = u(
          async () =>
            _(`pages/${e.parent}`)
              .limit(20)
              .only(["title", "_dir", "_path"])
              .find(),
          "$Sl6UnXDaj9"
        );
      return P(p.value), { article: p, parent: h, moreArticles: f };
    },
    methods: { stripPageRoot: l },
  }),
  O = (e) => (S("data-v-a9447f2c"), (e = e()), V(), e),
  R = O(() => t("div", { class: "byline" }, null, -1)),
  q = { class: "preamble" },
  w = { key: 0, class: "sidebar-section more" },
  E = { class: "block" },
  T = { class: "block__content" },
  X = { key: 1, class: "text-center text-sm" };
function j(e, i, p, h, f, F) {
  const c = N,
    $ = D;
  return e.article
    ? (a(),
      y(
        $,
        {
          key: 0,
          class: "page-front",
          document: e.article,
          coverCloudinaryId: e.article.image,
        },
        A(
          {
            content: n(() => [
              t("h1", null, s(e.article.title), 1),
              R,
              t("p", q, s(e.article.preamble), 1),
            ]),
            _: 2,
          },
          [
            Array.isArray(e.moreArticles) && e.moreArticles.length > 0
              ? {
                  name: "sidebar",
                  fn: n(() => [
                    e.parent
                      ? (a(),
                        r("section", w, [
                          t("div", E, [
                            e.parent && e.parent._path
                              ? (a(),
                                y(
                                  c,
                                  { key: 0, to: `/${m(l)(e.parent._path)}` },
                                  {
                                    default: n(() => [
                                      t("h2", null, s(e.parent.title), 1),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ["to"]
                                ))
                              : o("", !0),
                            t("div", T, [
                              t("ul", null, [
                                (a(!0),
                                r(
                                  I,
                                  null,
                                  C(
                                    e.moreArticles,
                                    (d) => (
                                      a(),
                                      r("li", { key: d.title }, [
                                        g(
                                          c,
                                          { to: `/${m(l)(d._path)}` },
                                          {
                                            default: n(() => [
                                              k(s(d.title), 1),
                                            ]),
                                            _: 2,
                                          },
                                          1032,
                                          ["to"]
                                        ),
                                      ])
                                    )
                                  ),
                                  128
                                )),
                              ]),
                            ]),
                          ]),
                        ]))
                      : o("", !0),
                    e.parent &&
                    e.parent._path &&
                    e.parent._path !== e.article._path
                      ? (a(),
                        r("div", X, [
                          g(
                            c,
                            { to: `/${m(l)(e.parent._path)}` },
                            {
                              default: n(() => [
                                k("Tillbaka till\xA0"),
                                t(
                                  "strong",
                                  null,
                                  s(e.parent.title) + "\xA0",
                                  1
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ["to"]
                          ),
                        ]))
                      : o("", !0),
                  ]),
                  key: "0",
                }
              : void 0,
          ]
        ),
        1032,
        ["document", "coverCloudinaryId"]
      ))
    : o("", !0);
}
const J = B(L, [
  ["render", j],
  ["__scopeId", "data-v-a9447f2c"],
]);
export { J as default };
