import { _ as $, a as k } from "./LearnMoreBlock.vue.46ad24ec.js";
import { _ as b } from "./PageTitle.281ef5de.js";
import { _ as v } from "./AppImage.4fc7032c.js";
import { _ as y } from "./client-only.9fc77d65.js";
import { _ as I } from "./nuxt-link.3942cc84.js";
import {
  o as n,
  c,
  w as l,
  f as i,
  a,
  L as r,
  M as m,
  g as p,
  b as o,
  N as x,
  O as B,
} from "./entry.0b49aa71.js";
const N = { class: "image-item__image" };
function w(e, u, d, f, g, h) {
  const _ = v,
    s = y,
    t = I;
  return (
    n(),
    c(
      t,
      { class: "image-item", to: e.link },
      {
        default: l(() => [
          i(s, null, {
            default: l(() => [
              a("div", N, [
                e.image
                  ? (n(),
                    c(
                      _,
                      {
                        key: 0,
                        publicId: e.pubId,
                        width: "200",
                        height: "200",
                      },
                      null,
                      8,
                      ["publicId"]
                    ))
                  : r("", !0),
              ]),
            ]),
            _: 1,
          }),
          a("h3", null, m(e.title), 1),
        ]),
        _: 1,
      },
      8,
      ["to"]
    )
  );
}
const V = p($, [
    ["render", w],
    ["__scopeId", "data-v-c142aec9"],
  ]),
  C = { class: "learn-more-block" },
  L = { class: "preamble" },
  D = { key: 0 };
function E(e, u, d, f, g, h) {
  const _ = b,
    s = V;
  return (
    n(),
    o("div", C, [
      i(_, { class: "title", title: e.title, variant: "pink" }, null, 8, [
        "title",
      ]),
      a("section", null, [
        a("p", L, m(e.preamble), 1),
        e.articles
          ? (n(),
            o("ul", D, [
              (n(!0),
              o(
                x,
                null,
                B(
                  e.articles,
                  (t) => (
                    n(),
                    o("li", { key: t._path }, [
                      i(
                        s,
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
            ]))
          : r("", !0),
      ]),
    ])
  );
}
const z = p(k, [
  ["render", E],
  ["__scopeId", "data-v-bb3c97e0"],
]);
export { z as _ };
