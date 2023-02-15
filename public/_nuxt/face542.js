(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    188: function (n, t, e) {
      var content = e(198);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("6c1ade1a", content, !0, { sourceMap: !1 });
    },
    197: function (n, t, e) {
      "use strict";
      e(188);
    },
    198: function (n, t, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        "/*purgecss start ignore*/\n.info-card[data-v-11df0678]{\n  display:flex;\n  flex-direction:column;\n  overflow:hidden;\n  border-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n  min-height:340px;\n}\n.info-card__image[data-v-11df0678]{\n    overflow:hidden;\n    height:180px;\n    max-height:50%;\n}\n.info-card__image img[data-v-11df0678]{\n      -o-object-fit:cover;\n         object-fit:cover\n}\n.info-card__content[data-v-11df0678]{\n    display:flex;\n    flex:1 1 0%;\n    flex-direction:column;\n    justify-content:center;\n    padding-left:1rem;\n    padding-right:1rem;\n    padding-top:1.5rem;\n    padding-bottom:1.5rem;\n}\n.info-card__content h3[data-v-11df0678]{\n      font-weight:700;\n      font-family:'Avenir LT Std', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;\n      color:#373737\n}\n.info-card__content .author[data-v-11df0678]{\n      margin-top:0.25rem;\n      font-size:0.875rem;\n      line-height:1.25rem\n}\n.info-card__link[data-v-11df0678]{\n    margin-top:1rem;\n    margin-bottom:1rem;\n    display:block;\n    align-self:center;\n    border-radius:0.375rem;\n    padding-left:2rem;\n    padding-right:2rem;\n    padding-top:0.25rem;\n    padding-bottom:0.25rem;\n    font-size:1.125rem;\n    line-height:1.75rem;\n    font-weight:700;\n    --tw-text-opacity:1;\n    color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.info-card__border[data-v-11df0678],.info-card__link[data-v-11df0678]{\n    background-color:#5ec19f\n}\n.info-card__border[data-v-11df0678]{\n    height:1.5em;\n    border-radius:5px\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    199: function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(0).a.extend({
          props: {
            title: { type: String, required: !0 },
            image: { type: String, default: "" },
            author: { type: String, default: "" },
            link: { type: String, default: "" },
          },
          computed: {
            pubId() {
              return this.image.replace(/^\/+/, "");
            },
          },
        }),
        o = (e(197), e(2)),
        component = Object(o.a)(
          r,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t(
              "div",
              { staticClass: "info-card" },
              [
                n.image
                  ? t("client-only", [
                      t(
                        "div",
                        { staticClass: "info-card__image" },
                        [
                          t("app-image", {
                            attrs: {
                              publicId: n.pubId,
                              width: "auto",
                              height: "260",
                            },
                          }),
                        ],
                        1
                      ),
                    ])
                  : n._e(),
                t("div", { staticClass: "info-card__content" }, [
                  t("h3", [n._v(n._s(n.title))]),
                  n.author
                    ? t("p", { staticClass: "author" }, [
                        n._v("Text av " + n._s(n.author)),
                      ])
                    : n._e(),
                ]),
                n.link
                  ? t(
                      "app-link",
                      {
                        staticClass: "info-card__link themed",
                        attrs: { href: n.link },
                      },
                      [n._v("Läs")]
                    )
                  : t("div", { staticClass: "info-card__border themed" }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "11df0678",
          null
        );
      t.default = component.exports;
      installComponents(component, {
        AppImage: e(79).default,
        AppLink: e(14).default,
      });
    },
  },
]);
