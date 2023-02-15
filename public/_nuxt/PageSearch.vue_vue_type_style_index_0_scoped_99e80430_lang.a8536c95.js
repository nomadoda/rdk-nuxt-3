import { A as t } from "./entry.e50f0f50.js";
const _ = t({
  props: {
    title: { type: String, required: !0, default: "" },
    preamble: { type: String, default: "" },
    variant: { type: String, default: "standard" },
  },
});
const n = t({
    props: {
      links: { type: Array, default: () => [] },
      moreLink: {
        type: Object,
        validator: (e) => !!e.linkText && !!e.url,
        default: () => {},
      },
    },
  }),
  r = t({
    props: {
      links: {
        type: Array,
        required: !1,
        validator: (e) => e.length > 0,
        default: () => [],
      },
      moreLink: {
        type: Object,
        validator: (e) => !!e.linkText && !!e.url,
        default: () => {},
      },
      external: { type: Boolean, default: !1 },
    },
  });
export { n as _, _ as a, r as b };
