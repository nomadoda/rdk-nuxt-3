import {
  A as h,
  m as g,
  e as v,
  q as k,
  o as p,
  I as d,
  O as u,
  ab as t,
  V as f,
  W as b,
  R as x,
  ac as y,
  ad as j,
  a7 as w,
} from "./entry.e50f0f50.js";
import { c as $, a as D } from "./urlTools.7e20410a.js";
import V from "./PageSearch.11fca8a7.js";
import I from "./PageTitle.155ae597.js";
import R from "./InfoCard.9cb0375c.js";
import { _ as E } from "./tik-tok.94263fee.js";
import "./PageSearch.vue_vue_type_style_index_0_scoped_99e80430_lang.a8536c95.js";
import "./TagsList.91a9f417.js";
import "./InfoCard.vue_vue_type_style_index_0_scoped_b1c8dc52_lang.08b16729.js";
import "./AppImage.9bc8cdcc.js";
import "./nuxt-img.6cd8cff3.js";
const A = h({
    data() {
      return {
        title: "Vego",
        preamble: null,
        metadescription: null,
        recipes: [],
      };
    },
    setup() {
      var r, i, s, c, o, n, l, a;
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
            (r = e.value) != null && r.title
              ? `${
                  (i = e.value) == null ? void 0 : i.title
                } | R\xE4dda Djuren-klubben`
              : "R\xE4dda Djuren-klubben",
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
                      (c = e.value) == null ? void 0 : c.title
                    } | R\xE4dda Djuren-klubben`
                  : "R\xE4dda Djuren-klubben",
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
                ((l = e.value) == null ? void 0 : l.metadescription) ||
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
  m = (e) => (y("data-v-751c0993"), (e = e()), j(), e),
  B = { key: 0, class: "page-vego" },
  N = m(() =>
    t("h2", { class: "text-center pb-4 text-2xl mt-6" }, "Alla vegorecept", -1)
  ),
  O = m(() =>
    t(
      "p",
      null,
      "H\xE4r har vi samlat alla v\xE5ra recept som du kan ta del av. Kika in hur enkelt det \xE4r att g\xF6ra en vego bolognese och korvgifflar. Vill du briljera med n\xE5got extra mumsigt till fikan s\xE5 kika in veganska wienerbr\xF6d, chokladtryffel och kolapaj med karamellmandlar!",
      -1
    )
  ),
  C = { class: "text-center" },
  H = m(() =>
    t(
      "div",
      { class: "social text-center" },
      [
        t(
          "p",
          null,
          "F\xF6lj R\xE4dda Djuren-klubben p\xE5 TikTok, h\xE4r tipsar vi ocks\xE5 om goda och enkla mellanm\xE5l!"
        ),
        t(
          "a",
          {
            class: "social__link",
            href: "https://www.tiktok.com/@raddadjurenklubben",
          },
          [t("img", { class: "icon", src: E })]
        ),
      ],
      -1
    )
  );
function S(e, _, r, i, s, c) {
  const o = V,
    n = I,
    l = R;
  return e.page
    ? (p(),
      d("div", B, [
        u(o, { class: "search", links: e.page.links }, null, 8, ["links"]),
        u(n, { class: "title", title: e.page.title }, null, 8, ["title"]),
        N,
        O,
        t("section", C, [
          t("ul", null, [
            (p(!0),
            d(
              f,
              null,
              b(
                e.recipes,
                (a) => (
                  p(),
                  d("li", { key: a._path }, [
                    u(
                      l,
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
        H,
      ]))
    : x("", !0);
}
const J = w(A, [
  ["render", S],
  ["__scopeId", "data-v-751c0993"],
]);
export { J as default };
