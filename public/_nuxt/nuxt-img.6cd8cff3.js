import {
  A as h,
  G as S,
  l as a,
  a1 as s,
  f as p,
  F as f,
  e as b,
  a2 as w,
  j as z,
} from "./entry.e50f0f50.js";
const q = h({
    inheritAttrs: !1,
    props: {
      publicId: { type: String, required: !0 },
      dpr: { type: String, default: "auto" },
      crop: { type: String, default: "lfill" },
      gravity: { type: String, default: "faces" },
      responsive: {
        type: String,
        default: null,
        validator: (e) => ["width"].includes(e),
      },
    },
    computed: {
      modifiers() {
        return { c: this.crop, dpr: this.dpr, gravity: this.gravity };
      },
      sizes() {
        return this.responsive === "width"
          ? "xs:100vw sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw 3xl:100vw"
          : null;
      },
    },
  }),
  _ = () => S().$img,
  x = {
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
  I = (e) => {
    const o = a(() => ({ provider: e.provider, preset: e.preset })),
      n = a(() => ({
        width: s(e.width),
        height: s(e.height),
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
      i = a(() => ({
        ...e.modifiers,
        width: s(e.width),
        height: s(e.height),
        format: e.format,
        quality: e.quality,
        background: e.background,
        fit: e.fit,
      }));
    return { options: o, attrs: n, modifiers: i };
  },
  m = {
    ...x,
    placeholder: { type: [Boolean, String, Number, Array], default: void 0 },
  },
  N = p({
    name: "NuxtImg",
    props: m,
    setup: (e, o) => {
      const n = _(),
        i = I(e),
        g = f(!1),
        r = a(() =>
          n.getSizes(e.src, {
            ...i.options.value,
            sizes: e.sizes,
            modifiers: {
              ...i.modifiers.value,
              width: s(e.width),
              height: s(e.height),
            },
          })
        ),
        y = a(() => {
          const t = i.attrs.value;
          return (
            e.sizes && ((t.sizes = r.value.sizes), (t.srcset = r.value.srcset)),
            t
          );
        }),
        u = a(() => {
          let t = e.placeholder;
          if ((t === "" && (t = !0), !t || g.value)) return !1;
          if (typeof t == "string") return t;
          const l = Array.isArray(t)
            ? t
            : typeof t == "number"
            ? [t, t]
            : [10, 10];
          return n(
            e.src,
            {
              ...i.modifiers.value,
              width: l[0],
              height: l[1],
              quality: l[2] || 50,
            },
            i.options.value
          );
        }),
        d = a(() =>
          e.sizes ? r.value.src : n(e.src, i.modifiers.value, i.options.value)
        ),
        c = a(() => (u.value ? u.value : d.value));
      if (e.preload) {
        const t = Object.values(r.value).every((l) => l);
        b({
          link: [
            {
              rel: "preload",
              as: "image",
              ...(t
                ? {
                    href: r.value.src,
                    imagesizes: r.value.sizes,
                    imagesrcset: r.value.srcset,
                  }
                : { href: c.value }),
            },
          ],
        });
      }
      const v = f(null);
      return (
        w(() => {
          if (u.value) {
            const t = new Image();
            (t.src = d.value),
              (t.onload = () => {
                (v.value.src = d.value), (g.value = !0);
              });
          }
        }),
        () =>
          z("img", {
            ref: v,
            key: c.value,
            src: c.value,
            ...y.value,
            ...o.attrs,
          })
      );
    },
  }),
  A = Object.freeze(
    Object.defineProperty(
      { __proto__: null, imgProps: m, default: N },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { N as _, I as a, x as b, q as c, A as n, _ as u };
