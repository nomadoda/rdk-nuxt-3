function r(n) {
  return `https://www.raddadjuren.se${n.charAt(0) === "/" ? n : `/${n}`}`;
}
function c(n) {
  const t = n.substr(7);
  return s(t);
}
function s(n) {
  return n.endsWith("index") ? n.substr(0, n.length - 6) : n;
}
export { s as a, r as c, c as s };
