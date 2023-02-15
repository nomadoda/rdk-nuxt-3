(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    214: function (e, n, t) {
      var content = t(242);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, t(4).default)("7c08e750", content, !0, { sourceMap: !1 });
    },
    241: function (e, n, t) {
      "use strict";
      t(214);
    },
    242: function (e, n, t) {
      var r = t(3)(function (i) {
        return i[1];
      });
      r.push([
        e.i,
        "/*purgecss start ignore*/\n.info-card__image[data-v-0b13fec6]{\n    overflow:hidden;\n    height:180px;\n    max-height:50%;\n}\n.info-card__image img[data-v-0b13fec6]{\n      -o-object-fit:cover;\n         object-fit:cover\n}\n.info-card__content[data-v-0b13fec6]{\n    display:flex;\n    flex:1 1 0%;\n    flex-direction:column;\n    justify-content:center;\n    padding-left:1rem;\n    padding-right:1rem;\n    padding-top:1.5rem;\n    padding-bottom:1.5rem;\n}\n.info-card__content h3[data-v-0b13fec6]{\n      font-weight:700;\n      font-family:'Avenir LT Std', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;\n      color:#373737\n}\n.info-card__content .author[data-v-0b13fec6]{\n      margin-top:0.25rem;\n      font-size:0.875rem;\n      line-height:1.25rem\n}\n.info-card__link[data-v-0b13fec6]{\n    margin-top:1rem;\n    margin-bottom:1rem;\n    display:block;\n    align-self:center;\n    border-radius:0.375rem;\n    padding-left:2rem;\n    padding-right:2rem;\n    padding-top:0.25rem;\n    padding-bottom:0.25rem;\n    font-size:1.125rem;\n    line-height:1.75rem;\n    font-weight:700;\n    --tw-text-opacity:1;\n    color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.info-card__border[data-v-0b13fec6],.info-card__link[data-v-0b13fec6]{\n    background-color:#5ec19f\n}\n.info-card__border[data-v-0b13fec6]{\n    height:1.5em;\n    border-radius:5px\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (e.exports = r);
    },
    295: function (e, n, t) {
      "use strict";
      t.r(n);
      var r = t(0).a.extend({
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
        }),
        o = (t(241), t(2)),
        component = Object(o.a)(
          r,
          function () {
            var e = this,
              n = e._self._c;
            e._self._setupProxy;
            return n(
              "div",
              {
                staticClass:
                  "flex flex-col bg-white rounded-md overflow-hidden items-center pb-0 w-full min-w-full",
              },
              [
                e.link
                  ? n(
                      "nuxt-link",
                      { staticClass: "pt-4 pb-2 px-5", attrs: { to: e.link } },
                      [
                        e.image
                          ? n("client-only", [
                              n(
                                "div",
                                {
                                  staticClass:
                                    "w-48 h-48 overflow-hidden rounded-full",
                                },
                                [
                                  n("app-image", {
                                    attrs: {
                                      publicId: e.pubId,
                                      width: "200",
                                      height: "200",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ])
                          : e._e(),
                      ],
                      1
                    )
                  : e._e(),
                n(
                  "h3",
                  { staticClass: "text-center font-bold px-2 py-2 w-2/3" },
                  [e._v(e._s(e.title))]
                ),
                n(
                  "div",
                  {
                    staticClass:
                      "bg-pink p-3 w-full text-center font-bold rounded-sm",
                  },
                  [
                    e.link
                      ? n(
                          "nuxt-link",
                          {
                            staticClass: "text-white w-full",
                            attrs: { to: e.link },
                          },
                          [e._v("Vuxen eller pedagog")]
                        )
                      : e._e(),
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
          "0b13fec6",
          null
        );
      n.default = component.exports;
      installComponents(component, { AppImage: t(79).default });
    },
  },
]);
