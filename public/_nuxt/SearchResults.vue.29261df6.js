import {
  d as Ye,
  p as Yn,
  f as E,
  e as xe,
  o as J,
  c as Y,
  z as ie,
  I as Ir,
  L as $e,
  G as $t,
  N as Tn,
  O as An,
  M as Ae,
  Z as Zs,
  w as vt,
  $ as Xs,
  a0 as eo,
} from "./entry.0b49aa71.js";
const $g = Ye({
  props: {
    title: { type: String, required: !0 },
    image: { type: String, default: "" },
    author: { type: String, default: "" },
    link: { type: String, default: "" },
  },
  computed: {
    pubId() {
      return this.image ? this.image.replace(/^\/+/, "") : "";
    },
  },
});
const Fg = Ye({
  props: {
    title: { type: String, required: !0 },
    image: { type: String, default: "" },
    author: { type: String, default: "" },
    link: { type: String, default: "" },
  },
  computed: {
    pubId() {
      return this.image ? this.image.replace(/^\/+/, "") : "";
    },
  },
});
function to(e, t, r) {
  if (!e) throw new Error("You need to provide `widgetName` in your data");
  var n = ["ais-" + e];
  return t && n.push("-" + t), r && n.push("--" + r), n.join("");
}
var C = function (e) {
  var t = e.name;
  return {
    props: { classNames: { type: Object, default: void 0 } },
    methods: {
      suit: function (r, n) {
        var i = to(t, r, n),
          a = this.classNames && this.classNames[i];
        return a ? [i, a].join(" ") : i;
      },
    },
  };
};
function Ft(e) {
  for (var t = arguments, r = 1; r < arguments.length; r++) {
    var n = t[r] != null ? t[r] : {},
      i = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (i = i.concat(
        Object.getOwnPropertySymbols(n).filter(function (a) {
          return Object.getOwnPropertyDescriptor(n, a).enumerable;
        })
      )),
      i.forEach(function (a) {
        ro(e, a, n[a]);
      });
  }
  return e;
}
function ro(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var no = !1,
  io = !0;
function fr(e) {
  function t(r, n, i) {
    if (typeof n == "object" && (n.attrs || n.props)) {
      var a = Object.assign({}, n, n.attrs, n.props);
      return delete a.attrs, delete a.props, Yn(r, a, i);
    }
    return Yn(r, n, i);
  }
  return function () {
    return e.call(this, t);
  };
}
function Wr(e) {
  return e.$slots.default && e.$slots.default();
}
var Gn = new Set();
function Pt(e) {
  Gn.has(e) || (Gn.add(e), console.warn(e));
}
var q = function (e, t) {
  var r;
  e === void 0 && (e = {});
  var n = e.connector;
  return (
    t === void 0 && (t = {}),
    ((r = {
      inject: {
        instantSearchInstance: {
          from: "$_ais_instantSearchInstance",
          default: function () {
            var i = this.$options._componentTag;
            throw new TypeError(
              'It looks like you forgot to wrap your Algolia search component "<' +
                i +
                '>" inside of an "<ais-instant-search>" component.'
            );
          },
        },
        getParentIndex: {
          from: "$_ais_getParentIndex",
          default: function () {
            var i = this;
            return function () {
              return i.instantSearchInstance.mainIndex;
            };
          },
        },
      },
      data: function () {
        return { state: null };
      },
      created: function () {
        if (typeof n == "function") {
          if (
            ((this.factory = n(this.updateState, function () {})),
            (this.widget = Ft(this.factory(this.widgetParams), t)),
            this.getParentIndex().addWidgets([this.widget]),
            this.instantSearchInstance._initialResults &&
              !this.instantSearchInstance.started)
          ) {
            if (typeof this.instantSearchInstance.__forceRender != "function")
              throw new Error(
                "You are using server side rendering with <ais-instant-search> instead of <ais-instant-search-ssr>."
              );
            this.instantSearchInstance.__forceRender(
              this.widget,
              this.getParentIndex()
            );
          }
        } else
          n !== !0 &&
            Pt(`You are using the InstantSearch widget mixin, but didn't provide a connector.
While this is technically possible, and will give you access to the Helper,
it's not the recommended way of making custom components.

If you want to disable this message, pass { connector: true } to the mixin.

Read more on using connectors: https://alg.li/vue-custom`);
      },
    }).beforeUnmount = function () {
      this.widget && this.getParentIndex().removeWidgets([this.widget]);
    }),
    (r.watch = {
      widgetParams: {
        handler: function (i) {
          (this.state = null),
            this.getParentIndex().removeWidgets([this.widget]),
            (this.widget = Ft(this.factory(i), t)),
            this.getParentIndex().addWidgets([this.widget]);
        },
        deep: !0,
      },
    }),
    (r.methods = {
      updateState: function (i, a) {
        i === void 0 && (i = {}), a || (this.state = i);
      },
    }),
    r
  );
};
function W() {}
var lr = function (t, r) {
  return t;
};
function ao(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Z(e, t) {
  if (e === void 0 || typeof e != "function")
    throw new Error(
      "The render function is not valid (received type "
        .concat(
          ao(e),
          `).

`
        )
        .concat(t)
    );
}
function Zn(e) {
  var t = e.helper,
    r = e.attributesToClear,
    n = r === void 0 ? [] : r,
    i = t.state.setPage(0);
  return (
    (i = n.reduce(function (a, s) {
      return i.isNumericRefined(s)
        ? a.removeNumericRefinement(s)
        : i.isHierarchicalFacet(s)
        ? a.removeHierarchicalFacetRefinement(s)
        : i.isDisjunctiveFacet(s)
        ? a.removeDisjunctiveFacetRefinement(s)
        : i.isConjunctiveFacet(s)
        ? a.removeFacetRefinement(s)
        : a;
    }, i)),
    n.indexOf("query") !== -1 && (i = i.setQuery("")),
    i
  );
}
var so = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  },
  Ta = /[&<>"']/g,
  oo = RegExp(Ta.source);
function uo(e) {
  return e && oo.test(e)
    ? e.replace(Ta, function (t) {
        return so[t];
      })
    : e;
}
var co = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
  },
  Aa = /&(amp|quot|lt|gt|#39);/g,
  fo = RegExp(Aa.source);
function lo(e) {
  return e && fo.test(e)
    ? e.replace(Aa, function (t) {
        return co[t];
      })
    : e;
}
function cn(e) {
  return (
    (cn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    cn(e)
  );
}
function ho(e) {
  return e === null
    ? e === void 0
      ? "[object Undefined]"
      : "[object Null]"
    : Object.prototype.toString.call(e);
}
function mo(e) {
  return cn(e) === "object" && e !== null;
}
function Ha(e) {
  if (!mo(e) || ho(e) !== "[object Object]") return !1;
  if (Object.getPrototypeOf(e) === null) return !0;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function jt(e) {
  return (
    (jt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    jt(e)
  );
}
function go(e) {
  if (e == null) throw new TypeError("Cannot destructure " + e);
}
function fn() {
  return (
    (fn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    fn.apply(this, arguments)
  );
}
function Xn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function st(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Xn(Object(r), !0).forEach(function (n) {
          Da(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Xn(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Da(e, t, r) {
  return (
    (t = po(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function po(e) {
  var t = vo(e, "string");
  return jt(t) === "symbol" ? t : String(t);
}
function vo(e, t) {
  if (jt(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (jt(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var He = {
    highlightPreTag: "__ais-highlight__",
    highlightPostTag: "__/ais-highlight__",
  },
  ce = { highlightPreTag: "<mark>", highlightPostTag: "</mark>" };
function La(e) {
  return uo(e)
    .replace(new RegExp(He.highlightPreTag, "g"), ce.highlightPreTag)
    .replace(new RegExp(He.highlightPostTag, "g"), ce.highlightPostTag);
}
function Er(e) {
  return Ha(e) && typeof e.value != "string"
    ? Object.keys(e).reduce(function (t, r) {
        return st(st({}, t), {}, Da({}, r, Er(e[r])));
      }, {})
    : Array.isArray(e)
    ? e.map(Er)
    : st(st({}, e), {}, { value: La(e.value) });
}
function Hn(e) {
  return (
    e.__escaped === void 0 &&
      ((e = e.map(function (t) {
        var r = fn({}, (go(t), t));
        return (
          r._highlightResult && (r._highlightResult = Er(r._highlightResult)),
          r._snippetResult && (r._snippetResult = Er(r._snippetResult)),
          r
        );
      })),
      (e.__escaped = !0)),
    e
  );
}
function yo(e) {
  return e.map(function (t) {
    return st(st({}, t), {}, { highlighted: La(t.highlighted) });
  });
}
function Na(e) {
  var t = ce.highlightPreTag,
    r = ce.highlightPostTag;
  return e
    .map(function (n) {
      return n.isHighlighted ? t + n.value + r : n.value;
    })
    .join("");
}
function bo(e, t, r) {
  return e.state.isHierarchicalFacet(t)
    ? e.state.isHierarchicalFacetRefined(t, r)
    : e.state.isConjunctiveFacet(t)
    ? e.state.isFacetRefined(t, r)
    : e.state.isDisjunctiveFacetRefined(t, r);
}
function ln(e) {
  return (
    (ln =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ln(e)
  );
}
function Dn(e) {
  var t = e.instantSearchInstance,
    r = e.helper,
    n = e.attribute,
    i = e.widgetType,
    a = function () {
      for (var o = arguments.length, c = new Array(o), u = 0; u < o; u++)
        c[u] = arguments[u];
      var f = c[0],
        h = c[1],
        l = c[2],
        g = l === void 0 ? "Filter Applied" : l,
        m = typeof n == "string" ? n : n(h);
      c.length === 1 && ln(c[0]) === "object"
        ? t.sendEventToInsights(c[0])
        : f === "click" &&
          (c.length === 2 || c.length === 3) &&
          (bo(r, m, h) ||
            t.sendEventToInsights({
              insightsMethod: "clickedFilters",
              widgetType: i,
              eventType: f,
              payload: {
                eventName: g,
                index: r.getIndex(),
                filters: ["".concat(m, ":").concat(h)],
              },
              attribute: m,
            }));
    };
  return a;
}
function Wa(e) {
  return btoa(encodeURIComponent(JSON.stringify(e)));
}
function dn(e) {
  return (
    (dn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    dn(e)
  );
}
function So(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 20,
      r = [],
      n = 0;
    n < Math.ceil(e.length / t);
    n++
  )
    r.push(e.slice(n * t, (n + 1) * t));
  return r;
}
var Ca = function (t) {
  var r = t.index,
    n = t.widgetType;
  t.methodName;
  var i = t.args,
    a = t.isSearchStalled;
  if (i.length === 1 && dn(i[0]) === "object") return [i[0]];
  var s = i[0],
    o = i[1],
    c = i[2];
  if (!o) return [];
  if ((s === "click" || s === "conversion") && !c) return [];
  var u = Array.isArray(o) ? wo(o) : [o];
  if (u.length === 0) return [];
  var f = u[0].__queryID,
    h = So(u),
    l = h.map(function (m) {
      return m.map(function (d) {
        return d.objectID;
      });
    }),
    g = h.map(function (m) {
      return m.map(function (d) {
        return d.__position;
      });
    });
  return s === "view"
    ? a
      ? []
      : h.map(function (m, d) {
          return {
            insightsMethod: "viewedObjectIDs",
            widgetType: n,
            eventType: s,
            payload: {
              eventName: c || "Hits Viewed",
              index: r,
              objectIDs: l[d],
            },
            hits: m,
          };
        })
    : s === "click"
    ? h.map(function (m, d) {
        return {
          insightsMethod: "clickedObjectIDsAfterSearch",
          widgetType: n,
          eventType: s,
          payload: {
            eventName: c,
            index: r,
            queryID: f,
            objectIDs: l[d],
            positions: g[d],
          },
          hits: m,
        };
      })
    : s === "conversion"
    ? h.map(function (m, d) {
        return {
          insightsMethod: "convertedObjectIDsAfterSearch",
          widgetType: n,
          eventType: s,
          payload: { eventName: c, index: r, queryID: f, objectIDs: l[d] },
          hits: m,
        };
      })
    : [];
};
function wo(e) {
  return e.slice();
}
function Ln(e) {
  var t = e.instantSearchInstance,
    r = e.index,
    n = e.widgetType,
    i = function () {
      for (var s = arguments.length, o = new Array(s), c = 0; c < s; c++)
        o[c] = arguments[c];
      var u = Ca({
        widgetType: n,
        index: r,
        methodName: "sendEvent",
        args: o,
        isSearchStalled: t.status === "stalled",
      });
      u.forEach(function (f) {
        return t.sendEventToInsights(f);
      });
    };
  return i;
}
function Ma(e) {
  var t = e.index,
    r = e.widgetType,
    n = function () {
      for (var a = arguments.length, s = new Array(a), o = 0; o < a; o++)
        s[o] = arguments[o];
      var c = Ca({
        widgetType: r,
        index: t,
        methodName: "bindEvent",
        args: s,
        isSearchStalled: !1,
      });
      return c.length ? "data-insights-event=".concat(Wa(c)) : "";
    };
  return n;
}
function lt(e) {
  return e.$$type === "ais.index";
}
function hn(e, t) {
  var r = e[t.getIndexId()] || {};
  t
    .getHelper()
    .setState(t.getWidgetSearchParameters(t.getHelper().state, { uiState: r })),
    t
      .getWidgets()
      .filter(lt)
      .forEach(function (n) {
        return hn(e, n);
      });
}
var Po = Promise.resolve();
function mt(e) {
  var t = null,
    r = !1,
    n = function () {
      for (var a = arguments.length, s = new Array(a), o = 0; o < a; o++)
        s[o] = arguments[o];
      t === null &&
        (t = Po.then(function () {
          if (((t = null), r)) {
            r = !1;
            return;
          }
          e.apply(void 0, s);
        }));
    };
  return (
    (n.wait = function () {
      if (t === null)
        throw new Error(
          "The deferred function should be called before calling `wait()`"
        );
      return t;
    }),
    (n.cancel = function () {
      t !== null && (r = !0);
    }),
    n
  );
}
function Ro(e) {
  var t = e.name,
    r = e.connector,
    n = r === void 0 ? !1 : r;
  return [
    "https://www.algolia.com/doc/api-reference/widgets/",
    t,
    "/js/",
    n ? "#connector" : "",
  ].join("");
}
function K() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t
    .map(function (i) {
      return Ro(i);
    })
    .join(", ");
  return function (i) {
    return [i, "See documentation: ".concat(n)].filter(Boolean).join(`

`);
  };
}
function Oo(e) {
  return typeof e == "string" ? e.replace(/^\\-/, "-") : e;
}
function yt(e) {
  return (typeof e == "number" && e < 0) || typeof e == "string"
    ? String(e).replace(/^-/, "\\-")
    : e;
}
function et(e, t) {
  for (var r, n = 0; n < e.length; n++) if (((r = e[n]), t(r, n, e))) return r;
}
function $o(e, t) {
  if (!Array.isArray(e)) return -1;
  for (var r = 0; r < e.length; r++) if (t(e[r])) return r;
  return -1;
}
function Ua(e) {
  var t = ce.highlightPostTag,
    r = ce.highlightPreTag,
    n = e.split(r),
    i = n.shift(),
    a = i ? [{ value: i, isHighlighted: !1 }] : [];
  return (
    n.forEach(function (s) {
      var o = s.split(t);
      a.push({ value: o[0], isHighlighted: !0 }),
        o[1] !== "" && a.push({ value: o[1], isHighlighted: !1 });
    }),
    a
  );
}
var Fo = new RegExp(/\w/i);
function jo(e, t) {
  var r,
    n,
    i = e[t],
    a =
      ((r = e[t + 1]) === null || r === void 0 ? void 0 : r.isHighlighted) ||
      !0,
    s =
      ((n = e[t - 1]) === null || n === void 0 ? void 0 : n.isHighlighted) ||
      !0;
  return !Fo.test(lo(i.value)) && s === a ? s : i.isHighlighted;
}
function dt(e, t) {
  var r = Array.isArray(t) ? t : t.split(".");
  return r.reduce(function (n, i) {
    return n && n[i];
  }, e);
}
function qr(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [],
    a = { type: t, attribute: r, name: n, escapedValue: yt(n) },
    s = et(i, function (g) {
      return g.name === r;
    }),
    o;
  if (t === "hierarchical") {
    for (
      var c = e.getHierarchicalFacetByName(r),
        u = n.split(c.separator),
        f = function (m) {
          return function (d) {
            return m[d];
          };
        },
        h = function (m) {
          s =
            s &&
            s.data &&
            et(Object.keys(s.data).map(f(s.data)), function (d) {
              return d.name === u[m];
            });
        },
        l = 0;
      s !== void 0 && l < u.length;
      ++l
    )
      h(l);
    o = s && s.count;
  } else o = s && s.data && s.data[a.name];
  return (
    o !== void 0 && (a.count = o),
    s && s.exhaustive !== void 0 && (a.exhaustive = s.exhaustive),
    a
  );
}
function Nn(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
    n = [],
    i = t.facetsRefinements,
    a = i === void 0 ? {} : i,
    s = t.facetsExcludes,
    o = s === void 0 ? {} : s,
    c = t.disjunctiveFacetsRefinements,
    u = c === void 0 ? {} : c,
    f = t.hierarchicalFacetsRefinements,
    h = f === void 0 ? {} : f,
    l = t.numericRefinements,
    g = l === void 0 ? {} : l,
    m = t.tagRefinements,
    d = m === void 0 ? [] : m;
  return (
    Object.keys(a).forEach(function (p) {
      var v = a[p];
      v.forEach(function (b) {
        n.push(qr(t, "facet", p, b, e.facets));
      });
    }),
    Object.keys(o).forEach(function (p) {
      var v = o[p];
      v.forEach(function (b) {
        n.push({ type: "exclude", attribute: p, name: b, exclude: !0 });
      });
    }),
    Object.keys(u).forEach(function (p) {
      var v = u[p];
      v.forEach(function (b) {
        n.push(qr(t, "disjunctive", p, Oo(b), e.disjunctiveFacets));
      });
    }),
    Object.keys(h).forEach(function (p) {
      var v = h[p];
      v.forEach(function (b) {
        n.push(qr(t, "hierarchical", p, b, e.hierarchicalFacets));
      });
    }),
    Object.keys(g).forEach(function (p) {
      var v = g[p];
      Object.keys(v).forEach(function (b) {
        var y = b,
          S = v[y],
          P = Array.isArray(S) ? S : [S];
        P.forEach(function (w) {
          n.push({
            type: "numeric",
            attribute: p,
            name: "".concat(w),
            numericValue: w,
            operator: y,
          });
        });
      });
    }),
    d.forEach(function (p) {
      n.push({ type: "tag", attribute: "_tags", name: p });
    }),
    r &&
      t.query &&
      t.query.trim() &&
      n.push({
        attribute: "query",
        type: "query",
        name: t.query,
        query: t.query,
      }),
    n
  );
}
function _o(e, t) {
  var r,
    n =
      (r = e.getWidgetRenderState) === null || r === void 0
        ? void 0
        : r.call(e, t),
    i = null;
  if (n && n.widgetParams) {
    var a = n.widgetParams;
    a.attribute
      ? (i = a.attribute)
      : Array.isArray(a.attributes) && (i = a.attributes[0]);
  }
  if (typeof i != "string")
    throw new Error(
      `Could not find the attribute of the widget:

`.concat(
        JSON.stringify(e),
        `

Please check whether the widget's getWidgetRenderState returns widgetParams.attribute correctly.`
      )
    );
  return i;
}
function _t(e) {
  return (
    (_t =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    _t(e)
  );
}
function ei(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ti(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ei(Object(r), !0).forEach(function (n) {
          xo(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ei(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function xo(e, t, r) {
  return (
    (t = Io(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Io(e) {
  var t = Eo(e, "string");
  return _t(t) === "symbol" ? t : String(t);
}
function Eo(e, t) {
  if (_t(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (_t(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Qa(e, t, r) {
  return e.map(function (n, i) {
    return ti(ti({}, n), {}, { __position: r * t + i + 1 });
  });
}
function xt(e) {
  return (
    (xt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    xt(e)
  );
}
function ri(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ni(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ri(Object(r), !0).forEach(function (n) {
          To(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ri(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function To(e, t, r) {
  return (
    (t = Ao(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Ao(e) {
  var t = Ho(e, "string");
  return xt(t) === "symbol" ? t : String(t);
}
function Ho(e, t) {
  if (xt(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (xt(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function qa(e, t) {
  return t
    ? e.map(function (r) {
        return ni(ni({}, r), {}, { __queryID: t });
      })
    : e;
}
function ii(e) {
  return e !== Object(e);
}
function dr(e, t) {
  if (e === t) return !0;
  if (ii(e) || ii(t) || typeof e == "function" || typeof t == "function")
    return e === t;
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (var r = 0, n = Object.keys(e); r < n.length; r++) {
    var i = n[r];
    if (!(i in t) || !dr(e[i], t[i])) return !1;
  }
  return !0;
}
function Q(e) {
  return typeof e == "number" && isFinite(e);
}
function Wn(e) {
  return e.filter(function (t, r, n) {
    return n.indexOf(t) === r;
  });
}
function It(e) {
  return (
    (It =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    It(e)
  );
}
var Do = [
  "facets",
  "disjunctiveFacets",
  "facetsRefinements",
  "facetsExcludes",
  "disjunctiveFacetsRefinements",
  "numericRefinements",
  "tagRefinements",
  "hierarchicalFacets",
  "hierarchicalFacetsRefinements",
  "ruleContexts",
];
function ai(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function De(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ai(Object(r), !0).forEach(function (n) {
          Lo(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ai(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Lo(e, t, r) {
  return (
    (t = No(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function No(e) {
  var t = Wo(e, "string");
  return It(t) === "symbol" ? t : String(t);
}
function Wo(e, t) {
  if (It(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (It(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Co(e, t) {
  if (e == null) return {};
  var r = Mo(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function Mo(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Uo = function (t, r) {
    r.facets,
      r.disjunctiveFacets,
      r.facetsRefinements,
      r.facetsExcludes,
      r.disjunctiveFacetsRefinements,
      r.numericRefinements,
      r.tagRefinements,
      r.hierarchicalFacets,
      r.hierarchicalFacetsRefinements,
      r.ruleContexts;
    var n = Co(r, Do);
    return t.setQueryParameters(n);
  },
  Qo = function (t, r) {
    return r.facets.reduce(function (n, i) {
      return n.addFacet(i);
    }, t);
  },
  qo = function (t, r) {
    return r.disjunctiveFacets.reduce(function (n, i) {
      return n.addDisjunctiveFacet(i);
    }, t);
  },
  Vo = function (t, r) {
    return t.setQueryParameters({
      hierarchicalFacets: r.hierarchicalFacets.reduce(function (n, i) {
        var a = $o(n, function (o) {
          return o.name === i.name;
        });
        if (a === -1) return n.concat(i);
        var s = n.slice();
        return s.splice(a, 1, i), s;
      }, t.hierarchicalFacets),
    });
  },
  Bo = function (t, r) {
    return r.tagRefinements.reduce(function (n, i) {
      return n.addTagRefinement(i);
    }, t);
  },
  ko = function (t, r) {
    return t.setQueryParameters({
      facetsRefinements: De(De({}, t.facetsRefinements), r.facetsRefinements),
    });
  },
  Ko = function (t, r) {
    return t.setQueryParameters({
      facetsExcludes: De(De({}, t.facetsExcludes), r.facetsExcludes),
    });
  },
  zo = function (t, r) {
    return t.setQueryParameters({
      disjunctiveFacetsRefinements: De(
        De({}, t.disjunctiveFacetsRefinements),
        r.disjunctiveFacetsRefinements
      ),
    });
  },
  Jo = function (t, r) {
    return t.setQueryParameters({
      numericRefinements: De(
        De({}, t.numericRefinements),
        r.numericRefinements
      ),
    });
  },
  Yo = function (t, r) {
    return t.setQueryParameters({
      hierarchicalFacetsRefinements: De(
        De({}, t.hierarchicalFacetsRefinements),
        r.hierarchicalFacetsRefinements
      ),
    });
  },
  Go = function (t, r) {
    var n = Wn(
      [].concat(t.ruleContexts).concat(r.ruleContexts).filter(Boolean)
    );
    return n.length > 0 ? t.setQueryParameters({ ruleContexts: n }) : t;
  },
  Rt = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return r.reduce(function (i, a) {
      var s = Yo(i, a),
        o = Vo(s, a),
        c = Bo(o, a),
        u = Jo(c, a),
        f = zo(u, a),
        h = Ko(f, a),
        l = ko(h, a),
        g = qo(l, a),
        m = Go(g, a),
        d = Qo(m, a);
      return Uo(d, a);
    });
  };
function Zo(e) {
  return ru(e) || tu(e) || eu(e) || Xo();
}
function Xo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eu(e, t) {
  if (e) {
    if (typeof e == "string") return mn(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return mn(e, t);
  }
}
function tu(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function ru(e) {
  if (Array.isArray(e)) return mn(e);
}
function mn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function si(e) {
  var t = e.start,
    r = t === void 0 ? 0 : t,
    n = e.end,
    i = e.step,
    a = i === void 0 ? 1 : i,
    s = a === 0 ? 1 : a,
    o = Math.round((n - r) / s);
  return Zo(Array(o)).map(function (c, u) {
    return r + u * s;
  });
}
function bt(e, t, r) {
  var n = t.getHelper();
  return {
    uiState: r,
    helper: n,
    parent: t,
    instantSearchInstance: e,
    state: n.state,
    renderState: e.renderState,
    templatesConfig: e.templatesConfig,
    createURL: t.createURL,
    scopedResults: [],
    searchMetadata: { isSearchStalled: e.status === "stalled" },
    status: e.status,
    error: e.error,
  };
}
function oi(e, t) {
  var r = t.getResults();
  return {
    helper: t.getHelper(),
    parent: t,
    instantSearchInstance: e,
    results: r,
    scopedResults: t.getScopedResults(),
    state: r._state,
    renderState: e.renderState,
    templatesConfig: e.templatesConfig,
    createURL: t.createURL,
    searchMetadata: { isSearchStalled: e.status === "stalled" },
    status: e.status,
    error: e.error,
  };
}
function nu(e) {
  for (var t = e.getParent(), r = [e.getHelper().state]; t !== null; )
    (r = [t.getHelper().state].concat(r)), (t = t.getParent());
  return r;
}
function Et(e) {
  return (
    (Et =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Et(e)
  );
}
function ui(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function gr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ui(Object(r), !0).forEach(function (n) {
          iu(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ui(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function iu(e, t, r) {
  return (
    (t = au(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function au(e) {
  var t = su(e, "string");
  return Et(t) === "symbol" ? t : String(t);
}
function su(e, t) {
  if (Et(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Et(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Va(e) {
  return e.some(function (t) {
    return t.isHighlighted;
  })
    ? e.map(function (t, r) {
        return gr(gr({}, t), {}, { isHighlighted: !jo(e, r) });
      })
    : e.map(function (t) {
        return gr(gr({}, t), {}, { isHighlighted: !1 });
      });
}
function We(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { fallback: function () {} },
    r = t.fallback;
  return typeof window > "u" ? r() : e({ window });
}
function Vr(e) {
  return Array.isArray(e) ? e : [e];
}
function Tt(e) {
  return (
    (Tt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Tt(e)
  );
}
function ou(e) {
  return lu(e) || fu(e) || cu(e) || uu();
}
function uu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cu(e, t) {
  if (e) {
    if (typeof e == "string") return gn(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return gn(e, t);
  }
}
function fu(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function lu(e) {
  if (Array.isArray(e)) return gn(e);
}
function gn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ci(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function tt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ci(Object(r), !0).forEach(function (n) {
          du(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ci(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function du(e, t, r) {
  return (
    (t = hu(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function hu(e) {
  var t = mu(e, "string");
  return Tt(t) === "symbol" ? t : String(t);
}
function mu(e, t) {
  if (Tt(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Tt(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var fi = K({ name: "clear-refinements", connector: !0 }),
  gu = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W;
    return (
      Z(t, fi()),
      function (n) {
        var i = n || {},
          a = i.includedAttributes,
          s = a === void 0 ? [] : a,
          o = i.excludedAttributes,
          c = o === void 0 ? ["query"] : o,
          u = i.transformItems,
          f =
            u === void 0
              ? function (m) {
                  return m;
                }
              : u;
        if (n && n.includedAttributes && n.excludedAttributes)
          throw new Error(
            fi(
              "The options `includedAttributes` and `excludedAttributes` cannot be used together."
            )
          );
        var h = {
            refine: W,
            createURL: function () {
              return "";
            },
            attributesToClear: [],
          },
          l = function () {
            return h.refine();
          },
          g = function () {
            return h.createURL();
          };
        return {
          $$type: "ais.clearRefinements",
          init: function (d) {
            var p = d.instantSearchInstance;
            t(
              tt(
                tt({}, this.getWidgetRenderState(d)),
                {},
                { instantSearchInstance: p }
              ),
              !0
            );
          },
          render: function (d) {
            var p = d.instantSearchInstance;
            t(
              tt(
                tt({}, this.getWidgetRenderState(d)),
                {},
                { instantSearchInstance: p }
              ),
              !1
            );
          },
          dispose: function () {
            r();
          },
          getRenderState: function (d, p) {
            return tt(
              tt({}, d),
              {},
              { clearRefinements: this.getWidgetRenderState(p) }
            );
          },
          getWidgetRenderState: function (d) {
            var p = d.createURL,
              v = d.scopedResults,
              b = d.results;
            (h.attributesToClear = v.reduce(function (S, P) {
              return S.concat(
                pu({
                  scopedResult: P,
                  includedAttributes: s,
                  excludedAttributes: c,
                  transformItems: f,
                  results: b,
                })
              );
            }, [])),
              (h.refine = function () {
                h.attributesToClear.forEach(function (S) {
                  var P = S.helper,
                    w = S.items;
                  P.setState(Zn({ helper: P, attributesToClear: w })).search();
                });
              }),
              (h.createURL = function () {
                return p(
                  Rt.apply(
                    void 0,
                    ou(
                      h.attributesToClear.map(function (S) {
                        var P = S.helper,
                          w = S.items;
                        return Zn({ helper: P, attributesToClear: w });
                      })
                    )
                  )
                );
              });
            var y = h.attributesToClear.some(function (S) {
              return S.items.length > 0;
            });
            return {
              canRefine: y,
              hasRefinements: y,
              refine: l,
              createURL: g,
              widgetParams: n,
            };
          },
        };
      }
    );
  };
function pu(e) {
  var t = e.scopedResult,
    r = e.includedAttributes,
    n = e.excludedAttributes,
    i = e.transformItems,
    a = e.results,
    s = r.indexOf("query") !== -1 || n.indexOf("query") === -1;
  return {
    helper: t.helper,
    items: i(
      Wn(
        Nn(t.results, t.helper.state, s)
          .map(function (o) {
            return o.attribute;
          })
          .filter(function (o) {
            return r.length === 0 || r.indexOf(o) !== -1;
          })
          .filter(function (o) {
            return (o === "query" && s) || n.indexOf(o) === -1;
          })
      ),
      { results: a }
    ),
  };
}
const vu = gu;
function At(e) {
  return (
    (At =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    At(e)
  );
}
function yu(e) {
  return Pu(e) || wu(e) || Su(e) || bu();
}
function bu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Su(e, t) {
  if (e) {
    if (typeof e == "string") return pn(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return pn(e, t);
  }
}
function wu(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Pu(e) {
  if (Array.isArray(e)) return pn(e);
}
function pn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function li(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function rt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? li(Object(r), !0).forEach(function (n) {
          Ru(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : li(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Ru(e, t, r) {
  return (
    (t = Ou(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Ou(e) {
  var t = $u(e, "string");
  return At(t) === "symbol" ? t : String(t);
}
function $u(e, t) {
  if (At(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (At(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var di = K({ name: "current-refinements", connector: !0 }),
  Fu = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W;
    return (
      Z(t, di()),
      function (n) {
        if ((n || {}).includedAttributes && (n || {}).excludedAttributes)
          throw new Error(
            di(
              "The options `includedAttributes` and `excludedAttributes` cannot be used together."
            )
          );
        var i = n || {},
          a = i.includedAttributes,
          s = i.excludedAttributes,
          o = s === void 0 ? ["query"] : s,
          c = i.transformItems,
          u =
            c === void 0
              ? function (f) {
                  return f;
                }
              : c;
        return {
          $$type: "ais.currentRefinements",
          init: function (h) {
            var l = h.instantSearchInstance;
            t(
              rt(
                rt({}, this.getWidgetRenderState(h)),
                {},
                { instantSearchInstance: l }
              ),
              !0
            );
          },
          render: function (h) {
            var l = h.instantSearchInstance;
            t(
              rt(
                rt({}, this.getWidgetRenderState(h)),
                {},
                { instantSearchInstance: l }
              ),
              !1
            );
          },
          dispose: function () {
            r();
          },
          getRenderState: function (h, l) {
            return rt(
              rt({}, h),
              {},
              { currentRefinements: this.getWidgetRenderState(l) }
            );
          },
          getWidgetRenderState: function (h) {
            var l = h.results,
              g = h.scopedResults,
              m = h.createURL,
              d = h.helper;
            function p() {
              return l
                ? g.reduce(function (b, y) {
                    return b.concat(
                      u(
                        hi({
                          results: y.results,
                          helper: y.helper,
                          includedAttributes: a,
                          excludedAttributes: o,
                        }),
                        { results: l }
                      )
                    );
                  }, [])
                : u(
                    hi({
                      results: {},
                      helper: d,
                      includedAttributes: a,
                      excludedAttributes: o,
                    }),
                    { results: l }
                  );
            }
            var v = p();
            return {
              items: v,
              canRefine: v.length > 0,
              refine: function (y) {
                return ka(d, y);
              },
              createURL: function (y) {
                return m(Ba(d.state, y));
              },
              widgetParams: n,
            };
          },
        };
      }
    );
  };
function hi(e) {
  var t = e.results,
    r = e.helper,
    n = e.includedAttributes,
    i = e.excludedAttributes,
    a = (n || []).indexOf("query") !== -1 || (i || []).indexOf("query") === -1,
    s = n
      ? function (c) {
          return n.indexOf(c.attribute) !== -1;
        }
      : function (c) {
          return i.indexOf(c.attribute) === -1;
        },
    o = Nn(t, r.state, a).map(_u).filter(s);
  return o.reduce(function (c, u) {
    return [].concat(
      yu(
        c.filter(function (f) {
          return f.attribute !== u.attribute;
        })
      ),
      [
        {
          indexName: r.state.index,
          attribute: u.attribute,
          label: u.attribute,
          refinements: o
            .filter(function (f) {
              return f.attribute === u.attribute;
            })
            .sort(function (f, h) {
              return f.type === "numeric" ? f.value - h.value : 0;
            }),
          refine: function (h) {
            return ka(r, h);
          },
        },
      ]
    );
  }, []);
}
function Ba(e, t) {
  switch (((e = e.resetPage()), t.type)) {
    case "facet":
      return e.removeFacetRefinement(t.attribute, String(t.value));
    case "disjunctive":
      return e.removeDisjunctiveFacetRefinement(t.attribute, String(t.value));
    case "hierarchical":
      return e.removeHierarchicalFacetRefinement(t.attribute);
    case "exclude":
      return e.removeExcludeRefinement(t.attribute, String(t.value));
    case "numeric":
      return e.removeNumericRefinement(
        t.attribute,
        t.operator,
        String(t.value)
      );
    case "tag":
      return e.removeTagRefinement(String(t.value));
    case "query":
      return e.setQueryParameter("query", "");
    default:
      return e;
  }
}
function ka(e, t) {
  e.setState(Ba(e.state, t)).search();
}
function ju(e) {
  switch (e) {
    case ">=":
      return "≥";
    case "<=":
      return "≤";
    default:
      return e;
  }
}
function _u(e) {
  var t = xu(e),
    r = e.operator ? "".concat(ju(e.operator), " ").concat(e.name) : e.name,
    n = { attribute: e.attribute, type: e.type, value: t, label: r };
  return (
    e.operator !== void 0 && (n.operator = e.operator),
    e.count !== void 0 && (n.count = e.count),
    e.exhaustive !== void 0 && (n.exhaustive = e.exhaustive),
    n
  );
}
function xu(e) {
  return e.type === "numeric"
    ? Number(e.name)
    : "escapedValue" in e
    ? e.escapedValue
    : e.name;
}
const Iu = Fu;
function Ht(e) {
  return (
    (Ht =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ht(e)
  );
}
var Eu = ["name", "escapedValue", "data", "path"];
function mi(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function se(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? mi(Object(r), !0).forEach(function (n) {
          $r(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : mi(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function $r(e, t, r) {
  return (
    (t = Tu(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Tu(e) {
  var t = Au(e, "string");
  return Ht(t) === "symbol" ? t : String(t);
}
function Au(e, t) {
  if (Ht(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ht(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Hu(e, t) {
  if (e == null) return {};
  var r = Du(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function Du(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Lu(e, t) {
  return Mu(e) || Cu(e, t) || Wu(e, t) || Nu();
}
function Nu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wu(e, t) {
  if (e) {
    if (typeof e == "string") return gi(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return gi(e, t);
  }
}
function gi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Cu(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      s,
      o = [],
      c = !0,
      u = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        c = !1;
      } else
        for (
          ;
          !(c = (n = a.call(r)).done) && (o.push(n.value), o.length !== t);
          c = !0
        );
    } catch (f) {
      (u = !0), (i = f);
    } finally {
      try {
        if (!c && r.return != null && ((s = r.return()), Object(s) !== s))
          return;
      } finally {
        if (u) throw i;
      }
    }
    return o;
  }
}
function Mu(e) {
  if (Array.isArray(e)) return e;
}
var Br = K({ name: "hierarchical-menu", connector: !0 }),
  pi = ["name:asc"],
  Uu = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W;
    return (
      Z(t, Br()),
      function (n) {
        var i = n || {},
          a = i.attributes,
          s = i.separator,
          o = s === void 0 ? " > " : s,
          c = i.rootPath,
          u = c === void 0 ? null : c,
          f = i.showParentLevel,
          h = f === void 0 ? !0 : f,
          l = i.limit,
          g = l === void 0 ? 10 : l,
          m = i.showMore,
          d = m === void 0 ? !1 : m,
          p = i.showMoreLimit,
          v = p === void 0 ? 20 : p,
          b = i.sortBy,
          y = b === void 0 ? pi : b,
          S = i.transformItems,
          P =
            S === void 0
              ? function (H) {
                  return H;
                }
              : S;
        if (!a || !Array.isArray(a) || a.length === 0)
          throw new Error(
            Br("The `attributes` option expects an array of strings.")
          );
        if (d === !0 && v <= g)
          throw new Error(
            Br("The `showMoreLimit` option must be greater than `limit`.")
          );
        var w = Lu(a, 1),
          R = w[0],
          O,
          $ = function () {};
        function _() {
          $();
        }
        var T,
          M = !1;
        function V(H, x) {
          return function () {
            (M = !M), x.render(H);
          };
        }
        function A() {
          return M ? v : g;
        }
        function N(H) {
          return H.slice(0, A()).map(function (x) {
            var j = x.name,
              I = x.escapedValue,
              D = x.data;
            x.path;
            var L = Hu(x, Eu),
              U = se(se({}, L), {}, { value: I, label: j, data: null });
            return Array.isArray(D) && (U.data = N(D)), U;
          });
        }
        return {
          $$type: "ais.hierarchicalMenu",
          init: function (x) {
            var j = x.instantSearchInstance;
            t(
              se(
                se({}, this.getWidgetRenderState(x)),
                {},
                { instantSearchInstance: j }
              ),
              !0
            );
          },
          render: function (x) {
            var j = x.instantSearchInstance;
            ($ = V(x, this)),
              t(
                se(
                  se({}, this.getWidgetRenderState(x)),
                  {},
                  { instantSearchInstance: j }
                ),
                !1
              );
          },
          dispose: function (x) {
            var j = x.state;
            return (
              r(),
              j
                .removeHierarchicalFacet(R)
                .setQueryParameter("maxValuesPerFacet", void 0)
            );
          },
          getRenderState: function (x, j) {
            return se(
              se({}, x),
              {},
              {
                hierarchicalMenu: se(
                  se({}, x.hierarchicalMenu),
                  {},
                  $r({}, R, this.getWidgetRenderState(j))
                ),
              }
            );
          },
          getWidgetRenderState: function (x) {
            var j = x.results,
              I = x.state,
              D = x.createURL,
              L = x.instantSearchInstance,
              U = x.helper,
              ae = [],
              X = !1;
            function ve(we) {
              return D(I.resetPage().toggleFacetRefinement(R, we));
            }
            if (
              (O ||
                (O = Dn({
                  instantSearchInstance: L,
                  helper: U,
                  attribute: function (be) {
                    var ht = be.split(o).length - 1;
                    return a[ht];
                  },
                  widgetType: this.$$type,
                })),
              T ||
                (T = function (be) {
                  O("click", be), U.toggleFacetRefinement(R, be).search();
                }),
              j)
            ) {
              var le = j.getFacetValues(R, {
                  sortBy: y,
                  facetOrdering: y === pi,
                }),
                ye = le && !Array.isArray(le) && le.data ? le.data : [],
                de =
                  (I.maxValuesPerFacet || 0) > A()
                    ? ye.length <= A()
                    : ye.length < A();
              (X = d && (M || !de)), (ae = P(N(ye), { results: j }));
            }
            return {
              items: ae,
              refine: T,
              canRefine: ae.length > 0,
              createURL: ve,
              sendEvent: O,
              widgetParams: n,
              isShowingMore: M,
              toggleShowMore: _,
              canToggleShowMore: X,
            };
          },
          getWidgetUiState: function (x, j) {
            var I = j.searchParameters,
              D = I.getHierarchicalFacetBreadcrumb(R);
            return D.length
              ? se(
                  se({}, x),
                  {},
                  {
                    hierarchicalMenu: se(
                      se({}, x.hierarchicalMenu),
                      {},
                      $r({}, R, D)
                    ),
                  }
                )
              : x;
          },
          getWidgetSearchParameters: function (x, j) {
            var I = j.uiState,
              D = I.hierarchicalMenu && I.hierarchicalMenu[R];
            x.isHierarchicalFacet(R) && x.getHierarchicalFacetByName(R);
            var L = x.removeHierarchicalFacet(R).addHierarchicalFacet({
                name: R,
                attributes: a,
                separator: o,
                rootPath: u,
                showParentLevel: h,
              }),
              U = L.maxValuesPerFacet || 0,
              ae = Math.max(U, d ? v : g),
              X = L.setQueryParameter("maxValuesPerFacet", ae);
            return D
              ? X.addHierarchicalFacetRefinement(R, D.join(o))
              : X.setQueryParameters({
                  hierarchicalFacetsRefinements: se(
                    se({}, X.hierarchicalFacetsRefinements),
                    {},
                    $r({}, R, [])
                  ),
                });
          },
        };
      }
    );
  };
const Qu = Uu;
function Dt(e) {
  return (
    (Dt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Dt(e)
  );
}
function vi(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vi(Object(r), !0).forEach(function (n) {
          Ka(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : vi(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Ka(e, t, r) {
  return (
    (t = qu(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function qu(e) {
  var t = Vu(e, "string");
  return Dt(t) === "symbol" ? t : String(t);
}
function Vu(e, t) {
  if (Dt(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Dt(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Bu = K({ name: "hits", connector: !0 }),
  ku = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W;
    return (
      Z(t, Bu()),
      function (n) {
        var i = n || {},
          a = i.escapeHTML,
          s = a === void 0 ? !0 : a,
          o = i.transformItems,
          c =
            o === void 0
              ? function (h) {
                  return h;
                }
              : o,
          u,
          f;
        return {
          $$type: "ais.hits",
          init: function (l) {
            t(
              Me(
                Me({}, this.getWidgetRenderState(l)),
                {},
                { instantSearchInstance: l.instantSearchInstance }
              ),
              !0
            );
          },
          render: function (l) {
            var g = this.getWidgetRenderState(l);
            t(
              Me(
                Me({}, g),
                {},
                { instantSearchInstance: l.instantSearchInstance }
              ),
              !1
            ),
              g.sendEvent("view", g.hits);
          },
          getRenderState: function (l, g) {
            return Me(Me({}, l), {}, { hits: this.getWidgetRenderState(g) });
          },
          getWidgetRenderState: function (l) {
            var g = l.results,
              m = l.helper,
              d = l.instantSearchInstance;
            if (
              (u ||
                (u = Ln({
                  instantSearchInstance: d,
                  index: m.getIndex(),
                  widgetType: this.$$type,
                })),
              f || (f = Ma({ index: m.getIndex(), widgetType: this.$$type })),
              !g)
            )
              return {
                hits: [],
                results: void 0,
                sendEvent: u,
                bindEvent: f,
                widgetParams: n,
              };
            s && g.hits.length > 0 && (g.hits = Hn(g.hits));
            var p = Qa(g.hits, g.page, g.hitsPerPage),
              v = qa(p, g.queryID),
              b = c(v, { results: g });
            return {
              hits: b,
              results: g,
              sendEvent: u,
              bindEvent: f,
              widgetParams: n,
            };
          },
          dispose: function (l) {
            var g = l.state;
            return (
              r(),
              s
                ? g.setQueryParameters(
                    Object.keys(He).reduce(function (m, d) {
                      return Me(Me({}, m), {}, Ka({}, d, void 0));
                    }, {})
                  )
                : g
            );
          },
          getWidgetSearchParameters: function (l) {
            return s ? l.setQueryParameters(He) : l;
          },
        };
      }
    );
  };
const Ku = ku;
function Lt(e) {
  return (
    (Lt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Lt(e)
  );
}
function yi(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Tr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? yi(Object(r), !0).forEach(function (n) {
          zu(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : yi(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function zu(e, t, r) {
  return (
    (t = Ju(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Ju(e) {
  var t = Yu(e, "string");
  return Lt(t) === "symbol" ? t : String(t);
}
function Yu(e, t) {
  if (Lt(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Lt(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Gu = function (t, r) {
    return r.map(function (n) {
      var i = et(t, function (a) {
        return a.objectID === n;
      });
      if (typeof i > "u")
        throw new Error(
          'Could not find objectID "'.concat(
            n,
            '" passed to `clickedObjectIDsAfterSearch` in the returned hits. This is necessary to infer the absolute position and the query ID.'
          )
        );
      return i;
    });
  },
  Zu = function (t) {
    var r = Wn(
      t.map(function (i) {
        return i.__queryID;
      })
    );
    if (r.length > 1)
      throw new Error(
        "Insights currently allows a single `queryID`. The `objectIDs` provided map to multiple `queryID`s."
      );
    var n = r[0];
    if (typeof n != "string")
      throw new Error(
        "Could not infer `queryID`. Ensure InstantSearch `clickAnalytics: true` was added with the Configure widget.\n\nSee: https://alg.li/lNiZZ7"
      );
    return n;
  },
  Xu = function (t) {
    return t.map(function (r) {
      return r.__position;
    });
  },
  ec = function (t) {
    var r = t.method,
      n = t.results,
      i = t.hits,
      a = t.objectIDs,
      s = n.index,
      o = Gu(i, a),
      c = Zu(o);
    switch (r) {
      case "clickedObjectIDsAfterSearch": {
        var u = Xu(o);
        return { index: s, queryID: c, objectIDs: a, positions: u };
      }
      case "convertedObjectIDsAfterSearch":
        return { index: s, queryID: c, objectIDs: a };
      default:
        throw new Error(
          'Unsupported method passed to insights: "'.concat(r, '".')
        );
    }
  },
  tc = function (t, r, n) {
    return function (i) {
      for (
        var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), o = 1;
        o < a;
        o++
      )
        s[o - 1] = arguments[o];
      var c = s[0];
      if (!t) {
        var u = K({ name: "instantsearch" });
        throw new Error(
          u(
            "The `insightsClient` option has not been provided to `instantsearch`."
          )
        );
      }
      if (!Array.isArray(c.objectIDs))
        throw new TypeError("Expected `objectIDs` to be an array.");
      var f = ec({ method: i, results: r, hits: n, objectIDs: c.objectIDs });
      t(i, Tr(Tr({}, f), c));
    };
  };
function za(e) {
  return function (t, r) {
    return e(function (n, i) {
      var a = n.results,
        s = n.hits,
        o = n.instantSearchInstance;
      if (a && s && o) {
        var c = tc(o.insightsClient, a, s);
        return t(Tr(Tr({}, n), {}, { insights: c }), i);
      }
      return t(n, i);
    }, r);
  };
}
function vn(e) {
  return (
    (vn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    vn(e)
  );
}
function rc(e) {
  var t = e.method,
    r = e.payload;
  if (vn(r) !== "object")
    throw new Error("The insights helper expects the payload to be an object.");
  var n;
  try {
    n = Wa(r);
  } catch {
    throw new Error("Could not JSON serialize the payload object.");
  }
  return 'data-insights-method="'
    .concat(t, '" data-insights-payload="')
    .concat(n, '"');
}
function Ja(e, t) {
  return rc({ method: e, payload: t });
}
var nc = za(Ku);
const ic = nc;
function Nt(e) {
  return (
    (Nt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Nt(e)
  );
}
function ac(e) {
  return cc(e) || uc(e) || oc(e) || sc();
}
function sc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function oc(e, t) {
  if (e) {
    if (typeof e == "string") return yn(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return yn(e, t);
  }
}
function uc(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function cc(e) {
  if (Array.isArray(e)) return yn(e);
}
function yn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function bi(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? bi(Object(r), !0).forEach(function (n) {
          fc(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : bi(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function fc(e, t, r) {
  return (
    (t = lc(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function lc(e) {
  var t = dc(e, "string");
  return Nt(t) === "symbol" ? t : String(t);
}
function dc(e, t) {
  if (Nt(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Nt(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var pr = K({ name: "hits-per-page", connector: !0 }),
  hc = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W;
    return (
      Z(t, pr()),
      function (n) {
        var i = n || {},
          a = i.items,
          s = i.transformItems,
          o =
            s === void 0
              ? function (g) {
                  return g;
                }
              : s;
        if (!Array.isArray(a))
          throw new Error(
            pr("The `items` option expects an array of objects.")
          );
        var c = a,
          u = c.filter(function (g) {
            return g.default === !0;
          });
        if (u.length === 0)
          throw new Error(pr("A default value must be specified in `items`."));
        if (u.length > 1)
          throw new Error(
            pr("More than one default value is specified in `items`.")
          );
        var f = u[0],
          h = function (m) {
            var d = m.hitsPerPage;
            return c.map(function (p) {
              return Ee(
                Ee({}, p),
                {},
                { isRefined: Number(p.value) === Number(d) }
              );
            });
          },
          l = {
            getRefine: function (m) {
              return function (d) {
                return !d && d !== 0
                  ? m.setQueryParameter("hitsPerPage", void 0).search()
                  : m.setQueryParameter("hitsPerPage", d).search();
              };
            },
            createURLFactory: function (m) {
              var d = m.state,
                p = m.createURL;
              return function (v) {
                return p(
                  d
                    .resetPage()
                    .setQueryParameter(
                      "hitsPerPage",
                      !v && v !== 0 ? void 0 : v
                    )
                );
              };
            },
          };
        return {
          $$type: "ais.hitsPerPage",
          init: function (m) {
            var d = m.state,
              p = m.instantSearchInstance,
              v = c.some(function (b) {
                return Number(d.hitsPerPage) === Number(b.value);
              });
            v || (c = [{ value: "", label: "" }].concat(ac(c))),
              t(
                Ee(
                  Ee({}, this.getWidgetRenderState(m)),
                  {},
                  { instantSearchInstance: p }
                ),
                !0
              );
          },
          render: function (m) {
            var d = m.instantSearchInstance;
            t(
              Ee(
                Ee({}, this.getWidgetRenderState(m)),
                {},
                { instantSearchInstance: d }
              ),
              !1
            );
          },
          dispose: function (m) {
            var d = m.state;
            return r(), d.setQueryParameter("hitsPerPage", void 0);
          },
          getRenderState: function (m, d) {
            return Ee(
              Ee({}, m),
              {},
              { hitsPerPage: this.getWidgetRenderState(d) }
            );
          },
          getWidgetRenderState: function (m) {
            var d = m.state,
              p = m.results,
              v = m.createURL,
              b = m.helper,
              y = p ? p.nbHits > 0 : !1;
            return {
              items: o(h(d), { results: p }),
              refine: l.getRefine(b),
              createURL: l.createURLFactory({ state: d, createURL: v }),
              hasNoResults: !y,
              canRefine: y,
              widgetParams: n,
            };
          },
          getWidgetUiState: function (m, d) {
            var p = d.searchParameters,
              v = p.hitsPerPage;
            return v === void 0 || v === f.value
              ? m
              : Ee(Ee({}, m), {}, { hitsPerPage: v });
          },
          getWidgetSearchParameters: function (m, d) {
            var p = d.uiState;
            return m.setQueryParameters({
              hitsPerPage: p.hitsPerPage || f.value,
            });
          },
        };
      }
    );
  };
const mc = hc;
function Wt(e) {
  return (
    (Wt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Wt(e)
  );
}
var gc = ["page"];
function Si(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Pe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Si(Object(r), !0).forEach(function (n) {
          Ya(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Si(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Ya(e, t, r) {
  return (
    (t = pc(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function pc(e) {
  var t = vc(e, "string");
  return Wt(t) === "symbol" ? t : String(t);
}
function vc(e, t) {
  if (Wt(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Wt(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function wi(e) {
  return wc(e) || Sc(e) || bc(e) || yc();
}
function yc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bc(e, t) {
  if (e) {
    if (typeof e == "string") return bn(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return bn(e, t);
  }
}
function Sc(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function wc(e) {
  if (Array.isArray(e)) return bn(e);
}
function bn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Pc(e, t) {
  if (e == null) return {};
  var r = Rc(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function Rc(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Oc = K({ name: "infinite-hits", connector: !0 });
function Pi(e) {
  var t = e || {};
  t.page;
  var r = Pc(t, gc);
  return r;
}
function $c() {
  var e = null,
    t = null;
  return {
    read: function (n) {
      var i = n.state;
      return dr(t, Pi(i)) ? e : null;
    },
    write: function (n) {
      var i = n.state,
        a = n.hits;
      (t = Pi(i)), (e = a);
    },
  };
}
function Fc(e) {
  return Object.keys(e)
    .map(Number)
    .sort(function (t, r) {
      return t - r;
    })
    .reduce(function (t, r) {
      return t.concat(e[r]);
    }, []);
}
var jc = function (t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W;
  return (
    Z(t, Oc()),
    function (n) {
      var i = n || {},
        a = i.escapeHTML,
        s = a === void 0 ? !0 : a,
        o = i.transformItems,
        c =
          o === void 0
            ? function (y) {
                return y;
              }
            : o,
        u = i.cache,
        f = u === void 0 ? $c() : u,
        h,
        l,
        g,
        m,
        d = function (S, P) {
          var w = S.page,
            R = w === void 0 ? 0 : w,
            O = Object.keys(P).map(Number);
          return O.length === 0 ? R : Math.min.apply(Math, [R].concat(wi(O)));
        },
        p = function (S, P) {
          var w = S.page,
            R = w === void 0 ? 0 : w,
            O = Object.keys(P).map(Number);
          return O.length === 0 ? R : Math.max.apply(Math, [R].concat(wi(O)));
        },
        v = function (S) {
          return function () {
            S.overrideStateWithoutTriggeringChangeEvent(
              Pe(
                Pe({}, S.state),
                {},
                { page: d(S.state, f.read({ state: S.state }) || {}) - 1 }
              )
            ).searchWithoutTriggeringOnStateChange();
          };
        },
        b = function (S) {
          return function () {
            S.setPage(
              p(S.state, f.read({ state: S.state }) || {}) + 1
            ).search();
          };
        };
      return {
        $$type: "ais.infiniteHits",
        init: function (S) {
          t(
            Pe(
              Pe({}, this.getWidgetRenderState(S)),
              {},
              { instantSearchInstance: S.instantSearchInstance }
            ),
            !0
          );
        },
        render: function (S) {
          var P = S.instantSearchInstance,
            w = this.getWidgetRenderState(S);
          t(Pe(Pe({}, w), {}, { instantSearchInstance: P }), !1),
            g("view", w.currentPageHits);
        },
        getRenderState: function (S, P) {
          return Pe(
            Pe({}, S),
            {},
            { infiniteHits: this.getWidgetRenderState(P) }
          );
        },
        getWidgetRenderState: function (S) {
          var P = S.results,
            w = S.helper,
            R = S.state,
            O = S.instantSearchInstance,
            $,
            _ = [],
            T = f.read({ state: R }) || {};
          if (!P)
            (h = v(w)),
              (l = b(w)),
              (g = Ln({
                instantSearchInstance: O,
                index: w.getIndex(),
                widgetType: this.$$type,
              })),
              (m = Ma({ index: w.getIndex(), widgetType: this.$$type })),
              ($ = R.page === void 0 || d(R, T) === 0);
          else {
            var M = R.page,
              V = M === void 0 ? 0 : M;
            s && P.hits.length > 0 && (P.hits = Hn(P.hits));
            var A = Qa(P.hits, P.page, P.hitsPerPage),
              N = qa(A, P.queryID),
              H = c(N, { results: P });
            T[V] === void 0 &&
              !P.__isArtificial &&
              ((T[V] = H), f.write({ state: R, hits: T })),
              (_ = H),
              ($ = d(R, T) === 0);
          }
          var x = Fc(T),
            j = P ? P.nbPages <= p(R, T) + 1 : !0;
          return {
            hits: x,
            currentPageHits: _,
            sendEvent: g,
            bindEvent: m,
            results: P,
            showPrevious: h,
            showMore: l,
            isFirstPage: $,
            isLastPage: j,
            widgetParams: n,
          };
        },
        dispose: function (S) {
          var P = S.state;
          r();
          var w = P.setQueryParameter("page", void 0);
          return s
            ? w.setQueryParameters(
                Object.keys(He).reduce(function (R, O) {
                  return Pe(Pe({}, R), {}, Ya({}, O, void 0));
                }, {})
              )
            : w;
        },
        getWidgetUiState: function (S, P) {
          var w = P.searchParameters,
            R = w.page || 0;
          return R ? Pe(Pe({}, S), {}, { page: R + 1 }) : S;
        },
        getWidgetSearchParameters: function (S, P) {
          var w = P.uiState,
            R = S;
          s && (R = S.setQueryParameters(He));
          var O = w.page ? w.page - 1 : 0;
          return R.setQueryParameter("page", O);
        },
      };
    }
  );
};
const _c = jc;
var xc = za(_c);
const Ic = xc;
var Ec = ["name", "escapedValue", "path"];
function Ct(e) {
  return (
    (Ct =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ct(e)
  );
}
function Tc(e, t) {
  if (e == null) return {};
  var r = Ac(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function Ac(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Ri(e, t) {
  return Nc(e) || Lc(e, t) || Dc(e, t) || Hc();
}
function Hc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Dc(e, t) {
  if (e) {
    if (typeof e == "string") return Oi(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Oi(e, t);
  }
}
function Oi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Lc(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      s,
      o = [],
      c = !0,
      u = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        c = !1;
      } else
        for (
          ;
          !(c = (n = a.call(r)).done) && (o.push(n.value), o.length !== t);
          c = !0
        );
    } catch (f) {
      (u = !0), (i = f);
    } finally {
      try {
        if (!c && r.return != null && ((s = r.return()), Object(s) !== s))
          return;
      } finally {
        if (u) throw i;
      }
    }
    return o;
  }
}
function Nc(e) {
  if (Array.isArray(e)) return e;
}
function $i(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function oe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $i(Object(r), !0).forEach(function (n) {
          Fr(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : $i(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Fr(e, t, r) {
  return (
    (t = Wc(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Wc(e) {
  var t = Cc(e, "string");
  return Ct(t) === "symbol" ? t : String(t);
}
function Cc(e, t) {
  if (Ct(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ct(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var kr = K({ name: "menu", connector: !0 }),
  Fi = ["isRefined", "name:asc"],
  Mc = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W;
    return (
      Z(t, kr()),
      function (n) {
        var i = n || {},
          a = i.attribute,
          s = i.limit,
          o = s === void 0 ? 10 : s,
          c = i.showMore,
          u = c === void 0 ? !1 : c,
          f = i.showMoreLimit,
          h = f === void 0 ? 20 : f,
          l = i.sortBy,
          g = l === void 0 ? Fi : l,
          m = i.transformItems,
          d =
            m === void 0
              ? function (O) {
                  return O;
                }
              : m;
        if (!a) throw new Error(kr("The `attribute` option is required."));
        if (u === !0 && h <= o)
          throw new Error(
            kr("The `showMoreLimit` option must be greater than `limit`.")
          );
        var p,
          v,
          b,
          y = !1,
          S = function () {};
        function P(O, $) {
          return function () {
            (y = !y), $.render(O);
          };
        }
        function w() {
          S();
        }
        function R() {
          return y ? h : o;
        }
        return {
          $$type: "ais.menu",
          init: function ($) {
            var _ = $.instantSearchInstance;
            t(
              oe(
                oe({}, this.getWidgetRenderState($)),
                {},
                { instantSearchInstance: _ }
              ),
              !0
            );
          },
          render: function ($) {
            var _ = $.instantSearchInstance;
            t(
              oe(
                oe({}, this.getWidgetRenderState($)),
                {},
                { instantSearchInstance: _ }
              ),
              !1
            );
          },
          dispose: function ($) {
            var _ = $.state;
            return (
              r(),
              _.removeHierarchicalFacet(a).setQueryParameter(
                "maxValuesPerFacet",
                void 0
              )
            );
          },
          getRenderState: function ($, _) {
            return oe(
              oe({}, $),
              {},
              {
                menu: oe(
                  oe({}, $.menu),
                  {},
                  Fr({}, a, this.getWidgetRenderState(_))
                ),
              }
            );
          },
          getWidgetRenderState: function ($) {
            var _ = $.results,
              T = $.createURL,
              M = $.instantSearchInstance,
              V = $.helper,
              A = [],
              N = !1;
            if (
              (p ||
                (p = Dn({
                  instantSearchInstance: M,
                  helper: V,
                  attribute: a,
                  widgetType: this.$$type,
                })),
              v ||
                (v = function (I) {
                  return T(V.state.resetPage().toggleFacetRefinement(a, I));
                }),
              b ||
                (b = function (I) {
                  var D = V.getHierarchicalFacetBreadcrumb(a),
                    L = Ri(D, 1),
                    U = L[0];
                  p("click", I || U),
                    V.toggleFacetRefinement(a, I || U).search();
                }),
              $.results && (S = P($, this)),
              _)
            ) {
              var H = _.getFacetValues(a, {
                  sortBy: g,
                  facetOrdering: g === Fi,
                }),
                x = H && !Array.isArray(H) && H.data ? H.data : [];
              (N = u && (y || x.length > R())),
                (A = d(
                  x.slice(0, R()).map(function (j) {
                    var I = j.name,
                      D = j.escapedValue;
                    j.path;
                    var L = Tc(j, Ec);
                    return oe(oe({}, L), {}, { label: I, value: D });
                  }),
                  { results: _ }
                ));
            }
            return {
              items: A,
              createURL: v,
              refine: b,
              sendEvent: p,
              canRefine: A.length > 0,
              widgetParams: n,
              isShowingMore: y,
              toggleShowMore: w,
              canToggleShowMore: N,
            };
          },
          getWidgetUiState: function ($, _) {
            var T = _.searchParameters,
              M = T.getHierarchicalFacetBreadcrumb(a),
              V = Ri(M, 1),
              A = V[0];
            return A
              ? oe(
                  oe({}, $),
                  {},
                  { menu: oe(oe({}, $.menu), {}, Fr({}, a, A)) }
                )
              : $;
          },
          getWidgetSearchParameters: function ($, _) {
            var T = _.uiState,
              M = T.menu && T.menu[a],
              V = $.removeHierarchicalFacet(a).addHierarchicalFacet({
                name: a,
                attributes: [a],
              }),
              A = V.maxValuesPerFacet || 0,
              N = Math.max(A, u ? h : o),
              H = V.setQueryParameter("maxValuesPerFacet", N);
            return M
              ? H.addHierarchicalFacetRefinement(a, M)
              : H.setQueryParameters({
                  hierarchicalFacetsRefinements: oe(
                    oe({}, H.hierarchicalFacetsRefinements),
                    {},
                    Fr({}, a, [])
                  ),
                });
          },
        };
      }
    );
  };
const Ga = Mc;
function Mt(e) {
  return (
    (Mt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Mt(e)
  );
}
function Uc(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (
      Array.isArray(e) ||
      (r = Za(e)) ||
      (t && e && typeof e.length == "number")
    ) {
      r && (e = r);
      var n = 0,
        i = function () {};
      return {
        s: i,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (u) {
          throw u;
        },
        f: i,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0,
    s = !1,
    o;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var u = r.next();
      return (a = u.done), u;
    },
    e: function (u) {
      (s = !0), (o = u);
    },
    f: function () {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (s) throw o;
      }
    },
  };
}
function Qc(e, t) {
  return Bc(e) || Vc(e, t) || Za(e, t) || qc();
}
function qc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Za(e, t) {
  if (e) {
    if (typeof e == "string") return ji(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ji(e, t);
  }
}
function ji(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Vc(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      s,
      o = [],
      c = !0,
      u = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        c = !1;
      } else
        for (
          ;
          !(c = (n = a.call(r)).done) && (o.push(n.value), o.length !== t);
          c = !0
        );
    } catch (f) {
      (u = !0), (i = f);
    } finally {
      try {
        if (!c && r.return != null && ((s = r.return()), Object(s) !== s))
          return;
      } finally {
        if (u) throw i;
      }
    }
    return o;
  }
}
function Bc(e) {
  if (Array.isArray(e)) return e;
}
function _i(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _i(Object(r), !0).forEach(function (n) {
          St(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : _i(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function St(e, t, r) {
  return (
    (t = kc(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function kc(e) {
  var t = Kc(e, "string");
  return Mt(t) === "symbol" ? t : String(t);
}
function Kc(e, t) {
  if (Mt(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Mt(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Kr = K({ name: "numeric-menu", connector: !0 }),
  zc = "ais.numericMenu",
  Jc = function (t) {
    var r = t.instantSearchInstance;
    return function () {
      if (arguments.length === 1) {
        r.sendEventToInsights(arguments.length <= 0 ? void 0 : arguments[0]);
        return;
      }
    };
  },
  Yc = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W;
    return (
      Z(t, Kr()),
      function (n) {
        var i = n || {},
          a = i.attribute,
          s = a === void 0 ? "" : a,
          o = i.items,
          c = o === void 0 ? [] : o,
          u = i.transformItems,
          f =
            u === void 0
              ? function (g) {
                  return g;
                }
              : u;
        if (s === "")
          throw new Error(Kr("The `attribute` option is required."));
        if (!c || c.length === 0)
          throw new Error(
            Kr("The `items` option expects an array of objects.")
          );
        var h = function (m) {
            return c.map(function (d) {
              var p = d.start,
                v = d.end,
                b = d.label;
              return {
                label: b,
                value: encodeURI(JSON.stringify({ start: p, end: v })),
                isRefined: Xa(m, s, { start: p, end: v, label: b }),
              };
            });
          },
          l = {};
        return {
          $$type: zc,
          init: function (m) {
            var d = m.instantSearchInstance;
            t(
              ee(
                ee({}, this.getWidgetRenderState(m)),
                {},
                { instantSearchInstance: d }
              ),
              !0
            );
          },
          render: function (m) {
            var d = m.instantSearchInstance;
            t(
              ee(
                ee({}, this.getWidgetRenderState(m)),
                {},
                { instantSearchInstance: d }
              ),
              !1
            );
          },
          dispose: function (m) {
            var d = m.state;
            return r(), d.clearRefinements(s);
          },
          getWidgetUiState: function (m, d) {
            var p = d.searchParameters,
              v = p.getNumericRefinements(s),
              b = v["="] && v["="][0];
            if (b || b === 0)
              return ee(
                ee({}, m),
                {},
                {
                  numericMenu: ee(
                    ee({}, m.numericMenu),
                    {},
                    St({}, s, "".concat(v["="]))
                  ),
                }
              );
            var y = (v[">="] && v[">="][0]) || "",
              S = (v["<="] && v["<="][0]) || "";
            return y === "" && S === ""
              ? m
              : ee(
                  ee({}, m),
                  {},
                  {
                    numericMenu: ee(
                      ee({}, m.numericMenu),
                      {},
                      St({}, s, "".concat(y, ":").concat(S))
                    ),
                  }
                );
          },
          getWidgetSearchParameters: function (m, d) {
            var p = d.uiState,
              v = p.numericMenu && p.numericMenu[s],
              b = m.clearRefinements(s);
            if (!v)
              return b.setQueryParameters({
                numericRefinements: ee(
                  ee({}, b.numericRefinements),
                  {},
                  St({}, s, {})
                ),
              });
            var y = v.indexOf(":") === -1;
            if (y) return b.addNumericRefinement(s, "=", Number(v));
            var S = v.split(":").map(parseFloat),
              P = Qc(S, 2),
              w = P[0],
              R = P[1],
              O = Q(w) ? b.addNumericRefinement(s, ">=", w) : b,
              $ = Q(R) ? O.addNumericRefinement(s, "<=", R) : O;
            return $;
          },
          getRenderState: function (m, d) {
            return ee(
              ee({}, m),
              {},
              {
                numericMenu: ee(
                  ee({}, m.numericMenu),
                  {},
                  St({}, s, this.getWidgetRenderState(d))
                ),
              }
            );
          },
          getWidgetRenderState: function (m) {
            var d = m.results,
              p = m.state,
              v = m.instantSearchInstance,
              b = m.helper,
              y = m.createURL;
            l.refine ||
              (l.refine = function (_) {
                var T = xi(b.state, s, _);
                l.sendEvent("click", _), b.setState(T).search();
              }),
              l.createURL ||
                (l.createURL = function (_) {
                  return function (T) {
                    return y(xi(_, s, T));
                  };
                }),
              l.sendEvent || (l.sendEvent = Jc({ instantSearchInstance: v }));
            var S = d ? d.nbHits === 0 : !0,
              P = h(p),
              w = !0,
              R = Uc(P),
              O;
            try {
              for (R.s(); !(O = R.n()).done; ) {
                var $ = O.value;
                if ($.isRefined && decodeURI($.value) !== "{}") {
                  w = !1;
                  break;
                }
              }
            } catch (_) {
              R.e(_);
            } finally {
              R.f();
            }
            return {
              createURL: l.createURL(p),
              items: f(P, { results: d }),
              hasNoResults: S,
              canRefine: !(S && w),
              refine: l.refine,
              sendEvent: l.sendEvent,
              widgetParams: n,
            };
          },
        };
      }
    );
  };
function Xa(e, t, r) {
  var n = e.getNumericRefinements(t);
  return r.start !== void 0 && r.end !== void 0
    ? r.start === r.end
      ? Ke(n, "=", r.start)
      : Ke(n, ">=", r.start) && Ke(n, "<=", r.end)
    : r.start !== void 0
    ? Ke(n, ">=", r.start)
    : r.end !== void 0
    ? Ke(n, "<=", r.end)
    : r.start === void 0 && r.end === void 0
    ? Object.keys(n).every(function (i) {
        return (n[i] || []).length === 0;
      })
    : !1;
}
function xi(e, t, r) {
  var n = e,
    i = JSON.parse(decodeURI(r)),
    a = n.getNumericRefinements(t);
  if (i.start === void 0 && i.end === void 0)
    return n.removeNumericRefinement(t);
  if (
    (Xa(n, t, i) || (n = n.removeNumericRefinement(t)),
    i.start !== void 0 && i.end !== void 0)
  ) {
    if (i.start > i.end)
      throw new Error("option.start should be > to option.end");
    if (i.start === i.end)
      return (
        Ke(a, "=", i.start)
          ? (n = n.removeNumericRefinement(t, "=", i.start))
          : (n = n.addNumericRefinement(t, "=", i.start)),
        n
      );
  }
  return (
    i.start !== void 0 &&
      (Ke(a, ">=", i.start) &&
        (n = n.removeNumericRefinement(t, ">=", i.start)),
      (n = n.addNumericRefinement(t, ">=", i.start))),
    i.end !== void 0 &&
      (Ke(a, "<=", i.end) && (n = n.removeNumericRefinement(t, "<=", i.end)),
      (n = n.addNumericRefinement(t, "<=", i.end))),
    typeof n.page == "number" && (n.page = 0),
    n
  );
}
function Ke(e, t, r) {
  return e[t] !== void 0 && e[t].includes(r);
}
const Gc = Yc;
function Ut(e) {
  return (
    (Ut =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ut(e)
  );
}
function Zc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ii(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, es(n.key), n);
  }
}
function Xc(e, t, r) {
  return (
    t && Ii(e.prototype, t),
    r && Ii(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function zr(e, t, r) {
  return (
    (t = es(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function es(e) {
  var t = ef(e, "string");
  return Ut(t) === "symbol" ? t : String(t);
}
function ef(e, t) {
  if (Ut(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ut(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var tf = (function () {
  function e(t) {
    Zc(this, e),
      zr(this, "currentPage", void 0),
      zr(this, "total", void 0),
      zr(this, "padding", void 0),
      (this.currentPage = t.currentPage),
      (this.total = t.total),
      (this.padding = t.padding);
  }
  return (
    Xc(e, [
      {
        key: "pages",
        value: function () {
          var r = this.total,
            n = this.currentPage,
            i = this.padding;
          if (r === 0) return [0];
          var a = this.nbPagesDisplayed(i, r);
          if (a === r) return si({ end: r });
          var s = this.calculatePaddingLeft(n, i, r, a),
            o = a - s,
            c = n - s,
            u = n + o;
          return si({ start: c, end: u });
        },
      },
      {
        key: "nbPagesDisplayed",
        value: function (r, n) {
          return Math.min(2 * r + 1, n);
        },
      },
      {
        key: "calculatePaddingLeft",
        value: function (r, n, i, a) {
          return r <= n ? r : r >= i - n ? a - (i - r) : n;
        },
      },
      {
        key: "isLastPage",
        value: function () {
          return this.currentPage === this.total - 1 || this.total === 0;
        },
      },
      {
        key: "isFirstPage",
        value: function () {
          return this.currentPage === 0;
        },
      },
    ]),
    e
  );
})();
const rf = tf;
function Qt(e) {
  return (
    (Qt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Qt(e)
  );
}
function Ei(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ue(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ei(Object(r), !0).forEach(function (n) {
          nf(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Ei(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function nf(e, t, r) {
  return (
    (t = af(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function af(e) {
  var t = sf(e, "string");
  return Qt(t) === "symbol" ? t : String(t);
}
function sf(e, t) {
  if (Qt(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Qt(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var of = K({ name: "pagination", connector: !0 }),
  uf = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W;
    return (
      Z(t, of()),
      function (n) {
        var i = n || {},
          a = i.totalPages,
          s = i.padding,
          o = s === void 0 ? 3 : s,
          c = new rf({ currentPage: 0, total: 0, padding: o }),
          u = {};
        function f(h) {
          var l = h.nbPages;
          return a !== void 0 ? Math.min(a, l) : l;
        }
        return {
          $$type: "ais.pagination",
          init: function (l) {
            var g = l.instantSearchInstance;
            t(
              Ue(
                Ue({}, this.getWidgetRenderState(l)),
                {},
                { instantSearchInstance: g }
              ),
              !0
            );
          },
          render: function (l) {
            var g = l.instantSearchInstance;
            t(
              Ue(
                Ue({}, this.getWidgetRenderState(l)),
                {},
                { instantSearchInstance: g }
              ),
              !1
            );
          },
          dispose: function (l) {
            var g = l.state;
            return r(), g.setQueryParameter("page", void 0);
          },
          getWidgetUiState: function (l, g) {
            var m = g.searchParameters,
              d = m.page || 0;
            return d ? Ue(Ue({}, l), {}, { page: d + 1 }) : l;
          },
          getWidgetSearchParameters: function (l, g) {
            var m = g.uiState,
              d = m.page ? m.page - 1 : 0;
            return l.setQueryParameter("page", d);
          },
          getWidgetRenderState: function (l) {
            var g = l.results,
              m = l.helper,
              d = l.state,
              p = l.createURL;
            u.refine ||
              (u.refine = function (y) {
                m.setPage(y), m.search();
              }),
              u.createURL ||
                (u.createURL = function (y) {
                  return function (S) {
                    return p(y.setPage(S));
                  };
                });
            var v = d.page || 0,
              b = f(g || { nbPages: 0 });
            return (
              (c.currentPage = v),
              (c.total = b),
              {
                createURL: u.createURL(d),
                refine: u.refine,
                canRefine: b > 1,
                currentRefinement: v,
                nbHits: (g == null ? void 0 : g.nbHits) || 0,
                nbPages: b,
                pages: g ? c.pages() : [],
                isFirstPage: c.isFirstPage(),
                isLastPage: c.isLastPage(),
                widgetParams: n,
              }
            );
          },
          getRenderState: function (l, g) {
            return Ue(
              Ue({}, l),
              {},
              { pagination: this.getWidgetRenderState(g) }
            );
          },
        };
      }
    );
  };
const cf = uf;
function qt(e) {
  return (
    (qt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    qt(e)
  );
}
function Ti(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ue(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ti(Object(r), !0).forEach(function (n) {
          jr(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Ti(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function jr(e, t, r) {
  return (
    (t = ff(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function ff(e) {
  var t = lf(e, "string");
  return qt(t) === "symbol" ? t : String(t);
}
function lf(e, t) {
  if (qt(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (qt(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function nt(e, t) {
  return gf(e) || mf(e, t) || hf(e, t) || df();
}
function df() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hf(e, t) {
  if (e) {
    if (typeof e == "string") return Ai(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ai(e, t);
  }
}
function Ai(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function mf(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      s,
      o = [],
      c = !0,
      u = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        c = !1;
      } else
        for (
          ;
          !(c = (n = a.call(r)).done) && (o.push(n.value), o.length !== t);
          c = !0
        );
    } catch (f) {
      (u = !0), (i = f);
    } finally {
      try {
        if (!c && r.return != null && ((s = r.return()), Object(s) !== s))
          return;
      } finally {
        if (u) throw i;
      }
    }
    return o;
  }
}
function gf(e) {
  if (Array.isArray(e)) return e;
}
var Jr = K(
    { name: "range-input", connector: !0 },
    { name: "range-slider", connector: !0 }
  ),
  pf = "ais.range";
function Hi(e) {
  var t = e.min,
    r = e.max,
    n = e.precision,
    i = Math.pow(10, n);
  return { min: t && Math.floor(t * i) / i, max: r && Math.ceil(r * i) / i };
}
var vf = function (t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W;
  return (
    Z(t, Jr()),
    function (n) {
      var i = n || {},
        a = i.attribute,
        s = a === void 0 ? "" : a,
        o = i.min,
        c = i.max,
        u = i.precision,
        f = u === void 0 ? 0 : u;
      if (!s) throw new Error(Jr("The `attribute` option is required."));
      if (Q(o) && Q(c) && o > c)
        throw new Error(Jr("The `max` option can't be lower than `min`."));
      var h = function (y) {
          return Number(Number(y).toFixed(f));
        },
        l = {
          from: function (y) {
            return y.toLocaleString();
          },
          to: function (y) {
            return h(y).toLocaleString();
          },
        },
        g = function (y, S, P, w) {
          var R = y.state,
            O = S.min,
            $ = S.max,
            _ = R.getNumericRefinement(s, ">=") || [],
            T = nt(_, 1),
            M = T[0],
            V = R.getNumericRefinement(s, "<=") || [],
            A = nt(V, 1),
            N = A[0],
            H = P === void 0 || P === "",
            x = w === void 0 || w === "",
            j = Hi({
              min: H ? void 0 : parseFloat(P),
              max: x ? void 0 : parseFloat(w),
              precision: f,
            }),
            I = j.min,
            D = j.max,
            L;
          !Q(o) && O === I ? (L = void 0) : Q(o) && H ? (L = o) : (L = I);
          var U;
          !Q(c) && $ === D ? (U = void 0) : Q(c) && x ? (U = c) : (U = D);
          var ae = L === void 0,
            X = Q(O) && O <= L,
            ve = ae || (Q(L) && (!Q(O) || X)),
            le = U === void 0,
            ye = Q(U) && $ >= U,
            de = le || (Q(U) && (!Q($) || ye)),
            we = M !== L,
            be = N !== U;
          return (we || be) && ve && de
            ? ((R = R.removeNumericRefinement(s)),
              Q(L) && (R = R.addNumericRefinement(s, ">=", L)),
              Q(U) && (R = R.addNumericRefinement(s, "<=", U)),
              R.resetPage())
            : null;
        },
        m = function (y) {
          return function () {
            if (arguments.length === 1) {
              y.sendEventToInsights(
                arguments.length <= 0 ? void 0 : arguments[0]
              );
              return;
            }
          };
        };
      function d(b) {
        var y;
        Q(o) ? (y = o) : Q(b.min) ? (y = b.min) : (y = 0);
        var S;
        return (
          Q(c) ? (S = c) : Q(b.max) ? (S = b.max) : (S = 0),
          Hi({ min: y, max: S, precision: f })
        );
      }
      function p(b) {
        var y = b.getNumericRefinement(s, ">=") || [],
          S = nt(y, 1),
          P = S[0],
          w = b.getNumericRefinement(s, "<=") || [],
          R = nt(w, 1),
          O = R[0],
          $ = Q(P) ? P : -1 / 0,
          _ = Q(O) ? O : 1 / 0;
        return [$, _];
      }
      function v(b, y) {
        return function () {
          var S =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : [void 0, void 0],
            P = nt(S, 2),
            w = P[0],
            R = P[1],
            O = g(b, y, w, R);
          O && b.setState(O).search();
        };
      }
      return {
        $$type: pf,
        init: function (y) {
          t(
            ue(
              ue({}, this.getWidgetRenderState(y)),
              {},
              { instantSearchInstance: y.instantSearchInstance }
            ),
            !0
          );
        },
        render: function (y) {
          t(
            ue(
              ue({}, this.getWidgetRenderState(y)),
              {},
              { instantSearchInstance: y.instantSearchInstance }
            ),
            !1
          );
        },
        getRenderState: function (y, S) {
          return ue(
            ue({}, y),
            {},
            {
              range: ue(
                ue({}, y.range),
                {},
                jr({}, s, this.getWidgetRenderState(S))
              ),
            }
          );
        },
        getWidgetRenderState: function (y) {
          var S = y.results,
            P = y.helper,
            w = y.instantSearchInstance,
            R = (S && S.disjunctiveFacets) || [],
            O = et(R, function (V) {
              return V.name === s;
            }),
            $ = (O && O.stats) || { min: void 0, max: void 0 },
            _ = d($),
            T = p(P),
            M;
          return (
            S ? (M = v(P, _)) : (M = v(P, { min: void 0, max: void 0 })),
            {
              refine: M,
              canRefine: _.min !== _.max,
              format: l,
              range: _,
              sendEvent: m(w),
              widgetParams: ue(ue({}, n), {}, { precision: f }),
              start: T,
            }
          );
        },
        dispose: function (y) {
          var S = y.state;
          return r(), S.removeDisjunctiveFacet(s).removeNumericRefinement(s);
        },
        getWidgetUiState: function (y, S) {
          var P = S.searchParameters,
            w = P.getNumericRefinements(s),
            R = w[">="],
            O = R === void 0 ? [] : R,
            $ = w["<="],
            _ = $ === void 0 ? [] : $;
          return O.length === 0 && _.length === 0
            ? y
            : ue(
                ue({}, y),
                {},
                {
                  range: ue(
                    ue({}, y.range),
                    {},
                    jr({}, s, "".concat(O, ":").concat(_))
                  ),
                }
              );
        },
        getWidgetSearchParameters: function (y, S) {
          var P = S.uiState,
            w = y.addDisjunctiveFacet(s).setQueryParameters({
              numericRefinements: ue(
                ue({}, y.numericRefinements),
                {},
                jr({}, s, {})
              ),
            });
          Q(o) && (w = w.addNumericRefinement(s, ">=", o)),
            Q(c) && (w = w.addNumericRefinement(s, "<=", c));
          var R = P.range && P.range[s];
          if (!R || R.indexOf(":") === -1) return w;
          var O = R.split(":").map(parseFloat),
            $ = nt(O, 2),
            _ = $[0],
            T = $[1];
          return (
            Q(_) &&
              (!Q(o) || o < _) &&
              ((w = w.removeNumericRefinement(s, ">=")),
              (w = w.addNumericRefinement(s, ">=", _))),
            Q(T) &&
              (!Q(c) || T < c) &&
              ((w = w.removeNumericRefinement(s, "<=")),
              (w = w.addNumericRefinement(s, "<=", T))),
            w
          );
        },
      };
    }
  );
};
const yf = vf;
function Vt(e) {
  return (
    (Vt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Vt(e)
  );
}
var bf = ["name", "escapedValue"],
  Sf = ["escapedValue", "value"];
function Di(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Di(Object(r), !0).forEach(function (n) {
          wt(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Di(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function wt(e, t, r) {
  return (
    (t = wf(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function wf(e) {
  var t = Pf(e, "string");
  return Vt(t) === "symbol" ? t : String(t);
}
function Pf(e, t) {
  if (Vt(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Vt(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Li(e, t) {
  if (e == null) return {};
  var r = Rf(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function Rf(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var vr = K({ name: "refinement-list", connector: !0 }),
  Ni = ["isRefined", "count:desc", "name:asc"],
  Of = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W;
    return (
      Z(t, vr()),
      function (n) {
        var i = n || {},
          a = i.attribute,
          s = i.operator,
          o = s === void 0 ? "or" : s,
          c = i.limit,
          u = c === void 0 ? 10 : c,
          f = i.showMore,
          h = f === void 0 ? !1 : f,
          l = i.showMoreLimit,
          g = l === void 0 ? 20 : l,
          m = i.sortBy,
          d = m === void 0 ? Ni : m,
          p = i.escapeFacetValues,
          v = p === void 0 ? !0 : p,
          b = i.transformItems,
          y =
            b === void 0
              ? function (x) {
                  return x;
                }
              : b;
        if (!a) throw new Error(vr("The `attribute` option is required."));
        if (!/^(and|or)$/.test(o))
          throw new Error(
            vr(
              'The `operator` must one of: `"and"`, `"or"` (got "'.concat(
                o,
                '").'
              )
            )
          );
        if (h === !0 && g <= u)
          throw new Error(
            vr("`showMoreLimit` should be greater than `limit`.")
          );
        var S = function (j) {
            var I = j.name,
              D = j.escapedValue,
              L = Li(j, bf);
            return B(B({}, L), {}, { value: D, label: I, highlighted: I });
          },
          P,
          w = [],
          R = !0,
          O,
          $,
          _ = !1,
          T = function () {};
        function M() {
          T();
        }
        function V(x, j) {
          return function () {
            (_ = !_), j.render(x);
          };
        }
        function A() {
          return _ ? g : u;
        }
        var N = function () {
            return function () {};
          },
          H = function (j, I) {
            return function (D) {
              return function (L) {
                var U = D.instantSearchInstance,
                  ae = D.results;
                if (L === "" && w)
                  t(
                    B(
                      B(
                        {},
                        I.getWidgetRenderState(B(B({}, D), {}, { results: P }))
                      ),
                      {},
                      { instantSearchInstance: U }
                    ),
                    !1
                  );
                else {
                  var X = {
                    highlightPreTag: v
                      ? He.highlightPreTag
                      : ce.highlightPreTag,
                    highlightPostTag: v
                      ? He.highlightPostTag
                      : ce.highlightPostTag,
                  };
                  j.searchForFacetValues(a, L, Math.min(A(), 100), X).then(
                    function (ve) {
                      var le = v ? yo(ve.facetHits) : ve.facetHits,
                        ye = y(
                          le.map(function (de) {
                            var we = de.escapedValue,
                              be = de.value,
                              ht = Li(de, Sf);
                            return B(B({}, ht), {}, { value: we, label: be });
                          }),
                          { results: ae }
                        );
                      t(
                        B(
                          B(
                            {},
                            I.getWidgetRenderState(
                              B(B({}, D), {}, { results: P })
                            )
                          ),
                          {},
                          {
                            items: ye,
                            canToggleShowMore: !1,
                            canRefine: !0,
                            isFromSearch: !0,
                            instantSearchInstance: U,
                          }
                        ),
                        !1
                      );
                    }
                  );
                }
              };
            };
          };
        return {
          $$type: "ais.refinementList",
          init: function (j) {
            t(
              B(
                B({}, this.getWidgetRenderState(j)),
                {},
                { instantSearchInstance: j.instantSearchInstance }
              ),
              !0
            );
          },
          render: function (j) {
            t(
              B(
                B({}, this.getWidgetRenderState(j)),
                {},
                { instantSearchInstance: j.instantSearchInstance }
              ),
              !1
            );
          },
          getRenderState: function (j, I) {
            return B(
              B({}, j),
              {},
              {
                refinementList: B(
                  B({}, j.refinementList),
                  {},
                  wt({}, a, this.getWidgetRenderState(I))
                ),
              }
            );
          },
          getWidgetRenderState: function (j) {
            var I = j.results,
              D = j.state,
              L = j.createURL,
              U = j.instantSearchInstance,
              ae = j.helper,
              X = [],
              ve = [];
            if (
              ((!$ || !O || !N) &&
                (($ = Dn({
                  instantSearchInstance: U,
                  helper: ae,
                  attribute: a,
                  widgetType: this.$$type,
                })),
                (O = function (mr) {
                  $("click", mr), ae.toggleFacetRefinement(a, mr).search();
                }),
                (N = H(ae, this))),
              I)
            ) {
              var le = I.getFacetValues(a, {
                sortBy: d,
                facetOrdering: d === Ni,
              });
              (ve = le && Array.isArray(le) ? le : []),
                (X = y(ve.slice(0, A()).map(S), { results: I }));
              var ye = D.maxValuesPerFacet,
                de = A();
              (R = ye > de ? ve.length <= de : ve.length < de),
                (P = I),
                (w = X),
                j.results && (T = V(j, this));
            }
            var we = N && N(j),
              be = _ && w.length > u,
              ht = h && !R,
              Ys = be || ht;
            return {
              createURL: function (mr) {
                return L(D.resetPage().toggleFacetRefinement(a, mr));
              },
              items: X,
              refine: O,
              searchForItems: we,
              isFromSearch: !1,
              canRefine: X.length > 0,
              widgetParams: n,
              isShowingMore: _,
              canToggleShowMore: Ys,
              toggleShowMore: M,
              sendEvent: $,
              hasExhaustiveItems: R,
            };
          },
          dispose: function (j) {
            var I = j.state;
            r();
            var D = I.setQueryParameter("maxValuesPerFacet", void 0);
            return o === "and" ? D.removeFacet(a) : D.removeDisjunctiveFacet(a);
          },
          getWidgetUiState: function (j, I) {
            var D = I.searchParameters,
              L =
                o === "or"
                  ? D.getDisjunctiveRefinements(a)
                  : D.getConjunctiveRefinements(a);
            return L.length
              ? B(
                  B({}, j),
                  {},
                  {
                    refinementList: B(
                      B({}, j.refinementList),
                      {},
                      wt({}, a, L)
                    ),
                  }
                )
              : j;
          },
          getWidgetSearchParameters: function (j, I) {
            var D = I.uiState,
              L = o === "or",
              U = D.refinementList && D.refinementList[a],
              ae = j.clearRefinements(a),
              X = L ? ae.addDisjunctiveFacet(a) : ae.addFacet(a),
              ve = X.maxValuesPerFacet || 0,
              le = Math.max(ve, h ? g : u),
              ye = X.setQueryParameter("maxValuesPerFacet", le);
            if (!U) {
              var de = L ? "disjunctiveFacetsRefinements" : "facetsRefinements";
              return ye.setQueryParameters(
                wt({}, de, B(B({}, ye[de]), {}, wt({}, a, [])))
              );
            }
            return U.reduce(function (we, be) {
              return L
                ? we.addDisjunctiveFacetRefinement(a, be)
                : we.addFacetRefinement(a, be);
            }, ye);
          },
        };
      }
    );
  };
const $f = Of;
function Bt(e) {
  return (
    (Bt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Bt(e)
  );
}
function Wi(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Wi(Object(r), !0).forEach(function (n) {
          Ff(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Wi(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Ff(e, t, r) {
  return (
    (t = jf(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function jf(e) {
  var t = _f(e, "string");
  return Bt(t) === "symbol" ? t : String(t);
}
function _f(e, t) {
  if (Bt(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Bt(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var xf = K({ name: "search-box", connector: !0 }),
  If = function (t, r) {
    return r(t);
  },
  Ef = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W;
    return (
      Z(t, xf()),
      function (n) {
        var i = n || {},
          a = i.queryHook,
          s = a === void 0 ? If : a,
          o,
          c;
        return {
          $$type: "ais.searchBox",
          init: function (f) {
            var h = f.instantSearchInstance;
            t(
              Qe(
                Qe({}, this.getWidgetRenderState(f)),
                {},
                { instantSearchInstance: h }
              ),
              !0
            );
          },
          render: function (f) {
            var h = f.instantSearchInstance;
            t(
              Qe(
                Qe({}, this.getWidgetRenderState(f)),
                {},
                { instantSearchInstance: h }
              ),
              !1
            );
          },
          dispose: function (f) {
            var h = f.state;
            return r(), h.setQueryParameter("query", void 0);
          },
          getRenderState: function (f, h) {
            return Qe(
              Qe({}, f),
              {},
              { searchBox: this.getWidgetRenderState(h) }
            );
          },
          getWidgetRenderState: function (f) {
            var h = f.helper,
              l = f.searchMetadata,
              g = f.state;
            return (
              o ||
                ((o = function (d) {
                  s(d, function (p) {
                    return h.setQuery(p).search();
                  });
                }),
                (c = function () {
                  h.setQuery("").search();
                })),
              {
                query: g.query || "",
                refine: o,
                clear: c,
                widgetParams: n,
                isSearchStalled: l.isSearchStalled,
              }
            );
          },
          getWidgetUiState: function (f, h) {
            var l = h.searchParameters,
              g = l.query || "";
            return g === "" || (f && f.query === g)
              ? f
              : Qe(Qe({}, f), {}, { query: g });
          },
          getWidgetSearchParameters: function (f, h) {
            var l = h.uiState;
            return f.setQueryParameter("query", l.query || "");
          },
        };
      }
    );
  };
const Tf = Ef;
function kt(e) {
  return (
    (kt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    kt(e)
  );
}
function Ci(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ci(Object(r), !0).forEach(function (n) {
          Af(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Ci(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Af(e, t, r) {
  return (
    (t = Hf(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Hf(e) {
  var t = Df(e, "string");
  return kt(t) === "symbol" ? t : String(t);
}
function Df(e, t) {
  if (kt(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (kt(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Mi = K({ name: "sort-by", connector: !0 }),
  Lf = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W;
    Z(t, Mi());
    var n = {};
    return function (i) {
      var a = i || {},
        s = a.items,
        o = a.transformItems,
        c =
          o === void 0
            ? function (u) {
                return u;
              }
            : o;
      if (!Array.isArray(s))
        throw new Error(Mi("The `items` option expects an array of objects."));
      return {
        $$type: "ais.sortBy",
        init: function (f) {
          var h = f.instantSearchInstance,
            l = this.getWidgetRenderState(f),
            g = l.currentRefinement;
          et(s, function (m) {
            return m.value === g;
          }),
            t(qe(qe({}, l), {}, { instantSearchInstance: h }), !0);
        },
        render: function (f) {
          var h = f.instantSearchInstance;
          t(
            qe(
              qe({}, this.getWidgetRenderState(f)),
              {},
              { instantSearchInstance: h }
            ),
            !1
          );
        },
        dispose: function (f) {
          var h = f.state;
          return r(), n.initialIndex ? h.setIndex(n.initialIndex) : h;
        },
        getRenderState: function (f, h) {
          return qe(qe({}, f), {}, { sortBy: this.getWidgetRenderState(h) });
        },
        getWidgetRenderState: function (f) {
          var h = f.results,
            l = f.helper,
            g = f.state,
            m = f.parent;
          !n.initialIndex && m && (n.initialIndex = m.getIndexName()),
            n.setIndex ||
              (n.setIndex = function (p) {
                l.setIndex(p).search();
              });
          var d = h ? h.nbHits === 0 : !0;
          return {
            currentRefinement: g.index,
            options: c(s, { results: h }),
            refine: n.setIndex,
            hasNoResults: d,
            canRefine: !d && s.length > 0,
            widgetParams: i,
          };
        },
        getWidgetUiState: function (f, h) {
          var l = h.searchParameters,
            g = l.index;
          return qe(
            qe({}, f),
            {},
            { sortBy: g !== n.initialIndex ? g : void 0 }
          );
        },
        getWidgetSearchParameters: function (f, h) {
          var l = h.uiState;
          return f.setQueryParameter(
            "index",
            l.sortBy || n.initialIndex || f.index
          );
        },
      };
    };
  };
const Nf = Lf;
function Kt(e) {
  return (
    (Kt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Kt(e)
  );
}
function Wf(e) {
  return Uf(e) || Mf(e) || ts(e) || Cf();
}
function Cf() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mf(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Uf(e) {
  if (Array.isArray(e)) return Sn(e);
}
function Ui(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function he(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ui(Object(r), !0).forEach(function (n) {
          _r(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Ui(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function _r(e, t, r) {
  return (
    (t = Qf(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Qf(e) {
  var t = qf(e, "string");
  return Kt(t) === "symbol" ? t : String(t);
}
function qf(e, t) {
  if (Kt(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Kt(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Vf(e, t) {
  return Kf(e) || kf(e, t) || ts(e, t) || Bf();
}
function Bf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ts(e, t) {
  if (e) {
    if (typeof e == "string") return Sn(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Sn(e, t);
  }
}
function Sn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function kf(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      s,
      o = [],
      c = !0,
      u = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        c = !1;
      } else
        for (
          ;
          !(c = (n = a.call(r)).done) && (o.push(n.value), o.length !== t);
          c = !0
        );
    } catch (f) {
      (u = !0), (i = f);
    } finally {
      try {
        if (!c && r.return != null && ((s = r.return()), Object(s) !== s))
          return;
      } finally {
        if (u) throw i;
      }
    }
    return o;
  }
}
function Kf(e) {
  if (Array.isArray(e)) return e;
}
var Qi = K({ name: "rating-menu", connector: !0 }),
  rs = "ais.ratingMenu",
  yr = 1,
  zf = function (t) {
    var r = t.instantSearchInstance,
      n = t.helper,
      i = t.getRefinedStar,
      a = t.attribute;
    return function () {
      for (var s = arguments.length, o = new Array(s), c = 0; c < s; c++)
        o[c] = arguments[c];
      if (o.length === 1) {
        r.sendEventToInsights(o[0]);
        return;
      }
      var u = o[0],
        f = o[1],
        h = o[2],
        l = h === void 0 ? "Filter Applied" : h;
      if (u === "click") {
        var g = i() === Number(f);
        g ||
          r.sendEventToInsights({
            insightsMethod: "clickedFilters",
            widgetType: rs,
            eventType: u,
            payload: {
              eventName: l,
              index: n.getIndex(),
              filters: ["".concat(a, ">=").concat(f)],
            },
            attribute: a,
          });
      }
    };
  },
  Jf = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W;
    return (
      Z(t, Qi()),
      function (n) {
        var i = n || {},
          a = i.attribute,
          s = i.max,
          o = s === void 0 ? 5 : s,
          c;
        if (!a) throw new Error(Qi("The `attribute` option is required."));
        var u = function (d) {
            var p,
              v = d.getNumericRefinements(a);
            if ((p = v[">="]) !== null && p !== void 0 && p.length)
              return v[">="][0];
          },
          f = function (d) {
            var p = 0;
            return (
              d.forEach(function (v) {
                var b = v.name.split("."),
                  y = Vf(b, 2),
                  S = y[1],
                  P = S === void 0 ? "" : S;
                p = Math.max(p, P.length);
              }),
              p
            );
          };
        function h(m, d) {
          var p = u(m) === Number(d),
            v = m.resetPage().removeNumericRefinement(a);
          return p
            ? v
            : v
                .addNumericRefinement(a, "<=", o)
                .addNumericRefinement(a, ">=", Number(d));
        }
        var l = function (d, p) {
            c("click", p), d.setState(h(d.state, p)).search();
          },
          g = {
            toggleRefinementFactory: function (d) {
              return l.bind(null, d);
            },
            createURLFactory: function (d) {
              var p = d.state,
                v = d.createURL;
              return function (b) {
                return v(h(p, b));
              };
            },
          };
        return {
          $$type: rs,
          init: function (d) {
            var p = d.instantSearchInstance;
            t(
              he(
                he({}, this.getWidgetRenderState(d)),
                {},
                { instantSearchInstance: p }
              ),
              !0
            );
          },
          render: function (d) {
            var p = d.instantSearchInstance;
            t(
              he(
                he({}, this.getWidgetRenderState(d)),
                {},
                { instantSearchInstance: p }
              ),
              !1
            );
          },
          getRenderState: function (d, p) {
            return he(
              he({}, d),
              {},
              {
                ratingMenu: he(
                  he({}, d.ratingMenu),
                  {},
                  _r({}, a, this.getWidgetRenderState(p))
                ),
              }
            );
          },
          getWidgetRenderState: function (d) {
            var p = d.helper,
              v = d.results,
              b = d.state,
              y = d.instantSearchInstance,
              S = d.createURL,
              P = [];
            c ||
              (c = zf({
                instantSearchInstance: y,
                helper: p,
                getRefinedStar: function () {
                  return u(p.state);
                },
                attribute: a,
              }));
            var w = !1,
              R = 0,
              O = v == null ? void 0 : v.getFacetValues(a, {});
            if (v && O) {
              O.length, f(O);
              for (
                var $ = u(b),
                  _ = function (N) {
                    var H = $ === N;
                    w = w || H;
                    var x = O.filter(function (I) {
                      return Number(I.name) >= N && Number(I.name) <= o;
                    })
                      .map(function (I) {
                        return I.count;
                      })
                      .reduce(function (I, D) {
                        return I + D;
                      }, 0);
                    if (((R += x), $ && !H && x === 0)) return "continue";
                    var j = Wf(new Array(Math.floor(o / yr))).map(function (
                      I,
                      D
                    ) {
                      return D * yr < N;
                    });
                    P.push({
                      stars: j,
                      name: String(N),
                      label: String(N),
                      value: String(N),
                      count: x,
                      isRefined: H,
                    });
                  },
                  T = yr;
                T < o;
                T += yr
              )
                var M = _(T);
            }
            P = P.reverse();
            var V = v ? v.nbHits === 0 : !0;
            return {
              items: P,
              hasNoResults: V,
              canRefine: (!V || w) && R > 0,
              refine: g.toggleRefinementFactory(p),
              sendEvent: c,
              createURL: g.createURLFactory({ state: b, createURL: S }),
              widgetParams: n,
            };
          },
          dispose: function (d) {
            var p = d.state;
            return r(), p.removeNumericRefinement(a);
          },
          getWidgetUiState: function (d, p) {
            var v = p.searchParameters,
              b = u(v);
            return typeof b != "number"
              ? d
              : he(
                  he({}, d),
                  {},
                  { ratingMenu: he(he({}, d.ratingMenu), {}, _r({}, a, b)) }
                );
          },
          getWidgetSearchParameters: function (d, p) {
            var v = p.uiState,
              b = v.ratingMenu && v.ratingMenu[a],
              y = d.clearRefinements(a),
              S = y.addDisjunctiveFacet(a);
            return b
              ? S.addNumericRefinement(a, "<=", o).addNumericRefinement(
                  a,
                  ">=",
                  b
                )
              : S.setQueryParameters({
                  numericRefinements: he(
                    he({}, S.numericRefinements),
                    {},
                    _r({}, a, {})
                  ),
                });
          },
        };
      }
    );
  };
const Yf = Jf;
function zt(e) {
  return (
    (zt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    zt(e)
  );
}
function qi(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function it(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? qi(Object(r), !0).forEach(function (n) {
          Gf(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : qi(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Gf(e, t, r) {
  return (
    (t = Zf(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Zf(e) {
  var t = Xf(e, "string");
  return zt(t) === "symbol" ? t : String(t);
}
function Xf(e, t) {
  if (zt(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (zt(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var el = K({ name: "stats", connector: !0 }),
  tl = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W;
    return (
      Z(t, el()),
      function (n) {
        return {
          $$type: "ais.stats",
          init: function (a) {
            var s = a.instantSearchInstance;
            t(
              it(
                it({}, this.getWidgetRenderState(a)),
                {},
                { instantSearchInstance: s }
              ),
              !0
            );
          },
          render: function (a) {
            var s = a.instantSearchInstance;
            t(
              it(
                it({}, this.getWidgetRenderState(a)),
                {},
                { instantSearchInstance: s }
              ),
              !1
            );
          },
          dispose: function () {
            r();
          },
          getRenderState: function (a, s) {
            return it(it({}, a), {}, { stats: this.getWidgetRenderState(s) });
          },
          getWidgetRenderState: function (a) {
            var s = a.results,
              o = a.state;
            return s
              ? {
                  hitsPerPage: s.hitsPerPage,
                  nbHits: s.nbHits,
                  nbSortedHits: s.nbSortedHits,
                  areHitsSorted:
                    typeof s.appliedRelevancyStrictness < "u" &&
                    s.appliedRelevancyStrictness > 0 &&
                    s.nbSortedHits !== s.nbHits,
                  nbPages: s.nbPages,
                  page: s.page,
                  processingTimeMS: s.processingTimeMS,
                  query: s.query,
                  widgetParams: n,
                }
              : {
                  hitsPerPage: o.hitsPerPage,
                  nbHits: 0,
                  nbSortedHits: void 0,
                  areHitsSorted: !1,
                  nbPages: 0,
                  page: o.page || 0,
                  processingTimeMS: -1,
                  query: o.query || "",
                  widgetParams: n,
                };
          },
        };
      }
    );
  };
const rl = tl;
function Jt(e) {
  return (
    (Jt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Jt(e)
  );
}
function Vi(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Vi(Object(r), !0).forEach(function (n) {
          xr(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Vi(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function xr(e, t, r) {
  return (
    (t = nl(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function nl(e) {
  var t = il(e, "string");
  return Jt(t) === "symbol" ? t : String(t);
}
function il(e, t) {
  if (Jt(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Jt(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Bi = K({ name: "toggle-refinement", connector: !0 }),
  ns = "ais.toggleRefinement",
  al = function (t) {
    var r = t.instantSearchInstance,
      n = t.helper,
      i = t.attribute,
      a = t.on,
      s = function () {
        for (var c = arguments.length, u = new Array(c), f = 0; f < c; f++)
          u[f] = arguments[f];
        if (u.length === 1) {
          r.sendEventToInsights(u[0]);
          return;
        }
        var h = u[0],
          l = u[1],
          g = u[2],
          m = g === void 0 ? "Filter Applied" : g;
        h !== "click" ||
          a === void 0 ||
          l ||
          r.sendEventToInsights({
            insightsMethod: "clickedFilters",
            widgetType: ns,
            eventType: h,
            payload: {
              eventName: m,
              index: n.getIndex(),
              filters: a.map(function (d) {
                return "".concat(i, ":").concat(d);
              }),
            },
            attribute: i,
          });
      };
    return s;
  },
  sl = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W;
    return (
      Z(t, Bi()),
      function (n) {
        var i = n || {},
          a = i.attribute,
          s = i.on,
          o = s === void 0 ? !0 : s,
          c = i.off;
        if (!a) throw new Error(Bi("The `attribute` option is required."));
        var u = c !== void 0,
          f = Vr(o).map(yt),
          h = u ? Vr(c).map(yt) : void 0,
          l,
          g = function (p) {
            return function () {
              var v =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : { isRefined: !1 },
                b = v.isRefined;
              b
                ? (f.forEach(function (y) {
                    return p.removeDisjunctiveFacetRefinement(a, y);
                  }),
                  u &&
                    h.forEach(function (y) {
                      return p.addDisjunctiveFacetRefinement(a, y);
                    }))
                : (l("click", b),
                  u &&
                    h.forEach(function (y) {
                      return p.removeDisjunctiveFacetRefinement(a, y);
                    }),
                  f.forEach(function (y) {
                    return p.addDisjunctiveFacetRefinement(a, y);
                  })),
                p.search();
            };
          },
          m = {
            createURLFactory: function (p, v) {
              var b = v.state,
                y = v.createURL;
              return function () {
                b = b.resetPage();
                var S = p ? f : h;
                S &&
                  S.forEach(function (w) {
                    b = b.removeDisjunctiveFacetRefinement(a, w);
                  });
                var P = p ? h : f;
                return (
                  P &&
                    P.forEach(function (w) {
                      b = b.addDisjunctiveFacetRefinement(a, w);
                    }),
                  y(b)
                );
              };
            },
          };
        return {
          $$type: ns,
          init: function (p) {
            var v = p.instantSearchInstance;
            t(
              me(
                me({}, this.getWidgetRenderState(p)),
                {},
                { instantSearchInstance: v }
              ),
              !0
            );
          },
          render: function (p) {
            var v = p.instantSearchInstance;
            t(
              me(
                me({}, this.getWidgetRenderState(p)),
                {},
                { instantSearchInstance: v }
              ),
              !1
            );
          },
          dispose: function (p) {
            var v = p.state;
            return r(), v.removeDisjunctiveFacet(a);
          },
          getRenderState: function (p, v) {
            return me(
              me({}, p),
              {},
              {
                toggleRefinement: me(
                  me({}, p.toggleRefinement),
                  {},
                  xr({}, a, this.getWidgetRenderState(v))
                ),
              }
            );
          },
          getWidgetRenderState: function (p) {
            var v = p.state,
              b = p.helper,
              y = p.results,
              S = p.createURL,
              P = p.instantSearchInstance,
              w = y
                ? f.every(function (A) {
                    return v.isDisjunctiveFacetRefined(a, A);
                  })
                : f.every(function (A) {
                    return v.isDisjunctiveFacetRefined(a, A);
                  }),
              R = { isRefined: w, count: 0 },
              O = { isRefined: u && !w, count: 0 };
            if (y) {
              var $ = Vr(h || !1),
                _ = y.getFacetValues(a, {}) || [],
                T = f
                  .map(function (A) {
                    return et(_, function (N) {
                      var H = N.escapedValue;
                      return H === yt(String(A));
                    });
                  })
                  .filter(function (A) {
                    return A !== void 0;
                  }),
                M = u
                  ? $.map(function (A) {
                      return et(_, function (N) {
                        var H = N.escapedValue;
                        return H === yt(String(A));
                      });
                    }).filter(function (A) {
                      return A !== void 0;
                    })
                  : [];
              (R = {
                isRefined: T.length
                  ? T.every(function (A) {
                      return A.isRefined;
                    })
                  : !1,
                count:
                  T.reduce(function (A, N) {
                    return A + N.count;
                  }, 0) || null,
              }),
                (O = {
                  isRefined: M.length
                    ? M.every(function (A) {
                        return A.isRefined;
                      })
                    : !1,
                  count:
                    M.reduce(function (A, N) {
                      return A + N.count;
                    }, 0) ||
                    _.reduce(function (A, N) {
                      var H = N.count;
                      return A + H;
                    }, 0),
                });
            }
            l ||
              (l = al({
                instantSearchInstance: P,
                attribute: a,
                on: f,
                helper: b,
              }));
            var V = w ? O : R;
            return {
              value: {
                name: a,
                isRefined: w,
                count: y ? V.count : null,
                onFacetValue: R,
                offFacetValue: O,
              },
              createURL: m.createURLFactory(w, { state: v, createURL: S }),
              sendEvent: l,
              canRefine: Boolean(y ? V.count : null),
              refine: g(b),
              widgetParams: n,
            };
          },
          getWidgetUiState: function (p, v) {
            var b = v.searchParameters,
              y =
                f &&
                f.every(function (S) {
                  return b.isDisjunctiveFacetRefined(a, S);
                });
            return y
              ? me(
                  me({}, p),
                  {},
                  { toggle: me(me({}, p.toggle), {}, xr({}, a, y)) }
                )
              : p;
          },
          getWidgetSearchParameters: function (p, v) {
            var b = v.uiState,
              y = p.clearRefinements(a).addDisjunctiveFacet(a),
              S = Boolean(b.toggle && b.toggle[a]);
            return S
              ? (f &&
                  f.forEach(function (P) {
                    y = y.addDisjunctiveFacetRefinement(a, P);
                  }),
                y)
              : u
              ? (h &&
                  h.forEach(function (P) {
                    y = y.addDisjunctiveFacetRefinement(a, P);
                  }),
                y)
              : y.setQueryParameters({
                  disjunctiveFacetsRefinements: me(
                    me({}, p.disjunctiveFacetsRefinements),
                    {},
                    xr({}, a, [])
                  ),
                });
          },
        };
      }
    );
  };
const ol = sl;
function Yt(e) {
  return (
    (Yt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Yt(e)
  );
}
function ki(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ve(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ki(Object(r), !0).forEach(function (n) {
          is(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ki(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function is(e, t, r) {
  return (
    (t = ul(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function ul(e) {
  var t = cl(e, "string");
  return Yt(t) === "symbol" ? t : String(t);
}
function cl(e, t) {
  if (Yt(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Yt(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ki(e, t) {
  return hl(e) || dl(e, t) || ll(e, t) || fl();
}
function fl() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ll(e, t) {
  if (e) {
    if (typeof e == "string") return zi(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return zi(e, t);
  }
}
function zi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function dl(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      s,
      o = [],
      c = !0,
      u = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        c = !1;
      } else
        for (
          ;
          !(c = (n = a.call(r)).done) && (o.push(n.value), o.length !== t);
          c = !0
        );
    } catch (f) {
      (u = !0), (i = f);
    } finally {
      try {
        if (!c && r.return != null && ((s = r.return()), Object(s) !== s))
          return;
      } finally {
        if (u) throw i;
      }
    }
    return o;
  }
}
function hl(e) {
  if (Array.isArray(e)) return e;
}
var Ji = K({ name: "breadcrumb", connector: !0 }),
  ml = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W;
    Z(t, Ji());
    var n = {};
    return function (i) {
      var a = i || {},
        s = a.attributes,
        o = a.separator,
        c = o === void 0 ? " > " : o,
        u = a.rootPath,
        f = u === void 0 ? null : u,
        h = a.transformItems,
        l =
          h === void 0
            ? function (p) {
                return p;
              }
            : h;
      if (!s || !Array.isArray(s) || s.length === 0)
        throw new Error(
          Ji("The `attributes` option expects an array of strings.")
        );
      var g = Ki(s, 1),
        m = g[0];
      function d(p, v) {
        if (!v) {
          var b = p.getHierarchicalFacetBreadcrumb(m);
          return b.length === 0
            ? p
            : p.resetPage().toggleFacetRefinement(m, b[0]);
        }
        return p.resetPage().toggleFacetRefinement(m, v);
      }
      return {
        $$type: "ais.breadcrumb",
        init: function (v) {
          t(
            Ve(
              Ve({}, this.getWidgetRenderState(v)),
              {},
              { instantSearchInstance: v.instantSearchInstance }
            ),
            !0
          );
        },
        render: function (v) {
          t(
            Ve(
              Ve({}, this.getWidgetRenderState(v)),
              {},
              { instantSearchInstance: v.instantSearchInstance }
            ),
            !1
          );
        },
        dispose: function () {
          r();
        },
        getRenderState: function (v, b) {
          return Ve(
            Ve({}, v),
            {},
            {
              breadcrumb: Ve(
                Ve({}, v.breadcrumb),
                {},
                is({}, m, this.getWidgetRenderState(b))
              ),
            }
          );
        },
        getWidgetRenderState: function (v) {
          var b = v.helper,
            y = v.createURL,
            S = v.results,
            P = v.state;
          function w() {
            if (!S || P.hierarchicalFacets.length === 0) return [];
            var O = Ki(P.hierarchicalFacets, 1),
              $ = O[0].name,
              _ = S.getFacetValues($, {}),
              T = Array.isArray(_.data) ? _.data : [],
              M = l(gl(as(T)), { results: S });
            return M;
          }
          var R = w();
          return (
            n.createURL ||
              (n.createURL = function (O) {
                return y(d(b.state, O));
              }),
            n.refine ||
              (n.refine = function (O) {
                b.setState(d(b.state, O)).search();
              }),
            {
              canRefine: R.length > 0,
              createURL: n.createURL,
              items: R,
              refine: n.refine,
              widgetParams: i,
            }
          );
        },
        getWidgetSearchParameters: function (v) {
          return v.isHierarchicalFacet(m)
            ? (v.getHierarchicalFacetByName(m), v)
            : v.addHierarchicalFacet({
                name: m,
                attributes: s,
                separator: c,
                rootPath: f,
              });
        },
      };
    };
  };
function as(e) {
  return e.reduce(function (t, r) {
    return (
      r.isRefined &&
        (t.push({ label: r.name, value: r.escapedValue }),
        Array.isArray(r.data) && (t = t.concat(as(r.data)))),
      t
    );
  }, []);
}
function gl(e) {
  return e.map(function (t, r) {
    return {
      label: t.label,
      value: r + 1 === e.length ? null : e[r + 1].value,
    };
  });
}
const pl = ml;
function vl(e) {
  return typeof e == "object" && e !== null
    ? Cn(Array.isArray(e) ? [] : {}, e)
    : e;
}
function Ar(e) {
  return (
    typeof e == "function" ||
    Array.isArray(e) ||
    Object.prototype.toString.call(e) === "[object Object]"
  );
}
function Cn(e, t) {
  if (e === t) return e;
  for (var r in t)
    if (
      !(
        !Object.prototype.hasOwnProperty.call(t, r) ||
        r === "__proto__" ||
        r === "constructor"
      )
    ) {
      var n = t[r],
        i = e[r];
      (typeof i < "u" && typeof n > "u") ||
        (Ar(i) && Ar(n) ? (e[r] = Cn(i, n)) : (e[r] = vl(n)));
    }
  return e;
}
function yl(e) {
  Ar(e) || (e = {});
  for (var t = 1, r = arguments.length; t < r; t++) {
    var n = arguments[t];
    Ar(n) && Cn(e, n);
  }
  return e;
}
var Cr = yl,
  Mn = function () {
    var t = Array.prototype.slice.call(arguments);
    return t.reduceRight(function (r, n) {
      return (
        Object.keys(Object(n)).forEach(function (i) {
          n[i] !== void 0 && (r[i] !== void 0 && delete r[i], (r[i] = n[i]));
        }),
        r
      );
    }, {});
  };
function bl(e, t) {
  return e.filter(function (r, n) {
    return t.indexOf(r) > -1 && e.indexOf(r) === n;
  });
}
var Sl = bl,
  Mr = function (t, r) {
    if (Array.isArray(t)) {
      for (var n = 0; n < t.length; n++) if (r(t[n])) return t[n];
    }
  };
function ss(e) {
  if (typeof e == "number") return e;
  if (typeof e == "string") return parseFloat(e);
  if (Array.isArray(e)) return e.map(ss);
  throw new Error(
    "The value should be a number, a parsable string or an array of those."
  );
}
var wl = ss;
function Pl(e, t) {
  if (e === null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Un = Pl;
function Rl(e) {
  return e && Object.keys(e).length > 0;
}
var Qn = Rl,
  Ol = function (t) {
    return t === null ? !1 : /^[a-zA-Z0-9_-]{1,64}$/.test(t);
  },
  $l = Mn,
  Fl = Un,
  jl = Qn,
  Ge = {
    addRefinement: function (t, r, n) {
      if (Ge.isRefined(t, r, n)) return t;
      var i = "" + n,
        a = t[r] ? t[r].concat(i) : [i],
        s = {};
      return (s[r] = a), $l({}, s, t);
    },
    removeRefinement: function (t, r, n) {
      if (n === void 0)
        return Ge.clearRefinement(t, function (a, s) {
          return r === s;
        });
      var i = "" + n;
      return Ge.clearRefinement(t, function (a, s) {
        return r === s && i === a;
      });
    },
    toggleRefinement: function (t, r, n) {
      if (n === void 0)
        throw new Error("toggleRefinement should be used with a value");
      return Ge.isRefined(t, r, n)
        ? Ge.removeRefinement(t, r, n)
        : Ge.addRefinement(t, r, n);
    },
    clearRefinement: function (t, r, n) {
      if (r === void 0) return jl(t) ? {} : t;
      if (typeof r == "string") return Fl(t, [r]);
      if (typeof r == "function") {
        var i = !1,
          a = Object.keys(t).reduce(function (s, o) {
            var c = t[o] || [],
              u = c.filter(function (f) {
                return !r(f, o, n);
              });
            return u.length !== c.length && (i = !0), (s[o] = u), s;
          }, {});
        return i ? a : t;
      }
    },
    isRefined: function (t, r, n) {
      var i = !!t[r] && t[r].length > 0;
      if (n === void 0 || !i) return i;
      var a = "" + n;
      return t[r].indexOf(a) !== -1;
    },
  },
  _l = Ge,
  wn = Cr,
  Yr = Mn,
  Yi = Sl,
  os = Mr,
  Gr = wl,
  Gi = Un,
  Pn = Qn,
  xl = Ol,
  G = _l;
function qn(e, t) {
  return Array.isArray(e) && Array.isArray(t)
    ? e.length === t.length &&
        e.every(function (r, n) {
          return qn(t[n], r);
        })
    : e === t;
}
function Il(e, t) {
  return os(e, function (r) {
    return qn(r, t);
  });
}
function ge(e) {
  var t = e ? ge._parseNumbers(e) : {};
  t.userToken !== void 0 &&
    !xl(t.userToken) &&
    console.warn(
      "[algoliasearch-helper] The `userToken` parameter is invalid. This can lead to wrong analytics.\n  - Format: [a-zA-Z0-9_-]{1,64}"
    ),
    (this.facets = t.facets || []),
    (this.disjunctiveFacets = t.disjunctiveFacets || []),
    (this.hierarchicalFacets = t.hierarchicalFacets || []),
    (this.facetsRefinements = t.facetsRefinements || {}),
    (this.facetsExcludes = t.facetsExcludes || {}),
    (this.disjunctiveFacetsRefinements = t.disjunctiveFacetsRefinements || {}),
    (this.numericRefinements = t.numericRefinements || {}),
    (this.tagRefinements = t.tagRefinements || []),
    (this.hierarchicalFacetsRefinements =
      t.hierarchicalFacetsRefinements || {});
  var r = this;
  Object.keys(t).forEach(function (n) {
    var i = ge.PARAMETERS.indexOf(n) !== -1,
      a = t[n] !== void 0;
    !i && a && (r[n] = t[n]);
  });
}
ge.PARAMETERS = Object.keys(new ge());
ge._parseNumbers = function (e) {
  if (e instanceof ge) return e;
  var t = {},
    r = [
      "aroundPrecision",
      "aroundRadius",
      "getRankingInfo",
      "minWordSizefor2Typos",
      "minWordSizefor1Typo",
      "page",
      "maxValuesPerFacet",
      "distinct",
      "minimumAroundRadius",
      "hitsPerPage",
      "minProximity",
    ];
  if (
    (r.forEach(function (i) {
      var a = e[i];
      if (typeof a == "string") {
        var s = parseFloat(a);
        t[i] = isNaN(s) ? a : s;
      }
    }),
    Array.isArray(e.insideBoundingBox) &&
      (t.insideBoundingBox = e.insideBoundingBox.map(function (i) {
        return Array.isArray(i)
          ? i.map(function (a) {
              return parseFloat(a);
            })
          : i;
      })),
    e.numericRefinements)
  ) {
    var n = {};
    Object.keys(e.numericRefinements).forEach(function (i) {
      var a = e.numericRefinements[i] || {};
      (n[i] = {}),
        Object.keys(a).forEach(function (s) {
          var o = a[s],
            c = o.map(function (u) {
              return Array.isArray(u)
                ? u.map(function (f) {
                    return typeof f == "string" ? parseFloat(f) : f;
                  })
                : typeof u == "string"
                ? parseFloat(u)
                : u;
            });
          n[i][s] = c;
        });
    }),
      (t.numericRefinements = n);
  }
  return wn({}, e, t);
};
ge.make = function (t) {
  var r = new ge(t),
    n = t.hierarchicalFacets || [];
  return (
    n.forEach(function (i) {
      if (i.rootPath) {
        var a = r.getHierarchicalRefinement(i.name);
        a.length > 0 &&
          a[0].indexOf(i.rootPath) !== 0 &&
          (r = r.clearRefinements(i.name)),
          (a = r.getHierarchicalRefinement(i.name)),
          a.length === 0 &&
            (r = r.toggleHierarchicalFacetRefinement(i.name, i.rootPath));
      }
    }),
    r
  );
};
ge.validate = function (e, t) {
  var r = t || {};
  return e.tagFilters && r.tagRefinements && r.tagRefinements.length > 0
    ? new Error(
        "[Tags] Cannot switch from the managed tag API to the advanced API. It is probably an error, if it is really what you want, you should first clear the tags with clearTags method."
      )
    : e.tagRefinements.length > 0 && r.tagFilters
    ? new Error(
        "[Tags] Cannot switch from the advanced tag API to the managed API. It is probably an error, if it is not, you should first clear the tags with clearTags method."
      )
    : e.numericFilters && r.numericRefinements && Pn(r.numericRefinements)
    ? new Error(
        "[Numeric filters] Can't switch from the advanced to the managed API. It is probably an error, if this is really what you want, you have to first clear the numeric filters."
      )
    : Pn(e.numericRefinements) && r.numericFilters
    ? new Error(
        "[Numeric filters] Can't switch from the managed API to the advanced. It is probably an error, if this is really what you want, you have to first clear the numeric filters."
      )
    : null;
};
ge.prototype = {
  constructor: ge,
  clearRefinements: function (t) {
    var r = {
      numericRefinements: this._clearNumericRefinements(t),
      facetsRefinements: G.clearRefinement(
        this.facetsRefinements,
        t,
        "conjunctiveFacet"
      ),
      facetsExcludes: G.clearRefinement(this.facetsExcludes, t, "exclude"),
      disjunctiveFacetsRefinements: G.clearRefinement(
        this.disjunctiveFacetsRefinements,
        t,
        "disjunctiveFacet"
      ),
      hierarchicalFacetsRefinements: G.clearRefinement(
        this.hierarchicalFacetsRefinements,
        t,
        "hierarchicalFacet"
      ),
    };
    return r.numericRefinements === this.numericRefinements &&
      r.facetsRefinements === this.facetsRefinements &&
      r.facetsExcludes === this.facetsExcludes &&
      r.disjunctiveFacetsRefinements === this.disjunctiveFacetsRefinements &&
      r.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements
      ? this
      : this.setQueryParameters(r);
  },
  clearTags: function () {
    return this.tagFilters === void 0 && this.tagRefinements.length === 0
      ? this
      : this.setQueryParameters({ tagFilters: void 0, tagRefinements: [] });
  },
  setIndex: function (t) {
    return t === this.index ? this : this.setQueryParameters({ index: t });
  },
  setQuery: function (t) {
    return t === this.query ? this : this.setQueryParameters({ query: t });
  },
  setPage: function (t) {
    return t === this.page ? this : this.setQueryParameters({ page: t });
  },
  setFacets: function (t) {
    return this.setQueryParameters({ facets: t });
  },
  setDisjunctiveFacets: function (t) {
    return this.setQueryParameters({ disjunctiveFacets: t });
  },
  setHitsPerPage: function (t) {
    return this.hitsPerPage === t
      ? this
      : this.setQueryParameters({ hitsPerPage: t });
  },
  setTypoTolerance: function (t) {
    return this.typoTolerance === t
      ? this
      : this.setQueryParameters({ typoTolerance: t });
  },
  addNumericRefinement: function (e, t, r) {
    var n = Gr(r);
    if (this.isNumericRefined(e, t, n)) return this;
    var i = wn({}, this.numericRefinements);
    return (
      (i[e] = wn({}, i[e])),
      i[e][t]
        ? ((i[e][t] = i[e][t].slice()), i[e][t].push(n))
        : (i[e][t] = [n]),
      this.setQueryParameters({ numericRefinements: i })
    );
  },
  getConjunctiveRefinements: function (e) {
    return this.isConjunctiveFacet(e) ? this.facetsRefinements[e] || [] : [];
  },
  getDisjunctiveRefinements: function (e) {
    return this.isDisjunctiveFacet(e)
      ? this.disjunctiveFacetsRefinements[e] || []
      : [];
  },
  getHierarchicalRefinement: function (e) {
    return this.hierarchicalFacetsRefinements[e] || [];
  },
  getExcludeRefinements: function (e) {
    return this.isConjunctiveFacet(e) ? this.facetsExcludes[e] || [] : [];
  },
  removeNumericRefinement: function (e, t, r) {
    return r !== void 0
      ? this.isNumericRefined(e, t, r)
        ? this.setQueryParameters({
            numericRefinements: this._clearNumericRefinements(function (n, i) {
              return i === e && n.op === t && qn(n.val, Gr(r));
            }),
          })
        : this
      : t !== void 0
      ? this.isNumericRefined(e, t)
        ? this.setQueryParameters({
            numericRefinements: this._clearNumericRefinements(function (n, i) {
              return i === e && n.op === t;
            }),
          })
        : this
      : this.isNumericRefined(e)
      ? this.setQueryParameters({
          numericRefinements: this._clearNumericRefinements(function (n, i) {
            return i === e;
          }),
        })
      : this;
  },
  getNumericRefinements: function (e) {
    return this.numericRefinements[e] || {};
  },
  getNumericRefinement: function (e, t) {
    return this.numericRefinements[e] && this.numericRefinements[e][t];
  },
  _clearNumericRefinements: function (t) {
    if (t === void 0)
      return Pn(this.numericRefinements) ? {} : this.numericRefinements;
    if (typeof t == "string") return Gi(this.numericRefinements, [t]);
    if (typeof t == "function") {
      var r = !1,
        n = this.numericRefinements,
        i = Object.keys(n).reduce(function (a, s) {
          var o = n[s],
            c = {};
          return (
            (o = o || {}),
            Object.keys(o).forEach(function (u) {
              var f = o[u] || [],
                h = [];
              f.forEach(function (l) {
                var g = t({ val: l, op: u }, s, "numeric");
                g || h.push(l);
              }),
                h.length !== f.length && (r = !0),
                (c[u] = h);
            }),
            (a[s] = c),
            a
          );
        }, {});
      return r ? i : this.numericRefinements;
    }
  },
  addFacet: function (t) {
    return this.isConjunctiveFacet(t)
      ? this
      : this.setQueryParameters({ facets: this.facets.concat([t]) });
  },
  addDisjunctiveFacet: function (t) {
    return this.isDisjunctiveFacet(t)
      ? this
      : this.setQueryParameters({
          disjunctiveFacets: this.disjunctiveFacets.concat([t]),
        });
  },
  addHierarchicalFacet: function (t) {
    if (this.isHierarchicalFacet(t.name))
      throw new Error(
        "Cannot declare two hierarchical facets with the same name: `" +
          t.name +
          "`"
      );
    return this.setQueryParameters({
      hierarchicalFacets: this.hierarchicalFacets.concat([t]),
    });
  },
  addFacetRefinement: function (t, r) {
    if (!this.isConjunctiveFacet(t))
      throw new Error(
        t +
          " is not defined in the facets attribute of the helper configuration"
      );
    return G.isRefined(this.facetsRefinements, t, r)
      ? this
      : this.setQueryParameters({
          facetsRefinements: G.addRefinement(this.facetsRefinements, t, r),
        });
  },
  addExcludeRefinement: function (t, r) {
    if (!this.isConjunctiveFacet(t))
      throw new Error(
        t +
          " is not defined in the facets attribute of the helper configuration"
      );
    return G.isRefined(this.facetsExcludes, t, r)
      ? this
      : this.setQueryParameters({
          facetsExcludes: G.addRefinement(this.facetsExcludes, t, r),
        });
  },
  addDisjunctiveFacetRefinement: function (t, r) {
    if (!this.isDisjunctiveFacet(t))
      throw new Error(
        t +
          " is not defined in the disjunctiveFacets attribute of the helper configuration"
      );
    return G.isRefined(this.disjunctiveFacetsRefinements, t, r)
      ? this
      : this.setQueryParameters({
          disjunctiveFacetsRefinements: G.addRefinement(
            this.disjunctiveFacetsRefinements,
            t,
            r
          ),
        });
  },
  addTagRefinement: function (t) {
    if (this.isTagRefined(t)) return this;
    var r = { tagRefinements: this.tagRefinements.concat(t) };
    return this.setQueryParameters(r);
  },
  removeFacet: function (t) {
    return this.isConjunctiveFacet(t)
      ? this.clearRefinements(t).setQueryParameters({
          facets: this.facets.filter(function (r) {
            return r !== t;
          }),
        })
      : this;
  },
  removeDisjunctiveFacet: function (t) {
    return this.isDisjunctiveFacet(t)
      ? this.clearRefinements(t).setQueryParameters({
          disjunctiveFacets: this.disjunctiveFacets.filter(function (r) {
            return r !== t;
          }),
        })
      : this;
  },
  removeHierarchicalFacet: function (t) {
    return this.isHierarchicalFacet(t)
      ? this.clearRefinements(t).setQueryParameters({
          hierarchicalFacets: this.hierarchicalFacets.filter(function (r) {
            return r.name !== t;
          }),
        })
      : this;
  },
  removeFacetRefinement: function (t, r) {
    if (!this.isConjunctiveFacet(t))
      throw new Error(
        t +
          " is not defined in the facets attribute of the helper configuration"
      );
    return G.isRefined(this.facetsRefinements, t, r)
      ? this.setQueryParameters({
          facetsRefinements: G.removeRefinement(this.facetsRefinements, t, r),
        })
      : this;
  },
  removeExcludeRefinement: function (t, r) {
    if (!this.isConjunctiveFacet(t))
      throw new Error(
        t +
          " is not defined in the facets attribute of the helper configuration"
      );
    return G.isRefined(this.facetsExcludes, t, r)
      ? this.setQueryParameters({
          facetsExcludes: G.removeRefinement(this.facetsExcludes, t, r),
        })
      : this;
  },
  removeDisjunctiveFacetRefinement: function (t, r) {
    if (!this.isDisjunctiveFacet(t))
      throw new Error(
        t +
          " is not defined in the disjunctiveFacets attribute of the helper configuration"
      );
    return G.isRefined(this.disjunctiveFacetsRefinements, t, r)
      ? this.setQueryParameters({
          disjunctiveFacetsRefinements: G.removeRefinement(
            this.disjunctiveFacetsRefinements,
            t,
            r
          ),
        })
      : this;
  },
  removeTagRefinement: function (t) {
    if (!this.isTagRefined(t)) return this;
    var r = {
      tagRefinements: this.tagRefinements.filter(function (n) {
        return n !== t;
      }),
    };
    return this.setQueryParameters(r);
  },
  toggleRefinement: function (t, r) {
    return this.toggleFacetRefinement(t, r);
  },
  toggleFacetRefinement: function (t, r) {
    if (this.isHierarchicalFacet(t))
      return this.toggleHierarchicalFacetRefinement(t, r);
    if (this.isConjunctiveFacet(t))
      return this.toggleConjunctiveFacetRefinement(t, r);
    if (this.isDisjunctiveFacet(t))
      return this.toggleDisjunctiveFacetRefinement(t, r);
    throw new Error(
      "Cannot refine the undeclared facet " +
        t +
        "; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets"
    );
  },
  toggleConjunctiveFacetRefinement: function (t, r) {
    if (!this.isConjunctiveFacet(t))
      throw new Error(
        t +
          " is not defined in the facets attribute of the helper configuration"
      );
    return this.setQueryParameters({
      facetsRefinements: G.toggleRefinement(this.facetsRefinements, t, r),
    });
  },
  toggleExcludeFacetRefinement: function (t, r) {
    if (!this.isConjunctiveFacet(t))
      throw new Error(
        t +
          " is not defined in the facets attribute of the helper configuration"
      );
    return this.setQueryParameters({
      facetsExcludes: G.toggleRefinement(this.facetsExcludes, t, r),
    });
  },
  toggleDisjunctiveFacetRefinement: function (t, r) {
    if (!this.isDisjunctiveFacet(t))
      throw new Error(
        t +
          " is not defined in the disjunctiveFacets attribute of the helper configuration"
      );
    return this.setQueryParameters({
      disjunctiveFacetsRefinements: G.toggleRefinement(
        this.disjunctiveFacetsRefinements,
        t,
        r
      ),
    });
  },
  toggleHierarchicalFacetRefinement: function (t, r) {
    if (!this.isHierarchicalFacet(t))
      throw new Error(
        t +
          " is not defined in the hierarchicalFacets attribute of the helper configuration"
      );
    var n = this._getHierarchicalFacetSeparator(
        this.getHierarchicalFacetByName(t)
      ),
      i = {},
      a =
        this.hierarchicalFacetsRefinements[t] !== void 0 &&
        this.hierarchicalFacetsRefinements[t].length > 0 &&
        (this.hierarchicalFacetsRefinements[t][0] === r ||
          this.hierarchicalFacetsRefinements[t][0].indexOf(r + n) === 0);
    return (
      a
        ? r.indexOf(n) === -1
          ? (i[t] = [])
          : (i[t] = [r.slice(0, r.lastIndexOf(n))])
        : (i[t] = [r]),
      this.setQueryParameters({
        hierarchicalFacetsRefinements: Yr(
          {},
          i,
          this.hierarchicalFacetsRefinements
        ),
      })
    );
  },
  addHierarchicalFacetRefinement: function (e, t) {
    if (this.isHierarchicalFacetRefined(e))
      throw new Error(e + " is already refined.");
    if (!this.isHierarchicalFacet(e))
      throw new Error(
        e +
          " is not defined in the hierarchicalFacets attribute of the helper configuration."
      );
    var r = {};
    return (
      (r[e] = [t]),
      this.setQueryParameters({
        hierarchicalFacetsRefinements: Yr(
          {},
          r,
          this.hierarchicalFacetsRefinements
        ),
      })
    );
  },
  removeHierarchicalFacetRefinement: function (e) {
    if (!this.isHierarchicalFacetRefined(e)) return this;
    var t = {};
    return (
      (t[e] = []),
      this.setQueryParameters({
        hierarchicalFacetsRefinements: Yr(
          {},
          t,
          this.hierarchicalFacetsRefinements
        ),
      })
    );
  },
  toggleTagRefinement: function (t) {
    return this.isTagRefined(t)
      ? this.removeTagRefinement(t)
      : this.addTagRefinement(t);
  },
  isDisjunctiveFacet: function (e) {
    return this.disjunctiveFacets.indexOf(e) > -1;
  },
  isHierarchicalFacet: function (e) {
    return this.getHierarchicalFacetByName(e) !== void 0;
  },
  isConjunctiveFacet: function (e) {
    return this.facets.indexOf(e) > -1;
  },
  isFacetRefined: function (t, r) {
    return this.isConjunctiveFacet(t)
      ? G.isRefined(this.facetsRefinements, t, r)
      : !1;
  },
  isExcludeRefined: function (t, r) {
    return this.isConjunctiveFacet(t)
      ? G.isRefined(this.facetsExcludes, t, r)
      : !1;
  },
  isDisjunctiveFacetRefined: function (t, r) {
    return this.isDisjunctiveFacet(t)
      ? G.isRefined(this.disjunctiveFacetsRefinements, t, r)
      : !1;
  },
  isHierarchicalFacetRefined: function (t, r) {
    if (!this.isHierarchicalFacet(t)) return !1;
    var n = this.getHierarchicalRefinement(t);
    return r ? n.indexOf(r) !== -1 : n.length > 0;
  },
  isNumericRefined: function (t, r, n) {
    if (n === void 0 && r === void 0) return !!this.numericRefinements[t];
    var i =
      this.numericRefinements[t] && this.numericRefinements[t][r] !== void 0;
    if (n === void 0 || !i) return i;
    var a = Gr(n),
      s = Il(this.numericRefinements[t][r], a) !== void 0;
    return i && s;
  },
  isTagRefined: function (t) {
    return this.tagRefinements.indexOf(t) !== -1;
  },
  getRefinedDisjunctiveFacets: function () {
    var t = this,
      r = Yi(
        Object.keys(this.numericRefinements).filter(function (n) {
          return Object.keys(t.numericRefinements[n]).length > 0;
        }),
        this.disjunctiveFacets
      );
    return Object.keys(this.disjunctiveFacetsRefinements)
      .filter(function (n) {
        return t.disjunctiveFacetsRefinements[n].length > 0;
      })
      .concat(r)
      .concat(this.getRefinedHierarchicalFacets());
  },
  getRefinedHierarchicalFacets: function () {
    var t = this;
    return Yi(
      this.hierarchicalFacets.map(function (r) {
        return r.name;
      }),
      Object.keys(this.hierarchicalFacetsRefinements).filter(function (r) {
        return t.hierarchicalFacetsRefinements[r].length > 0;
      })
    );
  },
  getUnrefinedDisjunctiveFacets: function () {
    var e = this.getRefinedDisjunctiveFacets();
    return this.disjunctiveFacets.filter(function (t) {
      return e.indexOf(t) === -1;
    });
  },
  managedParameters: [
    "index",
    "facets",
    "disjunctiveFacets",
    "facetsRefinements",
    "hierarchicalFacets",
    "facetsExcludes",
    "disjunctiveFacetsRefinements",
    "numericRefinements",
    "tagRefinements",
    "hierarchicalFacetsRefinements",
  ],
  getQueryParams: function () {
    var t = this.managedParameters,
      r = {},
      n = this;
    return (
      Object.keys(this).forEach(function (i) {
        var a = n[i];
        t.indexOf(i) === -1 && a !== void 0 && (r[i] = a);
      }),
      r
    );
  },
  setQueryParameter: function (t, r) {
    if (this[t] === r) return this;
    var n = {};
    return (n[t] = r), this.setQueryParameters(n);
  },
  setQueryParameters: function (t) {
    if (!t) return this;
    var r = ge.validate(this, t);
    if (r) throw r;
    var n = this,
      i = ge._parseNumbers(t),
      a = Object.keys(this).reduce(function (o, c) {
        return (o[c] = n[c]), o;
      }, {}),
      s = Object.keys(i).reduce(function (o, c) {
        var u = o[c] !== void 0,
          f = i[c] !== void 0;
        return u && !f ? Gi(o, [c]) : (f && (o[c] = i[c]), o);
      }, a);
    return new this.constructor(s);
  },
  resetPage: function () {
    return this.page === void 0 ? this : this.setPage(0);
  },
  _getHierarchicalFacetSortBy: function (e) {
    return e.sortBy || ["isRefined:desc", "name:asc"];
  },
  _getHierarchicalFacetSeparator: function (e) {
    return e.separator || " > ";
  },
  _getHierarchicalRootPath: function (e) {
    return e.rootPath || null;
  },
  _getHierarchicalShowParentLevel: function (e) {
    return typeof e.showParentLevel == "boolean" ? e.showParentLevel : !0;
  },
  getHierarchicalFacetByName: function (e) {
    return os(this.hierarchicalFacets, function (t) {
      return t.name === e;
    });
  },
  getHierarchicalFacetBreadcrumb: function (e) {
    if (!this.isHierarchicalFacet(e)) return [];
    var t = this.getHierarchicalRefinement(e)[0];
    if (!t) return [];
    var r = this._getHierarchicalFacetSeparator(
        this.getHierarchicalFacetByName(e)
      ),
      n = t.split(r);
    return n.map(function (i) {
      return i.trim();
    });
  },
  toString: function () {
    return JSON.stringify(this, null, 2);
  },
};
var us = ge;
function El(e, t) {
  if (e !== t) {
    var r = e !== void 0,
      n = e === null,
      i = t !== void 0,
      a = t === null;
    if ((!a && e > t) || (n && i) || !r) return 1;
    if ((!n && e < t) || (a && r) || !i) return -1;
  }
  return 0;
}
function Tl(e, t, r) {
  if (!Array.isArray(e)) return [];
  Array.isArray(r) || (r = []);
  var n = e.map(function (i, a) {
    return {
      criteria: t.map(function (s) {
        return i[s];
      }),
      index: a,
      value: i,
    };
  });
  return (
    n.sort(function (a, s) {
      for (var o = -1; ++o < a.criteria.length; ) {
        var c = El(a.criteria[o], s.criteria[o]);
        if (c) return o >= r.length ? c : r[o] === "desc" ? -c : c;
      }
      return a.index - s.index;
    }),
    n.map(function (i) {
      return i.value;
    })
  );
}
var cs = Tl,
  Al = function (t) {
    return Array.isArray(t) ? t.filter(Boolean) : [];
  },
  Hl = function (t, r) {
    if (!Array.isArray(t)) return -1;
    for (var n = 0; n < t.length; n++) if (r(t[n])) return n;
    return -1;
  },
  Dl = Mr,
  fs = function (t, r) {
    var n = (r || []).map(function (i) {
      return i.split(":");
    });
    return t.reduce(
      function (a, s) {
        var o = s.split(":"),
          c = Dl(n, function (u) {
            return u[0] === o[0];
          });
        return o.length > 1 || !c
          ? (a[0].push(o[0]), a[1].push(o[1]), a)
          : (a[0].push(c[0]), a[1].push(c[1]), a);
      },
      [[], []]
    );
  };
function Ll(e) {
  return typeof e != "string" ? e : String(e).replace(/^-/, "\\-");
}
function Nl(e) {
  return typeof e != "string" ? e : e.replace(/^\\-/, "-");
}
var Vn = { escapeFacetValue: Ll, unescapeFacetValue: Nl },
  Wl = Vl,
  Cl = cs,
  Ml = Mr,
  Ul = fs,
  ls = Vn,
  Ql = ls.escapeFacetValue,
  ql = ls.unescapeFacetValue;
function Vl(e) {
  return function (r, n) {
    var i = e.hierarchicalFacets[n],
      a =
        (e.hierarchicalFacetsRefinements[i.name] &&
          e.hierarchicalFacetsRefinements[i.name][0]) ||
        "",
      s = e._getHierarchicalFacetSeparator(i),
      o = e._getHierarchicalRootPath(i),
      c = e._getHierarchicalShowParentLevel(i),
      u = Ul(e._getHierarchicalFacetSortBy(i)),
      f = r.every(function (g) {
        return g.exhaustive;
      }),
      h = Bl(u, s, o, c, a),
      l = r;
    return (
      o && (l = r.slice(o.split(s).length)),
      l.reduce(h, {
        name: e.hierarchicalFacets[n].name,
        count: null,
        isRefined: !0,
        path: null,
        escapedValue: null,
        exhaustive: f,
        data: null,
      })
    );
  };
}
function Bl(e, t, r, n, i) {
  return function (s, o, c) {
    var u = s;
    if (c > 0) {
      var f = 0;
      for (u = s; f < c; ) {
        var h = u && Array.isArray(u.data) ? u.data : [];
        (u = Ml(h, function (g) {
          return g.isRefined;
        })),
          f++;
      }
    }
    if (u) {
      var l = Object.keys(o.data)
        .map(function (g) {
          return [g, o.data[g]];
        })
        .filter(function (g) {
          var m = g[0];
          return kl(m, u.path || r, i, t, r, n);
        });
      u.data = Cl(
        l.map(function (g) {
          var m = g[0],
            d = g[1];
          return Kl(d, m, t, ql(i), o.exhaustive);
        }),
        e[0],
        e[1]
      );
    }
    return s;
  };
}
function kl(e, t, r, n, i, a) {
  return i && (e.indexOf(i) !== 0 || i === e)
    ? !1
    : (!i && e.indexOf(n) === -1) ||
        (i && e.split(n).length - i.split(n).length === 1) ||
        (e.indexOf(n) === -1 && r.indexOf(n) === -1) ||
        r.indexOf(e) === 0 ||
        (e.indexOf(t + n) === 0 && (a || e.indexOf(r) === 0));
}
function Kl(e, t, r, n, i) {
  var a = t.split(r);
  return {
    name: a[a.length - 1].trim(),
    path: t,
    escapedValue: Ql(t),
    count: e,
    isRefined: n === t || n.indexOf(t + r) === 0,
    exhaustive: i,
    data: null,
  };
}
var zl = Cr,
  Hr = Mn,
  ds = cs,
  Zr = Al,
  _e = Mr,
  gt = Hl,
  Jl = fs,
  hs = Vn,
  Zi = hs.escapeFacetValue,
  Yl = hs.unescapeFacetValue,
  Gl = Wl;
function Xi(e) {
  var t = {};
  return (
    e.forEach(function (r, n) {
      t[r] = n;
    }),
    t
  );
}
function Xr(e, t, r) {
  t && t[r] && (e.stats = t[r]);
}
function Zl(e, t) {
  return _e(e, function (n) {
    var i = n.attributes || [];
    return i.indexOf(t) > -1;
  });
}
function Je(e, t, r) {
  var n = t[0];
  this._rawResults = t;
  var i = this;
  Object.keys(n).forEach(function (f) {
    i[f] = n[f];
  }),
    Object.keys(r || {}).forEach(function (f) {
      i[f] = r[f];
    }),
    (this.processingTimeMS = t.reduce(function (f, h) {
      return h.processingTimeMS === void 0 ? f : f + h.processingTimeMS;
    }, 0)),
    (this.disjunctiveFacets = []),
    (this.hierarchicalFacets = e.hierarchicalFacets.map(function () {
      return [];
    })),
    (this.facets = []);
  var a = e.getRefinedDisjunctiveFacets(),
    s = Xi(e.facets),
    o = Xi(e.disjunctiveFacets),
    c = 1,
    u = n.facets || {};
  Object.keys(u).forEach(function (f) {
    var h = u[f],
      l = Zl(e.hierarchicalFacets, f);
    if (l) {
      var g = l.attributes.indexOf(f),
        m = gt(e.hierarchicalFacets, function (b) {
          return b.name === l.name;
        });
      i.hierarchicalFacets[m][g] = {
        attribute: f,
        data: h,
        exhaustive: n.exhaustiveFacetsCount,
      };
    } else {
      var d = e.disjunctiveFacets.indexOf(f) !== -1,
        p = e.facets.indexOf(f) !== -1,
        v;
      d &&
        ((v = o[f]),
        (i.disjunctiveFacets[v] = {
          name: f,
          data: h,
          exhaustive: n.exhaustiveFacetsCount,
        }),
        Xr(i.disjunctiveFacets[v], n.facets_stats, f)),
        p &&
          ((v = s[f]),
          (i.facets[v] = {
            name: f,
            data: h,
            exhaustive: n.exhaustiveFacetsCount,
          }),
          Xr(i.facets[v], n.facets_stats, f));
    }
  }),
    (this.hierarchicalFacets = Zr(this.hierarchicalFacets)),
    a.forEach(function (f) {
      var h = t[c],
        l = h && h.facets ? h.facets : {},
        g = e.getHierarchicalFacetByName(f);
      Object.keys(l).forEach(function (m) {
        var d = l[m],
          p;
        if (g) {
          p = gt(e.hierarchicalFacets, function (y) {
            return y.name === g.name;
          });
          var v = gt(i.hierarchicalFacets[p], function (y) {
            return y.attribute === m;
          });
          if (v === -1) return;
          i.hierarchicalFacets[p][v].data = zl(
            {},
            i.hierarchicalFacets[p][v].data,
            d
          );
        } else {
          p = o[m];
          var b = (n.facets && n.facets[m]) || {};
          (i.disjunctiveFacets[p] = {
            name: m,
            data: Hr({}, d, b),
            exhaustive: h.exhaustiveFacetsCount,
          }),
            Xr(i.disjunctiveFacets[p], h.facets_stats, m),
            e.disjunctiveFacetsRefinements[m] &&
              e.disjunctiveFacetsRefinements[m].forEach(function (y) {
                !i.disjunctiveFacets[p].data[y] &&
                  e.disjunctiveFacetsRefinements[m].indexOf(Yl(y)) > -1 &&
                  (i.disjunctiveFacets[p].data[y] = 0);
              });
        }
      }),
        c++;
    }),
    e.getRefinedHierarchicalFacets().forEach(function (f) {
      var h = e.getHierarchicalFacetByName(f),
        l = e._getHierarchicalFacetSeparator(h),
        g = e.getHierarchicalRefinement(f);
      g.length === 0 ||
        g[0].split(l).length < 2 ||
        t.slice(c).forEach(function (m) {
          var d = m && m.facets ? m.facets : {};
          Object.keys(d).forEach(function (p) {
            var v = d[p],
              b = gt(e.hierarchicalFacets, function (w) {
                return w.name === h.name;
              }),
              y = gt(i.hierarchicalFacets[b], function (w) {
                return w.attribute === p;
              });
            if (y !== -1) {
              var S = {};
              if (g.length > 0) {
                var P = g[0].split(l)[0];
                S[P] = i.hierarchicalFacets[b][y].data[P];
              }
              i.hierarchicalFacets[b][y].data = Hr(
                S,
                v,
                i.hierarchicalFacets[b][y].data
              );
            }
          }),
            c++;
        });
    }),
    Object.keys(e.facetsExcludes).forEach(function (f) {
      var h = e.facetsExcludes[f],
        l = s[f];
      (i.facets[l] = {
        name: f,
        data: n.facets[f],
        exhaustive: n.exhaustiveFacetsCount,
      }),
        h.forEach(function (g) {
          (i.facets[l] = i.facets[l] || { name: f }),
            (i.facets[l].data = i.facets[l].data || {}),
            (i.facets[l].data[g] = 0);
        });
    }),
    (this.hierarchicalFacets = this.hierarchicalFacets.map(Gl(e))),
    (this.facets = Zr(this.facets)),
    (this.disjunctiveFacets = Zr(this.disjunctiveFacets)),
    (this._state = e);
}
Je.prototype.getFacetByName = function (e) {
  function t(r) {
    return r.name === e;
  }
  return (
    _e(this.facets, t) ||
    _e(this.disjunctiveFacets, t) ||
    _e(this.hierarchicalFacets, t)
  );
};
function Xl(e, t) {
  function r(a) {
    return a.name === t;
  }
  if (e._state.isConjunctiveFacet(t)) {
    var n = _e(e.facets, r);
    return n
      ? Object.keys(n.data).map(function (a) {
          var s = Zi(a);
          return {
            name: a,
            escapedValue: s,
            count: n.data[a],
            isRefined: e._state.isFacetRefined(t, s),
            isExcluded: e._state.isExcludeRefined(t, a),
          };
        })
      : [];
  } else if (e._state.isDisjunctiveFacet(t)) {
    var i = _e(e.disjunctiveFacets, r);
    return i
      ? Object.keys(i.data).map(function (a) {
          var s = Zi(a);
          return {
            name: a,
            escapedValue: s,
            count: i.data[a],
            isRefined: e._state.isDisjunctiveFacetRefined(t, s),
          };
        })
      : [];
  } else if (e._state.isHierarchicalFacet(t))
    return _e(e.hierarchicalFacets, r);
}
function ms(e, t, r, n) {
  if (((n = n || 0), Array.isArray(t))) return e(t, r[n]);
  if (!t.data || t.data.length === 0) return t;
  var i = t.data.map(function (o) {
      return ms(e, o, r, n + 1);
    }),
    a = e(i, r[n]),
    s = Hr({ data: a }, t);
  return s;
}
Je.DEFAULT_SORT = ["isRefined:desc", "count:desc", "name:asc"];
function ed(e, t) {
  return t.sort(e);
}
function td(e, t) {
  var r = [],
    n = [],
    i = t.order || [],
    a = i.reduce(function (c, u, f) {
      return (c[u] = f), c;
    }, {});
  e.forEach(function (c) {
    var u = c.path || c.name;
    a[u] !== void 0 ? (r[a[u]] = c) : n.push(c);
  }),
    (r = r.filter(function (c) {
      return c;
    }));
  var s = t.sortRemainingBy,
    o;
  return s === "hidden"
    ? r
    : (s === "alpha"
        ? (o = [
            ["path", "name"],
            ["asc", "asc"],
          ])
        : (o = [["count"], ["desc"]]),
      r.concat(ds(n, o[0], o[1])));
}
function rd(e, t) {
  return (
    e.renderingContent &&
    e.renderingContent.facetOrdering &&
    e.renderingContent.facetOrdering.values &&
    e.renderingContent.facetOrdering.values[t]
  );
}
Je.prototype.getFacetValues = function (e, t) {
  var r = Xl(this, e);
  if (r) {
    var n = Hr({}, t, {
        sortBy: Je.DEFAULT_SORT,
        facetOrdering: !(t && t.sortBy),
      }),
      i = this,
      a;
    if (Array.isArray(r)) a = [e];
    else {
      var s = i._state.getHierarchicalFacetByName(r.name);
      a = s.attributes;
    }
    return ms(
      function (o, c) {
        if (n.facetOrdering) {
          var u = rd(i, c);
          if (Boolean(u)) return td(o, u);
        }
        if (Array.isArray(n.sortBy)) {
          var f = Jl(n.sortBy, Je.DEFAULT_SORT);
          return ds(o, f[0], f[1]);
        } else if (typeof n.sortBy == "function") return ed(n.sortBy, o);
        throw new Error(
          "options.sortBy is optional but if defined it must be either an array of string (predicates) or a sorting function"
        );
      },
      r,
      a
    );
  }
};
Je.prototype.getFacetStats = function (e) {
  if (this._state.isConjunctiveFacet(e)) return ea(this.facets, e);
  if (this._state.isDisjunctiveFacet(e)) return ea(this.disjunctiveFacets, e);
};
function ea(e, t) {
  var r = _e(e, function (n) {
    return n.name === t;
  });
  return r && r.stats;
}
Je.prototype.getRefinements = function () {
  var e = this._state,
    t = this,
    r = [];
  return (
    Object.keys(e.facetsRefinements).forEach(function (n) {
      e.facetsRefinements[n].forEach(function (i) {
        r.push(en(e, "facet", n, i, t.facets));
      });
    }),
    Object.keys(e.facetsExcludes).forEach(function (n) {
      e.facetsExcludes[n].forEach(function (i) {
        r.push(en(e, "exclude", n, i, t.facets));
      });
    }),
    Object.keys(e.disjunctiveFacetsRefinements).forEach(function (n) {
      e.disjunctiveFacetsRefinements[n].forEach(function (i) {
        r.push(en(e, "disjunctive", n, i, t.disjunctiveFacets));
      });
    }),
    Object.keys(e.hierarchicalFacetsRefinements).forEach(function (n) {
      e.hierarchicalFacetsRefinements[n].forEach(function (i) {
        r.push(nd(e, n, i, t.hierarchicalFacets));
      });
    }),
    Object.keys(e.numericRefinements).forEach(function (n) {
      var i = e.numericRefinements[n];
      Object.keys(i).forEach(function (a) {
        i[a].forEach(function (s) {
          r.push({
            type: "numeric",
            attributeName: n,
            name: s,
            numericValue: s,
            operator: a,
          });
        });
      });
    }),
    e.tagRefinements.forEach(function (n) {
      r.push({ type: "tag", attributeName: "_tags", name: n });
    }),
    r
  );
};
function en(e, t, r, n, i) {
  var a = _e(i, function (c) {
      return c.name === r;
    }),
    s = a && a.data && a.data[n] ? a.data[n] : 0,
    o = (a && a.exhaustive) || !1;
  return { type: t, attributeName: r, name: n, count: s, exhaustive: o };
}
function nd(e, t, r, n) {
  var i = e.getHierarchicalFacetByName(t),
    a = e._getHierarchicalFacetSeparator(i),
    s = r.split(a),
    o = _e(n, function (l) {
      return l.name === t;
    }),
    c = s.reduce(function (l, g) {
      var m =
        l &&
        _e(l.data, function (d) {
          return d.name === g;
        });
      return m !== void 0 ? m : l;
    }, o),
    u = (c && c.count) || 0,
    f = (c && c.exhaustive) || !1,
    h = (c && c.path) || "";
  return {
    type: "hierarchical",
    attributeName: t,
    name: h,
    count: u,
    exhaustive: f,
  };
}
var gs = Je;
function fe() {
  (this._events = this._events || {}),
    (this._maxListeners = this._maxListeners || void 0);
}
var Bn = fe;
fe.prototype._events = void 0;
fe.prototype._maxListeners = void 0;
fe.defaultMaxListeners = 10;
fe.prototype.setMaxListeners = function (e) {
  if (!id(e) || e < 0 || isNaN(e))
    throw TypeError("n must be a positive number");
  return (this._maxListeners = e), this;
};
fe.prototype.emit = function (e) {
  var t, r, n, i, a, s;
  if (
    (this._events || (this._events = {}),
    e === "error" &&
      (!this._events.error ||
        (Gt(this._events.error) && !this._events.error.length)))
  ) {
    if (((t = arguments[1]), t instanceof Error)) throw t;
    var o = new Error('Uncaught, unspecified "error" event. (' + t + ")");
    throw ((o.context = t), o);
  }
  if (((r = this._events[e]), ps(r))) return !1;
  if (Ce(r))
    switch (arguments.length) {
      case 1:
        r.call(this);
        break;
      case 2:
        r.call(this, arguments[1]);
        break;
      case 3:
        r.call(this, arguments[1], arguments[2]);
        break;
      default:
        (i = Array.prototype.slice.call(arguments, 1)), r.apply(this, i);
    }
  else if (Gt(r))
    for (
      i = Array.prototype.slice.call(arguments, 1),
        s = r.slice(),
        n = s.length,
        a = 0;
      a < n;
      a++
    )
      s[a].apply(this, i);
  return !0;
};
fe.prototype.addListener = function (e, t) {
  var r;
  if (!Ce(t)) throw TypeError("listener must be a function");
  return (
    this._events || (this._events = {}),
    this._events.newListener &&
      this.emit("newListener", e, Ce(t.listener) ? t.listener : t),
    this._events[e]
      ? Gt(this._events[e])
        ? this._events[e].push(t)
        : (this._events[e] = [this._events[e], t])
      : (this._events[e] = t),
    Gt(this._events[e]) &&
      !this._events[e].warned &&
      (ps(this._maxListeners)
        ? (r = fe.defaultMaxListeners)
        : (r = this._maxListeners),
      r &&
        r > 0 &&
        this._events[e].length > r &&
        ((this._events[e].warned = !0),
        console.error(
          "(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
          this._events[e].length
        ),
        typeof console.trace == "function" && console.trace())),
    this
  );
};
fe.prototype.on = fe.prototype.addListener;
fe.prototype.once = function (e, t) {
  if (!Ce(t)) throw TypeError("listener must be a function");
  var r = !1;
  function n() {
    this.removeListener(e, n), r || ((r = !0), t.apply(this, arguments));
  }
  return (n.listener = t), this.on(e, n), this;
};
fe.prototype.removeListener = function (e, t) {
  var r, n, i, a;
  if (!Ce(t)) throw TypeError("listener must be a function");
  if (!this._events || !this._events[e]) return this;
  if (
    ((r = this._events[e]),
    (i = r.length),
    (n = -1),
    r === t || (Ce(r.listener) && r.listener === t))
  )
    delete this._events[e],
      this._events.removeListener && this.emit("removeListener", e, t);
  else if (Gt(r)) {
    for (a = i; a-- > 0; )
      if (r[a] === t || (r[a].listener && r[a].listener === t)) {
        n = a;
        break;
      }
    if (n < 0) return this;
    r.length === 1 ? ((r.length = 0), delete this._events[e]) : r.splice(n, 1),
      this._events.removeListener && this.emit("removeListener", e, t);
  }
  return this;
};
fe.prototype.removeAllListeners = function (e) {
  var t, r;
  if (!this._events) return this;
  if (!this._events.removeListener)
    return (
      arguments.length === 0
        ? (this._events = {})
        : this._events[e] && delete this._events[e],
      this
    );
  if (arguments.length === 0) {
    for (t in this._events)
      t !== "removeListener" && this.removeAllListeners(t);
    return this.removeAllListeners("removeListener"), (this._events = {}), this;
  }
  if (((r = this._events[e]), Ce(r))) this.removeListener(e, r);
  else if (r) for (; r.length; ) this.removeListener(e, r[r.length - 1]);
  return delete this._events[e], this;
};
fe.prototype.listeners = function (e) {
  var t;
  return (
    !this._events || !this._events[e]
      ? (t = [])
      : Ce(this._events[e])
      ? (t = [this._events[e]])
      : (t = this._events[e].slice()),
    t
  );
};
fe.prototype.listenerCount = function (e) {
  if (this._events) {
    var t = this._events[e];
    if (Ce(t)) return 1;
    if (t) return t.length;
  }
  return 0;
};
fe.listenerCount = function (e, t) {
  return e.listenerCount(t);
};
function Ce(e) {
  return typeof e == "function";
}
function id(e) {
  return typeof e == "number";
}
function Gt(e) {
  return typeof e == "object" && e !== null;
}
function ps(e) {
  return e === void 0;
}
function ad(e, t) {
  e.prototype = Object.create(t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  });
}
var vs = ad,
  sd = Bn,
  od = vs;
function Ur(e, t) {
  (this.main = e), (this.fn = t), (this.lastResults = null);
}
od(Ur, sd);
Ur.prototype.detach = function () {
  this.removeAllListeners(), this.main.detachDerivedHelper(this);
};
Ur.prototype.getModifiedState = function (e) {
  return this.fn(e);
};
var ud = Ur,
  tn = Cr;
function rn(e) {
  return Object.keys(e)
    .sort(function (t, r) {
      return t.localeCompare(r);
    })
    .reduce(function (t, r) {
      return (t[r] = e[r]), t;
    }, {});
}
var Se = {
    _getQueries: function (t, r) {
      var n = [];
      return (
        n.push({ indexName: t, params: Se._getHitsSearchParams(r) }),
        r.getRefinedDisjunctiveFacets().forEach(function (i) {
          n.push({
            indexName: t,
            params: Se._getDisjunctiveFacetSearchParams(r, i),
          });
        }),
        r.getRefinedHierarchicalFacets().forEach(function (i) {
          var a = r.getHierarchicalFacetByName(i),
            s = r.getHierarchicalRefinement(i),
            o = r._getHierarchicalFacetSeparator(a);
          if (s.length > 0 && s[0].split(o).length > 1) {
            var c = s[0]
              .split(o)
              .slice(0, -1)
              .reduce(function (f, h, l) {
                return f.concat({
                  attribute: a.attributes[l],
                  value: l === 0 ? h : [f[f.length - 1].value, h].join(o),
                });
              }, []);
            c.forEach(function (u, f) {
              var h = Se._getDisjunctiveFacetSearchParams(
                r,
                u.attribute,
                f === 0
              );
              function l(d) {
                return a.attributes.some(function (p) {
                  return p === d.split(":")[0];
                });
              }
              var g = (h.facetFilters || []).reduce(function (d, p) {
                  if (Array.isArray(p)) {
                    var v = p.filter(function (b) {
                      return !l(b);
                    });
                    v.length > 0 && d.push(v);
                  }
                  return typeof p == "string" && !l(p) && d.push(p), d;
                }, []),
                m = c[f - 1];
              f > 0
                ? (h.facetFilters = g.concat(m.attribute + ":" + m.value))
                : (h.facetFilters = g.length > 0 ? g : void 0),
                n.push({ indexName: t, params: h });
            });
          }
        }),
        n
      );
    },
    _getHitsSearchParams: function (e) {
      var t = e.facets
          .concat(e.disjunctiveFacets)
          .concat(Se._getHitsHierarchicalFacetsAttributes(e)),
        r = Se._getFacetFilters(e),
        n = Se._getNumericFilters(e),
        i = Se._getTagFilters(e),
        a = { facets: t.indexOf("*") > -1 ? ["*"] : t, tagFilters: i };
      return (
        r.length > 0 && (a.facetFilters = r),
        n.length > 0 && (a.numericFilters = n),
        rn(tn({}, e.getQueryParams(), a))
      );
    },
    _getDisjunctiveFacetSearchParams: function (e, t, r) {
      var n = Se._getFacetFilters(e, t, r),
        i = Se._getNumericFilters(e, t),
        a = Se._getTagFilters(e),
        s = { hitsPerPage: 0, page: 0, analytics: !1, clickAnalytics: !1 };
      a.length > 0 && (s.tagFilters = a);
      var o = e.getHierarchicalFacetByName(t);
      return (
        o
          ? (s.facets = Se._getDisjunctiveHierarchicalFacetAttribute(e, o, r))
          : (s.facets = t),
        i.length > 0 && (s.numericFilters = i),
        n.length > 0 && (s.facetFilters = n),
        rn(tn({}, e.getQueryParams(), s))
      );
    },
    _getNumericFilters: function (e, t) {
      if (e.numericFilters) return e.numericFilters;
      var r = [];
      return (
        Object.keys(e.numericRefinements).forEach(function (n) {
          var i = e.numericRefinements[n] || {};
          Object.keys(i).forEach(function (a) {
            var s = i[a] || [];
            t !== n &&
              s.forEach(function (o) {
                if (Array.isArray(o)) {
                  var c = o.map(function (u) {
                    return n + a + u;
                  });
                  r.push(c);
                } else r.push(n + a + o);
              });
          });
        }),
        r
      );
    },
    _getTagFilters: function (e) {
      return e.tagFilters ? e.tagFilters : e.tagRefinements.join(",");
    },
    _getFacetFilters: function (e, t, r) {
      var n = [],
        i = e.facetsRefinements || {};
      Object.keys(i).forEach(function (c) {
        var u = i[c] || [];
        u.forEach(function (f) {
          n.push(c + ":" + f);
        });
      });
      var a = e.facetsExcludes || {};
      Object.keys(a).forEach(function (c) {
        var u = a[c] || [];
        u.forEach(function (f) {
          n.push(c + ":-" + f);
        });
      });
      var s = e.disjunctiveFacetsRefinements || {};
      Object.keys(s).forEach(function (c) {
        var u = s[c] || [];
        if (!(c === t || !u || u.length === 0)) {
          var f = [];
          u.forEach(function (h) {
            f.push(c + ":" + h);
          }),
            n.push(f);
        }
      });
      var o = e.hierarchicalFacetsRefinements || {};
      return (
        Object.keys(o).forEach(function (c) {
          var u = o[c] || [],
            f = u[0];
          if (f !== void 0) {
            var h = e.getHierarchicalFacetByName(c),
              l = e._getHierarchicalFacetSeparator(h),
              g = e._getHierarchicalRootPath(h),
              m,
              d;
            if (t === c) {
              if (
                f.indexOf(l) === -1 ||
                (!g && r === !0) ||
                (g && g.split(l).length === f.split(l).length)
              )
                return;
              g
                ? ((d = g.split(l).length - 1), (f = g))
                : ((d = f.split(l).length - 2),
                  (f = f.slice(0, f.lastIndexOf(l)))),
                (m = h.attributes[d]);
            } else (d = f.split(l).length - 1), (m = h.attributes[d]);
            m && n.push([m + ":" + f]);
          }
        }),
        n
      );
    },
    _getHitsHierarchicalFacetsAttributes: function (e) {
      var t = [];
      return e.hierarchicalFacets.reduce(function (n, i) {
        var a = e.getHierarchicalRefinement(i.name)[0];
        if (!a) return n.push(i.attributes[0]), n;
        var s = e._getHierarchicalFacetSeparator(i),
          o = a.split(s).length,
          c = i.attributes.slice(0, o + 1);
        return n.concat(c);
      }, t);
    },
    _getDisjunctiveHierarchicalFacetAttribute: function (e, t, r) {
      var n = e._getHierarchicalFacetSeparator(t);
      if (r === !0) {
        var i = e._getHierarchicalRootPath(t),
          a = 0;
        return i && (a = i.split(n).length), [t.attributes[a]];
      }
      var s = e.getHierarchicalRefinement(t.name)[0] || "",
        o = s.split(n).length - 1;
      return t.attributes.slice(0, o + 1);
    },
    getSearchForFacetQuery: function (e, t, r, n) {
      var i = n.isDisjunctiveFacet(e) ? n.clearRefinements(e) : n,
        a = { facetQuery: t, facetName: e };
      return (
        typeof r == "number" && (a.maxFacetHits = r),
        rn(tn({}, Se._getHitsSearchParams(i), a))
      );
    },
  },
  cd = Se,
  ys = "3.11.2",
  kn = us,
  Rn = gs,
  fd = ud,
  ot = cd,
  ld = Bn,
  dd = vs,
  hd = Qn,
  md = Un,
  gd = Cr,
  bs = ys,
  pd = Vn.escapeFacetValue;
function F(e, t, r) {
  typeof e.addAlgoliaAgent == "function" &&
    e.addAlgoliaAgent("JS Helper (" + bs + ")"),
    this.setClient(e);
  var n = r || {};
  (n.index = t),
    (this.state = kn.make(n)),
    (this.lastResults = null),
    (this._queryId = 0),
    (this._lastQueryIdReceived = -1),
    (this.derivedHelpers = []),
    (this._currentNbQueries = 0);
}
dd(F, ld);
F.prototype.search = function () {
  return this._search({ onlyWithDerivedHelpers: !1 }), this;
};
F.prototype.searchOnlyWithDerivedHelpers = function () {
  return this._search({ onlyWithDerivedHelpers: !0 }), this;
};
F.prototype.getQuery = function () {
  var e = this.state;
  return ot._getHitsSearchParams(e);
};
F.prototype.searchOnce = function (e, t) {
  var r = e ? this.state.setQueryParameters(e) : this.state,
    n = ot._getQueries(r.index, r),
    i = this;
  if ((this._currentNbQueries++, this.emit("searchOnce", { state: r }), t)) {
    this.client
      .search(n)
      .then(function (a) {
        i._currentNbQueries--,
          i._currentNbQueries === 0 && i.emit("searchQueueEmpty"),
          t(null, new Rn(r, a.results), r);
      })
      .catch(function (a) {
        i._currentNbQueries--,
          i._currentNbQueries === 0 && i.emit("searchQueueEmpty"),
          t(a, null, r);
      });
    return;
  }
  return this.client.search(n).then(
    function (a) {
      return (
        i._currentNbQueries--,
        i._currentNbQueries === 0 && i.emit("searchQueueEmpty"),
        { content: new Rn(r, a.results), state: r, _originalResponse: a }
      );
    },
    function (a) {
      throw (
        (i._currentNbQueries--,
        i._currentNbQueries === 0 && i.emit("searchQueueEmpty"),
        a)
      );
    }
  );
};
F.prototype.findAnswers = function (e) {
  console.warn("[algoliasearch-helper] answers is no longer supported");
  var t = this.state,
    r = this.derivedHelpers[0];
  if (!r) return Promise.resolve([]);
  var n = r.getModifiedState(t),
    i = gd(
      { attributesForPrediction: e.attributesForPrediction, nbHits: e.nbHits },
      {
        params: md(ot._getHitsSearchParams(n), [
          "attributesToSnippet",
          "hitsPerPage",
          "restrictSearchableAttributes",
          "snippetEllipsisText",
        ]),
      }
    ),
    a =
      "search for answers was called, but this client does not have a function client.initIndex(index).findAnswers";
  if (typeof this.client.initIndex != "function") throw new Error(a);
  var s = this.client.initIndex(n.index);
  if (typeof s.findAnswers != "function") throw new Error(a);
  return s.findAnswers(n.query, e.queryLanguages, i);
};
F.prototype.searchForFacetValues = function (e, t, r, n) {
  var i = typeof this.client.searchForFacetValues == "function",
    a = typeof this.client.initIndex == "function";
  if (!i && !a && typeof this.client.search != "function")
    throw new Error(
      "search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues"
    );
  var s = this.state.setQueryParameters(n || {}),
    o = s.isDisjunctiveFacet(e),
    c = ot.getSearchForFacetQuery(e, t, r, s);
  this._currentNbQueries++;
  var u = this,
    f;
  return (
    i
      ? (f = this.client.searchForFacetValues([
          { indexName: s.index, params: c },
        ]))
      : a
      ? (f = this.client.initIndex(s.index).searchForFacetValues(c))
      : (delete c.facetName,
        (f = this.client
          .search([{ type: "facet", facet: e, indexName: s.index, params: c }])
          .then(function (l) {
            return l.results[0];
          }))),
    this.emit("searchForFacetValues", { state: s, facet: e, query: t }),
    f.then(
      function (l) {
        return (
          u._currentNbQueries--,
          u._currentNbQueries === 0 && u.emit("searchQueueEmpty"),
          (l = Array.isArray(l) ? l[0] : l),
          l.facetHits.forEach(function (g) {
            (g.escapedValue = pd(g.value)),
              (g.isRefined = o
                ? s.isDisjunctiveFacetRefined(e, g.escapedValue)
                : s.isFacetRefined(e, g.escapedValue));
          }),
          l
        );
      },
      function (h) {
        throw (
          (u._currentNbQueries--,
          u._currentNbQueries === 0 && u.emit("searchQueueEmpty"),
          h)
        );
      }
    )
  );
};
F.prototype.setQuery = function (e) {
  return (
    this._change({
      state: this.state.resetPage().setQuery(e),
      isPageReset: !0,
    }),
    this
  );
};
F.prototype.clearRefinements = function (e) {
  return (
    this._change({
      state: this.state.resetPage().clearRefinements(e),
      isPageReset: !0,
    }),
    this
  );
};
F.prototype.clearTags = function () {
  return (
    this._change({
      state: this.state.resetPage().clearTags(),
      isPageReset: !0,
    }),
    this
  );
};
F.prototype.addDisjunctiveFacetRefinement = function (e, t) {
  return (
    this._change({
      state: this.state.resetPage().addDisjunctiveFacetRefinement(e, t),
      isPageReset: !0,
    }),
    this
  );
};
F.prototype.addDisjunctiveRefine = function () {
  return this.addDisjunctiveFacetRefinement.apply(this, arguments);
};
F.prototype.addHierarchicalFacetRefinement = function (e, t) {
  return (
    this._change({
      state: this.state.resetPage().addHierarchicalFacetRefinement(e, t),
      isPageReset: !0,
    }),
    this
  );
};
F.prototype.addNumericRefinement = function (e, t, r) {
  return (
    this._change({
      state: this.state.resetPage().addNumericRefinement(e, t, r),
      isPageReset: !0,
    }),
    this
  );
};
F.prototype.addFacetRefinement = function (e, t) {
  return (
    this._change({
      state: this.state.resetPage().addFacetRefinement(e, t),
      isPageReset: !0,
    }),
    this
  );
};
F.prototype.addRefine = function () {
  return this.addFacetRefinement.apply(this, arguments);
};
F.prototype.addFacetExclusion = function (e, t) {
  return (
    this._change({
      state: this.state.resetPage().addExcludeRefinement(e, t),
      isPageReset: !0,
    }),
    this
  );
};
F.prototype.addExclude = function () {
  return this.addFacetExclusion.apply(this, arguments);
};
F.prototype.addTag = function (e) {
  return (
    this._change({
      state: this.state.resetPage().addTagRefinement(e),
      isPageReset: !0,
    }),
    this
  );
};
F.prototype.removeNumericRefinement = function (e, t, r) {
  return (
    this._change({
      state: this.state.resetPage().removeNumericRefinement(e, t, r),
      isPageReset: !0,
    }),
    this
  );
};
F.prototype.removeDisjunctiveFacetRefinement = function (e, t) {
  return (
    this._change({
      state: this.state.resetPage().removeDisjunctiveFacetRefinement(e, t),
      isPageReset: !0,
    }),
    this
  );
};
F.prototype.removeDisjunctiveRefine = function () {
  return this.removeDisjunctiveFacetRefinement.apply(this, arguments);
};
F.prototype.removeHierarchicalFacetRefinement = function (e) {
  return (
    this._change({
      state: this.state.resetPage().removeHierarchicalFacetRefinement(e),
      isPageReset: !0,
    }),
    this
  );
};
F.prototype.removeFacetRefinement = function (e, t) {
  return (
    this._change({
      state: this.state.resetPage().removeFacetRefinement(e, t),
      isPageReset: !0,
    }),
    this
  );
};
F.prototype.removeRefine = function () {
  return this.removeFacetRefinement.apply(this, arguments);
};
F.prototype.removeFacetExclusion = function (e, t) {
  return (
    this._change({
      state: this.state.resetPage().removeExcludeRefinement(e, t),
      isPageReset: !0,
    }),
    this
  );
};
F.prototype.removeExclude = function () {
  return this.removeFacetExclusion.apply(this, arguments);
};
F.prototype.removeTag = function (e) {
  return (
    this._change({
      state: this.state.resetPage().removeTagRefinement(e),
      isPageReset: !0,
    }),
    this
  );
};
F.prototype.toggleFacetExclusion = function (e, t) {
  return (
    this._change({
      state: this.state.resetPage().toggleExcludeFacetRefinement(e, t),
      isPageReset: !0,
    }),
    this
  );
};
F.prototype.toggleExclude = function () {
  return this.toggleFacetExclusion.apply(this, arguments);
};
F.prototype.toggleRefinement = function (e, t) {
  return this.toggleFacetRefinement(e, t);
};
F.prototype.toggleFacetRefinement = function (e, t) {
  return (
    this._change({
      state: this.state.resetPage().toggleFacetRefinement(e, t),
      isPageReset: !0,
    }),
    this
  );
};
F.prototype.toggleRefine = function () {
  return this.toggleFacetRefinement.apply(this, arguments);
};
F.prototype.toggleTag = function (e) {
  return (
    this._change({
      state: this.state.resetPage().toggleTagRefinement(e),
      isPageReset: !0,
    }),
    this
  );
};
F.prototype.nextPage = function () {
  var e = this.state.page || 0;
  return this.setPage(e + 1);
};
F.prototype.previousPage = function () {
  var e = this.state.page || 0;
  return this.setPage(e - 1);
};
function Ss(e) {
  if (e < 0) throw new Error("Page requested below 0.");
  return this._change({ state: this.state.setPage(e), isPageReset: !1 }), this;
}
F.prototype.setCurrentPage = Ss;
F.prototype.setPage = Ss;
F.prototype.setIndex = function (e) {
  return (
    this._change({
      state: this.state.resetPage().setIndex(e),
      isPageReset: !0,
    }),
    this
  );
};
F.prototype.setQueryParameter = function (e, t) {
  return (
    this._change({
      state: this.state.resetPage().setQueryParameter(e, t),
      isPageReset: !0,
    }),
    this
  );
};
F.prototype.setState = function (e) {
  return this._change({ state: kn.make(e), isPageReset: !1 }), this;
};
F.prototype.overrideStateWithoutTriggeringChangeEvent = function (e) {
  return (this.state = new kn(e)), this;
};
F.prototype.hasRefinements = function (e) {
  return hd(this.state.getNumericRefinements(e))
    ? !0
    : this.state.isConjunctiveFacet(e)
    ? this.state.isFacetRefined(e)
    : this.state.isDisjunctiveFacet(e)
    ? this.state.isDisjunctiveFacetRefined(e)
    : this.state.isHierarchicalFacet(e)
    ? this.state.isHierarchicalFacetRefined(e)
    : !1;
};
F.prototype.isExcluded = function (e, t) {
  return this.state.isExcludeRefined(e, t);
};
F.prototype.isDisjunctiveRefined = function (e, t) {
  return this.state.isDisjunctiveFacetRefined(e, t);
};
F.prototype.hasTag = function (e) {
  return this.state.isTagRefined(e);
};
F.prototype.isTagRefined = function () {
  return this.hasTagRefinements.apply(this, arguments);
};
F.prototype.getIndex = function () {
  return this.state.index;
};
function ws() {
  return this.state.page;
}
F.prototype.getCurrentPage = ws;
F.prototype.getPage = ws;
F.prototype.getTags = function () {
  return this.state.tagRefinements;
};
F.prototype.getRefinements = function (e) {
  var t = [];
  if (this.state.isConjunctiveFacet(e)) {
    var r = this.state.getConjunctiveRefinements(e);
    r.forEach(function (s) {
      t.push({ value: s, type: "conjunctive" });
    });
    var n = this.state.getExcludeRefinements(e);
    n.forEach(function (s) {
      t.push({ value: s, type: "exclude" });
    });
  } else if (this.state.isDisjunctiveFacet(e)) {
    var i = this.state.getDisjunctiveRefinements(e);
    i.forEach(function (s) {
      t.push({ value: s, type: "disjunctive" });
    });
  }
  var a = this.state.getNumericRefinements(e);
  return (
    Object.keys(a).forEach(function (s) {
      var o = a[s];
      t.push({ value: o, operator: s, type: "numeric" });
    }),
    t
  );
};
F.prototype.getNumericRefinement = function (e, t) {
  return this.state.getNumericRefinement(e, t);
};
F.prototype.getHierarchicalFacetBreadcrumb = function (e) {
  return this.state.getHierarchicalFacetBreadcrumb(e);
};
F.prototype._search = function (e) {
  var t = this.state,
    r = [],
    n = [];
  e.onlyWithDerivedHelpers ||
    ((n = ot._getQueries(t.index, t)),
    r.push({ state: t, queriesCount: n.length, helper: this }),
    this.emit("search", { state: t, results: this.lastResults }));
  var i = this.derivedHelpers.map(function (o) {
      var c = o.getModifiedState(t),
        u = ot._getQueries(c.index, c);
      return (
        r.push({ state: c, queriesCount: u.length, helper: o }),
        o.emit("search", { state: c, results: o.lastResults }),
        u
      );
    }),
    a = Array.prototype.concat.apply(n, i),
    s = this._queryId++;
  this._currentNbQueries++;
  try {
    this.client
      .search(a)
      .then(this._dispatchAlgoliaResponse.bind(this, r, s))
      .catch(this._dispatchAlgoliaError.bind(this, s));
  } catch (o) {
    this.emit("error", { error: o });
  }
};
F.prototype._dispatchAlgoliaResponse = function (e, t, r) {
  if (!(t < this._lastQueryIdReceived)) {
    (this._currentNbQueries -= t - this._lastQueryIdReceived),
      (this._lastQueryIdReceived = t),
      this._currentNbQueries === 0 && this.emit("searchQueueEmpty");
    var n = r.results.slice();
    e.forEach(function (i) {
      var a = i.state,
        s = i.queriesCount,
        o = i.helper,
        c = n.splice(0, s),
        u = (o.lastResults = new Rn(a, c));
      o.emit("result", { results: u, state: a });
    });
  }
};
F.prototype._dispatchAlgoliaError = function (e, t) {
  e < this._lastQueryIdReceived ||
    ((this._currentNbQueries -= e - this._lastQueryIdReceived),
    (this._lastQueryIdReceived = e),
    this.emit("error", { error: t }),
    this._currentNbQueries === 0 && this.emit("searchQueueEmpty"));
};
F.prototype.containsRefinement = function (e, t, r, n) {
  return e || t.length !== 0 || r.length !== 0 || n.length !== 0;
};
F.prototype._hasDisjunctiveRefinements = function (e) {
  return (
    this.state.disjunctiveRefinements[e] &&
    this.state.disjunctiveRefinements[e].length > 0
  );
};
F.prototype._change = function (e) {
  var t = e.state,
    r = e.isPageReset;
  t !== this.state &&
    ((this.state = t),
    this.emit("change", {
      state: this.state,
      results: this.lastResults,
      isPageReset: r,
    }));
};
F.prototype.clearCache = function () {
  return this.client.clearCache && this.client.clearCache(), this;
};
F.prototype.setClient = function (e) {
  return this.client === e
    ? this
    : (typeof e.addAlgoliaAgent == "function" &&
        e.addAlgoliaAgent("JS Helper (" + bs + ")"),
      (this.client = e),
      this);
};
F.prototype.getClient = function () {
  return this.client;
};
F.prototype.derive = function (e) {
  var t = new fd(this, e);
  return this.derivedHelpers.push(t), t;
};
F.prototype.detachDerivedHelper = function (e) {
  var t = this.derivedHelpers.indexOf(e);
  if (t === -1) throw new Error("Derived helper already detached");
  this.derivedHelpers.splice(t, 1);
};
F.prototype.hasPendingRequests = function () {
  return this._currentNbQueries > 0;
};
var vd = F,
  Ps = vd,
  yd = us,
  bd = gs;
function hr(e, t, r) {
  return new Ps(e, t, r);
}
hr.version = ys;
hr.AlgoliaSearchHelper = Ps;
hr.SearchParameters = yd;
hr.SearchResults = bd;
var je = hr;
function Zt(e) {
  return (
    (Zt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Zt(e)
  );
}
function ta(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function te(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ta(Object(r), !0).forEach(function (n) {
          Rs(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ta(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Rs(e, t, r) {
  return (
    (t = Sd(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Sd(e) {
  var t = wd(e, "string");
  return Zt(t) === "symbol" ? t : String(t);
}
function wd(e, t) {
  if (Zt(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Zt(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Pd = K({ name: "configure", connector: !0 });
function ra(e, t) {
  return e.setQueryParameters(
    Object.keys(t.searchParameters).reduce(function (r, n) {
      return te(te({}, r), {}, Rs({}, n, void 0));
    }, {})
  );
}
var Rd = function () {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : W,
    r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W;
  return function (n) {
    if (!n || !Ha(n.searchParameters))
      throw new Error(Pd("The `searchParameters` option expects an object."));
    var i = {};
    function a(s) {
      return function (o) {
        var c = ra(s.state, n),
          u = Rt(c, new je.SearchParameters(o));
        (n.searchParameters = o), s.setState(u).search();
      };
    }
    return {
      $$type: "ais.configure",
      init: function (o) {
        var c = o.instantSearchInstance;
        t(
          te(
            te({}, this.getWidgetRenderState(o)),
            {},
            { instantSearchInstance: c }
          ),
          !0
        );
      },
      render: function (o) {
        var c = o.instantSearchInstance;
        t(
          te(
            te({}, this.getWidgetRenderState(o)),
            {},
            { instantSearchInstance: c }
          ),
          !1
        );
      },
      dispose: function (o) {
        var c = o.state;
        return r(), ra(c, n);
      },
      getRenderState: function (o, c) {
        var u,
          f = this.getWidgetRenderState(c);
        return te(
          te({}, o),
          {},
          {
            configure: te(
              te({}, f),
              {},
              {
                widgetParams: te(
                  te({}, f.widgetParams),
                  {},
                  {
                    searchParameters: Rt(
                      new je.SearchParameters(
                        (u = o.configure) === null || u === void 0
                          ? void 0
                          : u.widgetParams.searchParameters
                      ),
                      new je.SearchParameters(f.widgetParams.searchParameters)
                    ).getQueryParams(),
                  }
                ),
              }
            ),
          }
        );
      },
      getWidgetRenderState: function (o) {
        var c = o.helper;
        return (
          i.refine || (i.refine = a(c)), { refine: i.refine, widgetParams: n }
        );
      },
      getWidgetSearchParameters: function (o, c) {
        var u = c.uiState;
        return Rt(
          o,
          new je.SearchParameters(te(te({}, u.configure), n.searchParameters))
        );
      },
      getWidgetUiState: function (o) {
        return te(
          te({}, o),
          {},
          { configure: te(te({}, o.configure), n.searchParameters) }
        );
      },
    };
  };
};
const Os = Rd;
function Xt(e) {
  return (
    (Xt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Xt(e)
  );
}
function na(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function nn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? na(Object(r), !0).forEach(function (n) {
          Od(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : na(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Od(e, t, r) {
  return (
    (t = $d(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function $d(e) {
  var t = Fd(e, "string");
  return Xt(t) === "symbol" ? t : String(t);
}
function Fd(e, t) {
  if (Xt(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Xt(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ia(e) {
  return Id(e) || xd(e) || _d(e) || jd();
}
function jd() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _d(e, t) {
  if (e) {
    if (typeof e == "string") return On(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return On(e, t);
  }
}
function xd(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Id(e) {
  if (Array.isArray(e)) return On(e);
}
function On(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var aa = K({ name: "configure-related-items", connector: !0 });
function sa(e) {
  var t = e.attributeName,
    r = e.attributeValue,
    n = e.attributeScore;
  return ""
    .concat(t, ":")
    .concat(r, "<score=")
    .concat(n || 1, ">");
}
var Ed = function (t, r) {
  return function (n) {
    var i = n || {},
      a = i.hit,
      s = i.matchingPatterns,
      o = i.transformSearchParameters,
      c =
        o === void 0
          ? function (l) {
              return l;
            }
          : o;
    if (!a) throw new Error(aa("The `hit` option is required."));
    if (!s) throw new Error(aa("The `matchingPatterns` option is required."));
    var u = Object.keys(s).reduce(function (l, g) {
        var m = s[g],
          d = dt(a, g),
          p = m.score;
        return Array.isArray(d)
          ? [].concat(ia(l), [
              d.map(function (v) {
                return sa({
                  attributeName: g,
                  attributeValue: v,
                  attributeScore: p,
                });
              }),
            ])
          : typeof d == "string"
          ? [].concat(ia(l), [
              sa({ attributeName: g, attributeValue: d, attributeScore: p }),
            ])
          : l;
      }, []),
      f = nn(
        {},
        c(
          new je.SearchParameters({
            sumOrFiltersScores: !0,
            facetFilters: ["objectID:-".concat(a.objectID)],
            optionalFilters: u,
          })
        )
      ),
      h = Os(t, r);
    return nn(
      nn({}, h({ searchParameters: f })),
      {},
      { $$type: "ais.configureRelatedItems" }
    );
  };
};
const Td = Ed;
function er(e) {
  return (
    (er =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    er(e)
  );
}
function oa(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? oa(Object(r), !0).forEach(function (n) {
          $s(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : oa(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function $s(e, t, r) {
  return (
    (t = Ad(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Ad(e) {
  var t = Hd(e, "string");
  return er(t) === "symbol" ? t : String(t);
}
function Hd(e, t) {
  if (er(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (er(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Dd = K({ name: "autocomplete", connector: !0 }),
  Ld = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W;
    return (
      Z(t, Dd()),
      function (n) {
        var i = n || {},
          a = i.escapeHTML,
          s = a === void 0 ? !0 : a,
          o = {};
        return {
          $$type: "ais.autocomplete",
          init: function (u) {
            var f = u.instantSearchInstance;
            t(
              Re(
                Re({}, this.getWidgetRenderState(u)),
                {},
                { instantSearchInstance: f }
              ),
              !0
            );
          },
          render: function (u) {
            var f = u.instantSearchInstance,
              h = this.getWidgetRenderState(u);
            h.indices.forEach(function (l) {
              var g = l.sendEvent,
                m = l.hits;
              g("view", m);
            }),
              t(Re(Re({}, h), {}, { instantSearchInstance: f }), !1);
          },
          getRenderState: function (u, f) {
            return Re(
              Re({}, u),
              {},
              { autocomplete: this.getWidgetRenderState(f) }
            );
          },
          getWidgetRenderState: function (u) {
            var f = this,
              h = u.helper,
              l = u.state,
              g = u.scopedResults,
              m = u.instantSearchInstance;
            o.refine ||
              (o.refine = function (p) {
                h.setQuery(p).search();
              });
            var d = g.map(function (p) {
              p.results.hits = s ? Hn(p.results.hits) : p.results.hits;
              var v = Ln({
                instantSearchInstance: m,
                index: p.results.index,
                widgetType: f.$$type,
              });
              return {
                indexId: p.indexId,
                indexName: p.results.index,
                hits: p.results.hits,
                results: p.results,
                sendEvent: v,
              };
            });
            return {
              currentRefinement: l.query || "",
              indices: d,
              refine: o.refine,
              widgetParams: n,
            };
          },
          getWidgetUiState: function (u, f) {
            var h = f.searchParameters,
              l = h.query || "";
            return l === "" || (u && u.query === l)
              ? u
              : Re(Re({}, u), {}, { query: l });
          },
          getWidgetSearchParameters: function (u, f) {
            var h = f.uiState,
              l = { query: h.query || "" };
            return s
              ? u.setQueryParameters(Re(Re({}, l), He))
              : u.setQueryParameters(l);
          },
          dispose: function (u) {
            var f = u.state;
            r();
            var h = f.setQueryParameter("query", void 0);
            return s
              ? h.setQueryParameters(
                  Object.keys(He).reduce(function (l, g) {
                    return Re(Re({}, l), {}, $s({}, g, void 0));
                  }, {})
                )
              : h;
          },
        };
      }
    );
  };
const Nd = Ld;
function tr(e) {
  return (
    (tr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    tr(e)
  );
}
function ua(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ke(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ua(Object(r), !0).forEach(function (n) {
          Wd(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ua(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Wd(e, t, r) {
  return (
    (t = Cd(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Cd(e) {
  var t = Md(e, "string");
  return tr(t) === "symbol" ? t : String(t);
}
function Md(e, t) {
  if (tr(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (tr(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Dr(e) {
  return Vd(e) || qd(e) || Qd(e) || Ud();
}
function Ud() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qd(e, t) {
  if (e) {
    if (typeof e == "string") return $n(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return $n(e, t);
  }
}
function qd(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Vd(e) {
  if (Array.isArray(e)) return $n(e);
}
function $n(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var ca = K({ name: "query-rules", connector: !0 });
function Bd(e) {
  return [
    e.disjunctiveFacetsRefinements,
    e.facetsRefinements,
    e.hierarchicalFacetsRefinements,
    e.numericRefinements,
  ].some(function (t) {
    return Boolean(t && Object.keys(t).length > 0);
  });
}
function kd(e) {
  return e.replace(/[^a-z0-9-_]+/gi, "_");
}
function Kd(e) {
  var t = e.helper,
    r = e.sharedHelperState,
    n = e.trackedFilters,
    i = Object.keys(n).reduce(function (a, s) {
      var o = Nn(t.lastResults || {}, r, !0)
          .filter(function (f) {
            return f.attribute === s;
          })
          .map(function (f) {
            return f.numericValue || f.name;
          }),
        c = n[s],
        u = c(o);
      return [].concat(
        Dr(a),
        Dr(
          o
            .filter(function (f) {
              return u.includes(f);
            })
            .map(function (f) {
              return kd("ais-".concat(s, "-").concat(f));
            })
        )
      );
    }, []);
  return i;
}
function zd(e) {
  var t = this.helper,
    r = this.initialRuleContexts,
    n = this.trackedFilters,
    i = this.transformRuleContexts,
    a = e.state,
    s = a.ruleContexts || [],
    o = Kd({ helper: t, sharedHelperState: a, trackedFilters: n }),
    c = [].concat(Dr(r), Dr(o)),
    u = i(c).slice(0, 10);
  dr(s, u) ||
    t.overrideStateWithoutTriggeringChangeEvent(
      ke(ke({}, a), {}, { ruleContexts: u })
    );
}
var Jd = function (t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W;
  return (
    Z(t, ca()),
    function (n) {
      var i = n || {},
        a = i.trackedFilters,
        s = a === void 0 ? {} : a,
        o = i.transformRuleContexts,
        c =
          o === void 0
            ? function (m) {
                return m;
              }
            : o,
        u = i.transformItems,
        f =
          u === void 0
            ? function (m) {
                return m;
              }
            : u;
      Object.keys(s).forEach(function (m) {
        if (typeof s[m] != "function")
          throw new Error(
            ca(
              `'The "`.concat(
                m,
                '" filter value in the `trackedFilters` option expects a function.'
              )
            )
          );
      });
      var h = Object.keys(s).length > 0,
        l = [],
        g;
      return {
        $$type: "ais.queryRules",
        init: function (d) {
          var p = d.helper,
            v = d.state,
            b = d.instantSearchInstance;
          (l = v.ruleContexts || []),
            (g = zd.bind({
              helper: p,
              initialRuleContexts: l,
              trackedFilters: s,
              transformRuleContexts: c,
            })),
            h &&
              ((Bd(v) || Boolean(n.transformRuleContexts)) && g({ state: v }),
              p.on("change", g)),
            t(
              ke(
                ke({}, this.getWidgetRenderState(d)),
                {},
                { instantSearchInstance: b }
              ),
              !0
            );
        },
        render: function (d) {
          var p = d.instantSearchInstance;
          t(
            ke(
              ke({}, this.getWidgetRenderState(d)),
              {},
              { instantSearchInstance: p }
            ),
            !1
          );
        },
        getWidgetRenderState: function (d) {
          var p = d.results,
            v = p || {},
            b = v.userData,
            y = b === void 0 ? [] : b,
            S = f(y, { results: p });
          return { items: S, widgetParams: n };
        },
        getRenderState: function (d, p) {
          return ke(
            ke({}, d),
            {},
            { queryRules: this.getWidgetRenderState(p) }
          );
        },
        dispose: function (d) {
          var p = d.helper,
            v = d.state;
          return (
            r(),
            h
              ? (p.removeListener("change", g),
                v.setQueryParameter("ruleContexts", l))
              : v
          );
        },
      };
    }
  );
};
const Fs = Jd;
function rr(e) {
  return (
    (rr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    rr(e)
  );
}
function fa(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function la(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? fa(Object(r), !0).forEach(function (n) {
          Yd(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : fa(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Yd(e, t, r) {
  return (
    (t = Gd(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Gd(e) {
  var t = Zd(e, "string");
  return rr(t) === "symbol" ? t : String(t);
}
function Zd(e, t) {
  if (rr(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (rr(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Xd = function (t) {
  var r = t.searchAsYouSpeak,
    n = t.language,
    i = t.onQueryChange,
    a = t.onStateChange,
    s = window.webkitSpeechRecognition || window.SpeechRecognition,
    o = function (R) {
      return {
        status: R,
        transcript: "",
        isSpeechFinal: !1,
        errorCode: void 0,
      };
    },
    c = o("initial"),
    u,
    f = function () {
      return Boolean(s);
    },
    h = function () {
      return (
        c.status === "askingPermission" ||
        c.status === "waiting" ||
        c.status === "recognizing"
      );
    },
    l = function () {
      var R =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      (c = la(la({}, c), R)), a();
    },
    g = function () {
      return c;
    },
    m = function () {
      var R =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : "initial";
      l(o(R));
    },
    d = function () {
      l({ status: "waiting" });
    },
    p = function (R) {
      l({ status: "error", errorCode: R.error });
    },
    v = function (R) {
      l({
        status: "recognizing",
        transcript:
          (R.results[0] && R.results[0][0] && R.results[0][0].transcript) || "",
        isSpeechFinal: R.results[0] && R.results[0].isFinal,
      }),
        r && c.transcript && i(c.transcript);
    },
    b = function () {
      !c.errorCode && c.transcript && !r && i(c.transcript),
        c.status !== "error" && l({ status: "finished" });
    },
    y = function () {
      (u = new s()),
        u &&
          (m("askingPermission"),
          (u.interimResults = !0),
          n && (u.lang = n),
          u.addEventListener("start", d),
          u.addEventListener("error", p),
          u.addEventListener("result", v),
          u.addEventListener("end", b),
          u.start());
    },
    S = function () {
      u &&
        (u.stop(),
        u.removeEventListener("start", d),
        u.removeEventListener("error", p),
        u.removeEventListener("result", v),
        u.removeEventListener("end", b),
        (u = void 0));
    },
    P = function () {
      S(), m("finished");
    };
  return {
    getState: g,
    isBrowserSupported: f,
    isListening: h,
    startListening: y,
    stopListening: P,
    dispose: S,
  };
};
const eh = Xd;
function nr(e) {
  return (
    (nr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    nr(e)
  );
}
function da(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Oe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? da(Object(r), !0).forEach(function (n) {
          th(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : da(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function th(e, t, r) {
  return (
    (t = rh(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function rh(e) {
  var t = nh(e, "string");
  return nr(t) === "symbol" ? t : String(t);
}
function nh(e, t) {
  if (nr(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (nr(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ih = K({ name: "voice-search", connector: !0 }),
  ah = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W;
    return (
      Z(t, ih()),
      function (n) {
        var i = n.searchAsYouSpeak,
          a = i === void 0 ? !1 : i,
          s = n.language,
          o = n.additionalQueryParameters,
          c = n.createVoiceSearchHelper,
          u = c === void 0 ? eh : c;
        return {
          $$type: "ais.voiceSearch",
          init: function (h) {
            var l = h.instantSearchInstance;
            t(
              Oe(
                Oe({}, this.getWidgetRenderState(h)),
                {},
                { instantSearchInstance: l }
              ),
              !0
            );
          },
          render: function (h) {
            var l = h.instantSearchInstance;
            t(
              Oe(
                Oe({}, this.getWidgetRenderState(h)),
                {},
                { instantSearchInstance: l }
              ),
              !1
            );
          },
          getRenderState: function (h, l) {
            return Oe(
              Oe({}, h),
              {},
              { voiceSearch: this.getWidgetRenderState(l) }
            );
          },
          getWidgetRenderState: function (h) {
            var l = this,
              g = h.helper,
              m = h.instantSearchInstance;
            this._refine ||
              (this._refine = function (P) {
                if (P !== g.state.query) {
                  var w = s ? [s.split("-")[0]] : void 0;
                  g.setQueryParameter("queryLanguages", w),
                    typeof o == "function" &&
                      g.setState(
                        g.state.setQueryParameters(
                          Oe(
                            {
                              ignorePlurals: !0,
                              removeStopWords: !0,
                              optionalWords: P,
                            },
                            o({ query: P })
                          )
                        )
                      ),
                    g.setQuery(P).search();
                }
              }),
              this._voiceSearchHelper ||
                (this._voiceSearchHelper = u({
                  searchAsYouSpeak: a,
                  language: s,
                  onQueryChange: function (w) {
                    return l._refine(w);
                  },
                  onStateChange: function () {
                    t(
                      Oe(
                        Oe({}, l.getWidgetRenderState(h)),
                        {},
                        { instantSearchInstance: m }
                      ),
                      !1
                    );
                  },
                }));
            var d = this._voiceSearchHelper,
              p = d.isBrowserSupported,
              v = d.isListening,
              b = d.startListening,
              y = d.stopListening,
              S = d.getState;
            return {
              isBrowserSupported: p(),
              isListening: v(),
              toggleListening: function () {
                p() && (v() ? y() : b());
              },
              voiceListeningState: S(),
              widgetParams: n,
            };
          },
          dispose: function (h) {
            var l = h.state;
            this._voiceSearchHelper.dispose(), r();
            var g = l;
            if (typeof o == "function") {
              var m = o({ query: "" }),
                d = m
                  ? Object.keys(m).reduce(function (p, v) {
                      return (p[v] = void 0), p;
                    }, {})
                  : {};
              g = l.setQueryParameters(
                Oe(
                  {
                    queryLanguages: void 0,
                    ignorePlurals: void 0,
                    removeStopWords: void 0,
                    optionalWords: void 0,
                  },
                  d
                )
              );
            }
            return g.setQueryParameter("query", void 0);
          },
          getWidgetUiState: function (h, l) {
            var g = l.searchParameters,
              m = g.query || "";
            return m ? Oe(Oe({}, h), {}, { query: m }) : h;
          },
          getWidgetSearchParameters: function (h, l) {
            var g = l.uiState;
            return h.setQueryParameter("query", g.query || "");
          },
        };
      }
    );
  };
const sh = ah;
function ir(e) {
  return (
    (ir =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ir(e)
  );
}
function ha(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Be(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ha(Object(r), !0).forEach(function (n) {
          oh(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ha(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function oh(e, t, r) {
  return (
    (t = uh(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function uh(e) {
  var t = ch(e, "string");
  return ir(t) === "symbol" ? t : String(t);
}
function ch(e, t) {
  if (ir(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ir(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var fh = function () {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : W,
    r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W;
  return function (n) {
    var i = {};
    return {
      $$type: "ais.relevantSort",
      init: function (s) {
        var o = s.instantSearchInstance;
        t(
          Be(
            Be({}, this.getWidgetRenderState(s)),
            {},
            { instantSearchInstance: o }
          ),
          !0
        );
      },
      render: function (s) {
        var o = s.instantSearchInstance;
        t(
          Be(
            Be({}, this.getWidgetRenderState(s)),
            {},
            { instantSearchInstance: o }
          ),
          !1
        );
      },
      dispose: function (s) {
        var o = s.state;
        return r(), o.setQueryParameter("relevancyStrictness", void 0);
      },
      getRenderState: function (s, o) {
        return Be(
          Be({}, s),
          {},
          { relevantSort: this.getWidgetRenderState(o) }
        );
      },
      getWidgetRenderState: function (s) {
        var o = s.results,
          c = s.helper;
        i.refine ||
          (i.refine = function (l) {
            c.setQueryParameter("relevancyStrictness", l).search();
          });
        var u = o || {},
          f = u.appliedRelevancyStrictness,
          h = f !== void 0;
        return {
          isRelevantSorted: typeof f < "u" && f > 0,
          isVirtualReplica: h,
          canRefine: h,
          refine: i.refine,
          widgetParams: n,
        };
      },
      getWidgetSearchParameters: function (s, o) {
        var c,
          u = o.uiState;
        return s.setQueryParameter(
          "relevancyStrictness",
          (c = u.relevantSort) !== null && c !== void 0
            ? c
            : s.relevancyStrictness
        );
      },
      getWidgetUiState: function (s, o) {
        var c = o.searchParameters;
        return Be(
          Be({}, s),
          {},
          { relevantSort: c.relevancyStrictness || s.relevantSort }
        );
      },
    };
  };
};
const lh = fh;
function ma(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function at(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ma(Object(r), !0).forEach(function (n) {
          dh(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ma(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function dh(e, t, r) {
  return (
    (t = hh(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function hh(e) {
  var t = mh(e, "string");
  return ut(t) === "symbol" ? t : String(t);
}
function mh(e, t) {
  if (ut(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ut(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ut(e) {
  return (
    (ut =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ut(e)
  );
}
var br = K({ name: "dynamic-widgets", connector: !0 }),
  gh = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W;
    return (
      Z(t, br()),
      function (n) {
        var i = n.widgets,
          a = n.maxValuesPerFacet,
          s = a === void 0 ? 20 : a,
          o = n.facets,
          c = o === void 0 ? ["*"] : o,
          u = n.transformItems,
          f =
            u === void 0
              ? function (g) {
                  return g;
                }
              : u,
          h = n.fallbackWidget;
        if (
          !(
            i &&
            Array.isArray(i) &&
            i.every(function (g) {
              return ut(g) === "object";
            })
          )
        )
          throw new Error(
            br("The `widgets` option expects an array of widgets.")
          );
        if (
          !(
            Array.isArray(c) &&
            c.length <= 1 &&
            (c[0] === "*" || c[0] === void 0)
          )
        )
          throw new Error(
            br(
              'The `facets` option only accepts [] or ["*"], you passed '.concat(
                JSON.stringify(c)
              )
            )
          );
        var l = new Map();
        return {
          $$type: "ais.dynamicWidgets",
          init: function (m) {
            i.forEach(function (d) {
              var p = _o(d, m);
              l.set(p, { widget: d, isMounted: !1 });
            }),
              t(
                at(
                  at({}, this.getWidgetRenderState(m)),
                  {},
                  { instantSearchInstance: m.instantSearchInstance }
                ),
                !0
              );
          },
          render: function (m) {
            var d = m.parent,
              p = this.getWidgetRenderState(m),
              v = [],
              b = [];
            h &&
              p.attributesToRender.forEach(function (y) {
                if (!l.has(y)) {
                  var S = h({ attribute: y });
                  l.set(y, { widget: S, isMounted: !1 });
                }
              }),
              l.forEach(function (y, S) {
                var P = y.widget,
                  w = y.isMounted,
                  R = p.attributesToRender.indexOf(S) > -1;
                !w && R
                  ? (b.push(P), l.set(S, { widget: P, isMounted: !0 }))
                  : w &&
                    !R &&
                    (v.push(P), l.set(S, { widget: P, isMounted: !1 }));
              }),
              d.addWidgets(b),
              setTimeout(function () {
                return d.removeWidgets(v);
              }, 0),
              t(
                at(
                  at({}, p),
                  {},
                  { instantSearchInstance: m.instantSearchInstance }
                ),
                !1
              );
          },
          dispose: function (m) {
            var d = m.parent,
              p = [];
            l.forEach(function (v) {
              var b = v.widget,
                y = v.isMounted;
              y && p.push(b);
            }),
              d.removeWidgets(p),
              r();
          },
          getWidgetSearchParameters: function (m) {
            return c.reduce(
              function (d, p) {
                return d.addFacet(p);
              },
              m.setQueryParameters({
                maxValuesPerFacet: Math.max(s || 0, m.maxValuesPerFacet || 0),
              })
            );
          },
          getRenderState: function (m, d) {
            return at(
              at({}, m),
              {},
              { dynamicWidgets: this.getWidgetRenderState(d) }
            );
          },
          getWidgetRenderState: function (m) {
            var d,
              p,
              v,
              b,
              y = m.results;
            if ((m.state, !y))
              return { attributesToRender: [], widgetParams: n };
            var S = f(
              (d =
                (p = y.renderingContent) === null ||
                p === void 0 ||
                (v = p.facetOrdering) === null ||
                v === void 0 ||
                (b = v.facets) === null ||
                b === void 0
                  ? void 0
                  : b.order) !== null && d !== void 0
                ? d
                : [],
              { results: y }
            );
            if (!Array.isArray(S))
              throw new Error(
                br(
                  "The `transformItems` option expects a function that returns an Array."
                )
              );
            return { attributesToRender: S, widgetParams: n };
          },
        };
      }
    );
  };
const ph = gh;
q({ connector: Nd }, { $$widgetType: "ais.autocomplete" }),
  C({ name: "Autocomplete" });
E(
  "p",
  null,
  " This widget doesn't render anything without a filled in default slot. ",
  -1
);
E("p", null, "query, function to refine and results are provided.", -1);
E("pre", null, "refine: Function", -1);
E("summary", null, [E("code", null, "indices"), xe(":")], -1);
function vh(e) {
  return {
    all: (e = e || new Map()),
    on: function (t, r) {
      var n = e.get(t);
      (n && n.push(r)) || e.set(t, [r]);
    },
    off: function (t, r) {
      var n = e.get(t);
      n && n.splice(n.indexOf(r) >>> 0, 1);
    },
    emit: function (t, r) {
      (e.get(t) || []).slice().map(function (n) {
        n(r);
      }),
        (e.get("*") || []).slice().map(function (n) {
          n(t, r);
        });
    },
  };
}
var yh = function () {
    var e;
    return (
      ((e = {
        props: {
          emitter: {
            type: Object,
            required: !1,
            default: function () {
              return vh();
            },
          },
        },
        provide: function () {
          var t;
          return ((t = {}).instantSearchPanelEmitter = this.emitter), t;
        },
        data: function () {
          return { canRefine: !0 };
        },
        created: function () {
          var t = this;
          this.emitter.on("PANEL_CHANGE_EVENT", function (r) {
            t.updateCanRefine(r);
          });
        },
      }).beforeUnmount = function () {
        this.emitter.all.clear();
      }),
      (e.methods = {
        updateCanRefine: function (t) {
          this.canRefine = t;
        },
      }),
      e
    );
  },
  pe = function (e) {
    e === void 0 && (e = {});
    var t = e.mapStateToCanRefine;
    return (
      t === void 0 &&
        (t = function (r) {
          return Boolean(r.canRefine);
        }),
      {
        inject: {
          emitter: {
            from: "instantSearchPanelEmitter",
            default: function () {
              return { emit: function () {} };
            },
          },
        },
        data: function () {
          return { state: null, hasAlreadyEmitted: !1 };
        },
        watch: {
          state: {
            immediate: !0,
            handler: function (r, n) {
              if (r) {
                var i = t(n || {}),
                  a = t(r);
                (this.hasAlreadyEmitted && i === a) ||
                  (this.emitter.emit("PANEL_CHANGE_EVENT", a),
                  (this.hasAlreadyEmitted = !0));
              }
            },
          },
        },
      }
    );
  };
q({ connector: pl }, { $$widgetType: "ais.breadcrumb" }),
  pe(),
  C({ name: "Breadcrumb" });
xe("Home");
xe("Home");
xe(">");
const bh = {
  name: "AisClearRefinements",
  mixins: [
    q({ connector: vu }, { $$widgetType: "ais.clearRefinements" }),
    pe(),
    C({ name: "ClearRefinements" }),
  ],
  props: {
    excludedAttributes: { type: Array, default: void 0 },
    includedAttributes: { type: Array, default: void 0 },
    transformItems: { type: Function, default: void 0 },
  },
  computed: {
    widgetParams: function () {
      return {
        includedAttributes: this.includedAttributes,
        excludedAttributes: this.excludedAttributes,
        transformItems: this.transformItems,
      };
    },
    canRefine: function () {
      return this.state.hasRefinements;
    },
  },
};
var Sh = xe(" Clear refinements ");
function wh(e, t, r, n, i, a) {
  return e.state
    ? (J(),
      Y(
        "div",
        { key: 0, class: e.suit() },
        [
          ie(
            e.$slots,
            "default",
            {
              canRefine: a.canRefine,
              refine: e.state.refine,
              createURL: e.state.createURL,
            },
            function () {
              return [
                E(
                  "button",
                  {
                    type: "reset",
                    class: [
                      e.suit("button"),
                      !a.canRefine && e.suit("button", "disabled"),
                    ],
                    disabled: !a.canRefine,
                    onClick:
                      t[1] ||
                      (t[1] = Ir(
                        function () {
                          for (var s, o = [], c = arguments.length; c--; )
                            o[c] = arguments[c];
                          return (
                            e.state.refine && (s = e.state).refine.apply(s, o)
                          );
                        },
                        ["prevent"]
                      )),
                  },
                  [
                    ie(e.$slots, "resetLabel", {}, function () {
                      return [Sh];
                    }),
                  ],
                  10,
                  ["disabled"]
                ),
              ];
            }
          ),
        ],
        2
      ))
    : $e("", !0);
}
bh.render = wh;
const jg = {
  inheritAttrs: !1,
  name: "AisConfigure",
  mixins: [
    C({ name: "Configure" }),
    q({ connector: Os }, { $$widgetType: "ais.configure" }),
  ],
  computed: {
    widgetParams: function () {
      return { searchParameters: this.$attrs };
    },
  },
  render: fr(function (e) {
    var t = this.$slots.default;
    return this.state && t
      ? e("div", { class: this.suit() }, [
          t({
            refine: this.state.refine,
            searchParameters: this.state.widgetParams.searchParameters,
          }),
        ])
      : null;
  }),
};
q({ connector: Td }, { $$widgetType: "ais.configureRelatedItems" });
C({ name: "CurrentRefinements" }),
  q({ connector: Iu }, { $$widgetType: "ais.currentRefinements" }),
  pe();
const js = {
  name: "HierarchicalMenuList",
  props: {
    items: { type: Array, required: !0 },
    level: { type: Number, required: !0 },
    refine: { type: Function, required: !0 },
    createURL: { type: Function, required: !0 },
    suit: { type: Function, required: !0 },
  },
};
function Ph(e, t, r, n, i, a) {
  var s = $t("hierarchical-menu-list", !0);
  return (
    J(),
    Y(
      "ul",
      {
        class: [
          r.suit("list"),
          r.level > 0 && r.suit("list", "child"),
          r.suit("list", "lvl" + r.level),
        ],
      },
      [
        (J(!0),
        Y(
          Tn,
          null,
          An(r.items, function (o) {
            return (
              J(),
              Y(
                "li",
                {
                  key: o.value,
                  class: [
                    r.suit("item"),
                    o.data && r.suit("item", "parent"),
                    o.isRefined && r.suit("item", "selected"),
                  ],
                },
                [
                  E(
                    "a",
                    {
                      href: r.createURL(o.value),
                      class: [
                        r.suit("link"),
                        o.isRefined && r.suit("link", "selected"),
                      ],
                      onClick: Ir(
                        function (c) {
                          return r.refine(o.value);
                        },
                        ["prevent"]
                      ),
                    },
                    [
                      E("span", { class: r.suit("label") }, Ae(o.label), 3),
                      E("span", { class: r.suit("count") }, Ae(o.count), 3),
                    ],
                    10,
                    ["href", "onClick"]
                  ),
                  o.data
                    ? (J(),
                      Y(
                        s,
                        {
                          key: 0,
                          items: o.data,
                          level: r.level + 1,
                          refine: r.refine,
                          createURL: r.createURL,
                          suit: r.suit,
                        },
                        null,
                        8,
                        ["items", "level", "refine", "createURL", "suit"]
                      ))
                    : $e("", !0),
                ],
                2
              )
            );
          }),
          128
        )),
      ],
      2
    )
  );
}
js.render = Ph;
C({ name: "HierarchicalMenu" }),
  q({ connector: Qu }, { $$widgetType: "ais.hierarchicalMenu" }),
  pe();
var Rh = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
  },
  _s = /&(?:amp|lt|gt|quot|#39);/g,
  Oh = RegExp(_s.source);
function ga(e) {
  return e && Oh.test(e)
    ? e.replace(_s, function (t) {
        return Rh[t];
      })
    : e;
}
var pa = {
  highlightPreTag: "__ais-highlight__",
  highlightPostTag: "__/ais-highlight__",
};
function va(e) {
  var t = e.preTag,
    r = e.postTag,
    n = e.highlightedValue;
  n === void 0 && (n = "");
  var i = n.split(t),
    a = i.shift(),
    s = a === "" ? [] : [{ value: a, isHighlighted: !1 }];
  if (r === t) {
    var o = !0;
    i.forEach(function (c) {
      s.push({ value: c, isHighlighted: o }), (o = !o);
    });
  } else
    i.forEach(function (c) {
      var u = c.split(r);
      s.push({ value: u[0], isHighlighted: !0 }),
        u[1] !== "" &&
          s.push({ value: u[1] === " " ? "  " : u[1], isHighlighted: !1 });
    });
  return s;
}
function $h(e) {
  var t = e.preTag;
  t === void 0 && (t = pa.highlightPreTag);
  var r = e.postTag;
  r === void 0 && (r = pa.highlightPostTag);
  var n = e.highlightProperty,
    i = e.attribute,
    a = e.hit;
  if (!a) throw new Error("`hit`, the matching record, must be provided");
  var s = dt(a[n], i) || {};
  return Array.isArray(s)
    ? s.map(function (o) {
        return va({ preTag: t, postTag: r, highlightedValue: ga(o.value) });
      })
    : va({ preTag: t, postTag: r, highlightedValue: ga(s.value) });
}
var Fh = function (e, t) {
  return t.slots.default();
};
const Kn = {
  name: "AisHighlighter",
  props: {
    hit: { type: Object, required: !0 },
    attribute: { type: String, required: !0 },
    highlightedTagName: { type: String, default: "mark" },
    suit: { type: Function, required: !0 },
    highlightProperty: { type: String, required: !0 },
    preTag: { type: String, required: !0 },
    postTag: { type: String, required: !0 },
  },
  data: function () {
    return { TextNode: Fh };
  },
  computed: {
    parsedHighlights: function () {
      return $h({
        attribute: this.attribute,
        hit: this.hit,
        highlightProperty: this.highlightProperty,
        preTag: this.preTag,
        postTag: this.postTag,
      });
    },
  },
};
function jh(e, t, r, n, i, a) {
  return (
    J(),
    Y(
      "span",
      { class: r.suit() },
      [
        (J(!0),
        Y(
          Tn,
          null,
          An(a.parsedHighlights, function (s, o) {
            var c = s.value,
              u = s.isHighlighted;
            return (
              J(),
              Y(
                Zs(u ? r.highlightedTagName : i.TextNode),
                { class: [u && r.suit("highlighted")], key: o },
                {
                  default: vt(function () {
                    return [xe(Ae(c), 1)];
                  }),
                  _: 2,
                },
                1032,
                ["class"]
              )
            );
          }),
          128
        )),
      ],
      2
    )
  );
}
Kn.render = jh;
const xs = {
  name: "AisHighlight",
  mixins: [C({ name: "Highlight" })],
  components: { AisHighlighter: Kn },
  props: {
    hit: { type: Object, required: !0 },
    attribute: { type: String, required: !0 },
    highlightedTagName: { type: String, default: "mark" },
  },
};
function _h(e, t, r, n, i, a) {
  var s = $t("ais-highlighter");
  return (
    J(),
    Y(
      s,
      {
        hit: r.hit,
        attribute: r.attribute,
        "highlighted-tag-name": r.highlightedTagName,
        suit: e.suit,
        "highlight-property": "_highlightResult",
        "pre-tag": "<mark>",
        "post-tag": "</mark>",
      },
      null,
      8,
      ["hit", "attribute", "highlighted-tag-name", "suit"]
    )
  );
}
xs.render = _h;
q({ connector: ic }, { $$widgetType: "ais.hits" }), C({ name: "Hits" });
C({ name: "HitsPerPage" }),
  q({ connector: mc }, { $$widgetType: "ais.hitsPerPage" }),
  pe();
function ar(e) {
  return (
    (ar =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ar(e)
  );
}
var xh = ["initialSearchParameters"];
function ya(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ze(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ya(Object(r), !0).forEach(function (n) {
          Lr(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ya(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Lr(e, t, r) {
  return (
    (t = Ih(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Ih(e) {
  var t = Eh(e, "string");
  return ar(t) === "symbol" ? t : String(t);
}
function Eh(e, t) {
  if (ar(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ar(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Is(e) {
  return Dh(e) || Hh(e) || Ah(e) || Th();
}
function Th() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ah(e, t) {
  if (e) {
    if (typeof e == "string") return Fn(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Fn(e, t);
  }
}
function Hh(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Dh(e) {
  if (Array.isArray(e)) return Fn(e);
}
function Fn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Lh(e, t) {
  if (e == null) return {};
  var r = Nh(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function Nh(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var pt = K({ name: "index-widget" });
function Es(e, t) {
  var r = t.state,
    n = t.isPageReset,
    i = t._uiState;
  r !== e.state &&
    ((e.state = r),
    e.emit("change", {
      state: e.state,
      results: e.lastResults,
      isPageReset: n,
      _uiState: i,
    }));
}
function Sr(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return e.reduce(function (n, i) {
    return lt(i) || (!i.getWidgetUiState && !i.getWidgetState)
      ? n
      : i.getWidgetUiState
      ? i.getWidgetUiState(n, t)
      : i.getWidgetState(n, t);
  }, r);
}
function wr(e, t) {
  var r = t.initialSearchParameters,
    n = Lh(t, xh);
  return e
    .filter(function (i) {
      return !lt(i);
    })
    .reduce(function (i, a) {
      return a.getWidgetSearchParameters
        ? a.getWidgetSearchParameters(i, n)
        : i;
    }, r);
}
function Ts(e) {
  var t = e.filter(lt);
  t.length !== 0 &&
    t.forEach(function (r) {
      var n = r.getHelper();
      Es(n, { state: n.state.resetPage(), isPageReset: !0 }),
        Ts(r.getWidgets());
    });
}
function As(e) {
  var t = e.filter(lt);
  return t.reduce(function (r, n) {
    return r.concat.apply(
      r,
      [
        {
          indexId: n.getIndexId(),
          results: n.getResults(),
          helper: n.getHelper(),
        },
      ].concat(Is(As(n.getWidgets())))
    );
  }, []);
}
var Wh = function (t) {
  if (t === void 0 || t.indexName === void 0)
    throw new Error(pt("The `indexName` option is required."));
  var r = t.indexName,
    n = t.indexId,
    i = n === void 0 ? r : n,
    a = [],
    s = {},
    o = null,
    c = null,
    u = null,
    f = null;
  return {
    $$type: "ais.index",
    $$widgetType: "ais.index",
    getIndexName: function () {
      return r;
    },
    getIndexId: function () {
      return i;
    },
    getHelper: function () {
      return u;
    },
    getResults: function () {
      return f && f.lastResults;
    },
    getScopedResults: function () {
      var l = this.getParent(),
        g = l ? l.getWidgets() : [this];
      return As(g);
    },
    getParent: function () {
      return c;
    },
    createURL: function (l) {
      return o._createURL(Lr({}, i, Sr(a, { searchParameters: l, helper: u })));
    },
    getWidgets: function () {
      return a;
    },
    addWidgets: function (l) {
      var g = this;
      if (!Array.isArray(l))
        throw new Error(
          pt("The `addWidgets` method expects an array of widgets.")
        );
      if (
        l.some(function (m) {
          return typeof m.init != "function" && typeof m.render != "function";
        })
      )
        throw new Error(
          pt(
            "The widget definition expects a `render` and/or an `init` method."
          )
        );
      return (
        (a = a.concat(l)),
        o &&
          Boolean(l.length) &&
          (Es(u, {
            state: wr(a, { uiState: s, initialSearchParameters: u.state }),
            _uiState: s,
          }),
          l.forEach(function (m) {
            if (m.getRenderState) {
              var d = m.getRenderState(
                o.renderState[g.getIndexId()] || {},
                bt(o, g, o._initialUiState)
              );
              an({ renderState: d, instantSearchInstance: o, parent: g });
            }
          }),
          l.forEach(function (m) {
            m.init && m.init(bt(o, g, o._initialUiState));
          }),
          o.scheduleSearch()),
        this
      );
    },
    removeWidgets: function (l) {
      var g = this;
      if (!Array.isArray(l))
        throw new Error(
          pt("The `removeWidgets` method expects an array of widgets.")
        );
      if (
        l.some(function (d) {
          return typeof d.dispose != "function";
        })
      )
        throw new Error(
          pt("The widget definition expects a `dispose` method.")
        );
      if (
        ((a = a.filter(function (d) {
          return l.indexOf(d) === -1;
        })),
        o && Boolean(l.length))
      ) {
        var m = l.reduce(function (d, p) {
          var v = p.dispose({ helper: u, state: d, parent: g });
          return v || d;
        }, u.state);
        (s = Sr(a, { searchParameters: m, helper: u })),
          u.setState(wr(a, { uiState: s, initialSearchParameters: m })),
          a.length && o.scheduleSearch();
      }
      return this;
    },
    init: function (l) {
      var g = this,
        m,
        d = l.instantSearchInstance,
        p = l.parent,
        v = l.uiState;
      if (u === null) {
        (o = d), (c = p), (s = v[i] || {});
        var b = d.mainHelper,
          y = wr(a, {
            uiState: s,
            initialSearchParameters: new je.SearchParameters({ index: r }),
          });
        (u = je({}, y.index, y)),
          (u.search = function () {
            return d.onStateChange
              ? (d.onStateChange({
                  uiState: d.mainIndex.getWidgetUiState({}),
                  setUiState: function (R) {
                    return d.setUiState(R, !1);
                  },
                }),
                b)
              : b.search();
          }),
          (u.searchWithoutTriggeringOnStateChange = function () {
            return b.search();
          }),
          (u.searchForFacetValues = function (w, R, O, $) {
            var _ = u.state.setQueryParameters($);
            return b.searchForFacetValues(w, R, O, _);
          }),
          (f = b.derive(function () {
            return Rt.apply(void 0, Is(nu(g)));
          }));
        var S =
          (m = d._initialResults) === null || m === void 0
            ? void 0
            : m[this.getIndexId()];
        if (S) {
          var P = new je.SearchResults(
            new je.SearchParameters(S.state),
            S.results
          );
          (f.lastResults = P), (u.lastResults = P);
        }
        u.on("change", function (w) {
          var R = w.isPageReset;
          R && Ts(a);
        }),
          f.on("search", function () {
            d.scheduleStalledRender();
          }),
          f.on("result", function (w) {
            var R = w.results;
            d.scheduleRender(), (u.lastResults = R);
          }),
          a.forEach(function (w) {
            if (w.getRenderState) {
              var R = w.getRenderState(
                d.renderState[g.getIndexId()] || {},
                bt(d, g, v)
              );
              an({ renderState: R, instantSearchInstance: d, parent: g });
            }
          }),
          a.forEach(function (w) {
            w.init && w.init(bt(d, g, v));
          }),
          u.on("change", function (w) {
            var R = w.state,
              O = w._uiState;
            (s = Sr(a, { searchParameters: R, helper: u }, O || {})),
              d.onStateChange || d.onInternalStateChange();
          }),
          S && d.scheduleRender();
      }
    },
    render: function (l) {
      var g = this,
        m = l.instantSearchInstance;
      this.getResults() &&
        (a.forEach(function (d) {
          if (d.getRenderState) {
            var p = d.getRenderState(
              m.renderState[g.getIndexId()] || {},
              oi(m, g)
            );
            an({ renderState: p, instantSearchInstance: m, parent: g });
          }
        }),
        a.forEach(function (d) {
          d.render && d.render(oi(m, g));
        }));
    },
    dispose: function () {
      var l = this;
      a.forEach(function (g) {
        g.dispose && g.dispose({ helper: u, state: u.state, parent: l });
      }),
        (o = null),
        (c = null),
        u.removeAllListeners(),
        (u = null),
        f.detach(),
        (f = null);
    },
    getWidgetUiState: function (l) {
      return a.filter(lt).reduce(function (g, m) {
        return m.getWidgetUiState(g);
      }, ze(ze({}, l), {}, Lr({}, i, ze(ze({}, l[i]), s))));
    },
    getWidgetState: function (l) {
      return this.getWidgetUiState(l);
    },
    getWidgetSearchParameters: function (l, g) {
      var m = g.uiState;
      return wr(a, { uiState: m, initialSearchParameters: l });
    },
    refreshUiState: function () {
      s = Sr(
        a,
        { searchParameters: this.getHelper().state, helper: this.getHelper() },
        s
      );
    },
  };
};
const Hs = Wh;
function an(e) {
  var t = e.renderState,
    r = e.instantSearchInstance,
    n = e.parent,
    i = n ? n.getIndexId() : r.mainIndex.getIndexId();
  r.renderState = ze(
    ze({}, r.renderState),
    {},
    Lr({}, i, ze(ze({}, r.renderState[i]), t))
  );
}
C({ name: "Index" }),
  q(
    {
      connector: function () {
        return Hs;
      },
    },
    { $$widgetType: "ais.index" }
  ),
  fr(function (e) {
    return e("div", {}, Wr(this));
  });
const Ds = "4.49.4";
var Ch = "ais",
  Qr = function (t) {
    return function () {
      var r =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.descendantName,
        i = r.modifierName,
        a = n ? "-".concat(n) : "",
        s = i ? "--".concat(i) : "";
      return "".concat(Ch, "-").concat(t).concat(a).concat(s);
    };
  },
  Mh = Qr("Highlight");
function Ls(e) {
  var t = e.attribute,
    r = e.highlightedTagName,
    n = r === void 0 ? "mark" : r,
    i = e.hit,
    a = e.cssClasses,
    s = a === void 0 ? {} : a,
    o = dt(i._highlightResult, t),
    c = o || {},
    u = c.value,
    f = u === void 0 ? "" : u,
    h =
      Mh({ descendantName: "highlighted" }) +
      (s.highlighted ? " ".concat(s.highlighted) : "");
  return f
    .replace(
      new RegExp(ce.highlightPreTag, "g"),
      "<".concat(n, ' class="').concat(h, '">')
    )
    .replace(new RegExp(ce.highlightPostTag, "g"), "</".concat(n, ">"));
}
var Uh = Qr("ReverseHighlight");
function Ns(e) {
  var t = e.attribute,
    r = e.highlightedTagName,
    n = r === void 0 ? "mark" : r,
    i = e.hit,
    a = e.cssClasses,
    s = a === void 0 ? {} : a,
    o = dt(i._highlightResult, t),
    c = o || {},
    u = c.value,
    f = u === void 0 ? "" : u,
    h =
      Uh({ descendantName: "highlighted" }) +
      (s.highlighted ? " ".concat(s.highlighted) : ""),
    l = Na(Va(Ua(f)));
  return l
    .replace(
      new RegExp(ce.highlightPreTag, "g"),
      "<".concat(n, ' class="').concat(h, '">')
    )
    .replace(new RegExp(ce.highlightPostTag, "g"), "</".concat(n, ">"));
}
var Qh = Qr("Snippet");
function Ws(e) {
  var t = e.attribute,
    r = e.highlightedTagName,
    n = r === void 0 ? "mark" : r,
    i = e.hit,
    a = e.cssClasses,
    s = a === void 0 ? {} : a,
    o = dt(i._snippetResult, t),
    c = o || {},
    u = c.value,
    f = u === void 0 ? "" : u,
    h =
      Qh({ descendantName: "highlighted" }) +
      (s.highlighted ? " ".concat(s.highlighted) : "");
  return f
    .replace(
      new RegExp(ce.highlightPreTag, "g"),
      "<".concat(n, ' class="').concat(h, '">')
    )
    .replace(new RegExp(ce.highlightPostTag, "g"), "</".concat(n, ">"));
}
var qh = Qr("ReverseSnippet");
function Cs(e) {
  var t = e.attribute,
    r = e.highlightedTagName,
    n = r === void 0 ? "mark" : r,
    i = e.hit,
    a = e.cssClasses,
    s = a === void 0 ? {} : a,
    o = dt(i._snippetResult, t),
    c = o || {},
    u = c.value,
    f = u === void 0 ? "" : u,
    h =
      qh({ descendantName: "highlighted" }) +
      (s.highlighted ? " ".concat(s.highlighted) : ""),
    l = Na(Va(Ua(f)));
  return l
    .replace(
      new RegExp(ce.highlightPreTag, "g"),
      "<".concat(n, ' class="').concat(h, '">')
    )
    .replace(new RegExp(ce.highlightPostTag, "g"), "</".concat(n, ">"));
}
function jn(e) {
  return (
    (jn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    jn(e)
  );
}
var Vh = "_ALGOLIA";
function Bh(e) {
  if (
    !(
      (typeof document > "u" ? "undefined" : jn(document)) !== "object" ||
      typeof document.cookie != "string"
    )
  )
    for (
      var t = "".concat(e, "="), r = document.cookie.split(";"), n = 0;
      n < r.length;
      n++
    ) {
      for (var i = r[n]; i.charAt(0) === " "; ) i = i.substring(1);
      if (i.indexOf(t) === 0) return i.substring(t.length, i.length);
    }
}
function kh() {
  return Bh(Vh);
}
function Kh() {
  return kh();
}
function zh(e, t) {
  return e.toLocaleString(t);
}
function sr(e) {
  return (
    (sr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    sr(e)
  );
}
function ba(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Le(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ba(Object(r), !0).forEach(function (n) {
          Jh(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ba(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Jh(e, t, r) {
  return (
    (t = Yh(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Yh(e) {
  var t = Gh(e, "string");
  return sr(t) === "symbol" ? t : String(t);
}
function Gh(e, t) {
  if (sr(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (sr(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Zh(e) {
  var t = e.numberLocale;
  return {
    formatNumber: function (n, i) {
      return zh(Number(i(n)), t);
    },
    highlight: function (n, i) {
      try {
        var a = JSON.parse(n);
        return i(Ls(Le(Le({}, a), {}, { hit: this })));
      } catch {
        throw new Error(`
The highlight helper expects a JSON object of the format:
{ "attribute": "name", "highlightedTagName": "mark" }`);
      }
    },
    reverseHighlight: function (n, i) {
      try {
        var a = JSON.parse(n);
        return i(Ns(Le(Le({}, a), {}, { hit: this })));
      } catch {
        throw new Error(`
  The reverseHighlight helper expects a JSON object of the format:
  { "attribute": "name", "highlightedTagName": "mark" }`);
      }
    },
    snippet: function (n, i) {
      try {
        var a = JSON.parse(n);
        return i(Ws(Le(Le({}, a), {}, { hit: this })));
      } catch {
        throw new Error(`
The snippet helper expects a JSON object of the format:
{ "attribute": "name", "highlightedTagName": "mark" }`);
      }
    },
    reverseSnippet: function (n, i) {
      try {
        var a = JSON.parse(n);
        return i(Cs(Le(Le({}, a), {}, { hit: this })));
      } catch {
        throw new Error(`
  The reverseSnippet helper expects a JSON object of the format:
  { "attribute": "name", "highlightedTagName": "mark" }`);
      }
    },
    insights: function (n, i) {
      try {
        var a = JSON.parse(n),
          s = a.method,
          o = a.payload;
        return i(Ja(s, Le({ objectIDs: [this.objectID] }, o)));
      } catch {
        throw new Error(`
The insights helper expects a JSON object of the format:
{ "method": "method-name", "payload": { "eventName": "name of the event" } }`);
      }
    },
  };
}
function or(e) {
  return (
    (or =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    or(e)
  );
}
var Xh = ["configure"];
function Sa(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Pr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Sa(Object(r), !0).forEach(function (n) {
          _n(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Sa(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function _n(e, t, r) {
  return (
    (t = em(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function em(e) {
  var t = tm(e, "string");
  return or(t) === "symbol" ? t : String(t);
}
function tm(e, t) {
  if (or(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (or(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function rm(e, t) {
  if (e == null) return {};
  var r = nm(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function nm(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function wa(e) {
  e.configure;
  var t = rm(e, Xh);
  return t;
}
function im() {
  return {
    stateToRoute: function (t) {
      return Object.keys(t).reduce(function (r, n) {
        return Pr(Pr({}, r), {}, _n({}, n, wa(t[n])));
      }, {});
    },
    routeToState: function () {
      var t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Object.keys(t).reduce(function (r, n) {
        return Pr(Pr({}, r), {}, _n({}, n, wa(t[n])));
      }, {});
    },
  };
}
var am = String.prototype.replace,
  sm = /%20/g,
  sn = { RFC1738: "RFC1738", RFC3986: "RFC3986" },
  zn = {
    default: sn.RFC3986,
    formatters: {
      RFC1738: function (e) {
        return am.call(e, sm, "+");
      },
      RFC3986: function (e) {
        return String(e);
      },
    },
    RFC1738: sn.RFC1738,
    RFC3986: sn.RFC3986,
  },
  om = zn,
  on = Object.prototype.hasOwnProperty,
  Ze = Array.isArray,
  Te = (function () {
    for (var e = [], t = 0; t < 256; ++t)
      e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
    return e;
  })(),
  um = function (t) {
    for (; t.length > 1; ) {
      var r = t.pop(),
        n = r.obj[r.prop];
      if (Ze(n)) {
        for (var i = [], a = 0; a < n.length; ++a)
          typeof n[a] < "u" && i.push(n[a]);
        r.obj[r.prop] = i;
      }
    }
  },
  Ms = function (t, r) {
    for (
      var n = r && r.plainObjects ? Object.create(null) : {}, i = 0;
      i < t.length;
      ++i
    )
      typeof t[i] < "u" && (n[i] = t[i]);
    return n;
  },
  cm = function e(t, r, n) {
    if (!r) return t;
    if (typeof r != "object") {
      if (Ze(t)) t.push(r);
      else if (t && typeof t == "object")
        ((n && (n.plainObjects || n.allowPrototypes)) ||
          !on.call(Object.prototype, r)) &&
          (t[r] = !0);
      else return [t, r];
      return t;
    }
    if (!t || typeof t != "object") return [t].concat(r);
    var i = t;
    return (
      Ze(t) && !Ze(r) && (i = Ms(t, n)),
      Ze(t) && Ze(r)
        ? (r.forEach(function (a, s) {
            if (on.call(t, s)) {
              var o = t[s];
              o && typeof o == "object" && a && typeof a == "object"
                ? (t[s] = e(o, a, n))
                : t.push(a);
            } else t[s] = a;
          }),
          t)
        : Object.keys(r).reduce(function (a, s) {
            var o = r[s];
            return on.call(a, s) ? (a[s] = e(a[s], o, n)) : (a[s] = o), a;
          }, i)
    );
  },
  fm = function (t, r) {
    return Object.keys(r).reduce(function (n, i) {
      return (n[i] = r[i]), n;
    }, t);
  },
  lm = function (e, t, r) {
    var n = e.replace(/\+/g, " ");
    if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(n);
    } catch {
      return n;
    }
  },
  dm = function (t, r, n, i, a) {
    if (t.length === 0) return t;
    var s = t;
    if (
      (typeof t == "symbol"
        ? (s = Symbol.prototype.toString.call(t))
        : typeof t != "string" && (s = String(t)),
      n === "iso-8859-1")
    )
      return escape(s).replace(/%u[0-9a-f]{4}/gi, function (f) {
        return "%26%23" + parseInt(f.slice(2), 16) + "%3B";
      });
    for (var o = "", c = 0; c < s.length; ++c) {
      var u = s.charCodeAt(c);
      if (
        u === 45 ||
        u === 46 ||
        u === 95 ||
        u === 126 ||
        (u >= 48 && u <= 57) ||
        (u >= 65 && u <= 90) ||
        (u >= 97 && u <= 122) ||
        (a === om.RFC1738 && (u === 40 || u === 41))
      ) {
        o += s.charAt(c);
        continue;
      }
      if (u < 128) {
        o = o + Te[u];
        continue;
      }
      if (u < 2048) {
        o = o + (Te[192 | (u >> 6)] + Te[128 | (u & 63)]);
        continue;
      }
      if (u < 55296 || u >= 57344) {
        o =
          o +
          (Te[224 | (u >> 12)] +
            Te[128 | ((u >> 6) & 63)] +
            Te[128 | (u & 63)]);
        continue;
      }
      (c += 1),
        (u = 65536 + (((u & 1023) << 10) | (s.charCodeAt(c) & 1023))),
        (o +=
          Te[240 | (u >> 18)] +
          Te[128 | ((u >> 12) & 63)] +
          Te[128 | ((u >> 6) & 63)] +
          Te[128 | (u & 63)]);
    }
    return o;
  },
  hm = function (t) {
    for (
      var r = [{ obj: { o: t }, prop: "o" }], n = [], i = 0;
      i < r.length;
      ++i
    )
      for (
        var a = r[i], s = a.obj[a.prop], o = Object.keys(s), c = 0;
        c < o.length;
        ++c
      ) {
        var u = o[c],
          f = s[u];
        typeof f == "object" &&
          f !== null &&
          n.indexOf(f) === -1 &&
          (r.push({ obj: s, prop: u }), n.push(f));
      }
    return um(r), t;
  },
  mm = function (t) {
    return Object.prototype.toString.call(t) === "[object RegExp]";
  },
  gm = function (t) {
    return !t || typeof t != "object"
      ? !1
      : !!(
          t.constructor &&
          t.constructor.isBuffer &&
          t.constructor.isBuffer(t)
        );
  },
  pm = function (t, r) {
    return [].concat(t, r);
  },
  vm = function (t, r) {
    if (Ze(t)) {
      for (var n = [], i = 0; i < t.length; i += 1) n.push(r(t[i]));
      return n;
    }
    return r(t);
  },
  Us = {
    arrayToObject: Ms,
    assign: fm,
    combine: pm,
    compact: hm,
    decode: lm,
    encode: dm,
    isBuffer: gm,
    isRegExp: mm,
    maybeMap: vm,
    merge: cm,
  },
  xn = Us,
  Ot = zn,
  ym = Object.prototype.hasOwnProperty,
  Pa = {
    brackets: function (t) {
      return t + "[]";
    },
    comma: "comma",
    indices: function (t, r) {
      return t + "[" + r + "]";
    },
    repeat: function (t) {
      return t;
    },
  },
  Xe = Array.isArray,
  bm = String.prototype.split,
  Sm = Array.prototype.push,
  Qs = function (e, t) {
    Sm.apply(e, Xe(t) ? t : [t]);
  },
  wm = Date.prototype.toISOString,
  Ra = Ot.default,
  ne = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encoder: xn.encode,
    encodeValuesOnly: !1,
    format: Ra,
    formatter: Ot.formatters[Ra],
    indices: !1,
    serializeDate: function (t) {
      return wm.call(t);
    },
    skipNulls: !1,
    strictNullHandling: !1,
  },
  Pm = function (t) {
    return (
      typeof t == "string" ||
      typeof t == "number" ||
      typeof t == "boolean" ||
      typeof t == "symbol" ||
      typeof t == "bigint"
    );
  },
  Rm = function e(t, r, n, i, a, s, o, c, u, f, h, l, g, m) {
    var d = t;
    if (
      (typeof o == "function"
        ? (d = o(r, d))
        : d instanceof Date
        ? (d = f(d))
        : n === "comma" &&
          Xe(d) &&
          (d = xn.maybeMap(d, function (T) {
            return T instanceof Date ? f(T) : T;
          })),
      d === null)
    ) {
      if (i) return s && !g ? s(r, ne.encoder, m, "key", h) : r;
      d = "";
    }
    if (Pm(d) || xn.isBuffer(d)) {
      if (s) {
        var p = g ? r : s(r, ne.encoder, m, "key", h);
        if (n === "comma" && g) {
          for (
            var v = bm.call(String(d), ","), b = "", y = 0;
            y < v.length;
            ++y
          )
            b += (y === 0 ? "" : ",") + l(s(v[y], ne.encoder, m, "value", h));
          return [l(p) + "=" + b];
        }
        return [l(p) + "=" + l(s(d, ne.encoder, m, "value", h))];
      }
      return [l(r) + "=" + l(String(d))];
    }
    var S = [];
    if (typeof d > "u") return S;
    var P;
    if (n === "comma" && Xe(d))
      P = [{ value: d.length > 0 ? d.join(",") || null : void 0 }];
    else if (Xe(o)) P = o;
    else {
      var w = Object.keys(d);
      P = c ? w.sort(c) : w;
    }
    for (var R = 0; R < P.length; ++R) {
      var O = P[R],
        $ = typeof O == "object" && typeof O.value < "u" ? O.value : d[O];
      if (!(a && $ === null)) {
        var _ = Xe(d)
          ? typeof n == "function"
            ? n(r, O)
            : r
          : r + (u ? "." + O : "[" + O + "]");
        Qs(S, e($, _, n, i, a, s, o, c, u, f, h, l, g, m));
      }
    }
    return S;
  },
  Om = function (t) {
    if (!t) return ne;
    if (
      t.encoder !== null &&
      typeof t.encoder < "u" &&
      typeof t.encoder != "function"
    )
      throw new TypeError("Encoder has to be a function.");
    var r = t.charset || ne.charset;
    if (
      typeof t.charset < "u" &&
      t.charset !== "utf-8" &&
      t.charset !== "iso-8859-1"
    )
      throw new TypeError(
        "The charset option must be either utf-8, iso-8859-1, or undefined"
      );
    var n = Ot.default;
    if (typeof t.format < "u") {
      if (!ym.call(Ot.formatters, t.format))
        throw new TypeError("Unknown format option provided.");
      n = t.format;
    }
    var i = Ot.formatters[n],
      a = ne.filter;
    return (
      (typeof t.filter == "function" || Xe(t.filter)) && (a = t.filter),
      {
        addQueryPrefix:
          typeof t.addQueryPrefix == "boolean"
            ? t.addQueryPrefix
            : ne.addQueryPrefix,
        allowDots: typeof t.allowDots > "u" ? ne.allowDots : !!t.allowDots,
        charset: r,
        charsetSentinel:
          typeof t.charsetSentinel == "boolean"
            ? t.charsetSentinel
            : ne.charsetSentinel,
        delimiter: typeof t.delimiter > "u" ? ne.delimiter : t.delimiter,
        encode: typeof t.encode == "boolean" ? t.encode : ne.encode,
        encoder: typeof t.encoder == "function" ? t.encoder : ne.encoder,
        encodeValuesOnly:
          typeof t.encodeValuesOnly == "boolean"
            ? t.encodeValuesOnly
            : ne.encodeValuesOnly,
        filter: a,
        format: n,
        formatter: i,
        serializeDate:
          typeof t.serializeDate == "function"
            ? t.serializeDate
            : ne.serializeDate,
        skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : ne.skipNulls,
        sort: typeof t.sort == "function" ? t.sort : null,
        strictNullHandling:
          typeof t.strictNullHandling == "boolean"
            ? t.strictNullHandling
            : ne.strictNullHandling,
      }
    );
  },
  $m = function (e, t) {
    var r = e,
      n = Om(t),
      i,
      a;
    typeof n.filter == "function"
      ? ((a = n.filter), (r = a("", r)))
      : Xe(n.filter) && ((a = n.filter), (i = a));
    var s = [];
    if (typeof r != "object" || r === null) return "";
    var o;
    t && t.arrayFormat in Pa
      ? (o = t.arrayFormat)
      : t && "indices" in t
      ? (o = t.indices ? "indices" : "repeat")
      : (o = "indices");
    var c = Pa[o];
    i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
    for (var u = 0; u < i.length; ++u) {
      var f = i[u];
      (n.skipNulls && r[f] === null) ||
        Qs(
          s,
          Rm(
            r[f],
            f,
            c,
            n.strictNullHandling,
            n.skipNulls,
            n.encode ? n.encoder : null,
            n.filter,
            n.sort,
            n.allowDots,
            n.serializeDate,
            n.format,
            n.formatter,
            n.encodeValuesOnly,
            n.charset
          )
        );
    }
    var h = s.join(n.delimiter),
      l = n.addQueryPrefix === !0 ? "?" : "";
    return (
      n.charsetSentinel &&
        (n.charset === "iso-8859-1"
          ? (l += "utf8=%26%2310003%3B&")
          : (l += "utf8=%E2%9C%93&")),
      h.length > 0 ? l + h : ""
    );
  },
  ct = Us,
  In = Object.prototype.hasOwnProperty,
  Fm = Array.isArray,
  re = {
    allowDots: !1,
    allowPrototypes: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decoder: ct.decode,
    delimiter: "&",
    depth: 5,
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictNullHandling: !1,
  },
  jm = function (e) {
    return e.replace(/&#(\d+);/g, function (t, r) {
      return String.fromCharCode(parseInt(r, 10));
    });
  },
  qs = function (e, t) {
    return e && typeof e == "string" && t.comma && e.indexOf(",") > -1
      ? e.split(",")
      : e;
  },
  _m = "utf8=%26%2310003%3B",
  xm = "utf8=%E2%9C%93",
  Im = function (t, r) {
    var n = {},
      i = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
      a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
      s = i.split(r.delimiter, a),
      o = -1,
      c,
      u = r.charset;
    if (r.charsetSentinel)
      for (c = 0; c < s.length; ++c)
        s[c].indexOf("utf8=") === 0 &&
          (s[c] === xm ? (u = "utf-8") : s[c] === _m && (u = "iso-8859-1"),
          (o = c),
          (c = s.length));
    for (c = 0; c < s.length; ++c)
      if (c !== o) {
        var f = s[c],
          h = f.indexOf("]="),
          l = h === -1 ? f.indexOf("=") : h + 1,
          g,
          m;
        l === -1
          ? ((g = r.decoder(f, re.decoder, u, "key")),
            (m = r.strictNullHandling ? null : ""))
          : ((g = r.decoder(f.slice(0, l), re.decoder, u, "key")),
            (m = ct.maybeMap(qs(f.slice(l + 1), r), function (d) {
              return r.decoder(d, re.decoder, u, "value");
            }))),
          m && r.interpretNumericEntities && u === "iso-8859-1" && (m = jm(m)),
          f.indexOf("[]=") > -1 && (m = Fm(m) ? [m] : m),
          In.call(n, g) ? (n[g] = ct.combine(n[g], m)) : (n[g] = m);
      }
    return n;
  },
  Em = function (e, t, r, n) {
    for (var i = n ? t : qs(t, r), a = e.length - 1; a >= 0; --a) {
      var s,
        o = e[a];
      if (o === "[]" && r.parseArrays) s = [].concat(i);
      else {
        s = r.plainObjects ? Object.create(null) : {};
        var c =
            o.charAt(0) === "[" && o.charAt(o.length - 1) === "]"
              ? o.slice(1, -1)
              : o,
          u = parseInt(c, 10);
        !r.parseArrays && c === ""
          ? (s = { 0: i })
          : !isNaN(u) &&
            o !== c &&
            String(u) === c &&
            u >= 0 &&
            r.parseArrays &&
            u <= r.arrayLimit
          ? ((s = []), (s[u] = i))
          : c !== "__proto__" && (s[c] = i);
      }
      i = s;
    }
    return i;
  },
  Tm = function (t, r, n, i) {
    if (t) {
      var a = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
        s = /(\[[^[\]]*])/,
        o = /(\[[^[\]]*])/g,
        c = n.depth > 0 && s.exec(a),
        u = c ? a.slice(0, c.index) : a,
        f = [];
      if (u) {
        if (
          !n.plainObjects &&
          In.call(Object.prototype, u) &&
          !n.allowPrototypes
        )
          return;
        f.push(u);
      }
      for (
        var h = 0;
        n.depth > 0 && (c = o.exec(a)) !== null && h < n.depth;

      ) {
        if (
          ((h += 1),
          !n.plainObjects &&
            In.call(Object.prototype, c[1].slice(1, -1)) &&
            !n.allowPrototypes)
        )
          return;
        f.push(c[1]);
      }
      return c && f.push("[" + a.slice(c.index) + "]"), Em(f, r, n, i);
    }
  },
  Am = function (t) {
    if (!t) return re;
    if (
      t.decoder !== null &&
      t.decoder !== void 0 &&
      typeof t.decoder != "function"
    )
      throw new TypeError("Decoder has to be a function.");
    if (
      typeof t.charset < "u" &&
      t.charset !== "utf-8" &&
      t.charset !== "iso-8859-1"
    )
      throw new TypeError(
        "The charset option must be either utf-8, iso-8859-1, or undefined"
      );
    var r = typeof t.charset > "u" ? re.charset : t.charset;
    return {
      allowDots: typeof t.allowDots > "u" ? re.allowDots : !!t.allowDots,
      allowPrototypes:
        typeof t.allowPrototypes == "boolean"
          ? t.allowPrototypes
          : re.allowPrototypes,
      arrayLimit:
        typeof t.arrayLimit == "number" ? t.arrayLimit : re.arrayLimit,
      charset: r,
      charsetSentinel:
        typeof t.charsetSentinel == "boolean"
          ? t.charsetSentinel
          : re.charsetSentinel,
      comma: typeof t.comma == "boolean" ? t.comma : re.comma,
      decoder: typeof t.decoder == "function" ? t.decoder : re.decoder,
      delimiter:
        typeof t.delimiter == "string" || ct.isRegExp(t.delimiter)
          ? t.delimiter
          : re.delimiter,
      depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : re.depth,
      ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
      interpretNumericEntities:
        typeof t.interpretNumericEntities == "boolean"
          ? t.interpretNumericEntities
          : re.interpretNumericEntities,
      parameterLimit:
        typeof t.parameterLimit == "number"
          ? t.parameterLimit
          : re.parameterLimit,
      parseArrays: t.parseArrays !== !1,
      plainObjects:
        typeof t.plainObjects == "boolean" ? t.plainObjects : re.plainObjects,
      strictNullHandling:
        typeof t.strictNullHandling == "boolean"
          ? t.strictNullHandling
          : re.strictNullHandling,
    };
  },
  Hm = function (e, t) {
    var r = Am(t);
    if (e === "" || e === null || typeof e > "u")
      return r.plainObjects ? Object.create(null) : {};
    for (
      var n = typeof e == "string" ? Im(e, r) : e,
        i = r.plainObjects ? Object.create(null) : {},
        a = Object.keys(n),
        s = 0;
      s < a.length;
      ++s
    ) {
      var o = a[s],
        c = Tm(o, n[o], r, typeof e == "string");
      i = ct.merge(i, c, r);
    }
    return ct.compact(i);
  },
  Dm = $m,
  Lm = Hm,
  Nm = zn,
  Oa = { formats: Nm, parse: Lm, stringify: Dm };
function ur(e) {
  return (
    (ur =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ur(e)
  );
}
function Wm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $a(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Vs(n.key), n);
  }
}
function Cm(e, t, r) {
  return (
    t && $a(e.prototype, t),
    r && $a(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Ne(e, t, r) {
  return (
    (t = Vs(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Vs(e) {
  var t = Mm(e, "string");
  return ur(t) === "symbol" ? t : String(t);
}
function Mm(e, t) {
  if (ur(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ur(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Fa = function (t) {
    t && (window.document.title = t);
  },
  Um = (function () {
    function e(t) {
      var r = this,
        n = t.windowTitle,
        i = t.writeDelay,
        a = i === void 0 ? 400 : i,
        s = t.createURL,
        o = t.parseURL,
        c = t.getLocation;
      Wm(this, e),
        Ne(this, "windowTitle", void 0),
        Ne(this, "writeDelay", void 0),
        Ne(this, "_createURL", void 0),
        Ne(this, "parseURL", void 0),
        Ne(this, "getLocation", void 0),
        Ne(this, "writeTimer", void 0),
        Ne(this, "inPopState", !1),
        Ne(this, "isDisposed", !1),
        Ne(this, "latestAcknowledgedHistory", 0),
        (this.windowTitle = n),
        (this.writeTimer = void 0),
        (this.writeDelay = a),
        (this._createURL = s),
        (this.parseURL = o),
        (this.getLocation = c),
        We(function (u) {
          var f = u.window,
            h = r.windowTitle && r.windowTitle(r.read());
          Fa(h), (r.latestAcknowledgedHistory = f.history.length);
        });
    }
    return (
      Cm(e, [
        {
          key: "read",
          value: function () {
            return this.parseURL({
              qsModule: Oa,
              location: this.getLocation(),
            });
          },
        },
        {
          key: "write",
          value: function (r) {
            var n = this;
            We(function (i) {
              var a = i.window,
                s = n.createURL(r),
                o = n.windowTitle && n.windowTitle(r);
              n.writeTimer && clearTimeout(n.writeTimer),
                (n.writeTimer = setTimeout(function () {
                  Fa(o),
                    n.shouldWrite(s) &&
                      (a.history.pushState(r, o || "", s),
                      (n.latestAcknowledgedHistory = a.history.length)),
                    (n.inPopState = !1),
                    (n.writeTimer = void 0);
                }, n.writeDelay));
            });
          },
        },
        {
          key: "onUpdate",
          value: function (r) {
            var n = this;
            (this._onPopState = function () {
              n.writeTimer &&
                (clearTimeout(n.writeTimer), (n.writeTimer = void 0)),
                (n.inPopState = !0),
                r(n.read());
            }),
              We(function (i) {
                var a = i.window;
                a.addEventListener("popstate", n._onPopState);
              });
          },
        },
        {
          key: "createURL",
          value: function (r) {
            return this._createURL({
              qsModule: Oa,
              routeState: r,
              location: this.getLocation(),
            });
          },
        },
        {
          key: "dispose",
          value: function () {
            var r = this;
            (this.isDisposed = !0),
              We(function (n) {
                var i = n.window;
                r._onPopState &&
                  i.removeEventListener("popstate", r._onPopState);
              }),
              this.writeTimer && clearTimeout(this.writeTimer),
              this.write({});
          },
        },
        {
          key: "shouldWrite",
          value: function (r) {
            var n = this;
            return We(function (i) {
              var a = i.window,
                s = !(
                  n.isDisposed &&
                  n.latestAcknowledgedHistory !== a.history.length
                );
              return !n.inPopState && s && r !== a.location.href;
            });
          },
        },
      ]),
      e
    );
  })();
function Qm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.createURL,
    r =
      t === void 0
        ? function (f) {
            var h = f.qsModule,
              l = f.routeState,
              g = f.location,
              m = g.protocol,
              d = g.hostname,
              p = g.port,
              v = p === void 0 ? "" : p,
              b = g.pathname,
              y = g.hash,
              S = h.stringify(l),
              P = v === "" ? "" : ":".concat(v);
            return S
              ? ""
                  .concat(m, "//")
                  .concat(d)
                  .concat(P)
                  .concat(b, "?")
                  .concat(S)
                  .concat(y)
              : "".concat(m, "//").concat(d).concat(P).concat(b).concat(y);
          }
        : t,
    n = e.parseURL,
    i =
      n === void 0
        ? function (f) {
            var h = f.qsModule,
              l = f.location;
            return h.parse(l.search.slice(1), { arrayLimit: 99 });
          }
        : n,
    a = e.writeDelay,
    s = a === void 0 ? 400 : a,
    o = e.windowTitle,
    c = e.getLocation,
    u =
      c === void 0
        ? function () {
            return We(
              function (f) {
                var h = f.window;
                return h.location;
              },
              {
                fallback: function () {
                  throw new Error(
                    "You need to provide `getLocation` to the `history` router in environments where `window` does not exist."
                  );
                },
              }
            );
          }
        : c;
  return new Um({
    createURL: r,
    parseURL: i,
    writeDelay: s,
    windowTitle: o,
    getLocation: u,
  });
}
function cr(e) {
  return (
    (cr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    cr(e)
  );
}
function ja(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Rr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ja(Object(r), !0).forEach(function (n) {
          Bs(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ja(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Bs(e, t, r) {
  return (
    (t = qm(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function qm(e) {
  var t = Vm(e, "string");
  return cr(t) === "symbol" ? t : String(t);
}
function Vm(e, t) {
  if (cr(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (cr(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Bm = function () {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    r = t.router,
    n = r === void 0 ? Qm() : r,
    i = t.stateMapping,
    a = i === void 0 ? im() : i;
  return function (s) {
    var o = s.instantSearchInstance;
    function c(h) {
      var l = Object.keys(h).reduce(function (m, d) {
          return Rr(Rr({}, m), {}, Bs({}, d, h[d]));
        }, o.mainIndex.getWidgetUiState({})),
        g = a.stateToRoute(l);
      return n.createURL(g);
    }
    o._createURL = c;
    var u = void 0,
      f = o._initialUiState;
    return {
      onStateChange: function (l) {
        var g = l.uiState,
          m = a.stateToRoute(g);
        (u === void 0 || !dr(u, m)) && (n.write(m), (u = m));
      },
      subscribe: function () {
        (o._initialUiState = Rr(Rr({}, f), a.routeToState(n.read()))),
          n.onUpdate(function (l) {
            o.setUiState(a.routeToState(l));
          });
      },
      started: function () {},
      unsubscribe: function () {
        n.dispose();
      },
    };
  };
};
function ks(e, t, r) {
  var n = bt(t, t.mainIndex, t._initialUiState);
  e.forEach(function (i) {
    var a = {};
    if (i.getWidgetRenderState) {
      var s = i.getWidgetRenderState(n);
      s && s.widgetParams && (a = s.widgetParams);
    }
    var o = Object.keys(a).filter(function (c) {
      return a[c] !== void 0;
    });
    r.widgets.push({ type: i.$$type, widgetType: i.$$widgetType, params: o }),
      i.$$type === "ais.index" && ks(i.getWidgets(), t, r);
  });
}
function km() {
  return We(
    function (e) {
      var t,
        r,
        n = e.window;
      return (
        ((t = n.navigator) === null ||
        t === void 0 ||
        (r = t.userAgent) === null ||
        r === void 0
          ? void 0
          : r.indexOf("Algolia Crawler")) > -1
      );
    },
    {
      fallback: function () {
        return !1;
      },
    }
  );
}
function Km() {
  return function (e) {
    var t = e.instantSearchInstance,
      r = { widgets: [] },
      n = document.createElement("meta"),
      i = document.querySelector("head");
    return (
      (n.name = "instantsearch:widgets"),
      {
        onStateChange: function () {},
        subscribe: function () {
          setTimeout(function () {
            var s = t.client;
            (r.ua =
              s.transporter && s.transporter.userAgent
                ? s.transporter.userAgent.value
                : s._ua),
              ks(t.mainIndex.getWidgets(), t, r),
              (n.content = JSON.stringify(r)),
              i.appendChild(n);
          }, 0);
        },
        started: function () {},
        unsubscribe: function () {
          n.remove();
        },
      }
    );
  };
}
function ft(e) {
  return (
    (ft =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ft(e)
  );
}
function _a(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function zm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _a(Object(r), !0).forEach(function (n) {
          z(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : _a(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Jm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xa(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Ks(n.key), n);
  }
}
function Ym(e, t, r) {
  return (
    t && xa(e.prototype, t),
    r && xa(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Gm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && En(e, t);
}
function En(e, t) {
  return (
    (En = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    En(e, t)
  );
}
function Zm(e) {
  var t = eg();
  return function () {
    var n = Nr(e),
      i;
    if (t) {
      var a = Nr(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return Xm(this, i);
  };
}
function Xm(e, t) {
  if (t && (ft(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return k(e);
}
function k(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function eg() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Nr(e) {
  return (
    (Nr = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Nr(e)
  );
}
function z(e, t, r) {
  return (
    (t = Ks(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Ks(e) {
  var t = tg(e, "string");
  return ft(t) === "symbol" ? t : String(t);
}
function tg(e, t) {
  if (ft(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ft(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Fe = K({ name: "instantsearch" });
function rg() {
  return "#";
}
var ng = (function (e) {
  Gm(r, e);
  var t = Zm(r);
  function r(n) {
    var i;
    Jm(this, r),
      (i = t.call(this)),
      z(k(i), "client", void 0),
      z(k(i), "indexName", void 0),
      z(k(i), "insightsClient", void 0),
      z(k(i), "onStateChange", null),
      z(k(i), "helper", void 0),
      z(k(i), "mainHelper", void 0),
      z(k(i), "mainIndex", void 0),
      z(k(i), "started", void 0),
      z(k(i), "templatesConfig", void 0),
      z(k(i), "renderState", {}),
      z(k(i), "_stalledSearchDelay", void 0),
      z(k(i), "_searchStalledTimer", void 0),
      z(k(i), "_initialUiState", void 0),
      z(k(i), "_initialResults", void 0),
      z(k(i), "_createURL", void 0),
      z(k(i), "_searchFunction", void 0),
      z(k(i), "_mainHelperSearch", void 0),
      z(k(i), "middleware", []),
      z(k(i), "sendEventToInsights", void 0),
      z(k(i), "status", "idle"),
      z(k(i), "error", void 0),
      z(
        k(i),
        "scheduleSearch",
        mt(function () {
          i.started && i.mainHelper.search();
        })
      ),
      z(
        k(i),
        "scheduleRender",
        mt(function () {
          var w =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
          i.mainHelper.hasPendingRequests() ||
            (clearTimeout(i._searchStalledTimer),
            (i._searchStalledTimer = null),
            w && ((i.status = "idle"), (i.error = void 0))),
            i.mainIndex.render({ instantSearchInstance: k(i) }),
            i.emit("render");
        })
      ),
      z(
        k(i),
        "onInternalStateChange",
        mt(function () {
          var w = i.mainIndex.getWidgetUiState({});
          i.middleware.forEach(function (R) {
            var O = R.instance;
            O.onStateChange({ uiState: w });
          });
        })
      ),
      i.setMaxListeners(100);
    var a = n.indexName,
      s = a === void 0 ? null : a,
      o = n.numberLocale,
      c = n.initialUiState,
      u = c === void 0 ? {} : c,
      f = n.routing,
      h = f === void 0 ? null : f,
      l = n.searchFunction,
      g = n.stalledSearchDelay,
      m = g === void 0 ? 200 : g,
      d = n.searchClient,
      p = d === void 0 ? null : d,
      v = n.insightsClient,
      b = v === void 0 ? null : v,
      y = n.onStateChange,
      S = y === void 0 ? null : y;
    if (s === null) throw new Error(Fe("The `indexName` option is required."));
    if (p === null)
      throw new Error(Fe("The `searchClient` option is required."));
    if (typeof p.search != "function")
      throw new Error(
        "The `searchClient` must implement a `search` method.\n\nSee: https://www.algolia.com/doc/guides/building-search-ui/going-further/backend-search/in-depth/backend-instantsearch/js/"
      );
    if (
      (typeof p.addAlgoliaAgent == "function" &&
        p.addAlgoliaAgent("instantsearch.js (".concat(Ds, ")")),
      b && typeof b != "function")
    )
      throw new Error(Fe("The `insightsClient` option should be a function."));
    if (
      ((i.client = p),
      (i.insightsClient = b),
      (i.indexName = s),
      (i.helper = null),
      (i.mainHelper = null),
      (i.mainIndex = Hs({ indexName: s })),
      (i.onStateChange = S),
      (i.started = !1),
      (i.templatesConfig = {
        helpers: Zh({ numberLocale: o }),
        compileOptions: {},
      }),
      (i._stalledSearchDelay = m),
      (i._searchStalledTimer = null),
      (i._createURL = rg),
      (i._initialUiState = u),
      (i._initialResults = null),
      l && (i._searchFunction = l),
      (i.sendEventToInsights = W),
      h)
    ) {
      var P = typeof h == "boolean" ? void 0 : h;
      i.use(Bm(P));
    }
    return km() && i.use(Km()), i;
  }
  return (
    Ym(r, [
      {
        key: "_isSearchStalled",
        get: function () {
          return this.status === "stalled";
        },
      },
      {
        key: "use",
        value: function () {
          for (
            var i = this, a = arguments.length, s = new Array(a), o = 0;
            o < a;
            o++
          )
            s[o] = arguments[o];
          var c = s.map(function (u) {
            var f = zm(
              { subscribe: W, started: W, unsubscribe: W, onStateChange: W },
              u({ instantSearchInstance: i })
            );
            return i.middleware.push({ creator: u, instance: f }), f;
          });
          return (
            this.started &&
              c.forEach(function (u) {
                u.subscribe(), u.started();
              }),
            this
          );
        },
      },
      {
        key: "unuse",
        value: function () {
          for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++)
            a[s] = arguments[s];
          return (
            this.middleware
              .filter(function (o) {
                return a.includes(o.creator);
              })
              .forEach(function (o) {
                return o.instance.unsubscribe();
              }),
            (this.middleware = this.middleware.filter(function (o) {
              return !a.includes(o.creator);
            })),
            this
          );
        },
      },
      {
        key: "EXPERIMENTAL_use",
        value: function () {
          return this.use.apply(this, arguments);
        },
      },
      {
        key: "addWidget",
        value: function (i) {
          return this.addWidgets([i]);
        },
      },
      {
        key: "addWidgets",
        value: function (i) {
          if (!Array.isArray(i))
            throw new Error(
              Fe(
                "The `addWidgets` method expects an array of widgets. Please use `addWidget`."
              )
            );
          if (
            i.some(function (a) {
              return (
                typeof a.init != "function" && typeof a.render != "function"
              );
            })
          )
            throw new Error(
              Fe(
                "The widget definition expects a `render` and/or an `init` method."
              )
            );
          return this.mainIndex.addWidgets(i), this;
        },
      },
      {
        key: "removeWidget",
        value: function (i) {
          return this.removeWidgets([i]);
        },
      },
      {
        key: "removeWidgets",
        value: function (i) {
          if (!Array.isArray(i))
            throw new Error(
              Fe(
                "The `removeWidgets` method expects an array of widgets. Please use `removeWidget`."
              )
            );
          if (
            i.some(function (a) {
              return typeof a.dispose != "function";
            })
          )
            throw new Error(
              Fe("The widget definition expects a `dispose` method.")
            );
          return this.mainIndex.removeWidgets(i), this;
        },
      },
      {
        key: "start",
        value: function () {
          var i = this;
          if (this.started)
            throw new Error(
              Fe("The `start` method has already been called once.")
            );
          var a = this.mainHelper || je(this.client, this.indexName);
          if (
            ((a.search = function () {
              return (
                (i.status = "loading"),
                i.emit("render"),
                a.searchOnlyWithDerivedHelpers()
              );
            }),
            this._searchFunction)
          ) {
            var s = {
              search: function () {
                return new Promise(W);
              },
            };
            (this._mainHelperSearch = a.search.bind(a)),
              (a.search = function () {
                var c = i.mainIndex.getHelper(),
                  u = je(s, c.state.index, c.state);
                return (
                  u.once("search", function (f) {
                    var h = f.state;
                    c.overrideStateWithoutTriggeringChangeEvent(h),
                      i._mainHelperSearch();
                  }),
                  u.on("change", function (f) {
                    var h = f.state;
                    c.setState(h);
                  }),
                  i._searchFunction(u),
                  a
                );
              });
          }
          if (
            (a.on("error", function (c) {
              var u = c.error;
              if (!(u instanceof Error)) {
                var f = u;
                u = Object.keys(f).reduce(function (h, l) {
                  return (h[l] = f[l]), h;
                }, new Error(f.message));
              }
              (u.error = u),
                (i.error = u),
                (i.status = "error"),
                i.scheduleRender(!1),
                i.emit("error", u);
            }),
            (this.mainHelper = a),
            this.middleware.forEach(function (c) {
              var u = c.instance;
              u.subscribe();
            }),
            this.mainIndex.init({
              instantSearchInstance: this,
              parent: null,
              uiState: this._initialUiState,
            }),
            this._initialResults)
          ) {
            var o = this.scheduleSearch;
            (this.scheduleSearch = mt(W)),
              mt(function () {
                i.scheduleSearch = o;
              })();
          } else
            this.mainIndex.getWidgets().length > 0 && this.scheduleSearch();
          (this.helper = this.mainIndex.getHelper()),
            (this.started = !0),
            this.middleware.forEach(function (c) {
              var u = c.instance;
              u.started();
            });
        },
      },
      {
        key: "dispose",
        value: function () {
          this.scheduleSearch.cancel(),
            this.scheduleRender.cancel(),
            clearTimeout(this._searchStalledTimer),
            this.removeWidgets(this.mainIndex.getWidgets()),
            this.mainIndex.dispose(),
            (this.started = !1),
            this.removeAllListeners(),
            this.mainHelper.removeAllListeners(),
            (this.mainHelper = null),
            (this.helper = null),
            this.middleware.forEach(function (i) {
              var a = i.instance;
              a.unsubscribe();
            });
        },
      },
      {
        key: "scheduleStalledRender",
        value: function () {
          var i = this;
          this._searchStalledTimer ||
            (this._searchStalledTimer = setTimeout(function () {
              (i.status = "stalled"), i.scheduleRender();
            }, this._stalledSearchDelay));
        },
      },
      {
        key: "setUiState",
        value: function (i) {
          var a = this,
            s =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !0;
          if (!this.mainHelper)
            throw new Error(
              Fe("The `start` method needs to be called before `setUiState`.")
            );
          this.mainIndex.refreshUiState();
          var o =
            typeof i == "function" ? i(this.mainIndex.getWidgetUiState({})) : i;
          this.onStateChange && s
            ? this.onStateChange({
                uiState: o,
                setUiState: function (u) {
                  hn(typeof u == "function" ? u(o) : u, a.mainIndex),
                    a.scheduleSearch(),
                    a.onInternalStateChange();
                },
              })
            : (hn(o, this.mainIndex),
              this.scheduleSearch(),
              this.onInternalStateChange());
        },
      },
      {
        key: "getUiState",
        value: function () {
          return (
            this.started && this.mainIndex.refreshUiState(),
            this.mainIndex.getWidgetUiState({})
          );
        },
      },
      {
        key: "createURL",
        value: function () {
          var i =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          if (!this.started)
            throw new Error(
              Fe("The `start` method needs to be called before `createURL`.")
            );
          return this._createURL(i);
        },
      },
      {
        key: "refresh",
        value: function () {
          if (!this.mainHelper)
            throw new Error(
              Fe("The `start` method needs to be called before `refresh`.")
            );
          this.mainHelper.clearCache().search();
        },
      },
    ]),
    r
  );
})(Bn);
const ig = ng;
var ag = ["page"];
function sg(e, t) {
  if (e == null) return {};
  var r = og(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function og(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Ia(e) {
  var t = e || {};
  t.page;
  var r = sg(t, ag);
  return r;
}
var un = "ais.infiniteHits";
function ug() {
  return {
    read: function (t) {
      var r = t.state,
        n = We(function (a) {
          var s = a.window;
          return s.sessionStorage;
        });
      if (!n) return null;
      try {
        var i = JSON.parse(n.getItem(un));
        return i && dr(i.state, Ia(r)) ? i.hits : null;
      } catch (a) {
        if (a instanceof SyntaxError)
          try {
            n.removeItem(un);
          } catch {}
        return null;
      }
    },
    write: function (t) {
      var r = t.state,
        n = t.hits,
        i = We(function (a) {
          var s = a.window;
          return s.sessionStorage;
        });
      if (i)
        try {
          i.setItem(un, JSON.stringify({ state: Ia(r), hits: n }));
        } catch {}
    },
  };
}
var Ie = function (t) {
  return new ig(t);
};
Ie.version = Ds;
Ie.createInfiniteHitsSessionStorageCache = lr(ug);
Ie.highlight = lr(Ls);
Ie.reverseHighlight = lr(Ns);
Ie.snippet = lr(Ws);
Ie.reverseSnippet = lr(Cs);
Ie.insights = Ja;
Ie.getInsightsAnonymousUserToken = Kh;
Object.defineProperty(Ie, "widgets", {
  get: function () {
    throw new ReferenceError(`"instantsearch.widgets" are not available from the ES build.

To import the widgets:

import { searchBox } from 'instantsearch.js/es/widgets'`);
  },
});
Object.defineProperty(Ie, "connectors", {
  get: function () {
    throw new ReferenceError(`"instantsearch.connectors" are not available from the ES build.

To import the connectors:

import { connectSearchBox } from 'instantsearch.js/es/connectors'`);
  },
});
const cg = Ie;
var fg = "4.7.2",
  zs = function (e) {
    var t;
    return Ft(
      (((t = {
        mixins: [C({ name: "InstantSearch" })],
        provide: function () {
          return { $_ais_instantSearchInstance: this.instantSearchInstance };
        },
        watch: {
          searchClient: function (r) {
            this.instantSearchInstance.helper.setClient(r).search();
          },
          indexName: function (r) {
            this.instantSearchInstance.helper.setIndex(r).search();
          },
          stalledSearchDelay: function (r) {
            this.instantSearchInstance._stalledSearchDelay = r;
          },
          routing: function () {
            throw new Error(`routing configuration can not be changed dynamically at this point.

Please open a new issue: https://github.com/algolia/instantsearch.js/discussions/new?category=ideas&labels=triage%2cLibrary%3A+Vue+InstantSearch&title=Feature%20request%3A%20dynamic%20props`);
          },
          onStateChange: function () {
            throw new Error(`onStateChange configuration can not be changed dynamically at this point.

Please open a new issue: https://github.com/algolia/instantsearch.js/discussions/new?category=ideas&labels=triage%2cLibrary%3A+Vue+InstantSearch&title=Feature%20request%3A%20dynamic%20props`);
          },
          searchFunction: function (r) {
            this.instantSearchInstance._searchFunction = r;
          },
          middlewares: {
            immediate: !0,
            handler: function (r, n) {
              var i = this;
              (n || [])
                .filter(function (a) {
                  return (r || []).indexOf(a) === -1;
                })
                .forEach(function (a) {
                  i.instantSearchInstance.unuse(a);
                }),
                (r || [])
                  .filter(function (a) {
                    return (n || []).indexOf(a) === -1;
                  })
                  .forEach(function (a) {
                    i.instantSearchInstance.use(a);
                  });
            },
          },
        },
        created: function () {
          var r = this.instantSearchInstance.client;
          typeof r.addAlgoliaAgent == "function" &&
            (r.addAlgoliaAgent("Vue (" + Xs + ")"),
            r.addAlgoliaAgent("Vue InstantSearch (" + fg + ")"));
        },
        mounted: function () {
          var r = this;
          this.$nextTick(function () {
            r.instantSearchInstance.started || r.instantSearchInstance.start();
          });
        },
      }).beforeUnmount = function () {
        this.instantSearchInstance.started &&
          this.instantSearchInstance.dispose(),
          (this.instantSearchInstance.__initialSearchResults = void 0);
      }),
      t),
      e
    );
  },
  Ea = `Vue InstantSearch: You used the prop api-key or app-id.
These have been replaced by search-client.

See more info here: https://www.algolia.com/doc/api-reference/widgets/instantsearch/vue/#widget-param-search-client`;
const _g = zs({
  name: "AisInstantSearch",
  props: {
    searchClient: { type: Object, required: !0 },
    insightsClient: { type: Function, default: void 0 },
    indexName: { type: String, required: !0 },
    routing: {
      default: void 0,
      validator: function (e) {
        return (
          !(typeof e == "boolean" || (!e.router && !e.stateMapping)) ||
          (Pt(
            "The `routing` option expects an object with `router` and/or `stateMapping`.\n\nSee https://www.algolia.com/doc/api-reference/widgets/instantsearch/vue/#widget-param-routing"
          ),
          !1)
        );
      },
    },
    stalledSearchDelay: { type: Number, default: void 0 },
    searchFunction: { type: Function, default: void 0 },
    onStateChange: { type: Function, default: void 0 },
    initialUiState: { type: Object, default: void 0 },
    apiKey: {
      type: String,
      default: void 0,
      validator: function (e) {
        return e && Pt(Ea), !1;
      },
    },
    appId: {
      type: String,
      default: void 0,
      validator: function (e) {
        return e && Pt(Ea), !1;
      },
    },
    middlewares: { type: Array, default: null },
  },
  data: function () {
    return {
      instantSearchInstance: cg({
        searchClient: this.searchClient,
        insightsClient: this.insightsClient,
        indexName: this.indexName,
        routing: this.routing,
        stalledSearchDelay: this.stalledSearchDelay,
        searchFunction: this.searchFunction,
        onStateChange: this.onStateChange,
        initialUiState: this.initialUiState,
      }),
    };
  },
  render: fr(function (e) {
    var t;
    return e(
      "div",
      {
        class:
          ((t = {}), (t[this.suit()] = !0), (t[this.suit("", "ssr")] = !1), t),
      },
      Wr(this)
    );
  }),
});
zs({
  name: "AisInstantSearchSsr",
  inject: {
    $_ais_ssrInstantSearchInstance: {
      default: function () {
        throw new Error("`createServerRootMixin` is required when using SSR.");
      },
    },
  },
  data: function () {
    return { instantSearchInstance: this.$_ais_ssrInstantSearchInstance };
  },
  render: fr(function (e) {
    var t;
    return e(
      "div",
      {
        class:
          ((t = {}), (t[this.suit()] = !0), (t[this.suit("", "ssr")] = !0), t),
      },
      Wr(this)
    );
  }),
});
q({ connector: Ic }, { $$widgetType: "ais.infiniteHits" }),
  C({ name: "InfiniteHits" });
C({ name: "Menu" }), q({ connector: Ga }, { $$widgetType: "ais.menu" }), pe();
C({ name: "MenuSelect" }),
  q({ connector: Ga }, { $$widgetType: "ais.menuSelect" }),
  pe();
xe(" See all ");
q({ connector: Gc }, { $$widgetType: "ais.numericMenu" }),
  C({ name: "NumericMenu" }),
  pe();
C({ name: "Pagination" }),
  q({ connector: cf }, { $$widgetType: "ais.pagination" }),
  pe();
C({ name: "Panel" }), yh();
C({ name: "PoweredBy" });
C({ name: "QueryRuleContext" }),
  q({ connector: Fs }, { $$widgetType: "ais.queryRuleContext" });
C({ name: "QueryRuleCustomData" }),
  q({ connector: Fs }, { $$widgetType: "ais.queryRuleCustomData" });
C({ name: "RangeInput" }),
  q({ connector: yf }, { $$widgetType: "ais.rangeInput" }),
  pe();
xe("to");
xe(" Go ");
C({ name: "RatingMenu" }),
  q({ connector: Yf }, { $$widgetType: "ais.ratingMenu" }),
  pe();
E(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", style: { display: "none" } },
  [
    E("symbol", { id: "ais-RatingMenu-starSymbol", viewBox: "0 0 24 24" }, [
      E("path", {
        d: "M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z",
      }),
    ]),
    E(
      "symbol",
      { id: "ais-RatingMenu-starEmptySymbol", viewBox: "0 0 24 24" },
      [
        E("path", {
          d: "M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z",
        }),
      ]
    ),
  ],
  -1
);
E("use", { "xlink:href": "#ais-RatingMenu-starSymbol" }, null, -1);
E("use", { "xlink:href": "#ais-RatingMenu-starEmptySymbol" }, null, -1);
xe("& Up");
const Jn = {
  name: "SearchInput",
  mixins: [C({ name: "SearchBox" })],
  props: {
    placeholder: { type: String, default: "Search here…" },
    autofocus: { type: Boolean, default: !1 },
    showLoadingIndicator: { type: Boolean, default: !1 },
    shouldShowLoadingIndicator: { type: Boolean, default: !1 },
    submitTitle: { type: String, default: "Search" },
    resetTitle: { type: String, default: "Clear" },
    value: { type: String, required: !1, default: void 0 },
    modelValue: { type: String, required: !1, default: void 0 },
  },
  emits: ["input", "update:modelValue", "blur", "focus", "reset"],
  data: function () {
    return { query: "" };
  },
  methods: {
    isFocused: function () {
      return document.activeElement === this.$refs.input;
    },
    onFormSubmit: function () {
      this.$refs.input.blur();
    },
    onFormReset: function () {
      this.$emit("input", ""),
        this.$emit("update:modelValue", ""),
        this.$emit("reset");
    },
  },
};
var lg = E(
    "path",
    {
      d: "M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z",
      fillRule: "evenodd",
    },
    null,
    -1
  ),
  dg = E(
    "path",
    {
      d: "M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z",
      fillRule: "evenodd",
    },
    null,
    -1
  ),
  hg = E(
    "g",
    { fill: "none", "fill-rule": "evenodd" },
    [
      E("g", { transform: "translate(1 1)", "stroke-width": "2" }, [
        E("circle", { "stroke-opacity": ".5", cx: "18", cy: "18", r: "18" }),
        E("path", { d: "M36 18c0-9.94-8.06-18-18-18" }, [
          E("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            from: "0 18 18",
            to: "360 18 18",
            dur: "1s",
            repeatCount: "indefinite",
          }),
        ]),
      ]),
    ],
    -1
  );
function mg(e, t, r, n, i, a) {
  return (
    J(),
    Y(
      "form",
      {
        action: "",
        role: "search",
        novalidate: "",
        class: e.suit("form"),
        onSubmit:
          t[4] ||
          (t[4] = Ir(
            function () {
              for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o];
              return a.onFormSubmit && a.onFormSubmit.apply(a, s);
            },
            ["prevent"]
          )),
        onReset:
          t[5] ||
          (t[5] = Ir(
            function () {
              for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o];
              return a.onFormReset && a.onFormReset.apply(a, s);
            },
            ["prevent"]
          )),
      },
      [
        E(
          "input",
          {
            type: "search",
            autocorrect: "off",
            autocapitalize: "off",
            autocomplete: "off",
            spellcheck: "false",
            required: "",
            maxlength: "512",
            "aria-label": "Search",
            placeholder: r.placeholder,
            autofocus: r.autofocus,
            class: e.suit("input"),
            value: r.value || r.modelValue,
            onFocus:
              t[1] ||
              (t[1] = function (s) {
                return e.$emit("focus", s);
              }),
            onBlur:
              t[2] ||
              (t[2] = function (s) {
                return e.$emit("blur", s);
              }),
            onInput:
              t[3] ||
              (t[3] = function (s) {
                e.$emit("input", s.target.value),
                  e.$emit("update:modelValue", s.target.value);
              }),
            ref: "input",
          },
          null,
          42,
          ["placeholder", "autofocus", "value"]
        ),
        E(
          "button",
          {
            type: "submit",
            title: r.submitTitle,
            class: e.suit("submit"),
            hidden: r.showLoadingIndicator && r.shouldShowLoadingIndicator,
          },
          [
            ie(e.$slots, "submit-icon", {}, function () {
              return [
                (J(),
                Y(
                  "svg",
                  {
                    role: "img",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "10",
                    height: "10",
                    viewBox: "0 0 40 40",
                    class: e.suit("submitIcon"),
                  },
                  [lg],
                  2
                )),
              ];
            }),
          ],
          10,
          ["title", "hidden"]
        ),
        E(
          "button",
          {
            type: "reset",
            title: r.resetTitle,
            class: e.suit("reset"),
            hidden:
              (!r.value && !r.modelValue) ||
              (r.showLoadingIndicator && r.shouldShowLoadingIndicator),
          },
          [
            ie(e.$slots, "reset-icon", {}, function () {
              return [
                (J(),
                Y(
                  "svg",
                  {
                    role: "img",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 20 20",
                    class: e.suit("resetIcon"),
                  },
                  [dg],
                  2
                )),
              ];
            }),
          ],
          10,
          ["title", "hidden"]
        ),
        r.showLoadingIndicator
          ? (J(),
            Y(
              "span",
              {
                key: 0,
                hidden: !r.shouldShowLoadingIndicator,
                class: e.suit("loadingIndicator"),
              },
              [
                ie(e.$slots, "loading-indicator", {}, function () {
                  return [
                    (J(),
                    Y(
                      "svg",
                      {
                        role: "img",
                        "aria-label": "Results are loading",
                        width: "16",
                        height: "16",
                        xmlns: "http://www.w3.org/2000/svg",
                        stroke: "#444",
                        viewBox: "0 0 38 38",
                        class: e.suit("loadingIcon"),
                      },
                      [hg],
                      2
                    )),
                  ];
                }),
              ],
              10,
              ["hidden"]
            ))
          : $e("", !0),
      ],
      34
    )
  );
}
Jn.render = mg;
var gg = function () {};
const Js = {
  name: "AisRefinementList",
  components: { SearchInput: Jn, AisHighlight: xs },
  mixins: [
    C({ name: "RefinementList" }),
    q({ connector: $f }, { $$widgetType: "ais.refinementList" }),
    pe(),
  ],
  props: {
    attribute: { type: String, required: !0 },
    searchable: { type: Boolean, default: void 0 },
    searchablePlaceholder: {
      type: String,
      required: !1,
      default: "Search here…",
    },
    operator: {
      default: "or",
      validator: function (e) {
        return e === "and" || e === "or";
      },
      required: !1,
    },
    limit: { type: Number, required: !1, default: void 0 },
    showMoreLimit: { type: Number, required: !1, default: void 0 },
    showMore: { type: Boolean, required: !1, default: !1 },
    sortBy: { type: [Array, Function], required: !1, default: void 0 },
    transformItems: { type: Function, required: !1, default: void 0 },
  },
  data: function () {
    return { searchForFacetValuesQuery: "" };
  },
  computed: {
    searchForFacetValues: {
      get: function () {
        return this.searchForFacetValuesQuery;
      },
      set: function (e) {
        this.state.searchForItems(e), (this.searchForFacetValuesQuery = e);
      },
    },
    toggleShowMore: function () {
      return this.state.toggleShowMore || gg;
    },
    items: function () {
      return this.state.items.map(function (e) {
        return Object.assign({}, e, {
          _highlightResult: { item: { value: e.highlighted } },
        });
      });
    },
    widgetParams: function () {
      return {
        attribute: this.attribute,
        operator: this.operator,
        limit: this.limit,
        showMore: this.showMore,
        showMoreLimit: this.showMoreLimit,
        sortBy: this.sortBy,
        escapeFacetValues: !0,
        transformItems: this.transformItems,
      };
    },
  },
  methods: {
    refine: function (e) {
      this.state.refine(e), (this.searchForFacetValuesQuery = "");
    },
  },
};
function pg(e, t, r, n, i, a) {
  var s = $t("search-input"),
    o = $t("ais-highlight");
  return e.state
    ? (J(),
      Y(
        "div",
        {
          key: 0,
          class: [e.suit(), !e.state.canRefine && e.suit("", "noRefinement")],
        },
        [
          ie(
            e.$slots,
            "default",
            {
              items: a.items,
              refine: a.refine,
              searchForItems: e.state.searchForItems,
              searchForItemsQuery: i.searchForFacetValuesQuery,
              toggleShowMore: a.toggleShowMore,
              canToggleShowMore: e.state.canToggleShowMore,
              isShowingMore: e.state.isShowingMore,
              createURL: e.state.createURL,
              isFromSearch: e.state.isFromSearch,
              canRefine: e.state.canRefine,
              sendEvent: e.state.sendEvent,
            },
            function () {
              var c;
              return [
                r.searchable
                  ? (J(),
                    Y(
                      "div",
                      { key: 0, class: e.suit("searchBox") },
                      [
                        E(
                          s,
                          {
                            modelValue: a.searchForFacetValues,
                            "onUpdate:modelValue":
                              t[1] ||
                              (t[1] = function (u) {
                                return (a.searchForFacetValues = u);
                              }),
                            placeholder: r.searchablePlaceholder,
                            "class-names": e.classNames,
                          },
                          null,
                          8,
                          ["modelValue", "placeholder", "class-names"]
                        ),
                      ],
                      2
                    ))
                  : $e("", !0),
                e.state.isFromSearch && a.items.length === 0
                  ? ie(
                      e.$slots,
                      "noResults",
                      { key: 1, query: a.searchForFacetValues },
                      function () {
                        return [
                          E(
                            "div",
                            { class: e.suit("noResults") },
                            "No results.",
                            2
                          ),
                        ];
                      }
                    )
                  : $e("", !0),
                E(
                  "ul",
                  { class: e.suit("list") },
                  [
                    (J(!0),
                    Y(
                      Tn,
                      null,
                      An(a.items, function (u) {
                        return (
                          J(),
                          Y(
                            "li",
                            {
                              class: [
                                e.suit("item"),
                                u.isRefined && e.suit("item", "selected"),
                              ],
                              key: u.value,
                            },
                            [
                              ie(
                                e.$slots,
                                "item",
                                {
                                  item: u,
                                  refine: a.refine,
                                  createURL: e.state.createURL,
                                },
                                function () {
                                  return [
                                    E(
                                      "label",
                                      { class: e.suit("label") },
                                      [
                                        E(
                                          "input",
                                          {
                                            class: e.suit("checkbox"),
                                            type: "checkbox",
                                            value: u.value,
                                            checked: u.isRefined,
                                            onChange: function (f) {
                                              return a.refine(u.value);
                                            },
                                          },
                                          null,
                                          42,
                                          ["value", "checked", "onChange"]
                                        ),
                                        r.searchable
                                          ? (J(),
                                            Y(
                                              "span",
                                              {
                                                key: 0,
                                                class: e.suit("labelText"),
                                              },
                                              [
                                                E(
                                                  o,
                                                  { attribute: "item", hit: u },
                                                  null,
                                                  8,
                                                  ["hit"]
                                                ),
                                              ],
                                              2
                                            ))
                                          : (J(),
                                            Y(
                                              "span",
                                              {
                                                key: 1,
                                                class: e.suit("labelText"),
                                              },
                                              Ae(u.label),
                                              3
                                            )),
                                        E(
                                          "span",
                                          { class: e.suit("count") },
                                          Ae(u.count),
                                          3
                                        ),
                                      ],
                                      2
                                    ),
                                  ];
                                }
                              ),
                            ],
                            2
                          )
                        );
                      }),
                      128
                    )),
                  ],
                  2
                ),
                r.showMore
                  ? (J(),
                    Y(
                      "button",
                      {
                        key: 2,
                        class: [
                          e.suit("showMore"),
                          ((c = {}),
                          (c[e.suit("showMore", "disabled")] =
                            !e.state.canToggleShowMore),
                          c),
                        ],
                        onClick:
                          t[2] ||
                          (t[2] = function () {
                            for (var u = [], f = arguments.length; f--; )
                              u[f] = arguments[f];
                            return (
                              a.toggleShowMore && a.toggleShowMore.apply(a, u)
                            );
                          }),
                        disabled: !e.state.canToggleShowMore,
                      },
                      [
                        ie(
                          e.$slots,
                          "showMoreLabel",
                          { isShowingMore: e.state.isShowingMore },
                          function () {
                            return [
                              xe(
                                " Show " +
                                  Ae(e.state.isShowingMore ? "less" : "more"),
                                1
                              ),
                            ];
                          }
                        ),
                      ],
                      10,
                      ["disabled"]
                    ))
                  : $e("", !0),
              ];
            }
          ),
        ],
        2
      ))
    : $e("", !0);
}
Js.render = pg;
var Or;
const vg =
  (((Or = {
    name: "AisStateResults",
    mixins: [q({ connector: !0 }), C({ name: "StateResults" })],
    props: { catchError: { type: Boolean, default: !1 } },
    data: function () {
      var e = this;
      return {
        renderFn: function () {
          var t = e.instantSearchInstance,
            r = t.status,
            n = t.error,
            i = e.getParentIndex().getResults(),
            a = e.getParentIndex().getHelper(),
            s = a ? a.state : null;
          e.state = { results: i, state: s, status: r, error: n };
        },
      };
    },
    created: function () {
      this.instantSearchInstance.addListener("render", this.renderFn),
        this.renderFn();
    },
  }).beforeUnmount = function () {
    this.widget &&
      (this.instantSearchInstance.removeListener("render", this.renderFn),
      this.errorFn &&
        this.instantSearchInstance.removeListener("error", this.errorFn));
  }),
  (Or.watch = {
    catchError: {
      immediate: !0,
      handler: function (e) {
        e
          ? ((this.errorFn = function () {}),
            this.instantSearchInstance.addListener("error", this.errorFn))
          : this.errorFn &&
            (this.instantSearchInstance.removeListener("error", this.errorFn),
            (this.errorFn = void 0));
      },
    },
  }),
  (Or.computed = {
    stateResults: function () {
      var e = this.state,
        t = e.results,
        r = e.state,
        n = e.status,
        i = e.error;
      return Ft({}, t, { results: t, state: r, status: n, error: i });
    },
  }),
  Or);
var yg = E(
    "p",
    null,
    " Use this component to have a different layout based on a certain state. ",
    -1
  ),
  bg = E(
    "p",
    null,
    "Fill in the slot, and get access to the following things:",
    -1
  );
function Sg(e, t, r, n, i, a) {
  return e.state && e.state.state && e.state.results
    ? (J(),
      Y(
        "div",
        { key: 0, class: e.suit() },
        [
          ie(e.$slots, "default", a.stateResults, function () {
            return [
              yg,
              bg,
              E("pre", null, "results: " + Ae(Object.keys(e.state.results)), 1),
              E("pre", null, "state: " + Ae(Object.keys(e.state.state)), 1),
              E("pre", null, "status: " + Ae(e.state.status), 1),
              E("pre", null, "error: " + Ae(e.state.error), 1),
            ];
          }),
        ],
        2
      ))
    : $e("", !0);
}
vg.render = Sg;
const wg = {
  name: "AisSearchBox",
  mixins: [
    q({ connector: Tf }, { $$widgetType: "ais.searchBox" }),
    C({ name: "SearchBox" }),
  ],
  components: { SearchInput: Jn },
  props: {
    placeholder: { type: String, default: "Search here…" },
    autofocus: { type: Boolean, default: !1 },
    showLoadingIndicator: { type: Boolean, default: !1 },
    submitTitle: { type: String, default: "Search" },
    resetTitle: { type: String, default: "Clear" },
    value: { type: String, default: void 0 },
    modelValue: { type: String, default: void 0 },
    queryHook: { type: Function, default: void 0 },
  },
  data: function () {
    return { localValue: "", isVue2: no, isVue3: io };
  },
  computed: {
    widgetParams: function () {
      return { queryHook: this.queryHook };
    },
    isControlled: function () {
      return this.value !== void 0 || this.modelValue !== void 0;
    },
    model: function () {
      return this.value || this.modelValue;
    },
    currentRefinement: {
      get: function () {
        this.isControlled &&
          this.model !== this.localValue &&
          ((this.localValue = this.model),
          this.$emit("input", this.model),
          this.$emit("update:modelValue", this.model),
          this.state.refine(this.model));
        var e = this.$refs.searchInput;
        return e && e.isFocused()
          ? this.localValue
          : this.model || this.state.query || "";
      },
      set: function (e) {
        (this.localValue = e),
          this.state.refine(e),
          this.isControlled &&
            (this.$emit("input", e), this.$emit("update:modelValue", e));
      },
    },
  },
};
function Pg(e, t, r, n, i, a) {
  var s = $t("search-input");
  return e.state
    ? (J(),
      Y(
        "div",
        { key: 0, class: e.suit() },
        [
          ie(
            e.$slots,
            "default",
            {
              currentRefinement: a.currentRefinement,
              isSearchStalled: e.state.isSearchStalled,
              refine: e.state.refine,
            },
            function () {
              return [
                E(
                  s,
                  {
                    onFocus:
                      t[1] ||
                      (t[1] = function (o) {
                        return e.$emit("focus", o);
                      }),
                    onBlur:
                      t[2] ||
                      (t[2] = function (o) {
                        return e.$emit("blur", o);
                      }),
                    onReset:
                      t[3] ||
                      (t[3] = function (o) {
                        return e.$emit("reset");
                      }),
                    placeholder: r.placeholder,
                    autofocus: r.autofocus,
                    "show-loading-indicator": r.showLoadingIndicator,
                    "should-show-loading-indicator": e.state.isSearchStalled,
                    "submit-title": r.submitTitle,
                    "reset-title": r.resetTitle,
                    "class-names": e.classNames,
                    modelValue: a.currentRefinement,
                    "onUpdate:modelValue":
                      t[4] ||
                      (t[4] = function (o) {
                        return (a.currentRefinement = o);
                      }),
                    ref: "searchInput",
                  },
                  eo(
                    {
                      default: vt(function () {
                        return [
                          i.isVue2
                            ? ie(e.$slots, "loading-indicator", {
                                key: 0,
                                slot: "loading-indicator",
                              })
                            : $e("", !0),
                          i.isVue2
                            ? ie(e.$slots, "submit-icon", {
                                key: 1,
                                slot: "submit-icon",
                              })
                            : $e("", !0),
                          i.isVue2
                            ? ie(e.$slots, "reset-icon", {
                                key: 2,
                                slot: "reset-icon",
                              })
                            : $e("", !0),
                        ];
                      }),
                      _: 2,
                    },
                    [
                      i.isVue3
                        ? {
                            name: "loading-indicator",
                            fn: vt(function () {
                              return [ie(e.$slots, "loading-indicator")];
                            }),
                          }
                        : void 0,
                      i.isVue3
                        ? {
                            name: "submit-icon",
                            fn: vt(function () {
                              return [ie(e.$slots, "submit-icon")];
                            }),
                          }
                        : void 0,
                      i.isVue3
                        ? {
                            name: "reset-icon",
                            fn: vt(function () {
                              return [ie(e.$slots, "reset-icon")];
                            }),
                          }
                        : void 0,
                    ]
                  ),
                  1032,
                  [
                    "placeholder",
                    "autofocus",
                    "show-loading-indicator",
                    "should-show-loading-indicator",
                    "submit-title",
                    "reset-title",
                    "class-names",
                    "modelValue",
                  ]
                ),
              ];
            }
          ),
        ],
        2
      ))
    : $e("", !0);
}
wg.render = Pg;
C({ name: "Snippet" });
C({ name: "SortBy" }),
  q({ connector: Nf }, { $$widgetType: "ais.sortBy" }),
  pe();
q({ connector: rl }, { $$widgetType: "ais.stats" }), C({ name: "Stats" });
C({ name: "ToggleRefinement" }),
  q({ connector: ol }, { $$widgetType: "ais.toggleRefinement" }),
  pe();
q({ connector: sh }, { $$widgetType: "ais.voiceSearch" }),
  C({ name: "VoiceSearch" });
E("line", { x1: "1", y1: "1", x2: "23", y2: "23" }, null, -1);
E(
  "path",
  { d: "M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" },
  null,
  -1
);
E(
  "path",
  { d: "M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23" },
  null,
  -1
);
E("line", { x1: "12", y1: "19", x2: "12", y2: "23" }, null, -1);
E("line", { x1: "8", y1: "23", x2: "16", y2: "23" }, null, -1);
E("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }, null, -1);
E("line", { x1: "12", y1: "19", x2: "12", y2: "23" }, null, -1);
E("line", { x1: "8", y1: "23", x2: "16", y2: "23" }, null, -1);
C({ name: "RelevantSort" }),
  q({ connector: lh }, { $$widgetType: "ais.relevantSort" });
const Rg = {
  name: "AisDynamicWidgets",
  mixins: [
    q({ connector: ph }, { $$widgetType: "ais.dynamicWidgets" }),
    C({ name: "DynamicWidgets" }),
  ],
  props: {
    transformItems: { type: Function, default: void 0 },
    facets: { type: Array, default: void 0 },
    maxValuesPerFacet: { type: Number, default: void 0 },
  },
  render: fr(function (e) {
    var t = this,
      r = new Map();
    if (
      ((Wr(this) || []).forEach(function (i) {
        var a = (function s(o) {
          var c,
            u = o.props;
          if (u) {
            if (u.attribute) return u.attribute;
            if (Array.isArray(u.attributes)) return u.attributes[0];
          }
          if (
            ((c = o.children && o.children.default && o.children.default()),
            Array.isArray(c))
          )
            return c.reduce(function (f, h) {
              return f || s(h);
            }, void 0);
        })(i);
        a && r.set(a, e("div", { key: a, class: [t.suit("widget")] }, [i]));
      }),
      !this.state)
    ) {
      var n = [];
      return (
        r.forEach(function (i) {
          return n.push(i);
        }),
        e("div", Ft({ class: [this.suit()] }, { attrs: { hidden: !0 } }), n)
      );
    }
    return e(
      "div",
      { class: [this.suit()] },
      this.state.attributesToRender.map(function (i) {
        return r.get(i);
      })
    );
  }),
  computed: {
    widgetParams: function () {
      return {
        transformItems: this.transformItems,
        facets: this.facets,
        maxValuesPerFacet: this.maxValuesPerFacet,
        widgets: [],
      };
    },
  },
};
Object.assign({}, Rg, {
  name: "AisExperimentalDynamicWidgets",
  mounted: function () {
    Pt("Use AisDynamicWidgets instead of AisExperimentalDynamicWidgets.");
  },
});
const xg = Ye({
    name: "FilterSidebar",
    components: { AisRefinementList: Js },
    data() {
      return { activeFilter: "seeFilters" };
    },
    computed: {},
    methods: {},
  }),
  Ig = Ye({
    name: "Sidebar",
    props: { title: { type: String, required: !0 } },
    computed: {
      hasFooter() {
        return !!this.$slots.footer;
      },
    },
  });
const Eg = Ye({
  props: {
    title: { type: String, required: !0 },
    image: { type: String, default: "" },
    author: { type: String, default: "" },
    link: { type: String, default: "" },
  },
  computed: {
    pubId() {
      return this.image ? this.image.replace(/^\/+/, "") : "";
    },
  },
});
const Tg = Ye({
  props: {
    title: { type: String, required: !0 },
    image: { type: String, default: "" },
    author: { type: String, default: "" },
    link: { type: String, default: "" },
  },
  computed: {
    pubId() {
      return this.image ? this.image.replace(/^\/+/, "") : "";
    },
  },
});
const Ag = Ye({
  props: {
    title: { type: String, required: !0, default: "" },
    image: { type: String, default: "" },
    author: { type: String, default: "" },
    link: { type: String, default: "" },
    preamble: { type: String, default: "" },
  },
  computed: {
    pubId() {
      return this.image ? this.image.replace(/^\/+/, "") : "";
    },
  },
});
const Hg = Ye({
  name: "SearchResults",
  props: {
    hits: { type: Array, default: () => [] },
    query: { type: String, default: "" },
  },
});
export {
  jg as A,
  $g as _,
  Fg as a,
  Ig as b,
  xg as c,
  Eg as d,
  Tg as e,
  Ag as f,
  Hg as g,
  bh as h,
  _g as i,
  Js as j,
  wg as k,
  vg as l,
  Qm as m,
};
