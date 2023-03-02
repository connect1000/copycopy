(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7653], {
        3509: function(e, t, r) {
            "use strict";

            function n() {
                return n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, n.apply(this, arguments)
            }
            r.d(t, {
                Z: function() {
                    return f
                }
            });
            var i = r(11163),
                o = r(67294),
                s = r(50079),
                a = r(31954),
                h = r(31733),
                u = ["children", "onError", "getMessageFallback", "messages"];

            function c(e) {
                var t = e.children,
                    r = e.onError,
                    n = void 0 === r ? a.h : r,
                    i = e.getMessageFallback,
                    c = void 0 === i ? a.i : i,
                    l = e.messages,
                    f = (0, s.gK)(e, u);
                return o.createElement(h.Z.Provider, {
                    value: (0, s.gY)({}, f, {
                        messages: l,
                        onError: n,
                        getMessageFallback: c
                    })
                }, t)
            }
            var l = ["locale"];

            function f(e) {
                var t, r = e.locale,
                    s = function(e, t) {
                        if (null == e) return {};
                        var r, n, i = {},
                            o = Object.keys(e);
                        for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                        return i
                    }(e, l),
                    a = null == (t = (0, i.useRouter)()) ? void 0 : t.locale;
                if (!r && a && (r = a), !r) throw new Error(void 0);
                return o.createElement(c, n({
                    locale: r
                }, s))
            }
        },
        1045: function(e, t, r) {
            var n = r(34155),
                i = r(67294);

            function o(e) {
                return e && "object" === typeof e && "default" in e ? e : {
                    default: e
                }
            }
            var s = o(i);

            function a(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            var h = "undefined" !== typeof n && n.env && !0,
                u = function(e) {
                    return "[object String]" === Object.prototype.toString.call(e)
                },
                c = function() {
                    var e, t, r, n = function(e) {
                            var t = void 0 === e ? {} : e,
                                r = t.name,
                                n = void 0 === r ? "stylesheet" : r,
                                i = t.optimizeForSpeed,
                                o = void 0 === i ? h : i;
                            l(u(n), "`name` must be a string"), this._name = n, this._deletedRulePlaceholder = "#" + n + "-deleted-rule____{}", l("boolean" === typeof o, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = o, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
                            var s = document.querySelector('meta[property="csp-nonce"]');
                            this._nonce = s ? s.getAttribute("content") : null
                        },
                        i = n.prototype;
                    return i.setOptimizeForSpeed = function(e) {
                        l("boolean" === typeof e, "`setOptimizeForSpeed` accepts a boolean"), l(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = e, this.inject()
                    }, i.isOptimizeForSpeed = function() {
                        return this._optimizeForSpeed
                    }, i.inject = function() {
                        var e = this;
                        if (l(!this._injected, "sheet already injected"), this._injected = !0, this._optimizeForSpeed) return this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), void(this._optimizeForSpeed || (h || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0));
                        this._serverSheet = {
                            cssRules: [],
                            insertRule: function(t, r) {
                                return "number" === typeof r ? e._serverSheet.cssRules[r] = {
                                    cssText: t
                                } : e._serverSheet.cssRules.push({
                                    cssText: t
                                }), r
                            },
                            deleteRule: function(t) {
                                e._serverSheet.cssRules[t] = null
                            }
                        }
                    }, i.getSheetForTag = function(e) {
                        if (e.sheet) return e.sheet;
                        for (var t = 0; t < document.styleSheets.length; t++)
                            if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                    }, i.getSheet = function() {
                        return this.getSheetForTag(this._tags[this._tags.length - 1])
                    }, i.insertRule = function(e, t) {
                        if (l(u(e), "`insertRule` accepts only strings"), this._optimizeForSpeed) {
                            var r = this.getSheet();
                            "number" !== typeof t && (t = r.cssRules.length);
                            try {
                                r.insertRule(e, t)
                            } catch (i) {
                                return h || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1
                            }
                        } else {
                            var n = this._tags[t];
                            this._tags.push(this.makeStyleTag(this._name, e, n))
                        }
                        return this._rulesCount++
                    }, i.replaceRule = function(e, t) {
                        if (this._optimizeForSpeed) {
                            var r = this.getSheet();
                            if (t.trim() || (t = this._deletedRulePlaceholder), !r.cssRules[e]) return e;
                            r.deleteRule(e);
                            try {
                                r.insertRule(t, e)
                            } catch (i) {
                                h || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), r.insertRule(this._deletedRulePlaceholder, e)
                            }
                        } else {
                            var n = this._tags[e];
                            l(n, "old rule at index `" + e + "` not found"), n.textContent = t
                        }
                        return e
                    }, i.deleteRule = function(e) {
                        if (this._optimizeForSpeed) this.replaceRule(e, "");
                        else {
                            var t = this._tags[e];
                            l(t, "rule at index `" + e + "` not found"), t.parentNode.removeChild(t), this._tags[e] = null
                        }
                    }, i.flush = function() {
                        this._injected = !1, this._rulesCount = 0, this._tags.forEach((function(e) {
                            return e && e.parentNode.removeChild(e)
                        })), this._tags = []
                    }, i.cssRules = function() {
                        var e = this;
                        return this._tags.reduce((function(t, r) {
                            return r ? t = t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules, (function(t) {
                                return t.cssText === e._deletedRulePlaceholder ? null : t
                            }))) : t.push(null), t
                        }), [])
                    }, i.makeStyleTag = function(e, t, r) {
                        t && l(u(t), "makeStyleTag accepts only strings as second parameter");
                        var n = document.createElement("style");
                        this._nonce && n.setAttribute("nonce", this._nonce), n.type = "text/css", n.setAttribute("data-" + e, ""), t && n.appendChild(document.createTextNode(t));
                        var i = document.head || document.getElementsByTagName("head")[0];
                        return r ? i.insertBefore(n, r) : i.appendChild(n), n
                    }, e = n, (t = [{
                        key: "length",
                        get: function() {
                            return this._rulesCount
                        }
                    }]) && a(e.prototype, t), r && a(e, r), n
                }();

            function l(e, t) {
                if (!e) throw new Error("StyleSheet: " + t + ".")
            }
            var f = function(e) {
                    for (var t = 5381, r = e.length; r;) t = 33 * t ^ e.charCodeAt(--r);
                    return t >>> 0
                },
                p = {};

            function m(e, t) {
                if (!t) return "jsx-" + e;
                var r = String(t),
                    n = e + r;
                return p[n] || (p[n] = "jsx-" + f(e + "-" + r)), p[n]
            }

            function E(e, t) {
                var r = e + t;
                return p[r] || (p[r] = t.replace(/__jsx-style-dynamic-selector/g, e)), p[r]
            }
            var g = function() {
                var e = function(e) {
                        var t = void 0 === e ? {} : e,
                            r = t.styleSheet,
                            n = void 0 === r ? null : r,
                            i = t.optimizeForSpeed,
                            o = void 0 !== i && i;
                        this._sheet = n || new c({
                            name: "styled-jsx",
                            optimizeForSpeed: o
                        }), this._sheet.inject(), n && "boolean" === typeof o && (this._sheet.setOptimizeForSpeed(o), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                    },
                    t = e.prototype;
                return t.add = function(e) {
                    var t = this;
                    void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer || (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce((function(e, t) {
                        return e[t] = 0, e
                    }), {}));
                    var r = this.getIdAndRules(e),
                        n = r.styleId,
                        i = r.rules;
                    if (n in this._instancesCounts) this._instancesCounts[n] += 1;
                    else {
                        var o = i.map((function(e) {
                            return t._sheet.insertRule(e)
                        })).filter((function(e) {
                            return -1 !== e
                        }));
                        this._indices[n] = o, this._instancesCounts[n] = 1
                    }
                }, t.remove = function(e) {
                    var t = this,
                        r = this.getIdAndRules(e).styleId;
                    if (function(e, t) {
                            if (!e) throw new Error("StyleSheetRegistry: " + t + ".")
                        }(r in this._instancesCounts, "styleId: `" + r + "` not found"), this._instancesCounts[r] -= 1, this._instancesCounts[r] < 1) {
                        var n = this._fromServer && this._fromServer[r];
                        n ? (n.parentNode.removeChild(n), delete this._fromServer[r]) : (this._indices[r].forEach((function(e) {
                            return t._sheet.deleteRule(e)
                        })), delete this._indices[r]), delete this._instancesCounts[r]
                    }
                }, t.update = function(e, t) {
                    this.add(t), this.remove(e)
                }, t.flush = function() {
                    this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                }, t.cssRules = function() {
                    var e = this,
                        t = this._fromServer ? Object.keys(this._fromServer).map((function(t) {
                            return [t, e._fromServer[t]]
                        })) : [],
                        r = this._sheet.cssRules();
                    return t.concat(Object.keys(this._indices).map((function(t) {
                        return [t, e._indices[t].map((function(e) {
                            return r[e].cssText
                        })).join(e._optimizeForSpeed ? "" : "\n")]
                    })).filter((function(e) {
                        return Boolean(e[1])
                    })))
                }, t.styles = function(e) {
                    return function(e, t) {
                        return void 0 === t && (t = {}), e.map((function(e) {
                            var r = e[0],
                                n = e[1];
                            return s.default.createElement("style", {
                                id: "__" + r,
                                key: "__" + r,
                                nonce: t.nonce ? t.nonce : void 0,
                                dangerouslySetInnerHTML: {
                                    __html: n
                                }
                            })
                        }))
                    }(this.cssRules(), e)
                }, t.getIdAndRules = function(e) {
                    var t = e.children,
                        r = e.dynamic,
                        n = e.id;
                    if (r) {
                        var i = m(n, r);
                        return {
                            styleId: i,
                            rules: Array.isArray(t) ? t.map((function(e) {
                                return E(i, e)
                            })) : [E(i, t)]
                        }
                    }
                    return {
                        styleId: m(n),
                        rules: Array.isArray(t) ? t : [t]
                    }
                }, t.selectFromServer = function() {
                    return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e, t) {
                        return e[t.id.slice(2)] = t, e
                    }), {})
                }, e
            }();
            var _ = i.createContext(null);

            function d() {
                return new g
            }

            function v() {
                return i.useContext(_)
            }
            _.displayName = "StyleSheetContext";
            var y = s.default.useInsertionEffect || s.default.useLayoutEffect,
                b = d();

            function S(e) {
                var t = b || v();
                return t ? (y((function() {
                    return t.add(e),
                        function() {
                            t.remove(e)
                        }
                }), [e.id, String(e.dynamic)]), null) : null
            }
            S.dynamic = function(e) {
                return e.map((function(e) {
                    return m(e[0], e[1])
                })).join(" ")
            }, t.style = S
        },
        60357: function(e, t, r) {
            "use strict";
            e.exports = r(1045).style
        },
        50079: function(e, t, r) {
            "use strict";

            function n() {
                return n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, n.apply(this, arguments)
            }

            function i(e, t) {
                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, s(e, t)
            }

            function o(e) {
                return o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, o(e)
            }

            function s(e, t) {
                return s = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, s(e, t)
            }

            function a() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }

            function h(e, t, r) {
                return h = a() ? Reflect.construct : function(e, t, r) {
                    var n = [null];
                    n.push.apply(n, t);
                    var i = new(Function.bind.apply(e, n));
                    return r && s(i, r.prototype), i
                }, h.apply(null, arguments)
            }

            function u(e) {
                var t = "function" === typeof Map ? new Map : void 0;
                return u = function(e) {
                    if (null === e || (r = e, -1 === Function.toString.call(r).indexOf("[native code]"))) return e;
                    var r;
                    if ("function" !== typeof e) throw new TypeError("Super expression must either be null or a function");
                    if ("undefined" !== typeof t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, n)
                    }

                    function n() {
                        return h(e, arguments, o(this).constructor)
                    }
                    return n.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: n,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), s(n, e)
                }, u(e)
            }

            function c(e, t) {
                if (null == e) return {};
                var r, n, i = {},
                    o = Object.keys(e);
                for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                return i
            }
            r.d(t, {
                UL: function() {
                    return i
                },
                gK: function() {
                    return c
                },
                gY: function() {
                    return n
                },
                wm: function() {
                    return u
                }
            })
        },
        31954: function(e, t, r) {
            "use strict";

            function n(e) {
                return [e.namespace, e.key].filter((function(e) {
                    return null != e
                })).join(".")
            }

            function i(e) {
                console.error(e)
            }
            r.d(t, {
                h: function() {
                    return i
                },
                i: function() {
                    return n
                }
            })
        },
        75270: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return Fe
                }
            });
            var n = r(67294),
                i = r(31733);

            function o() {
                var e = (0, n.useContext)(i.Z);
                if (!e) throw new Error(void 0);
                return e
            }
            var s, a, h, u = r(50079),
                c = r(70655);

            function l(e) {
                return e.type === a.literal
            }

            function f(e) {
                return e.type === a.argument
            }

            function p(e) {
                return e.type === a.number
            }

            function m(e) {
                return e.type === a.date
            }

            function E(e) {
                return e.type === a.time
            }

            function g(e) {
                return e.type === a.select
            }

            function _(e) {
                return e.type === a.plural
            }

            function d(e) {
                return e.type === a.pound
            }

            function v(e) {
                return e.type === a.tag
            }

            function y(e) {
                return !(!e || "object" !== typeof e || e.type !== h.number)
            }

            function b(e) {
                return !(!e || "object" !== typeof e || e.type !== h.dateTime)
            }! function(e) {
                e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
            }(s || (s = {})),
            function(e) {
                e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
            }(a || (a = {})),
            function(e) {
                e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
            }(h || (h = {}));
            var S = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
                T = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

            function H(e) {
                var t = {};
                return e.replace(T, (function(e) {
                    var r = e.length;
                    switch (e[0]) {
                        case "G":
                            t.era = 4 === r ? "long" : 5 === r ? "narrow" : "short";
                            break;
                        case "y":
                            t.year = 2 === r ? "2-digit" : "numeric";
                            break;
                        case "Y":
                        case "u":
                        case "U":
                        case "r":
                            throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
                        case "q":
                        case "Q":
                            throw new RangeError("`q/Q` (quarter) patterns are not supported");
                        case "M":
                        case "L":
                            t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
                            break;
                        case "w":
                        case "W":
                            throw new RangeError("`w/W` (week) patterns are not supported");
                        case "d":
                            t.day = ["numeric", "2-digit"][r - 1];
                            break;
                        case "D":
                        case "F":
                        case "g":
                            throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
                        case "E":
                            t.weekday = 4 === r ? "short" : 5 === r ? "narrow" : "short";
                            break;
                        case "e":
                            if (r < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
                            t.weekday = ["short", "long", "narrow", "short"][r - 4];
                            break;
                        case "c":
                            if (r < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
                            t.weekday = ["short", "long", "narrow", "short"][r - 4];
                            break;
                        case "a":
                            t.hour12 = !0;
                            break;
                        case "b":
                        case "B":
                            throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
                        case "h":
                            t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
                            break;
                        case "H":
                            t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
                            break;
                        case "K":
                            t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
                            break;
                        case "k":
                            t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
                            break;
                        case "j":
                        case "J":
                        case "C":
                            throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
                        case "m":
                            t.minute = ["numeric", "2-digit"][r - 1];
                            break;
                        case "s":
                            t.second = ["numeric", "2-digit"][r - 1];
                            break;
                        case "S":
                        case "A":
                            throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
                        case "z":
                            t.timeZoneName = r < 4 ? "short" : "long";
                            break;
                        case "Z":
                        case "O":
                        case "v":
                        case "V":
                        case "X":
                        case "x":
                            throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
                    }
                    return ""
                })), t
            }
            var A = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
            var B = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
                I = /^(@+)?(\+|#+)?[rs]?$/g,
                N = /(\*)(0+)|(#+)(0+)|(0+)/g,
                R = /^(0+)$/;

            function L(e) {
                var t = {};
                return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(I, (function(e, r, n) {
                    return "string" !== typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" === typeof n ? n.length : 0)), ""
                })), t
            }

            function P(e) {
                switch (e) {
                    case "sign-auto":
                        return {
                            signDisplay: "auto"
                        };
                    case "sign-accounting":
                    case "()":
                        return {
                            currencySign: "accounting"
                        };
                    case "sign-always":
                    case "+!":
                        return {
                            signDisplay: "always"
                        };
                    case "sign-accounting-always":
                    case "()!":
                        return {
                            signDisplay: "always",
                            currencySign: "accounting"
                        };
                    case "sign-except-zero":
                    case "+?":
                        return {
                            signDisplay: "exceptZero"
                        };
                    case "sign-accounting-except-zero":
                    case "()?":
                        return {
                            signDisplay: "exceptZero",
                            currencySign: "accounting"
                        };
                    case "sign-never":
                    case "+_":
                        return {
                            signDisplay: "never"
                        }
                }
            }

            function C(e) {
                var t;
                if ("E" === e[0] && "E" === e[1] ? (t = {
                        notation: "engineering"
                    }, e = e.slice(2)) : "E" === e[0] && (t = {
                        notation: "scientific"
                    }, e = e.slice(1)), t) {
                    var r = e.slice(0, 2);
                    if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !R.test(e)) throw new Error("Malformed concise eng/scientific notation");
                    t.minimumIntegerDigits = e.length
                }
                return t
            }

            function O(e) {
                var t = P(e);
                return t || {}
            }

            function M(e) {
                for (var t = {}, r = 0, n = e; r < n.length; r++) {
                    var i = n[r];
                    switch (i.stem) {
                        case "percent":
                        case "%":
                            t.style = "percent";
                            continue;
                        case "%x100":
                            t.style = "percent", t.scale = 100;
                            continue;
                        case "currency":
                            t.style = "currency", t.currency = i.options[0];
                            continue;
                        case "group-off":
                        case ",_":
                            t.useGrouping = !1;
                            continue;
                        case "precision-integer":
                        case ".":
                            t.maximumFractionDigits = 0;
                            continue;
                        case "measure-unit":
                        case "unit":
                            t.style = "unit", t.unit = i.options[0].replace(/^(.*?)-/, "");
                            continue;
                        case "compact-short":
                        case "K":
                            t.notation = "compact", t.compactDisplay = "short";
                            continue;
                        case "compact-long":
                        case "KK":
                            t.notation = "compact", t.compactDisplay = "long";
                            continue;
                        case "scientific":
                            t = (0, c.__assign)((0, c.__assign)((0, c.__assign)({}, t), {
                                notation: "scientific"
                            }), i.options.reduce((function(e, t) {
                                return (0, c.__assign)((0, c.__assign)({}, e), O(t))
                            }), {}));
                            continue;
                        case "engineering":
                            t = (0, c.__assign)((0, c.__assign)((0, c.__assign)({}, t), {
                                notation: "engineering"
                            }), i.options.reduce((function(e, t) {
                                return (0, c.__assign)((0, c.__assign)({}, e), O(t))
                            }), {}));
                            continue;
                        case "notation-simple":
                            t.notation = "standard";
                            continue;
                        case "unit-width-narrow":
                            t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
                            continue;
                        case "unit-width-short":
                            t.currencyDisplay = "code", t.unitDisplay = "short";
                            continue;
                        case "unit-width-full-name":
                            t.currencyDisplay = "name", t.unitDisplay = "long";
                            continue;
                        case "unit-width-iso-code":
                            t.currencyDisplay = "symbol";
                            continue;
                        case "scale":
                            t.scale = parseFloat(i.options[0]);
                            continue;
                        case "integer-width":
                            if (i.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
                            i.options[0].replace(N, (function(e, r, n, i, o, s) {
                                if (r) t.minimumIntegerDigits = n.length;
                                else {
                                    if (i && o) throw new Error("We currently do not support maximum integer digits");
                                    if (s) throw new Error("We currently do not support exact integer digits")
                                }
                                return ""
                            }));
                            continue
                    }
                    if (R.test(i.stem)) t.minimumIntegerDigits = i.stem.length;
                    else if (B.test(i.stem)) {
                        if (i.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
                        i.stem.replace(B, (function(e, r, n, i, o, s) {
                            return "*" === n ? t.minimumFractionDigits = r.length : i && "#" === i[0] ? t.maximumFractionDigits = i.length : o && s ? (t.minimumFractionDigits = o.length, t.maximumFractionDigits = o.length + s.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
                        }));
                        var o = i.options[0];
                        "w" === o ? t = (0, c.__assign)((0, c.__assign)({}, t), {
                            trailingZeroDisplay: "stripIfInteger"
                        }) : o && (t = (0, c.__assign)((0, c.__assign)({}, t), L(o)))
                    } else if (I.test(i.stem)) t = (0, c.__assign)((0, c.__assign)({}, t), L(i.stem));
                    else {
                        var s = P(i.stem);
                        s && (t = (0, c.__assign)((0, c.__assign)({}, t), s));
                        var a = C(i.stem);
                        a && (t = (0, c.__assign)((0, c.__assign)({}, t), a))
                    }
                }
                return t
            }
            var w, G = {
                AX: ["H"],
                BQ: ["H"],
                CP: ["H"],
                CZ: ["H"],
                DK: ["H"],
                FI: ["H"],
                ID: ["H"],
                IS: ["H"],
                ML: ["H"],
                NE: ["H"],
                RU: ["H"],
                SE: ["H"],
                SJ: ["H"],
                SK: ["H"],
                AS: ["h", "H"],
                BT: ["h", "H"],
                DJ: ["h", "H"],
                ER: ["h", "H"],
                GH: ["h", "H"],
                IN: ["h", "H"],
                LS: ["h", "H"],
                PG: ["h", "H"],
                PW: ["h", "H"],
                SO: ["h", "H"],
                TO: ["h", "H"],
                VU: ["h", "H"],
                WS: ["h", "H"],
                "001": ["H", "h"],
                AL: ["h", "H", "hB"],
                TD: ["h", "H", "hB"],
                "ca-ES": ["H", "h", "hB"],
                CF: ["H", "h", "hB"],
                CM: ["H", "h", "hB"],
                "fr-CA": ["H", "h", "hB"],
                "gl-ES": ["H", "h", "hB"],
                "it-CH": ["H", "h", "hB"],
                "it-IT": ["H", "h", "hB"],
                LU: ["H", "h", "hB"],
                NP: ["H", "h", "hB"],
                PF: ["H", "h", "hB"],
                SC: ["H", "h", "hB"],
                SM: ["H", "h", "hB"],
                SN: ["H", "h", "hB"],
                TF: ["H", "h", "hB"],
                VA: ["H", "h", "hB"],
                CY: ["h", "H", "hb", "hB"],
                GR: ["h", "H", "hb", "hB"],
                CO: ["h", "H", "hB", "hb"],
                DO: ["h", "H", "hB", "hb"],
                KP: ["h", "H", "hB", "hb"],
                KR: ["h", "H", "hB", "hb"],
                NA: ["h", "H", "hB", "hb"],
                PA: ["h", "H", "hB", "hb"],
                PR: ["h", "H", "hB", "hb"],
                VE: ["h", "H", "hB", "hb"],
                AC: ["H", "h", "hb", "hB"],
                AI: ["H", "h", "hb", "hB"],
                BW: ["H", "h", "hb", "hB"],
                BZ: ["H", "h", "hb", "hB"],
                CC: ["H", "h", "hb", "hB"],
                CK: ["H", "h", "hb", "hB"],
                CX: ["H", "h", "hb", "hB"],
                DG: ["H", "h", "hb", "hB"],
                FK: ["H", "h", "hb", "hB"],
                GB: ["H", "h", "hb", "hB"],
                GG: ["H", "h", "hb", "hB"],
                GI: ["H", "h", "hb", "hB"],
                IE: ["H", "h", "hb", "hB"],
                IM: ["H", "h", "hb", "hB"],
                IO: ["H", "h", "hb", "hB"],
                JE: ["H", "h", "hb", "hB"],
                LT: ["H", "h", "hb", "hB"],
                MK: ["H", "h", "hb", "hB"],
                MN: ["H", "h", "hb", "hB"],
                MS: ["H", "h", "hb", "hB"],
                NF: ["H", "h", "hb", "hB"],
                NG: ["H", "h", "hb", "hB"],
                NR: ["H", "h", "hb", "hB"],
                NU: ["H", "h", "hb", "hB"],
                PN: ["H", "h", "hb", "hB"],
                SH: ["H", "h", "hb", "hB"],
                SX: ["H", "h", "hb", "hB"],
                TA: ["H", "h", "hb", "hB"],
                ZA: ["H", "h", "hb", "hB"],
                "af-ZA": ["H", "h", "hB", "hb"],
                AR: ["H", "h", "hB", "hb"],
                CL: ["H", "h", "hB", "hb"],
                CR: ["H", "h", "hB", "hb"],
                CU: ["H", "h", "hB", "hb"],
                EA: ["H", "h", "hB", "hb"],
                "es-BO": ["H", "h", "hB", "hb"],
                "es-BR": ["H", "h", "hB", "hb"],
                "es-EC": ["H", "h", "hB", "hb"],
                "es-ES": ["H", "h", "hB", "hb"],
                "es-GQ": ["H", "h", "hB", "hb"],
                "es-PE": ["H", "h", "hB", "hb"],
                GT: ["H", "h", "hB", "hb"],
                HN: ["H", "h", "hB", "hb"],
                IC: ["H", "h", "hB", "hb"],
                KG: ["H", "h", "hB", "hb"],
                KM: ["H", "h", "hB", "hb"],
                LK: ["H", "h", "hB", "hb"],
                MA: ["H", "h", "hB", "hb"],
                MX: ["H", "h", "hB", "hb"],
                NI: ["H", "h", "hB", "hb"],
                PY: ["H", "h", "hB", "hb"],
                SV: ["H", "h", "hB", "hb"],
                UY: ["H", "h", "hB", "hb"],
                JP: ["H", "h", "K"],
                AD: ["H", "hB"],
                AM: ["H", "hB"],
                AO: ["H", "hB"],
                AT: ["H", "hB"],
                AW: ["H", "hB"],
                BE: ["H", "hB"],
                BF: ["H", "hB"],
                BJ: ["H", "hB"],
                BL: ["H", "hB"],
                BR: ["H", "hB"],
                CG: ["H", "hB"],
                CI: ["H", "hB"],
                CV: ["H", "hB"],
                DE: ["H", "hB"],
                EE: ["H", "hB"],
                FR: ["H", "hB"],
                GA: ["H", "hB"],
                GF: ["H", "hB"],
                GN: ["H", "hB"],
                GP: ["H", "hB"],
                GW: ["H", "hB"],
                HR: ["H", "hB"],
                IL: ["H", "hB"],
                IT: ["H", "hB"],
                KZ: ["H", "hB"],
                MC: ["H", "hB"],
                MD: ["H", "hB"],
                MF: ["H", "hB"],
                MQ: ["H", "hB"],
                MZ: ["H", "hB"],
                NC: ["H", "hB"],
                NL: ["H", "hB"],
                PM: ["H", "hB"],
                PT: ["H", "hB"],
                RE: ["H", "hB"],
                RO: ["H", "hB"],
                SI: ["H", "hB"],
                SR: ["H", "hB"],
                ST: ["H", "hB"],
                TG: ["H", "hB"],
                TR: ["H", "hB"],
                WF: ["H", "hB"],
                YT: ["H", "hB"],
                BD: ["h", "hB", "H"],
                PK: ["h", "hB", "H"],
                AZ: ["H", "hB", "h"],
                BA: ["H", "hB", "h"],
                BG: ["H", "hB", "h"],
                CH: ["H", "hB", "h"],
                GE: ["H", "hB", "h"],
                LI: ["H", "hB", "h"],
                ME: ["H", "hB", "h"],
                RS: ["H", "hB", "h"],
                UA: ["H", "hB", "h"],
                UZ: ["H", "hB", "h"],
                XK: ["H", "hB", "h"],
                AG: ["h", "hb", "H", "hB"],
                AU: ["h", "hb", "H", "hB"],
                BB: ["h", "hb", "H", "hB"],
                BM: ["h", "hb", "H", "hB"],
                BS: ["h", "hb", "H", "hB"],
                CA: ["h", "hb", "H", "hB"],
                DM: ["h", "hb", "H", "hB"],
                "en-001": ["h", "hb", "H", "hB"],
                FJ: ["h", "hb", "H", "hB"],
                FM: ["h", "hb", "H", "hB"],
                GD: ["h", "hb", "H", "hB"],
                GM: ["h", "hb", "H", "hB"],
                GU: ["h", "hb", "H", "hB"],
                GY: ["h", "hb", "H", "hB"],
                JM: ["h", "hb", "H", "hB"],
                KI: ["h", "hb", "H", "hB"],
                KN: ["h", "hb", "H", "hB"],
                KY: ["h", "hb", "H", "hB"],
                LC: ["h", "hb", "H", "hB"],
                LR: ["h", "hb", "H", "hB"],
                MH: ["h", "hb", "H", "hB"],
                MP: ["h", "hb", "H", "hB"],
                MW: ["h", "hb", "H", "hB"],
                NZ: ["h", "hb", "H", "hB"],
                SB: ["h", "hb", "H", "hB"],
                SG: ["h", "hb", "H", "hB"],
                SL: ["h", "hb", "H", "hB"],
                SS: ["h", "hb", "H", "hB"],
                SZ: ["h", "hb", "H", "hB"],
                TC: ["h", "hb", "H", "hB"],
                TT: ["h", "hb", "H", "hB"],
                UM: ["h", "hb", "H", "hB"],
                US: ["h", "hb", "H", "hB"],
                VC: ["h", "hb", "H", "hB"],
                VG: ["h", "hb", "H", "hB"],
                VI: ["h", "hb", "H", "hB"],
                ZM: ["h", "hb", "H", "hB"],
                BO: ["H", "hB", "h", "hb"],
                EC: ["H", "hB", "h", "hb"],
                ES: ["H", "hB", "h", "hb"],
                GQ: ["H", "hB", "h", "hb"],
                PE: ["H", "hB", "h", "hb"],
                AE: ["h", "hB", "hb", "H"],
                "ar-001": ["h", "hB", "hb", "H"],
                BH: ["h", "hB", "hb", "H"],
                DZ: ["h", "hB", "hb", "H"],
                EG: ["h", "hB", "hb", "H"],
                EH: ["h", "hB", "hb", "H"],
                HK: ["h", "hB", "hb", "H"],
                IQ: ["h", "hB", "hb", "H"],
                JO: ["h", "hB", "hb", "H"],
                KW: ["h", "hB", "hb", "H"],
                LB: ["h", "hB", "hb", "H"],
                LY: ["h", "hB", "hb", "H"],
                MO: ["h", "hB", "hb", "H"],
                MR: ["h", "hB", "hb", "H"],
                OM: ["h", "hB", "hb", "H"],
                PH: ["h", "hB", "hb", "H"],
                PS: ["h", "hB", "hb", "H"],
                QA: ["h", "hB", "hb", "H"],
                SA: ["h", "hB", "hb", "H"],
                SD: ["h", "hB", "hb", "H"],
                SY: ["h", "hB", "hb", "H"],
                TN: ["h", "hB", "hb", "H"],
                YE: ["h", "hB", "hb", "H"],
                AF: ["H", "hb", "hB", "h"],
                LA: ["H", "hb", "hB", "h"],
                CN: ["H", "hB", "hb", "h"],
                LV: ["H", "hB", "hb", "h"],
                TL: ["H", "hB", "hb", "h"],
                "zu-ZA": ["H", "hB", "hb", "h"],
                CD: ["hB", "H"],
                IR: ["hB", "H"],
                "hi-IN": ["hB", "h", "H"],
                "kn-IN": ["hB", "h", "H"],
                "ml-IN": ["hB", "h", "H"],
                "te-IN": ["hB", "h", "H"],
                KH: ["hB", "h", "H", "hb"],
                "ta-IN": ["hB", "h", "hb", "H"],
                BN: ["hb", "hB", "h", "H"],
                MY: ["hb", "hB", "h", "H"],
                ET: ["hB", "hb", "h", "H"],
                "gu-IN": ["hB", "hb", "h", "H"],
                "mr-IN": ["hB", "hb", "h", "H"],
                "pa-IN": ["hB", "hb", "h", "H"],
                TW: ["hB", "hb", "h", "H"],
                KE: ["hB", "hb", "H", "h"],
                MM: ["hB", "hb", "H", "h"],
                TZ: ["hB", "hb", "H", "h"],
                UG: ["hB", "hb", "H", "h"]
            };

            function U(e) {
                var t = e.hourCycle;
                if (void 0 === t && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
                    case "h24":
                        return "k";
                    case "h23":
                        return "H";
                    case "h12":
                        return "h";
                    case "h11":
                        return "K";
                    default:
                        throw new Error("Invalid hourCycle")
                }
                var r, n = e.language;
                return "root" !== n && (r = e.maximize().region), (G[r || ""] || G[n || ""] || G["".concat(n, "-001")] || G["001"])[0]
            }
            var F = new RegExp("^".concat(S.source, "*")),
                D = new RegExp("".concat(S.source, "*$"));

            function k(e, t) {
                return {
                    start: e,
                    end: t
                }
            }
            var j = !!String.prototype.startsWith,
                V = !!String.fromCodePoint,
                x = !!Object.fromEntries,
                z = !!String.prototype.codePointAt,
                X = !!String.prototype.trimStart,
                K = !!String.prototype.trimEnd,
                Y = !!Number.isSafeInteger ? Number.isSafeInteger : function(e) {
                    return "number" === typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
                },
                Z = !0;
            try {
                Z = "a" === (null === (w = re("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === w ? void 0 : w[0])
            } catch (De) {
                Z = !1
            }
            var W, q = j ? function(e, t, r) {
                    return e.startsWith(t, r)
                } : function(e, t, r) {
                    return e.slice(r, r + t.length) === t
                },
                Q = V ? String.fromCodePoint : function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    for (var r, n = "", i = e.length, o = 0; i > o;) {
                        if ((r = e[o++]) > 1114111) throw RangeError(r + " is not a valid code point");
                        n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
                    }
                    return n
                },
                J = x ? Object.fromEntries : function(e) {
                    for (var t = {}, r = 0, n = e; r < n.length; r++) {
                        var i = n[r],
                            o = i[0],
                            s = i[1];
                        t[o] = s
                    }
                    return t
                },
                $ = z ? function(e, t) {
                    return e.codePointAt(t)
                } : function(e, t) {
                    var r = e.length;
                    if (!(t < 0 || t >= r)) {
                        var n, i = e.charCodeAt(t);
                        return i < 55296 || i > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? i : n - 56320 + (i - 55296 << 10) + 65536
                    }
                },
                ee = X ? function(e) {
                    return e.trimStart()
                } : function(e) {
                    return e.replace(F, "")
                },
                te = K ? function(e) {
                    return e.trimEnd()
                } : function(e) {
                    return e.replace(D, "")
                };

            function re(e, t) {
                return new RegExp(e, t)
            }
            if (Z) {
                var ne = re("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
                W = function(e, t) {
                    var r;
                    return ne.lastIndex = t, null !== (r = ne.exec(e)[1]) && void 0 !== r ? r : ""
                }
            } else W = function(e, t) {
                for (var r = [];;) {
                    var n = $(e, t);
                    if (void 0 === n || se(n) || ae(n)) break;
                    r.push(n), t += n >= 65536 ? 2 : 1
                }
                return Q.apply(void 0, r)
            };
            var ie = function() {
                function e(e, t) {
                    void 0 === t && (t = {}), this.message = e, this.position = {
                        offset: 0,
                        line: 1,
                        column: 1
                    }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
                }
                return e.prototype.parse = function() {
                    if (0 !== this.offset()) throw Error("parser can only be used once");
                    return this.parseMessage(0, "", !1)
                }, e.prototype.parseMessage = function(e, t, r) {
                    for (var n = []; !this.isEOF();) {
                        var i = this.char();
                        if (123 === i) {
                            if ((o = this.parseArgument(e, r)).err) return o;
                            n.push(o.val)
                        } else {
                            if (125 === i && e > 0) break;
                            if (35 !== i || "plural" !== t && "selectordinal" !== t) {
                                if (60 === i && !this.ignoreTag && 47 === this.peek()) {
                                    if (r) break;
                                    return this.error(s.UNMATCHED_CLOSING_TAG, k(this.clonePosition(), this.clonePosition()))
                                }
                                if (60 === i && !this.ignoreTag && oe(this.peek() || 0)) {
                                    if ((o = this.parseTag(e, t)).err) return o;
                                    n.push(o.val)
                                } else {
                                    var o;
                                    if ((o = this.parseLiteral(e, t)).err) return o;
                                    n.push(o.val)
                                }
                            } else {
                                var h = this.clonePosition();
                                this.bump(), n.push({
                                    type: a.pound,
                                    location: k(h, this.clonePosition())
                                })
                            }
                        }
                    }
                    return {
                        val: n,
                        err: null
                    }
                }, e.prototype.parseTag = function(e, t) {
                    var r = this.clonePosition();
                    this.bump();
                    var n = this.parseTagName();
                    if (this.bumpSpace(), this.bumpIf("/>")) return {
                        val: {
                            type: a.literal,
                            value: "<".concat(n, "/>"),
                            location: k(r, this.clonePosition())
                        },
                        err: null
                    };
                    if (this.bumpIf(">")) {
                        var i = this.parseMessage(e + 1, t, !0);
                        if (i.err) return i;
                        var o = i.val,
                            h = this.clonePosition();
                        if (this.bumpIf("</")) {
                            if (this.isEOF() || !oe(this.char())) return this.error(s.INVALID_TAG, k(h, this.clonePosition()));
                            var u = this.clonePosition();
                            return n !== this.parseTagName() ? this.error(s.UNMATCHED_CLOSING_TAG, k(u, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                                val: {
                                    type: a.tag,
                                    value: n,
                                    children: o,
                                    location: k(r, this.clonePosition())
                                },
                                err: null
                            } : this.error(s.INVALID_TAG, k(h, this.clonePosition())))
                        }
                        return this.error(s.UNCLOSED_TAG, k(r, this.clonePosition()))
                    }
                    return this.error(s.INVALID_TAG, k(r, this.clonePosition()))
                }, e.prototype.parseTagName = function() {
                    var e, t = this.offset();
                    for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
                    return this.message.slice(t, this.offset())
                }, e.prototype.parseLiteral = function(e, t) {
                    for (var r = this.clonePosition(), n = "";;) {
                        var i = this.tryParseQuote(t);
                        if (i) n += i;
                        else {
                            var o = this.tryParseUnquoted(e, t);
                            if (o) n += o;
                            else {
                                var s = this.tryParseLeftAngleBracket();
                                if (!s) break;
                                n += s
                            }
                        }
                    }
                    var h = k(r, this.clonePosition());
                    return {
                        val: {
                            type: a.literal,
                            value: n,
                            location: h
                        },
                        err: null
                    }
                }, e.prototype.tryParseLeftAngleBracket = function() {
                    return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (oe(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
                    var e
                }, e.prototype.tryParseQuote = function(e) {
                    if (this.isEOF() || 39 !== this.char()) return null;
                    switch (this.peek()) {
                        case 39:
                            return this.bump(), this.bump(), "'";
                        case 123:
                        case 60:
                        case 62:
                        case 125:
                            break;
                        case 35:
                            if ("plural" === e || "selectordinal" === e) break;
                            return null;
                        default:
                            return null
                    }
                    this.bump();
                    var t = [this.char()];
                    for (this.bump(); !this.isEOF();) {
                        var r = this.char();
                        if (39 === r) {
                            if (39 !== this.peek()) {
                                this.bump();
                                break
                            }
                            t.push(39), this.bump()
                        } else t.push(r);
                        this.bump()
                    }
                    return Q.apply(void 0, t)
                }, e.prototype.tryParseUnquoted = function(e, t) {
                    if (this.isEOF()) return null;
                    var r = this.char();
                    return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), Q(r))
                }, e.prototype.parseArgument = function(e, t) {
                    var r = this.clonePosition();
                    if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(s.EXPECT_ARGUMENT_CLOSING_BRACE, k(r, this.clonePosition()));
                    if (125 === this.char()) return this.bump(), this.error(s.EMPTY_ARGUMENT, k(r, this.clonePosition()));
                    var n = this.parseIdentifierIfPossible().value;
                    if (!n) return this.error(s.MALFORMED_ARGUMENT, k(r, this.clonePosition()));
                    if (this.bumpSpace(), this.isEOF()) return this.error(s.EXPECT_ARGUMENT_CLOSING_BRACE, k(r, this.clonePosition()));
                    switch (this.char()) {
                        case 125:
                            return this.bump(), {
                                val: {
                                    type: a.argument,
                                    value: n,
                                    location: k(r, this.clonePosition())
                                },
                                err: null
                            };
                        case 44:
                            return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(s.EXPECT_ARGUMENT_CLOSING_BRACE, k(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
                        default:
                            return this.error(s.MALFORMED_ARGUMENT, k(r, this.clonePosition()))
                    }
                }, e.prototype.parseIdentifierIfPossible = function() {
                    var e = this.clonePosition(),
                        t = this.offset(),
                        r = W(this.message, t),
                        n = t + r.length;
                    return this.bumpTo(n), {
                        value: r,
                        location: k(e, this.clonePosition())
                    }
                }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
                    var i, o = this.clonePosition(),
                        u = this.parseIdentifierIfPossible().value,
                        l = this.clonePosition();
                    switch (u) {
                        case "":
                            return this.error(s.EXPECT_ARGUMENT_TYPE, k(o, l));
                        case "number":
                        case "date":
                        case "time":
                            this.bumpSpace();
                            var f = null;
                            if (this.bumpIf(",")) {
                                this.bumpSpace();
                                var p = this.clonePosition();
                                if ((b = this.parseSimpleArgStyleIfPossible()).err) return b;
                                if (0 === (_ = te(b.val)).length) return this.error(s.EXPECT_ARGUMENT_STYLE, k(this.clonePosition(), this.clonePosition()));
                                f = {
                                    style: _,
                                    styleLocation: k(p, this.clonePosition())
                                }
                            }
                            if ((S = this.tryParseArgumentClose(n)).err) return S;
                            var m = k(n, this.clonePosition());
                            if (f && q(null === f || void 0 === f ? void 0 : f.style, "::", 0)) {
                                var E = ee(f.style.slice(2));
                                if ("number" === u) return (b = this.parseNumberSkeletonFromString(E, f.styleLocation)).err ? b : {
                                    val: {
                                        type: a.number,
                                        value: r,
                                        location: m,
                                        style: b.val
                                    },
                                    err: null
                                };
                                if (0 === E.length) return this.error(s.EXPECT_DATE_TIME_SKELETON, m);
                                var g = E;
                                this.locale && (g = function(e, t) {
                                    for (var r = "", n = 0; n < e.length; n++) {
                                        var i = e.charAt(n);
                                        if ("j" === i) {
                                            for (var o = 0; n + 1 < e.length && e.charAt(n + 1) === i;) o++, n++;
                                            var s = 1 + (1 & o),
                                                a = o < 2 ? 1 : 3 + (o >> 1),
                                                h = U(t);
                                            for ("H" != h && "k" != h || (a = 0); a-- > 0;) r += "a";
                                            for (; s-- > 0;) r = h + r
                                        } else r += "J" === i ? "H" : i
                                    }
                                    return r
                                }(E, this.locale));
                                var _ = {
                                    type: h.dateTime,
                                    pattern: g,
                                    location: f.styleLocation,
                                    parsedOptions: this.shouldParseSkeletons ? H(g) : {}
                                };
                                return {
                                    val: {
                                        type: "date" === u ? a.date : a.time,
                                        value: r,
                                        location: m,
                                        style: _
                                    },
                                    err: null
                                }
                            }
                            return {
                                val: {
                                    type: "number" === u ? a.number : "date" === u ? a.date : a.time,
                                    value: r,
                                    location: m,
                                    style: null !== (i = null === f || void 0 === f ? void 0 : f.style) && void 0 !== i ? i : null
                                },
                                err: null
                            };
                        case "plural":
                        case "selectordinal":
                        case "select":
                            var d = this.clonePosition();
                            if (this.bumpSpace(), !this.bumpIf(",")) return this.error(s.EXPECT_SELECT_ARGUMENT_OPTIONS, k(d, (0, c.__assign)({}, d)));
                            this.bumpSpace();
                            var v = this.parseIdentifierIfPossible(),
                                y = 0;
                            if ("select" !== u && "offset" === v.value) {
                                if (!this.bumpIf(":")) return this.error(s.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, k(this.clonePosition(), this.clonePosition()));
                                var b;
                                if (this.bumpSpace(), (b = this.tryParseDecimalInteger(s.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, s.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return b;
                                this.bumpSpace(), v = this.parseIdentifierIfPossible(), y = b.val
                            }
                            var S, T = this.tryParsePluralOrSelectOptions(e, u, t, v);
                            if (T.err) return T;
                            if ((S = this.tryParseArgumentClose(n)).err) return S;
                            var A = k(n, this.clonePosition());
                            return "select" === u ? {
                                val: {
                                    type: a.select,
                                    value: r,
                                    options: J(T.val),
                                    location: A
                                },
                                err: null
                            } : {
                                val: {
                                    type: a.plural,
                                    value: r,
                                    options: J(T.val),
                                    offset: y,
                                    pluralType: "plural" === u ? "cardinal" : "ordinal",
                                    location: A
                                },
                                err: null
                            };
                        default:
                            return this.error(s.INVALID_ARGUMENT_TYPE, k(o, l))
                    }
                }, e.prototype.tryParseArgumentClose = function(e) {
                    return this.isEOF() || 125 !== this.char() ? this.error(s.EXPECT_ARGUMENT_CLOSING_BRACE, k(e, this.clonePosition())) : (this.bump(), {
                        val: !0,
                        err: null
                    })
                }, e.prototype.parseSimpleArgStyleIfPossible = function() {
                    for (var e = 0, t = this.clonePosition(); !this.isEOF();) {
                        switch (this.char()) {
                            case 39:
                                this.bump();
                                var r = this.clonePosition();
                                if (!this.bumpUntil("'")) return this.error(s.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, k(r, this.clonePosition()));
                                this.bump();
                                break;
                            case 123:
                                e += 1, this.bump();
                                break;
                            case 125:
                                if (!(e > 0)) return {
                                    val: this.message.slice(t.offset, this.offset()),
                                    err: null
                                };
                                e -= 1;
                                break;
                            default:
                                this.bump()
                        }
                    }
                    return {
                        val: this.message.slice(t.offset, this.offset()),
                        err: null
                    }
                }, e.prototype.parseNumberSkeletonFromString = function(e, t) {
                    var r = [];
                    try {
                        r = function(e) {
                            if (0 === e.length) throw new Error("Number skeleton cannot be empty");
                            for (var t = [], r = 0, n = e.split(A).filter((function(e) {
                                    return e.length > 0
                                })); r < n.length; r++) {
                                var i = n[r].split("/");
                                if (0 === i.length) throw new Error("Invalid number skeleton");
                                for (var o = i[0], s = i.slice(1), a = 0, h = s; a < h.length; a++)
                                    if (0 === h[a].length) throw new Error("Invalid number skeleton");
                                t.push({
                                    stem: o,
                                    options: s
                                })
                            }
                            return t
                        }(e)
                    } catch (n) {
                        return this.error(s.INVALID_NUMBER_SKELETON, t)
                    }
                    return {
                        val: {
                            type: h.number,
                            tokens: r,
                            location: t,
                            parsedOptions: this.shouldParseSkeletons ? M(r) : {}
                        },
                        err: null
                    }
                }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
                    for (var i, o = !1, a = [], h = new Set, u = n.value, c = n.location;;) {
                        if (0 === u.length) {
                            var l = this.clonePosition();
                            if ("select" === t || !this.bumpIf("=")) break;
                            var f = this.tryParseDecimalInteger(s.EXPECT_PLURAL_ARGUMENT_SELECTOR, s.INVALID_PLURAL_ARGUMENT_SELECTOR);
                            if (f.err) return f;
                            c = k(l, this.clonePosition()), u = this.message.slice(l.offset, this.offset())
                        }
                        if (h.has(u)) return this.error("select" === t ? s.DUPLICATE_SELECT_ARGUMENT_SELECTOR : s.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
                        "other" === u && (o = !0), this.bumpSpace();
                        var p = this.clonePosition();
                        if (!this.bumpIf("{")) return this.error("select" === t ? s.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : s.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, k(this.clonePosition(), this.clonePosition()));
                        var m = this.parseMessage(e + 1, t, r);
                        if (m.err) return m;
                        var E = this.tryParseArgumentClose(p);
                        if (E.err) return E;
                        a.push([u, {
                            value: m.val,
                            location: k(p, this.clonePosition())
                        }]), h.add(u), this.bumpSpace(), u = (i = this.parseIdentifierIfPossible()).value, c = i.location
                    }
                    return 0 === a.length ? this.error("select" === t ? s.EXPECT_SELECT_ARGUMENT_SELECTOR : s.EXPECT_PLURAL_ARGUMENT_SELECTOR, k(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(s.MISSING_OTHER_CLAUSE, k(this.clonePosition(), this.clonePosition())) : {
                        val: a,
                        err: null
                    }
                }, e.prototype.tryParseDecimalInteger = function(e, t) {
                    var r = 1,
                        n = this.clonePosition();
                    this.bumpIf("+") || this.bumpIf("-") && (r = -1);
                    for (var i = !1, o = 0; !this.isEOF();) {
                        var s = this.char();
                        if (!(s >= 48 && s <= 57)) break;
                        i = !0, o = 10 * o + (s - 48), this.bump()
                    }
                    var a = k(n, this.clonePosition());
                    return i ? Y(o *= r) ? {
                        val: o,
                        err: null
                    } : this.error(t, a) : this.error(e, a)
                }, e.prototype.offset = function() {
                    return this.position.offset
                }, e.prototype.isEOF = function() {
                    return this.offset() === this.message.length
                }, e.prototype.clonePosition = function() {
                    return {
                        offset: this.position.offset,
                        line: this.position.line,
                        column: this.position.column
                    }
                }, e.prototype.char = function() {
                    var e = this.position.offset;
                    if (e >= this.message.length) throw Error("out of bound");
                    var t = $(this.message, e);
                    if (void 0 === t) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
                    return t
                }, e.prototype.error = function(e, t) {
                    return {
                        val: null,
                        err: {
                            kind: e,
                            message: this.message,
                            location: t
                        }
                    }
                }, e.prototype.bump = function() {
                    if (!this.isEOF()) {
                        var e = this.char();
                        10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2)
                    }
                }, e.prototype.bumpIf = function(e) {
                    if (q(this.message, e, this.offset())) {
                        for (var t = 0; t < e.length; t++) this.bump();
                        return !0
                    }
                    return !1
                }, e.prototype.bumpUntil = function(e) {
                    var t = this.offset(),
                        r = this.message.indexOf(e, t);
                    return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1)
                }, e.prototype.bumpTo = function(e) {
                    if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
                    for (e = Math.min(e, this.message.length);;) {
                        var t = this.offset();
                        if (t === e) break;
                        if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
                        if (this.bump(), this.isEOF()) break
                    }
                }, e.prototype.bumpSpace = function() {
                    for (; !this.isEOF() && se(this.char());) this.bump()
                }, e.prototype.peek = function() {
                    if (this.isEOF()) return null;
                    var e = this.char(),
                        t = this.offset(),
                        r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
                    return null !== r && void 0 !== r ? r : null
                }, e
            }();

            function oe(e) {
                return e >= 97 && e <= 122 || e >= 65 && e <= 90
            }

            function se(e) {
                return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
            }

            function ae(e) {
                return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
            }

            function he(e) {
                e.forEach((function(e) {
                    if (delete e.location, g(e) || _(e))
                        for (var t in e.options) delete e.options[t].location, he(e.options[t].value);
                    else p(e) && y(e.style) || (m(e) || E(e)) && b(e.style) ? delete e.style.location : v(e) && he(e.children)
                }))
            }

            function ue(e, t) {
                void 0 === t && (t = {}), t = (0, c.__assign)({
                    shouldParseSkeletons: !0,
                    requiresOtherClause: !0
                }, t);
                var r = new ie(e, t).parse();
                if (r.err) {
                    var n = SyntaxError(s[r.err.kind]);
                    throw n.location = r.err.location, n.originalMessage = r.err.message, n
                }
                return (null === t || void 0 === t ? void 0 : t.captureLocation) || he(r.val), r.val
            }

            function ce(e, t) {
                var r = t && t.cache ? t.cache : de,
                    n = t && t.serializer ? t.serializer : Ee;
                return (t && t.strategy ? t.strategy : me)(e, {
                    cache: r,
                    serializer: n
                })
            }

            function le(e, t, r, n) {
                var i, o = null == (i = n) || "number" === typeof i || "boolean" === typeof i ? n : r(n),
                    s = t.get(o);
                return "undefined" === typeof s && (s = e.call(this, n), t.set(o, s)), s
            }

            function fe(e, t, r) {
                var n = Array.prototype.slice.call(arguments, 3),
                    i = r(n),
                    o = t.get(i);
                return "undefined" === typeof o && (o = e.apply(this, n), t.set(i, o)), o
            }

            function pe(e, t, r, n, i) {
                return r.bind(t, e, n, i)
            }

            function me(e, t) {
                return pe(e, this, 1 === e.length ? le : fe, t.cache.create(), t.serializer)
            }
            var Ee = function() {
                return JSON.stringify(arguments)
            };

            function ge() {
                this.cache = Object.create(null)
            }
            ge.prototype.get = function(e) {
                return this.cache[e]
            }, ge.prototype.set = function(e, t) {
                this.cache[e] = t
            };
            var _e, de = {
                    create: function() {
                        return new ge
                    }
                },
                ve = {
                    variadic: function(e, t) {
                        return pe(e, this, fe, t.cache.create(), t.serializer)
                    },
                    monadic: function(e, t) {
                        return pe(e, this, le, t.cache.create(), t.serializer)
                    }
                };
            ! function(e) {
                e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API"
            }(_e || (_e = {}));
            var ye, be = function(e) {
                    function t(t, r, n) {
                        var i = e.call(this, t) || this;
                        return i.code = r, i.originalMessage = n, i
                    }
                    return (0, c.__extends)(t, e), t.prototype.toString = function() {
                        return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
                    }, t
                }(Error),
                Se = function(e) {
                    function t(t, r, n, i) {
                        return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(n).join('", "'), '"'), _e.INVALID_VALUE, i) || this
                    }
                    return (0, c.__extends)(t, e), t
                }(be),
                Te = function(e) {
                    function t(t, r, n) {
                        return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), _e.INVALID_VALUE, n) || this
                    }
                    return (0, c.__extends)(t, e), t
                }(be),
                He = function(e) {
                    function t(t, r) {
                        return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), _e.MISSING_VALUE, r) || this
                    }
                    return (0, c.__extends)(t, e), t
                }(be);

            function Ae(e) {
                return "function" === typeof e
            }

            function Be(e, t, r, n, i, o, s) {
                if (1 === e.length && l(e[0])) return [{
                    type: ye.literal,
                    value: e[0].value
                }];
                for (var a = [], h = 0, u = e; h < u.length; h++) {
                    var c = u[h];
                    if (l(c)) a.push({
                        type: ye.literal,
                        value: c.value
                    });
                    else if (d(c)) "number" === typeof o && a.push({
                        type: ye.literal,
                        value: r.getNumberFormat(t).format(o)
                    });
                    else {
                        var S = c.value;
                        if (!i || !(S in i)) throw new He(S, s);
                        var T = i[S];
                        if (f(c)) T && "string" !== typeof T && "number" !== typeof T || (T = "string" === typeof T || "number" === typeof T ? String(T) : ""), a.push({
                            type: "string" === typeof T ? ye.literal : ye.object,
                            value: T
                        });
                        else if (m(c)) {
                            var H = "string" === typeof c.style ? n.date[c.style] : b(c.style) ? c.style.parsedOptions : void 0;
                            a.push({
                                type: ye.literal,
                                value: r.getDateTimeFormat(t, H).format(T)
                            })
                        } else if (E(c)) {
                            H = "string" === typeof c.style ? n.time[c.style] : b(c.style) ? c.style.parsedOptions : n.time.medium;
                            a.push({
                                type: ye.literal,
                                value: r.getDateTimeFormat(t, H).format(T)
                            })
                        } else if (p(c)) {
                            (H = "string" === typeof c.style ? n.number[c.style] : y(c.style) ? c.style.parsedOptions : void 0) && H.scale && (T *= H.scale || 1), a.push({
                                type: ye.literal,
                                value: r.getNumberFormat(t, H).format(T)
                            })
                        } else {
                            if (v(c)) {
                                var A = c.children,
                                    B = c.value,
                                    I = i[B];
                                if (!Ae(I)) throw new Te(B, "function", s);
                                var N = I(Be(A, t, r, n, i, o).map((function(e) {
                                    return e.value
                                })));
                                Array.isArray(N) || (N = [N]), a.push.apply(a, N.map((function(e) {
                                    return {
                                        type: "string" === typeof e ? ye.literal : ye.object,
                                        value: e
                                    }
                                })))
                            }
                            if (g(c)) {
                                if (!(R = c.options[T] || c.options.other)) throw new Se(c.value, T, Object.keys(c.options), s);
                                a.push.apply(a, Be(R.value, t, r, n, i))
                            } else if (_(c)) {
                                var R;
                                if (!(R = c.options["=".concat(T)])) {
                                    if (!Intl.PluralRules) throw new be('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', _e.MISSING_INTL_API, s);
                                    var L = r.getPluralRules(t, {
                                        type: c.pluralType
                                    }).select(T - (c.offset || 0));
                                    R = c.options[L] || c.options.other
                                }
                                if (!R) throw new Se(c.value, T, Object.keys(c.options), s);
                                a.push.apply(a, Be(R.value, t, r, n, i, T - (c.offset || 0)))
                            } else;
                        }
                    }
                }
                return function(e) {
                    return e.length < 2 ? e : e.reduce((function(e, t) {
                        var r = e[e.length - 1];
                        return r && r.type === ye.literal && t.type === ye.literal ? r.value += t.value : e.push(t), e
                    }), [])
                }(a)
            }

            function Ie(e, t) {
                return t ? Object.keys(e).reduce((function(r, n) {
                    var i, o;
                    return r[n] = (i = e[n], (o = t[n]) ? (0, c.__assign)((0, c.__assign)((0, c.__assign)({}, i || {}), o || {}), Object.keys(i).reduce((function(e, t) {
                        return e[t] = (0, c.__assign)((0, c.__assign)({}, i[t]), o[t] || {}), e
                    }), {})) : i), r
                }), (0, c.__assign)({}, e)) : e
            }

            function Ne(e) {
                return {
                    create: function() {
                        return {
                            get: function(t) {
                                return e[t]
                            },
                            set: function(t, r) {
                                e[t] = r
                            }
                        }
                    }
                }
            }! function(e) {
                e[e.literal = 0] = "literal", e[e.object = 1] = "object"
            }(ye || (ye = {}));
            var Re, Le = function() {
                    function e(t, r, n, i) {
                        var o, s = this;
                        if (void 0 === r && (r = e.defaultLocale), this.formatterCache = {
                                number: {},
                                dateTime: {},
                                pluralRules: {}
                            }, this.format = function(e) {
                                var t = s.formatToParts(e);
                                if (1 === t.length) return t[0].value;
                                var r = t.reduce((function(e, t) {
                                    return e.length && t.type === ye.literal && "string" === typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
                                }), []);
                                return r.length <= 1 ? r[0] || "" : r
                            }, this.formatToParts = function(e) {
                                return Be(s.ast, s.locales, s.formatters, s.formats, e, void 0, s.message)
                            }, this.resolvedOptions = function() {
                                return {
                                    locale: s.resolvedLocale.toString()
                                }
                            }, this.getAst = function() {
                                return s.ast
                            }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" === typeof t) {
                            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
                            this.ast = e.__parse(t, {
                                ignoreTag: null === i || void 0 === i ? void 0 : i.ignoreTag,
                                locale: this.resolvedLocale
                            })
                        } else this.ast = t;
                        if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
                        this.formats = Ie(e.formats, n), this.formatters = i && i.formatters || (void 0 === (o = this.formatterCache) && (o = {
                            number: {},
                            dateTime: {},
                            pluralRules: {}
                        }), {
                            getNumberFormat: ce((function() {
                                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                return new((e = Intl.NumberFormat).bind.apply(e, (0, c.__spreadArray)([void 0], t, !1)))
                            }), {
                                cache: Ne(o.number),
                                strategy: ve.variadic
                            }),
                            getDateTimeFormat: ce((function() {
                                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, c.__spreadArray)([void 0], t, !1)))
                            }), {
                                cache: Ne(o.dateTime),
                                strategy: ve.variadic
                            }),
                            getPluralRules: ce((function() {
                                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                return new((e = Intl.PluralRules).bind.apply(e, (0, c.__spreadArray)([void 0], t, !1)))
                            }), {
                                cache: Ne(o.pluralRules),
                                strategy: ve.variadic
                            })
                        })
                    }
                    return Object.defineProperty(e, "defaultLocale", {
                        get: function() {
                            return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = (new Intl.NumberFormat).resolvedOptions().locale), e.memoizedDefaultLocale
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(e) {
                        var t = Intl.NumberFormat.supportedLocalesOf(e);
                        return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale("string" === typeof e ? e : e[0])
                    }, e.__parse = ue, e.formats = {
                        number: {
                            integer: {
                                maximumFractionDigits: 0
                            },
                            currency: {
                                style: "currency"
                            },
                            percent: {
                                style: "percent"
                            }
                        },
                        date: {
                            short: {
                                month: "numeric",
                                day: "numeric",
                                year: "2-digit"
                            },
                            medium: {
                                month: "short",
                                day: "numeric",
                                year: "numeric"
                            },
                            long: {
                                month: "long",
                                day: "numeric",
                                year: "numeric"
                            },
                            full: {
                                weekday: "long",
                                month: "long",
                                day: "numeric",
                                year: "numeric"
                            }
                        },
                        time: {
                            short: {
                                hour: "numeric",
                                minute: "numeric"
                            },
                            medium: {
                                hour: "numeric",
                                minute: "numeric",
                                second: "numeric"
                            },
                            long: {
                                hour: "numeric",
                                minute: "numeric",
                                second: "numeric",
                                timeZoneName: "short"
                            },
                            full: {
                                hour: "numeric",
                                minute: "numeric",
                                second: "numeric",
                                timeZoneName: "short"
                            }
                        }
                    }, e
                }(),
                Pe = Le;
            ! function(e) {
                e.MISSING_MESSAGE = "MISSING_MESSAGE", e.MISSING_FORMAT = "MISSING_FORMAT", e.INSUFFICIENT_PATH = "INSUFFICIENT_PATH", e.INVALID_MESSAGE = "INVALID_MESSAGE", e.INVALID_KEY = "INVALID_KEY", e.FORMATTING_ERROR = "FORMATTING_ERROR"
            }(Re || (Re = {}));
            var Ce = function(e) {
                function t(t, r) {
                    var n, i = t;
                    return r && (i += ": " + r), (n = e.call(this, i) || this).code = void 0, n.originalMessage = void 0, n.code = t, r && (n.originalMessage = r), n
                }
                return (0, u.UL)(t, e), t
            }((0, u.wm)(Error));

            function Oe(e, t) {
                return e ? Object.keys(e).reduce((function(r, n) {
                    return r[n] = (0, u.gY)({
                        timeZone: t
                    }, e[n]), r
                }), {}) : e
            }
            var Me = r(31954);

            function we(e, t, r) {
                if (!e) throw new Error(void 0);
                var n = e;
                return t.split(".").forEach((function(e) {
                    var t = n[e];
                    if (null == e || null == t) throw new Error(void 0);
                    n = t
                })), n
            }

            function Ge(e) {
                var t = e.cachedFormatsByLocale,
                    r = e.defaultTranslationValues,
                    i = e.formats,
                    o = e.getMessageFallback,
                    s = void 0 === o ? Me.i : o,
                    a = e.locale,
                    h = e.messagesOrError,
                    c = e.namespace,
                    l = e.onError,
                    f = e.timeZone;

                function p(e, t, r) {
                    var n = new Ce(t, r);
                    return l(n), s({
                        error: n,
                        key: e,
                        namespace: c
                    })
                }

                function m(e, o, l) {
                    var m;
                    if (h instanceof Ce) return s({
                        error: h,
                        key: e,
                        namespace: c
                    });
                    var E, g = h,
                        _ = [c, e].filter((function(e) {
                            return null != e
                        })).join(".");
                    if (null != t && null != (m = t[a]) && m[_]) E = null == t ? void 0 : t[a][_];
                    else {
                        var d;
                        try {
                            d = we(g, e)
                        } catch (y) {
                            return p(e, Re.MISSING_MESSAGE, y.message)
                        }
                        if ("object" === typeof d) return p(e, Re.INSUFFICIENT_PATH, void 0);
                        try {
                            E = new Pe(d, a, function(e, t) {
                                var r = t ? (0, u.gY)({}, e, {
                                    dateTime: Oe(e.dateTime, t)
                                }) : e;
                                return (0, u.gY)({}, r, {
                                    date: null == r ? void 0 : r.dateTime,
                                    time: null == r ? void 0 : r.dateTime
                                })
                            }((0, u.gY)({}, i, l), f))
                        } catch (y) {
                            return p(e, Re.INVALID_MESSAGE, y.message)
                        }
                        t && (t[a] || (t[a] = {}), t[a][_] = E)
                    }
                    try {
                        var v = E.format(function(e) {
                            if (0 !== Object.keys(e).length) {
                                var t = {};
                                return Object.keys(e).forEach((function(r) {
                                    var i, o = 0,
                                        s = e[r];
                                    i = "function" === typeof s ? function(e) {
                                        var t = s(e);
                                        return (0, n.isValidElement)(t) ? (0, n.cloneElement)(t, {
                                            key: r + o++
                                        }) : t
                                    } : s, t[r] = i
                                })), t
                            }
                        }((0, u.gY)({}, r, o)));
                        if (null == v) throw new Error(void 0);
                        return (0, n.isValidElement)(v) || Array.isArray(v) || "string" === typeof v ? v : String(v)
                    } catch (y) {
                        return p(e, Re.FORMATTING_ERROR, y.message)
                    }
                }

                function E(e, t, r) {
                    var n = m(e, t, r);
                    return "string" !== typeof n ? p(e, Re.INVALID_MESSAGE, void 0) : n
                }
                return E.rich = m, E.raw = function(e) {
                    if (h instanceof Ce) return s({
                        error: h,
                        key: e,
                        namespace: c
                    });
                    var t = h;
                    try {
                        return we(t, e)
                    } catch (r) {
                        return p(e, Re.MISSING_MESSAGE, r.message)
                    }
                }, E
            }

            function Ue(e, t, r) {
                var i = o(),
                    s = i.defaultTranslationValues,
                    a = i.formats,
                    h = i.getMessageFallback,
                    u = i.locale,
                    c = i.onError,
                    l = i.timeZone;
                e = e[r], t = function(e, t) {
                    return e === t ? void 0 : e.slice((t + ".").length)
                }(t, r);
                var f = (0, n.useRef)({}),
                    p = (0, n.useMemo)((function() {
                        return function(e) {
                            var t = e.messages,
                                r = e.namespace,
                                n = e.onError,
                                i = void 0 === n ? Me.h : n;
                            try {
                                if (!t) throw new Error(void 0);
                                var o = r ? we(t, r) : t;
                                if (!o) throw new Error(void 0);
                                return o
                            } catch (a) {
                                var s = new Ce(Re.MISSING_MESSAGE, a.message);
                                return i(s), s
                            }
                        }({
                            messages: e,
                            namespace: t,
                            onError: c
                        })
                    }), [e, t, c]);
                return (0, n.useMemo)((function() {
                    return Ge({
                        cachedFormatsByLocale: f.current,
                        getMessageFallback: h,
                        messagesOrError: p,
                        defaultTranslationValues: s,
                        namespace: t,
                        onError: c,
                        formats: a,
                        locale: u,
                        timeZone: l
                    })
                }), [h, p, s, t, c, a, u, l])
            }

            function Fe(e) {
                return Ue({
                    "!": o().messages
                }, e ? "!." + e : "!", "!")
            }
        },
        31733: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return n
                }
            });
            var n = (0, r(67294).createContext)(void 0)
        }
    }
]);