import { A as i, e as n } from "./entry.e50f0f50.js";
const a = i({
    props: {
      title: { type: String, required: !0 },
      description: { type: String, required: !0 },
      image: { type: String, default: "https://nuxtjs.org/nuxt-card.png" },
      cloudinary: { type: Boolean, default: !1 },
    },
    setup(t) {
      const e = (() =>
        t.cloudinary
          ? `https://res.cloudinary.com/klandestino-ab/image/upload/c_lfill,dpr_auto,g_faces/c_scale,dpr_2.0,w_1200${t.image}`
          : t.image)();
      n({
        meta: [
          { hid: "twitter:title", name: "twitter:title", content: t.title },
          {
            hid: "twitter:description",
            name: "twitter:description",
            content: t.description,
          },
          { hid: "twitter:image", name: "twitter:image", content: e },
          {
            hid: "twitter:image:alt",
            name: "twitter:image:alt",
            content: t.title,
          },
          { hid: "og:title", property: "og:title", content: t.title },
          {
            hid: "og:description",
            property: "og:description",
            content: t.description,
          },
          { hid: "og:image", property: "og:image", content: e },
          {
            hid: "og:image:secure_url",
            property: "og:image:secure_url",
            content: e,
          },
          { hid: "og:image:alt", property: "og:image:alt", content: t.title },
        ],
      });
    },
  }),
  o = i({
    name: "SourceListItem",
    props: { source: { type: Object, required: !0 } },
  });
export { a as _, o as a };
