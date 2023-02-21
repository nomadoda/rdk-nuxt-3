import { _ as d, a as f } from "./PageSearch.vue.293e2aff.js";
import { _ as h } from "./SearchInput.ae3910f0.js";
import { _ as $ } from "./AppLink.ef6e30e4.js";
import {
  o as s,
  b as t,
  a as L,
  N as g,
  O as x,
  f as a,
  w as r,
  e as _,
  M as c,
  c as N,
  L as b,
  g as i,
} from "./entry.bc63e51a.js";
const B = { class: "tags-list" };
function T(e, l, p, m, u, k) {
  const o = $;
  return (
    s(),
    t("div", B, [
      L("ul", null, [
        (s(!0),
        t(
          g,
          null,
          x(
            e.links,
            (n) => (
              s(),
              t("li", { key: n.linkText.toLowerCase() }, [
                a(
                  o,
                  { class: "link", href: n.url },
                  { default: r(() => [_(c(n.linkText), 1)]), _: 2 },
                  1032,
                  ["href"]
                ),
              ])
            )
          ),
          128
        )),
      ]),
      e.moreLink
        ? (s(),
          N(
            o,
            { key: 0, class: "btn-more", href: e.moreLink.url },
            { default: r(() => [_(c(e.moreLink.linkText), 1)]), _: 1 },
            8,
            ["href"]
          ))
        : b("", !0),
    ])
  );
}
const V = i(d, [
    ["render", T],
    ["__scopeId", "data-v-6192b8be"],
  ]),
  v = { class: "page-search" };
function w(e, l, p, m, u, k) {
  const o = h,
    n = V;
  return (
    s(),
    t("section", v, [
      a(o, { class: "search" }),
      a(
        n,
        {
          class: "links",
          links: e.links && e.links.length > 0 ? e.links : null,
          moreLink: e.moreLink,
        },
        null,
        8,
        ["links", "moreLink"]
      ),
    ])
  );
}
const E = i(f, [
  ["render", w],
  ["__scopeId", "data-v-99e80430"],
]);
export { E as _ };
