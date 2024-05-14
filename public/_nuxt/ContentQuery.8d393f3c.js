import {
  k as q,
  t as g,
  s as S,
  h as b,
  x as k,
  l as C,
  p as N,
} from "./entry.0b49aa71.js";
import { q as c, h as _ } from "./query.67962173.js";
import "./utils.925ea3fb.js";
const j = q({
  name: "ContentQuery",
  props: {
    path: { type: String, required: !1, default: void 0 },
    only: { type: Array, required: !1, default: void 0 },
    without: { type: Array, required: !1, default: void 0 },
    where: { type: Object, required: !1, default: void 0 },
    sort: { type: Object, required: !1, default: void 0 },
    limit: { type: Number, required: !1, default: void 0 },
    skip: { type: Number, required: !1, default: void 0 },
    locale: { type: String, required: !1, default: void 0 },
    find: { type: String, required: !1, default: void 0 },
  },
  async setup(i) {
    const {
        path: t,
        only: r,
        without: n,
        where: a,
        sort: l,
        limit: o,
        skip: s,
        locale: f,
        find: d,
      } = g(i),
      h = S(() => {
        var e;
        return (e = t.value) == null ? void 0 : e.includes("/_");
      });
    b(
      () => i,
      () => p(),
      { deep: !0 }
    );
    const { data: v, refresh: p } = await k(`content-query-${_(i)}`, () => {
      let e;
      return (
        t.value ? (e = c(t.value)) : (e = c()),
        r.value && (e = e.only(r.value)),
        n.value && (e = e.without(n.value)),
        a.value && (e = e.where(a.value)),
        l.value && (e = e.sort(l.value)),
        o.value && (e = e.limit(o.value)),
        s.value && (e = e.skip(s.value)),
        f.value && (e = e.where({ _locale: f.value })),
        d.value === "one"
          ? e.findOne()
          : d.value === "surround"
          ? t.value
            ? e.findSurround(t.value)
            : (console.warn(
                "[Content] Surround queries requires `path` prop to be set."
              ),
              console.warn(
                "[Content] Query without `path` will return regular `find()` results."
              ),
              e.find())
          : e.find()
      );
    });
    return { isPartial: h, data: v, refresh: p };
  },
  render(i) {
    var y;
    const t = C(),
      {
        data: r,
        refresh: n,
        isPartial: a,
        path: l,
        only: o,
        without: s,
        where: f,
        sort: d,
        limit: h,
        skip: v,
        locale: p,
        find: e,
      } = i,
      u = {
        path: l,
        only: o,
        without: s,
        where: f,
        sort: d,
        limit: h,
        skip: v,
        locale: p,
        find: e,
      };
    if (u.find === "one") {
      if (!r && t != null && t["not-found"])
        return t["not-found"]({ props: u, ...this.$attrs });
      if (
        t != null &&
        t.empty &&
        (r == null ? void 0 : r._type) === "markdown" &&
        !((y = r == null ? void 0 : r.body) != null && y.children.length)
      )
        return t.empty({ props: u, ...this.$attrs });
    } else if ((!r || !r.length) && t != null && t["not-found"])
      return t["not-found"]({ props: u, ...this.$attrs });
    return t != null && t.default
      ? t.default({
          data: r,
          refresh: n,
          isPartial: a,
          props: u,
          ...this.$attrs,
        })
      : ((m, w) =>
          N(
            "pre",
            null,
            JSON.stringify(
              {
                message: "You should use slots with <ContentQuery>!",
                slot: m,
                data: w,
              },
              null,
              2
            )
          ))("default", { data: r, props: u, isPartial: a });
  },
});
export { j as default };
