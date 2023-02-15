import {
  A as k,
  a as j,
  m as b,
  e as $,
  q as g,
  o as c,
  c as x,
  a0 as N,
  Z as s,
  R as D,
  ab as a,
  I as v,
  W as I,
  O as y,
  P as f,
  X as d,
  V as R,
  N as w,
  ac as C,
  ad as A,
  a7 as B,
} from "./entry.e50f0f50.js";
import { c as E } from "./urlTools.7e20410a.js";
import S from "./PageArticle.9a99e4cf.js";
import "./PageArticle.vue_vue_type_style_index_0_scoped_d3e8b27d_lang.2510b67f.js";
import "./AppImage.9bc8cdcc.js";
import "./nuxt-img.6cd8cff3.js";
const V = k({
    setup() {
      var r, i, n, l, o, m, h;
      const { params: e, fullPath: p } = j(),
        { data: t } = b(
          p,
          async () => g(`hjalp-djuren/${e.slug}`).findOne(),
          "$NYFOBL66OR"
        ),
        { data: _ } = b(
          async () => g("hjalp-djuren").only(["title", "_path"]).find(),
          "$Yx8XlMD9nN"
        );
      return (
        $({
          title:
            (r = t.value) != null && r.title
              ? `${t.value.title} | R\xE4dda Djuren-klubben`
              : "R\xE4dda Djuren-klubben",
          link: [
            {
              hid: "canonical",
              rel: "canonical",
              href: E(`${(i = t.value) == null ? void 0 : i._path}`),
            },
          ],
          meta: [
            {
              hid: "og:title",
              property: "og:title",
              content:
                (n = t.value) != null && n.title
                  ? `${t.value.title} | R\xE4dda Djuren-klubben`
                  : "R\xE4dda Djuren-klubben",
            },
            {
              hid: "description",
              property: "description",
              content: (l = t.value) == null ? void 0 : l.preamble,
            },
            {
              hid: "og:description",
              property: "og:description",
              content:
                (o = t.value) != null && o.preamble ? t.value.preamble : "",
            },
            (m = t.value) != null && m.image
              ? {
                  hid: "og:image",
                  property: "og:image",
                  content: `https://res.cloudinary.com/klandestino-ab/image/upload/c_lfill,dpr_auto,g_faces/c_scale,dpr_2.0,w_1200${t.value.image}`,
                }
              : {},
            {
              hid: "og:url",
              property: "og:url",
              content: `https://www.raddadjuren.se/${
                (h = t.value) == null ? void 0 : h._path
              }`,
            },
          ],
        }),
        { article: t, moreArticles: _ }
      );
    },
  }),
  u = (e) => (C("data-v-72ddb014"), (e = e()), A(), e),
  O = u(() => a("div", { class: "byline" }, null, -1)),
  F = { class: "preamble" },
  q = { class: "sidebar-section more" },
  L = { class: "block" },
  P = u(() => a("h2", null, "Fler sidor", -1)),
  T = { class: "block__content" },
  X = { class: "text-center text-sm" },
  Y = u(() => a("strong", null, "s\xE5 kan du hj\xE4lpa djuren", -1));
function H(e, p, t, _, r, i) {
  const n = w,
    l = S;
  return e.article
    ? (c(),
      x(
        l,
        {
          key: 0,
          class: "page-front",
          document: e.article,
          coverCloudinaryId: e.article.image,
        },
        N(
          {
            content: s(() => [
              a("h1", null, d(e.article.title), 1),
              O,
              a("p", F, d(e.article.preamble), 1),
            ]),
            _: 2,
          },
          [
            e.moreArticles.length > 0
              ? {
                  name: "sidebar",
                  fn: s(() => [
                    a("section", q, [
                      a("div", L, [
                        P,
                        a("div", T, [
                          a("ul", null, [
                            (c(!0),
                            v(
                              R,
                              null,
                              I(
                                e.moreArticles,
                                (o) => (
                                  c(),
                                  v("li", { key: o.title }, [
                                    y(
                                      n,
                                      { to: o._path },
                                      {
                                        default: s(() => [f(d(o.title), 1)]),
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
                      y(
                        n,
                        { to: "/hjalp-djuren" },
                        { default: s(() => [f("Tillbaka till\xA0"), Y]), _: 1 }
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
    : D("", !0);
}
const J = B(V, [
  ["render", H],
  ["__scopeId", "data-v-72ddb014"],
]);
export { J as default };
