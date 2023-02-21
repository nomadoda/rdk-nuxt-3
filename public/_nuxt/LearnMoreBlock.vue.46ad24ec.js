import { d as e, x as a, s as n } from "./entry.0b49aa71.js";
import { q as s } from "./query.67962173.js";
const p = e({
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
const o = e({
  props: {
    articles: { default: null, type: Array },
    title: { default: "Lär dig mer om", type: String },
    preamble: { default: null, type: String },
  },
  setup(t) {
    const { data: r } = a(
      async () =>
        s("lar-dig-mer")
          .where({ list: !0 })
          .only(["title", "_path", "image"])
          .find(),
      "$V2htthAmw5"
    );
    return { articles: n(() => t.articles ?? r.value) };
  },
});
export { p as _, o as a };
