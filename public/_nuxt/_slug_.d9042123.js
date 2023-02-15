import {
  A as $,
  a as A,
  m as b,
  e as I,
  q as y,
  o as c,
  c as R,
  a0 as w,
  Z as s,
  R as C,
  ab as a,
  I as f,
  W as D,
  O as k,
  P as x,
  X as d,
  V as E,
  N,
  ac as S,
  ad as V,
  a7 as j,
} from "./entry.e50f0f50.js";
import { c as B } from "./urlTools.7e20410a.js";
import F from "./PageArticle.9a99e4cf.js";
import "./PageArticle.vue_vue_type_style_index_0_scoped_d3e8b27d_lang.2510b67f.js";
import "./AppImage.9bc8cdcc.js";
import "./nuxt-img.6cd8cff3.js";
const q = $({
    setup() {
      var r, i, l, n, o, m, g, v, h;
      const { params: t, fullPath: p } = A(),
        { data: e } = b(
          p,
          async () => y(`vuxen-eller-pedagog/${t.slug}`).findOne(),
          "$XLSbdmG2Ry"
        ),
        { data: _ } = b(
          async () => y("vuxen-eller-pedagog").only(["title", "_path"]).find(),
          "$cp973EggmF"
        );
      return (
        I({
          title:
            (r = e.value) != null && r.title
              ? `${e.value.title} | R\xE4dda Djuren-klubben`
              : "R\xE4dda Djuren-klubben",
          link: [
            {
              hid: "canonical",
              rel: "canonical",
              href: B(
                `/vuxen-eller-pedagog/${
                  (i = e.value) == null ? void 0 : i.slug
                }`
              ),
            },
          ],
          meta: [
            {
              hid: "og:url",
              property: "og:url",
              content: `https://www.raddadjuren.se/vuxen-eller-pedagog/${
                (l = e.value) == null ? void 0 : l.slug
              }`,
            },
            {
              hid: "og:title",
              property: "og:title",
              content:
                (n = e.value) != null && n.title
                  ? `${e.value.title} | R\xE4dda Djuren-klubben`
                  : "R\xE4dda Djuren-klubben",
            },
            {
              hid: "description",
              property: "description",
              content:
                (o = e.value) != null && o.metadescription
                  ? e.value.metadescription
                  : (m = e.value) != null && m.preamble
                  ? e.value.preamble
                  : "",
            },
            {
              hid: "og:description",
              property: "og:description",
              content:
                (g = e.value) != null && g.metadescription
                  ? e.value.metadescription
                  : (v = e.value) != null && v.preamble
                  ? e.value.preamble
                  : "",
            },
            (h = e.value) != null && h.image
              ? {
                  hid: "og:image",
                  property: "og:image",
                  content: `https://res.cloudinary.com/klandestino-ab/image/upload/c_lfill,dpr_auto,g_faces/c_scale,dpr_2.0,w_1200${e.value.image}`,
                }
              : {},
          ],
        }),
        { article: e, moreArticles: _ }
      );
    },
  }),
  u = (t) => (S("data-v-15de2b43"), (t = t()), V(), t),
  L = u(() => a("div", { class: "byline" }, null, -1)),
  O = { class: "preamble" },
  P = { class: "sidebar-section more" },
  T = { class: "block" },
  X = u(() => a("h2", null, "Fler sidor", -1)),
  G = { class: "block__content" },
  H = { class: "text-center text-sm" },
  U = u(() => a("strong", null, "Vuxen eller pegagog", -1));
function W(t, p, e, _, r, i) {
  const l = N,
    n = F;
  return t.article
    ? (c(),
      R(
        n,
        {
          key: 0,
          class: "page-front",
          document: t.article,
          coverCloudinaryId: t.article.image,
        },
        w(
          {
            content: s(() => [
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
                  fn: s(() => [
                    a("section", P, [
                      a("div", T, [
                        X,
                        a("div", G, [
                          a("ul", null, [
                            (c(!0),
                            f(
                              E,
                              null,
                              D(
                                t.moreArticles,
                                (o) => (
                                  c(),
                                  f("li", { key: o.title }, [
                                    k(
                                      l,
                                      { to: o._path },
                                      {
                                        default: s(() => [x(d(o.title), 1)]),
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
                    a("div", H, [
                      k(
                        l,
                        { to: "/vuxen-eller-pedagog" },
                        { default: s(() => [x("Tillbaka till\xA0"), U]), _: 1 }
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
    : C("", !0);
}
const Y = j(q, [
  ["render", W],
  ["__scopeId", "data-v-15de2b43"],
]);
export { Y as default };
