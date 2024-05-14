import { d as k, x as j } from "./entry.0b49aa71.js";
import { q as D } from "./query.67962173.js";
import { $ as B, c as q, S as F, a as N } from "./swiper-slide.7974b596.js";
const R = k({ name: "About" }),
  U = k({
    name: "About",
    props: {
      slug: { default: "", type: String },
      variant: { default: "", type: String },
    },
    setup(e) {
      const { data: d } = j(`meta-block-${e.slug}`, async () =>
        e.slug ? await D(`block/${e.slug}`).findOne() : null
      );
      return { block: d };
    },
  });
function $(e = "") {
  return `.${e
    .trim()
    .replace(/([\.:!\/])/g, "\\$1")
    .replace(/ /g, ".")}`;
}
function T({ swiper: e, extendParams: d, on: o, emit: c }) {
  const r = "swiper-pagination";
  d({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (a) => a,
      formatFractionTotal: (a) => a,
      bulletClass: `${r}-bullet`,
      bulletActiveClass: `${r}-bullet-active`,
      modifierClass: `${r}-`,
      currentClass: `${r}-current`,
      totalClass: `${r}-total`,
      hiddenClass: `${r}-hidden`,
      progressbarFillClass: `${r}-progressbar-fill`,
      progressbarOppositeClass: `${r}-progressbar-opposite`,
      clickableClass: `${r}-clickable`,
      lockClass: `${r}-lock`,
      horizontalClass: `${r}-horizontal`,
      verticalClass: `${r}-vertical`,
      paginationDisabledClass: `${r}-disabled`,
    },
  }),
    (e.pagination = { el: null, $el: null, bullets: [] });
  let f,
    u = 0;
  function M() {
    return (
      !e.params.pagination.el ||
      !e.pagination.el ||
      !e.pagination.$el ||
      e.pagination.$el.length === 0
    );
  }
  function _(a, t) {
    const { bulletActiveClass: i } = e.params.pagination;
    a[t]().addClass(`${i}-${t}`)[t]().addClass(`${i}-${t}-${t}`);
  }
  function b() {
    const a = e.rtl,
      t = e.params.pagination;
    if (M()) return;
    const i =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.slides.length,
      l = e.pagination.$el;
    let n;
    const g = e.params.loop
      ? Math.ceil((i - e.loopedSlides * 2) / e.params.slidesPerGroup)
      : e.snapGrid.length;
    if (
      (e.params.loop
        ? ((n = Math.ceil(
            (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
          )),
          n > i - 1 - e.loopedSlides * 2 && (n -= i - e.loopedSlides * 2),
          n > g - 1 && (n -= g),
          n < 0 && e.params.paginationType !== "bullets" && (n = g + n))
        : typeof e.snapIndex < "u"
        ? (n = e.snapIndex)
        : (n = e.activeIndex || 0),
      t.type === "bullets" &&
        e.pagination.bullets &&
        e.pagination.bullets.length > 0)
    ) {
      const s = e.pagination.bullets;
      let p, C, S;
      if (
        (t.dynamicBullets &&
          ((f = s.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
          l.css(
            e.isHorizontal() ? "width" : "height",
            `${f * (t.dynamicMainBullets + 4)}px`
          ),
          t.dynamicMainBullets > 1 &&
            e.previousIndex !== void 0 &&
            ((u += n - (e.previousIndex - e.loopedSlides || 0)),
            u > t.dynamicMainBullets - 1
              ? (u = t.dynamicMainBullets - 1)
              : u < 0 && (u = 0)),
          (p = Math.max(n - u, 0)),
          (C = p + (Math.min(s.length, t.dynamicMainBullets) - 1)),
          (S = (C + p) / 2)),
        s.removeClass(
          ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
            .map((y) => `${t.bulletActiveClass}${y}`)
            .join(" ")
        ),
        l.length > 1)
      )
        s.each((y) => {
          const h = B(y),
            m = h.index();
          m === n && h.addClass(t.bulletActiveClass),
            t.dynamicBullets &&
              (m >= p && m <= C && h.addClass(`${t.bulletActiveClass}-main`),
              m === p && _(h, "prev"),
              m === C && _(h, "next"));
        });
      else {
        const y = s.eq(n),
          h = y.index();
        if ((y.addClass(t.bulletActiveClass), t.dynamicBullets)) {
          const m = s.eq(p),
            z = s.eq(C);
          for (let v = p; v <= C; v += 1)
            s.eq(v).addClass(`${t.bulletActiveClass}-main`);
          if (e.params.loop)
            if (h >= s.length) {
              for (let v = t.dynamicMainBullets; v >= 0; v -= 1)
                s.eq(s.length - v).addClass(`${t.bulletActiveClass}-main`);
              s.eq(s.length - t.dynamicMainBullets - 1).addClass(
                `${t.bulletActiveClass}-prev`
              );
            } else _(m, "prev"), _(z, "next");
          else _(m, "prev"), _(z, "next");
        }
      }
      if (t.dynamicBullets) {
        const y = Math.min(s.length, t.dynamicMainBullets + 4),
          h = (f * y - f) / 2 - S * f,
          m = a ? "right" : "left";
        s.css(e.isHorizontal() ? m : "top", `${h}px`);
      }
    }
    if (
      (t.type === "fraction" &&
        (l.find($(t.currentClass)).text(t.formatFractionCurrent(n + 1)),
        l.find($(t.totalClass)).text(t.formatFractionTotal(g))),
      t.type === "progressbar")
    ) {
      let s;
      t.progressbarOpposite
        ? (s = e.isHorizontal() ? "vertical" : "horizontal")
        : (s = e.isHorizontal() ? "horizontal" : "vertical");
      const p = (n + 1) / g;
      let C = 1,
        S = 1;
      s === "horizontal" ? (C = p) : (S = p),
        l
          .find($(t.progressbarFillClass))
          .transform(`translate3d(0,0,0) scaleX(${C}) scaleY(${S})`)
          .transition(e.params.speed);
    }
    t.type === "custom" && t.renderCustom
      ? (l.html(t.renderCustom(e, n + 1, g)), c("paginationRender", l[0]))
      : c("paginationUpdate", l[0]),
      e.params.watchOverflow &&
        e.enabled &&
        l[e.isLocked ? "addClass" : "removeClass"](t.lockClass);
  }
  function x() {
    const a = e.params.pagination;
    if (M()) return;
    const t =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.slides.length,
      i = e.pagination.$el;
    let l = "";
    if (a.type === "bullets") {
      let n = e.params.loop
        ? Math.ceil((t - e.loopedSlides * 2) / e.params.slidesPerGroup)
        : e.snapGrid.length;
      e.params.freeMode &&
        e.params.freeMode.enabled &&
        !e.params.loop &&
        n > t &&
        (n = t);
      for (let g = 0; g < n; g += 1)
        a.renderBullet
          ? (l += a.renderBullet.call(e, g, a.bulletClass))
          : (l += `<${a.bulletElement} class="${a.bulletClass}"></${a.bulletElement}>`);
      i.html(l), (e.pagination.bullets = i.find($(a.bulletClass)));
    }
    a.type === "fraction" &&
      (a.renderFraction
        ? (l = a.renderFraction.call(e, a.currentClass, a.totalClass))
        : (l = `<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`),
      i.html(l)),
      a.type === "progressbar" &&
        (a.renderProgressbar
          ? (l = a.renderProgressbar.call(e, a.progressbarFillClass))
          : (l = `<span class="${a.progressbarFillClass}"></span>`),
        i.html(l)),
      a.type !== "custom" && c("paginationRender", e.pagination.$el[0]);
  }
  function O() {
    e.params.pagination = q(
      e,
      e.originalParams.pagination,
      e.params.pagination,
      { el: "swiper-pagination" }
    );
    const a = e.params.pagination;
    if (!a.el) return;
    let t = B(a.el);
    t.length !== 0 &&
      (e.params.uniqueNavElements &&
        typeof a.el == "string" &&
        t.length > 1 &&
        ((t = e.$el.find(a.el)),
        t.length > 1 &&
          (t = t.filter((i) => B(i).parents(".swiper")[0] === e.el))),
      a.type === "bullets" && a.clickable && t.addClass(a.clickableClass),
      t.addClass(a.modifierClass + a.type),
      t.addClass(e.isHorizontal() ? a.horizontalClass : a.verticalClass),
      a.type === "bullets" &&
        a.dynamicBullets &&
        (t.addClass(`${a.modifierClass}${a.type}-dynamic`),
        (u = 0),
        a.dynamicMainBullets < 1 && (a.dynamicMainBullets = 1)),
      a.type === "progressbar" &&
        a.progressbarOpposite &&
        t.addClass(a.progressbarOppositeClass),
      a.clickable &&
        t.on("click", $(a.bulletClass), function (l) {
          l.preventDefault();
          let n = B(this).index() * e.params.slidesPerGroup;
          e.params.loop && (n += e.loopedSlides), e.slideTo(n);
        }),
      Object.assign(e.pagination, { $el: t, el: t[0] }),
      e.enabled || t.addClass(a.lockClass));
  }
  function A() {
    const a = e.params.pagination;
    if (M()) return;
    const t = e.pagination.$el;
    t.removeClass(a.hiddenClass),
      t.removeClass(a.modifierClass + a.type),
      t.removeClass(e.isHorizontal() ? a.horizontalClass : a.verticalClass),
      e.pagination.bullets &&
        e.pagination.bullets.removeClass &&
        e.pagination.bullets.removeClass(a.bulletActiveClass),
      a.clickable && t.off("click", $(a.bulletClass));
  }
  o("init", () => {
    e.params.pagination.enabled === !1 ? I() : (O(), x(), b());
  }),
    o("activeIndexChange", () => {
      (e.params.loop || typeof e.snapIndex > "u") && b();
    }),
    o("snapIndexChange", () => {
      e.params.loop || b();
    }),
    o("slidesLengthChange", () => {
      e.params.loop && (x(), b());
    }),
    o("snapGridLengthChange", () => {
      e.params.loop || (x(), b());
    }),
    o("destroy", () => {
      A();
    }),
    o("enable disable", () => {
      const { $el: a } = e.pagination;
      a &&
        a[e.enabled ? "removeClass" : "addClass"](
          e.params.pagination.lockClass
        );
    }),
    o("lock unlock", () => {
      b();
    }),
    o("click", (a, t) => {
      const i = t.target,
        { $el: l } = e.pagination;
      if (
        e.params.pagination.el &&
        e.params.pagination.hideOnClick &&
        l &&
        l.length > 0 &&
        !B(i).hasClass(e.params.pagination.bulletClass)
      ) {
        if (
          e.navigation &&
          ((e.navigation.nextEl && i === e.navigation.nextEl) ||
            (e.navigation.prevEl && i === e.navigation.prevEl))
        )
          return;
        const n = l.hasClass(e.params.pagination.hiddenClass);
        c(n === !0 ? "paginationShow" : "paginationHide"),
          l.toggleClass(e.params.pagination.hiddenClass);
      }
    });
  const P = () => {
      e.$el.removeClass(e.params.pagination.paginationDisabledClass),
        e.pagination.$el &&
          e.pagination.$el.removeClass(
            e.params.pagination.paginationDisabledClass
          ),
        O(),
        x(),
        b();
    },
    I = () => {
      e.$el.addClass(e.params.pagination.paginationDisabledClass),
        e.pagination.$el &&
          e.pagination.$el.addClass(
            e.params.pagination.paginationDisabledClass
          ),
        A();
    };
  Object.assign(e.pagination, {
    enable: P,
    disable: I,
    render: x,
    update: b,
    init: O,
    destroy: A,
  });
}
const X = k({
  name: "AppFooter",
  data() {
    return {
      visitlinks: [
        { label: "Välj Vego", url: "https://www.valjvego.se" },
        { label: "Djurens Rätt", url: "https://www.djurensratt.se" },
      ],
      quicklinks: [
        {
          label: "Gå med i klubben",
          url: "https://interact.djurensratt.se/ge-medlemskap/julklapp",
        },
        { label: "För föräldrar", url: "/vuxen-eller-pedagog" },
        { label: "Tidningen Klubbnytt", url: "/klubbnytt/" },
        { label: "Vanliga frågor", url: "/vuxen-eller-pedagog/vanliga-fragor" },
      ],
      socialmedia: [
        {
          altText: "instagram",
          url: "https://www.instagram.com/raddadjurenklubben/",
          img: "/images/instagram-logo.svg",
        },
        {
          altText: "facebook",
          url: "https://www.instagram.com/raddadjurenklubben/",
          img: "/images/facebook.svg",
        },
        {
          altText: "tiktok",
          url: "https://www.tiktok.com/@raddadjurenklubben",
          img: "/images/tik-tok-logo.svg",
        },
      ],
    };
  },
  setup() {
    const { data: e } = j(
        async () => D("block/footer-top").findOne(),
        "$raOELVPXjJ"
      ),
      { data: d } = j(
        async () => D("block/footer-text").findOne(),
        "$u7UyWH2UUB"
      ),
      { data: o } = j(
        async () => D("block/footer-image").findOne(),
        "$IwTD5indAh"
      );
    return { infoBlock: e, addressBlock: d, imgBlock: o };
  },
});
function E(e) {
  var c;
  const o = `; ${document.cookie}`.split(`; ${e}=`);
  return o.length !== 2 || (c = o.pop()) == null
    ? void 0
    : c.split(";").shift();
}
function L(e, d, o, c, r) {
  const f = new Date();
  f.setDate(f.getDate() + (o || 365));
  const u = [`${e}=${d}`, `expires=${f.toUTCString()}`, `path=${r || "/"}`];
  c && u.push(`domain=${c}`), (document.cookie = u.join(";"));
}
const W = k({
  name: "CookieConsentC",
  props: {
    transition: { type: String, default: "cookie-consent-transition" },
    message: {
      type: String,
      default:
        "Genom att acceptera cookies hjälper du Rädda djuren-klubben att bli ännu bättre i sitt arbete att hjälpa djuren.",
    },
    info: {
      type: String,
      default:
        "Vi använder cookies på denna webbplats för att förbättra din användarupplevelse.",
    },
    linkLabel: { type: String, default: "Läs mer här." },
    consentLabel: { type: String, default: "Acceptera" },
    rejectLabel: { type: String, default: "Neka" },
    href: { type: String, default: "https://www.raddadjuren.se/om-cookies" },
    target: { type: String, default: "_blank" },
    rel: { type: String, default: "noopener" },
    cookieName: { type: String, default: "analytics_storage" },
    rejectCookieName: { type: String, default: "reject_cookie" },
    cookiePath: { type: String, default: "/" },
    cookieDomain: { type: String, default: "" },
    cookieExpiryDays: { type: Number, default: 365 },
  },
  data() {
    return { show: void 0 };
  },
  beforeMount() {
    this.show = !E(this.cookieName) && !E(this.rejectCookieName);
  },
  methods: {
    accept() {
      (this.show = !1),
        L(
          this.cookieName,
          1,
          this.cookieExpiryDays,
          this.cookieDomain,
          this.cookiePath
        );
    },
    reject() {
      (this.show = !1),
        L(
          this.rejectCookieName,
          2,
          this.cookieExpiryDays,
          this.cookieDomain,
          this.cookiePath
        );
    },
  },
});
const Y = k({
  name: "navigation-item",
  props: {
    label: { type: String, required: !0 },
    icon: { type: String, required: !0 },
    href: { type: String, required: !0 },
    iconVariant: { type: String, default: null },
  },
});
const J = k({
  name: "Membership",
  components: { Swiper: F, SwiperSlide: N },
  data() {
    return {
      modules: [T],
      readLink: {
        url: "https://interact.djurensratt.se/ge-medlemskap/raddadjuren",
        linkText: "Läs mer",
      },
      options: { wrapAround: !1, pageDots: !0, prevNextButtons: !1 },
    };
  },
});
const K = k({
  name: "mobile-menu",
  data() {
    return { isOpen: !1 };
  },
  computed: {
    label() {
      return this.isOpen ? "Stäng meny" : "Öppna meny";
    },
  },
  watch: {
    isOpen(e) {
      this.hideDocumentScroll(e);
    },
    $route() {
      this.isOpen = !1;
    },
  },
  methods: {
    hideDocumentScroll(e) {
      const d = document.scrollingElement || document.documentElement;
      d == null || d.classList.toggle("overflow-hidden", e);
    },
  },
});
export { U as _, R as a, W as b, X as c, Y as d, J as e, K as f };
