import { j as i } from "./SearchResults.vue_vue_type_style_index_0_scoped_fbfddc59_lang.8d17b183.js";
import _ from "./AppImage.9bc8cdcc.js";
import {
  o as t,
  I as r,
  c as o,
  Z as n,
  ab as s,
  O as p,
  R as l,
  X as u,
  P as m,
  af as f,
  N as h,
  a7 as k,
} from "./entry.e50f0f50.js";
import "./nuxt-img.6cd8cff3.js";
const w = {
    class:
      "flex flex-col bg-white rounded-md overflow-hidden items-center pb-0 w-full min-w-full",
  },
  b = { class: "w-48 h-48 overflow-hidden rounded-full" },
  x = { class: "text-center font-bold px-2 py-2 w-2/3" },
  g = { class: "bg-pink p-3 w-full text-center font-bold rounded-sm" };
function v(e, y, $, I, N, V) {
  const d = _,
    c = f,
    a = h;
  return (
    t(),
    r("div", w, [
      e.link
        ? (t(),
          o(
            a,
            { key: 0, class: "pt-4 pb-2 px-5", to: e.link },
            {
              default: n(() => [
                e.image
                  ? (t(),
                    o(
                      c,
                      { key: 0 },
                      {
                        default: n(() => [
                          s("div", b, [
                            p(
                              d,
                              {
                                publicId: e.pubId,
                                width: "200",
                                height: "200",
                              },
                              null,
                              8,
                              ["publicId"]
                            ),
                          ]),
                        ]),
                        _: 1,
                      }
                    ))
                  : l("", !0),
              ]),
              _: 1,
            },
            8,
            ["to"]
          ))
        : l("", !0),
      s("h3", x, u(e.title), 1),
      s("div", g, [
        e.link
          ? (t(),
            o(
              a,
              { key: 0, class: "text-white w-full", to: e.link },
              { default: n(() => [m("Vuxen eller pedagog")]), _: 1 },
              8,
              ["to"]
            ))
          : l("", !0),
      ]),
    ])
  );
}
const E = k(i, [
  ["render", v],
  ["__scopeId", "data-v-d5dc2f4b"],
]);
export { E as default };
