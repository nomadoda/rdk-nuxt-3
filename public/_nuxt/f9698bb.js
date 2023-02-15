(window.webpackJsonp = window.webpackJsonp || []).push([
  [34, 8, 20],
  {
    182: function (t, e, n) {
      "use strict";
      function r(t) {
        var path = "/" === t.charAt(0) ? t : "/".concat(t);
        return "https://www.raddadjuren.se".concat(path);
      }
      function o(t) {
        return l(t.substr(7));
      }
      function l(t) {
        return t.endsWith("index") ? t.substr(0, t.length - 6) : t;
      }
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return o;
        }),
        n.d(e, "b", function () {
          return l;
        });
    },
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
    273: function (t, e, n) {
      var content = n(333);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("064d28bb", content, !0, { sourceMap: !1 });
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
        c = (n(247), n(2)),
        component = Object(c.a)(
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
    332: function (t, e, n) {
      "use strict";
      n(273);
    },
    333: function (t, e, n) {
      var r = n(3)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        "/*purgecss start ignore*/\n.page-sok .search-container[data-v-079bb018]{\n    position:relative;\n    margin-left:auto;\n    margin-right:auto;\n    margin-bottom:2rem;\n    display:flex;\n    max-width:36rem;\n    flex-direction:column;\n    padding-left:1rem;\n    padding-right:1rem;\n}\n.page-sok .search-container .search[data-v-079bb018]{\n      margin-left:auto;\n      margin-right:auto;\n      display:block;\n      width:100%;\n      max-width:768px;\n      border-radius:9999px;\n      --tw-bg-opacity:1;\n      background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n      padding-left:2rem;\n      padding-right:2rem;\n      padding-top:0.75rem;\n      padding-bottom:0.75rem;\n      font-size:1rem;\n      line-height:1.5rem\n}\n.page-sok .search-container .filter[data-v-079bb018]{\n      margin-top:1rem;\n      margin-bottom:1rem;\n      align-self:flex-end;\n}\n@media (min-width: 768px){\n.page-sok .search-container .filter[data-v-079bb018]{\n        right:-100px;\n\n        top:0;\n\n        position:absolute;\n\n        margin-top:0px;\n\n        margin-bottom:0px;\n\n        display:flex;\n\n        flex-direction:column\n}\n}\n.page-sok .search-container .filter button[data-v-079bb018]{\n        margin:0px;\n        background-color:transparent;\n        padding:0px;\n        text-align:left;\n        outline:2px solid transparent;\n        outline-offset:2px;\n}\n.page-sok .search-container .filter button .icon[data-v-079bb018]{\n          --tw-text-opacity:1;\n          color:rgba(255, 255, 255, var(--tw-text-opacity));\n          display:inline;\n          width:13px;\n          height:13px\n}\n.page-sok .search-container .filter button .text[data-v-079bb018]{\n          --tw-text-opacity:1;\n          color:rgba(255, 255, 255, var(--tw-text-opacity));\n          font-size:.9rem;\n          font-weight:900;\n          padding-left:5px\n}\n.page-sok .search-container .filter button:disabled .icon[data-v-079bb018], .page-sok .search-container .filter button:disabled .text[data-v-079bb018]{\n          --tw-text-opacity:1;\n          color:rgba(209, 213, 219, var(--tw-text-opacity))\n}\n.page-sok .refinement-columns[data-v-079bb018]{\n    margin-left:auto;\n    margin-right:auto;\n    display:none;\n    max-width:1024px;\n    justify-content:space-between;\n    padding-left:2rem;\n    padding-right:2rem;\n    font-size:1rem;\n    line-height:1.5rem\n}\n@media (min-width: 768px){\n.page-sok .refinement-columns[data-v-079bb018]{\n      display:flex\n}\n}\n.page-sok .refinement-columns .column[data-v-079bb018]{\n      padding:1rem;\n      flex:0 1 400px;\n}\n.page-sok .refinement-columns .column h5[data-v-079bb018]{\n        margin-bottom:1rem;\n        font-weight:700\n}\n.page-sok button.toggle[data-v-079bb018]{\n    margin-top:2rem;\n    margin-bottom:2rem;\n    display:none;\n    flex-direction:column;\n    align-items:center;\n    background-color:transparent;\n    padding-top:0px;\n    padding-bottom:0px;\n    font-size:0.875rem;\n    line-height:1.25rem;\n    --tw-text-opacity:1;\n    color:rgba(255, 255, 255, var(--tw-text-opacity));\n    outline:2px solid transparent;\n    outline-offset:2px\n}\n@media (min-width: 768px){\n.page-sok button.toggle[data-v-079bb018]{\n      display:flex\n}\n}\n.page-sok button.toggle .icon[data-v-079bb018]{\n      font-size:1.25rem;\n      line-height:1.75rem\n}\n.page-sok .results[data-v-079bb018]{\n    margin-bottom:2rem\n}\n.fade-enter-active[data-v-079bb018],.fade-leave-active[data-v-079bb018]{\n  transition:opacity .5s\n}\n.fade-enter[data-v-079bb018],.fade-leave-to[data-v-079bb018]{\n  opacity:0\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    399: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(313),
        o = n.n(r),
        l = n(328),
        c = n(0),
        d = n(395),
        f = n(419),
        h = n(418),
        v = n(394),
        m = n(420),
        x = n(421),
        w = n(182),
        y = o()("IZKIF79HVT", "19c92d0f5c43f39f84c70bc1a1ac5ca2"),
        k = c.a.extend({
          name: "Search",
          components: {
            AisClearRefinements: d.a,
            AisConfigure: f.a,
            AisInstantSearch: h.a,
            AisRefinementList: v.a,
            AisSearchBox: m.a,
            AisStateResults: x.a,
          },
          data: () => ({
            showFilter: !1,
            routing: {
              router: Object(l.a)(),
              stateMapping: {
                stateToRoute(t) {
                  var { query: e, refinementList: n } = t.allContent || {};
                  return {
                    sokord: e,
                    seeFilters: n && n.seeFilters && n.seeFilters.join("~"),
                    habitatFilters:
                      n && n.habitatFilters && n.habitatFilters.join("~"),
                    contentType: n && n.contentType && n.contentType.join("~"),
                  };
                },
                routeToState(t) {
                  var {
                    sokord: e,
                    habitatFilters: n,
                    seeFilters: r,
                    contentType: o,
                  } = t;
                  return {
                    allContent: {
                      query: e,
                      refinementList: {
                        seeFilters: r && r.split("~"),
                        habitatFilters: n && n.split("~"),
                        contentType: o && o.split("~"),
                      },
                    },
                  };
                },
              },
            },
            searchClient: y,
          }),
          head: () => ({
            link: [
              { hid: "canonical", rel: "canonical", href: Object(w.a)("/sok") },
            ],
            title: "Sök på djur, fakta, vego eller tips | Rädda Djuren-klubben",
            meta: [
              {
                hid: "og:title",
                name: "og:title",
                content:
                  "Sök på djur, fakta, vego eller tips | Rädda Djuren-klubben",
              },
              {
                hid: "description",
                name: "description",
                content:
                  "Här kan du söka på djur, tips om hur du kan hjälpa djur och mer",
              },
              {
                hid: "og:description",
                name: "og:description",
                content:
                  "Här kan du söka på djur, tips om hur du kan hjälpa djur och mer",
              },
            ],
          }),
          methods: {
            onToggleFilter() {
              this.showFilter = !this.showFilter;
            },
          },
        }),
        _ = (n(332), n(2)),
        component = Object(_.a)(
          k,
          function () {
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e(
              "section",
              { staticClass: "page-sok" },
              [
                e(
                  "client-only",
                  { attrs: { placeholder: "Laddar ..." } },
                  [
                    e(
                      "ais-instant-search",
                      {
                        key: t.$route.fullPath,
                        attrs: {
                          "search-client": t.searchClient,
                          indexName: "allContent",
                          routing: t.routing,
                        },
                      },
                      [
                        e("ais-configure", { attrs: { hitsPerPage: 1e3 } }),
                        e(
                          "div",
                          { staticClass: "search-container" },
                          [
                            e(
                              "ais-search-box",
                              {
                                staticClass: "search",
                                attrs: {
                                  placeholder:
                                    "Sök på djur, fakta, vego eller tips ...",
                                  autofocus: "",
                                },
                              },
                              [
                                e(
                                  "svg",
                                  {
                                    staticClass: "w-6 h-6 search-icon",
                                    attrs: {
                                      slot: "submit-icon",
                                      viewBox: "0 0 20 20",
                                      fill: "currentColor",
                                    },
                                    slot: "submit-icon",
                                  },
                                  [
                                    e("path", {
                                      attrs: {
                                        "fill-rule": "evenodd",
                                        d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                                        "clip-rule": "evenodd",
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            ),
                            e(
                              "div",
                              { staticClass: "filter" },
                              [
                                e(
                                  "button",
                                  { on: { click: t.onToggleFilter } },
                                  [
                                    e(
                                      "svg",
                                      {
                                        staticClass: "w-6 h-6 icon",
                                        attrs: {
                                          viewBox: "0 0 20 20",
                                          fill: "white",
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
                                    e("span", { staticClass: "text" }, [
                                      t._v(
                                        t._s(
                                          t.showFilter
                                            ? "Dölj filter"
                                            : "Visa filter"
                                        )
                                      ),
                                    ]),
                                  ]
                                ),
                                e("ais-clear-refinements", {
                                  staticClass: "hidden sm_block",
                                  scopedSlots: t._u([
                                    {
                                      key: "default",
                                      fn: function (n) {
                                        var { canRefine: r, refine: o } = n;
                                        return e(
                                          "button",
                                          {
                                            attrs: { disabled: !r },
                                            on: { click: o },
                                          },
                                          [
                                            e(
                                              "svg",
                                              {
                                                staticClass: "x w-6 h-6 icon",
                                                attrs: {
                                                  viewBox: "0 0 20 20",
                                                  fill: "white",
                                                },
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
                                            e("span", { staticClass: "text" }, [
                                              t._v("Rensa"),
                                            ]),
                                          ]
                                        );
                                      },
                                    },
                                  ]),
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        e(
                          "div",
                          {
                            directives: [
                              {
                                name: "show-slide",
                                rawName: "v-show-slide",
                                value: t.showFilter,
                                expression: "showFilter",
                              },
                            ],
                            staticClass: "refinement-columns",
                          },
                          [
                            e(
                              "div",
                              { staticClass: "column" },
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
                              { staticClass: "column" },
                              [
                                e("h5", [t._v("Som lever i ...")]),
                                e("ais-refinement-list", {
                                  attrs: { attribute: "habitatFilters" },
                                }),
                              ],
                              1
                            ),
                            e(
                              "div",
                              { staticClass: "column" },
                              [
                                e("h5", [t._v("Innehåll eller område")]),
                                e("ais-refinement-list", {
                                  attrs: { attribute: "contentType" },
                                }),
                              ],
                              1
                            ),
                          ]
                        ),
                        t.showFilter
                          ? e(
                              "button",
                              {
                                staticClass: "toggle",
                                on: { click: t.onToggleFilter },
                              },
                              [
                                e(
                                  "svg",
                                  {
                                    staticClass: "chevron-up w-6 h-6 icon",
                                    attrs: {
                                      viewBox: "0 0 20 20",
                                      fill: "currentColor",
                                    },
                                  },
                                  [
                                    e("path", {
                                      attrs: {
                                        "fill-rule": "evenodd",
                                        d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
                                        "clip-rule": "evenodd",
                                      },
                                    }),
                                  ]
                                ),
                                e("span", [t._v("Dölj")]),
                              ]
                            )
                          : t._e(),
                        e("ais-state-results", {
                          scopedSlots: t._u([
                            {
                              key: "default",
                              fn: function (t) {
                                var {
                                  state: { query: n },
                                  results: { hits: r },
                                } = t;
                                return [
                                  e("search-results", {
                                    staticClass: "results",
                                    attrs: { hits: r, query: n },
                                  }),
                                ];
                              },
                            },
                          ]),
                        }),
                        e("filter-sidebar", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: t.showFilter,
                              expression: "showFilter",
                            },
                          ],
                          staticClass: "sm_hidden",
                          on: {
                            close: function (e) {
                              t.showFilter = !1;
                            },
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "079bb018",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        SearchResults: n(376).default,
        FilterSidebar: n(298).default,
      });
    },
  },
]);
