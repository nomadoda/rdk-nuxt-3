(window.webpackJsonp = window.webpackJsonp || []).push([
  [18],
  {
    291: function (e, t, n) {
      var content = n(369);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, n(4).default)("6f79f723", content, !0, { sourceMap: !1 });
    },
    368: function (e, t, n) {
      "use strict";
      n(291);
    },
    369: function (e, t, n) {
      var r = n(3)(function (i) {
        return i[1];
      });
      r.push([
        e.i,
        "/*purgecss start ignore*/\n.search-result[data-v-78b11e0e]{\n  display:flex;\n  flex-direction:column;\n  height:100%;\n  overflow:hidden;\n  padding:0;\n  background-color:#fff;\n  border-radius:5px;\n  transition:.3s ease;\n}\n.search-result-wrap[data-v-78b11e0e]{\n    margin:1rem 0;\n    min-width:100%;\n}\n@media (min-width: 768px){\n.search-result-wrap[data-v-78b11e0e]{\n      margin-left:1rem;\n\n      margin-bottom:1rem;\n\n      margin-right:1rem;\n\n      margin-top:1rem;\n\n      min-width:calc(50% - 2rem);\n\n      max-width:calc(50% - 2rem)\n}\n}\n@media (min-width: 1024px){\n.search-result-wrap[data-v-78b11e0e]{\n      min-width:calc(33% - 2rem);\n\n      max-width:calc(33% - 2rem)\n}\n}\n.search-result__image-bg[data-v-78b11e0e]{\n    display:flex;\n    width:12em;\n    height:12em;\n    position:relative;\n    overflow:hidden;\n    border-radius:50%;\n    margin:2em auto 1em;\n    background-repeat:no-repeat;\n    background-size:cover\n}\n.search-result__button[data-v-78b11e0e]{\n    width:100%;\n    margin-bottom:0;\n    background-color:#e6007e;\n    color:#fff;\n    border-radius:5px\n}\n.page-error .search-result[data-v-78b11e0e]{\n    max-height:140px\n}\n.search-result__content[data-v-78b11e0e]{\n    padding:1rem\n}\n.search-result__title[data-v-78b11e0e]{\n    padding-bottom:.2rem;\n    font-size:1.4rem;\n    line-height:1.2\n}\n.page-error a[data-v-78b11e0e]{\n    color:#000\n}\n.page-error .search-result__preamble[data-v-78b11e0e]{\n    margin-top:.2em;\n    font-size:1em\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (e.exports = r);
    },
    416: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(0).a.extend({
          name: "Result",
          props: {
            title: { type: String, default: "" },
            preamble: { type: String, default: "" },
            path: { type: String, default: "" },
            image: { type: String, default: "" },
          },
          data: () => ({}),
          computed: {
            pubId() {
              return this.image ? this.image.replace(/^\/+/, "") : "";
            },
            shortpreamble() {
              return this.preamble
                ? this.preamble.length < 175
                  ? this.preamble
                  : this.preamble.substring(0, 175).trim() + "..."
                : "";
            },
          },
        }),
        l = (n(368), n(2)),
        component = Object(l.a)(
          r,
          function () {
            var e = this,
              t = e._self._c;
            e._self._setupProxy;
            return t(
              "nuxt-link",
              { staticClass: "search-result-wrap", attrs: { to: e.path } },
              [
                t("article", { staticClass: "search-result" }, [
                  t(
                    "div",
                    { staticClass: "search-result__image-bg" },
                    [
                      t("client-only", [
                        t(
                          "div",
                          { staticClass: "search-result__image" },
                          [
                            t("app-image", {
                              attrs: {
                                publicId: e.pubId,
                                width: "400",
                                height: "400",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ],
                    1
                  ),
                  t("div", { staticClass: "search-result__content" }, [
                    t("h3", { staticClass: "search-result__title" }, [
                      e._v(e._s(e.title)),
                    ]),
                  ]),
                  t("a", { staticClass: "btn search-result__button" }, [
                    e._v("Lär dig mer"),
                  ]),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          "78b11e0e",
          null
        );
      t.default = component.exports;
      installComponents(component, { AppImage: n(79).default });
    },
  },
]);
