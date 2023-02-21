import {
  d as g,
  x as m,
  j as f,
  o as s,
  b as c,
  f as u,
  a as _,
  N as k,
  O as y,
  L as h,
  g as v,
} from "./entry.bc63e51a.js";
import { q as b } from "./query.02b33be6.js";
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
const N = g({
    setup() {
      var r, i, l, p, n, a, o, t;
      const { data: e } = m(
          async () => b("portal-page/klubbnytt").findOne(),
          "$vFzG7xwefd"
        ),
        { data: d } = m(
          async () =>
            b("klubbnytt")
              .only(["title", "_path", "image"])
              .sort({ publishDate: -1 })
              .find(),
          "$VtNU4zgp63"
        );
      return (
        f({
          title:
            (r = e.value) != null && r.title
              ? `${
                  (i = e.value) == null ? void 0 : i.title
                } | Rädda Djuren-klubben`
              : "Rädda Djuren-klubben",
          link: [{ hid: "canonical", rel: "canonical", href: x("/klubbnytt") }],
          meta: [
            {
              hid: "og:url",
              property: "og:url",
              content: "https://www.raddadjuren.se/klubbnytt",
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
        { page: e, articles: d }
      );
    },
  }),
  w = { key: 0, class: "page-vuxen-eller-pedagog" };
function R(e, d, r, i, l, p) {
  const n = $,
    a = j,
    o = D;
  return e.page
    ? (s(),
      c("div", w, [
        u(n, { class: "search", links: e.page.links }, null, 8, ["links"]),
        u(
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
              k,
              null,
              y(
                e.articles,
                (t) => (
                  s(),
                  c("li", { key: t._path }, [
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
    : h("", !0);
}
const Q = v(N, [
  ["render", R],
  ["__scopeId", "data-v-2ae14fb6"],
]);
export { Q as default };
