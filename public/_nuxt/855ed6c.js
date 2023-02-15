(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    201: function (e, n, t) {
      var content = t(208);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, t(4).default)("86edb64e", content, !0, { sourceMap: !1 });
    },
    207: function (e, n, t) {
      "use strict";
      t(201);
    },
    208: function (e, n, t) {
      var r = t(3)(function (i) {
        return i[1];
      });
      r.push([
        e.i,
        "/*purgecss start ignore*/\n.sidebar[data-v-1d2e7b20]{\n  position:fixed;\n  top:0px;\n  right:0px;\n  bottom:0px;\n  left:0px;\n  z-index:30;\n  display:flex;\n  height:100%;\n  width:100%;\n  flex-direction:column;\n  padding-bottom:3rem;\n  background:linear-gradient(180deg,#75d7d8 91px,#fff 800px);\n  overscroll-behavior:contain\n}\n.sidebar.with-footer[data-v-1d2e7b20]{\n  z-index:50;\n  padding-bottom:0px\n}\n.sidebar__header[data-v-1d2e7b20]{\n    position:relative;\n    --tw-bg-opacity:1;\n    background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n    text-align:center;\n}\n.sidebar__header h1[data-v-1d2e7b20]{\n      margin-top:0.25rem;\n      padding:0.5rem;\n      font-size:1.5rem;\n      line-height:2rem;\n      font-weight:700\n}\n.sidebar__header button[data-v-1d2e7b20]{\n      position:absolute;\n      top:0px;\n      right:0px;\n      display:flex;\n      height:100%;\n      align-items:center;\n      background-color:transparent;\n      font-size:1.25rem;\n      line-height:1.75rem;\n      outline:2px solid transparent;\n      outline-offset:2px\n}\n.sidebar__content[data-v-1d2e7b20]{\n    width:100%;\n    flex:1 1 0%;\n    align-self:center;\n    padding-left:1rem;\n    padding-right:1rem;\n    padding-top:3rem;\n    padding-bottom:3rem;\n    font-size:1.25rem;\n    line-height:1.75rem\n}\n.sidebar__footer[data-v-1d2e7b20]{\n    display:flex;\n    justify-content:space-between\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (e.exports = r);
    },
    210: function (e, n, t) {
      "use strict";
      t.r(n);
      var r = t(0).a.extend({
          name: "Sidebar",
          props: { title: { type: String, required: !0 } },
          computed: {
            hasFooter() {
              return !!this.$slots.footer;
            },
          },
        }),
        o = (t(207), t(2)),
        component = Object(o.a)(
          r,
          function () {
            var e = this,
              n = e._self._c;
            e._self._setupProxy;
            return n(
              "aside",
              { staticClass: "sidebar", class: { "with-footer": e.hasFooter } },
              [
                n("div", { staticClass: "sidebar__header themed" }, [
                  n("h1", [e._v(e._s(e.title))]),
                  n(
                    "button",
                    {
                      on: {
                        click: function (n) {
                          return e.$emit("close");
                        },
                      },
                    },
                    [
                      n(
                        "svg",
                        {
                          staticClass: "x w-6 h-6",
                          attrs: { viewBox: "0 0 20 20", fill: "currentColor" },
                        },
                        [
                          n("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                              "clip-rule": "evenodd",
                            },
                          }),
                        ]
                      ),
                    ]
                  ),
                ]),
                n(
                  "div",
                  { staticClass: "sidebar__content" },
                  [e._t("default")],
                  2
                ),
                e.hasFooter
                  ? n(
                      "div",
                      { staticClass: "sidebar__footer" },
                      [e._t("footer")],
                      2
                    )
                  : e._e(),
              ]
            );
          },
          [],
          !1,
          null,
          "1d2e7b20",
          null
        );
      n.default = component.exports;
    },
  },
]);
