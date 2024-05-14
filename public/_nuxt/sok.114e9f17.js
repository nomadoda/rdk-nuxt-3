import {
  o,
  b as u,
  c as a,
  w as l,
  a as t,
  f as r,
  L as c,
  M as f,
  e as F,
  g as b,
  z as M,
  S as A,
  J as B,
  K as z,
  G as w,
  a6 as C,
  a7 as L,
  N as q,
  O as P,
  A as E,
  d as H,
  j as J,
  i as G,
} from "./entry.0b49aa71.js";
import { c as K } from "./urlTools.cc793b8f.js";
import {
  _ as O,
  a as U,
  b as X,
  c as Q,
  d as W,
  e as Y,
  f as Z,
  g as ee,
  h as te,
  A as oe,
  i as se,
  j as ne,
  k as le,
  l as ie,
  m as ae,
} from "./SearchResults.vue.29261df6.js";
import { _ as de } from "./TransitionExpand.eb1f5d55.js";
import { _ as re } from "./AnimalSliderCard.6fedc47f.js";
import { _ as x } from "./AppImage.4fc7032c.js";
import { _ as y } from "./client-only.9fc77d65.js";
import { _ as j } from "./nuxt-link.3942cc84.js";
import "./TransitionExpand.vue.0dfc1b2d.js";
import "./AnimalSliderCard.vue.50dc6bf2.js";
import "./AppImage.vue.1420cc05.js";
const ce = {
    class:
      "flex flex-col bg-white rounded-md overflow-hidden items-center pb-0 w-full min-w-full",
  },
  _e = { class: "w-48 h-48 overflow-hidden rounded-full" },
  ue = { class: "text-center font-bold px-2 py-2 w-2/3" },
  pe = { class: "bg-pink p-3 w-full text-center font-bold rounded-sm" };
function he(e, s, d, h, m, k) {
  const _ = x,
    p = y,
    i = j;
  return (
    o(),
    u("div", ce, [
      e.link
        ? (o(),
          a(
            i,
            { key: 0, class: "pt-4 pb-2 px-5", to: e.link },
            {
              default: l(() => [
                e.image
                  ? (o(),
                    a(
                      p,
                      { key: 0 },
                      {
                        default: l(() => [
                          t("div", _e, [
                            r(
                              _,
                              {
                                publicId: e.pubId,
                                width: "200",
                                height: "200",
                              },
                              null,
                              8,
                              ["publicId"]
                            ),
                          ]),
                        ]),
                        _: 1,
                      }
                    ))
                  : c("", !0),
              ]),
              _: 1,
            },
            8,
            ["to"]
          ))
        : c("", !0),
      t("h3", ue, f(e.title), 1),
      t("div", pe, [
        e.link
          ? (o(),
            a(
              i,
              { key: 0, class: "text-white w-full", to: e.link },
              { default: l(() => [F("Rädda Djuren")]), _: 1 },
              8,
              ["to"]
            ))
          : c("", !0),
      ]),
    ])
  );
}
const me = b(O, [
    ["render", he],
    ["__scopeId", "data-v-304b3da8"],
  ]),
  fe = {
    class:
      "flex flex-col bg-white rounded-md overflow-hidden items-center pb-0 w-full min-w-full",
  },
  be = { class: "w-48 h-48 overflow-hidden rounded-full" },
  ve = { class: "text-center font-bold px-2 py-2 w-2/3" },
  $e = { class: "bg-pink p-3 w-full text-center font-bold rounded-sm" };
function ke(e, s, d, h, m, k) {
  const _ = x,
    p = y,
    i = j;
  return (
    o(),
    u("div", fe, [
      e.link
        ? (o(),
          a(
            i,
            { key: 0, class: "pt-4 pb-2 px-5", to: e.link },
            {
              default: l(() => [
                e.image
                  ? (o(),
                    a(
                      p,
                      { key: 0 },
                      {
                        default: l(() => [
                          t("div", be, [
                            r(
                              _,
                              {
                                publicId: e.pubId,
                                width: "200",
                                height: "200",
                              },
                              null,
                              8,
                              ["publicId"]
                            ),
                          ]),
                        ]),
                        _: 1,
                      }
                    ))
                  : c("", !0),
              ]),
              _: 1,
            },
            8,
            ["to"]
          ))
        : c("", !0),
      t("h3", ve, f(e.title), 1),
      t("div", $e, [
        e.link
          ? (o(),
            a(
              i,
              { key: 0, class: "text-white w-full", to: e.link },
              { default: l(() => [F("Vuxen eller pedagog")]), _: 1 },
              8,
              ["to"]
            ))
          : c("", !0),
      ]),
    ])
  );
}
const ge = b(U, [
    ["render", ke],
    ["__scopeId", "data-v-d5dc2f4b"],
  ]),
  we = (e) => (B("data-v-0fa42f5b"), (e = e()), z(), e),
  Fe = { class: "sidebar__header themed" },
  ye = we(() =>
    t(
      "svg",
      { class: "x w-6 h-6", viewBox: "0 0 20 20", fill: "currentColor" },
      [
        t("path", {
          "fill-rule": "evenodd",
          d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
          "clip-rule": "evenodd",
        }),
      ],
      -1
    )
  ),
  Ie = [ye],
  Ce = { class: "sidebar__content" },
  Le = { key: 0, class: "sidebar__footer" };
function xe(e, s, d, h, m, k) {
  return (
    o(),
    u(
      "aside",
      { class: A(["sidebar", { "with-footer": e.hasFooter }]) },
      [
        t("div", Fe, [
          t("h1", null, f(e.title), 1),
          t(
            "button",
            { onClick: s[0] || (s[0] = (_) => e.$emit("close")) },
            Ie
          ),
        ]),
        t("div", Ce, [M(e.$slots, "default", {}, void 0, !0)]),
        e.hasFooter
          ? (o(), u("div", Le, [M(e.$slots, "footer", {}, void 0, !0)]))
          : c("", !0),
      ],
      2
    )
  );
}
const je = b(X, [
    ["render", xe],
    ["__scopeId", "data-v-0fa42f5b"],
  ]),
  v = (e) => (B("data-v-24d28ea3"), (e = e()), z(), e),
  Ae = { class: "content" },
  Se = v(() => t("h5", null, "Jag vill se ...", -1)),
  Te = v(() => t("h5", null, "Som bor ...", -1)),
  Ve = v(() => t("h5", null, "Innehåll eller område", -1)),
  Be = { class: "tab-bar" },
  ze = v(() =>
    t(
      "svg",
      { class: "icon w-6 h-6", viewBox: "0 0 20 20", fill: "currentColor" },
      [
        t("path", {
          "fill-rule": "evenodd",
          d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
          "clip-rule": "evenodd",
        }),
      ],
      -1
    )
  ),
  Me = v(() => t("span", { class: "text" }, "Djur", -1)),
  Ne = [ze, Me],
  Re = v(() =>
    t(
      "svg",
      { class: "icon w-6 h-6", viewBox: "0 0 20 20", fill: "currentColor" },
      [
        t("path", {
          "fill-rule": "evenodd",
          d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
          "clip-rule": "evenodd",
        }),
      ],
      -1
    )
  ),
  De = v(() => t("span", { class: "text" }, "Plats", -1)),
  qe = [Re, De],
  Pe = v(() =>
    t(
      "svg",
      { class: "icon w-6 h-6", viewBox: "0 0 20 20", fill: "currentColor" },
      [
        t("path", {
          "fill-rule": "evenodd",
          d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
          "clip-rule": "evenodd",
        }),
      ],
      -1
    )
  ),
  Ee = v(() => t("span", { class: "text" }, "Innehåll", -1)),
  He = [Pe, Ee];
function Je(e, s, d, h, m, k) {
  const _ = w("ais-refinement-list"),
    p = je;
  return (
    o(),
    a(
      p,
      {
        class: "filter-sidebar",
        title: "Sökfilter",
        onClose: s[3] || (s[3] = (i) => e.$emit("close")),
      },
      {
        footer: l(() => [
          t("div", Be, [
            t(
              "button",
              {
                class: A([
                  "tab whitespace-nowrap",
                  { active: e.activeFilter === "seeFilters" },
                ]),
                onClick:
                  s[0] || (s[0] = (i) => (e.activeFilter = "seeFilters")),
              },
              Ne,
              2
            ),
            t(
              "button",
              {
                class: A([
                  "tab whitespace-nowrap",
                  { active: e.activeFilter === "habitatFilters" },
                ]),
                onClick:
                  s[1] || (s[1] = (i) => (e.activeFilter = "habitatFilters")),
              },
              qe,
              2
            ),
            t(
              "button",
              {
                class: A([
                  "tab whitespace-nowrap",
                  { active: e.activeFilter === "contentType" },
                ]),
                onClick:
                  s[2] || (s[2] = (i) => (e.activeFilter = "contentType")),
              },
              He,
              2
            ),
          ]),
        ]),
        default: l(() => [
          t("template", null, [
            t("div", Ae, [
              C(t("div", null, [Se, r(_, { attribute: "seeFilters" })], 512), [
                [L, e.activeFilter === "seeFilters"],
              ]),
              C(
                t(
                  "div",
                  null,
                  [Te, r(_, { attribute: "habitatFilters" })],
                  512
                ),
                [[L, e.activeFilter === "habitatFilters"]]
              ),
              C(t("div", null, [Ve, r(_, { attribute: "contentType" })], 512), [
                [L, e.activeFilter === "contentType"],
              ]),
            ]),
          ]),
        ]),
        _: 1,
      }
    )
  );
}
const Ge = b(Q, [
    ["render", Je],
    ["__scopeId", "data-v-24d28ea3"],
  ]),
  Ke = {
    class:
      "flex flex-col bg-white rounded-md overflow-hidden items-center pb-0 w-full min-w-full",
  },
  Oe = { class: "w-48 h-48 overflow-hidden rounded-full" },
  Ue = { class: "text-center font-bold px-2 py-2 w-2/3" },
  Xe = { class: "bg-pink p-3 w-full text-center font-bold rounded-sm" };
function Qe(e, s, d, h, m, k) {
  const _ = x,
    p = y,
    i = j;
  return (
    o(),
    u("div", Ke, [
      e.link
        ? (o(),
          a(
            i,
            { key: 0, class: "pt-4 pb-2 px-5", to: e.link },
            {
              default: l(() => [
                e.image
                  ? (o(),
                    a(
                      p,
                      { key: 0 },
                      {
                        default: l(() => [
                          t("div", Oe, [
                            r(
                              _,
                              {
                                publicId: e.pubId,
                                width: "200",
                                height: "200",
                              },
                              null,
                              8,
                              ["publicId"]
                            ),
                          ]),
                        ]),
                        _: 1,
                      }
                    ))
                  : c("", !0),
              ]),
              _: 1,
            },
            8,
            ["to"]
          ))
        : c("", !0),
      t("h3", Ue, f(e.title), 1),
      t("div", Xe, [
        e.link
          ? (o(),
            a(
              i,
              { key: 0, class: "text-white w-full", to: e.link },
              { default: l(() => [F("Lär dig mer")]), _: 1 },
              8,
              ["to"]
            ))
          : c("", !0),
      ]),
    ])
  );
}
const We = b(W, [
    ["render", Qe],
    ["__scopeId", "data-v-4f1f93db"],
  ]),
  Ye = {
    class:
      "flex flex-col bg-white rounded-md overflow-hidden items-center pb-0 w-full min-w-full",
  },
  Ze = { class: "w-48 h-60 overflow-hidden" },
  et = { class: "text-center font-bold px-2 py-2 w-2/3" },
  tt = { class: "bg-pink p-3 w-full text-center font-bold rounded-sm" };
function ot(e, s, d, h, m, k) {
  const _ = x,
    p = y,
    i = j;
  return (
    o(),
    u("div", Ye, [
      e.link
        ? (o(),
          a(
            i,
            { key: 0, class: "pt-4 pb-2 px-5", to: e.link },
            {
              default: l(() => [
                e.image
                  ? (o(),
                    a(
                      p,
                      { key: 0 },
                      {
                        default: l(() => [
                          t("div", Ze, [
                            r(
                              _,
                              {
                                publicId: e.pubId,
                                width: "200",
                                height: "300",
                              },
                              null,
                              8,
                              ["publicId"]
                            ),
                          ]),
                        ]),
                        _: 1,
                      }
                    ))
                  : c("", !0),
              ]),
              _: 1,
            },
            8,
            ["to"]
          ))
        : c("", !0),
      t("h3", et, f(e.title), 1),
      t("div", tt, [
        e.link
          ? (o(),
            a(
              i,
              { key: 0, class: "text-white w-full", to: e.link },
              { default: l(() => [F("Klubbnytt")]), _: 1 },
              8,
              ["to"]
            ))
          : c("", !0),
      ]),
    ])
  );
}
const st = b(Y, [
    ["render", ot],
    ["__scopeId", "data-v-b323ac02"],
  ]),
  nt = {
    class:
      "flex flex-col bg-white rounded-md overflow-hidden items-center pb-0 w-full min-w-full",
  },
  lt = { class: "w-48 h-48 overflow-hidden rounded-full" },
  it = { class: "text-2xl text-left font-bold py-2 w-full pl-10 pr-20" },
  at = { key: 1, class: "w-full text-sm pl-10 pr-20 pb-10" },
  dt = { class: "bg-pink p-3 w-full text-center font-bold rounded-sm" };
function rt(e, s, d, h, m, k) {
  const _ = x,
    p = y,
    i = j;
  return (
    o(),
    u("div", nt, [
      e.link
        ? (o(),
          a(
            i,
            { key: 0, class: "pt-4 pb-2 px-5", to: e.link },
            {
              default: l(() => [
                e.image
                  ? (o(),
                    a(
                      p,
                      { key: 0 },
                      {
                        default: l(() => [
                          t("div", lt, [
                            r(
                              _,
                              {
                                publicId: e.pubId,
                                width: "200",
                                height: "200",
                              },
                              null,
                              8,
                              ["publicId"]
                            ),
                          ]),
                        ]),
                        _: 1,
                      }
                    ))
                  : c("", !0),
              ]),
              _: 1,
            },
            8,
            ["to"]
          ))
        : c("", !0),
      t("h3", it, [
        r(
          i,
          { to: e.link },
          { default: l(() => [F(f(e.title), 1)]), _: 1 },
          8,
          ["to"]
        ),
      ]),
      e.preamble
        ? (o(),
          u("p", at, [
            r(
              i,
              { to: e.link },
              { default: l(() => [F(f(e.preamble), 1)]), _: 1 },
              8,
              ["to"]
            ),
          ]))
        : c("", !0),
      t("div", dt, [
        e.link
          ? (o(),
            a(
              i,
              { key: 0, class: "text-white w-full", to: e.link },
              { default: l(() => [F("››")]), _: 1 },
              8,
              ["to"]
            ))
          : c("", !0),
      ]),
    ])
  );
}
const ct = b(Z, [
    ["render", rt],
    ["__scopeId", "data-v-4726867f"],
  ]),
  _t = { class: "search-results" },
  ut = { class: "search-results__header" },
  pt = { key: 0 },
  ht = { class: "results" },
  mt = { key: 0 },
  ft = { key: 1 },
  bt = { class: "search-results__items" };
function vt(e, s, d, h, m, k) {
  const _ = re,
    p = We,
    i = st,
    I = ge,
    S = me,
    T = ct;
  return (
    o(),
    u("section", _t, [
      t("div", ut, [
        e.query ? (o(), u("h2", pt, f(e.query), 1)) : c("", !0),
        t("p", ht, [
          e.hits.length === 0
            ? (o(),
              u(
                "span",
                mt,
                "Inga träffar. Testa att rensa filter, bredda din sökning eller söka på något annat"
              ))
            : (o(),
              u(
                "span",
                ft,
                f(
                  `${e.hits.length} ${
                    e.hits.length === 1 ? "träff" : "träffar"
                  }`
                ),
                1
              )),
        ]),
      ]),
      t("ul", bt, [
        (o(!0),
        u(
          q,
          null,
          P(
            e.hits,
            (n) => (
              o(),
              u("li", { key: n.objectID }, [
                n.dir === "/djurfakta"
                  ? (o(), a(_, { key: 0, animal: n }, null, 8, ["animal"]))
                  : n.dir === "/lar-dig-mer"
                  ? (o(),
                    a(
                      p,
                      {
                        key: 1,
                        preamble: n.preamble,
                        title: n.title,
                        image: n.image,
                        link: n.path,
                      },
                      null,
                      8,
                      ["preamble", "title", "image", "link"]
                    ))
                  : n.dir === "/klubbnytt"
                  ? (o(),
                    a(
                      i,
                      {
                        key: 2,
                        preamble: n.preamble,
                        title: n.title,
                        image: n.image,
                        link: n.path,
                      },
                      null,
                      8,
                      ["preamble", "title", "image", "link"]
                    ))
                  : n.dir === "/vuxen-eller-pedagog"
                  ? (o(),
                    a(
                      I,
                      {
                        key: 3,
                        preamble: n.preamble,
                        title: n.title,
                        image: n.image,
                        link: n.path,
                      },
                      null,
                      8,
                      ["preamble", "title", "image", "link"]
                    ))
                  : n.dir === "/hjalp-djuren"
                  ? (o(),
                    a(
                      S,
                      {
                        key: 4,
                        preamble: n.preamble,
                        title: n.title,
                        image: n.image,
                        link: n.path,
                      },
                      null,
                      8,
                      ["preamble", "title", "image", "link"]
                    ))
                  : n.dir === "/pages"
                  ? (o(),
                    a(
                      T,
                      {
                        key: 5,
                        preamble: n.preamble,
                        title: n.title,
                        image: n.image,
                        link: n.path,
                      },
                      null,
                      8,
                      ["preamble", "title", "image", "link"]
                    ))
                  : c("", !0),
              ])
            )
          ),
          128
        )),
      ]),
    ])
  );
}
const $t = b(ee, [
    ["render", vt],
    ["__scopeId", "data-v-fbfddc59"],
  ]),
  kt = () => E().$algolia,
  gt = "nuxt3",
  wt = H({
    name: "Search",
    components: {
      AisClearRefinements: te,
      AisConfigure: oe,
      AisInstantSearch: se,
      AisRefinementList: ne,
      AisSearchBox: le,
      AisStateResults: ie,
    },
    data() {
      return {
        indexName: gt,
        showFilter: !1,
        routing: {
          router: ae(),
          stateMapping: {
            stateToRoute(e) {
              const { query: s, refinementList: d } = e.allContent || {};
              return {
                sokord: s,
                seeFilters: d && d.seeFilters && d.seeFilters.join("~"),
                habitatFilters:
                  d && d.habitatFilters && d.habitatFilters.join("~"),
                contentType: d && d.contentType && d.contentType.join("~"),
              };
            },
            routeToState(e) {
              const {
                sokord: s,
                habitatFilters: d,
                seeFilters: h,
                contentType: m,
              } = e;
              return {
                allContent: {
                  query: s,
                  refinementList: {
                    seeFilters: h && h.split("~"),
                    habitatFilters: d && d.split("~"),
                    contentType: m && m.split("~"),
                  },
                },
              };
            },
          },
        },
      };
    },
    setup() {
      J({
        link: [{ hid: "canonical", rel: "canonical", href: K("/sok") }],
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
      });
      const e = kt(),
        { fullPath: s } = G();
      return { searchClient: e, key: s };
    },
    methods: {
      onToggleFilter() {
        this.showFilter = !this.showFilter;
      },
    },
  }),
  $ = (e) => (B("data-v-cb7f0fa2"), (e = e()), z(), e),
  Ft = { class: "page-sok" },
  yt = { class: "search-container" },
  It = $(() =>
    t(
      "svg",
      {
        class: "w-6 h-6 search-icon",
        viewBox: "0 0 20 20",
        fill: "currentColor",
      },
      [
        t("path", {
          "fill-rule": "evenodd",
          d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
          "clip-rule": "evenodd",
        }),
      ],
      -1
    )
  ),
  Ct = { class: "filter" },
  Lt = $(() =>
    t(
      "svg",
      { class: "w-6 h-6 icon", viewBox: "0 0 20 20", fill: "white" },
      [
        t("path", {
          "fill-rule": "evenodd",
          d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
          "clip-rule": "evenodd",
        }),
      ],
      -1
    )
  ),
  xt = { class: "text" },
  jt = ["onClick", "disabled"],
  At = $(() =>
    t(
      "svg",
      { class: "x w-6 h-6 icon", viewBox: "0 0 20 20", fill: "white" },
      [
        t("path", {
          "fill-rule": "evenodd",
          d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
          "clip-rule": "evenodd",
        }),
      ],
      -1
    )
  ),
  St = $(() => t("span", { class: "text" }, "Rensa", -1)),
  Tt = [At, St],
  Vt = { class: "refinement-columns" },
  Bt = { class: "column" },
  zt = $(() => t("h5", null, "Jag vill se ...", -1)),
  Mt = { class: "column" },
  Nt = $(() => t("h5", null, "Som lever i ...", -1)),
  Rt = { class: "column" },
  Dt = $(() => t("h5", null, "Innehåll eller område", -1)),
  qt = $(() =>
    t(
      "svg",
      {
        class: "chevron-up w-6 h-6 icon",
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
  Pt = $(() => t("span", null, "Dölj", -1)),
  Et = [qt, Pt];
function Ht(e, s, d, h, m, k) {
  const _ = w("ais-configure"),
    p = w("ais-search-box"),
    i = w("ais-clear-refinements"),
    I = w("ais-refinement-list"),
    S = de,
    T = $t,
    n = w("ais-state-results"),
    N = Ge,
    R = w("ais-instant-search"),
    D = y;
  return (
    o(),
    u("section", Ft, [
      r(
        D,
        { placeholder: "Laddar ..." },
        {
          default: l(() => [
            (o(),
            a(
              R,
              {
                "index-name": e.indexName,
                "search-client": e.searchClient,
                routing: e.routing,
                key: e.key,
              },
              {
                default: l(() => [
                  r(_, { hitsPerPage: 1e3 }),
                  t("div", yt, [
                    r(
                      p,
                      {
                        class: "search",
                        placeholder: "Sök på djur, fakta, vego eller tips ...",
                        autofocus: "",
                      },
                      { "submit-icon": l(() => [It]), _: 1 }
                    ),
                    t("div", Ct, [
                      t(
                        "button",
                        {
                          onClick:
                            s[0] ||
                            (s[0] = (...g) =>
                              e.onToggleFilter && e.onToggleFilter(...g)),
                        },
                        [
                          Lt,
                          t(
                            "span",
                            xt,
                            f(e.showFilter ? "Dölj filter" : "Visa filter"),
                            1
                          ),
                        ]
                      ),
                      r(
                        i,
                        { class: "hidden sm_block" },
                        {
                          default: l(({ refine: g, canRefine: V }) => [
                            t(
                              "button",
                              { onClick: g, disabled: !V },
                              Tt,
                              8,
                              jt
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                  ]),
                  r(S, null, {
                    default: l(() => [
                      C(
                        t(
                          "div",
                          Vt,
                          [
                            t("div", Bt, [
                              zt,
                              r(I, { attribute: "seeFilters" }),
                            ]),
                            t("div", Mt, [
                              Nt,
                              r(I, { attribute: "habitatFilters" }),
                            ]),
                            t("div", Rt, [
                              Dt,
                              r(I, { attribute: "contentType" }),
                            ]),
                          ],
                          512
                        ),
                        [[L, e.showFilter]]
                      ),
                    ]),
                    _: 1,
                  }),
                  e.showFilter
                    ? (o(),
                      u(
                        "button",
                        {
                          key: 0,
                          class: "toggle",
                          onClick:
                            s[1] ||
                            (s[1] = (...g) =>
                              e.onToggleFilter && e.onToggleFilter(...g)),
                        },
                        Et
                      ))
                    : c("", !0),
                  r(n, null, {
                    default: l(
                      ({ state: { query: g }, results: { hits: V } }) => [
                        r(T, { class: "results", hits: V, query: g }, null, 8, [
                          "hits",
                          "query",
                        ]),
                      ]
                    ),
                    _: 1,
                  }),
                  C(
                    r(
                      N,
                      {
                        class: "sm_hidden",
                        onClose: s[2] || (s[2] = (g) => (e.showFilter = !1)),
                      },
                      null,
                      512
                    ),
                    [[L, e.showFilter]]
                  ),
                ]),
                _: 1,
              },
              8,
              ["index-name", "search-client", "routing"]
            )),
          ]),
          _: 1,
        }
      ),
    ])
  );
}
const to = b(wt, [
  ["render", Ht],
  ["__scopeId", "data-v-cb7f0fa2"],
]);
export { to as default };
