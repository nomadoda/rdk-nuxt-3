import {
  G as v,
  o as t,
  b as p,
  f as c,
  w as k,
  c as f,
  N as y,
  O as $,
  L as _,
  g as b,
  d as w,
  x as h,
  j,
  D as x,
  E as L,
} from "./entry.0b49aa71.js";
import { q as g } from "./query.67962173.js";
import { s as M, c as D } from "./urlTools.cc793b8f.js";
import { _ as R } from "./PageSearch.843504e2.js";
import { _ as B } from "./AnimalSlider.vue.ea597142.js";
import { _ as C } from "./AnimalSliderCard.6fedc47f.js";
import { _ as q } from "./client-only.9fc77d65.js";
import { _ as A } from "./LearnMoreBlock.8fe0159c.js";
import { _ as I } from "./nuxt-link.3942cc84.js";
import "./utils.925ea3fb.js";
import "./PageSearch.vue.5a8e761a.js";
import "./SearchInput.aed2bd52.js";
import "./SearchInput.vue.52b1c04f.js";
import "./AppLink.b4785ee2.js";
import "./AppLink.vue.4b20f2a7.js";
import "./swiper-slide.7974b596.js";
import "./navigation.min.faca0c8c.js";
import "./AnimalSliderCard.vue.50dc6bf2.js";
import "./AppImage.4fc7032c.js";
import "./AppImage.vue.1420cc05.js";
import "./LearnMoreBlock.vue.46ad24ec.js";
import "./PageTitle.281ef5de.js";
import "./PageTitle.vue.97aebc27.js";
const N = { class: "relative min-h-slider flex items-center" };
function E(e, l, n, u, d, m) {
  const o = C,
    a = v("swiper-slide"),
    r = v("swiper"),
    s = q;
  return (
    t(),
    p("div", N, [
      c(s, null, {
        default: k(() => [
          e.animals.length > 0
            ? (t(),
              f(
                r,
                {
                  key: 0,
                  modules: e.modules,
                  "slides-per-view": 1.2,
                  "space-between": 16,
                  "centered-slides": !0,
                  loop: !0,
                  breakpoints: e.breakpoints,
                  navigation: !0,
                },
                {
                  default: k(() => [
                    (t(!0),
                    p(
                      y,
                      null,
                      $(
                        e.animals,
                        (i) => (
                          t(),
                          f(
                            a,
                            { key: i._id },
                            {
                              default: k(() => [
                                c(o, { class: "h-full", animal: i }, null, 8, [
                                  "animal",
                                ]),
                              ]),
                              _: 2,
                            },
                            1024
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                  _: 1,
                },
                8,
                ["modules", "slides-per-view", "breakpoints"]
              ))
            : _("", !0),
        ]),
        _: 1,
      }),
    ])
  );
}
const F = b(B, [
    ["render", E],
    ["__scopeId", "data-v-4ed309ee"],
  ]),
  T = async (e) => {
    const l = await e
      .where({
        _dir: {
          $in: [
            "djurfakta",
            "lar-dig-mer",
            "hjalp-djuren",
            "vuxen-eller-pedagog",
            "vego",
            "klubbnytt",
            "pages",
          ],
        },
      })
      .find();
    return new Map(
      l.map((n) => [n._dir === "pages" ? M(n._path) : n._path, n])
    );
  },
  G = () => {
    const e = x(!1);
    return (
      L(() => {
        e.value = !0;
      }),
      e
    );
  },
  O = w({
    data() {
      return {
        moreLink: {
          url: "/sok?contentType=Fakta om djur",
          linkText: "Se alla djur",
        },
      };
    },
    setup() {
      var d, m, o, a, r, s;
      const { data: e } = h(
          async () => g("portal-page/djurfakta").findOne(),
          "$bGYB3Aqdvs"
        ),
        { data: l } = h(
          async () => g("djurfakta").limit(5).find(),
          "$PhAhELZIzM"
        ),
        { data: n } = h(
          () => T(g()).then((i) => Array.from(i.keys())),
          "$c78pl4Twxq"
        ),
        u = G();
      return (
        j({
          title:
            (d = e.value) != null && d.title
              ? `${
                  (m = e.value) == null ? void 0 : m.title
                } | Rädda Djuren-klubben`
              : "Rädda Djuren-klubben",
          link: [{ hid: "canonical", rel: "canonical", href: D("") }],
          meta: [
            {
              hid: "og:url",
              property: "og:url",
              content: "https://www.raddadjuren.se",
            },
            {
              hid: "og:title",
              property: "og:title",
              content:
                (o = e.value) != null && o.title
                  ? `${
                      (a = e.value) == null ? void 0 : a.title
                    } | Rädda Djuren-klubben`
                  : "Rädda Djuren-klubben",
            },
            {
              hid: "og:description",
              property: "og:description",
              content:
                ((r = e.value) == null ? void 0 : r.metadescription) ||
                ((s = e.value) == null ? void 0 : s.preamble) ||
                "",
            },
          ],
        }),
        { page: e, animals: l, routes: n, isMounted: u }
      );
    },
  }),
  P = { key: 0, class: "page-front" },
  V = { key: 1, hidden: "" };
function z(e, l, n, u, d, m) {
  const o = R,
    a = F,
    r = A,
    s = I;
  return e.page
    ? (t(),
      p("div", P, [
        c(
          o,
          { class: "search", links: e.page.links, moreLink: e.moreLink },
          null,
          8,
          ["links", "moreLink"]
        ),
        e.animals
          ? (t(),
            f(a, { key: 0, class: "my-8", animals: e.animals }, null, 8, [
              "animals",
            ]))
          : _("", !0),
        c(r),
        e.isMounted
          ? _("", !0)
          : (t(),
            p("div", V, [
              (t(!0),
              p(
                y,
                null,
                $(e.routes, (i) => (t(), f(s, { to: i }, null, 8, ["to"]))),
                256
              )),
            ])),
      ]))
    : _("", !0);
}
const _e = b(O, [
  ["render", z],
  ["__scopeId", "data-v-0698d94a"],
]);
export { _e as default };
