(window.webpackJsonp = window.webpackJsonp || []).push([
  [30, 10],
  {
    182: function (t, n, e) {
      "use strict";
      function r(t) {
        var path = "/" === t.charAt(0) ? t : "/".concat(t);
        return "https://www.raddadjuren.se".concat(path);
      }
      function o(t) {
        return c(t.substr(7));
      }
      function c(t) {
        return t.endsWith("index") ? t.substr(0, t.length - 6) : t;
      }
      e.d(n, "a", function () {
        return r;
      }),
        e.d(n, "c", function () {
          return o;
        }),
        e.d(n, "b", function () {
          return c;
        });
    },
    222: function (t, n, e) {
      var content = e(254);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, e(4).default)("725ff9b0", content, !0, { sourceMap: !1 });
    },
    253: function (t, n, e) {
      "use strict";
      e(222);
    },
    254: function (t, n, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        "/*purgecss start ignore*/\n@media (min-width: 768px){\n.article[data-v-9067ef4a]{\n    position:relative\n}\n}\n.article .wrapper[data-v-9067ef4a]{\n    margin-left:auto;\n    margin-right:auto;\n    display:flex;\n    max-width:1200px;\n    flex-wrap:wrap;\n}\n.article .wrapper .search[data-v-9067ef4a]{\n      position:absolute;\n      top:0px;\n      left:0px;\n      display:none;\n      width:100%\n}\n@media (min-width: 768px){\n.article .wrapper .search[data-v-9067ef4a]{\n        display:block\n}\n}\n.article .wrapper main.content[data-v-9067ef4a]{\n      --tw-bg-opacity:1;\n      background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n      padding-left:1rem;\n      padding-right:1rem;\n      padding-top:2rem;\n      padding-bottom:2rem;\n      flex:5 1 400px;\n}\n@media (min-width: 768px){\n.article .wrapper main.content[data-v-9067ef4a]{\n        position:relative;\n\n        margin-top:-6rem;\n\n        padding-left:2.5rem;\n\n        padding-right:2.5rem\n}\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content{\n      font-size:1.125rem;\n      line-height:1.75rem\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content>*{\n      margin-top:2rem\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content h1, .article .wrapper main.content[data-v-9067ef4a] .nuxt-content h2, .article .wrapper main.content[data-v-9067ef4a] .nuxt-content h3, .article .wrapper main.content[data-v-9067ef4a] .nuxt-content h4, .article .wrapper main.content[data-v-9067ef4a] .nuxt-content h5{\n        font-weight:700\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content h1+*, .article .wrapper main.content[data-v-9067ef4a] .nuxt-content h2+*, .article .wrapper main.content[data-v-9067ef4a] .nuxt-content h3+*, .article .wrapper main.content[data-v-9067ef4a] .nuxt-content h4+*, .article .wrapper main.content[data-v-9067ef4a] .nuxt-content h5+*{\n        margin-top:1rem\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content h1{\n        font-size:1.875rem;\n        line-height:2.25rem\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content h2{\n        font-size:1.5rem;\n        line-height:2rem\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content h3{\n        font-size:1.25rem;\n        line-height:1.75rem\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content h4, .article .wrapper main.content[data-v-9067ef4a] .nuxt-content h5{\n        font-size:1.125rem;\n        line-height:1.75rem\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content ul{\n        list-style-type:disc;\n        padding-left:2rem;\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content ul li{\n          margin-top:1rem\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content a{\n        text-decoration:underline\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content img+p em:only-child{\n        margin-top:-1rem;\n        display:block;\n        width:100%;\n        text-align:right\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content p>img{\n        padding-bottom:1.25rem\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content blockquote{\n        margin-left:auto;\n        margin-right:auto;\n        max-width:28rem;\n        padding-left:2rem;\n        padding-right:2rem;\n        padding-top:1.5rem;\n        padding-bottom:1.5rem;\n        border-radius:0 30px 30px 30px;\n        background-color:#5ec19f;\n}\n.article .wrapper main.content[data-v-9067ef4a] .nuxt-content blockquote p{\n          margin-top:0px;\n          --tw-text-opacity:1;\n          color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.article .wrapper aside.sidebar[data-v-9067ef4a]{\n      display:flex;\n      min-width:0px;\n      flex-direction:column;\n      padding-left:1rem;\n      padding-right:1rem;\n      padding-top:2rem;\n      padding-bottom:2rem;\n      flex:2 1 300px;\n}\n@media (min-width: 768px){\n.article .wrapper aside.sidebar[data-v-9067ef4a]{\n        position:relative;\n\n        padding-left:2.5rem;\n\n        padding-right:2.5rem\n}\n}\n.article .wrapper:not(.with-cover) main.content[data-v-9067ef4a]{\n      margin-top:0px\n}\n@media (min-width: 768px){\n.article .wrapper:not(.with-cover) aside.sidebar[data-v-9067ef4a]{\n        margin-top:6rem\n}\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    284: function (t, n, e) {
      var content = e(355);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, e(4).default)("c61b665e", content, !0, { sourceMap: !1 });
    },
    302: function (t, n, e) {
      "use strict";
      e.r(n);
      var r = e(0).a.extend({
          props: {
            coverCloudinaryId: { type: String, default: "" },
            document: { type: Object, default: () => {} },
          },
          computed: {
            crosswordAnswerURL() {
              var t;
              return (
                !!(null === (t = this.document) || void 0 === t
                  ? void 0
                  : t.crosswordAnswer) &&
                "https://res.cloudinary.com/klandestino-ab/image/upload".concat(
                  this.document.crosswordAnswer
                )
              );
            },
            puzzleAnswerURL() {
              var t;
              return (
                !!(null === (t = this.document) || void 0 === t
                  ? void 0
                  : t.puzzleAnswer) &&
                "https://res.cloudinary.com/klandestino-ab/image/upload".concat(
                  this.document.puzzleAnswer
                )
              );
            },
            pubId() {
              return this.coverCloudinaryId.replace(/^\/+/, "");
            },
          },
        }),
        o = (e(253), e(2)),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              n = t._self._c;
            t._self._setupProxy;
            return n("div", { staticClass: "article" }, [
              n("div", { staticClass: "pb-40" }),
              n(
                "div",
                { staticClass: "wrapper" },
                [
                  n("search-input", { staticClass: "search" }),
                  n("main", { staticClass: "content" }, [
                    n(
                      "div",
                      { staticClass: "magazine-card" },
                      [
                        t.coverCloudinaryId
                          ? n("client-only", [
                              n(
                                "div",
                                { staticClass: "magazine" },
                                [
                                  n("app-image", {
                                    attrs: {
                                      publicId: t.pubId,
                                      responsive: "width",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ])
                          : t._e(),
                        n("h3", [t._v(t._s(t.document.title))]),
                      ],
                      1
                    ),
                    t.document.crosswordAnswer
                      ? n("div", [
                          n("h3", [
                            n("a", { attrs: { href: t.crosswordAnswerURL } }, [
                              t._v("Facit till korsordet"),
                            ]),
                          ]),
                        ])
                      : t._e(),
                    t.document.puzzleAnswer
                      ? n("div", [
                          n("h3", [
                            n("a", { attrs: { href: t.puzzleAnswerURL } }, [
                              t._v("Facit till knep och knåp"),
                            ]),
                          ]),
                        ])
                      : t._e(),
                  ]),
                  t.$slots.sidebar
                    ? n(
                        "aside",
                        { staticClass: "sidebar" },
                        [t._t("sidebar")],
                        2
                      )
                    : t._e(),
                ],
                1
              ),
            ]);
          },
          [],
          !1,
          null,
          "9067ef4a",
          null
        );
      n.default = component.exports;
      installComponents(component, {
        SearchInput: e(32).default,
        AppImage: e(79).default,
      });
    },
    354: function (t, n, e) {
      "use strict";
      e(284);
    },
    355: function (t, n, e) {
      var r = e(3)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        "/*purgecss start ignore*/\n.page-front[data-v-f05b5a6c]{\n  margin-bottom:5rem;\n}\n.page-front h1[data-v-f05b5a6c]{\n    font-size:2.25rem;\n    line-height:2.5rem;\n    font-weight:800;\n    --tw-text-opacity:1;\n    color:rgba(0, 0, 0, var(--tw-text-opacity))\n}\n.page-front .byline[data-v-f05b5a6c]{\n    margin-top:2rem;\n    border-bottom-width:2px;\n    font-size:0.875rem;\n    line-height:1.25rem;\n    font-weight:700\n}\n.page-front .preamble[data-v-f05b5a6c]{\n    margin-top:2rem;\n    font-size:1.25rem;\n    line-height:1.75rem;\n    font-weight:700;\n    line-height:2rem\n}\n.page-front[data-v-f05b5a6c] blockquote{\n  background-color:#9b51e0\n}\n.page-front section.sidebar-section[data-v-f05b5a6c]{\n    margin:0px;\n    margin-bottom:2rem;\n}\n.page-front section.sidebar-section h2[data-v-f05b5a6c]{\n      padding-top:1rem;\n      padding-bottom:1rem;\n      font-size:1.5rem;\n      line-height:2rem;\n      font-weight:700\n}\n.page-front section.sidebar-section .block[data-v-f05b5a6c]{\n      overflow:hidden;\n      border-radius:0.375rem;\n}\n.page-front section.sidebar-section .block h2[data-v-f05b5a6c]{\n        --tw-bg-opacity:1;\n        background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n        text-align:center\n}\n.page-front section.sidebar-section .block__content[data-v-f05b5a6c]{\n        padding-left:1rem;\n        padding-right:1rem;\n        padding-top:1rem;\n        padding-bottom:1rem\n}\n.page-front section.sidebar-section.more .block[data-v-f05b5a6c]{\n      background-color:#9b51e0;\n}\n.page-front section.sidebar-section.more .block h2[data-v-f05b5a6c]{\n        color:#9b51e0\n}\n.page-front section.sidebar-section.more .block__content ul[data-v-f05b5a6c]{\n          margin-bottom:1rem;\n}\n.page-front section.sidebar-section.more .block__content ul li[data-v-f05b5a6c]{\n            margin-top:1rem;\n            text-align:center;\n}\n.page-front section.sidebar-section.more .block__content ul li a[data-v-f05b5a6c]{\n              --tw-text-opacity:1;\n              color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.page-front section.sidebar-section.more .block__content ul li a[data-v-f05b5a6c]:hover{\n              opacity:.7\n}\n\n/*purgecss end ignore*/",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    409: function (t, n, e) {
      "use strict";
      e.r(n);
      var r = e(0),
        o = e(182);
      function c(t, n, e, r, o, c, l) {
        try {
          var d = t[c](l),
            m = d.value;
        } catch (t) {
          return void e(t);
        }
        d.done ? n(m) : Promise.resolve(m).then(r, o);
      }
      var l = r.a.extend({
          name: "KlubbnyttArticlePage",
          asyncData(t) {
            return ((n = function* () {
              var { $content: n, params: e, payload: r } = t;
              return {
                article: (null == r ? void 0 : r.slug)
                  ? r
                  : yield n("klubbnytt/".concat(e.slug)).fetch(),
                moreArticles: yield n("klubbnytt")
                  .only(["title", "path"])
                  .fetch(),
                slug: (null == e ? void 0 : e.slug) ? e.slug : "",
              };
            }),
            function () {
              var t = this,
                e = arguments;
              return new Promise(function (r, o) {
                var l = n.apply(t, e);
                function d(t) {
                  c(l, r, o, d, m, "next", t);
                }
                function m(t) {
                  c(l, r, o, d, m, "throw", t);
                }
                d(void 0);
              });
            })();
            var n;
          },
          data: () => ({ article: null, moreArticles: [] }),
          head() {
            var t, n, e, r, c, l, d, m, f;
            return {
              title: (
                null === (t = this.article) || void 0 === t ? void 0 : t.title
              )
                ? "".concat(this.article.title, " | Rädda Djuren-klubben")
                : "Rädda Djuren-klubben",
              link: [
                {
                  hid: "canonical",
                  rel: "canonical",
                  href: Object(o.a)(
                    "/klubbnytt/".concat(
                      (
                        null === (n = this.article) || void 0 === n
                          ? void 0
                          : n.slug
                      )
                        ? this.article.slug
                        : ""
                    )
                  ),
                },
              ],
              meta: [
                {
                  hid: "og:url",
                  property: "og:url",
                  content: "https://www.raddadjuren.se/klubbnytt/".concat(
                    (
                      null === (e = this.article) || void 0 === e
                        ? void 0
                        : e.slug
                    )
                      ? this.article.slug
                      : ""
                  ),
                },
                {
                  hid: "og:title",
                  property: "og:title",
                  content: (
                    null === (r = this.article) || void 0 === r
                      ? void 0
                      : r.title
                  )
                    ? "".concat(this.article.title, " | Rädda Djuren-klubben")
                    : "Rädda Djuren-klubben",
                },
                {
                  hid: "description",
                  property: "description",
                  content: (
                    null === (c = this.article) || void 0 === c
                      ? void 0
                      : c.metadescription
                  )
                    ? this.article.metadescription
                    : (
                        null === (l = this.article) || void 0 === l
                          ? void 0
                          : l.preamble
                      )
                    ? this.article.preamble
                    : "",
                },
                {
                  hid: "og:description",
                  property: "og:description",
                  content: (
                    null === (d = this.article) || void 0 === d
                      ? void 0
                      : d.metadescription
                  )
                    ? this.article.metadescription
                    : (
                        null === (m = this.article) || void 0 === m
                          ? void 0
                          : m.preamble
                      )
                    ? this.article.preamble
                    : "",
                },
                {
                  hid: "og:image",
                  property: "og:image",
                  content: (
                    null === (f = this.article) || void 0 === f
                      ? void 0
                      : f.image
                  )
                    ? "https://res.cloudinary.com/klandestino-ab/image/upload/c_lfill,dpr_auto,g_faces/c_scale,dpr_2.0,w_1200".concat(
                        this.article.image
                      )
                    : null,
                },
              ],
            };
          },
        }),
        d = l,
        m = (e(354), e(2)),
        component = Object(m.a)(
          d,
          function () {
            var t = this,
              n = t._self._c;
            t._self._setupProxy;
            return n("klubbnytt-article", {
              staticClass: "page-front",
              attrs: {
                document: t.article,
                coverCloudinaryId: t.article.image,
              },
              scopedSlots: t._u(
                [
                  {
                    key: "content",
                    fn: function () {
                      return [
                        n("h1", [t._v(t._s(t.article.title))]),
                        n("div", { staticClass: "byline" }),
                        n("p", { staticClass: "preamble" }, [
                          t._v(t._s(t.article.preamble)),
                        ]),
                      ];
                    },
                    proxy: !0,
                  },
                  t.moreArticles &&
                  Array.isArray(t.moreArticles) &&
                  t.moreArticles.length > 0
                    ? {
                        key: "sidebar",
                        fn: function () {
                          return [
                            n(
                              "section",
                              { staticClass: "sidebar-section more" },
                              [
                                n("div", { staticClass: "block" }, [
                                  n("h2", [t._v("Fler sidor")]),
                                  n("div", { staticClass: "block__content" }, [
                                    n(
                                      "ul",
                                      t._l(t.moreArticles, function (e) {
                                        return n(
                                          "li",
                                          { key: e.title },
                                          [
                                            n(
                                              "nuxt-link",
                                              { attrs: { to: e.path } },
                                              [t._v(t._s(e.title))]
                                            ),
                                          ],
                                          1
                                        );
                                      }),
                                      0
                                    ),
                                  ]),
                                ]),
                              ]
                            ),
                            n(
                              "div",
                              { staticClass: "text-center text-sm" },
                              [
                                n(
                                  "nuxt-link",
                                  { attrs: { to: "/klubbnytt" } },
                                  [
                                    t._v("Tillbaka till "),
                                    n("strong", [t._v("Klubbnytt")]),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ];
                        },
                        proxy: !0,
                      }
                    : null,
                ],
                null,
                !0
              ),
            });
          },
          [],
          !1,
          null,
          "f05b5a6c",
          null
        );
      n.default = component.exports;
      installComponents(component, { KlubbnyttArticle: e(302).default });
    },
  },
]);
