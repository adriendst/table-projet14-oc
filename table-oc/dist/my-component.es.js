import P, { useState as N, useMemo as q, useEffect as z } from "react";
var F = { exports: {} }, O = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ee;
function le() {
  if (ee) return O;
  ee = 1;
  var l = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function s(v, c, r) {
    var E = null;
    if (r !== void 0 && (E = "" + r), c.key !== void 0 && (E = "" + c.key), "key" in c) {
      r = {};
      for (var h in c)
        h !== "key" && (r[h] = c[h]);
    } else r = c;
    return c = r.ref, {
      $$typeof: l,
      type: v,
      key: E,
      ref: c !== void 0 ? c : null,
      props: r
    };
  }
  return O.Fragment = i, O.jsx = s, O.jsxs = s, O;
}
var A = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var re;
function ae() {
  return re || (re = 1, process.env.NODE_ENV !== "production" && function() {
    function l(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === y ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case g:
          return "Fragment";
        case C:
          return "Profiler";
        case u:
          return "StrictMode";
        case W:
          return "Suspense";
        case a:
          return "SuspenseList";
        case T:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case $:
            return "Portal";
          case M:
            return (e.displayName || "Context") + ".Provider";
          case I:
            return (e._context.displayName || "Context") + ".Consumer";
          case L:
            var n = e.render;
            return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case b:
            return n = e.displayName || null, n !== null ? n : l(e.type) || "Memo";
          case _:
            n = e._payload, e = e._init;
            try {
              return l(e(n));
            } catch {
            }
        }
      return null;
    }
    function i(e) {
      return "" + e;
    }
    function s(e) {
      try {
        i(e);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var o = n.error, d = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          d
        ), i(e);
      }
    }
    function v(e) {
      if (e === g) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === _)
        return "<...>";
      try {
        var n = l(e);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var e = R.A;
      return e === null ? null : e.getOwner();
    }
    function r() {
      return Error("react-stack-top-frame");
    }
    function E(e) {
      if (G.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function h(e, n) {
      function o() {
        X || (X = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      o.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: o,
        configurable: !0
      });
    }
    function Y() {
      var e = l(this.type);
      return H[e] || (H[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function D(e, n, o, d, p, x, B, V) {
      return o = x.ref, e = {
        $$typeof: k,
        type: e,
        key: n,
        props: x,
        _owner: p
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: Y
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: V
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function j(e, n, o, d, p, x, B, V) {
      var f = n.children;
      if (f !== void 0)
        if (d)
          if (ne(f)) {
            for (d = 0; d < f.length; d++)
              S(f[d]);
            Object.freeze && Object.freeze(f);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else S(f);
      if (G.call(n, "key")) {
        f = l(e);
        var w = Object.keys(n).filter(function(se) {
          return se !== "key";
        });
        d = 0 < w.length ? "{key: someKey, " + w.join(": ..., ") + ": ...}" : "{key: someKey}", K[f + d] || (w = 0 < w.length ? "{" + w.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          d,
          f,
          w,
          f
        ), K[f + d] = !0);
      }
      if (f = null, o !== void 0 && (s(o), f = "" + o), E(n) && (s(n.key), f = "" + n.key), "key" in n) {
        o = {};
        for (var J in n)
          J !== "key" && (o[J] = n[J]);
      } else o = n;
      return f && h(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), D(
        e,
        f,
        x,
        p,
        c(),
        o,
        B,
        V
      );
    }
    function S(e) {
      typeof e == "object" && e !== null && e.$$typeof === k && e._store && (e._store.validated = 1);
    }
    var m = P, k = Symbol.for("react.transitional.element"), $ = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), I = Symbol.for("react.consumer"), M = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), a = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), T = Symbol.for("react.activity"), y = Symbol.for("react.client.reference"), R = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = Object.prototype.hasOwnProperty, ne = Array.isArray, U = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var X, H = {}, Z = m["react-stack-bottom-frame"].bind(
      m,
      r
    )(), Q = U(v(r)), K = {};
    A.Fragment = g, A.jsx = function(e, n, o, d, p) {
      var x = 1e4 > R.recentlyCreatedOwnerStacks++;
      return j(
        e,
        n,
        o,
        !1,
        d,
        p,
        x ? Error("react-stack-top-frame") : Z,
        x ? U(v(e)) : Q
      );
    }, A.jsxs = function(e, n, o, d, p) {
      var x = 1e4 > R.recentlyCreatedOwnerStacks++;
      return j(
        e,
        n,
        o,
        !0,
        d,
        p,
        x ? Error("react-stack-top-frame") : Z,
        x ? U(v(e)) : Q
      );
    };
  }()), A;
}
var te;
function oe() {
  return te || (te = 1, process.env.NODE_ENV === "production" ? F.exports = le() : F.exports = ae()), F.exports;
}
var t = oe();
function ce({
  pagination: l,
  pageNumber: i,
  setPagination: s
}) {
  return /* @__PURE__ */ t.jsxs("div", { className: "pagination", children: [
    /* @__PURE__ */ t.jsx("button", { onClick: () => s(l - 1), disabled: l === 1, children: "Previous" }),
    i > 2 && Array.from({ length: i }).map((v, c) => {
      const r = c + 1;
      if (r !== 1 && r !== i && r !== l) {
        if (l <= 4 && r <= 4)
          return r === 4 ? i === 5 ? /* @__PURE__ */ t.jsx("button", { onClick: () => s(r), children: r }, r) : /* @__PURE__ */ t.jsxs(P.Fragment, { children: [
            /* @__PURE__ */ t.jsx("button", { onClick: () => s(r), children: r }, r),
            /* @__PURE__ */ t.jsx("button", { onClick: () => s(r + 1), children: r + 1 }, r + 1),
            /* @__PURE__ */ t.jsx("p", { children: "..." })
          ] }, r) : /* @__PURE__ */ t.jsx("button", { onClick: () => s(r), children: r }, r);
        if (l > i - 4 && r > i - 4)
          return r === i - 3 ? i === 5 ? /* @__PURE__ */ t.jsx("button", { onClick: () => s(r), children: r }, r) : /* @__PURE__ */ t.jsxs(P.Fragment, { children: [
            /* @__PURE__ */ t.jsx("p", { children: "..." }),
            /* @__PURE__ */ t.jsx("button", { onClick: () => s(r - 1), children: r - 1 }, r - 1),
            /* @__PURE__ */ t.jsx("button", { onClick: () => s(r), children: r }, r)
          ] }, r) : /* @__PURE__ */ t.jsx("button", { onClick: () => s(r), children: r }, r);
        if (r === l - 1)
          return /* @__PURE__ */ t.jsxs(P.Fragment, { children: [
            /* @__PURE__ */ t.jsx("p", { children: "..." }),
            /* @__PURE__ */ t.jsx("button", { onClick: () => s(r), children: r }, r)
          ] }, r);
        if (r === l + 1)
          return /* @__PURE__ */ t.jsxs(P.Fragment, { children: [
            /* @__PURE__ */ t.jsx("button", { onClick: () => s(r), children: r }, r),
            /* @__PURE__ */ t.jsx("p", { children: "..." })
          ] }, r);
      } else
        return /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: () => s(r),
            className: r === l ? "selected" : "",
            children: r
          },
          r
        );
    }),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => s(l + 1),
        disabled: l === i || i === 0,
        children: "Next"
      }
    )
  ] });
}
const ue = ({ data: l, columns: i }) => {
  const [s, v] = N(l), [c, r] = N(""), E = (a) => {
    r(a.target.value), S(1);
  }, [h, Y] = N("10"), D = (a) => {
    Y(a.target.value), S(1);
  }, [j, S] = N(1), m = q(() => s.filter(
    (a) => Object.values(a).some((b) => String(b).toLowerCase().includes(c.toLowerCase()))
  ), [c, s]), [k, $] = N([0, 0]);
  z(() => {
    const a = Number(h), b = j;
    $([a * b - a, a * b]);
  }, [h, j]);
  const g = q(() => m.slice(k[0], k[1]), [m, k]), [u, C] = N({ column: "", filter: "" }), I = q(() => g.map((a, b) => /* @__PURE__ */ t.jsx("tr", { children: Object.entries(i).map((_, T) => /* @__PURE__ */ t.jsx("td", { className: u.column === _[0] ? "onFilterColumn" : "", children: a[_[0]] }, T)) }, b)), [g, u]), [M, L] = N(0);
  z(() => {
    L(Math.ceil(m.length / Number(h)));
  }, [m, h]);
  const W = (a) => {
    u.column !== a ? C({ column: a, filter: "asc" }) : u.filter === "asc" ? C({ column: a, filter: "desc" }) : u.filter === "desc" && C({ column: "", filter: "" });
  };
  return z(() => {
    if (u.filter === "asc" || u.filter === "desc") {
      const a = [...l].sort((b, _) => {
        let T = b[u.column], y = _[u.column], R;
        return typeof T == "string" ? R = T.localeCompare(y) : R = T - y, u.filter === "asc" ? R : -R;
      });
      v(a);
    } else
      v(l);
  }, [u, l]), /* @__PURE__ */ t.jsxs("div", { className: "table", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "tableBar", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "tableBarSection", children: [
        /* @__PURE__ */ t.jsx("span", { children: "Show" }),
        /* @__PURE__ */ t.jsxs("select", { value: h, onChange: D, children: [
          /* @__PURE__ */ t.jsx("option", { children: "10" }),
          /* @__PURE__ */ t.jsx("option", { children: "25" }),
          /* @__PURE__ */ t.jsx("option", { children: "50" }),
          /* @__PURE__ */ t.jsx("option", { children: "100" })
        ] }),
        /* @__PURE__ */ t.jsx("span", { children: "entries" })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "tableBarSection", children: [
        /* @__PURE__ */ t.jsx("span", { children: "Search : " }),
        /* @__PURE__ */ t.jsxs("div", { className: "input", children: [
          /* @__PURE__ */ t.jsx("input", { type: "text", value: c, onChange: E }),
          c !== "" && /* @__PURE__ */ t.jsx(
            "p",
            {
              onClick: () => {
                E({
                  target: { value: "" }
                });
              },
              children: "✕"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t.jsx("div", { className: "tableContainer", children: /* @__PURE__ */ t.jsxs("table", { children: [
      /* @__PURE__ */ t.jsx("thead", { children: /* @__PURE__ */ t.jsx("tr", { children: Object.entries(i).map((a, b) => /* @__PURE__ */ t.jsx("th", { onClick: () => W(a[0]), children: /* @__PURE__ */ t.jsxs("div", { className: "header", children: [
        /* @__PURE__ */ t.jsx("span", { className: "headerName", children: a[1] }),
        /* @__PURE__ */ t.jsxs("span", { className: "arrows", children: [
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: u.column === a[0] && u.filter === "asc" ? "filterActive" : "",
              children: "▲"
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: u.column === a[0] && u.filter === "desc" ? "filterActive" : "",
              children: "▼"
            }
          )
        ] })
      ] }) }, b)) }) }),
      /* @__PURE__ */ t.jsx("tbody", { children: l.length === 0 ? /* @__PURE__ */ t.jsx("tr", { children: /* @__PURE__ */ t.jsx("td", { colSpan: 100, className: "emptyDataMessage", children: "No data available in table" }) }) : m.length === 0 ? /* @__PURE__ */ t.jsx("tr", { children: /* @__PURE__ */ t.jsx("td", { colSpan: 100, className: "emptyDataMessage", children: "No matching records found" }) }) : I })
    ] }) }),
    /* @__PURE__ */ t.jsxs("div", { className: "tableBar", children: [
      /* @__PURE__ */ t.jsx("div", { className: "tableBarSection", children: /* @__PURE__ */ t.jsxs("span", { children: [
        "Showing ",
        l.length === 0 || m.length === 0 ? 0 : k[0] + 1,
        " to",
        " ",
        c !== "" ? Number(h) * j > m.length ? m.length : Number(h) * j : Number(h) * j > s.length ? s.length : Number(h) * j,
        " ",
        "of",
        " ",
        c !== "" ? `${m.length} entries (filtered from ${s.length} total entries)` : `${s.length} entries`
      ] }) }),
      /* @__PURE__ */ t.jsx("div", { className: "tableBarSection", children: /* @__PURE__ */ t.jsx(ce, { pageNumber: M, pagination: j, setPagination: S }) })
    ] })
  ] });
};
export {
  ue as Table
};
