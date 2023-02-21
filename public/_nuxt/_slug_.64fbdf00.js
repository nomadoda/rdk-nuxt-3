import {
  d as k,
  i as j,
  x as b,
  j as $,
  o as c,
  c as N,
  a0 as w,
  w as l,
  L as x,
  a as o,
  b as g,
  O as D,
  f,
  e as v,
  M as d,
  N as C,
  J as I,
  K as R,
  g as B,
} from "./entry.0b49aa71.js";
import { q as y } from "./query.67962173.js";
import { c as S } from "./urlTools.cc793b8f.js";
import { _ as A } from "./nuxt-link.3942cc84.js";
import { _ as O } from "./PageArticle.e2ec2851.js";
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
const V = k({
    setup() {
      var s, i, n, r, a, m, h;
      const { params: e, fullPath: u } = j(),
        { data: t } = b(
          u,
          async () => y(`hjalp-djuren/${e.slug}`).findOne(),
          "$NYFOBL66OR"
        ),
        { data: _ } = b(
          async () => y("hjalp-djuren").only(["title", "_path"]).find(),
          "$Yx8XlMD9nN"
        );
      return (
        $({
          title:
            (s = t.value) != null && s.title
              ? `${t.value.title} | Rädda Djuren-klubben`
              : "Rädda Djuren-klubben",
          link: [
            {
              hid: "canonical",
              rel: "canonical",
              href: S(`${(i = t.value) == null ? void 0 : i._path}`),
            },
          ],
          meta: [
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
              content: (r = t.value) == null ? void 0 : r.preamble,
            },
            {
              hid: "og:description",
              property: "og:description",
              content:
                (a = t.value) != null && a.preamble ? t.value.preamble : "",
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
  p = (e) => (I("data-v-72ddb014"), (e = e()), R(), e),
  F = p(() => o("div", { class: "byline" }, null, -1)),
  L = { class: "preamble" },
  q = { class: "sidebar-section more" },
  M = { class: "block" },
  T = p(() => o("h2", null, "Fler sidor", -1)),
  Y = { class: "block__content" },
  E = { class: "text-center text-sm" },
  H = p(() => o("strong", null, "så kan du hjälpa djuren", -1));
function J(e, u, t, _, s, i) {
  const n = A,
    r = O;
  return e.article
    ? (c(),
      N(
        r,
        {
          key: 0,
          class: "page-front",
          document: e.article,
          coverCloudinaryId: e.article.image,
        },
        w(
          {
            content: l(() => [
              o("h1", null, d(e.article.title), 1),
              F,
              o("p", L, d(e.article.preamble), 1),
            ]),
            _: 2,
          },
          [
            e.moreArticles.length > 0
              ? {
                  name: "sidebar",
                  fn: l(() => [
                    o("section", q, [
                      o("div", M, [
                        T,
                        o("div", Y, [
                          o("ul", null, [
                            (c(!0),
                            g(
                              C,
                              null,
                              D(
                                e.moreArticles,
                                (a) => (
                                  c(),
                                  g("li", { key: a.title }, [
                                    f(
                                      n,
                                      { to: a._path },
                                      {
                                        default: l(() => [v(d(a.title), 1)]),
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
                    o("div", E, [
                      f(
                        n,
                        { to: "/hjalp-djuren" },
                        { default: l(() => [v("Tillbaka till "), H]), _: 1 }
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
const se = B(V, [
  ["render", J],
  ["__scopeId", "data-v-72ddb014"],
]);
export { se as default };
