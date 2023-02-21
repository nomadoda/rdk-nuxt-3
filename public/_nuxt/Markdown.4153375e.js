import r from "./ContentSlot.78aeb2e6.js";
import { k as o, y as u, l as f, s as m } from "./entry.0b49aa71.js";
import "./utils.925ea3fb.js";
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
