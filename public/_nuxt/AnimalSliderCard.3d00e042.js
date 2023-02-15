import { _ as u } from "./AnimalSliderCard.vue_vue_type_style_index_0_scoped_2bb4687e_lang.25a381c7.js";
import m from "./AppImage.9bc8cdcc.js";
import {
  o as t,
  I as n,
  ab as o,
  ae as _,
  R as f,
  O as i,
  Z as r,
  V as h,
  W as k,
  X as p,
  P as c,
  N as b,
  ac as $,
  ad as y,
  a7 as g,
} from "./entry.e50f0f50.js";
import "./nuxt-img.6cd8cff3.js";
const l = (e) => ($("data-v-2bb4687e"), (e = e()), y(), e),
  w = { class: "animal-slider-card" },
  B = { class: "front" },
  I = l(() => o("div", { class: "overlay__triangle" }, null, -1)),
  N = l(() => o("div", { class: "overlay__arrow" }, null, -1)),
  C = l(() => o("div", { class: "overlay__text" }, "Snabba fakta", -1)),
  F = [I, N, C],
  S = { class: "image aspect-w-16 aspect-h-9" },
  V = { class: "back" },
  M = { class: "facts" },
  z = l(() => o("div", { class: "overlay__arrow" }, null, -1)),
  D = [z],
  E = { class: "content" },
  L = { class: "card__header__title" },
  O = { class: "title" },
  P = { class: "latin" };
function R(e, s, T, W, X, Z) {
  const v = m,
    d = b;
  return (
    t(),
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
                  ? (t(),
                    n(
                      "div",
                      {
                        key: 0,
                        class: "overlay",
                        onClick:
                          s[0] || (s[0] = (...a) => e.flip && e.flip(...a)),
                        onMouseenter:
                          s[1] || (s[1] = (a) => (e.hoveredFront = !0)),
                        onMouseleave:
                          s[2] || (s[2] = (a) => (e.hoveredFront = !1)),
                      },
                      F,
                      32
                    ))
                  : f("", !0),
                i(
                  d,
                  { to: e.animal._path },
                  {
                    default: r(() => [
                      o("div", S, [
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
              o("div", V, [
                o("ul", M, [
                  (t(!0),
                  n(
                    h,
                    null,
                    k(e.facts, (a) => (t(), n("li", { key: a }, p(a), 1))),
                    128
                  )),
                ]),
                i(
                  d,
                  { to: e.animal._path },
                  { default: r(() => [c("mer")]), _: 1 },
                  8,
                  ["to"]
                ),
                o(
                  "div",
                  {
                    class: "overlay",
                    onClick: s[3] || (s[3] = (...a) => e.flip && e.flip(...a)),
                    onMouseenter: s[4] || (s[4] = (a) => (e.hoveredBack = !0)),
                    onMouseleave: s[5] || (s[5] = (a) => (e.hoveredBack = !1)),
                  },
                  D,
                  32
                ),
              ]),
            ],
            2
          ),
        ],
        2
      ),
      o("div", E, [
        o("div", L, [
          i(
            d,
            { to: e.animal._path },
            {
              default: r(() => [
                o("h3", O, [
                  c(p(e.animal.species), 1),
                  o("span", P, p(e.animal.scientificName), 1),
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
const H = g(u, [
  ["render", R],
  ["__scopeId", "data-v-2bb4687e"],
]);
export { H as default };
