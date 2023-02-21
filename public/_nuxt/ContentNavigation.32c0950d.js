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
} from "./entry.0b49aa71.js";
import { h as u, e as w, j as C } from "./query.67962173.js";
import { _ as $ } from "./nuxt-link.3942cc84.js";
import { w as l, s as x, u as N, a as S } from "./utils.925ea3fb.js";
import "./MobileMenu.vue.8fc46b84.js";
import "./index.681eb04d.js";
import "./SearchResults.vue.29261df6.js";
import "./AppImage.vue.1420cc05.js";
import "./AnimalSlider.vue.ea597142.js";
import "./AnimalSliderCard.vue.50dc6bf2.js";
import "./AppLink.vue.4b20f2a7.js";
import "./LearnMoreBlock.vue.46ad24ec.js";
import "./InfoCard.vue.fb683a85.js";
import "./PageTitle.vue.97aebc27.js";
import "./SearchInput.vue.52b1c04f.js";
import "./PageArticle.vue.2e06c360.js";
import "./PageSearch.vue.5a8e761a.js";
import "./RecipeSlider.vue.37bcc148.js";
import "./SourceListItem.vue.8a479e9e.js";
import "./TransitionExpand.vue.0dfc1b2d.js";
/* empty css                      */ import "./swiper-slide.7974b596.js";
import "./navigation.min.faca0c8c.js";
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
        () => import("./client-db.b5f62e63.js"),
        [
          "./client-db.b5f62e63.js",
          "./entry.0b49aa71.js",
          "./entry.91abefef.css",
          "./utils.925ea3fb.js",
          "./query.67962173.js",
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
