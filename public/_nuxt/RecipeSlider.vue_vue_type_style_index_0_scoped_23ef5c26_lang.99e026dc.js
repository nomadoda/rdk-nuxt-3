import {
  A as s,
  m as p,
  l as i,
  a3 as c,
  a4 as n,
  q as o,
} from "./entry.e50f0f50.js";
import { N as _ } from "./navigation.min.304073bc.js";
const m = s({
    props: { recipes: { default: null, type: Array } },
    setup(r) {
      const { data: a } = p(
        async () =>
          o("vego/recept")
            .where({ recipeLabels: { $contains: "slider" } })
            .sort({ title: 1 })
            .find(),
        "$BQWu8kyUGV"
      );
      return {
        recipes: i(() => {
          var e, t;
          return (t = (e = r.recipes) != null ? e : a.value) != null ? t : [];
        }),
      };
    },
    components: { Swiper: c, SwiperSlide: n },
    data() {
      return { modules: [_] };
    },
  }),
  y = s({
    props: { recipe: { type: Object, required: !0 } },
    computed: {
      pubId() {
        return this.recipe.image.replace(/^\/+/, "");
      },
    },
  });
export { m as _, y as a };
