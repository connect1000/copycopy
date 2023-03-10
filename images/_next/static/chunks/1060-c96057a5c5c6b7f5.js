(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1060], {
        19824: function(t, e) {
            "use strict";
            const r = "undefined" !== typeof BigUint64Array,
                n = Symbol(),
                o = 1024;

            function i(t, e) {
                const r = new Uint32Array(t),
                    n = new Uint16Array(t);
                var i = r[e + -4 >>> 2] >>> 1,
                    s = e >>> 1;
                if (i <= o) return String.fromCharCode.apply(String, n.subarray(s, s + i));
                const a = [];
                do {
                    const t = n[s + o - 1],
                        e = t >= 55296 && t < 56320 ? 1023 : o;
                    a.push(String.fromCharCode.apply(String, n.subarray(s, s += e))), i -= e
                } while (i > o);
                return a.join("") + String.fromCharCode.apply(String, n.subarray(s, s + i))
            }

            function s(t) {
                const e = {};

                function r(t, e) {
                    return t ? i(t.buffer, e) : "<yet unknown>"
                }
                const n = t.env = t.env || {};
                return n.abort = n.abort || function(t, o, i, s) {
                    const a = e.memory || n.memory;
                    throw Error("abort: " + r(a, t) + " at " + r(a, o) + ":" + i + ":" + s)
                }, n.trace = n.trace || function(t, o) {
                    const i = e.memory || n.memory;
                    console.log("trace: " + r(i, t) + (o ? " " : "") + Array.prototype.slice.call(arguments, 2, 2 + o).join(", "))
                }, t.Math = t.Math || Math, t.Date = t.Date || Date, e
            }

            function a(t, e) {
                const n = e.exports,
                    o = n.memory,
                    s = n.table,
                    a = n.__alloc,
                    u = n.__retain,
                    c = n.__rtti_base || -1;

                function f(t) {
                    const e = new Uint32Array(o.buffer);
                    if ((t >>>= 0) >= e[c >>> 2]) throw Error("invalid id: " + t);
                    return e[(c + 4 >>> 2) + 2 * t]
                }

                function l(t) {
                    const e = new Uint32Array(o.buffer);
                    if ((t >>>= 0) >= e[c >>> 2]) throw Error("invalid id: " + t);
                    return e[(c + 4 >>> 2) + 2 * t + 1]
                }

                function d(t) {
                    return 31 - Math.clz32(t >>> 5 & 31)
                }

                function p(t, e, r) {
                    const n = o.buffer;
                    if (r) switch (t) {
                        case 2:
                            return new Float32Array(n);
                        case 3:
                            return new Float64Array(n)
                    } else switch (t) {
                        case 0:
                            return new(e ? Int8Array : Uint8Array)(n);
                        case 1:
                            return new(e ? Int16Array : Uint16Array)(n);
                        case 2:
                            return new(e ? Int32Array : Uint32Array)(n);
                        case 3:
                            return new(e ? BigInt64Array : BigUint64Array)(n)
                    }
                    throw Error("unsupported align: " + t)
                }

                function y(t) {
                    const e = new Uint32Array(o.buffer),
                        r = e[t + -8 >>> 2],
                        n = f(r);
                    if (!(1 & n)) throw Error("not an array: " + r);
                    const i = d(n);
                    var s = e[t + 4 >>> 2];
                    const a = 2 & n ? e[t + 12 >>> 2] : e[s + -4 >>> 2] >>> i;
                    return p(i, 1024 & n, 2048 & n).subarray(s >>>= i, s + a)
                }

                function g(t, e, r) {
                    return new t(w(t, e, r))
                }

                function w(t, e, r) {
                    const n = o.buffer,
                        i = new Uint32Array(n),
                        s = i[r + 4 >>> 2];
                    return new t(n, s, i[s + -4 >>> 2] >>> e)
                }
                return t.__allocString = function(t) {
                    const e = t.length,
                        r = a(e << 1, 1),
                        n = new Uint16Array(o.buffer);
                    for (var i = 0, s = r >>> 1; i < e; ++i) n[s + i] = t.charCodeAt(i);
                    return r
                }, t.__getString = function(t) {
                    const e = o.buffer;
                    if (1 !== new Uint32Array(e)[t + -8 >>> 2]) throw Error("not a string: " + t);
                    return i(e, t)
                }, t.__allocArray = function(t, e) {
                    const r = f(t);
                    if (!(3 & r)) throw Error("not an array: " + t + " @ " + r);
                    const n = d(r),
                        i = e.length,
                        s = a(i << n, 0),
                        c = a(2 & r ? 16 : 12, t),
                        h = new Uint32Array(o.buffer);
                    h[c + 0 >>> 2] = u(s), h[c + 4 >>> 2] = s, h[c + 8 >>> 2] = i << n, 2 & r && (h[c + 12 >>> 2] = i);
                    const l = p(n, 1024 & r, 2048 & r);
                    if (8192 & r)
                        for (let o = 0; o < i; ++o) l[(s >>> n) + o] = u(e[o]);
                    else l.set(e, s >>> n);
                    return c
                }, t.__getArrayView = y, t.__getArray = function(t) {
                    const e = y(t),
                        r = e.length,
                        n = new Array(r);
                    for (let o = 0; o < r; o++) n[o] = e[o];
                    return n
                }, t.__getArrayBuffer = function(t) {
                    const e = o.buffer,
                        r = new Uint32Array(e)[t + -4 >>> 2];
                    return e.slice(t, t + r)
                }, t.__getInt8Array = g.bind(null, Int8Array, 0), t.__getInt8ArrayView = w.bind(null, Int8Array, 0), t.__getUint8Array = g.bind(null, Uint8Array, 0), t.__getUint8ArrayView = w.bind(null, Uint8Array, 0), t.__getUint8ClampedArray = g.bind(null, Uint8ClampedArray, 0), t.__getUint8ClampedArrayView = w.bind(null, Uint8ClampedArray, 0), t.__getInt16Array = g.bind(null, Int16Array, 1), t.__getInt16ArrayView = w.bind(null, Int16Array, 1), t.__getUint16Array = g.bind(null, Uint16Array, 1), t.__getUint16ArrayView = w.bind(null, Uint16Array, 1), t.__getInt32Array = g.bind(null, Int32Array, 2), t.__getInt32ArrayView = w.bind(null, Int32Array, 2), t.__getUint32Array = g.bind(null, Uint32Array, 2), t.__getUint32ArrayView = w.bind(null, Uint32Array, 2), r && (t.__getInt64Array = g.bind(null, BigInt64Array, 3), t.__getInt64ArrayView = w.bind(null, BigInt64Array, 3), t.__getUint64Array = g.bind(null, BigUint64Array, 3), t.__getUint64ArrayView = w.bind(null, BigUint64Array, 3)), t.__getFloat32Array = g.bind(null, Float32Array, 2), t.__getFloat32ArrayView = w.bind(null, Float32Array, 2), t.__getFloat64Array = g.bind(null, Float64Array, 3), t.__getFloat64ArrayView = w.bind(null, Float64Array, 3), t.__instanceof = function(t, e) {
                    const r = new Uint32Array(o.buffer);
                    var n = r[t + -8 >>> 2];
                    if (n <= r[c >>> 2])
                        do {
                            if (n == e) return !0
                        } while (n = l(n));
                    return !1
                }, t.memory = t.memory || o, t.table = t.table || s, h(n, t)
            }

            function u(t) {
                return "undefined" !== typeof Response && t instanceof Response
            }
            async function c(t, e) {
                return u(t = await t) ? f(t, e) : a(s(e || (e = {})), await WebAssembly.instantiate(t instanceof WebAssembly.Module ? t : await WebAssembly.compile(t), e))
            }
            async function f(t, e) {
                return WebAssembly.instantiateStreaming ? a(s(e || (e = {})), (await WebAssembly.instantiateStreaming(t, e)).instance) : c(u(t = await t) ? t.arrayBuffer() : t, e)
            }

            function h(t, e) {
                var r = e ? Object.create(e) : {},
                    o = t.__argumentsLength ? function(e) {
                        t.__argumentsLength.value = e
                    } : t.__setArgumentsLength || t.__setargc || function() {};
                for (let i in t) {
                    if (!Object.prototype.hasOwnProperty.call(t, i)) continue;
                    const e = t[i];
                    let s = i.split("."),
                        a = r;
                    for (; s.length > 1;) {
                        let t = s.shift();
                        Object.prototype.hasOwnProperty.call(a, t) || (a[t] = {}), a = a[t]
                    }
                    let u = s[0],
                        c = u.indexOf("#");
                    if (c >= 0) {
                        let r = u.substring(0, c),
                            s = a[r];
                        if ("undefined" === typeof s || !s.prototype) {
                            let t = function(...e) {
                                return t.wrap(t.prototype.constructor(0, ...e))
                            };
                            t.prototype = {
                                valueOf: function() {
                                    return this[n]
                                }
                            }, t.wrap = function(e) {
                                return Object.create(t.prototype, {
                                    [n]: {
                                        value: e,
                                        writable: !1
                                    }
                                })
                            }, s && Object.getOwnPropertyNames(s).forEach((e => Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(s, e)))), a[r] = t
                        }
                        if (u = u.substring(c + 1), a = a[r].prototype, /^(get|set):/.test(u)) {
                            if (!Object.prototype.hasOwnProperty.call(a, u = u.substring(4))) {
                                let e = t[i.replace("set:", "get:")],
                                    r = t[i.replace("get:", "set:")];
                                Object.defineProperty(a, u, {
                                    get: function() {
                                        return e(this[n])
                                    },
                                    set: function(t) {
                                        r(this[n], t)
                                    },
                                    enumerable: !0
                                })
                            }
                        } else "constructor" === u ? (a[u] = (...t) => (o(t.length), e(...t))).original = e : (a[u] = function(...t) {
                            return o(t.length), e(this[n], ...t)
                        }).original = e
                    } else /^(get|set):/.test(u) ? Object.prototype.hasOwnProperty.call(a, u = u.substring(4)) || Object.defineProperty(a, u, {
                        get: t[i.replace("set:", "get:")],
                        set: t[i.replace("get:", "set:")],
                        enumerable: !0
                    }) : "function" === typeof e && e !== o ? (a[u] = (...t) => (o(t.length), e(...t))).original = e : a[u] = e
                }
                return r
            }
            e.instantiate = c, e.instantiateSync = function(t, e) {
                return a(s(e || (e = {})), new WebAssembly.Instance(t instanceof WebAssembly.Module ? t : new WebAssembly.Module(t), e))
            }, e.instantiateStreaming = f, e.demangle = h
        },
        34537: function(t) {
            "use strict";
            t.exports = function(t, e) {
                var r = new Array(arguments.length - 1),
                    n = 0,
                    o = 2,
                    i = !0;
                for (; o < arguments.length;) r[n++] = arguments[o++];
                return new Promise((function(o, s) {
                    r[n] = function(t) {
                        if (i)
                            if (i = !1, t) s(t);
                            else {
                                for (var e = new Array(arguments.length - 1), r = 0; r < e.length;) e[r++] = arguments[r];
                                o.apply(null, e)
                            }
                    };
                    try {
                        t.apply(e || null, r)
                    } catch (a) {
                        i && (i = !1, s(a))
                    }
                }))
            }
        },
        97419: function(t, e) {
            "use strict";
            var r = e;
            r.length = function(t) {
                var e = t.length;
                if (!e) return 0;
                for (var r = 0; --e % 4 > 1 && "=" === t.charAt(e);) ++r;
                return Math.ceil(3 * t.length) / 4 - r
            };
            for (var n = new Array(64), o = new Array(123), i = 0; i < 64;) o[n[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
            r.encode = function(t, e, r) {
                for (var o, i = null, s = [], a = 0, u = 0; e < r;) {
                    var c = t[e++];
                    switch (u) {
                        case 0:
                            s[a++] = n[c >> 2], o = (3 & c) << 4, u = 1;
                            break;
                        case 1:
                            s[a++] = n[o | c >> 4], o = (15 & c) << 2, u = 2;
                            break;
                        case 2:
                            s[a++] = n[o | c >> 6], s[a++] = n[63 & c], u = 0
                    }
                    a > 8191 && ((i || (i = [])).push(String.fromCharCode.apply(String, s)), a = 0)
                }
                return u && (s[a++] = n[o], s[a++] = 61, 1 === u && (s[a++] = 61)), i ? (a && i.push(String.fromCharCode.apply(String, s.slice(0, a))), i.join("")) : String.fromCharCode.apply(String, s.slice(0, a))
            };
            var s = "invalid encoding";
            r.decode = function(t, e, r) {
                for (var n, i = r, a = 0, u = 0; u < t.length;) {
                    var c = t.charCodeAt(u++);
                    if (61 === c && a > 1) break;
                    if (void 0 === (c = o[c])) throw Error(s);
                    switch (a) {
                        case 0:
                            n = c, a = 1;
                            break;
                        case 1:
                            e[r++] = n << 2 | (48 & c) >> 4, n = c, a = 2;
                            break;
                        case 2:
                            e[r++] = (15 & n) << 4 | (60 & c) >> 2, n = c, a = 3;
                            break;
                        case 3:
                            e[r++] = (3 & n) << 6 | c, a = 0
                    }
                }
                if (1 === a) throw Error(s);
                return r - i
            }, r.test = function(t) {
                return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t)
            }
        },
        19211: function(t) {
            "use strict";

            function e() {
                this._listeners = {}
            }
            t.exports = e, e.prototype.on = function(t, e, r) {
                return (this._listeners[t] || (this._listeners[t] = [])).push({
                    fn: e,
                    ctx: r || this
                }), this
            }, e.prototype.off = function(t, e) {
                if (void 0 === t) this._listeners = {};
                else if (void 0 === e) this._listeners[t] = [];
                else
                    for (var r = this._listeners[t], n = 0; n < r.length;) r[n].fn === e ? r.splice(n, 1) : ++n;
                return this
            }, e.prototype.emit = function(t) {
                var e = this._listeners[t];
                if (e) {
                    for (var r = [], n = 1; n < arguments.length;) r.push(arguments[n++]);
                    for (n = 0; n < e.length;) e[n].fn.apply(e[n++].ctx, r)
                }
                return this
            }
        },
        10945: function(t) {
            "use strict";

            function e(t) {
                return "undefined" !== typeof Float32Array ? function() {
                    var e = new Float32Array([-0]),
                        r = new Uint8Array(e.buffer),
                        n = 128 === r[3];

                    function o(t, n, o) {
                        e[0] = t, n[o] = r[0], n[o + 1] = r[1], n[o + 2] = r[2], n[o + 3] = r[3]
                    }

                    function i(t, n, o) {
                        e[0] = t, n[o] = r[3], n[o + 1] = r[2], n[o + 2] = r[1], n[o + 3] = r[0]
                    }

                    function s(t, n) {
                        return r[0] = t[n], r[1] = t[n + 1], r[2] = t[n + 2], r[3] = t[n + 3], e[0]
                    }

                    function a(t, n) {
                        return r[3] = t[n], r[2] = t[n + 1], r[1] = t[n + 2], r[0] = t[n + 3], e[0]
                    }
                    t.writeFloatLE = n ? o : i, t.writeFloatBE = n ? i : o, t.readFloatLE = n ? s : a, t.readFloatBE = n ? a : s
                }() : function() {
                    function e(t, e, r, n) {
                        var o = e < 0 ? 1 : 0;
                        if (o && (e = -e), 0 === e) t(1 / e > 0 ? 0 : 2147483648, r, n);
                        else if (isNaN(e)) t(2143289344, r, n);
                        else if (e > 34028234663852886e22) t((o << 31 | 2139095040) >>> 0, r, n);
                        else if (e < 11754943508222875e-54) t((o << 31 | Math.round(e / 1401298464324817e-60)) >>> 0, r, n);
                        else {
                            var i = Math.floor(Math.log(e) / Math.LN2);
                            t((o << 31 | i + 127 << 23 | 8388607 & Math.round(e * Math.pow(2, -i) * 8388608)) >>> 0, r, n)
                        }
                    }

                    function s(t, e, r) {
                        var n = t(e, r),
                            o = 2 * (n >> 31) + 1,
                            i = n >>> 23 & 255,
                            s = 8388607 & n;
                        return 255 === i ? s ? NaN : o * (1 / 0) : 0 === i ? 1401298464324817e-60 * o * s : o * Math.pow(2, i - 150) * (s + 8388608)
                    }
                    t.writeFloatLE = e.bind(null, r), t.writeFloatBE = e.bind(null, n), t.readFloatLE = s.bind(null, o), t.readFloatBE = s.bind(null, i)
                }(), "undefined" !== typeof Float64Array ? function() {
                    var e = new Float64Array([-0]),
                        r = new Uint8Array(e.buffer),
                        n = 128 === r[7];

                    function o(t, n, o) {
                        e[0] = t, n[o] = r[0], n[o + 1] = r[1], n[o + 2] = r[2], n[o + 3] = r[3], n[o + 4] = r[4], n[o + 5] = r[5], n[o + 6] = r[6], n[o + 7] = r[7]
                    }

                    function i(t, n, o) {
                        e[0] = t, n[o] = r[7], n[o + 1] = r[6], n[o + 2] = r[5], n[o + 3] = r[4], n[o + 4] = r[3], n[o + 5] = r[2], n[o + 6] = r[1], n[o + 7] = r[0]
                    }

                    function s(t, n) {
                        return r[0] = t[n], r[1] = t[n + 1], r[2] = t[n + 2], r[3] = t[n + 3], r[4] = t[n + 4], r[5] = t[n + 5], r[6] = t[n + 6], r[7] = t[n + 7], e[0]
                    }

                    function a(t, n) {
                        return r[7] = t[n], r[6] = t[n + 1], r[5] = t[n + 2], r[4] = t[n + 3], r[3] = t[n + 4], r[2] = t[n + 5], r[1] = t[n + 6], r[0] = t[n + 7], e[0]
                    }
                    t.writeDoubleLE = n ? o : i, t.writeDoubleBE = n ? i : o, t.readDoubleLE = n ? s : a, t.readDoubleBE = n ? a : s
                }() : function() {
                    function e(t, e, r, n, o, i) {
                        var s = n < 0 ? 1 : 0;
                        if (s && (n = -n), 0 === n) t(0, o, i + e), t(1 / n > 0 ? 0 : 2147483648, o, i + r);
                        else if (isNaN(n)) t(0, o, i + e), t(2146959360, o, i + r);
                        else if (n > 17976931348623157e292) t(0, o, i + e), t((s << 31 | 2146435072) >>> 0, o, i + r);
                        else {
                            var a;
                            if (n < 22250738585072014e-324) t((a = n / 5e-324) >>> 0, o, i + e), t((s << 31 | a / 4294967296) >>> 0, o, i + r);
                            else {
                                var u = Math.floor(Math.log(n) / Math.LN2);
                                1024 === u && (u = 1023), t(4503599627370496 * (a = n * Math.pow(2, -u)) >>> 0, o, i + e), t((s << 31 | u + 1023 << 20 | 1048576 * a & 1048575) >>> 0, o, i + r)
                            }
                        }
                    }

                    function s(t, e, r, n, o) {
                        var i = t(n, o + e),
                            s = t(n, o + r),
                            a = 2 * (s >> 31) + 1,
                            u = s >>> 20 & 2047,
                            c = 4294967296 * (1048575 & s) + i;
                        return 2047 === u ? c ? NaN : a * (1 / 0) : 0 === u ? 5e-324 * a * c : a * Math.pow(2, u - 1075) * (c + 4503599627370496)
                    }
                    t.writeDoubleLE = e.bind(null, r, 0, 4), t.writeDoubleBE = e.bind(null, n, 4, 0), t.readDoubleLE = s.bind(null, o, 0, 4), t.readDoubleBE = s.bind(null, i, 4, 0)
                }(), t
            }

            function r(t, e, r) {
                e[r] = 255 & t, e[r + 1] = t >>> 8 & 255, e[r + 2] = t >>> 16 & 255, e[r + 3] = t >>> 24
            }

            function n(t, e, r) {
                e[r] = t >>> 24, e[r + 1] = t >>> 16 & 255, e[r + 2] = t >>> 8 & 255, e[r + 3] = 255 & t
            }

            function o(t, e) {
                return (t[e] | t[e + 1] << 8 | t[e + 2] << 16 | t[e + 3] << 24) >>> 0
            }

            function i(t, e) {
                return (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0
            }
            t.exports = e(e)
        },
        67199: function(module) {
            "use strict";

            function inquire(moduleName) {
                try {
                    var mod = eval("quire".replace(/^/, "re"))(moduleName);
                    if (mod && (mod.length || Object.keys(mod).length)) return mod
                } catch (e) {}
                return null
            }
            module.exports = inquire
        },
        76662: function(t) {
            "use strict";
            t.exports = function(t, e, r) {
                var n = r || 8192,
                    o = n >>> 1,
                    i = null,
                    s = n;
                return function(r) {
                    if (r < 1 || r > o) return t(r);
                    s + r > n && (i = t(n), s = 0);
                    var a = e.call(i, s, s += r);
                    return 7 & s && (s = 1 + (7 | s)), a
                }
            }
        },
        94997: function(t, e) {
            "use strict";
            var r = e;
            r.length = function(t) {
                for (var e = 0, r = 0, n = 0; n < t.length; ++n)(r = t.charCodeAt(n)) < 128 ? e += 1 : r < 2048 ? e += 2 : 55296 === (64512 & r) && 56320 === (64512 & t.charCodeAt(n + 1)) ? (++n, e += 4) : e += 3;
                return e
            }, r.read = function(t, e, r) {
                if (r - e < 1) return "";
                for (var n, o = null, i = [], s = 0; e < r;)(n = t[e++]) < 128 ? i[s++] = n : n > 191 && n < 224 ? i[s++] = (31 & n) << 6 | 63 & t[e++] : n > 239 && n < 365 ? (n = ((7 & n) << 18 | (63 & t[e++]) << 12 | (63 & t[e++]) << 6 | 63 & t[e++]) - 65536, i[s++] = 55296 + (n >> 10), i[s++] = 56320 + (1023 & n)) : i[s++] = (15 & n) << 12 | (63 & t[e++]) << 6 | 63 & t[e++], s > 8191 && ((o || (o = [])).push(String.fromCharCode.apply(String, i)), s = 0);
                return o ? (s && o.push(String.fromCharCode.apply(String, i.slice(0, s))), o.join("")) : String.fromCharCode.apply(String, i.slice(0, s))
            }, r.write = function(t, e, r) {
                for (var n, o, i = r, s = 0; s < t.length; ++s)(n = t.charCodeAt(s)) < 128 ? e[r++] = n : n < 2048 ? (e[r++] = n >> 6 | 192, e[r++] = 63 & n | 128) : 55296 === (64512 & n) && 56320 === (64512 & (o = t.charCodeAt(s + 1))) ? (n = 65536 + ((1023 & n) << 10) + (1023 & o), ++s, e[r++] = n >> 18 | 240, e[r++] = n >> 12 & 63 | 128, e[r++] = n >> 6 & 63 | 128, e[r++] = 63 & n | 128) : (e[r++] = n >> 12 | 224, e[r++] = n >> 6 & 63 | 128, e[r++] = 63 & n | 128);
                return r - i
            }
        },
        9668: function(t, e, r) {
            "use strict";
            const {
                Buffer: n
            } = r(58478), o = Symbol.for("BufferList");

            function i(t) {
                if (!(this instanceof i)) return new i(t);
                i._init.call(this, t)
            }
            i._init = function(t) {
                    Object.defineProperty(this, o, {
                        value: !0
                    }), this._bufs = [], this.length = 0, t && this.append(t)
                }, i.prototype._new = function(t) {
                    return new i(t)
                }, i.prototype._offset = function(t) {
                    if (0 === t) return [0, 0];
                    let e = 0;
                    for (let r = 0; r < this._bufs.length; r++) {
                        const n = e + this._bufs[r].length;
                        if (t < n || r === this._bufs.length - 1) return [r, t - e];
                        e = n
                    }
                }, i.prototype._reverseOffset = function(t) {
                    const e = t[0];
                    let r = t[1];
                    for (let n = 0; n < e; n++) r += this._bufs[n].length;
                    return r
                }, i.prototype.get = function(t) {
                    if (t > this.length || t < 0) return;
                    const e = this._offset(t);
                    return this._bufs[e[0]][e[1]]
                }, i.prototype.slice = function(t, e) {
                    return "number" === typeof t && t < 0 && (t += this.length), "number" === typeof e && e < 0 && (e += this.length), this.copy(null, 0, t, e)
                }, i.prototype.copy = function(t, e, r, o) {
                    if (("number" !== typeof r || r < 0) && (r = 0), ("number" !== typeof o || o > this.length) && (o = this.length), r >= this.length) return t || n.alloc(0);
                    if (o <= 0) return t || n.alloc(0);
                    const i = !!t,
                        s = this._offset(r),
                        a = o - r;
                    let u = a,
                        c = i && e || 0,
                        f = s[1];
                    if (0 === r && o === this.length) {
                        if (!i) return 1 === this._bufs.length ? this._bufs[0] : n.concat(this._bufs, this.length);
                        for (let e = 0; e < this._bufs.length; e++) this._bufs[e].copy(t, c), c += this._bufs[e].length;
                        return t
                    }
                    if (u <= this._bufs[s[0]].length - f) return i ? this._bufs[s[0]].copy(t, e, f, f + u) : this._bufs[s[0]].slice(f, f + u);
                    i || (t = n.allocUnsafe(a));
                    for (let n = s[0]; n < this._bufs.length; n++) {
                        const e = this._bufs[n].length - f;
                        if (!(u > e)) {
                            this._bufs[n].copy(t, c, f, f + u), c += e;
                            break
                        }
                        this._bufs[n].copy(t, c, f), c += e, u -= e, f && (f = 0)
                    }
                    return t.length > c ? t.slice(0, c) : t
                }, i.prototype.shallowSlice = function(t, e) {
                    if (t = t || 0, e = "number" !== typeof e ? this.length : e, t < 0 && (t += this.length), e < 0 && (e += this.length), t === e) return this._new();
                    const r = this._offset(t),
                        n = this._offset(e),
                        o = this._bufs.slice(r[0], n[0] + 1);
                    return 0 === n[1] ? o.pop() : o[o.length - 1] = o[o.length - 1].slice(0, n[1]), 0 !== r[1] && (o[0] = o[0].slice(r[1])), this._new(o)
                }, i.prototype.toString = function(t, e, r) {
                    return this.slice(e, r).toString(t)
                }, i.prototype.consume = function(t) {
                    if (t = Math.trunc(t), Number.isNaN(t) || t <= 0) return this;
                    for (; this._bufs.length;) {
                        if (!(t >= this._bufs[0].length)) {
                            this._bufs[0] = this._bufs[0].slice(t), this.length -= t;
                            break
                        }
                        t -= this._bufs[0].length, this.length -= this._bufs[0].length, this._bufs.shift()
                    }
                    return this
                }, i.prototype.duplicate = function() {
                    const t = this._new();
                    for (let e = 0; e < this._bufs.length; e++) t.append(this._bufs[e]);
                    return t
                }, i.prototype.append = function(t) {
                    if (null == t) return this;
                    if (t.buffer) this._appendBuffer(n.from(t.buffer, t.byteOffset, t.byteLength));
                    else if (Array.isArray(t))
                        for (let e = 0; e < t.length; e++) this.append(t[e]);
                    else if (this._isBufferList(t))
                        for (let e = 0; e < t._bufs.length; e++) this.append(t._bufs[e]);
                    else "number" === typeof t && (t = t.toString()), this._appendBuffer(n.from(t));
                    return this
                }, i.prototype._appendBuffer = function(t) {
                    this._bufs.push(t), this.length += t.length
                }, i.prototype.indexOf = function(t, e, r) {
                    if (void 0 === r && "string" === typeof e && (r = e, e = void 0), "function" === typeof t || Array.isArray(t)) throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');
                    if ("number" === typeof t ? t = n.from([t]) : "string" === typeof t ? t = n.from(t, r) : this._isBufferList(t) ? t = t.slice() : Array.isArray(t.buffer) ? t = n.from(t.buffer, t.byteOffset, t.byteLength) : n.isBuffer(t) || (t = n.from(t)), e = Number(e || 0), isNaN(e) && (e = 0), e < 0 && (e = this.length + e), e < 0 && (e = 0), 0 === t.length) return e > this.length ? this.length : e;
                    const o = this._offset(e);
                    let i = o[0],
                        s = o[1];
                    for (; i < this._bufs.length; i++) {
                        const e = this._bufs[i];
                        for (; s < e.length;) {
                            if (e.length - s >= t.length) {
                                const r = e.indexOf(t, s);
                                if (-1 !== r) return this._reverseOffset([i, r]);
                                s = e.length - t.length + 1
                            } else {
                                const e = this._reverseOffset([i, s]);
                                if (this._match(e, t)) return e;
                                s++
                            }
                        }
                        s = 0
                    }
                    return -1
                }, i.prototype._match = function(t, e) {
                    if (this.length - t < e.length) return !1;
                    for (let r = 0; r < e.length; r++)
                        if (this.get(t + r) !== e[r]) return !1;
                    return !0
                },
                function() {
                    const t = {
                        readDoubleBE: 8,
                        readDoubleLE: 8,
                        readFloatBE: 4,
                        readFloatLE: 4,
                        readInt32BE: 4,
                        readInt32LE: 4,
                        readUInt32BE: 4,
                        readUInt32LE: 4,
                        readInt16BE: 2,
                        readInt16LE: 2,
                        readUInt16BE: 2,
                        readUInt16LE: 2,
                        readInt8: 1,
                        readUInt8: 1,
                        readIntBE: null,
                        readIntLE: null,
                        readUIntBE: null,
                        readUIntLE: null
                    };
                    for (const e in t) ! function(e) {
                        i.prototype[e] = null === t[e] ? function(t, r) {
                            return this.slice(t, t + r)[e](0, r)
                        } : function(r = 0) {
                            return this.slice(r, r + t[e])[e](0)
                        }
                    }(e)
                }(), i.prototype._isBufferList = function(t) {
                    return t instanceof i || i.isBufferList(t)
                }, i.isBufferList = function(t) {
                    return null != t && t[o]
                }, t.exports = i
        },
        58478: function(t, e, r) {
            "use strict";
            const n = r(79742),
                o = r(80645),
                i = "function" === typeof Symbol && "function" === typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
            e.Buffer = u, e.SlowBuffer = function(t) {
                +t != t && (t = 0);
                return u.alloc(+t)
            }, e.INSPECT_MAX_BYTES = 50;
            const s = 2147483647;

            function a(t) {
                if (t > s) throw new RangeError('The value "' + t + '" is invalid for option "size"');
                const e = new Uint8Array(t);
                return Object.setPrototypeOf(e, u.prototype), e
            }

            function u(t, e, r) {
                if ("number" === typeof t) {
                    if ("string" === typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
                    return h(t)
                }
                return c(t, e, r)
            }

            function c(t, e, r) {
                if ("string" === typeof t) return function(t, e) {
                    "string" === typeof e && "" !== e || (e = "utf8");
                    if (!u.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
                    const r = 0 | y(t, e);
                    let n = a(r);
                    const o = n.write(t, e);
                    o !== r && (n = n.slice(0, o));
                    return n
                }(t, e);
                if (ArrayBuffer.isView(t)) return function(t) {
                    if (X(t, Uint8Array)) {
                        const e = new Uint8Array(t);
                        return d(e.buffer, e.byteOffset, e.byteLength)
                    }
                    return l(t)
                }(t);
                if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                if (X(t, ArrayBuffer) || t && X(t.buffer, ArrayBuffer)) return d(t, e, r);
                if ("undefined" !== typeof SharedArrayBuffer && (X(t, SharedArrayBuffer) || t && X(t.buffer, SharedArrayBuffer))) return d(t, e, r);
                if ("number" === typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
                const n = t.valueOf && t.valueOf();
                if (null != n && n !== t) return u.from(n, e, r);
                const o = function(t) {
                    if (u.isBuffer(t)) {
                        const e = 0 | p(t.length),
                            r = a(e);
                        return 0 === r.length || t.copy(r, 0, 0, e), r
                    }
                    if (void 0 !== t.length) return "number" !== typeof t.length || K(t.length) ? a(0) : l(t);
                    if ("Buffer" === t.type && Array.isArray(t.data)) return l(t.data)
                }(t);
                if (o) return o;
                if ("undefined" !== typeof Symbol && null != Symbol.toPrimitive && "function" === typeof t[Symbol.toPrimitive]) return u.from(t[Symbol.toPrimitive]("string"), e, r);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
            }

            function f(t) {
                if ("number" !== typeof t) throw new TypeError('"size" argument must be of type number');
                if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"')
            }

            function h(t) {
                return f(t), a(t < 0 ? 0 : 0 | p(t))
            }

            function l(t) {
                const e = t.length < 0 ? 0 : 0 | p(t.length),
                    r = a(e);
                for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
                return r
            }

            function d(t, e, r) {
                if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
                if (t.byteLength < e + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
                let n;
                return n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r), Object.setPrototypeOf(n, u.prototype), n
            }

            function p(t) {
                if (t >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
                return 0 | t
            }

            function y(t, e) {
                if (u.isBuffer(t)) return t.length;
                if (ArrayBuffer.isView(t) || X(t, ArrayBuffer)) return t.byteLength;
                if ("string" !== typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                const r = t.length,
                    n = arguments.length > 2 && !0 === arguments[2];
                if (!n && 0 === r) return 0;
                let o = !1;
                for (;;) switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                        return q(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return W(t).length;
                    default:
                        if (o) return n ? -1 : q(t).length;
                        e = ("" + e).toLowerCase(), o = !0
                }
            }

            function g(t, e, r) {
                let n = !1;
                if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                if ((r >>>= 0) <= (e >>>= 0)) return "";
                for (t || (t = "utf8");;) switch (t) {
                    case "hex":
                        return C(this, e, r);
                    case "utf8":
                    case "utf-8":
                        return x(this, e, r);
                    case "ascii":
                        return S(this, e, r);
                    case "latin1":
                    case "binary":
                        return I(this, e, r);
                    case "base64":
                        return B(this, e, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return N(this, e, r);
                    default:
                        if (n) throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), n = !0
                }
            }

            function w(t, e, r) {
                const n = t[e];
                t[e] = t[r], t[r] = n
            }

            function b(t, e, r, n, o) {
                if (0 === t.length) return -1;
                if ("string" === typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), K(r = +r) && (r = o ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
                    if (o) return -1;
                    r = t.length - 1
                } else if (r < 0) {
                    if (!o) return -1;
                    r = 0
                }
                if ("string" === typeof e && (e = u.from(e, n)), u.isBuffer(e)) return 0 === e.length ? -1 : m(t, e, r, n, o);
                if ("number" === typeof e) return e &= 255, "function" === typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : m(t, [e], r, n, o);
                throw new TypeError("val must be string, number or Buffer")
            }

            function m(t, e, r, n, o) {
                let i, s = 1,
                    a = t.length,
                    u = e.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (t.length < 2 || e.length < 2) return -1;
                    s = 2, a /= 2, u /= 2, r /= 2
                }

                function c(t, e) {
                    return 1 === s ? t[e] : t.readUInt16BE(e * s)
                }
                if (o) {
                    let n = -1;
                    for (i = r; i < a; i++)
                        if (c(t, i) === c(e, -1 === n ? 0 : i - n)) {
                            if (-1 === n && (n = i), i - n + 1 === u) return n * s
                        } else -1 !== n && (i -= i - n), n = -1
                } else
                    for (r + u > a && (r = a - u), i = r; i >= 0; i--) {
                        let r = !0;
                        for (let n = 0; n < u; n++)
                            if (c(t, i + n) !== c(e, n)) {
                                r = !1;
                                break
                            }
                        if (r) return i
                    }
                return -1
            }

            function v(t, e, r, n) {
                r = Number(r) || 0;
                const o = t.length - r;
                n ? (n = Number(n)) > o && (n = o) : n = o;
                const i = e.length;
                let s;
                for (n > i / 2 && (n = i / 2), s = 0; s < n; ++s) {
                    const n = parseInt(e.substr(2 * s, 2), 16);
                    if (K(n)) return s;
                    t[r + s] = n
                }
                return s
            }

            function _(t, e, r, n) {
                return J(q(e, t.length - r), t, r, n)
            }

            function E(t, e, r, n) {
                return J(function(t) {
                    const e = [];
                    for (let r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                    return e
                }(e), t, r, n)
            }

            function k(t, e, r, n) {
                return J(W(e), t, r, n)
            }

            function A(t, e, r, n) {
                return J(function(t, e) {
                    let r, n, o;
                    const i = [];
                    for (let s = 0; s < t.length && !((e -= 2) < 0); ++s) r = t.charCodeAt(s), n = r >> 8, o = r % 256, i.push(o), i.push(n);
                    return i
                }(e, t.length - r), t, r, n)
            }

            function B(t, e, r) {
                return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r))
            }

            function x(t, e, r) {
                r = Math.min(t.length, r);
                const n = [];
                let o = e;
                for (; o < r;) {
                    const e = t[o];
                    let i = null,
                        s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
                    if (o + s <= r) {
                        let r, n, a, u;
                        switch (s) {
                            case 1:
                                e < 128 && (i = e);
                                break;
                            case 2:
                                r = t[o + 1], 128 === (192 & r) && (u = (31 & e) << 6 | 63 & r, u > 127 && (i = u));
                                break;
                            case 3:
                                r = t[o + 1], n = t[o + 2], 128 === (192 & r) && 128 === (192 & n) && (u = (15 & e) << 12 | (63 & r) << 6 | 63 & n, u > 2047 && (u < 55296 || u > 57343) && (i = u));
                                break;
                            case 4:
                                r = t[o + 1], n = t[o + 2], a = t[o + 3], 128 === (192 & r) && 128 === (192 & n) && 128 === (192 & a) && (u = (15 & e) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & a, u > 65535 && u < 1114112 && (i = u))
                        }
                    }
                    null === i ? (i = 65533, s = 1) : i > 65535 && (i -= 65536, n.push(i >>> 10 & 1023 | 55296), i = 56320 | 1023 & i), n.push(i), o += s
                }
                return function(t) {
                    const e = t.length;
                    if (e <= T) return String.fromCharCode.apply(String, t);
                    let r = "",
                        n = 0;
                    for (; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += T));
                    return r
                }(n)
            }
            e.kMaxLength = s, u.TYPED_ARRAY_SUPPORT = function() {
                try {
                    const t = new Uint8Array(1),
                        e = {
                            foo: function() {
                                return 42
                            }
                        };
                    return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo()
                } catch (t) {
                    return !1
                }
            }(), u.TYPED_ARRAY_SUPPORT || "undefined" === typeof console || "function" !== typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(u.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (u.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(u.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (u.isBuffer(this)) return this.byteOffset
                }
            }), u.poolSize = 8192, u.from = function(t, e, r) {
                return c(t, e, r)
            }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array), u.alloc = function(t, e, r) {
                return function(t, e, r) {
                    return f(t), t <= 0 ? a(t) : void 0 !== e ? "string" === typeof r ? a(t).fill(e, r) : a(t).fill(e) : a(t)
                }(t, e, r)
            }, u.allocUnsafe = function(t) {
                return h(t)
            }, u.allocUnsafeSlow = function(t) {
                return h(t)
            }, u.isBuffer = function(t) {
                return null != t && !0 === t._isBuffer && t !== u.prototype
            }, u.compare = function(t, e) {
                if (X(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), X(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)), !u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (t === e) return 0;
                let r = t.length,
                    n = e.length;
                for (let o = 0, i = Math.min(r, n); o < i; ++o)
                    if (t[o] !== e[o]) {
                        r = t[o], n = e[o];
                        break
                    }
                return r < n ? -1 : n < r ? 1 : 0
            }, u.isEncoding = function(t) {
                switch (String(t).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, u.concat = function(t, e) {
                if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return u.alloc(0);
                let r;
                if (void 0 === e)
                    for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
                const n = u.allocUnsafe(e);
                let o = 0;
                for (r = 0; r < t.length; ++r) {
                    let e = t[r];
                    if (X(e, Uint8Array)) o + e.length > n.length ? (u.isBuffer(e) || (e = u.from(e)), e.copy(n, o)) : Uint8Array.prototype.set.call(n, e, o);
                    else {
                        if (!u.isBuffer(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                        e.copy(n, o)
                    }
                    o += e.length
                }
                return n
            }, u.byteLength = y, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
                const t = this.length;
                if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (let e = 0; e < t; e += 2) w(this, e, e + 1);
                return this
            }, u.prototype.swap32 = function() {
                const t = this.length;
                if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (let e = 0; e < t; e += 4) w(this, e, e + 3), w(this, e + 1, e + 2);
                return this
            }, u.prototype.swap64 = function() {
                const t = this.length;
                if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (let e = 0; e < t; e += 8) w(this, e, e + 7), w(this, e + 1, e + 6), w(this, e + 2, e + 5), w(this, e + 3, e + 4);
                return this
            }, u.prototype.toString = function() {
                const t = this.length;
                return 0 === t ? "" : 0 === arguments.length ? x(this, 0, t) : g.apply(this, arguments)
            }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(t) {
                if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                return this === t || 0 === u.compare(this, t)
            }, u.prototype.inspect = function() {
                let t = "";
                const r = e.INSPECT_MAX_BYTES;
                return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">"
            }, i && (u.prototype[i] = u.prototype.inspect), u.prototype.compare = function(t, e, r, n, o) {
                if (X(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), !u.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), e < 0 || r > t.length || n < 0 || o > this.length) throw new RangeError("out of range index");
                if (n >= o && e >= r) return 0;
                if (n >= o) return -1;
                if (e >= r) return 1;
                if (this === t) return 0;
                let i = (o >>>= 0) - (n >>>= 0),
                    s = (r >>>= 0) - (e >>>= 0);
                const a = Math.min(i, s),
                    c = this.slice(n, o),
                    f = t.slice(e, r);
                for (let u = 0; u < a; ++u)
                    if (c[u] !== f[u]) {
                        i = c[u], s = f[u];
                        break
                    }
                return i < s ? -1 : s < i ? 1 : 0
            }, u.prototype.includes = function(t, e, r) {
                return -1 !== this.indexOf(t, e, r)
            }, u.prototype.indexOf = function(t, e, r) {
                return b(this, t, e, r, !0)
            }, u.prototype.lastIndexOf = function(t, e, r) {
                return b(this, t, e, r, !1)
            }, u.prototype.write = function(t, e, r, n) {
                if (void 0 === e) n = "utf8", r = this.length, e = 0;
                else if (void 0 === r && "string" === typeof e) n = e, r = this.length, e = 0;
                else {
                    if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                }
                const o = this.length - e;
                if ((void 0 === r || r > o) && (r = o), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                let i = !1;
                for (;;) switch (n) {
                    case "hex":
                        return v(this, t, e, r);
                    case "utf8":
                    case "utf-8":
                        return _(this, t, e, r);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return E(this, t, e, r);
                    case "base64":
                        return k(this, t, e, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return A(this, t, e, r);
                    default:
                        if (i) throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), i = !0
                }
            }, u.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            const T = 4096;

            function S(t, e, r) {
                let n = "";
                r = Math.min(t.length, r);
                for (let o = e; o < r; ++o) n += String.fromCharCode(127 & t[o]);
                return n
            }

            function I(t, e, r) {
                let n = "";
                r = Math.min(t.length, r);
                for (let o = e; o < r; ++o) n += String.fromCharCode(t[o]);
                return n
            }

            function C(t, e, r) {
                const n = t.length;
                (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                let o = "";
                for (let i = e; i < r; ++i) o += Y[t[i]];
                return o
            }

            function N(t, e, r) {
                const n = t.slice(e, r);
                let o = "";
                for (let i = 0; i < n.length - 1; i += 2) o += String.fromCharCode(n[i] + 256 * n[i + 1]);
                return o
            }

            function U(t, e, r) {
                if (t % 1 !== 0 || t < 0) throw new RangeError("offset is not uint");
                if (t + e > r) throw new RangeError("Trying to access beyond buffer length")
            }

            function O(t, e, r, n, o, i) {
                if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (e > o || e < i) throw new RangeError('"value" argument is out of bounds');
                if (r + n > t.length) throw new RangeError("Index out of range")
            }

            function D(t, e, r, n, o) {
                $(e, n, o, t, r, 7);
                let i = Number(e & BigInt(4294967295));
                t[r++] = i, i >>= 8, t[r++] = i, i >>= 8, t[r++] = i, i >>= 8, t[r++] = i;
                let s = Number(e >> BigInt(32) & BigInt(4294967295));
                return t[r++] = s, s >>= 8, t[r++] = s, s >>= 8, t[r++] = s, s >>= 8, t[r++] = s, r
            }

            function L(t, e, r, n, o) {
                $(e, n, o, t, r, 7);
                let i = Number(e & BigInt(4294967295));
                t[r + 7] = i, i >>= 8, t[r + 6] = i, i >>= 8, t[r + 5] = i, i >>= 8, t[r + 4] = i;
                let s = Number(e >> BigInt(32) & BigInt(4294967295));
                return t[r + 3] = s, s >>= 8, t[r + 2] = s, s >>= 8, t[r + 1] = s, s >>= 8, t[r] = s, r + 8
            }

            function R(t, e, r, n, o, i) {
                if (r + n > t.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("Index out of range")
            }

            function z(t, e, r, n, i) {
                return e = +e, r >>>= 0, i || R(t, 0, r, 4), o.write(t, e, r, n, 23, 4), r + 4
            }

            function P(t, e, r, n, i) {
                return e = +e, r >>>= 0, i || R(t, 0, r, 8), o.write(t, e, r, n, 52, 8), r + 8
            }
            u.prototype.slice = function(t, e) {
                const r = this.length;
                (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t);
                const n = this.subarray(t, e);
                return Object.setPrototypeOf(n, u.prototype), n
            }, u.prototype.readUintLE = u.prototype.readUIntLE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || U(t, e, this.length);
                let n = this[t],
                    o = 1,
                    i = 0;
                for (; ++i < e && (o *= 256);) n += this[t + i] * o;
                return n
            }, u.prototype.readUintBE = u.prototype.readUIntBE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || U(t, e, this.length);
                let n = this[t + --e],
                    o = 1;
                for (; e > 0 && (o *= 256);) n += this[t + --e] * o;
                return n
            }, u.prototype.readUint8 = u.prototype.readUInt8 = function(t, e) {
                return t >>>= 0, e || U(t, 1, this.length), this[t]
            }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(t, e) {
                return t >>>= 0, e || U(t, 2, this.length), this[t] | this[t + 1] << 8
            }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(t, e) {
                return t >>>= 0, e || U(t, 2, this.length), this[t] << 8 | this[t + 1]
            }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(t, e) {
                return t >>>= 0, e || U(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(t, e) {
                return t >>>= 0, e || U(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }, u.prototype.readBigUInt64LE = Z((function(t) {
                H(t >>>= 0, "offset");
                const e = this[t],
                    r = this[t + 7];
                void 0 !== e && void 0 !== r || V(t, this.length - 8);
                const n = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
                    o = this[++t] + 256 * this[++t] + 65536 * this[++t] + r * 2 ** 24;
                return BigInt(n) + (BigInt(o) << BigInt(32))
            })), u.prototype.readBigUInt64BE = Z((function(t) {
                H(t >>>= 0, "offset");
                const e = this[t],
                    r = this[t + 7];
                void 0 !== e && void 0 !== r || V(t, this.length - 8);
                const n = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
                    o = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r;
                return (BigInt(n) << BigInt(32)) + BigInt(o)
            })), u.prototype.readIntLE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || U(t, e, this.length);
                let n = this[t],
                    o = 1,
                    i = 0;
                for (; ++i < e && (o *= 256);) n += this[t + i] * o;
                return o *= 128, n >= o && (n -= Math.pow(2, 8 * e)), n
            }, u.prototype.readIntBE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || U(t, e, this.length);
                let n = e,
                    o = 1,
                    i = this[t + --n];
                for (; n > 0 && (o *= 256);) i += this[t + --n] * o;
                return o *= 128, i >= o && (i -= Math.pow(2, 8 * e)), i
            }, u.prototype.readInt8 = function(t, e) {
                return t >>>= 0, e || U(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            }, u.prototype.readInt16LE = function(t, e) {
                t >>>= 0, e || U(t, 2, this.length);
                const r = this[t] | this[t + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, u.prototype.readInt16BE = function(t, e) {
                t >>>= 0, e || U(t, 2, this.length);
                const r = this[t + 1] | this[t] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, u.prototype.readInt32LE = function(t, e) {
                return t >>>= 0, e || U(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }, u.prototype.readInt32BE = function(t, e) {
                return t >>>= 0, e || U(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }, u.prototype.readBigInt64LE = Z((function(t) {
                H(t >>>= 0, "offset");
                const e = this[t],
                    r = this[t + 7];
                void 0 !== e && void 0 !== r || V(t, this.length - 8);
                const n = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24);
                return (BigInt(n) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24)
            })), u.prototype.readBigInt64BE = Z((function(t) {
                H(t >>>= 0, "offset");
                const e = this[t],
                    r = this[t + 7];
                void 0 !== e && void 0 !== r || V(t, this.length - 8);
                const n = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
                return (BigInt(n) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r)
            })), u.prototype.readFloatLE = function(t, e) {
                return t >>>= 0, e || U(t, 4, this.length), o.read(this, t, !0, 23, 4)
            }, u.prototype.readFloatBE = function(t, e) {
                return t >>>= 0, e || U(t, 4, this.length), o.read(this, t, !1, 23, 4)
            }, u.prototype.readDoubleLE = function(t, e) {
                return t >>>= 0, e || U(t, 8, this.length), o.read(this, t, !0, 52, 8)
            }, u.prototype.readDoubleBE = function(t, e) {
                return t >>>= 0, e || U(t, 8, this.length), o.read(this, t, !1, 52, 8)
            }, u.prototype.writeUintLE = u.prototype.writeUIntLE = function(t, e, r, n) {
                if (t = +t, e >>>= 0, r >>>= 0, !n) {
                    O(this, t, e, r, Math.pow(2, 8 * r) - 1, 0)
                }
                let o = 1,
                    i = 0;
                for (this[e] = 255 & t; ++i < r && (o *= 256);) this[e + i] = t / o & 255;
                return e + r
            }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(t, e, r, n) {
                if (t = +t, e >>>= 0, r >>>= 0, !n) {
                    O(this, t, e, r, Math.pow(2, 8 * r) - 1, 0)
                }
                let o = r - 1,
                    i = 1;
                for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) this[e + o] = t / i & 255;
                return e + r
            }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(t, e, r) {
                return t = +t, e >>>= 0, r || O(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
            }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || O(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
            }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || O(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
            }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || O(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
            }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || O(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
            }, u.prototype.writeBigUInt64LE = Z((function(t, e = 0) {
                return D(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
            })), u.prototype.writeBigUInt64BE = Z((function(t, e = 0) {
                return L(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
            })), u.prototype.writeIntLE = function(t, e, r, n) {
                if (t = +t, e >>>= 0, !n) {
                    const n = Math.pow(2, 8 * r - 1);
                    O(this, t, e, r, n - 1, -n)
                }
                let o = 0,
                    i = 1,
                    s = 0;
                for (this[e] = 255 & t; ++o < r && (i *= 256);) t < 0 && 0 === s && 0 !== this[e + o - 1] && (s = 1), this[e + o] = (t / i >> 0) - s & 255;
                return e + r
            }, u.prototype.writeIntBE = function(t, e, r, n) {
                if (t = +t, e >>>= 0, !n) {
                    const n = Math.pow(2, 8 * r - 1);
                    O(this, t, e, r, n - 1, -n)
                }
                let o = r - 1,
                    i = 1,
                    s = 0;
                for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) t < 0 && 0 === s && 0 !== this[e + o + 1] && (s = 1), this[e + o] = (t / i >> 0) - s & 255;
                return e + r
            }, u.prototype.writeInt8 = function(t, e, r) {
                return t = +t, e >>>= 0, r || O(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
            }, u.prototype.writeInt16LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || O(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
            }, u.prototype.writeInt16BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || O(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
            }, u.prototype.writeInt32LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || O(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
            }, u.prototype.writeInt32BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || O(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
            }, u.prototype.writeBigInt64LE = Z((function(t, e = 0) {
                return D(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            })), u.prototype.writeBigInt64BE = Z((function(t, e = 0) {
                return L(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            })), u.prototype.writeFloatLE = function(t, e, r) {
                return z(this, t, e, !0, r)
            }, u.prototype.writeFloatBE = function(t, e, r) {
                return z(this, t, e, !1, r)
            }, u.prototype.writeDoubleLE = function(t, e, r) {
                return P(this, t, e, !0, r)
            }, u.prototype.writeDoubleBE = function(t, e, r) {
                return P(this, t, e, !1, r)
            }, u.prototype.copy = function(t, e, r, n) {
                if (!u.isBuffer(t)) throw new TypeError("argument should be a Buffer");
                if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (e < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
                const o = n - r;
                return this === t && "function" === typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, r, n) : Uint8Array.prototype.set.call(t, this.subarray(r, n), e), o
            }, u.prototype.fill = function(t, e, r, n) {
                if ("string" === typeof t) {
                    if ("string" === typeof e ? (n = e, e = 0, r = this.length) : "string" === typeof r && (n = r, r = this.length), void 0 !== n && "string" !== typeof n) throw new TypeError("encoding must be a string");
                    if ("string" === typeof n && !u.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                    if (1 === t.length) {
                        const e = t.charCodeAt(0);
                        ("utf8" === n && e < 128 || "latin1" === n) && (t = e)
                    }
                } else "number" === typeof t ? t &= 255 : "boolean" === typeof t && (t = Number(t));
                if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
                if (r <= e) return this;
                let o;
                if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" === typeof t)
                    for (o = e; o < r; ++o) this[o] = t;
                else {
                    const i = u.isBuffer(t) ? t : u.from(t, n),
                        s = i.length;
                    if (0 === s) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                    for (o = 0; o < r - e; ++o) this[o + e] = i[o % s]
                }
                return this
            };
            const j = {};

            function M(t, e, r) {
                j[t] = class extends r {
                    constructor() {
                        super(), Object.defineProperty(this, "message", {
                            value: e.apply(this, arguments),
                            writable: !0,
                            configurable: !0
                        }), this.name = `${this.name} [${t}]`, this.stack, delete this.name
                    }
                    get code() {
                        return t
                    }
                    set code(t) {
                        Object.defineProperty(this, "code", {
                            configurable: !0,
                            enumerable: !0,
                            value: t,
                            writable: !0
                        })
                    }
                    toString() {
                        return `${this.name} [${t}]: ${this.message}`
                    }
                }
            }

            function F(t) {
                let e = "",
                    r = t.length;
                const n = "-" === t[0] ? 1 : 0;
                for (; r >= n + 4; r -= 3) e = `_${t.slice(r-3,r)}${e}`;
                return `${t.slice(0,r)}${e}`
            }

            function $(t, e, r, n, o, i) {
                if (t > r || t < e) {
                    const n = "bigint" === typeof e ? "n" : "";
                    let o;
                    throw o = i > 3 ? 0 === e || e === BigInt(0) ? `>= 0${n} and < 2${n} ** ${8*(i+1)}${n}` : `>= -(2${n} ** ${8*(i+1)-1}${n}) and < 2 ** ${8*(i+1)-1}${n}` : `>= ${e}${n} and <= ${r}${n}`, new j.ERR_OUT_OF_RANGE("value", o, t)
                }! function(t, e, r) {
                    H(e, "offset"), void 0 !== t[e] && void 0 !== t[e + r] || V(e, t.length - (r + 1))
                }(n, o, i)
            }

            function H(t, e) {
                if ("number" !== typeof t) throw new j.ERR_INVALID_ARG_TYPE(e, "number", t)
            }

            function V(t, e, r) {
                if (Math.floor(t) !== t) throw H(t, r), new j.ERR_OUT_OF_RANGE(r || "offset", "an integer", t);
                if (e < 0) throw new j.ERR_BUFFER_OUT_OF_BOUNDS;
                throw new j.ERR_OUT_OF_RANGE(r || "offset", `>= ${r?1:0} and <= ${e}`, t)
            }
            M("ERR_BUFFER_OUT_OF_BOUNDS", (function(t) {
                return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
            }), RangeError), M("ERR_INVALID_ARG_TYPE", (function(t, e) {
                return `The "${t}" argument must be of type number. Received type ${typeof e}`
            }), TypeError), M("ERR_OUT_OF_RANGE", (function(t, e, r) {
                let n = `The value of "${t}" is out of range.`,
                    o = r;
                return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? o = F(String(r)) : "bigint" === typeof r && (o = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (o = F(o)), o += "n"), n += ` It must be ${e}. Received ${o}`, n
            }), RangeError);
            const G = /[^+/0-9A-Za-z-_]/g;

            function q(t, e) {
                let r;
                e = e || 1 / 0;
                const n = t.length;
                let o = null;
                const i = [];
                for (let s = 0; s < n; ++s) {
                    if (r = t.charCodeAt(s), r > 55295 && r < 57344) {
                        if (!o) {
                            if (r > 56319) {
                                (e -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === n) {
                                (e -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            o = r;
                            continue
                        }
                        if (r < 56320) {
                            (e -= 3) > -1 && i.push(239, 191, 189), o = r;
                            continue
                        }
                        r = 65536 + (o - 55296 << 10 | r - 56320)
                    } else o && (e -= 3) > -1 && i.push(239, 191, 189);
                    if (o = null, r < 128) {
                        if ((e -= 1) < 0) break;
                        i.push(r)
                    } else if (r < 2048) {
                        if ((e -= 2) < 0) break;
                        i.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((e -= 3) < 0) break;
                        i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112)) throw new Error("Invalid code point");
                        if ((e -= 4) < 0) break;
                        i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return i
            }

            function W(t) {
                return n.toByteArray(function(t) {
                    if ((t = (t = t.split("=")[0]).trim().replace(G, "")).length < 2) return "";
                    for (; t.length % 4 !== 0;) t += "=";
                    return t
                }(t))
            }

            function J(t, e, r, n) {
                let o;
                for (o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o) e[o + r] = t[o];
                return o
            }

            function X(t, e) {
                return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
            }

            function K(t) {
                return t !== t
            }
            const Y = function() {
                const t = "0123456789abcdef",
                    e = new Array(256);
                for (let r = 0; r < 16; ++r) {
                    const n = 16 * r;
                    for (let o = 0; o < 16; ++o) e[n + o] = t[r] + t[o]
                }
                return e
            }();

            function Z(t) {
                return "undefined" === typeof BigInt ? Q : t
            }

            function Q() {
                throw new Error("BigInt not supported")
            }
        },
        23294: function(t, e, r) {
            "use strict";
            const n = r(86154);
            t.exports = function(t) {
                return "function" === typeof t.stream ? n(t.stream()) : n(new Response(t).body)
            }
        },
        86154: function(t) {
            "use strict";
            t.exports = async function*(t, e = {}) {
                const r = t.getReader();
                try {
                    for (;;) {
                        const t = await r.read();
                        if (t.done) return;
                        yield t.value
                    }
                } finally {
                    !0 !== e.preventCancel && r.cancel(), r.releaseLock()
                }
            }
        },
        32114: function(t) {
            "use strict";

            function e(t, e) {
                for (const r in e) Object.defineProperty(t, r, {
                    value: e[r],
                    enumerable: !0,
                    configurable: !0
                });
                return t
            }
            t.exports = function(t, r, n) {
                if (!t || "string" === typeof t) throw new TypeError("Please pass an Error to err-code");
                n || (n = {}), "object" === typeof r && (n = r, r = ""), r && (n.code = r);
                try {
                    return e(t, n)
                } catch (o) {
                    n.message = t.message, n.stack = t.stack;
                    const r = function() {};
                    r.prototype = Object.create(Object.getPrototypeOf(t));
                    return e(new r, n)
                }
            }
        },
        30043: function(t, e, r) {
            "use strict";
            const n = r(20544),
                {
                    fromString: o
                } = r(41113);
            class i {
                constructor(t, e, r = 0) {
                    this._options = t, this._popCount = 0, this._parent = e, this._posAtParent = r, this._children = new n, this.key = null
                }
                async put(t, e) {
                    const r = await this._findNewBucketAndPos(t);
                    await r.bucket._putAt(r, t, e)
                }
                async get(t) {
                    const e = await this._findChild(t);
                    if (e) return e.value
                }
                async del(t) {
                    const e = await this._findPlace(t),
                        r = e.bucket._at(e.pos);
                    r && r.key === t && e.bucket._delAt(e.pos)
                }
                leafCount() {
                    return this._children.compactArray().reduce(((t, e) => e instanceof i ? t + e.leafCount() : t + 1), 0)
                }
                childrenCount() {
                    return this._children.length
                }
                onlyChild() {
                    return this._children.get(0)
                }* eachLeafSeries() {
                    const t = this._children.compactArray();
                    for (const e of t) e instanceof i ? yield* e.eachLeafSeries(): yield e;
                    return []
                }
                serialize(t, e) {
                    return e(this._children.reduce(((r, n, o) => (n && (n instanceof i ? r.push(n.serialize(t, e)) : r.push(t(n, o))), r)), []))
                }
                asyncTransform(t, e) {
                    return c(this, t, e)
                }
                toJSON() {
                    return this.serialize(a, u)
                }
                prettyPrint() {
                    return JSON.stringify(this.toJSON(), null, "  ")
                }
                tableSize() {
                    return Math.pow(2, this._options.bits)
                }
                async _findChild(t) {
                    const e = await this._findPlace(t),
                        r = e.bucket._at(e.pos);
                    if (!(r instanceof i)) return r && r.key === t ? r : void 0
                }
                async _findPlace(t) {
                    const e = this._options.hash("string" === typeof t ? o(t) : t),
                        r = await e.take(this._options.bits),
                        n = this._children.get(r);
                    return n instanceof i ? n._findPlace(e) : {
                        bucket: this,
                        pos: r,
                        hash: e,
                        existingChild: n
                    }
                }
                async _findNewBucketAndPos(t) {
                    const e = await this._findPlace(t);
                    if (e.existingChild && e.existingChild.key !== t) {
                        const t = new i(this._options, e.bucket, e.pos);
                        e.bucket._putObjectAt(e.pos, t);
                        const r = await t._findPlace(e.existingChild.hash);
                        return r.bucket._putAt(r, e.existingChild.key, e.existingChild.value), t._findNewBucketAndPos(e.hash)
                    }
                    return e
                }
                _putAt(t, e, r) {
                    this._putObjectAt(t.pos, {
                        key: e,
                        value: r,
                        hash: t.hash
                    })
                }
                _putObjectAt(t, e) {
                    this._children.get(t) || this._popCount++, this._children.set(t, e)
                }
                _delAt(t) {
                    if (-1 === t) throw new Error("Invalid position");
                    this._children.get(t) && this._popCount--, this._children.unset(t), this._level()
                }
                _level() {
                    if (this._parent && this._popCount <= 1)
                        if (1 === this._popCount) {
                            const t = this._children.find(s);
                            if (t && !(t instanceof i)) {
                                const e = t.hash;
                                e.untake(this._options.bits);
                                const r = {
                                    pos: this._posAtParent,
                                    hash: e,
                                    bucket: this._parent
                                };
                                this._parent._putAt(r, t.key, t.value)
                            }
                        } else this._parent._delAt(this._posAtParent)
                }
                _at(t) {
                    return this._children.get(t)
                }
            }

            function s(t) {
                return Boolean(t)
            }

            function a(t, e) {
                return t.key
            }

            function u(t) {
                return t
            }
            async function c(t, e, r) {
                const n = [];
                for (const o of t._children.compactArray())
                    if (o instanceof i) await c(o, e, r);
                    else {
                        const r = await e(o);
                        n.push({
                            bitField: t._children.bitField(),
                            children: r
                        })
                    }
                return r(n)
            }
            t.exports = i
        },
        51536: function(t) {
            "use strict";
            const e = [255, 254, 252, 248, 240, 224, 192, 128],
                r = [1, 3, 7, 15, 31, 63, 127, 255];

            function n(t, n, o) {
                const i = function(t, n) {
                    return e[t] & r[Math.min(n + t - 1, 7)]
                }(n, o);
                return (t & i) >>> n
            }
            t.exports = class {
                constructor(t) {
                    this._value = t, this._currentBytePos = t.length - 1, this._currentBitPos = 7
                }
                availableBits() {
                    return this._currentBitPos + 1 + 8 * this._currentBytePos
                }
                totalBits() {
                    return 8 * this._value.length
                }
                take(t) {
                    let e = t,
                        r = 0;
                    for (; e && this._haveBits();) {
                        const t = this._value[this._currentBytePos],
                            o = this._currentBitPos + 1,
                            i = Math.min(o, e);
                        r = (r << i) + n(t, o - i, i), e -= i, this._currentBitPos -= i, this._currentBitPos < 0 && (this._currentBitPos = 7, this._currentBytePos--)
                    }
                    return r
                }
                untake(t) {
                    for (this._currentBitPos += t; this._currentBitPos > 7;) this._currentBitPos -= 8, this._currentBytePos += 1
                }
                _haveBits() {
                    return this._currentBytePos >= 0
                }
            }
        },
        31712: function(t, e, r) {
            "use strict";
            const n = r(51536),
                {
                    concat: o
                } = r(20605);
            class i {
                constructor(t, e) {
                    if (!(t instanceof Uint8Array)) throw new Error("can only hash Uint8Arrays");
                    this._value = t, this._hashFn = e, this._depth = -1, this._availableBits = 0, this._currentBufferIndex = 0, this._buffers = []
                }
                async take(t) {
                    let e = t;
                    for (; this._availableBits < e;) await this._produceMoreBits();
                    let r = 0;
                    for (; e > 0;) {
                        const t = this._buffers[this._currentBufferIndex],
                            n = Math.min(t.availableBits(), e);
                        r = (r << n) + t.take(n), e -= n, this._availableBits -= n, 0 === t.availableBits() && this._currentBufferIndex++
                    }
                    return r
                }
                untake(t) {
                    let e = t;
                    for (; e > 0;) {
                        const t = this._buffers[this._currentBufferIndex],
                            r = Math.min(t.totalBits() - t.availableBits(), e);
                        t.untake(r), e -= r, this._availableBits += r, this._currentBufferIndex > 0 && t.totalBits() === t.availableBits() && (this._depth--, this._currentBufferIndex--)
                    }
                }
                async _produceMoreBits() {
                    this._depth++;
                    const t = this._depth ? o([this._value, Uint8Array.from([this._depth])]) : this._value,
                        e = await this._hashFn(t),
                        r = new n(e);
                    this._buffers.push(r), this._availableBits += r.availableBits()
                }
            }
            t.exports = function(t) {
                return function(e) {
                    return e instanceof i ? e : new i(e, t)
                }
            }, t.exports.InfiniteHash = i
        },
        54563: function(t, e, r) {
            "use strict";
            const n = r(30043),
                o = r(31712);
            t.exports = {
                createHAMT: function(t) {
                    if (!t || !t.hashFn) throw new Error("please define an options.hashFn");
                    const e = {
                        bits: t.bits || 8,
                        hash: o(t.hashFn)
                    };
                    return new n(e)
                },
                Bucket: n
            }
        },
        33310: function(t) {
            "use strict";
            t.exports = t => {
                if ("[object Object]" !== Object.prototype.toString.call(t)) return !1;
                const e = Object.getPrototypeOf(t);
                return null === e || e === Object.prototype
            }
        },
        31303: function(t) {
            "use strict";
            t.exports = async t => {
                const e = [];
                for await (const r of t) e.push(r);
                return e
            }
        },
        78165: function(t) {
            "use strict";
            t.exports = async function*(t, e = 1) {
                let r = [];
                e < 1 && (e = 1);
                for await (const n of t) for (r.push(n); r.length >= e;) yield r.slice(0, e), r = r.slice(e);
                for (; r.length;) yield r.slice(0, e), r = r.slice(e)
            }
        },
        64593: function(t) {
            "use strict";
            t.exports = async t => {
                for await (const e of t);
            }
        },
        55565: function(t) {
            "use strict";
            t.exports = async function*(t, e) {
                for await (const r of t) await e(r) && (yield r)
            }
        },
        93093: function(t) {
            "use strict";
            t.exports = async t => {
                let e;
                for await (const r of t) e = r;
                return e
            }
        },
        32121: function(t) {
            "use strict";
            t.exports = async function*(t, e) {
                for await (const r of t) yield e(r)
            }
        },
        84810: function(t, e, r) {
            "use strict";
            const n = r(78165);
            t.exports = async function*(t, e = 1) {
                for await (const r of n(t, e)) {
                    const t = r.map((t => t().then((t => ({
                        ok: !0,
                        value: t
                    })), (t => ({
                        ok: !1,
                        err: t
                    })))));
                    for (let e = 0; e < t.length; e++) {
                        const r = await t[e];
                        if (!r.ok) throw r.err;
                        yield r.value
                    }
                }
            }
        },
        28132: function(t) {
            "use strict";
            t.exports = function(t) {
                const [e, r] = t[Symbol.asyncIterator] ? [t[Symbol.asyncIterator](), Symbol.asyncIterator] : [t[Symbol.iterator](), Symbol.iterator], n = [];
                return {
                    peek: () => e.next(),
                    push: t => {
                        n.push(t)
                    },
                    next: () => n.length ? {
                        done: !1,
                        value: n.shift()
                    } : e.next(),
                    [r]() {
                        return this
                    }
                }
            }
        },
        60618: function(t) {
            const e = (...t) => {
                    let e;
                    for (; t.length;) e = t.shift()(e);
                    return e
                },
                r = t => t && ("function" === typeof t[Symbol.asyncIterator] || "function" === typeof t[Symbol.iterator] || "function" === typeof t.next),
                n = t => t && "function" === typeof t.sink && r(t.source),
                o = t => e => (t.sink(e), t.source),
                i = (...t) => {
                    if (n(t[0])) {
                        const e = t[0];
                        t[0] = () => e.source
                    } else if (r(t[0])) {
                        const e = t[0];
                        t[0] = () => e
                    }
                    if (t.length > 1 && n(t[t.length - 1]) && (t[t.length - 1] = t[t.length - 1].sink), t.length > 2)
                        for (let e = 1; e < t.length - 1; e++) n(t[e]) && (t[e] = o(t[e]));
                    return e(...t)
                };
            t.exports = i, t.exports.pipe = i, t.exports.rawPipe = e, t.exports.isIterable = r, t.exports.isDuplex = n
        },
        37939: function(t) {
            "use strict";
            t.exports = async function*(t, e) {
                let r = 0;
                if (!(e < 1))
                    for await (const n of t) if (yield n, r++, r === e) return
            }
        },
        70942: function(t, e, r) {
            "use strict";
            const n = r(33310),
                {
                    hasOwnProperty: o
                } = Object.prototype,
                {
                    propertyIsEnumerable: i
                } = Object,
                s = (t, e, r) => Object.defineProperty(t, e, {
                    value: r,
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                }),
                a = this,
                u = {
                    concatArrays: !1,
                    ignoreUndefined: !1
                },
                c = t => {
                    const e = [];
                    for (const r in t) o.call(t, r) && e.push(r);
                    if (Object.getOwnPropertySymbols) {
                        const r = Object.getOwnPropertySymbols(t);
                        for (const n of r) i.call(t, n) && e.push(n)
                    }
                    return e
                };

            function f(t) {
                return Array.isArray(t) ? function(t) {
                    const e = t.slice(0, 0);
                    return c(t).forEach((r => {
                        s(e, r, f(t[r]))
                    })), e
                }(t) : n(t) ? function(t) {
                    const e = null === Object.getPrototypeOf(t) ? Object.create(null) : {};
                    return c(t).forEach((r => {
                        s(e, r, f(t[r]))
                    })), e
                }(t) : t
            }
            const h = (t, e, r, n) => (r.forEach((r => {
                "undefined" === typeof e[r] && n.ignoreUndefined || (r in t && t[r] !== Object.getPrototypeOf(t) ? s(t, r, l(t[r], e[r], n)) : s(t, r, f(e[r])))
            })), t);

            function l(t, e, r) {
                return r.concatArrays && Array.isArray(t) && Array.isArray(e) ? ((t, e, r) => {
                    let n = t.slice(0, 0),
                        i = 0;
                    return [t, e].forEach((e => {
                        const a = [];
                        for (let r = 0; r < e.length; r++) o.call(e, r) && (a.push(String(r)), s(n, i++, e === t ? e[r] : f(e[r])));
                        n = h(n, e, c(e).filter((t => !a.includes(t))), r)
                    })), n
                })(t, e, r) : n(e) && n(t) ? h(t, e, c(e), r) : f(e)
            }
            t.exports = function(...t) {
                const e = l(f(u), this !== a && this || {}, u);
                let r = {
                    _: {}
                };
                for (const o of t)
                    if (void 0 !== o) {
                        if (!n(o)) throw new TypeError("`" + o + "` is not an Option Object");
                        r = l(r, {
                            _: o
                        }, e)
                    }
                return r._
            }
        },
        40469: function(t, e, r) {
            t.exports = r(18027)
        },
        18027: function(t, e) {
            ! function(r, n) {
                "use strict";
                var o = {
                    version: "3.0.0",
                    x86: {},
                    x64: {},
                    inputValidation: !0
                };

                function i(t) {
                    if (!Array.isArray(t) && !ArrayBuffer.isView(t)) return !1;
                    for (var e = 0; e < t.length; e++)
                        if (!Number.isInteger(t[e]) || t[e] < 0 || t[e] > 255) return !1;
                    return !0
                }

                function s(t, e) {
                    return (65535 & t) * e + (((t >>> 16) * e & 65535) << 16)
                }

                function a(t, e) {
                    return t << e | t >>> 32 - e
                }

                function u(t) {
                    return t = s(t ^= t >>> 16, 2246822507), t = s(t ^= t >>> 13, 3266489909), t ^= t >>> 16
                }

                function c(t, e) {
                    t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
                    var r = [0, 0, 0, 0];
                    return r[3] += t[3] + e[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += t[2] + e[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += t[1] + e[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += t[0] + e[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]]
                }

                function f(t, e) {
                    t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
                    var r = [0, 0, 0, 0];
                    return r[3] += t[3] * e[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += t[2] * e[3], r[1] += r[2] >>> 16, r[2] &= 65535, r[2] += t[3] * e[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += t[1] * e[3], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += t[2] * e[2], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += t[3] * e[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += t[0] * e[3] + t[1] * e[2] + t[2] * e[1] + t[3] * e[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]]
                }

                function h(t, e) {
                    return 32 === (e %= 64) ? [t[1], t[0]] : e < 32 ? [t[0] << e | t[1] >>> 32 - e, t[1] << e | t[0] >>> 32 - e] : (e -= 32, [t[1] << e | t[0] >>> 32 - e, t[0] << e | t[1] >>> 32 - e])
                }

                function l(t, e) {
                    return 0 === (e %= 64) ? t : e < 32 ? [t[0] << e | t[1] >>> 32 - e, t[1] << e] : [t[1] << e - 32, 0]
                }

                function d(t, e) {
                    return [t[0] ^ e[0], t[1] ^ e[1]]
                }

                function p(t) {
                    return t = d(t, [0, t[0] >>> 1]), t = d(t = f(t, [4283543511, 3981806797]), [0, t[0] >>> 1]), t = d(t = f(t, [3301882366, 444984403]), [0, t[0] >>> 1])
                }
                o.x86.hash32 = function(t, e) {
                    if (o.inputValidation && !i(t)) return n;
                    e = e || 0;
                    for (var r = t.length % 4, c = t.length - r, f = e, h = 0, l = 3432918353, d = 461845907, p = 0; p < c; p += 4) h = s(h = t[p] | t[p + 1] << 8 | t[p + 2] << 16 | t[p + 3] << 24, l), h = s(h = a(h, 15), d), f = s(f = a(f ^= h, 13), 5) + 3864292196;
                    switch (h = 0, r) {
                        case 3:
                            h ^= t[p + 2] << 16;
                        case 2:
                            h ^= t[p + 1] << 8;
                        case 1:
                            h = s(h ^= t[p], l), f ^= h = s(h = a(h, 15), d)
                    }
                    return (f = u(f ^= t.length)) >>> 0
                }, o.x86.hash128 = function(t, e) {
                    if (o.inputValidation && !i(t)) return n;
                    e = e || 0;
                    for (var r = t.length % 16, c = t.length - r, f = e, h = e, l = e, d = e, p = 0, y = 0, g = 0, w = 0, b = 597399067, m = 2869860233, v = 951274213, _ = 2716044179, E = 0; E < c; E += 16) p = t[E] | t[E + 1] << 8 | t[E + 2] << 16 | t[E + 3] << 24, y = t[E + 4] | t[E + 5] << 8 | t[E + 6] << 16 | t[E + 7] << 24, g = t[E + 8] | t[E + 9] << 8 | t[E + 10] << 16 | t[E + 11] << 24, w = t[E + 12] | t[E + 13] << 8 | t[E + 14] << 16 | t[E + 15] << 24, p = a(p = s(p, b), 15), f = a(f ^= p = s(p, m), 19), f = s(f += h, 5) + 1444728091, y = a(y = s(y, m), 16), h = a(h ^= y = s(y, v), 17), h = s(h += l, 5) + 197830471, g = a(g = s(g, v), 17), l = a(l ^= g = s(g, _), 15), l = s(l += d, 5) + 2530024501, w = a(w = s(w, _), 18), d = a(d ^= w = s(w, b), 13), d = s(d += f, 5) + 850148119;
                    switch (p = 0, y = 0, g = 0, w = 0, r) {
                        case 15:
                            w ^= t[E + 14] << 16;
                        case 14:
                            w ^= t[E + 13] << 8;
                        case 13:
                            w = s(w ^= t[E + 12], _), d ^= w = s(w = a(w, 18), b);
                        case 12:
                            g ^= t[E + 11] << 24;
                        case 11:
                            g ^= t[E + 10] << 16;
                        case 10:
                            g ^= t[E + 9] << 8;
                        case 9:
                            g = s(g ^= t[E + 8], v), l ^= g = s(g = a(g, 17), _);
                        case 8:
                            y ^= t[E + 7] << 24;
                        case 7:
                            y ^= t[E + 6] << 16;
                        case 6:
                            y ^= t[E + 5] << 8;
                        case 5:
                            y = s(y ^= t[E + 4], m), h ^= y = s(y = a(y, 16), v);
                        case 4:
                            p ^= t[E + 3] << 24;
                        case 3:
                            p ^= t[E + 2] << 16;
                        case 2:
                            p ^= t[E + 1] << 8;
                        case 1:
                            p = s(p ^= t[E], b), f ^= p = s(p = a(p, 15), m)
                    }
                    return f ^= t.length, f += h ^= t.length, f += l ^= t.length, h += f += d ^= t.length, l += f, d += f, f = u(f), f += h = u(h), f += l = u(l), h += f += d = u(d), l += f, d += f, ("00000000" + (f >>> 0).toString(16)).slice(-8) + ("00000000" + (h >>> 0).toString(16)).slice(-8) + ("00000000" + (l >>> 0).toString(16)).slice(-8) + ("00000000" + (d >>> 0).toString(16)).slice(-8)
                }, o.x64.hash128 = function(t, e) {
                    if (o.inputValidation && !i(t)) return n;
                    e = e || 0;
                    for (var r = t.length % 16, s = t.length - r, a = [0, e], u = [0, e], y = [0, 0], g = [0, 0], w = [2277735313, 289559509], b = [1291169091, 658871167], m = 0; m < s; m += 16) y = [t[m + 4] | t[m + 5] << 8 | t[m + 6] << 16 | t[m + 7] << 24, t[m] | t[m + 1] << 8 | t[m + 2] << 16 | t[m + 3] << 24], g = [t[m + 12] | t[m + 13] << 8 | t[m + 14] << 16 | t[m + 15] << 24, t[m + 8] | t[m + 9] << 8 | t[m + 10] << 16 | t[m + 11] << 24], y = h(y = f(y, w), 31), a = c(a = h(a = d(a, y = f(y, b)), 27), u), a = c(f(a, [0, 5]), [0, 1390208809]), g = h(g = f(g, b), 33), u = c(u = h(u = d(u, g = f(g, w)), 31), a), u = c(f(u, [0, 5]), [0, 944331445]);
                    switch (y = [0, 0], g = [0, 0], r) {
                        case 15:
                            g = d(g, l([0, t[m + 14]], 48));
                        case 14:
                            g = d(g, l([0, t[m + 13]], 40));
                        case 13:
                            g = d(g, l([0, t[m + 12]], 32));
                        case 12:
                            g = d(g, l([0, t[m + 11]], 24));
                        case 11:
                            g = d(g, l([0, t[m + 10]], 16));
                        case 10:
                            g = d(g, l([0, t[m + 9]], 8));
                        case 9:
                            g = f(g = d(g, [0, t[m + 8]]), b), u = d(u, g = f(g = h(g, 33), w));
                        case 8:
                            y = d(y, l([0, t[m + 7]], 56));
                        case 7:
                            y = d(y, l([0, t[m + 6]], 48));
                        case 6:
                            y = d(y, l([0, t[m + 5]], 40));
                        case 5:
                            y = d(y, l([0, t[m + 4]], 32));
                        case 4:
                            y = d(y, l([0, t[m + 3]], 24));
                        case 3:
                            y = d(y, l([0, t[m + 2]], 16));
                        case 2:
                            y = d(y, l([0, t[m + 1]], 8));
                        case 1:
                            y = f(y = d(y, [0, t[m]]), w), a = d(a, y = f(y = h(y, 31), b))
                    }
                    return a = c(a = d(a, [0, t.length]), u = d(u, [0, t.length])), u = c(u, a), a = c(a = p(a), u = p(u)), u = c(u, a), ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (u[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (u[1] >>> 0).toString(16)).slice(-8)
                }, t.exports && (e = t.exports = o), e.murmurHash3 = o
            }()
        },
        42693: function(t, e, r) {
            "use strict";
            const n = r(99353),
                o = ["Failed to fetch", "NetworkError when attempting to fetch resource.", "The Internet connection appears to be offline.", "Network request failed"];
            class i extends Error {
                constructor(t) {
                    super(), t instanceof Error ? (this.originalError = t, ({
                        message: t
                    } = t)) : (this.originalError = new Error(t), this.originalError.stack = this.stack), this.name = "AbortError", this.message = t
                }
            }
            const s = (t, e) => new Promise(((r, s) => {
                e = {
                    onFailedAttempt: () => {},
                    retries: 10,
                    ...e
                };
                const a = n.operation(e);
                a.attempt((async n => {
                    try {
                        r(await t(n))
                    } catch (c) {
                        if (!(c instanceof Error)) return void s(new TypeError(`Non-error was thrown: "${c}". You should only throw errors.`));
                        if (c instanceof i) a.stop(), s(c.originalError);
                        else if (c instanceof TypeError && (u = c.message, !o.includes(u))) a.stop(), s(c);
                        else {
                            ((t, e, r) => {
                                const n = r.retries - (e - 1);
                                t.attemptNumber = e, t.retriesLeft = n
                            })(c, n, e);
                            try {
                                await e.onFailedAttempt(c)
                            } catch (c) {
                                return void s(c)
                            }
                            a.retry(c) || s(a.mainError())
                        }
                    }
                    var u
                }))
            }));
            t.exports = s, t.exports.default = s, t.exports.AbortError = i
        },
        62100: function(t, e, r) {
            "use strict";
            t.exports = r(89482)
        },
        89482: function(t, e, r) {
            "use strict";
            var n = e;

            function o() {
                n.util._configure(), n.Writer._configure(n.BufferWriter), n.Reader._configure(n.BufferReader)
            }
            n.build = "minimal", n.Writer = r(41173), n.BufferWriter = r(43155), n.Reader = r(51408), n.BufferReader = r(50593), n.util = r(99693), n.rpc = r(35994), n.roots = r(85054), n.configure = o, o()
        },
        51408: function(t, e, r) {
            "use strict";
            t.exports = u;
            var n, o = r(99693),
                i = o.LongBits,
                s = o.utf8;

            function a(t, e) {
                return RangeError("index out of range: " + t.pos + " + " + (e || 1) + " > " + t.len)
            }

            function u(t) {
                this.buf = t, this.pos = 0, this.len = t.length
            }
            var c = "undefined" !== typeof Uint8Array ? function(t) {
                    if (t instanceof Uint8Array || Array.isArray(t)) return new u(t);
                    throw Error("illegal buffer")
                } : function(t) {
                    if (Array.isArray(t)) return new u(t);
                    throw Error("illegal buffer")
                },
                f = function() {
                    return o.Buffer ? function(t) {
                        return (u.create = function(t) {
                            return o.Buffer.isBuffer(t) ? new n(t) : c(t)
                        })(t)
                    } : c
                };

            function h() {
                var t = new i(0, 0),
                    e = 0;
                if (!(this.len - this.pos > 4)) {
                    for (; e < 3; ++e) {
                        if (this.pos >= this.len) throw a(this);
                        if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * e) >>> 0, this.buf[this.pos++] < 128) return t
                    }
                    return t.lo = (t.lo | (127 & this.buf[this.pos++]) << 7 * e) >>> 0, t
                }
                for (; e < 4; ++e)
                    if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * e) >>> 0, this.buf[this.pos++] < 128) return t;
                if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 28) >>> 0, t.hi = (t.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return t;
                if (e = 0, this.len - this.pos > 4) {
                    for (; e < 5; ++e)
                        if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * e + 3) >>> 0, this.buf[this.pos++] < 128) return t
                } else
                    for (; e < 5; ++e) {
                        if (this.pos >= this.len) throw a(this);
                        if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * e + 3) >>> 0, this.buf[this.pos++] < 128) return t
                    }
                throw Error("invalid varint encoding")
            }

            function l(t, e) {
                return (t[e - 4] | t[e - 3] << 8 | t[e - 2] << 16 | t[e - 1] << 24) >>> 0
            }

            function d() {
                if (this.pos + 8 > this.len) throw a(this, 8);
                return new i(l(this.buf, this.pos += 4), l(this.buf, this.pos += 4))
            }
            u.create = f(), u.prototype._slice = o.Array.prototype.subarray || o.Array.prototype.slice, u.prototype.uint32 = function() {
                var t = 4294967295;
                return function() {
                    if (t = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128) return t;
                    if (t = (t | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) return t;
                    if (t = (t | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) return t;
                    if (t = (t | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) return t;
                    if (t = (t | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128) return t;
                    if ((this.pos += 5) > this.len) throw this.pos = this.len, a(this, 10);
                    return t
                }
            }(), u.prototype.int32 = function() {
                return 0 | this.uint32()
            }, u.prototype.sint32 = function() {
                var t = this.uint32();
                return t >>> 1 ^ -(1 & t) | 0
            }, u.prototype.bool = function() {
                return 0 !== this.uint32()
            }, u.prototype.fixed32 = function() {
                if (this.pos + 4 > this.len) throw a(this, 4);
                return l(this.buf, this.pos += 4)
            }, u.prototype.sfixed32 = function() {
                if (this.pos + 4 > this.len) throw a(this, 4);
                return 0 | l(this.buf, this.pos += 4)
            }, u.prototype.float = function() {
                if (this.pos + 4 > this.len) throw a(this, 4);
                var t = o.float.readFloatLE(this.buf, this.pos);
                return this.pos += 4, t
            }, u.prototype.double = function() {
                if (this.pos + 8 > this.len) throw a(this, 4);
                var t = o.float.readDoubleLE(this.buf, this.pos);
                return this.pos += 8, t
            }, u.prototype.bytes = function() {
                var t = this.uint32(),
                    e = this.pos,
                    r = this.pos + t;
                if (r > this.len) throw a(this, t);
                return this.pos += t, Array.isArray(this.buf) ? this.buf.slice(e, r) : e === r ? new this.buf.constructor(0) : this._slice.call(this.buf, e, r)
            }, u.prototype.string = function() {
                var t = this.bytes();
                return s.read(t, 0, t.length)
            }, u.prototype.skip = function(t) {
                if ("number" === typeof t) {
                    if (this.pos + t > this.len) throw a(this, t);
                    this.pos += t
                } else
                    do {
                        if (this.pos >= this.len) throw a(this)
                    } while (128 & this.buf[this.pos++]);
                return this
            }, u.prototype.skipType = function(t) {
                switch (t) {
                    case 0:
                        this.skip();
                        break;
                    case 1:
                        this.skip(8);
                        break;
                    case 2:
                        this.skip(this.uint32());
                        break;
                    case 3:
                        for (; 4 !== (t = 7 & this.uint32());) this.skipType(t);
                        break;
                    case 5:
                        this.skip(4);
                        break;
                    default:
                        throw Error("invalid wire type " + t + " at offset " + this.pos)
                }
                return this
            }, u._configure = function(t) {
                n = t, u.create = f(), n._configure();
                var e = o.Long ? "toLong" : "toNumber";
                o.merge(u.prototype, {
                    int64: function() {
                        return h.call(this)[e](!1)
                    },
                    uint64: function() {
                        return h.call(this)[e](!0)
                    },
                    sint64: function() {
                        return h.call(this).zzDecode()[e](!1)
                    },
                    fixed64: function() {
                        return d.call(this)[e](!0)
                    },
                    sfixed64: function() {
                        return d.call(this)[e](!1)
                    }
                })
            }
        },
        50593: function(t, e, r) {
            "use strict";
            t.exports = i;
            var n = r(51408);
            (i.prototype = Object.create(n.prototype)).constructor = i;
            var o = r(99693);

            function i(t) {
                n.call(this, t)
            }
            i._configure = function() {
                o.Buffer && (i.prototype._slice = o.Buffer.prototype.slice)
            }, i.prototype.string = function() {
                var t = this.uint32();
                return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + t, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + t, this.len))
            }, i._configure()
        },
        85054: function(t) {
            "use strict";
            t.exports = {}
        },
        35994: function(t, e, r) {
            "use strict";
            e.Service = r(77948)
        },
        77948: function(t, e, r) {
            "use strict";
            t.exports = o;
            var n = r(99693);

            function o(t, e, r) {
                if ("function" !== typeof t) throw TypeError("rpcImpl must be a function");
                n.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = Boolean(e), this.responseDelimited = Boolean(r)
            }(o.prototype = Object.create(n.EventEmitter.prototype)).constructor = o, o.prototype.rpcCall = function t(e, r, o, i, s) {
                if (!i) throw TypeError("request must be specified");
                var a = this;
                if (!s) return n.asPromise(t, a, e, r, o, i);
                if (a.rpcImpl) try {
                    return a.rpcImpl(e, r[a.requestDelimited ? "encodeDelimited" : "encode"](i).finish(), (function(t, r) {
                        if (t) return a.emit("error", t, e), s(t);
                        if (null !== r) {
                            if (!(r instanceof o)) try {
                                r = o[a.responseDelimited ? "decodeDelimited" : "decode"](r)
                            } catch (t) {
                                return a.emit("error", t, e), s(t)
                            }
                            return a.emit("data", r, e), s(null, r)
                        }
                        a.end(!0)
                    }))
                } catch (u) {
                    return a.emit("error", u, e), void setTimeout((function() {
                        s(u)
                    }), 0)
                } else setTimeout((function() {
                    s(Error("already ended"))
                }), 0)
            }, o.prototype.end = function(t) {
                return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this
            }
        },
        1945: function(t, e, r) {
            "use strict";
            t.exports = o;
            var n = r(99693);

            function o(t, e) {
                this.lo = t >>> 0, this.hi = e >>> 0
            }
            var i = o.zero = new o(0, 0);
            i.toNumber = function() {
                return 0
            }, i.zzEncode = i.zzDecode = function() {
                return this
            }, i.length = function() {
                return 1
            };
            var s = o.zeroHash = "\0\0\0\0\0\0\0\0";
            o.fromNumber = function(t) {
                if (0 === t) return i;
                var e = t < 0;
                e && (t = -t);
                var r = t >>> 0,
                    n = (t - r) / 4294967296 >>> 0;
                return e && (n = ~n >>> 0, r = ~r >>> 0, ++r > 4294967295 && (r = 0, ++n > 4294967295 && (n = 0))), new o(r, n)
            }, o.from = function(t) {
                if ("number" === typeof t) return o.fromNumber(t);
                if (n.isString(t)) {
                    if (!n.Long) return o.fromNumber(parseInt(t, 10));
                    t = n.Long.fromString(t)
                }
                return t.low || t.high ? new o(t.low >>> 0, t.high >>> 0) : i
            }, o.prototype.toNumber = function(t) {
                if (!t && this.hi >>> 31) {
                    var e = 1 + ~this.lo >>> 0,
                        r = ~this.hi >>> 0;
                    return e || (r = r + 1 >>> 0), -(e + 4294967296 * r)
                }
                return this.lo + 4294967296 * this.hi
            }, o.prototype.toLong = function(t) {
                return n.Long ? new n.Long(0 | this.lo, 0 | this.hi, Boolean(t)) : {
                    low: 0 | this.lo,
                    high: 0 | this.hi,
                    unsigned: Boolean(t)
                }
            };
            var a = String.prototype.charCodeAt;
            o.fromHash = function(t) {
                return t === s ? i : new o((a.call(t, 0) | a.call(t, 1) << 8 | a.call(t, 2) << 16 | a.call(t, 3) << 24) >>> 0, (a.call(t, 4) | a.call(t, 5) << 8 | a.call(t, 6) << 16 | a.call(t, 7) << 24) >>> 0)
            }, o.prototype.toHash = function() {
                return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
            }, o.prototype.zzEncode = function() {
                var t = this.hi >> 31;
                return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ t) >>> 0, this.lo = (this.lo << 1 ^ t) >>> 0, this
            }, o.prototype.zzDecode = function() {
                var t = -(1 & this.lo);
                return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ t) >>> 0, this.hi = (this.hi >>> 1 ^ t) >>> 0, this
            }, o.prototype.length = function() {
                var t = this.lo,
                    e = (this.lo >>> 28 | this.hi << 4) >>> 0,
                    r = this.hi >>> 24;
                return 0 === r ? 0 === e ? t < 16384 ? t < 128 ? 1 : 2 : t < 2097152 ? 3 : 4 : e < 16384 ? e < 128 ? 5 : 6 : e < 2097152 ? 7 : 8 : r < 128 ? 9 : 10
            }
        },
        99693: function(t, e, r) {
            "use strict";
            var n = e;

            function o(t, e, r) {
                for (var n = Object.keys(e), o = 0; o < n.length; ++o) void 0 !== t[n[o]] && r || (t[n[o]] = e[n[o]]);
                return t
            }

            function i(t) {
                function e(t, r) {
                    if (!(this instanceof e)) return new e(t, r);
                    Object.defineProperty(this, "message", {
                        get: function() {
                            return t
                        }
                    }), Error.captureStackTrace ? Error.captureStackTrace(this, e) : Object.defineProperty(this, "stack", {
                        value: (new Error).stack || ""
                    }), r && o(this, r)
                }
                return (e.prototype = Object.create(Error.prototype)).constructor = e, Object.defineProperty(e.prototype, "name", {
                    get: function() {
                        return t
                    }
                }), e.prototype.toString = function() {
                    return this.name + ": " + this.message
                }, e
            }
            n.asPromise = r(34537), n.base64 = r(97419), n.EventEmitter = r(19211), n.float = r(10945), n.inquire = r(67199), n.utf8 = r(94997), n.pool = r(76662), n.LongBits = r(1945), n.isNode = Boolean("undefined" !== typeof r.g && r.g && r.g.process && r.g.process.versions && r.g.process.versions.node), n.global = n.isNode && r.g || "undefined" !== typeof window && window || "undefined" !== typeof self && self || this, n.emptyArray = Object.freeze ? Object.freeze([]) : [], n.emptyObject = Object.freeze ? Object.freeze({}) : {}, n.isInteger = Number.isInteger || function(t) {
                return "number" === typeof t && isFinite(t) && Math.floor(t) === t
            }, n.isString = function(t) {
                return "string" === typeof t || t instanceof String
            }, n.isObject = function(t) {
                return t && "object" === typeof t
            }, n.isset = n.isSet = function(t, e) {
                var r = t[e];
                return !(null == r || !t.hasOwnProperty(e)) && ("object" !== typeof r || (Array.isArray(r) ? r.length : Object.keys(r).length) > 0)
            }, n.Buffer = function() {
                try {
                    var t = n.inquire("buffer").Buffer;
                    return t.prototype.utf8Write ? t : null
                } catch (e) {
                    return null
                }
            }(), n._Buffer_from = null, n._Buffer_allocUnsafe = null, n.newBuffer = function(t) {
                return "number" === typeof t ? n.Buffer ? n._Buffer_allocUnsafe(t) : new n.Array(t) : n.Buffer ? n._Buffer_from(t) : "undefined" === typeof Uint8Array ? t : new Uint8Array(t)
            }, n.Array = "undefined" !== typeof Uint8Array ? Uint8Array : Array, n.Long = n.global.dcodeIO && n.global.dcodeIO.Long || n.global.Long || n.inquire("long"), n.key2Re = /^true|false|0|1$/, n.key32Re = /^-?(?:0|[1-9][0-9]*)$/, n.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, n.longToHash = function(t) {
                return t ? n.LongBits.from(t).toHash() : n.LongBits.zeroHash
            }, n.longFromHash = function(t, e) {
                var r = n.LongBits.fromHash(t);
                return n.Long ? n.Long.fromBits(r.lo, r.hi, e) : r.toNumber(Boolean(e))
            }, n.merge = o, n.lcFirst = function(t) {
                return t.charAt(0).toLowerCase() + t.substring(1)
            }, n.newError = i, n.ProtocolError = i("ProtocolError"), n.oneOfGetter = function(t) {
                for (var e = {}, r = 0; r < t.length; ++r) e[t[r]] = 1;
                return function() {
                    for (var t = Object.keys(this), r = t.length - 1; r > -1; --r)
                        if (1 === e[t[r]] && void 0 !== this[t[r]] && null !== this[t[r]]) return t[r]
                }
            }, n.oneOfSetter = function(t) {
                return function(e) {
                    for (var r = 0; r < t.length; ++r) t[r] !== e && delete this[t[r]]
                }
            }, n.toJSONOptions = {
                longs: String,
                enums: String,
                bytes: String,
                json: !0
            }, n._configure = function() {
                var t = n.Buffer;
                t ? (n._Buffer_from = t.from !== Uint8Array.from && t.from || function(e, r) {
                    return new t(e, r)
                }, n._Buffer_allocUnsafe = t.allocUnsafe || function(e) {
                    return new t(e)
                }) : n._Buffer_from = n._Buffer_allocUnsafe = null
            }
        },
        41173: function(t, e, r) {
            "use strict";
            t.exports = h;
            var n, o = r(99693),
                i = o.LongBits,
                s = o.base64,
                a = o.utf8;

            function u(t, e, r) {
                this.fn = t, this.len = e, this.next = void 0, this.val = r
            }

            function c() {}

            function f(t) {
                this.head = t.head, this.tail = t.tail, this.len = t.len, this.next = t.states
            }

            function h() {
                this.len = 0, this.head = new u(c, 0, 0), this.tail = this.head, this.states = null
            }
            var l = function() {
                return o.Buffer ? function() {
                    return (h.create = function() {
                        return new n
                    })()
                } : function() {
                    return new h
                }
            };

            function d(t, e, r) {
                e[r] = 255 & t
            }

            function p(t, e) {
                this.len = t, this.next = void 0, this.val = e
            }

            function y(t, e, r) {
                for (; t.hi;) e[r++] = 127 & t.lo | 128, t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0, t.hi >>>= 7;
                for (; t.lo > 127;) e[r++] = 127 & t.lo | 128, t.lo = t.lo >>> 7;
                e[r++] = t.lo
            }

            function g(t, e, r) {
                e[r] = 255 & t, e[r + 1] = t >>> 8 & 255, e[r + 2] = t >>> 16 & 255, e[r + 3] = t >>> 24
            }
            h.create = l(), h.alloc = function(t) {
                return new o.Array(t)
            }, o.Array !== Array && (h.alloc = o.pool(h.alloc, o.Array.prototype.subarray)), h.prototype._push = function(t, e, r) {
                return this.tail = this.tail.next = new u(t, e, r), this.len += e, this
            }, p.prototype = Object.create(u.prototype), p.prototype.fn = function(t, e, r) {
                for (; t > 127;) e[r++] = 127 & t | 128, t >>>= 7;
                e[r] = t
            }, h.prototype.uint32 = function(t) {
                return this.len += (this.tail = this.tail.next = new p((t >>>= 0) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : 5, t)).len, this
            }, h.prototype.int32 = function(t) {
                return t < 0 ? this._push(y, 10, i.fromNumber(t)) : this.uint32(t)
            }, h.prototype.sint32 = function(t) {
                return this.uint32((t << 1 ^ t >> 31) >>> 0)
            }, h.prototype.uint64 = function(t) {
                var e = i.from(t);
                return this._push(y, e.length(), e)
            }, h.prototype.int64 = h.prototype.uint64, h.prototype.sint64 = function(t) {
                var e = i.from(t).zzEncode();
                return this._push(y, e.length(), e)
            }, h.prototype.bool = function(t) {
                return this._push(d, 1, t ? 1 : 0)
            }, h.prototype.fixed32 = function(t) {
                return this._push(g, 4, t >>> 0)
            }, h.prototype.sfixed32 = h.prototype.fixed32, h.prototype.fixed64 = function(t) {
                var e = i.from(t);
                return this._push(g, 4, e.lo)._push(g, 4, e.hi)
            }, h.prototype.sfixed64 = h.prototype.fixed64, h.prototype.float = function(t) {
                return this._push(o.float.writeFloatLE, 4, t)
            }, h.prototype.double = function(t) {
                return this._push(o.float.writeDoubleLE, 8, t)
            };
            var w = o.Array.prototype.set ? function(t, e, r) {
                e.set(t, r)
            } : function(t, e, r) {
                for (var n = 0; n < t.length; ++n) e[r + n] = t[n]
            };
            h.prototype.bytes = function(t) {
                var e = t.length >>> 0;
                if (!e) return this._push(d, 1, 0);
                if (o.isString(t)) {
                    var r = h.alloc(e = s.length(t));
                    s.decode(t, r, 0), t = r
                }
                return this.uint32(e)._push(w, e, t)
            }, h.prototype.string = function(t) {
                var e = a.length(t);
                return e ? this.uint32(e)._push(a.write, e, t) : this._push(d, 1, 0)
            }, h.prototype.fork = function() {
                return this.states = new f(this), this.head = this.tail = new u(c, 0, 0), this.len = 0, this
            }, h.prototype.reset = function() {
                return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new u(c, 0, 0), this.len = 0), this
            }, h.prototype.ldelim = function() {
                var t = this.head,
                    e = this.tail,
                    r = this.len;
                return this.reset().uint32(r), r && (this.tail.next = t.next, this.tail = e, this.len += r), this
            }, h.prototype.finish = function() {
                for (var t = this.head.next, e = this.constructor.alloc(this.len), r = 0; t;) t.fn(t.val, e, r), r += t.len, t = t.next;
                return e
            }, h._configure = function(t) {
                n = t, h.create = l(), n._configure()
            }
        },
        43155: function(t, e, r) {
            "use strict";
            t.exports = i;
            var n = r(41173);
            (i.prototype = Object.create(n.prototype)).constructor = i;
            var o = r(99693);

            function i() {
                n.call(this)
            }

            function s(t, e, r) {
                t.length < 40 ? o.utf8.write(t, e, r) : e.utf8Write ? e.utf8Write(t, r) : e.write(t, r)
            }
            i._configure = function() {
                i.alloc = o._Buffer_allocUnsafe, i.writeBytesBuffer = o.Buffer && o.Buffer.prototype instanceof Uint8Array && "set" === o.Buffer.prototype.set.name ? function(t, e, r) {
                    e.set(t, r)
                } : function(t, e, r) {
                    if (t.copy) t.copy(e, r, 0, t.length);
                    else
                        for (var n = 0; n < t.length;) e[r++] = t[n++]
                }
            }, i.prototype.bytes = function(t) {
                o.isString(t) && (t = o._Buffer_from(t, "base64"));
                var e = t.length >>> 0;
                return this.uint32(e), e && this._push(i.writeBytesBuffer, e, t), this
            }, i.prototype.string = function(t) {
                var e = o.Buffer.byteLength(t);
                return this.uint32(e), e && this._push(s, e, t), this
            }, i._configure()
        },
        33286: function(t, e, r) {
            const {
                instantiate: n
            } = r(19824);

            function o(t = {}) {
                if (!o.supported) return null;
                var e = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 78, 14, 96, 2, 127, 126, 0, 96, 1, 127, 1, 126, 96, 2, 127, 127, 0, 96, 1, 127, 1, 127, 96, 1, 127, 0, 96, 2, 127, 127, 1, 127, 96, 3, 127, 127, 127, 1, 127, 96, 0, 0, 96, 3, 127, 127, 127, 0, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 0, 96, 5, 127, 127, 127, 127, 127, 1, 127, 96, 1, 126, 1, 127, 96, 2, 126, 126, 1, 126, 2, 13, 1, 3, 101, 110, 118, 5, 97, 98, 111, 114, 116, 0, 10, 3, 54, 53, 2, 2, 8, 9, 3, 5, 2, 8, 6, 5, 3, 4, 2, 6, 9, 12, 13, 2, 5, 11, 3, 2, 3, 2, 3, 2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 6, 7, 7, 4, 4, 5, 3, 1, 0, 1, 6, 47, 9, 127, 1, 65, 0, 11, 127, 1, 65, 0, 11, 127, 0, 65, 3, 11, 127, 0, 65, 4, 11, 127, 1, 65, 0, 11, 127, 1, 65, 0, 11, 127, 1, 65, 0, 11, 127, 0, 65, 240, 2, 11, 127, 0, 65, 6, 11, 7, 240, 5, 41, 6, 109, 101, 109, 111, 114, 121, 2, 0, 7, 95, 95, 97, 108, 108, 111, 99, 0, 10, 8, 95, 95, 114, 101, 116, 97, 105, 110, 0, 11, 9, 95, 95, 114, 101, 108, 101, 97, 115, 101, 0, 12, 9, 95, 95, 99, 111, 108, 108, 101, 99, 116, 0, 51, 11, 95, 95, 114, 116, 116, 105, 95, 98, 97, 115, 101, 3, 7, 13, 73, 110, 116, 51, 50, 65, 114, 114, 97, 121, 95, 73, 68, 3, 2, 13, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 95, 73, 68, 3, 3, 6, 100, 101, 103, 114, 101, 101, 0, 16, 3, 109, 111, 100, 0, 17, 5, 82, 97, 98, 105, 110, 3, 8, 16, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 119, 105, 110, 100, 111, 119, 0, 21, 16, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 119, 105, 110, 100, 111, 119, 0, 22, 21, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 119, 105, 110, 100, 111, 119, 95, 115, 105, 122, 101, 0, 23, 21, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 119, 105, 110, 100, 111, 119, 95, 115, 105, 122, 101, 0, 24, 14, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 119, 112, 111, 115, 0, 25, 14, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 119, 112, 111, 115, 0, 26, 15, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 99, 111, 117, 110, 116, 0, 27, 15, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 99, 111, 117, 110, 116, 0, 28, 13, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 112, 111, 115, 0, 29, 13, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 112, 111, 115, 0, 30, 15, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 115, 116, 97, 114, 116, 0, 31, 15, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 115, 116, 97, 114, 116, 0, 32, 16, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 100, 105, 103, 101, 115, 116, 0, 33, 16, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 100, 105, 103, 101, 115, 116, 0, 34, 21, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 99, 104, 117, 110, 107, 95, 115, 116, 97, 114, 116, 0, 35, 21, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 99, 104, 117, 110, 107, 95, 115, 116, 97, 114, 116, 0, 36, 22, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 99, 104, 117, 110, 107, 95, 108, 101, 110, 103, 116, 104, 0, 37, 22, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 99, 104, 117, 110, 107, 95, 108, 101, 110, 103, 116, 104, 0, 38, 31, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 99, 104, 117, 110, 107, 95, 99, 117, 116, 95, 102, 105, 110, 103, 101, 114, 112, 114, 105, 110, 116, 0, 39, 31, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 99, 104, 117, 110, 107, 95, 99, 117, 116, 95, 102, 105, 110, 103, 101, 114, 112, 114, 105, 110, 116, 0, 40, 20, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 112, 111, 108, 121, 110, 111, 109, 105, 97, 108, 0, 41, 20, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 112, 111, 108, 121, 110, 111, 109, 105, 97, 108, 0, 42, 17, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 109, 105, 110, 115, 105, 122, 101, 0, 43, 17, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 109, 105, 110, 115, 105, 122, 101, 0, 44, 17, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 109, 97, 120, 115, 105, 122, 101, 0, 45, 17, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 109, 97, 120, 115, 105, 122, 101, 0, 46, 14, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 109, 97, 115, 107, 0, 47, 14, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 109, 97, 115, 107, 0, 48, 17, 82, 97, 98, 105, 110, 35, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 0, 20, 17, 82, 97, 98, 105, 110, 35, 102, 105, 110, 103, 101, 114, 112, 114, 105, 110, 116, 0, 49, 8, 1, 50, 10, 165, 31, 53, 199, 1, 1, 4, 127, 32, 1, 40, 2, 0, 65, 124, 113, 34, 2, 65, 128, 2, 73, 4, 127, 32, 2, 65, 4, 118, 33, 4, 65, 0, 5, 32, 2, 65, 31, 32, 2, 103, 107, 34, 3, 65, 4, 107, 118, 65, 16, 115, 33, 4, 32, 3, 65, 7, 107, 11, 33, 3, 32, 1, 40, 2, 20, 33, 2, 32, 1, 40, 2, 16, 34, 5, 4, 64, 32, 5, 32, 2, 54, 2, 20, 11, 32, 2, 4, 64, 32, 2, 32, 5, 54, 2, 16, 11, 32, 1, 32, 0, 32, 4, 32, 3, 65, 4, 116, 106, 65, 2, 116, 106, 40, 2, 96, 70, 4, 64, 32, 0, 32, 4, 32, 3, 65, 4, 116, 106, 65, 2, 116, 106, 32, 2, 54, 2, 96, 32, 2, 69, 4, 64, 32, 0, 32, 3, 65, 2, 116, 106, 32, 0, 32, 3, 65, 2, 116, 106, 40, 2, 4, 65, 1, 32, 4, 116, 65, 127, 115, 113, 34, 1, 54, 2, 4, 32, 1, 69, 4, 64, 32, 0, 32, 0, 40, 2, 0, 65, 1, 32, 3, 116, 65, 127, 115, 113, 54, 2, 0, 11, 11, 11, 11, 226, 2, 1, 6, 127, 32, 1, 40, 2, 0, 33, 3, 32, 1, 65, 16, 106, 32, 1, 40, 2, 0, 65, 124, 113, 106, 34, 4, 40, 2, 0, 34, 5, 65, 1, 113, 4, 64, 32, 3, 65, 124, 113, 65, 16, 106, 32, 5, 65, 124, 113, 106, 34, 2, 65, 240, 255, 255, 255, 3, 73, 4, 64, 32, 0, 32, 4, 16, 1, 32, 1, 32, 2, 32, 3, 65, 3, 113, 114, 34, 3, 54, 2, 0, 32, 1, 65, 16, 106, 32, 1, 40, 2, 0, 65, 124, 113, 106, 34, 4, 40, 2, 0, 33, 5, 11, 11, 32, 3, 65, 2, 113, 4, 64, 32, 1, 65, 4, 107, 40, 2, 0, 34, 2, 40, 2, 0, 34, 6, 65, 124, 113, 65, 16, 106, 32, 3, 65, 124, 113, 106, 34, 7, 65, 240, 255, 255, 255, 3, 73, 4, 64, 32, 0, 32, 2, 16, 1, 32, 2, 32, 7, 32, 6, 65, 3, 113, 114, 34, 3, 54, 2, 0, 32, 2, 33, 1, 11, 11, 32, 4, 32, 5, 65, 2, 114, 54, 2, 0, 32, 4, 65, 4, 107, 32, 1, 54, 2, 0, 32, 0, 32, 3, 65, 124, 113, 34, 2, 65, 128, 2, 73, 4, 127, 32, 2, 65, 4, 118, 33, 4, 65, 0, 5, 32, 2, 65, 31, 32, 2, 103, 107, 34, 2, 65, 4, 107, 118, 65, 16, 115, 33, 4, 32, 2, 65, 7, 107, 11, 34, 3, 65, 4, 116, 32, 4, 106, 65, 2, 116, 106, 40, 2, 96, 33, 2, 32, 1, 65, 0, 54, 2, 16, 32, 1, 32, 2, 54, 2, 20, 32, 2, 4, 64, 32, 2, 32, 1, 54, 2, 16, 11, 32, 0, 32, 4, 32, 3, 65, 4, 116, 106, 65, 2, 116, 106, 32, 1, 54, 2, 96, 32, 0, 32, 0, 40, 2, 0, 65, 1, 32, 3, 116, 114, 54, 2, 0, 32, 0, 32, 3, 65, 2, 116, 106, 32, 0, 32, 3, 65, 2, 116, 106, 40, 2, 4, 65, 1, 32, 4, 116, 114, 54, 2, 4, 11, 119, 1, 1, 127, 32, 2, 2, 127, 32, 0, 40, 2, 160, 12, 34, 2, 4, 64, 32, 2, 32, 1, 65, 16, 107, 70, 4, 64, 32, 2, 40, 2, 0, 33, 3, 32, 1, 65, 16, 107, 33, 1, 11, 11, 32, 1, 11, 107, 34, 2, 65, 48, 73, 4, 64, 15, 11, 32, 1, 32, 3, 65, 2, 113, 32, 2, 65, 32, 107, 65, 1, 114, 114, 54, 2, 0, 32, 1, 65, 0, 54, 2, 16, 32, 1, 65, 0, 54, 2, 20, 32, 1, 32, 2, 106, 65, 16, 107, 34, 2, 65, 2, 54, 2, 0, 32, 0, 32, 2, 54, 2, 160, 12, 32, 0, 32, 1, 16, 2, 11, 155, 1, 1, 3, 127, 35, 0, 34, 0, 69, 4, 64, 65, 1, 63, 0, 34, 0, 74, 4, 127, 65, 1, 32, 0, 107, 64, 0, 65, 0, 72, 5, 65, 0, 11, 4, 64, 0, 11, 65, 176, 3, 34, 0, 65, 0, 54, 2, 0, 65, 208, 15, 65, 0, 54, 2, 0, 3, 64, 32, 1, 65, 23, 73, 4, 64, 32, 1, 65, 2, 116, 65, 176, 3, 106, 65, 0, 54, 2, 4, 65, 0, 33, 2, 3, 64, 32, 2, 65, 16, 73, 4, 64, 32, 1, 65, 4, 116, 32, 2, 106, 65, 2, 116, 65, 176, 3, 106, 65, 0, 54, 2, 96, 32, 2, 65, 1, 106, 33, 2, 12, 1, 11, 11, 32, 1, 65, 1, 106, 33, 1, 12, 1, 11, 11, 65, 176, 3, 65, 224, 15, 63, 0, 65, 16, 116, 16, 3, 65, 176, 3, 36, 0, 11, 32, 0, 11, 45, 0, 32, 0, 65, 240, 255, 255, 255, 3, 79, 4, 64, 65, 32, 65, 224, 0, 65, 201, 3, 65, 29, 16, 0, 0, 11, 32, 0, 65, 15, 106, 65, 112, 113, 34, 0, 65, 16, 32, 0, 65, 16, 75, 27, 11, 169, 1, 1, 1, 127, 32, 0, 32, 1, 65, 128, 2, 73, 4, 127, 32, 1, 65, 4, 118, 33, 1, 65, 0, 5, 32, 1, 65, 248, 255, 255, 255, 1, 73, 4, 64, 32, 1, 65, 1, 65, 27, 32, 1, 103, 107, 116, 106, 65, 1, 107, 33, 1, 11, 32, 1, 65, 31, 32, 1, 103, 107, 34, 2, 65, 4, 107, 118, 65, 16, 115, 33, 1, 32, 2, 65, 7, 107, 11, 34, 2, 65, 2, 116, 106, 40, 2, 4, 65, 127, 32, 1, 116, 113, 34, 1, 4, 127, 32, 0, 32, 1, 104, 32, 2, 65, 4, 116, 106, 65, 2, 116, 106, 40, 2, 96, 5, 32, 0, 40, 2, 0, 65, 127, 32, 2, 65, 1, 106, 116, 113, 34, 1, 4, 127, 32, 0, 32, 0, 32, 1, 104, 34, 0, 65, 2, 116, 106, 40, 2, 4, 104, 32, 0, 65, 4, 116, 106, 65, 2, 116, 106, 40, 2, 96, 5, 65, 0, 11, 11, 11, 111, 1, 1, 127, 63, 0, 34, 2, 32, 1, 65, 248, 255, 255, 255, 1, 73, 4, 127, 32, 1, 65, 1, 65, 27, 32, 1, 103, 107, 116, 65, 1, 107, 106, 5, 32, 1, 11, 65, 16, 32, 0, 40, 2, 160, 12, 32, 2, 65, 16, 116, 65, 16, 107, 71, 116, 106, 65, 255, 255, 3, 106, 65, 128, 128, 124, 113, 65, 16, 118, 34, 1, 32, 2, 32, 1, 74, 27, 64, 0, 65, 0, 72, 4, 64, 32, 1, 64, 0, 65, 0, 72, 4, 64, 0, 11, 11, 32, 0, 32, 2, 65, 16, 116, 63, 0, 65, 16, 116, 16, 3, 11, 113, 1, 2, 127, 32, 1, 40, 2, 0, 34, 3, 65, 124, 113, 32, 2, 107, 34, 4, 65, 32, 79, 4, 64, 32, 1, 32, 2, 32, 3, 65, 2, 113, 114, 54, 2, 0, 32, 2, 32, 1, 65, 16, 106, 106, 34, 1, 32, 4, 65, 16, 107, 65, 1, 114, 54, 2, 0, 32, 0, 32, 1, 16, 2, 5, 32, 1, 32, 3, 65, 126, 113, 54, 2, 0, 32, 1, 65, 16, 106, 32, 1, 40, 2, 0, 65, 124, 113, 106, 32, 1, 65, 16, 106, 32, 1, 40, 2, 0, 65, 124, 113, 106, 40, 2, 0, 65, 125, 113, 54, 2, 0, 11, 11, 91, 1, 2, 127, 32, 0, 32, 1, 16, 5, 34, 4, 16, 6, 34, 3, 69, 4, 64, 65, 1, 36, 1, 65, 0, 36, 1, 32, 0, 32, 4, 16, 6, 34, 3, 69, 4, 64, 32, 0, 32, 4, 16, 7, 32, 0, 32, 4, 16, 6, 33, 3, 11, 11, 32, 3, 65, 0, 54, 2, 4, 32, 3, 32, 2, 54, 2, 8, 32, 3, 32, 1, 54, 2, 12, 32, 0, 32, 3, 16, 1, 32, 0, 32, 3, 32, 4, 16, 8, 32, 3, 11, 13, 0, 16, 4, 32, 0, 32, 1, 16, 9, 65, 16, 106, 11, 33, 1, 1, 127, 32, 0, 65, 172, 3, 75, 4, 64, 32, 0, 65, 16, 107, 34, 1, 32, 1, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 32, 0, 11, 18, 0, 32, 0, 65, 172, 3, 75, 4, 64, 32, 0, 65, 16, 107, 16, 52, 11, 11, 140, 3, 1, 1, 127, 2, 64, 32, 1, 69, 13, 0, 32, 0, 65, 0, 58, 0, 0, 32, 0, 32, 1, 106, 65, 1, 107, 65, 0, 58, 0, 0, 32, 1, 65, 2, 77, 13, 0, 32, 0, 65, 1, 106, 65, 0, 58, 0, 0, 32, 0, 65, 2, 106, 65, 0, 58, 0, 0, 32, 0, 32, 1, 106, 34, 2, 65, 2, 107, 65, 0, 58, 0, 0, 32, 2, 65, 3, 107, 65, 0, 58, 0, 0, 32, 1, 65, 6, 77, 13, 0, 32, 0, 65, 3, 106, 65, 0, 58, 0, 0, 32, 0, 32, 1, 106, 65, 4, 107, 65, 0, 58, 0, 0, 32, 1, 65, 8, 77, 13, 0, 32, 1, 65, 0, 32, 0, 107, 65, 3, 113, 34, 1, 107, 33, 2, 32, 0, 32, 1, 106, 34, 0, 65, 0, 54, 2, 0, 32, 0, 32, 2, 65, 124, 113, 34, 1, 106, 65, 4, 107, 65, 0, 54, 2, 0, 32, 1, 65, 8, 77, 13, 0, 32, 0, 65, 4, 106, 65, 0, 54, 2, 0, 32, 0, 65, 8, 106, 65, 0, 54, 2, 0, 32, 0, 32, 1, 106, 34, 2, 65, 12, 107, 65, 0, 54, 2, 0, 32, 2, 65, 8, 107, 65, 0, 54, 2, 0, 32, 1, 65, 24, 77, 13, 0, 32, 0, 65, 12, 106, 65, 0, 54, 2, 0, 32, 0, 65, 16, 106, 65, 0, 54, 2, 0, 32, 0, 65, 20, 106, 65, 0, 54, 2, 0, 32, 0, 65, 24, 106, 65, 0, 54, 2, 0, 32, 0, 32, 1, 106, 34, 2, 65, 28, 107, 65, 0, 54, 2, 0, 32, 2, 65, 24, 107, 65, 0, 54, 2, 0, 32, 2, 65, 20, 107, 65, 0, 54, 2, 0, 32, 2, 65, 16, 107, 65, 0, 54, 2, 0, 32, 0, 32, 0, 65, 4, 113, 65, 24, 106, 34, 2, 106, 33, 0, 32, 1, 32, 2, 107, 33, 1, 3, 64, 32, 1, 65, 32, 79, 4, 64, 32, 0, 66, 0, 55, 3, 0, 32, 0, 65, 8, 106, 66, 0, 55, 3, 0, 32, 0, 65, 16, 106, 66, 0, 55, 3, 0, 32, 0, 65, 24, 106, 66, 0, 55, 3, 0, 32, 1, 65, 32, 107, 33, 1, 32, 0, 65, 32, 106, 33, 0, 12, 1, 11, 11, 11, 11, 178, 1, 1, 3, 127, 32, 1, 65, 240, 255, 255, 255, 3, 32, 2, 118, 75, 4, 64, 65, 144, 1, 65, 192, 1, 65, 23, 65, 56, 16, 0, 0, 11, 32, 1, 32, 2, 116, 34, 3, 65, 0, 16, 10, 34, 2, 32, 3, 16, 13, 32, 0, 69, 4, 64, 65, 12, 65, 2, 16, 10, 34, 0, 65, 172, 3, 75, 4, 64, 32, 0, 65, 16, 107, 34, 1, 32, 1, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 11, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 0, 54, 2, 4, 32, 0, 65, 0, 54, 2, 8, 32, 2, 34, 1, 32, 0, 40, 2, 0, 34, 4, 71, 4, 64, 32, 1, 65, 172, 3, 75, 4, 64, 32, 1, 65, 16, 107, 34, 5, 32, 5, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 32, 4, 16, 12, 11, 32, 0, 32, 1, 54, 2, 0, 32, 0, 32, 2, 54, 2, 4, 32, 0, 32, 3, 54, 2, 8, 32, 0, 11, 46, 1, 2, 127, 65, 12, 65, 5, 16, 10, 34, 0, 65, 172, 3, 75, 4, 64, 32, 0, 65, 16, 107, 34, 1, 32, 1, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 32, 0, 65, 128, 2, 65, 3, 16, 14, 11, 9, 0, 65, 63, 32, 0, 121, 167, 107, 11, 49, 1, 2, 127, 65, 63, 32, 1, 121, 167, 107, 33, 2, 3, 64, 65, 63, 32, 0, 121, 167, 107, 32, 2, 107, 34, 3, 65, 0, 78, 4, 64, 32, 0, 32, 1, 32, 3, 172, 134, 133, 33, 0, 12, 1, 11, 11, 32, 0, 11, 40, 0, 32, 1, 32, 0, 40, 2, 8, 79, 4, 64, 65, 128, 2, 65, 192, 2, 65, 163, 1, 65, 44, 16, 0, 0, 11, 32, 1, 32, 0, 40, 2, 4, 106, 65, 0, 58, 0, 0, 11, 38, 0, 32, 1, 32, 0, 40, 2, 8, 79, 4, 64, 65, 128, 2, 65, 192, 2, 65, 152, 1, 65, 44, 16, 0, 0, 11, 32, 1, 32, 0, 40, 2, 4, 106, 45, 0, 0, 11, 254, 5, 2, 1, 127, 4, 126, 32, 0, 69, 4, 64, 65, 232, 0, 65, 6, 16, 10, 34, 0, 65, 172, 3, 75, 4, 64, 32, 0, 65, 16, 107, 34, 5, 32, 5, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 11, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 0, 54, 2, 4, 32, 0, 65, 0, 54, 2, 8, 32, 0, 66, 0, 55, 3, 16, 32, 0, 66, 0, 55, 3, 24, 32, 0, 66, 0, 55, 3, 32, 32, 0, 66, 0, 55, 3, 40, 32, 0, 66, 0, 55, 3, 48, 32, 0, 66, 0, 55, 3, 56, 32, 0, 66, 0, 55, 3, 64, 32, 0, 66, 0, 55, 3, 72, 32, 0, 66, 0, 55, 3, 80, 32, 0, 66, 0, 55, 3, 88, 32, 0, 66, 0, 55, 3, 96, 32, 0, 32, 2, 173, 55, 3, 80, 32, 0, 32, 3, 173, 55, 3, 88, 65, 12, 65, 4, 16, 10, 34, 2, 65, 172, 3, 75, 4, 64, 32, 2, 65, 16, 107, 34, 3, 32, 3, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 32, 2, 32, 4, 65, 0, 16, 14, 33, 2, 32, 0, 40, 2, 0, 16, 12, 32, 0, 32, 2, 54, 2, 0, 32, 0, 32, 4, 54, 2, 4, 32, 0, 66, 1, 32, 1, 173, 134, 66, 1, 125, 55, 3, 96, 32, 0, 66, 243, 130, 183, 218, 216, 230, 232, 30, 55, 3, 72, 35, 4, 69, 4, 64, 65, 0, 33, 2, 3, 64, 32, 2, 65, 128, 2, 72, 4, 64, 32, 2, 65, 255, 1, 113, 173, 33, 6, 32, 0, 41, 3, 72, 34, 7, 33, 8, 65, 63, 32, 7, 121, 167, 107, 33, 1, 3, 64, 65, 63, 32, 6, 121, 167, 107, 32, 1, 107, 34, 3, 65, 0, 78, 4, 64, 32, 6, 32, 8, 32, 3, 172, 134, 133, 33, 6, 12, 1, 11, 11, 65, 0, 33, 4, 3, 64, 32, 4, 32, 0, 40, 2, 4, 65, 1, 107, 72, 4, 64, 32, 6, 66, 8, 134, 33, 6, 32, 0, 41, 3, 72, 34, 7, 33, 8, 65, 63, 32, 7, 121, 167, 107, 33, 1, 3, 64, 65, 63, 32, 6, 121, 167, 107, 32, 1, 107, 34, 3, 65, 0, 78, 4, 64, 32, 6, 32, 8, 32, 3, 172, 134, 133, 33, 6, 12, 1, 11, 11, 32, 4, 65, 1, 106, 33, 4, 12, 1, 11, 11, 35, 6, 40, 2, 4, 32, 2, 65, 3, 116, 106, 32, 6, 55, 3, 0, 32, 2, 65, 1, 106, 33, 2, 12, 1, 11, 11, 65, 63, 32, 0, 41, 3, 72, 121, 167, 107, 172, 33, 7, 65, 0, 33, 2, 3, 64, 32, 2, 65, 128, 2, 72, 4, 64, 35, 5, 33, 1, 32, 2, 172, 32, 7, 134, 34, 8, 33, 6, 65, 63, 32, 0, 41, 3, 72, 34, 9, 121, 167, 107, 33, 3, 3, 64, 65, 63, 32, 6, 121, 167, 107, 32, 3, 107, 34, 4, 65, 0, 78, 4, 64, 32, 6, 32, 9, 32, 4, 172, 134, 133, 33, 6, 12, 1, 11, 11, 32, 1, 40, 2, 4, 32, 2, 65, 3, 116, 106, 32, 6, 32, 8, 132, 55, 3, 0, 32, 2, 65, 1, 106, 33, 2, 12, 1, 11, 11, 65, 1, 36, 4, 11, 32, 0, 66, 0, 55, 3, 24, 32, 0, 66, 0, 55, 3, 32, 65, 0, 33, 2, 3, 64, 32, 2, 32, 0, 40, 2, 4, 72, 4, 64, 32, 0, 40, 2, 0, 32, 2, 16, 18, 32, 2, 65, 1, 106, 33, 2, 12, 1, 11, 11, 32, 0, 66, 0, 55, 3, 40, 32, 0, 65, 0, 54, 2, 8, 32, 0, 66, 0, 55, 3, 16, 32, 0, 66, 0, 55, 3, 40, 32, 0, 40, 2, 0, 32, 0, 40, 2, 8, 16, 19, 33, 1, 32, 0, 40, 2, 8, 32, 0, 40, 2, 0, 40, 2, 4, 106, 65, 1, 58, 0, 0, 32, 0, 32, 0, 41, 3, 40, 35, 6, 40, 2, 4, 32, 1, 65, 3, 116, 106, 41, 3, 0, 133, 55, 3, 40, 32, 0, 32, 0, 40, 2, 8, 65, 1, 106, 32, 0, 40, 2, 4, 111, 54, 2, 8, 32, 0, 35, 5, 40, 2, 4, 32, 0, 41, 3, 40, 34, 6, 66, 45, 136, 167, 65, 3, 116, 106, 41, 3, 0, 32, 6, 66, 8, 134, 66, 1, 132, 133, 55, 3, 40, 32, 0, 11, 38, 1, 1, 127, 32, 0, 40, 2, 0, 34, 0, 65, 172, 3, 75, 4, 64, 32, 0, 65, 16, 107, 34, 1, 32, 1, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 32, 0, 11, 55, 1, 2, 127, 32, 1, 32, 0, 40, 2, 0, 34, 2, 71, 4, 64, 32, 1, 65, 172, 3, 75, 4, 64, 32, 1, 65, 16, 107, 34, 3, 32, 3, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 32, 2, 16, 12, 11, 32, 0, 32, 1, 54, 2, 0, 11, 7, 0, 32, 0, 40, 2, 4, 11, 9, 0, 32, 0, 32, 1, 54, 2, 4, 11, 7, 0, 32, 0, 40, 2, 8, 11, 9, 0, 32, 0, 32, 1, 54, 2, 8, 11, 7, 0, 32, 0, 41, 3, 16, 11, 9, 0, 32, 0, 32, 1, 55, 3, 16, 11, 7, 0, 32, 0, 41, 3, 24, 11, 9, 0, 32, 0, 32, 1, 55, 3, 24, 11, 7, 0, 32, 0, 41, 3, 32, 11, 9, 0, 32, 0, 32, 1, 55, 3, 32, 11, 7, 0, 32, 0, 41, 3, 40, 11, 9, 0, 32, 0, 32, 1, 55, 3, 40, 11, 7, 0, 32, 0, 41, 3, 48, 11, 9, 0, 32, 0, 32, 1, 55, 3, 48, 11, 7, 0, 32, 0, 41, 3, 56, 11, 9, 0, 32, 0, 32, 1, 55, 3, 56, 11, 7, 0, 32, 0, 41, 3, 64, 11, 9, 0, 32, 0, 32, 1, 55, 3, 64, 11, 7, 0, 32, 0, 41, 3, 72, 11, 9, 0, 32, 0, 32, 1, 55, 3, 72, 11, 7, 0, 32, 0, 41, 3, 80, 11, 9, 0, 32, 0, 32, 1, 55, 3, 80, 11, 7, 0, 32, 0, 41, 3, 88, 11, 9, 0, 32, 0, 32, 1, 55, 3, 88, 11, 7, 0, 32, 0, 41, 3, 96, 11, 9, 0, 32, 0, 32, 1, 55, 3, 96, 11, 172, 4, 2, 5, 127, 1, 126, 32, 2, 65, 172, 3, 75, 4, 64, 32, 2, 65, 16, 107, 34, 4, 32, 4, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 32, 2, 33, 4, 65, 0, 33, 2, 32, 1, 40, 2, 8, 33, 5, 32, 1, 40, 2, 4, 33, 6, 3, 64, 2, 127, 65, 0, 33, 3, 3, 64, 32, 3, 32, 5, 72, 4, 64, 32, 3, 32, 6, 106, 45, 0, 0, 33, 1, 32, 0, 40, 2, 0, 32, 0, 40, 2, 8, 16, 19, 33, 7, 32, 0, 40, 2, 8, 32, 0, 40, 2, 0, 40, 2, 4, 106, 32, 1, 58, 0, 0, 32, 0, 32, 0, 41, 3, 40, 35, 6, 40, 2, 4, 32, 7, 65, 3, 116, 106, 41, 3, 0, 133, 55, 3, 40, 32, 0, 32, 0, 40, 2, 8, 65, 1, 106, 32, 0, 40, 2, 4, 111, 54, 2, 8, 32, 0, 35, 5, 40, 2, 4, 32, 0, 41, 3, 40, 34, 8, 66, 45, 136, 167, 65, 3, 116, 106, 41, 3, 0, 32, 1, 173, 32, 8, 66, 8, 134, 132, 133, 55, 3, 40, 32, 0, 32, 0, 41, 3, 16, 66, 1, 124, 55, 3, 16, 32, 0, 32, 0, 41, 3, 24, 66, 1, 124, 55, 3, 24, 32, 0, 41, 3, 16, 32, 0, 41, 3, 80, 90, 4, 127, 32, 0, 41, 3, 40, 32, 0, 41, 3, 96, 131, 80, 5, 65, 0, 11, 4, 127, 65, 1, 5, 32, 0, 41, 3, 16, 32, 0, 41, 3, 88, 90, 11, 4, 64, 32, 0, 32, 0, 41, 3, 32, 55, 3, 48, 32, 0, 32, 0, 41, 3, 16, 55, 3, 56, 32, 0, 32, 0, 41, 3, 40, 55, 3, 64, 65, 0, 33, 1, 3, 64, 32, 1, 32, 0, 40, 2, 4, 72, 4, 64, 32, 0, 40, 2, 0, 32, 1, 16, 18, 32, 1, 65, 1, 106, 33, 1, 12, 1, 11, 11, 32, 0, 66, 0, 55, 3, 40, 32, 0, 65, 0, 54, 2, 8, 32, 0, 66, 0, 55, 3, 16, 32, 0, 66, 0, 55, 3, 40, 32, 0, 40, 2, 0, 32, 0, 40, 2, 8, 16, 19, 33, 1, 32, 0, 40, 2, 8, 32, 0, 40, 2, 0, 40, 2, 4, 106, 65, 1, 58, 0, 0, 32, 0, 32, 0, 41, 3, 40, 35, 6, 40, 2, 4, 32, 1, 65, 3, 116, 106, 41, 3, 0, 133, 55, 3, 40, 32, 0, 32, 0, 40, 2, 8, 65, 1, 106, 32, 0, 40, 2, 4, 111, 54, 2, 8, 32, 0, 35, 5, 40, 2, 4, 32, 0, 41, 3, 40, 34, 8, 66, 45, 136, 167, 65, 3, 116, 106, 41, 3, 0, 32, 8, 66, 8, 134, 66, 1, 132, 133, 55, 3, 40, 32, 3, 65, 1, 106, 12, 3, 11, 32, 3, 65, 1, 106, 33, 3, 12, 1, 11, 11, 65, 127, 11, 34, 1, 65, 0, 78, 4, 64, 32, 5, 32, 1, 107, 33, 5, 32, 1, 32, 6, 106, 33, 6, 32, 2, 34, 1, 65, 1, 106, 33, 2, 32, 4, 40, 2, 4, 32, 1, 65, 2, 116, 106, 32, 0, 41, 3, 56, 62, 2, 0, 12, 1, 11, 11, 32, 4, 11, 10, 0, 16, 15, 36, 5, 16, 15, 36, 6, 11, 3, 0, 1, 11, 73, 1, 2, 127, 32, 0, 40, 2, 4, 34, 1, 65, 255, 255, 255, 255, 0, 113, 34, 2, 65, 1, 70, 4, 64, 32, 0, 65, 16, 106, 16, 53, 32, 0, 32, 0, 40, 2, 0, 65, 1, 114, 54, 2, 0, 35, 0, 32, 0, 16, 2, 5, 32, 0, 32, 2, 65, 1, 107, 32, 1, 65, 128, 128, 128, 128, 127, 113, 114, 54, 2, 4, 11, 11, 58, 0, 2, 64, 2, 64, 2, 64, 32, 0, 65, 8, 107, 40, 2, 0, 14, 7, 0, 0, 1, 1, 1, 1, 1, 2, 11, 15, 11, 32, 0, 40, 2, 0, 34, 0, 4, 64, 32, 0, 65, 172, 3, 79, 4, 64, 32, 0, 65, 16, 107, 16, 52, 11, 11, 15, 11, 0, 11, 11, 137, 3, 7, 0, 65, 16, 11, 55, 40, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 40, 0, 0, 0, 97, 0, 108, 0, 108, 0, 111, 0, 99, 0, 97, 0, 116, 0, 105, 0, 111, 0, 110, 0, 32, 0, 116, 0, 111, 0, 111, 0, 32, 0, 108, 0, 97, 0, 114, 0, 103, 0, 101, 0, 65, 208, 0, 11, 45, 30, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 30, 0, 0, 0, 126, 0, 108, 0, 105, 0, 98, 0, 47, 0, 114, 0, 116, 0, 47, 0, 116, 0, 108, 0, 115, 0, 102, 0, 46, 0, 116, 0, 115, 0, 65, 128, 1, 11, 43, 28, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 28, 0, 0, 0, 73, 0, 110, 0, 118, 0, 97, 0, 108, 0, 105, 0, 100, 0, 32, 0, 108, 0, 101, 0, 110, 0, 103, 0, 116, 0, 104, 0, 65, 176, 1, 11, 53, 38, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 38, 0, 0, 0, 126, 0, 108, 0, 105, 0, 98, 0, 47, 0, 97, 0, 114, 0, 114, 0, 97, 0, 121, 0, 98, 0, 117, 0, 102, 0, 102, 0, 101, 0, 114, 0, 46, 0, 116, 0, 115, 0, 65, 240, 1, 11, 51, 36, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 36, 0, 0, 0, 73, 0, 110, 0, 100, 0, 101, 0, 120, 0, 32, 0, 111, 0, 117, 0, 116, 0, 32, 0, 111, 0, 102, 0, 32, 0, 114, 0, 97, 0, 110, 0, 103, 0, 101, 0, 65, 176, 2, 11, 51, 36, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 36, 0, 0, 0, 126, 0, 108, 0, 105, 0, 98, 0, 47, 0, 116, 0, 121, 0, 112, 0, 101, 0, 100, 0, 97, 0, 114, 0, 114, 0, 97, 0, 121, 0, 46, 0, 116, 0, 115, 0, 65, 240, 2, 11, 53, 7, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 145, 4, 0, 0, 2, 0, 0, 0, 49, 0, 0, 0, 2, 0, 0, 0, 17, 1, 0, 0, 2, 0, 0, 0, 16, 0, 34, 16, 115, 111, 117, 114, 99, 101, 77, 97, 112, 112, 105, 110, 103, 85, 82, 76, 16, 46, 47, 114, 97, 98, 105, 110, 46, 119, 97, 115, 109, 46, 109, 97, 112]);
                return n(new Response(new Blob([e], {
                    type: "application/wasm"
                })), t)
            }
            o.supported = "undefined" !== typeof WebAssembly, t.exports = o
        },
        63060: function(t, e, r) {
            const n = r(57118),
                o = r(33286);
            t.exports = {
                Rabin: n,
                create: async (t, e, r, i, s) => {
                    const a = await o();
                    return new n(a, t, e, r, i, s)
                }
            }
        },
        57118: function(t) {
            t.exports = class {
                constructor(t, e = 12, r = 8192, n = 32768, o = 64, i) {
                    this.bits = e, this.min = r, this.max = n, this.asModule = t, this.rabin = new t.Rabin(e, r, n, o, i), this.polynomial = i
                }
                fingerprint(t) {
                    const {
                        __retain: e,
                        __release: r,
                        __allocArray: n,
                        __getInt32Array: o,
                        Int32Array_ID: i,
                        Uint8Array_ID: s
                    } = this.asModule, a = e(n(i, new Int32Array(Math.ceil(t.length / this.min)))), u = e(n(s, t)), c = o(this.rabin.fingerprint(u, a));
                    r(u), r(a);
                    const f = c.indexOf(0);
                    return f >= 0 ? c.subarray(0, f) : c
                }
            }
        },
        99353: function(t, e, r) {
            t.exports = r(32523)
        },
        32523: function(t, e, r) {
            var n = r(6943);
            e.operation = function(t) {
                var r = e.timeouts(t);
                return new n(r, {
                    forever: t && (t.forever || t.retries === 1 / 0),
                    unref: t && t.unref,
                    maxRetryTime: t && t.maxRetryTime
                })
            }, e.timeouts = function(t) {
                if (t instanceof Array) return [].concat(t);
                var e = {
                    retries: 10,
                    factor: 2,
                    minTimeout: 1e3,
                    maxTimeout: 1 / 0,
                    randomize: !1
                };
                for (var r in t) e[r] = t[r];
                if (e.minTimeout > e.maxTimeout) throw new Error("minTimeout is greater than maxTimeout");
                for (var n = [], o = 0; o < e.retries; o++) n.push(this.createTimeout(o, e));
                return t && t.forever && !n.length && n.push(this.createTimeout(o, e)), n.sort((function(t, e) {
                    return t - e
                })), n
            }, e.createTimeout = function(t, e) {
                var r = e.randomize ? Math.random() + 1 : 1,
                    n = Math.round(r * Math.max(e.minTimeout, 1) * Math.pow(e.factor, t));
                return n = Math.min(n, e.maxTimeout)
            }, e.wrap = function(t, r, n) {
                if (r instanceof Array && (n = r, r = null), !n)
                    for (var o in n = [], t) "function" === typeof t[o] && n.push(o);
                for (var i = 0; i < n.length; i++) {
                    var s = n[i],
                        a = t[s];
                    t[s] = function(n) {
                        var o = e.operation(r),
                            i = Array.prototype.slice.call(arguments, 1),
                            s = i.pop();
                        i.push((function(t) {
                            o.retry(t) || (t && (arguments[0] = o.mainError()), s.apply(this, arguments))
                        })), o.attempt((function() {
                            n.apply(t, i)
                        }))
                    }.bind(t, a), t[s].options = r
                }
            }
        },
        6943: function(t) {
            function e(t, e) {
                "boolean" === typeof e && (e = {
                    forever: e
                }), this._originalTimeouts = JSON.parse(JSON.stringify(t)), this._timeouts = t, this._options = e || {}, this._maxRetryTime = e && e.maxRetryTime || 1 / 0, this._fn = null, this._errors = [], this._attempts = 1, this._operationTimeout = null, this._operationTimeoutCb = null, this._timeout = null, this._operationStart = null, this._timer = null, this._options.forever && (this._cachedTimeouts = this._timeouts.slice(0))
            }
            t.exports = e, e.prototype.reset = function() {
                this._attempts = 1, this._timeouts = this._originalTimeouts.slice(0)
            }, e.prototype.stop = function() {
                this._timeout && clearTimeout(this._timeout), this._timer && clearTimeout(this._timer), this._timeouts = [], this._cachedTimeouts = null
            }, e.prototype.retry = function(t) {
                if (this._timeout && clearTimeout(this._timeout), !t) return !1;
                var e = (new Date).getTime();
                if (t && e - this._operationStart >= this._maxRetryTime) return this._errors.push(t), this._errors.unshift(new Error("RetryOperation timeout occurred")), !1;
                this._errors.push(t);
                var r = this._timeouts.shift();
                if (void 0 === r) {
                    if (!this._cachedTimeouts) return !1;
                    this._errors.splice(0, this._errors.length - 1), r = this._cachedTimeouts.slice(-1)
                }
                var n = this;
                return this._timer = setTimeout((function() {
                    n._attempts++, n._operationTimeoutCb && (n._timeout = setTimeout((function() {
                        n._operationTimeoutCb(n._attempts)
                    }), n._operationTimeout), n._options.unref && n._timeout.unref()), n._fn(n._attempts)
                }), r), this._options.unref && this._timer.unref(), !0
            }, e.prototype.attempt = function(t, e) {
                this._fn = t, e && (e.timeout && (this._operationTimeout = e.timeout), e.cb && (this._operationTimeoutCb = e.cb));
                var r = this;
                this._operationTimeoutCb && (this._timeout = setTimeout((function() {
                    r._operationTimeoutCb()
                }), r._operationTimeout)), this._operationStart = (new Date).getTime(), this._fn(this._attempts)
            }, e.prototype.try = function(t) {
                console.log("Using RetryOperation.try() is deprecated"), this.attempt(t)
            }, e.prototype.start = function(t) {
                console.log("Using RetryOperation.start() is deprecated"), this.attempt(t)
            }, e.prototype.start = e.prototype.try, e.prototype.errors = function() {
                return this._errors
            }, e.prototype.attempts = function() {
                return this._attempts
            }, e.prototype.mainError = function() {
                if (0 === this._errors.length) return null;
                for (var t = {}, e = null, r = 0, n = 0; n < this._errors.length; n++) {
                    var o = this._errors[n],
                        i = o.message,
                        s = (t[i] || 0) + 1;
                    t[i] = s, s >= r && (e = o, r = s)
                }
                return e
            }
        },
        20544: function(t) {
            "use strict";

            function e(t, e) {
                return t + r(e)
            }

            function r(t) {
                let e = t;
                return e -= e >> 1 & 1431655765, e = (858993459 & e) + (e >> 2 & 858993459), 16843009 * (e + (e >> 4) & 252645135) >> 24
            }

            function n(t, e) {
                return t[0] - e[0]
            }

            function o(t) {
                return t[1]
            }
            t.exports = class {
                constructor() {
                    this._bitArrays = [], this._data = [], this._length = 0, this._changedLength = !1, this._changedData = !1
                }
                set(t, e) {
                    let r = this._internalPositionFor(t, !1);
                    if (void 0 === e) - 1 !== r && (this._unsetInternalPos(r), this._unsetBit(t), this._changedLength = !0, this._changedData = !0);
                    else {
                        let n = !1; - 1 === r ? (r = this._data.length, this._setBit(t), this._changedData = !0) : n = !0, this._setInternalPos(r, t, e, n), this._changedLength = !0
                    }
                }
                unset(t) {
                    this.set(t, void 0)
                }
                get(t) {
                    this._sortData();
                    const e = this._internalPositionFor(t, !0);
                    if (-1 !== e) return this._data[e][1]
                }
                push(t) {
                    return this.set(this.length, t), this.length
                }
                get length() {
                    if (this._sortData(), this._changedLength) {
                        const t = this._data[this._data.length - 1];
                        this._length = t ? t[0] + 1 : 0, this._changedLength = !1
                    }
                    return this._length
                }
                forEach(t) {
                    let e = 0;
                    for (; e < this.length;) t(this.get(e), e, this), e++
                }
                map(t) {
                    let e = 0,
                        r = new Array(this.length);
                    for (; e < this.length;) r[e] = t(this.get(e), e, this), e++;
                    return r
                }
                reduce(t, e) {
                    let r = 0,
                        n = e;
                    for (; r < this.length;) {
                        n = t(n, this.get(r), r), r++
                    }
                    return n
                }
                find(t) {
                    let e, r, n = 0;
                    for (; n < this.length && !e;) r = this.get(n), e = t(r), n++;
                    return e ? r : void 0
                }
                _internalPositionFor(t, n) {
                    const o = this._bytePosFor(t, n);
                    if (o >= this._bitArrays.length) return -1;
                    const i = this._bitArrays[o],
                        s = t - 7 * o;
                    if (!((i & 1 << s) > 0)) return -1;
                    return this._bitArrays.slice(0, o).reduce(e, 0) + r(i & ~(4294967295 << s + 1)) - 1
                }
                _bytePosFor(t, e) {
                    const r = Math.floor(t / 7),
                        n = r + 1;
                    for (; !e && this._bitArrays.length < n;) this._bitArrays.push(0);
                    return r
                }
                _setBit(t) {
                    const e = this._bytePosFor(t, !1);
                    this._bitArrays[e] |= 1 << t - 7 * e
                }
                _unsetBit(t) {
                    const e = this._bytePosFor(t, !1);
                    this._bitArrays[e] &= ~(1 << t - 7 * e)
                }
                _setInternalPos(t, e, r, n) {
                    const o = this._data,
                        i = [e, r];
                    if (n) this._sortData(), o[t] = i;
                    else {
                        if (o.length)
                            if (o[o.length - 1][0] >= e) o.push(i);
                            else if (o[0][0] <= e) o.unshift(i);
                        else {
                            const t = Math.round(o.length / 2);
                            this._data = o.slice(0, t).concat(i).concat(o.slice(t))
                        } else this._data.push(i);
                        this._changedData = !0, this._changedLength = !0
                    }
                }
                _unsetInternalPos(t) {
                    this._data.splice(t, 1)
                }
                _sortData() {
                    this._changedData && this._data.sort(n), this._changedData = !1
                }
                bitField() {
                    const t = [];
                    let e, r = 8,
                        n = 0,
                        o = 0;
                    const i = this._bitArrays.slice();
                    for (; i.length || n;) {
                        0 === n && (e = i.shift(), n = 7);
                        const s = Math.min(n, r);
                        o |= (e & ~(255 << s)) << 8 - r, e >>>= s, n -= s, r -= s, r && (n || i.length) || (t.push(o), o = 0, r = 8)
                    }
                    for (var s = t.length - 1; s > 0; s--) {
                        if (0 !== t[s]) break;
                        t.pop()
                    }
                    return t
                }
                compactArray() {
                    return this._sortData(), this._data.map(o)
                }
            }
        },
        28230: function(t, e) {
            "use strict";

            function r(t, e, r) {
                void 0 === r && (r = !1), r && (e /= t, t = 1);
                var n, o = [],
                    i = 0,
                    s = 0,
                    a = function() {
                        var r = i + e,
                            u = Date.now();
                        if (u < r) return void 0 !== n && clearTimeout(n), void(n = setTimeout(a, r - u));
                        i = u, s = 0;
                        for (var c = 0, f = o.splice(0, t); c < f.length; c++) {
                            var h = f[c];
                            s++, h()
                        }
                        n = o.length ? setTimeout(a, e) : void 0
                    };
                return function(r) {
                    return new Promise((function(u, c) {
                        var f = function() {
                                return Promise.resolve().then(r).then(u).catch(c)
                            },
                            h = Date.now();
                        void 0 === n && h - i > e && (i = h, s = 0), s++ < t ? f() : (o.push(f), void 0 === n && (n = setTimeout(a, i + e - h)))
                    }))
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), t.exports = r, e.default = r
        },
        26988: function(t) {
            t.exports = function t(e, r) {
                var n, o = 0,
                    i = 0,
                    s = r = r || 0,
                    a = e.length;
                do {
                    if (s >= a || i > 49) throw t.bytes = 0, new RangeError("Could not decode varint");
                    n = e[s++], o += i < 28 ? (127 & n) << i : (127 & n) * Math.pow(2, i), i += 7
                } while (n >= 128);
                return t.bytes = s - r, o
            }
        },
        1312: function(t) {
            t.exports = function t(r, n, o) {
                if (Number.MAX_SAFE_INTEGER && r > Number.MAX_SAFE_INTEGER) throw t.bytes = 0, new RangeError("Could not encode varint");
                n = n || [];
                var i = o = o || 0;
                for (; r >= e;) n[o++] = 255 & r | 128, r /= 128;
                for (; - 128 & r;) n[o++] = 255 & r | 128, r >>>= 7;
                return n[o] = 0 | r, t.bytes = o - i + 1, n
            };
            var e = Math.pow(2, 31)
        },
        94676: function(t, e, r) {
            t.exports = {
                encode: r(1312),
                decode: r(26988),
                encodingLength: r(10082)
            }
        },
        10082: function(t) {
            var e = Math.pow(2, 7),
                r = Math.pow(2, 14),
                n = Math.pow(2, 21),
                o = Math.pow(2, 28),
                i = Math.pow(2, 35),
                s = Math.pow(2, 42),
                a = Math.pow(2, 49),
                u = Math.pow(2, 56),
                c = Math.pow(2, 63);
            t.exports = function(t) {
                return t < e ? 1 : t < r ? 2 : t < n ? 3 : t < o ? 4 : t < i ? 5 : t < s ? 6 : t < a ? 7 : t < u ? 8 : t < c ? 9 : 10
            }
        },
        55378: function(t, e, r) {
            "use strict";
            var n = r(67294);
            const o = n.forwardRef((function(t, e) {
                return n.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: e
                }, t), n.createElement("path", {
                    fillRule: "evenodd",
                    d: "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",
                    clipRule: "evenodd"
                }))
            }));
            e.Z = o
        },
        31114: function(t, e, r) {
            "use strict";
            r.d(e, {
                kU: function() {
                    return h
                },
                Dp: function() {
                    return f
                },
                ET: function() {
                    return l
                }
            });
            var n = function(t, e) {
                    if (t.length >= 255) throw new TypeError("Alphabet too long");
                    for (var r = new Uint8Array(256), n = 0; n < r.length; n++) r[n] = 255;
                    for (var o = 0; o < t.length; o++) {
                        var i = t.charAt(o),
                            s = i.charCodeAt(0);
                        if (255 !== r[s]) throw new TypeError(i + " is ambiguous");
                        r[s] = o
                    }
                    var a = t.length,
                        u = t.charAt(0),
                        c = Math.log(a) / Math.log(256),
                        f = Math.log(256) / Math.log(a);

                    function h(t) {
                        if ("string" !== typeof t) throw new TypeError("Expected String");
                        if (0 === t.length) return new Uint8Array;
                        var e = 0;
                        if (" " !== t[e]) {
                            for (var n = 0, o = 0; t[e] === u;) n++, e++;
                            for (var i = (t.length - e) * c + 1 >>> 0, s = new Uint8Array(i); t[e];) {
                                var f = r[t.charCodeAt(e)];
                                if (255 === f) return;
                                for (var h = 0, l = i - 1;
                                    (0 !== f || h < o) && -1 !== l; l--, h++) f += a * s[l] >>> 0, s[l] = f % 256 >>> 0, f = f / 256 >>> 0;
                                if (0 !== f) throw new Error("Non-zero carry");
                                o = h, e++
                            }
                            if (" " !== t[e]) {
                                for (var d = i - o; d !== i && 0 === s[d];) d++;
                                for (var p = new Uint8Array(n + (i - d)), y = n; d !== i;) p[y++] = s[d++];
                                return p
                            }
                        }
                    }
                    return {
                        encode: function(e) {
                            if (e instanceof Uint8Array || (ArrayBuffer.isView(e) ? e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : Array.isArray(e) && (e = Uint8Array.from(e))), !(e instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
                            if (0 === e.length) return "";
                            for (var r = 0, n = 0, o = 0, i = e.length; o !== i && 0 === e[o];) o++, r++;
                            for (var s = (i - o) * f + 1 >>> 0, c = new Uint8Array(s); o !== i;) {
                                for (var h = e[o], l = 0, d = s - 1;
                                    (0 !== h || l < n) && -1 !== d; d--, l++) h += 256 * c[d] >>> 0, c[d] = h % a >>> 0, h = h / a >>> 0;
                                if (0 !== h) throw new Error("Non-zero carry");
                                n = l, o++
                            }
                            for (var p = s - n; p !== s && 0 === c[p];) p++;
                            for (var y = u.repeat(r); p < s; ++p) y += t.charAt(c[p]);
                            return y
                        },
                        decodeUnsafe: h,
                        decode: function(t) {
                            var r = h(t);
                            if (r) return r;
                            throw new Error(`Non-${e} character`)
                        }
                    }
                },
                o = r(95934);
            class i {
                constructor(t, e, r) {
                    this.name = t, this.prefix = e, this.baseEncode = r
                }
                encode(t) {
                    if (t instanceof Uint8Array) return `${this.prefix}${this.baseEncode(t)}`;
                    throw Error("Unknown type, must be binary type")
                }
            }
            class s {
                constructor(t, e, r) {
                    if (this.name = t, this.prefix = e, void 0 === e.codePointAt(0)) throw new Error("Invalid prefix character");
                    this.prefixCodePoint = e.codePointAt(0), this.baseDecode = r
                }
                decode(t) {
                    if ("string" === typeof t) {
                        if (t.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(t.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(t) {
                    return u(this, t)
                }
            }
            class a {
                constructor(t) {
                    this.decoders = t
                }
                or(t) {
                    return u(this, t)
                }
                decode(t) {
                    const e = t[0],
                        r = this.decoders[e];
                    if (r) return r.decode(t);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            }
            const u = (t, e) => new a({ ...t.decoders || {
                    [t.prefix]: t
                },
                ...e.decoders || {
                    [e.prefix]: e
                }
            });
            class c {
                constructor(t, e, r, n) {
                    this.name = t, this.prefix = e, this.baseEncode = r, this.baseDecode = n, this.encoder = new i(t, e, r), this.decoder = new s(t, e, n)
                }
                encode(t) {
                    return this.encoder.encode(t)
                }
                decode(t) {
                    return this.decoder.decode(t)
                }
            }
            const f = ({
                    name: t,
                    prefix: e,
                    encode: r,
                    decode: n
                }) => new c(t, e, r, n),
                h = ({
                    prefix: t,
                    name: e,
                    alphabet: r
                }) => {
                    const {
                        encode: i,
                        decode: s
                    } = n(r, e);
                    return f({
                        prefix: t,
                        name: e,
                        encode: i,
                        decode: t => (0, o.coerce)(s(t))
                    })
                },
                l = ({
                    name: t,
                    prefix: e,
                    bitsPerChar: r,
                    alphabet: n
                }) => f({
                    prefix: e,
                    name: t,
                    encode: t => ((t, e, r) => {
                        const n = "=" === e[e.length - 1],
                            o = (1 << r) - 1;
                        let i = "",
                            s = 0,
                            a = 0;
                        for (let u = 0; u < t.length; ++u)
                            for (a = a << 8 | t[u], s += 8; s > r;) s -= r, i += e[o & a >> s];
                        if (s && (i += e[o & a << r - s]), n)
                            for (; i.length * r & 7;) i += "=";
                        return i
                    })(t, n, r),
                    decode: e => ((t, e, r, n) => {
                        const o = {};
                        for (let f = 0; f < e.length; ++f) o[e[f]] = f;
                        let i = t.length;
                        for (;
                            "=" === t[i - 1];) --i;
                        const s = new Uint8Array(i * r / 8 | 0);
                        let a = 0,
                            u = 0,
                            c = 0;
                        for (let f = 0; f < i; ++f) {
                            const e = o[t[f]];
                            if (void 0 === e) throw new SyntaxError(`Non-${n} character`);
                            u = u << r | e, a += r, a >= 8 && (a -= 8, s[c++] = 255 & u >> a)
                        }
                        if (a >= r || 255 & u << 8 - a) throw new SyntaxError("Unexpected end of data");
                        return s
                    })(e, n, r, t)
                })
        },
        22817: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                base32: function() {
                    return o
                },
                base32hex: function() {
                    return u
                },
                base32hexpad: function() {
                    return f
                },
                base32hexpadupper: function() {
                    return h
                },
                base32hexupper: function() {
                    return c
                },
                base32pad: function() {
                    return s
                },
                base32padupper: function() {
                    return a
                },
                base32upper: function() {
                    return i
                },
                base32z: function() {
                    return l
                }
            });
            var n = r(31114);
            const o = (0, n.ET)({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                i = (0, n.ET)({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                s = (0, n.ET)({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                a = (0, n.ET)({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                u = (0, n.ET)({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                c = (0, n.ET)({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                f = (0, n.ET)({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                h = (0, n.ET)({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                l = (0, n.ET)({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                })
        },
        99086: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                base58btc: function() {
                    return o
                },
                base58flickr: function() {
                    return i
                }
            });
            var n = r(31114);
            const o = (0, n.kU)({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                i = (0, n.kU)({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                })
        },
        95934: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                coerce: function() {
                    return a
                },
                empty: function() {
                    return n
                },
                equals: function() {
                    return s
                },
                fromHex: function() {
                    return i
                },
                fromString: function() {
                    return c
                },
                isBinary: function() {
                    return u
                },
                toHex: function() {
                    return o
                },
                toString: function() {
                    return f
                }
            });
            const n = new Uint8Array(0),
                o = t => t.reduce(((t, e) => t + e.toString(16).padStart(2, "0")), ""),
                i = t => {
                    const e = t.match(/../g);
                    return e ? new Uint8Array(e.map((t => parseInt(t, 16)))) : n
                },
                s = (t, e) => {
                    if (t === e) return !0;
                    if (t.byteLength !== e.byteLength) return !1;
                    for (let r = 0; r < t.byteLength; r++)
                        if (t[r] !== e[r]) return !1;
                    return !0
                },
                a = t => {
                    if (t instanceof Uint8Array && "Uint8Array" === t.constructor.name) return t;
                    if (t instanceof ArrayBuffer) return new Uint8Array(t);
                    if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
                    throw new Error("Unknown type, must be binary type")
                },
                u = t => t instanceof ArrayBuffer || ArrayBuffer.isView(t),
                c = t => (new TextEncoder).encode(t),
                f = t => (new TextDecoder).decode(t)
        },
        81362: function(t, e, r) {
            "use strict";
            r.d(e, {
                k: function() {
                    return u
                }
            });
            var n = r(15216),
                o = r(28924),
                i = r(99086),
                s = r(22817),
                a = r(95934);
            class u {
                constructor(t, e, r, n) {
                    this.code = e, this.version = t, this.multihash = r, this.bytes = n, this.byteOffset = n.byteOffset, this.byteLength = n.byteLength, this.asCID = this, this._baseCache = new Map, Object.defineProperties(this, {
                        byteOffset: w,
                        byteLength: w,
                        code: g,
                        version: g,
                        multihash: g,
                        bytes: g,
                        _baseCache: w,
                        asCID: w
                    })
                }
                toV0() {
                    if (0 === this.version) return this; {
                        const {
                            code: t,
                            multihash: e
                        } = this;
                        if (t !== l) throw new Error("Cannot convert a non dag-pb CID to CIDv0");
                        if (e.code !== d) throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
                        return u.createV0(e)
                    }
                }
                toV1() {
                    switch (this.version) {
                        case 0:
                            {
                                const {
                                    code: t,
                                    digest: e
                                } = this.multihash,
                                r = o.Ue(t, e);
                                return u.createV1(this.code, r)
                            }
                        case 1:
                            return this;
                        default:
                            throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)
                    }
                }
                equals(t) {
                    return t && this.code === t.code && this.version === t.version && o.fS(this.multihash, t.multihash)
                }
                toString(t) {
                    const {
                        bytes: e,
                        version: r,
                        _baseCache: n
                    } = this;
                    return 0 === r ? f(e, n, t || i.base58btc.encoder) : h(e, n, t || s.base32.encoder)
                }
                toJSON() {
                    return {
                        code: this.code,
                        version: this.version,
                        hash: this.multihash.bytes
                    }
                }
                get[Symbol.toStringTag]() {
                    return "CID"
                }[Symbol.for("nodejs.util.inspect.custom")]() {
                    return "CID(" + this.toString() + ")"
                }
                static isCID(t) {
                    return b(/^0\.0/, m), !(!t || !t[y] && t.asCID !== t)
                }
                get toBaseEncodedString() {
                    throw new Error("Deprecated, use .toString()")
                }
                get codec() {
                    throw new Error('"codec" property is deprecated, use integer "code" property instead')
                }
                get buffer() {
                    throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")
                }
                get multibaseName() {
                    throw new Error('"multibaseName" property is deprecated')
                }
                get prefix() {
                    throw new Error('"prefix" property is deprecated')
                }
                static asCID(t) {
                    if (t instanceof u) return t;
                    if (null != t && t.asCID === t) {
                        const {
                            version: e,
                            code: r,
                            multihash: n,
                            bytes: o
                        } = t;
                        return new u(e, r, n, o || p(e, r, n.bytes))
                    }
                    if (null != t && !0 === t[y]) {
                        const {
                            version: e,
                            multihash: r,
                            code: n
                        } = t, i = o.Jx(r);
                        return u.create(e, n, i)
                    }
                    return null
                }
                static create(t, e, r) {
                    if ("number" !== typeof e) throw new Error("String codecs are no longer supported");
                    switch (t) {
                        case 0:
                            if (e !== l) throw new Error(`Version 0 CID must use dag-pb (code: ${l}) block encoding`);
                            return new u(t, e, r, r.bytes);
                        case 1:
                            {
                                const n = p(t, e, r.bytes);
                                return new u(t, e, r, n)
                            }
                        default:
                            throw new Error("Invalid version")
                    }
                }
                static createV0(t) {
                    return u.create(0, l, t)
                }
                static createV1(t, e) {
                    return u.create(1, t, e)
                }
                static decode(t) {
                    const [e, r] = u.decodeFirst(t);
                    if (r.length) throw new Error("Incorrect length");
                    return e
                }
                static decodeFirst(t) {
                    const e = u.inspectBytes(t),
                        r = e.size - e.multihashSize,
                        n = (0, a.coerce)(t.subarray(r, r + e.multihashSize));
                    if (n.byteLength !== e.multihashSize) throw new Error("Incorrect length");
                    const i = n.subarray(e.multihashSize - e.digestSize),
                        s = new o.zZ(e.multihashCode, e.digestSize, i, n);
                    return [0 === e.version ? u.createV0(s) : u.createV1(e.codec, s), t.subarray(e.size)]
                }
                static inspectBytes(t) {
                    let e = 0;
                    const r = () => {
                        const [r, o] = n.Jx(t.subarray(e));
                        return e += o, r
                    };
                    let o = r(),
                        i = l;
                    if (18 === o ? (o = 0, e = 0) : 1 === o && (i = r()), 0 !== o && 1 !== o) throw new RangeError(`Invalid CID version ${o}`);
                    const s = e,
                        a = r(),
                        u = r(),
                        c = e + u;
                    return {
                        version: o,
                        codec: i,
                        multihashCode: a,
                        digestSize: u,
                        multihashSize: c - s,
                        size: c
                    }
                }
                static parse(t, e) {
                    const [r, n] = c(t, e), o = u.decode(n);
                    return o._baseCache.set(r, t), o
                }
            }
            const c = (t, e) => {
                    switch (t[0]) {
                        case "Q":
                            {
                                const r = e || i.base58btc;
                                return [i.base58btc.prefix, r.decode(`${i.base58btc.prefix}${t}`)]
                            }
                        case i.base58btc.prefix:
                            {
                                const r = e || i.base58btc;
                                return [i.base58btc.prefix, r.decode(t)]
                            }
                        case s.base32.prefix:
                            {
                                const r = e || s.base32;
                                return [s.base32.prefix, r.decode(t)]
                            }
                        default:
                            if (null == e) throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
                            return [t[0], e.decode(t)]
                    }
                },
                f = (t, e, r) => {
                    const {
                        prefix: n
                    } = r;
                    if (n !== i.base58btc.prefix) throw Error(`Cannot string encode V0 in ${r.name} encoding`);
                    const o = e.get(n);
                    if (null == o) {
                        const o = r.encode(t).slice(1);
                        return e.set(n, o), o
                    }
                    return o
                },
                h = (t, e, r) => {
                    const {
                        prefix: n
                    } = r, o = e.get(n);
                    if (null == o) {
                        const o = r.encode(t);
                        return e.set(n, o), o
                    }
                    return o
                },
                l = 112,
                d = 18,
                p = (t, e, r) => {
                    const o = n.P$(t),
                        i = o + n.P$(e),
                        s = new Uint8Array(i + r.byteLength);
                    return n.mL(t, s, 0), n.mL(e, s, o), s.set(r, i), s
                },
                y = Symbol.for("@ipld/js-cid/CID"),
                g = {
                    writable: !1,
                    configurable: !1,
                    enumerable: !0
                },
                w = {
                    writable: !1,
                    enumerable: !1,
                    configurable: !1
                },
                b = (t, e) => {
                    if (!t.test("0.0.0-dev")) throw new Error(e);
                    console.warn(e)
                },
                m = "CID.isCID(v) is deprecated and will be removed in the next major release.\nFollowing code pattern:\n\nif (CID.isCID(value)) {\n  doSomethingWithCID(value)\n}\n\nIs replaced with:\n\nconst cid = CID.asCID(value)\nif (cid) {\n  // Make sure to use cid instead of value\n  doSomethingWithCID(cid)\n}\n"
        },
        96945: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                code: function() {
                    return i
                },
                decode: function() {
                    return a
                },
                encode: function() {
                    return s
                },
                name: function() {
                    return o
                }
            });
            var n = r(95934);
            const o = "raw",
                i = 85,
                s = t => (0, n.coerce)(t),
                a = t => (0, n.coerce)(t)
        },
        28924: function(t, e, r) {
            "use strict";
            r.d(e, {
                Jx: function() {
                    return s
                },
                Ue: function() {
                    return i
                },
                fS: function() {
                    return a
                },
                zZ: function() {
                    return u
                }
            });
            var n = r(95934),
                o = r(15216);
            const i = (t, e) => {
                    const r = e.byteLength,
                        n = o.P$(t),
                        i = n + o.P$(r),
                        s = new Uint8Array(i + r);
                    return o.mL(t, s, 0), o.mL(r, s, n), s.set(e, i), new u(t, r, e, s)
                },
                s = t => {
                    const e = (0, n.coerce)(t),
                        [r, i] = o.Jx(e),
                        [s, a] = o.Jx(e.subarray(i)),
                        c = e.subarray(i + a);
                    if (c.byteLength !== s) throw new Error("Incorrect length");
                    return new u(r, s, c, e)
                },
                a = (t, e) => t === e || t.code === e.code && t.size === e.size && (0, n.equals)(t.bytes, e.bytes);
            class u {
                constructor(t, e, r, n) {
                    this.code = t, this.size = e, this.digest = r, this.bytes = n
                }
            }
        },
        7225: function(t, e, r) {
            "use strict";
            r.d(e, {
                D: function() {
                    return o
                }
            });
            var n = r(28924);
            const o = ({
                name: t,
                code: e,
                encode: r
            }) => new i(t, e, r);
            class i {
                constructor(t, e, r) {
                    this.name = t, this.code = e, this.encode = r
                }
                digest(t) {
                    if (t instanceof Uint8Array) {
                        const e = this.encode(t);
                        return e instanceof Uint8Array ? n.Ue(this.code, e) : e.then((t => n.Ue(this.code, t)))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
        },
        78103: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                identity: function() {
                    return s
                }
            });
            var n = r(95934),
                o = r(28924);
            const i = n.coerce,
                s = {
                    code: 0,
                    name: "identity",
                    encode: i,
                    digest: t => o.Ue(0, i(t))
                }
        },
        56155: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                sha256: function() {
                    return i
                },
                sha512: function() {
                    return s
                }
            });
            var n = r(7225);
            const o = t => async e => new Uint8Array(await crypto.subtle.digest(t, e)),
                i = (0, n.D)({
                    name: "sha2-256",
                    code: 18,
                    encode: o("SHA-256")
                }),
                s = (0, n.D)({
                    name: "sha2-512",
                    code: 19,
                    encode: o("SHA-512")
                })
        },
        87232: function(t, e, r) {
            "use strict";
            r.d(e, {
                aI: function() {
                    return o
                },
                k0: function() {
                    return n.k
                }
            });
            var n = r(81362),
                o = (r(15216), r(95934));
            r(7225), r(28924)
        },
        15216: function(t, e, r) {
            "use strict";
            r.d(e, {
                Jx: function() {
                    return g
                },
                mL: function() {
                    return w
                },
                P$: function() {
                    return b
                }
            });
            var n = function t(e, r, n) {
                    r = r || [];
                    var i = n = n || 0;
                    for (; e >= o;) r[n++] = 255 & e | 128, e /= 128;
                    for (; - 128 & e;) r[n++] = 255 & e | 128, e >>>= 7;
                    return r[n] = 0 | e, t.bytes = n - i + 1, r
                },
                o = Math.pow(2, 31);
            var i = function t(e, r) {
                var n, o = 0,
                    i = 0,
                    s = r = r || 0,
                    a = e.length;
                do {
                    if (s >= a) throw t.bytes = 0, new RangeError("Could not decode varint");
                    n = e[s++], o += i < 28 ? (127 & n) << i : (127 & n) * Math.pow(2, i), i += 7
                } while (n >= 128);
                return t.bytes = s - r, o
            };
            var s = Math.pow(2, 7),
                a = Math.pow(2, 14),
                u = Math.pow(2, 21),
                c = Math.pow(2, 28),
                f = Math.pow(2, 35),
                h = Math.pow(2, 42),
                l = Math.pow(2, 49),
                d = Math.pow(2, 56),
                p = Math.pow(2, 63),
                y = {
                    encode: n,
                    decode: i,
                    encodingLength: function(t) {
                        return t < s ? 1 : t < a ? 2 : t < u ? 3 : t < c ? 4 : t < f ? 5 : t < h ? 6 : t < l ? 7 : t < d ? 8 : t < p ? 9 : 10
                    }
                };
            const g = (t, e = 0) => [y.decode(t, e), y.decode.bytes],
                w = (t, e, r = 0) => (y.encode(t, e, r), e),
                b = t => y.encodingLength(t)
        },
        53160: function(t, e, r) {
            "use strict";
            r.d(e, {
                E: function() {
                    return o
                }
            });
            var n = r(16867);

            function o(t = 0) {
                return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? (0, n.P)(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t)
            }
        },
        20605: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                concat: function() {
                    return i
                }
            });
            var n = r(53160),
                o = r(16867);

            function i(t, e) {
                e || (e = t.reduce(((t, e) => t + e.length), 0));
                const r = (0, n.E)(e);
                let i = 0;
                for (const n of t) r.set(n, i), i += n.length;
                return (0, o.P)(r)
            }
        },
        41113: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                fromString: function() {
                    return W
                }
            });
            var n = {};
            r.r(n), r.d(n, {
                identity: function() {
                    return p
                }
            });
            var o = {};
            r.r(o), r.d(o, {
                base2: function() {
                    return y
                }
            });
            var i = {};
            r.r(i), r.d(i, {
                base8: function() {
                    return g
                }
            });
            var s = {};
            r.r(s), r.d(s, {
                base10: function() {
                    return w
                }
            });
            var a = {};
            r.r(a), r.d(a, {
                base16: function() {
                    return b
                },
                base16upper: function() {
                    return m
                }
            });
            var u = {};
            r.r(u), r.d(u, {
                base36: function() {
                    return _
                },
                base36upper: function() {
                    return E
                }
            });
            var c = {};
            r.r(c), r.d(c, {
                base64: function() {
                    return A
                },
                base64pad: function() {
                    return B
                },
                base64url: function() {
                    return x
                },
                base64urlpad: function() {
                    return T
                }
            });
            var f = {};
            r.r(f), r.d(f, {
                base256emoji: function() {
                    return N
                }
            });
            var h = {};
            r.r(h), r.d(h, {
                code: function() {
                    return z
                },
                decode: function() {
                    return j
                },
                encode: function() {
                    return P
                },
                name: function() {
                    return R
                }
            });
            var l = r(31114),
                d = r(95934);
            const p = (0, l.Dp)({
                    prefix: "\0",
                    name: "identity",
                    encode: t => (0, d.toString)(t),
                    decode: t => (0, d.fromString)(t)
                }),
                y = (0, l.ET)({
                    prefix: "0",
                    name: "base2",
                    alphabet: "01",
                    bitsPerChar: 1
                }),
                g = (0, l.ET)({
                    prefix: "7",
                    name: "base8",
                    alphabet: "01234567",
                    bitsPerChar: 3
                }),
                w = (0, l.kU)({
                    prefix: "9",
                    name: "base10",
                    alphabet: "0123456789"
                }),
                b = (0, l.ET)({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                m = (0, l.ET)({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                });
            var v = r(22817);
            const _ = (0, l.kU)({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                E = (0, l.kU)({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                });
            var k = r(99086);
            const A = (0, l.ET)({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                B = (0, l.ET)({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                x = (0, l.ET)({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                T = (0, l.ET)({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                }),
                S = Array.from("\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42"),
                I = S.reduce(((t, e, r) => (t[r] = e, t)), []),
                C = S.reduce(((t, e, r) => (t[e.codePointAt(0)] = r, t)), []);
            const N = (0, l.Dp)({
                prefix: "\ud83d\ude80",
                name: "base256emoji",
                encode: function(t) {
                    return t.reduce(((t, e) => t += I[e]), "")
                },
                decode: function(t) {
                    const e = [];
                    for (const r of t) {
                        const t = C[r.codePointAt(0)];
                        if (void 0 === t) throw new Error(`Non-base256emoji character: ${r}`);
                        e.push(t)
                    }
                    return new Uint8Array(e)
                }
            });
            var U = r(56155),
                O = r(78103);
            r(96945);
            const D = new TextEncoder,
                L = new TextDecoder,
                R = "json",
                z = 512,
                P = t => D.encode(JSON.stringify(t)),
                j = t => JSON.parse(L.decode(t));
            r(87232);
            const M = { ...n,
                ...o,
                ...i,
                ...s,
                ...a,
                ...v,
                ...u,
                ...k,
                ...c,
                ...f
            };
            var F = r(53160);

            function $(t, e, r, n) {
                return {
                    name: t,
                    prefix: e,
                    encoder: {
                        name: t,
                        prefix: e,
                        encode: r
                    },
                    decoder: {
                        decode: n
                    }
                }
            }
            const H = $("utf8", "u", (t => "u" + new TextDecoder("utf8").decode(t)), (t => (new TextEncoder).encode(t.substring(1)))),
                V = $("ascii", "a", (t => {
                    let e = "a";
                    for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
                    return e
                }), (t => {
                    t = t.substring(1);
                    const e = (0, F.E)(t.length);
                    for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
                    return e
                }));
            var G = {
                    utf8: H,
                    "utf-8": H,
                    hex: M.base16,
                    latin1: V,
                    ascii: V,
                    binary: V,
                    ...M
                },
                q = r(16867);

            function W(t, e = "utf8") {
                const r = G[e];
                if (!r) throw new Error(`Unsupported encoding "${e}"`);
                return "utf8" !== e && "utf-8" !== e || null == globalThis.Buffer || null == globalThis.Buffer.from ? r.decoder.decode(`${r.prefix}${t}`) : (0, q.P)(globalThis.Buffer.from(t, "utf-8"))
            }
        },
        16867: function(t, e, r) {
            "use strict";

            function n(t) {
                return null != globalThis.Buffer ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t
            }
            r.d(e, {
                P: function() {
                    return n
                }
            })
        },
        96810: function(t, e, r) {
            "use strict";
            r.d(e, {
                xk: function() {
                    return co
                }
            });
            var n = {};
            r.r(n), r.d(n, {
                code: function() {
                    return ir
                },
                createLink: function() {
                    return nr
                },
                createNode: function() {
                    return rr
                },
                decode: function() {
                    return ar
                },
                encode: function() {
                    return sr
                },
                name: function() {
                    return or
                },
                prepare: function() {
                    return tr
                },
                validate: function() {
                    return er
                }
            });
            var o = {};
            r.r(o), r.d(o, {
                abortedError: function() {
                    return on
                },
                notFoundError: function() {
                    return nn
                }
            });
            var i = {};
            r.r(i), r.d(i, {
                code: function() {
                    return Kn
                },
                decode: function() {
                    return Zn
                },
                encode: function() {
                    return Yn
                },
                name: function() {
                    return Xn
                }
            });
            r(34155);
            Symbol("TIMEOUT");

            function s(t) {
                if ("function" === typeof t.next) return t;
                if ("function" === typeof t[Symbol.iterator]) return t[Symbol.iterator]();
                if ("function" === typeof t[Symbol.asyncIterator]) return t[Symbol.asyncIterator]();
                throw new TypeError('"values" does not to conform to any of the iterator or iterable protocols')
            }

            function a() {
                let t, e;
                return {
                    promise: new Promise(((r, n) => {
                        e = r, t = n
                    })),
                    reject: t,
                    resolve: e
                }
            }

            function u(t, e, r) {
                const n = s(r),
                    o = [],
                    i = [];
                let u = !1,
                    c = !1,
                    f = 0,
                    h = null;

                function l() {
                    for (; i.length > 0 && o.length > 0;) {
                        const {
                            resolve: t
                        } = i.shift();
                        t({
                            done: !1,
                            value: o.shift()
                        })
                    }
                    for (; i.length > 0 && 0 === f && u;) {
                        const {
                            resolve: t,
                            reject: e
                        } = i.shift();
                        h ? (e(h), h = null) : t({
                            done: !0,
                            value: void 0
                        })
                    }
                }
                async function d() {
                    if (u) l();
                    else if (!c && !(f + o.length >= t)) {
                        c = !0, f++;
                        try {
                            const {
                                done: t,
                                value: r
                            } = await n.next();
                            t ? (u = !0, f--, l()) : async function(t) {
                                try {
                                    const r = await e(t);
                                    o.push(r)
                                } catch (r) {
                                    u = !0, h = r
                                }
                                f--, l(), d()
                            }(r)
                        } catch (r) {
                            u = !0, f--, h = r, l()
                        }
                        c = !1, d()
                    }
                }
                const p = {
                    next: async function() {
                        if (0 === o.length) {
                            const t = a();
                            return i.push(t), d(), t.promise
                        }
                        const t = o.shift();
                        return d(), {
                            done: !1,
                            value: t
                        }
                    },
                    [Symbol.asyncIterator]: () => p
                };
                return p
            }

            function c(t, e, r) {
                return void 0 === e ? (e, r) => r ? c(t, e, r) : c(t, e) : void 0 === r ? r => c(t, e, r) : u(t, e, r)
            }
            var f = r(42693),
                h = r(93093),
                l = r(60618),
                d = r(94676),
                p = r(81362),
                y = r(28924);
            const g = ["string", "number", "bigint", "symbol"],
                w = ["Function", "Generator", "AsyncGenerator", "GeneratorFunction", "AsyncGeneratorFunction", "AsyncFunction", "Observable", "Array", "Buffer", "Object", "RegExp", "Date", "Error", "Map", "Set", "WeakMap", "WeakSet", "ArrayBuffer", "SharedArrayBuffer", "DataView", "Promise", "URL", "HTMLElement", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array", "BigInt64Array", "BigUint64Array"];

            function b(t) {
                if (null === t) return "null";
                if (void 0 === t) return "undefined";
                if (!0 === t || !1 === t) return "boolean";
                const e = typeof t;
                if (g.includes(e)) return e;
                if ("function" === e) return "Function";
                if (Array.isArray(t)) return "Array";
                if (function(t) {
                        return t && t.constructor && t.constructor.isBuffer && t.constructor.isBuffer.call(null, t)
                    }(t)) return "Buffer";
                const r = function(t) {
                    const e = Object.prototype.toString.call(t).slice(8, -1);
                    if (w.includes(e)) return e;
                    return
                }(t);
                return r || "Object"
            }
            class m {
                constructor(t, e, r) {
                    this.major = t, this.majorEncoded = t << 5, this.name = e, this.terminal = r
                }
                toString() {
                    return `Type[${this.major}].${this.name}`
                }
                compare(t) {
                    return this.major < t.major ? -1 : this.major > t.major ? 1 : 0
                }
            }
            m.uint = new m(0, "uint", !0), m.negint = new m(1, "negint", !0), m.bytes = new m(2, "bytes", !0), m.string = new m(3, "string", !0), m.array = new m(4, "array", !1), m.map = new m(5, "map", !1), m.tag = new m(6, "tag", !1), m.float = new m(7, "float", !0), m.false = new m(7, "false", !0), m.true = new m(7, "true", !0), m.null = new m(7, "null", !0), m.undefined = new m(7, "undefined", !0), m.break = new m(7, "break", !0);
            class v {
                constructor(t, e, r) {
                    this.type = t, this.value = e, this.encodedLength = r, this.encodedBytes = void 0, this.byteValue = void 0
                }
                toString() {
                    return `Token[${this.type}].${this.value}`
                }
            }
            const _ = globalThis.process && !globalThis.process.browser && globalThis.Buffer && "function" === typeof globalThis.Buffer.isBuffer,
                E = new TextDecoder,
                k = new TextEncoder;

            function A(t) {
                return _ && globalThis.Buffer.isBuffer(t)
            }

            function B(t) {
                return t instanceof Uint8Array ? A(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t : Uint8Array.from(t)
            }
            const x = _ ? (t, e, r) => r - e > 64 ? globalThis.Buffer.from(t.subarray(e, r)).toString("utf8") : O(t, e, r) : (t, e, r) => r - e > 64 ? E.decode(t.subarray(e, r)) : O(t, e, r),
                T = _ ? t => t.length > 64 ? globalThis.Buffer.from(t) : U(t) : t => t.length > 64 ? k.encode(t) : U(t),
                S = t => Uint8Array.from(t),
                I = _ ? (t, e, r) => A(t) ? new Uint8Array(t.subarray(e, r)) : t.slice(e, r) : (t, e, r) => t.slice(e, r),
                C = _ ? (t, e) => (t = t.map((t => t instanceof Uint8Array ? t : globalThis.Buffer.from(t))), B(globalThis.Buffer.concat(t, e))) : (t, e) => {
                    const r = new Uint8Array(e);
                    let n = 0;
                    for (let o of t) n + o.length > r.length && (o = o.subarray(0, r.length - n)), r.set(o, n), n += o.length;
                    return r
                },
                N = _ ? t => globalThis.Buffer.allocUnsafe(t) : t => new Uint8Array(t);

            function U(t, e = 1 / 0) {
                let r;
                const n = t.length;
                let o = null;
                const i = [];
                for (let s = 0; s < n; ++s) {
                    if (r = t.charCodeAt(s), r > 55295 && r < 57344) {
                        if (!o) {
                            if (r > 56319) {
                                (e -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === n) {
                                (e -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            o = r;
                            continue
                        }
                        if (r < 56320) {
                            (e -= 3) > -1 && i.push(239, 191, 189), o = r;
                            continue
                        }
                        r = 65536 + (o - 55296 << 10 | r - 56320)
                    } else o && (e -= 3) > -1 && i.push(239, 191, 189);
                    if (o = null, r < 128) {
                        if ((e -= 1) < 0) break;
                        i.push(r)
                    } else if (r < 2048) {
                        if ((e -= 2) < 0) break;
                        i.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((e -= 3) < 0) break;
                        i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112)) throw new Error("Invalid code point");
                        if ((e -= 4) < 0) break;
                        i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return i
            }

            function O(t, e, r) {
                const n = [];
                for (; e < r;) {
                    const o = t[e];
                    let i = null,
                        s = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
                    if (e + s <= r) {
                        let r, n, a, u;
                        switch (s) {
                            case 1:
                                o < 128 && (i = o);
                                break;
                            case 2:
                                r = t[e + 1], 128 === (192 & r) && (u = (31 & o) << 6 | 63 & r, u > 127 && (i = u));
                                break;
                            case 3:
                                r = t[e + 1], n = t[e + 2], 128 === (192 & r) && 128 === (192 & n) && (u = (15 & o) << 12 | (63 & r) << 6 | 63 & n, u > 2047 && (u < 55296 || u > 57343) && (i = u));
                                break;
                            case 4:
                                r = t[e + 1], n = t[e + 2], a = t[e + 3], 128 === (192 & r) && 128 === (192 & n) && 128 === (192 & a) && (u = (15 & o) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & a, u > 65535 && u < 1114112 && (i = u))
                        }
                    }
                    null === i ? (i = 65533, s = 1) : i > 65535 && (i -= 65536, n.push(i >>> 10 & 1023 | 55296), i = 56320 | 1023 & i), n.push(i), e += s
                }
                return function(t) {
                    const e = t.length;
                    if (e <= D) return String.fromCharCode.apply(String, t);
                    let r = "",
                        n = 0;
                    for (; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += D));
                    return r
                }(n)
            }
            const D = 4096;
            class L {
                constructor(t = 256) {
                    this.chunkSize = t, this.cursor = 0, this.maxCursor = -1, this.chunks = [], this._initReuseChunk = null
                }
                reset() {
                    this.cursor = 0, this.maxCursor = -1, this.chunks.length && (this.chunks = []), null !== this._initReuseChunk && (this.chunks.push(this._initReuseChunk), this.maxCursor = this._initReuseChunk.length - 1)
                }
                push(t) {
                    let e = this.chunks[this.chunks.length - 1];
                    if (this.cursor + t.length <= this.maxCursor + 1) {
                        const r = e.length - (this.maxCursor - this.cursor) - 1;
                        e.set(t, r)
                    } else {
                        if (e) {
                            const t = e.length - (this.maxCursor - this.cursor) - 1;
                            t < e.length && (this.chunks[this.chunks.length - 1] = e.subarray(0, t), this.maxCursor = this.cursor - 1)
                        }
                        t.length < 64 && t.length < this.chunkSize ? (e = N(this.chunkSize), this.chunks.push(e), this.maxCursor += e.length, null === this._initReuseChunk && (this._initReuseChunk = e), e.set(t, 0)) : (this.chunks.push(t), this.maxCursor += t.length)
                    }
                    this.cursor += t.length
                }
                toBytes(t = !1) {
                    let e;
                    if (1 === this.chunks.length) {
                        const r = this.chunks[0];
                        t && this.cursor > r.length / 2 ? (e = this.cursor === r.length ? r : r.subarray(0, this.cursor), this._initReuseChunk = null, this.chunks = []) : e = I(r, 0, this.cursor)
                    } else e = C(this.chunks, this.cursor);
                    return t && this.reset(), e
                }
            }
            const R = [];

            function z(t, e, r) {
                if (t.length - e < r) throw new Error("CBOR decode error: not enough data for type")
            }
            R[23] = 1, R[24] = 2, R[25] = 3, R[26] = 5, R[27] = 9;
            const P = [24, 256, 65536, 4294967296, BigInt("18446744073709551616")];

            function j(t, e, r) {
                z(t, e, 1);
                const n = t[e];
                if (!0 === r.strict && n < P[0]) throw new Error("CBOR decode error: integer encoded in more bytes than necessary (strict decode)");
                return n
            }

            function M(t, e, r) {
                z(t, e, 2);
                const n = t[e] << 8 | t[e + 1];
                if (!0 === r.strict && n < P[1]) throw new Error("CBOR decode error: integer encoded in more bytes than necessary (strict decode)");
                return n
            }

            function F(t, e, r) {
                z(t, e, 4);
                const n = 16777216 * t[e] + (t[e + 1] << 16) + (t[e + 2] << 8) + t[e + 3];
                if (!0 === r.strict && n < P[2]) throw new Error("CBOR decode error: integer encoded in more bytes than necessary (strict decode)");
                return n
            }

            function $(t, e, r) {
                z(t, e, 8);
                const n = 16777216 * t[e] + (t[e + 1] << 16) + (t[e + 2] << 8) + t[e + 3],
                    o = 16777216 * t[e + 4] + (t[e + 5] << 16) + (t[e + 6] << 8) + t[e + 7],
                    i = (BigInt(n) << BigInt(32)) + BigInt(o);
                if (!0 === r.strict && i < P[3]) throw new Error("CBOR decode error: integer encoded in more bytes than necessary (strict decode)");
                if (i <= Number.MAX_SAFE_INTEGER) return Number(i);
                if (!0 === r.allowBigInt) return i;
                throw new Error("CBOR decode error: integers outside of the safe integer range are not supported")
            }

            function H(t, e) {
                return V(t, 0, e.value)
            }

            function V(t, e, r) {
                if (r < P[0]) {
                    const n = Number(r);
                    t.push([e | n])
                } else if (r < P[1]) {
                    const n = Number(r);
                    t.push([24 | e, n])
                } else if (r < P[2]) {
                    const n = Number(r);
                    t.push([25 | e, n >>> 8, 255 & n])
                } else if (r < P[3]) {
                    const n = Number(r);
                    t.push([26 | e, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n])
                } else {
                    const n = BigInt(r);
                    if (!(n < P[4])) throw new Error("CBOR decode error: encountered BigInt larger than allowable range"); {
                        const r = [27 | e, 0, 0, 0, 0, 0, 0, 0];
                        let o = Number(n & BigInt(4294967295)),
                            i = Number(n >> BigInt(32) & BigInt(4294967295));
                        r[8] = 255 & o, o >>= 8, r[7] = 255 & o, o >>= 8, r[6] = 255 & o, o >>= 8, r[5] = 255 & o, r[4] = 255 & i, i >>= 8, r[3] = 255 & i, i >>= 8, r[2] = 255 & i, i >>= 8, r[1] = 255 & i, t.push(r)
                    }
                }
            }
            H.encodedSize = function(t) {
                return V.encodedSize(t.value)
            }, V.encodedSize = function(t) {
                return t < P[0] ? 1 : t < P[1] ? 2 : t < P[2] ? 3 : t < P[3] ? 5 : 9
            }, H.compareTokens = function(t, e) {
                return t.value < e.value ? -1 : t.value > e.value ? 1 : 0
            };
            const G = BigInt(-1),
                q = BigInt(1);

            function W(t, e) {
                const r = e.value,
                    n = "bigint" === typeof r ? r * G - q : -1 * r - 1;
                V(t, e.type.majorEncoded, n)
            }

            function J(t, e, r, n) {
                z(t, e, r + n);
                const o = I(t, e + r, e + r + n);
                return new v(m.bytes, o, r + n)
            }

            function X(t, e, r, n) {
                return J(t, e, 1, r)
            }

            function K(t) {
                return void 0 === t.encodedBytes && (t.encodedBytes = t.type === m.string ? T(t.value) : t.value), t.encodedBytes
            }

            function Y(t, e) {
                const r = K(e);
                V(t, e.type.majorEncoded, r.length), t.push(r)
            }

            function Z(t, e, r, n, o) {
                const i = r + n;
                z(t, e, i);
                const s = new v(m.string, x(t, e + r, e + i), i);
                return !0 === o.retainStringBytes && (s.byteValue = I(t, e + r, e + i)), s
            }

            function Q(t, e, r, n) {
                return Z(t, e, 1, r, n)
            }
            W.encodedSize = function(t) {
                const e = t.value,
                    r = "bigint" === typeof e ? e * G - q : -1 * e - 1;
                return r < P[0] ? 1 : r < P[1] ? 2 : r < P[2] ? 3 : r < P[3] ? 5 : 9
            }, W.compareTokens = function(t, e) {
                return t.value < e.value ? 1 : t.value > e.value ? -1 : 0
            }, Y.encodedSize = function(t) {
                const e = K(t);
                return V.encodedSize(e.length) + e.length
            }, Y.compareTokens = function(t, e) {
                return r = K(t), n = K(e), r.length < n.length ? -1 : r.length > n.length ? 1 : function(t, e) {
                    if (A(t) && A(e)) return t.compare(e);
                    for (let r = 0; r < t.length; r++)
                        if (t[r] !== e[r]) return t[r] < e[r] ? -1 : 1;
                    return 0
                }(r, n);
                var r, n
            };
            const tt = Y;

            function et(t, e, r, n) {
                return new v(m.array, n, r)
            }

            function rt(t, e, r, n) {
                return et(0, 0, 1, r)
            }

            function nt(t, e) {
                V(t, m.array.majorEncoded, e.value)
            }

            function ot(t, e, r, n) {
                return new v(m.map, n, r)
            }

            function it(t, e, r, n) {
                return ot(0, 0, 1, r)
            }

            function st(t, e) {
                V(t, m.map.majorEncoded, e.value)
            }

            function at(t, e, r, n) {
                return new v(m.tag, r, 1)
            }

            function ut(t, e) {
                V(t, m.tag.majorEncoded, e.value)
            }
            nt.compareTokens = H.compareTokens, nt.encodedSize = function(t) {
                return V.encodedSize(t.value)
            }, st.compareTokens = H.compareTokens, st.encodedSize = function(t) {
                return V.encodedSize(t.value)
            }, ut.compareTokens = H.compareTokens, ut.encodedSize = function(t) {
                return V.encodedSize(t.value)
            };

            function ct(t, e, r) {
                if (r) {
                    if (!1 === r.allowNaN && Number.isNaN(t)) throw new Error("CBOR decode error: NaN values are not supported");
                    if (!1 === r.allowInfinity && (t === 1 / 0 || t === -1 / 0)) throw new Error("CBOR decode error: Infinity values are not supported")
                }
                return new v(m.float, t, e)
            }

            function ft(t, e, r) {
                const n = e.value;
                if (!1 === n) t.push([20 | m.float.majorEncoded]);
                else if (!0 === n) t.push([21 | m.float.majorEncoded]);
                else if (null === n) t.push([22 | m.float.majorEncoded]);
                else if (void 0 === n) t.push([23 | m.float.majorEncoded]);
                else {
                    let e, i = !1;
                    r && !0 === r.float64 || (pt(n), e = yt(dt, 1), n === e || Number.isNaN(n) ? (dt[0] = 249, t.push(dt.slice(0, 3)), i = !0) : (gt(n), e = wt(dt, 1), n === e && (dt[0] = 250, t.push(dt.slice(0, 5)), i = !0))), i || (o = n, lt.setFloat64(0, o, !1), e = bt(dt, 1), dt[0] = 251, t.push(dt.slice(0, 9)))
                }
                var o
            }
            ft.encodedSize = function(t, e) {
                const r = t.value;
                if (!1 === r || !0 === r || null === r || void 0 === r) return 1;
                if (!e || !0 !== e.float64) {
                    pt(r);
                    let t = yt(dt, 1);
                    if (r === t || Number.isNaN(r)) return 3;
                    if (gt(r), t = wt(dt, 1), r === t) return 5
                }
                return 9
            };
            const ht = new ArrayBuffer(9),
                lt = new DataView(ht, 1),
                dt = new Uint8Array(ht, 0);

            function pt(t) {
                if (t === 1 / 0) lt.setUint16(0, 31744, !1);
                else if (t === -1 / 0) lt.setUint16(0, 64512, !1);
                else if (Number.isNaN(t)) lt.setUint16(0, 32256, !1);
                else {
                    lt.setFloat32(0, t);
                    const e = lt.getUint32(0),
                        r = (2139095040 & e) >> 23,
                        n = 8388607 & e;
                    if (255 === r) lt.setUint16(0, 31744, !1);
                    else if (0 === r) lt.setUint16(0, (2147483648 & t) >> 16 | n >> 13, !1);
                    else {
                        const t = r - 127;
                        t < -24 ? lt.setUint16(0, 0) : t < -14 ? lt.setUint16(0, (2147483648 & e) >> 16 | 1 << 24 + t, !1) : lt.setUint16(0, (2147483648 & e) >> 16 | t + 15 << 10 | n >> 13, !1)
                    }
                }
            }

            function yt(t, e) {
                if (t.length - e < 2) throw new Error("CBOR decode error: not enough data for float16");
                const r = (t[e] << 8) + t[e + 1];
                if (31744 === r) return 1 / 0;
                if (64512 === r) return -1 / 0;
                if (32256 === r) return NaN;
                const n = r >> 10 & 31,
                    o = 1023 & r;
                let i;
                return i = 0 === n ? o * 2 ** -24 : 31 !== n ? (o + 1024) * 2 ** (n - 25) : 0 === o ? 1 / 0 : NaN, 32768 & r ? -i : i
            }

            function gt(t) {
                lt.setFloat32(0, t, !1)
            }

            function wt(t, e) {
                if (t.length - e < 4) throw new Error("CBOR decode error: not enough data for float32");
                const r = (t.byteOffset || 0) + e;
                return new DataView(t.buffer, r, 4).getFloat32(0, !1)
            }

            function bt(t, e) {
                if (t.length - e < 8) throw new Error("CBOR decode error: not enough data for float64");
                const r = (t.byteOffset || 0) + e;
                return new DataView(t.buffer, r, 8).getFloat64(0, !1)
            }

            function mt(t, e, r) {
                throw new Error(`CBOR decode error: encountered invalid minor (${r}) for major ${t[e]>>>5}`)
            }

            function vt(t) {
                return () => {
                    throw new Error(`CBOR decode error: ${t}`)
                }
            }
            ft.compareTokens = H.compareTokens;
            const _t = [];
            for (let lo = 0; lo <= 23; lo++) _t[lo] = mt;
            _t[24] = function(t, e, r, n) {
                return new v(m.uint, j(t, e + 1, n), 2)
            }, _t[25] = function(t, e, r, n) {
                return new v(m.uint, M(t, e + 1, n), 3)
            }, _t[26] = function(t, e, r, n) {
                return new v(m.uint, F(t, e + 1, n), 5)
            }, _t[27] = function(t, e, r, n) {
                return new v(m.uint, $(t, e + 1, n), 9)
            }, _t[28] = mt, _t[29] = mt, _t[30] = mt, _t[31] = mt;
            for (let lo = 32; lo <= 55; lo++) _t[lo] = mt;
            _t[56] = function(t, e, r, n) {
                return new v(m.negint, -1 - j(t, e + 1, n), 2)
            }, _t[57] = function(t, e, r, n) {
                return new v(m.negint, -1 - M(t, e + 1, n), 3)
            }, _t[58] = function(t, e, r, n) {
                return new v(m.negint, -1 - F(t, e + 1, n), 5)
            }, _t[59] = function(t, e, r, n) {
                const o = $(t, e + 1, n);
                if ("bigint" !== typeof o) {
                    const t = -1 - o;
                    if (t >= Number.MIN_SAFE_INTEGER) return new v(m.negint, t, 9)
                }
                if (!0 !== n.allowBigInt) throw new Error("CBOR decode error: integers outside of the safe integer range are not supported");
                return new v(m.negint, G - BigInt(o), 9)
            }, _t[60] = mt, _t[61] = mt, _t[62] = mt, _t[63] = mt;
            for (let lo = 64; lo <= 87; lo++) _t[lo] = X;
            _t[88] = function(t, e, r, n) {
                return J(t, e, 2, j(t, e + 1, n))
            }, _t[89] = function(t, e, r, n) {
                return J(t, e, 3, M(t, e + 1, n))
            }, _t[90] = function(t, e, r, n) {
                return J(t, e, 5, F(t, e + 1, n))
            }, _t[91] = function(t, e, r, n) {
                const o = $(t, e + 1, n);
                if ("bigint" === typeof o) throw new Error("CBOR decode error: 64-bit integer bytes lengths not supported");
                return J(t, e, 9, o)
            }, _t[92] = mt, _t[93] = mt, _t[94] = mt, _t[95] = vt("indefinite length bytes/strings are not supported");
            for (let lo = 96; lo <= 119; lo++) _t[lo] = Q;
            _t[120] = function(t, e, r, n) {
                return Z(t, e, 2, j(t, e + 1, n), n)
            }, _t[121] = function(t, e, r, n) {
                return Z(t, e, 3, M(t, e + 1, n), n)
            }, _t[122] = function(t, e, r, n) {
                return Z(t, e, 5, F(t, e + 1, n), n)
            }, _t[123] = function(t, e, r, n) {
                const o = $(t, e + 1, n);
                if ("bigint" === typeof o) throw new Error("CBOR decode error: 64-bit integer string lengths not supported");
                return Z(t, e, 9, o, n)
            }, _t[124] = mt, _t[125] = mt, _t[126] = mt, _t[127] = vt("indefinite length bytes/strings are not supported");
            for (let lo = 128; lo <= 151; lo++) _t[lo] = rt;
            _t[152] = function(t, e, r, n) {
                return et(0, 0, 2, j(t, e + 1, n))
            }, _t[153] = function(t, e, r, n) {
                return et(0, 0, 3, M(t, e + 1, n))
            }, _t[154] = function(t, e, r, n) {
                return et(0, 0, 5, F(t, e + 1, n))
            }, _t[155] = function(t, e, r, n) {
                const o = $(t, e + 1, n);
                if ("bigint" === typeof o) throw new Error("CBOR decode error: 64-bit integer array lengths not supported");
                return et(0, 0, 9, o)
            }, _t[156] = mt, _t[157] = mt, _t[158] = mt, _t[159] = function(t, e, r, n) {
                if (!1 === n.allowIndefinite) throw new Error("CBOR decode error: indefinite length items not allowed");
                return et(0, 0, 1, 1 / 0)
            };
            for (let lo = 160; lo <= 183; lo++) _t[lo] = it;
            _t[184] = function(t, e, r, n) {
                return ot(0, 0, 2, j(t, e + 1, n))
            }, _t[185] = function(t, e, r, n) {
                return ot(0, 0, 3, M(t, e + 1, n))
            }, _t[186] = function(t, e, r, n) {
                return ot(0, 0, 5, F(t, e + 1, n))
            }, _t[187] = function(t, e, r, n) {
                const o = $(t, e + 1, n);
                if ("bigint" === typeof o) throw new Error("CBOR decode error: 64-bit integer map lengths not supported");
                return ot(0, 0, 9, o)
            }, _t[188] = mt, _t[189] = mt, _t[190] = mt, _t[191] = function(t, e, r, n) {
                if (!1 === n.allowIndefinite) throw new Error("CBOR decode error: indefinite length items not allowed");
                return ot(0, 0, 1, 1 / 0)
            };
            for (let lo = 192; lo <= 215; lo++) _t[lo] = at;
            _t[216] = function(t, e, r, n) {
                return new v(m.tag, j(t, e + 1, n), 2)
            }, _t[217] = function(t, e, r, n) {
                return new v(m.tag, M(t, e + 1, n), 3)
            }, _t[218] = function(t, e, r, n) {
                return new v(m.tag, F(t, e + 1, n), 5)
            }, _t[219] = function(t, e, r, n) {
                return new v(m.tag, $(t, e + 1, n), 9)
            }, _t[220] = mt, _t[221] = mt, _t[222] = mt, _t[223] = mt;
            for (let lo = 224; lo <= 243; lo++) _t[lo] = vt("simple values are not supported");
            _t[244] = mt, _t[245] = mt, _t[246] = mt, _t[247] = function(t, e, r, n) {
                if (!1 === n.allowUndefined) throw new Error("CBOR decode error: undefined values are not supported");
                return !0 === n.coerceUndefinedToNull ? new v(m.null, null, 1) : new v(m.undefined, void 0, 1)
            }, _t[248] = vt("simple values are not supported"), _t[249] = function(t, e, r, n) {
                return ct(yt(t, e + 1), 3, n)
            }, _t[250] = function(t, e, r, n) {
                return ct(wt(t, e + 1), 5, n)
            }, _t[251] = function(t, e, r, n) {
                return ct(bt(t, e + 1), 9, n)
            }, _t[252] = mt, _t[253] = mt, _t[254] = mt, _t[255] = function(t, e, r, n) {
                if (!1 === n.allowIndefinite) throw new Error("CBOR decode error: indefinite length items not allowed");
                return new v(m.break, void 0, 1)
            };
            const Et = [];
            for (let lo = 0; lo < 24; lo++) Et[lo] = new v(m.uint, lo, 1);
            for (let lo = -1; lo >= -24; lo--) Et[31 - lo] = new v(m.negint, lo, 1);
            Et[64] = new v(m.bytes, new Uint8Array(0), 1), Et[96] = new v(m.string, "", 1), Et[128] = new v(m.array, 0, 1), Et[160] = new v(m.map, 0, 1), Et[244] = new v(m.false, !1, 1), Et[245] = new v(m.true, !0, 1), Et[246] = new v(m.null, null, 1);
            const kt = {
                float64: !1,
                mapSorter: function(t, e) {
                    const r = Array.isArray(t[0]) ? t[0][0] : t[0],
                        n = Array.isArray(e[0]) ? e[0][0] : e[0];
                    if (r.type !== n.type) return r.type.compare(n.type);
                    const o = r.type.major,
                        i = At[o].compareTokens(r, n);
                    0 === i && console.warn("WARNING: complex key types used, CBOR key sorting guarantees are gone");
                    return i
                },
                quickEncodeToken: function(t) {
                    switch (t.type) {
                        case m.false:
                            return S([244]);
                        case m.true:
                            return S([245]);
                        case m.null:
                            return S([246]);
                        case m.bytes:
                            return t.value.length ? void 0 : S([64]);
                        case m.string:
                            return "" === t.value ? S([96]) : void 0;
                        case m.array:
                            return 0 === t.value ? S([128]) : void 0;
                        case m.map:
                            return 0 === t.value ? S([160]) : void 0;
                        case m.uint:
                            return t.value < 24 ? S([Number(t.value)]) : void 0;
                        case m.negint:
                            if (t.value >= -24) return S([31 - Number(t.value)])
                    }
                }
            };
            const At = function() {
                    const t = [];
                    return t[m.uint.major] = H, t[m.negint.major] = W, t[m.bytes.major] = Y, t[m.string.major] = tt, t[m.array.major] = nt, t[m.map.major] = st, t[m.tag.major] = ut, t[m.float.major] = ft, t
                }(),
                Bt = new L;
            class xt {
                constructor(t, e) {
                    this.obj = t, this.parent = e
                }
                includes(t) {
                    let e = this;
                    do {
                        if (e.obj === t) return !0
                    } while (e = e.parent);
                    return !1
                }
                static createCheck(t, e) {
                    if (t && t.includes(e)) throw new Error("CBOR encode error: object contains circular references");
                    return new xt(e, t)
                }
            }
            const Tt = {
                    null: new v(m.null, null),
                    undefined: new v(m.undefined, void 0),
                    true: new v(m.true, !0),
                    false: new v(m.false, !1),
                    emptyArray: new v(m.array, 0),
                    emptyMap: new v(m.map, 0)
                },
                St = {
                    number: (t, e, r, n) => Number.isInteger(t) && Number.isSafeInteger(t) ? new v(t >= 0 ? m.uint : m.negint, t) : new v(m.float, t),
                    bigint: (t, e, r, n) => t >= BigInt(0) ? new v(m.uint, t) : new v(m.negint, t),
                    Uint8Array: (t, e, r, n) => new v(m.bytes, t),
                    string: (t, e, r, n) => new v(m.string, t),
                    boolean: (t, e, r, n) => t ? Tt.true : Tt.false,
                    null: (t, e, r, n) => Tt.null,
                    undefined: (t, e, r, n) => Tt.undefined,
                    ArrayBuffer: (t, e, r, n) => new v(m.bytes, new Uint8Array(t)),
                    DataView: (t, e, r, n) => new v(m.bytes, new Uint8Array(t.buffer, t.byteOffset, t.byteLength)),
                    Array(t, e, r, n) {
                        if (!t.length) return !0 === r.addBreakTokens ? [Tt.emptyArray, new v(m.break)] : Tt.emptyArray;
                        n = xt.createCheck(n, t);
                        const o = [];
                        let i = 0;
                        for (const s of t) o[i++] = It(s, r, n);
                        return r.addBreakTokens ? [new v(m.array, t.length), o, new v(m.break)] : [new v(m.array, t.length), o]
                    },
                    Object(t, e, r, n) {
                        const o = "Object" !== e,
                            i = o ? t.keys() : Object.keys(t),
                            s = o ? t.size : i.length;
                        if (!s) return !0 === r.addBreakTokens ? [Tt.emptyMap, new v(m.break)] : Tt.emptyMap;
                        n = xt.createCheck(n, t);
                        const a = [];
                        let u = 0;
                        for (const c of i) a[u++] = [It(c, r, n), It(o ? t.get(c) : t[c], r, n)];
                        return function(t, e) {
                            e.mapSorter && t.sort(e.mapSorter)
                        }(a, r), r.addBreakTokens ? [new v(m.map, s), a, new v(m.break)] : [new v(m.map, s), a]
                    }
                };
            St.Map = St.Object, St.Buffer = St.Uint8Array;
            for (const lo of "Uint8Clamped Uint16 Uint32 Int8 Int16 Int32 BigUint64 BigInt64 Float32 Float64".split(" ")) St[`${lo}Array`] = St.DataView;

            function It(t, e = {}, r) {
                const n = b(t),
                    o = e && e.typeEncoders && e.typeEncoders[n] || St[n];
                if ("function" === typeof o) {
                    const i = o(t, n, e, r);
                    if (null != i) return i
                }
                const i = St[n];
                if (!i) throw new Error(`CBOR encode error: unsupported type: ${n}`);
                return i(t, n, e, r)
            }

            function Ct(t, e, r, n) {
                if (Array.isArray(e))
                    for (const o of e) Ct(t, o, r, n);
                else r[e.type.major](t, e, n)
            }

            function Nt(t, e, r) {
                const n = It(t, r);
                if (!Array.isArray(n) && r.quickEncodeToken) {
                    const t = r.quickEncodeToken(n);
                    if (t) return t;
                    const o = e[n.type.major];
                    if (o.encodedSize) {
                        const t = o.encodedSize(n, r),
                            e = new L(t);
                        if (o(e, n, r), 1 !== e.chunks.length) throw new Error(`Unexpected error: pre-calculated length for ${n} was wrong`);
                        return B(e.chunks[0])
                    }
                }
                return Bt.reset(), Ct(Bt, n, e, r), Bt.toBytes(!0)
            }

            function Ut(t, e) {
                return e = Object.assign({}, kt, e), Nt(t, At, e)
            }
            const Ot = {
                strict: !1,
                allowIndefinite: !0,
                allowUndefined: !0,
                allowBigInt: !0
            };
            class Dt {
                constructor(t, e = {}) {
                    this.pos = 0, this.data = t, this.options = e
                }
                done() {
                    return this.pos >= this.data.length
                }
                next() {
                    const t = this.data[this.pos];
                    let e = Et[t];
                    if (void 0 === e) {
                        const r = _t[t];
                        if (!r) throw new Error(`CBOR decode error: no decoder for major type ${t>>>5} (byte 0x${t.toString(16).padStart(2,"0")})`);
                        const n = 31 & t;
                        e = r(this.data, this.pos, n, this.options)
                    }
                    return this.pos += e.encodedLength, e
                }
            }
            const Lt = Symbol.for("DONE"),
                Rt = Symbol.for("BREAK");

            function zt(t, e) {
                if (t.done()) return Lt;
                const r = t.next();
                if (r.type === m.break) return Rt;
                if (r.type.terminal) return r.value;
                if (r.type === m.array) return function(t, e, r) {
                    const n = [];
                    for (let o = 0; o < t.value; o++) {
                        const i = zt(e, r);
                        if (i === Rt) {
                            if (t.value === 1 / 0) break;
                            throw new Error("CBOR decode error: got unexpected break to lengthed array")
                        }
                        if (i === Lt) throw new Error(`CBOR decode error: found array but not enough entries (got ${o}, expected ${t.value})`);
                        n[o] = i
                    }
                    return n
                }(r, t, e);
                if (r.type === m.map) return function(t, e, r) {
                    const n = !0 === r.useMaps,
                        o = n ? void 0 : {},
                        i = n ? new Map : void 0;
                    for (let s = 0; s < t.value; s++) {
                        const a = zt(e, r);
                        if (a === Rt) {
                            if (t.value === 1 / 0) break;
                            throw new Error("CBOR decode error: got unexpected break to lengthed map")
                        }
                        if (a === Lt) throw new Error(`CBOR decode error: found map but not enough entries (got ${s} [no key], expected ${t.value})`);
                        if (!0 !== n && "string" !== typeof a) throw new Error(`CBOR decode error: non-string keys not supported (got ${typeof a})`);
                        const u = zt(e, r);
                        if (u === Lt) throw new Error(`CBOR decode error: found map but not enough entries (got ${s} [no value], expected ${t.value})`);
                        n ? i.set(a, u) : o[a] = u
                    }
                    return n ? i : o
                }(r, t, e);
                if (r.type === m.tag) {
                    if (e.tags && "function" === typeof e.tags[r.value]) {
                        const n = zt(t, e);
                        return e.tags[r.value](n)
                    }
                    throw new Error(`CBOR decode error: tag not supported (${r.value})`)
                }
                throw new Error("unsupported")
            }

            function Pt(t, e) {
                if (!(t instanceof Uint8Array)) throw new Error("CBOR decode error: data to decode must be a Uint8Array");
                const r = (e = Object.assign({}, Ot, e)).tokenizer || new Dt(t, e),
                    n = zt(r, e);
                if (n === Lt) throw new Error("CBOR decode error: did not find any content to decode");
                if (n === Rt) throw new Error("CBOR decode error: got unexpected break");
                if (!r.done()) throw new Error("CBOR decode error: too many terminals, data makes no sense");
                return n
            }
            const jt = {
                float64: !0,
                typeEncoders: {
                    Object: function(t) {
                        if (t.asCID !== t) return null;
                        const e = p.k.asCID(t);
                        if (!e) return null;
                        const r = new Uint8Array(e.bytes.byteLength + 1);
                        return r.set(e.bytes, 1), [new v(m.tag, 42), new v(m.bytes, r)]
                    },
                    undefined: function() {
                        throw new Error("`undefined` is not supported by the IPLD Data Model and cannot be encoded")
                    },
                    number: function(t) {
                        if (Number.isNaN(t)) throw new Error("`NaN` is not supported by the IPLD Data Model and cannot be encoded");
                        if (t === 1 / 0 || t === -1 / 0) throw new Error("`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded");
                        return null
                    }
                }
            };
            const Mt = {
                allowIndefinite: !1,
                coerceUndefinedToNull: !0,
                allowNaN: !1,
                allowInfinity: !1,
                allowBigInt: !0,
                strict: !0,
                useMaps: !1,
                tags: []
            };
            Mt.tags[42] = function(t) {
                if (0 !== t[0]) throw new Error("Invalid CID for CBOR tag 42; expected leading 0x00");
                return p.k.decode(t.subarray(1))
            };
            const Ft = t => Pt(t, Mt),
                $t = 18,
                Ht = 32,
                Vt = 112;
            async function Gt(t) {
                const e = await t.upTo(8),
                    r = d.decode(e);
                return t.seek(d.decode.bytes), r
            }
            async function qt(t) {
                const e = await Gt(t);
                if (0 === e) throw new Error("Invalid CAR header (zero length)");
                const r = await t.exactly(e);
                t.seek(e);
                const n = Ft(r);
                if (null == n || Array.isArray(n) || "object" !== typeof n) throw new Error("Invalid CAR header format");
                if (1 !== n.version) {
                    if ("string" === typeof n.version) throw new Error(`Invalid CAR version: "${n.version}"`);
                    throw new Error(`Invalid CAR version: ${n.version}`)
                }
                if (!Array.isArray(n.roots)) throw new Error("Invalid CAR header format");
                if (Object.keys(n).filter((t => "roots" !== t && "version" !== t)).length) throw new Error("Invalid CAR header format");
                return n
            }
            async function Wt(t) {
                const e = await t.exactly(2);
                if (e[0] === $t && e[1] === Ht) {
                    const e = await t.exactly(34);
                    t.seek(34);
                    const r = y.Jx(e);
                    return p.k.create(0, Vt, r)
                }
                const r = await Gt(t);
                if (1 !== r) throw new Error(`Unexpected CID version (${r})`);
                const n = await Gt(t),
                    o = await async function(t) {
                        const e = await t.upTo(8);
                        d.decode(e);
                        const r = d.decode.bytes,
                            n = d.decode(e.subarray(d.decode.bytes)),
                            o = r + d.decode.bytes + n,
                            i = await t.exactly(o);
                        return t.seek(o), i
                    }(t),
                    i = y.Jx(o);
                return p.k.create(r, n, i)
            }
            async function Jt(t) {
                const e = t.pos;
                let r = await Gt(t);
                if (0 === r) throw new Error("Invalid CAR section (zero length)");
                r += t.pos - e;
                return {
                    cid: await Wt(t),
                    length: r,
                    blockLength: r - (t.pos - e)
                }
            }
            async function Xt(t) {
                const {
                    cid: e,
                    blockLength: r
                } = await Jt(t), n = await t.exactly(r);
                return t.seek(r), {
                    bytes: n,
                    cid: e
                }
            }
            async function Kt(t) {
                const e = t.pos,
                    {
                        cid: r,
                        length: n,
                        blockLength: o
                    } = await Jt(t),
                    i = {
                        cid: r,
                        length: n,
                        blockLength: o,
                        offset: e,
                        blockOffset: t.pos
                    };
                return t.seek(i.blockLength), i
            }

            function Yt(t) {
                const e = qt(t);
                return {
                    header: () => e,
                    async * blocks() {
                        for (await e;
                            (await t.upTo(8)).length > 0;) yield await Xt(t)
                    },
                    async * blocksIndex() {
                        for (await e;
                            (await t.upTo(8)).length > 0;) yield await Kt(t)
                    }
                }
            }

            function Zt(t) {
                let e = 0;
                return {
                    upTo: async r => t.subarray(e, e + Math.min(r, t.length - e)),
                    async exactly(r) {
                        if (r > t.length - e) throw new Error("Unexpected end of data");
                        return t.subarray(e, e + r)
                    },
                    seek(t) {
                        e += t
                    },
                    get pos() {
                        return e
                    }
                }
            }

            function Qt(t) {
                const e = t[Symbol.asyncIterator]();
                return function(t) {
                    let e = 0,
                        r = 0,
                        n = 0,
                        o = new Uint8Array(0);
                    const i = async e => {
                        r = o.length - n;
                        const i = [o.subarray(n)];
                        for (; r < e;) {
                            const e = await t();
                            if (null == e) break;
                            r < 0 ? e.length > r && i.push(e.subarray(-r)) : i.push(e), r += e.length
                        }
                        o = new Uint8Array(i.reduce(((t, e) => t + e.length), 0));
                        let s = 0;
                        for (const t of i) o.set(t, s), s += t.length;
                        n = 0
                    };
                    return {
                        upTo: async t => (o.length - n < t && await i(t), o.subarray(n, n + Math.min(o.length - n, t))),
                        async exactly(t) {
                            if (o.length - n < t && await i(t), o.length - n < t) throw new Error("Unexpected end of data");
                            return o.subarray(n, n + t)
                        },
                        seek(t) {
                            e += t, n += t
                        },
                        get pos() {
                            return e
                        }
                    }
                }((async function() {
                    const t = await e.next();
                    return t.done ? null : t.value
                }))
            }
            class te {
                constructor(t, e, r) {
                    this._version = t, this._roots = e, this._blocks = r, this._keys = r.map((t => t.cid.toString()))
                }
                get version() {
                    return this._version
                }
                async getRoots() {
                    return this._roots
                }
                async has(t) {
                    return this._keys.indexOf(t.toString()) > -1
                }
                async get(t) {
                    const e = this._keys.indexOf(t.toString());
                    return e > -1 ? this._blocks[e] : void 0
                }
                async * blocks() {
                    for (const t of this._blocks) yield t
                }
                async * cids() {
                    for (const t of this._blocks) yield t.cid
                }
                static async fromBytes(t) {
                    if (!(t instanceof Uint8Array)) throw new TypeError("fromBytes() requires a Uint8Array");
                    return ee(Zt(t))
                }
                static async fromIterable(t) {
                    if (!t || "function" !== typeof t[Symbol.asyncIterator]) throw new TypeError("fromIterable() requires an async iterable");
                    return ee(Qt(t))
                }
            }
            async function ee(t) {
                const e = Yt(t),
                    {
                        version: r,
                        roots: n
                    } = await e.header(),
                    o = [];
                for await (const i of e.blocks()) o.push(i);
                return new te(r, n, o)
            }
            Symbol.asyncIterator;
            class re {
                constructor(t, e, r) {
                    this._version = t, this._roots = e, this._iterable = r, this._decoded = !1
                }
                get version() {
                    return this._version
                }
                async getRoots() {
                    return this._roots
                }
            }
            class ne extends re {
                [Symbol.asyncIterator]() {
                    if (this._decoded) throw new Error("Cannot decode more than once");
                    if (!this._iterable) throw new Error("Block iterable not found");
                    return this._decoded = !0, this._iterable[Symbol.asyncIterator]()
                }
                static async fromBytes(t) {
                    const {
                        version: e,
                        roots: r,
                        iterator: n
                    } = await oe(t);
                    return new ne(e, r, n)
                }
                static async fromIterable(t) {
                    const {
                        version: e,
                        roots: r,
                        iterator: n
                    } = await ie(t);
                    return new ne(e, r, n)
                }
            }
            Symbol.asyncIterator;
            async function oe(t) {
                if (!(t instanceof Uint8Array)) throw new TypeError("fromBytes() requires a Uint8Array");
                return se(Zt(t))
            }
            async function ie(t) {
                if (!t || "function" !== typeof t[Symbol.asyncIterator]) throw new TypeError("fromIterable() requires an async iterable");
                return se(Qt(t))
            }
            async function se(t) {
                const e = Yt(t),
                    {
                        version: r,
                        roots: n
                    } = await e.header();
                return {
                    version: r,
                    roots: n,
                    iterator: e.blocks()
                }
            }

            function ae(t) {
                const e = Ut({
                    version: 1,
                    roots: t
                }, jt);
                const r = d.encode(e.length),
                    n = new Uint8Array(r.length + e.length);
                return n.set(r, 0), n.set(e, r.length), n
            }

            function ue() {}
            class ce {
                constructor(t, e) {
                    this._encoder = e, this._mutex = e.setRoots(t), this._ended = !1
                }
                async put(t) {
                    if (!(t.bytes instanceof Uint8Array) || !t.cid) throw new TypeError("Can only write {cid, bytes} objects");
                    if (this._ended) throw new Error("Already closed");
                    const e = p.k.asCID(t.cid);
                    if (!e) throw new TypeError("Can only write {cid, bytes} objects");
                    return this._mutex = this._mutex.then((() => this._encoder.writeBlock({
                        cid: e,
                        bytes: t.bytes
                    }))), this._mutex
                }
                async close() {
                    if (this._ended) throw new Error("Already closed");
                    return await this._mutex, this._ended = !0, this._encoder.close()
                }
                static create(t) {
                    t = function(t) {
                        if (void 0 === t) return [];
                        if (!Array.isArray(t)) {
                            const e = p.k.asCID(t);
                            if (!e) throw new TypeError("roots must be a single CID or an array of CIDs");
                            return [e]
                        }
                        const e = [];
                        for (const r of t) {
                            const t = p.k.asCID(r);
                            if (!t) throw new TypeError("roots must be a single CID or an array of CIDs");
                            e.push(t)
                        }
                        return e
                    }(t);
                    const {
                        encoder: e,
                        iterator: r
                    } = he();
                    return {
                        writer: new ce(t, e),
                        out: new fe(r)
                    }
                }
                static createAppender() {
                    const {
                        encoder: t,
                        iterator: e
                    } = he();
                    t.setRoots = () => Promise.resolve();
                    return {
                        writer: new ce([], t),
                        out: new fe(e)
                    }
                }
                static async updateRootsInBytes(t, e) {
                    const r = Zt(t);
                    await qt(r);
                    const n = ae(e);
                    if (r.pos !== n.length) throw new Error(`updateRoots() can only overwrite a header of the same length (old header is ${r.pos} bytes, new header is ${n.length} bytes)`);
                    return t.set(n, 0), t
                }
            }
            class fe {
                constructor(t) {
                    this._iterator = t
                }[Symbol.asyncIterator]() {
                    if (this._iterating) throw new Error("Multiple iterator not supported");
                    return this._iterating = !0, this._iterator
                }
            }

            function he() {
                const t = function() {
                        const t = [];
                        let e = null,
                            r = ue,
                            n = !1,
                            o = null,
                            i = ue;
                        const s = () => (e || (e = new Promise((t => {
                                r = () => {
                                    e = null, r = ue, t()
                                }
                            }))), e),
                            a = {
                                write(e) {
                                    t.push(e);
                                    const r = s();
                                    return i(), r
                                },
                                async end() {
                                    n = !0;
                                    const t = s();
                                    return i(), t
                                }
                            },
                            u = {
                                async next() {
                                    const e = t.shift();
                                    return e ? (0 === t.length && r(), {
                                        done: !1,
                                        value: e
                                    }) : n ? (r(), {
                                        done: !0,
                                        value: void 0
                                    }) : (o || (o = new Promise((t => {
                                        i = () => (o = null, i = ue, t(u.next()))
                                    }))), o)
                                }
                            };
                        return {
                            writer: a,
                            iterator: u
                        }
                    }(),
                    {
                        writer: e,
                        iterator: r
                    } = t,
                    n = function(t) {
                        return {
                            async setRoots(e) {
                                const r = ae(e);
                                await t.write(r)
                            },
                            async writeBlock(e) {
                                const {
                                    cid: r,
                                    bytes: n
                                } = e;
                                await t.write(new Uint8Array(d.encode(r.bytes.length + n.length))), await t.write(r.bytes), n.length && await t.write(n)
                            },
                            close: async () => t.end()
                        }
                    }(e);
                return {
                    encoder: n,
                    iterator: r
                }
            }
            var le = r(84810),
                de = r(70942),
                pe = r(56155),
                ye = r(7225),
                ge = r(87232),
                we = r(40469);
            (0, ye.D)({
                name: "murmur3-32",
                code: 35,
                encode: t => function(t) {
                    const e = new Array(4);
                    for (let r = 0; r < 4; r++) e[r] = 255 & t, t >>= 8;
                    return new Uint8Array(e)
                }(we.x86.hash32(t))
            });
            const be = (0, ye.D)({
                name: "murmur3-128",
                code: 34,
                encode: t => ge.aI.fromHex(we.x64.hash128(t))
            });
            const me = {
                chunker: "fixed",
                strategy: "balanced",
                rawLeaves: !1,
                onlyHash: !1,
                reduceSingleLeafToSelf: !0,
                hasher: pe.sha256,
                leafType: "file",
                cidVersion: 0,
                progress: () => () => {},
                shardSplitThreshold: 1e3,
                fileImportConcurrency: 50,
                blockWriteConcurrency: 10,
                minChunkSize: 262144,
                maxChunkSize: 262144,
                avgChunkSize: 262144,
                window: 16,
                polynomial: 0x3df305dfb2a804,
                maxChildrenPerNode: 174,
                layerRepeat: 4,
                wrapWithDirectory: !1,
                recursive: !1,
                hidden: !1,
                timeout: void 0,
                hamtHashFn: async function(t) {
                    return (await be.encode(t)).slice(0, 8).reverse()
                },
                hamtHashCode: 34,
                hamtBucketBits: 8
            };
            var ve = r(32114),
                _e = r(62100);
            const Ee = _e.Reader,
                ke = _e.Writer,
                Ae = _e.util,
                Be = _e.roots["ipfs-unixfs"] || (_e.roots["ipfs-unixfs"] = {}),
                xe = Be.Data = (() => {
                    function t(t) {
                        if (this.blocksizes = [], t)
                            for (var e = Object.keys(t), r = 0; r < e.length; ++r) null != t[e[r]] && (this[e[r]] = t[e[r]])
                    }
                    return t.prototype.Type = 0, t.prototype.Data = Ae.newBuffer([]), t.prototype.filesize = Ae.Long ? Ae.Long.fromBits(0, 0, !0) : 0, t.prototype.blocksizes = Ae.emptyArray, t.prototype.hashType = Ae.Long ? Ae.Long.fromBits(0, 0, !0) : 0, t.prototype.fanout = Ae.Long ? Ae.Long.fromBits(0, 0, !0) : 0, t.prototype.mode = 0, t.prototype.mtime = null, t.encode = function(t, e) {
                        if (e || (e = ke.create()), e.uint32(8).int32(t.Type), null != t.Data && Object.hasOwnProperty.call(t, "Data") && e.uint32(18).bytes(t.Data), null != t.filesize && Object.hasOwnProperty.call(t, "filesize") && e.uint32(24).uint64(t.filesize), null != t.blocksizes && t.blocksizes.length)
                            for (var r = 0; r < t.blocksizes.length; ++r) e.uint32(32).uint64(t.blocksizes[r]);
                        return null != t.hashType && Object.hasOwnProperty.call(t, "hashType") && e.uint32(40).uint64(t.hashType), null != t.fanout && Object.hasOwnProperty.call(t, "fanout") && e.uint32(48).uint64(t.fanout), null != t.mode && Object.hasOwnProperty.call(t, "mode") && e.uint32(56).uint32(t.mode), null != t.mtime && Object.hasOwnProperty.call(t, "mtime") && Be.UnixTime.encode(t.mtime, e.uint32(66).fork()).ldelim(), e
                    }, t.decode = function(t, e) {
                        t instanceof Ee || (t = Ee.create(t));
                        for (var r = void 0 === e ? t.len : t.pos + e, n = new Be.Data; t.pos < r;) {
                            var o = t.uint32();
                            switch (o >>> 3) {
                                case 1:
                                    n.Type = t.int32();
                                    break;
                                case 2:
                                    n.Data = t.bytes();
                                    break;
                                case 3:
                                    n.filesize = t.uint64();
                                    break;
                                case 4:
                                    if (n.blocksizes && n.blocksizes.length || (n.blocksizes = []), 2 === (7 & o))
                                        for (var i = t.uint32() + t.pos; t.pos < i;) n.blocksizes.push(t.uint64());
                                    else n.blocksizes.push(t.uint64());
                                    break;
                                case 5:
                                    n.hashType = t.uint64();
                                    break;
                                case 6:
                                    n.fanout = t.uint64();
                                    break;
                                case 7:
                                    n.mode = t.uint32();
                                    break;
                                case 8:
                                    n.mtime = Be.UnixTime.decode(t, t.uint32());
                                    break;
                                default:
                                    t.skipType(7 & o)
                            }
                        }
                        if (!n.hasOwnProperty("Type")) throw Ae.ProtocolError("missing required 'Type'", {
                            instance: n
                        });
                        return n
                    }, t.fromObject = function(t) {
                        if (t instanceof Be.Data) return t;
                        var e = new Be.Data;
                        switch (t.Type) {
                            case "Raw":
                            case 0:
                                e.Type = 0;
                                break;
                            case "Directory":
                            case 1:
                                e.Type = 1;
                                break;
                            case "File":
                            case 2:
                                e.Type = 2;
                                break;
                            case "Metadata":
                            case 3:
                                e.Type = 3;
                                break;
                            case "Symlink":
                            case 4:
                                e.Type = 4;
                                break;
                            case "HAMTShard":
                            case 5:
                                e.Type = 5
                        }
                        if (null != t.Data && ("string" === typeof t.Data ? Ae.base64.decode(t.Data, e.Data = Ae.newBuffer(Ae.base64.length(t.Data)), 0) : t.Data.length && (e.Data = t.Data)), null != t.filesize && (Ae.Long ? (e.filesize = Ae.Long.fromValue(t.filesize)).unsigned = !0 : "string" === typeof t.filesize ? e.filesize = parseInt(t.filesize, 10) : "number" === typeof t.filesize ? e.filesize = t.filesize : "object" === typeof t.filesize && (e.filesize = new Ae.LongBits(t.filesize.low >>> 0, t.filesize.high >>> 0).toNumber(!0))), t.blocksizes) {
                            if (!Array.isArray(t.blocksizes)) throw TypeError(".Data.blocksizes: array expected");
                            e.blocksizes = [];
                            for (var r = 0; r < t.blocksizes.length; ++r) Ae.Long ? (e.blocksizes[r] = Ae.Long.fromValue(t.blocksizes[r])).unsigned = !0 : "string" === typeof t.blocksizes[r] ? e.blocksizes[r] = parseInt(t.blocksizes[r], 10) : "number" === typeof t.blocksizes[r] ? e.blocksizes[r] = t.blocksizes[r] : "object" === typeof t.blocksizes[r] && (e.blocksizes[r] = new Ae.LongBits(t.blocksizes[r].low >>> 0, t.blocksizes[r].high >>> 0).toNumber(!0))
                        }
                        if (null != t.hashType && (Ae.Long ? (e.hashType = Ae.Long.fromValue(t.hashType)).unsigned = !0 : "string" === typeof t.hashType ? e.hashType = parseInt(t.hashType, 10) : "number" === typeof t.hashType ? e.hashType = t.hashType : "object" === typeof t.hashType && (e.hashType = new Ae.LongBits(t.hashType.low >>> 0, t.hashType.high >>> 0).toNumber(!0))), null != t.fanout && (Ae.Long ? (e.fanout = Ae.Long.fromValue(t.fanout)).unsigned = !0 : "string" === typeof t.fanout ? e.fanout = parseInt(t.fanout, 10) : "number" === typeof t.fanout ? e.fanout = t.fanout : "object" === typeof t.fanout && (e.fanout = new Ae.LongBits(t.fanout.low >>> 0, t.fanout.high >>> 0).toNumber(!0))), null != t.mode && (e.mode = t.mode >>> 0), null != t.mtime) {
                            if ("object" !== typeof t.mtime) throw TypeError(".Data.mtime: object expected");
                            e.mtime = Be.UnixTime.fromObject(t.mtime)
                        }
                        return e
                    }, t.toObject = function(t, e) {
                        e || (e = {});
                        var r = {};
                        if ((e.arrays || e.defaults) && (r.blocksizes = []), e.defaults) {
                            if (r.Type = e.enums === String ? "Raw" : 0, e.bytes === String ? r.Data = "" : (r.Data = [], e.bytes !== Array && (r.Data = Ae.newBuffer(r.Data))), Ae.Long) {
                                var n = new Ae.Long(0, 0, !0);
                                r.filesize = e.longs === String ? n.toString() : e.longs === Number ? n.toNumber() : n
                            } else r.filesize = e.longs === String ? "0" : 0;
                            if (Ae.Long) {
                                n = new Ae.Long(0, 0, !0);
                                r.hashType = e.longs === String ? n.toString() : e.longs === Number ? n.toNumber() : n
                            } else r.hashType = e.longs === String ? "0" : 0;
                            if (Ae.Long) {
                                n = new Ae.Long(0, 0, !0);
                                r.fanout = e.longs === String ? n.toString() : e.longs === Number ? n.toNumber() : n
                            } else r.fanout = e.longs === String ? "0" : 0;
                            r.mode = 0, r.mtime = null
                        }
                        if (null != t.Type && t.hasOwnProperty("Type") && (r.Type = e.enums === String ? Be.Data.DataType[t.Type] : t.Type), null != t.Data && t.hasOwnProperty("Data") && (r.Data = e.bytes === String ? Ae.base64.encode(t.Data, 0, t.Data.length) : e.bytes === Array ? Array.prototype.slice.call(t.Data) : t.Data), null != t.filesize && t.hasOwnProperty("filesize") && ("number" === typeof t.filesize ? r.filesize = e.longs === String ? String(t.filesize) : t.filesize : r.filesize = e.longs === String ? Ae.Long.prototype.toString.call(t.filesize) : e.longs === Number ? new Ae.LongBits(t.filesize.low >>> 0, t.filesize.high >>> 0).toNumber(!0) : t.filesize), t.blocksizes && t.blocksizes.length) {
                            r.blocksizes = [];
                            for (var o = 0; o < t.blocksizes.length; ++o) "number" === typeof t.blocksizes[o] ? r.blocksizes[o] = e.longs === String ? String(t.blocksizes[o]) : t.blocksizes[o] : r.blocksizes[o] = e.longs === String ? Ae.Long.prototype.toString.call(t.blocksizes[o]) : e.longs === Number ? new Ae.LongBits(t.blocksizes[o].low >>> 0, t.blocksizes[o].high >>> 0).toNumber(!0) : t.blocksizes[o]
                        }
                        return null != t.hashType && t.hasOwnProperty("hashType") && ("number" === typeof t.hashType ? r.hashType = e.longs === String ? String(t.hashType) : t.hashType : r.hashType = e.longs === String ? Ae.Long.prototype.toString.call(t.hashType) : e.longs === Number ? new Ae.LongBits(t.hashType.low >>> 0, t.hashType.high >>> 0).toNumber(!0) : t.hashType), null != t.fanout && t.hasOwnProperty("fanout") && ("number" === typeof t.fanout ? r.fanout = e.longs === String ? String(t.fanout) : t.fanout : r.fanout = e.longs === String ? Ae.Long.prototype.toString.call(t.fanout) : e.longs === Number ? new Ae.LongBits(t.fanout.low >>> 0, t.fanout.high >>> 0).toNumber(!0) : t.fanout), null != t.mode && t.hasOwnProperty("mode") && (r.mode = t.mode), null != t.mtime && t.hasOwnProperty("mtime") && (r.mtime = Be.UnixTime.toObject(t.mtime, e)), r
                    }, t.prototype.toJSON = function() {
                        return this.constructor.toObject(this, _e.util.toJSONOptions)
                    }, t.DataType = function() {
                        const t = {},
                            e = Object.create(t);
                        return e[t[0] = "Raw"] = 0, e[t[1] = "Directory"] = 1, e[t[2] = "File"] = 2, e[t[3] = "Metadata"] = 3, e[t[4] = "Symlink"] = 4, e[t[5] = "HAMTShard"] = 5, e
                    }(), t
                })(),
                Te = (Be.UnixTime = (() => {
                    function t(t) {
                        if (t)
                            for (var e = Object.keys(t), r = 0; r < e.length; ++r) null != t[e[r]] && (this[e[r]] = t[e[r]])
                    }
                    return t.prototype.Seconds = Ae.Long ? Ae.Long.fromBits(0, 0, !1) : 0, t.prototype.FractionalNanoseconds = 0, t.encode = function(t, e) {
                        return e || (e = ke.create()), e.uint32(8).int64(t.Seconds), null != t.FractionalNanoseconds && Object.hasOwnProperty.call(t, "FractionalNanoseconds") && e.uint32(21).fixed32(t.FractionalNanoseconds), e
                    }, t.decode = function(t, e) {
                        t instanceof Ee || (t = Ee.create(t));
                        for (var r = void 0 === e ? t.len : t.pos + e, n = new Be.UnixTime; t.pos < r;) {
                            var o = t.uint32();
                            switch (o >>> 3) {
                                case 1:
                                    n.Seconds = t.int64();
                                    break;
                                case 2:
                                    n.FractionalNanoseconds = t.fixed32();
                                    break;
                                default:
                                    t.skipType(7 & o)
                            }
                        }
                        if (!n.hasOwnProperty("Seconds")) throw Ae.ProtocolError("missing required 'Seconds'", {
                            instance: n
                        });
                        return n
                    }, t.fromObject = function(t) {
                        if (t instanceof Be.UnixTime) return t;
                        var e = new Be.UnixTime;
                        return null != t.Seconds && (Ae.Long ? (e.Seconds = Ae.Long.fromValue(t.Seconds)).unsigned = !1 : "string" === typeof t.Seconds ? e.Seconds = parseInt(t.Seconds, 10) : "number" === typeof t.Seconds ? e.Seconds = t.Seconds : "object" === typeof t.Seconds && (e.Seconds = new Ae.LongBits(t.Seconds.low >>> 0, t.Seconds.high >>> 0).toNumber())), null != t.FractionalNanoseconds && (e.FractionalNanoseconds = t.FractionalNanoseconds >>> 0), e
                    }, t.toObject = function(t, e) {
                        e || (e = {});
                        var r = {};
                        if (e.defaults) {
                            if (Ae.Long) {
                                var n = new Ae.Long(0, 0, !1);
                                r.Seconds = e.longs === String ? n.toString() : e.longs === Number ? n.toNumber() : n
                            } else r.Seconds = e.longs === String ? "0" : 0;
                            r.FractionalNanoseconds = 0
                        }
                        return null != t.Seconds && t.hasOwnProperty("Seconds") && ("number" === typeof t.Seconds ? r.Seconds = e.longs === String ? String(t.Seconds) : t.Seconds : r.Seconds = e.longs === String ? Ae.Long.prototype.toString.call(t.Seconds) : e.longs === Number ? new Ae.LongBits(t.Seconds.low >>> 0, t.Seconds.high >>> 0).toNumber() : t.Seconds), null != t.FractionalNanoseconds && t.hasOwnProperty("FractionalNanoseconds") && (r.FractionalNanoseconds = t.FractionalNanoseconds), r
                    }, t.prototype.toJSON = function() {
                        return this.constructor.toObject(this, _e.util.toJSONOptions)
                    }, t
                })(), Be.Metadata = (() => {
                    function t(t) {
                        if (t)
                            for (var e = Object.keys(t), r = 0; r < e.length; ++r) null != t[e[r]] && (this[e[r]] = t[e[r]])
                    }
                    return t.prototype.MimeType = "", t.encode = function(t, e) {
                        return e || (e = ke.create()), null != t.MimeType && Object.hasOwnProperty.call(t, "MimeType") && e.uint32(10).string(t.MimeType), e
                    }, t.decode = function(t, e) {
                        t instanceof Ee || (t = Ee.create(t));
                        for (var r = void 0 === e ? t.len : t.pos + e, n = new Be.Metadata; t.pos < r;) {
                            var o = t.uint32();
                            if (o >>> 3 === 1) n.MimeType = t.string();
                            else t.skipType(7 & o)
                        }
                        return n
                    }, t.fromObject = function(t) {
                        if (t instanceof Be.Metadata) return t;
                        var e = new Be.Metadata;
                        return null != t.MimeType && (e.MimeType = String(t.MimeType)), e
                    }, t.toObject = function(t, e) {
                        e || (e = {});
                        var r = {};
                        return e.defaults && (r.MimeType = ""), null != t.MimeType && t.hasOwnProperty("MimeType") && (r.MimeType = t.MimeType), r
                    }, t.prototype.toJSON = function() {
                        return this.constructor.toObject(this, _e.util.toJSONOptions)
                    }, t
                })(), xe),
                Se = ["raw", "directory", "file", "metadata", "symlink", "hamt-sharded-directory"],
                Ie = ["directory", "hamt-sharded-directory"],
                Ce = parseInt("0644", 8),
                Ne = parseInt("0755", 8);

            function Ue(t) {
                if (null != t) return "number" === typeof t ? 4095 & t : "0" === (t = t.toString()).substring(0, 1) ? 4095 & parseInt(t, 8) : 4095 & parseInt(t, 10)
            }

            function Oe(t) {
                if (null == t) return;
                let e;
                if (null != t.secs && (e = {
                        secs: t.secs,
                        nsecs: t.nsecs
                    }), null != t.Seconds && (e = {
                        secs: t.Seconds,
                        nsecs: t.FractionalNanoseconds
                    }), Array.isArray(t) && (e = {
                        secs: t[0],
                        nsecs: t[1]
                    }), t instanceof Date) {
                    const r = t.getTime(),
                        n = Math.floor(r / 1e3);
                    e = {
                        secs: n,
                        nsecs: 1e3 * (r - 1e3 * n)
                    }
                }
                if (Object.prototype.hasOwnProperty.call(e, "secs")) {
                    if (null != e && null != e.nsecs && (e.nsecs < 0 || e.nsecs > 999999999)) throw ve(new Error("mtime-nsecs must be within the range [0,999999999]"), "ERR_INVALID_MTIME_NSECS");
                    return e
                }
            }
            class De {
                static unmarshal(t) {
                    const e = Te.decode(t),
                        r = Te.toObject(e, {
                            defaults: !1,
                            arrays: !0,
                            longs: Number,
                            objects: !1
                        }),
                        n = new De({
                            type: Se[r.Type],
                            data: r.Data,
                            blockSizes: r.blocksizes,
                            mode: r.mode,
                            mtime: r.mtime ? {
                                secs: r.mtime.Seconds,
                                nsecs: r.mtime.FractionalNanoseconds
                            } : void 0
                        });
                    return n._originalMode = r.mode || 0, n
                }
                constructor(t = {
                    type: "file"
                }) {
                    const {
                        type: e,
                        data: r,
                        blockSizes: n,
                        hashType: o,
                        fanout: i,
                        mtime: s,
                        mode: a
                    } = t;
                    if (e && !Se.includes(e)) throw ve(new Error("Type: " + e + " is not valid"), "ERR_INVALID_TYPE");
                    this.type = e || "file", this.data = r, this.hashType = o, this.fanout = i, this.blockSizes = n || [], this._originalMode = 0, this.mode = Ue(a), s && (this.mtime = Oe(s), this.mtime && !this.mtime.nsecs && (this.mtime.nsecs = 0))
                }
                set mode(t) {
                    this._mode = this.isDirectory() ? Ne : Ce;
                    const e = Ue(t);
                    void 0 !== e && (this._mode = e)
                }
                get mode() {
                    return this._mode
                }
                isDirectory() {
                    return Boolean(this.type && Ie.includes(this.type))
                }
                addBlockSize(t) {
                    this.blockSizes.push(t)
                }
                removeBlockSize(t) {
                    this.blockSizes.splice(t, 1)
                }
                fileSize() {
                    if (this.isDirectory()) return 0;
                    let t = 0;
                    return this.blockSizes.forEach((e => {
                        t += e
                    })), this.data && (t += this.data.length), t
                }
                marshal() {
                    let t;
                    switch (this.type) {
                        case "raw":
                            t = Te.DataType.Raw;
                            break;
                        case "directory":
                            t = Te.DataType.Directory;
                            break;
                        case "file":
                            t = Te.DataType.File;
                            break;
                        case "metadata":
                            t = Te.DataType.Metadata;
                            break;
                        case "symlink":
                            t = Te.DataType.Symlink;
                            break;
                        case "hamt-sharded-directory":
                            t = Te.DataType.HAMTShard;
                            break;
                        default:
                            throw ve(new Error("Type: " + t + " is not valid"), "ERR_INVALID_TYPE")
                    }
                    let e, r, n = this.data;
                    if (this.data && this.data.length || (n = void 0), null != this.mode && (e = 4294963200 & this._originalMode | (Ue(this.mode) || 0), e !== Ce || this.isDirectory() || (e = void 0), e === Ne && this.isDirectory() && (e = void 0)), null != this.mtime) {
                        const t = Oe(this.mtime);
                        t && (r = {
                            Seconds: t.secs,
                            FractionalNanoseconds: t.nsecs
                        }, 0 === r.FractionalNanoseconds && delete r.FractionalNanoseconds)
                    }
                    const o = {
                        Type: t,
                        Data: n,
                        filesize: this.isDirectory() ? void 0 : this.fileSize(),
                        blocksizes: this.blockSizes,
                        hashType: this.hashType,
                        fanout: this.fanout,
                        mode: e,
                        mtime: r
                    };
                    return Te.encode(o).finish()
                }
            }
            const Le = new TextDecoder;

            function Re(t, e) {
                let r = 0;
                for (let n = 0;; n += 7) {
                    if (n >= 64) throw new Error("protobuf: varint overflow");
                    if (e >= t.length) throw new Error("protobuf: unexpected end of data");
                    const o = t[e++];
                    if (r += n < 28 ? (127 & o) << n : (127 & o) * 2 ** n, o < 128) break
                }
                return [r, e]
            }

            function ze(t, e) {
                let r;
                [r, e] = Re(t, e);
                const n = e + r;
                if (r < 0 || n < 0) throw new Error("protobuf: invalid length");
                if (n > t.length) throw new Error("protobuf: unexpected end of data");
                return [t.subarray(e, n), n]
            }

            function Pe(t, e) {
                let r;
                return [r, e] = Re(t, e), [7 & r, r >> 3, e]
            }

            function je(t) {
                const e = {},
                    r = t.length;
                let n = 0;
                for (; n < r;) {
                    let r, o;
                    if ([r, o, n] = Pe(t, n), 1 === o) {
                        if (e.Hash) throw new Error("protobuf: (PBLink) duplicate Hash section");
                        if (2 !== r) throw new Error(`protobuf: (PBLink) wrong wireType (${r}) for Hash`);
                        if (void 0 !== e.Name) throw new Error("protobuf: (PBLink) invalid order, found Name before Hash");
                        if (void 0 !== e.Tsize) throw new Error("protobuf: (PBLink) invalid order, found Tsize before Hash");
                        [e.Hash, n] = ze(t, n)
                    } else if (2 === o) {
                        if (void 0 !== e.Name) throw new Error("protobuf: (PBLink) duplicate Name section");
                        if (2 !== r) throw new Error(`protobuf: (PBLink) wrong wireType (${r}) for Name`);
                        if (void 0 !== e.Tsize) throw new Error("protobuf: (PBLink) invalid order, found Tsize before Name");
                        let o;
                        [o, n] = ze(t, n), e.Name = Le.decode(o)
                    } else {
                        if (3 !== o) throw new Error(`protobuf: (PBLink) invalid fieldNumber, expected 1, 2 or 3, got ${o}`);
                        if (void 0 !== e.Tsize) throw new Error("protobuf: (PBLink) duplicate Tsize section");
                        if (0 !== r) throw new Error(`protobuf: (PBLink) wrong wireType (${r}) for Tsize`);
                        [e.Tsize, n] = Re(t, n)
                    }
                }
                if (n > r) throw new Error("protobuf: (PBLink) unexpected end of data");
                return e
            }
            const Me = new TextEncoder,
                Fe = 2 ** 32;

            function $e(t, e) {
                let r = e.length;
                if ("number" === typeof t.Tsize) {
                    if (t.Tsize < 0) throw new Error("Tsize cannot be negative");
                    if (!Number.isSafeInteger(t.Tsize)) throw new Error("Tsize too large for encoding");
                    r = Ge(e, r, t.Tsize) - 1, e[r] = 24
                }
                if ("string" === typeof t.Name) {
                    const n = Me.encode(t.Name);
                    r -= n.length, e.set(n, r), r = Ge(e, r, n.length) - 1, e[r] = 18
                }
                return t.Hash && (r -= t.Hash.length, e.set(t.Hash, r), r = Ge(e, r, t.Hash.length) - 1, e[r] = 10), e.length - r
            }

            function He(t) {
                const e = function(t) {
                        let e = 0;
                        if (t.Data) {
                            const r = t.Data.length;
                            e += 1 + r + qe(r)
                        }
                        if (t.Links)
                            for (const r of t.Links) {
                                const t = Ve(r);
                                e += 1 + t + qe(t)
                            }
                        return e
                    }(t),
                    r = new Uint8Array(e);
                let n = e;
                if (t.Data && (n -= t.Data.length, r.set(t.Data, n), n = Ge(r, n, t.Data.length) - 1, r[n] = 10), t.Links)
                    for (let o = t.Links.length - 1; o >= 0; o--) {
                        const e = $e(t.Links[o], r.subarray(0, n));
                        n -= e, n = Ge(r, n, e) - 1, r[n] = 18
                    }
                return r
            }

            function Ve(t) {
                let e = 0;
                if (t.Hash) {
                    const r = t.Hash.length;
                    e += 1 + r + qe(r)
                }
                if ("string" === typeof t.Name) {
                    const r = Me.encode(t.Name).length;
                    e += 1 + r + qe(r)
                }
                return "number" === typeof t.Tsize && (e += 1 + qe(t.Tsize)), e
            }

            function Ge(t, e, r) {
                const n = e -= qe(r);
                for (; r >= 2147483648;) t[e++] = 127 & r | 128, r /= 128;
                for (; r >= 128;) t[e++] = 127 & r | 128, r >>>= 7;
                return t[e] = r, n
            }

            function qe(t) {
                return t % 2 === 0 && t++, Math.floor((function(t) {
                    let e = 0;
                    t >= Fe && (t = Math.floor(t / Fe), e = 32);
                    t >= 65536 && (t >>>= 16, e += 16);
                    t >= 256 && (t >>>= 8, e += 8);
                    return e + We[t]
                }(t) + 6) / 7)
            }
            const We = [0, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
                Je = ["Data", "Links"],
                Xe = ["Hash", "Name", "Tsize"],
                Ke = new TextEncoder;

            function Ye(t, e) {
                if (t === e) return 0;
                const r = t.Name ? Ke.encode(t.Name) : [],
                    n = e.Name ? Ke.encode(e.Name) : [];
                let o = r.length,
                    i = n.length;
                for (let s = 0, a = Math.min(o, i); s < a; ++s)
                    if (r[s] !== n[s]) {
                        o = r[s], i = n[s];
                        break
                    }
                return o < i ? -1 : i < o ? 1 : 0
            }

            function Ze(t, e) {
                return !Object.keys(t).some((t => !e.includes(t)))
            }

            function Qe(t) {
                if ("object" === typeof t.asCID) {
                    const e = p.k.asCID(t);
                    if (!e) throw new TypeError("Invalid DAG-PB form");
                    return {
                        Hash: e
                    }
                }
                if ("object" !== typeof t || Array.isArray(t)) throw new TypeError("Invalid DAG-PB form");
                const e = {};
                if (t.Hash) {
                    let n = p.k.asCID(t.Hash);
                    try {
                        n || ("string" === typeof t.Hash ? n = p.k.parse(t.Hash) : t.Hash instanceof Uint8Array && (n = p.k.decode(t.Hash)))
                    } catch (r) {
                        throw new TypeError(`Invalid DAG-PB form: ${r.message}`)
                    }
                    n && (e.Hash = n)
                }
                if (!e.Hash) throw new TypeError("Invalid DAG-PB form");
                return "string" === typeof t.Name && (e.Name = t.Name), "number" === typeof t.Tsize && (e.Tsize = t.Tsize), e
            }

            function tr(t) {
                if ((t instanceof Uint8Array || "string" === typeof t) && (t = {
                        Data: t
                    }), "object" !== typeof t || Array.isArray(t)) throw new TypeError("Invalid DAG-PB form");
                const e = {};
                if (void 0 !== t.Data)
                    if ("string" === typeof t.Data) e.Data = Ke.encode(t.Data);
                    else {
                        if (!(t.Data instanceof Uint8Array)) throw new TypeError("Invalid DAG-PB form");
                        e.Data = t.Data
                    }
                if (void 0 !== t.Links) {
                    if (!Array.isArray(t.Links)) throw new TypeError("Invalid DAG-PB form");
                    e.Links = t.Links.map(Qe), e.Links.sort(Ye)
                } else e.Links = [];
                return e
            }

            function er(t) {
                if (!t || "object" !== typeof t || Array.isArray(t)) throw new TypeError("Invalid DAG-PB form");
                if (!Ze(t, Je)) throw new TypeError("Invalid DAG-PB form (extraneous properties)");
                if (void 0 !== t.Data && !(t.Data instanceof Uint8Array)) throw new TypeError("Invalid DAG-PB form (Data must be a Uint8Array)");
                if (!Array.isArray(t.Links)) throw new TypeError("Invalid DAG-PB form (Links must be an array)");
                for (let e = 0; e < t.Links.length; e++) {
                    const r = t.Links[e];
                    if (!r || "object" !== typeof r || Array.isArray(r)) throw new TypeError("Invalid DAG-PB form (bad link object)");
                    if (!Ze(r, Xe)) throw new TypeError("Invalid DAG-PB form (extraneous properties on link object)");
                    if (!r.Hash) throw new TypeError("Invalid DAG-PB form (link must have a Hash)");
                    if (r.Hash.asCID !== r.Hash) throw new TypeError("Invalid DAG-PB form (link Hash must be a CID)");
                    if (void 0 !== r.Name && "string" !== typeof r.Name) throw new TypeError("Invalid DAG-PB form (link Name must be a string)");
                    if (void 0 !== r.Tsize && ("number" !== typeof r.Tsize || r.Tsize % 1 !== 0)) throw new TypeError("Invalid DAG-PB form (link Tsize must be an integer)");
                    if (e > 0 && -1 === Ye(r, t.Links[e - 1])) throw new TypeError("Invalid DAG-PB form (links must be sorted by Name bytes)")
                }
            }

            function rr(t, e = []) {
                return tr({
                    Data: t,
                    Links: e
                })
            }

            function nr(t, e, r) {
                return Qe({
                    Hash: r,
                    Name: t,
                    Tsize: e
                })
            }
            const or = "dag-pb",
                ir = 112;

            function sr(t) {
                er(t);
                const e = {};
                return t.Links && (e.Links = t.Links.map((t => {
                    const e = {};
                    return t.Hash && (e.Hash = t.Hash.bytes), void 0 !== t.Name && (e.Name = t.Name), void 0 !== t.Tsize && (e.Tsize = t.Tsize), e
                }))), t.Data && (e.Data = t.Data), He(e)
            }

            function ar(t) {
                const e = function(t) {
                        const e = t.length;
                        let r, n, o = 0,
                            i = !1;
                        for (; o < e;) {
                            let e, s;
                            if ([e, s, o] = Pe(t, o), 2 !== e) throw new Error(`protobuf: (PBNode) invalid wireType, expected 2, got ${e}`);
                            if (1 === s) {
                                if (n) throw new Error("protobuf: (PBNode) duplicate Data section");
                                [n, o] = ze(t, o), r && (i = !0)
                            } else {
                                if (2 !== s) throw new Error(`protobuf: (PBNode) invalid fieldNumber, expected 1 or 2, got ${s}`); {
                                    if (i) throw new Error("protobuf: (PBNode) duplicate Links section");
                                    let e;
                                    r || (r = []), [e, o] = ze(t, o), r.push(je(e))
                                }
                            }
                        }
                        if (o > e) throw new Error("protobuf: (PBNode) unexpected end of data");
                        const s = {};
                        return n && (s.Data = n), s.Links = r || [], s
                    }(t),
                    r = {};
                return e.Data && (r.Data = e.Data), e.Links && (r.Links = e.Links.map((t => {
                    const e = {};
                    try {
                        e.Hash = p.k.decode(t.Hash)
                    } catch (r) {}
                    if (!e.Hash) throw new Error("Invalid Hash field found in link, expected CID");
                    return void 0 !== t.Name && (e.Name = t.Name), void 0 !== t.Tsize && (e.Tsize = t.Tsize), e
                }))), r
            }
            var ur = async (t, e, r) => {
                r.codec || (r.codec = n), r.hasher || (r.hasher = pe.sha256), void 0 === r.cidVersion && (r.cidVersion = 1), r.codec === n && r.hasher !== pe.sha256 && (r.cidVersion = 1);
                const o = await r.hasher.digest(t),
                    i = p.k.create(r.cidVersion, r.codec.code, o);
                return r.onlyHash || await e.put(i, t, {
                    signal: r.signal
                }), i
            };
            var cr = async (t, e, r) => {
                    const n = new De({
                            type: "directory",
                            mtime: t.mtime,
                            mode: t.mode
                        }),
                        o = sr(tr({
                            Data: n.marshal()
                        }));
                    return {
                        cid: await ur(o, e, r),
                        path: t.path,
                        unixfs: n,
                        size: o.length
                    }
                },
                fr = r(96945),
                hr = r(31303);
            var lr = async function(t, e) {
                    return e(await hr(t))
                },
                dr = r(78165);
            async function pr(t, e, r) {
                const n = [];
                for await (const o of dr(t, r.maxChildrenPerNode)) n.push(await e(o));
                return n.length > 1 ? pr(n, e, r) : n[0]
            }
            var yr = function(t, e, r) {
                return pr(t, e, r)
            };
            var gr = async function(t, e, r) {
                const n = new br(r.layerRepeat);
                let o = 0,
                    i = 1,
                    s = n;
                for await (const a of dr(t, r.maxChildrenPerNode)) s.isFull() && (s !== n && n.addChild(await s.reduce(e)), o && o % r.layerRepeat === 0 && i++, s = new wr(i, r.layerRepeat, o), o++), s.append(a);
                return s && s !== n && n.addChild(await s.reduce(e)), n.reduce(e)
            };
            class wr {
                constructor(t, e, r = 0) {
                    this.maxDepth = t, this.layerRepeat = e, this.currentDepth = 1, this.iteration = r, this.root = this.node = this.parent = {
                        children: [],
                        depth: this.currentDepth,
                        maxDepth: t,
                        maxChildren: (this.maxDepth - this.currentDepth) * this.layerRepeat
                    }
                }
                isFull() {
                    if (!this.root.data) return !1;
                    if (this.currentDepth < this.maxDepth && this.node.maxChildren) return this._addNextNodeToParent(this.node), !1;
                    const t = this._findParent(this.node, this.currentDepth);
                    return !t || (this._addNextNodeToParent(t), !1)
                }
                _addNextNodeToParent(t) {
                    this.parent = t;
                    const e = {
                        children: [],
                        depth: t.depth + 1,
                        parent: t,
                        maxDepth: this.maxDepth,
                        maxChildren: Math.floor(t.children.length / this.layerRepeat) * this.layerRepeat
                    };
                    t.children.push(e), this.currentDepth = e.depth, this.node = e
                }
                append(t) {
                    this.node.data = t
                }
                reduce(t) {
                    return this._reduce(this.root, t)
                }
                async _reduce(t, e) {
                    let r = [];
                    return t.children.length && (r = await Promise.all(t.children.filter((t => t.data)).map((t => this._reduce(t, e))))), e((t.data || []).concat(r))
                }
                _findParent(t, e) {
                    const r = t.parent;
                    if (r && 0 !== r.depth) return r.children.length !== r.maxChildren && r.maxChildren ? r : this._findParent(r, e)
                }
            }
            class br extends wr {
                constructor(t) {
                    super(0, t), this.root.depth = 0, this.currentDepth = 1
                }
                addChild(t) {
                    this.root.children.push(t)
                }
                reduce(t) {
                    return t((this.root.data || []).concat(this.root.children))
                }
            }
            var mr = async function*(t, e, r) {
                for await (let o of t.content) yield async () => {
                    let i;
                    r.progress(o.length, t.path);
                    const s = {
                        codec: n,
                        cidVersion: r.cidVersion,
                        hasher: r.hasher,
                        onlyHash: r.onlyHash
                    };
                    return r.rawLeaves ? (s.codec = fr, s.cidVersion = 1) : (i = new De({
                        type: r.leafType,
                        data: o
                    }), o = sr({
                        Data: i.marshal(),
                        Links: []
                    })), {
                        cid: await ur(o, e, s),
                        unixfs: i,
                        size: o.length
                    }
                }
            };
            const vr = {
                flat: lr,
                balanced: yr,
                trickle: gr
            };
            var _r = function(t, e, r) {
                    const o = vr[r.strategy];
                    if (!o) throw ve(new Error(`Unknown importer build strategy name: ${r.strategy}`), "ERR_BAD_STRATEGY");
                    return o(async function*(t, e, r) {
                        let n, o, i = -1;
                        o = "function" === typeof r.bufferImporter ? r.bufferImporter : mr;
                        for await (const s of le(o(t, e, r), r.blockWriteConcurrency)) i++, 0 !== i ? (1 === i && n && (yield n, n = null), yield s) : n = s;
                        n && (n.single = !0, yield n)
                    }(t, e, r), ((t, e, r) => async function(o) {
                        if (1 === o.length && o[0].single && r.reduceSingleLeafToSelf) {
                            const i = o[0];
                            if (void 0 !== t.mtime || void 0 !== t.mode) {
                                let o = await e.get(i.cid);
                                i.unixfs = new De({
                                    type: "file",
                                    mtime: t.mtime,
                                    mode: t.mode,
                                    data: o
                                }), o = sr(tr({
                                    Data: i.unixfs.marshal()
                                })), i.cid = await ur(o, e, { ...r,
                                    codec: n,
                                    hasher: r.hasher,
                                    cidVersion: r.cidVersion
                                }), i.size = o.length
                            }
                            return {
                                cid: i.cid,
                                path: t.path,
                                unixfs: i.unixfs,
                                size: i.size
                            }
                        }
                        const i = new De({
                                type: "file",
                                mtime: t.mtime,
                                mode: t.mode
                            }),
                            s = o.filter((t => !(t.cid.code !== fr.code || !t.size) || !(!t.unixfs || t.unixfs.data || !t.unixfs.fileSize()) || Boolean(t.unixfs && t.unixfs.data && t.unixfs.data.length))).map((t => t.cid.code === fr.code ? (i.addBlockSize(t.size), {
                                Name: "",
                                Tsize: t.size,
                                Hash: t.cid
                            }) : (t.unixfs && t.unixfs.data ? i.addBlockSize(t.unixfs.data.length) : i.addBlockSize(t.unixfs && t.unixfs.fileSize() || 0), {
                                Name: "",
                                Tsize: t.size,
                                Hash: t.cid
                            }))),
                            a = {
                                Data: i.marshal(),
                                Links: s
                            },
                            u = sr(tr(a));
                        return {
                            cid: await ur(u, e, r),
                            path: t.path,
                            unixfs: i,
                            size: u.length + a.Links.reduce(((t, e) => t + e.Tsize), 0)
                        }
                    })(t, e, r), r)
                },
                Er = r(9668),
                kr = r(63060);
            var Ar = async function*(t, e) {
                let r, n, o;
                if (e.minChunkSize && e.maxChunkSize && e.avgChunkSize) o = e.avgChunkSize, r = e.minChunkSize, n = e.maxChunkSize;
                else {
                    if (!e.avgChunkSize) throw ve(new Error("please specify an average chunk size"), "ERR_INVALID_AVG_CHUNK_SIZE");
                    o = e.avgChunkSize, r = o / 3, n = o + o / 2
                }
                if (r < 16) throw ve(new Error("rabin min must be greater than 16"), "ERR_INVALID_MIN_CHUNK_SIZE");
                n < r && (n = r), o < r && (o = r);
                const i = Math.floor(Math.log2(o));
                for await (const s of async function*(t, e) {
                    const r = await (0, kr.create)(e.bits, e.min, e.max, e.window),
                        n = new Er;
                    for await (const o of t) {
                        n.append(o);
                        const t = r.fingerprint(o);
                        for (let e = 0; e < t.length; e++) {
                            const r = t[e],
                                o = n.slice(0, r);
                            n.consume(r), yield o
                        }
                    }
                    n.length && (yield n.slice(0))
                }(t, {
                    min: r,
                    max: n,
                    bits: i,
                    window: e.window,
                    polynomial: e.polynomial
                })) yield s
            };
            var Br = async function*(t, e) {
                    let r = new Er,
                        n = 0,
                        o = !1;
                    const i = e.maxChunkSize;
                    for await (const s of t) for (r.append(s), n += s.length; n >= i;)
                        if (yield r.slice(0, i), o = !0, i === r.length) r = new Er, n = 0;
                        else {
                            const t = new Er;
                            t.append(r.shallowSlice(i)), r = t, n -= i
                        }
                    o && !n || (yield r.slice(0, n))
                },
                xr = r(41113);
            var Tr = async function*(t) {
                for await (const e of t) {
                    if (void 0 === e.length) throw ve(new Error("Content was invalid"), "ERR_INVALID_CONTENT");
                    if ("string" === typeof e || e instanceof String) yield(0, xr.fromString)(e.toString());
                    else if (Array.isArray(e)) yield Uint8Array.from(e);
                    else {
                        if (!(e instanceof Uint8Array)) throw ve(new Error("Content was invalid"), "ERR_INVALID_CONTENT");
                        yield e
                    }
                }
            };

            function Sr(t) {
                try {
                    if (t instanceof Uint8Array) return async function*() {
                        yield t
                    }();
                    if (e = t, Symbol.iterator in e) return async function*() {
                        yield* t
                    }();
                    if (function(t) {
                            return Symbol.asyncIterator in t
                        }(t)) return t
                } catch {
                    throw ve(new Error("Content was invalid"), "ERR_INVALID_CONTENT")
                }
                var e;
                throw ve(new Error("Content was invalid"), "ERR_INVALID_CONTENT")
            }
            var Ir = async function*(t, e, r) {
                for await (const n of t) if (n.path && ("./" === n.path.substring(0, 2) && (r.wrapWithDirectory = !0), n.path = n.path.split("/").filter((t => t && "." !== t)).join("/")), n.content) {
                    let t, o;
                    t = "function" === typeof r.chunker ? r.chunker : "rabin" === r.chunker ? Ar : Br, o = "function" === typeof r.chunkValidator ? r.chunkValidator : Tr;
                    const i = {
                        path: n.path,
                        mtime: n.mtime,
                        mode: n.mode,
                        content: t(o(Sr(n.content), r), r)
                    };
                    yield() => _r(i, e, r)
                } else {
                    if (!n.path) throw new Error("Import candidate must have content or path or both"); {
                        const t = {
                            path: n.path,
                            mtime: n.mtime,
                            mode: n.mode
                        };
                        yield() => cr(t, e, r)
                    }
                }
            };
            var Cr = class {
                constructor(t, e) {
                    this.options = e || {}, this.root = t.root, this.dir = t.dir, this.path = t.path, this.dirty = t.dirty, this.flat = t.flat, this.parent = t.parent, this.parentKey = t.parentKey, this.unixfs = t.unixfs, this.mode = t.mode, this.mtime = t.mtime, this.cid = void 0, this.size = void 0
                }
                async put(t, e) {}
                get(t) {
                    return Promise.resolve(this)
                }
                async * eachChildSeries() {}
                async * flush(t) {}
            };
            var Nr = class extends Cr {
                    constructor(t, e) {
                        super(t, e), this._children = {}
                    }
                    async put(t, e) {
                        this.cid = void 0, this.size = void 0, this._children[t] = e
                    }
                    get(t) {
                        return Promise.resolve(this._children[t])
                    }
                    childCount() {
                        return Object.keys(this._children).length
                    }
                    directChildrenCount() {
                        return this.childCount()
                    }
                    onlyChild() {
                        return this._children[Object.keys(this._children)[0]]
                    }
                    async * eachChildSeries() {
                        const t = Object.keys(this._children);
                        for (let e = 0; e < t.length; e++) {
                            const r = t[e];
                            yield {
                                key: r,
                                child: this._children[r]
                            }
                        }
                    }
                    async * flush(t) {
                        const e = Object.keys(this._children),
                            r = [];
                        for (let u = 0; u < e.length; u++) {
                            let n = this._children[e[u]];
                            if (n instanceof Cr)
                                for await (const e of n.flush(t)) n = e, yield n;
                            null != n.size && n.cid && r.push({
                                Name: e[u],
                                Tsize: n.size,
                                Hash: n.cid
                            })
                        }
                        const n = new De({
                                type: "directory",
                                mtime: this.mtime,
                                mode: this.mode
                            }),
                            o = {
                                Data: n.marshal(),
                                Links: r
                            },
                            i = sr(tr(o)),
                            s = await ur(i, t, this.options),
                            a = i.length + o.Links.reduce(((t, e) => t + (null == e.Tsize ? 0 : e.Tsize)), 0);
                        this.cid = s, this.size = a, yield {
                            cid: s,
                            unixfs: n,
                            path: this.path,
                            size: a
                        }
                    }
                },
                Ur = r(54563);
            var Or = class extends Cr {
                constructor(t, e) {
                    super(t, e), this._bucket = (0, Ur.createHAMT)({
                        hashFn: e.hamtHashFn,
                        bits: e.hamtBucketBits
                    })
                }
                async put(t, e) {
                    await this._bucket.put(t, e)
                }
                get(t) {
                    return this._bucket.get(t)
                }
                childCount() {
                    return this._bucket.leafCount()
                }
                directChildrenCount() {
                    return this._bucket.childrenCount()
                }
                onlyChild() {
                    return this._bucket.onlyChild()
                }
                async * eachChildSeries() {
                    for await (const {
                        key: t,
                        value: e
                    } of this._bucket.eachLeafSeries()) yield {
                        key: t,
                        child: e
                    }
                }
                async * flush(t) {
                    for await (const e of Dr(this._bucket, t, this, this.options)) yield { ...e,
                        path: this.path
                    }
                }
            };
            async function* Dr(t, e, r, n) {
                const o = t._children,
                    i = [];
                let s = 0;
                for (let l = 0; l < o.length; l++) {
                    const t = o.get(l);
                    if (!t) continue;
                    const r = l.toString(16).toUpperCase().padStart(2, "0");
                    if (t instanceof Ur.Bucket) {
                        let o;
                        for await (const r of await Dr(t, e, null, n)) o = r;
                        if (!o) throw new Error("Could not flush sharded directory, no subshard found");
                        i.push({
                            Name: r,
                            Tsize: o.size,
                            Hash: o.cid
                        }), s += o.size
                    } else if ("function" === typeof t.value.flush) {
                        const n = t.value;
                        let o;
                        for await (const t of n.flush(e)) o = t, yield o;
                        const a = r + t.key;
                        i.push({
                            Name: a,
                            Tsize: o.size,
                            Hash: o.cid
                        }), s += o.size
                    } else {
                        const e = t.value;
                        if (!e.cid) continue;
                        const n = r + t.key,
                            o = e.size;
                        i.push({
                            Name: n,
                            Tsize: o,
                            Hash: e.cid
                        }), s += o
                    }
                }
                const a = Uint8Array.from(o.bitField().reverse()),
                    u = new De({
                        type: "hamt-sharded-directory",
                        data: a,
                        fanout: t.tableSize(),
                        hashType: n.hamtHashCode,
                        mtime: r && r.mtime,
                        mode: r && r.mode
                    }),
                    c = sr(tr({
                        Data: u.marshal(),
                        Links: i
                    })),
                    f = await ur(c, e, n),
                    h = c.length + s;
                yield {
                    cid: f,
                    unixfs: u,
                    size: h
                }
            }
            var Lr = async function t(e, r, n, o) {
                let i = r;
                r instanceof Nr && r.directChildrenCount() >= n && (i = await async function(t, e) {
                    const r = new Or({
                        root: t.root,
                        dir: !0,
                        parent: t.parent,
                        parentKey: t.parentKey,
                        path: t.path,
                        dirty: t.dirty,
                        flat: !1,
                        mtime: t.mtime,
                        mode: t.mode
                    }, e);
                    for await (const {
                        key: n,
                        child: o
                    } of t.eachChildSeries()) await r.put(n, o);
                    return r
                }(r, o));
                const s = i.parent;
                if (s) {
                    if (i !== r) {
                        if (e && (e.parent = i), !i.parentKey) throw new Error("No parent key found");
                        await s.put(i.parentKey, i)
                    }
                    return t(i, s, n, o)
                }
                return i
            };
            var Rr = (t = "") => (t.trim().match(/([^\\/]|\\\/)+/g) || []).filter(Boolean);
            async function zr(t, e, r) {
                const n = Rr(t.path || ""),
                    o = n.length - 1;
                let i = e,
                    s = "";
                for (let a = 0; a < n.length; a++) {
                    const u = n[a];
                    s += `${s?"/":""}${u}`;
                    const c = a === o;
                    if (i.dirty = !0, i.cid = void 0, i.size = void 0, c) await i.put(u, t), e = await Lr(null, i, r.shardSplitThreshold, r);
                    else {
                        let t = await i.get(u);
                        t && t instanceof Cr || (t = new Nr({
                            root: !1,
                            dir: !0,
                            parent: i,
                            parentKey: u,
                            path: s,
                            dirty: !0,
                            flat: !0,
                            mtime: t && t.unixfs && t.unixfs.mtime,
                            mode: t && t.unixfs && t.unixfs.mode
                        }, r)), await i.put(u, t), i = t
                    }
                }
                return e
            }
            async function* Pr(t, e) {
                t instanceof Cr ? yield* t.flush(e): t && t.unixfs && t.unixfs.isDirectory() && (yield t)
            }
            var jr = async function*(t, e, r) {
                let n = new Nr({
                    root: !0,
                    dir: !0,
                    path: "",
                    dirty: !0,
                    flat: !0
                }, r);
                for await (const o of t) o && (n = await zr(o, n, r), o.unixfs && o.unixfs.isDirectory() || (yield o));
                if (r.wrapWithDirectory) yield* Pr(n, e);
                else
                    for await (const o of n.eachChildSeries()) o && (yield* Pr(o.child, e))
            };
            async function* Mr(t, e, r = {}) {
                const n = ((t = {}) => de.bind({
                    ignoreUndefined: !0
                })(me, t))(r);
                let o, i, s;
                o = "function" === typeof r.dagBuilder ? r.dagBuilder : Ir, i = "function" === typeof r.treeBuilder ? r.treeBuilder : jr, s = Symbol.asyncIterator in t || Symbol.iterator in t ? t : [t];
                for await (const a of i(le(o(s, e, n), n.fileImportConcurrency), e, n)) yield {
                    cid: a.cid,
                    path: a.path,
                    unixfs: a.unixfs,
                    size: a.size
                }
            }
            var Fr = r(86154),
                $r = r(23294),
                Hr = r(28132),
                Vr = r(32121);

            function Gr(t) {
                return ArrayBuffer.isView(t) || t instanceof ArrayBuffer
            }

            function qr(t) {
                return t.constructor && ("Blob" === t.constructor.name || "File" === t.constructor.name) && "function" === typeof t.stream
            }

            function Wr(t) {
                return "object" === typeof t && (t.path || t.content)
            }
            const Jr = t => t && "function" === typeof t.getReader;
            async function* Xr(t) {
                yield t
            }
            async function Kr(t) {
                if (Gr(t)) return Xr(Yr(t));
                if ("string" === typeof t || t instanceof String) return Xr(Yr(t.toString()));
                if (qr(t)) return $r(t);
                if (Jr(t) && (t = Fr(t)), Symbol.iterator in t || Symbol.asyncIterator in t) {
                    const e = Hr(t),
                        {
                            value: r,
                            done: n
                        } = await e.peek();
                    if (n) return Xr(new Uint8Array(0));
                    if (e.push(r), Number.isInteger(r)) return Xr(Uint8Array.from(await hr(e)));
                    if (Gr(r) || "string" === typeof r || r instanceof String) return Vr(e, Yr)
                }
                throw ve(new Error(`Unexpected input: ${t}`), "ERR_UNEXPECTED_INPUT")
            }

            function Yr(t) {
                return t instanceof Uint8Array ? t : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t instanceof ArrayBuffer ? new Uint8Array(t) : Array.isArray(t) ? Uint8Array.from(t) : (0, xr.fromString)(t.toString())
            }
            async function Zr(t, e) {
                const {
                    path: r,
                    mode: n,
                    mtime: o,
                    content: i
                } = t, s = {
                    path: r || "",
                    mode: Ue(n),
                    mtime: Oe(o)
                };
                return i ? s.content = await e(i) : r || (s.content = await e(t)), s
            }

            function Qr(t) {
                return async function*(t, e) {
                    if (null === t || void 0 === t) throw ve(new Error(`Unexpected input: ${t}`), "ERR_UNEXPECTED_INPUT");
                    if ("string" === typeof t || t instanceof String) yield Zr(t.toString(), e);
                    else if (Gr(t) || qr(t)) yield Zr(t, e);
                    else {
                        if (Jr(t) && (t = Fr(t)), Symbol.iterator in t || Symbol.asyncIterator in t) {
                            const r = Hr(t),
                                {
                                    value: n,
                                    done: o
                                } = await r.peek();
                            if (o) return void(yield {
                                content: []
                            });
                            if (r.push(n), Number.isInteger(n) || Gr(n) || "string" === typeof n || n instanceof String) return void(yield Zr(r, e));
                            throw ve(new Error("Unexpected input: multiple items passed - if you are using ipfs.add, please use ipfs.addAll instead"), "ERR_UNEXPECTED_INPUT")
                        }
                        if (!Wr(t)) throw ve(new Error('Unexpected input: cannot convert "' + typeof t + '" into ImportCandidate'), "ERR_UNEXPECTED_INPUT");
                        yield Zr(t, e)
                    }
                }(t, Kr)
            }
            async function tn(t, e) {
                const {
                    path: r,
                    mode: n,
                    mtime: o,
                    content: i
                } = t, s = {
                    path: r || "",
                    mode: Ue(n),
                    mtime: Oe(o)
                };
                return i ? s.content = await e(i) : r || (s.content = await e(t)), s
            }

            function en(t) {
                return async function*(t, e) {
                    if ("string" === typeof t || t instanceof String || Gr(t) || qr(t) || t._readableState) throw ve(new Error("Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead"), "ERR_UNEXPECTED_INPUT");
                    if (Jr(t) && (t = Fr(t)), Symbol.iterator in t || Symbol.asyncIterator in t) {
                        const r = Hr(t),
                            {
                                value: n,
                                done: o
                            } = await r.peek();
                        if (o) return void(yield*[]);
                        if (r.push(n), Number.isInteger(n)) throw ve(new Error("Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead"), "ERR_UNEXPECTED_INPUT");
                        if (n._readableState) return void(yield* Vr(r, (t => tn({
                            content: t
                        }, e))));
                        if (Gr(n)) return void(yield tn({
                            content: r
                        }, e));
                        if (Wr(n) || n[Symbol.iterator] || n[Symbol.asyncIterator] || Jr(n) || qr(n)) return void(yield* Vr(r, (t => tn(t, e))))
                    }
                    if (Wr(t)) throw ve(new Error("Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead"), "ERR_UNEXPECTED_INPUT");
                    throw ve(new Error("Unexpected input: " + typeof t), "ERR_UNEXPECTED_INPUT")
                }(t, Kr)
            }

            function rn(t) {
                return "string" === typeof t || t instanceof String || (e = t, ArrayBuffer.isView(e) || e instanceof ArrayBuffer) || function(t) {
                    return Boolean(t.constructor) && ("Blob" === t.constructor.name || "File" === t.constructor.name) && "function" === typeof t.stream
                }(t) || "_readableState" in t;
                var e
            }

            function nn(t) {
                return t = t || new Error("Not Found"), ve(t, "ERR_NOT_FOUND")
            }

            function on(t) {
                return t = t || new Error("Aborted"), ve(t, "ERR_ABORTED")
            }
            var sn = r(64593),
                an = r(55565),
                un = r(37939);
            const cn = (t, e) => async function*() {
                const r = await hr(t);
                yield* r.sort(e)
            }();
            class fn {
                open() {
                    return Promise.reject(new Error(".open is not implemented"))
                }
                close() {
                    return Promise.reject(new Error(".close is not implemented"))
                }
                put(t, e, r) {
                    return Promise.reject(new Error(".put is not implemented"))
                }
                get(t, e) {
                    return Promise.reject(new Error(".get is not implemented"))
                }
                has(t, e) {
                    return Promise.reject(new Error(".has is not implemented"))
                }
                delete(t, e) {
                    return Promise.reject(new Error(".delete is not implemented"))
                }
                async * putMany(t, e = {}) {
                    for await (const {
                        key: r,
                        value: n
                    } of t) await this.put(r, n, e), yield {
                        key: r,
                        value: n
                    }
                }
                async * getMany(t, e = {}) {
                    for await (const r of t) yield this.get(r, e)
                }
                async * deleteMany(t, e = {}) {
                    for await (const r of t) await this.delete(r, e), yield r
                }
                batch() {
                    let t = [],
                        e = [];
                    return {
                        put(e, r) {
                            t.push({
                                key: e,
                                value: r
                            })
                        },
                        delete(t) {
                            e.push(t)
                        },
                        commit: async r => {
                            await sn(this.putMany(t, r)), t = [], await sn(this.deleteMany(e, r)), e = []
                        }
                    }
                }
                async * _all(t, e) {
                    throw new Error("._all is not implemented")
                }
                async * _allKeys(t, e) {
                    throw new Error("._allKeys is not implemented")
                }
                query(t, e) {
                    let r = this._all(t, e);
                    if (null != t.prefix && (r = an(r, (e => e.key.toString().startsWith(t.prefix || "")))), Array.isArray(t.filters) && (r = t.filters.reduce(((t, e) => an(t, e)), r)), Array.isArray(t.orders) && (r = t.orders.reduce(((t, e) => cn(t, e)), r)), null != t.offset) {
                        let e = 0;
                        r = an(r, (() => e++ >= (t.offset || 0)))
                    }
                    return null != t.limit && (r = un(r, t.limit)), r
                }
                queryKeys(t, e) {
                    let r = this._allKeys(t, e);
                    if (null != t.prefix && (r = an(r, (e => e.toString().startsWith(t.prefix || "")))), Array.isArray(t.filters) && (r = t.filters.reduce(((t, e) => an(t, e)), r)), Array.isArray(t.orders) && (r = t.orders.reduce(((t, e) => cn(t, e)), r)), null != t.offset) {
                        let e = 0;
                        r = an(r, (() => e++ >= t.offset))
                    }
                    return null != t.limit && (r = un(r, t.limit)), r
                }
            }
            r(22817);
            class hn extends fn {
                constructor() {
                    super(), this.store = new Map
                }
                async * blocks() {
                    for (const [t, e] of this.store.entries()) yield {
                        cid: ge.k0.parse(t),
                        bytes: e
                    }
                }
                put(t, e) {
                    return this.store.set(t.toString(), e), Promise.resolve()
                }
                get(t) {
                    const e = this.store.get(t.toString());
                    if (!e) throw new Error(`block with cid ${t.toString()} no found`);
                    return Promise.resolve(e)
                }
                has(t) {
                    return Promise.resolve(this.store.has(t.toString()))
                }
                close() {
                    return this.store.clear(), Promise.resolve()
                }
            }
            const ln = {
                cidVersion: 1,
                chunker: "fixed",
                maxChunkSize: 262144,
                hasher: pe.sha256,
                rawLeaves: !0,
                wrapWithDirectory: !0,
                maxChildrenPerNode: 174
            };
            async function dn({
                input: t,
                blockstore: e,
                hasher: r,
                maxChunkSize: n,
                maxChildrenPerNode: o,
                wrapWithDirectory: i,
                rawLeaves: s
            }) {
                if (!t || Array.isArray(t) && !t.length) throw new Error("missing input file(s)");
                const a = e || new hn,
                    u = await h(l(function(t) {
                        return rn(t) ? Qr(t) : en(t)
                    }(t), (t => Mr(t, a, { ...ln,
                        hasher: r || ln.hasher,
                        maxChunkSize: n || ln.maxChunkSize,
                        maxChildrenPerNode: o || ln.maxChildrenPerNode,
                        wrapWithDirectory: !1 !== i && ln.wrapWithDirectory,
                        rawLeaves: null == s ? ln.rawLeaves : s
                    }))));
                if (!u || !u.cid) throw new Error("given input could not be parsed correctly");
                const c = u.cid,
                    {
                        writer: f,
                        out: d
                    } = await ce.create([c]),
                    p = d[Symbol.asyncIterator]();
                let y;
                return {
                    root: c,
                    out: {
                        [Symbol.asyncIterator]() {
                            if (null != y) throw new Error("Multiple iterator not supported");
                            return y = (async () => {
                                for await (const t of a.blocks()) await f.put(t);
                                await f.close(), e || await a.close()
                            })(), {
                                async next() {
                                    const t = await p.next();
                                    return t.done && await y, t
                                }
                            }
                        }
                    }
                }
            }

            function pn(t) {
                return t && t.rel
            }

            function yn(t, e) {
                return e.rel.split(/\s+/).forEach((function(r) {
                    t[r] = Object.assign({}, e, {
                        rel: r
                    })
                })), t
            }

            function gn(t, e) {
                const r = e.match(/\s*(.+)\s*=\s*"?([^"]+)"?/);
                return r && (t[r[1]] = r[2]), t
            }

            function wn(t) {
                try {
                    const e = t.match(/<?([^>]*)>(.*)/),
                        r = e[1],
                        n = e[2].split(";"),
                        o = {},
                        i = new URL(r, "https://example.com");
                    for (const [t, a] of i.searchParams) o[t] = a;
                    n.shift();
                    let s = n.reduce(gn, {});
                    return s = Object.assign({}, o, s), s.url = r, s
                } catch {
                    return null
                }
            }

            function bn(t, e) {
                return function(t, e) {
                    if (!t) return !1;
                    const r = (e = e || {}).maxHeaderLength || 2e3,
                        n = e.throwOnMaxHeaderLengthExceeded || !1;
                    if (t.length > r) {
                        if (n) throw new Error("Input string too long, it should be under " + r + " characters.");
                        return !1
                    }
                    return !0
                }(t, e) ? t.split(/,\s*</).map(wn).filter(pn).reduce(yn, {}) : null
            }
            var mn = r(78103);
            const vn = async function(t) {
                    return (await be.encode(t)).slice(0, 8).reverse()
                },
                _n = t => t.toString(16).toUpperCase().padStart(2, "0").substring(0, 2),
                En = async (t, e, r, n, o) => {
                    if (!n) {
                        const t = (0, Ur.createHAMT)({
                            hashFn: vn
                        });
                        n = {
                            rootBucket: t,
                            hamtDepth: 1,
                            lastBucket: t
                        }
                    }
                    await ((t, e, r) => Promise.all(t.map((t => {
                        if (null == t.Name) throw new Error("Unexpected Link without a Name");
                        if (2 === t.Name.length) {
                            const n = parseInt(t.Name, 16);
                            return e._putObjectAt(n, new Ur.Bucket({
                                hash: r._options.hash,
                                bits: r._options.bits
                            }, e, n))
                        }
                        return r.put(t.Name.substring(2), !0)
                    }))))(t.Links, n.lastBucket, n.rootBucket);
                    const i = await n.rootBucket._findNewBucketAndPos(e);
                    let s = _n(i.pos);
                    const a = (t => {
                        let e = t.bucket;
                        const r = [];
                        for (; e._parent;) r.push(e), e = e._parent;
                        return r.push(e), r.reverse()
                    })(i);
                    a.length > n.hamtDepth && (n.lastBucket = a[n.hamtDepth], s = _n(n.lastBucket._posAtParent));
                    const u = t.Links.find((t => {
                        if (null == t.Name) return !1;
                        const r = t.Name.substring(0, 2),
                            n = t.Name.substring(2);
                        return r === s && (!n || n === e)
                    }));
                    if (!u) return null;
                    if (null != u.Name && u.Name.substring(2) === e) return u.Hash;
                    n.hamtDepth++;
                    return t = ar(await r.get(u.Hash, o)), En(t, e, r, n, o)
                };
            var kn = En;
            var An = function(t, e, r, n) {
                const o = e + t.length;
                return r >= o || n < e ? new Uint8Array(0) : (n >= e && n < o && (t = t.slice(0, n - e)), r >= e && r < o && (t = t.slice(r - e)), t)
            };
            var Bn = (t, e, r) => {
                if (e || (e = 0), e < 0) throw ve(new Error("Offset must be greater than or equal to 0"), "ERR_INVALID_PARAMS");
                if (e > t) throw ve(new Error("Offset must be less than the file size"), "ERR_INVALID_PARAMS");
                if (r || 0 === r || (r = t - e), r < 0) throw ve(new Error("Length must be greater than or equal to 0"), "ERR_INVALID_PARAMS");
                return e + r > t && (r = t - e), {
                    offset: e,
                    length: r
                }
            };
            async function* xn(t, e, r, n, o = 0, i) {
                if (e instanceof Uint8Array) {
                    const t = An(e, o, r, n);
                    return t.length && (yield t), o += t.length, o
                }
                if (null == e.Data) throw ve(new Error("no data in PBNode"), "ERR_NOT_UNIXFS");
                let s;
                try {
                    s = De.unmarshal(e.Data)
                } catch (u) {
                    throw ve(u, "ERR_NOT_UNIXFS")
                }
                if (s.data && s.data.length) {
                    const t = An(s.data, o, r, n);
                    t.length && (yield t), o += s.data.length
                }
                let a = o;
                for (let c = 0; c < e.Links.length; c++) {
                    const u = e.Links[c],
                        f = o + s.blockSizes[c];
                    if (r >= a && r < f || n > a && n <= f || r < a && n > f) {
                        const e = await t.get(u.Hash, {
                            signal: i.signal
                        });
                        let s;
                        switch (u.Hash.code) {
                            case ir:
                                s = await ar(e);
                                break;
                            case fr.code:
                                s = e;
                                break;
                            case 113:
                                s = await Ft(e);
                                break;
                            default:
                                throw Error(`Unsupported codec: ${u.Hash.code}`)
                        }
                        for await (const a of xn(t, s, r, n, o, i)) o += a.length, yield a
                    }
                    o = f, a = f + 1
                }
            }
            var Tn = (t, e, r, n, o, i, s) => function(t = {}) {
                const n = r.fileSize();
                if (void 0 === n) throw new Error("File was a directory");
                const {
                    offset: o,
                    length: i
                } = Bn(n, t.offset, t.length);
                return xn(s, e, o, o + i, 0, t)
            };
            var Sn = (t, e, r, n, o, i, s) => async function*(t = {}) {
                const r = t.offset || 0,
                    a = t.length || e.Links.length,
                    u = e.Links.slice(r, a);
                for (const e of u) {
                    const r = await o(e.Hash, e.Name || "", `${n}/${e.Name||""}`, [], i + 1, s, t);
                    r.entry && (yield r.entry)
                }
            };
            async function* In(t, e, r, n, o, i) {
                const s = t.Links;
                for (const a of s) {
                    const s = null != a.Name ? a.Name.substring(2) : null;
                    if (s) {
                        const t = await r(a.Hash, s, `${e}/${s}`, [], n + 1, o, i);
                        yield t.entry
                    } else {
                        t = ar(await o.get(a.Hash));
                        for await (const s of In(t, e, r, n, o, i)) yield s
                    }
                }
            }
            var Cn = (t, e, r, n, o, i, s) => function(t = {}) {
                return In(e, n, o, i, s, t)
            };
            const Nn = {
                raw: Tn,
                file: Tn,
                directory: Sn,
                "hamt-sharded-directory": Cn,
                metadata: (t, e, r, n, o, i, s) => () => [],
                symlink: (t, e, r, n, o, i, s) => () => []
            };
            var Un = async (t, e, r, n, o, i, s, a) => {
                const u = ar(await s.get(t, a));
                let c, f;
                if (e || (e = t.toString()), null == u.Data) throw ve(new Error("no data in PBNode"), "ERR_NOT_UNIXFS");
                try {
                    c = De.unmarshal(u.Data)
                } catch (h) {
                    throw ve(h, "ERR_NOT_UNIXFS")
                }
                if (r || (r = e), n.length) {
                    let t;
                    if (t = c && "hamt-sharded-directory" === c.type ? await kn(u, n[0], s) : ((t, e) => {
                            const r = t.Links.find((t => t.Name === e));
                            return r && r.Hash
                        })(u, n[0]), !t) throw ve(new Error("file does not exist"), "ERR_NOT_FOUND");
                    const e = n.shift();
                    f = {
                        cid: t,
                        toResolve: n,
                        name: e || "",
                        path: `${r}/${e}`
                    }
                }
                return {
                    entry: {
                        type: c.isDirectory() ? "directory" : "file",
                        name: e,
                        path: r,
                        cid: t,
                        content: Nn[c.type](t, u, c, r, o, i, s),
                        unixfs: c,
                        depth: i,
                        node: u,
                        size: c.fileSize()
                    },
                    next: f
                }
            };
            var On = async (t, e, r, n, o, i, s, a) => {
                if (n.length) throw ve(new Error(`No link named ${r} found in raw node ${t}`), "ERR_NOT_FOUND");
                const u = await s.get(t, a);
                return {
                    entry: {
                        type: "raw",
                        name: e,
                        path: r,
                        cid: t,
                        content: (c = u, async function*(t = {}) {
                            const {
                                offset: e,
                                length: r
                            } = Bn(c.length, t.offset, t.length);
                            yield An(c, 0, e, e + r)
                        }),
                        depth: i,
                        size: u.length,
                        node: u
                    }
                };
                var c
            };
            var Dn = async (t, e, r, n, o, i, s, a) => {
                const u = await s.get(t),
                    c = Ft(u);
                let f = c,
                    h = r;
                for (; n.length;) {
                    const o = n[0];
                    if (!(o in f)) throw ve(new Error(`No property named ${o} found in cbor node ${t}`), "ERR_NO_PROP"); {
                        n.shift(), h = `${h}/${o}`;
                        const s = p.k.asCID(f[o]);
                        if (s) return {
                            entry: {
                                type: "object",
                                name: e,
                                path: r,
                                cid: t,
                                node: u,
                                depth: i,
                                size: u.length,
                                content: async function*() {
                                    yield c
                                }
                            },
                            next: {
                                cid: s,
                                name: o,
                                path: h,
                                toResolve: n
                            }
                        };
                        f = f[o]
                    }
                }
                return {
                    entry: {
                        type: "object",
                        name: e,
                        path: r,
                        cid: t,
                        node: u,
                        depth: i,
                        size: u.length,
                        content: async function*() {
                            yield c
                        }
                    }
                }
            };
            var Ln = async (t, e, r, n, o, i, s, a) => {
                if (n.length) throw ve(new Error(`No link named ${r} found in raw node ${t}`), "ERR_NOT_FOUND");
                const u = await y.Jx(t.multihash.bytes);
                return {
                    entry: {
                        type: "identity",
                        name: e,
                        path: r,
                        cid: t,
                        content: (c = u.digest, async function*(t = {}) {
                            const {
                                offset: e,
                                length: r
                            } = Bn(c.length, t.offset, t.length);
                            yield An(c, 0, e, e + r)
                        }),
                        depth: i,
                        size: u.digest.length,
                        node: u.digest
                    }
                };
                var c
            };
            const Rn = {
                [ir]: Un,
                [fr.code]: On,
                113: Dn,
                [mn.identity.code]: Ln
            };
            var zn = function t(e, r, n, o, i, s, a) {
                const u = Rn[e.code];
                if (!u) throw ve(new Error(`No resolver for code ${e.code}`), "ERR_NO_RESOLVER");
                return u(e, r, n, o, t, i, s, a)
            };
            const Pn = t => {
                if (t instanceof Uint8Array) return {
                    cid: p.k.decode(t),
                    toResolve: []
                };
                const e = p.k.asCID(t);
                if (e) return {
                    cid: e,
                    toResolve: []
                };
                if ("string" === typeof t) {
                    0 === t.indexOf("/ipfs/") && (t = t.substring(6));
                    const e = ((t = "") => (t.trim().match(/([^\\^/]|\\\/)+/g) || []).filter(Boolean))(t);
                    return {
                        cid: p.k.parse(e[0]),
                        toResolve: e.slice(1)
                    }
                }
                throw ve(new Error(`Unknown path type ${t}`), "ERR_BAD_PATH")
            };
            async function jn(t, e, r = {}) {
                const n = await h(async function*(t, e, r = {}) {
                    let {
                        cid: n,
                        toResolve: o
                    } = Pn(t), i = n.toString(), s = i;
                    const a = o.length;
                    for (;;) {
                        const u = await zn(n, i, s, o, a, e, r);
                        if (!u.entry && !u.next) throw ve(new Error(`Could not resolve ${t}`), "ERR_NOT_FOUND");
                        if (u.entry && (yield u.entry), !u.next) return;
                        o = u.next.toResolve, n = u.next.cid, i = u.next.name, s = u.next.path
                    }
                }(t, e, r));
                if (!n) throw ve(new Error(`Could not resolve ${t}`), "ERR_NOT_FOUND");
                return n
            }
            async function* Mn(t, e, r = {}) {
                const n = await jn(t, e, r);
                if (n && (yield n, "directory" === n.type))
                    for await (const o of async function* t(e, r) {
                        for await (const n of e.content(r)) yield n, n instanceof Uint8Array || "directory" === n.type && (yield* t(n, r))
                    }(n, r)) yield o
            }
            class Fn extends fn {
                constructor(t) {
                    super(), this.store = t
                }
                async get(t) {
                    const e = await this.store.get(t);
                    if (!e) throw new Error(`Incomplete CAR. Block missing for CID ${t}`);
                    if (!async function({
                            cid: t,
                            bytes: e
                        }) {
                            return function(t, e) {
                                if (t === e) return !0;
                                if (t.byteLength !== e.byteLength) return !1;
                                for (let r = 0; r < t.byteLength; r++)
                                    if (t[r] !== e[r]) return !1;
                                return !0
                            }((await pe.sha256.digest(e)).digest, t.multihash.digest)
                        }({
                            cid: t,
                            bytes: e
                        })) throw new Error(`Invalid CAR. Hash of block data does not match CID ${t}`);
                    return e
                }
                static fromBlockstore(t) {
                    return new Fn(t)
                }
                static fromCarReader(t) {
                    return new Fn({
                        get: async e => {
                            const r = await t.get(e);
                            return null === r || void 0 === r ? void 0 : r.bytes
                        }
                    })
                }
            }
            async function* $n(t, {
                roots: e,
                blockstore: r
            } = {}) {
                const n = await ne.fromIterable(function(t) {
                        return Symbol.asyncIterator in t ? t : Fr(t)
                    }(t)),
                    o = r || new hn;
                for await (const s of n) await o.put(s.cid, s.bytes);
                const i = Fn.fromBlockstore(o);
                e && 0 !== e.length || (e = await n.getRoots());
                for (const s of e) yield* Mn(s, i)
            }
            const Hn = ({
                    enumerable: t = !0,
                    configurable: e = !1
                } = {}) => ({
                    enumerable: t,
                    configurable: e,
                    writable: !1
                }),
                Vn = function*(t, e) {
                    if (null != t && !(t instanceof Uint8Array))
                        for (const [r, n] of Object.entries(t)) {
                            const t = [...e, r];
                            if (null != n && "object" === typeof n)
                                if (Array.isArray(n))
                                    for (const [e, r] of n.entries()) {
                                        const n = [...t, e],
                                            o = ge.k0.asCID(r);
                                        o ? yield [n.join("/"), o]: "object" === typeof r && (yield* Vn(r, n))
                                    } else {
                                        const e = ge.k0.asCID(n);
                                        e ? yield [t.join("/"), e]: yield* Vn(n, t)
                                    }
                        }
                },
                Gn = function*(t, e) {
                    if (null != t)
                        for (const [r, n] of Object.entries(t)) {
                            const t = [...e, r];
                            if (yield t.join("/"), null != n && !(n instanceof Uint8Array) && "object" === typeof n && !ge.k0.asCID(n))
                                if (Array.isArray(n))
                                    for (const [e, r] of n.entries()) {
                                        const n = [...t, e];
                                        yield n.join("/"), "object" !== typeof r || ge.k0.asCID(r) || (yield* Gn(r, n))
                                    } else yield* Gn(n, t)
                        }
                };
            class qn {
                constructor({
                    cid: t,
                    bytes: e,
                    value: r
                }) {
                    if (!t || !e || "undefined" === typeof r) throw new Error("Missing required argument");
                    this.cid = t, this.bytes = e, this.value = r, this.asBlock = this, Object.defineProperties(this, {
                        cid: Hn(),
                        bytes: Hn(),
                        value: Hn(),
                        asBlock: Hn()
                    })
                }
                links() {
                    return Vn(this.value, [])
                }
                tree() {
                    return Gn(this.value, [])
                }
                get(t = "/") {
                    return ((t, e) => {
                        let r = t;
                        for (const [n, o] of e.entries()) {
                            if (r = r[o], null == r) throw new Error(`Object has no property at ${e.slice(0,n+1).map((t=>`[${JSON.stringify(t)}]`)).join("")}`);
                            const t = ge.k0.asCID(r);
                            if (t) return {
                                value: t,
                                remaining: e.slice(n + 1).join("/")
                            }
                        }
                        return {
                            value: r
                        }
                    })(this.value, t.split("/").filter(Boolean))
                }
            }
            const Wn = {
                float64: !0,
                typeEncoders: {
                    Object: function(t) {
                        if (t.asCID !== t) return null;
                        const e = p.k.asCID(t);
                        if (!e) return null;
                        const r = new Uint8Array(e.bytes.byteLength + 1);
                        return r.set(e.bytes, 1), [new v(m.tag, 42), new v(m.bytes, r)]
                    },
                    undefined: function() {
                        throw new Error("`undefined` is not supported by the IPLD Data Model and cannot be encoded")
                    },
                    number: function(t) {
                        if (Number.isNaN(t)) throw new Error("`NaN` is not supported by the IPLD Data Model and cannot be encoded");
                        if (t === 1 / 0 || t === -1 / 0) throw new Error("`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded");
                        return null
                    }
                }
            };
            const Jn = {
                allowIndefinite: !1,
                allowUndefined: !1,
                allowNaN: !1,
                allowInfinity: !1,
                allowBigInt: !0,
                strict: !0,
                useMaps: !1,
                tags: []
            };
            Jn.tags[42] = function(t) {
                if (0 !== t[0]) throw new Error("Invalid CID for CBOR tag 42; expected leading 0x00");
                return p.k.decode(t.subarray(1))
            };
            const Xn = "dag-cbor",
                Kn = 113,
                Yn = t => Ut(t, Wn),
                Zn = t => Pt(t, Jn);
            class Qn {
                constructor(t, e, r = {}) {
                    if ("number" !== typeof e || e <= 0) throw new Error("invalid target chunk size");
                    this._reader = t, this._targetSize = e, this._decoders = [n, fr, i, ...r.decoders || []]
                }
                async * cars() {
                    const t = await this._reader.getRoots();
                    if (1 !== t.length) throw new Error(`unexpected number of roots: ${t.length}`);
                    let e;
                    for await (const r of this._cars(t[0])) e = r.channel, r.out && (yield r.out);
                    if (!e) throw new Error("missing CAR writer channel");
                    e.writer.close(), yield e.out
                }
                async _get(t) {
                    const e = await this._reader.get(t);
                    if (!e) throw new Error(`missing block for ${t}`);
                    const {
                        bytes: r
                    } = e, n = this._decoders.find((e => e.code === t.code));
                    if (!n) throw new Error(`missing decoder for ${t.code}`);
                    return new qn({
                        cid: t,
                        bytes: r,
                        value: n.decode(r)
                    })
                }
                async * _cars(t, e = [], r) {
                    const n = await this._get(t);
                    if ((r = r || Object.assign(ce.create(t), {
                            size: 0
                        })).size > 0 && r.size + n.bytes.byteLength >= this._targetSize) {
                        r.writer.close();
                        const {
                            out: t
                        } = r;
                        r = function(t) {
                            const e = Object.assign(ce.create(t[0].cid), {
                                size: t.reduce(((t, e) => t + e.bytes.byteLength), 0)
                            });
                            for (const r of t) e.writer.put(r);
                            return e
                        }(e), yield {
                            channel: r,
                            out: t
                        }
                    }
                    e = e.concat(n), r.size += n.bytes.byteLength, r.writer.put(n);
                    for (const [, o] of n.links())
                        for await (const t of this._cars(o, e, r)) r = t.channel, yield t;
                    if (!r) throw new Error("missing CAR writer channel");
                    yield {
                        channel: r
                    }
                }
                static async fromIterable(t, e, r) {
                    const n = await te.fromIterable(t);
                    return new Qn(n, e, r)
                }
                static async fromBlob(t, e, r) {
                    const n = await t.arrayBuffer(),
                        o = await te.fromBytes(new Uint8Array(n));
                    return new Qn(o, e, r)
                }
            }
            var to = r(28230);
            const eo = globalThis.fetch,
                ro = (globalThis.Request, globalThis.Response, globalThis.Blob),
                no = globalThis.File,
                oo = hn,
                io = 1048576,
                so = 104857600;

            function ao() {
                const t = to(30, 1e4);
                return () => t((() => {}))
            }
            const uo = ao();
            class co {
                constructor({
                    token: t,
                    endpoint: e = new URL("https://api.web3.storage"),
                    rateLimiter: r,
                    fetch: n = eo
                }) {
                    this.token = t, this.endpoint = e, this.rateLimiter = r || ao(), this.fetch = n
                }
                static headers(t) {
                    if (!t) throw new Error("missing token");
                    return {
                        Authorization: `Bearer ${t}`,
                        "X-Client": "web3.storage/js"
                    }
                }
                static async put({
                    endpoint: t,
                    token: e,
                    rateLimiter: r = uo,
                    fetch: n = eo
                }, o, {
                    onRootCidReady: i,
                    onStoredChunk: s,
                    maxRetries: a = 5,
                    maxChunkSize: u = 10485760,
                    wrapWithDirectory: c = !0,
                    name: f,
                    signal: h
                } = {}) {
                    if (u >= so || u < io) throw new Error("maximum chunk size must be less than 100MiB and greater than or equal to 1MB");
                    const l = new oo;
                    try {
                        const {
                            out: d,
                            root: p
                        } = await dn({
                            input: Array.from(o).map(ho),
                            blockstore: l,
                            wrapWithDirectory: c,
                            maxChunkSize: io,
                            maxChildrenPerNode: 1024
                        });
                        i && i(p.toString());
                        const y = await te.fromIterable(d);
                        return await co.putCar({
                            endpoint: t,
                            token: e,
                            rateLimiter: r,
                            fetch: n
                        }, y, {
                            onStoredChunk: s,
                            maxRetries: a,
                            maxChunkSize: u,
                            name: f,
                            signal: h
                        })
                    } finally {
                        await l.close()
                    }
                }
                static async putCar({
                    endpoint: t,
                    token: e,
                    rateLimiter: r = uo,
                    fetch: n = eo
                }, o, {
                    name: i,
                    onStoredChunk: s,
                    maxRetries: a = 5,
                    maxChunkSize: u = 10485760,
                    decoders: h,
                    signal: l
                } = {}) {
                    if (u >= so || u < io) throw new Error("maximum chunk size must be less than 100MiB and greater than or equal to 1MB");
                    const d = u,
                        p = new URL("car", t);
                    let y = co.headers(e);
                    i && (y = { ...y,
                        "X-Name": encodeURIComponent(i)
                    });
                    const g = await o.getRoots();
                    if (null == g[0]) throw new Error("missing root CID");
                    if (g.length > 1) throw new Error("too many roots");
                    const w = g[0].toString(),
                        b = new Qn(o, d, {
                            decoders: h
                        }),
                        m = c(3, (async t => {
                            const e = [];
                            for await (const r of t) e.push(r);
                            const o = new ro(e, {
                                    type: "application/vnd.ipld.car"
                                }),
                                i = await f((async () => {
                                    let t;
                                    await r();
                                    try {
                                        t = await n(p.toString(), {
                                            method: "POST",
                                            headers: y,
                                            body: o,
                                            signal: l
                                        })
                                    } catch (i) {
                                        throw l && l.aborted ? new f.AbortError(i) : i
                                    }
                                    if (429 === t.status) throw new Error("rate limited");
                                    const e = await t.json();
                                    if (!t.ok) throw new Error(e.message);
                                    if (e.cid !== w) throw new Error(`root CID mismatch, expected: ${w}, received: ${e.cid}`);
                                    return e.cid
                                }), {
                                    retries: a
                                });
                            return s && s(o.size), i
                        }));
                    for await (const c of m(b.cars()));
                    return w
                }
                static async get({
                    endpoint: t,
                    token: e,
                    rateLimiter: r = uo,
                    fetch: n = eo
                }, o, i = {}) {
                    const s = new URL(`car/${o}`, t);
                    await r();
                    const a = await n(s.toString(), {
                        method: "GET",
                        headers: co.headers(e),
                        signal: i.signal
                    });
                    if (429 === a.status) throw new Error("rate limited");
                    return function(t) {
                        const e = Object.assign(t, {
                            unixFsIterator: async function*() {
                                if (!t.ok) throw new Error(`Response was not ok: ${t.status} ${t.statusText} - Check for { "ok": false } on the Response object before calling .unixFsIterator`);
                                if (!t.body) throw new Error("No body on response");
                                const e = new oo;
                                try {
                                    for await (const r of $n(t.body, {
                                        blockstore: e
                                    })) yield r
                                } finally {
                                    await e.close()
                                }
                            },
                            files: async () => {
                                if (!t.ok) throw new Error(`Response was not ok: ${t.status} ${t.statusText} - Check for { "ok": false } on the Response object before calling .files`);
                                const r = [];
                                for await (const t of e.unixFsIterator()) {
                                    if ("directory" === t.type) continue;
                                    const e = await fo(t);
                                    r.push(e)
                                }
                                return r
                            }
                        });
                        return e
                    }(a)
                }
                static async delete({
                    endpoint: t,
                    token: e,
                    rateLimiter: r = uo
                }, n, o = {}) {
                    throw console.log("Not deleting", n, t, e, r, o), Error(".delete not implemented yet")
                }
                static async status({
                    endpoint: t,
                    token: e,
                    rateLimiter: r = uo,
                    fetch: n = eo
                }, o, i = {}) {
                    const s = new URL(`status/${o}`, t);
                    await r();
                    const a = await n(s.toString(), {
                        method: "GET",
                        headers: co.headers(e),
                        signal: i.signal
                    });
                    if (429 === a.status) throw new Error("rate limited");
                    if (404 !== a.status) {
                        if (!a.ok) throw new Error(a.statusText);
                        return a.json()
                    }
                }
                static async * list(t, {
                    before: e = (new Date).toISOString(),
                    maxResults: r = 1 / 0,
                    signal: n
                } = {}) {
                    let o = 0;
                    const i = r > 100 ? 100 : r;
                    for await (const s of async function*(t, e, r) {
                        let n = await t(e, r);
                        yield n;
                        let o = bn(n.headers.get("Link") || "");
                        for (; o && o.next;) n = await t(e, o.next), yield n, o = bn(n.headers.get("Link") || "")
                    }((async function({
                        endpoint: t,
                        token: e,
                        rateLimiter: r = uo,
                        fetch: o = eo
                    }, {
                        before: i,
                        size: s
                    }) {
                        const a = new URLSearchParams({
                                before: i,
                                size: s.toString()
                            }),
                            u = new URL(`user/uploads?${a}`, t);
                        return await r(), o(u.toString(), {
                            method: "GET",
                            headers: { ...co.headers(e),
                                "Access-Control-Request-Headers": "Link"
                            },
                            signal: n
                        })
                    }), t, {
                        before: e,
                        size: i
                    })) {
                        if (!s.ok) {
                            if (429 === s.status) throw new Error("rate limited");
                            const t = await s.json();
                            throw new Error(`${s.status} ${s.statusText} ${t?"- "+t.message:""}`)
                        }
                        const t = await s.json();
                        for (const e of t) {
                            if (++o > r) return;
                            yield e
                        }
                    }
                }
                put(t, e) {
                    return co.put(this, t, e)
                }
                putCar(t, e) {
                    return co.putCar(this, t, e)
                }
                get(t, e) {
                    return co.get(this, t, e)
                }
                delete(t, e) {
                    return co.delete(this, t, e)
                }
                status(t, e) {
                    return co.status(this, t, e)
                }
                list(t) {
                    return co.list(this, t)
                }
            }
            async function fo({
                content: t,
                path: e,
                cid: r
            }) {
                const n = [];
                for await (const i of t()) n.push(i);
                const o = new no(n, function(t) {
                    const e = t.indexOf("/");
                    return -1 === e ? t : t.substring(e + 1)
                }(e));
                return Object.assign(o, {
                    cid: r.toString()
                })
            }

            function ho(t) {
                let e;
                return {
                    path: t.name,
                    get content() {
                        return e = e || t.stream(), e
                    }
                }
            }
        }
    }
]);