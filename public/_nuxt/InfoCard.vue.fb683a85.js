import { d as e } from "./entry.0b49aa71.js";
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
