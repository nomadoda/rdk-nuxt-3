import { _ as n } from "./nuxt-link.b84c39ea.js";
import { k as a, o as r, c as s, w as f, z as _ } from "./entry.bc63e51a.js";
const u = a({
  __name: "ProseA",
  props: {
    href: { type: String, default: "" },
    blank: { type: Boolean, default: !1 },
  },
  setup(e) {
    return (t, l) => {
      const o = n;
      return (
        r(),
        s(
          o,
          { href: e.href },
          { default: f(() => [_(t.$slots, "default")]), _: 3 },
          8,
          ["href"]
        )
      );
    };
  },
});
export { u as default };
