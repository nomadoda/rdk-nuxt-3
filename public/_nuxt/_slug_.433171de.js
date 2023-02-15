import {
  A as I,
  a as A,
  m as _,
  e as E,
  q as i,
  o as m,
  c as N,
  a0 as j,
  Z as l,
  R as C,
  ab as a,
  O as r,
  X as c,
  u as R,
  I as D,
  W as V,
  P as g,
  V as S,
  N as B,
  ac as O,
  ad as w,
  a7 as P,
} from "./entry.e50f0f50.js";
import { c as q, s as H, a as v } from "./urlTools.7e20410a.js";
import L from "./PageArticle.9a99e4cf.js";
import "./PageArticle.vue_vue_type_style_index_0_scoped_d3e8b27d_lang.2510b67f.js";
import "./AppImage.9bc8cdcc.js";
import "./nuxt-img.6cd8cff3.js";
const T = I({
    setup() {
      var p, o, s, n, f, y, k, $, x;
      const { params: t, fullPath: d } = A(),
        { data: u } = _(`${d}-parent`, async () =>
          i(`vego/tips/${t.slug}/index`)
            .only(["title", "_dir", "_path"])
            .findOne()
        ),
        { data: e } = _(
          d,
          () =>
            u
              ? i(`vego/tips/${t.slug}/index`).findOne()
              : i(`vego/tips/${t.slug}`).findOne(),
          "$H5k4gttJeN"
        ),
        { data: b } = _(
          async () =>
            u
              ? i(`vego/tips/${t.slug}`)
                  .limit(20)
                  .only(["title", "_path"])
                  .find()
              : i("vego/tips").limit(20).only(["title", "_path"]).find(),
          "$L36QAmc1h7"
        );
      return (
        E({
          title:
            (p = e.value) != null && p.title
              ? `${e.value.title} | R\xE4dda Djuren-klubben`
              : "R\xE4dda Djuren-klubben",
          link: [
            {
              hid: "canonical",
              rel: "canonical",
              href: q(`/${(o = e.value) == null ? void 0 : o._path}`),
            },
          ],
          meta: [
            {
              hid: "og:url",
              name: "og:url",
              property: "og:url",
              content:
                (s = e.value) != null && s.title
                  ? `${e.value.title} | R\xE4dda Djuren-klubben`
                  : "R\xE4dda Djuren-klubben",
            },
            {
              hid: "og:title",
              name: "og:title",
              property: "og:title",
              content:
                (n = e.value) != null && n.title
                  ? `${e.value.title} | R\xE4dda Djuren-klubben`
                  : "R\xE4dda Djuren-klubben",
            },
            {
              hid: "description",
              name: "description",
              content:
                (f = e.value) != null && f.metadescription
                  ? e.value.metadescription
                  : (y = e.value) != null && y.preamble
                  ? e.value.preamble
                  : "",
            },
            {
              hid: "og:description",
              name: "og:description",
              property: "og:description",
              content:
                (k = e.value) != null && k.metadescription
                  ? e.value.metadescription
                  : ($ = e.value) != null && $.preamble
                  ? e.value.preamble
                  : "",
            },
            (x = e.value) != null && x.image
              ? {
                  hid: "og:image",
                  name: "og:image",
                  property: "og:image",
                  content: `https://res.cloudinary.com/klandestino-ab/image/upload/c_lfill,dpr_auto,g_faces/c_scale,dpr_2.0,w_1200${e.value.image}`,
                }
              : {},
          ],
        }),
        { article: e, moreArticles: b }
      );
    },
    methods: { stripPageRoot: H, stripIndex: v },
  }),
  h = (t) => (O("data-v-477672ee"), (t = t()), w(), t),
  F = h(() => a("div", { class: "byline" }, null, -1)),
  J = { class: "preamble" },
  Q = { class: "sidebar-section more" },
  U = { class: "block" },
  W = { class: "block__content" },
  X = { class: "text-center text-sm" },
  Z = h(() => a("strong", null, "Vego", -1)),
  z = h(() => a("strong", null, "Alla artiklar", -1));
function G(t, d, u, e, b, p) {
  const o = B,
    s = L;
  return t.article
    ? (m(),
      N(
        s,
        {
          key: 0,
          class: "page-front",
          document: t.article,
          coverCloudinaryId: t.article.image,
        },
        j(
          {
            content: l(() => [
              a("h1", null, c(t.article.title), 1),
              F,
              a("p", J, c(t.article.preamble), 1),
            ]),
            _: 2,
          },
          [
            t.moreArticles.length > 0
              ? {
                  name: "sidebar",
                  fn: l(() => [
                    a("section", Q, [
                      a("div", U, [
                        r(
                          o,
                          { to: R(v)(t.article._path) },
                          {
                            default: l(() => [
                              a("h2", null, c(t.article.title), 1),
                            ]),
                            _: 1,
                          },
                          8,
                          ["to"]
                        ),
                        a("div", W, [
                          a("ul", null, [
                            (m(!0),
                            D(
                              S,
                              null,
                              V(
                                t.moreArticles,
                                (n) => (
                                  m(),
                                  D("li", { key: n.title }, [
                                    r(
                                      o,
                                      { to: R(v)(n._path) },
                                      {
                                        default: l(() => [g(c(n.title), 1)]),
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
                      r(
                        o,
                        { to: "/vego" },
                        { default: l(() => [g("Tillbaka till\xA0"), Z]), _: 1 }
                      ),
                      r(
                        o,
                        { to: "/vego/tips" },
                        { default: l(() => [g("\xA0 eller \xA0"), z]), _: 1 }
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
const oe = P(T, [
  ["render", G],
  ["__scopeId", "data-v-477672ee"],
]);
export { oe as default };
