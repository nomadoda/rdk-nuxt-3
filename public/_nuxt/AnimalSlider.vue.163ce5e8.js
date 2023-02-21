import { d as e } from "./entry.bc63e51a.js";
import { S as i, a as s } from "./swiper-slide.cabfc1a1.js";
import { N as r } from "./navigation.min.a9fb0167.js";
const o = e({
  name: "AnimalSlider",
  components: { Swiper: i, SwiperSlide: s },
  props: { animals: { type: Array, required: !0 } },
  data() {
    return {
      modules: [r],
      breakpoints: {
        600: { slidesPerView: 1.9, spaceBetween: 50 },
        800: { slidesPerView: 2.5, spaceBetween: 50 },
        1200: { slidesPerView: 4, spaceBetween: 30 },
      },
    };
  },
});
export { o as _ };
