!(function (t) {
    var e = {};
    function n(r) {
        if (e[r]) return e[r].exports;
        var i = (e[r] = { i: r, l: !1, exports: {} });
        return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    (n.m = t),
        (n.c = e),
        (n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
        }),
        (n.r = function (t) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(t, '__esModule', { value: !0 });
        }),
        (n.t = function (t, e) {
            if ((1 & e && (t = n(t)), 8 & e)) return t;
            if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (
                (n.r(r),
                Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
                2 & e && 'string' != typeof t)
            )
                for (var i in t)
                    n.d(
                        r,
                        i,
                        function (e) {
                            return t[e];
                        }.bind(null, i),
                    );
            return r;
        }),
        (n.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return n.d(e, 'a', e), e;
        }),
        (n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = ''),
        n((n.s = 59));
})([
    function (t, e, n) {
        var r = n(13)('wks'),
            i = n(15),
            o = n(2).Symbol,
            s = 'function' == typeof o;
        (t.exports = function (t) {
            return r[t] || (r[t] = (s && o[t]) || (s ? o : i)('Symbol.' + t));
        }).store = r;
    },
    function (t, e, n) {
        var r = n(4);
        t.exports = function (t) {
            if (!r(t)) throw TypeError(t + ' is not an object!');
            return t;
        };
    },
    function (t, e) {
        var n = (t.exports =
            'undefined' != typeof window && window.Math == Math
                ? window
                : 'undefined' != typeof self && self.Math == Math
                ? self
                : Function('return this')());
        'number' == typeof __g && (__g = n);
    },
    function (t, e, n) {
        var r = n(17),
            i = n(28);
        t.exports = n(7)
            ? function (t, e, n) {
                  return r.f(t, e, i(1, n));
              }
            : function (t, e, n) {
                  return (t[e] = n), t;
              };
    },
    function (t, e) {
        t.exports = function (t) {
            return 'object' == typeof t ? null !== t : 'function' == typeof t;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if (null == t) throw TypeError("Can't call method on  " + t);
            return t;
        };
    },
    function (t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function (t) {
            return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
        };
    },
    function (t, e, n) {
        t.exports = !n(8)(function () {
            return (
                7 !=
                Object.defineProperty({}, 'a', {
                    get: function () {
                        return 7;
                    },
                }).a
            );
        });
    },
    function (t, e) {
        t.exports = function (t) {
            try {
                return !!t();
            } catch (t) {
                return !0;
            }
        };
    },
    function (t, e, n) {
        var r = n(2),
            i = n(3),
            o = n(10),
            s = n(15)('src'),
            c = n(40),
            u = ('' + c).split('toString');
        (n(14).inspectSource = function (t) {
            return c.call(t);
        }),
            (t.exports = function (t, e, n, c) {
                var a = 'function' == typeof n;
                a && (o(n, 'name') || i(n, 'name', e)),
                    t[e] !== n &&
                        (a && (o(n, s) || i(n, s, t[e] ? '' + t[e] : u.join(String(e)))),
                        t === r ? (t[e] = n) : c ? (t[e] ? (t[e] = n) : i(t, e, n)) : (delete t[e], i(t, e, n)));
            })(Function.prototype, 'toString', function () {
                return ('function' == typeof this && this[s]) || c.call(this);
            });
    },
    function (t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function (t, e) {
            return n.call(t, e);
        };
    },
    function (t, e, n) {
        var r = n(6),
            i = Math.min;
        t.exports = function (t) {
            return t > 0 ? i(r(t), 9007199254740991) : 0;
        };
    },
    function (t, e) {
        var n = {}.toString;
        t.exports = function (t) {
            return n.call(t).slice(8, -1);
        };
    },
    function (t, e, n) {
        var r = n(14),
            i = n(2),
            o = i['__core-js_shared__'] || (i['__core-js_shared__'] = {});
        (t.exports = function (t, e) {
            return o[t] || (o[t] = void 0 !== e ? e : {});
        })('versions', []).push({
            version: r.version,
            mode: n(24) ? 'pure' : 'global',
            copyright: '© 2019 Denis Pushkarev (zloirock.ru)',
        });
    },
    function (t, e) {
        var n = (t.exports = { version: '2.6.9' });
        'number' == typeof __e && (__e = n);
    },
    function (t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function (t) {
            return 'Symbol('.concat(void 0 === t ? '' : t, ')_', (++n + r).toString(36));
        };
    },
    function (t, e, n) {
        'use strict';
        var r,
            i,
            o = n(37),
            s = RegExp.prototype.exec,
            c = String.prototype.replace,
            u = s,
            a = ((r = /a/), (i = /b*/g), s.call(r, 'a'), s.call(i, 'a'), 0 !== r.lastIndex || 0 !== i.lastIndex),
            l = void 0 !== /()??/.exec('')[1];
        (a || l) &&
            (u = function (t) {
                var e,
                    n,
                    r,
                    i,
                    u = this;
                return (
                    l && (n = new RegExp('^' + u.source + '$(?!\\s)', o.call(u))),
                    a && (e = u.lastIndex),
                    (r = s.call(u, t)),
                    a && r && (u.lastIndex = u.global ? r.index + r[0].length : e),
                    l &&
                        r &&
                        r.length > 1 &&
                        c.call(r[0], n, function () {
                            for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (r[i] = void 0);
                        }),
                    r
                );
            }),
            (t.exports = u);
    },
    function (t, e, n) {
        var r = n(1),
            i = n(38),
            o = n(39),
            s = Object.defineProperty;
        e.f = n(7)
            ? Object.defineProperty
            : function (t, e, n) {
                  if ((r(t), (e = o(e, !0)), r(n), i))
                      try {
                          return s(t, e, n);
                      } catch (t) {}
                  if ('get' in n || 'set' in n) throw TypeError('Accessors not supported!');
                  return 'value' in n && (t[e] = n.value), t;
              };
    },
    function (t, e) {
        t.exports = {};
    },
    function (t, e, n) {
        var r = n(46),
            i = n(5);
        t.exports = function (t) {
            return r(i(t));
        };
    },
    function (t, e, n) {
        var r = n(13)('keys'),
            i = n(15);
        t.exports = function (t) {
            return r[t] || (r[t] = i(t));
        };
    },
    function (t, e, n) {
        var r = n(5);
        t.exports = function (t) {
            return Object(r(t));
        };
    },
    function (t, e, n) {
        'use strict';
        var r = n(34)(!0);
        t.exports = function (t, e, n) {
            return e + (n ? r(t, e).length : 1);
        };
    },
    function (t, e, n) {
        'use strict';
        var r = n(35),
            i = RegExp.prototype.exec;
        t.exports = function (t, e) {
            var n = t.exec;
            if ('function' == typeof n) {
                var o = n.call(t, e);
                if ('object' != typeof o)
                    throw new TypeError('RegExp exec method returned something other than an Object or null');
                return o;
            }
            if ('RegExp' !== r(t)) throw new TypeError('RegExp#exec called on incompatible receiver');
            return i.call(t, e);
        };
    },
    function (t, e) {
        t.exports = !1;
    },
    function (t, e, n) {
        'use strict';
        n(36);
        var r = n(9),
            i = n(3),
            o = n(8),
            s = n(5),
            c = n(0),
            u = n(16),
            a = c('species'),
            l = !o(function () {
                var t = /./;
                return (
                    (t.exec = function () {
                        var t = [];
                        return (t.groups = { a: '7' }), t;
                    }),
                    '7' !== ''.replace(t, '$<a>')
                );
            }),
            f = (function () {
                var t = /(?:)/,
                    e = t.exec;
                t.exec = function () {
                    return e.apply(this, arguments);
                };
                var n = 'ab'.split(t);
                return 2 === n.length && 'a' === n[0] && 'b' === n[1];
            })();
        t.exports = function (t, e, n) {
            var h = c(t),
                p = !o(function () {
                    var e = {};
                    return (
                        (e[h] = function () {
                            return 7;
                        }),
                        7 != ''[t](e)
                    );
                }),
                d = p
                    ? !o(function () {
                          var e = !1,
                              n = /a/;
                          return (
                              (n.exec = function () {
                                  return (e = !0), null;
                              }),
                              'split' === t &&
                                  ((n.constructor = {}),
                                  (n.constructor[a] = function () {
                                      return n;
                                  })),
                              n[h](''),
                              !e
                          );
                      })
                    : void 0;
            if (!p || !d || ('replace' === t && !l) || ('split' === t && !f)) {
                var v = /./[h],
                    y = n(s, h, ''[t], function (t, e, n, r, i) {
                        return e.exec === u
                            ? p && !i
                                ? { done: !0, value: v.call(e, n, r) }
                                : { done: !0, value: t.call(n, e, r) }
                            : { done: !1 };
                    }),
                    g = y[0],
                    x = y[1];
                r(String.prototype, t, g),
                    i(
                        RegExp.prototype,
                        h,
                        2 == e
                            ? function (t, e) {
                                  return x.call(t, this, e);
                              }
                            : function (t) {
                                  return x.call(t, this);
                              },
                    );
            }
        };
    },
    function (t, e, n) {
        var r = n(2),
            i = n(14),
            o = n(3),
            s = n(9),
            c = n(41),
            u = function (t, e, n) {
                var a,
                    l,
                    f,
                    h,
                    p = t & u.F,
                    d = t & u.G,
                    v = t & u.S,
                    y = t & u.P,
                    g = t & u.B,
                    x = d ? r : v ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
                    m = d ? i : i[e] || (i[e] = {}),
                    b = m.prototype || (m.prototype = {});
                for (a in (d && (n = e), n))
                    (f = ((l = !p && x && void 0 !== x[a]) ? x : n)[a]),
                        (h = g && l ? c(f, r) : y && 'function' == typeof f ? c(Function.call, f) : f),
                        x && s(x, a, f, t & u.U),
                        m[a] != f && o(m, a, h),
                        y && b[a] != f && (b[a] = f);
            };
        (r.core = i),
            (u.F = 1),
            (u.G = 2),
            (u.S = 4),
            (u.P = 8),
            (u.B = 16),
            (u.W = 32),
            (u.U = 64),
            (u.R = 128),
            (t.exports = u);
    },
    function (t, e, n) {
        var r = n(4),
            i = n(2).document,
            o = r(i) && r(i.createElement);
        t.exports = function (t) {
            return o ? i.createElement(t) : {};
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if ('function' != typeof t) throw TypeError(t + ' is not a function!');
            return t;
        };
    },
    function (t, e, n) {
        var r = n(51),
            i = n(31);
        t.exports =
            Object.keys ||
            function (t) {
                return r(t, i);
            };
    },
    function (t, e) {
        t.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
            ',',
        );
    },
    function (t, e, n) {
        var r = n(17).f,
            i = n(10),
            o = n(0)('toStringTag');
        t.exports = function (t, e, n) {
            t && !i((t = n ? t : t.prototype), o) && r(t, o, { configurable: !0, value: e });
        };
    },
    function (t, e, n) {
        'use strict';
        var r = n(1),
            i = n(21),
            o = n(11),
            s = n(6),
            c = n(22),
            u = n(23),
            a = Math.max,
            l = Math.min,
            f = Math.floor,
            h = /\$([$&`']|\d\d?|<[^>]*>)/g,
            p = /\$([$&`']|\d\d?)/g;
        n(25)('replace', 2, function (t, e, n, d) {
            return [
                function (r, i) {
                    var o = t(this),
                        s = null == r ? void 0 : r[e];
                    return void 0 !== s ? s.call(r, o, i) : n.call(String(o), r, i);
                },
                function (t, e) {
                    var i = d(n, t, this, e);
                    if (i.done) return i.value;
                    var f = r(t),
                        h = String(this),
                        p = 'function' == typeof e;
                    p || (e = String(e));
                    var y = f.global;
                    if (y) {
                        var g = f.unicode;
                        f.lastIndex = 0;
                    }
                    for (var x = []; ; ) {
                        var m = u(f, h);
                        if (null === m) break;
                        if ((x.push(m), !y)) break;
                        '' === String(m[0]) && (f.lastIndex = c(h, o(f.lastIndex), g));
                    }
                    for (var b, w = '', k = 0, M = 0; M < x.length; M++) {
                        m = x[M];
                        for (var S = String(m[0]), E = a(l(s(m.index), h.length), 0), L = [], O = 1; O < m.length; O++)
                            L.push(void 0 === (b = m[O]) ? b : String(b));
                        var I = m.groups;
                        if (p) {
                            var C = [S].concat(L, E, h);
                            void 0 !== I && C.push(I);
                            var T = String(e.apply(void 0, C));
                        } else T = v(S, h, E, L, I, e);
                        E >= k && ((w += h.slice(k, E) + T), (k = E + S.length));
                    }
                    return w + h.slice(k);
                },
            ];
            function v(t, e, r, o, s, c) {
                var u = r + t.length,
                    a = o.length,
                    l = p;
                return (
                    void 0 !== s && ((s = i(s)), (l = h)),
                    n.call(c, l, function (n, i) {
                        var c;
                        switch (i.charAt(0)) {
                            case '$':
                                return '$';
                            case '&':
                                return t;
                            case '`':
                                return e.slice(0, r);
                            case "'":
                                return e.slice(u);
                            case '<':
                                c = s[i.slice(1, -1)];
                                break;
                            default:
                                var l = +i;
                                if (0 === l) return n;
                                if (l > a) {
                                    var h = f(l / 10);
                                    return 0 === h
                                        ? n
                                        : h <= a
                                        ? void 0 === o[h - 1]
                                            ? i.charAt(1)
                                            : o[h - 1] + i.charAt(1)
                                        : n;
                                }
                                c = o[l - 1];
                        }
                        return void 0 === c ? '' : c;
                    })
                );
            }
        });
    },
    function (t, e, n) {
        var r = n(6),
            i = n(5);
        t.exports = function (t) {
            return function (e, n) {
                var o,
                    s,
                    c = String(i(e)),
                    u = r(n),
                    a = c.length;
                return u < 0 || u >= a
                    ? t
                        ? ''
                        : void 0
                    : (o = c.charCodeAt(u)) < 55296 ||
                      o > 56319 ||
                      u + 1 === a ||
                      (s = c.charCodeAt(u + 1)) < 56320 ||
                      s > 57343
                    ? t
                        ? c.charAt(u)
                        : o
                    : t
                    ? c.slice(u, u + 2)
                    : s - 56320 + ((o - 55296) << 10) + 65536;
            };
        };
    },
    function (t, e, n) {
        var r = n(12),
            i = n(0)('toStringTag'),
            o =
                'Arguments' ==
                r(
                    (function () {
                        return arguments;
                    })(),
                );
        t.exports = function (t) {
            var e, n, s;
            return void 0 === t
                ? 'Undefined'
                : null === t
                ? 'Null'
                : 'string' ==
                  typeof (n = (function (t, e) {
                      try {
                          return t[e];
                      } catch (t) {}
                  })((e = Object(t)), i))
                ? n
                : o
                ? r(e)
                : 'Object' == (s = r(e)) && 'function' == typeof e.callee
                ? 'Arguments'
                : s;
        };
    },
    function (t, e, n) {
        'use strict';
        var r = n(16);
        n(26)({ target: 'RegExp', proto: !0, forced: r !== /./.exec }, { exec: r });
    },
    function (t, e, n) {
        'use strict';
        var r = n(1);
        t.exports = function () {
            var t = r(this),
                e = '';
            return (
                t.global && (e += 'g'),
                t.ignoreCase && (e += 'i'),
                t.multiline && (e += 'm'),
                t.unicode && (e += 'u'),
                t.sticky && (e += 'y'),
                e
            );
        };
    },
    function (t, e, n) {
        t.exports =
            !n(7) &&
            !n(8)(function () {
                return (
                    7 !=
                    Object.defineProperty(n(27)('div'), 'a', {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            });
    },
    function (t, e, n) {
        var r = n(4);
        t.exports = function (t, e) {
            if (!r(t)) return t;
            var n, i;
            if (e && 'function' == typeof (n = t.toString) && !r((i = n.call(t)))) return i;
            if ('function' == typeof (n = t.valueOf) && !r((i = n.call(t)))) return i;
            if (!e && 'function' == typeof (n = t.toString) && !r((i = n.call(t)))) return i;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    function (t, e, n) {
        t.exports = n(13)('native-function-to-string', Function.toString);
    },
    function (t, e, n) {
        var r = n(29);
        t.exports = function (t, e, n) {
            if ((r(t), void 0 === e)) return t;
            switch (n) {
                case 1:
                    return function (n) {
                        return t.call(e, n);
                    };
                case 2:
                    return function (n, r) {
                        return t.call(e, n, r);
                    };
                case 3:
                    return function (n, r, i) {
                        return t.call(e, n, r, i);
                    };
            }
            return function () {
                return t.apply(e, arguments);
            };
        };
    },
    function (t, e, n) {
        for (
            var r = n(43),
                i = n(30),
                o = n(9),
                s = n(2),
                c = n(3),
                u = n(18),
                a = n(0),
                l = a('iterator'),
                f = a('toStringTag'),
                h = u.Array,
                p = {
                    CSSRuleList: !0,
                    CSSStyleDeclaration: !1,
                    CSSValueList: !1,
                    ClientRectList: !1,
                    DOMRectList: !1,
                    DOMStringList: !1,
                    DOMTokenList: !0,
                    DataTransferItemList: !1,
                    FileList: !1,
                    HTMLAllCollection: !1,
                    HTMLCollection: !1,
                    HTMLFormElement: !1,
                    HTMLSelectElement: !1,
                    MediaList: !0,
                    MimeTypeArray: !1,
                    NamedNodeMap: !1,
                    NodeList: !0,
                    PaintRequestList: !1,
                    Plugin: !1,
                    PluginArray: !1,
                    SVGLengthList: !1,
                    SVGNumberList: !1,
                    SVGPathSegList: !1,
                    SVGPointList: !1,
                    SVGStringList: !1,
                    SVGTransformList: !1,
                    SourceBufferList: !1,
                    StyleSheetList: !0,
                    TextTrackCueList: !1,
                    TextTrackList: !1,
                    TouchList: !1,
                },
                d = i(p),
                v = 0;
            v < d.length;
            v++
        ) {
            var y,
                g = d[v],
                x = p[g],
                m = s[g],
                b = m && m.prototype;
            if (b && (b[l] || c(b, l, h), b[f] || c(b, f, g), (u[g] = h), x)) for (y in r) b[y] || o(b, y, r[y], !0);
        }
    },
    function (t, e, n) {
        'use strict';
        var r = n(44),
            i = n(45),
            o = n(18),
            s = n(19);
        (t.exports = n(47)(
            Array,
            'Array',
            function (t, e) {
                (this._t = s(t)), (this._i = 0), (this._k = e);
            },
            function () {
                var t = this._t,
                    e = this._k,
                    n = this._i++;
                return !t || n >= t.length
                    ? ((this._t = void 0), i(1))
                    : i(0, 'keys' == e ? n : 'values' == e ? t[n] : [n, t[n]]);
            },
            'values',
        )),
            (o.Arguments = o.Array),
            r('keys'),
            r('values'),
            r('entries');
    },
    function (t, e, n) {
        var r = n(0)('unscopables'),
            i = Array.prototype;
        null == i[r] && n(3)(i, r, {}),
            (t.exports = function (t) {
                i[r][t] = !0;
            });
    },
    function (t, e) {
        t.exports = function (t, e) {
            return { value: e, done: !!t };
        };
    },
    function (t, e, n) {
        var r = n(12);
        t.exports = Object('z').propertyIsEnumerable(0)
            ? Object
            : function (t) {
                  return 'String' == r(t) ? t.split('') : Object(t);
              };
    },
    function (t, e, n) {
        'use strict';
        var r = n(24),
            i = n(26),
            o = n(9),
            s = n(3),
            c = n(18),
            u = n(48),
            a = n(32),
            l = n(55),
            f = n(0)('iterator'),
            h = !([].keys && 'next' in [].keys()),
            p = function () {
                return this;
            };
        t.exports = function (t, e, n, d, v, y, g) {
            u(n, e, d);
            var x,
                m,
                b,
                w = function (t) {
                    if (!h && t in E) return E[t];
                    switch (t) {
                        case 'keys':
                        case 'values':
                            return function () {
                                return new n(this, t);
                            };
                    }
                    return function () {
                        return new n(this, t);
                    };
                },
                k = e + ' Iterator',
                M = 'values' == v,
                S = !1,
                E = t.prototype,
                L = E[f] || E['@@iterator'] || (v && E[v]),
                O = L || w(v),
                I = v ? (M ? w('entries') : O) : void 0,
                C = ('Array' == e && E.entries) || L;
            if (
                (C &&
                    (b = l(C.call(new t()))) !== Object.prototype &&
                    b.next &&
                    (a(b, k, !0), r || 'function' == typeof b[f] || s(b, f, p)),
                M &&
                    L &&
                    'values' !== L.name &&
                    ((S = !0),
                    (O = function () {
                        return L.call(this);
                    })),
                (r && !g) || (!h && !S && E[f]) || s(E, f, O),
                (c[e] = O),
                (c[k] = p),
                v)
            )
                if (((x = { values: M ? O : w('values'), keys: y ? O : w('keys'), entries: I }), g))
                    for (m in x) m in E || o(E, m, x[m]);
                else i(i.P + i.F * (h || S), e, x);
            return x;
        };
    },
    function (t, e, n) {
        'use strict';
        var r = n(49),
            i = n(28),
            o = n(32),
            s = {};
        n(3)(s, n(0)('iterator'), function () {
            return this;
        }),
            (t.exports = function (t, e, n) {
                (t.prototype = r(s, { next: i(1, n) })), o(t, e + ' Iterator');
            });
    },
    function (t, e, n) {
        var r = n(1),
            i = n(50),
            o = n(31),
            s = n(20)('IE_PROTO'),
            c = function () {},
            u = function () {
                var t,
                    e = n(27)('iframe'),
                    r = o.length;
                for (
                    e.style.display = 'none',
                        n(54).appendChild(e),
                        e.src = 'javascript:',
                        (t = e.contentWindow.document).open(),
                        t.write('<script>document.F=Object</script>'),
                        t.close(),
                        u = t.F;
                    r--;

                )
                    delete u.prototype[o[r]];
                return u();
            };
        t.exports =
            Object.create ||
            function (t, e) {
                var n;
                return (
                    null !== t ? ((c.prototype = r(t)), (n = new c()), (c.prototype = null), (n[s] = t)) : (n = u()),
                    void 0 === e ? n : i(n, e)
                );
            };
    },
    function (t, e, n) {
        var r = n(17),
            i = n(1),
            o = n(30);
        t.exports = n(7)
            ? Object.defineProperties
            : function (t, e) {
                  i(t);
                  for (var n, s = o(e), c = s.length, u = 0; c > u; ) r.f(t, (n = s[u++]), e[n]);
                  return t;
              };
    },
    function (t, e, n) {
        var r = n(10),
            i = n(19),
            o = n(52)(!1),
            s = n(20)('IE_PROTO');
        t.exports = function (t, e) {
            var n,
                c = i(t),
                u = 0,
                a = [];
            for (n in c) n != s && r(c, n) && a.push(n);
            for (; e.length > u; ) r(c, (n = e[u++])) && (~o(a, n) || a.push(n));
            return a;
        };
    },
    function (t, e, n) {
        var r = n(19),
            i = n(11),
            o = n(53);
        t.exports = function (t) {
            return function (e, n, s) {
                var c,
                    u = r(e),
                    a = i(u.length),
                    l = o(s, a);
                if (t && n != n) {
                    for (; a > l; ) if ((c = u[l++]) != c) return !0;
                } else for (; a > l; l++) if ((t || l in u) && u[l] === n) return t || l || 0;
                return !t && -1;
            };
        };
    },
    function (t, e, n) {
        var r = n(6),
            i = Math.max,
            o = Math.min;
        t.exports = function (t, e) {
            return (t = r(t)) < 0 ? i(t + e, 0) : o(t, e);
        };
    },
    function (t, e, n) {
        var r = n(2).document;
        t.exports = r && r.documentElement;
    },
    function (t, e, n) {
        var r = n(10),
            i = n(21),
            o = n(20)('IE_PROTO'),
            s = Object.prototype;
        t.exports =
            Object.getPrototypeOf ||
            function (t) {
                return (
                    (t = i(t)),
                    r(t, o)
                        ? t[o]
                        : 'function' == typeof t.constructor && t instanceof t.constructor
                        ? t.constructor.prototype
                        : t instanceof Object
                        ? s
                        : null
                );
            };
    },
    function (t, e, n) {
        'use strict';
        var r = n(57),
            i = n(1),
            o = n(58),
            s = n(22),
            c = n(11),
            u = n(23),
            a = n(16),
            l = n(8),
            f = Math.min,
            h = [].push,
            p = !l(function () {
                RegExp(4294967295, 'y');
            });
        n(25)('split', 2, function (t, e, n, l) {
            var d;
            return (
                (d =
                    'c' == 'abbc'.split(/(b)*/)[1] ||
                    4 != 'test'.split(/(?:)/, -1).length ||
                    2 != 'ab'.split(/(?:ab)*/).length ||
                    4 != '.'.split(/(.?)(.?)/).length ||
                    '.'.split(/()()/).length > 1 ||
                    ''.split(/.?/).length
                        ? function (t, e) {
                              var i = String(this);
                              if (void 0 === t && 0 === e) return [];
                              if (!r(t)) return n.call(i, t, e);
                              for (
                                  var o,
                                      s,
                                      c,
                                      u = [],
                                      l =
                                          (t.ignoreCase ? 'i' : '') +
                                          (t.multiline ? 'm' : '') +
                                          (t.unicode ? 'u' : '') +
                                          (t.sticky ? 'y' : ''),
                                      f = 0,
                                      p = void 0 === e ? 4294967295 : e >>> 0,
                                      d = new RegExp(t.source, l + 'g');
                                  (o = a.call(d, i)) &&
                                  !(
                                      (s = d.lastIndex) > f &&
                                      (u.push(i.slice(f, o.index)),
                                      o.length > 1 && o.index < i.length && h.apply(u, o.slice(1)),
                                      (c = o[0].length),
                                      (f = s),
                                      u.length >= p)
                                  );

                              )
                                  d.lastIndex === o.index && d.lastIndex++;
                              return (
                                  f === i.length ? (!c && d.test('')) || u.push('') : u.push(i.slice(f)),
                                  u.length > p ? u.slice(0, p) : u
                              );
                          }
                        : '0'.split(void 0, 0).length
                        ? function (t, e) {
                              return void 0 === t && 0 === e ? [] : n.call(this, t, e);
                          }
                        : n),
                [
                    function (n, r) {
                        var i = t(this),
                            o = null == n ? void 0 : n[e];
                        return void 0 !== o ? o.call(n, i, r) : d.call(String(i), n, r);
                    },
                    function (t, e) {
                        var r = l(d, t, this, e, d !== n);
                        if (r.done) return r.value;
                        var a = i(t),
                            h = String(this),
                            v = o(a, RegExp),
                            y = a.unicode,
                            g =
                                (a.ignoreCase ? 'i' : '') +
                                (a.multiline ? 'm' : '') +
                                (a.unicode ? 'u' : '') +
                                (p ? 'y' : 'g'),
                            x = new v(p ? a : '^(?:' + a.source + ')', g),
                            m = void 0 === e ? 4294967295 : e >>> 0;
                        if (0 === m) return [];
                        if (0 === h.length) return null === u(x, h) ? [h] : [];
                        for (var b = 0, w = 0, k = []; w < h.length; ) {
                            x.lastIndex = p ? w : 0;
                            var M,
                                S = u(x, p ? h : h.slice(w));
                            if (null === S || (M = f(c(x.lastIndex + (p ? 0 : w)), h.length)) === b) w = s(h, w, y);
                            else {
                                if ((k.push(h.slice(b, w)), k.length === m)) return k;
                                for (var E = 1; E <= S.length - 1; E++) if ((k.push(S[E]), k.length === m)) return k;
                                w = b = M;
                            }
                        }
                        return k.push(h.slice(b)), k;
                    },
                ]
            );
        });
    },
    function (t, e, n) {
        var r = n(4),
            i = n(12),
            o = n(0)('match');
        t.exports = function (t) {
            var e;
            return r(t) && (void 0 !== (e = t[o]) ? !!e : 'RegExp' == i(t));
        };
    },
    function (t, e, n) {
        var r = n(1),
            i = n(29),
            o = n(0)('species');
        t.exports = function (t, e) {
            var n,
                s = r(t).constructor;
            return void 0 === s || null == (n = r(s)[o]) ? e : i(n);
        };
    },
    function (t, e, n) {
        'use strict';
        n.r(e);
        n(33);
        var r = class {
            constructor(t, e, n) {
                (this.x = t), (this.y = e), (this.side = n);
            }
            move(t) {
                const e = Number(t[0]),
                    n = Number(t[2]);
                (P[this.x][this.y] = null),
                    (document.getElementById(''.concat(this.x, ',').concat(this.y)).innerHTML = ''),
                    (this.x = e),
                    (this.y = n),
                    (P[this.x][this.y] = this),
                    (document.getElementById(t).innerHTML = this.display);
            }
            findLegalMoves() {}
            findAttackMoves() {}
        };
        n(42), n(56);
        function i(t, e) {
            return ''.concat(t, ',').concat(e);
        }
        function o(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return function () {
                return e || (e = t(...arguments));
            };
        }
        function s(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return function () {
                return e || ((e = t(...arguments)), !1);
            };
        }
        function c(t, e) {
            return [].concat(...t.map(e));
        }
        function u(t, e) {
            return t
                .filter((t) => {
                    let [n, r] = t;
                    return !e(n, r);
                })
                .map((t) => {
                    let [e, n] = t;
                    return i(e, n);
                });
        }
        function a(t, e) {
            const n = (t) => t < 0 || t > 7;
            return n(t) || n(e);
        }
        function l(t, e) {
            return !!P[t][e];
        }
        function f(t, e, n) {
            return P[e][n] && P[e][n].side === t;
        }
        function h(t, e, n) {
            return P[e][n] && P[e][n].side !== t;
        }
        function p(t, e) {
            const n = s(h);
            let r = (t, r) => a(t, r) || f(e.side, t, r) || n(t, r);
            const i = o(r);
            return u(t, (r = (t, n) => i(t, n) || w(e, t, n)));
        }
        function d(t) {
            const e = s(l);
            return u(
                t,
                o((t, n) => a(t, n) || e(t, n)),
            );
        }
        function v(t, e) {
            return (n, r) =>
                (function (t, e, n, r) {
                    let i = 0,
                        o = 0;
                    return [...Array(7)].map(() => [n + (i += t), r + (o += e)]);
                })(n, r, t, e);
        }
        function* y(t) {
            let e = 0;
            for (let n of t) yield [n, e++];
        }
        function* g() {
            for (let [t, e] of y(P)) for (let [n, r] of y(t)) yield [n, e, r];
        }
        function x(t) {
            const e = new Set();
            for (let [n] of g()) if (n && n.side !== t) for (let t of n.findAttackMoves()) e.add(t);
            return e;
        }
        function m(t, e, n) {
            const r = P[e][n];
            return (P[e][n] = t), (P[t.x][t.y] = null), r;
        }
        function b(t, e, n, r) {
            (P[t.x][t.y] = t), (P[n][r] = e);
        }
        function w(t, e, n) {
            const r = m(t, e, n),
                o = x(t.side),
                s = 'white' === t.side ? _ : T;
            return b(t, r, e, n), o.has(i(s.x, s.y));
        }
        function k(t) {
            return (
                0 ===
                (function (t) {
                    const e = new Set();
                    for (let [n] of g()) if (n && n.side === t) for (let t of n.findLegalMoves()) e.add(t);
                    return e;
                })(t.side).size
            );
        }
        var M = class extends r {
            constructor(t, e, n) {
                super(t, e, n),
                    (this.name = 'queen'),
                    (this.display = '<i class="fas fa-chess-queen '.concat(n, '"></i>'));
            }
            generateMoves() {
                const t = v(this.x, this.y);
                return [t(0, -1), t(1, 0), t(0, 1), t(-1, 0), t(-1, -1), t(-1, 1), t(1, -1), t(1, 1)];
            }
            findLegalMoves() {
                return c(this.generateMoves(), (t) => p(t, this));
            }
            findAttackMoves() {
                return c(this.generateMoves(), (t) => d(t));
            }
        };
        var S = class extends r {
            constructor(t, e, n) {
                super(t, e, n),
                    (this.name = 'bishop'),
                    (this.display = '<i class="fas fa-chess-bishop '.concat(n, '"></i>'));
            }
            generateMoves() {
                const t = v(this.x, this.y);
                return [t(-1, -1), t(-1, 1), t(1, -1), t(1, 1)];
            }
            findLegalMoves() {
                return c(this.generateMoves(), (t) => p(t, this));
            }
            findAttackMoves() {
                return c(this.generateMoves(), (t) => d(t));
            }
        };
        var E = class extends r {
            constructor(t, e, n) {
                super(t, e, n),
                    (this.name = 'knight'),
                    (this.display = '<i class="fas fa-chess-knight '.concat(n, '"></i>')),
                    (this.knightJumpes = [
                        [2, -1],
                        [2, 1],
                        [1, -2],
                        [1, 2],
                        [-2, -1],
                        [-2, 1],
                        [-1, -2],
                        [-1, 2],
                    ]);
            }
            findLegalMoves() {
                let t, e;
                const n = [];
                return (
                    this.knightJumpes.forEach((r) => {
                        (t = this.x + r[0]),
                            (e = this.y + r[1]),
                            t >= 0 &&
                                t < 8 &&
                                e >= 0 &&
                                e < 8 &&
                                !((P[t][e] && P[t][e].side === this.side) || w(this, t, e)) &&
                                n.push(''.concat(t, ',').concat(e));
                    }),
                    n
                );
            }
            findAttackMoves() {
                let t, e;
                const n = [];
                return (
                    this.knightJumpes.forEach((r) => {
                        (t = this.x + r[0]),
                            (e = this.y + r[1]),
                            t >= 0 && t < 8 && e >= 0 && e < 8 && n.push(''.concat(t, ',').concat(e));
                    }),
                    n
                );
            }
        };
        var L = class extends r {
            constructor(t, e, n) {
                super(t, e, n),
                    (this.name = 'rook'),
                    (this.display = '<i class="fas fa-chess-rook '.concat(n, '"></i>'));
            }
            generateMoves() {
                const t = v(this.x, this.y);
                return [t(0, -1), t(1, 0), t(0, 1), t(-1, 0)];
            }
            findLegalMoves() {
                return c(this.generateMoves(), (t) => p(t, this));
            }
            findAttackMoves() {
                return c(this.generateMoves(), (t) => d(t));
            }
        };
        var O = class extends r {
            constructor(t, e, n) {
                super(t, e, n),
                    (this.name = 'pawn'),
                    (this.display = '<i class="fas fa-chess-pawn '.concat(n, '"></i>'));
            }
            findLegalMoves() {
                const t = [],
                    e = 'white' === this.side ? -1 : 1,
                    n = -2.5 * e + 3.5;
                this.x === n &&
                    (P[this.x + 1 * e][this.y] ||
                        P[this.x + 2 * e][this.y] ||
                        t.push(''.concat(this.x + 2 * e, ',').concat(this.y))),
                    this.x + 1 * e <= 7 &&
                        this.x + 1 * e >= 0 &&
                        !P[this.x + 1 * e][this.y] &&
                        t.push(''.concat(this.x + 1 * e, ',').concat(this.y)),
                    this.x + 1 * e <= 7 &&
                        this.x + 1 * e >= 0 &&
                        (this.y + 1 <= 7 &&
                            P[this.x + 1 * e][this.y + 1] &&
                            P[this.x + 1 * e][this.y + 1].side == (1 === e ? 'white' : 'black') &&
                            t.push(''.concat(this.x + 1 * e, ',').concat(this.y + 1)),
                        this.y - 1 >= 0 &&
                            P[this.x + 1 * e][this.y - 1] &&
                            P[this.x + 1 * e][this.y - 1].side == (1 === e ? 'white' : 'black') &&
                            t.push(''.concat(this.x + 1 * e, ',').concat(this.y - 1)));
                return u(
                    t.map((t) =>
                        (function (t) {
                            return t.split(',').map((t) => Number(t));
                        })(t),
                    ),
                    (t, e) => w(this, t, e),
                );
            }
            move(t) {
                super.move(t), (0 !== this.x && 7 !== this.x) || this.promote();
            }
            promote() {
                let t,
                    e = ['queen', 'bishop', 'knight', 'rook'];
                ((t = document.createElement('div')).className = 'promoChoice'),
                    (t.id = 'proCho'),
                    document.getElementById('wrapper').appendChild(t),
                    ((t = document.createElement('ul')).className = 'promoChoiceList'),
                    (t.id = 'proChoList'),
                    document.getElementById('proCho').appendChild(t);
                for (let n = 0; n < e.length; n++)
                    ((t = document.createElement('li')).className = 'square'),
                        (t.id = 'proCho-'.concat(e[n])),
                        document.getElementById('proChoList').appendChild(t),
                        ((t = document.createElement('i')).className = 'fas fa-chess-'.concat(
                            e[n],
                            ' black promoChoiceItem',
                        )),
                        t.addEventListener('click', () => {
                            this.promoTouched(e[n]);
                        }),
                        document.getElementById('proCho-'.concat(e[n])).appendChild(t);
            }
            promoTouched(t) {
                switch (
                    ((P[this.x][this.y] = null),
                    (document.getElementById(''.concat(this.x, ',').concat(this.y)).innerHTML = ''),
                    t)
                ) {
                    case 'queen':
                        P[this.x][this.y] = new M(this.x, this.y, this.side);
                        break;
                    case 'bishop':
                        P[this.x][this.y] = new S(this.x, this.y, this.side);
                        break;
                    case 'knight':
                        P[this.x][this.y] = new E(this.x, this.y, this.side);
                        break;
                    case 'rook':
                        P[this.x][this.y] = new L(this.x, this.y, this.side);
                }
                document.getElementById(''.concat(this.x, ',').concat(this.y)).innerHTML = P[this.x][this.y].display;
                let e = document.getElementById('wrapper');
                e.removeChild(e.lastChild);
            }
            enPassant() {}
            generateAttackMoves() {
                return ('white' === this.side
                    ? [
                          [-1, -1],
                          [-1, 1],
                      ]
                    : [
                          [1, -1],
                          [1, 1],
                      ]
                ).map((t) => {
                    let [e, n] = t;
                    return [this.x + e, this.y + n];
                });
            }
            findAttackMoves() {
                return u(this.generateAttackMoves(), (t, e) => a(t, e));
            }
        };
        var I = class extends r {
            constructor(t, e, n) {
                super(t, e, n),
                    (this.name = 'king'),
                    (this.display = '<i class="fas fa-chess-king '.concat(n, '"></i>'));
            }
            generateMoves() {
                return [
                    [-1, -1],
                    [0, -1],
                    [1, -1],
                    [-1, 0],
                    [1, 0],
                    [-1, 1],
                    [0, 1],
                    [1, 1],
                ].map((t) => {
                    let [e, n] = t;
                    return [this.x + e, this.y + n];
                });
            }
            findLegalMoves() {
                return u(
                    this.generateMoves(),
                    (t, e) =>
                        a(t, e) ||
                        f(this.side, t, e) ||
                        (function (t, e, n) {
                            const r = m(t, e, n),
                                o = x(t.side);
                            return b(t, r, e, n), o.has(i(e, n));
                        })(this, t, e),
                );
            }
            findAttackMoves() {
                return u(this.generateMoves(), (t, e) => a(t, e));
            }
        };
        const C = new Array(8);
        for (let t = 0; t < 8; t++) C[t] = new Array(8);
        let T, _;
        const j = () => {
            for (let t = 0; t < 8; t++) for (let e = 0; e < 8; e++) C[t][e] = null;
        };
        function A() {
            let t;
            j();
            for (let e = 0; e < 8; e++)
                (t = new O(6, e, 'white')), (C[t.x][t.y] = t), (t = new O(1, e, 'black')), (C[t.x][t.y] = t);
            let e = new E(0, 1, 'black');
            (C[e.x][e.y] = e),
                (e = new E(0, 6, 'black')),
                (C[e.x][e.y] = e),
                (e = new E(7, 1, 'white')),
                (C[e.x][e.y] = e),
                (e = new E(7, 6, 'white')),
                (C[e.x][e.y] = e),
                (T = new I(0, 4, 'black')),
                (C[T.x][T.y] = T),
                (_ = new I(7, 4, 'white')),
                (C[_.x][_.y] = _);
            let n = new M(0, 3, 'black');
            (C[n.x][n.y] = n), (n = new M(7, 3, 'white')), (C[n.x][n.y] = n);
            let r = new L(0, 0, 'black');
            (C[r.x][r.y] = r),
                (r = new L(0, 7, 'black')),
                (C[r.x][r.y] = r),
                (r = new L(7, 0, 'white')),
                (C[r.x][r.y] = r),
                (r = new L(7, 7, 'white')),
                (C[r.x][r.y] = r);
            let i = new S(0, 2, 'black');
            (C[i.x][i.y] = i),
                (i = new S(0, 5, 'black')),
                (C[i.x][i.y] = i),
                (i = new S(7, 2, 'white')),
                (C[i.x][i.y] = i),
                (i = new S(7, 5, 'white')),
                (C[i.x][i.y] = i);
        }
        A();
        var P = C;
        let N = [],
            R = 'white',
            B = '',
            F = '';
        const q = () => {
                (B = ''), (F = '');
            },
            H = () => {
                ((t) => {
                    for (; t.firstChild; ) t.removeChild(t.firstChild);
                })(document.getElementById('board')),
                    (document.querySelector('.checkmate-box-wrapper').style.display = 'none'),
                    A(),
                    V();
            },
            G = (t) => {
                const e = t.side,
                    n = document.querySelector('.checkmate-box'),
                    r = document.querySelector('.checkmate-box-wrapper');
                (r.style.display = 'block'),
                    (n.lastElementChild.textContent = ''.concat(e, ' won !')),
                    (n.style.background = e),
                    (n.style.color = 'black' === e ? 'white' : 'black'),
                    r.addEventListener('click', H);
            };
        var $ = (t) => {
            if (B && F) {
                const e = 'I' === t.target.tagName ? t.target.parentNode.id : t.target.id;
                N.includes(e) && (P[B][F].move(e), (R = 'white' === R ? 'black' : 'white')),
                    ((t) => {
                        t.forEach((t) => {
                            document.getElementById(t).className = document
                                .getElementById(t)
                                .className.replace('possibleMove', '');
                            let e = document.getElementById(t),
                                n = e.cloneNode(!0);
                            e.parentNode.replaceChild(n, e);
                        });
                    })(N),
                    q(),
                    k(_) && G(T),
                    k(T) && G(_);
            } else {
                const e = 'I' === t.target.tagName ? t.target.parentNode.id : t.target.id;
                if (((B = e[0]), (F = e[2]), !P[B][F] || P[B][F].side !== R)) return void q();
                if (0 === (N = P[B][F].findLegalMoves()).length) return void q();
                for (let t of N) document.getElementById(t).className += ' possibleMove';
            }
        };
        var V = () => {
            for (let t = 0; t < P.length; t++)
                for (let e = 0; e < P[t].length; e++) {
                    const n = document.createElement('div');
                    (n.id = ''.concat(t, ',').concat(e)),
                        (n.innerHTML = P[t][e] ? P[t][e].display : ''),
                        (n.className = 'square'),
                        (n.className += t % 2 == e % 2 ? ' light' : ' dark'),
                        document.getElementById('board').appendChild(n);
                }
            document.getElementById('board').addEventListener('click', $);
        };
        window.onload = V;
    },
]);
