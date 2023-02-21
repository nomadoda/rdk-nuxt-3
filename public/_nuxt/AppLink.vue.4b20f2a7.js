import { d as t } from "./entry.0b49aa71.js";
const r = t({
  props: {
    external: { default: !1, type: Boolean },
    href: { default: null, type: String },
  },
  computed: {
    hrefIsExternal() {
      return this.href.startsWith("http");
    },
  },
});
export { r as _ };
