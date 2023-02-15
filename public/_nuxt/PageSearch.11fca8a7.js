import { _ as t } from "./PageSearch.vue_vue_type_style_index_0_scoped_99e80430_lang.a8536c95.js";
import { o as a, I as _, O as o, ag as c, a7 as r } from "./entry.e50f0f50.js";
import i from "./TagsList.91a9f417.js";
const l = { class: "page-search" };
function p(n, m, k, u, d, f) {
  const s = c,
    e = i;
  return (
    a(),
    _("section", l, [
      o(s, { class: "search" }),
      o(
        e,
        {
          class: "links",
          links: n.links && n.links.length > 0 ? n.links : null,
          moreLink: n.moreLink,
        },
        null,
        8,
        ["links", "moreLink"]
      ),
    ])
  );
}
const L = r(t, [
  ["render", p],
  ["__scopeId", "data-v-99e80430"],
]);
export { L as default };
