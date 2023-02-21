import { _ as z } from "./nuxt-link.b84c39ea.js";
import {
  _ as N,
  a as O,
  b as G,
  c as H,
  d as T,
  e as q,
  f as E,
} from "./MobileMenu.vue.90effd74.js";
import { _ as L } from "./AppLink.ef6e30e4.js";
import {
  o as n,
  b as l,
  L as k,
  M as _,
  f as s,
  S,
  J as y,
  K as j,
  a as t,
  g as d,
  c as C,
  w as a,
  z as v,
  e as f,
  W as K,
  a8 as A,
  N as I,
  O as R,
  G as V,
} from "./entry.bc63e51a.js";
import { _ as D } from "./client-only.9e138b79.js";
import U from "./ContentRenderer.32ebd34d.js";
import { _ as F } from "./SearchInput.ae3910f0.js";
import "./query.02b33be6.js";
import "./utils.0216015b.js";
import "./swiper-slide.cabfc1a1.js";
import "./AppLink.vue.55029462.js";
import "./ContentRendererMarkdown.291b27e1.js";
import "./index.a6ef77ff.js";
import "./index.23a876b0.js";
import "./SearchInput.vue.750aef33.js";
const P = "" + new URL("logo-djurens-ratt.a9f4314e.svg", import.meta.url).href,
  J = (e) => (y("data-v-d7e4a59e"), (e = e()), j(), e),
  W = { key: 0, href: "https://www.djurensratt.se" },
  Q = J(() => t("img", { class: "logo", src: P }, null, -1)),
  X = [Q],
  Y = { key: 1, class: "pb-10 text-center" },
  Z = ["href"];
function ee(e, i, r, c, m, u) {
  const o = U;
  return e.block
    ? (n(),
      l(
        "div",
        {
          key: 0,
          class: S([
            "meta-box flex-1 bg-white rounded-lg p-10 flex flex-col",
            e.variant,
          ]),
        },
        [
          e.variant === "djurensratt" ? (n(), l("a", W, X)) : k("", !0),
          e.block.displayTitle
            ? (n(), l("h3", Y, _(e.block.title), 1))
            : k("", !0),
          s(o, { class: "mb-4 content text-base", value: e.block }, null, 8, [
            "value",
          ]),
          e.block.link
            ? (n(),
              l(
                "a",
                {
                  key: 2,
                  class: S([
                    "btn outlined mt-auto mb-0 self-center no-underline",
                    {
                      purple: e.variant === "adult",
                      blue: e.variant === "djurensratt",
                      green: e.variant === "rdk",
                    },
                  ]),
                  href: e.block.link.url,
                },
                _(e.block.link.linkText),
                11,
                Z
              ))
            : k("", !0),
        ],
        2
      ))
    : k("", !0);
}
const te = d(N, [
  ["render", ee],
  ["__scopeId", "data-v-d7e4a59e"],
]);
function se(e, i, r, c, m, u) {
  const o = te;
  return (
    n(),
    l("div", null, [
      t("section", null, [
        s(o, { slug: "radda-djuren-klubben", variant: "rdk" }),
        s(o, { slug: "footer-djurens-ratt", variant: "djurensratt" }),
        s(o, { slug: "foralder-eller-pedagog", variant: "adult" }),
      ]),
    ])
  );
}
const oe = d(O, [
    ["render", se],
    ["__scopeId", "data-v-c2f9b15c"],
  ]),
  ne = "" + new URL("cookie.a223e591.svg", import.meta.url).href,
  le = (e) => (y("data-v-23d424c2"), (e = e()), j(), e),
  ae = {
    key: 0,
    class: "cookie-consent flex-col flex justify-evenly flex-wrap z-5",
    role: "dialog",
  },
  re = le(() =>
    t("img", { class: "w-10 h-10 self-center icon", src: ne }, null, -1)
  ),
  ie = { class: "flex flex-col py-6" },
  ce = { class: "text-sm font-medium mb-2 cookie-consent-message" },
  _e = { class: "cookie-consent-info text-xs" },
  de = { class: "cookie-consent-buttons flex flex-row" },
  me = { class: "cookie-consent-reject flex-nowrap mr-3", type: "button" },
  ue = { class: "cookie-consent-compliance flex-nowrap", type: "button" };
function pe(e, i, r, c, m, u) {
  return (
    n(),
    C(
      A,
      { name: e.transition },
      {
        default: a(() => [
          e.show
            ? (n(),
              l("div", ae, [
                re,
                t("section", ie, [
                  v(
                    e.$slots,
                    "message",
                    {},
                    () => [
                      t("span", ce, _(e.message), 1),
                      v(e.$slots, "info", {}, void 0, !0),
                      t("span", _e, [
                        f(_(e.info), 1),
                        v(
                          e.$slots,
                          "link",
                          {},
                          () => [
                            t(
                              "a",
                              K(
                                {
                                  class:
                                    "cookie-consent-link text-xs text-green-dark",
                                },
                                { href: e.href, target: e.target, rel: e.rel },
                                { role: "button" }
                              ),
                              "  " + _(e.linkLabel),
                              17
                            ),
                          ],
                          !0
                        ),
                      ]),
                    ],
                    !0
                  ),
                ]),
                t("section", de, [
                  t(
                    "section",
                    {
                      onClick:
                        i[0] || (i[0] = (...o) => e.reject && e.reject(...o)),
                    },
                    [
                      v(
                        e.$slots,
                        "button",
                        {},
                        () => [t("button", me, _(e.rejectLabel), 1)],
                        !0
                      ),
                    ]
                  ),
                  t(
                    "section",
                    {
                      onClick:
                        i[1] || (i[1] = (...o) => e.accept && e.accept(...o)),
                    },
                    [
                      v(
                        e.$slots,
                        "button",
                        {},
                        () => [t("button", ue, _(e.consentLabel), 1)],
                        !0
                      ),
                    ]
                  ),
                ]),
              ]))
            : k("", !0),
        ]),
        _: 3,
      },
      8,
      ["name"]
    )
  );
}
const he = d(G, [
    ["render", pe],
    ["__scopeId", "data-v-23d424c2"],
  ]),
  fe = "" + new URL("logo-rdk-new.b7b19d4c.png", import.meta.url).href,
  be = "" + new URL("90-konto.af7d9aa0.svg", import.meta.url).href,
  ge = "" + new URL("tryggt-givande.1a0cf367.svg", import.meta.url).href,
  b = (e) => (y("data-v-f22af457"), (e = e()), j(), e),
  $e = {
    class:
      "site-footer bg-green-dark text-white w-screen pb-12 px-10 text-base",
  },
  ve = {
    class:
      "first-block flex flex-col justify-center mt-10 md_flex-row md_justify-around md_mx-0 md_my-20",
  },
  ke = { class: "container__info" },
  xe = b(() =>
    t("img", { class: "icon h-14 md_h-16 mb-10", src: fe }, null, -1)
  ),
  we = { class: "flex flex-col my-10" },
  ye = { class: "text-center md_text-left" },
  je = b(() =>
    t(
      "div",
      { class: "flex justify-center h-12 w-full gap-10 mb-10" },
      [
        t("img", { class: "icon", src: be }),
        t("img", { class: "icon", src: ge }),
      ],
      -1
    )
  ),
  Le = { class: "w-full" },
  Ie = b(() =>
    t("h3", { class: "font-bold mb-9" }, "Stöd vårt arbete för djuren", -1)
  ),
  Re = b(() =>
    t(
      "button",
      { class: "btn rounded bg-peach py-5 px-8 mb-10" },
      "Gå med i klubben",
      -1
    )
  ),
  Se = {
    class:
      "second-block w-full border-white border-solid border-r-0 border-l-0 border-t border-b mb-10 md_border-none md_absolute md_bottom-20 md_p-0 md_mb-20",
  },
  Be = {
    class:
      "social flex justify-around py-10 md_justify-center md_my-10 md_-ml-10",
  },
  Ve = ["href"],
  ze = ["src"],
  Ce = {
    class:
      "third-block border-white border-solid border-b pb-10 md_border-white md_border-solid md_border-t md_border-b md_flex md_justify-evenly md_py-20",
  },
  De = { class: "container__first mb-10" },
  Ue = b(() => t("h3", { class: "font-bold mb-4" }, "Kontakta oss", -1)),
  Me = { class: "container__middle mb-10" },
  Ne = b(() => t("h3", { class: "font-bold mb-4" }, "Snabblänkar", -1)),
  Oe = { class: "flex flex-col" },
  Ge = { class: "container__last" },
  He = b(() => t("h3", { class: "font-bold mb-4" }, "Besök gärna", -1)),
  Te = { class: "flex flex-col" },
  qe = b(() =>
    t(
      "div",
      { class: "text-center my-10 md_mb-20 md_mt-60" },
      [
        t(
          "p",
          null,
          "Allt innehåll © 2023 Rädda Djuren-klubben om inte annat anges."
        ),
      ],
      -1
    )
  );
function Ee(e, i, r, c, m, u) {
  const o = U,
    p = he,
    $ = D,
    g = L;
  return (
    n(),
    l("div", $e, [
      s(
        o,
        {
          class: "footer-image icon overflow-hidden -mx-10",
          value: e.imgBlock,
        },
        null,
        8,
        ["value"]
      ),
      s($, null, { default: a(() => [s(p)]), _: 1 }),
      t("div", ve, [
        t("div", ke, [
          xe,
          s(o, { class: "max-w-lg", value: e.infoBlock }, null, 8, ["value"]),
          t("ul", we, [
            t("li", null, [
              s(
                g,
                {
                  class: "link p-0",
                  href: "https://www.raddadjuren.se/vuxen-eller-pedagog/om-radda-djuren-klubben",
                },
                { default: a(() => [f("Om Rädda Djuren-klubben")]), _: 1 }
              ),
            ]),
          ]),
        ]),
        t("div", ye, [
          je,
          t("div", Le, [
            Ie,
            s(
              g,
              {
                class: "link",
                href: "https://interact.djurensratt.se/ge-medlemskap/raddadjuren",
              },
              { default: a(() => [Re]), _: 1 }
            ),
          ]),
        ]),
      ]),
      t("div", Se, [
        t("div", Be, [
          (n(!0),
          l(
            I,
            null,
            R(
              e.socialmedia,
              (h, w) => (
                n(),
                l(
                  "a",
                  { class: "social__link h-10 m-4 w-10", key: w, href: h.url },
                  [t("img", { class: "icon", src: h.img }, null, 8, ze)],
                  8,
                  Ve
                )
              )
            ),
            128
          )),
        ]),
      ]),
      t("div", Ce, [
        t("div", De, [
          Ue,
          s(o, { class: "adress", value: e.addressBlock }, null, 8, ["value"]),
        ]),
        t("div", Me, [
          Ne,
          t("ul", Oe, [
            (n(!0),
            l(
              I,
              null,
              R(
                e.quicklinks,
                (h, w) => (
                  n(),
                  l("li", { key: w }, [
                    s(
                      g,
                      { class: "link", href: h.url },
                      { default: a(() => [f(_(h.label), 1)]), _: 2 },
                      1032,
                      ["href"]
                    ),
                  ])
                )
              ),
              128
            )),
          ]),
        ]),
        t("div", Ge, [
          He,
          t("ul", Te, [
            (n(!0),
            l(
              I,
              null,
              R(
                e.visitlinks,
                (h, w) => (
                  n(),
                  l("li", { key: w }, [
                    s(
                      g,
                      { class: "link", href: h.url },
                      { default: a(() => [f(_(h.label), 1)]), _: 2 },
                      1032,
                      ["href"]
                    ),
                  ])
                )
              ),
              128
            )),
          ]),
        ]),
      ]),
      qe,
    ])
  );
}
const Ke = d(H, [
    ["render", Ee],
    ["__scopeId", "data-v-f22af457"],
  ]),
  Ae = { class: "sm_flex-1 my-2 sm_my-0 flex items-center" },
  Fe = ["src"];
function Pe(e, i, r, c, m, u) {
  const o = L;
  return (
    n(),
    C(
      o,
      {
        class:
          "navigation-item pb-2 sm_pb-1 px-4 flex flex-col items-center justify-center text-sm font-bold text-center rounded-lg transform hover_scale-105",
        href: e.href,
      },
      {
        default: a(() => [
          t("div", Ae, [
            t(
              "img",
              {
                class: S(["icon w-12 sm_w-9 h-12 sm_h-9", e.iconVariant]),
                src: e.icon,
              },
              null,
              10,
              Fe
            ),
          ]),
          t("p", null, _(e.label), 1),
        ]),
        _: 1,
      },
      8,
      ["href"]
    )
  );
}
const M = d(T, [
    ["render", Pe],
    ["__scopeId", "data-v-d9e3917e"],
  ]),
  Je = { class: "relative xl_static text-white", role: "navigation" },
  We = {
    class: "mx-auto w-full max-w-screen-md flex justify-center space-x-6",
  };
function Qe(e, i) {
  const r = M,
    c = z;
  return (
    n(),
    l("nav", Je, [
      t("ul", We, [
        t("li", null, [
          s(r, {
            class: "bg-green",
            label: "Djurfakta",
            href: "/",
            icon: "/images/whale.svg",
          }),
        ]),
        t("li", null, [
          s(r, {
            class: "bg-pink",
            label: "Lär dig mer",
            href: "/lar-dig-mer",
            icon: "/images/learn-more-chick.svg",
          }),
        ]),
        t("li", null, [
          s(r, {
            class: "bg-peach",
            label: "Hjälp djuren",
            href: "/hjalp-djuren",
            icon: "/images/help-animals-hands.svg",
          }),
        ]),
        t("li", null, [
          s(r, {
            class: "bg-green-dark",
            label: "Vego",
            href: "/vego",
            icon: "/images/vego-recipe-cake.svg",
          }),
        ]),
        t("li", null, [
          s(r, {
            class: "bg-blue",
            label: "Gå med i klubben",
            href: "https://interact.djurensratt.se/ge-medlemskap/raddadjuren",
            icon: "/images/become-member-piglet.svg",
            iconVariant: "piglet",
          }),
        ]),
      ]),
      s(
        c,
        {
          class:
            "absolute top-0 right-0 -mt-16 md_mt-0 xl_mt-32 block py-3 px-4 text-xs font-bold bg-purple-dark rounded-l-lg z-40",
          to: "/vuxen-eller-pedagog",
        },
        { default: a(() => [f("Vuxen?")]), _: 1 }
      ),
    ])
  );
}
const Xe = {},
  Ye = d(Xe, [["render", Qe]]),
  Ze = {
    class:
      "my-8 flex flex-col xl_flex-row space-y-8 xl_space-y-0 xl_space-x-16 xl_justify-between xl_container",
  },
  et = t(
    "h1",
    { class: "font-headline text-3xl lg_text-4xl" },
    "Rädda Djuren-klubben",
    -1
  ),
  tt = t(
    "p",
    { class: "hidden sm_block md_text-lg lg_text-xl" },
    "Fakta om djuren och deras liv",
    -1
  );
function st(e, i) {
  const r = z,
    c = Ye;
  return (
    n(),
    l("div", Ze, [
      s(
        r,
        { class: "text-white text-center xl_text-left", to: "/" },
        { default: a(() => [et, tt]), _: 1 }
      ),
      s(c, { class: "hidden sm_block" }),
    ])
  );
}
const ot = {},
  nt = d(ot, [["render", st]]),
  lt =
    "" + new URL("membership-premier-2021.4a56e970.png", import.meta.url).href,
  at = "" + new URL("membership-2.199a698a.png", import.meta.url).href,
  rt = "" + new URL("membership-3.af053989.jpg", import.meta.url).href,
  x = (e) => (y("data-v-986567ab"), (e = e()), j(), e),
  it = { class: "membership" },
  ct = x(() =>
    t("div", { class: "membership__image" }, [t("img", { src: lt })], -1)
  ),
  _t = x(() =>
    t("div", { class: "membership__image" }, [t("img", { src: at })], -1)
  ),
  dt = x(() =>
    t(
      "div",
      { class: "membership__image membership__image--full" },
      [t("img", { src: rt })],
      -1
    )
  ),
  mt = { class: "membership__info" },
  ut = { class: "membership__info-text" },
  pt = x(() => t("h2", null, "Ge bort ett medlemskap", -1)),
  ht = x(() => t("p", null, "5 tidningar per år + en välkomstpresent 🎁", -1)),
  ft = x(() => t("p", null, "Vi får en starkare röst 🐮💪", -1));
function bt(e, i, r, c, m, u) {
  const o = V("swiper-slide"),
    p = V("swiper"),
    $ = D,
    g = L;
  return (
    n(),
    l("section", it, [
      s($, null, {
        default: a(() => [
          s(
            p,
            {
              class: "membership__slider",
              modules: e.modules,
              "slides-per-view": 1,
              pagination: !0,
            },
            {
              default: a(() => [
                s(o, null, { default: a(() => [ct]), _: 1 }),
                s(o, null, { default: a(() => [_t]), _: 1 }),
                s(o, null, { default: a(() => [dt]), _: 1 }),
              ]),
              _: 1,
            },
            8,
            ["modules"]
          ),
        ]),
        _: 1,
      }),
      t("div", mt, [
        t("div", ut, [
          pt,
          ht,
          ft,
          s(
            g,
            { class: "membership__action btn", href: e.readLink.url },
            { default: a(() => [f(_(e.readLink.linkText), 1)]), _: 1 },
            8,
            ["href"]
          ),
        ]),
      ]),
    ])
  );
}
const gt = d(q, [
    ["render", bt],
    ["__scopeId", "data-v-986567ab"],
  ]),
  B = (e) => (y("data-v-c44424b5"), (e = e()), j(), e),
  $t = { class: "fixed inset-0 pointer-events-none" },
  vt = ["aria-label"],
  kt = { key: 0, class: "w-8 h-8", viewBox: "0 0 20 20", fill: "currentColor" },
  xt = B(() =>
    t(
      "path",
      {
        "fill-rule": "evenodd",
        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
        "clip-rule": "evenodd",
      },
      null,
      -1
    )
  ),
  wt = [xt],
  yt = { key: 1, class: "w-8 h-8", viewBox: "0 0 20 20", fill: "currentColor" },
  jt = B(() =>
    t(
      "path",
      {
        "fill-rule": "evenodd",
        d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
        "clip-rule": "evenodd",
      },
      null,
      -1
    )
  ),
  Lt = [jt],
  It = {
    key: 0,
    class:
      "py-8 w-full h-full bg-blue-turquoise pointer-events-auto overflow-y-auto overscroll-none z-10",
  },
  Rt = { class: "container text-center" },
  St = B(() =>
    t(
      "h1",
      { class: "font-headline text-3xl lg_text-4xl text-white" },
      "Rädda Djuren-klubben",
      -1
    )
  ),
  Bt = { class: "text-white mt-navigation", role: "navigation" },
  Vt = { class: "-m-1 flex flex-wrap" },
  zt = { class: "p-1 w-1o2" },
  Ct = { class: "p-1 w-1o2" },
  Dt = { class: "p-1 w-1o2" },
  Ut = { class: "p-1 w-1o2" },
  Mt = { class: "p-1 w-full" },
  Nt = { class: "p-1 w-1o2" };
function Ot(e, i, r, c, m, u) {
  const o = F,
    p = M,
    $ = L;
  return (
    n(),
    l("div", $t, [
      t(
        "button",
        {
          class:
            "mb-8 mr-4 w-16 h-16 absolute bottom-0 right-0 bg-blue-turquoise-dark bg-opacity-75 rounded-full text-white flex items-center justify-center pointer-events-auto p-0 z-10",
          "aria-label": e.label,
          onClick: i[0] || (i[0] = (g) => (e.isOpen = !e.isOpen)),
        },
        [e.isOpen ? (n(), l("svg", kt, wt)) : (n(), l("svg", yt, Lt))],
        8,
        vt
      ),
      e.isOpen
        ? (n(),
          l("aside", It, [
            t("div", Rt, [
              St,
              s(o),
              t("nav", Bt, [
                t("ul", Vt, [
                  t("li", zt, [
                    s(p, {
                      class: "bg-green min-h-navigation-item",
                      label: "Djurfakta",
                      href: "/",
                      icon: "/images/whale.svg",
                    }),
                  ]),
                  t("li", Ct, [
                    s(p, {
                      class: "bg-pink min-h-navigation-item",
                      label: "Lär dig mer",
                      href: "/lar-dig-mer",
                      icon: "/images/learn-more-chick.svg",
                    }),
                  ]),
                  t("li", Dt, [
                    s(p, {
                      class: "bg-peach min-h-navigation-item",
                      label: "Hjälp djuren",
                      href: "/hjalp-djuren",
                      icon: "/images/help-animals-hands.svg",
                      iconVariant: "hands",
                    }),
                  ]),
                  t("li", Ut, [
                    s(p, {
                      class: "bg-green-dark min-h-navigation-item",
                      label: "Vego",
                      href: "/vego",
                      icon: "/images/vego-recipe-cake.svg",
                    }),
                  ]),
                  t("li", Mt, [
                    s(
                      $,
                      {
                        class: "p-4 block w-full bg-blue uppercase rounded-lg",
                        href: "https://interact.djurensratt.se/ge-medlemskap/raddadjuren",
                      },
                      {
                        default: a(() => [f("GÖR SKILLNAD & BLI MEDLEM")]),
                        _: 1,
                      }
                    ),
                  ]),
                  t("li", Nt, [
                    s(
                      $,
                      {
                        class:
                          "p-2 block w-full bg-purple-dark text-xs font-bold rounded-lg",
                        href: "/vuxen-eller-pedagog",
                      },
                      { default: a(() => [f("Pedagog eller förälder?")]), _: 1 }
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]))
        : k("", !0),
    ])
  );
}
const Gt = d(E, [
    ["render", Ot],
    ["__scopeId", "data-v-c44424b5"],
  ]),
  Ht = { class: "container mx-auto" };
function Tt(e, i) {
  const r = nt,
    c = gt,
    m = oe,
    u = Ke,
    o = Gt;
  return (
    n(),
    l("div", null, [
      s(r),
      t("div", Ht, [v(e.$slots, "default"), s(c), s(m)]),
      s(u),
      s(o, { class: "sm_hidden" }),
    ])
  );
}
const qt = {},
  ns = d(qt, [["render", Tt]]);
export { ns as default };
