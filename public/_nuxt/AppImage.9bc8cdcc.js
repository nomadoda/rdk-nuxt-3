import { _ as e, c as r } from "./nuxt-img.6cd8cff3.js";
import { o as n, c as i, ah as t, a7 as a } from "./entry.e50f0f50.js";
function c(o, p, _, m, d, u) {
  const s = e;
  return (
    n(),
    i(
      s,
      t(
        {
          provider: "cloudinary",
          src: o.publicId,
          modifiers: o.modifiers,
          sizes: o.sizes,
        },
        o.$attrs
      ),
      null,
      16,
      ["src", "modifiers", "sizes"]
    )
  );
}
const $ = a(r, [["render", c]]);
export { $ as default };
