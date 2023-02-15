import {
  A as v,
  a as k,
  m as p,
  q as n,
  o as l,
  c as b,
  a0 as I,
  Z as a,
  R as g,
  ab as t,
  O as _,
  X as s,
  u,
  I as m,
  W as S,
  P as y,
  V as C,
  N,
  ac as V,
  ad as A,
  a7 as O,
} from "./entry.e50f0f50.js";
import { u as B } from "./usePageHead.f7f7da2b.js";
import { s as r } from "./urlTools.7e20410a.js";
import P from "./PageArticle.9a99e4cf.js";
import "./PageArticle.vue_vue_type_style_index_0_scoped_d3e8b27d_lang.2510b67f.js";
import "./AppImage.9bc8cdcc.js";
import "./nuxt-img.6cd8cff3.js";
const R = v({
    setup() {
      const { params: e, fullPath: h } = k(),
        { data: o } = p(`${h}-parent`, async () =>
          n(`pages/${e.slug}/index`).only(["title", "_dir", "_path"]).findOne()
        ),
        { data: i } = p(
          e.slug,
          async () =>
            o.value
              ? n(`${o.value._path}/index`).findOne()
              : n(`pages/${e.slug}`).findOne(),
          "$MV4HhlUyzS"
        ),
        f = p(
          async () =>
            n(`pages/${e.slug}`).only(["title", "_dir", "_path"]).findOne(),
          "$K7tgpMlSxF"
        );
      return B(i.value), { parent: o, article: i, moreArticles: f };
    },
    methods: { stripPageRoot: r },
  }),
  q = (e) => (V("data-v-ca92a622"), (e = e()), A(), e),
  w = q(() => t("div", { class: "byline" }, null, -1)),
  x = { class: "preamble" },
  D = { class: "sidebar-section more" },
  F = { class: "block" },
  H = { class: "block__content" },
  M = { key: 0, class: "text-center text-sm" };
function T(e, h, o, i, f, z) {
  const c = N,
    $ = P;
  return e.article
    ? (l(),
      b(
        $,
        {
          key: 0,
          class: "page-front",
          document: e.article,
          coverCloudinaryId: e.article.image,
        },
        I(
          {
            content: a(() => [
              t("h1", null, s(e.article.title), 1),
              w,
              t("p", x, s(e.article.preamble), 1),
            ]),
            _: 2,
          },
          [
            e.moreArticles.length > 0
              ? {
                  name: "sidebar",
                  fn: a(() => [
                    t("section", D, [
                      t("div", F, [
                        _(
                          c,
                          { to: `/${u(r)(e.parent._path)}` },
                          {
                            default: a(() => [
                              t("h2", null, s(e.parent.title), 1),
                            ]),
                            _: 1,
                          },
                          8,
                          ["to"]
                        ),
                        t("div", H, [
                          t("ul", null, [
                            (l(!0),
                            m(
                              C,
                              null,
                              S(
                                e.moreArticles,
                                (d) => (
                                  l(),
                                  m("li", { key: d.title }, [
                                    _(
                                      c,
                                      { to: `/${u(r)(d._path)}` },
                                      {
                                        default: a(() => [y(s(d.title), 1)]),
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
                    ]),
                    e.parent._path !== e.article._path
                      ? (l(),
                        m("div", M, [
                          _(
                            c,
                            { to: `/${u(r)(e.parent._path)}` },
                            {
                              default: a(() => [
                                y("Tillbaka till\xA0"),
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
                      : g("", !0),
                  ]),
                  key: "0",
                }
              : void 0,
          ]
        ),
        1032,
        ["document", "coverCloudinaryId"]
      ))
    : g("", !0);
}
const j = O(R, [
  ["render", T],
  ["__scopeId", "data-v-ca92a622"],
]);
export { j as default };
