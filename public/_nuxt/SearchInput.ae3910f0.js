import { _ as n } from "./SearchInput.vue.750aef33.js";
import {
  o as r,
  b as a,
  a as t,
  I as i,
  J as l,
  K as p,
  g as d,
} from "./entry.bc63e51a.js";
const u = (e) => (l("data-v-41d27b79"), (e = e()), p(), e),
  c = { class: "search-input" },
  m = u(() =>
    t(
      "path",
      {
        "fill-rule": "evenodd",
        d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
        "clip-rule": "evenodd",
      },
      null,
      -1
    )
  ),
  v = [m],
  h = ["value"];
function _(e, o, f, b, I, k) {
  return (
    r(),
    a("div", c, [
      t(
        "form",
        {
          onSubmit:
            o[2] ||
            (o[2] = i((...s) => e.submit && e.submit(...s), ["prevent"])),
        },
        [
          (r(),
          a(
            "svg",
            {
              class: "search w-6 h-6 search-icon",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              onClick: o[0] || (o[0] = (...s) => e.submit && e.submit(...s)),
            },
            v
          )),
          t(
            "input",
            {
              type: "search",
              value: e.searchTerm,
              placeholder: "Sök på djur, fakta, vego eller tips ...",
              onInput:
                o[1] || (o[1] = (s) => (e.searchTerm = s.currentTarget.value)),
            },
            null,
            40,
            h
          ),
        ],
        32
      ),
    ])
  );
}
const w = d(n, [
  ["render", _],
  ["__scopeId", "data-v-41d27b79"],
]);
export { w as _ };
