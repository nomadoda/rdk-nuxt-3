/* empty css                      */ import {
  g as t,
  k as r,
  z as n,
} from "./entry.bc63e51a.js";
const o = r({
  props: {
    code: { type: String, default: "" },
    language: { type: String, default: null },
    filename: { type: String, default: null },
    highlights: { type: Array, default: () => [] },
  },
});
function a(e, s, l, p, d, f) {
  return n(e.$slots, "default");
}
const c = t(o, [["render", a]]);
export { c as default };
