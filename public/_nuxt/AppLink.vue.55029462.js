import { d as t } from "./entry.bc63e51a.js";
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
