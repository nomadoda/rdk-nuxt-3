import { A as e } from "./entry.e50f0f50.js";
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
