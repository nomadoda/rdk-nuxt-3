import { d as r } from "./entry.bc63e51a.js";
const i = r({
  inheritAttrs: !1,
  props: {
    publicId: { type: String, required: !0 },
    dpr: { type: String, default: "auto" },
    crop: { type: String, default: "lfill" },
    gravity: { type: String, default: "faces" },
    responsive: {
      type: String,
      default: null,
      validator: (t) => ["width"].includes(t),
    },
  },
  computed: {
    modifiers() {
      return { c: this.crop, dpr: this.dpr, gravity: this.gravity };
    },
    sizes() {
      return this.responsive === "width"
        ? "xs:100vw sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw 3xl:100vw"
        : null;
    },
  },
});
export { i as _ };
