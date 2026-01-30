const ce = globalThis, Pe = ce.ShadowRoot && (ce.ShadyCSS === void 0 || ce.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Oe = /* @__PURE__ */ Symbol(), ze = /* @__PURE__ */ new WeakMap();
let bt = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== Oe) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Pe && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = ze.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && ze.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const mt = (r) => new bt(typeof r == "string" ? r : r + "", void 0, Oe), Nt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((i, o, s) => i + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[s + 1], r[0]);
  return new bt(t, r, Oe);
}, Qt = (r, e) => {
  if (Pe) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), o = ce.litNonce;
    o !== void 0 && i.setAttribute("nonce", o), i.textContent = t.cssText, r.appendChild(i);
  }
}, De = Pe ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return mt(t);
})(r) : r;
const { is: Vt, defineProperty: jt, getOwnPropertyDescriptor: Bt, getOwnPropertyNames: Ut, getOwnPropertySymbols: zt, getPrototypeOf: Dt } = Object, be = globalThis, Fe = be.trustedTypes, Ft = Fe ? Fe.emptyScript : "", Ht = be.reactiveElementPolyfillSupport, J = (r, e) => r, he = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? Ft : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, e) {
  let t = r;
  switch (e) {
    case Boolean:
      t = r !== null;
      break;
    case Number:
      t = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(r);
      } catch {
        t = null;
      }
  }
  return t;
} }, Ie = (r, e) => !Vt(r, e), He = { attribute: !0, type: String, converter: he, reflect: !1, useDefault: !1, hasChanged: Ie };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), be.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let j = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ??= []).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = He) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = /* @__PURE__ */ Symbol(), o = this.getPropertyDescriptor(e, i, t);
      o !== void 0 && jt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: o, set: s } = Bt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(n) {
      this[t] = n;
    } };
    return { get: o, set(n) {
      const c = o?.call(this);
      s?.call(this, n), this.requestUpdate(e, c, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? He;
  }
  static _$Ei() {
    if (this.hasOwnProperty(J("elementProperties"))) return;
    const e = Dt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(J("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(J("properties"))) {
      const t = this.properties, i = [...Ut(t), ...zt(t)];
      for (const o of i) this.createProperty(o, t[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [i, o] of t) this.elementProperties.set(i, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, i] of this.elementProperties) {
      const o = this._$Eu(t, i);
      o !== void 0 && this._$Eh.set(o, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const o of i) t.unshift(De(o));
    } else e !== void 0 && t.push(De(e));
    return t;
  }
  static _$Eu(e, t) {
    const i = t.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
  }
  addController(e) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
  }
  removeController(e) {
    this._$EO?.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const i of t.keys()) this.hasOwnProperty(i) && (e.set(i, this[i]), delete this[i]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Qt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((e) => e.hostDisconnected?.());
  }
  attributeChangedCallback(e, t, i) {
    this._$AK(e, i);
  }
  _$ET(e, t) {
    const i = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, i);
    if (o !== void 0 && i.reflect === !0) {
      const s = (i.converter?.toAttribute !== void 0 ? i.converter : he).toAttribute(t, i.type);
      this._$Em = e, s == null ? this.removeAttribute(o) : this.setAttribute(o, s), this._$Em = null;
    }
  }
  _$AK(e, t) {
    const i = this.constructor, o = i._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const s = i.getPropertyOptions(o), n = typeof s.converter == "function" ? { fromAttribute: s.converter } : s.converter?.fromAttribute !== void 0 ? s.converter : he;
      this._$Em = o;
      const c = n.fromAttribute(t, s.type);
      this[o] = c ?? this._$Ej?.get(o) ?? c, this._$Em = null;
    }
  }
  requestUpdate(e, t, i, o = !1, s) {
    if (e !== void 0) {
      const n = this.constructor;
      if (o === !1 && (s = this[e]), i ??= n.getPropertyOptions(e), !((i.hasChanged ?? Ie)(s, t) || i.useDefault && i.reflect && s === this._$Ej?.get(e) && !this.hasAttribute(n._$Eu(e, i)))) return;
      this.C(e, t, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: i, reflect: o, wrapped: s }, n) {
    i && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, n ?? t ?? this[e]), s !== !0 || n !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (t = void 0), this._$AL.set(e, t)), o === !0 && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [o, s] of this._$Ep) this[o] = s;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [o, s] of i) {
        const { wrapped: n } = s, c = this[o];
        n !== !0 || this._$AL.has(o) || c === void 0 || this.C(o, void 0, s, c);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach((i) => i.hostUpdate?.()), this.update(t)) : this._$EM();
    } catch (i) {
      throw e = !1, this._$EM(), i;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    this._$EO?.forEach((t) => t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Eq &&= this._$Eq.forEach((t) => this._$ET(t, this[t])), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
j.elementStyles = [], j.shadowRootOptions = { mode: "open" }, j[J("elementProperties")] = /* @__PURE__ */ new Map(), j[J("finalized")] = /* @__PURE__ */ new Map(), Ht?.({ ReactiveElement: j }), (be.reactiveElementVersions ??= []).push("2.1.2");
const Le = globalThis, We = (r) => r, ue = Le.trustedTypes, Ke = ue ? ue.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, yt = "$lit$", A = `lit$${Math.random().toFixed(9).slice(2)}$`, vt = "?" + A, Wt = `<${vt}>`, I = document, Y = () => I.createComment(""), Z = (r) => r === null || typeof r != "object" && typeof r != "function", Ne = Array.isArray, Kt = (r) => Ne(r) || typeof r?.[Symbol.iterator] == "function", ke = `[ 	
\f\r]`, W = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Je = /-->/g, Ge = />/g, q = RegExp(`>|${ke}(?:([^\\s"'>=/]+)(${ke}*=${ke}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Xe = /'/g, Ye = /"/g, wt = /^(?:script|style|textarea|title)$/i, Jt = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), _ = Jt(1), z = /* @__PURE__ */ Symbol.for("lit-noChange"), m = /* @__PURE__ */ Symbol.for("lit-nothing"), Ze = /* @__PURE__ */ new WeakMap(), P = I.createTreeWalker(I, 129);
function kt(r, e) {
  if (!Ne(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ke !== void 0 ? Ke.createHTML(e) : e;
}
const Gt = (r, e) => {
  const t = r.length - 1, i = [];
  let o, s = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", n = W;
  for (let c = 0; c < t; c++) {
    const a = r[c];
    let l, d, u = -1, f = 0;
    for (; f < a.length && (n.lastIndex = f, d = n.exec(a), d !== null); ) f = n.lastIndex, n === W ? d[1] === "!--" ? n = Je : d[1] !== void 0 ? n = Ge : d[2] !== void 0 ? (wt.test(d[2]) && (o = RegExp("</" + d[2], "g")), n = q) : d[3] !== void 0 && (n = q) : n === q ? d[0] === ">" ? (n = o ?? W, u = -1) : d[1] === void 0 ? u = -2 : (u = n.lastIndex - d[2].length, l = d[1], n = d[3] === void 0 ? q : d[3] === '"' ? Ye : Xe) : n === Ye || n === Xe ? n = q : n === Je || n === Ge ? n = W : (n = q, o = void 0);
    const h = n === q && r[c + 1].startsWith("/>") ? " " : "";
    s += n === W ? a + Wt : u >= 0 ? (i.push(l), a.slice(0, u) + yt + a.slice(u) + A + h) : a + A + (u === -2 ? c : h);
  }
  return [kt(r, s + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class ee {
  constructor({ strings: e, _$litType$: t }, i) {
    let o;
    this.parts = [];
    let s = 0, n = 0;
    const c = e.length - 1, a = this.parts, [l, d] = Gt(e, t);
    if (this.el = ee.createElement(l, i), P.currentNode = this.el.content, t === 2 || t === 3) {
      const u = this.el.content.firstChild;
      u.replaceWith(...u.childNodes);
    }
    for (; (o = P.nextNode()) !== null && a.length < c; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const u of o.getAttributeNames()) if (u.endsWith(yt)) {
          const f = d[n++], h = o.getAttribute(u).split(A), p = /([.?@])?(.*)/.exec(f);
          a.push({ type: 1, index: s, name: p[2], strings: h, ctor: p[1] === "." ? Yt : p[1] === "?" ? Zt : p[1] === "@" ? er : me }), o.removeAttribute(u);
        } else u.startsWith(A) && (a.push({ type: 6, index: s }), o.removeAttribute(u));
        if (wt.test(o.tagName)) {
          const u = o.textContent.split(A), f = u.length - 1;
          if (f > 0) {
            o.textContent = ue ? ue.emptyScript : "";
            for (let h = 0; h < f; h++) o.append(u[h], Y()), P.nextNode(), a.push({ type: 2, index: ++s });
            o.append(u[f], Y());
          }
        }
      } else if (o.nodeType === 8) if (o.data === vt) a.push({ type: 2, index: s });
      else {
        let u = -1;
        for (; (u = o.data.indexOf(A, u + 1)) !== -1; ) a.push({ type: 7, index: s }), u += A.length - 1;
      }
      s++;
    }
  }
  static createElement(e, t) {
    const i = I.createElement("template");
    return i.innerHTML = e, i;
  }
}
function D(r, e, t = r, i) {
  if (e === z) return e;
  let o = i !== void 0 ? t._$Co?.[i] : t._$Cl;
  const s = Z(e) ? void 0 : e._$litDirective$;
  return o?.constructor !== s && (o?._$AO?.(!1), s === void 0 ? o = void 0 : (o = new s(r), o._$AT(r, t, i)), i !== void 0 ? (t._$Co ??= [])[i] = o : t._$Cl = o), o !== void 0 && (e = D(r, o._$AS(r, e.values), o, i)), e;
}
class Xt {
  constructor(e, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: t }, parts: i } = this._$AD, o = (e?.creationScope ?? I).importNode(t, !0);
    P.currentNode = o;
    let s = P.nextNode(), n = 0, c = 0, a = i[0];
    for (; a !== void 0; ) {
      if (n === a.index) {
        let l;
        a.type === 2 ? l = new se(s, s.nextSibling, this, e) : a.type === 1 ? l = new a.ctor(s, a.name, a.strings, this, e) : a.type === 6 && (l = new tr(s, this, e)), this._$AV.push(l), a = i[++c];
      }
      n !== a?.index && (s = P.nextNode(), n++);
    }
    return P.currentNode = I, o;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}
class se {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(e, t, i, o) {
    this.type = 2, this._$AH = m, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = o, this._$Cv = o?.isConnected ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = D(this, e, t), Z(e) ? e === m || e == null || e === "" ? (this._$AH !== m && this._$AR(), this._$AH = m) : e !== this._$AH && e !== z && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Kt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== m && Z(this._$AH) ? this._$AA.nextSibling.data = e : this.T(I.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    const { values: t, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = ee.createElement(kt(i.h, i.h[0]), this.options)), i);
    if (this._$AH?._$AD === o) this._$AH.p(t);
    else {
      const s = new Xt(o, this), n = s.u(this.options);
      s.p(t), this.T(n), this._$AH = s;
    }
  }
  _$AC(e) {
    let t = Ze.get(e.strings);
    return t === void 0 && Ze.set(e.strings, t = new ee(e)), t;
  }
  k(e) {
    Ne(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, o = 0;
    for (const s of e) o === t.length ? t.push(i = new se(this.O(Y()), this.O(Y()), this, this.options)) : i = t[o], i._$AI(s), o++;
    o < t.length && (this._$AR(i && i._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    for (this._$AP?.(!1, !0, t); e !== this._$AB; ) {
      const i = We(e).nextSibling;
      We(e).remove(), e = i;
    }
  }
  setConnected(e) {
    this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
  }
}
class me {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, i, o, s) {
    this.type = 1, this._$AH = m, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = s, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = m;
  }
  _$AI(e, t = this, i, o) {
    const s = this.strings;
    let n = !1;
    if (s === void 0) e = D(this, e, t, 0), n = !Z(e) || e !== this._$AH && e !== z, n && (this._$AH = e);
    else {
      const c = e;
      let a, l;
      for (e = s[0], a = 0; a < s.length - 1; a++) l = D(this, c[i + a], t, a), l === z && (l = this._$AH[a]), n ||= !Z(l) || l !== this._$AH[a], l === m ? e = m : e !== m && (e += (l ?? "") + s[a + 1]), this._$AH[a] = l;
    }
    n && !o && this.j(e);
  }
  j(e) {
    e === m ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Yt extends me {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === m ? void 0 : e;
  }
}
class Zt extends me {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== m);
  }
}
class er extends me {
  constructor(e, t, i, o, s) {
    super(e, t, i, o, s), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = D(this, e, t, 0) ?? m) === z) return;
    const i = this._$AH, o = e === m && i !== m || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, s = e !== m && (i === m || o);
    o && this.element.removeEventListener(this.name, this, i), s && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class tr {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    D(this, e);
  }
}
const rr = Le.litHtmlPolyfillSupport;
rr?.(ee, se), (Le.litHtmlVersions ??= []).push("3.3.2");
const ir = (r, e, t) => {
  const i = t?.renderBefore ?? e;
  let o = i._$litPart$;
  if (o === void 0) {
    const s = t?.renderBefore ?? null;
    i._$litPart$ = o = new se(e.insertBefore(Y(), s), s, void 0, t ?? {});
  }
  return o._$AI(r), o;
};
const Qe = globalThis;
let R = class extends j {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const e = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= e.firstChild, e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = ir(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return z;
  }
};
R._$litElement$ = !0, R.finalized = !0, Qe.litElementHydrateSupport?.({ LitElement: R });
const or = Qe.litElementPolyfillSupport;
or?.({ LitElement: R });
(Qe.litElementVersions ??= []).push("4.2.2");
const ye = (r) => (e, t) => {
  t !== void 0 ? t.addInitializer(() => {
    customElements.define(r, e);
  }) : customElements.define(r, e);
};
const sr = { attribute: !0, type: String, converter: he, reflect: !1, hasChanged: Ie }, nr = (r = sr, e, t) => {
  const { kind: i, metadata: o } = t;
  let s = globalThis.litPropertyMetadata.get(o);
  if (s === void 0 && globalThis.litPropertyMetadata.set(o, s = /* @__PURE__ */ new Map()), i === "setter" && ((r = Object.create(r)).wrapped = !0), s.set(t.name, r), i === "accessor") {
    const { name: n } = t;
    return { set(c) {
      const a = e.get.call(this);
      e.set.call(this, c), this.requestUpdate(n, a, r, !0, c);
    }, init(c) {
      return c !== void 0 && this.C(n, void 0, r, c), c;
    } };
  }
  if (i === "setter") {
    const { name: n } = t;
    return function(c) {
      const a = this[n];
      e.call(this, c), this.requestUpdate(n, a, r, !0, c);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function E(r) {
  return (e, t) => typeof t == "object" ? nr(r, e, t) : ((i, o, s) => {
    const n = o.hasOwnProperty(s);
    return o.constructor.createProperty(s, i), n ? Object.getOwnPropertyDescriptor(o, s) : void 0;
  })(r, e, t);
}
function Ve(r) {
  return E({ ...r, state: !0, attribute: !1 });
}
const ar = (r, e, t) => (t.configurable = !0, t.enumerable = !0, Reflect.decorate && typeof e != "object" && Object.defineProperty(r, e, t), t);
function xt(r, e) {
  return (t, i, o) => {
    const s = (n) => n.renderRoot?.querySelector(r) ?? null;
    return ar(t, i, { get() {
      return s(this);
    } });
  };
}
const et = "1.31.6";
var S = [], w = [], cr = Uint8Array, xe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Q = 0, lr = xe.length; Q < lr; ++Q)
  S[Q] = xe[Q], w[xe.charCodeAt(Q)] = Q;
w[45] = 62;
w[95] = 63;
function hr(r) {
  var e = r.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var t = r.indexOf("=");
  t === -1 && (t = e);
  var i = t === e ? 0 : 4 - t % 4;
  return [t, i];
}
function ur(r, e, t) {
  return (e + t) * 3 / 4 - t;
}
function te(r) {
  var e, t = hr(r), i = t[0], o = t[1], s = new cr(ur(r, i, o)), n = 0, c = o > 0 ? i - 4 : i, a;
  for (a = 0; a < c; a += 4)
    e = w[r.charCodeAt(a)] << 18 | w[r.charCodeAt(a + 1)] << 12 | w[r.charCodeAt(a + 2)] << 6 | w[r.charCodeAt(a + 3)], s[n++] = e >> 16 & 255, s[n++] = e >> 8 & 255, s[n++] = e & 255;
  return o === 2 && (e = w[r.charCodeAt(a)] << 2 | w[r.charCodeAt(a + 1)] >> 4, s[n++] = e & 255), o === 1 && (e = w[r.charCodeAt(a)] << 10 | w[r.charCodeAt(a + 1)] << 4 | w[r.charCodeAt(a + 2)] >> 2, s[n++] = e >> 8 & 255, s[n++] = e & 255), s;
}
function dr(r) {
  return S[r >> 18 & 63] + S[r >> 12 & 63] + S[r >> 6 & 63] + S[r & 63];
}
function pr(r, e, t) {
  for (var i, o = [], s = e; s < t; s += 3)
    i = (r[s] << 16 & 16711680) + (r[s + 1] << 8 & 65280) + (r[s + 2] & 255), o.push(dr(i));
  return o.join("");
}
function re(r) {
  for (var e, t = r.length, i = t % 3, o = [], s = 16383, n = 0, c = t - i; n < c; n += s)
    o.push(
      pr(
        r,
        n,
        n + s > c ? c : n + s
      )
    );
  return i === 1 ? (e = r[t - 1], o.push(S[e >> 2] + S[e << 4 & 63] + "==")) : i === 2 && (e = (r[t - 2] << 8) + r[t - 1], o.push(
    S[e >> 10] + S[e >> 4 & 63] + S[e << 2 & 63] + "="
  )), o.join("");
}
function T(r) {
  if (r === void 0)
    return {};
  if (!Ct(r))
    throw new Error(
      `The arguments to a Convex function must be an object. Received: ${r}`
    );
  return r;
}
function St(r) {
  if (typeof r > "u")
    throw new Error(
      "Client created with undefined deployment address. If you used an environment variable, check that it's set."
    );
  if (typeof r != "string")
    throw new Error(
      `Invalid deployment address: found ${r}".`
    );
  if (!(r.startsWith("http:") || r.startsWith("https:")))
    throw new Error(
      `Invalid deployment address: Must start with "https://" or "http://". Found "${r}".`
    );
  try {
    new URL(r);
  } catch {
    throw new Error(
      `Invalid deployment address: "${r}" is not a valid URL. If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`
    );
  }
  if (r.endsWith(".convex.site"))
    throw new Error(
      `Invalid deployment address: "${r}" ends with .convex.site, which is used for HTTP Actions. Convex deployment URLs typically end with .convex.cloud? If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`
    );
}
function Ct(r) {
  const e = typeof r == "object", t = Object.getPrototypeOf(r), i = t === null || t === Object.prototype || // Objects generated from other contexts (e.g. across Node.js `vm` modules) will not satisfy the previous
  // conditions but are still simple objects.
  t?.constructor?.name === "Object";
  return e && i;
}
const _t = !0, F = BigInt("-9223372036854775808"), je = BigInt("9223372036854775807"), Ae = BigInt("0"), fr = BigInt("8"), gr = BigInt("256");
function $t(r) {
  return Number.isNaN(r) || !Number.isFinite(r) || Object.is(r, -0);
}
function br(r) {
  r < Ae && (r -= F + F);
  let e = r.toString(16);
  e.length % 2 === 1 && (e = "0" + e);
  const t = new Uint8Array(new ArrayBuffer(8));
  let i = 0;
  for (const o of e.match(/.{2}/g).reverse())
    t.set([parseInt(o, 16)], i++), r >>= fr;
  return re(t);
}
function mr(r) {
  const e = te(r);
  if (e.byteLength !== 8)
    throw new Error(
      `Received ${e.byteLength} bytes, expected 8 for $integer`
    );
  let t = Ae, i = Ae;
  for (const o of e)
    t += BigInt(o) * gr ** i, i++;
  return t > je && (t += F + F), t;
}
function yr(r) {
  if (r < F || je < r)
    throw new Error(
      `BigInt ${r} does not fit into a 64-bit signed integer.`
    );
  const e = new ArrayBuffer(8);
  return new DataView(e).setBigInt64(0, r, !0), re(new Uint8Array(e));
}
function vr(r) {
  const e = te(r);
  if (e.byteLength !== 8)
    throw new Error(
      `Received ${e.byteLength} bytes, expected 8 for $integer`
    );
  return new DataView(e.buffer).getBigInt64(0, !0);
}
const wr = DataView.prototype.setBigInt64 ? yr : br, kr = DataView.prototype.getBigInt64 ? vr : mr, tt = 1024;
function Tt(r) {
  if (r.length > tt)
    throw new Error(
      `Field name ${r} exceeds maximum field name length ${tt}.`
    );
  if (r.startsWith("$"))
    throw new Error(`Field name ${r} starts with a '$', which is reserved.`);
  for (let e = 0; e < r.length; e += 1) {
    const t = r.charCodeAt(e);
    if (t < 32 || t >= 127)
      throw new Error(
        `Field name ${r} has invalid character '${r[e]}': Field names can only contain non-control ASCII characters`
      );
  }
}
function H(r) {
  if (r === null || typeof r == "boolean" || typeof r == "number" || typeof r == "string")
    return r;
  if (Array.isArray(r))
    return r.map((i) => H(i));
  if (typeof r != "object")
    throw new Error(`Unexpected type of ${r}`);
  const e = Object.entries(r);
  if (e.length === 1) {
    const i = e[0][0];
    if (i === "$bytes") {
      if (typeof r.$bytes != "string")
        throw new Error(`Malformed $bytes field on ${r}`);
      return te(r.$bytes).buffer;
    }
    if (i === "$integer") {
      if (typeof r.$integer != "string")
        throw new Error(`Malformed $integer field on ${r}`);
      return kr(r.$integer);
    }
    if (i === "$float") {
      if (typeof r.$float != "string")
        throw new Error(`Malformed $float field on ${r}`);
      const o = te(r.$float);
      if (o.byteLength !== 8)
        throw new Error(
          `Received ${o.byteLength} bytes, expected 8 for $float`
        );
      const n = new DataView(o.buffer).getFloat64(0, _t);
      if (!$t(n))
        throw new Error(`Float ${n} should be encoded as a number`);
      return n;
    }
    if (i === "$set")
      throw new Error(
        "Received a Set which is no longer supported as a Convex type."
      );
    if (i === "$map")
      throw new Error(
        "Received a Map which is no longer supported as a Convex type."
      );
  }
  const t = {};
  for (const [i, o] of Object.entries(r))
    Tt(i), t[i] = H(o);
  return t;
}
const rt = 16384;
function G(r) {
  const e = JSON.stringify(r, (t, i) => i === void 0 ? "undefined" : typeof i == "bigint" ? `${i.toString()}n` : i);
  if (e.length > rt) {
    const t = "[...truncated]";
    let i = rt - t.length;
    const o = e.codePointAt(i - 1);
    return o !== void 0 && o > 65535 && (i -= 1), e.substring(0, i) + t;
  }
  return e;
}
function Re(r, e, t, i) {
  if (r === void 0) {
    const n = t && ` (present at path ${t} in original object ${G(
      e
    )})`;
    throw new Error(
      `undefined is not a valid Convex value${n}. To learn about Convex's supported types, see https://docs.convex.dev/using/types.`
    );
  }
  if (r === null)
    return r;
  if (typeof r == "bigint") {
    if (r < F || je < r)
      throw new Error(
        `BigInt ${r} does not fit into a 64-bit signed integer.`
      );
    return { $integer: wr(r) };
  }
  if (typeof r == "number")
    if ($t(r)) {
      const n = new ArrayBuffer(8);
      return new DataView(n).setFloat64(0, r, _t), { $float: re(new Uint8Array(n)) };
    } else
      return r;
  if (typeof r == "boolean" || typeof r == "string")
    return r;
  if (r instanceof ArrayBuffer)
    return { $bytes: re(new Uint8Array(r)) };
  if (Array.isArray(r))
    return r.map(
      (n, c) => Re(n, e, t + `[${c}]`)
    );
  if (r instanceof Set)
    throw new Error(
      Se(t, "Set", [...r], e)
    );
  if (r instanceof Map)
    throw new Error(
      Se(t, "Map", [...r], e)
    );
  if (!Ct(r)) {
    const n = r?.constructor?.name, c = n ? `${n} ` : "";
    throw new Error(
      Se(t, c, r, e)
    );
  }
  const o = {}, s = Object.entries(r);
  s.sort(([n, c], [a, l]) => n === a ? 0 : n < a ? -1 : 1);
  for (const [n, c] of s)
    c !== void 0 && (Tt(n), o[n] = Re(c, e, t + `.${n}`));
  return o;
}
function Se(r, e, t, i) {
  return r ? `${e}${G(
    t
  )} is not a supported Convex type (present at path ${r} in original object ${G(
    i
  )}). To learn about Convex's supported types, see https://docs.convex.dev/using/types.` : `${e}${G(
    t
  )} is not a supported Convex type.`;
}
function L(r) {
  return Re(r, r, "");
}
var xr = Object.defineProperty, Sr = (r, e, t) => e in r ? xr(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, Ce = (r, e, t) => Sr(r, typeof e != "symbol" ? e + "" : e, t), it, ot;
const Cr = /* @__PURE__ */ Symbol.for("ConvexError");
class Ee extends (ot = Error, it = Cr, ot) {
  constructor(e) {
    super(typeof e == "string" ? e : G(e)), Ce(this, "name", "ConvexError"), Ce(this, "data"), Ce(this, it, !0), this.data = e;
  }
}
const At = () => Array.from({ length: 4 }, () => 0);
At();
At();
var _r = Object.defineProperty, $r = (r, e, t) => e in r ? _r(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, st = (r, e, t) => $r(r, typeof e != "symbol" ? e + "" : e, t);
const Tr = "color:rgb(0, 145, 255)";
function Rt(r) {
  switch (r) {
    case "query":
      return "Q";
    case "mutation":
      return "M";
    case "action":
      return "A";
    case "any":
      return "?";
  }
}
class Et {
  constructor(e) {
    st(this, "_onLogLineFuncs"), st(this, "_verbose"), this._onLogLineFuncs = {}, this._verbose = e.verbose;
  }
  addLogLineListener(e) {
    let t = Math.random().toString(36).substring(2, 15);
    for (let i = 0; i < 10 && this._onLogLineFuncs[t] !== void 0; i++)
      t = Math.random().toString(36).substring(2, 15);
    return this._onLogLineFuncs[t] = e, () => {
      delete this._onLogLineFuncs[t];
    };
  }
  logVerbose(...e) {
    if (this._verbose)
      for (const t of Object.values(this._onLogLineFuncs))
        t("debug", `${(/* @__PURE__ */ new Date()).toISOString()}`, ...e);
  }
  log(...e) {
    for (const t of Object.values(this._onLogLineFuncs))
      t("info", ...e);
  }
  warn(...e) {
    for (const t of Object.values(this._onLogLineFuncs))
      t("warn", ...e);
  }
  error(...e) {
    for (const t of Object.values(this._onLogLineFuncs))
      t("error", ...e);
  }
}
function Ar(r) {
  const e = new Et(r);
  return e.addLogLineListener((t, ...i) => {
    switch (t) {
      case "debug":
        console.debug(...i);
        break;
      case "info":
        console.log(...i);
        break;
      case "warn":
        console.warn(...i);
        break;
      case "error":
        console.error(...i);
        break;
      default:
        console.log(...i);
    }
  }), e;
}
function Rr(r) {
  return new Et(r);
}
function de(r, e, t, i, o) {
  const s = Rt(t);
  if (typeof o == "object" && (o = `ConvexError ${JSON.stringify(o.errorData, null, 2)}`), e === "info") {
    const n = o.match(/^\[.*?\] /);
    if (n === null) {
      r.error(
        `[CONVEX ${s}(${i})] Could not parse console.log`
      );
      return;
    }
    const c = o.slice(1, n[0].length - 2), a = o.slice(n[0].length);
    r.log(`%c[CONVEX ${s}(${i})] [${c}]`, Tr, a);
  } else
    r.error(`[CONVEX ${s}(${i})] ${o}`);
}
function Er(r, e) {
  const t = `[CONVEX FATAL ERROR] ${e}`;
  return r.error(t), new Error(t);
}
function U(r, e, t) {
  return `[CONVEX ${Rt(r)}(${e})] ${t.errorMessage}
  Called by client`;
}
function Me(r, e) {
  return e.data = r.errorData, e;
}
function N(r) {
  const e = r.split(":");
  let t, i;
  return e.length === 1 ? (t = e[0], i = "default") : (t = e.slice(0, e.length - 1).join(":"), i = e[e.length - 1]), t.endsWith(".js") && (t = t.slice(0, -3)), `${t}:${i}`;
}
function O(r, e) {
  return JSON.stringify({
    udfPath: N(r),
    args: L(e)
  });
}
function nt(r, e, t) {
  const { initialNumItems: i, id: o } = t;
  return JSON.stringify({
    type: "paginated",
    udfPath: N(r),
    args: L(e),
    options: L({ initialNumItems: i, id: o })
  });
}
function Mr(r) {
  return JSON.parse(r).type === "paginated";
}
var qr = Object.defineProperty, Pr = (r, e, t) => e in r ? qr(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, x = (r, e, t) => Pr(r, typeof e != "symbol" ? e + "" : e, t);
class Or {
  constructor() {
    x(this, "nextQueryId"), x(this, "querySetVersion"), x(this, "querySet"), x(this, "queryIdToToken"), x(this, "identityVersion"), x(this, "auth"), x(this, "outstandingQueriesOlderThanRestart"), x(this, "outstandingAuthOlderThanRestart"), x(this, "paused"), x(this, "pendingQuerySetModifications"), this.nextQueryId = 0, this.querySetVersion = 0, this.identityVersion = 0, this.querySet = /* @__PURE__ */ new Map(), this.queryIdToToken = /* @__PURE__ */ new Map(), this.outstandingQueriesOlderThanRestart = /* @__PURE__ */ new Set(), this.outstandingAuthOlderThanRestart = !1, this.paused = !1, this.pendingQuerySetModifications = /* @__PURE__ */ new Map();
  }
  hasSyncedPastLastReconnect() {
    return this.outstandingQueriesOlderThanRestart.size === 0 && !this.outstandingAuthOlderThanRestart;
  }
  markAuthCompletion() {
    this.outstandingAuthOlderThanRestart = !1;
  }
  subscribe(e, t, i, o) {
    const s = N(e), n = O(s, t), c = this.querySet.get(n);
    if (c !== void 0)
      return c.numSubscribers += 1, {
        queryToken: n,
        modification: null,
        unsubscribe: () => this.removeSubscriber(n)
      };
    {
      const a = this.nextQueryId++, l = {
        id: a,
        canonicalizedUdfPath: s,
        args: t,
        numSubscribers: 1,
        journal: i,
        componentPath: o
      };
      this.querySet.set(n, l), this.queryIdToToken.set(a, n);
      const d = this.querySetVersion, u = this.querySetVersion + 1, f = {
        type: "Add",
        queryId: a,
        udfPath: s,
        args: [L(t)],
        journal: i,
        componentPath: o
      };
      return this.paused ? this.pendingQuerySetModifications.set(a, f) : this.querySetVersion = u, {
        queryToken: n,
        modification: {
          type: "ModifyQuerySet",
          baseVersion: d,
          newVersion: u,
          modifications: [f]
        },
        unsubscribe: () => this.removeSubscriber(n)
      };
    }
  }
  transition(e) {
    for (const t of e.modifications)
      switch (t.type) {
        case "QueryUpdated":
        case "QueryFailed": {
          this.outstandingQueriesOlderThanRestart.delete(t.queryId);
          const i = t.journal;
          if (i !== void 0) {
            const o = this.queryIdToToken.get(t.queryId);
            o !== void 0 && (this.querySet.get(o).journal = i);
          }
          break;
        }
        case "QueryRemoved": {
          this.outstandingQueriesOlderThanRestart.delete(t.queryId);
          break;
        }
        default:
          throw new Error(`Invalid modification ${t.type}`);
      }
  }
  queryId(e, t) {
    const i = N(e), o = O(i, t), s = this.querySet.get(o);
    return s !== void 0 ? s.id : null;
  }
  isCurrentOrNewerAuthVersion(e) {
    return e >= this.identityVersion;
  }
  getAuth() {
    return this.auth;
  }
  setAuth(e) {
    this.auth = {
      tokenType: "User",
      value: e
    };
    const t = this.identityVersion;
    return this.paused || (this.identityVersion = t + 1), {
      type: "Authenticate",
      baseVersion: t,
      ...this.auth
    };
  }
  setAdminAuth(e, t) {
    const i = {
      tokenType: "Admin",
      value: e,
      impersonating: t
    };
    this.auth = i;
    const o = this.identityVersion;
    return this.paused || (this.identityVersion = o + 1), {
      type: "Authenticate",
      baseVersion: o,
      ...i
    };
  }
  clearAuth() {
    this.auth = void 0, this.markAuthCompletion();
    const e = this.identityVersion;
    return this.paused || (this.identityVersion = e + 1), {
      type: "Authenticate",
      tokenType: "None",
      baseVersion: e
    };
  }
  hasAuth() {
    return !!this.auth;
  }
  isNewAuth(e) {
    return this.auth?.value !== e;
  }
  queryPath(e) {
    const t = this.queryIdToToken.get(e);
    return t ? this.querySet.get(t).canonicalizedUdfPath : null;
  }
  queryArgs(e) {
    const t = this.queryIdToToken.get(e);
    return t ? this.querySet.get(t).args : null;
  }
  queryToken(e) {
    return this.queryIdToToken.get(e) ?? null;
  }
  queryJournal(e) {
    return this.querySet.get(e)?.journal;
  }
  restart(e) {
    this.unpause(), this.outstandingQueriesOlderThanRestart.clear();
    const t = [];
    for (const s of this.querySet.values()) {
      const n = {
        type: "Add",
        queryId: s.id,
        udfPath: s.canonicalizedUdfPath,
        args: [L(s.args)],
        journal: s.journal,
        componentPath: s.componentPath
      };
      t.push(n), e.has(s.id) || this.outstandingQueriesOlderThanRestart.add(s.id);
    }
    this.querySetVersion = 1;
    const i = {
      type: "ModifyQuerySet",
      baseVersion: 0,
      newVersion: 1,
      modifications: t
    };
    if (!this.auth)
      return this.identityVersion = 0, [i, void 0];
    this.outstandingAuthOlderThanRestart = !0;
    const o = {
      type: "Authenticate",
      baseVersion: 0,
      ...this.auth
    };
    return this.identityVersion = 1, [i, o];
  }
  pause() {
    this.paused = !0;
  }
  resume() {
    const e = this.pendingQuerySetModifications.size > 0 ? {
      type: "ModifyQuerySet",
      baseVersion: this.querySetVersion,
      newVersion: ++this.querySetVersion,
      modifications: Array.from(
        this.pendingQuerySetModifications.values()
      )
    } : void 0, t = this.auth !== void 0 ? {
      type: "Authenticate",
      baseVersion: this.identityVersion++,
      ...this.auth
    } : void 0;
    return this.unpause(), [e, t];
  }
  unpause() {
    this.paused = !1, this.pendingQuerySetModifications.clear();
  }
  removeSubscriber(e) {
    const t = this.querySet.get(e);
    if (t.numSubscribers > 1)
      return t.numSubscribers -= 1, null;
    {
      this.querySet.delete(e), this.queryIdToToken.delete(t.id), this.outstandingQueriesOlderThanRestart.delete(t.id);
      const i = this.querySetVersion, o = this.querySetVersion + 1, s = {
        type: "Remove",
        queryId: t.id
      };
      return this.paused ? this.pendingQuerySetModifications.has(t.id) ? this.pendingQuerySetModifications.delete(t.id) : this.pendingQuerySetModifications.set(t.id, s) : this.querySetVersion = o, {
        type: "ModifyQuerySet",
        baseVersion: i,
        newVersion: o,
        modifications: [s]
      };
    }
  }
}
var Ir = Object.defineProperty, Lr = (r, e, t) => e in r ? Ir(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, ne = (r, e, t) => Lr(r, typeof e != "symbol" ? e + "" : e, t);
class Nr {
  constructor(e, t) {
    this.logger = e, this.markConnectionStateDirty = t, ne(this, "inflightRequests"), ne(this, "requestsOlderThanRestart"), ne(this, "inflightMutationsCount", 0), ne(this, "inflightActionsCount", 0), this.inflightRequests = /* @__PURE__ */ new Map(), this.requestsOlderThanRestart = /* @__PURE__ */ new Set();
  }
  request(e, t) {
    const i = new Promise((o) => {
      const s = t ? "Requested" : "NotSent";
      this.inflightRequests.set(e.requestId, {
        message: e,
        status: { status: s, requestedAt: /* @__PURE__ */ new Date(), onResult: o }
      }), e.type === "Mutation" ? this.inflightMutationsCount++ : e.type === "Action" && this.inflightActionsCount++;
    });
    return this.markConnectionStateDirty(), i;
  }
  /**
   * Update the state after receiving a response.
   *
   * @returns A RequestId if the request is complete and its optimistic update
   * can be dropped, null otherwise.
   */
  onResponse(e) {
    const t = this.inflightRequests.get(e.requestId);
    if (t === void 0 || t.status.status === "Completed")
      return null;
    const i = t.message.type === "Mutation" ? "mutation" : "action", o = t.message.udfPath;
    for (const a of e.logLines)
      de(this.logger, "info", i, o, a);
    const s = t.status;
    let n, c;
    if (e.success)
      n = {
        success: !0,
        logLines: e.logLines,
        value: H(e.result)
      }, c = () => s.onResult(n);
    else {
      const a = e.result, { errorData: l } = e;
      de(this.logger, "error", i, o, a), n = {
        success: !1,
        errorMessage: a,
        errorData: l !== void 0 ? H(l) : void 0,
        logLines: e.logLines
      }, c = () => s.onResult(n);
    }
    return e.type === "ActionResponse" || !e.success ? (c(), this.inflightRequests.delete(e.requestId), this.requestsOlderThanRestart.delete(e.requestId), t.message.type === "Action" ? this.inflightActionsCount-- : t.message.type === "Mutation" && this.inflightMutationsCount--, this.markConnectionStateDirty(), { requestId: e.requestId, result: n }) : (t.status = {
      status: "Completed",
      result: n,
      ts: e.ts,
      onResolve: c
    }, null);
  }
  // Remove and returns completed requests.
  removeCompleted(e) {
    const t = /* @__PURE__ */ new Map();
    for (const [i, o] of this.inflightRequests.entries()) {
      const s = o.status;
      s.status === "Completed" && s.ts.lessThanOrEqual(e) && (s.onResolve(), t.set(i, s.result), o.message.type === "Mutation" ? this.inflightMutationsCount-- : o.message.type === "Action" && this.inflightActionsCount--, this.inflightRequests.delete(i), this.requestsOlderThanRestart.delete(i));
    }
    return t.size > 0 && this.markConnectionStateDirty(), t;
  }
  restart() {
    this.requestsOlderThanRestart = new Set(this.inflightRequests.keys());
    const e = [];
    for (const [t, i] of this.inflightRequests) {
      if (i.status.status === "NotSent") {
        i.status.status = "Requested", e.push(i.message);
        continue;
      }
      if (i.message.type === "Mutation")
        e.push(i.message);
      else if (i.message.type === "Action") {
        if (this.inflightRequests.delete(t), this.requestsOlderThanRestart.delete(t), this.inflightActionsCount--, i.status.status === "Completed")
          throw new Error("Action should never be in 'Completed' state");
        i.status.onResult({
          success: !1,
          errorMessage: "Connection lost while action was in flight",
          logLines: []
        });
      }
    }
    return this.markConnectionStateDirty(), e;
  }
  resume() {
    const e = [];
    for (const [, t] of this.inflightRequests)
      if (t.status.status === "NotSent") {
        t.status.status = "Requested", e.push(t.message);
        continue;
      }
    return e;
  }
  /**
   * @returns true if there are any requests that have been requested but have
   * not be completed yet.
   */
  hasIncompleteRequests() {
    for (const e of this.inflightRequests.values())
      if (e.status.status === "Requested")
        return !0;
    return !1;
  }
  /**
   * @returns true if there are any inflight requests, including ones that have
   * completed on the server, but have not been applied.
   */
  hasInflightRequests() {
    return this.inflightRequests.size > 0;
  }
  /**
   * @returns true if there are any inflight requests, that have been hanging around
   * since prior to the most recent restart.
   */
  hasSyncedPastLastReconnect() {
    return this.requestsOlderThanRestart.size === 0;
  }
  timeOfOldestInflightRequest() {
    if (this.inflightRequests.size === 0)
      return null;
    let e = Date.now();
    for (const t of this.inflightRequests.values())
      t.status.status !== "Completed" && t.status.requestedAt.getTime() < e && (e = t.status.requestedAt.getTime());
    return new Date(e);
  }
  /**
   * @returns The number of mutations currently in flight.
   */
  inflightMutations() {
    return this.inflightMutationsCount;
  }
  /**
   * @returns The number of actions currently in flight.
   */
  inflightActions() {
    return this.inflightActionsCount;
  }
}
const pe = /* @__PURE__ */ Symbol.for("functionName"), Mt = /* @__PURE__ */ Symbol.for("toReferencePath");
function Qr(r) {
  return r[Mt] ?? null;
}
function Vr(r) {
  return r.startsWith("function://");
}
function jr(r) {
  let e;
  if (typeof r == "string")
    Vr(r) ? e = { functionHandle: r } : e = { name: r };
  else if (r[pe])
    e = { name: r[pe] };
  else {
    const t = Qr(r);
    if (!t)
      throw new Error(`${r} is not a functionReference`);
    e = { reference: t };
  }
  return e;
}
function $(r) {
  const e = jr(r);
  if (e.name === void 0)
    throw e.functionHandle !== void 0 ? new Error(
      `Expected function reference like "api.file.func" or "internal.file.func", but received function handle ${e.functionHandle}`
    ) : e.reference !== void 0 ? new Error(
      `Expected function reference in the current component like "api.file.func" or "internal.file.func", but received reference ${e.reference}`
    ) : new Error(
      `Expected function reference like "api.file.func" or "internal.file.func", but received ${JSON.stringify(e)}`
    );
  if (typeof r == "string") return r;
  const t = r[pe];
  if (!t)
    throw new Error(`${r} is not a functionReference`);
  return t;
}
function qt(r = []) {
  const e = {
    get(t, i) {
      if (typeof i == "string") {
        const o = [...r, i];
        return qt(o);
      } else if (i === pe) {
        if (r.length < 2) {
          const n = ["api", ...r].join(".");
          throw new Error(
            `API path is expected to be of the form \`api.moduleName.functionName\`. Found: \`${n}\``
          );
        }
        const o = r.slice(0, -1).join("/"), s = r[r.length - 1];
        return s === "default" ? o : o + ":" + s;
      } else return i === Symbol.toStringTag ? "FunctionReference" : void 0;
    }
  };
  return new Proxy({}, e);
}
const Br = qt();
var Ur = Object.defineProperty, zr = (r, e, t) => e in r ? Ur(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, fe = (r, e, t) => zr(r, typeof e != "symbol" ? e + "" : e, t);
class ie {
  constructor(e) {
    fe(this, "queryResults"), fe(this, "modifiedQueries"), this.queryResults = e, this.modifiedQueries = [];
  }
  getQuery(e, ...t) {
    const i = T(t[0]), o = $(e), s = this.queryResults.get(
      O(o, i)
    );
    if (s !== void 0)
      return ie.queryValue(s.result);
  }
  getAllQueries(e) {
    const t = [], i = $(e);
    for (const o of this.queryResults.values())
      o.udfPath === N(i) && t.push({
        args: o.args,
        value: ie.queryValue(o.result)
      });
    return t;
  }
  setQuery(e, t, i) {
    const o = T(t), s = $(e), n = O(s, o);
    let c;
    i === void 0 ? c = void 0 : c = {
      success: !0,
      value: i,
      // It's an optimistic update, so there are no function logs to show.
      logLines: []
    };
    const a = {
      udfPath: s,
      args: o,
      result: c
    };
    this.queryResults.set(n, a), this.modifiedQueries.push(n);
  }
  static queryValue(e) {
    if (e !== void 0)
      return e.success ? e.value : void 0;
  }
}
class Dr {
  constructor() {
    fe(this, "queryResults"), fe(this, "optimisticUpdates"), this.queryResults = /* @__PURE__ */ new Map(), this.optimisticUpdates = [];
  }
  /**
   * Apply all optimistic updates on top of server query results
   */
  ingestQueryResultsFromServer(e, t) {
    this.optimisticUpdates = this.optimisticUpdates.filter((n) => !t.has(n.mutationId));
    const i = this.queryResults;
    this.queryResults = new Map(e);
    const o = new ie(this.queryResults);
    for (const n of this.optimisticUpdates)
      n.update(o);
    const s = [];
    for (const [n, c] of this.queryResults) {
      const a = i.get(n);
      (a === void 0 || a.result !== c.result) && s.push(n);
    }
    return s;
  }
  applyOptimisticUpdate(e, t) {
    this.optimisticUpdates.push({
      update: e,
      mutationId: t
    });
    const i = new ie(this.queryResults);
    return e(i), i.modifiedQueries;
  }
  /**
   * "Raw" with respect to errors vs values, but query results still have
   * optimistic updates applied.
   *
   * @internal
   */
  rawQueryResult(e) {
    const t = this.queryResults.get(e);
    if (t !== void 0)
      return t.result;
  }
  queryResult(e) {
    const t = this.queryResults.get(e);
    if (t === void 0)
      return;
    const i = t.result;
    if (i !== void 0) {
      if (i.success)
        return i.value;
      throw i.errorData !== void 0 ? Me(
        i,
        new Ee(
          U("query", t.udfPath, i)
        )
      ) : new Error(
        U("query", t.udfPath, i)
      );
    }
  }
  hasQueryResult(e) {
    return this.queryResults.get(e) !== void 0;
  }
  /**
   * @internal
   */
  queryLogs(e) {
    return this.queryResults.get(e)?.result?.logLines;
  }
}
var Fr = Object.defineProperty, Hr = (r, e, t) => e in r ? Fr(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, _e = (r, e, t) => Hr(r, typeof e != "symbol" ? e + "" : e, t);
class y {
  constructor(e, t) {
    _e(this, "low"), _e(this, "high"), _e(this, "__isUnsignedLong__"), this.low = e | 0, this.high = t | 0, this.__isUnsignedLong__ = !0;
  }
  static isLong(e) {
    return (e && e.__isUnsignedLong__) === !0;
  }
  // prettier-ignore
  static fromBytesLE(e) {
    return new y(
      e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24,
      e[4] | e[5] << 8 | e[6] << 16 | e[7] << 24
    );
  }
  // prettier-ignore
  toBytesLE() {
    const e = this.high, t = this.low;
    return [
      t & 255,
      t >>> 8 & 255,
      t >>> 16 & 255,
      t >>> 24,
      e & 255,
      e >>> 8 & 255,
      e >>> 16 & 255,
      e >>> 24
    ];
  }
  static fromNumber(e) {
    return isNaN(e) || e < 0 ? at : e >= Wr ? Kr : new y(e % X | 0, e / X | 0);
  }
  toString() {
    return (BigInt(this.high) * BigInt(X) + BigInt(this.low)).toString();
  }
  equals(e) {
    return y.isLong(e) || (e = y.fromValue(e)), this.high >>> 31 === 1 && e.high >>> 31 === 1 ? !1 : this.high === e.high && this.low === e.low;
  }
  notEquals(e) {
    return !this.equals(e);
  }
  comp(e) {
    return y.isLong(e) || (e = y.fromValue(e)), this.equals(e) ? 0 : e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1;
  }
  lessThanOrEqual(e) {
    return this.comp(
      /* validates */
      e
    ) <= 0;
  }
  static fromValue(e) {
    return typeof e == "number" ? y.fromNumber(e) : new y(e.low, e.high);
  }
}
const at = new y(0, 0), ct = 65536, X = ct * ct, Wr = X * X, Kr = new y(-1, -1);
var Jr = Object.defineProperty, Gr = (r, e, t) => e in r ? Jr(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, ae = (r, e, t) => Gr(r, typeof e != "symbol" ? e + "" : e, t);
class lt {
  constructor(e, t) {
    ae(this, "version"), ae(this, "remoteQuerySet"), ae(this, "queryPath"), ae(this, "logger"), this.version = { querySet: 0, ts: y.fromNumber(0), identity: 0 }, this.remoteQuerySet = /* @__PURE__ */ new Map(), this.queryPath = e, this.logger = t;
  }
  transition(e) {
    const t = e.startVersion;
    if (this.version.querySet !== t.querySet || this.version.ts.notEquals(t.ts) || this.version.identity !== t.identity)
      throw new Error(
        `Invalid start version: ${t.ts.toString()}:${t.querySet}:${t.identity}, transitioning from ${this.version.ts.toString()}:${this.version.querySet}:${this.version.identity}`
      );
    for (const i of e.modifications)
      switch (i.type) {
        case "QueryUpdated": {
          const o = this.queryPath(i.queryId);
          if (o)
            for (const n of i.logLines)
              de(this.logger, "info", "query", o, n);
          const s = H(i.value ?? null);
          this.remoteQuerySet.set(i.queryId, {
            success: !0,
            value: s,
            logLines: i.logLines
          });
          break;
        }
        case "QueryFailed": {
          const o = this.queryPath(i.queryId);
          if (o)
            for (const n of i.logLines)
              de(this.logger, "info", "query", o, n);
          const { errorData: s } = i;
          this.remoteQuerySet.set(i.queryId, {
            success: !1,
            errorMessage: i.errorMessage,
            errorData: s !== void 0 ? H(s) : void 0,
            logLines: i.logLines
          });
          break;
        }
        case "QueryRemoved": {
          this.remoteQuerySet.delete(i.queryId);
          break;
        }
        default:
          throw new Error(`Invalid modification ${i.type}`);
      }
    this.version = e.endVersion;
  }
  remoteQueryResults() {
    return this.remoteQuerySet;
  }
  timestamp() {
    return this.version.ts;
  }
}
function $e(r) {
  const e = te(r);
  return y.fromBytesLE(Array.from(e));
}
function Xr(r) {
  const e = new Uint8Array(r.toBytesLE());
  return re(e);
}
function ht(r) {
  switch (r.type) {
    case "FatalError":
    case "AuthError":
    case "ActionResponse":
    case "TransitionChunk":
    case "Ping":
      return { ...r };
    case "MutationResponse":
      return r.success ? { ...r, ts: $e(r.ts) } : { ...r };
    case "Transition":
      return {
        ...r,
        startVersion: {
          ...r.startVersion,
          ts: $e(r.startVersion.ts)
        },
        endVersion: {
          ...r.endVersion,
          ts: $e(r.endVersion.ts)
        }
      };
  }
}
function Yr(r) {
  switch (r.type) {
    case "Authenticate":
    case "ModifyQuerySet":
    case "Mutation":
    case "Action":
    case "Event":
      return { ...r };
    case "Connect":
      return r.maxObservedTimestamp !== void 0 ? {
        ...r,
        maxObservedTimestamp: Xr(r.maxObservedTimestamp)
      } : { ...r, maxObservedTimestamp: void 0 };
  }
}
var Zr = Object.defineProperty, ei = (r, e, t) => e in r ? Zr(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, g = (r, e, t) => ei(r, typeof e != "symbol" ? e + "" : e, t);
const ti = 1e3, ri = 1001, ii = 1005, oi = 4040;
let le;
function B() {
  return le === void 0 && (le = Date.now()), typeof performance > "u" || !performance.now ? Date.now() : Math.round(le + performance.now());
}
function ut() {
  return `t=${Math.round((B() - le) / 100) / 10}s`;
}
const Pt = {
  // A known error, e.g. during a restart or push
  InternalServerError: { timeout: 1e3 },
  // ErrorMetadata::overloaded() messages that we realy should back off
  SubscriptionsWorkerFullError: { timeout: 3e3 },
  TooManyConcurrentRequests: { timeout: 3e3 },
  CommitterFullError: { timeout: 3e3 },
  AwsTooManyRequestsException: { timeout: 3e3 },
  ExecuteFullError: { timeout: 3e3 },
  SystemTimeoutError: { timeout: 3e3 },
  ExpiredInQueue: { timeout: 3e3 },
  // ErrorMetadata::feature_temporarily_unavailable() that typically indicate a deploy just happened
  VectorIndexesUnavailable: { timeout: 1e3 },
  SearchIndexesUnavailable: { timeout: 1e3 },
  TableSummariesUnavailable: { timeout: 1e3 },
  // More ErrorMetadata::overloaded()
  VectorIndexTooLarge: { timeout: 3e3 },
  SearchIndexTooLarge: { timeout: 3e3 },
  TooManyWritesInTimePeriod: { timeout: 3e3 }
};
function si(r) {
  if (r === void 0) return "Unknown";
  for (const e of Object.keys(
    Pt
  ))
    if (r.startsWith(e))
      return e;
  return "Unknown";
}
class ni {
  constructor(e, t, i, o, s, n) {
    this.markConnectionStateDirty = s, this.debug = n, g(this, "socket"), g(this, "connectionCount"), g(this, "_hasEverConnected", !1), g(this, "lastCloseReason"), g(this, "transitionChunkBuffer", null), g(this, "defaultInitialBackoff"), g(this, "maxBackoff"), g(this, "retries"), g(this, "serverInactivityThreshold"), g(this, "reconnectDueToServerInactivityTimeout"), g(this, "scheduledReconnect", null), g(this, "networkOnlineHandler", null), g(this, "pendingNetworkRecoveryInfo", null), g(this, "uri"), g(this, "onOpen"), g(this, "onResume"), g(this, "onMessage"), g(this, "webSocketConstructor"), g(this, "logger"), g(this, "onServerDisconnectError"), this.webSocketConstructor = i, this.socket = { state: "disconnected" }, this.connectionCount = 0, this.lastCloseReason = "InitialConnect", this.defaultInitialBackoff = 1e3, this.maxBackoff = 16e3, this.retries = 0, this.serverInactivityThreshold = 6e4, this.reconnectDueToServerInactivityTimeout = null, this.uri = e, this.onOpen = t.onOpen, this.onResume = t.onResume, this.onMessage = t.onMessage, this.onServerDisconnectError = t.onServerDisconnectError, this.logger = o, this.setupNetworkListener(), this.connect();
  }
  setSocketState(e) {
    this.socket = e, this._logVerbose(
      `socket state changed: ${this.socket.state}, paused: ${"paused" in this.socket ? this.socket.paused : void 0}`
    ), this.markConnectionStateDirty();
  }
  setupNetworkListener() {
    typeof window > "u" || typeof window.addEventListener != "function" || this.networkOnlineHandler === null && (this.networkOnlineHandler = () => {
      this._logVerbose("network online event detected"), this.tryReconnectImmediately();
    }, window.addEventListener("online", this.networkOnlineHandler), this._logVerbose("network online event listener registered"));
  }
  cleanupNetworkListener() {
    this.networkOnlineHandler && typeof window < "u" && typeof window.removeEventListener == "function" && (window.removeEventListener("online", this.networkOnlineHandler), this.networkOnlineHandler = null, this._logVerbose("network online event listener removed"));
  }
  assembleTransition(e) {
    if (e.partNumber < 0 || e.partNumber >= e.totalParts || e.totalParts === 0 || this.transitionChunkBuffer && (this.transitionChunkBuffer.totalParts !== e.totalParts || this.transitionChunkBuffer.transitionId !== e.transitionId))
      throw this.transitionChunkBuffer = null, new Error("Invalid TransitionChunk");
    if (this.transitionChunkBuffer === null && (this.transitionChunkBuffer = {
      chunks: [],
      totalParts: e.totalParts,
      transitionId: e.transitionId
    }), e.partNumber !== this.transitionChunkBuffer.chunks.length) {
      const t = this.transitionChunkBuffer.chunks.length;
      throw this.transitionChunkBuffer = null, new Error(
        `TransitionChunk received out of order: expected part ${t}, got ${e.partNumber}`
      );
    }
    if (this.transitionChunkBuffer.chunks.push(e.chunk), this.transitionChunkBuffer.chunks.length === e.totalParts) {
      const t = this.transitionChunkBuffer.chunks.join("");
      this.transitionChunkBuffer = null;
      const i = ht(JSON.parse(t));
      if (i.type !== "Transition")
        throw new Error(
          `Expected Transition, got ${i.type} after assembling chunks`
        );
      return i;
    }
    return null;
  }
  connect() {
    if (this.socket.state === "terminated")
      return;
    if (this.socket.state !== "disconnected" && this.socket.state !== "stopped")
      throw new Error(
        "Didn't start connection from disconnected state: " + this.socket.state
      );
    const e = new this.webSocketConstructor(this.uri);
    this._logVerbose("constructed WebSocket"), this.setSocketState({
      state: "connecting",
      ws: e,
      paused: "no"
    }), this.resetServerInactivityTimeout(), e.onopen = () => {
      if (this.logger.logVerbose("begin ws.onopen"), this.socket.state !== "connecting")
        throw new Error("onopen called with socket not in connecting state");
      if (this.setSocketState({
        state: "ready",
        ws: e,
        paused: this.socket.paused === "yes" ? "uninitialized" : "no"
      }), this.resetServerInactivityTimeout(), this.socket.paused === "no" && (this._hasEverConnected = !0, this.onOpen({
        connectionCount: this.connectionCount,
        lastCloseReason: this.lastCloseReason,
        clientTs: B()
      })), this.lastCloseReason !== "InitialConnect" && (this.lastCloseReason ? this.logger.log(
        "WebSocket reconnected at",
        ut(),
        "after disconnect due to",
        this.lastCloseReason
      ) : this.logger.log("WebSocket reconnected at", ut())), this.connectionCount += 1, this.lastCloseReason = null, this.pendingNetworkRecoveryInfo !== null) {
        const { timeSavedMs: t } = this.pendingNetworkRecoveryInfo;
        this.pendingNetworkRecoveryInfo = null, this.sendMessage({
          type: "Event",
          eventType: "NetworkRecoveryReconnect",
          event: { timeSavedMs: t }
        }), this.logger.log(
          `Network recovery reconnect saved ~${Math.round(t / 1e3)}s of waiting`
        );
      }
    }, e.onerror = (t) => {
      this.transitionChunkBuffer = null;
      const i = t.message;
      i && this.logger.log(`WebSocket error message: ${i}`);
    }, e.onmessage = (t) => {
      this.resetServerInactivityTimeout();
      const i = t.data.length;
      let o = ht(JSON.parse(t.data));
      if (this._logVerbose(`received ws message with type ${o.type}`), o.type === "Ping")
        return;
      if (o.type === "TransitionChunk") {
        const n = this.assembleTransition(o);
        if (!n)
          return;
        o = n, this._logVerbose(
          `assembled full ws message of type ${o.type}`
        );
      }
      this.transitionChunkBuffer !== null && (this.transitionChunkBuffer = null, this.logger.log(
        `Received unexpected ${o.type} while buffering TransitionChunks`
      )), o.type === "Transition" && this.reportLargeTransition({
        messageLength: i,
        transition: o
      }), this.onMessage(o).hasSyncedPastLastReconnect && (this.retries = 0, this.markConnectionStateDirty());
    }, e.onclose = (t) => {
      if (this._logVerbose("begin ws.onclose"), this.transitionChunkBuffer = null, this.lastCloseReason === null && (this.lastCloseReason = t.reason || `closed with code ${t.code}`), t.code !== ti && t.code !== ri && // This commonly gets fired on mobile apps when the app is backgrounded
      t.code !== ii && t.code !== oi) {
        let o = `WebSocket closed with code ${t.code}`;
        t.reason && (o += `: ${t.reason}`), this.logger.log(o), this.onServerDisconnectError && t.reason && this.onServerDisconnectError(o);
      }
      const i = si(t.reason);
      this.scheduleReconnect(i);
    };
  }
  /**
   * @returns The state of the {@link Socket}.
   */
  socketState() {
    return this.socket.state;
  }
  /**
   * @param message - A ClientMessage to send.
   * @returns Whether the message (might have been) sent.
   */
  sendMessage(e) {
    const t = {
      type: e.type,
      ...e.type === "Authenticate" && e.tokenType === "User" ? {
        value: `...${e.value.slice(-7)}`
      } : {}
    };
    if (this.socket.state === "ready" && this.socket.paused === "no") {
      const i = Yr(e), o = JSON.stringify(i);
      let s = !1;
      try {
        this.socket.ws.send(o), s = !0;
      } catch (n) {
        this.logger.log(
          `Failed to send message on WebSocket, reconnecting: ${n}`
        ), this.closeAndReconnect("FailedToSendMessage");
      }
      return this._logVerbose(
        `${s ? "sent" : "failed to send"} message with type ${e.type}: ${JSON.stringify(
          t
        )}`
      ), !0;
    }
    return this._logVerbose(
      `message not sent (socket state: ${this.socket.state}, paused: ${"paused" in this.socket ? this.socket.paused : void 0}): ${JSON.stringify(
        t
      )}`
    ), !1;
  }
  resetServerInactivityTimeout() {
    this.socket.state !== "terminated" && (this.reconnectDueToServerInactivityTimeout !== null && (clearTimeout(this.reconnectDueToServerInactivityTimeout), this.reconnectDueToServerInactivityTimeout = null), this.reconnectDueToServerInactivityTimeout = setTimeout(() => {
      this.closeAndReconnect("InactiveServer");
    }, this.serverInactivityThreshold));
  }
  scheduleReconnect(e) {
    this.scheduledReconnect && (clearTimeout(this.scheduledReconnect.timeout), this.scheduledReconnect = null), this.socket = { state: "disconnected" };
    const t = this.nextBackoff(e);
    this.markConnectionStateDirty(), this.logger.log(`Attempting reconnect in ${Math.round(t)}ms`);
    const i = B(), o = setTimeout(() => {
      this.scheduledReconnect?.timeout === o && (this.scheduledReconnect = null, this.connect());
    }, t);
    this.scheduledReconnect = {
      timeout: o,
      scheduledAt: i,
      backoffMs: t
    };
  }
  /**
   * Close the WebSocket and schedule a reconnect.
   *
   * This should be used when we hit an error and would like to restart the session.
   */
  closeAndReconnect(e) {
    switch (this._logVerbose(`begin closeAndReconnect with reason ${e}`), this.socket.state) {
      case "disconnected":
      case "terminated":
      case "stopped":
        return;
      case "connecting":
      case "ready": {
        this.lastCloseReason = e, this.close(), this.scheduleReconnect("client");
        return;
      }
      default:
        this.socket;
    }
  }
  /**
   * Close the WebSocket, being careful to clear the onclose handler to avoid re-entrant
   * calls. Use this instead of directly calling `ws.close()`
   *
   * It is the callers responsibility to update the state after this method is called so that the
   * closed socket is not accessible or used again after this method is called
   */
  close() {
    switch (this.transitionChunkBuffer = null, this.socket.state) {
      case "disconnected":
      case "terminated":
      case "stopped":
        return Promise.resolve();
      case "connecting": {
        const e = this.socket.ws;
        return e.onmessage = (t) => {
          this._logVerbose("Ignoring message received after close");
        }, new Promise((t) => {
          e.onclose = () => {
            this._logVerbose("Closed after connecting"), t();
          }, e.onopen = () => {
            this._logVerbose("Opened after connecting"), e.close();
          };
        });
      }
      case "ready": {
        this._logVerbose("ws.close called");
        const e = this.socket.ws;
        e.onmessage = (i) => {
          this._logVerbose("Ignoring message received after close");
        };
        const t = new Promise((i) => {
          e.onclose = () => {
            i();
          };
        });
        return e.close(), t;
      }
      default:
        return this.socket, Promise.resolve();
    }
  }
  /**
   * Close the WebSocket and do not reconnect.
   * @returns A Promise that resolves when the WebSocket `onClose` callback is called.
   */
  terminate() {
    switch (this.reconnectDueToServerInactivityTimeout && clearTimeout(this.reconnectDueToServerInactivityTimeout), this.scheduledReconnect && (clearTimeout(this.scheduledReconnect.timeout), this.scheduledReconnect = null), this.cleanupNetworkListener(), this.socket.state) {
      case "terminated":
      case "stopped":
      case "disconnected":
      case "connecting":
      case "ready": {
        const e = this.close();
        return this.setSocketState({ state: "terminated" }), e;
      }
      default:
        throw this.socket, new Error(
          `Invalid websocket state: ${this.socket.state}`
        );
    }
  }
  stop() {
    switch (this.socket.state) {
      case "terminated":
        return Promise.resolve();
      case "connecting":
      case "stopped":
      case "disconnected":
      case "ready": {
        this.cleanupNetworkListener();
        const e = this.close();
        return this.socket = { state: "stopped" }, e;
      }
      default:
        return this.socket, Promise.resolve();
    }
  }
  /**
   * Create a new WebSocket after a previous `stop()`, unless `terminate()` was
   * called before.
   */
  tryRestart() {
    switch (this.socket.state) {
      case "stopped":
        break;
      case "terminated":
      case "connecting":
      case "ready":
      case "disconnected":
        this.logger.logVerbose("Restart called without stopping first");
        return;
      default:
        this.socket;
    }
    this.setupNetworkListener(), this.connect();
  }
  pause() {
    switch (this.socket.state) {
      case "disconnected":
      case "stopped":
      case "terminated":
        return;
      case "connecting":
      case "ready": {
        this.socket = { ...this.socket, paused: "yes" };
        return;
      }
      default: {
        this.socket;
        return;
      }
    }
  }
  /**
   * Try to reconnect immediately, canceling any scheduled reconnect.
   * This is useful when detecting network recovery.
   * Only takes action if we're in disconnected state (waiting to reconnect).
   */
  tryReconnectImmediately() {
    if (this._logVerbose("tryReconnectImmediately called"), this.socket.state !== "disconnected") {
      this._logVerbose(
        `tryReconnectImmediately called but socket state is ${this.socket.state}, no action taken`
      );
      return;
    }
    let e = null;
    if (this.scheduledReconnect) {
      const t = B() - this.scheduledReconnect.scheduledAt;
      e = Math.max(0, this.scheduledReconnect.backoffMs - t), this._logVerbose(
        `would have waited ${Math.round(e)}ms more (backoff was ${Math.round(this.scheduledReconnect.backoffMs)}ms, elapsed ${Math.round(t)}ms)`
      ), clearTimeout(this.scheduledReconnect.timeout), this.scheduledReconnect = null, this._logVerbose("canceled scheduled reconnect");
    }
    this.logger.log("Network recovery detected, reconnecting immediately"), this.pendingNetworkRecoveryInfo = e !== null ? { timeSavedMs: e } : null, this.connect();
  }
  /**
   * Resume the state machine if previously paused.
   */
  resume() {
    switch (this.socket.state) {
      case "connecting":
        this.socket = { ...this.socket, paused: "no" };
        return;
      case "ready":
        this.socket.paused === "uninitialized" ? (this.socket = { ...this.socket, paused: "no" }, this.onOpen({
          connectionCount: this.connectionCount,
          lastCloseReason: this.lastCloseReason,
          clientTs: B()
        })) : this.socket.paused === "yes" && (this.socket = { ...this.socket, paused: "no" }, this.onResume());
        return;
      case "terminated":
      case "stopped":
      case "disconnected":
        return;
      default:
        this.socket;
    }
    this.connect();
  }
  connectionState() {
    return {
      isConnected: this.socket.state === "ready",
      hasEverConnected: this._hasEverConnected,
      connectionCount: this.connectionCount,
      connectionRetries: this.retries
    };
  }
  _logVerbose(e) {
    this.logger.logVerbose(e);
  }
  nextBackoff(e) {
    const i = (e === "client" ? 100 : e === "Unknown" ? this.defaultInitialBackoff : Pt[e].timeout) * Math.pow(2, this.retries);
    this.retries += 1;
    const o = Math.min(i, this.maxBackoff), s = o * (Math.random() - 0.5);
    return o + s;
  }
  reportLargeTransition({
    transition: e,
    messageLength: t
  }) {
    if (e.clientClockSkew === void 0 || e.serverTs === void 0)
      return;
    const i = B() - // client time now
    // clientClockSkew = (server time + upstream latency) - client time
    // clientClockSkew is "how many milliseconds behind (slow) is the client clock"
    // but the latency of the Connect message inflates this, making it appear further behind
    e.clientClockSkew - e.serverTs / 1e6, o = `${Math.round(i)}ms`, s = `${Math.round(t / 1e4) / 100}MB`, n = t / (i / 1e3), c = `${Math.round(n / 1e4) / 100}MB per second`;
    this._logVerbose(
      `received ${s} transition in ${o} at ${c}`
    ), t > 2e7 ? this.logger.log(
      `received query results totaling more that 20MB (${s}) which will take a long time to download on slower connections`
    ) : i > 2e4 && this.logger.log(
      `received query results totaling ${s} which took more than 20s to arrive (${o})`
    ), this.debug && this.sendMessage({
      type: "Event",
      eventType: "ClientReceivedTransition",
      event: { transitionTransitTime: i, messageLength: t }
    });
  }
}
function ai() {
  return ci();
}
function ci() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (r) => {
    const e = Math.random() * 16 | 0;
    return (r === "x" ? e : e & 3 | 8).toString(16);
  });
}
class K extends Error {
}
K.prototype.name = "InvalidTokenError";
function li(r) {
  return decodeURIComponent(
    atob(r).replace(/(.)/g, (e, t) => {
      let i = t.charCodeAt(0).toString(16).toUpperCase();
      return i.length < 2 && (i = "0" + i), "%" + i;
    })
  );
}
function hi(r) {
  let e = r.replace(/-/g, "+").replace(/_/g, "/");
  switch (e.length % 4) {
    case 0:
      break;
    case 2:
      e += "==";
      break;
    case 3:
      e += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return li(e);
  } catch {
    return atob(e);
  }
}
function Ot(r, e) {
  if (typeof r != "string")
    throw new K("Invalid token specified: must be a string");
  e || (e = {});
  const t = e.header === !0 ? 0 : 1, i = r.split(".")[t];
  if (typeof i != "string")
    throw new K(
      `Invalid token specified: missing part #${t + 1}`
    );
  let o;
  try {
    o = hi(i);
  } catch (s) {
    throw new K(
      `Invalid token specified: invalid base64 for part #${t + 1} (${s.message})`
    );
  }
  try {
    return JSON.parse(o);
  } catch (s) {
    throw new K(
      `Invalid token specified: invalid json for part #${t + 1} (${s.message})`
    );
  }
}
var ui = Object.defineProperty, di = (r, e, t) => e in r ? ui(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, v = (r, e, t) => di(r, typeof e != "symbol" ? e + "" : e, t);
const pi = 480 * 60 * 60 * 1e3, dt = 2;
class fi {
  constructor(e, t, i) {
    v(this, "authState", { state: "noAuth" }), v(this, "configVersion", 0), v(this, "syncState"), v(this, "authenticate"), v(this, "stopSocket"), v(this, "tryRestartSocket"), v(this, "pauseSocket"), v(this, "resumeSocket"), v(this, "clearAuth"), v(this, "logger"), v(this, "refreshTokenLeewaySeconds"), v(this, "tokenConfirmationAttempts", 0), this.syncState = e, this.authenticate = t.authenticate, this.stopSocket = t.stopSocket, this.tryRestartSocket = t.tryRestartSocket, this.pauseSocket = t.pauseSocket, this.resumeSocket = t.resumeSocket, this.clearAuth = t.clearAuth, this.logger = i.logger, this.refreshTokenLeewaySeconds = i.refreshTokenLeewaySeconds;
  }
  async setConfig(e, t) {
    this.resetAuthState(), this._logVerbose("pausing WS for auth token fetch"), this.pauseSocket();
    const i = await this.fetchTokenAndGuardAgainstRace(e, {
      forceRefreshToken: !1
    });
    i.isFromOutdatedConfig || (i.value ? (this.setAuthState({
      state: "waitingForServerConfirmationOfCachedToken",
      config: { fetchToken: e, onAuthChange: t },
      hasRetried: !1
    }), this.authenticate(i.value)) : (this.setAuthState({
      state: "initialRefetch",
      config: { fetchToken: e, onAuthChange: t }
    }), await this.refetchToken()), this._logVerbose("resuming WS after auth token fetch"), this.resumeSocket());
  }
  onTransition(e) {
    if (this.syncState.isCurrentOrNewerAuthVersion(
      e.endVersion.identity
    ) && !(e.endVersion.identity <= e.startVersion.identity)) {
      if (this.authState.state === "waitingForServerConfirmationOfCachedToken") {
        this._logVerbose("server confirmed auth token is valid"), this.refetchToken(), this.authState.config.onAuthChange(!0);
        return;
      }
      this.authState.state === "waitingForServerConfirmationOfFreshToken" && (this._logVerbose("server confirmed new auth token is valid"), this.scheduleTokenRefetch(this.authState.token), this.tokenConfirmationAttempts = 0, this.authState.hadAuth || this.authState.config.onAuthChange(!0));
    }
  }
  onAuthError(e) {
    if (e.authUpdateAttempted === !1 && (this.authState.state === "waitingForServerConfirmationOfFreshToken" || this.authState.state === "waitingForServerConfirmationOfCachedToken")) {
      this._logVerbose("ignoring non-auth token expired error");
      return;
    }
    const { baseVersion: t } = e;
    if (!this.syncState.isCurrentOrNewerAuthVersion(t + 1)) {
      this._logVerbose("ignoring auth error for previous auth attempt");
      return;
    }
    this.tryToReauthenticate(e);
  }
  // This is similar to `refetchToken` defined below, in fact we
  // don't represent them as different states, but it is different
  // in that we pause the WebSocket so that mutations
  // don't retry with bad auth.
  async tryToReauthenticate(e) {
    if (this._logVerbose(`attempting to reauthenticate: ${e.error}`), // No way to fetch another token, kaboom
    this.authState.state === "noAuth" || // We failed on a fresh token. After a small number of retries, we give up
    // and clear the auth state to avoid infinite retries.
    this.authState.state === "waitingForServerConfirmationOfFreshToken" && this.tokenConfirmationAttempts >= dt) {
      this.logger.error(
        `Failed to authenticate: "${e.error}", check your server auth config`
      ), this.syncState.hasAuth() && this.syncState.clearAuth(), this.authState.state !== "noAuth" && this.setAndReportAuthFailed(this.authState.config.onAuthChange);
      return;
    }
    this.authState.state === "waitingForServerConfirmationOfFreshToken" && (this.tokenConfirmationAttempts++, this._logVerbose(
      `retrying reauthentication, ${dt - this.tokenConfirmationAttempts} attempts remaining`
    )), await this.stopSocket();
    const t = await this.fetchTokenAndGuardAgainstRace(
      this.authState.config.fetchToken,
      {
        forceRefreshToken: !0
      }
    );
    t.isFromOutdatedConfig || (t.value && this.syncState.isNewAuth(t.value) ? (this.authenticate(t.value), this.setAuthState({
      state: "waitingForServerConfirmationOfFreshToken",
      config: this.authState.config,
      token: t.value,
      hadAuth: this.authState.state === "notRefetching" || this.authState.state === "waitingForScheduledRefetch"
    })) : (this._logVerbose("reauthentication failed, could not fetch a new token"), this.syncState.hasAuth() && this.syncState.clearAuth(), this.setAndReportAuthFailed(this.authState.config.onAuthChange)), this.tryRestartSocket());
  }
  // Force refetch the token and schedule another refetch
  // before the token expires - an active client should never
  // need to reauthenticate.
  async refetchToken() {
    if (this.authState.state === "noAuth")
      return;
    this._logVerbose("refetching auth token");
    const e = await this.fetchTokenAndGuardAgainstRace(
      this.authState.config.fetchToken,
      {
        forceRefreshToken: !0
      }
    );
    e.isFromOutdatedConfig || (e.value ? this.syncState.isNewAuth(e.value) ? (this.setAuthState({
      state: "waitingForServerConfirmationOfFreshToken",
      hadAuth: this.syncState.hasAuth(),
      token: e.value,
      config: this.authState.config
    }), this.authenticate(e.value)) : this.setAuthState({
      state: "notRefetching",
      config: this.authState.config
    }) : (this._logVerbose("refetching token failed"), this.syncState.hasAuth() && this.clearAuth(), this.setAndReportAuthFailed(this.authState.config.onAuthChange)), this._logVerbose(
      "restarting WS after auth token fetch (if currently stopped)"
    ), this.tryRestartSocket());
  }
  scheduleTokenRefetch(e) {
    if (this.authState.state === "noAuth")
      return;
    const t = this.decodeToken(e);
    if (!t) {
      this.logger.error(
        "Auth token is not a valid JWT, cannot refetch the token"
      );
      return;
    }
    const { iat: i, exp: o } = t;
    if (!i || !o) {
      this.logger.error(
        "Auth token does not have required fields, cannot refetch the token"
      );
      return;
    }
    const s = o - i;
    if (s <= 2) {
      this.logger.error(
        "Auth token does not live long enough, cannot refetch the token"
      );
      return;
    }
    let n = Math.min(
      pi,
      (s - this.refreshTokenLeewaySeconds) * 1e3
    );
    n <= 0 && (this.logger.warn(
      `Refetching auth token immediately, configured leeway ${this.refreshTokenLeewaySeconds}s is larger than the token's lifetime ${s}s`
    ), n = 0);
    const c = setTimeout(() => {
      this._logVerbose("running scheduled token refetch"), this.refetchToken();
    }, n);
    this.setAuthState({
      state: "waitingForScheduledRefetch",
      refetchTokenTimeoutId: c,
      config: this.authState.config
    }), this._logVerbose(
      `scheduled preemptive auth token refetching in ${n}ms`
    );
  }
  // Protects against simultaneous calls to `setConfig`
  // while we're fetching a token
  async fetchTokenAndGuardAgainstRace(e, t) {
    const i = ++this.configVersion;
    this._logVerbose(
      `fetching token with config version ${i}`
    );
    const o = await e(t);
    return this.configVersion !== i ? (this._logVerbose(
      `stale config version, expected ${i}, got ${this.configVersion}`
    ), { isFromOutdatedConfig: !0 }) : { isFromOutdatedConfig: !1, value: o };
  }
  stop() {
    this.resetAuthState(), this.configVersion++, this._logVerbose(`config version bumped to ${this.configVersion}`);
  }
  setAndReportAuthFailed(e) {
    e(!1), this.resetAuthState();
  }
  resetAuthState() {
    this.setAuthState({ state: "noAuth" });
  }
  setAuthState(e) {
    const t = e.state === "waitingForServerConfirmationOfFreshToken" ? {
      hadAuth: e.hadAuth,
      state: e.state,
      token: `...${e.token.slice(-7)}`
    } : { state: e.state };
    switch (this._logVerbose(
      `setting auth state to ${JSON.stringify(t)}`
    ), e.state) {
      case "waitingForScheduledRefetch":
      case "notRefetching":
      case "noAuth":
        this.tokenConfirmationAttempts = 0;
        break;
    }
    this.authState.state === "waitingForScheduledRefetch" && (clearTimeout(this.authState.refetchTokenTimeoutId), this.syncState.markAuthCompletion()), this.authState = e;
  }
  decodeToken(e) {
    try {
      return Ot(e);
    } catch (t) {
      return this._logVerbose(
        `Error decoding token: ${t instanceof Error ? t.message : "Unknown error"}`
      ), null;
    }
  }
  _logVerbose(e) {
    this.logger.logVerbose(`${e} [v${this.configVersion}]`);
  }
}
const gi = [
  "convexClientConstructed",
  "convexWebSocketOpen",
  "convexFirstMessageReceived"
];
function bi(r, e) {
  const t = { sessionId: e };
  typeof performance > "u" || !performance.mark || performance.mark(r, { detail: t });
}
function mi(r) {
  let e = r.name.slice(6);
  return e = e.charAt(0).toLowerCase() + e.slice(1), {
    name: e,
    startTime: r.startTime
  };
}
function yi(r) {
  if (typeof performance > "u" || !performance.getEntriesByName)
    return [];
  const e = [];
  for (const t of gi) {
    const i = performance.getEntriesByName(t).filter((o) => o.entryType === "mark").filter((o) => o.detail.sessionId === r);
    e.push(...i);
  }
  return e.map(mi);
}
var vi = Object.defineProperty, wi = (r, e, t) => e in r ? vi(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, b = (r, e, t) => wi(r, typeof e != "symbol" ? e + "" : e, t);
class ki {
  /**
   * @param address - The url of your Convex deployment, often provided
   * by an environment variable. E.g. `https://small-mouse-123.convex.cloud`.
   * @param onTransition - A callback receiving an array of query tokens
   * corresponding to query results that have changed -- additional handlers
   * can be added via `addOnTransitionHandler`.
   * @param options - See {@link BaseConvexClientOptions} for a full description.
   */
  constructor(e, t, i) {
    if (b(this, "address"), b(this, "state"), b(this, "requestManager"), b(this, "webSocketManager"), b(this, "authenticationManager"), b(this, "remoteQuerySet"), b(this, "optimisticQueryResults"), b(this, "_transitionHandlerCounter", 0), b(this, "_nextRequestId"), b(this, "_onTransitionFns", /* @__PURE__ */ new Map()), b(this, "_sessionId"), b(this, "firstMessageReceived", !1), b(this, "debug"), b(this, "logger"), b(this, "maxObservedTimestamp"), b(this, "connectionStateSubscribers", /* @__PURE__ */ new Map()), b(this, "nextConnectionStateSubscriberId", 0), b(this, "_lastPublishedConnectionState"), b(this, "markConnectionStateDirty", () => {
      Promise.resolve().then(() => {
        const h = this.connectionState();
        if (JSON.stringify(h) !== JSON.stringify(this._lastPublishedConnectionState)) {
          this._lastPublishedConnectionState = h;
          for (const p of this.connectionStateSubscribers.values())
            p(h);
        }
      });
    }), b(this, "mark", (h) => {
      this.debug && bi(h, this.sessionId);
    }), typeof e == "object")
      throw new Error(
        "Passing a ClientConfig object is no longer supported. Pass the URL of the Convex deployment as a string directly."
      );
    i?.skipConvexDeploymentUrlCheck !== !0 && St(e), i = { ...i };
    const o = i.authRefreshTokenLeewaySeconds ?? 2;
    let s = i.webSocketConstructor;
    if (!s && typeof WebSocket > "u")
      throw new Error(
        "No WebSocket global variable defined! To use Convex in an environment without WebSocket try the HTTP client: https://docs.convex.dev/api/classes/browser.ConvexHttpClient"
      );
    s = s || WebSocket, this.debug = i.reportDebugInfoToConvex ?? !1, this.address = e, this.logger = i.logger === !1 ? Rr({ verbose: i.verbose ?? !1 }) : i.logger !== !0 && i.logger ? i.logger : Ar({ verbose: i.verbose ?? !1 });
    const n = e.search("://");
    if (n === -1)
      throw new Error("Provided address was not an absolute URL.");
    const c = e.substring(n + 3), a = e.substring(0, n);
    let l;
    if (a === "http")
      l = "ws";
    else if (a === "https")
      l = "wss";
    else
      throw new Error(`Unknown parent protocol ${a}`);
    const d = `${l}://${c}/api/${et}/sync`;
    this.state = new Or(), this.remoteQuerySet = new lt(
      (h) => this.state.queryPath(h),
      this.logger
    ), this.requestManager = new Nr(
      this.logger,
      this.markConnectionStateDirty
    );
    const u = () => {
      this.webSocketManager.pause(), this.state.pause();
    };
    this.authenticationManager = new fi(
      this.state,
      {
        authenticate: (h) => {
          const p = this.state.setAuth(h);
          return this.webSocketManager.sendMessage(p), p.baseVersion;
        },
        stopSocket: () => this.webSocketManager.stop(),
        tryRestartSocket: () => this.webSocketManager.tryRestart(),
        pauseSocket: u,
        resumeSocket: () => this.webSocketManager.resume(),
        clearAuth: () => {
          this.clearAuth();
        }
      },
      {
        logger: this.logger,
        refreshTokenLeewaySeconds: o
      }
    ), this.optimisticQueryResults = new Dr(), this.addOnTransitionHandler((h) => {
      t(h.queries.map((p) => p.token));
    }), this._nextRequestId = 0, this._sessionId = ai();
    const { unsavedChangesWarning: f } = i;
    if (typeof window > "u" || typeof window.addEventListener > "u") {
      if (f === !0)
        throw new Error(
          "unsavedChangesWarning requested, but window.addEventListener not found! Remove {unsavedChangesWarning: true} from Convex client options."
        );
    } else f !== !1 && window.addEventListener("beforeunload", (h) => {
      if (this.requestManager.hasIncompleteRequests()) {
        h.preventDefault();
        const p = "Are you sure you want to leave? Your changes may not be saved.";
        return (h || window.event).returnValue = p, p;
      }
    });
    this.webSocketManager = new ni(
      d,
      {
        onOpen: (h) => {
          this.mark("convexWebSocketOpen"), this.webSocketManager.sendMessage({
            ...h,
            type: "Connect",
            sessionId: this._sessionId,
            maxObservedTimestamp: this.maxObservedTimestamp
          });
          const p = new Set(
            this.remoteQuerySet.remoteQueryResults().keys()
          );
          this.remoteQuerySet = new lt(
            (we) => this.state.queryPath(we),
            this.logger
          );
          const [M, Ue] = this.state.restart(
            p
          );
          Ue && this.webSocketManager.sendMessage(Ue), this.webSocketManager.sendMessage(M);
          for (const we of this.requestManager.restart())
            this.webSocketManager.sendMessage(we);
        },
        onResume: () => {
          const [h, p] = this.state.resume();
          p && this.webSocketManager.sendMessage(p), h && this.webSocketManager.sendMessage(h);
          for (const M of this.requestManager.resume())
            this.webSocketManager.sendMessage(M);
        },
        onMessage: (h) => {
          switch (this.firstMessageReceived || (this.firstMessageReceived = !0, this.mark("convexFirstMessageReceived"), this.reportMarks()), h.type) {
            case "Transition": {
              this.observedTimestamp(h.endVersion.ts), this.authenticationManager.onTransition(h), this.remoteQuerySet.transition(h), this.state.transition(h);
              const p = this.requestManager.removeCompleted(
                this.remoteQuerySet.timestamp()
              );
              this.notifyOnQueryResultChanges(p);
              break;
            }
            case "MutationResponse": {
              h.success && this.observedTimestamp(h.ts);
              const p = this.requestManager.onResponse(h);
              p !== null && this.notifyOnQueryResultChanges(
                /* @__PURE__ */ new Map([
                  [
                    p.requestId,
                    p.result
                  ]
                ])
              );
              break;
            }
            case "ActionResponse": {
              this.requestManager.onResponse(h);
              break;
            }
            case "AuthError": {
              this.authenticationManager.onAuthError(h);
              break;
            }
            case "FatalError": {
              const p = Er(this.logger, h.error);
              throw this.webSocketManager.terminate(), p;
            }
          }
          return {
            hasSyncedPastLastReconnect: this.hasSyncedPastLastReconnect()
          };
        },
        onServerDisconnectError: i.onServerDisconnectError
      },
      s,
      this.logger,
      this.markConnectionStateDirty,
      this.debug
    ), this.mark("convexClientConstructed"), i.expectAuth && u();
  }
  /**
   * Return true if there is outstanding work from prior to the time of the most recent restart.
   * This indicates that the client has not proven itself to have gotten past the issue that
   * potentially led to the restart. Use this to influence when to reset backoff after a failure.
   */
  hasSyncedPastLastReconnect() {
    return this.requestManager.hasSyncedPastLastReconnect() || this.state.hasSyncedPastLastReconnect();
  }
  observedTimestamp(e) {
    (this.maxObservedTimestamp === void 0 || this.maxObservedTimestamp.lessThanOrEqual(e)) && (this.maxObservedTimestamp = e);
  }
  getMaxObservedTimestamp() {
    return this.maxObservedTimestamp;
  }
  /**
   * Compute the current query results based on the remoteQuerySet and the
   * current optimistic updates and call `onTransition` for all the changed
   * queries.
   *
   * @param completedMutations - A set of mutation IDs whose optimistic updates
   * are no longer needed.
   */
  notifyOnQueryResultChanges(e) {
    const t = this.remoteQuerySet.remoteQueryResults(), i = /* @__PURE__ */ new Map();
    for (const [s, n] of t) {
      const c = this.state.queryToken(s);
      if (c !== null) {
        const a = {
          result: n,
          udfPath: this.state.queryPath(s),
          args: this.state.queryArgs(s)
        };
        i.set(c, a);
      }
    }
    const o = this.optimisticQueryResults.ingestQueryResultsFromServer(
      i,
      new Set(e.keys())
    );
    this.handleTransition({
      queries: o.map((s) => {
        const n = this.optimisticQueryResults.rawQueryResult(s);
        return {
          token: s,
          modification: {
            kind: "Updated",
            result: n
          }
        };
      }),
      reflectedMutations: Array.from(e).map(
        ([s, n]) => ({
          requestId: s,
          result: n
        })
      ),
      timestamp: this.remoteQuerySet.timestamp()
    });
  }
  handleTransition(e) {
    for (const t of this._onTransitionFns.values())
      t(e);
  }
  /**
   * Add a handler that will be called on a transition.
   *
   * Any external side effects (e.g. setting React state) should be handled here.
   *
   * @param fn
   *
   * @returns
   */
  addOnTransitionHandler(e) {
    const t = this._transitionHandlerCounter++;
    return this._onTransitionFns.set(t, e), () => this._onTransitionFns.delete(t);
  }
  /**
   * Get the current JWT auth token and decoded claims.
   */
  getCurrentAuthClaims() {
    const e = this.state.getAuth();
    let t = {};
    if (e && e.tokenType === "User")
      try {
        t = e ? Ot(e.value) : {};
      } catch {
        t = {};
      }
    else
      return;
    return { token: e.value, decoded: t };
  }
  /**
   * Set the authentication token to be used for subsequent queries and mutations.
   * `fetchToken` will be called automatically again if a token expires.
   * `fetchToken` should return `null` if the token cannot be retrieved, for example
   * when the user's rights were permanently revoked.
   * @param fetchToken - an async function returning the JWT-encoded OpenID Connect Identity Token
   * @param onChange - a callback that will be called when the authentication status changes
   */
  setAuth(e, t) {
    this.authenticationManager.setConfig(e, t);
  }
  hasAuth() {
    return this.state.hasAuth();
  }
  /** @internal */
  setAdminAuth(e, t) {
    const i = this.state.setAdminAuth(e, t);
    this.webSocketManager.sendMessage(i);
  }
  clearAuth() {
    const e = this.state.clearAuth();
    this.webSocketManager.sendMessage(e);
  }
  /**
     * Subscribe to a query function.
     *
     * Whenever this query's result changes, the `onTransition` callback
     * passed into the constructor will be called.
     *
     * @param name - The name of the query.
     * @param args - An arguments object for the query. If this is omitted, the
     * arguments will be `{}`.
     * @param options - A {@link SubscribeOptions} options object for this query.
  
     * @returns An object containing a {@link QueryToken} corresponding to this
     * query and an `unsubscribe` callback.
     */
  subscribe(e, t, i) {
    const o = T(t), { modification: s, queryToken: n, unsubscribe: c } = this.state.subscribe(
      e,
      o,
      i?.journal,
      i?.componentPath
    );
    return s !== null && this.webSocketManager.sendMessage(s), {
      queryToken: n,
      unsubscribe: () => {
        const a = c();
        a && this.webSocketManager.sendMessage(a);
      }
    };
  }
  /**
   * A query result based only on the current, local state.
   *
   * The only way this will return a value is if we're already subscribed to the
   * query or its value has been set optimistically.
   */
  localQueryResult(e, t) {
    const i = T(t), o = O(e, i);
    return this.optimisticQueryResults.queryResult(o);
  }
  /**
   * Get query result by query token based on current, local state
   *
   * The only way this will return a value is if we're already subscribed to the
   * query or its value has been set optimistically.
   *
   * @internal
   */
  localQueryResultByToken(e) {
    return this.optimisticQueryResults.queryResult(e);
  }
  /**
   * Whether local query result is available for a token.
   *
   * This method does not throw if the result is an error.
   *
   * @internal
   */
  hasLocalQueryResultByToken(e) {
    return this.optimisticQueryResults.hasQueryResult(e);
  }
  /**
   * @internal
   */
  localQueryLogs(e, t) {
    const i = T(t), o = O(e, i);
    return this.optimisticQueryResults.queryLogs(o);
  }
  /**
   * Retrieve the current {@link QueryJournal} for this query function.
   *
   * If we have not yet received a result for this query, this will be `undefined`.
   *
   * @param name - The name of the query.
   * @param args - The arguments object for this query.
   * @returns The query's {@link QueryJournal} or `undefined`.
   */
  queryJournal(e, t) {
    const i = T(t), o = O(e, i);
    return this.state.queryJournal(o);
  }
  /**
   * Get the current {@link ConnectionState} between the client and the Convex
   * backend.
   *
   * @returns The {@link ConnectionState} with the Convex backend.
   */
  connectionState() {
    const e = this.webSocketManager.connectionState();
    return {
      hasInflightRequests: this.requestManager.hasInflightRequests(),
      isWebSocketConnected: e.isConnected,
      hasEverConnected: e.hasEverConnected,
      connectionCount: e.connectionCount,
      connectionRetries: e.connectionRetries,
      timeOfOldestInflightRequest: this.requestManager.timeOfOldestInflightRequest(),
      inflightMutations: this.requestManager.inflightMutations(),
      inflightActions: this.requestManager.inflightActions()
    };
  }
  /**
   * Subscribe to the {@link ConnectionState} between the client and the Convex
   * backend, calling a callback each time it changes.
   *
   * Subscribed callbacks will be called when any part of ConnectionState changes.
   * ConnectionState may grow in future versions (e.g. to provide a array of
   * inflight requests) in which case callbacks would be called more frequently.
   *
   * @returns An unsubscribe function to stop listening.
   */
  subscribeToConnectionState(e) {
    const t = this.nextConnectionStateSubscriberId++;
    return this.connectionStateSubscribers.set(t, e), () => {
      this.connectionStateSubscribers.delete(t);
    };
  }
  /**
     * Execute a mutation function.
     *
     * @param name - The name of the mutation.
     * @param args - An arguments object for the mutation. If this is omitted,
     * the arguments will be `{}`.
     * @param options - A {@link MutationOptions} options object for this mutation.
  
     * @returns - A promise of the mutation's result.
     */
  async mutation(e, t, i) {
    const o = await this.mutationInternal(e, t, i);
    if (!o.success)
      throw o.errorData !== void 0 ? Me(
        o,
        new Ee(
          U("mutation", e, o)
        )
      ) : new Error(U("mutation", e, o));
    return o.value;
  }
  /**
   * @internal
   */
  async mutationInternal(e, t, i, o) {
    const { mutationPromise: s } = this.enqueueMutation(
      e,
      t,
      i,
      o
    );
    return s;
  }
  /**
   * @internal
   */
  enqueueMutation(e, t, i, o) {
    const s = T(t);
    this.tryReportLongDisconnect();
    const n = this.nextRequestId;
    if (this._nextRequestId++, i !== void 0) {
      const d = i.optimisticUpdate;
      if (d !== void 0) {
        const u = (p) => {
          d(
            p,
            s
          ) instanceof Promise && this.logger.warn(
            "Optimistic update handler returned a Promise. Optimistic updates should be synchronous."
          );
        }, h = this.optimisticQueryResults.applyOptimisticUpdate(
          u,
          n
        ).map((p) => {
          const M = this.localQueryResultByToken(p);
          return {
            token: p,
            modification: {
              kind: "Updated",
              result: M === void 0 ? void 0 : {
                success: !0,
                value: M,
                logLines: []
              }
            }
          };
        });
        this.handleTransition({
          queries: h,
          reflectedMutations: [],
          timestamp: this.remoteQuerySet.timestamp()
        });
      }
    }
    const c = {
      type: "Mutation",
      requestId: n,
      udfPath: e,
      componentPath: o,
      args: [L(s)]
    }, a = this.webSocketManager.sendMessage(c), l = this.requestManager.request(c, a);
    return {
      requestId: n,
      mutationPromise: l
    };
  }
  /**
   * Execute an action function.
   *
   * @param name - The name of the action.
   * @param args - An arguments object for the action. If this is omitted,
   * the arguments will be `{}`.
   * @returns A promise of the action's result.
   */
  async action(e, t) {
    const i = await this.actionInternal(e, t);
    if (!i.success)
      throw i.errorData !== void 0 ? Me(
        i,
        new Ee(U("action", e, i))
      ) : new Error(U("action", e, i));
    return i.value;
  }
  /**
   * @internal
   */
  async actionInternal(e, t, i) {
    const o = T(t), s = this.nextRequestId;
    this._nextRequestId++, this.tryReportLongDisconnect();
    const n = {
      type: "Action",
      requestId: s,
      udfPath: e,
      componentPath: i,
      args: [L(o)]
    }, c = this.webSocketManager.sendMessage(n);
    return this.requestManager.request(n, c);
  }
  /**
   * Close any network handles associated with this client and stop all subscriptions.
   *
   * Call this method when you're done with an {@link BaseConvexClient} to
   * dispose of its sockets and resources.
   *
   * @returns A `Promise` fulfilled when the connection has been completely closed.
   */
  async close() {
    return this.authenticationManager.stop(), this.webSocketManager.terminate();
  }
  /**
   * Return the address for this client, useful for creating a new client.
   *
   * Not guaranteed to match the address with which this client was constructed:
   * it may be canonicalized.
   */
  get url() {
    return this.address;
  }
  /**
   * @internal
   */
  get nextRequestId() {
    return this._nextRequestId;
  }
  /**
   * @internal
   */
  get sessionId() {
    return this._sessionId;
  }
  /**
   * Reports performance marks to the server. This should only be called when
   * we have a functional websocket.
   */
  reportMarks() {
    if (this.debug) {
      const e = yi(this.sessionId);
      this.webSocketManager.sendMessage({
        type: "Event",
        eventType: "ClientConnect",
        event: e
      });
    }
  }
  tryReportLongDisconnect() {
    if (!this.debug)
      return;
    const e = this.connectionState().timeOfOldestInflightRequest;
    if (e === null || Date.now() - e.getTime() <= 60 * 1e3)
      return;
    const t = `${this.address}/api/debug_event`;
    fetch(t, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Convex-Client": `npm-${et}`
      },
      body: JSON.stringify({ event: "LongWebsocketDisconnect" })
    }).then((i) => {
      i.ok || this.logger.warn(
        "Analytics request failed with response:",
        i.body
      );
    }).catch((i) => {
      this.logger.warn("Analytics response failed with error:", i);
    });
  }
}
function Te(r) {
  if (typeof r != "object" || r === null || !Array.isArray(r.page) || typeof r.isDone != "boolean" || typeof r.continueCursor != "string")
    throw new Error(`Not a valid paginated query result: ${r?.toString()}`);
  return r;
}
var xi = Object.defineProperty, Si = (r, e, t) => e in r ? xi(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, pt = (r, e, t) => Si(r, typeof e != "symbol" ? e + "" : e, t);
class Ci {
  constructor(e, t) {
    this.client = e, this.onTransition = t, pt(this, "paginatedQuerySet", /* @__PURE__ */ new Map()), pt(this, "lastTransitionTs"), this.lastTransitionTs = y.fromNumber(0), this.client.addOnTransitionHandler(
      (i) => this.onBaseTransition(i)
    );
  }
  /**
   * Subscribe to a paginated query.
   *
   * @param name - The name of the paginated query function
   * @param args - Arguments for the query (excluding paginationOpts)
   * @param options - Pagination options including initialNumItems
   * @returns Object with paginatedQueryToken and unsubscribe function
   */
  subscribe(e, t, i) {
    const o = N(e), s = nt(
      o,
      t,
      i
    ), n = () => this.removePaginatedQuerySubscriber(s), c = this.paginatedQuerySet.get(s);
    return c ? (c.numSubscribers += 1, {
      paginatedQueryToken: s,
      unsubscribe: n
    }) : (this.paginatedQuerySet.set(s, {
      token: s,
      canonicalizedUdfPath: o,
      args: t,
      numSubscribers: 1,
      options: { initialNumItems: i.initialNumItems },
      nextPageKey: 0,
      pageKeys: [],
      pageKeyToQuery: /* @__PURE__ */ new Map(),
      ongoingSplits: /* @__PURE__ */ new Map(),
      skip: !1,
      id: i.id
    }), this.addPageToPaginatedQuery(s, null, i.initialNumItems), {
      paginatedQueryToken: s,
      unsubscribe: n
    });
  }
  /**
   * Get current results for a paginated query based on local state.
   *
   * Throws an error when one of the pages has errored.
   */
  localQueryResult(e, t, i) {
    const o = N(e), s = nt(
      o,
      t,
      i
    );
    return this.localQueryResultByToken(s);
  }
  /**
   * @internal
   */
  localQueryResultByToken(e) {
    const t = this.paginatedQuerySet.get(e);
    if (!t)
      return;
    const i = this.activePageQueryTokens(t);
    if (i.length === 0)
      return {
        results: [],
        status: "LoadingFirstPage",
        loadMore: (a) => this.loadMoreOfPaginatedQuery(e, a)
      };
    let o = [], s = !1, n = !1;
    for (const a of i) {
      const l = this.client.localQueryResultByToken(a);
      if (l === void 0) {
        s = !0, n = !1;
        continue;
      }
      const d = Te(l);
      o = o.concat(d.page), n = !!d.isDone;
    }
    let c;
    return s ? c = o.length === 0 ? "LoadingFirstPage" : "LoadingMore" : n ? c = "Exhausted" : c = "CanLoadMore", {
      results: o,
      status: c,
      loadMore: (a) => this.loadMoreOfPaginatedQuery(e, a)
    };
  }
  onBaseTransition(e) {
    const t = e.queries.map((n) => n.token), i = this.queriesContainingTokens(t);
    let o = [];
    i.length > 0 && (this.processPaginatedQuerySplits(
      i,
      (n) => this.client.localQueryResultByToken(n)
    ), o = i.map((n) => ({
      token: n,
      modification: {
        kind: "Updated",
        result: this.localQueryResultByToken(n)
      }
    })));
    const s = {
      ...e,
      paginatedQueries: o
    };
    this.onTransition(s);
  }
  /**
   * Load more items for a paginated query.
   *
   * This *always* causes a transition, the status of the query
   * has probably changed from "CanLoadMore" to "LoadingMore".
   * Data might have changed too: maybe a subscription to this page
   * query already exists (unlikely but possible) or this page query
   * has an optimistic update providing some initial data.
   *
   * @internal
   */
  loadMoreOfPaginatedQuery(e, t) {
    this.mustGetPaginatedQuery(e);
    const i = this.queryTokenForLastPageOfPaginatedQuery(e), o = this.client.localQueryResultByToken(i);
    if (!o)
      return !1;
    const s = Te(o);
    if (s.isDone)
      return !1;
    this.addPageToPaginatedQuery(
      e,
      s.continueCursor,
      t
    );
    const n = {
      timestamp: this.lastTransitionTs,
      reflectedMutations: [],
      queries: [],
      paginatedQueries: [
        {
          token: e,
          modification: {
            kind: "Updated",
            result: this.localQueryResultByToken(e)
          }
        }
      ]
    };
    return this.onTransition(n), !0;
  }
  /**
   * @internal
   */
  queriesContainingTokens(e) {
    if (e.length === 0)
      return [];
    const t = [], i = new Set(e);
    for (const [o, s] of this.paginatedQuerySet)
      for (const n of this.allQueryTokens(s))
        if (i.has(n)) {
          t.push(o);
          break;
        }
    return t;
  }
  /**
   * @internal
   */
  processPaginatedQuerySplits(e, t) {
    for (const i of e) {
      const o = this.mustGetPaginatedQuery(i), { ongoingSplits: s, pageKeyToQuery: n, pageKeys: c } = o;
      for (const [a, [l, d]] of s)
        t(n.get(l).queryToken) !== void 0 && t(n.get(d).queryToken) !== void 0 && this.completePaginatedQuerySplit(
          o,
          a,
          l,
          d
        );
      for (const a of c) {
        if (s.has(a))
          continue;
        const l = n.get(a).queryToken, d = t(l);
        if (!d)
          continue;
        const u = Te(d);
        u.splitCursor && (u.pageStatus === "SplitRecommended" || u.pageStatus === "SplitRequired" || // This client-driven page splitting condition will change in the future.
        u.page.length > o.options.initialNumItems * 2) && this.splitPaginatedQueryPage(
          o,
          a,
          u.splitCursor,
          // we just checked
          u.continueCursor
        );
      }
    }
  }
  splitPaginatedQueryPage(e, t, i, o) {
    const s = e.nextPageKey++, n = e.nextPageKey++, c = {
      cursor: o,
      numItems: e.options.initialNumItems,
      id: e.id
    }, a = this.client.subscribe(
      e.canonicalizedUdfPath,
      {
        ...e.args,
        paginationOpts: {
          ...c,
          cursor: null,
          // Start from beginning for first split
          endCursor: i
        }
      }
    );
    e.pageKeyToQuery.set(s, a);
    const l = this.client.subscribe(
      e.canonicalizedUdfPath,
      {
        ...e.args,
        paginationOpts: {
          ...c,
          cursor: i,
          endCursor: o
        }
      }
    );
    e.pageKeyToQuery.set(n, l), e.ongoingSplits.set(t, [s, n]);
  }
  /**
   * @internal
   */
  addPageToPaginatedQuery(e, t, i) {
    const o = this.mustGetPaginatedQuery(e), s = o.nextPageKey++, n = {
      cursor: t,
      numItems: i,
      id: o.id
    }, c = {
      ...o.args,
      paginationOpts: n
    }, a = this.client.subscribe(
      o.canonicalizedUdfPath,
      c
    );
    return o.pageKeys.push(s), o.pageKeyToQuery.set(s, a), a;
  }
  removePaginatedQuerySubscriber(e) {
    const t = this.paginatedQuerySet.get(e);
    if (t && (t.numSubscribers -= 1, !(t.numSubscribers > 0))) {
      for (const i of t.pageKeyToQuery.values())
        i.unsubscribe();
      this.paginatedQuerySet.delete(e);
    }
  }
  completePaginatedQuerySplit(e, t, i, o) {
    const s = e.pageKeyToQuery.get(t);
    e.pageKeyToQuery.delete(t);
    const n = e.pageKeys.indexOf(t);
    e.pageKeys.splice(n, 1, i, o), e.ongoingSplits.delete(t), s.unsubscribe();
  }
  /** The query tokens for all active pages, in result order */
  activePageQueryTokens(e) {
    return e.pageKeys.map(
      (t) => e.pageKeyToQuery.get(t).queryToken
    );
  }
  allQueryTokens(e) {
    return Array.from(e.pageKeyToQuery.values()).map(
      (t) => t.queryToken
    );
  }
  queryTokenForLastPageOfPaginatedQuery(e) {
    const t = this.mustGetPaginatedQuery(e), i = t.pageKeys[t.pageKeys.length - 1];
    if (i === void 0)
      throw new Error(`No pages for paginated query ${e}`);
    return t.pageKeyToQuery.get(i).queryToken;
  }
  mustGetPaginatedQuery(e) {
    const t = this.paginatedQuerySet.get(e);
    if (!t)
      throw new Error("paginated query no longer exists for token " + e);
    return t;
  }
}
var _i = Object.defineProperty, $i = (r, e, t) => e in r ? _i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, V = (r, e, t) => $i(r, typeof e != "symbol" ? e + "" : e, t);
class Ti {
  /**
   * Construct a client and immediately initiate a WebSocket connection to the passed address.
   *
   * @public
   */
  constructor(e, t = {}) {
    V(this, "listeners"), V(this, "_client"), V(this, "_paginatedClient"), V(this, "callNewListenersWithCurrentValuesTimer"), V(this, "_closed"), V(this, "_disabled"), t.skipConvexDeploymentUrlCheck !== !0 && St(e);
    const { disabled: i, ...o } = t;
    this._closed = !1, this._disabled = !!i, typeof window > "u" && !("unsavedChangesWarning" in o) && (o.unsavedChangesWarning = !1), this.disabled || (this._client = new ki(
      e,
      () => {
      },
      // NOP, let the paginated query client do it all
      o
    ), this._paginatedClient = new Ci(
      this._client,
      (s) => this._transition(s)
    )), this.listeners = /* @__PURE__ */ new Set();
  }
  /**
   * Once closed no registered callbacks will fire again.
   */
  get closed() {
    return this._closed;
  }
  get client() {
    if (this._client) return this._client;
    throw new Error("ConvexClient is disabled");
  }
  /**
   * @internal
   */
  get paginatedClient() {
    if (this._paginatedClient) return this._paginatedClient;
    throw new Error("ConvexClient is disabled");
  }
  get disabled() {
    return this._disabled;
  }
  /**
   * Call a callback whenever a new result for a query is received. The callback
   * will run soon after being registered if a result for the query is already
   * in memory.
   *
   * The return value is an {@link Unsubscribe} object which is both a function
   * an an object with properties. Both of the patterns below work with this object:
   *
   *```ts
   * // call the return value as a function
   * const unsubscribe = client.onUpdate(api.messages.list, {}, (messages) => {
   *   console.log(messages);
   * });
   * unsubscribe();
   *
   * // unpack the return value into its properties
   * const {
   *   getCurrentValue,
   *   unsubscribe,
   * } = client.onUpdate(api.messages.list, {}, (messages) => {
   *   console.log(messages);
   * });
   *```
   *
   * @param query - A {@link server.FunctionReference} for the public query to run.
   * @param args - The arguments to run the query with.
   * @param callback - Function to call when the query result updates.
   * @param onError - Function to call when the query result updates with an error.
   * If not provided, errors will be thrown instead of calling the callback.
   *
   * @return an {@link Unsubscribe} function to stop calling the onUpdate function.
   */
  onUpdate(e, t, i, o) {
    if (this.disabled)
      return this.createDisabledUnsubscribe();
    const { queryToken: s, unsubscribe: n } = this.client.subscribe(
      $(e),
      t
    ), c = {
      queryToken: s,
      callback: i,
      onError: o,
      unsubscribe: n,
      hasEverRun: !1,
      query: e,
      args: t,
      paginationOptions: void 0
    };
    this.listeners.add(c), this.queryResultReady(s) && this.callNewListenersWithCurrentValuesTimer === void 0 && (this.callNewListenersWithCurrentValuesTimer = setTimeout(
      () => this.callNewListenersWithCurrentValues(),
      0
    ));
    const a = {
      unsubscribe: () => {
        this.closed || (this.listeners.delete(c), n());
      },
      getCurrentValue: () => this.client.localQueryResultByToken(s),
      getQueryLogs: () => this.client.localQueryLogs(s)
    }, l = a.unsubscribe;
    return Object.assign(l, a), l;
  }
  /**
   * Call a callback whenever a new result for a paginated query is received.
   *
   * This is an experimental preview: the final API may change.
   * In particular, caching behavior, page splitting, and required paginated query options
   * may change.
   *
   * @param query - A {@link server.FunctionReference} for the public query to run.
   * @param args - The arguments to run the query with.
   * @param options - Options for the paginated query including initialNumItems and id.
   * @param callback - Function to call when the query result updates.
   * @param onError - Function to call when the query result updates with an error.
   *
   * @return an {@link Unsubscribe} function to stop calling the callback.
   */
  onPaginatedUpdate_experimental(e, t, i, o, s) {
    if (this.disabled)
      return this.createDisabledUnsubscribe();
    const n = {
      initialNumItems: i.initialNumItems,
      id: -1
    }, { paginatedQueryToken: c, unsubscribe: a } = this.paginatedClient.subscribe(
      $(e),
      t,
      // Simple client doesn't use IDs, there's no expectation that these queries remain separate.
      n
    ), l = {
      queryToken: c,
      callback: o,
      onError: s,
      unsubscribe: a,
      hasEverRun: !1,
      query: e,
      args: t,
      paginationOptions: n
    };
    this.listeners.add(l), this.paginatedClient.localQueryResultByToken(c) && this.callNewListenersWithCurrentValuesTimer === void 0 && (this.callNewListenersWithCurrentValuesTimer = setTimeout(
      () => this.callNewListenersWithCurrentValues(),
      0
    ));
    const d = {
      unsubscribe: () => {
        this.closed || (this.listeners.delete(l), a());
      },
      getCurrentValue: () => this.paginatedClient.localQueryResult(
        $(e),
        t,
        n
      ),
      getQueryLogs: () => []
      // Paginated queries don't aggregate their logs
    }, u = d.unsubscribe;
    return Object.assign(u, d), u;
  }
  // Run all callbacks that have never been run before if they have a query
  // result available now.
  callNewListenersWithCurrentValues() {
    this.callNewListenersWithCurrentValuesTimer = void 0, this._transition({ queries: [], paginatedQueries: [] }, !0);
  }
  queryResultReady(e) {
    return this.client.hasLocalQueryResultByToken(e);
  }
  createDisabledUnsubscribe() {
    const e = (() => {
    });
    return Object.assign(e, {
      unsubscribe: e,
      getCurrentValue: () => {
      },
      getQueryLogs: () => {
      }
    }), e;
  }
  async close() {
    if (!this.disabled)
      return this.listeners.clear(), this._closed = !0, this._paginatedClient && (this._paginatedClient = void 0), this.client.close();
  }
  /**
   * Get the current JWT auth token and decoded claims.
   */
  getAuth() {
    if (!this.disabled)
      return this.client.getCurrentAuthClaims();
  }
  /**
   * Set the authentication token to be used for subsequent queries and mutations.
   * `fetchToken` will be called automatically again if a token expires.
   * `fetchToken` should return `null` if the token cannot be retrieved, for example
   * when the user's rights were permanently revoked.
   * @param fetchToken - an async function returning the JWT (typically an OpenID Connect Identity Token)
   * @param onChange - a callback that will be called when the authentication status changes
   */
  setAuth(e, t) {
    this.disabled || this.client.setAuth(
      e,
      t ?? (() => {
      })
    );
  }
  /**
   * @internal
   */
  setAdminAuth(e, t) {
    if (this.closed)
      throw new Error("ConvexClient has already been closed.");
    this.disabled || this.client.setAdminAuth(e, t);
  }
  /**
   * @internal
   */
  _transition({
    queries: e,
    paginatedQueries: t
  }, i = !1) {
    const o = [
      ...e.map((s) => s.token),
      ...t.map((s) => s.token)
    ];
    for (const s of this.listeners) {
      const { callback: n, queryToken: c, onError: a, hasEverRun: l } = s, d = Mr(c), u = d ? !!this.paginatedClient.localQueryResultByToken(c) : this.client.hasLocalQueryResultByToken(c);
      if (o.includes(c) || i && !l && u) {
        s.hasEverRun = !0;
        let f;
        try {
          d ? f = this.paginatedClient.localQueryResultByToken(c) : f = this.client.localQueryResultByToken(c);
        } catch (h) {
          if (!(h instanceof Error)) throw h;
          a ? a(
            h,
            "Second argument to onUpdate onError is reserved for later use"
          ) : Promise.reject(h);
          continue;
        }
        n(
          f,
          "Second argument to onUpdate callback is reserved for later use"
        );
      }
    }
  }
  /**
   * Execute a mutation function.
   *
   * @param mutation - A {@link server.FunctionReference} for the public mutation
   * to run.
   * @param args - An arguments object for the mutation.
   * @param options - A {@link MutationOptions} options object for the mutation.
   * @returns A promise of the mutation's result.
   */
  async mutation(e, t, i) {
    if (this.disabled) throw new Error("ConvexClient is disabled");
    return await this.client.mutation($(e), t, i);
  }
  /**
   * Execute an action function.
   *
   * @param action - A {@link server.FunctionReference} for the public action
   * to run.
   * @param args - An arguments object for the action.
   * @returns A promise of the action's result.
   */
  async action(e, t) {
    if (this.disabled) throw new Error("ConvexClient is disabled");
    return await this.client.action($(e), t);
  }
  /**
   * Fetch a query result once.
   *
   * @param query - A {@link server.FunctionReference} for the public query
   * to run.
   * @param args - An arguments object for the query.
   * @returns A promise of the query's result.
   */
  async query(e, t) {
    if (this.disabled) throw new Error("ConvexClient is disabled");
    const i = this.client.localQueryResult($(e), t);
    return i !== void 0 ? Promise.resolve(i) : new Promise((o, s) => {
      const { unsubscribe: n } = this.onUpdate(
        e,
        t,
        (c) => {
          n(), o(c);
        },
        (c) => {
          n(), s(c);
        }
      );
    });
  }
  /**
   * Get the current {@link ConnectionState} between the client and the Convex
   * backend.
   *
   * @returns The {@link ConnectionState} with the Convex backend.
   */
  connectionState() {
    if (this.disabled) throw new Error("ConvexClient is disabled");
    return this.client.connectionState();
  }
  /**
   * Subscribe to the {@link ConnectionState} between the client and the Convex
   * backend, calling a callback each time it changes.
   *
   * Subscribed callbacks will be called when any part of ConnectionState changes.
   * ConnectionState may grow in future versions (e.g. to provide a array of
   * inflight requests) in which case callbacks would be called more frequently.
   *
   * @returns An unsubscribe function to stop listening.
   */
  subscribeToConnectionState(e) {
    return this.disabled ? () => {
    } : this.client.subscribeToConnectionState(e);
  }
}
const ft = new Ti(
  "https://disciplined-hawk-692.convex.cloud"
);
function It(r, e) {
  const t = {
    get(i, o) {
      if (typeof o == "string") {
        const s = [...e, o];
        return It(r, s);
      } else if (o === Mt) {
        if (e.length < 1) {
          const s = [r, ...e].join(".");
          throw new Error(
            `API path is expected to be of the form \`${r}.childComponent.functionName\`. Found: \`${s}\``
          );
        }
        return "_reference/childComponent/" + e.join("/");
      } else
        return;
    }
  };
  return new Proxy({}, t);
}
const Ai = () => It("components", []), gt = Br;
Ai();
const Ri = `@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-space-x-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-black:#000;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--font-weight-semibold:600;--font-weight-bold:700;--font-weight-black:900;--tracking-tight:-.025em;--tracking-wider:.05em;--leading-relaxed:1.625;--radius-lg:.5rem;--radius-xl:.75rem;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}:where(:root),:root:has(input.theme-controller[value=light]:checked),[data-theme=light]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(98% 0 0);--color-base-300:oklch(95% 0 0);--color-base-content:oklch(21% .006 285.885);--color-primary:oklch(45% .24 277.023);--color-primary-content:oklch(93% .034 272.788);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}@media(prefers-color-scheme:dark){:root:not([data-theme]){color-scheme:dark;--color-base-100:oklch(25.33% .016 252.42);--color-base-200:oklch(23.26% .014 253.1);--color-base-300:oklch(21.15% .012 254.09);--color-base-content:oklch(97.807% .029 256.847);--color-primary:oklch(58% .233 277.117);--color-primary-content:oklch(96% .018 272.314);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}}:root:has(input.theme-controller[value=light]:checked),[data-theme=light]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(98% 0 0);--color-base-300:oklch(95% 0 0);--color-base-content:oklch(21% .006 285.885);--color-primary:oklch(45% .24 277.023);--color-primary-content:oklch(93% .034 272.788);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}:root:has(input.theme-controller[value=dark]:checked),[data-theme=dark]{color-scheme:dark;--color-base-100:oklch(25.33% .016 252.42);--color-base-200:oklch(23.26% .014 253.1);--color-base-300:oklch(21.15% .012 254.09);--color-base-content:oklch(97.807% .029 256.847);--color-primary:oklch(58% .233 277.117);--color-primary-content:oklch(96% .018 272.314);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E");scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}:root:not(span){overflow:var(--page-overflow)}:root{background:var(--page-scroll-bg,var(--root-bg));--page-scroll-bg-on:linear-gradient(var(--root-bg,#0000),var(--root-bg,#0000))var(--root-bg,#0000)}@supports (color:color-mix(in lab,red,red)){:root{--page-scroll-bg-on:linear-gradient(var(--root-bg,#0000),var(--root-bg,#0000))color-mix(in srgb,var(--root-bg,#0000),oklch(0% 0 0) calc(var(--page-has-backdrop,0)*40%))}}:root{--page-scroll-transition-on:background-color .3s ease-out;transition:var(--page-scroll-transition);scrollbar-gutter:var(--page-scroll-gutter,unset);scrollbar-gutter:if(style(--page-has-scroll: 1): var(--page-scroll-gutter,unset); else: unset)}@keyframes set-page-has-scroll{0%,to{--page-has-scroll:1}}:root,[data-theme]{background:var(--page-scroll-bg,var(--root-bg));color:var(--color-base-content)}:where(:root,[data-theme]){--root-bg:var(--color-base-100)}@media(prefers-color-scheme:dark){:root:not([data-theme]){color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(97.466% .011 259.822);--color-base-300:oklch(93.268% .016 262.751);--color-base-content:oklch(41.886% .053 255.824);--color-primary:oklch(56.86% .255 257.57);--color-primary-content:oklch(91.372% .051 257.57);--color-secondary:oklch(42.551% .161 282.339);--color-secondary-content:oklch(88.51% .032 282.339);--color-accent:oklch(59.939% .191 335.171);--color-accent-content:oklch(11.988% .038 335.171);--color-neutral:oklch(19.616% .063 257.651);--color-neutral-content:oklch(83.923% .012 257.651);--color-info:oklch(88.127% .085 214.515);--color-info-content:oklch(17.625% .017 214.515);--color-success:oklch(80.494% .077 197.823);--color-success-content:oklch(16.098% .015 197.823);--color-warning:oklch(89.172% .045 71.47);--color-warning-content:oklch(17.834% .009 71.47);--color-error:oklch(73.092% .11 20.076);--color-error-content:oklch(14.618% .022 20.076);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}}:where(:root),:root:has(input.theme-controller[value=corporate]:checked),[data-theme=corporate]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(97.466% .011 259.822);--color-base-300:oklch(93.268% .016 262.751);--color-base-content:oklch(41.886% .053 255.824);--color-primary:oklch(56.86% .255 257.57);--color-primary-content:oklch(91.372% .051 257.57);--color-secondary:oklch(42.551% .161 282.339);--color-secondary-content:oklch(88.51% .032 282.339);--color-accent:oklch(59.939% .191 335.171);--color-accent-content:oklch(11.988% .038 335.171);--color-neutral:oklch(19.616% .063 257.651);--color-neutral-content:oklch(83.923% .012 257.651);--color-info:oklch(88.127% .085 214.515);--color-info-content:oklch(17.625% .017 214.515);--color-success:oklch(80.494% .077 197.823);--color-success-content:oklch(16.098% .015 197.823);--color-warning:oklch(89.172% .045 71.47);--color-warning-content:oklch(17.834% .009 71.47);--color-error:oklch(73.092% .11 20.076);--color-error-content:oklch(14.618% .022 20.076);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}}@layer components;@layer utilities{@layer daisyui.l1.l2.l3{:where(.btn){width:unset}.btn{cursor:pointer;text-align:center;vertical-align:middle;outline-offset:2px;webkit-user-select:none;-webkit-user-select:none;user-select:none;padding-inline:var(--btn-p);color:var(--btn-fg);--tw-prose-links:var(--btn-fg);height:var(--size);font-size:var(--fontsize,.875rem);outline-color:var(--btn-color,var(--color-base-content));background-color:var(--btn-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--btn-noise);border-width:var(--border);border-style:solid;border-color:var(--btn-border);text-shadow:0 .5px oklch(100% 0 0/calc(var(--depth)*.15));touch-action:manipulation;box-shadow:0 .5px 0 .5px oklch(100% 0 0/calc(var(--depth)*6%)) inset,var(--btn-shadow);--size:calc(var(--size-field,.25rem)*10);--btn-bg:var(--btn-color,var(--color-base-200));--btn-fg:var(--color-base-content);--btn-p:1rem;--btn-border:var(--btn-bg);border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-wrap:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.375rem;font-weight:600;transition-property:color,background-color,border-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:inline-flex}@supports (color:color-mix(in lab,red,red)){.btn{--btn-border:color-mix(in oklab,var(--btn-bg),#000 calc(var(--depth)*5%))}}.btn{--btn-shadow:0 3px 2px -2px var(--btn-bg),0 4px 3px -2px var(--btn-bg)}@supports (color:color-mix(in lab,red,red)){.btn{--btn-shadow:0 3px 2px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000),0 4px 3px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000)}}.btn{--btn-noise:var(--fx-noise)}@media(hover:hover){.btn:hover{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:hover{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}}.btn:focus-visible,.btn:has(:focus-visible){isolation:isolate;outline-width:2px;outline-style:solid}.btn:active:not(.btn-active){--btn-bg:var(--btn-color,var(--color-base-200));translate:0 .5px}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 5%)}}.btn:active:not(.btn-active){--btn-border:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.btn:active:not(.btn-active){--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0)}.btn:is(input[type=checkbox],input[type=radio]){appearance:none}.btn:is(input[type=checkbox],input[type=radio])[aria-label]:after{--tw-content:attr(aria-label);content:var(--tw-content)}.btn:where(input:checked:not(.filter .btn)){--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content);isolation:isolate}.loading{pointer-events:none;aspect-ratio:1;vertical-align:middle;width:calc(var(--size-selector,.25rem)*6);background-color:currentColor;display:inline-block;-webkit-mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");-webkit-mask-position:50%;mask-position:50%;-webkit-mask-size:100%;mask-size:100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.toast{translate:var(--toast-x,0)var(--toast-y,0);inset-inline:auto 1rem;background-color:#0000;flex-direction:column;gap:.5rem;width:max-content;max-width:calc(100vw - 2rem);display:flex;position:fixed;top:auto;bottom:1rem}@media(prefers-reduced-motion:no-preference){.toast>*{animation:.25s ease-out toast}}.input{cursor:text;border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;white-space:nowrap;width:clamp(3rem,20rem,100%);height:var(--size);font-size:max(var(--font-size,.875rem),.875rem);touch-action:manipulation;border-color:var(--input-color);box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.5rem;padding-inline:.75rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.input{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.input{--size:calc(var(--size-field,.25rem)*10);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.input:where(input){display:inline-flex}.input :where(input){appearance:none;background-color:#0000;border:none;width:100%;height:100%;display:inline-flex}.input :where(input):focus,.input :where(input):focus-within{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.input :where(input):focus,.input :where(input):focus-within{outline-offset:2px;outline:2px solid #0000}}.input :where(input[type=url]),.input :where(input[type=email]){direction:ltr}.input :where(input[type=date]){display:inline-flex}.input:focus,.input:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.input:focus,.input:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.input:focus,.input:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate}@media(pointer:coarse){@supports (-webkit-touch-callout:none){.input:focus,.input:focus-within{--font-size:1rem}}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input{cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input{color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input)::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input)::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input{box-shadow:none}.input:has(>input[disabled])>input[disabled]{cursor:not-allowed}.input::-webkit-date-and-time-value{text-align:inherit}.input[type=number]::-webkit-inner-spin-button{margin-block:-.75rem;margin-inline-end:-.75rem}.input::-webkit-calendar-picker-indicator{position:absolute;inset-inline-end:.75em}.input:has(>input[type=date]) :where(input[type=date]){webkit-appearance:none;appearance:none;display:inline-flex}.input:has(>input[type=date]) input[type=date]::-webkit-calendar-picker-indicator{cursor:pointer;width:1em;height:1em;position:absolute;inset-inline-end:.75em}.table{border-collapse:separate;--tw-border-spacing-x: 0rem ;--tw-border-spacing-y: 0rem ;width:100%;border-spacing:var(--tw-border-spacing-x)var(--tw-border-spacing-y);border-radius:var(--radius-box);text-align:left;font-size:.875rem;position:relative}.table:where(:dir(rtl),[dir=rtl],[dir=rtl] *){text-align:right}@media(hover:hover){:is(.table tr.row-hover,.table tr.row-hover:nth-child(2n)):hover{background-color:var(--color-base-200)}}.table :where(th,td){vertical-align:middle;padding-block:.75rem;padding-inline:1rem}.table :where(thead,tfoot){white-space:nowrap;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead,tfoot){color:color-mix(in oklab,var(--color-base-content)60%,transparent)}}.table :where(thead,tfoot){font-size:.875rem;font-weight:600}.table :where(tfoot tr:first-child :is(td,th)){border-top:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(tfoot tr:first-child :is(td,th)){border-top:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.table :where(.table-pin-rows thead tr){z-index:1;background-color:var(--color-base-100);position:sticky;top:0}.table :where(.table-pin-rows tfoot tr){z-index:1;background-color:var(--color-base-100);position:sticky;bottom:0}.table :where(.table-pin-cols tr th){background-color:var(--color-base-100);position:sticky;left:0;right:0}.table :where(thead tr :is(td,th),tbody tr:not(:last-child) :is(td,th)){border-bottom:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead tr :is(td,th),tbody tr:not(:last-child) :is(td,th)){border-bottom:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.chat-bubble{border-radius:var(--radius-field);background-color:var(--color-base-300);width:fit-content;color:var(--color-base-content);grid-row-end:3;min-width:2.5rem;max-width:90%;min-height:2rem;padding-block:.5rem;padding-inline:1rem;display:block;position:relative}.chat-bubble:before{background-color:inherit;content:"";width:.75rem;height:.75rem;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-image:var(--mask-chat);mask-image:var(--mask-chat);position:absolute;bottom:0;-webkit-mask-position:0 -1px;mask-position:0 -1px;-webkit-mask-size:.8125rem;mask-size:.8125rem}.avatar{vertical-align:middle;display:inline-flex;position:relative}.avatar>div{aspect-ratio:1;display:block;overflow:hidden}.avatar img{object-fit:cover;width:100%;height:100%}.card{border-radius:var(--radius-box);outline-offset:2px;outline:0 solid #0000;flex-direction:column;transition:outline .2s ease-in-out;display:flex;position:relative}.card:focus{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.card:focus{outline-offset:2px;outline:2px solid #0000}}.card:focus-visible{outline-color:currentColor}.card :where(figure:first-child){border-start-start-radius:inherit;border-start-end-radius:inherit;border-end-end-radius:unset;border-end-start-radius:unset;overflow:hidden}.card :where(figure:last-child){border-start-start-radius:unset;border-start-end-radius:unset;border-end-end-radius:inherit;border-end-start-radius:inherit;overflow:hidden}.card figure{justify-content:center;align-items:center;display:flex}.card:has(>input:is(input[type=checkbox],input[type=radio])){cursor:pointer;-webkit-user-select:none;user-select:none}.card:has(>:checked){outline:2px solid}.stats{border-radius:var(--radius-box);grid-auto-flow:column;display:inline-grid;position:relative;overflow-x:auto}.chat-header{grid-row-start:1;gap:.25rem;font-size:.6875rem;display:flex}.divider{white-space:nowrap;height:1rem;margin:var(--divider-m,1rem 0);--divider-color:var(--color-base-content);flex-direction:row;align-self:stretch;align-items:center;display:flex}@supports (color:color-mix(in lab,red,red)){.divider{--divider-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.divider:before,.divider:after{content:"";background-color:var(--divider-color);flex-grow:1;width:100%;height:.125rem}@media print{.divider:before,.divider:after{border:.5px solid}}.divider:not(:empty){gap:1rem}.filter{flex-wrap:wrap;display:flex}.filter input[type=radio]{width:auto}.filter input{opacity:1;transition:margin .1s,opacity .3s,padding .3s,border-width .1s;overflow:hidden;scale:1}.filter input:not(:last-child){margin-inline-end:.25rem}.filter input.filter-reset{aspect-ratio:1}.filter input.filter-reset:after{--tw-content:"×";content:var(--tw-content)}.filter:not(:has(input:checked:not(.filter-reset))) .filter-reset,.filter:not(:has(input:checked:not(.filter-reset))) input[type=reset],.filter:has(input:checked:not(.filter-reset)) input:not(:checked,.filter-reset,input[type=reset]){opacity:0;border-width:0;width:0;margin-inline:0;padding-inline:0;scale:0}.badge{border-radius:var(--radius-selector);vertical-align:middle;color:var(--badge-fg);border:var(--border)solid var(--badge-color,var(--color-base-200));background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);background-color:var(--badge-bg);--badge-bg:var(--badge-color,var(--color-base-100));--badge-fg:var(--color-base-content);--size:calc(var(--size-selector,.25rem)*6);width:fit-content;height:var(--size);padding-inline:calc(var(--size)/2 - var(--border));justify-content:center;align-items:center;gap:.5rem;font-size:.875rem;display:inline-flex}.chat{--mask-chat:url("data:image/svg+xml,%3csvg width='13' height='13' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M0 11.5004C0 13.0004 2 13.0004 2 13.0004H12H13V0.00036329L12.5 0C12.5 0 11.977 2.09572 11.8581 2.50033C11.6075 3.35237 10.9149 4.22374 9 5.50036C6 7.50036 0 10.0004 0 11.5004Z'/%3e%3c/svg%3e");grid-auto-rows:min-content;column-gap:.75rem;padding-block:.25rem;display:grid}.btn-primary{--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content)}}@layer daisyui.l1.l2{.btn:disabled:not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:disabled:not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.btn:disabled:not(.btn-link,.btn-ghost){box-shadow:none}.btn:disabled{pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:disabled{--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}.btn[disabled]:not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn[disabled]:not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.btn[disabled]:not(.btn-link,.btn-ghost){box-shadow:none}.btn[disabled]{pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn[disabled]{--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}.chat-end{grid-template-columns:1fr auto;place-items:end}.chat-end .chat-header,.chat-end .chat-footer{grid-column-start:1}.chat-end .chat-image{grid-column-start:2}.chat-end .chat-bubble{border-end-end-radius:0;grid-column-start:1}.chat-end .chat-bubble:before{inset-inline-start:100%;transform:rotateY(180deg)}[dir=rtl] :is(.chat-end .chat-bubble):before{transform:rotateY(0)}.chat-start{grid-template-columns:auto 1fr;place-items:start}.chat-start .chat-header,.chat-start .chat-footer{grid-column-start:2}.chat-start .chat-image{grid-column-start:1}.chat-start .chat-bubble{border-end-start-radius:0;grid-column-start:2}.chat-start .chat-bubble:before{inset-inline-start:-.75rem;transform:rotateY(0)}[dir=rtl] :is(.chat-start .chat-bubble):before{transform:rotateY(180deg)}.input-sm{--size:calc(var(--size-field,.25rem)*8);font-size:max(var(--font-size,.75rem),.75rem)}.input-sm[type=number]::-webkit-inner-spin-button{margin-block:-.5rem;margin-inline-end:-.75rem}.btn-circle{width:var(--size);height:var(--size);border-radius:3.40282e38px;padding-inline:0}.loading-xs{width:calc(var(--size-selector,.25rem)*4)}.chat-bubble-primary{background-color:var(--color-primary);color:var(--color-primary-content)}.chat-bubble-secondary{background-color:var(--color-secondary);color:var(--color-secondary-content)}.loading-dots{-webkit-mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='4' cy='12' r='3'%3E%3Canimate attributeName='cy' values='12;6;12;12' keyTimes='0;0.286;0.571;1' dur='1.05s' repeatCount='indefinite' keySplines='.33,0,.66,.33;.33,.66,.66,1'/%3E%3C/circle%3E%3Ccircle cx='12' cy='12' r='3'%3E%3Canimate attributeName='cy' values='12;6;12;12' keyTimes='0;0.286;0.571;1' dur='1.05s' repeatCount='indefinite' keySplines='.33,0,.66,.33;.33,.66,.66,1' begin='0.1s'/%3E%3C/circle%3E%3Ccircle cx='20' cy='12' r='3'%3E%3Canimate attributeName='cy' values='12;6;12;12' keyTimes='0;0.286;0.571;1' dur='1.05s' repeatCount='indefinite' keySplines='.33,0,.66,.33;.33,.66,.66,1' begin='0.2s'/%3E%3C/circle%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='4' cy='12' r='3'%3E%3Canimate attributeName='cy' values='12;6;12;12' keyTimes='0;0.286;0.571;1' dur='1.05s' repeatCount='indefinite' keySplines='.33,0,.66,.33;.33,.66,.66,1'/%3E%3C/circle%3E%3Ccircle cx='12' cy='12' r='3'%3E%3Canimate attributeName='cy' values='12;6;12;12' keyTimes='0;0.286;0.571;1' dur='1.05s' repeatCount='indefinite' keySplines='.33,0,.66,.33;.33,.66,.66,1' begin='0.1s'/%3E%3C/circle%3E%3Ccircle cx='20' cy='12' r='3'%3E%3Canimate attributeName='cy' values='12;6;12;12' keyTimes='0;0.286;0.571;1' dur='1.05s' repeatCount='indefinite' keySplines='.33,0,.66,.33;.33,.66,.66,1' begin='0.2s'/%3E%3C/circle%3E%3C/svg%3E")}.badge-xs{--size:calc(var(--size-selector,.25rem)*4);font-size:.625rem}.btn-lg{--fontsize:1.125rem;--btn-p:1.25rem;--size:calc(var(--size-field,.25rem)*12)}.btn-sm{--fontsize:.75rem;--btn-p:.75rem;--size:calc(var(--size-field,.25rem)*8)}.badge-primary{--badge-color:var(--color-primary);--badge-fg:var(--color-primary-content)}}.pointer-events-none{pointer-events:none}.static{position:static}.join{--join-ss:0;--join-se:0;--join-es:0;--join-ee:0;align-items:stretch;display:inline-flex}.join :where(.join-item){border-start-start-radius:var(--join-ss,0);border-start-end-radius:var(--join-se,0);border-end-end-radius:var(--join-ee,0);border-end-start-radius:var(--join-es,0)}.join :where(.join-item) *{--join-ss:var(--radius-field);--join-se:var(--radius-field);--join-es:var(--radius-field);--join-ee:var(--radius-field)}.join>.join-item:where(:first-child),.join :first-child:not(:last-child) :where(.join-item){--join-ss:var(--radius-field);--join-se:0;--join-es:var(--radius-field);--join-ee:0}.join>.join-item:where(:last-child),.join :last-child:not(:first-child) :where(.join-item){--join-ss:0;--join-se:var(--radius-field);--join-es:0;--join-ee:var(--radius-field)}.join>.join-item:where(:only-child),.join :only-child :where(.join-item){--join-ss:var(--radius-field);--join-se:var(--radius-field);--join-es:var(--radius-field);--join-ee:var(--radius-field)}.join>:where(:focus,:has(:focus)){z-index:1}@media(hover:hover){.join>:where(.btn:hover,:has(.btn:hover)){isolation:isolate}}.z-50{z-index:50}.m-0{margin:calc(var(--spacing)*0)}.my-2{margin-block:calc(var(--spacing)*2)}.join-item:where(:not(:first-child,:disabled,[disabled],.btn-disabled)){margin-block-start:0;margin-inline-start:calc(var(--border,1px)*-1)}.join-item:where(:is(:disabled,[disabled],.btn-disabled)){border-width:var(--border,1px)0 var(--border,1px)var(--border,1px)}.mt-1{margin-top:calc(var(--spacing)*1)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.flex{display:flex}.table{display:table}.h-8{height:calc(var(--spacing)*8)}.h-12{height:calc(var(--spacing)*12)}.h-180{height:calc(var(--spacing)*180)}.h-px{height:1px}.max-h-\\[80vh\\]{max-height:80vh}.w-12{width:calc(var(--spacing)*12)}.w-80{width:calc(var(--spacing)*80)}.w-auto{width:auto}.w-full{width:100%}.min-w-0{min-width:calc(var(--spacing)*0)}.flex-1{flex:1}.flex-col{flex-direction:column}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-x-3>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*3)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-x-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.scroll-smooth{scroll-behavior:smooth}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-base-300{border-color:var(--color-base-300)}.bg-base-100{background-color:var(--color-base-100)}.bg-base-200{background-color:var(--color-base-200)}.bg-black{background-color:var(--color-black)}.bg-primary{background-color:var(--color-primary)}.bg-transparent{background-color:#0000}.p-0{padding:calc(var(--spacing)*0)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.pt-2{padding-top:calc(var(--spacing)*2)}.text-center{text-align:center}.text-left{text-align:left}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.font-black{--tw-font-weight:var(--font-weight-black);font-weight:var(--font-weight-black)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.text-base-content,.text-base-content\\/60{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.text-base-content\\/60{color:color-mix(in oklab,var(--color-base-content)60%,transparent)}}.text-base-content\\/80{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.text-base-content\\/80{color:color-mix(in oklab,var(--color-base-content)80%,transparent)}}.text-primary{color:var(--color-primary)}.text-primary-content{color:var(--color-primary-content)}.uppercase{text-transform:uppercase}.italic{font-style:italic}.opacity-10{opacity:.1}.opacity-80{opacity:.8}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-primary{--tw-ring-color:var(--color-primary)}.ring-offset-2{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.ring-offset-base-100{--tw-ring-offset-color:var(--color-base-100)}@layer daisyui.l1{.btn-ghost:not(.btn-active,:hover,:active:focus,:focus-visible,input:checked:not(.filter .btn)){--btn-shadow:"";--btn-bg:#0000;--btn-border:#0000;--btn-noise:none}.btn-ghost:not(.btn-active,:hover,:active:focus,:focus-visible,input:checked:not(.filter .btn)):not(:disabled,[disabled],.btn-disabled){--btn-fg:var(--btn-color,currentColor);outline-color:currentColor}@media(hover:none){.btn-ghost:not(.btn-active,:active,:focus-visible,input:checked:not(.filter .btn)):hover{--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color,currentColor);--btn-border:#0000;--btn-noise:none;outline-color:currentColor}}}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}@media(hover:hover){.hover\\:bg-black\\/10:hover{background-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-black\\/10:hover{background-color:color-mix(in oklab,var(--color-black)10%,transparent)}}}.focus\\:border-none:focus{--tw-border-style:none;border-style:none}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}@media(min-width:40rem){.sm\\:w-96{width:calc(var(--spacing)*96)}}}@keyframes rating{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes dropdown{0%{opacity:0}}@keyframes radio{0%{padding:5px}50%{padding:3px}}@keyframes toast{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@keyframes rotator{89.9999%,to{--first-item-position:0 0%}90%,99.9999%{--first-item-position:0 calc(var(--items)*100%)}to{translate:0 -100%}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}@keyframes menu{0%{opacity:0}}@keyframes progress{50%{background-position-x:-115%}}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}`, ve = mt(Ri), Ei = "data:image/svg+xml,%3csvg%20width='78'%20height='73'%20viewBox='0%200%2078%2073'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M68.67%2019.28L51.36%2043.3C50.03%2044.99%2047.71%2045.55%2045.76%2044.64L36.89%2040.52C35.56%2039.9%2035.1%2038.25%2035.91%2037.04L51.83%2013.21L44.93%2010.05L28.97%2032.59C27.64%2034.48%2026.56%2035.08%2024.53%2033.98L14.1%2028.36C12.81%2027.66%2012.47%2025.96%2013.39%2024.82L29.9%204.35L22.44%200L0.61%2026.67C0.3%2027.05%200.12%2027.49%200.0500001%2027.93L0%2027.9V28.32V28.33L0.0400001%2050.82L2.07%2047.68L4.54%2050.45L4.3%2032.29L47.2%2055.06C50.34%2056.61%2054.15%2055.71%2056.26%2052.91L77.34%2022.93L68.67%2019.28Z'%20fill='white'/%3e%3cpath%20d='M6.56%2035.99L46.89%2057.29C49.03%2058.42%2050.25%2060.76%2049.96%2063.17L48.44%2072.34L8.91%2052.01C7.47%2051.27%206.57%2049.79%206.57%2048.18L6.56%2035.99Z'%20fill='white'/%3e%3c/svg%3e";
var Mi = Object.getOwnPropertyDescriptor, qi = (r, e, t, i) => {
  for (var o = i > 1 ? void 0 : i ? Mi(e, t) : e, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = n(o) || o);
  return o;
};
let qe = class extends R {
  _handleClose() {
    this.dispatchEvent(
      new CustomEvent("close-chat", {
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    return _`
      <header
        class="flex items-center justify-between bg-primary p-4 text-primary-content shadow-md"
      >
        <div class="flex items-center space-x-3">
          <img
            src=${Ei}
            alt="ENCAP Logo"
            class="h-8 w-auto"
            draggable="false"
          />
          <div class="flex flex-col text-left">
            <h3 class="text-base leading-none font-bold">ENCAP</h3>
            <span class="text-[10px] opacity-80 uppercase tracking-wider"
              >Asistente Virtual</span
            >
          </div>
        </div>

        <button
          @click=${this._handleClose}
          class="btn btn-circle btn-sm btn-ghost hover:bg-black/10 text-primary-content"
          aria-label="Cerrar chat"
        >
          <!-- Lucide Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-x-icon lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </header>
    `;
  }
};
qe.styles = [ve];
qe = qi([
  ye("chat-header")
], qe);
var Pi = Object.defineProperty, Oi = Object.getOwnPropertyDescriptor, Be = (r, e, t, i) => {
  for (var o = i > 1 ? void 0 : i ? Oi(e, t) : e, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = (i ? n(e, t, o) : n(o)) || o);
  return i && o && Pi(e, t, o), o;
};
let oe = class extends R {
  constructor() {
    super(...arguments), this.content = "", this.role = "assistant";
  }
  render() {
    const r = this.role === "assistant";
    return _`
      <div class="chat ${r ? "chat-start" : "chat-end"}">
        <!-- Avatar (Solo para el asistente) -->
        ${""}

        <!-- Header -->
        <div class="chat-header">${r ? "Tutor IA" : "Tú"}</div>

        <!-- Bubble -->
        <div
          class="chat-bubble text-sm ${r ? "chat-bubble-secondary" : "chat-bubble-primary"}"
        >
          ${this.content}
        </div>
      </div>
    `;
  }
};
oe.styles = [ve];
Be([
  E({ type: String })
], oe.prototype, "content", 2);
Be([
  E({ type: String })
], oe.prototype, "role", 2);
oe = Be([
  ye("chat-bubble")
], oe);
var Ii = Object.defineProperty, Li = Object.getOwnPropertyDescriptor, Lt = (r, e, t, i) => {
  for (var o = i > 1 ? void 0 : i ? Li(e, t) : e, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = (i ? n(e, t, o) : n(o)) || o);
  return i && o && Ii(e, t, o), o;
};
let ge = class extends R {
  _handleSubmit(r) {
    r.preventDefault();
    const e = this._inputElement.value.trim();
    e && (this.dispatchEvent(
      new CustomEvent("message-sent", {
        detail: e,
        bubbles: !0,
        composed: !0
      })
    ), this._inputElement.value = "");
  }
  render() {
    return _`
      <footer class="border-t border-base-300 bg-base-100 p-3">
        <form
          class="join w-full rounded-lg bg-base-200"
          @submit=${this._handleSubmit}
        >
          <input
            type="text"
            placeholder="Escribe tu pregunta..."
            class="input input-sm join-item w-full bg-transparent focus:outline-none focus:border-none"
            aria-label="Pregunta al tutor"
          />
          <button
            type="submit"
            class="btn join-item btn-sm btn-primary"
            aria-label="Enviar mensaje"
          >
            <!-- Lucide Icon: Send -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-send-icon lucide-send"
            >
              <path
                d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
              />
              <path d="m21.854 2.147-10.94 10.939" />
            </svg>
          </button>
        </form>
        <div class="flex flex-col items-center pt-2">
          <p class="text-center text-[10px] text-base-content/60">
            Máximo 5 preguntas por curso durante 24 horas.
          </p>
        </div>
      </footer>
    `;
  }
};
ge.styles = [ve];
Lt([
  xt("input")
], ge.prototype, "_inputElement", 2);
ge = Lt([
  ye("chat-input")
], ge);
var Ni = Object.defineProperty, Qi = Object.getOwnPropertyDescriptor, C = (r, e, t, i) => {
  for (var o = i > 1 ? void 0 : i ? Qi(e, t) : e, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = (i ? n(e, t, o) : n(o)) || o);
  return i && o && Ni(e, t, o), o;
};
let k = class extends R {
  constructor() {
    super(...arguments), this.userId = "", this.courseId = "", this.moduleId = "", this.studentName = "Estudiante", this.courseProgress = 0, this._isOpen = !1, this._isTyping = !1, this._messages = [];
  }
  _getDeviceType() {
    const r = navigator.userAgent;
    return /tablet|ipad|playbook|silk/i.test(r) ? "tablet" : /mobile|android|iphone|ipod/i.test(r) ? "mobile" : "desktop";
  }
  connectedCallback() {
    super.connectedCallback(), this._subscribeToMessages();
  }
  disconnectedCallback() {
    this._unsubscribe?.(), super.disconnectedCallback();
  }
  _subscribeToMessages() {
    this._unsubscribe = ft.onUpdate(
      gt.mensajes.db.listarPorUsuarioCurso,
      {
        usuarioId: this.userId,
        cursoId: this.courseId
      },
      (r) => {
        const e = r.flatMap((o) => [
          { role: "user", content: o.pregunta },
          { role: "assistant", content: o.respuesta }
        ]), t = e[e.length - 1], i = t?.role === "assistant" && t.content === "...";
        this._messages = e, this._isTyping = i, this._scrollToBottom();
      }
    );
  }
  async _handleSendMessage(r) {
    const e = r.detail;
    if (e.trim()) {
      this._scrollToBottom();
      try {
        await ft.mutation(gt.tutor.ask, {
          usuarioId: this.userId,
          nombreEstudiante: this.studentName,
          cursoId: this.courseId,
          moduloId: this.moduleId || void 0,
          pregunta: e,
          dispositivo: this._getDeviceType()
        });
      } catch (t) {
        console.error("Chat Error:", t);
      }
    }
  }
  _scrollToBottom() {
    requestAnimationFrame(() => {
      this._chatScroller && (this._chatScroller.scrollTop = this._chatScroller.scrollHeight);
    });
  }
  _toggleChat() {
    this._isOpen = !this._isOpen, this._isOpen && this._scrollToBottom();
  }
  render() {
    const r = this.studentName.split(" ")[0] || "Estudiante";
    return _`
      <div
        class="flex flex-col items-end gap-3 p-0 m-0 bg-transparent w-auto pointer-events-none"
        data-theme="corporate"
      >
        <!-- Chat Window Transition -->
        ${this._isOpen ? _`
              <div
                class="card w-80 sm:w-96 h-180 max-h-[80vh] bg-base-100 flex flex-col rounded-xl overflow-hidden"
              >
                <!-- Componente Header -->
                <chat-header @close-chat=${this._toggleChat}></chat-header>

                <!-- Main Content Area (Scrollable) -->
                <main
                  id="chat-scroller"
                  class="flex-1 overflow-y-auto p-4 bg-base-200 scroll-smooth"
                >
                  <!-- Welcome Card (Diseño Institucional) -->
                  <div
                    class="card bg-base-100 border border-base-300 p-4 mb-6 shadow-sm"
                  >
                    <div class="flex gap-4 items-start">
                      <div class="avatar">
                        <div
                          class="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                        >
                          <img
                            src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
                            alt="Tutor"
                          />
                        </div>
                      </div>
                      <div class="flex-1 min-w-0">
                        <h4
                          class="text-sm font-black text-primary uppercase tracking-tight truncate"
                        >
                          ¡HOLA ${r}!
                        </h4>
                        <p
                          class="text-[11px] text-base-content/80 mt-1 leading-relaxed"
                        >
                          Estás al
                          <span class="badge badge-xs badge-primary font-bold"
                            >${this.courseProgress}%</span
                          >
                          de
                          <span class="font-bold italic text-base-content">
                            "${this.courseId}"
                          </span>
                          -
                          <span class="font-bold italic text-base-content">
                            "${this.moduleId}"
                          </span>
                          .
                        </p>
                        <div class="divider my-2 opacity-10 h-px"></div>
                        <p class="text-xs font-semibold text-primary">
                          ¿En qué te ayudo hoy?
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- Lista de Mensajes -->
                  ${this._messages.map((e) => e.role === "assistant" && e.content === "..." ? null : _`
                      <chat-bubble
                        .role=${e.role}
                        .content=${e.content}
                      ></chat-bubble>
                    `)}

                  <!-- Indicador de "Escribiendo..." (DaisyUI) -->
                  ${this._isTyping ? _`
                        <div class="chat chat-start ">
                          <div class="chat-header">Tutor IA</div>
                          <div
                            class="chat-bubble chat-bubble-secondary text-sm"
                          >
                            <span
                              class="loading loading-dots loading-xs"
                            ></span>
                          </div>
                        </div>
                      ` : ""}
                </main>

                <!-- Componente Input -->
                <chat-input
                  @message-sent=${this._handleSendMessage}
                ></chat-input>
              </div>
            ` : ""}

        <!-- Floating Action Button (FAB) -->
        <button
          @click=${this._toggleChat}
          class="btn btn-circle btn-lg btn-primary z-50"
          aria-label=${this._isOpen ? "Cerrar chat" : "Abrir Tutor IA"}
        >
          ${this._isOpen ? _`<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-wand-sparkles-icon lucide-wand-sparkles"
              >
                <path
                  d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"
                />
                <path d="m14 7 3 3" />
                <path d="M5 6v4" />
                <path d="M19 14v4" />
                <path d="M10 2v2" />
                <path d="M7 8H3" />
                <path d="M21 16h-4" />
                <path d="M11 3H9" />
              </svg>` : _`<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-sparkle-icon lucide-sparkle"
              >
                <path
                  d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
                />
              </svg>`}
        </button>
      </div>
    `;
  }
};
k.styles = [
  ve,
  // Importación limpia (sin volver a usar unsafeCSS)
  Nt`
      :host {
        display: block;
        position: fixed;
        /* Posicionamos el host con el margen deseado */
        bottom: 1.5rem;
        right: 1.5rem;
        z-index: 9999;
        pointer-events: none;
      }

      /* Reactivamos eventos solo en la ventana y el botón */
      .card,
      button {
        pointer-events: auto;
      }

      /* Aseguramos que el componente no tenga fuentes o colores huérfanos */
      :host {
        color: var(--color-base-content);
        font-family: var(--font-sans);
      }
    `
];
C([
  E({ type: String, attribute: "user-id" })
], k.prototype, "userId", 2);
C([
  E({ type: String, attribute: "course-id" })
], k.prototype, "courseId", 2);
C([
  E({ type: String, attribute: "module-id" })
], k.prototype, "moduleId", 2);
C([
  E({ type: String, attribute: "student-name" })
], k.prototype, "studentName", 2);
C([
  E({ type: Number, attribute: "course-progress" })
], k.prototype, "courseProgress", 2);
C([
  Ve()
], k.prototype, "_isOpen", 2);
C([
  Ve()
], k.prototype, "_isTyping", 2);
C([
  Ve()
], k.prototype, "_messages", 2);
C([
  xt("#chat-scroller")
], k.prototype, "_chatScroller", 2);
k = C([
  ye("encap-tutor")
], k);
export {
  k as MyElement
};
