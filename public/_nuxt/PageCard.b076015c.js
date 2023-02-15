import { l as u } from "./SearchResults.vue_vue_type_style_index_0_scoped_fbfddc59_lang.8d17b183.js";
import f from "./AppImage.9bc8cdcc.js";
import {
  o as t,
  I as p,
  c as s,
  Z as o,
  ab as a,
  O as d,
  R as n,
  P as i,
  X as r,
  af as m,
  N as h,
  a7 as k,
} from "./entry.e50f0f50.js";
import "./nuxt-img.6cd8cff3.js";
const b = {
    class:
      "flex flex-col bg-white rounded-md overflow-hidden items-center pb-0 w-full min-w-full",
  },
  w = { class: "w-48 h-48 overflow-hidden rounded-full" },
  x = { class: "text-2xl text-left font-bold py-2 w-full pl-10 pr-20" },
  y = { key: 1, class: "w-full text-sm pl-10 pr-20 pb-10" },
  g = { class: "bg-pink p-3 w-full text-center font-bold rounded-sm" };
function v(e, I, N, $, B, V) {
  const _ = f,
    c = m,
    l = h;
  return (
    t(),
    p("div", b, [
      e.link
        ? (t(),
          s(
            l,
            { key: 0, class: "pt-4 pb-2 px-5", to: e.link },
            {
              default: o(() => [
                e.image
                  ? (t(),
                    s(
                      c,
                      { key: 0 },
                      {
                        default: o(() => [
                          a("div", w, [
                            d(
                              _,
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
                  : n("", !0),
              ]),
              _: 1,
            },
            8,
            ["to"]
          ))
        : n("", !0),
      a("h3", x, [
        d(
          l,
          { to: e.link },
          { default: o(() => [i(r(e.title), 1)]), _: 1 },
          8,
          ["to"]
        ),
      ]),
      e.preamble
        ? (t(),
          p("p", y, [
            d(
              l,
              { to: e.link },
              { default: o(() => [i(r(e.preamble), 1)]), _: 1 },
              8,
              ["to"]
            ),
          ]))
        : n("", !0),
      a("div", g, [
        e.link
          ? (t(),
            s(
              l,
              { key: 0, class: "text-white w-full", to: e.link },
              { default: o(() => [i("\u203A\u203A")]), _: 1 },
              8,
              ["to"]
            ))
          : n("", !0),
      ]),
    ])
  );
}
const P = k(u, [
  ["render", v],
  ["__scopeId", "data-v-4726867f"],
]);
export { P as default };
