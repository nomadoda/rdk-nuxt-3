import { d as e } from "./entry.0b49aa71.js";
const d = e({
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
export { d as _ };
