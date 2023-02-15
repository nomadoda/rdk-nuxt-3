import { a as i } from "./LearnMoreBlock.vue_vue_type_style_index_0_scoped_bb3c97e0_lang.4d6f0884.js";
import p from "./AppImage.9bc8cdcc.js";
import {
  o as e,
  c as o,
  Z as n,
  O as m,
  ab as a,
  R as r,
  X as l,
  af as u,
  N as d,
  a7 as f,
} from "./entry.e50f0f50.js";
import "./nuxt-img.6cd8cff3.js";
const g = { class: "image-item__image" };
function h(t, k, x, $, b, I) {
  const _ = p,
    s = u,
    c = d;
  return (
    e(),
    o(
      c,
      { class: "image-item", to: t.link },
      {
        default: n(() => [
          m(s, null, {
            default: n(() => [
              a("div", g, [
                t.image
                  ? (e(),
                    o(
                      _,
                      {
                        key: 0,
                        publicId: t.pubId,
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
          a("h3", null, l(t.title), 1),
        ]),
        _: 1,
      },
      8,
      ["to"]
    )
  );
}
const v = f(i, [
  ["render", h],
  ["__scopeId", "data-v-c142aec9"],
]);
export { v as default };
