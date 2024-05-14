import { _ as y } from "./AppImage.vue.1420cc05.js";
import {
  A as h,
  s as r,
  V as o,
  k as S,
  D as m,
  j as p,
  E as z,
  p as _,
  o as b,
  c as w,
  W as k,
  g as $,
} from "./entry.0b49aa71.js";
const B = () => h().$img,
  I = {
    src: { type: String, required: !0 },
    format: { type: String, default: void 0 },
    quality: { type: [Number, String], default: void 0 },
    background: { type: String, default: void 0 },
    fit: { type: String, default: void 0 },
    modifiers: { type: Object, default: void 0 },
    preset: { type: String, default: void 0 },
    provider: { type: String, default: void 0 },
    sizes: { type: [Object, String], default: void 0 },
    preload: { type: Boolean, default: void 0 },
    width: { type: [String, Number], default: void 0 },
    height: { type: [String, Number], default: void 0 },
    alt: { type: String, default: void 0 },
    referrerpolicy: { type: String, default: void 0 },
    usemap: { type: String, default: void 0 },
    longdesc: { type: String, default: void 0 },
    ismap: { type: Boolean, default: void 0 },
    loading: { type: String, default: void 0 },
    crossorigin: {
      type: [Boolean, String],
      default: void 0,
      validator: (e) =>
        ["anonymous", "use-credentials", "", !0, !1].includes(e),
    },
    decoding: {
      type: String,
      default: void 0,
      validator: (e) => ["async", "auto", "sync"].includes(e),
    },
  },
  N = (e) => {
    const d = r(() => ({ provider: e.provider, preset: e.preset })),
      s = r(() => ({
        width: o(e.width),
        height: o(e.height),
        alt: e.alt,
        referrerpolicy: e.referrerpolicy,
        usemap: e.usemap,
        longdesc: e.longdesc,
        ismap: e.ismap,
        crossorigin:
          e.crossorigin === !0 ? "anonymous" : e.crossorigin || void 0,
        loading: e.loading,
        decoding: e.decoding,
      })),
      i = r(() => ({
        ...e.modifiers,
        width: o(e.width),
        height: o(e.height),
        format: e.format,
        quality: e.quality,
        background: e.background,
        fit: e.fit,
      }));
    return { options: d, attrs: s, modifiers: i };
  },
  q = {
    ...I,
    placeholder: { type: [Boolean, String, Number, Array], default: void 0 },
  },
  A = S({
    name: "NuxtImg",
    props: q,
    setup: (e, d) => {
      const s = B(),
        i = N(e),
        u = m(!1),
        a = r(() =>
          s.getSizes(e.src, {
            ...i.options.value,
            sizes: e.sizes,
            modifiers: {
              ...i.modifiers.value,
              width: o(e.width),
              height: o(e.height),
            },
          })
        ),
        l = r(() => {
          const t = i.attrs.value;
          return (
            e.sizes && ((t.sizes = a.value.sizes), (t.srcset = a.value.srcset)),
            t
          );
        }),
        c = r(() => {
          let t = e.placeholder;
          if ((t === "" && (t = !0), !t || u.value)) return !1;
          if (typeof t == "string") return t;
          const n = Array.isArray(t)
            ? t
            : typeof t == "number"
            ? [t, t]
            : [10, 10];
          return s(
            e.src,
            {
              ...i.modifiers.value,
              width: n[0],
              height: n[1],
              quality: n[2] || 50,
            },
            i.options.value
          );
        }),
        g = r(() =>
          e.sizes ? a.value.src : s(e.src, i.modifiers.value, i.options.value)
        ),
        f = r(() => (c.value ? c.value : g.value));
      if (e.preload) {
        const t = Object.values(a.value).every((n) => n);
        p({
          link: [
            {
              rel: "preload",
              as: "image",
              ...(t
                ? {
                    href: a.value.src,
                    imagesizes: a.value.sizes,
                    imagesrcset: a.value.srcset,
                  }
                : { href: f.value }),
            },
          ],
        });
      }
      const v = m(null);
      return (
        z(() => {
          if (c.value) {
            const t = new Image();
            (t.src = g.value),
              (t.onload = () => {
                (v.value.src = g.value), (u.value = !0);
              });
          }
        }),
        () =>
          _("img", {
            ref: v,
            key: f.value,
            src: f.value,
            ...l.value,
            ...d.attrs,
          })
      );
    },
  });
function j(e, d, s, i, u, a) {
  const l = A;
  return (
    b(),
    w(
      l,
      k(
        {
          provider: "cloudinary",
          src: e.publicId,
          modifiers: e.modifiers,
          sizes: e.sizes,
        },
        e.$attrs
      ),
      null,
      16,
      ["src", "modifiers", "sizes"]
    )
  );
}
const P = $(y, [["render", j]]);
export { P as _ };
