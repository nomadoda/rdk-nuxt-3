import r from "./ContentSlot.e38eabf3.js";
import { f as o, h as f, l as u, a6 as c } from "./entry.e50f0f50.js";
const i = o({
  name: "Markdown",
  extends: r,
  setup(t) {
    const { parent: e } = c(),
      { between: n, default: a } = f(),
      s = u(() => (typeof t.unwrap == "string" ? t.unwrap.split(" ") : ["*"]));
    return { fallbackSlot: a, tags: s, between: n, parent: e };
  },
});
export { i as default };
