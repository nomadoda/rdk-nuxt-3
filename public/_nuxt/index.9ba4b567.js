import {
  A as k,
  m as h,
  e as j,
  q as b,
  o as s,
  I as d,
  O as u,
  ab as g,
  V as f,
  W as v,
  R as y,
  a7 as x,
} from "./entry.e50f0f50.js";
import { c as $ } from "./urlTools.7e20410a.js";
import E from "./PageSearch.11fca8a7.js";
import D from "./PageTitle.155ae597.js";
import R from "./InfoCard.9cb0375c.js";
import "./PageSearch.vue_vue_type_style_index_0_scoped_99e80430_lang.a8536c95.js";
import "./TagsList.91a9f417.js";
import "./InfoCard.vue_vue_type_style_index_0_scoped_b1c8dc52_lang.08b16729.js";
import "./AppImage.9bc8cdcc.js";
import "./nuxt-img.6cd8cff3.js";
const w = k({
    setup() {
      var l, r, i, p, n, a, o, t, m, _;
      const { data: e } = h(
          async () => b("portal-page/hjalp-djuren").findOne(),
          "$p7Loo5bHwX"
        ),
        { data: c } = h(
          async () =>
            b("hjalp-djuren")
              .where({ list: !0 })
              .only(["title", "_path", "image"])
              .find(),
          "$qhIcnHk8Ek"
        );
      return (
        j({
          title:
            (l = e.value) != null && l.title
              ? `${
                  (r = e.value) == null ? void 0 : r.title
                } | R\xE4dda Djuren-klubben`
              : "R\xE4dda Djuren-klubben",
          link: [
            { hid: "canonical", rel: "canonical", href: $("/hjalp-djuren") },
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
                (i = e.value) != null && i.title
                  ? `${
                      (p = e.value) == null ? void 0 : p.title
                    } | R\xE4dda Djuren-klubben`
                  : "R\xE4dda Djuren-klubben",
            },
            {
              hid: "title",
              property: "title",
              content:
                (n = e.value) != null && n.title
                  ? `${
                      (a = e.value) == null ? void 0 : a.title
                    } | R\xE4dda Djuren-klubben`
                  : "R\xE4dda Djuren-klubben",
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
  N = { key: 0, class: "page-hjalp-djuren" };
function V(e, c, l, r, i, p) {
  const n = E,
    a = D,
    o = R;
  return e.page
    ? (s(),
      d("div", N, [
        u(n, { class: "search", links: e.page.links }, null, 8, ["links"]),
        u(
          a,
          { class: "title", title: e.page.title, preamble: e.page.preamble },
          null,
          8,
          ["title", "preamble"]
        ),
        g("section", null, [
          g("ul", null, [
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
const W = x(w, [
  ["render", V],
  ["__scopeId", "data-v-bd69734a"],
]);
export { W as default };
