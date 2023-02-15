import { _ as l } from "./LearnMoreBlock.vue_vue_type_style_index_0_scoped_bb3c97e0_lang.4d6f0884.js";
import _ from "./PageTitle.155ae597.js";
import m from "./ImageItem.7353df8b.js";
import {
  o,
  I as n,
  O as a,
  ab as s,
  X as p,
  V as c,
  W as u,
  R as d,
  a7 as f,
} from "./entry.e50f0f50.js";
import "./PageSearch.vue_vue_type_style_index_0_scoped_99e80430_lang.a8536c95.js";
import "./AppImage.9bc8cdcc.js";
import "./nuxt-img.6cd8cff3.js";
const k = { class: "learn-more-block" },
  g = { class: "preamble" },
  b = { key: 0 };
function h(e, $, V, v, y, B) {
  const r = _,
    i = m;
  return (
    o(),
    n("div", k, [
      a(r, { class: "title", title: e.title, variant: "pink" }, null, 8, [
        "title",
      ]),
      s("section", null, [
        s("p", g, p(e.preamble), 1),
        e.articles
          ? (o(),
            n("ul", b, [
              (o(!0),
              n(
                c,
                null,
                u(
                  e.articles,
                  (t) => (
                    o(),
                    n("li", { key: t._path }, [
                      a(
                        i,
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
          : d("", !0),
      ]),
    ])
  );
}
const L = f(l, [
  ["render", h],
  ["__scopeId", "data-v-bb3c97e0"],
]);
export { L as default };
