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
} from "./entry.0b49aa71.js";
import { q as b } from "./query.67962173.js";
import { c as D } from "./urlTools.cc793b8f.js";
import { _ as x } from "./PageSearch.843504e2.js";
import { _ as R } from "./PageTitle.281ef5de.js";
import { _ as w } from "./InfoCard.9ec6d7f2.js";
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
