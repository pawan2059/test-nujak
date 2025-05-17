(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) o(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const m of d.addedNodes)
          m.tagName === "LINK" && m.rel === "modulepreload" && o(m);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(c) {
    const d = {};
    return (
      c.integrity && (d.integrity = c.integrity),
      c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function o(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = r(c);
    fetch(c.href, d);
  }
})();
function Lc(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default")
    ? s.default
    : s;
}
var Ko = { exports: {} },
  jl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hm;
function Kv() {
  if (Hm) return jl;
  Hm = 1;
  var s = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function r(o, c, d) {
    var m = null;
    if (
      (d !== void 0 && (m = "" + d),
      c.key !== void 0 && (m = "" + c.key),
      "key" in c)
    ) {
      d = {};
      for (var p in c) p !== "key" && (d[p] = c[p]);
    } else d = c;
    return (
      (c = d.ref),
      { $$typeof: s, type: o, key: m, ref: c !== void 0 ? c : null, props: d }
    );
  }
  return (jl.Fragment = i), (jl.jsx = r), (jl.jsxs = r), jl;
}
var Ym;
function $v() {
  return Ym || ((Ym = 1), (Ko.exports = Kv())), Ko.exports;
}
var z = $v(),
  $o = { exports: {} },
  it = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vm;
function Jv() {
  if (Vm) return it;
  Vm = 1;
  var s = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    m = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    S = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    O = Symbol.for("react.lazy"),
    v = Symbol.iterator;
  function C(b) {
    return b === null || typeof b != "object"
      ? null
      : ((b = (v && b[v]) || b["@@iterator"]),
        typeof b == "function" ? b : null);
  }
  var H = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Z = Object.assign,
    at = {};
  function V(b, M, L) {
    (this.props = b),
      (this.context = M),
      (this.refs = at),
      (this.updater = L || H);
  }
  (V.prototype.isReactComponent = {}),
    (V.prototype.setState = function (b, M) {
      if (typeof b != "object" && typeof b != "function" && b != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, b, M, "setState");
    }),
    (V.prototype.forceUpdate = function (b) {
      this.updater.enqueueForceUpdate(this, b, "forceUpdate");
    });
  function ot() {}
  ot.prototype = V.prototype;
  function mt(b, M, L) {
    (this.props = b),
      (this.context = M),
      (this.refs = at),
      (this.updater = L || H);
  }
  var nt = (mt.prototype = new ot());
  (nt.constructor = mt), Z(nt, V.prototype), (nt.isPureReactComponent = !0);
  var ct = Array.isArray,
    K = { H: null, A: null, T: null, S: null, V: null },
    _t = Object.prototype.hasOwnProperty;
  function Nt(b, M, L, j, G, st) {
    return (
      (L = st.ref),
      { $$typeof: s, type: b, key: M, ref: L !== void 0 ? L : null, props: st }
    );
  }
  function qt(b, M) {
    return Nt(b.type, M, void 0, void 0, void 0, b.props);
  }
  function Kt(b) {
    return typeof b == "object" && b !== null && b.$$typeof === s;
  }
  function Te(b) {
    var M = { "=": "=0", ":": "=2" };
    return (
      "$" +
      b.replace(/[=:]/g, function (L) {
        return M[L];
      })
    );
  }
  var kt = /\/+/g;
  function Ct(b, M) {
    return typeof b == "object" && b !== null && b.key != null
      ? Te("" + b.key)
      : M.toString(36);
  }
  function lt() {}
  function yt(b) {
    switch (b.status) {
      case "fulfilled":
        return b.value;
      case "rejected":
        throw b.reason;
      default:
        switch (
          (typeof b.status == "string"
            ? b.then(lt, lt)
            : ((b.status = "pending"),
              b.then(
                function (M) {
                  b.status === "pending" &&
                    ((b.status = "fulfilled"), (b.value = M));
                },
                function (M) {
                  b.status === "pending" &&
                    ((b.status = "rejected"), (b.reason = M));
                }
              )),
          b.status)
        ) {
          case "fulfilled":
            return b.value;
          case "rejected":
            throw b.reason;
        }
    }
    throw b;
  }
  function $(b, M, L, j, G) {
    var st = typeof b;
    (st === "undefined" || st === "boolean") && (b = null);
    var Q = !1;
    if (b === null) Q = !0;
    else
      switch (st) {
        case "bigint":
        case "string":
        case "number":
          Q = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case s:
            case i:
              Q = !0;
              break;
            case O:
              return (Q = b._init), $(Q(b._payload), M, L, j, G);
          }
      }
    if (Q)
      return (
        (G = G(b)),
        (Q = j === "" ? "." + Ct(b, 0) : j),
        ct(G)
          ? ((L = ""),
            Q != null && (L = Q.replace(kt, "$&/") + "/"),
            $(G, M, L, "", function (ve) {
              return ve;
            }))
          : G != null &&
            (Kt(G) &&
              (G = qt(
                G,
                L +
                  (G.key == null || (b && b.key === G.key)
                    ? ""
                    : ("" + G.key).replace(kt, "$&/") + "/") +
                  Q
              )),
            M.push(G)),
        1
      );
    Q = 0;
    var $t = j === "" ? "." : j + ":";
    if (ct(b))
      for (var bt = 0; bt < b.length; bt++)
        (j = b[bt]), (st = $t + Ct(j, bt)), (Q += $(j, M, L, st, G));
    else if (((bt = C(b)), typeof bt == "function"))
      for (b = bt.call(b), bt = 0; !(j = b.next()).done; )
        (j = j.value), (st = $t + Ct(j, bt++)), (Q += $(j, M, L, st, G));
    else if (st === "object") {
      if (typeof b.then == "function") return $(yt(b), M, L, j, G);
      throw (
        ((M = String(b)),
        Error(
          "Objects are not valid as a React child (found: " +
            (M === "[object Object]"
              ? "object with keys {" + Object.keys(b).join(", ") + "}"
              : M) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return Q;
  }
  function T(b, M, L) {
    if (b == null) return b;
    var j = [],
      G = 0;
    return (
      $(b, j, "", "", function (st) {
        return M.call(L, st, G++);
      }),
      j
    );
  }
  function k(b) {
    if (b._status === -1) {
      var M = b._result;
      (M = M()),
        M.then(
          function (L) {
            (b._status === 0 || b._status === -1) &&
              ((b._status = 1), (b._result = L));
          },
          function (L) {
            (b._status === 0 || b._status === -1) &&
              ((b._status = 2), (b._result = L));
          }
        ),
        b._status === -1 && ((b._status = 0), (b._result = M));
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var Y =
    typeof reportError == "function"
      ? reportError
      : function (b) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var M = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof b == "object" &&
                b !== null &&
                typeof b.message == "string"
                  ? String(b.message)
                  : String(b),
              error: b,
            });
            if (!window.dispatchEvent(M)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", b);
            return;
          }
          console.error(b);
        };
  function tt() {}
  return (
    (it.Children = {
      map: T,
      forEach: function (b, M, L) {
        T(
          b,
          function () {
            M.apply(this, arguments);
          },
          L
        );
      },
      count: function (b) {
        var M = 0;
        return (
          T(b, function () {
            M++;
          }),
          M
        );
      },
      toArray: function (b) {
        return (
          T(b, function (M) {
            return M;
          }) || []
        );
      },
      only: function (b) {
        if (!Kt(b))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return b;
      },
    }),
    (it.Component = V),
    (it.Fragment = r),
    (it.Profiler = c),
    (it.PureComponent = mt),
    (it.StrictMode = o),
    (it.Suspense = S),
    (it.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K),
    (it.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (b) {
        return K.H.useMemoCache(b);
      },
    }),
    (it.cache = function (b) {
      return function () {
        return b.apply(null, arguments);
      };
    }),
    (it.cloneElement = function (b, M, L) {
      if (b == null)
        throw Error(
          "The argument must be a React element, but you passed " + b + "."
        );
      var j = Z({}, b.props),
        G = b.key,
        st = void 0;
      if (M != null)
        for (Q in (M.ref !== void 0 && (st = void 0),
        M.key !== void 0 && (G = "" + M.key),
        M))
          !_t.call(M, Q) ||
            Q === "key" ||
            Q === "__self" ||
            Q === "__source" ||
            (Q === "ref" && M.ref === void 0) ||
            (j[Q] = M[Q]);
      var Q = arguments.length - 2;
      if (Q === 1) j.children = L;
      else if (1 < Q) {
        for (var $t = Array(Q), bt = 0; bt < Q; bt++)
          $t[bt] = arguments[bt + 2];
        j.children = $t;
      }
      return Nt(b.type, G, void 0, void 0, st, j);
    }),
    (it.createContext = function (b) {
      return (
        (b = {
          $$typeof: m,
          _currentValue: b,
          _currentValue2: b,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (b.Provider = b),
        (b.Consumer = { $$typeof: d, _context: b }),
        b
      );
    }),
    (it.createElement = function (b, M, L) {
      var j,
        G = {},
        st = null;
      if (M != null)
        for (j in (M.key !== void 0 && (st = "" + M.key), M))
          _t.call(M, j) &&
            j !== "key" &&
            j !== "__self" &&
            j !== "__source" &&
            (G[j] = M[j]);
      var Q = arguments.length - 2;
      if (Q === 1) G.children = L;
      else if (1 < Q) {
        for (var $t = Array(Q), bt = 0; bt < Q; bt++)
          $t[bt] = arguments[bt + 2];
        G.children = $t;
      }
      if (b && b.defaultProps)
        for (j in ((Q = b.defaultProps), Q)) G[j] === void 0 && (G[j] = Q[j]);
      return Nt(b, st, void 0, void 0, null, G);
    }),
    (it.createRef = function () {
      return { current: null };
    }),
    (it.forwardRef = function (b) {
      return { $$typeof: p, render: b };
    }),
    (it.isValidElement = Kt),
    (it.lazy = function (b) {
      return { $$typeof: O, _payload: { _status: -1, _result: b }, _init: k };
    }),
    (it.memo = function (b, M) {
      return { $$typeof: g, type: b, compare: M === void 0 ? null : M };
    }),
    (it.startTransition = function (b) {
      var M = K.T,
        L = {};
      K.T = L;
      try {
        var j = b(),
          G = K.S;
        G !== null && G(L, j),
          typeof j == "object" &&
            j !== null &&
            typeof j.then == "function" &&
            j.then(tt, Y);
      } catch (st) {
        Y(st);
      } finally {
        K.T = M;
      }
    }),
    (it.unstable_useCacheRefresh = function () {
      return K.H.useCacheRefresh();
    }),
    (it.use = function (b) {
      return K.H.use(b);
    }),
    (it.useActionState = function (b, M, L) {
      return K.H.useActionState(b, M, L);
    }),
    (it.useCallback = function (b, M) {
      return K.H.useCallback(b, M);
    }),
    (it.useContext = function (b) {
      return K.H.useContext(b);
    }),
    (it.useDebugValue = function () {}),
    (it.useDeferredValue = function (b, M) {
      return K.H.useDeferredValue(b, M);
    }),
    (it.useEffect = function (b, M, L) {
      var j = K.H;
      if (typeof L == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return j.useEffect(b, M);
    }),
    (it.useId = function () {
      return K.H.useId();
    }),
    (it.useImperativeHandle = function (b, M, L) {
      return K.H.useImperativeHandle(b, M, L);
    }),
    (it.useInsertionEffect = function (b, M) {
      return K.H.useInsertionEffect(b, M);
    }),
    (it.useLayoutEffect = function (b, M) {
      return K.H.useLayoutEffect(b, M);
    }),
    (it.useMemo = function (b, M) {
      return K.H.useMemo(b, M);
    }),
    (it.useOptimistic = function (b, M) {
      return K.H.useOptimistic(b, M);
    }),
    (it.useReducer = function (b, M, L) {
      return K.H.useReducer(b, M, L);
    }),
    (it.useRef = function (b) {
      return K.H.useRef(b);
    }),
    (it.useState = function (b) {
      return K.H.useState(b);
    }),
    (it.useSyncExternalStore = function (b, M, L) {
      return K.H.useSyncExternalStore(b, M, L);
    }),
    (it.useTransition = function () {
      return K.H.useTransition();
    }),
    (it.version = "19.1.0"),
    it
  );
}
var Qm;
function Bc() {
  return Qm || ((Qm = 1), ($o.exports = Jv())), $o.exports;
}
var gt = Bc();
const B = Lc(gt);
var Jo = { exports: {} },
  kl = {},
  Fo = { exports: {} },
  Io = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gm;
function Fv() {
  return (
    Gm ||
      ((Gm = 1),
      (function (s) {
        function i(T, k) {
          var Y = T.length;
          T.push(k);
          t: for (; 0 < Y; ) {
            var tt = (Y - 1) >>> 1,
              b = T[tt];
            if (0 < c(b, k)) (T[tt] = k), (T[Y] = b), (Y = tt);
            else break t;
          }
        }
        function r(T) {
          return T.length === 0 ? null : T[0];
        }
        function o(T) {
          if (T.length === 0) return null;
          var k = T[0],
            Y = T.pop();
          if (Y !== k) {
            T[0] = Y;
            t: for (var tt = 0, b = T.length, M = b >>> 1; tt < M; ) {
              var L = 2 * (tt + 1) - 1,
                j = T[L],
                G = L + 1,
                st = T[G];
              if (0 > c(j, Y))
                G < b && 0 > c(st, j)
                  ? ((T[tt] = st), (T[G] = Y), (tt = G))
                  : ((T[tt] = j), (T[L] = Y), (tt = L));
              else if (G < b && 0 > c(st, Y))
                (T[tt] = st), (T[G] = Y), (tt = G);
              else break t;
            }
          }
          return k;
        }
        function c(T, k) {
          var Y = T.sortIndex - k.sortIndex;
          return Y !== 0 ? Y : T.id - k.id;
        }
        if (
          ((s.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          s.unstable_now = function () {
            return d.now();
          };
        } else {
          var m = Date,
            p = m.now();
          s.unstable_now = function () {
            return m.now() - p;
          };
        }
        var S = [],
          g = [],
          O = 1,
          v = null,
          C = 3,
          H = !1,
          Z = !1,
          at = !1,
          V = !1,
          ot = typeof setTimeout == "function" ? setTimeout : null,
          mt = typeof clearTimeout == "function" ? clearTimeout : null,
          nt = typeof setImmediate < "u" ? setImmediate : null;
        function ct(T) {
          for (var k = r(g); k !== null; ) {
            if (k.callback === null) o(g);
            else if (k.startTime <= T)
              o(g), (k.sortIndex = k.expirationTime), i(S, k);
            else break;
            k = r(g);
          }
        }
        function K(T) {
          if (((at = !1), ct(T), !Z))
            if (r(S) !== null) (Z = !0), _t || ((_t = !0), Ct());
            else {
              var k = r(g);
              k !== null && $(K, k.startTime - T);
            }
        }
        var _t = !1,
          Nt = -1,
          qt = 5,
          Kt = -1;
        function Te() {
          return V ? !0 : !(s.unstable_now() - Kt < qt);
        }
        function kt() {
          if (((V = !1), _t)) {
            var T = s.unstable_now();
            Kt = T;
            var k = !0;
            try {
              t: {
                (Z = !1), at && ((at = !1), mt(Nt), (Nt = -1)), (H = !0);
                var Y = C;
                try {
                  e: {
                    for (
                      ct(T), v = r(S);
                      v !== null && !(v.expirationTime > T && Te());

                    ) {
                      var tt = v.callback;
                      if (typeof tt == "function") {
                        (v.callback = null), (C = v.priorityLevel);
                        var b = tt(v.expirationTime <= T);
                        if (((T = s.unstable_now()), typeof b == "function")) {
                          (v.callback = b), ct(T), (k = !0);
                          break e;
                        }
                        v === r(S) && o(S), ct(T);
                      } else o(S);
                      v = r(S);
                    }
                    if (v !== null) k = !0;
                    else {
                      var M = r(g);
                      M !== null && $(K, M.startTime - T), (k = !1);
                    }
                  }
                  break t;
                } finally {
                  (v = null), (C = Y), (H = !1);
                }
                k = void 0;
              }
            } finally {
              k ? Ct() : (_t = !1);
            }
          }
        }
        var Ct;
        if (typeof nt == "function")
          Ct = function () {
            nt(kt);
          };
        else if (typeof MessageChannel < "u") {
          var lt = new MessageChannel(),
            yt = lt.port2;
          (lt.port1.onmessage = kt),
            (Ct = function () {
              yt.postMessage(null);
            });
        } else
          Ct = function () {
            ot(kt, 0);
          };
        function $(T, k) {
          Nt = ot(function () {
            T(s.unstable_now());
          }, k);
        }
        (s.unstable_IdlePriority = 5),
          (s.unstable_ImmediatePriority = 1),
          (s.unstable_LowPriority = 4),
          (s.unstable_NormalPriority = 3),
          (s.unstable_Profiling = null),
          (s.unstable_UserBlockingPriority = 2),
          (s.unstable_cancelCallback = function (T) {
            T.callback = null;
          }),
          (s.unstable_forceFrameRate = function (T) {
            0 > T || 125 < T
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (qt = 0 < T ? Math.floor(1e3 / T) : 5);
          }),
          (s.unstable_getCurrentPriorityLevel = function () {
            return C;
          }),
          (s.unstable_next = function (T) {
            switch (C) {
              case 1:
              case 2:
              case 3:
                var k = 3;
                break;
              default:
                k = C;
            }
            var Y = C;
            C = k;
            try {
              return T();
            } finally {
              C = Y;
            }
          }),
          (s.unstable_requestPaint = function () {
            V = !0;
          }),
          (s.unstable_runWithPriority = function (T, k) {
            switch (T) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                T = 3;
            }
            var Y = C;
            C = T;
            try {
              return k();
            } finally {
              C = Y;
            }
          }),
          (s.unstable_scheduleCallback = function (T, k, Y) {
            var tt = s.unstable_now();
            switch (
              (typeof Y == "object" && Y !== null
                ? ((Y = Y.delay),
                  (Y = typeof Y == "number" && 0 < Y ? tt + Y : tt))
                : (Y = tt),
              T)
            ) {
              case 1:
                var b = -1;
                break;
              case 2:
                b = 250;
                break;
              case 5:
                b = 1073741823;
                break;
              case 4:
                b = 1e4;
                break;
              default:
                b = 5e3;
            }
            return (
              (b = Y + b),
              (T = {
                id: O++,
                callback: k,
                priorityLevel: T,
                startTime: Y,
                expirationTime: b,
                sortIndex: -1,
              }),
              Y > tt
                ? ((T.sortIndex = Y),
                  i(g, T),
                  r(S) === null &&
                    T === r(g) &&
                    (at ? (mt(Nt), (Nt = -1)) : (at = !0), $(K, Y - tt)))
                : ((T.sortIndex = b),
                  i(S, T),
                  Z || H || ((Z = !0), _t || ((_t = !0), Ct()))),
              T
            );
          }),
          (s.unstable_shouldYield = Te),
          (s.unstable_wrapCallback = function (T) {
            var k = C;
            return function () {
              var Y = C;
              C = k;
              try {
                return T.apply(this, arguments);
              } finally {
                C = Y;
              }
            };
          });
      })(Io)),
    Io
  );
}
var Xm;
function Iv() {
  return Xm || ((Xm = 1), (Fo.exports = Fv())), Fo.exports;
}
var Wo = { exports: {} },
  ce = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zm;
function Wv() {
  if (Zm) return ce;
  Zm = 1;
  var s = Bc();
  function i(S) {
    var g = "https://react.dev/errors/" + S;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var O = 2; O < arguments.length; O++)
        g += "&args[]=" + encodeURIComponent(arguments[O]);
    }
    return (
      "Minified React error #" +
      S +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var o = {
      d: {
        f: r,
        r: function () {
          throw Error(i(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function d(S, g, O) {
    var v =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: v == null ? null : "" + v,
      children: S,
      containerInfo: g,
      implementation: O,
    };
  }
  var m = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(S, g) {
    if (S === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (ce.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (ce.createPortal = function (S, g) {
      var O =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(i(299));
      return d(S, g, null, O);
    }),
    (ce.flushSync = function (S) {
      var g = m.T,
        O = o.p;
      try {
        if (((m.T = null), (o.p = 2), S)) return S();
      } finally {
        (m.T = g), (o.p = O), o.d.f();
      }
    }),
    (ce.preconnect = function (S, g) {
      typeof S == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        o.d.C(S, g));
    }),
    (ce.prefetchDNS = function (S) {
      typeof S == "string" && o.d.D(S);
    }),
    (ce.preinit = function (S, g) {
      if (typeof S == "string" && g && typeof g.as == "string") {
        var O = g.as,
          v = p(O, g.crossOrigin),
          C = typeof g.integrity == "string" ? g.integrity : void 0,
          H = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        O === "style"
          ? o.d.S(S, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: v,
              integrity: C,
              fetchPriority: H,
            })
          : O === "script" &&
            o.d.X(S, {
              crossOrigin: v,
              integrity: C,
              fetchPriority: H,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (ce.preinitModule = function (S, g) {
      if (typeof S == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var O = p(g.as, g.crossOrigin);
            o.d.M(S, {
              crossOrigin: O,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && o.d.M(S);
    }),
    (ce.preload = function (S, g) {
      if (
        typeof S == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var O = g.as,
          v = p(O, g.crossOrigin);
        o.d.L(S, O, {
          crossOrigin: v,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (ce.preloadModule = function (S, g) {
      if (typeof S == "string")
        if (g) {
          var O = p(g.as, g.crossOrigin);
          o.d.m(S, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: O,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else o.d.m(S);
    }),
    (ce.requestFormReset = function (S) {
      o.d.r(S);
    }),
    (ce.unstable_batchedUpdates = function (S, g) {
      return S(g);
    }),
    (ce.useFormState = function (S, g, O) {
      return m.H.useFormState(S, g, O);
    }),
    (ce.useFormStatus = function () {
      return m.H.useHostTransitionStatus();
    }),
    (ce.version = "19.1.0"),
    ce
  );
}
var Km;
function Vg() {
  if (Km) return Wo.exports;
  Km = 1;
  function s() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (i) {
        console.error(i);
      }
  }
  return s(), (Wo.exports = Wv()), Wo.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $m;
function Pv() {
  if ($m) return kl;
  $m = 1;
  var s = Iv(),
    i = Bc(),
    r = Vg();
  function o(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function d(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function m(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (d(t) !== t) throw Error(o(188));
  }
  function S(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = d(t)), e === null)) throw Error(o(188));
      return e !== t ? null : t;
    }
    for (var n = t, a = e; ; ) {
      var l = n.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (((a = l.return), a !== null)) {
          n = a;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === n) return p(l), t;
          if (u === a) return p(l), e;
          u = u.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== a.return) (n = l), (a = u);
      else {
        for (var f = !1, h = l.child; h; ) {
          if (h === n) {
            (f = !0), (n = l), (a = u);
            break;
          }
          if (h === a) {
            (f = !0), (a = l), (n = u);
            break;
          }
          h = h.sibling;
        }
        if (!f) {
          for (h = u.child; h; ) {
            if (h === n) {
              (f = !0), (n = u), (a = l);
              break;
            }
            if (h === a) {
              (f = !0), (a = u), (n = l);
              break;
            }
            h = h.sibling;
          }
          if (!f) throw Error(o(189));
        }
      }
      if (n.alternate !== a) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? t : e;
  }
  function g(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = g(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var O = Object.assign,
    v = Symbol.for("react.element"),
    C = Symbol.for("react.transitional.element"),
    H = Symbol.for("react.portal"),
    Z = Symbol.for("react.fragment"),
    at = Symbol.for("react.strict_mode"),
    V = Symbol.for("react.profiler"),
    ot = Symbol.for("react.provider"),
    mt = Symbol.for("react.consumer"),
    nt = Symbol.for("react.context"),
    ct = Symbol.for("react.forward_ref"),
    K = Symbol.for("react.suspense"),
    _t = Symbol.for("react.suspense_list"),
    Nt = Symbol.for("react.memo"),
    qt = Symbol.for("react.lazy"),
    Kt = Symbol.for("react.activity"),
    Te = Symbol.for("react.memo_cache_sentinel"),
    kt = Symbol.iterator;
  function Ct(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (kt && t[kt]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var lt = Symbol.for("react.client.reference");
  function yt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === lt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case Z:
        return "Fragment";
      case V:
        return "Profiler";
      case at:
        return "StrictMode";
      case K:
        return "Suspense";
      case _t:
        return "SuspenseList";
      case Kt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case H:
          return "Portal";
        case nt:
          return (t.displayName || "Context") + ".Provider";
        case mt:
          return (t._context.displayName || "Context") + ".Consumer";
        case ct:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case Nt:
          return (
            (e = t.displayName || null), e !== null ? e : yt(t.type) || "Memo"
          );
        case qt:
          (e = t._payload), (t = t._init);
          try {
            return yt(t(e));
          } catch {}
      }
    return null;
  }
  var $ = Array.isArray,
    T = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    k = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Y = { pending: !1, data: null, method: null, action: null },
    tt = [],
    b = -1;
  function M(t) {
    return { current: t };
  }
  function L(t) {
    0 > b || ((t.current = tt[b]), (tt[b] = null), b--);
  }
  function j(t, e) {
    b++, (tt[b] = t.current), (t.current = e);
  }
  var G = M(null),
    st = M(null),
    Q = M(null),
    $t = M(null);
  function bt(t, e) {
    switch ((j(Q, e), j(st, t), j(G, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? mm(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = mm(e)), (t = gm(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    L(G), j(G, t);
  }
  function ve() {
    L(G), L(st), L(Q);
  }
  function hn(t) {
    t.memoizedState !== null && j($t, t);
    var e = G.current,
      n = gm(e, t.type);
    e !== n && (j(st, t), j(G, n));
  }
  function Ha(t) {
    st.current === t && (L(G), L(st)),
      $t.current === t && (L($t), (Nl._currentValue = Y));
  }
  var Ya = Object.prototype.hasOwnProperty,
    Li = s.unstable_scheduleCallback,
    da = s.unstable_cancelCallback,
    kr = s.unstable_shouldYield,
    Fl = s.unstable_requestPaint,
    ue = s.unstable_now,
    Il = s.unstable_getCurrentPriorityLevel,
    qe = s.unstable_ImmediatePriority,
    Wl = s.unstable_UserBlockingPriority,
    Va = s.unstable_NormalPriority,
    he = s.unstable_LowPriority,
    mn = s.unstable_IdlePriority,
    Ur = s.log,
    Lr = s.unstable_setDisableYieldValue,
    We = null,
    me = null;
  function Ze(t) {
    if (
      (typeof Ur == "function" && Lr(t),
      me && typeof me.setStrictMode == "function")
    )
      try {
        me.setStrictMode(We, t);
      } catch {}
  }
  var ae = Math.clz32 ? Math.clz32 : kn,
    jn = Math.log,
    Pl = Math.LN2;
  function kn(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((jn(t) / Pl) | 0)) | 0;
  }
  var Qa = 256,
    Ga = 4194304;
  function Pe(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function ha(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var l = 0,
      u = t.suspendedLanes,
      f = t.pingedLanes;
    t = t.warmLanes;
    var h = a & 134217727;
    return (
      h !== 0
        ? ((a = h & ~u),
          a !== 0
            ? (l = Pe(a))
            : ((f &= h),
              f !== 0
                ? (l = Pe(f))
                : n || ((n = h & ~t), n !== 0 && (l = Pe(n)))))
        : ((h = a & ~u),
          h !== 0
            ? (l = Pe(h))
            : f !== 0
            ? (l = Pe(f))
            : n || ((n = a & ~t), n !== 0 && (l = Pe(n)))),
      l === 0
        ? 0
        : e !== 0 &&
          e !== l &&
          (e & u) === 0 &&
          ((u = l & -l),
          (n = e & -e),
          u >= n || (u === 32 && (n & 4194048) !== 0))
        ? e
        : l
    );
  }
  function ma(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Bi(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ke() {
    var t = Qa;
    return (Qa <<= 1), (Qa & 4194048) === 0 && (Qa = 256), t;
  }
  function ts() {
    var t = Ga;
    return (Ga <<= 1), (Ga & 62914560) === 0 && (Ga = 4194304), t;
  }
  function Hi(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Un(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function es(t, e, n, a, l, u) {
    var f = t.pendingLanes;
    (t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0);
    var h = t.entanglements,
      y = t.expirationTimes,
      E = t.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var N = 31 - ae(n),
        q = 1 << N;
      (h[N] = 0), (y[N] = -1);
      var _ = E[N];
      if (_ !== null)
        for (E[N] = null, N = 0; N < _.length; N++) {
          var R = _[N];
          R !== null && (R.lane &= -536870913);
        }
      n &= ~q;
    }
    a !== 0 && et(t, a, 0),
      u !== 0 && l === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(f & ~e));
  }
  function et(t, e, n) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var a = 31 - ae(e);
    (t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (n & 4194090));
  }
  function Bt(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var a = 31 - ae(n),
        l = 1 << a;
      (l & e) | (t[a] & e) && (t[a] |= e), (n &= ~l);
    }
  }
  function Gt(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function ie(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function ga() {
    var t = k.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : qm(t.type));
  }
  function Jt(t, e) {
    var n = k.p;
    try {
      return (k.p = t), e();
    } finally {
      k.p = n;
    }
  }
  var Ht = Math.random().toString(36).slice(2),
    Yt = "__reactFiber$" + Ht,
    Rt = "__reactProps$" + Ht,
    Wt = "__reactContainer$" + Ht,
    Xa = "__reactEvents$" + Ht,
    gn = "__reactListeners$" + Ht,
    tf = "__reactHandles$" + Ht,
    ef = "__reactResources$" + Ht,
    Yi = "__reactMarker$" + Ht;
  function Br(t) {
    delete t[Yt], delete t[Rt], delete t[Xa], delete t[gn], delete t[tf];
  }
  function Za(t) {
    var e = t[Yt];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[Wt] || n[Yt])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = bm(t); t !== null; ) {
            if ((n = t[Yt])) return n;
            t = bm(t);
          }
        return e;
      }
      (t = n), (n = t.parentNode);
    }
    return null;
  }
  function Ka(t) {
    if ((t = t[Yt] || t[Wt])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Vi(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(o(33));
  }
  function $a(t) {
    var e = t[ef];
    return (
      e ||
        (e = t[ef] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Pt(t) {
    t[Yi] = !0;
  }
  var nf = new Set(),
    af = {};
  function ya(t, e) {
    Ja(t, e), Ja(t + "Capture", e);
  }
  function Ja(t, e) {
    for (af[t] = e, t = 0; t < e.length; t++) nf.add(e[t]);
  }
  var B0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    lf = {},
    sf = {};
  function H0(t) {
    return Ya.call(sf, t)
      ? !0
      : Ya.call(lf, t)
      ? !1
      : B0.test(t)
      ? (sf[t] = !0)
      : ((lf[t] = !0), !1);
  }
  function ns(t, e, n) {
    if (H0(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function as(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function yn(t, e, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + a);
    }
  }
  var Hr, rf;
  function Fa(t) {
    if (Hr === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        (Hr = (e && e[1]) || ""),
          (rf =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Hr +
      t +
      rf
    );
  }
  var Yr = !1;
  function Vr(t, e) {
    if (!t || Yr) return "";
    Yr = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var q = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(q.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(q, []);
                } catch (R) {
                  var _ = R;
                }
                Reflect.construct(t, [], q);
              } else {
                try {
                  q.call();
                } catch (R) {
                  _ = R;
                }
                t.call(q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (R) {
                _ = R;
              }
              (q = t()) &&
                typeof q.catch == "function" &&
                q.catch(function () {});
            }
          } catch (R) {
            if (R && _ && typeof R.stack == "string") return [R.stack, _.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var l = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      l &&
        l.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = a.DetermineComponentFrameRoot(),
        f = u[0],
        h = u[1];
      if (f && h) {
        var y = f.split(`
`),
          E = h.split(`
`);
        for (
          l = a = 0;
          a < y.length && !y[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; l < E.length && !E[l].includes("DetermineComponentFrameRoot"); )
          l++;
        if (a === y.length || l === E.length)
          for (
            a = y.length - 1, l = E.length - 1;
            1 <= a && 0 <= l && y[a] !== E[l];

          )
            l--;
        for (; 1 <= a && 0 <= l; a--, l--)
          if (y[a] !== E[l]) {
            if (a !== 1 || l !== 1)
              do
                if ((a--, l--, 0 > l || y[a] !== E[l])) {
                  var N =
                    `
` + y[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      N.includes("<anonymous>") &&
                      (N = N.replace("<anonymous>", t.displayName)),
                    N
                  );
                }
              while (1 <= a && 0 <= l);
            break;
          }
      }
    } finally {
      (Yr = !1), (Error.prepareStackTrace = n);
    }
    return (n = t ? t.displayName || t.name : "") ? Fa(n) : "";
  }
  function Y0(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Fa(t.type);
      case 16:
        return Fa("Lazy");
      case 13:
        return Fa("Suspense");
      case 19:
        return Fa("SuspenseList");
      case 0:
      case 15:
        return Vr(t.type, !1);
      case 11:
        return Vr(t.type.render, !1);
      case 1:
        return Vr(t.type, !0);
      case 31:
        return Fa("Activity");
      default:
        return "";
    }
  }
  function uf(t) {
    try {
      var e = "";
      do (e += Y0(t)), (t = t.return);
      while (t);
      return e;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  function je(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function of(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function V0(t) {
    var e = of(t) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      a = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        u = n.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (f) {
            (a = "" + f), u.call(this, f);
          },
        }),
        Object.defineProperty(t, e, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (f) {
            a = "" + f;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function is(t) {
    t._valueTracker || (t._valueTracker = V0(t));
  }
  function cf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      a = "";
    return (
      t && (a = of(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function ls(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Q0 = /[\n"\\]/g;
  function ke(t) {
    return t.replace(Q0, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Qr(t, e, n, a, l, u, f, h) {
    (t.name = ""),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (t.type = f)
        : t.removeAttribute("type"),
      e != null
        ? f === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + je(e))
          : t.value !== "" + je(e) && (t.value = "" + je(e))
        : (f !== "submit" && f !== "reset") || t.removeAttribute("value"),
      e != null
        ? Gr(t, f, je(e))
        : n != null
        ? Gr(t, f, je(n))
        : a != null && t.removeAttribute("value"),
      l == null && u != null && (t.defaultChecked = !!u),
      l != null &&
        (t.checked = l && typeof l != "function" && typeof l != "symbol"),
      h != null &&
      typeof h != "function" &&
      typeof h != "symbol" &&
      typeof h != "boolean"
        ? (t.name = "" + je(h))
        : t.removeAttribute("name");
  }
  function ff(t, e, n, a, l, u, f, h) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (t.type = u),
      e != null || n != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || e != null)) return;
      (n = n != null ? "" + je(n) : ""),
        (e = e != null ? "" + je(e) : n),
        h || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (a = a ?? l),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = h ? t.checked : !!a),
      (t.defaultChecked = !!a),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (t.name = f);
  }
  function Gr(t, e, n) {
    (e === "number" && ls(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function Ia(t, e, n, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var l = 0; l < n.length; l++) e["$" + n[l]] = !0;
      for (n = 0; n < t.length; n++)
        (l = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== l && (t[n].selected = l),
          l && a && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + je(n), e = null, l = 0; l < t.length; l++) {
        if (t[l].value === n) {
          (t[l].selected = !0), a && (t[l].defaultSelected = !0);
          return;
        }
        e !== null || t[l].disabled || (e = t[l]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function df(t, e, n) {
    if (
      e != null &&
      ((e = "" + je(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + je(n) : "";
  }
  function hf(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(o(92));
        if ($(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), (e = n);
    }
    (n = je(e)),
      (t.defaultValue = n),
      (a = t.textContent),
      a === n && a !== "" && a !== null && (t.value = a);
  }
  function Wa(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var G0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function mf(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : a
      ? t.setProperty(e, n)
      : typeof n != "number" || n === 0 || G0.has(e)
      ? e === "float"
        ? (t.cssFloat = n)
        : (t[e] = ("" + n).trim())
      : (t[e] = n + "px");
  }
  function gf(t, e, n) {
    if (e != null && typeof e != "object") throw Error(o(62));
    if (((t = t.style), n != null)) {
      for (var a in n)
        !n.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
            ? (t.cssFloat = "")
            : (t[a] = ""));
      for (var l in e)
        (a = e[l]), e.hasOwnProperty(l) && n[l] !== a && mf(t, l, a);
    } else for (var u in e) e.hasOwnProperty(u) && mf(t, u, e[u]);
  }
  function Xr(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var X0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Z0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ss(t) {
    return Z0.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var Zr = null;
  function Kr(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Pa = null,
    ti = null;
  function yf(t) {
    var e = Ka(t);
    if (e && (t = e.stateNode)) {
      var n = t[Rt] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Qr(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + ke("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var l = a[Rt] || null;
                if (!l) throw Error(o(90));
                Qr(
                  a,
                  l.value,
                  l.defaultValue,
                  l.defaultValue,
                  l.checked,
                  l.defaultChecked,
                  l.type,
                  l.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              (a = n[e]), a.form === t.form && cf(a);
          }
          break t;
        case "textarea":
          df(t, n.value, n.defaultValue);
          break t;
        case "select":
          (e = n.value), e != null && Ia(t, !!n.multiple, e, !1);
      }
    }
  }
  var $r = !1;
  function vf(t, e, n) {
    if ($r) return t(e, n);
    $r = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        (($r = !1),
        (Pa !== null || ti !== null) &&
          (Xs(), Pa && ((e = Pa), (t = ti), (ti = Pa = null), yf(e), t)))
      )
        for (e = 0; e < t.length; e++) yf(t[e]);
    }
  }
  function Qi(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var a = n[Rt] || null;
    if (a === null) return null;
    n = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(o(231, e, typeof n));
    return n;
  }
  var vn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Jr = !1;
  if (vn)
    try {
      var Gi = {};
      Object.defineProperty(Gi, "passive", {
        get: function () {
          Jr = !0;
        },
      }),
        window.addEventListener("test", Gi, Gi),
        window.removeEventListener("test", Gi, Gi);
    } catch {
      Jr = !1;
    }
  var Ln = null,
    Fr = null,
    rs = null;
  function pf() {
    if (rs) return rs;
    var t,
      e = Fr,
      n = e.length,
      a,
      l = "value" in Ln ? Ln.value : Ln.textContent,
      u = l.length;
    for (t = 0; t < n && e[t] === l[t]; t++);
    var f = n - t;
    for (a = 1; a <= f && e[n - a] === l[u - a]; a++);
    return (rs = l.slice(t, 1 < a ? 1 - a : void 0));
  }
  function us(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function os() {
    return !0;
  }
  function bf() {
    return !1;
  }
  function pe(t) {
    function e(n, a, l, u, f) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = f),
        (this.currentTarget = null);
      for (var h in t)
        t.hasOwnProperty(h) && ((n = t[h]), (this[h] = n ? n(u) : u[h]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? os
          : bf),
        (this.isPropagationStopped = bf),
        this
      );
    }
    return (
      O(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = os));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = os));
        },
        persist: function () {},
        isPersistent: os,
      }),
      e
    );
  }
  var va = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    cs = pe(va),
    Xi = O({}, va, { view: 0, detail: 0 }),
    K0 = pe(Xi),
    Ir,
    Wr,
    Zi,
    fs = O({}, Xi, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: tu,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Zi &&
              (Zi && t.type === "mousemove"
                ? ((Ir = t.screenX - Zi.screenX), (Wr = t.screenY - Zi.screenY))
                : (Wr = Ir = 0),
              (Zi = t)),
            Ir);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Wr;
      },
    }),
    Sf = pe(fs),
    $0 = O({}, fs, { dataTransfer: 0 }),
    J0 = pe($0),
    F0 = O({}, Xi, { relatedTarget: 0 }),
    Pr = pe(F0),
    I0 = O({}, va, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    W0 = pe(I0),
    P0 = O({}, va, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    ty = pe(P0),
    ey = O({}, va, { data: 0 }),
    xf = pe(ey),
    ny = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    ay = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    iy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function ly(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = iy[t])
      ? !!e[t]
      : !1;
  }
  function tu() {
    return ly;
  }
  var sy = O({}, Xi, {
      key: function (t) {
        if (t.key) {
          var e = ny[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = us(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? ay[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: tu,
      charCode: function (t) {
        return t.type === "keypress" ? us(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? us(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    ry = pe(sy),
    uy = O({}, fs, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Af = pe(uy),
    oy = O({}, Xi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: tu,
    }),
    cy = pe(oy),
    fy = O({}, va, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    dy = pe(fy),
    hy = O({}, fs, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    my = pe(hy),
    gy = O({}, va, { newState: 0, oldState: 0 }),
    yy = pe(gy),
    vy = [9, 13, 27, 32],
    eu = vn && "CompositionEvent" in window,
    Ki = null;
  vn && "documentMode" in document && (Ki = document.documentMode);
  var py = vn && "TextEvent" in window && !Ki,
    Tf = vn && (!eu || (Ki && 8 < Ki && 11 >= Ki)),
    wf = " ",
    Ef = !1;
  function Of(t, e) {
    switch (t) {
      case "keyup":
        return vy.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function _f(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var ei = !1;
  function by(t, e) {
    switch (t) {
      case "compositionend":
        return _f(e);
      case "keypress":
        return e.which !== 32 ? null : ((Ef = !0), wf);
      case "textInput":
        return (t = e.data), t === wf && Ef ? null : t;
      default:
        return null;
    }
  }
  function Sy(t, e) {
    if (ei)
      return t === "compositionend" || (!eu && Of(t, e))
        ? ((t = pf()), (rs = Fr = Ln = null), (ei = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Tf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var xy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Rf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!xy[t.type] : e === "textarea";
  }
  function Mf(t, e, n, a) {
    Pa ? (ti ? ti.push(a) : (ti = [a])) : (Pa = a),
      (e = Is(e, "onChange")),
      0 < e.length &&
        ((n = new cs("onChange", "change", null, n, a)),
        t.push({ event: n, listeners: e }));
  }
  var $i = null,
    Ji = null;
  function Ay(t) {
    om(t, 0);
  }
  function ds(t) {
    var e = Vi(t);
    if (cf(e)) return t;
  }
  function Nf(t, e) {
    if (t === "change") return e;
  }
  var Cf = !1;
  if (vn) {
    var nu;
    if (vn) {
      var au = "oninput" in document;
      if (!au) {
        var Df = document.createElement("div");
        Df.setAttribute("oninput", "return;"),
          (au = typeof Df.oninput == "function");
      }
      nu = au;
    } else nu = !1;
    Cf = nu && (!document.documentMode || 9 < document.documentMode);
  }
  function zf() {
    $i && ($i.detachEvent("onpropertychange", qf), (Ji = $i = null));
  }
  function qf(t) {
    if (t.propertyName === "value" && ds(Ji)) {
      var e = [];
      Mf(e, Ji, t, Kr(t)), vf(Ay, e);
    }
  }
  function Ty(t, e, n) {
    t === "focusin"
      ? (zf(), ($i = e), (Ji = n), $i.attachEvent("onpropertychange", qf))
      : t === "focusout" && zf();
  }
  function wy(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return ds(Ji);
  }
  function Ey(t, e) {
    if (t === "click") return ds(e);
  }
  function Oy(t, e) {
    if (t === "input" || t === "change") return ds(e);
  }
  function _y(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var we = typeof Object.is == "function" ? Object.is : _y;
  function Fi(t, e) {
    if (we(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var l = n[a];
      if (!Ya.call(e, l) || !we(t[l], e[l])) return !1;
    }
    return !0;
  }
  function jf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function kf(t, e) {
    var n = jf(t);
    t = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (((a = t + n.textContent.length), t <= e && a >= e))
          return { node: n, offset: e - t };
        t = a;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = jf(n);
    }
  }
  function Uf(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? Uf(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function Lf(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = ls(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = ls(t.document);
    }
    return e;
  }
  function iu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var Ry = vn && "documentMode" in document && 11 >= document.documentMode,
    ni = null,
    lu = null,
    Ii = null,
    su = !1;
  function Bf(t, e, n) {
    var a =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    su ||
      ni == null ||
      ni !== ls(a) ||
      ((a = ni),
      "selectionStart" in a && iu(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Ii && Fi(Ii, a)) ||
        ((Ii = a),
        (a = Is(lu, "onSelect")),
        0 < a.length &&
          ((e = new cs("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: a }),
          (e.target = ni))));
  }
  function pa(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var ai = {
      animationend: pa("Animation", "AnimationEnd"),
      animationiteration: pa("Animation", "AnimationIteration"),
      animationstart: pa("Animation", "AnimationStart"),
      transitionrun: pa("Transition", "TransitionRun"),
      transitionstart: pa("Transition", "TransitionStart"),
      transitioncancel: pa("Transition", "TransitionCancel"),
      transitionend: pa("Transition", "TransitionEnd"),
    },
    ru = {},
    Hf = {};
  vn &&
    ((Hf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ai.animationend.animation,
      delete ai.animationiteration.animation,
      delete ai.animationstart.animation),
    "TransitionEvent" in window || delete ai.transitionend.transition);
  function ba(t) {
    if (ru[t]) return ru[t];
    if (!ai[t]) return t;
    var e = ai[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in Hf) return (ru[t] = e[n]);
    return t;
  }
  var Yf = ba("animationend"),
    Vf = ba("animationiteration"),
    Qf = ba("animationstart"),
    My = ba("transitionrun"),
    Ny = ba("transitionstart"),
    Cy = ba("transitioncancel"),
    Gf = ba("transitionend"),
    Xf = new Map(),
    uu =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  uu.push("scrollEnd");
  function $e(t, e) {
    Xf.set(t, e), ya(e, [t]);
  }
  var Zf = new WeakMap();
  function Ue(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Zf.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: uf(e) }), Zf.set(t, e), e);
    }
    return { value: t, source: e, stack: uf(e) };
  }
  var Le = [],
    ii = 0,
    ou = 0;
  function hs() {
    for (var t = ii, e = (ou = ii = 0); e < t; ) {
      var n = Le[e];
      Le[e++] = null;
      var a = Le[e];
      Le[e++] = null;
      var l = Le[e];
      Le[e++] = null;
      var u = Le[e];
      if (((Le[e++] = null), a !== null && l !== null)) {
        var f = a.pending;
        f === null ? (l.next = l) : ((l.next = f.next), (f.next = l)),
          (a.pending = l);
      }
      u !== 0 && Kf(n, l, u);
    }
  }
  function ms(t, e, n, a) {
    (Le[ii++] = t),
      (Le[ii++] = e),
      (Le[ii++] = n),
      (Le[ii++] = a),
      (ou |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a);
  }
  function cu(t, e, n, a) {
    return ms(t, e, n, a), gs(t);
  }
  function li(t, e) {
    return ms(t, null, null, e), gs(t);
  }
  function Kf(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var l = !1, u = t.return; u !== null; )
      (u.childLanes |= n),
        (a = u.alternate),
        a !== null && (a.childLanes |= n),
        u.tag === 22 &&
          ((t = u.stateNode), t === null || t._visibility & 1 || (l = !0)),
        (t = u),
        (u = u.return);
    return t.tag === 3
      ? ((u = t.stateNode),
        l &&
          e !== null &&
          ((l = 31 - ae(n)),
          (t = u.hiddenUpdates),
          (a = t[l]),
          a === null ? (t[l] = [e]) : a.push(e),
          (e.lane = n | 536870912)),
        u)
      : null;
  }
  function gs(t) {
    if (50 < Al) throw ((Al = 0), (vo = null), Error(o(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var si = {};
  function Dy(t, e, n, a) {
    (this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Ee(t, e, n, a) {
    return new Dy(t, e, n, a);
  }
  function fu(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function pn(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = Ee(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function $f(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function ys(t, e, n, a, l, u) {
    var f = 0;
    if (((a = t), typeof t == "function")) fu(t) && (f = 1);
    else if (typeof t == "string")
      f = qv(t, n, G.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case Kt:
          return (t = Ee(31, n, e, l)), (t.elementType = Kt), (t.lanes = u), t;
        case Z:
          return Sa(n.children, l, u, e);
        case at:
          (f = 8), (l |= 24);
          break;
        case V:
          return (
            (t = Ee(12, n, e, l | 2)), (t.elementType = V), (t.lanes = u), t
          );
        case K:
          return (t = Ee(13, n, e, l)), (t.elementType = K), (t.lanes = u), t;
        case _t:
          return (t = Ee(19, n, e, l)), (t.elementType = _t), (t.lanes = u), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case ot:
              case nt:
                f = 10;
                break t;
              case mt:
                f = 9;
                break t;
              case ct:
                f = 11;
                break t;
              case Nt:
                f = 14;
                break t;
              case qt:
                (f = 16), (a = null);
                break t;
            }
          (f = 29),
            (n = Error(o(130, t === null ? "null" : typeof t, ""))),
            (a = null);
      }
    return (
      (e = Ee(f, n, e, l)), (e.elementType = t), (e.type = a), (e.lanes = u), e
    );
  }
  function Sa(t, e, n, a) {
    return (t = Ee(7, t, a, e)), (t.lanes = n), t;
  }
  function du(t, e, n) {
    return (t = Ee(6, t, null, e)), (t.lanes = n), t;
  }
  function hu(t, e, n) {
    return (
      (e = Ee(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var ri = [],
    ui = 0,
    vs = null,
    ps = 0,
    Be = [],
    He = 0,
    xa = null,
    bn = 1,
    Sn = "";
  function Aa(t, e) {
    (ri[ui++] = ps), (ri[ui++] = vs), (vs = t), (ps = e);
  }
  function Jf(t, e, n) {
    (Be[He++] = bn), (Be[He++] = Sn), (Be[He++] = xa), (xa = t);
    var a = bn;
    t = Sn;
    var l = 32 - ae(a) - 1;
    (a &= ~(1 << l)), (n += 1);
    var u = 32 - ae(e) + l;
    if (30 < u) {
      var f = l - (l % 5);
      (u = (a & ((1 << f) - 1)).toString(32)),
        (a >>= f),
        (l -= f),
        (bn = (1 << (32 - ae(e) + l)) | (n << l) | a),
        (Sn = u + t);
    } else (bn = (1 << u) | (n << l) | a), (Sn = t);
  }
  function mu(t) {
    t.return !== null && (Aa(t, 1), Jf(t, 1, 0));
  }
  function gu(t) {
    for (; t === vs; )
      (vs = ri[--ui]), (ri[ui] = null), (ps = ri[--ui]), (ri[ui] = null);
    for (; t === xa; )
      (xa = Be[--He]),
        (Be[He] = null),
        (Sn = Be[--He]),
        (Be[He] = null),
        (bn = Be[--He]),
        (Be[He] = null);
  }
  var ge = null,
    Ut = null,
    St = !1,
    Ta = null,
    tn = !1,
    yu = Error(o(519));
  function wa(t) {
    var e = Error(o(418, ""));
    throw (tl(Ue(e, t)), yu);
  }
  function Ff(t) {
    var e = t.stateNode,
      n = t.type,
      a = t.memoizedProps;
    switch (((e[Yt] = t), (e[Rt] = a), n)) {
      case "dialog":
        dt("cancel", e), dt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        dt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < wl.length; n++) dt(wl[n], e);
        break;
      case "source":
        dt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        dt("error", e), dt("load", e);
        break;
      case "details":
        dt("toggle", e);
        break;
      case "input":
        dt("invalid", e),
          ff(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ),
          is(e);
        break;
      case "select":
        dt("invalid", e);
        break;
      case "textarea":
        dt("invalid", e), hf(e, a.value, a.defaultValue, a.children), is(e);
    }
    (n = a.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      a.suppressHydrationWarning === !0 ||
      hm(e.textContent, n)
        ? (a.popover != null && (dt("beforetoggle", e), dt("toggle", e)),
          a.onScroll != null && dt("scroll", e),
          a.onScrollEnd != null && dt("scrollend", e),
          a.onClick != null && (e.onclick = Ws),
          (e = !0))
        : (e = !1),
      e || wa(t);
  }
  function If(t) {
    for (ge = t.return; ge; )
      switch (ge.tag) {
        case 5:
        case 13:
          tn = !1;
          return;
        case 27:
        case 3:
          tn = !0;
          return;
        default:
          ge = ge.return;
      }
  }
  function Wi(t) {
    if (t !== ge) return !1;
    if (!St) return If(t), (St = !0), !1;
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || zo(t.type, t.memoizedProps))),
        (n = !n)),
      n && Ut && wa(t),
      If(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(o(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((n = t.data), n === "/$")) {
              if (e === 0) {
                Ut = Fe(t.nextSibling);
                break t;
              }
              e--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
          t = t.nextSibling;
        }
        Ut = null;
      }
    } else
      e === 27
        ? ((e = Ut), ta(t.type) ? ((t = Uo), (Uo = null), (Ut = t)) : (Ut = e))
        : (Ut = ge ? Fe(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Pi() {
    (Ut = ge = null), (St = !1);
  }
  function Wf() {
    var t = Ta;
    return (
      t !== null &&
        (xe === null ? (xe = t) : xe.push.apply(xe, t), (Ta = null)),
      t
    );
  }
  function tl(t) {
    Ta === null ? (Ta = [t]) : Ta.push(t);
  }
  var vu = M(null),
    Ea = null,
    xn = null;
  function Bn(t, e, n) {
    j(vu, e._currentValue), (e._currentValue = n);
  }
  function An(t) {
    (t._currentValue = vu.current), L(vu);
  }
  function pu(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function bu(t, e, n, a) {
    var l = t.child;
    for (l !== null && (l.return = t); l !== null; ) {
      var u = l.dependencies;
      if (u !== null) {
        var f = l.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var h = u;
          u = l;
          for (var y = 0; y < e.length; y++)
            if (h.context === e[y]) {
              (u.lanes |= n),
                (h = u.alternate),
                h !== null && (h.lanes |= n),
                pu(u.return, n, t),
                a || (f = null);
              break t;
            }
          u = h.next;
        }
      } else if (l.tag === 18) {
        if (((f = l.return), f === null)) throw Error(o(341));
        (f.lanes |= n),
          (u = f.alternate),
          u !== null && (u.lanes |= n),
          pu(f, n, t),
          (f = null);
      } else f = l.child;
      if (f !== null) f.return = l;
      else
        for (f = l; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (((l = f.sibling), l !== null)) {
            (l.return = f.return), (f = l);
            break;
          }
          f = f.return;
        }
      l = f;
    }
  }
  function el(t, e, n, a) {
    t = null;
    for (var l = e, u = !1; l !== null; ) {
      if (!u) {
        if ((l.flags & 524288) !== 0) u = !0;
        else if ((l.flags & 262144) !== 0) break;
      }
      if (l.tag === 10) {
        var f = l.alternate;
        if (f === null) throw Error(o(387));
        if (((f = f.memoizedProps), f !== null)) {
          var h = l.type;
          we(l.pendingProps.value, f.value) ||
            (t !== null ? t.push(h) : (t = [h]));
        }
      } else if (l === $t.current) {
        if (((f = l.alternate), f === null)) throw Error(o(387));
        f.memoizedState.memoizedState !== l.memoizedState.memoizedState &&
          (t !== null ? t.push(Nl) : (t = [Nl]));
      }
      l = l.return;
    }
    t !== null && bu(e, t, n, a), (e.flags |= 262144);
  }
  function bs(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!we(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Oa(t) {
    (Ea = t),
      (xn = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function oe(t) {
    return Pf(Ea, t);
  }
  function Ss(t, e) {
    return Ea === null && Oa(t), Pf(t, e);
  }
  function Pf(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), xn === null)) {
      if (t === null) throw Error(o(308));
      (xn = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else xn = xn.next = e;
    return n;
  }
  var zy =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                });
            };
          },
    qy = s.unstable_scheduleCallback,
    jy = s.unstable_NormalPriority,
    Ft = {
      $$typeof: nt,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Su() {
    return { controller: new zy(), data: new Map(), refCount: 0 };
  }
  function nl(t) {
    t.refCount--,
      t.refCount === 0 &&
        qy(jy, function () {
          t.controller.abort();
        });
  }
  var al = null,
    xu = 0,
    oi = 0,
    ci = null;
  function ky(t, e) {
    if (al === null) {
      var n = (al = []);
      (xu = 0),
        (oi = wo()),
        (ci = {
          status: "pending",
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        });
    }
    return xu++, e.then(td, td), e;
  }
  function td() {
    if (--xu === 0 && al !== null) {
      ci !== null && (ci.status = "fulfilled");
      var t = al;
      (al = null), (oi = 0), (ci = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Uy(t, e) {
    var n = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (l) {
          n.push(l);
        },
      };
    return (
      t.then(
        function () {
          (a.status = "fulfilled"), (a.value = e);
          for (var l = 0; l < n.length; l++) (0, n[l])(e);
        },
        function (l) {
          for (a.status = "rejected", a.reason = l, l = 0; l < n.length; l++)
            (0, n[l])(void 0);
        }
      ),
      a
    );
  }
  var ed = T.S;
  T.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      ky(t, e),
      ed !== null && ed(t, e);
  };
  var _a = M(null);
  function Au() {
    var t = _a.current;
    return t !== null ? t : Mt.pooledCache;
  }
  function xs(t, e) {
    e === null ? j(_a, _a.current) : j(_a, e.pool);
  }
  function nd() {
    var t = Au();
    return t === null ? null : { parent: Ft._currentValue, pool: t };
  }
  var il = Error(o(460)),
    ad = Error(o(474)),
    As = Error(o(542)),
    Tu = { then: function () {} };
  function id(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function Ts() {}
  function ld(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(Ts, Ts), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), rd(t), t);
      default:
        if (typeof e.status == "string") e.then(Ts, Ts);
        else {
          if (((t = Mt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(o(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var l = e;
                  (l.status = "fulfilled"), (l.value = a);
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var l = e;
                  (l.status = "rejected"), (l.reason = a);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), rd(t), t);
        }
        throw ((ll = e), il);
    }
  }
  var ll = null;
  function sd() {
    if (ll === null) throw Error(o(459));
    var t = ll;
    return (ll = null), t;
  }
  function rd(t) {
    if (t === il || t === As) throw Error(o(483));
  }
  var Hn = !1;
  function wu(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Eu(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function Yn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Vn(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (xt & 2) !== 0)) {
      var l = a.pending;
      return (
        l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
        (a.pending = e),
        (e = gs(t)),
        Kf(t, null, n),
        e
      );
    }
    return ms(t, a, e, n), gs(t);
  }
  function sl(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var a = e.lanes;
      (a &= t.pendingLanes), (n |= a), (e.lanes = n), Bt(t, n);
    }
  }
  function Ou(t, e) {
    var n = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), n === a)) {
      var l = null,
        u = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          u === null ? (l = u = f) : (u = u.next = f), (n = n.next);
        } while (n !== null);
        u === null ? (l = u = e) : (u = u.next = e);
      } else l = u = e;
      (n = {
        baseState: a.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = n);
      return;
    }
    (t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e);
  }
  var _u = !1;
  function rl() {
    if (_u) {
      var t = ci;
      if (t !== null) throw t;
    }
  }
  function ul(t, e, n, a) {
    _u = !1;
    var l = t.updateQueue;
    Hn = !1;
    var u = l.firstBaseUpdate,
      f = l.lastBaseUpdate,
      h = l.shared.pending;
    if (h !== null) {
      l.shared.pending = null;
      var y = h,
        E = y.next;
      (y.next = null), f === null ? (u = E) : (f.next = E), (f = y);
      var N = t.alternate;
      N !== null &&
        ((N = N.updateQueue),
        (h = N.lastBaseUpdate),
        h !== f &&
          (h === null ? (N.firstBaseUpdate = E) : (h.next = E),
          (N.lastBaseUpdate = y)));
    }
    if (u !== null) {
      var q = l.baseState;
      (f = 0), (N = E = y = null), (h = u);
      do {
        var _ = h.lane & -536870913,
          R = _ !== h.lane;
        if (R ? (vt & _) === _ : (a & _) === _) {
          _ !== 0 && _ === oi && (_u = !0),
            N !== null &&
              (N = N.next =
                {
                  lane: 0,
                  tag: h.tag,
                  payload: h.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var P = t,
              I = h;
            _ = e;
            var Et = n;
            switch (I.tag) {
              case 1:
                if (((P = I.payload), typeof P == "function")) {
                  q = P.call(Et, q, _);
                  break t;
                }
                q = P;
                break t;
              case 3:
                P.flags = (P.flags & -65537) | 128;
              case 0:
                if (
                  ((P = I.payload),
                  (_ = typeof P == "function" ? P.call(Et, q, _) : P),
                  _ == null)
                )
                  break t;
                q = O({}, q, _);
                break t;
              case 2:
                Hn = !0;
            }
          }
          (_ = h.callback),
            _ !== null &&
              ((t.flags |= 64),
              R && (t.flags |= 8192),
              (R = l.callbacks),
              R === null ? (l.callbacks = [_]) : R.push(_));
        } else
          (R = {
            lane: _,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null,
          }),
            N === null ? ((E = N = R), (y = q)) : (N = N.next = R),
            (f |= _);
        if (((h = h.next), h === null)) {
          if (((h = l.shared.pending), h === null)) break;
          (R = h),
            (h = R.next),
            (R.next = null),
            (l.lastBaseUpdate = R),
            (l.shared.pending = null);
        }
      } while (!0);
      N === null && (y = q),
        (l.baseState = y),
        (l.firstBaseUpdate = E),
        (l.lastBaseUpdate = N),
        u === null && (l.shared.lanes = 0),
        (Fn |= f),
        (t.lanes = f),
        (t.memoizedState = q);
    }
  }
  function ud(t, e) {
    if (typeof t != "function") throw Error(o(191, t));
    t.call(e);
  }
  function od(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) ud(n[t], e);
  }
  var fi = M(null),
    ws = M(0);
  function cd(t, e) {
    (t = Mn), j(ws, t), j(fi, e), (Mn = t | e.baseLanes);
  }
  function Ru() {
    j(ws, Mn), j(fi, fi.current);
  }
  function Mu() {
    (Mn = ws.current), L(fi), L(ws);
  }
  var Qn = 0,
    rt = null,
    Tt = null,
    Xt = null,
    Es = !1,
    di = !1,
    Ra = !1,
    Os = 0,
    ol = 0,
    hi = null,
    Ly = 0;
  function Vt() {
    throw Error(o(321));
  }
  function Nu(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!we(t[n], e[n])) return !1;
    return !0;
  }
  function Cu(t, e, n, a, l, u) {
    return (
      (Qn = u),
      (rt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (T.H = t === null || t.memoizedState === null ? Kd : $d),
      (Ra = !1),
      (u = n(a, l)),
      (Ra = !1),
      di && (u = dd(e, n, a, l)),
      fd(t),
      u
    );
  }
  function fd(t) {
    T.H = Ds;
    var e = Tt !== null && Tt.next !== null;
    if (((Qn = 0), (Xt = Tt = rt = null), (Es = !1), (ol = 0), (hi = null), e))
      throw Error(o(300));
    t === null ||
      te ||
      ((t = t.dependencies), t !== null && bs(t) && (te = !0));
  }
  function dd(t, e, n, a) {
    rt = t;
    var l = 0;
    do {
      if ((di && (hi = null), (ol = 0), (di = !1), 25 <= l))
        throw Error(o(301));
      if (((l += 1), (Xt = Tt = null), t.updateQueue != null)) {
        var u = t.updateQueue;
        (u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0);
      }
      (T.H = Xy), (u = e(n, a));
    } while (di);
    return u;
  }
  function By() {
    var t = T.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? cl(e) : e),
      (t = t.useState()[0]),
      (Tt !== null ? Tt.memoizedState : null) !== t && (rt.flags |= 1024),
      e
    );
  }
  function Du() {
    var t = Os !== 0;
    return (Os = 0), t;
  }
  function zu(t, e, n) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n);
  }
  function qu(t) {
    if (Es) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      Es = !1;
    }
    (Qn = 0), (Xt = Tt = rt = null), (di = !1), (ol = Os = 0), (hi = null);
  }
  function be() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Xt === null ? (rt.memoizedState = Xt = t) : (Xt = Xt.next = t), Xt;
  }
  function Zt() {
    if (Tt === null) {
      var t = rt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Tt.next;
    var e = Xt === null ? rt.memoizedState : Xt.next;
    if (e !== null) (Xt = e), (Tt = t);
    else {
      if (t === null)
        throw rt.alternate === null ? Error(o(467)) : Error(o(310));
      (Tt = t),
        (t = {
          memoizedState: Tt.memoizedState,
          baseState: Tt.baseState,
          baseQueue: Tt.baseQueue,
          queue: Tt.queue,
          next: null,
        }),
        Xt === null ? (rt.memoizedState = Xt = t) : (Xt = Xt.next = t);
    }
    return Xt;
  }
  function ju() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function cl(t) {
    var e = ol;
    return (
      (ol += 1),
      hi === null && (hi = []),
      (t = ld(hi, t, e)),
      (e = rt),
      (Xt === null ? e.memoizedState : Xt.next) === null &&
        ((e = e.alternate),
        (T.H = e === null || e.memoizedState === null ? Kd : $d)),
      t
    );
  }
  function _s(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return cl(t);
      if (t.$$typeof === nt) return oe(t);
    }
    throw Error(o(438, String(t)));
  }
  function ku(t) {
    var e = null,
      n = rt.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var a = rt.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (l) {
                return l.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = ju()), (rt.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++) n[a] = Te;
    return e.index++, n;
  }
  function Tn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Rs(t) {
    var e = Zt();
    return Uu(e, Tt, t);
  }
  function Uu(t, e, n) {
    var a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = n;
    var l = t.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (l !== null) {
        var f = l.next;
        (l.next = u.next), (u.next = f);
      }
      (e.baseQueue = l = u), (a.pending = null);
    }
    if (((u = t.baseState), l === null)) t.memoizedState = u;
    else {
      e = l.next;
      var h = (f = null),
        y = null,
        E = e,
        N = !1;
      do {
        var q = E.lane & -536870913;
        if (q !== E.lane ? (vt & q) === q : (Qn & q) === q) {
          var _ = E.revertLane;
          if (_ === 0)
            y !== null &&
              (y = y.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: E.action,
                  hasEagerState: E.hasEagerState,
                  eagerState: E.eagerState,
                  next: null,
                }),
              q === oi && (N = !0);
          else if ((Qn & _) === _) {
            (E = E.next), _ === oi && (N = !0);
            continue;
          } else
            (q = {
              lane: 0,
              revertLane: E.revertLane,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null,
            }),
              y === null ? ((h = y = q), (f = u)) : (y = y.next = q),
              (rt.lanes |= _),
              (Fn |= _);
          (q = E.action),
            Ra && n(u, q),
            (u = E.hasEagerState ? E.eagerState : n(u, q));
        } else
          (_ = {
            lane: q,
            revertLane: E.revertLane,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null,
          }),
            y === null ? ((h = y = _), (f = u)) : (y = y.next = _),
            (rt.lanes |= q),
            (Fn |= q);
        E = E.next;
      } while (E !== null && E !== e);
      if (
        (y === null ? (f = u) : (y.next = h),
        !we(u, t.memoizedState) && ((te = !0), N && ((n = ci), n !== null)))
      )
        throw n;
      (t.memoizedState = u),
        (t.baseState = f),
        (t.baseQueue = y),
        (a.lastRenderedState = u);
    }
    return l === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function Lu(t) {
    var e = Zt(),
      n = e.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch,
      l = n.pending,
      u = e.memoizedState;
    if (l !== null) {
      n.pending = null;
      var f = (l = l.next);
      do (u = t(u, f.action)), (f = f.next);
      while (f !== l);
      we(u, e.memoizedState) || (te = !0),
        (e.memoizedState = u),
        e.baseQueue === null && (e.baseState = u),
        (n.lastRenderedState = u);
    }
    return [u, a];
  }
  function hd(t, e, n) {
    var a = rt,
      l = Zt(),
      u = St;
    if (u) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = e();
    var f = !we((Tt || l).memoizedState, n);
    f && ((l.memoizedState = n), (te = !0)), (l = l.queue);
    var h = yd.bind(null, a, l, t);
    if (
      (fl(2048, 8, h, [t]),
      l.getSnapshot !== e || f || (Xt !== null && Xt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        mi(9, Ms(), gd.bind(null, a, l, n, e), null),
        Mt === null)
      )
        throw Error(o(349));
      u || (Qn & 124) !== 0 || md(a, e, n);
    }
    return n;
  }
  function md(t, e, n) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = rt.updateQueue),
      e === null
        ? ((e = ju()), (rt.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
  }
  function gd(t, e, n, a) {
    (e.value = n), (e.getSnapshot = a), vd(e) && pd(t);
  }
  function yd(t, e, n) {
    return n(function () {
      vd(e) && pd(t);
    });
  }
  function vd(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !we(t, n);
    } catch {
      return !0;
    }
  }
  function pd(t) {
    var e = li(t, 2);
    e !== null && Ne(e, t, 2);
  }
  function Bu(t) {
    var e = be();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), Ra)) {
        Ze(!0);
        try {
          n();
        } finally {
          Ze(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Tn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function bd(t, e, n, a) {
    return (t.baseState = n), Uu(t, Tt, typeof a == "function" ? a : Tn);
  }
  function Hy(t, e, n, a, l) {
    if (Cs(t)) throw Error(o(485));
    if (((t = e.action), t !== null)) {
      var u = {
        payload: l,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          u.listeners.push(f);
        },
      };
      T.T !== null ? n(!0) : (u.isTransition = !1),
        a(u),
        (n = e.pending),
        n === null
          ? ((u.next = e.pending = u), Sd(e, u))
          : ((u.next = n.next), (e.pending = n.next = u));
    }
  }
  function Sd(t, e) {
    var n = e.action,
      a = e.payload,
      l = t.state;
    if (e.isTransition) {
      var u = T.T,
        f = {};
      T.T = f;
      try {
        var h = n(l, a),
          y = T.S;
        y !== null && y(f, h), xd(t, e, h);
      } catch (E) {
        Hu(t, e, E);
      } finally {
        T.T = u;
      }
    } else
      try {
        (u = n(l, a)), xd(t, e, u);
      } catch (E) {
        Hu(t, e, E);
      }
  }
  function xd(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (a) {
            Ad(t, e, a);
          },
          function (a) {
            return Hu(t, e, a);
          }
        )
      : Ad(t, e, n);
  }
  function Ad(t, e, n) {
    (e.status = "fulfilled"),
      (e.value = n),
      Td(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), Sd(t, n)));
  }
  function Hu(t, e, n) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do (e.status = "rejected"), (e.reason = n), Td(e), (e = e.next);
      while (e !== a);
    }
    t.action = null;
  }
  function Td(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function wd(t, e) {
    return e;
  }
  function Ed(t, e) {
    if (St) {
      var n = Mt.formState;
      if (n !== null) {
        t: {
          var a = rt;
          if (St) {
            if (Ut) {
              e: {
                for (var l = Ut, u = tn; l.nodeType !== 8; ) {
                  if (!u) {
                    l = null;
                    break e;
                  }
                  if (((l = Fe(l.nextSibling)), l === null)) {
                    l = null;
                    break e;
                  }
                }
                (u = l.data), (l = u === "F!" || u === "F" ? l : null);
              }
              if (l) {
                (Ut = Fe(l.nextSibling)), (a = l.data === "F!");
                break t;
              }
            }
            wa(a);
          }
          a = !1;
        }
        a && (e = n[0]);
      }
    }
    return (
      (n = be()),
      (n.memoizedState = n.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wd,
        lastRenderedState: e,
      }),
      (n.queue = a),
      (n = Gd.bind(null, rt, a)),
      (a.dispatch = n),
      (a = Bu(!1)),
      (u = Xu.bind(null, rt, !1, a.queue)),
      (a = be()),
      (l = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = l),
      (n = Hy.bind(null, rt, l, u, n)),
      (l.dispatch = n),
      (a.memoizedState = t),
      [e, n, !1]
    );
  }
  function Od(t) {
    var e = Zt();
    return _d(e, Tt, t);
  }
  function _d(t, e, n) {
    if (
      ((e = Uu(t, e, wd)[0]),
      (t = Rs(Tn)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = cl(e);
      } catch (f) {
        throw f === il ? As : f;
      }
    else a = e;
    e = Zt();
    var l = e.queue,
      u = l.dispatch;
    return (
      n !== e.memoizedState &&
        ((rt.flags |= 2048), mi(9, Ms(), Yy.bind(null, l, n), null)),
      [a, u, t]
    );
  }
  function Yy(t, e) {
    t.action = e;
  }
  function Rd(t) {
    var e = Zt(),
      n = Tt;
    if (n !== null) return _d(e, n, t);
    Zt(), (e = e.memoizedState), (n = Zt());
    var a = n.queue.dispatch;
    return (n.memoizedState = t), [e, a, !1];
  }
  function mi(t, e, n, a) {
    return (
      (t = { tag: t, create: n, deps: a, inst: e, next: null }),
      (e = rt.updateQueue),
      e === null && ((e = ju()), (rt.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((a = n.next), (n.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function Ms() {
    return { destroy: void 0, resource: void 0 };
  }
  function Md() {
    return Zt().memoizedState;
  }
  function Ns(t, e, n, a) {
    var l = be();
    (a = a === void 0 ? null : a),
      (rt.flags |= t),
      (l.memoizedState = mi(1 | e, Ms(), n, a));
  }
  function fl(t, e, n, a) {
    var l = Zt();
    a = a === void 0 ? null : a;
    var u = l.memoizedState.inst;
    Tt !== null && a !== null && Nu(a, Tt.memoizedState.deps)
      ? (l.memoizedState = mi(e, u, n, a))
      : ((rt.flags |= t), (l.memoizedState = mi(1 | e, u, n, a)));
  }
  function Nd(t, e) {
    Ns(8390656, 8, t, e);
  }
  function Cd(t, e) {
    fl(2048, 8, t, e);
  }
  function Dd(t, e) {
    return fl(4, 2, t, e);
  }
  function zd(t, e) {
    return fl(4, 4, t, e);
  }
  function qd(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function jd(t, e, n) {
    (n = n != null ? n.concat([t]) : null), fl(4, 4, qd.bind(null, e, t), n);
  }
  function Yu() {}
  function kd(t, e) {
    var n = Zt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && Nu(e, a[1]) ? a[0] : ((n.memoizedState = [t, e]), t);
  }
  function Ud(t, e) {
    var n = Zt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && Nu(e, a[1])) return a[0];
    if (((a = t()), Ra)) {
      Ze(!0);
      try {
        t();
      } finally {
        Ze(!1);
      }
    }
    return (n.memoizedState = [a, e]), a;
  }
  function Vu(t, e, n) {
    return n === void 0 || (Qn & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = Hh()), (rt.lanes |= t), (Fn |= t), n);
  }
  function Ld(t, e, n, a) {
    return we(n, e)
      ? n
      : fi.current !== null
      ? ((t = Vu(t, n, a)), we(t, e) || (te = !0), t)
      : (Qn & 42) === 0
      ? ((te = !0), (t.memoizedState = n))
      : ((t = Hh()), (rt.lanes |= t), (Fn |= t), e);
  }
  function Bd(t, e, n, a, l) {
    var u = k.p;
    k.p = u !== 0 && 8 > u ? u : 8;
    var f = T.T,
      h = {};
    (T.T = h), Xu(t, !1, e, n);
    try {
      var y = l(),
        E = T.S;
      if (
        (E !== null && E(h, y),
        y !== null && typeof y == "object" && typeof y.then == "function")
      ) {
        var N = Uy(y, a);
        dl(t, e, N, Me(t));
      } else dl(t, e, a, Me(t));
    } catch (q) {
      dl(t, e, { then: function () {}, status: "rejected", reason: q }, Me());
    } finally {
      (k.p = u), (T.T = f);
    }
  }
  function Vy() {}
  function Qu(t, e, n, a) {
    if (t.tag !== 5) throw Error(o(476));
    var l = Hd(t).queue;
    Bd(
      t,
      l,
      e,
      Y,
      n === null
        ? Vy
        : function () {
            return Yd(t), n(a);
          }
    );
  }
  function Hd(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: Y,
      baseState: Y,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Tn,
        lastRenderedState: Y,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Tn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Yd(t) {
    var e = Hd(t).next.queue;
    dl(t, e, {}, Me());
  }
  function Gu() {
    return oe(Nl);
  }
  function Vd() {
    return Zt().memoizedState;
  }
  function Qd() {
    return Zt().memoizedState;
  }
  function Qy(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Me();
          t = Yn(n);
          var a = Vn(e, t, n);
          a !== null && (Ne(a, e, n), sl(a, e, n)),
            (e = { cache: Su() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function Gy(t, e, n) {
    var a = Me();
    (n = {
      lane: a,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Cs(t)
        ? Xd(e, n)
        : ((n = cu(t, e, n, a)), n !== null && (Ne(n, t, a), Zd(n, e, a)));
  }
  function Gd(t, e, n) {
    var a = Me();
    dl(t, e, n, a);
  }
  function dl(t, e, n, a) {
    var l = {
      lane: a,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Cs(t)) Xd(e, l);
    else {
      var u = t.alternate;
      if (
        t.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = e.lastRenderedReducer), u !== null)
      )
        try {
          var f = e.lastRenderedState,
            h = u(f, n);
          if (((l.hasEagerState = !0), (l.eagerState = h), we(h, f)))
            return ms(t, e, l, 0), Mt === null && hs(), !1;
        } catch {
        } finally {
        }
      if (((n = cu(t, e, l, a)), n !== null))
        return Ne(n, t, a), Zd(n, e, a), !0;
    }
    return !1;
  }
  function Xu(t, e, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: wo(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Cs(t))
    ) {
      if (e) throw Error(o(479));
    } else (e = cu(t, n, a, 2)), e !== null && Ne(e, t, 2);
  }
  function Cs(t) {
    var e = t.alternate;
    return t === rt || (e !== null && e === rt);
  }
  function Xd(t, e) {
    di = Es = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e);
  }
  function Zd(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      (a &= t.pendingLanes), (n |= a), (e.lanes = n), Bt(t, n);
    }
  }
  var Ds = {
      readContext: oe,
      use: _s,
      useCallback: Vt,
      useContext: Vt,
      useEffect: Vt,
      useImperativeHandle: Vt,
      useLayoutEffect: Vt,
      useInsertionEffect: Vt,
      useMemo: Vt,
      useReducer: Vt,
      useRef: Vt,
      useState: Vt,
      useDebugValue: Vt,
      useDeferredValue: Vt,
      useTransition: Vt,
      useSyncExternalStore: Vt,
      useId: Vt,
      useHostTransitionStatus: Vt,
      useFormState: Vt,
      useActionState: Vt,
      useOptimistic: Vt,
      useMemoCache: Vt,
      useCacheRefresh: Vt,
    },
    Kd = {
      readContext: oe,
      use: _s,
      useCallback: function (t, e) {
        return (be().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: oe,
      useEffect: Nd,
      useImperativeHandle: function (t, e, n) {
        (n = n != null ? n.concat([t]) : null),
          Ns(4194308, 4, qd.bind(null, e, t), n);
      },
      useLayoutEffect: function (t, e) {
        return Ns(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        Ns(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = be();
        e = e === void 0 ? null : e;
        var a = t();
        if (Ra) {
          Ze(!0);
          try {
            t();
          } finally {
            Ze(!1);
          }
        }
        return (n.memoizedState = [a, e]), a;
      },
      useReducer: function (t, e, n) {
        var a = be();
        if (n !== void 0) {
          var l = n(e);
          if (Ra) {
            Ze(!0);
            try {
              n(e);
            } finally {
              Ze(!1);
            }
          }
        } else l = e;
        return (
          (a.memoizedState = a.baseState = l),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: l,
          }),
          (a.queue = t),
          (t = t.dispatch = Gy.bind(null, rt, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = be();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = Bu(t);
        var e = t.queue,
          n = Gd.bind(null, rt, e);
        return (e.dispatch = n), [t.memoizedState, n];
      },
      useDebugValue: Yu,
      useDeferredValue: function (t, e) {
        var n = be();
        return Vu(n, t, e);
      },
      useTransition: function () {
        var t = Bu(!1);
        return (
          (t = Bd.bind(null, rt, t.queue, !0, !1)),
          (be().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var a = rt,
          l = be();
        if (St) {
          if (n === void 0) throw Error(o(407));
          n = n();
        } else {
          if (((n = e()), Mt === null)) throw Error(o(349));
          (vt & 124) !== 0 || md(a, e, n);
        }
        l.memoizedState = n;
        var u = { value: n, getSnapshot: e };
        return (
          (l.queue = u),
          Nd(yd.bind(null, a, u, t), [t]),
          (a.flags |= 2048),
          mi(9, Ms(), gd.bind(null, a, u, n, e), null),
          n
        );
      },
      useId: function () {
        var t = be(),
          e = Mt.identifierPrefix;
        if (St) {
          var n = Sn,
            a = bn;
          (n = (a & ~(1 << (32 - ae(a) - 1))).toString(32) + n),
            (e = "«" + e + "R" + n),
            (n = Os++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "»");
        } else (n = Ly++), (e = "«" + e + "r" + n.toString(32) + "»");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Gu,
      useFormState: Ed,
      useActionState: Ed,
      useOptimistic: function (t) {
        var e = be();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = Xu.bind(null, rt, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: ku,
      useCacheRefresh: function () {
        return (be().memoizedState = Qy.bind(null, rt));
      },
    },
    $d = {
      readContext: oe,
      use: _s,
      useCallback: kd,
      useContext: oe,
      useEffect: Cd,
      useImperativeHandle: jd,
      useInsertionEffect: Dd,
      useLayoutEffect: zd,
      useMemo: Ud,
      useReducer: Rs,
      useRef: Md,
      useState: function () {
        return Rs(Tn);
      },
      useDebugValue: Yu,
      useDeferredValue: function (t, e) {
        var n = Zt();
        return Ld(n, Tt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Rs(Tn)[0],
          e = Zt().memoizedState;
        return [typeof t == "boolean" ? t : cl(t), e];
      },
      useSyncExternalStore: hd,
      useId: Vd,
      useHostTransitionStatus: Gu,
      useFormState: Od,
      useActionState: Od,
      useOptimistic: function (t, e) {
        var n = Zt();
        return bd(n, Tt, t, e);
      },
      useMemoCache: ku,
      useCacheRefresh: Qd,
    },
    Xy = {
      readContext: oe,
      use: _s,
      useCallback: kd,
      useContext: oe,
      useEffect: Cd,
      useImperativeHandle: jd,
      useInsertionEffect: Dd,
      useLayoutEffect: zd,
      useMemo: Ud,
      useReducer: Lu,
      useRef: Md,
      useState: function () {
        return Lu(Tn);
      },
      useDebugValue: Yu,
      useDeferredValue: function (t, e) {
        var n = Zt();
        return Tt === null ? Vu(n, t, e) : Ld(n, Tt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Lu(Tn)[0],
          e = Zt().memoizedState;
        return [typeof t == "boolean" ? t : cl(t), e];
      },
      useSyncExternalStore: hd,
      useId: Vd,
      useHostTransitionStatus: Gu,
      useFormState: Rd,
      useActionState: Rd,
      useOptimistic: function (t, e) {
        var n = Zt();
        return Tt !== null
          ? bd(n, Tt, t, e)
          : ((n.baseState = t), [t, n.queue.dispatch]);
      },
      useMemoCache: ku,
      useCacheRefresh: Qd,
    },
    gi = null,
    hl = 0;
  function zs(t) {
    var e = hl;
    return (hl += 1), gi === null && (gi = []), ld(gi, t, e);
  }
  function ml(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function qs(t, e) {
    throw e.$$typeof === v
      ? Error(o(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          o(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function Jd(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Fd(t) {
    function e(A, x) {
      if (t) {
        var w = A.deletions;
        w === null ? ((A.deletions = [x]), (A.flags |= 16)) : w.push(x);
      }
    }
    function n(A, x) {
      if (!t) return null;
      for (; x !== null; ) e(A, x), (x = x.sibling);
      return null;
    }
    function a(A) {
      for (var x = new Map(); A !== null; )
        A.key !== null ? x.set(A.key, A) : x.set(A.index, A), (A = A.sibling);
      return x;
    }
    function l(A, x) {
      return (A = pn(A, x)), (A.index = 0), (A.sibling = null), A;
    }
    function u(A, x, w) {
      return (
        (A.index = w),
        t
          ? ((w = A.alternate),
            w !== null
              ? ((w = w.index), w < x ? ((A.flags |= 67108866), x) : w)
              : ((A.flags |= 67108866), x))
          : ((A.flags |= 1048576), x)
      );
    }
    function f(A) {
      return t && A.alternate === null && (A.flags |= 67108866), A;
    }
    function h(A, x, w, D) {
      return x === null || x.tag !== 6
        ? ((x = du(w, A.mode, D)), (x.return = A), x)
        : ((x = l(x, w)), (x.return = A), x);
    }
    function y(A, x, w, D) {
      var X = w.type;
      return X === Z
        ? N(A, x, w.props.children, D, w.key)
        : x !== null &&
          (x.elementType === X ||
            (typeof X == "object" &&
              X !== null &&
              X.$$typeof === qt &&
              Jd(X) === x.type))
        ? ((x = l(x, w.props)), ml(x, w), (x.return = A), x)
        : ((x = ys(w.type, w.key, w.props, null, A.mode, D)),
          ml(x, w),
          (x.return = A),
          x);
    }
    function E(A, x, w, D) {
      return x === null ||
        x.tag !== 4 ||
        x.stateNode.containerInfo !== w.containerInfo ||
        x.stateNode.implementation !== w.implementation
        ? ((x = hu(w, A.mode, D)), (x.return = A), x)
        : ((x = l(x, w.children || [])), (x.return = A), x);
    }
    function N(A, x, w, D, X) {
      return x === null || x.tag !== 7
        ? ((x = Sa(w, A.mode, D, X)), (x.return = A), x)
        : ((x = l(x, w)), (x.return = A), x);
    }
    function q(A, x, w) {
      if (
        (typeof x == "string" && x !== "") ||
        typeof x == "number" ||
        typeof x == "bigint"
      )
        return (x = du("" + x, A.mode, w)), (x.return = A), x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case C:
            return (
              (w = ys(x.type, x.key, x.props, null, A.mode, w)),
              ml(w, x),
              (w.return = A),
              w
            );
          case H:
            return (x = hu(x, A.mode, w)), (x.return = A), x;
          case qt:
            var D = x._init;
            return (x = D(x._payload)), q(A, x, w);
        }
        if ($(x) || Ct(x))
          return (x = Sa(x, A.mode, w, null)), (x.return = A), x;
        if (typeof x.then == "function") return q(A, zs(x), w);
        if (x.$$typeof === nt) return q(A, Ss(A, x), w);
        qs(A, x);
      }
      return null;
    }
    function _(A, x, w, D) {
      var X = x !== null ? x.key : null;
      if (
        (typeof w == "string" && w !== "") ||
        typeof w == "number" ||
        typeof w == "bigint"
      )
        return X !== null ? null : h(A, x, "" + w, D);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case C:
            return w.key === X ? y(A, x, w, D) : null;
          case H:
            return w.key === X ? E(A, x, w, D) : null;
          case qt:
            return (X = w._init), (w = X(w._payload)), _(A, x, w, D);
        }
        if ($(w) || Ct(w)) return X !== null ? null : N(A, x, w, D, null);
        if (typeof w.then == "function") return _(A, x, zs(w), D);
        if (w.$$typeof === nt) return _(A, x, Ss(A, w), D);
        qs(A, w);
      }
      return null;
    }
    function R(A, x, w, D, X) {
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return (A = A.get(w) || null), h(x, A, "" + D, X);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case C:
            return (
              (A = A.get(D.key === null ? w : D.key) || null), y(x, A, D, X)
            );
          case H:
            return (
              (A = A.get(D.key === null ? w : D.key) || null), E(x, A, D, X)
            );
          case qt:
            var ut = D._init;
            return (D = ut(D._payload)), R(A, x, w, D, X);
        }
        if ($(D) || Ct(D)) return (A = A.get(w) || null), N(x, A, D, X, null);
        if (typeof D.then == "function") return R(A, x, w, zs(D), X);
        if (D.$$typeof === nt) return R(A, x, w, Ss(x, D), X);
        qs(x, D);
      }
      return null;
    }
    function P(A, x, w, D) {
      for (
        var X = null, ut = null, F = x, W = (x = 0), ne = null;
        F !== null && W < w.length;
        W++
      ) {
        F.index > W ? ((ne = F), (F = null)) : (ne = F.sibling);
        var pt = _(A, F, w[W], D);
        if (pt === null) {
          F === null && (F = ne);
          break;
        }
        t && F && pt.alternate === null && e(A, F),
          (x = u(pt, x, W)),
          ut === null ? (X = pt) : (ut.sibling = pt),
          (ut = pt),
          (F = ne);
      }
      if (W === w.length) return n(A, F), St && Aa(A, W), X;
      if (F === null) {
        for (; W < w.length; W++)
          (F = q(A, w[W], D)),
            F !== null &&
              ((x = u(F, x, W)),
              ut === null ? (X = F) : (ut.sibling = F),
              (ut = F));
        return St && Aa(A, W), X;
      }
      for (F = a(F); W < w.length; W++)
        (ne = R(F, A, W, w[W], D)),
          ne !== null &&
            (t &&
              ne.alternate !== null &&
              F.delete(ne.key === null ? W : ne.key),
            (x = u(ne, x, W)),
            ut === null ? (X = ne) : (ut.sibling = ne),
            (ut = ne));
      return (
        t &&
          F.forEach(function (la) {
            return e(A, la);
          }),
        St && Aa(A, W),
        X
      );
    }
    function I(A, x, w, D) {
      if (w == null) throw Error(o(151));
      for (
        var X = null, ut = null, F = x, W = (x = 0), ne = null, pt = w.next();
        F !== null && !pt.done;
        W++, pt = w.next()
      ) {
        F.index > W ? ((ne = F), (F = null)) : (ne = F.sibling);
        var la = _(A, F, pt.value, D);
        if (la === null) {
          F === null && (F = ne);
          break;
        }
        t && F && la.alternate === null && e(A, F),
          (x = u(la, x, W)),
          ut === null ? (X = la) : (ut.sibling = la),
          (ut = la),
          (F = ne);
      }
      if (pt.done) return n(A, F), St && Aa(A, W), X;
      if (F === null) {
        for (; !pt.done; W++, pt = w.next())
          (pt = q(A, pt.value, D)),
            pt !== null &&
              ((x = u(pt, x, W)),
              ut === null ? (X = pt) : (ut.sibling = pt),
              (ut = pt));
        return St && Aa(A, W), X;
      }
      for (F = a(F); !pt.done; W++, pt = w.next())
        (pt = R(F, A, W, pt.value, D)),
          pt !== null &&
            (t &&
              pt.alternate !== null &&
              F.delete(pt.key === null ? W : pt.key),
            (x = u(pt, x, W)),
            ut === null ? (X = pt) : (ut.sibling = pt),
            (ut = pt));
      return (
        t &&
          F.forEach(function (Zv) {
            return e(A, Zv);
          }),
        St && Aa(A, W),
        X
      );
    }
    function Et(A, x, w, D) {
      if (
        (typeof w == "object" &&
          w !== null &&
          w.type === Z &&
          w.key === null &&
          (w = w.props.children),
        typeof w == "object" && w !== null)
      ) {
        switch (w.$$typeof) {
          case C:
            t: {
              for (var X = w.key; x !== null; ) {
                if (x.key === X) {
                  if (((X = w.type), X === Z)) {
                    if (x.tag === 7) {
                      n(A, x.sibling),
                        (D = l(x, w.props.children)),
                        (D.return = A),
                        (A = D);
                      break t;
                    }
                  } else if (
                    x.elementType === X ||
                    (typeof X == "object" &&
                      X !== null &&
                      X.$$typeof === qt &&
                      Jd(X) === x.type)
                  ) {
                    n(A, x.sibling),
                      (D = l(x, w.props)),
                      ml(D, w),
                      (D.return = A),
                      (A = D);
                    break t;
                  }
                  n(A, x);
                  break;
                } else e(A, x);
                x = x.sibling;
              }
              w.type === Z
                ? ((D = Sa(w.props.children, A.mode, D, w.key)),
                  (D.return = A),
                  (A = D))
                : ((D = ys(w.type, w.key, w.props, null, A.mode, D)),
                  ml(D, w),
                  (D.return = A),
                  (A = D));
            }
            return f(A);
          case H:
            t: {
              for (X = w.key; x !== null; ) {
                if (x.key === X)
                  if (
                    x.tag === 4 &&
                    x.stateNode.containerInfo === w.containerInfo &&
                    x.stateNode.implementation === w.implementation
                  ) {
                    n(A, x.sibling),
                      (D = l(x, w.children || [])),
                      (D.return = A),
                      (A = D);
                    break t;
                  } else {
                    n(A, x);
                    break;
                  }
                else e(A, x);
                x = x.sibling;
              }
              (D = hu(w, A.mode, D)), (D.return = A), (A = D);
            }
            return f(A);
          case qt:
            return (X = w._init), (w = X(w._payload)), Et(A, x, w, D);
        }
        if ($(w)) return P(A, x, w, D);
        if (Ct(w)) {
          if (((X = Ct(w)), typeof X != "function")) throw Error(o(150));
          return (w = X.call(w)), I(A, x, w, D);
        }
        if (typeof w.then == "function") return Et(A, x, zs(w), D);
        if (w.$$typeof === nt) return Et(A, x, Ss(A, w), D);
        qs(A, w);
      }
      return (typeof w == "string" && w !== "") ||
        typeof w == "number" ||
        typeof w == "bigint"
        ? ((w = "" + w),
          x !== null && x.tag === 6
            ? (n(A, x.sibling), (D = l(x, w)), (D.return = A), (A = D))
            : (n(A, x), (D = du(w, A.mode, D)), (D.return = A), (A = D)),
          f(A))
        : n(A, x);
    }
    return function (A, x, w, D) {
      try {
        hl = 0;
        var X = Et(A, x, w, D);
        return (gi = null), X;
      } catch (F) {
        if (F === il || F === As) throw F;
        var ut = Ee(29, F, null, A.mode);
        return (ut.lanes = D), (ut.return = A), ut;
      } finally {
      }
    };
  }
  var yi = Fd(!0),
    Id = Fd(!1),
    Ye = M(null),
    en = null;
  function Gn(t) {
    var e = t.alternate;
    j(It, It.current & 1),
      j(Ye, t),
      en === null &&
        (e === null || fi.current !== null || e.memoizedState !== null) &&
        (en = t);
  }
  function Wd(t) {
    if (t.tag === 22) {
      if ((j(It, It.current), j(Ye, t), en === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (en = t);
      }
    } else Xn();
  }
  function Xn() {
    j(It, It.current), j(Ye, Ye.current);
  }
  function wn(t) {
    L(Ye), en === t && (en = null), L(It);
  }
  var It = M(0);
  function js(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || ko(n))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  function Zu(t, e, n, a) {
    (e = t.memoizedState),
      (n = n(a, e)),
      (n = n == null ? e : O({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Ku = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var a = Me(),
        l = Yn(a);
      (l.payload = e),
        n != null && (l.callback = n),
        (e = Vn(t, l, a)),
        e !== null && (Ne(e, t, a), sl(e, t, a));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var a = Me(),
        l = Yn(a);
      (l.tag = 1),
        (l.payload = e),
        n != null && (l.callback = n),
        (e = Vn(t, l, a)),
        e !== null && (Ne(e, t, a), sl(e, t, a));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = Me(),
        a = Yn(n);
      (a.tag = 2),
        e != null && (a.callback = e),
        (e = Vn(t, a, n)),
        e !== null && (Ne(e, t, n), sl(e, t, n));
    },
  };
  function Pd(t, e, n, a, l, u, f) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, u, f)
        : e.prototype && e.prototype.isPureReactComponent
        ? !Fi(n, a) || !Fi(l, u)
        : !0
    );
  }
  function th(t, e, n, a) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, a),
      e.state !== t && Ku.enqueueReplaceState(e, e.state, null);
  }
  function Ma(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e) a !== "ref" && (n[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = O({}, n));
      for (var l in t) n[l] === void 0 && (n[l] = t[l]);
    }
    return n;
  }
  var ks =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function eh(t) {
    ks(t);
  }
  function nh(t) {
    console.error(t);
  }
  function ah(t) {
    ks(t);
  }
  function Us(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function ih(t, e, n) {
    try {
      var a = t.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function $u(t, e, n) {
    return (
      (n = Yn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        Us(t, e);
      }),
      n
    );
  }
  function lh(t) {
    return (t = Yn(t)), (t.tag = 3), t;
  }
  function sh(t, e, n, a) {
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var u = a.value;
      (t.payload = function () {
        return l(u);
      }),
        (t.callback = function () {
          ih(e, n, a);
        });
    }
    var f = n.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (t.callback = function () {
        ih(e, n, a),
          typeof l != "function" &&
            (In === null ? (In = new Set([this])) : In.add(this));
        var h = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: h !== null ? h : "",
        });
      });
  }
  function Zy(t, e, n, a, l) {
    if (
      ((n.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && el(e, n, l, !0),
        (n = Ye.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              en === null ? bo() : n.alternate === null && Lt === 0 && (Lt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = l),
              a === Tu
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([a])) : e.add(a),
                  xo(t, a, l)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === Tu
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([a])) : n.add(a)),
                  xo(t, a, l)),
              !1
            );
        }
        throw Error(o(435, n.tag));
      }
      return xo(t, a, l), bo(), !1;
    }
    if (St)
      return (
        (e = Ye.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = l),
            a !== yu && ((t = Error(o(422), { cause: a })), tl(Ue(t, n))))
          : (a !== yu && ((e = Error(o(423), { cause: a })), tl(Ue(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (l &= -l),
            (t.lanes |= l),
            (a = Ue(a, n)),
            (l = $u(t.stateNode, a, l)),
            Ou(t, l),
            Lt !== 4 && (Lt = 2)),
        !1
      );
    var u = Error(o(520), { cause: a });
    if (
      ((u = Ue(u, n)),
      xl === null ? (xl = [u]) : xl.push(u),
      Lt !== 4 && (Lt = 2),
      e === null)
    )
      return !0;
    (a = Ue(a, n)), (n = e);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = l & -l),
            (n.lanes |= t),
            (t = $u(n.stateNode, a, t)),
            Ou(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (u = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (In === null || !In.has(u)))))
          )
            return (
              (n.flags |= 65536),
              (l &= -l),
              (n.lanes |= l),
              (l = lh(l)),
              sh(l, t, n, a),
              Ou(n, l),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var rh = Error(o(461)),
    te = !1;
  function le(t, e, n, a) {
    e.child = t === null ? Id(e, null, n, a) : yi(e, t.child, n, a);
  }
  function uh(t, e, n, a, l) {
    n = n.render;
    var u = e.ref;
    if ("ref" in a) {
      var f = {};
      for (var h in a) h !== "ref" && (f[h] = a[h]);
    } else f = a;
    return (
      Oa(e),
      (a = Cu(t, e, n, f, u, l)),
      (h = Du()),
      t !== null && !te
        ? (zu(t, e, l), En(t, e, l))
        : (St && h && mu(e), (e.flags |= 1), le(t, e, a, l), e.child)
    );
  }
  function oh(t, e, n, a, l) {
    if (t === null) {
      var u = n.type;
      return typeof u == "function" &&
        !fu(u) &&
        u.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = u), ch(t, e, u, a, l))
        : ((t = ys(n.type, null, a, e, e.mode, l)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((u = t.child), !no(t, l))) {
      var f = u.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Fi), n(f, a) && t.ref === e.ref)
      )
        return En(t, e, l);
    }
    return (
      (e.flags |= 1),
      (t = pn(u, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function ch(t, e, n, a, l) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Fi(u, a) && t.ref === e.ref)
        if (((te = !1), (e.pendingProps = a = u), no(t, l)))
          (t.flags & 131072) !== 0 && (te = !0);
        else return (e.lanes = t.lanes), En(t, e, l);
    }
    return Ju(t, e, n, a, l);
  }
  function fh(t, e, n) {
    var a = e.pendingProps,
      l = a.children,
      u = t !== null ? t.memoizedState : null;
    if (a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((a = u !== null ? u.baseLanes | n : n), t !== null)) {
          for (l = e.child = t.child, u = 0; l !== null; )
            (u = u | l.lanes | l.childLanes), (l = l.sibling);
          e.childLanes = u & ~a;
        } else (e.childLanes = 0), (e.child = null);
        return dh(t, e, a, n);
      }
      if ((n & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && xs(e, u !== null ? u.cachePool : null),
          u !== null ? cd(e, u) : Ru(),
          Wd(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          dh(t, e, u !== null ? u.baseLanes | n : n, n)
        );
    } else
      u !== null
        ? (xs(e, u.cachePool), cd(e, u), Xn(), (e.memoizedState = null))
        : (t !== null && xs(e, null), Ru(), Xn());
    return le(t, e, l, n), e.child;
  }
  function dh(t, e, n, a) {
    var l = Au();
    return (
      (l = l === null ? null : { parent: Ft._currentValue, pool: l }),
      (e.memoizedState = { baseLanes: n, cachePool: l }),
      t !== null && xs(e, null),
      Ru(),
      Wd(e),
      t !== null && el(t, e, a, !0),
      null
    );
  }
  function Ls(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(o(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Ju(t, e, n, a, l) {
    return (
      Oa(e),
      (n = Cu(t, e, n, a, void 0, l)),
      (a = Du()),
      t !== null && !te
        ? (zu(t, e, l), En(t, e, l))
        : (St && a && mu(e), (e.flags |= 1), le(t, e, n, l), e.child)
    );
  }
  function hh(t, e, n, a, l, u) {
    return (
      Oa(e),
      (e.updateQueue = null),
      (n = dd(e, a, n, l)),
      fd(t),
      (a = Du()),
      t !== null && !te
        ? (zu(t, e, u), En(t, e, u))
        : (St && a && mu(e), (e.flags |= 1), le(t, e, n, u), e.child)
    );
  }
  function mh(t, e, n, a, l) {
    if ((Oa(e), e.stateNode === null)) {
      var u = si,
        f = n.contextType;
      typeof f == "object" && f !== null && (u = oe(f)),
        (u = new n(a, u)),
        (e.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Ku),
        (e.stateNode = u),
        (u._reactInternals = e),
        (u = e.stateNode),
        (u.props = a),
        (u.state = e.memoizedState),
        (u.refs = {}),
        wu(e),
        (f = n.contextType),
        (u.context = typeof f == "object" && f !== null ? oe(f) : si),
        (u.state = e.memoizedState),
        (f = n.getDerivedStateFromProps),
        typeof f == "function" && (Zu(e, n, f, a), (u.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((f = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          f !== u.state && Ku.enqueueReplaceState(u, u.state, null),
          ul(e, a, u, l),
          rl(),
          (u.state = e.memoizedState)),
        typeof u.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0);
    } else if (t === null) {
      u = e.stateNode;
      var h = e.memoizedProps,
        y = Ma(n, h);
      u.props = y;
      var E = u.context,
        N = n.contextType;
      (f = si), typeof N == "object" && N !== null && (f = oe(N));
      var q = n.getDerivedStateFromProps;
      (N =
        typeof q == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (h = e.pendingProps !== h),
        N ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((h || E !== f) && th(e, u, a, f)),
        (Hn = !1);
      var _ = e.memoizedState;
      (u.state = _),
        ul(e, a, u, l),
        rl(),
        (E = e.memoizedState),
        h || _ !== E || Hn
          ? (typeof q == "function" && (Zu(e, n, q, a), (E = e.memoizedState)),
            (y = Hn || Pd(e, n, y, a, _, E, f))
              ? (N ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = E)),
            (u.props = a),
            (u.state = E),
            (u.context = f),
            (a = y))
          : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1));
    } else {
      (u = e.stateNode),
        Eu(t, e),
        (f = e.memoizedProps),
        (N = Ma(n, f)),
        (u.props = N),
        (q = e.pendingProps),
        (_ = u.context),
        (E = n.contextType),
        (y = si),
        typeof E == "object" && E !== null && (y = oe(E)),
        (h = n.getDerivedStateFromProps),
        (E =
          typeof h == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((f !== q || _ !== y) && th(e, u, a, y)),
        (Hn = !1),
        (_ = e.memoizedState),
        (u.state = _),
        ul(e, a, u, l),
        rl();
      var R = e.memoizedState;
      f !== q ||
      _ !== R ||
      Hn ||
      (t !== null && t.dependencies !== null && bs(t.dependencies))
        ? (typeof h == "function" && (Zu(e, n, h, a), (R = e.memoizedState)),
          (N =
            Hn ||
            Pd(e, n, N, a, _, R, y) ||
            (t !== null && t.dependencies !== null && bs(t.dependencies)))
            ? (E ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(a, R, y),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(a, R, y)),
              typeof u.componentDidUpdate == "function" && (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (f === t.memoizedProps && _ === t.memoizedState) ||
                (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (f === t.memoizedProps && _ === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = R)),
          (u.props = a),
          (u.state = R),
          (u.context = y),
          (a = N))
        : (typeof u.componentDidUpdate != "function" ||
            (f === t.memoizedProps && _ === t.memoizedState) ||
            (e.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (f === t.memoizedProps && _ === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      Ls(t, e),
      (a = (e.flags & 128) !== 0),
      u || a
        ? ((u = e.stateNode),
          (n =
            a && typeof n.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = yi(e, t.child, null, l)),
              (e.child = yi(e, null, n, l)))
            : le(t, e, n, l),
          (e.memoizedState = u.state),
          (t = e.child))
        : (t = En(t, e, l)),
      t
    );
  }
  function gh(t, e, n, a) {
    return Pi(), (e.flags |= 256), le(t, e, n, a), e.child;
  }
  var Fu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Iu(t) {
    return { baseLanes: t, cachePool: nd() };
  }
  function Wu(t, e, n) {
    return (t = t !== null ? t.childLanes & ~n : 0), e && (t |= Ve), t;
  }
  function yh(t, e, n) {
    var a = e.pendingProps,
      l = !1,
      u = (e.flags & 128) !== 0,
      f;
    if (
      ((f = u) ||
        (f =
          t !== null && t.memoizedState === null ? !1 : (It.current & 2) !== 0),
      f && ((l = !0), (e.flags &= -129)),
      (f = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (St) {
        if ((l ? Gn(e) : Xn(), St)) {
          var h = Ut,
            y;
          if ((y = h)) {
            t: {
              for (y = h, h = tn; y.nodeType !== 8; ) {
                if (!h) {
                  h = null;
                  break t;
                }
                if (((y = Fe(y.nextSibling)), y === null)) {
                  h = null;
                  break t;
                }
              }
              h = y;
            }
            h !== null
              ? ((e.memoizedState = {
                  dehydrated: h,
                  treeContext: xa !== null ? { id: bn, overflow: Sn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (y = Ee(18, null, null, 0)),
                (y.stateNode = h),
                (y.return = e),
                (e.child = y),
                (ge = e),
                (Ut = null),
                (y = !0))
              : (y = !1);
          }
          y || wa(e);
        }
        if (
          ((h = e.memoizedState),
          h !== null && ((h = h.dehydrated), h !== null))
        )
          return ko(h) ? (e.lanes = 32) : (e.lanes = 536870912), null;
        wn(e);
      }
      return (
        (h = a.children),
        (a = a.fallback),
        l
          ? (Xn(),
            (l = e.mode),
            (h = Bs({ mode: "hidden", children: h }, l)),
            (a = Sa(a, l, n, null)),
            (h.return = e),
            (a.return = e),
            (h.sibling = a),
            (e.child = h),
            (l = e.child),
            (l.memoizedState = Iu(n)),
            (l.childLanes = Wu(t, f, n)),
            (e.memoizedState = Fu),
            a)
          : (Gn(e), Pu(e, h))
      );
    }
    if (
      ((y = t.memoizedState), y !== null && ((h = y.dehydrated), h !== null))
    ) {
      if (u)
        e.flags & 256
          ? (Gn(e), (e.flags &= -257), (e = to(t, e, n)))
          : e.memoizedState !== null
          ? (Xn(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (Xn(),
            (l = a.fallback),
            (h = e.mode),
            (a = Bs({ mode: "visible", children: a.children }, h)),
            (l = Sa(l, h, n, null)),
            (l.flags |= 2),
            (a.return = e),
            (l.return = e),
            (a.sibling = l),
            (e.child = a),
            yi(e, t.child, null, n),
            (a = e.child),
            (a.memoizedState = Iu(n)),
            (a.childLanes = Wu(t, f, n)),
            (e.memoizedState = Fu),
            (e = l));
      else if ((Gn(e), ko(h))) {
        if (((f = h.nextSibling && h.nextSibling.dataset), f)) var E = f.dgst;
        (f = E),
          (a = Error(o(419))),
          (a.stack = ""),
          (a.digest = f),
          tl({ value: a, source: null, stack: null }),
          (e = to(t, e, n));
      } else if (
        (te || el(t, e, n, !1), (f = (n & t.childLanes) !== 0), te || f)
      ) {
        if (
          ((f = Mt),
          f !== null &&
            ((a = n & -n),
            (a = (a & 42) !== 0 ? 1 : Gt(a)),
            (a = (a & (f.suspendedLanes | n)) !== 0 ? 0 : a),
            a !== 0 && a !== y.retryLane))
        )
          throw ((y.retryLane = a), li(t, a), Ne(f, t, a), rh);
        h.data === "$?" || bo(), (e = to(t, e, n));
      } else
        h.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = y.treeContext),
            (Ut = Fe(h.nextSibling)),
            (ge = e),
            (St = !0),
            (Ta = null),
            (tn = !1),
            t !== null &&
              ((Be[He++] = bn),
              (Be[He++] = Sn),
              (Be[He++] = xa),
              (bn = t.id),
              (Sn = t.overflow),
              (xa = e)),
            (e = Pu(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return l
      ? (Xn(),
        (l = a.fallback),
        (h = e.mode),
        (y = t.child),
        (E = y.sibling),
        (a = pn(y, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = y.subtreeFlags & 65011712),
        E !== null ? (l = pn(E, l)) : ((l = Sa(l, h, n, null)), (l.flags |= 2)),
        (l.return = e),
        (a.return = e),
        (a.sibling = l),
        (e.child = a),
        (a = l),
        (l = e.child),
        (h = t.child.memoizedState),
        h === null
          ? (h = Iu(n))
          : ((y = h.cachePool),
            y !== null
              ? ((E = Ft._currentValue),
                (y = y.parent !== E ? { parent: E, pool: E } : y))
              : (y = nd()),
            (h = { baseLanes: h.baseLanes | n, cachePool: y })),
        (l.memoizedState = h),
        (l.childLanes = Wu(t, f, n)),
        (e.memoizedState = Fu),
        a)
      : (Gn(e),
        (n = t.child),
        (t = n.sibling),
        (n = pn(n, { mode: "visible", children: a.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((f = e.deletions),
          f === null ? ((e.deletions = [t]), (e.flags |= 16)) : f.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function Pu(t, e) {
    return (
      (e = Bs({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Bs(t, e) {
    return (
      (t = Ee(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function to(t, e, n) {
    return (
      yi(e, t.child, null, n),
      (t = Pu(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function vh(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), pu(t.return, e, n);
  }
  function eo(t, e, n, a, l) {
    var u = t.memoizedState;
    u === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: n,
          tailMode: l,
        })
      : ((u.isBackwards = e),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = a),
        (u.tail = n),
        (u.tailMode = l));
  }
  function ph(t, e, n) {
    var a = e.pendingProps,
      l = a.revealOrder,
      u = a.tail;
    if ((le(t, e, a.children, n), (a = It.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && vh(t, n, e);
          else if (t.tag === 19) vh(t, n, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      a &= 1;
    }
    switch ((j(It, a), l)) {
      case "forwards":
        for (n = e.child, l = null; n !== null; )
          (t = n.alternate),
            t !== null && js(t) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = e.child), (e.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          eo(e, !1, l, n, u);
        break;
      case "backwards":
        for (n = null, l = e.child, e.child = null; l !== null; ) {
          if (((t = l.alternate), t !== null && js(t) === null)) {
            e.child = l;
            break;
          }
          (t = l.sibling), (l.sibling = n), (n = l), (l = t);
        }
        eo(e, !0, n, null, u);
        break;
      case "together":
        eo(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function En(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Fn |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((el(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(o(153));
    if (e.child !== null) {
      for (
        t = e.child, n = pn(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (n = n.sibling = pn(t, t.pendingProps)),
          (n.return = e);
      n.sibling = null;
    }
    return e.child;
  }
  function no(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && bs(t)));
  }
  function Ky(t, e, n) {
    switch (e.tag) {
      case 3:
        bt(e, e.stateNode.containerInfo),
          Bn(e, Ft, t.memoizedState.cache),
          Pi();
        break;
      case 27:
      case 5:
        hn(e);
        break;
      case 4:
        bt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Bn(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (Gn(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
            ? yh(t, e, n)
            : (Gn(e), (t = En(t, e, n)), t !== null ? t.sibling : null);
        Gn(e);
        break;
      case 19:
        var l = (t.flags & 128) !== 0;
        if (
          ((a = (n & e.childLanes) !== 0),
          a || (el(t, e, n, !1), (a = (n & e.childLanes) !== 0)),
          l)
        ) {
          if (a) return ph(t, e, n);
          e.flags |= 128;
        }
        if (
          ((l = e.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          j(It, It.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), fh(t, e, n);
      case 24:
        Bn(e, Ft, t.memoizedState.cache);
    }
    return En(t, e, n);
  }
  function bh(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) te = !0;
      else {
        if (!no(t, n) && (e.flags & 128) === 0) return (te = !1), Ky(t, e, n);
        te = (t.flags & 131072) !== 0;
      }
    else (te = !1), St && (e.flags & 1048576) !== 0 && Jf(e, ps, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var a = e.elementType,
            l = a._init;
          if (((a = l(a._payload)), (e.type = a), typeof a == "function"))
            fu(a)
              ? ((t = Ma(a, t)), (e.tag = 1), (e = mh(null, e, a, t, n)))
              : ((e.tag = 0), (e = Ju(null, e, a, t, n)));
          else {
            if (a != null) {
              if (((l = a.$$typeof), l === ct)) {
                (e.tag = 11), (e = uh(null, e, a, t, n));
                break t;
              } else if (l === Nt) {
                (e.tag = 14), (e = oh(null, e, a, t, n));
                break t;
              }
            }
            throw ((e = yt(a) || a), Error(o(306, e, "")));
          }
        }
        return e;
      case 0:
        return Ju(t, e, e.type, e.pendingProps, n);
      case 1:
        return (a = e.type), (l = Ma(a, e.pendingProps)), mh(t, e, a, l, n);
      case 3:
        t: {
          if ((bt(e, e.stateNode.containerInfo), t === null))
            throw Error(o(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          (l = u.element), Eu(t, e), ul(e, a, null, n);
          var f = e.memoizedState;
          if (
            ((a = f.cache),
            Bn(e, Ft, a),
            a !== u.cache && bu(e, [Ft], n, !0),
            rl(),
            (a = f.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: f.cache }),
              (e.updateQueue.baseState = u),
              (e.memoizedState = u),
              e.flags & 256)
            ) {
              e = gh(t, e, a, n);
              break t;
            } else if (a !== l) {
              (l = Ue(Error(o(424)), e)), tl(l), (e = gh(t, e, a, n));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Ut = Fe(t.firstChild),
                  ge = e,
                  St = !0,
                  Ta = null,
                  tn = !0,
                  n = Id(e, null, a, n),
                  e.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
            }
          else {
            if ((Pi(), a === l)) {
              e = En(t, e, n);
              break t;
            }
            le(t, e, a, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Ls(t, e),
          t === null
            ? (n = Tm(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : St ||
                ((n = e.type),
                (t = e.pendingProps),
                (a = Ps(Q.current).createElement(n)),
                (a[Yt] = e),
                (a[Rt] = t),
                re(a, n, t),
                Pt(a),
                (e.stateNode = a))
            : (e.memoizedState = Tm(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          hn(e),
          t === null &&
            St &&
            ((a = e.stateNode = Sm(e.type, e.pendingProps, Q.current)),
            (ge = e),
            (tn = !0),
            (l = Ut),
            ta(e.type) ? ((Uo = l), (Ut = Fe(a.firstChild))) : (Ut = l)),
          le(t, e, e.pendingProps.children, n),
          Ls(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            St &&
            ((l = a = Ut) &&
              ((a = xv(a, e.type, e.pendingProps, tn)),
              a !== null
                ? ((e.stateNode = a),
                  (ge = e),
                  (Ut = Fe(a.firstChild)),
                  (tn = !1),
                  (l = !0))
                : (l = !1)),
            l || wa(e)),
          hn(e),
          (l = e.type),
          (u = e.pendingProps),
          (f = t !== null ? t.memoizedProps : null),
          (a = u.children),
          zo(l, u) ? (a = null) : f !== null && zo(l, f) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((l = Cu(t, e, By, null, null, n)), (Nl._currentValue = l)),
          Ls(t, e),
          le(t, e, a, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            St &&
            ((t = n = Ut) &&
              ((n = Av(n, e.pendingProps, tn)),
              n !== null
                ? ((e.stateNode = n), (ge = e), (Ut = null), (t = !0))
                : (t = !1)),
            t || wa(e)),
          null
        );
      case 13:
        return yh(t, e, n);
      case 4:
        return (
          bt(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = yi(e, null, a, n)) : le(t, e, a, n),
          e.child
        );
      case 11:
        return uh(t, e, e.type, e.pendingProps, n);
      case 7:
        return le(t, e, e.pendingProps, n), e.child;
      case 8:
        return le(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return le(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return (
          (a = e.pendingProps),
          Bn(e, e.type, a.value),
          le(t, e, a.children, n),
          e.child
        );
      case 9:
        return (
          (l = e.type._context),
          (a = e.pendingProps.children),
          Oa(e),
          (l = oe(l)),
          (a = a(l)),
          (e.flags |= 1),
          le(t, e, a, n),
          e.child
        );
      case 14:
        return oh(t, e, e.type, e.pendingProps, n);
      case 15:
        return ch(t, e, e.type, e.pendingProps, n);
      case 19:
        return ph(t, e, n);
      case 31:
        return (
          (a = e.pendingProps),
          (n = e.mode),
          (a = { mode: a.mode, children: a.children }),
          t === null
            ? ((n = Bs(a, n)),
              (n.ref = e.ref),
              (e.child = n),
              (n.return = e),
              (e = n))
            : ((n = pn(t.child, a)),
              (n.ref = e.ref),
              (e.child = n),
              (n.return = e),
              (e = n)),
          e
        );
      case 22:
        return fh(t, e, n);
      case 24:
        return (
          Oa(e),
          (a = oe(Ft)),
          t === null
            ? ((l = Au()),
              l === null &&
                ((l = Mt),
                (u = Su()),
                (l.pooledCache = u),
                u.refCount++,
                u !== null && (l.pooledCacheLanes |= n),
                (l = u)),
              (e.memoizedState = { parent: a, cache: l }),
              wu(e),
              Bn(e, Ft, l))
            : ((t.lanes & n) !== 0 && (Eu(t, e), ul(e, null, null, n), rl()),
              (l = t.memoizedState),
              (u = e.memoizedState),
              l.parent !== a
                ? ((l = { parent: a, cache: a }),
                  (e.memoizedState = l),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = l),
                  Bn(e, Ft, a))
                : ((a = u.cache),
                  Bn(e, Ft, a),
                  a !== l.cache && bu(e, [Ft], n, !0))),
          le(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(o(156, e.tag));
  }
  function On(t) {
    t.flags |= 4;
  }
  function Sh(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Rm(e))) {
      if (
        ((e = Ye.current),
        e !== null &&
          ((vt & 4194048) === vt
            ? en !== null
            : ((vt & 62914560) !== vt && (vt & 536870912) === 0) || e !== en))
      )
        throw ((ll = Tu), ad);
      t.flags |= 8192;
    }
  }
  function Hs(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? ts() : 536870912), (t.lanes |= e), (Si |= e));
  }
  function gl(t, e) {
    if (!St)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), (e = e.sibling);
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), (n = n.sibling);
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function jt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      a = 0;
    if (e)
      for (var l = t.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (a |= l.subtreeFlags & 65011712),
          (a |= l.flags & 65011712),
          (l.return = t),
          (l = l.sibling);
    else
      for (l = t.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (a |= l.subtreeFlags),
          (a |= l.flags),
          (l.return = t),
          (l = l.sibling);
    return (t.subtreeFlags |= a), (t.childLanes = n), e;
  }
  function $y(t, e, n) {
    var a = e.pendingProps;
    switch ((gu(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return jt(e), null;
      case 1:
        return jt(e), null;
      case 3:
        return (
          (n = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          An(Ft),
          ve(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (Wi(e)
              ? On(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Wf())),
          jt(e),
          null
        );
      case 26:
        return (
          (n = e.memoizedState),
          t === null
            ? (On(e),
              n !== null ? (jt(e), Sh(e, n)) : (jt(e), (e.flags &= -16777217)))
            : n
            ? n !== t.memoizedState
              ? (On(e), jt(e), Sh(e, n))
              : (jt(e), (e.flags &= -16777217))
            : (t.memoizedProps !== a && On(e), jt(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        Ha(e), (n = Q.current);
        var l = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== a && On(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(o(166));
            return jt(e), null;
          }
          (t = G.current),
            Wi(e) ? Ff(e) : ((t = Sm(l, a, n)), (e.stateNode = t), On(e));
        }
        return jt(e), null;
      case 5:
        if ((Ha(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && On(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(o(166));
            return jt(e), null;
          }
          if (((t = G.current), Wi(e))) Ff(e);
          else {
            switch (((l = Ps(Q.current)), t)) {
              case 1:
                t = l.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                t = l.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    t = l.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    t = l.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    (t = l.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof a.is == "string"
                        ? l.createElement("select", { is: a.is })
                        : l.createElement("select")),
                      a.multiple
                        ? (t.multiple = !0)
                        : a.size && (t.size = a.size);
                    break;
                  default:
                    t =
                      typeof a.is == "string"
                        ? l.createElement(n, { is: a.is })
                        : l.createElement(n);
                }
            }
            (t[Yt] = e), (t[Rt] = a);
            t: for (l = e.child; l !== null; ) {
              if (l.tag === 5 || l.tag === 6) t.appendChild(l.stateNode);
              else if (l.tag !== 4 && l.tag !== 27 && l.child !== null) {
                (l.child.return = l), (l = l.child);
                continue;
              }
              if (l === e) break t;
              for (; l.sibling === null; ) {
                if (l.return === null || l.return === e) break t;
                l = l.return;
              }
              (l.sibling.return = l.return), (l = l.sibling);
            }
            e.stateNode = t;
            t: switch ((re(t, n, a), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!a.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && On(e);
          }
        }
        return jt(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && On(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(o(166));
          if (((t = Q.current), Wi(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (a = null),
              (l = ge),
              l !== null)
            )
              switch (l.tag) {
                case 27:
                case 5:
                  a = l.memoizedProps;
              }
            (t[Yt] = e),
              (t = !!(
                t.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                hm(t.nodeValue, n)
              )),
              t || wa(e);
          } else (t = Ps(t).createTextNode(a)), (t[Yt] = e), (e.stateNode = t);
        }
        return jt(e), null;
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((l = Wi(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!l) throw Error(o(318));
              if (
                ((l = e.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(o(317));
              l[Yt] = e;
            } else
              Pi(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            jt(e), (l = !1);
          } else
            (l = Wf()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = l),
              (l = !0);
          if (!l) return e.flags & 256 ? (wn(e), e) : (wn(e), null);
        }
        if ((wn(e), (e.flags & 128) !== 0)) return (e.lanes = n), e;
        if (
          ((n = a !== null), (t = t !== null && t.memoizedState !== null), n)
        ) {
          (a = e.child),
            (l = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (l = a.alternate.memoizedState.cachePool.pool);
          var u = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (u = a.memoizedState.cachePool.pool),
            u !== l && (a.flags |= 2048);
        }
        return (
          n !== t && n && (e.child.flags |= 8192),
          Hs(e, e.updateQueue),
          jt(e),
          null
        );
      case 4:
        return ve(), t === null && Ro(e.stateNode.containerInfo), jt(e), null;
      case 10:
        return An(e.type), jt(e), null;
      case 19:
        if ((L(It), (l = e.memoizedState), l === null)) return jt(e), null;
        if (((a = (e.flags & 128) !== 0), (u = l.rendering), u === null))
          if (a) gl(l, !1);
          else {
            if (Lt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((u = js(t)), u !== null)) {
                  for (
                    e.flags |= 128,
                      gl(l, !1),
                      t = u.updateQueue,
                      e.updateQueue = t,
                      Hs(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;

                  )
                    $f(n, t), (n = n.sibling);
                  return j(It, (It.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            l.tail !== null &&
              ue() > Qs &&
              ((e.flags |= 128), (a = !0), gl(l, !1), (e.lanes = 4194304));
          }
        else {
          if (!a)
            if (((t = js(u)), t !== null)) {
              if (
                ((e.flags |= 128),
                (a = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Hs(e, t),
                gl(l, !0),
                l.tail === null &&
                  l.tailMode === "hidden" &&
                  !u.alternate &&
                  !St)
              )
                return jt(e), null;
            } else
              2 * ue() - l.renderingStartTime > Qs &&
                n !== 536870912 &&
                ((e.flags |= 128), (a = !0), gl(l, !1), (e.lanes = 4194304));
          l.isBackwards
            ? ((u.sibling = e.child), (e.child = u))
            : ((t = l.last),
              t !== null ? (t.sibling = u) : (e.child = u),
              (l.last = u));
        }
        return l.tail !== null
          ? ((e = l.tail),
            (l.rendering = e),
            (l.tail = e.sibling),
            (l.renderingStartTime = ue()),
            (e.sibling = null),
            (t = It.current),
            j(It, a ? (t & 1) | 2 : t & 1),
            e)
          : (jt(e), null);
      case 22:
      case 23:
        return (
          wn(e),
          Mu(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (jt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : jt(e),
          (n = e.updateQueue),
          n !== null && Hs(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== n && (e.flags |= 2048),
          t !== null && L(_a),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          An(Ft),
          jt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, e.tag));
  }
  function Jy(t, e) {
    switch ((gu(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          An(Ft),
          ve(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Ha(e), null;
      case 13:
        if (
          (wn(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(o(340));
          Pi();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return L(It), null;
      case 4:
        return ve(), null;
      case 10:
        return An(e.type), null;
      case 22:
      case 23:
        return (
          wn(e),
          Mu(),
          t !== null && L(_a),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return An(Ft), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function xh(t, e) {
    switch ((gu(e), e.tag)) {
      case 3:
        An(Ft), ve();
        break;
      case 26:
      case 27:
      case 5:
        Ha(e);
        break;
      case 4:
        ve();
        break;
      case 13:
        wn(e);
        break;
      case 19:
        L(It);
        break;
      case 10:
        An(e.type);
        break;
      case 22:
      case 23:
        wn(e), Mu(), t !== null && L(_a);
        break;
      case 24:
        An(Ft);
    }
  }
  function yl(t, e) {
    try {
      var n = e.updateQueue,
        a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var l = a.next;
        n = l;
        do {
          if ((n.tag & t) === t) {
            a = void 0;
            var u = n.create,
              f = n.inst;
            (a = u()), (f.destroy = a);
          }
          n = n.next;
        } while (n !== l);
      }
    } catch (h) {
      Ot(e, e.return, h);
    }
  }
  function Zn(t, e, n) {
    try {
      var a = e.updateQueue,
        l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var f = a.inst,
              h = f.destroy;
            if (h !== void 0) {
              (f.destroy = void 0), (l = e);
              var y = n,
                E = h;
              try {
                E();
              } catch (N) {
                Ot(l, y, N);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (N) {
      Ot(e, e.return, N);
    }
  }
  function Ah(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        od(e, n);
      } catch (a) {
        Ot(t, t.return, a);
      }
    }
  }
  function Th(t, e, n) {
    (n.props = Ma(t.type, t.memoizedProps)), (n.state = t.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (a) {
      Ot(t, e, a);
    }
  }
  function vl(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(a)) : (n.current = a);
      }
    } catch (l) {
      Ot(t, e, l);
    }
  }
  function nn(t, e) {
    var n = t.ref,
      a = t.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (l) {
          Ot(t, e, l);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (l) {
          Ot(t, e, l);
        }
      else n.current = null;
  }
  function wh(t) {
    var e = t.type,
      n = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break t;
        case "img":
          n.src ? (a.src = n.src) : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (l) {
      Ot(t, t.return, l);
    }
  }
  function ao(t, e, n) {
    try {
      var a = t.stateNode;
      yv(a, t.type, n, e), (a[Rt] = e);
    } catch (l) {
      Ot(t, t.return, l);
    }
  }
  function Eh(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && ta(t.type)) ||
      t.tag === 4
    );
  }
  function io(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Eh(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && ta(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function lo(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
              ? n.ownerDocument.body
              : n
            ).insertBefore(t, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = Ws));
    else if (
      a !== 4 &&
      (a === 27 && ta(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (lo(t, e, n), t = t.sibling; t !== null; )
        lo(t, e, n), (t = t.sibling);
  }
  function Ys(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (
      a !== 4 &&
      (a === 27 && ta(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (Ys(t, e, n), t = t.sibling; t !== null; )
        Ys(t, e, n), (t = t.sibling);
  }
  function Oh(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var a = t.type, l = e.attributes; l.length; )
        e.removeAttributeNode(l[0]);
      re(e, a, n), (e[Yt] = t), (e[Rt] = n);
    } catch (u) {
      Ot(t, t.return, u);
    }
  }
  var _n = !1,
    Qt = !1,
    so = !1,
    _h = typeof WeakSet == "function" ? WeakSet : Set,
    ee = null;
  function Fy(t, e) {
    if (((t = t.containerInfo), (Co = lr), (t = Lf(t)), iu(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var l = a.anchorOffset,
              u = a.focusNode;
            a = a.focusOffset;
            try {
              n.nodeType, u.nodeType;
            } catch {
              n = null;
              break t;
            }
            var f = 0,
              h = -1,
              y = -1,
              E = 0,
              N = 0,
              q = t,
              _ = null;
            e: for (;;) {
              for (
                var R;
                q !== n || (l !== 0 && q.nodeType !== 3) || (h = f + l),
                  q !== u || (a !== 0 && q.nodeType !== 3) || (y = f + a),
                  q.nodeType === 3 && (f += q.nodeValue.length),
                  (R = q.firstChild) !== null;

              )
                (_ = q), (q = R);
              for (;;) {
                if (q === t) break e;
                if (
                  (_ === n && ++E === l && (h = f),
                  _ === u && ++N === a && (y = f),
                  (R = q.nextSibling) !== null)
                )
                  break;
                (q = _), (_ = q.parentNode);
              }
              q = R;
            }
            n = h === -1 || y === -1 ? null : { start: h, end: y };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Do = { focusedElem: t, selectionRange: n }, lr = !1, ee = e;
      ee !== null;

    )
      if (
        ((e = ee), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = e), (ee = t);
      else
        for (; ee !== null; ) {
          switch (((e = ee), (u = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                (t = void 0),
                  (n = e),
                  (l = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = n.stateNode);
                try {
                  var P = Ma(n.type, l, n.elementType === n.type);
                  (t = a.getSnapshotBeforeUpdate(P, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = t);
                } catch (I) {
                  Ot(n, n.return, I);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  jo(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      jo(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(o(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (ee = t);
            break;
          }
          ee = e.return;
        }
  }
  function Rh(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Kn(t, n), a & 4 && yl(5, n);
        break;
      case 1:
        if ((Kn(t, n), a & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (f) {
              Ot(n, n.return, f);
            }
          else {
            var l = Ma(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(l, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              Ot(n, n.return, f);
            }
          }
        a & 64 && Ah(n), a & 512 && vl(n, n.return);
        break;
      case 3:
        if ((Kn(t, n), a & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            od(t, e);
          } catch (f) {
            Ot(n, n.return, f);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Oh(n);
      case 26:
      case 5:
        Kn(t, n), e === null && a & 4 && wh(n), a & 512 && vl(n, n.return);
        break;
      case 12:
        Kn(t, n);
        break;
      case 13:
        Kn(t, n),
          a & 4 && Ch(t, n),
          a & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = lv.bind(null, n)), Tv(t, n))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || _n), !a)) {
          (e = (e !== null && e.memoizedState !== null) || Qt), (l = _n);
          var u = Qt;
          (_n = a),
            (Qt = e) && !u ? $n(t, n, (n.subtreeFlags & 8772) !== 0) : Kn(t, n),
            (_n = l),
            (Qt = u);
        }
        break;
      case 30:
        break;
      default:
        Kn(t, n);
    }
  }
  function Mh(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), Mh(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Br(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var zt = null,
    Se = !1;
  function Rn(t, e, n) {
    for (n = n.child; n !== null; ) Nh(t, e, n), (n = n.sibling);
  }
  function Nh(t, e, n) {
    if (me && typeof me.onCommitFiberUnmount == "function")
      try {
        me.onCommitFiberUnmount(We, n);
      } catch {}
    switch (n.tag) {
      case 26:
        Qt || nn(n, e),
          Rn(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        Qt || nn(n, e);
        var a = zt,
          l = Se;
        ta(n.type) && ((zt = n.stateNode), (Se = !1)),
          Rn(t, e, n),
          Ol(n.stateNode),
          (zt = a),
          (Se = l);
        break;
      case 5:
        Qt || nn(n, e);
      case 6:
        if (
          ((a = zt),
          (l = Se),
          (zt = null),
          Rn(t, e, n),
          (zt = a),
          (Se = l),
          zt !== null)
        )
          if (Se)
            try {
              (zt.nodeType === 9
                ? zt.body
                : zt.nodeName === "HTML"
                ? zt.ownerDocument.body
                : zt
              ).removeChild(n.stateNode);
            } catch (u) {
              Ot(n, e, u);
            }
          else
            try {
              zt.removeChild(n.stateNode);
            } catch (u) {
              Ot(n, e, u);
            }
        break;
      case 18:
        zt !== null &&
          (Se
            ? ((t = zt),
              pm(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                n.stateNode
              ),
              ql(t))
            : pm(zt, n.stateNode));
        break;
      case 4:
        (a = zt),
          (l = Se),
          (zt = n.stateNode.containerInfo),
          (Se = !0),
          Rn(t, e, n),
          (zt = a),
          (Se = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Qt || Zn(2, n, e), Qt || Zn(4, n, e), Rn(t, e, n);
        break;
      case 1:
        Qt ||
          (nn(n, e),
          (a = n.stateNode),
          typeof a.componentWillUnmount == "function" && Th(n, e, a)),
          Rn(t, e, n);
        break;
      case 21:
        Rn(t, e, n);
        break;
      case 22:
        (Qt = (a = Qt) || n.memoizedState !== null), Rn(t, e, n), (Qt = a);
        break;
      default:
        Rn(t, e, n);
    }
  }
  function Ch(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        ql(t);
      } catch (n) {
        Ot(e, e.return, n);
      }
  }
  function Iy(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new _h()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new _h()),
          e
        );
      default:
        throw Error(o(435, t.tag));
    }
  }
  function ro(t, e) {
    var n = Iy(t);
    e.forEach(function (a) {
      var l = sv.bind(null, t, a);
      n.has(a) || (n.add(a), a.then(l, l));
    });
  }
  function Oe(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var l = n[a],
          u = t,
          f = e,
          h = f;
        t: for (; h !== null; ) {
          switch (h.tag) {
            case 27:
              if (ta(h.type)) {
                (zt = h.stateNode), (Se = !1);
                break t;
              }
              break;
            case 5:
              (zt = h.stateNode), (Se = !1);
              break t;
            case 3:
            case 4:
              (zt = h.stateNode.containerInfo), (Se = !0);
              break t;
          }
          h = h.return;
        }
        if (zt === null) throw Error(o(160));
        Nh(u, f, l),
          (zt = null),
          (Se = !1),
          (u = l.alternate),
          u !== null && (u.return = null),
          (l.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) Dh(e, t), (e = e.sibling);
  }
  var Je = null;
  function Dh(t, e) {
    var n = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Oe(e, t),
          _e(t),
          a & 4 && (Zn(3, t, t.return), yl(3, t), Zn(5, t, t.return));
        break;
      case 1:
        Oe(e, t),
          _e(t),
          a & 512 && (Qt || n === null || nn(n, n.return)),
          a & 64 &&
            _n &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? a : n.concat(a)))));
        break;
      case 26:
        var l = Je;
        if (
          (Oe(e, t),
          _e(t),
          a & 512 && (Qt || n === null || nn(n, n.return)),
          a & 4)
        ) {
          var u = n !== null ? n.memoizedState : null;
          if (((a = t.memoizedState), n === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  (a = t.type),
                    (n = t.memoizedProps),
                    (l = l.ownerDocument || l);
                  e: switch (a) {
                    case "title":
                      (u = l.getElementsByTagName("title")[0]),
                        (!u ||
                          u[Yi] ||
                          u[Yt] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = l.createElement(a)),
                          l.head.insertBefore(
                            u,
                            l.querySelector("head > title")
                          )),
                        re(u, a, n),
                        (u[Yt] = t),
                        Pt(u),
                        (a = u);
                      break t;
                    case "link":
                      var f = Om("link", "href", l).get(a + (n.href || ""));
                      if (f) {
                        for (var h = 0; h < f.length; h++)
                          if (
                            ((u = f[h]),
                            u.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              u.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              u.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              u.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            f.splice(h, 1);
                            break e;
                          }
                      }
                      (u = l.createElement(a)),
                        re(u, a, n),
                        l.head.appendChild(u);
                      break;
                    case "meta":
                      if (
                        (f = Om("meta", "content", l).get(
                          a + (n.content || "")
                        ))
                      ) {
                        for (h = 0; h < f.length; h++)
                          if (
                            ((u = f[h]),
                            u.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              u.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              u.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              u.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            f.splice(h, 1);
                            break e;
                          }
                      }
                      (u = l.createElement(a)),
                        re(u, a, n),
                        l.head.appendChild(u);
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  (u[Yt] = t), Pt(u), (a = u);
                }
                t.stateNode = a;
              } else _m(l, t.type, t.stateNode);
            else t.stateNode = Em(l, a, t.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : u.count--,
                a === null
                  ? _m(l, t.type, t.stateNode)
                  : Em(l, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                ao(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        Oe(e, t),
          _e(t),
          a & 512 && (Qt || n === null || nn(n, n.return)),
          n !== null && a & 4 && ao(t, t.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (
          (Oe(e, t),
          _e(t),
          a & 512 && (Qt || n === null || nn(n, n.return)),
          t.flags & 32)
        ) {
          l = t.stateNode;
          try {
            Wa(l, "");
          } catch (R) {
            Ot(t, t.return, R);
          }
        }
        a & 4 &&
          t.stateNode != null &&
          ((l = t.memoizedProps), ao(t, l, n !== null ? n.memoizedProps : l)),
          a & 1024 && (so = !0);
        break;
      case 6:
        if ((Oe(e, t), _e(t), a & 4)) {
          if (t.stateNode === null) throw Error(o(162));
          (a = t.memoizedProps), (n = t.stateNode);
          try {
            n.nodeValue = a;
          } catch (R) {
            Ot(t, t.return, R);
          }
        }
        break;
      case 3:
        if (
          ((nr = null),
          (l = Je),
          (Je = tr(e.containerInfo)),
          Oe(e, t),
          (Je = l),
          _e(t),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            ql(e.containerInfo);
          } catch (R) {
            Ot(t, t.return, R);
          }
        so && ((so = !1), zh(t));
        break;
      case 4:
        (a = Je),
          (Je = tr(t.stateNode.containerInfo)),
          Oe(e, t),
          _e(t),
          (Je = a);
        break;
      case 12:
        Oe(e, t), _e(t);
        break;
      case 13:
        Oe(e, t),
          _e(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (mo = ue()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), ro(t, a)));
        break;
      case 22:
        l = t.memoizedState !== null;
        var y = n !== null && n.memoizedState !== null,
          E = _n,
          N = Qt;
        if (
          ((_n = E || l),
          (Qt = N || y),
          Oe(e, t),
          (Qt = N),
          (_n = E),
          _e(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = l ? e._visibility & -2 : e._visibility | 1,
              l && (n === null || y || _n || Qt || Na(t)),
              n = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                y = n = e;
                try {
                  if (((u = y.stateNode), l))
                    (f = u.style),
                      typeof f.setProperty == "function"
                        ? f.setProperty("display", "none", "important")
                        : (f.display = "none");
                  else {
                    h = y.stateNode;
                    var q = y.memoizedProps.style,
                      _ =
                        q != null && q.hasOwnProperty("display")
                          ? q.display
                          : null;
                    h.style.display =
                      _ == null || typeof _ == "boolean" ? "" : ("" + _).trim();
                  }
                } catch (R) {
                  Ot(y, y.return, R);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                y = e;
                try {
                  y.stateNode.nodeValue = l ? "" : y.memoizedProps;
                } catch (R) {
                  Ot(y, y.return, R);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), (e = e.return);
            }
            n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((n = a.retryQueue),
            n !== null && ((a.retryQueue = null), ro(t, n))));
        break;
      case 19:
        Oe(e, t),
          _e(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), ro(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Oe(e, t), _e(t);
    }
  }
  function _e(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, a = t.return; a !== null; ) {
          if (Eh(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var l = n.stateNode,
              u = io(t);
            Ys(t, u, l);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (Wa(f, ""), (n.flags &= -33));
            var h = io(t);
            Ys(t, h, f);
            break;
          case 3:
          case 4:
            var y = n.stateNode.containerInfo,
              E = io(t);
            lo(t, E, y);
            break;
          default:
            throw Error(o(161));
        }
      } catch (N) {
        Ot(t, t.return, N);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function zh(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        zh(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function Kn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) Rh(t, e.alternate, e), (e = e.sibling);
  }
  function Na(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Zn(4, e, e.return), Na(e);
          break;
        case 1:
          nn(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && Th(e, e.return, n),
            Na(e);
          break;
        case 27:
          Ol(e.stateNode);
        case 26:
        case 5:
          nn(e, e.return), Na(e);
          break;
        case 22:
          e.memoizedState === null && Na(e);
          break;
        case 30:
          Na(e);
          break;
        default:
          Na(e);
      }
      t = t.sibling;
    }
  }
  function $n(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        l = t,
        u = e,
        f = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          $n(l, u, n), yl(4, u);
          break;
        case 1:
          if (
            ($n(l, u, n),
            (a = u),
            (l = a.stateNode),
            typeof l.componentDidMount == "function")
          )
            try {
              l.componentDidMount();
            } catch (E) {
              Ot(a, a.return, E);
            }
          if (((a = u), (l = a.updateQueue), l !== null)) {
            var h = a.stateNode;
            try {
              var y = l.shared.hiddenCallbacks;
              if (y !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < y.length; l++)
                  ud(y[l], h);
            } catch (E) {
              Ot(a, a.return, E);
            }
          }
          n && f & 64 && Ah(u), vl(u, u.return);
          break;
        case 27:
          Oh(u);
        case 26:
        case 5:
          $n(l, u, n), n && a === null && f & 4 && wh(u), vl(u, u.return);
          break;
        case 12:
          $n(l, u, n);
          break;
        case 13:
          $n(l, u, n), n && f & 4 && Ch(l, u);
          break;
        case 22:
          u.memoizedState === null && $n(l, u, n), vl(u, u.return);
          break;
        case 30:
          break;
        default:
          $n(l, u, n);
      }
      e = e.sibling;
    }
  }
  function uo(t, e) {
    var n = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && nl(n));
  }
  function oo(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && nl(t));
  }
  function an(t, e, n, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) qh(t, e, n, a), (e = e.sibling);
  }
  function qh(t, e, n, a) {
    var l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        an(t, e, n, a), l & 2048 && yl(9, e);
        break;
      case 1:
        an(t, e, n, a);
        break;
      case 3:
        an(t, e, n, a),
          l & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && nl(t)));
        break;
      case 12:
        if (l & 2048) {
          an(t, e, n, a), (t = e.stateNode);
          try {
            var u = e.memoizedProps,
              f = u.id,
              h = u.onPostCommit;
            typeof h == "function" &&
              h(
                f,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (y) {
            Ot(e, e.return, y);
          }
        } else an(t, e, n, a);
        break;
      case 13:
        an(t, e, n, a);
        break;
      case 23:
        break;
      case 22:
        (u = e.stateNode),
          (f = e.alternate),
          e.memoizedState !== null
            ? u._visibility & 2
              ? an(t, e, n, a)
              : pl(t, e)
            : u._visibility & 2
            ? an(t, e, n, a)
            : ((u._visibility |= 2),
              vi(t, e, n, a, (e.subtreeFlags & 10256) !== 0)),
          l & 2048 && uo(f, e);
        break;
      case 24:
        an(t, e, n, a), l & 2048 && oo(e.alternate, e);
        break;
      default:
        an(t, e, n, a);
    }
  }
  function vi(t, e, n, a, l) {
    for (l = l && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var u = t,
        f = e,
        h = n,
        y = a,
        E = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          vi(u, f, h, y, l), yl(8, f);
          break;
        case 23:
          break;
        case 22:
          var N = f.stateNode;
          f.memoizedState !== null
            ? N._visibility & 2
              ? vi(u, f, h, y, l)
              : pl(u, f)
            : ((N._visibility |= 2), vi(u, f, h, y, l)),
            l && E & 2048 && uo(f.alternate, f);
          break;
        case 24:
          vi(u, f, h, y, l), l && E & 2048 && oo(f.alternate, f);
          break;
        default:
          vi(u, f, h, y, l);
      }
      e = e.sibling;
    }
  }
  function pl(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          a = e,
          l = a.flags;
        switch (a.tag) {
          case 22:
            pl(n, a), l & 2048 && uo(a.alternate, a);
            break;
          case 24:
            pl(n, a), l & 2048 && oo(a.alternate, a);
            break;
          default:
            pl(n, a);
        }
        e = e.sibling;
      }
  }
  var bl = 8192;
  function pi(t) {
    if (t.subtreeFlags & bl)
      for (t = t.child; t !== null; ) jh(t), (t = t.sibling);
  }
  function jh(t) {
    switch (t.tag) {
      case 26:
        pi(t),
          t.flags & bl &&
            t.memoizedState !== null &&
            kv(Je, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        pi(t);
        break;
      case 3:
      case 4:
        var e = Je;
        (Je = tr(t.stateNode.containerInfo)), pi(t), (Je = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = bl), (bl = 16777216), pi(t), (bl = e))
            : pi(t));
        break;
      default:
        pi(t);
    }
  }
  function kh(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function Sl(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          (ee = a), Lh(a, t);
        }
      kh(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Uh(t), (t = t.sibling);
  }
  function Uh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Sl(t), t.flags & 2048 && Zn(9, t, t.return);
        break;
      case 3:
        Sl(t);
        break;
      case 12:
        Sl(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Vs(t))
          : Sl(t);
        break;
      default:
        Sl(t);
    }
  }
  function Vs(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          (ee = a), Lh(a, t);
        }
      kh(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          Zn(8, e, e.return), Vs(e);
          break;
        case 22:
          (n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Vs(e));
          break;
        default:
          Vs(e);
      }
      t = t.sibling;
    }
  }
  function Lh(t, e) {
    for (; ee !== null; ) {
      var n = ee;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Zn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          nl(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) (a.return = n), (ee = a);
      else
        t: for (n = t; ee !== null; ) {
          a = ee;
          var l = a.sibling,
            u = a.return;
          if ((Mh(a), a === n)) {
            ee = null;
            break t;
          }
          if (l !== null) {
            (l.return = u), (ee = l);
            break t;
          }
          ee = u;
        }
    }
  }
  var Wy = {
      getCacheForType: function (t) {
        var e = oe(Ft),
          n = e.data.get(t);
        return n === void 0 && ((n = t()), e.data.set(t, n)), n;
      },
    },
    Py = typeof WeakMap == "function" ? WeakMap : Map,
    xt = 0,
    Mt = null,
    ft = null,
    vt = 0,
    At = 0,
    Re = null,
    Jn = !1,
    bi = !1,
    co = !1,
    Mn = 0,
    Lt = 0,
    Fn = 0,
    Ca = 0,
    fo = 0,
    Ve = 0,
    Si = 0,
    xl = null,
    xe = null,
    ho = !1,
    mo = 0,
    Qs = 1 / 0,
    Gs = null,
    In = null,
    se = 0,
    Wn = null,
    xi = null,
    Ai = 0,
    go = 0,
    yo = null,
    Bh = null,
    Al = 0,
    vo = null;
  function Me() {
    if ((xt & 2) !== 0 && vt !== 0) return vt & -vt;
    if (T.T !== null) {
      var t = oi;
      return t !== 0 ? t : wo();
    }
    return ga();
  }
  function Hh() {
    Ve === 0 && (Ve = (vt & 536870912) === 0 || St ? Ke() : 536870912);
    var t = Ye.current;
    return t !== null && (t.flags |= 32), Ve;
  }
  function Ne(t, e, n) {
    ((t === Mt && (At === 2 || At === 9)) || t.cancelPendingCommit !== null) &&
      (Ti(t, 0), Pn(t, vt, Ve, !1)),
      Un(t, n),
      ((xt & 2) === 0 || t !== Mt) &&
        (t === Mt &&
          ((xt & 2) === 0 && (Ca |= n), Lt === 4 && Pn(t, vt, Ve, !1)),
        ln(t));
  }
  function Yh(t, e, n) {
    if ((xt & 6) !== 0) throw Error(o(327));
    var a = (!n && (e & 124) === 0 && (e & t.expiredLanes) === 0) || ma(t, e),
      l = a ? nv(t, e) : So(t, e, !0),
      u = a;
    do {
      if (l === 0) {
        bi && !a && Pn(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), u && !tv(n))) {
          (l = So(t, e, !1)), (u = !1);
          continue;
        }
        if (l === 2) {
          if (((u = e), t.errorRecoveryDisabledLanes & u)) var f = 0;
          else
            (f = t.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0);
          if (f !== 0) {
            e = f;
            t: {
              var h = t;
              l = xl;
              var y = h.current.memoizedState.isDehydrated;
              if ((y && (Ti(h, f).flags |= 256), (f = So(h, f, !1)), f !== 2)) {
                if (co && !y) {
                  (h.errorRecoveryDisabledLanes |= u), (Ca |= u), (l = 4);
                  break t;
                }
                (u = xe),
                  (xe = l),
                  u !== null && (xe === null ? (xe = u) : xe.push.apply(xe, u));
              }
              l = f;
            }
            if (((u = !1), l !== 2)) continue;
          }
        }
        if (l === 1) {
          Ti(t, 0), Pn(t, e, 0, !0);
          break;
        }
        t: {
          switch (((a = t), (u = l), u)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Pn(a, e, Ve, !Jn);
              break t;
            case 2:
              xe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((e & 62914560) === e && ((l = mo + 300 - ue()), 10 < l)) {
            if ((Pn(a, e, Ve, !Jn), ha(a, 0, !0) !== 0)) break t;
            a.timeoutHandle = ym(
              Vh.bind(null, a, n, xe, Gs, ho, e, Ve, Ca, Si, Jn, u, 2, -0, 0),
              l
            );
            break t;
          }
          Vh(a, n, xe, Gs, ho, e, Ve, Ca, Si, Jn, u, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    ln(t);
  }
  function Vh(t, e, n, a, l, u, f, h, y, E, N, q, _, R) {
    if (
      ((t.timeoutHandle = -1),
      (q = e.subtreeFlags),
      (q & 8192 || (q & 16785408) === 16785408) &&
        ((Ml = { stylesheets: null, count: 0, unsuspend: jv }),
        jh(e),
        (q = Uv()),
        q !== null))
    ) {
      (t.cancelPendingCommit = q(
        Jh.bind(null, t, e, u, n, a, l, f, h, y, N, 1, _, R)
      )),
        Pn(t, u, f, !E);
      return;
    }
    Jh(t, e, u, n, a, l, f, h, y);
  }
  function tv(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var a = 0; a < n.length; a++) {
          var l = n[a],
            u = l.getSnapshot;
          l = l.value;
          try {
            if (!we(u(), l)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        (n.return = e), (e = n);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function Pn(t, e, n, a) {
    (e &= ~fo),
      (e &= ~Ca),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes);
    for (var l = e; 0 < l; ) {
      var u = 31 - ae(l),
        f = 1 << u;
      (a[u] = -1), (l &= ~f);
    }
    n !== 0 && et(t, n, e);
  }
  function Xs() {
    return (xt & 6) === 0 ? (Tl(0), !1) : !0;
  }
  function po() {
    if (ft !== null) {
      if (At === 0) var t = ft.return;
      else (t = ft), (xn = Ea = null), qu(t), (gi = null), (hl = 0), (t = ft);
      for (; t !== null; ) xh(t.alternate, t), (t = t.return);
      ft = null;
    }
  }
  function Ti(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && ((t.timeoutHandle = -1), pv(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      po(),
      (Mt = t),
      (ft = n = pn(t.current, null)),
      (vt = e),
      (At = 0),
      (Re = null),
      (Jn = !1),
      (bi = ma(t, e)),
      (co = !1),
      (Si = Ve = fo = Ca = Fn = Lt = 0),
      (xe = xl = null),
      (ho = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var l = 31 - ae(a),
          u = 1 << l;
        (e |= t[l]), (a &= ~u);
      }
    return (Mn = e), hs(), n;
  }
  function Qh(t, e) {
    (rt = null),
      (T.H = Ds),
      e === il || e === As
        ? ((e = sd()), (At = 3))
        : e === ad
        ? ((e = sd()), (At = 4))
        : (At =
            e === rh
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (Re = e),
      ft === null && ((Lt = 1), Us(t, Ue(e, t.current)));
  }
  function Gh() {
    var t = T.H;
    return (T.H = Ds), t === null ? Ds : t;
  }
  function Xh() {
    var t = T.A;
    return (T.A = Wy), t;
  }
  function bo() {
    (Lt = 4),
      Jn || ((vt & 4194048) !== vt && Ye.current !== null) || (bi = !0),
      ((Fn & 134217727) === 0 && (Ca & 134217727) === 0) ||
        Mt === null ||
        Pn(Mt, vt, Ve, !1);
  }
  function So(t, e, n) {
    var a = xt;
    xt |= 2;
    var l = Gh(),
      u = Xh();
    (Mt !== t || vt !== e) && ((Gs = null), Ti(t, e)), (e = !1);
    var f = Lt;
    t: do
      try {
        if (At !== 0 && ft !== null) {
          var h = ft,
            y = Re;
          switch (At) {
            case 8:
              po(), (f = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ye.current === null && (e = !0);
              var E = At;
              if (((At = 0), (Re = null), wi(t, h, y, E), n && bi)) {
                f = 0;
                break t;
              }
              break;
            default:
              (E = At), (At = 0), (Re = null), wi(t, h, y, E);
          }
        }
        ev(), (f = Lt);
        break;
      } catch (N) {
        Qh(t, N);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (xn = Ea = null),
      (xt = a),
      (T.H = l),
      (T.A = u),
      ft === null && ((Mt = null), (vt = 0), hs()),
      f
    );
  }
  function ev() {
    for (; ft !== null; ) Zh(ft);
  }
  function nv(t, e) {
    var n = xt;
    xt |= 2;
    var a = Gh(),
      l = Xh();
    Mt !== t || vt !== e
      ? ((Gs = null), (Qs = ue() + 500), Ti(t, e))
      : (bi = ma(t, e));
    t: do
      try {
        if (At !== 0 && ft !== null) {
          e = ft;
          var u = Re;
          e: switch (At) {
            case 1:
              (At = 0), (Re = null), wi(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (id(u)) {
                (At = 0), (Re = null), Kh(e);
                break;
              }
              (e = function () {
                (At !== 2 && At !== 9) || Mt !== t || (At = 7), ln(t);
              }),
                u.then(e, e);
              break t;
            case 3:
              At = 7;
              break t;
            case 4:
              At = 5;
              break t;
            case 7:
              id(u)
                ? ((At = 0), (Re = null), Kh(e))
                : ((At = 0), (Re = null), wi(t, e, u, 7));
              break;
            case 5:
              var f = null;
              switch (ft.tag) {
                case 26:
                  f = ft.memoizedState;
                case 5:
                case 27:
                  var h = ft;
                  if (!f || Rm(f)) {
                    (At = 0), (Re = null);
                    var y = h.sibling;
                    if (y !== null) ft = y;
                    else {
                      var E = h.return;
                      E !== null ? ((ft = E), Zs(E)) : (ft = null);
                    }
                    break e;
                  }
              }
              (At = 0), (Re = null), wi(t, e, u, 5);
              break;
            case 6:
              (At = 0), (Re = null), wi(t, e, u, 6);
              break;
            case 8:
              po(), (Lt = 6);
              break t;
            default:
              throw Error(o(462));
          }
        }
        av();
        break;
      } catch (N) {
        Qh(t, N);
      }
    while (!0);
    return (
      (xn = Ea = null),
      (T.H = a),
      (T.A = l),
      (xt = n),
      ft !== null ? 0 : ((Mt = null), (vt = 0), hs(), Lt)
    );
  }
  function av() {
    for (; ft !== null && !kr(); ) Zh(ft);
  }
  function Zh(t) {
    var e = bh(t.alternate, t, Mn);
    (t.memoizedProps = t.pendingProps), e === null ? Zs(t) : (ft = e);
  }
  function Kh(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = hh(n, e, e.pendingProps, e.type, void 0, vt);
        break;
      case 11:
        e = hh(n, e, e.pendingProps, e.type.render, e.ref, vt);
        break;
      case 5:
        qu(e);
      default:
        xh(n, e), (e = ft = $f(e, Mn)), (e = bh(n, e, Mn));
    }
    (t.memoizedProps = t.pendingProps), e === null ? Zs(t) : (ft = e);
  }
  function wi(t, e, n, a) {
    (xn = Ea = null), qu(e), (gi = null), (hl = 0);
    var l = e.return;
    try {
      if (Zy(t, l, e, n, vt)) {
        (Lt = 1), Us(t, Ue(n, t.current)), (ft = null);
        return;
      }
    } catch (u) {
      if (l !== null) throw ((ft = l), u);
      (Lt = 1), Us(t, Ue(n, t.current)), (ft = null);
      return;
    }
    e.flags & 32768
      ? (St || a === 1
          ? (t = !0)
          : bi || (vt & 536870912) !== 0
          ? (t = !1)
          : ((Jn = t = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = Ye.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        $h(e, t))
      : Zs(e);
  }
  function Zs(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        $h(e, Jn);
        return;
      }
      t = e.return;
      var n = $y(e.alternate, e, Mn);
      if (n !== null) {
        ft = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        ft = e;
        return;
      }
      ft = e = t;
    } while (e !== null);
    Lt === 0 && (Lt = 5);
  }
  function $h(t, e) {
    do {
      var n = Jy(t.alternate, t);
      if (n !== null) {
        (n.flags &= 32767), (ft = n);
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        ft = t;
        return;
      }
      ft = t = n;
    } while (t !== null);
    (Lt = 6), (ft = null);
  }
  function Jh(t, e, n, a, l, u, f, h, y) {
    t.cancelPendingCommit = null;
    do Ks();
    while (se !== 0);
    if ((xt & 6) !== 0) throw Error(o(327));
    if (e !== null) {
      if (e === t.current) throw Error(o(177));
      if (
        ((u = e.lanes | e.childLanes),
        (u |= ou),
        es(t, n, u, f, h, y),
        t === Mt && ((ft = Mt = null), (vt = 0)),
        (xi = e),
        (Wn = t),
        (Ai = n),
        (go = u),
        (yo = l),
        (Bh = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            rv(Va, function () {
              return tm(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = T.T), (T.T = null), (l = k.p), (k.p = 2), (f = xt), (xt |= 4);
        try {
          Fy(t, e, n);
        } finally {
          (xt = f), (k.p = l), (T.T = a);
        }
      }
      (se = 1), Fh(), Ih(), Wh();
    }
  }
  function Fh() {
    if (se === 1) {
      se = 0;
      var t = Wn,
        e = xi,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        (n = T.T), (T.T = null);
        var a = k.p;
        k.p = 2;
        var l = xt;
        xt |= 4;
        try {
          Dh(e, t);
          var u = Do,
            f = Lf(t.containerInfo),
            h = u.focusedElem,
            y = u.selectionRange;
          if (
            f !== h &&
            h &&
            h.ownerDocument &&
            Uf(h.ownerDocument.documentElement, h)
          ) {
            if (y !== null && iu(h)) {
              var E = y.start,
                N = y.end;
              if ((N === void 0 && (N = E), "selectionStart" in h))
                (h.selectionStart = E),
                  (h.selectionEnd = Math.min(N, h.value.length));
              else {
                var q = h.ownerDocument || document,
                  _ = (q && q.defaultView) || window;
                if (_.getSelection) {
                  var R = _.getSelection(),
                    P = h.textContent.length,
                    I = Math.min(y.start, P),
                    Et = y.end === void 0 ? I : Math.min(y.end, P);
                  !R.extend && I > Et && ((f = Et), (Et = I), (I = f));
                  var A = kf(h, I),
                    x = kf(h, Et);
                  if (
                    A &&
                    x &&
                    (R.rangeCount !== 1 ||
                      R.anchorNode !== A.node ||
                      R.anchorOffset !== A.offset ||
                      R.focusNode !== x.node ||
                      R.focusOffset !== x.offset)
                  ) {
                    var w = q.createRange();
                    w.setStart(A.node, A.offset),
                      R.removeAllRanges(),
                      I > Et
                        ? (R.addRange(w), R.extend(x.node, x.offset))
                        : (w.setEnd(x.node, x.offset), R.addRange(w));
                  }
                }
              }
            }
            for (q = [], R = h; (R = R.parentNode); )
              R.nodeType === 1 &&
                q.push({ element: R, left: R.scrollLeft, top: R.scrollTop });
            for (
              typeof h.focus == "function" && h.focus(), h = 0;
              h < q.length;
              h++
            ) {
              var D = q[h];
              (D.element.scrollLeft = D.left), (D.element.scrollTop = D.top);
            }
          }
          (lr = !!Co), (Do = Co = null);
        } finally {
          (xt = l), (k.p = a), (T.T = n);
        }
      }
      (t.current = e), (se = 2);
    }
  }
  function Ih() {
    if (se === 2) {
      se = 0;
      var t = Wn,
        e = xi,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        (n = T.T), (T.T = null);
        var a = k.p;
        k.p = 2;
        var l = xt;
        xt |= 4;
        try {
          Rh(t, e.alternate, e);
        } finally {
          (xt = l), (k.p = a), (T.T = n);
        }
      }
      se = 3;
    }
  }
  function Wh() {
    if (se === 4 || se === 3) {
      (se = 0), Fl();
      var t = Wn,
        e = xi,
        n = Ai,
        a = Bh;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (se = 5)
        : ((se = 0), (xi = Wn = null), Ph(t, t.pendingLanes));
      var l = t.pendingLanes;
      if (
        (l === 0 && (In = null),
        ie(n),
        (e = e.stateNode),
        me && typeof me.onCommitFiberRoot == "function")
      )
        try {
          me.onCommitFiberRoot(We, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (e = T.T), (l = k.p), (k.p = 2), (T.T = null);
        try {
          for (var u = t.onRecoverableError, f = 0; f < a.length; f++) {
            var h = a[f];
            u(h.value, { componentStack: h.stack });
          }
        } finally {
          (T.T = e), (k.p = l);
        }
      }
      (Ai & 3) !== 0 && Ks(),
        ln(t),
        (l = t.pendingLanes),
        (n & 4194090) !== 0 && (l & 42) !== 0
          ? t === vo
            ? Al++
            : ((Al = 0), (vo = t))
          : (Al = 0),
        Tl(0);
    }
  }
  function Ph(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), nl(e)));
  }
  function Ks(t) {
    return Fh(), Ih(), Wh(), tm();
  }
  function tm() {
    if (se !== 5) return !1;
    var t = Wn,
      e = go;
    go = 0;
    var n = ie(Ai),
      a = T.T,
      l = k.p;
    try {
      (k.p = 32 > n ? 32 : n), (T.T = null), (n = yo), (yo = null);
      var u = Wn,
        f = Ai;
      if (((se = 0), (xi = Wn = null), (Ai = 0), (xt & 6) !== 0))
        throw Error(o(331));
      var h = xt;
      if (
        ((xt |= 4),
        Uh(u.current),
        qh(u, u.current, f, n),
        (xt = h),
        Tl(0, !1),
        me && typeof me.onPostCommitFiberRoot == "function")
      )
        try {
          me.onPostCommitFiberRoot(We, u);
        } catch {}
      return !0;
    } finally {
      (k.p = l), (T.T = a), Ph(t, e);
    }
  }
  function em(t, e, n) {
    (e = Ue(n, e)),
      (e = $u(t.stateNode, e, 2)),
      (t = Vn(t, e, 2)),
      t !== null && (Un(t, 2), ln(t));
  }
  function Ot(t, e, n) {
    if (t.tag === 3) em(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          em(e, t, n);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (In === null || !In.has(a)))
          ) {
            (t = Ue(n, t)),
              (n = lh(2)),
              (a = Vn(e, n, 2)),
              a !== null && (sh(n, a, e, t), Un(a, 2), ln(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function xo(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new Py();
      var l = new Set();
      a.set(e, l);
    } else (l = a.get(e)), l === void 0 && ((l = new Set()), a.set(e, l));
    l.has(n) ||
      ((co = !0), l.add(n), (t = iv.bind(null, t, e, n)), e.then(t, t));
  }
  function iv(t, e, n) {
    var a = t.pingCache;
    a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      Mt === t &&
        (vt & n) === n &&
        (Lt === 4 || (Lt === 3 && (vt & 62914560) === vt && 300 > ue() - mo)
          ? (xt & 2) === 0 && Ti(t, 0)
          : (fo |= n),
        Si === vt && (Si = 0)),
      ln(t);
  }
  function nm(t, e) {
    e === 0 && (e = ts()), (t = li(t, e)), t !== null && (Un(t, e), ln(t));
  }
  function lv(t) {
    var e = t.memoizedState,
      n = 0;
    e !== null && (n = e.retryLane), nm(t, n);
  }
  function sv(t, e) {
    var n = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode,
          l = t.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    a !== null && a.delete(e), nm(t, n);
  }
  function rv(t, e) {
    return Li(t, e);
  }
  var $s = null,
    Ei = null,
    Ao = !1,
    Js = !1,
    To = !1,
    Da = 0;
  function ln(t) {
    t !== Ei &&
      t.next === null &&
      (Ei === null ? ($s = Ei = t) : (Ei = Ei.next = t)),
      (Js = !0),
      Ao || ((Ao = !0), ov());
  }
  function Tl(t, e) {
    if (!To && Js) {
      To = !0;
      do
        for (var n = !1, a = $s; a !== null; ) {
          if (t !== 0) {
            var l = a.pendingLanes;
            if (l === 0) var u = 0;
            else {
              var f = a.suspendedLanes,
                h = a.pingedLanes;
              (u = (1 << (31 - ae(42 | t) + 1)) - 1),
                (u &= l & ~(f & ~h)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
            }
            u !== 0 && ((n = !0), sm(a, u));
          } else
            (u = vt),
              (u = ha(
                a,
                a === Mt ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (u & 3) === 0 || ma(a, u) || ((n = !0), sm(a, u));
          a = a.next;
        }
      while (n);
      To = !1;
    }
  }
  function uv() {
    am();
  }
  function am() {
    Js = Ao = !1;
    var t = 0;
    Da !== 0 && (vv() && (t = Da), (Da = 0));
    for (var e = ue(), n = null, a = $s; a !== null; ) {
      var l = a.next,
        u = im(a, e);
      u === 0
        ? ((a.next = null),
          n === null ? ($s = l) : (n.next = l),
          l === null && (Ei = n))
        : ((n = a), (t !== 0 || (u & 3) !== 0) && (Js = !0)),
        (a = l);
    }
    Tl(t);
  }
  function im(t, e) {
    for (
      var n = t.suspendedLanes,
        a = t.pingedLanes,
        l = t.expirationTimes,
        u = t.pendingLanes & -62914561;
      0 < u;

    ) {
      var f = 31 - ae(u),
        h = 1 << f,
        y = l[f];
      y === -1
        ? ((h & n) === 0 || (h & a) !== 0) && (l[f] = Bi(h, e))
        : y <= e && (t.expiredLanes |= h),
        (u &= ~h);
    }
    if (
      ((e = Mt),
      (n = vt),
      (n = ha(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (a = t.callbackNode),
      n === 0 ||
        (t === e && (At === 2 || At === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && da(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || ma(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((a !== null && da(a), ie(n))) {
        case 2:
        case 8:
          n = Wl;
          break;
        case 32:
          n = Va;
          break;
        case 268435456:
          n = mn;
          break;
        default:
          n = Va;
      }
      return (
        (a = lm.bind(null, t)),
        (n = Li(n, a)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      a !== null && a !== null && da(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function lm(t, e) {
    if (se !== 0 && se !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var n = t.callbackNode;
    if (Ks() && t.callbackNode !== n) return null;
    var a = vt;
    return (
      (a = ha(
        t,
        t === Mt ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (Yh(t, a, e),
          im(t, ue()),
          t.callbackNode != null && t.callbackNode === n
            ? lm.bind(null, t)
            : null)
    );
  }
  function sm(t, e) {
    if (Ks()) return null;
    Yh(t, e, !0);
  }
  function ov() {
    bv(function () {
      (xt & 6) !== 0 ? Li(qe, uv) : am();
    });
  }
  function wo() {
    return Da === 0 && (Da = Ke()), Da;
  }
  function rm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : ss("" + t);
  }
  function um(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function cv(t, e, n, a, l) {
    if (e === "submit" && n && n.stateNode === l) {
      var u = rm((l[Rt] || null).action),
        f = a.submitter;
      f &&
        ((e = (e = f[Rt] || null)
          ? rm(e.formAction)
          : f.getAttribute("formAction")),
        e !== null && ((u = e), (f = null)));
      var h = new cs("action", "action", null, a, l);
      t.push({
        event: h,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Da !== 0) {
                  var y = f ? um(l, f) : new FormData(l);
                  Qu(
                    n,
                    { pending: !0, data: y, method: l.method, action: u },
                    null,
                    y
                  );
                }
              } else
                typeof u == "function" &&
                  (h.preventDefault(),
                  (y = f ? um(l, f) : new FormData(l)),
                  Qu(
                    n,
                    { pending: !0, data: y, method: l.method, action: u },
                    u,
                    y
                  ));
            },
            currentTarget: l,
          },
        ],
      });
    }
  }
  for (var Eo = 0; Eo < uu.length; Eo++) {
    var Oo = uu[Eo],
      fv = Oo.toLowerCase(),
      dv = Oo[0].toUpperCase() + Oo.slice(1);
    $e(fv, "on" + dv);
  }
  $e(Yf, "onAnimationEnd"),
    $e(Vf, "onAnimationIteration"),
    $e(Qf, "onAnimationStart"),
    $e("dblclick", "onDoubleClick"),
    $e("focusin", "onFocus"),
    $e("focusout", "onBlur"),
    $e(My, "onTransitionRun"),
    $e(Ny, "onTransitionStart"),
    $e(Cy, "onTransitionCancel"),
    $e(Gf, "onTransitionEnd"),
    Ja("onMouseEnter", ["mouseout", "mouseover"]),
    Ja("onMouseLeave", ["mouseout", "mouseover"]),
    Ja("onPointerEnter", ["pointerout", "pointerover"]),
    Ja("onPointerLeave", ["pointerout", "pointerover"]),
    ya(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    ya(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    ya("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ya(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    ya(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    ya(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var wl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    hv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(wl)
    );
  function om(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n],
        l = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var f = a.length - 1; 0 <= f; f--) {
            var h = a[f],
              y = h.instance,
              E = h.currentTarget;
            if (((h = h.listener), y !== u && l.isPropagationStopped()))
              break t;
            (u = h), (l.currentTarget = E);
            try {
              u(l);
            } catch (N) {
              ks(N);
            }
            (l.currentTarget = null), (u = y);
          }
        else
          for (f = 0; f < a.length; f++) {
            if (
              ((h = a[f]),
              (y = h.instance),
              (E = h.currentTarget),
              (h = h.listener),
              y !== u && l.isPropagationStopped())
            )
              break t;
            (u = h), (l.currentTarget = E);
            try {
              u(l);
            } catch (N) {
              ks(N);
            }
            (l.currentTarget = null), (u = y);
          }
      }
    }
  }
  function dt(t, e) {
    var n = e[Xa];
    n === void 0 && (n = e[Xa] = new Set());
    var a = t + "__bubble";
    n.has(a) || (cm(e, t, 2, !1), n.add(a));
  }
  function _o(t, e, n) {
    var a = 0;
    e && (a |= 4), cm(n, t, a, e);
  }
  var Fs = "_reactListening" + Math.random().toString(36).slice(2);
  function Ro(t) {
    if (!t[Fs]) {
      (t[Fs] = !0),
        nf.forEach(function (n) {
          n !== "selectionchange" && (hv.has(n) || _o(n, !1, t), _o(n, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Fs] || ((e[Fs] = !0), _o("selectionchange", !1, e));
    }
  }
  function cm(t, e, n, a) {
    switch (qm(e)) {
      case 2:
        var l = Hv;
        break;
      case 8:
        l = Yv;
        break;
      default:
        l = Vo;
    }
    (n = l.bind(null, e, n, t)),
      (l = void 0),
      !Jr ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (l = !0),
      a
        ? l !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: l })
          : t.addEventListener(e, n, !0)
        : l !== void 0
        ? t.addEventListener(e, n, { passive: l })
        : t.addEventListener(e, n, !1);
  }
  function Mo(t, e, n, a, l) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var h = a.stateNode.containerInfo;
          if (h === l) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var y = f.tag;
              if ((y === 3 || y === 4) && f.stateNode.containerInfo === l)
                return;
              f = f.return;
            }
          for (; h !== null; ) {
            if (((f = Za(h)), f === null)) return;
            if (((y = f.tag), y === 5 || y === 6 || y === 26 || y === 27)) {
              a = u = f;
              continue t;
            }
            h = h.parentNode;
          }
        }
        a = a.return;
      }
    vf(function () {
      var E = u,
        N = Kr(n),
        q = [];
      t: {
        var _ = Xf.get(t);
        if (_ !== void 0) {
          var R = cs,
            P = t;
          switch (t) {
            case "keypress":
              if (us(n) === 0) break t;
            case "keydown":
            case "keyup":
              R = ry;
              break;
            case "focusin":
              (P = "focus"), (R = Pr);
              break;
            case "focusout":
              (P = "blur"), (R = Pr);
              break;
            case "beforeblur":
            case "afterblur":
              R = Pr;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              R = Sf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              R = J0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              R = cy;
              break;
            case Yf:
            case Vf:
            case Qf:
              R = W0;
              break;
            case Gf:
              R = dy;
              break;
            case "scroll":
            case "scrollend":
              R = K0;
              break;
            case "wheel":
              R = my;
              break;
            case "copy":
            case "cut":
            case "paste":
              R = ty;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              R = Af;
              break;
            case "toggle":
            case "beforetoggle":
              R = yy;
          }
          var I = (e & 4) !== 0,
            Et = !I && (t === "scroll" || t === "scrollend"),
            A = I ? (_ !== null ? _ + "Capture" : null) : _;
          I = [];
          for (var x = E, w; x !== null; ) {
            var D = x;
            if (
              ((w = D.stateNode),
              (D = D.tag),
              (D !== 5 && D !== 26 && D !== 27) ||
                w === null ||
                A === null ||
                ((D = Qi(x, A)), D != null && I.push(El(x, D, w))),
              Et)
            )
              break;
            x = x.return;
          }
          0 < I.length &&
            ((_ = new R(_, P, null, n, N)), q.push({ event: _, listeners: I }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((_ = t === "mouseover" || t === "pointerover"),
            (R = t === "mouseout" || t === "pointerout"),
            _ &&
              n !== Zr &&
              (P = n.relatedTarget || n.fromElement) &&
              (Za(P) || P[Wt]))
          )
            break t;
          if (
            (R || _) &&
            ((_ =
              N.window === N
                ? N
                : (_ = N.ownerDocument)
                ? _.defaultView || _.parentWindow
                : window),
            R
              ? ((P = n.relatedTarget || n.toElement),
                (R = E),
                (P = P ? Za(P) : null),
                P !== null &&
                  ((Et = d(P)),
                  (I = P.tag),
                  P !== Et || (I !== 5 && I !== 27 && I !== 6)) &&
                  (P = null))
              : ((R = null), (P = E)),
            R !== P)
          ) {
            if (
              ((I = Sf),
              (D = "onMouseLeave"),
              (A = "onMouseEnter"),
              (x = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((I = Af),
                (D = "onPointerLeave"),
                (A = "onPointerEnter"),
                (x = "pointer")),
              (Et = R == null ? _ : Vi(R)),
              (w = P == null ? _ : Vi(P)),
              (_ = new I(D, x + "leave", R, n, N)),
              (_.target = Et),
              (_.relatedTarget = w),
              (D = null),
              Za(N) === E &&
                ((I = new I(A, x + "enter", P, n, N)),
                (I.target = w),
                (I.relatedTarget = Et),
                (D = I)),
              (Et = D),
              R && P)
            )
              e: {
                for (I = R, A = P, x = 0, w = I; w; w = Oi(w)) x++;
                for (w = 0, D = A; D; D = Oi(D)) w++;
                for (; 0 < x - w; ) (I = Oi(I)), x--;
                for (; 0 < w - x; ) (A = Oi(A)), w--;
                for (; x--; ) {
                  if (I === A || (A !== null && I === A.alternate)) break e;
                  (I = Oi(I)), (A = Oi(A));
                }
                I = null;
              }
            else I = null;
            R !== null && fm(q, _, R, I, !1),
              P !== null && Et !== null && fm(q, Et, P, I, !0);
          }
        }
        t: {
          if (
            ((_ = E ? Vi(E) : window),
            (R = _.nodeName && _.nodeName.toLowerCase()),
            R === "select" || (R === "input" && _.type === "file"))
          )
            var X = Nf;
          else if (Rf(_))
            if (Cf) X = Oy;
            else {
              X = wy;
              var ut = Ty;
            }
          else
            (R = _.nodeName),
              !R ||
              R.toLowerCase() !== "input" ||
              (_.type !== "checkbox" && _.type !== "radio")
                ? E && Xr(E.elementType) && (X = Nf)
                : (X = Ey);
          if (X && (X = X(t, E))) {
            Mf(q, X, n, N);
            break t;
          }
          ut && ut(t, _, E),
            t === "focusout" &&
              E &&
              _.type === "number" &&
              E.memoizedProps.value != null &&
              Gr(_, "number", _.value);
        }
        switch (((ut = E ? Vi(E) : window), t)) {
          case "focusin":
            (Rf(ut) || ut.contentEditable === "true") &&
              ((ni = ut), (lu = E), (Ii = null));
            break;
          case "focusout":
            Ii = lu = ni = null;
            break;
          case "mousedown":
            su = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (su = !1), Bf(q, n, N);
            break;
          case "selectionchange":
            if (Ry) break;
          case "keydown":
          case "keyup":
            Bf(q, n, N);
        }
        var F;
        if (eu)
          t: {
            switch (t) {
              case "compositionstart":
                var W = "onCompositionStart";
                break t;
              case "compositionend":
                W = "onCompositionEnd";
                break t;
              case "compositionupdate":
                W = "onCompositionUpdate";
                break t;
            }
            W = void 0;
          }
        else
          ei
            ? Of(t, n) && (W = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (W = "onCompositionStart");
        W &&
          (Tf &&
            n.locale !== "ko" &&
            (ei || W !== "onCompositionStart"
              ? W === "onCompositionEnd" && ei && (F = pf())
              : ((Ln = N),
                (Fr = "value" in Ln ? Ln.value : Ln.textContent),
                (ei = !0))),
          (ut = Is(E, W)),
          0 < ut.length &&
            ((W = new xf(W, t, null, n, N)),
            q.push({ event: W, listeners: ut }),
            F ? (W.data = F) : ((F = _f(n)), F !== null && (W.data = F)))),
          (F = py ? by(t, n) : Sy(t, n)) &&
            ((W = Is(E, "onBeforeInput")),
            0 < W.length &&
              ((ut = new xf("onBeforeInput", "beforeinput", null, n, N)),
              q.push({ event: ut, listeners: W }),
              (ut.data = F))),
          cv(q, t, E, n, N);
      }
      om(q, e);
    });
  }
  function El(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Is(t, e) {
    for (var n = e + "Capture", a = []; t !== null; ) {
      var l = t,
        u = l.stateNode;
      if (
        ((l = l.tag),
        (l !== 5 && l !== 26 && l !== 27) ||
          u === null ||
          ((l = Qi(t, n)),
          l != null && a.unshift(El(t, l, u)),
          (l = Qi(t, e)),
          l != null && a.push(El(t, l, u))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function Oi(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function fm(t, e, n, a, l) {
    for (var u = e._reactName, f = []; n !== null && n !== a; ) {
      var h = n,
        y = h.alternate,
        E = h.stateNode;
      if (((h = h.tag), y !== null && y === a)) break;
      (h !== 5 && h !== 26 && h !== 27) ||
        E === null ||
        ((y = E),
        l
          ? ((E = Qi(n, u)), E != null && f.unshift(El(n, E, y)))
          : l || ((E = Qi(n, u)), E != null && f.push(El(n, E, y)))),
        (n = n.return);
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var mv = /\r\n?/g,
    gv = /\u0000|\uFFFD/g;
  function dm(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        mv,
        `
`
      )
      .replace(gv, "");
  }
  function hm(t, e) {
    return (e = dm(e)), dm(t) === e;
  }
  function Ws() {}
  function wt(t, e, n, a, l, u) {
    switch (n) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || Wa(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            Wa(t, "" + a);
        break;
      case "className":
        as(t, "class", a);
        break;
      case "tabIndex":
        as(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        as(t, n, a);
        break;
      case "style":
        gf(t, a, u);
        break;
      case "data":
        if (e !== "object") {
          as(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        (a = ss("" + a)), t.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" &&
            (n === "formAction"
              ? (e !== "input" && wt(t, e, "name", l.name, l, null),
                wt(t, e, "formEncType", l.formEncType, l, null),
                wt(t, e, "formMethod", l.formMethod, l, null),
                wt(t, e, "formTarget", l.formTarget, l, null))
              : (wt(t, e, "encType", l.encType, l, null),
                wt(t, e, "method", l.method, l, null),
                wt(t, e, "target", l.target, l, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        (a = ss("" + a)), t.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (t.onclick = Ws);
        break;
      case "onScroll":
        a != null && dt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && dt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
          if (((n = a.__html), n != null)) {
            if (l.children != null) throw Error(o(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (n = ss("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(n, "" + a)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(n, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? t.setAttribute(n, a)
          : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(n, a)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(n)
          : t.setAttribute(n, a);
        break;
      case "popover":
        dt("beforetoggle", t), dt("toggle", t), ns(t, "popover", a);
        break;
      case "xlinkActuate":
        yn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        yn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        yn(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        yn(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        yn(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        yn(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        yn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        yn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        yn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        ns(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = X0.get(n) || n), ns(t, n, a));
    }
  }
  function No(t, e, n, a, l, u) {
    switch (n) {
      case "style":
        gf(t, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
          if (((n = a.__html), n != null)) {
            if (l.children != null) throw Error(o(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? Wa(t, a)
          : (typeof a == "number" || typeof a == "bigint") && Wa(t, "" + a);
        break;
      case "onScroll":
        a != null && dt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && dt("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Ws);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!af.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((l = n.endsWith("Capture")),
              (e = n.slice(2, l ? n.length - 7 : void 0)),
              (u = t[Rt] || null),
              (u = u != null ? u[n] : null),
              typeof u == "function" && t.removeEventListener(e, u, l),
              typeof a == "function")
            ) {
              typeof u != "function" &&
                u !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, a, l);
              break t;
            }
            n in t
              ? (t[n] = a)
              : a === !0
              ? t.setAttribute(n, "")
              : ns(t, n, a);
          }
    }
  }
  function re(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        dt("error", t), dt("load", t);
        var a = !1,
          l = !1,
          u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var f = n[u];
            if (f != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  l = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, e));
                default:
                  wt(t, e, u, f, n, null);
              }
          }
        l && wt(t, e, "srcSet", n.srcSet, n, null),
          a && wt(t, e, "src", n.src, n, null);
        return;
      case "input":
        dt("invalid", t);
        var h = (u = f = l = null),
          y = null,
          E = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var N = n[a];
            if (N != null)
              switch (a) {
                case "name":
                  l = N;
                  break;
                case "type":
                  f = N;
                  break;
                case "checked":
                  y = N;
                  break;
                case "defaultChecked":
                  E = N;
                  break;
                case "value":
                  u = N;
                  break;
                case "defaultValue":
                  h = N;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (N != null) throw Error(o(137, e));
                  break;
                default:
                  wt(t, e, a, N, n, null);
              }
          }
        ff(t, u, h, y, E, f, l, !1), is(t);
        return;
      case "select":
        dt("invalid", t), (a = f = u = null);
        for (l in n)
          if (n.hasOwnProperty(l) && ((h = n[l]), h != null))
            switch (l) {
              case "value":
                u = h;
                break;
              case "defaultValue":
                f = h;
                break;
              case "multiple":
                a = h;
              default:
                wt(t, e, l, h, n, null);
            }
        (e = u),
          (n = f),
          (t.multiple = !!a),
          e != null ? Ia(t, !!a, e, !1) : n != null && Ia(t, !!a, n, !0);
        return;
      case "textarea":
        dt("invalid", t), (u = l = a = null);
        for (f in n)
          if (n.hasOwnProperty(f) && ((h = n[f]), h != null))
            switch (f) {
              case "value":
                a = h;
                break;
              case "defaultValue":
                l = h;
                break;
              case "children":
                u = h;
                break;
              case "dangerouslySetInnerHTML":
                if (h != null) throw Error(o(91));
                break;
              default:
                wt(t, e, f, h, n, null);
            }
        hf(t, a, l, u), is(t);
        return;
      case "option":
        for (y in n)
          if (n.hasOwnProperty(y) && ((a = n[y]), a != null))
            switch (y) {
              case "selected":
                t.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                wt(t, e, y, a, n, null);
            }
        return;
      case "dialog":
        dt("beforetoggle", t), dt("toggle", t), dt("cancel", t), dt("close", t);
        break;
      case "iframe":
      case "object":
        dt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < wl.length; a++) dt(wl[a], t);
        break;
      case "image":
        dt("error", t), dt("load", t);
        break;
      case "details":
        dt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        dt("error", t), dt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (E in n)
          if (n.hasOwnProperty(E) && ((a = n[E]), a != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, e));
              default:
                wt(t, e, E, a, n, null);
            }
        return;
      default:
        if (Xr(e)) {
          for (N in n)
            n.hasOwnProperty(N) &&
              ((a = n[N]), a !== void 0 && No(t, e, N, a, n, void 0));
          return;
        }
    }
    for (h in n)
      n.hasOwnProperty(h) && ((a = n[h]), a != null && wt(t, e, h, a, n, null));
  }
  function yv(t, e, n, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var l = null,
          u = null,
          f = null,
          h = null,
          y = null,
          E = null,
          N = null;
        for (R in n) {
          var q = n[R];
          if (n.hasOwnProperty(R) && q != null)
            switch (R) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                y = q;
              default:
                a.hasOwnProperty(R) || wt(t, e, R, null, a, q);
            }
        }
        for (var _ in a) {
          var R = a[_];
          if (((q = n[_]), a.hasOwnProperty(_) && (R != null || q != null)))
            switch (_) {
              case "type":
                u = R;
                break;
              case "name":
                l = R;
                break;
              case "checked":
                E = R;
                break;
              case "defaultChecked":
                N = R;
                break;
              case "value":
                f = R;
                break;
              case "defaultValue":
                h = R;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null) throw Error(o(137, e));
                break;
              default:
                R !== q && wt(t, e, _, R, a, q);
            }
        }
        Qr(t, f, h, y, E, N, u, l);
        return;
      case "select":
        R = f = h = _ = null;
        for (u in n)
          if (((y = n[u]), n.hasOwnProperty(u) && y != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                R = y;
              default:
                a.hasOwnProperty(u) || wt(t, e, u, null, a, y);
            }
        for (l in a)
          if (
            ((u = a[l]),
            (y = n[l]),
            a.hasOwnProperty(l) && (u != null || y != null))
          )
            switch (l) {
              case "value":
                _ = u;
                break;
              case "defaultValue":
                h = u;
                break;
              case "multiple":
                f = u;
              default:
                u !== y && wt(t, e, l, u, a, y);
            }
        (e = h),
          (n = f),
          (a = R),
          _ != null
            ? Ia(t, !!n, _, !1)
            : !!a != !!n &&
              (e != null ? Ia(t, !!n, e, !0) : Ia(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        R = _ = null;
        for (h in n)
          if (
            ((l = n[h]),
            n.hasOwnProperty(h) && l != null && !a.hasOwnProperty(h))
          )
            switch (h) {
              case "value":
                break;
              case "children":
                break;
              default:
                wt(t, e, h, null, a, l);
            }
        for (f in a)
          if (
            ((l = a[f]),
            (u = n[f]),
            a.hasOwnProperty(f) && (l != null || u != null))
          )
            switch (f) {
              case "value":
                _ = l;
                break;
              case "defaultValue":
                R = l;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (l != null) throw Error(o(91));
                break;
              default:
                l !== u && wt(t, e, f, l, a, u);
            }
        df(t, _, R);
        return;
      case "option":
        for (var P in n)
          if (
            ((_ = n[P]),
            n.hasOwnProperty(P) && _ != null && !a.hasOwnProperty(P))
          )
            switch (P) {
              case "selected":
                t.selected = !1;
                break;
              default:
                wt(t, e, P, null, a, _);
            }
        for (y in a)
          if (
            ((_ = a[y]),
            (R = n[y]),
            a.hasOwnProperty(y) && _ !== R && (_ != null || R != null))
          )
            switch (y) {
              case "selected":
                t.selected =
                  _ && typeof _ != "function" && typeof _ != "symbol";
                break;
              default:
                wt(t, e, y, _, a, R);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var I in n)
          (_ = n[I]),
            n.hasOwnProperty(I) &&
              _ != null &&
              !a.hasOwnProperty(I) &&
              wt(t, e, I, null, a, _);
        for (E in a)
          if (
            ((_ = a[E]),
            (R = n[E]),
            a.hasOwnProperty(E) && _ !== R && (_ != null || R != null))
          )
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null) throw Error(o(137, e));
                break;
              default:
                wt(t, e, E, _, a, R);
            }
        return;
      default:
        if (Xr(e)) {
          for (var Et in n)
            (_ = n[Et]),
              n.hasOwnProperty(Et) &&
                _ !== void 0 &&
                !a.hasOwnProperty(Et) &&
                No(t, e, Et, void 0, a, _);
          for (N in a)
            (_ = a[N]),
              (R = n[N]),
              !a.hasOwnProperty(N) ||
                _ === R ||
                (_ === void 0 && R === void 0) ||
                No(t, e, N, _, a, R);
          return;
        }
    }
    for (var A in n)
      (_ = n[A]),
        n.hasOwnProperty(A) &&
          _ != null &&
          !a.hasOwnProperty(A) &&
          wt(t, e, A, null, a, _);
    for (q in a)
      (_ = a[q]),
        (R = n[q]),
        !a.hasOwnProperty(q) ||
          _ === R ||
          (_ == null && R == null) ||
          wt(t, e, q, _, a, R);
  }
  var Co = null,
    Do = null;
  function Ps(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function mm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function gm(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function zo(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var qo = null;
  function vv() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === qo
        ? !1
        : ((qo = t), !0)
      : ((qo = null), !1);
  }
  var ym = typeof setTimeout == "function" ? setTimeout : void 0,
    pv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    vm = typeof Promise == "function" ? Promise : void 0,
    bv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof vm < "u"
        ? function (t) {
            return vm.resolve(null).then(t).catch(Sv);
          }
        : ym;
  function Sv(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function ta(t) {
    return t === "head";
  }
  function pm(t, e) {
    var n = e,
      a = 0,
      l = 0;
    do {
      var u = n.nextSibling;
      if ((t.removeChild(n), u && u.nodeType === 8))
        if (((n = u.data), n === "/$")) {
          if (0 < a && 8 > a) {
            n = a;
            var f = t.ownerDocument;
            if ((n & 1 && Ol(f.documentElement), n & 2 && Ol(f.body), n & 4))
              for (n = f.head, Ol(n), f = n.firstChild; f; ) {
                var h = f.nextSibling,
                  y = f.nodeName;
                f[Yi] ||
                  y === "SCRIPT" ||
                  y === "STYLE" ||
                  (y === "LINK" && f.rel.toLowerCase() === "stylesheet") ||
                  n.removeChild(f),
                  (f = h);
              }
          }
          if (l === 0) {
            t.removeChild(u), ql(e);
            return;
          }
          l--;
        } else
          n === "$" || n === "$?" || n === "$!"
            ? l++
            : (a = n.charCodeAt(0) - 48);
      else a = 0;
      n = u;
    } while (n);
    ql(e);
  }
  function jo(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          jo(n), Br(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function xv(t, e, n, a) {
    for (; t.nodeType === 1; ) {
      var l = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[Yi])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((u = t.getAttribute("rel")),
                u === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== l.rel ||
                t.getAttribute("href") !==
                  (l.href == null || l.href === "" ? null : l.href) ||
                t.getAttribute("crossorigin") !==
                  (l.crossOrigin == null ? null : l.crossOrigin) ||
                t.getAttribute("title") !== (l.title == null ? null : l.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((u = t.getAttribute("src")),
                (u !== (l.src == null ? null : l.src) ||
                  t.getAttribute("type") !== (l.type == null ? null : l.type) ||
                  t.getAttribute("crossorigin") !==
                    (l.crossOrigin == null ? null : l.crossOrigin)) &&
                  u &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = l.name == null ? null : "" + l.name;
        if (l.type === "hidden" && t.getAttribute("name") === u) return t;
      } else return t;
      if (((t = Fe(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Av(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = Fe(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function ko(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function Tv(t, e) {
    var n = t.ownerDocument;
    if (t.data !== "$?" || n.readyState === "complete") e();
    else {
      var a = function () {
        e(), n.removeEventListener("DOMContentLoaded", a);
      };
      n.addEventListener("DOMContentLoaded", a), (t._reactRetry = a);
    }
  }
  function Fe(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var Uo = null;
  function bm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (e === 0) return t;
          e--;
        } else n === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Sm(t, e, n) {
    switch (((e = Ps(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(o(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(o(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(o(454));
        return t;
      default:
        throw Error(o(451));
    }
  }
  function Ol(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Br(t);
  }
  var Qe = new Map(),
    xm = new Set();
  function tr(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var Nn = k.d;
  k.d = { f: wv, r: Ev, D: Ov, C: _v, L: Rv, m: Mv, X: Cv, S: Nv, M: Dv };
  function wv() {
    var t = Nn.f(),
      e = Xs();
    return t || e;
  }
  function Ev(t) {
    var e = Ka(t);
    e !== null && e.tag === 5 && e.type === "form" ? Yd(e) : Nn.r(t);
  }
  var _i = typeof document > "u" ? null : document;
  function Am(t, e, n) {
    var a = _i;
    if (a && typeof e == "string" && e) {
      var l = ke(e);
      (l = 'link[rel="' + t + '"][href="' + l + '"]'),
        typeof n == "string" && (l += '[crossorigin="' + n + '"]'),
        xm.has(l) ||
          (xm.add(l),
          (t = { rel: t, crossOrigin: n, href: e }),
          a.querySelector(l) === null &&
            ((e = a.createElement("link")),
            re(e, "link", t),
            Pt(e),
            a.head.appendChild(e)));
    }
  }
  function Ov(t) {
    Nn.D(t), Am("dns-prefetch", t, null);
  }
  function _v(t, e) {
    Nn.C(t, e), Am("preconnect", t, e);
  }
  function Rv(t, e, n) {
    Nn.L(t, e, n);
    var a = _i;
    if (a && t && e) {
      var l = 'link[rel="preload"][as="' + ke(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((l += '[imagesrcset="' + ke(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (l += '[imagesizes="' + ke(n.imageSizes) + '"]'))
        : (l += '[href="' + ke(t) + '"]');
      var u = l;
      switch (e) {
        case "style":
          u = Ri(t);
          break;
        case "script":
          u = Mi(t);
      }
      Qe.has(u) ||
        ((t = O(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n
        )),
        Qe.set(u, t),
        a.querySelector(l) !== null ||
          (e === "style" && a.querySelector(_l(u))) ||
          (e === "script" && a.querySelector(Rl(u))) ||
          ((e = a.createElement("link")),
          re(e, "link", t),
          Pt(e),
          a.head.appendChild(e)));
    }
  }
  function Mv(t, e) {
    Nn.m(t, e);
    var n = _i;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        l =
          'link[rel="modulepreload"][as="' + ke(a) + '"][href="' + ke(t) + '"]',
        u = l;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Mi(t);
      }
      if (
        !Qe.has(u) &&
        ((t = O({ rel: "modulepreload", href: t }, e)),
        Qe.set(u, t),
        n.querySelector(l) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Rl(u))) return;
        }
        (a = n.createElement("link")),
          re(a, "link", t),
          Pt(a),
          n.head.appendChild(a);
      }
    }
  }
  function Nv(t, e, n) {
    Nn.S(t, e, n);
    var a = _i;
    if (a && t) {
      var l = $a(a).hoistableStyles,
        u = Ri(t);
      e = e || "default";
      var f = l.get(u);
      if (!f) {
        var h = { loading: 0, preload: null };
        if ((f = a.querySelector(_l(u)))) h.loading = 5;
        else {
          (t = O({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = Qe.get(u)) && Lo(t, n);
          var y = (f = a.createElement("link"));
          Pt(y),
            re(y, "link", t),
            (y._p = new Promise(function (E, N) {
              (y.onload = E), (y.onerror = N);
            })),
            y.addEventListener("load", function () {
              h.loading |= 1;
            }),
            y.addEventListener("error", function () {
              h.loading |= 2;
            }),
            (h.loading |= 4),
            er(f, e, a);
        }
        (f = { type: "stylesheet", instance: f, count: 1, state: h }),
          l.set(u, f);
      }
    }
  }
  function Cv(t, e) {
    Nn.X(t, e);
    var n = _i;
    if (n && t) {
      var a = $a(n).hoistableScripts,
        l = Mi(t),
        u = a.get(l);
      u ||
        ((u = n.querySelector(Rl(l))),
        u ||
          ((t = O({ src: t, async: !0 }, e)),
          (e = Qe.get(l)) && Bo(t, e),
          (u = n.createElement("script")),
          Pt(u),
          re(u, "link", t),
          n.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(l, u));
    }
  }
  function Dv(t, e) {
    Nn.M(t, e);
    var n = _i;
    if (n && t) {
      var a = $a(n).hoistableScripts,
        l = Mi(t),
        u = a.get(l);
      u ||
        ((u = n.querySelector(Rl(l))),
        u ||
          ((t = O({ src: t, async: !0, type: "module" }, e)),
          (e = Qe.get(l)) && Bo(t, e),
          (u = n.createElement("script")),
          Pt(u),
          re(u, "link", t),
          n.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(l, u));
    }
  }
  function Tm(t, e, n, a) {
    var l = (l = Q.current) ? tr(l) : null;
    if (!l) throw Error(o(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = Ri(n.href)),
            (n = $a(l).hoistableStyles),
            (a = n.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = Ri(n.href);
          var u = $a(l).hoistableStyles,
            f = u.get(t);
          if (
            (f ||
              ((l = l.ownerDocument || l),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(t, f),
              (u = l.querySelector(_l(t))) &&
                !u._p &&
                ((f.instance = u), (f.state.loading = 5)),
              Qe.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Qe.set(t, n),
                u || zv(l, t, n, f.state))),
            e && a === null)
          )
            throw Error(o(528, ""));
          return f;
        }
        if (e && a !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Mi(n)),
              (n = $a(l).hoistableScripts),
              (a = n.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, t));
    }
  }
  function Ri(t) {
    return 'href="' + ke(t) + '"';
  }
  function _l(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function wm(t) {
    return O({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function zv(t, e, n, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        re(e, "link", n),
        Pt(e),
        t.head.appendChild(e));
  }
  function Mi(t) {
    return '[src="' + ke(t) + '"]';
  }
  function Rl(t) {
    return "script[async]" + t;
  }
  function Em(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + ke(n.href) + '"]');
          if (a) return (e.instance = a), Pt(a), a;
          var l = O({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            Pt(a),
            re(a, "style", l),
            er(a, n.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          l = Ri(n.href);
          var u = t.querySelector(_l(l));
          if (u) return (e.state.loading |= 4), (e.instance = u), Pt(u), u;
          (a = wm(n)),
            (l = Qe.get(l)) && Lo(a, l),
            (u = (t.ownerDocument || t).createElement("link")),
            Pt(u);
          var f = u;
          return (
            (f._p = new Promise(function (h, y) {
              (f.onload = h), (f.onerror = y);
            })),
            re(u, "link", a),
            (e.state.loading |= 4),
            er(u, n.precedence, t),
            (e.instance = u)
          );
        case "script":
          return (
            (u = Mi(n.src)),
            (l = t.querySelector(Rl(u)))
              ? ((e.instance = l), Pt(l), l)
              : ((a = n),
                (l = Qe.get(u)) && ((a = O({}, n)), Bo(a, l)),
                (t = t.ownerDocument || t),
                (l = t.createElement("script")),
                Pt(l),
                re(l, "link", a),
                t.head.appendChild(l),
                (e.instance = l))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), er(a, n.precedence, t));
    return e.instance;
  }
  function er(t, e, n) {
    for (
      var a = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        l = a.length ? a[a.length - 1] : null,
        u = l,
        f = 0;
      f < a.length;
      f++
    ) {
      var h = a[f];
      if (h.dataset.precedence === e) u = h;
      else if (u !== l) break;
    }
    u
      ? u.parentNode.insertBefore(t, u.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function Lo(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function Bo(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var nr = null;
  function Om(t, e, n) {
    if (nr === null) {
      var a = new Map(),
        l = (nr = new Map());
      l.set(n, a);
    } else (l = nr), (a = l.get(n)), a || ((a = new Map()), l.set(n, a));
    if (a.has(t)) return a;
    for (
      a.set(t, null), n = n.getElementsByTagName(t), l = 0;
      l < n.length;
      l++
    ) {
      var u = n[l];
      if (
        !(
          u[Yi] ||
          u[Yt] ||
          (t === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = u.getAttribute(e) || "";
        f = t + f;
        var h = a.get(f);
        h ? h.push(u) : a.set(f, [u]);
      }
    }
    return a;
  }
  function _m(t, e, n) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function qv(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Rm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Ml = null;
  function jv() {}
  function kv(t, e, n) {
    if (Ml === null) throw Error(o(475));
    var a = Ml;
    if (
      e.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var l = Ri(n.href),
          u = t.querySelector(_l(l));
        if (u) {
          (t = u._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (a.count++, (a = ar.bind(a)), t.then(a, a)),
            (e.state.loading |= 4),
            (e.instance = u),
            Pt(u);
          return;
        }
        (u = t.ownerDocument || t),
          (n = wm(n)),
          (l = Qe.get(l)) && Lo(n, l),
          (u = u.createElement("link")),
          Pt(u);
        var f = u;
        (f._p = new Promise(function (h, y) {
          (f.onload = h), (f.onerror = y);
        })),
          re(u, "link", n),
          (e.instance = u);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (a.count++,
          (e = ar.bind(a)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function Uv() {
    if (Ml === null) throw Error(o(475));
    var t = Ml;
    return (
      t.stylesheets && t.count === 0 && Ho(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var n = setTimeout(function () {
              if ((t.stylesheets && Ho(t, t.stylesheets), t.unsuspend)) {
                var a = t.unsuspend;
                (t.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function ar() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Ho(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var ir = null;
  function Ho(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (ir = new Map()),
        e.forEach(Lv, t),
        (ir = null),
        ar.call(t));
  }
  function Lv(t, e) {
    if (!(e.state.loading & 4)) {
      var n = ir.get(t);
      if (n) var a = n.get(null);
      else {
        (n = new Map()), ir.set(t, n);
        for (
          var l = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            u = 0;
          u < l.length;
          u++
        ) {
          var f = l[u];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (n.set(f.dataset.precedence, f), (a = f));
        }
        a && n.set(null, a);
      }
      (l = e.instance),
        (f = l.getAttribute("data-precedence")),
        (u = n.get(f) || a),
        u === a && n.set(null, l),
        n.set(f, l),
        this.count++,
        (a = ar.bind(this)),
        l.addEventListener("load", a),
        l.addEventListener("error", a),
        u
          ? u.parentNode.insertBefore(l, u.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(l, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var Nl = {
    $$typeof: nt,
    Provider: null,
    Consumer: null,
    _currentValue: Y,
    _currentValue2: Y,
    _threadCount: 0,
  };
  function Bv(t, e, n, a, l, u, f, h) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Hi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Hi(0)),
      (this.hiddenUpdates = Hi(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = l),
      (this.onCaughtError = u),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = h),
      (this.incompleteTransitions = new Map());
  }
  function Mm(t, e, n, a, l, u, f, h, y, E, N, q) {
    return (
      (t = new Bv(t, e, n, f, h, y, E, q)),
      (e = 1),
      u === !0 && (e |= 24),
      (u = Ee(3, null, null, e)),
      (t.current = u),
      (u.stateNode = t),
      (e = Su()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (u.memoizedState = { element: a, isDehydrated: n, cache: e }),
      wu(u),
      t
    );
  }
  function Nm(t) {
    return t ? ((t = si), t) : si;
  }
  function Cm(t, e, n, a, l, u) {
    (l = Nm(l)),
      a.context === null ? (a.context = l) : (a.pendingContext = l),
      (a = Yn(e)),
      (a.payload = { element: n }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (n = Vn(t, a, e)),
      n !== null && (Ne(n, t, e), sl(n, t, e));
  }
  function Dm(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Yo(t, e) {
    Dm(t, e), (t = t.alternate) && Dm(t, e);
  }
  function zm(t) {
    if (t.tag === 13) {
      var e = li(t, 67108864);
      e !== null && Ne(e, t, 67108864), Yo(t, 67108864);
    }
  }
  var lr = !0;
  function Hv(t, e, n, a) {
    var l = T.T;
    T.T = null;
    var u = k.p;
    try {
      (k.p = 2), Vo(t, e, n, a);
    } finally {
      (k.p = u), (T.T = l);
    }
  }
  function Yv(t, e, n, a) {
    var l = T.T;
    T.T = null;
    var u = k.p;
    try {
      (k.p = 8), Vo(t, e, n, a);
    } finally {
      (k.p = u), (T.T = l);
    }
  }
  function Vo(t, e, n, a) {
    if (lr) {
      var l = Qo(a);
      if (l === null) Mo(t, e, a, sr, n), jm(t, a);
      else if (Qv(l, t, e, n, a)) a.stopPropagation();
      else if ((jm(t, a), e & 4 && -1 < Vv.indexOf(t))) {
        for (; l !== null; ) {
          var u = Ka(l);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var f = Pe(u.pendingLanes);
                  if (f !== 0) {
                    var h = u;
                    for (h.pendingLanes |= 2, h.entangledLanes |= 2; f; ) {
                      var y = 1 << (31 - ae(f));
                      (h.entanglements[1] |= y), (f &= ~y);
                    }
                    ln(u), (xt & 6) === 0 && ((Qs = ue() + 500), Tl(0));
                  }
                }
                break;
              case 13:
                (h = li(u, 2)), h !== null && Ne(h, u, 2), Xs(), Yo(u, 2);
            }
          if (((u = Qo(a)), u === null && Mo(t, e, a, sr, n), u === l)) break;
          l = u;
        }
        l !== null && a.stopPropagation();
      } else Mo(t, e, a, null, n);
    }
  }
  function Qo(t) {
    return (t = Kr(t)), Go(t);
  }
  var sr = null;
  function Go(t) {
    if (((sr = null), (t = Za(t)), t !== null)) {
      var e = d(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = m(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (sr = t), null;
  }
  function qm(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Il()) {
          case qe:
            return 2;
          case Wl:
            return 8;
          case Va:
          case he:
            return 32;
          case mn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Xo = !1,
    ea = null,
    na = null,
    aa = null,
    Cl = new Map(),
    Dl = new Map(),
    ia = [],
    Vv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function jm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        ea = null;
        break;
      case "dragenter":
      case "dragleave":
        na = null;
        break;
      case "mouseover":
      case "mouseout":
        aa = null;
        break;
      case "pointerover":
      case "pointerout":
        Cl.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Dl.delete(e.pointerId);
    }
  }
  function zl(t, e, n, a, l, u) {
    return t === null || t.nativeEvent !== u
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [l],
        }),
        e !== null && ((e = Ka(e)), e !== null && zm(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        l !== null && e.indexOf(l) === -1 && e.push(l),
        t);
  }
  function Qv(t, e, n, a, l) {
    switch (e) {
      case "focusin":
        return (ea = zl(ea, t, e, n, a, l)), !0;
      case "dragenter":
        return (na = zl(na, t, e, n, a, l)), !0;
      case "mouseover":
        return (aa = zl(aa, t, e, n, a, l)), !0;
      case "pointerover":
        var u = l.pointerId;
        return Cl.set(u, zl(Cl.get(u) || null, t, e, n, a, l)), !0;
      case "gotpointercapture":
        return (
          (u = l.pointerId), Dl.set(u, zl(Dl.get(u) || null, t, e, n, a, l)), !0
        );
    }
    return !1;
  }
  function km(t) {
    var e = Za(t.target);
    if (e !== null) {
      var n = d(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = m(n)), e !== null)) {
            (t.blockedOn = e),
              Jt(t.priority, function () {
                if (n.tag === 13) {
                  var a = Me();
                  a = Gt(a);
                  var l = li(n, a);
                  l !== null && Ne(l, n, a), Yo(n, a);
                }
              });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function rr(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Qo(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(n.type, n);
        (Zr = a), n.target.dispatchEvent(a), (Zr = null);
      } else return (e = Ka(n)), e !== null && zm(e), (t.blockedOn = n), !1;
      e.shift();
    }
    return !0;
  }
  function Um(t, e, n) {
    rr(t) && n.delete(e);
  }
  function Gv() {
    (Xo = !1),
      ea !== null && rr(ea) && (ea = null),
      na !== null && rr(na) && (na = null),
      aa !== null && rr(aa) && (aa = null),
      Cl.forEach(Um),
      Dl.forEach(Um);
  }
  function ur(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Xo ||
        ((Xo = !0),
        s.unstable_scheduleCallback(s.unstable_NormalPriority, Gv)));
  }
  var or = null;
  function Lm(t) {
    or !== t &&
      ((or = t),
      s.unstable_scheduleCallback(s.unstable_NormalPriority, function () {
        or === t && (or = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            a = t[e + 1],
            l = t[e + 2];
          if (typeof a != "function") {
            if (Go(a || n) === null) continue;
            break;
          }
          var u = Ka(n);
          u !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Qu(u, { pending: !0, data: l, method: n.method, action: a }, a, l));
        }
      }));
  }
  function ql(t) {
    function e(y) {
      return ur(y, t);
    }
    ea !== null && ur(ea, t),
      na !== null && ur(na, t),
      aa !== null && ur(aa, t),
      Cl.forEach(e),
      Dl.forEach(e);
    for (var n = 0; n < ia.length; n++) {
      var a = ia[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < ia.length && ((n = ia[0]), n.blockedOn === null); )
      km(n), n.blockedOn === null && ia.shift();
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var l = n[a],
          u = n[a + 1],
          f = l[Rt] || null;
        if (typeof u == "function") f || Lm(n);
        else if (f) {
          var h = null;
          if (u && u.hasAttribute("formAction")) {
            if (((l = u), (f = u[Rt] || null))) h = f.formAction;
            else if (Go(l) !== null) continue;
          } else h = f.action;
          typeof h == "function" ? (n[a + 1] = h) : (n.splice(a, 3), (a -= 3)),
            Lm(n);
        }
      }
  }
  function Zo(t) {
    this._internalRoot = t;
  }
  (cr.prototype.render = Zo.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(o(409));
      var n = e.current,
        a = Me();
      Cm(n, a, t, e, null, null);
    }),
    (cr.prototype.unmount = Zo.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          Cm(t.current, 2, null, t, null, null), Xs(), (e[Wt] = null);
        }
      });
  function cr(t) {
    this._internalRoot = t;
  }
  cr.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = ga();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < ia.length && e !== 0 && e < ia[n].priority; n++);
      ia.splice(n, 0, t), n === 0 && km(t);
    }
  };
  var Bm = i.version;
  if (Bm !== "19.1.0") throw Error(o(527, Bm, "19.1.0"));
  k.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(o(188))
        : ((t = Object.keys(t).join(",")), Error(o(268, t)));
    return (
      (t = S(e)),
      (t = t !== null ? g(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Xv = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: T,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var fr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fr.isDisabled && fr.supportsFiber)
      try {
        (We = fr.inject(Xv)), (me = fr);
      } catch {}
  }
  return (
    (kl.createRoot = function (t, e) {
      if (!c(t)) throw Error(o(299));
      var n = !1,
        a = "",
        l = eh,
        u = nh,
        f = ah,
        h = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (l = e.onUncaughtError),
          e.onCaughtError !== void 0 && (u = e.onCaughtError),
          e.onRecoverableError !== void 0 && (f = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (h = e.unstable_transitionCallbacks)),
        (e = Mm(t, 1, !1, null, null, n, a, l, u, f, h, null)),
        (t[Wt] = e.current),
        Ro(t),
        new Zo(e)
      );
    }),
    (kl.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(o(299));
      var a = !1,
        l = "",
        u = eh,
        f = nh,
        h = ah,
        y = null,
        E = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (f = n.onCaughtError),
          n.onRecoverableError !== void 0 && (h = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (y = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (E = n.formState)),
        (e = Mm(t, 1, !0, e, n ?? null, a, l, u, f, h, y, E)),
        (e.context = Nm(null)),
        (n = e.current),
        (a = Me()),
        (a = Gt(a)),
        (l = Yn(a)),
        (l.callback = null),
        Vn(n, l, a),
        (n = a),
        (e.current.lanes = n),
        Un(e, n),
        ln(e),
        (t[Wt] = e.current),
        Ro(t),
        new cr(e)
      );
    }),
    (kl.version = "19.1.0"),
    kl
  );
}
var Jm;
function tp() {
  if (Jm) return Jo.exports;
  Jm = 1;
  function s() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (i) {
        console.error(i);
      }
  }
  return s(), (Jo.exports = Pv()), Jo.exports;
}
var ep = tp();
const qa = "1.24.1";
var on = [],
  Xe = [],
  np = Uint8Array,
  Po = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Ni = 0, ap = Po.length; Ni < ap; ++Ni)
  (on[Ni] = Po[Ni]), (Xe[Po.charCodeAt(Ni)] = Ni);
Xe[45] = 62;
Xe[95] = 63;
function ip(s) {
  var i = s.length;
  if (i % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = s.indexOf("=");
  r === -1 && (r = i);
  var o = r === i ? 0 : 4 - (r % 4);
  return [r, o];
}
function lp(s, i, r) {
  return ((i + r) * 3) / 4 - r;
}
function Ql(s) {
  var i,
    r = ip(s),
    o = r[0],
    c = r[1],
    d = new np(lp(s, o, c)),
    m = 0,
    p = c > 0 ? o - 4 : o,
    S;
  for (S = 0; S < p; S += 4)
    (i =
      (Xe[s.charCodeAt(S)] << 18) |
      (Xe[s.charCodeAt(S + 1)] << 12) |
      (Xe[s.charCodeAt(S + 2)] << 6) |
      Xe[s.charCodeAt(S + 3)]),
      (d[m++] = (i >> 16) & 255),
      (d[m++] = (i >> 8) & 255),
      (d[m++] = i & 255);
  return (
    c === 2 &&
      ((i = (Xe[s.charCodeAt(S)] << 2) | (Xe[s.charCodeAt(S + 1)] >> 4)),
      (d[m++] = i & 255)),
    c === 1 &&
      ((i =
        (Xe[s.charCodeAt(S)] << 10) |
        (Xe[s.charCodeAt(S + 1)] << 4) |
        (Xe[s.charCodeAt(S + 2)] >> 2)),
      (d[m++] = (i >> 8) & 255),
      (d[m++] = i & 255)),
    d
  );
}
function sp(s) {
  return (
    on[(s >> 18) & 63] + on[(s >> 12) & 63] + on[(s >> 6) & 63] + on[s & 63]
  );
}
function rp(s, i, r) {
  for (var o, c = [], d = i; d < r; d += 3)
    (o =
      ((s[d] << 16) & 16711680) + ((s[d + 1] << 8) & 65280) + (s[d + 2] & 255)),
      c.push(sp(o));
  return c.join("");
}
function Gl(s) {
  for (
    var i, r = s.length, o = r % 3, c = [], d = 16383, m = 0, p = r - o;
    m < p;
    m += d
  )
    c.push(rp(s, m, m + d > p ? p : m + d));
  return (
    o === 1
      ? ((i = s[r - 1]), c.push(on[i >> 2] + on[(i << 4) & 63] + "=="))
      : o === 2 &&
        ((i = (s[r - 2] << 8) + s[r - 1]),
        c.push(on[i >> 10] + on[(i >> 4) & 63] + on[(i << 2) & 63] + "=")),
    c.join("")
  );
}
function De(s) {
  if (s === void 0) return {};
  if (!Gg(s))
    throw new Error(
      `The arguments to a Convex function must be an object. Received: ${s}`
    );
  return s;
}
function Qg(s) {
  if (typeof s > "u")
    throw new Error(
      "Client created with undefined deployment address. If you used an environment variable, check that it's set."
    );
  if (typeof s != "string")
    throw new Error(`Invalid deployment address: found ${s}".`);
  if (!(s.startsWith("http:") || s.startsWith("https:")))
    throw new Error(
      `Invalid deployment address: Must start with "https://" or "http://". Found "${s}".`
    );
  try {
    new URL(s);
  } catch {
    throw new Error(
      `Invalid deployment address: "${s}" is not a valid URL. If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`
    );
  }
  if (s.endsWith(".convex.site"))
    throw new Error(
      `Invalid deployment address: "${s}" ends with .convex.site, which is used for HTTP Actions. Convex deployment URLs typically end with .convex.cloud? If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`
    );
}
function Gg(s) {
  var c;
  const i = typeof s == "object",
    r = Object.getPrototypeOf(s),
    o =
      r === null ||
      r === Object.prototype ||
      ((c = r == null ? void 0 : r.constructor) == null ? void 0 : c.name) ===
        "Object";
  return i && o;
}
const Xg = !0,
  ji = BigInt("-9223372036854775808"),
  Hc = BigInt("9223372036854775807"),
  gc = BigInt("0"),
  up = BigInt("8"),
  op = BigInt("256");
function Zg(s) {
  return Number.isNaN(s) || !Number.isFinite(s) || Object.is(s, -0);
}
function cp(s) {
  s < gc && (s -= ji + ji);
  let i = s.toString(16);
  i.length % 2 === 1 && (i = "0" + i);
  const r = new Uint8Array(new ArrayBuffer(8));
  let o = 0;
  for (const c of i.match(/.{2}/g).reverse())
    r.set([parseInt(c, 16)], o++), (s >>= up);
  return Gl(r);
}
function fp(s) {
  const i = Ql(s);
  if (i.byteLength !== 8)
    throw new Error(`Received ${i.byteLength} bytes, expected 8 for $integer`);
  let r = gc,
    o = gc;
  for (const c of i) (r += BigInt(c) * op ** o), o++;
  return r > Hc && (r += ji + ji), r;
}
function dp(s) {
  if (s < ji || Hc < s)
    throw new Error(`BigInt ${s} does not fit into a 64-bit signed integer.`);
  const i = new ArrayBuffer(8);
  return new DataView(i).setBigInt64(0, s, !0), Gl(new Uint8Array(i));
}
function hp(s) {
  const i = Ql(s);
  if (i.byteLength !== 8)
    throw new Error(`Received ${i.byteLength} bytes, expected 8 for $integer`);
  return new DataView(i.buffer).getBigInt64(0, !0);
}
const mp = DataView.prototype.setBigInt64 ? dp : cp,
  gp = DataView.prototype.getBigInt64 ? hp : fp,
  Fm = 1024;
function Kg(s) {
  if (s.length > Fm)
    throw new Error(`Field name ${s} exceeds maximum field name length ${Fm}.`);
  if (s.startsWith("$"))
    throw new Error(`Field name ${s} starts with a '$', which is reserved.`);
  for (let i = 0; i < s.length; i += 1) {
    const r = s.charCodeAt(i);
    if (r < 32 || r >= 127)
      throw new Error(
        `Field name ${s} has invalid character '${s[i]}': Field names can only contain non-control ASCII characters`
      );
  }
}
function Ie(s) {
  if (
    s === null ||
    typeof s == "boolean" ||
    typeof s == "number" ||
    typeof s == "string"
  )
    return s;
  if (Array.isArray(s)) return s.map((o) => Ie(o));
  if (typeof s != "object") throw new Error(`Unexpected type of ${s}`);
  const i = Object.entries(s);
  if (i.length === 1) {
    const o = i[0][0];
    if (o === "$bytes") {
      if (typeof s.$bytes != "string")
        throw new Error(`Malformed $bytes field on ${s}`);
      return Ql(s.$bytes).buffer;
    }
    if (o === "$integer") {
      if (typeof s.$integer != "string")
        throw new Error(`Malformed $integer field on ${s}`);
      return gp(s.$integer);
    }
    if (o === "$float") {
      if (typeof s.$float != "string")
        throw new Error(`Malformed $float field on ${s}`);
      const c = Ql(s.$float);
      if (c.byteLength !== 8)
        throw new Error(
          `Received ${c.byteLength} bytes, expected 8 for $float`
        );
      const m = new DataView(c.buffer).getFloat64(0, Xg);
      if (!Zg(m)) throw new Error(`Float ${m} should be encoded as a number`);
      return m;
    }
    if (o === "$set")
      throw new Error(
        "Received a Set which is no longer supported as a Convex type."
      );
    if (o === "$map")
      throw new Error(
        "Received a Map which is no longer supported as a Convex type."
      );
  }
  const r = {};
  for (const [o, c] of Object.entries(s)) Kg(o), (r[o] = Ie(c));
  return r;
}
function Bl(s) {
  return JSON.stringify(s, (i, r) =>
    r === void 0 ? "undefined" : typeof r == "bigint" ? `${r.toString()}n` : r
  );
}
function yc(s, i, r, o) {
  var m;
  if (s === void 0) {
    const p = r && ` (present at path ${r} in original object ${Bl(i)})`;
    throw new Error(
      `undefined is not a valid Convex value${p}. To learn about Convex's supported types, see https://docs.convex.dev/using/types.`
    );
  }
  if (s === null) return s;
  if (typeof s == "bigint") {
    if (s < ji || Hc < s)
      throw new Error(`BigInt ${s} does not fit into a 64-bit signed integer.`);
    return { $integer: mp(s) };
  }
  if (typeof s == "number")
    if (Zg(s)) {
      const p = new ArrayBuffer(8);
      return (
        new DataView(p).setFloat64(0, s, Xg), { $float: Gl(new Uint8Array(p)) }
      );
    } else return s;
  if (typeof s == "boolean" || typeof s == "string") return s;
  if (s instanceof ArrayBuffer) return { $bytes: Gl(new Uint8Array(s)) };
  if (Array.isArray(s)) return s.map((p, S) => yc(p, i, r + `[${S}]`));
  if (s instanceof Set) throw new Error(tc(r, "Set", [...s], i));
  if (s instanceof Map) throw new Error(tc(r, "Map", [...s], i));
  if (!Gg(s)) {
    const p =
        (m = s == null ? void 0 : s.constructor) == null ? void 0 : m.name,
      S = p ? `${p} ` : "";
    throw new Error(tc(r, S, s, i));
  }
  const c = {},
    d = Object.entries(s);
  d.sort(([p, S], [g, O]) => (p === g ? 0 : p < g ? -1 : 1));
  for (const [p, S] of d)
    S !== void 0 && (Kg(p), (c[p] = yc(S, i, r + `.${p}`)));
  return c;
}
function tc(s, i, r, o) {
  return s
    ? `${i}${Bl(
        r
      )} is not a supported Convex type (present at path ${s} in original object ${Bl(
        o
      )}). To learn about Convex's supported types, see https://docs.convex.dev/using/types.`
    : `${i}${Bl(r)} is not a supported Convex type.`;
}
function Cn(s) {
  return yc(s, s, "");
}
var yp = Object.defineProperty,
  vp = (s, i, r) =>
    i in s
      ? yp(s, i, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[i] = r),
  ec = (s, i, r) => vp(s, typeof i != "symbol" ? i + "" : i, r),
  Im,
  Wm;
const pp = Symbol.for("ConvexError");
class ja extends ((Wm = Error), (Im = pp), Wm) {
  constructor(i) {
    super(typeof i == "string" ? i : Bl(i)),
      ec(this, "name", "ConvexError"),
      ec(this, "data"),
      ec(this, Im, !0),
      (this.data = i);
  }
}
const $g = () => Array.from({ length: 4 }, () => 0);
$g();
$g();
var bp = Object.defineProperty,
  Sp = (s, i, r) =>
    i in s
      ? bp(s, i, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[i] = r),
  Pm = (s, i, r) => Sp(s, typeof i != "symbol" ? i + "" : i, r);
const xp = "color:rgb(0, 145, 255)";
function Jg(s) {
  switch (s) {
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
class Fg {
  constructor(i) {
    Pm(this, "_onLogLineFuncs"),
      Pm(this, "_verbose"),
      (this._onLogLineFuncs = {}),
      (this._verbose = i.verbose);
  }
  addLogLineListener(i) {
    let r = Math.random().toString(36).substring(2, 15);
    for (let o = 0; o < 10 && this._onLogLineFuncs[r] !== void 0; o++)
      r = Math.random().toString(36).substring(2, 15);
    return (
      (this._onLogLineFuncs[r] = i),
      () => {
        delete this._onLogLineFuncs[r];
      }
    );
  }
  logVerbose(...i) {
    if (this._verbose)
      for (const r of Object.values(this._onLogLineFuncs))
        r("debug", `${new Date().toISOString()}`, ...i);
  }
  log(...i) {
    for (const r of Object.values(this._onLogLineFuncs)) r("info", ...i);
  }
  warn(...i) {
    for (const r of Object.values(this._onLogLineFuncs)) r("warn", ...i);
  }
  error(...i) {
    for (const r of Object.values(this._onLogLineFuncs)) r("error", ...i);
  }
}
function Yc(s) {
  const i = new Fg(s);
  return (
    i.addLogLineListener((r, ...o) => {
      switch (r) {
        case "debug":
          console.debug(...o);
          break;
        case "info":
          console.log(...o);
          break;
        case "warn":
          console.warn(...o);
          break;
        case "error":
          console.error(...o);
          break;
        default:
          console.log(...o);
      }
    }),
    i
  );
}
function Vc(s) {
  return new Fg(s);
}
function ua(s, i, r, o, c) {
  const d = Jg(r);
  if (
    (typeof c == "object" &&
      (c = `ConvexError ${JSON.stringify(c.errorData, null, 2)}`),
    i === "info")
  ) {
    const m = c.match(/^\[.*?\] /);
    if (m === null) {
      s.error(`[CONVEX ${d}(${o})] Could not parse console.log`);
      return;
    }
    const p = c.slice(1, m[0].length - 2),
      S = c.slice(m[0].length);
    s.log(`%c[CONVEX ${d}(${o})] [${p}]`, xp, S);
  } else s.error(`[CONVEX ${d}(${o})] ${c}`);
}
function Ap(s, i) {
  const r = `[CONVEX FATAL ERROR] ${i}`;
  return s.error(r), new Error(r);
}
function Ci(s, i, r) {
  return `[CONVEX ${Jg(s)}(${i})] ${r.errorMessage}
  Called by client`;
}
function vc(s, i) {
  return (i.data = s.errorData), i;
}
function wr(s) {
  const i = s.split(":");
  let r, o;
  return (
    i.length === 1
      ? ((r = i[0]), (o = "default"))
      : ((r = i.slice(0, i.length - 1).join(":")), (o = i[i.length - 1])),
    r.endsWith(".js") && (r = r.slice(0, -3)),
    `${r}:${o}`
  );
}
function Ua(s, i) {
  return JSON.stringify({ udfPath: wr(s), args: Cn(i) });
}
var Tp = Object.defineProperty,
  wp = (s, i, r) =>
    i in s
      ? Tp(s, i, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[i] = r),
  sn = (s, i, r) => wp(s, typeof i != "symbol" ? i + "" : i, r);
class Ep {
  constructor() {
    sn(this, "nextQueryId"),
      sn(this, "querySetVersion"),
      sn(this, "querySet"),
      sn(this, "queryIdToToken"),
      sn(this, "identityVersion"),
      sn(this, "auth"),
      sn(this, "outstandingQueriesOlderThanRestart"),
      sn(this, "outstandingAuthOlderThanRestart"),
      sn(this, "paused"),
      sn(this, "pendingQuerySetModifications"),
      (this.nextQueryId = 0),
      (this.querySetVersion = 0),
      (this.identityVersion = 0),
      (this.querySet = new Map()),
      (this.queryIdToToken = new Map()),
      (this.outstandingQueriesOlderThanRestart = new Set()),
      (this.outstandingAuthOlderThanRestart = !1),
      (this.paused = !1),
      (this.pendingQuerySetModifications = new Map());
  }
  hasSyncedPastLastReconnect() {
    return (
      this.outstandingQueriesOlderThanRestart.size === 0 &&
      !this.outstandingAuthOlderThanRestart
    );
  }
  markAuthCompletion() {
    this.outstandingAuthOlderThanRestart = !1;
  }
  subscribe(i, r, o, c) {
    const d = wr(i),
      m = Ua(d, r),
      p = this.querySet.get(m);
    if (p !== void 0)
      return (
        (p.numSubscribers += 1),
        {
          queryToken: m,
          modification: null,
          unsubscribe: () => this.removeSubscriber(m),
        }
      );
    {
      const S = this.nextQueryId++,
        g = {
          id: S,
          canonicalizedUdfPath: d,
          args: r,
          numSubscribers: 1,
          journal: o,
          componentPath: c,
        };
      this.querySet.set(m, g), this.queryIdToToken.set(S, m);
      const O = this.querySetVersion,
        v = this.querySetVersion + 1,
        C = {
          type: "Add",
          queryId: S,
          udfPath: d,
          args: [Cn(r)],
          journal: o,
          componentPath: c,
        };
      return (
        this.paused
          ? this.pendingQuerySetModifications.set(S, C)
          : (this.querySetVersion = v),
        {
          queryToken: m,
          modification: {
            type: "ModifyQuerySet",
            baseVersion: O,
            newVersion: v,
            modifications: [C],
          },
          unsubscribe: () => this.removeSubscriber(m),
        }
      );
    }
  }
  transition(i) {
    for (const r of i.modifications)
      switch (r.type) {
        case "QueryUpdated":
        case "QueryFailed": {
          this.outstandingQueriesOlderThanRestart.delete(r.queryId);
          const o = r.journal;
          if (o !== void 0) {
            const c = this.queryIdToToken.get(r.queryId);
            c !== void 0 && (this.querySet.get(c).journal = o);
          }
          break;
        }
        case "QueryRemoved": {
          this.outstandingQueriesOlderThanRestart.delete(r.queryId);
          break;
        }
        default:
          throw new Error(`Invalid modification ${r.type}`);
      }
  }
  queryId(i, r) {
    const o = wr(i),
      c = Ua(o, r),
      d = this.querySet.get(c);
    return d !== void 0 ? d.id : null;
  }
  isCurrentOrNewerAuthVersion(i) {
    return i >= this.identityVersion;
  }
  setAuth(i) {
    this.auth = { tokenType: "User", value: i };
    const r = this.identityVersion;
    return (
      this.paused || (this.identityVersion = r + 1),
      { type: "Authenticate", baseVersion: r, ...this.auth }
    );
  }
  setAdminAuth(i, r) {
    const o = { tokenType: "Admin", value: i, impersonating: r };
    this.auth = o;
    const c = this.identityVersion;
    return (
      this.paused || (this.identityVersion = c + 1),
      { type: "Authenticate", baseVersion: c, ...o }
    );
  }
  clearAuth() {
    (this.auth = void 0), this.markAuthCompletion();
    const i = this.identityVersion;
    return (
      this.paused || (this.identityVersion = i + 1),
      { type: "Authenticate", tokenType: "None", baseVersion: i }
    );
  }
  hasAuth() {
    return !!this.auth;
  }
  isNewAuth(i) {
    var r;
    return ((r = this.auth) == null ? void 0 : r.value) !== i;
  }
  queryPath(i) {
    const r = this.queryIdToToken.get(i);
    return r ? this.querySet.get(r).canonicalizedUdfPath : null;
  }
  queryArgs(i) {
    const r = this.queryIdToToken.get(i);
    return r ? this.querySet.get(r).args : null;
  }
  queryToken(i) {
    return this.queryIdToToken.get(i) ?? null;
  }
  queryJournal(i) {
    var r;
    return (r = this.querySet.get(i)) == null ? void 0 : r.journal;
  }
  restart(i) {
    this.unpause(), this.outstandingQueriesOlderThanRestart.clear();
    const r = [];
    for (const d of this.querySet.values()) {
      const m = {
        type: "Add",
        queryId: d.id,
        udfPath: d.canonicalizedUdfPath,
        args: [Cn(d.args)],
        journal: d.journal,
        componentPath: d.componentPath,
      };
      r.push(m),
        i.has(d.id) || this.outstandingQueriesOlderThanRestart.add(d.id);
    }
    this.querySetVersion = 1;
    const o = {
      type: "ModifyQuerySet",
      baseVersion: 0,
      newVersion: 1,
      modifications: r,
    };
    if (!this.auth) return (this.identityVersion = 0), [o, void 0];
    this.outstandingAuthOlderThanRestart = !0;
    const c = { type: "Authenticate", baseVersion: 0, ...this.auth };
    return (this.identityVersion = 1), [o, c];
  }
  pause() {
    this.paused = !0;
  }
  resume() {
    const i =
        this.pendingQuerySetModifications.size > 0
          ? {
              type: "ModifyQuerySet",
              baseVersion: this.querySetVersion,
              newVersion: ++this.querySetVersion,
              modifications: Array.from(
                this.pendingQuerySetModifications.values()
              ),
            }
          : void 0,
      r =
        this.auth !== void 0
          ? {
              type: "Authenticate",
              baseVersion: this.identityVersion++,
              ...this.auth,
            }
          : void 0;
    return this.unpause(), [i, r];
  }
  unpause() {
    (this.paused = !1), this.pendingQuerySetModifications.clear();
  }
  removeSubscriber(i) {
    const r = this.querySet.get(i);
    if (r.numSubscribers > 1) return (r.numSubscribers -= 1), null;
    {
      this.querySet.delete(i),
        this.queryIdToToken.delete(r.id),
        this.outstandingQueriesOlderThanRestart.delete(r.id);
      const o = this.querySetVersion,
        c = this.querySetVersion + 1,
        d = { type: "Remove", queryId: r.id };
      return (
        this.paused
          ? this.pendingQuerySetModifications.has(r.id)
            ? this.pendingQuerySetModifications.delete(r.id)
            : this.pendingQuerySetModifications.set(r.id, d)
          : (this.querySetVersion = c),
        {
          type: "ModifyQuerySet",
          baseVersion: o,
          newVersion: c,
          modifications: [d],
        }
      );
    }
  }
}
var Op = Object.defineProperty,
  _p = (s, i, r) =>
    i in s
      ? Op(s, i, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[i] = r),
  dr = (s, i, r) => _p(s, typeof i != "symbol" ? i + "" : i, r);
class Rp {
  constructor(i) {
    (this.logger = i),
      dr(this, "inflightRequests"),
      dr(this, "requestsOlderThanRestart"),
      dr(this, "inflightMutationsCount", 0),
      dr(this, "inflightActionsCount", 0),
      (this.inflightRequests = new Map()),
      (this.requestsOlderThanRestart = new Set());
  }
  request(i, r) {
    return new Promise((c) => {
      const d = r ? "Requested" : "NotSent";
      this.inflightRequests.set(i.requestId, {
        message: i,
        status: { status: d, requestedAt: new Date(), onResult: c },
      }),
        i.type === "Mutation"
          ? this.inflightMutationsCount++
          : i.type === "Action" && this.inflightActionsCount++;
    });
  }
  onResponse(i) {
    const r = this.inflightRequests.get(i.requestId);
    if (r === void 0 || r.status.status === "Completed") return null;
    const o = r.message.type === "Mutation" ? "mutation" : "action",
      c = r.message.udfPath;
    for (const S of i.logLines) ua(this.logger, "info", o, c, S);
    const d = r.status;
    let m, p;
    if (i.success)
      (m = { success: !0, logLines: i.logLines, value: Ie(i.result) }),
        (p = () => d.onResult(m));
    else {
      const S = i.result,
        { errorData: g } = i;
      ua(this.logger, "error", o, c, S),
        (m = {
          success: !1,
          errorMessage: S,
          errorData: g !== void 0 ? Ie(g) : void 0,
          logLines: i.logLines,
        }),
        (p = () => d.onResult(m));
    }
    return i.type === "ActionResponse" || !i.success
      ? (p(),
        this.inflightRequests.delete(i.requestId),
        this.requestsOlderThanRestart.delete(i.requestId),
        r.message.type === "Action"
          ? this.inflightActionsCount--
          : r.message.type === "Mutation" && this.inflightMutationsCount--,
        { requestId: i.requestId, result: m })
      : ((r.status = {
          status: "Completed",
          result: m,
          ts: i.ts,
          onResolve: p,
        }),
        null);
  }
  removeCompleted(i) {
    const r = new Map();
    for (const [o, c] of this.inflightRequests.entries()) {
      const d = c.status;
      d.status === "Completed" &&
        d.ts.lessThanOrEqual(i) &&
        (d.onResolve(),
        r.set(o, d.result),
        c.message.type === "Mutation"
          ? this.inflightMutationsCount--
          : c.message.type === "Action" && this.inflightActionsCount--,
        this.inflightRequests.delete(o),
        this.requestsOlderThanRestart.delete(o));
    }
    return r;
  }
  restart() {
    this.requestsOlderThanRestart = new Set(this.inflightRequests.keys());
    const i = [];
    for (const [r, o] of this.inflightRequests) {
      if (o.status.status === "NotSent") {
        (o.status.status = "Requested"), i.push(o.message);
        continue;
      }
      if (o.message.type === "Mutation") i.push(o.message);
      else if (o.message.type === "Action") {
        if (
          (this.inflightRequests.delete(r),
          this.requestsOlderThanRestart.delete(r),
          this.inflightActionsCount--,
          o.status.status === "Completed")
        )
          throw new Error("Action should never be in 'Completed' state");
        o.status.onResult({
          success: !1,
          errorMessage: "Connection lost while action was in flight",
          logLines: [],
        });
      }
    }
    return i;
  }
  resume() {
    const i = [];
    for (const [, r] of this.inflightRequests)
      if (r.status.status === "NotSent") {
        (r.status.status = "Requested"), i.push(r.message);
        continue;
      }
    return i;
  }
  hasIncompleteRequests() {
    for (const i of this.inflightRequests.values())
      if (i.status.status === "Requested") return !0;
    return !1;
  }
  hasInflightRequests() {
    return this.inflightRequests.size > 0;
  }
  hasSyncedPastLastReconnect() {
    return this.requestsOlderThanRestart.size === 0;
  }
  timeOfOldestInflightRequest() {
    if (this.inflightRequests.size === 0) return null;
    let i = Date.now();
    for (const r of this.inflightRequests.values())
      r.status.status !== "Completed" &&
        r.status.requestedAt.getTime() < i &&
        (i = r.status.requestedAt.getTime());
    return new Date(i);
  }
  inflightMutations() {
    return this.inflightMutationsCount;
  }
  inflightActions() {
    return this.inflightActionsCount;
  }
}
const Er = Symbol.for("functionName"),
  Mp = Symbol.for("toReferencePath");
function Np(s) {
  return s[Mp] ?? null;
}
function Cp(s) {
  return s.startsWith("function://");
}
function Dp(s) {
  let i;
  if (typeof s == "string")
    Cp(s) ? (i = { functionHandle: s }) : (i = { name: s });
  else if (s[Er]) i = { name: s[Er] };
  else {
    const r = Np(s);
    if (!r) throw new Error(`${s} is not a functionReference`);
    i = { reference: r };
  }
  return i;
}
function cn(s) {
  const i = Dp(s);
  if (i.name === void 0)
    throw i.functionHandle !== void 0
      ? new Error(
          `Expected function reference like "api.file.func" or "internal.file.func", but received function handle ${i.functionHandle}`
        )
      : i.reference !== void 0
      ? new Error(
          `Expected function reference in the current component like "api.file.func" or "internal.file.func", but received reference ${i.reference}`
        )
      : new Error(
          `Expected function reference like "api.file.func" or "internal.file.func", but received ${JSON.stringify(
            i
          )}`
        );
  if (typeof s == "string") return s;
  const r = s[Er];
  if (!r) throw new Error(`${s} is not a functionReference`);
  return r;
}
function Ig(s = []) {
  const i = {
    get(r, o) {
      if (typeof o == "string") {
        const c = [...s, o];
        return Ig(c);
      } else if (o === Er) {
        if (s.length < 2) {
          const m = ["api", ...s].join(".");
          throw new Error(
            `API path is expected to be of the form \`api.moduleName.functionName\`. Found: \`${m}\``
          );
        }
        const c = s.slice(0, -1).join("/"),
          d = s[s.length - 1];
        return d === "default" ? c : c + ":" + d;
      } else return o === Symbol.toStringTag ? "FunctionReference" : void 0;
    },
  };
  return new Proxy({}, i);
}
Ig();
var zp = Object.defineProperty,
  qp = (s, i, r) =>
    i in s
      ? zp(s, i, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[i] = r),
  Or = (s, i, r) => qp(s, typeof i != "symbol" ? i + "" : i, r);
class Xl {
  constructor(i) {
    Or(this, "queryResults"),
      Or(this, "modifiedQueries"),
      (this.queryResults = i),
      (this.modifiedQueries = []);
  }
  getQuery(i, ...r) {
    const o = De(r[0]),
      c = cn(i),
      d = this.queryResults.get(Ua(c, o));
    if (d !== void 0) return Xl.queryValue(d.result);
  }
  getAllQueries(i) {
    const r = [],
      o = cn(i);
    for (const c of this.queryResults.values())
      c.udfPath === wr(o) &&
        r.push({ args: c.args, value: Xl.queryValue(c.result) });
    return r;
  }
  setQuery(i, r, o) {
    const c = De(r),
      d = cn(i),
      m = Ua(d, c);
    let p;
    o === void 0 ? (p = void 0) : (p = { success: !0, value: o, logLines: [] });
    const S = { udfPath: d, args: c, result: p };
    this.queryResults.set(m, S), this.modifiedQueries.push(m);
  }
  static queryValue(i) {
    if (i !== void 0) return i.success ? i.value : void 0;
  }
}
class jp {
  constructor() {
    Or(this, "queryResults"),
      Or(this, "optimisticUpdates"),
      (this.queryResults = new Map()),
      (this.optimisticUpdates = []);
  }
  ingestQueryResultsFromServer(i, r) {
    this.optimisticUpdates = this.optimisticUpdates.filter(
      (m) => !r.has(m.mutationId)
    );
    const o = this.queryResults;
    this.queryResults = new Map(i);
    const c = new Xl(this.queryResults);
    for (const m of this.optimisticUpdates) m.update(c);
    const d = [];
    for (const [m, p] of this.queryResults) {
      const S = o.get(m);
      (S === void 0 || S.result !== p.result) && d.push(m);
    }
    return d;
  }
  applyOptimisticUpdate(i, r) {
    this.optimisticUpdates.push({ update: i, mutationId: r });
    const o = new Xl(this.queryResults);
    return i(o), o.modifiedQueries;
  }
  queryResult(i) {
    const r = this.queryResults.get(i);
    if (r === void 0) return;
    const o = r.result;
    if (o !== void 0) {
      if (o.success) return o.value;
      throw o.errorData !== void 0
        ? vc(o, new ja(Ci("query", r.udfPath, o)))
        : new Error(Ci("query", r.udfPath, o));
    }
  }
  hasQueryResult(i) {
    return this.queryResults.get(i) !== void 0;
  }
  queryLogs(i) {
    var o;
    const r = this.queryResults.get(i);
    return (o = r == null ? void 0 : r.result) == null ? void 0 : o.logLines;
  }
}
var kp = Object.defineProperty,
  Up = (s, i, r) =>
    i in s
      ? kp(s, i, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[i] = r),
  nc = (s, i, r) => Up(s, typeof i != "symbol" ? i + "" : i, r);
class Ce {
  constructor(i, r) {
    nc(this, "low"),
      nc(this, "high"),
      nc(this, "__isUnsignedLong__"),
      (this.low = i | 0),
      (this.high = r | 0),
      (this.__isUnsignedLong__ = !0);
  }
  static isLong(i) {
    return (i && i.__isUnsignedLong__) === !0;
  }
  static fromBytesLE(i) {
    return new Ce(
      i[0] | (i[1] << 8) | (i[2] << 16) | (i[3] << 24),
      i[4] | (i[5] << 8) | (i[6] << 16) | (i[7] << 24)
    );
  }
  toBytesLE() {
    const i = this.high,
      r = this.low;
    return [
      r & 255,
      (r >>> 8) & 255,
      (r >>> 16) & 255,
      r >>> 24,
      i & 255,
      (i >>> 8) & 255,
      (i >>> 16) & 255,
      i >>> 24,
    ];
  }
  static fromNumber(i) {
    return isNaN(i) || i < 0
      ? tg
      : i >= Lp
      ? Bp
      : new Ce(i % Hl | 0, (i / Hl) | 0);
  }
  toString() {
    return (BigInt(this.high) * BigInt(Hl) + BigInt(this.low)).toString();
  }
  equals(i) {
    return (
      Ce.isLong(i) || (i = Ce.fromValue(i)),
      this.high >>> 31 === 1 && i.high >>> 31 === 1
        ? !1
        : this.high === i.high && this.low === i.low
    );
  }
  notEquals(i) {
    return !this.equals(i);
  }
  comp(i) {
    return (
      Ce.isLong(i) || (i = Ce.fromValue(i)),
      this.equals(i)
        ? 0
        : i.high >>> 0 > this.high >>> 0 ||
          (i.high === this.high && i.low >>> 0 > this.low >>> 0)
        ? -1
        : 1
    );
  }
  lessThanOrEqual(i) {
    return this.comp(i) <= 0;
  }
  static fromValue(i) {
    return typeof i == "number" ? Ce.fromNumber(i) : new Ce(i.low, i.high);
  }
}
const tg = new Ce(0, 0),
  eg = 65536,
  Hl = eg * eg,
  Lp = Hl * Hl,
  Bp = new Ce(-1, -1);
var Hp = Object.defineProperty,
  Yp = (s, i, r) =>
    i in s
      ? Hp(s, i, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[i] = r),
  hr = (s, i, r) => Yp(s, typeof i != "symbol" ? i + "" : i, r);
class ng {
  constructor(i, r) {
    hr(this, "version"),
      hr(this, "remoteQuerySet"),
      hr(this, "queryPath"),
      hr(this, "logger"),
      (this.version = { querySet: 0, ts: Ce.fromNumber(0), identity: 0 }),
      (this.remoteQuerySet = new Map()),
      (this.queryPath = i),
      (this.logger = r);
  }
  transition(i) {
    const r = i.startVersion;
    if (
      this.version.querySet !== r.querySet ||
      this.version.ts.notEquals(r.ts) ||
      this.version.identity !== r.identity
    )
      throw new Error(
        `Invalid start version: ${r.ts.toString()}:${r.querySet}`
      );
    for (const o of i.modifications)
      switch (o.type) {
        case "QueryUpdated": {
          const c = this.queryPath(o.queryId);
          if (c)
            for (const m of o.logLines) ua(this.logger, "info", "query", c, m);
          const d = Ie(o.value ?? null);
          this.remoteQuerySet.set(o.queryId, {
            success: !0,
            value: d,
            logLines: o.logLines,
          });
          break;
        }
        case "QueryFailed": {
          const c = this.queryPath(o.queryId);
          if (c)
            for (const m of o.logLines) ua(this.logger, "info", "query", c, m);
          const { errorData: d } = o;
          this.remoteQuerySet.set(o.queryId, {
            success: !1,
            errorMessage: o.errorMessage,
            errorData: d !== void 0 ? Ie(d) : void 0,
            logLines: o.logLines,
          });
          break;
        }
        case "QueryRemoved": {
          this.remoteQuerySet.delete(o.queryId);
          break;
        }
        default:
          throw new Error(`Invalid modification ${o.type}`);
      }
    this.version = i.endVersion;
  }
  remoteQueryResults() {
    return this.remoteQuerySet;
  }
  timestamp() {
    return this.version.ts;
  }
}
function ac(s) {
  const i = Ql(s);
  return Ce.fromBytesLE(Array.from(i));
}
function Vp(s) {
  const i = new Uint8Array(s.toBytesLE());
  return Gl(i);
}
function Qp(s) {
  switch (s.type) {
    case "FatalError":
    case "AuthError":
    case "ActionResponse":
    case "Ping":
      return { ...s };
    case "MutationResponse":
      return s.success ? { ...s, ts: ac(s.ts) } : { ...s };
    case "Transition":
      return {
        ...s,
        startVersion: { ...s.startVersion, ts: ac(s.startVersion.ts) },
        endVersion: { ...s.endVersion, ts: ac(s.endVersion.ts) },
      };
  }
}
function Gp(s) {
  switch (s.type) {
    case "Authenticate":
    case "ModifyQuerySet":
    case "Mutation":
    case "Action":
    case "Event":
      return { ...s };
    case "Connect":
      return s.maxObservedTimestamp !== void 0
        ? { ...s, maxObservedTimestamp: Vp(s.maxObservedTimestamp) }
        : { ...s, maxObservedTimestamp: void 0 };
  }
}
var Xp = Object.defineProperty,
  Zp = (s, i, r) =>
    i in s
      ? Xp(s, i, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[i] = r),
  ye = (s, i, r) => Zp(s, typeof i != "symbol" ? i + "" : i, r);
const Kp = 1e3,
  $p = 1001,
  Jp = 1005,
  Fp = 4040;
class Ip {
  constructor(i, r, o, c) {
    ye(this, "socket"),
      ye(this, "connectionCount"),
      ye(this, "_hasEverConnected", !1),
      ye(this, "lastCloseReason"),
      ye(this, "initialBackoff"),
      ye(this, "maxBackoff"),
      ye(this, "retries"),
      ye(this, "serverInactivityThreshold"),
      ye(this, "reconnectDueToServerInactivityTimeout"),
      ye(this, "uri"),
      ye(this, "onOpen"),
      ye(this, "onResume"),
      ye(this, "onMessage"),
      ye(this, "webSocketConstructor"),
      ye(this, "logger"),
      (this.webSocketConstructor = o),
      (this.socket = { state: "disconnected" }),
      (this.connectionCount = 0),
      (this.lastCloseReason = "InitialConnect"),
      (this.initialBackoff = 100),
      (this.maxBackoff = 16e3),
      (this.retries = 0),
      (this.serverInactivityThreshold = 3e4),
      (this.reconnectDueToServerInactivityTimeout = null),
      (this.uri = i),
      (this.onOpen = r.onOpen),
      (this.onResume = r.onResume),
      (this.onMessage = r.onMessage),
      (this.logger = c),
      this.connect();
  }
  setSocketState(i) {
    (this.socket = i),
      this._logVerbose(
        `socket state changed: ${this.socket.state}, paused: ${
          "paused" in this.socket ? this.socket.paused : void 0
        }`
      );
  }
  connect() {
    if (this.socket.state === "terminated") return;
    if (this.socket.state !== "disconnected" && this.socket.state !== "stopped")
      throw new Error(
        "Didn't start connection from disconnected state: " + this.socket.state
      );
    const i = new this.webSocketConstructor(this.uri);
    this._logVerbose("constructed WebSocket"),
      this.setSocketState({ state: "connecting", ws: i, paused: "no" }),
      this.resetServerInactivityTimeout(),
      (i.onopen = () => {
        if (
          (this.logger.logVerbose("begin ws.onopen"),
          this.socket.state !== "connecting")
        )
          throw new Error("onopen called with socket not in connecting state");
        this.setSocketState({
          state: "ready",
          ws: i,
          paused: this.socket.paused === "yes" ? "uninitialized" : "no",
        }),
          this.resetServerInactivityTimeout(),
          this.socket.paused === "no" &&
            ((this._hasEverConnected = !0),
            this.onOpen({
              connectionCount: this.connectionCount,
              lastCloseReason: this.lastCloseReason,
            })),
          this.lastCloseReason !== "InitialConnect" &&
            this.logger.log("WebSocket reconnected"),
          (this.connectionCount += 1),
          (this.lastCloseReason = null);
      }),
      (i.onerror = (r) => {
        const o = r.message;
        this.logger.log(`WebSocket error: ${o}`);
      }),
      (i.onmessage = (r) => {
        this.resetServerInactivityTimeout();
        const o = Qp(JSON.parse(r.data));
        this._logVerbose(`received ws message with type ${o.type}`),
          this.onMessage(o).hasSyncedPastLastReconnect && (this.retries = 0);
      }),
      (i.onclose = (r) => {
        if (
          (this._logVerbose("begin ws.onclose"),
          this.lastCloseReason === null &&
            (this.lastCloseReason = r.reason ?? "OnCloseInvoked"),
          r.code !== Kp && r.code !== $p && r.code !== Jp && r.code !== Fp)
        ) {
          let o = `WebSocket closed with code ${r.code}`;
          r.reason && (o += `: ${r.reason}`), this.logger.log(o);
        }
        this.scheduleReconnect();
      });
  }
  socketState() {
    return this.socket.state;
  }
  sendMessage(i) {
    const r = {
      type: i.type,
      ...(i.type === "Authenticate" && i.tokenType === "User"
        ? { value: `...${i.value.slice(-7)}` }
        : {}),
    };
    if (this.socket.state === "ready" && this.socket.paused === "no") {
      const o = Gp(i),
        c = JSON.stringify(o);
      try {
        this.socket.ws.send(c);
      } catch (d) {
        this.logger.log(
          `Failed to send message on WebSocket, reconnecting: ${d}`
        ),
          this.closeAndReconnect("FailedToSendMessage");
      }
      return (
        this._logVerbose(
          `sent message with type ${i.type}: ${JSON.stringify(r)}`
        ),
        !0
      );
    }
    return (
      this._logVerbose(
        `message not sent (socket state: ${this.socket.state}, paused: ${
          "paused" in this.socket ? this.socket.paused : void 0
        }): ${JSON.stringify(r)}`
      ),
      !1
    );
  }
  resetServerInactivityTimeout() {
    this.socket.state !== "terminated" &&
      (this.reconnectDueToServerInactivityTimeout !== null &&
        (clearTimeout(this.reconnectDueToServerInactivityTimeout),
        (this.reconnectDueToServerInactivityTimeout = null)),
      (this.reconnectDueToServerInactivityTimeout = setTimeout(() => {
        this.closeAndReconnect("InactiveServer");
      }, this.serverInactivityThreshold)));
  }
  scheduleReconnect() {
    this.socket = { state: "disconnected" };
    const i = this.nextBackoff();
    this.logger.log(`Attempting reconnect in ${i}ms`),
      setTimeout(() => this.connect(), i);
  }
  closeAndReconnect(i) {
    switch (
      (this._logVerbose(`begin closeAndReconnect with reason ${i}`),
      this.socket.state)
    ) {
      case "disconnected":
      case "terminated":
      case "stopped":
        return;
      case "connecting":
      case "ready": {
        (this.lastCloseReason = i), this.close(), this.scheduleReconnect();
        return;
      }
      default:
        this.socket;
    }
  }
  close() {
    switch (this.socket.state) {
      case "disconnected":
      case "terminated":
      case "stopped":
        return Promise.resolve();
      case "connecting": {
        const i = this.socket.ws;
        return new Promise((r) => {
          (i.onclose = () => {
            this._logVerbose("Closed after connecting"), r();
          }),
            (i.onopen = () => {
              this._logVerbose("Opened after connecting"), i.close();
            });
        });
      }
      case "ready": {
        this._logVerbose("ws.close called");
        const i = this.socket.ws,
          r = new Promise((o) => {
            i.onclose = () => {
              o();
            };
          });
        return i.close(), r;
      }
      default:
        return this.socket, Promise.resolve();
    }
  }
  terminate() {
    switch (
      (this.reconnectDueToServerInactivityTimeout &&
        clearTimeout(this.reconnectDueToServerInactivityTimeout),
      this.socket.state)
    ) {
      case "terminated":
      case "stopped":
      case "disconnected":
      case "connecting":
      case "ready": {
        const i = this.close();
        return this.setSocketState({ state: "terminated" }), i;
      }
      default:
        throw (
          (this.socket,
          new Error(`Invalid websocket state: ${this.socket.state}`))
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
        const i = this.close();
        return (this.socket = { state: "stopped" }), i;
      }
      default:
        return this.socket, Promise.resolve();
    }
  }
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
    this.connect();
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
  resume() {
    switch (this.socket.state) {
      case "connecting":
        this.socket = { ...this.socket, paused: "no" };
        return;
      case "ready":
        this.socket.paused === "uninitialized"
          ? ((this.socket = { ...this.socket, paused: "no" }),
            this.onOpen({
              connectionCount: this.connectionCount,
              lastCloseReason: this.lastCloseReason,
            }))
          : this.socket.paused === "yes" &&
            ((this.socket = { ...this.socket, paused: "no" }), this.onResume());
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
      connectionRetries: this.retries,
    };
  }
  _logVerbose(i) {
    this.logger.logVerbose(i);
  }
  nextBackoff() {
    const i = this.initialBackoff * Math.pow(2, this.retries);
    this.retries += 1;
    const r = Math.min(i, this.maxBackoff),
      o = r * (Math.random() - 0.5);
    return r + o;
  }
}
function Wp() {
  return Pp();
}
function Pp() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (s) => {
    const i = (Math.random() * 16) | 0;
    return (s === "x" ? i : (i & 3) | 8).toString(16);
  });
}
class Ul extends Error {}
Ul.prototype.name = "InvalidTokenError";
function t1(s) {
  return decodeURIComponent(
    atob(s).replace(/(.)/g, (i, r) => {
      let o = r.charCodeAt(0).toString(16).toUpperCase();
      return o.length < 2 && (o = "0" + o), "%" + o;
    })
  );
}
function e1(s) {
  let i = s.replace(/-/g, "+").replace(/_/g, "/");
  switch (i.length % 4) {
    case 0:
      break;
    case 2:
      i += "==";
      break;
    case 3:
      i += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return t1(i);
  } catch {
    return atob(i);
  }
}
function n1(s, i) {
  if (typeof s != "string")
    throw new Ul("Invalid token specified: must be a string");
  i || (i = {});
  const r = i.header === !0 ? 0 : 1,
    o = s.split(".")[r];
  if (typeof o != "string")
    throw new Ul(`Invalid token specified: missing part #${r + 1}`);
  let c;
  try {
    c = e1(o);
  } catch (d) {
    throw new Ul(
      `Invalid token specified: invalid base64 for part #${r + 1} (${
        d.message
      })`
    );
  }
  try {
    return JSON.parse(c);
  } catch (d) {
    throw new Ul(
      `Invalid token specified: invalid json for part #${r + 1} (${d.message})`
    );
  }
}
var a1 = Object.defineProperty,
  i1 = (s, i, r) =>
    i in s
      ? a1(s, i, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[i] = r),
  Ge = (s, i, r) => i1(s, typeof i != "symbol" ? i + "" : i, r);
const l1 = 20 * 24 * 60 * 60 * 1e3,
  ag = 2;
class s1 {
  constructor(i, r, o) {
    Ge(this, "authState", { state: "noAuth" }),
      Ge(this, "configVersion", 0),
      Ge(this, "syncState"),
      Ge(this, "authenticate"),
      Ge(this, "stopSocket"),
      Ge(this, "tryRestartSocket"),
      Ge(this, "pauseSocket"),
      Ge(this, "resumeSocket"),
      Ge(this, "clearAuth"),
      Ge(this, "logger"),
      Ge(this, "refreshTokenLeewaySeconds"),
      Ge(this, "tokenConfirmationAttempts", 0),
      (this.syncState = i),
      (this.authenticate = r.authenticate),
      (this.stopSocket = r.stopSocket),
      (this.tryRestartSocket = r.tryRestartSocket),
      (this.pauseSocket = r.pauseSocket),
      (this.resumeSocket = r.resumeSocket),
      (this.clearAuth = r.clearAuth),
      (this.logger = o.logger),
      (this.refreshTokenLeewaySeconds = o.refreshTokenLeewaySeconds);
  }
  async setConfig(i, r) {
    this.resetAuthState(),
      this._logVerbose("pausing WS for auth token fetch"),
      this.pauseSocket();
    const o = await this.fetchTokenAndGuardAgainstRace(i, {
      forceRefreshToken: !1,
    });
    o.isFromOutdatedConfig ||
      (o.value
        ? (this.setAuthState({
            state: "waitingForServerConfirmationOfCachedToken",
            config: { fetchToken: i, onAuthChange: r },
            hasRetried: !1,
          }),
          this.authenticate(o.value))
        : (this.setAuthState({
            state: "initialRefetch",
            config: { fetchToken: i, onAuthChange: r },
          }),
          await this.refetchToken()),
      this._logVerbose("resuming WS after auth token fetch"),
      this.resumeSocket());
  }
  onTransition(i) {
    if (
      this.syncState.isCurrentOrNewerAuthVersion(i.endVersion.identity) &&
      !(i.endVersion.identity <= i.startVersion.identity)
    ) {
      if (
        this.authState.state === "waitingForServerConfirmationOfCachedToken"
      ) {
        this._logVerbose("server confirmed auth token is valid"),
          this.refetchToken(),
          this.authState.config.onAuthChange(!0);
        return;
      }
      this.authState.state === "waitingForServerConfirmationOfFreshToken" &&
        (this._logVerbose("server confirmed new auth token is valid"),
        this.scheduleTokenRefetch(this.authState.token),
        (this.tokenConfirmationAttempts = 0),
        this.authState.hadAuth || this.authState.config.onAuthChange(!0));
    }
  }
  onAuthError(i) {
    if (
      i.authUpdateAttempted === !1 &&
      (this.authState.state === "waitingForServerConfirmationOfFreshToken" ||
        this.authState.state === "waitingForServerConfirmationOfCachedToken")
    ) {
      this._logVerbose("ignoring non-auth token expired error");
      return;
    }
    const { baseVersion: r } = i;
    if (!this.syncState.isCurrentOrNewerAuthVersion(r + 1)) {
      this._logVerbose("ignoring auth error for previous auth attempt");
      return;
    }
    this.tryToReauthenticate(i);
  }
  async tryToReauthenticate(i) {
    if (
      (this._logVerbose(`attempting to reauthenticate: ${i.error}`),
      this.authState.state === "noAuth" ||
        (this.authState.state === "waitingForServerConfirmationOfFreshToken" &&
          this.tokenConfirmationAttempts >= ag))
    ) {
      this.logger.error(
        `Failed to authenticate: "${i.error}", check your server auth config`
      ),
        this.syncState.hasAuth() && this.syncState.clearAuth(),
        this.authState.state !== "noAuth" &&
          this.setAndReportAuthFailed(this.authState.config.onAuthChange);
      return;
    }
    this.authState.state === "waitingForServerConfirmationOfFreshToken" &&
      (this.tokenConfirmationAttempts++,
      this._logVerbose(
        `retrying reauthentication, ${
          ag - this.tokenConfirmationAttempts
        } attempts remaining`
      )),
      await this.stopSocket();
    const r = await this.fetchTokenAndGuardAgainstRace(
      this.authState.config.fetchToken,
      { forceRefreshToken: !0 }
    );
    r.isFromOutdatedConfig ||
      (r.value && this.syncState.isNewAuth(r.value)
        ? (this.authenticate(r.value),
          this.setAuthState({
            state: "waitingForServerConfirmationOfFreshToken",
            config: this.authState.config,
            token: r.value,
            hadAuth:
              this.authState.state === "notRefetching" ||
              this.authState.state === "waitingForScheduledRefetch",
          }))
        : (this._logVerbose(
            "reauthentication failed, could not fetch a new token"
          ),
          this.syncState.hasAuth() && this.syncState.clearAuth(),
          this.setAndReportAuthFailed(this.authState.config.onAuthChange)),
      this.tryRestartSocket());
  }
  async refetchToken() {
    if (this.authState.state === "noAuth") return;
    this._logVerbose("refetching auth token");
    const i = await this.fetchTokenAndGuardAgainstRace(
      this.authState.config.fetchToken,
      { forceRefreshToken: !0 }
    );
    i.isFromOutdatedConfig ||
      (i.value
        ? this.syncState.isNewAuth(i.value)
          ? (this.setAuthState({
              state: "waitingForServerConfirmationOfFreshToken",
              hadAuth: this.syncState.hasAuth(),
              token: i.value,
              config: this.authState.config,
            }),
            this.authenticate(i.value))
          : this.setAuthState({
              state: "notRefetching",
              config: this.authState.config,
            })
        : (this._logVerbose("refetching token failed"),
          this.syncState.hasAuth() && this.clearAuth(),
          this.setAndReportAuthFailed(this.authState.config.onAuthChange)),
      this._logVerbose(
        "restarting WS after auth token fetch (if currently stopped)"
      ),
      this.tryRestartSocket());
  }
  scheduleTokenRefetch(i) {
    if (this.authState.state === "noAuth") return;
    const r = this.decodeToken(i);
    if (!r) {
      this.logger.error(
        "Auth token is not a valid JWT, cannot refetch the token"
      );
      return;
    }
    const { iat: o, exp: c } = r;
    if (!o || !c) {
      this.logger.error(
        "Auth token does not have required fields, cannot refetch the token"
      );
      return;
    }
    const d = c - o;
    if (d <= 2) {
      this.logger.error(
        "Auth token does not live long enough, cannot refetch the token"
      );
      return;
    }
    let m = Math.min(l1, (d - this.refreshTokenLeewaySeconds) * 1e3);
    m <= 0 &&
      (this.logger.warn(
        `Refetching auth token immediately, configured leeway ${this.refreshTokenLeewaySeconds}s is larger than the token's lifetime ${d}s`
      ),
      (m = 0));
    const p = setTimeout(() => {
      this._logVerbose("running scheduled token refetch"), this.refetchToken();
    }, m);
    this.setAuthState({
      state: "waitingForScheduledRefetch",
      refetchTokenTimeoutId: p,
      config: this.authState.config,
    }),
      this._logVerbose(`scheduled preemptive auth token refetching in ${m}ms`);
  }
  async fetchTokenAndGuardAgainstRace(i, r) {
    const o = ++this.configVersion;
    this._logVerbose(`fetching token with config version ${o}`);
    const c = await i(r);
    return this.configVersion !== o
      ? (this._logVerbose(
          `stale config version, expected ${o}, got ${this.configVersion}`
        ),
        { isFromOutdatedConfig: !0 })
      : { isFromOutdatedConfig: !1, value: c };
  }
  stop() {
    this.resetAuthState(),
      this.configVersion++,
      this._logVerbose(`config version bumped to ${this.configVersion}`);
  }
  setAndReportAuthFailed(i) {
    i(!1), this.resetAuthState();
  }
  resetAuthState() {
    this.setAuthState({ state: "noAuth" });
  }
  setAuthState(i) {
    const r =
      i.state === "waitingForServerConfirmationOfFreshToken"
        ? {
            hadAuth: i.hadAuth,
            state: i.state,
            token: `...${i.token.slice(-7)}`,
          }
        : { state: i.state };
    switch (
      (this._logVerbose(`setting auth state to ${JSON.stringify(r)}`), i.state)
    ) {
      case "waitingForScheduledRefetch":
      case "notRefetching":
      case "noAuth":
        this.tokenConfirmationAttempts = 0;
        break;
    }
    this.authState.state === "waitingForScheduledRefetch" &&
      (clearTimeout(this.authState.refetchTokenTimeoutId),
      this.syncState.markAuthCompletion()),
      (this.authState = i);
  }
  decodeToken(i) {
    try {
      return n1(i);
    } catch (r) {
      return (
        this._logVerbose(
          `Error decoding token: ${
            r instanceof Error ? r.message : "Unknown error"
          }`
        ),
        null
      );
    }
  }
  _logVerbose(i) {
    this.logger.logVerbose(`${i} [v${this.configVersion}]`);
  }
}
const r1 = [
  "convexClientConstructed",
  "convexWebSocketOpen",
  "convexFirstMessageReceived",
];
function u1(s, i) {
  const r = { sessionId: i };
  typeof performance > "u" ||
    !performance.mark ||
    performance.mark(s, { detail: r });
}
function o1(s) {
  let i = s.name.slice(6);
  return (
    (i = i.charAt(0).toLowerCase() + i.slice(1)),
    { name: i, startTime: s.startTime }
  );
}
function c1(s) {
  if (typeof performance > "u" || !performance.getEntriesByName) return [];
  const i = [];
  for (const r of r1) {
    const o = performance
      .getEntriesByName(r)
      .filter((c) => c.entryType === "mark")
      .filter((c) => c.detail.sessionId === s);
    i.push(...o);
  }
  return i.map(o1);
}
var f1 = Object.defineProperty,
  d1 = (s, i, r) =>
    i in s
      ? f1(s, i, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[i] = r),
  fe = (s, i, r) => d1(s, typeof i != "symbol" ? i + "" : i, r);
class h1 {
  constructor(i, r, o) {
    if (
      (fe(this, "address"),
      fe(this, "state"),
      fe(this, "requestManager"),
      fe(this, "webSocketManager"),
      fe(this, "authenticationManager"),
      fe(this, "remoteQuerySet"),
      fe(this, "optimisticQueryResults"),
      fe(this, "_transitionHandlerCounter", 0),
      fe(this, "_nextRequestId"),
      fe(this, "_onTransitionFns", new Map()),
      fe(this, "_sessionId"),
      fe(this, "firstMessageReceived", !1),
      fe(this, "debug"),
      fe(this, "logger"),
      fe(this, "maxObservedTimestamp"),
      fe(this, "mark", (C) => {
        this.debug && u1(C, this.sessionId);
      }),
      typeof i == "object")
    )
      throw new Error(
        "Passing a ClientConfig object is no longer supported. Pass the URL of the Convex deployment as a string directly."
      );
    (o == null ? void 0 : o.skipConvexDeploymentUrlCheck) !== !0 && Qg(i),
      (o = { ...o });
    const c = o.authRefreshTokenLeewaySeconds ?? 2;
    let d = o.webSocketConstructor;
    if (!d && typeof WebSocket > "u")
      throw new Error(
        "No WebSocket global variable defined! To use Convex in an environment without WebSocket try the HTTP client: https://docs.convex.dev/api/classes/browser.ConvexHttpClient"
      );
    (d = d || WebSocket),
      (this.debug = o.reportDebugInfoToConvex ?? !1),
      (this.address = i),
      (this.logger =
        o.logger === !1
          ? Vc({ verbose: o.verbose ?? !1 })
          : o.logger !== !0 && o.logger
          ? o.logger
          : Yc({ verbose: o.verbose ?? !1 }));
    const m = i.search("://");
    if (m === -1) throw new Error("Provided address was not an absolute URL.");
    const p = i.substring(m + 3),
      S = i.substring(0, m);
    let g;
    if (S === "http") g = "ws";
    else if (S === "https") g = "wss";
    else throw new Error(`Unknown parent protocol ${S}`);
    const O = `${g}://${p}/api/${qa}/sync`;
    (this.state = new Ep()),
      (this.remoteQuerySet = new ng(
        (C) => this.state.queryPath(C),
        this.logger
      )),
      (this.requestManager = new Rp(this.logger)),
      (this.authenticationManager = new s1(
        this.state,
        {
          authenticate: (C) => {
            const H = this.state.setAuth(C);
            return this.webSocketManager.sendMessage(H), H.baseVersion;
          },
          stopSocket: () => this.webSocketManager.stop(),
          tryRestartSocket: () => this.webSocketManager.tryRestart(),
          pauseSocket: () => {
            this.webSocketManager.pause(), this.state.pause();
          },
          resumeSocket: () => this.webSocketManager.resume(),
          clearAuth: () => {
            this.clearAuth();
          },
        },
        { logger: this.logger, refreshTokenLeewaySeconds: c }
      )),
      (this.optimisticQueryResults = new jp()),
      this.addOnTransitionHandler((C) => {
        r(C.queries.map((H) => H.token));
      }),
      (this._nextRequestId = 0),
      (this._sessionId = Wp());
    const { unsavedChangesWarning: v } = o;
    if (typeof window > "u" || typeof window.addEventListener > "u") {
      if (v === !0)
        throw new Error(
          "unsavedChangesWarning requested, but window.addEventListener not found! Remove {unsavedChangesWarning: true} from Convex client options."
        );
    } else
      v !== !1 &&
        window.addEventListener("beforeunload", (C) => {
          if (this.requestManager.hasIncompleteRequests()) {
            C.preventDefault();
            const H =
              "Are you sure you want to leave? Your changes may not be saved.";
            return ((C || window.event).returnValue = H), H;
          }
        });
    (this.webSocketManager = new Ip(
      O,
      {
        onOpen: (C) => {
          this.mark("convexWebSocketOpen"),
            this.webSocketManager.sendMessage({
              ...C,
              type: "Connect",
              sessionId: this._sessionId,
              maxObservedTimestamp: this.maxObservedTimestamp,
            });
          const H = new Set(this.remoteQuerySet.remoteQueryResults().keys());
          this.remoteQuerySet = new ng(
            (V) => this.state.queryPath(V),
            this.logger
          );
          const [Z, at] = this.state.restart(H);
          at && this.webSocketManager.sendMessage(at),
            this.webSocketManager.sendMessage(Z);
          for (const V of this.requestManager.restart())
            this.webSocketManager.sendMessage(V);
        },
        onResume: () => {
          const [C, H] = this.state.resume();
          H && this.webSocketManager.sendMessage(H),
            C && this.webSocketManager.sendMessage(C);
          for (const Z of this.requestManager.resume())
            this.webSocketManager.sendMessage(Z);
        },
        onMessage: (C) => {
          switch (
            (this.firstMessageReceived ||
              ((this.firstMessageReceived = !0),
              this.mark("convexFirstMessageReceived"),
              this.reportMarks()),
            C.type)
          ) {
            case "Transition": {
              this.observedTimestamp(C.endVersion.ts),
                this.authenticationManager.onTransition(C),
                this.remoteQuerySet.transition(C),
                this.state.transition(C);
              const H = this.requestManager.removeCompleted(
                this.remoteQuerySet.timestamp()
              );
              this.notifyOnQueryResultChanges(H);
              break;
            }
            case "MutationResponse": {
              C.success && this.observedTimestamp(C.ts);
              const H = this.requestManager.onResponse(C);
              H !== null &&
                this.notifyOnQueryResultChanges(
                  new Map([[H.requestId, H.result]])
                );
              break;
            }
            case "ActionResponse": {
              this.requestManager.onResponse(C);
              break;
            }
            case "AuthError": {
              this.authenticationManager.onAuthError(C);
              break;
            }
            case "FatalError": {
              const H = Ap(this.logger, C.error);
              throw (this.webSocketManager.terminate(), H);
            }
          }
          return {
            hasSyncedPastLastReconnect: this.hasSyncedPastLastReconnect(),
          };
        },
      },
      d,
      this.logger
    )),
      this.mark("convexClientConstructed");
  }
  hasSyncedPastLastReconnect() {
    return (
      this.requestManager.hasSyncedPastLastReconnect() ||
      this.state.hasSyncedPastLastReconnect()
    );
  }
  observedTimestamp(i) {
    (this.maxObservedTimestamp === void 0 ||
      this.maxObservedTimestamp.lessThanOrEqual(i)) &&
      (this.maxObservedTimestamp = i);
  }
  getMaxObservedTimestamp() {
    return this.maxObservedTimestamp;
  }
  notifyOnQueryResultChanges(i) {
    const r = this.remoteQuerySet.remoteQueryResults(),
      o = new Map();
    for (const [d, m] of r) {
      const p = this.state.queryToken(d);
      if (p !== null) {
        const S = {
          result: m,
          udfPath: this.state.queryPath(d),
          args: this.state.queryArgs(d),
        };
        o.set(p, S);
      }
    }
    const c = this.optimisticQueryResults.ingestQueryResultsFromServer(
      o,
      new Set(i.keys())
    );
    this.handleTransition({
      queries: c.map((d) => ({
        token: d,
        modification: { kind: "Updated", result: o.get(d).result },
      })),
      reflectedMutations: Array.from(i).map(([d, m]) => ({
        requestId: d,
        result: m,
      })),
      timestamp: this.remoteQuerySet.timestamp(),
    });
  }
  handleTransition(i) {
    for (const r of this._onTransitionFns.values()) r(i);
  }
  addOnTransitionHandler(i) {
    const r = this._transitionHandlerCounter++;
    return (
      this._onTransitionFns.set(r, i), () => this._onTransitionFns.delete(r)
    );
  }
  setAuth(i, r) {
    this.authenticationManager.setConfig(i, r);
  }
  hasAuth() {
    return this.state.hasAuth();
  }
  setAdminAuth(i, r) {
    const o = this.state.setAdminAuth(i, r);
    this.webSocketManager.sendMessage(o);
  }
  clearAuth() {
    const i = this.state.clearAuth();
    this.webSocketManager.sendMessage(i);
  }
  subscribe(i, r, o) {
    const c = De(r),
      {
        modification: d,
        queryToken: m,
        unsubscribe: p,
      } = this.state.subscribe(
        i,
        c,
        o == null ? void 0 : o.journal,
        o == null ? void 0 : o.componentPath
      );
    return (
      d !== null && this.webSocketManager.sendMessage(d),
      {
        queryToken: m,
        unsubscribe: () => {
          const S = p();
          S && this.webSocketManager.sendMessage(S);
        },
      }
    );
  }
  localQueryResult(i, r) {
    const o = De(r),
      c = Ua(i, o);
    return this.optimisticQueryResults.queryResult(c);
  }
  localQueryResultByToken(i) {
    return this.optimisticQueryResults.queryResult(i);
  }
  hasLocalQueryResultByToken(i) {
    return this.optimisticQueryResults.hasQueryResult(i);
  }
  localQueryLogs(i, r) {
    const o = De(r),
      c = Ua(i, o);
    return this.optimisticQueryResults.queryLogs(c);
  }
  queryJournal(i, r) {
    const o = De(r),
      c = Ua(i, o);
    return this.state.queryJournal(c);
  }
  connectionState() {
    const i = this.webSocketManager.connectionState();
    return {
      hasInflightRequests: this.requestManager.hasInflightRequests(),
      isWebSocketConnected: i.isConnected,
      hasEverConnected: i.hasEverConnected,
      connectionCount: i.connectionCount,
      connectionRetries: i.connectionRetries,
      timeOfOldestInflightRequest:
        this.requestManager.timeOfOldestInflightRequest(),
      inflightMutations: this.requestManager.inflightMutations(),
      inflightActions: this.requestManager.inflightActions(),
    };
  }
  async mutation(i, r, o) {
    const c = await this.mutationInternal(i, r, o);
    if (!c.success)
      throw c.errorData !== void 0
        ? vc(c, new ja(Ci("mutation", i, c)))
        : new Error(Ci("mutation", i, c));
    return c.value;
  }
  async mutationInternal(i, r, o, c) {
    const { mutationPromise: d } = this.enqueueMutation(i, r, o, c);
    return d;
  }
  enqueueMutation(i, r, o, c) {
    const d = De(r);
    this.tryReportLongDisconnect();
    const m = this.nextRequestId;
    if ((this._nextRequestId++, o !== void 0)) {
      const O = o.optimisticUpdate;
      if (O !== void 0) {
        const v = (Z) => {
            O(Z, d);
          },
          H = this.optimisticQueryResults
            .applyOptimisticUpdate(v, m)
            .map((Z) => {
              const at = this.localQueryResultByToken(Z);
              return {
                token: Z,
                modification: {
                  kind: "Updated",
                  result:
                    at === void 0
                      ? void 0
                      : { success: !0, value: at, logLines: [] },
                },
              };
            });
        this.handleTransition({
          queries: H,
          reflectedMutations: [],
          timestamp: this.remoteQuerySet.timestamp(),
        });
      }
    }
    const p = {
        type: "Mutation",
        requestId: m,
        udfPath: i,
        componentPath: c,
        args: [Cn(d)],
      },
      S = this.webSocketManager.sendMessage(p),
      g = this.requestManager.request(p, S);
    return { requestId: m, mutationPromise: g };
  }
  async action(i, r) {
    const o = await this.actionInternal(i, r);
    if (!o.success)
      throw o.errorData !== void 0
        ? vc(o, new ja(Ci("action", i, o)))
        : new Error(Ci("action", i, o));
    return o.value;
  }
  async actionInternal(i, r, o) {
    const c = De(r),
      d = this.nextRequestId;
    this._nextRequestId++, this.tryReportLongDisconnect();
    const m = {
        type: "Action",
        requestId: d,
        udfPath: i,
        componentPath: o,
        args: [Cn(c)],
      },
      p = this.webSocketManager.sendMessage(m);
    return this.requestManager.request(m, p);
  }
  async close() {
    return this.authenticationManager.stop(), this.webSocketManager.terminate();
  }
  get url() {
    return this.address;
  }
  get nextRequestId() {
    return this._nextRequestId;
  }
  get sessionId() {
    return this._sessionId;
  }
  reportMarks() {
    if (this.debug) {
      const i = c1(this.sessionId);
      this.webSocketManager.sendMessage({
        type: "Event",
        eventType: "ClientConnect",
        event: i,
      });
    }
  }
  tryReportLongDisconnect() {
    if (!this.debug) return;
    const i = this.connectionState().timeOfOldestInflightRequest;
    if (i === null || Date.now() - i.getTime() <= 60 * 1e3) return;
    const r = `${this.address}/api/debug_event`;
    fetch(r, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Convex-Client": `npm-${qa}`,
      },
      body: JSON.stringify({ event: "LongWebsocketDisconnect" }),
    })
      .then((o) => {
        o.ok ||
          this.logger.warn("Analytics request failed with response:", o.body);
      })
      .catch((o) => {
        this.logger.warn("Analytics response failed with error:", o);
      });
  }
}
var m1 = Object.defineProperty,
  g1 = (s, i, r) =>
    i in s
      ? m1(s, i, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[i] = r),
  za = (s, i, r) => g1(s, typeof i != "symbol" ? i + "" : i, r);
const mr = 560;
class y1 {
  constructor(i, r) {
    if (
      (za(this, "address"),
      za(this, "auth"),
      za(this, "adminAuth"),
      za(this, "encodedTsPromise"),
      za(this, "debug"),
      za(this, "fetchOptions"),
      za(this, "logger"),
      typeof r == "boolean")
    )
      throw new Error(
        "skipConvexDeploymentUrlCheck as the second argument is no longer supported. Please pass an options object, `{ skipConvexDeploymentUrlCheck: true }`."
      );
    (r ?? {}).skipConvexDeploymentUrlCheck !== !0 && Qg(i),
      (this.logger =
        (r == null ? void 0 : r.logger) === !1
          ? Vc({ verbose: !1 })
          : (r == null ? void 0 : r.logger) !== !0 && r != null && r.logger
          ? r.logger
          : Yc({ verbose: !1 })),
      (this.address = i),
      (this.debug = !0);
  }
  backendUrl() {
    return `${this.address}/api`;
  }
  get url() {
    return this.address;
  }
  setAuth(i) {
    this.clearAuth(), (this.auth = i);
  }
  setAdminAuth(i, r) {
    if ((this.clearAuth(), r !== void 0)) {
      const o = new TextEncoder().encode(JSON.stringify(r)),
        c = btoa(String.fromCodePoint(...o));
      this.adminAuth = `${i}:${c}`;
    } else this.adminAuth = i;
  }
  clearAuth() {
    (this.auth = void 0), (this.adminAuth = void 0);
  }
  setDebug(i) {
    this.debug = i;
  }
  setFetchOptions(i) {
    this.fetchOptions = i;
  }
  async consistentQuery(i, ...r) {
    const o = De(r[0]),
      c = this.getTimestamp();
    return await this.queryInner(i, o, { timestampPromise: c });
  }
  async getTimestamp() {
    return this.encodedTsPromise
      ? this.encodedTsPromise
      : (this.encodedTsPromise = this.getTimestampInner());
  }
  async getTimestampInner() {
    const i = fetch,
      r = { "Content-Type": "application/json", "Convex-Client": `npm-${qa}` },
      o = await i(`${this.address}/api/query_ts`, {
        ...this.fetchOptions,
        method: "POST",
        headers: r,
      });
    if (!o.ok) throw new Error(await o.text());
    const { ts: c } = await o.json();
    return c;
  }
  async query(i, ...r) {
    const o = De(r[0]);
    return await this.queryInner(i, o, {});
  }
  async queryInner(i, r, o) {
    const c = cn(i),
      d = [Cn(r)],
      m = { "Content-Type": "application/json", "Convex-Client": `npm-${qa}` };
    this.adminAuth
      ? (m.Authorization = `Convex ${this.adminAuth}`)
      : this.auth && (m.Authorization = `Bearer ${this.auth}`);
    const p = fetch,
      S = o.timestampPromise ? await o.timestampPromise : void 0,
      g = JSON.stringify({
        path: c,
        format: "convex_encoded_json",
        args: d,
        ...(S ? { ts: S } : {}),
      }),
      O = S ? `${this.address}/api/query_at_ts` : `${this.address}/api/query`,
      v = await p(O, {
        ...this.fetchOptions,
        body: g,
        method: "POST",
        headers: m,
      });
    if (!v.ok && v.status !== mr) throw new Error(await v.text());
    const C = await v.json();
    if (this.debug)
      for (const H of C.logLines ?? []) ua(this.logger, "info", "query", c, H);
    switch (C.status) {
      case "success":
        return Ie(C.value);
      case "error":
        throw C.errorData !== void 0
          ? gr(C.errorData, new ja(C.errorMessage))
          : new Error(C.errorMessage);
      default:
        throw new Error(`Invalid response: ${JSON.stringify(C)}`);
    }
  }
  async mutation(i, ...r) {
    const o = De(r[0]),
      c = cn(i),
      d = JSON.stringify({
        path: c,
        format: "convex_encoded_json",
        args: [Cn(o)],
      }),
      m = { "Content-Type": "application/json", "Convex-Client": `npm-${qa}` };
    this.adminAuth
      ? (m.Authorization = `Convex ${this.adminAuth}`)
      : this.auth && (m.Authorization = `Bearer ${this.auth}`);
    const S = await fetch(`${this.address}/api/mutation`, {
      ...this.fetchOptions,
      body: d,
      method: "POST",
      headers: m,
    });
    if (!S.ok && S.status !== mr) throw new Error(await S.text());
    const g = await S.json();
    if (this.debug)
      for (const O of g.logLines ?? [])
        ua(this.logger, "info", "mutation", c, O);
    switch (g.status) {
      case "success":
        return Ie(g.value);
      case "error":
        throw g.errorData !== void 0
          ? gr(g.errorData, new ja(g.errorMessage))
          : new Error(g.errorMessage);
      default:
        throw new Error(`Invalid response: ${JSON.stringify(g)}`);
    }
  }
  async action(i, ...r) {
    const o = De(r[0]),
      c = cn(i),
      d = JSON.stringify({
        path: c,
        format: "convex_encoded_json",
        args: [Cn(o)],
      }),
      m = { "Content-Type": "application/json", "Convex-Client": `npm-${qa}` };
    this.adminAuth
      ? (m.Authorization = `Convex ${this.adminAuth}`)
      : this.auth && (m.Authorization = `Bearer ${this.auth}`);
    const S = await fetch(`${this.address}/api/action`, {
      ...this.fetchOptions,
      body: d,
      method: "POST",
      headers: m,
    });
    if (!S.ok && S.status !== mr) throw new Error(await S.text());
    const g = await S.json();
    if (this.debug)
      for (const O of g.logLines ?? []) ua(this.logger, "info", "action", c, O);
    switch (g.status) {
      case "success":
        return Ie(g.value);
      case "error":
        throw g.errorData !== void 0
          ? gr(g.errorData, new ja(g.errorMessage))
          : new Error(g.errorMessage);
      default:
        throw new Error(`Invalid response: ${JSON.stringify(g)}`);
    }
  }
  async function(i, r, ...o) {
    const c = De(o[0]),
      d = typeof i == "string" ? i : cn(i),
      m = JSON.stringify({
        componentPath: r,
        path: d,
        format: "convex_encoded_json",
        args: Cn(c),
      }),
      p = { "Content-Type": "application/json", "Convex-Client": `npm-${qa}` };
    this.adminAuth
      ? (p.Authorization = `Convex ${this.adminAuth}`)
      : this.auth && (p.Authorization = `Bearer ${this.auth}`);
    const g = await fetch(`${this.address}/api/function`, {
      ...this.fetchOptions,
      body: m,
      method: "POST",
      headers: p,
    });
    if (!g.ok && g.status !== mr) throw new Error(await g.text());
    const O = await g.json();
    if (this.debug)
      for (const v of O.logLines ?? []) ua(this.logger, "info", "any", d, v);
    switch (O.status) {
      case "success":
        return Ie(O.value);
      case "error":
        throw O.errorData !== void 0
          ? gr(O.errorData, new ja(O.errorMessage))
          : new Error(O.errorMessage);
      default:
        throw new Error(`Invalid response: ${JSON.stringify(O)}`);
    }
  }
}
function gr(s, i) {
  return (i.data = Ie(s)), i;
}
var v1 = Object.defineProperty,
  p1 = (s, i, r) =>
    i in s
      ? v1(s, i, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[i] = r),
  sa = (s, i, r) => p1(s, typeof i != "symbol" ? i + "" : i, r);
if (typeof B > "u") throw new Error("Required dependency 'react' not found");
class b1 {
  constructor(i, r) {
    if (
      (sa(this, "address"),
      sa(this, "cachedSync"),
      sa(this, "listeners"),
      sa(this, "options"),
      sa(this, "closed", !1),
      sa(this, "_logger"),
      sa(this, "adminAuth"),
      sa(this, "fakeUserIdentity"),
      i === void 0)
    )
      throw new Error(
        "No address provided to ConvexReactClient.\nIf trying to deploy to production, make sure to follow all the instructions found at https://docs.convex.dev/production/hosting/\nIf running locally, make sure to run `convex dev` and ensure the .env.local file is populated."
      );
    if (typeof i != "string")
      throw new Error(
        `ConvexReactClient requires a URL like 'https://happy-otter-123.convex.cloud', received something of type ${typeof i} instead.`
      );
    if (!i.includes("://"))
      throw new Error("Provided address was not an absolute URL.");
    (this.address = i),
      (this.listeners = new Map()),
      (this._logger =
        (r == null ? void 0 : r.logger) === !1
          ? Vc({ verbose: (r == null ? void 0 : r.verbose) ?? !1 })
          : (r == null ? void 0 : r.logger) !== !0 && r != null && r.logger
          ? r.logger
          : Yc({ verbose: (r == null ? void 0 : r.verbose) ?? !1 })),
      (this.options = { ...r, logger: this._logger });
  }
  get sync() {
    if (this.closed)
      throw new Error("ConvexReactClient has already been closed.");
    return this.cachedSync
      ? this.cachedSync
      : ((this.cachedSync = new h1(
          this.address,
          (i) => this.transition(i),
          this.options
        )),
        this.adminAuth &&
          this.cachedSync.setAdminAuth(this.adminAuth, this.fakeUserIdentity),
        this.cachedSync);
  }
  setAuth(i, r) {
    if (typeof i == "string")
      throw new Error(
        "Passing a string to ConvexReactClient.setAuth is no longer supported, please upgrade to passing in an async function to handle reauthentication."
      );
    this.sync.setAuth(i, r ?? (() => {}));
  }
  clearAuth() {
    this.sync.clearAuth();
  }
  setAdminAuth(i, r) {
    if (((this.adminAuth = i), (this.fakeUserIdentity = r), this.closed))
      throw new Error("ConvexReactClient has already been closed.");
    this.cachedSync && this.sync.setAdminAuth(i, r);
  }
  watchQuery(i, ...r) {
    const [o, c] = r,
      d = cn(i);
    return {
      onUpdate: (m) => {
        const { queryToken: p, unsubscribe: S } = this.sync.subscribe(d, o, c),
          g = this.listeners.get(p);
        return (
          g !== void 0 ? g.add(m) : this.listeners.set(p, new Set([m])),
          () => {
            if (this.closed) return;
            const O = this.listeners.get(p);
            O.delete(m), O.size === 0 && this.listeners.delete(p), S();
          }
        );
      },
      localQueryResult: () => {
        if (this.cachedSync) return this.cachedSync.localQueryResult(d, o);
      },
      localQueryLogs: () => {
        if (this.cachedSync) return this.cachedSync.localQueryLogs(d, o);
      },
      journal: () => {
        if (this.cachedSync) return this.cachedSync.queryJournal(d, o);
      },
    };
  }
  mutation(i, ...r) {
    const [o, c] = r,
      d = cn(i);
    return this.sync.mutation(d, o, c);
  }
  action(i, ...r) {
    const o = cn(i);
    return this.sync.action(o, ...r);
  }
  query(i, ...r) {
    const o = this.watchQuery(i, ...r),
      c = o.localQueryResult();
    return c !== void 0
      ? Promise.resolve(c)
      : new Promise((d, m) => {
          const p = o.onUpdate(() => {
            p();
            try {
              d(o.localQueryResult());
            } catch (S) {
              m(S);
            }
          });
        });
  }
  connectionState() {
    return this.sync.connectionState();
  }
  get logger() {
    return this._logger;
  }
  async close() {
    if (((this.closed = !0), (this.listeners = new Map()), this.cachedSync)) {
      const i = this.cachedSync;
      (this.cachedSync = void 0), await i.close();
    }
  }
  transition(i) {
    for (const r of i) {
      const o = this.listeners.get(r);
      if (o) for (const c of o) c();
    }
  }
}
const S1 = B.createContext(void 0),
  x1 = ({ client: s, children: i }) =>
    B.createElement(S1.Provider, { value: s }, i),
  Wg = gt.createContext(void 0);
function A1() {
  const s = gt.useContext(Wg);
  if (s === void 0)
    throw new Error(
      "Could not find `ConvexProviderWithAuth` (or `ConvexProviderWithClerk` or `ConvexProviderWithAuth0`) as an ancestor component. This component may be missing, or you might have two instances of the `convex/react` module loaded in your project."
    );
  return s;
}
function T1({ children: s, client: i, useAuth: r }) {
  const { isLoading: o, isAuthenticated: c, fetchAccessToken: d } = r(),
    [m, p] = gt.useState(null);
  return (
    o && m !== null && p(null),
    !o && !c && m !== !1 && p(!1),
    B.createElement(
      Wg.Provider,
      { value: { isLoading: m === null, isAuthenticated: c && (m ?? !1) } },
      B.createElement(w1, {
        authProviderAuthenticated: c,
        fetchAccessToken: d,
        authProviderLoading: o,
        client: i,
        setIsConvexAuthenticated: p,
      }),
      B.createElement(x1, { client: i }, s),
      B.createElement(E1, {
        authProviderAuthenticated: c,
        fetchAccessToken: d,
        authProviderLoading: o,
        client: i,
        setIsConvexAuthenticated: p,
      })
    )
  );
}
function w1({
  authProviderAuthenticated: s,
  fetchAccessToken: i,
  authProviderLoading: r,
  client: o,
  setIsConvexAuthenticated: c,
}) {
  return (
    gt.useEffect(() => {
      let d = !0;
      if (s)
        return (
          o.setAuth(i, (m) => {
            d && c(() => m);
          }),
          () => {
            (d = !1), c((m) => (m ? !1 : null));
          }
        );
    }, [s, i, r, o, c]),
    null
  );
}
function E1({
  authProviderAuthenticated: s,
  fetchAccessToken: i,
  authProviderLoading: r,
  client: o,
  setIsConvexAuthenticated: c,
}) {
  return (
    gt.useEffect(() => {
      if (s)
        return () => {
          o.clearAuth(), c(() => null);
        };
    }, [s, i, r, o, c]),
    null
  );
}
const Pg = gt.createContext(void 0),
  t0 = gt.createContext(void 0);
function O1() {
  return gt.useContext(t0);
}
const _1 = gt.createContext(null),
  ic = "__convexAuthOAuthVerifier",
  yr = "__convexAuthJWT",
  vr = "__convexAuthRefreshToken",
  ig = "__convexAuthServerStateFetchTime";
function R1({
  client: s,
  serverState: i,
  onChange: r,
  storage: o,
  storageNamespace: c,
  replaceURL: d,
  children: m,
}) {
  const p = gt.useRef((i == null ? void 0 : i._state.token) ?? null),
    [S, g] = gt.useState(p.current === null),
    [O, v] = gt.useState(p.current),
    C = s.verbose ?? !1,
    H = gt.useCallback(
      (lt) => {
        C && console.debug(`${new Date().toISOString()} ${lt}`);
      },
      [C]
    ),
    {
      storageSet: Z,
      storageGet: at,
      storageRemove: V,
      storageKey: ot,
    } = M1(o, c),
    [mt, nt] = gt.useState(!1),
    ct = gt.useCallback(
      async (lt) => {
        const yt = p.current !== null;
        let $;
        if (lt.tokens === null)
          (p.current = null),
            lt.shouldStore && (await V(yr), await V(vr)),
            ($ = null);
        else {
          const { token: T } = lt.tokens;
          if (((p.current = T), lt.shouldStore)) {
            const { refreshToken: k } = lt.tokens;
            await Z(yr, T), await Z(vr, k);
          }
          $ = T;
        }
        yt !== ($ !== null) && (await (r == null ? void 0 : r())), v($), g(!1);
      },
      [Z, V]
    );
  gt.useEffect(() => {
    const lt = async (yt) => {
      if (mt) {
        yt.preventDefault();
        const $ =
          "Are you sure you want to leave? Your changes may not be saved.";
        return (yt.returnValue = !0), $;
      }
    };
    return (
      lg("beforeunload", lt),
      () => {
        sg("beforeunload", lt);
      }
    );
  }),
    gt.useEffect(() => {
      const lt = (yt) => {
        (async () => {
          if (yt.storageArea === o && yt.key === ot(yr)) {
            const $ = yt.newValue;
            H(`synced access token, is null: ${$ === null}`),
              await ct({
                shouldStore: !1,
                tokens: $ === null ? null : { token: $ },
              });
          }
        })();
      };
      return lg("storage", lt), () => sg("storage", lt);
    }, [ct]);
  const K = gt.useCallback(
      async (lt) => {
        const { tokens: yt } = await s.unauthenticatedCall(
          "auth:signIn",
          "code" in lt
            ? { params: { code: lt.code }, verifier: lt.verifier }
            : lt
        );
        return (
          H(`retrieved tokens, is null: ${yt === null}`),
          await ct({ shouldStore: !0, tokens: yt ?? null }),
          yt !== null
        );
      },
      [s, ct]
    ),
    _t = gt.useCallback(
      async (lt, yt) => {
        const $ =
            yt instanceof FormData
              ? Array.from(yt.entries()).reduce(
                  (Y, [tt, b]) => ((Y[tt] = b), Y),
                  {}
                )
              : yt ?? {},
          T = (await at(ic)) ?? void 0;
        await V(ic);
        const k = await s.authenticatedCall("auth:signIn", {
          provider: lt,
          params: $,
          verifier: T,
        });
        if (k.redirect !== void 0) {
          const Y = new URL(k.redirect);
          return (
            await Z(ic, k.verifier),
            window.location !== void 0 && (window.location.href = Y.toString()),
            { signingIn: !1, redirect: Y }
          );
        } else if (k.tokens !== void 0) {
          const { tokens: Y } = k;
          return (
            H(`signed in and got tokens, is null: ${Y === null}`),
            await ct({ shouldStore: !0, tokens: Y }),
            { signingIn: k.tokens !== null }
          );
        }
        return { signingIn: !1 };
      },
      [s, ct, at]
    ),
    Nt = gt.useCallback(async () => {
      try {
        await s.authenticatedCall("auth:signOut");
      } catch {}
      H("signed out, erasing tokens"),
        await ct({ shouldStore: !0, tokens: null });
    }, [ct, s]),
    qt = gt.useCallback(
      async ({ forceRefreshToken: lt }) => {
        if (lt) {
          const yt = p.current;
          return await C1(vr, async () => {
            const $ = p.current;
            if ($ !== yt)
              return H(`returning synced token, is null: ${$ === null}`), $;
            const T = (await at(vr)) ?? null;
            return T !== null
              ? (nt(!0),
                await K({ refreshToken: T }).finally(() => {
                  nt(!1);
                }),
                H(`returning retrieved token, is null: ${$ === null}`),
                p.current)
              : (nt(!1), H("returning null, there is no refresh token"), null);
          });
        }
        return p.current;
      },
      [K, Nt, at]
    ),
    Kt = gt.useRef(!1);
  gt.useEffect(() => {
    if (o === void 0)
      throw new Error(
        "`localStorage` is not available in this environment, set the `storage` prop on `ConvexAuthProvider`!"
      );
    const lt = async () => {
      const $ = (await at(yr)) ?? null;
      H(`retrieved token from storage, is null: ${$ === null}`),
        await ct({ shouldStore: !1, tokens: $ === null ? null : { token: $ } });
    };
    if (i !== void 0) {
      const $ = at(ig),
        T = (k) => {
          if (!k || i._timeFetched > +k) {
            const { token: Y, refreshToken: tt } = i._state,
              b =
                Y === null || tt === null
                  ? null
                  : { token: Y, refreshToken: tt };
            Z(ig, i._timeFetched.toString()),
              ct({ tokens: b, shouldStore: !0 });
          } else lt();
        };
      $ instanceof Promise ? $.then(T) : T($);
      return;
    }
    const yt =
      typeof (window == null ? void 0 : window.location) < "u"
        ? new URLSearchParams(window.location.search).get("code")
        : null;
    if (Kt.current || yt) {
      if (yt && !Kt.current) {
        Kt.current = !0;
        const $ = new URL(window.location.href);
        $.searchParams.delete("code"),
          (async () => (
            await d($.pathname + $.search + $.hash),
            await _t(void 0, { code: yt }),
            (Kt.current = !1)
          ))();
      }
    } else lt();
  }, [s, at]);
  const Te = gt.useMemo(() => ({ signIn: _t, signOut: Nt }), [_t, Nt]),
    kt = O !== null,
    Ct = gt.useMemo(
      () => ({ isLoading: S, isAuthenticated: kt, fetchAccessToken: qt }),
      [qt, S, kt]
    );
  return z.jsx(t0.Provider, {
    value: Ct,
    children: z.jsx(Pg.Provider, {
      value: Te,
      children: z.jsx(_1.Provider, { value: O, children: m }),
    }),
  });
}
function M1(s, i) {
  const r = N1(),
    o = gt.useMemo(() => s ?? r(), [s]),
    c = i.replace(/[^a-zA-Z0-9]/g, ""),
    d = gt.useCallback((g) => `${g}_${c}`, [i]),
    m = gt.useCallback((g, O) => o.setItem(d(g), O), [o, d]),
    p = gt.useCallback((g) => o.getItem(d(g)), [o, d]),
    S = gt.useCallback((g) => o.removeItem(d(g)), [o, d]);
  return { storageSet: m, storageGet: p, storageRemove: S, storageKey: d };
}
function N1() {
  const [s, i] = gt.useState({});
  return () => ({
    getItem: (r) => s[r],
    setItem: (r, o) => {
      i((c) => ({ ...c, [r]: o }));
    },
    removeItem: (r) => {
      i((o) => {
        const { [r]: c, ...d } = o;
        return d;
      });
    },
  });
}
async function C1(s, i) {
  var o;
  const r =
    (o = window == null ? void 0 : window.navigator) == null ? void 0 : o.locks;
  return r !== void 0 ? await r.request(s, i) : await D1(s, i);
}
function pr(s) {
  globalThis.__convexAuthMutexes === void 0 &&
    (globalThis.__convexAuthMutexes = {});
  let i = globalThis.__convexAuthMutexes[s];
  return (
    i === void 0 &&
      (globalThis.__convexAuthMutexes[s] = {
        currentlyRunning: null,
        waiting: [],
      }),
    (i = globalThis.__convexAuthMutexes[s]),
    i
  );
}
function lc(s, i) {
  globalThis.__convexAuthMutexes[s] = i;
}
async function e0(s, i) {
  const r = pr(s);
  r.currentlyRunning === null
    ? lc(s, {
        currentlyRunning: i().finally(() => {
          const o = pr(s).waiting.shift();
          (pr(s).currentlyRunning = null),
            lc(s, {
              ...pr(s),
              currentlyRunning: o === void 0 ? null : e0(s, o),
            });
        }),
        waiting: [],
      })
    : lc(s, { ...r, waiting: [...r.waiting, i] });
}
async function D1(s, i) {
  return new Promise((o, c) => {
    e0(s, () =>
      i()
        .then((m) => o(m))
        .catch((m) => c(m))
    );
  });
}
function lg(s, i, r) {
  var o;
  (o = window.addEventListener) == null || o.call(window, s, i, r);
}
function sg(s, i, r) {
  var o;
  (o = window.removeEventListener) == null || o.call(window, s, i, r);
}
function z1() {
  return gt.useContext(Pg);
}
function q1(s) {
  const {
      client: i,
      storage: r,
      storageNamespace: o,
      replaceURL: c,
      children: d,
    } = s,
    m = gt.useMemo(() => {
      var p;
      return {
        authenticatedCall(S, g) {
          return i.action(S, g);
        },
        unauthenticatedCall(S, g) {
          return new y1(i.address).action(S, g);
        },
        verbose: (p = i.options) == null ? void 0 : p.verbose,
      };
    }, [i]);
  return z.jsx(R1, {
    client: m,
    storage:
      r ??
      (typeof window > "u" || window == null ? void 0 : window.localStorage),
    storageNamespace: o ?? i.address,
    replaceURL:
      c ??
      ((p) => {
        window.history.replaceState({}, "", p);
      }),
    children: z.jsx(T1, { client: i, useAuth: O1, children: d }),
  });
}
function j1() {
  const { isAuthenticated: s } = A1(),
    { signOut: i } = z1();
  return s
    ? z.jsx("button", {
        className:
          "px-4 py-2 rounded-lg transition-colors bg-blue-500 text-white",
        onClick: () => void i(),
        children: "Sign out",
      })
    : null;
}
var k1 = Vg();
const U1 = Lc(k1);
function L1(s) {
  if (typeof document > "u") return;
  let i = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  (r.type = "text/css"),
    i.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = s)
      : r.appendChild(document.createTextNode(s));
}
const B1 = (s) => {
    switch (s) {
      case "success":
        return V1;
      case "info":
        return G1;
      case "warning":
        return Q1;
      case "error":
        return X1;
      default:
        return null;
    }
  },
  H1 = Array(12).fill(0),
  Y1 = ({ visible: s, className: i }) =>
    B.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", i].filter(Boolean).join(" "),
        "data-visible": s,
      },
      B.createElement(
        "div",
        { className: "sonner-spinner" },
        H1.map((r, o) =>
          B.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${o}`,
          })
        )
      )
    ),
  V1 = B.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    B.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  Q1 = B.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    B.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  G1 = B.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    B.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  X1 = B.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    B.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  Z1 = B.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    B.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    B.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  K1 = () => {
    const [s, i] = B.useState(document.hidden);
    return (
      B.useEffect(() => {
        const r = () => {
          i(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", r),
          () => window.removeEventListener("visibilitychange", r)
        );
      }, []),
      s
    );
  };
let pc = 1;
class $1 {
  constructor() {
    (this.subscribe = (i) => (
      this.subscribers.push(i),
      () => {
        const r = this.subscribers.indexOf(i);
        this.subscribers.splice(r, 1);
      }
    )),
      (this.publish = (i) => {
        this.subscribers.forEach((r) => r(i));
      }),
      (this.addToast = (i) => {
        this.publish(i), (this.toasts = [...this.toasts, i]);
      }),
      (this.create = (i) => {
        var r;
        const { message: o, ...c } = i,
          d =
            typeof (i == null ? void 0 : i.id) == "number" ||
            ((r = i.id) == null ? void 0 : r.length) > 0
              ? i.id
              : pc++,
          m = this.toasts.find((S) => S.id === d),
          p = i.dismissible === void 0 ? !0 : i.dismissible;
        return (
          this.dismissedToasts.has(d) && this.dismissedToasts.delete(d),
          m
            ? (this.toasts = this.toasts.map((S) =>
                S.id === d
                  ? (this.publish({ ...S, ...i, id: d, title: o }),
                    { ...S, ...i, id: d, dismissible: p, title: o })
                  : S
              ))
            : this.addToast({ title: o, ...c, dismissible: p, id: d }),
          d
        );
      }),
      (this.dismiss = (i) => (
        i
          ? (this.dismissedToasts.add(i),
            requestAnimationFrame(() =>
              this.subscribers.forEach((r) => r({ id: i, dismiss: !0 }))
            ))
          : this.toasts.forEach((r) => {
              this.subscribers.forEach((o) => o({ id: r.id, dismiss: !0 }));
            }),
        i
      )),
      (this.message = (i, r) => this.create({ ...r, message: i })),
      (this.error = (i, r) => this.create({ ...r, message: i, type: "error" })),
      (this.success = (i, r) =>
        this.create({ ...r, type: "success", message: i })),
      (this.info = (i, r) => this.create({ ...r, type: "info", message: i })),
      (this.warning = (i, r) =>
        this.create({ ...r, type: "warning", message: i })),
      (this.loading = (i, r) =>
        this.create({ ...r, type: "loading", message: i })),
      (this.promise = (i, r) => {
        if (!r) return;
        let o;
        r.loading !== void 0 &&
          (o = this.create({
            ...r,
            promise: i,
            type: "loading",
            message: r.loading,
            description:
              typeof r.description != "function" ? r.description : void 0,
          }));
        const c = Promise.resolve(i instanceof Function ? i() : i);
        let d = o !== void 0,
          m;
        const p = c
            .then(async (g) => {
              if (((m = ["resolve", g]), B.isValidElement(g)))
                (d = !1), this.create({ id: o, type: "default", message: g });
              else if (F1(g) && !g.ok) {
                d = !1;
                const v =
                    typeof r.error == "function"
                      ? await r.error(`HTTP error! status: ${g.status}`)
                      : r.error,
                  C =
                    typeof r.description == "function"
                      ? await r.description(`HTTP error! status: ${g.status}`)
                      : r.description,
                  Z =
                    typeof v == "object" && !B.isValidElement(v)
                      ? v
                      : { message: v };
                this.create({ id: o, type: "error", description: C, ...Z });
              } else if (g instanceof Error) {
                d = !1;
                const v =
                    typeof r.error == "function" ? await r.error(g) : r.error,
                  C =
                    typeof r.description == "function"
                      ? await r.description(g)
                      : r.description,
                  Z =
                    typeof v == "object" && !B.isValidElement(v)
                      ? v
                      : { message: v };
                this.create({ id: o, type: "error", description: C, ...Z });
              } else if (r.success !== void 0) {
                d = !1;
                const v =
                    typeof r.success == "function"
                      ? await r.success(g)
                      : r.success,
                  C =
                    typeof r.description == "function"
                      ? await r.description(g)
                      : r.description,
                  Z =
                    typeof v == "object" && !B.isValidElement(v)
                      ? v
                      : { message: v };
                this.create({ id: o, type: "success", description: C, ...Z });
              }
            })
            .catch(async (g) => {
              if (((m = ["reject", g]), r.error !== void 0)) {
                d = !1;
                const O =
                    typeof r.error == "function" ? await r.error(g) : r.error,
                  v =
                    typeof r.description == "function"
                      ? await r.description(g)
                      : r.description,
                  H =
                    typeof O == "object" && !B.isValidElement(O)
                      ? O
                      : { message: O };
                this.create({ id: o, type: "error", description: v, ...H });
              }
            })
            .finally(() => {
              d && (this.dismiss(o), (o = void 0)),
                r.finally == null || r.finally.call(r);
            }),
          S = () =>
            new Promise((g, O) =>
              p.then(() => (m[0] === "reject" ? O(m[1]) : g(m[1]))).catch(O)
            );
        return typeof o != "string" && typeof o != "number"
          ? { unwrap: S }
          : Object.assign(o, { unwrap: S });
      }),
      (this.custom = (i, r) => {
        const o = (r == null ? void 0 : r.id) || pc++;
        return this.create({ jsx: i(o), id: o, ...r }), o;
      }),
      (this.getActiveToasts = () =>
        this.toasts.filter((i) => !this.dismissedToasts.has(i.id))),
      (this.subscribers = []),
      (this.toasts = []),
      (this.dismissedToasts = new Set());
  }
}
const Ae = new $1(),
  J1 = (s, i) => {
    const r = (i == null ? void 0 : i.id) || pc++;
    return Ae.addToast({ title: s, ...i, id: r }), r;
  },
  F1 = (s) =>
    s &&
    typeof s == "object" &&
    "ok" in s &&
    typeof s.ok == "boolean" &&
    "status" in s &&
    typeof s.status == "number",
  I1 = J1,
  W1 = () => Ae.toasts,
  P1 = () => Ae.getActiveToasts();
Object.assign(
  I1,
  {
    success: Ae.success,
    info: Ae.info,
    warning: Ae.warning,
    error: Ae.error,
    custom: Ae.custom,
    message: Ae.message,
    promise: Ae.promise,
    dismiss: Ae.dismiss,
    loading: Ae.loading,
  },
  { getHistory: W1, getToasts: P1 }
);
L1(
  "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}"
);
function br(s) {
  return s.label !== void 0;
}
const tb = 3,
  eb = "24px",
  nb = "16px",
  rg = 4e3,
  ab = 356,
  ib = 14,
  lb = 45,
  sb = 200;
function rn(...s) {
  return s.filter(Boolean).join(" ");
}
function rb(s) {
  const [i, r] = s.split("-"),
    o = [];
  return i && o.push(i), r && o.push(r), o;
}
const ub = (s) => {
  var i, r, o, c, d, m, p, S, g;
  const {
      invert: O,
      toast: v,
      unstyled: C,
      interacting: H,
      setHeights: Z,
      visibleToasts: at,
      heights: V,
      index: ot,
      toasts: mt,
      expanded: nt,
      removeToast: ct,
      defaultRichColors: K,
      closeButton: _t,
      style: Nt,
      cancelButtonStyle: qt,
      actionButtonStyle: Kt,
      className: Te = "",
      descriptionClassName: kt = "",
      duration: Ct,
      position: lt,
      gap: yt,
      expandByDefault: $,
      classNames: T,
      icons: k,
      closeButtonAriaLabel: Y = "Close toast",
    } = s,
    [tt, b] = B.useState(null),
    [M, L] = B.useState(null),
    [j, G] = B.useState(!1),
    [st, Q] = B.useState(!1),
    [$t, bt] = B.useState(!1),
    [ve, hn] = B.useState(!1),
    [Ha, Ya] = B.useState(!1),
    [Li, da] = B.useState(0),
    [kr, Fl] = B.useState(0),
    ue = B.useRef(v.duration || Ct || rg),
    Il = B.useRef(null),
    qe = B.useRef(null),
    Wl = ot === 0,
    Va = ot + 1 <= at,
    he = v.type,
    mn = v.dismissible !== !1,
    Ur = v.className || "",
    Lr = v.descriptionClassName || "",
    We = B.useMemo(
      () => V.findIndex((et) => et.toastId === v.id) || 0,
      [V, v.id]
    ),
    me = B.useMemo(() => {
      var et;
      return (et = v.closeButton) != null ? et : _t;
    }, [v.closeButton, _t]),
    Ze = B.useMemo(() => v.duration || Ct || rg, [v.duration, Ct]),
    ae = B.useRef(0),
    jn = B.useRef(0),
    Pl = B.useRef(0),
    kn = B.useRef(null),
    [Qa, Ga] = lt.split("-"),
    Pe = B.useMemo(
      () => V.reduce((et, Bt, Gt) => (Gt >= We ? et : et + Bt.height), 0),
      [V, We]
    ),
    ha = K1(),
    ma = v.invert || O,
    Bi = he === "loading";
  (jn.current = B.useMemo(() => We * yt + Pe, [We, Pe])),
    B.useEffect(() => {
      ue.current = Ze;
    }, [Ze]),
    B.useEffect(() => {
      G(!0);
    }, []),
    B.useEffect(() => {
      const et = qe.current;
      if (et) {
        const Bt = et.getBoundingClientRect().height;
        return (
          Fl(Bt),
          Z((Gt) => [
            { toastId: v.id, height: Bt, position: v.position },
            ...Gt,
          ]),
          () => Z((Gt) => Gt.filter((ie) => ie.toastId !== v.id))
        );
      }
    }, [Z, v.id]),
    B.useLayoutEffect(() => {
      if (!j) return;
      const et = qe.current,
        Bt = et.style.height;
      et.style.height = "auto";
      const Gt = et.getBoundingClientRect().height;
      (et.style.height = Bt),
        Fl(Gt),
        Z((ie) =>
          ie.find((Jt) => Jt.toastId === v.id)
            ? ie.map((Jt) => (Jt.toastId === v.id ? { ...Jt, height: Gt } : Jt))
            : [{ toastId: v.id, height: Gt, position: v.position }, ...ie]
        );
    }, [j, v.title, v.description, Z, v.id]);
  const Ke = B.useCallback(() => {
    Q(!0),
      da(jn.current),
      Z((et) => et.filter((Bt) => Bt.toastId !== v.id)),
      setTimeout(() => {
        ct(v);
      }, sb);
  }, [v, ct, Z, jn]);
  B.useEffect(() => {
    if (
      (v.promise && he === "loading") ||
      v.duration === 1 / 0 ||
      v.type === "loading"
    )
      return;
    let et;
    return (
      nt || H || ha
        ? (() => {
            if (Pl.current < ae.current) {
              const ie = new Date().getTime() - ae.current;
              ue.current = ue.current - ie;
            }
            Pl.current = new Date().getTime();
          })()
        : (() => {
            ue.current !== 1 / 0 &&
              ((ae.current = new Date().getTime()),
              (et = setTimeout(() => {
                v.onAutoClose == null || v.onAutoClose.call(v, v), Ke();
              }, ue.current)));
          })(),
      () => clearTimeout(et)
    );
  }, [nt, H, v, he, ha, Ke]),
    B.useEffect(() => {
      v.delete && Ke();
    }, [Ke, v.delete]);
  function ts() {
    var et;
    if (k != null && k.loading) {
      var Bt;
      return B.createElement(
        "div",
        {
          className: rn(
            T == null ? void 0 : T.loader,
            v == null || (Bt = v.classNames) == null ? void 0 : Bt.loader,
            "sonner-loader"
          ),
          "data-visible": he === "loading",
        },
        k.loading
      );
    }
    return B.createElement(Y1, {
      className: rn(
        T == null ? void 0 : T.loader,
        v == null || (et = v.classNames) == null ? void 0 : et.loader
      ),
      visible: he === "loading",
    });
  }
  const Hi = v.icon || (k == null ? void 0 : k[he]) || B1(he);
  var Un, es;
  return B.createElement(
    "li",
    {
      tabIndex: 0,
      ref: qe,
      className: rn(
        Te,
        Ur,
        T == null ? void 0 : T.toast,
        v == null || (i = v.classNames) == null ? void 0 : i.toast,
        T == null ? void 0 : T.default,
        T == null ? void 0 : T[he],
        v == null || (r = v.classNames) == null ? void 0 : r[he]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (Un = v.richColors) != null ? Un : K,
      "data-styled": !(v.jsx || v.unstyled || C),
      "data-mounted": j,
      "data-promise": !!v.promise,
      "data-swiped": Ha,
      "data-removed": st,
      "data-visible": Va,
      "data-y-position": Qa,
      "data-x-position": Ga,
      "data-index": ot,
      "data-front": Wl,
      "data-swiping": $t,
      "data-dismissible": mn,
      "data-type": he,
      "data-invert": ma,
      "data-swipe-out": ve,
      "data-swipe-direction": M,
      "data-expanded": !!(nt || ($ && j)),
      style: {
        "--index": ot,
        "--toasts-before": ot,
        "--z-index": mt.length - ot,
        "--offset": `${st ? Li : jn.current}px`,
        "--initial-height": $ ? "auto" : `${kr}px`,
        ...Nt,
        ...v.style,
      },
      onDragEnd: () => {
        bt(!1), b(null), (kn.current = null);
      },
      onPointerDown: (et) => {
        Bi ||
          !mn ||
          ((Il.current = new Date()),
          da(jn.current),
          et.target.setPointerCapture(et.pointerId),
          et.target.tagName !== "BUTTON" &&
            (bt(!0), (kn.current = { x: et.clientX, y: et.clientY })));
      },
      onPointerUp: () => {
        var et, Bt, Gt;
        if (ve || !mn) return;
        kn.current = null;
        const ie = Number(
            ((et = qe.current) == null
              ? void 0
              : et.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0
          ),
          ga = Number(
            ((Bt = qe.current) == null
              ? void 0
              : Bt.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0
          ),
          Jt =
            new Date().getTime() -
            ((Gt = Il.current) == null ? void 0 : Gt.getTime()),
          Ht = tt === "x" ? ie : ga,
          Yt = Math.abs(Ht) / Jt;
        if (Math.abs(Ht) >= lb || Yt > 0.11) {
          da(jn.current),
            v.onDismiss == null || v.onDismiss.call(v, v),
            L(
              tt === "x" ? (ie > 0 ? "right" : "left") : ga > 0 ? "down" : "up"
            ),
            Ke(),
            hn(!0);
          return;
        } else {
          var Rt, Wt;
          (Rt = qe.current) == null ||
            Rt.style.setProperty("--swipe-amount-x", "0px"),
            (Wt = qe.current) == null ||
              Wt.style.setProperty("--swipe-amount-y", "0px");
        }
        Ya(!1), bt(!1), b(null);
      },
      onPointerMove: (et) => {
        var Bt, Gt, ie;
        if (
          !kn.current ||
          !mn ||
          ((Bt = window.getSelection()) == null
            ? void 0
            : Bt.toString().length) > 0
        )
          return;
        const Jt = et.clientY - kn.current.y,
          Ht = et.clientX - kn.current.x;
        var Yt;
        const Rt = (Yt = s.swipeDirections) != null ? Yt : rb(lt);
        !tt &&
          (Math.abs(Ht) > 1 || Math.abs(Jt) > 1) &&
          b(Math.abs(Ht) > Math.abs(Jt) ? "x" : "y");
        let Wt = { x: 0, y: 0 };
        const Xa = (gn) => 1 / (1.5 + Math.abs(gn) / 20);
        if (tt === "y") {
          if (Rt.includes("top") || Rt.includes("bottom"))
            if (
              (Rt.includes("top") && Jt < 0) ||
              (Rt.includes("bottom") && Jt > 0)
            )
              Wt.y = Jt;
            else {
              const gn = Jt * Xa(Jt);
              Wt.y = Math.abs(gn) < Math.abs(Jt) ? gn : Jt;
            }
        } else if (tt === "x" && (Rt.includes("left") || Rt.includes("right")))
          if (
            (Rt.includes("left") && Ht < 0) ||
            (Rt.includes("right") && Ht > 0)
          )
            Wt.x = Ht;
          else {
            const gn = Ht * Xa(Ht);
            Wt.x = Math.abs(gn) < Math.abs(Ht) ? gn : Ht;
          }
        (Math.abs(Wt.x) > 0 || Math.abs(Wt.y) > 0) && Ya(!0),
          (Gt = qe.current) == null ||
            Gt.style.setProperty("--swipe-amount-x", `${Wt.x}px`),
          (ie = qe.current) == null ||
            ie.style.setProperty("--swipe-amount-y", `${Wt.y}px`);
      },
    },
    me && !v.jsx && he !== "loading"
      ? B.createElement(
          "button",
          {
            "aria-label": Y,
            "data-disabled": Bi,
            "data-close-button": !0,
            onClick:
              Bi || !mn
                ? () => {}
                : () => {
                    Ke(), v.onDismiss == null || v.onDismiss.call(v, v);
                  },
            className: rn(
              T == null ? void 0 : T.closeButton,
              v == null || (o = v.classNames) == null ? void 0 : o.closeButton
            ),
          },
          (es = k == null ? void 0 : k.close) != null ? es : Z1
        )
      : null,
    (he || v.icon || v.promise) &&
      v.icon !== null &&
      ((k == null ? void 0 : k[he]) !== null || v.icon)
      ? B.createElement(
          "div",
          {
            "data-icon": "",
            className: rn(
              T == null ? void 0 : T.icon,
              v == null || (c = v.classNames) == null ? void 0 : c.icon
            ),
          },
          v.promise || (v.type === "loading" && !v.icon)
            ? v.icon || ts()
            : null,
          v.type !== "loading" ? Hi : null
        )
      : null,
    B.createElement(
      "div",
      {
        "data-content": "",
        className: rn(
          T == null ? void 0 : T.content,
          v == null || (d = v.classNames) == null ? void 0 : d.content
        ),
      },
      B.createElement(
        "div",
        {
          "data-title": "",
          className: rn(
            T == null ? void 0 : T.title,
            v == null || (m = v.classNames) == null ? void 0 : m.title
          ),
        },
        v.jsx ? v.jsx : typeof v.title == "function" ? v.title() : v.title
      ),
      v.description
        ? B.createElement(
            "div",
            {
              "data-description": "",
              className: rn(
                kt,
                Lr,
                T == null ? void 0 : T.description,
                v == null || (p = v.classNames) == null ? void 0 : p.description
              ),
            },
            typeof v.description == "function" ? v.description() : v.description
          )
        : null
    ),
    B.isValidElement(v.cancel)
      ? v.cancel
      : v.cancel && br(v.cancel)
      ? B.createElement(
          "button",
          {
            "data-button": !0,
            "data-cancel": !0,
            style: v.cancelButtonStyle || qt,
            onClick: (et) => {
              br(v.cancel) &&
                mn &&
                (v.cancel.onClick == null ||
                  v.cancel.onClick.call(v.cancel, et),
                Ke());
            },
            className: rn(
              T == null ? void 0 : T.cancelButton,
              v == null || (S = v.classNames) == null ? void 0 : S.cancelButton
            ),
          },
          v.cancel.label
        )
      : null,
    B.isValidElement(v.action)
      ? v.action
      : v.action && br(v.action)
      ? B.createElement(
          "button",
          {
            "data-button": !0,
            "data-action": !0,
            style: v.actionButtonStyle || Kt,
            onClick: (et) => {
              br(v.action) &&
                (v.action.onClick == null ||
                  v.action.onClick.call(v.action, et),
                !et.defaultPrevented && Ke());
            },
            className: rn(
              T == null ? void 0 : T.actionButton,
              v == null || (g = v.classNames) == null ? void 0 : g.actionButton
            ),
          },
          v.action.label
        )
      : null
  );
};
function ug() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const s = document.documentElement.getAttribute("dir");
  return s === "auto" || !s
    ? window.getComputedStyle(document.documentElement).direction
    : s;
}
function ob(s, i) {
  const r = {};
  return (
    [s, i].forEach((o, c) => {
      const d = c === 1,
        m = d ? "--mobile-offset" : "--offset",
        p = d ? nb : eb;
      function S(g) {
        ["top", "right", "bottom", "left"].forEach((O) => {
          r[`${m}-${O}`] = typeof g == "number" ? `${g}px` : g;
        });
      }
      typeof o == "number" || typeof o == "string"
        ? S(o)
        : typeof o == "object"
        ? ["top", "right", "bottom", "left"].forEach((g) => {
            o[g] === void 0
              ? (r[`${m}-${g}`] = p)
              : (r[`${m}-${g}`] = typeof o[g] == "number" ? `${o[g]}px` : o[g]);
          })
        : S(p);
    }),
    r
  );
}
const cb = B.forwardRef(function (i, r) {
    const {
        invert: o,
        position: c = "bottom-right",
        hotkey: d = ["altKey", "KeyT"],
        expand: m,
        closeButton: p,
        className: S,
        offset: g,
        mobileOffset: O,
        theme: v = "light",
        richColors: C,
        duration: H,
        style: Z,
        visibleToasts: at = tb,
        toastOptions: V,
        dir: ot = ug(),
        gap: mt = ib,
        icons: nt,
        containerAriaLabel: ct = "Notifications",
      } = i,
      [K, _t] = B.useState([]),
      Nt = B.useMemo(
        () =>
          Array.from(
            new Set(
              [c].concat(K.filter((M) => M.position).map((M) => M.position))
            )
          ),
        [K, c]
      ),
      [qt, Kt] = B.useState([]),
      [Te, kt] = B.useState(!1),
      [Ct, lt] = B.useState(!1),
      [yt, $] = B.useState(
        v !== "system"
          ? v
          : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      ),
      T = B.useRef(null),
      k = d.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      Y = B.useRef(null),
      tt = B.useRef(!1),
      b = B.useCallback((M) => {
        _t((L) => {
          var j;
          return (
            ((j = L.find((G) => G.id === M.id)) != null && j.delete) ||
              Ae.dismiss(M.id),
            L.filter(({ id: G }) => G !== M.id)
          );
        });
      }, []);
    return (
      B.useEffect(
        () =>
          Ae.subscribe((M) => {
            if (M.dismiss) {
              requestAnimationFrame(() => {
                _t((L) =>
                  L.map((j) => (j.id === M.id ? { ...j, delete: !0 } : j))
                );
              });
              return;
            }
            setTimeout(() => {
              U1.flushSync(() => {
                _t((L) => {
                  const j = L.findIndex((G) => G.id === M.id);
                  return j !== -1
                    ? [...L.slice(0, j), { ...L[j], ...M }, ...L.slice(j + 1)]
                    : [M, ...L];
                });
              });
            });
          }),
        [K]
      ),
      B.useEffect(() => {
        if (v !== "system") {
          $(v);
          return;
        }
        if (
          (v === "system" &&
            (window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? $("dark")
              : $("light")),
          typeof window > "u")
        )
          return;
        const M = window.matchMedia("(prefers-color-scheme: dark)");
        try {
          M.addEventListener("change", ({ matches: L }) => {
            $(L ? "dark" : "light");
          });
        } catch {
          M.addListener(({ matches: j }) => {
            try {
              $(j ? "dark" : "light");
            } catch (G) {
              console.error(G);
            }
          });
        }
      }, [v]),
      B.useEffect(() => {
        K.length <= 1 && kt(!1);
      }, [K]),
      B.useEffect(() => {
        const M = (L) => {
          var j;
          if (d.every((Q) => L[Q] || L.code === Q)) {
            var st;
            kt(!0), (st = T.current) == null || st.focus();
          }
          L.code === "Escape" &&
            (document.activeElement === T.current ||
              ((j = T.current) != null &&
                j.contains(document.activeElement))) &&
            kt(!1);
        };
        return (
          document.addEventListener("keydown", M),
          () => document.removeEventListener("keydown", M)
        );
      }, [d]),
      B.useEffect(() => {
        if (T.current)
          return () => {
            Y.current &&
              (Y.current.focus({ preventScroll: !0 }),
              (Y.current = null),
              (tt.current = !1));
          };
      }, [T.current]),
      B.createElement(
        "section",
        {
          ref: r,
          "aria-label": `${ct} ${k}`,
          tabIndex: -1,
          "aria-live": "polite",
          "aria-relevant": "additions text",
          "aria-atomic": "false",
          suppressHydrationWarning: !0,
        },
        Nt.map((M, L) => {
          var j;
          const [G, st] = M.split("-");
          return K.length
            ? B.createElement(
                "ol",
                {
                  key: M,
                  dir: ot === "auto" ? ug() : ot,
                  tabIndex: -1,
                  ref: T,
                  className: S,
                  "data-sonner-toaster": !0,
                  "data-sonner-theme": yt,
                  "data-y-position": G,
                  "data-lifted": Te && K.length > 1 && !m,
                  "data-x-position": st,
                  style: {
                    "--front-toast-height": `${
                      ((j = qt[0]) == null ? void 0 : j.height) || 0
                    }px`,
                    "--width": `${ab}px`,
                    "--gap": `${mt}px`,
                    ...Z,
                    ...ob(g, O),
                  },
                  onBlur: (Q) => {
                    tt.current &&
                      !Q.currentTarget.contains(Q.relatedTarget) &&
                      ((tt.current = !1),
                      Y.current &&
                        (Y.current.focus({ preventScroll: !0 }),
                        (Y.current = null)));
                  },
                  onFocus: (Q) => {
                    (Q.target instanceof HTMLElement &&
                      Q.target.dataset.dismissible === "false") ||
                      tt.current ||
                      ((tt.current = !0), (Y.current = Q.relatedTarget));
                  },
                  onMouseEnter: () => kt(!0),
                  onMouseMove: () => kt(!0),
                  onMouseLeave: () => {
                    Ct || kt(!1);
                  },
                  onDragEnd: () => kt(!1),
                  onPointerDown: (Q) => {
                    (Q.target instanceof HTMLElement &&
                      Q.target.dataset.dismissible === "false") ||
                      lt(!0);
                  },
                  onPointerUp: () => lt(!1),
                },
                K.filter(
                  (Q) => (!Q.position && L === 0) || Q.position === M
                ).map((Q, $t) => {
                  var bt, ve;
                  return B.createElement(ub, {
                    key: Q.id,
                    icons: nt,
                    index: $t,
                    toast: Q,
                    defaultRichColors: C,
                    duration:
                      (bt = V == null ? void 0 : V.duration) != null ? bt : H,
                    className: V == null ? void 0 : V.className,
                    descriptionClassName:
                      V == null ? void 0 : V.descriptionClassName,
                    invert: o,
                    visibleToasts: at,
                    closeButton:
                      (ve = V == null ? void 0 : V.closeButton) != null
                        ? ve
                        : p,
                    interacting: Ct,
                    position: M,
                    style: V == null ? void 0 : V.style,
                    unstyled: V == null ? void 0 : V.unstyled,
                    classNames: V == null ? void 0 : V.classNames,
                    cancelButtonStyle: V == null ? void 0 : V.cancelButtonStyle,
                    actionButtonStyle: V == null ? void 0 : V.actionButtonStyle,
                    closeButtonAriaLabel:
                      V == null ? void 0 : V.closeButtonAriaLabel,
                    removeToast: b,
                    toasts: K.filter((hn) => hn.position == Q.position),
                    heights: qt.filter((hn) => hn.position == Q.position),
                    setHeights: Kt,
                    expandByDefault: m,
                    gap: mt,
                    expanded: Te,
                    swipeDirections: i.swipeDirections,
                  });
                })
              )
            : null;
        })
      )
    );
  }),
  n0 = "/assets/wojaklogo-DZ-dIrRl.jpg",
  fb = "/assets/1-CIVVzmtF.jpg",
  db = "/assets/2-C716B5iB.jpg",
  hb = "/assets/3-BiLi25m_.jpg",
  mb = "/assets/4-C3hKKm4y.jpg",
  gb = "/assets/5-DrloGh_I.jpg",
  yb = "/assets/6-JCDirwUi.jpg",
  vb = "/assets/7-Ce6AuORj.jpg",
  pb = "/assets/8-BuNZD5v5.jpg",
  bb = "/assets/9-BpIWeRq0.jpg",
  Sb = "/assets/10-Dbkt3DOf.jpg",
  xb = "/assets/11-D8J5yowI.jpg",
  Ab = "/assets/12-BbFH_leT.jpg",
  Tb = "/assets/13-CWTbALNg.jpg",
  wb = "/assets/14-C_D0hdVA.jpg",
  Eb = "/assets/15-BlltTN3T.jpg",
  Ob = "/assets/16-B19fAe6X.jpg",
  _b = "/assets/17-CJIbPeQj.jpg",
  Rb = "/assets/18-cGp5MA5E.jpg",
  Mb = "/assets/19-B-Xe0Vwc.jpg",
  Nb = "/assets/20-DPdMgj3-.jpg",
  Cb = "/assets/21-BThC4cWb.jpg",
  Db = "/assets/22-v34p-_5V.jpg",
  zb = "/assets/23-Dbo5_joG.jpg",
  qb = "/assets/24-BMoCdQGK.jpg",
  jb = "/assets/25-D-lPGenA.jpg",
  kb = "/assets/26-DrKzAGp8.jpg",
  Ub = "/assets/27-DkyzJ7a8.jpg",
  Lb = "/assets/28-DTmthxiu.jpg",
  Bb = "/assets/29-B8wEYoIt.jpg",
  Hb = "/assets/30-B-jDi3dF.jpg",
  Yb = "/assets/wojakVid-CWxFkq-J.mp4",
  Vb = "/assets/thumbnail-BL1zGso0.jpg";
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */ function Qb(s, i, r) {
  return (
    (i = Xb(i)) in s
      ? Object.defineProperty(s, i, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (s[i] = r),
    s
  );
}
function og(s, i) {
  var r = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(s);
    i &&
      (o = o.filter(function (c) {
        return Object.getOwnPropertyDescriptor(s, c).enumerable;
      })),
      r.push.apply(r, o);
  }
  return r;
}
function U(s) {
  for (var i = 1; i < arguments.length; i++) {
    var r = arguments[i] != null ? arguments[i] : {};
    i % 2
      ? og(Object(r), !0).forEach(function (o) {
          Qb(s, o, r[o]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(r))
      : og(Object(r)).forEach(function (o) {
          Object.defineProperty(s, o, Object.getOwnPropertyDescriptor(r, o));
        });
  }
  return s;
}
function Gb(s, i) {
  if (typeof s != "object" || !s) return s;
  var r = s[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(s, i);
    if (typeof o != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(s);
}
function Xb(s) {
  var i = Gb(s, "string");
  return typeof i == "symbol" ? i : i + "";
}
const cg = () => {};
let Qc = {},
  a0 = {},
  i0 = null,
  l0 = { mark: cg, measure: cg };
try {
  typeof window < "u" && (Qc = window),
    typeof document < "u" && (a0 = document),
    typeof MutationObserver < "u" && (i0 = MutationObserver),
    typeof performance < "u" && (l0 = performance);
} catch {}
const { userAgent: fg = "" } = Qc.navigator || {},
  oa = Qc,
  Dt = a0,
  dg = i0,
  Sr = l0;
oa.document;
const qn =
    !!Dt.documentElement &&
    !!Dt.head &&
    typeof Dt.addEventListener == "function" &&
    typeof Dt.createElement == "function",
  s0 = ~fg.indexOf("MSIE") || ~fg.indexOf("Trident/");
var Zb = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
  Kb =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,
  r0 = {
    classic: {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fab: "brands",
      "fa-brands": "brands",
    },
    duotone: {
      fa: "solid",
      fad: "solid",
      "fa-solid": "solid",
      "fa-duotone": "solid",
      fadr: "regular",
      "fa-regular": "regular",
      fadl: "light",
      "fa-light": "light",
      fadt: "thin",
      "fa-thin": "thin",
    },
    sharp: {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin",
    },
    "sharp-duotone": {
      fa: "solid",
      fasds: "solid",
      "fa-solid": "solid",
      fasdr: "regular",
      "fa-regular": "regular",
      fasdl: "light",
      "fa-light": "light",
      fasdt: "thin",
      "fa-thin": "thin",
    },
  },
  $b = { GROUP: "duotone-group", PRIMARY: "primary", SECONDARY: "secondary" },
  u0 = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"],
  de = "classic",
  Cr = "duotone",
  Jb = "sharp",
  Fb = "sharp-duotone",
  o0 = [de, Cr, Jb, Fb],
  Ib = {
    classic: { 900: "fas", 400: "far", normal: "far", 300: "fal", 100: "fat" },
    duotone: { 900: "fad", 400: "fadr", 300: "fadl", 100: "fadt" },
    sharp: { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" },
    "sharp-duotone": { 900: "fasds", 400: "fasdr", 300: "fasdl", 100: "fasdt" },
  },
  Wb = {
    "Font Awesome 6 Free": { 900: "fas", 400: "far" },
    "Font Awesome 6 Pro": {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat",
    },
    "Font Awesome 6 Brands": { 400: "fab", normal: "fab" },
    "Font Awesome 6 Duotone": {
      900: "fad",
      400: "fadr",
      normal: "fadr",
      300: "fadl",
      100: "fadt",
    },
    "Font Awesome 6 Sharp": {
      900: "fass",
      400: "fasr",
      normal: "fasr",
      300: "fasl",
      100: "fast",
    },
    "Font Awesome 6 Sharp Duotone": {
      900: "fasds",
      400: "fasdr",
      normal: "fasdr",
      300: "fasdl",
      100: "fasdt",
    },
  },
  Pb = new Map([
    [
      "classic",
      {
        defaultShortPrefixId: "fas",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "light", "thin", "brands"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
    [
      "sharp",
      {
        defaultShortPrefixId: "fass",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "light", "thin"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
    [
      "duotone",
      {
        defaultShortPrefixId: "fad",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "light", "thin"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
    [
      "sharp-duotone",
      {
        defaultShortPrefixId: "fasds",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "light", "thin"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
  ]),
  t2 = {
    classic: {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      brands: "fab",
    },
    duotone: { solid: "fad", regular: "fadr", light: "fadl", thin: "fadt" },
    sharp: { solid: "fass", regular: "fasr", light: "fasl", thin: "fast" },
    "sharp-duotone": {
      solid: "fasds",
      regular: "fasdr",
      light: "fasdl",
      thin: "fasdt",
    },
  },
  e2 = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
  hg = {
    kit: { fak: "kit", "fa-kit": "kit" },
    "kit-duotone": { fakd: "kit-duotone", "fa-kit-duotone": "kit-duotone" },
  },
  n2 = ["kit"],
  a2 = { kit: { "fa-kit": "fak" } },
  i2 = ["fak", "fakd"],
  l2 = { kit: { fak: "fa-kit" } },
  mg = { kit: { kit: "fak" }, "kit-duotone": { "kit-duotone": "fakd" } },
  xr = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary",
  },
  s2 = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"],
  r2 = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
  u2 = {
    "Font Awesome Kit": { 400: "fak", normal: "fak" },
    "Font Awesome Kit Duotone": { 400: "fakd", normal: "fakd" },
  },
  o2 = {
    classic: {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat",
    },
    duotone: { "fa-regular": "fadr", "fa-light": "fadl", "fa-thin": "fadt" },
    sharp: {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast",
    },
    "sharp-duotone": {
      "fa-solid": "fasds",
      "fa-regular": "fasdr",
      "fa-light": "fasdl",
      "fa-thin": "fasdt",
    },
  },
  c2 = {
    classic: ["fas", "far", "fal", "fat", "fad"],
    duotone: ["fadr", "fadl", "fadt"],
    sharp: ["fass", "fasr", "fasl", "fast"],
    "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"],
  },
  bc = {
    classic: {
      fab: "fa-brands",
      fad: "fa-duotone",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin",
    },
    duotone: { fadr: "fa-regular", fadl: "fa-light", fadt: "fa-thin" },
    sharp: {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin",
    },
    "sharp-duotone": {
      fasds: "fa-solid",
      fasdr: "fa-regular",
      fasdl: "fa-light",
      fasdt: "fa-thin",
    },
  },
  f2 = [
    "fa-solid",
    "fa-regular",
    "fa-light",
    "fa-thin",
    "fa-duotone",
    "fa-brands",
  ],
  Sc = [
    "fa",
    "fas",
    "far",
    "fal",
    "fat",
    "fad",
    "fadr",
    "fadl",
    "fadt",
    "fab",
    "fass",
    "fasr",
    "fasl",
    "fast",
    "fasds",
    "fasdr",
    "fasdl",
    "fasdt",
    ...s2,
    ...f2,
  ],
  d2 = ["solid", "regular", "light", "thin", "duotone", "brands"],
  c0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  h2 = c0.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  m2 = [
    ...Object.keys(c2),
    ...d2,
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "beat",
    "border",
    "fade",
    "beat-fade",
    "bounce",
    "flip-both",
    "flip-horizontal",
    "flip-vertical",
    "flip",
    "fw",
    "inverse",
    "layers-counter",
    "layers-text",
    "layers",
    "li",
    "pull-left",
    "pull-right",
    "pulse",
    "rotate-180",
    "rotate-270",
    "rotate-90",
    "rotate-by",
    "shake",
    "spin-pulse",
    "spin-reverse",
    "spin",
    "stack-1x",
    "stack-2x",
    "stack",
    "ul",
    xr.GROUP,
    xr.SWAP_OPACITY,
    xr.PRIMARY,
    xr.SECONDARY,
  ]
    .concat(c0.map((s) => "".concat(s, "x")))
    .concat(h2.map((s) => "w-".concat(s))),
  g2 = {
    "Font Awesome 5 Free": { 900: "fas", 400: "far" },
    "Font Awesome 5 Pro": { 900: "fas", 400: "far", normal: "far", 300: "fal" },
    "Font Awesome 5 Brands": { 400: "fab", normal: "fab" },
    "Font Awesome 5 Duotone": { 900: "fad" },
  };
const Dn = "___FONT_AWESOME___",
  xc = 16,
  f0 = "fa",
  d0 = "svg-inline--fa",
  La = "data-fa-i2svg",
  Ac = "data-fa-pseudo-element",
  y2 = "data-fa-pseudo-element-pending",
  Gc = "data-prefix",
  Xc = "data-icon",
  gg = "fontawesome-i2svg",
  v2 = "async",
  p2 = ["HTML", "HEAD", "STYLE", "SCRIPT"],
  h0 = (() => {
    try {
      return !0;
    } catch {
      return !1;
    }
  })();
function $l(s) {
  return new Proxy(s, {
    get(i, r) {
      return r in i ? i[r] : i[de];
    },
  });
}
const m0 = U({}, r0);
m0[de] = U(
  U(U(U({}, { "fa-duotone": "duotone" }), r0[de]), hg.kit),
  hg["kit-duotone"]
);
const b2 = $l(m0),
  Tc = U({}, t2);
Tc[de] = U(U(U(U({}, { duotone: "fad" }), Tc[de]), mg.kit), mg["kit-duotone"]);
const yg = $l(Tc),
  wc = U({}, bc);
wc[de] = U(U({}, wc[de]), l2.kit);
const Zc = $l(wc),
  Ec = U({}, o2);
Ec[de] = U(U({}, Ec[de]), a2.kit);
$l(Ec);
const S2 = Zb,
  g0 = "fa-layers-text",
  x2 = Kb,
  A2 = U({}, Ib);
$l(A2);
const T2 = [
    "class",
    "data-prefix",
    "data-icon",
    "data-fa-transform",
    "data-fa-mask",
  ],
  sc = $b,
  w2 = [...n2, ...m2],
  Yl = oa.FontAwesomeConfig || {};
function E2(s) {
  var i = Dt.querySelector("script[" + s + "]");
  if (i) return i.getAttribute(s);
}
function O2(s) {
  return s === "" ? !0 : s === "false" ? !1 : s === "true" ? !0 : s;
}
Dt &&
  typeof Dt.querySelector == "function" &&
  [
    ["data-family-prefix", "familyPrefix"],
    ["data-css-prefix", "cssPrefix"],
    ["data-family-default", "familyDefault"],
    ["data-style-default", "styleDefault"],
    ["data-replacement-class", "replacementClass"],
    ["data-auto-replace-svg", "autoReplaceSvg"],
    ["data-auto-add-css", "autoAddCss"],
    ["data-auto-a11y", "autoA11y"],
    ["data-search-pseudo-elements", "searchPseudoElements"],
    ["data-observe-mutations", "observeMutations"],
    ["data-mutate-approach", "mutateApproach"],
    ["data-keep-original-source", "keepOriginalSource"],
    ["data-measure-performance", "measurePerformance"],
    ["data-show-missing-icons", "showMissingIcons"],
  ].forEach((i) => {
    let [r, o] = i;
    const c = O2(E2(r));
    c != null && (Yl[o] = c);
  });
const y0 = {
  styleDefault: "solid",
  familyDefault: de,
  cssPrefix: f0,
  replacementClass: d0,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
Yl.familyPrefix && (Yl.cssPrefix = Yl.familyPrefix);
const ki = U(U({}, y0), Yl);
ki.autoReplaceSvg || (ki.observeMutations = !1);
const J = {};
Object.keys(y0).forEach((s) => {
  Object.defineProperty(J, s, {
    enumerable: !0,
    set: function (i) {
      (ki[s] = i), Vl.forEach((r) => r(J));
    },
    get: function () {
      return ki[s];
    },
  });
});
Object.defineProperty(J, "familyPrefix", {
  enumerable: !0,
  set: function (s) {
    (ki.cssPrefix = s), Vl.forEach((i) => i(J));
  },
  get: function () {
    return ki.cssPrefix;
  },
});
oa.FontAwesomeConfig = J;
const Vl = [];
function _2(s) {
  return (
    Vl.push(s),
    () => {
      Vl.splice(Vl.indexOf(s), 1);
    }
  );
}
const ra = xc,
  fn = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function R2(s) {
  if (!s || !qn) return;
  const i = Dt.createElement("style");
  i.setAttribute("type", "text/css"), (i.innerHTML = s);
  const r = Dt.head.childNodes;
  let o = null;
  for (let c = r.length - 1; c > -1; c--) {
    const d = r[c],
      m = (d.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(m) > -1 && (o = d);
  }
  return Dt.head.insertBefore(i, o), s;
}
const M2 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Zl() {
  let s = 12,
    i = "";
  for (; s-- > 0; ) i += M2[(Math.random() * 62) | 0];
  return i;
}
function Ui(s) {
  const i = [];
  for (let r = (s || []).length >>> 0; r--; ) i[r] = s[r];
  return i;
}
function Kc(s) {
  return s.classList
    ? Ui(s.classList)
    : (s.getAttribute("class") || "").split(" ").filter((i) => i);
}
function v0(s) {
  return ""
    .concat(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function N2(s) {
  return Object.keys(s || {})
    .reduce((i, r) => i + "".concat(r, '="').concat(v0(s[r]), '" '), "")
    .trim();
}
function Dr(s) {
  return Object.keys(s || {}).reduce(
    (i, r) => i + "".concat(r, ": ").concat(s[r].trim(), ";"),
    ""
  );
}
function $c(s) {
  return (
    s.size !== fn.size ||
    s.x !== fn.x ||
    s.y !== fn.y ||
    s.rotate !== fn.rotate ||
    s.flipX ||
    s.flipY
  );
}
function C2(s) {
  let { transform: i, containerWidth: r, iconWidth: o } = s;
  const c = { transform: "translate(".concat(r / 2, " 256)") },
    d = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") "),
    m = "scale("
      .concat((i.size / 16) * (i.flipX ? -1 : 1), ", ")
      .concat((i.size / 16) * (i.flipY ? -1 : 1), ") "),
    p = "rotate(".concat(i.rotate, " 0 0)"),
    S = { transform: "".concat(d, " ").concat(m, " ").concat(p) },
    g = { transform: "translate(".concat((o / 2) * -1, " -256)") };
  return { outer: c, inner: S, path: g };
}
function D2(s) {
  let {
      transform: i,
      width: r = xc,
      height: o = xc,
      startCentered: c = !1,
    } = s,
    d = "";
  return (
    c && s0
      ? (d += "translate("
          .concat(i.x / ra - r / 2, "em, ")
          .concat(i.y / ra - o / 2, "em) "))
      : c
      ? (d += "translate(calc(-50% + "
          .concat(i.x / ra, "em), calc(-50% + ")
          .concat(i.y / ra, "em)) "))
      : (d += "translate(".concat(i.x / ra, "em, ").concat(i.y / ra, "em) ")),
    (d += "scale("
      .concat((i.size / ra) * (i.flipX ? -1 : 1), ", ")
      .concat((i.size / ra) * (i.flipY ? -1 : 1), ") ")),
    (d += "rotate(".concat(i.rotate, "deg) ")),
    d
  );
}
var z2 = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;
function p0() {
  const s = f0,
    i = d0,
    r = J.cssPrefix,
    o = J.replacementClass;
  let c = z2;
  if (r !== s || o !== i) {
    const d = new RegExp("\\.".concat(s, "\\-"), "g"),
      m = new RegExp("\\--".concat(s, "\\-"), "g"),
      p = new RegExp("\\.".concat(i), "g");
    c = c
      .replace(d, ".".concat(r, "-"))
      .replace(m, "--".concat(r, "-"))
      .replace(p, ".".concat(o));
  }
  return c;
}
let vg = !1;
function rc() {
  J.autoAddCss && !vg && (R2(p0()), (vg = !0));
}
var q2 = {
  mixout() {
    return { dom: { css: p0, insertCss: rc } };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        rc();
      },
      beforeI2svg() {
        rc();
      },
    };
  },
};
const zn = oa || {};
zn[Dn] || (zn[Dn] = {});
zn[Dn].styles || (zn[Dn].styles = {});
zn[Dn].hooks || (zn[Dn].hooks = {});
zn[Dn].shims || (zn[Dn].shims = []);
var dn = zn[Dn];
const b0 = [],
  S0 = function () {
    Dt.removeEventListener("DOMContentLoaded", S0),
      (_r = 1),
      b0.map((s) => s());
  };
let _r = !1;
qn &&
  ((_r = (Dt.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    Dt.readyState
  )),
  _r || Dt.addEventListener("DOMContentLoaded", S0));
function j2(s) {
  qn && (_r ? setTimeout(s, 0) : b0.push(s));
}
function Jl(s) {
  const { tag: i, attributes: r = {}, children: o = [] } = s;
  return typeof s == "string"
    ? v0(s)
    : "<"
        .concat(i, " ")
        .concat(N2(r), ">")
        .concat(o.map(Jl).join(""), "</")
        .concat(i, ">");
}
function pg(s, i, r) {
  if (s && s[i] && s[i][r]) return { prefix: i, iconName: r, icon: s[i][r] };
}
var uc = function (i, r, o, c) {
  var d = Object.keys(i),
    m = d.length,
    p = r,
    S,
    g,
    O;
  for (o === void 0 ? ((S = 1), (O = i[d[0]])) : ((S = 0), (O = o)); S < m; S++)
    (g = d[S]), (O = p(O, i[g], g, i));
  return O;
};
function k2(s) {
  const i = [];
  let r = 0;
  const o = s.length;
  for (; r < o; ) {
    const c = s.charCodeAt(r++);
    if (c >= 55296 && c <= 56319 && r < o) {
      const d = s.charCodeAt(r++);
      (d & 64512) == 56320
        ? i.push(((c & 1023) << 10) + (d & 1023) + 65536)
        : (i.push(c), r--);
    } else i.push(c);
  }
  return i;
}
function Oc(s) {
  const i = k2(s);
  return i.length === 1 ? i[0].toString(16) : null;
}
function U2(s, i) {
  const r = s.length;
  let o = s.charCodeAt(i),
    c;
  return o >= 55296 &&
    o <= 56319 &&
    r > i + 1 &&
    ((c = s.charCodeAt(i + 1)), c >= 56320 && c <= 57343)
    ? (o - 55296) * 1024 + c - 56320 + 65536
    : o;
}
function bg(s) {
  return Object.keys(s).reduce((i, r) => {
    const o = s[r];
    return !!o.icon ? (i[o.iconName] = o.icon) : (i[r] = o), i;
  }, {});
}
function _c(s, i) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { skipHooks: o = !1 } = r,
    c = bg(i);
  typeof dn.hooks.addPack == "function" && !o
    ? dn.hooks.addPack(s, bg(i))
    : (dn.styles[s] = U(U({}, dn.styles[s] || {}), c)),
    s === "fas" && _c("fa", i);
}
const { styles: Kl, shims: L2 } = dn,
  x0 = Object.keys(Zc),
  B2 = x0.reduce((s, i) => ((s[i] = Object.keys(Zc[i])), s), {});
let Jc = null,
  A0 = {},
  T0 = {},
  w0 = {},
  E0 = {},
  O0 = {};
function H2(s) {
  return ~w2.indexOf(s);
}
function Y2(s, i) {
  const r = i.split("-"),
    o = r[0],
    c = r.slice(1).join("-");
  return o === s && c !== "" && !H2(c) ? c : null;
}
const _0 = () => {
  const s = (o) => uc(Kl, (c, d, m) => ((c[m] = uc(d, o, {})), c), {});
  (A0 = s(
    (o, c, d) => (
      c[3] && (o[c[3]] = d),
      c[2] &&
        c[2]
          .filter((p) => typeof p == "number")
          .forEach((p) => {
            o[p.toString(16)] = d;
          }),
      o
    )
  )),
    (T0 = s(
      (o, c, d) => (
        (o[d] = d),
        c[2] &&
          c[2]
            .filter((p) => typeof p == "string")
            .forEach((p) => {
              o[p] = d;
            }),
        o
      )
    )),
    (O0 = s((o, c, d) => {
      const m = c[2];
      return (
        (o[d] = d),
        m.forEach((p) => {
          o[p] = d;
        }),
        o
      );
    }));
  const i = "far" in Kl || J.autoFetchSvg,
    r = uc(
      L2,
      (o, c) => {
        const d = c[0];
        let m = c[1];
        const p = c[2];
        return (
          m === "far" && !i && (m = "fas"),
          typeof d == "string" && (o.names[d] = { prefix: m, iconName: p }),
          typeof d == "number" &&
            (o.unicodes[d.toString(16)] = { prefix: m, iconName: p }),
          o
        );
      },
      { names: {}, unicodes: {} }
    );
  (w0 = r.names),
    (E0 = r.unicodes),
    (Jc = zr(J.styleDefault, { family: J.familyDefault }));
};
_2((s) => {
  Jc = zr(s.styleDefault, { family: J.familyDefault });
});
_0();
function Fc(s, i) {
  return (A0[s] || {})[i];
}
function V2(s, i) {
  return (T0[s] || {})[i];
}
function ka(s, i) {
  return (O0[s] || {})[i];
}
function R0(s) {
  return w0[s] || { prefix: null, iconName: null };
}
function Q2(s) {
  const i = E0[s],
    r = Fc("fas", s);
  return (
    i ||
    (r ? { prefix: "fas", iconName: r } : null) || {
      prefix: null,
      iconName: null,
    }
  );
}
function ca() {
  return Jc;
}
const M0 = () => ({ prefix: null, iconName: null, rest: [] });
function G2(s) {
  let i = de;
  const r = x0.reduce(
    (o, c) => ((o[c] = "".concat(J.cssPrefix, "-").concat(c)), o),
    {}
  );
  return (
    o0.forEach((o) => {
      (s.includes(r[o]) || s.some((c) => B2[o].includes(c))) && (i = o);
    }),
    i
  );
}
function zr(s) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { family: r = de } = i,
    o = b2[r][s];
  if (r === Cr && !s) return "fad";
  const c = yg[r][s] || yg[r][o],
    d = s in dn.styles ? s : null;
  return c || d || null;
}
function X2(s) {
  let i = [],
    r = null;
  return (
    s.forEach((o) => {
      const c = Y2(J.cssPrefix, o);
      c ? (r = c) : o && i.push(o);
    }),
    { iconName: r, rest: i }
  );
}
function Sg(s) {
  return s.sort().filter((i, r, o) => o.indexOf(i) === r);
}
function qr(s) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { skipLookups: r = !1 } = i;
  let o = null;
  const c = Sc.concat(r2),
    d = Sg(s.filter((v) => c.includes(v))),
    m = Sg(s.filter((v) => !Sc.includes(v))),
    p = d.filter((v) => ((o = v), !u0.includes(v))),
    [S = null] = p,
    g = G2(d),
    O = U(U({}, X2(m)), {}, { prefix: zr(S, { family: g }) });
  return U(
    U(
      U({}, O),
      J2({
        values: s,
        family: g,
        styles: Kl,
        config: J,
        canonical: O,
        givenPrefix: o,
      })
    ),
    Z2(r, o, O)
  );
}
function Z2(s, i, r) {
  let { prefix: o, iconName: c } = r;
  if (s || !o || !c) return { prefix: o, iconName: c };
  const d = i === "fa" ? R0(c) : {},
    m = ka(o, c);
  return (
    (c = d.iconName || m || c),
    (o = d.prefix || o),
    o === "far" && !Kl.far && Kl.fas && !J.autoFetchSvg && (o = "fas"),
    { prefix: o, iconName: c }
  );
}
const K2 = o0.filter((s) => s !== de || s !== Cr),
  $2 = Object.keys(bc)
    .filter((s) => s !== de)
    .map((s) => Object.keys(bc[s]))
    .flat();
function J2(s) {
  const {
      values: i,
      family: r,
      canonical: o,
      givenPrefix: c = "",
      styles: d = {},
      config: m = {},
    } = s,
    p = r === Cr,
    S = i.includes("fa-duotone") || i.includes("fad"),
    g = m.familyDefault === "duotone",
    O = o.prefix === "fad" || o.prefix === "fa-duotone";
  if (
    (!p && (S || g || O) && (o.prefix = "fad"),
    (i.includes("fa-brands") || i.includes("fab")) && (o.prefix = "fab"),
    !o.prefix &&
      K2.includes(r) &&
      (Object.keys(d).find((C) => $2.includes(C)) || m.autoFetchSvg))
  ) {
    const C = Pb.get(r).defaultShortPrefixId;
    (o.prefix = C), (o.iconName = ka(o.prefix, o.iconName) || o.iconName);
  }
  return (o.prefix === "fa" || c === "fa") && (o.prefix = ca() || "fas"), o;
}
class F2 {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++)
      r[o] = arguments[o];
    const c = r.reduce(this._pullDefinitions, {});
    Object.keys(c).forEach((d) => {
      (this.definitions[d] = U(U({}, this.definitions[d] || {}), c[d])),
        _c(d, c[d]);
      const m = Zc[de][d];
      m && _c(m, c[d]), _0();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(i, r) {
    const o = r.prefix && r.iconName && r.icon ? { 0: r } : r;
    return (
      Object.keys(o).map((c) => {
        const { prefix: d, iconName: m, icon: p } = o[c],
          S = p[2];
        i[d] || (i[d] = {}),
          S.length > 0 &&
            S.forEach((g) => {
              typeof g == "string" && (i[d][g] = p);
            }),
          (i[d][m] = p);
      }),
      i
    );
  }
}
let xg = [],
  Di = {};
const qi = {},
  I2 = Object.keys(qi);
function W2(s, i) {
  let { mixoutsTo: r } = i;
  return (
    (xg = s),
    (Di = {}),
    Object.keys(qi).forEach((o) => {
      I2.indexOf(o) === -1 && delete qi[o];
    }),
    xg.forEach((o) => {
      const c = o.mixout ? o.mixout() : {};
      if (
        (Object.keys(c).forEach((d) => {
          typeof c[d] == "function" && (r[d] = c[d]),
            typeof c[d] == "object" &&
              Object.keys(c[d]).forEach((m) => {
                r[d] || (r[d] = {}), (r[d][m] = c[d][m]);
              });
        }),
        o.hooks)
      ) {
        const d = o.hooks();
        Object.keys(d).forEach((m) => {
          Di[m] || (Di[m] = []), Di[m].push(d[m]);
        });
      }
      o.provides && o.provides(qi);
    }),
    r
  );
}
function Rc(s, i) {
  for (
    var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), c = 2;
    c < r;
    c++
  )
    o[c - 2] = arguments[c];
  return (
    (Di[s] || []).forEach((m) => {
      i = m.apply(null, [i, ...o]);
    }),
    i
  );
}
function Ba(s) {
  for (
    var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), o = 1;
    o < i;
    o++
  )
    r[o - 1] = arguments[o];
  (Di[s] || []).forEach((d) => {
    d.apply(null, r);
  });
}
function fa() {
  const s = arguments[0],
    i = Array.prototype.slice.call(arguments, 1);
  return qi[s] ? qi[s].apply(null, i) : void 0;
}
function Mc(s) {
  s.prefix === "fa" && (s.prefix = "fas");
  let { iconName: i } = s;
  const r = s.prefix || ca();
  if (i)
    return (i = ka(r, i) || i), pg(N0.definitions, r, i) || pg(dn.styles, r, i);
}
const N0 = new F2(),
  P2 = () => {
    (J.autoReplaceSvg = !1), (J.observeMutations = !1), Ba("noAuto");
  },
  tS = {
    i2svg: function () {
      let s =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return qn
        ? (Ba("beforeI2svg", s), fa("pseudoElements2svg", s), fa("i2svg", s))
        : Promise.reject(new Error("Operation requires a DOM of some kind."));
    },
    watch: function () {
      let s =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const { autoReplaceSvgRoot: i } = s;
      J.autoReplaceSvg === !1 && (J.autoReplaceSvg = !0),
        (J.observeMutations = !0),
        j2(() => {
          nS({ autoReplaceSvgRoot: i }), Ba("watch", s);
        });
    },
  },
  eS = {
    icon: (s) => {
      if (s === null) return null;
      if (typeof s == "object" && s.prefix && s.iconName)
        return {
          prefix: s.prefix,
          iconName: ka(s.prefix, s.iconName) || s.iconName,
        };
      if (Array.isArray(s) && s.length === 2) {
        const i = s[1].indexOf("fa-") === 0 ? s[1].slice(3) : s[1],
          r = zr(s[0]);
        return { prefix: r, iconName: ka(r, i) || i };
      }
      if (
        typeof s == "string" &&
        (s.indexOf("".concat(J.cssPrefix, "-")) > -1 || s.match(S2))
      ) {
        const i = qr(s.split(" "), { skipLookups: !0 });
        return {
          prefix: i.prefix || ca(),
          iconName: ka(i.prefix, i.iconName) || i.iconName,
        };
      }
      if (typeof s == "string") {
        const i = ca();
        return { prefix: i, iconName: ka(i, s) || s };
      }
    },
  },
  ze = {
    noAuto: P2,
    config: J,
    dom: tS,
    parse: eS,
    library: N0,
    findIconDefinition: Mc,
    toHtml: Jl,
  },
  nS = function () {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { autoReplaceSvgRoot: i = Dt } = s;
    (Object.keys(dn.styles).length > 0 || J.autoFetchSvg) &&
      qn &&
      J.autoReplaceSvg &&
      ze.dom.i2svg({ node: i });
  };
function jr(s, i) {
  return (
    Object.defineProperty(s, "abstract", { get: i }),
    Object.defineProperty(s, "html", {
      get: function () {
        return s.abstract.map((r) => Jl(r));
      },
    }),
    Object.defineProperty(s, "node", {
      get: function () {
        if (!qn) return;
        const r = Dt.createElement("div");
        return (r.innerHTML = s.html), r.children;
      },
    }),
    s
  );
}
function aS(s) {
  let {
    children: i,
    main: r,
    mask: o,
    attributes: c,
    styles: d,
    transform: m,
  } = s;
  if ($c(m) && r.found && !o.found) {
    const { width: p, height: S } = r,
      g = { x: p / S / 2, y: 0.5 };
    c.style = Dr(
      U(
        U({}, d),
        {},
        {
          "transform-origin": ""
            .concat(g.x + m.x / 16, "em ")
            .concat(g.y + m.y / 16, "em"),
        }
      )
    );
  }
  return [{ tag: "svg", attributes: c, children: i }];
}
function iS(s) {
  let { prefix: i, iconName: r, children: o, attributes: c, symbol: d } = s;
  const m = d === !0 ? "".concat(i, "-").concat(J.cssPrefix, "-").concat(r) : d;
  return [
    {
      tag: "svg",
      attributes: { style: "display: none;" },
      children: [
        { tag: "symbol", attributes: U(U({}, c), {}, { id: m }), children: o },
      ],
    },
  ];
}
function Ic(s) {
  const {
      icons: { main: i, mask: r },
      prefix: o,
      iconName: c,
      transform: d,
      symbol: m,
      title: p,
      maskId: S,
      titleId: g,
      extra: O,
      watchable: v = !1,
    } = s,
    { width: C, height: H } = r.found ? r : i,
    Z = i2.includes(o),
    at = [J.replacementClass, c ? "".concat(J.cssPrefix, "-").concat(c) : ""]
      .filter((K) => O.classes.indexOf(K) === -1)
      .filter((K) => K !== "" || !!K)
      .concat(O.classes)
      .join(" ");
  let V = {
    children: [],
    attributes: U(
      U({}, O.attributes),
      {},
      {
        "data-prefix": o,
        "data-icon": c,
        class: at,
        role: O.attributes.role || "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 ".concat(C, " ").concat(H),
      }
    ),
  };
  const ot =
    Z && !~O.classes.indexOf("fa-fw")
      ? { width: "".concat((C / H) * 16 * 0.0625, "em") }
      : {};
  v && (V.attributes[La] = ""),
    p &&
      (V.children.push({
        tag: "title",
        attributes: {
          id: V.attributes["aria-labelledby"] || "title-".concat(g || Zl()),
        },
        children: [p],
      }),
      delete V.attributes.title);
  const mt = U(
      U({}, V),
      {},
      {
        prefix: o,
        iconName: c,
        main: i,
        mask: r,
        maskId: S,
        transform: d,
        symbol: m,
        styles: U(U({}, ot), O.styles),
      }
    ),
    { children: nt, attributes: ct } =
      r.found && i.found
        ? fa("generateAbstractMask", mt) || { children: [], attributes: {} }
        : fa("generateAbstractIcon", mt) || { children: [], attributes: {} };
  return (mt.children = nt), (mt.attributes = ct), m ? iS(mt) : aS(mt);
}
function Ag(s) {
  const {
      content: i,
      width: r,
      height: o,
      transform: c,
      title: d,
      extra: m,
      watchable: p = !1,
    } = s,
    S = U(
      U(U({}, m.attributes), d ? { title: d } : {}),
      {},
      { class: m.classes.join(" ") }
    );
  p && (S[La] = "");
  const g = U({}, m.styles);
  $c(c) &&
    ((g.transform = D2({
      transform: c,
      startCentered: !0,
      width: r,
      height: o,
    })),
    (g["-webkit-transform"] = g.transform));
  const O = Dr(g);
  O.length > 0 && (S.style = O);
  const v = [];
  return (
    v.push({ tag: "span", attributes: S, children: [i] }),
    d &&
      v.push({ tag: "span", attributes: { class: "sr-only" }, children: [d] }),
    v
  );
}
function lS(s) {
  const { content: i, title: r, extra: o } = s,
    c = U(
      U(U({}, o.attributes), r ? { title: r } : {}),
      {},
      { class: o.classes.join(" ") }
    ),
    d = Dr(o.styles);
  d.length > 0 && (c.style = d);
  const m = [];
  return (
    m.push({ tag: "span", attributes: c, children: [i] }),
    r &&
      m.push({ tag: "span", attributes: { class: "sr-only" }, children: [r] }),
    m
  );
}
const { styles: oc } = dn;
function Nc(s) {
  const i = s[0],
    r = s[1],
    [o] = s.slice(4);
  let c = null;
  return (
    Array.isArray(o)
      ? (c = {
          tag: "g",
          attributes: { class: "".concat(J.cssPrefix, "-").concat(sc.GROUP) },
          children: [
            {
              tag: "path",
              attributes: {
                class: "".concat(J.cssPrefix, "-").concat(sc.SECONDARY),
                fill: "currentColor",
                d: o[0],
              },
            },
            {
              tag: "path",
              attributes: {
                class: "".concat(J.cssPrefix, "-").concat(sc.PRIMARY),
                fill: "currentColor",
                d: o[1],
              },
            },
          ],
        })
      : (c = { tag: "path", attributes: { fill: "currentColor", d: o } }),
    { found: !0, width: i, height: r, icon: c }
  );
}
const sS = { found: !1, width: 512, height: 512 };
function rS(s, i) {
  !h0 &&
    !J.showMissingIcons &&
    s &&
    console.error(
      'Icon with name "'.concat(s, '" and prefix "').concat(i, '" is missing.')
    );
}
function Cc(s, i) {
  let r = i;
  return (
    i === "fa" && J.styleDefault !== null && (i = ca()),
    new Promise((o, c) => {
      if (r === "fa") {
        const d = R0(s) || {};
        (s = d.iconName || s), (i = d.prefix || i);
      }
      if (s && i && oc[i] && oc[i][s]) {
        const d = oc[i][s];
        return o(Nc(d));
      }
      rS(s, i),
        o(
          U(
            U({}, sS),
            {},
            {
              icon:
                J.showMissingIcons && s ? fa("missingIconAbstract") || {} : {},
            }
          )
        );
    })
  );
}
const Tg = () => {},
  Dc =
    J.measurePerformance && Sr && Sr.mark && Sr.measure
      ? Sr
      : { mark: Tg, measure: Tg },
  Ll = 'FA "6.7.2"',
  uS = (s) => (Dc.mark("".concat(Ll, " ").concat(s, " begins")), () => C0(s)),
  C0 = (s) => {
    Dc.mark("".concat(Ll, " ").concat(s, " ends")),
      Dc.measure(
        "".concat(Ll, " ").concat(s),
        "".concat(Ll, " ").concat(s, " begins"),
        "".concat(Ll, " ").concat(s, " ends")
      );
  };
var Wc = { begin: uS, end: C0 };
const Ar = () => {};
function wg(s) {
  return typeof (s.getAttribute ? s.getAttribute(La) : null) == "string";
}
function oS(s) {
  const i = s.getAttribute ? s.getAttribute(Gc) : null,
    r = s.getAttribute ? s.getAttribute(Xc) : null;
  return i && r;
}
function cS(s) {
  return (
    s &&
    s.classList &&
    s.classList.contains &&
    s.classList.contains(J.replacementClass)
  );
}
function fS() {
  return J.autoReplaceSvg === !0
    ? Tr.replace
    : Tr[J.autoReplaceSvg] || Tr.replace;
}
function dS(s) {
  return Dt.createElementNS("http://www.w3.org/2000/svg", s);
}
function hS(s) {
  return Dt.createElement(s);
}
function D0(s) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { ceFn: r = s.tag === "svg" ? dS : hS } = i;
  if (typeof s == "string") return Dt.createTextNode(s);
  const o = r(s.tag);
  return (
    Object.keys(s.attributes || []).forEach(function (d) {
      o.setAttribute(d, s.attributes[d]);
    }),
    (s.children || []).forEach(function (d) {
      o.appendChild(D0(d, { ceFn: r }));
    }),
    o
  );
}
function mS(s) {
  let i = " ".concat(s.outerHTML, " ");
  return (i = "".concat(i, "Font Awesome fontawesome.com ")), i;
}
const Tr = {
  replace: function (s) {
    const i = s[0];
    if (i.parentNode)
      if (
        (s[1].forEach((r) => {
          i.parentNode.insertBefore(D0(r), i);
        }),
        i.getAttribute(La) === null && J.keepOriginalSource)
      ) {
        let r = Dt.createComment(mS(i));
        i.parentNode.replaceChild(r, i);
      } else i.remove();
  },
  nest: function (s) {
    const i = s[0],
      r = s[1];
    if (~Kc(i).indexOf(J.replacementClass)) return Tr.replace(s);
    const o = new RegExp("".concat(J.cssPrefix, "-.*"));
    if ((delete r[0].attributes.id, r[0].attributes.class)) {
      const d = r[0].attributes.class
        .split(" ")
        .reduce(
          (m, p) => (
            p === J.replacementClass || p.match(o)
              ? m.toSvg.push(p)
              : m.toNode.push(p),
            m
          ),
          { toNode: [], toSvg: [] }
        );
      (r[0].attributes.class = d.toSvg.join(" ")),
        d.toNode.length === 0
          ? i.removeAttribute("class")
          : i.setAttribute("class", d.toNode.join(" "));
    }
    const c = r.map((d) => Jl(d)).join(`
`);
    i.setAttribute(La, ""), (i.innerHTML = c);
  },
};
function Eg(s) {
  s();
}
function z0(s, i) {
  const r = typeof i == "function" ? i : Ar;
  if (s.length === 0) r();
  else {
    let o = Eg;
    J.mutateApproach === v2 && (o = oa.requestAnimationFrame || Eg),
      o(() => {
        const c = fS(),
          d = Wc.begin("mutate");
        s.map(c), d(), r();
      });
  }
}
let Pc = !1;
function q0() {
  Pc = !0;
}
function zc() {
  Pc = !1;
}
let Rr = null;
function Og(s) {
  if (!dg || !J.observeMutations) return;
  const {
    treeCallback: i = Ar,
    nodeCallback: r = Ar,
    pseudoElementsCallback: o = Ar,
    observeMutationsRoot: c = Dt,
  } = s;
  (Rr = new dg((d) => {
    if (Pc) return;
    const m = ca();
    Ui(d).forEach((p) => {
      if (
        (p.type === "childList" &&
          p.addedNodes.length > 0 &&
          !wg(p.addedNodes[0]) &&
          (J.searchPseudoElements && o(p.target), i(p.target)),
        p.type === "attributes" &&
          p.target.parentNode &&
          J.searchPseudoElements &&
          o(p.target.parentNode),
        p.type === "attributes" && wg(p.target) && ~T2.indexOf(p.attributeName))
      )
        if (p.attributeName === "class" && oS(p.target)) {
          const { prefix: S, iconName: g } = qr(Kc(p.target));
          p.target.setAttribute(Gc, S || m), g && p.target.setAttribute(Xc, g);
        } else cS(p.target) && r(p.target);
    });
  })),
    qn &&
      Rr.observe(c, {
        childList: !0,
        attributes: !0,
        characterData: !0,
        subtree: !0,
      });
}
function gS() {
  Rr && Rr.disconnect();
}
function yS(s) {
  const i = s.getAttribute("style");
  let r = [];
  return (
    i &&
      (r = i.split(";").reduce((o, c) => {
        const d = c.split(":"),
          m = d[0],
          p = d.slice(1);
        return m && p.length > 0 && (o[m] = p.join(":").trim()), o;
      }, {})),
    r
  );
}
function vS(s) {
  const i = s.getAttribute("data-prefix"),
    r = s.getAttribute("data-icon"),
    o = s.innerText !== void 0 ? s.innerText.trim() : "";
  let c = qr(Kc(s));
  return (
    c.prefix || (c.prefix = ca()),
    i && r && ((c.prefix = i), (c.iconName = r)),
    (c.iconName && c.prefix) ||
      (c.prefix &&
        o.length > 0 &&
        (c.iconName =
          V2(c.prefix, s.innerText) || Fc(c.prefix, Oc(s.innerText))),
      !c.iconName &&
        J.autoFetchSvg &&
        s.firstChild &&
        s.firstChild.nodeType === Node.TEXT_NODE &&
        (c.iconName = s.firstChild.data)),
    c
  );
}
function pS(s) {
  const i = Ui(s.attributes).reduce(
      (c, d) => (
        c.name !== "class" && c.name !== "style" && (c[d.name] = d.value), c
      ),
      {}
    ),
    r = s.getAttribute("title"),
    o = s.getAttribute("data-fa-title-id");
  return (
    J.autoA11y &&
      (r
        ? (i["aria-labelledby"] = ""
            .concat(J.replacementClass, "-title-")
            .concat(o || Zl()))
        : ((i["aria-hidden"] = "true"), (i.focusable = "false"))),
    i
  );
}
function bS() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: fn,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function _g(s) {
  let i =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : { styleParser: !0 };
  const { iconName: r, prefix: o, rest: c } = vS(s),
    d = pS(s),
    m = Rc("parseNodeAttributes", {}, s);
  let p = i.styleParser ? yS(s) : [];
  return U(
    {
      iconName: r,
      title: s.getAttribute("title"),
      titleId: s.getAttribute("data-fa-title-id"),
      prefix: o,
      transform: fn,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: c, styles: p, attributes: d },
    },
    m
  );
}
const { styles: SS } = dn;
function j0(s) {
  const i = J.autoReplaceSvg === "nest" ? _g(s, { styleParser: !1 }) : _g(s);
  return ~i.extra.classes.indexOf(g0)
    ? fa("generateLayersText", s, i)
    : fa("generateSvgReplacementMutation", s, i);
}
function xS() {
  return [...e2, ...Sc];
}
function Rg(s) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!qn) return Promise.resolve();
  const r = Dt.documentElement.classList,
    o = (O) => r.add("".concat(gg, "-").concat(O)),
    c = (O) => r.remove("".concat(gg, "-").concat(O)),
    d = J.autoFetchSvg ? xS() : u0.concat(Object.keys(SS));
  d.includes("fa") || d.push("fa");
  const m = [".".concat(g0, ":not([").concat(La, "])")]
    .concat(d.map((O) => ".".concat(O, ":not([").concat(La, "])")))
    .join(", ");
  if (m.length === 0) return Promise.resolve();
  let p = [];
  try {
    p = Ui(s.querySelectorAll(m));
  } catch {}
  if (p.length > 0) o("pending"), c("complete");
  else return Promise.resolve();
  const S = Wc.begin("onTree"),
    g = p.reduce((O, v) => {
      try {
        const C = j0(v);
        C && O.push(C);
      } catch (C) {
        h0 || (C.name === "MissingIcon" && console.error(C));
      }
      return O;
    }, []);
  return new Promise((O, v) => {
    Promise.all(g)
      .then((C) => {
        z0(C, () => {
          o("active"),
            o("complete"),
            c("pending"),
            typeof i == "function" && i(),
            S(),
            O();
        });
      })
      .catch((C) => {
        S(), v(C);
      });
  });
}
function AS(s) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  j0(s).then((r) => {
    r && z0([r], i);
  });
}
function TS(s) {
  return function (i) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const o = (i || {}).icon ? i : Mc(i || {});
    let { mask: c } = r;
    return (
      c && (c = (c || {}).icon ? c : Mc(c || {})),
      s(o, U(U({}, r), {}, { mask: c }))
    );
  };
}
const wS = function (s) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: r = fn,
    symbol: o = !1,
    mask: c = null,
    maskId: d = null,
    title: m = null,
    titleId: p = null,
    classes: S = [],
    attributes: g = {},
    styles: O = {},
  } = i;
  if (!s) return;
  const { prefix: v, iconName: C, icon: H } = s;
  return jr(
    U({ type: "icon" }, s),
    () => (
      Ba("beforeDOMElementCreation", { iconDefinition: s, params: i }),
      J.autoA11y &&
        (m
          ? (g["aria-labelledby"] = ""
              .concat(J.replacementClass, "-title-")
              .concat(p || Zl()))
          : ((g["aria-hidden"] = "true"), (g.focusable = "false"))),
      Ic({
        icons: {
          main: Nc(H),
          mask: c
            ? Nc(c.icon)
            : { found: !1, width: null, height: null, icon: {} },
        },
        prefix: v,
        iconName: C,
        transform: U(U({}, fn), r),
        symbol: o,
        title: m,
        maskId: d,
        titleId: p,
        extra: { attributes: g, styles: O, classes: S },
      })
    )
  );
};
var ES = {
    mixout() {
      return { icon: TS(wS) };
    },
    hooks() {
      return {
        mutationObserverCallbacks(s) {
          return (s.treeCallback = Rg), (s.nodeCallback = AS), s;
        },
      };
    },
    provides(s) {
      (s.i2svg = function (i) {
        const { node: r = Dt, callback: o = () => {} } = i;
        return Rg(r, o);
      }),
        (s.generateSvgReplacementMutation = function (i, r) {
          const {
            iconName: o,
            title: c,
            titleId: d,
            prefix: m,
            transform: p,
            symbol: S,
            mask: g,
            maskId: O,
            extra: v,
          } = r;
          return new Promise((C, H) => {
            Promise.all([
              Cc(o, m),
              g.iconName
                ? Cc(g.iconName, g.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then((Z) => {
                let [at, V] = Z;
                C([
                  i,
                  Ic({
                    icons: { main: at, mask: V },
                    prefix: m,
                    iconName: o,
                    transform: p,
                    symbol: S,
                    maskId: O,
                    title: c,
                    titleId: d,
                    extra: v,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(H);
          });
        }),
        (s.generateAbstractIcon = function (i) {
          let {
            children: r,
            attributes: o,
            main: c,
            transform: d,
            styles: m,
          } = i;
          const p = Dr(m);
          p.length > 0 && (o.style = p);
          let S;
          return (
            $c(d) &&
              (S = fa("generateAbstractTransformGrouping", {
                main: c,
                transform: d,
                containerWidth: c.width,
                iconWidth: c.width,
              })),
            r.push(S || c.icon),
            { children: r, attributes: o }
          );
        });
    },
  },
  OS = {
    mixout() {
      return {
        layer(s) {
          let i =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const { classes: r = [] } = i;
          return jr({ type: "layer" }, () => {
            Ba("beforeDOMElementCreation", { assembler: s, params: i });
            let o = [];
            return (
              s((c) => {
                Array.isArray(c)
                  ? c.map((d) => {
                      o = o.concat(d.abstract);
                    })
                  : (o = o.concat(c.abstract));
              }),
              [
                {
                  tag: "span",
                  attributes: {
                    class: ["".concat(J.cssPrefix, "-layers"), ...r].join(" "),
                  },
                  children: o,
                },
              ]
            );
          });
        },
      };
    },
  },
  _S = {
    mixout() {
      return {
        counter(s) {
          let i =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            title: r = null,
            classes: o = [],
            attributes: c = {},
            styles: d = {},
          } = i;
          return jr(
            { type: "counter", content: s },
            () => (
              Ba("beforeDOMElementCreation", { content: s, params: i }),
              lS({
                content: s.toString(),
                title: r,
                extra: {
                  attributes: c,
                  styles: d,
                  classes: ["".concat(J.cssPrefix, "-layers-counter"), ...o],
                },
              })
            )
          );
        },
      };
    },
  },
  RS = {
    mixout() {
      return {
        text(s) {
          let i =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            transform: r = fn,
            title: o = null,
            classes: c = [],
            attributes: d = {},
            styles: m = {},
          } = i;
          return jr(
            { type: "text", content: s },
            () => (
              Ba("beforeDOMElementCreation", { content: s, params: i }),
              Ag({
                content: s,
                transform: U(U({}, fn), r),
                title: o,
                extra: {
                  attributes: d,
                  styles: m,
                  classes: ["".concat(J.cssPrefix, "-layers-text"), ...c],
                },
              })
            )
          );
        },
      };
    },
    provides(s) {
      s.generateLayersText = function (i, r) {
        const { title: o, transform: c, extra: d } = r;
        let m = null,
          p = null;
        if (s0) {
          const S = parseInt(getComputedStyle(i).fontSize, 10),
            g = i.getBoundingClientRect();
          (m = g.width / S), (p = g.height / S);
        }
        return (
          J.autoA11y && !o && (d.attributes["aria-hidden"] = "true"),
          Promise.resolve([
            i,
            Ag({
              content: i.innerHTML,
              width: m,
              height: p,
              transform: c,
              title: o,
              extra: d,
              watchable: !0,
            }),
          ])
        );
      };
    },
  };
const MS = new RegExp('"', "ug"),
  Mg = [1105920, 1112319],
  Ng = U(
    U(U(U({}, { FontAwesome: { normal: "fas", 400: "fas" } }), Wb), g2),
    u2
  ),
  qc = Object.keys(Ng).reduce((s, i) => ((s[i.toLowerCase()] = Ng[i]), s), {}),
  NS = Object.keys(qc).reduce((s, i) => {
    const r = qc[i];
    return (s[i] = r[900] || [...Object.entries(r)][0][1]), s;
  }, {});
function CS(s) {
  const i = s.replace(MS, ""),
    r = U2(i, 0),
    o = r >= Mg[0] && r <= Mg[1],
    c = i.length === 2 ? i[0] === i[1] : !1;
  return { value: Oc(c ? i[0] : i), isSecondary: o || c };
}
function DS(s, i) {
  const r = s.replace(/^['"]|['"]$/g, "").toLowerCase(),
    o = parseInt(i),
    c = isNaN(o) ? "normal" : o;
  return (qc[r] || {})[c] || NS[r];
}
function Cg(s, i) {
  const r = "".concat(y2).concat(i.replace(":", "-"));
  return new Promise((o, c) => {
    if (s.getAttribute(r) !== null) return o();
    const m = Ui(s.children).filter((C) => C.getAttribute(Ac) === i)[0],
      p = oa.getComputedStyle(s, i),
      S = p.getPropertyValue("font-family"),
      g = S.match(x2),
      O = p.getPropertyValue("font-weight"),
      v = p.getPropertyValue("content");
    if (m && !g) return s.removeChild(m), o();
    if (g && v !== "none" && v !== "") {
      const C = p.getPropertyValue("content");
      let H = DS(S, O);
      const { value: Z, isSecondary: at } = CS(C),
        V = g[0].startsWith("FontAwesome");
      let ot = Fc(H, Z),
        mt = ot;
      if (V) {
        const nt = Q2(Z);
        nt.iconName && nt.prefix && ((ot = nt.iconName), (H = nt.prefix));
      }
      if (
        ot &&
        !at &&
        (!m || m.getAttribute(Gc) !== H || m.getAttribute(Xc) !== mt)
      ) {
        s.setAttribute(r, mt), m && s.removeChild(m);
        const nt = bS(),
          { extra: ct } = nt;
        (ct.attributes[Ac] = i),
          Cc(ot, H)
            .then((K) => {
              const _t = Ic(
                  U(
                    U({}, nt),
                    {},
                    {
                      icons: { main: K, mask: M0() },
                      prefix: H,
                      iconName: mt,
                      extra: ct,
                      watchable: !0,
                    }
                  )
                ),
                Nt = Dt.createElementNS("http://www.w3.org/2000/svg", "svg");
              i === "::before"
                ? s.insertBefore(Nt, s.firstChild)
                : s.appendChild(Nt),
                (Nt.outerHTML = _t.map((qt) => Jl(qt)).join(`
`)),
                s.removeAttribute(r),
                o();
            })
            .catch(c);
      } else o();
    } else o();
  });
}
function zS(s) {
  return Promise.all([Cg(s, "::before"), Cg(s, "::after")]);
}
function qS(s) {
  return (
    s.parentNode !== document.head &&
    !~p2.indexOf(s.tagName.toUpperCase()) &&
    !s.getAttribute(Ac) &&
    (!s.parentNode || s.parentNode.tagName !== "svg")
  );
}
function Dg(s) {
  if (qn)
    return new Promise((i, r) => {
      const o = Ui(s.querySelectorAll("*")).filter(qS).map(zS),
        c = Wc.begin("searchPseudoElements");
      q0(),
        Promise.all(o)
          .then(() => {
            c(), zc(), i();
          })
          .catch(() => {
            c(), zc(), r();
          });
    });
}
var jS = {
  hooks() {
    return {
      mutationObserverCallbacks(s) {
        return (s.pseudoElementsCallback = Dg), s;
      },
    };
  },
  provides(s) {
    s.pseudoElements2svg = function (i) {
      const { node: r = Dt } = i;
      J.searchPseudoElements && Dg(r);
    };
  },
};
let zg = !1;
var kS = {
  mixout() {
    return {
      dom: {
        unwatch() {
          q0(), (zg = !0);
        },
      },
    };
  },
  hooks() {
    return {
      bootstrap() {
        Og(Rc("mutationObserverCallbacks", {}));
      },
      noAuto() {
        gS();
      },
      watch(s) {
        const { observeMutationsRoot: i } = s;
        zg
          ? zc()
          : Og(Rc("mutationObserverCallbacks", { observeMutationsRoot: i }));
      },
    };
  },
};
const qg = (s) => {
  let i = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
  return s
    .toLowerCase()
    .split(" ")
    .reduce((r, o) => {
      const c = o.toLowerCase().split("-"),
        d = c[0];
      let m = c.slice(1).join("-");
      if (d && m === "h") return (r.flipX = !0), r;
      if (d && m === "v") return (r.flipY = !0), r;
      if (((m = parseFloat(m)), isNaN(m))) return r;
      switch (d) {
        case "grow":
          r.size = r.size + m;
          break;
        case "shrink":
          r.size = r.size - m;
          break;
        case "left":
          r.x = r.x - m;
          break;
        case "right":
          r.x = r.x + m;
          break;
        case "up":
          r.y = r.y - m;
          break;
        case "down":
          r.y = r.y + m;
          break;
        case "rotate":
          r.rotate = r.rotate + m;
          break;
      }
      return r;
    }, i);
};
var US = {
  mixout() {
    return { parse: { transform: (s) => qg(s) } };
  },
  hooks() {
    return {
      parseNodeAttributes(s, i) {
        const r = i.getAttribute("data-fa-transform");
        return r && (s.transform = qg(r)), s;
      },
    };
  },
  provides(s) {
    s.generateAbstractTransformGrouping = function (i) {
      let { main: r, transform: o, containerWidth: c, iconWidth: d } = i;
      const m = { transform: "translate(".concat(c / 2, " 256)") },
        p = "translate(".concat(o.x * 32, ", ").concat(o.y * 32, ") "),
        S = "scale("
          .concat((o.size / 16) * (o.flipX ? -1 : 1), ", ")
          .concat((o.size / 16) * (o.flipY ? -1 : 1), ") "),
        g = "rotate(".concat(o.rotate, " 0 0)"),
        O = { transform: "".concat(p, " ").concat(S, " ").concat(g) },
        v = { transform: "translate(".concat((d / 2) * -1, " -256)") },
        C = { outer: m, inner: O, path: v };
      return {
        tag: "g",
        attributes: U({}, C.outer),
        children: [
          {
            tag: "g",
            attributes: U({}, C.inner),
            children: [
              {
                tag: r.icon.tag,
                children: r.icon.children,
                attributes: U(U({}, r.icon.attributes), C.path),
              },
            ],
          },
        ],
      };
    };
  },
};
const cc = { x: 0, y: 0, width: "100%", height: "100%" };
function jg(s) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return (
    s.attributes && (s.attributes.fill || i) && (s.attributes.fill = "black"), s
  );
}
function LS(s) {
  return s.tag === "g" ? s.children : [s];
}
var BS = {
    hooks() {
      return {
        parseNodeAttributes(s, i) {
          const r = i.getAttribute("data-fa-mask"),
            o = r ? qr(r.split(" ").map((c) => c.trim())) : M0();
          return (
            o.prefix || (o.prefix = ca()),
            (s.mask = o),
            (s.maskId = i.getAttribute("data-fa-mask-id")),
            s
          );
        },
      };
    },
    provides(s) {
      s.generateAbstractMask = function (i) {
        let {
          children: r,
          attributes: o,
          main: c,
          mask: d,
          maskId: m,
          transform: p,
        } = i;
        const { width: S, icon: g } = c,
          { width: O, icon: v } = d,
          C = C2({ transform: p, containerWidth: O, iconWidth: S }),
          H = { tag: "rect", attributes: U(U({}, cc), {}, { fill: "white" }) },
          Z = g.children ? { children: g.children.map(jg) } : {},
          at = {
            tag: "g",
            attributes: U({}, C.inner),
            children: [
              jg(
                U({ tag: g.tag, attributes: U(U({}, g.attributes), C.path) }, Z)
              ),
            ],
          },
          V = { tag: "g", attributes: U({}, C.outer), children: [at] },
          ot = "mask-".concat(m || Zl()),
          mt = "clip-".concat(m || Zl()),
          nt = {
            tag: "mask",
            attributes: U(
              U({}, cc),
              {},
              {
                id: ot,
                maskUnits: "userSpaceOnUse",
                maskContentUnits: "userSpaceOnUse",
              }
            ),
            children: [H, V],
          },
          ct = {
            tag: "defs",
            children: [
              { tag: "clipPath", attributes: { id: mt }, children: LS(v) },
              nt,
            ],
          };
        return (
          r.push(ct, {
            tag: "rect",
            attributes: U(
              {
                fill: "currentColor",
                "clip-path": "url(#".concat(mt, ")"),
                mask: "url(#".concat(ot, ")"),
              },
              cc
            ),
          }),
          { children: r, attributes: o }
        );
      };
    },
  },
  HS = {
    provides(s) {
      let i = !1;
      oa.matchMedia &&
        (i = oa.matchMedia("(prefers-reduced-motion: reduce)").matches),
        (s.missingIconAbstract = function () {
          const r = [],
            o = { fill: "currentColor" },
            c = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" };
          r.push({
            tag: "path",
            attributes: U(
              U({}, o),
              {},
              {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
              }
            ),
          });
          const d = U(U({}, c), {}, { attributeName: "opacity" }),
            m = {
              tag: "circle",
              attributes: U(U({}, o), {}, { cx: "256", cy: "364", r: "28" }),
              children: [],
            };
          return (
            i ||
              m.children.push(
                {
                  tag: "animate",
                  attributes: U(
                    U({}, c),
                    {},
                    { attributeName: "r", values: "28;14;28;28;14;28;" }
                  ),
                },
                {
                  tag: "animate",
                  attributes: U(U({}, d), {}, { values: "1;0;1;1;0;1;" }),
                }
              ),
            r.push(m),
            r.push({
              tag: "path",
              attributes: U(
                U({}, o),
                {},
                {
                  opacity: "1",
                  d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                }
              ),
              children: i
                ? []
                : [
                    {
                      tag: "animate",
                      attributes: U(U({}, d), {}, { values: "1;0;0;0;0;1;" }),
                    },
                  ],
            }),
            i ||
              r.push({
                tag: "path",
                attributes: U(
                  U({}, o),
                  {},
                  {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                  }
                ),
                children: [
                  {
                    tag: "animate",
                    attributes: U(U({}, d), {}, { values: "0;0;1;1;0;0;" }),
                  },
                ],
              }),
            { tag: "g", attributes: { class: "missing" }, children: r }
          );
        });
    },
  },
  YS = {
    hooks() {
      return {
        parseNodeAttributes(s, i) {
          const r = i.getAttribute("data-fa-symbol"),
            o = r === null ? !1 : r === "" ? !0 : r;
          return (s.symbol = o), s;
        },
      };
    },
  },
  VS = [q2, ES, OS, _S, RS, jS, kS, US, BS, HS, YS];
W2(VS, { mixoutsTo: ze });
ze.noAuto;
ze.config;
ze.library;
ze.dom;
const jc = ze.parse;
ze.findIconDefinition;
ze.toHtml;
const QS = ze.icon;
ze.layer;
ze.text;
ze.counter;
var fc = { exports: {} },
  dc,
  kg;
function GS() {
  if (kg) return dc;
  kg = 1;
  var s = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return (dc = s), dc;
}
var hc, Ug;
function XS() {
  if (Ug) return hc;
  Ug = 1;
  var s = GS();
  function i() {}
  function r() {}
  return (
    (r.resetWarningCache = i),
    (hc = function () {
      function o(m, p, S, g, O, v) {
        if (v !== s) {
          var C = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((C.name = "Invariant Violation"), C);
        }
      }
      o.isRequired = o;
      function c() {
        return o;
      }
      var d = {
        array: o,
        bigint: o,
        bool: o,
        func: o,
        number: o,
        object: o,
        string: o,
        symbol: o,
        any: o,
        arrayOf: c,
        element: o,
        elementType: o,
        instanceOf: c,
        node: o,
        objectOf: c,
        oneOf: c,
        oneOfType: c,
        shape: c,
        exact: c,
        checkPropTypes: r,
        resetWarningCache: i,
      };
      return (d.PropTypes = d), d;
    }),
    hc
  );
}
var Lg;
function ZS() {
  return Lg || ((Lg = 1), (fc.exports = XS()())), fc.exports;
}
var KS = ZS();
const ht = Lc(KS);
function Bg(s, i) {
  var r = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(s);
    i &&
      (o = o.filter(function (c) {
        return Object.getOwnPropertyDescriptor(s, c).enumerable;
      })),
      r.push.apply(r, o);
  }
  return r;
}
function un(s) {
  for (var i = 1; i < arguments.length; i++) {
    var r = arguments[i] != null ? arguments[i] : {};
    i % 2
      ? Bg(Object(r), !0).forEach(function (o) {
          zi(s, o, r[o]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(r))
      : Bg(Object(r)).forEach(function (o) {
          Object.defineProperty(s, o, Object.getOwnPropertyDescriptor(r, o));
        });
  }
  return s;
}
function Mr(s) {
  "@babel/helpers - typeof";
  return (
    (Mr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (i) {
            return typeof i;
          }
        : function (i) {
            return i &&
              typeof Symbol == "function" &&
              i.constructor === Symbol &&
              i !== Symbol.prototype
              ? "symbol"
              : typeof i;
          }),
    Mr(s)
  );
}
function zi(s, i, r) {
  return (
    i in s
      ? Object.defineProperty(s, i, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (s[i] = r),
    s
  );
}
function $S(s, i) {
  if (s == null) return {};
  var r = {},
    o = Object.keys(s),
    c,
    d;
  for (d = 0; d < o.length; d++)
    (c = o[d]), !(i.indexOf(c) >= 0) && (r[c] = s[c]);
  return r;
}
function JS(s, i) {
  if (s == null) return {};
  var r = $S(s, i),
    o,
    c;
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(s);
    for (c = 0; c < d.length; c++)
      (o = d[c]),
        !(i.indexOf(o) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(s, o) &&
          (r[o] = s[o]);
  }
  return r;
}
function kc(s) {
  return FS(s) || IS(s) || WS(s) || PS();
}
function FS(s) {
  if (Array.isArray(s)) return Uc(s);
}
function IS(s) {
  if (
    (typeof Symbol < "u" && s[Symbol.iterator] != null) ||
    s["@@iterator"] != null
  )
    return Array.from(s);
}
function WS(s, i) {
  if (s) {
    if (typeof s == "string") return Uc(s, i);
    var r = Object.prototype.toString.call(s).slice(8, -1);
    if (
      (r === "Object" && s.constructor && (r = s.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(s);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Uc(s, i);
  }
}
function Uc(s, i) {
  (i == null || i > s.length) && (i = s.length);
  for (var r = 0, o = new Array(i); r < i; r++) o[r] = s[r];
  return o;
}
function PS() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function tx(s) {
  var i,
    r = s.beat,
    o = s.fade,
    c = s.beatFade,
    d = s.bounce,
    m = s.shake,
    p = s.flash,
    S = s.spin,
    g = s.spinPulse,
    O = s.spinReverse,
    v = s.pulse,
    C = s.fixedWidth,
    H = s.inverse,
    Z = s.border,
    at = s.listItem,
    V = s.flip,
    ot = s.size,
    mt = s.rotation,
    nt = s.pull,
    ct =
      ((i = {
        "fa-beat": r,
        "fa-fade": o,
        "fa-beat-fade": c,
        "fa-bounce": d,
        "fa-shake": m,
        "fa-flash": p,
        "fa-spin": S,
        "fa-spin-reverse": O,
        "fa-spin-pulse": g,
        "fa-pulse": v,
        "fa-fw": C,
        "fa-inverse": H,
        "fa-border": Z,
        "fa-li": at,
        "fa-flip": V === !0,
        "fa-flip-horizontal": V === "horizontal" || V === "both",
        "fa-flip-vertical": V === "vertical" || V === "both",
      }),
      zi(i, "fa-".concat(ot), typeof ot < "u" && ot !== null),
      zi(
        i,
        "fa-rotate-".concat(mt),
        typeof mt < "u" && mt !== null && mt !== 0
      ),
      zi(i, "fa-pull-".concat(nt), typeof nt < "u" && nt !== null),
      zi(i, "fa-swap-opacity", s.swapOpacity),
      i);
  return Object.keys(ct)
    .map(function (K) {
      return ct[K] ? K : null;
    })
    .filter(function (K) {
      return K;
    });
}
function ex(s) {
  return (s = s - 0), s === s;
}
function k0(s) {
  return ex(s)
    ? s
    : ((s = s.replace(/[\-_\s]+(.)?/g, function (i, r) {
        return r ? r.toUpperCase() : "";
      })),
      s.substr(0, 1).toLowerCase() + s.substr(1));
}
var nx = ["style"];
function ax(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function ix(s) {
  return s
    .split(";")
    .map(function (i) {
      return i.trim();
    })
    .filter(function (i) {
      return i;
    })
    .reduce(function (i, r) {
      var o = r.indexOf(":"),
        c = k0(r.slice(0, o)),
        d = r.slice(o + 1).trim();
      return c.startsWith("webkit") ? (i[ax(c)] = d) : (i[c] = d), i;
    }, {});
}
function U0(s, i) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof i == "string") return i;
  var o = (i.children || []).map(function (S) {
      return U0(s, S);
    }),
    c = Object.keys(i.attributes || {}).reduce(
      function (S, g) {
        var O = i.attributes[g];
        switch (g) {
          case "class":
            (S.attrs.className = O), delete i.attributes.class;
            break;
          case "style":
            S.attrs.style = ix(O);
            break;
          default:
            g.indexOf("aria-") === 0 || g.indexOf("data-") === 0
              ? (S.attrs[g.toLowerCase()] = O)
              : (S.attrs[k0(g)] = O);
        }
        return S;
      },
      { attrs: {} }
    ),
    d = r.style,
    m = d === void 0 ? {} : d,
    p = JS(r, nx);
  return (
    (c.attrs.style = un(un({}, c.attrs.style), m)),
    s.apply(void 0, [i.tag, un(un({}, c.attrs), p)].concat(kc(o)))
  );
}
var L0 = !1;
try {
  L0 = !0;
} catch {}
function lx() {
  if (!L0 && console && typeof console.error == "function") {
    var s;
    (s = console).error.apply(s, arguments);
  }
}
function Hg(s) {
  if (s && Mr(s) === "object" && s.prefix && s.iconName && s.icon) return s;
  if (jc.icon) return jc.icon(s);
  if (s === null) return null;
  if (s && Mr(s) === "object" && s.prefix && s.iconName) return s;
  if (Array.isArray(s) && s.length === 2)
    return { prefix: s[0], iconName: s[1] };
  if (typeof s == "string") return { prefix: "fas", iconName: s };
}
function mc(s, i) {
  return (Array.isArray(i) && i.length > 0) || (!Array.isArray(i) && i)
    ? zi({}, s, i)
    : {};
}
var Yg = {
    border: !1,
    className: "",
    mask: null,
    maskId: null,
    fixedWidth: !1,
    inverse: !1,
    flip: !1,
    icon: null,
    listItem: !1,
    pull: null,
    pulse: !1,
    rotation: null,
    size: null,
    spin: !1,
    spinPulse: !1,
    spinReverse: !1,
    beat: !1,
    fade: !1,
    beatFade: !1,
    bounce: !1,
    shake: !1,
    symbol: !1,
    title: "",
    titleId: null,
    transform: null,
    swapOpacity: !1,
  },
  Nr = B.forwardRef(function (s, i) {
    var r = un(un({}, Yg), s),
      o = r.icon,
      c = r.mask,
      d = r.symbol,
      m = r.className,
      p = r.title,
      S = r.titleId,
      g = r.maskId,
      O = Hg(o),
      v = mc("classes", [].concat(kc(tx(r)), kc((m || "").split(" ")))),
      C = mc(
        "transform",
        typeof r.transform == "string" ? jc.transform(r.transform) : r.transform
      ),
      H = mc("mask", Hg(c)),
      Z = QS(
        O,
        un(
          un(un(un({}, v), C), H),
          {},
          { symbol: d, title: p, titleId: S, maskId: g }
        )
      );
    if (!Z) return lx("Could not find icon", O), null;
    var at = Z.abstract,
      V = { ref: i };
    return (
      Object.keys(r).forEach(function (ot) {
        Yg.hasOwnProperty(ot) || (V[ot] = r[ot]);
      }),
      sx(at[0], V)
    );
  });
Nr.displayName = "FontAwesomeIcon";
Nr.propTypes = {
  beat: ht.bool,
  border: ht.bool,
  beatFade: ht.bool,
  bounce: ht.bool,
  className: ht.string,
  fade: ht.bool,
  flash: ht.bool,
  mask: ht.oneOfType([ht.object, ht.array, ht.string]),
  maskId: ht.string,
  fixedWidth: ht.bool,
  inverse: ht.bool,
  flip: ht.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: ht.oneOfType([ht.object, ht.array, ht.string]),
  listItem: ht.bool,
  pull: ht.oneOf(["right", "left"]),
  pulse: ht.bool,
  rotation: ht.oneOf([0, 90, 180, 270]),
  shake: ht.bool,
  size: ht.oneOf([
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "1x",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x",
  ]),
  spin: ht.bool,
  spinPulse: ht.bool,
  spinReverse: ht.bool,
  symbol: ht.oneOfType([ht.bool, ht.string]),
  title: ht.string,
  titleId: ht.string,
  transform: ht.oneOfType([ht.string, ht.object]),
  swapOpacity: ht.bool,
};
var sx = U0.bind(null, B.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */ const rx = {
    prefix: "fab",
    iconName: "twitter",
    icon: [
      512,
      512,
      [],
      "f099",
      "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
    ],
  },
  ux = {
    prefix: "fab",
    iconName: "telegram",
    icon: [
      496,
      512,
      [62462, "telegram-plane"],
      "f2c6",
      "M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z",
    ],
  },
  ox = "/assets/dexlogo-o7pzGa-8.png",
  cx = "/assets/howtobuy-Bc579lSl.png",
  fx = "/assets/step1-6eZIfS04.png",
  dx = "/assets/step2-CQ-kAfq4.png",
  hx = "/assets/step3-CJSUqL6_.png",
  mx = "/assets/step4-CXRWYuyY.png",
  gx = "/assets/thumbsup-CnexYQ28.png",
  yx = "/assets/heronew-yIm-m0EL.jpeg";
function vx() {
  return z.jsxs("div", {
    className: "min-h-screen flex flex-col",
    children: [
      z.jsx("header", {
        className:
          "sticky top-0 z-50 bg-green-700/80 backdrop-blur-sm border-b border-green-800",
        children: z.jsxs("nav", {
          className:
            "container mx-auto px-4 py-3 flex justify-between items-center",
          children: [
            z.jsx("a", {
              href: "#",
              className: "flex items-center",
              children: z.jsx("img", {
                src: n0,
                alt: "Wojak Logo",
                className: "w-12 h-12 rounded-full",
              }),
            }),
            z.jsxs("div", {
              className: "hidden md:flex items-center gap-4",
              children: [
                z.jsx("a", {
                  href: "#about",
                  className: "text-white hover:text-green-200",
                  children: "About",
                }),
                z.jsx("a", {
                  href: "#gallery",
                  className: "text-white hover:text-green-200",
                  children: "Gallery",
                }),
                z.jsx("a", {
                  href: "#how-to-buy",
                  className: "text-white hover:text-green-200",
                  children: "How to Buy",
                }),
                z.jsx("a", {
                  href: "#tokenomics",
                  className: "text-white hover:text-green-200",
                  children: "Tokenomics",
                }),
                z.jsx("a", {
                  href: "https://swap.reservoir.tools/#/swap?chain=abstract&outputCurrency=0x5Cb0F4d861A1f414531B2123E1c06D9228433D25",
                  className:
                    "btn bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700",
                  children: "Get WOJAK",
                }),
                z.jsx(j1, {}),
              ],
            }),
          ],
        }),
      }),
      z.jsxs("main", {
        className: "flex-1",
        children: [
          z.jsx(px, {}),
          z.jsx(bx, {}),
          z.jsx(Sx, {}),
          z.jsx(xx, {}),
          z.jsx(Ax, {}),
          z.jsx(Tx, {}),
          z.jsx(wx, {}),
        ],
      }),
      z.jsx(Ex, {}),
      z.jsx(cb, {}),
    ],
  });
}
function px() {
  return z.jsx("section", {
    className: "relative",
    children: z.jsx("div", {
      className: "relative w-full flex-shrink-0",
      children: z.jsx("img", {
        src: yx,
        alt: "Hero Image",
        className: "w-full object-cover rounded-lg",
      }),
    }),
  });
}
function bx() {
  return z.jsx("section", {
    className: "bg-green-800 py-6 w-full",
    children: z.jsx("div", {
      className: "container mx-auto px-4",
      children: z.jsx("div", {
        className: "grid grid-cols-3 gap-4 justify-center items-center",
        children: [
          {
            href: "https://t.me/wojakonabstract",
            icon: z.jsx(Nr, { icon: ux, size: "2x" }),
            label: "Telegram",
          },
          {
            href: "https://x.com/wojakonabstract",
            icon: z.jsx(Nr, { icon: rx, size: "2x" }),
            label: "Twitter",
          },
          {
            href: "https://dexscreener.com/abstract/0xbb8e995405041506e47d0b2ae44062ebc36f684f",
            icon: z.jsx("img", {
              src: ox,
              alt: "Dex Logo",
              className: "w-8 h-8",
              style: { borderRadius: "50%" },
            }),
            label: "Dexscreener",
          },
        ].map(({ href: s, icon: i, label: r }, o) =>
          z.jsxs(
            "a",
            {
              href: s,
              className: ` w-full bg-green-600 hover:bg-green-700 text-white 
              rounded-full flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-3`,
              children: [
                i,
                z.jsx("span", {
                  className:
                    "ml-2 hidden sm:inline ml-2 text-xs sm:text-sm md:text-base lg:text-lg",
                  children: r,
                }),
              ],
            },
            o
          )
        ),
      }),
    }),
  });
}
function Sx() {
  const s = Array(20).fill(
    z.jsxs("div", {
      className: "flex items-center mx-4",
      children: [
        z.jsx("img", {
          src: n0,
          alt: "Wojak Logo",
          className: "w-10 h-10 rounded-full mr-2",
        }),
        z.jsx("span", {
          className: "font-bold text-green-700",
          children: "WOJAK",
        }),
      ],
    })
  );
  return z.jsx("div", {
    className: "bg-green-100 py-4 overflow-hidden",
    children: z.jsxs("div", {
      className: "scroll-ticker flex whitespace-nowrap",
      children: [s, s],
    }),
  });
}
function xx() {
  return z.jsx("section", {
    id: "about",
    className: "py-16 bg-green-500/20",
    children: z.jsxs("div", {
      className:
        "container mx-auto px-4 bg-green-100/50 p-8 rounded-lg shadow-lg",
      children: [
        z.jsx("h2", {
          className: "text-5xl font-bold text-center text-green-700 mb-8",
          children: "About Wojak",
        }),
        z.jsxs("div", {
          className: "grid md:grid-cols-2 gap-8 items-center",
          children: [
            z.jsx("div", {
              children: z.jsxs("p", {
                className: "text-green-800 text-lg leading-relaxed text-center",
                children: [
                  "Meet Wojak",
                  z.jsx("br", {}),
                  z.jsx("br", {}),
                  "The most relatable meme in the world has finally landed on the people's chain - Abstract.",
                  z.jsx("br", {}),
                  z.jsx("br", {}),
                  "Wojak, also known as “feels guy,” has roots in internet culture, making waves on early 4chan and Reddit forums before becoming the viral internet sensation he is today.",
                  z.jsx("br", {}),
                  z.jsx("br", {}),
                  "You might recognize him from his variants such as NPC, Doomer, big brain, or even from his various interactions in the memespace with Pepe the frog!",
                  z.jsx("br", {}),
                  z.jsx("br", {}),
                  "There's a Wojak for everyone!",
                ],
              }),
            }),
            z.jsx("div", {
              children: z.jsxs("video", {
                className: "w-full rounded-lg shadow-lg",
                controls: !0,
                poster: Vb,
                children: [
                  z.jsx("source", { src: Yb, type: "video/mp4" }),
                  "Your browser does not support the video tag.",
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function Ax() {
  const s = [fb, db, hb, mb, gb, yb, vb, pb, bb, Sb].map((o, c) =>
      z.jsx(
        "div",
        {
          className: "w-64 h-48 flex-shrink-0",
          children: z.jsx("img", {
            src: o,
            alt: "Test Image",
            className: "w-full h-full object-cover rounded-lg",
          }),
        },
        c
      )
    ),
    i = [xb, Ab, Tb, wb, Eb, Ob, _b, Rb, Mb, Nb].map((o, c) =>
      z.jsx(
        "div",
        {
          className: "w-64 h-48 flex-shrink-0",
          children: z.jsx("img", {
            src: o,
            alt: "Test Image",
            className: "w-full h-full object-cover rounded-lg",
          }),
        },
        c
      )
    ),
    r = [Cb, Db, zb, qb, jb, kb, Ub, Lb, Bb, Hb].map((o, c) =>
      z.jsx(
        "div",
        {
          className: "w-64 h-48 flex-shrink-0",
          children: z.jsx("img", {
            src: o,
            alt: "Test Image",
            className: "w-full h-full object-cover rounded-lg",
          }),
        },
        c
      )
    );
  return z.jsxs("section", {
    id: "gallery",
    className: "relative h-auto overflow-hidden bg-transparent",
    children: [
      z.jsx("h2", {
        className: "text-5xl font-bold text-center text-green-700 mt-6 mb-3",
        children: "Gallery",
      }),
      z.jsxs("div", {
        className: "flex flex-col gap-6 py-6",
        children: [
          z.jsxs("div", {
            className: "scroll-row whitespace-nowrap",
            children: [s, s],
          }),
          z.jsxs("div", {
            className: "scroll-row-reverse whitespace-nowrap",
            children: [i, i],
          }),
          z.jsxs("div", {
            className: "scroll-row whitespace-nowrap",
            children: [r, r],
          }),
        ],
      }),
    ],
  });
}
function Tx() {
  const s = [fx, dx, hx, mx];
  return z.jsxs("section", {
    id: "how-to-buy",
    className: "relative py-16 bg-[#15803D]",
    children: [
      z.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          z.jsx("div", {
            className: "flex justify-center mb-6",
            children: z.jsx("img", {
              src: cx,
              alt: "How to Buy",
              className: "w-full max-w-md",
            }),
          }),
          z.jsx("div", {
            className:
              "grid grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center",
            children: s.map((i, r) =>
              z.jsx(
                "img",
                {
                  src: i,
                  alt: `Step ${r + 1}`,
                  className:
                    "w-full max-w-xs h-auto object-cover rounded-lg shadow-md",
                },
                r
              )
            ),
          }),
        ],
      }),
      z.jsx("img", {
        src: gx,
        alt: "Thumbs Up",
        className:
          "absolute left-0 bottom-0 w-32 sm:w-40 md:w-32 lg:w-40 h-auto",
      }),
    ],
  });
}
function wx() {
  return z.jsx("section", {
    id: "tokenomics",
    className: "py-16 bg-green-50",
    children: z.jsxs("div", {
      className: "container mx-auto px-4",
      children: [
        z.jsx("h2", {
          className: "text-4xl font-bold text-center text-green-700 mb-8",
          children: "Tokenomics",
        }),
        z.jsxs("div", {
          className: "grid grid-cols-2 gap-4",
          children: [
            z.jsxs("div", {
              className:
                "tokenomics-box bg-white p-6 rounded-lg shadow-lg text-center",
              children: [
                z.jsx("h4", {
                  className: "text-xl font-bold mb-2 text-green-700",
                  children: "Ticker",
                }),
                z.jsx("p", { className: "text-green-600", children: "$WOJAK" }),
              ],
            }),
            z.jsxs("div", {
              className:
                "tokenomics-box bg-white p-6 rounded-lg shadow-lg text-center",
              children: [
                z.jsx("h4", {
                  className: "text-xl font-bold mb-2 text-green-700",
                  children: "Network",
                }),
                z.jsx("p", {
                  className: "text-green-600",
                  children: "Abstract",
                }),
              ],
            }),
            z.jsxs("div", {
              className:
                "tokenomics-box bg-white p-6 rounded-lg shadow-lg text-center",
              children: [
                z.jsx("h4", {
                  className: "text-xl font-bold mb-2 text-green-700",
                  children: "Taxes",
                }),
                z.jsx("p", {
                  className: "text-green-600",
                  children: "No Taxes",
                }),
              ],
            }),
            z.jsxs("div", {
              className:
                "tokenomics-box bg-white p-6 rounded-lg shadow-lg text-center",
              children: [
                z.jsx("h4", {
                  className: "text-xl font-bold mb-2 text-green-700",
                  children: "Network",
                }),
                z.jsx("p", {
                  className: "text-green-600",
                  children: "Abstract",
                }),
              ],
            }),
            z.jsxs("div", {
              className:
                "tokenomics-box bg-white p-6 rounded-lg shadow-lg text-center",
              children: [
                z.jsx("h4", {
                  className: "text-xl font-bold mb-2 text-green-700",
                  children: "Ownership",
                }),
                z.jsx("p", {
                  className: "text-green-600",
                  children: "Renounced",
                }),
              ],
            }),
            z.jsxs("div", {
              className:
                "tokenomics-box bg-white p-6 rounded-lg shadow-lg text-center",
              children: [
                z.jsx("h4", {
                  className: "text-xl font-bold mb-2 text-green-700",
                  children: "Total Supply",
                }),
                z.jsx("p", {
                  className: "text-green-600",
                  children: "1,000,000,000 $WOJAK",
                }),
              ],
            }),
            z.jsxs("div", {
              className:
                "tokenomics-box bg-white p-6 rounded-lg shadow-lg text-center col-span-2",
              children: [
                z.jsx("h4", {
                  className: "text-xl font-bold mb-2 text-green-700",
                  children: "CA",
                }),
                z.jsx("p", {
                  className: "text-green-600",
                  children: "0x5Cb0F4d861A1f414531B2123E1c06D9228433D25",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Ex() {
  return z.jsxs("footer", {
    className: "bg-green-700 text-white py-8",
    children: [
      z.jsxs("div", {
        className:
          "flex grid-cols-5 items-center justify-center space-x-6 mb-6",
        children: [
          z.jsx("a", {
            href: "#about",
            className: "text-white hover:text-green-300",
            children: "About",
          }),
          z.jsx("a", {
            href: "#gallery",
            className: "text-white hover:text-green-300",
            children: "Gallery",
          }),
          z.jsx("a", {
            href: "#how-to-buy",
            className: "text-white hover:text-green-300",
            children: "How to Buy",
          }),
          z.jsx("a", {
            href: "#tokenomics",
            className: "text-white hover:text-green-300",
            children: "Tokenomics",
          }),
          z.jsx("a", {
            href: "https://swap.reservoir.tools/#/swap?chain=abstract&outputCurrency=0x5Cb0F4d861A1f414531B2123E1c06D9228433D25",
            className:
              "border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-green-700",
            children: "Get WOJAK",
          }),
        ],
      }),
      z.jsx("div", {
        className: "mt-6 flex items-center justify-center text-green-300",
        children: "© 2025 WOJAK",
      }),
    ],
  });
}
const Ox = new b1("https://energetic-heron-373.convex.cloud");
ep.createRoot(document.getElementById("root")).render(
  z.jsx(gt.StrictMode, {
    children: z.jsx(q1, { client: Ox, children: z.jsx(vx, {}) }),
  })
);
