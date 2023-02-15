import {
  A,
  a as I,
  m as f,
  e as w,
  q as y,
  o as c,
  c as N,
  a0 as j,
  Z as l,
  R as C,
  ab as a,
  I as b,
  W as D,
  O as k,
  P as $,
  X as d,
  u as R,
  V,
  N as E,
  ac as S,
  ad as B,
  a7 as q,
} from "./entry.e50f0f50.js";
import { c as F, a as x } from "./urlTools.7e20410a.js";
import K from "./PageArticle.9a99e4cf.js";
import "./PageArticle.vue_vue_type_style_index_0_scoped_d3e8b27d_lang.2510b67f.js";
import "./AppImage.9bc8cdcc.js";
import "./nuxt-img.6cd8cff3.js";
const O = A({
    setup() {
      var r, i, s, n, o, m, g, v, h;
      const { params: t, fullPath: p } = I(),
        { data: e } = f(
          p,
          async () => y(`vego/tips/${t.slug}`).findOne(),
          "$89Q6x4sQow"
        ),
        { data: _ } = f(
          async () => y("vego").only(["title", "_path"]).find(),
          "$i2yjNarKKf"
        );
      return (
        w({
          title:
            (r = e.value) != null && r.title
              ? `${e.value.title} | R\xE4dda Djuren-klubben`
              : "R\xE4dda Djuren-klubben",
          link: [
            {
              hid: "canonical",
              rel: "canonical",
              href: F(`/vego/${(i = e.value) == null ? void 0 : i.slug}`),
            },
          ],
          meta: [
            {
              hid: "og:url",
              property: "og:url",
              content: `https://www.raddadjuren.se/vego/${
                (s = e.value) == null ? void 0 : s.slug
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
    methods: { stripIndex: x },
  }),
  u = (t) => (S("data-v-1ff57786"), (t = t()), B(), t),
  P = u(() => a("div", { class: "byline" }, null, -1)),
  Q = { class: "preamble" },
  T = { class: "sidebar-section more" },
  H = { class: "block" },
  L = u(() => a("h2", null, "Fler vegotips", -1)),
  U = { class: "block__content" },
  W = { class: "text-center text-sm" },
  X = u(() => a("strong", null, "Vego", -1));
function Z(t, p, e, _, r, i) {
  const s = E,
    n = K;
  return t.article
    ? (c(),
      N(
        n,
        {
          key: 0,
          class: "page-front",
          document: t.article,
          coverCloudinaryId: t.article.image,
        },
        j(
          {
            content: l(() => [
              a("h1", null, d(t.article.title), 1),
              P,
              a("p", Q, d(t.article.preamble), 1),
            ]),
            _: 2,
          },
          [
            t.moreArticles &&
            Array.isArray(t.moreArticles) &&
            t.moreArticles.length > 0
              ? {
                  name: "sidebar",
                  fn: l(() => [
                    a("section", T, [
                      a("div", H, [
                        L,
                        a("div", U, [
                          a("ul", null, [
                            (c(!0),
                            b(
                              V,
                              null,
                              D(
                                t.moreArticles,
                                (o) => (
                                  c(),
                                  b("li", { key: o.title }, [
                                    k(
                                      s,
                                      { to: R(x)(o._path) },
                                      {
                                        default: l(() => [$(d(o.title), 1)]),
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
                    a("div", W, [
                      k(
                        s,
                        { to: "/vego" },
                        { default: l(() => [$("Tillbaka till\xA0"), X]), _: 1 }
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
const te = q(O, [
  ["render", Z],
  ["__scopeId", "data-v-1ff57786"],
]);
export { te as default };
