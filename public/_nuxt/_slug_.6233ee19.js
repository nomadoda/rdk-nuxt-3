import {
  g as k,
  L as i,
  o as t,
  b as r,
  a as s,
  M as o,
  e as _,
  J as S,
  K as C,
  d as I,
  i as N,
  x as V,
  c as b,
  w as d,
  f as h,
  N as p,
  O as m,
  S as j,
  a6 as D,
  a7 as B,
} from "./entry.bc63e51a.js";
import { q as E } from "./query.02b33be6.js";
import { u as L } from "./usePageHead.dfc639a9.js";
import { _ as P, a as R } from "./SourceListItem.vue.c41b3d71.js";
import { _ as T } from "./TransitionExpand.ae30940c.js";
import { _ as K } from "./nuxt-link.b84c39ea.js";
import { _ as U } from "./PageArticle.aa3be229.js";
import "./utils.0216015b.js";
import "./urlTools.cc793b8f.js";
import "./TransitionExpand.vue.07423dbf.js";
import "./PageArticle.vue.e748534d.js";
import "./AppImage.1a4d91cf.js";
import "./AppImage.vue.fa386efd.js";
import "./client-only.9e138b79.js";
import "./SearchInput.ae3910f0.js";
import "./SearchInput.vue.750aef33.js";
import "./ContentRenderer.32ebd34d.js";
import "./ContentRendererMarkdown.291b27e1.js";
import "./index.a6ef77ff.js";
import "./index.23a876b0.js";
function z(e, n, c, f, g, v) {
  return i("", !0);
}
const F = k(P, [["render", z]]),
  H = (e) => (S("data-v-764c6338"), (e = e()), C(), e),
  M = { class: "source-list-item" },
  W = { key: 0 },
  A = { key: 1 },
  J = ["href"],
  Q = { key: 2 },
  X = H(() => s("br", null, null, -1));
function G(e, n, c, f, g, v) {
  return (
    t(),
    r("li", M, [
      s("span", null, o(e.source.sourceName), 1),
      e.source.authorOrInstitution
        ? (t(), r("span", W, o(`, ${e.source.authorOrInstitution}`), 1))
        : i("", !0),
      e.source.url
        ? (t(),
          r("span", A, [
            _(o(", URL: ")),
            s("a", { href: e.source.url }, o(e.source.url), 9, J),
          ]))
        : i("", !0),
      e.source.urlDate
        ? (t(),
          r("span", Q, [
            X,
            _(o(" Sidan besökt: ") + " " + o(e.source.urlDate), 1),
          ]))
        : i("", !0),
    ])
  );
}
const Y = k(R, [
    ["render", G],
    ["__scopeId", "data-v-764c6338"],
  ]),
  Z = 2,
  x = I({
    data() {
      return { sourcesOpen: !1, previewSourcesCount: Z };
    },
    setup() {
      const { params: e, fullPath: n } = N(),
        { data: c } = V(
          n,
          async () => E(`djurfakta/${e.slug}`).findOne(),
          "$WFQ8KPEX1C"
        );
      return L(c.value, { basePath: "djurfakta" }), { article: c };
    },
    computed: {
      facts() {
        var e, n;
        return (n = (e = this.article) == null ? void 0 : e["facts-block"]) !=
          null && n.facts
          ? this.article["facts-block"].facts
          : void 0;
      },
      questions() {
        var e, n;
        return (n =
          (e = this.article) == null ? void 0 : e["question-block"]) != null &&
          n.questions
          ? this.article["question-block"].questions
          : void 0;
      },
      sources() {
        var e, n;
        return (n = (e = this.article) == null ? void 0 : e["source-block"]) !=
          null && n.source
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
  l = (e) => (S("data-v-be1ad8be"), (e = e()), C(), e),
  ee = { class: "byline" },
  se = { key: 0, class: "author" },
  te = { class: "preamble" },
  oe = { key: 0, class: "sidebar-section facts", id: "facts" },
  re = l(() => s("h2", null, "Snabba fakta", -1)),
  ne = { key: 1, class: "sidebar-section animal-rights" },
  ae = { class: "block" },
  ie = { class: "block__content" },
  le = { class: "block__preamble" },
  ce = l(() =>
    s(
      "p",
      { class: "note" },
      "Här berättar etologerna på Djurens Rätt vad de tänker är bäst för djuren. De är utbildade i djurs behov och beteenden.",
      -1
    )
  ),
  ue = { key: 2, class: "sidebar-section questions" },
  de = { class: "block" },
  pe = l(() => s("h2", null, "Värderingsfrågor", -1)),
  _e = { class: "block__content" },
  he = { class: "block__preamble" },
  me = { class: "bullet" },
  be = l(() =>
    s(
      "p",
      { class: "note" },
      "Värderingsfrågorna gör det lättare att sätta sig in i djurets situation och tänka kring val i vardagen och rätt och fel. Diskutera dem gärna med en vuxen.",
      -1
    )
  ),
  ke = { key: 3, class: "sidebar-section sources" },
  fe = { class: "block" },
  ge = l(() => s("h2", null, "Källor", -1)),
  ve = ["start"],
  $e = l(() =>
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
  ye = { class: "text-center text-sm" },
  Se = l(() => s("strong", null, "framsidan ", -1)),
  Ce = l(() => s("span", null, "eller ", -1)),
  Oe = l(() => s("strong", null, "alla djur", -1));
function we(e, n, c, f, g, v) {
  const O = F,
    $ = Y,
    w = T,
    y = K,
    q = U;
  return e.article
    ? (t(),
      b(
        q,
        {
          key: 0,
          class: "page-djurfakta",
          document: e.article,
          coverCloudinaryId: e.article.image,
        },
        {
          content: d(() => [
            h(
              O,
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
            s("h1", null, o(e.article.title), 1),
            s("div", ee, [
              s("p", null, o(e.article.species), 1),
              s("p", null, [
                _("Latin: " + o(e.article.scientificName), 1),
                e.article.author
                  ? (t(), r("span", se, "Text av " + o(e.article.author), 1))
                  : i("", !0),
              ]),
            ]),
            s("p", te, o(e.article.preamble), 1),
          ]),
          sidebar: d(() => [
            e.facts && e.facts.length > 0
              ? (t(),
                r("section", oe, [
                  re,
                  s("ul", null, [
                    (t(!0),
                    r(
                      p,
                      null,
                      m(e.facts, (a) => (t(), r("li", { key: a }, o(a), 1))),
                      128
                    )),
                  ]),
                ]))
              : i("", !0),
            e.article["animal-rights-block"] &&
            e.article["animal-rights-block"].body
              ? (t(),
                r("section", ne, [
                  s("div", ae, [
                    s("h2", null, o(e.article["animal-rights-block"].title), 1),
                    s("div", ie, [
                      s(
                        "p",
                        le,
                        o(e.article["animal-rights-block"].preamble),
                        1
                      ),
                      s("p", null, o(e.article["animal-rights-block"].body), 1),
                    ]),
                  ]),
                  ce,
                ]))
              : i("", !0),
            e.questions && e.questions.length > 0
              ? (t(),
                r("section", ue, [
                  s("div", de, [
                    pe,
                    s("div", _e, [
                      s("p", he, o(e.article["question-block"].preamble), 1),
                      s("ul", null, [
                        (t(!0),
                        r(
                          p,
                          null,
                          m(
                            e.questions,
                            (a, u) => (
                              t(),
                              r("li", { key: a }, [
                                s("div", me, [s("span", null, o(u + 1), 1)]),
                                s("p", null, o(a), 1),
                              ])
                            )
                          ),
                          128
                        )),
                      ]),
                    ]),
                  ]),
                  be,
                ]))
              : i("", !0),
            e.sources && e.sources.length > 0
              ? (t(),
                r("section", ke, [
                  s("div", fe, [
                    ge,
                    s(
                      "div",
                      { class: j(["block__content", { open: e.sourcesOpen }]) },
                      [
                        s("ol", null, [
                          (t(!0),
                          r(
                            p,
                            null,
                            m(
                              e.sources.slice(0, e.previewSourcesCount),
                              (a, u) => (
                                t(),
                                b($, { source: a, key: u }, null, 8, ["source"])
                              )
                            ),
                            128
                          )),
                        ]),
                        e.sources.length > e.previewSourcesCount
                          ? (t(),
                            r(
                              p,
                              { key: 0 },
                              [
                                h(w, null, {
                                  default: d(() => [
                                    D(
                                      s(
                                        "ol",
                                        { start: e.previewSourcesCount + 1 },
                                        [
                                          (t(!0),
                                          r(
                                            p,
                                            null,
                                            m(
                                              e.sources.slice(
                                                e.previewSourcesCount
                                              ),
                                              (a, u) => (
                                                t(),
                                                b(
                                                  $,
                                                  { source: a, key: u },
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
                                        ve
                                      ),
                                      [[B, e.sourcesOpen]]
                                    ),
                                  ]),
                                  _: 1,
                                }),
                                s(
                                  "button",
                                  {
                                    onClick:
                                      n[0] ||
                                      (n[0] = (...a) =>
                                        e.toggleSourcesOpen &&
                                        e.toggleSourcesOpen(...a)),
                                  },
                                  [
                                    s(
                                      "span",
                                      null,
                                      o(
                                        e.sourcesOpen
                                          ? "Visa mindre"
                                          : "Visa mer"
                                      ),
                                      1
                                    ),
                                    $e,
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
            s("div", ye, [
              h(
                y,
                { to: "/vuxen-eller-pedagog" },
                { default: d(() => [_("Tillbaka till "), Se]), _: 1 }
              ),
              Ce,
              h(y, { to: "/sok" }, { default: d(() => [_("se "), Oe]), _: 1 }),
            ]),
          ]),
          _: 1,
        },
        8,
        ["document", "coverCloudinaryId"]
      ))
    : i("", !0);
}
const Je = k(x, [
  ["render", we],
  ["__scopeId", "data-v-be1ad8be"],
]);
export { Je as default };
