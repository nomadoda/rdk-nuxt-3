import { d as t } from "./entry.0b49aa71.js";
const _ = t({
    props: {
      links: { type: Array, default: () => [] },
      moreLink: {
        type: Object,
        validator: (e) => !!e.linkText && !!e.url,
        default: () => {},
      },
    },
  }),
  n = t({
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
export { n as _, _ as a };
