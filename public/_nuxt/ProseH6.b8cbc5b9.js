import { k as i, q as l, o as s, b as o, u, z as d } from "./entry.0b49aa71.js";
const c = ["id"],
  r = ["href"],
  p = i({
    __name: "ProseH6",
    props: { id: null },
    setup(t) {
      const { anchorLinks: e } = l().public.content,
        a =
          (e == null ? void 0 : e.depth) >= 6 &&
          !(e != null && e.exclude.includes(6));
      return (n, h) => (
        s(),
        o(
          "h6",
          { id: t.id },
          [
            u(a)
              ? (s(),
                o(
                  "a",
                  { key: 0, href: `#${t.id}` },
                  [d(n.$slots, "default")],
                  8,
                  r
                ))
              : d(n.$slots, "default", { key: 1 }),
          ],
          8,
          c
        )
      );
    },
  });
export { p as default };
