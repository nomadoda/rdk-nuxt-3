import {
  A as x,
  a as A,
  m as y,
  e as I,
  q as k,
  o as _,
  c as R,
  a0 as V,
  Z as r,
  R as w,
  ab as a,
  O as d,
  I as $,
  W as B,
  P as m,
  X as g,
  V as C,
  N as D,
  ac as N,
  ad as j,
  a7 as E,
} from "./entry.e50f0f50.js";
import { c as S } from "./urlTools.7e20410a.js";
import q from "./RecipeSlider.0eaed929.js";
import F from "./PageArticle.9a99e4cf.js";
import "./RecipeSlider.vue_vue_type_style_index_0_scoped_23ef5c26_lang.99e026dc.js";
import "./navigation.min.304073bc.js";
import "./RecipeSliderCard.ebe1b188.js";
import "./AppImage.9bc8cdcc.js";
import "./nuxt-img.6cd8cff3.js";
import "./PageArticle.vue_vue_type_style_index_0_scoped_d3e8b27d_lang.2510b67f.js";
const L = x({
    setup() {
      var p, u, c, o, i, n, h, f, b;
      const { params: e, fullPath: l } = A(),
        { data: t } = y(
          l,
          async () => k(`vego/recept/${e.slug}`).findOne(),
          "$FhGMVmxy5J"
        ),
        { data: v } = y(
          async () =>
            k("vego/recept").only(["title", "_path", "recipeLabels"]).find(),
          "$PxsqYRU7BJ"
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
              href: S(`/vego/${(u = t.value) == null ? void 0 : u.slug}`),
            },
          ],
          meta: [
            {
              hid: "og:url",
              property: "og:url",
              content: `https://www.raddadjuren.se/vego/${
                (c = t.value) == null ? void 0 : c.slug
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
                (i = t.value) != null && i.metadescription
                  ? t.value.metadescription
                  : (n = t.value) != null && n.preamble
                  ? t.value.preamble
                  : "",
            },
            {
              hid: "og:description",
              property: "og:description",
              content:
                (h = t.value) != null && h.metadescription
                  ? t.value.metadescription
                  : (f = t.value) != null && f.preamble
                  ? t.value.preamble
                  : "",
            },
            (b = t.value) != null && b.image
              ? {
                  hid: "og:image",
                  property: "og:image",
                  content: `https://res.cloudinary.com/klandestino-ab/image/upload/c_lfill,dpr_auto,g_faces/c_scale,dpr_2.0,w_1200${t.value.image}`,
                }
              : {},
          ],
        }),
        { article: t, moreArticles: v }
      );
    },
    computed: {
      tags() {
        var e;
        return (e = this.article) == null
          ? void 0
          : e.recipeLabels.map((l) => `#${l} `);
      },
    },
    methods: {},
  }),
  s = (e) => (N("data-v-a48a3fcc"), (e = e()), j(), e),
  P = s(() => a("div", { class: "byline" }, null, -1)),
  J = { class: "preamble" },
  O = { class: "sidebar-section more" },
  T = s(() => a("h2", null, "Barnens veganska favoritr\xE4tter", -1)),
  U = { class: "block" },
  G = s(() => a("h2", null, "Fler vegorecept", -1)),
  H = { class: "block__content" },
  M = { class: "text-center text-sm" },
  W = s(() => a("strong", null, "Vego", -1)),
  X = s(() => a("strong", null, "Alla recept", -1));
function Y(e, l, t, v, p, u) {
  const c = q,
    o = D,
    i = F;
  return e.article
    ? (_(),
      R(
        i,
        {
          key: 0,
          class: "page-front",
          document: e.article,
          coverCloudinaryId: e.article.image,
        },
        V(
          {
            content: r(() => [
              a("h1", null, g(e.article.title), 1),
              P,
              a("p", J, g(e.article.preamble), 1),
            ]),
            _: 2,
          },
          [
            e.moreArticles &&
            Array.isArray(e.moreArticles) &&
            e.moreArticles.length > 0
              ? {
                  name: "sidebar",
                  fn: r(() => [
                    a("section", O, [
                      T,
                      d(c),
                      a("div", U, [
                        G,
                        a("div", H, [
                          a("ul", null, [
                            (_(!0),
                            $(
                              C,
                              null,
                              B(
                                e.moreArticles,
                                (n) => (
                                  _(),
                                  $("li", { key: n.title }, [
                                    d(
                                      o,
                                      { to: n._path },
                                      {
                                        default: r(() => [m(g(n.title), 1)]),
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
                    a("div", M, [
                      d(
                        o,
                        { to: "/vego" },
                        { default: r(() => [m("Tillbaka till\xA0"), W]), _: 1 }
                      ),
                      d(
                        o,
                        { to: "/vego/recept" },
                        { default: r(() => [m("\xA0 eller \xA0"), X]), _: 1 }
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
const se = E(L, [
  ["render", Y],
  ["__scopeId", "data-v-a48a3fcc"],
]);
export { se as default };
