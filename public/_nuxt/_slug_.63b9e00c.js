import {
  A as z,
  a as R,
  m as f,
  e as I,
  q as v,
  o,
  c as k,
  a0 as j,
  Z as l,
  R as u,
  ab as a,
  I as d,
  W as D,
  O as m,
  P as w,
  X as A,
  V as N,
  af as S,
  N as U,
  ac as V,
  ad as x,
  a7 as E,
} from "./entry.e50f0f50.js";
import { c as L } from "./urlTools.7e20410a.js";
import B from "./AppImage.9bc8cdcc.js";
import C from "./PageArticle.9a99e4cf.js";
import "./nuxt-img.6cd8cff3.js";
import "./PageArticle.vue_vue_type_style_index_0_scoped_d3e8b27d_lang.2510b67f.js";
const F = z({
    name: "KlubbnyttArticlePage",
    setup() {
      var p, _, r, i, s, c, n, g, y;
      const { params: e, fullPath: h } = R(),
        { data: t } = f(
          h,
          async () => v(`klubbnytt/${e.slug}`).findOne(),
          "$bySuRAjVMj"
        ),
        { data: b } = f(
          async () => v("klubbnytt").only(["title", "_path"]).find(),
          "$OOe1g4ZuTU"
        );
      return (
        I({
          title:
            (p = t.value) != null && p.title
              ? `${t.value.title} | R\xE4dda Djuren-klubben`
              : "R\xE4dda Djuren-klubben",
          link: [
            {
              hid: "canonical",
              rel: "canonical",
              href: L(
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
                (r = t.value) != null && r.slug ? t.value.slug : ""
              }`,
            },
            {
              hid: "og:title",
              property: "og:title",
              content:
                (i = t.value) != null && i.title
                  ? `${t.value.title} | R\xE4dda Djuren-klubben`
                  : "R\xE4dda Djuren-klubben",
            },
            {
              hid: "description",
              property: "description",
              content:
                (s = t.value) != null && s.metadescription
                  ? t.value.metadescription
                  : (c = t.value) != null && c.preamble
                  ? t.value.preamble
                  : "",
            },
            {
              hid: "og:description",
              property: "og:description",
              content:
                (n = t.value) != null && n.metadescription
                  ? t.value.metadescription
                  : (g = t.value) != null && g.preamble
                  ? t.value.preamble
                  : "",
            },
            (y = t.value) != null && y.image
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
  $ = (e) => (V("data-v-284b9a79"), (e = e()), x(), e),
  O = { class: "magazine-card" },
  P = { class: "magazine" },
  T = { key: 1 },
  q = ["href"],
  K = { key: 2 },
  Z = ["href"],
  H = { class: "sidebar-section more" },
  M = { class: "block" },
  W = $(() => a("h2", null, "Fler sidor", -1)),
  X = { class: "block__content" },
  G = { class: "text-center text-sm" },
  J = $(() => a("strong", null, "Klubbnytt", -1));
function Q(e, h, t, b, p, _) {
  const r = B,
    i = S,
    s = U,
    c = C;
  return e.article
    ? (o(),
      k(
        c,
        { key: 0, class: "page-front", document: e.article },
        j(
          {
            content: l(() => [
              a("div", O, [
                e.article.image
                  ? (o(),
                    k(
                      i,
                      { key: 0 },
                      {
                        default: l(() => [
                          a("div", P, [
                            m(
                              r,
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
                a("h2", null, A(e.article.title), 1),
                e.article.crosswordAnswer
                  ? (o(),
                    d("div", T, [
                      a("h3", null, [
                        a(
                          "a",
                          { href: e.crosswordAnswerURL },
                          "Facit till korsordet",
                          8,
                          q
                        ),
                      ]),
                    ]))
                  : u("", !0),
                e.article.puzzleAnswer
                  ? (o(),
                    d("div", K, [
                      a("h3", null, [
                        a(
                          "a",
                          { href: e.puzzleAnswerURL },
                          "Facit till knep och kn\xE5p",
                          8,
                          Z
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
                  fn: l(() => [
                    a("section", H, [
                      a("div", M, [
                        W,
                        a("div", X, [
                          a("ul", null, [
                            (o(!0),
                            d(
                              N,
                              null,
                              D(
                                e.moreArticles,
                                (n) => (
                                  o(),
                                  d("li", { key: n.title }, [
                                    m(
                                      s,
                                      { to: n._path },
                                      {
                                        default: l(() => [w(A(n.title), 1)]),
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
                    a("div", G, [
                      m(
                        s,
                        { to: "/klubbnytt" },
                        { default: l(() => [w("Tillbaka till\xA0"), J]), _: 1 }
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
const se = E(F, [
  ["render", Q],
  ["__scopeId", "data-v-284b9a79"],
]);
export { se as default };
