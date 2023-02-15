import {
  r as N,
  s as A,
  p as y,
  v as B,
  x as $,
  _ as e,
  y as w,
  z as C,
  A as k,
  f as m,
  j as d,
  a as M,
  B as H,
  l as v,
  C as F,
  D as I,
  E as q,
  u as U,
  T as G,
  F as L,
  G as D,
  H as K,
  I as Q,
  J,
  e as R,
  K as W,
  d as r,
  t as Y,
  L as X,
  M as Z,
  m as tt,
  h as et,
  N as rt,
} from "./entry.e50f0f50.js";
import "./SearchResults.vue_vue_type_style_index_0_scoped_fbfddc59_lang.8d17b183.js";
import { u as ot, a as it, b as S } from "./nuxt-img.6cd8cff3.js";
import "./AnimalSlider.vue_vue_type_style_index_0_scoped_4ed309ee_lang.0e89288c.js";
import "./AnimalSliderCard.vue_vue_type_style_index_0_scoped_2bb4687e_lang.25a381c7.js";
import "./LearnMoreBlock.vue_vue_type_style_index_0_scoped_bb3c97e0_lang.4d6f0884.js";
import "./InfoCard.vue_vue_type_style_index_0_scoped_b1c8dc52_lang.08b16729.js";
import "./PageSearch.vue_vue_type_style_index_0_scoped_99e80430_lang.a8536c95.js";
import "./PageArticle.vue_vue_type_style_index_0_scoped_d3e8b27d_lang.2510b67f.js";
import "./RecipeSlider.vue_vue_type_style_index_0_scoped_23ef5c26_lang.99e026dc.js";
import "./SourceListItem.vue_vue_type_style_index_0_scoped_764c6338_lang.767669ff.js";
import "./TransitionExpand.vue_vue_type_style_index_0_scoped_ab5478b5_lang.c2805c90.js";
import "./ContentDoc.e8eccf28.js";
import "./ContentList.7072a538.js";
import "./ContentQuery.9c156d7e.js";
import "./ContentSlot.e38eabf3.js";
import "./DocumentDrivenEmpty.e795f784.js";
import "./DocumentDrivenNotFound.76a147b1.js";
import "./Markdown.d042ba3f.js";
import "./ProseCode.a6213759.js";
const nt = async (t) => {
    var a, _;
    const { content: o } = N().public,
      i =
        typeof (t == null ? void 0 : t.params) == "function"
          ? t.params()
          : t || {};
    o.locales.length &&
      (((_ = (a = i.where) == null ? void 0 : a.find((l) => l._locale)) !=
        null &&
        _._locale) ||
        ((i.where = i.where || []),
        i.where.push({ _locale: o.defaultLocale })));
    const n = o.experimental.stripQueryParameters
      ? A(`/navigation/${`${y(i)}.${o.integrity}`}/${B(i)}.json`)
      : A(`/navigation/${y(i)}.${o.integrity}.json`);
    if ($())
      return (
        await e(
          () => import("./client-db.c413bcec.js"),
          [
            "./client-db.c413bcec.js",
            "./entry.e50f0f50.js",
            "./entry.93a60c67.css",
          ],
          import.meta.url
        ).then((l) => l.generateNavigation)
      )(i);
    const u = await $fetch(n, {
      method: "GET",
      responseType: "json",
      params: o.experimental.stripQueryParameters
        ? void 0
        : { _params: w(i), previewToken: C("previewToken").value },
    });
    if (typeof u == "string" && u.startsWith("<!DOCTYPE html>"))
      throw new Error("Not found");
    return u;
  },
  Xt = k({
    name: "Result",
    props: {
      title: { type: String, default: "" },
      preamble: { type: String, default: "" },
      path: { type: String, default: "" },
      image: { type: String, default: "" },
    },
    data() {
      return {};
    },
    computed: {
      pubId() {
        return this.image ? this.image.replace(/^\/+/, "") : "";
      },
      shortpreamble() {
        return this.preamble
          ? this.preamble.length < 175
            ? this.preamble
            : this.preamble.substring(0, 175).trim() + "..."
          : "";
      },
    },
  });
const V = {},
  at = m({
    props: { name: String },
    async setup(t, o) {
      const i = await V[t.name]().then((n) => n.default || n);
      return () => d(i, {}, o.slots);
    },
  }),
  ut = m({
    props: { name: { type: [String, Boolean, Object], default: null } },
    setup(t, o) {
      const i = q("_route"),
        n = i === M() ? H() : i,
        u = v(() => {
          var a, _;
          return (_ = (a = U(t.name)) != null ? a : n.meta.layout) != null
            ? _
            : "default";
        });
      return () => {
        var s;
        const a = u.value && u.value in V,
          _ = (s = n.meta.layoutTransition) != null ? s : F;
        return I(G, a && _, {
          default: () =>
            I(
              at,
              a && { key: u.value, name: u.value, hasTransition: void 0 },
              o.slots
            ).default(),
        }).default();
      };
    },
  }),
  _t = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ut },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  lt = m({
    emits: {
      error(t) {
        return !0;
      },
    },
    setup(t, { slots: o, emit: i }) {
      const n = L(null),
        u = D();
      return (
        K((a) => {
          if (!u.isHydrating) return i("error", a), (n.value = a), !1;
        }),
        () => {
          var a, _;
          return n.value
            ? (a = o.error) == null
              ? void 0
              : a.call(o, { error: n })
            : (_ = o.default) == null
            ? void 0
            : _.call(o);
        }
      );
    },
  }),
  mt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: lt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  st = m({
    name: "DevOnly",
    setup(t, o) {
      return () => null;
    },
  }),
  pt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: st },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  dt = m({
    name: "ServerPlaceholder",
    render() {
      return Q("div");
    },
  }),
  ft = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: dt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  vt = m({
    name: "NuxtLoadingIndicator",
    props: {
      throttle: { type: Number, default: 200 },
      duration: { type: Number, default: 2e3 },
      height: { type: Number, default: 3 },
      color: {
        type: String,
        default:
          "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)",
      },
    },
    setup(t, { slots: o }) {
      const i = ht({ duration: t.duration, throttle: t.throttle }),
        n = D();
      return (
        n.hook("page:start", i.start),
        n.hook("page:finish", i.finish),
        J(() => i.clear),
        () =>
          d(
            "div",
            {
              class: "nuxt-loading-indicator",
              style: {
                position: "fixed",
                top: 0,
                right: 0,
                left: 0,
                pointerEvents: "none",
                width: `${i.progress.value}%`,
                height: `${t.height}px`,
                opacity: i.isLoading.value ? 1 : 0,
                background: t.color,
                backgroundSize: `${(100 / i.progress.value) * 100}% auto`,
                transition: "width 0.1s, height 0.4s, opacity 0.4s",
                zIndex: 999999,
              },
            },
            o
          )
      );
    },
  });
function ht(t) {
  const o = L(0),
    i = L(!1),
    n = v(() => 1e4 / t.duration);
  let u = null,
    a = null;
  function _() {
    l(),
      (o.value = 0),
      (i.value = !0),
      t.throttle ? (a = setTimeout(c, t.throttle)) : c();
  }
  function s() {
    (o.value = 100), T();
  }
  function l() {
    clearInterval(u), clearTimeout(a), (u = null), (a = null);
  }
  function g(O) {
    o.value = Math.min(100, o.value + O);
  }
  function T() {
    l(),
      setTimeout(() => {
        (i.value = !1),
          setTimeout(() => {
            o.value = 0;
          }, 400);
      }, 500);
  }
  function c() {
    u = setInterval(() => {
      g(n.value);
    }, 100);
  }
  return { progress: o, isLoading: i, start: _, finish: s, clear: l };
}
const Et = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: vt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  b = {
    ...S,
    legacyFormat: { type: String, default: null },
    imgAttrs: { type: Object, default: null },
  },
  gt = m({
    name: "NuxtPicture",
    props: b,
    setup: (t, o) => {
      var T, c, O;
      const i = ot(),
        n = it(t),
        u = v(() => ["png", "webp", "gif"].includes(a.value)),
        a = v(() => W(t.src)),
        _ = v(() => (t.format || a.value === "svg" ? "svg" : "webp")),
        s = v(() =>
          t.legacyFormat
            ? t.legacyFormat
            : { webp: u.value ? "png" : "jpeg", svg: "png" }[_.value] || a.value
        ),
        l = v(() =>
          _.value === "svg"
            ? [{ srcset: t.src }]
            : (s.value !== _.value ? [s.value, _.value] : [_.value]).map(
                (P) => {
                  const {
                    srcset: j,
                    sizes: x,
                    src: z,
                  } = i.getSizes(t.src, {
                    ...n.options.value,
                    sizes: t.sizes || i.options.screens,
                    modifiers: { ...n.modifiers.value, format: P },
                  });
                  return { src: z, type: `image/${P}`, sizes: x, srcset: j };
                }
              )
        );
      if (t.preload) {
        const p = (T = l.value) != null && T[1] ? 1 : 0,
          P = { rel: "preload", as: "image", imagesrcset: l.value[p].srcset };
        (O = (c = l.value) == null ? void 0 : c[p]) != null &&
          O.sizes &&
          (P.imagesizes = l.value[p].sizes),
          R({ link: [P] });
      }
      const g = { ...t.imgAttrs };
      for (const p in o.attrs) p in S && !(p in g) && (g[p] = o.attrs[p]);
      return () => {
        var p;
        return d("picture", { key: l.value[0].src }, [
          ...((p = l.value) != null && p[1]
            ? [
                d("source", {
                  type: l.value[1].type,
                  sizes: l.value[1].sizes,
                  srcset: l.value[1].srcset,
                }),
              ]
            : []),
          d("img", {
            ...n.attrs.value,
            ...g,
            src: l.value[0].src,
            sizes: l.value[0].sizes,
            srcset: l.value[0].srcset,
          }),
        ]);
      };
    },
  }),
  ct = Object.freeze(
    Object.defineProperty(
      { __proto__: null, pictureProps: b, default: gt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Pt = (t) =>
    Object.fromEntries(Object.entries(t).filter(([, o]) => o !== void 0)),
  h = (t, o) => (i, n) => (
    R(() => t({ ...Pt(i), ...n.attrs }, n)),
    () => {
      var u, a;
      return o
        ? (a = (u = n.slots).default) == null
          ? void 0
          : a.call(u)
        : null;
    }
  ),
  E = {
    accesskey: String,
    autocapitalize: String,
    autofocus: { type: Boolean, default: void 0 },
    class: String,
    contenteditable: { type: Boolean, default: void 0 },
    contextmenu: String,
    dir: String,
    draggable: { type: Boolean, default: void 0 },
    enterkeyhint: String,
    exportparts: String,
    hidden: { type: Boolean, default: void 0 },
    id: String,
    inputmode: String,
    is: String,
    itemid: String,
    itemprop: String,
    itemref: String,
    itemscope: String,
    itemtype: String,
    lang: String,
    nonce: String,
    part: String,
    slot: String,
    spellcheck: { type: Boolean, default: void 0 },
    style: String,
    tabindex: String,
    title: String,
    translate: String,
  },
  Tt = m({
    name: "NoScript",
    inheritAttrs: !1,
    props: {
      ...E,
      title: String,
      body: Boolean,
      renderPriority: [String, Number],
    },
    setup: h((t, { slots: o }) => {
      var u;
      const i = { ...t },
        n = (((u = o.default) == null ? void 0 : u.call(o)) || [])
          .filter(({ children: a }) => a)
          .map(({ children: a }) => a)
          .join("");
      return n && (i.children = n), { noscript: [i] };
    }),
  }),
  Ot = m({
    name: "Link",
    inheritAttrs: !1,
    props: {
      ...E,
      as: String,
      crossorigin: String,
      disabled: Boolean,
      fetchpriority: String,
      href: String,
      hreflang: String,
      imagesizes: String,
      imagesrcset: String,
      integrity: String,
      media: String,
      prefetch: { type: Boolean, default: void 0 },
      referrerpolicy: String,
      rel: String,
      sizes: String,
      title: String,
      type: String,
      methods: String,
      target: String,
      body: Boolean,
      renderPriority: [String, Number],
    },
    setup: h((t) => ({ link: [t] })),
  }),
  yt = m({
    name: "Base",
    inheritAttrs: !1,
    props: { ...E, href: String, target: String },
    setup: h((t) => ({ base: t })),
  }),
  Lt = m({
    name: "Title",
    inheritAttrs: !1,
    setup: h((t, { slots: o }) => {
      var n, u, a;
      return {
        title:
          ((a =
            (u = (n = o.default) == null ? void 0 : n.call(o)) == null
              ? void 0
              : u[0]) == null
            ? void 0
            : a.children) || null,
      };
    }),
  }),
  At = m({
    name: "Meta",
    inheritAttrs: !1,
    props: {
      ...E,
      charset: String,
      content: String,
      httpEquiv: String,
      name: String,
      body: Boolean,
      renderPriority: [String, Number],
    },
    setup: h((t) => {
      const o = { ...t };
      return (
        o.httpEquiv && ((o["http-equiv"] = o.httpEquiv), delete o.httpEquiv),
        { meta: [o] }
      );
    }),
  }),
  It = m({
    name: "Style",
    inheritAttrs: !1,
    props: {
      ...E,
      type: String,
      media: String,
      nonce: String,
      title: String,
      scoped: { type: Boolean, default: void 0 },
      body: Boolean,
      renderPriority: [String, Number],
    },
    setup: h((t, { slots: o }) => {
      var u, a, _;
      const i = { ...t },
        n =
          (_ =
            (a = (u = o.default) == null ? void 0 : u.call(o)) == null
              ? void 0
              : a[0]) == null
            ? void 0
            : _.children;
      return n && (i.children = n), { style: [i] };
    }),
  }),
  Dt = m({
    name: "Head",
    inheritAttrs: !1,
    setup: (t, o) => () => {
      var i, n;
      return (n = (i = o.slots).default) == null ? void 0 : n.call(i);
    },
  }),
  Rt = m({
    name: "Html",
    inheritAttrs: !1,
    props: {
      ...E,
      manifest: String,
      version: String,
      xmlns: String,
      renderPriority: [String, Number],
    },
    setup: h((t) => ({ htmlAttrs: t }), !0),
  }),
  St = m({
    name: "Body",
    inheritAttrs: !1,
    props: { ...E, renderPriority: [String, Number] },
    setup: h((t) => ({ bodyAttrs: t }), !0),
  }),
  f = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        NoScript: Tt,
        Link: Ot,
        Base: yt,
        Title: Lt,
        Meta: At,
        Style: It,
        Head: Dt,
        Html: Rt,
        Body: St,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
r(() =>
  e(
    () => import("./entry.e50f0f50.js").then((t) => t.aJ),
    ["./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./ActivistCard.9fbe7622.js"),
    [
      "./ActivistCard.9fbe7622.js",
      "./SearchResults.vue_vue_type_style_index_0_scoped_fbfddc59_lang.8d17b183.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
      "./SearchResults.cf85b9d0.css",
      "./AppImage.9bc8cdcc.js",
      "./nuxt-img.6cd8cff3.js",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./AdultCard.48aac999.js"),
    [
      "./AdultCard.48aac999.js",
      "./SearchResults.vue_vue_type_style_index_0_scoped_fbfddc59_lang.8d17b183.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
      "./SearchResults.cf85b9d0.css",
      "./AppImage.9bc8cdcc.js",
      "./nuxt-img.6cd8cff3.js",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./AnimalSlider.fb242980.js"),
    [
      "./AnimalSlider.fb242980.js",
      "./AnimalSlider.vue_vue_type_style_index_0_scoped_4ed309ee_lang.0e89288c.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
      "./navigation.min.304073bc.js",
      "./navigation.079e38c4.css",
      "./AnimalSlider.f6244b5d.css",
      "./AnimalSliderCard.3d00e042.js",
      "./AnimalSliderCard.vue_vue_type_style_index_0_scoped_2bb4687e_lang.25a381c7.js",
      "./AnimalSliderCard.7bfa47f6.css",
      "./AppImage.9bc8cdcc.js",
      "./nuxt-img.6cd8cff3.js",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./AnimalSliderCard.3d00e042.js"),
    [
      "./AnimalSliderCard.3d00e042.js",
      "./AnimalSliderCard.vue_vue_type_style_index_0_scoped_2bb4687e_lang.25a381c7.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
      "./AnimalSliderCard.7bfa47f6.css",
      "./AppImage.9bc8cdcc.js",
      "./nuxt-img.6cd8cff3.js",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./entry.e50f0f50.js").then((t) => t.aL),
    ["./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./entry.e50f0f50.js").then((t) => t.aC),
    ["./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./entry.e50f0f50.js").then((t) => t.aB),
    ["./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./AppImage.9bc8cdcc.js"),
    [
      "./AppImage.9bc8cdcc.js",
      "./nuxt-img.6cd8cff3.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./entry.e50f0f50.js").then((t) => t.az),
    ["./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./entry.e50f0f50.js").then((t) => t.aK),
    ["./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./FilterSidebar.4302b82f.js"),
    [
      "./FilterSidebar.4302b82f.js",
      "./SearchResults.vue_vue_type_style_index_0_scoped_fbfddc59_lang.8d17b183.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
      "./SearchResults.cf85b9d0.css",
      "./Sidebar.a81ef872.js",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./ImageItem.7353df8b.js"),
    [
      "./ImageItem.7353df8b.js",
      "./LearnMoreBlock.vue_vue_type_style_index_0_scoped_bb3c97e0_lang.4d6f0884.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
      "./LearnMoreBlock.b08c497b.css",
      "./AppImage.9bc8cdcc.js",
      "./nuxt-img.6cd8cff3.js",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./InfoCard.9cb0375c.js"),
    [
      "./InfoCard.9cb0375c.js",
      "./InfoCard.vue_vue_type_style_index_0_scoped_b1c8dc52_lang.08b16729.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
      "./InfoCard.26090f6a.css",
      "./AppImage.9bc8cdcc.js",
      "./nuxt-img.6cd8cff3.js",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./LearnMoreBlock.1a73c92d.js"),
    [
      "./LearnMoreBlock.1a73c92d.js",
      "./LearnMoreBlock.vue_vue_type_style_index_0_scoped_bb3c97e0_lang.4d6f0884.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
      "./LearnMoreBlock.b08c497b.css",
      "./PageTitle.155ae597.js",
      "./PageSearch.vue_vue_type_style_index_0_scoped_99e80430_lang.a8536c95.js",
      "./PageSearch.cc210a0f.css",
      "./ImageItem.7353df8b.js",
      "./AppImage.9bc8cdcc.js",
      "./nuxt-img.6cd8cff3.js",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./LearnMoreCard.ed396117.js"),
    [
      "./LearnMoreCard.ed396117.js",
      "./SearchResults.vue_vue_type_style_index_0_scoped_fbfddc59_lang.8d17b183.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
      "./SearchResults.cf85b9d0.css",
      "./AppImage.9bc8cdcc.js",
      "./nuxt-img.6cd8cff3.js",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./MagazineCard.b0205bf6.js"),
    [
      "./MagazineCard.b0205bf6.js",
      "./SearchResults.vue_vue_type_style_index_0_scoped_fbfddc59_lang.8d17b183.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
      "./SearchResults.cf85b9d0.css",
      "./AppImage.9bc8cdcc.js",
      "./nuxt-img.6cd8cff3.js",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./entry.e50f0f50.js").then((t) => t.aF),
    ["./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./entry.e50f0f50.js").then((t) => t.aI),
    ["./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./entry.e50f0f50.js").then((t) => t.aN),
    ["./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./entry.e50f0f50.js").then((t) => t.aA),
    ["./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./PageArticle.9a99e4cf.js"),
    [
      "./PageArticle.9a99e4cf.js",
      "./PageArticle.vue_vue_type_style_index_0_scoped_d3e8b27d_lang.2510b67f.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
      "./PageArticle.a907c3df.css",
      "./AppImage.9bc8cdcc.js",
      "./nuxt-img.6cd8cff3.js",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./PageCard.b076015c.js"),
    [
      "./PageCard.b076015c.js",
      "./SearchResults.vue_vue_type_style_index_0_scoped_fbfddc59_lang.8d17b183.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
      "./SearchResults.cf85b9d0.css",
      "./AppImage.9bc8cdcc.js",
      "./nuxt-img.6cd8cff3.js",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./PageSearch.11fca8a7.js"),
    [
      "./PageSearch.11fca8a7.js",
      "./PageSearch.vue_vue_type_style_index_0_scoped_99e80430_lang.a8536c95.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
      "./PageSearch.cc210a0f.css",
      "./TagsList.91a9f417.js",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./PageTitle.155ae597.js"),
    [
      "./PageTitle.155ae597.js",
      "./PageSearch.vue_vue_type_style_index_0_scoped_99e80430_lang.a8536c95.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
      "./PageSearch.cc210a0f.css",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./RecipeSlider.0eaed929.js"),
    [
      "./RecipeSlider.0eaed929.js",
      "./RecipeSlider.vue_vue_type_style_index_0_scoped_23ef5c26_lang.99e026dc.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
      "./navigation.min.304073bc.js",
      "./navigation.079e38c4.css",
      "./RecipeSlider.1de5e8bf.css",
      "./RecipeSliderCard.ebe1b188.js",
      "./AppImage.9bc8cdcc.js",
      "./nuxt-img.6cd8cff3.js",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./RecipeSliderCard.ebe1b188.js"),
    [
      "./RecipeSliderCard.ebe1b188.js",
      "./RecipeSlider.vue_vue_type_style_index_0_scoped_23ef5c26_lang.99e026dc.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
      "./navigation.min.304073bc.js",
      "./navigation.079e38c4.css",
      "./RecipeSlider.1de5e8bf.css",
      "./AppImage.9bc8cdcc.js",
      "./nuxt-img.6cd8cff3.js",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./entry.e50f0f50.js").then((t) => t.aM),
    ["./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./SearchResults.515e03ca.js"),
    [
      "./SearchResults.515e03ca.js",
      "./SearchResults.vue_vue_type_style_index_0_scoped_fbfddc59_lang.8d17b183.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
      "./SearchResults.cf85b9d0.css",
      "./AnimalSliderCard.3d00e042.js",
      "./AnimalSliderCard.vue_vue_type_style_index_0_scoped_2bb4687e_lang.25a381c7.js",
      "./AnimalSliderCard.7bfa47f6.css",
      "./AppImage.9bc8cdcc.js",
      "./nuxt-img.6cd8cff3.js",
      "./LearnMoreCard.ed396117.js",
      "./MagazineCard.b0205bf6.js",
      "./AdultCard.48aac999.js",
      "./ActivistCard.9fbe7622.js",
      "./PageCard.b076015c.js",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./SearchResultsItem.f44c4a42.js"),
    [
      "./SearchResultsItem.f44c4a42.js",
      "./AppImage.9bc8cdcc.js",
      "./nuxt-img.6cd8cff3.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
      "./SearchResults.vue_vue_type_style_index_0_scoped_fbfddc59_lang.8d17b183.js",
      "./SearchResults.cf85b9d0.css",
      "./AnimalSlider.vue_vue_type_style_index_0_scoped_4ed309ee_lang.0e89288c.js",
      "./navigation.min.304073bc.js",
      "./navigation.079e38c4.css",
      "./AnimalSlider.f6244b5d.css",
      "./AnimalSliderCard.vue_vue_type_style_index_0_scoped_2bb4687e_lang.25a381c7.js",
      "./AnimalSliderCard.7bfa47f6.css",
      "./LearnMoreBlock.vue_vue_type_style_index_0_scoped_bb3c97e0_lang.4d6f0884.js",
      "./LearnMoreBlock.b08c497b.css",
      "./InfoCard.vue_vue_type_style_index_0_scoped_b1c8dc52_lang.08b16729.js",
      "./InfoCard.26090f6a.css",
      "./PageSearch.vue_vue_type_style_index_0_scoped_99e80430_lang.a8536c95.js",
      "./PageSearch.cc210a0f.css",
      "./PageArticle.vue_vue_type_style_index_0_scoped_d3e8b27d_lang.2510b67f.js",
      "./PageArticle.a907c3df.css",
      "./RecipeSlider.vue_vue_type_style_index_0_scoped_23ef5c26_lang.99e026dc.js",
      "./RecipeSlider.1de5e8bf.css",
      "./SourceListItem.vue_vue_type_style_index_0_scoped_764c6338_lang.767669ff.js",
      "./SourceListItem.c9ca6a57.css",
      "./TransitionExpand.vue_vue_type_style_index_0_scoped_ab5478b5_lang.c2805c90.js",
      "./TransitionExpand.358b7368.css",
      "./ContentDoc.e8eccf28.js",
      "./ContentQuery.9c156d7e.js",
      "./ContentList.7072a538.js",
      "./ContentSlot.e38eabf3.js",
      "./DocumentDrivenEmpty.e795f784.js",
      "./DocumentDrivenNotFound.76a147b1.js",
      "./Markdown.d042ba3f.js",
      "./ProseCode.a6213759.js",
      "./ProseCode.e63e49c6.css",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./Sidebar.a81ef872.js"),
    [
      "./Sidebar.a81ef872.js",
      "./SearchResults.vue_vue_type_style_index_0_scoped_fbfddc59_lang.8d17b183.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
      "./SearchResults.cf85b9d0.css",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./SocialHead.eb1a0180.js"),
    [
      "./SocialHead.eb1a0180.js",
      "./SourceListItem.vue_vue_type_style_index_0_scoped_764c6338_lang.767669ff.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
      "./SourceListItem.c9ca6a57.css",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./SourceListItem.ea0f1eee.js"),
    [
      "./SourceListItem.ea0f1eee.js",
      "./SourceListItem.vue_vue_type_style_index_0_scoped_764c6338_lang.767669ff.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
      "./SourceListItem.c9ca6a57.css",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./TagsList.91a9f417.js"),
    [
      "./TagsList.91a9f417.js",
      "./PageSearch.vue_vue_type_style_index_0_scoped_99e80430_lang.a8536c95.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
      "./PageSearch.cc210a0f.css",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./TransitionExpand.b7299dda.js"),
    [
      "./TransitionExpand.b7299dda.js",
      "./TransitionExpand.vue_vue_type_style_index_0_scoped_ab5478b5_lang.c2805c90.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
      "./TransitionExpand.358b7368.css",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./ContentDoc.e8eccf28.js"),
    [
      "./ContentDoc.e8eccf28.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
      "./ContentQuery.9c156d7e.js",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./ContentList.7072a538.js"),
    [
      "./ContentList.7072a538.js",
      "./ContentQuery.9c156d7e.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(() => Promise.resolve().then(() => bt), void 0, import.meta.url).then(
    (t) => t.default || t
  )
);
r(() =>
  e(
    () => import("./ContentQuery.9c156d7e.js"),
    [
      "./ContentQuery.9c156d7e.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./entry.e50f0f50.js").then((t) => t.aH),
    ["./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./entry.e50f0f50.js").then((t) => t.aG),
    ["./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./ContentSlot.e38eabf3.js"),
    [
      "./ContentSlot.e38eabf3.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./DocumentDrivenEmpty.e795f784.js"),
    [
      "./DocumentDrivenEmpty.e795f784.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./DocumentDrivenNotFound.76a147b1.js"),
    [
      "./DocumentDrivenNotFound.76a147b1.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./Markdown.d042ba3f.js"),
    [
      "./Markdown.d042ba3f.js",
      "./ContentSlot.e38eabf3.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./ProseA.284280fc.js"),
    ["./ProseA.284280fc.js", "./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./ProseBlockquote.56e267a6.js"),
    [
      "./ProseBlockquote.56e267a6.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./ProseCode.a6213759.js"),
    [
      "./ProseCode.a6213759.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
      "./ProseCode.e63e49c6.css",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./ProseCodeInline.6d38f7f1.js"),
    [
      "./ProseCodeInline.6d38f7f1.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./ProseEm.9c819506.js"),
    ["./ProseEm.9c819506.js", "./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./ProseH1.e17941d0.js"),
    ["./ProseH1.e17941d0.js", "./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./ProseH2.b5599258.js"),
    ["./ProseH2.b5599258.js", "./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./ProseH3.9b7dbfb1.js"),
    ["./ProseH3.9b7dbfb1.js", "./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./ProseH4.53f30bd9.js"),
    ["./ProseH4.53f30bd9.js", "./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./ProseH5.81f4e0d8.js"),
    ["./ProseH5.81f4e0d8.js", "./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./ProseH6.a0a3adff.js"),
    ["./ProseH6.a0a3adff.js", "./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./ProseHr.d1f1e9c2.js"),
    ["./ProseHr.d1f1e9c2.js", "./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./ProseImg.167d1a54.js"),
    ["./ProseImg.167d1a54.js", "./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./ProseLi.f516edb9.js"),
    ["./ProseLi.f516edb9.js", "./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./ProseOl.29347b0d.js"),
    ["./ProseOl.29347b0d.js", "./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./ProseP.1473a7b6.js"),
    ["./ProseP.1473a7b6.js", "./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./ProseStrong.4904f7d1.js"),
    [
      "./ProseStrong.4904f7d1.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./ProseTable.75f463e3.js"),
    ["./ProseTable.75f463e3.js", "./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./ProseTbody.c2adb8e0.js"),
    ["./ProseTbody.c2adb8e0.js", "./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./ProseTd.5b775248.js"),
    ["./ProseTd.5b775248.js", "./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./ProseTh.d9e6c6b5.js"),
    ["./ProseTh.d9e6c6b5.js", "./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./ProseThead.213bf9c6.js"),
    ["./ProseThead.213bf9c6.js", "./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./ProseTr.b73bb7cf.js"),
    ["./ProseTr.b73bb7cf.js", "./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./ProseUl.822ee9e2.js"),
    ["./ProseUl.822ee9e2.js", "./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(
    () => import("./welcome.7d02900d.js"),
    [
      "./welcome.7d02900d.js",
      "./entry.e50f0f50.js",
      "./entry.93a60c67.css",
      "./SearchResults.vue_vue_type_style_index_0_scoped_fbfddc59_lang.8d17b183.js",
      "./SearchResults.cf85b9d0.css",
      "./nuxt-img.6cd8cff3.js",
      "./AnimalSlider.vue_vue_type_style_index_0_scoped_4ed309ee_lang.0e89288c.js",
      "./navigation.min.304073bc.js",
      "./navigation.079e38c4.css",
      "./AnimalSlider.f6244b5d.css",
      "./AnimalSliderCard.vue_vue_type_style_index_0_scoped_2bb4687e_lang.25a381c7.js",
      "./AnimalSliderCard.7bfa47f6.css",
      "./LearnMoreBlock.vue_vue_type_style_index_0_scoped_bb3c97e0_lang.4d6f0884.js",
      "./LearnMoreBlock.b08c497b.css",
      "./InfoCard.vue_vue_type_style_index_0_scoped_b1c8dc52_lang.08b16729.js",
      "./InfoCard.26090f6a.css",
      "./PageSearch.vue_vue_type_style_index_0_scoped_99e80430_lang.a8536c95.js",
      "./PageSearch.cc210a0f.css",
      "./PageArticle.vue_vue_type_style_index_0_scoped_d3e8b27d_lang.2510b67f.js",
      "./PageArticle.a907c3df.css",
      "./RecipeSlider.vue_vue_type_style_index_0_scoped_23ef5c26_lang.99e026dc.js",
      "./RecipeSlider.1de5e8bf.css",
      "./SourceListItem.vue_vue_type_style_index_0_scoped_764c6338_lang.767669ff.js",
      "./SourceListItem.c9ca6a57.css",
      "./TransitionExpand.vue_vue_type_style_index_0_scoped_ab5478b5_lang.c2805c90.js",
      "./TransitionExpand.358b7368.css",
      "./ContentDoc.e8eccf28.js",
      "./ContentQuery.9c156d7e.js",
      "./ContentList.7072a538.js",
      "./ContentSlot.e38eabf3.js",
      "./DocumentDrivenEmpty.e795f784.js",
      "./DocumentDrivenNotFound.76a147b1.js",
      "./Markdown.d042ba3f.js",
      "./ProseCode.a6213759.js",
      "./ProseCode.e63e49c6.css",
    ],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(() => Promise.resolve().then(() => _t), void 0, import.meta.url).then(
    (t) => t.default || t
  )
);
r(() =>
  e(() => Promise.resolve().then(() => mt), void 0, import.meta.url).then(
    (t) => t.default || t
  )
);
r(() =>
  e(
    () => import("./entry.e50f0f50.js").then((t) => t.aE),
    ["./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(() => Promise.resolve().then(() => pt), void 0, import.meta.url).then(
    (t) => t.default || t
  )
);
r(() =>
  e(() => Promise.resolve().then(() => ft), void 0, import.meta.url).then(
    (t) => t.default || t
  )
);
r(() =>
  e(
    () => import("./entry.e50f0f50.js").then((t) => t.ay),
    ["./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(() => Promise.resolve().then(() => Et), void 0, import.meta.url).then(
    (t) => t.default || t
  )
);
r(() =>
  e(
    () => import("./nuxt-img.6cd8cff3.js").then((t) => t.n),
    ["./nuxt-img.6cd8cff3.js", "./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(() => Promise.resolve().then(() => ct), void 0, import.meta.url).then(
    (t) => t.default || t
  )
);
r(() =>
  e(
    () => import("./entry.e50f0f50.js").then((t) => t.aD),
    ["./entry.e50f0f50.js", "./entry.93a60c67.css"],
    import.meta.url
  ).then((t) => t.default || t)
);
r(() =>
  e(() => Promise.resolve().then(() => f), void 0, import.meta.url).then(
    (t) => t.NoScript
  )
);
r(() =>
  e(() => Promise.resolve().then(() => f), void 0, import.meta.url).then(
    (t) => t.Link
  )
);
r(() =>
  e(() => Promise.resolve().then(() => f), void 0, import.meta.url).then(
    (t) => t.Base
  )
);
r(() =>
  e(() => Promise.resolve().then(() => f), void 0, import.meta.url).then(
    (t) => t.Title
  )
);
r(() =>
  e(() => Promise.resolve().then(() => f), void 0, import.meta.url).then(
    (t) => t.Meta
  )
);
r(() =>
  e(() => Promise.resolve().then(() => f), void 0, import.meta.url).then(
    (t) => t.Style
  )
);
r(() =>
  e(() => Promise.resolve().then(() => f), void 0, import.meta.url).then(
    (t) => t.Head
  )
);
r(() =>
  e(() => Promise.resolve().then(() => f), void 0, import.meta.url).then(
    (t) => t.Html
  )
);
r(() =>
  e(() => Promise.resolve().then(() => f), void 0, import.meta.url).then(
    (t) => t.Body
  )
);
const Vt = m({
    name: "ContentNavigation",
    props: { query: { type: Object, required: !1, default: void 0 } },
    async setup(t) {
      const { query: o } = Y(t),
        i = v(() => {
          var u;
          return typeof ((u = o.value) == null ? void 0 : u.params) ==
            "function"
            ? o.value.params()
            : o.value;
        });
      if (!i.value && X("dd-navigation").value) {
        const { navigation: u } = Z();
        return { navigation: u };
      }
      const { data: n } = await tt(`content-navigation-${y(i.value)}`, () =>
        nt(i.value)
      );
      return { navigation: n };
    },
    render(t) {
      const o = et(),
        { navigation: i } = t,
        n = (_) => d(rt, { to: _._path }, () => _.title),
        u = (_, s) =>
          d(
            "ul",
            s ? { "data-level": s } : null,
            _.map((l) =>
              l.children
                ? d("li", null, [n(l), u(l.children, s + 1)])
                : d("li", null, n(l))
            )
          ),
        a = (_) => u(_, 0);
      return o != null && o.default
        ? o.default({ navigation: i, ...this.$attrs })
        : a(i);
    },
  }),
  bt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Vt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { bt as C, Xt as _ };
