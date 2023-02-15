import { i as _ } from "./SearchResults.vue_vue_type_style_index_0_scoped_fbfddc59_lang.8d17b183.js";
import d from "./AppImage.9bc8cdcc.js";
import {
  o as t,
  I as p,
  c as o,
  Z as n,
  ab as s,
  O as r,
  R as a,
  X as u,
  P as m,
  af as f,
  N as h,
  a7 as b,
} from "./entry.e50f0f50.js";
import "./nuxt-img.6cd8cff3.js";
const k = {
    class:
      "flex flex-col bg-white rounded-md overflow-hidden items-center pb-0 w-full min-w-full",
  },
  w = { class: "w-48 h-60 overflow-hidden" },
  x = { class: "text-center font-bold px-2 py-2 w-2/3" },
  y = { class: "bg-pink p-3 w-full text-center font-bold rounded-sm" };
function g(e, v, I, N, $, B) {
  const c = d,
    i = f,
    l = h;
  return (
    t(),
    p("div", k, [
      e.link
        ? (t(),
          o(
            l,
            { key: 0, class: "pt-4 pb-2 px-5", to: e.link },
            {
              default: n(() => [
                e.image
                  ? (t(),
                    o(
                      i,
                      { key: 0 },
                      {
                        default: n(() => [
                          s("div", w, [
                            r(
                              c,
                              {
                                publicId: e.pubId,
                                width: "200",
                                height: "300",
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
                  : a("", !0),
              ]),
              _: 1,
            },
            8,
            ["to"]
          ))
        : a("", !0),
      s("h3", x, u(e.title), 1),
      s("div", y, [
        e.link
          ? (t(),
            o(
              l,
              { key: 0, class: "text-white w-full", to: e.link },
              { default: n(() => [m("Klubbnytt")]), _: 1 },
              8,
              ["to"]
            ))
          : a("", !0),
      ]),
    ])
  );
}
const K = b(_, [
  ["render", g],
  ["__scopeId", "data-v-b323ac02"],
]);
export { K as default };
