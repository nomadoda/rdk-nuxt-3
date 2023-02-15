/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [45],
  [
    ,
    function (t, e, n) {
      "use strict";
      n.d(e, "d", function () {
        return v;
      }),
        n.d(e, "l", function () {
          return m;
        }),
        n.d(e, "n", function () {
          return y;
        }),
        n.d(e, "m", function () {
          return w;
        }),
        n.d(e, "f", function () {
          return x;
        }),
        n.d(e, "b", function () {
          return S;
        }),
        n.d(e, "s", function () {
          return k;
        }),
        n.d(e, "h", function () {
          return P;
        }),
        n.d(e, "i", function () {
          return O;
        }),
        n.d(e, "e", function () {
          return C;
        }),
        n.d(e, "r", function () {
          return _;
        }),
        n.d(e, "k", function () {
          return j;
        }),
        n.d(e, "t", function () {
          return D;
        }),
        n.d(e, "o", function () {
          return T;
        }),
        n.d(e, "q", function () {
          return A;
        }),
        n.d(e, "g", function () {
          return L;
        }),
        n.d(e, "c", function () {
          return M;
        }),
        n.d(e, "j", function () {
          return I;
        }),
        n.d(e, "p", function () {
          return z;
        }),
        n.d(e, "a", function () {
          return H;
        }),
        n.d(e, "v", function () {
          return X;
        }),
        n.d(e, "u", function () {
          return V;
        });
      var r = n(0),
        o = n(5);
      function l(t, e, n, r, o, l, c) {
        try {
          var h = t[l](c),
            d = h.value;
        } catch (t) {
          return void n(t);
        }
        h.done ? e(d) : Promise.resolve(d).then(r, o);
      }
      function c(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var c = t.apply(e, n);
            function h(t) {
              l(c, r, o, h, d, "next", t);
            }
            function d(t) {
              l(c, r, o, h, d, "throw", t);
            }
            h(void 0);
          });
        };
      }
      function h(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function d(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? h(Object(source), !0).forEach(function (e) {
                f(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : h(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      function f(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (input, t) {
              if ("object" != typeof input || null === input) return input;
              var e = input[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(input, t || "default");
                if ("object" != typeof n) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(input);
            })(t, "string");
            return "symbol" == typeof e ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function v(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return function () {
          var n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e;
          return void 0 === t[n] && (t[n] = 0), t[n]++;
        };
      }
      function m(t) {
        r.a.config.errorHandler && r.a.config.errorHandler(t);
      }
      function y(t) {
        return t.then((t) => t.default || t);
      }
      function w(t) {
        return (
          t.$options &&
          "function" == typeof t.$options.fetch &&
          !t.$options.fetch.length
        );
      }
      function x(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = t.$children || [];
        for (var r of n) r.$fetch ? e.push(r) : r.$children && x(r, e);
        return e;
      }
      function S(t, e) {
        if (e || !t.options.__hasNuxtData) {
          var n =
            t.options._originDataFn ||
            t.options.data ||
            function () {
              return {};
            };
          (t.options._originDataFn = n),
            (t.options.data = function () {
              var data = n.call(this, this);
              return (
                this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]),
                d(d({}, data), e)
              );
            }),
            (t.options.__hasNuxtData = !0),
            t._Ctor &&
              t._Ctor.options &&
              (t._Ctor.options.data = t.options.data);
        }
      }
      function k(t) {
        return (
          (t.options && t._Ctor === t) ||
            (t.options
              ? ((t._Ctor = t), (t.extendOptions = t.options))
              : ((t = r.a.extend(t))._Ctor = t),
            !t.options.name &&
              t.options.__file &&
              (t.options.name = t.options.__file)),
          t
        );
      }
      function P(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "components";
        return Array.prototype.concat.apply(
          [],
          t.matched.map((t, r) =>
            Object.keys(t[n]).map((o) => (e && e.push(r), t[n][o]))
          )
        );
      }
      function O(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return P(t, e, "instances");
      }
      function C(t, e) {
        return Array.prototype.concat.apply(
          [],
          t.matched.map((t, n) =>
            Object.keys(t.components).reduce(
              (r, o) => (
                t.components[o]
                  ? r.push(e(t.components[o], t.instances[o], t, o, n))
                  : delete t.components[o],
                r
              ),
              []
            )
          )
        );
      }
      function _(t, e) {
        return Promise.all(
          C(
            t,
            (function () {
              var t = c(function* (t, n, r, o) {
                if ("function" == typeof t && !t.options)
                  try {
                    t = yield t();
                  } catch (t) {
                    if (
                      t &&
                      "ChunkLoadError" === t.name &&
                      "undefined" != typeof window &&
                      window.sessionStorage
                    ) {
                      var l = Date.now(),
                        c = parseInt(
                          window.sessionStorage.getItem("nuxt-reload")
                        );
                      (!c || c + 6e4 < l) &&
                        (window.sessionStorage.setItem("nuxt-reload", l),
                        window.location.reload(!0));
                    }
                    throw t;
                  }
                return (
                  (r.components[o] = t = k(t)),
                  "function" == typeof e ? e(t, n, r, o) : t
                );
              });
              return function (e, n, r, o) {
                return t.apply(this, arguments);
              };
            })()
          )
        );
      }
      function j(t) {
        return E.apply(this, arguments);
      }
      function E() {
        return (E = c(function* (t) {
          if (t)
            return (
              yield _(t),
              d(
                d({}, t),
                {},
                {
                  meta: P(t).map((e, n) =>
                    d(d({}, e.options.meta), (t.matched[n] || {}).meta)
                  ),
                }
              )
            );
        })).apply(this, arguments);
      }
      function D(t, e) {
        return $.apply(this, arguments);
      }
      function $() {
        return ($ = c(function* (t, e) {
          t.context ||
            ((t.context = {
              isStatic: !0,
              isDev: !1,
              isHMR: !1,
              app: t,
              payload: e.payload,
              error: e.error,
              base: t.router.options.base,
              env: {
                baseUrl: "http://localhost:3000",
                CLOUDINARY_BASE_URL:
                  "https://res.cloudinary.com/klandestino-ab",
              },
            }),
            e.ssrContext && (t.context.ssrContext = e.ssrContext),
            (t.context.redirect = (e, path, n) => {
              if (e) {
                t.context._redirected = !0;
                var r = typeof path;
                if (
                  ("number" == typeof e ||
                    ("undefined" !== r && "object" !== r) ||
                    ((n = path || {}), (r = typeof (path = e)), (e = 302)),
                  "object" === r &&
                    (path = t.router.resolve(path).route.fullPath),
                  !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))
                )
                  throw (
                    ((path = Object(o.f)(path, n)),
                    window.location.replace(path),
                    new Error("ERR_REDIRECT"))
                  );
                t.context.next({ path: path, query: n, status: e });
              }
            }),
            (t.context.nuxtState = window.__NUXT__));
          var [n, r] = yield Promise.all([j(e.route), j(e.from)]);
          e.route && (t.context.route = n),
            e.from && (t.context.from = r),
            (t.context.next = e.next),
            (t.context._redirected = !1),
            (t.context._errored = !1),
            (t.context.isHMR = !1),
            (t.context.params = t.context.route.params || {}),
            (t.context.query = t.context.route.query || {});
        })).apply(this, arguments);
      }
      function T(t, e) {
        return !t.length || e._redirected || e._errored
          ? Promise.resolve()
          : A(t[0], e).then(() => T(t.slice(1), e));
      }
      function A(t, e) {
        var n;
        return (n =
          2 === t.length
            ? new Promise((n) => {
                t(e, function (t, data) {
                  t && e.error(t), n((data = data || {}));
                });
              })
            : t(e)) &&
          n instanceof Promise &&
          "function" == typeof n.then
          ? n
          : Promise.resolve(n);
      }
      function L(base, t) {
        if ("hash" === t) return window.location.hash.replace(/^#\//, "");
        base = decodeURI(base).slice(0, -1);
        var path = decodeURI(window.location.pathname);
        base && path.startsWith(base) && (path = path.slice(base.length));
        var e = (path || "/") + window.location.search + window.location.hash;
        return Object(o.d)(e);
      }
      function M(t, e) {
        return (function (t, e) {
          for (var n = new Array(t.length), i = 0; i < t.length; i++)
            "object" == typeof t[i] &&
              (n[i] = new RegExp("^(?:" + t[i].pattern + ")$", W(e)));
          return function (e, r) {
            for (
              var path = "",
                data = e || {},
                o = (r || {}).pretty ? N : encodeURIComponent,
                l = 0;
              l < t.length;
              l++
            ) {
              var c = t[l];
              if ("string" != typeof c) {
                var h = data[c.name || "pathMatch"],
                  d = void 0;
                if (null == h) {
                  if (c.optional) {
                    c.partial && (path += c.prefix);
                    continue;
                  }
                  throw new TypeError(
                    'Expected "' + c.name + '" to be defined'
                  );
                }
                if (Array.isArray(h)) {
                  if (!c.repeat)
                    throw new TypeError(
                      'Expected "' +
                        c.name +
                        '" to not repeat, but received `' +
                        JSON.stringify(h) +
                        "`"
                    );
                  if (0 === h.length) {
                    if (c.optional) continue;
                    throw new TypeError(
                      'Expected "' + c.name + '" to not be empty'
                    );
                  }
                  for (var f = 0; f < h.length; f++) {
                    if (((d = o(h[f])), !n[l].test(d)))
                      throw new TypeError(
                        'Expected all "' +
                          c.name +
                          '" to match "' +
                          c.pattern +
                          '", but received `' +
                          JSON.stringify(d) +
                          "`"
                      );
                    path += (0 === f ? c.prefix : c.delimiter) + d;
                  }
                } else {
                  if (((d = c.asterisk ? U(h) : o(h)), !n[l].test(d)))
                    throw new TypeError(
                      'Expected "' +
                        c.name +
                        '" to match "' +
                        c.pattern +
                        '", but received "' +
                        d +
                        '"'
                    );
                  path += c.prefix + d;
                }
              } else path += c;
            }
            return path;
          };
        })(
          (function (t, e) {
            var n,
              r = [],
              o = 0,
              l = 0,
              path = "",
              c = (e && e.delimiter) || "/";
            for (; null != (n = R.exec(t)); ) {
              var h = n[0],
                d = n[1],
                f = n.index;
              if (((path += t.slice(l, f)), (l = f + h.length), d))
                path += d[1];
              else {
                var v = t[l],
                  m = n[2],
                  y = n[3],
                  w = n[4],
                  x = n[5],
                  S = n[6],
                  k = n[7];
                path && (r.push(path), (path = ""));
                var P = null != m && null != v && v !== m,
                  O = "+" === S || "*" === S,
                  C = "?" === S || "*" === S,
                  _ = n[2] || c,
                  pattern = w || x;
                r.push({
                  name: y || o++,
                  prefix: m || "",
                  delimiter: _,
                  optional: C,
                  repeat: O,
                  partial: P,
                  asterisk: Boolean(k),
                  pattern: pattern
                    ? F(pattern)
                    : k
                    ? ".*"
                    : "[^" + B(_) + "]+?",
                });
              }
            }
            l < t.length && (path += t.substr(l));
            path && r.push(path);
            return r;
          })(t, e),
          e
        );
      }
      function I(t, e) {
        var n = {},
          r = d(d({}, t), e);
        for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0);
        return n;
      }
      function z(t) {
        var e;
        if (t.message || "string" == typeof t) e = t.message || t;
        else
          try {
            e = JSON.stringify(t, null, 2);
          } catch (n) {
            e = "[".concat(t.constructor.name, "]");
          }
        return d(
          d({}, t),
          {},
          {
            message: e,
            statusCode:
              t.statusCode ||
              t.status ||
              (t.response && t.response.status) ||
              500,
          }
        );
      }
      (window.onNuxtReadyCbs = []),
        (window.onNuxtReady = (t) => {
          window.onNuxtReadyCbs.push(t);
        });
      var R = new RegExp(
        [
          "(\\\\.)",
          "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
        ].join("|"),
        "g"
      );
      function N(t, e) {
        var n = e ? /[?#]/g : /[/?#]/g;
        return encodeURI(t).replace(
          n,
          (t) => "%" + t.charCodeAt(0).toString(16).toUpperCase()
        );
      }
      function U(t) {
        return N(t, !0);
      }
      function B(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      }
      function F(t) {
        return t.replace(/([=!:$/()])/g, "\\$1");
      }
      function W(t) {
        return t && t.sensitive ? "" : "i";
      }
      function H(t, e, n) {
        t.$options[e] || (t.$options[e] = []),
          t.$options[e].includes(n) || t.$options[e].push(n);
      }
      var X = o.c;
      o.h, o.b;
      function V(t) {
        try {
          window.history.scrollRestoration = t;
        } catch (t) {}
      }
    },
    ,
    function (t, e, n) {
      "use strict";
      t.exports = function (t) {
        var e = [];
        return (
          (e.toString = function () {
            return this.map(function (e) {
              var content = t(e);
              return e[2]
                ? "@media ".concat(e[2], " {").concat(content, "}")
                : content;
            }).join("");
          }),
          (e.i = function (t, n, r) {
            "string" == typeof t && (t = [[null, t, ""]]);
            var o = {};
            if (r)
              for (var i = 0; i < this.length; i++) {
                var l = this[i][0];
                null != l && (o[l] = !0);
              }
            for (var c = 0; c < t.length; c++) {
              var h = [].concat(t[c]);
              (r && o[h[0]]) ||
                (n &&
                  (h[2]
                    ? (h[2] = "".concat(n, " and ").concat(h[2]))
                    : (h[2] = n)),
                e.push(h));
            }
          }),
          e
        );
      };
    },
    function (t, e, n) {
      "use strict";
      function r(t, e) {
        for (var n = [], r = {}, i = 0; i < e.length; i++) {
          var o = e[i],
            l = o[0],
            c = { id: t + ":" + i, css: o[1], media: o[2], sourceMap: o[3] };
          r[l] ? r[l].parts.push(c) : n.push((r[l] = { id: l, parts: [c] }));
        }
        return n;
      }
      n.r(e),
        n.d(e, "default", function () {
          return w;
        });
      var o = "undefined" != typeof document;
      if ("undefined" != typeof DEBUG && DEBUG && !o)
        throw new Error(
          "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
        );
      var l = {},
        head = o && (document.head || document.getElementsByTagName("head")[0]),
        c = null,
        h = 0,
        d = !1,
        f = function () {},
        v = null,
        m = "data-vue-ssr-id",
        y =
          "undefined" != typeof navigator &&
          /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
      function w(t, e, n, o) {
        (d = n), (v = o || {});
        var c = r(t, e);
        return (
          x(c),
          function (e) {
            for (var n = [], i = 0; i < c.length; i++) {
              var o = c[i];
              (h = l[o.id]).refs--, n.push(h);
            }
            e ? x((c = r(t, e))) : (c = []);
            for (i = 0; i < n.length; i++) {
              var h;
              if (0 === (h = n[i]).refs) {
                for (var d = 0; d < h.parts.length; d++) h.parts[d]();
                delete l[h.id];
              }
            }
          }
        );
      }
      function x(t) {
        for (var i = 0; i < t.length; i++) {
          var e = t[i],
            n = l[e.id];
          if (n) {
            n.refs++;
            for (var r = 0; r < n.parts.length; r++) n.parts[r](e.parts[r]);
            for (; r < e.parts.length; r++) n.parts.push(k(e.parts[r]));
            n.parts.length > e.parts.length &&
              (n.parts.length = e.parts.length);
          } else {
            var o = [];
            for (r = 0; r < e.parts.length; r++) o.push(k(e.parts[r]));
            l[e.id] = { id: e.id, refs: 1, parts: o };
          }
        }
      }
      function S() {
        var t = document.createElement("style");
        return (t.type = "text/css"), head.appendChild(t), t;
      }
      function k(t) {
        var e,
          n,
          r = document.querySelector("style[" + m + '~="' + t.id + '"]');
        if (r) {
          if (d) return f;
          r.parentNode.removeChild(r);
        }
        if (y) {
          var o = h++;
          (r = c || (c = S())),
            (e = C.bind(null, r, o, !1)),
            (n = C.bind(null, r, o, !0));
        } else
          (r = S()),
            (e = _.bind(null, r)),
            (n = function () {
              r.parentNode.removeChild(r);
            });
        return (
          e(t),
          function (r) {
            if (r) {
              if (
                r.css === t.css &&
                r.media === t.media &&
                r.sourceMap === t.sourceMap
              )
                return;
              e((t = r));
            } else n();
          }
        );
      }
      var P,
        O =
          ((P = []),
          function (t, e) {
            return (P[t] = e), P.filter(Boolean).join("\n");
          });
      function C(t, e, n, r) {
        var o = n ? "" : r.css;
        if (t.styleSheet) t.styleSheet.cssText = O(e, o);
        else {
          var l = document.createTextNode(o),
            c = t.childNodes;
          c[e] && t.removeChild(c[e]),
            c.length ? t.insertBefore(l, c[e]) : t.appendChild(l);
        }
      }
      function _(t, e) {
        var n = e.css,
          r = e.media,
          o = e.sourceMap;
        if (
          (r && t.setAttribute("media", r),
          v.ssrId && t.setAttribute(m, e.id),
          o &&
            ((n += "\n/*# sourceURL=" + o.sources[0] + " */"),
            (n +=
              "\n/*# sourceMappingURL=data:application/json;base64," +
              btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
              " */")),
          t.styleSheet)
        )
          t.styleSheet.cssText = n;
        else {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(n));
        }
      }
    },
    ,
    ,
    function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return cn;
      }),
        n.d(e, "a", function () {
          return $.a;
        });
      var r = {};
      n.r(r),
        n.d(r, "AboutRdk", function () {
          return B;
        }),
        n.d(r, "ActivistCard", function () {
          return F;
        }),
        n.d(r, "AdultCard", function () {
          return W;
        }),
        n.d(r, "AnimalSlider", function () {
          return H;
        }),
        n.d(r, "AnimalSliderCard", function () {
          return X;
        }),
        n.d(r, "AppFooter", function () {
          return V;
        }),
        n.d(r, "AppHeader", function () {
          return K;
        }),
        n.d(r, "AppHeaderMenu", function () {
          return G;
        }),
        n.d(r, "AppImage", function () {
          return Y;
        }),
        n.d(r, "AppLink", function () {
          return J;
        }),
        n.d(r, "CookieConsentC", function () {
          return Q;
        }),
        n.d(r, "FilterSidebar", function () {
          return Z;
        }),
        n.d(r, "ImageItem", function () {
          return tt;
        }),
        n.d(r, "InfoCard", function () {
          return et;
        }),
        n.d(r, "KlubbnyttArticle", function () {
          return nt;
        }),
        n.d(r, "LearnMoreBlock", function () {
          return it;
        }),
        n.d(r, "LearnMoreCard", function () {
          return ot;
        }),
        n.d(r, "MagazineCard", function () {
          return st;
        }),
        n.d(r, "Membership", function () {
          return at;
        }),
        n.d(r, "MetaBlock", function () {
          return lt;
        }),
        n.d(r, "MobileMenu", function () {
          return ut;
        }),
        n.d(r, "NavigationItem", function () {
          return ct;
        }),
        n.d(r, "PageArticle", function () {
          return ht;
        }),
        n.d(r, "PageCard", function () {
          return pt;
        }),
        n.d(r, "PageSearch", function () {
          return ft;
        }),
        n.d(r, "PageTitle", function () {
          return gt;
        }),
        n.d(r, "RecipeSlider", function () {
          return vt;
        }),
        n.d(r, "RecipeSliderCard", function () {
          return mt;
        }),
        n.d(r, "SearchInput", function () {
          return yt;
        }),
        n.d(r, "SearchResults", function () {
          return bt;
        }),
        n.d(r, "SearchResultsItem", function () {
          return wt;
        }),
        n.d(r, "SearchSidebar", function () {
          return xt;
        }),
        n.d(r, "Sidebar", function () {
          return St;
        }),
        n.d(r, "Slider", function () {
          return kt;
        }),
        n.d(r, "SocialHead", function () {
          return Pt;
        }),
        n.d(r, "SourceListItem", function () {
          return Ot;
        }),
        n.d(r, "TagsList", function () {
          return Ct;
        });
      var o = {};
      n.r(o),
        n.d(o, "getImage", function () {
          return Fe;
        }),
        n.d(o, "supportsAlias", function () {
          return qe;
        });
      var l = {};
      n.r(l),
        n.d(l, "getImage", function () {
          return Ke;
        });
      var c = n(0),
        h = n(70),
        d = n(26),
        f = n.n(d),
        v = n(13),
        m = n.n(v),
        y = n(27),
        w = n(5),
        x = n(1);
      "scrollRestoration" in window.history &&
        (Object(x.u)("manual"),
        window.addEventListener("beforeunload", () => {
          Object(x.u)("auto");
        }),
        window.addEventListener("load", () => {
          Object(x.u)("manual");
        }));
      function S(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function k(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? S(Object(source), !0).forEach(function (e) {
                P(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : S(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      function P(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (input, t) {
              if ("object" != typeof input || null === input) return input;
              var e = input[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(input, t || "default");
                if ("object" != typeof n) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(input);
            })(t, "string");
            return "symbol" == typeof e ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var O = () => {};
      c.a.use(y.a);
      var C = {
        mode: "history",
        base: "/",
        linkActiveClass: "nuxt-link-active",
        linkExactActiveClass: "nuxt-link-exact-active",
        scrollBehavior: function (t, e, n) {
          var r = !1,
            o = t !== e;
          n
            ? (r = n)
            : o &&
              (function (t) {
                var e = Object(x.h)(t);
                if (1 === e.length) {
                  var { options: n = {} } = e[0];
                  return !1 !== n.scrollToTop;
                }
                return e.some((t) => {
                  var { options: e } = t;
                  return e && e.scrollToTop;
                });
              })(t) &&
              (r = { x: 0, y: 0 });
          var l = window.$nuxt;
          return (
            (!o || (t.path === e.path && t.hash !== e.hash)) &&
              l.$nextTick(() => l.$emit("triggerScroll")),
            new Promise((e) => {
              l.$once("triggerScroll", () => {
                if (t.hash) {
                  var n = t.hash;
                  void 0 !== window.CSS &&
                    void 0 !== window.CSS.escape &&
                    (n = "#" + window.CSS.escape(n.substr(1)));
                  try {
                    document.querySelector(n) && (r = { selector: n });
                  } catch (t) {
                    console.warn(
                      "Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape)."
                    );
                  }
                }
                e(r);
              });
            })
          );
        },
        routes: [
          {
            path: "/hjalp-djuren",
            component: () => Object(x.n)(n.e(28).then(n.bind(null, 396))),
            name: "hjalp-djuren",
          },
          {
            path: "/klubbnytt",
            component: () => Object(x.n)(n.e(31).then(n.bind(null, 397))),
            name: "klubbnytt",
          },
          {
            path: "/lar-dig-mer",
            component: () => Object(x.n)(n.e(33).then(n.bind(null, 398))),
            name: "lar-dig-mer",
          },
          {
            path: "/sok",
            component: () =>
              Object(x.n)(
                Promise.all([n.e(1), n.e(47), n.e(0), n.e(34)]).then(
                  n.bind(null, 399)
                )
              ),
            name: "sok",
          },
          {
            path: "/vego",
            component: () => Object(x.n)(n.e(36).then(n.bind(null, 400))),
            name: "vego",
          },
          {
            path: "/vuxen-eller-pedagog",
            component: () => Object(x.n)(n.e(43).then(n.bind(null, 401))),
            name: "vuxen-eller-pedagog",
          },
          {
            path: "/vego/recept",
            component: () => Object(x.n)(n.e(38).then(n.bind(null, 402))),
            name: "vego-recept",
          },
          {
            path: "/vego/tips",
            component: () => Object(x.n)(n.e(41).then(n.bind(null, 403))),
            name: "vego-tips",
          },
          {
            path: "/vego/recept/:slug",
            component: () => Object(x.n)(n.e(37).then(n.bind(null, 404))),
            name: "vego-recept-slug",
          },
          {
            path: "/vego/tips/:slug",
            component: () => Object(x.n)(n.e(40).then(n.bind(null, 405))),
            name: "vego-tips-slug",
          },
          {
            path: "/vego/tips/:parent/:slug?",
            component: () => Object(x.n)(n.e(39).then(n.bind(null, 406))),
            name: "vego-tips-parent-slug",
          },
          {
            path: "/djurfakta/:slug?",
            component: () => Object(x.n)(n.e(26).then(n.bind(null, 407))),
            name: "djurfakta-slug",
          },
          {
            path: "/hjalp-djuren/:slug?",
            component: () => Object(x.n)(n.e(27).then(n.bind(null, 408))),
            name: "hjalp-djuren-slug",
          },
          {
            path: "/klubbnytt/:slug",
            component: () => Object(x.n)(n.e(30).then(n.bind(null, 409))),
            name: "klubbnytt-slug",
          },
          {
            path: "/lar-dig-mer/:slug?",
            component: () => Object(x.n)(n.e(32).then(n.bind(null, 410))),
            name: "lar-dig-mer-slug",
          },
          {
            path: "/vego/:slug",
            component: () => Object(x.n)(n.e(35).then(n.bind(null, 411))),
            name: "vego-slug",
          },
          {
            path: "/vuxen-eller-pedagog/:slug?",
            component: () => Object(x.n)(n.e(42).then(n.bind(null, 412))),
            name: "vuxen-eller-pedagog-slug",
          },
          {
            path: "/",
            component: () => Object(x.n)(n.e(29).then(n.bind(null, 413))),
            name: "index",
          },
          {
            path: "/:slug",
            component: () => Object(x.n)(n.e(25).then(n.bind(null, 414))),
            name: "slug",
          },
          {
            path: "/:parent/:slug?",
            component: () => Object(x.n)(n.e(24).then(n.bind(null, 415))),
            name: "parent-slug",
          },
        ],
        fallback: !1,
      };
      function _(t, e) {
        var base = (e._app && e._app.basePath) || C.base,
          n = new y.a(k(k({}, C), {}, { base: base })),
          r = n.push;
        n.push = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : O,
            n = arguments.length > 2 ? arguments[2] : void 0;
          return r.call(this, t, e, n);
        };
        var o = n.resolve.bind(n);
        return (
          (n.resolve = (t, e, n) => (
            "string" == typeof t && (t = Object(w.d)(t)), o(t, e, n)
          )),
          n
        );
      }
      var j = {
          name: "NuxtChild",
          functional: !0,
          props: {
            nuxtChildKey: { type: String, default: "" },
            keepAlive: Boolean,
            keepAliveProps: { type: Object, default: void 0 },
          },
          render(t, e) {
            var { parent: n, data: data, props: r } = e,
              o = n.$createElement;
            data.nuxtChild = !0;
            for (
              var l = n,
                c = n.$nuxt.nuxt.transitions,
                h = n.$nuxt.nuxt.defaultTransition,
                d = 0;
              n;

            )
              n.$vnode && n.$vnode.data.nuxtChild && d++, (n = n.$parent);
            data.nuxtChildDepth = d;
            var f = c[d] || h,
              v = {};
            E.forEach((t) => {
              void 0 !== f[t] && (v[t] = f[t]);
            });
            var m = {};
            D.forEach((t) => {
              "function" == typeof f[t] && (m[t] = f[t].bind(l));
            });
            var y = m.beforeEnter;
            if (
              ((m.beforeEnter = (t) => {
                if (
                  (window.$nuxt.$nextTick(() => {
                    window.$nuxt.$emit("triggerScroll");
                  }),
                  y)
                )
                  return y.call(l, t);
              }),
              !1 === f.css)
            ) {
              var w = m.leave;
              (!w || w.length < 2) &&
                (m.leave = (t, e) => {
                  w && w.call(l, t), l.$nextTick(e);
                });
            }
            var x = o("routerView", data);
            return (
              r.keepAlive &&
                (x = o("keep-alive", { props: r.keepAliveProps }, [x])),
              o("transition", { props: v, on: m }, [x])
            );
          },
        },
        E = [
          "name",
          "mode",
          "appear",
          "css",
          "type",
          "duration",
          "enterClass",
          "leaveClass",
          "appearClass",
          "enterActiveClass",
          "enterActiveClass",
          "leaveActiveClass",
          "appearActiveClass",
          "enterToClass",
          "leaveToClass",
          "appearToClass",
        ],
        D = [
          "beforeEnter",
          "enter",
          "afterEnter",
          "enterCancelled",
          "beforeLeave",
          "leave",
          "afterLeave",
          "leaveCancelled",
          "beforeAppear",
          "appear",
          "afterAppear",
          "appearCancelled",
        ],
        $ = n(9),
        T = {
          name: "Nuxt",
          components: { NuxtChild: j, NuxtError: $.a },
          props: {
            nuxtChildKey: { type: String, default: void 0 },
            keepAlive: Boolean,
            keepAliveProps: { type: Object, default: void 0 },
            name: { type: String, default: "default" },
          },
          errorCaptured(t) {
            this.displayingNuxtError &&
              ((this.errorFromNuxtError = t), this.$forceUpdate());
          },
          computed: {
            routerViewKey() {
              if (
                void 0 !== this.nuxtChildKey ||
                this.$route.matched.length > 1
              )
                return (
                  this.nuxtChildKey ||
                  Object(x.c)(this.$route.matched[0].path)(this.$route.params)
                );
              var [t] = this.$route.matched;
              if (!t) return this.$route.path;
              var e = t.components.default;
              if (e && e.options) {
                var { options: n } = e;
                if (n.key)
                  return "function" == typeof n.key
                    ? n.key(this.$route)
                    : n.key;
              }
              return /\/$/.test(t.path)
                ? this.$route.path
                : this.$route.path.replace(/\/$/, "");
            },
          },
          beforeCreate() {
            c.a.util.defineReactive(this, "nuxt", this.$root.$options.nuxt);
          },
          render(t) {
            return this.nuxt.err
              ? this.errorFromNuxtError
                ? (this.$nextTick(() => (this.errorFromNuxtError = !1)),
                  t("div", {}, [
                    t("h2", "An error occurred while showing the error page"),
                    t(
                      "p",
                      "Unfortunately an error occurred and while showing the error page another error occurred"
                    ),
                    t(
                      "p",
                      "Error details: ".concat(
                        this.errorFromNuxtError.toString()
                      )
                    ),
                    t("nuxt-link", { props: { to: "/" } }, "Go back to home"),
                  ]))
                : ((this.displayingNuxtError = !0),
                  this.$nextTick(() => (this.displayingNuxtError = !1)),
                  t($.a, { props: { error: this.nuxt.err } }))
              : t("NuxtChild", { key: this.routerViewKey, props: this.$props });
          },
        },
        A = {
          name: "NuxtLoading",
          data: () => ({
            percent: 0,
            show: !1,
            canSucceed: !0,
            reversed: !1,
            skipTimerCount: 0,
            rtl: !1,
            throttle: 200,
            duration: 5e3,
            continuous: !1,
          }),
          computed: {
            left() {
              return (
                !(!this.continuous && !this.rtl) &&
                (this.rtl
                  ? this.reversed
                    ? "0px"
                    : "auto"
                  : this.reversed
                  ? "auto"
                  : "0px")
              );
            },
          },
          beforeDestroy() {
            this.clear();
          },
          methods: {
            clear() {
              clearInterval(this._timer),
                clearTimeout(this._throttle),
                (this._timer = null);
            },
            start() {
              return (
                this.clear(),
                (this.percent = 0),
                (this.reversed = !1),
                (this.skipTimerCount = 0),
                (this.canSucceed = !0),
                this.throttle
                  ? (this._throttle = setTimeout(
                      () => this.startTimer(),
                      this.throttle
                    ))
                  : this.startTimer(),
                this
              );
            },
            set(t) {
              return (
                (this.show = !0),
                (this.canSucceed = !0),
                (this.percent = Math.min(100, Math.max(0, Math.floor(t)))),
                this
              );
            },
            get() {
              return this.percent;
            },
            increase(t) {
              return (
                (this.percent = Math.min(100, Math.floor(this.percent + t))),
                this
              );
            },
            decrease(t) {
              return (
                (this.percent = Math.max(0, Math.floor(this.percent - t))), this
              );
            },
            pause() {
              return clearInterval(this._timer), this;
            },
            resume() {
              return this.startTimer(), this;
            },
            finish() {
              return (
                (this.percent = this.reversed ? 0 : 100), this.hide(), this
              );
            },
            hide() {
              return (
                this.clear(),
                setTimeout(() => {
                  (this.show = !1),
                    this.$nextTick(() => {
                      (this.percent = 0), (this.reversed = !1);
                    });
                }, 500),
                this
              );
            },
            fail(t) {
              return (this.canSucceed = !1), this;
            },
            startTimer() {
              this.show || (this.show = !0),
                void 0 === this._cut &&
                  (this._cut = 1e4 / Math.floor(this.duration)),
                (this._timer = setInterval(() => {
                  this.skipTimerCount > 0
                    ? this.skipTimerCount--
                    : (this.reversed
                        ? this.decrease(this._cut)
                        : this.increase(this._cut),
                      this.continuous &&
                        (this.percent >= 100 || this.percent <= 0) &&
                        ((this.skipTimerCount = 1),
                        (this.reversed = !this.reversed)));
                }, 100));
            },
          },
          render(t) {
            var e = t(!1);
            return (
              this.show &&
                (e = t("div", {
                  staticClass: "nuxt-progress",
                  class: {
                    "nuxt-progress-notransition": this.skipTimerCount > 0,
                    "nuxt-progress-failed": !this.canSucceed,
                  },
                  style: { width: this.percent + "%", left: this.left },
                })),
              e
            );
          },
        },
        L = (n(102), n(2)),
        M = Object(L.a)(A, undefined, undefined, !1, null, null, null).exports,
        I = (n(104), n(112), n(77));
      function z(t, e, n, r, o, l, c) {
        try {
          var h = t[l](c),
            d = h.value;
        } catch (t) {
          return void n(t);
        }
        h.done ? e(d) : Promise.resolve(d).then(r, o);
      }
      function R(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var l = t.apply(e, n);
            function c(t) {
              z(l, r, o, c, h, "next", t);
            }
            function h(t) {
              z(l, r, o, c, h, "throw", t);
            }
            c(void 0);
          });
        };
      }
      var N = { _default: Object(x.s)(I.a) },
        U = {
          render(t, e) {
            var n = t("NuxtLoading", { ref: "loading" }),
              r = t(this.layout || "nuxt"),
              o = t(
                "div",
                { domProps: { id: "__layout" }, key: this.layoutName },
                [r]
              ),
              l = t(
                "transition",
                {
                  props: { name: "layout", mode: "out-in" },
                  on: {
                    beforeEnter(t) {
                      window.$nuxt.$nextTick(() => {
                        window.$nuxt.$emit("triggerScroll");
                      });
                    },
                  },
                },
                [o]
              );
            return t("div", { domProps: { id: "__nuxt" } }, [n, l]);
          },
          data: () => ({
            isOnline: !0,
            layout: null,
            layoutName: "",
            nbFetching: 0,
          }),
          beforeCreate() {
            c.a.util.defineReactive(this, "nuxt", this.$options.nuxt);
          },
          created() {
            (this.$root.$options.$nuxt = this),
              (window.$nuxt = this),
              this.refreshOnlineStatus(),
              window.addEventListener("online", this.refreshOnlineStatus),
              window.addEventListener("offline", this.refreshOnlineStatus),
              (this.error = this.nuxt.error),
              (this.context = this.$options.context);
          },
          mounted() {
            var t = this;
            return R(function* () {
              (t.$loading = t.$refs.loading),
                t.isPreview &&
                  (t.$store &&
                    t.$store._actions.nuxtServerInit &&
                    (t.$loading.start(),
                    yield t.$store.dispatch("nuxtServerInit", t.context)),
                  yield t.refresh(),
                  t.$loading.finish());
            })();
          },
          watch: { "nuxt.err": "errorChanged" },
          computed: {
            isOffline() {
              return !this.isOnline;
            },
            isFetching() {
              return this.nbFetching > 0;
            },
            isPreview() {
              return Boolean(this.$options.previewData);
            },
          },
          methods: {
            refreshOnlineStatus() {
              void 0 === window.navigator.onLine
                ? (this.isOnline = !0)
                : (this.isOnline = window.navigator.onLine);
            },
            refresh() {
              var t = this;
              return R(function* () {
                var e = Object(x.i)(t.$route);
                if (e.length) {
                  t.$loading.start();
                  var n = e.map((e) => {
                    var p = [];
                    if (
                      (e.$options.fetch &&
                        e.$options.fetch.length &&
                        p.push(Object(x.q)(e.$options.fetch, t.context)),
                      e.$fetch)
                    )
                      p.push(e.$fetch());
                    else
                      for (var component of Object(x.f)(
                        e.$vnode.componentInstance
                      ))
                        p.push(component.$fetch());
                    return (
                      e.$options.asyncData &&
                        p.push(
                          Object(x.q)(e.$options.asyncData, t.context).then(
                            (t) => {
                              for (var n in t) c.a.set(e.$data, n, t[n]);
                            }
                          )
                        ),
                      Promise.all(p)
                    );
                  });
                  try {
                    yield Promise.all(n);
                  } catch (e) {
                    t.$loading.fail(e), Object(x.l)(e), t.error(e);
                  }
                  t.$loading.finish();
                }
              })();
            },
            errorChanged() {
              if (this.nuxt.err) {
                this.$loading &&
                  (this.$loading.fail && this.$loading.fail(this.nuxt.err),
                  this.$loading.finish && this.$loading.finish());
                var t = ($.a.options || $.a).layout;
                "function" == typeof t && (t = t(this.context)),
                  this.setLayout(t);
              }
            },
            setLayout(t) {
              return (
                (t && N["_" + t]) || (t = "default"),
                (this.layoutName = t),
                (this.layout = N["_" + t]),
                this.layout
              );
            },
            loadLayout: (t) => (
              (t && N["_" + t]) || (t = "default"), Promise.resolve(N["_" + t])
            ),
            getRouterBase() {
              return Object(w.h)(this.$router.options.base);
            },
            getRoutePath() {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "/",
                base = this.getRouterBase();
              return Object(w.h)(Object(w.g)(Object(w.e)(t).pathname, base));
            },
            getStaticAssetsPath() {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "/",
                { staticAssetsBase: e } = window.__NUXT__;
              return Object(x.v)(e, this.getRoutePath(t));
            },
            fetchStaticManifest() {
              var t = this;
              return R(function* () {
                return window.__NUXT_IMPORT__(
                  "manifest.js",
                  Object(w.d)(
                    Object(x.v)(t.getStaticAssetsPath(), "manifest.js")
                  )
                );
              })();
            },
            setPagePayload(t) {
              (this._pagePayload = t), (this._fetchCounters = {});
            },
            fetchPayload(t, e) {
              var n = this;
              return R(function* () {
                var path = Object(w.a)(n.getRoutePath(t));
                if (!(yield n.fetchStaticManifest()).routes.includes(path))
                  throw (
                    (e || n.setPagePayload(!1),
                    new Error("Route ".concat(path, " is not pre-rendered")))
                  );
                var r = Object(x.v)(n.getStaticAssetsPath(t), "payload.js");
                try {
                  var o = yield window.__NUXT_IMPORT__(path, Object(w.d)(r));
                  return e || n.setPagePayload(o), o;
                } catch (t) {
                  throw (e || n.setPagePayload(!1), t);
                }
              })();
            },
          },
          components: { NuxtLoading: M },
        },
        B = () =>
          Promise.resolve()
            .then(n.bind(null, 173))
            .then((t) => _t(t.default || t)),
        F = () =>
          n
            .e(4)
            .then(n.bind(null, 296))
            .then((t) => _t(t.default || t)),
        W = () =>
          n
            .e(5)
            .then(n.bind(null, 295))
            .then((t) => _t(t.default || t)),
        H = () =>
          n
            .e(6)
            .then(n.bind(null, 303))
            .then((t) => _t(t.default || t)),
        X = () =>
          n
            .e(7)
            .then(n.bind(null, 209))
            .then((t) => _t(t.default || t)),
        V = () =>
          Promise.resolve()
            .then(n.bind(null, 175))
            .then((t) => _t(t.default || t)),
        K = () =>
          Promise.resolve()
            .then(n.bind(null, 178))
            .then((t) => _t(t.default || t)),
        G = () =>
          Promise.resolve()
            .then(n.bind(null, 179))
            .then((t) => _t(t.default || t)),
        Y = () =>
          Promise.resolve()
            .then(n.bind(null, 79))
            .then((t) => _t(t.default || t)),
        J = () =>
          Promise.resolve()
            .then(n.bind(null, 14))
            .then((t) => _t(t.default || t)),
        Q = () =>
          Promise.resolve()
            .then(n.bind(null, 176))
            .then((t) => _t(t.default || t)),
        Z = () =>
          Promise.all([n.e(1), n.e(8)])
            .then(n.bind(null, 298))
            .then((t) => _t(t.default || t)),
        tt = () =>
          Promise.resolve()
            .then(n.bind(null, 171))
            .then((t) => _t(t.default || t)),
        et = () =>
          n
            .e(9)
            .then(n.bind(null, 199))
            .then((t) => _t(t.default || t)),
        nt = () =>
          n
            .e(10)
            .then(n.bind(null, 302))
            .then((t) => _t(t.default || t)),
        it = () =>
          Promise.resolve()
            .then(n.bind(null, 85))
            .then((t) => _t(t.default || t)),
        ot = () =>
          n
            .e(11)
            .then(n.bind(null, 293))
            .then((t) => _t(t.default || t)),
        st = () =>
          n
            .e(12)
            .then(n.bind(null, 294))
            .then((t) => _t(t.default || t)),
        at = () =>
          Promise.resolve()
            .then(n.bind(null, 172))
            .then((t) => _t(t.default || t)),
        lt = () =>
          Promise.resolve()
            .then(n.bind(null, 174))
            .then((t) => _t(t.default || t)),
        ut = () =>
          Promise.resolve()
            .then(n.bind(null, 177))
            .then((t) => _t(t.default || t)),
        ct = () =>
          Promise.resolve()
            .then(n.bind(null, 68))
            .then((t) => _t(t.default || t)),
        ht = () =>
          n
            .e(13)
            .then(n.bind(null, 189))
            .then((t) => _t(t.default || t)),
        pt = () =>
          n
            .e(14)
            .then(n.bind(null, 297))
            .then((t) => _t(t.default || t)),
        ft = () =>
          n
            .e(15)
            .then(n.bind(null, 196))
            .then((t) => _t(t.default || t)),
        gt = () =>
          Promise.resolve()
            .then(n.bind(null, 82))
            .then((t) => _t(t.default || t)),
        vt = () =>
          n
            .e(16)
            .then(n.bind(null, 299))
            .then((t) => _t(t.default || t)),
        mt = () =>
          n
            .e(17)
            .then(n.bind(null, 227))
            .then((t) => _t(t.default || t)),
        yt = () =>
          Promise.resolve()
            .then(n.bind(null, 32))
            .then((t) => _t(t.default || t)),
        bt = () =>
          n
            .e(0)
            .then(n.bind(null, 376))
            .then((t) => _t(t.default || t)),
        wt = () =>
          n
            .e(18)
            .then(n.bind(null, 416))
            .then((t) => _t(t.default || t)),
        xt = () =>
          n
            .e(19)
            .then(n.bind(null, 417))
            .then((t) => _t(t.default || t)),
        St = () =>
          n
            .e(20)
            .then(n.bind(null, 210))
            .then((t) => _t(t.default || t)),
        kt = () =>
          Promise.resolve()
            .then(n.bind(null, 83))
            .then((t) => _t(t.default || t)),
        Pt = () =>
          n
            .e(21)
            .then(n.bind(null, 300))
            .then((t) => _t(t.default || t)),
        Ot = () =>
          n
            .e(22)
            .then(n.bind(null, 301))
            .then((t) => _t(t.default || t)),
        Ct = () =>
          n
            .e(23)
            .then(n.bind(null, 192))
            .then((t) => _t(t.default || t));
      function _t(t) {
        if (!t || !t.functional) return t;
        var e = Array.isArray(t.props) ? t.props : Object.keys(t.props || {});
        return {
          render(n) {
            var r = {},
              o = {};
            for (var l in this.$attrs)
              e.includes(l) ? (o[l] = this.$attrs[l]) : (r[l] = this.$attrs[l]);
            return n(
              t,
              {
                on: this.$listeners,
                attrs: r,
                props: o,
                scopedSlots: this.$scopedSlots,
              },
              this.$slots.default
            );
          },
        };
      }
      for (var jt in r)
        c.a.component(jt, r[jt]), c.a.component("Lazy" + jt, r[jt]);
      var Et = n(28),
        Dt = n.n(Et);
      function $t(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function Tt(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (input, t) {
              if ("object" != typeof input || null === input) return input;
              var e = input[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(input, t || "default");
                if ("object" != typeof n) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(input);
            })(t, "string");
            return "symbol" == typeof e ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var At = ["class-name", "class", "style"],
        Lt = /^@|^v-on:/,
        Mt = /^:|^v-bind:/,
        It = /^v-model/,
        zt = ["select", "textarea", "input"];
      function Rt(code, t) {
        return new Function("with(this) { return (" + code + ") }").call(t);
      }
      function Nt(t, e, n) {
        if ("text" === t.type) return t.value;
        var r = (function (t, e, n) {
            var data = {};
            return (
              (t.children || []).forEach((t) => {
                if (Ft(t) && !Bt(t)) {
                  data.scopedSlots = data.scopedSlots || {};
                  var template = t,
                    r = qt(template),
                    o = template.content.map((t) => Nt(t, e, n));
                  data.scopedSlots[r] = function () {
                    return o;
                  };
                }
              }),
              data
            );
          })(t || {}, e, n),
          o = (function (t, e) {
            var { tag: n, props: r } = t;
            return Object.keys(r).reduce(
              function (data, t) {
                var o = t.replace(/.*:/, ""),
                  l = At.includes(o) ? data : data.attrs,
                  c = r[t],
                  { attribute: h } = Dt.a.find(Dt.a.html, t),
                  d = zt.includes(n);
                if (It.test(t) && c in e && !d) {
                  var f = t
                      .replace(It, "")
                      .split(".")
                      .filter((t) => t)
                      .reduce((t, e) => ((t[e] = !0), t), {}),
                    v = f.lazy ? "change" : "input",
                    m = f.number
                      ? (t) => +t
                      : f.trim
                      ? (t) => t.trim()
                      : (t) => t;
                  (l.value = Rt(c, e)),
                    (data.on = data.on || {}),
                    (data.on[v] = (t) => (e[c] = m(t)));
                } else if ("v-bind" === t) {
                  var y = c in e ? e[c] : Rt(c, e);
                  l = Object.assign(l, y);
                } else
                  Lt.test(t)
                    ? ((t = t.replace(Lt, "")),
                      (data.on = data.on || {}),
                      (data.on[t] = Rt(c, e)))
                    : Mt.test(t)
                    ? (l[(t = t.replace(Mt, ""))] = c in e ? e[c] : Rt(c, e))
                    : Array.isArray(c)
                    ? (l[h] = c.join(" "))
                    : (l[h] = c);
                return data;
              },
              { attrs: {} }
            );
          })(t || {}, n),
          data = Object.assign({}, r, o),
          l = [];
        for (var c of t.children)
          if (!Ft(c) || Bt(c)) {
            var h = Bt(c) ? c.content : [c];
            l.push(...h.map((t) => Nt(t, e, n)));
          }
        return e(t.tag, data, l);
      }
      var Ut = "default";
      function Bt(t) {
        return Ft(t) && qt(t) === Ut;
      }
      function Ft(t) {
        return "template" === t.tag;
      }
      function qt(t) {
        var e = "";
        for (var n of Object.keys(t.props))
          if (n.startsWith("#") || n.startsWith("v-slot:")) {
            e = n.split(/[:#]/, 2)[1];
            break;
          }
        return e || Ut;
      }
      var Wt = {
        name: "NuxtContent",
        functional: !0,
        props: { document: { required: !0 } },
        render(t, e) {
          var { data: data, props: n } = e,
            { document: r } = n,
            { body: body } = r || {};
          if (body && body.children && Array.isArray(body.children)) {
            var o = [];
            if (Array.isArray(data.class)) o = data.class;
            else if ("object" == typeof data.class) {
              o = Object.keys(data.class).filter((t) => data.class[t]);
            } else o = [data.class];
            return (
              (data.class = o.concat("nuxt-content")),
              (data.props = Object.assign(
                (function (t) {
                  for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2
                      ? $t(Object(source), !0).forEach(function (e) {
                          Tt(t, e, source[e]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          t,
                          Object.getOwnPropertyDescriptors(source)
                        )
                      : $t(Object(source)).forEach(function (e) {
                          Object.defineProperty(
                            t,
                            e,
                            Object.getOwnPropertyDescriptor(source, e)
                          );
                        });
                  }
                  return t;
                })({}, body.props),
                data.props
              )),
              t(
                "div",
                data,
                body.children.map((e) => Nt(e, t, r))
              )
            );
          }
        },
      };
      function Ht(t, e, n, r, o, l, c) {
        try {
          var h = t[l](c),
            d = h.value;
        } catch (t) {
          return void n(t);
        }
        h.done ? e(d) : Promise.resolve(d).then(r, o);
      }
      function Xt(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var l = t.apply(e, n);
            function c(t) {
              Ht(l, r, o, c, h, "next", t);
            }
            function h(t) {
              Ht(l, r, o, c, h, "throw", t);
            }
            c(void 0);
          });
        };
      }
      var Vt = () => n.e(46).then(n.bind(null, 393));
      c.a.component(Wt.name, Wt);
      var Kt = (t, e) => {
        var n = null,
          { dbHash: r } = t.$config ? t.$config.content : t.nuxtState.content,
          o = function () {
            for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++)
              e[o] = arguments[o];
            if (n) return n(...e);
            var l = [
                "only",
                "without",
                "sortBy",
                "limit",
                "skip",
                "where",
                "search",
                "surround",
              ],
              c = {},
              h = [],
              d = function (t) {
                c[t] = function () {
                  for (
                    var e = arguments.length, n = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    n[r] = arguments[r];
                  return h.push({ key: t, args: n }), c;
                };
              };
            for (var f of l) d(f);
            return (
              (c.fetch = Xt(function* () {
                var t = yield fetch(
                    "/_nuxt/content/db-".concat(r, ".json")
                  ).then((t) => t.json()),
                  o = (n = (yield Vt()).default(t))(...e);
                return (
                  h.forEach((t) => {
                    var { key: e, args: n } = t;
                    o = o[e](...n);
                  }),
                  o.fetch()
                );
              })),
              c
            );
          };
        e("content", o), (t.$content = o);
      };
      n(157);
      function Gt(t) {
        return null !== t && "object" == typeof t;
      }
      function Yt(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : ".",
          r = arguments.length > 3 ? arguments[3] : void 0;
        if (!Gt(e)) return Yt(t, {}, n, r);
        var object = Object.assign({}, e);
        for (var o in t)
          if ("__proto__" !== o && "constructor" !== o) {
            var l = t[o];
            null != l &&
              ((r && r(object, o, l, n)) ||
                (Array.isArray(l) && Array.isArray(object[o])
                  ? (object[o] = [...l, ...object[o]])
                  : Gt(l) && Gt(object[o])
                  ? (object[o] = Yt(
                      l,
                      object[o],
                      (n ? "".concat(n, ".") : "") + o.toString(),
                      r
                    ))
                  : (object[o] = l)));
          }
        return object;
      }
      function Jt(t) {
        return function () {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return n.reduce((p, e) => Yt(p, e, "", t), {});
        };
      }
      var Qt = Jt(),
        Zt =
          (Jt((object, t, e, n) => {
            if (void 0 !== object[t] && "function" == typeof e)
              return (object[t] = e(object[t])), !0;
          }),
          Jt((object, t, e, n) => {
            if (Array.isArray(object[t]) && "function" == typeof e)
              return (object[t] = e(object[t])), !0;
          }),
          n(6));
      function te(t, e, n, r, o, l, c) {
        try {
          var h = t[l](c),
            d = h.value;
        } catch (t) {
          return void n(t);
        }
        h.done ? e(d) : Promise.resolve(d).then(r, o);
      }
      function ee(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var l = t.apply(e, n);
            function c(t) {
              te(l, r, o, c, h, "next", t);
            }
            function h(t) {
              te(l, r, o, c, h, "throw", t);
            }
            c(void 0);
          });
        };
      }
      function ne(t, e) {
        return ie.apply(this, arguments);
      }
      function ie() {
        return (ie = ee(function* (t, e) {
          var n = se(t),
            r = "image:meta:" + e;
          if (n.has(r)) return n.get(r);
          var meta = yield re(e).catch(
            (t) => (
              console.error("Failed to get image meta for " + e, t + ""),
              { width: 0, height: 0, ratio: 0 }
            )
          );
          return n.set(r, meta), meta;
        })).apply(this, arguments);
      }
      function re(t) {
        return oe.apply(this, arguments);
      }
      function oe() {
        return (oe = ee(function* (t) {
          if ("undefined" == typeof Image)
            throw new TypeError("Image not supported");
          return new Promise((e, n) => {
            var img = new Image();
            (img.onload = () => {
              var meta = {
                width: img.width,
                height: img.height,
                ratio: img.width / img.height,
              };
              e(meta);
            }),
              (img.onerror = (t) => n(t)),
              (img.src = t);
          });
        })).apply(this, arguments);
      }
      function se(t) {
        if (!t.nuxtContext.cache)
          if (t.nuxtContext.ssrContext && t.nuxtContext.ssrContext.cache)
            t.nuxtContext.cache = t.nuxtContext.ssrContext.cache;
          else {
            var e = {};
            t.nuxtContext.cache = {
              get: (t) => e[t],
              set: (t, n) => {
                e[t] = n;
              },
              has: (t) => void 0 !== e[t],
            };
          }
        return t.nuxtContext.cache;
      }
      function ae(map) {
        return (t) => (t ? map[t] || t : map.missingValue);
      }
      function le() {
        var {
          formatter: t,
          keyMap: e,
          joinWith: n = "/",
          valueMap: r,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        t || (t = (t, e) => "".concat(t, "=").concat(e)),
          e && "function" != typeof e && (e = ae(e));
        var map = r || {};
        return (
          Object.keys(map).forEach((t) => {
            "function" != typeof map[t] && (map[t] = ae(map[t]));
          }),
          function () {
            var r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              o = Object.entries(r)
                .filter((t) => {
                  var [e, n] = t;
                  return void 0 !== n;
                })
                .map((n) => {
                  var [o, l] = n,
                    c = map[o];
                  return (
                    "function" == typeof c && (l = c(r[o])),
                    (o = "function" == typeof e ? e(o) : o),
                    t(o, l)
                  );
                });
            return o.join(n);
          }
        );
      }
      function ue() {
        var input =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return "number" == typeof input
          ? input
          : "string" == typeof input && input.replace("px", "").match(/^\d+$/g)
          ? parseInt(input, 10)
          : void 0;
      }
      var ce = {};
      function he() {
        if (void 0 !== window.$nuxt) {
          var t,
            e,
            n,
            r =
              (null === (t = window.$nuxt._pagePayload) ||
              void 0 === t ||
              null === (e = t.data) ||
              void 0 === e ||
              null === (n = e[0]) ||
              void 0 === n
                ? void 0
                : n._img) || {};
          Object.assign(ce, r);
        } else if (void 0 !== window.__NUXT__) {
          var o,
            l =
              (null === (o = window.__NUXT__) || void 0 === o
                ? void 0
                : o._img) || {};
          Object.assign(ce, l);
        }
      }
      function de(t, e, n, r, o, l, c) {
        try {
          var h = t[l](c),
            d = h.value;
        } catch (t) {
          return void n(t);
        }
        h.done ? e(d) : Promise.resolve(d).then(r, o);
      }
      function pe(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var l = t.apply(e, n);
            function c(t) {
              de(l, r, o, c, h, "next", t);
            }
            function h(t) {
              de(l, r, o, c, h, "throw", t);
            }
            c(void 0);
          });
        };
      }
      function fe(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function ge(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? fe(Object(source), !0).forEach(function (e) {
                ve(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : fe(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      function ve(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (input, t) {
              if ("object" != typeof input || null === input) return input;
              var e = input[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(input, t || "default");
                if ("object" != typeof n) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(input);
            })(t, "string");
            return "symbol" == typeof e ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function me(t, e) {
        var n = (function (t) {
            var e;
            return (
              he(),
              t &&
                (null === (e = t.app.router) ||
                  void 0 === e ||
                  e.afterEach(he)),
              window.onNuxtReady && window.onNuxtReady(he),
              ce
            );
          })(e),
          r = { options: t, nuxtContext: e },
          o = function (input) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              image = be(r, input, t);
            return image.isStatic && c(image, input), image;
          },
          l = function (input) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              e =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
            return o(
              input,
              ge(ge({}, e), {}, { modifiers: Qt(t, e.modifiers || {}) })
            ).url;
          };
        function c(image, input) {
          if ("fetchPayload" in window.$nuxt) {
            var t = n[image.url];
            return (image.url = t || input), image;
          }
        }
        var h = function (e) {
          l[e] = (source, n, r) => l(source, n, ge(ge({}, t.presets[e]), r));
        };
        for (var d in t.presets) h(d);
        return (
          (l.options = t),
          (l.getImage = o),
          (l.getMeta = (input, t) =>
            (function (t, e, n) {
              return ye.apply(this, arguments);
            })(r, input, t)),
          (l.getSizes = (input, t) =>
            (function (t, input, e) {
              var n,
                r,
                o = ue(
                  null === (n = e.modifiers) || void 0 === n ? void 0 : n.width
                ),
                l = ue(
                  null === (r = e.modifiers) || void 0 === r ? void 0 : r.height
                ),
                c = o && l ? l / o : 0,
                h = [],
                d = {};
              if ("string" == typeof e.sizes)
                for (var f of e.sizes.split(/[\s,]+/).filter((t) => t)) {
                  var s = f.split(":");
                  2 === s.length && (d[s[0].trim()] = s[1].trim());
                }
              else Object.assign(d, e.sizes);
              for (var v in d) {
                var m =
                    (t.options.screens && t.options.screens[v]) || parseInt(v),
                  y = String(d[v]),
                  w = y.endsWith("vw");
                if (
                  (!w && /^\d+$/.test(y) && (y += "px"), w || y.endsWith("px"))
                ) {
                  var x = parseInt(y);
                  if (m && x) {
                    w && (x = Math.round((x / 100) * m));
                    var S = c ? Math.round(x * c) : l;
                    h.push({
                      width: x,
                      size: y,
                      screenMaxWidth: m,
                      media: "(max-width: ".concat(m, "px)"),
                      src: t.$img(
                        input,
                        ge(ge({}, e.modifiers), {}, { width: x, height: S }),
                        e
                      ),
                    });
                  }
                }
              }
              h.sort((t, e) => t.screenMaxWidth - e.screenMaxWidth);
              var k = h[h.length - 1];
              k && (k.media = "");
              return {
                sizes: h
                  .map((t) =>
                    "".concat(t.media ? t.media + " " : "").concat(t.size)
                  )
                  .join(", "),
                srcset: h
                  .map((t) => "".concat(t.src, " ").concat(t.width, "w"))
                  .join(", "),
                src: null == k ? void 0 : k.src,
              };
            })(r, input, t)),
          (r.$img = l),
          l
        );
      }
      function ye() {
        return (ye = pe(function* (t, input, e) {
          var image = be(t, input, ge({}, e));
          return "function" == typeof image.getMeta
            ? yield image.getMeta()
            : yield ne(t, image.url);
        })).apply(this, arguments);
      }
      function be(t, input, e) {
        var n, r;
        if ("string" != typeof input || "" === input)
          throw new TypeError(
            "input must be a string (received "
              .concat(typeof input, ": ")
              .concat(JSON.stringify(input), ")")
          );
        if (input.startsWith("data:")) return { url: input };
        var { provider: o, defaults: l } = (function (t, e) {
            var n = t.options.providers[e];
            if (!n) throw new Error("Unknown provider: " + e);
            return n;
          })(t, e.provider || t.options.provider),
          c = (function (t, e) {
            if (!e) return {};
            if (!t.options.presets[e]) throw new Error("Unknown preset: " + e);
            return t.options.presets[e];
          })(t, e.preset);
        if (
          ((input = Object(Zt.c)(input) ? input : Object(Zt.f)(input)),
          !o.supportsAlias)
        )
          for (var base in t.options.alias)
            input.startsWith(base) &&
              (input = Object(Zt.d)(
                t.options.alias[base],
                input.substr(base.length)
              ));
        if (o.validateDomains && Object(Zt.c)(input)) {
          var h = Object(Zt.e)(input).host;
          if (!t.options.domains.find((t) => t === h)) return { url: input };
        }
        var d = Qt(e, c, l);
        d.modifiers = ge({}, d.modifiers);
        var f = d.modifiers.format;
        null !== (n = d.modifiers) &&
          void 0 !== n &&
          n.width &&
          (d.modifiers.width = ue(d.modifiers.width)),
          null !== (r = d.modifiers) &&
            void 0 !== r &&
            r.height &&
            (d.modifiers.height = ue(d.modifiers.height));
        var image = o.getImage(input, d, t);
        return (image.format = image.format || f || ""), image;
      }
      function we(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function xe(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? we(Object(source), !0).forEach(function (e) {
                Se(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : we(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      function Se(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (input, t) {
              if ("object" != typeof input || null === input) return input;
              var e = input[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(input, t || "default");
                if ("object" != typeof n) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(input);
            })(t, "string");
            return "symbol" == typeof e ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var ke = {
        props: {
          src: { type: String, required: !0 },
          format: { type: String, default: void 0 },
          quality: { type: [Number, String], default: void 0 },
          background: { type: String, default: void 0 },
          fit: { type: String, default: void 0 },
          modifiers: { type: Object, default: void 0 },
          preset: { type: String, default: void 0 },
          provider: { type: String, default: void 0 },
          sizes: { type: [Object, String], default: void 0 },
          preload: { type: Boolean, default: void 0 },
          width: { type: [String, Number], default: void 0 },
          height: { type: [String, Number], default: void 0 },
          alt: { type: String, default: void 0 },
          referrerpolicy: { type: String, default: void 0 },
          usemap: { type: String, default: void 0 },
          longdesc: { type: String, default: void 0 },
          ismap: { type: Boolean, default: void 0 },
          crossorigin: {
            type: [Boolean, String],
            default: void 0,
            validator: (t) =>
              ["anonymous", "use-credentials", "", !0, !1].includes(t),
          },
          loading: { type: String, default: void 0 },
          decoding: {
            type: String,
            default: void 0,
            validator: (t) => ["async", "auto", "sync"].includes(t),
          },
        },
        computed: {
          nImgAttrs() {
            return {
              width: ue(this.width),
              height: ue(this.height),
              alt: this.alt,
              referrerpolicy: this.referrerpolicy,
              usemap: this.usemap,
              longdesc: this.longdesc,
              ismap: this.ismap,
              crossorigin:
                !0 === this.crossorigin
                  ? "anonymous"
                  : this.crossorigin || void 0,
              loading: this.loading,
              decoding: this.decoding,
            };
          },
          nModifiers() {
            return xe(
              xe({}, this.modifiers),
              {},
              {
                width: ue(this.width),
                height: ue(this.height),
                format: this.format,
                quality: this.quality,
                background: this.background,
                fit: this.fit,
              }
            );
          },
          nOptions() {
            return { provider: this.provider, preset: this.preset };
          },
        },
      };
      function Pe(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function Oe(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? Pe(Object(source), !0).forEach(function (e) {
                Ce(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : Pe(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      function Ce(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (input, t) {
              if ("object" != typeof input || null === input) return input;
              var e = input[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(input, t || "default");
                if ("object" != typeof n) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(input);
            })(t, "string");
            return "symbol" == typeof e ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var _e = {
          name: "NuxtImg",
          mixins: [ke],
          props: {
            placeholder: {
              type: [Boolean, String, Number, Array],
              default: void 0,
            },
          },
          head() {
            return !0 === this.preload
              ? { link: [{ rel: "preload", as: "image", href: this.nSrc }] }
              : {};
          },
          computed: {
            nAttrs() {
              var t = this.nImgAttrs;
              if (this.sizes) {
                var { sizes: e, srcset: n } = this.nSizes;
                (t.sizes = e), (t.srcset = n);
              }
              return t;
            },
            nMainSrc() {
              return this.sizes
                ? this.nSizes.src
                : this.$img(this.src, this.nModifiers, this.nOptions);
            },
            nSizes() {
              return this.$img.getSizes(
                this.src,
                Oe(
                  Oe({}, this.nOptions),
                  {},
                  {
                    sizes: this.sizes,
                    modifiers: Oe(
                      Oe({}, this.nModifiers),
                      {},
                      { width: ue(this.width), height: ue(this.height) }
                    ),
                  }
                )
              );
            },
            nSrc() {
              return this.nPlaceholder ? this.nPlaceholder : this.nMainSrc;
            },
            nPlaceholder() {
              var t = this.placeholder;
              if (("" === t && (t = !0), !t || this.placeholderLoaded))
                return !1;
              if ("string" == typeof t) return t;
              var e = Array.isArray(t)
                ? t
                : "number" == typeof t
                ? [t, t]
                : [10, 10];
              return this.$img(
                this.src,
                Oe(
                  Oe({}, this.nModifiers),
                  {},
                  { width: e[0], height: e[1], quality: e[2] || 50 }
                ),
                this.nOptions
              );
            },
          },
          mounted() {
            if (this.nPlaceholder) {
              var img = new Image();
              (img.src = this.nMainSrc),
                (img.onload = () => {
                  (this.$refs.img.src = this.nMainSrc),
                    (this.placeholderLoaded = !0);
                });
            }
          },
        },
        je = Object(L.a)(
          _e,
          function () {
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e(
              "img",
              t._g(
                t._b(
                  { key: t.nSrc, ref: "img", attrs: { src: t.nSrc } },
                  "img",
                  t.nAttrs,
                  !1
                ),
                t.$listeners
              )
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      function Ee(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function De(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? Ee(Object(source), !0).forEach(function (e) {
                $e(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : Ee(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      function $e(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (input, t) {
              if ("object" != typeof input || null === input) return input;
              var e = input[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(input, t || "default");
                if ("object" != typeof n) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(input);
            })(t, "string");
            return "symbol" == typeof e ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function Te(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function Ae(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? Te(Object(source), !0).forEach(function (e) {
                Le(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : Te(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      function Le(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (input, t) {
              if ("object" != typeof input || null === input) return input;
              var e = input[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(input, t || "default");
                if ("object" != typeof n) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(input);
            })(t, "string");
            return "symbol" == typeof e ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var Me = {
          name: "NuxtPicture",
          mixins: [ke],
          props: {
            legacyFormat: { type: String, default: null },
            imgAttrs: { type: Object, default: null },
          },
          head() {
            if (!0 === this.preload) {
              var t = void 0 !== this.nSources[1] ? 1 : 0,
                link = {
                  rel: "preload",
                  as: "image",
                  imagesrcset: this.nSources[t].srcset,
                };
              return (
                void 0 !== this.nSources[t].sizes &&
                  (link.imagesizes = this.nSources[t].sizes),
                { link: [link] }
              );
            }
            return {};
          },
          computed: {
            isTransparent() {
              return ["png", "webp", "gif"].includes(this.originalFormat);
            },
            originalFormat() {
              return (function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "";
                return t
                  .split(/[?#]/)
                  .shift()
                  .split("/")
                  .pop()
                  .split(".")
                  .pop();
              })(this.src);
            },
            nFormat() {
              return this.format
                ? this.format
                : "svg" === this.originalFormat
                ? "svg"
                : "webp";
            },
            nLegacyFormat() {
              return this.legacyFormat
                ? this.legacyFormat
                : { webp: this.isTransparent ? "png" : "jpeg", svg: "png" }[
                    this.nFormat
                  ] || this.originalFormat;
            },
            nSources() {
              return "svg" === this.nFormat
                ? [{ srcset: this.src }]
                : (this.nLegacyFormat !== this.nFormat
                    ? [this.nLegacyFormat, this.nFormat]
                    : [this.nFormat]
                  ).map((t) => {
                    var {
                      srcset: e,
                      sizes: n,
                      src: r,
                    } = this.$img.getSizes(
                      this.src,
                      Ae(
                        Ae({}, this.nOptions),
                        {},
                        {
                          sizes: this.sizes || this.$img.options.screens,
                          modifiers: Ae(
                            Ae({}, this.nModifiers),
                            {},
                            { format: t }
                          ),
                        }
                      )
                    );
                    return {
                      src: r,
                      type: "image/".concat(t),
                      sizes: n,
                      srcset: e,
                    };
                  });
            },
          },
          created() {
            0;
          },
        },
        Ie = Me,
        ze = Object(L.a)(
          Ie,
          function () {
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e("picture", { key: t.nSources[0].src }, [
              t.nSources[1]
                ? e("source", {
                    attrs: {
                      type: t.nSources[1].type,
                      srcset: t.nSources[1].srcset,
                      sizes: t.nSources[1].sizes,
                    },
                  })
                : t._e(),
              t._v(" "),
              e(
                "img",
                t._g(
                  t._b(
                    {
                      attrs: {
                        src: t.nSources[0].src,
                        srcset: t.nSources[0].srcset,
                        sizes: t.nSources[0].sizes,
                      },
                    },
                    "img",
                    De(De({}, t.nImgAttrs), t.imgAttrs),
                    !1
                  ),
                  t.$listeners
                )
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        Re = le({
          keyMap: {
            format: "f",
            fit: "fit",
            width: "w",
            height: "h",
            resize: "s",
            quality: "q",
            background: "b",
          },
          joinWith: ",",
          formatter: (t, e) => Object(Zt.a)(t) + "_" + Object(Zt.a)(e),
        });
      function Ne(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function Ue(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? Ne(Object(source), !0).forEach(function (e) {
                Be(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : Ne(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      function Be(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (input, t) {
              if ("object" != typeof input || null === input) return input;
              var e = input[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(input, t || "default");
                if ("object" != typeof n) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(input);
            })(t, "string");
            return "symbol" == typeof e ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var Fe = (t, e, n) =>
          Ue(
            Ue(
              {},
              (function (t) {
                var { modifiers: e = {}, baseURL: n } =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  r = arguments.length > 2 ? arguments[2] : void 0;
                e.width &&
                  e.height &&
                  ((e.resize = "".concat(e.width, "x").concat(e.height)),
                  delete e.width,
                  delete e.height);
                var o,
                  l = Re(e) || "_";
                return (
                  n ||
                    (n = Object(Zt.d)(
                      (null === (o = r.nuxtContext) || void 0 === o
                        ? void 0
                        : o.base) || "/",
                      "/_ipx"
                    )),
                  { url: Object(Zt.d)(n, l, Object(Zt.b)(t)) }
                );
              })(t, e, n)
            ),
            {},
            { isStatic: !0 }
          ),
        qe = !0,
        We = (t) => (t.startsWith("#") ? t.replace("#", "rgb_") : t),
        He = (t) => t.replace(/\.[^/.]+$/, ""),
        Xe = le({
          keyMap: {
            fit: "c",
            width: "w",
            height: "h",
            format: "f",
            quality: "q",
            background: "b",
            rotate: "a",
            roundCorner: "r",
            gravity: "g",
            effect: "e",
            color: "co",
            flags: "fl",
            dpr: "dpr",
            opacity: "o",
            overlay: "l",
            underlay: "u",
            transformation: "t",
            zoom: "z",
            colorSpace: "cs",
            customFunc: "fn",
            density: "dpi",
          },
          valueMap: {
            fit: {
              fill: "fill",
              inside: "pad",
              outside: "lpad",
              cover: "fit",
              contain: "scale",
              minCover: "mfit",
              minInside: "mpad",
              thumbnail: "thumb",
              cropping: "crop",
              coverLimit: "limit",
            },
            format: { jpeg: "jpg" },
            background: (t) => We(t),
            color: (t) => We(t),
            gravity: {
              auto: "auto",
              subject: "auto:subject",
              face: "face",
              sink: "sink",
              faceCenter: "face:center",
              multipleFaces: "faces",
              multipleFacesCenter: "faces:center",
              north: "north",
              northEast: "north_east",
              northWest: "north_west",
              west: "west",
              southWest: "south_west",
              south: "south",
              southEast: "south_east",
              east: "east",
              center: "center",
            },
          },
          joinWith: ",",
          formatter: (t, e) => "".concat(t, "_").concat(e),
        }),
        Ve = { format: "auto", quality: "auto" },
        Ke = function (t) {
          var { modifiers: e = {}, baseURL: n = "/" } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = Qt(e, Ve),
            o = Xe(r),
            l = n.match(/\/image\/upload\/(.*)/);
          if ((null == l ? void 0 : l.length) >= 1) {
            var c = l[1],
              h = n.replace(c, "");
            return { url: Object(Zt.d)(h, o, c, t) };
          }
          return (
            (t = /\/image\/fetch\/?/.test(n) ? Object(Zt.b)(t) : He(t)),
            { url: Object(Zt.d)(n, o, t) }
          );
        },
        Ge = {
          screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
            "2xl": 1536,
          },
          presets: {},
          provider: "static",
          domains: [],
          alias: {},
        };
      (Ge.providers = {
        static: { provider: o, defaults: {} },
        cloudinary: {
          provider: l,
          defaults: {
            baseURL: "https://res.cloudinary.com/klandestino-ab/image/upload/",
          },
        },
      }),
        c.a.component(je.name, je),
        c.a.component(ze.name, ze),
        c.a.component("NImg", je),
        c.a.component("NPicture", ze);
      var Ye = function (t, e) {
        e("img", me(Ge, t));
      };
      var Je = "dataLayer",
        Qe = "GTM-5TLNPXT";
      var Ze = function (t, e) {
          var n = "GTM-5TLNPXT",
            r = ((t.$config && t.$config.gtm) || {}).id,
            o = (function (t, e) {
              return {
                init() {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : Qe;
                  !e[t] &&
                    window._gtm_inject &&
                    (window._gtm_inject(t), (e[t] = !0));
                },
                push(t) {
                  window[Je] || (window[Je] = []), window[Je].push(t);
                },
              };
            })(0, n ? { [n]: !0 } : {});
          r && r !== n && o.init(r), (t.$gtm = o), e("gtm", t.$gtm);
        },
        tn = n(29),
        en = n(30),
        nn = n(31);
      function rn(t, e, n, r, o, l, c) {
        try {
          var h = t[l](c),
            d = h.value;
        } catch (t) {
          return void n(t);
        }
        h.done ? e(d) : Promise.resolve(d).then(r, o);
      }
      function on(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var l = t.apply(e, n);
            function c(t) {
              rn(l, r, o, c, h, "next", t);
            }
            function h(t) {
              rn(l, r, o, c, h, "throw", t);
            }
            c(void 0);
          });
        };
      }
      function sn(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function an(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? sn(Object(source), !0).forEach(function (e) {
                ln(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : sn(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      function ln(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (input, t) {
              if ("object" != typeof input || null === input) return input;
              var e = input[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(input, t || "default");
                if ("object" != typeof n) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(input);
            })(t, "string");
            return "symbol" == typeof e ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      c.a.component(f.a.name, f.a),
        c.a.component(
          m.a.name,
          an(
            an({}, m.a),
            {},
            {
              render: (t, e) => (
                m.a._warned ||
                  ((m.a._warned = !0),
                  console.warn(
                    "<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead"
                  )),
                m.a.render(t, e)
              ),
            }
          )
        ),
        c.a.component(j.name, j),
        c.a.component("NChild", j),
        c.a.component(T.name, T),
        Object.defineProperty(c.a.prototype, "$nuxt", {
          get() {
            var t = this.$root.$options.$nuxt;
            return t || "undefined" == typeof window ? t : window.$nuxt;
          },
          configurable: !0,
        }),
        c.a.use(h.a, {
          keyName: "head",
          attribute: "data-n-head",
          ssrAttribute: "data-n-head-ssr",
          tagIDKeyName: "hid",
        });
      var un = {
        name: "page",
        mode: "out-in",
        appear: !1,
        appearClass: "appear",
        appearActiveClass: "appear-active",
        appearToClass: "appear-to",
      };
      function cn(t) {
        return hn.apply(this, arguments);
      }
      function hn() {
        return (
          (hn = on(function* (t) {
            var e,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = yield _(0, n),
              o = an(
                {
                  head: {
                    title: "Djurfakta | Rädda Djuren-klubben",
                    titleTemplate: "%s | ",
                    meta: [
                      { charset: "utf-8" },
                      {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1",
                      },
                      {
                        hid: "content-language",
                        name: "content-language",
                        content: "SV-se",
                      },
                      {
                        hid: "og:description",
                        property: "og:description",
                        content:
                          "Rädda Djuren-klubben är för barn upp till 13 år som älskar djur! I samarbete med Djurens Rätt gör vi skillnad för djuren",
                      },
                      {
                        hid: "description",
                        property: "description",
                        content:
                          "Rädda Djuren-klubben är för barn upp till 13 år som älskar djur! I samarbete med Djurens Rätt gör vi skillnad för djuren",
                      },
                      {
                        hid: "og:site_name",
                        property: "og:site_name",
                        content: "Rädda Djuren-klubben",
                      },
                      {
                        hid: "og:type",
                        property: "og:type",
                        content: "website",
                      },
                      {
                        hid: "url",
                        property: "url",
                        content: "https://www.raddadjuren.se",
                      },
                      {
                        hid: "og:title",
                        property: "og:title",
                        content: "Rädda Djuren-klubben",
                      },
                      {
                        hid: "og:title",
                        property: "og:title",
                        content: "Rädda Djuren-klubben",
                      },
                      {
                        hid: "og:image",
                        property: "og:image",
                        content: "https://www.raddadjuren.se/share.png",
                      },
                      {
                        hid: "og:image:secure_url",
                        property: "og:image:secure_url",
                        content: "https://www.raddadjuren.se/share.png",
                      },
                      {
                        hid: "og:image:alt",
                        property: "og:image:alt",
                        content: "Rädda Djuren-klubben",
                      },
                      {
                        hid: "twitter:card",
                        name: "twitter:card",
                        content: "summary_large_image",
                      },
                      {
                        hid: "twitter:site",
                        name: "twitter:site",
                        content: "@raddadjuren",
                      },
                      {
                        hid: "twitter:url",
                        name: "twitter:url",
                        content: "https://www.raddadjuren.se",
                      },
                      {
                        hid: "twitter:title",
                        name: "twitter:title",
                        content: "Rädda Djuren-klubben",
                      },
                      {
                        hid: "twitter:description",
                        name: "twitter:description",
                        content:
                          "Rädda Djuren-klubben är för barn upp till 13 år som älskar djur! I samarbete med Djurens Rätt gör vi skillnad för djuren",
                      },
                      {
                        hid: "twitter:image",
                        name: "twitter:image",
                        content: "https://www.raddadjuren.se/share.png",
                      },
                    ],
                    link: [
                      {
                        hid: "canonical",
                        rel: "canonical",
                        href: "https://www.raddadjuren.se",
                      },
                      {
                        rel: "icon",
                        type: "image/x-icon",
                        href: "/favicon.ico",
                      },
                    ],
                    style: [],
                    script: [
                      {
                        hid: "gtm-script",
                        innerHTML:
                          "if(!window._gtm_init){window._gtm_init=1;(function(w,n,d,m,e,p){w[d]=(w[d]==1||n[d]=='yes'||n[d]==1||n[m]==1||(w[e]&&w[e][p]&&w[e][p]()))?1:0})(window,navigator,'doNotTrack','msDoNotTrack','external','msTrackingProtectionEnabled');(function(w,d,s,l,x,y){w[x]={};w._gtm_inject=function(i){if(w.doNotTrack||w[x][i])return;w[x][i]=1;w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);};w[y]('GTM-5TLNPXT')})(window,document,'script','dataLayer','_gtm_ids','_gtm_inject')}",
                      },
                    ],
                    noscript: [
                      {
                        hid: "gtm-noscript",
                        pbody: !0,
                        innerHTML:
                          '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5TLNPXT&" height="0" width="0" style="display:none;visibility:hidden" title="gtm"></iframe>',
                      },
                    ],
                    __dangerouslyDisableSanitizersByTagID: {
                      "gtm-script": ["innerHTML"],
                      "gtm-noscript": ["innerHTML"],
                    },
                  },
                  router: r,
                  nuxt: {
                    defaultTransition: un,
                    transitions: [un],
                    setTransitions(t) {
                      return (
                        Array.isArray(t) || (t = [t]),
                        (t = t.map(
                          (t) =>
                            (t = t
                              ? "string" == typeof t
                                ? Object.assign({}, un, { name: t })
                                : Object.assign({}, un, t)
                              : un)
                        )),
                        (this.$options.nuxt.transitions = t),
                        t
                      );
                    },
                    err: null,
                    dateErr: null,
                    error(e) {
                      (e = e || null),
                        (o.context._errored = Boolean(e)),
                        (e = e ? Object(x.p)(e) : null);
                      var n = o.nuxt;
                      return (
                        this && (n = this.nuxt || this.$options.nuxt),
                        (n.dateErr = Date.now()),
                        (n.err = e),
                        t && (t.nuxt.error = e),
                        e
                      );
                    },
                  },
                },
                U
              ),
              l = t ? t.next : (t) => o.router.push(t);
            if (t) e = r.resolve(t.url).route;
            else {
              var path = Object(x.g)(r.options.base, r.options.mode);
              e = r.resolve(path).route;
            }
            function h(t, e) {
              if (!t) throw new Error("inject(key, value) has no key provided");
              if (void 0 === e)
                throw new Error(
                  "inject('".concat(t, "', value) has no value provided")
                );
              (o[(t = "$" + t)] = e), o.context[t] || (o.context[t] = e);
              var n = "__nuxt_" + t + "_installed__";
              c.a[n] ||
                ((c.a[n] = !0),
                c.a.use(() => {
                  Object.prototype.hasOwnProperty.call(c.a.prototype, t) ||
                    Object.defineProperty(c.a.prototype, t, {
                      get() {
                        return this.$root.$options[t];
                      },
                    });
                }));
            }
            return (
              yield Object(x.t)(o, {
                route: e,
                next: l,
                error: o.nuxt.error.bind(o),
                payload: t ? t.payload : void 0,
                req: t ? t.req : void 0,
                res: t ? t.res : void 0,
                beforeRenderFns: t ? t.beforeRenderFns : void 0,
                ssrContext: t,
              }),
              h("config", n),
              (o.context.enablePreview = function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                (o.previewData = Object.assign({}, t)), h("preview", t);
              }),
              yield Kt(o.context, h),
              yield Ye(o.context, h),
              yield Ze(o.context, h),
              "function" == typeof tn.a && (yield Object(tn.a)(o.context, h)),
              "function" == typeof en.default &&
                (yield Object(en.default)(o.context, h)),
              "function" == typeof nn.default &&
                (yield Object(nn.default)(o.context, h)),
              (o.context.enablePreview = function () {
                console.warn(
                  "You cannot call enablePreview() outside a plugin."
                );
              }),
              yield new Promise((t, e) => {
                var { route: n } = r.resolve(o.context.route.fullPath);
                if (!n.matched.length) return t();
                r.replace(o.context.route.fullPath, t, (n) => {
                  if (!n._isRouter) return e(n);
                  if (2 !== n.type) return t();
                  var l = r.afterEach(
                    (function () {
                      var e = on(function* (e, n) {
                        (o.context.route = yield Object(x.k)(e)),
                          (o.context.params = e.params || {}),
                          (o.context.query = e.query || {}),
                          l(),
                          t();
                      });
                      return function (t, n) {
                        return e.apply(this, arguments);
                      };
                    })()
                  );
                });
              }),
              { app: o, router: r }
            );
          })),
          hn.apply(this, arguments)
        );
      }
    },
    function (t, e, n) {
      var r, o;
      !(function (l, c) {
        (r = [n(158)]),
          (o = function (t) {
            return (function (t, e) {
              "use strict";
              var n = {
                  extend: function (a, b) {
                    for (var t in b) a[t] = b[t];
                    return a;
                  },
                  modulo: function (t, div) {
                    return ((t % div) + div) % div;
                  },
                },
                r = Array.prototype.slice;
              (n.makeArray = function (t) {
                return Array.isArray(t)
                  ? t
                  : null == t
                  ? []
                  : "object" == typeof t && "number" == typeof t.length
                  ? r.call(t)
                  : [t];
              }),
                (n.removeFrom = function (t, e) {
                  var n = t.indexOf(e);
                  -1 != n && t.splice(n, 1);
                }),
                (n.getParent = function (t, n) {
                  for (; t.parentNode && t != document.body; )
                    if (((t = t.parentNode), e(t, n))) return t;
                }),
                (n.getQueryElement = function (t) {
                  return "string" == typeof t ? document.querySelector(t) : t;
                }),
                (n.handleEvent = function (t) {
                  var e = "on" + t.type;
                  this[e] && this[e](t);
                }),
                (n.filterFindElements = function (t, r) {
                  t = n.makeArray(t);
                  var o = [];
                  return (
                    t.forEach(function (t) {
                      if (t instanceof HTMLElement)
                        if (r) {
                          e(t, r) && o.push(t);
                          for (
                            var n = t.querySelectorAll(r), i = 0;
                            i < n.length;
                            i++
                          )
                            o.push(n[i]);
                        } else o.push(t);
                    }),
                    o
                  );
                }),
                (n.debounceMethod = function (t, e, n) {
                  n = n || 100;
                  var r = t.prototype[e],
                    o = e + "Timeout";
                  t.prototype[e] = function () {
                    var t = this[o];
                    clearTimeout(t);
                    var e = arguments,
                      l = this;
                    this[o] = setTimeout(function () {
                      r.apply(l, e), delete l[o];
                    }, n);
                  };
                }),
                (n.docReady = function (t) {
                  var e = document.readyState;
                  "complete" == e || "interactive" == e
                    ? setTimeout(t)
                    : document.addEventListener("DOMContentLoaded", t);
                }),
                (n.toDashed = function (t) {
                  return t
                    .replace(/(.)([A-Z])/g, function (t, e, n) {
                      return e + "-" + n;
                    })
                    .toLowerCase();
                });
              var o = t.console;
              return (
                (n.htmlInit = function (e, r) {
                  n.docReady(function () {
                    var l = n.toDashed(r),
                      c = "data-" + l,
                      h = document.querySelectorAll("[" + c + "]"),
                      d = document.querySelectorAll(".js-" + l),
                      f = n.makeArray(h).concat(n.makeArray(d)),
                      v = c + "-options",
                      m = t.jQuery;
                    f.forEach(function (t) {
                      var n,
                        l = t.getAttribute(c) || t.getAttribute(v);
                      try {
                        n = l && JSON.parse(l);
                      } catch (e) {
                        return void (
                          o &&
                          o.error(
                            "Error parsing " +
                              c +
                              " on " +
                              t.className +
                              ": " +
                              e
                          )
                        );
                      }
                      var h = new e(t, n);
                      m && m.data(t, r, h);
                    });
                  });
                }),
                n
              );
            })(l, t);
          }.apply(e, r)),
          void 0 === o || (t.exports = o);
      })(window);
    },
    ,
    function (t, e, n) {
      var r, o;
      !(function (l, c) {
        (r = [n(23), n(66), n(8), n(159), n(160), n(161)]),
          (o = function (t, e, n, r, o, c) {
            return (function (t, e, n, r, o, l, c) {
              "use strict";
              var h = t.jQuery,
                d = t.getComputedStyle,
                f = t.console;
              function v(t, e) {
                for (t = r.makeArray(t); t.length; ) e.appendChild(t.shift());
              }
              var m = 0,
                y = {};
              function w(element, t) {
                var e = r.getQueryElement(element);
                if (e) {
                  if (((this.element = e), this.element.flickityGUID)) {
                    var n = y[this.element.flickityGUID];
                    return n && n.option(t), n;
                  }
                  h && (this.$element = h(this.element)),
                    (this.options = r.extend({}, this.constructor.defaults)),
                    this.option(t),
                    this._create();
                } else
                  f && f.error("Bad element for Flickity: " + (e || element));
              }
              (w.defaults = {
                accessibility: !0,
                cellAlign: "center",
                freeScrollFriction: 0.075,
                friction: 0.28,
                namespaceJQueryEvents: !0,
                percentPosition: !0,
                resize: !0,
                selectedAttraction: 0.025,
                setGallerySize: !0,
              }),
                (w.createMethods = []);
              var x = w.prototype;
              r.extend(x, e.prototype),
                (x._create = function () {
                  var e = (this.guid = ++m);
                  for (var n in ((this.element.flickityGUID = e),
                  (y[e] = this),
                  (this.selectedIndex = 0),
                  (this.restingFrames = 0),
                  (this.x = 0),
                  (this.velocity = 0),
                  (this.originSide = this.options.rightToLeft
                    ? "right"
                    : "left"),
                  (this.viewport = document.createElement("div")),
                  (this.viewport.className = "flickity-viewport"),
                  this._createSlider(),
                  (this.options.resize || this.options.watchCSS) &&
                    t.addEventListener("resize", this),
                  this.options.on)) {
                    var r = this.options.on[n];
                    this.on(n, r);
                  }
                  w.createMethods.forEach(function (t) {
                    this[t]();
                  }, this),
                    this.options.watchCSS ? this.watchCSS() : this.activate();
                }),
                (x.option = function (t) {
                  r.extend(this.options, t);
                }),
                (x.activate = function () {
                  this.isActive ||
                    ((this.isActive = !0),
                    this.element.classList.add("flickity-enabled"),
                    this.options.rightToLeft &&
                      this.element.classList.add("flickity-rtl"),
                    this.getSize(),
                    v(
                      this._filterFindCellElements(this.element.children),
                      this.slider
                    ),
                    this.viewport.appendChild(this.slider),
                    this.element.appendChild(this.viewport),
                    this.reloadCells(),
                    this.options.accessibility &&
                      ((this.element.tabIndex = 0),
                      this.element.addEventListener("keydown", this)),
                    this.emitEvent("activate"),
                    this.selectInitialIndex(),
                    (this.isInitActivated = !0),
                    this.dispatchEvent("ready"));
                }),
                (x._createSlider = function () {
                  var t = document.createElement("div");
                  (t.className = "flickity-slider"),
                    (t.style[this.originSide] = 0),
                    (this.slider = t);
                }),
                (x._filterFindCellElements = function (t) {
                  return r.filterFindElements(t, this.options.cellSelector);
                }),
                (x.reloadCells = function () {
                  (this.cells = this._makeCells(this.slider.children)),
                    this.positionCells(),
                    this._getWrapShiftCells(),
                    this.setGallerySize();
                }),
                (x._makeCells = function (t) {
                  return this._filterFindCellElements(t).map(function (t) {
                    return new o(t, this);
                  }, this);
                }),
                (x.getLastCell = function () {
                  return this.cells[this.cells.length - 1];
                }),
                (x.getLastSlide = function () {
                  return this.slides[this.slides.length - 1];
                }),
                (x.positionCells = function () {
                  this._sizeCells(this.cells), this._positionCells(0);
                }),
                (x._positionCells = function (t) {
                  (t = t || 0),
                    (this.maxCellHeight = (t && this.maxCellHeight) || 0);
                  var e = 0;
                  if (t > 0) {
                    var n = this.cells[t - 1];
                    e = n.x + n.size.outerWidth;
                  }
                  for (var r = this.cells.length, i = t; i < r; i++) {
                    var o = this.cells[i];
                    o.setPosition(e),
                      (e += o.size.outerWidth),
                      (this.maxCellHeight = Math.max(
                        o.size.outerHeight,
                        this.maxCellHeight
                      ));
                  }
                  (this.slideableWidth = e),
                    this.updateSlides(),
                    this._containSlides(),
                    (this.slidesWidth = r
                      ? this.getLastSlide().target - this.slides[0].target
                      : 0);
                }),
                (x._sizeCells = function (t) {
                  t.forEach(function (t) {
                    t.getSize();
                  });
                }),
                (x.updateSlides = function () {
                  if (((this.slides = []), this.cells.length)) {
                    var t = new l(this);
                    this.slides.push(t);
                    var e =
                        "left" == this.originSide
                          ? "marginRight"
                          : "marginLeft",
                      n = this._getCanCellFit();
                    this.cells.forEach(function (r, i) {
                      if (t.cells.length) {
                        var o =
                          t.outerWidth -
                          t.firstMargin +
                          (r.size.outerWidth - r.size[e]);
                        n.call(this, i, o) ||
                          (t.updateTarget(),
                          (t = new l(this)),
                          this.slides.push(t)),
                          t.addCell(r);
                      } else t.addCell(r);
                    }, this),
                      t.updateTarget(),
                      this.updateSelectedSlide();
                  }
                }),
                (x._getCanCellFit = function () {
                  var t = this.options.groupCells;
                  if (!t)
                    return function () {
                      return !1;
                    };
                  if ("number" == typeof t) {
                    var e = parseInt(t, 10);
                    return function (i) {
                      return i % e != 0;
                    };
                  }
                  var n = "string" == typeof t && t.match(/^(\d+)%$/),
                    r = n ? parseInt(n[1], 10) / 100 : 1;
                  return function (i, t) {
                    return t <= (this.size.innerWidth + 1) * r;
                  };
                }),
                (x._init = x.reposition =
                  function () {
                    this.positionCells(), this.positionSliderAtSelected();
                  }),
                (x.getSize = function () {
                  (this.size = n(this.element)),
                    this.setCellAlign(),
                    (this.cursorPosition =
                      this.size.innerWidth * this.cellAlign);
                });
              var S = {
                center: { left: 0.5, right: 0.5 },
                left: { left: 0, right: 1 },
                right: { right: 0, left: 1 },
              };
              (x.setCellAlign = function () {
                var t = S[this.options.cellAlign];
                this.cellAlign = t
                  ? t[this.originSide]
                  : this.options.cellAlign;
              }),
                (x.setGallerySize = function () {
                  if (this.options.setGallerySize) {
                    var t =
                      this.options.adaptiveHeight && this.selectedSlide
                        ? this.selectedSlide.height
                        : this.maxCellHeight;
                    this.viewport.style.height = t + "px";
                  }
                }),
                (x._getWrapShiftCells = function () {
                  if (this.options.wrapAround) {
                    this._unshiftCells(this.beforeShiftCells),
                      this._unshiftCells(this.afterShiftCells);
                    var t = this.cursorPosition,
                      e = this.cells.length - 1;
                    (this.beforeShiftCells = this._getGapCells(t, e, -1)),
                      (t = this.size.innerWidth - this.cursorPosition),
                      (this.afterShiftCells = this._getGapCells(t, 0, 1));
                  }
                }),
                (x._getGapCells = function (t, e, n) {
                  for (var r = []; t > 0; ) {
                    var o = this.cells[e];
                    if (!o) break;
                    r.push(o), (e += n), (t -= o.size.outerWidth);
                  }
                  return r;
                }),
                (x._containSlides = function () {
                  if (
                    this.options.contain &&
                    !this.options.wrapAround &&
                    this.cells.length
                  ) {
                    var t = this.options.rightToLeft,
                      e = t ? "marginRight" : "marginLeft",
                      n = t ? "marginLeft" : "marginRight",
                      r = this.slideableWidth - this.getLastCell().size[n],
                      o = r < this.size.innerWidth,
                      l = this.cursorPosition + this.cells[0].size[e],
                      c = r - this.size.innerWidth * (1 - this.cellAlign);
                    this.slides.forEach(function (t) {
                      o
                        ? (t.target = r * this.cellAlign)
                        : ((t.target = Math.max(t.target, l)),
                          (t.target = Math.min(t.target, c)));
                    }, this);
                  }
                }),
                (x.dispatchEvent = function (t, e, n) {
                  var r = e ? [e].concat(n) : n;
                  if ((this.emitEvent(t, r), h && this.$element)) {
                    var o = (t += this.options.namespaceJQueryEvents
                      ? ".flickity"
                      : "");
                    if (e) {
                      var l = new h.Event(e);
                      (l.type = t), (o = l);
                    }
                    this.$element.trigger(o, n);
                  }
                }),
                (x.select = function (t, e, n) {
                  if (
                    this.isActive &&
                    ((t = parseInt(t, 10)),
                    this._wrapSelect(t),
                    (this.options.wrapAround || e) &&
                      (t = r.modulo(t, this.slides.length)),
                    this.slides[t])
                  ) {
                    var o = this.selectedIndex;
                    (this.selectedIndex = t),
                      this.updateSelectedSlide(),
                      n
                        ? this.positionSliderAtSelected()
                        : this.startAnimation(),
                      this.options.adaptiveHeight && this.setGallerySize(),
                      this.dispatchEvent("select", null, [t]),
                      t != o && this.dispatchEvent("change", null, [t]),
                      this.dispatchEvent("cellSelect");
                  }
                }),
                (x._wrapSelect = function (t) {
                  var e = this.slides.length;
                  if (!(this.options.wrapAround && e > 1)) return t;
                  var n = r.modulo(t, e),
                    o = Math.abs(n - this.selectedIndex),
                    l = Math.abs(n + e - this.selectedIndex),
                    c = Math.abs(n - e - this.selectedIndex);
                  !this.isDragSelect && l < o
                    ? (t += e)
                    : !this.isDragSelect && c < o && (t -= e),
                    t < 0
                      ? (this.x -= this.slideableWidth)
                      : t >= e && (this.x += this.slideableWidth);
                }),
                (x.previous = function (t, e) {
                  this.select(this.selectedIndex - 1, t, e);
                }),
                (x.next = function (t, e) {
                  this.select(this.selectedIndex + 1, t, e);
                }),
                (x.updateSelectedSlide = function () {
                  var t = this.slides[this.selectedIndex];
                  t &&
                    (this.unselectSelectedSlide(),
                    (this.selectedSlide = t),
                    t.select(),
                    (this.selectedCells = t.cells),
                    (this.selectedElements = t.getCellElements()),
                    (this.selectedCell = t.cells[0]),
                    (this.selectedElement = this.selectedElements[0]));
                }),
                (x.unselectSelectedSlide = function () {
                  this.selectedSlide && this.selectedSlide.unselect();
                }),
                (x.selectInitialIndex = function () {
                  var t = this.options.initialIndex;
                  if (this.isInitActivated)
                    this.select(this.selectedIndex, !1, !0);
                  else {
                    if (t && "string" == typeof t)
                      if (this.queryCell(t))
                        return void this.selectCell(t, !1, !0);
                    var e = 0;
                    t && this.slides[t] && (e = t), this.select(e, !1, !0);
                  }
                }),
                (x.selectCell = function (t, e, n) {
                  var r = this.queryCell(t);
                  if (r) {
                    var o = this.getCellSlideIndex(r);
                    this.select(o, e, n);
                  }
                }),
                (x.getCellSlideIndex = function (t) {
                  for (var i = 0; i < this.slides.length; i++) {
                    if (-1 != this.slides[i].cells.indexOf(t)) return i;
                  }
                }),
                (x.getCell = function (t) {
                  for (var i = 0; i < this.cells.length; i++) {
                    var e = this.cells[i];
                    if (e.element == t) return e;
                  }
                }),
                (x.getCells = function (t) {
                  t = r.makeArray(t);
                  var e = [];
                  return (
                    t.forEach(function (t) {
                      var n = this.getCell(t);
                      n && e.push(n);
                    }, this),
                    e
                  );
                }),
                (x.getCellElements = function () {
                  return this.cells.map(function (t) {
                    return t.element;
                  });
                }),
                (x.getParentCell = function (t) {
                  var e = this.getCell(t);
                  return (
                    e ||
                    ((t = r.getParent(t, ".flickity-slider > *")),
                    this.getCell(t))
                  );
                }),
                (x.getAdjacentCellElements = function (t, e) {
                  if (!t) return this.selectedSlide.getCellElements();
                  e = void 0 === e ? this.selectedIndex : e;
                  var n = this.slides.length;
                  if (1 + 2 * t >= n) return this.getCellElements();
                  for (var o = [], i = e - t; i <= e + t; i++) {
                    var l = this.options.wrapAround ? r.modulo(i, n) : i,
                      c = this.slides[l];
                    c && (o = o.concat(c.getCellElements()));
                  }
                  return o;
                }),
                (x.queryCell = function (t) {
                  if ("number" == typeof t) return this.cells[t];
                  if ("string" == typeof t) {
                    if (t.match(/^[#.]?[\d/]/)) return;
                    t = this.element.querySelector(t);
                  }
                  return this.getCell(t);
                }),
                (x.uiChange = function () {
                  this.emitEvent("uiChange");
                }),
                (x.childUIPointerDown = function (t) {
                  "touchstart" != t.type && t.preventDefault(), this.focus();
                }),
                (x.onresize = function () {
                  this.watchCSS(), this.resize();
                }),
                r.debounceMethod(w, "onresize", 150),
                (x.resize = function () {
                  if (this.isActive && !this.isAnimating && !this.isDragging) {
                    this.getSize(),
                      this.options.wrapAround &&
                        (this.x = r.modulo(this.x, this.slideableWidth)),
                      this.positionCells(),
                      this._getWrapShiftCells(),
                      this.setGallerySize(),
                      this.emitEvent("resize");
                    var t = this.selectedElements && this.selectedElements[0];
                    this.selectCell(t, !1, !0);
                  }
                }),
                (x.watchCSS = function () {
                  this.options.watchCSS &&
                    (-1 != d(this.element, ":after").content.indexOf("flickity")
                      ? this.activate()
                      : this.deactivate());
                }),
                (x.onkeydown = function (t) {
                  var e =
                    document.activeElement &&
                    document.activeElement != this.element;
                  if (this.options.accessibility && !e) {
                    var n = w.keyboardHandlers[t.keyCode];
                    n && n.call(this);
                  }
                }),
                (w.keyboardHandlers = {
                  37: function () {
                    var t = this.options.rightToLeft ? "next" : "previous";
                    this.uiChange(), this[t]();
                  },
                  39: function () {
                    var t = this.options.rightToLeft ? "previous" : "next";
                    this.uiChange(), this[t]();
                  },
                }),
                (x.focus = function () {
                  var e = t.pageYOffset;
                  this.element.focus({ preventScroll: !0 }),
                    t.pageYOffset != e && t.scrollTo(t.pageXOffset, e);
                }),
                (x.deactivate = function () {
                  this.isActive &&
                    (this.element.classList.remove("flickity-enabled"),
                    this.element.classList.remove("flickity-rtl"),
                    this.unselectSelectedSlide(),
                    this.cells.forEach(function (t) {
                      t.destroy();
                    }),
                    this.element.removeChild(this.viewport),
                    v(this.slider.children, this.element),
                    this.options.accessibility &&
                      (this.element.removeAttribute("tabIndex"),
                      this.element.removeEventListener("keydown", this)),
                    (this.isActive = !1),
                    this.emitEvent("deactivate"));
                }),
                (x.destroy = function () {
                  this.deactivate(),
                    t.removeEventListener("resize", this),
                    this.allOff(),
                    this.emitEvent("destroy"),
                    h &&
                      this.$element &&
                      h.removeData(this.element, "flickity"),
                    delete this.element.flickityGUID,
                    delete y[this.guid];
                }),
                r.extend(x, c),
                (w.data = function (t) {
                  var e = (t = r.getQueryElement(t)) && t.flickityGUID;
                  return e && y[e];
                }),
                r.htmlInit(w, "flickity"),
                h && h.bridget && h.bridget("flickity", w);
              return (
                (w.setJQuery = function (t) {
                  h = t;
                }),
                (w.Cell = o),
                (w.Slide = l),
                w
              );
            })(l, t, e, n, r, o, c);
          }.apply(e, r)),
          void 0 === o || (t.exports = o);
      })(window);
    },
    ,
    function (t, e, n) {
      "use strict";
      var r = n(22),
        o = n(56),
        l = n(58);
      t.exports = function (t) {
        var e,
          n,
          c = t.space,
          h = t.mustUseProperty || [],
          d = t.attributes || {},
          f = t.properties,
          v = t.transform,
          m = {},
          y = {};
        for (e in f)
          (n = new l(e, v(d, e), f[e], c)),
            -1 !== h.indexOf(e) && (n.mustUseProperty = !0),
            (m[e] = n),
            (y[r(e)] = e),
            (y[r(n.attribute)] = e);
        return new o(m, y, c);
      };
    },
    function (t, e, n) {
      "use strict";
      var r = {
        name: "NoSsr",
        functional: !0,
        props: {
          placeholder: String,
          placeholderTag: { type: String, default: "div" },
        },
        render: function (t, e) {
          var n = e.parent,
            r = e.slots,
            o = e.props,
            l = r(),
            c = l.default;
          void 0 === c && (c = []);
          var h = l.placeholder;
          return n._isMounted
            ? c
            : (n.$once("hook:mounted", function () {
                n.$forceUpdate();
              }),
              o.placeholderTag && (o.placeholder || h)
                ? t(
                    o.placeholderTag,
                    { class: ["no-ssr-placeholder"] },
                    o.placeholder || h
                  )
                : c.length > 0
                ? c.map(function () {
                    return t(!1);
                  })
                : t(!1));
        },
      };
      t.exports = r;
    },
    ,
    ,
    function (t, e, n) {
      "use strict";
      var r = 0;
      function o() {
        return Math.pow(2, ++r);
      }
      (e.boolean = o()),
        (e.booleanish = o()),
        (e.overloadedBoolean = o()),
        (e.number = o()),
        (e.spaceSeparated = o()),
        (e.commaSeparated = o()),
        (e.commaOrSpaceSeparated = o());
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        o =
          window.requestIdleCallback ||
          function (t) {
            var e = Date.now();
            return setTimeout(function () {
              t({
                didTimeout: !1,
                timeRemaining: () => Math.max(0, 50 - (Date.now() - e)),
              });
            }, 1);
          },
        l =
          window.cancelIdleCallback ||
          function (t) {
            clearTimeout(t);
          },
        c =
          window.IntersectionObserver &&
          new window.IntersectionObserver((t) => {
            t.forEach((t) => {
              var { intersectionRatio: e, target: link } = t;
              e <= 0 || !link.__prefetch || link.__prefetch();
            });
          });
      e.a = {
        name: "NuxtLink",
        extends: r.a.component("RouterLink"),
        props: {
          prefetch: { type: Boolean, default: !0 },
          noPrefetch: { type: Boolean, default: !1 },
        },
        mounted() {
          this.prefetch &&
            !this.noPrefetch &&
            (this.handleId = o(this.observe, { timeout: 2e3 }));
        },
        beforeDestroy() {
          l(this.handleId),
            this.__observed &&
              (c.unobserve(this.$el), delete this.$el.__prefetch);
        },
        methods: {
          observe() {
            c &&
              this.shouldPrefetch() &&
              ((this.$el.__prefetch = this.prefetchLink.bind(this)),
              c.observe(this.$el),
              (this.__observed = !0));
          },
          shouldPrefetch() {
            var t = this.$router.resolve(this.to, this.$route, this.append);
            return t.resolved.matched
              .map((t) => t.components.default)
              .filter(
                (e) =>
                  t.href ||
                  ("function" == typeof e && !e.options && !e.__prefetched)
              ).length;
          },
          canPrefetch() {
            var t = navigator.connection;
            return !(
              this.$nuxt.isOffline ||
              (t && ((t.effectiveType || "").includes("2g") || t.saveData))
            );
          },
          getPrefetchComponents() {
            return this.$router
              .resolve(this.to, this.$route, this.append)
              .resolved.matched.map((t) => t.components.default)
              .filter(
                (t) => "function" == typeof t && !t.options && !t.__prefetched
              );
          },
          prefetchLink() {
            if (this.canPrefetch()) {
              c.unobserve(this.$el);
              var t = this.getPrefetchComponents();
              for (var e of t) {
                var n = e();
                n instanceof Promise && n.catch(() => {}),
                  (e.__prefetched = !0);
              }
              if (!this.$root.isPreview) {
                var { href: r } = this.$router.resolve(
                  this.to,
                  this.$route,
                  this.append
                );
                this.$nuxt && this.$nuxt.fetchPayload(r, !0).catch(() => {});
              }
            }
          },
        },
      };
    },
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      t.exports = function (t) {
        return t.toLowerCase();
      };
    },
    function (t, e, n) {
      var r, o;
      "undefined" != typeof window && window,
        void 0 ===
          (o =
            "function" ==
            typeof (r = function () {
              "use strict";
              function t() {}
              var e = t.prototype;
              return (
                (e.on = function (t, e) {
                  if (t && e) {
                    var n = (this._events = this._events || {}),
                      r = (n[t] = n[t] || []);
                    return -1 == r.indexOf(e) && r.push(e), this;
                  }
                }),
                (e.once = function (t, e) {
                  if (t && e) {
                    this.on(t, e);
                    var n = (this._onceEvents = this._onceEvents || {});
                    return ((n[t] = n[t] || {})[e] = !0), this;
                  }
                }),
                (e.off = function (t, e) {
                  var n = this._events && this._events[t];
                  if (n && n.length) {
                    var r = n.indexOf(e);
                    return -1 != r && n.splice(r, 1), this;
                  }
                }),
                (e.emitEvent = function (t, e) {
                  var n = this._events && this._events[t];
                  if (n && n.length) {
                    (n = n.slice(0)), (e = e || []);
                    for (
                      var r = this._onceEvents && this._onceEvents[t], i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i];
                      r && r[o] && (this.off(t, o), delete r[o]),
                        o.apply(this, e);
                    }
                    return this;
                  }
                }),
                (e.allOff = function () {
                  delete this._events, delete this._onceEvents;
                }),
                t
              );
            })
              ? r.call(e, n, e, t)
              : r) || (t.exports = o);
    },
    function (t, e, n) {
      var r, o;
      !(function (l, c) {
        (r = [n(23)]),
          (o = function (t) {
            return (function (t, e) {
              "use strict";
              function n() {}
              function r() {}
              var o = (r.prototype = Object.create(e.prototype));
              (o.bindStartEvent = function (t) {
                this._bindStartEvent(t, !0);
              }),
                (o.unbindStartEvent = function (t) {
                  this._bindStartEvent(t, !1);
                }),
                (o._bindStartEvent = function (e, n) {
                  var r = (n = void 0 === n || n)
                      ? "addEventListener"
                      : "removeEventListener",
                    o = "mousedown";
                  "ontouchstart" in t
                    ? (o = "touchstart")
                    : t.PointerEvent && (o = "pointerdown"),
                    e[r](o, this);
                }),
                (o.handleEvent = function (t) {
                  var e = "on" + t.type;
                  this[e] && this[e](t);
                }),
                (o.getTouch = function (t) {
                  for (var i = 0; i < t.length; i++) {
                    var e = t[i];
                    if (e.identifier == this.pointerIdentifier) return e;
                  }
                }),
                (o.onmousedown = function (t) {
                  var button = t.button;
                  (button && 0 !== button && 1 !== button) ||
                    this._pointerDown(t, t);
                }),
                (o.ontouchstart = function (t) {
                  this._pointerDown(t, t.changedTouches[0]);
                }),
                (o.onpointerdown = function (t) {
                  this._pointerDown(t, t);
                }),
                (o._pointerDown = function (t, e) {
                  t.button ||
                    this.isPointerDown ||
                    ((this.isPointerDown = !0),
                    (this.pointerIdentifier =
                      void 0 !== e.pointerId ? e.pointerId : e.identifier),
                    this.pointerDown(t, e));
                }),
                (o.pointerDown = function (t, e) {
                  this._bindPostStartEvents(t),
                    this.emitEvent("pointerDown", [t, e]);
                });
              var l = {
                mousedown: ["mousemove", "mouseup"],
                touchstart: ["touchmove", "touchend", "touchcancel"],
                pointerdown: ["pointermove", "pointerup", "pointercancel"],
              };
              return (
                (o._bindPostStartEvents = function (e) {
                  if (e) {
                    var n = l[e.type];
                    n.forEach(function (e) {
                      t.addEventListener(e, this);
                    }, this),
                      (this._boundPointerEvents = n);
                  }
                }),
                (o._unbindPostStartEvents = function () {
                  this._boundPointerEvents &&
                    (this._boundPointerEvents.forEach(function (e) {
                      t.removeEventListener(e, this);
                    }, this),
                    delete this._boundPointerEvents);
                }),
                (o.onmousemove = function (t) {
                  this._pointerMove(t, t);
                }),
                (o.onpointermove = function (t) {
                  t.pointerId == this.pointerIdentifier &&
                    this._pointerMove(t, t);
                }),
                (o.ontouchmove = function (t) {
                  var e = this.getTouch(t.changedTouches);
                  e && this._pointerMove(t, e);
                }),
                (o._pointerMove = function (t, e) {
                  this.pointerMove(t, e);
                }),
                (o.pointerMove = function (t, e) {
                  this.emitEvent("pointerMove", [t, e]);
                }),
                (o.onmouseup = function (t) {
                  this._pointerUp(t, t);
                }),
                (o.onpointerup = function (t) {
                  t.pointerId == this.pointerIdentifier &&
                    this._pointerUp(t, t);
                }),
                (o.ontouchend = function (t) {
                  var e = this.getTouch(t.changedTouches);
                  e && this._pointerUp(t, e);
                }),
                (o._pointerUp = function (t, e) {
                  this._pointerDone(), this.pointerUp(t, e);
                }),
                (o.pointerUp = function (t, e) {
                  this.emitEvent("pointerUp", [t, e]);
                }),
                (o._pointerDone = function () {
                  this._pointerReset(),
                    this._unbindPostStartEvents(),
                    this.pointerDone();
                }),
                (o._pointerReset = function () {
                  (this.isPointerDown = !1), delete this.pointerIdentifier;
                }),
                (o.pointerDone = n),
                (o.onpointercancel = function (t) {
                  t.pointerId == this.pointerIdentifier &&
                    this._pointerCancel(t, t);
                }),
                (o.ontouchcancel = function (t) {
                  var e = this.getTouch(t.changedTouches);
                  e && this._pointerCancel(t, e);
                }),
                (o._pointerCancel = function (t, e) {
                  this._pointerDone(), this.pointerCancel(t, e);
                }),
                (o.pointerCancel = function (t, e) {
                  this.emitEvent("pointerCancel", [t, e]);
                }),
                (r.getPointerPoint = function (t) {
                  return { x: t.pageX, y: t.pageY };
                }),
                r
              );
            })(l, t);
          }.apply(e, r)),
          void 0 === o || (t.exports = o);
      })(window);
    },
    function (t, e, n) {
      "use strict";
      e.a = {};
    },
    function (t, e, n) {
      "use strict";
      var r = {
        name: "ClientOnly",
        functional: !0,
        props: {
          placeholder: String,
          placeholderTag: { type: String, default: "div" },
        },
        render: function (t, e) {
          var n = e.parent,
            r = e.slots,
            o = e.props,
            l = r(),
            c = l.default;
          void 0 === c && (c = []);
          var h = l.placeholder;
          return n._isMounted
            ? c
            : (n.$once("hook:mounted", function () {
                n.$forceUpdate();
              }),
              o.placeholderTag && (o.placeholder || h)
                ? t(
                    o.placeholderTag,
                    { class: ["client-only-placeholder"] },
                    o.placeholder || h
                  )
                : c.length > 0
                ? c.map(function () {
                    return t(!1);
                  })
                : t(!1));
        },
      };
      t.exports = r;
    },
    ,
    function (t, e, n) {
      "use strict";
      (e.html = n(151)),
        (e.svg = n(154)),
        (e.normalize = n(22)),
        (e.find = n(156));
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      var content = n(103);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("9cfca31c", content, !0, { sourceMap: !1 });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      var r = n(152),
        o = n(56);
      t.exports = function (t) {
        var e,
          n,
          l = t.length,
          c = [],
          h = [],
          d = -1;
        for (; ++d < l; )
          (e = t[d]), c.push(e.property), h.push(e.normal), (n = e.space);
        return new o(r.apply(null, c), r.apply(null, h), n);
      };
    },
    function (t, e, n) {
      "use strict";
      t.exports = o;
      var r = o.prototype;
      function o(t, e, n) {
        (this.property = t), (this.normal = e), n && (this.space = n);
      }
      (r.space = null), (r.normal = {}), (r.property = {});
    },
    function (t, e, n) {
      "use strict";
      var r = n(12);
      t.exports = r({
        space: "xlink",
        transform: function (t, e) {
          return "xlink:" + e.slice(5).toLowerCase();
        },
        properties: {
          xLinkActuate: null,
          xLinkArcRole: null,
          xLinkHref: null,
          xLinkRole: null,
          xLinkShow: null,
          xLinkTitle: null,
          xLinkType: null,
        },
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(59),
        o = n(16);
      (t.exports = h), (h.prototype = new r()), (h.prototype.defined = !0);
      var l = [
          "boolean",
          "booleanish",
          "overloadedBoolean",
          "number",
          "commaSeparated",
          "spaceSeparated",
          "commaOrSpaceSeparated",
        ],
        c = l.length;
      function h(t, e, mask, n) {
        var h,
          d = -1;
        for (mark(this, "space", n), r.call(this, t, e); ++d < c; )
          mark(this, (h = l[d]), (mask & o[h]) === o[h]);
      }
      function mark(t, e, n) {
        n && (t[e] = n);
      }
    },
    function (t, e, n) {
      "use strict";
      t.exports = o;
      var r = o.prototype;
      function o(t, e) {
        (this.property = t), (this.attribute = e);
      }
      (r.space = null),
        (r.attribute = null),
        (r.property = null),
        (r.boolean = !1),
        (r.booleanish = !1),
        (r.overloadedBoolean = !1),
        (r.number = !1),
        (r.commaSeparated = !1),
        (r.spaceSeparated = !1),
        (r.commaOrSpaceSeparated = !1),
        (r.mustUseProperty = !1),
        (r.defined = !1);
    },
    function (t, e, n) {
      "use strict";
      var r = n(12);
      t.exports = r({
        space: "xml",
        transform: function (t, e) {
          return "xml:" + e.slice(3).toLowerCase();
        },
        properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(12),
        o = n(62);
      t.exports = r({
        space: "xmlns",
        attributes: { xmlnsxlink: "xmlns:xlink" },
        transform: o,
        properties: { xmlns: null, xmlnsXLink: null },
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(63);
      t.exports = function (t, e) {
        return r(t, e.toLowerCase());
      };
    },
    function (t, e, n) {
      "use strict";
      t.exports = function (t, e) {
        return e in t ? t[e] : e;
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(16),
        o = n(12),
        l = r.booleanish,
        c = r.number,
        h = r.spaceSeparated;
      t.exports = o({
        transform: function (t, e) {
          return "role" === e ? e : "aria-" + e.slice(4).toLowerCase();
        },
        properties: {
          ariaActiveDescendant: null,
          ariaAtomic: l,
          ariaAutoComplete: null,
          ariaBusy: l,
          ariaChecked: l,
          ariaColCount: c,
          ariaColIndex: c,
          ariaColSpan: c,
          ariaControls: h,
          ariaCurrent: null,
          ariaDescribedBy: h,
          ariaDetails: null,
          ariaDisabled: l,
          ariaDropEffect: h,
          ariaErrorMessage: null,
          ariaExpanded: l,
          ariaFlowTo: h,
          ariaGrabbed: l,
          ariaHasPopup: null,
          ariaHidden: l,
          ariaInvalid: null,
          ariaKeyShortcuts: null,
          ariaLabel: null,
          ariaLabelledBy: h,
          ariaLevel: c,
          ariaLive: null,
          ariaModal: l,
          ariaMultiLine: l,
          ariaMultiSelectable: l,
          ariaOrientation: null,
          ariaOwns: h,
          ariaPlaceholder: null,
          ariaPosInSet: c,
          ariaPressed: l,
          ariaReadOnly: l,
          ariaRelevant: null,
          ariaRequired: l,
          ariaRoleDescription: h,
          ariaRowCount: c,
          ariaRowIndex: c,
          ariaRowSpan: c,
          ariaSelected: l,
          ariaSetSize: c,
          ariaSort: null,
          ariaValueMax: c,
          ariaValueMin: c,
          ariaValueNow: c,
          ariaValueText: null,
          role: null,
        },
      });
    },
    function (t, e, n) {
      var r, o, l;
      window,
        (o = [n(10), n(162), n(164), n(165), n(166), n(167), n(168)]),
        void 0 ===
          (l =
            "function" ==
            typeof (r = function (t) {
              return t;
            })
              ? r.apply(e, o)
              : r) || (t.exports = l);
    },
    function (t, e, n) {
      var r, o;
      window,
        void 0 ===
          (o =
            "function" ==
            typeof (r = function () {
              "use strict";
              function t(t) {
                var e = parseFloat(t);
                return -1 == t.indexOf("%") && !isNaN(e) && e;
              }
              function e() {}
              var n =
                  "undefined" == typeof console
                    ? e
                    : function (t) {
                        console.error(t);
                      },
                r = [
                  "paddingLeft",
                  "paddingRight",
                  "paddingTop",
                  "paddingBottom",
                  "marginLeft",
                  "marginRight",
                  "marginTop",
                  "marginBottom",
                  "borderLeftWidth",
                  "borderRightWidth",
                  "borderTopWidth",
                  "borderBottomWidth",
                ],
                o = r.length;
              function l() {
                for (
                  var t = {
                      width: 0,
                      height: 0,
                      innerWidth: 0,
                      innerHeight: 0,
                      outerWidth: 0,
                      outerHeight: 0,
                    },
                    i = 0;
                  i < o;
                  i++
                )
                  t[r[i]] = 0;
                return t;
              }
              function c(t) {
                var style = getComputedStyle(t);
                return (
                  style ||
                    n(
                      "Style returned " +
                        style +
                        ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
                    ),
                  style
                );
              }
              var h,
                d = !1;
              function f() {
                if (!d) {
                  d = !0;
                  var div = document.createElement("div");
                  (div.style.width = "200px"),
                    (div.style.padding = "1px 2px 3px 4px"),
                    (div.style.borderStyle = "solid"),
                    (div.style.borderWidth = "1px 2px 3px 4px"),
                    (div.style.boxSizing = "border-box");
                  var body = document.body || document.documentElement;
                  body.appendChild(div);
                  var style = c(div);
                  (h = 200 == Math.round(t(style.width))),
                    (v.isBoxSizeOuter = h),
                    body.removeChild(div);
                }
              }
              function v(e) {
                if (
                  (f(),
                  "string" == typeof e && (e = document.querySelector(e)),
                  e && "object" == typeof e && e.nodeType)
                ) {
                  var style = c(e);
                  if ("none" == style.display) return l();
                  var n = {};
                  (n.width = e.offsetWidth), (n.height = e.offsetHeight);
                  for (
                    var d = (n.isBorderBox = "border-box" == style.boxSizing),
                      i = 0;
                    i < o;
                    i++
                  ) {
                    var v = r[i],
                      m = style[v],
                      y = parseFloat(m);
                    n[v] = isNaN(y) ? 0 : y;
                  }
                  var w = n.paddingLeft + n.paddingRight,
                    x = n.paddingTop + n.paddingBottom,
                    S = n.marginLeft + n.marginRight,
                    k = n.marginTop + n.marginBottom,
                    P = n.borderLeftWidth + n.borderRightWidth,
                    O = n.borderTopWidth + n.borderBottomWidth,
                    C = d && h,
                    _ = t(style.width);
                  !1 !== _ && (n.width = _ + (C ? 0 : w + P));
                  var j = t(style.height);
                  return (
                    !1 !== j && (n.height = j + (C ? 0 : x + O)),
                    (n.innerWidth = n.width - (w + P)),
                    (n.innerHeight = n.height - (x + O)),
                    (n.outerWidth = n.width + S),
                    (n.outerHeight = n.height + k),
                    n
                  );
                }
              }
              return v;
            })
              ? r.call(e, n, e, t)
              : r) || (t.exports = o);
    },
    function (t, e, n) {
      var content = n(170);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("49a0cdba", content, !0, { sourceMap: !1 });
    },
    ,
    function (t, e, n) {
      "use strict";
      e.a = function (t, e) {
        return (
          (e = e || {}),
          new Promise(function (n, r) {
            var s = new XMLHttpRequest(),
              o = [],
              u = [],
              i = {},
              a = function () {
                return {
                  ok: 2 == ((s.status / 100) | 0),
                  statusText: s.statusText,
                  status: s.status,
                  url: s.responseURL,
                  text: function () {
                    return Promise.resolve(s.responseText);
                  },
                  json: function () {
                    return Promise.resolve(s.responseText).then(JSON.parse);
                  },
                  blob: function () {
                    return Promise.resolve(new Blob([s.response]));
                  },
                  clone: a,
                  headers: {
                    keys: function () {
                      return o;
                    },
                    entries: function () {
                      return u;
                    },
                    get: function (t) {
                      return i[t.toLowerCase()];
                    },
                    has: function (t) {
                      return t.toLowerCase() in i;
                    },
                  },
                };
              };
            for (var l in (s.open(e.method || "get", t, !0),
            (s.onload = function () {
              s
                .getAllResponseHeaders()
                .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (t, e, n) {
                  o.push((e = e.toLowerCase())),
                    u.push([e, n]),
                    (i[e] = i[e] ? i[e] + "," + n : n);
                }),
                n(a());
            }),
            (s.onerror = r),
            (s.withCredentials = "include" == e.credentials),
            e.headers))
              s.setRequestHeader(l, e.headers[l]);
            s.send(e.body || null);
          })
        );
      };
    },
    ,
    function (t, e, n) {
      "use strict";
      var r = function (t) {
        return (
          (function (t) {
            return !!t && "object" == typeof t;
          })(t) &&
          !(function (t) {
            var e = Object.prototype.toString.call(t);
            return (
              "[object RegExp]" === e ||
              "[object Date]" === e ||
              (function (t) {
                return t.$$typeof === o;
              })(t)
            );
          })(t)
        );
      };
      var o =
        "function" == typeof Symbol && Symbol.for
          ? Symbol.for("react.element")
          : 60103;
      function l(t, e) {
        return !1 !== e.clone && e.isMergeableObject(t)
          ? v(((n = t), Array.isArray(n) ? [] : {}), t, e)
          : t;
        var n;
      }
      function c(t, source, e) {
        return t.concat(source).map(function (element) {
          return l(element, e);
        });
      }
      function h(t) {
        return Object.keys(t).concat(
          (function (t) {
            return Object.getOwnPropertySymbols
              ? Object.getOwnPropertySymbols(t).filter(function (symbol) {
                  return t.propertyIsEnumerable(symbol);
                })
              : [];
          })(t)
        );
      }
      function d(object, t) {
        try {
          return t in object;
        } catch (t) {
          return !1;
        }
      }
      function f(t, source, e) {
        var n = {};
        return (
          e.isMergeableObject(t) &&
            h(t).forEach(function (r) {
              n[r] = l(t[r], e);
            }),
          h(source).forEach(function (r) {
            (function (t, e) {
              return (
                d(t, e) &&
                !(
                  Object.hasOwnProperty.call(t, e) &&
                  Object.propertyIsEnumerable.call(t, e)
                )
              );
            })(t, r) ||
              (d(t, r) && e.isMergeableObject(source[r])
                ? (n[r] = (function (t, e) {
                    if (!e.customMerge) return v;
                    var n = e.customMerge(t);
                    return "function" == typeof n ? n : v;
                  })(r, e)(t[r], source[r], e))
                : (n[r] = l(source[r], e)));
          }),
          n
        );
      }
      function v(t, source, e) {
        ((e = e || {}).arrayMerge = e.arrayMerge || c),
          (e.isMergeableObject = e.isMergeableObject || r),
          (e.cloneUnlessOtherwiseSpecified = l);
        var n = Array.isArray(source);
        return n === Array.isArray(t)
          ? n
            ? e.arrayMerge(t, source, e)
            : f(t, source, e)
          : l(source, e);
      }
      v.all = function (t, e) {
        if (!Array.isArray(t))
          throw new Error("first argument should be an array");
        return t.reduce(function (t, n) {
          return v(t, n, e);
        }, {});
      };
      var m = v;
      t.exports = m;
    },
    function (t, e, n) {
      "use strict";
      var r = {
        functional: !0,
        render: function (t, e) {
          e.children;
          var n = e.slots,
            r = e.props,
            o = r.regex,
            l = r.invert,
            c = t("div", {}, []);
          var h = o || /bot|googlebot|crawler|spider|robot|crawling/i,
            d = navigator.userAgent && h.test(navigator.userAgent);
          return (l ? d : !d) ? t("div", {}, n().default) : c;
        },
      };
      e.a = r;
    },
    function (t, e, n) {
      window,
        (t.exports = (function (t) {
          var e = {};
          function n(r) {
            if (e[r]) return e[r].exports;
            var o = (e[r] = { i: r, l: !1, exports: {} });
            return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
          }
          return (
            (n.m = t),
            (n.c = e),
            (n.d = function (t, e, r) {
              n.o(t, e) ||
                Object.defineProperty(t, e, { enumerable: !0, get: r });
            }),
            (n.r = function (t) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (n.t = function (t, e) {
              if ((1 & e && (t = n(t)), 8 & e)) return t;
              if (4 & e && "object" == typeof t && t && t.__esModule) return t;
              var r = Object.create(null);
              if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: t,
                }),
                2 & e && "string" != typeof t)
              )
                for (var o in t)
                  n.d(
                    r,
                    o,
                    function (e) {
                      return t[e];
                    }.bind(null, o)
                  );
              return r;
            }),
            (n.n = function (t) {
              var e =
                t && t.__esModule
                  ? function () {
                      return t.default;
                    }
                  : function () {
                      return t;
                    };
              return n.d(e, "a", e), e;
            }),
            (n.o = function (t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.p = ""),
            n((n.s = 0))
          );
        })([
          function (t, e, n) {
            "use strict";
            function r() {
              return window.Piwik.getAsyncTracker();
            }
            function o(t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : void 0;
              return new Promise(function (n, r) {
                var o = document.createElement("script");
                (o.async = !0),
                  (o.defer = !0),
                  (o.src = t),
                  e &&
                    ["anonymous", "use-credentials"].includes(e) &&
                    (o.crossOrigin = e),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(o),
                  (o.onload = n),
                  (o.onerror = r);
              });
            }
            function i(t, e) {
              return t.resolve(e).href;
            }
            n.r(e),
              n.d(e, "matomoKey", function () {
                return u;
              }),
              n.d(e, "default", function () {
                return h;
              });
            var a = {
                debug: !1,
                disableCookies: !1,
                requireCookieConsent: !1,
                enableHeartBeatTimer: !1,
                enableLinkTracking: !0,
                heartBeatTimerInterval: 15,
                requireConsent: !1,
                trackInitialView: !0,
                trackSiteSearch: !1,
                trackerFileName: "matomo",
                trackerUrl: void 0,
                trackerScriptUrl: void 0,
                userId: void 0,
                cookieDomain: void 0,
                domains: void 0,
                preInitActions: [],
                crossOrigin: void 0,
              },
              u = "Matomo";
            function l(t, e, n) {
              if ("function" == typeof t.trackSiteSearch) {
                var o = t.trackSiteSearch(e);
                if (o)
                  return void (function (t, e) {
                    var n = e.keyword,
                      o = e.category,
                      i = e.resultsCount,
                      a = r();
                    t.debug && console.debug("[vue-matomo] Site Search " + n),
                      a.trackSiteSearch(n, o, i);
                  })(t, o);
              }
              !(function (t, e, n) {
                var o,
                  a,
                  u,
                  l = r();
                if (t.router) {
                  if (
                    ((a = i(t.router, e.fullPath)),
                    (u = n && n.fullPath ? i(t.router, n.fullPath) : void 0),
                    e.meta.analyticsIgnore)
                  )
                    return void (
                      t.debug && console.debug("[vue-matomo] Ignoring " + a)
                    );
                  t.debug && console.debug("[vue-matomo] Tracking " + a),
                    (o = e.meta.title || a);
                }
                u && l.setReferrerUrl(window.location.origin + u),
                  a && l.setCustomUrl(window.location.origin + a),
                  l.trackPageView(o);
              })(t, e, n);
            }
            function s(t, e) {
              var n = r();
              if (
                (Number(t.version.split(".")[0]) > 2
                  ? ((t.config.globalProperties.$piwik = n),
                    (t.config.globalProperties.$matomo = n),
                    t.provide(u, n))
                  : ((t.prototype.$piwik = n), (t.prototype.$matomo = n)),
                e.trackInitialView && e.router)
              ) {
                var o = e.router.currentRoute.value
                  ? e.router.currentRoute.value
                  : e.router.currentRoute;
                l(e, o);
              }
              e.router &&
                e.router.afterEach(function (t, r) {
                  l(e, t, r), e.enableLinkTracking && n.enableLinkTracking();
                });
            }
            function c() {
              return new Promise(function (t, e) {
                var n = Date.now(),
                  r = setInterval(function () {
                    if (window.Piwik) return clearInterval(r), t();
                    if (Date.now() >= n + 3e3)
                      throw (
                        (clearInterval(r),
                        new Error(
                          "[vue-matomo]: window.Piwik undefined after waiting for ".concat(
                            3e3,
                            "ms"
                          )
                        ))
                      );
                  }, 50);
              });
            }
            function h(t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = Object.assign({}, a, e),
                r = n.host,
                i = n.siteId,
                u = n.trackerFileName,
                l = n.trackerUrl,
                h = n.trackerScriptUrl || "".concat(r, "/").concat(u, ".js"),
                p = l || "".concat(r, "/").concat(u, ".php");
              (window._paq = window._paq || []),
                window._paq.push(["setTrackerUrl", p]),
                window._paq.push(["setSiteId", i]),
                n.requireConsent && window._paq.push(["requireConsent"]),
                n.userId && window._paq.push(["setUserId", n.userId]),
                n.enableLinkTracking &&
                  window._paq.push(["enableLinkTracking"]),
                n.disableCookies && window._paq.push(["disableCookies"]),
                n.requireCookieConsent &&
                  window._paq.push(["requireCookieConsent"]),
                n.enableHeartBeatTimer &&
                  window._paq.push([
                    "enableHeartBeatTimer",
                    n.heartBeatTimerInterval,
                  ]),
                n.cookieDomain &&
                  window._paq.push(["setCookieDomain", n.cookieDomain]),
                n.domains && window._paq.push(["setDomains", n.domains]),
                n.preInitActions.forEach(function (t) {
                  return window._paq.push(t);
                }),
                o(h, n.crossOrigin)
                  .then(function () {
                    return c();
                  })
                  .then(function () {
                    return s(t, n);
                  })
                  .catch(function (t) {
                    if (t.target)
                      return console.error(
                        "[vue-matomo] An error occurred trying to load ".concat(
                          t.target.src,
                          ". "
                        ) +
                          "If the file exists you may have an ad- or trackingblocker enabled."
                      );
                    console.error(t);
                  });
            }
          },
        ]));
    },
    function (t, e, n) {
      "use strict";
      var r = function () {
          return (r =
            Object.assign ||
            function (t) {
              for (var e, i = 1, n = arguments.length; i < n; i++)
                for (var s in (e = arguments[i]))
                  Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
              return t;
            }).apply(this, arguments);
        },
        o = {
          easingOptions: {
            builtIn: ["linear", "ease", "ease-in", "ease-out", "ease-in-out"],
            custom: {},
          },
          targets: [],
          install: function (t, e) {
            this.validateOptions(e),
              t.directive("show-slide", {
                bind: this.bind.bind(this),
                inserted: this.inserted.bind(this),
                componentUpdated: this.componentUpdated.bind(this),
              });
          },
          bind: function (t, e) {
            this.parseArgs(t, e);
          },
          inserted: function (t, e) {
            this.initializeTarget(t, e.value);
          },
          componentUpdated: function (t, e) {
            this.toggleSlide(t, e);
          },
          getTargetByEl: function (t) {
            var e = this.targets.filter(function (e) {
              return e.el.isSameNode(t);
            })[0];
            if (void 0 === e) throw "Element not found!";
            return e;
          },
          setTargetPropertyByEl: function (t, i, e) {
            var s,
              n = this.getTargetByEl(t),
              a = this.targets.filter(function (e) {
                return !e.el.isSameNode(t);
              });
            this.targets = (function () {
              for (var t = 0, e = 0, i = arguments.length; e < i; e++)
                t += arguments[e].length;
              var n = Array(t),
                s = 0;
              for (e = 0; e < i; e++)
                for (var r = arguments[e], a = 0, o = r.length; a < o; a++, s++)
                  n[s] = r[a];
              return n;
            })(a, [r(r({}, n), ((s = {}), (s[i] = e), s))]);
          },
          validateOptions: function (t) {
            void 0 !== t &&
              Object.prototype.hasOwnProperty.call(t, "customEasing") &&
              (this.easingOptions.custom = t.customEasing);
          },
          kebabToCamel: function (t) {
            return t.replace(/-([a-z])/g, function (t) {
              return t[1].toUpperCase();
            });
          },
          fireEvent: function (t, e) {
            if ("function" == typeof window.CustomEvent)
              t.dispatchEvent(new CustomEvent(e));
            else {
              var i = document.createEvent("CustomEvent");
              i.initCustomEvent(e, !1, !1, null), t.dispatchEvent(i);
            }
          },
          parseArgs: function (t, e) {
            if (
              Object.prototype.hasOwnProperty.call(e, "arg") &&
              "string" == typeof e.arg
            ) {
              var i = e.arg.split(":"),
                n = this.validateEasing(i),
                s = this.validateDuration(i);
              this.targets.push({
                el: t,
                duration: s,
                durationInSeconds: s / 1e3 + "s",
                easing: n,
                isAnimating: !1,
              });
            } else
              this.targets.push({
                el: t,
                duration: 300,
                durationInSeconds: "0.3s",
                easing: "ease",
                isAnimating: !1,
              });
          },
          validateEasing: function (t) {
            return Object.prototype.hasOwnProperty.call(t, 1)
              ? this.easingOptions.builtIn.indexOf(t[1]) > -1
                ? t[1]
                : Object.prototype.hasOwnProperty.call(
                    this.easingOptions.custom,
                    this.kebabToCamel(t[1])
                  )
                ? this.easingOptions.custom[this.kebabToCamel(t[1])]
                : "ease"
              : "ease";
          },
          validateDuration: function (t) {
            return Object.prototype.hasOwnProperty.call(t, 0)
              ? parseInt(t[0])
              : 300;
          },
          initializeTarget: function (t, e) {
            e || ((t.style.height = "0px"), (t.style.visibility = "hidden"));
            var i = this.getTargetByEl(t),
              n = i.easing,
              s = i.durationInSeconds;
            (t.style.overflow = "hidden"),
              (t.style.transition = "height " + n + " " + s);
          },
          toggleSlide: function (t, e) {
            e.value !== e.oldValue &&
              (e.value ? this.slideOpen(t) : this.slideClosed(t));
          },
          slideOpen: function (t) {
            var e = this;
            this.fireEvent(t, "slide-open-start");
            var i = this.getTargetByEl(t),
              n = i.isAnimating,
              s = i.timeout,
              r = i.duration;
            n && clearTimeout(s),
              this.setTargetPropertyByEl(t, "isAnimating", !0),
              (t.style.visibility = "visible");
            var a = t.scrollHeight,
              o = window.getComputedStyle(t),
              l = parseFloat(o.getPropertyValue("border-bottom-width")),
              u = parseFloat(o.getPropertyValue("border-top-width"));
            t.style.height = a + l + u + "px";
            var c = setTimeout(function () {
              (t.style.height = "auto"),
                e.setTargetPropertyByEl(t, "isAnimating", !1),
                e.fireEvent(t, "slide-open-end");
            }, r);
            this.setTargetPropertyByEl(t, "timeout", c);
          },
          slideClosed: function (t) {
            var e = this;
            this.fireEvent(t, "slide-close-start");
            var i = this.getTargetByEl(t),
              n = i.isAnimating,
              s = i.timeout,
              r = i.duration;
            n && clearTimeout(s),
              this.setTargetPropertyByEl(t, "isAnimating", !0);
            var a = t.scrollHeight;
            (t.style.height = a + "px"), t.offsetLeft, (t.style.height = "0px");
            var o = setTimeout(function () {
              e.setTargetPropertyByEl(t, "isAnimating", !1),
                (t.style.visibility = "hidden"),
                e.fireEvent(t, "slide-close-end");
            }, r);
            this.setTargetPropertyByEl(t, "timeout", o);
          },
        };
      e.a = o;
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        o = n(1);
      function l(t, e, n, r, o, l, c) {
        try {
          var h = t[l](c),
            d = h.value;
        } catch (t) {
          return void n(t);
        }
        h.done ? e(d) : Promise.resolve(d).then(r, o);
      }
      function c(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var c = t.apply(e, n);
            function h(t) {
              l(c, r, o, h, d, "next", t);
            }
            function d(t) {
              l(c, r, o, h, d, "throw", t);
            }
            h(void 0);
          });
        };
      }
      var h = window.__NUXT__;
      function d() {
        if (!this._hydrated) return this.$fetch();
      }
      function f() {
        if (
          (t = this).$vnode &&
          t.$vnode.elm &&
          t.$vnode.elm.dataset &&
          t.$vnode.elm.dataset.fetchKey
        ) {
          var t;
          (this._hydrated = !0),
            (this._fetchKey = this.$vnode.elm.dataset.fetchKey);
          var data = h.fetch[this._fetchKey];
          if (data && data._error) this.$fetchState.error = data._error;
          else for (var e in data) r.a.set(this.$data, e, data[e]);
        } else v.call(this);
      }
      function v() {
        var t = !1 !== this.$options.fetchOnServer;
        if (
          ("function" == typeof this.$options.fetchOnServer &&
            (t = !1 !== this.$options.fetchOnServer.call(this)),
          t && !this.$nuxt.isPreview && this.$nuxt._pagePayload)
        ) {
          this._hydrated = !0;
          var e = this.$options._scopeId || this.$options.name || "",
            n = Object(o.d)(this.$nuxt._fetchCounters, e);
          if ("function" == typeof this.$options.fetchKey)
            this._fetchKey = this.$options.fetchKey.call(this, n);
          else {
            var l =
              "string" == typeof this.$options.fetchKey
                ? this.$options.fetchKey
                : e;
            this._fetchKey = l ? l + ":" + n(l) : String(n(l));
          }
          var data = this.$nuxt._pagePayload.fetch[this._fetchKey];
          if (data && data._error) this.$fetchState.error = data._error;
          else if (data) for (var c in data) r.a.set(this.$data, c, data[c]);
          else this.$fetch();
        }
      }
      function m() {
        return (
          this._fetchPromise ||
            (this._fetchPromise = y.call(this).then(() => {
              delete this._fetchPromise;
            })),
          this._fetchPromise
        );
      }
      function y() {
        return w.apply(this, arguments);
      }
      function w() {
        return (w = c(function* () {
          this.$nuxt.nbFetching++,
            (this.$fetchState.pending = !0),
            (this.$fetchState.error = null),
            (this._hydrated = !1);
          var t = null,
            e = Date.now();
          try {
            yield this.$options.fetch.call(this);
          } catch (e) {
            0, (t = Object(o.p)(e));
          }
          var n = this._fetchDelay - (Date.now() - e);
          n > 0 && (yield new Promise((t) => setTimeout(t, n))),
            (this.$fetchState.error = t),
            (this.$fetchState.pending = !1),
            (this.$fetchState.timestamp = Date.now()),
            this.$nextTick(() => this.$nuxt.nbFetching--);
        })).apply(this, arguments);
      }
      e.a = {
        beforeCreate() {
          Object(o.m)(this) &&
            ((this._fetchDelay =
              "number" == typeof this.$options.fetchDelay
                ? this.$options.fetchDelay
                : 200),
            r.a.util.defineReactive(this, "$fetchState", {
              pending: !1,
              error: null,
              timestamp: Date.now(),
            }),
            (this.$fetch = m.bind(this)),
            Object(o.a)(this, "created", f),
            Object(o.a)(this, "beforeMount", d));
        },
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return h;
      });
      var r = {},
        o = {},
        l = {};
      function c(t, e) {
        if (r[t]) return Promise.resolve(r[t]);
        if (l[t]) return Promise.reject(l[t]);
        if (o[t]) return o[t];
        var n,
          c,
          h = (o[t] = new Promise((t, e) => {
            (n = t), (c = e);
          }));
        delete r[t];
        var d,
          script = document.createElement("script");
        (script.charset = "utf-8"), (script.timeout = 120), (script.src = e);
        var f = new Error(),
          v =
            (script.onerror =
            script.onload =
              (e) => {
                if (
                  (clearTimeout(d),
                  delete o[t],
                  (script.onerror = script.onload = null),
                  r[t])
                )
                  return n(r[t]);
                var h = e && ("load" === e.type ? "missing" : e.type),
                  v = e && e.target && e.target.src;
                (f.message =
                  "Loading chunk " + t + " failed.\n(" + h + ": " + v + ")"),
                  (f.name = "ChunkLoadError"),
                  (f.type = h),
                  (f.request = v),
                  (l[t] = f),
                  c(f);
              });
        return (
          (d = setTimeout(() => {
            v({ type: "timeout", target: script });
          }, 12e4)),
          document.head.appendChild(script),
          h
        );
      }
      function h() {
        (window.__NUXT_JSONP__ = function (t, e) {
          r[t] = e;
        }),
          (window.__NUXT_JSONP_CACHE__ = r),
          (window.__NUXT_IMPORT__ = c);
      }
    },
    ,
    function (t, e, n) {
      "use strict";
      var r = {
          props: { options: Object },
          mounted() {
            this.init();
          },
          beforeDestroy() {
            this.$flickity.destroy(), (this.$flickity = null);
          },
          methods: {
            init() {
              var t = n(65);
              (this.$flickity = new t(this.$el, this.options)),
                this.$emit("init", this.$flickity);
            },
            flickity() {
              return this.$flickity;
            },
            select(t, e, n) {
              this.$flickity.select(t, e, n);
            },
            next(t, e) {
              this.$flickity.next(t, e);
            },
            previous(t, e) {
              this.$flickity.previous(t, e);
            },
            selectCell(t, e, n) {
              this.$flickity.selectCell(t, e, n);
            },
            resize() {
              this.$flickity.resize();
            },
            reposition() {
              this.$flickity.reposition();
            },
            prepend(t) {
              this.$flickity.prepend(t);
            },
            append(t) {
              this.$flickity.append(t);
            },
            insert(t, e) {
              this.$flickity.insert(t, e);
            },
            remove(t) {
              this.$flickity.remove(t);
            },
            playPlayer() {
              this.$flickity.playPlayer();
            },
            stopPlayer() {
              this.$flickity.stopPlayer();
            },
            pausePlayer() {
              this.$flickity.pausePlayer();
            },
            unpausePlayer() {
              this.$flickity.unpausePlayer();
            },
            rerender() {
              this.$flickity.destroy(), this.init();
            },
            destroy() {
              this.$flickity.destroy();
            },
            reloadCells() {
              this.$flickity.reloadCells();
            },
            getCellElements() {
              return this.$flickity.getCellElements();
            },
            data() {
              return n(65).data(this.$el);
            },
            on(t, e) {
              this.$flickity.on(t, e);
            },
            off(t, e) {
              this.$flickity.off(t, e);
            },
            once(t, e) {
              this.$flickity.once(t, e);
            },
            selectedElement() {
              return this.$flickity.selectedElement;
            },
            selectedElements() {
              return this.$flickity.selectedElements;
            },
            selectedIndex() {
              return this.$flickity.selectedIndex;
            },
            cells() {
              return this.$flickity.cells;
            },
            slides() {
              return this.$flickity.slides;
            },
            disableDrag() {
              (this.$flickity.options.draggable = !1),
                this.$flickity.updateDraggable();
            },
            enableDrag() {
              (this.$flickity.options.draggable = !0),
                this.$flickity.updateDraggable();
            },
          },
        },
        o = (n(169), n(2)),
        component = Object(o.a)(
          r,
          function () {
            return (0, this._self._c)("div", [this._t("default")], 2);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = component.exports;
    },
    ,
    function (t, e, n) {
      "use strict";
      t.exports = function (t, e) {
        return (
          e || (e = {}),
          "string" != typeof (t = t && t.__esModule ? t.default : t)
            ? t
            : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
              e.hash && (t += e.hash),
              /["'() \t\n]/.test(t) || e.needQuotes
                ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"')
                : t)
        );
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      (function (t) {
        t.installComponents = function (component, t) {
          var n =
            "function" == typeof component.exports
              ? component.exports.extendOptions
              : component.options;
          for (var i in ("function" == typeof component.exports &&
            (n.components = component.exports.options.components),
          (n.components = n.components || {}),
          t))
            n.components[i] = n.components[i] || t[i];
          n.functional &&
            (function (component, t) {
              if (component.exports[e]) return;
              component.exports[e] = !0;
              var n = component.exports.render;
              component.exports.render = function (e, r) {
                return n(
                  e,
                  Object.assign({}, r, {
                    _c: function (e, a, b) {
                      return r._c(t[e] || e, a, b);
                    },
                  })
                );
              };
            })(component, n.components);
        };
        var e = "_functionalComponents";
      }).call(this, n(11));
    },
    function (t, e, n) {
      "use strict";
      n.r(e),
        function (t) {
          var e = n(0),
            r = n(69),
            o = n(25),
            l = n(1),
            c = n(7),
            h = n(75),
            d = n(17),
            f = n(76);
          function v(t, e, n, r, o, l, c) {
            try {
              var h = t[l](c),
                d = h.value;
            } catch (t) {
              return void n(t);
            }
            h.done ? e(d) : Promise.resolve(d).then(r, o);
          }
          function m(t) {
            return function () {
              var e = this,
                n = arguments;
              return new Promise(function (r, o) {
                var l = t.apply(e, n);
                function c(t) {
                  v(l, r, o, c, h, "next", t);
                }
                function h(t) {
                  v(l, r, o, c, h, "throw", t);
                }
                c(void 0);
              });
            };
          }
          Object(f.a)(),
            e.a.__nuxt__fetch__mixin__ ||
              (e.a.mixin(h.a), (e.a.__nuxt__fetch__mixin__ = !0)),
            e.a.component(d.a.name, d.a),
            e.a.component("NLink", d.a),
            t.fetch || (t.fetch = r.a);
          var y,
            w,
            x = [],
            S = window.__NUXT__ || {},
            k = S.config || {};
          k._app && (n.p = Object(l.v)(k._app.cdnURL, k._app.assetsPath)),
            Object.assign(e.a.config, { silent: !0, performance: !1 });
          var P = e.a.config.errorHandler || console.error;
          function O(t, e, n) {
            for (
              var r = (component) => {
                  var t =
                    (function (component, t) {
                      if (
                        !component ||
                        !component.options ||
                        !component.options[t]
                      )
                        return {};
                      var option = component.options[t];
                      if ("function" == typeof option) {
                        for (
                          var e = arguments.length,
                            n = new Array(e > 2 ? e - 2 : 0),
                            r = 2;
                          r < e;
                          r++
                        )
                          n[r - 2] = arguments[r];
                        return option(...n);
                      }
                      return option;
                    })(component, "transition", e, n) || {};
                  return "string" == typeof t ? { name: t } : t;
                },
                o = n ? Object(l.h)(n) : [],
                c = Math.max(t.length, o.length),
                h = [],
                d = function (i) {
                  var e = Object.assign({}, r(t[i])),
                    n = Object.assign({}, r(o[i]));
                  Object.keys(e)
                    .filter(
                      (t) =>
                        void 0 !== e[t] && !t.toLowerCase().includes("leave")
                    )
                    .forEach((t) => {
                      n[t] = e[t];
                    }),
                    h.push(n);
                },
                i = 0;
              i < c;
              i++
            )
              d(i);
            return h;
          }
          function C(t, e, n) {
            return _.apply(this, arguments);
          }
          function _() {
            return (_ = m(function* (t, e, n) {
              (this._routeChanged = Boolean(y.nuxt.err) || e.name !== t.name),
                (this._paramChanged = !this._routeChanged && e.path !== t.path),
                (this._queryChanged =
                  !this._paramChanged && e.fullPath !== t.fullPath),
                (this._diffQuery = this._queryChanged
                  ? Object(l.j)(t.query, e.query)
                  : []),
                (this._routeChanged || this._paramChanged) &&
                  this.$loading.start &&
                  !this.$loading.manual &&
                  this.$loading.start();
              try {
                if (this._queryChanged)
                  (yield Object(l.r)(t, (t, e) => ({
                    Component: t,
                    instance: e,
                  }))).some((n) => {
                    var { Component: r, instance: o } = n,
                      l = r.options.watchQuery;
                    return (
                      !0 === l ||
                      (Array.isArray(l)
                        ? l.some((t) => this._diffQuery[t])
                        : "function" == typeof l &&
                          l.apply(o, [t.query, e.query]))
                    );
                  }) &&
                    this.$loading.start &&
                    !this.$loading.manual &&
                    this.$loading.start();
                n();
              } catch (l) {
                var r = l || {},
                  o =
                    r.statusCode ||
                    r.status ||
                    (r.response && r.response.status) ||
                    500,
                  c = r.message || "";
                if (/^Loading( CSS)? chunk (\d)+ failed\./.test(c))
                  return void window.location.reload(!0);
                this.error({ statusCode: o, message: c }),
                  this.$nuxt.$emit("routeChanged", t, e, r),
                  n();
              }
            })).apply(this, arguments);
          }
          function j(t) {
            return Object(l.e)(
              t,
              (function () {
                var t = m(function* (t, e, n, r, o) {
                  "function" != typeof t || t.options || (t = yield t());
                  var c = (function (t, e) {
                    return (
                      S.serverRendered && e && Object(l.b)(t, e),
                      (t._Ctor = t),
                      t
                    );
                  })(Object(l.s)(t), S.data ? S.data[o] : null);
                  return (n.components[r] = c), c;
                });
                return function (e, n, r, o, l) {
                  return t.apply(this, arguments);
                };
              })()
            );
          }
          function E(t, e, n) {
            var r = [],
              c = !1;
            if (
              (void 0 !== n &&
                ((r = []),
                (n = Object(l.s)(n)).options.middleware &&
                  (r = r.concat(n.options.middleware)),
                t.forEach((t) => {
                  t.options.middleware && (r = r.concat(t.options.middleware));
                })),
              (r = r.map((t) =>
                "function" == typeof t
                  ? t
                  : ("function" != typeof o.a[t] &&
                      ((c = !0),
                      this.error({
                        statusCode: 500,
                        message: "Unknown middleware " + t,
                      })),
                    o.a[t])
              )),
              !c)
            )
              return Object(l.o)(r, e);
          }
          function D(t, e, n) {
            return $.apply(this, arguments);
          }
          function $() {
            return (
              ($ = m(function* (t, e, n) {
                var r = this;
                if (
                  !1 === this._routeChanged &&
                  !1 === this._paramChanged &&
                  !1 === this._queryChanged
                )
                  return n();
                var o = !1;
                if (t === e) (x = []), (o = !0);
                else {
                  var h = [];
                  x = Object(l.h)(e, h).map((t, i) =>
                    Object(l.c)(e.matched[h[i]].path)(e.params)
                  );
                }
                var d = !1;
                yield Object(l.t)(y, {
                  route: t,
                  from: e,
                  next: ((path) => {
                    e.path === path.path &&
                      this.$loading.finish &&
                      this.$loading.finish(),
                      e.path !== path.path &&
                        this.$loading.pause &&
                        this.$loading.pause(),
                      d || ((d = !0), n(path));
                  }).bind(this),
                }),
                  (this._dateLastError = y.nuxt.dateErr),
                  (this._hadError = Boolean(y.nuxt.err));
                var f = [],
                  v = Object(l.h)(t, f);
                if (!v.length) {
                  if ((yield E.call(this, v, y.context), d)) return;
                  var w = (c.a.options || c.a).layout,
                    S = yield this.loadLayout(
                      "function" == typeof w ? w.call(c.a, y.context) : w
                    );
                  if ((yield E.call(this, v, y.context, S), d)) return;
                  return (
                    y.context.error({
                      statusCode: 404,
                      message: "This page could not be found",
                    }),
                    n()
                  );
                }
                v.forEach((t) => {
                  t._Ctor &&
                    t._Ctor.options &&
                    ((t.options.asyncData = t._Ctor.options.asyncData),
                    (t.options.fetch = t._Ctor.options.fetch));
                }),
                  this.setTransitions(O(v, t, e));
                try {
                  if ((yield E.call(this, v, y.context), d)) return;
                  if (y.context._errored) return n();
                  var k = v[0].options.layout;
                  if (
                    ("function" == typeof k && (k = k(y.context)),
                    (k = yield this.loadLayout(k)),
                    yield E.call(this, v, y.context, k),
                    d)
                  )
                    return;
                  if (y.context._errored) return n();
                  var P,
                    C = !0;
                  try {
                    for (var _ of v)
                      if (
                        "function" == typeof _.options.validate &&
                        !(C = yield _.options.validate(y.context))
                      )
                        break;
                  } catch (t) {
                    return (
                      this.error({
                        statusCode: t.statusCode || "500",
                        message: t.message,
                      }),
                      n()
                    );
                  }
                  if (!C)
                    return (
                      this.error({
                        statusCode: 404,
                        message: "This page could not be found",
                      }),
                      n()
                    );
                  yield Promise.all(
                    v.map(
                      (function () {
                        var n = m(function* (n, i) {
                          (n._path = Object(l.c)(t.matched[f[i]].path)(
                            t.params
                          )),
                            (n._dataRefresh = !1);
                          var c = n._path !== x[i];
                          if (r._routeChanged && c) n._dataRefresh = !0;
                          else if (r._paramChanged && c) {
                            var h = n.options.watchParam;
                            n._dataRefresh = !1 !== h;
                          } else if (r._queryChanged) {
                            var d = n.options.watchQuery;
                            !0 === d
                              ? (n._dataRefresh = !0)
                              : Array.isArray(d)
                              ? (n._dataRefresh = d.some(
                                  (t) => r._diffQuery[t]
                                ))
                              : "function" == typeof d &&
                                (P || (P = Object(l.i)(t)),
                                (n._dataRefresh = d.apply(P[i], [
                                  t.query,
                                  e.query,
                                ])));
                          }
                          if (r._hadError || !r._isMounted || n._dataRefresh) {
                            var v,
                              m = [],
                              w =
                                n.options.asyncData &&
                                "function" == typeof n.options.asyncData,
                              S =
                                Boolean(n.options.fetch) &&
                                n.options.fetch.length,
                              k = w && S ? 30 : 45;
                            if (w)
                              (v =
                                r.isPreview || o
                                  ? Object(l.q)(n.options.asyncData, y.context)
                                  : r
                                      .fetchPayload(t.path)
                                      .then((t) => t.data[i])
                                      .catch((t) =>
                                        Object(l.q)(
                                          n.options.asyncData,
                                          y.context
                                        )
                                      )).then((t) => {
                                Object(l.b)(n, t),
                                  r.$loading.increase && r.$loading.increase(k);
                              }),
                                m.push(v);
                            if (
                              ((r.$loading.manual = !1 === n.options.loading),
                              r.isPreview ||
                                o ||
                                m.push(
                                  r.fetchPayload(t.path).catch((t) => null)
                                ),
                              S)
                            ) {
                              var p = n.options.fetch(y.context);
                              (p &&
                                (p instanceof Promise ||
                                  "function" == typeof p.then)) ||
                                (p = Promise.resolve(p)),
                                p.then((t) => {
                                  r.$loading.increase && r.$loading.increase(k);
                                }),
                                m.push(p);
                            }
                            return Promise.all(m);
                          }
                        });
                        return function (t, e) {
                          return n.apply(this, arguments);
                        };
                      })()
                    )
                  ),
                    d ||
                      (this.$loading.finish &&
                        !this.$loading.manual &&
                        this.$loading.finish(),
                      n());
                } catch (r) {
                  var j = r || {};
                  if ("ERR_REDIRECT" === j.message)
                    return this.$nuxt.$emit("routeChanged", t, e, j);
                  (x = []), Object(l.l)(j);
                  var D = (c.a.options || c.a).layout;
                  "function" == typeof D && (D = D(y.context)),
                    yield this.loadLayout(D),
                    this.error(j),
                    this.$nuxt.$emit("routeChanged", t, e, j),
                    n();
                }
              })),
              $.apply(this, arguments)
            );
          }
          function T(t, n) {
            Object(l.e)(
              t,
              (t, n, r, o) => (
                "object" != typeof t ||
                  t.options ||
                  (((t = e.a.extend(t))._Ctor = t), (r.components[o] = t)),
                t
              )
            );
          }
          function A(t) {
            var e = Boolean(this.$options.nuxt.err);
            this._hadError &&
              this._dateLastError === this.$options.nuxt.dateErr &&
              (e = !1);
            var n = e
              ? (c.a.options || c.a).layout
              : t.matched[0].components.default.options.layout;
            "function" == typeof n && (n = n(y.context)), this.setLayout(n);
          }
          function L(t) {
            t._hadError &&
              t._dateLastError === t.$options.nuxt.dateErr &&
              t.error();
          }
          function M(t, n) {
            if (
              !1 !== this._routeChanged ||
              !1 !== this._paramChanged ||
              !1 !== this._queryChanged
            ) {
              var r = Object(l.i)(t),
                o = Object(l.h)(t),
                c = !1;
              e.a.nextTick(() => {
                r.forEach((t, i) => {
                  if (
                    t &&
                    !t._isDestroyed &&
                    t.constructor._dataRefresh &&
                    o[i] === t.constructor &&
                    !0 !== t.$vnode.data.keepAlive &&
                    "function" == typeof t.constructor.options.data
                  ) {
                    var n = t.constructor.options.data.call(t);
                    for (var r in n) e.a.set(t.$data, r, n[r]);
                    c = !0;
                  }
                }),
                  c &&
                    window.$nuxt.$nextTick(() => {
                      window.$nuxt.$emit("triggerScroll");
                    }),
                  L(this);
              });
            }
          }
          function I(t) {
            window.onNuxtReadyCbs.forEach((e) => {
              "function" == typeof e && e(t);
            }),
              "function" == typeof window._onNuxtLoaded &&
                window._onNuxtLoaded(t),
              w.afterEach((n, r) => {
                e.a.nextTick(() => t.$nuxt.$emit("routeChanged", n, r));
              });
          }
          function z() {
            return (z = m(function* (t) {
              (y = t.app), (w = t.router);
              var n = new e.a(y);
              if (!S.data && S.serverRendered)
                try {
                  var r = yield n.fetchPayload(
                    S.routePath || n.context.route.path
                  );
                  Object.assign(S, r);
                } catch (t) {}
              var o = S.layout || "default";
              yield n.loadLayout(o), n.setLayout(o);
              var c = () => {
                  n.$mount("#__nuxt"),
                    w.afterEach(T),
                    w.afterEach(A.bind(n)),
                    w.afterEach(M.bind(n)),
                    e.a.nextTick(() => {
                      I(n);
                    });
                },
                h = yield Promise.all(j(y.context.route));
              if (
                ((n.setTransitions = n.$options.nuxt.setTransitions.bind(n)),
                h.length &&
                  (n.setTransitions(O(h, w.currentRoute)),
                  (x = w.currentRoute.matched.map((t) =>
                    Object(l.c)(t.path)(w.currentRoute.params)
                  ))),
                (n.$loading = {}),
                S.error && n.error(S.error),
                w.beforeEach(C.bind(n)),
                w.beforeEach(D.bind(n)),
                S.serverRendered)
              )
                return c();
              var d = () => {
                T(w.currentRoute, w.currentRoute),
                  A.call(n, w.currentRoute),
                  L(n),
                  c();
              };
              yield new Promise((t) => setTimeout(t, 0)),
                D.call(n, w.currentRoute, w.currentRoute, (path) => {
                  if (path) {
                    var t = w.afterEach((e, n) => {
                      t(), d();
                    });
                    w.push(path, void 0, (t) => {
                      t && P(t);
                    });
                  } else d();
                });
            })).apply(this, arguments);
          }
          Object(c.b)(null, S.config)
            .then(function (t) {
              return z.apply(this, arguments);
            })
            .catch(P);
        }.call(this, n(11));
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      n(38);
    },
    function (t, e, n) {
      var r = n(3)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        "/*purgecss start ignore*/\n.nuxt-progress{\n  position:fixed;\n  top:0;\n  left:0;\n  right:0;\n  height:2px;\n  width:0;\n  opacity:1;\n  transition:width .1s,opacity .4s;\n  background-color:#3b8070;\n  z-index:999999\n}\n.nuxt-progress.nuxt-progress-notransition{\n  transition:none\n}\n.nuxt-progress-failed{\n  background-color:red\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      var content = n(113);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("0d8b0c4d", content, !0, { sourceMap: !1 });
    },
    function (t, e, n) {
      var r = n(3)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        '/*purgecss start ignore*/\n\ncode[class*=language-],pre[class*=language-]{\n  color:#000;\n  background:none;\n  text-shadow:0 1px #fff;\n  font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;\n  font-size:1em;\n  text-align:left;\n  white-space:pre;\n  word-spacing:normal;\n  word-break:normal;\n  word-wrap:normal;\n  line-height:1.5;\n  -moz-tab-size:4;\n  -o-tab-size:4;\n  tab-size:4;\n  -webkit-hyphens:none;\n  hyphens:none\n}\n\ncode[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{\n  text-shadow:none;\n  background:#b3d4fc\n}\n\ncode[class*=language-]::-moz-selection, code[class*=language-] ::-moz-selection, pre[class*=language-]::-moz-selection, pre[class*=language-] ::-moz-selection{\n  text-shadow:none;\n  background:#b3d4fc\n}\n\ncode[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{\n  text-shadow:none;\n  background:#b3d4fc\n}\n\n@media print{\n  code[class*=language-],pre[class*=language-]{\n    text-shadow:none\n  }\n}\n\npre[class*=language-]{\n  padding:1em;\n  margin:.5em 0;\n  overflow:auto\n}\n\n:not(pre)>code[class*=language-],pre[class*=language-]{\n  background:#f5f2f0\n}\n\n:not(pre)>code[class*=language-]{\n  padding:.1em;\n  border-radius:.3em;\n  white-space:normal\n}\n\n.token.cdata,.token.comment,.token.doctype,.token.prolog{\n  color:#708090\n}\n\n.token.punctuation{\n  color:#999\n}\n\n.token.namespace{\n  opacity:.7\n}\n\n.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{\n  color:#905\n}\n\n.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{\n  color:#690\n}\n\n.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{\n  color:#9a6e3a;\n  background:hsla(0,0%,100%,.5)\n}\n\n.token.atrule,.token.attr-value,.token.keyword{\n  color:#07a\n}\n\n.token.class-name,.token.function{\n  color:#dd4a68\n}\n\n.token.important,.token.regex,.token.variable{\n  color:#e90\n}\n\n.token.bold,.token.important{\n  font-weight:700\n}\n\n.token.italic{\n  font-style:italic\n}\n\n.token.entity{\n  cursor:help\n}\n\n/*purgecss end ignore*/',
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      var r = n(55),
        o = n(57),
        l = n(60),
        c = n(61),
        h = n(64),
        html = n(153);
      t.exports = r([l, o, c, h, html]);
    },
    function (t, e) {
      t.exports = function () {
        for (var t = {}, i = 0; i < arguments.length; i++) {
          var source = arguments[i];
          for (var e in source) n.call(source, e) && (t[e] = source[e]);
        }
        return t;
      };
      var n = Object.prototype.hasOwnProperty;
    },
    function (t, e, n) {
      "use strict";
      var r = n(16),
        o = n(12),
        l = n(62),
        c = r.boolean,
        h = r.overloadedBoolean,
        d = r.booleanish,
        f = r.number,
        v = r.spaceSeparated,
        m = r.commaSeparated;
      t.exports = o({
        space: "html",
        attributes: {
          acceptcharset: "accept-charset",
          classname: "class",
          htmlfor: "for",
          httpequiv: "http-equiv",
        },
        transform: l,
        mustUseProperty: ["checked", "multiple", "muted", "selected"],
        properties: {
          abbr: null,
          accept: m,
          acceptCharset: v,
          accessKey: v,
          action: null,
          allow: null,
          allowFullScreen: c,
          allowPaymentRequest: c,
          allowUserMedia: c,
          alt: null,
          as: null,
          async: c,
          autoCapitalize: null,
          autoComplete: v,
          autoFocus: c,
          autoPlay: c,
          capture: c,
          charSet: null,
          checked: c,
          cite: null,
          className: v,
          cols: f,
          colSpan: null,
          content: null,
          contentEditable: d,
          controls: c,
          controlsList: v,
          coords: f | m,
          crossOrigin: null,
          data: null,
          dateTime: null,
          decoding: null,
          default: c,
          defer: c,
          dir: null,
          dirName: null,
          disabled: c,
          download: h,
          draggable: d,
          encType: null,
          enterKeyHint: null,
          form: null,
          formAction: null,
          formEncType: null,
          formMethod: null,
          formNoValidate: c,
          formTarget: null,
          headers: v,
          height: f,
          hidden: c,
          high: f,
          href: null,
          hrefLang: null,
          htmlFor: v,
          httpEquiv: v,
          id: null,
          imageSizes: null,
          imageSrcSet: m,
          inputMode: null,
          integrity: null,
          is: null,
          isMap: c,
          itemId: null,
          itemProp: v,
          itemRef: v,
          itemScope: c,
          itemType: v,
          kind: null,
          label: null,
          lang: null,
          language: null,
          list: null,
          loading: null,
          loop: c,
          low: f,
          manifest: null,
          max: null,
          maxLength: f,
          media: null,
          method: null,
          min: null,
          minLength: f,
          multiple: c,
          muted: c,
          name: null,
          nonce: null,
          noModule: c,
          noValidate: c,
          onAbort: null,
          onAfterPrint: null,
          onAuxClick: null,
          onBeforePrint: null,
          onBeforeUnload: null,
          onBlur: null,
          onCancel: null,
          onCanPlay: null,
          onCanPlayThrough: null,
          onChange: null,
          onClick: null,
          onClose: null,
          onContextMenu: null,
          onCopy: null,
          onCueChange: null,
          onCut: null,
          onDblClick: null,
          onDrag: null,
          onDragEnd: null,
          onDragEnter: null,
          onDragExit: null,
          onDragLeave: null,
          onDragOver: null,
          onDragStart: null,
          onDrop: null,
          onDurationChange: null,
          onEmptied: null,
          onEnded: null,
          onError: null,
          onFocus: null,
          onFormData: null,
          onHashChange: null,
          onInput: null,
          onInvalid: null,
          onKeyDown: null,
          onKeyPress: null,
          onKeyUp: null,
          onLanguageChange: null,
          onLoad: null,
          onLoadedData: null,
          onLoadedMetadata: null,
          onLoadEnd: null,
          onLoadStart: null,
          onMessage: null,
          onMessageError: null,
          onMouseDown: null,
          onMouseEnter: null,
          onMouseLeave: null,
          onMouseMove: null,
          onMouseOut: null,
          onMouseOver: null,
          onMouseUp: null,
          onOffline: null,
          onOnline: null,
          onPageHide: null,
          onPageShow: null,
          onPaste: null,
          onPause: null,
          onPlay: null,
          onPlaying: null,
          onPopState: null,
          onProgress: null,
          onRateChange: null,
          onRejectionHandled: null,
          onReset: null,
          onResize: null,
          onScroll: null,
          onSecurityPolicyViolation: null,
          onSeeked: null,
          onSeeking: null,
          onSelect: null,
          onSlotChange: null,
          onStalled: null,
          onStorage: null,
          onSubmit: null,
          onSuspend: null,
          onTimeUpdate: null,
          onToggle: null,
          onUnhandledRejection: null,
          onUnload: null,
          onVolumeChange: null,
          onWaiting: null,
          onWheel: null,
          open: c,
          optimum: f,
          pattern: null,
          ping: v,
          placeholder: null,
          playsInline: c,
          poster: null,
          preload: null,
          readOnly: c,
          referrerPolicy: null,
          rel: v,
          required: c,
          reversed: c,
          rows: f,
          rowSpan: f,
          sandbox: v,
          scope: null,
          scoped: c,
          seamless: c,
          selected: c,
          shape: null,
          size: f,
          sizes: null,
          slot: null,
          span: f,
          spellCheck: d,
          src: null,
          srcDoc: null,
          srcLang: null,
          srcSet: m,
          start: f,
          step: null,
          style: null,
          tabIndex: f,
          target: null,
          title: null,
          translate: null,
          type: null,
          typeMustMatch: c,
          useMap: null,
          value: d,
          width: f,
          wrap: null,
          align: null,
          aLink: null,
          archive: v,
          axis: null,
          background: null,
          bgColor: null,
          border: f,
          borderColor: null,
          bottomMargin: f,
          cellPadding: null,
          cellSpacing: null,
          char: null,
          charOff: null,
          classId: null,
          clear: null,
          code: null,
          codeBase: null,
          codeType: null,
          color: null,
          compact: c,
          declare: c,
          event: null,
          face: null,
          frame: null,
          frameBorder: null,
          hSpace: f,
          leftMargin: f,
          link: null,
          longDesc: null,
          lowSrc: null,
          marginHeight: f,
          marginWidth: f,
          noResize: c,
          noHref: c,
          noShade: c,
          noWrap: c,
          object: null,
          profile: null,
          prompt: null,
          rev: null,
          rightMargin: f,
          rules: null,
          scheme: null,
          scrolling: d,
          standby: null,
          summary: null,
          text: null,
          topMargin: f,
          valueType: null,
          version: null,
          vAlign: null,
          vLink: null,
          vSpace: f,
          allowTransparency: null,
          autoCorrect: null,
          autoSave: null,
          disablePictureInPicture: c,
          disableRemotePlayback: c,
          prefix: null,
          property: null,
          results: f,
          security: null,
          unselectable: null,
        },
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(55),
        o = n(57),
        l = n(60),
        c = n(61),
        h = n(64),
        svg = n(155);
      t.exports = r([l, o, c, h, svg]);
    },
    function (t, e, n) {
      "use strict";
      var r = n(16),
        o = n(12),
        l = n(63),
        c = r.boolean,
        h = r.number,
        d = r.spaceSeparated,
        f = r.commaSeparated,
        v = r.commaOrSpaceSeparated;
      t.exports = o({
        space: "svg",
        attributes: {
          accentHeight: "accent-height",
          alignmentBaseline: "alignment-baseline",
          arabicForm: "arabic-form",
          baselineShift: "baseline-shift",
          capHeight: "cap-height",
          className: "class",
          clipPath: "clip-path",
          clipRule: "clip-rule",
          colorInterpolation: "color-interpolation",
          colorInterpolationFilters: "color-interpolation-filters",
          colorProfile: "color-profile",
          colorRendering: "color-rendering",
          crossOrigin: "crossorigin",
          dataType: "datatype",
          dominantBaseline: "dominant-baseline",
          enableBackground: "enable-background",
          fillOpacity: "fill-opacity",
          fillRule: "fill-rule",
          floodColor: "flood-color",
          floodOpacity: "flood-opacity",
          fontFamily: "font-family",
          fontSize: "font-size",
          fontSizeAdjust: "font-size-adjust",
          fontStretch: "font-stretch",
          fontStyle: "font-style",
          fontVariant: "font-variant",
          fontWeight: "font-weight",
          glyphName: "glyph-name",
          glyphOrientationHorizontal: "glyph-orientation-horizontal",
          glyphOrientationVertical: "glyph-orientation-vertical",
          hrefLang: "hreflang",
          horizAdvX: "horiz-adv-x",
          horizOriginX: "horiz-origin-x",
          horizOriginY: "horiz-origin-y",
          imageRendering: "image-rendering",
          letterSpacing: "letter-spacing",
          lightingColor: "lighting-color",
          markerEnd: "marker-end",
          markerMid: "marker-mid",
          markerStart: "marker-start",
          navDown: "nav-down",
          navDownLeft: "nav-down-left",
          navDownRight: "nav-down-right",
          navLeft: "nav-left",
          navNext: "nav-next",
          navPrev: "nav-prev",
          navRight: "nav-right",
          navUp: "nav-up",
          navUpLeft: "nav-up-left",
          navUpRight: "nav-up-right",
          onAbort: "onabort",
          onActivate: "onactivate",
          onAfterPrint: "onafterprint",
          onBeforePrint: "onbeforeprint",
          onBegin: "onbegin",
          onCancel: "oncancel",
          onCanPlay: "oncanplay",
          onCanPlayThrough: "oncanplaythrough",
          onChange: "onchange",
          onClick: "onclick",
          onClose: "onclose",
          onCopy: "oncopy",
          onCueChange: "oncuechange",
          onCut: "oncut",
          onDblClick: "ondblclick",
          onDrag: "ondrag",
          onDragEnd: "ondragend",
          onDragEnter: "ondragenter",
          onDragExit: "ondragexit",
          onDragLeave: "ondragleave",
          onDragOver: "ondragover",
          onDragStart: "ondragstart",
          onDrop: "ondrop",
          onDurationChange: "ondurationchange",
          onEmptied: "onemptied",
          onEnd: "onend",
          onEnded: "onended",
          onError: "onerror",
          onFocus: "onfocus",
          onFocusIn: "onfocusin",
          onFocusOut: "onfocusout",
          onHashChange: "onhashchange",
          onInput: "oninput",
          onInvalid: "oninvalid",
          onKeyDown: "onkeydown",
          onKeyPress: "onkeypress",
          onKeyUp: "onkeyup",
          onLoad: "onload",
          onLoadedData: "onloadeddata",
          onLoadedMetadata: "onloadedmetadata",
          onLoadStart: "onloadstart",
          onMessage: "onmessage",
          onMouseDown: "onmousedown",
          onMouseEnter: "onmouseenter",
          onMouseLeave: "onmouseleave",
          onMouseMove: "onmousemove",
          onMouseOut: "onmouseout",
          onMouseOver: "onmouseover",
          onMouseUp: "onmouseup",
          onMouseWheel: "onmousewheel",
          onOffline: "onoffline",
          onOnline: "ononline",
          onPageHide: "onpagehide",
          onPageShow: "onpageshow",
          onPaste: "onpaste",
          onPause: "onpause",
          onPlay: "onplay",
          onPlaying: "onplaying",
          onPopState: "onpopstate",
          onProgress: "onprogress",
          onRateChange: "onratechange",
          onRepeat: "onrepeat",
          onReset: "onreset",
          onResize: "onresize",
          onScroll: "onscroll",
          onSeeked: "onseeked",
          onSeeking: "onseeking",
          onSelect: "onselect",
          onShow: "onshow",
          onStalled: "onstalled",
          onStorage: "onstorage",
          onSubmit: "onsubmit",
          onSuspend: "onsuspend",
          onTimeUpdate: "ontimeupdate",
          onToggle: "ontoggle",
          onUnload: "onunload",
          onVolumeChange: "onvolumechange",
          onWaiting: "onwaiting",
          onZoom: "onzoom",
          overlinePosition: "overline-position",
          overlineThickness: "overline-thickness",
          paintOrder: "paint-order",
          panose1: "panose-1",
          pointerEvents: "pointer-events",
          referrerPolicy: "referrerpolicy",
          renderingIntent: "rendering-intent",
          shapeRendering: "shape-rendering",
          stopColor: "stop-color",
          stopOpacity: "stop-opacity",
          strikethroughPosition: "strikethrough-position",
          strikethroughThickness: "strikethrough-thickness",
          strokeDashArray: "stroke-dasharray",
          strokeDashOffset: "stroke-dashoffset",
          strokeLineCap: "stroke-linecap",
          strokeLineJoin: "stroke-linejoin",
          strokeMiterLimit: "stroke-miterlimit",
          strokeOpacity: "stroke-opacity",
          strokeWidth: "stroke-width",
          tabIndex: "tabindex",
          textAnchor: "text-anchor",
          textDecoration: "text-decoration",
          textRendering: "text-rendering",
          typeOf: "typeof",
          underlinePosition: "underline-position",
          underlineThickness: "underline-thickness",
          unicodeBidi: "unicode-bidi",
          unicodeRange: "unicode-range",
          unitsPerEm: "units-per-em",
          vAlphabetic: "v-alphabetic",
          vHanging: "v-hanging",
          vIdeographic: "v-ideographic",
          vMathematical: "v-mathematical",
          vectorEffect: "vector-effect",
          vertAdvY: "vert-adv-y",
          vertOriginX: "vert-origin-x",
          vertOriginY: "vert-origin-y",
          wordSpacing: "word-spacing",
          writingMode: "writing-mode",
          xHeight: "x-height",
          playbackOrder: "playbackorder",
          timelineBegin: "timelinebegin",
        },
        transform: l,
        properties: {
          about: v,
          accentHeight: h,
          accumulate: null,
          additive: null,
          alignmentBaseline: null,
          alphabetic: h,
          amplitude: h,
          arabicForm: null,
          ascent: h,
          attributeName: null,
          attributeType: null,
          azimuth: h,
          bandwidth: null,
          baselineShift: null,
          baseFrequency: null,
          baseProfile: null,
          bbox: null,
          begin: null,
          bias: h,
          by: null,
          calcMode: null,
          capHeight: h,
          className: d,
          clip: null,
          clipPath: null,
          clipPathUnits: null,
          clipRule: null,
          color: null,
          colorInterpolation: null,
          colorInterpolationFilters: null,
          colorProfile: null,
          colorRendering: null,
          content: null,
          contentScriptType: null,
          contentStyleType: null,
          crossOrigin: null,
          cursor: null,
          cx: null,
          cy: null,
          d: null,
          dataType: null,
          defaultAction: null,
          descent: h,
          diffuseConstant: h,
          direction: null,
          display: null,
          dur: null,
          divisor: h,
          dominantBaseline: null,
          download: c,
          dx: null,
          dy: null,
          edgeMode: null,
          editable: null,
          elevation: h,
          enableBackground: null,
          end: null,
          event: null,
          exponent: h,
          externalResourcesRequired: null,
          fill: null,
          fillOpacity: h,
          fillRule: null,
          filter: null,
          filterRes: null,
          filterUnits: null,
          floodColor: null,
          floodOpacity: null,
          focusable: null,
          focusHighlight: null,
          fontFamily: null,
          fontSize: null,
          fontSizeAdjust: null,
          fontStretch: null,
          fontStyle: null,
          fontVariant: null,
          fontWeight: null,
          format: null,
          fr: null,
          from: null,
          fx: null,
          fy: null,
          g1: f,
          g2: f,
          glyphName: f,
          glyphOrientationHorizontal: null,
          glyphOrientationVertical: null,
          glyphRef: null,
          gradientTransform: null,
          gradientUnits: null,
          handler: null,
          hanging: h,
          hatchContentUnits: null,
          hatchUnits: null,
          height: null,
          href: null,
          hrefLang: null,
          horizAdvX: h,
          horizOriginX: h,
          horizOriginY: h,
          id: null,
          ideographic: h,
          imageRendering: null,
          initialVisibility: null,
          in: null,
          in2: null,
          intercept: h,
          k: h,
          k1: h,
          k2: h,
          k3: h,
          k4: h,
          kernelMatrix: v,
          kernelUnitLength: null,
          keyPoints: null,
          keySplines: null,
          keyTimes: null,
          kerning: null,
          lang: null,
          lengthAdjust: null,
          letterSpacing: null,
          lightingColor: null,
          limitingConeAngle: h,
          local: null,
          markerEnd: null,
          markerMid: null,
          markerStart: null,
          markerHeight: null,
          markerUnits: null,
          markerWidth: null,
          mask: null,
          maskContentUnits: null,
          maskUnits: null,
          mathematical: null,
          max: null,
          media: null,
          mediaCharacterEncoding: null,
          mediaContentEncodings: null,
          mediaSize: h,
          mediaTime: null,
          method: null,
          min: null,
          mode: null,
          name: null,
          navDown: null,
          navDownLeft: null,
          navDownRight: null,
          navLeft: null,
          navNext: null,
          navPrev: null,
          navRight: null,
          navUp: null,
          navUpLeft: null,
          navUpRight: null,
          numOctaves: null,
          observer: null,
          offset: null,
          onAbort: null,
          onActivate: null,
          onAfterPrint: null,
          onBeforePrint: null,
          onBegin: null,
          onCancel: null,
          onCanPlay: null,
          onCanPlayThrough: null,
          onChange: null,
          onClick: null,
          onClose: null,
          onCopy: null,
          onCueChange: null,
          onCut: null,
          onDblClick: null,
          onDrag: null,
          onDragEnd: null,
          onDragEnter: null,
          onDragExit: null,
          onDragLeave: null,
          onDragOver: null,
          onDragStart: null,
          onDrop: null,
          onDurationChange: null,
          onEmptied: null,
          onEnd: null,
          onEnded: null,
          onError: null,
          onFocus: null,
          onFocusIn: null,
          onFocusOut: null,
          onHashChange: null,
          onInput: null,
          onInvalid: null,
          onKeyDown: null,
          onKeyPress: null,
          onKeyUp: null,
          onLoad: null,
          onLoadedData: null,
          onLoadedMetadata: null,
          onLoadStart: null,
          onMessage: null,
          onMouseDown: null,
          onMouseEnter: null,
          onMouseLeave: null,
          onMouseMove: null,
          onMouseOut: null,
          onMouseOver: null,
          onMouseUp: null,
          onMouseWheel: null,
          onOffline: null,
          onOnline: null,
          onPageHide: null,
          onPageShow: null,
          onPaste: null,
          onPause: null,
          onPlay: null,
          onPlaying: null,
          onPopState: null,
          onProgress: null,
          onRateChange: null,
          onRepeat: null,
          onReset: null,
          onResize: null,
          onScroll: null,
          onSeeked: null,
          onSeeking: null,
          onSelect: null,
          onShow: null,
          onStalled: null,
          onStorage: null,
          onSubmit: null,
          onSuspend: null,
          onTimeUpdate: null,
          onToggle: null,
          onUnload: null,
          onVolumeChange: null,
          onWaiting: null,
          onZoom: null,
          opacity: null,
          operator: null,
          order: null,
          orient: null,
          orientation: null,
          origin: null,
          overflow: null,
          overlay: null,
          overlinePosition: h,
          overlineThickness: h,
          paintOrder: null,
          panose1: null,
          path: null,
          pathLength: h,
          patternContentUnits: null,
          patternTransform: null,
          patternUnits: null,
          phase: null,
          ping: d,
          pitch: null,
          playbackOrder: null,
          pointerEvents: null,
          points: null,
          pointsAtX: h,
          pointsAtY: h,
          pointsAtZ: h,
          preserveAlpha: null,
          preserveAspectRatio: null,
          primitiveUnits: null,
          propagate: null,
          property: v,
          r: null,
          radius: null,
          referrerPolicy: null,
          refX: null,
          refY: null,
          rel: v,
          rev: v,
          renderingIntent: null,
          repeatCount: null,
          repeatDur: null,
          requiredExtensions: v,
          requiredFeatures: v,
          requiredFonts: v,
          requiredFormats: v,
          resource: null,
          restart: null,
          result: null,
          rotate: null,
          rx: null,
          ry: null,
          scale: null,
          seed: null,
          shapeRendering: null,
          side: null,
          slope: null,
          snapshotTime: null,
          specularConstant: h,
          specularExponent: h,
          spreadMethod: null,
          spacing: null,
          startOffset: null,
          stdDeviation: null,
          stemh: null,
          stemv: null,
          stitchTiles: null,
          stopColor: null,
          stopOpacity: null,
          strikethroughPosition: h,
          strikethroughThickness: h,
          string: null,
          stroke: null,
          strokeDashArray: v,
          strokeDashOffset: null,
          strokeLineCap: null,
          strokeLineJoin: null,
          strokeMiterLimit: h,
          strokeOpacity: h,
          strokeWidth: null,
          style: null,
          surfaceScale: h,
          syncBehavior: null,
          syncBehaviorDefault: null,
          syncMaster: null,
          syncTolerance: null,
          syncToleranceDefault: null,
          systemLanguage: v,
          tabIndex: h,
          tableValues: null,
          target: null,
          targetX: h,
          targetY: h,
          textAnchor: null,
          textDecoration: null,
          textRendering: null,
          textLength: null,
          timelineBegin: null,
          title: null,
          transformBehavior: null,
          type: null,
          typeOf: v,
          to: null,
          transform: null,
          u1: null,
          u2: null,
          underlinePosition: h,
          underlineThickness: h,
          unicode: null,
          unicodeBidi: null,
          unicodeRange: null,
          unitsPerEm: h,
          values: null,
          vAlphabetic: h,
          vMathematical: h,
          vectorEffect: null,
          vHanging: h,
          vIdeographic: h,
          version: null,
          vertAdvY: h,
          vertOriginX: h,
          vertOriginY: h,
          viewBox: null,
          viewTarget: null,
          visibility: null,
          width: null,
          widths: null,
          wordSpacing: null,
          writingMode: null,
          x: null,
          x1: null,
          x2: null,
          xChannelSelector: null,
          xHeight: h,
          y: null,
          y1: null,
          y2: null,
          yChannelSelector: null,
          z: null,
          zoomAndPan: null,
        },
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(22),
        o = n(58),
        l = n(59),
        data = "data";
      t.exports = function (t, e) {
        var n = r(e),
          m = e,
          y = l;
        if (n in t.normal) return t.property[t.normal[n]];
        n.length > 4 &&
          n.slice(0, 4) === data &&
          c.test(e) &&
          ("-" === e.charAt(4)
            ? (m = (function (t) {
                var e = t.slice(5).replace(h, v);
                return data + e.charAt(0).toUpperCase() + e.slice(1);
              })(e))
            : (e = (function (t) {
                var e = t.slice(4);
                if (h.test(e)) return t;
                (e = e.replace(d, f)), "-" !== e.charAt(0) && (e = "-" + e);
                return data + e;
              })(e)),
          (y = o));
        return new y(m, e);
      };
      var c = /^data[-\w.:]+$/i,
        h = /-[a-z]/g,
        d = /[A-Z]/g;
      function f(t) {
        return "-" + t.toLowerCase();
      }
      function v(t) {
        return t.charAt(1).toUpperCase();
      }
    },
    function (t, e) {},
    function (t, e, n) {
      var r, o;
      !(function (l, c) {
        "use strict";
        void 0 ===
          (o = "function" == typeof (r = c) ? r.call(e, n, e, t) : r) ||
          (t.exports = o);
      })(window, function () {
        "use strict";
        var t = (function () {
          var t = window.Element.prototype;
          if (t.matches) return "matches";
          if (t.matchesSelector) return "matchesSelector";
          for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i] + "MatchesSelector";
            if (t[n]) return n;
          }
        })();
        return function (e, n) {
          return e[t](n);
        };
      });
    },
    function (t, e, n) {
      var r, o;
      window,
        (r = [n(66)]),
        void 0 ===
          (o = function (t) {
            return (function (t, e) {
              "use strict";
              function n(t, e) {
                (this.element = t), (this.parent = e), this.create();
              }
              var r = n.prototype;
              return (
                (r.create = function () {
                  (this.element.style.position = "absolute"),
                    this.element.setAttribute("aria-hidden", "true"),
                    (this.x = 0),
                    (this.shift = 0),
                    (this.element.style[this.parent.originSide] = 0);
                }),
                (r.destroy = function () {
                  this.unselect(), (this.element.style.position = "");
                  var t = this.parent.originSide;
                  (this.element.style[t] = ""),
                    (this.element.style.transform = ""),
                    this.element.removeAttribute("aria-hidden");
                }),
                (r.getSize = function () {
                  this.size = e(this.element);
                }),
                (r.setPosition = function (t) {
                  (this.x = t), this.updateTarget(), this.renderPosition(t);
                }),
                (r.updateTarget = r.setDefaultTarget =
                  function () {
                    var t =
                      "left" == this.parent.originSide
                        ? "marginLeft"
                        : "marginRight";
                    this.target =
                      this.x +
                      this.size[t] +
                      this.size.width * this.parent.cellAlign;
                  }),
                (r.renderPosition = function (t) {
                  var e = "left" === this.parent.originSide ? 1 : -1,
                    n = this.parent.options.percentPosition
                      ? t * e * (this.parent.size.innerWidth / this.size.width)
                      : t * e;
                  this.element.style.transform =
                    "translateX(" + this.parent.getPositionValue(n) + ")";
                }),
                (r.select = function () {
                  this.element.classList.add("is-selected"),
                    this.element.removeAttribute("aria-hidden");
                }),
                (r.unselect = function () {
                  this.element.classList.remove("is-selected"),
                    this.element.setAttribute("aria-hidden", "true");
                }),
                (r.wrapShift = function (t) {
                  (this.shift = t),
                    this.renderPosition(
                      this.x + this.parent.slideableWidth * t
                    );
                }),
                (r.remove = function () {
                  this.element.parentNode.removeChild(this.element);
                }),
                n
              );
            })(0, t);
          }.apply(e, r)) || (t.exports = o);
    },
    function (t, e, n) {
      var r, o;
      window,
        void 0 ===
          (o =
            "function" ==
            typeof (r = function () {
              "use strict";
              function t(t) {
                (this.parent = t),
                  (this.isOriginLeft = "left" == t.originSide),
                  (this.cells = []),
                  (this.outerWidth = 0),
                  (this.height = 0);
              }
              var e = t.prototype;
              return (
                (e.addCell = function (t) {
                  if (
                    (this.cells.push(t),
                    (this.outerWidth += t.size.outerWidth),
                    (this.height = Math.max(t.size.outerHeight, this.height)),
                    1 == this.cells.length)
                  ) {
                    this.x = t.x;
                    var e = this.isOriginLeft ? "marginLeft" : "marginRight";
                    this.firstMargin = t.size[e];
                  }
                }),
                (e.updateTarget = function () {
                  var t = this.isOriginLeft ? "marginRight" : "marginLeft",
                    e = this.getLastCell(),
                    n = e ? e.size[t] : 0,
                    r = this.outerWidth - (this.firstMargin + n);
                  this.target =
                    this.x + this.firstMargin + r * this.parent.cellAlign;
                }),
                (e.getLastCell = function () {
                  return this.cells[this.cells.length - 1];
                }),
                (e.select = function () {
                  this.cells.forEach(function (t) {
                    t.select();
                  });
                }),
                (e.unselect = function () {
                  this.cells.forEach(function (t) {
                    t.unselect();
                  });
                }),
                (e.getCellElements = function () {
                  return this.cells.map(function (t) {
                    return t.element;
                  });
                }),
                t
              );
            })
              ? r.call(e, n, e, t)
              : r) || (t.exports = o);
    },
    function (t, e, n) {
      var r, o;
      window,
        (r = [n(8)]),
        void 0 ===
          (o = function (t) {
            return (function (t, e) {
              "use strict";
              var n = {
                startAnimation: function () {
                  this.isAnimating ||
                    ((this.isAnimating = !0),
                    (this.restingFrames = 0),
                    this.animate());
                },
                animate: function () {
                  this.applyDragForce(), this.applySelectedAttraction();
                  var t = this.x;
                  if (
                    (this.integratePhysics(),
                    this.positionSlider(),
                    this.settle(t),
                    this.isAnimating)
                  ) {
                    var e = this;
                    requestAnimationFrame(function () {
                      e.animate();
                    });
                  }
                },
                positionSlider: function () {
                  var t = this.x;
                  this.options.wrapAround &&
                    this.cells.length > 1 &&
                    ((t = e.modulo(t, this.slideableWidth)),
                    (t -= this.slideableWidth),
                    this.shiftWrapCells(t)),
                    this.setTranslateX(t, this.isAnimating),
                    this.dispatchScrollEvent();
                },
                setTranslateX: function (t, e) {
                  (t += this.cursorPosition),
                    (t = this.options.rightToLeft ? -t : t);
                  var n = this.getPositionValue(t);
                  this.slider.style.transform = e
                    ? "translate3d(" + n + ",0,0)"
                    : "translateX(" + n + ")";
                },
                dispatchScrollEvent: function () {
                  var t = this.slides[0];
                  if (t) {
                    var e = -this.x - t.target,
                      progress = e / this.slidesWidth;
                    this.dispatchEvent("scroll", null, [progress, e]);
                  }
                },
                positionSliderAtSelected: function () {
                  this.cells.length &&
                    ((this.x = -this.selectedSlide.target),
                    (this.velocity = 0),
                    this.positionSlider());
                },
                getPositionValue: function (t) {
                  return this.options.percentPosition
                    ? 0.01 * Math.round((t / this.size.innerWidth) * 1e4) + "%"
                    : Math.round(t) + "px";
                },
                settle: function (t) {
                  !this.isPointerDown &&
                    Math.round(100 * this.x) == Math.round(100 * t) &&
                    this.restingFrames++,
                    this.restingFrames > 2 &&
                      ((this.isAnimating = !1),
                      delete this.isFreeScrolling,
                      this.positionSlider(),
                      this.dispatchEvent("settle", null, [this.selectedIndex]));
                },
                shiftWrapCells: function (t) {
                  var e = this.cursorPosition + t;
                  this._shiftCells(this.beforeShiftCells, e, -1);
                  var n =
                    this.size.innerWidth -
                    (t + this.slideableWidth + this.cursorPosition);
                  this._shiftCells(this.afterShiftCells, n, 1);
                },
                _shiftCells: function (t, e, n) {
                  for (var i = 0; i < t.length; i++) {
                    var r = t[i],
                      o = e > 0 ? n : 0;
                    r.wrapShift(o), (e -= r.size.outerWidth);
                  }
                },
                _unshiftCells: function (t) {
                  if (t && t.length)
                    for (var i = 0; i < t.length; i++) t[i].wrapShift(0);
                },
                integratePhysics: function () {
                  (this.x += this.velocity),
                    (this.velocity *= this.getFrictionFactor());
                },
                applyForce: function (t) {
                  this.velocity += t;
                },
                getFrictionFactor: function () {
                  return (
                    1 -
                    this.options[
                      this.isFreeScrolling ? "freeScrollFriction" : "friction"
                    ]
                  );
                },
                getRestingPosition: function () {
                  return (
                    this.x + this.velocity / (1 - this.getFrictionFactor())
                  );
                },
                applyDragForce: function () {
                  if (this.isDraggable && this.isPointerDown) {
                    var t = this.dragX - this.x - this.velocity;
                    this.applyForce(t);
                  }
                },
                applySelectedAttraction: function () {
                  if (
                    (!this.isDraggable || !this.isPointerDown) &&
                    !this.isFreeScrolling &&
                    this.slides.length
                  ) {
                    var t =
                      (-1 * this.selectedSlide.target - this.x) *
                      this.options.selectedAttraction;
                    this.applyForce(t);
                  }
                },
              };
              return n;
            })(0, t);
          }.apply(e, r)) || (t.exports = o);
    },
    function (t, e, n) {
      var r, o;
      !(function (l, c) {
        (r = [n(10), n(163), n(8)]),
          (o = function (t, e, n) {
            return (function (t, e, n, r) {
              "use strict";
              r.extend(e.defaults, { draggable: ">1", dragThreshold: 3 }),
                e.createMethods.push("_createDrag");
              var o = e.prototype;
              r.extend(o, n.prototype),
                (o._touchActionValue = "pan-y"),
                (o._createDrag = function () {
                  this.on("activate", this.onActivateDrag),
                    this.on("uiChange", this._uiChangeDrag),
                    this.on("deactivate", this.onDeactivateDrag),
                    this.on("cellChange", this.updateDraggable);
                }),
                (o.onActivateDrag = function () {
                  (this.handles = [this.viewport]),
                    this.bindHandles(),
                    this.updateDraggable();
                }),
                (o.onDeactivateDrag = function () {
                  this.unbindHandles(),
                    this.element.classList.remove("is-draggable");
                }),
                (o.updateDraggable = function () {
                  ">1" == this.options.draggable
                    ? (this.isDraggable = this.slides.length > 1)
                    : (this.isDraggable = this.options.draggable),
                    this.isDraggable
                      ? this.element.classList.add("is-draggable")
                      : this.element.classList.remove("is-draggable");
                }),
                (o.bindDrag = function () {
                  (this.options.draggable = !0), this.updateDraggable();
                }),
                (o.unbindDrag = function () {
                  (this.options.draggable = !1), this.updateDraggable();
                }),
                (o._uiChangeDrag = function () {
                  delete this.isFreeScrolling;
                }),
                (o.pointerDown = function (e, n) {
                  this.isDraggable
                    ? this.okayPointerDown(e) &&
                      (this._pointerDownPreventDefault(e),
                      this.pointerDownFocus(e),
                      document.activeElement != this.element &&
                        this.pointerDownBlur(),
                      (this.dragX = this.x),
                      this.viewport.classList.add("is-pointer-down"),
                      (this.pointerDownScroll = c()),
                      t.addEventListener("scroll", this),
                      this._pointerDownDefault(e, n))
                    : this._pointerDownDefault(e, n);
                }),
                (o._pointerDownDefault = function (t, e) {
                  (this.pointerDownPointer = {
                    pageX: e.pageX,
                    pageY: e.pageY,
                  }),
                    this._bindPostStartEvents(t),
                    this.dispatchEvent("pointerDown", t, [e]);
                });
              var l = { INPUT: !0, TEXTAREA: !0, SELECT: !0 };
              function c() {
                return { x: t.pageXOffset, y: t.pageYOffset };
              }
              return (
                (o.pointerDownFocus = function (t) {
                  l[t.target.nodeName] || this.focus();
                }),
                (o._pointerDownPreventDefault = function (t) {
                  var e = "touchstart" == t.type,
                    n = "touch" == t.pointerType,
                    r = l[t.target.nodeName];
                  e || n || r || t.preventDefault();
                }),
                (o.hasDragStarted = function (t) {
                  return Math.abs(t.x) > this.options.dragThreshold;
                }),
                (o.pointerUp = function (t, e) {
                  delete this.isTouchScrolling,
                    this.viewport.classList.remove("is-pointer-down"),
                    this.dispatchEvent("pointerUp", t, [e]),
                    this._dragPointerUp(t, e);
                }),
                (o.pointerDone = function () {
                  t.removeEventListener("scroll", this),
                    delete this.pointerDownScroll;
                }),
                (o.dragStart = function (e, n) {
                  this.isDraggable &&
                    ((this.dragStartPosition = this.x),
                    this.startAnimation(),
                    t.removeEventListener("scroll", this),
                    this.dispatchEvent("dragStart", e, [n]));
                }),
                (o.pointerMove = function (t, e) {
                  var n = this._dragPointerMove(t, e);
                  this.dispatchEvent("pointerMove", t, [e, n]),
                    this._dragMove(t, e, n);
                }),
                (o.dragMove = function (t, e, n) {
                  if (this.isDraggable) {
                    t.preventDefault(), (this.previousDragX = this.dragX);
                    var r = this.options.rightToLeft ? -1 : 1;
                    this.options.wrapAround && (n.x %= this.slideableWidth);
                    var o = this.dragStartPosition + n.x * r;
                    if (!this.options.wrapAround && this.slides.length) {
                      var l = Math.max(
                        -this.slides[0].target,
                        this.dragStartPosition
                      );
                      o = o > l ? 0.5 * (o + l) : o;
                      var c = Math.min(
                        -this.getLastSlide().target,
                        this.dragStartPosition
                      );
                      o = o < c ? 0.5 * (o + c) : o;
                    }
                    (this.dragX = o),
                      (this.dragMoveTime = new Date()),
                      this.dispatchEvent("dragMove", t, [e, n]);
                  }
                }),
                (o.dragEnd = function (t, e) {
                  if (this.isDraggable) {
                    this.options.freeScroll && (this.isFreeScrolling = !0);
                    var n = this.dragEndRestingSelect();
                    if (this.options.freeScroll && !this.options.wrapAround) {
                      var r = this.getRestingPosition();
                      this.isFreeScrolling =
                        -r > this.slides[0].target &&
                        -r < this.getLastSlide().target;
                    } else
                      this.options.freeScroll ||
                        n != this.selectedIndex ||
                        (n += this.dragEndBoostSelect());
                    delete this.previousDragX,
                      (this.isDragSelect = this.options.wrapAround),
                      this.select(n),
                      delete this.isDragSelect,
                      this.dispatchEvent("dragEnd", t, [e]);
                  }
                }),
                (o.dragEndRestingSelect = function () {
                  var t = this.getRestingPosition(),
                    e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
                    n = this._getClosestResting(t, e, 1),
                    r = this._getClosestResting(t, e, -1);
                  return n.distance < r.distance ? n.index : r.index;
                }),
                (o._getClosestResting = function (t, e, n) {
                  for (
                    var r = this.selectedIndex,
                      o = 1 / 0,
                      l =
                        this.options.contain && !this.options.wrapAround
                          ? function (t, e) {
                              return t <= e;
                            }
                          : function (t, e) {
                              return t < e;
                            };
                    l(e, o) &&
                    ((r += n),
                    (o = e),
                    null !== (e = this.getSlideDistance(-t, r)));

                  )
                    e = Math.abs(e);
                  return { distance: o, index: r - n };
                }),
                (o.getSlideDistance = function (t, e) {
                  var n = this.slides.length,
                    o = this.options.wrapAround && n > 1,
                    l = o ? r.modulo(e, n) : e,
                    c = this.slides[l];
                  if (!c) return null;
                  var h = o ? this.slideableWidth * Math.floor(e / n) : 0;
                  return t - (c.target + h);
                }),
                (o.dragEndBoostSelect = function () {
                  if (
                    void 0 === this.previousDragX ||
                    !this.dragMoveTime ||
                    new Date() - this.dragMoveTime > 100
                  )
                    return 0;
                  var t = this.getSlideDistance(
                      -this.dragX,
                      this.selectedIndex
                    ),
                    e = this.previousDragX - this.dragX;
                  return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0;
                }),
                (o.staticClick = function (t, e) {
                  var n = this.getParentCell(t.target),
                    r = n && n.element,
                    o = n && this.cells.indexOf(n);
                  this.dispatchEvent("staticClick", t, [e, r, o]);
                }),
                (o.onscroll = function () {
                  var t = c(),
                    e = this.pointerDownScroll.x - t.x,
                    n = this.pointerDownScroll.y - t.y;
                  (Math.abs(e) > 3 || Math.abs(n) > 3) && this._pointerDone();
                }),
                e
              );
            })(l, t, e, n);
          }.apply(e, r)),
          void 0 === o || (t.exports = o);
      })(window);
    },
    function (t, e, n) {
      var r, o;
      !(function (l, c) {
        (r = [n(24)]),
          (o = function (t) {
            return (function (t, e) {
              "use strict";
              function n() {}
              var r = (n.prototype = Object.create(e.prototype));
              (r.bindHandles = function () {
                this._bindHandles(!0);
              }),
                (r.unbindHandles = function () {
                  this._bindHandles(!1);
                }),
                (r._bindHandles = function (e) {
                  for (
                    var n = (e = void 0 === e || e)
                        ? "addEventListener"
                        : "removeEventListener",
                      r = e ? this._touchActionValue : "",
                      i = 0;
                    i < this.handles.length;
                    i++
                  ) {
                    var o = this.handles[i];
                    this._bindStartEvent(o, e),
                      o[n]("click", this),
                      t.PointerEvent && (o.style.touchAction = r);
                  }
                }),
                (r._touchActionValue = "none"),
                (r.pointerDown = function (t, e) {
                  this.okayPointerDown(t) &&
                    ((this.pointerDownPointer = {
                      pageX: e.pageX,
                      pageY: e.pageY,
                    }),
                    t.preventDefault(),
                    this.pointerDownBlur(),
                    this._bindPostStartEvents(t),
                    this.emitEvent("pointerDown", [t, e]));
                });
              var o = { TEXTAREA: !0, INPUT: !0, SELECT: !0, OPTION: !0 },
                l = {
                  radio: !0,
                  checkbox: !0,
                  button: !0,
                  submit: !0,
                  image: !0,
                  file: !0,
                };
              return (
                (r.okayPointerDown = function (t) {
                  var e = o[t.target.nodeName],
                    n = l[t.target.type],
                    r = !e || n;
                  return r || this._pointerReset(), r;
                }),
                (r.pointerDownBlur = function () {
                  var t = document.activeElement;
                  t && t.blur && t != document.body && t.blur();
                }),
                (r.pointerMove = function (t, e) {
                  var n = this._dragPointerMove(t, e);
                  this.emitEvent("pointerMove", [t, e, n]),
                    this._dragMove(t, e, n);
                }),
                (r._dragPointerMove = function (t, e) {
                  var n = {
                    x: e.pageX - this.pointerDownPointer.pageX,
                    y: e.pageY - this.pointerDownPointer.pageY,
                  };
                  return (
                    !this.isDragging &&
                      this.hasDragStarted(n) &&
                      this._dragStart(t, e),
                    n
                  );
                }),
                (r.hasDragStarted = function (t) {
                  return Math.abs(t.x) > 3 || Math.abs(t.y) > 3;
                }),
                (r.pointerUp = function (t, e) {
                  this.emitEvent("pointerUp", [t, e]),
                    this._dragPointerUp(t, e);
                }),
                (r._dragPointerUp = function (t, e) {
                  this.isDragging
                    ? this._dragEnd(t, e)
                    : this._staticClick(t, e);
                }),
                (r._dragStart = function (t, e) {
                  (this.isDragging = !0),
                    (this.isPreventingClicks = !0),
                    this.dragStart(t, e);
                }),
                (r.dragStart = function (t, e) {
                  this.emitEvent("dragStart", [t, e]);
                }),
                (r._dragMove = function (t, e, n) {
                  this.isDragging && this.dragMove(t, e, n);
                }),
                (r.dragMove = function (t, e, n) {
                  t.preventDefault(), this.emitEvent("dragMove", [t, e, n]);
                }),
                (r._dragEnd = function (t, e) {
                  (this.isDragging = !1),
                    setTimeout(
                      function () {
                        delete this.isPreventingClicks;
                      }.bind(this)
                    ),
                    this.dragEnd(t, e);
                }),
                (r.dragEnd = function (t, e) {
                  this.emitEvent("dragEnd", [t, e]);
                }),
                (r.onclick = function (t) {
                  this.isPreventingClicks && t.preventDefault();
                }),
                (r._staticClick = function (t, e) {
                  (this.isIgnoringMouseUp && "mouseup" == t.type) ||
                    (this.staticClick(t, e),
                    "mouseup" != t.type &&
                      ((this.isIgnoringMouseUp = !0),
                      setTimeout(
                        function () {
                          delete this.isIgnoringMouseUp;
                        }.bind(this),
                        400
                      )));
                }),
                (r.staticClick = function (t, e) {
                  this.emitEvent("staticClick", [t, e]);
                }),
                (n.getPointerPoint = e.getPointerPoint),
                n
              );
            })(l, t);
          }.apply(e, r)),
          void 0 === o || (t.exports = o);
      })(window);
    },
    function (t, e, n) {
      var r, o;
      window,
        (r = [n(10), n(24), n(8)]),
        void 0 ===
          (o = function (t, e, n) {
            return (function (t, e, n, r) {
              "use strict";
              var o = "http://www.w3.org/2000/svg";
              function l(t, e) {
                (this.direction = t), (this.parent = e), this._create();
              }
              function c(t) {
                return "string" == typeof t
                  ? t
                  : "M " +
                      t.x0 +
                      ",50 L " +
                      t.x1 +
                      "," +
                      (t.y1 + 50) +
                      " L " +
                      t.x2 +
                      "," +
                      (t.y2 + 50) +
                      " L " +
                      t.x3 +
                      ",50  L " +
                      t.x2 +
                      "," +
                      (50 - t.y2) +
                      " L " +
                      t.x1 +
                      "," +
                      (50 - t.y1) +
                      " Z";
              }
              (l.prototype = Object.create(n.prototype)),
                (l.prototype._create = function () {
                  (this.isEnabled = !0),
                    (this.isPrevious = -1 == this.direction);
                  var t = this.parent.options.rightToLeft ? 1 : -1;
                  this.isLeft = this.direction == t;
                  var element = (this.element =
                    document.createElement("button"));
                  (element.className =
                    "flickity-button flickity-prev-next-button"),
                    (element.className += this.isPrevious
                      ? " previous"
                      : " next"),
                    element.setAttribute("type", "button"),
                    this.disable(),
                    element.setAttribute(
                      "aria-label",
                      this.isPrevious ? "Previous" : "Next"
                    );
                  var svg = this.createSVG();
                  element.appendChild(svg),
                    this.parent.on("select", this.update.bind(this)),
                    this.on(
                      "pointerDown",
                      this.parent.childUIPointerDown.bind(this.parent)
                    );
                }),
                (l.prototype.activate = function () {
                  this.bindStartEvent(this.element),
                    this.element.addEventListener("click", this),
                    this.parent.element.appendChild(this.element);
                }),
                (l.prototype.deactivate = function () {
                  this.parent.element.removeChild(this.element),
                    this.unbindStartEvent(this.element),
                    this.element.removeEventListener("click", this);
                }),
                (l.prototype.createSVG = function () {
                  var svg = document.createElementNS(o, "svg");
                  svg.setAttribute("class", "flickity-button-icon"),
                    svg.setAttribute("viewBox", "0 0 100 100");
                  var path = document.createElementNS(o, "path"),
                    t = c(this.parent.options.arrowShape);
                  return (
                    path.setAttribute("d", t),
                    path.setAttribute("class", "arrow"),
                    this.isLeft ||
                      path.setAttribute(
                        "transform",
                        "translate(100, 100) rotate(180) "
                      ),
                    svg.appendChild(path),
                    svg
                  );
                }),
                (l.prototype.handleEvent = r.handleEvent),
                (l.prototype.onclick = function () {
                  if (this.isEnabled) {
                    this.parent.uiChange();
                    var t = this.isPrevious ? "previous" : "next";
                    this.parent[t]();
                  }
                }),
                (l.prototype.enable = function () {
                  this.isEnabled ||
                    ((this.element.disabled = !1), (this.isEnabled = !0));
                }),
                (l.prototype.disable = function () {
                  this.isEnabled &&
                    ((this.element.disabled = !0), (this.isEnabled = !1));
                }),
                (l.prototype.update = function () {
                  var t = this.parent.slides;
                  if (this.parent.options.wrapAround && t.length > 1)
                    this.enable();
                  else {
                    var e = t.length ? t.length - 1 : 0,
                      n = this.isPrevious ? 0 : e;
                    this[
                      this.parent.selectedIndex == n ? "disable" : "enable"
                    ]();
                  }
                }),
                (l.prototype.destroy = function () {
                  this.deactivate(), this.allOff();
                }),
                r.extend(e.defaults, {
                  prevNextButtons: !0,
                  arrowShape: {
                    x0: 10,
                    x1: 60,
                    y1: 50,
                    x2: 70,
                    y2: 40,
                    x3: 30,
                  },
                }),
                e.createMethods.push("_createPrevNextButtons");
              var h = e.prototype;
              return (
                (h._createPrevNextButtons = function () {
                  this.options.prevNextButtons &&
                    ((this.prevButton = new l(-1, this)),
                    (this.nextButton = new l(1, this)),
                    this.on("activate", this.activatePrevNextButtons));
                }),
                (h.activatePrevNextButtons = function () {
                  this.prevButton.activate(),
                    this.nextButton.activate(),
                    this.on("deactivate", this.deactivatePrevNextButtons);
                }),
                (h.deactivatePrevNextButtons = function () {
                  this.prevButton.deactivate(),
                    this.nextButton.deactivate(),
                    this.off("deactivate", this.deactivatePrevNextButtons);
                }),
                (e.PrevNextButton = l),
                e
              );
            })(0, t, e, n);
          }.apply(e, r)) || (t.exports = o);
    },
    function (t, e, n) {
      var r, o;
      window,
        (r = [n(10), n(24), n(8)]),
        void 0 ===
          (o = function (t, e, n) {
            return (function (t, e, n, r) {
              "use strict";
              function o(t) {
                (this.parent = t), this._create();
              }
              (o.prototype = Object.create(n.prototype)),
                (o.prototype._create = function () {
                  (this.holder = document.createElement("ol")),
                    (this.holder.className = "flickity-page-dots"),
                    (this.dots = []),
                    (this.handleClick = this.onClick.bind(this)),
                    this.on(
                      "pointerDown",
                      this.parent.childUIPointerDown.bind(this.parent)
                    );
                }),
                (o.prototype.activate = function () {
                  this.setDots(),
                    this.holder.addEventListener("click", this.handleClick),
                    this.bindStartEvent(this.holder),
                    this.parent.element.appendChild(this.holder);
                }),
                (o.prototype.deactivate = function () {
                  this.holder.removeEventListener("click", this.handleClick),
                    this.unbindStartEvent(this.holder),
                    this.parent.element.removeChild(this.holder);
                }),
                (o.prototype.setDots = function () {
                  var t = this.parent.slides.length - this.dots.length;
                  t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t);
                }),
                (o.prototype.addDots = function (t) {
                  for (
                    var e = document.createDocumentFragment(),
                      n = [],
                      r = this.dots.length,
                      o = r + t,
                      i = r;
                    i < o;
                    i++
                  ) {
                    var l = document.createElement("li");
                    (l.className = "dot"),
                      l.setAttribute("aria-label", "Page dot " + (i + 1)),
                      e.appendChild(l),
                      n.push(l);
                  }
                  this.holder.appendChild(e), (this.dots = this.dots.concat(n));
                }),
                (o.prototype.removeDots = function (t) {
                  this.dots
                    .splice(this.dots.length - t, t)
                    .forEach(function (t) {
                      this.holder.removeChild(t);
                    }, this);
                }),
                (o.prototype.updateSelected = function () {
                  this.selectedDot &&
                    ((this.selectedDot.className = "dot"),
                    this.selectedDot.removeAttribute("aria-current")),
                    this.dots.length &&
                      ((this.selectedDot =
                        this.dots[this.parent.selectedIndex]),
                      (this.selectedDot.className = "dot is-selected"),
                      this.selectedDot.setAttribute("aria-current", "step"));
                }),
                (o.prototype.onTap = o.prototype.onClick =
                  function (t) {
                    var e = t.target;
                    if ("LI" == e.nodeName) {
                      this.parent.uiChange();
                      var n = this.dots.indexOf(e);
                      this.parent.select(n);
                    }
                  }),
                (o.prototype.destroy = function () {
                  this.deactivate(), this.allOff();
                }),
                (e.PageDots = o),
                r.extend(e.defaults, { pageDots: !0 }),
                e.createMethods.push("_createPageDots");
              var l = e.prototype;
              return (
                (l._createPageDots = function () {
                  this.options.pageDots &&
                    ((this.pageDots = new o(this)),
                    this.on("activate", this.activatePageDots),
                    this.on("select", this.updateSelectedPageDots),
                    this.on("cellChange", this.updatePageDots),
                    this.on("resize", this.updatePageDots),
                    this.on("deactivate", this.deactivatePageDots));
                }),
                (l.activatePageDots = function () {
                  this.pageDots.activate();
                }),
                (l.updateSelectedPageDots = function () {
                  this.pageDots.updateSelected();
                }),
                (l.updatePageDots = function () {
                  this.pageDots.setDots();
                }),
                (l.deactivatePageDots = function () {
                  this.pageDots.deactivate();
                }),
                (e.PageDots = o),
                e
              );
            })(0, t, e, n);
          }.apply(e, r)) || (t.exports = o);
    },
    function (t, e, n) {
      var r, o;
      window,
        (r = [n(23), n(8), n(10)]),
        void 0 ===
          (o = function (t, e, n) {
            return (function (t, e, n) {
              "use strict";
              function r(t) {
                (this.parent = t),
                  (this.state = "stopped"),
                  (this.onVisibilityChange = this.visibilityChange.bind(this)),
                  (this.onVisibilityPlay = this.visibilityPlay.bind(this));
              }
              (r.prototype = Object.create(t.prototype)),
                (r.prototype.play = function () {
                  "playing" != this.state &&
                    (document.hidden
                      ? document.addEventListener(
                          "visibilitychange",
                          this.onVisibilityPlay
                        )
                      : ((this.state = "playing"),
                        document.addEventListener(
                          "visibilitychange",
                          this.onVisibilityChange
                        ),
                        this.tick()));
                }),
                (r.prototype.tick = function () {
                  if ("playing" == this.state) {
                    var time = this.parent.options.autoPlay;
                    time = "number" == typeof time ? time : 3e3;
                    var t = this;
                    this.clear(),
                      (this.timeout = setTimeout(function () {
                        t.parent.next(!0), t.tick();
                      }, time));
                  }
                }),
                (r.prototype.stop = function () {
                  (this.state = "stopped"),
                    this.clear(),
                    document.removeEventListener(
                      "visibilitychange",
                      this.onVisibilityChange
                    );
                }),
                (r.prototype.clear = function () {
                  clearTimeout(this.timeout);
                }),
                (r.prototype.pause = function () {
                  "playing" == this.state &&
                    ((this.state = "paused"), this.clear());
                }),
                (r.prototype.unpause = function () {
                  "paused" == this.state && this.play();
                }),
                (r.prototype.visibilityChange = function () {
                  this[document.hidden ? "pause" : "unpause"]();
                }),
                (r.prototype.visibilityPlay = function () {
                  this.play(),
                    document.removeEventListener(
                      "visibilitychange",
                      this.onVisibilityPlay
                    );
                }),
                e.extend(n.defaults, { pauseAutoPlayOnHover: !0 }),
                n.createMethods.push("_createPlayer");
              var o = n.prototype;
              return (
                (o._createPlayer = function () {
                  (this.player = new r(this)),
                    this.on("activate", this.activatePlayer),
                    this.on("uiChange", this.stopPlayer),
                    this.on("pointerDown", this.stopPlayer),
                    this.on("deactivate", this.deactivatePlayer);
                }),
                (o.activatePlayer = function () {
                  this.options.autoPlay &&
                    (this.player.play(),
                    this.element.addEventListener("mouseenter", this));
                }),
                (o.playPlayer = function () {
                  this.player.play();
                }),
                (o.stopPlayer = function () {
                  this.player.stop();
                }),
                (o.pausePlayer = function () {
                  this.player.pause();
                }),
                (o.unpausePlayer = function () {
                  this.player.unpause();
                }),
                (o.deactivatePlayer = function () {
                  this.player.stop(),
                    this.element.removeEventListener("mouseenter", this);
                }),
                (o.onmouseenter = function () {
                  this.options.pauseAutoPlayOnHover &&
                    (this.player.pause(),
                    this.element.addEventListener("mouseleave", this));
                }),
                (o.onmouseleave = function () {
                  this.player.unpause(),
                    this.element.removeEventListener("mouseleave", this);
                }),
                (n.Player = r),
                n
              );
            })(t, e, n);
          }.apply(e, r)) || (t.exports = o);
    },
    function (t, e, n) {
      var r, o;
      window,
        (r = [n(10), n(8)]),
        void 0 ===
          (o = function (t, e) {
            return (function (t, e, n) {
              "use strict";
              function r(t) {
                var e = document.createDocumentFragment();
                return (
                  t.forEach(function (t) {
                    e.appendChild(t.element);
                  }),
                  e
                );
              }
              var o = e.prototype;
              return (
                (o.insert = function (t, e) {
                  var n = this._makeCells(t);
                  if (n && n.length) {
                    var o = this.cells.length;
                    e = void 0 === e ? o : e;
                    var l = r(n),
                      c = e == o;
                    if (c) this.slider.appendChild(l);
                    else {
                      var h = this.cells[e].element;
                      this.slider.insertBefore(l, h);
                    }
                    if (0 === e) this.cells = n.concat(this.cells);
                    else if (c) this.cells = this.cells.concat(n);
                    else {
                      var d = this.cells.splice(e, o - e);
                      this.cells = this.cells.concat(n).concat(d);
                    }
                    this._sizeCells(n), this.cellChange(e, !0);
                  }
                }),
                (o.append = function (t) {
                  this.insert(t, this.cells.length);
                }),
                (o.prepend = function (t) {
                  this.insert(t, 0);
                }),
                (o.remove = function (t) {
                  var e = this.getCells(t);
                  if (e && e.length) {
                    var r = this.cells.length - 1;
                    e.forEach(function (t) {
                      t.remove();
                      var e = this.cells.indexOf(t);
                      (r = Math.min(e, r)), n.removeFrom(this.cells, t);
                    }, this),
                      this.cellChange(r, !0);
                  }
                }),
                (o.cellSizeChange = function (t) {
                  var e = this.getCell(t);
                  if (e) {
                    e.getSize();
                    var n = this.cells.indexOf(e);
                    this.cellChange(n);
                  }
                }),
                (o.cellChange = function (t, e) {
                  var n = this.selectedElement;
                  this._positionCells(t),
                    this._getWrapShiftCells(),
                    this.setGallerySize();
                  var r = this.getCell(n);
                  r && (this.selectedIndex = this.getCellSlideIndex(r)),
                    (this.selectedIndex = Math.min(
                      this.slides.length - 1,
                      this.selectedIndex
                    )),
                    this.emitEvent("cellChange", [t]),
                    this.select(this.selectedIndex),
                    e && this.positionSliderAtSelected();
                }),
                e
              );
            })(0, t, e);
          }.apply(e, r)) || (t.exports = o);
    },
    function (t, e, n) {
      var r, o;
      window,
        (r = [n(10), n(8)]),
        void 0 ===
          (o = function (t, e) {
            return (function (t, e, n) {
              "use strict";
              e.createMethods.push("_createLazyload");
              var r = e.prototype;
              function o(t) {
                if ("IMG" == t.nodeName) {
                  var e = t.getAttribute("data-flickity-lazyload"),
                    r = t.getAttribute("data-flickity-lazyload-src"),
                    o = t.getAttribute("data-flickity-lazyload-srcset");
                  if (e || r || o) return [t];
                }
                var l =
                    "img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]",
                  c = t.querySelectorAll(l);
                return n.makeArray(c);
              }
              function l(img, t) {
                (this.img = img), (this.flickity = t), this.load();
              }
              return (
                (r._createLazyload = function () {
                  this.on("select", this.lazyLoad);
                }),
                (r.lazyLoad = function () {
                  var t = this.options.lazyLoad;
                  if (t) {
                    var e = "number" == typeof t ? t : 0,
                      n = this.getAdjacentCellElements(e),
                      r = [];
                    n.forEach(function (t) {
                      var e = o(t);
                      r = r.concat(e);
                    }),
                      r.forEach(function (img) {
                        new l(img, this);
                      }, this);
                  }
                }),
                (l.prototype.handleEvent = n.handleEvent),
                (l.prototype.load = function () {
                  this.img.addEventListener("load", this),
                    this.img.addEventListener("error", this);
                  var t =
                      this.img.getAttribute("data-flickity-lazyload") ||
                      this.img.getAttribute("data-flickity-lazyload-src"),
                    e = this.img.getAttribute("data-flickity-lazyload-srcset");
                  (this.img.src = t),
                    e && this.img.setAttribute("srcset", e),
                    this.img.removeAttribute("data-flickity-lazyload"),
                    this.img.removeAttribute("data-flickity-lazyload-src"),
                    this.img.removeAttribute("data-flickity-lazyload-srcset");
                }),
                (l.prototype.onload = function (t) {
                  this.complete(t, "flickity-lazyloaded");
                }),
                (l.prototype.onerror = function (t) {
                  this.complete(t, "flickity-lazyerror");
                }),
                (l.prototype.complete = function (t, e) {
                  this.img.removeEventListener("load", this),
                    this.img.removeEventListener("error", this);
                  var n = this.flickity.getParentCell(this.img),
                    r = n && n.element;
                  this.flickity.cellSizeChange(r),
                    this.img.classList.add(e),
                    this.flickity.dispatchEvent("lazyLoad", t, r);
                }),
                (e.LazyLoader = l),
                e
              );
            })(0, t, e);
          }.apply(e, r)) || (t.exports = o);
    },
    function (t, e, n) {
      "use strict";
      n(67);
    },
    function (t, e, n) {
      var r = n(3)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        "/*purgecss start ignore*/\n\n/*! Flickity v2.3.0\nhttps://flickity.metafizzy.co\n---------------------------------------------- */\n.flickity-enabled{\n  position:relative\n}\n.flickity-enabled:focus{\n  outline:none\n}\n.flickity-viewport{\n  overflow:hidden;\n  position:relative;\n  height:100%\n}\n.flickity-slider{\n  position:absolute;\n  width:100%;\n  height:100%\n}\n.flickity-enabled.is-draggable{\n  -webkit-tap-highlight-color:transparent;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.flickity-enabled.is-draggable .flickity-viewport{\n  cursor:move;\n  cursor:grab\n}\n.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down{\n  cursor:grabbing\n}\n.flickity-button{\n  position:absolute;\n  background:hsla(0,0%,100%,.75);\n  border:none;\n  color:#333\n}\n.flickity-button:hover{\n  background:#fff;\n  cursor:pointer\n}\n.flickity-button:focus{\n  outline:none;\n  box-shadow:0 0 0 5px #19f\n}\n.flickity-button:active{\n  opacity:.6\n}\n.flickity-button:disabled{\n  opacity:.3;\n  cursor:auto;\n  pointer-events:none\n}\n.flickity-button-icon{\n  fill:currentColor\n}\n.flickity-prev-next-button{\n  top:50%;\n  width:44px;\n  height:44px;\n  border-radius:50%;\n  transform:translateY(-50%)\n}\n.flickity-prev-next-button.previous{\n  left:10px\n}\n.flickity-prev-next-button.next{\n  right:10px\n}\n.flickity-rtl .flickity-prev-next-button.previous{\n  left:auto;\n  right:10px\n}\n.flickity-rtl .flickity-prev-next-button.next{\n  right:auto;\n  left:10px\n}\n.flickity-prev-next-button .flickity-button-icon{\n  position:absolute;\n  left:20%;\n  top:20%;\n  width:60%;\n  height:60%\n}\n.flickity-page-dots{\n  position:absolute;\n  width:100%;\n  bottom:-25px;\n  padding:0;\n  margin:0;\n  list-style:none;\n  text-align:center;\n  line-height:1\n}\n.flickity-rtl .flickity-page-dots{\n  direction:rtl\n}\n.flickity-page-dots .dot{\n  display:inline-block;\n  width:10px;\n  height:10px;\n  margin:0 8px;\n  background:#333;\n  border-radius:50%;\n  opacity:.25;\n  cursor:pointer\n}\n.flickity-page-dots .dot.is-selected{\n  opacity:1\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
  ],
]);
