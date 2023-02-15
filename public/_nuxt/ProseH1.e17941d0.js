import { f as i, r as l, o as s, I as o, u, Q as d } from "./entry.e50f0f50.js";
const r = ["id"],
  c = ["href"],
  p = i({
    __name: "ProseH1",
    props: { id: null },
    setup(t) {
      const { anchorLinks: e } = l().public.content,
        a =
          (e == null ? void 0 : e.depth) >= 1 &&
          !(e != null && e.exclude.includes(1));
      return (n, h) => (
        s(),
        o(
          "h1",
          { id: t.id },
          [
            u(a)
              ? (s(),
                o(
                  "a",
                  { key: 0, href: `#${t.id}` },
                  [d(n.$slots, "default")],
                  8,
                  c
                ))
              : d(n.$slots, "default", { key: 1 }),
          ],
          8,
          r
        )
      );
    },
  });
export { p as default };
