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
} from "./entry.0b49aa71.js";
import { q as g } from "./query.67962173.js";
import { c as x } from "./urlTools.cc793b8f.js";
import { _ as $ } from "./PageSearch.843504e2.js";
import { _ as j } from "./PageTitle.281ef5de.js";
import { _ as D } from "./InfoCard.9ec6d7f2.js";
import "./utils.925ea3fb.js";
import "./PageSearch.vue.5a8e761a.js";
import "./SearchInput.aed2bd52.js";
import "./SearchInput.vue.52b1c04f.js";
import "./AppLink.b4785ee2.js";
import "./AppLink.vue.4b20f2a7.js";
import "./nuxt-link.3942cc84.js";
import "./PageTitle.vue.97aebc27.js";
import "./InfoCard.vue.fb683a85.js";
import "./AppImage.4fc7032c.js";
import "./AppImage.vue.1420cc05.js";
import "./client-only.9fc77d65.js";
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
