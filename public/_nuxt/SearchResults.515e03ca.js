import { _ as u } from "./SearchResults.vue_vue_type_style_index_0_scoped_fbfddc59_lang.8d17b183.js";
import g from "./AnimalSliderCard.3d00e042.js";
import k from "./LearnMoreCard.ed396117.js";
import h from "./MagazineCard.b0205bf6.js";
import f from "./AdultCard.48aac999.js";
import b from "./ActivistCard.9fbe7622.js";
import $ from "./PageCard.b076015c.js";
import {
  o as t,
  I as i,
  ab as o,
  X as s,
  R as m,
  V as x,
  W as j,
  c as l,
  a7 as v,
} from "./entry.e50f0f50.js";
import "./AnimalSliderCard.vue_vue_type_style_index_0_scoped_2bb4687e_lang.25a381c7.js";
import "./AppImage.9bc8cdcc.js";
import "./nuxt-img.6cd8cff3.js";
const B = { class: "search-results" },
  I = { class: "search-results__header" },
  V = { key: 0 },
  q = { class: "results" },
  D = { key: 0 },
  N = { key: 1 },
  z = { class: "search-results__items" };
function C(a, E, F, L, R, S) {
  const n = g,
    _ = k,
    r = h,
    p = f,
    c = b,
    d = $;
  return (
    t(),
    i("section", B, [
      o("div", I, [
        a.query ? (t(), i("h2", V, s(a.query), 1)) : m("", !0),
        o("p", q, [
          a.hits.length === 0
            ? (t(),
              i(
                "span",
                D,
                "Inga tr\xE4ffar. Testa att rensa filter, bredda din s\xF6kning eller s\xF6ka p\xE5 n\xE5got annat"
              ))
            : (t(),
              i(
                "span",
                N,
                s(
                  `${a.hits.length} ${
                    a.hits.length === 1 ? "tr\xE4ff" : "tr\xE4ffar"
                  }`
                ),
                1
              )),
        ]),
      ]),
      o("ul", z, [
        (t(!0),
        i(
          x,
          null,
          j(
            a.hits,
            (e) => (
              t(),
              i("li", { key: e.objectID }, [
                e.dir === "/djurfakta"
                  ? (t(), l(n, { key: 0, animal: e }, null, 8, ["animal"]))
                  : e.dir === "/lar-dig-mer"
                  ? (t(),
                    l(
                      _,
                      {
                        key: 1,
                        preamble: e.preamble,
                        title: e.title,
                        image: e.image,
                        link: e.path,
                      },
                      null,
                      8,
                      ["preamble", "title", "image", "link"]
                    ))
                  : e.dir === "/klubbnytt"
                  ? (t(),
                    l(
                      r,
                      {
                        key: 2,
                        preamble: e.preamble,
                        title: e.title,
                        image: e.image,
                        link: e.path,
                      },
                      null,
                      8,
                      ["preamble", "title", "image", "link"]
                    ))
                  : e.dir === "/vuxen-eller-pedagog"
                  ? (t(),
                    l(
                      p,
                      {
                        key: 3,
                        preamble: e.preamble,
                        title: e.title,
                        image: e.image,
                        link: e.path,
                      },
                      null,
                      8,
                      ["preamble", "title", "image", "link"]
                    ))
                  : e.dir === "/hjalp-djuren"
                  ? (t(),
                    l(
                      c,
                      {
                        key: 4,
                        preamble: e.preamble,
                        title: e.title,
                        image: e.image,
                        link: e.path,
                      },
                      null,
                      8,
                      ["preamble", "title", "image", "link"]
                    ))
                  : e.dir === "/pages"
                  ? (t(),
                    l(
                      d,
                      {
                        key: 5,
                        preamble: e.preamble,
                        title: e.title,
                        image: e.image,
                        link: e.path,
                      },
                      null,
                      8,
                      ["preamble", "title", "image", "link"]
                    ))
                  : m("", !0),
              ])
            )
          ),
          128
        )),
      ]),
    ])
  );
}
const P = v(u, [
  ["render", C],
  ["__scopeId", "data-v-fbfddc59"],
]);
export { P as default };
