import r from "./ContentSlot.c690c85b.js";
import { k as o, y as u, l as f, s as m } from "./entry.bc63e51a.js";
import "./utils.0216015b.js";
const l = o({
  name: "Markdown",
  extends: r,
  setup(t) {
    const { parent: e } = u(),
      { between: n, default: s } = f(),
      a = m(() => (typeof t.unwrap == "string" ? t.unwrap.split(" ") : ["*"]));
    return { fallbackSlot: s, tags: a, between: n, parent: e };
  },
});
export { l as default };
