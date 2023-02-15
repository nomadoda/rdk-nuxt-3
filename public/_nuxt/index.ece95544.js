import {
  A as _,
  m as l,
  e as k,
  q as p,
  o as m,
  I as f,
  O as c,
  c as b,
  R as d,
  a7 as g,
} from "./entry.e50f0f50.js";
import { c as y } from "./urlTools.7e20410a.js";
import h from "./PageSearch.11fca8a7.js";
import v from "./AnimalSlider.fb242980.js";
import x from "./LearnMoreBlock.1a73c92d.js";
import "./PageSearch.vue_vue_type_style_index_0_scoped_99e80430_lang.a8536c95.js";
import "./TagsList.91a9f417.js";
import "./AnimalSlider.vue_vue_type_style_index_0_scoped_4ed309ee_lang.0e89288c.js";
import "./navigation.min.304073bc.js";
import "./AnimalSliderCard.3d00e042.js";
import "./AnimalSliderCard.vue_vue_type_style_index_0_scoped_2bb4687e_lang.25a381c7.js";
import "./AppImage.9bc8cdcc.js";
import "./nuxt-img.6cd8cff3.js";
import "./LearnMoreBlock.vue_vue_type_style_index_0_scoped_bb3c97e0_lang.4d6f0884.js";
import "./PageTitle.155ae597.js";
import "./ImageItem.7353df8b.js";
const j = _({
    data() {
      return {
        moreLink: {
          url: "/sok?contentType=Fakta om djur",
          linkText: "Se alla djur",
        },
      };
    },
    setup() {
      var a, o, r, i, t, n;
      const { data: e } = l(
          async () => p("portal-page/djurfakta").findOne(),
          "$bGYB3Aqdvs"
        ),
        { data: s } = l(
          async () => p("djurfakta").limit(5).find(),
          "$PhAhELZIzM"
        );
      return (
        k({
          title:
            (a = e.value) != null && a.title
              ? `${
                  (o = e.value) == null ? void 0 : o.title
                } | R\xE4dda Djuren-klubben`
              : "R\xE4dda Djuren-klubben",
          link: [{ hid: "canonical", rel: "canonical", href: y("") }],
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
                (r = e.value) != null && r.title
                  ? `${
                      (i = e.value) == null ? void 0 : i.title
                    } | R\xE4dda Djuren-klubben`
                  : "R\xE4dda Djuren-klubben",
            },
            {
              hid: "og:description",
              property: "og:description",
              content:
                ((t = e.value) == null ? void 0 : t.metadescription) ||
                ((n = e.value) == null ? void 0 : n.preamble) ||
                "",
            },
          ],
        }),
        { page: e, animals: s }
      );
    },
  }),
  $ = { key: 0, class: "page-front" };
function E(e, s, a, o, r, i) {
  const t = h,
    n = v,
    u = x;
  return e.page
    ? (m(),
      f("div", $, [
        c(
          t,
          { class: "search", links: e.page.links, moreLink: e.moreLink },
          null,
          8,
          ["links", "moreLink"]
        ),
        e.animals
          ? (m(),
            b(n, { key: 0, class: "my-8", animals: e.animals }, null, 8, [
              "animals",
            ]))
          : d("", !0),
        c(u),
      ]))
    : d("", !0);
}
const H = g(j, [
  ["render", E],
  ["__scopeId", "data-v-a8abfeee"],
]);
export { H as default };
