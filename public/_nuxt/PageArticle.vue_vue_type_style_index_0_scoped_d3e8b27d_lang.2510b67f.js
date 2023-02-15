import { A as e } from "./entry.e50f0f50.js";
const o = e({
  props: {
    coverCloudinaryId: { type: String, default: "" },
    document: { type: Object, default: null },
  },
  computed: {
    pubId() {
      return this.coverCloudinaryId.replace(/^\/+/, "");
    },
  },
});
export { o as _ };
