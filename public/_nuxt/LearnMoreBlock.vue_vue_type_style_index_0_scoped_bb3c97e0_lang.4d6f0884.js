import { A as t, m as n, l, q as s } from "./entry.e50f0f50.js";
const p = t({
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
const c = t({
  props: {
    articles: { default: null, type: Array },
    title: { default: "L\xE4r dig mer om", type: String },
    preamble: { default: null, type: String },
  },
  setup(a) {
    const { data: r } = n(
      async () =>
        s("lar-dig-mer")
          .where({ list: !0 })
          .only(["title", "_path", "image"])
          .find(),
      "$V2htthAmw5"
    );
    return {
      articles: l(() => {
        var e;
        return (e = a.articles) != null ? e : r.value;
      }),
    };
  },
});
export { c as _, p as a };
