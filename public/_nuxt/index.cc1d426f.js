import {
  A as d,
  m as c,
  e as m,
  q as u,
  o as _,
  I as g,
  O as s,
  R as b,
  a7 as k,
} from "./entry.e50f0f50.js";
import { c as v } from "./urlTools.7e20410a.js";
import f from "./PageSearch.11fca8a7.js";
import h from "./LearnMoreBlock.1a73c92d.js";
import "./PageSearch.vue_vue_type_style_index_0_scoped_99e80430_lang.a8536c95.js";
import "./TagsList.91a9f417.js";
import "./LearnMoreBlock.vue_vue_type_style_index_0_scoped_bb3c97e0_lang.4d6f0884.js";
import "./PageTitle.155ae597.js";
import "./ImageItem.7353df8b.js";
import "./AppImage.9bc8cdcc.js";
import "./nuxt-img.6cd8cff3.js";
const y = d({
    setup() {
      var r, a, o, i, l, t, n, p;
      const { data: e } = c(
        async () => u("portal-page/lar-dig-mer").findOne(),
        "$ljRuZKK0Od"
      );
      return (
        m({
          title:
            (r = e.value) != null && r.title
              ? `${
                  (a = e.value) == null ? void 0 : a.title
                } | R\xE4dda Djuren-klubben`
              : "R\xE4dda Djuren-klubben",
          link: [
            { hid: "canonical", rel: "canonical", href: v("/lar-dig-mer") },
          ],
          meta: [
            {
              hid: "og:url",
              property: "og:url",
              content: "https://www.raddadjuren.se/lar-dig-mer",
            },
            {
              hid: "og:title",
              property: "og:title",
              content:
                (o = e.value) != null && o.title
                  ? `${
                      (i = e.value) == null ? void 0 : i.title
                    } | R\xE4dda Djuren-klubben`
                  : "R\xE4dda Djuren-klubben",
            },
            {
              hid: "description",
              property: "description",
              content:
                ((l = e.value) == null ? void 0 : l.metadescription) ||
                ((t = e.value) == null ? void 0 : t.preamble) ||
                "",
            },
            {
              hid: "og:description",
              property: "og:description",
              content:
                ((n = e.value) == null ? void 0 : n.metadescription) ||
                ((p = e.value) == null ? void 0 : p.preamble) ||
                "",
            },
          ],
        }),
        { page: e }
      );
    },
  }),
  x = { key: 0, class: "page-lar-dig-mer" };
function $(e, r, a, o, i, l) {
  const t = f,
    n = h;
  return e.page
    ? (_(),
      g("div", x, [
        s(t, { class: "search", links: e.page.links }, null, 8, ["links"]),
        s(n, { title: e.page.title, preamble: e.page.preamble }, null, 8, [
          "title",
          "preamble",
        ]),
      ]))
    : b("", !0);
}
const I = k(y, [
  ["render", $],
  ["__scopeId", "data-v-3460b280"],
]);
export { I as default };
