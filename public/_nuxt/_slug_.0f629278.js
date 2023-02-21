import {
  d as N,
  i as D,
  x as m,
  j as V,
  o as r,
  c as w,
  a0 as R,
  w as i,
  L as l,
  b as p,
  a,
  u as C,
  M as d,
  N as S,
  O as B,
  f as _,
  e as h,
  J as L,
  K as O,
  g as T,
} from "./entry.bc63e51a.js";
import { q as g } from "./query.02b33be6.js";
import { c as q, a as v } from "./urlTools.cc793b8f.js";
import { _ as E } from "./nuxt-link.b84c39ea.js";
import { _ as F } from "./PageArticle.aa3be229.js";
import "./utils.0216015b.js";
import "./PageArticle.vue.e748534d.js";
import "./AppImage.1a4d91cf.js";
import "./AppImage.vue.fa386efd.js";
import "./client-only.9e138b79.js";
import "./SearchInput.ae3910f0.js";
import "./SearchInput.vue.750aef33.js";
import "./ContentRenderer.32ebd34d.js";
import "./ContentRendererMarkdown.291b27e1.js";
import "./index.a6ef77ff.js";
import "./index.23a876b0.js";
const G = N({
    setup() {
      var u, o, s, n, k, $, I, A, j;
      const { params: e, fullPath: c } = D(),
        { data: t } = m(
          c,
          async () => g(`vego/tips/${e.parent}/${e.slug}`).findOne(),
          "$gxlhNiGCoe"
        ),
        { data: f } = m(`${c}-parent`, async () =>
          g(`vego/tips/${e.parent}/index`)
            .only(["title", "_dir", "_path"])
            .findOne()
        ),
        { data: b } = m(
          async () =>
            g(`vego/tips/${e.parent}`)
              .limit(20)
              .only(["title", "_dir", "_path"])
              .find(),
          "$W6i9TV8Lpj"
        );
      return (
        V({
          title:
            (u = t.value) != null && u.title
              ? `${t.value.title} | Rädda Djuren-klubben`
              : "Rädda Djuren-klubben",
          link: [
            {
              hid: "canonical",
              rel: "canonical",
              href: q(`/${(o = t.value) == null ? void 0 : o.slug}`),
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
                (n = t.value) != null && n.title
                  ? `${t.value.title} | Rädda Djuren-klubben`
                  : "Rädda Djuren-klubben",
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
                (I = t.value) != null && I.metadescription
                  ? t.value.metadescription
                  : (A = t.value) != null && A.preamble
                  ? t.value.preamble
                  : "",
            },
            (j = t.value) != null && j.image
              ? {
                  hid: "og:image",
                  property: "og:image",
                  content: `https://res.cloudinary.com/klandestino-ab/image/upload/c_lfill,dpr_auto,g_faces/c_scale,dpr_2.0,w_1200${t.value.image}`,
                }
              : {},
          ],
        }),
        { article: t, parent: f, moreArticles: b }
      );
    },
    methods: { stripIndex: v },
  }),
  y = (e) => (L("data-v-6103b88a"), (e = e()), O(), e),
  H = y(() => a("div", { class: "byline" }, null, -1)),
  J = { class: "preamble" },
  K = { key: 0, class: "sidebar-section more" },
  M = { class: "block" },
  P = { class: "block__content" },
  U = { key: 1, class: "text-center text-sm" },
  W = y(() => a("strong", null, "Vego", -1)),
  z = y(() => a("strong", null, "Alla artiklar", -1));
function Q(e, c, t, f, b, u) {
  const o = E,
    s = F;
  return e.article
    ? (r(),
      w(
        s,
        {
          key: 0,
          class: "page-front",
          document: e.article,
          coverCloudinaryId: e.article.image,
        },
        R(
          {
            content: i(() => [
              a("h1", null, d(e.article.title), 1),
              H,
              a("p", J, d(e.article.preamble), 1),
            ]),
            _: 2,
          },
          [
            Array.isArray(e.moreArticles) && e.moreArticles.length > 0
              ? {
                  name: "sidebar",
                  fn: i(() => [
                    e.parent
                      ? (r(),
                        p("section", K, [
                          a("div", M, [
                            e.parent && e.parent._path
                              ? (r(),
                                w(
                                  o,
                                  {
                                    key: 0,
                                    to: ("stripIndex" in e
                                      ? e.stripIndex
                                      : C(v))(e.parent._path),
                                  },
                                  {
                                    default: i(() => [
                                      a("h2", null, d(e.parent.title), 1),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ["to"]
                                ))
                              : l("", !0),
                            a("div", P, [
                              a("ul", null, [
                                (r(!0),
                                p(
                                  S,
                                  null,
                                  B(
                                    e.moreArticles,
                                    (n) => (
                                      r(),
                                      p("li", { key: n.title }, [
                                        _(
                                          o,
                                          {
                                            to: ("stripIndex" in e
                                              ? e.stripIndex
                                              : C(v))(n._path),
                                          },
                                          {
                                            default: i(() => [
                                              h(d(n.title), 1),
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
                      : l("", !0),
                    e.parent &&
                    e.parent._path &&
                    e.parent._path !== e.article._path
                      ? (r(),
                        p("div", U, [
                          _(
                            o,
                            { to: "/vego" },
                            { default: i(() => [h("Tillbaka till "), W]), _: 1 }
                          ),
                          _(
                            o,
                            { to: "/vego/tips" },
                            { default: i(() => [h("  eller  "), z]), _: 1 }
                          ),
                        ]))
                      : l("", !0),
                  ]),
                  key: "0",
                }
              : void 0,
          ]
        ),
        1032,
        ["document", "coverCloudinaryId"]
      ))
    : l("", !0);
}
const ue = T(G, [
  ["render", Q],
  ["__scopeId", "data-v-6103b88a"],
]);
export { ue as default };
