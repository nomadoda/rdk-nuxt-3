import { _ as u } from "./AnimalSliderCard.vue.9c24a93c.js";
import { _ as m } from "./AppImage.1a4d91cf.js";
import { _ as f } from "./nuxt-link.b84c39ea.js";
import {
  o as a,
  b as n,
  a as o,
  S as _,
  L as h,
  f as i,
  w as d,
  N as k,
  O as b,
  M as p,
  e as c,
  J as $,
  K as y,
  g,
} from "./entry.bc63e51a.js";
const l = (e) => ($("data-v-2bb4687e"), (e = e()), y(), e),
  w = { class: "animal-slider-card" },
  B = { class: "front" },
  N = l(() => o("div", { class: "overlay__triangle" }, null, -1)),
  S = l(() => o("div", { class: "overlay__arrow" }, null, -1)),
  C = l(() => o("div", { class: "overlay__text" }, "Snabba fakta", -1)),
  F = [N, S, C],
  I = { class: "image aspect-w-16 aspect-h-9" },
  M = { class: "back" },
  V = { class: "facts" },
  L = l(() => o("div", { class: "overlay__arrow" }, null, -1)),
  z = [L],
  D = { class: "content" },
  E = { class: "card__header__title" },
  J = { class: "title" },
  K = { class: "latin" };
function O(e, s, T, j, q, A) {
  const v = m,
    r = f;
  return (
    a(),
    n("div", w, [
      o(
        "div",
        { class: _(["flip-container", { flipped: e.flipped }]) },
        [
          o(
            "div",
            {
              class: _([
                "flipper",
                e.hoveredFront
                  ? "hovered-front"
                  : e.hoveredBack
                  ? "hovered-back"
                  : "",
              ]),
            },
            [
              o("div", B, [
                e.hasFacts
                  ? (a(),
                    n(
                      "div",
                      {
                        key: 0,
                        class: "overlay",
                        onClick:
                          s[0] || (s[0] = (...t) => e.flip && e.flip(...t)),
                        onMouseenter:
                          s[1] || (s[1] = (t) => (e.hoveredFront = !0)),
                        onMouseleave:
                          s[2] || (s[2] = (t) => (e.hoveredFront = !1)),
                      },
                      F,
                      32
                    ))
                  : h("", !0),
                i(
                  r,
                  { to: e.animal._path },
                  {
                    default: d(() => [
                      o("div", I, [
                        i(
                          v,
                          {
                            "public-id": e.pubId,
                            crop: "fill",
                            width: "auto",
                            height: "400",
                          },
                          null,
                          8,
                          ["public-id"]
                        ),
                      ]),
                    ]),
                    _: 1,
                  },
                  8,
                  ["to"]
                ),
              ]),
              o("div", M, [
                o("ul", V, [
                  (a(!0),
                  n(
                    k,
                    null,
                    b(e.facts, (t) => (a(), n("li", { key: t }, p(t), 1))),
                    128
                  )),
                ]),
                i(
                  r,
                  { to: e.animal._path },
                  { default: d(() => [c("mer")]), _: 1 },
                  8,
                  ["to"]
                ),
                o(
                  "div",
                  {
                    class: "overlay",
                    onClick: s[3] || (s[3] = (...t) => e.flip && e.flip(...t)),
                    onMouseenter: s[4] || (s[4] = (t) => (e.hoveredBack = !0)),
                    onMouseleave: s[5] || (s[5] = (t) => (e.hoveredBack = !1)),
                  },
                  z,
                  32
                ),
              ]),
            ],
            2
          ),
        ],
        2
      ),
      o("div", D, [
        o("div", E, [
          i(
            r,
            { to: e.animal._path },
            {
              default: d(() => [
                o("h3", J, [
                  c(p(e.animal.species), 1),
                  o("span", K, p(e.animal.scientificName), 1),
                ]),
              ]),
              _: 1,
            },
            8,
            ["to"]
          ),
        ]),
      ]),
    ])
  );
}
const R = g(u, [
  ["render", O],
  ["__scopeId", "data-v-2bb4687e"],
]);
export { R as _ };
