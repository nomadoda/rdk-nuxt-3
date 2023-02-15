import { A as e, a3 as s, a4 as a } from "./entry.e50f0f50.js";
import { N as i } from "./navigation.min.304073bc.js";
const t = e({
  name: "AnimalSlider",
  components: { Swiper: s, SwiperSlide: a },
  props: { animals: { type: Array, required: !0 } },
  data() {
    return {
      modules: [i],
      breakpoints: {
        600: { slidesPerView: 1.9, spaceBetween: 50 },
        800: { slidesPerView: 2.5, spaceBetween: 50 },
        1200: { slidesPerView: 4, spaceBetween: 30 },
      },
    };
  },
});
export { t as _ };
