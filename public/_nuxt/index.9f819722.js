import {
  d,
  x as m,
  j as c,
  o as u,
  b as _,
  f as s,
  L as g,
  g as b,
} from "./entry.0b49aa71.js";
import { q as f } from "./query.67962173.js";
import { c as k } from "./urlTools.cc793b8f.js";
import { _ as v } from "./PageSearch.843504e2.js";
import { _ as h } from "./LearnMoreBlock.8fe0159c.js";
import "./utils.925ea3fb.js";
import "./PageSearch.vue.5a8e761a.js";
import "./SearchInput.aed2bd52.js";
import "./SearchInput.vue.52b1c04f.js";
import "./AppLink.b4785ee2.js";
import "./AppLink.vue.4b20f2a7.js";
import "./nuxt-link.3942cc84.js";
import "./LearnMoreBlock.vue.46ad24ec.js";
import "./PageTitle.281ef5de.js";
import "./PageTitle.vue.97aebc27.js";
import "./AppImage.4fc7032c.js";
import "./AppImage.vue.1420cc05.js";
import "./client-only.9fc77d65.js";
const y = d({
    setup() {
      var o, n, a, i, p, t, r, l;
      const { data: e } = m(
        async () => f("portal-page/lar-dig-mer").findOne(),
        "$ljRuZKK0Od"
      );
      return (
        c({
          title:
            (o = e.value) != null && o.title
              ? `${
                  (n = e.value) == null ? void 0 : n.title
                } | Rädda Djuren-klubben`
              : "Rädda Djuren-klubben",
          link: [
            { hid: "canonical", rel: "canonical", href: k("/lar-dig-mer") },
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
                (a = e.value) != null && a.title
                  ? `${
                      (i = e.value) == null ? void 0 : i.title
                    } | Rädda Djuren-klubben`
                  : "Rädda Djuren-klubben",
            },
            {
              hid: "description",
              property: "description",
              content:
                ((p = e.value) == null ? void 0 : p.metadescription) ||
                ((t = e.value) == null ? void 0 : t.preamble) ||
                "",
            },
            {
              hid: "og:description",
              property: "og:description",
              content:
                ((r = e.value) == null ? void 0 : r.metadescription) ||
                ((l = e.value) == null ? void 0 : l.preamble) ||
                "",
            },
          ],
        }),
        { page: e }
      );
    },
  }),
  j = { key: 0, class: "page-lar-dig-mer" };
function $(e, o, n, a, i, p) {
  const t = v,
    r = h;
  return e.page
    ? (u(),
      _("div", j, [
        s(t, { class: "search", links: e.page.links }, null, 8, ["links"]),
        s(r, { title: e.page.title, preamble: e.page.preamble }, null, 8, [
          "title",
          "preamble",
        ]),
      ]))
    : g("", !0);
}
const z = b(y, [
  ["render", $],
  ["__scopeId", "data-v-3460b280"],
]);
export { z as default };
