import {
  G as j,
  A as C,
  e as S,
  a as E,
  o as _,
  I as h,
  O as n,
  Z as l,
  af as L,
  c as T,
  ab as t,
  X as R,
  ai as m,
  aj as f,
  R as B,
  U as r,
  ac as I,
  ad as N,
  a7 as $,
} from "./entry.e50f0f50.js";
import { c as D } from "./urlTools.7e20410a.js";
import {
  e as M,
  A as V,
  a as z,
  b as q,
  c as H,
  d as P,
  h as G,
} from "./SearchResults.vue_vue_type_style_index_0_scoped_fbfddc59_lang.8d17b183.js";
import O from "./TransitionExpand.b7299dda.js";
import U from "./SearchResults.515e03ca.js";
import X from "./FilterSidebar.4302b82f.js";
import "./TransitionExpand.vue_vue_type_style_index_0_scoped_ab5478b5_lang.c2805c90.js";
import "./AnimalSliderCard.3d00e042.js";
import "./AnimalSliderCard.vue_vue_type_style_index_0_scoped_2bb4687e_lang.25a381c7.js";
import "./AppImage.9bc8cdcc.js";
import "./nuxt-img.6cd8cff3.js";
import "./LearnMoreCard.ed396117.js";
import "./MagazineCard.b0205bf6.js";
import "./AdultCard.48aac999.js";
import "./ActivistCard.9fbe7622.js";
import "./PageCard.b076015c.js";
import "./Sidebar.a81ef872.js";
const J = () => j().$algolia,
  Z = "nuxt3",
  K = C({
    name: "Search",
    components: {
      AisClearRefinements: M,
      AisConfigure: V,
      AisInstantSearch: z,
      AisRefinementList: q,
      AisSearchBox: H,
      AisStateResults: P,
    },
    data() {
      return {
        indexName: Z,
        showFilter: !1,
        routing: {
          router: G(),
          stateMapping: {
            stateToRoute(e) {
              const { query: s, refinementList: o } = e.allContent || {};
              return {
                sokord: s,
                seeFilters: o && o.seeFilters && o.seeFilters.join("~"),
                habitatFilters:
                  o && o.habitatFilters && o.habitatFilters.join("~"),
                contentType: o && o.contentType && o.contentType.join("~"),
              };
            },
            routeToState(e) {
              const {
                sokord: s,
                habitatFilters: o,
                seeFilters: c,
                contentType: d,
              } = e;
              return {
                allContent: {
                  query: s,
                  refinementList: {
                    seeFilters: c && c.split("~"),
                    habitatFilters: o && o.split("~"),
                    contentType: d && d.split("~"),
                  },
                },
              };
            },
          },
        },
      };
    },
    setup() {
      S({
        link: [{ hid: "canonical", rel: "canonical", href: D("/sok") }],
        title:
          "S\xF6k p\xE5 djur, fakta, vego eller tips | R\xE4dda Djuren-klubben",
        meta: [
          {
            hid: "og:title",
            name: "og:title",
            content:
              "S\xF6k p\xE5 djur, fakta, vego eller tips | R\xE4dda Djuren-klubben",
          },
          {
            hid: "description",
            name: "description",
            content:
              "H\xE4r kan du s\xF6ka p\xE5 djur, tips om hur du kan hj\xE4lpa djur och mer",
          },
          {
            hid: "og:description",
            name: "og:description",
            content:
              "H\xE4r kan du s\xF6ka p\xE5 djur, tips om hur du kan hj\xE4lpa djur och mer",
          },
        ],
      });
      const e = J(),
        { fullPath: s } = E();
      return { searchClient: e, key: s };
    },
    methods: {
      onToggleFilter() {
        this.showFilter = !this.showFilter;
      },
    },
  }),
  i = (e) => (I("data-v-cb7f0fa2"), (e = e()), N(), e),
  Q = { class: "page-sok" },
  W = { class: "search-container" },
  Y = i(() =>
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
  ee = { class: "filter" },
  te = i(() =>
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
  se = { class: "text" },
  oe = ["onClick", "disabled"],
  ne = i(() =>
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
  ie = i(() => t("span", { class: "text" }, "Rensa", -1)),
  ae = [ne, ie],
  le = { class: "refinement-columns" },
  re = { class: "column" },
  ce = i(() => t("h5", null, "Jag vill se ...", -1)),
  de = { class: "column" },
  ue = i(() => t("h5", null, "Som lever i ...", -1)),
  pe = { class: "column" },
  _e = i(() => t("h5", null, "Inneh\xE5ll eller omr\xE5de", -1)),
  he = i(() =>
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
  me = i(() => t("span", null, "D\xF6lj", -1)),
  fe = [he, me];
function ge(e, s, o, c, d, ve) {
  const g = r("ais-configure"),
    v = r("ais-search-box"),
    k = r("ais-clear-refinements"),
    u = r("ais-refinement-list"),
    x = O,
    F = U,
    b = r("ais-state-results"),
    w = X,
    y = r("ais-instant-search"),
    A = L;
  return (
    _(),
    h("section", Q, [
      n(
        A,
        { placeholder: "Laddar ..." },
        {
          default: l(() => [
            (_(),
            T(
              y,
              {
                "index-name": e.indexName,
                "search-client": e.searchClient,
                routing: e.routing,
                key: e.key,
              },
              {
                default: l(() => [
                  n(g, { hitsPerPage: 1e3 }),
                  t("div", W, [
                    n(
                      v,
                      {
                        class: "search",
                        placeholder:
                          "S\xF6k p\xE5 djur, fakta, vego eller tips ...",
                        autofocus: "",
                      },
                      { "submit-icon": l(() => [Y]), _: 1 }
                    ),
                    t("div", ee, [
                      t(
                        "button",
                        {
                          onClick:
                            s[0] ||
                            (s[0] = (...a) =>
                              e.onToggleFilter && e.onToggleFilter(...a)),
                        },
                        [
                          te,
                          t(
                            "span",
                            se,
                            R(e.showFilter ? "D\xF6lj filter" : "Visa filter"),
                            1
                          ),
                        ]
                      ),
                      n(
                        k,
                        { class: "hidden sm_block" },
                        {
                          default: l(({ refine: a, canRefine: p }) => [
                            t(
                              "button",
                              { onClick: a, disabled: !p },
                              ae,
                              8,
                              oe
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                  ]),
                  n(x, null, {
                    default: l(() => [
                      m(
                        t(
                          "div",
                          le,
                          [
                            t("div", re, [
                              ce,
                              n(u, { attribute: "seeFilters" }),
                            ]),
                            t("div", de, [
                              ue,
                              n(u, { attribute: "habitatFilters" }),
                            ]),
                            t("div", pe, [
                              _e,
                              n(u, { attribute: "contentType" }),
                            ]),
                          ],
                          512
                        ),
                        [[f, e.showFilter]]
                      ),
                    ]),
                    _: 1,
                  }),
                  e.showFilter
                    ? (_(),
                      h(
                        "button",
                        {
                          key: 0,
                          class: "toggle",
                          onClick:
                            s[1] ||
                            (s[1] = (...a) =>
                              e.onToggleFilter && e.onToggleFilter(...a)),
                        },
                        fe
                      ))
                    : B("", !0),
                  n(b, null, {
                    default: l(
                      ({ state: { query: a }, results: { hits: p } }) => [
                        n(F, { class: "results", hits: p, query: a }, null, 8, [
                          "hits",
                          "query",
                        ]),
                      ]
                    ),
                    _: 1,
                  }),
                  m(
                    n(
                      w,
                      {
                        class: "sm_hidden",
                        onClose: s[2] || (s[2] = (a) => (e.showFilter = !1)),
                      },
                      null,
                      512
                    ),
                    [[f, e.showFilter]]
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
const $e = $(K, [
  ["render", ge],
  ["__scopeId", "data-v-cb7f0fa2"],
]);
export { $e as default };
