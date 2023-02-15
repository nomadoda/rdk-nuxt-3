import { _ as m } from "./RecipeSlider.vue_vue_type_style_index_0_scoped_23ef5c26_lang.99e026dc.js";
import d from "./RecipeSliderCard.ebe1b188.js";
import {
  U as r,
  o as e,
  I as s,
  O as a,
  Z as o,
  c as _,
  V as u,
  W as f,
  R as w,
  af as v,
  a7 as k,
} from "./entry.e50f0f50.js";
import "./navigation.min.304073bc.js";
import "./AppImage.9bc8cdcc.js";
import "./nuxt-img.6cd8cff3.js";
const $ = { class: "relative mb-8" };
function h(t, x, g, y, B, C) {
  const c = d,
    p = r("swiper-slide"),
    i = r("swiper"),
    l = v;
  return (
    e(),
    s("div", $, [
      a(l, null, {
        default: o(() => [
          t.recipes.length > 0
            ? (e(),
              _(
                i,
                {
                  key: 0,
                  ref: "swiper",
                  modules: t.modules,
                  "slides-per-view": 1,
                  "space-between": 8,
                  "centered-slides": !0,
                  loop: !0,
                  navigation: !0,
                },
                {
                  default: o(() => [
                    (e(!0),
                    s(
                      u,
                      null,
                      f(
                        t.recipes,
                        (n) => (
                          e(),
                          _(
                            p,
                            { key: n._id },
                            {
                              default: o(() => [
                                a(c, { recipe: n }, null, 8, ["recipe"]),
                              ]),
                              _: 2,
                            },
                            1024
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                  _: 1,
                },
                8,
                ["modules"]
              ))
            : w("", !0),
        ]),
        _: 1,
      }),
    ])
  );
}
const L = k(m, [
  ["render", h],
  ["__scopeId", "data-v-23ef5c26"],
]);
export { L as default };
