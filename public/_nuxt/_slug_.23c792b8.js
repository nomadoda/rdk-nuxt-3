import {
  A as C,
  a as S,
  m as O,
  q,
  o as t,
  c as m,
  Z as u,
  R as i,
  O as p,
  ab as s,
  X as n,
  P as b,
  I as a,
  V as d,
  W as _,
  ae as w,
  ai as V,
  aj as j,
  N as $,
  ac as I,
  ad as N,
  a7 as D,
} from "./entry.e50f0f50.js";
import { u as P } from "./usePageHead.f7f7da2b.js";
import B from "./SocialHead.eb1a0180.js";
import E from "./SourceListItem.ea0f1eee.js";
import R from "./TransitionExpand.b7299dda.js";
import T from "./PageArticle.9a99e4cf.js";
import "./urlTools.7e20410a.js";
import "./SourceListItem.vue_vue_type_style_index_0_scoped_764c6338_lang.767669ff.js";
import "./TransitionExpand.vue_vue_type_style_index_0_scoped_ab5478b5_lang.c2805c90.js";
import "./PageArticle.vue_vue_type_style_index_0_scoped_d3e8b27d_lang.2510b67f.js";
import "./AppImage.9bc8cdcc.js";
import "./nuxt-img.6cd8cff3.js";
const L = 2,
  W = C({
    data() {
      return { sourcesOpen: !1, previewSourcesCount: L };
    },
    setup() {
      const { params: e, fullPath: o } = S(),
        { data: h } = O(
          o,
          async () => q(`djurfakta/${e.slug}`).findOne(),
          "$WFQ8KPEX1C"
        );
      return P(h.value, { basePath: "djurfakta" }), { article: h };
    },
    computed: {
      facts() {
        var e, o;
        return (o = (e = this.article) == null ? void 0 : e["facts-block"]) !=
          null && o.facts
          ? this.article["facts-block"].facts
          : void 0;
      },
      questions() {
        var e, o;
        return (o =
          (e = this.article) == null ? void 0 : e["question-block"]) != null &&
          o.questions
          ? this.article["question-block"].questions
          : void 0;
      },
      sources() {
        var e, o;
        return (o = (e = this.article) == null ? void 0 : e["source-block"]) !=
          null && o.source
          ? this.article["source-block"].source
          : void 0;
      },
    },
    methods: {
      toggleSourcesOpen() {
        this.sourcesOpen = !this.sourcesOpen;
      },
    },
  }),
  l = (e) => (I("data-v-be1ad8be"), (e = e()), N(), e),
  z = { class: "byline" },
  A = { key: 0, class: "author" },
  F = { class: "preamble" },
  H = { key: 0, class: "sidebar-section facts", id: "facts" },
  K = l(() => s("h2", null, "Snabba fakta", -1)),
  U = { key: 1, class: "sidebar-section animal-rights" },
  X = { class: "block" },
  M = { class: "block__content" },
  Q = { class: "block__preamble" },
  Z = l(() =>
    s(
      "p",
      { class: "note" },
      "H\xE4r ber\xE4ttar etologerna p\xE5 Djurens R\xE4tt vad de t\xE4nker \xE4r b\xE4st f\xF6r djuren. De \xE4r utbildade i djurs behov och beteenden.",
      -1
    )
  ),
  G = { key: 2, class: "sidebar-section questions" },
  J = { class: "block" },
  Y = l(() => s("h2", null, "V\xE4rderingsfr\xE5gor", -1)),
  x = { class: "block__content" },
  ee = { class: "block__preamble" },
  se = { class: "bullet" },
  te = l(() =>
    s(
      "p",
      { class: "note" },
      "V\xE4rderingsfr\xE5gorna g\xF6r det l\xE4ttare att s\xE4tta sig in i djurets situation och t\xE4nka kring val i vardagen och r\xE4tt och fel. Diskutera dem g\xE4rna med en vuxen.",
      -1
    )
  ),
  oe = { key: 3, class: "sidebar-section sources" },
  ne = { class: "block" },
  ae = l(() => s("h2", null, "K\xE4llor", -1)),
  re = ["start"],
  le = l(() =>
    s(
      "svg",
      {
        class: "icon chevron-up w-6 h-6",
        viewBox: "0 0 20 20",
        fill: "currentColor",
      },
      [
        s("path", {
          "fill-rule": "evenodd",
          d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
          "clip-rule": "evenodd",
        }),
      ],
      -1
    )
  ),
  ie = { class: "text-center text-sm" },
  ce = l(() => s("strong", null, "framsidan\xA0", -1)),
  ue = l(() => s("span", null, "eller\xA0", -1)),
  de = l(() => s("strong", null, "alla djur", -1));
function pe(e, o, h, _e, he, me) {
  const f = B,
    k = E,
    v = R,
    g = $,
    y = T;
  return e.article
    ? (t(),
      m(
        y,
        {
          key: 0,
          class: "page-djurfakta",
          document: e.article,
          coverCloudinaryId: e.article.image,
        },
        {
          content: u(() => [
            p(
              f,
              {
                title: e.article.title,
                description: e.article.metadescription,
                image: e.article.image,
                cloudinary: !0,
              },
              null,
              8,
              ["title", "description", "image"]
            ),
            s("h1", null, n(e.article.title), 1),
            s("div", z, [
              s("p", null, n(e.article.species), 1),
              s("p", null, [
                b("Latin: " + n(e.article.scientificName), 1),
                e.article.author
                  ? (t(), a("span", A, "Text av " + n(e.article.author), 1))
                  : i("", !0),
              ]),
            ]),
            s("p", F, n(e.article.preamble), 1),
          ]),
          sidebar: u(() => [
            e.facts && e.facts.length > 0
              ? (t(),
                a("section", H, [
                  K,
                  s("ul", null, [
                    (t(!0),
                    a(
                      d,
                      null,
                      _(e.facts, (r) => (t(), a("li", { key: r }, n(r), 1))),
                      128
                    )),
                  ]),
                ]))
              : i("", !0),
            e.article["animal-rights-block"] &&
            e.article["animal-rights-block"].body
              ? (t(),
                a("section", U, [
                  s("div", X, [
                    s("h2", null, n(e.article["animal-rights-block"].title), 1),
                    s("div", M, [
                      s(
                        "p",
                        Q,
                        n(e.article["animal-rights-block"].preamble),
                        1
                      ),
                      s("p", null, n(e.article["animal-rights-block"].body), 1),
                    ]),
                  ]),
                  Z,
                ]))
              : i("", !0),
            e.questions && e.questions.length > 0
              ? (t(),
                a("section", G, [
                  s("div", J, [
                    Y,
                    s("div", x, [
                      s("p", ee, n(e.article["question-block"].preamble), 1),
                      s("ul", null, [
                        (t(!0),
                        a(
                          d,
                          null,
                          _(
                            e.questions,
                            (r, c) => (
                              t(),
                              a("li", { key: r }, [
                                s("div", se, [s("span", null, n(c + 1), 1)]),
                                s("p", null, n(r), 1),
                              ])
                            )
                          ),
                          128
                        )),
                      ]),
                    ]),
                  ]),
                  te,
                ]))
              : i("", !0),
            e.sources && e.sources.length > 0
              ? (t(),
                a("section", oe, [
                  s("div", ne, [
                    ae,
                    s(
                      "div",
                      { class: w(["block__content", { open: e.sourcesOpen }]) },
                      [
                        s("ol", null, [
                          (t(!0),
                          a(
                            d,
                            null,
                            _(
                              e.sources.slice(0, e.previewSourcesCount),
                              (r, c) => (
                                t(),
                                m(k, { source: r, key: c }, null, 8, ["source"])
                              )
                            ),
                            128
                          )),
                        ]),
                        e.sources.length > e.previewSourcesCount
                          ? (t(),
                            a(
                              d,
                              { key: 0 },
                              [
                                p(v, null, {
                                  default: u(() => [
                                    V(
                                      s(
                                        "ol",
                                        { start: e.previewSourcesCount + 1 },
                                        [
                                          (t(!0),
                                          a(
                                            d,
                                            null,
                                            _(
                                              e.sources.slice(
                                                e.previewSourcesCount
                                              ),
                                              (r, c) => (
                                                t(),
                                                m(
                                                  k,
                                                  { source: r, key: c },
                                                  null,
                                                  8,
                                                  ["source"]
                                                )
                                              )
                                            ),
                                            128
                                          )),
                                        ],
                                        8,
                                        re
                                      ),
                                      [[j, e.sourcesOpen]]
                                    ),
                                  ]),
                                  _: 1,
                                }),
                                s(
                                  "button",
                                  {
                                    onClick:
                                      o[0] ||
                                      (o[0] = (...r) =>
                                        e.toggleSourcesOpen &&
                                        e.toggleSourcesOpen(...r)),
                                  },
                                  [
                                    s(
                                      "span",
                                      null,
                                      n(
                                        e.sourcesOpen
                                          ? "Visa mindre"
                                          : "Visa mer"
                                      ),
                                      1
                                    ),
                                    le,
                                  ]
                                ),
                              ],
                              64
                            ))
                          : i("", !0),
                      ],
                      2
                    ),
                  ]),
                ]))
              : i("", !0),
            s("div", ie, [
              p(
                g,
                { to: "/vuxen-eller-pedagog" },
                { default: u(() => [b("Tillbaka till\xA0"), ce]), _: 1 }
              ),
              ue,
              p(
                g,
                { to: "/sok" },
                { default: u(() => [b("se\xA0"), de]), _: 1 }
              ),
            ]),
          ]),
          _: 1,
        },
        8,
        ["document", "coverCloudinaryId"]
      ))
    : i("", !0);
}
const je = D(W, [
  ["render", pe],
  ["__scopeId", "data-v-be1ad8be"],
]);
export { je as default };
