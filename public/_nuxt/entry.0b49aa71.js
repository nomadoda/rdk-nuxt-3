function gs(e, t) {
  const n = Object.create(null),
    r = e.split(",");
  for (let s = 0; s < r.length; s++) n[r[s]] = !0;
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
function _s(e) {
  if (z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = me(r) ? ml(r) : _s(r);
      if (s) for (const o in s) t[o] = s[o];
    }
    return t;
  } else {
    if (me(e)) return e;
    if (fe(e)) return e;
  }
}
const dl = /;(?![^(]*\))/g,
  hl = /:([^]+)/,
  pl = /\/\*.*?\*\//gs;
function ml(e) {
  const t = {};
  return (
    e
      .replace(pl, "")
      .split(dl)
      .forEach((n) => {
        if (n) {
          const r = n.split(hl);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function ys(e) {
  let t = "";
  if (me(e)) t = e;
  else if (z(e))
    for (let n = 0; n < e.length; n++) {
      const r = ys(e[n]);
      r && (t += r + " ");
    }
  else if (fe(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const gl =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  _l = gs(gl);
function yi(e) {
  return !!e || e === "";
}
const wm = (e) =>
    me(e)
      ? e
      : e == null
      ? ""
      : z(e) || (fe(e) && (e.toString === wi || !X(e.toString)))
      ? JSON.stringify(e, vi, 2)
      : String(e),
  vi = (e, t) =>
    t && t.__v_isRef
      ? vi(e, t.value)
      : Bt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, s]) => ((n[`${r} =>`] = s), n),
            {}
          ),
        }
      : bi(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : fe(t) && !z(t) && !Ri(t)
      ? String(t)
      : t,
  ue = {},
  Ft = [],
  Ve = () => {},
  yl = () => !1,
  vl = /^on[^a-z]/,
  An = (e) => vl.test(e),
  vs = (e) => e.startsWith("onUpdate:"),
  we = Object.assign,
  bs = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  bl = Object.prototype.hasOwnProperty,
  re = (e, t) => bl.call(e, t),
  z = Array.isArray,
  Bt = (e) => On(e) === "[object Map]",
  bi = (e) => On(e) === "[object Set]",
  El = (e) => On(e) === "[object RegExp]",
  X = (e) => typeof e == "function",
  me = (e) => typeof e == "string",
  Es = (e) => typeof e == "symbol",
  fe = (e) => e !== null && typeof e == "object",
  Ei = (e) => fe(e) && X(e.then) && X(e.catch),
  wi = Object.prototype.toString,
  On = (e) => wi.call(e),
  wl = (e) => On(e).slice(8, -1),
  Ri = (e) => On(e) === "[object Object]",
  ws = (e) =>
    me(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  hn = gs(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  or = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Rl = /-(\w)/g,
  Ge = or((e) => e.replace(Rl, (t, n) => (n ? n.toUpperCase() : ""))),
  Pl = /\B([A-Z])/g,
  tn = or((e) => e.replace(Pl, "-$1").toLowerCase()),
  ir = or((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  wr = or((e) => (e ? `on${ir(e)}` : "")),
  En = (e, t) => !Object.is(e, t),
  pn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  Kn = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  Cl = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  Pi = (e) => {
    const t = me(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let eo;
const Tl = () =>
  eo ||
  (eo =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
let Be;
class Al {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Be),
      !t && Be && (this.index = (Be.scopes || (Be.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Be;
      try {
        return (Be = this), t();
      } finally {
        Be = n;
      }
    }
  }
  on() {
    Be = this;
  }
  off() {
    Be = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Ol(e, t = Be) {
  t && t.active && t.effects.push(e);
}
function kl() {
  return Be;
}
const Rs = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  Ci = (e) => (e.w & yt) > 0,
  Ti = (e) => (e.n & yt) > 0,
  xl = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= yt;
  },
  Il = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let r = 0; r < t.length; r++) {
        const s = t[r];
        Ci(s) && !Ti(s) ? s.delete(e) : (t[n++] = s),
          (s.w &= ~yt),
          (s.n &= ~yt);
      }
      t.length = n;
    }
  },
  Vn = new WeakMap();
let fn = 0,
  yt = 1;
const Br = 30;
let Ue;
const kt = Symbol(""),
  Ur = Symbol("");
class Ps {
  constructor(t, n = null, r) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      Ol(this, r);
  }
  run() {
    if (!this.active) return this.fn();
    let t = Ue,
      n = gt;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = Ue),
        (Ue = this),
        (gt = !0),
        (yt = 1 << ++fn),
        fn <= Br ? xl(this) : to(this),
        this.fn()
      );
    } finally {
      fn <= Br && Il(this),
        (yt = 1 << --fn),
        (Ue = this.parent),
        (gt = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Ue === this
      ? (this.deferStop = !0)
      : this.active &&
        (to(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function to(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let gt = !0;
const Ai = [];
function nn() {
  Ai.push(gt), (gt = !1);
}
function rn() {
  const e = Ai.pop();
  gt = e === void 0 ? !0 : e;
}
function Ie(e, t, n) {
  if (gt && Ue) {
    let r = Vn.get(e);
    r || Vn.set(e, (r = new Map()));
    let s = r.get(n);
    s || r.set(n, (s = Rs())), Oi(s);
  }
}
function Oi(e, t) {
  let n = !1;
  fn <= Br ? Ti(e) || ((e.n |= yt), (n = !Ci(e))) : (n = !e.has(Ue)),
    n && (e.add(Ue), Ue.deps.push(e));
}
function rt(e, t, n, r, s, o) {
  const i = Vn.get(e);
  if (!i) return;
  let a = [];
  if (t === "clear") a = [...i.values()];
  else if (n === "length" && z(e)) {
    const l = Number(r);
    i.forEach((c, u) => {
      (u === "length" || u >= l) && a.push(c);
    });
  } else
    switch ((n !== void 0 && a.push(i.get(n)), t)) {
      case "add":
        z(e)
          ? ws(n) && a.push(i.get("length"))
          : (a.push(i.get(kt)), Bt(e) && a.push(i.get(Ur)));
        break;
      case "delete":
        z(e) || (a.push(i.get(kt)), Bt(e) && a.push(i.get(Ur)));
        break;
      case "set":
        Bt(e) && a.push(i.get(kt));
        break;
    }
  if (a.length === 1) a[0] && Kr(a[0]);
  else {
    const l = [];
    for (const c of a) c && l.push(...c);
    Kr(Rs(l));
  }
}
function Kr(e, t) {
  const n = z(e) ? e : [...e];
  for (const r of n) r.computed && no(r);
  for (const r of n) r.computed || no(r);
}
function no(e, t) {
  (e !== Ue || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
function Sl(e, t) {
  var n;
  return (n = Vn.get(e)) === null || n === void 0 ? void 0 : n.get(t);
}
const $l = gs("__proto__,__v_isRef,__isVue"),
  ki = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Es)
  ),
  Ll = Cs(),
  jl = Cs(!1, !0),
  Hl = Cs(!0),
  ro = Dl();
function Dl() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const r = se(this);
        for (let o = 0, i = this.length; o < i; o++) Ie(r, "get", o + "");
        const s = r[t](...n);
        return s === -1 || s === !1 ? r[t](...n.map(se)) : s;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        nn();
        const r = se(this)[t].apply(this, n);
        return rn(), r;
      };
    }),
    e
  );
}
function Ml(e) {
  const t = se(this);
  return Ie(t, "has", e), t.hasOwnProperty(e);
}
function Cs(e = !1, t = !1) {
  return function (r, s, o) {
    if (s === "__v_isReactive") return !e;
    if (s === "__v_isReadonly") return e;
    if (s === "__v_isShallow") return t;
    if (s === "__v_raw" && o === (e ? (t ? ec : Li) : t ? $i : Si).get(r))
      return r;
    const i = z(r);
    if (!e) {
      if (i && re(ro, s)) return Reflect.get(ro, s, o);
      if (s === "hasOwnProperty") return Ml;
    }
    const a = Reflect.get(r, s, o);
    return (Es(s) ? ki.has(s) : $l(s)) || (e || Ie(r, "get", s), t)
      ? a
      : ye(a)
      ? i && ws(s)
        ? a
        : a.value
      : fe(a)
      ? e
        ? ji(a)
        : qe(a)
      : a;
  };
}
const Nl = xi(),
  Fl = xi(!0);
function xi(e = !1) {
  return function (n, r, s, o) {
    let i = n[r];
    if ($t(i) && ye(i) && !ye(s)) return !1;
    if (
      !e &&
      (!Wn(s) && !$t(s) && ((i = se(i)), (s = se(s))), !z(n) && ye(i) && !ye(s))
    )
      return (i.value = s), !0;
    const a = z(n) && ws(r) ? Number(r) < n.length : re(n, r),
      l = Reflect.set(n, r, s, o);
    return (
      n === se(o) && (a ? En(s, i) && rt(n, "set", r, s) : rt(n, "add", r, s)),
      l
    );
  };
}
function Bl(e, t) {
  const n = re(e, t);
  e[t];
  const r = Reflect.deleteProperty(e, t);
  return r && n && rt(e, "delete", t, void 0), r;
}
function Ul(e, t) {
  const n = Reflect.has(e, t);
  return (!Es(t) || !ki.has(t)) && Ie(e, "has", t), n;
}
function Kl(e) {
  return Ie(e, "iterate", z(e) ? "length" : kt), Reflect.ownKeys(e);
}
const Ii = { get: Ll, set: Nl, deleteProperty: Bl, has: Ul, ownKeys: Kl },
  Vl = {
    get: Hl,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  Wl = we({}, Ii, { get: jl, set: Fl }),
  Ts = (e) => e,
  ar = (e) => Reflect.getPrototypeOf(e);
function In(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const s = se(e),
    o = se(t);
  n || (t !== o && Ie(s, "get", t), Ie(s, "get", o));
  const { has: i } = ar(s),
    a = r ? Ts : n ? ks : wn;
  if (i.call(s, t)) return a(e.get(t));
  if (i.call(s, o)) return a(e.get(o));
  e !== s && e.get(t);
}
function Sn(e, t = !1) {
  const n = this.__v_raw,
    r = se(n),
    s = se(e);
  return (
    t || (e !== s && Ie(r, "has", e), Ie(r, "has", s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
  );
}
function $n(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Ie(se(e), "iterate", kt), Reflect.get(e, "size", e)
  );
}
function so(e) {
  e = se(e);
  const t = se(this);
  return ar(t).has.call(t, e) || (t.add(e), rt(t, "add", e, e)), this;
}
function oo(e, t) {
  t = se(t);
  const n = se(this),
    { has: r, get: s } = ar(n);
  let o = r.call(n, e);
  o || ((e = se(e)), (o = r.call(n, e)));
  const i = s.call(n, e);
  return (
    n.set(e, t), o ? En(t, i) && rt(n, "set", e, t) : rt(n, "add", e, t), this
  );
}
function io(e) {
  const t = se(this),
    { has: n, get: r } = ar(t);
  let s = n.call(t, e);
  s || ((e = se(e)), (s = n.call(t, e))), r && r.call(t, e);
  const o = t.delete(e);
  return s && rt(t, "delete", e, void 0), o;
}
function ao() {
  const e = se(this),
    t = e.size !== 0,
    n = e.clear();
  return t && rt(e, "clear", void 0, void 0), n;
}
function Ln(e, t) {
  return function (r, s) {
    const o = this,
      i = o.__v_raw,
      a = se(i),
      l = t ? Ts : e ? ks : wn;
    return (
      !e && Ie(a, "iterate", kt), i.forEach((c, u) => r.call(s, l(c), l(u), o))
    );
  };
}
function jn(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      o = se(s),
      i = Bt(o),
      a = e === "entries" || (e === Symbol.iterator && i),
      l = e === "keys" && i,
      c = s[e](...r),
      u = n ? Ts : t ? ks : wn;
    return (
      !t && Ie(o, "iterate", l ? Ur : kt),
      {
        next() {
          const { value: f, done: p } = c.next();
          return p
            ? { value: f, done: p }
            : { value: a ? [u(f[0]), u(f[1])] : u(f), done: p };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function lt(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function ql() {
  const e = {
      get(o) {
        return In(this, o);
      },
      get size() {
        return $n(this);
      },
      has: Sn,
      add: so,
      set: oo,
      delete: io,
      clear: ao,
      forEach: Ln(!1, !1),
    },
    t = {
      get(o) {
        return In(this, o, !1, !0);
      },
      get size() {
        return $n(this);
      },
      has: Sn,
      add: so,
      set: oo,
      delete: io,
      clear: ao,
      forEach: Ln(!1, !0),
    },
    n = {
      get(o) {
        return In(this, o, !0);
      },
      get size() {
        return $n(this, !0);
      },
      has(o) {
        return Sn.call(this, o, !0);
      },
      add: lt("add"),
      set: lt("set"),
      delete: lt("delete"),
      clear: lt("clear"),
      forEach: Ln(!0, !1),
    },
    r = {
      get(o) {
        return In(this, o, !0, !0);
      },
      get size() {
        return $n(this, !0);
      },
      has(o) {
        return Sn.call(this, o, !0);
      },
      add: lt("add"),
      set: lt("set"),
      delete: lt("delete"),
      clear: lt("clear"),
      forEach: Ln(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      (e[o] = jn(o, !1, !1)),
        (n[o] = jn(o, !0, !1)),
        (t[o] = jn(o, !1, !0)),
        (r[o] = jn(o, !0, !0));
    }),
    [e, n, t, r]
  );
}
const [zl, Jl, Ql, Xl] = ql();
function As(e, t) {
  const n = t ? (e ? Xl : Ql) : e ? Jl : zl;
  return (r, s, o) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
      ? e
      : s === "__v_raw"
      ? r
      : Reflect.get(re(n, s) && s in r ? n : r, s, o);
}
const Gl = { get: As(!1, !1) },
  Yl = { get: As(!1, !0) },
  Zl = { get: As(!0, !1) },
  Si = new WeakMap(),
  $i = new WeakMap(),
  Li = new WeakMap(),
  ec = new WeakMap();
function tc(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function nc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : tc(wl(e));
}
function qe(e) {
  return $t(e) ? e : Os(e, !1, Ii, Gl, Si);
}
function rc(e) {
  return Os(e, !1, Wl, Yl, $i);
}
function ji(e) {
  return Os(e, !0, Vl, Zl, Li);
}
function Os(e, t, n, r, s) {
  if (!fe(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = s.get(e);
  if (o) return o;
  const i = nc(e);
  if (i === 0) return e;
  const a = new Proxy(e, i === 2 ? r : n);
  return s.set(e, a), a;
}
function Ut(e) {
  return $t(e) ? Ut(e.__v_raw) : !!(e && e.__v_isReactive);
}
function $t(e) {
  return !!(e && e.__v_isReadonly);
}
function Wn(e) {
  return !!(e && e.__v_isShallow);
}
function Hi(e) {
  return Ut(e) || $t(e);
}
function se(e) {
  const t = e && e.__v_raw;
  return t ? se(t) : e;
}
function Di(e) {
  return Kn(e, "__v_skip", !0), e;
}
const wn = (e) => (fe(e) ? qe(e) : e),
  ks = (e) => (fe(e) ? ji(e) : e);
function Mi(e) {
  gt && Ue && ((e = se(e)), Oi(e.dep || (e.dep = Rs())));
}
function Ni(e, t) {
  e = se(e);
  const n = e.dep;
  n && Kr(n);
}
function ye(e) {
  return !!(e && e.__v_isRef === !0);
}
function nt(e) {
  return Fi(e, !1);
}
function Vr(e) {
  return Fi(e, !0);
}
function Fi(e, t) {
  return ye(e) ? e : new sc(e, t);
}
class sc {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : se(t)),
      (this._value = n ? t : wn(t));
  }
  get value() {
    return Mi(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Wn(t) || $t(t);
    (t = n ? t : se(t)),
      En(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : wn(t)), Ni(this));
  }
}
function ve(e) {
  return ye(e) ? e.value : e;
}
const oc = {
  get: (e, t, n) => ve(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return ye(s) && !ye(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function Bi(e) {
  return Ut(e) ? e : new Proxy(e, oc);
}
function ic(e) {
  const t = z(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = xs(e, n);
  return t;
}
class ac {
  constructor(t, n, r) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = r),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Sl(se(this._object), this._key);
  }
}
function xs(e, t, n) {
  const r = e[t];
  return ye(r) ? r : new ac(e, t, n);
}
var Ui;
class lc {
  constructor(t, n, r, s) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[Ui] = !1),
      (this._dirty = !0),
      (this.effect = new Ps(t, () => {
        this._dirty || ((this._dirty = !0), Ni(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = r);
  }
  get value() {
    const t = se(this);
    return (
      Mi(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
Ui = "__v_isReadonly";
function cc(e, t, n = !1) {
  let r, s;
  const o = X(e);
  return (
    o ? ((r = e), (s = Ve)) : ((r = e.get), (s = e.set)),
    new lc(r, s, o || !s, n)
  );
}
function _t(e, t, n, r) {
  let s;
  try {
    s = r ? e(...r) : e();
  } catch (o) {
    sn(o, t, n);
  }
  return s;
}
function De(e, t, n, r) {
  if (X(e)) {
    const o = _t(e, t, n, r);
    return (
      o &&
        Ei(o) &&
        o.catch((i) => {
          sn(i, t, n);
        }),
      o
    );
  }
  const s = [];
  for (let o = 0; o < e.length; o++) s.push(De(e[o], t, n, r));
  return s;
}
function sn(e, t, n, r = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy,
      a = n;
    for (; o; ) {
      const c = o.ec;
      if (c) {
        for (let u = 0; u < c.length; u++) if (c[u](e, i, a) === !1) return;
      }
      o = o.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      _t(l, null, 10, [e, i, a]);
      return;
    }
  }
  uc(e, n, s, r);
}
function uc(e, t, n, r = !0) {
  console.error(e);
}
let Rn = !1,
  Wr = !1;
const Pe = [];
let Xe = 0;
const Kt = [];
let et = null,
  Ct = 0;
const Ki = Promise.resolve();
let Is = null;
function on(e) {
  const t = Is || Ki;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function fc(e) {
  let t = Xe + 1,
    n = Pe.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1;
    Pn(Pe[r]) < e ? (t = r + 1) : (n = r);
  }
  return t;
}
function lr(e) {
  (!Pe.length || !Pe.includes(e, Rn && e.allowRecurse ? Xe + 1 : Xe)) &&
    (e.id == null ? Pe.push(e) : Pe.splice(fc(e.id), 0, e), Vi());
}
function Vi() {
  !Rn && !Wr && ((Wr = !0), (Is = Ki.then(qi)));
}
function dc(e) {
  const t = Pe.indexOf(e);
  t > Xe && Pe.splice(t, 1);
}
function Wi(e) {
  z(e)
    ? Kt.push(...e)
    : (!et || !et.includes(e, e.allowRecurse ? Ct + 1 : Ct)) && Kt.push(e),
    Vi();
}
function lo(e, t = Rn ? Xe + 1 : 0) {
  for (; t < Pe.length; t++) {
    const n = Pe[t];
    n && n.pre && (Pe.splice(t, 1), t--, n());
  }
}
function qn(e) {
  if (Kt.length) {
    const t = [...new Set(Kt)];
    if (((Kt.length = 0), et)) {
      et.push(...t);
      return;
    }
    for (et = t, et.sort((n, r) => Pn(n) - Pn(r)), Ct = 0; Ct < et.length; Ct++)
      et[Ct]();
    (et = null), (Ct = 0);
  }
}
const Pn = (e) => (e.id == null ? 1 / 0 : e.id),
  hc = (e, t) => {
    const n = Pn(e) - Pn(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function qi(e) {
  (Wr = !1), (Rn = !0), Pe.sort(hc);
  const t = Ve;
  try {
    for (Xe = 0; Xe < Pe.length; Xe++) {
      const n = Pe[Xe];
      n && n.active !== !1 && _t(n, null, 14);
    }
  } finally {
    (Xe = 0),
      (Pe.length = 0),
      qn(),
      (Rn = !1),
      (Is = null),
      (Pe.length || Kt.length) && qi();
  }
}
function pc(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || ue;
  let s = n;
  const o = t.startsWith("update:"),
    i = o && t.slice(7);
  if (i && i in r) {
    const u = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: f, trim: p } = r[u] || ue;
    p && (s = n.map((g) => (me(g) ? g.trim() : g))), f && (s = n.map(Cl));
  }
  let a,
    l = r[(a = wr(t))] || r[(a = wr(Ge(t)))];
  !l && o && (l = r[(a = wr(tn(t)))]), l && De(l, e, 6, s);
  const c = r[a + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    (e.emitted[a] = !0), De(c, e, 6, s);
  }
}
function zi(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e);
  if (s !== void 0) return s;
  const o = e.emits;
  let i = {},
    a = !1;
  if (!X(e)) {
    const l = (c) => {
      const u = zi(c, t, !0);
      u && ((a = !0), we(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !o && !a
    ? (fe(e) && r.set(e, null), null)
    : (z(o) ? o.forEach((l) => (i[l] = null)) : we(i, o),
      fe(e) && r.set(e, i),
      i);
}
function cr(e, t) {
  return !e || !An(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      re(e, t[0].toLowerCase() + t.slice(1)) || re(e, tn(t)) || re(e, t));
}
let Ee = null,
  ur = null;
function zn(e) {
  const t = Ee;
  return (Ee = e), (ur = (e && e.type.__scopeId) || null), t;
}
function Rm(e) {
  ur = e;
}
function Pm() {
  ur = null;
}
function Ss(e, t = Ee, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && bo(-1);
    const o = zn(t);
    let i;
    try {
      i = e(...s);
    } finally {
      zn(o), r._d && bo(1);
    }
    return i;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function Rr(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    props: o,
    propsOptions: [i],
    slots: a,
    attrs: l,
    emit: c,
    render: u,
    renderCache: f,
    data: p,
    setupState: g,
    ctx: _,
    inheritAttrs: v,
  } = e;
  let E, y;
  const h = zn(e);
  try {
    if (n.shapeFlag & 4) {
      const R = s || r;
      (E = je(u.call(R, R, f, o, g, p, _))), (y = l);
    } else {
      const R = t;
      (E = je(
        R.length > 1 ? R(o, { attrs: l, slots: a, emit: c }) : R(o, null)
      )),
        (y = t.props ? l : gc(l));
    }
  } catch (R) {
    (gn.length = 0), sn(R, e, 1), (E = pe(Ae));
  }
  let b = E;
  if (y && v !== !1) {
    const R = Object.keys(y),
      { shapeFlag: T } = b;
    R.length && T & 7 && (i && R.some(vs) && (y = _c(y, i)), (b = st(b, y)));
  }
  return (
    n.dirs && ((b = st(b)), (b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (b.transition = n.transition),
    (E = b),
    zn(h),
    E
  );
}
function mc(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (Qt(r)) {
      if (r.type !== Ae || r.children === "v-if") {
        if (t) return;
        t = r;
      }
    } else return;
  }
  return t;
}
const gc = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || An(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  _c = (e, t) => {
    const n = {};
    for (const r in e) (!vs(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function yc(e, t, n) {
  const { props: r, children: s, component: o } = e,
    { props: i, children: a, patchFlag: l } = t,
    c = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? co(r, i, c) : !!i;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const p = u[f];
        if (i[p] !== r[p] && !cr(c, p)) return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable)
      ? !0
      : r === i
      ? !1
      : r
      ? i
        ? co(r, i, c)
        : !0
      : !!i;
  return !1;
}
function co(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (t[o] !== e[o] && !cr(n, o)) return !0;
  }
  return !1;
}
function $s({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const Ji = (e) => e.__isSuspense,
  vc = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, r, s, o, i, a, l, c) {
      e == null ? bc(t, n, r, s, o, i, a, l, c) : Ec(e, t, n, r, s, i, a, l, c);
    },
    hydrate: wc,
    create: Ls,
    normalize: Rc,
  },
  Qi = vc;
function Cn(e, t) {
  const n = e.props && e.props[t];
  X(n) && n();
}
function bc(e, t, n, r, s, o, i, a, l) {
  const {
      p: c,
      o: { createElement: u },
    } = l,
    f = u("div"),
    p = (e.suspense = Ls(e, s, r, t, f, n, o, i, a, l));
  c(null, (p.pendingBranch = e.ssContent), f, null, r, p, o, i),
    p.deps > 0
      ? (Cn(e, "onPending"),
        Cn(e, "onFallback"),
        c(null, e.ssFallback, t, n, r, null, o, i),
        Vt(p, e.ssFallback))
      : p.resolve();
}
function Ec(e, t, n, r, s, o, i, a, { p: l, um: c, o: { createElement: u } }) {
  const f = (t.suspense = e.suspense);
  (f.vnode = t), (t.el = e.el);
  const p = t.ssContent,
    g = t.ssFallback,
    { activeBranch: _, pendingBranch: v, isInFallback: E, isHydrating: y } = f;
  if (v)
    (f.pendingBranch = p),
      Ke(p, v)
        ? (l(v, p, f.hiddenContainer, null, s, f, o, i, a),
          f.deps <= 0
            ? f.resolve()
            : E && (l(_, g, n, r, s, null, o, i, a), Vt(f, g)))
        : (f.pendingId++,
          y ? ((f.isHydrating = !1), (f.activeBranch = v)) : c(v, s, f),
          (f.deps = 0),
          (f.effects.length = 0),
          (f.hiddenContainer = u("div")),
          E
            ? (l(null, p, f.hiddenContainer, null, s, f, o, i, a),
              f.deps <= 0
                ? f.resolve()
                : (l(_, g, n, r, s, null, o, i, a), Vt(f, g)))
            : _ && Ke(p, _)
            ? (l(_, p, n, r, s, f, o, i, a), f.resolve(!0))
            : (l(null, p, f.hiddenContainer, null, s, f, o, i, a),
              f.deps <= 0 && f.resolve()));
  else if (_ && Ke(p, _)) l(_, p, n, r, s, f, o, i, a), Vt(f, p);
  else if (
    (Cn(t, "onPending"),
    (f.pendingBranch = p),
    f.pendingId++,
    l(null, p, f.hiddenContainer, null, s, f, o, i, a),
    f.deps <= 0)
  )
    f.resolve();
  else {
    const { timeout: h, pendingId: b } = f;
    h > 0
      ? setTimeout(() => {
          f.pendingId === b && f.fallback(g);
        }, h)
      : h === 0 && f.fallback(g);
  }
}
function Ls(e, t, n, r, s, o, i, a, l, c, u = !1) {
  const {
      p: f,
      m: p,
      um: g,
      n: _,
      o: { parentNode: v, remove: E },
    } = c,
    y = e.props ? Pi(e.props.timeout) : void 0,
    h = {
      vnode: e,
      parent: t,
      parentComponent: n,
      isSVG: i,
      container: r,
      hiddenContainer: s,
      anchor: o,
      deps: 0,
      pendingId: 0,
      timeout: typeof y == "number" ? y : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !0,
      isHydrating: u,
      isUnmounted: !1,
      effects: [],
      resolve(b = !1) {
        const {
          vnode: R,
          activeBranch: T,
          pendingBranch: x,
          pendingId: j,
          effects: O,
          parentComponent: q,
          container: U,
        } = h;
        if (h.isHydrating) h.isHydrating = !1;
        else if (!b) {
          const G = T && x.transition && x.transition.mode === "out-in";
          G &&
            (T.transition.afterLeave = () => {
              j === h.pendingId && p(x, U, N, 0);
            });
          let { anchor: N } = h;
          T && ((N = _(T)), g(T, q, h, !0)), G || p(x, U, N, 0);
        }
        Vt(h, x), (h.pendingBranch = null), (h.isInFallback = !1);
        let J = h.parent,
          D = !1;
        for (; J; ) {
          if (J.pendingBranch) {
            J.effects.push(...O), (D = !0);
            break;
          }
          J = J.parent;
        }
        D || Wi(O), (h.effects = []), Cn(R, "onResolve");
      },
      fallback(b) {
        if (!h.pendingBranch) return;
        const {
          vnode: R,
          activeBranch: T,
          parentComponent: x,
          container: j,
          isSVG: O,
        } = h;
        Cn(R, "onFallback");
        const q = _(T),
          U = () => {
            h.isInFallback && (f(null, b, j, q, x, null, O, a, l), Vt(h, b));
          },
          J = b.transition && b.transition.mode === "out-in";
        J && (T.transition.afterLeave = U),
          (h.isInFallback = !0),
          g(T, x, null, !0),
          J || U();
      },
      move(b, R, T) {
        h.activeBranch && p(h.activeBranch, b, R, T), (h.container = b);
      },
      next() {
        return h.activeBranch && _(h.activeBranch);
      },
      registerDep(b, R) {
        const T = !!h.pendingBranch;
        T && h.deps++;
        const x = b.vnode.el;
        b.asyncDep
          .catch((j) => {
            sn(j, b, 0);
          })
          .then((j) => {
            if (b.isUnmounted || h.isUnmounted || h.pendingId !== b.suspenseId)
              return;
            b.asyncResolved = !0;
            const { vnode: O } = b;
            Gr(b, j, !1), x && (O.el = x);
            const q = !x && b.subTree.el;
            R(b, O, v(x || b.subTree.el), x ? null : _(b.subTree), h, i, l),
              q && E(q),
              $s(b, O.el),
              T && --h.deps === 0 && h.resolve();
          });
      },
      unmount(b, R) {
        (h.isUnmounted = !0),
          h.activeBranch && g(h.activeBranch, n, b, R),
          h.pendingBranch && g(h.pendingBranch, n, b, R);
      },
    };
  return h;
}
function wc(e, t, n, r, s, o, i, a, l) {
  const c = (t.suspense = Ls(
      t,
      r,
      n,
      e.parentNode,
      document.createElement("div"),
      null,
      s,
      o,
      i,
      a,
      !0
    )),
    u = l(e, (c.pendingBranch = t.ssContent), n, c, o, i);
  return c.deps === 0 && c.resolve(), u;
}
function Rc(e) {
  const { shapeFlag: t, children: n } = e,
    r = t & 32;
  (e.ssContent = uo(r ? n.default : n)),
    (e.ssFallback = r ? uo(n.fallback) : pe(Ae));
}
function uo(e) {
  let t;
  if (X(e)) {
    const n = Jt && e._c;
    n && ((e._d = !1), mt()), (e = e()), n && ((e._d = !0), (t = He), va());
  }
  return (
    z(e) && (e = mc(e)),
    (e = je(e)),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)),
    e
  );
}
function Xi(e, t) {
  t && t.pendingBranch
    ? z(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Wi(e);
}
function Vt(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: r } = e,
    s = (n.el = t.el);
  r && r.subTree === n && ((r.vnode.el = s), $s(r, s));
}
function Wt(e, t) {
  if (he) {
    let n = he.provides;
    const r = he.parent && he.parent.provides;
    r === n && (n = he.provides = Object.create(r)), (n[e] = t);
  }
}
function $e(e, t, n = !1) {
  const r = he || Ee;
  if (r) {
    const s =
      r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && X(t) ? t.call(r.proxy) : t;
  }
}
function Pc(e, t) {
  return js(e, null, t);
}
const Hn = {};
function xt(e, t, n) {
  return js(e, t, n);
}
function js(
  e,
  t,
  { immediate: n, deep: r, flush: s, onTrack: o, onTrigger: i } = ue
) {
  const a = kl() === (he == null ? void 0 : he.scope) ? he : null;
  let l,
    c = !1,
    u = !1;
  if (
    (ye(e)
      ? ((l = () => e.value), (c = Wn(e)))
      : Ut(e)
      ? ((l = () => e), (r = !0))
      : z(e)
      ? ((u = !0),
        (c = e.some((b) => Ut(b) || Wn(b))),
        (l = () =>
          e.map((b) => {
            if (ye(b)) return b.value;
            if (Ut(b)) return At(b);
            if (X(b)) return _t(b, a, 2);
          })))
      : X(e)
      ? t
        ? (l = () => _t(e, a, 2))
        : (l = () => {
            if (!(a && a.isUnmounted)) return f && f(), De(e, a, 3, [p]);
          })
      : (l = Ve),
    t && r)
  ) {
    const b = l;
    l = () => At(b());
  }
  let f,
    p = (b) => {
      f = y.onStop = () => {
        _t(b, a, 4);
      };
    },
    g;
  if (Gt)
    if (
      ((p = Ve),
      t ? n && De(t, a, 3, [l(), u ? [] : void 0, p]) : l(),
      s === "sync")
    ) {
      const b = fu();
      g = b.__watcherHandles || (b.__watcherHandles = []);
    } else return Ve;
  let _ = u ? new Array(e.length).fill(Hn) : Hn;
  const v = () => {
    if (y.active)
      if (t) {
        const b = y.run();
        (r || c || (u ? b.some((R, T) => En(R, _[T])) : En(b, _))) &&
          (f && f(),
          De(t, a, 3, [b, _ === Hn ? void 0 : u && _[0] === Hn ? [] : _, p]),
          (_ = b));
      } else y.run();
  };
  v.allowRecurse = !!t;
  let E;
  s === "sync"
    ? (E = v)
    : s === "post"
    ? (E = () => be(v, a && a.suspense))
    : ((v.pre = !0), a && (v.id = a.uid), (E = () => lr(v)));
  const y = new Ps(l, E);
  t
    ? n
      ? v()
      : (_ = y.run())
    : s === "post"
    ? be(y.run.bind(y), a && a.suspense)
    : y.run();
  const h = () => {
    y.stop(), a && a.scope && bs(a.scope.effects, y);
  };
  return g && g.push(h), h;
}
function Cc(e, t, n) {
  const r = this.proxy,
    s = me(e) ? (e.includes(".") ? Gi(r, e) : () => r[e]) : e.bind(r, r);
  let o;
  X(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = he;
  Xt(this);
  const a = js(s, o.bind(r), n);
  return i ? Xt(i) : St(), a;
}
function Gi(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
function At(e, t) {
  if (!fe(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), ye(e))) At(e.value, t);
  else if (z(e)) for (let n = 0; n < e.length; n++) At(e[n], t);
  else if (bi(e) || Bt(e))
    e.forEach((n) => {
      At(n, t);
    });
  else if (Ri(e)) for (const n in e) At(e[n], t);
  return e;
}
function Tc() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    Hs(() => {
      e.isMounted = !0;
    }),
    dr(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Le = [Function, Array],
  Ac = {
    name: "BaseTransition",
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: Le,
      onEnter: Le,
      onAfterEnter: Le,
      onEnterCancelled: Le,
      onBeforeLeave: Le,
      onLeave: Le,
      onAfterLeave: Le,
      onLeaveCancelled: Le,
      onBeforeAppear: Le,
      onAppear: Le,
      onAfterAppear: Le,
      onAppearCancelled: Le,
    },
    setup(e, { slots: t }) {
      const n = it(),
        r = Tc();
      let s;
      return () => {
        const o = t.default && ea(t.default(), !0);
        if (!o || !o.length) return;
        let i = o[0];
        if (o.length > 1) {
          for (const v of o)
            if (v.type !== Ae) {
              i = v;
              break;
            }
        }
        const a = se(e),
          { mode: l } = a;
        if (r.isLeaving) return Pr(i);
        const c = fo(i);
        if (!c) return Pr(i);
        const u = qr(c, a, r, n);
        Jn(c, u);
        const f = n.subTree,
          p = f && fo(f);
        let g = !1;
        const { getTransitionKey: _ } = c.type;
        if (_) {
          const v = _();
          s === void 0 ? (s = v) : v !== s && ((s = v), (g = !0));
        }
        if (p && p.type !== Ae && (!Ke(c, p) || g)) {
          const v = qr(p, a, r, n);
          if ((Jn(p, v), l === "out-in"))
            return (
              (r.isLeaving = !0),
              (v.afterLeave = () => {
                (r.isLeaving = !1), n.update.active !== !1 && n.update();
              }),
              Pr(i)
            );
          l === "in-out" &&
            c.type !== Ae &&
            (v.delayLeave = (E, y, h) => {
              const b = Zi(r, p);
              (b[String(p.key)] = p),
                (E._leaveCb = () => {
                  y(), (E._leaveCb = void 0), delete u.delayedLeave;
                }),
                (u.delayedLeave = h);
            });
        }
        return i;
      };
    },
  },
  Yi = Ac;
function Zi(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function qr(e, t, n, r) {
  const {
      appear: s,
      mode: o,
      persisted: i = !1,
      onBeforeEnter: a,
      onEnter: l,
      onAfterEnter: c,
      onEnterCancelled: u,
      onBeforeLeave: f,
      onLeave: p,
      onAfterLeave: g,
      onLeaveCancelled: _,
      onBeforeAppear: v,
      onAppear: E,
      onAfterAppear: y,
      onAppearCancelled: h,
    } = t,
    b = String(e.key),
    R = Zi(n, e),
    T = (O, q) => {
      O && De(O, r, 9, q);
    },
    x = (O, q) => {
      const U = q[1];
      T(O, q),
        z(O) ? O.every((J) => J.length <= 1) && U() : O.length <= 1 && U();
    },
    j = {
      mode: o,
      persisted: i,
      beforeEnter(O) {
        let q = a;
        if (!n.isMounted)
          if (s) q = v || a;
          else return;
        O._leaveCb && O._leaveCb(!0);
        const U = R[b];
        U && Ke(e, U) && U.el._leaveCb && U.el._leaveCb(), T(q, [O]);
      },
      enter(O) {
        let q = l,
          U = c,
          J = u;
        if (!n.isMounted)
          if (s) (q = E || l), (U = y || c), (J = h || u);
          else return;
        let D = !1;
        const G = (O._enterCb = (N) => {
          D ||
            ((D = !0),
            N ? T(J, [O]) : T(U, [O]),
            j.delayedLeave && j.delayedLeave(),
            (O._enterCb = void 0));
        });
        q ? x(q, [O, G]) : G();
      },
      leave(O, q) {
        const U = String(e.key);
        if ((O._enterCb && O._enterCb(!0), n.isUnmounting)) return q();
        T(f, [O]);
        let J = !1;
        const D = (O._leaveCb = (G) => {
          J ||
            ((J = !0),
            q(),
            G ? T(_, [O]) : T(g, [O]),
            (O._leaveCb = void 0),
            R[U] === e && delete R[U]);
        });
        (R[U] = e), p ? x(p, [O, D]) : D();
      },
      clone(O) {
        return qr(O, t, n, r);
      },
    };
  return j;
}
function Pr(e) {
  if (kn(e)) return (e = st(e)), (e.children = null), e;
}
function fo(e) {
  return kn(e) ? (e.children ? e.children[0] : void 0) : e;
}
function Jn(e, t) {
  e.shapeFlag & 6 && e.component
    ? Jn(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function ea(e, t = !1, n) {
  let r = [],
    s = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === xe
      ? (i.patchFlag & 128 && s++, (r = r.concat(ea(i.children, t, a))))
      : (t || i.type !== Ae) && r.push(a != null ? st(i, { key: a }) : i);
  }
  if (s > 1) for (let o = 0; o < r.length; o++) r[o].patchFlag = -2;
  return r;
}
function vt(e) {
  return X(e) ? { setup: e, name: e.name } : e;
}
const It = (e) => !!e.type.__asyncLoader;
function ee(e) {
  X(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: r,
    delay: s = 200,
    timeout: o,
    suspensible: i = !0,
    onError: a,
  } = e;
  let l = null,
    c,
    u = 0;
  const f = () => (u++, (l = null), p()),
    p = () => {
      let g;
      return (
        l ||
        (g = l =
          t()
            .catch((_) => {
              if (((_ = _ instanceof Error ? _ : new Error(String(_))), a))
                return new Promise((v, E) => {
                  a(
                    _,
                    () => v(f()),
                    () => E(_),
                    u + 1
                  );
                });
              throw _;
            })
            .then((_) =>
              g !== l && l
                ? l
                : (_ &&
                    (_.__esModule || _[Symbol.toStringTag] === "Module") &&
                    (_ = _.default),
                  (c = _),
                  _)
            ))
      );
    };
  return vt({
    name: "AsyncComponentWrapper",
    __asyncLoader: p,
    get __asyncResolved() {
      return c;
    },
    setup() {
      const g = he;
      if (c) return () => Cr(c, g);
      const _ = (h) => {
        (l = null), sn(h, g, 13, !r);
      };
      if ((i && g.suspense) || Gt)
        return p()
          .then((h) => () => Cr(h, g))
          .catch((h) => (_(h), () => (r ? pe(r, { error: h }) : null)));
      const v = nt(!1),
        E = nt(),
        y = nt(!!s);
      return (
        s &&
          setTimeout(() => {
            y.value = !1;
          }, s),
        o != null &&
          setTimeout(() => {
            if (!v.value && !E.value) {
              const h = new Error(`Async component timed out after ${o}ms.`);
              _(h), (E.value = h);
            }
          }, o),
        p()
          .then(() => {
            (v.value = !0),
              g.parent && kn(g.parent.vnode) && lr(g.parent.update);
          })
          .catch((h) => {
            _(h), (E.value = h);
          }),
        () => {
          if (v.value && c) return Cr(c, g);
          if (E.value && r) return pe(r, { error: E.value });
          if (n && !y.value) return pe(n);
        }
      );
    },
  });
}
function Cr(e, t) {
  const { ref: n, props: r, children: s, ce: o } = t.vnode,
    i = pe(e, r, s);
  return (i.ref = n), (i.ce = o), delete t.vnode.ce, i;
}
const kn = (e) => e.type.__isKeepAlive,
  Oc = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(e, { slots: t }) {
      const n = it(),
        r = n.ctx;
      if (!r.renderer)
        return () => {
          const h = t.default && t.default();
          return h && h.length === 1 ? h[0] : h;
        };
      const s = new Map(),
        o = new Set();
      let i = null;
      const a = n.suspense,
        {
          renderer: {
            p: l,
            m: c,
            um: u,
            o: { createElement: f },
          },
        } = r,
        p = f("div");
      (r.activate = (h, b, R, T, x) => {
        const j = h.component;
        c(h, b, R, 0, a),
          l(j.vnode, h, b, R, j, a, T, h.slotScopeIds, x),
          be(() => {
            (j.isDeactivated = !1), j.a && pn(j.a);
            const O = h.props && h.props.onVnodeMounted;
            O && ke(O, j.parent, h);
          }, a);
      }),
        (r.deactivate = (h) => {
          const b = h.component;
          c(h, p, null, 1, a),
            be(() => {
              b.da && pn(b.da);
              const R = h.props && h.props.onVnodeUnmounted;
              R && ke(R, b.parent, h), (b.isDeactivated = !0);
            }, a);
        });
      function g(h) {
        Tr(h), u(h, n, a, !0);
      }
      function _(h) {
        s.forEach((b, R) => {
          const T = Yr(b.type);
          T && (!h || !h(T)) && v(R);
        });
      }
      function v(h) {
        const b = s.get(h);
        !i || !Ke(b, i) ? g(b) : i && Tr(i), s.delete(h), o.delete(h);
      }
      xt(
        () => [e.include, e.exclude],
        ([h, b]) => {
          h && _((R) => dn(h, R)), b && _((R) => !dn(b, R));
        },
        { flush: "post", deep: !0 }
      );
      let E = null;
      const y = () => {
        E != null && s.set(E, Ar(n.subTree));
      };
      return (
        Hs(y),
        oa(y),
        dr(() => {
          s.forEach((h) => {
            const { subTree: b, suspense: R } = n,
              T = Ar(b);
            if (h.type === T.type && h.key === T.key) {
              Tr(T);
              const x = T.component.da;
              x && be(x, R);
              return;
            }
            g(h);
          });
        }),
        () => {
          if (((E = null), !t.default)) return null;
          const h = t.default(),
            b = h[0];
          if (h.length > 1) return (i = null), h;
          if (!Qt(b) || (!(b.shapeFlag & 4) && !(b.shapeFlag & 128)))
            return (i = null), b;
          let R = Ar(b);
          const T = R.type,
            x = Yr(It(R) ? R.type.__asyncResolved || {} : T),
            { include: j, exclude: O, max: q } = e;
          if ((j && (!x || !dn(j, x))) || (O && x && dn(O, x)))
            return (i = R), b;
          const U = R.key == null ? T : R.key,
            J = s.get(U);
          return (
            R.el && ((R = st(R)), b.shapeFlag & 128 && (b.ssContent = R)),
            (E = U),
            J
              ? ((R.el = J.el),
                (R.component = J.component),
                R.transition && Jn(R, R.transition),
                (R.shapeFlag |= 512),
                o.delete(U),
                o.add(U))
              : (o.add(U),
                q && o.size > parseInt(q, 10) && v(o.values().next().value)),
            (R.shapeFlag |= 256),
            (i = R),
            Ji(b.type) ? b : R
          );
        }
      );
    },
  },
  kc = Oc;
function dn(e, t) {
  return z(e)
    ? e.some((n) => dn(n, t))
    : me(e)
    ? e.split(",").includes(t)
    : El(e)
    ? e.test(t)
    : !1;
}
function ta(e, t) {
  ra(e, "a", t);
}
function na(e, t) {
  ra(e, "da", t);
}
function ra(e, t, n = he) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
  if ((fr(t, r, n), n)) {
    let s = n.parent;
    for (; s && s.parent; )
      kn(s.parent.vnode) && xc(r, t, n, s), (s = s.parent);
  }
}
function xc(e, t, n, r) {
  const s = fr(t, e, r, !0);
  Qn(() => {
    bs(r[t], s);
  }, n);
}
function Tr(e) {
  (e.shapeFlag &= -257), (e.shapeFlag &= -513);
}
function Ar(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function fr(e, t, n = he, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          nn(), Xt(n);
          const a = De(t, n, e, i);
          return St(), rn(), a;
        });
    return r ? s.unshift(o) : s.push(o), o;
  }
}
const ot =
    (e) =>
    (t, n = he) =>
      (!Gt || e === "sp") && fr(e, (...r) => t(...r), n),
  sa = ot("bm"),
  Hs = ot("m"),
  Ic = ot("bu"),
  oa = ot("u"),
  dr = ot("bum"),
  Qn = ot("um"),
  Sc = ot("sp"),
  $c = ot("rtg"),
  Lc = ot("rtc");
function ia(e, t = he) {
  fr("ec", e, t);
}
function Cm(e, t) {
  const n = Ee;
  if (n === null) return e;
  const r = pr(n) || n.proxy,
    s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, a, l, c = ue] = t[o];
    i &&
      (X(i) && (i = { mounted: i, updated: i }),
      i.deep && At(a),
      s.push({
        dir: i,
        instance: r,
        value: a,
        oldValue: void 0,
        arg: l,
        modifiers: c,
      }));
  }
  return e;
}
function Qe(e, t, n, r) {
  const s = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    o && (a.oldValue = o[i].value);
    let l = a.dir[r];
    l && (nn(), De(l, n, 8, [e.el, a, e, t]), rn());
  }
}
const Ds = "components";
function Tm(e, t) {
  return la(Ds, e, !0, t) || e;
}
const aa = Symbol();
function Am(e) {
  return me(e) ? la(Ds, e, !1) || e : e || aa;
}
function la(e, t, n = !0, r = !1) {
  const s = Ee || he;
  if (s) {
    const o = s.type;
    if (e === Ds) {
      const a = Yr(o, !1);
      if (a && (a === t || a === Ge(t) || a === ir(Ge(t)))) return o;
    }
    const i = ho(s[e] || o[e], t) || ho(s.appContext[e], t);
    return !i && r ? o : i;
  }
}
function ho(e, t) {
  return e && (e[t] || e[Ge(t)] || e[ir(Ge(t))]);
}
function Om(e, t, n, r) {
  let s;
  const o = n && n[r];
  if (z(e) || me(e)) {
    s = new Array(e.length);
    for (let i = 0, a = e.length; i < a; i++)
      s[i] = t(e[i], i, void 0, o && o[i]);
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let i = 0; i < e; i++) s[i] = t(i + 1, i, void 0, o && o[i]);
  } else if (fe(e))
    if (e[Symbol.iterator])
      s = Array.from(e, (i, a) => t(i, a, void 0, o && o[a]));
    else {
      const i = Object.keys(e);
      s = new Array(i.length);
      for (let a = 0, l = i.length; a < l; a++) {
        const c = i[a];
        s[a] = t(e[c], c, a, o && o[a]);
      }
    }
  else s = [];
  return n && (n[r] = s), s;
}
function km(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (z(r)) for (let s = 0; s < r.length; s++) e[r[s].name] = r[s].fn;
    else
      r &&
        (e[r.name] = r.key
          ? (...s) => {
              const o = r.fn(...s);
              return o && (o.key = r.key), o;
            }
          : r.fn);
  }
  return e;
}
function xm(e, t, n = {}, r, s) {
  if (Ee.isCE || (Ee.parent && It(Ee.parent) && Ee.parent.isCE))
    return t !== "default" && (n.name = t), pe("slot", n, r && r());
  let o = e[t];
  o && o._c && (o._d = !1), mt();
  const i = o && ca(o(n)),
    a = Ot(
      xe,
      { key: n.key || (i && i.key) || `_${t}` },
      i || (r ? r() : []),
      i && e._ === 1 ? 64 : -2
    );
  return (
    !s && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    o && o._c && (o._d = !0),
    a
  );
}
function ca(e) {
  return e.some((t) =>
    Qt(t) ? !(t.type === Ae || (t.type === xe && !ca(t.children))) : !0
  )
    ? e
    : null;
}
const zr = (e) => (e ? (Pa(e) ? pr(e) || e.proxy : zr(e.parent)) : null),
  mn = we(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => zr(e.parent),
    $root: (e) => zr(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ms(e),
    $forceUpdate: (e) => e.f || (e.f = () => lr(e.update)),
    $nextTick: (e) => e.n || (e.n = on.bind(e.proxy)),
    $watch: (e) => Cc.bind(e),
  }),
  Or = (e, t) => e !== ue && !e.__isScriptSetup && re(e, t),
  jc = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: o,
        accessCache: i,
        type: a,
        appContext: l,
      } = e;
      let c;
      if (t[0] !== "$") {
        const g = i[t];
        if (g !== void 0)
          switch (g) {
            case 1:
              return r[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (Or(r, t)) return (i[t] = 1), r[t];
          if (s !== ue && re(s, t)) return (i[t] = 2), s[t];
          if ((c = e.propsOptions[0]) && re(c, t)) return (i[t] = 3), o[t];
          if (n !== ue && re(n, t)) return (i[t] = 4), n[t];
          Jr && (i[t] = 0);
        }
      }
      const u = mn[t];
      let f, p;
      if (u) return t === "$attrs" && Ie(e, "get", t), u(e);
      if ((f = a.__cssModules) && (f = f[t])) return f;
      if (n !== ue && re(n, t)) return (i[t] = 4), n[t];
      if (((p = l.config.globalProperties), re(p, t))) return p[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: o } = e;
      return Or(s, t)
        ? ((s[t] = n), !0)
        : r !== ue && re(r, t)
        ? ((r[t] = n), !0)
        : re(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: s,
          propsOptions: o,
        },
      },
      i
    ) {
      let a;
      return (
        !!n[i] ||
        (e !== ue && re(e, i)) ||
        Or(t, i) ||
        ((a = o[0]) && re(a, i)) ||
        re(r, i) ||
        re(mn, i) ||
        re(s.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : re(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
let Jr = !0;
function Hc(e) {
  const t = Ms(e),
    n = e.proxy,
    r = e.ctx;
  (Jr = !1), t.beforeCreate && po(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: o,
    methods: i,
    watch: a,
    provide: l,
    inject: c,
    created: u,
    beforeMount: f,
    mounted: p,
    beforeUpdate: g,
    updated: _,
    activated: v,
    deactivated: E,
    beforeDestroy: y,
    beforeUnmount: h,
    destroyed: b,
    unmounted: R,
    render: T,
    renderTracked: x,
    renderTriggered: j,
    errorCaptured: O,
    serverPrefetch: q,
    expose: U,
    inheritAttrs: J,
    components: D,
    directives: G,
    filters: N,
  } = t;
  if ((c && Dc(c, r, null, e.appContext.config.unwrapInjectedRef), i))
    for (const le in i) {
      const ie = i[le];
      X(ie) && (r[le] = ie.bind(n));
    }
  if (s) {
    const le = s.call(n, n);
    fe(le) && (e.data = qe(le));
  }
  if (((Jr = !0), o))
    for (const le in o) {
      const ie = o[le],
        Me = X(ie) ? ie.bind(n, n) : X(ie.get) ? ie.get.bind(n, n) : Ve,
        bt = !X(ie) && X(ie.set) ? ie.set.bind(n) : Ve,
        Ne = Te({ get: Me, set: bt });
      Object.defineProperty(r, le, {
        enumerable: !0,
        configurable: !0,
        get: () => Ne.value,
        set: (Oe) => (Ne.value = Oe),
      });
    }
  if (a) for (const le in a) ua(a[le], r, n, le);
  if (l) {
    const le = X(l) ? l.call(n) : l;
    Reflect.ownKeys(le).forEach((ie) => {
      Wt(ie, le[ie]);
    });
  }
  u && po(u, e, "c");
  function te(le, ie) {
    z(ie) ? ie.forEach((Me) => le(Me.bind(n))) : ie && le(ie.bind(n));
  }
  if (
    (te(sa, f),
    te(Hs, p),
    te(Ic, g),
    te(oa, _),
    te(ta, v),
    te(na, E),
    te(ia, O),
    te(Lc, x),
    te($c, j),
    te(dr, h),
    te(Qn, R),
    te(Sc, q),
    z(U))
  )
    if (U.length) {
      const le = e.exposed || (e.exposed = {});
      U.forEach((ie) => {
        Object.defineProperty(le, ie, {
          get: () => n[ie],
          set: (Me) => (n[ie] = Me),
        });
      });
    } else e.exposed || (e.exposed = {});
  T && e.render === Ve && (e.render = T),
    J != null && (e.inheritAttrs = J),
    D && (e.components = D),
    G && (e.directives = G);
}
function Dc(e, t, n = Ve, r = !1) {
  z(e) && (e = Qr(e));
  for (const s in e) {
    const o = e[s];
    let i;
    fe(o)
      ? "default" in o
        ? (i = $e(o.from || s, o.default, !0))
        : (i = $e(o.from || s))
      : (i = $e(o)),
      ye(i) && r
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (a) => (i.value = a),
          })
        : (t[s] = i);
  }
}
function po(e, t, n) {
  De(z(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ua(e, t, n, r) {
  const s = r.includes(".") ? Gi(n, r) : () => n[r];
  if (me(e)) {
    const o = t[e];
    X(o) && xt(s, o);
  } else if (X(e)) xt(s, e.bind(n));
  else if (fe(e))
    if (z(e)) e.forEach((o) => ua(o, t, n, r));
    else {
      const o = X(e.handler) ? e.handler.bind(n) : t[e.handler];
      X(o) && xt(s, o, e);
    }
}
function Ms(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    a = o.get(t);
  let l;
  return (
    a
      ? (l = a)
      : !s.length && !n && !r
      ? (l = t)
      : ((l = {}), s.length && s.forEach((c) => Xn(l, c, i, !0)), Xn(l, t, i)),
    fe(t) && o.set(t, l),
    l
  );
}
function Xn(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && Xn(e, o, n, !0), s && s.forEach((i) => Xn(e, i, n, !0));
  for (const i in t)
    if (!(r && i === "expose")) {
      const a = Mc[i] || (n && n[i]);
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const Mc = {
  data: mo,
  props: Pt,
  emits: Pt,
  methods: Pt,
  computed: Pt,
  beforeCreate: Ce,
  created: Ce,
  beforeMount: Ce,
  mounted: Ce,
  beforeUpdate: Ce,
  updated: Ce,
  beforeDestroy: Ce,
  beforeUnmount: Ce,
  destroyed: Ce,
  unmounted: Ce,
  activated: Ce,
  deactivated: Ce,
  errorCaptured: Ce,
  serverPrefetch: Ce,
  components: Pt,
  directives: Pt,
  watch: Fc,
  provide: mo,
  inject: Nc,
};
function mo(e, t) {
  return t
    ? e
      ? function () {
          return we(
            X(e) ? e.call(this, this) : e,
            X(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Nc(e, t) {
  return Pt(Qr(e), Qr(t));
}
function Qr(e) {
  if (z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ce(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Pt(e, t) {
  return e ? we(we(Object.create(null), e), t) : t;
}
function Fc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = we(Object.create(null), e);
  for (const r in t) n[r] = Ce(e[r], t[r]);
  return n;
}
function Bc(e, t, n, r = !1) {
  const s = {},
    o = {};
  Kn(o, hr, 1), (e.propsDefaults = Object.create(null)), fa(e, t, s, o);
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
  n ? (e.props = r ? s : rc(s)) : e.type.props ? (e.props = s) : (e.props = o),
    (e.attrs = o);
}
function Uc(e, t, n, r) {
  const {
      props: s,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    a = se(s),
    [l] = e.propsOptions;
  let c = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let p = u[f];
        if (cr(e.emitsOptions, p)) continue;
        const g = t[p];
        if (l)
          if (re(o, p)) g !== o[p] && ((o[p] = g), (c = !0));
          else {
            const _ = Ge(p);
            s[_] = Xr(l, a, _, g, e, !1);
          }
        else g !== o[p] && ((o[p] = g), (c = !0));
      }
    }
  } else {
    fa(e, t, s, o) && (c = !0);
    let u;
    for (const f in a)
      (!t || (!re(t, f) && ((u = tn(f)) === f || !re(t, u)))) &&
        (l
          ? n &&
            (n[f] !== void 0 || n[u] !== void 0) &&
            (s[f] = Xr(l, a, f, void 0, e, !0))
          : delete s[f]);
    if (o !== a)
      for (const f in o) (!t || !re(t, f)) && (delete o[f], (c = !0));
  }
  c && rt(e, "set", "$attrs");
}
function fa(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1,
    a;
  if (t)
    for (let l in t) {
      if (hn(l)) continue;
      const c = t[l];
      let u;
      s && re(s, (u = Ge(l)))
        ? !o || !o.includes(u)
          ? (n[u] = c)
          : ((a || (a = {}))[u] = c)
        : cr(e.emitsOptions, l) ||
          ((!(l in r) || c !== r[l]) && ((r[l] = c), (i = !0)));
    }
  if (o) {
    const l = se(n),
      c = a || ue;
    for (let u = 0; u < o.length; u++) {
      const f = o[u];
      n[f] = Xr(s, l, f, c[f], e, !re(c, f));
    }
  }
  return i;
}
function Xr(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const a = re(i, "default");
    if (a && r === void 0) {
      const l = i.default;
      if (i.type !== Function && X(l)) {
        const { propsDefaults: c } = s;
        n in c ? (r = c[n]) : (Xt(s), (r = c[n] = l.call(null, t)), St());
      } else r = l;
    }
    i[0] &&
      (o && !a ? (r = !1) : i[1] && (r === "" || r === tn(n)) && (r = !0));
  }
  return r;
}
function da(e, t, n = !1) {
  const r = t.propsCache,
    s = r.get(e);
  if (s) return s;
  const o = e.props,
    i = {},
    a = [];
  let l = !1;
  if (!X(e)) {
    const u = (f) => {
      l = !0;
      const [p, g] = da(f, t, !0);
      we(i, p), g && a.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  if (!o && !l) return fe(e) && r.set(e, Ft), Ft;
  if (z(o))
    for (let u = 0; u < o.length; u++) {
      const f = Ge(o[u]);
      go(f) && (i[f] = ue);
    }
  else if (o)
    for (const u in o) {
      const f = Ge(u);
      if (go(f)) {
        const p = o[u],
          g = (i[f] = z(p) || X(p) ? { type: p } : Object.assign({}, p));
        if (g) {
          const _ = vo(Boolean, g.type),
            v = vo(String, g.type);
          (g[0] = _ > -1),
            (g[1] = v < 0 || _ < v),
            (_ > -1 || re(g, "default")) && a.push(f);
        }
      }
    }
  const c = [i, a];
  return fe(e) && r.set(e, c), c;
}
function go(e) {
  return e[0] !== "$";
}
function _o(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function yo(e, t) {
  return _o(e) === _o(t);
}
function vo(e, t) {
  return z(t) ? t.findIndex((n) => yo(n, e)) : X(t) && yo(t, e) ? 0 : -1;
}
const ha = (e) => e[0] === "_" || e === "$stable",
  Ns = (e) => (z(e) ? e.map(je) : [je(e)]),
  Kc = (e, t, n) => {
    if (t._n) return t;
    const r = Ss((...s) => Ns(t(...s)), n);
    return (r._c = !1), r;
  },
  pa = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (ha(s)) continue;
      const o = e[s];
      if (X(o)) t[s] = Kc(s, o, r);
      else if (o != null) {
        const i = Ns(o);
        t[s] = () => i;
      }
    }
  },
  ma = (e, t) => {
    const n = Ns(t);
    e.slots.default = () => n;
  },
  Vc = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = se(t)), Kn(t, "_", n)) : pa(t, (e.slots = {}));
    } else (e.slots = {}), t && ma(e, t);
    Kn(e.slots, hr, 1);
  },
  Wc = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let o = !0,
      i = ue;
    if (r.shapeFlag & 32) {
      const a = t._;
      a
        ? n && a === 1
          ? (o = !1)
          : (we(s, t), !n && a === 1 && delete s._)
        : ((o = !t.$stable), pa(t, s)),
        (i = t);
    } else t && (ma(e, t), (i = { default: 1 }));
    if (o) for (const a in s) !ha(a) && !(a in i) && delete s[a];
  };
function ga() {
  return {
    app: null,
    config: {
      isNativeTag: yl,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let qc = 0;
function zc(e, t) {
  return function (r, s = null) {
    X(r) || (r = Object.assign({}, r)), s != null && !fe(s) && (s = null);
    const o = ga(),
      i = new Set();
    let a = !1;
    const l = (o.app = {
      _uid: qc++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: Bs,
      get config() {
        return o.config;
      },
      set config(c) {},
      use(c, ...u) {
        return (
          i.has(c) ||
            (c && X(c.install)
              ? (i.add(c), c.install(l, ...u))
              : X(c) && (i.add(c), c(l, ...u))),
          l
        );
      },
      mixin(c) {
        return o.mixins.includes(c) || o.mixins.push(c), l;
      },
      component(c, u) {
        return u ? ((o.components[c] = u), l) : o.components[c];
      },
      directive(c, u) {
        return u ? ((o.directives[c] = u), l) : o.directives[c];
      },
      mount(c, u, f) {
        if (!a) {
          const p = pe(r, s);
          return (
            (p.appContext = o),
            u && t ? t(p, c) : e(p, c, f),
            (a = !0),
            (l._container = c),
            (c.__vue_app__ = l),
            pr(p.component) || p.component.proxy
          );
        }
      },
      unmount() {
        a && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(c, u) {
        return (o.provides[c] = u), l;
      },
    });
    return l;
  };
}
function Gn(e, t, n, r, s = !1) {
  if (z(e)) {
    e.forEach((p, g) => Gn(p, t && (z(t) ? t[g] : t), n, r, s));
    return;
  }
  if (It(r) && !s) return;
  const o = r.shapeFlag & 4 ? pr(r.component) || r.component.proxy : r.el,
    i = s ? null : o,
    { i: a, r: l } = e,
    c = t && t.r,
    u = a.refs === ue ? (a.refs = {}) : a.refs,
    f = a.setupState;
  if (
    (c != null &&
      c !== l &&
      (me(c)
        ? ((u[c] = null), re(f, c) && (f[c] = null))
        : ye(c) && (c.value = null)),
    X(l))
  )
    _t(l, a, 12, [i, u]);
  else {
    const p = me(l),
      g = ye(l);
    if (p || g) {
      const _ = () => {
        if (e.f) {
          const v = p ? (re(f, l) ? f[l] : u[l]) : l.value;
          s
            ? z(v) && bs(v, o)
            : z(v)
            ? v.includes(o) || v.push(o)
            : p
            ? ((u[l] = [o]), re(f, l) && (f[l] = u[l]))
            : ((l.value = [o]), e.k && (u[e.k] = l.value));
        } else
          p
            ? ((u[l] = i), re(f, l) && (f[l] = i))
            : g && ((l.value = i), e.k && (u[e.k] = i));
      };
      i ? ((_.id = -1), be(_, n)) : _();
    }
  }
}
let ct = !1;
const Dn = (e) => /svg/.test(e.namespaceURI) && e.tagName !== "foreignObject",
  Mn = (e) => e.nodeType === 8;
function Jc(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: r,
        createText: s,
        nextSibling: o,
        parentNode: i,
        remove: a,
        insert: l,
        createComment: c,
      },
    } = e,
    u = (y, h) => {
      if (!h.hasChildNodes()) {
        n(null, y, h), qn(), (h._vnode = y);
        return;
      }
      (ct = !1),
        f(h.firstChild, y, null, null, null),
        qn(),
        (h._vnode = y),
        ct && console.error("Hydration completed but contains mismatches.");
    },
    f = (y, h, b, R, T, x = !1) => {
      const j = Mn(y) && y.data === "[",
        O = () => v(y, h, b, R, T, j),
        { type: q, ref: U, shapeFlag: J, patchFlag: D } = h;
      let G = y.nodeType;
      (h.el = y), D === -2 && ((x = !1), (h.dynamicChildren = null));
      let N = null;
      switch (q) {
        case zt:
          G !== 3
            ? h.children === ""
              ? (l((h.el = s("")), i(y), y), (N = y))
              : (N = O())
            : (y.data !== h.children && ((ct = !0), (y.data = h.children)),
              (N = o(y)));
          break;
        case Ae:
          G !== 8 || j ? (N = O()) : (N = o(y));
          break;
        case Bn:
          if ((j && ((y = o(y)), (G = y.nodeType)), G === 1 || G === 3)) {
            N = y;
            const Re = !h.children.length;
            for (let te = 0; te < h.staticCount; te++)
              Re && (h.children += N.nodeType === 1 ? N.outerHTML : N.data),
                te === h.staticCount - 1 && (h.anchor = N),
                (N = o(N));
            return j ? o(N) : N;
          } else O();
          break;
        case xe:
          j ? (N = _(y, h, b, R, T, x)) : (N = O());
          break;
        default:
          if (J & 1)
            G !== 1 || h.type.toLowerCase() !== y.tagName.toLowerCase()
              ? (N = O())
              : (N = p(y, h, b, R, T, x));
          else if (J & 6) {
            h.slotScopeIds = T;
            const Re = i(y);
            if (
              (t(h, Re, null, b, R, Dn(Re), x),
              (N = j ? E(y) : o(y)),
              N && Mn(N) && N.data === "teleport end" && (N = o(N)),
              It(h))
            ) {
              let te;
              j
                ? ((te = pe(xe)),
                  (te.anchor = N ? N.previousSibling : Re.lastChild))
                : (te = y.nodeType === 3 ? Ra("") : pe("div")),
                (te.el = y),
                (h.component.subTree = te);
            }
          } else
            J & 64
              ? G !== 8
                ? (N = O())
                : (N = h.type.hydrate(y, h, b, R, T, x, e, g))
              : J & 128 &&
                (N = h.type.hydrate(y, h, b, R, Dn(i(y)), T, x, e, f));
      }
      return U != null && Gn(U, null, R, h), N;
    },
    p = (y, h, b, R, T, x) => {
      x = x || !!h.dynamicChildren;
      const { type: j, props: O, patchFlag: q, shapeFlag: U, dirs: J } = h,
        D = (j === "input" && J) || j === "option";
      if (D || q !== -1) {
        if ((J && Qe(h, null, b, "created"), O))
          if (D || !x || q & 48)
            for (const N in O)
              ((D && N.endsWith("value")) || (An(N) && !hn(N))) &&
                r(y, N, null, O[N], !1, void 0, b);
          else O.onClick && r(y, "onClick", null, O.onClick, !1, void 0, b);
        let G;
        if (
          ((G = O && O.onVnodeBeforeMount) && ke(G, b, h),
          J && Qe(h, null, b, "beforeMount"),
          ((G = O && O.onVnodeMounted) || J) &&
            Xi(() => {
              G && ke(G, b, h), J && Qe(h, null, b, "mounted");
            }, R),
          U & 16 && !(O && (O.innerHTML || O.textContent)))
        ) {
          let N = g(y.firstChild, h, y, b, R, T, x);
          for (; N; ) {
            ct = !0;
            const Re = N;
            (N = N.nextSibling), a(Re);
          }
        } else
          U & 8 &&
            y.textContent !== h.children &&
            ((ct = !0), (y.textContent = h.children));
      }
      return y.nextSibling;
    },
    g = (y, h, b, R, T, x, j) => {
      j = j || !!h.dynamicChildren;
      const O = h.children,
        q = O.length;
      for (let U = 0; U < q; U++) {
        const J = j ? O[U] : (O[U] = je(O[U]));
        if (y) y = f(y, J, R, T, x, j);
        else {
          if (J.type === zt && !J.children) continue;
          (ct = !0), n(null, J, b, null, R, T, Dn(b), x);
        }
      }
      return y;
    },
    _ = (y, h, b, R, T, x) => {
      const { slotScopeIds: j } = h;
      j && (T = T ? T.concat(j) : j);
      const O = i(y),
        q = g(o(y), h, O, b, R, T, x);
      return q && Mn(q) && q.data === "]"
        ? o((h.anchor = q))
        : ((ct = !0), l((h.anchor = c("]")), O, q), q);
    },
    v = (y, h, b, R, T, x) => {
      if (((ct = !0), (h.el = null), x)) {
        const q = E(y);
        for (;;) {
          const U = o(y);
          if (U && U !== q) a(U);
          else break;
        }
      }
      const j = o(y),
        O = i(y);
      return a(y), n(null, h, O, j, b, R, Dn(O), T), j;
    },
    E = (y) => {
      let h = 0;
      for (; y; )
        if (
          ((y = o(y)), y && Mn(y) && (y.data === "[" && h++, y.data === "]"))
        ) {
          if (h === 0) return o(y);
          h--;
        }
      return y;
    };
  return [u, f];
}
const be = Xi;
function Qc(e) {
  return _a(e);
}
function Xc(e) {
  return _a(e, Jc);
}
function _a(e, t) {
  const n = Tl();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: s,
      patchProp: o,
      createElement: i,
      createText: a,
      createComment: l,
      setText: c,
      setElementText: u,
      parentNode: f,
      nextSibling: p,
      setScopeId: g = Ve,
      insertStaticContent: _,
    } = e,
    v = (
      d,
      m,
      w,
      P = null,
      A = null,
      S = null,
      H = !1,
      I = null,
      $ = !!m.dynamicChildren
    ) => {
      if (d === m) return;
      d && !Ke(d, m) && ((P = L(d)), Oe(d, A, S, !0), (d = null)),
        m.patchFlag === -2 && (($ = !1), (m.dynamicChildren = null));
      const { type: k, ref: V, shapeFlag: F } = m;
      switch (k) {
        case zt:
          E(d, m, w, P);
          break;
        case Ae:
          y(d, m, w, P);
          break;
        case Bn:
          d == null && h(m, w, P, H);
          break;
        case xe:
          D(d, m, w, P, A, S, H, I, $);
          break;
        default:
          F & 1
            ? T(d, m, w, P, A, S, H, I, $)
            : F & 6
            ? G(d, m, w, P, A, S, H, I, $)
            : (F & 64 || F & 128) && k.process(d, m, w, P, A, S, H, I, $, ne);
      }
      V != null && A && Gn(V, d && d.ref, S, m || d, !m);
    },
    E = (d, m, w, P) => {
      if (d == null) r((m.el = a(m.children)), w, P);
      else {
        const A = (m.el = d.el);
        m.children !== d.children && c(A, m.children);
      }
    },
    y = (d, m, w, P) => {
      d == null ? r((m.el = l(m.children || "")), w, P) : (m.el = d.el);
    },
    h = (d, m, w, P) => {
      [d.el, d.anchor] = _(d.children, m, w, P, d.el, d.anchor);
    },
    b = ({ el: d, anchor: m }, w, P) => {
      let A;
      for (; d && d !== m; ) (A = p(d)), r(d, w, P), (d = A);
      r(m, w, P);
    },
    R = ({ el: d, anchor: m }) => {
      let w;
      for (; d && d !== m; ) (w = p(d)), s(d), (d = w);
      s(m);
    },
    T = (d, m, w, P, A, S, H, I, $) => {
      (H = H || m.type === "svg"),
        d == null ? x(m, w, P, A, S, H, I, $) : q(d, m, A, S, H, I, $);
    },
    x = (d, m, w, P, A, S, H, I) => {
      let $, k;
      const { type: V, props: F, shapeFlag: W, transition: Q, dirs: Z } = d;
      if (
        (($ = d.el = i(d.type, S, F && F.is, F)),
        W & 8
          ? u($, d.children)
          : W & 16 &&
            O(d.children, $, null, P, A, S && V !== "foreignObject", H, I),
        Z && Qe(d, null, P, "created"),
        j($, d, d.scopeId, H, P),
        F)
      ) {
        for (const ae in F)
          ae !== "value" &&
            !hn(ae) &&
            o($, ae, null, F[ae], S, d.children, P, A, M);
        "value" in F && o($, "value", null, F.value),
          (k = F.onVnodeBeforeMount) && ke(k, P, d);
      }
      Z && Qe(d, null, P, "beforeMount");
      const ce = (!A || (A && !A.pendingBranch)) && Q && !Q.persisted;
      ce && Q.beforeEnter($),
        r($, m, w),
        ((k = F && F.onVnodeMounted) || ce || Z) &&
          be(() => {
            k && ke(k, P, d), ce && Q.enter($), Z && Qe(d, null, P, "mounted");
          }, A);
    },
    j = (d, m, w, P, A) => {
      if ((w && g(d, w), P)) for (let S = 0; S < P.length; S++) g(d, P[S]);
      if (A) {
        let S = A.subTree;
        if (m === S) {
          const H = A.vnode;
          j(d, H, H.scopeId, H.slotScopeIds, A.parent);
        }
      }
    },
    O = (d, m, w, P, A, S, H, I, $ = 0) => {
      for (let k = $; k < d.length; k++) {
        const V = (d[k] = I ? ht(d[k]) : je(d[k]));
        v(null, V, m, w, P, A, S, H, I);
      }
    },
    q = (d, m, w, P, A, S, H) => {
      const I = (m.el = d.el);
      let { patchFlag: $, dynamicChildren: k, dirs: V } = m;
      $ |= d.patchFlag & 16;
      const F = d.props || ue,
        W = m.props || ue;
      let Q;
      w && Et(w, !1),
        (Q = W.onVnodeBeforeUpdate) && ke(Q, w, m, d),
        V && Qe(m, d, w, "beforeUpdate"),
        w && Et(w, !0);
      const Z = A && m.type !== "foreignObject";
      if (
        (k
          ? U(d.dynamicChildren, k, I, w, P, Z, S)
          : H || ie(d, m, I, null, w, P, Z, S, !1),
        $ > 0)
      ) {
        if ($ & 16) J(I, m, F, W, w, P, A);
        else if (
          ($ & 2 && F.class !== W.class && o(I, "class", null, W.class, A),
          $ & 4 && o(I, "style", F.style, W.style, A),
          $ & 8)
        ) {
          const ce = m.dynamicProps;
          for (let ae = 0; ae < ce.length; ae++) {
            const _e = ce[ae],
              Fe = F[_e],
              jt = W[_e];
            (jt !== Fe || _e === "value") &&
              o(I, _e, Fe, jt, A, d.children, w, P, M);
          }
        }
        $ & 1 && d.children !== m.children && u(I, m.children);
      } else !H && k == null && J(I, m, F, W, w, P, A);
      ((Q = W.onVnodeUpdated) || V) &&
        be(() => {
          Q && ke(Q, w, m, d), V && Qe(m, d, w, "updated");
        }, P);
    },
    U = (d, m, w, P, A, S, H) => {
      for (let I = 0; I < m.length; I++) {
        const $ = d[I],
          k = m[I],
          V =
            $.el && ($.type === xe || !Ke($, k) || $.shapeFlag & 70)
              ? f($.el)
              : w;
        v($, k, V, null, P, A, S, H, !0);
      }
    },
    J = (d, m, w, P, A, S, H) => {
      if (w !== P) {
        if (w !== ue)
          for (const I in w)
            !hn(I) && !(I in P) && o(d, I, w[I], null, H, m.children, A, S, M);
        for (const I in P) {
          if (hn(I)) continue;
          const $ = P[I],
            k = w[I];
          $ !== k && I !== "value" && o(d, I, k, $, H, m.children, A, S, M);
        }
        "value" in P && o(d, "value", w.value, P.value);
      }
    },
    D = (d, m, w, P, A, S, H, I, $) => {
      const k = (m.el = d ? d.el : a("")),
        V = (m.anchor = d ? d.anchor : a(""));
      let { patchFlag: F, dynamicChildren: W, slotScopeIds: Q } = m;
      Q && (I = I ? I.concat(Q) : Q),
        d == null
          ? (r(k, w, P), r(V, w, P), O(m.children, w, V, A, S, H, I, $))
          : F > 0 && F & 64 && W && d.dynamicChildren
          ? (U(d.dynamicChildren, W, w, A, S, H, I),
            (m.key != null || (A && m === A.subTree)) && ya(d, m, !0))
          : ie(d, m, w, V, A, S, H, I, $);
    },
    G = (d, m, w, P, A, S, H, I, $) => {
      (m.slotScopeIds = I),
        d == null
          ? m.shapeFlag & 512
            ? A.ctx.activate(m, w, P, H, $)
            : N(m, w, P, A, S, H, $)
          : Re(d, m, $);
    },
    N = (d, m, w, P, A, S, H) => {
      const I = (d.component = su(d, P, A));
      if ((kn(d) && (I.ctx.renderer = ne), ou(I), I.asyncDep)) {
        if ((A && A.registerDep(I, te), !d.el)) {
          const $ = (I.subTree = pe(Ae));
          y(null, $, m, w);
        }
        return;
      }
      te(I, d, m, w, A, S, H);
    },
    Re = (d, m, w) => {
      const P = (m.component = d.component);
      if (yc(d, m, w))
        if (P.asyncDep && !P.asyncResolved) {
          le(P, m, w);
          return;
        } else (P.next = m), dc(P.update), P.update();
      else (m.el = d.el), (P.vnode = m);
    },
    te = (d, m, w, P, A, S, H) => {
      const I = () => {
          if (d.isMounted) {
            let { next: V, bu: F, u: W, parent: Q, vnode: Z } = d,
              ce = V,
              ae;
            Et(d, !1),
              V ? ((V.el = Z.el), le(d, V, H)) : (V = Z),
              F && pn(F),
              (ae = V.props && V.props.onVnodeBeforeUpdate) && ke(ae, Q, V, Z),
              Et(d, !0);
            const _e = Rr(d),
              Fe = d.subTree;
            (d.subTree = _e),
              v(Fe, _e, f(Fe.el), L(Fe), d, A, S),
              (V.el = _e.el),
              ce === null && $s(d, _e.el),
              W && be(W, A),
              (ae = V.props && V.props.onVnodeUpdated) &&
                be(() => ke(ae, Q, V, Z), A);
          } else {
            let V;
            const { el: F, props: W } = m,
              { bm: Q, m: Z, parent: ce } = d,
              ae = It(m);
            if (
              (Et(d, !1),
              Q && pn(Q),
              !ae && (V = W && W.onVnodeBeforeMount) && ke(V, ce, m),
              Et(d, !0),
              F && Y)
            ) {
              const _e = () => {
                (d.subTree = Rr(d)), Y(F, d.subTree, d, A, null);
              };
              ae
                ? m.type.__asyncLoader().then(() => !d.isUnmounted && _e())
                : _e();
            } else {
              const _e = (d.subTree = Rr(d));
              v(null, _e, w, P, d, A, S), (m.el = _e.el);
            }
            if ((Z && be(Z, A), !ae && (V = W && W.onVnodeMounted))) {
              const _e = m;
              be(() => ke(V, ce, _e), A);
            }
            (m.shapeFlag & 256 ||
              (ce && It(ce.vnode) && ce.vnode.shapeFlag & 256)) &&
              d.a &&
              be(d.a, A),
              (d.isMounted = !0),
              (m = w = P = null);
          }
        },
        $ = (d.effect = new Ps(I, () => lr(k), d.scope)),
        k = (d.update = () => $.run());
      (k.id = d.uid), Et(d, !0), k();
    },
    le = (d, m, w) => {
      m.component = d;
      const P = d.vnode.props;
      (d.vnode = m),
        (d.next = null),
        Uc(d, m.props, P, w),
        Wc(d, m.children, w),
        nn(),
        lo(),
        rn();
    },
    ie = (d, m, w, P, A, S, H, I, $ = !1) => {
      const k = d && d.children,
        V = d ? d.shapeFlag : 0,
        F = m.children,
        { patchFlag: W, shapeFlag: Q } = m;
      if (W > 0) {
        if (W & 128) {
          bt(k, F, w, P, A, S, H, I, $);
          return;
        } else if (W & 256) {
          Me(k, F, w, P, A, S, H, I, $);
          return;
        }
      }
      Q & 8
        ? (V & 16 && M(k, A, S), F !== k && u(w, F))
        : V & 16
        ? Q & 16
          ? bt(k, F, w, P, A, S, H, I, $)
          : M(k, A, S, !0)
        : (V & 8 && u(w, ""), Q & 16 && O(F, w, P, A, S, H, I, $));
    },
    Me = (d, m, w, P, A, S, H, I, $) => {
      (d = d || Ft), (m = m || Ft);
      const k = d.length,
        V = m.length,
        F = Math.min(k, V);
      let W;
      for (W = 0; W < F; W++) {
        const Q = (m[W] = $ ? ht(m[W]) : je(m[W]));
        v(d[W], Q, w, null, A, S, H, I, $);
      }
      k > V ? M(d, A, S, !0, !1, F) : O(m, w, P, A, S, H, I, $, F);
    },
    bt = (d, m, w, P, A, S, H, I, $) => {
      let k = 0;
      const V = m.length;
      let F = d.length - 1,
        W = V - 1;
      for (; k <= F && k <= W; ) {
        const Q = d[k],
          Z = (m[k] = $ ? ht(m[k]) : je(m[k]));
        if (Ke(Q, Z)) v(Q, Z, w, null, A, S, H, I, $);
        else break;
        k++;
      }
      for (; k <= F && k <= W; ) {
        const Q = d[F],
          Z = (m[W] = $ ? ht(m[W]) : je(m[W]));
        if (Ke(Q, Z)) v(Q, Z, w, null, A, S, H, I, $);
        else break;
        F--, W--;
      }
      if (k > F) {
        if (k <= W) {
          const Q = W + 1,
            Z = Q < V ? m[Q].el : P;
          for (; k <= W; )
            v(null, (m[k] = $ ? ht(m[k]) : je(m[k])), w, Z, A, S, H, I, $), k++;
        }
      } else if (k > W) for (; k <= F; ) Oe(d[k], A, S, !0), k++;
      else {
        const Q = k,
          Z = k,
          ce = new Map();
        for (k = Z; k <= W; k++) {
          const Se = (m[k] = $ ? ht(m[k]) : je(m[k]));
          Se.key != null && ce.set(Se.key, k);
        }
        let ae,
          _e = 0;
        const Fe = W - Z + 1;
        let jt = !1,
          Gs = 0;
        const an = new Array(Fe);
        for (k = 0; k < Fe; k++) an[k] = 0;
        for (k = Q; k <= F; k++) {
          const Se = d[k];
          if (_e >= Fe) {
            Oe(Se, A, S, !0);
            continue;
          }
          let Je;
          if (Se.key != null) Je = ce.get(Se.key);
          else
            for (ae = Z; ae <= W; ae++)
              if (an[ae - Z] === 0 && Ke(Se, m[ae])) {
                Je = ae;
                break;
              }
          Je === void 0
            ? Oe(Se, A, S, !0)
            : ((an[Je - Z] = k + 1),
              Je >= Gs ? (Gs = Je) : (jt = !0),
              v(Se, m[Je], w, null, A, S, H, I, $),
              _e++);
        }
        const Ys = jt ? Gc(an) : Ft;
        for (ae = Ys.length - 1, k = Fe - 1; k >= 0; k--) {
          const Se = Z + k,
            Je = m[Se],
            Zs = Se + 1 < V ? m[Se + 1].el : P;
          an[k] === 0
            ? v(null, Je, w, Zs, A, S, H, I, $)
            : jt && (ae < 0 || k !== Ys[ae] ? Ne(Je, w, Zs, 2) : ae--);
        }
      }
    },
    Ne = (d, m, w, P, A = null) => {
      const { el: S, type: H, transition: I, children: $, shapeFlag: k } = d;
      if (k & 6) {
        Ne(d.component.subTree, m, w, P);
        return;
      }
      if (k & 128) {
        d.suspense.move(m, w, P);
        return;
      }
      if (k & 64) {
        H.move(d, m, w, ne);
        return;
      }
      if (H === xe) {
        r(S, m, w);
        for (let F = 0; F < $.length; F++) Ne($[F], m, w, P);
        r(d.anchor, m, w);
        return;
      }
      if (H === Bn) {
        b(d, m, w);
        return;
      }
      if (P !== 2 && k & 1 && I)
        if (P === 0) I.beforeEnter(S), r(S, m, w), be(() => I.enter(S), A);
        else {
          const { leave: F, delayLeave: W, afterLeave: Q } = I,
            Z = () => r(S, m, w),
            ce = () => {
              F(S, () => {
                Z(), Q && Q();
              });
            };
          W ? W(S, Z, ce) : ce();
        }
      else r(S, m, w);
    },
    Oe = (d, m, w, P = !1, A = !1) => {
      const {
        type: S,
        props: H,
        ref: I,
        children: $,
        dynamicChildren: k,
        shapeFlag: V,
        patchFlag: F,
        dirs: W,
      } = d;
      if ((I != null && Gn(I, null, w, d, !0), V & 256)) {
        m.ctx.deactivate(d);
        return;
      }
      const Q = V & 1 && W,
        Z = !It(d);
      let ce;
      if ((Z && (ce = H && H.onVnodeBeforeUnmount) && ke(ce, m, d), V & 6))
        C(d.component, w, P);
      else {
        if (V & 128) {
          d.suspense.unmount(w, P);
          return;
        }
        Q && Qe(d, null, m, "beforeUnmount"),
          V & 64
            ? d.type.remove(d, m, w, A, ne, P)
            : k && (S !== xe || (F > 0 && F & 64))
            ? M(k, m, w, !1, !0)
            : ((S === xe && F & 384) || (!A && V & 16)) && M($, m, w),
          P && Lt(d);
      }
      ((Z && (ce = H && H.onVnodeUnmounted)) || Q) &&
        be(() => {
          ce && ke(ce, m, d), Q && Qe(d, null, m, "unmounted");
        }, w);
    },
    Lt = (d) => {
      const { type: m, el: w, anchor: P, transition: A } = d;
      if (m === xe) {
        xn(w, P);
        return;
      }
      if (m === Bn) {
        R(d);
        return;
      }
      const S = () => {
        s(w), A && !A.persisted && A.afterLeave && A.afterLeave();
      };
      if (d.shapeFlag & 1 && A && !A.persisted) {
        const { leave: H, delayLeave: I } = A,
          $ = () => H(w, S);
        I ? I(d.el, S, $) : $();
      } else S();
    },
    xn = (d, m) => {
      let w;
      for (; d !== m; ) (w = p(d)), s(d), (d = w);
      s(m);
    },
    C = (d, m, w) => {
      const { bum: P, scope: A, update: S, subTree: H, um: I } = d;
      P && pn(P),
        A.stop(),
        S && ((S.active = !1), Oe(H, d, m, w)),
        I && be(I, m),
        be(() => {
          d.isUnmounted = !0;
        }, m),
        m &&
          m.pendingBranch &&
          !m.isUnmounted &&
          d.asyncDep &&
          !d.asyncResolved &&
          d.suspenseId === m.pendingId &&
          (m.deps--, m.deps === 0 && m.resolve());
    },
    M = (d, m, w, P = !1, A = !1, S = 0) => {
      for (let H = S; H < d.length; H++) Oe(d[H], m, w, P, A);
    },
    L = (d) =>
      d.shapeFlag & 6
        ? L(d.component.subTree)
        : d.shapeFlag & 128
        ? d.suspense.next()
        : p(d.anchor || d.el),
    K = (d, m, w) => {
      d == null
        ? m._vnode && Oe(m._vnode, null, null, !0)
        : v(m._vnode || null, d, m, null, null, null, w),
        lo(),
        qn(),
        (m._vnode = d);
    },
    ne = {
      p: v,
      um: Oe,
      m: Ne,
      r: Lt,
      mt: N,
      mc: O,
      pc: ie,
      pbc: U,
      n: L,
      o: e,
    };
  let de, Y;
  return (
    t && ([de, Y] = t(ne)), { render: K, hydrate: de, createApp: zc(K, de) }
  );
}
function Et({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function ya(e, t, n = !1) {
  const r = e.children,
    s = t.children;
  if (z(r) && z(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let a = s[o];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = s[o] = ht(s[o])), (a.el = i.el)),
        n || ya(i, a)),
        a.type === zt && (a.el = i.el);
    }
}
function Gc(e) {
  const t = e.slice(),
    n = [0];
  let r, s, o, i, a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const c = e[r];
    if (c !== 0) {
      if (((s = n[n.length - 1]), e[s] < c)) {
        (t[r] = s), n.push(r);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        (a = (o + i) >> 1), e[n[a]] < c ? (o = a + 1) : (i = a);
      c < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), (n[o] = r));
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i]);
  return n;
}
const Yc = (e) => e.__isTeleport,
  xe = Symbol(void 0),
  zt = Symbol(void 0),
  Ae = Symbol(void 0),
  Bn = Symbol(void 0),
  gn = [];
let He = null;
function mt(e = !1) {
  gn.push((He = e ? null : []));
}
function va() {
  gn.pop(), (He = gn[gn.length - 1] || null);
}
let Jt = 1;
function bo(e) {
  Jt += e;
}
function ba(e) {
  return (
    (e.dynamicChildren = Jt > 0 ? He || Ft : null),
    va(),
    Jt > 0 && He && He.push(e),
    e
  );
}
function Im(e, t, n, r, s, o) {
  return ba(wa(e, t, n, r, s, o, !0));
}
function Ot(e, t, n, r, s) {
  return ba(pe(e, t, n, r, s, !0));
}
function Qt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ke(e, t) {
  return e.type === t.type && e.key === t.key;
}
const hr = "__vInternal",
  Ea = ({ key: e }) => e ?? null,
  Un = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? me(e) || ye(e) || X(e)
        ? { i: Ee, r: e, k: t, f: !!n }
        : e
      : null;
function wa(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  o = e === xe ? 0 : 1,
  i = !1,
  a = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ea(t),
    ref: t && Un(t),
    scopeId: ur,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Ee,
  };
  return (
    a
      ? (Fs(l, n), o & 128 && e.normalize(l))
      : n && (l.shapeFlag |= me(n) ? 8 : 16),
    Jt > 0 &&
      !i &&
      He &&
      (l.patchFlag > 0 || o & 6) &&
      l.patchFlag !== 32 &&
      He.push(l),
    l
  );
}
const pe = Zc;
function Zc(e, t = null, n = null, r = 0, s = null, o = !1) {
  if (((!e || e === aa) && (e = Ae), Qt(e))) {
    const a = st(e, t, !0);
    return (
      n && Fs(a, n),
      Jt > 0 &&
        !o &&
        He &&
        (a.shapeFlag & 6 ? (He[He.indexOf(e)] = a) : He.push(a)),
      (a.patchFlag |= -2),
      a
    );
  }
  if ((lu(e) && (e = e.__vccOpts), t)) {
    t = eu(t);
    let { class: a, style: l } = t;
    a && !me(a) && (t.class = ys(a)),
      fe(l) && (Hi(l) && !z(l) && (l = we({}, l)), (t.style = _s(l)));
  }
  const i = me(e) ? 1 : Ji(e) ? 128 : Yc(e) ? 64 : fe(e) ? 4 : X(e) ? 2 : 0;
  return wa(e, t, n, r, s, i, o, !0);
}
function eu(e) {
  return e ? (Hi(e) || hr in e ? we({}, e) : e) : null;
}
function st(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: o, children: i } = e,
    a = t ? tu(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Ea(a),
    ref:
      t && t.ref ? (n && s ? (z(s) ? s.concat(Un(t)) : [s, Un(t)]) : Un(t)) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== xe ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && st(e.ssContent),
    ssFallback: e.ssFallback && st(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function Ra(e = " ", t = 0) {
  return pe(zt, null, e, t);
}
function Sm(e = "", t = !1) {
  return t ? (mt(), Ot(Ae, null, e)) : pe(Ae, null, e);
}
function je(e) {
  return e == null || typeof e == "boolean"
    ? pe(Ae)
    : z(e)
    ? pe(xe, null, e.slice())
    : typeof e == "object"
    ? ht(e)
    : pe(zt, null, String(e));
}
function ht(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : st(e);
}
function Fs(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (z(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Fs(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(hr in t)
        ? (t._ctx = Ee)
        : s === 3 &&
          Ee &&
          (Ee.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    X(t)
      ? ((t = { default: t, _ctx: Ee }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [Ra(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function tu(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = ys([t.class, r.class]));
      else if (s === "style") t.style = _s([t.style, r.style]);
      else if (An(s)) {
        const o = t[s],
          i = r[s];
        i &&
          o !== i &&
          !(z(o) && o.includes(i)) &&
          (t[s] = o ? [].concat(o, i) : i);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function ke(e, t, n, r = null) {
  De(e, t, 7, [n, r]);
}
const nu = ga();
let ru = 0;
function su(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || nu,
    o = {
      uid: ru++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Al(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: da(r, s),
      emitsOptions: zi(r, s),
      emit: null,
      emitted: null,
      propsDefaults: ue,
      inheritAttrs: r.inheritAttrs,
      ctx: ue,
      data: ue,
      props: ue,
      attrs: ue,
      slots: ue,
      refs: ue,
      setupState: ue,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = pc.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let he = null;
const it = () => he || Ee,
  Xt = (e) => {
    (he = e), e.scope.on();
  },
  St = () => {
    he && he.scope.off(), (he = null);
  };
function Pa(e) {
  return e.vnode.shapeFlag & 4;
}
let Gt = !1;
function ou(e, t = !1) {
  Gt = t;
  const { props: n, children: r } = e.vnode,
    s = Pa(e);
  Bc(e, n, s, t), Vc(e, r);
  const o = s ? iu(e, t) : void 0;
  return (Gt = !1), o;
}
function iu(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = Di(new Proxy(e.ctx, jc)));
  const { setup: r } = n;
  if (r) {
    const s = (e.setupContext = r.length > 1 ? Ta(e) : null);
    Xt(e), nn();
    const o = _t(r, e, 0, [e.props, s]);
    if ((rn(), St(), Ei(o))) {
      if ((o.then(St, St), t))
        return o
          .then((i) => {
            Gr(e, i, t);
          })
          .catch((i) => {
            sn(i, e, 0);
          });
      e.asyncDep = o;
    } else Gr(e, o, t);
  } else Ca(e, t);
}
function Gr(e, t, n) {
  X(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : fe(t) && (e.setupState = Bi(t)),
    Ca(e, n);
}
let Eo;
function Ca(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && Eo && !r.render) {
      const s = r.template || Ms(e).template;
      if (s) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: a, compilerOptions: l } = r,
          c = we(we({ isCustomElement: o, delimiters: a }, i), l);
        r.render = Eo(s, c);
      }
    }
    e.render = r.render || Ve;
  }
  Xt(e), nn(), Hc(e), rn(), St();
}
function au(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return Ie(e, "get", "$attrs"), t[n];
    },
  });
}
function Ta(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = au(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function pr(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Bi(Di(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in mn) return mn[n](e);
        },
        has(t, n) {
          return n in t || n in mn;
        },
      }))
    );
}
function Yr(e, t = !0) {
  return X(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function lu(e) {
  return X(e) && "__vccOpts" in e;
}
const Te = (e, t) => cc(e, t, Gt);
function $m() {
  return cu().slots;
}
function cu() {
  const e = it();
  return e.setupContext || (e.setupContext = Ta(e));
}
function We(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? fe(t) && !z(t)
      ? Qt(t)
        ? pe(e, null, [t])
        : pe(e, t)
      : pe(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && Qt(n) && (n = [n]),
      pe(e, t, n));
}
const uu = Symbol(""),
  fu = () => $e(uu),
  Bs = "3.2.47",
  du = "http://www.w3.org/2000/svg",
  Tt = typeof document < "u" ? document : null,
  wo = Tt && Tt.createElement("template"),
  hu = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const s = t
        ? Tt.createElementNS(du, e)
        : Tt.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          s.setAttribute("multiple", r.multiple),
        s
      );
    },
    createText: (e) => Tt.createTextNode(e),
    createComment: (e) => Tt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Tt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, s, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (s && (s === o || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === o || !(s = s.nextSibling));

        );
      else {
        wo.innerHTML = r ? `<svg>${e}</svg>` : e;
        const a = wo.content;
        if (r) {
          const l = a.firstChild;
          for (; l.firstChild; ) a.appendChild(l.firstChild);
          a.removeChild(l);
        }
        t.insertBefore(a, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
function pu(e, t, n) {
  const r = e._vtc;
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
function mu(e, t, n) {
  const r = e.style,
    s = me(n);
  if (n && !s) {
    if (t && !me(t)) for (const o in t) n[o] == null && Zr(r, o, "");
    for (const o in n) Zr(r, o, n[o]);
  } else {
    const o = r.display;
    s ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"),
      "_vod" in e && (r.display = o);
  }
}
const Ro = /\s*!important$/;
function Zr(e, t, n) {
  if (z(n)) n.forEach((r) => Zr(e, t, r));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const r = gu(e, t);
    Ro.test(n)
      ? e.setProperty(tn(r), n.replace(Ro, ""), "important")
      : (e[r] = n);
  }
}
const Po = ["Webkit", "Moz", "ms"],
  kr = {};
function gu(e, t) {
  const n = kr[t];
  if (n) return n;
  let r = Ge(t);
  if (r !== "filter" && r in e) return (kr[t] = r);
  r = ir(r);
  for (let s = 0; s < Po.length; s++) {
    const o = Po[s] + r;
    if (o in e) return (kr[t] = o);
  }
  return t;
}
const Co = "http://www.w3.org/1999/xlink";
function _u(e, t, n, r, s) {
  if (r && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Co, t.slice(6, t.length))
      : e.setAttributeNS(Co, t, n);
  else {
    const o = _l(t);
    n == null || (o && !yi(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? "" : n);
  }
}
function yu(e, t, n, r, s, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    r && i(r, s, o), (e[t] = n ?? "");
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const l = n ?? "";
    (e.value !== l || e.tagName === "OPTION") && (e.value = l),
      n == null && e.removeAttribute(t);
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean"
      ? (n = yi(n))
      : n == null && l === "string"
      ? ((n = ""), (a = !0))
      : l === "number" && ((n = 0), (a = !0));
  }
  try {
    e[t] = n;
  } catch {}
  a && e.removeAttribute(t);
}
function vu(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function bu(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
function Eu(e, t, n, r, s = null) {
  const o = e._vei || (e._vei = {}),
    i = o[t];
  if (r && i) i.value = r;
  else {
    const [a, l] = wu(t);
    if (r) {
      const c = (o[t] = Cu(r, s));
      vu(e, a, c, l);
    } else i && (bu(e, a, i, l), (o[t] = void 0));
  }
}
const To = /(?:Once|Passive|Capture)$/;
function wu(e) {
  let t;
  if (To.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(To)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : tn(e.slice(2)), t];
}
let xr = 0;
const Ru = Promise.resolve(),
  Pu = () => xr || (Ru.then(() => (xr = 0)), (xr = Date.now()));
function Cu(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    De(Tu(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = Pu()), n;
}
function Tu(e, t) {
  if (z(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    );
  } else return t;
}
const Ao = /^on[a-z]/,
  Au = (e, t, n, r, s = !1, o, i, a, l) => {
    t === "class"
      ? pu(e, r, s)
      : t === "style"
      ? mu(e, n, r)
      : An(t)
      ? vs(t) || Eu(e, t, n, r, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : Ou(e, t, r, s)
        )
      ? yu(e, t, r, o, i, a, l)
      : (t === "true-value"
          ? (e._trueValue = r)
          : t === "false-value" && (e._falseValue = r),
        _u(e, t, r, s));
  };
function Ou(e, t, n, r) {
  return r
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && Ao.test(t) && X(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (Ao.test(t) && me(n))
    ? !1
    : t in e;
}
const ut = "transition",
  ln = "animation",
  mr = (e, { slots: t }) => We(Yi, ku(e), t);
mr.displayName = "Transition";
const Aa = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
mr.props = we({}, Yi.props, Aa);
const wt = (e, t = []) => {
    z(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Oo = (e) => (e ? (z(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function ku(e) {
  const t = {};
  for (const D in e) D in Aa || (t[D] = e[D]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: r,
      duration: s,
      enterFromClass: o = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: a = `${n}-enter-to`,
      appearFromClass: l = o,
      appearActiveClass: c = i,
      appearToClass: u = a,
      leaveFromClass: f = `${n}-leave-from`,
      leaveActiveClass: p = `${n}-leave-active`,
      leaveToClass: g = `${n}-leave-to`,
    } = e,
    _ = xu(s),
    v = _ && _[0],
    E = _ && _[1],
    {
      onBeforeEnter: y,
      onEnter: h,
      onEnterCancelled: b,
      onLeave: R,
      onLeaveCancelled: T,
      onBeforeAppear: x = y,
      onAppear: j = h,
      onAppearCancelled: O = b,
    } = t,
    q = (D, G, N) => {
      Rt(D, G ? u : a), Rt(D, G ? c : i), N && N();
    },
    U = (D, G) => {
      (D._isLeaving = !1), Rt(D, f), Rt(D, g), Rt(D, p), G && G();
    },
    J = (D) => (G, N) => {
      const Re = D ? j : h,
        te = () => q(G, D, N);
      wt(Re, [G, te]),
        ko(() => {
          Rt(G, D ? l : o), ft(G, D ? u : a), Oo(Re) || xo(G, r, v, te);
        });
    };
  return we(t, {
    onBeforeEnter(D) {
      wt(y, [D]), ft(D, o), ft(D, i);
    },
    onBeforeAppear(D) {
      wt(x, [D]), ft(D, l), ft(D, c);
    },
    onEnter: J(!1),
    onAppear: J(!0),
    onLeave(D, G) {
      D._isLeaving = !0;
      const N = () => U(D, G);
      ft(D, f),
        $u(),
        ft(D, p),
        ko(() => {
          D._isLeaving && (Rt(D, f), ft(D, g), Oo(R) || xo(D, r, E, N));
        }),
        wt(R, [D, N]);
    },
    onEnterCancelled(D) {
      q(D, !1), wt(b, [D]);
    },
    onAppearCancelled(D) {
      q(D, !0), wt(O, [D]);
    },
    onLeaveCancelled(D) {
      U(D), wt(T, [D]);
    },
  });
}
function xu(e) {
  if (e == null) return null;
  if (fe(e)) return [Ir(e.enter), Ir(e.leave)];
  {
    const t = Ir(e);
    return [t, t];
  }
}
function Ir(e) {
  return Pi(e);
}
function ft(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set())).add(t);
}
function Rt(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function ko(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Iu = 0;
function xo(e, t, n, r) {
  const s = (e._endId = ++Iu),
    o = () => {
      s === e._endId && r();
    };
  if (n) return setTimeout(o, n);
  const { type: i, timeout: a, propCount: l } = Su(e, t);
  if (!i) return r();
  const c = i + "end";
  let u = 0;
  const f = () => {
      e.removeEventListener(c, p), o();
    },
    p = (g) => {
      g.target === e && ++u >= l && f();
    };
  setTimeout(() => {
    u < l && f();
  }, a + 1),
    e.addEventListener(c, p);
}
function Su(e, t) {
  const n = window.getComputedStyle(e),
    r = (_) => (n[_] || "").split(", "),
    s = r(`${ut}Delay`),
    o = r(`${ut}Duration`),
    i = Io(s, o),
    a = r(`${ln}Delay`),
    l = r(`${ln}Duration`),
    c = Io(a, l);
  let u = null,
    f = 0,
    p = 0;
  t === ut
    ? i > 0 && ((u = ut), (f = i), (p = o.length))
    : t === ln
    ? c > 0 && ((u = ln), (f = c), (p = l.length))
    : ((f = Math.max(i, c)),
      (u = f > 0 ? (i > c ? ut : ln) : null),
      (p = u ? (u === ut ? o.length : l.length) : 0));
  const g =
    u === ut && /\b(transform|all)(,|$)/.test(r(`${ut}Property`).toString());
  return { type: u, timeout: f, propCount: p, hasTransform: g };
}
function Io(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => So(n) + So(e[r])));
}
function So(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function $u() {
  return document.body.offsetHeight;
}
const Lu = ["ctrl", "shift", "alt", "meta"],
  ju = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => Lu.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Lm =
    (e, t) =>
    (n, ...r) => {
      for (let s = 0; s < t.length; s++) {
        const o = ju[t[s]];
        if (o && o(n, t)) return;
      }
      return e(n, ...r);
    },
  jm = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e._vod = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : cn(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n &&
        (r
          ? t
            ? (r.beforeEnter(e), cn(e, !0), r.enter(e))
            : r.leave(e, () => {
                cn(e, !1);
              })
          : cn(e, t));
    },
    beforeUnmount(e, { value: t }) {
      cn(e, t);
    },
  };
function cn(e, t) {
  e.style.display = t ? e._vod : "none";
}
const Oa = we({ patchProp: Au }, hu);
let _n,
  $o = !1;
function Hu() {
  return _n || (_n = Qc(Oa));
}
function Du() {
  return (_n = $o ? _n : Xc(Oa)), ($o = !0), _n;
}
const Mu = (...e) => {
    const t = Hu().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (r) => {
        const s = ka(r);
        if (!s) return;
        const o = t._component;
        !X(o) && !o.render && !o.template && (o.template = s.innerHTML),
          (s.innerHTML = "");
        const i = n(s, !1, s instanceof SVGElement);
        return (
          s instanceof Element &&
            (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
          i
        );
      }),
      t
    );
  },
  Nu = (...e) => {
    const t = Du().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (r) => {
        const s = ka(r);
        if (s) return n(s, !0, s instanceof SVGElement);
      }),
      t
    );
  };
function ka(e) {
  return me(e) ? document.querySelector(e) : e;
}
const Fu =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  Bu =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  Uu = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;
function Ku(e, t) {
  if (
    e !== "__proto__" &&
    !(e === "constructor" && t && typeof t == "object" && "prototype" in t)
  )
    return t;
}
function Vu(e, t = {}) {
  if (typeof e != "string") return e;
  const n = e.toLowerCase().trim();
  if (n === "true") return !0;
  if (n === "false") return !1;
  if (n === "null") return null;
  if (n === "nan") return Number.NaN;
  if (n === "infinity") return Number.POSITIVE_INFINITY;
  if (n !== "undefined") {
    if (!Uu.test(e)) {
      if (t.strict) throw new SyntaxError("Invalid JSON");
      return e;
    }
    try {
      return Fu.test(e) || Bu.test(e) ? JSON.parse(e, Ku) : JSON.parse(e);
    } catch (r) {
      if (t.strict) throw r;
      return e;
    }
  }
}
const Wu = /#/g,
  qu = /&/g,
  zu = /=/g,
  xa = /\+/g,
  Ju = /%5e/gi,
  Qu = /%60/gi,
  Xu = /%7c/gi,
  Gu = /%20/gi;
function Yu(e) {
  return encodeURI("" + e).replace(Xu, "|");
}
function es(e) {
  return Yu(typeof e == "string" ? e : JSON.stringify(e))
    .replace(xa, "%2B")
    .replace(Gu, "+")
    .replace(Wu, "%23")
    .replace(qu, "%26")
    .replace(Qu, "`")
    .replace(Ju, "^");
}
function Sr(e) {
  return es(e).replace(zu, "%3D");
}
function Ia(e = "") {
  try {
    return decodeURIComponent("" + e);
  } catch {
    return "" + e;
  }
}
function Zu(e) {
  return Ia(e.replace(xa, " "));
}
function ef(e = "") {
  const t = {};
  e[0] === "?" && (e = e.slice(1));
  for (const n of e.split("&")) {
    const r = n.match(/([^=]+)=?(.*)/) || [];
    if (r.length < 2) continue;
    const s = Ia(r[1]);
    if (s === "__proto__" || s === "constructor") continue;
    const o = Zu(r[2] || "");
    typeof t[s] < "u"
      ? Array.isArray(t[s])
        ? t[s].push(o)
        : (t[s] = [t[s], o])
      : (t[s] = o);
  }
  return t;
}
function tf(e, t) {
  return (
    (typeof t == "number" || typeof t == "boolean") && (t = String(t)),
    t
      ? Array.isArray(t)
        ? t.map((n) => `${Sr(e)}=${es(n)}`).join("&")
        : `${Sr(e)}=${es(t)}`
      : Sr(e)
  );
}
function nf(e) {
  return Object.keys(e)
    .filter((t) => e[t] !== void 0)
    .map((t) => tf(t, e[t]))
    .join("&");
}
const rf = /^\w{2,}:([/\\]{1,2})/,
  sf = /^\w{2,}:([/\\]{2})?/,
  of = /^[/\\]{2}[^/\\]+/;
function Sa(e, t = {}) {
  return (
    typeof t == "boolean" && (t = { acceptRelative: t }),
    t.strict ? rf.test(e) : sf.test(e) || (t.acceptRelative ? of.test(e) : !1)
  );
}
const af = /\/$|\/\?/;
function ts(e = "", t = !1) {
  return t ? af.test(e) : e.endsWith("/");
}
function lf(e = "", t = !1) {
  if (!t) return (ts(e) ? e.slice(0, -1) : e) || "/";
  if (!ts(e, !0)) return e || "/";
  const [n, ...r] = e.split("?");
  return (n.slice(0, -1) || "/") + (r.length > 0 ? `?${r.join("?")}` : "");
}
function cf(e = "", t = !1) {
  if (!t) return e.endsWith("/") ? e : e + "/";
  if (ts(e, !0)) return e || "/";
  const [n, ...r] = e.split("?");
  return n + "/" + (r.length > 0 ? `?${r.join("?")}` : "");
}
function uf(e = "") {
  return e.startsWith("/");
}
function ff(e = "") {
  return (uf(e) ? e.slice(1) : e) || "/";
}
function df(e, t) {
  if (pf(t) || Sa(e)) return e;
  const n = lf(t);
  return e.startsWith(n) ? e : gf(n, e);
}
function hf(e, t) {
  const n = $a(e),
    r = { ...ef(n.search), ...t };
  return (n.search = nf(r)), _f(n);
}
function pf(e) {
  return !e || e === "/";
}
function mf(e) {
  return e && e !== "/";
}
function gf(e, ...t) {
  let n = e || "";
  for (const r of t.filter((s) => mf(s))) n = n ? cf(n) + ff(r) : r;
  return n;
}
function $a(e = "", t) {
  if (!Sa(e, { acceptRelative: !0 })) return t ? $a(t + e) : Lo(e);
  const [n = "", r, s = ""] = (
      e.replace(/\\/g, "/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/) || []
    ).splice(1),
    [o = "", i = ""] = (s.match(/([^#/?]*)(.*)?/) || []).splice(1),
    { pathname: a, search: l, hash: c } = Lo(i.replace(/\/(?=[A-Za-z]:)/, ""));
  return {
    protocol: n,
    auth: r ? r.slice(0, Math.max(0, r.length - 1)) : "",
    host: o,
    pathname: a,
    search: l,
    hash: c,
  };
}
function Lo(e = "") {
  const [t = "", n = "", r = ""] = (
    e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []
  ).splice(1);
  return { pathname: t, search: n, hash: r };
}
function _f(e) {
  const t =
    e.pathname +
    (e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "") +
    e.hash;
  return e.protocol
    ? e.protocol + "//" + (e.auth ? e.auth + "@" : "") + e.host + t
    : t;
}
class yf extends Error {
  constructor() {
    super(...arguments), (this.name = "FetchError");
  }
}
function vf(e, t, n) {
  let r = "";
  t && (r = t.message),
    e && n
      ? (r = `${r} (${n.status} ${n.statusText} (${e.toString()}))`)
      : e && (r = `${r} (${e.toString()})`);
  const s = new yf(r);
  return (
    Object.defineProperty(s, "request", {
      get() {
        return e;
      },
    }),
    Object.defineProperty(s, "response", {
      get() {
        return n;
      },
    }),
    Object.defineProperty(s, "data", {
      get() {
        return n && n._data;
      },
    }),
    Object.defineProperty(s, "status", {
      get() {
        return n && n.status;
      },
    }),
    Object.defineProperty(s, "statusText", {
      get() {
        return n && n.statusText;
      },
    }),
    Object.defineProperty(s, "statusCode", {
      get() {
        return n && n.status;
      },
    }),
    Object.defineProperty(s, "statusMessage", {
      get() {
        return n && n.statusText;
      },
    }),
    s
  );
}
const bf = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function jo(e = "GET") {
  return bf.has(e.toUpperCase());
}
function Ef(e) {
  if (e === void 0) return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean" || t === null
    ? !0
    : t !== "object"
    ? !1
    : Array.isArray(e)
    ? !0
    : (e.constructor && e.constructor.name === "Object") ||
      typeof e.toJSON == "function";
}
const wf = new Set([
    "image/svg",
    "application/xml",
    "application/xhtml",
    "application/html",
  ]),
  Rf = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function Pf(e = "") {
  if (!e) return "json";
  const t = e.split(";").shift() || "";
  return Rf.test(t)
    ? "json"
    : wf.has(t) || t.startsWith("text/")
    ? "text"
    : "blob";
}
const Cf = new Set([408, 409, 425, 429, 500, 502, 503, 504]);
function La(e) {
  const { fetch: t, Headers: n } = e;
  function r(i) {
    const a = (i.error && i.error.name === "AbortError") || !1;
    if (i.options.retry !== !1 && !a) {
      let c;
      typeof i.options.retry == "number"
        ? (c = i.options.retry)
        : (c = jo(i.options.method) ? 0 : 1);
      const u = (i.response && i.response.status) || 500;
      if (c > 0 && Cf.has(u))
        return s(i.request, { ...i.options, retry: c - 1 });
    }
    const l = vf(i.request, i.error, i.response);
    throw (Error.captureStackTrace && Error.captureStackTrace(l, s), l);
  }
  const s = async function (a, l = {}) {
      const c = {
        request: a,
        options: { ...e.defaults, ...l },
        response: void 0,
        error: void 0,
      };
      c.options.onRequest && (await c.options.onRequest(c)),
        typeof c.request == "string" &&
          (c.options.baseURL && (c.request = df(c.request, c.options.baseURL)),
          (c.options.query || c.options.params) &&
            (c.request = hf(c.request, {
              ...c.options.params,
              ...c.options.query,
            })),
          c.options.body &&
            jo(c.options.method) &&
            Ef(c.options.body) &&
            ((c.options.body =
              typeof c.options.body == "string"
                ? c.options.body
                : JSON.stringify(c.options.body)),
            (c.options.headers = new n(c.options.headers)),
            c.options.headers.has("content-type") ||
              c.options.headers.set("content-type", "application/json"),
            c.options.headers.has("accept") ||
              c.options.headers.set("accept", "application/json"))),
        (c.response = await t(c.request, c.options).catch(
          async (f) => (
            (c.error = f),
            c.options.onRequestError && (await c.options.onRequestError(c)),
            r(c)
          )
        ));
      const u =
        (c.options.parseResponse ? "json" : c.options.responseType) ||
        Pf(c.response.headers.get("content-type") || "");
      if (u === "json") {
        const f = await c.response.text(),
          p = c.options.parseResponse || Vu;
        c.response._data = p(f);
      } else
        u === "stream"
          ? (c.response._data = c.response.body)
          : (c.response._data = await c.response[u]());
      return (
        c.options.onResponse && (await c.options.onResponse(c)),
        c.response.status >= 400 && c.response.status < 600
          ? (c.options.onResponseError && (await c.options.onResponseError(c)),
            r(c))
          : c.response
      );
    },
    o = function (a, l) {
      return s(a, l).then((c) => c._data);
    };
  return (
    (o.raw = s),
    (o.native = t),
    (o.create = (i = {}) => La({ ...e, defaults: { ...e.defaults, ...i } })),
    o
  );
}
const ja = (function () {
    if (typeof globalThis < "u") return globalThis;
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("unable to locate global object");
  })(),
  Tf =
    ja.fetch ||
    (() =>
      Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),
  Af = ja.Headers,
  Of = La({ fetch: Tf, Headers: Af }),
  kf = Of,
  xf = /^\w{2,}:([/\\]{1,2})/,
  If = /^\w{2,}:([/\\]{2})?/,
  Sf = /^[/\\]{2}[^/\\]+/;
function gr(e, t = {}) {
  return (
    typeof t == "boolean" && (t = { acceptRelative: t }),
    t.strict ? xf.test(e) : If.test(e) || (t.acceptRelative ? Sf.test(e) : !1)
  );
}
const $f = /\/$|\/\?/;
function ns(e = "", t = !1) {
  return t ? $f.test(e) : e.endsWith("/");
}
function Lf(e = "", t = !1) {
  if (!t) return (ns(e) ? e.slice(0, -1) : e) || "/";
  if (!ns(e, !0)) return e || "/";
  const [n, ...r] = e.split("?");
  return (n.slice(0, -1) || "/") + (r.length > 0 ? `?${r.join("?")}` : "");
}
function jf(e = "", t = !1) {
  if (!t) return e.endsWith("/") ? e : e + "/";
  if (ns(e, !0)) return e || "/";
  const [n, ...r] = e.split("?");
  return n + "/" + (r.length > 0 ? `?${r.join("?")}` : "");
}
function Hf(e = "") {
  return e.startsWith("/");
}
function Df(e = "") {
  return (Hf(e) ? e.slice(1) : e) || "/";
}
function Ho(e, t) {
  if (Mf(t)) return e;
  const n = Lf(t);
  if (!e.startsWith(n)) return e;
  const r = e.slice(n.length);
  return r[0] === "/" ? r : "/" + r;
}
function Mf(e) {
  return !e || e === "/";
}
function Nf(e) {
  return e && e !== "/";
}
function Us(e, ...t) {
  let n = e || "";
  for (const r of t.filter((s) => Nf(s))) n = n ? jf(n) + Df(r) : r;
  return n;
}
function Ks(e = "", t) {
  if (!gr(e, { acceptRelative: !0 })) return t ? Ks(t + e) : Do(e);
  const [n = "", r, s = ""] = (
      e.replace(/\\/g, "/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/) || []
    ).splice(1),
    [o = "", i = ""] = (s.match(/([^#/?]*)(.*)?/) || []).splice(1),
    { pathname: a, search: l, hash: c } = Do(i.replace(/\/(?=[A-Za-z]:)/, ""));
  return {
    protocol: n,
    auth: r ? r.slice(0, Math.max(0, r.length - 1)) : "",
    host: o,
    pathname: a,
    search: l,
    hash: c,
  };
}
function Do(e = "") {
  const [t = "", n = "", r = ""] = (
    e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []
  ).splice(1);
  return { pathname: t, search: n, hash: r };
}
const Ff = () => {
    var e;
    return (
      ((e = window == null ? void 0 : window.__NUXT__) == null
        ? void 0
        : e.config) || {}
    );
  },
  Yn = Ff().app,
  Bf = () => Yn.baseURL,
  Uf = () => Yn.buildAssetsDir,
  Kf = (...e) => Us(Ha(), Uf(), ...e),
  Ha = (...e) => {
    const t = Yn.cdnURL || Yn.baseURL;
    return e.length ? Us(t, ...e) : t;
  };
(globalThis.__buildAssetsURL = Kf), (globalThis.__publicAssetsURL = Ha);
function rs(e, t = {}, n) {
  for (const r in e) {
    const s = e[r],
      o = n ? `${n}:${r}` : r;
    typeof s == "object" && s !== null
      ? rs(s, t, o)
      : typeof s == "function" && (t[o] = s);
  }
  return t;
}
function Vf(e, t) {
  return e.reduce(
    (n, r) => n.then(() => r.apply(void 0, t)),
    Promise.resolve()
  );
}
function Wf(e, t) {
  return Promise.all(e.map((n) => n.apply(void 0, t)));
}
function $r(e, t) {
  for (const n of e) n(t);
}
class qf {
  constructor() {
    (this._hooks = {}),
      (this._before = void 0),
      (this._after = void 0),
      (this._deprecatedMessages = void 0),
      (this._deprecatedHooks = {}),
      (this.hook = this.hook.bind(this)),
      (this.callHook = this.callHook.bind(this)),
      (this.callHookWith = this.callHookWith.bind(this));
  }
  hook(t, n, r = {}) {
    if (!t || typeof n != "function") return () => {};
    const s = t;
    let o;
    for (; this._deprecatedHooks[t]; )
      (o = this._deprecatedHooks[t]), (t = o.to);
    if (o && !r.allowDeprecated) {
      let i = o.message;
      i ||
        (i =
          `${s} hook has been deprecated` +
          (o.to ? `, please use ${o.to}` : "")),
        this._deprecatedMessages || (this._deprecatedMessages = new Set()),
        this._deprecatedMessages.has(i) ||
          (console.warn(i), this._deprecatedMessages.add(i));
    }
    return (
      (this._hooks[t] = this._hooks[t] || []),
      this._hooks[t].push(n),
      () => {
        n && (this.removeHook(t, n), (n = void 0));
      }
    );
  }
  hookOnce(t, n) {
    let r,
      s = (...o) => (
        typeof r == "function" && r(), (r = void 0), (s = void 0), n(...o)
      );
    return (r = this.hook(t, s)), r;
  }
  removeHook(t, n) {
    if (this._hooks[t]) {
      const r = this._hooks[t].indexOf(n);
      r !== -1 && this._hooks[t].splice(r, 1),
        this._hooks[t].length === 0 && delete this._hooks[t];
    }
  }
  deprecateHook(t, n) {
    this._deprecatedHooks[t] = typeof n == "string" ? { to: n } : n;
    const r = this._hooks[t] || [];
    this._hooks[t] = void 0;
    for (const s of r) this.hook(t, s);
  }
  deprecateHooks(t) {
    Object.assign(this._deprecatedHooks, t);
    for (const n in t) this.deprecateHook(n, t[n]);
  }
  addHooks(t) {
    const n = rs(t),
      r = Object.keys(n).map((s) => this.hook(s, n[s]));
    return () => {
      for (const s of r.splice(0, r.length)) s();
    };
  }
  removeHooks(t) {
    const n = rs(t);
    for (const r in n) this.removeHook(r, n[r]);
  }
  callHook(t, ...n) {
    return this.callHookWith(Vf, t, ...n);
  }
  callHookParallel(t, ...n) {
    return this.callHookWith(Wf, t, ...n);
  }
  callHookWith(t, n, ...r) {
    const s =
      this._before || this._after ? { name: n, args: r, context: {} } : void 0;
    this._before && $r(this._before, s);
    const o = t(this._hooks[n] || [], r);
    return o instanceof Promise
      ? o.finally(() => {
          this._after && s && $r(this._after, s);
        })
      : (this._after && s && $r(this._after, s), o);
  }
  beforeEach(t) {
    return (
      (this._before = this._before || []),
      this._before.push(t),
      () => {
        const n = this._before.indexOf(t);
        n !== -1 && this._before.splice(n, 1);
      }
    );
  }
  afterEach(t) {
    return (
      (this._after = this._after || []),
      this._after.push(t),
      () => {
        const n = this._after.indexOf(t);
        n !== -1 && this._after.splice(n, 1);
      }
    );
  }
}
function Da() {
  return new qf();
}
function zf() {
  let e,
    t = !1;
  const n = (r) => {
    if (e && e !== r) throw new Error("Context conflict");
  };
  return {
    use: () => {
      if (e === void 0) throw new Error("Context is not available");
      return e;
    },
    tryUse: () => e,
    set: (r, s) => {
      s || n(r), (e = r), (t = !0);
    },
    unset: () => {
      (e = void 0), (t = !1);
    },
    call: (r, s) => {
      n(r), (e = r);
      try {
        return s();
      } finally {
        t || (e = void 0);
      }
    },
    async callAsync(r, s) {
      e = r;
      const o = () => {
          e = r;
        },
        i = () => (e === r ? o : void 0);
      ss.add(i);
      try {
        const a = s();
        return t || (e = void 0), await a;
      } finally {
        ss.delete(i);
      }
    },
  };
}
function Jf() {
  const e = {};
  return {
    get(t) {
      return e[t] || (e[t] = zf()), e[t], e[t];
    },
  };
}
const Zn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof global < "u"
      ? global
      : typeof window < "u"
      ? window
      : {},
  Mo = "__unctx__",
  Qf = Zn[Mo] || (Zn[Mo] = Jf()),
  Xf = (e) => Qf.get(e),
  No = "__unctx_async_handlers__",
  ss = Zn[No] || (Zn[No] = new Set());
function qt(e) {
  const t = [];
  for (const s of ss) {
    const o = s();
    o && t.push(o);
  }
  const n = () => {
    for (const s of t) s();
  };
  let r = e();
  return (
    r &&
      typeof r == "object" &&
      "catch" in r &&
      (r = r.catch((s) => {
        throw (n(), s);
      })),
    [r, n]
  );
}
const Ma = Xf("nuxt-app"),
  Gf = "__nuxt_plugin";
function Yf(e) {
  let t = 0;
  const n = {
    provide: void 0,
    globalName: "nuxt",
    payload: qe({ data: {}, state: {}, _errors: {}, ...window.__NUXT__ }),
    static: { data: {} },
    isHydrating: !0,
    deferHydration() {
      if (!n.isHydrating) return () => {};
      t++;
      let o = !1;
      return () => {
        if (!o && ((o = !0), t--, t === 0))
          return (n.isHydrating = !1), n.callHook("app:suspense:resolve");
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    ...e,
  };
  (n.hooks = Da()),
    (n.hook = n.hooks.hook),
    (n.callHook = n.hooks.callHook),
    (n.provide = (o, i) => {
      const a = "$" + o;
      Nn(n, a, i), Nn(n.vueApp.config.globalProperties, a, i);
    }),
    Nn(n.vueApp, "$nuxt", n),
    Nn(n.vueApp.config.globalProperties, "$nuxt", n),
    window.addEventListener("nuxt.preloadError", (o) => {
      n.callHook("app:chunkError", { error: o.payload });
    });
  const r = qe(n.payload.config),
    s = new Proxy(r, {
      get(o, i) {
        return i === "public" ? o.public : o[i] ?? o.public[i];
      },
      set(o, i, a) {
        return i === "public" || i === "app"
          ? !1
          : ((o[i] = a), (o.public[i] = a), !0);
      },
    });
  return n.provide("config", s), n;
}
async function Zf(e, t) {
  if (typeof t != "function") return;
  const { provide: n } = (await tt(e, t, [e])) || {};
  if (n && typeof n == "object") for (const r in n) e.provide(r, n[r]);
}
async function ed(e, t) {
  for (const n of t) await Zf(e, n);
}
function td(e) {
  return e
    .map((n) =>
      typeof n != "function" ? null : n.length > 1 ? (r) => n(r, r.provide) : n
    )
    .filter(Boolean);
}
function at(e) {
  return (e[Gf] = !0), e;
}
function tt(e, t, n) {
  const r = () => (n ? t(...n) : t());
  return Ma.set(e), r();
}
function ge() {
  const e = Ma.tryUse();
  if (!e) {
    const t = it();
    if (!t) throw new Error("nuxt instance unavailable");
    return t.appContext.app.$nuxt;
  }
  return e;
}
function _r() {
  return ge().$config;
}
function Nn(e, t, n) {
  Object.defineProperty(e, t, { get: () => n });
}
const nd = "modulepreload",
  rd = function (e, t) {
    return e.startsWith(".") ? new URL(e, t).href : e;
  },
  Fo = {},
  B = function (t, n, r) {
    if (!n || n.length === 0) return t();
    const s = document.getElementsByTagName("link");
    return Promise.all(
      n.map((o) => {
        if (((o = rd(o, r)), o in Fo)) return;
        Fo[o] = !0;
        const i = o.endsWith(".css"),
          a = i ? '[rel="stylesheet"]' : "";
        if (!!r)
          for (let u = s.length - 1; u >= 0; u--) {
            const f = s[u];
            if (f.href === o && (!i || f.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${o}"]${a}`)) return;
        const c = document.createElement("link");
        if (
          ((c.rel = i ? "stylesheet" : nd),
          i || ((c.as = "script"), (c.crossOrigin = "")),
          (c.href = o),
          document.head.appendChild(c),
          i)
        )
          return new Promise((u, f) => {
            c.addEventListener("load", u),
              c.addEventListener("error", () =>
                f(new Error(`Unable to preload CSS for ${o}`))
              );
          });
      })
    ).then(() => t());
  },
  Lr = {
    ContentDoc: ee(() =>
      B(
        () => import("./ContentDoc.11ed4fad.js"),
        [
          "./ContentDoc.11ed4fad.js",
          "./ContentRenderer.19b4e186.js",
          "./ContentRendererMarkdown.1eb3b2ad.js",
          "./index.a6ef77ff.js",
          "./index.681eb04d.js",
          "./ContentQuery.8d393f3c.js",
          "./query.67962173.js",
          "./utils.925ea3fb.js",
        ],
        import.meta.url
      ).then((e) => e.default || e)
    ),
    ContentList: ee(() =>
      B(
        () => import("./ContentList.6a80060a.js"),
        [
          "./ContentList.6a80060a.js",
          "./ContentQuery.8d393f3c.js",
          "./query.67962173.js",
          "./utils.925ea3fb.js",
        ],
        import.meta.url
      ).then((e) => e.default || e)
    ),
    ContentNavigation: ee(() =>
      B(
        () => import("./ContentNavigation.32c0950d.js"),
        [
          "./ContentNavigation.32c0950d.js",
          "./query.67962173.js",
          "./utils.925ea3fb.js",
          "./nuxt-link.3942cc84.js",
          "./MobileMenu.vue.8fc46b84.js",
          "./swiper-slide.7974b596.js",
          "./swiper-slide.9181dfde.css",
          "./MobileMenu.c9da7a89.css",
          "./index.681eb04d.js",
          "./SearchResults.vue.29261df6.js",
          "./SearchResults.cf85b9d0.css",
          "./AppImage.vue.1420cc05.js",
          "./AnimalSlider.vue.ea597142.js",
          "./navigation.min.faca0c8c.js",
          "./navigation.079e38c4.css",
          "./AnimalSlider.f6244b5d.css",
          "./AnimalSliderCard.vue.50dc6bf2.js",
          "./AnimalSliderCard.7bfa47f6.css",
          "./AppLink.vue.4b20f2a7.js",
          "./LearnMoreBlock.vue.46ad24ec.js",
          "./LearnMoreBlock.b08c497b.css",
          "./InfoCard.vue.fb683a85.js",
          "./InfoCard.26090f6a.css",
          "./PageTitle.vue.97aebc27.js",
          "./PageTitle.615a1b33.css",
          "./SearchInput.vue.52b1c04f.js",
          "./SearchInput.23ae4a1f.css",
          "./PageArticle.vue.2e06c360.js",
          "./PageArticle.a907c3df.css",
          "./PageSearch.vue.5a8e761a.js",
          "./PageSearch.80f5a4e7.css",
          "./RecipeSlider.vue.37bcc148.js",
          "./RecipeSlider.1de5e8bf.css",
          "./SourceListItem.vue.8a479e9e.js",
          "./SourceListItem.c9ca6a57.css",
          "./TransitionExpand.vue.0dfc1b2d.js",
          "./TransitionExpand.358b7368.css",
          "./ContentNavigation.dc7ce676.css",
          "./ProseCode.e63e49c6.css",
        ],
        import.meta.url
      ).then((e) => e.default || e)
    ),
    ContentQuery: ee(() =>
      B(
        () => import("./ContentQuery.8d393f3c.js"),
        [
          "./ContentQuery.8d393f3c.js",
          "./query.67962173.js",
          "./utils.925ea3fb.js",
        ],
        import.meta.url
      ).then((e) => e.default || e)
    ),
    ContentRenderer: ee(() =>
      B(
        () => import("./ContentRenderer.19b4e186.js"),
        [
          "./ContentRenderer.19b4e186.js",
          "./ContentRendererMarkdown.1eb3b2ad.js",
          "./index.a6ef77ff.js",
          "./index.681eb04d.js",
        ],
        import.meta.url
      ).then((e) => e.default || e)
    ),
    ContentRendererMarkdown: ee(() =>
      B(
        () => import("./ContentRendererMarkdown.1eb3b2ad.js"),
        [
          "./ContentRendererMarkdown.1eb3b2ad.js",
          "./index.a6ef77ff.js",
          "./index.681eb04d.js",
        ],
        import.meta.url
      ).then((e) => e.default || e)
    ),
    ContentSlot: ee(() =>
      B(
        () => import("./ContentSlot.78aeb2e6.js"),
        ["./ContentSlot.78aeb2e6.js", "./utils.925ea3fb.js"],
        import.meta.url
      ).then((e) => e.default || e)
    ),
    DocumentDrivenEmpty: ee(() =>
      B(
        () => import("./DocumentDrivenEmpty.c23a3821.js"),
        [],
        import.meta.url
      ).then((e) => e.default || e)
    ),
    DocumentDrivenNotFound: ee(() =>
      B(
        () => import("./DocumentDrivenNotFound.7475afaa.js"),
        [],
        import.meta.url
      ).then((e) => e.default || e)
    ),
    Markdown: ee(() =>
      B(
        () => import("./Markdown.4153375e.js"),
        [
          "./Markdown.4153375e.js",
          "./ContentSlot.78aeb2e6.js",
          "./utils.925ea3fb.js",
        ],
        import.meta.url
      ).then((e) => e.default || e)
    ),
    ProseA: ee(() =>
      B(
        () => import("./ProseA.926edcd0.js"),
        ["./ProseA.926edcd0.js", "./nuxt-link.3942cc84.js"],
        import.meta.url
      ).then((e) => e.default || e)
    ),
    ProseBlockquote: ee(() =>
      B(
        () => import("./ProseBlockquote.1cabb3fc.js"),
        [],
        import.meta.url
      ).then((e) => e.default || e)
    ),
    ProseCode: ee(() =>
      B(
        () => import("./ProseCode.6defa9c9.js"),
        ["./ProseCode.6defa9c9.js", "./ProseCode.e63e49c6.css"],
        import.meta.url
      ).then((e) => e.default || e)
    ),
    ProseCodeInline: ee(() =>
      B(
        () => import("./ProseCodeInline.4e5000a8.js"),
        [],
        import.meta.url
      ).then((e) => e.default || e)
    ),
    ProseEm: ee(() =>
      B(() => import("./ProseEm.ec00d548.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseH1: ee(() =>
      B(() => import("./ProseH1.ea62ab61.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseH2: ee(() =>
      B(() => import("./ProseH2.337452aa.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseH3: ee(() =>
      B(() => import("./ProseH3.315ee3b8.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseH4: ee(() =>
      B(() => import("./ProseH4.0f5e3ff2.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseH5: ee(() =>
      B(() => import("./ProseH5.76cac98b.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseH6: ee(() =>
      B(() => import("./ProseH6.b8cbc5b9.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseHr: ee(() =>
      B(() => import("./ProseHr.65a2d14d.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseImg: ee(() =>
      B(() => import("./ProseImg.ab30be07.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseLi: ee(() =>
      B(() => import("./ProseLi.8fc58db7.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseOl: ee(() =>
      B(() => import("./ProseOl.949b125e.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseP: ee(() =>
      B(() => import("./ProseP.18c33a07.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseStrong: ee(() =>
      B(() => import("./ProseStrong.25d2e64f.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseTable: ee(() =>
      B(() => import("./ProseTable.1e2199f2.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseTbody: ee(() =>
      B(() => import("./ProseTbody.d5ad4868.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseTd: ee(() =>
      B(() => import("./ProseTd.433917a5.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseTh: ee(() =>
      B(() => import("./ProseTh.84fe761d.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseThead: ee(() =>
      B(() => import("./ProseThead.a6c963c7.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseTr: ee(() =>
      B(() => import("./ProseTr.bb0906d0.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseUl: ee(() =>
      B(() => import("./ProseUl.d152cd6d.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
  },
  sd = at((e) => {
    for (const t in Lr)
      e.vueApp.component(t, Lr[t]), e.vueApp.component("Lazy" + t, Lr[t]);
  });
function od(e) {
  return Array.isArray(e) ? e : [e];
}
const id = ["title", "script", "style", "noscript"],
  Vs = ["base", "meta", "link", "style", "script", "noscript"],
  ad = [
    "title",
    "titleTemplate",
    "base",
    "htmlAttrs",
    "bodyAttrs",
    "meta",
    "link",
    "style",
    "script",
    "noscript",
  ],
  ld = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs"],
  cd = ["tagPosition", "tagPriority", "tagDuplicateStrategy"];
function Na(e, t) {
  const { props: n, tag: r } = e;
  if (ld.includes(r)) return r;
  if (r === "link" && n.rel === "canonical") return "canonical";
  if (n.charset) return "charset";
  const s = ["id"];
  r === "meta" && s.push("name", "property", "http-equiv");
  for (const o of s)
    if (typeof n[o] < "u") {
      const i = String(n[o]);
      return t && !t(i) ? !1 : `${r}:${o}:${i}`;
    }
  return !1;
}
const ud = (e) => {
  e = e || {};
  const t = e.dedupeKeys || ["hid", "vmid", "key"];
  return {
    hooks: {
      "tag:normalise": function ({ tag: n }) {
        t.forEach((s) => {
          n.props[s] && ((n.key = n.props[s]), delete n.props[s]);
        });
        const r = n.key ? `${n.tag}:${n.key}` : Na(n);
        r && (n._d = r);
      },
      "tags:resolve": function (n) {
        const r = {};
        n.tags.forEach((s) => {
          let o = s._d || s._p;
          const i = r[o];
          if (i) {
            let a = s == null ? void 0 : s.tagDuplicateStrategy;
            if (
              (!a &&
                (s.tag === "htmlAttrs" || s.tag === "bodyAttrs") &&
                (a = "merge"),
              a === "merge")
            ) {
              const c = i.props;
              ["class", "style"].forEach((u) => {
                s.props[u] &&
                  c[u] &&
                  (u === "style" && !c[u].endsWith(";") && (c[u] += ";"),
                  (s.props[u] = `${c[u]} ${s.props[u]}`));
              }),
                (r[o].props = { ...c, ...s.props });
              return;
            } else s._e === i._e && (o = s._d = `${o}:${s._p}`);
            const l = Object.keys(s.props).length;
            if (
              (l === 0 || (l === 1 && typeof s.props["data-h-key"] < "u")) &&
              !s.children
            ) {
              delete r[o];
              return;
            }
          }
          r[o] = s;
        }),
          (n.tags = Object.values(r));
      },
    },
  };
};
function Fa(e) {
  let t = 9;
  for (let n = 0; n < e.length; ) t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
  return ((t ^ (t >>> 9)) + 65536).toString(16).substring(1, 8).toLowerCase();
}
const Fn = (e, t) => {
  const { tag: n, $el: r } = e;
  r &&
    (Object.entries(n.props).forEach(([s, o]) => {
      o = String(o);
      const i = `attr:${s}`;
      if (s === "class") {
        if (!o) return;
        for (const a of o.split(" ")) {
          const l = `${i}:${a}`;
          t && t(e, l, () => r.classList.remove(a)),
            r.classList.contains(a) || r.classList.add(a);
        }
        return;
      }
      t && !s.startsWith("data-h-") && t(e, i, () => r.removeAttribute(s)),
        r.getAttribute(s) !== o && r.setAttribute(s, o);
    }),
    id.includes(n.tag) &&
      r.innerHTML !== (n.children || "") &&
      (r.innerHTML = n.children || ""));
};
async function Ba(e, t = {}) {
  var f, p;
  const n = { shouldRender: !0 };
  if ((await e.hooks.callHook("dom:beforeRender", n), !n.shouldRender)) return;
  const r = t.document || window.document,
    s = e._popSideEffectQueue();
  e.headEntries()
    .map((g) => g._sde)
    .forEach((g) => {
      Object.entries(g).forEach(([_, v]) => {
        s[_] = v;
      });
    });
  const o = async (g) => {
      const _ = e.headEntries().find((E) => E._i === g._e),
        v = {
          renderId:
            g._d || Fa(JSON.stringify({ ...g, _e: void 0, _p: void 0 })),
          $el: null,
          shouldRender: !0,
          tag: g,
          entry: _,
          staleSideEffects: s,
        };
      return await e.hooks.callHook("dom:beforeRenderTag", v), v;
    },
    i = [],
    a = { body: [], head: [] },
    l = (g, _, v) => {
      (_ = `${g.renderId}:${_}`), g.entry && (g.entry._sde[_] = v), delete s[_];
    },
    c = (g) => {
      (e._elMap[g.renderId] = g.$el),
        i.push(g),
        l(g, "el", () => {
          var _;
          (_ = g.$el) == null || _.remove(), delete e._elMap[g.renderId];
        });
    };
  for (const g of await e.resolveTags()) {
    const _ = await o(g);
    if (!_.shouldRender) continue;
    const { tag: v } = _;
    if (v.tag === "title") {
      (r.title = v.children || ""), i.push(_);
      continue;
    }
    if (v.tag === "htmlAttrs" || v.tag === "bodyAttrs") {
      (_.$el = r[v.tag === "htmlAttrs" ? "documentElement" : "body"]),
        Fn(_, l),
        i.push(_);
      continue;
    }
    if (
      ((_.$el = e._elMap[_.renderId]),
      !_.$el &&
        v._hash &&
        (_.$el = r.querySelector(
          `${
            (f = v.tagPosition) != null && f.startsWith("body")
              ? "body"
              : "head"
          } > ${v.tag}[data-h-${v._hash}]`
        )),
      _.$el)
    ) {
      _.tag._d && Fn(_), c(_);
      continue;
    }
    (_.$el = r.createElement(v.tag)),
      Fn(_),
      a[
        (p = v.tagPosition) != null && p.startsWith("body") ? "body" : "head"
      ].push(_);
  }
  const u = { bodyClose: void 0, bodyOpen: void 0, head: void 0 };
  Object.entries(a).forEach(([g, _]) => {
    var E;
    if (!_.length) return;
    const v = (E = r == null ? void 0 : r[g]) == null ? void 0 : E.children;
    if (v) {
      for (const y of [...v].reverse()) {
        const h = y.tagName.toLowerCase();
        if (!Vs.includes(h)) continue;
        const b = Na({
            tag: h,
            props: y
              .getAttributeNames()
              .reduce((T, x) => ({ ...T, [x]: y.getAttribute(x) }), {}),
          }),
          R = _.findIndex((T) => {
            var x;
            return (
              T &&
              (T.tag._d === b ||
                ((x = y.isEqualNode) == null ? void 0 : x.call(y, T.$el)))
            );
          });
        if (R !== -1) {
          const T = _[R];
          (T.$el = y), Fn(T), c(T), delete _[R];
        }
      }
      _.forEach((y) => {
        const h = y.tag.tagPosition || "head";
        (u[h] = u[h] || r.createDocumentFragment()),
          u[h].appendChild(y.$el),
          c(y);
      });
    }
  }),
    u.head && r.head.appendChild(u.head),
    u.bodyOpen && r.body.insertBefore(u.bodyOpen, r.body.firstChild),
    u.bodyClose && r.body.appendChild(u.bodyClose);
  for (const g of i) await e.hooks.callHook("dom:renderTag", g);
  Object.values(s).forEach((g) => g());
}
let jr = null;
async function Ua(e, t = {}) {
  function n() {
    return (jr = null), Ba(e, t);
  }
  const r = t.delayFn || ((s) => setTimeout(s, 10));
  return (jr = jr || new Promise((s) => r(() => s(n()))));
}
const fd = (e) => ({
    hooks: {
      "entries:updated": function (t) {
        if (
          typeof (e == null ? void 0 : e.document) > "u" &&
          typeof window > "u"
        )
          return;
        let n = e == null ? void 0 : e.delayFn;
        !n && typeof requestAnimationFrame < "u" && (n = requestAnimationFrame),
          Ua(t, {
            document: (e == null ? void 0 : e.document) || window.document,
            delayFn: n,
          });
      },
    },
  }),
  Bo = { critical: 2, high: 9, low: 12, base: -1, title: 1, meta: 10 };
function Uo(e) {
  if (typeof e.tagPriority == "number") return e.tagPriority;
  if (e.tag === "meta") {
    if (e.props.charset) return -2;
    if (e.props["http-equiv"] === "content-security-policy") return 0;
  }
  const t = e.tagPriority || e.tag;
  return t in Bo ? Bo[t] : 10;
}
const dd = [
  { prefix: "before:", offset: -1 },
  { prefix: "after:", offset: 1 },
];
function hd() {
  return {
    hooks: {
      "tags:resolve": (e) => {
        const t = (n) => {
          var r;
          return (r = e.tags.find((s) => s._d === n)) == null ? void 0 : r._p;
        };
        for (const { prefix: n, offset: r } of dd)
          for (const s of e.tags.filter(
            (o) =>
              typeof o.tagPriority == "string" && o.tagPriority.startsWith(n)
          )) {
            const o = t(s.tagPriority.replace(n, ""));
            typeof o < "u" && (s._p = o + r);
          }
        e.tags.sort((n, r) => n._p - r._p).sort((n, r) => Uo(n) - Uo(r));
      },
    },
  };
}
const Ko = (e, t) =>
    e == null
      ? t || null
      : typeof e == "function"
      ? e(t)
      : e.replace("%s", t ?? ""),
  pd = () => ({
    hooks: {
      "tags:resolve": (e) => {
        const { tags: t } = e;
        let n = t.findIndex((s) => s.tag === "titleTemplate");
        const r = t.findIndex((s) => s.tag === "title");
        if (r !== -1 && n !== -1) {
          const s = Ko(t[n].children, t[r].children);
          s !== null ? (t[r].children = s || t[r].children) : delete t[r];
        } else if (n !== -1) {
          const s = Ko(t[n].children);
          s !== null && ((t[n].children = s), (t[n].tag = "title"), (n = -1));
        }
        n !== -1 && delete t[n], (e.tags = t.filter(Boolean));
      },
    },
  }),
  md = () => ({
    hooks: {
      "tag:normalise": function ({ tag: e }) {
        typeof e.props.body < "u" &&
          ((e.tagPosition = "bodyClose"), delete e.props.body);
      },
    },
  }),
  gd = typeof window < "u",
  _d = () => ({
    hooks: {
      "tag:normalise": (e) => {
        var s, o;
        const { tag: t, entry: n } = e,
          r = typeof t.props._dynamic < "u";
        !Vs.includes(t.tag) ||
          !t.key ||
          ((t._hash = Fa(JSON.stringify({ tag: t.tag, key: t.key }))),
          !(
            gd ||
            ((o = (s = Va()) == null ? void 0 : s.resolvedOptions) != null &&
              o.document)
          ) &&
            (n._m === "server" || r) &&
            (t.props[`data-h-${t._hash}`] = ""));
      },
      "tags:resolve": (e) => {
        e.tags = e.tags.map((t) => (delete t.props._dynamic, t));
      },
    },
  }),
  Vo = ["script", "link", "bodyAttrs"],
  yd = () => {
    const e = (t, n) => {
      const r = {},
        s = {};
      Object.entries(n.props).forEach(([i, a]) => {
        i.startsWith("on") && typeof a == "function" ? (s[i] = a) : (r[i] = a);
      });
      let o;
      return (
        t === "dom" &&
          n.tag === "script" &&
          typeof r.src == "string" &&
          typeof s.onload < "u" &&
          ((o = r.src), delete r.src),
        { props: r, eventHandlers: s, delayedSrc: o }
      );
    };
    return {
      hooks: {
        "ssr:render": function (t) {
          t.tags = t.tags.map(
            (n) => (
              !Vo.includes(n.tag) ||
                !Object.entries(n.props).find(
                  ([r, s]) => r.startsWith("on") && typeof s == "function"
                ) ||
                (n.props = e("ssr", n).props),
              n
            )
          );
        },
        "dom:beforeRenderTag": function (t) {
          if (
            !Vo.includes(t.tag.tag) ||
            !Object.entries(t.tag.props).find(
              ([o, i]) => o.startsWith("on") && typeof i == "function"
            )
          )
            return;
          const { props: n, eventHandlers: r, delayedSrc: s } = e("dom", t.tag);
          Object.keys(r).length &&
            ((t.tag.props = n),
            (t.tag._eventHandlers = r),
            (t.tag._delayedSrc = s));
        },
        "dom:renderTag": function (t) {
          const n = t.$el;
          if (!t.tag._eventHandlers || !n) return;
          const r =
            t.tag.tag === "bodyAttrs" && typeof window < "u" ? window : n;
          Object.entries(t.tag._eventHandlers).forEach(([s, o]) => {
            const i = `${t.tag._d || t.tag._p}:${s}`,
              a = s.slice(2).toLowerCase(),
              l = `data-h-${a}`;
            if ((delete t.staleSideEffects[i], n.hasAttribute(l))) return;
            const c = o;
            n.setAttribute(l, ""),
              r.addEventListener(a, c),
              t.entry &&
                (t.entry._sde[i] = () => {
                  r.removeEventListener(a, c), n.removeAttribute(l);
                });
          }),
            t.tag._delayedSrc && n.setAttribute("src", t.tag._delayedSrc);
        },
      },
    };
  };
let Ka;
const vd = (e) => (Ka = e),
  Va = () => Ka;
async function bd(e, t) {
  const n = { tag: e, props: {} };
  return e === "title" || e === "titleTemplate"
    ? ((n.children = t instanceof Promise ? await t : t), n)
    : ((n.props = await Ed({ ...t })),
      ["children", "innerHtml", "innerHTML"].forEach((r) => {
        typeof n.props[r] < "u" &&
          ((n.children = n.props[r]),
          typeof n.children == "object" &&
            (n.children = JSON.stringify(n.children)),
          delete n.props[r]);
      }),
      Object.keys(n.props)
        .filter((r) => cd.includes(r))
        .forEach((r) => {
          (n[r] = n.props[r]), delete n.props[r];
        }),
      typeof n.props.class == "object" &&
        !Array.isArray(n.props.class) &&
        (n.props.class = Object.keys(n.props.class).filter(
          (r) => n.props.class[r]
        )),
      Array.isArray(n.props.class) && (n.props.class = n.props.class.join(" ")),
      n.props.content && Array.isArray(n.props.content)
        ? n.props.content.map((r, s) => {
            const o = { ...n, props: { ...n.props } };
            return (
              (o.props.content = r),
              (o.key = `${n.props.name || n.props.property}:${s}`),
              o
            );
          })
        : n);
}
async function Ed(e) {
  for (const t of Object.keys(e))
    e[t] instanceof Promise && (e[t] = await e[t]),
      String(e[t]) === "true"
        ? (e[t] = "")
        : String(e[t]) === "false" && delete e[t];
  return e;
}
const wd = 10;
async function Rd(e) {
  const t = [];
  return (
    Object.entries(e.resolvedInput || e.input)
      .filter(([n, r]) => typeof r < "u" && ad.includes(n))
      .forEach(([n, r]) => {
        const s = od(r);
        t.push(...s.map((o) => bd(n, o)).flat());
      }),
    (await Promise.all(t))
      .flat()
      .map((n, r) => ((n._e = e._i), (n._p = (e._i << wd) + r), n))
  );
}
const Pd = () => [ud(), hd(), pd(), _d(), yd(), md()],
  Cd = (e = {}) => [
    fd({
      document: e == null ? void 0 : e.document,
      delayFn: e == null ? void 0 : e.domDelayFn,
    }),
  ];
function Td(e = {}) {
  const t = Ad({
    ...e,
    plugins: [...Cd(e), ...((e == null ? void 0 : e.plugins) || [])],
  });
  return vd(t), t;
}
function Ad(e = {}) {
  let t = [],
    n = {},
    r = 0;
  const s = Da();
  e != null && e.hooks && s.addHooks(e.hooks),
    (e.plugins = [...Pd(), ...((e == null ? void 0 : e.plugins) || [])]),
    e.plugins.forEach((a) => a.hooks && s.addHooks(a.hooks));
  const o = () => s.callHook("entries:updated", i),
    i = {
      resolvedOptions: e,
      headEntries() {
        return t;
      },
      get hooks() {
        return s;
      },
      use(a) {
        a.hooks && s.addHooks(a.hooks);
      },
      push(a, l) {
        const c = { _i: r++, input: a, _sde: {} };
        return (
          l != null && l.mode && (c._m = l == null ? void 0 : l.mode),
          t.push(c),
          o(),
          {
            dispose() {
              t = t.filter((u) =>
                u._i !== c._i
                  ? !0
                  : ((n = { ...n, ...(u._sde || {}) }), (u._sde = {}), o(), !1)
              );
            },
            patch(u) {
              t = t.map(
                (f) => (f._i === c._i && ((c.input = f.input = u), o()), f)
              );
            },
          }
        );
      },
      async resolveTags() {
        const a = { tags: [], entries: [...t] };
        await s.callHook("entries:resolve", a);
        for (const l of a.entries)
          for (const c of await Rd(l)) {
            const u = { tag: c, entry: l };
            await s.callHook("tag:normalise", u), a.tags.push(u.tag);
          }
        return await s.callHook("tags:resolve", a), a.tags;
      },
      _elMap: {},
      _popSideEffectQueue() {
        const a = { ...n };
        return (n = {}), a;
      },
    };
  return i.hooks.callHook("init", i), i;
}
function Od(e) {
  return typeof e == "function" ? e() : ve(e);
}
function er(e, t = "") {
  if (e instanceof Promise) return e;
  const n = Od(e);
  if (!e || !n) return n;
  if (Array.isArray(n)) return n.map((r) => er(r, t));
  if (typeof n == "object") {
    let r = !1;
    const s = Object.fromEntries(
      Object.entries(n).map(([o, i]) =>
        o === "titleTemplate" || o.startsWith("on")
          ? [o, ve(i)]
          : ((typeof i == "function" || ye(i)) && (r = !0), [o, er(i, o)])
      )
    );
    return r && Vs.includes(String(t)) && (s._dynamic = !0), s;
  }
  return n;
}
const kd = Bs.startsWith("3"),
  xd = typeof window < "u",
  Wa = "usehead";
function Ws() {
  return (it() && $e(Wa)) || Va();
}
function Id(e = {}) {
  const t = Td({
      ...e,
      domDelayFn: (r) => setTimeout(() => on(() => r()), 10),
      plugins: [Sd(), ...((e == null ? void 0 : e.plugins) || [])],
    }),
    n = {
      install(r) {
        kd && ((r.config.globalProperties.$unhead = t), r.provide(Wa, t));
      },
    };
  return (t.install = n.install), t;
}
const Sd = () => ({
  hooks: {
    "entries:resolve": function (e) {
      for (const t of e.entries) t.resolvedInput = er(t.input);
    },
  },
});
function $d(e, t = {}) {
  const n = Ws(),
    r = nt(!1),
    s = nt({});
  Pc(() => {
    s.value = r.value ? {} : er(e);
  });
  const o = n.push(s.value, t);
  return (
    xt(s, (a) => {
      o.patch(a);
    }),
    it() &&
      (dr(() => {
        o.dispose();
      }),
      na(() => {
        r.value = !0;
      }),
      ta(() => {
        r.value = !1;
      })),
    o
  );
}
function Ld(e, t = {}) {
  return Ws().push(e, t);
}
function qa(e, t = {}) {
  var r;
  const n = Ws();
  if (n) {
    const s = xd || !!((r = n.resolvedOptions) != null && r.document);
    return (t.mode === "server" && s) || (t.mode === "client" && !s)
      ? void 0
      : s
      ? $d(e, t)
      : Ld(e, t);
  }
}
function jd(e) {
  const t = Id(),
    n = {
      unhead: t,
      install(r) {
        Bs.startsWith("3") &&
          ((r.config.globalProperties.$head = t), r.provide("usehead", t));
      },
      use(r) {
        t.use(r);
      },
      resolveTags() {
        return t.resolveTags();
      },
      headEntries() {
        return t.headEntries();
      },
      headTags() {
        return t.resolveTags();
      },
      push(r, s) {
        return t.push(r, s);
      },
      addEntry(r, s) {
        return t.push(r, s);
      },
      addHeadObjs(r, s) {
        return t.push(r, s);
      },
      addReactiveEntry(r, s) {
        const o = qa(r, s);
        return typeof o < "u" ? o.dispose : () => {};
      },
      removeHeadObjs() {},
      updateDOM(r, s) {
        s
          ? Ba(t, { document: r })
          : Ua(t, { delayFn: (o) => setTimeout(() => o(), 50), document: r });
      },
      internalHooks: t.hooks,
      hooks: { "before:dom": [], "resolved:tags": [], "resolved:entries": [] },
    };
  return (
    (t.addHeadObjs = n.addHeadObjs),
    (t.updateDOM = n.updateDOM),
    t.hooks.hook("dom:beforeRender", (r) => {
      for (const s of n.hooks["before:dom"])
        s() === !1 && (r.shouldRender = !1);
    }),
    e && n.addHeadObjs(e),
    n
  );
}
const Hd = {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "content-language", name: "content-language", content: "SV-se" },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Rädda Djuren-klubben är för barn upp till 13 år som älskar djur! I samarbete med Djurens Rätt gör vi skillnad för djuren",
      },
      {
        hid: "description",
        property: "description",
        content:
          "Rädda Djuren-klubben är för barn upp till 13 år som älskar djur! I samarbete med Djurens Rätt gör vi skillnad för djuren",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "Rädda Djuren-klubben",
      },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "url", property: "url", content: "https://www.raddadjuren.se" },
      {
        hid: "og:title",
        property: "og:title",
        content: "Rädda Djuren-klubben",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Rädda Djuren-klubben",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://www.raddadjuren.se/share.png",
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: "https://www.raddadjuren.se/share.png",
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: "Rädda Djuren-klubben",
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      { hid: "twitter:site", name: "twitter:site", content: "@raddadjuren" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://www.raddadjuren.se",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Rädda Djuren-klubben",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "Rädda Djuren-klubben är för barn upp till 13 år som älskar djur! I samarbete med Djurens Rätt gör vi skillnad för djuren",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://www.raddadjuren.se/share.png",
      },
    ],
    link: [
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://www.raddadjuren.se",
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
    style: [],
    script: [
      {
        hid: "gtm",
        children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5TLNPXT');`,
        type: "text/javascript",
      },
    ],
    noscript: [],
    title: "Djurfakta | Rädda Djuren-klubben",
    titleTemplate: "%s | ",
  },
  Dd = !1,
  os = !1,
  Md = !1,
  Nd = "__nuxt",
  Fd = at((e) => {
    const t = jd();
    t.push(Hd), e.vueApp.use(t);
    {
      let n = !0;
      const r = () => {
        (n = !1), t.internalHooks.callHook("entries:updated", t.unhead);
      };
      t.internalHooks.hook("dom:beforeRender", (s) => {
        s.shouldRender = !n;
      }),
        e.hooks.hook("page:start", () => {
          n = !0;
        }),
        e.hooks.hook("page:finish", r),
        e.hooks.hook("app:mounted", r);
    }
    e._useHead = qa;
  });
/*!
 * vue-router v4.1.6
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const Dt = typeof window < "u";
function Bd(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const oe = Object.assign;
function Hr(e, t) {
  const n = {};
  for (const r in t) {
    const s = t[r];
    n[r] = ze(s) ? s.map(e) : e(s);
  }
  return n;
}
const yn = () => {},
  ze = Array.isArray,
  Ud = /\/$/,
  Kd = (e) => e.replace(Ud, "");
function Dr(e, t, n = "/") {
  let r,
    s = {},
    o = "",
    i = "";
  const a = t.indexOf("#");
  let l = t.indexOf("?");
  return (
    a < l && a >= 0 && (l = -1),
    l > -1 &&
      ((r = t.slice(0, l)),
      (o = t.slice(l + 1, a > -1 ? a : t.length)),
      (s = e(o))),
    a > -1 && ((r = r || t.slice(0, a)), (i = t.slice(a, t.length))),
    (r = zd(r ?? t, n)),
    { fullPath: r + (o && "?") + o + i, path: r, query: s, hash: i }
  );
}
function Vd(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Wo(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function Wd(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1;
  return (
    r > -1 &&
    r === s &&
    Yt(t.matched[r], n.matched[s]) &&
    za(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Yt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function za(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!qd(e[n], t[n])) return !1;
  return !0;
}
function qd(e, t) {
  return ze(e) ? qo(e, t) : ze(t) ? qo(t, e) : e === t;
}
function qo(e, t) {
  return ze(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function zd(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    r = e.split("/");
  let s = n.length - 1,
    o,
    i;
  for (o = 0; o < r.length; o++)
    if (((i = r[o]), i !== "."))
      if (i === "..") s > 1 && s--;
      else break;
  return (
    n.slice(0, s).join("/") +
    "/" +
    r.slice(o - (o === r.length ? 1 : 0)).join("/")
  );
}
var Tn;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(Tn || (Tn = {}));
var vn;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(vn || (vn = {}));
function Jd(e) {
  if (!e)
    if (Dt) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Kd(e);
}
const Qd = /^[^#]+#/;
function Xd(e, t) {
  return e.replace(Qd, "#") + t;
}
function Gd(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const yr = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function Yd(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      r = typeof n == "string" && n.startsWith("#"),
      s =
        typeof n == "string"
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!s) return;
    t = Gd(s, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      );
}
function zo(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const is = new Map();
function Zd(e, t) {
  is.set(e, t);
}
function eh(e) {
  const t = is.get(e);
  return is.delete(e), t;
}
let th = () => location.protocol + "//" + location.host;
function Ja(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    o = e.indexOf("#");
  if (o > -1) {
    let a = s.includes(e.slice(o)) ? e.slice(o).length : 1,
      l = s.slice(a);
    return l[0] !== "/" && (l = "/" + l), Wo(l, "");
  }
  return Wo(n, e) + r + s;
}
function nh(e, t, n, r) {
  let s = [],
    o = [],
    i = null;
  const a = ({ state: p }) => {
    const g = Ja(e, location),
      _ = n.value,
      v = t.value;
    let E = 0;
    if (p) {
      if (((n.value = g), (t.value = p), i && i === _)) {
        i = null;
        return;
      }
      E = v ? p.position - v.position : 0;
    } else r(g);
    s.forEach((y) => {
      y(n.value, _, {
        delta: E,
        type: Tn.pop,
        direction: E ? (E > 0 ? vn.forward : vn.back) : vn.unknown,
      });
    });
  };
  function l() {
    i = n.value;
  }
  function c(p) {
    s.push(p);
    const g = () => {
      const _ = s.indexOf(p);
      _ > -1 && s.splice(_, 1);
    };
    return o.push(g), g;
  }
  function u() {
    const { history: p } = window;
    p.state && p.replaceState(oe({}, p.state, { scroll: yr() }), "");
  }
  function f() {
    for (const p of o) p();
    (o = []),
      window.removeEventListener("popstate", a),
      window.removeEventListener("beforeunload", u);
  }
  return (
    window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", u),
    { pauseListeners: l, listen: c, destroy: f }
  );
}
function Jo(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? yr() : null,
  };
}
function rh(e) {
  const { history: t, location: n } = window,
    r = { value: Ja(e, n) },
    s = { value: t.state };
  s.value ||
    o(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function o(l, c, u) {
    const f = e.indexOf("#"),
      p =
        f > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l
          : th() + e + l;
    try {
      t[u ? "replaceState" : "pushState"](c, "", p), (s.value = c);
    } catch (g) {
      console.error(g), n[u ? "replace" : "assign"](p);
    }
  }
  function i(l, c) {
    const u = oe({}, t.state, Jo(s.value.back, l, s.value.forward, !0), c, {
      position: s.value.position,
    });
    o(l, u, !0), (r.value = l);
  }
  function a(l, c) {
    const u = oe({}, s.value, t.state, { forward: l, scroll: yr() });
    o(u.current, u, !0);
    const f = oe({}, Jo(r.value, l, null), { position: u.position + 1 }, c);
    o(l, f, !1), (r.value = l);
  }
  return { location: r, state: s, push: a, replace: i };
}
function Qa(e) {
  e = Jd(e);
  const t = rh(e),
    n = nh(e, t.state, t.location, t.replace);
  function r(o, i = !0) {
    i || n.pauseListeners(), history.go(o);
  }
  const s = oe(
    { location: "", base: e, go: r, createHref: Xd.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(s, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(s, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    s
  );
}
function sh(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ""),
    e.includes("#") || (e += "#"),
    Qa(e)
  );
}
function oh(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function Xa(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const dt = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  Ga = Symbol("");
var Qo;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(Qo || (Qo = {}));
function Zt(e, t) {
  return oe(new Error(), { type: e, [Ga]: !0 }, t);
}
function Ye(e, t) {
  return e instanceof Error && Ga in e && (t == null || !!(e.type & t));
}
const Xo = "[^/]+?",
  ih = { sensitive: !1, strict: !1, start: !0, end: !0 },
  ah = /[.+*?^${}()[\]/\\]/g;
function lh(e, t) {
  const n = oe({}, ih, t),
    r = [];
  let s = n.start ? "^" : "";
  const o = [];
  for (const c of e) {
    const u = c.length ? [] : [90];
    n.strict && !c.length && (s += "/");
    for (let f = 0; f < c.length; f++) {
      const p = c[f];
      let g = 40 + (n.sensitive ? 0.25 : 0);
      if (p.type === 0)
        f || (s += "/"), (s += p.value.replace(ah, "\\$&")), (g += 40);
      else if (p.type === 1) {
        const { value: _, repeatable: v, optional: E, regexp: y } = p;
        o.push({ name: _, repeatable: v, optional: E });
        const h = y || Xo;
        if (h !== Xo) {
          g += 10;
          try {
            new RegExp(`(${h})`);
          } catch (R) {
            throw new Error(
              `Invalid custom RegExp for param "${_}" (${h}): ` + R.message
            );
          }
        }
        let b = v ? `((?:${h})(?:/(?:${h}))*)` : `(${h})`;
        f || (b = E && c.length < 2 ? `(?:/${b})` : "/" + b),
          E && (b += "?"),
          (s += b),
          (g += 20),
          E && (g += -8),
          v && (g += -20),
          h === ".*" && (g += -50);
      }
      u.push(g);
    }
    r.push(u);
  }
  if (n.strict && n.end) {
    const c = r.length - 1;
    r[c][r[c].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += "/?"), n.end ? (s += "$") : n.strict && (s += "(?:/|$)");
  const i = new RegExp(s, n.sensitive ? "" : "i");
  function a(c) {
    const u = c.match(i),
      f = {};
    if (!u) return null;
    for (let p = 1; p < u.length; p++) {
      const g = u[p] || "",
        _ = o[p - 1];
      f[_.name] = g && _.repeatable ? g.split("/") : g;
    }
    return f;
  }
  function l(c) {
    let u = "",
      f = !1;
    for (const p of e) {
      (!f || !u.endsWith("/")) && (u += "/"), (f = !1);
      for (const g of p)
        if (g.type === 0) u += g.value;
        else if (g.type === 1) {
          const { value: _, repeatable: v, optional: E } = g,
            y = _ in c ? c[_] : "";
          if (ze(y) && !v)
            throw new Error(
              `Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`
            );
          const h = ze(y) ? y.join("/") : y;
          if (!h)
            if (E)
              p.length < 2 &&
                (u.endsWith("/") ? (u = u.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${_}"`);
          u += h;
        }
    }
    return u || "/";
  }
  return { re: i, score: r, keys: o, parse: a, stringify: l };
}
function ch(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function uh(e, t) {
  let n = 0;
  const r = e.score,
    s = t.score;
  for (; n < r.length && n < s.length; ) {
    const o = ch(r[n], s[n]);
    if (o) return o;
    n++;
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (Go(r)) return 1;
    if (Go(s)) return -1;
  }
  return s.length - r.length;
}
function Go(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const fh = { type: 0, value: "" },
  dh = /[a-zA-Z0-9_]/;
function hh(e) {
  if (!e) return [[]];
  if (e === "/") return [[fh]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(g) {
    throw new Error(`ERR (${n})/"${c}": ${g}`);
  }
  let n = 0,
    r = n;
  const s = [];
  let o;
  function i() {
    o && s.push(o), (o = []);
  }
  let a = 0,
    l,
    c = "",
    u = "";
  function f() {
    c &&
      (n === 0
        ? o.push({ type: 0, value: c })
        : n === 1 || n === 2 || n === 3
        ? (o.length > 1 &&
            (l === "*" || l === "+") &&
            t(
              `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
            ),
          o.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?",
          }))
        : t("Invalid state to consume buffer"),
      (c = ""));
  }
  function p() {
    c += l;
  }
  for (; a < e.length; ) {
    if (((l = e[a++]), l === "\\" && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (c && f(), i()) : l === ":" ? (f(), (n = 1)) : p();
        break;
      case 4:
        p(), (n = r);
        break;
      case 1:
        l === "("
          ? (n = 2)
          : dh.test(l)
          ? p()
          : (f(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--);
        break;
      case 2:
        l === ")"
          ? u[u.length - 1] == "\\"
            ? (u = u.slice(0, -1) + l)
            : (n = 3)
          : (u += l);
        break;
      case 3:
        f(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--, (u = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), f(), i(), s;
}
function ph(e, t, n) {
  const r = lh(hh(e.path), n),
    s = oe(r, { record: e, parent: t, children: [], alias: [] });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function mh(e, t) {
  const n = [],
    r = new Map();
  t = ei({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(u) {
    return r.get(u);
  }
  function o(u, f, p) {
    const g = !p,
      _ = gh(u);
    _.aliasOf = p && p.record;
    const v = ei(t, u),
      E = [_];
    if ("alias" in u) {
      const b = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const R of b)
        E.push(
          oe({}, _, {
            components: p ? p.record.components : _.components,
            path: R,
            aliasOf: p ? p.record : _,
          })
        );
    }
    let y, h;
    for (const b of E) {
      const { path: R } = b;
      if (f && R[0] !== "/") {
        const T = f.record.path,
          x = T[T.length - 1] === "/" ? "" : "/";
        b.path = f.record.path + (R && x + R);
      }
      if (
        ((y = ph(b, f, v)),
        p
          ? p.alias.push(y)
          : ((h = h || y),
            h !== y && h.alias.push(y),
            g && u.name && !Zo(y) && i(u.name)),
        _.children)
      ) {
        const T = _.children;
        for (let x = 0; x < T.length; x++) o(T[x], y, p && p.children[x]);
      }
      (p = p || y),
        ((y.record.components && Object.keys(y.record.components).length) ||
          y.record.name ||
          y.record.redirect) &&
          l(y);
    }
    return h
      ? () => {
          i(h);
        }
      : yn;
  }
  function i(u) {
    if (Xa(u)) {
      const f = r.get(u);
      f &&
        (r.delete(u),
        n.splice(n.indexOf(f), 1),
        f.children.forEach(i),
        f.alias.forEach(i));
    } else {
      const f = n.indexOf(u);
      f > -1 &&
        (n.splice(f, 1),
        u.record.name && r.delete(u.record.name),
        u.children.forEach(i),
        u.alias.forEach(i));
    }
  }
  function a() {
    return n;
  }
  function l(u) {
    let f = 0;
    for (
      ;
      f < n.length &&
      uh(u, n[f]) >= 0 &&
      (u.record.path !== n[f].record.path || !Ya(u, n[f]));

    )
      f++;
    n.splice(f, 0, u), u.record.name && !Zo(u) && r.set(u.record.name, u);
  }
  function c(u, f) {
    let p,
      g = {},
      _,
      v;
    if ("name" in u && u.name) {
      if (((p = r.get(u.name)), !p)) throw Zt(1, { location: u });
      (v = p.record.name),
        (g = oe(
          Yo(
            f.params,
            p.keys.filter((h) => !h.optional).map((h) => h.name)
          ),
          u.params &&
            Yo(
              u.params,
              p.keys.map((h) => h.name)
            )
        )),
        (_ = p.stringify(g));
    } else if ("path" in u)
      (_ = u.path),
        (p = n.find((h) => h.re.test(_))),
        p && ((g = p.parse(_)), (v = p.record.name));
    else {
      if (((p = f.name ? r.get(f.name) : n.find((h) => h.re.test(f.path))), !p))
        throw Zt(1, { location: u, currentLocation: f });
      (v = p.record.name),
        (g = oe({}, f.params, u.params)),
        (_ = p.stringify(g));
    }
    const E = [];
    let y = p;
    for (; y; ) E.unshift(y.record), (y = y.parent);
    return { name: v, path: _, params: g, matched: E, meta: yh(E) };
  }
  return (
    e.forEach((u) => o(u)),
    {
      addRoute: o,
      resolve: c,
      removeRoute: i,
      getRoutes: a,
      getRecordMatcher: s,
    }
  );
}
function Yo(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function gh(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: _h(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
}
function _h(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "boolean" ? n : n[r];
  return t;
}
function Zo(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function yh(e) {
  return e.reduce((t, n) => oe(t, n.meta), {});
}
function ei(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function Ya(e, t) {
  return t.children.some((n) => n === e || Ya(e, n));
}
const Za = /#/g,
  vh = /&/g,
  bh = /\//g,
  Eh = /=/g,
  wh = /\?/g,
  el = /\+/g,
  Rh = /%5B/g,
  Ph = /%5D/g,
  tl = /%5E/g,
  Ch = /%60/g,
  nl = /%7B/g,
  Th = /%7C/g,
  rl = /%7D/g,
  Ah = /%20/g;
function qs(e) {
  return encodeURI("" + e)
    .replace(Th, "|")
    .replace(Rh, "[")
    .replace(Ph, "]");
}
function Oh(e) {
  return qs(e).replace(nl, "{").replace(rl, "}").replace(tl, "^");
}
function as(e) {
  return qs(e)
    .replace(el, "%2B")
    .replace(Ah, "+")
    .replace(Za, "%23")
    .replace(vh, "%26")
    .replace(Ch, "`")
    .replace(nl, "{")
    .replace(rl, "}")
    .replace(tl, "^");
}
function kh(e) {
  return as(e).replace(Eh, "%3D");
}
function xh(e) {
  return qs(e).replace(Za, "%23").replace(wh, "%3F");
}
function Ih(e) {
  return e == null ? "" : xh(e).replace(bh, "%2F");
}
function tr(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
function Sh(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < r.length; ++s) {
    const o = r[s].replace(el, " "),
      i = o.indexOf("="),
      a = tr(i < 0 ? o : o.slice(0, i)),
      l = i < 0 ? null : tr(o.slice(i + 1));
    if (a in t) {
      let c = t[a];
      ze(c) || (c = t[a] = [c]), c.push(l);
    } else t[a] = l;
  }
  return t;
}
function ti(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (((n = kh(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (ze(r) ? r.map((o) => o && as(o)) : [r && as(r)]).forEach((o) => {
      o !== void 0 &&
        ((t += (t.length ? "&" : "") + n), o != null && (t += "=" + o));
    });
  }
  return t;
}
function $h(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = ze(r)
        ? r.map((s) => (s == null ? null : "" + s))
        : r == null
        ? r
        : "" + r);
  }
  return t;
}
const Lh = Symbol(""),
  ni = Symbol(""),
  zs = Symbol(""),
  Js = Symbol(""),
  ls = Symbol("");
function un() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const s = e.indexOf(r);
        s > -1 && e.splice(s, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e, reset: n };
}
function pt(e, t, n, r, s) {
  const o = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () =>
    new Promise((i, a) => {
      const l = (f) => {
          f === !1
            ? a(Zt(4, { from: n, to: t }))
            : f instanceof Error
            ? a(f)
            : oh(f)
            ? a(Zt(2, { from: t, to: f }))
            : (o &&
                r.enterCallbacks[s] === o &&
                typeof f == "function" &&
                o.push(f),
              i());
        },
        c = e.call(r && r.instances[s], t, n, l);
      let u = Promise.resolve(c);
      e.length < 3 && (u = u.then(l)), u.catch((f) => a(f));
    });
}
function Mr(e, t, n, r) {
  const s = [];
  for (const o of e)
    for (const i in o.components) {
      let a = o.components[i];
      if (!(t !== "beforeRouteEnter" && !o.instances[i]))
        if (jh(a)) {
          const c = (a.__vccOpts || a)[t];
          c && s.push(pt(c, n, r, o, i));
        } else {
          let l = a();
          s.push(() =>
            l.then((c) => {
              if (!c)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${i}" at "${o.path}"`)
                );
              const u = Bd(c) ? c.default : c;
              o.components[i] = u;
              const p = (u.__vccOpts || u)[t];
              return p && pt(p, n, r, o, i)();
            })
          );
        }
    }
  return s;
}
function jh(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function ri(e) {
  const t = $e(zs),
    n = $e(Js),
    r = Te(() => t.resolve(ve(e.to))),
    s = Te(() => {
      const { matched: l } = r.value,
        { length: c } = l,
        u = l[c - 1],
        f = n.matched;
      if (!u || !f.length) return -1;
      const p = f.findIndex(Yt.bind(null, u));
      if (p > -1) return p;
      const g = si(l[c - 2]);
      return c > 1 && si(u) === g && f[f.length - 1].path !== g
        ? f.findIndex(Yt.bind(null, l[c - 2]))
        : p;
    }),
    o = Te(() => s.value > -1 && Nh(n.params, r.value.params)),
    i = Te(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        za(n.params, r.value.params)
    );
  function a(l = {}) {
    return Mh(l)
      ? t[ve(e.replace) ? "replace" : "push"](ve(e.to)).catch(yn)
      : Promise.resolve();
  }
  return {
    route: r,
    href: Te(() => r.value.href),
    isActive: o,
    isExactActive: i,
    navigate: a,
  };
}
const Hh = vt({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: ri,
    setup(e, { slots: t }) {
      const n = qe(ri(e)),
        { options: r } = $e(zs),
        s = Te(() => ({
          [oi(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [oi(
            e.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const o = t.default && t.default(n);
        return e.custom
          ? o
          : We(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value,
              },
              o
            );
      };
    },
  }),
  Dh = Hh;
function Mh(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Nh(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n];
    if (typeof r == "string") {
      if (r !== s) return !1;
    } else if (!ze(s) || s.length !== r.length || r.some((o, i) => o !== s[i]))
      return !1;
  }
  return !0;
}
function si(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const oi = (e, t, n) => e ?? t ?? n,
  Fh = vt({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = $e(ls),
        s = Te(() => e.route || r.value),
        o = $e(ni, 0),
        i = Te(() => {
          let c = ve(o);
          const { matched: u } = s.value;
          let f;
          for (; (f = u[c]) && !f.components; ) c++;
          return c;
        }),
        a = Te(() => s.value.matched[i.value]);
      Wt(
        ni,
        Te(() => i.value + 1)
      ),
        Wt(Lh, a),
        Wt(ls, s);
      const l = nt();
      return (
        xt(
          () => [l.value, a.value, e.name],
          ([c, u, f], [p, g, _]) => {
            u &&
              ((u.instances[f] = c),
              g &&
                g !== u &&
                c &&
                c === p &&
                (u.leaveGuards.size || (u.leaveGuards = g.leaveGuards),
                u.updateGuards.size || (u.updateGuards = g.updateGuards))),
              c &&
                u &&
                (!g || !Yt(u, g) || !p) &&
                (u.enterCallbacks[f] || []).forEach((v) => v(c));
          },
          { flush: "post" }
        ),
        () => {
          const c = s.value,
            u = e.name,
            f = a.value,
            p = f && f.components[u];
          if (!p) return ii(n.default, { Component: p, route: c });
          const g = f.props[u],
            _ = g
              ? g === !0
                ? c.params
                : typeof g == "function"
                ? g(c)
                : g
              : null,
            E = We(
              p,
              oe({}, _, t, {
                onVnodeUnmounted: (y) => {
                  y.component.isUnmounted && (f.instances[u] = null);
                },
                ref: l,
              })
            );
          return ii(n.default, { Component: E, route: c }) || E;
        }
      );
    },
  });
function ii(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const sl = Fh;
function Bh(e) {
  const t = mh(e.routes, e),
    n = e.parseQuery || Sh,
    r = e.stringifyQuery || ti,
    s = e.history,
    o = un(),
    i = un(),
    a = un(),
    l = Vr(dt);
  let c = dt;
  Dt &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const u = Hr.bind(null, (C) => "" + C),
    f = Hr.bind(null, Ih),
    p = Hr.bind(null, tr);
  function g(C, M) {
    let L, K;
    return (
      Xa(C) ? ((L = t.getRecordMatcher(C)), (K = M)) : (K = C), t.addRoute(K, L)
    );
  }
  function _(C) {
    const M = t.getRecordMatcher(C);
    M && t.removeRoute(M);
  }
  function v() {
    return t.getRoutes().map((C) => C.record);
  }
  function E(C) {
    return !!t.getRecordMatcher(C);
  }
  function y(C, M) {
    if (((M = oe({}, M || l.value)), typeof C == "string")) {
      const d = Dr(n, C, M.path),
        m = t.resolve({ path: d.path }, M),
        w = s.createHref(d.fullPath);
      return oe(d, m, {
        params: p(m.params),
        hash: tr(d.hash),
        redirectedFrom: void 0,
        href: w,
      });
    }
    let L;
    if ("path" in C) L = oe({}, C, { path: Dr(n, C.path, M.path).path });
    else {
      const d = oe({}, C.params);
      for (const m in d) d[m] == null && delete d[m];
      (L = oe({}, C, { params: f(C.params) })), (M.params = f(M.params));
    }
    const K = t.resolve(L, M),
      ne = C.hash || "";
    K.params = u(p(K.params));
    const de = Vd(r, oe({}, C, { hash: Oh(ne), path: K.path })),
      Y = s.createHref(de);
    return oe(
      { fullPath: de, hash: ne, query: r === ti ? $h(C.query) : C.query || {} },
      K,
      { redirectedFrom: void 0, href: Y }
    );
  }
  function h(C) {
    return typeof C == "string" ? Dr(n, C, l.value.path) : oe({}, C);
  }
  function b(C, M) {
    if (c !== C) return Zt(8, { from: M, to: C });
  }
  function R(C) {
    return j(C);
  }
  function T(C) {
    return R(oe(h(C), { replace: !0 }));
  }
  function x(C) {
    const M = C.matched[C.matched.length - 1];
    if (M && M.redirect) {
      const { redirect: L } = M;
      let K = typeof L == "function" ? L(C) : L;
      return (
        typeof K == "string" &&
          ((K = K.includes("?") || K.includes("#") ? (K = h(K)) : { path: K }),
          (K.params = {})),
        oe(
          { query: C.query, hash: C.hash, params: "path" in K ? {} : C.params },
          K
        )
      );
    }
  }
  function j(C, M) {
    const L = (c = y(C)),
      K = l.value,
      ne = C.state,
      de = C.force,
      Y = C.replace === !0,
      d = x(L);
    if (d)
      return j(
        oe(h(d), {
          state: typeof d == "object" ? oe({}, ne, d.state) : ne,
          force: de,
          replace: Y,
        }),
        M || L
      );
    const m = L;
    m.redirectedFrom = M;
    let w;
    return (
      !de &&
        Wd(r, K, L) &&
        ((w = Zt(16, { to: m, from: K })), bt(K, K, !0, !1)),
      (w ? Promise.resolve(w) : q(m, K))
        .catch((P) => (Ye(P) ? (Ye(P, 2) ? P : Me(P)) : le(P, m, K)))
        .then((P) => {
          if (P) {
            if (Ye(P, 2))
              return j(
                oe({ replace: Y }, h(P.to), {
                  state: typeof P.to == "object" ? oe({}, ne, P.to.state) : ne,
                  force: de,
                }),
                M || m
              );
          } else P = J(m, K, !0, Y, ne);
          return U(m, K, P), P;
        })
    );
  }
  function O(C, M) {
    const L = b(C, M);
    return L ? Promise.reject(L) : Promise.resolve();
  }
  function q(C, M) {
    let L;
    const [K, ne, de] = Uh(C, M);
    L = Mr(K.reverse(), "beforeRouteLeave", C, M);
    for (const d of K)
      d.leaveGuards.forEach((m) => {
        L.push(pt(m, C, M));
      });
    const Y = O.bind(null, C, M);
    return (
      L.push(Y),
      Ht(L)
        .then(() => {
          L = [];
          for (const d of o.list()) L.push(pt(d, C, M));
          return L.push(Y), Ht(L);
        })
        .then(() => {
          L = Mr(ne, "beforeRouteUpdate", C, M);
          for (const d of ne)
            d.updateGuards.forEach((m) => {
              L.push(pt(m, C, M));
            });
          return L.push(Y), Ht(L);
        })
        .then(() => {
          L = [];
          for (const d of C.matched)
            if (d.beforeEnter && !M.matched.includes(d))
              if (ze(d.beforeEnter))
                for (const m of d.beforeEnter) L.push(pt(m, C, M));
              else L.push(pt(d.beforeEnter, C, M));
          return L.push(Y), Ht(L);
        })
        .then(
          () => (
            C.matched.forEach((d) => (d.enterCallbacks = {})),
            (L = Mr(de, "beforeRouteEnter", C, M)),
            L.push(Y),
            Ht(L)
          )
        )
        .then(() => {
          L = [];
          for (const d of i.list()) L.push(pt(d, C, M));
          return L.push(Y), Ht(L);
        })
        .catch((d) => (Ye(d, 8) ? d : Promise.reject(d)))
    );
  }
  function U(C, M, L) {
    for (const K of a.list()) K(C, M, L);
  }
  function J(C, M, L, K, ne) {
    const de = b(C, M);
    if (de) return de;
    const Y = M === dt,
      d = Dt ? history.state : {};
    L &&
      (K || Y
        ? s.replace(C.fullPath, oe({ scroll: Y && d && d.scroll }, ne))
        : s.push(C.fullPath, ne)),
      (l.value = C),
      bt(C, M, L, Y),
      Me();
  }
  let D;
  function G() {
    D ||
      (D = s.listen((C, M, L) => {
        if (!xn.listening) return;
        const K = y(C),
          ne = x(K);
        if (ne) {
          j(oe(ne, { replace: !0 }), K).catch(yn);
          return;
        }
        c = K;
        const de = l.value;
        Dt && Zd(zo(de.fullPath, L.delta), yr()),
          q(K, de)
            .catch((Y) =>
              Ye(Y, 12)
                ? Y
                : Ye(Y, 2)
                ? (j(Y.to, K)
                    .then((d) => {
                      Ye(d, 20) &&
                        !L.delta &&
                        L.type === Tn.pop &&
                        s.go(-1, !1);
                    })
                    .catch(yn),
                  Promise.reject())
                : (L.delta && s.go(-L.delta, !1), le(Y, K, de))
            )
            .then((Y) => {
              (Y = Y || J(K, de, !1)),
                Y &&
                  (L.delta && !Ye(Y, 8)
                    ? s.go(-L.delta, !1)
                    : L.type === Tn.pop && Ye(Y, 20) && s.go(-1, !1)),
                U(K, de, Y);
            })
            .catch(yn);
      }));
  }
  let N = un(),
    Re = un(),
    te;
  function le(C, M, L) {
    Me(C);
    const K = Re.list();
    return (
      K.length ? K.forEach((ne) => ne(C, M, L)) : console.error(C),
      Promise.reject(C)
    );
  }
  function ie() {
    return te && l.value !== dt
      ? Promise.resolve()
      : new Promise((C, M) => {
          N.add([C, M]);
        });
  }
  function Me(C) {
    return (
      te ||
        ((te = !C),
        G(),
        N.list().forEach(([M, L]) => (C ? L(C) : M())),
        N.reset()),
      C
    );
  }
  function bt(C, M, L, K) {
    const { scrollBehavior: ne } = e;
    if (!Dt || !ne) return Promise.resolve();
    const de =
      (!L && eh(zo(C.fullPath, 0))) ||
      ((K || !L) && history.state && history.state.scroll) ||
      null;
    return on()
      .then(() => ne(C, M, de))
      .then((Y) => Y && Yd(Y))
      .catch((Y) => le(Y, C, M));
  }
  const Ne = (C) => s.go(C);
  let Oe;
  const Lt = new Set(),
    xn = {
      currentRoute: l,
      listening: !0,
      addRoute: g,
      removeRoute: _,
      hasRoute: E,
      getRoutes: v,
      resolve: y,
      options: e,
      push: R,
      replace: T,
      go: Ne,
      back: () => Ne(-1),
      forward: () => Ne(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: a.add,
      onError: Re.add,
      isReady: ie,
      install(C) {
        const M = this;
        C.component("RouterLink", Dh),
          C.component("RouterView", sl),
          (C.config.globalProperties.$router = M),
          Object.defineProperty(C.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => ve(l),
          }),
          Dt &&
            !Oe &&
            l.value === dt &&
            ((Oe = !0), R(s.location).catch((ne) => {}));
        const L = {};
        for (const ne in dt) L[ne] = Te(() => l.value[ne]);
        C.provide(zs, M), C.provide(Js, qe(L)), C.provide(ls, l);
        const K = C.unmount;
        Lt.add(C),
          (C.unmount = function () {
            Lt.delete(C),
              Lt.size < 1 &&
                ((c = dt),
                D && D(),
                (D = null),
                (l.value = dt),
                (Oe = !1),
                (te = !1)),
              K();
          });
      },
    };
  return xn;
}
function Ht(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
}
function Uh(e, t) {
  const n = [],
    r = [],
    s = [],
    o = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < o; i++) {
    const a = t.matched[i];
    a && (e.matched.find((c) => Yt(c, a)) ? r.push(a) : n.push(a));
    const l = e.matched[i];
    l && (t.matched.find((c) => Yt(c, l)) || s.push(l));
  }
  return [n, r, s];
}
function Kh() {
  return $e(Js);
}
function Nr(e) {
  return e !== null && typeof e == "object";
}
function cs(e, t, n = ".", r) {
  if (!Nr(t)) return cs(e, {}, n, r);
  const s = Object.assign({}, t);
  for (const o in e) {
    if (o === "__proto__" || o === "constructor") continue;
    const i = e[o];
    i != null &&
      ((r && r(s, o, i, n)) ||
        (Array.isArray(i) && Array.isArray(s[o])
          ? (s[o] = [...i, ...s[o]])
          : Nr(i) && Nr(s[o])
          ? (s[o] = cs(i, s[o], (n ? `${n}.` : "") + o.toString(), r))
          : (s[o] = i)));
  }
  return s;
}
function ol(e) {
  return (...t) => t.reduce((n, r) => cs(n, r, "", e), {});
}
const Vh = ol(),
  Wh = ol((e, t, n) => {
    if (typeof e[t] < "u" && typeof n == "function")
      return (e[t] = n(e[t])), !0;
  });
class us extends Error {
  constructor() {
    super(...arguments),
      (this.statusCode = 500),
      (this.fatal = !1),
      (this.unhandled = !1),
      (this.statusMessage = void 0);
  }
  toJSON() {
    const t = { message: this.message, statusCode: this.statusCode };
    return (
      this.statusMessage && (t.statusMessage = this.statusMessage),
      this.data !== void 0 && (t.data = this.data),
      t
    );
  }
}
us.__h3_error__ = !0;
function fs(e) {
  if (typeof e == "string") return new us(e);
  if (qh(e)) return e;
  const t = new us(
    e.message ?? e.statusMessage,
    e.cause ? { cause: e.cause } : void 0
  );
  if ("stack" in e)
    try {
      Object.defineProperty(t, "stack", {
        get() {
          return e.stack;
        },
      });
    } catch {
      try {
        t.stack = e.stack;
      } catch {}
    }
  return (
    e.data && (t.data = e.data),
    e.statusCode
      ? (t.statusCode = e.statusCode)
      : e.status && (t.statusCode = e.status),
    e.statusMessage
      ? (t.statusMessage = e.statusMessage)
      : e.statusText && (t.statusMessage = e.statusText),
    e.fatal !== void 0 && (t.fatal = e.fatal),
    e.unhandled !== void 0 && (t.unhandled = e.unhandled),
    t
  );
}
function qh(e) {
  var t;
  return (
    ((t = e == null ? void 0 : e.constructor) == null
      ? void 0
      : t.__h3_error__) === !0
  );
}
const vr = () => xs(ge().payload, "error"),
  Mt = (e) => {
    const t = nr(e);
    try {
      ge().callHook("app:error", t);
      const r = vr();
      r.value = r.value || t;
    } catch {
      throw t;
    }
    return t;
  },
  zh = async (e = {}) => {
    const t = ge(),
      n = vr();
    t.callHook("app:error:cleared", e),
      e.redirect && (await t.$router.replace(e.redirect)),
      (n.value = null);
  },
  Jh = (e) => !!(e && typeof e == "object" && "__nuxt_error" in e),
  nr = (e) => {
    const t = fs(e);
    return (t.__nuxt_error = !0), t;
  };
function Qh(...e) {
  const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
  typeof e[0] != "string" && e.unshift(t);
  const [n, r] = e;
  if (!n || typeof n != "string")
    throw new TypeError("[nuxt] [useState] key must be a string: " + n);
  if (r !== void 0 && typeof r != "function")
    throw new Error("[nuxt] [useState] init must be a function: " + r);
  const s = "$s" + n,
    o = ge(),
    i = xs(o.payload.state, s);
  if (i.value === void 0 && r) {
    const a = r();
    if (ye(a)) return (o.payload.state[s] = a), a;
    i.value = a;
  }
  return i;
}
const br = () => {
    var e;
    return (e = ge()) == null ? void 0 : e.$router;
  },
  Er = () => (it() ? $e("_route", ge()._route) : ge()._route),
  Xh = (e) => e,
  Gh = () => {
    try {
      if (ge()._processingMiddleware) return !0;
    } catch {
      return !0;
    }
    return !1;
  },
  Hm = (e, t) => {
    e || (e = "/");
    const n = typeof e == "string" ? e : e.path || "/",
      r = gr(n, !0);
    if (r && !(t != null && t.external))
      throw new Error(
        "Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`."
      );
    if (r && Ks(n).protocol === "script:")
      throw new Error("Cannot navigate to an URL with script protocol.");
    if (!r && Gh()) return e;
    const s = br();
    return r
      ? (t != null && t.replace ? location.replace(n) : (location.href = n),
        Promise.resolve())
      : t != null && t.replace
      ? s.replace(e)
      : s.push(e);
  },
  ai = [
    {
      name: "slug",
      path: "/:slug(.*)*",
      children: [],
      meta: {},
      alias: [],
      redirect: void 0,
      component: () =>
        B(
          () => import("./_...slug_.5656d688.js"),
          [
            "./_...slug_.5656d688.js",
            "./query.67962173.js",
            "./utils.925ea3fb.js",
            "./urlTools.cc793b8f.js",
            "./nuxt-link.3942cc84.js",
            "./PageArticle.e2ec2851.js",
            "./PageArticle.vue.2e06c360.js",
            "./PageArticle.a907c3df.css",
            "./AppImage.4fc7032c.js",
            "./AppImage.vue.1420cc05.js",
            "./client-only.9fc77d65.js",
            "./SearchInput.aed2bd52.js",
            "./SearchInput.vue.52b1c04f.js",
            "./SearchInput.23ae4a1f.css",
            "./ContentRenderer.19b4e186.js",
            "./ContentRendererMarkdown.1eb3b2ad.js",
            "./index.a6ef77ff.js",
            "./index.681eb04d.js",
            "./_...slug_.f948e162.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "djurfakta-slug",
      path: "/djurfakta/:slug",
      children: [],
      meta: {},
      alias: [],
      redirect: void 0,
      component: () =>
        B(
          () => import("./_slug_.2c9875b1.js"),
          [
            "./_slug_.2c9875b1.js",
            "./query.67962173.js",
            "./utils.925ea3fb.js",
            "./urlTools.cc793b8f.js",
            "./SourceListItem.vue.8a479e9e.js",
            "./SourceListItem.c9ca6a57.css",
            "./TransitionExpand.eb1f5d55.js",
            "./TransitionExpand.vue.0dfc1b2d.js",
            "./TransitionExpand.358b7368.css",
            "./nuxt-link.3942cc84.js",
            "./PageArticle.e2ec2851.js",
            "./PageArticle.vue.2e06c360.js",
            "./PageArticle.a907c3df.css",
            "./AppImage.4fc7032c.js",
            "./AppImage.vue.1420cc05.js",
            "./client-only.9fc77d65.js",
            "./SearchInput.aed2bd52.js",
            "./SearchInput.vue.52b1c04f.js",
            "./SearchInput.23ae4a1f.css",
            "./ContentRenderer.19b4e186.js",
            "./ContentRendererMarkdown.1eb3b2ad.js",
            "./index.a6ef77ff.js",
            "./index.681eb04d.js",
            "./_slug_.21e79fec.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "hjalp-djuren-slug",
      path: "/hjalp-djuren/:slug",
      children: [],
      meta: {},
      alias: [],
      redirect: void 0,
      component: () =>
        B(
          () => import("./_slug_.64fbdf00.js"),
          [
            "./_slug_.64fbdf00.js",
            "./query.67962173.js",
            "./utils.925ea3fb.js",
            "./urlTools.cc793b8f.js",
            "./nuxt-link.3942cc84.js",
            "./PageArticle.e2ec2851.js",
            "./PageArticle.vue.2e06c360.js",
            "./PageArticle.a907c3df.css",
            "./AppImage.4fc7032c.js",
            "./AppImage.vue.1420cc05.js",
            "./client-only.9fc77d65.js",
            "./SearchInput.aed2bd52.js",
            "./SearchInput.vue.52b1c04f.js",
            "./SearchInput.23ae4a1f.css",
            "./ContentRenderer.19b4e186.js",
            "./ContentRendererMarkdown.1eb3b2ad.js",
            "./index.a6ef77ff.js",
            "./index.681eb04d.js",
            "./_slug_.8efef906.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "hjalp-djuren",
      path: "/hjalp-djuren",
      children: [],
      meta: {},
      alias: [],
      redirect: void 0,
      component: () =>
        B(
          () => import("./index.d2fcca14.js"),
          [
            "./index.d2fcca14.js",
            "./query.67962173.js",
            "./utils.925ea3fb.js",
            "./urlTools.cc793b8f.js",
            "./PageSearch.843504e2.js",
            "./PageSearch.vue.5a8e761a.js",
            "./PageSearch.80f5a4e7.css",
            "./SearchInput.aed2bd52.js",
            "./SearchInput.vue.52b1c04f.js",
            "./SearchInput.23ae4a1f.css",
            "./AppLink.b4785ee2.js",
            "./AppLink.vue.4b20f2a7.js",
            "./nuxt-link.3942cc84.js",
            "./PageTitle.281ef5de.js",
            "./PageTitle.vue.97aebc27.js",
            "./PageTitle.615a1b33.css",
            "./InfoCard.9ec6d7f2.js",
            "./InfoCard.vue.fb683a85.js",
            "./InfoCard.26090f6a.css",
            "./AppImage.4fc7032c.js",
            "./AppImage.vue.1420cc05.js",
            "./client-only.9fc77d65.js",
            "./index.c585f08b.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "index",
      path: "/",
      children: [],
      meta: {},
      alias: [],
      redirect: void 0,
      component: () =>
        B(
          () => import("./index.3ef44da1.js"),
          [
            "./index.3ef44da1.js",
            "./query.67962173.js",
            "./utils.925ea3fb.js",
            "./urlTools.cc793b8f.js",
            "./PageSearch.843504e2.js",
            "./PageSearch.vue.5a8e761a.js",
            "./PageSearch.80f5a4e7.css",
            "./SearchInput.aed2bd52.js",
            "./SearchInput.vue.52b1c04f.js",
            "./SearchInput.23ae4a1f.css",
            "./AppLink.b4785ee2.js",
            "./AppLink.vue.4b20f2a7.js",
            "./nuxt-link.3942cc84.js",
            "./AnimalSlider.vue.ea597142.js",
            "./swiper-slide.7974b596.js",
            "./swiper-slide.9181dfde.css",
            "./navigation.min.faca0c8c.js",
            "./navigation.079e38c4.css",
            "./AnimalSlider.f6244b5d.css",
            "./AnimalSliderCard.6fedc47f.js",
            "./AnimalSliderCard.vue.50dc6bf2.js",
            "./AnimalSliderCard.7bfa47f6.css",
            "./AppImage.4fc7032c.js",
            "./AppImage.vue.1420cc05.js",
            "./client-only.9fc77d65.js",
            "./LearnMoreBlock.8fe0159c.js",
            "./LearnMoreBlock.vue.46ad24ec.js",
            "./LearnMoreBlock.b08c497b.css",
            "./PageTitle.281ef5de.js",
            "./PageTitle.vue.97aebc27.js",
            "./PageTitle.615a1b33.css",
            "./index.0092c4fe.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "klubbnytt-slug",
      path: "/klubbnytt/:slug",
      children: [],
      meta: {},
      alias: [],
      redirect: void 0,
      component: () =>
        B(
          () => import("./_slug_.bced0467.js"),
          [
            "./_slug_.bced0467.js",
            "./query.67962173.js",
            "./utils.925ea3fb.js",
            "./urlTools.cc793b8f.js",
            "./AppImage.4fc7032c.js",
            "./AppImage.vue.1420cc05.js",
            "./client-only.9fc77d65.js",
            "./nuxt-link.3942cc84.js",
            "./PageArticle.e2ec2851.js",
            "./PageArticle.vue.2e06c360.js",
            "./PageArticle.a907c3df.css",
            "./SearchInput.aed2bd52.js",
            "./SearchInput.vue.52b1c04f.js",
            "./SearchInput.23ae4a1f.css",
            "./ContentRenderer.19b4e186.js",
            "./ContentRendererMarkdown.1eb3b2ad.js",
            "./index.a6ef77ff.js",
            "./index.681eb04d.js",
            "./_slug_.9ddaf15c.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "klubbnytt",
      path: "/klubbnytt",
      children: [],
      meta: {},
      alias: [],
      redirect: void 0,
      component: () =>
        B(
          () => import("./index.4cc9fe6f.js"),
          [
            "./index.4cc9fe6f.js",
            "./query.67962173.js",
            "./utils.925ea3fb.js",
            "./urlTools.cc793b8f.js",
            "./PageSearch.843504e2.js",
            "./PageSearch.vue.5a8e761a.js",
            "./PageSearch.80f5a4e7.css",
            "./SearchInput.aed2bd52.js",
            "./SearchInput.vue.52b1c04f.js",
            "./SearchInput.23ae4a1f.css",
            "./AppLink.b4785ee2.js",
            "./AppLink.vue.4b20f2a7.js",
            "./nuxt-link.3942cc84.js",
            "./PageTitle.281ef5de.js",
            "./PageTitle.vue.97aebc27.js",
            "./PageTitle.615a1b33.css",
            "./InfoCard.9ec6d7f2.js",
            "./InfoCard.vue.fb683a85.js",
            "./InfoCard.26090f6a.css",
            "./AppImage.4fc7032c.js",
            "./AppImage.vue.1420cc05.js",
            "./client-only.9fc77d65.js",
            "./index.cc4a1f82.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "lar-dig-mer-slug",
      path: "/lar-dig-mer/:slug",
      children: [],
      meta: {},
      alias: [],
      redirect: void 0,
      component: () =>
        B(
          () => import("./_slug_.5e6d96f2.js"),
          [
            "./_slug_.5e6d96f2.js",
            "./query.67962173.js",
            "./utils.925ea3fb.js",
            "./urlTools.cc793b8f.js",
            "./nuxt-link.3942cc84.js",
            "./PageArticle.e2ec2851.js",
            "./PageArticle.vue.2e06c360.js",
            "./PageArticle.a907c3df.css",
            "./AppImage.4fc7032c.js",
            "./AppImage.vue.1420cc05.js",
            "./client-only.9fc77d65.js",
            "./SearchInput.aed2bd52.js",
            "./SearchInput.vue.52b1c04f.js",
            "./SearchInput.23ae4a1f.css",
            "./ContentRenderer.19b4e186.js",
            "./ContentRendererMarkdown.1eb3b2ad.js",
            "./index.a6ef77ff.js",
            "./index.681eb04d.js",
            "./_slug_.3a58c10f.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "lar-dig-mer",
      path: "/lar-dig-mer",
      children: [],
      meta: {},
      alias: [],
      redirect: void 0,
      component: () =>
        B(
          () => import("./index.9f819722.js"),
          [
            "./index.9f819722.js",
            "./query.67962173.js",
            "./utils.925ea3fb.js",
            "./urlTools.cc793b8f.js",
            "./PageSearch.843504e2.js",
            "./PageSearch.vue.5a8e761a.js",
            "./PageSearch.80f5a4e7.css",
            "./SearchInput.aed2bd52.js",
            "./SearchInput.vue.52b1c04f.js",
            "./SearchInput.23ae4a1f.css",
            "./AppLink.b4785ee2.js",
            "./AppLink.vue.4b20f2a7.js",
            "./nuxt-link.3942cc84.js",
            "./LearnMoreBlock.8fe0159c.js",
            "./LearnMoreBlock.vue.46ad24ec.js",
            "./LearnMoreBlock.b08c497b.css",
            "./PageTitle.281ef5de.js",
            "./PageTitle.vue.97aebc27.js",
            "./PageTitle.615a1b33.css",
            "./AppImage.4fc7032c.js",
            "./AppImage.vue.1420cc05.js",
            "./client-only.9fc77d65.js",
            "./index.f3ea5306.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "sok",
      path: "/sok",
      children: [],
      meta: {},
      alias: [],
      redirect: void 0,
      component: () =>
        B(
          () => import("./sok.114e9f17.js"),
          [
            "./sok.114e9f17.js",
            "./urlTools.cc793b8f.js",
            "./SearchResults.vue.29261df6.js",
            "./SearchResults.cf85b9d0.css",
            "./TransitionExpand.eb1f5d55.js",
            "./TransitionExpand.vue.0dfc1b2d.js",
            "./TransitionExpand.358b7368.css",
            "./AnimalSliderCard.6fedc47f.js",
            "./AnimalSliderCard.vue.50dc6bf2.js",
            "./AnimalSliderCard.7bfa47f6.css",
            "./AppImage.4fc7032c.js",
            "./AppImage.vue.1420cc05.js",
            "./nuxt-link.3942cc84.js",
            "./client-only.9fc77d65.js",
            "./sok.7c75314c.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "vego-slug",
      path: "/vego/:slug",
      children: [],
      meta: {},
      alias: [],
      redirect: void 0,
      component: () =>
        B(
          () => import("./_slug_.cd447deb.js"),
          [
            "./_slug_.cd447deb.js",
            "./query.67962173.js",
            "./utils.925ea3fb.js",
            "./urlTools.cc793b8f.js",
            "./nuxt-link.3942cc84.js",
            "./PageArticle.e2ec2851.js",
            "./PageArticle.vue.2e06c360.js",
            "./PageArticle.a907c3df.css",
            "./AppImage.4fc7032c.js",
            "./AppImage.vue.1420cc05.js",
            "./client-only.9fc77d65.js",
            "./SearchInput.aed2bd52.js",
            "./SearchInput.vue.52b1c04f.js",
            "./SearchInput.23ae4a1f.css",
            "./ContentRenderer.19b4e186.js",
            "./ContentRendererMarkdown.1eb3b2ad.js",
            "./index.a6ef77ff.js",
            "./index.681eb04d.js",
            "./_slug_.f5deb543.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "vego",
      path: "/vego",
      children: [],
      meta: {},
      alias: [],
      redirect: void 0,
      component: () =>
        B(
          () => import("./index.987be0aa.js"),
          [
            "./index.987be0aa.js",
            "./query.67962173.js",
            "./utils.925ea3fb.js",
            "./urlTools.cc793b8f.js",
            "./PageSearch.843504e2.js",
            "./PageSearch.vue.5a8e761a.js",
            "./PageSearch.80f5a4e7.css",
            "./SearchInput.aed2bd52.js",
            "./SearchInput.vue.52b1c04f.js",
            "./SearchInput.23ae4a1f.css",
            "./AppLink.b4785ee2.js",
            "./AppLink.vue.4b20f2a7.js",
            "./nuxt-link.3942cc84.js",
            "./PageTitle.281ef5de.js",
            "./PageTitle.vue.97aebc27.js",
            "./PageTitle.615a1b33.css",
            "./InfoCard.9ec6d7f2.js",
            "./InfoCard.vue.fb683a85.js",
            "./InfoCard.26090f6a.css",
            "./AppImage.4fc7032c.js",
            "./AppImage.vue.1420cc05.js",
            "./client-only.9fc77d65.js",
            "./tik-tok.bf25f339.js",
            "./index.fd311a57.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "vego-recept-slug",
      path: "/vego/recept/:slug",
      children: [],
      meta: {},
      alias: [],
      redirect: void 0,
      component: () =>
        B(
          () => import("./_slug_.a0443f8f.js"),
          [
            "./_slug_.a0443f8f.js",
            "./query.67962173.js",
            "./utils.925ea3fb.js",
            "./urlTools.cc793b8f.js",
            "./RecipeSlider.vue.37bcc148.js",
            "./swiper-slide.7974b596.js",
            "./swiper-slide.9181dfde.css",
            "./navigation.min.faca0c8c.js",
            "./navigation.079e38c4.css",
            "./RecipeSlider.1de5e8bf.css",
            "./AppImage.4fc7032c.js",
            "./AppImage.vue.1420cc05.js",
            "./client-only.9fc77d65.js",
            "./nuxt-link.3942cc84.js",
            "./PageArticle.e2ec2851.js",
            "./PageArticle.vue.2e06c360.js",
            "./PageArticle.a907c3df.css",
            "./SearchInput.aed2bd52.js",
            "./SearchInput.vue.52b1c04f.js",
            "./SearchInput.23ae4a1f.css",
            "./ContentRenderer.19b4e186.js",
            "./ContentRendererMarkdown.1eb3b2ad.js",
            "./index.a6ef77ff.js",
            "./index.681eb04d.js",
            "./_slug_.7f7602d8.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "vego-recept",
      path: "/vego/recept",
      children: [],
      meta: {},
      alias: [],
      redirect: void 0,
      component: () =>
        B(
          () => import("./index.33e6683f.js"),
          [
            "./index.33e6683f.js",
            "./query.67962173.js",
            "./utils.925ea3fb.js",
            "./urlTools.cc793b8f.js",
            "./PageSearch.843504e2.js",
            "./PageSearch.vue.5a8e761a.js",
            "./PageSearch.80f5a4e7.css",
            "./SearchInput.aed2bd52.js",
            "./SearchInput.vue.52b1c04f.js",
            "./SearchInput.23ae4a1f.css",
            "./AppLink.b4785ee2.js",
            "./AppLink.vue.4b20f2a7.js",
            "./nuxt-link.3942cc84.js",
            "./PageTitle.281ef5de.js",
            "./PageTitle.vue.97aebc27.js",
            "./PageTitle.615a1b33.css",
            "./InfoCard.9ec6d7f2.js",
            "./InfoCard.vue.fb683a85.js",
            "./InfoCard.26090f6a.css",
            "./AppImage.4fc7032c.js",
            "./AppImage.vue.1420cc05.js",
            "./client-only.9fc77d65.js",
            "./tik-tok.bf25f339.js",
            "./index.fe28fcd9.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "vego-tips-parent-slug",
      path: "/vego/tips/:parent/:slug",
      children: [],
      meta: {},
      alias: [],
      redirect: void 0,
      component: () =>
        B(
          () => import("./_slug_.2168f492.js"),
          [
            "./_slug_.2168f492.js",
            "./query.67962173.js",
            "./utils.925ea3fb.js",
            "./urlTools.cc793b8f.js",
            "./nuxt-link.3942cc84.js",
            "./PageArticle.e2ec2851.js",
            "./PageArticle.vue.2e06c360.js",
            "./PageArticle.a907c3df.css",
            "./AppImage.4fc7032c.js",
            "./AppImage.vue.1420cc05.js",
            "./client-only.9fc77d65.js",
            "./SearchInput.aed2bd52.js",
            "./SearchInput.vue.52b1c04f.js",
            "./SearchInput.23ae4a1f.css",
            "./ContentRenderer.19b4e186.js",
            "./ContentRendererMarkdown.1eb3b2ad.js",
            "./index.a6ef77ff.js",
            "./index.681eb04d.js",
            "./_slug_.f240e2fb.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "vego-tips-slug",
      path: "/vego/tips/:slug",
      children: [],
      meta: {},
      alias: [],
      redirect: void 0,
      component: () =>
        B(
          () => import("./_slug_.eba9cf53.js"),
          [
            "./_slug_.eba9cf53.js",
            "./query.67962173.js",
            "./utils.925ea3fb.js",
            "./urlTools.cc793b8f.js",
            "./nuxt-link.3942cc84.js",
            "./PageArticle.e2ec2851.js",
            "./PageArticle.vue.2e06c360.js",
            "./PageArticle.a907c3df.css",
            "./AppImage.4fc7032c.js",
            "./AppImage.vue.1420cc05.js",
            "./client-only.9fc77d65.js",
            "./SearchInput.aed2bd52.js",
            "./SearchInput.vue.52b1c04f.js",
            "./SearchInput.23ae4a1f.css",
            "./ContentRenderer.19b4e186.js",
            "./ContentRendererMarkdown.1eb3b2ad.js",
            "./index.a6ef77ff.js",
            "./index.681eb04d.js",
            "./_slug_.0f621b2b.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "vego-tips",
      path: "/vego/tips",
      children: [],
      meta: {},
      alias: [],
      redirect: void 0,
      component: () =>
        B(
          () => import("./index.ab30e063.js"),
          [
            "./index.ab30e063.js",
            "./query.67962173.js",
            "./utils.925ea3fb.js",
            "./urlTools.cc793b8f.js",
            "./PageSearch.843504e2.js",
            "./PageSearch.vue.5a8e761a.js",
            "./PageSearch.80f5a4e7.css",
            "./SearchInput.aed2bd52.js",
            "./SearchInput.vue.52b1c04f.js",
            "./SearchInput.23ae4a1f.css",
            "./AppLink.b4785ee2.js",
            "./AppLink.vue.4b20f2a7.js",
            "./nuxt-link.3942cc84.js",
            "./PageTitle.281ef5de.js",
            "./PageTitle.vue.97aebc27.js",
            "./PageTitle.615a1b33.css",
            "./InfoCard.9ec6d7f2.js",
            "./InfoCard.vue.fb683a85.js",
            "./InfoCard.26090f6a.css",
            "./AppImage.4fc7032c.js",
            "./AppImage.vue.1420cc05.js",
            "./client-only.9fc77d65.js",
            "./index.550f0ad7.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "vuxen-eller-pedagog-slug",
      path: "/vuxen-eller-pedagog/:slug",
      children: [],
      meta: {},
      alias: [],
      redirect: void 0,
      component: () =>
        B(
          () => import("./_slug_.ef2312f1.js"),
          [
            "./_slug_.ef2312f1.js",
            "./query.67962173.js",
            "./utils.925ea3fb.js",
            "./urlTools.cc793b8f.js",
            "./nuxt-link.3942cc84.js",
            "./PageArticle.e2ec2851.js",
            "./PageArticle.vue.2e06c360.js",
            "./PageArticle.a907c3df.css",
            "./AppImage.4fc7032c.js",
            "./AppImage.vue.1420cc05.js",
            "./client-only.9fc77d65.js",
            "./SearchInput.aed2bd52.js",
            "./SearchInput.vue.52b1c04f.js",
            "./SearchInput.23ae4a1f.css",
            "./ContentRenderer.19b4e186.js",
            "./ContentRendererMarkdown.1eb3b2ad.js",
            "./index.a6ef77ff.js",
            "./index.681eb04d.js",
            "./_slug_.7bd56293.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "vuxen-eller-pedagog",
      path: "/vuxen-eller-pedagog",
      children: [],
      meta: {},
      alias: [],
      redirect: void 0,
      component: () =>
        B(
          () => import("./index.24cd2c20.js"),
          [
            "./index.24cd2c20.js",
            "./query.67962173.js",
            "./utils.925ea3fb.js",
            "./urlTools.cc793b8f.js",
            "./PageSearch.843504e2.js",
            "./PageSearch.vue.5a8e761a.js",
            "./PageSearch.80f5a4e7.css",
            "./SearchInput.aed2bd52.js",
            "./SearchInput.vue.52b1c04f.js",
            "./SearchInput.23ae4a1f.css",
            "./AppLink.b4785ee2.js",
            "./AppLink.vue.4b20f2a7.js",
            "./nuxt-link.3942cc84.js",
            "./PageTitle.281ef5de.js",
            "./PageTitle.vue.97aebc27.js",
            "./PageTitle.615a1b33.css",
            "./InfoCard.9ec6d7f2.js",
            "./InfoCard.vue.fb683a85.js",
            "./InfoCard.26090f6a.css",
            "./AppImage.4fc7032c.js",
            "./AppImage.vue.1420cc05.js",
            "./client-only.9fc77d65.js",
            "./index.3e846fe4.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
  ],
  Yh = {
    scrollBehavior(e, t, n) {
      const r = ge();
      let s = n || void 0;
      if (
        (!s &&
          t &&
          e &&
          e.meta.scrollToTop !== !1 &&
          Zh(t, e) &&
          (s = { left: 0, top: 0 }),
        e.path === t.path)
      ) {
        if (t.hash && !e.hash) return { left: 0, top: 0 };
        if (e.hash) return { el: e.hash, top: li(e.hash) };
      }
      const o = (a) => !!(a.meta.pageTransition ?? os),
        i = o(t) && o(e) ? "page:transition:finish" : "page:finish";
      return new Promise((a) => {
        r.hooks.hookOnce(i, async () => {
          await on(), e.hash && (s = { el: e.hash, top: li(e.hash) }), a(s);
        });
      });
    },
  };
function li(e) {
  try {
    const t = document.querySelector(e);
    if (t) return parseFloat(getComputedStyle(t).scrollMarginTop);
  } catch {}
  return 0;
}
function Zh(e, t) {
  const n = e.matched[0] === t.matched[0];
  return !!(!n || (n && JSON.stringify(e.params) !== JSON.stringify(t.params)));
}
const ep = {},
  Ze = { ...ep, ...Yh },
  tp = Xh(async (e) => {
    var l;
    let t, n;
    if (!((l = e.meta) != null && l.validate)) return;
    const r = ge(),
      s = br();
    if (
      (([t, n] = qt(() => Promise.resolve(e.meta.validate(e)))),
      (t = await t),
      n(),
      t) === !0
    )
      return;
    const i = nr({
        statusCode: 404,
        statusMessage: `Page Not Found: ${e.fullPath}`,
      }),
      a = s.beforeResolve((c) => {
        if ((a(), c === e)) {
          const u = s.afterEach(async () => {
            u(),
              await tt(r, Mt, [i]),
              window.history.pushState({}, "", e.fullPath);
          });
          return !1;
        }
      });
  }),
  np = [tp],
  bn = {};
function rp(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    o = e.indexOf("#");
  if (o > -1) {
    const a = s.includes(e.slice(o)) ? e.slice(o).length : 1;
    let l = s.slice(a);
    return l[0] !== "/" && (l = "/" + l), Ho(l, "");
  }
  return Ho(n, e) + r + s;
}
const sp = at(async (e) => {
    var _, v;
    let t,
      n,
      r = _r().app.baseURL;
    Ze.hashMode && !r.includes("#") && (r += "#");
    const s =
        ((_ = Ze.history) == null ? void 0 : _.call(Ze, r)) ??
        (Ze.hashMode ? sh(r) : Qa(r)),
      o = ((v = Ze.routes) == null ? void 0 : v.call(Ze, ai)) ?? ai,
      i = rp(r, window.location),
      a = Bh({ ...Ze, history: s, routes: o });
    e.vueApp.use(a);
    const l = Vr(a.currentRoute.value);
    a.afterEach((E, y) => {
      l.value = y;
    }),
      Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
        get: () => l.value,
      });
    const c = Vr(a.resolve(i)),
      u = () => {
        c.value = a.currentRoute.value;
      };
    e.hook("page:finish", u),
      a.afterEach((E, y) => {
        var h, b, R, T;
        ((b = (h = E.matched[0]) == null ? void 0 : h.components) == null
          ? void 0
          : b.default) ===
          ((T = (R = y.matched[0]) == null ? void 0 : R.components) == null
            ? void 0
            : T.default) && u();
      });
    const f = {};
    for (const E in c.value) f[E] = Te(() => c.value[E]);
    (e._route = qe(f)),
      (e._middleware = e._middleware || { global: [], named: {} });
    const p = vr();
    try {
      ([t, n] = qt(() => a.isReady())), await t, n();
    } catch (E) {
      ([t, n] = qt(() => tt(e, Mt, [E]))), await t, n();
    }
    const g = Qh("_layout");
    return (
      a.beforeEach(async (E, y) => {
        var b;
        (E.meta = qe(E.meta)),
          e.isHydrating &&
            g.value &&
            !$t(E.meta.layout) &&
            (E.meta.layout = g.value),
          (e._processingMiddleware = !0);
        const h = new Set([...np, ...e._middleware.global]);
        for (const R of E.matched) {
          const T = R.meta.middleware;
          if (T)
            if (Array.isArray(T)) for (const x of T) h.add(x);
            else h.add(T);
        }
        for (const R of h) {
          const T =
            typeof R == "string"
              ? e._middleware.named[R] ||
                (await ((b = bn[R]) == null
                  ? void 0
                  : b.call(bn).then((j) => j.default || j)))
              : R;
          if (!T) throw new Error(`Unknown route middleware: '${R}'.`);
          const x = await tt(e, T, [E, y]);
          if (
            !e.payload.serverRendered &&
            e.isHydrating &&
            (x === !1 || x instanceof Error)
          ) {
            const j =
              x ||
              fs({ statusCode: 404, statusMessage: `Page Not Found: ${i}` });
            return await tt(e, Mt, [j]), !1;
          }
          if (x || x === !1) return x;
        }
      }),
      a.afterEach(async (E) => {
        delete e._processingMiddleware,
          !e.isHydrating && p.value && (await tt(e, zh)),
          E.matched.length === 0 &&
            (await tt(e, Mt, [
              fs({
                statusCode: 404,
                fatal: !1,
                statusMessage: `Page not found: ${E.fullPath}`,
              }),
            ]));
      }),
      e.hooks.hookOnce("app:created", async () => {
        try {
          await a.replace({ ...a.resolve(i), name: void 0, force: !0 });
        } catch (E) {
          await tt(e, Mt, [E]);
        }
      }),
      { provide: { router: a } }
    );
  }),
  Nt = {
    default: () =>
      B(
        () => import("./default.d14b0a19.js"),
        [
          "./default.d14b0a19.js",
          "./nuxt-link.3942cc84.js",
          "./MobileMenu.vue.8fc46b84.js",
          "./query.67962173.js",
          "./utils.925ea3fb.js",
          "./swiper-slide.7974b596.js",
          "./swiper-slide.9181dfde.css",
          "./MobileMenu.c9da7a89.css",
          "./AppLink.b4785ee2.js",
          "./AppLink.vue.4b20f2a7.js",
          "./client-only.9fc77d65.js",
          "./ContentRenderer.19b4e186.js",
          "./ContentRendererMarkdown.1eb3b2ad.js",
          "./index.a6ef77ff.js",
          "./index.681eb04d.js",
          "./SearchInput.aed2bd52.js",
          "./SearchInput.vue.52b1c04f.js",
          "./SearchInput.23ae4a1f.css",
        ],
        import.meta.url
      ).then((e) => e.default || e),
  },
  op = at(() => {
    const e = ge(),
      t = br();
    e.hooks.hook("app:mounted", () => {
      t.beforeEach(async (n) => {
        var s;
        const r = (s = n == null ? void 0 : n.meta) == null ? void 0 : s.layout;
        r && typeof Nt[r] == "function" && (await Nt[r]());
      });
    }),
      e.hooks.hook("link:prefetch", (n) => {
        var i, a, l, c;
        if (gr(n)) return;
        const r = t.resolve(n);
        if (!r) return;
        const s = (i = r == null ? void 0 : r.meta) == null ? void 0 : i.layout;
        let o = Array.isArray(
          (a = r == null ? void 0 : r.meta) == null ? void 0 : a.middleware
        )
          ? (l = r == null ? void 0 : r.meta) == null
            ? void 0
            : l.middleware
          : [(c = r == null ? void 0 : r.meta) == null ? void 0 : c.middleware];
        o = o.filter((u) => typeof u == "string");
        for (const u of o) typeof bn[u] == "function" && bn[u]();
        s && typeof Nt[s] == "function" && Nt[s]();
      });
  }),
  ip = () => null;
function ap(...e) {
  var p;
  const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
  typeof e[0] != "string" && e.unshift(t);
  let [n, r, s = {}] = e;
  if (typeof n != "string")
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  if (typeof r != "function")
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  (s.server = s.server ?? !0),
    (s.default = s.default ?? ip),
    (s.lazy = s.lazy ?? !1),
    (s.immediate = s.immediate ?? !0);
  const o = ge(),
    i = () => (o.isHydrating ? o.payload.data[n] : o.static.data[n]),
    a = () => i() !== void 0;
  o._asyncData[n] ||
    (o._asyncData[n] = {
      data: nt(i() ?? ((p = s.default) == null ? void 0 : p.call(s)) ?? null),
      pending: nt(!a()),
      error: nt(o.payload._errors[n] ? nr(o.payload._errors[n]) : null),
    });
  const l = { ...o._asyncData[n] };
  l.refresh = l.execute = (g = {}) => {
    if (o._asyncDataPromises[n]) {
      if (g.dedupe === !1) return o._asyncDataPromises[n];
      o._asyncDataPromises[n].cancelled = !0;
    }
    if (g._initial && a()) return i();
    l.pending.value = !0;
    const _ = new Promise((v, E) => {
      try {
        v(r(o));
      } catch (y) {
        E(y);
      }
    })
      .then((v) => {
        if (_.cancelled) return o._asyncDataPromises[n];
        s.transform && (v = s.transform(v)),
          s.pick && (v = lp(v, s.pick)),
          (l.data.value = v),
          (l.error.value = null);
      })
      .catch((v) => {
        var E;
        if (_.cancelled) return o._asyncDataPromises[n];
        (l.error.value = v),
          (l.data.value = ve(
            ((E = s.default) == null ? void 0 : E.call(s)) ?? null
          ));
      })
      .finally(() => {
        _.cancelled ||
          ((l.pending.value = !1),
          (o.payload.data[n] = l.data.value),
          l.error.value && (o.payload._errors[n] = nr(l.error.value)),
          delete o._asyncDataPromises[n]);
      });
    return (o._asyncDataPromises[n] = _), o._asyncDataPromises[n];
  };
  const c = () => l.refresh({ _initial: !0 }),
    u = s.server !== !1 && o.payload.serverRendered;
  {
    const g = it();
    if (g && !g._nuxtOnBeforeMountCbs) {
      g._nuxtOnBeforeMountCbs = [];
      const v = g._nuxtOnBeforeMountCbs;
      g &&
        (sa(() => {
          v.forEach((E) => {
            E();
          }),
            v.splice(0, v.length);
        }),
        Qn(() => v.splice(0, v.length)));
    }
    u && o.isHydrating && a()
      ? (l.pending.value = !1)
      : g &&
        ((o.payload.serverRendered && o.isHydrating) || s.lazy) &&
        s.immediate
      ? g._nuxtOnBeforeMountCbs.push(c)
      : s.immediate && c(),
      s.watch && xt(s.watch, () => l.refresh());
    const _ = o.hook("app:data:refresh", (v) => {
      if (!v || v.includes(n)) return l.refresh();
    });
    g && Qn(_);
  }
  const f = Promise.resolve(o._asyncDataPromises[n]).then(() => l);
  return Object.assign(f, l), f;
}
async function Dm(e) {
  const t = e ? (Array.isArray(e) ? e : [e]) : void 0;
  await ge().hooks.callHookParallel("app:data:refresh", t);
}
function lp(e, t) {
  const n = {};
  for (const r of t) n[r] = e[r];
  return n;
}
function il(e, t) {
  return ge()._useHead(e, t);
}
const ci = "__nuxt_component";
async function cp(e, t) {
  const n = ge(),
    r = Er(),
    s = it(),
    { fetchKey: o } = s.proxy.$options,
    i = typeof o == "function" ? o(() => "") : o || r.fullPath,
    { data: a } = await ap(`options:asyncdata:${i}`, () => t(n));
  a.value &&
    typeof a.value == "object" &&
    Object.assign(await e, ic(qe(a.value)));
}
const up = function (t) {
  const { setup: n } = t;
  return !n && !t.asyncData && !t.head
    ? { [ci]: !0, ...t }
    : {
        [ci]: !0,
        ...t,
        setup(r, s) {
          const o = (n == null ? void 0 : n(r, s)) || {},
            i = [];
          if ((t.asyncData && i.push(cp(o, t.asyncData)), t.head)) {
            const a = ge();
            il(typeof t.head == "function" ? () => t.head(a) : t.head);
          }
          return Promise.resolve(o)
            .then(() => Promise.all(i))
            .then(() => o)
            .finally(() => {
              i.length = 0;
            });
        },
      };
};
function ui(e, t = {}) {
  const n = fp(e, t),
    r = ge(),
    s = (r._payloadCache = r._payloadCache || {});
  return s[e] || (s[e] = dp(n).then((o) => o || (delete s[e], null))), s[e];
}
function fp(e, t = {}) {
  const n = new URL(e, "http://localhost");
  if (n.search)
    throw new Error("Payload URL cannot contain search params: " + e);
  if (n.host !== "localhost" || gr(n.pathname, !0))
    throw new Error("Payload URL must not include hostname: " + e);
  const r = t.hash || (t.fresh ? Date.now() : "");
  return Us(
    _r().app.baseURL,
    n.pathname,
    r ? `_payload.${r}.js` : "_payload.js"
  );
}
async function dp(e) {
  const t = await B(() => import(e), [], import.meta.url).catch((n) => {
    console.warn("[nuxt] Cannot load payload ", e, n);
  });
  return (t == null ? void 0 : t.default) || null;
}
function hp() {
  return !!ge().payload.prerenderedAt;
}
const pp = {};
Wh(pp);
function fi(e = { serializable: !0 }) {
  let t = {};
  return {
    get(n, r, s = { miss: () => Promise.resolve() }) {
      const o = JSON.stringify(n);
      if (o in t)
        return Promise.resolve(e.serializable ? JSON.parse(t[o]) : t[o]);
      const i = r(),
        a = (s && s.miss) || (() => Promise.resolve());
      return i.then((l) => a(l)).then(() => i);
    },
    set(n, r) {
      return (
        (t[JSON.stringify(n)] = e.serializable ? JSON.stringify(r) : r),
        Promise.resolve(r)
      );
    },
    delete(n) {
      return delete t[JSON.stringify(n)], Promise.resolve();
    },
    clear() {
      return (t = {}), Promise.resolve();
    },
  };
}
const mp = at(async (e) => {
    let t, n;
    const {
        applicationId: r,
        apiKey: s,
        lite: o,
        recommend: i,
        cache: a,
      } = _r().algolia,
      l = o
        ? (([t, n] = qt(() =>
            B(
              () => import("./algoliasearch-lite.esm.browser.2deff41c.js"),
              [],
              import.meta.url
            ).then((u) => u.default || u)
          )),
          (t = await t),
          n(),
          t)
        : (([t, n] = qt(() =>
            B(
              () => import("./algoliasearch.esm.browser.0569db5d.js"),
              [],
              import.meta.url
            ).then((u) => u.default || u)
          )),
          (t = await t),
          n(),
          t),
      c = a
        ? l(r, s, {
            responsesCache: fi(),
            requestsCache: fi({ serializable: !1 }),
          })
        : l(r, s);
    if ((e.provide("algolia", c), i)) {
      const u =
        (([t, n] = qt(() =>
          B(
            () => import("./recommend.esm.browser.3200230f.js"),
            [],
            import.meta.url
          ).then((f) => f.default || f)
        )),
        (t = await t),
        n(),
        t);
      e.provide("algoliaRecommend", u(r, s));
    }
  }),
  gp = at(() => {
    _r().public.content.wsUrl &&
      B(() => import("./web-socket.04975aa5.js"), [], import.meta.url).then(
        ({ useContentWebSocket: t }) => t()
      );
  });
function Fr(e) {
  return e !== null && typeof e == "object";
}
function ds(e, t, n = ".", r) {
  if (!Fr(t)) return ds(e, {}, n, r);
  const s = Object.assign({}, t);
  for (const o in e) {
    if (o === "__proto__" || o === "constructor") continue;
    const i = e[o];
    i != null &&
      ((r && r(s, o, i, n)) ||
        (Array.isArray(i) && Array.isArray(s[o])
          ? (s[o] = [...i, ...s[o]])
          : Fr(i) && Fr(s[o])
          ? (s[o] = ds(i, s[o], (n ? `${n}.` : "") + o.toString(), r))
          : (s[o] = i)));
  }
  return s;
}
function _p(e) {
  return (...t) => t.reduce((n, r) => ds(n, r, "", e), {});
}
const Qs = _p(),
  yp = /#/g,
  vp = /&/g,
  bp = /\//g,
  Ep = /\?/g,
  wp = /\+/g,
  Rp = /%5b/gi,
  Pp = /%5d/gi,
  Cp = /%7c/gi,
  Tp = /%252f/gi;
function Ap(e) {
  return encodeURI("" + e)
    .replace(Cp, "|")
    .replace(Rp, "[")
    .replace(Pp, "]");
}
function Xs(e) {
  return Ap(e)
    .replace(yp, "%23")
    .replace(Ep, "%3F")
    .replace(Tp, "%2F")
    .replace(vp, "%26")
    .replace(wp, "%2B");
}
function di(e) {
  return Xs(e).replace(bp, "%2F");
}
const Op = /^\w{2,}:(\/\/)?/,
  kp = /^\/\/[^/]+/;
function rr(e, t = !1) {
  return Op.test(e) || (t && kp.test(e));
}
const xp = /\/$|\/\?/;
function hs(e = "", t = !1) {
  return t ? xp.test(e) : e.endsWith("/");
}
function Ip(e = "", t = !1) {
  if (!t) return (hs(e) ? e.slice(0, -1) : e) || "/";
  if (!hs(e, !0)) return e || "/";
  const [n, ...r] = e.split("?");
  return (n.slice(0, -1) || "/") + (r.length > 0 ? `?${r.join("?")}` : "");
}
function Sp(e = "", t = !1) {
  if (!t) return e.endsWith("/") ? e : e + "/";
  if (hs(e, !0)) return e || "/";
  const [n, ...r] = e.split("?");
  return n + "/" + (r.length > 0 ? `?${r.join("?")}` : "");
}
function al(e = "") {
  return e.startsWith("/");
}
function $p(e = "") {
  return (al(e) ? e.slice(1) : e) || "/";
}
function Lp(e = "") {
  return al(e) ? e : "/" + e;
}
function Mm(e, t) {
  if (jp(t) || rr(e)) return e;
  const n = Ip(t);
  return e.startsWith(n) ? e : en(n, e);
}
function jp(e) {
  return !e || e === "/";
}
function Hp(e) {
  return e && e !== "/";
}
function en(e, ...t) {
  let n = e || "";
  for (const r of t.filter((s) => Hp(s))) n = n ? Sp(n) + $p(r) : r;
  return n;
}
function ll(e = "", t) {
  if (!rr(e, !0)) return t ? ll(t + e) : hi(e);
  const [n = "", r, s = ""] = (
      e.replace(/\\/g, "/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/) || []
    ).splice(1),
    [o = "", i = ""] = (s.match(/([^#/?]*)(.*)?/) || []).splice(1),
    { pathname: a, search: l, hash: c } = hi(i.replace(/\/(?=[A-Za-z]:)/, ""));
  return {
    protocol: n,
    auth: r ? r.slice(0, Math.max(0, r.length - 1)) : "",
    host: o,
    pathname: a,
    search: l,
    hash: c,
  };
}
function hi(e = "") {
  const [t = "", n = "", r = ""] = (
    e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []
  ).splice(1);
  return { pathname: t, search: n, hash: r };
}
async function Dp(e, t) {
  return await Mp(t).catch(
    (r) => (
      console.error("Failed to get image meta for " + t, r + ""),
      { width: 0, height: 0, ratio: 0 }
    )
  );
}
async function Mp(e) {
  if (typeof Image > "u") throw new TypeError("Image not supported");
  return new Promise((t, n) => {
    const r = new Image();
    (r.onload = () => {
      const s = { width: r.width, height: r.height, ratio: r.width / r.height };
      t(s);
    }),
      (r.onerror = (s) => n(s)),
      (r.src = e);
  });
}
function pi(e) {
  return (t) => (t ? e[t] || t : e.missingValue);
}
function cl({ formatter: e, keyMap: t, joinWith: n = "/", valueMap: r } = {}) {
  e || (e = (o, i) => `${o}=${i}`), t && typeof t != "function" && (t = pi(t));
  const s = r || {};
  return (
    Object.keys(s).forEach((o) => {
      typeof s[o] != "function" && (s[o] = pi(s[o]));
    }),
    (o = {}) =>
      Object.entries(o)
        .filter(([a, l]) => typeof l < "u")
        .map(([a, l]) => {
          const c = s[a];
          return (
            typeof c == "function" && (l = c(o[a])),
            (a = typeof t == "function" ? t(a) : a),
            e(a, l)
          );
        })
        .join(n)
  );
}
function sr(e = "") {
  if (typeof e == "number") return e;
  if (typeof e == "string" && e.replace("px", "").match(/^\d+$/g))
    return parseInt(e, 10);
}
function Np(e) {
  const t = { options: e },
    n = (s, o = {}) => ul(t, s, o),
    r = (s, o = {}, i = {}) =>
      n(s, { ...i, modifiers: Qs(o, i.modifiers || {}) }).url;
  for (const s in e.presets)
    r[s] = (o, i, a) => r(o, i, { ...e.presets[s], ...a });
  return (
    (r.options = e),
    (r.getImage = n),
    (r.getMeta = (s, o) => Fp(t, s, o)),
    (r.getSizes = (s, o) => Kp(t, s, o)),
    (t.$img = r),
    r
  );
}
async function Fp(e, t, n) {
  const r = ul(e, t, { ...n });
  return typeof r.getMeta == "function"
    ? await r.getMeta()
    : await Dp(e, r.url);
}
function ul(e, t, n) {
  var c, u;
  if (typeof t != "string" || t === "")
    throw new TypeError(
      `input must be a string (received ${typeof t}: ${JSON.stringify(t)})`
    );
  if (t.startsWith("data:")) return { url: t };
  const { provider: r, defaults: s } = Bp(e, n.provider || e.options.provider),
    o = Up(e, n.preset);
  if (((t = rr(t) ? t : Lp(t)), !r.supportsAlias))
    for (const f in e.options.alias)
      t.startsWith(f) && (t = en(e.options.alias[f], t.substr(f.length)));
  if (r.validateDomains && rr(t)) {
    const f = ll(t).host;
    if (!e.options.domains.find((p) => p === f)) return { url: t };
  }
  const i = Qs(n, o, s);
  i.modifiers = { ...i.modifiers };
  const a = i.modifiers.format;
  (c = i.modifiers) != null &&
    c.width &&
    (i.modifiers.width = sr(i.modifiers.width)),
    (u = i.modifiers) != null &&
      u.height &&
      (i.modifiers.height = sr(i.modifiers.height));
  const l = r.getImage(t, i, e);
  return (l.format = l.format || a || ""), l;
}
function Bp(e, t) {
  const n = e.options.providers[t];
  if (!n) throw new Error("Unknown provider: " + t);
  return n;
}
function Up(e, t) {
  if (!t) return {};
  if (!e.options.presets[t]) throw new Error("Unknown preset: " + t);
  return e.options.presets[t];
}
function Kp(e, t, n) {
  var c, u;
  const r = sr((c = n.modifiers) == null ? void 0 : c.width),
    s = sr((u = n.modifiers) == null ? void 0 : u.height),
    o = r && s ? s / r : 0,
    i = [],
    a = {};
  if (typeof n.sizes == "string")
    for (const f of n.sizes.split(/[\s,]+/).filter((p) => p)) {
      const p = f.split(":");
      p.length === 2 && (a[p[0].trim()] = p[1].trim());
    }
  else Object.assign(a, n.sizes);
  for (const f in a) {
    const p = (e.options.screens && e.options.screens[f]) || parseInt(f);
    let g = String(a[f]);
    const _ = g.endsWith("vw");
    if ((!_ && /^\d+$/.test(g) && (g = g + "px"), !_ && !g.endsWith("px")))
      continue;
    let v = parseInt(g);
    if (!p || !v) continue;
    _ && (v = Math.round((v / 100) * p));
    const E = o ? Math.round(v * o) : s;
    i.push({
      width: v,
      size: g,
      screenMaxWidth: p,
      media: `(max-width: ${p}px)`,
      src: e.$img(t, { ...n.modifiers, width: v, height: E }, n),
    });
  }
  i.sort((f, p) => f.screenMaxWidth - p.screenMaxWidth);
  const l = i[i.length - 1];
  return (
    l && (l.media = ""),
    {
      sizes: i
        .map((f) => `${f.media ? f.media + " " : ""}${f.size}`)
        .join(", "),
      srcset: i.map((f) => `${f.src} ${f.width}w`).join(", "),
      src: l == null ? void 0 : l.src,
    }
  );
}
const mi = (e) => (e.startsWith("#") ? e.replace("#", "rgb_") : e),
  Vp = (e) => e.replace(/\.[^/.]+$/, ""),
  Wp = cl({
    keyMap: {
      fit: "c",
      width: "w",
      height: "h",
      format: "f",
      quality: "q",
      background: "b",
      rotate: "a",
      roundCorner: "r",
      gravity: "g",
      effect: "e",
      color: "co",
      flags: "fl",
      dpr: "dpr",
      opacity: "o",
      overlay: "l",
      underlay: "u",
      transformation: "t",
      zoom: "z",
      colorSpace: "cs",
      customFunc: "fn",
      density: "dpi",
    },
    valueMap: {
      fit: {
        fill: "fill",
        inside: "pad",
        outside: "lpad",
        cover: "fit",
        contain: "scale",
        minCover: "mfit",
        minInside: "mpad",
        thumbnail: "thumb",
        cropping: "crop",
        coverLimit: "limit",
      },
      format: { jpeg: "jpg" },
      background(e) {
        return mi(e);
      },
      color(e) {
        return mi(e);
      },
      gravity: {
        auto: "auto",
        subject: "auto:subject",
        face: "face",
        sink: "sink",
        faceCenter: "face:center",
        multipleFaces: "faces",
        multipleFacesCenter: "faces:center",
        north: "north",
        northEast: "north_east",
        northWest: "north_west",
        west: "west",
        southWest: "south_west",
        south: "south",
        southEast: "south_east",
        east: "east",
        center: "center",
      },
    },
    joinWith: ",",
    formatter: (e, t) => `${e}_${t}`,
  }),
  qp = { format: "auto", quality: "auto" },
  zp = (e, { modifiers: t = {}, baseURL: n = "/" } = {}) => {
    const r = Qs(t, qp),
      s = Wp(r),
      o = n.match(/\/image\/upload\/(.*)/);
    if ((o == null ? void 0 : o.length) >= 1) {
      const i = o[1],
        a = n.replace(i, "");
      return { url: en(a, s, i, e) };
    } else /\/image\/fetch\/?/.test(n) ? (e = Xs(e)) : (e = Vp(e));
    return { url: en(n, s, e) };
  },
  Jp = Object.freeze(
    Object.defineProperty(
      { __proto__: null, getImage: zp },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Qp = cl({
    keyMap: {
      format: "f",
      fit: "fit",
      width: "w",
      height: "h",
      resize: "s",
      quality: "q",
      background: "b",
    },
    joinWith: ",",
    formatter: (e, t) => di(e) + "_" + di(t),
  }),
  Xp = (e, { modifiers: t = {}, baseURL: n } = {}, r) => {
    t.width &&
      t.height &&
      ((t.resize = `${t.width}x${t.height}`), delete t.width, delete t.height);
    const s = Qp(t) || "_";
    return n || (n = en("/", "/_ipx")), { url: en(n, s, Xs(e)) };
  },
  Gp = !0,
  Yp = !0,
  Zp = Object.freeze(
    Object.defineProperty(
      { __proto__: null, getImage: Xp, supportsAlias: Yp, validateDomains: Gp },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  fl = {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
    presets: {},
    provider: "ipx",
    domains: [],
    alias: {},
  };
fl.providers = {
  cloudinary: {
    provider: Jp,
    defaults: {
      baseURL: "https://res.cloudinary.com/klandestino-ab/image/upload/",
    },
  },
  ipx: { provider: Zp, defaults: {} },
};
const em = at(() => ({ provide: { img: Np(fl) } })),
  tm = at((e) => {
    hp() &&
      (e.hooks.hook("link:prefetch", (t) => {
        if (!Ks(t).protocol) return ui(t);
      }),
      br().beforeResolve(async (t, n) => {
        if (t.path === n.path) return;
        const r = await ui(t.path);
        r && Object.assign(e.static.data, r.data);
      }));
  });
var Nm =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function nm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ps = {},
  rm = {
    get exports() {
      return ps;
    },
    set exports(e) {
      ps = e;
    },
  };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(window, function () {
    return (function (n) {
      var r = {};
      function s(o) {
        if (r[o]) return r[o].exports;
        var i = (r[o] = { i: o, l: !1, exports: {} });
        return n[o].call(i.exports, i, i.exports, s), (i.l = !0), i.exports;
      }
      return (
        (s.m = n),
        (s.c = r),
        (s.d = function (o, i, a) {
          s.o(o, i) || Object.defineProperty(o, i, { enumerable: !0, get: a });
        }),
        (s.r = function (o) {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(o, "__esModule", { value: !0 });
        }),
        (s.t = function (o, i) {
          if (
            (1 & i && (o = s(o)),
            8 & i || (4 & i && typeof o == "object" && o && o.__esModule))
          )
            return o;
          var a = Object.create(null);
          if (
            (s.r(a),
            Object.defineProperty(a, "default", { enumerable: !0, value: o }),
            2 & i && typeof o != "string")
          )
            for (var l in o)
              s.d(
                a,
                l,
                function (c) {
                  return o[c];
                }.bind(null, l)
              );
          return a;
        }),
        (s.n = function (o) {
          var i =
            o && o.__esModule
              ? function () {
                  return o.default;
                }
              : function () {
                  return o;
                };
          return s.d(i, "a", i), i;
        }),
        (s.o = function (o, i) {
          return Object.prototype.hasOwnProperty.call(o, i);
        }),
        (s.p = ""),
        s((s.s = 0))
      );
    })([
      function (n, r, s) {
        function o() {
          return window.Piwik.getAsyncTracker();
        }
        function i(_) {
          var v =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : void 0;
          return new Promise(function (E, y) {
            var h = document.createElement("script");
            (h.async = !0),
              (h.defer = !0),
              (h.src = _),
              v &&
                ["anonymous", "use-credentials"].includes(v) &&
                (h.crossOrigin = v),
              (
                document.head || document.getElementsByTagName("head")[0]
              ).appendChild(h),
              (h.onload = E),
              (h.onerror = y);
          });
        }
        function a(_, v) {
          return _.resolve(v).href;
        }
        s.r(r),
          s.d(r, "matomoKey", function () {
            return c;
          }),
          s.d(r, "default", function () {
            return g;
          });
        var l = {
            debug: !1,
            disableCookies: !1,
            requireCookieConsent: !1,
            enableHeartBeatTimer: !1,
            enableLinkTracking: !0,
            heartBeatTimerInterval: 15,
            requireConsent: !1,
            trackInitialView: !0,
            trackSiteSearch: !1,
            trackerFileName: "matomo",
            trackerUrl: void 0,
            trackerScriptUrl: void 0,
            userId: void 0,
            cookieDomain: void 0,
            domains: void 0,
            preInitActions: [],
            crossOrigin: void 0,
          },
          c = "Matomo";
        function u(_, v, E) {
          if (typeof _.trackSiteSearch == "function") {
            var y = _.trackSiteSearch(v);
            if (y)
              return void (function (h, b) {
                var R = b.keyword,
                  T = b.category,
                  x = b.resultsCount,
                  j = o();
                h.debug && console.debug("[vue-matomo] Site Search " + R),
                  j.trackSiteSearch(R, T, x);
              })(_, y);
          }
          (function (h, b, R) {
            var T,
              x,
              j,
              O = o();
            if (h.router) {
              if (
                ((x = a(h.router, b.fullPath)),
                (j = R && R.fullPath ? a(h.router, R.fullPath) : void 0),
                b.meta.analyticsIgnore)
              )
                return void (
                  h.debug && console.debug("[vue-matomo] Ignoring " + x)
                );
              h.debug && console.debug("[vue-matomo] Tracking " + x),
                (T = b.meta.title || x);
            }
            j && O.setReferrerUrl(window.location.origin + j),
              x && O.setCustomUrl(window.location.origin + x),
              O.trackPageView(T);
          })(_, v, E);
        }
        function f(_, v) {
          var E = o();
          if (
            (Number(_.version.split(".")[0]) > 2
              ? ((_.config.globalProperties.$piwik = E),
                (_.config.globalProperties.$matomo = E),
                _.provide(c, E))
              : ((_.prototype.$piwik = E), (_.prototype.$matomo = E)),
            v.trackInitialView && v.router)
          ) {
            var y = v.router.currentRoute.value
              ? v.router.currentRoute.value
              : v.router.currentRoute;
            u(v, y);
          }
          v.router &&
            v.router.afterEach(function (h, b) {
              u(v, h, b), v.enableLinkTracking && E.enableLinkTracking();
            });
        }
        function p() {
          return new Promise(function (_, v) {
            var E = Date.now(),
              y = setInterval(function () {
                if (window.Piwik) return clearInterval(y), _();
                if (Date.now() >= E + 3e3)
                  throw (
                    (clearInterval(y),
                    new Error(
                      "[vue-matomo]: window.Piwik undefined after waiting for ".concat(
                        3e3,
                        "ms"
                      )
                    ))
                  );
              }, 50);
          });
        }
        function g(_) {
          var v =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            E = Object.assign({}, l, v),
            y = E.host,
            h = E.siteId,
            b = E.trackerFileName,
            R = E.trackerUrl,
            T = E.trackerScriptUrl,
            x = T || "".concat(y, "/").concat(b, ".js"),
            j = R || "".concat(y, "/").concat(b, ".php");
          (window._paq = window._paq || []),
            window._paq.push(["setTrackerUrl", j]),
            window._paq.push(["setSiteId", h]),
            E.requireConsent && window._paq.push(["requireConsent"]),
            E.userId && window._paq.push(["setUserId", E.userId]),
            E.enableLinkTracking && window._paq.push(["enableLinkTracking"]),
            E.disableCookies && window._paq.push(["disableCookies"]),
            E.requireCookieConsent &&
              window._paq.push(["requireCookieConsent"]),
            E.enableHeartBeatTimer &&
              window._paq.push([
                "enableHeartBeatTimer",
                E.heartBeatTimerInterval,
              ]),
            E.cookieDomain &&
              window._paq.push(["setCookieDomain", E.cookieDomain]),
            E.domains && window._paq.push(["setDomains", E.domains]),
            E.preInitActions.forEach(function (O) {
              return window._paq.push(O);
            }),
            i(x, E.crossOrigin)
              .then(function () {
                return p();
              })
              .then(function () {
                return f(_, E);
              })
              .catch(function (O) {
                if (O.target)
                  return console.error(
                    "[vue-matomo] An error occurred trying to load ".concat(
                      O.target.src,
                      ". "
                    ) +
                      "If the file exists you may have an ad- or trackingblocker enabled."
                  );
                console.error(O);
              });
        }
      },
    ]);
  });
})(rm);
const sm = nm(ps),
  om = at((e) => {
    e.vueApp.use(sm, {
      router: e.router,
      requireConsent: !1,
      disableCookies: !0,
      debug: !0,
      host: "https://a.djurensratt.se",
      siteId: 1,
    });
  }),
  im = [sd, Fd, sp, op, mp, gp, em, tm, om],
  am = up({
    setup() {
      const e = Er();
      il({
        link: [
          { rel: "canonical", href: "https://www.raddadjuren.se" + e.path },
        ],
      });
    },
  }),
  lm = (e, t) =>
    t.path
      .replace(/(:\w+)\([^)]+\)/g, "$1")
      .replace(/(:\w+)[?+*]/g, "$1")
      .replace(/:\w+/g, (n) => {
        var r;
        return (
          ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
        );
      }),
  cm = (e, t) => {
    const n = e.route.matched.find((s) => {
        var o;
        return (
          ((o = s.components) == null ? void 0 : o.default) === e.Component.type
        );
      }),
      r = t ?? (n == null ? void 0 : n.meta.key) ?? (n && lm(e.route, n));
    return typeof r == "function" ? r(e.route) : r;
  },
  um = (e, t) => ({ default: () => (e ? We(kc, e === !0 ? {} : e, t) : t) }),
  fm = vt({
    name: "FragmentWrapper",
    setup(e, { slots: t }) {
      return () => {
        var n;
        return (n = t.default) == null ? void 0 : n.call(t);
      };
    },
  }),
  ms = (e, t, n) => ({
    default: () => (t ? We(e, t === !0 ? {} : t, n) : We(fm, {}, n)),
  }),
  dm = vt({
    name: "NuxtPage",
    inheritAttrs: !1,
    props: {
      name: { type: String },
      transition: { type: [Boolean, Object], default: void 0 },
      keepalive: { type: [Boolean, Object], default: void 0 },
      route: { type: Object },
      pageKey: { type: [Function, String], default: null },
    },
    setup(e, { attrs: t }) {
      const n = ge();
      return () =>
        We(
          sl,
          { name: e.name, route: e.route, ...t },
          {
            default: (r) => {
              if (!r.Component) return;
              const s = cm(r, e.pageKey),
                o = n.deferHydration(),
                i = !!(e.transition ?? r.route.meta.pageTransition ?? os),
                a =
                  i &&
                  pm(
                    [
                      e.transition,
                      r.route.meta.pageTransition,
                      os,
                      {
                        onAfterLeave: () => {
                          n.callHook("page:transition:finish", r.Component);
                        },
                      },
                    ].filter(Boolean)
                  );
              return ms(
                mr,
                i && a,
                um(
                  e.keepalive ?? r.route.meta.keepalive ?? Md,
                  We(
                    Qi,
                    {
                      onPending: () => n.callHook("page:start", r.Component),
                      onResolve: () => {
                        on(() =>
                          n.callHook("page:finish", r.Component).finally(o)
                        );
                      },
                    },
                    {
                      default: () =>
                        We(mm, {
                          key: s,
                          routeProps: r,
                          pageKey: s,
                          hasTransition: i,
                        }),
                    }
                  )
                )
              ).default();
            },
          }
        );
    },
  });
function hm(e) {
  return Array.isArray(e) ? e : e ? [e] : [];
}
function pm(e) {
  const t = e.map((n) => ({ ...n, onAfterLeave: hm(n.onAfterLeave) }));
  return Vh(...t);
}
const mm = vt({
    name: "RouteProvider",
    props: ["routeProps", "pageKey", "hasTransition"],
    setup(e) {
      const t = e.pageKey,
        n = e.routeProps.route,
        r = {};
      for (const s in e.routeProps.route)
        r[s] = Te(() => (t === e.pageKey ? e.routeProps.route[s] : n[s]));
      return Wt("_route", qe(r)), () => We(e.routeProps.Component);
    },
  }),
  gm = vt({
    name: "LayoutLoader",
    inheritAttrs: !1,
    props: { name: String },
    async setup(e, t) {
      const n = await Nt[e.name]().then((r) => r.default || r);
      return () => We(n, t.attrs, t.slots);
    },
  }),
  _m = vt({
    name: "NuxtLayout",
    inheritAttrs: !1,
    props: { name: { type: [String, Boolean, Object], default: null } },
    setup(e, t) {
      const n = $e("_route"),
        r = n === Er() ? Kh() : n,
        s = Te(() => ve(e.name) ?? r.meta.layout ?? "default");
      return () => {
        const o = s.value && s.value in Nt,
          i = r.meta.layoutTransition ?? Dd;
        return ms(mr, o && i, {
          default: () =>
            ms(
              gm,
              o && { key: s.value, name: s.value, ...t.attrs },
              t.slots
            ).default(),
        }).default();
      };
    },
  });
function ym(e, t, n, r, s, o) {
  const i = dm,
    a = _m;
  return mt(), Ot(a, null, { default: Ss(() => [pe(i)]), _: 1 });
}
const vm = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, s] of t) n[r] = s;
    return n;
  },
  bm = vm(am, [["render", ym]]),
  gi = {
    __name: "nuxt-root",
    setup(e) {
      const t = ee(() =>
          B(
            () => import("./error-component.b7692b57.js"),
            [
              "./error-component.b7692b57.js",
              "./nuxt-link.3942cc84.js",
              "./SearchInput.aed2bd52.js",
              "./SearchInput.vue.52b1c04f.js",
              "./SearchInput.23ae4a1f.css",
              "./LearnMoreBlock.8fe0159c.js",
              "./LearnMoreBlock.vue.46ad24ec.js",
              "./query.67962173.js",
              "./utils.925ea3fb.js",
              "./LearnMoreBlock.b08c497b.css",
              "./PageTitle.281ef5de.js",
              "./PageTitle.vue.97aebc27.js",
              "./PageTitle.615a1b33.css",
              "./AppImage.4fc7032c.js",
              "./AppImage.vue.1420cc05.js",
              "./client-only.9fc77d65.js",
            ],
            import.meta.url
          ).then((a) => a.default || a)
        ),
        n = () => null,
        r = ge(),
        s = r.deferHydration();
      Wt("_route", Er()),
        r.hooks.callHookWith((a) => a.map((l) => l()), "vue:setup");
      const o = vr();
      ia((a, l, c) => {
        r.hooks
          .callHook("vue:error", a, l, c)
          .catch((u) => console.error("[nuxt] Error in `vue:error` hook", u)),
          Jh(a) && (a.fatal || a.unhandled) && tt(r, Mt, [a]);
      });
      const { islandContext: i } = !1;
      return (a, l) => (
        mt(),
        Ot(
          Qi,
          { onResolve: ve(s) },
          {
            default: Ss(() => [
              ve(o)
                ? (mt(),
                  Ot(ve(t), { key: 0, error: ve(o) }, null, 8, ["error"]))
                : ve(i)
                ? (mt(),
                  Ot(ve(n), { key: 1, context: ve(i) }, null, 8, ["context"]))
                : (mt(), Ot(ve(bm), { key: 2 })),
            ]),
            _: 1,
          },
          8,
          ["onResolve"]
        )
      );
    },
  };
globalThis.$fetch || (globalThis.$fetch = kf.create({ baseURL: Bf() }));
let _i;
const Em = td(im);
(_i = async function () {
  var s;
  const n = Boolean((s = window.__NUXT__) == null ? void 0 : s.serverRendered)
      ? Nu(gi)
      : Mu(gi),
    r = Yf({ vueApp: n });
  try {
    await ed(r, Em);
  } catch (o) {
    await r.callHook("app:error", o), (r.payload.error = r.payload.error || o);
  }
  try {
    await r.hooks.callHook("app:created", n),
      await r.hooks.callHook("app:beforeMount", n),
      n.mount("#" + Nd),
      await r.hooks.callHook("app:mounted", n),
      await on();
  } catch (o) {
    await r.callHook("app:error", o), (r.payload.error = r.payload.error || o);
  }
}),
  _i().catch((e) => {
    console.error("Error while mounting app:", e);
  });
export {
  Bs as $,
  ge as A,
  br as B,
  gr as C,
  nt as D,
  Hs as E,
  dr as F,
  Tm as G,
  Hm as H,
  Lm as I,
  Rm as J,
  Pm as K,
  Sm as L,
  wm as M,
  xe as N,
  Om as O,
  Lp as P,
  en as Q,
  Ip as R,
  ys as S,
  Vu as T,
  Mm as U,
  sr as V,
  tu as W,
  zt as X,
  nm as Y,
  Am as Z,
  _m as _,
  wa as a,
  km as a0,
  oa as a1,
  Wt as a2,
  Ic as a3,
  Dm as a4,
  nr as a5,
  Cm as a6,
  jm as a7,
  mr as a8,
  Nm as a9,
  Im as b,
  Ot as c,
  up as d,
  Ra as e,
  pe as f,
  vm as g,
  xt as h,
  Er as i,
  il as j,
  vt as k,
  $m as l,
  Sp as m,
  on as n,
  mt as o,
  We as p,
  _r as q,
  B as r,
  Te as s,
  ic as t,
  ve as u,
  Qh as v,
  Ss as w,
  ap as x,
  it as y,
  xm as z,
};
