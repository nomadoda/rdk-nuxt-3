import { d as n } from "./entry.bc63e51a.js";
const y = n({
  name: "TransitionExpand",
  methods: {
    enter(t) {
      const { width: e, position: i, visibility: s } = getComputedStyle(t);
      (t.style.width = e),
        (t.style.position = "absolute"),
        (t.style.visibility = "hidden"),
        (t.style.height = "auto");
      const { height: o } = getComputedStyle(t);
      (t.style.width = e),
        (t.style.position = i),
        (t.style.visibility = s),
        (t.style.height = "0"),
        getComputedStyle(t).height,
        requestAnimationFrame(() => {
          t.style.height = o;
        });
    },
    afterEnter(t) {
      t.style.height = "auto";
    },
    leave(t) {
      const { height: e } = getComputedStyle(t);
      (t.style.height = e),
        getComputedStyle(t).height,
        requestAnimationFrame(() => {
          t.style.height = "0";
        });
    },
  },
});
export { y as _ };
