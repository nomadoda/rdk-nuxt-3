import {
  d as z,
  i as R,
  x as y,
  j,
  o as r,
  c as v,
  a0 as I,
  w as s,
  L as u,
  a as o,
  b as d,
  O as D,
  f as m,
  e as k,
  M as w,
  N as L,
  J as N,
  K as S,
  g as U,
} from "./entry.bc63e51a.js";
import { q as A } from "./query.02b33be6.js";
import { c as V } from "./urlTools.cc793b8f.js";
import { _ as B } from "./AppImage.1a4d91cf.js";
import { _ as C } from "./client-only.9e138b79.js";
import { _ as F } from "./nuxt-link.b84c39ea.js";
import { _ as O } from "./PageArticle.aa3be229.js";
import "./utils.0216015b.js";
import "./AppImage.vue.fa386efd.js";
import "./PageArticle.vue.e748534d.js";
import "./SearchInput.ae3910f0.js";
import "./SearchInput.vue.750aef33.js";
import "./ContentRenderer.32ebd34d.js";
import "./ContentRendererMarkdown.291b27e1.js";
import "./index.a6ef77ff.js";
import "./index.23a876b0.js";
const K = z({
    name: "KlubbnyttArticlePage",
    setup() {
      var p, _, l, i, n, c, a, g, f;
      const { params: e, fullPath: h } = R(),
        { data: t } = y(
          h,
          async () => A(`klubbnytt/${e.slug}`).findOne(),
          "$bySuRAjVMj"
        ),
        { data: b } = y(
          async () => A("klubbnytt").only(["title", "_path"]).find(),
          "$OOe1g4ZuTU"
        );
      return (
        j({
          title:
            (p = t.value) != null && p.title
              ? `${t.value.title} | Rädda Djuren-klubben`
              : "Rädda Djuren-klubben",
          link: [
            {
              hid: "canonical",
              rel: "canonical",
              href: V(
                `/klubbnytt/${
                  (_ = t.value) != null && _.slug ? t.value.slug : ""
                }`
              ),
            },
          ],
          meta: [
            {
              hid: "og:url",
              property: "og:url",
              content: `https://www.raddadjuren.se/klubbnytt/${
                (l = t.value) != null && l.slug ? t.value.slug : ""
              }`,
            },
            {
              hid: "og:title",
              property: "og:title",
              content:
                (i = t.value) != null && i.title
                  ? `${t.value.title} | Rädda Djuren-klubben`
                  : "Rädda Djuren-klubben",
            },
            {
              hid: "description",
              property: "description",
              content:
                (n = t.value) != null && n.metadescription
                  ? t.value.metadescription
                  : (c = t.value) != null && c.preamble
                  ? t.value.preamble
                  : "",
            },
            {
              hid: "og:description",
              property: "og:description",
              content:
                (a = t.value) != null && a.metadescription
                  ? t.value.metadescription
                  : (g = t.value) != null && g.preamble
                  ? t.value.preamble
                  : "",
            },
            (f = t.value) != null && f.image
              ? {
                  hid: "og:image",
                  property: "og:image",
                  content: `https://res.cloudinary.com/klandestino-ab/image/upload/c_lfill,dpr_auto,g_faces/c_scale,dpr_2.0,w_1200${t.value.image}`,
                }
              : {},
          ],
        }),
        { article: t, moreArticles: b }
      );
    },
    computed: {
      crosswordAnswerURL() {
        var e;
        return (e = this.article) != null && e.crosswordAnswer
          ? `https://res.cloudinary.com/klandestino-ab/image/upload${this.article.crosswordAnswer}`
          : !1;
      },
      puzzleAnswerURL() {
        var e;
        return (e = this.article) != null && e.puzzleAnswer
          ? `https://res.cloudinary.com/klandestino-ab/image/upload${this.article.puzzleAnswer}`
          : !1;
      },
      pubId() {
        var e;
        return (e = this.article) == null
          ? void 0
          : e.image.replace(/^\/+/, "");
      },
    },
  }),
  $ = (e) => (N("data-v-284b9a79"), (e = e()), S(), e),
  T = { class: "magazine-card" },
  q = { class: "magazine" },
  x = { key: 1 },
  M = ["href"],
  P = { key: 2 },
  E = ["href"],
  H = { class: "sidebar-section more" },
  J = { class: "block" },
  Z = $(() => o("h2", null, "Fler sidor", -1)),
  G = { class: "block__content" },
  Q = { class: "text-center text-sm" },
  W = $(() => o("strong", null, "Klubbnytt", -1));
function X(e, h, t, b, p, _) {
  const l = B,
    i = C,
    n = F,
    c = O;
  return e.article
    ? (r(),
      v(
        c,
        { key: 0, class: "page-front", document: e.article },
        I(
          {
            content: s(() => [
              o("div", T, [
                e.article.image
                  ? (r(),
                    v(
                      i,
                      { key: 0 },
                      {
                        default: s(() => [
                          o("div", q, [
                            m(
                              l,
                              { publicId: e.pubId, responsive: "width" },
                              null,
                              8,
                              ["publicId"]
                            ),
                          ]),
                        ]),
                        _: 1,
                      }
                    ))
                  : u("", !0),
                o("h2", null, w(e.article.title), 1),
                e.article.crosswordAnswer
                  ? (r(),
                    d("div", x, [
                      o("h3", null, [
                        o(
                          "a",
                          { href: e.crosswordAnswerURL },
                          "Facit till korsordet",
                          8,
                          M
                        ),
                      ]),
                    ]))
                  : u("", !0),
                e.article.puzzleAnswer
                  ? (r(),
                    d("div", P, [
                      o("h3", null, [
                        o(
                          "a",
                          { href: e.puzzleAnswerURL },
                          "Facit till knep och knåp",
                          8,
                          E
                        ),
                      ]),
                    ]))
                  : u("", !0),
              ]),
            ]),
            _: 2,
          },
          [
            e.moreArticles &&
            Array.isArray(e.moreArticles) &&
            e.moreArticles.length > 0
              ? {
                  name: "sidebar",
                  fn: s(() => [
                    o("section", H, [
                      o("div", J, [
                        Z,
                        o("div", G, [
                          o("ul", null, [
                            (r(!0),
                            d(
                              L,
                              null,
                              D(
                                e.moreArticles,
                                (a) => (
                                  r(),
                                  d("li", { key: a.title }, [
                                    m(
                                      n,
                                      { to: a._path },
                                      {
                                        default: s(() => [k(w(a.title), 1)]),
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
                    o("div", Q, [
                      m(
                        n,
                        { to: "/klubbnytt" },
                        { default: s(() => [k("Tillbaka till "), W]), _: 1 }
                      ),
                    ]),
                  ]),
                  key: "0",
                }
              : void 0,
          ]
        ),
        1032,
        ["document"]
      ))
    : u("", !0);
}
const he = U(K, [
  ["render", X],
  ["__scopeId", "data-v-284b9a79"],
]);
export { he as default };
