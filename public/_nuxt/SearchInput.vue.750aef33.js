import { d as r, D as u, i as a, B as n } from "./entry.bc63e51a.js";
const _ = r({
  props: { searchTerm: { type: String, default: "" } },
  setup(t) {
    const e = u(t.searchTerm),
      { path: o } = a(),
      s = n();
    return {
      searchTerm: e,
      submit: () => {
        o === "/sok"
          ? s.replace({ path: "sok", query: { sokord: e.value } })
          : s.push({ path: "/sok", query: { sokord: e.value } });
      },
    };
  },
});
export { _ };
