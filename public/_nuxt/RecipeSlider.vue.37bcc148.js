import { d as e, x as s, s as a } from "./entry.0b49aa71.js";
import { q as p } from "./query.67962173.js";
import { S as i, a as o } from "./swiper-slide.7974b596.js";
import { N as c } from "./navigation.min.faca0c8c.js";
const m = e({
    props: { recipes: { default: null, type: Array } },
    setup(t) {
      const { data: r } = s(
        async () =>
          p("vego/recept")
            .where({ recipeLabels: { $contains: "slider" } })
            .sort({ title: 1 })
            .find(),
        "$BQWu8kyUGV"
      );
      return { recipes: a(() => t.recipes ?? r.value ?? []) };
    },
    components: { Swiper: i, SwiperSlide: o },
    data() {
      return { modules: [c] };
    },
  }),
  y = e({
    props: { recipe: { type: Object, required: !0 } },
    computed: {
      pubId() {
        return this.recipe.image.replace(/^\/+/, "");
      },
    },
  });
export { y as _, m as a };
