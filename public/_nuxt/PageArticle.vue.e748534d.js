import { d as e } from "./entry.bc63e51a.js";
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
