import { A as t } from "./entry.e50f0f50.js";
const n = t({
  props: { animal: { type: Object, required: !0 } },
  data() {
    return { flipped: !1, hoveredFront: !1, hoveredBack: !1 };
  },
  computed: {
    pubId() {
      return this.animal.image.replace(/^\/+/, "");
    },
    tags() {
      return this.animal.labels.map((e) => `#${e} `);
    },
    facts() {
      var e;
      return (e = this.animal["facts-block"]) == null ? void 0 : e.facts;
    },
    hasFacts() {
      var e;
      return ((e = this.facts) == null ? void 0 : e.length) > 0;
    },
  },
  methods: {
    flip() {
      this.flipped = !this.flipped;
    },
  },
});
export { n as _ };
