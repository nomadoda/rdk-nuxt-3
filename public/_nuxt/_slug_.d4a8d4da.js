import {
  A as j,
  a as w,
  m as _,
  e as D,
  q as m,
  o as r,
  c as N,
  a0 as R,
  Z as l,
  R as i,
  I as c,
  ab as a,
  u as V,
  X as p,
  V as E,
  W as S,
  O as h,
  P as g,
  N as B,
  ac as O,
  ad as T,
  a7 as q,
} from "./entry.e50f0f50.js";
import { c as x, a as v } from "./urlTools.7e20410a.js";
import L from "./PageArticle.9a99e4cf.js";
import "./PageArticle.vue_vue_type_style_index_0_scoped_d3e8b27d_lang.2510b67f.js";
import "./AppImage.9bc8cdcc.js";
import "./nuxt-img.6cd8cff3.js";
const P = j({
    setup() {
      var u, n, s, o, k, $, A, I, C;
      const { params: e, fullPath: d } = w(),
        { data: t } = _(
          d,
          async () => m(`vego/tips/${e.parent}/${e.slug}`).findOne(),
          "$gxlhNiGCoe"
        ),
        { data: b } = _(`${d}-parent`, async () =>
          m(`vego/tips/${e.parent}/index`)
            .only(["title", "_dir", "_path"])
            .findOne()
        ),
        { data: f } = _(
          async () =>
            m(`vego/tips/${e.parent}`)
              .limit(20)
              .only(["title", "_dir", "_path"])
              .find(),
          "$W6i9TV8Lpj"
        );
      return (
        D({
          title:
            (u = t.value) != null && u.title
              ? `${t.value.title} | R\xE4dda Djuren-klubben`
              : "R\xE4dda Djuren-klubben",
          link: [
            {
              hid: "canonical",
              rel: "canonical",
              href: x(`/${(n = t.value) == null ? void 0 : n.slug}`),
            },
          ],
          meta: [
            {
              hid: "og:url",
              property: "og:url",
              content: `https://www.raddadjuren.se/${
                (s = t.value) == null ? void 0 : s._path
              }`,
            },
            {
              hid: "og:title",
              property: "og:title",
              content:
                (o = t.value) != null && o.title
                  ? `${t.value.title} | R\xE4dda Djuren-klubben`
                  : "R\xE4dda Djuren-klubben",
            },
            {
              hid: "description",
              property: "description",
              content:
                (k = t.value) != null && k.metadescription
                  ? t.value.metadescription
                  : ($ = t.value) != null && $.preamble
                  ? t.value.preamble
                  : "",
            },
            {
              hid: "og:description",
              property: "og:description",
              content:
                (A = t.value) != null && A.metadescription
                  ? t.value.metadescription
                  : (I = t.value) != null && I.preamble
                  ? t.value.preamble
                  : "",
            },
            (C = t.value) != null && C.image
              ? {
                  hid: "og:image",
                  property: "og:image",
                  content: `https://res.cloudinary.com/klandestino-ab/image/upload/c_lfill,dpr_auto,g_faces/c_scale,dpr_2.0,w_1200${t.value.image}`,
                }
              : {},
          ],
        }),
        { article: t, parent: b, moreArticles: f }
      );
    },
    methods: { stripIndex: v },
  }),
  y = (e) => (O("data-v-6103b88a"), (e = e()), T(), e),
  W = y(() => a("div", { class: "byline" }, null, -1)),
  F = { class: "preamble" },
  G = { key: 0, class: "sidebar-section more" },
  H = { class: "block" },
  U = { class: "block__content" },
  X = { key: 1, class: "text-center text-sm" },
  Z = y(() => a("strong", null, "Vego", -1)),
  z = y(() => a("strong", null, "Alla artiklar", -1));
function J(e, d, t, b, f, u) {
  const n = B,
    s = L;
  return e.article
    ? (r(),
      N(
        s,
        {
          key: 0,
          class: "page-front",
          document: e.article,
          coverCloudinaryId: e.article.image,
        },
        R(
          {
            content: l(() => [
              a("h1", null, p(e.article.title), 1),
              W,
              a("p", F, p(e.article.preamble), 1),
            ]),
            _: 2,
          },
          [
            Array.isArray(e.moreArticles) && e.moreArticles.length > 0
              ? {
                  name: "sidebar",
                  fn: l(() => [
                    e.parent
                      ? (r(),
                        c("section", G, [
                          a("div", H, [
                            e.parent && e.parent._path
                              ? (r(),
                                N(
                                  n,
                                  { key: 0, to: V(v)(e.parent._path) },
                                  {
                                    default: l(() => [
                                      a("h2", null, p(e.parent.title), 1),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ["to"]
                                ))
                              : i("", !0),
                            a("div", U, [
                              a("ul", null, [
                                (r(!0),
                                c(
                                  E,
                                  null,
                                  S(
                                    e.moreArticles,
                                    (o) => (
                                      r(),
                                      c("li", { key: o.title }, [
                                        h(
                                          n,
                                          { to: V(v)(o._path) },
                                          {
                                            default: l(() => [
                                              g(p(o.title), 1),
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
                      : i("", !0),
                    e.parent &&
                    e.parent._path &&
                    e.parent._path !== e.article._path
                      ? (r(),
                        c("div", X, [
                          h(
                            n,
                            { to: "/vego" },
                            {
                              default: l(() => [g("Tillbaka till\xA0"), Z]),
                              _: 1,
                            }
                          ),
                          h(
                            n,
                            { to: "/vego/tips" },
                            {
                              default: l(() => [g("\xA0 eller \xA0"), z]),
                              _: 1,
                            }
                          ),
                        ]))
                      : i("", !0),
                  ]),
                  key: "0",
                }
              : void 0,
          ]
        ),
        1032,
        ["document", "coverCloudinaryId"]
      ))
    : i("", !0);
}
const ae = q(P, [
  ["render", J],
  ["__scopeId", "data-v-6103b88a"],
]);
export { ae as default };
