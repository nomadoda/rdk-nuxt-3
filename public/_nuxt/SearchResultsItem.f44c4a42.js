import { _ } from "./ContentNavigation.8cddbccb.js";
import i from "./AppImage.9bc8cdcc.js";
import {
  o as p,
  c as n,
  Z as s,
  ab as o,
  O as e,
  X as m,
  af as l,
  N as d,
  ac as u,
  ad as h,
  a7 as f,
} from "./entry.e50f0f50.js";
import "./SearchResults.vue_vue_type_style_index_0_scoped_fbfddc59_lang.8d17b183.js";
import "./nuxt-img.6cd8cff3.js";
import "./AnimalSlider.vue_vue_type_style_index_0_scoped_4ed309ee_lang.0e89288c.js";
import "./navigation.min.304073bc.js";
import "./AnimalSliderCard.vue_vue_type_style_index_0_scoped_2bb4687e_lang.25a381c7.js";
import "./LearnMoreBlock.vue_vue_type_style_index_0_scoped_bb3c97e0_lang.4d6f0884.js";
import "./InfoCard.vue_vue_type_style_index_0_scoped_b1c8dc52_lang.08b16729.js";
import "./PageSearch.vue_vue_type_style_index_0_scoped_99e80430_lang.a8536c95.js";
import "./PageArticle.vue_vue_type_style_index_0_scoped_d3e8b27d_lang.2510b67f.js";
import "./RecipeSlider.vue_vue_type_style_index_0_scoped_23ef5c26_lang.99e026dc.js";
import "./SourceListItem.vue_vue_type_style_index_0_scoped_764c6338_lang.767669ff.js";
import "./TransitionExpand.vue_vue_type_style_index_0_scoped_ab5478b5_lang.c2805c90.js";
import "./ContentDoc.e8eccf28.js";
import "./ContentQuery.9c156d7e.js";
import "./ContentList.7072a538.js";
import "./ContentSlot.e38eabf3.js";
import "./DocumentDrivenEmpty.e795f784.js";
import "./DocumentDrivenNotFound.76a147b1.js";
import "./Markdown.d042ba3f.js";
import "./ProseCode.a6213759.js";
const b = (t) => (u("data-v-d419bc37"), (t = t()), h(), t),
  I = { class: "search-result" },
  g = { class: "search-result__image-bg" },
  v = { class: "search-result__image" },
  x = { class: "search-result__content" },
  S = { class: "search-result__title" },
  $ = b(() =>
    o("a", { class: "btn search-result__button" }, "L\xE4r dig mer", -1)
  );
function w(t, k, B, N, y, V) {
  const r = i,
    a = l,
    c = d;
  return (
    p(),
    n(
      c,
      { class: "search-result-wrap", to: t._path },
      {
        default: s(() => [
          o("article", I, [
            o("div", g, [
              e(a, null, {
                default: s(() => [
                  o("div", v, [
                    e(
                      r,
                      { publicId: t.pubId, width: "400", height: "400" },
                      null,
                      8,
                      ["publicId"]
                    ),
                  ]),
                ]),
                _: 1,
              }),
            ]),
            o("div", x, [o("h3", S, m(t.title), 1)]),
            $,
          ]),
        ]),
        _: 1,
      },
      8,
      ["to"]
    )
  );
}
const Y = f(_, [
  ["render", w],
  ["__scopeId", "data-v-d419bc37"],
]);
export { Y as default };
