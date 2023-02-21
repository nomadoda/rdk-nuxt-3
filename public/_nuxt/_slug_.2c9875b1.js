import {
  g as C,
  L as i,
  o,
  b as n,
  a as t,
  M as r,
  e as k,
  J as j,
  K as O,
  d as D,
  i as q,
  x as I,
  j as N,
  c as w,
  w as b,
  f as y,
  N as g,
  O as S,
  S as R,
  a6 as V,
  a7 as B,
} from "./entry.0b49aa71.js";
import { q as E } from "./query.67962173.js";
import { c as L } from "./urlTools.cc793b8f.js";
import { _ as T, a as U } from "./SourceListItem.vue.8a479e9e.js";
import { _ as K } from "./TransitionExpand.eb1f5d55.js";
import { _ as P } from "./nuxt-link.3942cc84.js";
import { _ as z } from "./PageArticle.e2ec2851.js";
import "./utils.925ea3fb.js";
import "./TransitionExpand.vue.0dfc1b2d.js";
import "./PageArticle.vue.2e06c360.js";
import "./AppImage.4fc7032c.js";
import "./AppImage.vue.1420cc05.js";
import "./client-only.9fc77d65.js";
import "./SearchInput.aed2bd52.js";
import "./SearchInput.vue.52b1c04f.js";
import "./ContentRenderer.19b4e186.js";
import "./ContentRendererMarkdown.1eb3b2ad.js";
import "./index.a6ef77ff.js";
import "./index.681eb04d.js";
function F(e, a, s, u, d, p) {
  return i("", !0);
}
const H = C(T, [["render", F]]),
  M = (e) => (j("data-v-764c6338"), (e = e()), O(), e),
  W = { class: "source-list-item" },
  A = { key: 0 },
  J = { key: 1 },
  Q = ["href"],
  X = { key: 2 },
  G = M(() => t("br", null, null, -1));
function Y(e, a, s, u, d, p) {
  return (
    o(),
    n("li", W, [
      t("span", null, r(e.source.sourceName), 1),
      e.source.authorOrInstitution
        ? (o(), n("span", A, r(`, ${e.source.authorOrInstitution}`), 1))
        : i("", !0),
      e.source.url
        ? (o(),
          n("span", J, [
            k(r(", URL: ")),
            t("a", { href: e.source.url }, r(e.source.url), 9, Q),
          ]))
        : i("", !0),
      e.source.urlDate
        ? (o(),
          n("span", X, [
            G,
            k(r(" Sidan besökt: ") + " " + r(e.source.urlDate), 1),
          ]))
        : i("", !0),
    ])
  );
}
const Z = C(U, [
    ["render", Y],
    ["__scopeId", "data-v-764c6338"],
  ]),
  x = 2,
  ee = D({
    data() {
      return { sourcesOpen: !1, previewSourcesCount: x };
    },
    setup() {
      var u, d, p, v, _, f, m, $, l;
      const { params: e, fullPath: a } = q(),
        { data: s } = I(
          a,
          async () => E(`djurfakta/${e.slug}`).findOne(),
          "$WFQ8KPEX1C"
        );
      return (
        N({
          title:
            (u = s.value) != null && u.title
              ? `${s.value.title} | Rädda Djuren-klubben`
              : "Rädda Djuren-klubben",
          link: [
            {
              hid: "canonical",
              rel: "canonical",
              href: L(`/djurfakta/${(d = s.value) == null ? void 0 : d.slug}`),
            },
          ],
          meta: [
            {
              hid: "og:url",
              property: "og:url",
              content: `https://www.raddadjuren.se/djurfakta/${
                (p = s.value) == null ? void 0 : p.slug
              }`,
            },
            {
              hid: "og:title",
              property: "og:title",
              content:
                (v = s.value) != null && v.title
                  ? `${s.value.title} | Rädda Djuren-klubben`
                  : "Rädda Djuren-klubben",
            },
            {
              hid: "description",
              property: "description",
              content:
                (_ = s.value) != null && _.metadescription
                  ? s.value.metadescription
                  : (f = s.value) != null && f.preamble
                  ? s.value.preamble
                  : "",
            },
            {
              hid: "og:description",
              property: "og:description",
              content:
                (m = s.value) != null && m.metadescription
                  ? s.value.metadescription
                  : ($ = s.value) != null && $.preamble
                  ? s.value.preamble
                  : "",
            },
            {
              hid: "og:image",
              property: "og:image",
              content:
                (l = s.value) != null && l.image
                  ? `https://res.cloudinary.com/klandestino-ab/image/upload/c_lfill,dpr_auto,g_faces/c_scale,dpr_2.0,w_1200${s.value.image}`
                  : null,
            },
          ],
        }),
        { article: s }
      );
    },
    computed: {
      facts() {
        var e, a;
        return (a = (e = this.article) == null ? void 0 : e["facts-block"]) !=
          null && a.facts
          ? this.article["facts-block"].facts
          : void 0;
      },
      questions() {
        var e, a;
        return (a =
          (e = this.article) == null ? void 0 : e["question-block"]) != null &&
          a.questions
          ? this.article["question-block"].questions
          : void 0;
      },
      sources() {
        var e, a;
        return (a = (e = this.article) == null ? void 0 : e["source-block"]) !=
          null && a.source
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
  c = (e) => (j("data-v-9b4d22a2"), (e = e()), O(), e),
  te = { class: "byline" },
  se = { key: 0, class: "author" },
  oe = { class: "preamble" },
  re = { key: 0, class: "sidebar-section facts", id: "facts" },
  ne = c(() => t("h2", null, "Snabba fakta", -1)),
  ae = { key: 1, class: "sidebar-section animal-rights" },
  le = { class: "block" },
  ie = { class: "block__content" },
  ce = { class: "block__preamble" },
  ue = c(() =>
    t(
      "p",
      { class: "note" },
      "Här berättar etologerna på Djurens Rätt vad de tänker är bäst för djuren. De är utbildade i djurs behov och beteenden.",
      -1
    )
  ),
  de = { key: 2, class: "sidebar-section questions" },
  pe = { class: "block" },
  _e = c(() => t("h2", null, "Värderingsfrågor", -1)),
  me = { class: "block__content" },
  he = { class: "block__preamble" },
  be = { class: "bullet" },
  ge = c(() =>
    t(
      "p",
      { class: "note" },
      "Värderingsfrågorna gör det lättare att sätta sig in i djurets situation och tänka kring val i vardagen och rätt och fel. Diskutera dem gärna med en vuxen.",
      -1
    )
  ),
  ke = { key: 3, class: "sidebar-section sources" },
  ve = { class: "block" },
  fe = c(() => t("h2", null, "Källor", -1)),
  $e = ["start"],
  ye = c(() =>
    t(
      "svg",
      {
        class: "icon chevron-up w-6 h-6",
        viewBox: "0 0 20 20",
        fill: "currentColor",
      },
      [
        t("path", {
          "fill-rule": "evenodd",
          d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
          "clip-rule": "evenodd",
        }),
      ],
      -1
    )
  ),
  Se = { class: "text-center text-sm" },
  we = c(() => t("strong", null, "framsidan ", -1)),
  Ce = c(() => t("span", null, "eller ", -1)),
  je = c(() => t("strong", null, "alla djur", -1));
function Oe(e, a, s, u, d, p) {
  const v = H,
    _ = Z,
    f = K,
    m = P,
    $ = z;
  return e.article
    ? (o(),
      w(
        $,
        {
          key: 0,
          class: "page-djurfakta",
          document: e.article,
          coverCloudinaryId: e.article.image,
        },
        {
          content: b(() => [
            y(
              v,
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
            t("h1", null, r(e.article.title), 1),
            t("div", te, [
              t("p", null, r(e.article.species), 1),
              t("p", null, [
                k("Latin: " + r(e.article.scientificName), 1),
                e.article.author
                  ? (o(), n("span", se, "Text av " + r(e.article.author), 1))
                  : i("", !0),
              ]),
            ]),
            t("p", oe, r(e.article.preamble), 1),
          ]),
          sidebar: b(() => [
            e.facts && e.facts.length > 0
              ? (o(),
                n("section", re, [
                  ne,
                  t("ul", null, [
                    (o(!0),
                    n(
                      g,
                      null,
                      S(e.facts, (l) => (o(), n("li", { key: l }, r(l), 1))),
                      128
                    )),
                  ]),
                ]))
              : i("", !0),
            e.article["animal-rights-block"] &&
            e.article["animal-rights-block"].body
              ? (o(),
                n("section", ae, [
                  t("div", le, [
                    t("h2", null, r(e.article["animal-rights-block"].title), 1),
                    t("div", ie, [
                      t(
                        "p",
                        ce,
                        r(e.article["animal-rights-block"].preamble),
                        1
                      ),
                      t("p", null, r(e.article["animal-rights-block"].body), 1),
                    ]),
                  ]),
                  ue,
                ]))
              : i("", !0),
            e.questions && e.questions.length > 0
              ? (o(),
                n("section", de, [
                  t("div", pe, [
                    _e,
                    t("div", me, [
                      t("p", he, r(e.article["question-block"].preamble), 1),
                      t("ul", null, [
                        (o(!0),
                        n(
                          g,
                          null,
                          S(
                            e.questions,
                            (l, h) => (
                              o(),
                              n("li", { key: l }, [
                                t("div", be, [t("span", null, r(h + 1), 1)]),
                                t("p", null, r(l), 1),
                              ])
                            )
                          ),
                          128
                        )),
                      ]),
                    ]),
                  ]),
                  ge,
                ]))
              : i("", !0),
            e.sources && e.sources.length > 0
              ? (o(),
                n("section", ke, [
                  t("div", ve, [
                    fe,
                    t(
                      "div",
                      { class: R(["block__content", { open: e.sourcesOpen }]) },
                      [
                        t("ol", null, [
                          (o(!0),
                          n(
                            g,
                            null,
                            S(
                              e.sources.slice(0, e.previewSourcesCount),
                              (l, h) => (
                                o(),
                                w(_, { source: l, key: h }, null, 8, ["source"])
                              )
                            ),
                            128
                          )),
                        ]),
                        e.sources.length > e.previewSourcesCount
                          ? (o(),
                            n(
                              g,
                              { key: 0 },
                              [
                                y(f, null, {
                                  default: b(() => [
                                    V(
                                      t(
                                        "ol",
                                        { start: e.previewSourcesCount + 1 },
                                        [
                                          (o(!0),
                                          n(
                                            g,
                                            null,
                                            S(
                                              e.sources.slice(
                                                e.previewSourcesCount
                                              ),
                                              (l, h) => (
                                                o(),
                                                w(
                                                  _,
                                                  { source: l, key: h },
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
                                        $e
                                      ),
                                      [[B, e.sourcesOpen]]
                                    ),
                                  ]),
                                  _: 1,
                                }),
                                t(
                                  "button",
                                  {
                                    onClick:
                                      a[0] ||
                                      (a[0] = (...l) =>
                                        e.toggleSourcesOpen &&
                                        e.toggleSourcesOpen(...l)),
                                  },
                                  [
                                    t(
                                      "span",
                                      null,
                                      r(
                                        e.sourcesOpen
                                          ? "Visa mindre"
                                          : "Visa mer"
                                      ),
                                      1
                                    ),
                                    ye,
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
            t("div", Se, [
              y(
                m,
                { to: "/vuxen-eller-pedagog" },
                { default: b(() => [k("Tillbaka till "), we]), _: 1 }
              ),
              Ce,
              y(m, { to: "/sok" }, { default: b(() => [k("se "), je]), _: 1 }),
            ]),
          ]),
          _: 1,
        },
        8,
        ["document", "coverCloudinaryId"]
      ))
    : i("", !0);
}
const Je = C(ee, [
  ["render", Oe],
  ["__scopeId", "data-v-9b4d22a2"],
]);
export { Je as default };
