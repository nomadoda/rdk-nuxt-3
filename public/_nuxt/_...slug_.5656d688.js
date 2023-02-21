import {
  d as N,
  i as S,
  x as g,
  j as w,
  E as A,
  a5 as B,
  o,
  c as j,
  a0 as V,
  w as u,
  L as h,
  a,
  u as b,
  M as l,
  b as c,
  N as E,
  O,
  f as C,
  e as I,
  J as q,
  K as L,
  g as M,
} from "./entry.0b49aa71.js";
import { q as v } from "./query.67962173.js";
import { c as T, s as _ } from "./urlTools.cc793b8f.js";
import { _ as F } from "./nuxt-link.3942cc84.js";
import { _ as H } from "./PageArticle.e2ec2851.js";
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
const J = N({
    setup() {
      var m, p, r, y, k, $, R, P, D;
      const { params: e, fullPath: d } = S(),
        n = e.slug,
        i = n.length > 1 ? n[0] : null,
        { data: f } = g(`${d}-parent`, async () =>
          i ? v(`pages/${i}/`).only(["title", "_dir", "_path"]).findOne() : null
        ),
        { data: t } = g(`${d}-article`, async () =>
          v(i ? `pages/${i}/${n[1]}` : `pages/${n[0]}/`).findOne()
        ),
        { data: s } = g(`${d}-more`, async () =>
          v(`pages/${n[0]}`).only(["title", "_dir", "_path"]).limit(20).find()
        );
      return (
        w({
          title:
            (m = t.value) != null && m.title
              ? `${t.value.title} | Rädda Djuren-klubben`
              : "Rädda Djuren-klubben",
          link: [
            {
              hid: "canonical",
              rel: "canonical",
              href: T(`/${(p = t.value) == null ? void 0 : p.slug}`),
            },
          ],
          meta: [
            {
              hid: "og:url",
              name: "og:url",
              property: "og:url",
              content:
                (r = t.value) != null && r.title
                  ? `${t.value.title} | Rädda Djuren-klubben`
                  : "Rädda Djuren-klubben",
            },
            {
              hid: "og:title",
              name: "og:title",
              property: "og:title",
              content:
                (y = t.value) != null && y.title
                  ? `${t.value.title} | Rädda Djuren-klubben`
                  : "Rädda Djuren-klubben",
            },
            {
              hid: "description",
              name: "description",
              content:
                (k = t.value) != null && k.metadescription
                  ? t.value.metadescription
                  : ($ = t.value) != null && $.preamble
                  ? t.value.preamble
                  : "",
            },
            {
              hid: "og:description",
              name: "og:description",
              property: "og:description",
              content:
                (R = t.value) != null && R.metadescription
                  ? t.value.metadescription
                  : (P = t.value) != null && P.preamble
                  ? t.value.preamble
                  : "",
            },
            {
              hid: "og:image",
              name: "og:image",
              property: "og:image",
              content:
                (D = t.value) != null && D.image
                  ? `https://res.cloudinary.com/klandestino-ab/image/upload/c_lfill,dpr_auto,g_faces/c_scale,dpr_2.0,w_1200${t.value.image}`
                  : null,
            },
          ],
        }),
        A(() => {
          if (!(t != null && t.value)) throw B({ statusCode: 404, fatal: !0 });
        }),
        { parent: f, article: t, moreArticles: s }
      );
    },
    methods: { stripPageRoot: _ },
  }),
  K = (e) => (q("data-v-2cb9e224"), (e = e()), L(), e),
  U = K(() => a("div", { class: "byline" }, null, -1)),
  z = { class: "preamble" },
  G = { class: "sidebar-section more" },
  Q = { class: "block" },
  W = { key: 1 },
  X = { key: 2, class: "block__content" },
  Y = { key: 0, class: "text-center text-sm" };
function Z(e, d, n, i, f, t) {
  var p;
  const s = F,
    m = H;
  return e.article
    ? (o(),
      j(
        m,
        {
          key: 0,
          class: "page-front",
          document: e.article,
          coverCloudinaryId: e.article.image,
        },
        V(
          {
            content: u(() => [
              a("h1", null, l(e.article.title), 1),
              U,
              a("p", z, l(e.article.preamble), 1),
            ]),
            _: 2,
          },
          [
            ((p = e.moreArticles) == null ? void 0 : p.length) > 1
              ? {
                  name: "sidebar",
                  fn: u(() => [
                    a("section", G, [
                      a("div", Q, [
                        e.parent
                          ? (o(),
                            j(
                              s,
                              {
                                key: 0,
                                to: `/${("stripPageRoot" in e
                                  ? e.stripPageRoot
                                  : b(_))(e.parent._path)}`,
                              },
                              {
                                default: u(() => [
                                  a("h2", null, l(e.parent.title), 1),
                                ]),
                                _: 1,
                              },
                              8,
                              ["to"]
                            ))
                          : (o(), c("h2", W, l(e.article.title), 1)),
                        e.moreArticles
                          ? (o(),
                            c("div", X, [
                              a("ul", null, [
                                (o(!0),
                                c(
                                  E,
                                  null,
                                  O(
                                    e.moreArticles,
                                    (r) => (
                                      o(),
                                      c("li", { key: r.title }, [
                                        C(
                                          s,
                                          {
                                            to: `/${("stripPageRoot" in e
                                              ? e.stripPageRoot
                                              : b(_))(r._path)}`,
                                          },
                                          {
                                            default: u(() => [
                                              I(l(r.title), 1),
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
                            ]))
                          : h("", !0),
                      ]),
                    ]),
                    e.parent
                      ? (o(),
                        c("div", Y, [
                          C(
                            s,
                            {
                              to: `/${("stripPageRoot" in e
                                ? e.stripPageRoot
                                : b(_))(e.parent._path)}`,
                            },
                            {
                              default: u(() => [
                                I("Tillbaka till "),
                                a("strong", null, l(e.parent.title) + " ", 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ["to"]
                          ),
                        ]))
                      : h("", !0),
                  ]),
                  key: "0",
                }
              : void 0,
          ]
        ),
        1032,
        ["document", "coverCloudinaryId"]
      ))
    : h("", !0);
}
const ge = M(J, [
  ["render", Z],
  ["__scopeId", "data-v-2cb9e224"],
]);
export { ge as default };
