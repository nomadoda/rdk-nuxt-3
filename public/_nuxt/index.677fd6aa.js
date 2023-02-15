import {
  A as y,
  m as u,
  e as $,
  q as _,
  o,
  I as s,
  O as r,
  ab as a,
  X as k,
  V as f,
  W as x,
  R as j,
  u as w,
  ac as D,
  ad as R,
  a7 as V,
} from "./entry.e50f0f50.js";
import { c as I, a as v } from "./urlTools.7e20410a.js";
import E from "./PageSearch.11fca8a7.js";
import B from "./PageTitle.155ae597.js";
import C from "./InfoCard.9cb0375c.js";
import { _ as N } from "./tik-tok.94263fee.js";
import "./PageSearch.vue_vue_type_style_index_0_scoped_99e80430_lang.a8536c95.js";
import "./TagsList.91a9f417.js";
import "./InfoCard.vue_vue_type_style_index_0_scoped_b1c8dc52_lang.08b16729.js";
import "./AppImage.9bc8cdcc.js";
import "./nuxt-img.6cd8cff3.js";
const S = y({
    setup() {
      var p, c, d, i, l, n, t, b;
      const { data: e } = u(
          async () => _("portal-page/vego").findOne(),
          "$AniiTL14Uy"
        ),
        { data: g } = u(
          async () => _("vego/tips").only(["title", "_path", "image"]).find(),
          "$BoRnZQOaCW"
        ),
        { data: h } = u(
          async () => _("vego/recept").only(["title", "_path", "image"]).find(),
          "$FTpVmY7WLo"
        );
      return (
        $({
          title:
            (p = e.value) != null && p.title
              ? `${
                  (c = e.value) == null ? void 0 : c.title
                } | R\xE4dda Djuren-klubben`
              : "R\xE4dda Djuren-klubben",
          link: [{ hid: "canonical", rel: "canonical", href: I("/vego") }],
          meta: [
            {
              hid: "og:url",
              property: "og:url",
              content: "https://www.raddadjuren.se/vego",
            },
            {
              hid: "og:title",
              property: "og:title",
              content:
                (d = e.value) != null && d.title
                  ? `${
                      (i = e.value) == null ? void 0 : i.title
                    } | R\xE4dda Djuren-klubben`
                  : "R\xE4dda Djuren-klubben",
            },
            {
              hid: "description",
              property: "description",
              content:
                ((l = e.value) == null ? void 0 : l.metadescription) ||
                ((n = e.value) == null ? void 0 : n.preamble) ||
                "",
            },
            {
              hid: "og:description",
              property: "og:description",
              content:
                ((t = e.value) == null ? void 0 : t.metadescription) ||
                ((b = e.value) == null ? void 0 : b.preamble) ||
                "",
            },
          ],
        }),
        { page: e, articles: g, recipes: h }
      );
    },
    methods: { stripIndex: v },
  }),
  m = (e) => (D("data-v-2bb1208b"), (e = e()), R(), e),
  T = { key: 0, class: "page-vego" },
  A = m(() =>
    a("h2", { class: "text-center pb-4 text-2xl" }, "Vegorecept", -1)
  ),
  F = { class: "textfield" },
  L = { class: "text-center" },
  O = m(() =>
    a("h2", { class: "text-center pb-4 text-2xl" }, "Vegoartiklar", -1)
  ),
  W = { class: "extratextfield" },
  q = { class: "text-center" },
  U = m(() =>
    a(
      "div",
      { class: "social text-center" },
      [
        a(
          "p",
          null,
          "F\xF6lj R\xE4dda Djuren-klubben p\xE5 TikTok, h\xE4r tipsar vi ocks\xE5 om goda och enkla mellanm\xE5l!"
        ),
        a(
          "a",
          {
            class: "social__link",
            href: "https://www.tiktok.com/@raddadjurenklubben",
          },
          [a("img", { class: "icon", src: N })]
        ),
      ],
      -1
    )
  );
function H(e, g, h, p, c, d) {
  const i = E,
    l = B,
    n = C;
  return e.page
    ? (o(),
      s("div", T, [
        r(i, { class: "search", links: e.page.links }, null, 8, ["links"]),
        r(
          l,
          { class: "title", title: e.page.title, preamble: e.page.preamble },
          null,
          8,
          ["title", "preamble"]
        ),
        A,
        a("p", F, k(e.page.textfield), 1),
        a("section", L, [
          a("ul", null, [
            (o(!0),
            s(
              f,
              null,
              x(
                e.recipes,
                (t) => (
                  o(),
                  s("li", { key: t._path }, [
                    r(
                      n,
                      { title: t.title, link: t._path, image: t.image },
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
        O,
        a("p", W, k(e.page.extratextfield), 1),
        a("section", q, [
          a("ul", null, [
            (o(!0),
            s(
              f,
              null,
              x(
                e.articles,
                (t) => (
                  o(),
                  s("li", { key: t._path }, [
                    r(
                      n,
                      {
                        title: t.title,
                        link: w(v)(t._path || ""),
                        image: t.image,
                      },
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
        U,
      ]))
    : j("", !0);
}
const te = V(S, [
  ["render", H],
  ["__scopeId", "data-v-2bb1208b"],
]);
export { te as default };
