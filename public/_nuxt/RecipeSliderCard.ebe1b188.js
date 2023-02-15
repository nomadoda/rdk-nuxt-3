import { a as c } from "./RecipeSlider.vue_vue_type_style_index_0_scoped_23ef5c26_lang.99e026dc.js";
import i from "./AppImage.9bc8cdcc.js";
import {
  o as p,
  I as d,
  ab as t,
  O as o,
  Z as s,
  X as r,
  af as l,
  N as m,
  a7 as h,
} from "./entry.e50f0f50.js";
import "./navigation.min.304073bc.js";
import "./nuxt-img.6cd8cff3.js";
const u = { class: "recipe-slider-card" },
  f = { class: "flip-container" },
  v = { class: "flipper" },
  $ = { class: "front" },
  x = { class: "image aspect-w-16 aspect-h-9" },
  b = { class: "content" },
  g = { class: "card__header__title" },
  k = { class: "title" };
function w(e, B, I, N, y, V) {
  const a = i,
    n = l,
    _ = m;
  return (
    p(),
    d("div", u, [
      t("div", f, [
        t("div", v, [
          t("div", $, [
            o(
              _,
              { to: e.recipe._path },
              {
                default: s(() => [
                  t("div", x, [
                    o(n, null, {
                      default: s(() => [
                        o(
                          a,
                          {
                            "public-id": e.pubId,
                            width: "auto",
                            height: "400",
                          },
                          null,
                          8,
                          ["public-id"]
                        ),
                      ]),
                      _: 1,
                    }),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["to"]
            ),
          ]),
        ]),
      ]),
      t("div", b, [
        t("div", g, [
          o(
            _,
            { to: e.recipe._path },
            { default: s(() => [t("h4", k, r(e.recipe.title), 1)]), _: 1 },
            8,
            ["to"]
          ),
        ]),
      ]),
    ])
  );
}
const X = h(c, [
  ["render", w],
  ["__scopeId", "data-v-5d5a9e4a"],
]);
export { X as default };
