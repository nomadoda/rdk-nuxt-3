(window.webpackJsonp = window.webpackJsonp || []).push([
  [0, 4, 5, 7, 11, 12, 14],
  {
    200: function (n, t, e) {
      var content = e(206);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("b3ca06d2", content, !0, { sourceMap: !1 });
    },
    205: function (n, t, e) {
      "use strict";
      e(200);
    },
    206: function (n, t, e) {
      var r = e(3),
        o = e(80),
        l = e(81),
        d = r(function (i) {
          return i[1];
        }),
        f = o(l);
      d.push([
        n.i,
        "/*purgecss start ignore*/\n.animal-slider-card[data-v-5663ff38]{\n  position:relative;\n  padding-bottom:1rem;\n  font-size:.8em;\n  border-radius:5px;\n  background-color:#fff;\n  text-align:left;\n  line-height:2rem;\n}\n.animal-slider-card h3.title[data-v-5663ff38]{\n    padding:5px 0 0;\n    font-size:1.5rem;\n    font-weight:700;\n    font-family:'Avenir LT Std Heavy', sans-serif;\n    margin:0 auto;\n    text-align:center\n}\n@media (max-width:768px){\n.animal-slider-card h3.title[data-v-5663ff38]{\n      padding-left:0;\n      padding-bottom:0;\n      padding-right:0;\n      padding-top:0\n}\n}\n.animal-slider-card h3.title[data-v-5663ff38]:hover{\n    opacity:.7\n}\n.animal-slider-card h3.title .latin[data-v-5663ff38]{\n      font-weight:200;\n      font-size:1rem;\n      font-family:'Avenir LT Std', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;\n      padding-left:4px\n}\n@media (max-width:768px){\n.animal-slider-card h3.title .latin[data-v-5663ff38]{\n        display:flex;\n        flex-direction:column;\n        justify-content:center;\n        padding-top:2px;\n        padding-left:0;\n        font-style:italic\n}\n}\n.animal-slider-card h3.title .latin[data-v-5663ff38]:before{\n      content:\"\";\n      width:1px;\n      height:21px;\n      background-color:#000;\n      display:inline-block;\n      margin:-4px 9px\n}\n@media (max-width:768px){\n.animal-slider-card h3.title .latin[data-v-5663ff38]:before{\n        display:none\n}\n}\n.animal-slider-card .tags[data-v-5663ff38]{\n    display:inline;\n    margin:0 auto;\n    text-align:center;\n    font-size:1rem;\n}\n.animal-slider-card .tags a[data-v-5663ff38]{\n      color:#5ec19f\n}\n.animal-slider-card .tags a[data-v-5663ff38]:hover{\n      opacity:.7\n}\n.animal-slider-card .image[data-v-5663ff38]{\n    border-radius:5px 5px 0 0;\n    overflow:hidden;\n    -o-object-fit:cover;\n       object-fit:cover\n}\n.animal-slider-card .overlay[data-v-5663ff38]{\n    z-index:10;\n    position:absolute;\n    top:0;\n    right:0;\n    height:120px;\n    width:120px;\n    cursor:pointer;\n    transition:.3s\n}\n.animal-slider-card .overlay:hover .overlay__arrow[data-v-5663ff38]{\n      transform:rotate(135deg) scale(1.2)\n}\n.animal-slider-card .overlay__triangle[data-v-5663ff38]{\n      position:absolute;\n      right:0;\n      top:0;\n      height:0;\n      width:0;\n      border-color:#5ec19f #5ec19f transparent transparent;\n      border-style:solid;\n      border-width:60px;\n      border-radius:0 5px 0 0\n}\n.animal-slider-card .overlay__text[data-v-5663ff38]{\n      right:-18px;\n      top:38%;\n      width:120px;\n      transform:rotate(45deg);\n      font-weight:700;\n      color:#fff;\n      font-family:'Avenir LT Std', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;\n      font-size:1rem\n}\n.animal-slider-card .overlay__arrow[data-v-5663ff38],.animal-slider-card .overlay__text[data-v-5663ff38]{\n      position:absolute\n}\n.animal-slider-card .overlay__arrow[data-v-5663ff38]{\n      top:0;\n      right:0;\n      transform:rotate(135deg);\n      background-image:url(" +
          f +
          ');\n      width:50px;\n      height:50px;\n      background-size:cover;\n      transition:.5s\n}\n.animal-slider-card .text[data-v-5663ff38]{\n    line-height:1.35\n}\n.flip-container[data-v-5663ff38]{\n  perspective:1000px\n}\n.flip-container.flipped .flipper[data-v-5663ff38]{\n  transform:rotateY(-180deg)\n}\n.back[data-v-5663ff38],.flip-container[data-v-5663ff38],.front[data-v-5663ff38]{\n  width:100%\n}\n.flipper[data-v-5663ff38]{\n  position:relative;\n  transform-style:preserve-3d;\n  transition:.4s ease-out;\n}\n@media (min-width: 1024px){\n.flipper.hovered-front[data-v-5663ff38]{\n      transition:.3s ease-out;\n      transform:rotateY(-10deg)\n}\n.flip-container.flipped .flipper.hovered-back[data-v-5663ff38]{\n      transition:.3s ease-out;\n      transform:rotateY(-170deg)\n}\n}\n.flipped .flipper[data-v-5663ff38]{\n    transition:.5s\n}\n.flipper .back[data-v-5663ff38],.flipper .front[data-v-5663ff38]{\n    -webkit-backface-visibility:hidden;\n            backface-visibility:hidden\n}\n.flipper .front[data-v-5663ff38]{\n    transform:rotateY(0deg);\n    z-index:2\n}\n.flipper .back[data-v-5663ff38]{\n    position:absolute;\n    top:0;\n    left:0;\n    height:100%;\n    transform:rotateY(-180deg);\n    background-color:#00ce8f;\n    color:#fff;\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    align-items:center;\n}\n.flipper .back .overlay[data-v-5663ff38]{\n      width:unset;\n      height:unset\n}\n.flipper .back .overlay__arrow[data-v-5663ff38]{\n      transform:rotate(-45deg)\n}\n.facts[data-v-5663ff38]{\n  position:absolute;\n  top:0px;\n  height:100%;\n  overflow:hidden;\n  padding-left:2rem;\n  padding-right:2rem;\n  padding-top:2rem;\n  padding-bottom:2rem;\n  font-size:1rem;\n  line-height:1.5rem;\n  font-weight:700;\n}\n.facts li[data-v-5663ff38]{\n    margin-top:0.5rem\n}\n.facts[data-v-5663ff38]:after{\n  pointer-events:none;\n  position:absolute;\n  bottom:0px;\n  left:0px;\n  height:100%;\n  width:100%;\n  content:"";\n  background:linear-gradient(transparent,#5ec19f 100%)\n}\n.back[data-v-5663ff38]{\n  text-align:center;\n}\n.back a[data-v-5663ff38]{\n    position:absolute;\n    bottom:0px;\n    z-index:10;\n    padding-top:0.75rem;\n    padding-bottom:0.75rem;\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    background-color:transparent;\n    padding-top:0.5rem;\n    padding-bottom:0.5rem;\n    outline:2px solid transparent;\n    outline-offset:2px;\n    margin-top:2rem;\n    margin-bottom:0.5rem;\n    border-radius:9999px;\n    --tw-bg-opacity:1;\n    background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n    font-size:0.75rem;\n    line-height:1rem;\n    font-weight:700;\n    padding:.3em 1em .2em;\n    font-size:1rem;\n    color:#5ec19f\n}\n.back a[data-v-5663ff38]:hover{\n    transform:scale(1.05)\n}\n.content[data-v-5663ff38]{\n  padding:1rem 1.5rem 0;\n  z-index:3;\n  display:flex;\n  flex-direction:column;\n  justify-content:center\n}\n.share[data-v-5663ff38]{\n  font-size:.9rem;\n  padding-bottom:.5rem;\n  opacity:.65\n}\n.share[data-v-5663ff38]:hover{\n  opacity:1\n}\n.share img[data-v-5663ff38]{\n    display:inline;\n    max-width:1.2rem\n}\n\n/*purgecss end ignore*/',
        "",
      ]),
        (d.locals = {}),
        (n.exports = d);
    },
    209: function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(0).a.extend({
          props: { animal: { type: Object, required: !0 } },
          data: () => ({ flipped: !1, hoveredFront: !1, hoveredBack: !1 }),
          computed: {
            pubId() {
              return this.animal.image.replace(/^\/+/, "");
            },
            tags() {
              return this.animal.labels.map((n) => "#".concat(n, " "));
            },
            link() {
              return "djurfakta/".concat(this.animal.slug);
            },
            facts() {
              var n;
              return null === (n = this.animal["facts-block"]) || void 0 === n
                ? void 0
                : n.facts;
            },
            hasFacts() {
              var n;
              return (
                (null === (n = this.facts) || void 0 === n
                  ? void 0
                  : n.length) > 0
              );
            },
          },
          methods: {
            flip() {
              this.flipped = !this.flipped;
            },
          },
        }),
        o = (e(205), e(2)),
        component = Object(o.a)(
          r,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t("div", { staticClass: "animal-slider-card" }, [
              t(
                "div",
                {
                  staticClass: "flip-container",
                  class: { flipped: n.flipped },
                },
                [
                  t(
                    "div",
                    {
                      staticClass: "flipper",
                      class: n.hoveredFront
                        ? "hovered-front"
                        : n.hoveredBack
                        ? "hovered-back"
                        : "",
                    },
                    [
                      t(
                        "div",
                        { staticClass: "front" },
                        [
                          n.hasFacts
                            ? t(
                                "div",
                                {
                                  staticClass: "overlay",
                                  on: {
                                    click: n.flip,
                                    mouseenter: function (t) {
                                      n.hoveredFront = !0;
                                    },
                                    mouseleave: function (t) {
                                      n.hoveredFront = !1;
                                    },
                                  },
                                },
                                [
                                  t("div", {
                                    staticClass: "overlay__triangle",
                                  }),
                                  t("div", { staticClass: "overlay__arrow" }),
                                  t("div", { staticClass: "overlay__text" }, [
                                    n._v("Snabba fakta"),
                                  ]),
                                ]
                              )
                            : n._e(),
                          t("nuxt-link", { attrs: { to: n.link } }, [
                            t(
                              "div",
                              { staticClass: "image aspect-w-16 aspect-h-9" },
                              [
                                t("app-image", {
                                  attrs: {
                                    "public-id": n.pubId,
                                    crop: "fill",
                                    width: "auto",
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
                      t(
                        "div",
                        { staticClass: "back" },
                        [
                          t(
                            "ul",
                            { staticClass: "facts" },
                            n._l(n.facts, function (e) {
                              return t("li", { key: e }, [n._v(n._s(e))]);
                            }),
                            0
                          ),
                          t("nuxt-link", { attrs: { to: n.link } }, [
                            n._v("mer"),
                          ]),
                          t(
                            "div",
                            {
                              staticClass: "overlay",
                              on: {
                                click: n.flip,
                                mouseenter: function (t) {
                                  n.hoveredBack = !0;
                                },
                                mouseleave: function (t) {
                                  n.hoveredBack = !1;
                                },
                              },
                            },
                            [t("div", { staticClass: "overlay__arrow" })]
                          ),
                        ],
                        1
                      ),
                    ]
                  ),
                ]
              ),
              t("div", { staticClass: "content" }, [
                t(
                  "div",
                  { staticClass: "card__header__title" },
                  [
                    t("nuxt-link", { attrs: { to: n.link } }, [
                      t("h3", { staticClass: "title" }, [
                        n._v(n._s(n.animal.species)),
                        t("span", { staticClass: "latin" }, [
                          n._v(n._s(n.animal.scientificName)),
                        ]),
                      ]),
                    ]),
                  ],
                  1
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          "5663ff38",
          null
        );
      t.default = component.exports;
      installComponents(component, { AppImage: e(79).default });
    },
    212: function (n, t, e) {
      var content = e(238);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("368e5bb5", content, !0, { sourceMap: !1 });
    },
    213: function (n, t, e) {
      var content = e(240);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("69fbb807", content, !0, { sourceMap: !1 });
    },
    214: function (n, t, e) {
      var content = e(242);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("7c08e750", content, !0, { sourceMap: !1 });
    },
    215: function (n, t, e) {
      var content = e(244);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("6099f859", content, !0, { sourceMap: !1 });
    },
    216: function (n, t, e) {
      var content = e(246);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("78611193", content, !0, { sourceMap: !1 });
    },
    237: function (n, t, e) {
      "use strict";
      e(212);
    },
    238: function (n, t, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        "/*purgecss start ignore*/\n.info-card__image[data-v-2277ecf3]{\n    overflow:hidden;\n    height:180px;\n    max-height:50%;\n}\n.info-card__image img[data-v-2277ecf3]{\n      -o-object-fit:cover;\n         object-fit:cover\n}\n.info-card__content[data-v-2277ecf3]{\n    display:flex;\n    flex:1 1 0%;\n    flex-direction:column;\n    justify-content:center;\n    padding-left:1rem;\n    padding-right:1rem;\n    padding-top:1.5rem;\n    padding-bottom:1.5rem;\n}\n.info-card__content h3[data-v-2277ecf3]{\n      font-weight:700;\n      font-family:'Avenir LT Std', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;\n      color:#373737\n}\n.info-card__content .author[data-v-2277ecf3]{\n      margin-top:0.25rem;\n      font-size:0.875rem;\n      line-height:1.25rem\n}\n.info-card__link[data-v-2277ecf3]{\n    margin-top:1rem;\n    margin-bottom:1rem;\n    display:block;\n    align-self:center;\n    border-radius:0.375rem;\n    padding-left:2rem;\n    padding-right:2rem;\n    padding-top:0.25rem;\n    padding-bottom:0.25rem;\n    font-size:1.125rem;\n    line-height:1.75rem;\n    font-weight:700;\n    --tw-text-opacity:1;\n    color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.info-card__border[data-v-2277ecf3],.info-card__link[data-v-2277ecf3]{\n    background-color:#5ec19f\n}\n.info-card__border[data-v-2277ecf3]{\n    height:1.5em;\n    border-radius:5px\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    239: function (n, t, e) {
      "use strict";
      e(213);
    },
    240: function (n, t, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        "/*purgecss start ignore*/\n.info-card__image[data-v-72df4899]{\n    overflow:hidden;\n    height:180px;\n    max-height:50%;\n}\n.info-card__image img[data-v-72df4899]{\n      -o-object-fit:cover;\n         object-fit:cover\n}\n.info-card__content[data-v-72df4899]{\n    display:flex;\n    flex:1 1 0%;\n    flex-direction:column;\n    justify-content:center;\n    padding-left:1rem;\n    padding-right:1rem;\n    padding-top:1.5rem;\n    padding-bottom:1.5rem;\n}\n.info-card__content h3[data-v-72df4899]{\n      font-weight:700;\n      font-family:'Avenir LT Std', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;\n      color:#373737\n}\n.info-card__content .author[data-v-72df4899]{\n      margin-top:0.25rem;\n      font-size:0.875rem;\n      line-height:1.25rem\n}\n.info-card__link[data-v-72df4899]{\n    margin-top:1rem;\n    margin-bottom:1rem;\n    display:block;\n    align-self:center;\n    border-radius:0.375rem;\n    padding-left:2rem;\n    padding-right:2rem;\n    padding-top:0.25rem;\n    padding-bottom:0.25rem;\n    font-size:1.125rem;\n    line-height:1.75rem;\n    font-weight:700;\n    --tw-text-opacity:1;\n    color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.info-card__border[data-v-72df4899],.info-card__link[data-v-72df4899]{\n    background-color:#5ec19f\n}\n.info-card__border[data-v-72df4899]{\n    height:1.5em;\n    border-radius:5px\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    241: function (n, t, e) {
      "use strict";
      e(214);
    },
    242: function (n, t, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        "/*purgecss start ignore*/\n.info-card__image[data-v-0b13fec6]{\n    overflow:hidden;\n    height:180px;\n    max-height:50%;\n}\n.info-card__image img[data-v-0b13fec6]{\n      -o-object-fit:cover;\n         object-fit:cover\n}\n.info-card__content[data-v-0b13fec6]{\n    display:flex;\n    flex:1 1 0%;\n    flex-direction:column;\n    justify-content:center;\n    padding-left:1rem;\n    padding-right:1rem;\n    padding-top:1.5rem;\n    padding-bottom:1.5rem;\n}\n.info-card__content h3[data-v-0b13fec6]{\n      font-weight:700;\n      font-family:'Avenir LT Std', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;\n      color:#373737\n}\n.info-card__content .author[data-v-0b13fec6]{\n      margin-top:0.25rem;\n      font-size:0.875rem;\n      line-height:1.25rem\n}\n.info-card__link[data-v-0b13fec6]{\n    margin-top:1rem;\n    margin-bottom:1rem;\n    display:block;\n    align-self:center;\n    border-radius:0.375rem;\n    padding-left:2rem;\n    padding-right:2rem;\n    padding-top:0.25rem;\n    padding-bottom:0.25rem;\n    font-size:1.125rem;\n    line-height:1.75rem;\n    font-weight:700;\n    --tw-text-opacity:1;\n    color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.info-card__border[data-v-0b13fec6],.info-card__link[data-v-0b13fec6]{\n    background-color:#5ec19f\n}\n.info-card__border[data-v-0b13fec6]{\n    height:1.5em;\n    border-radius:5px\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    243: function (n, t, e) {
      "use strict";
      e(215);
    },
    244: function (n, t, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        "/*purgecss start ignore*/\n.info-card__image[data-v-268c997e]{\n    overflow:hidden;\n    height:180px;\n    max-height:50%;\n}\n.info-card__image img[data-v-268c997e]{\n      -o-object-fit:cover;\n         object-fit:cover\n}\n.info-card__content[data-v-268c997e]{\n    display:flex;\n    flex:1 1 0%;\n    flex-direction:column;\n    justify-content:center;\n    padding-left:1rem;\n    padding-right:1rem;\n    padding-top:1.5rem;\n    padding-bottom:1.5rem;\n}\n.info-card__content h3[data-v-268c997e]{\n      font-weight:700;\n      font-family:'Avenir LT Std', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;\n      color:#373737\n}\n.info-card__content .author[data-v-268c997e]{\n      margin-top:0.25rem;\n      font-size:0.875rem;\n      line-height:1.25rem\n}\n.info-card__link[data-v-268c997e]{\n    margin-top:1rem;\n    margin-bottom:1rem;\n    display:block;\n    align-self:center;\n    border-radius:0.375rem;\n    padding-left:2rem;\n    padding-right:2rem;\n    padding-top:0.25rem;\n    padding-bottom:0.25rem;\n    font-size:1.125rem;\n    line-height:1.75rem;\n    font-weight:700;\n    --tw-text-opacity:1;\n    color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.info-card__border[data-v-268c997e],.info-card__link[data-v-268c997e]{\n    background-color:#5ec19f\n}\n.info-card__border[data-v-268c997e]{\n    height:1.5em;\n    border-radius:5px\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    245: function (n, t, e) {
      "use strict";
      e(216);
    },
    246: function (n, t, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        "/*purgecss start ignore*/\n.info-card__image[data-v-8a16feca]{\n    overflow:hidden;\n    height:180px;\n    max-height:50%;\n}\n.info-card__image img[data-v-8a16feca]{\n      -o-object-fit:cover;\n         object-fit:cover\n}\n.info-card__content[data-v-8a16feca]{\n    display:flex;\n    flex:1 1 0%;\n    flex-direction:column;\n    justify-content:center;\n    padding-left:1rem;\n    padding-right:1rem;\n    padding-top:1.5rem;\n    padding-bottom:1.5rem;\n}\n.info-card__content h3[data-v-8a16feca]{\n      font-weight:700;\n      font-family:'Avenir LT Std', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;\n      color:#373737\n}\n.info-card__content .author[data-v-8a16feca]{\n      margin-top:0.25rem;\n      font-size:0.875rem;\n      line-height:1.25rem\n}\n.info-card__link[data-v-8a16feca]{\n    margin-top:1rem;\n    margin-bottom:1rem;\n    display:block;\n    align-self:center;\n    border-radius:0.375rem;\n    padding-left:2rem;\n    padding-right:2rem;\n    padding-top:0.25rem;\n    padding-bottom:0.25rem;\n    font-size:1.125rem;\n    line-height:1.75rem;\n    font-weight:700;\n    --tw-text-opacity:1;\n    color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.info-card__border[data-v-8a16feca],.info-card__link[data-v-8a16feca]{\n    background-color:#5ec19f\n}\n.info-card__border[data-v-8a16feca]{\n    height:1.5em;\n    border-radius:5px\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    274: function (n, t, e) {
      var content = e(335);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("0414bbec", content, !0, { sourceMap: !1 });
    },
    293: function (n, t, e) {
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
              return this.image ? this.image.replace(/^\/+/, "") : "";
            },
          },
        }),
        o = (e(237), e(2)),
        component = Object(o.a)(
          r,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t(
              "div",
              {
                staticClass:
                  "flex flex-col bg-white rounded-md overflow-hidden items-center pb-0 w-full min-w-full",
              },
              [
                n.link
                  ? t(
                      "nuxt-link",
                      { staticClass: "pt-4 pb-2 px-5", attrs: { to: n.link } },
                      [
                        n.image
                          ? t("client-only", [
                              t(
                                "div",
                                {
                                  staticClass:
                                    "w-48 h-48 overflow-hidden rounded-full",
                                },
                                [
                                  t("app-image", {
                                    attrs: {
                                      publicId: n.pubId,
                                      width: "200",
                                      height: "200",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ])
                          : n._e(),
                      ],
                      1
                    )
                  : n._e(),
                t(
                  "h3",
                  { staticClass: "text-center font-bold px-2 py-2 w-2/3" },
                  [n._v(n._s(n.title))]
                ),
                t(
                  "div",
                  {
                    staticClass:
                      "bg-pink p-3 w-full text-center font-bold rounded-sm",
                  },
                  [
                    n.link
                      ? t(
                          "nuxt-link",
                          {
                            staticClass: "text-white w-full",
                            attrs: { to: n.link },
                          },
                          [n._v("Lär dig mer")]
                        )
                      : n._e(),
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
          "2277ecf3",
          null
        );
      t.default = component.exports;
      installComponents(component, { AppImage: e(79).default });
    },
    294: function (n, t, e) {
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
              return this.image ? this.image.replace(/^\/+/, "") : "";
            },
          },
        }),
        o = (e(239), e(2)),
        component = Object(o.a)(
          r,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t(
              "div",
              {
                staticClass:
                  "flex flex-col bg-white rounded-md overflow-hidden items-center pb-0 w-full min-w-full",
              },
              [
                n.link
                  ? t(
                      "nuxt-link",
                      { staticClass: "pt-4 pb-2 px-5", attrs: { to: n.link } },
                      [
                        n.image
                          ? t("client-only", [
                              t(
                                "div",
                                { staticClass: "w-48 h-60 overflow-hidden" },
                                [
                                  t("app-image", {
                                    attrs: {
                                      publicId: n.pubId,
                                      width: "200",
                                      height: "300",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ])
                          : n._e(),
                      ],
                      1
                    )
                  : n._e(),
                t(
                  "h3",
                  { staticClass: "text-center font-bold px-2 py-2 w-2/3" },
                  [n._v(n._s(n.title))]
                ),
                t(
                  "div",
                  {
                    staticClass:
                      "bg-pink p-3 w-full text-center font-bold rounded-sm",
                  },
                  [
                    n.link
                      ? t(
                          "nuxt-link",
                          {
                            staticClass: "text-white w-full",
                            attrs: { to: n.link },
                          },
                          [n._v("Klubbnytt")]
                        )
                      : n._e(),
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
          "72df4899",
          null
        );
      t.default = component.exports;
      installComponents(component, { AppImage: e(79).default });
    },
    295: function (n, t, e) {
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
              return this.image ? this.image.replace(/^\/+/, "") : "";
            },
          },
        }),
        o = (e(241), e(2)),
        component = Object(o.a)(
          r,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t(
              "div",
              {
                staticClass:
                  "flex flex-col bg-white rounded-md overflow-hidden items-center pb-0 w-full min-w-full",
              },
              [
                n.link
                  ? t(
                      "nuxt-link",
                      { staticClass: "pt-4 pb-2 px-5", attrs: { to: n.link } },
                      [
                        n.image
                          ? t("client-only", [
                              t(
                                "div",
                                {
                                  staticClass:
                                    "w-48 h-48 overflow-hidden rounded-full",
                                },
                                [
                                  t("app-image", {
                                    attrs: {
                                      publicId: n.pubId,
                                      width: "200",
                                      height: "200",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ])
                          : n._e(),
                      ],
                      1
                    )
                  : n._e(),
                t(
                  "h3",
                  { staticClass: "text-center font-bold px-2 py-2 w-2/3" },
                  [n._v(n._s(n.title))]
                ),
                t(
                  "div",
                  {
                    staticClass:
                      "bg-pink p-3 w-full text-center font-bold rounded-sm",
                  },
                  [
                    n.link
                      ? t(
                          "nuxt-link",
                          {
                            staticClass: "text-white w-full",
                            attrs: { to: n.link },
                          },
                          [n._v("Vuxen eller pedagog")]
                        )
                      : n._e(),
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
      t.default = component.exports;
      installComponents(component, { AppImage: e(79).default });
    },
    296: function (n, t, e) {
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
              return this.image ? this.image.replace(/^\/+/, "") : "";
            },
          },
        }),
        o = (e(243), e(2)),
        component = Object(o.a)(
          r,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t(
              "div",
              {
                staticClass:
                  "flex flex-col bg-white rounded-md overflow-hidden items-center pb-0 w-full min-w-full",
              },
              [
                n.link
                  ? t(
                      "nuxt-link",
                      { staticClass: "pt-4 pb-2 px-5", attrs: { to: n.link } },
                      [
                        n.image
                          ? t("client-only", [
                              t(
                                "div",
                                {
                                  staticClass:
                                    "w-48 h-48 overflow-hidden rounded-full",
                                },
                                [
                                  t("app-image", {
                                    attrs: {
                                      publicId: n.pubId,
                                      width: "200",
                                      height: "200",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ])
                          : n._e(),
                      ],
                      1
                    )
                  : n._e(),
                t(
                  "h3",
                  { staticClass: "text-center font-bold px-2 py-2 w-2/3" },
                  [n._v(n._s(n.title))]
                ),
                t(
                  "div",
                  {
                    staticClass:
                      "bg-pink p-3 w-full text-center font-bold rounded-sm",
                  },
                  [
                    n.link
                      ? t(
                          "nuxt-link",
                          {
                            staticClass: "text-white w-full",
                            attrs: { to: n.link },
                          },
                          [n._v("Rädda Djuren")]
                        )
                      : n._e(),
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
          "268c997e",
          null
        );
      t.default = component.exports;
      installComponents(component, { AppImage: e(79).default });
    },
    297: function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(0).a.extend({
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
        }),
        o = (e(245), e(2)),
        component = Object(o.a)(
          r,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t(
              "div",
              {
                staticClass:
                  "flex flex-col bg-white rounded-md overflow-hidden items-center pb-0 w-full min-w-full",
              },
              [
                n.link
                  ? t(
                      "nuxt-link",
                      { staticClass: "pt-4 pb-2 px-5", attrs: { to: n.link } },
                      [
                        n.image
                          ? t("client-only", [
                              t(
                                "div",
                                {
                                  staticClass:
                                    "w-48 h-48 overflow-hidden rounded-full",
                                },
                                [
                                  t("app-image", {
                                    attrs: {
                                      publicId: n.pubId,
                                      width: "200",
                                      height: "200",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ])
                          : n._e(),
                      ],
                      1
                    )
                  : n._e(),
                t(
                  "h3",
                  {
                    staticClass:
                      "text-2xl text-left font-bold py-2 w-full pl-10 pr-20",
                  },
                  [
                    t("nuxt-link", { attrs: { to: n.link } }, [
                      n._v(n._s(n.title)),
                    ]),
                  ],
                  1
                ),
                n.preamble
                  ? t(
                      "p",
                      { staticClass: "w-full text-sm pl-10 pr-20 pb-10" },
                      [
                        t("nuxt-link", { attrs: { to: n.link } }, [
                          n._v(n._s(n.preamble)),
                        ]),
                      ],
                      1
                    )
                  : n._e(),
                t(
                  "div",
                  {
                    staticClass:
                      "bg-pink p-3 w-full text-center font-bold rounded-sm",
                  },
                  [
                    n.link
                      ? t(
                          "nuxt-link",
                          {
                            staticClass: "text-white w-full",
                            attrs: { to: n.link },
                          },
                          [n._v("››")]
                        )
                      : n._e(),
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
          "8a16feca",
          null
        );
      t.default = component.exports;
      installComponents(component, { AppImage: e(79).default });
    },
    334: function (n, t, e) {
      "use strict";
      e(274);
    },
    335: function (n, t, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        "/*purgecss start ignore*/\n.search-results[data-v-40628a45]{\n  display:flex;\n  flex-direction:column;\n  align-items:center;\n  animation:slideIn-40628a45 .5s;\n  overflow:hidden;\n  margin:1em auto auto;\n  border-radius:.2em;\n  padding:0;\n}\n.search-results__header[data-v-40628a45]{\n    padding:1em;\n    text-align:center;\n}\n.search-results__header h2[data-v-40628a45]{\n      margin-bottom:1rem;\n      font-size:1.5rem;\n      line-height:2rem;\n      font-weight:700;\n      text-transform:capitalize\n}\n.search-results__header .results[data-v-40628a45]{\n      max-width:20rem;\n      font-size:1rem;\n      line-height:1.5rem;\n      font-weight:700\n}\n.search-results__items[data-v-40628a45]{\n    display:grid;\n    width:100%;\n    max-width:1200px;\n    grid-template-columns:repeat(1, minmax(0, 1fr));\n    gap:1rem;\n    padding-left:1rem;\n    padding-right:1rem;\n}\n@media (min-width: 768px){\n.search-results__items[data-v-40628a45]{\n      grid-template-columns:repeat(3, minmax(0, 1fr))\n}\n}\n.search-results__items li[data-v-40628a45]{\n      margin-left:auto;\n      margin-right:auto;\n      max-width:400px\n}\n@keyframes slideIn-40628a45{\n0%{\n    opacity:0\n}\nto{\n    opacity:1\n}\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    376: function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(0).a.extend({
          name: "SearchResults",
          props: {
            hits: { type: Array, default: () => [] },
            query: { type: String, default: "" },
          },
        }),
        o = (e(334), e(2)),
        component = Object(o.a)(
          r,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t("section", { staticClass: "search-results" }, [
              t("div", { staticClass: "search-results__header" }, [
                n.query ? t("h2", [n._v(n._s(n.query))]) : n._e(),
                t("p", { staticClass: "results" }, [
                  0 === n.hits.length
                    ? t("span", [
                        n._v(
                          "Inga träffar. Testa att rensa filter, bredda din sökning eller söka på något annat"
                        ),
                      ])
                    : t("span", [
                        n._v(
                          n._s(
                            ""
                              .concat(n.hits.length, " ")
                              .concat(1 === n.hits.length ? "träff" : "träffar")
                          )
                        ),
                      ]),
                ]),
              ]),
              t(
                "ul",
                { staticClass: "search-results__items" },
                n._l(n.hits, function (e) {
                  return t(
                    "li",
                    { key: e.objectID },
                    [
                      "/djurfakta" === e.dir
                        ? t("animal-slider-card", { attrs: { animal: e } })
                        : "/lar-dig-mer" === e.dir
                        ? t("learn-more-card", {
                            attrs: {
                              preamble: e.preamble,
                              title: e.title,
                              image: e.image,
                              link: e.path,
                            },
                          })
                        : "/klubbnytt" === e.dir
                        ? t("magazine-card", {
                            attrs: {
                              preamble: e.preamble,
                              title: e.title,
                              image: e.image,
                              link: e.path,
                            },
                          })
                        : "/vuxen-eller-pedagog" === e.dir
                        ? t("adult-card", {
                            attrs: {
                              preamble: e.preamble,
                              title: e.title,
                              image: e.image,
                              link: e.path,
                            },
                          })
                        : "/hjalp-djuren" === e.dir
                        ? t("activist-card", {
                            attrs: {
                              preamble: e.preamble,
                              title: e.title,
                              image: e.image,
                              link: e.path,
                            },
                          })
                        : "/pages" === e.dir
                        ? t("page-card", {
                            attrs: {
                              preamble: e.preamble,
                              title: e.title,
                              image: e.image,
                              link: e.path,
                            },
                          })
                        : n._e(),
                    ],
                    1
                  );
                }),
                0
              ),
            ]);
          },
          [],
          !1,
          null,
          "40628a45",
          null
        );
      t.default = component.exports;
      installComponents(component, {
        AnimalSliderCard: e(209).default,
        LearnMoreCard: e(293).default,
        MagazineCard: e(294).default,
        AdultCard: e(295).default,
        ActivistCard: e(296).default,
        PageCard: e(297).default,
      });
    },
  },
]);
