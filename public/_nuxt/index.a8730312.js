import {
  A as v,
  m,
  e as b,
  q as _,
  o as s,
  I as c,
  O as d,
  ab as g,
  V as x,
  W as k,
  R as f,
  a7 as h,
} from "./entry.e50f0f50.js";
import { c as y } from "./urlTools.7e20410a.js";
import $ from "./PageSearch.11fca8a7.js";
import j from "./PageTitle.155ae597.js";
import D from "./InfoCard.9cb0375c.js";
import "./PageSearch.vue_vue_type_style_index_0_scoped_99e80430_lang.a8536c95.js";
import "./TagsList.91a9f417.js";
import "./InfoCard.vue_vue_type_style_index_0_scoped_b1c8dc52_lang.08b16729.js";
import "./AppImage.9bc8cdcc.js";
import "./nuxt-img.6cd8cff3.js";
const E = v({
    setup() {
      var l, r, i, p, n, a, o, t;
      const { data: e } = m(
          async () => _("portal-page/vuxen-eller-pedagog").findOne(),
          "$JKw2xxjDlY"
        ),
        { data: u } = m(
          async () =>
            _("vuxen-eller-pedagog").only(["title", "_path", "image"]).find(),
          "$glHgySOkKa"
        );
      return (
        b({
          title:
            (l = e.value) != null && l.title
              ? `${
                  (r = e.value) == null ? void 0 : r.title
                } | R\xE4dda Djuren-klubben`
              : "R\xE4dda Djuren-klubben",
          link: [
            {
              hid: "canonical",
              rel: "canonical",
              href: y("/vuxen-eller-pedagog"),
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
                    } | R\xE4dda Djuren-klubben`
                  : "R\xE4dda Djuren-klubben",
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
  R = { key: 0, class: "page-vuxen-eller-pedagog" };
function w(e, u, l, r, i, p) {
  const n = $,
    a = j,
    o = D;
  return e.page
    ? (s(),
      c("div", R, [
        d(n, { class: "search", links: e.page.links }, null, 8, ["links"]),
        d(
          a,
          { class: "title", title: e.page.title, preamble: e.page.preamble },
          null,
          8,
          ["title", "preamble"]
        ),
        g("section", null, [
          g("ul", null, [
            (s(!0),
            c(
              x,
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
    : f("", !0);
}
const F = h(E, [
  ["render", w],
  ["__scopeId", "data-v-bce1c09a"],
]);
export { F as default };
