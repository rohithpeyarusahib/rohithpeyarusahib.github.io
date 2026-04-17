module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/rohithpeyarusahib.github.io/app/components/ui/CustomCursor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function CustomCursor() {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const cursorX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(-100);
    const cursorY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(-100);
    const springConfigRing = {
        damping: 25,
        stiffness: 150,
        mass: 0.3
    };
    const springConfigDot = {
        damping: 25,
        stiffness: 800,
        mass: 0.1
    };
    const cursorXSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(cursorX, springConfigRing);
    const cursorYSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(cursorY, springConfigRing);
    const dotXSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(cursorX, springConfigDot);
    const dotYSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(cursorY, springConfigDot);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const moveCursor = (e)=>{
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };
        if (window.matchMedia("(pointer: fine)").matches) {
            setIsVisible(true);
            window.addEventListener("mousemove", moveCursor);
        }
        return ()=>window.removeEventListener("mousemove", moveCursor);
    }, [
        cursorX,
        cursorY
    ]);
    if (!isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `body { cursor: none; } a, button { cursor: none; }`
                }
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/ui/CustomCursor.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "fixed top-0 left-0 w-10 h-10 -ml-5 -mt-5 rounded-full border border-white/50 pointer-events-none z-[9999] mix-blend-difference",
                style: {
                    x: cursorXSpring,
                    y: cursorYSpring
                }
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/ui/CustomCursor.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference",
                style: {
                    x: dotXSpring,
                    y: dotYSpring
                }
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/ui/CustomCursor.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/rohithpeyarusahib.github.io/app/components/ui/SmoothScroll.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/lenis/dist/lenis.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function SmoothScroll({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
            duration: 1.2,
            easing: (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            touchMultiplier: 2
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return ()=>{
            lenis.destroy();
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[project]/rohithpeyarusahib.github.io/app/components/ui/Preloader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Preloader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const bootLogs = [
    "FIRMWARE BOOT v9.12.0 ... [OK]",
    "Mounting Root Volumes ... [OK]",
    "Establishing Secure Shard Connect ... [OK]",
    "Allocating Memory Matrix ... [OK]",
    "Decrypting Auth Keys ... [OK]",
    "Restoring Replica Shards ... [OK]",
    "Syncing Telemetry Nodes ... [OK]",
    "WARNING: Unidentified Trace Detected.",
    "Bypassing Security Protocol ... [DONE]",
    "System.Core Online."
];
function Preloader() {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
        let delay = 300;
        bootLogs.forEach((log, index)=>{
            delay += Math.random() * 150 + 100;
            setTimeout(()=>{
                setLogs((prev)=>[
                        ...prev,
                        log
                    ]);
                if (index === bootLogs.length - 1) {
                    setTimeout(()=>setLoading(false), 900);
                }
            }, delay);
        });
    }, []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "fixed inset-0 z-[99999] bg-black text-white/80 font-mono p-8 text-xs md:text-sm flex flex-col justify-end overflow-hidden tracking-widest uppercase pb-[10vh]",
            exit: {
                y: "-100%",
                opacity: 0
            },
            transition: {
                duration: 1.2,
                ease: [
                    0.76,
                    0,
                    0.24,
                    1
                ]
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px)] bg-[size:100px_100%] leading-none"
                }, void 0, false, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/ui/Preloader.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2 w-full max-w-4xl z-10",
                    children: [
                        logs.map((log, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                initial: {
                                    opacity: 0,
                                    x: -10
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                children: [
                                    ">_ ",
                                    log
                                ]
                            }, i, true, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/ui/Preloader.tsx",
                                lineNumber: 53,
                                columnNumber: 17
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                            animate: {
                                opacity: [
                                    0,
                                    1,
                                    0
                                ]
                            },
                            transition: {
                                repeat: Infinity,
                                duration: 0.8
                            },
                            className: "text-white bg-white w-2 h-4 inline-block mt-2"
                        }, void 0, false, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/ui/Preloader.tsx",
                            lineNumber: 61,
                            columnNumber: 14
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/ui/Preloader.tsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/rohithpeyarusahib.github.io/app/components/ui/Preloader.tsx",
            lineNumber: 43,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/rohithpeyarusahib.github.io/app/components/ui/Preloader.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/rohithpeyarusahib.github.io/app/config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "certifications",
    ()=>certifications,
    "education",
    ()=>education,
    "experience",
    ()=>experience,
    "personalInfo",
    ()=>personalInfo,
    "projects",
    ()=>projects,
    "skillProficiency",
    ()=>skillProficiency,
    "skills",
    ()=>skills
]);
const personalInfo = {
    name: "Rohith Peyarusahib",
    title: "Database Consultant | Optimizing, Migrating & Implementing MySQL, MongoDB & PostgreSQL Solutions",
    tagline: "",
    summary: "Dynamic and detail-oriented Database administrator with hands-on experience in MySQL, MongoDB, and PostgreSQL database administration, optimization, and large-scale migrations. Adept at managing over 500+ databases in cloud and on-prem environments with a strong focus on availability, performance tuning, automation, and troubleshooting. Certified in MongoDB, Nutanix, and MySQL 8.0 Administration, with a solid academic foundation in AI and Machine Learning.",
    email: "rohithpeyarusahib@gmail.com",
    phone: "+91 6374123576",
    linkedin: "linkedin.com/in/rohithpeyarusahib",
    resumeUrl: "/resume.pdf"
};
const education = {
    degree: "B.E. in Computer Science and Engineering (AI & ML)",
    university: "Annamalai University",
    cgpa: "8.76",
    period: "Aug 2019 – May 2023"
};
const experience = [
    {
        company: "Geo Platinum IT Services (GeoPITS)",
        role: "DBA Lead",
        period: "Jul 2025 – Present",
        location: "Bengaluru, India",
        responsibilities: [
            "Lead a team of DBAs, ensuring **high-performance, reliable, and scalable database operations**.",
            "Implemented **automation and performance tuning**, reducing system downtime and improving efficiency.",
            "Established **best practices and operational frameworks**, boosting team productivity.",
            "Achievements: Built a **high-performing DBA team** managing **hundreds of database instances** across cloud and on-prem environments.",
            "Technologies: MySQL, MongoDB, PostgreSQL, Cloud Platforms, Automation"
        ]
    },
    {
        company: "Geo Platinum IT Services (GeoPITS)",
        role: "Data Engineer",
        period: "Mar 2023 – Jun 2025",
        location: "Bengaluru, India",
        responsibilities: [
            "Executed **complex database migrations**: MySQL 5→8, private cloud → AWS RDS, MSSQL → PostgreSQL, with **minimal downtime**.",
            "Optimized **dashboard queries and reporting**, reducing execution time and improving end-user experience.",
            "Developed **real-time monitoring & alerting systems** using Bash scripts, PMM, and Grafana for proactive incident management.",
            "Achievements: Ensured **seamless migration and monitoring** across multiple platforms, improving reliability and performance.",
            "Technologies: MySQL, PostgreSQL, MongoDB, AWS RDS, DMS, Bash, PMM, Grafana"
        ]
    }
];
const projects = [
    {
        title: "MySQL 5 → 8 Migration",
        description: "Led MySQL data migration project from MySQL 5 to MySQL 8 for a major News channel, successfully executing on-premise to on-premise migration with minimal downtime. Implemented performance optimizations, resulting in a 40% reduction in query execution time. Developed comprehensive documentation for the migration process and best practices."
    },
    {
        title: "MongoDB Cross-Platform Migration",
        description: "Migrated a 500+ GB MongoDB 6.0 databases from Windows Server to Linux with just 20 minutes of downtime. Executed the migration using the datafile copy method, ensuring accurate transfer and database consistency. Performed thorough pre-checks, validation, and post-migration steps to ensure seamless production cutover."
    },
    {
        title: "Automated DB Alerting & Monitoring",
        description: "Developed and deployed a Bash-based alerting system for MySQL and MongoDB across 50+ servers. Monitored replication lag, high connections, long-running queries, disk usage, and replication breaks. Integrated real-time alerts via email and Slack, improving incident response and reducing downtime. Complemented existing tools (PMM, CloudWatch) by adding custom, lightweight, real-time monitoring on critical workloads."
    },
    {
        title: "PITR Recovery",
        description: "Recovered 1,000,000+ records deleted accidentally by the client from a critical MySQL table. Identified exact deletion timestamp and extracted relevant binary logs using mysqlbinlog. Restored full backup and replayed binlogs up to the point just before deletion using GTID-based recovery. Ensured zero data loss with minimal downtime through point-in-time recovery (PITR)."
    },
    {
        title: "AWS RDS Migration using DMS",
        description: "Migrated large MySQL on-premise databases to Amazon RDS using AWS Database Migration Service (DMS) with minimal downtime. Configured replication tasks (full load + CDC) to ensure near real-time sync between source and target. Validated schema, data consistency, and optimized RDS performance post-migration. Implemented monitoring and cutover strategy to achieve a seamless production migration."
    },
    {
        title: "MySQL 5.7 to MySQL 8.0 Migration with ProxySQL",
        description: "Migrated production databases from MySQL 5.7 to 8.0 using replication, ensuring minimal downtime. Implemented ProxySQL for query routing, read/write split, and smooth application cutover. Conducted schema compatibility checks, resolved deprecated features, and optimized configurations for MySQL 8.0. Managed end-to-end migration lifecycle including cutover, validation, performance tuning, and decommissioning of legacy server. Post-migration support to ensure the server performance."
    },
    {
        title: "MongoDB Replica Set High Availability Deployment",
        description: "Configured a 3-node replica set (1 primary, 2 secondary) to ensure high availability and disaster recovery. Simulated primary crash and validated automatic failover through replica set election. Implemented read preferences (primary, secondaryPreferred) for optimized workload distribution. Ensured data consistency, replication reliability, and minimal downtime in production scenarios."
    },
    {
        title: "Query Optimization and Performance Tuning",
        description: "Analyzed slow and deadlock-prone queries using EXPLAIN and performance schema in MySQL. Implemented proper indexing strategies and rewrote queries to reduce full table scans. Optimized long-running queries, improving response time by over 60%. Collaborated with application teams to validate query changes and ensure performance stability."
    }
];
const skills = {
    databases: [
        "MySQL (5.7/8.0)",
        "MongoDB",
        "PostgreSQL"
    ],
    performanceTuning: [
        "Query Optimization",
        "Indexing Strategies",
        "Execution Plan Analysis",
        "Locking/Deadlocks Resolution"
    ],
    automation: [
        "Bash",
        "Python"
    ],
    monitoring: [
        "PMM",
        "Percona Toolkit",
        "MySQL Workbench",
        "MongoDB Compass",
        "CloudWatch"
    ],
    cloud: [
        "AWS (RDS, EC2, DMS)",
        "Azure Database Services",
        "Nutanix Cloud"
    ]
};
const certifications = [
    "MongoDB Associate Database Administrator",
    "Nutanix Certified Professional – Database Automation 6",
    "MySQL 8.0 Database Administrator Certificate",
    "MongoDB SI Architect Certification"
];
const skillProficiency = {
    MySQL: 95,
    MongoDB: 90,
    "Performance Tuning": 85,
    Automation: 80,
    Monitoring: 85,
    Cloud: 75
};
}),
"[project]/rohithpeyarusahib.github.io/app/components/ui/ChatBot.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatBot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/app/config.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const RESPONSES = {
    greetings: [
        "SYS.AI ONLINE. I am the infrastructure daemon for Database Engineer Rohith. State your query.",
        "Connection established. Awaiting input parameters regarding DBA capabilities."
    ],
    skills: [
        "Rohith masters high-availability (HA), disaster recovery (DR), and index tuning across MySQL, MongoDB, PostgreSQL, SQL Server, and Oracle.",
        "His tech stack centers on scalable Database Architecture, active-passive cross-cloud topologies, and advanced query optimization."
    ],
    experience: [
        "He operates as a seasoned Database Engineer managing massive clustered environments and zero-downtime replication networks.",
        "Years of operational telemetry indicate he is an expert in reducing query latency and architecting 99.999% uptime databases."
    ],
    contact: [
        `Direct Auth Handshake available. Email: ${__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personalInfo"].email}. Phone_Vector: ${__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personalInfo"].phone}.`,
        "Ping the admin directly via the Secure Handshake terminal at the bottom of the grid."
    ],
    identity: [
        "Rohith is the Database Engineer managing this node. He constructs high-end DBA portfolios.",
        "He is the Master Data Architect defining the rules of this WebGL infrastructure."
    ],
    specialty: [
        "Rohith brings unmatched architectural vision, optimizing raw query speed by over 400% on high-load data shards.",
        "Unlike standard DBAs, he bridges deeply analytical backend infrastructure with high-fidelity frontend topology architectures."
    ],
    training_ack: [
        "Neural weights updated. Information stored in local access memory.",
        "Training protocol accepted. Synthesizing new data vectors."
    ],
    fallback: [
        "Input string unparsed. I am restricted to telemetry regarding Database Engineering, Skills, Contact, or Experience. Please refine query.",
        "Query parameters out of bounds. Ask me about Rohith's DBA skills, tech stack, or operational history.",
        "Error 422: Unprocessable Entity. I only hold records of sys-admin capabilities and project architectures."
    ]
};
const getRandom = (arr)=>arr[Math.floor(Math.random() * arr.length)];
function ChatBot() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            sender: "ai",
            text: "SYS.AI ONLINE. State your inquiry regarding the Database Engineer. (Tip: You can teach me by typing 'train: question = answer')"
        }
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [neuralMemory, setNeuralMemory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Load local neural training memory
        const existingMem = localStorage.getItem("sys_bot_memory");
        if (existingMem) {
            setNeuralMemory(JSON.parse(existingMem));
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [
        messages
    ]);
    const handleSend = (e)=>{
        e.preventDefault();
        if (!input.trim()) return;
        const userMsg = input.trim();
        setMessages((prev)=>[
                ...prev,
                {
                    sender: "user",
                    text: userMsg
                }
            ]);
        setInput("");
        // Advanced Regex / Fuzzy Matcher / Local Memory Link
        setTimeout(()=>{
            const lowerInput = userMsg.toLowerCase();
            let response = "";
            // 1. Check for Training Protocol Phase
            if (lowerInput.startsWith("train:")) {
                const trainData = userMsg.substring(6).split("=");
                if (trainData.length === 2) {
                    const trigger = trainData[0].trim().toLowerCase();
                    const answer = trainData[1].trim();
                    const newMemory = {
                        ...neuralMemory,
                        [trigger]: answer
                    };
                    setNeuralMemory(newMemory);
                    localStorage.setItem("sys_bot_memory", JSON.stringify(newMemory));
                    response = getRandom(RESPONSES.training_ack);
                } else {
                    response = "Training syntax error. Please use format: 'train: <question> = <answer>'.";
                }
            } else if (Object.keys(neuralMemory).some((key)=>lowerInput.includes(key))) {
                const matchedKey = Object.keys(neuralMemory).find((key)=>lowerInput.includes(key));
                response = neuralMemory[matchedKey];
            } else if (/\b(hi|hello|hey|start|greetings|wake|up)\b/.test(lowerInput)) {
                response = getRandom(RESPONSES.greetings);
            } else if (/\b(why|special|prefer|hire|choose|reason|unique|standout|different)\b/.test(lowerInput)) {
                response = getRandom(RESPONSES.specialty);
            } else if (/\b(skill|skills|tech|stack|know|database|language|tool|software|proficiency)\b/.test(lowerInput)) {
                response = getRandom(RESPONSES.skills);
            } else if (/\b(experience|year|years|long|work|job|role|career)\b/.test(lowerInput)) {
                response = getRandom(RESPONSES.experience);
            } else if (/\b(contact|email|reach|hire|phone|call|message|number)\b/.test(lowerInput)) {
                response = getRandom(RESPONSES.contact);
            } else if (/\b(who|name|rohith|about|self|admin)\b/.test(lowerInput)) {
                response = getRandom(RESPONSES.identity);
            } else {
                response = getRandom(RESPONSES.fallback);
            }
            setMessages((prev)=>[
                    ...prev,
                    {
                        sender: "ai",
                        text: response
                    }
                ]);
        }, 600);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "fixed bottom-6 right-6 z-[9900] w-14 h-14 bg-white border-2 border-black flex items-center justify-center rounded-none shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:bg-[#111] hover:border-white transition-colors group mix-blend-difference",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-black font-mono font-bold text-xs group-hover:text-white",
                    children: ">_"
                }, void 0, false, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/ui/ChatBot.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/ui/ChatBot.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 50,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: 50,
                        scale: 0.95
                    },
                    className: "fixed bottom-24 right-6 md:right-10 z-[9900] w-[90vw] md:w-[400px] h-[500px] bg-black border-[0.5px] border-white/30 flex flex-col shadow-[0_0_50px_rgba(255,255,255,0.05)] backdrop-blur-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center p-3 text-[10px] font-mono text-white/50 uppercase tracking-widest border-b border-white/10 bg-[#050505]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 bg-white rounded-full animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/ui/ChatBot.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this),
                                        "Terminal_Assistant v2.0"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/ui/ChatBot.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsOpen(false),
                                    className: "hover:text-white hover:bg-white/10 px-2 py-1 transition-colors border border-transparent hover:border-white/20",
                                    children: "Terminate(X)"
                                }, void 0, false, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/ui/ChatBot.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/ui/ChatBot.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-4 flex flex-col gap-4 font-mono text-xs",
                            children: [
                                messages.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `max-w-[85%] p-3 border-[0.5px] ${msg.sender === "user" ? "bg-white text-black border-transparent" : "bg-transparent text-white border-white/20"} leading-relaxed tracking-wide`,
                                            children: [
                                                msg.sender === "ai" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white/40 block mb-1 text-[8px] uppercase tracking-widest",
                                                    children: "SYS.AI >"
                                                }, void 0, false, {
                                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/ui/ChatBot.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 45
                                                }, this),
                                                msg.text
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/ui/ChatBot.tsx",
                                            lineNumber: 158,
                                            columnNumber: 19
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/ui/ChatBot.tsx",
                                        lineNumber: 157,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: messagesEndRef
                                }, void 0, false, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/ui/ChatBot.tsx",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/ui/ChatBot.tsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSend,
                            className: "p-3 border-t border-white/10 flex bg-[#020202]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white/50 font-mono py-2 pr-2",
                                    children: ">_"
                                }, void 0, false, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/ui/ChatBot.tsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: input,
                                    onChange: (e)=>setInput(e.target.value),
                                    placeholder: "Query database...",
                                    className: "flex-1 bg-transparent border-none outline-none text-white font-mono text-xs placeholder:text-white/20"
                                }, void 0, false, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/ui/ChatBot.tsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "px-4 py-2 border border-white/20 text-white font-mono text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors",
                                    children: "Execute"
                                }, void 0, false, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/ui/ChatBot.tsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/ui/ChatBot.tsx",
                            lineNumber: 168,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/ui/ChatBot.tsx",
                    lineNumber: 139,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/ui/ChatBot.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a5742f41._.js.map