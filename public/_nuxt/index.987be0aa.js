import {
  d as y,
  x as m,
  j,
  o as a,
  b as i,
  f as l,
  a as o,
  M as k,
  N as f,
  O as v,
  L as $,
  u as w,
  J as D,
  K as I,
  g as R,
} from "./entry.0b49aa71.js";
import { q as u } from "./query.67962173.js";
import { c as V, a as x } from "./urlTools.cc793b8f.js";
import { _ as N } from "./PageSearch.843504e2.js";
import { _ as B } from "./PageTitle.281ef5de.js";
import { _ as C } from "./InfoCard.9ec6d7f2.js";
import { _ as L } from "./tik-tok.bf25f339.js";
import "./utils.925ea3fb.js";
import "./PageSearch.vue.5a8e761a.js";
import "./SearchInput.aed2bd52.js";
import "./SearchInput.vue.52b1c04f.js";
import "./AppLink.b4785ee2.js";
import "./AppLink.vue.4b20f2a7.js";
import "./nuxt-link.3942cc84.js";
import "./PageTitle.vue.97aebc27.js";
import "./InfoCard.vue.fb683a85.js";
import "./AppImage.4fc7032c.js";
import "./AppImage.vue.1420cc05.js";
import "./client-only.9fc77d65.js";
const S = y({
    setup() {
      var p, c, d, s, r, n, t, b;
      const { data: e } = m(
          async () => u("portal-page/vego").findOne(),
          "$AniiTL14Uy"
        ),
        { data: g } = m(
          async () => u("vego/tips").only(["title", "_path", "image"]).find(),
          "$BoRnZQOaCW"
        ),
        { data: h } = m(
          async () => u("vego/recept").only(["title", "_path", "image"]).find(),
          "$FTpVmY7WLo"
        );
      return (
        j({
          title:
            (p = e.value) != null && p.title
              ? `${
                  (c = e.value) == null ? void 0 : c.title
                } | Rädda Djuren-klubben`
              : "Rädda Djuren-klubben",
          link: [{ hid: "canonical", rel: "canonical", href: V("/vego") }],
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
                      (s = e.value) == null ? void 0 : s.title
                    } | Rädda Djuren-klubben`
                  : "Rädda Djuren-klubben",
            },
            {
              hid: "description",
              property: "description",
              content:
                ((r = e.value) == null ? void 0 : r.metadescription) ||
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
    methods: { stripIndex: x },
  }),
  _ = (e) => (D("data-v-2bb1208b"), (e = e()), I(), e),
  T = { key: 0, class: "page-vego" },
  F = _(() =>
    o("h2", { class: "text-center pb-4 text-2xl" }, "Vegorecept", -1)
  ),
  O = { class: "textfield" },
  q = { class: "text-center" },
  A = _(() =>
    o("h2", { class: "text-center pb-4 text-2xl" }, "Vegoartiklar", -1)
  ),
  U = { class: "extratextfield" },
  W = { class: "text-center" },
  E = _(() =>
    o(
      "div",
      { class: "social text-center" },
      [
        o(
          "p",
          null,
          "Följ Rädda Djuren-klubben på TikTok, här tipsar vi också om goda och enkla mellanmål!"
        ),
        o(
          "a",
          {
            class: "social__link",
            href: "https://www.tiktok.com/@raddadjurenklubben",
          },
          [o("img", { class: "icon", src: L })]
        ),
      ],
      -1
    )
  );
function H(e, g, h, p, c, d) {
  const s = N,
    r = B,
    n = C;
  return e.page
    ? (a(),
      i("div", T, [
        l(s, { class: "search", links: e.page.links }, null, 8, ["links"]),
        l(
          r,
          { class: "title", title: e.page.title, preamble: e.page.preamble },
          null,
          8,
          ["title", "preamble"]
        ),
        F,
        o("p", O, k(e.page.textfield), 1),
        o("section", q, [
          o("ul", null, [
            (a(!0),
            i(
              f,
              null,
              v(
                e.recipes,
                (t) => (
                  a(),
                  i("li", { key: t._path }, [
                    l(
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
        A,
        o("p", U, k(e.page.extratextfield), 1),
        o("section", W, [
          o("ul", null, [
            (a(!0),
            i(
              f,
              null,
              v(
                e.articles,
                (t) => (
                  a(),
                  i("li", { key: t._path }, [
                    l(
                      n,
                      {
                        title: t.title,
                        link: ("stripIndex" in e ? e.stripIndex : w(x))(
                          t._path || ""
                        ),
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
        E,
      ]))
    : $("", !0);
}
const pe = R(S, [
  ["render", H],
  ["__scopeId", "data-v-2bb1208b"],
]);
export { pe as default };
