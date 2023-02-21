import {
  d as j,
  x as g,
  j as k,
  o as s,
  b as d,
  f as u,
  a as h,
  N as f,
  O as v,
  L as y,
  g as $,
} from "./entry.bc63e51a.js";
import { q as b } from "./query.02b33be6.js";
import { c as D } from "./urlTools.cc793b8f.js";
import { _ as x } from "./PageSearch.47a8baba.js";
import { _ as R } from "./PageTitle.a79fb585.js";
import { _ as w } from "./InfoCard.f70abe04.js";
import "./utils.0216015b.js";
import "./PageSearch.vue.293e2aff.js";
import "./SearchInput.ae3910f0.js";
import "./SearchInput.vue.750aef33.js";
import "./AppLink.ef6e30e4.js";
import "./AppLink.vue.55029462.js";
import "./nuxt-link.b84c39ea.js";
import "./PageTitle.vue.14c34ae6.js";
import "./InfoCard.vue.249e50fd.js";
import "./AppImage.1a4d91cf.js";
import "./AppImage.vue.fa386efd.js";
import "./client-only.9e138b79.js";
const N = j({
    setup() {
      var r, i, l, p, n, a, o, t, m, _;
      const { data: e } = g(
          async () => b("portal-page/hjalp-djuren").findOne(),
          "$p7Loo5bHwX"
        ),
        { data: c } = g(
          async () =>
            b("hjalp-djuren")
              .where({ list: !0 })
              .only(["title", "_path", "image"])
              .find(),
          "$qhIcnHk8Ek"
        );
      return (
        k({
          title:
            (r = e.value) != null && r.title
              ? `${
                  (i = e.value) == null ? void 0 : i.title
                } | Rädda Djuren-klubben`
              : "Rädda Djuren-klubben",
          link: [
            { hid: "canonical", rel: "canonical", href: D("/hjalp-djuren") },
          ],
          meta: [
            {
              hid: "og:url",
              property: "og:url",
              content: "https://www.raddadjuren.se/hjalp-djuren",
            },
            {
              hid: "og:title",
              property: "og:title",
              content:
                (l = e.value) != null && l.title
                  ? `${
                      (p = e.value) == null ? void 0 : p.title
                    } | Rädda Djuren-klubben`
                  : "Rädda Djuren-klubben",
            },
            {
              hid: "title",
              property: "title",
              content:
                (n = e.value) != null && n.title
                  ? `${
                      (a = e.value) == null ? void 0 : a.title
                    } | Rädda Djuren-klubben`
                  : "Rädda Djuren-klubben",
            },
            {
              hid: "description",
              property: "description",
              content:
                ((o = e.value) == null ? void 0 : o.metadescription) ||
                ((t = e.value) == null ? void 0 : t.preamble) ||
                "",
            },
            {
              hid: "og:description",
              property: "og:description",
              content:
                ((m = e.value) == null ? void 0 : m.metadescription) ||
                ((_ = e.value) == null ? void 0 : _.preamble) ||
                "",
            },
          ],
        }),
        { page: e, articles: c }
      );
    },
  }),
  q = { key: 0, class: "page-hjalp-djuren" };
function B(e, c, r, i, l, p) {
  const n = x,
    a = R,
    o = w;
  return e.page
    ? (s(),
      d("div", q, [
        u(n, { class: "search", links: e.page.links }, null, 8, ["links"]),
        u(
          a,
          { class: "title", title: e.page.title, preamble: e.page.preamble },
          null,
          8,
          ["title", "preamble"]
        ),
        h("section", null, [
          h("ul", null, [
            (s(!0),
            d(
              f,
              null,
              v(
                e.articles,
                (t) => (
                  s(),
                  d("li", { key: t._path }, [
                    u(
                      o,
                      { title: t.title, link: t._path, image: t.image },
                      null,
                      8,
                      ["title", "link", "image"]
                    ),
                  ])
                )
              ),
              128
            )),
          ]),
        ]),
      ]))
    : y("", !0);
}
const S = $(N, [
  ["render", B],
  ["__scopeId", "data-v-bd69734a"],
]);
export { S as default };
