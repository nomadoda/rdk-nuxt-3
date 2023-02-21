import { d as e, x as s, s as a } from "./entry.bc63e51a.js";
import { q as p } from "./query.02b33be6.js";
import { S as i, a as o } from "./swiper-slide.cabfc1a1.js";
import { N as c } from "./navigation.min.a9fb0167.js";
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
