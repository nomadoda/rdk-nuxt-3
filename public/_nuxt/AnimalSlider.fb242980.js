import { _ as c } from "./AnimalSlider.vue_vue_type_style_index_0_scoped_4ed309ee_lang.0e89288c.js";
import d from "./AnimalSliderCard.3d00e042.js";
import {
  U as s,
  o as t,
  I as r,
  O as a,
  Z as o,
  c as i,
  V as u,
  W as f,
  R as k,
  af as w,
  a7 as v,
} from "./entry.e50f0f50.js";
import "./navigation.min.304073bc.js";
import "./AnimalSliderCard.vue_vue_type_style_index_0_scoped_2bb4687e_lang.25a381c7.js";
import "./AppImage.9bc8cdcc.js";
import "./nuxt-img.6cd8cff3.js";
const h = { class: "relative min-h-slider flex items-center" };
function b(e, x, $, g, y, B) {
  const l = d,
    _ = s("swiper-slide"),
    p = s("swiper"),
    m = w;
  return (
    t(),
    r("div", h, [
      a(m, null, {
        default: o(() => [
          e.animals.length > 0
            ? (t(),
              i(
                p,
                {
                  key: 0,
                  modules: e.modules,
                  "slides-per-view": 1.2,
                  "space-between": 16,
                  "centered-slides": !0,
                  loop: !0,
                  breakpoints: e.breakpoints,
                  navigation: !0,
                },
                {
                  default: o(() => [
                    (t(!0),
                    r(
                      u,
                      null,
                      f(
                        e.animals,
                        (n) => (
                          t(),
                          i(
                            _,
                            { key: n._id },
                            {
                              default: o(() => [
                                a(l, { class: "h-full", animal: n }, null, 8, [
                                  "animal",
                                ]),
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
                ["modules", "slides-per-view", "breakpoints"]
              ))
            : k("", !0),
        ]),
        _: 1,
      }),
    ])
  );
}
const O = v(c, [
  ["render", b],
  ["__scopeId", "data-v-4ed309ee"],
]);
export { O as default };
