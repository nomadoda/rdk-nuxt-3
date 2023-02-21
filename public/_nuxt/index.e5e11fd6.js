import {
  d as h,
  x as g,
  j as v,
  o as c,
  b as d,
  f as m,
  a as t,
  N as f,
  O as b,
  L as y,
  J as x,
  K as j,
  g as w,
} from "./entry.bc63e51a.js";
import { q as k } from "./query.02b33be6.js";
import { c as $, a as D } from "./urlTools.cc793b8f.js";
import { _ as V } from "./PageSearch.47a8baba.js";
import { _ as I } from "./PageTitle.a79fb585.js";
import { _ as N } from "./InfoCard.f70abe04.js";
import { _ as R } from "./tik-tok.742cad21.js";
import "./utils.0216015b.js";
import "./PageSearch.vue.293e2aff.js";
import "./SearchInput.ae3910f0.js";
import "./SearchInput.vue.750aef33.js";
import "./AppLink.ef6e30e4.js";
import "./AppLink.vue.55029462.js";
import "./nuxt-link.b84c39ea.js";
import "./PageTitle.vue.14c34ae6.js";
import "./InfoCard.vue.249e50fd.js";
import "./AppImage.1a4d91cf.js";
import "./AppImage.vue.fa386efd.js";
import "./client-only.9e138b79.js";
const B = h({
    data() {
      return {
        title: "Vego",
        preamble: null,
        metadescription: null,
        recipes: [],
      };
    },
    setup() {
      var i, l, s, p, o, n, r, a;
      const { data: e } = g(
          async () => k("portal-page/vego").findOne(),
          "$aBKMAuy5hh"
        ),
        { data: _ } = g(
          async () => k("vego/recept").only(["title", "_path", "image"]).find(),
          "$7oOVOeYDpH"
        );
      return (
        v({
          title:
            (i = e.value) != null && i.title
              ? `${
                  (l = e.value) == null ? void 0 : l.title
                } | Rädda Djuren-klubben`
              : "Rädda Djuren-klubben",
          link: [
            { hid: "canonical", rel: "canonical", href: $("/vego/recept") },
          ],
          meta: [
            {
              hid: "og:url",
              property: "og:url",
              content: "https://www.raddadjuren.se/vego/recept",
            },
            {
              hid: "og:title",
              property: "og:title",
              content:
                (s = e.value) != null && s.title
                  ? `${
                      (p = e.value) == null ? void 0 : p.title
                    } | Rädda Djuren-klubben`
                  : "Rädda Djuren-klubben",
            },
            {
              hid: "description",
              property: "description",
              content:
                ((o = e.value) == null ? void 0 : o.metadescription) ||
                ((n = e.value) == null ? void 0 : n.preamble) ||
                "",
            },
            {
              hid: "og:description",
              property: "og:description",
              content:
                ((r = e.value) == null ? void 0 : r.metadescription) ||
                ((a = e.value) == null ? void 0 : a.preamble) ||
                "",
            },
          ],
        }),
        { page: e, recipes: _ }
      );
    },
    methods: { stripIndex: D },
  }),
  u = (e) => (x("data-v-751c0993"), (e = e()), j(), e),
  O = { key: 0, class: "page-vego" },
  A = u(() =>
    t("h2", { class: "text-center pb-4 text-2xl mt-6" }, "Alla vegorecept", -1)
  ),
  C = u(() =>
    t(
      "p",
      null,
      "Här har vi samlat alla våra recept som du kan ta del av. Kika in hur enkelt det är att göra en vego bolognese och korvgifflar. Vill du briljera med något extra mumsigt till fikan så kika in veganska wienerbröd, chokladtryffel och kolapaj med karamellmandlar!",
      -1
    )
  ),
  H = { class: "text-center" },
  K = u(() =>
    t(
      "div",
      { class: "social text-center" },
      [
        t(
          "p",
          null,
          "Följ Rädda Djuren-klubben på TikTok, här tipsar vi också om goda och enkla mellanmål!"
        ),
        t(
          "a",
          {
            class: "social__link",
            href: "https://www.tiktok.com/@raddadjurenklubben",
          },
          [t("img", { class: "icon", src: R })]
        ),
      ],
      -1
    )
  );
function S(e, _, i, l, s, p) {
  const o = V,
    n = I,
    r = N;
  return e.page
    ? (c(),
      d("div", O, [
        m(o, { class: "search", links: e.page.links }, null, 8, ["links"]),
        m(n, { class: "title", title: e.page.title }, null, 8, ["title"]),
        A,
        C,
        t("section", H, [
          t("ul", null, [
            (c(!0),
            d(
              f,
              null,
              b(
                e.recipes,
                (a) => (
                  c(),
                  d("li", { key: a._path }, [
                    m(
                      r,
                      { title: a.title, link: a._path, image: a.image },
                      null,
                      8,
                      ["title", "link", "image"]
                    ),
                  ])
                )
              ),
              128
            )),
          ]),
        ]),
        K,
      ]))
    : y("", !0);
}
const oe = w(B, [
  ["render", S],
  ["__scopeId", "data-v-751c0993"],
]);
export { oe as default };
