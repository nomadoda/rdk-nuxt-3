import {
  d as v,
  x as m,
  j as b,
  o as s,
  b as c,
  f as d,
  a as _,
  N as f,
  O as k,
  L as h,
  g as y,
} from "./entry.bc63e51a.js";
import { q as g } from "./query.02b33be6.js";
import { c as x } from "./urlTools.cc793b8f.js";
import { _ as $ } from "./PageSearch.47a8baba.js";
import { _ as j } from "./PageTitle.a79fb585.js";
import { _ as D } from "./InfoCard.f70abe04.js";
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
const N = v({
    setup() {
      var r, l, i, p, n, a, o, t;
      const { data: e } = m(
          async () => g("portal-page/vuxen-eller-pedagog").findOne(),
          "$JKw2xxjDlY"
        ),
        { data: u } = m(
          async () =>
            g("vuxen-eller-pedagog").only(["title", "_path", "image"]).find(),
          "$glHgySOkKa"
        );
      return (
        b({
          title:
            (r = e.value) != null && r.title
              ? `${
                  (l = e.value) == null ? void 0 : l.title
                } | Rädda Djuren-klubben`
              : "Rädda Djuren-klubben",
          link: [
            {
              hid: "canonical",
              rel: "canonical",
              href: x("/vuxen-eller-pedagog"),
            },
          ],
          meta: [
            {
              hid: "og:url",
              property: "og:url",
              content: "https://www.raddadjuren.se/vuxen-eller-pedagog",
            },
            {
              hid: "og:title",
              property: "og:title",
              content:
                (i = e.value) != null && i.title
                  ? `${
                      (p = e.value) == null ? void 0 : p.title
                    } | Rädda Djuren-klubben`
                  : "Rädda Djuren-klubben",
            },
            {
              hid: "description",
              property: "description",
              content:
                ((n = e.value) == null ? void 0 : n.metadescription) ||
                ((a = e.value) == null ? void 0 : a.preamble) ||
                "",
            },
            {
              hid: "og:description",
              property: "og:description",
              content:
                ((o = e.value) == null ? void 0 : o.metadescription) ||
                ((t = e.value) == null ? void 0 : t.preamble) ||
                "",
            },
          ],
        }),
        { page: e, articles: u }
      );
    },
  }),
  w = { key: 0, class: "page-vuxen-eller-pedagog" };
function R(e, u, r, l, i, p) {
  const n = $,
    a = j,
    o = D;
  return e.page
    ? (s(),
      c("div", w, [
        d(n, { class: "search", links: e.page.links }, null, 8, ["links"]),
        d(
          a,
          { class: "title", title: e.page.title, preamble: e.page.preamble },
          null,
          8,
          ["title", "preamble"]
        ),
        _("section", null, [
          _("ul", null, [
            (s(!0),
            c(
              f,
              null,
              k(
                e.articles,
                (t) => (
                  s(),
                  c("li", { key: t._path }, [
                    d(
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
    : h("", !0);
}
const M = y(N, [
  ["render", R],
  ["__scopeId", "data-v-bce1c09a"],
]);
export { M as default };
