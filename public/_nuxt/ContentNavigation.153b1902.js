import {
  q as c,
  r as d,
  d as f,
  k as _,
  t as g,
  s as h,
  v,
  x as y,
  l as b,
  p as m,
} from "./entry.bc63e51a.js";
import { h as u, e as w, j as C } from "./query.02b33be6.js";
import { _ as $ } from "./nuxt-link.b84c39ea.js";
import { w as l, s as x, u as N, a as S } from "./utils.0216015b.js";
import "./MobileMenu.vue.90effd74.js";
import "./index.23a876b0.js";
import "./SearchResults.vue.17c18944.js";
import "./AppImage.vue.fa386efd.js";
import "./AnimalSlider.vue.163ce5e8.js";
import "./AnimalSliderCard.vue.9c24a93c.js";
import "./AppLink.vue.55029462.js";
import "./LearnMoreBlock.vue.18936011.js";
import "./InfoCard.vue.249e50fd.js";
import "./PageTitle.vue.14c34ae6.js";
import "./SearchInput.vue.750aef33.js";
import "./PageArticle.vue.e748534d.js";
import "./PageSearch.vue.293e2aff.js";
import "./RecipeSlider.vue.29866077.js";
import "./SourceListItem.vue.c41b3d71.js";
import "./TransitionExpand.vue.07423dbf.js";
/* empty css                      */ import "./swiper-slide.cabfc1a1.js";
import "./navigation.min.a9fb0167.js";
const P = async (n) => {
  var p, r;
  const { content: e } = c().public,
    t =
      typeof (n == null ? void 0 : n.params) == "function"
        ? n.params()
        : n || {};
  e.locales.length &&
    (((r = (p = t.where) == null ? void 0 : p.find((o) => o._locale)) != null &&
      r._locale) ||
      ((t.where = t.where || []), t.where.push({ _locale: e.defaultLocale })));
  const i = e.experimental.stripQueryParameters
    ? l(`/navigation/${`${u(t)}.${e.integrity}`}/${w(t)}.json`)
    : l(`/navigation/${u(t)}.${e.integrity}.json`);
  if (x())
    return (
      await d(
        () => import("./client-db.979d0e67.js"),
        [
          "./client-db.979d0e67.js",
          "./entry.bc63e51a.js",
          "./entry.91abefef.css",
          "./utils.0216015b.js",
          "./query.02b33be6.js",
          "./index.a6ef77ff.js",
        ],
        import.meta.url
      ).then((o) => o.generateNavigation)
    )(t);
  const a = await $fetch(i, {
    method: "GET",
    responseType: "json",
    params: e.experimental.stripQueryParameters
      ? void 0
      : { _params: C(t), previewToken: N("previewToken").value },
  });
  if (typeof a == "string" && a.startsWith("<!DOCTYPE html>"))
    throw new Error("Not found");
  return a;
};
f({
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
const X = _({
  name: "ContentNavigation",
  props: { query: { type: Object, required: !1, default: void 0 } },
  async setup(n) {
    const { query: e } = g(n),
      t = h(() => {
        var a;
        return typeof ((a = e.value) == null ? void 0 : a.params) == "function"
          ? e.value.params()
          : e.value;
      });
    if (!t.value && v("dd-navigation").value) {
      const { navigation: a } = S();
      return { navigation: a };
    }
    const { data: i } = await y(`content-navigation-${u(t.value)}`, () =>
      P(t.value)
    );
    return { navigation: i };
  },
  render(n) {
    const e = b(),
      { navigation: t } = n,
      i = (r) => m($, { to: r._path }, () => r.title),
      a = (r, s) =>
        m(
          "ul",
          s ? { "data-level": s } : null,
          r.map((o) =>
            o.children
              ? m("li", null, [i(o), a(o.children, s + 1)])
              : m("li", null, i(o))
          )
        ),
      p = (r) => a(r, 0);
    return e != null && e.default
      ? e.default({ navigation: t, ...this.$attrs })
      : p(t);
  },
});
export { X as default };
