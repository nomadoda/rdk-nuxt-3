import {
  d,
  o as e,
  c as p,
  w as s,
  a as t,
  b as a,
  e as o,
  f as n,
  _ as m,
  g as x,
} from "./entry.bc63e51a.js";
import { _ as u } from "./nuxt-link.b84c39ea.js";
import { _ as h } from "./SearchInput.ae3910f0.js";
import { _ as f } from "./LearnMoreBlock.e93724f5.js";
import "./SearchInput.vue.750aef33.js";
import "./LearnMoreBlock.vue.18936011.js";
import "./query.02b33be6.js";
import "./utils.0216015b.js";
import "./PageTitle.a79fb585.js";
import "./PageTitle.vue.14c34ae6.js";
import "./AppImage.1a4d91cf.js";
import "./AppImage.vue.fa386efd.js";
import "./client-only.9e138b79.js";
const b = d({ props: { error: { type: Object, default: () => {} } } }),
  k = { class: "container" },
  v = { class: "max-w-xl pt-20 mx-auto" },
  w = { key: 0, class: "max-w-xl text-center" },
  y = t("h1", { class: "text-4xl pb-10" }, "Oj, den sidan hittade vi inte", -1),
  B = [y],
  N = { key: 1, class: "max-w-xl text-center" },
  V = t("h1", { class: "text-4xl pb-10" }, "Ett fel har inträffat.", -1),
  $ = t(
    "p",
    null,
    "Kontakta gärna webb@djurensratt.se och berätta vad som hänt.",
    -1
  ),
  g = [V, $],
  j = { class: "max-w-xl text-center" };
function C(r, E, O, T, K, q) {
  const _ = u,
    c = h,
    l = f,
    i = m;
  return (
    e(),
    p(i, null, {
      default: s(() => [
        t("div", k, [
          t("div", v, [
            r.error.statusCode === 404
              ? (e(), a("div", w, B))
              : (e(), a("div", N, g)),
            t("div", j, [
              t("p", null, [
                o("Vill du "),
                n(
                  _,
                  { class: "text-black", to: "/" },
                  { default: s(() => [o("tillbaka till förstasidan ")]), _: 1 }
                ),
                o(
                  "eller är du ute efter något annat? Testa att söka här eller bläddra bland artiklarna"
                ),
              ]),
            ]),
          ]),
          t("div", null, [n(c, { class: "pb-20" }), n(l)]),
        ]),
      ]),
      _: 1,
    })
  );
}
const S = x(b, [["render", C]]);
export { S as default };
