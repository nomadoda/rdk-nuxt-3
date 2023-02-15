(window.webpackJsonp = window.webpackJsonp || []).push([
  [8, 20],
  {
    201: function (t, e, n) {
      var content = n(208);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("86edb64e", content, !0, { sourceMap: !1 });
    },
    207: function (t, e, n) {
      "use strict";
      n(201);
    },
    208: function (t, e, n) {
      var r = n(3)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        "/*purgecss start ignore*/\n.sidebar[data-v-1d2e7b20]{\n  position:fixed;\n  top:0px;\n  right:0px;\n  bottom:0px;\n  left:0px;\n  z-index:30;\n  display:flex;\n  height:100%;\n  width:100%;\n  flex-direction:column;\n  padding-bottom:3rem;\n  background:linear-gradient(180deg,#75d7d8 91px,#fff 800px);\n  overscroll-behavior:contain\n}\n.sidebar.with-footer[data-v-1d2e7b20]{\n  z-index:50;\n  padding-bottom:0px\n}\n.sidebar__header[data-v-1d2e7b20]{\n    position:relative;\n    --tw-bg-opacity:1;\n    background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n    text-align:center;\n}\n.sidebar__header h1[data-v-1d2e7b20]{\n      margin-top:0.25rem;\n      padding:0.5rem;\n      font-size:1.5rem;\n      line-height:2rem;\n      font-weight:700\n}\n.sidebar__header button[data-v-1d2e7b20]{\n      position:absolute;\n      top:0px;\n      right:0px;\n      display:flex;\n      height:100%;\n      align-items:center;\n      background-color:transparent;\n      font-size:1.25rem;\n      line-height:1.75rem;\n      outline:2px solid transparent;\n      outline-offset:2px\n}\n.sidebar__content[data-v-1d2e7b20]{\n    width:100%;\n    flex:1 1 0%;\n    align-self:center;\n    padding-left:1rem;\n    padding-right:1rem;\n    padding-top:3rem;\n    padding-bottom:3rem;\n    font-size:1.25rem;\n    line-height:1.75rem\n}\n.sidebar__footer[data-v-1d2e7b20]{\n    display:flex;\n    justify-content:space-between\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    210: function (t, e, n) {
      "use strict";
      n.r(e);
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
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e(
              "aside",
              { staticClass: "sidebar", class: { "with-footer": t.hasFooter } },
              [
                e("div", { staticClass: "sidebar__header themed" }, [
                  e("h1", [t._v(t._s(t.title))]),
                  e(
                    "button",
                    {
                      on: {
                        click: function (e) {
                          return t.$emit("close");
                        },
                      },
                    },
                    [
                      e(
                        "svg",
                        {
                          staticClass: "x w-6 h-6",
                          attrs: { viewBox: "0 0 20 20", fill: "currentColor" },
                        },
                        [
                          e("path", {
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
                e(
                  "div",
                  { staticClass: "sidebar__content" },
                  [t._t("default")],
                  2
                ),
                t.hasFooter
                  ? e(
                      "div",
                      { staticClass: "sidebar__footer" },
                      [t._t("footer")],
                      2
                    )
                  : t._e(),
              ]
            );
          },
          [],
          !1,
          null,
          "1d2e7b20",
          null
        );
      e.default = component.exports;
    },
    217: function (t, e, n) {
      var content = n(248);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("9bb1b688", content, !0, { sourceMap: !1 });
    },
    247: function (t, e, n) {
      "use strict";
      n(217);
    },
    248: function (t, e, n) {
      var r = n(3)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        "/*purgecss start ignore*/\n.filter-sidebar .content[data-v-3f30e7f6]{\n    max-width:320px;\n}\n.filter-sidebar .content h5[data-v-3f30e7f6]{\n      margin-bottom:1rem;\n      font-weight:700\n}\n.filter-sidebar .tab-bar[data-v-3f30e7f6]{\n    display:flex;\n    width:100%;\n    justify-content:space-between;\n}\n.filter-sidebar .tab-bar button.tab[data-v-3f30e7f6]{\n      margin-left:0.25rem;\n      margin-right:0.25rem;\n      flex:1 1 0%;\n      --tw-bg-opacity:1;\n      background-color:rgba(209, 213, 219, var(--tw-bg-opacity));\n      padding-left:0.5rem;\n      padding-right:0.5rem;\n      padding-top:1.5rem;\n      padding-bottom:1.5rem;\n      font-size:1rem;\n      line-height:1.5rem;\n      outline:2px solid transparent;\n      outline-offset:2px;\n      max-width:160px\n}\n.filter-sidebar .tab-bar button.tab.active[data-v-3f30e7f6]{\n      --tw-bg-opacity:1;\n      background-color:rgba(255, 255, 255, var(--tw-bg-opacity))\n}\n.filter-sidebar .tab-bar button.tab .icon[data-v-3f30e7f6]{\n        margin-right:0.5rem;\n        display:inline\n}\n.filter-sidebar[data-v-3f30e7f6] .themed{\n  color:#75d7d8\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    298: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(0),
        o = n(394),
        l = r.a.extend({
          name: "FilterSidebar",
          components: { AisRefinementList: o.a },
          data: () => ({ activeFilter: "seeFilters" }),
          computed: {},
          methods: {},
        }),
        d = (n(247), n(2)),
        component = Object(d.a)(
          l,
          function () {
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e(
              "sidebar",
              {
                staticClass: "filter-sidebar",
                attrs: { title: "Sökfilter" },
                on: {
                  close: function (e) {
                    return t.$emit("close");
                  },
                },
              },
              [
                [
                  e("div", { staticClass: "content" }, [
                    e(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "seeFilters" === t.activeFilter,
                            expression: 'activeFilter === "seeFilters"',
                          },
                        ],
                      },
                      [
                        e("h5", [t._v("Jag vill se ...")]),
                        e("ais-refinement-list", {
                          attrs: { attribute: "seeFilters" },
                        }),
                      ],
                      1
                    ),
                    e(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "habitatFilters" === t.activeFilter,
                            expression: 'activeFilter === "habitatFilters"',
                          },
                        ],
                      },
                      [
                        e("h5", [t._v("Som bor ...")]),
                        e("ais-refinement-list", {
                          attrs: { attribute: "habitatFilters" },
                        }),
                      ],
                      1
                    ),
                    e(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "contentType" === t.activeFilter,
                            expression: 'activeFilter === "contentType"',
                          },
                        ],
                      },
                      [
                        e("h5", [t._v("Innehåll eller område")]),
                        e("ais-refinement-list", {
                          attrs: { attribute: "contentType" },
                        }),
                      ],
                      1
                    ),
                  ]),
                ],
                e("template", { slot: "footer" }, [
                  e("div", { staticClass: "tab-bar" }, [
                    e(
                      "button",
                      {
                        staticClass: "tab whitespace-nowrap",
                        class: { active: "seeFilters" === t.activeFilter },
                        on: {
                          click: function (e) {
                            t.activeFilter = "seeFilters";
                          },
                        },
                      },
                      [
                        e(
                          "svg",
                          {
                            staticClass: "icon w-6 h-6",
                            attrs: {
                              viewBox: "0 0 20 20",
                              fill: "currentColor",
                            },
                          },
                          [
                            e("path", {
                              attrs: {
                                "fill-rule": "evenodd",
                                d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
                                "clip-rule": "evenodd",
                              },
                            }),
                          ]
                        ),
                        e("span", { staticClass: "text" }, [t._v("Djur")]),
                      ]
                    ),
                    e(
                      "button",
                      {
                        staticClass: "tab whitespace-nowrap",
                        class: { active: "habitatFilters" === t.activeFilter },
                        on: {
                          click: function (e) {
                            t.activeFilter = "habitatFilters";
                          },
                        },
                      },
                      [
                        e(
                          "svg",
                          {
                            staticClass: "icon w-6 h-6",
                            attrs: {
                              viewBox: "0 0 20 20",
                              fill: "currentColor",
                            },
                          },
                          [
                            e("path", {
                              attrs: {
                                "fill-rule": "evenodd",
                                d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
                                "clip-rule": "evenodd",
                              },
                            }),
                          ]
                        ),
                        e("span", { staticClass: "text" }, [t._v("Plats")]),
                      ]
                    ),
                    e(
                      "button",
                      {
                        staticClass: "tab whitespace-nowrap",
                        class: { active: "contentType" === t.activeFilter },
                        on: {
                          click: function (e) {
                            t.activeFilter = "contentType";
                          },
                        },
                      },
                      [
                        e(
                          "svg",
                          {
                            staticClass: "icon w-6 h-6",
                            attrs: {
                              viewBox: "0 0 20 20",
                              fill: "currentColor",
                            },
                          },
                          [
                            e("path", {
                              attrs: {
                                "fill-rule": "evenodd",
                                d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
                                "clip-rule": "evenodd",
                              },
                            }),
                          ]
                        ),
                        e("span", { staticClass: "text" }, [t._v("Innehåll")]),
                      ]
                    ),
                  ]),
                ]),
              ],
              2
            );
          },
          [],
          !1,
          null,
          "3f30e7f6",
          null
        );
      e.default = component.exports;
      installComponents(component, { Sidebar: n(210).default });
    },
  },
]);
