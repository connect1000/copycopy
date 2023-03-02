(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        48312: function(a, e, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return s(5075)
            }])
        },
        5075: function(a, e, s) {
            "use strict";
            s.r(e);
            var c = s(85893),
                l = s(60357),
                t = s.n(l),
                r = s(65502),
                i = s(54907),
                n = s(61744),
                d = s(2593),
                x = s(96486),
                b = s(75270),
                m = s(41664),
                o = s.n(m),
                j = s(92077),
                h = s.n(j),
                u = s(67294),
                N = s(8100),
                v = s(27614),
                f = s(22413),
                p = s(15924),
                w = s(38176),
                g = function() {
                    var a, e, s, l, m = (0, b.Z)(),
                        j = (0, w.Z)().networkType,
                        v = (0, N.ZP)("/api/v1/stats/".concat(j, "/pools"), {
                            refreshInterval: 1e4
                        }),
                        f = (0, N.ZP)("/api/v1/stats/".concat(j, "/participants/"), {
                            refreshInterval: 1e4
                        }),
                        g = (0, N.ZP)("/api/v1/stats/".concat(j, "/staked"), {
                            refreshInterval: 1e4
                        }),
                        y = (0, N.ZP)("/api/v1/stats/".concat(j, "/reward"), {
                            refreshInterval: 1e4
                        }),
                        Z = (0, N.ZP)("/api/v1/stats/".concat(j, "/rewards?count=10"), {
                            revalidateIfStale: !1,
                            revalidateOnFocus: !1,
                            revalidateOnMount: !0,
                            revalidateOnReconnect: !1
                        }),
                        P = (0, u.useState)([]),
                        k = P[0],
                        R = P[1];
                    (0, u.useEffect)((function() {
                        var a;
                        R(null !== (a = Z.data) && void 0 !== a ? a : [])
                    }), [Z.data]);
                    var _ = (0, N.ZP)("/api/v1/stats/".concat(j, "/rewards?count=1"), {
                        refreshInterval: 1e3
                    });
                    (0, u.useEffect)((function() {
                        var a, e, s;
                        (null === (a = _.data) || void 0 === a || null === (e = a[0]) || void 0 === e ? void 0 : e.address) && R((function(a) {
                            var e;
                            return null !== (s = null === (e = _.data) || void 0 === e ? void 0 : e.concat(a).slice(0, -_.data.length)) && void 0 !== s ? s : a
                        }))
                    }), [null === (a = _.data) || void 0 === a || null === (e = a[0]) || void 0 === e ? void 0 : e.address]);
                    var q, E, I, O, T = "ethereum" === j ? "ETH" : "TRX",
                        A = (0, N.ZP)("/api/v1/rewardRate", {
                            refreshInterval: 1e4
                        });
                    return (0, c.jsx)("div", {
                        className: "px-4 pt-4",
                        children: (0, c.jsxs)("div", {
                            className: "jsx-283905acab89eb50 mx-auto max-w-5xl",
                            children: [(0, c.jsx)("h1", {
                                className: "jsx-283905acab89eb50 mb-4",
                                children: m("Pool Statistics")
                            }), (0, c.jsxs)("div", {
                                className: "jsx-283905acab89eb50 bg-[#131740] grid grid-cols-2 md:grid-cols-4 gap-8 p-8",
                                children: [(0, c.jsxs)("div", {
                                    className: "jsx-283905acab89eb50 text-center",
                                    children: [(0, c.jsx)("h3", {
                                        className: "jsx-283905acab89eb50 m-0 text-4xl",
                                        children: null !== (q = v.data) && void 0 !== q ? q : 0
                                    }), (0, c.jsx)("p", {
                                        className: "jsx-283905acab89eb50 text-white text-opacity-50 m-0",
                                        children: m("Nodes")
                                    })]
                                }), (0, c.jsxs)("div", {
                                    className: "jsx-283905acab89eb50 text-center",
                                    children: [(0, c.jsx)("h3", {
                                        className: "jsx-283905acab89eb50 m-0 text-4xl",
                                        children: null !== (E = f.data) && void 0 !== E ? E : 0
                                    }), (0, c.jsx)("p", {
                                        className: "jsx-283905acab89eb50 text-white text-opacity-50 m-0",
                                        children: m("Participants")
                                    })]
                                }), (0, c.jsxs)("div", {
                                    className: "jsx-283905acab89eb50 text-center",
                                    children: [(0, c.jsx)("h3", {
                                        className: "jsx-283905acab89eb50 m-0 text-4xl",
                                        children: h()(null !== (I = g.data) && void 0 !== I ? I : 0).format("0[.0]a")
                                    }), (0, c.jsx)("p", {
                                        className: "jsx-283905acab89eb50 text-white text-opacity-50 m-0",
                                        children: m("USDT Verified")
                                    })]
                                }), (0, c.jsxs)("div", {
                                    className: "jsx-283905acab89eb50 text-center",
                                    children: [(0, c.jsx)("h3", {
                                        className: "jsx-283905acab89eb50 m-0 text-4xl",
                                        children: h()(null !== (O = y.data) && void 0 !== O ? O : 0).format("0[.0]a")
                                    }), (0, c.jsxs)("p", {
                                        className: "jsx-283905acab89eb50 text-white text-opacity-50 m-0",
                                        children: [T, " ", m("Reward")]
                                    })]
                                })]
                            }), (0, c.jsx)("h1", {
                                className: "jsx-283905acab89eb50 mt-16 mb-4",
                                children: m("Latest Rewards")
                            }), (0, c.jsxs)("div", {
                                className: "jsx-283905acab89eb50 grid grid-cols-1 md:grid-cols-2",
                                children: [(0, c.jsx)("div", {
                                    className: "jsx-283905acab89eb50 flex items-center justify-center",
                                    children: (0, c.jsx)("img", {
                                        src: "/images/style3/pasa1.png",
                                        draggable: !1,
                                        className: "jsx-283905acab89eb50 max-w-full w-96"
                                    })
                                }), (0, c.jsx)("div", {
                                    className: "jsx-283905acab89eb50",
                                    children: (0, c.jsx)("div", {
                                        className: "jsx-283905acab89eb50 bg-[#131740]  gap-8 p-8",
                                        children: (0, c.jsxs)("table", {
                                            className: "jsx-283905acab89eb50 w-full table-fixed",
                                            children: [(0, c.jsx)("thead", {
                                                className: "jsx-283905acab89eb50",
                                                children: (0, c.jsxs)("tr", {
                                                    className: "jsx-283905acab89eb50",
                                                    children: [(0, c.jsx)("th", {
                                                        className: "jsx-283905acab89eb50 pb-2 text-left",
                                                        children: m("Wallet Address")
                                                    }), (0, c.jsxs)("th", {
                                                        className: "jsx-283905acab89eb50 pb-2 text-right",
                                                        children: [m(T), " ", m("Reward")]
                                                    })]
                                                })
                                            }), (0, c.jsx)("tbody", {
                                                className: "jsx-283905acab89eb50 text-white text-opacity-80 text-sm",
                                                children: null === k || void 0 === k || null === (s = k.map) || void 0 === s ? void 0 : s.call(k, (function(a, e) {
                                                    return (0, c.jsxs)("tr", {
                                                        className: "jsx-283905acab89eb50",
                                                        children: [(0, c.jsx)("td", {
                                                            className: "jsx-283905acab89eb50 text-left",
                                                            children: a.address
                                                        }), (0, c.jsx)("td", {
                                                            className: "jsx-283905acab89eb50 text-right",
                                                            children: (0, x.round)(a.amount, 6)
                                                        })]
                                                    }, "".concat(a.address, "-").concat(e))
                                                }))
                                            })]
                                        })
                                    })
                                })]
                            }), "LightLayout" === p.Z.layout ? (0, c.jsx)("div", {
                                className: "jsx-283905acab89eb50 flex justify-center",
                                children: (0, c.jsx)(o(), {
                                    href: "/whitepaper",
                                    children: (0, c.jsxs)("a", {
                                        className: "jsx-283905acab89eb50 mt-16 mb-4 font-bold text-4xl bg-[#14d7ce] !text-white rounded-full px-6 py-2 flex items-center",
                                        children: [(0, c.jsx)(r.Z, {
                                            className: "h-10 mr-2 -ml-2"
                                        }), m("Whitepaper")]
                                    })
                                })
                            }) : null, (0, c.jsx)("h1", {
                                className: "jsx-283905acab89eb50 mt-16 mb-4",
                                children: m("Partner")
                            }), (0, c.jsxs)("div", {
                                className: "jsx-283905acab89eb50 bg-[#131740] p-8 flex flex-wrap gap-8 items-center",
                                children: [(0, c.jsx)("div", {
                                    className: "jsx-283905acab89eb50",
                                    children: (0, c.jsx)("img", {
                                        src: "/images/coinmarketcap.png",
                                        className: "jsx-283905acab89eb50 max-w-full w-28 block mx-auto rounded-lg shadow"
                                    })
                                }), (0, c.jsx)("div", {
                                    className: "jsx-283905acab89eb50",
                                    children: (0, c.jsx)("img", {
                                        src: "/images/coingecko.png",
                                        className: "jsx-283905acab89eb50 max-w-full w-28 block mx-auto rounded-lg shadow"
                                    })
                                }), (0, c.jsx)("div", {
                                    className: "jsx-283905acab89eb50",
                                    children: (0, c.jsx)("img", {
                                        src: "/images/huobi.png",
                                        className: "jsx-283905acab89eb50 max-w-full w-28 block mx-auto rounded-lg shadow"
                                    })
                                }), (0, c.jsx)("div", {
                                    className: "jsx-283905acab89eb50",
                                    children: (0, c.jsx)("img", {
                                        src: "/images/crypto.com.png",
                                        className: "jsx-283905acab89eb50 max-w-full w-28 block mx-auto rounded-lg shadow"
                                    })
                                }), (0, c.jsx)("div", {
                                    className: "jsx-283905acab89eb50",
                                    children: (0, c.jsx)("img", {
                                        src: "/images/tronpad.png",
                                        className: "jsx-283905acab89eb50 max-w-full w-28 block mx-auto rounded-lg shadow"
                                    })
                                })]
                            }), (0, c.jsx)("h1", {
                                className: "jsx-283905acab89eb50 mt-16 mb-4",
                                children: m("FAQ")
                            }), (0, c.jsxs)(i.Z, {
                                accordion: !0,
                                ghost: !0,
                                children: [(0, c.jsxs)(i.Z.Panel, {
                                    header: (0, c.jsx)("h2", {
                                        className: "jsx-283905acab89eb50 m-0",
                                        children: m("faq3")
                                    }),
                                    className: "bg-[#131740] my-4",
                                    showArrow: !1,
                                    children: [(0, c.jsx)("p", {
                                        className: "jsx-283905acab89eb50",
                                        children: m("faq3a")
                                    }), (0, c.jsx)("p", {
                                        className: "jsx-283905acab89eb50",
                                        children: m("faq3a1")
                                    }), (0, c.jsx)("ul", {
                                        className: "jsx-283905acab89eb50",
                                        children: null === (l = A.data) || void 0 === l ? void 0 : l.map((function(a, e) {
                                            var s;
                                            return (0, c.jsxs)("li", {
                                                className: "jsx-283905acab89eb50",
                                                children: [h()(Number(n.formatUnits(d.O$.from(a.balance), 6))).format("0,0"), (null === (s = A.data) || void 0 === s ? void 0 : s[e + 1]) ? " - " + h()(Number(n.formatUnits(d.O$.from(A.data[e + 1].balance).sub(Math.pow(10, 6)), 6))).format("0,0") : "+", " USDT: ", a.minRate !== a.maxRate ? "".concat((0, x.round)(100 * a.minRate, 1), "% - ").concat((0, x.round)(100 * a.maxRate, 1), "%") : "".concat((0, x.round)(100 * a.minRate, 1), "%")]
                                            }, "rewardRate-".concat(e))
                                        }))
                                    })]
                                }, "3"), (0, c.jsx)(i.Z.Panel, {
                                    header: (0, c.jsx)("h2", {
                                        className: "jsx-283905acab89eb50 m-0",
                                        children: m("faq1")
                                    }),
                                    className: "bg-[#131740] my-4",
                                    showArrow: !1,
                                    children: (0, c.jsx)("p", {
                                        className: "jsx-283905acab89eb50",
                                        children: m("faq1a", {
                                            coin: T
                                        })
                                    })
                                }, "1"), (0, c.jsx)(i.Z.Panel, {
                                    header: (0, c.jsx)("h2", {
                                        className: "jsx-283905acab89eb50 m-0",
                                        children: m("faq2")
                                    }),
                                    className: "bg-[#131740] my-4",
                                    showArrow: !1,
                                    children: (0, c.jsx)("p", {
                                        className: "jsx-283905acab89eb50",
                                        children: m("faq2a", {
                                            coin: T
                                        })
                                    })
                                }, "2"), (0, c.jsx)(i.Z.Panel, {
                                    header: (0, c.jsx)("h2", {
                                        className: "jsx-283905acab89eb50 m-0",
                                        children: m("faq4")
                                    }),
                                    className: "bg-[#131740] my-4",
                                    showArrow: !1,
                                    children: (0, c.jsx)("p", {
                                        className: "jsx-283905acab89eb50",
                                        children: m("faq4a", {
                                            coin: T
                                        })
                                    })
                                }, "4")]
                            }), (0, c.jsx)(t(), {
                                id: "283905acab89eb50",
                                children: ".ant-collapse-item-active .ant-collapse-header>*{color:#ff06b7!important}"
                            })]
                        })
                    })
                };
            g.layout = "LightLayout" === p.Z.layout ? f.Z : v.Z, e.default = g
        }
    },
    function(a) {
        a.O(0, [3662, 4033, 7653, 8089, 1060, 1485, 1604, 3794, 9651, 9774, 2888, 179], (function() {
            return e = 48312, a(a.s = e);
            var e
        }));
        var e = a.O();
        _N_E = e
    }
]);