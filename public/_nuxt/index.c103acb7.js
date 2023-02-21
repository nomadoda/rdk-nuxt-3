import {
  d,
  x as m,
  j as c,
  o as u,
  b as _,
  f as s,
  L as g,
  g as b,
} from "./entry.bc63e51a.js";
import { q as f } from "./query.02b33be6.js";
import { c as k } from "./urlTools.cc793b8f.js";
import { _ as v } from "./PageSearch.47a8baba.js";
import { _ as h } from "./LearnMoreBlock.e93724f5.js";
import "./utils.0216015b.js";
import "./PageSearch.vue.293e2aff.js";
import "./SearchInput.ae3910f0.js";
import "./SearchInput.vue.750aef33.js";
import "./AppLink.ef6e30e4.js";
import "./AppLink.vue.55029462.js";
import "./nuxt-link.b84c39ea.js";
import "./LearnMoreBlock.vue.18936011.js";
import "./PageTitle.a79fb585.js";
import "./PageTitle.vue.14c34ae6.js";
import "./AppImage.1a4d91cf.js";
import "./AppImage.vue.fa386efd.js";
import "./client-only.9e138b79.js";
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
