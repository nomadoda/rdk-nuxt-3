import { a7 as t, f as n, Q as o } from "./entry.e50f0f50.js";
const r = n({
  props: {
    code: { type: String, default: "" },
    language: { type: String, default: null },
    filename: { type: String, default: null },
    highlights: { type: Array, default: () => [] },
  },
});
function a(e, s, l, d, p, f) {
  return o(e.$slots, "default");
}
const _ = t(r, [["render", a]]);
export { _ as default };
