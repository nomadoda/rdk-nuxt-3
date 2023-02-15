import { f as p } from "./SearchResults.vue_vue_type_style_index_0_scoped_fbfddc59_lang.8d17b183.js";
import _ from "./Sidebar.a81ef872.js";
import {
  U as h,
  o as u,
  c as f,
  Z as d,
  ab as e,
  ae as l,
  ai as n,
  O as r,
  aj as c,
  ac as b,
  ad as m,
  a7 as F,
} from "./entry.e50f0f50.js";
const s = (t) => (b("data-v-24d28ea3"), (t = t()), m(), t),
  w = { class: "content" },
  C = s(() => e("h5", null, "Jag vill se ...", -1)),
  $ = s(() => e("h5", null, "Som bor ...", -1)),
  V = s(() => e("h5", null, "Inneh\xE5ll eller omr\xE5de", -1)),
  k = { class: "tab-bar" },
  A = s(() =>
    e(
      "svg",
      { class: "icon w-6 h-6", viewBox: "0 0 20 20", fill: "currentColor" },
      [
        e("path", {
          "fill-rule": "evenodd",
          d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
          "clip-rule": "evenodd",
        }),
      ],
      -1
    )
  ),
  B = s(() => e("span", { class: "text" }, "Djur", -1)),
  I = [A, B],
  L = s(() =>
    e(
      "svg",
      { class: "icon w-6 h-6", viewBox: "0 0 20 20", fill: "currentColor" },
      [
        e("path", {
          "fill-rule": "evenodd",
          d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
          "clip-rule": "evenodd",
        }),
      ],
      -1
    )
  ),
  S = s(() => e("span", { class: "text" }, "Plats", -1)),
  g = [L, S],
  y = s(() =>
    e(
      "svg",
      { class: "icon w-6 h-6", viewBox: "0 0 20 20", fill: "currentColor" },
      [
        e("path", {
          "fill-rule": "evenodd",
          d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
          "clip-rule": "evenodd",
        }),
      ],
      -1
    )
  ),
  z = s(() => e("span", { class: "text" }, "Inneh\xE5ll", -1)),
  T = [y, z];
function M(t, o, j, x, D, N) {
  const a = h("ais-refinement-list"),
    v = _;
  return (
    u(),
    f(
      v,
      {
        class: "filter-sidebar",
        title: "S\xF6kfilter",
        onClose: o[3] || (o[3] = (i) => t.$emit("close")),
      },
      {
        footer: d(() => [
          e("div", k, [
            e(
              "button",
              {
                class: l([
                  "tab whitespace-nowrap",
                  { active: t.activeFilter === "seeFilters" },
                ]),
                onClick:
                  o[0] || (o[0] = (i) => (t.activeFilter = "seeFilters")),
              },
              I,
              2
            ),
            e(
              "button",
              {
                class: l([
                  "tab whitespace-nowrap",
                  { active: t.activeFilter === "habitatFilters" },
                ]),
                onClick:
                  o[1] || (o[1] = (i) => (t.activeFilter = "habitatFilters")),
              },
              g,
              2
            ),
            e(
              "button",
              {
                class: l([
                  "tab whitespace-nowrap",
                  { active: t.activeFilter === "contentType" },
                ]),
                onClick:
                  o[2] || (o[2] = (i) => (t.activeFilter = "contentType")),
              },
              T,
              2
            ),
          ]),
        ]),
        default: d(() => [
          e("template", null, [
            e("div", w, [
              n(e("div", null, [C, r(a, { attribute: "seeFilters" })], 512), [
                [c, t.activeFilter === "seeFilters"],
              ]),
              n(
                e("div", null, [$, r(a, { attribute: "habitatFilters" })], 512),
                [[c, t.activeFilter === "habitatFilters"]]
              ),
              n(e("div", null, [V, r(a, { attribute: "contentType" })], 512), [
                [c, t.activeFilter === "contentType"],
              ]),
            ]),
          ]),
        ]),
        _: 1,
      }
    )
  );
}
const U = F(p, [
  ["render", M],
  ["__scopeId", "data-v-24d28ea3"],
]);
export { U as default };
