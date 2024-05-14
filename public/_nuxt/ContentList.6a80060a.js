import n from "./ContentQuery.8d393f3c.js";
import { k as c, l as h, p as u } from "./entry.0b49aa71.js";
import "./query.67962173.js";
import "./utils.925ea3fb.js";
const S = c({
  name: "ContentList",
  props: {
    path: { type: String, required: !1, default: void 0 },
    query: { type: Object, required: !1, default: void 0 },
  },
  render(p) {
    const t = h(),
      { path: f, query: o } = p,
      m = { ...(o || {}), path: f || (o == null ? void 0 : o.path) || "/" },
      r = (e, a) =>
        u(
          "pre",
          null,
          JSON.stringify(
            {
              message: "You should use slots with <ContentList>",
              slot: e,
              data: a,
            },
            null,
            2
          )
        );
    return u(n, m, {
      default:
        t != null && t.default
          ? ({ data: e, refresh: a, isPartial: d }) =>
              t == null
                ? void 0
                : t.default({
                    list: e,
                    refresh: a,
                    isPartial: d,
                    ...this.$attrs,
                  })
          : ({ data: e }) => r("default", e),
      empty: (e) =>
        t != null && t.empty
          ? t.empty(e)
          : r("default", e == null ? void 0 : e.data),
      "not-found": (e) => {
        var a;
        return t != null && t["not-found"]
          ? (a = t == null ? void 0 : t["not-found"]) == null
            ? void 0
            : a.call(t, e)
          : r("not-found", e == null ? void 0 : e.data);
      },
    });
  },
});
export { S as default };
