import {
  A as g,
  m,
  e as k,
  q as _,
  o as s,
  I as c,
  O as u,
  ab as b,
  V as f,
  W as y,
  R as h,
  a7 as v,
} from "./entry.e50f0f50.js";
import { c as x } from "./urlTools.7e20410a.js";
import $ from "./PageSearch.11fca8a7.js";
import D from "./PageTitle.155ae597.js";
import j from "./InfoCard.9cb0375c.js";
import "./PageSearch.vue_vue_type_style_index_0_scoped_99e80430_lang.a8536c95.js";
import "./TagsList.91a9f417.js";
import "./InfoCard.vue_vue_type_style_index_0_scoped_b1c8dc52_lang.08b16729.js";
import "./AppImage.9bc8cdcc.js";
import "./nuxt-img.6cd8cff3.js";
const E = g({
    setup() {
      var l, r, i, p, n, a, o, t;
      const { data: e } = m(
          async () => _("portal-page/klubbnytt").findOne(),
          "$vFzG7xwefd"
        ),
        { data: d } = m(
          async () =>
            _("klubbnytt")
              .only(["title", "_path", "image"])
              .sort({ publishDate: -1 })
              .find(),
          "$VtNU4zgp63"
        );
      return (
        k({
          title:
            (l = e.value) != null && l.title
              ? `${
                  (r = e.value) == null ? void 0 : r.title
                } | R\xE4dda Djuren-klubben`
              : "R\xE4dda Djuren-klubben",
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
        { page: e, articles: d }
      );
    },
  }),
  N = { key: 0, class: "page-vuxen-eller-pedagog" };
function R(e, d, l, r, i, p) {
  const n = $,
    a = D,
    o = j;
  return e.page
    ? (s(),
      c("div", N, [
        u(n, { class: "search", links: e.page.links }, null, 8, ["links"]),
        u(
          a,
          { class: "title", title: e.page.title, preamble: e.page.preamble },
          null,
          8,
          ["title", "preamble"]
        ),
        b("section", null, [
          b("ul", null, [
            (s(!0),
            c(
              f,
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
const U = v(E, [
  ["render", R],
  ["__scopeId", "data-v-2ae14fb6"],
]);
export { U as default };
