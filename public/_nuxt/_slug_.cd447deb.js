import {
  d as w,
  i as A,
  x as h,
  j,
  o as c,
  c as N,
  a0 as x,
  w as n,
  L as C,
  a as o,
  b as y,
  O as D,
  f as b,
  e as k,
  M as d,
  u as R,
  N as S,
  J as V,
  K as B,
  g as K,
} from "./entry.0b49aa71.js";
import { q as $ } from "./query.67962173.js";
import { c as q, a as I } from "./urlTools.cc793b8f.js";
import { _ as F } from "./nuxt-link.3942cc84.js";
import { _ as L } from "./PageArticle.e2ec2851.js";
import "./utils.925ea3fb.js";
import "./PageArticle.vue.2e06c360.js";
import "./AppImage.4fc7032c.js";
import "./AppImage.vue.1420cc05.js";
import "./client-only.9fc77d65.js";
import "./SearchInput.aed2bd52.js";
import "./SearchInput.vue.52b1c04f.js";
import "./ContentRenderer.19b4e186.js";
import "./ContentRendererMarkdown.1eb3b2ad.js";
import "./index.a6ef77ff.js";
import "./index.681eb04d.js";
const O = w({
    setup() {
      var i, l, r, s, a, _, g, v, f;
      const { params: t, fullPath: u } = A(),
        { data: e } = h(
          u,
          async () => $(`vego/tips/${t.slug}`).findOne(),
          "$89Q6x4sQow"
        ),
        { data: m } = h(
          async () => $("vego").only(["title", "_path"]).find(),
          "$i2yjNarKKf"
        );
      return (
        j({
          title:
            (i = e.value) != null && i.title
              ? `${e.value.title} | Rädda Djuren-klubben`
              : "Rädda Djuren-klubben",
          link: [
            {
              hid: "canonical",
              rel: "canonical",
              href: q(`/vego/${(l = e.value) == null ? void 0 : l.slug}`),
            },
          ],
          meta: [
            {
              hid: "og:url",
              property: "og:url",
              content: `https://www.raddadjuren.se/vego/${
                (r = e.value) == null ? void 0 : r.slug
              }`,
            },
            {
              hid: "og:title",
              property: "og:title",
              content:
                (s = e.value) != null && s.title
                  ? `${e.value.title} | Rädda Djuren-klubben`
                  : "Rädda Djuren-klubben",
            },
            {
              hid: "description",
              property: "description",
              content:
                (a = e.value) != null && a.metadescription
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
                  : (v = e.value) != null && v.preamble
                  ? e.value.preamble
                  : "",
            },
            (f = e.value) != null && f.image
              ? {
                  hid: "og:image",
                  property: "og:image",
                  content: `https://res.cloudinary.com/klandestino-ab/image/upload/c_lfill,dpr_auto,g_faces/c_scale,dpr_2.0,w_1200${e.value.image}`,
                }
              : {},
          ],
        }),
        { article: e, moreArticles: m }
      );
    },
    methods: { stripIndex: I },
  }),
  p = (t) => (V("data-v-1ff57786"), (t = t()), B(), t),
  Q = p(() => o("div", { class: "byline" }, null, -1)),
  T = { class: "preamble" },
  E = { class: "sidebar-section more" },
  H = { class: "block" },
  J = p(() => o("h2", null, "Fler vegotips", -1)),
  M = { class: "block__content" },
  P = { class: "text-center text-sm" },
  U = p(() => o("strong", null, "Vego", -1));
function z(t, u, e, m, i, l) {
  const r = F,
    s = L;
  return t.article
    ? (c(),
      N(
        s,
        {
          key: 0,
          class: "page-front",
          document: t.article,
          coverCloudinaryId: t.article.image,
        },
        x(
          {
            content: n(() => [
              o("h1", null, d(t.article.title), 1),
              Q,
              o("p", T, d(t.article.preamble), 1),
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
                    o("section", E, [
                      o("div", H, [
                        J,
                        o("div", M, [
                          o("ul", null, [
                            (c(!0),
                            y(
                              S,
                              null,
                              D(
                                t.moreArticles,
                                (a) => (
                                  c(),
                                  y("li", { key: a.title }, [
                                    b(
                                      r,
                                      {
                                        to: ("stripIndex" in t
                                          ? t.stripIndex
                                          : R(I))(a._path),
                                      },
                                      {
                                        default: n(() => [k(d(a.title), 1)]),
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
                    o("div", P, [
                      b(
                        r,
                        { to: "/vego" },
                        { default: n(() => [k("Tillbaka till "), U]), _: 1 }
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
const pe = K(O, [
  ["render", z],
  ["__scopeId", "data-v-1ff57786"],
]);
export { pe as default };
