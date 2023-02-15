(window.webpackJsonp = window.webpackJsonp || []).push([
  [19, 20],
  {
    201: function (e, t, n) {
      var content = n(208);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, n(4).default)("86edb64e", content, !0, { sourceMap: !1 });
    },
    207: function (e, t, n) {
      "use strict";
      n(201);
    },
    208: function (e, t, n) {
      var r = n(3)(function (i) {
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
    210: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(0).a.extend({
          name: "Sidebar",
          props: { title: { type: String, required: !0 } },
          computed: {
            hasFooter() {
              return !!this.$slots.footer;
            },
          },
        }),
        o = (n(207), n(2)),
        component = Object(o.a)(
          r,
          function () {
            var e = this,
              t = e._self._c;
            e._self._setupProxy;
            return t(
              "aside",
              { staticClass: "sidebar", class: { "with-footer": e.hasFooter } },
              [
                t("div", { staticClass: "sidebar__header themed" }, [
                  t("h1", [e._v(e._s(e.title))]),
                  t(
                    "button",
                    {
                      on: {
                        click: function (t) {
                          return e.$emit("close");
                        },
                      },
                    },
                    [
                      t(
                        "svg",
                        {
                          staticClass: "x w-6 h-6",
                          attrs: { viewBox: "0 0 20 20", fill: "currentColor" },
                        },
                        [
                          t("path", {
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
                t(
                  "div",
                  { staticClass: "sidebar__content" },
                  [e._t("default")],
                  2
                ),
                e.hasFooter
                  ? t(
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
      t.default = component.exports;
    },
    292: function (e, t, n) {
      var content = n(371);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, n(4).default)("2ae3adfb", content, !0, { sourceMap: !1 });
    },
    370: function (e, t, n) {
      "use strict";
      n(292);
    },
    371: function (e, t, n) {
      var r = n(3)(function (i) {
        return i[1];
      });
      r.push([
        e.i,
        "/*purgecss start ignore*/\n.search-sidebar[data-v-61be22c6]{\n  background:#9b51e0;\n}\n.search-sidebar .content[data-v-61be22c6]{\n    display:flex;\n    height:100%;\n    width:100%;\n    flex-direction:column;\n}\n.search-sidebar .content .pages-list[data-v-61be22c6]{\n      flex:1 1 0%\n}\n.search-sidebar .content .search[data-v-61be22c6]{\n      margin:0px\n}\n.search-sidebar[data-v-61be22c6] .themed{\n  color:#9b51e0\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (e.exports = r);
    },
    417: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(0).a.extend({
          name: "SearchSidebar",
          props: { pages: { type: Array, default: () => [] } },
          computed: {
            hasPages() {
              return !!this.pages && this.pages.length > 0;
            },
          },
          methods: {},
        }),
        o = (n(370), n(2)),
        component = Object(o.a)(
          r,
          function () {
            var e = this,
              t = e._self._c;
            e._self._setupProxy;
            return t(
              "sidebar",
              {
                staticClass: "search-sidebar",
                attrs: { title: e.hasPages ? "Fler sidor" : "Sök" },
                on: {
                  close: function (t) {
                    return e.$emit("close");
                  },
                },
              },
              [
                t(
                  "div",
                  { staticClass: "content" },
                  [
                    t(
                      "ul",
                      { staticClass: "pages-list" },
                      e._l(e.pages, function (n) {
                        return t("li", [e._v(e._s(n))]);
                      }),
                      0
                    ),
                    t("search-input", {
                      staticClass: "search",
                      on: {
                        submitted: function (t) {
                          return e.$emit("close");
                        },
                      },
                    }),
                  ],
                  1
                ),
              ]
            );
          },
          [],
          !1,
          null,
          "61be22c6",
          null
        );
      t.default = component.exports;
      installComponents(component, {
        SearchInput: n(32).default,
        Sidebar: n(210).default,
      });
    },
  },
]);
