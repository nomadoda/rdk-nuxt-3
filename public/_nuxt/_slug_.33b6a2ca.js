import {
  o as c,
  b as m,
  a as o,
  f as a,
  w as s,
  M as f,
  g as b,
  G as w,
  c as $,
  N as C,
  O as j,
  L as x,
  d as N,
  i as R,
  x as A,
  j as V,
  a0 as S,
  e as g,
  J as L,
  K as q,
} from "./entry.bc63e51a.js";
import { q as I } from "./query.02b33be6.js";
import { c as F } from "./urlTools.cc793b8f.js";
import { _ as J, a as G } from "./RecipeSlider.vue.29866077.js";
import { _ as M } from "./AppImage.1a4d91cf.js";
import { _ as B } from "./client-only.9e138b79.js";
import { _ as D } from "./nuxt-link.b84c39ea.js";
import { _ as O } from "./PageArticle.aa3be229.js";
import "./utils.0216015b.js";
import "./swiper-slide.cabfc1a1.js";
import "./navigation.min.a9fb0167.js";
import "./AppImage.vue.fa386efd.js";
import "./PageArticle.vue.e748534d.js";
import "./SearchInput.ae3910f0.js";
import "./SearchInput.vue.750aef33.js";
import "./ContentRenderer.32ebd34d.js";
import "./ContentRendererMarkdown.291b27e1.js";
import "./index.a6ef77ff.js";
import "./index.23a876b0.js";
const P = { class: "recipe-slider-card" },
  T = { class: "flip-container" },
  U = { class: "flipper" },
  E = { class: "front" },
  H = { class: "image aspect-w-16 aspect-h-9" },
  K = { class: "content" },
  Y = { class: "card__header__title" },
  z = { class: "title" };
function Q(e, _, t, v, d, p) {
  const i = M,
    n = B,
    r = D;
  return (
    c(),
    m("div", P, [
      o("div", T, [
        o("div", U, [
          o("div", E, [
            a(
              r,
              { to: e.recipe._path },
              {
                default: s(() => [
                  o("div", H, [
                    a(n, null, {
                      default: s(() => [
                        a(
                          i,
                          {
                            "public-id": e.pubId,
                            width: "auto",
                            height: "400",
                          },
                          null,
                          8,
                          ["public-id"]
                        ),
                      ]),
                      _: 1,
                    }),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["to"]
            ),
          ]),
        ]),
      ]),
      o("div", K, [
        o("div", Y, [
          a(
            r,
            { to: e.recipe._path },
            { default: s(() => [o("h4", z, f(e.recipe.title), 1)]), _: 1 },
            8,
            ["to"]
          ),
        ]),
      ]),
    ])
  );
}
const W = b(J, [
    ["render", Q],
    ["__scopeId", "data-v-5d5a9e4a"],
  ]),
  X = { class: "relative mb-8" };
function Z(e, _, t, v, d, p) {
  const i = W,
    n = w("swiper-slide"),
    r = w("swiper"),
    l = B;
  return (
    c(),
    m("div", X, [
      a(l, null, {
        default: s(() => [
          e.recipes.length > 0
            ? (c(),
              $(
                r,
                {
                  key: 0,
                  ref: "swiper",
                  modules: e.modules,
                  "slides-per-view": 1,
                  "space-between": 8,
                  "centered-slides": !0,
                  loop: !0,
                  navigation: !0,
                },
                {
                  default: s(() => [
                    (c(!0),
                    m(
                      C,
                      null,
                      j(
                        e.recipes,
                        (u) => (
                          c(),
                          $(
                            n,
                            { key: u._id },
                            {
                              default: s(() => [
                                a(i, { recipe: u }, null, 8, ["recipe"]),
                              ]),
                              _: 2,
                            },
                            1024
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                  _: 1,
                },
                8,
                ["modules"]
              ))
            : x("", !0),
        ]),
        _: 1,
      }),
    ])
  );
}
const ee = b(G, [
    ["render", Z],
    ["__scopeId", "data-v-23ef5c26"],
  ]),
  te = N({
    setup() {
      var d, p, i, n, r, l, u, y, k;
      const { params: e, fullPath: _ } = R(),
        { data: t } = A(
          _,
          async () => I(`vego/recept/${e.slug}`).findOne(),
          "$FhGMVmxy5J"
        ),
        { data: v } = A(
          async () =>
            I("vego/recept").only(["title", "_path", "recipeLabels"]).find(),
          "$PxsqYRU7BJ"
        );
      return (
        V({
          title:
            (d = t.value) != null && d.title
              ? `${t.value.title} | Rädda Djuren-klubben`
              : "Rädda Djuren-klubben",
          link: [
            {
              hid: "canonical",
              rel: "canonical",
              href: F(`/vego/${(p = t.value) == null ? void 0 : p.slug}`),
            },
          ],
          meta: [
            {
              hid: "og:url",
              property: "og:url",
              content: `https://www.raddadjuren.se/vego/${
                (i = t.value) == null ? void 0 : i.slug
              }`,
            },
            {
              hid: "og:title",
              property: "og:title",
              content:
                (n = t.value) != null && n.title
                  ? `${t.value.title} | Rädda Djuren-klubben`
                  : "Rädda Djuren-klubben",
            },
            {
              hid: "description",
              property: "description",
              content:
                (r = t.value) != null && r.metadescription
                  ? t.value.metadescription
                  : (l = t.value) != null && l.preamble
                  ? t.value.preamble
                  : "",
            },
            {
              hid: "og:description",
              property: "og:description",
              content:
                (u = t.value) != null && u.metadescription
                  ? t.value.metadescription
                  : (y = t.value) != null && y.preamble
                  ? t.value.preamble
                  : "",
            },
            (k = t.value) != null && k.image
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
          : e.recipeLabels.map((_) => `#${_} `);
      },
    },
    methods: {},
  }),
  h = (e) => (L("data-v-a48a3fcc"), (e = e()), q(), e),
  oe = h(() => o("div", { class: "byline" }, null, -1)),
  se = { class: "preamble" },
  ne = { class: "sidebar-section more" },
  ae = h(() => o("h2", null, "Barnens veganska favoriträtter", -1)),
  re = { class: "block" },
  ie = h(() => o("h2", null, "Fler vegorecept", -1)),
  le = { class: "block__content" },
  ce = { class: "text-center text-sm" },
  _e = h(() => o("strong", null, "Vego", -1)),
  de = h(() => o("strong", null, "Alla recept", -1));
function pe(e, _, t, v, d, p) {
  const i = ee,
    n = D,
    r = O;
  return e.article
    ? (c(),
      $(
        r,
        {
          key: 0,
          class: "page-front",
          document: e.article,
          coverCloudinaryId: e.article.image,
        },
        S(
          {
            content: s(() => [
              o("h1", null, f(e.article.title), 1),
              oe,
              o("p", se, f(e.article.preamble), 1),
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
                    o("section", ne, [
                      ae,
                      a(i),
                      o("div", re, [
                        ie,
                        o("div", le, [
                          o("ul", null, [
                            (c(!0),
                            m(
                              C,
                              null,
                              j(
                                e.moreArticles,
                                (l) => (
                                  c(),
                                  m("li", { key: l.title }, [
                                    a(
                                      n,
                                      { to: l._path },
                                      {
                                        default: s(() => [g(f(l.title), 1)]),
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
                    o("div", ce, [
                      a(
                        n,
                        { to: "/vego" },
                        { default: s(() => [g("Tillbaka till "), _e]), _: 1 }
                      ),
                      a(
                        n,
                        { to: "/vego/recept" },
                        { default: s(() => [g("  eller  "), de]), _: 1 }
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
    : x("", !0);
}
const Re = b(te, [
  ["render", pe],
  ["__scopeId", "data-v-a48a3fcc"],
]);
export { Re as default };
