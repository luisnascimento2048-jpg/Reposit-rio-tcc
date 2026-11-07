(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/src/components/tela.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Tela
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'html-to-image'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const TAMANHOS = [
    32,
    64,
    128
];
const BRANCO = "#ffffff";
const CORES_RODA = [
    "#8b0016",
    "#ed1c24",
    "#ff7f27",
    "#fff200",
    "#b5e61d",
    "#22b14c",
    "#00a2e8",
    "#99d9ea",
    "#7092be",
    "#c8bfe7",
    "#a349a4",
    "#ff2fba"
];
function criarTela(tamanho) {
    _s();
    async function exportarGrade() {
        if (!gradeRef.current) return;
        try {
            const imagem = await toPng(gradeRef.current, {
                backgroundColor: "#ffffff",
                pixelRatio: 3,
                cacheBust: true
            });
            const link = document.createElement("a");
            link.download = `pixel-art-${tamanho}x${tamanho}.png`;
            link.href = imagem;
            link.click();
        } catch (erro) {
            console.error("Erro ao exportar a grade:", erro);
            alert("Não foi possível exportar o desenho.");
        }
    }
    return new Array(tamanho * tamanho).fill(BRANCO);
    //TURBOPACK unreachable
    ;
    const gradeRef = undefined;
}
_s(criarTela, "HoM+LzGWqnIE4LZPDRTKHXKVRNQ=");
function gerarPontos() {
    const centro = 100;
    const raio = 95;
    const vertices = [];
    for(let i = 0; i <= 6; i++){
        const ang = (-120 + 60 * i) * Math.PI / 180;
        vertices.push([
            +(centro + raio * Math.cos(ang)).toFixed(2),
            +(centro + raio * Math.sin(ang)).toFixed(2)
        ]);
    }
    const pontos = [];
    for(let i = 0; i < 6; i++){
        const [x1, y1] = vertices[i];
        const [x2, y2] = vertices[i + 1];
        pontos.push([
            x1,
            y1
        ]);
        pontos.push([
            +((x1 + x2) / 2).toFixed(2),
            +((y1 + y2) / 2).toFixed(2)
        ]);
    }
    pontos.push(vertices[6]);
    return pontos;
}
const PONTOS = gerarPontos();
function RodaCores(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "e2430bffafce649dbdad0e7395dc88ee2bec719cafb909ac24bce99b98fa93fd") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e2430bffafce649dbdad0e7395dc88ee2bec719cafb909ac24bce99b98fa93fd";
    }
    const { corAtual, onSelecionar } = t0;
    let t1;
    if ($[1] !== corAtual || $[2] !== onSelecionar) {
        t1 = CORES_RODA.map({
            "RodaCores[CORES_RODA.map()]": (cor, i)=>{
                const [x1, y1] = PONTOS[i];
                const [x2, y2] = PONTOS[i + 1];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: `100,100 ${x1},${y1} ${x2},${y2}`,
                    fill: cor,
                    stroke: corAtual === cor ? "#ffffff" : "#000000",
                    strokeWidth: corAtual === cor ? 4 : 2,
                    strokeLinejoin: "round",
                    onClick: {
                        "RodaCores[CORES_RODA.map() > <polygon>.onClick]": ()=>onSelecionar(cor)
                    }["RodaCores[CORES_RODA.map() > <polygon>.onClick]"],
                    className: "cursor-pointer"
                }, cor, false, {
                    fileName: "[project]/src/components/tela.jsx",
                    lineNumber: 67,
                    columnNumber: 16
                }, this);
            }
        }["RodaCores[CORES_RODA.map()]"]);
        $[1] = corAtual;
        $[2] = onSelecionar;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 200 200",
            className: "w-48 h-48",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/components/tela.jsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[4] = t1;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
}
_c = RodaCores;
// memo: o quadrado só é redesenhado se a cor (ou a grade) dele mudar
const Pixel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(function Pixel(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "e2430bffafce649dbdad0e7395dc88ee2bec719cafb909ac24bce99b98fa93fd") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e2430bffafce649dbdad0e7395dc88ee2bec719cafb909ac24bce99b98fa93fd";
    }
    const { cor, index, grade, onDown, onEnter } = t0;
    let t1;
    if ($[1] !== index || $[2] !== onDown) {
        t1 = ({
            "Pixel[<div>.onMouseDown]": ()=>onDown(index)
        })["Pixel[<div>.onMouseDown]"];
        $[1] = index;
        $[2] = onDown;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== index || $[5] !== onEnter) {
        t2 = ({
            "Pixel[<div>.onMouseEnter]": ()=>onEnter(index)
        })["Pixel[<div>.onMouseEnter]"];
        $[4] = index;
        $[5] = onEnter;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== cor) {
        t3 = {
            backgroundColor: cor
        };
        $[7] = cor;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    const t4 = `aspect-square cursor-pointer ${grade ? "border border-gray-300" : ""}`;
    let t5;
    if ($[9] !== t1 || $[10] !== t2 || $[11] !== t3 || $[12] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onMouseDown: t1,
            onMouseEnter: t2,
            style: t3,
            className: t4
        }, void 0, false, {
            fileName: "[project]/src/components/tela.jsx",
            lineNumber: 140,
            columnNumber: 10
        }, this);
        $[9] = t1;
        $[10] = t2;
        $[11] = t3;
        $[12] = t4;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    return t5;
});
_c1 = Pixel;
function Tela() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(55);
    if ($[0] !== "e2430bffafce649dbdad0e7395dc88ee2bec719cafb909ac24bce99b98fa93fd") {
        for(let $i = 0; $i < 55; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e2430bffafce649dbdad0e7395dc88ee2bec719cafb909ac24bce99b98fa93fd";
    }
    const gradeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const exportarGrade = async function exportarGrade() {
        if (!gradeRef.current) {
            return;
        }
        ;
        try {
            const imagem = await toPng(gradeRef.current, {
                backgroundColor: "#ffffff",
                pixelRatio: 3,
                cacheBust: true
            });
            const link = document.createElement("a");
            link.download = `pixel-art-${tamanho}x${tamanho}.png`;
            link.href = imagem;
            link.click();
        } catch (t0) {
            const erro = t0;
            console.error("Erro ao exportar a grade:", erro);
            alert("N\xE3o foi poss\xEDvel exportar o desenho.");
        }
    };
    const [t1, setTamanho] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(32);
    const tamanho = t1;
    const [pixels, setPixels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(_TelaUseState);
    const [corAtual, setCorAtual] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#000000");
    const [ferramenta, setFerramenta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("lapis");
    const corRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(corAtual);
    const ferramentaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(ferramenta);
    const desenhandoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    let t2;
    let t3;
    if ($[1] !== corAtual) {
        t2 = ({
            "Tela[useEffect()]": ()=>{
                corRef.current = corAtual;
            }
        })["Tela[useEffect()]"];
        t3 = [
            corAtual
        ];
        $[1] = corAtual;
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[4] !== ferramenta) {
        t4 = ({
            "Tela[useEffect()]": ()=>{
                ferramentaRef.current = ferramenta;
            }
        })["Tela[useEffect()]"];
        t5 = [
            ferramenta
        ];
        $[4] = ferramenta;
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "Tela[pintar]": (index)=>{
                const cor = corRef.current;
                setPixels({
                    "Tela[pintar > setPixels()]": (anteriores)=>{
                        if (anteriores[index] === cor) {
                            return anteriores;
                        }
                        const novos = [
                            ...anteriores
                        ];
                        novos[index] = cor;
                        return novos;
                    }
                }["Tela[pintar > setPixels()]"]);
            }
        })["Tela[pintar]"];
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const pintar = t6;
    let t7;
    if ($[8] !== tamanho) {
        t7 = ({
            "Tela[preencher]": (index_0)=>{
                const cor_0 = corRef.current;
                setPixels({
                    "Tela[preencher > setPixels()]": (anteriores_0)=>{
                        const corAlvo = anteriores_0[index_0];
                        if (corAlvo === cor_0) {
                            return anteriores_0;
                        }
                        const novos_0 = [
                            ...anteriores_0
                        ];
                        const pilha = [
                            index_0
                        ];
                        while(pilha.length > 0){
                            const i = pilha.pop();
                            if (novos_0[i] !== corAlvo) {
                                continue;
                            }
                            novos_0[i] = cor_0;
                            const x = i % tamanho;
                            const y = Math.floor(i / tamanho);
                            if (x > 0) {
                                pilha.push(i - 1);
                            }
                            if (x < tamanho - 1) {
                                pilha.push(i + 1);
                            }
                            if (y > 0) {
                                pilha.push(i - tamanho);
                            }
                            if (y < tamanho - 1) {
                                pilha.push(i + tamanho);
                            }
                        }
                        return novos_0;
                    }
                }["Tela[preencher > setPixels()]"]);
            }
        })["Tela[preencher]"];
        $[8] = tamanho;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    tamanho;
    const preencher = t7;
    let t8;
    if ($[10] !== preencher) {
        t8 = ({
            "Tela[comecarDesenho]": (index_1)=>{
                if (ferramentaRef.current === "balde") {
                    preencher(index_1);
                    return;
                }
                desenhandoRef.current = true;
                pintar(index_1);
            }
        })["Tela[comecarDesenho]"];
        $[10] = preencher;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    const comecarDesenho = t8;
    let t9;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "Tela[continuarDesenho]": (index_2)=>{
                if (desenhandoRef.current) {
                    pintar(index_2);
                }
            }
        })["Tela[continuarDesenho]"];
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    const continuarDesenho = t9;
    let t10;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = function pararDesenho() {
            desenhandoRef.current = false;
        };
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    const pararDesenho = t10;
    let t11;
    if ($[14] !== pixels || $[15] !== setTamanho || $[16] !== tamanho) {
        t11 = function mudarTamanho(novoTamanho) {
            if (novoTamanho === tamanho) {
                return;
            }
            const temDesenho = pixels.some(_TelaMudarTamanhoPixelsSome);
            if (temDesenho && !window.confirm("Mudar o tamanho apaga o desenho atual. Continuar?")) {
                return;
            }
            setTamanho(novoTamanho);
            setPixels(criarTela(novoTamanho));
        };
        $[14] = pixels;
        $[15] = setTamanho;
        $[16] = tamanho;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    const mudarTamanho = t11;
    const grade = tamanho <= 64;
    let t12;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-semibold",
            children: "Tamanho:"
        }, void 0, false, {
            fileName: "[project]/src/components/tela.jsx",
            lineNumber: 357,
            columnNumber: 11
        }, this);
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] !== mudarTamanho || $[20] !== tamanho) {
        t13 = TAMANHOS.map({
            "Tela[TAMANHOS.map()]": (t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "Tela[TAMANHOS.map() > <button>.onClick]": ()=>mudarTamanho(t)
                    }["Tela[TAMANHOS.map() > <button>.onClick]"],
                    className: `px-3 py-1 rounded border-2 ${tamanho === t ? "border-blue-500 bg-blue-100" : "border-gray-400 bg-white"}`,
                    children: [
                        t,
                        "x",
                        t
                    ]
                }, t, true, {
                    fileName: "[project]/src/components/tela.jsx",
                    lineNumber: 365,
                    columnNumber: 36
                }, this)
        }["Tela[TAMANHOS.map()]"]);
        $[19] = mudarTamanho;
        $[20] = tamanho;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/tela.jsx",
            lineNumber: 377,
            columnNumber: 11
        }, this);
        $[22] = t13;
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = [
            {
                id: "lapis",
                nome: "L\xE1pis"
            },
            {
                id: "balde",
                nome: "Balde"
            }
        ];
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    let t16;
    if ($[25] !== ferramenta) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2",
            children: t15.map({
                "Tela[(anonymous)()]": (f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "Tela[(anonymous)() > <button>.onClick]": ()=>setFerramenta(f.id)
                        }["Tela[(anonymous)() > <button>.onClick]"],
                        className: `px-4 py-2 rounded border-2 ${ferramenta === f.id ? "border-blue-500 bg-blue-100" : "border-gray-400 bg-white"}`,
                        children: f.nome
                    }, f.id, false, {
                        fileName: "[project]/src/components/tela.jsx",
                        lineNumber: 399,
                        columnNumber: 37
                    }, this)
            }["Tela[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/tela.jsx",
            lineNumber: 398,
            columnNumber: 11
        }, this);
        $[25] = ferramenta;
        $[26] = t16;
    } else {
        t16 = $[26];
    }
    let t17;
    if ($[27] !== corAtual) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RodaCores, {
            corAtual: corAtual,
            onSelecionar: setCorAtual
        }, void 0, false, {
            fileName: "[project]/src/components/tela.jsx",
            lineNumber: 410,
            columnNumber: 11
        }, this);
        $[27] = corAtual;
        $[28] = t17;
    } else {
        t17 = $[28];
    }
    let t18;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = [
            "#000000",
            BRANCO
        ];
        $[29] = t18;
    } else {
        t18 = $[29];
    }
    let t19;
    if ($[30] !== corAtual) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2",
            children: t18.map({
                "Tela[(anonymous)()]": (cor_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "Tela[(anonymous)() > <button>.onClick]": ()=>setCorAtual(cor_2)
                        }["Tela[(anonymous)() > <button>.onClick]"],
                        style: {
                            backgroundColor: cor_2
                        },
                        className: `w-8 h-8 rounded border-2 ${corAtual === cor_2 ? "border-blue-500" : "border-gray-400"}`
                    }, cor_2, false, {
                        fileName: "[project]/src/components/tela.jsx",
                        lineNumber: 426,
                        columnNumber: 41
                    }, this)
            }["Tela[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/tela.jsx",
            lineNumber: 425,
            columnNumber: 11
        }, this);
        $[30] = corAtual;
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    let t20;
    if ($[32] !== t17 || $[33] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-2",
            children: [
                t17,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/tela.jsx",
            lineNumber: 439,
            columnNumber: 11
        }, this);
        $[32] = t17;
        $[33] = t19;
        $[34] = t20;
    } else {
        t20 = $[34];
    }
    let t21;
    if ($[35] !== exportarGrade) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: exportarGrade,
            className: "px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700",
            children: "Exportar PNG"
        }, void 0, false, {
            fileName: "[project]/src/components/tela.jsx",
            lineNumber: 448,
            columnNumber: 11
        }, this);
        $[35] = exportarGrade;
        $[36] = t21;
    } else {
        t21 = $[36];
    }
    const t22 = `repeat(${tamanho}, 1fr)`;
    let t23;
    if ($[37] !== t22) {
        t23 = {
            gridTemplateColumns: t22
        };
        $[37] = t22;
        $[38] = t23;
    } else {
        t23 = $[38];
    }
    let t24;
    if ($[39] !== comecarDesenho || $[40] !== grade || $[41] !== pixels) {
        let t25;
        if ($[43] !== comecarDesenho || $[44] !== grade) {
            t25 = ({
                "Tela[pixels.map()]": (cor_3, index_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pixel, {
                        cor: cor_3,
                        index: index_3,
                        grade: grade,
                        onDown: comecarDesenho,
                        onEnter: continuarDesenho
                    }, index_3, false, {
                        fileName: "[project]/src/components/tela.jsx",
                        lineNumber: 470,
                        columnNumber: 51
                    }, this)
            })["Tela[pixels.map()]"];
            $[43] = comecarDesenho;
            $[44] = grade;
            $[45] = t25;
        } else {
            t25 = $[45];
        }
        t24 = pixels.map(t25);
        $[39] = comecarDesenho;
        $[40] = grade;
        $[41] = pixels;
        $[42] = t24;
    } else {
        t24 = $[42];
    }
    let t25;
    if ($[46] !== t23 || $[47] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: gradeRef,
            className: "grid w-[512px] h-[512px] border border-gray-800 select-none",
            style: t23,
            onMouseLeave: pararDesenho,
            children: t24
        }, void 0, false, {
            fileName: "[project]/src/components/tela.jsx",
            lineNumber: 488,
            columnNumber: 11
        }, this);
        $[46] = t23;
        $[47] = t24;
        $[48] = t25;
    } else {
        t25 = $[48];
    }
    let t26;
    if ($[49] !== t14 || $[50] !== t16 || $[51] !== t20 || $[52] !== t21 || $[53] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-4 mt-10 pb-10",
            onMouseUp: pararDesenho,
            children: [
                t14,
                t16,
                t20,
                t21,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/tela.jsx",
            lineNumber: 497,
            columnNumber: 11
        }, this);
        $[49] = t14;
        $[50] = t16;
        $[51] = t20;
        $[52] = t21;
        $[53] = t25;
        $[54] = t26;
    } else {
        t26 = $[54];
    }
    return t26;
}
_s1(Tela, "VssMSwpKvI6J7D9yrXCi9ARX+Ds=");
_c2 = Tela;
function _TelaMudarTamanhoPixelsSome(cor_1) {
    return cor_1 !== BRANCO;
}
function _TelaUseState() {
    return criarTela(32);
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "RodaCores");
__turbopack_context__.k.register(_c1, "Pixel");
__turbopack_context__.k.register(_c2, "Tela");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_05e51-z._.js.map