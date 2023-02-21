import {
  d as j,
  i as x,
  x as m,
  j as N,
  o as _,
  c as A,
  a0 as C,
  w as i,
  L as S,
  a,
  f as r,
  M as d,
  u as D,
  b as R,
  O as V,
  e as g,
  N as w,
  J as B,
  K as O,
  g as L,
} from "./entry.bc63e51a.js";
import { q as l } from "./query.02b33be6.js";
import { c as q, s as H, a as v } from "./urlTools.cc793b8f.js";
import { _ as J } from "./nuxt-link.b84c39ea.js";
import { _ as P } from "./PageArticle.aa3be229.js";
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
const T = j({
    setup() {
      var u, o, s, n, b, y, k, $, I;
      const { params: e, fullPath: c } = x(),
        { data: p } = m(`${c}-parent`, async () =>
          l(`vego/tips/${e.slug}/index`)
            .only(["title", "_dir", "_path"])
            .findOne()
        ),
        { data: t } = m(
          c,
          () =>
            p
              ? l(`vego/tips/${e.slug}/index`).findOne()
              : l(`vego/tips/${e.slug}`).findOne(),
          "$H5k4gttJeN"
        ),
        { data: f } = m(
          async () =>
            p
              ? l(`vego/tips/${e.slug}`)
                  .limit(20)
                  .only(["title", "_path"])
                  .find()
              : l("vego/tips").limit(20).only(["title", "_path"]).find(),
          "$L36QAmc1h7"
        );
      return (
        N({
          title:
            (u = t.value) != null && u.title
              ? `${t.value.title} | Rädda Djuren-klubben`
              : "Rädda Djuren-klubben",
          link: [
            {
              hid: "canonical",
              rel: "canonical",
              href: q(`/${(o = t.value) == null ? void 0 : o._path}`),
            },
          ],
          meta: [
            {
              hid: "og:url",
              name: "og:url",
              property: "og:url",
              content:
                (s = t.value) != null && s.title
                  ? `${t.value.title} | Rädda Djuren-klubben`
                  : "Rädda Djuren-klubben",
            },
            {
              hid: "og:title",
              name: "og:title",
              property: "og:title",
              content:
                (n = t.value) != null && n.title
                  ? `${t.value.title} | Rädda Djuren-klubben`
                  : "Rädda Djuren-klubben",
            },
            {
              hid: "description",
              name: "description",
              content:
                (b = t.value) != null && b.metadescription
                  ? t.value.metadescription
                  : (y = t.value) != null && y.preamble
                  ? t.value.preamble
                  : "",
            },
            {
              hid: "og:description",
              name: "og:description",
              property: "og:description",
              content:
                (k = t.value) != null && k.metadescription
                  ? t.value.metadescription
                  : ($ = t.value) != null && $.preamble
                  ? t.value.preamble
                  : "",
            },
            (I = t.value) != null && I.image
              ? {
                  hid: "og:image",
                  name: "og:image",
                  property: "og:image",
                  content: `https://res.cloudinary.com/klandestino-ab/image/upload/c_lfill,dpr_auto,g_faces/c_scale,dpr_2.0,w_1200${t.value.image}`,
                }
              : {},
          ],
        }),
        { article: t, moreArticles: f }
      );
    },
    methods: { stripPageRoot: H, stripIndex: v },
  }),
  h = (e) => (B("data-v-477672ee"), (e = e()), O(), e),
  E = h(() => a("div", { class: "byline" }, null, -1)),
  F = { class: "preamble" },
  K = { class: "sidebar-section more" },
  M = { class: "block" },
  Q = { class: "block__content" },
  U = { class: "text-center text-sm" },
  z = h(() => a("strong", null, "Vego", -1)),
  G = h(() => a("strong", null, "Alla artiklar", -1));
function W(e, c, p, t, f, u) {
  const o = J,
    s = P;
  return e.article
    ? (_(),
      A(
        s,
        {
          key: 0,
          class: "page-front",
          document: e.article,
          coverCloudinaryId: e.article.image,
        },
        C(
          {
            content: i(() => [
              a("h1", null, d(e.article.title), 1),
              E,
              a("p", F, d(e.article.preamble), 1),
            ]),
            _: 2,
          },
          [
            e.moreArticles.length > 0
              ? {
                  name: "sidebar",
                  fn: i(() => [
                    a("section", K, [
                      a("div", M, [
                        r(
                          o,
                          {
                            to: ("stripIndex" in e ? e.stripIndex : D(v))(
                              e.article._path
                            ),
                          },
                          {
                            default: i(() => [
                              a("h2", null, d(e.article.title), 1),
                            ]),
                            _: 1,
                          },
                          8,
                          ["to"]
                        ),
                        a("div", Q, [
                          a("ul", null, [
                            (_(!0),
                            R(
                              w,
                              null,
                              V(
                                e.moreArticles,
                                (n) => (
                                  _(),
                                  R("li", { key: n.title }, [
                                    r(
                                      o,
                                      {
                                        to: ("stripIndex" in e
                                          ? e.stripIndex
                                          : D(v))(n._path),
                                      },
                                      {
                                        default: i(() => [g(d(n.title), 1)]),
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
                    a("div", U, [
                      r(
                        o,
                        { to: "/vego" },
                        { default: i(() => [g("Tillbaka till "), z]), _: 1 }
                      ),
                      r(
                        o,
                        { to: "/vego/tips" },
                        { default: i(() => [g("  eller  "), G]), _: 1 }
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
    : S("", !0);
}
const me = L(T, [
  ["render", W],
  ["__scopeId", "data-v-477672ee"],
]);
export { me as default };
