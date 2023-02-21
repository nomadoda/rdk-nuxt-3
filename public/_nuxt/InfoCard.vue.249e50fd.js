import { d as e } from "./entry.bc63e51a.js";
const r = e({
  props: {
    title: { type: String, required: !0 },
    image: { type: String, default: "" },
    author: { type: String, default: "" },
    link: { type: String, default: "" },
  },
  computed: {
    pubId() {
      return this.image.replace(/^\/+/, "");
    },
  },
});
export { r as _ };
