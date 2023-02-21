import {
  d as b,
  i as R,
  x as _,
  E as C,
  a5 as I,
  o,
  c as $,
  a0 as N,
  w as l,
  L as m,
  a as t,
  u as f,
  M as r,
  b as p,
  N as S,
  O as A,
  f as k,
  e as v,
  J as w,
  K as B,
  g as V,
} from "./entry.bc63e51a.js";
import { q as g } from "./query.02b33be6.js";
import { u as E } from "./usePageHead.dfc639a9.js";
import { s as d } from "./urlTools.cc793b8f.js";
import { _ as O } from "./nuxt-link.b84c39ea.js";
import { _ as q } from "./PageArticle.aa3be229.js";
import "./utils.0216015b.js";
import "./PageArticle.vue.e748534d.js";
import "./AppImage.1a4d91cf.js";
import "./AppImage.vue.fa386efd.js";
import "./client-only.9e138b79.js";
import "./SearchInput.ae3910f0.js";
import "./SearchInput.vue.750aef33.js";
import "./ContentRenderer.32ebd34d.js";
import "./ContentRendererMarkdown.291b27e1.js";
import "./index.a6ef77ff.js";
import "./index.23a876b0.js";
const D = b({
    setup() {
      const { params: e, fullPath: c } = R(),
        a = e.slug,
        n = a.length > 1 ? a[0] : null,
        { data: h } = _(`${c}-parent`, async () =>
          n ? g(`pages/${n}/`).only(["title", "_dir", "_path"]).findOne() : null
        ),
        { data: s } = _(`${c}-article`, async () =>
          g(n ? `pages/${n}/${a[1]}` : `pages/${a[0]}/`).findOne()
        ),
        { data: i } = _(`${c}-more`, async () =>
          g(`pages/${a[0]}`).only(["title", "_dir", "_path"]).limit(20).find()
        );
      return (
        E(s.value),
        C(() => {
          if (!(s != null && s.value)) throw I({ statusCode: 404, fatal: !0 });
        }),
        { parent: h, article: s, moreArticles: i }
      );
    },
    methods: { stripPageRoot: d },
  }),
  L = (e) => (w("data-v-3ee42a17"), (e = e()), B(), e),
  M = L(() => t("div", { class: "byline" }, null, -1)),
  T = { class: "preamble" },
  F = { class: "sidebar-section more" },
  H = { class: "block" },
  J = { key: 1 },
  K = { key: 2, class: "block__content" },
  j = { key: 0, class: "text-center text-sm" };
function z(e, c, a, n, h, s) {
  var y;
  const i = O,
    P = q;
  return e.article
    ? (o(),
      $(
        P,
        {
          key: 0,
          class: "page-front",
          document: e.article,
          coverCloudinaryId: e.article.image,
        },
        N(
          {
            content: l(() => [
              t("h1", null, r(e.article.title), 1),
              M,
              t("p", T, r(e.article.preamble), 1),
            ]),
            _: 2,
          },
          [
            ((y = e.moreArticles) == null ? void 0 : y.length) > 1
              ? {
                  name: "sidebar",
                  fn: l(() => [
                    t("section", F, [
                      t("div", H, [
                        e.parent
                          ? (o(),
                            $(
                              i,
                              {
                                key: 0,
                                to: `/${("stripPageRoot" in e
                                  ? e.stripPageRoot
                                  : f(d))(e.parent._path)}`,
                              },
                              {
                                default: l(() => [
                                  t("h2", null, r(e.parent.title), 1),
                                ]),
                                _: 1,
                              },
                              8,
                              ["to"]
                            ))
                          : (o(), p("h2", J, r(e.article.title), 1)),
                        e.moreArticles
                          ? (o(),
                            p("div", K, [
                              t("ul", null, [
                                (o(!0),
                                p(
                                  S,
                                  null,
                                  A(
                                    e.moreArticles,
                                    (u) => (
                                      o(),
                                      p("li", { key: u.title }, [
                                        k(
                                          i,
                                          {
                                            to: `/${("stripPageRoot" in e
                                              ? e.stripPageRoot
                                              : f(d))(u._path)}`,
                                          },
                                          {
                                            default: l(() => [
                                              v(r(u.title), 1),
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
                            ]))
                          : m("", !0),
                      ]),
                    ]),
                    e.parent
                      ? (o(),
                        p("div", j, [
                          k(
                            i,
                            {
                              to: `/${("stripPageRoot" in e
                                ? e.stripPageRoot
                                : f(d))(e.parent._path)}`,
                            },
                            {
                              default: l(() => [
                                v("Tillbaka till "),
                                t("strong", null, r(e.parent.title) + " ", 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ["to"]
                          ),
                        ]))
                      : m("", !0),
                  ]),
                  key: "0",
                }
              : void 0,
          ]
        ),
        1032,
        ["document", "coverCloudinaryId"]
      ))
    : m("", !0);
}
const pe = V(D, [
  ["render", z],
  ["__scopeId", "data-v-3ee42a17"],
]);
export { pe as default };
