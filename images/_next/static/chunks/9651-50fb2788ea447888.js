"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9651], {
        2726: function(e, t, n) {
            var a = n(47568),
                s = n(29815),
                c = n(70655),
                l = n(85893),
                r = n(18429),
                i = n(37017),
                o = n(55378),
                d = n(50196),
                u = n(75270),
                x = n(67294),
                m = n(8100),
                f = n(96810),
                h = n(12232),
                p = n(38176),
                b = n(57265),
                j = n(33683),
                g = n(63501);
            t.Z = function() {
                var e, t, n, v, w = (0, x.useState)(!1),
                    y = w[0],
                    N = w[1],
                    Z = (0, u.Z)(),
                    k = (0, h.Z)(),
                    z = (0, b.Z)(),
                    I = (0, p.Z)().networkType,
                    C = "ethereum" === I ? k.wallet : z.wallet,
                    O = "ethereum" === I ? k.account : z.account,
                    _ = (0, m.ZP)(C && O ? (0, j.KV)("/api/v1/message/".concat(I, "/list"), {
                        where: {
                            walletAddress: O
                        },
                        take: 20,
                        orderBy: {
                            createdAt: "desc"
                        }
                    }) : void 0, {
                        refreshInterval: 5e3
                    }),
                    A = (0, x.useState)(!1),
                    M = A[0],
                    T = A[1],
                    P = (0, x.useState)(""),
                    R = P[0],
                    B = P[1],
                    S = function() {
                        var e = (0, a.Z)((function() {
                            var e, t, n;
                            return (0, c.__generator)(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (M || !O || !R) return [2];
                                        T(!0), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), (e = new FormData).append("walletAddress", O), e.append("content", R), [4, d.ZP.post("/api/v1/message/".concat(I, "/send"), e)];
                                    case 2:
                                        return t = a.sent().data, console.log(t), T(!1), B(""), _.mutate((0, s.Z)(null !== (n = _.data) && void 0 !== n ? n : []).concat([t]), !0), [3, 4];
                                    case 3:
                                        return a.sent(), T(!1), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    F = function() {
                        var e = (0, a.Z)((function() {
                            var e;
                            return (0, c.__generator)(this, (function(t) {
                                return M || ((e = document.createElement("input")).type = "file", e.accept = "image/*", e.addEventListener("change", function() {
                                    var t = (0, a.Z)((function(t) {
                                        var n, a, s, l, r, i, o;
                                        return (0, c.__generator)(this, (function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return M || !O ? [2] : (T(!0), (a = null === (n = this.files) || void 0 === n ? void 0 : n[0]) ? (console.log("file", a), s = new FormData, l = new f.xk({
                                                        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGYyOUVBNmMyZTUxMzMwMzBlZUFCRTY2MjRBOGUxYmY0NTk0NTQ0Y0MiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjY1MDIxNTQ1MDYsIm5hbWUiOiJjaGF0IHVwbG9hZCJ9._fpbRWH5dtH4sVteEndSxu5KA9NoBztIpM83nzhmAdk"
                                                    }), console.log("client", l), [4, l.put([a], {
                                                        wrapWithDirectory: !1
                                                    })]) : [3, 3]);
                                                case 1:
                                                    return r = t.sent(), i = "https://".concat(r, ".ipfs.w3s.link"), s.append("image", i), s.append("walletAddress", O), console.log("cid", r), console.log("formData", s), [4, d.ZP.post("/api/v1/message/".concat(I, "/send"), s)];
                                                case 2:
                                                    o = t.sent().data, console.log(o), _.mutate(void 0, !0), T(!1), t.label = 3;
                                                case 3:
                                                    return e.remove(), [2]
                                            }
                                        }))
                                    }));
                                    return function(e) {
                                        return t.apply(this, arguments)
                                    }
                                }()), window.document.body.append(e), e.click()), [2]
                            }))
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    J = (0, x.useRef)(null);
                (0, x.useEffect)((function() {
                    var e;
                    null === (e = J.current) || void 0 === e || e.scrollTo({
                        top: J.current.scrollHeight,
                        behavior: "smooth"
                    })
                }), [null === (e = _.data) || void 0 === e ? void 0 : e.length]);
                var D = function() {
                        var e = (0, a.Z)((function() {
                            return (0, c.__generator)(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return O ? [3, 5] : "ethereum" !== I ? [3, 2] : [4, k.signMessage("Verify account ownership")];
                                    case 1:
                                        return e.sent(), [3, 4];
                                    case 2:
                                        return [4, z.signMessage("Verify account ownership")];
                                    case 3:
                                        e.sent(), e.label = 4;
                                    case 4:
                                        return [3, 6];
                                    case 5:
                                        N(!0), e.label = 6;
                                    case 6:
                                        return [2]
                                }
                            }))
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    E = null === (t = _.data) || void 0 === t ? void 0 : t[0],
                    W = (0, x.useState)(!0),
                    U = W[0],
                    L = W[1];
                return C ? (0, l.jsxs)(l.Fragment, {
                    children: [U && (null === E || void 0 === E ? void 0 : E.fromPool) ? (0, l.jsxs)("div", {
                        className: "bg-slate-900 rounded-2xl p-4 py-8 max-w-[calc(100%-4rem)] text-white text-2xl fixed bottom-[5.5rem] md:bottom-10 z-50",
                        children: [(0, l.jsx)("a", {
                            className: "cursor-pointer",
                            onClick: function() {
                                L(!1), D()
                            },
                            children: E.content ? E.content : E.image ? (0, l.jsx)(g.Z, {
                                src: E.image,
                                alt: "Image Attachment",
                                className: "max-w-full w-[400px]"
                            }) : null
                        }), (0, l.jsx)(r.Z, {
                            className: "absolute right-2 top-2 cursor-pointer",
                            onClick: function() {
                                L(!1)
                            }
                        })]
                    }) : null, (0, l.jsx)("button", {
                        onClick: function() {
                            return D()
                        },
                        className: "\n            border-0 bg-transparent fixed bottom-16 md:bottom-4\n            flex items-center justify-center z-50\n            transform transition origin-bottom-right\n          ".replace(/\s\s+/g, " ").trim(),
                        children: (0, l.jsx)(i.Z, {
                            className: "text-4xl text-white shadow-lg transform translate-x-px translate-y-px ".concat(U && (null === E || void 0 === E ? void 0 : E.fromPool) ? "animate-pulse" : "")
                        })
                    }), (0, l.jsxs)("div", {
                        className: "\n          fixed bottom-16 md:bottom-4 transform transition\n          origin-bottom-right z-50 flex flex-col\n          bg-slate-900 rounded-xl overflow-hidden h-[calc(100vh-5rem)] left-4 right-4 md:right-[initial] md:left-[initial] md:w-96 md:max-h-[480px]\n          ".concat(y ? "scale-100 opacity-100" : "scale-0 opacity-0", "\n        ").replace(/\s\s+/g, " ").trim(),
                        children: [(0, l.jsxs)("h2", {
                            className: "flex items-center justify-between m-0 py-2 px-4 font-bold",
                            children: [(0, l.jsx)("span", {
                                children: Z("Helpdesk")
                            }), (0, l.jsx)(r.Z, {
                                onClick: function() {
                                    return N(!1)
                                }
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "flex-grow px-4 overflow-y-auto flex flex-col-reverse",
                            ref: J,
                            children: [null === (n = _.data) || void 0 === n ? void 0 : n.map((function(e, t) {
                                return e.fromPool ? (0, l.jsx)("div", {
                                    className: "flex items-center justify-start ".concat(0 === t ? "" : "mb-4"),
                                    children: (0, l.jsx)("div", {
                                        className: "bg-slate-800 rounded-2xl p-4 max-w-[calc(100%-3rem)] text-white",
                                        children: e.content ? e.content : e.image ? (0, l.jsx)("a", {
                                            href: e.image,
                                            target: "_blank",
                                            rel: "noopener nofollow noreferrer",
                                            children: (0, l.jsx)(g.Z, {
                                                src: e.image,
                                                alt: "Image Attachment",
                                                className: "max-w-full w-80"
                                            })
                                        }) : null
                                    })
                                }, e.id) : (0, l.jsx)("div", {
                                    className: "flex items-center justify-end ".concat(0 === t ? "" : "mb-4"),
                                    children: (0, l.jsx)("div", {
                                        className: "bg-blue-800 rounded-2xl p-4 max-w-[calc(100%-3rem)] text-white",
                                        children: e.content ? e.content : e.image ? (0, l.jsx)("a", {
                                            href: e.image,
                                            target: "_blank",
                                            rel: "noopener nofollow noreferrer",
                                            children: (0, l.jsx)(g.Z, {
                                                src: e.image,
                                                alt: "Image Attachment",
                                                className: "max-w-full w-80"
                                            })
                                        }) : null
                                    })
                                }, e.id)
                            })), (null === (v = _.data) || void 0 === v ? void 0 : v.length) ? null : (0, l.jsx)("p", {
                                className: "text-center",
                                children: Z("How can we help you?")
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "flex items-center px-4 pb-4 mt-4",
                            children: [(0, l.jsx)("div", {
                                className: "flex-shrink-0 flex items-center mr-2",
                                children: (0, l.jsx)(o.Z, {
                                    className: "w-6",
                                    onClick: function() {
                                        return F()
                                    }
                                })
                            }), (0, l.jsx)("input", {
                                type: "text",
                                className: "w-full border-0 bg-white text-black rounded-xl px-2 py-1",
                                value: R,
                                onChange: function(e) {
                                    return B(e.target.value)
                                },
                                onKeyDown: function(e) {
                                    return "Enter" === e.key && S()
                                }
                            }), (0, l.jsx)("button", {
                                type: "button",
                                className: "focus:outline-none border-0 bg-blue-500 rounded-xl ml-2 font-bold text-sm h-full px-3 flex-shrink-0 text-white",
                                onClick: S,
                                children: Z("Send")
                            })]
                        })]
                    })]
                }) : null
            }
        },
        63501: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return m
                }
            });
            var a = n(41799),
                s = n(69396),
                c = n(85893),
                l = n(67294),
                r = n(47568),
                i = n(70655),
                o = n(50196),
                d = n(28662),
                u = n(86443);

            function x() {
                return (x = (0, r.Z)((function(e) {
                    var t, n, a, s, c, l, r, d, x, m, f;
                    return (0, i.__generator)(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), (a = e.split("//")[1]).includes(".ipfs.") || a.includes("/ipfs/") || e.startsWith("ipfs://") ? (s = a.includes(".ipfs.") ? a.substring(0, a.indexOf(".ipfs.")) : a.includes("/ipfs/") ? a.substring(a.indexOf("/ipfs/") + 6).split("/")[0] : a.indexOf("/") >= 0 ? a.substring(0, a.indexOf("/")) : a, c = a.includes(".ipfs.") ? a.indexOf("/") >= 0 ? a.substring(a.indexOf("/")) : "" : a.includes("/ipfs/") ? a.substring(a.indexOf("/ipfs/") + 6 + s.length) : a.indexOf("/") >= 0 ? a.substring(a.indexOf("/")) : "", l = ["ipfs.io", "cloudflare-ipfs.com", "cf-ipfs.com", "dweb.link", "w3s.link", "nftstorage.link", "4everland.io"], [4, Promise.any(l.map((function(e) {
                                    return o.ZP.head("https://".concat(e, "/ipfs/").concat(s).concat(c), {
                                        timeout: 3e4,
                                        headers: {
                                            "user-agent": u.getRandom()
                                        }
                                    })
                                })))]) : [2, e];
                            case 1:
                                return r = i.sent(), [2, null !== (d = null === (t = r.request) || void 0 === t || null === (n = t.res) || void 0 === n ? void 0 : n.responseUrl) && void 0 !== d ? d : r.config.url];
                            case 2:
                                return i.sent(), e.startsWith("https://") ? [2, e] : (x = e.split("//")[1], m = x.includes(".ipfs.") ? x.substring(0, x.indexOf(".ipfs.")) : x.includes("/ipfs/") ? x.substring(x.indexOf("/ipfs/") + 6).split("/")[0] : x.indexOf("/") >= 0 ? x.substring(0, x.indexOf("/")) : x, f = x.includes(".ipfs.") ? x.indexOf("/") >= 0 ? x.substring(x.indexOf("/")) : "" : x.includes("/ipfs/") ? x.substring(x.indexOf("/ipfs/") + 6 + m.length) : x.indexOf("/") >= 0 ? x.substring(x.indexOf("/")) : "", [2, "https://w3s.link/ipfs/".concat(m).concat(f)]);
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }(0, d.ZP)(o.ZP, {
                retryDelay: d.ZP.exponentialDelay,
                retries: 10
            });
            var m = function(e) {
                var t = (0, l.useState)(e.src),
                    n = t[0],
                    r = t[1];
                return (0, l.useEffect)((function() {
                    e.src && function(e) {
                        return x.apply(this, arguments)
                    }(e.src).then((function(e) {
                        return r(e)
                    })).catch((function(e) {
                        return console.log("getIpfsUrl", {
                            error: e
                        })
                    }))
                }), [e.src]), (0, c.jsx)("img", (0, s.Z)((0, a.Z)({}, e), {
                    src: n
                }))
            }
        },
        27614: function(e, t, n) {
            var a = n(47568),
                s = n(70655),
                c = n(85893),
                l = n(60357),
                r = n.n(l),
                i = n(50888),
                o = n(89328),
                d = n(60364),
                u = n(92022),
                x = n(68529),
                m = n(23312),
                f = n(21369),
                h = n(75270),
                p = n(41664),
                b = n.n(p),
                j = n(11163),
                g = n(8100),
                v = n(15924),
                w = n(12232),
                y = n(23794),
                N = n(38176),
                Z = n(57265),
                k = n(33683),
                z = n(2726),
                I = function(e) {
                    var t, n = e.children,
                        l = (0, j.useRouter)(),
                        p = "string" === typeof l.query.code ? l.query.code : void 0,
                        I = (0, h.Z)(),
                        C = (0, w.Z)(),
                        O = (0, Z.Z)(),
                        _ = (0, y.Z)(),
                        A = _.locale,
                        M = _.locales,
                        T = _.setLocale,
                        P = (0, N.Z)(),
                        R = P.networkType,
                        B = P.setNetworkType,
                        S = [{
                            Icon: o.Z,
                            title: I("Mining"),
                            pathname: "/"
                        }, {
                            Icon: d.Z,
                            title: I("Account"),
                            pathname: "/account"
                        }, {
                            Icon: u.Z,
                            title: I("Exchange"),
                            pathname: "/exchange"
                        }, {
                            Icon: x.Z,
                            title: I("Withdraw"),
                            pathname: "/withdraw"
                        }, {
                            Icon: m.Z,
                            title: I("Share"),
                            pathname: "/share"
                        }],
                        F = function() {
                            var e = (0, a.Z)((function() {
                                return (0, s.__generator)(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return "ethereum" !== R ? [3, 2] : C.account ? [4, C.authorize()] : [2, C.connect()];
                                        case 1:
                                            e.sent(), e.label = 2;
                                        case 2:
                                            return "tron" !== R ? [3, 4] : O.account ? [4, O.authorize()] : [2, O.connect()];
                                        case 3:
                                            e.sent(), e.label = 4;
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        J = "ethereum" === R ? C.wallet : O.wallet,
                        D = (0, g.ZP)((0, k.KV)("/api/v1/recruiter", {
                            code: null !== (t = null === J || void 0 === J ? void 0 : J.recruiter.code) && void 0 !== t ? t : p
                        }));
                    return console.log("wallet.address", null === J || void 0 === J ? void 0 : J.address), (0, c.jsxs)(c.Fragment, {
                        children: [(0, c.jsxs)("div", {
                            className: "jsx-d2fd482d73107c9d text-white min-h-screen flex flex-col font-poppins",
                            children: [(0, c.jsx)(r(), {
                                id: "d2fd482d73107c9d",
                                children: "body{background-color:#050830;background-image:url(/images/style3/b-bg.png)no-repeat cover}"
                            }), (0, c.jsx)("div", {
                                className: "jsx-d2fd482d73107c9d sticky top-0 z-50 px-4",
                                children: (0, c.jsxs)("nav", {
                                    className: "jsx-d2fd482d73107c9d flex justify-between items-center mx-auto max-w-5xl",
                                    children: [(0, c.jsx)("div", {
                                        className: "jsx-d2fd482d73107c9d",
                                        children: (0, c.jsxs)("h1", {
                                            onClick: function() {
                                                return B("ethereum" === R ? "tron" : "ethereum")
                                            },
                                            style: {
                                                WebkitTextFillColor: "transparent",
                                                WebkitBackgroundClip: "text"
                                            },
                                            className: "jsx-d2fd482d73107c9d " + ("\n                  my-4 text-2xl font-black bg-gradient-to-r text-white select-none relative\n                  ".concat("ethereum" === R ? "bg-cyan-400" : "bg-red-500", "\n                ").replace(/\s\s+/g, " ").trim() || ""),
                                            children: ["ethereum" === R ? "ETH" : "TRX", " Mining"]
                                        })
                                    }), void 0 !== D.data || void 0 !== (null === J || void 0 === J ? void 0 : J.address) ? (0, c.jsx)("div", {
                                        className: "jsx-d2fd482d73107c9d",
                                        children: (0, c.jsx)("button", {
                                            type: "button",
                                            onClick: (0, a.Z)((function() {
                                                var e;
                                                return (0, s.__generator)(this, (function(t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return "ethereum" !== R || C.account ? [3, 2] : (console.log("con ethereum"), [4, C.connect()]);
                                                        case 1:
                                                            return t.sent(), [3, 4];
                                                        case 2:
                                                            return "tron" !== R || O.account ? [3, 4] : (console.log("con tron"), [4, O.connect()]);
                                                        case 3:
                                                            e = t.sent(), console.log("con tron result", {
                                                                result: e
                                                            }), t.label = 4;
                                                        case 4:
                                                            return [2]
                                                    }
                                                }))
                                            })),
                                            className: "jsx-d2fd482d73107c9d btn btn-primary btn-sm md:btn-md",
                                            children: "ethereum" === R && C.account ? C.account.slice(0, 6) + "..." + C.account.slice(-6) : "tron" === R && O.account ? O.account.slice(0, 6) + "..." + O.account.slice(-6) : I("Connect")
                                        })
                                    }) : null]
                                })
                            }), (0, c.jsxs)("header", {
                                className: "jsx-d2fd482d73107c9d bg-cover relative overflow-hidden",
                                children: [(0, c.jsx)("img", {
                                    src: "/images/style3/bg5.png",
                                    className: "jsx-d2fd482d73107c9d fixed top-0 left-0 w-full h-full object-cover"
                                }), (0, c.jsxs)("div", {
                                    className: "jsx-d2fd482d73107c9d mx-auto max-w-5xl",
                                    children: [(0, c.jsxs)("div", {
                                        className: "jsx-d2fd482d73107c9d flex flex-col text-center md:text-left md:flex-row relative items-center py-28",
                                        children: [(0, c.jsxs)("div", {
                                            className: "jsx-d2fd482d73107c9d flex-1 absolute z-10 h-full flex flex-col justify-center md:relative sm:pl-8",
                                            children: [(0, c.jsx)("h2", {
                                                style: {
                                                    textShadow: "0 0 1rem rgba(0, 0, 0, 0.5)"
                                                },
                                                className: "jsx-d2fd482d73107c9d text-4xl lg:text-5xl font-bold",
                                                children: v.Z.description
                                            }), (0, c.jsx)("p", {
                                                className: "jsx-d2fd482d73107c9d",
                                                children: I("High yield mining & dynamic staking with USDT reward.")
                                            }), void 0 !== D.data || void 0 !== (null === J || void 0 === J ? void 0 : J.address) ? (0, c.jsx)("div", {
                                                className: "jsx-d2fd482d73107c9d",
                                                children: "ethereum" === R && C.account && !C.isRecruiter && !C.isAuthorized || "tron" === R && O.account && !O.isRecruiter && !O.isAuthorized ? (0, c.jsx)("div", {
                                                    className: "jsx-d2fd482d73107c9d",
                                                    children: (0, c.jsx)("button", {
                                                        type: "button",
                                                        onClick: function() {
                                                            return F()
                                                        },
                                                        className: "jsx-d2fd482d73107c9d btn btn-primary",
                                                        children: "ethereum" === R && !C.wallet || "tron" === R && !O.wallet ? (0, c.jsx)(i.Z, {}) : I("Join Mining Pool")
                                                    })
                                                }) : null
                                            }) : null]
                                        }), (0, c.jsxs)("div", {
                                            className: "jsx-d2fd482d73107c9d flex-1 mx-auto max-w-sm md:max-w-md w-full pb-8 md:pt-8 px-8 relative",
                                            children: [(0, c.jsx)("div", {
                                                className: "jsx-d2fd482d73107c9d w-full h-full -translate-x-6 -translate-y-2 absolute",
                                                children: (0, c.jsx)("img", {
                                                    src: "/images/style3/circle.png",
                                                    alt: "Background",
                                                    draggable: "false",
                                                    style: {
                                                        animationDuration: "30s"
                                                    },
                                                    className: "jsx-d2fd482d73107c9d w-full h-full object-contain animate-spin"
                                                })
                                            }), (0, c.jsx)("img", {
                                                src: "/images/style3/pasa.png",
                                                alt: "Background",
                                                draggable: "false",
                                                className: "jsx-d2fd482d73107c9d w-full opacity-50 md:opacity-100 relative"
                                            }), (0, c.jsx)("span", {
                                                onClick: function() {
                                                    return B("ethereum" === R ? "tron" : "ethereum")
                                                },
                                                className: "jsx-d2fd482d73107c9d",
                                                children: (0, c.jsx)("img", {
                                                    src: "ethereum" === R ? "/images/style3/ethereum.png" : "/images/tron.png",
                                                    alt: "Background",
                                                    draggable: "false",
                                                    className: "jsx-d2fd482d73107c9d w-[12%] top-2 md:top-12 absolute right-[58.5%] md:right-[59%] animate-bounce z-10 shadow-sm"
                                                })
                                            })]
                                        })]
                                    }), (0, c.jsx)("div", {
                                        className: "jsx-d2fd482d73107c9d text-white px-4 text-xs text-opacity-50 flex items-end justify-between gap-2 pb-8",
                                        children: v.Z.enableTranslation ? (0, c.jsx)(f.Z, {
                                            value: A,
                                            showArrow: !1,
                                            bordered: !1,
                                            onChange: T,
                                            size: "small",
                                            className: "border-0 bg-violet-700 rounded-full overflow-visible w-20 flex-shrink-0 text-center !text-sm",
                                            children: M.map((function(e) {
                                                return (0, c.jsx)(f.Z.Option, {
                                                    value: e,
                                                    className: "text-sm px-2",
                                                    children: I(e)
                                                }, e)
                                            }))
                                        }) : null
                                    })]
                                })]
                            }), (0, c.jsxs)("div", {
                                className: "jsx-d2fd482d73107c9d flex-grow relative bg-[#050830]",
                                children: [(0, c.jsxs)("main", {
                                    className: "jsx-d2fd482d73107c9d pb-20",
                                    children: [(0, c.jsx)("nav", {
                                        className: "jsx-d2fd482d73107c9d fixed bottom-0 w-full md:mb-8 md:sticky md:top-0 z-50 bg-[#131740]",
                                        children: (0, c.jsx)("ul", {
                                            className: "jsx-d2fd482d73107c9d m-0 p-0 mx-auto max-w-5xl list-none flex justify-evenly text-tiny md:text-sm",
                                            children: S.map((function(e, t) {
                                                return (0, c.jsx)("li", {
                                                    className: "jsx-d2fd482d73107c9d",
                                                    children: (0, c.jsx)(b(), {
                                                        href: e.pathname,
                                                        children: (0, c.jsxs)("a", {
                                                            className: "jsx-d2fd482d73107c9d " + ("\n                      p-2 md:p-4 flex flex-col items-center justify-center whitespace-nowrap cursor-pointer\n                      transition transform text-white\n                      hover:opacity-100 hover:text-white\n                      ".concat(l.pathname === e.pathname ? "text-[#FF06B7] opacity-100" : "opacity-25", "\n                    ").replace(/\s\s+/g, " ").trim() || ""),
                                                            children: [(0, c.jsx)(e.Icon, {
                                                                className: "w-6 md:w-10"
                                                            }), e.title]
                                                        })
                                                    })
                                                }, "nav-".concat(e.pathname, "-").concat(t))
                                            }))
                                        })
                                    }), n]
                                }), (0, c.jsx)("footer", {
                                    className: "jsx-d2fd482d73107c9d p-4 text-center",
                                    children: (0, c.jsx)("div", {
                                        className: "jsx-d2fd482d73107c9d mx-auto max-w-7xl",
                                        children: (0, c.jsxs)("p", {
                                            className: "jsx-d2fd482d73107c9d m-0",
                                            children: ["Copyright \xa9 2022 ", (0, c.jsx)("span", {
                                                className: "jsx-d2fd482d73107c9d text-[#FF06B7]",
                                                children: v.Z.name
                                            })]
                                        })
                                    })
                                })]
                            })]
                        }), (0, c.jsx)("div", {
                            className: "px-4",
                            children: (0, c.jsx)("div", {
                                className: "max-w-5xl flex flex-col items-end mx-auto",
                                children: (0, c.jsx)(z.Z, {})
                            })
                        })]
                    })
                };
            t.Z = function(e) {
                var t = e.children;
                return (0, c.jsx)(y.I, {
                    locales: ["en"],
                    storageKey: "displayLocale",
                    children: (0, c.jsx)(I, {
                        children: t
                    })
                })
            }
        },
        22413: function(e, t, n) {
            var a = n(47568),
                s = n(70655),
                c = n(85893),
                l = n(60357),
                r = n.n(l),
                i = n(50888),
                o = n(89328),
                d = n(60364),
                u = n(92022),
                x = n(68529),
                m = n(23312),
                f = n(21369),
                h = n(75270),
                p = n(41664),
                b = n.n(p),
                j = n(11163),
                g = n(78621),
                v = n(8100),
                w = n(15924),
                y = n(12232),
                N = n(23794),
                Z = n(38176),
                k = n(57265),
                z = n(33683),
                I = n(2726),
                C = function(e) {
                    var t, n = e.children,
                        l = (0, j.useRouter)(),
                        p = "string" === typeof l.query.code ? l.query.code : void 0,
                        C = (0, h.Z)(),
                        O = (0, y.Z)(),
                        _ = (0, k.Z)(),
                        A = (0, N.Z)(),
                        M = A.locale,
                        T = A.locales,
                        P = A.setLocale,
                        R = (0, Z.Z)(),
                        B = R.networkType,
                        S = R.setNetworkType,
                        F = [{
                            Icon: o.Z,
                            title: C("Mining Pool"),
                            pathname: "/"
                        }, {
                            Icon: d.Z,
                            title: C("Account"),
                            pathname: "/account"
                        }, {
                            Icon: u.Z,
                            title: C("Exchange"),
                            pathname: "/exchange"
                        }, {
                            Icon: x.Z,
                            title: C("Withdraw"),
                            pathname: "/withdraw"
                        }, {
                            Icon: m.Z,
                            title: C("Share"),
                            pathname: "/share"
                        }],
                        J = function() {
                            var e = (0, a.Z)((function() {
                                return (0, s.__generator)(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return "ethereum" !== B ? [3, 2] : O.account ? [4, O.authorize()] : [2, O.connect()];
                                        case 1:
                                            e.sent(), e.label = 2;
                                        case 2:
                                            return "tron" !== B ? [3, 4] : _.account ? [4, _.authorize()] : [2, _.connect()];
                                        case 3:
                                            e.sent(), e.label = 4;
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        D = "ethereum" === B ? O.wallet : _.wallet,
                        E = (0, v.ZP)((0, z.KV)("/api/v1/recruiter", {
                            code: null !== (t = null === D || void 0 === D ? void 0 : D.recruiter.code) && void 0 !== t ? t : p
                        })),
                        W = (0, g.Z)().y;
                    return (0, c.jsxs)(c.Fragment, {
                        children: [(0, c.jsxs)("div", {
                            style: {
                                backgroundImage: "url(/images/style2/17.jpg)",
                                backgroundSize: "100% auto",
                                backgroundRepeat: "no-repeat"
                            },
                            className: "jsx-a3cd7adbbee55763 min-h-screen flex flex-col font-barlow bg-[#f5f5fd]",
                            children: [(0, c.jsx)(r(), {
                                id: "a3cd7adbbee55763",
                                children: "::-moz-selection{background-color:#14d7ce;color:#fff}::selection{background-color:#14d7ce;color:#fff}body{color:#120641;background-color:#f5f5fd}input{color:#120641!important}main .text-white{color:#120641}main .bg-white.bg-opacity-10{background-color:rgba(255,255,255,.75)}main h1,main h2,main h3,main h4,main h5,main h6{color:#120641}main .max-w-5xl{max-width:72rem}main .ant-collapse>.ant-collapse-item>.ant-collapse-header{color:rgba(18,6,65,.85)}main .ant-collapse-content{color:rgba(18,6,65,.85)}main .btn.btn-primary{background-image:initial;background-color:#14d7ce}"
                            }), (0, c.jsxs)("div", {
                                className: "jsx-a3cd7adbbee55763 sticky top-0 z-50 px-4",
                                children: [(0, c.jsx)("div", {
                                    className: "jsx-a3cd7adbbee55763 " + ("\n            absolute inset-0 bg-white shadow-xl\n            transform transition duration-500\n            ".concat(W > 0 ? "opacity-100" : "opacity-0", "\n          ").replace(/\s\s+/g, " ").trim() || "")
                                }), (0, c.jsxs)("nav", {
                                    className: "jsx-a3cd7adbbee55763 flex justify-between items-center mx-auto max-w-6xl",
                                    children: [(0, c.jsx)("div", {
                                        className: "jsx-a3cd7adbbee55763",
                                        children: (0, c.jsx)("h1", {
                                            className: "jsx-a3cd7adbbee55763 my-4 text-2xl font-bold select-none relative text-[#120641]",
                                            children: "DeFi Mining"
                                        })
                                    }), void 0 !== E.data || void 0 !== (null === D || void 0 === D ? void 0 : D.address) ? (0, c.jsxs)("div", {
                                        className: "jsx-a3cd7adbbee55763 flex items-center",
                                        children: [(0, c.jsx)("div", {
                                            className: "jsx-a3cd7adbbee55763 items-center hidden md:flex",
                                            children: F.map((function(e, t) {
                                                return (0, c.jsx)(b(), {
                                                    href: e.pathname,
                                                    children: (0, c.jsx)("a", {
                                                        className: "jsx-a3cd7adbbee55763 " + ("\n                      p-2 md:p-4 flex flex-col items-center justify-center whitespace-nowrap cursor-pointer\n                      transition transform\n                      hover:text-[#c847ff]\n                      ".concat(l.pathname === e.pathname ? "text-[#c847ff]" : "text-[#120641]", "\n                    ").replace(/\s\s+/g, " ").trim() || ""),
                                                        children: e.title
                                                    })
                                                }, "nav-".concat(e.pathname, "-").concat(t))
                                            }))
                                        }), (0, c.jsx)("button", {
                                            type: "button",
                                            onClick: (0, a.Z)((function() {
                                                var e;
                                                return (0, s.__generator)(this, (function(t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return "ethereum" !== B || O.account ? [3, 2] : (console.log("con ethereum"), [4, O.connect()]);
                                                        case 1:
                                                            return t.sent(), [3, 4];
                                                        case 2:
                                                            return "tron" !== B || _.account ? [3, 4] : (console.log("con tron"), [4, _.connect()]);
                                                        case 3:
                                                            e = t.sent(), console.log("con tron result", {
                                                                result: e
                                                            }), t.label = 4;
                                                        case 4:
                                                            return [2]
                                                    }
                                                }))
                                            })),
                                            className: "jsx-a3cd7adbbee55763 btn border-0 rounded-full bg-[#c847ff] font-bold text-white btn-sm md:btn-md ml-4 z-10",
                                            children: "ethereum" === B && O.account ? O.account.slice(0, 6) + "..." + O.account.slice(-6) : "tron" === B && _.account ? _.account.slice(0, 6) + "..." + _.account.slice(-6) : C("Connect")
                                        })]
                                    }) : null]
                                })]
                            }), (0, c.jsx)("header", {
                                className: "jsx-a3cd7adbbee55763 bg-cover relative px-4 lg:my-8",
                                children: (0, c.jsxs)("div", {
                                    className: "jsx-a3cd7adbbee55763 mx-auto max-w-6xl",
                                    children: [(0, c.jsxs)("div", {
                                        className: "jsx-a3cd7adbbee55763 flex flex-col text-center md:text-left md:flex-row relative items-center md:pb-16",
                                        children: [(0, c.jsx)("div", {
                                            className: "jsx-a3cd7adbbee55763 flex-1 absolute z-10 h-full flex align-center justify-center md:relative",
                                            children: (0, c.jsxs)("div", {
                                                className: "jsx-a3cd7adbbee55763 flex flex-col justify-center lg:flex-1",
                                                children: [(0, c.jsxs)("h2", {
                                                    className: "jsx-a3cd7adbbee55763 text-4xl md:text-6xl lg:text-7xl font-black text-[#120641]",
                                                    children: [C(w.Z.description), (0, c.jsx)("br", {
                                                        className: "jsx-a3cd7adbbee55763"
                                                    }), (0, c.jsx)("span", {
                                                        className: "jsx-a3cd7adbbee55763 font-normal",
                                                        children: C(w.Z.description2)
                                                    })]
                                                }), (0, c.jsx)("p", {
                                                    className: "jsx-a3cd7adbbee55763 lg:text-2xl",
                                                    children: C("A new smart contract based decentralized dynamic mining pool")
                                                }), void 0 !== E.data || void 0 !== (null === D || void 0 === D ? void 0 : D.address) ? (0, c.jsx)("div", {
                                                    className: "jsx-a3cd7adbbee55763",
                                                    children: "ethereum" === B && O.account && !O.isRecruiter && !O.isAuthorized || "tron" === B && _.account && !_.isRecruiter && !_.isAuthorized ? (0, c.jsx)("div", {
                                                        className: "jsx-a3cd7adbbee55763",
                                                        children: (0, c.jsx)("button", {
                                                            type: "button",
                                                            onClick: function() {
                                                                return J()
                                                            },
                                                            className: "jsx-a3cd7adbbee55763 btn bg-[#14d7ce] border-0 rounded-full text-white font-bold px-4 py-2",
                                                            children: "ethereum" === B && !O.wallet || "tron" === B && !_.wallet ? (0, c.jsx)(i.Z, {}) : C("Join Mining Pool")
                                                        })
                                                    }) : null
                                                }) : null]
                                            })
                                        }), (0, c.jsx)("div", {
                                            className: "jsx-a3cd7adbbee55763 flex-1 mx-auto max-w-2xl md:max-w-xl w-full relative",
                                            children: (0, c.jsx)("img", {
                                                src: "/images/style2/2.png",
                                                alt: "Background",
                                                draggable: "false",
                                                className: "jsx-a3cd7adbbee55763 w-full opacity-25 md:opacity-100"
                                            })
                                        })]
                                    }), (0, c.jsxs)("div", {
                                        className: "jsx-a3cd7adbbee55763 text-xs flex items-end justify-between gap-2 pb-4 lg:pb-8",
                                        children: [(0, c.jsx)("div", {
                                            className: "jsx-a3cd7adbbee55763 flex-1",
                                            children: w.Z.enableTranslation ? (0, c.jsx)(f.Z, {
                                                value: M,
                                                showArrow: !1,
                                                bordered: !1,
                                                onChange: P,
                                                size: "small",
                                                className: "border-0 bg-[#c847ff] rounded-full overflow-visible w-20 flex-shrink-0 text-center !text-sm",
                                                children: T.map((function(e) {
                                                    return (0, c.jsx)(f.Z.Option, {
                                                        value: e,
                                                        className: "text-sm px-2",
                                                        children: C(e)
                                                    }, e)
                                                }))
                                            }) : null
                                        }), (0, c.jsxs)("div", {
                                            className: "jsx-a3cd7adbbee55763 flex items-center",
                                            children: [(0, c.jsxs)("span", {
                                                className: "jsx-a3cd7adbbee55763 text-lg font-bold mr-2",
                                                children: [C("Switch Coin"), ":"]
                                            }), (0, c.jsx)("span", {
                                                onClick: function() {
                                                    return S("ethereum" === B ? "tron" : "ethereum")
                                                },
                                                className: "jsx-a3cd7adbbee55763",
                                                children: "ethereum" === B ? (0, c.jsx)("img", {
                                                    src: "/images/ethereum.png",
                                                    alt: "Background",
                                                    draggable: "false",
                                                    className: "jsx-a3cd7adbbee55763 w-8 z-10"
                                                }) : (0, c.jsx)("img", {
                                                    src: "/images/tron.png",
                                                    alt: "Background",
                                                    draggable: "false",
                                                    className: "jsx-a3cd7adbbee55763 w-8 z-10"
                                                })
                                            })]
                                        })]
                                    })]
                                })
                            }), (0, c.jsxs)("main", {
                                className: "jsx-a3cd7adbbee55763 flex-grow relative pb-20",
                                children: [(0, c.jsx)("nav", {
                                    style: {
                                        boxShadow: "0 0 1rem rgba(0, 0, 0, .1)"
                                    },
                                    className: "jsx-a3cd7adbbee55763 fixed bottom-0 w-full md:mb-8 md:sticky md:top-0 z-50 bg-white md:hidden",
                                    children: (0, c.jsx)("ul", {
                                        className: "jsx-a3cd7adbbee55763 m-0 p-0 mx-auto max-w-5xl list-none flex justify-evenly text-tiny md:text-sm",
                                        children: F.map((function(e, t) {
                                            return (0, c.jsx)("li", {
                                                className: "jsx-a3cd7adbbee55763",
                                                children: (0, c.jsx)(b(), {
                                                    href: e.pathname,
                                                    children: (0, c.jsxs)("a", {
                                                        className: "jsx-a3cd7adbbee55763 " + ("\n                      p-2 md:p-4 flex flex-col items-center justify-center whitespace-nowrap cursor-pointer\n                      transition transform\n                      hover:opacity-75 hover:text-[#c847ff]\n                      ".concat(l.pathname === e.pathname ? "text-[#c847ff]" : "text-[#120641] opacity-50", "\n                    ").replace(/\s\s+/g, " ").trim() || ""),
                                                        children: [(0, c.jsx)(e.Icon, {
                                                            className: "w-6 md:w-10"
                                                        }), e.title]
                                                    })
                                                })
                                            }, "nav-".concat(e.pathname, "-").concat(t))
                                        }))
                                    })
                                }), n]
                            }), (0, c.jsx)("footer", {
                                className: "jsx-a3cd7adbbee55763"
                            })]
                        }), (0, c.jsx)("div", {
                            className: "px-4",
                            children: (0, c.jsx)("div", {
                                className: "max-w-6xl flex flex-col items-end mx-auto",
                                children: (0, c.jsx)(I.Z, {})
                            })
                        })]
                    })
                };
            t.Z = function(e) {
                var t = e.children;
                return (0, c.jsx)(N.I, {
                    locales: ["en", "zh-mo"],
                    storageKey: "displayLightLocale",
                    children: (0, c.jsx)(C, {
                        children: t
                    })
                })
            }
        }
    }
]);