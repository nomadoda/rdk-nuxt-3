import { e as d } from "./entry.e50f0f50.js";
import { c as p } from "./urlTools.7e20410a.js";
const u = (n, { basePath: o } = {}) => {
  d({
    title:
      n != null && n.title
        ? `${n.title} | R\xE4dda Djuren-klubben`
        : "R\xE4dda Djuren-klubben",
    link: [
      {
        hid: "canonical",
        rel: "canonical",
        href: p(`${o}/${n == null ? void 0 : n.slug}`),
      },
    ],
    meta: [
      {
        hid: "og:url",
        name: "og:url",
        property: "og:url",
        content:
          n != null && n.title
            ? `${n.title} | R\xE4dda Djuren-klubben`
            : "R\xE4dda Djuren-klubben",
      },
      {
        hid: "og:title",
        name: "og:title",
        property: "og:title",
        content:
          n != null && n.title
            ? `${n.title} | R\xE4dda Djuren-klubben`
            : "R\xE4dda Djuren-klubben",
      },
      {
        hid: "description",
        name: "description",
        content:
          n != null && n.metadescription
            ? n.metadescription
            : n != null && n.preamble
            ? n.preamble
            : "",
      },
      {
        hid: "og:description",
        name: "og:description",
        property: "og:description",
        content:
          n != null && n.metadescription
            ? n.metadescription
            : n != null && n.preamble
            ? n.preamble
            : "",
      },
      n != null && n.image
        ? {
            hid: "og:image",
            name: "og:image",
            property: "og:image",
            content: `https://res.cloudinary.com/klandestino-ab/image/upload/c_lfill,dpr_auto,g_faces/c_scale,dpr_2.0,w_1200${n.image}`,
          }
        : {},
    ],
  });
};
export { u };
