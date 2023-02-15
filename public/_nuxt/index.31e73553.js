import {
  A as h,
  m as _,
  e as k,
  q as g,
  o as c,
  I as d,
  O as u,
  ab as r,
  V as f,
  W as x,
  R as y,
  u as j,
  ac as $,
  ad as D,
  a7 as E,
} from "./entry.e50f0f50.js";
import { c as I, a as v } from "./urlTools.7e20410a.js";
import R from "./PageSearch.11fca8a7.js";
import w from "./PageTitle.155ae597.js";
import A from "./InfoCard.9cb0375c.js";
import "./PageSearch.vue_vue_type_style_index_0_scoped_99e80430_lang.a8536c95.js";
import "./TagsList.91a9f417.js";
import "./InfoCard.vue_vue_type_style_index_0_scoped_b1c8dc52_lang.08b16729.js";
import "./AppImage.9bc8cdcc.js";
import "./nuxt-img.6cd8cff3.js";
const N = h({
    data() {
      return {
        title: "Vego",
        preamble: null,
        metadescription: null,
        articles: [],
      };
    },
    setup() {
      var s, i, l, p, a, n, o, t;
      const { data: e } = _(
          async () => g("portal-page/vego").findOne(),
          "$1jp563mNAA"
        ),
        { data: m } = _(
          async () => g("vego/tips").only(["title", "_path", "image"]).find(),
          "$YRJ3EwY2Db"
        );
      return (
        k({
          title:
            (s = e.value) != null && s.title
              ? `${
                  (i = e.value) == null ? void 0 : i.title
                } | R\xE4dda Djuren-klubben`
              : "R\xE4dda Djuren-klubben",
          link: [{ hid: "canonical", rel: "canonical", href: I("/vego/tips") }],
          meta: [
            {
              hid: "og:url",
              property: "og:url",
              content: "https://www.raddadjuren.se/vego/tips",
            },
            {
              hid: "og:title",
              property: "og:title",
              content:
                (l = e.value) != null && l.title
                  ? `${
                      (p = e.value) == null ? void 0 : p.title
                    } | R\xE4dda Djuren-klubben`
                  : "R\xE4dda Djuren-klubben",
            },
            {
              hid: "description",
              property: "description",
              content:
                ((a = e.value) == null ? void 0 : a.metadescription) ||
                ((n = e.value) == null ? void 0 : n.preamble) ||
                "",
            },
            {
              hid: "og:description",
              property: "og:description",
              content:
                ((o = e.value) == null ? void 0 : o.metadescription) ||
                ((t = e.value) == null ? void 0 : t.preamble) ||
                "",
            },
          ],
        }),
        { page: e, articles: m }
      );
    },
    methods: { stripIndex: v },
  }),
  b = (e) => ($("data-v-1b76e08b"), (e = e()), D(), e),
  V = { key: 0, class: "page-vego" },
  B = b(() =>
    r(
      "h2",
      { class: "text-center pb-4 text-2xl mt-6" },
      "Alla vegotips & artiklar",
      -1
    )
  ),
  C = b(() =>
    r(
      "p",
      null,
      "Kanh\xE4nda att du k\xE4nner ett barn som vill testa mer vego och du \xF6nskar tips, recept & r\xE5d n\xE4r det kommer till barn och vegokost. H\xE4r har vi samlat en bunt artiklar f\xF6r dig att l\xE4sa, s\xE5 att det ska bli l\xE4tt att v\xE4lja vego f\xF6r b\xE5de vuxna och barn, unga som \xE4ldre djurv\xE4nner!",
      -1
    )
  ),
  S = { class: "text-center" };
function q(e, m, s, i, l, p) {
  const a = R,
    n = w,
    o = A;
  return e.page
    ? (c(),
      d("div", V, [
        u(a, { class: "search", links: e.page.links }, null, 8, ["links"]),
        u(n, { class: "title", title: e.page.title }, null, 8, ["title"]),
        B,
        C,
        r("section", S, [
          r("ul", null, [
            (c(!0),
            d(
              f,
              null,
              x(
                e.articles,
                (t) => (
                  c(),
                  d("li", { key: t._path }, [
                    u(
                      o,
                      { title: t.title, link: j(v)(t._path), image: t.image },
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
      ]))
    : y("", !0);
}
const G = E(N, [
  ["render", q],
  ["__scopeId", "data-v-1b76e08b"],
]);
export { G as default };
