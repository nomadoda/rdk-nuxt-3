import {
  A,
  a as I,
  m as b,
  e as x,
  q as f,
  o as c,
  c as N,
  a0 as j,
  Z as n,
  R as w,
  ab as a,
  I as y,
  W as C,
  O as k,
  P as $,
  X as d,
  V as D,
  N as E,
  ac as R,
  ad as S,
  a7 as V,
} from "./entry.e50f0f50.js";
import { c as B } from "./urlTools.7e20410a.js";
import q from "./PageArticle.9a99e4cf.js";
import "./PageArticle.vue_vue_type_style_index_0_scoped_d3e8b27d_lang.2510b67f.js";
import "./AppImage.9bc8cdcc.js";
import "./nuxt-img.6cd8cff3.js";
const F = A({
    setup() {
      var s, i, r, l, o, _, g, h, v;
      const { params: t, fullPath: p } = I(),
        { data: e } = b(
          p,
          async () => f(`lar-dig-mer/${t.slug}`).findOne(),
          "$NEnG5UWk8I"
        ),
        { data: m } = b(async () => f("lar-dig-mer").find(), "$XcugjcSJaQ");
      return (
        x({
          title:
            (s = e.value) != null && s.title
              ? `${e.value.title} | R\xE4dda Djuren-klubben`
              : "R\xE4dda Djuren-klubben",
          link: [
            {
              hid: "canonical",
              rel: "canonical",
              href: B(
                `/lar-dig-mer/${(i = e.value) == null ? void 0 : i.slug}`
              ),
            },
          ],
          meta: [
            {
              hid: "og:url",
              property: "og:url",
              content: `https://www.raddadjuren.se/lar-dig-mer/${
                (r = e.value) == null ? void 0 : r.slug
              }`,
            },
            {
              hid: "og:title",
              property: "og:title",
              content:
                (l = e.value) != null && l.title
                  ? `${e.value.title} | R\xE4dda Djuren-klubben`
                  : "R\xE4dda Djuren-klubben",
            },
            {
              hid: "description",
              property: "description",
              content:
                (o = e.value) != null && o.metadescription
                  ? e.value.metadescription
                  : (_ = e.value) != null && _.preamble
                  ? e.value.preamble
                  : "",
            },
            {
              hid: "og:description",
              property: "og:description",
              content:
                (g = e.value) != null && g.metadescription
                  ? e.value.metadescription
                  : (h = e.value) != null && h.preamble
                  ? e.value.preamble
                  : "",
            },
            {
              hid: "og:image",
              property: "og:image",
              content:
                (v = e.value) != null && v.image
                  ? `https://res.cloudinary.com/klandestino-ab/image/upload/c_lfill,dpr_auto,g_faces/c_scale,dpr_2.0,w_1200${e.value.image}`
                  : "",
            },
          ],
        }),
        { article: e, moreArticles: m }
      );
    },
  }),
  u = (t) => (R("data-v-f1ad3d4c"), (t = t()), S(), t),
  L = u(() => a("div", { class: "byline" }, null, -1)),
  O = { class: "preamble" },
  P = { class: "sidebar-section more" },
  T = { class: "block" },
  U = u(() => a("h2", null, "Fler sidor", -1)),
  W = { class: "block__content" },
  X = { class: "text-center text-sm" },
  G = u(() => a("strong", null, "L\xE4r dig mer", -1));
function H(t, p, e, m, s, i) {
  const r = E,
    l = q;
  return t.article
    ? (c(),
      N(
        l,
        {
          key: 0,
          class: "page-front",
          document: t.article,
          coverCloudinaryId: t.article.image,
        },
        j(
          {
            content: n(() => [
              a("h1", null, d(t.article.title), 1),
              L,
              a("p", O, d(t.article.preamble), 1),
            ]),
            _: 2,
          },
          [
            t.moreArticles &&
            Array.isArray(t.moreArticles) &&
            t.moreArticles.length > 0
              ? {
                  name: "sidebar",
                  fn: n(() => [
                    a("section", P, [
                      a("div", T, [
                        U,
                        a("div", W, [
                          a("ul", null, [
                            (c(!0),
                            y(
                              D,
                              null,
                              C(
                                t.moreArticles,
                                (o) => (
                                  c(),
                                  y("li", { key: o.title }, [
                                    k(
                                      r,
                                      { to: o._path },
                                      {
                                        default: n(() => [$(d(o.title), 1)]),
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
                    a("div", X, [
                      k(
                        r,
                        { to: "/lar-dig-mer" },
                        { default: n(() => [$("Tillbaka till\xA0"), G]), _: 1 }
                      ),
                    ]),
                  ]),
                  key: "0",
                }
              : void 0,
          ]
        ),
        1032,
        ["document", "coverCloudinaryId"]
      ))
    : w("", !0);
}
const Y = V(F, [
  ["render", H],
  ["__scopeId", "data-v-f1ad3d4c"],
]);
export { Y as default };
