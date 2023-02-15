(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (n, t, e) {
      "use strict";
      var r = e(0).a.extend({
          layout: "default",
          props: { error: { type: Object, default: () => {} } },
        }),
        o = (e(92), e(2)),
        component = Object(o.a)(
          r,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t("div", { staticClass: "container" }, [
              t("div", { staticClass: "page-error max-w-xl pt-20 mx-auto" }, [
                404 === n.error.statusCode
                  ? t("div", { staticClass: "max-w-xl text-center" }, [
                      t("h1", { staticClass: "text-4xl pb-10" }, [
                        n._v("Oj, den sidan hittade vi inte"),
                      ]),
                    ])
                  : t("div", { staticClass: "max-w-xl text-center" }, [
                      t("h1", { staticClass: "text-4xl pb-10" }, [
                        n._v("Ett fel har inträffat."),
                      ]),
                      t("p", [
                        n._v(
                          "Kontakta gärna webb@djurensratt.se och berätta vad som hänt."
                        ),
                      ]),
                    ]),
                t("div", { staticClass: "max-w-xl text-center" }, [
                  t(
                    "p",
                    [
                      n._v("Vill du "),
                      t("nuxt-link", { attrs: { to: "/" } }, [
                        n._v("tillbaka till förstasidan "),
                      ]),
                      n._v(
                        "eller är du ute efter något annat? Testa att söka här eller bläddra bland artiklarna"
                      ),
                    ],
                    1
                  ),
                ]),
              ]),
              t(
                "div",
                [
                  t("search-input", { staticClass: "pb-20" }),
                  t("learn-more-block"),
                ],
                1
              ),
            ]);
          },
          [],
          !1,
          null,
          "18147282",
          null
        );
      t.a = component.exports;
      installComponents(component, {
        SearchInput: e(32).default,
        LearnMoreBlock: e(85).default,
      });
    },
    ,
    ,
    ,
    ,
    function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(0).a.extend({
          props: {
            external: { default: !1, type: Boolean },
            href: { default: null, type: String },
          },
          computed: {
            hrefIsExternal() {
              return this.href.startsWith("http");
            },
          },
        }),
        o = e(2),
        component = Object(o.a)(
          r,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return n.external || n.hrefIsExternal
              ? t(
                  "a",
                  {
                    ref: "external",
                    staticClass: "link",
                    attrs: { href: n.href, target: "_blank" },
                  },
                  [n._t("default")],
                  2
                )
              : t(
                  "nuxt-link",
                  { staticClass: "link", attrs: { to: n.href } },
                  [n._t("default")],
                  2
                );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
    },
    ,
    ,
    ,
    function (n, t, e) {
      n.exports = e.p + "img/whale.8ff8d25.svg";
    },
    function (n, t, e) {
      n.exports = e.p + "img/learn-more-chick.df1021f.svg";
    },
    function (n, t, e) {
      n.exports = e.p + "img/help-animals-hands.d1dc532.svg";
    },
    function (n, t, e) {
      n.exports = e.p + "img/vego-recipe-cake.7aff835.svg";
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (n, t, e) {
      "use strict";
      var r = e(0),
        o = e(73),
        l = e.n(o);
      t.a = (n) => {
        var { app: t } = n;
        r.a.use(l.a, {
          router: t.router,
          requireConsent: !1,
          disableCookies: !0,
          debug: !0,
          host: "https://a.djurensratt.se",
          siteId: 1,
        });
      };
    },
    function (n, t, e) {
      "use strict";
      var r = e(0),
        o = e(78);
      r.a.component("VueFlickity", o.a);
    },
    function (n, t, e) {
      "use strict";
      var r = e(74);
      e(0).a.use(r.a);
    },
    function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(0).a.extend({
          name: "SearchInput",
          data: () => ({ searchTerm: "" }),
          methods: {
            submit() {
              "/sok" === this.$route.path
                ? this.$router.replace({
                    path: "sok",
                    query: { sokord: this.searchTerm },
                  })
                : this.$router.push({
                    path: "/sok",
                    query: { sokord: this.searchTerm },
                  });
            },
          },
        }),
        o = (e(94), e(2)),
        component = Object(o.a)(
          r,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t("div", { staticClass: "search-input" }, [
              t(
                "form",
                {
                  on: {
                    submit: function (t) {
                      return (
                        t.preventDefault(), n.submit.apply(null, arguments)
                      );
                    },
                  },
                },
                [
                  t(
                    "svg",
                    {
                      staticClass: "search w-6 h-6 search-icon",
                      attrs: { viewBox: "0 0 20 20", fill: "currentColor" },
                      on: { click: n.submit },
                    },
                    [
                      t("path", {
                        attrs: {
                          "fill-rule": "evenodd",
                          d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                          "clip-rule": "evenodd",
                        },
                      }),
                    ]
                  ),
                  t("input", {
                    attrs: {
                      type: "search",
                      placeholder: "Sök på djur, fakta, vego eller tips ...",
                    },
                    domProps: { value: n.searchTerm },
                    on: {
                      input: function (t) {
                        n.searchTerm = t.currentTarget.value;
                      },
                    },
                  }),
                ]
              ),
            ]);
          },
          [],
          !1,
          null,
          "5266c326",
          null
        );
      t.default = component.exports;
    },
    function (n, t, e) {
      var content = e(93);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("eab4b250", content, !0, { sourceMap: !1 });
    },
    function (n, t, e) {
      var content = e(95);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("25533c9b", content, !0, { sourceMap: !1 });
    },
    function (n, t, e) {
      var content = e(97);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("7da6e2c8", content, !0, { sourceMap: !1 });
    },
    function (n, t, e) {
      var content = e(99);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("b08a678a", content, !0, { sourceMap: !1 });
    },
    function (n, t, e) {
      var content = e(101);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("6e0d1aea", content, !0, { sourceMap: !1 });
    },
    ,
    function (n, t, e) {
      n.exports = e.p + "img/become-member-piglet.592d61f.svg";
    },
    function (n, t, e) {
      var content = e(115);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("6e7aeb20", content, !0, { sourceMap: !1 });
    },
    function (n, t, e) {
      n.exports = e.p + "img/membership-premier-2021.218d70a.png";
    },
    function (n, t, e) {
      n.exports = e.p + "img/membership-2.91926e6.png";
    },
    function (n, t, e) {
      n.exports = e.p + "img/membership-3.addcdde.jpg";
    },
    function (n, t, e) {
      var content = e(117);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("6af62d5c", content, !0, { sourceMap: !1 });
    },
    function (n, t, e) {
      var content = e(119);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("0d63d09f", content, !0, { sourceMap: !1 });
    },
    function (n, t, e) {
      n.exports = e.p + "img/logo-djurens-ratt.73b4768.svg";
    },
    function (n, t, e) {
      var content = e(121);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("b12f412a", content, !0, { sourceMap: !1 });
    },
    function (n, t, e) {
      n.exports = e.p + "img/logo-rdk-new.63a63bb.png";
    },
    function (n, t, e) {
      n.exports = e.p + "img/90-konto.0ceabf8.svg";
    },
    function (n, t, e) {
      n.exports = e.p + "img/cookie.5e21551.svg";
    },
    function (n, t, e) {
      n.exports = e.p + "img/tryggt-givande.e4a62a7.svg";
    },
    function (n, t, e) {
      var content = e(146);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("2bdbaddc", content, !0, { sourceMap: !1 });
    },
    function (n, t, e) {
      var content = e(148);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("3e5e7d44", content, !0, { sourceMap: !1 });
    },
    function (n, t, e) {
      var content = e(150);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("fb311b36", content, !0, { sourceMap: !1 });
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
    function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(0).a.extend({
          name: "navigation-item",
          props: {
            label: { type: String, required: !0 },
            icon: { type: String, required: !0 },
            href: { type: String, required: !0 },
            iconVariant: { type: String, default: null },
          },
        }),
        o = (e(114), e(2)),
        component = Object(o.a)(
          r,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t(
              "app-link",
              {
                staticClass:
                  "navigation-item pb-2 sm_pb-1 px-4 flex flex-col items-center justify-center text-sm font-bold text-center rounded-lg transform hover_scale-105",
                attrs: { href: n.href },
              },
              [
                t(
                  "div",
                  { staticClass: "sm_flex-1 my-2 sm_my-0 flex items-center" },
                  [
                    t("img", {
                      staticClass: "icon w-12 sm_w-9 h-12 sm_h-9",
                      class: n.iconVariant,
                      attrs: { src: n.icon },
                    }),
                  ]
                ),
                t("p", [n._v(n._s(n.label))]),
              ]
            );
          },
          [],
          !1,
          null,
          "98a158ea",
          null
        );
      t.default = component.exports;
      installComponents(component, { AppLink: e(14).default });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (n, t, e) {
      "use strict";
      var r = e(0).a.extend({
          head() {
            return {
              link: [
                {
                  rel: "canonical",
                  href: "https://www.raddadjuren.se" + this.$route.path,
                },
              ],
            };
          },
        }),
        o = e(2),
        component = Object(o.a)(
          r,
          function () {
            var n = this._self._c;
            this._self._setupProxy;
            return n(
              "div",
              [
                n("app-header"),
                n(
                  "div",
                  { staticClass: "container mx-auto" },
                  [n("nuxt"), n("membership"), n("about-rdk")],
                  1
                ),
                n("app-footer"),
                n("mobile-menu", { staticClass: "sm_hidden" }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.a = component.exports;
      installComponents(component, {
        AppHeader: e(178).default,
        Membership: e(172).default,
        AboutRdk: e(173).default,
        AppFooter: e(175).default,
        MobileMenu: e(177).default,
      });
    },
    ,
    function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(0).a.extend({
          inheritAttrs: !1,
          props: {
            publicId: { type: String, required: !0 },
            dpr: { type: String, default: "auto" },
            crop: { type: String, default: "lfill" },
            gravity: { type: String, default: "faces" },
            responsive: {
              type: String,
              default: null,
              validator: (n) => ["width"].includes(n),
            },
          },
          computed: {
            modifiers() {
              return { c: this.crop, dpr: this.dpr, gravity: this.gravity };
            },
            sizes() {
              return "width" === this.responsive
                ? "xs:100vw sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw 3xl:100vw"
                : null;
            },
          },
        }),
        o = e(2),
        component = Object(o.a)(
          r,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t(
              "nuxt-img",
              n._b(
                {
                  attrs: {
                    provider: "cloudinary",
                    src: n.publicId,
                    modifiers: n.modifiers,
                    sizes: n.sizes,
                  },
                },
                "nuxt-img",
                n.$attrs,
                !1
              )
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
    },
    ,
    function (n, t) {
      n.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiAgPHBhdGggaWQ9ImNpcmNsZS1sZWZ0IiBmaWxsPSIjZmZmZmZmIiBkPSJNMTYsNEExMiwxMiwwLDEsMCwyOCwxNiwxMi4wMTMxMiwxMi4wMTMxMiwwLDAsMCwxNiw0Wm02LDEzYTEsMSwwLDAsMS0xLDFIMTd2MS45ODg1M2ExLDEsMCwwLDEtMS41NzAxOS44MjE1M0w5LjY4MzUzLDE2LjgyMTUzYTEuMDAwMDUsMS4wMDAwNSwwLDAsMSwwLTEuNjQzMDZsNS43NDYyOC0zLjk4ODUzQTEsMSwwLDAsMSwxNywxMi4wMTE0N1YxNGg0YTEsMSwwLDAsMSwxLDFaIi8+Cjwvc3ZnPgo=";
    },
    function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(0).a.extend({
          props: {
            title: { type: String, required: !0, default: "" },
            preamble: { type: String, default: "" },
            variant: { type: String, default: "standard" },
          },
        }),
        o = (e(98), e(2)),
        component = Object(o.a)(
          r,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t("div", { staticClass: "page-title" }, [
              t("h2", { class: n.variant }, [n._v(n._s(n.title))]),
              n.preamble
                ? t("p", { staticClass: "preamble" }, [n._v(n._s(n.preamble))])
                : n._e(),
            ]);
          },
          [],
          !1,
          null,
          "b5db7678",
          null
        );
      t.default = component.exports;
    },
    function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(0);
      function o(object, n) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var e = Object.getOwnPropertySymbols(object);
          n &&
            (e = e.filter(function (n) {
              return Object.getOwnPropertyDescriptor(object, n).enumerable;
            })),
            t.push.apply(t, e);
        }
        return t;
      }
      function l(n) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? o(Object(source), !0).forEach(function (t) {
                d(n, t, source[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                n,
                Object.getOwnPropertyDescriptors(source)
              )
            : o(Object(source)).forEach(function (t) {
                Object.defineProperty(
                  n,
                  t,
                  Object.getOwnPropertyDescriptor(source, t)
                );
              });
        }
        return n;
      }
      function d(n, t, e) {
        return (
          (t = (function (n) {
            var t = (function (input, n) {
              if ("object" != typeof input || null === input) return input;
              var t = input[Symbol.toPrimitive];
              if (void 0 !== t) {
                var e = t.call(input, n || "default");
                if ("object" != typeof e) return e;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === n ? String : Number)(input);
            })(n, "string");
            return "symbol" == typeof t ? t : String(t);
          })(t)) in n
            ? Object.defineProperty(n, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[t] = e),
          n
        );
      }
      var m = {
          cellAlign: "center",
          contain: !0,
          wrapAround: !0,
          pageDots: !1,
          prevNextButtons: !0,
        },
        c = r.a.extend({
          name: "Slider",
          props: { options: { type: Object, default: () => ({}) } },
          data() {
            return { mergedOptions: l(l({}, m), this.options) };
          },
          computed: {
            $flickity() {
              return this.$refs.swiper.$flickity;
            },
          },
          methods: {
            onInit() {
              var n = this.$flickity;
              n.on("dragStart", () => (n.slider.style.pointerEvents = "none")),
                n.on("dragEnd", () => (n.slider.style.pointerEvents = "auto")),
                this.$emit("init", n);
            },
          },
        }),
        f = e(2),
        component = Object(f.a)(
          c,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t(
              "client-only",
              [
                t(
                  "vue-flickity",
                  {
                    ref: "swiper",
                    attrs: { options: n.mergedOptions },
                    on: { init: n.onInit },
                  },
                  [n._t("default")],
                  2
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
    },
    function (n, t, e) {
      n.exports = e.p + "img/tik-tok.d4e265a.svg";
    },
    function (n, t, e) {
      "use strict";
      e.r(t);
      function r(n, t, e, r, o, l, d) {
        try {
          var m = n[l](d),
            c = m.value;
        } catch (n) {
          return void e(n);
        }
        m.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      var o = e(0).a.extend({
          props: {
            articles: { default: null, type: Array },
            title: { default: "Lär dig mer om", type: String },
            preamble: { default: null, type: String },
            dummy: { default: "", type: String },
          },
          data: () => ({
            defaultArticles: null,
            mockUp: [
              {
                title: "Skinn, fjädrar och andra material från djur",
                image:
                  "/v1594989266/rdk/gary-bendig-7ne1ifXhI_Y-unsplash_x2bjw3.jpg",
                path: "/lar-dig-mer/abcd",
                extension: ".md",
              },
              {
                title: "Djur i familjen",
                image:
                  "/v1594985695/rdk/paulius-dragunas-RScwqpg5yDU-unsplash_j6ppu8.jpg",
                path: "/lar-dig-mer/djur-i-familjen",
                extension: ".md",
              },
              {
                title: "Djur som mat",
                image:
                  "/v1596630538/rdk/strinoiu-marian-iiRu0ZQmhmY-unsplash_dfyu22.jpg",
                path: "/lar-dig-mer/djur-som-mat",
                extension: ".md",
              },
              {
                title: "Djur som underhållning",
                image:
                  "/v1596630207/rdk/anais-buan-mQ1P4zxSF1A-unsplash_rl5thh.jpg",
                path: "/lar-dig-mer/djur-som-underhallning",
                extension: ".md",
              },
              {
                title: "Djurens päls",
                image: "/v1596629901/rdk/shutterstock_786450262_aj4wxy.jpg",
                path: "/lar-dig-mer/djurens-pals",
                extension: ".md",
              },
              {
                title: "Djurförsök",
                image:
                  "/v1596629211/rdk/adrian-pereira-cIH81koe-ao-unsplash_fxwe2o.jpg",
                path: "/lar-dig-mer/djurforsok",
                extension: ".md",
              },
              {
                title: "Varför ska vi bry oss om djuren?",
                image:
                  "/v1596629566/rdk/david-wheater-kiDj3A2JtMo-unsplash_jrzkit.jpg",
                path: "/lar-dig-mer/varfor-ska-vi-bry-oss-om-djuren",
                extension: ".md",
              },
            ],
          }),
          fetch() {
            var n,
              t = this;
            return ((n = function* () {
              t.$content &&
                !t.dummy &&
                (t.defaultArticles = yield t
                  .$content("lar-dig-mer")
                  .where({ list: !0 })
                  .only(["title", "path", "image"])
                  .fetch());
            }),
            function () {
              var t = this,
                e = arguments;
              return new Promise(function (o, l) {
                var d = n.apply(t, e);
                function m(n) {
                  r(d, o, l, m, c, "next", n);
                }
                function c(n) {
                  r(d, o, l, m, c, "throw", n);
                }
                m(void 0);
              });
            })();
          },
          computed: {
            articleList() {
              var n;
              return this.dummy
                ? this.mockUp
                : null !== (n = this.articles) && void 0 !== n
                ? n
                : this.defaultArticles;
            },
          },
        }),
        l = o,
        d = (e(96), e(2)),
        component = Object(d.a)(
          l,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t(
              "div",
              { staticClass: "learn-more-block" },
              [
                t("page-title", {
                  staticClass: "title",
                  attrs: { title: n.title, variant: "pink" },
                }),
                t("section", [
                  t("p", { staticClass: "preamble" }, [n._v(n._s(n.preamble))]),
                  n.$fetchState && n.$fetchState.pending
                    ? t("div")
                    : t("div", [
                        t(
                          "ul",
                          n._l(n.articleList, function (article) {
                            return t(
                              "li",
                              { key: article.path },
                              [
                                t("image-item", {
                                  attrs: {
                                    title: article.title,
                                    link: article.path,
                                    image: article.image,
                                  },
                                }),
                              ],
                              1
                            );
                          }),
                          0
                        ),
                      ]),
                ]),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "8bb8016a",
          null
        );
      t.default = component.exports;
      installComponents(component, {
        PageTitle: e(82).default,
        ImageItem: e(171).default,
      });
    },
    function (n, t, e) {
      e(87), (n.exports = e(88));
    },
    ,
    ,
    ,
    ,
    ,
    function (n, t, e) {
      "use strict";
      e(33);
    },
    function (n, t, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        "/*purgecss start ignore*/\n.promo-block[data-v-18147282]{\n  background-size:cover;\n  box-sizing:border-box;\n  background-position:50%\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    function (n, t, e) {
      "use strict";
      e(34);
    },
    function (n, t, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        "/*purgecss start ignore*/\n.search-input[data-v-5266c326]{\n  position:relative;\n  margin:1.4rem auto 1rem;\n}\n@media (min-width: 768px){\n.search-input[data-v-5266c326]{\n    margin-left:auto;\n\n    margin-bottom:1rem;\n\n    margin-right:auto;\n\n    margin-top:2rem\n}\n}\n.search-input form[data-v-5266c326]{\n    max-width:650px;\n    position:relative;\n    margin:0 auto\n}\n.search-input input[data-v-5266c326]:not(.ais-RefinementList-checkbox){\n    display:block;\n    width:100%;\n    max-width:650px;\n    height:50px;\n    margin:0 auto;\n    padding:1rem 3rem;\n    font-size:1rem;\n    border:none;\n    background-color:#fff;\n    border-radius:5em;\n    text-align:center;\n}\n@media (min-width: 768px){\n.search-input input[data-v-5266c326]:not(.ais-RefinementList-checkbox){\n      margin-left:auto;\n\n      margin-bottom:2rem;\n\n      margin-right:auto;\n\n      margin-top:0\n}\n}\n.search-input input[data-v-5266c326]:not(.ais-RefinementList-checkbox):focus{\n    outline:none\n}\n.search-input .search-icon[data-v-5266c326]{\n    position:absolute;\n    right:.7em;\n    top:.6em;\n    font-size:21px;\n    color:#373737;\n    transition:all .3s ease\n}\n.search-input .search-icon[data-v-5266c326]:hover{\n    cursor:pointer;\n    color:#000000\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    function (n, t, e) {
      "use strict";
      e(35);
    },
    function (n, t, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        "/*purgecss start ignore*/\n.learn-more-block h2[data-v-8bb8016a]{\n    background-color:#e6007e\n}\n.learn-more-block[data-v-8bb8016a]{\n  position:relative;\n  margin-bottom:2rem;\n  display:inline-block;\n  width:100%;\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}\n.learn-more-block p.preamble[data-v-8bb8016a]{\n    margin-left:auto;\n    margin-right:auto;\n    margin-top:3rem;\n    margin-bottom:3rem;\n    width:83.333333%;\n    max-width:42rem;\n    text-align:center;\n    font-size:1rem;\n    line-height:1.5rem\n}\n.learn-more-block ul[data-v-8bb8016a]{\n    margin-left:auto;\n    margin-right:auto;\n    display:grid;\n    width:100%;\n    max-width:1200px;\n    grid-template-columns:repeat(1, minmax(0, 1fr));\n    gap:1rem;\n    padding-left:1rem;\n    padding-right:1rem;\n}\n@media (min-width: 768px){\n.learn-more-block ul[data-v-8bb8016a]{\n      grid-template-columns:repeat(3, minmax(0, 1fr))\n}\n}\n@media (min-width: 1024px){\n.learn-more-block ul[data-v-8bb8016a]{\n      grid-template-columns:repeat(4, minmax(0, 1fr))\n}\n}\n.learn-more-block ul li[data-v-8bb8016a]{\n      margin-left:auto;\n      margin-right:auto;\n      max-width:400px\n}\n.learn-more-block ul li[data-v-8bb8016a] .themed{\n      background-color:#e6007e\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    function (n, t, e) {
      "use strict";
      e(36);
    },
    function (n, t, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        "/*purgecss start ignore*/\nh2[data-v-b5db7678]{\n  --tw-bg-opacity:1;\n  background-color:rgba(0, 0, 0, var(--tw-bg-opacity));\n  padding:0.75rem;\n  padding-top:1rem;\n  text-align:center;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\nh2.pink[data-v-b5db7678]{\n  background-color:#e6007e\n}\np.preamble[data-v-b5db7678]{\n  margin-left:auto;\n  margin-right:auto;\n  margin-top:3rem;\n  margin-bottom:3rem;\n  width:83.333333%;\n  max-width:42rem;\n  text-align:center;\n  font-size:1rem;\n  line-height:1.5rem\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    function (n, t, e) {
      "use strict";
      e(37);
    },
    function (n, t, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        "/*purgecss start ignore*/\n.image-item[data-v-1d55103a]{\n  display:flex;\n  flex-direction:column;\n  align-items:center;\n}\n.image-item__image[data-v-1d55103a]{\n    margin-bottom:1rem;\n    height:12rem;\n    width:12rem;\n    overflow:hidden;\n    border-radius:9999px\n}\n.image-item h3[data-v-1d55103a]{\n    padding-left:0.5rem;\n    padding-right:0.5rem;\n    text-align:center;\n    font-weight:700;\n    font-family:'Avenir LT Std', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;\n    color:#373737\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    ,
    ,
    function (n, t, e) {
      var content = e(105);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals);
      (0, e(4).default)("9d54a558", content, !0, { sourceMap: !1 });
    },
    function (n, t, e) {
      var r = e(3),
        o = e(80),
        l = e(106),
        d = e(107),
        m = e(108),
        c = e(109),
        f = e(110),
        h = e(111),
        x = r(function (i) {
          return i[1];
        }),
        v = o(l),
        w = o(d),
        y = o(m),
        k = o(m, { hash: "?#iefix" }),
        M = o(c),
        _ = o(f),
        j = o(h);
      x.push([
        n.i,
        "/*! tailwindcss v2.2.19 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='submit'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #a1a1aa;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #a1a1aa;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after{\n  border-color:currentColor;\n}\n\nhtml{\n  background:#f0f0f0;\n  background-image:linear-gradient(180deg,#75d7d8 91px,#f0f0f0 500px);\n  background-repeat:no-repeat;\n  background-attachment:fixed\n}\n\nbody,html{\n  max-width:100vw;\n  overflow-x:hidden\n}\n\nbody{\n  position:relative;\n  color:#373737;\n  font-family:'Avenir LT Std', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;\n  font-size:17px;\n  line-height:1.3;\n  -ms-text-size-adjust:100%;\n  -webkit-text-size-adjust:100%;\n  -moz-osx-font-smoothing:grayscale;\n  -webkit-font-smoothing:antialiased;\n  box-sizing:border-box;\n  margin:0 auto;\n  min-height:100vh;\n}\n\n@media (min-width: 768px){\n\nbody{\n    font-size:19px;\n\n    line-height:1.4\n}\n  }\n\n@media (min-width: 1200px){\n\nbody{\n    font-size:21px;\n\n    line-height:1.5\n}\n  }\n\nimg{\n  max-width:100%;\n  height:auto\n}\n\na{\n  text-decoration:none\n}\n\n*,:after,:before{\n  box-sizing:border-box;\n  margin:0\n}\n\ninput.text,input[type=button],input[type=submit],input[type=text],textarea{\n  -webkit-appearance:none;\n  border-radius:0\n}\n\n.btn,button{\n  --color-primary:#7dfed2;\n  --color-primary-hover:#44fdbe;\n  --color-secondary:#ffffff;\n  font-family:'Avenir LT Std', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;\n  display:inline-block;\n  padding:9px 26px;\n  font-size:1.2125rem;\n  text-align:center;\n  margin:auto;\n  font-weight:700;\n  background-color:var(--color-primary);\n  border-radius:.4em;\n  transition:.3s ease\n}\n\n.btn:hover,button:hover{\n  background-color:var(--color-primary-hover);\n  transform:scale(1.05)\n}\n\n@media (max-width:320px){\n  .btn,button{\n    font-size:1.2rem\n  }\n}\n\n.btn.green,button.green{\n  --color-primary:#5ec19f;\n  --color-primary-hover:#38AA83\n}\n\n.btn.purple,button.purple{\n  --color-primary:#9b51e0;\n  --color-primary-hover:#7a54c3\n}\n\n.btn.blue,button.blue{\n  --color-primary:#00b4d2;\n  --color-primary-hover:#00b4d2\n}\n\n.btn.outlined, button.outlined{\n  border-width:2px;\n  background-color:transparent;\n}\n\n.btn.outlined,button.outlined{\n  border-color:var(--color-primary);\n  color:var(--color-primary);\n}\n\n.btn.outlined:hover,button.outlined:hover{\n  background-color:var(--color-primary-hover);\n  border-color:var(--color-primary-hover);\n  color:var(--color-secondary)\n}\n\nsection{\n  margin:2rem 0;\n}\n\n@media (min-width: 768px){\n\nsection{\n    margin-left:1rem;\n\n    margin-bottom:4rem;\n\n    margin-right:1rem;\n\n    margin-top:4rem\n}\n  }\n\ninput[type=search]::-ms-clear,input[type=search]::-ms-reveal{\n  display:none;\n  width:0;\n  height:0\n}\n\ninput[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration{\n  display:none\n}\n\n.container{\n  width:100%;\n}\n\n@media (min-width: 768px){\n  .container{\n    max-width:768px;\n  }\n}\n\n@media (min-width: 1024px){\n  .container{\n    max-width:1024px;\n  }\n}\n\n@media (min-width: 1200px){\n  .container{\n    max-width:1200px;\n  }\n}\n\n@media (min-width: 1440px){\n  .container{\n    max-width:1440px;\n  }\n}\n\n\n.aspect-w-16{\n  position:relative;\n  padding-bottom:calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);\n}\n\n\n.aspect-w-16 > *{\n  position:absolute;\n  height:100%;\n  width:100%;\n  top:0;\n  right:0;\n  bottom:0;\n  left:0;\n}\n\n.aspect-w-16{\n  --tw-aspect-w:16;\n}\n\n.aspect-h-9{\n  --tw-aspect-h:9;\n}\n\n.container{\n  margin-left:auto;\n  margin-right:auto;\n  max-width:80.125em;\n  padding:0 3%\n}\n\n.pointer-events-none{\n  pointer-events:none !important;\n}\n\n.pointer-events-auto{\n  pointer-events:auto !important;\n}\n\n.static{\n  position:static !important;\n}\n\n.fixed{\n  position:fixed !important;\n}\n\n.absolute{\n  position:absolute !important;\n}\n\n.relative{\n  position:relative !important;\n}\n\n.inset-0{\n  top:0px !important;\n  right:0px !important;\n  bottom:0px !important;\n  left:0px !important;\n}\n\n.top-0{\n  top:0px !important;\n}\n\n.right-0{\n  right:0px !important;\n}\n\n.bottom-0{\n  bottom:0px !important;\n}\n\n.left-0{\n  left:0px !important;\n}\n\n.z-10{\n  z-index:10 !important;\n}\n\n.z-40{\n  z-index:40 !important;\n}\n\n.m-0{\n  margin:0px !important;\n}\n\n.m-4{\n  margin:1rem !important;\n}\n\n.m-auto{\n  margin:auto !important;\n}\n\n.-m-1{\n  margin:-0.25rem !important;\n}\n\n.mx-1{\n  margin-left:0.25rem !important;\n  margin-right:0.25rem !important;\n}\n\n.mx-auto{\n  margin-left:auto !important;\n  margin-right:auto !important;\n}\n\n.-mx-10{\n  margin-left:-2.5rem !important;\n  margin-right:-2.5rem !important;\n}\n\n.my-0{\n  margin-top:0px !important;\n  margin-bottom:0px !important;\n}\n\n.my-2{\n  margin-top:0.5rem !important;\n  margin-bottom:0.5rem !important;\n}\n\n.my-4{\n  margin-top:1rem !important;\n  margin-bottom:1rem !important;\n}\n\n.my-8{\n  margin-top:2rem !important;\n  margin-bottom:2rem !important;\n}\n\n.my-10{\n  margin-top:2.5rem !important;\n  margin-bottom:2.5rem !important;\n}\n\n.my-12{\n  margin-top:3rem !important;\n  margin-bottom:3rem !important;\n}\n\n.mt-0{\n  margin-top:0px !important;\n}\n\n.mt-1{\n  margin-top:0.25rem !important;\n}\n\n.mt-2{\n  margin-top:0.5rem !important;\n}\n\n.mt-4{\n  margin-top:1rem !important;\n}\n\n.mt-6{\n  margin-top:1.5rem !important;\n}\n\n.mt-8{\n  margin-top:2rem !important;\n}\n\n.mt-10{\n  margin-top:2.5rem !important;\n}\n\n.mt-auto{\n  margin-top:auto !important;\n}\n\n.-mt-4{\n  margin-top:-1rem !important;\n}\n\n.-mt-16{\n  margin-top:-4rem !important;\n}\n\n.-mt-24{\n  margin-top:-6rem !important;\n}\n\n.mr-3{\n  margin-right:0.75rem !important;\n}\n\n.mr-4{\n  margin-right:1rem !important;\n}\n\n.mr-6{\n  margin-right:1.5rem !important;\n}\n\n.mb-0{\n  margin-bottom:0px !important;\n}\n\n.mb-2{\n  margin-bottom:0.5rem !important;\n}\n\n.mb-4{\n  margin-bottom:1rem !important;\n}\n\n.mb-8{\n  margin-bottom:2rem !important;\n}\n\n.mb-9{\n  margin-bottom:2.25rem !important;\n}\n\n.mb-10{\n  margin-bottom:2.5rem !important;\n}\n\n.block{\n  display:block !important;\n}\n\n.inline-block{\n  display:inline-block !important;\n}\n\n.flex{\n  display:flex !important;\n}\n\n.inline-flex{\n  display:inline-flex !important;\n}\n\n.table{\n  display:table !important;\n}\n\n.grid{\n  display:grid !important;\n}\n\n.hidden{\n  display:none !important;\n}\n\n.h-2{\n  height:0.5rem !important;\n}\n\n.h-6{\n  height:1.5rem !important;\n}\n\n.h-8{\n  height:2rem !important;\n}\n\n.h-10{\n  height:2.5rem !important;\n}\n\n.h-12{\n  height:3rem !important;\n}\n\n.h-14{\n  height:3.5rem !important;\n}\n\n.h-16{\n  height:4rem !important;\n}\n\n.h-48{\n  height:12rem !important;\n}\n\n.h-60{\n  height:15rem !important;\n}\n\n.h-full{\n  height:100% !important;\n}\n\n.w-2{\n  width:0.5rem !important;\n}\n\n.w-6{\n  width:1.5rem !important;\n}\n\n.w-8{\n  width:2rem !important;\n}\n\n.w-10{\n  width:2.5rem !important;\n}\n\n.w-12{\n  width:3rem !important;\n}\n\n.w-16{\n  width:4rem !important;\n}\n\n.w-48{\n  width:12rem !important;\n}\n\n.w-1_2{\n  width:50% !important;\n}\n\n.w-10_12{\n  width:83.333333% !important;\n}\n\n.w-full{\n  width:100% !important;\n}\n\n.w-screen{\n  width:100vw !important;\n}\n\n.min-w-full{\n  min-width:100% !important;\n}\n\n.max-w-xs{\n  max-width:20rem !important;\n}\n\n.max-w-lg{\n  max-width:32rem !important;\n}\n\n.max-w-xl{\n  max-width:36rem !important;\n}\n\n.max-w-2xl{\n  max-width:42rem !important;\n}\n\n.max-w-4xl{\n  max-width:56rem !important;\n}\n\n.max-w-screen-sm{\n  max-width:768px !important;\n}\n\n.max-w-screen-md{\n  max-width:1024px !important;\n}\n\n.max-w-screen-lg{\n  max-width:1200px !important;\n}\n\n.flex-1{\n  flex:1 1 0% !important;\n}\n\n.flex-shrink-0{\n  flex-shrink:0 !important;\n}\n\n.transform{\n  --tw-translate-x:0 !important;\n  --tw-translate-y:0 !important;\n  --tw-rotate:0 !important;\n  --tw-skew-x:0 !important;\n  --tw-skew-y:0 !important;\n  --tw-scale-x:1 !important;\n  --tw-scale-y:1 !important;\n  transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;\n}\n\n.hover_scale-105:hover{\n  --tw-scale-x:1.05 !important;\n  --tw-scale-y:1.05 !important;\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n.resize{\n  resize:both !important;\n}\n\n.list-disc{\n  list-style-type:disc !important;\n}\n\n.list-decimal{\n  list-style-type:decimal !important;\n}\n\n.flex-row{\n  flex-direction:row !important;\n}\n\n.flex-col{\n  flex-direction:column !important;\n}\n\n.flex-col-reverse{\n  flex-direction:column-reverse !important;\n}\n\n.flex-wrap{\n  flex-wrap:wrap !important;\n}\n\n.flex-nowrap{\n  flex-wrap:nowrap !important;\n}\n\n.items-center{\n  align-items:center !important;\n}\n\n.justify-center{\n  justify-content:center !important;\n}\n\n.justify-between{\n  justify-content:space-between !important;\n}\n\n.justify-around{\n  justify-content:space-around !important;\n}\n\n.justify-evenly{\n  justify-content:space-evenly !important;\n}\n\n.gap-4{\n  gap:1rem !important;\n}\n\n.gap-10{\n  gap:2.5rem !important;\n}\n\n.space-x-6 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0 !important;\n  margin-right:calc(1.5rem * var(--tw-space-x-reverse)) !important;\n  margin-left:calc(1.5rem * calc(1 - var(--tw-space-x-reverse))) !important;\n}\n\n.space-y-8 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse:0 !important;\n  margin-top:calc(2rem * calc(1 - var(--tw-space-y-reverse))) !important;\n  margin-bottom:calc(2rem * var(--tw-space-y-reverse)) !important;\n}\n\n.self-end{\n  align-self:flex-end !important;\n}\n\n.self-center{\n  align-self:center !important;\n}\n\n.overflow-hidden{\n  overflow:hidden !important;\n}\n\n.overflow-y-auto{\n  overflow-y:auto !important;\n}\n\n.overscroll-none{\n  overscroll-behavior:none !important;\n}\n\n.whitespace-nowrap{\n  white-space:nowrap !important;\n}\n\n.rounded-sm{\n  border-radius:0.125rem !important;\n}\n\n.rounded{\n  border-radius:0.25rem !important;\n}\n\n.rounded-md{\n  border-radius:0.375rem !important;\n}\n\n.rounded-lg{\n  border-radius:0.5rem !important;\n}\n\n.rounded-full{\n  border-radius:9999px !important;\n}\n\n.rounded-l-lg{\n  border-top-left-radius:0.5rem !important;\n  border-bottom-left-radius:0.5rem !important;\n}\n\n.border{\n  border-width:1px !important;\n}\n\n.border-t{\n  border-top-width:1px !important;\n}\n\n.border-r-0{\n  border-right-width:0px !important;\n}\n\n.border-r-2{\n  border-right-width:2px !important;\n}\n\n.border-b-2{\n  border-bottom-width:2px !important;\n}\n\n.border-b{\n  border-bottom-width:1px !important;\n}\n\n.border-l-0{\n  border-left-width:0px !important;\n}\n\n.border-solid{\n  border-style:solid !important;\n}\n\n.border-white{\n  --tw-border-opacity:1 !important;\n  border-color:rgba(255, 255, 255, var(--tw-border-opacity)) !important;\n}\n\n.bg-transparent{\n  background-color:transparent !important;\n}\n\n.bg-white{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity)) !important;\n}\n\n.bg-green-dark{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(56, 170, 131, var(--tw-bg-opacity)) !important;\n}\n\n.bg-green{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(94, 193, 159, var(--tw-bg-opacity)) !important;\n}\n\n.bg-blue{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(0, 180, 210, var(--tw-bg-opacity)) !important;\n}\n\n.bg-blue-turquoise{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(117, 215, 216, var(--tw-bg-opacity)) !important;\n}\n\n.bg-blue-turquoise-dark{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(55, 167, 168, var(--tw-bg-opacity)) !important;\n}\n\n.bg-pink{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(230, 0, 126, var(--tw-bg-opacity)) !important;\n}\n\n.bg-purple-dark{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(122, 84, 195, var(--tw-bg-opacity)) !important;\n}\n\n.bg-grey-300{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(209, 213, 219, var(--tw-bg-opacity)) !important;\n}\n\n.bg-peach{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(253, 168, 127, var(--tw-bg-opacity)) !important;\n}\n\n.bg-opacity-75{\n  --tw-bg-opacity:0.75 !important;\n}\n\n.object-contain{\n  -o-object-fit:contain !important;\n     object-fit:contain !important;\n}\n\n.object-cover{\n  -o-object-fit:cover !important;\n     object-fit:cover !important;\n}\n\n.p-0{\n  padding:0px !important;\n}\n\n.p-1{\n  padding:0.25rem !important;\n}\n\n.p-2{\n  padding:0.5rem !important;\n}\n\n.p-3{\n  padding:0.75rem !important;\n}\n\n.p-4{\n  padding:1rem !important;\n}\n\n.p-10{\n  padding:2.5rem !important;\n}\n\n.px-2{\n  padding-left:0.5rem !important;\n  padding-right:0.5rem !important;\n}\n\n.px-4{\n  padding-left:1rem !important;\n  padding-right:1rem !important;\n}\n\n.px-5{\n  padding-left:1.25rem !important;\n  padding-right:1.25rem !important;\n}\n\n.px-8{\n  padding-left:2rem !important;\n  padding-right:2rem !important;\n}\n\n.px-10{\n  padding-left:2.5rem !important;\n  padding-right:2.5rem !important;\n}\n\n.py-0{\n  padding-top:0px !important;\n  padding-bottom:0px !important;\n}\n\n.py-1{\n  padding-top:0.25rem !important;\n  padding-bottom:0.25rem !important;\n}\n\n.py-2{\n  padding-top:0.5rem !important;\n  padding-bottom:0.5rem !important;\n}\n\n.py-3{\n  padding-top:0.75rem !important;\n  padding-bottom:0.75rem !important;\n}\n\n.py-4{\n  padding-top:1rem !important;\n  padding-bottom:1rem !important;\n}\n\n.py-5{\n  padding-top:1.25rem !important;\n  padding-bottom:1.25rem !important;\n}\n\n.py-6{\n  padding-top:1.5rem !important;\n  padding-bottom:1.5rem !important;\n}\n\n.py-8{\n  padding-top:2rem !important;\n  padding-bottom:2rem !important;\n}\n\n.py-10{\n  padding-top:2.5rem !important;\n  padding-bottom:2.5rem !important;\n}\n\n.py-12{\n  padding-top:3rem !important;\n  padding-bottom:3rem !important;\n}\n\n.pt-4{\n  padding-top:1rem !important;\n}\n\n.pt-5{\n  padding-top:1.25rem !important;\n}\n\n.pt-20{\n  padding-top:5rem !important;\n}\n\n.pr-4{\n  padding-right:1rem !important;\n}\n\n.pr-20{\n  padding-right:5rem !important;\n}\n\n.pb-0{\n  padding-bottom:0px !important;\n}\n\n.pb-2{\n  padding-bottom:0.5rem !important;\n}\n\n.pb-4{\n  padding-bottom:1rem !important;\n}\n\n.pb-10{\n  padding-bottom:2.5rem !important;\n}\n\n.pb-12{\n  padding-bottom:3rem !important;\n}\n\n.pb-20{\n  padding-bottom:5rem !important;\n}\n\n.pb-40{\n  padding-bottom:10rem !important;\n}\n\n.pl-5{\n  padding-left:1.25rem !important;\n}\n\n.pl-10{\n  padding-left:2.5rem !important;\n}\n\n.text-left{\n  text-align:left !important;\n}\n\n.text-center{\n  text-align:center !important;\n}\n\n.font-headline{\n  font-family:'RaddaDjuren', sans-serif !important;\n}\n\n.text-xs{\n  font-size:0.75rem !important;\n  line-height:1rem !important;\n}\n\n.text-sm{\n  font-size:0.875rem !important;\n  line-height:1.25rem !important;\n}\n\n.text-base{\n  font-size:1rem !important;\n  line-height:1.5rem !important;\n}\n\n.text-lg{\n  font-size:1.125rem !important;\n  line-height:1.75rem !important;\n}\n\n.text-xl{\n  font-size:1.25rem !important;\n  line-height:1.75rem !important;\n}\n\n.text-2xl{\n  font-size:1.5rem !important;\n  line-height:2rem !important;\n}\n\n.text-3xl{\n  font-size:1.875rem !important;\n  line-height:2.25rem !important;\n}\n\n.text-4xl{\n  font-size:2.25rem !important;\n  line-height:2.5rem !important;\n}\n\n.font-medium{\n  font-weight:500 !important;\n}\n\n.font-bold{\n  font-weight:700 !important;\n}\n\n.font-extrabold{\n  font-weight:800 !important;\n}\n\n.uppercase{\n  text-transform:uppercase !important;\n}\n\n.capitalize{\n  text-transform:capitalize !important;\n}\n\n.leading-7{\n  line-height:1.75rem !important;\n}\n\n.leading-8{\n  line-height:2rem !important;\n}\n\n.leading-none{\n  line-height:1 !important;\n}\n\n.text-white{\n  --tw-text-opacity:1 !important;\n  color:rgba(255, 255, 255, var(--tw-text-opacity)) !important;\n}\n\n.text-green-dark{\n  --tw-text-opacity:1 !important;\n  color:rgba(56, 170, 131, var(--tw-text-opacity)) !important;\n}\n\n.text-green{\n  --tw-text-opacity:1 !important;\n  color:rgba(94, 193, 159, var(--tw-text-opacity)) !important;\n}\n\n.underline{\n  text-decoration:underline !important;\n}\n\n.no-underline{\n  text-decoration:none !important;\n}\n\n*, ::before, ::after{\n  --tw-shadow:0 0 #0000;\n}\n\n.outline-none{\n  outline:2px solid transparent !important;\n  outline-offset:2px !important;\n}\n\n*, ::before, ::after{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n\n.filter{\n  --tw-blur:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-brightness:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-contrast:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-grayscale:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-invert:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-saturate:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-sepia:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/) !important;\n  filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;\n}\n\n.transition{\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter !important;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter !important;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter !important;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1) !important;\n  transition-duration:150ms !important;\n}\n\n.ais-SearchBox{\n  max-width:750px;\n  margin:auto;\n}\n\n.ais-SearchBox-reset{\n    display:none\n  }\n\n.ais-SearchBox-input{\n    width:100%;\n    padding-left:2rem;\n    padding-right:2rem;\n    text-align:center;\n    outline:2px solid transparent;\n    outline-offset:2px\n  }\n\n.ais-SearchBox-submit{\n    position:absolute;\n    border-style:none;\n    background-color:transparent;\n    padding:0px;\n    font-size:1.25rem;\n    line-height:1.75rem;\n    top:.6rem;\n    right:1.6rem;\n  }\n\n.ais-SearchBox-submit .search-icon{\n      position:static;\n      padding:0;\n      color:#373737;\n      transition:all .3s ease\n    }\n\n.ais-SearchBox-submit .search-icon:hover{\n      cursor:pointer;\n      color:#000000\n    }\n\n@media (max-width:768px){\n  .ais-RefinementList{\n    background-color:transparent;\n    transition:max-height .5s ease,padding-top .5s ease,padding-bottom .5s ease\n  }\n}\n\n.ais-RefinementList-list{\n    list-style-type:none;\n    padding-left:0;\n    -moz-column-count:1;\n         column-count:1;\n    font-size:1em;\n  }\n\n@media (min-width: 768px){\n\n.ais-RefinementList-list{\n      -moz-column-count:auto;\n           column-count:auto;\n\n      -moz-column-count:2;\n\n           column-count:2\n  }\n    }\n\n.ais-RefinementList-item{\n    margin-bottom:.2em\n  }\n\n.ais-RefinementList-checkbox{\n    position:absolute;\n    opacity:0;\n    height:0;\n    width:0;\n    cursor:pointer\n  }\n\n.ais-RefinementList-checkbox:checked+.ais-RefinementList-labelText:after{\n    opacity:1;\n    transform:rotate(45deg);\n    transition:transform .3s cubic-bezier(.075,1.65,.415,1.65)\n  }\n\n.ais-RefinementList-count{\n    display:none\n  }\n\n.ais-RefinementList-labelText{\n    padding-left:28px;\n    position:relative;\n    cursor:pointer\n  }\n\n.ais-RefinementList-labelText:before{\n    min-height:18px;\n    min-width:18px;\n    left:0;\n    top:-1px;\n    border-radius:3px;\n    box-shadow:0 0 4px rgba(0,0,0,.25);\n    background-color:#fff\n  }\n\n.ais-RefinementList-labelText:after,.ais-RefinementList-labelText:before{\n    position:absolute;\n    content:\"\"\n  }\n\n.ais-RefinementList-labelText:after{\n    left:6px;\n    top:1px;\n    height:12px;\n    width:7px;\n    border-bottom:3px solid #444;\n    border-right:3px solid #444;\n    transform:rotate(.03turn);\n    opacity:0;\n    transition:opacity .3s ease,transform .5s ease\n  }\n\n.swiper:not(.is-active) .flickity-viewport{\n  cursor:default!important\n}\n\n.flickity-page-dots .dot{\n  background:#ffffff;\n  opacity:1\n}\n\n.flickity-page-dots .dot.is-selected{\n  background:#7dfed2\n}\n\n.flickity-page-dots{\n  bottom:0\n}\n\n.flickity-prev-next-button{\n  display:none;\n}\n\n@media (min-width: 1200px){\n\n.flickity-prev-next-button{\n    display:inline-block!important;\n\n    top:45%!important;\n\n    width:50px!important;\n\n    height:50px!important;\n\n    transform:translateY(-45%)!important\n}\n  }\n\n.flickity-prev-next-button .flickity-button-icon{\n    width:60%!important;\n    height:60%!important;\n    padding:7px\n  }\n\n.previous{\n  left:-20px!important\n}\n\n.next{\n  right:-20px!important\n}\n\n@font-face{\n  font-family:\"Avenir LT Std\";\n\n  src:url(" +
          v +
          ') format("woff");\n\n  font-style:normal;\n\n  font-weight:400\n}\n\n@font-face{\n  font-family:"Avenir LT Std Heavy";\n\n  src:url(' +
          w +
          ') format("woff");\n\n  font-style:normal;\n\n  font-weight:700\n}\n\n@font-face{\n  font-family:"RaddaDjuren";\n\n  src:url(' +
          y +
          ");\n\n  src:url(" +
          k +
          ') format("embedded-opentype"),url(' +
          M +
          ') format("woff2"),url(' +
          _ +
          ') format("woff"),url(' +
          j +
          ') format("truetype");\n\n  font-weight:400;\n\n  font-style:normal\n}\n\n@media (min-width: 768px){\n  .sm_my-0{\n    margin-top:0px !important;\n    margin-bottom:0px !important;\n  }\n\n  .sm_block{\n    display:block !important;\n  }\n\n  .sm_flex{\n    display:flex !important;\n  }\n\n  .sm_hidden{\n    display:none !important;\n  }\n\n  .sm_h-9{\n    height:2.25rem !important;\n  }\n\n  .sm_w-9{\n    width:2.25rem !important;\n  }\n\n  .sm_flex-1{\n    flex:1 1 0% !important;\n  }\n\n  .sm_pb-1{\n    padding-bottom:0.25rem !important;\n  }\n}\n\n@media (min-width: 1024px){\n  .md_absolute{\n    position:absolute !important;\n  }\n\n  .md_bottom-20{\n    bottom:5rem !important;\n  }\n\n  .md_mx-0{\n    margin-left:0px !important;\n    margin-right:0px !important;\n  }\n\n  .md_mx-2{\n    margin-left:0.5rem !important;\n    margin-right:0.5rem !important;\n  }\n\n  .md_my-10{\n    margin-top:2.5rem !important;\n    margin-bottom:2.5rem !important;\n  }\n\n  .md_my-20{\n    margin-top:5rem !important;\n    margin-bottom:5rem !important;\n  }\n\n  .md_mt-0{\n    margin-top:0px !important;\n  }\n\n  .md_mt-60{\n    margin-top:15rem !important;\n  }\n\n  .md_mb-20{\n    margin-bottom:5rem !important;\n  }\n\n  .md_-ml-10{\n    margin-left:-2.5rem !important;\n  }\n\n  .md_flex{\n    display:flex !important;\n  }\n\n  .md_h-16{\n    height:4rem !important;\n  }\n\n  .md_flex-row{\n    flex-direction:row !important;\n  }\n\n  .md_justify-center{\n    justify-content:center !important;\n  }\n\n  .md_justify-around{\n    justify-content:space-around !important;\n  }\n\n  .md_justify-evenly{\n    justify-content:space-evenly !important;\n  }\n\n  .md_border-t{\n    border-top-width:1px !important;\n  }\n\n  .md_border-b{\n    border-bottom-width:1px !important;\n  }\n\n  .md_border-solid{\n    border-style:solid !important;\n  }\n\n  .md_border-none{\n    border-style:none !important;\n  }\n\n  .md_border-white{\n    --tw-border-opacity:1 !important;\n    border-color:rgba(255, 255, 255, var(--tw-border-opacity)) !important;\n  }\n\n  .md_p-0{\n    padding:0px !important;\n  }\n\n  .md_py-20{\n    padding-top:5rem !important;\n    padding-bottom:5rem !important;\n  }\n\n  .md_text-left{\n    text-align:left !important;\n  }\n\n  .md_text-lg{\n    font-size:1.125rem !important;\n    line-height:1.75rem !important;\n  }\n}\n\n@media (min-width: 1200px){\n  .lg_mx-8{\n    margin-left:2rem !important;\n    margin-right:2rem !important;\n  }\n\n  .lg_text-xl{\n    font-size:1.25rem !important;\n    line-height:1.75rem !important;\n  }\n\n  .lg_text-4xl{\n    font-size:2.25rem !important;\n    line-height:2.5rem !important;\n  }\n}\n\n@media (min-width: 1440px){\n  .xl_container{\n    width:100%;\n  }\n\n  @media (min-width: 768px){\n    .xl_container{\n      max-width:768px;\n    }\n  }\n\n  @media (min-width: 1024px){\n    .xl_container{\n      max-width:1024px;\n    }\n  }\n\n  @media (min-width: 1200px){\n    .xl_container{\n      max-width:1200px;\n    }\n  }\n\n  @media (min-width: 1440px){\n    .xl_container{\n      max-width:1440px;\n    }\n  }\n\n  .xl_container{\n    margin-left:auto;\n    margin-right:auto;\n    max-width:80.125em;\n    padding:0 3%\n  }\n\n  .xl_static{\n    position:static !important;\n  }\n\n  .xl_mx-12{\n    margin-left:3rem !important;\n    margin-right:3rem !important;\n  }\n\n  .xl_mt-32{\n    margin-top:8rem !important;\n  }\n\n  .xl_flex-row{\n    flex-direction:row !important;\n  }\n\n  .xl_justify-between{\n    justify-content:space-between !important;\n  }\n\n  .xl_space-x-16 > :not([hidden]) ~ :not([hidden]){\n    --tw-space-x-reverse:0 !important;\n    margin-right:calc(4rem * var(--tw-space-x-reverse)) !important;\n    margin-left:calc(4rem * calc(1 - var(--tw-space-x-reverse))) !important;\n  }\n\n  .xl_space-y-0 > :not([hidden]) ~ :not([hidden]){\n    --tw-space-y-reverse:0 !important;\n    margin-top:calc(0px * calc(1 - var(--tw-space-y-reverse))) !important;\n    margin-bottom:calc(0px * var(--tw-space-y-reverse)) !important;\n  }\n\n  .xl_text-left{\n    text-align:left !important;\n  }\n}',
        "",
      ]),
        (x.locals = {}),
        (n.exports = x);
    },
    function (n, t, e) {
      n.exports = e.p + "fonts/AvenirRoman.a577b1b.woff";
    },
    function (n, t, e) {
      n.exports = e.p + "fonts/AvenirHeavy.699addf.woff";
    },
    function (n, t, e) {
      n.exports = e.p + "fonts/radda_djuren_-_djurens_ratt-webfont.9782863.eot";
    },
    function (n, t, e) {
      n.exports =
        e.p + "fonts/radda_djuren_-_djurens_ratt-webfont.cafb4af.woff2";
    },
    function (n, t, e) {
      n.exports =
        e.p + "fonts/radda_djuren_-_djurens_ratt-webfont.d9b951f.woff";
    },
    function (n, t, e) {
      n.exports = e.p + "fonts/radda_djuren_-_djurens_ratt-webfont.33f87fb.ttf";
    },
    ,
    ,
    function (n, t, e) {
      "use strict";
      e(40);
    },
    function (n, t, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        "/*purgecss start ignore*/\n.navigation-item[data-v-98a158ea]{\n  min-width:130px;\n  min-height:4.5rem\n}\n.icon.piglet[data-v-98a158ea]{\n  position:relative;\n  top:4px\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    function (n, t, e) {
      "use strict";
      e(44);
    },
    function (n, t, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        "/*purgecss start ignore*/\n.membership[data-v-7b23da0a]{\n  display:flex;\n  flex-direction:column;\n  overflow:hidden;\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n@media (min-width: 768px){\n.membership[data-v-7b23da0a]{\n    height:300px;\n\n    flex-direction:row;\n\n    justify-content:space-evenly\n}\n}\n.membership__slider[data-v-7b23da0a]{\n    flex:1 1 0%;\n    overflow:hidden;\n    background-color:#fda87f;\n    -webkit-clip-path:ellipse(150% 100% at 50% 0);\n            clip-path:ellipse(150% 100% at 50% 0)\n}\n.membership__slider[data-v-7b23da0a] .flickity-page-dots{\n    bottom:30px\n}\n@media (min-width: 768px){\n.membership__slider[data-v-7b23da0a]{\n      -webkit-clip-path:none;\n              clip-path:none\n}\n.membership__slider[data-v-7b23da0a] .flickity-page-dots{\n        bottom:10px\n}\n}\n.membership__image[data-v-7b23da0a]{\n    height:100%;\n    min-height:18rem;\n    width:100%;\n}\n@media (min-width: 768px){\n.membership__image[data-v-7b23da0a]{\n      min-height:auto\n}\n}\n.membership__image[data-v-7b23da0a]{\n    padding:2em}\n.membership__image img[data-v-7b23da0a]{\n      display:flex;\n      height:100%;\n      width:100%;\n      align-items:center;\n      -o-object-fit:contain;\n         object-fit:contain;\n      max-height:100%\n}\n.membership__image--full[data-v-7b23da0a]{\n      padding:0px;\n}\n.membership__image--full img[data-v-7b23da0a]{\n        -o-object-fit:cover;\n           object-fit:cover\n}\n.membership__info[data-v-7b23da0a]{\n    flex:1 1 0%;\n    position:relative;\n    justify-content:flex-end;\n    text-align:center;\n}\n@media (min-width: 768px){\n.membership__info[data-v-7b23da0a]:before{\n        position:absolute;\n        left:-15px;\n        top:-10px;\n        content:\"\";\n        width:40px;\n        height:110%;\n        background-color:#ffffff;\n        z-index:1;\n        border-radius:75% 0 0 75%\n}\n}\n.membership__info-text[data-v-7b23da0a]{\n  padding:3em 0;\n}\n.membership__info-text h2[data-v-7b23da0a]{\n    font-size:2.5rem;\n    color:#5ec19f;\n    font-weight:400\n}\n@media (max-width:1000px){\n.membership__info-text h2[data-v-7b23da0a]{\n      font-size:2rem\n}\n}\n@media (max-width:768px){\n.membership__info-text h2[data-v-7b23da0a]{\n      font-size:2.5rem\n}\n}\n.membership__info-text h2[data-v-7b23da0a],.membership__info-text p[data-v-7b23da0a]{\n    font-family:'Avenir LT Std', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial\n}\n.membership__info-text p[data-v-7b23da0a]{\n    color:#00ce8f;\n    color:#5ec19f;\n    padding-bottom:1rem;\n    margin:0 3em\n}\n.membership__action[data-v-7b23da0a]{\n  background-color:#fda87f;\n  margin-top:.5em;\n  padding:.3em 1.5em .2em;\n  font-family:\"Avenir LT Std\",sans-serif;\n  font-size:1.1rem;\n  color:#ffffff\n}\n.membership__action[data-v-7b23da0a]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(252, 142, 89, var(--tw-bg-opacity));\n  transform:scale(1.05);\n  cursor:pointer\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    function (n, t, e) {
      "use strict";
      e(45);
    },
    function (n, t, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        "/*purgecss start ignore*/\n.titel[data-v-f27cf93a],h3[data-v-f27cf93a]{\n  font-family:'RaddaDjuren', sans-serif\n}\np[data-v-f27cf93a]{\n  font-size:1rem\n}\nsection[data-v-f27cf93a]{\n  display:flex;\n  flex-direction:column;\n}\n@media (min-width: 768px){\nsection[data-v-f27cf93a]{\n    flex-direction:row;\n\n    justify-content:space-between\n}\n}\n@media (min-width: 768px){\nmeta-block[data-v-f27cf93a]{\n    max-width:24rem\n}\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    function (n, t, e) {
      "use strict";
      e(47);
    },
    function (n, t, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        "/*purgecss start ignore*/\n.meta-box[data-v-32f4591a]{\n  margin-bottom:2.5rem;\n}\n@media (min-width: 768px){\n.meta-box[data-v-32f4591a]{\n    max-width:400px\n}\n}\n.meta-box .content[data-v-32f4591a] a{\n  text-decoration:underline\n}\n.meta-box .content[data-v-32f4591a] p{\n  margin-bottom:1.5rem\n}\n.adult[data-v-32f4591a]{\n  color:#9b51e0\n}\n.adult[data-v-32f4591a] a{\n  color:#9b51e0\n}\n.rdk[data-v-32f4591a]{\n  color:#5ec19f\n}\n.rdk[data-v-32f4591a] a{\n  color:#5ec19f\n}\n.djurensratt[data-v-32f4591a]{\n  color:#00b4d2\n}\n.djurensratt[data-v-32f4591a] a{\n  color:#00b4d2\n}\nh3[data-v-32f4591a]{\n  font-family:'RaddaDjuren', sans-serif\n}\n.logo[data-v-32f4591a]{\n  display:flex;\n  width:150px;\n  text-align:center;\n  margin:0 auto 1em;\n  justify-content:center\n}\n.text-bold[data-v-32f4591a],strong[data-v-32f4591a]{\n  font-weight:700\n}\n.options[data-v-32f4591a]{\n  margin-left:-0.5rem;\n  margin-right:-0.5rem;\n  display:flex;\n  flex-direction:column;\n}\n@media (min-width: 768px){\n.options[data-v-32f4591a]{\n    flex-direction:row;\n\n    justify-content:space-between\n}\n}\n.about-rdk-options__option[data-v-32f4591a]{\n  margin-left:0.5rem;\n  margin-right:0.5rem;\n  flex:1 1 0%;\n  border-radius:0.5rem;\n  padding:2em;\n  background-color:#fff;\n}\n@media (min-width: 768px){\n.about-rdk-options__option[data-v-32f4591a]{\n    max-width:400px\n}\n}\n.about-rdk-options__option h3[data-v-32f4591a]{\n    margin-bottom:1em;\n    text-align:center\n}\n.about-rdk__option1 p[data-v-32f4591a]{\n  color:#5ec19f\n}\n.about-rdk__option2 h3[data-v-32f4591a]{\n    color:#7a54c3\n}\n.about-rdk__option2 a[data-v-32f4591a],.about-rdk__option2 p[data-v-32f4591a]{\n    color:#9b51e0\n}\n.about-rdk__option2 a[data-v-32f4591a]{\n    text-decoration:underline\n}\n.about-rdk__option3 a[data-v-32f4591a],.about-rdk__option3 h3[data-v-32f4591a],.about-rdk__option3 p[data-v-32f4591a]{\n    color:#00b4d2\n}\n.about-rdk__option3 a[data-v-32f4591a]{\n    text-decoration:underline\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    function (n, t, e) {
      var map = {
        "./90-konto.svg": 49,
        "./android close.svg": 123,
        "./become-member-piglet.svg": 39,
        "./circle-arrow.svg": 81,
        "./close-icon-white.svg": 124,
        "./close-icon.svg": 125,
        "./conversation.png": 126,
        "./cookie.svg": 50,
        "./double-arrow.svg": 127,
        "./facebook-logo.svg": 128,
        "./facebook.svg": 129,
        "./fav-ikon.png": 130,
        "./gammal-membership-1.2.png": 131,
        "./gammal-membership-1.png": 132,
        "./help-animals-hands.svg": 20,
        "./icon-print.svg": 133,
        "./instagram-logo.svg": 134,
        "./learn-more-chick.svg": 19,
        "./logo-djurens-ratt.svg": 46,
        "./logo-rdk-new.png": 48,
        "./logo.png": 135,
        "./membership-1.png": 136,
        "./membership-2.png": 42,
        "./membership-3.jpg": 43,
        "./membership-premier-2021.png": 41,
        "./membership-xmas-transparent.png": 137,
        "./raddadjuren_kanin_kyckling.jpg": 138,
        "./search-icon-white.svg": 139,
        "./search-icon.svg": 140,
        "./share.svg": 141,
        "./tik-tok-logo.svg": 142,
        "./tik-tok.svg": 84,
        "./tryggt-givande.svg": 51,
        "./twitter.svg": 143,
        "./vego-recipe-cake.svg": 21,
        "./whale.svg": 18,
        "./youtube.svg": 144,
      };
      function r(n) {
        var t = o(n);
        return e(t);
      }
      function o(n) {
        if (!e.o(map, n)) {
          var t = new Error("Cannot find module '" + n + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return map[n];
      }
      (r.keys = function () {
        return Object.keys(map);
      }),
        (r.resolve = o),
        (n.exports = r),
        (r.id = 122);
    },
    function (n, t) {
      n.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4yLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIGlkPSJJY29uXzVfIj4NCgk8Zz4NCgkJPHBvbHlnb24gcG9pbnRzPSI0MDUsMTM2Ljc5OCAzNzUuMjAyLDEwNyAyNTYsMjI2LjIwMiAxMzYuNzk4LDEwNyAxMDcsMTM2Ljc5OCAyMjYuMjAyLDI1NiAxMDcsMzc1LjIwMiAxMzYuNzk4LDQwNSAyNTYsMjg1Ljc5OCANCgkJCTM3NS4yMDIsNDA1IDQwNSwzNzUuMjAyIDI4NS43OTgsMjU2IAkJIi8+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=";
    },
    function (n, t) {
      n.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMy45NCAyMy45NCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5jbG9zZS1pY29uPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iLTQuNTIiIHk9IjEwLjk3IiB3aWR0aD0iMzIuOTkiIGhlaWdodD0iMiIgcng9IjAuOTciIHJ5PSIwLjk3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMS45NyAtNC45Nikgcm90YXRlKDQ1KSIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iLTQuNTIiIHk9IjEwLjk3IiB3aWR0aD0iMzIuOTkiIGhlaWdodD0iMiIgcng9IjAuOTciIHJ5PSIwLjk3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOC45IDExLjk3KSByb3RhdGUoMTM1KSIvPjwvZz48L2c+PC9zdmc+Cg==";
    },
    function (n, t) {
      n.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMy45NCAyMy45NCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMyMzFmMjA7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5jbG9zZS1pY29uPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iLTQuNTIiIHk9IjEwLjk3IiB3aWR0aD0iMzIuOTkiIGhlaWdodD0iMiIgcng9IjAuOTciIHJ5PSIwLjk3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMS45NyAtNC45Nikgcm90YXRlKDQ1KSIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iLTQuNTIiIHk9IjEwLjk3IiB3aWR0aD0iMzIuOTkiIGhlaWdodD0iMiIgcng9IjAuOTciIHJ5PSIwLjk3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOC45IDExLjk3KSByb3RhdGUoMTM1KSIvPjwvZz48L2c+PC9zdmc+Cg==";
    },
    function (n, t, e) {
      n.exports = e.p + "img/conversation.f226020.png";
    },
    function (n, t, e) {
      n.exports = e.p + "img/double-arrow.5534334.svg";
    },
    function (n, t, e) {
      n.exports = e.p + "img/facebook-logo.3e072ab.svg";
    },
    function (n, t, e) {
      n.exports = e.p + "img/facebook.778c82d.svg";
    },
    function (n, t, e) {
      n.exports = e.p + "img/fav-ikon.23f3018.png";
    },
    function (n, t, e) {
      n.exports = e.p + "img/gammal-membership-1.2.b454eed.png";
    },
    function (n, t, e) {
      n.exports = e.p + "img/gammal-membership-1.d36f91d.png";
    },
    function (n, t) {
      n.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tR2VuZXJhdGVkIGJ5IElKU1ZHIChodHRwczovL2dpdGh1Yi5jb20vaWNvbmphci9JSlNWRyktLT4KICAgIDxwYXRoIGQ9Ik0xLjUwMSw2aDE3YzAuNTcsMCAwLjQ3NywtMC42MDggMC4xOTMsLTAuNzA3Yy0wLjI4NSwtMC4wOTkgLTMuNDQzLC0xLjI5MyAtMy45OTQsLTEuMjkzaC0wLjd2LTNoLTh2M2gtMC42OTljLTAuNTUsMCAtMy43MDksMS4xOTQgLTMuOTkzLDEuMjkzYy0wLjI4NCwwLjA5OSAtMC4zNzcsMC43MDcgMC4xOTMsMC43MDdabTE3LjQ5OSwxaC0xOGMtMC41NSwwIC0xLDAuNDUgLTEsMXY1YzAsMC41NTEgMC40NSwxIDEsMWgyLjI4M2wtMC44ODIsNWgxNS4xOTlsLTAuODgzLC01aDIuMjgzYzAuNTUxLDAgMSwtMC40NDkgMSwtMXYtNWMwLC0wLjU1IC0wLjQ0OSwtMSAtMSwtMVptLTE0LjM5NywxMGwxLjE5OCwtNy4wMDNoOC4zOTlsMS4xOTksNy4wMDNoLTEwLjc5NloiIGZpbGw9IiMwMDAiPjwvcGF0aD4KPC9zdmc+";
    },
    function (n, t, e) {
      n.exports = e.p + "img/instagram-logo.64f9529.svg";
    },
    function (n, t, e) {
      n.exports = e.p + "img/logo.d6ab6c4.png";
    },
    function (n, t, e) {
      n.exports = e.p + "img/membership-1.218d70a.png";
    },
    function (n, t, e) {
      n.exports = e.p + "img/membership-xmas-transparent.dd16771.png";
    },
    function (n, t, e) {
      n.exports = e.p + "img/raddadjuren_kanin_kyckling.9208e53.jpg";
    },
    function (n, t) {
      n.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5Bc3NldCAxPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTIzLjcxLDIyLjI5bC02LjgzLTYuODJhOS41Miw5LjUyLDAsMSwwLTEuNDEsMS40MWw2LjgyLDYuODNhMSwxLDAsMCwwLDEuNDIsMEExLDEsMCwwLDAsMjMuNzEsMjIuMjlaTTkuNSwxN0E3LjUsNy41LDAsMSwxLDE3LDkuNSw3LjUsNy41LDAsMCwxLDkuNSwxN1oiLz48L2c+PC9nPjwvc3ZnPgo=";
    },
    function (n, t) {
      n.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMyMzFmMjA7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5Bc3NldCAxPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTIzLjcxLDIyLjI5bC02LjgzLTYuODJhOS41Miw5LjUyLDAsMSwwLTEuNDEsMS40MWw2LjgyLDYuODNhMSwxLDAsMCwwLDEuNDIsMEExLDEsMCwwLDAsMjMuNzEsMjIuMjlaTTkuNSwxN0E3LjUsNy41LDAsMSwxLDE3LDkuNSw3LjUsNy41LDAsMCwxLDkuNSwxN1oiLz48L2c+PC9nPjwvc3ZnPg==";
    },
    function (n, t) {
      n.exports =
        "data:image/svg+xml;base64,PHN2ZyBpZD0iZ2x5cGhpY29ucy1iYXNpYyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzIgMzIiPgogIDxwYXRoIGlkPSJzaGFyZSIgZD0iTTI4LDI0YTQsNCwwLDAsMS04LDBjMC0uMTA1MjkuMDIzLS4yMDQuMDMwOTQtLjMwNzI1bC05LjQwMS00LjcwMDU2YTQuMDAwMDgsNC4wMDAwOCwwLDEsMSwwLTUuOTg0MzhsOS40MDEtNC43MDA1NkMyMC4wMjMsOC4yMDQsMjAsOC4xMDUyMiwyMCw4YTQuMDQwMzQsNC4wNDAzNCwwLDEsMSwxLjM3MDA2LDIuOTkyMTlsLTkuNDAxLDQuNzAwNTZjLjAwOC4xMDMyMS4wMzA5NC4yMDIuMDMwOTQuMzA3MjVzLS4wMjI5NS4yMDQtLjAzMDk0LjMwNzI1bDkuNDAxLDQuNzAwNTZBMy45ODIxNCwzLjk4MjE0LDAsMCwxLDI4LDI0WiIvPgo8L3N2Zz4K";
    },
    function (n, t, e) {
      n.exports = e.p + "img/tik-tok-logo.05c6fc4.svg";
    },
    function (n, t, e) {
      n.exports = e.p + "img/twitter.007a111.svg";
    },
    function (n, t) {
      n.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMi4xIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIyIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTQ5LjY1NSAxMjQuMDgzYy02LjI4MS0yMy42NS0yNC43ODctNDIuMjc2LTQ4LjI4NC00OC41OTdDNDU4Ljc4MSA2NCAyODggNjQgMjg4IDY0UzExNy4yMiA2NCA3NC42MjkgNzUuNDg2Yy0yMy40OTcgNi4zMjItNDIuMDAzIDI0Ljk0Ny00OC4yODQgNDguNTk3LTExLjQxMiA0Mi44NjctMTEuNDEyIDEzMi4zMDUtMTEuNDEyIDEzMi4zMDVzMCA4OS40MzggMTEuNDEyIDEzMi4zMDVjNi4yODEgMjMuNjUgMjQuNzg3IDQxLjUgNDguMjg0IDQ3LjgyMUMxMTcuMjIgNDQ4IDI4OCA0NDggMjg4IDQ0OHMxNzAuNzggMCAyMTMuMzcxLTExLjQ4NmMyMy40OTctNi4zMjEgNDIuMDAzLTI0LjE3MSA0OC4yODQtNDcuODIxIDExLjQxMi00Mi44NjcgMTEuNDEyLTEzMi4zMDUgMTEuNDEyLTEzMi4zMDVzMC04OS40MzgtMTEuNDEyLTEzMi4zMDV6bS0zMTcuNTEgMjEzLjUwOFYxNzUuMTg1bDE0Mi43MzkgODEuMjA1LTE0Mi43MzkgODEuMjAxeiIvPjwvc3ZnPg==";
    },
    function (n, t, e) {
      "use strict";
      e(52);
    },
    function (n, t, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        '/*purgecss start ignore*/\n.site-footer .footer-image[data-v-c3ddd8d2]{\n    height:12rem\n}\n.site-footer .footer-image[data-v-c3ddd8d2] img{\n    height:12rem;\n    width:100%;\n    -o-object-fit:cover;\n       object-fit:cover\n}\n@media (min-width:1024px){\n.site-footer .footer-image[data-v-c3ddd8d2]{\n      height:32rem\n}\n.site-footer .footer-image[data-v-c3ddd8d2] img{\n      height:32rem\n}\n}\n.site-footer .first-block .container__info[data-v-c3ddd8d2]{\n        max-width:500px\n}\n.site-footer .first-block .btn[data-v-c3ddd8d2]:hover{\n      --tw-bg-opacity:1;\n      background-color:rgba(252, 142, 89, var(--tw-bg-opacity))\n}\n.site-footer .second-block .social__link[data-v-c3ddd8d2]{\n      transition:.5s\n}\n.site-footer .second-block .social__link[data-v-c3ddd8d2]:hover{\n      transform:scale(1.05)\n}\n.site-footer .third-block .adress[data-v-c3ddd8d2] p{\n      padding-bottom:1rem\n}\n.site-footer .third-block .adress[data-v-c3ddd8d2] a{\n      --tw-text-opacity:1;\n      color:rgba(255, 255, 255, var(--tw-text-opacity));\n      text-decoration:underline\n}\n@media (min-width:1024px){\n.site-footer .third-block .container__first[data-v-c3ddd8d2]{\n          max-width:33%\n}\n}\n.site-footer li[data-v-c3ddd8d2]{\n    position:relative;\n    display:inline-block;\n    border-radius:9999px;\n    padding-top:0.25rem;\n    padding-bottom:0.25rem;\n    padding-right:1rem;\n    padding-left:1.25rem;\n    text-align:left;\n    font-size:1rem;\n    line-height:1.5rem;\n    font-weight:700;\n    transition:.3s ease\n}\n.site-footer li[data-v-c3ddd8d2]:after,.site-footer li[data-v-c3ddd8d2]:before{\n    transition:.4s\n}\n.site-footer li[data-v-c3ddd8d2]:before{\n    position:absolute;\n    top:0.75rem;\n    left:0px;\n    height:0.5rem;\n    width:0.5rem;\n    border-radius:0.125rem;\n    border-right-width:2px;\n    border-bottom-width:2px;\n    border-style:solid;\n    --tw-border-opacity:1;\n    border-color:rgba(255, 255, 255, var(--tw-border-opacity));\n    content:"";\n    transform:rotate(-45deg)\n}\n.site-footer li[data-v-c3ddd8d2]:hover:before{\n    transform:rotate(-45deg) translateX(2px) translateY(2px)\n}\n.site-footer li[data-v-c3ddd8d2]:hover:after{\n    transform:scaleX(1)\n}\n\n/*purgecss end ignore*/',
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    function (n, t, e) {
      "use strict";
      e(53);
    },
    function (n, t, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        "/*purgecss start ignore*/\n.cookie-consent[data-v-5ada09f0]{\n  position:fixed;\n  z-index:5;\n  left:0;\n  right:0;\n  bottom:0;\n  width:100%;\n  background:#fff;\n  color:#373737;\n  border-top:1px solid #5ec19f;\n  align-items:flex-start;\n  padding:2rem 1.5rem;\n}\n@media (min-width: 768px){\n.cookie-consent[data-v-5ada09f0]{\n    padding-left:1.5rem;\n\n    padding-bottom:2rem;\n\n    padding-right:1.5rem;\n\n    padding-top:2rem;\n\n    align-items:center\n}\n}\n@media (min-width: 1200px){\n.cookie-consent[data-v-5ada09f0]{\n    flex-direction:row\n}\n}\n.cookie-consent-info[data-v-5ada09f0]{\n    padding:2em 0 1em;\n}\n@media (min-width: 768px){\n.cookie-consent-info[data-v-5ada09f0]{\n      padding-left:0;\n\n      padding-bottom:0;\n\n      padding-right:0;\n\n      padding-top:0\n}\n}\n.cookie-consent-buttons[data-v-5ada09f0]{\n    flex-direction:row;\n}\n@media (min-width: 1024px){\n.cookie-consent-buttons[data-v-5ada09f0]{\n      align-items:center\n}\n}\n.cookie-consent-compliance[data-v-5ada09f0]{\n    color:#fff;\n    background:#5ec19f\n}\n.cookie-consent-compliance[data-v-5ada09f0]:hover{\n    background:#5ec19f\n}\n.cookie-consent-compliance[data-v-5ada09f0],.cookie-consent-reject[data-v-5ada09f0]{\n    cursor:pointer;\n    font-weight:200;\n    flex-direction:row\n}\n.cookie-consent-reject[data-v-5ada09f0]{\n    color:#5ec19f;\n    background-color:transparent;\n    border:1px solid #5ec19f\n}\n.cookie-consent-reject[data-v-5ada09f0]:hover{\n    background:transparent\n}\nsection[data-v-5ada09f0]{\n  margin:0\n}\n.cookie-consent-transition-leave-active[data-v-5ada09f0]{\n    transition:transform .75s;\n    transition-timing-function:cubic-bezier(.75,0,0,1)\n}\n.cookie-consent-transition-leave-to[data-v-5ada09f0]{\n    transform:translateY(100%)\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
    },
    function (n, t, e) {
      "use strict";
      e(54);
    },
    function (n, t, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        n.i,
        "/*purgecss start ignore*/\n.mt-navigation[data-v-3ee34672]{\n  margin-top:calc(max(0px, calc(40vh - 267px)))\n}\n.min-h-navigation-item[data-v-3ee34672]{\n  min-height:calc(40px + 5vh + 3vw)\n}\n.btn[data-v-3ee34672]:hover,button[data-v-3ee34672]:hover{\n  background-color:#37A7A8!important;\n  opacity:.75!important\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (n.exports = r);
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
    function (n, t, e) {
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
        o = (e(100), e(2)),
        component = Object(o.a)(
          r,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t(
              "nuxt-link",
              { staticClass: "image-item", attrs: { to: n.link } },
              [
                t("client-only", [
                  t(
                    "div",
                    { staticClass: "image-item__image" },
                    [
                      n.image
                        ? t("app-image", {
                            attrs: {
                              publicId: n.pubId,
                              width: "200",
                              height: "200",
                            },
                          })
                        : n._e(),
                    ],
                    1
                  ),
                ]),
                t("h3", [n._v(n._s(n.title))]),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "1d55103a",
          null
        );
      t.default = component.exports;
      installComponents(component, { AppImage: e(79).default });
    },
    function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(0).a.extend({
          data: () => ({
            readLink: {
              url: "https://interact.djurensratt.se/ge-medlemskap/raddadjuren",
              linkText: "Läs mer",
            },
            options: { wrapAround: !1, pageDots: !0, prevNextButtons: !1 },
          }),
        }),
        o = (e(116), e(2)),
        component = Object(o.a)(
          r,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t(
              "section",
              { staticClass: "membership" },
              [
                t(
                  "slider",
                  {
                    staticClass: "membership__slider",
                    attrs: { options: n.options },
                  },
                  [
                    t("div", { staticClass: "membership__image" }, [
                      t("img", { attrs: { src: e(41) } }),
                    ]),
                    t("div", { staticClass: "membership__image" }, [
                      t("img", { attrs: { src: e(42) } }),
                    ]),
                    t(
                      "div",
                      {
                        staticClass:
                          "membership__image membership__image--full",
                      },
                      [t("img", { attrs: { src: e(43) } })]
                    ),
                  ]
                ),
                t("div", { staticClass: "membership__info" }, [
                  t(
                    "div",
                    { staticClass: "membership__info-text" },
                    [
                      t("h2", [n._v("Ge bort ett medlemskap")]),
                      t("p", [
                        n._v("5 tidningar per år + en välkomstpresent 🎁"),
                      ]),
                      t("p", [n._v("Vi får en starkare röst 🐮💪")]),
                      t(
                        "app-link",
                        {
                          staticClass: "membership__action btn",
                          attrs: { href: n.readLink.url },
                        },
                        [n._v(n._s(n.readLink.linkText))]
                      ),
                    ],
                    1
                  ),
                ]),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "7b23da0a",
          null
        );
      t.default = component.exports;
      installComponents(component, {
        Slider: e(83).default,
        AppLink: e(14).default,
      });
    },
    function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(0).a.extend({ name: "About" }),
        o = (e(118), e(2)),
        component = Object(o.a)(
          r,
          function () {
            var n = this._self._c;
            this._self._setupProxy;
            return n("div", [
              n(
                "section",
                [
                  n("meta-block", {
                    attrs: { slug: "radda-djuren-klubben", variant: "rdk" },
                  }),
                  n("meta-block", {
                    attrs: {
                      slug: "footer-djurens-ratt",
                      variant: "djurensratt",
                    },
                  }),
                  n("meta-block", {
                    attrs: { slug: "foralder-eller-pedagog", variant: "adult" },
                  }),
                ],
                1
              ),
            ]);
          },
          [],
          !1,
          null,
          "f27cf93a",
          null
        );
      t.default = component.exports;
      installComponents(component, { MetaBlock: e(174).default });
    },
    function (n, t, e) {
      "use strict";
      e.r(t);
      function r(n, t, e, r, o, l, d) {
        try {
          var m = n[l](d),
            c = m.value;
        } catch (n) {
          return void e(n);
        }
        m.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      var o = e(0).a.extend({
          name: "About",
          props: {
            slug: { default: "", type: String },
            variant: { default: "", type: String },
          },
          data: () => ({ block: null }),
          fetch() {
            var n,
              t = this;
            return ((n = function* () {
              t.$content &&
                t.slug &&
                (t.block = yield t.$content("block/".concat(t.slug)).fetch());
            }),
            function () {
              var t = this,
                e = arguments;
              return new Promise(function (o, l) {
                var d = n.apply(t, e);
                function m(n) {
                  r(d, o, l, m, c, "next", n);
                }
                function c(n) {
                  r(d, o, l, m, c, "throw", n);
                }
                m(void 0);
              });
            })();
          },
        }),
        l = o,
        d = (e(120), e(2)),
        component = Object(d.a)(
          l,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t(
              "div",
              {
                staticClass:
                  "meta-box flex-1 bg-white rounded-lg p-10 flex flex-col",
                class: n.variant,
              },
              [
                "djurensratt" === n.variant
                  ? t("a", { attrs: { href: "https://www.djurensratt.se" } }, [
                      t("img", { staticClass: "logo", attrs: { src: e(46) } }),
                    ])
                  : n._e(),
                n.block && n.block.title
                  ? t("h3", { staticClass: "pb-10 text-center" }, [
                      n._v(n._s(n.block.title)),
                    ])
                  : n._e(),
                t("nuxt-content", {
                  staticClass: "mb-4 content text-base",
                  attrs: { document: n.block },
                }),
                n.block && n.block.link
                  ? t(
                      "a",
                      {
                        staticClass:
                          "btn outlined mt-auto mb-0 self-center no-underline",
                        class: {
                          purple: "adult" === n.variant,
                          blue: "djurensratt" === n.variant,
                          green: "rdk" === n.variant,
                        },
                        attrs: { href: n.block.link.url },
                      },
                      [n._v(n._s(n.block.link.linkText))]
                    )
                  : n._e(),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "32f4591a",
          null
        );
      t.default = component.exports;
    },
    function (n, t, e) {
      "use strict";
      e.r(t);
      var r = [
          function () {
            var n = this._self._c;
            this._self._setupProxy;
            return n(
              "div",
              { staticClass: "flex justify-center h-12 w-full gap-10 mb-10" },
              [
                n("img", { staticClass: "icon", attrs: { src: e(49) } }),
                n("img", { staticClass: "icon", attrs: { src: e(51) } }),
              ]
            );
          },
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t(
              "div",
              { staticClass: "text-center my-10 md_mb-20 md_mt-60" },
              [
                t("p", [
                  n._v(
                    "Allt innehåll © 2023 Rädda Djuren-klubben om inte annat anges."
                  ),
                ]),
              ]
            );
          },
        ],
        o = e(0),
        l = e(72);
      function d(n, t, e, r, o, l, d) {
        try {
          var m = n[l](d),
            c = m.value;
        } catch (n) {
          return void e(n);
        }
        m.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      var m = o.a.extend({
          name: "AppFooter",
          components: { VueIfBot: l.a },
          data: () => ({
            addressBlock: null,
            infoBlock: null,
            imgBlock: null,
            visitlinks: [
              { label: "Välj Vego", url: "https://www.valjvego.se" },
              { label: "Djurens Rätt", url: "https://www.djurensratt.se" },
            ],
            quicklinks: [
              {
                label: "Gå med i klubben",
                url: "https://interact.djurensratt.se/ge-medlemskap/julklapp",
              },
              { label: "För föräldrar", url: "/vuxen-eller-pedagog" },
              { label: "Tidningen Klubbnytt", url: "/klubbnytt/" },
              {
                label: "Vanliga frågor",
                url: "/vuxen-eller-pedagog/vanliga-fragor",
              },
            ],
            socialmedia: [
              {
                altText: "instagram",
                url: "https://www.instagram.com/raddadjurenklubben/",
                img: "instagram-logo.svg",
              },
              {
                altText: "facebook",
                url: "https://www.instagram.com/raddadjurenklubben/",
                img: "facebook.svg",
              },
              {
                altText: "tiktok",
                url: "https://www.tiktok.com/@raddadjurenklubben",
                img: "tik-tok-logo.svg",
              },
            ],
          }),
          fetch() {
            var n,
              t = this;
            return ((n = function* () {
              t.$content &&
                ((t.addressBlock = yield t
                  .$content("block/footer-text")
                  .fetch()),
                (t.infoBlock = yield t.$content("block/footer-top").fetch()),
                (t.imgBlock = yield t.$content("block/footer-image").fetch()));
            }),
            function () {
              var t = this,
                e = arguments;
              return new Promise(function (r, o) {
                var l = n.apply(t, e);
                function m(n) {
                  d(l, r, o, m, c, "next", n);
                }
                function c(n) {
                  d(l, r, o, m, c, "throw", n);
                }
                m(void 0);
              });
            })();
          },
        }),
        c = m,
        f = (e(145), e(2)),
        component = Object(f.a)(
          c,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t(
              "div",
              {
                staticClass:
                  "site-footer bg-green-dark text-white w-screen pb-12 px-10 text-base",
              },
              [
                t("nuxt-content", {
                  staticClass: "footer-image icon overflow-hidden -mx-10",
                  attrs: { document: n.imgBlock },
                }),
                t(
                  "vue-if-bot",
                  [t("client-only", [t("cookie-consent-c")], 1)],
                  1
                ),
                t(
                  "div",
                  {
                    staticClass:
                      "first-block flex flex-col justify-center mt-10 md_flex-row md_justify-around md_mx-0 md_my-20",
                  },
                  [
                    t(
                      "div",
                      { staticClass: "container__info" },
                      [
                        t("img", {
                          staticClass: "icon h-14 md_h-16 mb-10",
                          attrs: { src: e(48) },
                        }),
                        t("nuxt-content", {
                          staticClass: "max-w-lg",
                          attrs: { document: n.infoBlock },
                        }),
                        t("ul", { staticClass: "flex flex-col my-10" }, [
                          t(
                            "li",
                            [
                              t(
                                "app-link",
                                {
                                  staticClass: "link p-0",
                                  attrs: {
                                    href: "https://www.raddadjuren.se/vuxen-eller-pedagog/om-radda-djuren-klubben",
                                  },
                                },
                                [n._v("Om Rädda Djuren-klubben")]
                              ),
                            ],
                            1
                          ),
                        ]),
                      ],
                      1
                    ),
                    t("div", { staticClass: "text-center md_text-left" }, [
                      n._m(0),
                      t(
                        "div",
                        { staticClass: "w-full" },
                        [
                          t("h3", { staticClass: "font-bold mb-9" }, [
                            n._v("Stöd vårt arbete för djuren"),
                          ]),
                          t(
                            "app-link",
                            {
                              staticClass: "link",
                              attrs: {
                                href: "https://interact.djurensratt.se/ge-medlemskap/raddadjuren",
                              },
                            },
                            [
                              t(
                                "button",
                                {
                                  staticClass:
                                    "btn rounded bg-peach py-5 px-8 mb-10",
                                },
                                [n._v("Gå med i klubben")]
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ]),
                  ]
                ),
                t(
                  "div",
                  {
                    staticClass:
                      "second-block w-full border-white border-solid border-r-0 border-l-0 border-t border-b mb-10 md_border-none md_absolute md_bottom-20 md_p-0 md_mb-20",
                  },
                  [
                    t(
                      "div",
                      {
                        staticClass:
                          "social flex justify-around py-10 md_justify-center md_my-10 md_-ml-10",
                      },
                      n._l(n.socialmedia, function (n, i) {
                        return t(
                          "a",
                          {
                            key: i,
                            staticClass: "social__link h-10 m-4 w-10",
                            attrs: { href: n.url },
                          },
                          [
                            t("img", {
                              staticClass: "icon",
                              attrs: { src: e(122)("./".concat(n.img)) },
                            }),
                          ]
                        );
                      }),
                      0
                    ),
                  ]
                ),
                t(
                  "div",
                  {
                    staticClass:
                      "third-block border-white border-solid border-b pb-10 md_border-white md_border-solid md_border-t md_border-b md_flex md_justify-evenly md_py-20",
                  },
                  [
                    t(
                      "div",
                      { staticClass: "container__first mb-10" },
                      [
                        t("h3", { staticClass: "font-bold mb-4" }, [
                          n._v("Kontakta oss"),
                        ]),
                        t("nuxt-content", {
                          staticClass: "adress",
                          attrs: { document: n.addressBlock },
                        }),
                      ],
                      1
                    ),
                    t("div", { staticClass: "container__middle mb-10" }, [
                      t("h3", { staticClass: "font-bold mb-4" }, [
                        n._v("Snabblänkar"),
                      ]),
                      t(
                        "ul",
                        { staticClass: "flex flex-col" },
                        n._l(n.quicklinks, function (link, i) {
                          return t(
                            "li",
                            { key: i },
                            [
                              t(
                                "app-link",
                                {
                                  staticClass: "link",
                                  attrs: { href: link.url },
                                },
                                [n._v(n._s(link.label))]
                              ),
                            ],
                            1
                          );
                        }),
                        0
                      ),
                    ]),
                    t("div", { staticClass: "container__last" }, [
                      t("h3", { staticClass: "font-bold mb-4" }, [
                        n._v("Besök gärna"),
                      ]),
                      t(
                        "ul",
                        { staticClass: "flex flex-col" },
                        n._l(n.visitlinks, function (link, i) {
                          return t(
                            "li",
                            { key: i },
                            [
                              t(
                                "app-link",
                                {
                                  staticClass: "link",
                                  attrs: { href: link.url },
                                },
                                [n._v(n._s(link.label))]
                              ),
                            ],
                            1
                          );
                        }),
                        0
                      ),
                    ]),
                  ]
                ),
                n._m(1),
              ],
              1
            );
          },
          r,
          !1,
          null,
          "c3ddd8d2",
          null
        );
      t.default = component.exports;
      installComponents(component, {
        CookieConsentC: e(176).default,
        AppLink: e(14).default,
      });
    },
    function (n, t, e) {
      "use strict";
      e.r(t);
      function r(n) {
        var t,
          e = "; ".concat(document.cookie).split("; ".concat(n, "="));
        return 2 !== e.length || null === (t = e.pop()) || void 0 === t
          ? void 0
          : t.split(";").shift();
      }
      function o(n, t, e, r, path) {
        var o = new Date();
        o.setDate(o.getDate() + (e || 365));
        var l = [
          "".concat(n, "=").concat(t),
          "expires=".concat(o.toUTCString()),
          "path=".concat(path || "/"),
        ];
        r && l.push("domain=".concat(r)), (document.cookie = l.join(";"));
      }
      var l = e(0).a.extend({
          name: "CookieConsentC",
          props: {
            transition: { type: String, default: "cookie-consent-transition" },
            message: {
              type: String,
              default:
                "Genom att acceptera cookies hjälper du Rädda djuren-klubben att bli ännu bättre i sitt arbete att hjälpa djuren.",
            },
            info: {
              type: String,
              default:
                "Vi använder cookies på denna webbplats för att förbättra din användarupplevelse.",
            },
            linkLabel: { type: String, default: "Läs mer här." },
            consentLabel: { type: String, default: "Acceptera" },
            rejectLabel: { type: String, default: "Neka" },
            href: {
              type: String,
              default: "https://www.raddadjuren.se/om-cookies",
            },
            target: { type: String, default: "_blank" },
            rel: { type: String, default: "noopener" },
            cookieName: { type: String, default: "analytics_storage" },
            rejectCookieName: { type: String, default: "reject_cookie" },
            cookiePath: { type: String, default: "/" },
            cookieDomain: { type: String, default: "" },
            cookieExpiryDays: { type: Number, default: 365 },
          },
          data: () => ({ show: void 0 }),
          beforeMount() {
            this.show = !r(this.cookieName) && !r(this.rejectCookieName);
          },
          methods: {
            accept() {
              (this.show = !1),
                o(
                  this.cookieName,
                  1,
                  this.cookieExpiryDays,
                  this.cookieDomain,
                  this.cookiePath
                );
            },
            reject() {
              (this.show = !1),
                o(
                  this.rejectCookieName,
                  2,
                  this.cookieExpiryDays,
                  this.cookieDomain,
                  this.cookiePath
                );
            },
          },
        }),
        d = (e(147), e(2)),
        component = Object(d.a)(
          l,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t("transition", { attrs: { name: n.transition } }, [
              n.show
                ? t(
                    "div",
                    {
                      staticClass:
                        "cookie-consent flex-col flex justify-evenly flex-wrap z-5",
                      attrs: { role: "dialog" },
                    },
                    [
                      t("img", {
                        staticClass: "w-10 h-10 self-center icon",
                        attrs: { src: e(50) },
                      }),
                      t(
                        "section",
                        { staticClass: "flex flex-col py-6" },
                        [
                          n._t("message", function () {
                            return [
                              t(
                                "span",
                                {
                                  staticClass:
                                    "text-sm font-medium mb-2 cookie-consent-message",
                                },
                                [n._v(n._s(n.message))]
                              ),
                              n._t("info"),
                              t(
                                "span",
                                { staticClass: "cookie-consent-info text-xs" },
                                [
                                  n._v(n._s(n.info)),
                                  n._t("link", function () {
                                    return [
                                      t(
                                        "a",
                                        n._b(
                                          {
                                            staticClass:
                                              "cookie-consent-link text-xs text-green-dark",
                                            attrs: { role: "button" },
                                          },
                                          "a",
                                          {
                                            href: n.href,
                                            target: n.target,
                                            rel: n.rel,
                                          },
                                          !1
                                        ),
                                        [n._v("  " + n._s(n.linkLabel))]
                                      ),
                                    ];
                                  }),
                                ],
                                2
                              ),
                            ];
                          }),
                        ],
                        2
                      ),
                      t(
                        "section",
                        { staticClass: "cookie-consent-buttons flex flex-row" },
                        [
                          t(
                            "section",
                            { on: { click: n.reject } },
                            [
                              n._t("button", function () {
                                return [
                                  t(
                                    "button",
                                    {
                                      staticClass:
                                        "cookie-consent-reject flex-nowrap mr-3",
                                      attrs: { type: "button" },
                                    },
                                    [n._v(n._s(n.rejectLabel))]
                                  ),
                                ];
                              }),
                            ],
                            2
                          ),
                          t(
                            "section",
                            { on: { click: n.accept } },
                            [
                              n._t("button", function () {
                                return [
                                  t(
                                    "button",
                                    {
                                      staticClass:
                                        "cookie-consent-compliance flex-nowrap",
                                      attrs: { type: "button" },
                                    },
                                    [n._v(n._s(n.consentLabel))]
                                  ),
                                ];
                              }),
                            ],
                            2
                          ),
                        ]
                      ),
                    ]
                  )
                : n._e(),
            ]);
          },
          [],
          !1,
          null,
          "5ada09f0",
          null
        );
      t.default = component.exports;
    },
    function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(0).a.extend({
          name: "mobile-menu",
          data: () => ({ isOpen: !1 }),
          computed: {
            label() {
              return this.isOpen ? "Stäng meny" : "Öppna meny";
            },
          },
          watch: {
            isOpen(n) {
              this.hideDocumentScroll(n);
            },
            $route() {
              this.isOpen = !1;
            },
          },
          methods: {
            hideDocumentScroll(n) {
              var t = document.scrollingElement || document.documentElement;
              null == t || t.classList.toggle("overflow-hidden", n);
            },
          },
        }),
        o = (e(149), e(2)),
        component = Object(o.a)(
          r,
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t(
              "div",
              { staticClass: "fixed inset-0 pointer-events-none" },
              [
                t(
                  "button",
                  {
                    staticClass:
                      "mb-8 mr-4 w-16 h-16 absolute bottom-0 right-0 bg-blue-turquoise-dark bg-opacity-75 rounded-full text-white flex items-center justify-center pointer-events-auto p-0 z-10",
                    attrs: { "aria-label": n.label },
                    on: {
                      click: function (t) {
                        n.isOpen = !n.isOpen;
                      },
                    },
                  },
                  [
                    n.isOpen
                      ? [
                          t(
                            "svg",
                            {
                              staticClass: "w-8 h-8",
                              attrs: {
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                              },
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
                      : [
                          t(
                            "svg",
                            {
                              staticClass: "w-8 h-8",
                              attrs: {
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                              },
                            },
                            [
                              t("path", {
                                attrs: {
                                  "fill-rule": "evenodd",
                                  d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                                  "clip-rule": "evenodd",
                                },
                              }),
                            ]
                          ),
                        ],
                  ],
                  2
                ),
                n.isOpen
                  ? t(
                      "aside",
                      {
                        staticClass:
                          "py-8 w-full h-full bg-blue-turquoise pointer-events-auto overflow-y-auto overscroll-none z-10",
                      },
                      [
                        t(
                          "div",
                          { staticClass: "container text-center" },
                          [
                            t(
                              "h1",
                              {
                                staticClass:
                                  "font-headline text-3xl lg_text-4xl text-white",
                              },
                              [n._v("Rädda Djuren-klubben")]
                            ),
                            t("search-input"),
                            t(
                              "nav",
                              {
                                staticClass: "text-white mt-navigation",
                                attrs: { role: "navigation" },
                              },
                              [
                                t(
                                  "ul",
                                  { staticClass: "-m-1 flex flex-wrap" },
                                  [
                                    t(
                                      "li",
                                      { staticClass: "p-1 w-1_2" },
                                      [
                                        t("navigation-item", {
                                          staticClass:
                                            "bg-green min-h-navigation-item",
                                          attrs: {
                                            label: "Djurfakta",
                                            href: "/",
                                            icon: e(18),
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    t(
                                      "li",
                                      { staticClass: "p-1 w-1_2" },
                                      [
                                        t("navigation-item", {
                                          staticClass:
                                            "bg-pink min-h-navigation-item",
                                          attrs: {
                                            label: "Lär dig mer",
                                            href: "/lar-dig-mer",
                                            icon: e(19),
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    t(
                                      "li",
                                      { staticClass: "p-1 w-1_2" },
                                      [
                                        t("navigation-item", {
                                          staticClass:
                                            "bg-peach min-h-navigation-item",
                                          attrs: {
                                            label: "Hjälp djuren",
                                            href: "/hjalp-djuren",
                                            icon: e(20),
                                            iconVariant: "hands",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    t(
                                      "li",
                                      { staticClass: "p-1 w-1_2" },
                                      [
                                        t("navigation-item", {
                                          staticClass:
                                            "bg-green-dark min-h-navigation-item",
                                          attrs: {
                                            label: "Vego",
                                            href: "/vego",
                                            icon: e(21),
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    t(
                                      "li",
                                      { staticClass: "p-1 w-full" },
                                      [
                                        t(
                                          "app-link",
                                          {
                                            staticClass:
                                              "p-4 block w-full bg-blue uppercase rounded-lg",
                                            attrs: {
                                              href: "https://interact.djurensratt.se/ge-medlemskap/raddadjuren",
                                            },
                                          },
                                          [n._v("GÖR SKILLNAD & BLI MEDLEM")]
                                        ),
                                      ],
                                      1
                                    ),
                                    t(
                                      "li",
                                      { staticClass: "p-1 w-1_2" },
                                      [
                                        t(
                                          "app-link",
                                          {
                                            staticClass:
                                              "p-2 block w-full bg-purple-dark text-xs font-bold rounded-lg",
                                            attrs: {
                                              href: "/vuxen-eller-pedagog",
                                            },
                                          },
                                          [n._v("Pedagog eller förälder?")]
                                        ),
                                      ],
                                      1
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ]
                    )
                  : n._e(),
              ]
            );
          },
          [],
          !1,
          null,
          "3ee34672",
          null
        );
      t.default = component.exports;
      installComponents(component, {
        SearchInput: e(32).default,
        NavigationItem: e(68).default,
        AppLink: e(14).default,
      });
    },
    function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(2),
        component = Object(r.a)(
          {},
          function () {
            var n = this,
              t = n._self._c;
            return t(
              "div",
              {
                staticClass:
                  "my-8 flex flex-col xl_flex-row space-y-8 xl_space-y-0 xl_space-x-16 xl_justify-between xl_container",
              },
              [
                t(
                  "nuxt-link",
                  {
                    staticClass: "text-white text-center xl_text-left",
                    attrs: { to: "/" },
                  },
                  [
                    t(
                      "h1",
                      { staticClass: "font-headline text-3xl lg_text-4xl" },
                      [n._v("Rädda Djuren-klubben")]
                    ),
                    t(
                      "p",
                      { staticClass: "hidden sm_block md_text-lg lg_text-xl" },
                      [n._v("Fakta om djuren och deras liv")]
                    ),
                  ]
                ),
                t("app-header-menu", { staticClass: "hidden sm_block" }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
      installComponents(component, { AppHeaderMenu: e(179).default });
    },
    function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(2),
        component = Object(r.a)(
          {},
          function () {
            var n = this._self._c;
            return n(
              "nav",
              {
                staticClass: "relative xl_static text-white",
                attrs: { role: "navigation" },
              },
              [
                n(
                  "ul",
                  {
                    staticClass:
                      "mx-auto w-full max-w-screen-md flex justify-center space-x-6",
                  },
                  [
                    n(
                      "li",
                      [
                        n("navigation-item", {
                          staticClass: "bg-green",
                          attrs: { label: "Djurfakta", href: "/", icon: e(18) },
                        }),
                      ],
                      1
                    ),
                    n(
                      "li",
                      [
                        n("navigation-item", {
                          staticClass: "bg-pink",
                          attrs: {
                            label: "Lär dig mer",
                            href: "/lar-dig-mer",
                            icon: e(19),
                          },
                        }),
                      ],
                      1
                    ),
                    n(
                      "li",
                      [
                        n("navigation-item", {
                          staticClass: "bg-peach",
                          attrs: {
                            label: "Hjälp djuren",
                            href: "/hjalp-djuren",
                            icon: e(20),
                          },
                        }),
                      ],
                      1
                    ),
                    n(
                      "li",
                      [
                        n("navigation-item", {
                          staticClass: "bg-green-dark",
                          attrs: { label: "Vego", href: "/vego", icon: e(21) },
                        }),
                      ],
                      1
                    ),
                    n(
                      "li",
                      [
                        n("navigation-item", {
                          staticClass: "bg-blue",
                          attrs: {
                            label: "Gå med i klubben",
                            href: "https://interact.djurensratt.se/ge-medlemskap/raddadjuren",
                            icon: e(39),
                            iconVariant: "piglet",
                          },
                        }),
                      ],
                      1
                    ),
                  ]
                ),
                n(
                  "nuxt-link",
                  {
                    staticClass:
                      "absolute top-0 right-0 -mt-16 md_mt-0 xl_mt-32 block py-3 px-4 text-xs font-bold bg-purple-dark rounded-l-lg z-40",
                    attrs: { to: "/vuxen-eller-pedagog" },
                  },
                  [this._v("Vuxen?")]
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
      installComponents(component, { NavigationItem: e(68).default });
    },
  ],
  [[86, 44, 3, 45]],
]);
