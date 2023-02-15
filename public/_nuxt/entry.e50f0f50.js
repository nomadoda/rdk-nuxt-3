function Vi(e, t) {
  const n = Object.create(null),
    r = e.split(",");
  for (let s = 0; s < r.length; s++) n[r[s]] = !0;
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
function _s(e) {
  if (Z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = Ce(r) ? Nd(r) : _s(r);
      if (s) for (const i in s) t[i] = s[i];
    }
    return t;
  } else {
    if (Ce(e)) return e;
    if (we(e)) return e;
  }
}
const jd = /;(?![^(]*\))/g,
  Dd = /:([^]+)/,
  Bd = /\/\*.*?\*\//gs;
function Nd(e) {
  const t = {};
  return (
    e
      .replace(Bd, "")
      .split(jd)
      .forEach((n) => {
        if (n) {
          const r = n.split(Dd);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function Pn(e) {
  let t = "";
  if (Ce(e)) t = e;
  else if (Z(e))
    for (let n = 0; n < e.length; n++) {
      const r = Pn(e[n]);
      r && (t += r + " ");
    }
  else if (we(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
function BS(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !Ce(t) && (e.class = Pn(t)), n && (e.style = _s(n)), e;
}
const Hd =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Fd = Vi(Hd);
function Ya(e) {
  return !!e || e === "";
}
const Tt = (e) =>
    Ce(e)
      ? e
      : e == null
      ? ""
      : Z(e) || (we(e) && (e.toString === Za || !te(e.toString)))
      ? JSON.stringify(e, Xa, 2)
      : String(e),
  Xa = (e, t) =>
    t && t.__v_isRef
      ? Xa(e, t.value)
      : Fn(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, s]) => ((n[`${r} =>`] = s), n),
            {}
          ),
        }
      : Ja(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : we(t) && !Z(t) && !ec(t)
      ? String(t)
      : t,
  be = {},
  Hn = [],
  xt = () => {},
  zd = () => !1,
  Ud = /^on[^a-z]/,
  Ir = (e) => Ud.test(e),
  qi = (e) => e.startsWith("onUpdate:"),
  je = Object.assign,
  Wi = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Vd = Object.prototype.hasOwnProperty,
  ae = (e, t) => Vd.call(e, t),
  Z = Array.isArray,
  Fn = (e) => ws(e) === "[object Map]",
  Ja = (e) => ws(e) === "[object Set]",
  te = (e) => typeof e == "function",
  Ce = (e) => typeof e == "string",
  Ki = (e) => typeof e == "symbol",
  we = (e) => e !== null && typeof e == "object",
  Qa = (e) => we(e) && te(e.then) && te(e.catch),
  Za = Object.prototype.toString,
  ws = (e) => Za.call(e),
  qd = (e) => ws(e).slice(8, -1),
  ec = (e) => ws(e) === "[object Object]",
  Gi = (e) =>
    Ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  yr = Vi(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Ss = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Wd = /-(\w)/g,
  Bt = Ss((e) => e.replace(Wd, (t, n) => (n ? n.toUpperCase() : ""))),
  Kd = /\B([A-Z])/g,
  tr = Ss((e) => e.replace(Kd, "-$1").toLowerCase()),
  Cs = Ss((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Ns = Ss((e) => (e ? `on${Cs(e)}` : "")),
  xr = (e, t) => !Object.is(e, t),
  vr = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  os = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  Es = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let $o;
const Gd = () =>
  $o ||
  ($o =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
let $t;
class Yd {
  constructor(t = !1) {
    (this.detached = t),
      (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = $t),
      !t && $t && (this.index = ($t.scopes || ($t.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = $t;
      try {
        return ($t = this), t();
      } finally {
        $t = n;
      }
    }
  }
  on() {
    $t = this;
  }
  off() {
    $t = this.parent;
  }
  stop(t) {
    if (this.active) {
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
      (this.parent = void 0), (this.active = !1);
    }
  }
}
function Xd(e, t = $t) {
  t && t.active && t.effects.push(e);
}
const Yi = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  tc = (e) => (e.w & dn) > 0,
  nc = (e) => (e.n & dn) > 0,
  Jd = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= dn;
  },
  Qd = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let r = 0; r < t.length; r++) {
        const s = t[r];
        tc(s) && !nc(s) ? s.delete(e) : (t[n++] = s),
          (s.w &= ~dn),
          (s.n &= ~dn);
      }
      t.length = n;
    }
  },
  pi = new WeakMap();
let hr = 0,
  dn = 1;
const hi = 30;
let kt;
const Tn = Symbol(""),
  mi = Symbol("");
class Xi {
  constructor(t, n = null, r) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      Xd(this, r);
  }
  run() {
    if (!this.active) return this.fn();
    let t = kt,
      n = ln;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = kt),
        (kt = this),
        (ln = !0),
        (dn = 1 << ++hr),
        hr <= hi ? Jd(this) : Lo(this),
        this.fn()
      );
    } finally {
      hr <= hi && Qd(this),
        (dn = 1 << --hr),
        (kt = this.parent),
        (ln = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    kt === this
      ? (this.deferStop = !0)
      : this.active &&
        (Lo(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Lo(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let ln = !0;
const rc = [];
function nr() {
  rc.push(ln), (ln = !1);
}
function rr() {
  const e = rc.pop();
  ln = e === void 0 ? !0 : e;
}
function gt(e, t, n) {
  if (ln && kt) {
    let r = pi.get(e);
    r || pi.set(e, (r = new Map()));
    let s = r.get(n);
    s || r.set(n, (s = Yi())), sc(s);
  }
}
function sc(e, t) {
  let n = !1;
  hr <= hi ? nc(e) || ((e.n |= dn), (n = !tc(e))) : (n = !e.has(kt)),
    n && (e.add(kt), kt.deps.push(e));
}
function Wt(e, t, n, r, s, i) {
  const o = pi.get(e);
  if (!o) return;
  let a = [];
  if (t === "clear") a = [...o.values()];
  else if (n === "length" && Z(e)) {
    const l = Es(r);
    o.forEach((c, u) => {
      (u === "length" || u >= l) && a.push(c);
    });
  } else
    switch ((n !== void 0 && a.push(o.get(n)), t)) {
      case "add":
        Z(e)
          ? Gi(n) && a.push(o.get("length"))
          : (a.push(o.get(Tn)), Fn(e) && a.push(o.get(mi)));
        break;
      case "delete":
        Z(e) || (a.push(o.get(Tn)), Fn(e) && a.push(o.get(mi)));
        break;
      case "set":
        Fn(e) && a.push(o.get(Tn));
        break;
    }
  if (a.length === 1) a[0] && gi(a[0]);
  else {
    const l = [];
    for (const c of a) c && l.push(...c);
    gi(Yi(l));
  }
}
function gi(e, t) {
  const n = Z(e) ? e : [...e];
  for (const r of n) r.computed && Mo(r);
  for (const r of n) r.computed || Mo(r);
}
function Mo(e, t) {
  (e !== kt || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Zd = Vi("__proto__,__v_isRef,__isVue"),
  ic = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Ki)
  ),
  ef = Ji(),
  tf = Ji(!1, !0),
  nf = Ji(!0),
  Io = rf();
function rf() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const r = fe(this);
        for (let i = 0, o = this.length; i < o; i++) gt(r, "get", i + "");
        const s = r[t](...n);
        return s === -1 || s === !1 ? r[t](...n.map(fe)) : s;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        nr();
        const r = fe(this)[t].apply(this, n);
        return rr(), r;
      };
    }),
    e
  );
}
function Ji(e = !1, t = !1) {
  return function (r, s, i) {
    if (s === "__v_isReactive") return !e;
    if (s === "__v_isReadonly") return e;
    if (s === "__v_isShallow") return t;
    if (s === "__v_raw" && i === (e ? (t ? _f : uc) : t ? cc : ac).get(r))
      return r;
    const o = Z(r);
    if (!e && o && ae(Io, s)) return Reflect.get(Io, s, i);
    const a = Reflect.get(r, s, i);
    return (Ki(s) ? ic.has(s) : Zd(s)) || (e || gt(r, "get", s), t)
      ? a
      : Ae(a)
      ? o && Gi(s)
        ? a
        : a.value
      : we(a)
      ? e
        ? dc(a)
        : Pt(a)
      : a;
  };
}
const sf = oc(),
  of = oc(!0);
function oc(e = !1) {
  return function (n, r, s, i) {
    let o = n[r];
    if (Wn(o) && Ae(o) && !Ae(s)) return !1;
    if (
      !e &&
      (!ls(s) && !Wn(s) && ((o = fe(o)), (s = fe(s))), !Z(n) && Ae(o) && !Ae(s))
    )
      return (o.value = s), !0;
    const a = Z(n) && Gi(r) ? Number(r) < n.length : ae(n, r),
      l = Reflect.set(n, r, s, i);
    return (
      n === fe(i) && (a ? xr(s, o) && Wt(n, "set", r, s) : Wt(n, "add", r, s)),
      l
    );
  };
}
function lf(e, t) {
  const n = ae(e, t);
  e[t];
  const r = Reflect.deleteProperty(e, t);
  return r && n && Wt(e, "delete", t, void 0), r;
}
function af(e, t) {
  const n = Reflect.has(e, t);
  return (!Ki(t) || !ic.has(t)) && gt(e, "has", t), n;
}
function cf(e) {
  return gt(e, "iterate", Z(e) ? "length" : Tn), Reflect.ownKeys(e);
}
const lc = { get: ef, set: sf, deleteProperty: lf, has: af, ownKeys: cf },
  uf = {
    get: nf,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  df = je({}, lc, { get: tf, set: of }),
  Qi = (e) => e,
  Ts = (e) => Reflect.getPrototypeOf(e);
function Ur(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const s = fe(e),
    i = fe(t);
  n || (t !== i && gt(s, "get", t), gt(s, "get", i));
  const { has: o } = Ts(s),
    a = r ? Qi : n ? to : Pr;
  if (o.call(s, t)) return a(e.get(t));
  if (o.call(s, i)) return a(e.get(i));
  e !== s && e.get(t);
}
function Vr(e, t = !1) {
  const n = this.__v_raw,
    r = fe(n),
    s = fe(e);
  return (
    t || (e !== s && gt(r, "has", e), gt(r, "has", s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
  );
}
function qr(e, t = !1) {
  return (
    (e = e.__v_raw), !t && gt(fe(e), "iterate", Tn), Reflect.get(e, "size", e)
  );
}
function jo(e) {
  e = fe(e);
  const t = fe(this);
  return Ts(t).has.call(t, e) || (t.add(e), Wt(t, "add", e, e)), this;
}
function Do(e, t) {
  t = fe(t);
  const n = fe(this),
    { has: r, get: s } = Ts(n);
  let i = r.call(n, e);
  i || ((e = fe(e)), (i = r.call(n, e)));
  const o = s.call(n, e);
  return (
    n.set(e, t), i ? xr(t, o) && Wt(n, "set", e, t) : Wt(n, "add", e, t), this
  );
}
function Bo(e) {
  const t = fe(this),
    { has: n, get: r } = Ts(t);
  let s = n.call(t, e);
  s || ((e = fe(e)), (s = n.call(t, e))), r && r.call(t, e);
  const i = t.delete(e);
  return s && Wt(t, "delete", e, void 0), i;
}
function No() {
  const e = fe(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Wt(e, "clear", void 0, void 0), n;
}
function Wr(e, t) {
  return function (r, s) {
    const i = this,
      o = i.__v_raw,
      a = fe(o),
      l = t ? Qi : e ? to : Pr;
    return (
      !e && gt(a, "iterate", Tn), o.forEach((c, u) => r.call(s, l(c), l(u), i))
    );
  };
}
function Kr(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      i = fe(s),
      o = Fn(i),
      a = e === "entries" || (e === Symbol.iterator && o),
      l = e === "keys" && o,
      c = s[e](...r),
      u = n ? Qi : t ? to : Pr;
    return (
      !t && gt(i, "iterate", l ? mi : Tn),
      {
        next() {
          const { value: d, done: f } = c.next();
          return f
            ? { value: d, done: f }
            : { value: a ? [u(d[0]), u(d[1])] : u(d), done: f };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Xt(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function ff() {
  const e = {
      get(i) {
        return Ur(this, i);
      },
      get size() {
        return qr(this);
      },
      has: Vr,
      add: jo,
      set: Do,
      delete: Bo,
      clear: No,
      forEach: Wr(!1, !1),
    },
    t = {
      get(i) {
        return Ur(this, i, !1, !0);
      },
      get size() {
        return qr(this);
      },
      has: Vr,
      add: jo,
      set: Do,
      delete: Bo,
      clear: No,
      forEach: Wr(!1, !0),
    },
    n = {
      get(i) {
        return Ur(this, i, !0);
      },
      get size() {
        return qr(this, !0);
      },
      has(i) {
        return Vr.call(this, i, !0);
      },
      add: Xt("add"),
      set: Xt("set"),
      delete: Xt("delete"),
      clear: Xt("clear"),
      forEach: Wr(!0, !1),
    },
    r = {
      get(i) {
        return Ur(this, i, !0, !0);
      },
      get size() {
        return qr(this, !0);
      },
      has(i) {
        return Vr.call(this, i, !0);
      },
      add: Xt("add"),
      set: Xt("set"),
      delete: Xt("delete"),
      clear: Xt("clear"),
      forEach: Wr(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
      (e[i] = Kr(i, !1, !1)),
        (n[i] = Kr(i, !0, !1)),
        (t[i] = Kr(i, !1, !0)),
        (r[i] = Kr(i, !0, !0));
    }),
    [e, n, t, r]
  );
}
const [pf, hf, mf, gf] = ff();
function Zi(e, t) {
  const n = t ? (e ? gf : mf) : e ? hf : pf;
  return (r, s, i) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
      ? e
      : s === "__v_raw"
      ? r
      : Reflect.get(ae(n, s) && s in r ? n : r, s, i);
}
const yf = { get: Zi(!1, !1) },
  vf = { get: Zi(!1, !0) },
  bf = { get: Zi(!0, !1) },
  ac = new WeakMap(),
  cc = new WeakMap(),
  uc = new WeakMap(),
  _f = new WeakMap();
function wf(e) {
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
function Sf(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : wf(qd(e));
}
function Pt(e) {
  return Wn(e) ? e : eo(e, !1, lc, yf, ac);
}
function Cf(e) {
  return eo(e, !1, df, vf, cc);
}
function dc(e) {
  return eo(e, !0, uf, bf, uc);
}
function eo(e, t, n, r, s) {
  if (!we(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const i = s.get(e);
  if (i) return i;
  const o = Sf(e);
  if (o === 0) return e;
  const a = new Proxy(e, o === 2 ? r : n);
  return s.set(e, a), a;
}
function zn(e) {
  return Wn(e) ? zn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Wn(e) {
  return !!(e && e.__v_isReadonly);
}
function ls(e) {
  return !!(e && e.__v_isShallow);
}
function fc(e) {
  return zn(e) || Wn(e);
}
function fe(e) {
  const t = e && e.__v_raw;
  return t ? fe(t) : e;
}
function pc(e) {
  return os(e, "__v_skip", !0), e;
}
const Pr = (e) => (we(e) ? Pt(e) : e),
  to = (e) => (we(e) ? dc(e) : e);
function hc(e) {
  ln && kt && ((e = fe(e)), sc(e.dep || (e.dep = Yi())));
}
function mc(e, t) {
  (e = fe(e)), e.dep && gi(e.dep);
}
function Ae(e) {
  return !!(e && e.__v_isRef === !0);
}
function ge(e) {
  return gc(e, !1);
}
function yi(e) {
  return gc(e, !0);
}
function gc(e, t) {
  return Ae(e) ? e : new Ef(e, t);
}
class Ef {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : fe(t)),
      (this._value = n ? t : Pr(t));
  }
  get value() {
    return hc(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || ls(t) || Wn(t);
    (t = n ? t : fe(t)),
      xr(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Pr(t)), mc(this));
  }
}
function Ve(e) {
  return Ae(e) ? e.value : e;
}
const Tf = {
  get: (e, t, n) => Ve(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return Ae(s) && !Ae(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function yc(e) {
  return zn(e) ? e : new Proxy(e, Tf);
}
function kf(e) {
  const t = Z(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = no(e, n);
  return t;
}
class xf {
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
}
function no(e, t, n) {
  const r = e[t];
  return Ae(r) ? r : new xf(e, t, n);
}
var vc;
class Pf {
  constructor(t, n, r, s) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[vc] = !1),
      (this._dirty = !0),
      (this.effect = new Xi(t, () => {
        this._dirty || ((this._dirty = !0), mc(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = r);
  }
  get value() {
    const t = fe(this);
    return (
      hc(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
vc = "__v_isReadonly";
function Of(e, t, n = !1) {
  let r, s;
  const i = te(e);
  return (
    i ? ((r = e), (s = xt)) : ((r = e.get), (s = e.set)),
    new Pf(r, s, i || !s, n)
  );
}
function an(e, t, n, r) {
  let s;
  try {
    s = r ? e(...r) : e();
  } catch (i) {
    sr(i, t, n);
  }
  return s;
}
function _t(e, t, n, r) {
  if (te(e)) {
    const i = an(e, t, n, r);
    return (
      i &&
        Qa(i) &&
        i.catch((o) => {
          sr(o, t, n);
        }),
      i
    );
  }
  const s = [];
  for (let i = 0; i < e.length; i++) s.push(_t(e[i], t, n, r));
  return s;
}
function sr(e, t, n, r = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const o = t.proxy,
      a = n;
    for (; i; ) {
      const c = i.ec;
      if (c) {
        for (let u = 0; u < c.length; u++) if (c[u](e, o, a) === !1) return;
      }
      i = i.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      an(l, null, 10, [e, o, a]);
      return;
    }
  }
  Af(e, n, s, r);
}
function Af(e, t, n, r = !0) {
  console.error(e);
}
let Or = !1,
  vi = !1;
const Be = [];
let Mt = 0;
const Un = [];
let qt = null,
  wn = 0;
const bc = Promise.resolve();
let ro = null;
function An(e) {
  const t = ro || bc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Rf(e) {
  let t = Mt + 1,
    n = Be.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1;
    Ar(Be[r]) < e ? (t = r + 1) : (n = r);
  }
  return t;
}
function ks(e) {
  (!Be.length || !Be.includes(e, Or && e.allowRecurse ? Mt + 1 : Mt)) &&
    (e.id == null ? Be.push(e) : Be.splice(Rf(e.id), 0, e), _c());
}
function _c() {
  !Or && !vi && ((vi = !0), (ro = bc.then(Sc)));
}
function $f(e) {
  const t = Be.indexOf(e);
  t > Mt && Be.splice(t, 1);
}
function wc(e) {
  Z(e)
    ? Un.push(...e)
    : (!qt || !qt.includes(e, e.allowRecurse ? wn + 1 : wn)) && Un.push(e),
    _c();
}
function Ho(e, t = Or ? Mt + 1 : 0) {
  for (; t < Be.length; t++) {
    const n = Be[t];
    n && n.pre && (Be.splice(t, 1), t--, n());
  }
}
function as(e) {
  if (Un.length) {
    const t = [...new Set(Un)];
    if (((Un.length = 0), qt)) {
      qt.push(...t);
      return;
    }
    for (qt = t, qt.sort((n, r) => Ar(n) - Ar(r)), wn = 0; wn < qt.length; wn++)
      qt[wn]();
    (qt = null), (wn = 0);
  }
}
const Ar = (e) => (e.id == null ? 1 / 0 : e.id),
  Lf = (e, t) => {
    const n = Ar(e) - Ar(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Sc(e) {
  (vi = !1), (Or = !0), Be.sort(Lf);
  const t = xt;
  try {
    for (Mt = 0; Mt < Be.length; Mt++) {
      const n = Be[Mt];
      n && n.active !== !1 && an(n, null, 14);
    }
  } finally {
    (Mt = 0),
      (Be.length = 0),
      as(),
      (Or = !1),
      (ro = null),
      (Be.length || Un.length) && Sc();
  }
}
function Mf(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || be;
  let s = n;
  const i = t.startsWith("update:"),
    o = i && t.slice(7);
  if (o && o in r) {
    const u = `${o === "modelValue" ? "model" : o}Modifiers`,
      { number: d, trim: f } = r[u] || be;
    f && (s = n.map((h) => (Ce(h) ? h.trim() : h))), d && (s = n.map(Es));
  }
  let a,
    l = r[(a = Ns(t))] || r[(a = Ns(Bt(t)))];
  !l && i && (l = r[(a = Ns(tr(t)))]), l && _t(l, e, 6, s);
  const c = r[a + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    (e.emitted[a] = !0), _t(c, e, 6, s);
  }
}
function Cc(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e);
  if (s !== void 0) return s;
  const i = e.emits;
  let o = {},
    a = !1;
  if (!te(e)) {
    const l = (c) => {
      const u = Cc(c, t, !0);
      u && ((a = !0), je(o, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !i && !a
    ? (we(e) && r.set(e, null), null)
    : (Z(i) ? i.forEach((l) => (o[l] = null)) : je(o, i),
      we(e) && r.set(e, o),
      o);
}
function xs(e, t) {
  return !e || !Ir(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      ae(e, t[0].toLowerCase() + t.slice(1)) || ae(e, tr(t)) || ae(e, t));
}
let Ie = null,
  Ps = null;
function cs(e) {
  const t = Ie;
  return (Ie = e), (Ps = (e && e.type.__scopeId) || null), t;
}
function ir(e) {
  Ps = e;
}
function or() {
  Ps = null;
}
function xe(e, t = Ie, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && Jo(-1);
    const i = cs(t);
    let o;
    try {
      o = e(...s);
    } finally {
      cs(i), r._d && Jo(1);
    }
    return o;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function Hs(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    props: i,
    propsOptions: [o],
    slots: a,
    attrs: l,
    emit: c,
    render: u,
    renderCache: d,
    data: f,
    setupState: h,
    ctx: m,
    inheritAttrs: v,
  } = e;
  let b, _;
  const p = cs(e);
  try {
    if (n.shapeFlag & 4) {
      const S = s || r;
      (b = vt(u.call(S, S, d, i, h, f, m))), (_ = l);
    } else {
      const S = t;
      (b = vt(
        S.length > 1 ? S(i, { attrs: l, slots: a, emit: c }) : S(i, null)
      )),
        (_ = t.props ? l : jf(l));
    }
  } catch (S) {
    (wr.length = 0), sr(S, e, 1), (b = W(Fe));
  }
  let g = b;
  if (_ && v !== !1) {
    const S = Object.keys(_),
      { shapeFlag: C } = g;
    S.length && C & 7 && (o && S.some(qi) && (_ = Df(_, o)), (g = Kt(g, _)));
  }
  return (
    n.dirs && ((g = Kt(g)), (g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (g.transition = n.transition),
    (b = g),
    cs(p),
    b
  );
}
function If(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (Gn(r)) {
      if (r.type !== Fe || r.children === "v-if") {
        if (t) return;
        t = r;
      }
    } else return;
  }
  return t;
}
const jf = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Ir(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Df = (e, t) => {
    const n = {};
    for (const r in e) (!qi(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function Bf(e, t, n) {
  const { props: r, children: s, component: i } = e,
    { props: o, children: a, patchFlag: l } = t,
    c = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? Fo(r, o, c) : !!o;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        if (o[f] !== r[f] && !xs(c, f)) return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable)
      ? !0
      : r === o
      ? !1
      : r
      ? o
        ? Fo(r, o, c)
        : !0
      : !!o;
  return !1;
}
function Fo(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (t[i] !== e[i] && !xs(n, i)) return !0;
  }
  return !1;
}
function so({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const Ec = (e) => e.__isSuspense,
  Nf = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, r, s, i, o, a, l, c) {
      e == null ? Hf(t, n, r, s, i, o, a, l, c) : Ff(e, t, n, r, s, o, a, l, c);
    },
    hydrate: zf,
    create: io,
    normalize: Uf,
  },
  Tc = Nf;
function Rr(e, t) {
  const n = e.props && e.props[t];
  te(n) && n();
}
function Hf(e, t, n, r, s, i, o, a, l) {
  const {
      p: c,
      o: { createElement: u },
    } = l,
    d = u("div"),
    f = (e.suspense = io(e, s, r, t, d, n, i, o, a, l));
  c(null, (f.pendingBranch = e.ssContent), d, null, r, f, i, o),
    f.deps > 0
      ? (Rr(e, "onPending"),
        Rr(e, "onFallback"),
        c(null, e.ssFallback, t, n, r, null, i, o),
        Vn(f, e.ssFallback))
      : f.resolve();
}
function Ff(e, t, n, r, s, i, o, a, { p: l, um: c, o: { createElement: u } }) {
  const d = (t.suspense = e.suspense);
  (d.vnode = t), (t.el = e.el);
  const f = t.ssContent,
    h = t.ssFallback,
    { activeBranch: m, pendingBranch: v, isInFallback: b, isHydrating: _ } = d;
  if (v)
    (d.pendingBranch = f),
      It(f, v)
        ? (l(v, f, d.hiddenContainer, null, s, d, i, o, a),
          d.deps <= 0
            ? d.resolve()
            : b && (l(m, h, n, r, s, null, i, o, a), Vn(d, h)))
        : (d.pendingId++,
          _ ? ((d.isHydrating = !1), (d.activeBranch = v)) : c(v, s, d),
          (d.deps = 0),
          (d.effects.length = 0),
          (d.hiddenContainer = u("div")),
          b
            ? (l(null, f, d.hiddenContainer, null, s, d, i, o, a),
              d.deps <= 0
                ? d.resolve()
                : (l(m, h, n, r, s, null, i, o, a), Vn(d, h)))
            : m && It(f, m)
            ? (l(m, f, n, r, s, d, i, o, a), d.resolve(!0))
            : (l(null, f, d.hiddenContainer, null, s, d, i, o, a),
              d.deps <= 0 && d.resolve()));
  else if (m && It(f, m)) l(m, f, n, r, s, d, i, o, a), Vn(d, f);
  else if (
    (Rr(t, "onPending"),
    (d.pendingBranch = f),
    d.pendingId++,
    l(null, f, d.hiddenContainer, null, s, d, i, o, a),
    d.deps <= 0)
  )
    d.resolve();
  else {
    const { timeout: p, pendingId: g } = d;
    p > 0
      ? setTimeout(() => {
          d.pendingId === g && d.fallback(h);
        }, p)
      : p === 0 && d.fallback(h);
  }
}
function io(e, t, n, r, s, i, o, a, l, c, u = !1) {
  const {
      p: d,
      m: f,
      um: h,
      n: m,
      o: { parentNode: v, remove: b },
    } = c,
    _ = Es(e.props && e.props.timeout),
    p = {
      vnode: e,
      parent: t,
      parentComponent: n,
      isSVG: o,
      container: r,
      hiddenContainer: s,
      anchor: i,
      deps: 0,
      pendingId: 0,
      timeout: typeof _ == "number" ? _ : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !0,
      isHydrating: u,
      isUnmounted: !1,
      effects: [],
      resolve(g = !1) {
        const {
          vnode: S,
          activeBranch: C,
          pendingBranch: P,
          pendingId: O,
          effects: E,
          parentComponent: N,
          container: k,
        } = p;
        if (p.isHydrating) p.isHydrating = !1;
        else if (!g) {
          const Y = C && P.transition && P.transition.mode === "out-in";
          Y &&
            (C.transition.afterLeave = () => {
              O === p.pendingId && f(P, k, U, 0);
            });
          let { anchor: U } = p;
          C && ((U = m(C)), h(C, N, p, !0)), Y || f(P, k, U, 0);
        }
        Vn(p, P), (p.pendingBranch = null), (p.isInFallback = !1);
        let M = p.parent,
          $ = !1;
        for (; M; ) {
          if (M.pendingBranch) {
            M.effects.push(...E), ($ = !0);
            break;
          }
          M = M.parent;
        }
        $ || wc(E), (p.effects = []), Rr(S, "onResolve");
      },
      fallback(g) {
        if (!p.pendingBranch) return;
        const {
          vnode: S,
          activeBranch: C,
          parentComponent: P,
          container: O,
          isSVG: E,
        } = p;
        Rr(S, "onFallback");
        const N = m(C),
          k = () => {
            !p.isInFallback || (d(null, g, O, N, P, null, E, a, l), Vn(p, g));
          },
          M = g.transition && g.transition.mode === "out-in";
        M && (C.transition.afterLeave = k),
          (p.isInFallback = !0),
          h(C, P, null, !0),
          M || k();
      },
      move(g, S, C) {
        p.activeBranch && f(p.activeBranch, g, S, C), (p.container = g);
      },
      next() {
        return p.activeBranch && m(p.activeBranch);
      },
      registerDep(g, S) {
        const C = !!p.pendingBranch;
        C && p.deps++;
        const P = g.vnode.el;
        g.asyncDep
          .catch((O) => {
            sr(O, g, 0);
          })
          .then((O) => {
            if (g.isUnmounted || p.isUnmounted || p.pendingId !== g.suspenseId)
              return;
            g.asyncResolved = !0;
            const { vnode: E } = g;
            Ei(g, O, !1), P && (E.el = P);
            const N = !P && g.subTree.el;
            S(g, E, v(P || g.subTree.el), P ? null : m(g.subTree), p, o, l),
              N && b(N),
              so(g, E.el),
              C && --p.deps === 0 && p.resolve();
          });
      },
      unmount(g, S) {
        (p.isUnmounted = !0),
          p.activeBranch && h(p.activeBranch, n, g, S),
          p.pendingBranch && h(p.pendingBranch, n, g, S);
      },
    };
  return p;
}
function zf(e, t, n, r, s, i, o, a, l) {
  const c = (t.suspense = io(
      t,
      r,
      n,
      e.parentNode,
      document.createElement("div"),
      null,
      s,
      i,
      o,
      a,
      !0
    )),
    u = l(e, (c.pendingBranch = t.ssContent), n, c, i, o);
  return c.deps === 0 && c.resolve(), u;
}
function Uf(e) {
  const { shapeFlag: t, children: n } = e,
    r = t & 32;
  (e.ssContent = zo(r ? n.default : n)),
    (e.ssFallback = r ? zo(n.fallback) : W(Fe));
}
function zo(e) {
  let t;
  if (te(e)) {
    const n = Kn && e._c;
    n && ((e._d = !1), ce()), (e = e()), n && ((e._d = !0), (t = bt), Kc());
  }
  return (
    Z(e) && (e = If(e)),
    (e = vt(e)),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)),
    e
  );
}
function kc(e, t) {
  t && t.pendingBranch
    ? Z(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : wc(e);
}
function Vn(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: r } = e,
    s = (n.el = t.el);
  r && r.subTree === n && ((r.vnode.el = s), so(r, s));
}
function cn(e, t) {
  if (Oe) {
    let n = Oe.provides;
    const r = Oe.parent && Oe.parent.provides;
    r === n && (n = Oe.provides = Object.create(r)), (n[e] = t);
  }
}
function wt(e, t, n = !1) {
  const r = Oe || Ie;
  if (r) {
    const s =
      r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && te(t) ? t.call(r.proxy) : t;
  }
}
function Vf(e, t) {
  return oo(e, null, t);
}
const Gr = {};
function jt(e, t, n) {
  return oo(e, t, n);
}
function oo(
  e,
  t,
  { immediate: n, deep: r, flush: s, onTrack: i, onTrigger: o } = be
) {
  const a = Oe;
  let l,
    c = !1,
    u = !1;
  if (
    (Ae(e)
      ? ((l = () => e.value), (c = ls(e)))
      : zn(e)
      ? ((l = () => e), (r = !0))
      : Z(e)
      ? ((u = !0),
        (c = e.some((g) => zn(g) || ls(g))),
        (l = () =>
          e.map((g) => {
            if (Ae(g)) return g.value;
            if (zn(g)) return En(g);
            if (te(g)) return an(g, a, 2);
          })))
      : te(e)
      ? t
        ? (l = () => an(e, a, 2))
        : (l = () => {
            if (!(a && a.isUnmounted)) return d && d(), _t(e, a, 3, [f]);
          })
      : (l = xt),
    t && r)
  ) {
    const g = l;
    l = () => En(g());
  }
  let d,
    f = (g) => {
      d = _.onStop = () => {
        an(g, a, 4);
      };
    },
    h;
  if (Xn)
    if (
      ((f = xt),
      t ? n && _t(t, a, 3, [l(), u ? [] : void 0, f]) : l(),
      s === "sync")
    ) {
      const g = $p();
      h = g.__watcherHandles || (g.__watcherHandles = []);
    } else return xt;
  let m = u ? new Array(e.length).fill(Gr) : Gr;
  const v = () => {
    if (!!_.active)
      if (t) {
        const g = _.run();
        (r || c || (u ? g.some((S, C) => xr(S, m[C])) : xr(g, m))) &&
          (d && d(),
          _t(t, a, 3, [g, m === Gr ? void 0 : u && m[0] === Gr ? [] : m, f]),
          (m = g));
      } else _.run();
  };
  v.allowRecurse = !!t;
  let b;
  s === "sync"
    ? (b = v)
    : s === "post"
    ? (b = () => $e(v, a && a.suspense))
    : ((v.pre = !0), a && (v.id = a.uid), (b = () => ks(v)));
  const _ = new Xi(l, b);
  t
    ? n
      ? v()
      : (m = _.run())
    : s === "post"
    ? $e(_.run.bind(_), a && a.suspense)
    : _.run();
  const p = () => {
    _.stop(), a && a.scope && Wi(a.scope.effects, _);
  };
  return h && h.push(p), p;
}
function qf(e, t, n) {
  const r = this.proxy,
    s = Ce(e) ? (e.includes(".") ? xc(r, e) : () => r[e]) : e.bind(r, r);
  let i;
  te(t) ? (i = t) : ((i = t.handler), (n = t));
  const o = Oe;
  Yn(this);
  const a = oo(s, i.bind(r), n);
  return o ? Yn(o) : xn(), a;
}
function xc(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
function En(e, t) {
  if (!we(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), Ae(e))) En(e.value, t);
  else if (Z(e)) for (let n = 0; n < e.length; n++) En(e[n], t);
  else if (Ja(e) || Fn(e))
    e.forEach((n) => {
      En(n, t);
    });
  else if (ec(e)) for (const n in e) En(e[n], t);
  return e;
}
function Wf() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    fn(() => {
      e.isMounted = !0;
    }),
    Rn(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const yt = [Function, Array],
  Kf = {
    name: "BaseTransition",
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: yt,
      onEnter: yt,
      onAfterEnter: yt,
      onEnterCancelled: yt,
      onBeforeLeave: yt,
      onLeave: yt,
      onAfterLeave: yt,
      onLeaveCancelled: yt,
      onBeforeAppear: yt,
      onAppear: yt,
      onAfterAppear: yt,
      onAppearCancelled: yt,
    },
    setup(e, { slots: t }) {
      const n = Yt(),
        r = Wf();
      let s;
      return () => {
        const i = t.default && Ac(t.default(), !0);
        if (!i || !i.length) return;
        let o = i[0];
        if (i.length > 1) {
          for (const v of i)
            if (v.type !== Fe) {
              o = v;
              break;
            }
        }
        const a = fe(e),
          { mode: l } = a;
        if (r.isLeaving) return Fs(o);
        const c = Uo(o);
        if (!c) return Fs(o);
        const u = bi(c, a, r, n);
        us(c, u);
        const d = n.subTree,
          f = d && Uo(d);
        let h = !1;
        const { getTransitionKey: m } = c.type;
        if (m) {
          const v = m();
          s === void 0 ? (s = v) : v !== s && ((s = v), (h = !0));
        }
        if (f && f.type !== Fe && (!It(c, f) || h)) {
          const v = bi(f, a, r, n);
          if ((us(f, v), l === "out-in"))
            return (
              (r.isLeaving = !0),
              (v.afterLeave = () => {
                (r.isLeaving = !1), n.update.active !== !1 && n.update();
              }),
              Fs(o)
            );
          l === "in-out" &&
            c.type !== Fe &&
            (v.delayLeave = (b, _, p) => {
              const g = Oc(r, f);
              (g[String(f.key)] = f),
                (b._leaveCb = () => {
                  _(), (b._leaveCb = void 0), delete u.delayedLeave;
                }),
                (u.delayedLeave = p);
            });
        }
        return o;
      };
    },
  },
  Pc = Kf;
function Oc(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function bi(e, t, n, r) {
  const {
      appear: s,
      mode: i,
      persisted: o = !1,
      onBeforeEnter: a,
      onEnter: l,
      onAfterEnter: c,
      onEnterCancelled: u,
      onBeforeLeave: d,
      onLeave: f,
      onAfterLeave: h,
      onLeaveCancelled: m,
      onBeforeAppear: v,
      onAppear: b,
      onAfterAppear: _,
      onAppearCancelled: p,
    } = t,
    g = String(e.key),
    S = Oc(n, e),
    C = (E, N) => {
      E && _t(E, r, 9, N);
    },
    P = (E, N) => {
      const k = N[1];
      C(E, N),
        Z(E) ? E.every((M) => M.length <= 1) && k() : E.length <= 1 && k();
    },
    O = {
      mode: i,
      persisted: o,
      beforeEnter(E) {
        let N = a;
        if (!n.isMounted)
          if (s) N = v || a;
          else return;
        E._leaveCb && E._leaveCb(!0);
        const k = S[g];
        k && It(e, k) && k.el._leaveCb && k.el._leaveCb(), C(N, [E]);
      },
      enter(E) {
        let N = l,
          k = c,
          M = u;
        if (!n.isMounted)
          if (s) (N = b || l), (k = _ || c), (M = p || u);
          else return;
        let $ = !1;
        const Y = (E._enterCb = (U) => {
          $ ||
            (($ = !0),
            U ? C(M, [E]) : C(k, [E]),
            O.delayedLeave && O.delayedLeave(),
            (E._enterCb = void 0));
        });
        N ? P(N, [E, Y]) : Y();
      },
      leave(E, N) {
        const k = String(e.key);
        if ((E._enterCb && E._enterCb(!0), n.isUnmounting)) return N();
        C(d, [E]);
        let M = !1;
        const $ = (E._leaveCb = (Y) => {
          M ||
            ((M = !0),
            N(),
            Y ? C(m, [E]) : C(h, [E]),
            (E._leaveCb = void 0),
            S[k] === e && delete S[k]);
        });
        (S[k] = e), f ? P(f, [E, $]) : $();
      },
      clone(E) {
        return bi(E, t, n, r);
      },
    };
  return O;
}
function Fs(e) {
  if (jr(e)) return (e = Kt(e)), (e.children = null), e;
}
function Uo(e) {
  return jr(e) ? (e.children ? e.children[0] : void 0) : e;
}
function us(e, t) {
  e.shapeFlag & 6 && e.component
    ? us(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function Ac(e, t = !1, n) {
  let r = [],
    s = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const a = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === Le
      ? (o.patchFlag & 128 && s++, (r = r.concat(Ac(o.children, t, a))))
      : (t || o.type !== Fe) && r.push(a != null ? Kt(o, { key: a }) : o);
  }
  if (s > 1) for (let i = 0; i < r.length; i++) r[i].patchFlag = -2;
  return r;
}
function Ft(e) {
  return te(e) ? { setup: e, name: e.name } : e;
}
const kn = (e) => !!e.type.__asyncLoader;
function oe(e) {
  te(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: r,
    delay: s = 200,
    timeout: i,
    suspensible: o = !0,
    onError: a,
  } = e;
  let l = null,
    c,
    u = 0;
  const d = () => (u++, (l = null), f()),
    f = () => {
      let h;
      return (
        l ||
        (h = l =
          t()
            .catch((m) => {
              if (((m = m instanceof Error ? m : new Error(String(m))), a))
                return new Promise((v, b) => {
                  a(
                    m,
                    () => v(d()),
                    () => b(m),
                    u + 1
                  );
                });
              throw m;
            })
            .then((m) =>
              h !== l && l
                ? l
                : (m &&
                    (m.__esModule || m[Symbol.toStringTag] === "Module") &&
                    (m = m.default),
                  (c = m),
                  m)
            ))
      );
    };
  return Ft({
    name: "AsyncComponentWrapper",
    __asyncLoader: f,
    get __asyncResolved() {
      return c;
    },
    setup() {
      const h = Oe;
      if (c) return () => zs(c, h);
      const m = (p) => {
        (l = null), sr(p, h, 13, !r);
      };
      if ((o && h.suspense) || Xn)
        return f()
          .then((p) => () => zs(p, h))
          .catch((p) => (m(p), () => (r ? W(r, { error: p }) : null)));
      const v = ge(!1),
        b = ge(),
        _ = ge(!!s);
      return (
        s &&
          setTimeout(() => {
            _.value = !1;
          }, s),
        i != null &&
          setTimeout(() => {
            if (!v.value && !b.value) {
              const p = new Error(`Async component timed out after ${i}ms.`);
              m(p), (b.value = p);
            }
          }, i),
        f()
          .then(() => {
            (v.value = !0),
              h.parent && jr(h.parent.vnode) && ks(h.parent.update);
          })
          .catch((p) => {
            m(p), (b.value = p);
          }),
        () => {
          if (v.value && c) return zs(c, h);
          if (b.value && r) return W(r, { error: b.value });
          if (n && !_.value) return W(n);
        }
      );
    },
  });
}
function zs(e, t) {
  const { ref: n, props: r, children: s, ce: i } = t.vnode,
    o = W(e, r, s);
  return (o.ref = n), (o.ce = i), delete t.vnode.ce, o;
}
const jr = (e) => e.type.__isKeepAlive,
  Gf = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(e, { slots: t }) {
      const n = Yt(),
        r = n.ctx;
      if (!r.renderer)
        return () => {
          const p = t.default && t.default();
          return p && p.length === 1 ? p[0] : p;
        };
      const s = new Map(),
        i = new Set();
      let o = null;
      const a = n.suspense,
        {
          renderer: {
            p: l,
            m: c,
            um: u,
            o: { createElement: d },
          },
        } = r,
        f = d("div");
      (r.activate = (p, g, S, C, P) => {
        const O = p.component;
        c(p, g, S, 0, a),
          l(O.vnode, p, g, S, O, a, C, p.slotScopeIds, P),
          $e(() => {
            (O.isDeactivated = !1), O.a && vr(O.a);
            const E = p.props && p.props.onVnodeMounted;
            E && Ue(E, O.parent, p);
          }, a);
      }),
        (r.deactivate = (p) => {
          const g = p.component;
          c(p, f, null, 1, a),
            $e(() => {
              g.da && vr(g.da);
              const S = p.props && p.props.onVnodeUnmounted;
              S && Ue(S, g.parent, p), (g.isDeactivated = !0);
            }, a);
        });
      function h(p) {
        Us(p), u(p, n, a, !0);
      }
      function m(p) {
        s.forEach((g, S) => {
          const C = Ti(g.type);
          C && (!p || !p(C)) && v(S);
        });
      }
      function v(p) {
        const g = s.get(p);
        !o || g.type !== o.type ? h(g) : o && Us(o), s.delete(p), i.delete(p);
      }
      jt(
        () => [e.include, e.exclude],
        ([p, g]) => {
          p && m((S) => mr(p, S)), g && m((S) => !mr(g, S));
        },
        { flush: "post", deep: !0 }
      );
      let b = null;
      const _ = () => {
        b != null && s.set(b, Vs(n.subTree));
      };
      return (
        fn(_),
        As(_),
        Rn(() => {
          s.forEach((p) => {
            const { subTree: g, suspense: S } = n,
              C = Vs(g);
            if (p.type === C.type) {
              Us(C);
              const P = C.component.da;
              P && $e(P, S);
              return;
            }
            h(p);
          });
        }),
        () => {
          if (((b = null), !t.default)) return null;
          const p = t.default(),
            g = p[0];
          if (p.length > 1) return (o = null), p;
          if (!Gn(g) || (!(g.shapeFlag & 4) && !(g.shapeFlag & 128)))
            return (o = null), g;
          let S = Vs(g);
          const C = S.type,
            P = Ti(kn(S) ? S.type.__asyncResolved || {} : C),
            { include: O, exclude: E, max: N } = e;
          if ((O && (!P || !mr(O, P))) || (E && P && mr(E, P)))
            return (o = S), g;
          const k = S.key == null ? C : S.key,
            M = s.get(k);
          return (
            S.el && ((S = Kt(S)), g.shapeFlag & 128 && (g.ssContent = S)),
            (b = k),
            M
              ? ((S.el = M.el),
                (S.component = M.component),
                S.transition && us(S, S.transition),
                (S.shapeFlag |= 512),
                i.delete(k),
                i.add(k))
              : (i.add(k),
                N && i.size > parseInt(N, 10) && v(i.values().next().value)),
            (S.shapeFlag |= 256),
            (o = S),
            Ec(g.type) ? g : S
          );
        }
      );
    },
  },
  Yf = Gf;
function mr(e, t) {
  return Z(e)
    ? e.some((n) => mr(n, t))
    : Ce(e)
    ? e.split(",").includes(t)
    : e.test
    ? e.test(t)
    : !1;
}
function Xf(e, t) {
  Rc(e, "a", t);
}
function Jf(e, t) {
  Rc(e, "da", t);
}
function Rc(e, t, n = Oe) {
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
  if ((Os(t, r, n), n)) {
    let s = n.parent;
    for (; s && s.parent; )
      jr(s.parent.vnode) && Qf(r, t, n, s), (s = s.parent);
  }
}
function Qf(e, t, n, r) {
  const s = Os(t, e, r, !0);
  ds(() => {
    Wi(r[t], s);
  }, n);
}
function Us(e) {
  (e.shapeFlag &= -257), (e.shapeFlag &= -513);
}
function Vs(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Os(e, t, n = Oe, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          if (n.isUnmounted) return;
          nr(), Yn(n);
          const a = _t(t, n, e, o);
          return xn(), rr(), a;
        });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const Gt =
    (e) =>
    (t, n = Oe) =>
      (!Xn || e === "sp") && Os(e, (...r) => t(...r), n),
  $c = Gt("bm"),
  fn = Gt("m"),
  Lc = Gt("bu"),
  As = Gt("u"),
  Rn = Gt("bum"),
  ds = Gt("um"),
  Zf = Gt("sp"),
  ep = Gt("rtg"),
  tp = Gt("rtc");
function Mc(e, t = Oe) {
  Os("ec", e, t);
}
function NS(e, t) {
  const n = Ie;
  if (n === null) return e;
  const r = $s(n) || n.proxy,
    s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, a, l, c = be] = t[i];
    o &&
      (te(o) && (o = { mounted: o, updated: o }),
      o.deep && En(a),
      s.push({
        dir: o,
        instance: r,
        value: a,
        oldValue: void 0,
        arg: l,
        modifiers: c,
      }));
  }
  return e;
}
function Lt(e, t, n, r) {
  const s = e.dirs,
    i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    i && (a.oldValue = i[o].value);
    let l = a.dir[r];
    l && (nr(), _t(l, n, 8, [e.el, a, e, t]), rr());
  }
}
const lo = "components";
function $r(e, t) {
  return jc(lo, e, !0, t) || e;
}
const Ic = Symbol();
function HS(e) {
  return Ce(e) ? jc(lo, e, !1) || e : e || Ic;
}
function jc(e, t, n = !0, r = !1) {
  const s = Ie || Oe;
  if (s) {
    const i = s.type;
    if (e === lo) {
      const a = Ti(i, !1);
      if (a && (a === t || a === Bt(t) || a === Cs(Bt(t)))) return i;
    }
    const o = Vo(s[e] || i[e], t) || Vo(s.appContext[e], t);
    return !o && r ? i : o;
  }
}
function Vo(e, t) {
  return e && (e[t] || e[Bt(t)] || e[Cs(Bt(t))]);
}
function qs(e, t, n, r) {
  let s;
  const i = n && n[r];
  if (Z(e) || Ce(e)) {
    s = new Array(e.length);
    for (let o = 0, a = e.length; o < a; o++)
      s[o] = t(e[o], o, void 0, i && i[o]);
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let o = 0; o < e; o++) s[o] = t(o + 1, o, void 0, i && i[o]);
  } else if (we(e))
    if (e[Symbol.iterator])
      s = Array.from(e, (o, a) => t(o, a, void 0, i && i[a]));
    else {
      const o = Object.keys(e);
      s = new Array(o.length);
      for (let a = 0, l = o.length; a < l; a++) {
        const c = o[a];
        s[a] = t(e[c], c, a, i && i[a]);
      }
    }
  else s = [];
  return n && (n[r] = s), s;
}
function FS(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (Z(r)) for (let s = 0; s < r.length; s++) e[r[s].name] = r[s].fn;
    else
      r &&
        (e[r.name] = r.key
          ? (...s) => {
              const i = r.fn(...s);
              return i && (i.key = r.key), i;
            }
          : r.fn);
  }
  return e;
}
function Sn(e, t, n = {}, r, s) {
  if (Ie.isCE || (Ie.parent && kn(Ie.parent) && Ie.parent.isCE))
    return t !== "default" && (n.name = t), W("slot", n, r && r());
  let i = e[t];
  i && i._c && (i._d = !1), ce();
  const o = i && Dc(i(n)),
    a = un(
      Le,
      { key: n.key || (o && o.key) || `_${t}` },
      o || (r ? r() : []),
      o && e._ === 1 ? 64 : -2
    );
  return (
    !s && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    i && i._c && (i._d = !0),
    a
  );
}
function Dc(e) {
  return e.some((t) =>
    Gn(t) ? !(t.type === Fe || (t.type === Le && !Dc(t.children))) : !0
  )
    ? e
    : null;
}
const _i = (e) => (e ? (Jc(e) ? $s(e) || e.proxy : _i(e.parent)) : null),
  br = je(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => _i(e.parent),
    $root: (e) => _i(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ao(e),
    $forceUpdate: (e) => e.f || (e.f = () => ks(e.update)),
    $nextTick: (e) => e.n || (e.n = An.bind(e.proxy)),
    $watch: (e) => qf.bind(e),
  }),
  Ws = (e, t) => e !== be && !e.__isScriptSetup && ae(e, t),
  np = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: i,
        accessCache: o,
        type: a,
        appContext: l,
      } = e;
      let c;
      if (t[0] !== "$") {
        const h = o[t];
        if (h !== void 0)
          switch (h) {
            case 1:
              return r[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (Ws(r, t)) return (o[t] = 1), r[t];
          if (s !== be && ae(s, t)) return (o[t] = 2), s[t];
          if ((c = e.propsOptions[0]) && ae(c, t)) return (o[t] = 3), i[t];
          if (n !== be && ae(n, t)) return (o[t] = 4), n[t];
          wi && (o[t] = 0);
        }
      }
      const u = br[t];
      let d, f;
      if (u) return t === "$attrs" && gt(e, "get", t), u(e);
      if ((d = a.__cssModules) && (d = d[t])) return d;
      if (n !== be && ae(n, t)) return (o[t] = 4), n[t];
      if (((f = l.config.globalProperties), ae(f, t))) return f[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: i } = e;
      return Ws(s, t)
        ? ((s[t] = n), !0)
        : r !== be && ae(r, t)
        ? ((r[t] = n), !0)
        : ae(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((i[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: s,
          propsOptions: i,
        },
      },
      o
    ) {
      let a;
      return (
        !!n[o] ||
        (e !== be && ae(e, o)) ||
        Ws(t, o) ||
        ((a = i[0]) && ae(a, o)) ||
        ae(r, o) ||
        ae(br, o) ||
        ae(s.config.globalProperties, o)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : ae(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
let wi = !0;
function rp(e) {
  const t = ao(e),
    n = e.proxy,
    r = e.ctx;
  (wi = !1), t.beforeCreate && qo(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: i,
    methods: o,
    watch: a,
    provide: l,
    inject: c,
    created: u,
    beforeMount: d,
    mounted: f,
    beforeUpdate: h,
    updated: m,
    activated: v,
    deactivated: b,
    beforeDestroy: _,
    beforeUnmount: p,
    destroyed: g,
    unmounted: S,
    render: C,
    renderTracked: P,
    renderTriggered: O,
    errorCaptured: E,
    serverPrefetch: N,
    expose: k,
    inheritAttrs: M,
    components: $,
    directives: Y,
    filters: U,
  } = t;
  if ((c && sp(c, r, null, e.appContext.config.unwrapInjectedRef), o))
    for (const he in o) {
      const ue = o[he];
      te(ue) && (r[he] = ue.bind(n));
    }
  if (s) {
    const he = s.call(n, n);
    we(he) && (e.data = Pt(he));
  }
  if (((wi = !0), i))
    for (const he in i) {
      const ue = i[he],
        ze = te(ue) ? ue.bind(n, n) : te(ue.get) ? ue.get.bind(n, n) : xt,
        At = !te(ue) && te(ue.set) ? ue.set.bind(n) : xt,
        We = Me({ get: ze, set: At });
      Object.defineProperty(r, he, {
        enumerable: !0,
        configurable: !0,
        get: () => We.value,
        set: (De) => (We.value = De),
      });
    }
  if (a) for (const he in a) Bc(a[he], r, n, he);
  if (l) {
    const he = te(l) ? l.call(n) : l;
    Reflect.ownKeys(he).forEach((ue) => {
      cn(ue, he[ue]);
    });
  }
  u && qo(u, e, "c");
  function ie(he, ue) {
    Z(ue) ? ue.forEach((ze) => he(ze.bind(n))) : ue && he(ue.bind(n));
  }
  if (
    (ie($c, d),
    ie(fn, f),
    ie(Lc, h),
    ie(As, m),
    ie(Xf, v),
    ie(Jf, b),
    ie(Mc, E),
    ie(tp, P),
    ie(ep, O),
    ie(Rn, p),
    ie(ds, S),
    ie(Zf, N),
    Z(k))
  )
    if (k.length) {
      const he = e.exposed || (e.exposed = {});
      k.forEach((ue) => {
        Object.defineProperty(he, ue, {
          get: () => n[ue],
          set: (ze) => (n[ue] = ze),
        });
      });
    } else e.exposed || (e.exposed = {});
  C && e.render === xt && (e.render = C),
    M != null && (e.inheritAttrs = M),
    $ && (e.components = $),
    Y && (e.directives = Y);
}
function sp(e, t, n = xt, r = !1) {
  Z(e) && (e = Si(e));
  for (const s in e) {
    const i = e[s];
    let o;
    we(i)
      ? "default" in i
        ? (o = wt(i.from || s, i.default, !0))
        : (o = wt(i.from || s))
      : (o = wt(i)),
      Ae(o) && r
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (a) => (o.value = a),
          })
        : (t[s] = o);
  }
}
function qo(e, t, n) {
  _t(Z(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Bc(e, t, n, r) {
  const s = r.includes(".") ? xc(n, r) : () => n[r];
  if (Ce(e)) {
    const i = t[e];
    te(i) && jt(s, i);
  } else if (te(e)) jt(s, e.bind(n));
  else if (we(e))
    if (Z(e)) e.forEach((i) => Bc(i, t, n, r));
    else {
      const i = te(e.handler) ? e.handler.bind(n) : t[e.handler];
      te(i) && jt(s, i, e);
    }
}
function ao(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    a = i.get(t);
  let l;
  return (
    a
      ? (l = a)
      : !s.length && !n && !r
      ? (l = t)
      : ((l = {}), s.length && s.forEach((c) => fs(l, c, o, !0)), fs(l, t, o)),
    we(t) && i.set(t, l),
    l
  );
}
function fs(e, t, n, r = !1) {
  const { mixins: s, extends: i } = t;
  i && fs(e, i, n, !0), s && s.forEach((o) => fs(e, o, n, !0));
  for (const o in t)
    if (!(r && o === "expose")) {
      const a = ip[o] || (n && n[o]);
      e[o] = a ? a(e[o], t[o]) : t[o];
    }
  return e;
}
const ip = {
  data: Wo,
  props: _n,
  emits: _n,
  methods: _n,
  computed: _n,
  beforeCreate: Ne,
  created: Ne,
  beforeMount: Ne,
  mounted: Ne,
  beforeUpdate: Ne,
  updated: Ne,
  beforeDestroy: Ne,
  beforeUnmount: Ne,
  destroyed: Ne,
  unmounted: Ne,
  activated: Ne,
  deactivated: Ne,
  errorCaptured: Ne,
  serverPrefetch: Ne,
  components: _n,
  directives: _n,
  watch: lp,
  provide: Wo,
  inject: op,
};
function Wo(e, t) {
  return t
    ? e
      ? function () {
          return je(
            te(e) ? e.call(this, this) : e,
            te(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function op(e, t) {
  return _n(Si(e), Si(t));
}
function Si(e) {
  if (Z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ne(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function _n(e, t) {
  return e ? je(je(Object.create(null), e), t) : t;
}
function lp(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = je(Object.create(null), e);
  for (const r in t) n[r] = Ne(e[r], t[r]);
  return n;
}
function ap(e, t, n, r = !1) {
  const s = {},
    i = {};
  os(i, Rs, 1), (e.propsDefaults = Object.create(null)), Nc(e, t, s, i);
  for (const o in e.propsOptions[0]) o in s || (s[o] = void 0);
  n ? (e.props = r ? s : Cf(s)) : e.type.props ? (e.props = s) : (e.props = i),
    (e.attrs = i);
}
function cp(e, t, n, r) {
  const {
      props: s,
      attrs: i,
      vnode: { patchFlag: o },
    } = e,
    a = fe(s),
    [l] = e.propsOptions;
  let c = !1;
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let f = u[d];
        if (xs(e.emitsOptions, f)) continue;
        const h = t[f];
        if (l)
          if (ae(i, f)) h !== i[f] && ((i[f] = h), (c = !0));
          else {
            const m = Bt(f);
            s[m] = Ci(l, a, m, h, e, !1);
          }
        else h !== i[f] && ((i[f] = h), (c = !0));
      }
    }
  } else {
    Nc(e, t, s, i) && (c = !0);
    let u;
    for (const d in a)
      (!t || (!ae(t, d) && ((u = tr(d)) === d || !ae(t, u)))) &&
        (l
          ? n &&
            (n[d] !== void 0 || n[u] !== void 0) &&
            (s[d] = Ci(l, a, d, void 0, e, !0))
          : delete s[d]);
    if (i !== a)
      for (const d in i) (!t || (!ae(t, d) && !0)) && (delete i[d], (c = !0));
  }
  c && Wt(e, "set", "$attrs");
}
function Nc(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1,
    a;
  if (t)
    for (let l in t) {
      if (yr(l)) continue;
      const c = t[l];
      let u;
      s && ae(s, (u = Bt(l)))
        ? !i || !i.includes(u)
          ? (n[u] = c)
          : ((a || (a = {}))[u] = c)
        : xs(e.emitsOptions, l) ||
          ((!(l in r) || c !== r[l]) && ((r[l] = c), (o = !0)));
    }
  if (i) {
    const l = fe(n),
      c = a || be;
    for (let u = 0; u < i.length; u++) {
      const d = i[u];
      n[d] = Ci(s, l, d, c[d], e, !ae(c, d));
    }
  }
  return o;
}
function Ci(e, t, n, r, s, i) {
  const o = e[n];
  if (o != null) {
    const a = ae(o, "default");
    if (a && r === void 0) {
      const l = o.default;
      if (o.type !== Function && te(l)) {
        const { propsDefaults: c } = s;
        n in c ? (r = c[n]) : (Yn(s), (r = c[n] = l.call(null, t)), xn());
      } else r = l;
    }
    o[0] &&
      (i && !a ? (r = !1) : o[1] && (r === "" || r === tr(n)) && (r = !0));
  }
  return r;
}
function Hc(e, t, n = !1) {
  const r = t.propsCache,
    s = r.get(e);
  if (s) return s;
  const i = e.props,
    o = {},
    a = [];
  let l = !1;
  if (!te(e)) {
    const u = (d) => {
      l = !0;
      const [f, h] = Hc(d, t, !0);
      je(o, f), h && a.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  if (!i && !l) return we(e) && r.set(e, Hn), Hn;
  if (Z(i))
    for (let u = 0; u < i.length; u++) {
      const d = Bt(i[u]);
      Ko(d) && (o[d] = be);
    }
  else if (i)
    for (const u in i) {
      const d = Bt(u);
      if (Ko(d)) {
        const f = i[u],
          h = (o[d] = Z(f) || te(f) ? { type: f } : Object.assign({}, f));
        if (h) {
          const m = Xo(Boolean, h.type),
            v = Xo(String, h.type);
          (h[0] = m > -1),
            (h[1] = v < 0 || m < v),
            (m > -1 || ae(h, "default")) && a.push(d);
        }
      }
    }
  const c = [o, a];
  return we(e) && r.set(e, c), c;
}
function Ko(e) {
  return e[0] !== "$";
}
function Go(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function Yo(e, t) {
  return Go(e) === Go(t);
}
function Xo(e, t) {
  return Z(t) ? t.findIndex((n) => Yo(n, e)) : te(t) && Yo(t, e) ? 0 : -1;
}
const Fc = (e) => e[0] === "_" || e === "$stable",
  co = (e) => (Z(e) ? e.map(vt) : [vt(e)]),
  up = (e, t, n) => {
    if (t._n) return t;
    const r = xe((...s) => co(t(...s)), n);
    return (r._c = !1), r;
  },
  zc = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (Fc(s)) continue;
      const i = e[s];
      if (te(i)) t[s] = up(s, i, r);
      else if (i != null) {
        const o = co(i);
        t[s] = () => o;
      }
    }
  },
  Uc = (e, t) => {
    const n = co(t);
    e.slots.default = () => n;
  },
  dp = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = fe(t)), os(t, "_", n)) : zc(t, (e.slots = {}));
    } else (e.slots = {}), t && Uc(e, t);
    os(e.slots, Rs, 1);
  },
  fp = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let i = !0,
      o = be;
    if (r.shapeFlag & 32) {
      const a = t._;
      a
        ? n && a === 1
          ? (i = !1)
          : (je(s, t), !n && a === 1 && delete s._)
        : ((i = !t.$stable), zc(t, s)),
        (o = t);
    } else t && (Uc(e, t), (o = { default: 1 }));
    if (i) for (const a in s) !Fc(a) && !(a in o) && delete s[a];
  };
function Vc() {
  return {
    app: null,
    config: {
      isNativeTag: zd,
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
let pp = 0;
function hp(e, t) {
  return function (r, s = null) {
    te(r) || (r = Object.assign({}, r)), s != null && !we(s) && (s = null);
    const i = Vc(),
      o = new Set();
    let a = !1;
    const l = (i.app = {
      _uid: pp++,
      _component: r,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: fo,
      get config() {
        return i.config;
      },
      set config(c) {},
      use(c, ...u) {
        return (
          o.has(c) ||
            (c && te(c.install)
              ? (o.add(c), c.install(l, ...u))
              : te(c) && (o.add(c), c(l, ...u))),
          l
        );
      },
      mixin(c) {
        return i.mixins.includes(c) || i.mixins.push(c), l;
      },
      component(c, u) {
        return u ? ((i.components[c] = u), l) : i.components[c];
      },
      directive(c, u) {
        return u ? ((i.directives[c] = u), l) : i.directives[c];
      },
      mount(c, u, d) {
        if (!a) {
          const f = W(r, s);
          return (
            (f.appContext = i),
            u && t ? t(f, c) : e(f, c, d),
            (a = !0),
            (l._container = c),
            (c.__vue_app__ = l),
            $s(f.component) || f.component.proxy
          );
        }
      },
      unmount() {
        a && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(c, u) {
        return (i.provides[c] = u), l;
      },
    });
    return l;
  };
}
function ps(e, t, n, r, s = !1) {
  if (Z(e)) {
    e.forEach((f, h) => ps(f, t && (Z(t) ? t[h] : t), n, r, s));
    return;
  }
  if (kn(r) && !s) return;
  const i = r.shapeFlag & 4 ? $s(r.component) || r.component.proxy : r.el,
    o = s ? null : i,
    { i: a, r: l } = e,
    c = t && t.r,
    u = a.refs === be ? (a.refs = {}) : a.refs,
    d = a.setupState;
  if (
    (c != null &&
      c !== l &&
      (Ce(c)
        ? ((u[c] = null), ae(d, c) && (d[c] = null))
        : Ae(c) && (c.value = null)),
    te(l))
  )
    an(l, a, 12, [o, u]);
  else {
    const f = Ce(l),
      h = Ae(l);
    if (f || h) {
      const m = () => {
        if (e.f) {
          const v = f ? (ae(d, l) ? d[l] : u[l]) : l.value;
          s
            ? Z(v) && Wi(v, i)
            : Z(v)
            ? v.includes(i) || v.push(i)
            : f
            ? ((u[l] = [i]), ae(d, l) && (d[l] = u[l]))
            : ((l.value = [i]), e.k && (u[e.k] = l.value));
        } else
          f
            ? ((u[l] = o), ae(d, l) && (d[l] = o))
            : h && ((l.value = o), e.k && (u[e.k] = o));
      };
      o ? ((m.id = -1), $e(m, n)) : m();
    }
  }
}
let Jt = !1;
const Yr = (e) => /svg/.test(e.namespaceURI) && e.tagName !== "foreignObject",
  Xr = (e) => e.nodeType === 8;
function mp(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: r,
        createText: s,
        nextSibling: i,
        parentNode: o,
        remove: a,
        insert: l,
        createComment: c,
      },
    } = e,
    u = (_, p) => {
      if (!p.hasChildNodes()) {
        n(null, _, p), as(), (p._vnode = _);
        return;
      }
      (Jt = !1),
        d(p.firstChild, _, null, null, null),
        as(),
        (p._vnode = _),
        Jt && console.error("Hydration completed but contains mismatches.");
    },
    d = (_, p, g, S, C, P = !1) => {
      const O = Xr(_) && _.data === "[",
        E = () => v(_, p, g, S, C, O),
        { type: N, ref: k, shapeFlag: M, patchFlag: $ } = p;
      let Y = _.nodeType;
      (p.el = _), $ === -2 && ((P = !1), (p.dynamicChildren = null));
      let U = null;
      switch (N) {
        case Nt:
          Y !== 3
            ? p.children === ""
              ? (l((p.el = s("")), o(_), _), (U = _))
              : (U = E())
            : (_.data !== p.children && ((Jt = !0), (_.data = p.children)),
              (U = i(_)));
          break;
        case Fe:
          Y !== 8 || O ? (U = E()) : (U = i(_));
          break;
        case _r:
          if ((O && ((_ = i(_)), (Y = _.nodeType)), Y === 1 || Y === 3)) {
            U = _;
            const Pe = !p.children.length;
            for (let ie = 0; ie < p.staticCount; ie++)
              Pe && (p.children += U.nodeType === 1 ? U.outerHTML : U.data),
                ie === p.staticCount - 1 && (p.anchor = U),
                (U = i(U));
            return O ? i(U) : U;
          } else E();
          break;
        case Le:
          O ? (U = m(_, p, g, S, C, P)) : (U = E());
          break;
        default:
          if (M & 1)
            Y !== 1 || p.type.toLowerCase() !== _.tagName.toLowerCase()
              ? (U = E())
              : (U = f(_, p, g, S, C, P));
          else if (M & 6) {
            p.slotScopeIds = C;
            const Pe = o(_);
            if (
              (t(p, Pe, null, g, S, Yr(Pe), P),
              (U = O ? b(_) : i(_)),
              U && Xr(U) && U.data === "teleport end" && (U = i(U)),
              kn(p))
            ) {
              let ie;
              O
                ? ((ie = W(Le)),
                  (ie.anchor = U ? U.previousSibling : Pe.lastChild))
                : (ie = _.nodeType === 3 ? Dt("") : W("div")),
                (ie.el = _),
                (p.component.subTree = ie);
            }
          } else
            M & 64
              ? Y !== 8
                ? (U = E())
                : (U = p.type.hydrate(_, p, g, S, C, P, e, h))
              : M & 128 &&
                (U = p.type.hydrate(_, p, g, S, Yr(o(_)), C, P, e, d));
      }
      return k != null && ps(k, null, S, p), U;
    },
    f = (_, p, g, S, C, P) => {
      P = P || !!p.dynamicChildren;
      const { type: O, props: E, patchFlag: N, shapeFlag: k, dirs: M } = p,
        $ = (O === "input" && M) || O === "option";
      if ($ || N !== -1) {
        if ((M && Lt(p, null, g, "created"), E))
          if ($ || !P || N & 48)
            for (const U in E)
              (($ && U.endsWith("value")) || (Ir(U) && !yr(U))) &&
                r(_, U, null, E[U], !1, void 0, g);
          else E.onClick && r(_, "onClick", null, E.onClick, !1, void 0, g);
        let Y;
        if (
          ((Y = E && E.onVnodeBeforeMount) && Ue(Y, g, p),
          M && Lt(p, null, g, "beforeMount"),
          ((Y = E && E.onVnodeMounted) || M) &&
            kc(() => {
              Y && Ue(Y, g, p), M && Lt(p, null, g, "mounted");
            }, S),
          k & 16 && !(E && (E.innerHTML || E.textContent)))
        ) {
          let U = h(_.firstChild, p, _, g, S, C, P);
          for (; U; ) {
            Jt = !0;
            const Pe = U;
            (U = U.nextSibling), a(Pe);
          }
        } else
          k & 8 &&
            _.textContent !== p.children &&
            ((Jt = !0), (_.textContent = p.children));
      }
      return _.nextSibling;
    },
    h = (_, p, g, S, C, P, O) => {
      O = O || !!p.dynamicChildren;
      const E = p.children,
        N = E.length;
      for (let k = 0; k < N; k++) {
        const M = O ? E[k] : (E[k] = vt(E[k]));
        if (_) _ = d(_, M, S, C, P, O);
        else {
          if (M.type === Nt && !M.children) continue;
          (Jt = !0), n(null, M, g, null, S, C, Yr(g), P);
        }
      }
      return _;
    },
    m = (_, p, g, S, C, P) => {
      const { slotScopeIds: O } = p;
      O && (C = C ? C.concat(O) : O);
      const E = o(_),
        N = h(i(_), p, E, g, S, C, P);
      return N && Xr(N) && N.data === "]"
        ? i((p.anchor = N))
        : ((Jt = !0), l((p.anchor = c("]")), E, N), N);
    },
    v = (_, p, g, S, C, P) => {
      if (((Jt = !0), (p.el = null), P)) {
        const N = b(_);
        for (;;) {
          const k = i(_);
          if (k && k !== N) a(k);
          else break;
        }
      }
      const O = i(_),
        E = o(_);
      return a(_), n(null, p, E, O, g, S, Yr(E), C), O;
    },
    b = (_) => {
      let p = 0;
      for (; _; )
        if (
          ((_ = i(_)), _ && Xr(_) && (_.data === "[" && p++, _.data === "]"))
        ) {
          if (p === 0) return i(_);
          p--;
        }
      return _;
    };
  return [u, d];
}
const $e = kc;
function gp(e) {
  return qc(e);
}
function yp(e) {
  return qc(e, mp);
}
function qc(e, t) {
  const n = Gd();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: s,
      patchProp: i,
      createElement: o,
      createText: a,
      createComment: l,
      setText: c,
      setElementText: u,
      parentNode: d,
      nextSibling: f,
      setScopeId: h = xt,
      insertStaticContent: m,
    } = e,
    v = (
      y,
      w,
      T,
      x = null,
      R = null,
      D = null,
      z = !1,
      j = null,
      H = !!w.dynamicChildren
    ) => {
      if (y === w) return;
      y && !It(y, w) && ((x = F(y)), De(y, R, D, !0), (y = null)),
        w.patchFlag === -2 && ((H = !1), (w.dynamicChildren = null));
      const { type: L, ref: J, shapeFlag: G } = w;
      switch (L) {
        case Nt:
          b(y, w, T, x);
          break;
        case Fe:
          _(y, w, T, x);
          break;
        case _r:
          y == null && p(w, T, x, z);
          break;
        case Le:
          $(y, w, T, x, R, D, z, j, H);
          break;
        default:
          G & 1
            ? C(y, w, T, x, R, D, z, j, H)
            : G & 6
            ? Y(y, w, T, x, R, D, z, j, H)
            : (G & 64 || G & 128) && L.process(y, w, T, x, R, D, z, j, H, le);
      }
      J != null && R && ps(J, y && y.ref, D, w || y, !w);
    },
    b = (y, w, T, x) => {
      if (y == null) r((w.el = a(w.children)), T, x);
      else {
        const R = (w.el = y.el);
        w.children !== y.children && c(R, w.children);
      }
    },
    _ = (y, w, T, x) => {
      y == null ? r((w.el = l(w.children || "")), T, x) : (w.el = y.el);
    },
    p = (y, w, T, x) => {
      [y.el, y.anchor] = m(y.children, w, T, x, y.el, y.anchor);
    },
    g = ({ el: y, anchor: w }, T, x) => {
      let R;
      for (; y && y !== w; ) (R = f(y)), r(y, T, x), (y = R);
      r(w, T, x);
    },
    S = ({ el: y, anchor: w }) => {
      let T;
      for (; y && y !== w; ) (T = f(y)), s(y), (y = T);
      s(w);
    },
    C = (y, w, T, x, R, D, z, j, H) => {
      (z = z || w.type === "svg"),
        y == null ? P(w, T, x, R, D, z, j, H) : N(y, w, R, D, z, j, H);
    },
    P = (y, w, T, x, R, D, z, j) => {
      let H, L;
      const { type: J, props: G, shapeFlag: Q, transition: ee, dirs: se } = y;
      if (
        ((H = y.el = o(y.type, D, G && G.is, G)),
        Q & 8
          ? u(H, y.children)
          : Q & 16 &&
            E(y.children, H, null, x, R, D && J !== "foreignObject", z, j),
        se && Lt(y, null, x, "created"),
        G)
      ) {
        for (const me in G)
          me !== "value" &&
            !yr(me) &&
            i(H, me, null, G[me], D, y.children, x, R, V);
        "value" in G && i(H, "value", null, G.value),
          (L = G.onVnodeBeforeMount) && Ue(L, x, y);
      }
      O(H, y, y.scopeId, z, x), se && Lt(y, null, x, "beforeMount");
      const ye = (!R || (R && !R.pendingBranch)) && ee && !ee.persisted;
      ye && ee.beforeEnter(H),
        r(H, w, T),
        ((L = G && G.onVnodeMounted) || ye || se) &&
          $e(() => {
            L && Ue(L, x, y),
              ye && ee.enter(H),
              se && Lt(y, null, x, "mounted");
          }, R);
    },
    O = (y, w, T, x, R) => {
      if ((T && h(y, T), x)) for (let D = 0; D < x.length; D++) h(y, x[D]);
      if (R) {
        let D = R.subTree;
        if (w === D) {
          const z = R.vnode;
          O(y, z, z.scopeId, z.slotScopeIds, R.parent);
        }
      }
    },
    E = (y, w, T, x, R, D, z, j, H = 0) => {
      for (let L = H; L < y.length; L++) {
        const J = (y[L] = j ? tn(y[L]) : vt(y[L]));
        v(null, J, w, T, x, R, D, z, j);
      }
    },
    N = (y, w, T, x, R, D, z) => {
      const j = (w.el = y.el);
      let { patchFlag: H, dynamicChildren: L, dirs: J } = w;
      H |= y.patchFlag & 16;
      const G = y.props || be,
        Q = w.props || be;
      let ee;
      T && gn(T, !1),
        (ee = Q.onVnodeBeforeUpdate) && Ue(ee, T, w, y),
        J && Lt(w, y, T, "beforeUpdate"),
        T && gn(T, !0);
      const se = R && w.type !== "foreignObject";
      if (
        (L
          ? k(y.dynamicChildren, L, j, T, x, se, D)
          : z || ue(y, w, j, null, T, x, se, D, !1),
        H > 0)
      ) {
        if (H & 16) M(j, w, G, Q, T, x, R);
        else if (
          (H & 2 && G.class !== Q.class && i(j, "class", null, Q.class, R),
          H & 4 && i(j, "style", G.style, Q.style, R),
          H & 8)
        ) {
          const ye = w.dynamicProps;
          for (let me = 0; me < ye.length; me++) {
            const Te = ye[me],
              Et = G[Te],
              Mn = Q[Te];
            (Mn !== Et || Te === "value") &&
              i(j, Te, Et, Mn, R, y.children, T, x, V);
          }
        }
        H & 1 && y.children !== w.children && u(j, w.children);
      } else !z && L == null && M(j, w, G, Q, T, x, R);
      ((ee = Q.onVnodeUpdated) || J) &&
        $e(() => {
          ee && Ue(ee, T, w, y), J && Lt(w, y, T, "updated");
        }, x);
    },
    k = (y, w, T, x, R, D, z) => {
      for (let j = 0; j < w.length; j++) {
        const H = y[j],
          L = w[j],
          J =
            H.el && (H.type === Le || !It(H, L) || H.shapeFlag & 70)
              ? d(H.el)
              : T;
        v(H, L, J, null, x, R, D, z, !0);
      }
    },
    M = (y, w, T, x, R, D, z) => {
      if (T !== x) {
        if (T !== be)
          for (const j in T)
            !yr(j) && !(j in x) && i(y, j, T[j], null, z, w.children, R, D, V);
        for (const j in x) {
          if (yr(j)) continue;
          const H = x[j],
            L = T[j];
          H !== L && j !== "value" && i(y, j, L, H, z, w.children, R, D, V);
        }
        "value" in x && i(y, "value", T.value, x.value);
      }
    },
    $ = (y, w, T, x, R, D, z, j, H) => {
      const L = (w.el = y ? y.el : a("")),
        J = (w.anchor = y ? y.anchor : a(""));
      let { patchFlag: G, dynamicChildren: Q, slotScopeIds: ee } = w;
      ee && (j = j ? j.concat(ee) : ee),
        y == null
          ? (r(L, T, x), r(J, T, x), E(w.children, T, J, R, D, z, j, H))
          : G > 0 && G & 64 && Q && y.dynamicChildren
          ? (k(y.dynamicChildren, Q, T, R, D, z, j),
            (w.key != null || (R && w === R.subTree)) && Wc(y, w, !0))
          : ue(y, w, T, J, R, D, z, j, H);
    },
    Y = (y, w, T, x, R, D, z, j, H) => {
      (w.slotScopeIds = j),
        y == null
          ? w.shapeFlag & 512
            ? R.ctx.activate(w, T, x, z, H)
            : U(w, T, x, R, D, z, H)
          : Pe(y, w, H);
    },
    U = (y, w, T, x, R, D, z) => {
      const j = (y.component = Ep(y, x, R));
      if ((jr(y) && (j.ctx.renderer = le), Tp(j), j.asyncDep)) {
        if ((R && R.registerDep(j, ie), !y.el)) {
          const H = (j.subTree = W(Fe));
          _(null, H, w, T);
        }
        return;
      }
      ie(j, y, w, T, R, D, z);
    },
    Pe = (y, w, T) => {
      const x = (w.component = y.component);
      if (Bf(y, w, T))
        if (x.asyncDep && !x.asyncResolved) {
          he(x, w, T);
          return;
        } else (x.next = w), $f(x.update), x.update();
      else (w.el = y.el), (x.vnode = w);
    },
    ie = (y, w, T, x, R, D, z) => {
      const j = () => {
          if (y.isMounted) {
            let { next: J, bu: G, u: Q, parent: ee, vnode: se } = y,
              ye = J,
              me;
            gn(y, !1),
              J ? ((J.el = se.el), he(y, J, z)) : (J = se),
              G && vr(G),
              (me = J.props && J.props.onVnodeBeforeUpdate) &&
                Ue(me, ee, J, se),
              gn(y, !0);
            const Te = Hs(y),
              Et = y.subTree;
            (y.subTree = Te),
              v(Et, Te, d(Et.el), F(Et), y, R, D),
              (J.el = Te.el),
              ye === null && so(y, Te.el),
              Q && $e(Q, R),
              (me = J.props && J.props.onVnodeUpdated) &&
                $e(() => Ue(me, ee, J, se), R);
          } else {
            let J;
            const { el: G, props: Q } = w,
              { bm: ee, m: se, parent: ye } = y,
              me = kn(w);
            if (
              (gn(y, !1),
              ee && vr(ee),
              !me && (J = Q && Q.onVnodeBeforeMount) && Ue(J, ye, w),
              gn(y, !0),
              G && re)
            ) {
              const Te = () => {
                (y.subTree = Hs(y)), re(G, y.subTree, y, R, null);
              };
              me
                ? w.type.__asyncLoader().then(() => !y.isUnmounted && Te())
                : Te();
            } else {
              const Te = (y.subTree = Hs(y));
              v(null, Te, T, x, y, R, D), (w.el = Te.el);
            }
            if ((se && $e(se, R), !me && (J = Q && Q.onVnodeMounted))) {
              const Te = w;
              $e(() => Ue(J, ye, Te), R);
            }
            (w.shapeFlag & 256 ||
              (ye && kn(ye.vnode) && ye.vnode.shapeFlag & 256)) &&
              y.a &&
              $e(y.a, R),
              (y.isMounted = !0),
              (w = T = x = null);
          }
        },
        H = (y.effect = new Xi(j, () => ks(L), y.scope)),
        L = (y.update = () => H.run());
      (L.id = y.uid), gn(y, !0), L();
    },
    he = (y, w, T) => {
      w.component = y;
      const x = y.vnode.props;
      (y.vnode = w),
        (y.next = null),
        cp(y, w.props, x, T),
        fp(y, w.children, T),
        nr(),
        Ho(),
        rr();
    },
    ue = (y, w, T, x, R, D, z, j, H = !1) => {
      const L = y && y.children,
        J = y ? y.shapeFlag : 0,
        G = w.children,
        { patchFlag: Q, shapeFlag: ee } = w;
      if (Q > 0) {
        if (Q & 128) {
          At(L, G, T, x, R, D, z, j, H);
          return;
        } else if (Q & 256) {
          ze(L, G, T, x, R, D, z, j, H);
          return;
        }
      }
      ee & 8
        ? (J & 16 && V(L, R, D), G !== L && u(T, G))
        : J & 16
        ? ee & 16
          ? At(L, G, T, x, R, D, z, j, H)
          : V(L, R, D, !0)
        : (J & 8 && u(T, ""), ee & 16 && E(G, T, x, R, D, z, j, H));
    },
    ze = (y, w, T, x, R, D, z, j, H) => {
      (y = y || Hn), (w = w || Hn);
      const L = y.length,
        J = w.length,
        G = Math.min(L, J);
      let Q;
      for (Q = 0; Q < G; Q++) {
        const ee = (w[Q] = H ? tn(w[Q]) : vt(w[Q]));
        v(y[Q], ee, T, null, R, D, z, j, H);
      }
      L > J ? V(y, R, D, !0, !1, G) : E(w, T, x, R, D, z, j, H, G);
    },
    At = (y, w, T, x, R, D, z, j, H) => {
      let L = 0;
      const J = w.length;
      let G = y.length - 1,
        Q = J - 1;
      for (; L <= G && L <= Q; ) {
        const ee = y[L],
          se = (w[L] = H ? tn(w[L]) : vt(w[L]));
        if (It(ee, se)) v(ee, se, T, null, R, D, z, j, H);
        else break;
        L++;
      }
      for (; L <= G && L <= Q; ) {
        const ee = y[G],
          se = (w[Q] = H ? tn(w[Q]) : vt(w[Q]));
        if (It(ee, se)) v(ee, se, T, null, R, D, z, j, H);
        else break;
        G--, Q--;
      }
      if (L > G) {
        if (L <= Q) {
          const ee = Q + 1,
            se = ee < J ? w[ee].el : x;
          for (; L <= Q; )
            v(null, (w[L] = H ? tn(w[L]) : vt(w[L])), T, se, R, D, z, j, H),
              L++;
        }
      } else if (L > Q) for (; L <= G; ) De(y[L], R, D, !0), L++;
      else {
        const ee = L,
          se = L,
          ye = new Map();
        for (L = se; L <= Q; L++) {
          const Ke = (w[L] = H ? tn(w[L]) : vt(w[L]));
          Ke.key != null && ye.set(Ke.key, L);
        }
        let me,
          Te = 0;
        const Et = Q - se + 1;
        let Mn = !1,
          Oo = 0;
        const ur = new Array(Et);
        for (L = 0; L < Et; L++) ur[L] = 0;
        for (L = ee; L <= G; L++) {
          const Ke = y[L];
          if (Te >= Et) {
            De(Ke, R, D, !0);
            continue;
          }
          let Rt;
          if (Ke.key != null) Rt = ye.get(Ke.key);
          else
            for (me = se; me <= Q; me++)
              if (ur[me - se] === 0 && It(Ke, w[me])) {
                Rt = me;
                break;
              }
          Rt === void 0
            ? De(Ke, R, D, !0)
            : ((ur[Rt - se] = L + 1),
              Rt >= Oo ? (Oo = Rt) : (Mn = !0),
              v(Ke, w[Rt], T, null, R, D, z, j, H),
              Te++);
        }
        const Ao = Mn ? vp(ur) : Hn;
        for (me = Ao.length - 1, L = Et - 1; L >= 0; L--) {
          const Ke = se + L,
            Rt = w[Ke],
            Ro = Ke + 1 < J ? w[Ke + 1].el : x;
          ur[L] === 0
            ? v(null, Rt, T, Ro, R, D, z, j, H)
            : Mn && (me < 0 || L !== Ao[me] ? We(Rt, T, Ro, 2) : me--);
        }
      }
    },
    We = (y, w, T, x, R = null) => {
      const { el: D, type: z, transition: j, children: H, shapeFlag: L } = y;
      if (L & 6) {
        We(y.component.subTree, w, T, x);
        return;
      }
      if (L & 128) {
        y.suspense.move(w, T, x);
        return;
      }
      if (L & 64) {
        z.move(y, w, T, le);
        return;
      }
      if (z === Le) {
        r(D, w, T);
        for (let G = 0; G < H.length; G++) We(H[G], w, T, x);
        r(y.anchor, w, T);
        return;
      }
      if (z === _r) {
        g(y, w, T);
        return;
      }
      if (x !== 2 && L & 1 && j)
        if (x === 0) j.beforeEnter(D), r(D, w, T), $e(() => j.enter(D), R);
        else {
          const { leave: G, delayLeave: Q, afterLeave: ee } = j,
            se = () => r(D, w, T),
            ye = () => {
              G(D, () => {
                se(), ee && ee();
              });
            };
          Q ? Q(D, se, ye) : ye();
        }
      else r(D, w, T);
    },
    De = (y, w, T, x = !1, R = !1) => {
      const {
        type: D,
        props: z,
        ref: j,
        children: H,
        dynamicChildren: L,
        shapeFlag: J,
        patchFlag: G,
        dirs: Q,
      } = y;
      if ((j != null && ps(j, null, T, y, !0), J & 256)) {
        w.ctx.deactivate(y);
        return;
      }
      const ee = J & 1 && Q,
        se = !kn(y);
      let ye;
      if ((se && (ye = z && z.onVnodeBeforeUnmount) && Ue(ye, w, y), J & 6))
        A(y.component, T, x);
      else {
        if (J & 128) {
          y.suspense.unmount(T, x);
          return;
        }
        ee && Lt(y, null, w, "beforeUnmount"),
          J & 64
            ? y.type.remove(y, w, T, R, le, x)
            : L && (D !== Le || (G > 0 && G & 64))
            ? V(L, w, T, !1, !0)
            : ((D === Le && G & 384) || (!R && J & 16)) && V(H, w, T),
          x && Ln(y);
      }
      ((se && (ye = z && z.onVnodeUnmounted)) || ee) &&
        $e(() => {
          ye && Ue(ye, w, y), ee && Lt(y, null, w, "unmounted");
        }, T);
    },
    Ln = (y) => {
      const { type: w, el: T, anchor: x, transition: R } = y;
      if (w === Le) {
        zr(T, x);
        return;
      }
      if (w === _r) {
        S(y);
        return;
      }
      const D = () => {
        s(T), R && !R.persisted && R.afterLeave && R.afterLeave();
      };
      if (y.shapeFlag & 1 && R && !R.persisted) {
        const { leave: z, delayLeave: j } = R,
          H = () => z(T, D);
        j ? j(y.el, D, H) : H();
      } else D();
    },
    zr = (y, w) => {
      let T;
      for (; y !== w; ) (T = f(y)), s(y), (y = T);
      s(w);
    },
    A = (y, w, T) => {
      const { bum: x, scope: R, update: D, subTree: z, um: j } = y;
      x && vr(x),
        R.stop(),
        D && ((D.active = !1), De(z, y, w, T)),
        j && $e(j, w),
        $e(() => {
          y.isUnmounted = !0;
        }, w),
        w &&
          w.pendingBranch &&
          !w.isUnmounted &&
          y.asyncDep &&
          !y.asyncResolved &&
          y.suspenseId === w.pendingId &&
          (w.deps--, w.deps === 0 && w.resolve());
    },
    V = (y, w, T, x = !1, R = !1, D = 0) => {
      for (let z = D; z < y.length; z++) De(y[z], w, T, x, R);
    },
    F = (y) =>
      y.shapeFlag & 6
        ? F(y.component.subTree)
        : y.shapeFlag & 128
        ? y.suspense.next()
        : f(y.anchor || y.el),
    X = (y, w, T) => {
      y == null
        ? w._vnode && De(w._vnode, null, null, !0)
        : v(w._vnode || null, y, w, null, null, null, T),
        Ho(),
        as(),
        (w._vnode = y);
    },
    le = {
      p: v,
      um: De,
      m: We,
      r: Ln,
      mt: U,
      mc: E,
      pc: ue,
      pbc: k,
      n: F,
      o: e,
    };
  let Se, re;
  return (
    t && ([Se, re] = t(le)), { render: X, hydrate: Se, createApp: hp(X, Se) }
  );
}
function gn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Wc(e, t, n = !1) {
  const r = e.children,
    s = t.children;
  if (Z(r) && Z(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let a = s[i];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = s[i] = tn(s[i])), (a.el = o.el)),
        n || Wc(o, a)),
        a.type === Nt && (a.el = o.el);
    }
}
function vp(e) {
  const t = e.slice(),
    n = [0];
  let r, s, i, o, a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const c = e[r];
    if (c !== 0) {
      if (((s = n[n.length - 1]), e[s] < c)) {
        (t[r] = s), n.push(r);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        (a = (i + o) >> 1), e[n[a]] < c ? (i = a + 1) : (o = a);
      c < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), (n[i] = r));
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = t[o]);
  return n;
}
const bp = (e) => e.__isTeleport,
  Le = Symbol(void 0),
  Nt = Symbol(void 0),
  Fe = Symbol(void 0),
  _r = Symbol(void 0),
  wr = [];
let bt = null;
function ce(e = !1) {
  wr.push((bt = e ? null : []));
}
function Kc() {
  wr.pop(), (bt = wr[wr.length - 1] || null);
}
let Kn = 1;
function Jo(e) {
  Kn += e;
}
function Gc(e) {
  return (
    (e.dynamicChildren = Kn > 0 ? bt || Hn : null),
    Kc(),
    Kn > 0 && bt && bt.push(e),
    e
  );
}
function _e(e, t, n, r, s, i) {
  return Gc(B(e, t, n, r, s, i, !0));
}
function un(e, t, n, r, s) {
  return Gc(W(e, t, n, r, s, !0));
}
function Gn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function It(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Rs = "__vInternal",
  Yc = ({ key: e }) => (e != null ? e : null),
  rs = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? Ce(e) || Ae(e) || te(e)
        ? { i: Ie, r: e, k: t, f: !!n }
        : e
      : null;
function B(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  i = e === Le ? 0 : 1,
  o = !1,
  a = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Yc(t),
    ref: t && rs(t),
    scopeId: Ps,
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
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Ie,
  };
  return (
    a
      ? (uo(l, n), i & 128 && e.normalize(l))
      : n && (l.shapeFlag |= Ce(n) ? 8 : 16),
    Kn > 0 &&
      !o &&
      bt &&
      (l.patchFlag > 0 || i & 6) &&
      l.patchFlag !== 32 &&
      bt.push(l),
    l
  );
}
const W = _p;
function _p(e, t = null, n = null, r = 0, s = null, i = !1) {
  if (((!e || e === Ic) && (e = Fe), Gn(e))) {
    const a = Kt(e, t, !0);
    return (
      n && uo(a, n),
      Kn > 0 &&
        !i &&
        bt &&
        (a.shapeFlag & 6 ? (bt[bt.indexOf(e)] = a) : bt.push(a)),
      (a.patchFlag |= -2),
      a
    );
  }
  if ((Pp(e) && (e = e.__vccOpts), t)) {
    t = wp(t);
    let { class: a, style: l } = t;
    a && !Ce(a) && (t.class = Pn(a)),
      we(l) && (fc(l) && !Z(l) && (l = je({}, l)), (t.style = _s(l)));
  }
  const o = Ce(e) ? 1 : Ec(e) ? 128 : bp(e) ? 64 : we(e) ? 4 : te(e) ? 2 : 0;
  return B(e, t, n, r, s, o, i, !0);
}
function wp(e) {
  return e ? (fc(e) || Rs in e ? je({}, e) : e) : null;
}
function Kt(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: i, children: o } = e,
    a = t ? Xc(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Yc(a),
    ref:
      t && t.ref ? (n && s ? (Z(s) ? s.concat(rs(t)) : [s, rs(t)]) : rs(t)) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Le ? (i === -1 ? 16 : i | 16) : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Kt(e.ssContent),
    ssFallback: e.ssFallback && Kt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
  };
}
function Dt(e = " ", t = 0) {
  return W(Nt, null, e, t);
}
function zS(e, t) {
  const n = W(_r, null, e);
  return (n.staticCount = t), n;
}
function Nn(e = "", t = !1) {
  return t ? (ce(), un(Fe, null, e)) : W(Fe, null, e);
}
function vt(e) {
  return e == null || typeof e == "boolean"
    ? W(Fe)
    : Z(e)
    ? W(Le, null, e.slice())
    : typeof e == "object"
    ? tn(e)
    : W(Nt, null, String(e));
}
function tn(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Kt(e);
}
function uo(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (Z(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), uo(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(Rs in t)
        ? (t._ctx = Ie)
        : s === 3 &&
          Ie &&
          (Ie.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    te(t)
      ? ((t = { default: t, _ctx: Ie }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [Dt(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Xc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = Pn([t.class, r.class]));
      else if (s === "style") t.style = _s([t.style, r.style]);
      else if (Ir(s)) {
        const i = t[s],
          o = r[s];
        o &&
          i !== o &&
          !(Z(i) && i.includes(o)) &&
          (t[s] = i ? [].concat(i, o) : o);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function Ue(e, t, n, r = null) {
  _t(e, t, 7, [n, r]);
}
const Sp = Vc();
let Cp = 0;
function Ep(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || Sp,
    i = {
      uid: Cp++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Yd(!0),
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
      propsOptions: Hc(r, s),
      emitsOptions: Cc(r, s),
      emit: null,
      emitted: null,
      propsDefaults: be,
      inheritAttrs: r.inheritAttrs,
      ctx: be,
      data: be,
      props: be,
      attrs: be,
      slots: be,
      refs: be,
      setupState: be,
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
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = Mf.bind(null, i)),
    e.ce && e.ce(i),
    i
  );
}
let Oe = null;
const Yt = () => Oe || Ie,
  Yn = (e) => {
    (Oe = e), e.scope.on();
  },
  xn = () => {
    Oe && Oe.scope.off(), (Oe = null);
  };
function Jc(e) {
  return e.vnode.shapeFlag & 4;
}
let Xn = !1;
function Tp(e, t = !1) {
  Xn = t;
  const { props: n, children: r } = e.vnode,
    s = Jc(e);
  ap(e, n, s, t), dp(e, r);
  const i = s ? kp(e, t) : void 0;
  return (Xn = !1), i;
}
function kp(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = pc(new Proxy(e.ctx, np)));
  const { setup: r } = n;
  if (r) {
    const s = (e.setupContext = r.length > 1 ? Zc(e) : null);
    Yn(e), nr();
    const i = an(r, e, 0, [e.props, s]);
    if ((rr(), xn(), Qa(i))) {
      if ((i.then(xn, xn), t))
        return i
          .then((o) => {
            Ei(e, o, t);
          })
          .catch((o) => {
            sr(o, e, 0);
          });
      e.asyncDep = i;
    } else Ei(e, i, t);
  } else Qc(e, t);
}
function Ei(e, t, n) {
  te(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : we(t) && (e.setupState = yc(t)),
    Qc(e, n);
}
let Qo;
function Qc(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && Qo && !r.render) {
      const s = r.template || ao(e).template;
      if (s) {
        const { isCustomElement: i, compilerOptions: o } = e.appContext.config,
          { delimiters: a, compilerOptions: l } = r,
          c = je(je({ isCustomElement: i, delimiters: a }, o), l);
        r.render = Qo(s, c);
      }
    }
    e.render = r.render || xt;
  }
  Yn(e), nr(), rp(e), rr(), xn();
}
function xp(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return gt(e, "get", "$attrs"), t[n];
    },
  });
}
function Zc(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = xp(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function $s(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(yc(pc(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in br) return br[n](e);
        },
        has(t, n) {
          return n in t || n in br;
        },
      }))
    );
}
function Ti(e, t = !0) {
  return te(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Pp(e) {
  return te(e) && "__vccOpts" in e;
}
const Me = (e, t) => Of(e, t, Xn);
function Op() {
  return Ap().slots;
}
function Ap() {
  const e = Yt();
  return e.setupContext || (e.setupContext = Zc(e));
}
function de(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? we(t) && !Z(t)
      ? Gn(t)
        ? W(e, null, [t])
        : W(e, t)
      : W(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && Gn(n) && (n = [n]),
      W(e, t, n));
}
const Rp = Symbol(""),
  $p = () => wt(Rp),
  fo = "3.2.45",
  Lp = "http://www.w3.org/2000/svg",
  Cn = typeof document < "u" ? document : null,
  Zo = Cn && Cn.createElement("template"),
  Mp = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const s = t
        ? Cn.createElementNS(Lp, e)
        : Cn.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          s.setAttribute("multiple", r.multiple),
        s
      );
    },
    createText: (e) => Cn.createTextNode(e),
    createComment: (e) => Cn.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Cn.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, s, i) {
      const o = n ? n.previousSibling : t.lastChild;
      if (s && (s === i || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === i || !(s = s.nextSibling));

        );
      else {
        Zo.innerHTML = r ? `<svg>${e}</svg>` : e;
        const a = Zo.content;
        if (r) {
          const l = a.firstChild;
          for (; l.firstChild; ) a.appendChild(l.firstChild);
          a.removeChild(l);
        }
        t.insertBefore(a, n);
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
function Ip(e, t, n) {
  const r = e._vtc;
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
function jp(e, t, n) {
  const r = e.style,
    s = Ce(n);
  if (n && !s) {
    for (const i in n) ki(r, i, n[i]);
    if (t && !Ce(t)) for (const i in t) n[i] == null && ki(r, i, "");
  } else {
    const i = r.display;
    s ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"),
      "_vod" in e && (r.display = i);
  }
}
const el = /\s*!important$/;
function ki(e, t, n) {
  if (Z(n)) n.forEach((r) => ki(e, t, r));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const r = Dp(e, t);
    el.test(n)
      ? e.setProperty(tr(r), n.replace(el, ""), "important")
      : (e[r] = n);
  }
}
const tl = ["Webkit", "Moz", "ms"],
  Ks = {};
function Dp(e, t) {
  const n = Ks[t];
  if (n) return n;
  let r = Bt(t);
  if (r !== "filter" && r in e) return (Ks[t] = r);
  r = Cs(r);
  for (let s = 0; s < tl.length; s++) {
    const i = tl[s] + r;
    if (i in e) return (Ks[t] = i);
  }
  return t;
}
const nl = "http://www.w3.org/1999/xlink";
function Bp(e, t, n, r, s) {
  if (r && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(nl, t.slice(6, t.length))
      : e.setAttributeNS(nl, t, n);
  else {
    const i = Fd(t);
    n == null || (i && !Ya(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? "" : n);
  }
}
function Np(e, t, n, r, s, i, o) {
  if (t === "innerHTML" || t === "textContent") {
    r && o(r, s, i), (e[t] = n == null ? "" : n);
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const l = n == null ? "" : n;
    (e.value !== l || e.tagName === "OPTION") && (e.value = l),
      n == null && e.removeAttribute(t);
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean"
      ? (n = Ya(n))
      : n == null && l === "string"
      ? ((n = ""), (a = !0))
      : l === "number" && ((n = 0), (a = !0));
  }
  try {
    e[t] = n;
  } catch {}
  a && e.removeAttribute(t);
}
function Hp(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Fp(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
function zp(e, t, n, r, s = null) {
  const i = e._vei || (e._vei = {}),
    o = i[t];
  if (r && o) o.value = r;
  else {
    const [a, l] = Up(t);
    if (r) {
      const c = (i[t] = Wp(r, s));
      Hp(e, a, c, l);
    } else o && (Fp(e, a, o, l), (i[t] = void 0));
  }
}
const rl = /(?:Once|Passive|Capture)$/;
function Up(e) {
  let t;
  if (rl.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(rl)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : tr(e.slice(2)), t];
}
let Gs = 0;
const Vp = Promise.resolve(),
  qp = () => Gs || (Vp.then(() => (Gs = 0)), (Gs = Date.now()));
function Wp(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    _t(Kp(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = qp()), n;
}
function Kp(e, t) {
  if (Z(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    );
  } else return t;
}
const sl = /^on[a-z]/,
  Gp = (e, t, n, r, s = !1, i, o, a, l) => {
    t === "class"
      ? Ip(e, r, s)
      : t === "style"
      ? jp(e, n, r)
      : Ir(t)
      ? qi(t) || zp(e, t, n, r, o)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : Yp(e, t, r, s)
        )
      ? Np(e, t, r, i, o, a, l)
      : (t === "true-value"
          ? (e._trueValue = r)
          : t === "false-value" && (e._falseValue = r),
        Bp(e, t, r, s));
  };
function Yp(e, t, n, r) {
  return r
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && sl.test(t) && te(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (sl.test(t) && Ce(n))
    ? !1
    : t in e;
}
const Qt = "transition",
  dr = "animation",
  Ls = (e, { slots: t }) => de(Pc, Xp(e), t);
Ls.displayName = "Transition";
const eu = {
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
Ls.props = je({}, Pc.props, eu);
const yn = (e, t = []) => {
    Z(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  il = (e) => (e ? (Z(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function Xp(e) {
  const t = {};
  for (const $ in e) $ in eu || (t[$] = e[$]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: r,
      duration: s,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: a = `${n}-enter-to`,
      appearFromClass: l = i,
      appearActiveClass: c = o,
      appearToClass: u = a,
      leaveFromClass: d = `${n}-leave-from`,
      leaveActiveClass: f = `${n}-leave-active`,
      leaveToClass: h = `${n}-leave-to`,
    } = e,
    m = Jp(s),
    v = m && m[0],
    b = m && m[1],
    {
      onBeforeEnter: _,
      onEnter: p,
      onEnterCancelled: g,
      onLeave: S,
      onLeaveCancelled: C,
      onBeforeAppear: P = _,
      onAppear: O = p,
      onAppearCancelled: E = g,
    } = t,
    N = ($, Y, U) => {
      vn($, Y ? u : a), vn($, Y ? c : o), U && U();
    },
    k = ($, Y) => {
      ($._isLeaving = !1), vn($, d), vn($, h), vn($, f), Y && Y();
    },
    M = ($) => (Y, U) => {
      const Pe = $ ? O : p,
        ie = () => N(Y, $, U);
      yn(Pe, [Y, ie]),
        ol(() => {
          vn(Y, $ ? l : i), Zt(Y, $ ? u : a), il(Pe) || ll(Y, r, v, ie);
        });
    };
  return je(t, {
    onBeforeEnter($) {
      yn(_, [$]), Zt($, i), Zt($, o);
    },
    onBeforeAppear($) {
      yn(P, [$]), Zt($, l), Zt($, c);
    },
    onEnter: M(!1),
    onAppear: M(!0),
    onLeave($, Y) {
      $._isLeaving = !0;
      const U = () => k($, Y);
      Zt($, d),
        eh(),
        Zt($, f),
        ol(() => {
          !$._isLeaving || (vn($, d), Zt($, h), il(S) || ll($, r, b, U));
        }),
        yn(S, [$, U]);
    },
    onEnterCancelled($) {
      N($, !1), yn(g, [$]);
    },
    onAppearCancelled($) {
      N($, !0), yn(E, [$]);
    },
    onLeaveCancelled($) {
      k($), yn(C, [$]);
    },
  });
}
function Jp(e) {
  if (e == null) return null;
  if (we(e)) return [Ys(e.enter), Ys(e.leave)];
  {
    const t = Ys(e);
    return [t, t];
  }
}
function Ys(e) {
  return Es(e);
}
function Zt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set())).add(t);
}
function vn(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function ol(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Qp = 0;
function ll(e, t, n, r) {
  const s = (e._endId = ++Qp),
    i = () => {
      s === e._endId && r();
    };
  if (n) return setTimeout(i, n);
  const { type: o, timeout: a, propCount: l } = Zp(e, t);
  if (!o) return r();
  const c = o + "end";
  let u = 0;
  const d = () => {
      e.removeEventListener(c, f), i();
    },
    f = (h) => {
      h.target === e && ++u >= l && d();
    };
  setTimeout(() => {
    u < l && d();
  }, a + 1),
    e.addEventListener(c, f);
}
function Zp(e, t) {
  const n = window.getComputedStyle(e),
    r = (m) => (n[m] || "").split(", "),
    s = r(`${Qt}Delay`),
    i = r(`${Qt}Duration`),
    o = al(s, i),
    a = r(`${dr}Delay`),
    l = r(`${dr}Duration`),
    c = al(a, l);
  let u = null,
    d = 0,
    f = 0;
  t === Qt
    ? o > 0 && ((u = Qt), (d = o), (f = i.length))
    : t === dr
    ? c > 0 && ((u = dr), (d = c), (f = l.length))
    : ((d = Math.max(o, c)),
      (u = d > 0 ? (o > c ? Qt : dr) : null),
      (f = u ? (u === Qt ? i.length : l.length) : 0));
  const h =
    u === Qt && /\b(transform|all)(,|$)/.test(r(`${Qt}Property`).toString());
  return { type: u, timeout: d, propCount: f, hasTransform: h };
}
function al(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => cl(n) + cl(e[r])));
}
function cl(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function eh() {
  return document.body.offsetHeight;
}
const th = ["ctrl", "shift", "alt", "meta"],
  nh = {
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
    exact: (e, t) => th.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  rh =
    (e, t) =>
    (n, ...r) => {
      for (let s = 0; s < t.length; s++) {
        const i = nh[t[s]];
        if (i && i(n, t)) return;
      }
      return e(n, ...r);
    },
  US = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e._vod = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : fr(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n &&
        (r
          ? t
            ? (r.beforeEnter(e), fr(e, !0), r.enter(e))
            : r.leave(e, () => {
                fr(e, !1);
              })
          : fr(e, t));
    },
    beforeUnmount(e, { value: t }) {
      fr(e, t);
    },
  };
function fr(e, t) {
  e.style.display = t ? e._vod : "none";
}
const tu = je({ patchProp: Gp }, Mp);
let Sr,
  ul = !1;
function sh() {
  return Sr || (Sr = gp(tu));
}
function ih() {
  return (Sr = ul ? Sr : yp(tu)), (ul = !0), Sr;
}
const oh = (...e) => {
    const t = sh().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (r) => {
        const s = nu(r);
        if (!s) return;
        const i = t._component;
        !te(i) && !i.render && !i.template && (i.template = s.innerHTML),
          (s.innerHTML = "");
        const o = n(s, !1, s instanceof SVGElement);
        return (
          s instanceof Element &&
            (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
          o
        );
      }),
      t
    );
  },
  lh = (...e) => {
    const t = ih().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (r) => {
        const s = nu(r);
        if (s) return n(s, !0, s instanceof SVGElement);
      }),
      t
    );
  };
function nu(e) {
  return Ce(e) ? document.querySelector(e) : e;
}
const ah =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  ch =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  uh = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;
function dh(e, t) {
  if (
    e !== "__proto__" &&
    !(e === "constructor" && t && typeof t == "object" && "prototype" in t)
  )
    return t;
}
function po(e, t = {}) {
  if (typeof e != "string") return e;
  const n = e.toLowerCase().trim();
  if (n === "true") return !0;
  if (n === "false") return !1;
  if (n === "null") return null;
  if (n === "nan") return Number.NaN;
  if (n === "infinity") return Number.POSITIVE_INFINITY;
  if (n !== "undefined") {
    if (!uh.test(e)) {
      if (t.strict) throw new SyntaxError("Invalid JSON");
      return e;
    }
    try {
      return ah.test(e) || ch.test(e) ? JSON.parse(e, dh) : JSON.parse(e);
    } catch (r) {
      if (t.strict) throw r;
      return e;
    }
  }
}
const ru = /#/g,
  su = /&/g,
  fh = /\//g,
  ph = /=/g,
  hh = /\?/g,
  ho = /\+/g,
  mh = /%5b/gi,
  gh = /%5d/gi,
  yh = /%5e/gi,
  vh = /%60/gi,
  bh = /%7b/gi,
  _h = /%7c/gi,
  wh = /%7d/gi,
  Sh = /%20/gi,
  Ch = /%252f/gi;
function iu(e) {
  return encodeURI("" + e)
    .replace(_h, "|")
    .replace(mh, "[")
    .replace(gh, "]");
}
function xi(e) {
  return iu(e)
    .replace(ho, "%2B")
    .replace(Sh, "+")
    .replace(ru, "%23")
    .replace(su, "%26")
    .replace(vh, "`")
    .replace(bh, "{")
    .replace(wh, "}")
    .replace(yh, "^");
}
function Xs(e) {
  return xi(e).replace(ph, "%3D");
}
function mo(e) {
  return iu(e)
    .replace(ru, "%23")
    .replace(hh, "%3F")
    .replace(Ch, "%2F")
    .replace(su, "%26")
    .replace(ho, "%2B");
}
function dl(e) {
  return mo(e).replace(fh, "%2F");
}
function ou(e = "") {
  try {
    return decodeURIComponent("" + e);
  } catch {
    return "" + e;
  }
}
function Eh(e) {
  return ou(e.replace(ho, " "));
}
function Th(e = "") {
  const t = {};
  e[0] === "?" && (e = e.slice(1));
  for (const n of e.split("&")) {
    const r = n.match(/([^=]+)=?(.*)/) || [];
    if (r.length < 2) continue;
    const s = ou(r[1]);
    if (s === "__proto__" || s === "constructor") continue;
    const i = Eh(r[2] || "");
    typeof t[s] < "u"
      ? Array.isArray(t[s])
        ? t[s].push(i)
        : (t[s] = [t[s], i])
      : (t[s] = i);
  }
  return t;
}
function kh(e, t) {
  return (
    (typeof t == "number" || typeof t == "boolean") && (t = String(t)),
    t
      ? Array.isArray(t)
        ? t.map((n) => `${Xs(e)}=${xi(n)}`).join("&")
        : `${Xs(e)}=${xi(t)}`
      : Xs(e)
  );
}
function xh(e) {
  return Object.keys(e)
    .filter((t) => e[t] !== void 0)
    .map((t) => kh(t, e[t]))
    .join("&");
}
const Ph = /^\w{2,}:(\/\/)?/,
  Oh = /^\/\/[^/]+/;
function Jn(e, t = !1) {
  return Ph.test(e) || (t && Oh.test(e));
}
const Ah = /\/$|\/\?/;
function Pi(e = "", t = !1) {
  return t ? Ah.test(e) : e.endsWith("/");
}
function go(e = "", t = !1) {
  if (!t) return (Pi(e) ? e.slice(0, -1) : e) || "/";
  if (!Pi(e, !0)) return e || "/";
  const [n, ...r] = e.split("?");
  return (n.slice(0, -1) || "/") + (r.length > 0 ? `?${r.join("?")}` : "");
}
function Rh(e = "", t = !1) {
  if (!t) return e.endsWith("/") ? e : e + "/";
  if (Pi(e, !0)) return e || "/";
  const [n, ...r] = e.split("?");
  return n + "/" + (r.length > 0 ? `?${r.join("?")}` : "");
}
function lu(e = "") {
  return e.startsWith("/");
}
function $h(e = "") {
  return (lu(e) ? e.slice(1) : e) || "/";
}
function au(e = "") {
  return lu(e) ? e : "/" + e;
}
function cu(e, t) {
  if (uu(t) || Jn(e)) return e;
  const n = go(t);
  return e.startsWith(n) ? e : Ht(n, e);
}
function fl(e, t) {
  if (uu(t)) return e;
  const n = go(t);
  if (!e.startsWith(n)) return e;
  const r = e.slice(n.length);
  return r[0] === "/" ? r : "/" + r;
}
function Lh(e, t) {
  const n = Dr(e),
    r = { ...Th(n.search), ...t };
  return (n.search = xh(r)), Ih(n);
}
function uu(e) {
  return !e || e === "/";
}
function Mh(e) {
  return e && e !== "/";
}
function Ht(e, ...t) {
  let n = e || "";
  for (const r of t.filter((s) => Mh(s))) n = n ? Rh(n) + $h(r) : r;
  return n;
}
function Dr(e = "", t) {
  if (!Jn(e, !0)) return t ? Dr(t + e) : pl(e);
  const [n = "", r, s = ""] = (
      e.replace(/\\/g, "/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/) || []
    ).splice(1),
    [i = "", o = ""] = (s.match(/([^#/?]*)(.*)?/) || []).splice(1),
    { pathname: a, search: l, hash: c } = pl(o.replace(/\/(?=[A-Za-z]:)/, ""));
  return {
    protocol: n,
    auth: r ? r.slice(0, Math.max(0, r.length - 1)) : "",
    host: i,
    pathname: a,
    search: l,
    hash: c,
  };
}
function pl(e = "") {
  const [t = "", n = "", r = ""] = (
    e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []
  ).splice(1);
  return { pathname: t, search: n, hash: r };
}
function Ih(e) {
  const t =
    e.pathname +
    (e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "") +
    e.hash;
  return e.protocol
    ? e.protocol + "//" + (e.auth ? e.auth + "@" : "") + e.host + t
    : t;
}
class jh extends Error {
  constructor() {
    super(...arguments), (this.name = "FetchError");
  }
}
function Dh(e, t, n) {
  let r = "";
  e && n && (r = `${n.status} ${n.statusText} (${e.toString()})`),
    t && (r = `${t.message} (${r})`);
  const s = new jh(r);
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
const Bh = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function hl(e = "GET") {
  return Bh.has(e.toUpperCase());
}
function Nh(e) {
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
const Hh = new Set([
    "image/svg",
    "application/xml",
    "application/xhtml",
    "application/html",
  ]),
  Fh = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function zh(e = "") {
  if (!e) return "json";
  const t = e.split(";").shift();
  return Fh.test(t)
    ? "json"
    : Hh.has(t) || t.startsWith("text/")
    ? "text"
    : "blob";
}
const Uh = new Set([408, 409, 425, 429, 500, 502, 503, 504]);
function du(e) {
  const { fetch: t, Headers: n } = e;
  function r(o) {
    const a = (o.error && o.error.name === "AbortError") || !1;
    if (o.options.retry !== !1 && !a) {
      const c =
          typeof o.options.retry == "number"
            ? o.options.retry
            : hl(o.options.method)
            ? 0
            : 1,
        u = (o.response && o.response.status) || 500;
      if (c > 0 && Uh.has(u))
        return s(o.request, { ...o.options, retry: c - 1 });
    }
    const l = Dh(o.request, o.error, o.response);
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
          (c.options.baseURL && (c.request = cu(c.request, c.options.baseURL)),
          (c.options.query || c.options.params) &&
            (c.request = Lh(c.request, {
              ...c.options.params,
              ...c.options.query,
            })),
          c.options.body &&
            hl(c.options.method) &&
            Nh(c.options.body) &&
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
          async (d) => (
            (c.error = d),
            c.options.onRequestError && (await c.options.onRequestError(c)),
            r(c)
          )
        ));
      const u =
        (c.options.parseResponse ? "json" : c.options.responseType) ||
        zh(c.response.headers.get("content-type") || "");
      if (u === "json") {
        const d = await c.response.text(),
          f = c.options.parseResponse || po;
        c.response._data = f(d);
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
    i = function (a, l) {
      return s(a, l).then((c) => c._data);
    };
  return (
    (i.raw = s),
    (i.native = t),
    (i.create = (o = {}) => du({ ...e, defaults: { ...e.defaults, ...o } })),
    i
  );
}
const fu = (function () {
    if (typeof globalThis < "u") return globalThis;
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("unable to locate global object");
  })(),
  Vh =
    fu.fetch ||
    (() =>
      Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),
  qh = fu.Headers,
  Wh = du({ fetch: Vh, Headers: qh }),
  Kh = Wh,
  Gh = () => {
    var e;
    return (
      ((e = window == null ? void 0 : window.__NUXT__) == null
        ? void 0
        : e.config) || {}
    );
  },
  hs = Gh().app,
  Yh = () => hs.baseURL,
  Xh = () => hs.buildAssetsDir,
  Jh = (...e) => Ht(pu(), Xh(), ...e),
  pu = (...e) => {
    const t = hs.cdnURL || hs.baseURL;
    return e.length ? Ht(t, ...e) : t;
  };
(globalThis.__buildAssetsURL = Jh), (globalThis.__publicAssetsURL = pu);
function Oi(e, t = {}, n) {
  for (const r in e) {
    const s = e[r],
      i = n ? `${n}:${r}` : r;
    typeof s == "object" && s !== null
      ? Oi(s, t, i)
      : typeof s == "function" && (t[i] = s);
  }
  return t;
}
function Qh(e, t) {
  return e.reduce(
    (n, r) => n.then(() => r.apply(void 0, t)),
    Promise.resolve()
  );
}
function Zh(e, t) {
  return Promise.all(e.map((n) => n.apply(void 0, t)));
}
function Js(e, t) {
  for (const n of e) n(t);
}
class em {
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
    let i;
    for (; this._deprecatedHooks[t]; )
      (i = this._deprecatedHooks[t]), (t = i.to);
    if (i && !r.allowDeprecated) {
      let o = i.message;
      o ||
        (o =
          `${s} hook has been deprecated` +
          (i.to ? `, please use ${i.to}` : "")),
        this._deprecatedMessages || (this._deprecatedMessages = new Set()),
        this._deprecatedMessages.has(o) ||
          (console.warn(o), this._deprecatedMessages.add(o));
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
      s = (...i) => (
        typeof r == "function" && r(), (r = void 0), (s = void 0), n(...i)
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
    const n = Oi(t),
      r = Object.keys(n).map((s) => this.hook(s, n[s]));
    return () => {
      for (const s of r.splice(0, r.length)) s();
    };
  }
  removeHooks(t) {
    const n = Oi(t);
    for (const r in n) this.removeHook(r, n[r]);
  }
  callHook(t, ...n) {
    return this.callHookWith(Qh, t, ...n);
  }
  callHookParallel(t, ...n) {
    return this.callHookWith(Zh, t, ...n);
  }
  callHookWith(t, n, ...r) {
    const s =
      this._before || this._after ? { name: n, args: r, context: {} } : void 0;
    this._before && Js(this._before, s);
    const i = t(this._hooks[n] || [], r);
    return i instanceof Promise
      ? i.finally(() => {
          this._after && s && Js(this._after, s);
        })
      : (this._after && s && Js(this._after, s), i);
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
function hu() {
  return new em();
}
function tm() {
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
      const i = () => {
          e = r;
        },
        o = () => (e === r ? i : void 0);
      Ai.add(o);
      try {
        const a = s();
        return t || (e = void 0), await a;
      } finally {
        Ai.delete(o);
      }
    },
  };
}
function nm() {
  const e = {};
  return {
    get(t) {
      return e[t] || (e[t] = tm()), e[t], e[t];
    },
  };
}
const ms =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof global < "u"
      ? global
      : typeof window < "u"
      ? window
      : {},
  ml = "__unctx__",
  rm = ms[ml] || (ms[ml] = nm()),
  sm = (e) => rm.get(e),
  gl = "__unctx_async_handlers__",
  Ai = ms[gl] || (ms[gl] = new Set());
function Cr(e) {
  const t = [];
  for (const s of Ai) {
    const i = s();
    i && t.push(i);
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
const mu = sm("nuxt-app"),
  im = "__nuxt_plugin";
function om(e) {
  let t = 0;
  const n = {
    provide: void 0,
    globalName: "nuxt",
    payload: Pt({ data: {}, state: {}, _errors: {}, ...window.__NUXT__ }),
    static: { data: {} },
    isHydrating: !0,
    deferHydration() {
      if (!n.isHydrating) return () => {};
      t++;
      let i = !1;
      return () => {
        if (!i && ((i = !0), t--, t === 0))
          return (n.isHydrating = !1), n.callHook("app:suspense:resolve");
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    ...e,
  };
  (n.hooks = hu()),
    (n.hook = n.hooks.hook),
    (n.callHook = n.hooks.callHook),
    (n.provide = (i, o) => {
      const a = "$" + i;
      Jr(n, a, o), Jr(n.vueApp.config.globalProperties, a, o);
    }),
    Jr(n.vueApp, "$nuxt", n),
    Jr(n.vueApp.config.globalProperties, "$nuxt", n);
  const r = Pt(n.payload.config),
    s = new Proxy(r, {
      get(i, o) {
        var a;
        return o === "public" ? i.public : (a = i[o]) != null ? a : i.public[o];
      },
      set(i, o, a) {
        return o === "public" || o === "app"
          ? !1
          : ((i[o] = a), (i.public[o] = a), !0);
      },
    });
  return n.provide("config", s), n;
}
async function lm(e, t) {
  if (typeof t != "function") return;
  const { provide: n } = (await nn(e, t, [e])) || {};
  if (n && typeof n == "object") for (const r in n) e.provide(r, n[r]);
}
async function am(e, t) {
  for (const n of t) await lm(e, n);
}
function cm(e) {
  return e
    .map((n) =>
      typeof n != "function" ? null : n.length > 1 ? (r) => n(r, r.provide) : n
    )
    .filter(Boolean);
}
function pn(e) {
  return (e[im] = !0), e;
}
function nn(e, t, n) {
  const r = () => (n ? t(...n) : t());
  return mu.set(e), r();
}
function Ee() {
  const e = mu.tryUse();
  if (!e) {
    const t = Yt();
    if (!t) throw new Error("nuxt instance unavailable");
    return t.appContext.app.$nuxt;
  }
  return e;
}
function hn() {
  return Ee().$config;
}
function Jr(e, t, n) {
  Object.defineProperty(e, t, { get: () => n });
}
const um = decodeURIComponent,
  dm = encodeURIComponent,
  fm = /; */,
  Qr = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function pm(e, t) {
  if (typeof e != "string")
    throw new TypeError("argument str must be a string");
  let n = {},
    r = t || {},
    s = e.split(fm),
    i = r.decode || um;
  for (let o = 0; o < s.length; o++) {
    let a = s[o],
      l = a.indexOf("=");
    if (l < 0) continue;
    let c = a.substr(0, l).trim(),
      u = a.substr(++l, a.length).trim();
    u[0] == '"' && (u = u.slice(1, -1)), n[c] == null && (n[c] = hm(u, i));
  }
  return n;
}
function yl(e, t, n) {
  let r = n || {},
    s = r.encode || dm;
  if (typeof s != "function") throw new TypeError("option encode is invalid");
  if (!Qr.test(e)) throw new TypeError("argument name is invalid");
  let i = s(t);
  if (i && !Qr.test(i)) throw new TypeError("argument val is invalid");
  let o = e + "=" + i;
  if (r.maxAge != null) {
    let a = r.maxAge - 0;
    if (isNaN(a) || !isFinite(a))
      throw new TypeError("option maxAge is invalid");
    o += "; Max-Age=" + Math.floor(a);
  }
  if (r.domain) {
    if (!Qr.test(r.domain)) throw new TypeError("option domain is invalid");
    o += "; Domain=" + r.domain;
  }
  if (r.path) {
    if (!Qr.test(r.path)) throw new TypeError("option path is invalid");
    o += "; Path=" + r.path;
  }
  if (r.expires) {
    if (typeof r.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    o += "; Expires=" + r.expires.toUTCString();
  }
  if (
    (r.httpOnly && (o += "; HttpOnly"),
    r.secure && (o += "; Secure"),
    r.sameSite)
  )
    switch (
      typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite
    ) {
      case !0:
        o += "; SameSite=Strict";
        break;
      case "lax":
        o += "; SameSite=Lax";
        break;
      case "strict":
        o += "; SameSite=Strict";
        break;
      case "none":
        o += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return o;
}
function hm(e, t) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
class Ri extends Error {
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
Ri.__h3_error__ = !0;
function $i(e) {
  var n;
  if (typeof e == "string") return new Ri(e);
  if (mm(e)) return e;
  const t = new Ri(
    (n = e.message) != null ? n : e.statusMessage,
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
function mm(e) {
  var t;
  return (
    ((t = e == null ? void 0 : e.constructor) == null
      ? void 0
      : t.__h3_error__) === !0
  );
}
const Ms = () => no(Ee().payload, "error"),
  gr = (e) => {
    const t = gs(e);
    try {
      Ee().callHook("app:error", t);
      const r = Ms();
      r.value = r.value || t;
    } catch {
      throw t;
    }
    return t;
  },
  gm = async (e = {}) => {
    const t = Ee(),
      n = Ms();
    t.callHook("app:error:cleared", e),
      e.redirect && (await t.$router.replace(e.redirect)),
      (n.value = null);
  },
  ym = (e) => !!(e && typeof e == "object" && "__nuxt_error" in e),
  gs = (e) => {
    const t = $i(e);
    return (t.__nuxt_error = !0), t;
  },
  vm = () => null;
function Er(...e) {
  var f, h, m, v, b, _, p;
  const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
  typeof e[0] != "string" && e.unshift(t);
  let [n, r, s = {}] = e;
  if (typeof n != "string")
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  if (typeof r != "function")
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  (s.server = (f = s.server) != null ? f : !0),
    (s.default = (h = s.default) != null ? h : vm),
    (s.lazy = (m = s.lazy) != null ? m : !1),
    (s.immediate = (v = s.immediate) != null ? v : !0);
  const i = Ee(),
    o = () => (i.isHydrating ? i.payload.data[n] : i.static.data[n]),
    a = () => o() !== void 0;
  i._asyncData[n] ||
    (i._asyncData[n] = {
      data: ge(
        (p =
          (_ = o()) != null
            ? _
            : (b = s.default) == null
            ? void 0
            : b.call(s)) != null
          ? p
          : null
      ),
      pending: ge(!a()),
      error: ge(i.payload._errors[n] ? gs(i.payload._errors[n]) : null),
    });
  const l = { ...i._asyncData[n] };
  l.refresh = l.execute = (g = {}) => {
    if (i._asyncDataPromises[n]) {
      if (g.dedupe === !1) return i._asyncDataPromises[n];
      i._asyncDataPromises[n].cancelled = !0;
    }
    if (g._initial && a()) return o();
    l.pending.value = !0;
    const S = new Promise((C, P) => {
      try {
        C(r(i));
      } catch (O) {
        P(O);
      }
    })
      .then((C) => {
        if (S.cancelled) return i._asyncDataPromises[n];
        s.transform && (C = s.transform(C)),
          s.pick && (C = bm(C, s.pick)),
          (l.data.value = C),
          (l.error.value = null);
      })
      .catch((C) => {
        var P, O;
        if (S.cancelled) return i._asyncDataPromises[n];
        (l.error.value = C),
          (l.data.value = Ve(
            (O = (P = s.default) == null ? void 0 : P.call(s)) != null
              ? O
              : null
          ));
      })
      .finally(() => {
        S.cancelled ||
          ((l.pending.value = !1),
          (i.payload.data[n] = l.data.value),
          l.error.value && (i.payload._errors[n] = gs(l.error.value)),
          delete i._asyncDataPromises[n]);
      });
    return (i._asyncDataPromises[n] = S), i._asyncDataPromises[n];
  };
  const c = () => l.refresh({ _initial: !0 }),
    u = s.server !== !1 && i.payload.serverRendered;
  {
    const g = Yt();
    if (g && !g._nuxtOnBeforeMountCbs) {
      g._nuxtOnBeforeMountCbs = [];
      const C = g._nuxtOnBeforeMountCbs;
      g &&
        ($c(() => {
          C.forEach((P) => {
            P();
          }),
            C.splice(0, C.length);
        }),
        ds(() => C.splice(0, C.length)));
    }
    u && i.isHydrating && a()
      ? (l.pending.value = !1)
      : g &&
        ((i.payload.serverRendered && i.isHydrating) || s.lazy) &&
        s.immediate
      ? g._nuxtOnBeforeMountCbs.push(c)
      : s.immediate && c(),
      s.watch && jt(s.watch, () => l.refresh());
    const S = i.hook("app:data:refresh", (C) => {
      if (!C || C.includes(n)) return l.refresh();
    });
    g && ds(S);
  }
  const d = Promise.resolve(i._asyncDataPromises[n]).then(() => l);
  return Object.assign(d, l), d;
}
async function VS(e) {
  const t = e ? (Array.isArray(e) ? e : [e]) : void 0;
  await Ee().hooks.callHookParallel("app:data:refresh", t);
}
function bm(e, t) {
  const n = {};
  for (const r of t) n[r] = e[r];
  return n;
}
function _m(...e) {
  const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
  typeof e[0] != "string" && e.unshift(t);
  const [n, r] = e;
  if (!n || typeof n != "string")
    throw new TypeError("[nuxt] [useState] key must be a string: " + n);
  if (r !== void 0 && typeof r != "function")
    throw new Error("[nuxt] [useState] init must be a function: " + r);
  const s = "$s" + n,
    i = Ee(),
    o = no(i.payload.state, s);
  if (o.value === void 0 && r) {
    const a = r();
    if (Ae(a)) return (i.payload.state[s] = a), a;
    o.value = a;
  }
  return o;
}
const Br = () => {
    var e;
    return (e = Ee()) == null ? void 0 : e.$router;
  },
  lr = () => (Yt() ? wt("_route", Ee()._route) : Ee()._route),
  wm = (e) => e,
  Sm = () => {
    try {
      if (Ee()._processingMiddleware) return !0;
    } catch {
      return !0;
    }
    return !1;
  },
  Cm = (e, t) => {
    e || (e = "/");
    const n = typeof e == "string" ? e : e.path || "/",
      r = Jn(n, !0);
    if (r && !(t != null && t.external))
      throw new Error(
        "Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`."
      );
    if (r && Dr(n).protocol === "script:")
      throw new Error("Cannot navigate to an URL with script protocol.");
    if (!r && Sm()) return e;
    const s = Br();
    return r
      ? (t != null && t.replace ? location.replace(n) : (location.href = n),
        Promise.resolve())
      : t != null && t.replace
      ? s.replace(e)
      : s.push(e);
  };
function gu(e, t) {
  return Ee()._useHead(e, t);
}
const vl = "__nuxt_component";
async function Em(e, t) {
  const n = Ee(),
    r = lr(),
    s = Yt(),
    { fetchKey: i } = s.proxy.$options,
    o = typeof i == "function" ? i(() => "") : i || r.fullPath,
    { data: a } = await Er(`options:asyncdata:${o}`, () => t(n));
  a.value &&
    typeof a.value == "object" &&
    Object.assign(await e, kf(Pt(a.value)));
}
const zt = function (t) {
    const { setup: n } = t;
    return !n && !t.asyncData && !t.head
      ? { [vl]: !0, ...t }
      : {
          [vl]: !0,
          ...t,
          setup(r, s) {
            const i = (n == null ? void 0 : n(r, s)) || {},
              o = [];
            if ((t.asyncData && o.push(Em(i, t.asyncData)), t.head)) {
              const a = Ee();
              gu(typeof t.head == "function" ? () => t.head(a) : t.head);
            }
            return Promise.resolve(i)
              .then(() => Promise.all(o))
              .then(() => i)
              .finally(() => {
                o.length = 0;
              });
          },
        };
  },
  Tm = {
    ignoreUnknown: !1,
    respectType: !1,
    respectFunctionNames: !1,
    respectFunctionProperties: !1,
    unorderedObjects: !0,
    unorderedArrays: !1,
    unorderedSets: !1,
  };
function km(e, t = {}) {
  t = { ...Tm, ...t };
  const n = yu(t);
  return n.dispatch(e), n.toString();
}
function yu(e) {
  const t = [];
  let n = [];
  const r = (s) => {
    t.push(s);
  };
  return {
    toString() {
      return t.join("");
    },
    getContext() {
      return n;
    },
    dispatch(s) {
      return (
        e.replacer && (s = e.replacer(s)),
        this["_" + (s === null ? "null" : typeof s)](s)
      );
    },
    _object(s) {
      const i = /\[object (.*)]/i,
        o = Object.prototype.toString.call(s),
        a = i.exec(o),
        l = a ? a[1].toLowerCase() : "unknown:[" + o.toLowerCase() + "]";
      let c = null;
      if ((c = n.indexOf(s)) >= 0) return this.dispatch("[CIRCULAR:" + c + "]");
      if (
        (n.push(s),
        typeof Buffer < "u" && Buffer.isBuffer && Buffer.isBuffer(s))
      )
        return r("buffer:"), r(s.toString("utf8"));
      if (l !== "object" && l !== "function" && l !== "asyncfunction")
        if (this["_" + l]) this["_" + l](s);
        else {
          if (e.ignoreUnknown) return r("[" + l + "]");
          throw new Error('Unknown object type "' + l + '"');
        }
      else {
        let u = Object.keys(s);
        e.unorderedObjects && (u = u.sort()),
          e.respectType !== !1 &&
            !bl(s) &&
            u.splice(0, 0, "prototype", "__proto__", "letructor"),
          e.excludeKeys &&
            (u = u.filter(function (d) {
              return !e.excludeKeys(d);
            })),
          r("object:" + u.length + ":");
        for (const d of u)
          this.dispatch(d),
            r(":"),
            e.excludeValues || this.dispatch(s[d]),
            r(",");
      }
    },
    _array(s, i) {
      if (
        ((i = typeof i < "u" ? i : e.unorderedArrays !== !1),
        r("array:" + s.length + ":"),
        !i || s.length <= 1)
      ) {
        for (const l of s) this.dispatch(l);
        return;
      }
      const o = [],
        a = s.map((l) => {
          const c = yu(e);
          return c.dispatch(l), o.push(c.getContext()), c.toString();
        });
      return (n = [...n, ...o]), a.sort(), this._array(a, !1);
    },
    _date(s) {
      return r("date:" + s.toJSON());
    },
    _symbol(s) {
      return r("symbol:" + s.toString());
    },
    _error(s) {
      return r("error:" + s.toString());
    },
    _boolean(s) {
      return r("bool:" + s.toString());
    },
    _string(s) {
      r("string:" + s.length + ":"), r(s.toString());
    },
    _function(s) {
      r("fn:"),
        bl(s) ? this.dispatch("[native]") : this.dispatch(s.toString()),
        e.respectFunctionNames !== !1 &&
          this.dispatch("function-name:" + String(s.name)),
        e.respectFunctionProperties && this._object(s);
    },
    _number(s) {
      return r("number:" + s.toString());
    },
    _xml(s) {
      return r("xml:" + s.toString());
    },
    _null() {
      return r("Null");
    },
    _undefined() {
      return r("Undefined");
    },
    _regexp(s) {
      return r("regex:" + s.toString());
    },
    _uint8array(s) {
      return r("uint8array:"), this.dispatch(Array.prototype.slice.call(s));
    },
    _uint8clampedarray(s) {
      return (
        r("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(s))
      );
    },
    _int8array(s) {
      return r("int8array:"), this.dispatch(Array.prototype.slice.call(s));
    },
    _uint16array(s) {
      return r("uint16array:"), this.dispatch(Array.prototype.slice.call(s));
    },
    _int16array(s) {
      return r("int16array:"), this.dispatch(Array.prototype.slice.call(s));
    },
    _uint32array(s) {
      return r("uint32array:"), this.dispatch(Array.prototype.slice.call(s));
    },
    _int32array(s) {
      return r("int32array:"), this.dispatch(Array.prototype.slice.call(s));
    },
    _float32array(s) {
      return r("float32array:"), this.dispatch(Array.prototype.slice.call(s));
    },
    _float64array(s) {
      return r("float64array:"), this.dispatch(Array.prototype.slice.call(s));
    },
    _arraybuffer(s) {
      return r("arraybuffer:"), this.dispatch(new Uint8Array(s));
    },
    _url(s) {
      return r("url:" + s.toString());
    },
    _map(s) {
      r("map:");
      const i = [...s];
      return this._array(i, e.unorderedSets !== !1);
    },
    _set(s) {
      r("set:");
      const i = [...s];
      return this._array(i, e.unorderedSets !== !1);
    },
    _file(s) {
      return r("file:"), this.dispatch([s.name, s.size, s.type, s.lastModfied]);
    },
    _blob() {
      if (e.ignoreUnknown) return r("[blob]");
      throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`);
    },
    _domwindow() {
      return r("domwindow");
    },
    _bigint(s) {
      return r("bigint:" + s.toString());
    },
    _process() {
      return r("process");
    },
    _timer() {
      return r("timer");
    },
    _pipe() {
      return r("pipe");
    },
    _tcp() {
      return r("tcp");
    },
    _udp() {
      return r("udp");
    },
    _tty() {
      return r("tty");
    },
    _statwatcher() {
      return r("statwatcher");
    },
    _securecontext() {
      return r("securecontext");
    },
    _connection() {
      return r("connection");
    },
    _zlib() {
      return r("zlib");
    },
    _context() {
      return r("context");
    },
    _nodescript() {
      return r("nodescript");
    },
    _httpparser() {
      return r("httpparser");
    },
    _dataview() {
      return r("dataview");
    },
    _signal() {
      return r("signal");
    },
    _fsevent() {
      return r("fsevent");
    },
    _tlswrap() {
      return r("tlswrap");
    },
  };
}
function bl(e) {
  return typeof e != "function"
    ? !1
    : /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(
        Function.prototype.toString.call(e)
      ) != null;
}
class Qn {
  constructor(t, n) {
    (t = this.words = t || []),
      (this.sigBytes = n !== void 0 ? n : t.length * 4);
  }
  toString(t) {
    return (t || xm).stringify(this);
  }
  concat(t) {
    if ((this.clamp(), this.sigBytes % 4))
      for (let n = 0; n < t.sigBytes; n++) {
        const r = (t.words[n >>> 2] >>> (24 - (n % 4) * 8)) & 255;
        this.words[(this.sigBytes + n) >>> 2] |=
          r << (24 - ((this.sigBytes + n) % 4) * 8);
      }
    else
      for (let n = 0; n < t.sigBytes; n += 4)
        this.words[(this.sigBytes + n) >>> 2] = t.words[n >>> 2];
    return (this.sigBytes += t.sigBytes), this;
  }
  clamp() {
    (this.words[this.sigBytes >>> 2] &=
      4294967295 << (32 - (this.sigBytes % 4) * 8)),
      (this.words.length = Math.ceil(this.sigBytes / 4));
  }
  clone() {
    return new Qn([...this.words]);
  }
}
const xm = {
    stringify(e) {
      const t = [];
      for (let n = 0; n < e.sigBytes; n++) {
        const r = (e.words[n >>> 2] >>> (24 - (n % 4) * 8)) & 255;
        t.push((r >>> 4).toString(16), (r & 15).toString(16));
      }
      return t.join("");
    },
  },
  Pm = {
    stringify(e) {
      const t =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        n = [];
      for (let r = 0; r < e.sigBytes; r += 3) {
        const s = (e.words[r >>> 2] >>> (24 - (r % 4) * 8)) & 255,
          i = (e.words[(r + 1) >>> 2] >>> (24 - ((r + 1) % 4) * 8)) & 255,
          o = (e.words[(r + 2) >>> 2] >>> (24 - ((r + 2) % 4) * 8)) & 255,
          a = (s << 16) | (i << 8) | o;
        for (let l = 0; l < 4 && r * 8 + l * 6 < e.sigBytes * 8; l++)
          n.push(t.charAt((a >>> (6 * (3 - l))) & 63));
      }
      return n.join("");
    },
  },
  Om = {
    parse(e) {
      const t = e.length,
        n = [];
      for (let r = 0; r < t; r++)
        n[r >>> 2] |= (e.charCodeAt(r) & 255) << (24 - (r % 4) * 8);
      return new Qn(n, t);
    },
  },
  Am = {
    parse(e) {
      return Om.parse(unescape(encodeURIComponent(e)));
    },
  };
class Rm {
  constructor() {
    (this._minBufferSize = 0), (this.blockSize = 512 / 32), this.reset();
  }
  reset() {
    (this._data = new Qn()), (this._nDataBytes = 0);
  }
  _append(t) {
    typeof t == "string" && (t = Am.parse(t)),
      this._data.concat(t),
      (this._nDataBytes += t.sigBytes);
  }
  _doProcessBlock(t, n) {}
  _process(t) {
    let n,
      r = this._data.sigBytes / (this.blockSize * 4);
    t ? (r = Math.ceil(r)) : (r = Math.max((r | 0) - this._minBufferSize, 0));
    const s = r * this.blockSize,
      i = Math.min(s * 4, this._data.sigBytes);
    if (s) {
      for (let o = 0; o < s; o += this.blockSize)
        this._doProcessBlock(this._data.words, o);
      (n = this._data.words.splice(0, s)), (this._data.sigBytes -= i);
    }
    return new Qn(n, i);
  }
}
class $m extends Rm {
  update(t) {
    return this._append(t), this._process(), this;
  }
  finalize(t) {
    t && this._append(t);
  }
}
const Lm = [
    1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372,
    528734635, 1541459225,
  ],
  Mm = [
    1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993,
    -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987,
    1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885,
    -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872,
    -1866530822, -1538233109, -1090935817, -965641998,
  ],
  bn = [];
class Im extends $m {
  constructor() {
    super(), this.reset();
  }
  reset() {
    super.reset(), (this._hash = new Qn([...Lm]));
  }
  _doProcessBlock(t, n) {
    const r = this._hash.words;
    let s = r[0],
      i = r[1],
      o = r[2],
      a = r[3],
      l = r[4],
      c = r[5],
      u = r[6],
      d = r[7];
    for (let f = 0; f < 64; f++) {
      if (f < 16) bn[f] = t[n + f] | 0;
      else {
        const g = bn[f - 15],
          S = ((g << 25) | (g >>> 7)) ^ ((g << 14) | (g >>> 18)) ^ (g >>> 3),
          C = bn[f - 2],
          P = ((C << 15) | (C >>> 17)) ^ ((C << 13) | (C >>> 19)) ^ (C >>> 10);
        bn[f] = S + bn[f - 7] + P + bn[f - 16];
      }
      const h = (l & c) ^ (~l & u),
        m = (s & i) ^ (s & o) ^ (i & o),
        v =
          ((s << 30) | (s >>> 2)) ^
          ((s << 19) | (s >>> 13)) ^
          ((s << 10) | (s >>> 22)),
        b =
          ((l << 26) | (l >>> 6)) ^
          ((l << 21) | (l >>> 11)) ^
          ((l << 7) | (l >>> 25)),
        _ = d + b + h + Mm[f] + bn[f],
        p = v + m;
      (d = u),
        (u = c),
        (c = l),
        (l = (a + _) | 0),
        (a = o),
        (o = i),
        (i = s),
        (s = (_ + p) | 0);
    }
    (r[0] = (r[0] + s) | 0),
      (r[1] = (r[1] + i) | 0),
      (r[2] = (r[2] + o) | 0),
      (r[3] = (r[3] + a) | 0),
      (r[4] = (r[4] + l) | 0),
      (r[5] = (r[5] + c) | 0),
      (r[6] = (r[6] + u) | 0),
      (r[7] = (r[7] + d) | 0);
  }
  finalize(t) {
    super.finalize(t);
    const n = this._nDataBytes * 8,
      r = this._data.sigBytes * 8;
    return (
      (this._data.words[r >>> 5] |= 128 << (24 - (r % 32))),
      (this._data.words[(((r + 64) >>> 9) << 4) + 14] = Math.floor(
        n / 4294967296
      )),
      (this._data.words[(((r + 64) >>> 9) << 4) + 15] = n),
      (this._data.sigBytes = this._data.words.length * 4),
      this._process(),
      this._hash
    );
  }
}
function jm(e) {
  return new Im().finalize(e).toString(Pm);
}
function _l(e, t = {}) {
  const n = typeof e == "string" ? e : km(e, t);
  return jm(n).slice(0, 10);
}
const Dm = {
  path: "/",
  decode: (e) => po(decodeURIComponent(e)),
  encode: (e) =>
    encodeURIComponent(typeof e == "string" ? e : JSON.stringify(e)),
};
function vu(e, t) {
  var i, o;
  const n = { ...Dm, ...t },
    r = Bm(n) || {},
    s = ge(
      (o = r[e]) != null ? o : (i = n.default) == null ? void 0 : i.call(n)
    );
  return (
    jt(s, () => {
      Hm(e, s.value, n);
    }),
    s
  );
}
function Bm(e = {}) {
  return pm(document.cookie, e);
}
function Nm(e, t, n = {}) {
  return t == null ? yl(e, t, { ...n, maxAge: -1 }) : yl(e, t, n);
}
function Hm(e, t, n = {}) {
  document.cookie = Nm(e, t, n);
}
async function bu(e, t = Br()) {
  if (
    (t._routePreloaded || (t._routePreloaded = new Set()),
    t._routePreloaded.has(e))
  )
    return;
  t._routePreloaded.add(e);
  const n = (t._preloadPromises = t._preloadPromises || []);
  if (n.length > 4) return Promise.all(n).then(() => bu(e, t));
  const r = t
    .resolve(e)
    .matched.map((s) => {
      var i;
      return (i = s.components) == null ? void 0 : i.default;
    })
    .filter((s) => typeof s == "function");
  for (const s of r) {
    const i = Promise.resolve(s())
      .catch(() => {})
      .finally(() => n.splice(n.indexOf(i)));
    n.push(i);
  }
  await Promise.all(n);
}
const Fm = "modulepreload",
  zm = function (e, t) {
    return e.startsWith(".") ? new URL(e, t).href : e;
  },
  wl = {},
  K = function (t, n, r) {
    if (!n || n.length === 0) return t();
    const s = document.getElementsByTagName("link");
    return Promise.all(
      n.map((i) => {
        if (((i = zm(i, r)), i in wl)) return;
        wl[i] = !0;
        const o = i.endsWith(".css"),
          a = o ? '[rel="stylesheet"]' : "";
        if (!!r)
          for (let u = s.length - 1; u >= 0; u--) {
            const d = s[u];
            if (d.href === i && (!o || d.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${i}"]${a}`)) return;
        const c = document.createElement("link");
        if (
          ((c.rel = o ? "stylesheet" : Fm),
          o || ((c.as = "script"), (c.crossOrigin = "")),
          (c.href = i),
          document.head.appendChild(c),
          o)
        )
          return new Promise((u, d) => {
            c.addEventListener("load", u),
              c.addEventListener("error", () =>
                d(new Error(`Unable to preload CSS for ${i}`))
              );
          });
      })
    ).then(() => t());
  };
function Sl(e, t = {}) {
  const n = Um(e, t),
    r = Ee(),
    s = (r._payloadCache = r._payloadCache || {});
  return s[e] || (s[e] = Vm(n).then((i) => i || (delete s[e], null))), s[e];
}
function Um(e, t = {}) {
  const n = new URL(e, "http://localhost");
  if (n.search)
    throw new Error("Payload URL cannot contain search params: " + e);
  if (n.host !== "localhost")
    throw new Error("Payload URL cannot contain host: " + e);
  const r = t.hash || (t.fresh ? Date.now() : "");
  return Ht(
    hn().app.baseURL,
    n.pathname,
    r ? `_payload.${r}.js` : "_payload.js"
  );
}
async function Vm(e) {
  const t = await K(() => import(e), [], import.meta.url).catch((n) => {
    console.warn("[nuxt] Cannot load payload ", e, n);
  });
  return (t == null ? void 0 : t.default) || null;
}
function qm() {
  return !!Ee().payload.prerenderedAt;
}
const Wm = (...e) => e.find((t) => t !== void 0),
  Km = "noopener noreferrer",
  Gm =
    globalThis.requestIdleCallback ||
    ((e) => {
      const t = Date.now(),
        n = {
          didTimeout: !1,
          timeRemaining: () => Math.max(0, 50 - (Date.now() - t)),
        };
      return setTimeout(() => {
        e(n);
      }, 1);
    }),
  Ym =
    globalThis.cancelIdleCallback ||
    ((e) => {
      clearTimeout(e);
    });
function _u(e) {
  const t = e.componentName || "NuxtLink";
  return Ft({
    name: t,
    props: {
      to: { type: [String, Object], default: void 0, required: !1 },
      href: { type: [String, Object], default: void 0, required: !1 },
      target: { type: String, default: void 0, required: !1 },
      rel: { type: String, default: void 0, required: !1 },
      noRel: { type: Boolean, default: void 0, required: !1 },
      prefetch: { type: Boolean, default: void 0, required: !1 },
      noPrefetch: { type: Boolean, default: void 0, required: !1 },
      activeClass: { type: String, default: void 0, required: !1 },
      exactActiveClass: { type: String, default: void 0, required: !1 },
      prefetchedClass: { type: String, default: void 0, required: !1 },
      replace: { type: Boolean, default: void 0, required: !1 },
      ariaCurrentValue: { type: String, default: void 0, required: !1 },
      external: { type: Boolean, default: void 0, required: !1 },
      custom: { type: Boolean, default: void 0, required: !1 },
    },
    setup(n, { slots: r }) {
      const s = Br(),
        i = Me(() => n.to || n.href || ""),
        o = Me(() =>
          n.external || (n.target && n.target !== "_self")
            ? !0
            : typeof i.value == "object"
            ? !1
            : i.value === "" || Jn(i.value, !0)
        ),
        a = ge(!1),
        l = ge(null);
      if (
        n.prefetch !== !1 &&
        n.noPrefetch !== !0 &&
        typeof i.value == "string" &&
        n.target !== "_blank" &&
        !Jm()
      ) {
        const u = Ee(),
          d = Xm();
        let f,
          h = null;
        fn(() => {
          f = Gm(() => {
            var m;
            (m = l == null ? void 0 : l.value) != null &&
              m.tagName &&
              (h = d.observe(l.value, async () => {
                h == null || h(),
                  (h = null),
                  await Promise.all([
                    u.hooks.callHook("link:prefetch", i.value).catch(() => {}),
                    !o.value && bu(i.value, s).catch(() => {}),
                  ]),
                  (a.value = !0);
              }));
          });
        }),
          Rn(() => {
            f && Ym(f), h == null || h(), (h = null);
          });
      }
      return () => {
        var h, m, v;
        if (!o.value)
          return de(
            $r("RouterLink"),
            {
              ref: (b) => {
                l.value = b == null ? void 0 : b.$el;
              },
              to: i.value,
              ...(a.value && !n.custom
                ? { class: n.prefetchedClass || e.prefetchedClass }
                : {}),
              activeClass: n.activeClass || e.activeClass,
              exactActiveClass: n.exactActiveClass || e.exactActiveClass,
              replace: n.replace,
              ariaCurrentValue: n.ariaCurrentValue,
              custom: n.custom,
            },
            r.default
          );
        const c =
            typeof i.value == "object"
              ? (m = (h = s.resolve(i.value)) == null ? void 0 : h.href) != null
                ? m
                : null
              : i.value || null,
          u = n.target || null,
          d = n.noRel
            ? null
            : Wm(n.rel, e.externalRelAttribute, c ? Km : "") || null,
          f = () => Cm(c, { replace: n.replace });
        return n.custom
          ? r.default
            ? r.default({
                href: c,
                navigate: f,
                route: s.resolve(c),
                rel: d,
                target: u,
                isExternal: o.value,
                isActive: !1,
                isExactActive: !1,
              })
            : null
          : de(
              "a",
              { ref: l, href: c, rel: d, target: u },
              (v = r.default) == null ? void 0 : v.call(r)
            );
      };
    },
  });
}
const Is = _u({ componentName: "NuxtLink" });
function Xm() {
  const e = Ee();
  if (e._observer) return e._observer;
  let t = null;
  const n = new Map(),
    r = (i, o) => (
      t ||
        (t = new IntersectionObserver((a) => {
          for (const l of a) {
            const c = n.get(l.target);
            (l.isIntersecting || l.intersectionRatio > 0) && c && c();
          }
        })),
      n.set(i, o),
      t.observe(i),
      () => {
        n.delete(i),
          t.unobserve(i),
          n.size === 0 && (t.disconnect(), (t = null));
      }
    );
  return (e._observer = { observe: r });
}
function Jm() {
  const e = navigator.connection;
  return !!(e && (e.saveData || /2g/.test(e.effectiveType)));
}
const qS = Object.freeze(
  Object.defineProperty(
    { __proto__: null, defineNuxtLink: _u, default: Is },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function Qs(e) {
  return e !== null && typeof e == "object";
}
function Li(e, t, n = ".", r) {
  if (!Qs(t)) return Li(e, {}, n, r);
  const s = Object.assign({}, t);
  for (const i in e) {
    if (i === "__proto__" || i === "constructor") continue;
    const o = e[i];
    o != null &&
      ((r && r(s, i, o, n)) ||
        (Array.isArray(o) && Array.isArray(s[i])
          ? (s[i] = [...o, ...s[i]])
          : Qs(o) && Qs(s[i])
          ? (s[i] = Li(o, s[i], (n ? `${n}.` : "") + i.toString(), r))
          : (s[i] = o)));
  }
  return s;
}
function wu(e) {
  return (...t) => t.reduce((n, r) => Li(n, r, "", e), {});
}
const js = wu(),
  Qm = wu((e, t, n, r) => {
    if (typeof e[t] < "u" && typeof n == "function")
      return (e[t] = n(e[t])), !0;
  }),
  Zm = {};
Qm(Zm);
const Zs = {
    ContentDoc: oe(() =>
      K(
        () => import("./ContentDoc.e8eccf28.js"),
        ["./ContentDoc.e8eccf28.js", "./ContentQuery.9c156d7e.js"],
        import.meta.url
      ).then((e) => e.default || e)
    ),
    ContentList: oe(() =>
      K(
        () => import("./ContentList.7072a538.js"),
        ["./ContentList.7072a538.js", "./ContentQuery.9c156d7e.js"],
        import.meta.url
      ).then((e) => e.default || e)
    ),
    ContentNavigation: oe(() =>
      K(
        () => import("./ContentNavigation.8cddbccb.js").then((e) => e.C),
        [
          "./ContentNavigation.8cddbccb.js",
          "./SearchResults.vue_vue_type_style_index_0_scoped_fbfddc59_lang.8d17b183.js",
          "./SearchResults.cf85b9d0.css",
          "./nuxt-img.6cd8cff3.js",
          "./AnimalSlider.vue_vue_type_style_index_0_scoped_4ed309ee_lang.0e89288c.js",
          "./navigation.min.304073bc.js",
          "./navigation.079e38c4.css",
          "./AnimalSlider.f6244b5d.css",
          "./AnimalSliderCard.vue_vue_type_style_index_0_scoped_2bb4687e_lang.25a381c7.js",
          "./AnimalSliderCard.7bfa47f6.css",
          "./LearnMoreBlock.vue_vue_type_style_index_0_scoped_bb3c97e0_lang.4d6f0884.js",
          "./LearnMoreBlock.b08c497b.css",
          "./InfoCard.vue_vue_type_style_index_0_scoped_b1c8dc52_lang.08b16729.js",
          "./InfoCard.26090f6a.css",
          "./PageSearch.vue_vue_type_style_index_0_scoped_99e80430_lang.a8536c95.js",
          "./PageSearch.cc210a0f.css",
          "./PageArticle.vue_vue_type_style_index_0_scoped_d3e8b27d_lang.2510b67f.js",
          "./PageArticle.a907c3df.css",
          "./RecipeSlider.vue_vue_type_style_index_0_scoped_23ef5c26_lang.99e026dc.js",
          "./RecipeSlider.1de5e8bf.css",
          "./SourceListItem.vue_vue_type_style_index_0_scoped_764c6338_lang.767669ff.js",
          "./SourceListItem.c9ca6a57.css",
          "./TransitionExpand.vue_vue_type_style_index_0_scoped_ab5478b5_lang.c2805c90.js",
          "./TransitionExpand.358b7368.css",
          "./ContentDoc.e8eccf28.js",
          "./ContentQuery.9c156d7e.js",
          "./ContentList.7072a538.js",
          "./ContentSlot.e38eabf3.js",
          "./DocumentDrivenEmpty.e795f784.js",
          "./DocumentDrivenNotFound.76a147b1.js",
          "./Markdown.d042ba3f.js",
          "./ProseCode.a6213759.js",
          "./ProseCode.e63e49c6.css",
          "./ContentNavigation.0dbea775.css",
        ],
        import.meta.url
      ).then((e) => e.default || e)
    ),
    ContentQuery: oe(() =>
      K(() => import("./ContentQuery.9c156d7e.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ContentRenderer: oe(() =>
      K(() => Promise.resolve().then(() => c0), void 0, import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ContentRendererMarkdown: oe(() =>
      K(() => Promise.resolve().then(() => a0), void 0, import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ContentSlot: oe(() =>
      K(() => import("./ContentSlot.e38eabf3.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    DocumentDrivenEmpty: oe(() =>
      K(
        () => import("./DocumentDrivenEmpty.e795f784.js"),
        [],
        import.meta.url
      ).then((e) => e.default || e)
    ),
    DocumentDrivenNotFound: oe(() =>
      K(
        () => import("./DocumentDrivenNotFound.76a147b1.js"),
        [],
        import.meta.url
      ).then((e) => e.default || e)
    ),
    Markdown: oe(() =>
      K(
        () => import("./Markdown.d042ba3f.js"),
        ["./Markdown.d042ba3f.js", "./ContentSlot.e38eabf3.js"],
        import.meta.url
      ).then((e) => e.default || e)
    ),
    ProseA: oe(() =>
      K(() => import("./ProseA.284280fc.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseBlockquote: oe(() =>
      K(
        () => import("./ProseBlockquote.56e267a6.js"),
        [],
        import.meta.url
      ).then((e) => e.default || e)
    ),
    ProseCode: oe(() =>
      K(
        () => import("./ProseCode.a6213759.js"),
        ["./ProseCode.a6213759.js", "./ProseCode.e63e49c6.css"],
        import.meta.url
      ).then((e) => e.default || e)
    ),
    ProseCodeInline: oe(() =>
      K(
        () => import("./ProseCodeInline.6d38f7f1.js"),
        [],
        import.meta.url
      ).then((e) => e.default || e)
    ),
    ProseEm: oe(() =>
      K(() => import("./ProseEm.9c819506.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseH1: oe(() =>
      K(() => import("./ProseH1.e17941d0.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseH2: oe(() =>
      K(() => import("./ProseH2.b5599258.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseH3: oe(() =>
      K(() => import("./ProseH3.9b7dbfb1.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseH4: oe(() =>
      K(() => import("./ProseH4.53f30bd9.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseH5: oe(() =>
      K(() => import("./ProseH5.81f4e0d8.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseH6: oe(() =>
      K(() => import("./ProseH6.a0a3adff.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseHr: oe(() =>
      K(() => import("./ProseHr.d1f1e9c2.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseImg: oe(() =>
      K(() => import("./ProseImg.167d1a54.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseLi: oe(() =>
      K(() => import("./ProseLi.f516edb9.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseOl: oe(() =>
      K(() => import("./ProseOl.29347b0d.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseP: oe(() =>
      K(() => import("./ProseP.1473a7b6.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseStrong: oe(() =>
      K(() => import("./ProseStrong.4904f7d1.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseTable: oe(() =>
      K(() => import("./ProseTable.75f463e3.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseTbody: oe(() =>
      K(() => import("./ProseTbody.c2adb8e0.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseTd: oe(() =>
      K(() => import("./ProseTd.5b775248.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseTh: oe(() =>
      K(() => import("./ProseTh.d9e6c6b5.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseThead: oe(() =>
      K(() => import("./ProseThead.213bf9c6.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseTr: oe(() =>
      K(() => import("./ProseTr.b73bb7cf.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
    ProseUl: oe(() =>
      K(() => import("./ProseUl.822ee9e2.js"), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
  },
  eg = pn((e) => {
    for (const t in Zs)
      e.vueApp.component(t, Zs[t]), e.vueApp.component("Lazy" + t, Zs[t]);
  }),
  tg = ["script", "style", "noscript"],
  ng = ["base", "meta", "link", "style", "script", "noscript"],
  rg = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs"];
function sg(e, t) {
  const { props: n, tag: r } = e;
  if (rg.includes(r)) return r;
  if (r === "link" && n.rel === "canonical") return "canonical";
  if (n.charset) return "charset";
  const s = ["id"];
  r === "meta" && s.push("name", "property", "http-equiv");
  for (const i of s)
    if (typeof n[i] < "u") {
      const o = String(n[i]);
      return t && !t(o) ? !1 : `${r}:${i}:${o}`;
    }
  return !1;
}
const Zr = (e, t) => {
  const { tag: n, $el: r } = e;
  !r ||
    (Object.entries(n.props).forEach(([s, i]) => {
      i = String(i);
      const o = `attr:${s}`;
      if (s === "class") {
        if (!i) return;
        for (const a of i.split(" ")) {
          const l = `${o}:${a}`;
          t && t(e, l, () => r.classList.remove(a)),
            r.classList.contains(a) || r.classList.add(a);
        }
        return;
      }
      t && !s.startsWith("data-h-") && t(e, o, () => r.removeAttribute(s)),
        r.getAttribute(s) !== i && r.setAttribute(s, i);
    }),
    tg.includes(n.tag) &&
      r.innerHTML !== (n.children || "") &&
      (r.innerHTML = n.children || ""));
};
function yo(e) {
  let t = 9;
  for (let n = 0; n < e.length; ) t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
  return ((t ^ (t >>> 9)) + 65536).toString(16).substring(1, 8).toLowerCase();
}
async function Su(e, t = {}) {
  var u, d;
  const n = { shouldRender: !0 };
  if ((await e.hooks.callHook("dom:beforeRender", n), !n.shouldRender)) return;
  const r = t.document || window.document,
    s = e._popSideEffectQueue();
  e.headEntries()
    .map((f) => f._sde)
    .forEach((f) => {
      Object.entries(f).forEach(([h, m]) => {
        s[h] = m;
      });
    });
  const i = async (f) => {
      const h = e.headEntries().find((v) => v._i === f._e),
        m = {
          renderId:
            f._d || yo(JSON.stringify({ ...f, _e: void 0, _p: void 0 })),
          $el: null,
          shouldRender: !0,
          tag: f,
          entry: h,
          staleSideEffects: s,
        };
      return await e.hooks.callHook("dom:beforeRenderTag", m), m;
    },
    o = [],
    a = { body: [], head: [] },
    l = (f, h, m) => {
      (h = `${f.renderId}:${h}`), f.entry && (f.entry._sde[h] = m), delete s[h];
    },
    c = (f) => {
      (e._elMap[f.renderId] = f.$el),
        o.push(f),
        l(f, "el", () => {
          var h;
          (h = f.$el) == null || h.remove(), delete e._elMap[f.renderId];
        });
    };
  for (const f of await e.resolveTags()) {
    const h = await i(f);
    if (!h.shouldRender) continue;
    const { tag: m } = h;
    if (m.tag === "title") {
      (r.title = m.children || ""), o.push(h);
      continue;
    }
    if (m.tag === "htmlAttrs" || m.tag === "bodyAttrs") {
      (h.$el = r[m.tag === "htmlAttrs" ? "documentElement" : "body"]),
        Zr(h, l),
        o.push(h);
      continue;
    }
    if (
      ((h.$el = e._elMap[h.renderId]),
      !h.$el &&
        m._hash &&
        (h.$el = r.querySelector(
          `${
            (u = m.tagPosition) != null && u.startsWith("body")
              ? "body"
              : "head"
          } > ${m.tag}[data-h-${m._hash}]`
        )),
      h.$el)
    ) {
      h.tag._d && Zr(h), c(h);
      continue;
    }
    (h.$el = r.createElement(m.tag)),
      Zr(h),
      a[
        (d = m.tagPosition) != null && d.startsWith("body") ? "body" : "head"
      ].push(h);
  }
  Object.entries(a).forEach(([f, h]) => {
    if (!!h.length) {
      for (const m of [...r[f].children].reverse()) {
        const v = m.tagName.toLowerCase();
        if (!ng.includes(v)) continue;
        const b = sg({
            tag: v,
            props: m
              .getAttributeNames()
              .reduce((p, g) => ({ ...p, [g]: m.getAttribute(g) }), {}),
          }),
          _ = h.findIndex((p) => p && (p.tag._d === b || m.isEqualNode(p.$el)));
        if (_ !== -1) {
          const p = h[_];
          (p.$el = m), Zr(p), c(p), delete h[_];
        }
      }
      h.forEach((m) => {
        if (!!m.$el) {
          switch (m.tag.tagPosition) {
            case "bodyClose":
              r.body.appendChild(m.$el);
              break;
            case "bodyOpen":
              r.body.insertBefore(m.$el, r.body.firstChild);
              break;
            case "head":
            default:
              r.head.appendChild(m.$el);
              break;
          }
          c(m);
        }
      });
    }
  });
  for (const f of o) await e.hooks.callHook("dom:renderTag", f);
  Object.values(s).forEach((f) => f());
}
let ss = null;
async function ig(e, t = {}) {
  function n() {
    return (ss = null), Su(e, t);
  }
  const r = t.delayFn || ((s) => setTimeout(s, 10));
  return (ss = ss || new Promise((s) => r(() => s(n()))));
}
const og = {
    __proto__: null,
    debouncedRenderDOMHead: ig,
    get domUpdatePromise() {
      return ss;
    },
    hashCode: yo,
    renderDOMHead: Su,
  },
  lg = [
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
  ag = ["tagPosition", "tagPriority", "tagDuplicateStrategy"];
async function cg(e, t) {
  const n = { tag: e, props: {} };
  return e === "title" || e === "titleTemplate"
    ? ((n.children = t instanceof Promise ? await t : t), n)
    : ((n.props = await ug({ ...t })),
      ["children", "innerHtml", "innerHTML"].forEach((r) => {
        typeof n.props[r] < "u" &&
          ((n.children = n.props[r]),
          typeof n.children == "object" &&
            (n.children = JSON.stringify(n.children)),
          delete n.props[r]);
      }),
      Object.keys(n.props)
        .filter((r) => ag.includes(r))
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
            const i = { ...n, props: { ...n.props } };
            return (
              (i.props.content = r),
              (i.key = `${n.props.name || n.props.property}:${s}`),
              i
            );
          })
        : n);
}
async function ug(e) {
  for (const t of Object.keys(e))
    e[t] instanceof Promise && (e[t] = await e[t]),
      String(e[t]) === "true"
        ? (e[t] = "")
        : String(e[t]) === "false" && delete e[t];
  return e;
}
const Cl = (e) => {
    if (typeof e.tagPriority == "number") return e.tagPriority;
    switch (e.tagPriority) {
      case "critical":
        return 2;
      case "high":
        return 9;
      case "low":
        return 12;
    }
    switch (e.tag) {
      case "base":
        return -1;
      case "title":
        return 1;
      case "meta":
        return e.props.charset
          ? -2
          : e.props["http-equiv"] === "content-security-policy"
          ? 0
          : 10;
      default:
        return 10;
    }
  },
  dg = (e, t) => Cl(e) - Cl(t),
  fg = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs"];
function pg(e, t) {
  const { props: n, tag: r } = e;
  if (fg.includes(r)) return r;
  if (r === "link" && n.rel === "canonical") return "canonical";
  if (n.charset) return "charset";
  const s = ["id"];
  r === "meta" && s.push("name", "property", "http-equiv");
  for (const i of s)
    if (typeof n[i] < "u") {
      const o = String(n[i]);
      return t && !t(o) ? !1 : `${r}:${i}:${o}`;
    }
  return !1;
}
const El = (e, t) =>
  e == null
    ? t || null
    : typeof e == "function"
    ? e(t)
    : e.replace("%s", t != null ? t : "");
function hg(e) {
  let t = e.findIndex((r) => r.tag === "titleTemplate");
  const n = e.findIndex((r) => r.tag === "title");
  if (n !== -1 && t !== -1) {
    const r = El(e[t].children, e[n].children);
    r !== null ? (e[n].children = r || e[n].children) : delete e[n];
  } else if (t !== -1) {
    const r = El(e[t].children);
    r !== null && ((e[t].children = r), (e[t].tag = "title"), (t = -1));
  }
  return t !== -1 && delete e[t], e.filter(Boolean);
}
const mg = (e) => {
    e = e || {};
    const t = e.dedupeKeys || ["hid", "vmid", "key"];
    return {
      hooks: {
        "tag:normalise": function ({ tag: n }) {
          t.forEach((s) => {
            n.props[s] && ((n.key = n.props[s]), delete n.props[s]);
          });
          const r = n.key ? `${n.tag}:${n.key}` : pg(n);
          r && (n._d = r);
        },
        "tags:resolve": function (n) {
          const r = {};
          n.tags.forEach((s) => {
            let i = s._d || s._p;
            const o = r[i];
            if (o) {
              let a = s == null ? void 0 : s.tagDuplicateStrategy;
              if (
                (!a &&
                  (s.tag === "htmlAttrs" || s.tag === "bodyAttrs") &&
                  (a = "merge"),
                a === "merge")
              ) {
                const c = o.props;
                ["class", "style"].forEach((u) => {
                  s.props[u] &&
                    c[u] &&
                    (u === "style" && !c[u].endsWith(";") && (c[u] += ";"),
                    (s.props[u] = `${c[u]} ${s.props[u]}`));
                }),
                  (r[i].props = { ...c, ...s.props });
                return;
              } else s._e === o._e && (i = s._d = `${i}:${s._p}`);
              const l = Object.keys(s.props).length;
              if (
                (l === 0 || (l === 1 && typeof s.props["data-h-key"] < "u")) &&
                !s.children
              ) {
                delete r[i];
                return;
              }
            }
            r[i] = s;
          }),
            (n.tags = Object.values(r));
        },
      },
    };
  },
  gg = () => ({
    hooks: {
      "tags:resolve": (e) => {
        const t = (n) => {
          var r;
          return (r = e.tags.find((s) => s._d === n)) == null ? void 0 : r._p;
        };
        for (const n of e.tags) {
          if (!n.tagPriority || typeof n.tagPriority == "number") continue;
          const r = [
            { prefix: "before:", offset: -1 },
            { prefix: "after:", offset: 1 },
          ];
          for (const { prefix: s, offset: i } of r)
            if (n.tagPriority.startsWith(s)) {
              const o = n.tagPriority.replace(s, ""),
                a = t(o);
              typeof a < "u" && (n._p = a + i);
            }
        }
        e.tags.sort((n, r) => n._p - r._p).sort(dg);
      },
    },
  }),
  yg = () => ({
    hooks: {
      "tags:resolve": (e) => {
        e.tags = hg(e.tags);
      },
    },
  }),
  vg = () => ({
    hooks: {
      "tag:normalise": function ({ tag: e }) {
        typeof e.props.body < "u" &&
          ((e.tagPosition = "bodyClose"), delete e.props.body);
      },
    },
  }),
  bg = typeof window < "u",
  _g = () => ({
    hooks: {
      "tag:normalise": (e) => {
        var s, i;
        const { tag: t, entry: n } = e,
          r = typeof t.props._dynamic < "u";
        !Cu.includes(t.tag) ||
          !t.key ||
          ((t._hash = yo(JSON.stringify({ tag: t.tag, key: t.key }))),
          !(
            bg ||
            ((i = (s = Tu()) == null ? void 0 : s.resolvedOptions) == null
              ? void 0
              : i.document)
          ) &&
            (n._m === "server" || r) &&
            (t.props[`data-h-${t._hash}`] = ""));
      },
      "tags:resolve": (e) => {
        e.tags = e.tags.map((t) => (delete t.props._dynamic, t));
      },
    },
  }),
  wg = (e) => ({
    hooks: {
      "entries:updated": function (t) {
        if (
          typeof (e == null ? void 0 : e.document) > "u" &&
          typeof window > "u"
        )
          return;
        let n = e == null ? void 0 : e.delayFn;
        !n && typeof requestAnimationFrame < "u" && (n = requestAnimationFrame),
          Promise.resolve()
            .then(function () {
              return og;
            })
            .then(({ debouncedRenderDOMHead: r }) => {
              r(t, {
                document: (e == null ? void 0 : e.document) || window.document,
                delayFn: n,
              });
            });
      },
    },
  }),
  Sg = () => {
    const e = (t, n) => {
      const r = {},
        s = {};
      Object.entries(n.props).forEach(([o, a]) => {
        o.startsWith("on") && typeof a == "function" ? (s[o] = a) : (r[o] = a);
      });
      let i;
      return (
        t === "dom" &&
          n.tag === "script" &&
          typeof r.src == "string" &&
          typeof s.onload < "u" &&
          ((i = r.src), delete r.src),
        { props: r, eventHandlers: s, delayedSrc: i }
      );
    };
    return {
      hooks: {
        "ssr:render": function (t) {
          t.tags = t.tags.map((n) => ((n.props = e("ssr", n).props), n));
        },
        "dom:beforeRenderTag": function (t) {
          const { props: n, eventHandlers: r, delayedSrc: s } = e("dom", t.tag);
          !Object.keys(r).length ||
            ((t.tag.props = n),
            (t.tag._eventHandlers = r),
            (t.tag._delayedSrc = s));
        },
        "dom:renderTag": function (t) {
          const n = t.$el;
          if (!t.tag._eventHandlers || !n) return;
          const r =
            t.tag.tag === "bodyAttrs" && typeof window < "u" ? window : n;
          Object.entries(t.tag._eventHandlers).forEach(([s, i]) => {
            const o = `${t.tag._d || t.tag._p}:${s}`,
              a = s.slice(2).toLowerCase(),
              l = `data-h-${a}`;
            if ((delete t.staleSideEffects[o], n.hasAttribute(l))) return;
            const c = i;
            n.setAttribute(l, ""),
              r.addEventListener(a, c),
              t.entry &&
                (t.entry._sde[o] = () => {
                  r.removeEventListener(a, c), n.removeAttribute(l);
                });
          }),
            t.tag._delayedSrc && n.setAttribute("src", t.tag._delayedSrc);
        },
      },
    };
  };
function Cg(e) {
  return Array.isArray(e) ? e : [e];
}
const Cu = ["base", "meta", "link", "style", "script", "noscript"];
let Eu;
const Eg = (e) => (Eu = e),
  Tu = () => Eu,
  Tg = 10;
async function kg(e) {
  const t = [];
  return (
    Object.entries(e.resolvedInput || e.input)
      .filter(([n, r]) => typeof r < "u" && lg.includes(n))
      .forEach(([n, r]) => {
        const s = Cg(r);
        t.push(...s.map((i) => cg(n, i)).flat());
      }),
    (await Promise.all(t))
      .flat()
      .map((n, r) => ((n._e = e._i), (n._p = (e._i << Tg) + r), n))
  );
}
const xg = () => [mg(), gg(), yg(), _g(), Sg(), vg()],
  Pg = (e = {}) => [
    wg({
      document: e == null ? void 0 : e.document,
      delayFn: e == null ? void 0 : e.domDelayFn,
    }),
  ];
function Og(e = {}) {
  const t = Ag({
    ...e,
    plugins: [...Pg(e), ...((e == null ? void 0 : e.plugins) || [])],
  });
  return Eg(t), t;
}
function Ag(e = {}) {
  let t = [],
    n = {},
    r = 0;
  const s = hu();
  e != null && e.hooks && s.addHooks(e.hooks),
    (e.plugins = [...xg(), ...((e == null ? void 0 : e.plugins) || [])]),
    e.plugins.forEach((a) => a.hooks && s.addHooks(a.hooks));
  const i = () => s.callHook("entries:updated", o),
    o = {
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
          i(),
          {
            dispose() {
              t = t.filter((u) =>
                u._i !== c._i
                  ? !0
                  : ((n = { ...n, ...(u._sde || {}) }), (u._sde = {}), i(), !1)
              );
            },
            patch(u) {
              t = t.map(
                (d) => (d._i === c._i && ((c.input = d.input = u), i()), d)
              );
            },
          }
        );
      },
      async resolveTags() {
        const a = { tags: [], entries: [...t] };
        await s.callHook("entries:resolve", a);
        for (const l of a.entries)
          for (const c of await kg(l)) {
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
  return o.hooks.callHook("init", o), o;
}
function Rg(e) {
  return typeof e == "function" ? e() : Ve(e);
}
function ys(e, t = "") {
  if (e instanceof Promise) return e;
  const n = Rg(e);
  if (!e || !n) return n;
  if (Array.isArray(n)) return n.map((r) => ys(r, t));
  if (typeof n == "object") {
    let r = !1;
    const s = Object.fromEntries(
      Object.entries(n).map(([i, o]) =>
        i === "titleTemplate" || i.startsWith("on")
          ? [i, Ve(o)]
          : ((typeof o == "function" || Ae(o)) && (r = !0), [i, ys(o, i)])
      )
    );
    return r && Cu.includes(String(t)) && (s._dynamic = !0), s;
  }
  return n;
}
const $g = fo.startsWith("3"),
  Lg = typeof window < "u",
  ku = "usehead";
function vo() {
  return (Yt() && wt(ku)) || Tu();
}
function Mg(e = {}) {
  const t = Og({
      ...e,
      domDelayFn: (r) => setTimeout(() => An(() => r()), 10),
      plugins: [Ig(), ...((e == null ? void 0 : e.plugins) || [])],
    }),
    n = {
      install(r) {
        $g && ((r.config.globalProperties.$unhead = t), r.provide(ku, t));
      },
    };
  return (t.install = n.install), t;
}
const Ig = () => ({
  hooks: {
    "entries:resolve": function (e) {
      for (const t of e.entries) t.resolvedInput = ys(t.input);
    },
  },
});
function jg(e, t = {}) {
  const n = vo(),
    r = ge({});
  Vf(() => {
    r.value = ys(e);
  });
  const s = n.push(r.value, t);
  return (
    jt(r, (o) => s.patch(o)),
    Yt() &&
      Rn(() => {
        s.dispose();
      }),
    s
  );
}
function Dg(e, t = {}) {
  return vo().push(e, t);
}
function xu(e, t = {}) {
  var r;
  const n = vo();
  if (n) {
    const s = Lg || !!((r = n.resolvedOptions) != null && r.document);
    return (t.mode === "server" && s) || (t.mode === "client" && !s)
      ? void 0
      : s
      ? jg(e, t)
      : Dg(e, t);
  }
}
const Bg = ["script", "style", "noscript"],
  Ng = ["base", "meta", "link", "style", "script", "noscript"],
  Hg = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs"];
function Fg(e, t) {
  const { props: n, tag: r } = e;
  if (Hg.includes(r)) return r;
  if (r === "link" && n.rel === "canonical") return "canonical";
  if (n.charset) return "charset";
  const s = ["id"];
  r === "meta" && s.push("name", "property", "http-equiv");
  for (const i of s)
    if (typeof n[i] < "u") {
      const o = String(n[i]);
      return t && !t(o) ? !1 : `${r}:${i}:${o}`;
    }
  return !1;
}
const es = (e, t) => {
  const { tag: n, $el: r } = e;
  !r ||
    (Object.entries(n.props).forEach(([s, i]) => {
      i = String(i);
      const o = `attr:${s}`;
      if (s === "class") {
        if (!i) return;
        for (const a of i.split(" ")) {
          const l = `${o}:${a}`;
          t && t(e, l, () => r.classList.remove(a)),
            r.classList.contains(a) || r.classList.add(a);
        }
        return;
      }
      t && !s.startsWith("data-h-") && t(e, o, () => r.removeAttribute(s)),
        r.getAttribute(s) !== i && r.setAttribute(s, i);
    }),
    Bg.includes(n.tag) &&
      r.innerHTML !== (n.children || "") &&
      (r.innerHTML = n.children || ""));
};
function zg(e) {
  let t = 9;
  for (let n = 0; n < e.length; ) t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
  return ((t ^ (t >>> 9)) + 65536).toString(16).substring(1, 8).toLowerCase();
}
async function Pu(e, t = {}) {
  var u, d;
  const n = { shouldRender: !0 };
  if ((await e.hooks.callHook("dom:beforeRender", n), !n.shouldRender)) return;
  const r = t.document || window.document,
    s = e._popSideEffectQueue();
  e.headEntries()
    .map((f) => f._sde)
    .forEach((f) => {
      Object.entries(f).forEach(([h, m]) => {
        s[h] = m;
      });
    });
  const i = async (f) => {
      const h = e.headEntries().find((v) => v._i === f._e),
        m = {
          renderId:
            f._d || zg(JSON.stringify({ ...f, _e: void 0, _p: void 0 })),
          $el: null,
          shouldRender: !0,
          tag: f,
          entry: h,
          staleSideEffects: s,
        };
      return await e.hooks.callHook("dom:beforeRenderTag", m), m;
    },
    o = [],
    a = { body: [], head: [] },
    l = (f, h, m) => {
      (h = `${f.renderId}:${h}`), f.entry && (f.entry._sde[h] = m), delete s[h];
    },
    c = (f) => {
      (e._elMap[f.renderId] = f.$el),
        o.push(f),
        l(f, "el", () => {
          var h;
          (h = f.$el) == null || h.remove(), delete e._elMap[f.renderId];
        });
    };
  for (const f of await e.resolveTags()) {
    const h = await i(f);
    if (!h.shouldRender) continue;
    const { tag: m } = h;
    if (m.tag === "title") {
      (r.title = m.children || ""), o.push(h);
      continue;
    }
    if (m.tag === "htmlAttrs" || m.tag === "bodyAttrs") {
      (h.$el = r[m.tag === "htmlAttrs" ? "documentElement" : "body"]),
        es(h, l),
        o.push(h);
      continue;
    }
    if (
      ((h.$el = e._elMap[h.renderId]),
      !h.$el &&
        m._hash &&
        (h.$el = r.querySelector(
          `${
            (u = m.tagPosition) != null && u.startsWith("body")
              ? "body"
              : "head"
          } > ${m.tag}[data-h-${m._hash}]`
        )),
      h.$el)
    ) {
      h.tag._d && es(h), c(h);
      continue;
    }
    (h.$el = r.createElement(m.tag)),
      es(h),
      a[
        (d = m.tagPosition) != null && d.startsWith("body") ? "body" : "head"
      ].push(h);
  }
  Object.entries(a).forEach(([f, h]) => {
    if (!!h.length) {
      for (const m of [...r[f].children].reverse()) {
        const v = m.tagName.toLowerCase();
        if (!Ng.includes(v)) continue;
        const b = Fg({
            tag: v,
            props: m
              .getAttributeNames()
              .reduce((p, g) => ({ ...p, [g]: m.getAttribute(g) }), {}),
          }),
          _ = h.findIndex((p) => p && (p.tag._d === b || m.isEqualNode(p.$el)));
        if (_ !== -1) {
          const p = h[_];
          (p.$el = m), es(p), c(p), delete h[_];
        }
      }
      h.forEach((m) => {
        if (!!m.$el) {
          switch (m.tag.tagPosition) {
            case "bodyClose":
              r.body.appendChild(m.$el);
              break;
            case "bodyOpen":
              r.body.insertBefore(m.$el, r.body.firstChild);
              break;
            case "head":
            default:
              r.head.appendChild(m.$el);
              break;
          }
          c(m);
        }
      });
    }
  });
  for (const f of o) await e.hooks.callHook("dom:renderTag", f);
  Object.values(s).forEach((f) => f());
}
let ei = null;
async function Ug(e, t = {}) {
  function n() {
    return (ei = null), Pu(e, t);
  }
  const r = t.delayFn || ((s) => setTimeout(s, 10));
  return (ei = ei || new Promise((s) => r(() => s(n()))));
}
function Vg(e) {
  const t = Mg(),
    n = {
      unhead: t,
      install(r) {
        fo.startsWith("3") &&
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
        const i = xu(r, s);
        return typeof i < "u" ? i.dispose : () => {};
      },
      removeHeadObjs() {},
      updateDOM(r, s) {
        s
          ? Pu(t, { document: r })
          : Ug(t, { delayFn: (i) => setTimeout(() => i(), 50), document: r });
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
const qg = {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "content-language", name: "content-language", content: "SV-se" },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "R\xE4dda Djuren-klubben \xE4r f\xF6r barn upp till 13 \xE5r som \xE4lskar djur! I samarbete med Djurens R\xE4tt g\xF6r vi skillnad f\xF6r djuren",
      },
      {
        hid: "description",
        property: "description",
        content:
          "R\xE4dda Djuren-klubben \xE4r f\xF6r barn upp till 13 \xE5r som \xE4lskar djur! I samarbete med Djurens R\xE4tt g\xF6r vi skillnad f\xF6r djuren",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "R\xE4dda Djuren-klubben",
      },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "url", property: "url", content: "https://www.raddadjuren.se" },
      {
        hid: "og:title",
        property: "og:title",
        content: "R\xE4dda Djuren-klubben",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "R\xE4dda Djuren-klubben",
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
        content: "R\xE4dda Djuren-klubben",
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
        content: "R\xE4dda Djuren-klubben",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "R\xE4dda Djuren-klubben \xE4r f\xF6r barn upp till 13 \xE5r som \xE4lskar djur! I samarbete med Djurens R\xE4tt g\xF6r vi skillnad f\xF6r djuren",
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
    title: "Djurfakta | R\xE4dda Djuren-klubben",
    titleTemplate: "%s | ",
  },
  WS = !1,
  Mi = !1,
  Wg = !1,
  Kg = "__nuxt",
  Gg = pn((e) => {
    const t = Vg();
    t.push(qg), e.vueApp.use(t);
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
    e._useHead = xu;
  });
/*!
 * vue-router v4.1.6
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const Bn = typeof window < "u";
function Yg(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const pe = Object.assign;
function ti(e, t) {
  const n = {};
  for (const r in t) {
    const s = t[r];
    n[r] = Ot(s) ? s.map(e) : e(s);
  }
  return n;
}
const Tr = () => {},
  Ot = Array.isArray,
  Xg = /\/$/,
  Jg = (e) => e.replace(Xg, "");
function ni(e, t, n = "/") {
  let r,
    s = {},
    i = "",
    o = "";
  const a = t.indexOf("#");
  let l = t.indexOf("?");
  return (
    a < l && a >= 0 && (l = -1),
    l > -1 &&
      ((r = t.slice(0, l)),
      (i = t.slice(l + 1, a > -1 ? a : t.length)),
      (s = e(i))),
    a > -1 && ((r = r || t.slice(0, a)), (o = t.slice(a, t.length))),
    (r = ty(r != null ? r : t, n)),
    { fullPath: r + (i && "?") + i + o, path: r, query: s, hash: o }
  );
}
function Qg(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Tl(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function Zg(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1;
  return (
    r > -1 &&
    r === s &&
    Zn(t.matched[r], n.matched[s]) &&
    Ou(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Zn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Ou(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!ey(e[n], t[n])) return !1;
  return !0;
}
function ey(e, t) {
  return Ot(e) ? kl(e, t) : Ot(t) ? kl(t, e) : e === t;
}
function kl(e, t) {
  return Ot(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function ty(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    r = e.split("/");
  let s = n.length - 1,
    i,
    o;
  for (i = 0; i < r.length; i++)
    if (((o = r[i]), o !== "."))
      if (o === "..") s > 1 && s--;
      else break;
  return (
    n.slice(0, s).join("/") +
    "/" +
    r.slice(i - (i === r.length ? 1 : 0)).join("/")
  );
}
var Lr;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(Lr || (Lr = {}));
var kr;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(kr || (kr = {}));
function ny(e) {
  if (!e)
    if (Bn) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Jg(e);
}
const ry = /^[^#]+#/;
function sy(e, t) {
  return e.replace(ry, "#") + t;
}
function iy(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const Ds = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function oy(e) {
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
    t = iy(s, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      );
}
function xl(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Ii = new Map();
function ly(e, t) {
  Ii.set(e, t);
}
function ay(e) {
  const t = Ii.get(e);
  return Ii.delete(e), t;
}
let cy = () => location.protocol + "//" + location.host;
function Au(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    i = e.indexOf("#");
  if (i > -1) {
    let a = s.includes(e.slice(i)) ? e.slice(i).length : 1,
      l = s.slice(a);
    return l[0] !== "/" && (l = "/" + l), Tl(l, "");
  }
  return Tl(n, e) + r + s;
}
function uy(e, t, n, r) {
  let s = [],
    i = [],
    o = null;
  const a = ({ state: f }) => {
    const h = Au(e, location),
      m = n.value,
      v = t.value;
    let b = 0;
    if (f) {
      if (((n.value = h), (t.value = f), o && o === m)) {
        o = null;
        return;
      }
      b = v ? f.position - v.position : 0;
    } else r(h);
    s.forEach((_) => {
      _(n.value, m, {
        delta: b,
        type: Lr.pop,
        direction: b ? (b > 0 ? kr.forward : kr.back) : kr.unknown,
      });
    });
  };
  function l() {
    o = n.value;
  }
  function c(f) {
    s.push(f);
    const h = () => {
      const m = s.indexOf(f);
      m > -1 && s.splice(m, 1);
    };
    return i.push(h), h;
  }
  function u() {
    const { history: f } = window;
    !f.state || f.replaceState(pe({}, f.state, { scroll: Ds() }), "");
  }
  function d() {
    for (const f of i) f();
    (i = []),
      window.removeEventListener("popstate", a),
      window.removeEventListener("beforeunload", u);
  }
  return (
    window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", u),
    { pauseListeners: l, listen: c, destroy: d }
  );
}
function Pl(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? Ds() : null,
  };
}
function dy(e) {
  const { history: t, location: n } = window,
    r = { value: Au(e, n) },
    s = { value: t.state };
  s.value ||
    i(
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
  function i(l, c, u) {
    const d = e.indexOf("#"),
      f =
        d > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(d)) + l
          : cy() + e + l;
    try {
      t[u ? "replaceState" : "pushState"](c, "", f), (s.value = c);
    } catch (h) {
      console.error(h), n[u ? "replace" : "assign"](f);
    }
  }
  function o(l, c) {
    const u = pe({}, t.state, Pl(s.value.back, l, s.value.forward, !0), c, {
      position: s.value.position,
    });
    i(l, u, !0), (r.value = l);
  }
  function a(l, c) {
    const u = pe({}, s.value, t.state, { forward: l, scroll: Ds() });
    i(u.current, u, !0);
    const d = pe({}, Pl(r.value, l, null), { position: u.position + 1 }, c);
    i(l, d, !1), (r.value = l);
  }
  return { location: r, state: s, push: a, replace: o };
}
function Ru(e) {
  e = ny(e);
  const t = dy(e),
    n = uy(e, t.state, t.location, t.replace);
  function r(i, o = !0) {
    o || n.pauseListeners(), history.go(i);
  }
  const s = pe(
    { location: "", base: e, go: r, createHref: sy.bind(null, e) },
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
function fy(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ""),
    e.includes("#") || (e += "#"),
    Ru(e)
  );
}
function py(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function $u(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const en = {
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
  Lu = Symbol("");
var Ol;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(Ol || (Ol = {}));
function er(e, t) {
  return pe(new Error(), { type: e, [Lu]: !0 }, t);
}
function Ut(e, t) {
  return e instanceof Error && Lu in e && (t == null || !!(e.type & t));
}
const Al = "[^/]+?",
  hy = { sensitive: !1, strict: !1, start: !0, end: !0 },
  my = /[.+*?^${}()[\]/\\]/g;
function gy(e, t) {
  const n = pe({}, hy, t),
    r = [];
  let s = n.start ? "^" : "";
  const i = [];
  for (const c of e) {
    const u = c.length ? [] : [90];
    n.strict && !c.length && (s += "/");
    for (let d = 0; d < c.length; d++) {
      const f = c[d];
      let h = 40 + (n.sensitive ? 0.25 : 0);
      if (f.type === 0)
        d || (s += "/"), (s += f.value.replace(my, "\\$&")), (h += 40);
      else if (f.type === 1) {
        const { value: m, repeatable: v, optional: b, regexp: _ } = f;
        i.push({ name: m, repeatable: v, optional: b });
        const p = _ || Al;
        if (p !== Al) {
          h += 10;
          try {
            new RegExp(`(${p})`);
          } catch (S) {
            throw new Error(
              `Invalid custom RegExp for param "${m}" (${p}): ` + S.message
            );
          }
        }
        let g = v ? `((?:${p})(?:/(?:${p}))*)` : `(${p})`;
        d || (g = b && c.length < 2 ? `(?:/${g})` : "/" + g),
          b && (g += "?"),
          (s += g),
          (h += 20),
          b && (h += -8),
          v && (h += -20),
          p === ".*" && (h += -50);
      }
      u.push(h);
    }
    r.push(u);
  }
  if (n.strict && n.end) {
    const c = r.length - 1;
    r[c][r[c].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += "/?"), n.end ? (s += "$") : n.strict && (s += "(?:/|$)");
  const o = new RegExp(s, n.sensitive ? "" : "i");
  function a(c) {
    const u = c.match(o),
      d = {};
    if (!u) return null;
    for (let f = 1; f < u.length; f++) {
      const h = u[f] || "",
        m = i[f - 1];
      d[m.name] = h && m.repeatable ? h.split("/") : h;
    }
    return d;
  }
  function l(c) {
    let u = "",
      d = !1;
    for (const f of e) {
      (!d || !u.endsWith("/")) && (u += "/"), (d = !1);
      for (const h of f)
        if (h.type === 0) u += h.value;
        else if (h.type === 1) {
          const { value: m, repeatable: v, optional: b } = h,
            _ = m in c ? c[m] : "";
          if (Ot(_) && !v)
            throw new Error(
              `Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`
            );
          const p = Ot(_) ? _.join("/") : _;
          if (!p)
            if (b)
              f.length < 2 &&
                (u.endsWith("/") ? (u = u.slice(0, -1)) : (d = !0));
            else throw new Error(`Missing required param "${m}"`);
          u += p;
        }
    }
    return u || "/";
  }
  return { re: o, score: r, keys: i, parse: a, stringify: l };
}
function yy(e, t) {
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
function vy(e, t) {
  let n = 0;
  const r = e.score,
    s = t.score;
  for (; n < r.length && n < s.length; ) {
    const i = yy(r[n], s[n]);
    if (i) return i;
    n++;
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (Rl(r)) return 1;
    if (Rl(s)) return -1;
  }
  return s.length - r.length;
}
function Rl(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const by = { type: 0, value: "" },
  _y = /[a-zA-Z0-9_]/;
function wy(e) {
  if (!e) return [[]];
  if (e === "/") return [[by]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(h) {
    throw new Error(`ERR (${n})/"${c}": ${h}`);
  }
  let n = 0,
    r = n;
  const s = [];
  let i;
  function o() {
    i && s.push(i), (i = []);
  }
  let a = 0,
    l,
    c = "",
    u = "";
  function d() {
    !c ||
      (n === 0
        ? i.push({ type: 0, value: c })
        : n === 1 || n === 2 || n === 3
        ? (i.length > 1 &&
            (l === "*" || l === "+") &&
            t(
              `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
            ),
          i.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?",
          }))
        : t("Invalid state to consume buffer"),
      (c = ""));
  }
  function f() {
    c += l;
  }
  for (; a < e.length; ) {
    if (((l = e[a++]), l === "\\" && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (c && d(), o()) : l === ":" ? (d(), (n = 1)) : f();
        break;
      case 4:
        f(), (n = r);
        break;
      case 1:
        l === "("
          ? (n = 2)
          : _y.test(l)
          ? f()
          : (d(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--);
        break;
      case 2:
        l === ")"
          ? u[u.length - 1] == "\\"
            ? (u = u.slice(0, -1) + l)
            : (n = 3)
          : (u += l);
        break;
      case 3:
        d(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--, (u = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), d(), o(), s;
}
function Sy(e, t, n) {
  const r = gy(wy(e.path), n),
    s = pe(r, { record: e, parent: t, children: [], alias: [] });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function Cy(e, t) {
  const n = [],
    r = new Map();
  t = Ml({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(u) {
    return r.get(u);
  }
  function i(u, d, f) {
    const h = !f,
      m = Ey(u);
    m.aliasOf = f && f.record;
    const v = Ml(t, u),
      b = [m];
    if ("alias" in u) {
      const g = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const S of g)
        b.push(
          pe({}, m, {
            components: f ? f.record.components : m.components,
            path: S,
            aliasOf: f ? f.record : m,
          })
        );
    }
    let _, p;
    for (const g of b) {
      const { path: S } = g;
      if (d && S[0] !== "/") {
        const C = d.record.path,
          P = C[C.length - 1] === "/" ? "" : "/";
        g.path = d.record.path + (S && P + S);
      }
      if (
        ((_ = Sy(g, d, v)),
        f
          ? f.alias.push(_)
          : ((p = p || _),
            p !== _ && p.alias.push(_),
            h && u.name && !Ll(_) && o(u.name)),
        m.children)
      ) {
        const C = m.children;
        for (let P = 0; P < C.length; P++) i(C[P], _, f && f.children[P]);
      }
      (f = f || _),
        ((_.record.components && Object.keys(_.record.components).length) ||
          _.record.name ||
          _.record.redirect) &&
          l(_);
    }
    return p
      ? () => {
          o(p);
        }
      : Tr;
  }
  function o(u) {
    if ($u(u)) {
      const d = r.get(u);
      d &&
        (r.delete(u),
        n.splice(n.indexOf(d), 1),
        d.children.forEach(o),
        d.alias.forEach(o));
    } else {
      const d = n.indexOf(u);
      d > -1 &&
        (n.splice(d, 1),
        u.record.name && r.delete(u.record.name),
        u.children.forEach(o),
        u.alias.forEach(o));
    }
  }
  function a() {
    return n;
  }
  function l(u) {
    let d = 0;
    for (
      ;
      d < n.length &&
      vy(u, n[d]) >= 0 &&
      (u.record.path !== n[d].record.path || !Mu(u, n[d]));

    )
      d++;
    n.splice(d, 0, u), u.record.name && !Ll(u) && r.set(u.record.name, u);
  }
  function c(u, d) {
    let f,
      h = {},
      m,
      v;
    if ("name" in u && u.name) {
      if (((f = r.get(u.name)), !f)) throw er(1, { location: u });
      (v = f.record.name),
        (h = pe(
          $l(
            d.params,
            f.keys.filter((p) => !p.optional).map((p) => p.name)
          ),
          u.params &&
            $l(
              u.params,
              f.keys.map((p) => p.name)
            )
        )),
        (m = f.stringify(h));
    } else if ("path" in u)
      (m = u.path),
        (f = n.find((p) => p.re.test(m))),
        f && ((h = f.parse(m)), (v = f.record.name));
    else {
      if (((f = d.name ? r.get(d.name) : n.find((p) => p.re.test(d.path))), !f))
        throw er(1, { location: u, currentLocation: d });
      (v = f.record.name),
        (h = pe({}, d.params, u.params)),
        (m = f.stringify(h));
    }
    const b = [];
    let _ = f;
    for (; _; ) b.unshift(_.record), (_ = _.parent);
    return { name: v, path: m, params: h, matched: b, meta: ky(b) };
  }
  return (
    e.forEach((u) => i(u)),
    {
      addRoute: i,
      resolve: c,
      removeRoute: o,
      getRoutes: a,
      getRecordMatcher: s,
    }
  );
}
function $l(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Ey(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Ty(e),
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
function Ty(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "boolean" ? n : n[r];
  return t;
}
function Ll(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function ky(e) {
  return e.reduce((t, n) => pe(t, n.meta), {});
}
function Ml(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function Mu(e, t) {
  return t.children.some((n) => n === e || Mu(e, n));
}
const Iu = /#/g,
  xy = /&/g,
  Py = /\//g,
  Oy = /=/g,
  Ay = /\?/g,
  ju = /\+/g,
  Ry = /%5B/g,
  $y = /%5D/g,
  Du = /%5E/g,
  Ly = /%60/g,
  Bu = /%7B/g,
  My = /%7C/g,
  Nu = /%7D/g,
  Iy = /%20/g;
function bo(e) {
  return encodeURI("" + e)
    .replace(My, "|")
    .replace(Ry, "[")
    .replace($y, "]");
}
function jy(e) {
  return bo(e).replace(Bu, "{").replace(Nu, "}").replace(Du, "^");
}
function ji(e) {
  return bo(e)
    .replace(ju, "%2B")
    .replace(Iy, "+")
    .replace(Iu, "%23")
    .replace(xy, "%26")
    .replace(Ly, "`")
    .replace(Bu, "{")
    .replace(Nu, "}")
    .replace(Du, "^");
}
function Dy(e) {
  return ji(e).replace(Oy, "%3D");
}
function By(e) {
  return bo(e).replace(Iu, "%23").replace(Ay, "%3F");
}
function Ny(e) {
  return e == null ? "" : By(e).replace(Py, "%2F");
}
function vs(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
function Hy(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < r.length; ++s) {
    const i = r[s].replace(ju, " "),
      o = i.indexOf("="),
      a = vs(o < 0 ? i : i.slice(0, o)),
      l = o < 0 ? null : vs(i.slice(o + 1));
    if (a in t) {
      let c = t[a];
      Ot(c) || (c = t[a] = [c]), c.push(l);
    } else t[a] = l;
  }
  return t;
}
function Il(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (((n = Dy(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Ot(r) ? r.map((i) => i && ji(i)) : [r && ji(r)]).forEach((i) => {
      i !== void 0 &&
        ((t += (t.length ? "&" : "") + n), i != null && (t += "=" + i));
    });
  }
  return t;
}
function Fy(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = Ot(r)
        ? r.map((s) => (s == null ? null : "" + s))
        : r == null
        ? r
        : "" + r);
  }
  return t;
}
const zy = Symbol(""),
  jl = Symbol(""),
  _o = Symbol(""),
  wo = Symbol(""),
  Di = Symbol("");
function pr() {
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
function rn(e, t, n, r, s) {
  const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () =>
    new Promise((o, a) => {
      const l = (d) => {
          d === !1
            ? a(er(4, { from: n, to: t }))
            : d instanceof Error
            ? a(d)
            : py(d)
            ? a(er(2, { from: t, to: d }))
            : (i &&
                r.enterCallbacks[s] === i &&
                typeof d == "function" &&
                i.push(d),
              o());
        },
        c = e.call(r && r.instances[s], t, n, l);
      let u = Promise.resolve(c);
      e.length < 3 && (u = u.then(l)), u.catch((d) => a(d));
    });
}
function ri(e, t, n, r) {
  const s = [];
  for (const i of e)
    for (const o in i.components) {
      let a = i.components[o];
      if (!(t !== "beforeRouteEnter" && !i.instances[o]))
        if (Uy(a)) {
          const c = (a.__vccOpts || a)[t];
          c && s.push(rn(c, n, r, i, o));
        } else {
          let l = a();
          s.push(() =>
            l.then((c) => {
              if (!c)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${o}" at "${i.path}"`)
                );
              const u = Yg(c) ? c.default : c;
              i.components[o] = u;
              const f = (u.__vccOpts || u)[t];
              return f && rn(f, n, r, i, o)();
            })
          );
        }
    }
  return s;
}
function Uy(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function Dl(e) {
  const t = wt(_o),
    n = wt(wo),
    r = Me(() => t.resolve(Ve(e.to))),
    s = Me(() => {
      const { matched: l } = r.value,
        { length: c } = l,
        u = l[c - 1],
        d = n.matched;
      if (!u || !d.length) return -1;
      const f = d.findIndex(Zn.bind(null, u));
      if (f > -1) return f;
      const h = Bl(l[c - 2]);
      return c > 1 && Bl(u) === h && d[d.length - 1].path !== h
        ? d.findIndex(Zn.bind(null, l[c - 2]))
        : f;
    }),
    i = Me(() => s.value > -1 && Ky(n.params, r.value.params)),
    o = Me(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        Ou(n.params, r.value.params)
    );
  function a(l = {}) {
    return Wy(l)
      ? t[Ve(e.replace) ? "replace" : "push"](Ve(e.to)).catch(Tr)
      : Promise.resolve();
  }
  return {
    route: r,
    href: Me(() => r.value.href),
    isActive: i,
    isExactActive: o,
    navigate: a,
  };
}
const Vy = Ft({
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
    useLink: Dl,
    setup(e, { slots: t }) {
      const n = Pt(Dl(e)),
        { options: r } = wt(_o),
        s = Me(() => ({
          [Nl(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [Nl(
            e.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const i = t.default && t.default(n);
        return e.custom
          ? i
          : de(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value,
              },
              i
            );
      };
    },
  }),
  qy = Vy;
function Wy(e) {
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
function Ky(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n];
    if (typeof r == "string") {
      if (r !== s) return !1;
    } else if (!Ot(s) || s.length !== r.length || r.some((i, o) => i !== s[o]))
      return !1;
  }
  return !0;
}
function Bl(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const Nl = (e, t, n) => (e != null ? e : t != null ? t : n),
  Gy = Ft({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = wt(Di),
        s = Me(() => e.route || r.value),
        i = wt(jl, 0),
        o = Me(() => {
          let c = Ve(i);
          const { matched: u } = s.value;
          let d;
          for (; (d = u[c]) && !d.components; ) c++;
          return c;
        }),
        a = Me(() => s.value.matched[o.value]);
      cn(
        jl,
        Me(() => o.value + 1)
      ),
        cn(zy, a),
        cn(Di, s);
      const l = ge();
      return (
        jt(
          () => [l.value, a.value, e.name],
          ([c, u, d], [f, h, m]) => {
            u &&
              ((u.instances[d] = c),
              h &&
                h !== u &&
                c &&
                c === f &&
                (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards),
                u.updateGuards.size || (u.updateGuards = h.updateGuards))),
              c &&
                u &&
                (!h || !Zn(u, h) || !f) &&
                (u.enterCallbacks[d] || []).forEach((v) => v(c));
          },
          { flush: "post" }
        ),
        () => {
          const c = s.value,
            u = e.name,
            d = a.value,
            f = d && d.components[u];
          if (!f) return Hl(n.default, { Component: f, route: c });
          const h = d.props[u],
            m = h
              ? h === !0
                ? c.params
                : typeof h == "function"
                ? h(c)
                : h
              : null,
            b = de(
              f,
              pe({}, m, t, {
                onVnodeUnmounted: (_) => {
                  _.component.isUnmounted && (d.instances[u] = null);
                },
                ref: l,
              })
            );
          return Hl(n.default, { Component: b, route: c }) || b;
        }
      );
    },
  });
function Hl(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Hu = Gy;
function Yy(e) {
  const t = Cy(e.routes, e),
    n = e.parseQuery || Hy,
    r = e.stringifyQuery || Il,
    s = e.history,
    i = pr(),
    o = pr(),
    a = pr(),
    l = yi(en);
  let c = en;
  Bn &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const u = ti.bind(null, (A) => "" + A),
    d = ti.bind(null, Ny),
    f = ti.bind(null, vs);
  function h(A, V) {
    let F, X;
    return (
      $u(A) ? ((F = t.getRecordMatcher(A)), (X = V)) : (X = A), t.addRoute(X, F)
    );
  }
  function m(A) {
    const V = t.getRecordMatcher(A);
    V && t.removeRoute(V);
  }
  function v() {
    return t.getRoutes().map((A) => A.record);
  }
  function b(A) {
    return !!t.getRecordMatcher(A);
  }
  function _(A, V) {
    if (((V = pe({}, V || l.value)), typeof A == "string")) {
      const y = ni(n, A, V.path),
        w = t.resolve({ path: y.path }, V),
        T = s.createHref(y.fullPath);
      return pe(y, w, {
        params: f(w.params),
        hash: vs(y.hash),
        redirectedFrom: void 0,
        href: T,
      });
    }
    let F;
    if ("path" in A) F = pe({}, A, { path: ni(n, A.path, V.path).path });
    else {
      const y = pe({}, A.params);
      for (const w in y) y[w] == null && delete y[w];
      (F = pe({}, A, { params: d(A.params) })), (V.params = d(V.params));
    }
    const X = t.resolve(F, V),
      le = A.hash || "";
    X.params = u(f(X.params));
    const Se = Qg(r, pe({}, A, { hash: jy(le), path: X.path })),
      re = s.createHref(Se);
    return pe(
      { fullPath: Se, hash: le, query: r === Il ? Fy(A.query) : A.query || {} },
      X,
      { redirectedFrom: void 0, href: re }
    );
  }
  function p(A) {
    return typeof A == "string" ? ni(n, A, l.value.path) : pe({}, A);
  }
  function g(A, V) {
    if (c !== A) return er(8, { from: V, to: A });
  }
  function S(A) {
    return O(A);
  }
  function C(A) {
    return S(pe(p(A), { replace: !0 }));
  }
  function P(A) {
    const V = A.matched[A.matched.length - 1];
    if (V && V.redirect) {
      const { redirect: F } = V;
      let X = typeof F == "function" ? F(A) : F;
      return (
        typeof X == "string" &&
          ((X = X.includes("?") || X.includes("#") ? (X = p(X)) : { path: X }),
          (X.params = {})),
        pe(
          { query: A.query, hash: A.hash, params: "path" in X ? {} : A.params },
          X
        )
      );
    }
  }
  function O(A, V) {
    const F = (c = _(A)),
      X = l.value,
      le = A.state,
      Se = A.force,
      re = A.replace === !0,
      y = P(F);
    if (y)
      return O(
        pe(p(y), {
          state: typeof y == "object" ? pe({}, le, y.state) : le,
          force: Se,
          replace: re,
        }),
        V || F
      );
    const w = F;
    w.redirectedFrom = V;
    let T;
    return (
      !Se &&
        Zg(r, X, F) &&
        ((T = er(16, { to: w, from: X })), At(X, X, !0, !1)),
      (T ? Promise.resolve(T) : N(w, X))
        .catch((x) => (Ut(x) ? (Ut(x, 2) ? x : ze(x)) : he(x, w, X)))
        .then((x) => {
          if (x) {
            if (Ut(x, 2))
              return O(
                pe({ replace: re }, p(x.to), {
                  state: typeof x.to == "object" ? pe({}, le, x.to.state) : le,
                  force: Se,
                }),
                V || w
              );
          } else x = M(w, X, !0, re, le);
          return k(w, X, x), x;
        })
    );
  }
  function E(A, V) {
    const F = g(A, V);
    return F ? Promise.reject(F) : Promise.resolve();
  }
  function N(A, V) {
    let F;
    const [X, le, Se] = Xy(A, V);
    F = ri(X.reverse(), "beforeRouteLeave", A, V);
    for (const y of X)
      y.leaveGuards.forEach((w) => {
        F.push(rn(w, A, V));
      });
    const re = E.bind(null, A, V);
    return (
      F.push(re),
      In(F)
        .then(() => {
          F = [];
          for (const y of i.list()) F.push(rn(y, A, V));
          return F.push(re), In(F);
        })
        .then(() => {
          F = ri(le, "beforeRouteUpdate", A, V);
          for (const y of le)
            y.updateGuards.forEach((w) => {
              F.push(rn(w, A, V));
            });
          return F.push(re), In(F);
        })
        .then(() => {
          F = [];
          for (const y of A.matched)
            if (y.beforeEnter && !V.matched.includes(y))
              if (Ot(y.beforeEnter))
                for (const w of y.beforeEnter) F.push(rn(w, A, V));
              else F.push(rn(y.beforeEnter, A, V));
          return F.push(re), In(F);
        })
        .then(
          () => (
            A.matched.forEach((y) => (y.enterCallbacks = {})),
            (F = ri(Se, "beforeRouteEnter", A, V)),
            F.push(re),
            In(F)
          )
        )
        .then(() => {
          F = [];
          for (const y of o.list()) F.push(rn(y, A, V));
          return F.push(re), In(F);
        })
        .catch((y) => (Ut(y, 8) ? y : Promise.reject(y)))
    );
  }
  function k(A, V, F) {
    for (const X of a.list()) X(A, V, F);
  }
  function M(A, V, F, X, le) {
    const Se = g(A, V);
    if (Se) return Se;
    const re = V === en,
      y = Bn ? history.state : {};
    F &&
      (X || re
        ? s.replace(A.fullPath, pe({ scroll: re && y && y.scroll }, le))
        : s.push(A.fullPath, le)),
      (l.value = A),
      At(A, V, F, re),
      ze();
  }
  let $;
  function Y() {
    $ ||
      ($ = s.listen((A, V, F) => {
        if (!zr.listening) return;
        const X = _(A),
          le = P(X);
        if (le) {
          O(pe(le, { replace: !0 }), X).catch(Tr);
          return;
        }
        c = X;
        const Se = l.value;
        Bn && ly(xl(Se.fullPath, F.delta), Ds()),
          N(X, Se)
            .catch((re) =>
              Ut(re, 12)
                ? re
                : Ut(re, 2)
                ? (O(re.to, X)
                    .then((y) => {
                      Ut(y, 20) &&
                        !F.delta &&
                        F.type === Lr.pop &&
                        s.go(-1, !1);
                    })
                    .catch(Tr),
                  Promise.reject())
                : (F.delta && s.go(-F.delta, !1), he(re, X, Se))
            )
            .then((re) => {
              (re = re || M(X, Se, !1)),
                re &&
                  (F.delta && !Ut(re, 8)
                    ? s.go(-F.delta, !1)
                    : F.type === Lr.pop && Ut(re, 20) && s.go(-1, !1)),
                k(X, Se, re);
            })
            .catch(Tr);
      }));
  }
  let U = pr(),
    Pe = pr(),
    ie;
  function he(A, V, F) {
    ze(A);
    const X = Pe.list();
    return (
      X.length ? X.forEach((le) => le(A, V, F)) : console.error(A),
      Promise.reject(A)
    );
  }
  function ue() {
    return ie && l.value !== en
      ? Promise.resolve()
      : new Promise((A, V) => {
          U.add([A, V]);
        });
  }
  function ze(A) {
    return (
      ie ||
        ((ie = !A),
        Y(),
        U.list().forEach(([V, F]) => (A ? F(A) : V())),
        U.reset()),
      A
    );
  }
  function At(A, V, F, X) {
    const { scrollBehavior: le } = e;
    if (!Bn || !le) return Promise.resolve();
    const Se =
      (!F && ay(xl(A.fullPath, 0))) ||
      ((X || !F) && history.state && history.state.scroll) ||
      null;
    return An()
      .then(() => le(A, V, Se))
      .then((re) => re && oy(re))
      .catch((re) => he(re, A, V));
  }
  const We = (A) => s.go(A);
  let De;
  const Ln = new Set(),
    zr = {
      currentRoute: l,
      listening: !0,
      addRoute: h,
      removeRoute: m,
      hasRoute: b,
      getRoutes: v,
      resolve: _,
      options: e,
      push: S,
      replace: C,
      go: We,
      back: () => We(-1),
      forward: () => We(1),
      beforeEach: i.add,
      beforeResolve: o.add,
      afterEach: a.add,
      onError: Pe.add,
      isReady: ue,
      install(A) {
        const V = this;
        A.component("RouterLink", qy),
          A.component("RouterView", Hu),
          (A.config.globalProperties.$router = V),
          Object.defineProperty(A.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Ve(l),
          }),
          Bn &&
            !De &&
            l.value === en &&
            ((De = !0), S(s.location).catch((le) => {}));
        const F = {};
        for (const le in en) F[le] = Me(() => l.value[le]);
        A.provide(_o, V), A.provide(wo, Pt(F)), A.provide(Di, l);
        const X = A.unmount;
        Ln.add(A),
          (A.unmount = function () {
            Ln.delete(A),
              Ln.size < 1 &&
                ((c = en),
                $ && $(),
                ($ = null),
                (l.value = en),
                (De = !1),
                (ie = !1)),
              X();
          });
      },
    };
  return zr;
}
function In(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
}
function Xy(e, t) {
  const n = [],
    r = [],
    s = [],
    i = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < i; o++) {
    const a = t.matched[o];
    a && (e.matched.find((c) => Zn(c, a)) ? r.push(a) : n.push(a));
    const l = e.matched[o];
    l && (t.matched.find((c) => Zn(c, l)) || s.push(l));
  }
  return [n, r, s];
}
function KS() {
  return wt(wo);
}
const Ge = {},
  Ye = {},
  Xe = {},
  Je = {},
  Qe = {},
  Ze = {},
  et = {},
  tt = {},
  nt = {},
  rt = {},
  st = {},
  it = {},
  ot = {},
  lt = {},
  at = {},
  ct = {},
  ut = {},
  dt = {},
  ft = {},
  pt = {};
var ca,
  ua,
  da,
  fa,
  pa,
  ha,
  ma,
  ga,
  ya,
  va,
  ba,
  _a,
  wa,
  Sa,
  Ca,
  Ea,
  Ta,
  ka,
  xa,
  Pa,
  Oa,
  Aa,
  Ra,
  $a,
  La,
  Ma,
  Ia,
  ja,
  Da,
  Ba,
  Na,
  Ha,
  Fa,
  za,
  Ua,
  Va,
  qa,
  Wa,
  Ka,
  Ga;
const Fl = [
    {
      name: (ca = Ge == null ? void 0 : Ge.name) != null ? ca : "parent-slug",
      path:
        (ua = Ge == null ? void 0 : Ge.path) != null ? ua : "/:parent/:slug",
      file: "/Users/Adam/Projects/djurens-ratt/rdk/pages/[parent]/[slug].vue",
      children: [],
      meta: Ge,
      alias: (Ge == null ? void 0 : Ge.alias) || [],
      redirect: (Ge == null ? void 0 : Ge.redirect) || void 0,
      component: () =>
        K(
          () => import("./_slug_.ee0995ca.js"),
          [
            "./_slug_.ee0995ca.js",
            "./usePageHead.f7f7da2b.js",
            "./urlTools.7e20410a.js",
            "./PageArticle.9a99e4cf.js",
            "./PageArticle.vue_vue_type_style_index_0_scoped_d3e8b27d_lang.2510b67f.js",
            "./PageArticle.a907c3df.css",
            "./AppImage.9bc8cdcc.js",
            "./nuxt-img.6cd8cff3.js",
            "./_slug_.dbeb2766.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: (da = Ye == null ? void 0 : Ye.name) != null ? da : "slug",
      path: (fa = Ye == null ? void 0 : Ye.path) != null ? fa : "/:slug",
      file: "/Users/Adam/Projects/djurens-ratt/rdk/pages/[slug].vue",
      children: [],
      meta: Ye,
      alias: (Ye == null ? void 0 : Ye.alias) || [],
      redirect: (Ye == null ? void 0 : Ye.redirect) || void 0,
      component: () =>
        K(
          () => import("./_slug_.9469fc29.js"),
          [
            "./_slug_.9469fc29.js",
            "./usePageHead.f7f7da2b.js",
            "./urlTools.7e20410a.js",
            "./PageArticle.9a99e4cf.js",
            "./PageArticle.vue_vue_type_style_index_0_scoped_d3e8b27d_lang.2510b67f.js",
            "./PageArticle.a907c3df.css",
            "./AppImage.9bc8cdcc.js",
            "./nuxt-img.6cd8cff3.js",
            "./_slug_.5e0e2e24.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name:
        (pa = Xe == null ? void 0 : Xe.name) != null ? pa : "djurfakta-slug",
      path:
        (ha = Xe == null ? void 0 : Xe.path) != null ? ha : "/djurfakta/:slug",
      file: "/Users/Adam/Projects/djurens-ratt/rdk/pages/djurfakta/[slug].vue",
      children: [],
      meta: Xe,
      alias: (Xe == null ? void 0 : Xe.alias) || [],
      redirect: (Xe == null ? void 0 : Xe.redirect) || void 0,
      component: () =>
        K(
          () => import("./_slug_.23c792b8.js"),
          [
            "./_slug_.23c792b8.js",
            "./usePageHead.f7f7da2b.js",
            "./urlTools.7e20410a.js",
            "./SocialHead.eb1a0180.js",
            "./SourceListItem.vue_vue_type_style_index_0_scoped_764c6338_lang.767669ff.js",
            "./SourceListItem.c9ca6a57.css",
            "./SourceListItem.ea0f1eee.js",
            "./TransitionExpand.b7299dda.js",
            "./TransitionExpand.vue_vue_type_style_index_0_scoped_ab5478b5_lang.c2805c90.js",
            "./TransitionExpand.358b7368.css",
            "./PageArticle.9a99e4cf.js",
            "./PageArticle.vue_vue_type_style_index_0_scoped_d3e8b27d_lang.2510b67f.js",
            "./PageArticle.a907c3df.css",
            "./AppImage.9bc8cdcc.js",
            "./nuxt-img.6cd8cff3.js",
            "./_slug_.a414cfba.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name:
        (ma = Je == null ? void 0 : Je.name) != null ? ma : "hjalp-djuren-slug",
      path:
        (ga = Je == null ? void 0 : Je.path) != null
          ? ga
          : "/hjalp-djuren/:slug",
      file: "/Users/Adam/Projects/djurens-ratt/rdk/pages/hjalp-djuren/[slug].vue",
      children: [],
      meta: Je,
      alias: (Je == null ? void 0 : Je.alias) || [],
      redirect: (Je == null ? void 0 : Je.redirect) || void 0,
      component: () =>
        K(
          () => import("./_slug_.a88acb32.js"),
          [
            "./_slug_.a88acb32.js",
            "./urlTools.7e20410a.js",
            "./PageArticle.9a99e4cf.js",
            "./PageArticle.vue_vue_type_style_index_0_scoped_d3e8b27d_lang.2510b67f.js",
            "./PageArticle.a907c3df.css",
            "./AppImage.9bc8cdcc.js",
            "./nuxt-img.6cd8cff3.js",
            "./_slug_.8efef906.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: (ya = Qe == null ? void 0 : Qe.name) != null ? ya : "hjalp-djuren",
      path: (va = Qe == null ? void 0 : Qe.path) != null ? va : "/hjalp-djuren",
      file: "/Users/Adam/Projects/djurens-ratt/rdk/pages/hjalp-djuren/index.vue",
      children: [],
      meta: Qe,
      alias: (Qe == null ? void 0 : Qe.alias) || [],
      redirect: (Qe == null ? void 0 : Qe.redirect) || void 0,
      component: () =>
        K(
          () => import("./index.9ba4b567.js"),
          [
            "./index.9ba4b567.js",
            "./urlTools.7e20410a.js",
            "./PageSearch.11fca8a7.js",
            "./PageSearch.vue_vue_type_style_index_0_scoped_99e80430_lang.a8536c95.js",
            "./PageSearch.cc210a0f.css",
            "./TagsList.91a9f417.js",
            "./PageTitle.155ae597.js",
            "./InfoCard.9cb0375c.js",
            "./InfoCard.vue_vue_type_style_index_0_scoped_b1c8dc52_lang.08b16729.js",
            "./InfoCard.26090f6a.css",
            "./AppImage.9bc8cdcc.js",
            "./nuxt-img.6cd8cff3.js",
            "./index.c585f08b.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: (ba = Ze == null ? void 0 : Ze.name) != null ? ba : "index",
      path: (_a = Ze == null ? void 0 : Ze.path) != null ? _a : "/",
      file: "/Users/Adam/Projects/djurens-ratt/rdk/pages/index.vue",
      children: [],
      meta: Ze,
      alias: (Ze == null ? void 0 : Ze.alias) || [],
      redirect: (Ze == null ? void 0 : Ze.redirect) || void 0,
      component: () =>
        K(
          () => import("./index.ece95544.js"),
          [
            "./index.ece95544.js",
            "./urlTools.7e20410a.js",
            "./PageSearch.11fca8a7.js",
            "./PageSearch.vue_vue_type_style_index_0_scoped_99e80430_lang.a8536c95.js",
            "./PageSearch.cc210a0f.css",
            "./TagsList.91a9f417.js",
            "./AnimalSlider.fb242980.js",
            "./AnimalSlider.vue_vue_type_style_index_0_scoped_4ed309ee_lang.0e89288c.js",
            "./navigation.min.304073bc.js",
            "./navigation.079e38c4.css",
            "./AnimalSlider.f6244b5d.css",
            "./AnimalSliderCard.3d00e042.js",
            "./AnimalSliderCard.vue_vue_type_style_index_0_scoped_2bb4687e_lang.25a381c7.js",
            "./AnimalSliderCard.7bfa47f6.css",
            "./AppImage.9bc8cdcc.js",
            "./nuxt-img.6cd8cff3.js",
            "./LearnMoreBlock.1a73c92d.js",
            "./LearnMoreBlock.vue_vue_type_style_index_0_scoped_bb3c97e0_lang.4d6f0884.js",
            "./LearnMoreBlock.b08c497b.css",
            "./PageTitle.155ae597.js",
            "./ImageItem.7353df8b.js",
            "./index.3b3482ad.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name:
        (wa = et == null ? void 0 : et.name) != null ? wa : "klubbnytt-slug",
      path:
        (Sa = et == null ? void 0 : et.path) != null ? Sa : "/klubbnytt/:slug",
      file: "/Users/Adam/Projects/djurens-ratt/rdk/pages/klubbnytt/[slug].vue",
      children: [],
      meta: et,
      alias: (et == null ? void 0 : et.alias) || [],
      redirect: (et == null ? void 0 : et.redirect) || void 0,
      component: () =>
        K(
          () => import("./_slug_.63b9e00c.js"),
          [
            "./_slug_.63b9e00c.js",
            "./urlTools.7e20410a.js",
            "./AppImage.9bc8cdcc.js",
            "./nuxt-img.6cd8cff3.js",
            "./PageArticle.9a99e4cf.js",
            "./PageArticle.vue_vue_type_style_index_0_scoped_d3e8b27d_lang.2510b67f.js",
            "./PageArticle.a907c3df.css",
            "./_slug_.9ddaf15c.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: (Ca = tt == null ? void 0 : tt.name) != null ? Ca : "klubbnytt",
      path: (Ea = tt == null ? void 0 : tt.path) != null ? Ea : "/klubbnytt",
      file: "/Users/Adam/Projects/djurens-ratt/rdk/pages/klubbnytt/index.vue",
      children: [],
      meta: tt,
      alias: (tt == null ? void 0 : tt.alias) || [],
      redirect: (tt == null ? void 0 : tt.redirect) || void 0,
      component: () =>
        K(
          () => import("./index.5bfb33f0.js"),
          [
            "./index.5bfb33f0.js",
            "./urlTools.7e20410a.js",
            "./PageSearch.11fca8a7.js",
            "./PageSearch.vue_vue_type_style_index_0_scoped_99e80430_lang.a8536c95.js",
            "./PageSearch.cc210a0f.css",
            "./TagsList.91a9f417.js",
            "./PageTitle.155ae597.js",
            "./InfoCard.9cb0375c.js",
            "./InfoCard.vue_vue_type_style_index_0_scoped_b1c8dc52_lang.08b16729.js",
            "./InfoCard.26090f6a.css",
            "./AppImage.9bc8cdcc.js",
            "./nuxt-img.6cd8cff3.js",
            "./index.cc4a1f82.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name:
        (Ta = nt == null ? void 0 : nt.name) != null ? Ta : "lar-dig-mer-slug",
      path:
        (ka = nt == null ? void 0 : nt.path) != null
          ? ka
          : "/lar-dig-mer/:slug",
      file: "/Users/Adam/Projects/djurens-ratt/rdk/pages/lar-dig-mer/[slug].vue",
      children: [],
      meta: nt,
      alias: (nt == null ? void 0 : nt.alias) || [],
      redirect: (nt == null ? void 0 : nt.redirect) || void 0,
      component: () =>
        K(
          () => import("./_slug_.5564de71.js"),
          [
            "./_slug_.5564de71.js",
            "./urlTools.7e20410a.js",
            "./PageArticle.9a99e4cf.js",
            "./PageArticle.vue_vue_type_style_index_0_scoped_d3e8b27d_lang.2510b67f.js",
            "./PageArticle.a907c3df.css",
            "./AppImage.9bc8cdcc.js",
            "./nuxt-img.6cd8cff3.js",
            "./_slug_.3a58c10f.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: (xa = rt == null ? void 0 : rt.name) != null ? xa : "lar-dig-mer",
      path: (Pa = rt == null ? void 0 : rt.path) != null ? Pa : "/lar-dig-mer",
      file: "/Users/Adam/Projects/djurens-ratt/rdk/pages/lar-dig-mer/index.vue",
      children: [],
      meta: rt,
      alias: (rt == null ? void 0 : rt.alias) || [],
      redirect: (rt == null ? void 0 : rt.redirect) || void 0,
      component: () =>
        K(
          () => import("./index.cc1d426f.js"),
          [
            "./index.cc1d426f.js",
            "./urlTools.7e20410a.js",
            "./PageSearch.11fca8a7.js",
            "./PageSearch.vue_vue_type_style_index_0_scoped_99e80430_lang.a8536c95.js",
            "./PageSearch.cc210a0f.css",
            "./TagsList.91a9f417.js",
            "./LearnMoreBlock.1a73c92d.js",
            "./LearnMoreBlock.vue_vue_type_style_index_0_scoped_bb3c97e0_lang.4d6f0884.js",
            "./LearnMoreBlock.b08c497b.css",
            "./PageTitle.155ae597.js",
            "./ImageItem.7353df8b.js",
            "./AppImage.9bc8cdcc.js",
            "./nuxt-img.6cd8cff3.js",
            "./index.f3ea5306.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: (Oa = st == null ? void 0 : st.name) != null ? Oa : "sok",
      path: (Aa = st == null ? void 0 : st.path) != null ? Aa : "/sok",
      file: "/Users/Adam/Projects/djurens-ratt/rdk/pages/sok.vue",
      children: [],
      meta: st,
      alias: (st == null ? void 0 : st.alias) || [],
      redirect: (st == null ? void 0 : st.redirect) || void 0,
      component: () =>
        K(
          () => import("./sok.c4202f9b.js"),
          [
            "./sok.c4202f9b.js",
            "./urlTools.7e20410a.js",
            "./SearchResults.vue_vue_type_style_index_0_scoped_fbfddc59_lang.8d17b183.js",
            "./SearchResults.cf85b9d0.css",
            "./TransitionExpand.b7299dda.js",
            "./TransitionExpand.vue_vue_type_style_index_0_scoped_ab5478b5_lang.c2805c90.js",
            "./TransitionExpand.358b7368.css",
            "./SearchResults.515e03ca.js",
            "./AnimalSliderCard.3d00e042.js",
            "./AnimalSliderCard.vue_vue_type_style_index_0_scoped_2bb4687e_lang.25a381c7.js",
            "./AnimalSliderCard.7bfa47f6.css",
            "./AppImage.9bc8cdcc.js",
            "./nuxt-img.6cd8cff3.js",
            "./LearnMoreCard.ed396117.js",
            "./MagazineCard.b0205bf6.js",
            "./AdultCard.48aac999.js",
            "./ActivistCard.9fbe7622.js",
            "./PageCard.b076015c.js",
            "./FilterSidebar.4302b82f.js",
            "./Sidebar.a81ef872.js",
            "./sok.7c75314c.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: (Ra = it == null ? void 0 : it.name) != null ? Ra : "vego-slug",
      path: ($a = it == null ? void 0 : it.path) != null ? $a : "/vego/:slug",
      file: "/Users/Adam/Projects/djurens-ratt/rdk/pages/vego/[slug].vue",
      children: [],
      meta: it,
      alias: (it == null ? void 0 : it.alias) || [],
      redirect: (it == null ? void 0 : it.redirect) || void 0,
      component: () =>
        K(
          () => import("./_slug_.4ef02745.js"),
          [
            "./_slug_.4ef02745.js",
            "./urlTools.7e20410a.js",
            "./PageArticle.9a99e4cf.js",
            "./PageArticle.vue_vue_type_style_index_0_scoped_d3e8b27d_lang.2510b67f.js",
            "./PageArticle.a907c3df.css",
            "./AppImage.9bc8cdcc.js",
            "./nuxt-img.6cd8cff3.js",
            "./_slug_.f5deb543.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: (La = ot == null ? void 0 : ot.name) != null ? La : "vego",
      path: (Ma = ot == null ? void 0 : ot.path) != null ? Ma : "/vego",
      file: "/Users/Adam/Projects/djurens-ratt/rdk/pages/vego/index.vue",
      children: [],
      meta: ot,
      alias: (ot == null ? void 0 : ot.alias) || [],
      redirect: (ot == null ? void 0 : ot.redirect) || void 0,
      component: () =>
        K(
          () => import("./index.677fd6aa.js"),
          [
            "./index.677fd6aa.js",
            "./urlTools.7e20410a.js",
            "./PageSearch.11fca8a7.js",
            "./PageSearch.vue_vue_type_style_index_0_scoped_99e80430_lang.a8536c95.js",
            "./PageSearch.cc210a0f.css",
            "./TagsList.91a9f417.js",
            "./PageTitle.155ae597.js",
            "./InfoCard.9cb0375c.js",
            "./InfoCard.vue_vue_type_style_index_0_scoped_b1c8dc52_lang.08b16729.js",
            "./InfoCard.26090f6a.css",
            "./AppImage.9bc8cdcc.js",
            "./nuxt-img.6cd8cff3.js",
            "./tik-tok.94263fee.js",
            "./index.fd311a57.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name:
        (Ia = lt == null ? void 0 : lt.name) != null ? Ia : "vego-recept-slug",
      path:
        (ja = lt == null ? void 0 : lt.path) != null
          ? ja
          : "/vego/recept/:slug",
      file: "/Users/Adam/Projects/djurens-ratt/rdk/pages/vego/recept/[slug].vue",
      children: [],
      meta: lt,
      alias: (lt == null ? void 0 : lt.alias) || [],
      redirect: (lt == null ? void 0 : lt.redirect) || void 0,
      component: () =>
        K(
          () => import("./_slug_.aeef2bc1.js"),
          [
            "./_slug_.aeef2bc1.js",
            "./urlTools.7e20410a.js",
            "./RecipeSlider.0eaed929.js",
            "./RecipeSlider.vue_vue_type_style_index_0_scoped_23ef5c26_lang.99e026dc.js",
            "./navigation.min.304073bc.js",
            "./navigation.079e38c4.css",
            "./RecipeSlider.1de5e8bf.css",
            "./RecipeSliderCard.ebe1b188.js",
            "./AppImage.9bc8cdcc.js",
            "./nuxt-img.6cd8cff3.js",
            "./PageArticle.9a99e4cf.js",
            "./PageArticle.vue_vue_type_style_index_0_scoped_d3e8b27d_lang.2510b67f.js",
            "./PageArticle.a907c3df.css",
            "./_slug_.7f7602d8.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: (Da = at == null ? void 0 : at.name) != null ? Da : "vego-recept",
      path: (Ba = at == null ? void 0 : at.path) != null ? Ba : "/vego/recept",
      file: "/Users/Adam/Projects/djurens-ratt/rdk/pages/vego/recept/index.vue",
      children: [],
      meta: at,
      alias: (at == null ? void 0 : at.alias) || [],
      redirect: (at == null ? void 0 : at.redirect) || void 0,
      component: () =>
        K(
          () => import("./index.313b4156.js"),
          [
            "./index.313b4156.js",
            "./urlTools.7e20410a.js",
            "./PageSearch.11fca8a7.js",
            "./PageSearch.vue_vue_type_style_index_0_scoped_99e80430_lang.a8536c95.js",
            "./PageSearch.cc210a0f.css",
            "./TagsList.91a9f417.js",
            "./PageTitle.155ae597.js",
            "./InfoCard.9cb0375c.js",
            "./InfoCard.vue_vue_type_style_index_0_scoped_b1c8dc52_lang.08b16729.js",
            "./InfoCard.26090f6a.css",
            "./AppImage.9bc8cdcc.js",
            "./nuxt-img.6cd8cff3.js",
            "./tik-tok.94263fee.js",
            "./index.fe28fcd9.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name:
        (Na = ct == null ? void 0 : ct.name) != null
          ? Na
          : "vego-tips-parent-slug",
      path:
        (Ha = ct == null ? void 0 : ct.path) != null
          ? Ha
          : "/vego/tips/:parent/:slug",
      file: "/Users/Adam/Projects/djurens-ratt/rdk/pages/vego/tips/[parent]/[slug].vue",
      children: [],
      meta: ct,
      alias: (ct == null ? void 0 : ct.alias) || [],
      redirect: (ct == null ? void 0 : ct.redirect) || void 0,
      component: () =>
        K(
          () => import("./_slug_.d4a8d4da.js"),
          [
            "./_slug_.d4a8d4da.js",
            "./urlTools.7e20410a.js",
            "./PageArticle.9a99e4cf.js",
            "./PageArticle.vue_vue_type_style_index_0_scoped_d3e8b27d_lang.2510b67f.js",
            "./PageArticle.a907c3df.css",
            "./AppImage.9bc8cdcc.js",
            "./nuxt-img.6cd8cff3.js",
            "./_slug_.f240e2fb.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name:
        (Fa = ut == null ? void 0 : ut.name) != null ? Fa : "vego-tips-slug",
      path:
        (za = ut == null ? void 0 : ut.path) != null ? za : "/vego/tips/:slug",
      file: "/Users/Adam/Projects/djurens-ratt/rdk/pages/vego/tips/[slug].vue",
      children: [],
      meta: ut,
      alias: (ut == null ? void 0 : ut.alias) || [],
      redirect: (ut == null ? void 0 : ut.redirect) || void 0,
      component: () =>
        K(
          () => import("./_slug_.433171de.js"),
          [
            "./_slug_.433171de.js",
            "./urlTools.7e20410a.js",
            "./PageArticle.9a99e4cf.js",
            "./PageArticle.vue_vue_type_style_index_0_scoped_d3e8b27d_lang.2510b67f.js",
            "./PageArticle.a907c3df.css",
            "./AppImage.9bc8cdcc.js",
            "./nuxt-img.6cd8cff3.js",
            "./_slug_.0f621b2b.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: (Ua = dt == null ? void 0 : dt.name) != null ? Ua : "vego-tips",
      path: (Va = dt == null ? void 0 : dt.path) != null ? Va : "/vego/tips",
      file: "/Users/Adam/Projects/djurens-ratt/rdk/pages/vego/tips/index.vue",
      children: [],
      meta: dt,
      alias: (dt == null ? void 0 : dt.alias) || [],
      redirect: (dt == null ? void 0 : dt.redirect) || void 0,
      component: () =>
        K(
          () => import("./index.31e73553.js"),
          [
            "./index.31e73553.js",
            "./urlTools.7e20410a.js",
            "./PageSearch.11fca8a7.js",
            "./PageSearch.vue_vue_type_style_index_0_scoped_99e80430_lang.a8536c95.js",
            "./PageSearch.cc210a0f.css",
            "./TagsList.91a9f417.js",
            "./PageTitle.155ae597.js",
            "./InfoCard.9cb0375c.js",
            "./InfoCard.vue_vue_type_style_index_0_scoped_b1c8dc52_lang.08b16729.js",
            "./InfoCard.26090f6a.css",
            "./AppImage.9bc8cdcc.js",
            "./nuxt-img.6cd8cff3.js",
            "./index.550f0ad7.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name:
        (qa = ft == null ? void 0 : ft.name) != null
          ? qa
          : "vuxen-eller-pedagog-slug",
      path:
        (Wa = ft == null ? void 0 : ft.path) != null
          ? Wa
          : "/vuxen-eller-pedagog/:slug",
      file: "/Users/Adam/Projects/djurens-ratt/rdk/pages/vuxen-eller-pedagog/[slug].vue",
      children: [],
      meta: ft,
      alias: (ft == null ? void 0 : ft.alias) || [],
      redirect: (ft == null ? void 0 : ft.redirect) || void 0,
      component: () =>
        K(
          () => import("./_slug_.d9042123.js"),
          [
            "./_slug_.d9042123.js",
            "./urlTools.7e20410a.js",
            "./PageArticle.9a99e4cf.js",
            "./PageArticle.vue_vue_type_style_index_0_scoped_d3e8b27d_lang.2510b67f.js",
            "./PageArticle.a907c3df.css",
            "./AppImage.9bc8cdcc.js",
            "./nuxt-img.6cd8cff3.js",
            "./_slug_.7bd56293.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name:
        (Ka = pt == null ? void 0 : pt.name) != null
          ? Ka
          : "vuxen-eller-pedagog",
      path:
        (Ga = pt == null ? void 0 : pt.path) != null
          ? Ga
          : "/vuxen-eller-pedagog",
      file: "/Users/Adam/Projects/djurens-ratt/rdk/pages/vuxen-eller-pedagog/index.vue",
      children: [],
      meta: pt,
      alias: (pt == null ? void 0 : pt.alias) || [],
      redirect: (pt == null ? void 0 : pt.redirect) || void 0,
      component: () =>
        K(
          () => import("./index.a8730312.js"),
          [
            "./index.a8730312.js",
            "./urlTools.7e20410a.js",
            "./PageSearch.11fca8a7.js",
            "./PageSearch.vue_vue_type_style_index_0_scoped_99e80430_lang.a8536c95.js",
            "./PageSearch.cc210a0f.css",
            "./TagsList.91a9f417.js",
            "./PageTitle.155ae597.js",
            "./InfoCard.9cb0375c.js",
            "./InfoCard.vue_vue_type_style_index_0_scoped_b1c8dc52_lang.08b16729.js",
            "./InfoCard.26090f6a.css",
            "./AppImage.9bc8cdcc.js",
            "./nuxt-img.6cd8cff3.js",
            "./index.3e846fe4.css",
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
  ],
  Jy = {
    scrollBehavior(e, t, n) {
      const r = Ee();
      let s = n || void 0;
      if (
        (!s &&
          t &&
          e &&
          e.meta.scrollToTop !== !1 &&
          Qy(t, e) &&
          (s = { left: 0, top: 0 }),
        e.path === t.path)
      ) {
        if (t.hash && !e.hash) return { left: 0, top: 0 };
        if (e.hash) return { el: e.hash, top: zl(e.hash) };
      }
      const i = (a) => {
          var l;
          return !!((l = a.meta.pageTransition) != null ? l : Mi);
        },
        o = i(t) && i(e) ? "page:transition:finish" : "page:finish";
      return new Promise((a) => {
        r.hooks.hookOnce(o, async () => {
          await An(), e.hash && (s = { el: e.hash, top: zl(e.hash) }), a(s);
        });
      });
    },
  };
function zl(e) {
  try {
    const t = document.querySelector(e);
    if (t) return parseFloat(getComputedStyle(t).scrollMarginTop);
  } catch {}
  return 0;
}
function Qy(e, t) {
  const n = e.matched[0] === t.matched[0];
  return !!(!n || (n && JSON.stringify(e.params) !== JSON.stringify(t.params)));
}
const Zy = {},
  Vt = { ...Zy, ...Jy },
  ev = wm(async (e) => {
    var s;
    let t, n;
    if (!((s = e.meta) != null && s.validate)) return;
    const r =
      (([t, n] = Cr(() => Promise.resolve(e.meta.validate(e)))),
      (t = await t),
      n(),
      t);
    return typeof r == "boolean" ? r : gs(r);
  }),
  tv = [ev],
  si = {};
function nv(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    i = e.indexOf("#");
  if (i > -1) {
    const a = s.includes(e.slice(i)) ? e.slice(i).length : 1;
    let l = s.slice(a);
    return l[0] !== "/" && (l = "/" + l), fl(l, "");
  }
  return fl(n, e) + r + s;
}
const rv = pn(async (e) => {
  var m, v, b, _;
  let t,
    n,
    r = hn().app.baseURL;
  Vt.hashMode && !r.includes("#") && (r += "#");
  const s =
      (v = (m = Vt.history) == null ? void 0 : m.call(Vt, r)) != null
        ? v
        : Vt.hashMode
        ? fy(r)
        : Ru(r),
    i =
      (_ = (b = Vt.routes) == null ? void 0 : b.call(Vt, Fl)) != null ? _ : Fl,
    o = nv(r, window.location),
    a = Yy({ ...Vt, history: s, routes: i });
  e.vueApp.use(a);
  const l = yi(a.currentRoute.value);
  a.afterEach((p, g) => {
    l.value = g;
  }),
    Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
      get: () => l.value,
    });
  const c = yi(a.resolve(o)),
    u = () => {
      c.value = a.currentRoute.value;
    };
  e.hook("page:finish", u),
    a.afterEach((p, g) => {
      var S, C, P, O;
      ((C = (S = p.matched[0]) == null ? void 0 : S.components) == null
        ? void 0
        : C.default) ===
        ((O = (P = g.matched[0]) == null ? void 0 : P.components) == null
          ? void 0
          : O.default) && u();
    });
  const d = {};
  for (const p in c.value) d[p] = Me(() => c.value[p]);
  (e._route = Pt(d)),
    (e._middleware = e._middleware || { global: [], named: {} });
  const f = Ms();
  try {
    ([t, n] = Cr(() => a.isReady())), await t, n();
  } catch (p) {
    nn(e, gr, [p]);
  }
  const h = _m("_layout");
  return (
    a.beforeEach(async (p, g) => {
      var C, P;
      (p.meta = Pt(p.meta)),
        e.isHydrating &&
          (p.meta.layout = (C = h.value) != null ? C : p.meta.layout),
        (e._processingMiddleware = !0);
      const S = new Set([...tv, ...e._middleware.global]);
      for (const O of p.matched) {
        const E = O.meta.middleware;
        if (!!E)
          if (Array.isArray(E)) for (const N of E) S.add(N);
          else S.add(E);
      }
      for (const O of S) {
        const E =
          typeof O == "string"
            ? e._middleware.named[O] ||
              (await ((P = si[O]) == null
                ? void 0
                : P.call(si).then((k) => k.default || k)))
            : O;
        if (!E) throw new Error(`Unknown route middleware: '${O}'.`);
        const N = await nn(e, E, [p, g]);
        if (
          !e.payload.serverRendered &&
          e.isHydrating &&
          (N === !1 || N instanceof Error)
        ) {
          const k =
            N || $i({ statusCode: 404, statusMessage: `Page Not Found: ${o}` });
          return await nn(e, gr, [k]), !1;
        }
        if (N || N === !1) return N;
      }
    }),
    a.afterEach(async (p) => {
      delete e._processingMiddleware,
        !e.isHydrating && f.value && (await nn(e, gm)),
        p.matched.length === 0 &&
          nn(e, gr, [
            $i({
              statusCode: 404,
              fatal: !1,
              statusMessage: `Page not found: ${p.fullPath}`,
            }),
          ]);
    }),
    e.hooks.hookOnce("app:created", async () => {
      try {
        await a.replace({ ...a.resolve(o), name: void 0, force: !0 });
      } catch (p) {
        nn(e, gr, [p]);
      }
    }),
    { provide: { router: a } }
  );
});
function Ul(e = { serializable: !0 }) {
  let t = {};
  return {
    get(n, r, s = { miss: () => Promise.resolve() }) {
      const i = JSON.stringify(n);
      if (i in t)
        return Promise.resolve(e.serializable ? JSON.parse(t[i]) : t[i]);
      const o = r(),
        a = (s && s.miss) || (() => Promise.resolve());
      return o.then((l) => a(l)).then(() => o);
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
const sv = pn(async (e) => {
    let t, n;
    const {
        applicationId: r,
        apiKey: s,
        lite: i,
        recommend: o,
        cache: a,
      } = hn().algolia,
      l = i
        ? (([t, n] = Cr(() =>
            K(
              () => import("./algoliasearch-lite.esm.browser.4e49c96a.js"),
              [],
              import.meta.url
            ).then((u) => u.default || u)
          )),
          (t = await t),
          n(),
          t)
        : (([t, n] = Cr(() =>
            K(
              () => import("./algoliasearch.esm.browser.e0756009.js"),
              [],
              import.meta.url
            ).then((u) => u.default || u)
          )),
          (t = await t),
          n(),
          t),
      c = a
        ? l(r, s, {
            responsesCache: Ul(),
            requestsCache: Ul({ serializable: !1 }),
          })
        : l(r, s);
    if ((e.provide("algolia", c), o)) {
      const u =
        (([t, n] = Cr(() =>
          K(
            () => import("./recommend.esm.browser.9eac2a2f.js"),
            [],
            import.meta.url
          ).then((d) => d.default || d)
        )),
        (t = await t),
        n(),
        t);
      e.provide("algoliaRecommend", u(r, s));
    }
  }),
  iv = pn(() => {
    hn().public.content.wsUrl &&
      K(() => import("./web-socket.12dfcf6f.js"), [], import.meta.url).then(
        ({ useContentWebSocket: t }) => t()
      );
  });
async function ov(e, t) {
  return await lv(t).catch(
    (r) => (
      console.error("Failed to get image meta for " + t, r + ""),
      { width: 0, height: 0, ratio: 0 }
    )
  );
}
async function lv(e) {
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
function GS(e = "") {
  return e.split(/[?#]/).shift().split("/").pop().split(".").pop();
}
function Vl(e) {
  return (t) => (t ? e[t] || t : e.missingValue);
}
function Fu({ formatter: e, keyMap: t, joinWith: n = "/", valueMap: r } = {}) {
  e || (e = (i, o) => `${i}=${o}`), t && typeof t != "function" && (t = Vl(t));
  const s = r || {};
  return (
    Object.keys(s).forEach((i) => {
      typeof s[i] != "function" && (s[i] = Vl(s[i]));
    }),
    (i = {}) =>
      Object.entries(i)
        .filter(([a, l]) => typeof l < "u")
        .map(([a, l]) => {
          const c = s[a];
          return (
            typeof c == "function" && (l = c(i[a])),
            (a = typeof t == "function" ? t(a) : a),
            e(a, l)
          );
        })
        .join(n)
  );
}
function bs(e = "") {
  if (typeof e == "number") return e;
  if (typeof e == "string" && e.replace("px", "").match(/^\d+$/g))
    return parseInt(e, 10);
}
function av(e) {
  const t = { options: e },
    n = (s, i = {}) => zu(t, s, i),
    r = (s, i = {}, o = {}) =>
      n(s, { ...o, modifiers: js(i, o.modifiers || {}) }).url;
  for (const s in e.presets)
    r[s] = (i, o, a) => r(i, o, { ...e.presets[s], ...a });
  return (
    (r.options = e),
    (r.getImage = n),
    (r.getMeta = (s, i) => cv(t, s, i)),
    (r.getSizes = (s, i) => fv(t, s, i)),
    (t.$img = r),
    r
  );
}
async function cv(e, t, n) {
  const r = zu(e, t, { ...n });
  return typeof r.getMeta == "function"
    ? await r.getMeta()
    : await ov(e, r.url);
}
function zu(e, t, n) {
  var c, u;
  if (typeof t != "string" || t === "")
    throw new TypeError(
      `input must be a string (received ${typeof t}: ${JSON.stringify(t)})`
    );
  if (t.startsWith("data:")) return { url: t };
  const { provider: r, defaults: s } = uv(e, n.provider || e.options.provider),
    i = dv(e, n.preset);
  if (((t = Jn(t) ? t : au(t)), !r.supportsAlias))
    for (const d in e.options.alias)
      t.startsWith(d) && (t = Ht(e.options.alias[d], t.substr(d.length)));
  if (r.validateDomains && Jn(t)) {
    const d = Dr(t).host;
    if (!e.options.domains.find((f) => f === d)) return { url: t };
  }
  const o = js(n, i, s);
  o.modifiers = { ...o.modifiers };
  const a = o.modifiers.format;
  (c = o.modifiers) != null &&
    c.width &&
    (o.modifiers.width = bs(o.modifiers.width)),
    (u = o.modifiers) != null &&
      u.height &&
      (o.modifiers.height = bs(o.modifiers.height));
  const l = r.getImage(t, o, e);
  return (l.format = l.format || a || ""), l;
}
function uv(e, t) {
  const n = e.options.providers[t];
  if (!n) throw new Error("Unknown provider: " + t);
  return n;
}
function dv(e, t) {
  if (!t) return {};
  if (!e.options.presets[t]) throw new Error("Unknown preset: " + t);
  return e.options.presets[t];
}
function fv(e, t, n) {
  var c, u;
  const r = bs((c = n.modifiers) == null ? void 0 : c.width),
    s = bs((u = n.modifiers) == null ? void 0 : u.height),
    i = r && s ? s / r : 0,
    o = [],
    a = {};
  if (typeof n.sizes == "string")
    for (const d of n.sizes.split(/[\s,]+/).filter((f) => f)) {
      const f = d.split(":");
      f.length === 2 && (a[f[0].trim()] = f[1].trim());
    }
  else Object.assign(a, n.sizes);
  for (const d in a) {
    const f = (e.options.screens && e.options.screens[d]) || parseInt(d);
    let h = String(a[d]);
    const m = h.endsWith("vw");
    if ((!m && /^\d+$/.test(h) && (h = h + "px"), !m && !h.endsWith("px")))
      continue;
    let v = parseInt(h);
    if (!f || !v) continue;
    m && (v = Math.round((v / 100) * f));
    const b = i ? Math.round(v * i) : s;
    o.push({
      width: v,
      size: h,
      screenMaxWidth: f,
      media: `(max-width: ${f}px)`,
      src: e.$img(t, { ...n.modifiers, width: v, height: b }, n),
    });
  }
  o.sort((d, f) => d.screenMaxWidth - f.screenMaxWidth);
  const l = o[o.length - 1];
  return (
    l && (l.media = ""),
    {
      sizes: o
        .map((d) => `${d.media ? d.media + " " : ""}${d.size}`)
        .join(", "),
      srcset: o.map((d) => `${d.src} ${d.width}w`).join(", "),
      src: l == null ? void 0 : l.src,
    }
  );
}
const ql = (e) => (e.startsWith("#") ? e.replace("#", "rgb_") : e),
  pv = (e) => e.replace(/\.[^/.]+$/, ""),
  hv = Fu({
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
        return ql(e);
      },
      color(e) {
        return ql(e);
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
  mv = { format: "auto", quality: "auto" },
  gv = (e, { modifiers: t = {}, baseURL: n = "/" } = {}) => {
    const r = js(t, mv),
      s = hv(r),
      i = n.match(/\/image\/upload\/(.*)/);
    if ((i == null ? void 0 : i.length) >= 1) {
      const o = i[1],
        a = n.replace(o, "");
      return { url: Ht(a, s, o, e) };
    } else /\/image\/fetch\/?/.test(n) ? (e = mo(e)) : (e = pv(e));
    return { url: Ht(n, s, e) };
  },
  yv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, getImage: gv },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  vv = Fu({
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
    formatter: (e, t) => dl(e) + "_" + dl(t),
  }),
  bv = (e, { modifiers: t = {}, baseURL: n } = {}, r) => {
    t.width &&
      t.height &&
      ((t.resize = `${t.width}x${t.height}`), delete t.width, delete t.height);
    const s = vv(t) || "_";
    return n || (n = Ht("/", "/_ipx")), { url: Ht(n, s, mo(e)) };
  },
  _v = !0,
  wv = !0,
  Sv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, getImage: bv, validateDomains: _v, supportsAlias: wv },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Uu = {
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
Uu.providers = {
  cloudinary: {
    provider: yv,
    defaults: {
      baseURL: "https://res.cloudinary.com/klandestino-ab/image/upload/",
    },
  },
  ipx: { provider: Sv, defaults: {} },
};
const Cv = pn(() => ({ provide: { img: av(Uu) } })),
  Ev = pn((e) => {
    !qm() ||
      (e.hooks.hook("link:prefetch", (t) => {
        if (!Dr(t).protocol) return Sl(t);
      }),
      Br().beforeResolve(async (t, n) => {
        if (t.path === n.path) return;
        const r = await Sl(t.path);
        !r || Object.assign(e.static.data, r.data);
      }));
  });
var YS =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Vu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var qu = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(window, function () {
    return (function (n) {
      var r = {};
      function s(i) {
        if (r[i]) return r[i].exports;
        var o = (r[i] = { i, l: !1, exports: {} });
        return n[i].call(o.exports, o, o.exports, s), (o.l = !0), o.exports;
      }
      return (
        (s.m = n),
        (s.c = r),
        (s.d = function (i, o, a) {
          s.o(i, o) || Object.defineProperty(i, o, { enumerable: !0, get: a });
        }),
        (s.r = function (i) {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(i, "__esModule", { value: !0 });
        }),
        (s.t = function (i, o) {
          if (
            (1 & o && (i = s(i)),
            8 & o || (4 & o && typeof i == "object" && i && i.__esModule))
          )
            return i;
          var a = Object.create(null);
          if (
            (s.r(a),
            Object.defineProperty(a, "default", { enumerable: !0, value: i }),
            2 & o && typeof i != "string")
          )
            for (var l in i)
              s.d(
                a,
                l,
                function (c) {
                  return i[c];
                }.bind(null, l)
              );
          return a;
        }),
        (s.n = function (i) {
          var o =
            i && i.__esModule
              ? function () {
                  return i.default;
                }
              : function () {
                  return i;
                };
          return s.d(o, "a", o), o;
        }),
        (s.o = function (i, o) {
          return Object.prototype.hasOwnProperty.call(i, o);
        }),
        (s.p = ""),
        s((s.s = 0))
      );
    })([
      function (n, r, s) {
        function i() {
          return window.Piwik.getAsyncTracker();
        }
        function o(m) {
          var v =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : void 0;
          return new Promise(function (b, _) {
            var p = document.createElement("script");
            (p.async = !0),
              (p.defer = !0),
              (p.src = m),
              v &&
                ["anonymous", "use-credentials"].includes(v) &&
                (p.crossOrigin = v),
              (
                document.head || document.getElementsByTagName("head")[0]
              ).appendChild(p),
              (p.onload = b),
              (p.onerror = _);
          });
        }
        function a(m, v) {
          return m.resolve(v).href;
        }
        s.r(r),
          s.d(r, "matomoKey", function () {
            return c;
          }),
          s.d(r, "default", function () {
            return h;
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
        function u(m, v, b) {
          if (typeof m.trackSiteSearch == "function") {
            var _ = m.trackSiteSearch(v);
            if (_)
              return void (function (p, g) {
                var S = g.keyword,
                  C = g.category,
                  P = g.resultsCount,
                  O = i();
                p.debug && console.debug("[vue-matomo] Site Search " + S),
                  O.trackSiteSearch(S, C, P);
              })(m, _);
          }
          (function (p, g, S) {
            var C,
              P,
              O,
              E = i();
            if (p.router) {
              if (
                ((P = a(p.router, g.fullPath)),
                (O = S && S.fullPath ? a(p.router, S.fullPath) : void 0),
                g.meta.analyticsIgnore)
              )
                return void (
                  p.debug && console.debug("[vue-matomo] Ignoring " + P)
                );
              p.debug && console.debug("[vue-matomo] Tracking " + P),
                (C = g.meta.title || P);
            }
            O && E.setReferrerUrl(window.location.origin + O),
              P && E.setCustomUrl(window.location.origin + P),
              E.trackPageView(C);
          })(m, v, b);
        }
        function d(m, v) {
          var b = i();
          if (
            (Number(m.version.split(".")[0]) > 2
              ? ((m.config.globalProperties.$piwik = b),
                (m.config.globalProperties.$matomo = b),
                m.provide(c, b))
              : ((m.prototype.$piwik = b), (m.prototype.$matomo = b)),
            v.trackInitialView && v.router)
          ) {
            var _ = v.router.currentRoute.value
              ? v.router.currentRoute.value
              : v.router.currentRoute;
            u(v, _);
          }
          v.router &&
            v.router.afterEach(function (p, g) {
              u(v, p, g), v.enableLinkTracking && b.enableLinkTracking();
            });
        }
        function f() {
          return new Promise(function (m, v) {
            var b = Date.now(),
              _ = setInterval(function () {
                if (window.Piwik) return clearInterval(_), m();
                if (Date.now() >= b + 3e3)
                  throw (
                    (clearInterval(_),
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
        function h(m) {
          var v =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            b = Object.assign({}, l, v),
            _ = b.host,
            p = b.siteId,
            g = b.trackerFileName,
            S = b.trackerUrl,
            C = b.trackerScriptUrl,
            P = C || "".concat(_, "/").concat(g, ".js"),
            O = S || "".concat(_, "/").concat(g, ".php");
          (window._paq = window._paq || []),
            window._paq.push(["setTrackerUrl", O]),
            window._paq.push(["setSiteId", p]),
            b.requireConsent && window._paq.push(["requireConsent"]),
            b.userId && window._paq.push(["setUserId", b.userId]),
            b.enableLinkTracking && window._paq.push(["enableLinkTracking"]),
            b.disableCookies && window._paq.push(["disableCookies"]),
            b.requireCookieConsent &&
              window._paq.push(["requireCookieConsent"]),
            b.enableHeartBeatTimer &&
              window._paq.push([
                "enableHeartBeatTimer",
                b.heartBeatTimerInterval,
              ]),
            b.cookieDomain &&
              window._paq.push(["setCookieDomain", b.cookieDomain]),
            b.domains && window._paq.push(["setDomains", b.domains]),
            b.preInitActions.forEach(function (E) {
              return window._paq.push(E);
            }),
            o(P, b.crossOrigin)
              .then(function () {
                return f();
              })
              .then(function () {
                return d(m, b);
              })
              .catch(function (E) {
                if (E.target)
                  return console.error(
                    "[vue-matomo] An error occurred trying to load ".concat(
                      E.target.src,
                      ". "
                    ) +
                      "If the file exists you may have an ad- or trackingblocker enabled."
                  );
                console.error(E);
              });
        }
      },
    ]);
  });
})(qu);
const Tv = Vu(qu.exports),
  kv = pn((e) => {
    e.vueApp.use(Tv, {
      router: e.router,
      requireConsent: !1,
      disableCookies: !0,
      debug: !0,
      host: "https://a.djurensratt.se",
      siteId: 1,
    });
  }),
  xv = [eg, Gg, rv, sv, iv, Cv, Ev, kv],
  Pv = zt({
    setup() {
      const e = lr();
      gu({
        link: [
          { rel: "canonical", href: "https://www.raddadjuren.se" + e.path },
        ],
      });
    },
  }),
  Ov = zt({
    name: "navigation-item",
    props: {
      label: { type: String, required: !0 },
      icon: { type: String, required: !0 },
      href: { type: String, required: !0 },
      iconVariant: { type: String, default: null },
    },
  }),
  Av = zt({
    props: {
      external: { default: !1, type: Boolean },
      href: { default: null, type: String },
    },
    computed: {
      hrefIsExternal() {
        return this.href.startsWith("http");
      },
    },
  }),
  Rv = ["href"];
function $v(e, t, n, r, s, i) {
  const o = Is;
  return e.external || e.hrefIsExternal
    ? (ce(),
      _e(
        "a",
        {
          key: 0,
          class: "link",
          href: e.href,
          ref: "external",
          target: "_blank",
        },
        [Sn(e.$slots, "default")],
        8,
        Rv
      ))
    : (ce(),
      un(
        o,
        { key: 1, class: "link", to: e.href },
        { default: xe(() => [Sn(e.$slots, "default")]), _: 3 },
        8,
        ["to"]
      ));
}
const St = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, s] of t) n[r] = s;
    return n;
  },
  Nr = St(Av, [["render", $v]]),
  XS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Nr },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Lv = { class: "sm_flex-1 my-2 sm_my-0 flex items-center" },
  Mv = ["src"];
function Iv(e, t, n, r, s, i) {
  const o = Nr;
  return (
    ce(),
    un(
      o,
      {
        class:
          "navigation-item pb-2 sm_pb-1 px-4 flex flex-col items-center justify-center text-sm font-bold text-center rounded-lg transform hover_scale-105",
        href: e.href,
      },
      {
        default: xe(() => [
          B("div", Lv, [
            B(
              "img",
              {
                class: Pn(["icon w-12 sm_w-9 h-12 sm_h-9", e.iconVariant]),
                src: e.icon,
              },
              null,
              10,
              Mv
            ),
          ]),
          B("p", null, Tt(e.label), 1),
        ]),
        _: 1,
      },
      8,
      ["href"]
    )
  );
}
const So = St(Ov, [
    ["render", Iv],
    ["__scopeId", "data-v-d9e3917e"],
  ]),
  JS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: So },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  jv = { class: "relative xl_static text-white", role: "navigation" },
  Dv = {
    class: "mx-auto w-full max-w-screen-md flex justify-center space-x-6",
  };
function Bv(e, t) {
  const n = So,
    r = Is;
  return (
    ce(),
    _e("nav", jv, [
      B("ul", Dv, [
        B("li", null, [
          W(n, {
            class: "bg-green",
            label: "Djurfakta",
            href: "/",
            icon: "/images/whale.svg",
          }),
        ]),
        B("li", null, [
          W(n, {
            class: "bg-pink",
            label: "L\xE4r dig mer",
            href: "/lar-dig-mer",
            icon: "/images/learn-more-chick.svg",
          }),
        ]),
        B("li", null, [
          W(n, {
            class: "bg-peach",
            label: "Hj\xE4lp djuren",
            href: "/hjalp-djuren",
            icon: "/images/help-animals-hands.svg",
          }),
        ]),
        B("li", null, [
          W(n, {
            class: "bg-green-dark",
            label: "Vego",
            href: "/vego",
            icon: "/images/vego-recipe-cake.svg",
          }),
        ]),
        B("li", null, [
          W(n, {
            class: "bg-blue",
            label: "G\xE5 med i klubben",
            href: "https://interact.djurensratt.se/ge-medlemskap/raddadjuren",
            icon: "/images/become-member-piglet.svg",
            iconVariant: "piglet",
          }),
        ]),
      ]),
      W(
        r,
        {
          class:
            "absolute top-0 right-0 -mt-16 md_mt-0 xl_mt-32 block py-3 px-4 text-xs font-bold bg-purple-dark rounded-l-lg z-40",
          to: "/vuxen-eller-pedagog",
        },
        { default: xe(() => [Dt("Vuxen?")]), _: 1 }
      ),
    ])
  );
}
const Nv = {},
  Wu = St(Nv, [["render", Bv]]),
  QS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Wu },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Hv = {
    class:
      "my-8 flex flex-col xl_flex-row space-y-8 xl_space-y-0 xl_space-x-16 xl_justify-between xl_container",
  },
  Fv = B(
    "h1",
    { class: "font-headline text-3xl lg_text-4xl" },
    "R\xE4dda Djuren-klubben",
    -1
  ),
  zv = B(
    "p",
    { class: "hidden sm_block md_text-lg lg_text-xl" },
    "Fakta om djuren och deras liv",
    -1
  );
function Uv(e, t) {
  const n = Is,
    r = Wu;
  return (
    ce(),
    _e("div", Hv, [
      W(
        n,
        { class: "text-white text-center xl_text-left", to: "/" },
        { default: xe(() => [Fv, zv]), _: 1 }
      ),
      W(r, { class: "hidden sm_block" }),
    ])
  );
}
const Vv = {},
  Ku = St(Vv, [["render", Uv]]),
  ZS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ku },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  qv = (e, t) =>
    t.path
      .replace(/(:\w+)\([^)]+\)/g, "$1")
      .replace(/(:\w+)[?+*]/g, "$1")
      .replace(/:\w+/g, (n) => {
        var r;
        return (
          ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
        );
      }),
  Wv = (e, t) => {
    var s;
    const n = t.route.matched.find((i) => {
        var o;
        return (
          ((o = i.components) == null ? void 0 : o.default) === t.Component.type
        );
      }),
      r =
        (s = e != null ? e : n == null ? void 0 : n.meta.key) != null
          ? s
          : n && qv(t.route, n);
    return typeof r == "function" ? r(t.route) : r;
  },
  Kv = (e, t) => ({ default: () => (e ? de(Yf, e === !0 ? {} : e, t) : t) }),
  Gv = Ft({
    setup(e, { slots: t }) {
      return () => {
        var n;
        return (n = t.default) == null ? void 0 : n.call(t);
      };
    },
  }),
  Yv = (e, t, n) => ({
    default: () => (t ? de(e, t === !0 ? {} : t, n) : de(Gv, {}, n)),
  }),
  Gu = Ft({
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
      const n = Ee();
      return () =>
        de(
          Hu,
          { name: e.name, route: e.route, ...t },
          {
            default: (r) => {
              var l, c, u, d;
              if (!r.Component) return;
              const s = Wv(e.pageKey, r),
                i = n.deferHydration(),
                o = !!((c =
                  (l = e.transition) != null
                    ? l
                    : r.route.meta.pageTransition) != null
                  ? c
                  : Mi),
                a =
                  o &&
                  Jv(
                    [
                      e.transition,
                      r.route.meta.pageTransition,
                      Mi,
                      {
                        onAfterLeave: () => {
                          n.callHook("page:transition:finish", r.Component);
                        },
                      },
                    ].filter(Boolean)
                  );
              return Yv(
                Ls,
                o && a,
                Kv(
                  (d =
                    (u = e.keepalive) != null ? u : r.route.meta.keepalive) !=
                    null
                    ? d
                    : Wg,
                  de(
                    Tc,
                    {
                      onPending: () => n.callHook("page:start", r.Component),
                      onResolve: () => {
                        An(() =>
                          n.callHook("page:finish", r.Component).finally(i)
                        );
                      },
                    },
                    {
                      default: () =>
                        de(Qv, {
                          key: s,
                          routeProps: r,
                          pageKey: s,
                          hasTransition: o,
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
function Xv(e) {
  return Array.isArray(e) ? e : e ? [e] : [];
}
function Jv(e) {
  const t = e.map((n) => ({ ...n, onAfterLeave: Xv(n.onAfterLeave) }));
  return js(...t);
}
const Qv = Ft({
    props: ["routeProps", "pageKey", "hasTransition"],
    setup(e) {
      const t = e.pageKey,
        n = e.routeProps.route,
        r = {};
      for (const s in e.routeProps.route)
        r[s] = Me(() => (t === e.pageKey ? e.routeProps.route[s] : n[s]));
      return cn("_route", Pt(r)), () => de(e.routeProps.Component);
    },
  }),
  e1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Gu },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function Wl(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function Co(e = {}, t = {}) {
  Object.keys(t).forEach((n) => {
    typeof e[n] > "u"
      ? (e[n] = t[n])
      : Wl(t[n]) && Wl(e[n]) && Object.keys(t[n]).length > 0 && Co(e[n], t[n]);
  });
}
const Yu = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function qe() {
  const e = typeof document < "u" ? document : {};
  return Co(e, Yu), e;
}
const Zv = {
  document: Yu,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function Re() {
  const e = typeof window < "u" ? window : {};
  return Co(e, Zv), e;
}
function eb(e) {
  const t = e.__proto__;
  Object.defineProperty(e, "__proto__", {
    get() {
      return t;
    },
    set(n) {
      t.__proto__ = n;
    },
  });
}
class sn extends Array {
  constructor(t) {
    typeof t == "number" ? super(t) : (super(...(t || [])), eb(this));
  }
}
function Hr(e = []) {
  const t = [];
  return (
    e.forEach((n) => {
      Array.isArray(n) ? t.push(...Hr(n)) : t.push(n);
    }),
    t
  );
}
function Xu(e, t) {
  return Array.prototype.filter.call(e, t);
}
function tb(e) {
  const t = [];
  for (let n = 0; n < e.length; n += 1) t.indexOf(e[n]) === -1 && t.push(e[n]);
  return t;
}
function nb(e, t) {
  if (typeof e != "string") return [e];
  const n = [],
    r = t.querySelectorAll(e);
  for (let s = 0; s < r.length; s += 1) n.push(r[s]);
  return n;
}
function q(e, t) {
  const n = Re(),
    r = qe();
  let s = [];
  if (!t && e instanceof sn) return e;
  if (!e) return new sn(s);
  if (typeof e == "string") {
    const i = e.trim();
    if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
      let o = "div";
      i.indexOf("<li") === 0 && (o = "ul"),
        i.indexOf("<tr") === 0 && (o = "tbody"),
        (i.indexOf("<td") === 0 || i.indexOf("<th") === 0) && (o = "tr"),
        i.indexOf("<tbody") === 0 && (o = "table"),
        i.indexOf("<option") === 0 && (o = "select");
      const a = r.createElement(o);
      a.innerHTML = i;
      for (let l = 0; l < a.childNodes.length; l += 1) s.push(a.childNodes[l]);
    } else s = nb(e.trim(), t || r);
  } else if (e.nodeType || e === n || e === r) s.push(e);
  else if (Array.isArray(e)) {
    if (e instanceof sn) return e;
    s = e;
  }
  return new sn(tb(s));
}
q.fn = sn.prototype;
function rb(...e) {
  const t = Hr(e.map((n) => n.split(" ")));
  return (
    this.forEach((n) => {
      n.classList.add(...t);
    }),
    this
  );
}
function sb(...e) {
  const t = Hr(e.map((n) => n.split(" ")));
  return (
    this.forEach((n) => {
      n.classList.remove(...t);
    }),
    this
  );
}
function ib(...e) {
  const t = Hr(e.map((n) => n.split(" ")));
  this.forEach((n) => {
    t.forEach((r) => {
      n.classList.toggle(r);
    });
  });
}
function ob(...e) {
  const t = Hr(e.map((n) => n.split(" ")));
  return (
    Xu(this, (n) => t.filter((r) => n.classList.contains(r)).length > 0)
      .length > 0
  );
}
function lb(e, t) {
  if (arguments.length === 1 && typeof e == "string")
    return this[0] ? this[0].getAttribute(e) : void 0;
  for (let n = 0; n < this.length; n += 1)
    if (arguments.length === 2) this[n].setAttribute(e, t);
    else for (const r in e) (this[n][r] = e[r]), this[n].setAttribute(r, e[r]);
  return this;
}
function ab(e) {
  for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
  return this;
}
function cb(e) {
  for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
  return this;
}
function ub(e) {
  for (let t = 0; t < this.length; t += 1)
    this[t].style.transitionDuration = typeof e != "string" ? `${e}ms` : e;
  return this;
}
function db(...e) {
  let [t, n, r, s] = e;
  typeof e[1] == "function" && (([t, r, s] = e), (n = void 0)), s || (s = !1);
  function i(c) {
    const u = c.target;
    if (!u) return;
    const d = c.target.dom7EventData || [];
    if ((d.indexOf(c) < 0 && d.unshift(c), q(u).is(n))) r.apply(u, d);
    else {
      const f = q(u).parents();
      for (let h = 0; h < f.length; h += 1) q(f[h]).is(n) && r.apply(f[h], d);
    }
  }
  function o(c) {
    const u = c && c.target ? c.target.dom7EventData || [] : [];
    u.indexOf(c) < 0 && u.unshift(c), r.apply(this, u);
  }
  const a = t.split(" ");
  let l;
  for (let c = 0; c < this.length; c += 1) {
    const u = this[c];
    if (n)
      for (l = 0; l < a.length; l += 1) {
        const d = a[l];
        u.dom7LiveListeners || (u.dom7LiveListeners = {}),
          u.dom7LiveListeners[d] || (u.dom7LiveListeners[d] = []),
          u.dom7LiveListeners[d].push({ listener: r, proxyListener: i }),
          u.addEventListener(d, i, s);
      }
    else
      for (l = 0; l < a.length; l += 1) {
        const d = a[l];
        u.dom7Listeners || (u.dom7Listeners = {}),
          u.dom7Listeners[d] || (u.dom7Listeners[d] = []),
          u.dom7Listeners[d].push({ listener: r, proxyListener: o }),
          u.addEventListener(d, o, s);
      }
  }
  return this;
}
function fb(...e) {
  let [t, n, r, s] = e;
  typeof e[1] == "function" && (([t, r, s] = e), (n = void 0)), s || (s = !1);
  const i = t.split(" ");
  for (let o = 0; o < i.length; o += 1) {
    const a = i[o];
    for (let l = 0; l < this.length; l += 1) {
      const c = this[l];
      let u;
      if (
        (!n && c.dom7Listeners
          ? (u = c.dom7Listeners[a])
          : n && c.dom7LiveListeners && (u = c.dom7LiveListeners[a]),
        u && u.length)
      )
        for (let d = u.length - 1; d >= 0; d -= 1) {
          const f = u[d];
          (r && f.listener === r) ||
          (r &&
            f.listener &&
            f.listener.dom7proxy &&
            f.listener.dom7proxy === r)
            ? (c.removeEventListener(a, f.proxyListener, s), u.splice(d, 1))
            : r ||
              (c.removeEventListener(a, f.proxyListener, s), u.splice(d, 1));
        }
    }
  }
  return this;
}
function pb(...e) {
  const t = Re(),
    n = e[0].split(" "),
    r = e[1];
  for (let s = 0; s < n.length; s += 1) {
    const i = n[s];
    for (let o = 0; o < this.length; o += 1) {
      const a = this[o];
      if (t.CustomEvent) {
        const l = new t.CustomEvent(i, {
          detail: r,
          bubbles: !0,
          cancelable: !0,
        });
        (a.dom7EventData = e.filter((c, u) => u > 0)),
          a.dispatchEvent(l),
          (a.dom7EventData = []),
          delete a.dom7EventData;
      }
    }
  }
  return this;
}
function hb(e) {
  const t = this;
  function n(r) {
    r.target === this && (e.call(this, r), t.off("transitionend", n));
  }
  return e && t.on("transitionend", n), this;
}
function mb(e) {
  if (this.length > 0) {
    if (e) {
      const t = this.styles();
      return (
        this[0].offsetWidth +
        parseFloat(t.getPropertyValue("margin-right")) +
        parseFloat(t.getPropertyValue("margin-left"))
      );
    }
    return this[0].offsetWidth;
  }
  return null;
}
function gb(e) {
  if (this.length > 0) {
    if (e) {
      const t = this.styles();
      return (
        this[0].offsetHeight +
        parseFloat(t.getPropertyValue("margin-top")) +
        parseFloat(t.getPropertyValue("margin-bottom"))
      );
    }
    return this[0].offsetHeight;
  }
  return null;
}
function yb() {
  if (this.length > 0) {
    const e = Re(),
      t = qe(),
      n = this[0],
      r = n.getBoundingClientRect(),
      s = t.body,
      i = n.clientTop || s.clientTop || 0,
      o = n.clientLeft || s.clientLeft || 0,
      a = n === e ? e.scrollY : n.scrollTop,
      l = n === e ? e.scrollX : n.scrollLeft;
    return { top: r.top + a - i, left: r.left + l - o };
  }
  return null;
}
function vb() {
  const e = Re();
  return this[0] ? e.getComputedStyle(this[0], null) : {};
}
function bb(e, t) {
  const n = Re();
  let r;
  if (arguments.length === 1)
    if (typeof e == "string") {
      if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e);
    } else {
      for (r = 0; r < this.length; r += 1)
        for (const s in e) this[r].style[s] = e[s];
      return this;
    }
  if (arguments.length === 2 && typeof e == "string") {
    for (r = 0; r < this.length; r += 1) this[r].style[e] = t;
    return this;
  }
  return this;
}
function _b(e) {
  return e
    ? (this.forEach((t, n) => {
        e.apply(t, [t, n]);
      }),
      this)
    : this;
}
function wb(e) {
  const t = Xu(this, e);
  return q(t);
}
function Sb(e) {
  if (typeof e > "u") return this[0] ? this[0].innerHTML : null;
  for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
  return this;
}
function Cb(e) {
  if (typeof e > "u") return this[0] ? this[0].textContent.trim() : null;
  for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
  return this;
}
function Eb(e) {
  const t = Re(),
    n = qe(),
    r = this[0];
  let s, i;
  if (!r || typeof e > "u") return !1;
  if (typeof e == "string") {
    if (r.matches) return r.matches(e);
    if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
    if (r.msMatchesSelector) return r.msMatchesSelector(e);
    for (s = q(e), i = 0; i < s.length; i += 1) if (s[i] === r) return !0;
    return !1;
  }
  if (e === n) return r === n;
  if (e === t) return r === t;
  if (e.nodeType || e instanceof sn) {
    for (s = e.nodeType ? [e] : e, i = 0; i < s.length; i += 1)
      if (s[i] === r) return !0;
    return !1;
  }
  return !1;
}
function Tb() {
  let e = this[0],
    t;
  if (e) {
    for (t = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (t += 1);
    return t;
  }
}
function kb(e) {
  if (typeof e > "u") return this;
  const t = this.length;
  if (e > t - 1) return q([]);
  if (e < 0) {
    const n = t + e;
    return n < 0 ? q([]) : q([this[n]]);
  }
  return q([this[e]]);
}
function xb(...e) {
  let t;
  const n = qe();
  for (let r = 0; r < e.length; r += 1) {
    t = e[r];
    for (let s = 0; s < this.length; s += 1)
      if (typeof t == "string") {
        const i = n.createElement("div");
        for (i.innerHTML = t; i.firstChild; ) this[s].appendChild(i.firstChild);
      } else if (t instanceof sn)
        for (let i = 0; i < t.length; i += 1) this[s].appendChild(t[i]);
      else this[s].appendChild(t);
  }
  return this;
}
function Pb(e) {
  const t = qe();
  let n, r;
  for (n = 0; n < this.length; n += 1)
    if (typeof e == "string") {
      const s = t.createElement("div");
      for (s.innerHTML = e, r = s.childNodes.length - 1; r >= 0; r -= 1)
        this[n].insertBefore(s.childNodes[r], this[n].childNodes[0]);
    } else if (e instanceof sn)
      for (r = 0; r < e.length; r += 1)
        this[n].insertBefore(e[r], this[n].childNodes[0]);
    else this[n].insertBefore(e, this[n].childNodes[0]);
  return this;
}
function Ob(e) {
  return this.length > 0
    ? e
      ? this[0].nextElementSibling && q(this[0].nextElementSibling).is(e)
        ? q([this[0].nextElementSibling])
        : q([])
      : this[0].nextElementSibling
      ? q([this[0].nextElementSibling])
      : q([])
    : q([]);
}
function Ab(e) {
  const t = [];
  let n = this[0];
  if (!n) return q([]);
  for (; n.nextElementSibling; ) {
    const r = n.nextElementSibling;
    e ? q(r).is(e) && t.push(r) : t.push(r), (n = r);
  }
  return q(t);
}
function Rb(e) {
  if (this.length > 0) {
    const t = this[0];
    return e
      ? t.previousElementSibling && q(t.previousElementSibling).is(e)
        ? q([t.previousElementSibling])
        : q([])
      : t.previousElementSibling
      ? q([t.previousElementSibling])
      : q([]);
  }
  return q([]);
}
function $b(e) {
  const t = [];
  let n = this[0];
  if (!n) return q([]);
  for (; n.previousElementSibling; ) {
    const r = n.previousElementSibling;
    e ? q(r).is(e) && t.push(r) : t.push(r), (n = r);
  }
  return q(t);
}
function Lb(e) {
  const t = [];
  for (let n = 0; n < this.length; n += 1)
    this[n].parentNode !== null &&
      (e
        ? q(this[n].parentNode).is(e) && t.push(this[n].parentNode)
        : t.push(this[n].parentNode));
  return q(t);
}
function Mb(e) {
  const t = [];
  for (let n = 0; n < this.length; n += 1) {
    let r = this[n].parentNode;
    for (; r; ) e ? q(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
  }
  return q(t);
}
function Ib(e) {
  let t = this;
  return typeof e > "u" ? q([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
}
function jb(e) {
  const t = [];
  for (let n = 0; n < this.length; n += 1) {
    const r = this[n].querySelectorAll(e);
    for (let s = 0; s < r.length; s += 1) t.push(r[s]);
  }
  return q(t);
}
function Db(e) {
  const t = [];
  for (let n = 0; n < this.length; n += 1) {
    const r = this[n].children;
    for (let s = 0; s < r.length; s += 1) (!e || q(r[s]).is(e)) && t.push(r[s]);
  }
  return q(t);
}
function Bb() {
  for (let e = 0; e < this.length; e += 1)
    this[e].parentNode && this[e].parentNode.removeChild(this[e]);
  return this;
}
const Kl = {
  addClass: rb,
  removeClass: sb,
  hasClass: ob,
  toggleClass: ib,
  attr: lb,
  removeAttr: ab,
  transform: cb,
  transition: ub,
  on: db,
  off: fb,
  trigger: pb,
  transitionEnd: hb,
  outerWidth: mb,
  outerHeight: gb,
  styles: vb,
  offset: yb,
  css: bb,
  each: _b,
  html: Sb,
  text: Cb,
  is: Eb,
  index: Tb,
  eq: kb,
  append: xb,
  prepend: Pb,
  next: Ob,
  nextAll: Ab,
  prev: Rb,
  prevAll: $b,
  parent: Lb,
  parents: Mb,
  closest: Ib,
  find: jb,
  children: Db,
  filter: wb,
  remove: Bb,
};
Object.keys(Kl).forEach((e) => {
  Object.defineProperty(q.fn, e, { value: Kl[e], writable: !0 });
});
function Nb(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function Bi(e, t = 0) {
  return setTimeout(e, t);
}
function Mr() {
  return Date.now();
}
function Hb(e) {
  const t = Re();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function Fb(e, t = "x") {
  const n = Re();
  let r, s, i;
  const o = Hb(e);
  return (
    n.WebKitCSSMatrix
      ? ((s = o.transform || o.webkitTransform),
        s.split(",").length > 6 &&
          (s = s
            .split(", ")
            .map((a) => a.replace(",", "."))
            .join(", ")),
        (i = new n.WebKitCSSMatrix(s === "none" ? "" : s)))
      : ((i =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = i.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (s = i.m41)
        : r.length === 16
        ? (s = parseFloat(r[12]))
        : (s = parseFloat(r[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (s = i.m42)
        : r.length === 16
        ? (s = parseFloat(r[13]))
        : (s = parseFloat(r[5]))),
    s || 0
  );
}
function ts(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function zb(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function mt(...e) {
  const t = Object(e[0]),
    n = ["__proto__", "constructor", "prototype"];
  for (let r = 1; r < e.length; r += 1) {
    const s = e[r];
    if (s != null && !zb(s)) {
      const i = Object.keys(Object(s)).filter((o) => n.indexOf(o) < 0);
      for (let o = 0, a = i.length; o < a; o += 1) {
        const l = i[o],
          c = Object.getOwnPropertyDescriptor(s, l);
        c !== void 0 &&
          c.enumerable &&
          (ts(t[l]) && ts(s[l])
            ? s[l].__swiper__
              ? (t[l] = s[l])
              : mt(t[l], s[l])
            : !ts(t[l]) && ts(s[l])
            ? ((t[l] = {}), s[l].__swiper__ ? (t[l] = s[l]) : mt(t[l], s[l]))
            : (t[l] = s[l]));
      }
    }
  }
  return t;
}
function ns(e, t, n) {
  e.style.setProperty(t, n);
}
function Ju({ swiper: e, targetPosition: t, side: n }) {
  const r = Re(),
    s = -e.translate;
  let i = null,
    o;
  const a = e.params.speed;
  (e.wrapperEl.style.scrollSnapType = "none"),
    r.cancelAnimationFrame(e.cssModeFrameID);
  const l = t > s ? "next" : "prev",
    c = (d, f) => (l === "next" && d >= f) || (l === "prev" && d <= f),
    u = () => {
      (o = new Date().getTime()), i === null && (i = o);
      const d = Math.max(Math.min((o - i) / a, 1), 0),
        f = 0.5 - Math.cos(d * Math.PI) / 2;
      let h = s + f * (t - s);
      if ((c(h, t) && (h = t), e.wrapperEl.scrollTo({ [n]: h }), c(h, t))) {
        (e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (e.wrapperEl.style.overflow = ""), e.wrapperEl.scrollTo({ [n]: h });
          }),
          r.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = r.requestAnimationFrame(u);
    };
  u();
}
let ii;
function Ub() {
  const e = Re(),
    t = qe();
  return {
    smoothScroll:
      t.documentElement && "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
    passiveListener: (function () {
      let r = !1;
      try {
        const s = Object.defineProperty({}, "passive", {
          get() {
            r = !0;
          },
        });
        e.addEventListener("testPassiveListener", null, s);
      } catch {}
      return r;
    })(),
    gestures: (function () {
      return "ongesturestart" in e;
    })(),
  };
}
function Qu() {
  return ii || (ii = Ub()), ii;
}
let oi;
function Vb({ userAgent: e } = {}) {
  const t = Qu(),
    n = Re(),
    r = n.navigator.platform,
    s = e || n.navigator.userAgent,
    i = { ios: !1, android: !1 },
    o = n.screen.width,
    a = n.screen.height,
    l = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = s.match(/(iPad).*OS\s([\d_]+)/);
  const u = s.match(/(iPod)(.*OS\s([\d_]+))?/),
    d = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    f = r === "Win32";
  let h = r === "MacIntel";
  const m = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !c &&
      h &&
      t.touch &&
      m.indexOf(`${o}x${a}`) >= 0 &&
      ((c = s.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, "13_0_0"]),
      (h = !1)),
    l && !f && ((i.os = "android"), (i.android = !0)),
    (c || d || u) && ((i.os = "ios"), (i.ios = !0)),
    i
  );
}
function qb(e = {}) {
  return oi || (oi = Vb(e)), oi;
}
let li;
function Wb() {
  const e = Re();
  function t() {
    const n = e.navigator.userAgent.toLowerCase();
    return (
      n.indexOf("safari") >= 0 &&
      n.indexOf("chrome") < 0 &&
      n.indexOf("android") < 0
    );
  }
  return {
    isSafari: t(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
  };
}
function Kb() {
  return li || (li = Wb()), li;
}
function Gb({ swiper: e, on: t, emit: n }) {
  const r = Re();
  let s = null,
    i = null;
  const o = () => {
      !e || e.destroyed || !e.initialized || (n("beforeResize"), n("resize"));
    },
    a = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((s = new ResizeObserver((u) => {
          i = r.requestAnimationFrame(() => {
            const { width: d, height: f } = e;
            let h = d,
              m = f;
            u.forEach(({ contentBoxSize: v, contentRect: b, target: _ }) => {
              (_ && _ !== e.el) ||
                ((h = b ? b.width : (v[0] || v).inlineSize),
                (m = b ? b.height : (v[0] || v).blockSize));
            }),
              (h !== d || m !== f) && o();
          });
        })),
        s.observe(e.el));
    },
    l = () => {
      i && r.cancelAnimationFrame(i),
        s && s.unobserve && e.el && (s.unobserve(e.el), (s = null));
    },
    c = () => {
      !e || e.destroyed || !e.initialized || n("orientationchange");
    };
  t("init", () => {
    if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
      a();
      return;
    }
    r.addEventListener("resize", o), r.addEventListener("orientationchange", c);
  }),
    t("destroy", () => {
      l(),
        r.removeEventListener("resize", o),
        r.removeEventListener("orientationchange", c);
    });
}
function Yb({ swiper: e, extendParams: t, on: n, emit: r }) {
  const s = [],
    i = Re(),
    o = (c, u = {}) => {
      const d = i.MutationObserver || i.WebkitMutationObserver,
        f = new d((h) => {
          if (h.length === 1) {
            r("observerUpdate", h[0]);
            return;
          }
          const m = function () {
            r("observerUpdate", h[0]);
          };
          i.requestAnimationFrame
            ? i.requestAnimationFrame(m)
            : i.setTimeout(m, 0);
        });
      f.observe(c, {
        attributes: typeof u.attributes > "u" ? !0 : u.attributes,
        childList: typeof u.childList > "u" ? !0 : u.childList,
        characterData: typeof u.characterData > "u" ? !0 : u.characterData,
      }),
        s.push(f);
    },
    a = () => {
      if (!!e.params.observer) {
        if (e.params.observeParents) {
          const c = e.$el.parents();
          for (let u = 0; u < c.length; u += 1) o(c[u]);
        }
        o(e.$el[0], { childList: e.params.observeSlideChildren }),
          o(e.$wrapperEl[0], { attributes: !1 });
      }
    },
    l = () => {
      s.forEach((c) => {
        c.disconnect();
      }),
        s.splice(0, s.length);
    };
  t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    n("init", a),
    n("destroy", l);
}
const Xb = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    const s = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((i) => {
        r.eventsListeners[i] || (r.eventsListeners[i] = []),
          r.eventsListeners[i][s](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    function s(...i) {
      r.off(e, s), s.__emitterProxy && delete s.__emitterProxy, t.apply(r, i);
    }
    return (s.__emitterProxy = t), r.on(e, s, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const r = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((s, i) => {
                (s === t || (s.__emitterProxy && s.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(i, 1);
              });
        }),
      n
    );
  },
  emit(...e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
    let n, r, s;
    return (
      typeof e[0] == "string" || Array.isArray(e[0])
        ? ((n = e[0]), (r = e.slice(1, e.length)), (s = t))
        : ((n = e[0].events), (r = e[0].data), (s = e[0].context || t)),
      r.unshift(s),
      (Array.isArray(n) ? n : n.split(" ")).forEach((o) => {
        t.eventsAnyListeners &&
          t.eventsAnyListeners.length &&
          t.eventsAnyListeners.forEach((a) => {
            a.apply(s, [o, ...r]);
          }),
          t.eventsListeners &&
            t.eventsListeners[o] &&
            t.eventsListeners[o].forEach((a) => {
              a.apply(s, r);
            });
      }),
      t
    );
  },
};
function Jb() {
  const e = this;
  let t, n;
  const r = e.$el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = r[0].clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = r[0].clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(r.css("padding-left") || 0, 10) -
        parseInt(r.css("padding-right") || 0, 10)),
      (n =
        n -
        parseInt(r.css("padding-top") || 0, 10) -
        parseInt(r.css("padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function Qb() {
  const e = this;
  function t(k) {
    return e.isHorizontal()
      ? k
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[k];
  }
  function n(k, M) {
    return parseFloat(k.getPropertyValue(t(M)) || 0);
  }
  const r = e.params,
    { $wrapperEl: s, size: i, rtlTranslate: o, wrongRTL: a } = e,
    l = e.virtual && r.virtual.enabled,
    c = l ? e.virtual.slides.length : e.slides.length,
    u = s.children(`.${e.params.slideClass}`),
    d = l ? e.virtual.slides.length : u.length;
  let f = [];
  const h = [],
    m = [];
  let v = r.slidesOffsetBefore;
  typeof v == "function" && (v = r.slidesOffsetBefore.call(e));
  let b = r.slidesOffsetAfter;
  typeof b == "function" && (b = r.slidesOffsetAfter.call(e));
  const _ = e.snapGrid.length,
    p = e.slidesGrid.length;
  let g = r.spaceBetween,
    S = -v,
    C = 0,
    P = 0;
  if (typeof i > "u") return;
  typeof g == "string" &&
    g.indexOf("%") >= 0 &&
    (g = (parseFloat(g.replace("%", "")) / 100) * i),
    (e.virtualSize = -g),
    o
      ? u.css({ marginLeft: "", marginBottom: "", marginTop: "" })
      : u.css({ marginRight: "", marginBottom: "", marginTop: "" }),
    r.centeredSlides &&
      r.cssMode &&
      (ns(e.wrapperEl, "--swiper-centered-offset-before", ""),
      ns(e.wrapperEl, "--swiper-centered-offset-after", ""));
  const O = r.grid && r.grid.rows > 1 && e.grid;
  O && e.grid.initSlides(d);
  let E;
  const N =
    r.slidesPerView === "auto" &&
    r.breakpoints &&
    Object.keys(r.breakpoints).filter(
      (k) => typeof r.breakpoints[k].slidesPerView < "u"
    ).length > 0;
  for (let k = 0; k < d; k += 1) {
    E = 0;
    const M = u.eq(k);
    if ((O && e.grid.updateSlide(k, M, d, t), M.css("display") !== "none")) {
      if (r.slidesPerView === "auto") {
        N && (u[k].style[t("width")] = "");
        const $ = getComputedStyle(M[0]),
          Y = M[0].style.transform,
          U = M[0].style.webkitTransform;
        if (
          (Y && (M[0].style.transform = "none"),
          U && (M[0].style.webkitTransform = "none"),
          r.roundLengths)
        )
          E = e.isHorizontal() ? M.outerWidth(!0) : M.outerHeight(!0);
        else {
          const Pe = n($, "width"),
            ie = n($, "padding-left"),
            he = n($, "padding-right"),
            ue = n($, "margin-left"),
            ze = n($, "margin-right"),
            At = $.getPropertyValue("box-sizing");
          if (At && At === "border-box") E = Pe + ue + ze;
          else {
            const { clientWidth: We, offsetWidth: De } = M[0];
            E = Pe + ie + he + ue + ze + (De - We);
          }
        }
        Y && (M[0].style.transform = Y),
          U && (M[0].style.webkitTransform = U),
          r.roundLengths && (E = Math.floor(E));
      } else
        (E = (i - (r.slidesPerView - 1) * g) / r.slidesPerView),
          r.roundLengths && (E = Math.floor(E)),
          u[k] && (u[k].style[t("width")] = `${E}px`);
      u[k] && (u[k].swiperSlideSize = E),
        m.push(E),
        r.centeredSlides
          ? ((S = S + E / 2 + C / 2 + g),
            C === 0 && k !== 0 && (S = S - i / 2 - g),
            k === 0 && (S = S - i / 2 - g),
            Math.abs(S) < 1 / 1e3 && (S = 0),
            r.roundLengths && (S = Math.floor(S)),
            P % r.slidesPerGroup === 0 && f.push(S),
            h.push(S))
          : (r.roundLengths && (S = Math.floor(S)),
            (P - Math.min(e.params.slidesPerGroupSkip, P)) %
              e.params.slidesPerGroup ===
              0 && f.push(S),
            h.push(S),
            (S = S + E + g)),
        (e.virtualSize += E + g),
        (C = E),
        (P += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, i) + b),
    o &&
      a &&
      (r.effect === "slide" || r.effect === "coverflow") &&
      s.css({ width: `${e.virtualSize + r.spaceBetween}px` }),
    r.setWrapperSize &&
      s.css({ [t("width")]: `${e.virtualSize + r.spaceBetween}px` }),
    O && e.grid.updateWrapperSize(E, f, t),
    !r.centeredSlides)
  ) {
    const k = [];
    for (let M = 0; M < f.length; M += 1) {
      let $ = f[M];
      r.roundLengths && ($ = Math.floor($)),
        f[M] <= e.virtualSize - i && k.push($);
    }
    (f = k),
      Math.floor(e.virtualSize - i) - Math.floor(f[f.length - 1]) > 1 &&
        f.push(e.virtualSize - i);
  }
  if ((f.length === 0 && (f = [0]), r.spaceBetween !== 0)) {
    const k = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
    u.filter((M, $) => (r.cssMode ? $ !== u.length - 1 : !0)).css({
      [k]: `${g}px`,
    });
  }
  if (r.centeredSlides && r.centeredSlidesBounds) {
    let k = 0;
    m.forEach(($) => {
      k += $ + (r.spaceBetween ? r.spaceBetween : 0);
    }),
      (k -= r.spaceBetween);
    const M = k - i;
    f = f.map(($) => ($ < 0 ? -v : $ > M ? M + b : $));
  }
  if (r.centerInsufficientSlides) {
    let k = 0;
    if (
      (m.forEach((M) => {
        k += M + (r.spaceBetween ? r.spaceBetween : 0);
      }),
      (k -= r.spaceBetween),
      k < i)
    ) {
      const M = (i - k) / 2;
      f.forEach(($, Y) => {
        f[Y] = $ - M;
      }),
        h.forEach(($, Y) => {
          h[Y] = $ + M;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: u,
      snapGrid: f,
      slidesGrid: h,
      slidesSizesGrid: m,
    }),
    r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
  ) {
    ns(e.wrapperEl, "--swiper-centered-offset-before", `${-f[0]}px`),
      ns(
        e.wrapperEl,
        "--swiper-centered-offset-after",
        `${e.size / 2 - m[m.length - 1] / 2}px`
      );
    const k = -e.snapGrid[0],
      M = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map(($) => $ + k)),
      (e.slidesGrid = e.slidesGrid.map(($) => $ + M));
  }
  if (
    (d !== c && e.emit("slidesLengthChange"),
    f.length !== _ &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    h.length !== p && e.emit("slidesGridLengthChange"),
    r.watchSlidesProgress && e.updateSlidesOffset(),
    !l && !r.cssMode && (r.effect === "slide" || r.effect === "fade"))
  ) {
    const k = `${r.containerModifierClass}backface-hidden`,
      M = e.$el.hasClass(k);
    d <= r.maxBackfaceHiddenSlides
      ? M || e.$el.addClass(k)
      : M && e.$el.removeClass(k);
  }
}
function Zb(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let s = 0,
    i;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const o = (a) =>
    r
      ? t.slides.filter(
          (l) => parseInt(l.getAttribute("data-swiper-slide-index"), 10) === a
        )[0]
      : t.slides.eq(a)[0];
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || q([])).each((a) => {
        n.push(a);
      });
    else
      for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
        const a = t.activeIndex + i;
        if (a > t.slides.length && !r) break;
        n.push(o(a));
      }
  else n.push(o(t.activeIndex));
  for (i = 0; i < n.length; i += 1)
    if (typeof n[i] < "u") {
      const a = n[i].offsetHeight;
      s = a > s ? a : s;
    }
  (s || s === 0) && t.$wrapperEl.css("height", `${s}px`);
}
function e_() {
  const e = this,
    t = e.slides;
  for (let n = 0; n < t.length; n += 1)
    t[n].swiperSlideOffset = e.isHorizontal()
      ? t[n].offsetLeft
      : t[n].offsetTop;
}
function t_(e = (this && this.translate) || 0) {
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: s, snapGrid: i } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let o = -e;
  s && (o = e),
    r.removeClass(n.slideVisibleClass),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = []);
  for (let a = 0; a < r.length; a += 1) {
    const l = r[a];
    let c = l.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset);
    const u =
        (o + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (l.swiperSlideSize + n.spaceBetween),
      d =
        (o - i[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (l.swiperSlideSize + n.spaceBetween),
      f = -(o - c),
      h = f + t.slidesSizesGrid[a];
    ((f >= 0 && f < t.size - 1) ||
      (h > 1 && h <= t.size) ||
      (f <= 0 && h >= t.size)) &&
      (t.visibleSlides.push(l),
      t.visibleSlidesIndexes.push(a),
      r.eq(a).addClass(n.slideVisibleClass)),
      (l.progress = s ? -u : u),
      (l.originalProgress = s ? -d : d);
  }
  t.visibleSlides = q(t.visibleSlides);
}
function n_(e) {
  const t = this;
  if (typeof e > "u") {
    const c = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * c) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: s, isBeginning: i, isEnd: o } = t;
  const a = i,
    l = o;
  r === 0
    ? ((s = 0), (i = !0), (o = !0))
    : ((s = (e - t.minTranslate()) / r), (i = s <= 0), (o = s >= 1)),
    Object.assign(t, { progress: s, isBeginning: i, isEnd: o }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    i && !a && t.emit("reachBeginning toEdge"),
    o && !l && t.emit("reachEnd toEdge"),
    ((a && !i) || (l && !o)) && t.emit("fromEdge"),
    t.emit("progress", s);
}
function r_() {
  const e = this,
    { slides: t, params: n, $wrapperEl: r, activeIndex: s, realIndex: i } = e,
    o = e.virtual && n.virtual.enabled;
  t.removeClass(
    `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
  );
  let a;
  o
    ? (a = e.$wrapperEl.find(
        `.${n.slideClass}[data-swiper-slide-index="${s}"]`
      ))
    : (a = t.eq(s)),
    a.addClass(n.slideActiveClass),
    n.loop &&
      (a.hasClass(n.slideDuplicateClass)
        ? r
            .children(
              `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${i}"]`
            )
            .addClass(n.slideDuplicateActiveClass)
        : r
            .children(
              `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${i}"]`
            )
            .addClass(n.slideDuplicateActiveClass));
  let l = a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
  n.loop && l.length === 0 && ((l = t.eq(0)), l.addClass(n.slideNextClass));
  let c = a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
  n.loop && c.length === 0 && ((c = t.eq(-1)), c.addClass(n.slidePrevClass)),
    n.loop &&
      (l.hasClass(n.slideDuplicateClass)
        ? r
            .children(
              `.${n.slideClass}:not(.${
                n.slideDuplicateClass
              })[data-swiper-slide-index="${l.attr(
                "data-swiper-slide-index"
              )}"]`
            )
            .addClass(n.slideDuplicateNextClass)
        : r
            .children(
              `.${n.slideClass}.${
                n.slideDuplicateClass
              }[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`
            )
            .addClass(n.slideDuplicateNextClass),
      c.hasClass(n.slideDuplicateClass)
        ? r
            .children(
              `.${n.slideClass}:not(.${
                n.slideDuplicateClass
              })[data-swiper-slide-index="${c.attr(
                "data-swiper-slide-index"
              )}"]`
            )
            .addClass(n.slideDuplicatePrevClass)
        : r
            .children(
              `.${n.slideClass}.${
                n.slideDuplicateClass
              }[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`
            )
            .addClass(n.slideDuplicatePrevClass)),
    e.emitSlidesClasses();
}
function s_(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    {
      slidesGrid: r,
      snapGrid: s,
      params: i,
      activeIndex: o,
      realIndex: a,
      snapIndex: l,
    } = t;
  let c = e,
    u;
  if (typeof c > "u") {
    for (let f = 0; f < r.length; f += 1)
      typeof r[f + 1] < "u"
        ? n >= r[f] && n < r[f + 1] - (r[f + 1] - r[f]) / 2
          ? (c = f)
          : n >= r[f] && n < r[f + 1] && (c = f + 1)
        : n >= r[f] && (c = f);
    i.normalizeSlideIndex && (c < 0 || typeof c > "u") && (c = 0);
  }
  if (s.indexOf(n) >= 0) u = s.indexOf(n);
  else {
    const f = Math.min(i.slidesPerGroupSkip, c);
    u = f + Math.floor((c - f) / i.slidesPerGroup);
  }
  if ((u >= s.length && (u = s.length - 1), c === o)) {
    u !== l && ((t.snapIndex = u), t.emit("snapIndexChange"));
    return;
  }
  const d = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
  Object.assign(t, {
    snapIndex: u,
    realIndex: d,
    previousIndex: o,
    activeIndex: c,
  }),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    a !== d && t.emit("realIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
}
function i_(e) {
  const t = this,
    n = t.params,
    r = q(e).closest(`.${n.slideClass}`)[0];
  let s = !1,
    i;
  if (r) {
    for (let o = 0; o < t.slides.length; o += 1)
      if (t.slides[o] === r) {
        (s = !0), (i = o);
        break;
      }
  }
  if (r && s)
    (t.clickedSlide = r),
      t.virtual && t.params.virtual.enabled
        ? (t.clickedIndex = parseInt(q(r).attr("data-swiper-slide-index"), 10))
        : (t.clickedIndex = i);
  else {
    (t.clickedSlide = void 0), (t.clickedIndex = void 0);
    return;
  }
  n.slideToClickedSlide &&
    t.clickedIndex !== void 0 &&
    t.clickedIndex !== t.activeIndex &&
    t.slideToClickedSlide();
}
const o_ = {
  updateSize: Jb,
  updateSlides: Qb,
  updateAutoHeight: Zb,
  updateSlidesOffset: e_,
  updateSlidesProgress: t_,
  updateProgress: n_,
  updateSlidesClasses: r_,
  updateActiveIndex: s_,
  updateClickedSlide: i_,
};
function l_(e = this.isHorizontal() ? "x" : "y") {
  const t = this,
    { params: n, rtlTranslate: r, translate: s, $wrapperEl: i } = t;
  if (n.virtualTranslate) return r ? -s : s;
  if (n.cssMode) return s;
  let o = Fb(i[0], e);
  return r && (o = -o), o || 0;
}
function a_(e, t) {
  const n = this,
    {
      rtlTranslate: r,
      params: s,
      $wrapperEl: i,
      wrapperEl: o,
      progress: a,
    } = n;
  let l = 0,
    c = 0;
  const u = 0;
  n.isHorizontal() ? (l = r ? -e : e) : (c = e),
    s.roundLengths && ((l = Math.floor(l)), (c = Math.floor(c))),
    s.cssMode
      ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -l
          : -c)
      : s.virtualTranslate ||
        i.transform(`translate3d(${l}px, ${c}px, ${u}px)`),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? l : c);
  let d;
  const f = n.maxTranslate() - n.minTranslate();
  f === 0 ? (d = 0) : (d = (e - n.minTranslate()) / f),
    d !== a && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function c_() {
  return -this.snapGrid[0];
}
function u_() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function d_(e = 0, t = this.params.speed, n = !0, r = !0, s) {
  const i = this,
    { params: o, wrapperEl: a } = i;
  if (i.animating && o.preventInteractionOnTransition) return !1;
  const l = i.minTranslate(),
    c = i.maxTranslate();
  let u;
  if (
    (r && e > l ? (u = l) : r && e < c ? (u = c) : (u = e),
    i.updateProgress(u),
    o.cssMode)
  ) {
    const d = i.isHorizontal();
    if (t === 0) a[d ? "scrollLeft" : "scrollTop"] = -u;
    else {
      if (!i.support.smoothScroll)
        return (
          Ju({ swiper: i, targetPosition: -u, side: d ? "left" : "top" }), !0
        );
      a.scrollTo({ [d ? "left" : "top"]: -u, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (i.setTransition(0),
        i.setTranslate(u),
        n && (i.emit("beforeTransitionStart", t, s), i.emit("transitionEnd")))
      : (i.setTransition(t),
        i.setTranslate(u),
        n && (i.emit("beforeTransitionStart", t, s), i.emit("transitionStart")),
        i.animating ||
          ((i.animating = !0),
          i.onTranslateToWrapperTransitionEnd ||
            (i.onTranslateToWrapperTransitionEnd = function (f) {
              !i ||
                i.destroyed ||
                (f.target === this &&
                  (i.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    i.onTranslateToWrapperTransitionEnd
                  ),
                  i.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    i.onTranslateToWrapperTransitionEnd
                  ),
                  (i.onTranslateToWrapperTransitionEnd = null),
                  delete i.onTranslateToWrapperTransitionEnd,
                  n && i.emit("transitionEnd")));
            }),
          i.$wrapperEl[0].addEventListener(
            "transitionend",
            i.onTranslateToWrapperTransitionEnd
          ),
          i.$wrapperEl[0].addEventListener(
            "webkitTransitionEnd",
            i.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
const f_ = {
  getTranslate: l_,
  setTranslate: a_,
  minTranslate: c_,
  maxTranslate: u_,
  translateTo: d_,
};
function p_(e, t) {
  const n = this;
  n.params.cssMode || n.$wrapperEl.transition(e), n.emit("setTransition", e, t);
}
function Zu({ swiper: e, runCallbacks: t, direction: n, step: r }) {
  const { activeIndex: s, previousIndex: i } = e;
  let o = n;
  if (
    (o || (s > i ? (o = "next") : s < i ? (o = "prev") : (o = "reset")),
    e.emit(`transition${r}`),
    t && s !== i)
  ) {
    if (o === "reset") {
      e.emit(`slideResetTransition${r}`);
      return;
    }
    e.emit(`slideChangeTransition${r}`),
      o === "next"
        ? e.emit(`slideNextTransition${r}`)
        : e.emit(`slidePrevTransition${r}`);
  }
}
function h_(e = !0, t) {
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    Zu({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function m_(e = !0, t) {
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      Zu({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
const g_ = { setTransition: p_, transitionStart: h_, transitionEnd: m_ };
function y_(e = 0, t = this.params.speed, n = !0, r, s) {
  if (typeof e != "number" && typeof e != "string")
    throw new Error(
      `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
    );
  if (typeof e == "string") {
    const g = parseInt(e, 10);
    if (!isFinite(g))
      throw new Error(
        `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
      );
    e = g;
  }
  const i = this;
  let o = e;
  o < 0 && (o = 0);
  const {
    params: a,
    snapGrid: l,
    slidesGrid: c,
    previousIndex: u,
    activeIndex: d,
    rtlTranslate: f,
    wrapperEl: h,
    enabled: m,
  } = i;
  if ((i.animating && a.preventInteractionOnTransition) || (!m && !r && !s))
    return !1;
  const v = Math.min(i.params.slidesPerGroupSkip, o);
  let b = v + Math.floor((o - v) / i.params.slidesPerGroup);
  b >= l.length && (b = l.length - 1);
  const _ = -l[b];
  if (a.normalizeSlideIndex)
    for (let g = 0; g < c.length; g += 1) {
      const S = -Math.floor(_ * 100),
        C = Math.floor(c[g] * 100),
        P = Math.floor(c[g + 1] * 100);
      typeof c[g + 1] < "u"
        ? S >= C && S < P - (P - C) / 2
          ? (o = g)
          : S >= C && S < P && (o = g + 1)
        : S >= C && (o = g);
    }
  if (
    i.initialized &&
    o !== d &&
    ((!i.allowSlideNext && _ < i.translate && _ < i.minTranslate()) ||
      (!i.allowSlidePrev &&
        _ > i.translate &&
        _ > i.maxTranslate() &&
        (d || 0) !== o))
  )
    return !1;
  o !== (u || 0) && n && i.emit("beforeSlideChangeStart"), i.updateProgress(_);
  let p;
  if (
    (o > d ? (p = "next") : o < d ? (p = "prev") : (p = "reset"),
    (f && -_ === i.translate) || (!f && _ === i.translate))
  )
    return (
      i.updateActiveIndex(o),
      a.autoHeight && i.updateAutoHeight(),
      i.updateSlidesClasses(),
      a.effect !== "slide" && i.setTranslate(_),
      p !== "reset" && (i.transitionStart(n, p), i.transitionEnd(n, p)),
      !1
    );
  if (a.cssMode) {
    const g = i.isHorizontal(),
      S = f ? _ : -_;
    if (t === 0) {
      const C = i.virtual && i.params.virtual.enabled;
      C &&
        ((i.wrapperEl.style.scrollSnapType = "none"),
        (i._immediateVirtual = !0)),
        (h[g ? "scrollLeft" : "scrollTop"] = S),
        C &&
          requestAnimationFrame(() => {
            (i.wrapperEl.style.scrollSnapType = ""),
              (i._swiperImmediateVirtual = !1);
          });
    } else {
      if (!i.support.smoothScroll)
        return (
          Ju({ swiper: i, targetPosition: S, side: g ? "left" : "top" }), !0
        );
      h.scrollTo({ [g ? "left" : "top"]: S, behavior: "smooth" });
    }
    return !0;
  }
  return (
    i.setTransition(t),
    i.setTranslate(_),
    i.updateActiveIndex(o),
    i.updateSlidesClasses(),
    i.emit("beforeTransitionStart", t, r),
    i.transitionStart(n, p),
    t === 0
      ? i.transitionEnd(n, p)
      : i.animating ||
        ((i.animating = !0),
        i.onSlideToWrapperTransitionEnd ||
          (i.onSlideToWrapperTransitionEnd = function (S) {
            !i ||
              i.destroyed ||
              (S.target === this &&
                (i.$wrapperEl[0].removeEventListener(
                  "transitionend",
                  i.onSlideToWrapperTransitionEnd
                ),
                i.$wrapperEl[0].removeEventListener(
                  "webkitTransitionEnd",
                  i.onSlideToWrapperTransitionEnd
                ),
                (i.onSlideToWrapperTransitionEnd = null),
                delete i.onSlideToWrapperTransitionEnd,
                i.transitionEnd(n, p)));
          }),
        i.$wrapperEl[0].addEventListener(
          "transitionend",
          i.onSlideToWrapperTransitionEnd
        ),
        i.$wrapperEl[0].addEventListener(
          "webkitTransitionEnd",
          i.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function v_(e = 0, t = this.params.speed, n = !0, r) {
  if (typeof e == "string") {
    const o = parseInt(e, 10);
    if (!isFinite(o))
      throw new Error(
        `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
      );
    e = o;
  }
  const s = this;
  let i = e;
  return s.params.loop && (i += s.loopedSlides), s.slideTo(i, t, n, r);
}
function b_(e = this.params.speed, t = !0, n) {
  const r = this,
    { animating: s, enabled: i, params: o } = r;
  if (!i) return r;
  let a = o.slidesPerGroup;
  o.slidesPerView === "auto" &&
    o.slidesPerGroup === 1 &&
    o.slidesPerGroupAuto &&
    (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const l = r.activeIndex < o.slidesPerGroupSkip ? 1 : a;
  if (o.loop) {
    if (s && o.loopPreventsSlide) return !1;
    r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
  }
  return o.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + l, e, t, n);
}
function __(e = this.params.speed, t = !0, n) {
  const r = this,
    {
      params: s,
      animating: i,
      snapGrid: o,
      slidesGrid: a,
      rtlTranslate: l,
      enabled: c,
    } = r;
  if (!c) return r;
  if (s.loop) {
    if (i && s.loopPreventsSlide) return !1;
    r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
  }
  const u = l ? r.translate : -r.translate;
  function d(b) {
    return b < 0 ? -Math.floor(Math.abs(b)) : Math.floor(b);
  }
  const f = d(u),
    h = o.map((b) => d(b));
  let m = o[h.indexOf(f) - 1];
  if (typeof m > "u" && s.cssMode) {
    let b;
    o.forEach((_, p) => {
      f >= _ && (b = p);
    }),
      typeof b < "u" && (m = o[b > 0 ? b - 1 : b]);
  }
  let v = 0;
  if (
    (typeof m < "u" &&
      ((v = a.indexOf(m)),
      v < 0 && (v = r.activeIndex - 1),
      s.slidesPerView === "auto" &&
        s.slidesPerGroup === 1 &&
        s.slidesPerGroupAuto &&
        ((v = v - r.slidesPerViewDynamic("previous", !0) + 1),
        (v = Math.max(v, 0)))),
    s.rewind && r.isBeginning)
  ) {
    const b =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(b, e, t, n);
  }
  return r.slideTo(v, e, t, n);
}
function w_(e = this.params.speed, t = !0, n) {
  const r = this;
  return r.slideTo(r.activeIndex, e, t, n);
}
function S_(e = this.params.speed, t = !0, n, r = 0.5) {
  const s = this;
  let i = s.activeIndex;
  const o = Math.min(s.params.slidesPerGroupSkip, i),
    a = o + Math.floor((i - o) / s.params.slidesPerGroup),
    l = s.rtlTranslate ? s.translate : -s.translate;
  if (l >= s.snapGrid[a]) {
    const c = s.snapGrid[a],
      u = s.snapGrid[a + 1];
    l - c > (u - c) * r && (i += s.params.slidesPerGroup);
  } else {
    const c = s.snapGrid[a - 1],
      u = s.snapGrid[a];
    l - c <= (u - c) * r && (i -= s.params.slidesPerGroup);
  }
  return (
    (i = Math.max(i, 0)),
    (i = Math.min(i, s.slidesGrid.length - 1)),
    s.slideTo(i, e, t, n)
  );
}
function C_() {
  const e = this,
    { params: t, $wrapperEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let s = e.clickedIndex,
    i;
  if (t.loop) {
    if (e.animating) return;
    (i = parseInt(q(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? s < e.loopedSlides - r / 2 ||
          s > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (s = n
              .children(
                `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
              )
              .eq(0)
              .index()),
            Bi(() => {
              e.slideTo(s);
            }))
          : e.slideTo(s)
        : s > e.slides.length - r
        ? (e.loopFix(),
          (s = n
            .children(
              `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
            )
            .eq(0)
            .index()),
          Bi(() => {
            e.slideTo(s);
          }))
        : e.slideTo(s);
  } else e.slideTo(s);
}
const E_ = {
  slideTo: y_,
  slideToLoop: v_,
  slideNext: b_,
  slidePrev: __,
  slideReset: w_,
  slideToClosest: S_,
  slideToClickedSlide: C_,
};
function T_() {
  const e = this,
    t = qe(),
    { params: n, $wrapperEl: r } = e,
    s = r.children().length > 0 ? q(r.children()[0].parentNode) : r;
  s.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
  let i = s.children(`.${n.slideClass}`);
  if (n.loopFillGroupWithBlank) {
    const l = n.slidesPerGroup - (i.length % n.slidesPerGroup);
    if (l !== n.slidesPerGroup) {
      for (let c = 0; c < l; c += 1) {
        const u = q(t.createElement("div")).addClass(
          `${n.slideClass} ${n.slideBlankClass}`
        );
        s.append(u);
      }
      i = s.children(`.${n.slideClass}`);
    }
  }
  n.slidesPerView === "auto" && !n.loopedSlides && (n.loopedSlides = i.length),
    (e.loopedSlides = Math.ceil(
      parseFloat(n.loopedSlides || n.slidesPerView, 10)
    )),
    (e.loopedSlides += n.loopAdditionalSlides),
    e.loopedSlides > i.length &&
      e.params.loopedSlidesLimit &&
      (e.loopedSlides = i.length);
  const o = [],
    a = [];
  i.each((l, c) => {
    q(l).attr("data-swiper-slide-index", c);
  });
  for (let l = 0; l < e.loopedSlides; l += 1) {
    const c = l - Math.floor(l / i.length) * i.length;
    a.push(i.eq(c)[0]), o.unshift(i.eq(i.length - c - 1)[0]);
  }
  for (let l = 0; l < a.length; l += 1)
    s.append(q(a[l].cloneNode(!0)).addClass(n.slideDuplicateClass));
  for (let l = o.length - 1; l >= 0; l -= 1)
    s.prepend(q(o[l].cloneNode(!0)).addClass(n.slideDuplicateClass));
}
function k_() {
  const e = this;
  e.emit("beforeLoopFix");
  const {
    activeIndex: t,
    slides: n,
    loopedSlides: r,
    allowSlidePrev: s,
    allowSlideNext: i,
    snapGrid: o,
    rtlTranslate: a,
  } = e;
  let l;
  (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
  const u = -o[t] - e.getTranslate();
  t < r
    ? ((l = n.length - r * 3 + t),
      (l += r),
      e.slideTo(l, 0, !1, !0) &&
        u !== 0 &&
        e.setTranslate((a ? -e.translate : e.translate) - u))
    : t >= n.length - r &&
      ((l = -n.length + t + r),
      (l += r),
      e.slideTo(l, 0, !1, !0) &&
        u !== 0 &&
        e.setTranslate((a ? -e.translate : e.translate) - u)),
    (e.allowSlidePrev = s),
    (e.allowSlideNext = i),
    e.emit("loopFix");
}
function x_() {
  const e = this,
    { $wrapperEl: t, params: n, slides: r } = e;
  t
    .children(
      `.${n.slideClass}.${n.slideDuplicateClass},.${n.slideClass}.${n.slideBlankClass}`
    )
    .remove(),
    r.removeAttr("data-swiper-slide-index");
}
const P_ = { loopCreate: T_, loopFix: k_, loopDestroy: x_ };
function O_(e) {
  const t = this;
  if (
    t.support.touch ||
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  (n.style.cursor = "move"), (n.style.cursor = e ? "grabbing" : "grab");
}
function A_() {
  const e = this;
  e.support.touch ||
    (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = "");
}
const R_ = { setGrabCursor: O_, unsetGrabCursor: A_ };
function $_(e, t = this) {
  function n(r) {
    if (!r || r === qe() || r === Re()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const s = r.closest(e);
    return !s && !r.getRootNode ? null : s || n(r.getRootNode().host);
  }
  return n(t);
}
function L_(e) {
  const t = this,
    n = qe(),
    r = Re(),
    s = t.touchEventsData,
    { params: i, touches: o, enabled: a } = t;
  if (!a || (t.animating && i.preventInteractionOnTransition)) return;
  !t.animating && i.cssMode && i.loop && t.loopFix();
  let l = e;
  l.originalEvent && (l = l.originalEvent);
  let c = q(l.target);
  if (
    (i.touchEventsTarget === "wrapper" && !c.closest(t.wrapperEl).length) ||
    ((s.isTouchEvent = l.type === "touchstart"),
    !s.isTouchEvent && "which" in l && l.which === 3) ||
    (!s.isTouchEvent && "button" in l && l.button > 0) ||
    (s.isTouched && s.isMoved)
  )
    return;
  const u = !!i.noSwipingClass && i.noSwipingClass !== "",
    d = e.composedPath ? e.composedPath() : e.path;
  u && l.target && l.target.shadowRoot && d && (c = q(d[0]));
  const f = i.noSwipingSelector ? i.noSwipingSelector : `.${i.noSwipingClass}`,
    h = !!(l.target && l.target.shadowRoot);
  if (i.noSwiping && (h ? $_(f, c[0]) : c.closest(f)[0])) {
    t.allowClick = !0;
    return;
  }
  if (i.swipeHandler && !c.closest(i.swipeHandler)[0]) return;
  (o.currentX = l.type === "touchstart" ? l.targetTouches[0].pageX : l.pageX),
    (o.currentY = l.type === "touchstart" ? l.targetTouches[0].pageY : l.pageY);
  const m = o.currentX,
    v = o.currentY,
    b = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
    _ = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
  if (b && (m <= _ || m >= r.innerWidth - _))
    if (b === "prevent") e.preventDefault();
    else return;
  if (
    (Object.assign(s, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
    (o.startX = m),
    (o.startY = v),
    (s.touchStartTime = Mr()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    i.threshold > 0 && (s.allowThresholdMove = !1),
    l.type !== "touchstart")
  ) {
    let p = !0;
    c.is(s.focusableElements) &&
      ((p = !1), c[0].nodeName === "SELECT" && (s.isTouched = !1)),
      n.activeElement &&
        q(n.activeElement).is(s.focusableElements) &&
        n.activeElement !== c[0] &&
        n.activeElement.blur();
    const g = p && t.allowTouchMove && i.touchStartPreventDefault;
    (i.touchStartForcePreventDefault || g) &&
      !c[0].isContentEditable &&
      l.preventDefault();
  }
  t.params.freeMode &&
    t.params.freeMode.enabled &&
    t.freeMode &&
    t.animating &&
    !i.cssMode &&
    t.freeMode.onTouchStart(),
    t.emit("touchStart", l);
}
function M_(e) {
  const t = qe(),
    n = this,
    r = n.touchEventsData,
    { params: s, touches: i, rtlTranslate: o, enabled: a } = n;
  if (!a) return;
  let l = e;
  if ((l.originalEvent && (l = l.originalEvent), !r.isTouched)) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", l);
    return;
  }
  if (r.isTouchEvent && l.type !== "touchmove") return;
  const c =
      l.type === "touchmove" &&
      l.targetTouches &&
      (l.targetTouches[0] || l.changedTouches[0]),
    u = l.type === "touchmove" ? c.pageX : l.pageX,
    d = l.type === "touchmove" ? c.pageY : l.pageY;
  if (l.preventedByNestedSwiper) {
    (i.startX = u), (i.startY = d);
    return;
  }
  if (!n.allowTouchMove) {
    q(l.target).is(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(i, { startX: u, startY: d, currentX: u, currentY: d }),
        (r.touchStartTime = Mr()));
    return;
  }
  if (r.isTouchEvent && s.touchReleaseOnEdges && !s.loop) {
    if (n.isVertical()) {
      if (
        (d < i.startY && n.translate <= n.maxTranslate()) ||
        (d > i.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (u < i.startX && n.translate <= n.maxTranslate()) ||
      (u > i.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    r.isTouchEvent &&
    t.activeElement &&
    l.target === t.activeElement &&
    q(l.target).is(r.focusableElements)
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  if (
    (r.allowTouchCallbacks && n.emit("touchMove", l),
    l.targetTouches && l.targetTouches.length > 1)
  )
    return;
  (i.currentX = u), (i.currentY = d);
  const f = i.currentX - i.startX,
    h = i.currentY - i.startY;
  if (n.params.threshold && Math.sqrt(f ** 2 + h ** 2) < n.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let _;
    (n.isHorizontal() && i.currentY === i.startY) ||
    (n.isVertical() && i.currentX === i.startX)
      ? (r.isScrolling = !1)
      : f * f + h * h >= 25 &&
        ((_ = (Math.atan2(Math.abs(h), Math.abs(f)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? _ > s.touchAngle
          : 90 - _ > s.touchAngle));
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", l),
    typeof r.startMoving > "u" &&
      (i.currentX !== i.startX || i.currentY !== i.startY) &&
      (r.startMoving = !0),
    r.isScrolling)
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !s.cssMode && l.cancelable && l.preventDefault(),
    s.touchMoveStopPropagation && !s.nested && l.stopPropagation(),
    r.isMoved ||
      (s.loop && !s.cssMode && n.loopFix(),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
      (r.allowMomentumBounce = !1),
      s.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", l)),
    n.emit("sliderMove", l),
    (r.isMoved = !0);
  let m = n.isHorizontal() ? f : h;
  (i.diff = m),
    (m *= s.touchRatio),
    o && (m = -m),
    (n.swipeDirection = m > 0 ? "prev" : "next"),
    (r.currentTranslate = m + r.startTranslate);
  let v = !0,
    b = s.resistanceRatio;
  if (
    (s.touchReleaseOnEdges && (b = 0),
    m > 0 && r.currentTranslate > n.minTranslate()
      ? ((v = !1),
        s.resistance &&
          (r.currentTranslate =
            n.minTranslate() -
            1 +
            (-n.minTranslate() + r.startTranslate + m) ** b))
      : m < 0 &&
        r.currentTranslate < n.maxTranslate() &&
        ((v = !1),
        s.resistance &&
          (r.currentTranslate =
            n.maxTranslate() +
            1 -
            (n.maxTranslate() - r.startTranslate - m) ** b)),
    v && (l.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    s.threshold > 0)
  )
    if (Math.abs(m) > s.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (i.startX = i.currentX),
          (i.startY = i.currentY),
          (r.currentTranslate = r.startTranslate),
          (i.diff = n.isHorizontal()
            ? i.currentX - i.startX
            : i.currentY - i.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !s.followFinger ||
    s.cssMode ||
    (((s.freeMode && s.freeMode.enabled && n.freeMode) ||
      s.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    n.params.freeMode &&
      s.freeMode.enabled &&
      n.freeMode &&
      n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function I_(e) {
  const t = this,
    n = t.touchEventsData,
    { params: r, touches: s, rtlTranslate: i, slidesGrid: o, enabled: a } = t;
  if (!a) return;
  let l = e;
  if (
    (l.originalEvent && (l = l.originalEvent),
    n.allowTouchCallbacks && t.emit("touchEnd", l),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && r.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  r.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const c = Mr(),
    u = c - n.touchStartTime;
  if (t.allowClick) {
    const p = l.path || (l.composedPath && l.composedPath());
    t.updateClickedSlide((p && p[0]) || l.target),
      t.emit("tap click", l),
      u < 300 &&
        c - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", l);
  }
  if (
    ((n.lastClickTime = Mr()),
    Bi(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      s.diff === 0 ||
      n.currentTranslate === n.startTranslate)
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let d;
  if (
    (r.followFinger
      ? (d = i ? t.translate : -t.translate)
      : (d = -n.currentTranslate),
    r.cssMode)
  )
    return;
  if (t.params.freeMode && r.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: d });
    return;
  }
  let f = 0,
    h = t.slidesSizesGrid[0];
  for (
    let p = 0;
    p < o.length;
    p += p < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
  ) {
    const g = p < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    typeof o[p + g] < "u"
      ? d >= o[p] && d < o[p + g] && ((f = p), (h = o[p + g] - o[p]))
      : d >= o[p] && ((f = p), (h = o[o.length - 1] - o[o.length - 2]));
  }
  let m = null,
    v = null;
  r.rewind &&
    (t.isBeginning
      ? (v =
          t.params.virtual && t.params.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (m = 0));
  const b = (d - o[f]) / h,
    _ = f < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
  if (u > r.longSwipesMs) {
    if (!r.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (b >= r.longSwipesRatio
        ? t.slideTo(r.rewind && t.isEnd ? m : f + _)
        : t.slideTo(f)),
      t.swipeDirection === "prev" &&
        (b > 1 - r.longSwipesRatio
          ? t.slideTo(f + _)
          : v !== null && b < 0 && Math.abs(b) > r.longSwipesRatio
          ? t.slideTo(v)
          : t.slideTo(f));
  } else {
    if (!r.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
      ? l.target === t.navigation.nextEl
        ? t.slideTo(f + _)
        : t.slideTo(f)
      : (t.swipeDirection === "next" && t.slideTo(m !== null ? m : f + _),
        t.swipeDirection === "prev" && t.slideTo(v !== null ? v : f));
  }
}
function Gl() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: s, snapGrid: i } = e;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses(),
    (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
    e.isEnd &&
    !e.isBeginning &&
    !e.params.centeredSlides
      ? e.slideTo(e.slides.length - 1, 0, !1, !0)
      : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
    (e.allowSlidePrev = s),
    (e.allowSlideNext = r),
    e.params.watchOverflow && i !== e.snapGrid && e.checkOverflow();
}
function j_(e) {
  const t = this;
  !t.enabled ||
    t.allowClick ||
    (t.params.preventClicks && e.preventDefault(),
    t.params.preventClicksPropagation &&
      t.animating &&
      (e.stopPropagation(), e.stopImmediatePropagation()));
}
function D_() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let s;
  const i = e.maxTranslate() - e.minTranslate();
  i === 0 ? (s = 0) : (s = (e.translate - e.minTranslate()) / i),
    s !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
let Yl = !1;
function B_() {}
const ed = (e, t) => {
  const n = qe(),
    {
      params: r,
      touchEvents: s,
      el: i,
      wrapperEl: o,
      device: a,
      support: l,
    } = e,
    c = !!r.nested,
    u = t === "on" ? "addEventListener" : "removeEventListener",
    d = t;
  if (!l.touch)
    i[u](s.start, e.onTouchStart, !1),
      n[u](s.move, e.onTouchMove, c),
      n[u](s.end, e.onTouchEnd, !1);
  else {
    const f =
      s.start === "touchstart" && l.passiveListener && r.passiveListeners
        ? { passive: !0, capture: !1 }
        : !1;
    i[u](s.start, e.onTouchStart, f),
      i[u](
        s.move,
        e.onTouchMove,
        l.passiveListener ? { passive: !1, capture: c } : c
      ),
      i[u](s.end, e.onTouchEnd, f),
      s.cancel && i[u](s.cancel, e.onTouchEnd, f);
  }
  (r.preventClicks || r.preventClicksPropagation) &&
    i[u]("click", e.onClick, !0),
    r.cssMode && o[u]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[d](
          a.ios || a.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Gl,
          !0
        )
      : e[d]("observerUpdate", Gl, !0);
};
function N_() {
  const e = this,
    t = qe(),
    { params: n, support: r } = e;
  (e.onTouchStart = L_.bind(e)),
    (e.onTouchMove = M_.bind(e)),
    (e.onTouchEnd = I_.bind(e)),
    n.cssMode && (e.onScroll = D_.bind(e)),
    (e.onClick = j_.bind(e)),
    r.touch && !Yl && (t.addEventListener("touchstart", B_), (Yl = !0)),
    ed(e, "on");
}
function H_() {
  ed(this, "off");
}
const F_ = { attachEvents: N_, detachEvents: H_ },
  Xl = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function z_() {
  const e = this,
    {
      activeIndex: t,
      initialized: n,
      loopedSlides: r = 0,
      params: s,
      $el: i,
    } = e,
    o = s.breakpoints;
  if (!o || (o && Object.keys(o).length === 0)) return;
  const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
  if (!a || e.currentBreakpoint === a) return;
  const c = (a in o ? o[a] : void 0) || e.originalParams,
    u = Xl(e, s),
    d = Xl(e, c),
    f = s.enabled;
  u && !d
    ? (i.removeClass(
        `${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !u &&
      d &&
      (i.addClass(`${s.containerModifierClass}grid`),
      ((c.grid.fill && c.grid.fill === "column") ||
        (!c.grid.fill && s.grid.fill === "column")) &&
        i.addClass(`${s.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((b) => {
      const _ = s[b] && s[b].enabled,
        p = c[b] && c[b].enabled;
      _ && !p && e[b].disable(), !_ && p && e[b].enable();
    });
  const h = c.direction && c.direction !== s.direction,
    m = s.loop && (c.slidesPerView !== s.slidesPerView || h);
  h && n && e.changeDirection(), mt(e.params, c);
  const v = e.params.enabled;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    f && !v ? e.disable() : !f && v && e.enable(),
    (e.currentBreakpoint = a),
    e.emit("_beforeBreakpoint", c),
    m &&
      n &&
      (e.loopDestroy(),
      e.loopCreate(),
      e.updateSlides(),
      e.slideTo(t - r + e.loopedSlides, 0, !1)),
    e.emit("breakpoint", c);
}
function U_(e, t = "window", n) {
  if (!e || (t === "container" && !n)) return;
  let r = !1;
  const s = Re(),
    i = t === "window" ? s.innerHeight : n.clientHeight,
    o = Object.keys(e).map((a) => {
      if (typeof a == "string" && a.indexOf("@") === 0) {
        const l = parseFloat(a.substr(1));
        return { value: i * l, point: a };
      }
      return { value: a, point: a };
    });
  o.sort((a, l) => parseInt(a.value, 10) - parseInt(l.value, 10));
  for (let a = 0; a < o.length; a += 1) {
    const { point: l, value: c } = o[a];
    t === "window"
      ? s.matchMedia(`(min-width: ${c}px)`).matches && (r = l)
      : c <= n.clientWidth && (r = l);
  }
  return r || "max";
}
const V_ = { setBreakpoint: z_, getBreakpoint: U_ };
function q_(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((s) => {
            r[s] && n.push(t + s);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function W_() {
  const e = this,
    { classNames: t, params: n, rtl: r, $el: s, device: i, support: o } = e,
    a = q_(
      [
        "initialized",
        n.direction,
        { "pointer-events": !o.touch },
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: i.android },
        { ios: i.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  t.push(...a), s.addClass([...t].join(" ")), e.emitContainerClasses();
}
function K_() {
  const e = this,
    { $el: t, classNames: n } = e;
  t.removeClass(n.join(" ")), e.emitContainerClasses();
}
const G_ = { addClasses: W_, removeClasses: K_ };
function Y_(e, t, n, r, s, i) {
  const o = Re();
  let a;
  function l() {
    i && i();
  }
  !q(e).parent("picture")[0] && (!e.complete || !s) && t
    ? ((a = new o.Image()),
      (a.onload = l),
      (a.onerror = l),
      r && (a.sizes = r),
      n && (a.srcset = n),
      t && (a.src = t))
    : l();
}
function X_() {
  const e = this;
  e.imagesToLoad = e.$el.find("img");
  function t() {
    typeof e > "u" ||
      e === null ||
      !e ||
      e.destroyed ||
      (e.imagesLoaded !== void 0 && (e.imagesLoaded += 1),
      e.imagesLoaded === e.imagesToLoad.length &&
        (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
  }
  for (let n = 0; n < e.imagesToLoad.length; n += 1) {
    const r = e.imagesToLoad[n];
    e.loadImage(
      r,
      r.currentSrc || r.getAttribute("src"),
      r.srcset || r.getAttribute("srcset"),
      r.sizes || r.getAttribute("sizes"),
      !0,
      t
    );
  }
}
const J_ = { loadImage: Y_, preloadImages: X_ };
function Q_() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const s = e.slides.length - 1,
      i = e.slidesGrid[s] + e.slidesSizesGrid[s] + r * 2;
    e.isLocked = e.size > i;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
const Z_ = { checkOverflow: Q_ },
  Jl = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopedSlidesLimit: !0,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function ew(e, t) {
  return function (r = {}) {
    const s = Object.keys(r)[0],
      i = r[s];
    if (typeof i != "object" || i === null) {
      mt(t, r);
      return;
    }
    if (
      (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
        e[s] === !0 &&
        (e[s] = { auto: !0 }),
      !(s in e && "enabled" in i))
    ) {
      mt(t, r);
      return;
    }
    e[s] === !0 && (e[s] = { enabled: !0 }),
      typeof e[s] == "object" && !("enabled" in e[s]) && (e[s].enabled = !0),
      e[s] || (e[s] = { enabled: !1 }),
      mt(t, r);
  };
}
const ai = {
    eventsEmitter: Xb,
    update: o_,
    translate: f_,
    transition: g_,
    slide: E_,
    loop: P_,
    grabCursor: R_,
    events: F_,
    breakpoints: V_,
    checkOverflow: Z_,
    classes: G_,
    images: J_,
  },
  ci = {};
class He {
  constructor(...t) {
    let n, r;
    if (
      (t.length === 1 &&
      t[0].constructor &&
      Object.prototype.toString.call(t[0]).slice(8, -1) === "Object"
        ? (r = t[0])
        : ([n, r] = t),
      r || (r = {}),
      (r = mt({}, r)),
      n && !r.el && (r.el = n),
      r.el && q(r.el).length > 1)
    ) {
      const a = [];
      return (
        q(r.el).each((l) => {
          const c = mt({}, r, { el: l });
          a.push(new He(c));
        }),
        a
      );
    }
    const s = this;
    (s.__swiper__ = !0),
      (s.support = Qu()),
      (s.device = qb({ userAgent: r.userAgent })),
      (s.browser = Kb()),
      (s.eventsListeners = {}),
      (s.eventsAnyListeners = []),
      (s.modules = [...s.__modules__]),
      r.modules && Array.isArray(r.modules) && s.modules.push(...r.modules);
    const i = {};
    s.modules.forEach((a) => {
      a({
        swiper: s,
        extendParams: ew(r, i),
        on: s.on.bind(s),
        once: s.once.bind(s),
        off: s.off.bind(s),
        emit: s.emit.bind(s),
      });
    });
    const o = mt({}, Jl, i);
    return (
      (s.params = mt({}, o, ci, r)),
      (s.originalParams = mt({}, s.params)),
      (s.passedParams = mt({}, r)),
      s.params &&
        s.params.on &&
        Object.keys(s.params.on).forEach((a) => {
          s.on(a, s.params.on[a]);
        }),
      s.params && s.params.onAny && s.onAny(s.params.onAny),
      (s.$ = q),
      Object.assign(s, {
        enabled: s.params.enabled,
        el: n,
        classNames: [],
        slides: q(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return s.params.direction === "horizontal";
        },
        isVertical() {
          return s.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: s.params.allowSlideNext,
        allowSlidePrev: s.params.allowSlidePrev,
        touchEvents: (function () {
          const l = ["touchstart", "touchmove", "touchend", "touchcancel"],
            c = ["pointerdown", "pointermove", "pointerup"];
          return (
            (s.touchEventsTouch = {
              start: l[0],
              move: l[1],
              end: l[2],
              cancel: l[3],
            }),
            (s.touchEventsDesktop = { start: c[0], move: c[1], end: c[2] }),
            s.support.touch || !s.params.simulateTouch
              ? s.touchEventsTouch
              : s.touchEventsDesktop
          );
        })(),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: s.params.focusableElements,
          lastClickTime: Mr(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0,
        },
        allowClick: !0,
        allowTouchMove: s.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      s.emit("_swiper"),
      s.params.init && s.init(),
      s
    );
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    !t.enabled ||
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const s = r.minTranslate(),
      o = (r.maxTranslate() - s) * t + s;
    r.translateTo(o, typeof n > "u" ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(n.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.each((r) => {
      const s = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: s }), t.emit("_slideClass", r, s);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t = "current", n = !1) {
    const r = this,
      {
        params: s,
        slides: i,
        slidesGrid: o,
        slidesSizesGrid: a,
        size: l,
        activeIndex: c,
      } = r;
    let u = 1;
    if (s.centeredSlides) {
      let d = i[c].swiperSlideSize,
        f;
      for (let h = c + 1; h < i.length; h += 1)
        i[h] &&
          !f &&
          ((d += i[h].swiperSlideSize), (u += 1), d > l && (f = !0));
      for (let h = c - 1; h >= 0; h -= 1)
        i[h] &&
          !f &&
          ((d += i[h].swiperSlideSize), (u += 1), d > l && (f = !0));
    } else if (t === "current")
      for (let d = c + 1; d < i.length; d += 1)
        (n ? o[d] + a[d] - o[c] < l : o[d] - o[c] < l) && (u += 1);
    else for (let d = c - 1; d >= 0; d -= 1) o[c] - o[d] < l && (u += 1);
    return u;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function s() {
      const o = t.rtlTranslate ? t.translate * -1 : t.translate,
        a = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate());
      t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let i;
    t.params.freeMode && t.params.freeMode.enabled
      ? (s(), t.params.autoHeight && t.updateAutoHeight())
      : ((t.params.slidesPerView === "auto" || t.params.slidesPerView > 1) &&
        t.isEnd &&
        !t.params.centeredSlides
          ? (i = t.slideTo(t.slides.length - 1, 0, !1, !0))
          : (i = t.slideTo(t.activeIndex, 0, !1, !0)),
        i || s()),
      r.watchOverflow && n !== t.snapGrid && t.checkOverflow(),
      t.emit("update");
  }
  changeDirection(t, n = !0) {
    const r = this,
      s = r.params.direction;
    return (
      t || (t = s === "horizontal" ? "vertical" : "horizontal"),
      t === s ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.$el
          .removeClass(`${r.params.containerModifierClass}${s}`)
          .addClass(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.each((i) => {
          t === "vertical" ? (i.style.width = "") : (i.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.$el.addClass(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.$el.removeClass(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    const r = q(t || n.params.el);
    if (((t = r[0]), !t)) return !1;
    t.swiper = n;
    const s = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o = (() => {
      if (t && t.shadowRoot && t.shadowRoot.querySelector) {
        const a = q(t.shadowRoot.querySelector(s()));
        return (a.children = (l) => r.children(l)), a;
      }
      return r.children ? r.children(s()) : q(r).children(s());
    })();
    if (o.length === 0 && n.params.createElements) {
      const l = qe().createElement("div");
      (o = q(l)),
        (l.className = n.params.wrapperClass),
        r.append(l),
        r.children(`.${n.params.slideClass}`).each((c) => {
          o.append(c);
        });
    }
    return (
      Object.assign(n, {
        $el: r,
        el: t,
        $wrapperEl: o,
        wrapperEl: o[0],
        mounted: !0,
        rtl: t.dir.toLowerCase() === "rtl" || r.css("direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (t.dir.toLowerCase() === "rtl" || r.css("direction") === "rtl"),
        wrongRTL: o.css("display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    return (
      n.initialized ||
        n.mount(t) === !1 ||
        (n.emit("beforeInit"),
        n.params.breakpoints && n.setBreakpoint(),
        n.addClasses(),
        n.params.loop && n.loopCreate(),
        n.updateSize(),
        n.updateSlides(),
        n.params.watchOverflow && n.checkOverflow(),
        n.params.grabCursor && n.enabled && n.setGrabCursor(),
        n.params.preloadImages && n.preloadImages(),
        n.params.loop
          ? n.slideTo(
              n.params.initialSlide + n.loopedSlides,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0
            )
          : n.slideTo(
              n.params.initialSlide,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0
            ),
        n.attachEvents(),
        (n.initialized = !0),
        n.emit("init"),
        n.emit("afterInit")),
      n
    );
  }
  destroy(t = !0, n = !0) {
    const r = this,
      { params: s, $el: i, $wrapperEl: o, slides: a } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        s.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          i.removeAttr("style"),
          o.removeAttr("style"),
          a &&
            a.length &&
            a
              .removeClass(
                [
                  s.slideVisibleClass,
                  s.slideActiveClass,
                  s.slideNextClass,
                  s.slidePrevClass,
                ].join(" ")
              )
              .removeAttr("style")
              .removeAttr("data-swiper-slide-index")),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((l) => {
          r.off(l);
        }),
        t !== !1 && ((r.$el[0].swiper = null), Nb(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    mt(ci, t);
  }
  static get extendedDefaults() {
    return ci;
  }
  static get defaults() {
    return Jl;
  }
  static installModule(t) {
    He.prototype.__modules__ || (He.prototype.__modules__ = []);
    const n = He.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => He.installModule(n)), He)
      : (He.installModule(t), He);
  }
}
Object.keys(ai).forEach((e) => {
  Object.keys(ai[e]).forEach((t) => {
    He.prototype[t] = ai[e][t];
  });
});
He.use([Gb, Yb]);
function tw(e, t, n, r) {
  const s = qe();
  return (
    e.params.createElements &&
      Object.keys(r).forEach((i) => {
        if (!n[i] && n.auto === !0) {
          let o = e.$el.children(`.${r[i]}`)[0];
          o ||
            ((o = s.createElement("div")),
            (o.className = r[i]),
            e.$el.append(o)),
            (n[i] = o),
            (t[i] = o);
        }
      }),
    n
  );
}
function jn(e = "") {
  return `.${e
    .trim()
    .replace(/([\.:!\/])/g, "\\$1")
    .replace(/ /g, ".")}`;
}
function nw({ swiper: e, extendParams: t, on: n, emit: r }) {
  const s = "swiper-pagination";
  t({
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
      formatFractionCurrent: (v) => v,
      formatFractionTotal: (v) => v,
      bulletClass: `${s}-bullet`,
      bulletActiveClass: `${s}-bullet-active`,
      modifierClass: `${s}-`,
      currentClass: `${s}-current`,
      totalClass: `${s}-total`,
      hiddenClass: `${s}-hidden`,
      progressbarFillClass: `${s}-progressbar-fill`,
      progressbarOppositeClass: `${s}-progressbar-opposite`,
      clickableClass: `${s}-clickable`,
      lockClass: `${s}-lock`,
      horizontalClass: `${s}-horizontal`,
      verticalClass: `${s}-vertical`,
      paginationDisabledClass: `${s}-disabled`,
    },
  }),
    (e.pagination = { el: null, $el: null, bullets: [] });
  let i,
    o = 0;
  function a() {
    return (
      !e.params.pagination.el ||
      !e.pagination.el ||
      !e.pagination.$el ||
      e.pagination.$el.length === 0
    );
  }
  function l(v, b) {
    const { bulletActiveClass: _ } = e.params.pagination;
    v[b]().addClass(`${_}-${b}`)[b]().addClass(`${_}-${b}-${b}`);
  }
  function c() {
    const v = e.rtl,
      b = e.params.pagination;
    if (a()) return;
    const _ =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.slides.length,
      p = e.pagination.$el;
    let g;
    const S = e.params.loop
      ? Math.ceil((_ - e.loopedSlides * 2) / e.params.slidesPerGroup)
      : e.snapGrid.length;
    if (
      (e.params.loop
        ? ((g = Math.ceil(
            (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
          )),
          g > _ - 1 - e.loopedSlides * 2 && (g -= _ - e.loopedSlides * 2),
          g > S - 1 && (g -= S),
          g < 0 && e.params.paginationType !== "bullets" && (g = S + g))
        : typeof e.snapIndex < "u"
        ? (g = e.snapIndex)
        : (g = e.activeIndex || 0),
      b.type === "bullets" &&
        e.pagination.bullets &&
        e.pagination.bullets.length > 0)
    ) {
      const C = e.pagination.bullets;
      let P, O, E;
      if (
        (b.dynamicBullets &&
          ((i = C.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
          p.css(
            e.isHorizontal() ? "width" : "height",
            `${i * (b.dynamicMainBullets + 4)}px`
          ),
          b.dynamicMainBullets > 1 &&
            e.previousIndex !== void 0 &&
            ((o += g - (e.previousIndex - e.loopedSlides || 0)),
            o > b.dynamicMainBullets - 1
              ? (o = b.dynamicMainBullets - 1)
              : o < 0 && (o = 0)),
          (P = Math.max(g - o, 0)),
          (O = P + (Math.min(C.length, b.dynamicMainBullets) - 1)),
          (E = (O + P) / 2)),
        C.removeClass(
          ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
            .map((N) => `${b.bulletActiveClass}${N}`)
            .join(" ")
        ),
        p.length > 1)
      )
        C.each((N) => {
          const k = q(N),
            M = k.index();
          M === g && k.addClass(b.bulletActiveClass),
            b.dynamicBullets &&
              (M >= P && M <= O && k.addClass(`${b.bulletActiveClass}-main`),
              M === P && l(k, "prev"),
              M === O && l(k, "next"));
        });
      else {
        const N = C.eq(g),
          k = N.index();
        if ((N.addClass(b.bulletActiveClass), b.dynamicBullets)) {
          const M = C.eq(P),
            $ = C.eq(O);
          for (let Y = P; Y <= O; Y += 1)
            C.eq(Y).addClass(`${b.bulletActiveClass}-main`);
          if (e.params.loop)
            if (k >= C.length) {
              for (let Y = b.dynamicMainBullets; Y >= 0; Y -= 1)
                C.eq(C.length - Y).addClass(`${b.bulletActiveClass}-main`);
              C.eq(C.length - b.dynamicMainBullets - 1).addClass(
                `${b.bulletActiveClass}-prev`
              );
            } else l(M, "prev"), l($, "next");
          else l(M, "prev"), l($, "next");
        }
      }
      if (b.dynamicBullets) {
        const N = Math.min(C.length, b.dynamicMainBullets + 4),
          k = (i * N - i) / 2 - E * i,
          M = v ? "right" : "left";
        C.css(e.isHorizontal() ? M : "top", `${k}px`);
      }
    }
    if (
      (b.type === "fraction" &&
        (p.find(jn(b.currentClass)).text(b.formatFractionCurrent(g + 1)),
        p.find(jn(b.totalClass)).text(b.formatFractionTotal(S))),
      b.type === "progressbar")
    ) {
      let C;
      b.progressbarOpposite
        ? (C = e.isHorizontal() ? "vertical" : "horizontal")
        : (C = e.isHorizontal() ? "horizontal" : "vertical");
      const P = (g + 1) / S;
      let O = 1,
        E = 1;
      C === "horizontal" ? (O = P) : (E = P),
        p
          .find(jn(b.progressbarFillClass))
          .transform(`translate3d(0,0,0) scaleX(${O}) scaleY(${E})`)
          .transition(e.params.speed);
    }
    b.type === "custom" && b.renderCustom
      ? (p.html(b.renderCustom(e, g + 1, S)), r("paginationRender", p[0]))
      : r("paginationUpdate", p[0]),
      e.params.watchOverflow &&
        e.enabled &&
        p[e.isLocked ? "addClass" : "removeClass"](b.lockClass);
  }
  function u() {
    const v = e.params.pagination;
    if (a()) return;
    const b =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.slides.length,
      _ = e.pagination.$el;
    let p = "";
    if (v.type === "bullets") {
      let g = e.params.loop
        ? Math.ceil((b - e.loopedSlides * 2) / e.params.slidesPerGroup)
        : e.snapGrid.length;
      e.params.freeMode &&
        e.params.freeMode.enabled &&
        !e.params.loop &&
        g > b &&
        (g = b);
      for (let S = 0; S < g; S += 1)
        v.renderBullet
          ? (p += v.renderBullet.call(e, S, v.bulletClass))
          : (p += `<${v.bulletElement} class="${v.bulletClass}"></${v.bulletElement}>`);
      _.html(p), (e.pagination.bullets = _.find(jn(v.bulletClass)));
    }
    v.type === "fraction" &&
      (v.renderFraction
        ? (p = v.renderFraction.call(e, v.currentClass, v.totalClass))
        : (p = `<span class="${v.currentClass}"></span> / <span class="${v.totalClass}"></span>`),
      _.html(p)),
      v.type === "progressbar" &&
        (v.renderProgressbar
          ? (p = v.renderProgressbar.call(e, v.progressbarFillClass))
          : (p = `<span class="${v.progressbarFillClass}"></span>`),
        _.html(p)),
      v.type !== "custom" && r("paginationRender", e.pagination.$el[0]);
  }
  function d() {
    e.params.pagination = tw(
      e,
      e.originalParams.pagination,
      e.params.pagination,
      { el: "swiper-pagination" }
    );
    const v = e.params.pagination;
    if (!v.el) return;
    let b = q(v.el);
    b.length !== 0 &&
      (e.params.uniqueNavElements &&
        typeof v.el == "string" &&
        b.length > 1 &&
        ((b = e.$el.find(v.el)),
        b.length > 1 &&
          (b = b.filter((_) => q(_).parents(".swiper")[0] === e.el))),
      v.type === "bullets" && v.clickable && b.addClass(v.clickableClass),
      b.addClass(v.modifierClass + v.type),
      b.addClass(e.isHorizontal() ? v.horizontalClass : v.verticalClass),
      v.type === "bullets" &&
        v.dynamicBullets &&
        (b.addClass(`${v.modifierClass}${v.type}-dynamic`),
        (o = 0),
        v.dynamicMainBullets < 1 && (v.dynamicMainBullets = 1)),
      v.type === "progressbar" &&
        v.progressbarOpposite &&
        b.addClass(v.progressbarOppositeClass),
      v.clickable &&
        b.on("click", jn(v.bulletClass), function (p) {
          p.preventDefault();
          let g = q(this).index() * e.params.slidesPerGroup;
          e.params.loop && (g += e.loopedSlides), e.slideTo(g);
        }),
      Object.assign(e.pagination, { $el: b, el: b[0] }),
      e.enabled || b.addClass(v.lockClass));
  }
  function f() {
    const v = e.params.pagination;
    if (a()) return;
    const b = e.pagination.$el;
    b.removeClass(v.hiddenClass),
      b.removeClass(v.modifierClass + v.type),
      b.removeClass(e.isHorizontal() ? v.horizontalClass : v.verticalClass),
      e.pagination.bullets &&
        e.pagination.bullets.removeClass &&
        e.pagination.bullets.removeClass(v.bulletActiveClass),
      v.clickable && b.off("click", jn(v.bulletClass));
  }
  n("init", () => {
    e.params.pagination.enabled === !1 ? m() : (d(), u(), c());
  }),
    n("activeIndexChange", () => {
      (e.params.loop || typeof e.snapIndex > "u") && c();
    }),
    n("snapIndexChange", () => {
      e.params.loop || c();
    }),
    n("slidesLengthChange", () => {
      e.params.loop && (u(), c());
    }),
    n("snapGridLengthChange", () => {
      e.params.loop || (u(), c());
    }),
    n("destroy", () => {
      f();
    }),
    n("enable disable", () => {
      const { $el: v } = e.pagination;
      v &&
        v[e.enabled ? "removeClass" : "addClass"](
          e.params.pagination.lockClass
        );
    }),
    n("lock unlock", () => {
      c();
    }),
    n("click", (v, b) => {
      const _ = b.target,
        { $el: p } = e.pagination;
      if (
        e.params.pagination.el &&
        e.params.pagination.hideOnClick &&
        p &&
        p.length > 0 &&
        !q(_).hasClass(e.params.pagination.bulletClass)
      ) {
        if (
          e.navigation &&
          ((e.navigation.nextEl && _ === e.navigation.nextEl) ||
            (e.navigation.prevEl && _ === e.navigation.prevEl))
        )
          return;
        const g = p.hasClass(e.params.pagination.hiddenClass);
        r(g === !0 ? "paginationShow" : "paginationHide"),
          p.toggleClass(e.params.pagination.hiddenClass);
      }
    });
  const h = () => {
      e.$el.removeClass(e.params.pagination.paginationDisabledClass),
        e.pagination.$el &&
          e.pagination.$el.removeClass(
            e.params.pagination.paginationDisabledClass
          ),
        d(),
        u(),
        c();
    },
    m = () => {
      e.$el.addClass(e.params.pagination.paginationDisabledClass),
        e.pagination.$el &&
          e.pagination.$el.addClass(
            e.params.pagination.paginationDisabledClass
          ),
        f();
    };
  Object.assign(e.pagination, {
    enable: h,
    disable: m,
    render: u,
    update: c,
    init: d,
    destroy: f,
  });
}
function On(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function on(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : On(t[r]) && On(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : on(e[r], t[r])
        : (e[r] = t[r]);
    });
}
function td(e = {}) {
  return (
    e.navigation &&
    typeof e.navigation.nextEl > "u" &&
    typeof e.navigation.prevEl > "u"
  );
}
function nd(e = {}) {
  return e.pagination && typeof e.pagination.el > "u";
}
function rd(e = {}) {
  return e.scrollbar && typeof e.scrollbar.el > "u";
}
function sd(e = "") {
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
const id = [
  "modules",
  "init",
  "_direction",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_preloadImages",
  "updateOnImagesReady",
  "_loop",
  "_loopAdditionalSlides",
  "_loopedSlides",
  "_loopedSlidesLimit",
  "_loopFillGroupWithBlank",
  "loopPreventsSlide",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideBlankClass",
  "slideActiveClass",
  "slideDuplicateActiveClass",
  "slideVisibleClass",
  "slideDuplicateClass",
  "slideNextClass",
  "slideDuplicateNextClass",
  "slidePrevClass",
  "slideDuplicatePrevClass",
  "wrapperClass",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "lazy",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
];
function Ql(e = {}, t = !0) {
  const n = { on: {} },
    r = {},
    s = {};
  on(n, He.defaults),
    on(n, He.extendedDefaults),
    (n._emitClasses = !0),
    (n.init = !1);
  const i = {},
    o = id.map((l) => l.replace(/_/, "")),
    a = Object.assign({}, e);
  return (
    Object.keys(a).forEach((l) => {
      typeof e[l] > "u" ||
        (o.indexOf(l) >= 0
          ? On(e[l])
            ? ((n[l] = {}), (s[l] = {}), on(n[l], e[l]), on(s[l], e[l]))
            : ((n[l] = e[l]), (s[l] = e[l]))
          : l.search(/on[A-Z]/) === 0 && typeof e[l] == "function"
          ? t
            ? (r[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
            : (n.on[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
          : (i[l] = e[l]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((l) => {
      n[l] === !0 && (n[l] = {}), n[l] === !1 && delete n[l];
    }),
    { params: n, passedParams: s, rest: i, events: r }
  );
}
function rw(
  { el: e, nextEl: t, prevEl: n, paginationEl: r, scrollbarEl: s, swiper: i },
  o
) {
  td(o) &&
    t &&
    n &&
    ((i.params.navigation.nextEl = t),
    (i.originalParams.navigation.nextEl = t),
    (i.params.navigation.prevEl = n),
    (i.originalParams.navigation.prevEl = n)),
    nd(o) &&
      r &&
      ((i.params.pagination.el = r), (i.originalParams.pagination.el = r)),
    rd(o) &&
      s &&
      ((i.params.scrollbar.el = s), (i.originalParams.scrollbar.el = s)),
    i.init(e);
}
const od = (e, t) => {
  let n = t.slidesPerView;
  if (t.breakpoints) {
    const s = He.prototype.getBreakpoint(t.breakpoints),
      i = s in t.breakpoints ? t.breakpoints[s] : void 0;
    i && i.slidesPerView && (n = i.slidesPerView);
  }
  let r = Math.ceil(parseFloat(t.loopedSlides || n, 10));
  return (
    (r += t.loopAdditionalSlides),
    r > e.length && t.loopedSlidesLimit && (r = e.length),
    r
  );
};
function sw(e, t, n) {
  const r = t.map(
    (l, c) => (
      l.props || (l.props = {}),
      (l.props.swiperRef = e),
      (l.props["data-swiper-slide-index"] = c),
      l
    )
  );
  function s(l, c, u) {
    return (
      l.props || (l.props = {}),
      de(
        l.type,
        {
          ...l.props,
          key: `${l.key}-duplicate-${c}-${u}`,
          class: `${l.props.className || ""} ${n.slideDuplicateClass} ${
            l.props.class || ""
          }`,
        },
        l.children
      )
    );
  }
  if (n.loopFillGroupWithBlank) {
    const l = n.slidesPerGroup - (r.length % n.slidesPerGroup);
    if (l !== n.slidesPerGroup)
      for (let c = 0; c < l; c += 1) {
        const u = de("div", { class: `${n.slideClass} ${n.slideBlankClass}` });
        r.push(u);
      }
  }
  n.slidesPerView === "auto" && !n.loopedSlides && (n.loopedSlides = r.length);
  const i = od(r, n),
    o = [],
    a = [];
  for (let l = 0; l < i; l += 1) {
    const c = l - Math.floor(l / r.length) * r.length;
    a.push(s(r[c], l, "append")),
      o.unshift(s(r[r.length - c - 1], l, "prepend"));
  }
  return e.value && (e.value.loopedSlides = i), [...o, ...r, ...a];
}
function iw(e, t, n, r, s) {
  const i = [];
  if (!t) return i;
  const o = (l) => {
    i.indexOf(l) < 0 && i.push(l);
  };
  if (n && r) {
    const l = r.map(s),
      c = n.map(s);
    l.join("") !== c.join("") && o("children"),
      r.length !== n.length && o("children");
  }
  return (
    id
      .filter((l) => l[0] === "_")
      .map((l) => l.replace(/_/, ""))
      .forEach((l) => {
        if (l in e && l in t)
          if (On(e[l]) && On(t[l])) {
            const c = Object.keys(e[l]),
              u = Object.keys(t[l]);
            c.length !== u.length
              ? o(l)
              : (c.forEach((d) => {
                  e[l][d] !== t[l][d] && o(l);
                }),
                u.forEach((d) => {
                  e[l][d] !== t[l][d] && o(l);
                }));
          } else e[l] !== t[l] && o(l);
      }),
    i
  );
}
function ui(e, t, n) {
  e === void 0 && (e = {});
  const r = [],
    s = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    },
    i = (o, a) => {
      !Array.isArray(o) ||
        o.forEach((l) => {
          const c = typeof l.type == "symbol";
          a === "default" && (a = "container-end"),
            c && l.children
              ? i(l.children, "default")
              : l.type &&
                (l.type.name === "SwiperSlide" ||
                  l.type.name === "AsyncComponentWrapper")
              ? r.push(l)
              : s[a] && s[a].push(l);
        });
    };
  return (
    Object.keys(e).forEach((o) => {
      if (typeof e[o] != "function") return;
      const a = e[o]();
      i(a, o);
    }),
    (n.value = t.value),
    (t.value = r),
    { slides: r, slots: s }
  );
}
function ow({
  swiper: e,
  slides: t,
  passedParams: n,
  changedParams: r,
  nextEl: s,
  prevEl: i,
  scrollbarEl: o,
  paginationEl: a,
}) {
  const l = r.filter((C) => C !== "children" && C !== "direction"),
    {
      params: c,
      pagination: u,
      navigation: d,
      scrollbar: f,
      virtual: h,
      thumbs: m,
    } = e;
  let v, b, _, p, g;
  r.includes("thumbs") &&
    n.thumbs &&
    n.thumbs.swiper &&
    c.thumbs &&
    !c.thumbs.swiper &&
    (v = !0),
    r.includes("controller") &&
      n.controller &&
      n.controller.control &&
      c.controller &&
      !c.controller.control &&
      (b = !0),
    r.includes("pagination") &&
      n.pagination &&
      (n.pagination.el || a) &&
      (c.pagination || c.pagination === !1) &&
      u &&
      !u.el &&
      (_ = !0),
    r.includes("scrollbar") &&
      n.scrollbar &&
      (n.scrollbar.el || o) &&
      (c.scrollbar || c.scrollbar === !1) &&
      f &&
      !f.el &&
      (p = !0),
    r.includes("navigation") &&
      n.navigation &&
      (n.navigation.prevEl || i) &&
      (n.navigation.nextEl || s) &&
      (c.navigation || c.navigation === !1) &&
      d &&
      !d.prevEl &&
      !d.nextEl &&
      (g = !0);
  const S = (C) => {
    !e[C] ||
      (e[C].destroy(),
      C === "navigation"
        ? ((c[C].prevEl = void 0),
          (c[C].nextEl = void 0),
          (e[C].prevEl = void 0),
          (e[C].nextEl = void 0))
        : ((c[C].el = void 0), (e[C].el = void 0)));
  };
  l.forEach((C) => {
    if (On(c[C]) && On(n[C])) on(c[C], n[C]);
    else {
      const P = n[C];
      (P === !0 || P === !1) &&
      (C === "navigation" || C === "pagination" || C === "scrollbar")
        ? P === !1 && S(C)
        : (c[C] = n[C]);
    }
  }),
    l.includes("controller") &&
      !b &&
      e.controller &&
      e.controller.control &&
      c.controller &&
      c.controller.control &&
      (e.controller.control = c.controller.control),
    r.includes("children") && t && h && c.virtual.enabled
      ? ((h.slides = t), h.update(!0))
      : r.includes("children") &&
        e.lazy &&
        e.params.lazy.enabled &&
        e.lazy.load(),
    v && m.init() && m.update(!0),
    b && (e.controller.control = c.controller.control),
    _ && (a && (c.pagination.el = a), u.init(), u.render(), u.update()),
    p &&
      (o && (c.scrollbar.el = o), f.init(), f.updateSize(), f.setTranslate()),
    g &&
      (s && (c.navigation.nextEl = s),
      i && (c.navigation.prevEl = i),
      d.init(),
      d.update()),
    r.includes("allowSlideNext") && (e.allowSlideNext = n.allowSlideNext),
    r.includes("allowSlidePrev") && (e.allowSlidePrev = n.allowSlidePrev),
    r.includes("direction") && e.changeDirection(n.direction, !1),
    e.update();
}
function lw(e, t, n) {
  if (!n) return null;
  const r = e.value.isHorizontal()
    ? { [e.value.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
    : { top: `${n.offset}px` };
  return t
    .filter((s, i) => i >= n.from && i <= n.to)
    .map(
      (s) => (
        s.props || (s.props = {}),
        s.props.style || (s.props.style = {}),
        (s.props.swiperRef = e),
        (s.props.style = r),
        de(s.type, { ...s.props }, s.children)
      )
    );
}
const aw = (e) => {
    !e ||
      e.destroyed ||
      !e.params.virtual ||
      (e.params.virtual && !e.params.virtual.enabled) ||
      (e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses(),
      e.lazy && e.params.lazy.enabled && e.lazy.load(),
      e.parallax &&
        e.params.parallax &&
        e.params.parallax.enabled &&
        e.parallax.setTranslate());
  },
  cw = {
    name: "Swiper",
    props: {
      tag: { type: String, default: "div" },
      wrapperTag: { type: String, default: "div" },
      modules: { type: Array, default: void 0 },
      init: { type: Boolean, default: void 0 },
      direction: { type: String, default: void 0 },
      touchEventsTarget: { type: String, default: void 0 },
      initialSlide: { type: Number, default: void 0 },
      speed: { type: Number, default: void 0 },
      cssMode: { type: Boolean, default: void 0 },
      updateOnWindowResize: { type: Boolean, default: void 0 },
      resizeObserver: { type: Boolean, default: void 0 },
      nested: { type: Boolean, default: void 0 },
      focusableElements: { type: String, default: void 0 },
      width: { type: Number, default: void 0 },
      height: { type: Number, default: void 0 },
      preventInteractionOnTransition: { type: Boolean, default: void 0 },
      userAgent: { type: String, default: void 0 },
      url: { type: String, default: void 0 },
      edgeSwipeDetection: { type: [Boolean, String], default: void 0 },
      edgeSwipeThreshold: { type: Number, default: void 0 },
      autoHeight: { type: Boolean, default: void 0 },
      setWrapperSize: { type: Boolean, default: void 0 },
      virtualTranslate: { type: Boolean, default: void 0 },
      effect: { type: String, default: void 0 },
      breakpoints: { type: Object, default: void 0 },
      spaceBetween: { type: Number, default: void 0 },
      slidesPerView: { type: [Number, String], default: void 0 },
      maxBackfaceHiddenSlides: { type: Number, default: void 0 },
      slidesPerGroup: { type: Number, default: void 0 },
      slidesPerGroupSkip: { type: Number, default: void 0 },
      slidesPerGroupAuto: { type: Boolean, default: void 0 },
      centeredSlides: { type: Boolean, default: void 0 },
      centeredSlidesBounds: { type: Boolean, default: void 0 },
      slidesOffsetBefore: { type: Number, default: void 0 },
      slidesOffsetAfter: { type: Number, default: void 0 },
      normalizeSlideIndex: { type: Boolean, default: void 0 },
      centerInsufficientSlides: { type: Boolean, default: void 0 },
      watchOverflow: { type: Boolean, default: void 0 },
      roundLengths: { type: Boolean, default: void 0 },
      touchRatio: { type: Number, default: void 0 },
      touchAngle: { type: Number, default: void 0 },
      simulateTouch: { type: Boolean, default: void 0 },
      shortSwipes: { type: Boolean, default: void 0 },
      longSwipes: { type: Boolean, default: void 0 },
      longSwipesRatio: { type: Number, default: void 0 },
      longSwipesMs: { type: Number, default: void 0 },
      followFinger: { type: Boolean, default: void 0 },
      allowTouchMove: { type: Boolean, default: void 0 },
      threshold: { type: Number, default: void 0 },
      touchMoveStopPropagation: { type: Boolean, default: void 0 },
      touchStartPreventDefault: { type: Boolean, default: void 0 },
      touchStartForcePreventDefault: { type: Boolean, default: void 0 },
      touchReleaseOnEdges: { type: Boolean, default: void 0 },
      uniqueNavElements: { type: Boolean, default: void 0 },
      resistance: { type: Boolean, default: void 0 },
      resistanceRatio: { type: Number, default: void 0 },
      watchSlidesProgress: { type: Boolean, default: void 0 },
      grabCursor: { type: Boolean, default: void 0 },
      preventClicks: { type: Boolean, default: void 0 },
      preventClicksPropagation: { type: Boolean, default: void 0 },
      slideToClickedSlide: { type: Boolean, default: void 0 },
      preloadImages: { type: Boolean, default: void 0 },
      updateOnImagesReady: { type: Boolean, default: void 0 },
      loop: { type: Boolean, default: void 0 },
      loopAdditionalSlides: { type: Number, default: void 0 },
      loopedSlides: { type: Number, default: void 0 },
      loopedSlidesLimit: { type: Boolean, default: !0 },
      loopFillGroupWithBlank: { type: Boolean, default: void 0 },
      loopPreventsSlide: { type: Boolean, default: void 0 },
      rewind: { type: Boolean, default: void 0 },
      allowSlidePrev: { type: Boolean, default: void 0 },
      allowSlideNext: { type: Boolean, default: void 0 },
      swipeHandler: { type: Boolean, default: void 0 },
      noSwiping: { type: Boolean, default: void 0 },
      noSwipingClass: { type: String, default: void 0 },
      noSwipingSelector: { type: String, default: void 0 },
      passiveListeners: { type: Boolean, default: void 0 },
      containerModifierClass: { type: String, default: void 0 },
      slideClass: { type: String, default: void 0 },
      slideBlankClass: { type: String, default: void 0 },
      slideActiveClass: { type: String, default: void 0 },
      slideDuplicateActiveClass: { type: String, default: void 0 },
      slideVisibleClass: { type: String, default: void 0 },
      slideDuplicateClass: { type: String, default: void 0 },
      slideNextClass: { type: String, default: void 0 },
      slideDuplicateNextClass: { type: String, default: void 0 },
      slidePrevClass: { type: String, default: void 0 },
      slideDuplicatePrevClass: { type: String, default: void 0 },
      wrapperClass: { type: String, default: void 0 },
      runCallbacksOnInit: { type: Boolean, default: void 0 },
      observer: { type: Boolean, default: void 0 },
      observeParents: { type: Boolean, default: void 0 },
      observeSlideChildren: { type: Boolean, default: void 0 },
      a11y: { type: [Boolean, Object], default: void 0 },
      autoplay: { type: [Boolean, Object], default: void 0 },
      controller: { type: Object, default: void 0 },
      coverflowEffect: { type: Object, default: void 0 },
      cubeEffect: { type: Object, default: void 0 },
      fadeEffect: { type: Object, default: void 0 },
      flipEffect: { type: Object, default: void 0 },
      creativeEffect: { type: Object, default: void 0 },
      cardsEffect: { type: Object, default: void 0 },
      hashNavigation: { type: [Boolean, Object], default: void 0 },
      history: { type: [Boolean, Object], default: void 0 },
      keyboard: { type: [Boolean, Object], default: void 0 },
      lazy: { type: [Boolean, Object], default: void 0 },
      mousewheel: { type: [Boolean, Object], default: void 0 },
      navigation: { type: [Boolean, Object], default: void 0 },
      pagination: { type: [Boolean, Object], default: void 0 },
      parallax: { type: [Boolean, Object], default: void 0 },
      scrollbar: { type: [Boolean, Object], default: void 0 },
      thumbs: { type: Object, default: void 0 },
      virtual: { type: [Boolean, Object], default: void 0 },
      zoom: { type: [Boolean, Object], default: void 0 },
      grid: { type: [Object], default: void 0 },
      freeMode: { type: [Boolean, Object], default: void 0 },
      enabled: { type: Boolean, default: void 0 },
    },
    emits: [
      "_beforeBreakpoint",
      "_containerClasses",
      "_slideClass",
      "_slideClasses",
      "_swiper",
      "_freeModeNoMomentumRelease",
      "activeIndexChange",
      "afterInit",
      "autoplay",
      "autoplayStart",
      "autoplayStop",
      "autoplayPause",
      "autoplayResume",
      "beforeDestroy",
      "beforeInit",
      "beforeLoopFix",
      "beforeResize",
      "beforeSlideChangeStart",
      "beforeTransitionStart",
      "breakpoint",
      "changeDirection",
      "click",
      "disable",
      "doubleTap",
      "doubleClick",
      "destroy",
      "enable",
      "fromEdge",
      "hashChange",
      "hashSet",
      "imagesReady",
      "init",
      "keyPress",
      "lazyImageLoad",
      "lazyImageReady",
      "lock",
      "loopFix",
      "momentumBounce",
      "navigationHide",
      "navigationShow",
      "navigationPrev",
      "navigationNext",
      "observerUpdate",
      "orientationchange",
      "paginationHide",
      "paginationRender",
      "paginationShow",
      "paginationUpdate",
      "progress",
      "reachBeginning",
      "reachEnd",
      "realIndexChange",
      "resize",
      "scroll",
      "scrollbarDragEnd",
      "scrollbarDragMove",
      "scrollbarDragStart",
      "setTransition",
      "setTranslate",
      "slideChange",
      "slideChangeTransitionEnd",
      "slideChangeTransitionStart",
      "slideNextTransitionEnd",
      "slideNextTransitionStart",
      "slidePrevTransitionEnd",
      "slidePrevTransitionStart",
      "slideResetTransitionStart",
      "slideResetTransitionEnd",
      "sliderMove",
      "sliderFirstMove",
      "slidesLengthChange",
      "slidesGridLengthChange",
      "snapGridLengthChange",
      "snapIndexChange",
      "swiper",
      "tap",
      "toEdge",
      "touchEnd",
      "touchMove",
      "touchMoveOpposite",
      "touchStart",
      "transitionEnd",
      "transitionStart",
      "unlock",
      "update",
      "virtualUpdate",
      "zoomChange",
    ],
    setup(e, t) {
      let { slots: n, emit: r } = t;
      const { tag: s, wrapperTag: i } = e,
        o = ge("swiper"),
        a = ge(null),
        l = ge(!1),
        c = ge(!1),
        u = ge(null),
        d = ge(null),
        f = ge(null),
        h = { value: [] },
        m = { value: [] },
        v = ge(null),
        b = ge(null),
        _ = ge(null),
        p = ge(null),
        { params: g, passedParams: S } = Ql(e, !1);
      ui(n, h, m), (f.value = S), (m.value = h.value);
      const C = () => {
        ui(n, h, m), (l.value = !0);
      };
      if (
        ((g.onAny = function (O) {
          for (
            var E = arguments.length, N = new Array(E > 1 ? E - 1 : 0), k = 1;
            k < E;
            k++
          )
            N[k - 1] = arguments[k];
          r(O, ...N);
        }),
        Object.assign(g.on, {
          _beforeBreakpoint: C,
          _containerClasses(O, E) {
            o.value = E;
          },
        }),
        (d.value = new He(g)),
        (d.value.loopCreate = () => {}),
        (d.value.loopDestroy = () => {}),
        g.loop && (d.value.loopedSlides = od(h.value, g)),
        d.value.virtual && d.value.params.virtual.enabled)
      ) {
        d.value.virtual.slides = h.value;
        const O = {
          cache: !1,
          slides: h.value,
          renderExternal: (E) => {
            a.value = E;
          },
          renderExternalUpdate: !1,
        };
        on(d.value.params.virtual, O), on(d.value.originalParams.virtual, O);
      }
      As(() => {
        !c.value && d.value && (d.value.emitSlidesClasses(), (c.value = !0));
        const { passedParams: O } = Ql(e, !1),
          E = iw(O, f.value, h.value, m.value, (N) => N.props && N.props.key);
        (f.value = O),
          (E.length || l.value) &&
            d.value &&
            !d.value.destroyed &&
            ow({
              swiper: d.value,
              slides: h.value,
              passedParams: O,
              changedParams: E,
              nextEl: v.value,
              prevEl: b.value,
              scrollbarEl: p.value,
              paginationEl: _.value,
            }),
          (l.value = !1);
      }),
        cn("swiper", d),
        jt(a, () => {
          An(() => {
            aw(d.value);
          });
        }),
        fn(() => {
          !u.value ||
            (rw(
              {
                el: u.value,
                nextEl: v.value,
                prevEl: b.value,
                paginationEl: _.value,
                scrollbarEl: p.value,
                swiper: d.value,
              },
              g
            ),
            r("swiper", d.value));
        }),
        Rn(() => {
          d.value && !d.value.destroyed && d.value.destroy(!0, !1);
        });
      function P(O) {
        return g.virtual
          ? lw(d, O, a.value)
          : !g.loop || (d.value && d.value.destroyed)
          ? (O.forEach((E) => {
              E.props || (E.props = {}), (E.props.swiperRef = d);
            }),
            O)
          : sw(d, O, g);
      }
      return () => {
        const { slides: O, slots: E } = ui(n, h, m);
        return de(s, { ref: u, class: sd(o.value) }, [
          E["container-start"],
          de(i, { class: "swiper-wrapper" }, [
            E["wrapper-start"],
            P(O),
            E["wrapper-end"],
          ]),
          td(e) && [
            de("div", { ref: b, class: "swiper-button-prev" }),
            de("div", { ref: v, class: "swiper-button-next" }),
          ],
          rd(e) && de("div", { ref: p, class: "swiper-scrollbar" }),
          nd(e) && de("div", { ref: _, class: "swiper-pagination" }),
          E["container-end"],
        ]);
      };
    },
  },
  uw = {
    name: "SwiperSlide",
    props: {
      tag: { type: String, default: "div" },
      swiperRef: { type: Object, required: !1 },
      zoom: { type: Boolean, default: void 0 },
      virtualIndex: { type: [String, Number], default: void 0 },
    },
    setup(e, t) {
      let { slots: n } = t,
        r = !1;
      const { swiperRef: s } = e,
        i = ge(null),
        o = ge("swiper-slide");
      function a(c, u, d) {
        u === i.value && (o.value = d);
      }
      fn(() => {
        !s || !s.value || (s.value.on("_slideClass", a), (r = !0));
      }),
        Lc(() => {
          r || !s || !s.value || (s.value.on("_slideClass", a), (r = !0));
        }),
        As(() => {
          !i.value ||
            !s ||
            !s.value ||
            (s.value.destroyed &&
              o.value !== "swiper-slide" &&
              (o.value = "swiper-slide"));
        }),
        Rn(() => {
          !s || !s.value || s.value.off("_slideClass", a);
        });
      const l = Me(() => ({
        isActive:
          o.value.indexOf("swiper-slide-active") >= 0 ||
          o.value.indexOf("swiper-slide-duplicate-active") >= 0,
        isVisible: o.value.indexOf("swiper-slide-visible") >= 0,
        isDuplicate: o.value.indexOf("swiper-slide-duplicate") >= 0,
        isPrev:
          o.value.indexOf("swiper-slide-prev") >= 0 ||
          o.value.indexOf("swiper-slide-duplicate-prev") >= 0,
        isNext:
          o.value.indexOf("swiper-slide-next") >= 0 ||
          o.value.indexOf("swiper-slide-duplicate-next") >= 0,
      }));
      return (
        cn("swiperSlide", l),
        () =>
          de(
            e.tag,
            {
              class: sd(`${o.value}`),
              ref: i,
              "data-swiper-slide-index": e.virtualIndex,
            },
            e.zoom
              ? de(
                  "div",
                  {
                    class: "swiper-zoom-container",
                    "data-swiper-zoom":
                      typeof e.zoom == "number" ? e.zoom : void 0,
                  },
                  n.default && n.default(l.value)
                )
              : n.default && n.default(l.value)
          )
      );
    },
  },
  dw = zt({
    name: "Membership",
    components: { Swiper: cw, SwiperSlide: uw },
    data() {
      return {
        modules: [nw],
        readLink: {
          url: "https://interact.djurensratt.se/ge-medlemskap/raddadjuren",
          linkText: "L\xE4s mer",
        },
        options: { wrapAround: !1, pageDots: !0, prevNextButtons: !1 },
      };
    },
  }),
  Eo = Ft({
    name: "ClientOnly",
    inheritAttrs: !1,
    props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
    setup(e, { slots: t, attrs: n }) {
      const r = ge(!1);
      return (
        fn(() => {
          r.value = !0;
        }),
        (s) => {
          var l;
          if (r.value) return (l = t.default) == null ? void 0 : l.call(t);
          const i = t.fallback || t.placeholder;
          if (i) return i();
          const o = s.fallback || s.placeholder || "",
            a = s.fallbackTag || s.placeholderTag || "span";
          return _e(a, n, o);
        }
      );
    },
  }),
  di = new WeakMap();
function fw(e) {
  if (di.has(e)) return di.get(e);
  const t = { ...e };
  return (
    t.render
      ? (t.render = (n, ...r) => {
          var s;
          if (n.mounted$) {
            const i = e.render(n, ...r);
            return i.children === null || typeof i.children == "string"
              ? B(
                  i.type,
                  i.props,
                  i.children,
                  i.patchFlag,
                  i.dynamicProps,
                  i.shapeFlag
                )
              : de(i);
          } else return de("div", (s = n.$attrs) != null ? s : n._.attrs);
        })
      : t.template &&
        (t.template = `
      <template v-if="mounted$">${e.template}</template>
      <template v-else><div></div></template>
    `),
    (t.setup = (n, r) => {
      var i;
      const s = ge(!1);
      return (
        fn(() => {
          s.value = !0;
        }),
        Promise.resolve(
          ((i = e.setup) == null ? void 0 : i.call(e, n, r)) || {}
        ).then((o) =>
          typeof o != "function"
            ? { ...o, mounted$: s }
            : (...a) => {
                if (s.value) {
                  const l = o(...a);
                  return l.children === null || typeof l.children == "string"
                    ? B(
                        l.type,
                        l.props,
                        l.children,
                        l.patchFlag,
                        l.dynamicProps,
                        l.shapeFlag
                      )
                    : de(l);
                } else return de("div", r.attrs);
              }
        )
      );
    }),
    di.set(e, t),
    t
  );
}
const t1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Eo, createClientOnly: fw },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  pw =
    "" + new URL("membership-premier-2021.4a56e970.png", import.meta.url).href,
  hw = "" + new URL("membership-2.199a698a.png", import.meta.url).href,
  mw = "" + new URL("membership-3.af053989.jpg", import.meta.url).href,
  ar = (e) => (ir("data-v-986567ab"), (e = e()), or(), e),
  gw = { class: "membership" },
  yw = ar(() =>
    B("div", { class: "membership__image" }, [B("img", { src: pw })], -1)
  ),
  vw = ar(() =>
    B("div", { class: "membership__image" }, [B("img", { src: hw })], -1)
  ),
  bw = ar(() =>
    B(
      "div",
      { class: "membership__image membership__image--full" },
      [B("img", { src: mw })],
      -1
    )
  ),
  _w = { class: "membership__info" },
  ww = { class: "membership__info-text" },
  Sw = ar(() => B("h2", null, "Ge bort ett medlemskap", -1)),
  Cw = ar(() =>
    B("p", null, "5 tidningar per \xE5r + en v\xE4lkomstpresent \u{1F381}", -1)
  ),
  Ew = ar(() =>
    B("p", null, "Vi f\xE5r en starkare r\xF6st \u{1F42E}\u{1F4AA}", -1)
  );
function Tw(e, t, n, r, s, i) {
  const o = $r("swiper-slide"),
    a = $r("swiper"),
    l = Eo,
    c = Nr;
  return (
    ce(),
    _e("section", gw, [
      W(l, null, {
        default: xe(() => [
          W(
            a,
            {
              class: "membership__slider",
              modules: e.modules,
              "slides-per-view": 1,
              pagination: !0,
            },
            {
              default: xe(() => [
                W(o, null, { default: xe(() => [yw]), _: 1 }),
                W(o, null, { default: xe(() => [vw]), _: 1 }),
                W(o, null, { default: xe(() => [bw]), _: 1 }),
              ]),
              _: 1,
            },
            8,
            ["modules"]
          ),
        ]),
        _: 1,
      }),
      B("div", _w, [
        B("div", ww, [
          Sw,
          Cw,
          Ew,
          W(
            c,
            { class: "membership__action btn", href: e.readLink.url },
            { default: xe(() => [Dt(Tt(e.readLink.linkText), 1)]), _: 1 },
            8,
            ["href"]
          ),
        ]),
      ]),
    ])
  );
}
const ld = St(dw, [
    ["render", Tw],
    ["__scopeId", "data-v-986567ab"],
  ]),
  n1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ld },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  kw = zt({ name: "About" }),
  Zl = (e, t) => t.split(".").reduce((n, r) => n && n[r], e),
  ad = (e, t) =>
    Object.keys(e)
      .filter(t)
      .reduce((n, r) => Object.assign(n, { [r]: e[r] }), {}),
  r1 = (e) => (t) => Array.isArray(t) ? t.map((n) => e(n)) : e(t),
  cd = (e) => {
    const t = [],
      n = [];
    for (const r of e) ["$", "_"].includes(r) ? t.push(r) : n.push(r);
    return { prefixes: t, properties: n };
  },
  s1 =
    (e = []) =>
    (t) => {
      if (e.length === 0 || !t) return t;
      const { prefixes: n, properties: r } = cd(e);
      return ad(t, (s) => !r.includes(s) && !n.includes(s[0]));
    },
  i1 =
    (e = []) =>
    (t) => {
      if (e.length === 0 || !t) return t;
      const { prefixes: n, properties: r } = cd(e);
      return ad(t, (s) => r.includes(s) || n.includes(s[0]));
    },
  o1 = (e, t) => {
    const n = new Intl.Collator(t.$locale, {
        numeric: t.$numeric,
        caseFirst: t.$caseFirst,
        sensitivity: t.$sensitivity,
      }),
      r = Object.keys(t).filter((s) => !s.startsWith("$"));
    for (const s of r)
      e = e.sort((i, o) => {
        const a = [Zl(i, s), Zl(o, s)].map((l) => {
          if (l !== null) return l instanceof Date ? l.toISOString() : l;
        });
        return t[s] === -1 && a.reverse(), n.compare(a[0], a[1]);
      });
    return e;
  },
  l1 = (e, t = "Expected an array") => {
    if (!Array.isArray(e)) throw new TypeError(t);
  },
  Dn = (e) => (Array.isArray(e) ? e : e ? [e] : []),
  xw = ["sort", "where", "only", "without"],
  ea = (e, t) => {
    const n = { ...t };
    for (const i of xw) n[i] && (n[i] = Dn(n[i]));
    const r =
        (i, o = (a) => a) =>
        (...a) => ((n[i] = o(...a)), s),
      s = {
        params: () => n,
        only: r("only", Dn),
        without: r("without", Dn),
        where: r("where", (i) => [...Dn(n.where), i]),
        sort: r("sort", (i) => [...Dn(n.sort), ...Dn(i)]),
        limit: r("limit", (i) => parseInt(String(i), 10)),
        skip: r("skip", (i) => parseInt(String(i), 10)),
        find: () => e(s),
        findOne: () => ((n.first = !0), e(s)),
        findSurround: (i, o) => ((n.surround = { query: i, ...o }), e(s)),
        locale: (i) => s.where({ _locale: i }),
      };
    return s;
  };
function ud(e) {
  return JSON.stringify(e, Pw);
}
function Pw(e, t) {
  return t instanceof RegExp ? `--REGEX ${t.toString()}` : t;
}
const Ow = (e) => {
    let t = ud(e);
    return (
      (t = typeof Buffer < "u" ? Buffer.from(t).toString("base64") : btoa(t)),
      (t = t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")),
      (t.match(/.{1,100}/g) || []).join("/")
    );
  },
  Aw = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "li"];
function Ni(e, t) {
  return (
    e.type === t ||
    (typeof e.type == "object" && e.type.tag === t) ||
    e.tag === t
  );
}
function dd(e) {
  return Ni(e, "text") || typeof e.children == "string";
}
function fd(e) {
  return Array.isArray(e.children) || typeof e.children == "string"
    ? e.children
    : typeof e.children.default == "function"
    ? e.children.default()
    : [];
}
function Hi(e) {
  if (!e) return "";
  if (Array.isArray(e)) return e.map(Hi).join("");
  if (dd(e)) return e.children || e.value;
  const t = fd(e);
  return Array.isArray(t) ? t.map(Hi).join("") : "";
}
function To(e, t = ["p"]) {
  if (Array.isArray(e)) return e.flatMap((r) => To(r, t));
  let n = e;
  return (
    t.some((r) => r === "*" || Ni(e, r)) &&
      ((n = fd(e) || e),
      !Array.isArray(n) && Aw.some((r) => Ni(e, r)) && (n = [n])),
    n
  );
}
function pd(e, t = ["p"]) {
  return (
    (e = Array.isArray(e) ? e : [e]),
    t.length
      ? e
          .flatMap((n) => pd(To(n, [t[0]]), t.slice(1)))
          .filter((n) => !(dd(n) && Hi(n).trim() === ""))
      : e
  );
}
const ta = (e) => cu(e, hn().public.content.api.baseURL),
  a1 = () => ({ unwrap: To, flatUnwrap: pd }),
  c1 = () => {
    throw (
      (console.warn(
        "useContent is only accessible when you are using `documentDriven` mode."
      ),
      console.warn(
        "Learn more by visiting: https://content.nuxtjs.org/guide/writing/document-driven"
      ),
      new Error(
        "useContent is only accessible when you are using `documentDriven` mode."
      ))
    );
  },
  Rw = () => {
    const { experimental: e } = hn().content;
    if (e.clientDB) return !0;
    const t = lr().query;
    return Object.prototype.hasOwnProperty.call(t, "preview") && !t.preview
      ? !1
      : !!(t.preview || vu("previewToken").value);
  },
  na = (e) => async (t) => {
    var o, a, l;
    const { content: n } = hn().public;
    e &&
      (t.params().first && (t.params().where || []).length === 0
        ? t.where({ _path: go(e) })
        : t.where({
            _path: new RegExp(`^${e.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`),
          })),
      ((o = t.params().sort) != null && o.length) ||
        t.sort({ _file: 1, $numeric: !0 }),
      n.locales.length &&
        (((l =
          (a = t.params().where) == null ? void 0 : a.find((u) => u._locale)) !=
          null &&
          l._locale) ||
          t.locale(n.defaultLocale));
    const r = t.params(),
      s = n.experimental.stripQueryParameters
        ? ta(`/query/${`${_l(r)}.${n.integrity}`}/${Ow(r)}.json`)
        : ta(`/query/${_l(r)}.${n.integrity}.json`);
    if (Rw())
      return (
        await K(
          () => import("./client-db.c413bcec.js"),
          [],
          import.meta.url
        ).then((u) => u.useContentDatabase())
      ).fetch(t);
    const i = await $fetch(s, {
      method: "GET",
      responseType: "json",
      params: n.experimental.stripQueryParameters
        ? void 0
        : { _params: ud(r), previewToken: vu("previewToken").value },
    });
    if (typeof i == "string" && i.startsWith("<!DOCTYPE html>"))
      throw new Error("Not found");
    return i;
  };
function is(e, ...t) {
  return typeof e == "string" ? ea(na(au(Ht(e, ...t)))) : ea(na(), e);
}
const $w = zt({
    name: "About",
    props: {
      slug: { default: "", type: String },
      variant: { default: "", type: String },
    },
    setup(e) {
      const { data: t } = Er(`meta-block-${e.slug}`, async () =>
        e.slug ? await is(`block/${e.slug}`).findOne() : null
      );
      return { block: t };
    },
  }),
  Lw = /\d/,
  Mw = ["-", "_", "/", "."];
function Iw(e = "") {
  if (!Lw.test(e)) return e.toUpperCase() === e;
}
function jw(e, t) {
  const n = t != null ? t : Mw,
    r = [];
  if (!e || typeof e != "string") return r;
  let s = "",
    i,
    o;
  for (const a of e) {
    const l = n.includes(a);
    if (l === !0) {
      r.push(s), (s = ""), (i = void 0);
      continue;
    }
    const c = Iw(a);
    if (o === !1) {
      if (i === !1 && c === !0) {
        r.push(s), (s = a), (i = c);
        continue;
      }
      if (i === !0 && c === !1 && s.length > 1) {
        const u = s[s.length - 1];
        r.push(s.slice(0, Math.max(0, s.length - 1))), (s = u + a), (i = c);
        continue;
      }
    }
    (s += a), (i = c), (o = l);
  }
  return r.push(s), r;
}
function Dw(e) {
  return e ? e[0].toUpperCase() + e.slice(1) : "";
}
function Bw(e) {
  return e ? (Array.isArray(e) ? e : jw(e)).map((t) => Dw(t)).join("") : "";
}
class Fr {
  constructor(t, n, r) {
    (this.property = t), (this.normal = n), r && (this.space = r);
  }
}
Fr.prototype.property = {};
Fr.prototype.normal = {};
Fr.prototype.space = null;
function hd(e, t) {
  const n = {},
    r = {};
  let s = -1;
  for (; ++s < e.length; )
    Object.assign(n, e[s].property), Object.assign(r, e[s].normal);
  return new Fr(n, r, t);
}
function Fi(e) {
  return e.toLowerCase();
}
class Ct {
  constructor(t, n) {
    (this.property = t), (this.attribute = n);
  }
}
Ct.prototype.space = null;
Ct.prototype.boolean = !1;
Ct.prototype.booleanish = !1;
Ct.prototype.overloadedBoolean = !1;
Ct.prototype.number = !1;
Ct.prototype.commaSeparated = !1;
Ct.prototype.spaceSeparated = !1;
Ct.prototype.commaOrSpaceSeparated = !1;
Ct.prototype.mustUseProperty = !1;
Ct.prototype.defined = !1;
let Nw = 0;
const ne = $n(),
  ke = $n(),
  md = $n(),
  I = $n(),
  ve = $n(),
  qn = $n(),
  ht = $n();
function $n() {
  return 2 ** ++Nw;
}
const zi = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        boolean: ne,
        booleanish: ke,
        overloadedBoolean: md,
        number: I,
        spaceSeparated: ve,
        commaSeparated: qn,
        commaOrSpaceSeparated: ht,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  fi = Object.keys(zi);
class ko extends Ct {
  constructor(t, n, r, s) {
    let i = -1;
    if ((super(t, n), ra(this, "space", s), typeof r == "number"))
      for (; ++i < fi.length; ) {
        const o = fi[i];
        ra(this, fi[i], (r & zi[o]) === zi[o]);
      }
  }
}
ko.prototype.defined = !0;
function ra(e, t, n) {
  n && (e[t] = n);
}
const Hw = {}.hasOwnProperty;
function cr(e) {
  const t = {},
    n = {};
  let r;
  for (r in e.properties)
    if (Hw.call(e.properties, r)) {
      const s = e.properties[r],
        i = new ko(r, e.transform(e.attributes || {}, r), s, e.space);
      e.mustUseProperty &&
        e.mustUseProperty.includes(r) &&
        (i.mustUseProperty = !0),
        (t[r] = i),
        (n[Fi(r)] = r),
        (n[Fi(i.attribute)] = r);
    }
  return new Fr(t, n, e.space);
}
const gd = cr({
    space: "xlink",
    transform(e, t) {
      return "xlink:" + t.slice(5).toLowerCase();
    },
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
  }),
  yd = cr({
    space: "xml",
    transform(e, t) {
      return "xml:" + t.slice(3).toLowerCase();
    },
    properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
  });
function vd(e, t) {
  return t in e ? e[t] : t;
}
function bd(e, t) {
  return vd(e, t.toLowerCase());
}
const _d = cr({
    space: "xmlns",
    attributes: { xmlnsxlink: "xmlns:xlink" },
    transform: bd,
    properties: { xmlns: null, xmlnsXLink: null },
  }),
  wd = cr({
    transform(e, t) {
      return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
    },
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: ke,
      ariaAutoComplete: null,
      ariaBusy: ke,
      ariaChecked: ke,
      ariaColCount: I,
      ariaColIndex: I,
      ariaColSpan: I,
      ariaControls: ve,
      ariaCurrent: null,
      ariaDescribedBy: ve,
      ariaDetails: null,
      ariaDisabled: ke,
      ariaDropEffect: ve,
      ariaErrorMessage: null,
      ariaExpanded: ke,
      ariaFlowTo: ve,
      ariaGrabbed: ke,
      ariaHasPopup: null,
      ariaHidden: ke,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: ve,
      ariaLevel: I,
      ariaLive: null,
      ariaModal: ke,
      ariaMultiLine: ke,
      ariaMultiSelectable: ke,
      ariaOrientation: null,
      ariaOwns: ve,
      ariaPlaceholder: null,
      ariaPosInSet: I,
      ariaPressed: ke,
      ariaReadOnly: ke,
      ariaRelevant: null,
      ariaRequired: ke,
      ariaRoleDescription: ve,
      ariaRowCount: I,
      ariaRowIndex: I,
      ariaRowSpan: I,
      ariaSelected: ke,
      ariaSetSize: I,
      ariaSort: null,
      ariaValueMax: I,
      ariaValueMin: I,
      ariaValueNow: I,
      ariaValueText: null,
      role: null,
    },
  }),
  Fw = cr({
    space: "html",
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv",
    },
    transform: bd,
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      abbr: null,
      accept: qn,
      acceptCharset: ve,
      accessKey: ve,
      action: null,
      allow: null,
      allowFullScreen: ne,
      allowPaymentRequest: ne,
      allowUserMedia: ne,
      alt: null,
      as: null,
      async: ne,
      autoCapitalize: null,
      autoComplete: ve,
      autoFocus: ne,
      autoPlay: ne,
      capture: ne,
      charSet: null,
      checked: ne,
      cite: null,
      className: ve,
      cols: I,
      colSpan: null,
      content: null,
      contentEditable: ke,
      controls: ne,
      controlsList: ve,
      coords: I | qn,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: ne,
      defer: ne,
      dir: null,
      dirName: null,
      disabled: ne,
      download: md,
      draggable: ke,
      encType: null,
      enterKeyHint: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: ne,
      formTarget: null,
      headers: ve,
      height: I,
      hidden: ne,
      high: I,
      href: null,
      hrefLang: null,
      htmlFor: ve,
      httpEquiv: ve,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: ne,
      itemId: null,
      itemProp: ve,
      itemRef: ve,
      itemScope: ne,
      itemType: ve,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: ne,
      low: I,
      manifest: null,
      max: null,
      maxLength: I,
      media: null,
      method: null,
      min: null,
      minLength: I,
      multiple: ne,
      muted: ne,
      name: null,
      nonce: null,
      noModule: ne,
      noValidate: ne,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: ne,
      optimum: I,
      pattern: null,
      ping: ve,
      placeholder: null,
      playsInline: ne,
      poster: null,
      preload: null,
      readOnly: ne,
      referrerPolicy: null,
      rel: ve,
      required: ne,
      reversed: ne,
      rows: I,
      rowSpan: I,
      sandbox: ve,
      scope: null,
      scoped: ne,
      seamless: ne,
      selected: ne,
      shape: null,
      size: I,
      sizes: null,
      slot: null,
      span: I,
      spellCheck: ke,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: I,
      step: null,
      style: null,
      tabIndex: I,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: ne,
      useMap: null,
      value: ke,
      width: I,
      wrap: null,
      align: null,
      aLink: null,
      archive: ve,
      axis: null,
      background: null,
      bgColor: null,
      border: I,
      borderColor: null,
      bottomMargin: I,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: ne,
      declare: ne,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: I,
      leftMargin: I,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: I,
      marginWidth: I,
      noResize: ne,
      noHref: ne,
      noShade: ne,
      noWrap: ne,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: I,
      rules: null,
      scheme: null,
      scrolling: ke,
      standby: null,
      summary: null,
      text: null,
      topMargin: I,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: I,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: ne,
      disableRemotePlayback: ne,
      prefix: null,
      property: null,
      results: I,
      security: null,
      unselectable: null,
    },
  }),
  zw = cr({
    space: "svg",
    attributes: {
      accentHeight: "accent-height",
      alignmentBaseline: "alignment-baseline",
      arabicForm: "arabic-form",
      baselineShift: "baseline-shift",
      capHeight: "cap-height",
      className: "class",
      clipPath: "clip-path",
      clipRule: "clip-rule",
      colorInterpolation: "color-interpolation",
      colorInterpolationFilters: "color-interpolation-filters",
      colorProfile: "color-profile",
      colorRendering: "color-rendering",
      crossOrigin: "crossorigin",
      dataType: "datatype",
      dominantBaseline: "dominant-baseline",
      enableBackground: "enable-background",
      fillOpacity: "fill-opacity",
      fillRule: "fill-rule",
      floodColor: "flood-color",
      floodOpacity: "flood-opacity",
      fontFamily: "font-family",
      fontSize: "font-size",
      fontSizeAdjust: "font-size-adjust",
      fontStretch: "font-stretch",
      fontStyle: "font-style",
      fontVariant: "font-variant",
      fontWeight: "font-weight",
      glyphName: "glyph-name",
      glyphOrientationHorizontal: "glyph-orientation-horizontal",
      glyphOrientationVertical: "glyph-orientation-vertical",
      hrefLang: "hreflang",
      horizAdvX: "horiz-adv-x",
      horizOriginX: "horiz-origin-x",
      horizOriginY: "horiz-origin-y",
      imageRendering: "image-rendering",
      letterSpacing: "letter-spacing",
      lightingColor: "lighting-color",
      markerEnd: "marker-end",
      markerMid: "marker-mid",
      markerStart: "marker-start",
      navDown: "nav-down",
      navDownLeft: "nav-down-left",
      navDownRight: "nav-down-right",
      navLeft: "nav-left",
      navNext: "nav-next",
      navPrev: "nav-prev",
      navRight: "nav-right",
      navUp: "nav-up",
      navUpLeft: "nav-up-left",
      navUpRight: "nav-up-right",
      onAbort: "onabort",
      onActivate: "onactivate",
      onAfterPrint: "onafterprint",
      onBeforePrint: "onbeforeprint",
      onBegin: "onbegin",
      onCancel: "oncancel",
      onCanPlay: "oncanplay",
      onCanPlayThrough: "oncanplaythrough",
      onChange: "onchange",
      onClick: "onclick",
      onClose: "onclose",
      onCopy: "oncopy",
      onCueChange: "oncuechange",
      onCut: "oncut",
      onDblClick: "ondblclick",
      onDrag: "ondrag",
      onDragEnd: "ondragend",
      onDragEnter: "ondragenter",
      onDragExit: "ondragexit",
      onDragLeave: "ondragleave",
      onDragOver: "ondragover",
      onDragStart: "ondragstart",
      onDrop: "ondrop",
      onDurationChange: "ondurationchange",
      onEmptied: "onemptied",
      onEnd: "onend",
      onEnded: "onended",
      onError: "onerror",
      onFocus: "onfocus",
      onFocusIn: "onfocusin",
      onFocusOut: "onfocusout",
      onHashChange: "onhashchange",
      onInput: "oninput",
      onInvalid: "oninvalid",
      onKeyDown: "onkeydown",
      onKeyPress: "onkeypress",
      onKeyUp: "onkeyup",
      onLoad: "onload",
      onLoadedData: "onloadeddata",
      onLoadedMetadata: "onloadedmetadata",
      onLoadStart: "onloadstart",
      onMessage: "onmessage",
      onMouseDown: "onmousedown",
      onMouseEnter: "onmouseenter",
      onMouseLeave: "onmouseleave",
      onMouseMove: "onmousemove",
      onMouseOut: "onmouseout",
      onMouseOver: "onmouseover",
      onMouseUp: "onmouseup",
      onMouseWheel: "onmousewheel",
      onOffline: "onoffline",
      onOnline: "ononline",
      onPageHide: "onpagehide",
      onPageShow: "onpageshow",
      onPaste: "onpaste",
      onPause: "onpause",
      onPlay: "onplay",
      onPlaying: "onplaying",
      onPopState: "onpopstate",
      onProgress: "onprogress",
      onRateChange: "onratechange",
      onRepeat: "onrepeat",
      onReset: "onreset",
      onResize: "onresize",
      onScroll: "onscroll",
      onSeeked: "onseeked",
      onSeeking: "onseeking",
      onSelect: "onselect",
      onShow: "onshow",
      onStalled: "onstalled",
      onStorage: "onstorage",
      onSubmit: "onsubmit",
      onSuspend: "onsuspend",
      onTimeUpdate: "ontimeupdate",
      onToggle: "ontoggle",
      onUnload: "onunload",
      onVolumeChange: "onvolumechange",
      onWaiting: "onwaiting",
      onZoom: "onzoom",
      overlinePosition: "overline-position",
      overlineThickness: "overline-thickness",
      paintOrder: "paint-order",
      panose1: "panose-1",
      pointerEvents: "pointer-events",
      referrerPolicy: "referrerpolicy",
      renderingIntent: "rendering-intent",
      shapeRendering: "shape-rendering",
      stopColor: "stop-color",
      stopOpacity: "stop-opacity",
      strikethroughPosition: "strikethrough-position",
      strikethroughThickness: "strikethrough-thickness",
      strokeDashArray: "stroke-dasharray",
      strokeDashOffset: "stroke-dashoffset",
      strokeLineCap: "stroke-linecap",
      strokeLineJoin: "stroke-linejoin",
      strokeMiterLimit: "stroke-miterlimit",
      strokeOpacity: "stroke-opacity",
      strokeWidth: "stroke-width",
      tabIndex: "tabindex",
      textAnchor: "text-anchor",
      textDecoration: "text-decoration",
      textRendering: "text-rendering",
      typeOf: "typeof",
      underlinePosition: "underline-position",
      underlineThickness: "underline-thickness",
      unicodeBidi: "unicode-bidi",
      unicodeRange: "unicode-range",
      unitsPerEm: "units-per-em",
      vAlphabetic: "v-alphabetic",
      vHanging: "v-hanging",
      vIdeographic: "v-ideographic",
      vMathematical: "v-mathematical",
      vectorEffect: "vector-effect",
      vertAdvY: "vert-adv-y",
      vertOriginX: "vert-origin-x",
      vertOriginY: "vert-origin-y",
      wordSpacing: "word-spacing",
      writingMode: "writing-mode",
      xHeight: "x-height",
      playbackOrder: "playbackorder",
      timelineBegin: "timelinebegin",
    },
    transform: vd,
    properties: {
      about: ht,
      accentHeight: I,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: I,
      amplitude: I,
      arabicForm: null,
      ascent: I,
      attributeName: null,
      attributeType: null,
      azimuth: I,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: I,
      by: null,
      calcMode: null,
      capHeight: I,
      className: ve,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: I,
      diffuseConstant: I,
      direction: null,
      display: null,
      dur: null,
      divisor: I,
      dominantBaseline: null,
      download: ne,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: I,
      enableBackground: null,
      end: null,
      event: null,
      exponent: I,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: I,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: qn,
      g2: qn,
      glyphName: qn,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: I,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: I,
      horizOriginX: I,
      horizOriginY: I,
      id: null,
      ideographic: I,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: I,
      k: I,
      k1: I,
      k2: I,
      k3: I,
      k4: I,
      kernelMatrix: ht,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: I,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: I,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: I,
      overlineThickness: I,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: I,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: ve,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: I,
      pointsAtY: I,
      pointsAtZ: I,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: ht,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: ht,
      rev: ht,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: ht,
      requiredFeatures: ht,
      requiredFonts: ht,
      requiredFormats: ht,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: I,
      specularExponent: I,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: I,
      strikethroughThickness: I,
      string: null,
      stroke: null,
      strokeDashArray: ht,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: I,
      strokeOpacity: I,
      strokeWidth: null,
      style: null,
      surfaceScale: I,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: ht,
      tabIndex: I,
      tableValues: null,
      target: null,
      targetX: I,
      targetY: I,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: ht,
      to: null,
      transform: null,
      u1: null,
      u2: null,
      underlinePosition: I,
      underlineThickness: I,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: I,
      values: null,
      vAlphabetic: I,
      vMathematical: I,
      vectorEffect: null,
      vHanging: I,
      vIdeographic: I,
      version: null,
      vertAdvY: I,
      vertOriginX: I,
      vertOriginY: I,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: I,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
  }),
  Uw = /^data[-\w.:]+$/i,
  sa = /-[a-z]/g,
  Vw = /[A-Z]/g;
function qw(e, t) {
  const n = Fi(t);
  let r = t,
    s = Ct;
  if (n in e.normal) return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && Uw.test(t)) {
    if (t.charAt(4) === "-") {
      const i = t.slice(5).replace(sa, Kw);
      r = "data" + i.charAt(0).toUpperCase() + i.slice(1);
    } else {
      const i = t.slice(4);
      if (!sa.test(i)) {
        let o = i.replace(Vw, Ww);
        o.charAt(0) !== "-" && (o = "-" + o), (t = "data" + o);
      }
    }
    s = ko;
  }
  return new s(r, t);
}
function Ww(e) {
  return "-" + e.toLowerCase();
}
function Kw(e) {
  return e.charAt(1).toUpperCase();
}
const Gw = hd([yd, gd, _d, wd, Fw], "html");
hd([yd, gd, _d, wd, zw], "svg");
var Sd = { exports: {} };
const Yw = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
];
(function (e) {
  e.exports = Yw;
})(Sd);
const Cd = Vu(Sd.exports),
  Ui = "default",
  Ed = /^@|^v-on:/,
  Td = /^:|^v-bind:/,
  kd = /^v-model/,
  Xw = ["select", "textarea", "input"],
  xd = Ft({
    name: "ContentRendererMarkdown",
    props: {
      value: { type: Object, required: !0 },
      excerpt: { type: Boolean, default: !1 },
      tag: { type: String, default: "div" },
      components: { type: Object, default: () => ({}) },
    },
    async setup(e) {
      var n;
      const {
        content: { tags: t = {} },
      } = hn().public;
      return (
        await l0(e.value.body, {
          tags: {
            ...t,
            ...(((n = e.value) == null ? void 0 : n._components) || {}),
            ...e.components,
          },
        }),
        { tags: t }
      );
    },
    render(e) {
      var l;
      const { tags: t, tag: n, value: r, components: s } = e;
      if (!r) return null;
      let i = r.body || r;
      e.excerpt && r.excerpt && (i = r.excerpt);
      const o = {
        ...r,
        tags: { ...t, ...((r == null ? void 0 : r._components) || {}), ...s },
      };
      let a = o.component || n;
      return (
        typeof o.component == "object" && (a = o.component.name),
        (a = Od(a)),
        de(
          a,
          { ...((l = o.component) == null ? void 0 : l.props), ...this.$attrs },
          Pd(i, de, o, o)
        )
      );
    },
  });
function Jw(e, t, n, r = {}) {
  var l;
  if (e.type === "text") return t(Nt, e.value);
  const s = e.tag,
    i =
      (typeof ((l = e.props) == null ? void 0 : l.__ignoreMap) > "u" &&
        n.tags[s]) ||
      s;
  if (e.tag === "binding") return Qw(e, t, n, r);
  const o = Od(i);
  typeof o == "object" && (o.tag = s);
  const a = Zw(e, n);
  return t(o, a, Pd(e, t, n, { ...r, ...a }));
}
function Qw(e, t, n, r = {}) {
  var l;
  const s = { ...r, $route: () => lr(), $document: n, $doc: n },
    i = /\.|\[(\d+)\]/,
    a = (
      (l = e.props) == null ? void 0 : l.value.trim().split(i).filter(Boolean)
    ).reduce(
      (c, u) => (u in c ? (typeof c[u] == "function" ? c[u]() : c[u]) : {}),
      s
    );
  return t(Nt, a);
}
function Pd(e, t, n, r) {
  const i = (e.children || []).reduce(
    (a, l) => {
      if (!i0(l)) return a[Ui].push(l), a;
      const c = s0(l);
      return (a[c] = a[c] || []), a[c].push(...(l.children || [])), a;
    },
    { [Ui]: [] }
  );
  return Object.entries(i).reduce(
    (a, [l, c]) => (
      c.length &&
        (a[l] = () => {
          const u = c.map((d) => Jw(d, t, n, r));
          return o0(u);
        }),
      a
    ),
    {}
  );
}
function Zw(e, t) {
  const { tag: n = "", props: r = {} } = e;
  return Object.keys(r).reduce(function (s, i) {
    if (i === "__ignoreMap") return s;
    const o = r[i];
    if (kd.test(i) && !Xw.includes(n)) return e0(i, o, s, t);
    if (i === "v-bind") return t0(i, o, s, t);
    if (Ed.test(i)) return n0(i, o, s, t);
    if (Td.test(i)) return r0(i, o, s, t);
    const { attribute: a } = qw(Gw, i);
    return Array.isArray(o) && o.every((l) => typeof l == "string")
      ? ((s[a] = o.join(" ")), s)
      : ((s[a] = o), s);
  }, {});
}
function e0(e, t, n, r) {
  const s = (d) => +d,
    i = (d) => d.trim(),
    o = (d) => d,
    a = e
      .replace(kd, "")
      .split(".")
      .filter((d) => d)
      .reduce((d, f) => ((d[f] = !0), d), {}),
    l = "value",
    c = a.lazy ? "change" : "input",
    u = a.number ? s : a.trim ? i : o;
  return (
    (n[l] = Bs(t, r)), (n.on = n.on || {}), (n.on[c] = (d) => (r[t] = u(d))), n
  );
}
function t0(e, t, n, r) {
  const s = Bs(t, r);
  return (n = Object.assign(n, s)), n;
}
function n0(e, t, n, r) {
  return (
    (e = e.replace(Ed, "")), (n.on = n.on || {}), (n.on[e] = () => Bs(t, r)), n
  );
}
function r0(e, t, n, r) {
  return (e = e.replace(Td, "")), (n[e] = Bs(t, r)), n;
}
const Od = (e) => {
  if (!Cd.includes(e)) {
    const t = $r(Bw(e), !1);
    if (typeof t == "object") return t;
  }
  return e;
};
function Bs(e, t) {
  const n = e
    .split(".")
    .reduce((r, s) => (typeof r == "object" ? r[s] : void 0), t);
  return typeof n > "u" ? po(e) : n;
}
function s0(e) {
  let t = "";
  for (const n of Object.keys(e.props || {}))
    if (!(!n.startsWith("#") && !n.startsWith("v-slot:"))) {
      t = n.split(/[:#]/, 2)[1];
      break;
    }
  return t || Ui;
}
function i0(e) {
  return e.tag === "template";
}
function o0(e) {
  const t = [];
  for (const n of e) {
    const r = t[t.length - 1];
    n.type === Nt && (r == null ? void 0 : r.type) === Nt
      ? (r.children = r.children + n.children)
      : t.push(n);
  }
  return t;
}
async function l0(e, t) {
  const n = Array.from(new Set(r(e, t)));
  await Promise.all(
    n.map(async (s) => {
      const i = $r(s);
      (i == null ? void 0 : i.__asyncLoader) &&
        !i.__asyncResolved &&
        (await i.__asyncLoader());
    })
  );
  function r(s, i) {
    var l;
    if (s.type === "text" || s.tag === "binding") return [];
    const o =
        (typeof ((l = s.props) == null ? void 0 : l.__ignoreMap) > "u" &&
          i.tags[s.tag]) ||
        s.tag,
      a = [];
    s.type !== "root" && !Cd.includes(o) && a.push(o);
    for (const c of s.children || []) a.push(...r(c, i));
    return a;
  }
}
const a0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: xd },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  xo = Ft({
    name: "ContentRenderer",
    props: {
      value: { type: Object, required: !1, default: () => ({}) },
      excerpt: { type: Boolean, default: !1 },
      tag: { type: String, default: "div" },
    },
    setup(e) {
      jt(
        () => e.excerpt,
        (t) => {
          var n, r, s;
          t &&
            !((n = e.value) != null && n.excerpt) &&
            (console.warn(
              `No excerpt found for document content/${
                (r = e == null ? void 0 : e.value) == null ? void 0 : r._path
              }.${
                (s = e == null ? void 0 : e.value) == null
                  ? void 0
                  : s._extension
              }!`
            ),
            console.warn(
              "Make sure to use <!--more--> in your content if you want to use excerpt feature."
            ));
        },
        { immediate: !0 }
      );
    },
    render(e) {
      var i, o, a, l;
      const t = Op(),
        { value: n, excerpt: r, tag: s } = e;
      return !(
        (o = (i = n == null ? void 0 : n.body) == null ? void 0 : i.children) !=
          null && o.length
      ) && (t == null ? void 0 : t.empty)
        ? t.empty({ value: n, excerpt: r, tag: s, ...this.$attrs })
        : t != null && t.default
        ? t.default({ value: n, excerpt: r, tag: s, ...this.$attrs })
        : (n == null ? void 0 : n._type) === "markdown" &&
          ((l =
            (a = n == null ? void 0 : n.body) == null ? void 0 : a.children) ==
          null
            ? void 0
            : l.length)
        ? de(xd, { value: n, excerpt: r, tag: s, ...this.$attrs })
        : de(
            "pre",
            null,
            JSON.stringify(
              {
                message: "You should use slots with <ContentRenderer>",
                value: n,
                excerpt: r,
                tag: s,
              },
              null,
              2
            )
          );
    },
  }),
  c0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: xo },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  u0 = "" + new URL("logo-djurens-ratt.a9f4314e.svg", import.meta.url).href,
  d0 = (e) => (ir("data-v-d7e4a59e"), (e = e()), or(), e),
  f0 = { key: 0, href: "https://www.djurensratt.se" },
  p0 = d0(() => B("img", { class: "logo", src: u0 }, null, -1)),
  h0 = [p0],
  m0 = { key: 1, class: "pb-10 text-center" },
  g0 = ["href"];
function y0(e, t, n, r, s, i) {
  const o = xo;
  return e.block
    ? (ce(),
      _e(
        "div",
        {
          key: 0,
          class: Pn([
            "meta-box flex-1 bg-white rounded-lg p-10 flex flex-col",
            e.variant,
          ]),
        },
        [
          e.variant === "djurensratt" ? (ce(), _e("a", f0, h0)) : Nn("", !0),
          e.block.displayTitle
            ? (ce(), _e("h3", m0, Tt(e.block.title), 1))
            : Nn("", !0),
          W(o, { class: "mb-4 content text-base", value: e.block }, null, 8, [
            "value",
          ]),
          e.block.link
            ? (ce(),
              _e(
                "a",
                {
                  key: 2,
                  class: Pn([
                    "btn outlined mt-auto mb-0 self-center no-underline",
                    {
                      purple: e.variant === "adult",
                      blue: e.variant === "djurensratt",
                      green: e.variant === "rdk",
                    },
                  ]),
                  href: e.block.link.url,
                },
                Tt(e.block.link.linkText),
                11,
                g0
              ))
            : Nn("", !0),
        ],
        2
      ))
    : Nn("", !0);
}
const Ad = St($w, [
    ["render", y0],
    ["__scopeId", "data-v-d7e4a59e"],
  ]),
  u1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ad },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function v0(e, t, n, r, s, i) {
  const o = Ad;
  return (
    ce(),
    _e("div", null, [
      B("section", null, [
        W(o, { slug: "radda-djuren-klubben", variant: "rdk" }),
        W(o, { slug: "footer-djurens-ratt", variant: "djurensratt" }),
        W(o, { slug: "foralder-eller-pedagog", variant: "adult" }),
      ]),
    ])
  );
}
const Rd = St(kw, [
    ["render", v0],
    ["__scopeId", "data-v-c2f9b15c"],
  ]),
  d1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Rd },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  b0 = zt({
    name: "AppFooter",
    data() {
      return {
        visitlinks: [
          { label: "V\xE4lj Vego", url: "https://www.valjvego.se" },
          { label: "Djurens R\xE4tt", url: "https://www.djurensratt.se" },
        ],
        quicklinks: [
          {
            label: "G\xE5 med i klubben",
            url: "https://interact.djurensratt.se/ge-medlemskap/julklapp",
          },
          { label: "F\xF6r f\xF6r\xE4ldrar", url: "/vuxen-eller-pedagog" },
          { label: "Tidningen Klubbnytt", url: "/klubbnytt/" },
          {
            label: "Vanliga fr\xE5gor",
            url: "/vuxen-eller-pedagog/vanliga-fragor",
          },
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
      const { data: e } = Er(
          async () => is("block/footer-top").findOne(),
          "$raOELVPXjJ"
        ),
        { data: t } = Er(
          async () => is("block/footer-text").findOne(),
          "$u7UyWH2UUB"
        ),
        { data: n } = Er(
          async () => is("block/footer-image").findOne(),
          "$IwTD5indAh"
        );
      return { infoBlock: e, addressBlock: t, imgBlock: n };
    },
  });
function ia(e) {
  var r;
  const n = `; ${document.cookie}`.split(`; ${e}=`);
  return n.length !== 2 || (r = n.pop()) == null
    ? void 0
    : r.split(";").shift();
}
function oa(e, t, n, r, s) {
  const i = new Date();
  i.setDate(i.getDate() + (n || 365));
  const o = [`${e}=${t}`, `expires=${i.toUTCString()}`, `path=${s || "/"}`];
  r && o.push(`domain=${r}`), (document.cookie = o.join(";"));
}
const _0 = zt({
    name: "CookieConsentC",
    props: {
      transition: { type: String, default: "cookie-consent-transition" },
      message: {
        type: String,
        default:
          "Genom att acceptera cookies hj\xE4lper du R\xE4dda djuren-klubben att bli \xE4nnu b\xE4ttre i sitt arbete att hj\xE4lpa djuren.",
      },
      info: {
        type: String,
        default:
          "Vi anv\xE4nder cookies p\xE5 denna webbplats f\xF6r att f\xF6rb\xE4ttra din anv\xE4ndarupplevelse.",
      },
      linkLabel: { type: String, default: "L\xE4s mer h\xE4r." },
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
      this.show = !ia(this.cookieName) && !ia(this.rejectCookieName);
    },
    methods: {
      accept() {
        (this.show = !1),
          oa(
            this.cookieName,
            1,
            this.cookieExpiryDays,
            this.cookieDomain,
            this.cookiePath
          );
      },
      reject() {
        (this.show = !1),
          oa(
            this.rejectCookieName,
            2,
            this.cookieExpiryDays,
            this.cookieDomain,
            this.cookiePath
          );
      },
    },
  }),
  w0 = "" + new URL("cookie.a223e591.svg", import.meta.url).href,
  S0 = (e) => (ir("data-v-23d424c2"), (e = e()), or(), e),
  C0 = {
    key: 0,
    class: "cookie-consent flex-col flex justify-evenly flex-wrap z-5",
    role: "dialog",
  },
  E0 = S0(() =>
    B("img", { class: "w-10 h-10 self-center icon", src: w0 }, null, -1)
  ),
  T0 = { class: "flex flex-col py-6" },
  k0 = { class: "text-sm font-medium mb-2 cookie-consent-message" },
  x0 = { class: "cookie-consent-info text-xs" },
  P0 = { class: "cookie-consent-buttons flex flex-row" },
  O0 = { class: "cookie-consent-reject flex-nowrap mr-3", type: "button" },
  A0 = { class: "cookie-consent-compliance flex-nowrap", type: "button" };
function R0(e, t, n, r, s, i) {
  return (
    ce(),
    un(
      Ls,
      { name: e.transition },
      {
        default: xe(() => [
          e.show
            ? (ce(),
              _e("div", C0, [
                E0,
                B("section", T0, [
                  Sn(
                    e.$slots,
                    "message",
                    {},
                    () => [
                      B("span", k0, Tt(e.message), 1),
                      Sn(e.$slots, "info", {}, void 0, !0),
                      B("span", x0, [
                        Dt(Tt(e.info), 1),
                        Sn(
                          e.$slots,
                          "link",
                          {},
                          () => [
                            B(
                              "a",
                              Xc(
                                {
                                  class:
                                    "cookie-consent-link text-xs text-green-dark",
                                },
                                { href: e.href, target: e.target, rel: e.rel },
                                { role: "button" }
                              ),
                              "\xA0 " + Tt(e.linkLabel),
                              17
                            ),
                          ],
                          !0
                        ),
                      ]),
                    ],
                    !0
                  ),
                ]),
                B("section", P0, [
                  B(
                    "section",
                    {
                      onClick:
                        t[0] || (t[0] = (...o) => e.reject && e.reject(...o)),
                    },
                    [
                      Sn(
                        e.$slots,
                        "button",
                        {},
                        () => [B("button", O0, Tt(e.rejectLabel), 1)],
                        !0
                      ),
                    ]
                  ),
                  B(
                    "section",
                    {
                      onClick:
                        t[1] || (t[1] = (...o) => e.accept && e.accept(...o)),
                    },
                    [
                      Sn(
                        e.$slots,
                        "button",
                        {},
                        () => [B("button", A0, Tt(e.consentLabel), 1)],
                        !0
                      ),
                    ]
                  ),
                ]),
              ]))
            : Nn("", !0),
        ]),
        _: 3,
      },
      8,
      ["name"]
    )
  );
}
const $d = St(_0, [
    ["render", R0],
    ["__scopeId", "data-v-23d424c2"],
  ]),
  f1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: $d },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  $0 = "" + new URL("logo-rdk-new.b7b19d4c.png", import.meta.url).href,
  L0 = "" + new URL("90-konto.af7d9aa0.svg", import.meta.url).href,
  M0 = "" + new URL("tryggt-givande.1a0cf367.svg", import.meta.url).href,
  mn = (e) => (ir("data-v-f22af457"), (e = e()), or(), e),
  I0 = {
    class:
      "site-footer bg-green-dark text-white w-screen pb-12 px-10 text-base",
  },
  j0 = {
    class:
      "first-block flex flex-col justify-center mt-10 md_flex-row md_justify-around md_mx-0 md_my-20",
  },
  D0 = { class: "container__info" },
  B0 = mn(() =>
    B("img", { class: "icon h-14 md_h-16 mb-10", src: $0 }, null, -1)
  ),
  N0 = { class: "flex flex-col my-10" },
  H0 = { class: "text-center md_text-left" },
  F0 = mn(() =>
    B(
      "div",
      { class: "flex justify-center h-12 w-full gap-10 mb-10" },
      [
        B("img", { class: "icon", src: L0 }),
        B("img", { class: "icon", src: M0 }),
      ],
      -1
    )
  ),
  z0 = { class: "w-full" },
  U0 = mn(() =>
    B(
      "h3",
      { class: "font-bold mb-9" },
      "St\xF6d v\xE5rt arbete f\xF6r djuren",
      -1
    )
  ),
  V0 = mn(() =>
    B(
      "button",
      { class: "btn rounded bg-peach py-5 px-8 mb-10" },
      "G\xE5 med i klubben",
      -1
    )
  ),
  q0 = {
    class:
      "second-block w-full border-white border-solid border-r-0 border-l-0 border-t border-b mb-10 md_border-none md_absolute md_bottom-20 md_p-0 md_mb-20",
  },
  W0 = {
    class:
      "social flex justify-around py-10 md_justify-center md_my-10 md_-ml-10",
  },
  K0 = ["href"],
  G0 = ["src"],
  Y0 = {
    class:
      "third-block border-white border-solid border-b pb-10 md_border-white md_border-solid md_border-t md_border-b md_flex md_justify-evenly md_py-20",
  },
  X0 = { class: "container__first mb-10" },
  J0 = mn(() => B("h3", { class: "font-bold mb-4" }, "Kontakta oss", -1)),
  Q0 = { class: "container__middle mb-10" },
  Z0 = mn(() => B("h3", { class: "font-bold mb-4" }, "Snabbl\xE4nkar", -1)),
  eS = { class: "flex flex-col" },
  tS = { class: "container__last" },
  nS = mn(() => B("h3", { class: "font-bold mb-4" }, "Bes\xF6k g\xE4rna", -1)),
  rS = { class: "flex flex-col" },
  sS = mn(() =>
    B(
      "div",
      { class: "text-center my-10 md_mb-20 md_mt-60" },
      [
        B(
          "p",
          null,
          "Allt inneh\xE5ll \xA9 2023 R\xE4dda Djuren-klubben om inte annat anges."
        ),
      ],
      -1
    )
  );
function iS(e, t, n, r, s, i) {
  const o = xo,
    a = $d,
    l = Eo,
    c = Nr;
  return (
    ce(),
    _e("div", I0, [
      W(
        o,
        {
          class: "footer-image icon overflow-hidden -mx-10",
          value: e.imgBlock,
        },
        null,
        8,
        ["value"]
      ),
      W(l, null, { default: xe(() => [W(a)]), _: 1 }),
      B("div", j0, [
        B("div", D0, [
          B0,
          W(o, { class: "max-w-lg", value: e.infoBlock }, null, 8, ["value"]),
          B("ul", N0, [
            B("li", null, [
              W(
                c,
                {
                  class: "link p-0",
                  href: "https://www.raddadjuren.se/vuxen-eller-pedagog/om-radda-djuren-klubben",
                },
                { default: xe(() => [Dt("Om R\xE4dda Djuren-klubben")]), _: 1 }
              ),
            ]),
          ]),
        ]),
        B("div", H0, [
          F0,
          B("div", z0, [
            U0,
            W(
              c,
              {
                class: "link",
                href: "https://interact.djurensratt.se/ge-medlemskap/raddadjuren",
              },
              { default: xe(() => [V0]), _: 1 }
            ),
          ]),
        ]),
      ]),
      B("div", q0, [
        B("div", W0, [
          (ce(!0),
          _e(
            Le,
            null,
            qs(
              e.socialmedia,
              (u, d) => (
                ce(),
                _e(
                  "a",
                  { class: "social__link h-10 m-4 w-10", key: d, href: u.url },
                  [B("img", { class: "icon", src: u.img }, null, 8, G0)],
                  8,
                  K0
                )
              )
            ),
            128
          )),
        ]),
      ]),
      B("div", Y0, [
        B("div", X0, [
          J0,
          W(o, { class: "adress", value: e.addressBlock }, null, 8, ["value"]),
        ]),
        B("div", Q0, [
          Z0,
          B("ul", eS, [
            (ce(!0),
            _e(
              Le,
              null,
              qs(
                e.quicklinks,
                (u, d) => (
                  ce(),
                  _e("li", { key: d }, [
                    W(
                      c,
                      { class: "link", href: u.url },
                      { default: xe(() => [Dt(Tt(u.label), 1)]), _: 2 },
                      1032,
                      ["href"]
                    ),
                  ])
                )
              ),
              128
            )),
          ]),
        ]),
        B("div", tS, [
          nS,
          B("ul", rS, [
            (ce(!0),
            _e(
              Le,
              null,
              qs(
                e.visitlinks,
                (u, d) => (
                  ce(),
                  _e("li", { key: d }, [
                    W(
                      c,
                      { class: "link", href: u.url },
                      { default: xe(() => [Dt(Tt(u.label), 1)]), _: 2 },
                      1032,
                      ["href"]
                    ),
                  ])
                )
              ),
              128
            )),
          ]),
        ]),
      ]),
      sS,
    ])
  );
}
const Ld = St(b0, [
    ["render", iS],
    ["__scopeId", "data-v-f22af457"],
  ]),
  p1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ld },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  oS = zt({
    name: "mobile-menu",
    data() {
      return { isOpen: !1 };
    },
    computed: {
      label() {
        return this.isOpen ? "St\xE4ng meny" : "\xD6ppna meny";
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
        const t = document.scrollingElement || document.documentElement;
        t == null || t.classList.toggle("overflow-hidden", e);
      },
    },
  }),
  lS = zt({
    props: { searchTerm: { type: String, default: "" } },
    setup(e) {
      const t = ge(e.searchTerm),
        { path: n } = lr(),
        r = Br();
      return {
        searchTerm: t,
        submit: () => {
          n === "/sok"
            ? r.replace({ path: "sok", query: { sokord: t.value } })
            : r.push({ path: "/sok", query: { sokord: t.value } });
        },
      };
    },
  }),
  aS = (e) => (ir("data-v-41d27b79"), (e = e()), or(), e),
  cS = { class: "search-input" },
  uS = aS(() =>
    B(
      "path",
      {
        "fill-rule": "evenodd",
        d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
        "clip-rule": "evenodd",
      },
      null,
      -1
    )
  ),
  dS = [uS],
  fS = ["value"];
function pS(e, t, n, r, s, i) {
  return (
    ce(),
    _e("div", cS, [
      B(
        "form",
        {
          onSubmit:
            t[2] ||
            (t[2] = rh((...o) => e.submit && e.submit(...o), ["prevent"])),
        },
        [
          (ce(),
          _e(
            "svg",
            {
              class: "search w-6 h-6 search-icon",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              onClick: t[0] || (t[0] = (...o) => e.submit && e.submit(...o)),
            },
            dS
          )),
          B(
            "input",
            {
              type: "search",
              value: e.searchTerm,
              placeholder: "S\xF6k p\xE5 djur, fakta, vego eller tips ...",
              onInput:
                t[1] || (t[1] = (o) => (e.searchTerm = o.currentTarget.value)),
            },
            null,
            40,
            fS
          ),
        ],
        32
      ),
    ])
  );
}
const Md = St(lS, [
    ["render", pS],
    ["__scopeId", "data-v-41d27b79"],
  ]),
  h1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Md },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Po = (e) => (ir("data-v-c44424b5"), (e = e()), or(), e),
  hS = { class: "fixed inset-0 pointer-events-none" },
  mS = ["aria-label"],
  gS = { key: 0, class: "w-8 h-8", viewBox: "0 0 20 20", fill: "currentColor" },
  yS = Po(() =>
    B(
      "path",
      {
        "fill-rule": "evenodd",
        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
        "clip-rule": "evenodd",
      },
      null,
      -1
    )
  ),
  vS = [yS],
  bS = { key: 1, class: "w-8 h-8", viewBox: "0 0 20 20", fill: "currentColor" },
  _S = Po(() =>
    B(
      "path",
      {
        "fill-rule": "evenodd",
        d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
        "clip-rule": "evenodd",
      },
      null,
      -1
    )
  ),
  wS = [_S],
  SS = {
    key: 0,
    class:
      "py-8 w-full h-full bg-blue-turquoise pointer-events-auto overflow-y-auto overscroll-none z-10",
  },
  CS = { class: "container text-center" },
  ES = Po(() =>
    B(
      "h1",
      { class: "font-headline text-3xl lg_text-4xl text-white" },
      "R\xE4dda Djuren-klubben",
      -1
    )
  ),
  TS = { class: "text-white mt-navigation", role: "navigation" },
  kS = { class: "-m-1 flex flex-wrap" },
  xS = { class: "p-1 w-1o2" },
  PS = { class: "p-1 w-1o2" },
  OS = { class: "p-1 w-1o2" },
  AS = { class: "p-1 w-1o2" },
  RS = { class: "p-1 w-full" },
  $S = { class: "p-1 w-1o2" };
function LS(e, t, n, r, s, i) {
  const o = Md,
    a = So,
    l = Nr;
  return (
    ce(),
    _e("div", hS, [
      B(
        "button",
        {
          class:
            "mb-8 mr-4 w-16 h-16 absolute bottom-0 right-0 bg-blue-turquoise-dark bg-opacity-75 rounded-full text-white flex items-center justify-center pointer-events-auto p-0 z-10",
          "aria-label": e.label,
          onClick: t[0] || (t[0] = (c) => (e.isOpen = !e.isOpen)),
        },
        [e.isOpen ? (ce(), _e("svg", gS, vS)) : (ce(), _e("svg", bS, wS))],
        8,
        mS
      ),
      e.isOpen
        ? (ce(),
          _e("aside", SS, [
            B("div", CS, [
              ES,
              W(o),
              B("nav", TS, [
                B("ul", kS, [
                  B("li", xS, [
                    W(a, {
                      class: "bg-green min-h-navigation-item",
                      label: "Djurfakta",
                      href: "/",
                      icon: "/images/whale.svg",
                    }),
                  ]),
                  B("li", PS, [
                    W(a, {
                      class: "bg-pink min-h-navigation-item",
                      label: "L\xE4r dig mer",
                      href: "/lar-dig-mer",
                      icon: "/images/learn-more-chick.svg",
                    }),
                  ]),
                  B("li", OS, [
                    W(a, {
                      class: "bg-peach min-h-navigation-item",
                      label: "Hj\xE4lp djuren",
                      href: "/hjalp-djuren",
                      icon: "/images/help-animals-hands.svg",
                      iconVariant: "hands",
                    }),
                  ]),
                  B("li", AS, [
                    W(a, {
                      class: "bg-green-dark min-h-navigation-item",
                      label: "Vego",
                      href: "/vego",
                      icon: "/images/vego-recipe-cake.svg",
                    }),
                  ]),
                  B("li", RS, [
                    W(
                      l,
                      {
                        class: "p-4 block w-full bg-blue uppercase rounded-lg",
                        href: "https://interact.djurensratt.se/ge-medlemskap/raddadjuren",
                      },
                      {
                        default: xe(() => [Dt("G\xD6R SKILLNAD & BLI MEDLEM")]),
                        _: 1,
                      }
                    ),
                  ]),
                  B("li", $S, [
                    W(
                      l,
                      {
                        class:
                          "p-2 block w-full bg-purple-dark text-xs font-bold rounded-lg",
                        href: "/vuxen-eller-pedagog",
                      },
                      {
                        default: xe(() => [
                          Dt("Pedagog eller f\xF6r\xE4lder?"),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]))
        : Nn("", !0),
    ])
  );
}
const Id = St(oS, [
    ["render", LS],
    ["__scopeId", "data-v-c44424b5"],
  ]),
  m1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Id },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  MS = { class: "container mx-auto" };
function IS(e, t, n, r, s, i) {
  const o = Ku,
    a = Gu,
    l = ld,
    c = Rd,
    u = Ld,
    d = Id;
  return (
    ce(),
    _e("div", null, [
      W(o),
      B("div", MS, [W(a), W(l), W(c)]),
      W(u),
      W(d, { class: "sm_hidden" }),
    ])
  );
}
const jS = St(Pv, [["render", IS]]),
  la = {
    __name: "nuxt-root",
    setup(e) {
      const t = oe(() =>
          K(
            () => import("./error-component.33d2911d.js"),
            [],
            import.meta.url
          ).then((i) => i.default || i)
        ),
        n = Ee(),
        r = n.deferHydration();
      cn("_route", lr()),
        n.hooks.callHookWith((i) => i.map((o) => o()), "vue:setup");
      const s = Ms();
      return (
        Mc((i, o, a) => {
          n.hooks
            .callHook("vue:error", i, o, a)
            .catch((l) => console.error("[nuxt] Error in `vue:error` hook", l)),
            ym(i) && (i.fatal || i.unhandled) && nn(n, gr, [i]);
        }),
        (i, o) => (
          ce(),
          un(
            Tc,
            { onResolve: Ve(r) },
            {
              default: xe(() => [
                Ve(s)
                  ? (ce(),
                    un(Ve(t), { key: 0, error: Ve(s) }, null, 8, ["error"]))
                  : (ce(), un(Ve(jS), { key: 1 })),
              ]),
              _: 1,
            },
            8,
            ["onResolve"]
          )
        )
      );
    },
  };
globalThis.$fetch || (globalThis.$fetch = Kh.create({ baseURL: Yh() }));
let aa;
const DS = cm(xv);
(aa = async function () {
  var s;
  const n = Boolean((s = window.__NUXT__) == null ? void 0 : s.serverRendered)
      ? lh(la)
      : oh(la),
    r = om({ vueApp: n });
  try {
    await am(r, DS);
  } catch (i) {
    await r.callHook("app:error", i), (r.payload.error = r.payload.error || i);
  }
  try {
    await r.hooks.callHook("app:created", n),
      await r.hooks.callHook("app:beforeMount", n),
      n.mount("#" + Kg),
      await r.hooks.callHook("app:mounted", n),
      await An();
  } catch (i) {
    await r.callHook("app:error", i), (r.payload.error = r.payload.error || i);
  }
}),
  aa().catch((e) => {
    console.error("Error while mounting app:", e);
  });
export {
  fo as $,
  zt as A,
  KS as B,
  WS as C,
  Yv as D,
  wt as E,
  ge as F,
  Ee as G,
  Mc as H,
  _e as I,
  Rn as J,
  GS as K,
  _m as L,
  c1 as M,
  Is as N,
  W as O,
  Dt as P,
  Sn as Q,
  Nn as R,
  rh as S,
  Ls as T,
  $r as U,
  Le as V,
  qs as W,
  Tt as X,
  HS as Y,
  xe as Z,
  K as _,
  lr as a,
  FS as a0,
  bs as a1,
  fn as a2,
  cw as a3,
  uw as a4,
  a1 as a5,
  Yt as a6,
  St as a7,
  q as a8,
  tw as a9,
  JS as aA,
  QS as aB,
  ZS as aC,
  e1 as aD,
  t1 as aE,
  n1 as aF,
  a0 as aG,
  c0 as aH,
  u1 as aI,
  d1 as aJ,
  f1 as aK,
  p1 as aL,
  h1 as aM,
  m1 as aN,
  VS as aa,
  B as ab,
  ir as ac,
  or as ad,
  Pn as ae,
  Eo as af,
  Md as ag,
  Xc as ah,
  NS as ai,
  US as aj,
  Nr as ak,
  po as al,
  Zl as am,
  l1 as an,
  Dn as ao,
  o1 as ap,
  r1 as aq,
  s1 as ar,
  i1 as as,
  YS as at,
  Bw as au,
  ea as av,
  cu as aw,
  zS as ax,
  qS as ay,
  XS as az,
  An as b,
  un as c,
  oe as d,
  gu as e,
  Ft as f,
  wp as g,
  Op as h,
  Rh as i,
  de as j,
  xo as k,
  Me as l,
  Er as m,
  BS as n,
  ce as o,
  _l as p,
  is as q,
  hn as r,
  ta as s,
  kf as t,
  Ve as u,
  Ow as v,
  jt as w,
  Rw as x,
  ud as y,
  vu as z,
};
