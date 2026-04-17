module.exports = [
"[project]/rohithpeyarusahib.github.io/app/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/rohithpeyarusahib.github.io/app/components/ui/AnimatedSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/app/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function AnimatedSection({ children, className, delay = 0, direction = "up" }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-100px 0px"
    });
    const getVariants = ()=>{
        switch(direction){
            case "up":
                return {
                    hidden: {
                        opacity: 0,
                        y: 50
                    },
                    visible: {
                        opacity: 1,
                        y: 0
                    }
                };
            case "down":
                return {
                    hidden: {
                        opacity: 0,
                        y: -50
                    },
                    visible: {
                        opacity: 1,
                        y: 0
                    }
                };
            case "left":
                return {
                    hidden: {
                        opacity: 0,
                        x: 50
                    },
                    visible: {
                        opacity: 1,
                        x: 0
                    }
                };
            case "right":
                return {
                    hidden: {
                        opacity: 0,
                        x: -50
                    },
                    visible: {
                        opacity: 1,
                        x: 0
                    }
                };
            case "none":
            default:
                return {
                    hidden: {
                        opacity: 0
                    },
                    visible: {
                        opacity: 1
                    }
                };
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        variants: getVariants(),
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        transition: {
            duration: 0.6,
            delay,
            ease: "easeOut"
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/rohithpeyarusahib.github.io/app/components/ui/AnimatedSection.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/rohithpeyarusahib.github.io/app/components/About.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/app/components/ui/AnimatedSection.tsx [app-ssr] (ecmascript)");
"use client";
;
;
const About = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "py-24 px-4 max-w-6xl mx-auto z-10 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-5xl font-bold text-left mb-8",
                    children: [
                        "About ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-accent",
                            children: "Me"
                        }, void 0, false, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/About.tsx",
                            lineNumber: 11,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/About.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/About.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                delay: 0.2,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-lg text-foreground/80 leading-relaxed mb-12 text-justify space-y-4 max-w-4xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "I’m Rohith Peyarusahib, a hands-on Database Consultant specializing in MySQL, MongoDB, and PostgreSQL. I help businesses achieve ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-foreground",
                                    children: "high-performance, reliable, and scalable databases"
                                }, void 0, false, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/About.tsx",
                                    lineNumber: 18,
                                    columnNumber: 142
                                }, ("TURBOPACK compile-time value", void 0)),
                                " through performance optimization, seamless migrations, and end-to-end implementation. I am ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-foreground",
                                    children: "certified in MySQL 8 and MongoDB"
                                }, void 0, false, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/About.tsx",
                                    lineNumber: 18,
                                    columnNumber: 329
                                }, ("TURBOPACK compile-time value", void 0)),
                                ", ensuring industry-standard expertise in managing and optimizing modern database systems."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/About.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "With 3 years of experience managing databases across cloud and on-prem environments, I have successfully ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-foreground",
                                    children: "optimized multiple database instances, executed migrations, and implemented automation for monitoring and alerts"
                                }, void 0, false, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/About.tsx",
                                    lineNumber: 21,
                                    columnNumber: 118
                                }, ("TURBOPACK compile-time value", void 0)),
                                ". My focus is on delivering ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-foreground",
                                    children: "tangible results"
                                }, void 0, false, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/About.tsx",
                                    lineNumber: 21,
                                    columnNumber: 303
                                }, ("TURBOPACK compile-time value", void 0)),
                                ": faster queries, minimal downtime, and reliable database systems."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/About.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "I work closely with clients to understand their unique challenges and provide ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-foreground",
                                    children: "practical, results-driven solutions"
                                }, void 0, false, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/About.tsx",
                                    lineNumber: 24,
                                    columnNumber: 91
                                }, ("TURBOPACK compile-time value", void 0)),
                                " — from optimizing slow queries and setting up replication strategies to implementing complete database solutions. If you’re looking for a consultant who not only advises but ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-foreground",
                                    children: "executes solutions efficiently and reliably"
                                }, void 0, false, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/About.tsx",
                                    lineNumber: 24,
                                    columnNumber: 346
                                }, ("TURBOPACK compile-time value", void 0)),
                                ", I can help you achieve ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-foreground",
                                    children: "robust, high-performing databases that scale with your business"
                                }, void 0, false, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/About.tsx",
                                    lineNumber: 24,
                                    columnNumber: 459
                                }, ("TURBOPACK compile-time value", void 0)),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/About.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/About.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/About.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-8",
                children: [
                    {
                        metric: "50+",
                        desc: "Databases Optimized"
                    },
                    {
                        metric: "10+",
                        desc: "Migrations Completed"
                    },
                    {
                        metric: "Multiple",
                        desc: "Clients Served"
                    }
                ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        delay: 0.4 + i * 0.1,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-surface border border-border p-8 rounded-2xl text-center hover:border-accent/50 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-3xl font-bold text-accent mb-2 font-mono",
                                    children: item.metric
                                }, void 0, false, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/About.tsx",
                                    lineNumber: 37,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-foreground/70 uppercase text-sm tracking-wide",
                                    children: item.desc
                                }, void 0, false, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/About.tsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/About.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, i, false, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/About.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/About.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/rohithpeyarusahib.github.io/app/components/About.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = About;
}),
"[project]/rohithpeyarusahib.github.io/app/components/Experience.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/app/config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/app/components/ui/AnimatedSection.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const Experience = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "experience",
        className: "py-32 px-4 max-w-6xl mx-auto relative z-10 w-full overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-24 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-none mix-blend-difference",
                        children: [
                            "Operational ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Experience.tsx",
                                lineNumber: 12,
                                columnNumber: 23
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/20 font-mono tracking-widest",
                                children: "[Uptime]"
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Experience.tsx",
                                lineNumber: 13,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Experience.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white/40 max-w-sm text-xs font-mono uppercase tracking-widest mt-6 md:mt-0",
                        children: "> Historical Deployment Logs"
                    }, void 0, false, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Experience.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Experience.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative border-l-[0.5px] border-white/20 ml-2 md:ml-4",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["experience"].map((exp, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        delay: index * 0.15,
                        direction: "up",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative pl-8 md:pl-12 mb-16 group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute w-3 h-3 bg-white border border-black rounded-none -left-[6px] top-2 transition-all duration-500 group-hover:bg-[#000000] group-hover:border-white shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                                }, void 0, false, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Experience.tsx",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-transparent border border-white/10 p-6 md:p-10 rounded-none hover:border-white/40 transition-colors hover:bg-white/5 backdrop-blur-sm relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-0 right-0 p-2 text-[8px] font-mono text-white/20 uppercase tracking-[0.4em]",
                                            children: [
                                                "Node_",
                                                index + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Experience.tsx",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col md:flex-row md:items-start justify-between mb-8 border-b border-white/5 pb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-2xl md:text-3xl font-bold font-mono text-white mb-2 tracking-tighter uppercase leading-none",
                                                            children: exp.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Experience.tsx",
                                                            lineNumber: 33,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white/60 font-mono text-xs uppercase tracking-[0.2em]",
                                                            children: exp.company
                                                        }, void 0, false, {
                                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Experience.tsx",
                                                            lineNumber: 34,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Experience.tsx",
                                                    lineNumber: 32,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-white/40 text-[10px] mt-6 md:mt-0 font-mono text-left md:text-right uppercase tracking-[0.1em]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: exp.period
                                                        }, void 0, false, {
                                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Experience.tsx",
                                                            lineNumber: 37,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: exp.location
                                                        }, void 0, false, {
                                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Experience.tsx",
                                                            lineNumber: 38,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Experience.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Experience.tsx",
                                            lineNumber: 31,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-4 text-white/70 font-light text-sm md:text-base selection:bg-white selection:text-black",
                                            children: exp.responsibilities.map((resp, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex group/li relative leading-relaxed",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white/30 mr-4 font-mono font-bold mt-0.5 group-hover/li:text-white transition-colors",
                                                            children: ">_"
                                                        }, void 0, false, {
                                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Experience.tsx",
                                                            lineNumber: 45,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            dangerouslySetInnerHTML: {
                                                                __html: resp.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold font-mono tracking-wide">$1</strong>')
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Experience.tsx",
                                                            lineNumber: 46,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Experience.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Experience.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Experience.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Experience.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, index, false, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Experience.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Experience.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Experience.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Experience;
}),
"[project]/rohithpeyarusahib.github.io/app/components/Services.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
const services = [
    {
        title: "Cluster Performance Tuning",
        description: "Deep indexing analysis, IOPS optimization, and critical query restructuring to destroy latency.",
        keywords: "B-Tree Optimization, Query Explains, IOPS Scaling"
    },
    {
        title: "Zero-Downtime Migrations",
        description: "Architecting seamless cross-cloud data migrations utilizing binlog routing and logical replication.",
        keywords: "AWS DMS, MySQL Binlog, pglogical"
    },
    {
        title: "High-Availability Matrices",
        description: "Deploying multi-region Active-Passive and Active-Active data meshes. Guaranteed 99.999% uptime.",
        keywords: "Galera Cluster, Patroni, Redis Sentinel"
    },
    {
        title: "Deep System Audits",
        description: "Ruthless examination of security groups, weak schemas, and transactional deadlocks.",
        keywords: "Deadlock Analysis, ACID Compliance, InfoSec Validation"
    }
];
const Services = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "services",
        className: "py-24 px-4 max-w-6xl mx-auto border-t border-white/10 font-mono mt-12 relative z-10 w-full overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-20 flex flex-col items-start border-b border-white/10 pb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-none mix-blend-difference mb-4",
                        children: [
                            "Operational ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Services.tsx",
                                lineNumber: 33,
                                columnNumber: 23
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/20 tracking-widest",
                                children: "[Capabilities]"
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Services.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Services.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white/40 text-[10px] tracking-[0.3em] uppercase border border-white/20 px-2 py-1 bg-white/5 inline-block",
                        children: "Sys.Execution.Vectors"
                    }, void 0, false, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Services.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Services.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/20 bg-[#020202]",
                children: services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: `p-10 border-white/10 hover:bg-white/5 hover:border-white/30 transition-colors duration-500 group relative ${index % 2 === 0 ? "md:border-r" : ""} ${index < 2 ? "border-b" : ""}`,
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: index * 0.1
                        },
                        viewport: {
                            once: true
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50 opacity-0 group-hover:opacity-100 transition-opacity"
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Services.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50 opacity-0 group-hover:opacity-100 transition-opacity"
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Services.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-bold text-xs uppercase tracking-widest animate-pulse",
                                        children: ">_"
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Services.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold tracking-tight text-white uppercase",
                                        children: service.title
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Services.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Services.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/60 mb-8 text-sm leading-relaxed tracking-wide",
                                children: service.description
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Services.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-auto border-t border-white/10 pt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[9px] text-white/30 uppercase tracking-[0.2em] break-words",
                                    children: [
                                        "Tags: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/80",
                                            children: service.keywords
                                        }, void 0, false, {
                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Services.tsx",
                                            lineNumber: 61,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Services.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Services.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Services.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Services.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Services.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Services;
}),
"[project]/rohithpeyarusahib.github.io/app/components/ui/FadeIn.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FadeIn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function FadeIn({ children, delay = 0, direction = "up", className = "" }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-10% 0px"
    });
    const getHiddenState = ()=>{
        switch(direction){
            case "up":
                return {
                    opacity: 0,
                    y: 40
                };
            case "down":
                return {
                    opacity: 0,
                    y: -40
                };
            case "left":
                return {
                    opacity: 0,
                    x: 40
                };
            case "right":
                return {
                    opacity: 0,
                    x: -40
                };
            default:
                return {
                    opacity: 0
                };
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: getHiddenState(),
        animate: isInView ? {
            opacity: 1,
            x: 0,
            y: 0
        } : getHiddenState(),
        transition: {
            duration: 0.8,
            delay,
            ease: [
                0.21,
                0.47,
                0.32,
                0.98
            ]
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/rohithpeyarusahib.github.io/app/components/ui/FadeIn.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/app/config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$components$2f$ui$2f$FadeIn$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/app/components/ui/FadeIn.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function ProjectCard({ project, onClick, index }) {
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const mouseXSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(x);
    const mouseYSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(y);
    const rotateX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(mouseYSpring, [
        -0.5,
        0.5
    ], [
        "15deg",
        "-15deg"
    ]);
    const rotateY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(mouseXSpring, [
        -0.5,
        0.5
    ], [
        "-15deg",
        "15deg"
    ]);
    const handleMouseMove = (e)=>{
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };
    const handleMouseLeave = ()=>{
        x.set(0);
        y.set(0);
    };
    // Staggered parallax based on odd/even grid
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])({
        target: ref,
        offset: [
            "start end",
            "end start"
        ]
    });
    const yParallax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        100,
        index % 2 === 0 ? -100 : -200
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        style: {
            y: yParallax
        },
        className: "h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            style: {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
            },
            onMouseMove: handleMouseMove,
            onMouseLeave: handleMouseLeave,
            onClick: onClick,
            className: "relative p-8 bg-black rounded-none border-[0.5px] border-white/10 cursor-pointer hover:border-white/30 transition-colors h-full flex flex-col group shadow-[0_0_30px_rgba(255,255,255,0.02)] backdrop-blur-xl",
            whileHover: {
                scale: 1.02
            },
            transition: {
                duration: 0.4,
                ease: "easeOut"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",
                    style: {
                        transform: "translateZ(-20px)"
                    }
                }, void 0, false, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-2xl md:text-3xl font-mono tracking-tighter mb-4 text-white flex justify-between items-start uppercase",
                    style: {
                        transform: "translateZ(40px)"
                    },
                    children: [
                        project.title,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                            className: "text-white/30 group-hover:text-white transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white/50 text-sm line-clamp-3 mb-8 leading-relaxed font-light",
                    style: {
                        transform: "translateZ(20px)"
                    },
                    children: project.description
                }, void 0, false, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-auto pt-6 border-t border-white/5",
                    style: {
                        transform: "translateZ(10px)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex text-white/80 text-[10px] font-mono uppercase tracking-[0.3em] items-center transition-all before:content-['>_'] before:mr-2",
                        children: "View Protocol"
                    }, void 0, false, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
function Projects() {
    const [selectedProject, setSelectedProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    if (typeof document !== "undefined") {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        className: "py-32 max-w-7xl mx-auto px-4 relative z-10 w-full overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$components$2f$ui$2f$FadeIn$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-24 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-none mix-blend-difference",
                                children: [
                                    "Storage ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                                        lineNumber: 95,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/20 font-mono tracking-widest",
                                        children: "[Clusters]"
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/40 max-w-sm text-xs font-mono uppercase tracking-widest mt-6 md:mt-0",
                                children: "> High Availability & Disaster Recovery Matrices"
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-12",
                        style: {
                            perspective: 1200
                        },
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].map((proj, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                                project: proj,
                                index: idx,
                                onClick: ()=>setSelectedProject(proj)
                            }, idx, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: selectedProject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-[100] flex items-center justify-center p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            onClick: ()=>setSelectedProject(null),
                            className: "absolute inset-0 bg-background/90 backdrop-blur-md"
                        }, void 0, false, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.95,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                scale: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                scale: 0.95,
                                y: 30
                            },
                            className: "relative w-full max-w-3xl bg-[#111] border border-accent/30 rounded-2xl p-6 md:p-10 shadow-[0_0_50px_rgba(42,182,115,0.15)] overflow-y-auto max-h-[90vh] z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedProject(null),
                                    className: "absolute top-6 right-6 p-2 rounded-full hover:bg-surface text-foreground/70 transition-colors bg-black/50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-3xl font-bold font-mono text-white tracking-tight mb-4 pr-10",
                                    children: selectedProject.title
                                }, void 0, false, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "prose prose-invert max-w-none text-foreground/80 leading-relaxed space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base md:text-lg",
                                            children: selectedProject.description
                                        }, void 0, false, {
                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, this),
                                        selectedProject.description.includes('MongoDB') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 p-6 bg-black/50 rounded-xl border border-accent/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-semibold text-accent font-mono mb-4 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-2 h-2 rounded-full bg-accent animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 24
                                                        }, this),
                                                        " Technical Execution"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "list-disc list-inside text-sm space-y-2 text-foreground/80 marker:text-accent",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "Cross-platform topology migration (Windows to Linux)."
                                                        }, void 0, false, {
                                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "Ensuring replica sets sync state reliably."
                                                        }, void 0, false, {
                                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "Datafile consistency validation with zero-data-loss SLAs."
                                                        }, void 0, false, {
                                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                                                            lineNumber: 151,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                                            lineNumber: 144,
                                            columnNumber: 19
                                        }, this),
                                        selectedProject.description.includes('MySQL') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 p-6 bg-black/50 rounded-xl border border-accent/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-semibold text-accent font-mono mb-4 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-2 h-2 rounded-full bg-accent animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 24
                                                        }, this),
                                                        " Technical Execution"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "list-disc list-inside text-sm space-y-2 text-foreground/80 marker:text-accent",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "Automated Version upgrade testing (5.x to 8.x)."
                                                        }, void 0, false, {
                                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "Query profiling via Performance Schema and index adjustments."
                                                        }, void 0, false, {
                                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "GTID-based replication configurations and ProxySQL routing."
                                                        }, void 0, false, {
                                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                                            lineNumber: 156,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                    lineNumber: 114,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Projects.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
}),
"[project]/rohithpeyarusahib.github.io/app/components/Skills.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/app/config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/app/components/ui/AnimatedSection.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const Skills = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "skills",
        className: "py-24 px-4 max-w-6xl mx-auto border-t border-white/10 mt-20 font-mono relative z-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold mb-2 uppercase tracking-tighter mix-blend-difference",
                            children: [
                                "System ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30",
                                    children: "Protocols"
                                }, void 0, false, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Skills.tsx",
                                    lineNumber: 12,
                                    columnNumber: 20
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Skills.tsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white/40 text-[10px] tracking-[0.3em] uppercase border border-white/20 px-2 py-1 bg-white/5 inline-block mt-4",
                            children: "Cluster_Health_Indexing"
                        }, void 0, false, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Skills.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Skills.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Skills.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        direction: "left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-[10px] text-white/50 uppercase tracking-[0.4em] mb-8 border-b border-white/10 pb-2 flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Primary_Nodes"
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Skills.tsx",
                                        lineNumber: 22,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Skills.tsx",
                                        lineNumber: 23,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Skills.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["skillProficiency"]).map(([skill, level], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group cursor-default relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between mb-2 text-xs uppercase tracking-widest text-white/80 group-hover:text-white transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-1.5 h-1.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-pulse"
                                                            }, void 0, false, {
                                                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Skills.tsx",
                                                                lineNumber: 29,
                                                                columnNumber: 61
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " ",
                                                            skill,
                                                            "_CLUSTER"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Skills.tsx",
                                                        lineNumber: 29,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold",
                                                        children: [
                                                            "H_IDX: 0.",
                                                            level
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Skills.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Skills.tsx",
                                                lineNumber: 28,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full bg-transparent border-[0.5px] border-white/20 h-1.5 overflow-hidden flex shadow-[inset_0_0_5px_rgba(255,255,255,0.05)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white h-1.5 transition-colors duration-500 shadow-[0_0_10px_rgba(255,255,255,0.8)]",
                                                        style: {
                                                            width: `${level}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Skills.tsx",
                                                        lineNumber: 33,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white/10 flex-1 h-1.5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px)] bg-[size:10px_100%] opacity-20"
                                                    }, void 0, false, {
                                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Skills.tsx",
                                                        lineNumber: 34,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Skills.tsx",
                                                lineNumber: 32,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Skills.tsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Skills.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Skills.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        direction: "right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-[10px] text-white/50 uppercase tracking-[0.4em] mb-8 border-b border-white/10 pb-2",
                                children: "Secondary_Compute_Stack"
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Skills.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-8",
                                children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["skills"]).map(([category, items], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-[10px] uppercase tracking-widest text-white/40 mb-3 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white",
                                                        children: ">_"
                                                    }, void 0, false, {
                                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Skills.tsx",
                                                        lineNumber: 50,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " ",
                                                    category.replace(/([A-Z])/g, ' $1').trim()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Skills.tsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: items.map((item, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-3 py-1.5 bg-transparent border border-[0.5px] border-white/20 text-white/80 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors",
                                                        children: item
                                                    }, j, false, {
                                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Skills.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Skills.tsx",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Skills.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Skills.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Skills.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Skills.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Skills.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Skills;
}),
"[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
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
const ScrambleText = ({ text, active })=>{
    const [displayText, setDisplayText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(text);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!active) {
            setDisplayText(text);
            return;
        }
        let iterations = 0;
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
        const interval = setInterval(()=>{
            setDisplayText(text.split("").map((char, index)=>{
                if (index < iterations) return char;
                return chars[Math.floor(Math.random() * chars.length)];
            }).join(""));
            if (iterations >= text.length) clearInterval(interval);
            iterations += 1 / 3;
        }, 30);
        return ()=>clearInterval(interval);
    }, [
        text,
        active
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        children: displayText
    }, void 0, false, {
        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
        lineNumber: 34,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const Certifications = ()=>{
    const [activeCert, setActiveCert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isVerifying, setIsVerifying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSelect = (index)=>{
        if (activeCert === index) return;
        setIsVerifying(true);
        setActiveCert(index);
        setTimeout(()=>setIsVerifying(false), 1200);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "certifications",
        className: "py-24 px-4 max-w-7xl mx-auto font-mono mt-12 relative z-10 w-full overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-20 flex flex-col items-start border-b border-white/10 pb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-none mix-blend-difference mb-4",
                        children: [
                            "Cryptographic ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                lineNumber: 52,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-white/20 tracking-widest italic",
                                children: "[Validations]"
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white/40 text-[10px] tracking-[0.3em] uppercase border border-white/20 px-2 py-1 bg-white/5 inline-block",
                        children: "Secure_Ledger_Active"
                    }, void 0, false, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row gap-8 min-h-[400px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full lg:w-1/3 flex flex-col relative border-l border-dashed border-white/20 pl-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-[-1px] w-[2px] h-full bg-gradient-to-b from-[#00ffff] via-transparent to-transparent opacity-50"
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["certifications"].map((cert, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative mb-6 cursor-pointer group",
                                    onClick: ()=>handleSelect(index),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute top-3 -left-[29px] w-3 h-3 border  transition-all duration-300 ${activeCert === index ? 'bg-[#00ffff] border-[#00ffff] shadow-[0_0_10px_#00ffff]' : 'bg-black border-white/40 group-hover:border-white'}`
                                        }, void 0, false, {
                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `border p-4 transition-all duration-500 rounded-none ${activeCert === index ? 'border-[#00ffff] bg-[#00ffff]/10' : 'border-white/10 hover:border-white/40 hover:bg-white/5'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[9px] text-white/40 uppercase tracking-widest mb-2 flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Block_",
                                                                index.toString().padStart(3, '0')
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                                            lineNumber: 77,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        activeCert === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#00ffff] animate-pulse",
                                                            children: "Target Locked"
                                                        }, void 0, false, {
                                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 44
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: `text-xs uppercase tracking-widest font-bold ${activeCert === index ? 'text-white' : 'text-white/60'}`,
                                                    children: activeCert === index ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrambleText, {
                                                        text: cert,
                                                        active: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 43
                                                    }, ("TURBOPACK compile-time value", void 0)) : cert.length > 20 ? cert.substring(0, 20) + '...' : cert
                                                }, void 0, false, {
                                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, index, true, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full lg:w-2/3 bg-black border border-white/20 relative shadow-[0_0_30px_rgba(0,255,255,0.05)] flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-white/10 p-3 bg-[#050505] flex justify-between items-center text-[10px] text-white/50 uppercase tracking-widest",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Terminal // Hash_Validator"
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            "Status: ",
                                            isVerifying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#ff4400] animate-pulse",
                                                children: "Running Math..."
                                            }, void 0, false, {
                                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                                lineNumber: 93,
                                                columnNumber: 38
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#00ffff]",
                                                children: "Idle / Validated"
                                            }, void 0, false, {
                                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                                lineNumber: 93,
                                                columnNumber: 110
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 flex-1 relative overflow-hidden flex items-center justify-center min-h-[300px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:2vw_2vw]"
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        mode: "wait",
                                        children: activeCert === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            exit: {
                                                opacity: 0
                                            },
                                            className: "text-white/20 text-xs tracking-[0.3em] uppercase text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-16 h-16 border border-white/10 rounded-full mx-auto mb-4 flex items-center justify-center animate-[spin_4s_linear_infinite]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 border border-white/10 rounded-full animate-[spin_2s_reverse_linear_infinite]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Select a Block to decrypt hash payload."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                scale: 0.95,
                                                filter: "blur(4px)"
                                            },
                                            animate: {
                                                opacity: 1,
                                                scale: 1,
                                                filter: "blur(0px)"
                                            },
                                            exit: {
                                                opacity: 0,
                                                scale: 1.05,
                                                filter: "blur(4px)"
                                            },
                                            className: "w-full",
                                            children: isVerifying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full space-y-4 font-mono text-[10px] text-[#00ffff]/80 uppercase tracking-widest",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "> Injecting SHA-256 decryption matrices..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            "> Interrogating blockchain vectors [0x",
                                                            Math.random().toString(16).substring(2, 10),
                                                            "]..."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full h-[2px] bg-white/10",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            className: "h-full bg-[#00ffff]",
                                                            initial: {
                                                                width: "0%"
                                                            },
                                                            animate: {
                                                                width: "100%"
                                                            },
                                                            transition: {
                                                                duration: 1
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "animate-pulse text-[#ff4400]",
                                                        children: "> Bypassing localized security..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                                lineNumber: 119,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center relative z-10 w-full flex flex-col items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-24 h-24 mb-6 border-[0.5px] border-[#00ffff]/50 bg-[#00ffff]/5 shadow-[0_0_30px_rgba(0,255,255,0.1)] flex items-center justify-center rotate-45 relative group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute inset-0 bg-[#00ffff] opacity-0 group-hover:opacity-20 transition-opacity"
                                                            }, void 0, false, {
                                                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                                                lineNumber: 135,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[#00ffff] -rotate-45 block font-bold text-2xl tracking-widest",
                                                                children: "V"
                                                            }, void 0, false, {
                                                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                                                lineNumber: 136,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl md:text-3xl font-bold tracking-widest text-white uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["certifications"][activeCert]
                                                    }, void 0, false, {
                                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-8 flex gap-4 text-[9px] uppercase tracking-[0.2em] text-white/50 border-t border-white/20 pt-4 w-full justify-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Timestamp: ",
                                                                    new Date().toISOString().split('T')[0]
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[#00ffff]",
                                                                children: "[ Signature: Valid ]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                                                lineNumber: 143,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                                lineNumber: 133,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, activeCert, false, {
                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#00ffff]/10 to-transparent animate-[scan_3s_linear_infinite] pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Certifications.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Certifications;
}),
"[project]/rohithpeyarusahib.github.io/app/components/Education.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/app/config.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const Education = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "education",
        className: "py-24 px-4 max-w-6xl mx-auto border-t border-white/10 font-mono relative w-full overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-20 flex flex-col items-start border-b border-white/10 pb-8 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-none mix-blend-difference mb-4",
                        children: [
                            "Data Subroutine ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Education.tsx",
                                lineNumber: 11,
                                columnNumber: 27
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/20 tracking-widest italic",
                                children: "[Knowledge Base]"
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Education.tsx",
                                lineNumber: 12,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Education.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white/40 text-[10px] tracking-[0.3em] uppercase border border-white/20 px-2 py-1 bg-white/5 inline-block",
                        children: "Neural_Uplink"
                    }, void 0, false, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Education.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Education.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "w-full bg-[#030303] border border-white/20 relative group p-1 z-10",
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6
                },
                viewport: {
                    once: true
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Education.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-[0.5px] border-white/10 p-8 md:p-14 bg-black relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:2vw_2vw] pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Education.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row justify-between items-start md:items-end gap-10 relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-3 h-3 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Education.tsx",
                                                        lineNumber: 35,
                                                        columnNumber: 18
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] text-white/50 uppercase tracking-[0.3em]",
                                                        children: "Sector 01 // Initialized"
                                                    }, void 0, false, {
                                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Education.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 18
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Education.tsx",
                                                lineNumber: 34,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-3xl md:text-4xl font-bold text-white uppercase tracking-tight max-w-2xl leading-none",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["education"].degree
                                            }, void 0, false, {
                                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Education.tsx",
                                                lineNumber: 38,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/60 font-mono tracking-widest text-sm uppercase mt-2",
                                                children: [
                                                    "> ",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["education"].university
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Education.tsx",
                                                lineNumber: 41,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Education.tsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-start md:items-end gap-2 border-l md:border-l-0 md:border-r border-white/20 pl-4 md:pl-0 md:pr-4 py-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-white text-3xl font-bold font-mono",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["education"].cgpa
                                            }, void 0, false, {
                                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Education.tsx",
                                                lineNumber: 47,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-white/40 uppercase tracking-[0.3em]",
                                                children: "GPA_Metric_Computed"
                                            }, void 0, false, {
                                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Education.tsx",
                                                lineNumber: 48,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 border border-white/20 bg-white/5 px-4 py-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-white/80 font-mono tracking-widest",
                                                    children: [
                                                        "TIMEFRAME: ",
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["education"].period
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Education.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 18
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Education.tsx",
                                                lineNumber: 50,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Education.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Education.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Education.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Education.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Education.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Education;
}),
"[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/app/config.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const contactSchema = __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Name is required"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("Invalid email"),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, "Message must be at least 10 characters")
});
const Contact = ()=>{
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { register, handleSubmit, formState: { errors }, reset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zodResolver"])(contactSchema)
    });
    const onSubmit = (data)=>{
        console.log(data);
        setSubmitted(true);
        reset();
        setTimeout(()=>setSubmitted(false), 4000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "py-24 px-4 max-w-6xl mx-auto border-t border-white/10 font-mono mb-20 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/5 -z-10"
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "mb-16",
                initial: {
                    opacity: 0,
                    y: 50
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.8
                },
                viewport: {
                    once: true
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl md:text-5xl font-bold uppercase tracking-tighter mix-blend-difference mb-2",
                        children: [
                            "Encrypted ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30",
                                children: "Handshake"
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                lineNumber: 48,
                                columnNumber: 119
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white/40 text-[10px] tracking-[0.3em] uppercase border border-white/20 px-2 py-1 bg-white/5 inline-block",
                        children: "Secure_Ping_Request"
                    }, void 0, false, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-12 lg:gap-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: -50
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        viewport: {
                            once: true
                        },
                        className: "flex flex-col justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-[10px] text-white/50 uppercase tracking-[0.4em] mb-8 border-b border-white/10 pb-2",
                                        children: "Direct_Node_Access"
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] uppercase tracking-widest text-white/30",
                                                        children: "Email_Protocol"
                                                    }, void 0, false, {
                                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold text-white tracking-wider",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personalInfo"].email
                                                    }, void 0, false, {
                                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                                lineNumber: 63,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] uppercase tracking-widest text-white/30",
                                                        children: "Voice_Protocol"
                                                    }, void 0, false, {
                                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold text-white tracking-wider",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personalInfo"].phone
                                                    }, void 0, false, {
                                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                                lineNumber: 67,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] uppercase tracking-widest text-white/30",
                                                        children: "Link_Protocol"
                                                    }, void 0, false, {
                                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `https://${__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personalInfo"].linkedin}`,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "text-sm font-bold text-white tracking-wider hover:text-white/50 transition-colors uppercase",
                                                        children: "Sys.Profile.LinkedIn"
                                                    }, void 0, false, {
                                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                                lineNumber: 71,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-12 md:mt-0 p-4 border border-white/10 bg-white/5 text-[10px] text-white/40 uppercase tracking-widest leading-relaxed",
                                children: "> Notice: All transmissions are end-to-end encrypted. Standard reply latency: 24_HOURS."
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].form, {
                        onSubmit: handleSubmit(onSubmit),
                        className: "bg-black border-[0.5px] border-white/20 p-6 md:p-8 flex flex-col gap-6 shadow-[0_0_30px_rgba(255,255,255,0.02)] relative",
                        initial: {
                            opacity: 0,
                            x: 50
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        viewport: {
                            once: true
                        },
                        children: [
                            submitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                className: "absolute inset-0 bg-black/90 backdrop-blur-md z-10 flex flex-col items-center justify-center border border-white/30",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 border-y-2 border-white rounded-full animate-spin mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white text-xs uppercase tracking-widest font-mono",
                                        children: "Transmission Sent."
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 bg-white animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] uppercase tracking-widest text-white/50",
                                        children: "Compose Payload"
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ...register("name"),
                                        type: "text",
                                        placeholder: "Ident_String (Name)",
                                        className: "w-full p-4 bg-transparent border-b border-white/20 focus:border-white focus:outline-none text-xs text-white placeholder:text-white/20 tracking-widest uppercase transition-colors"
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 mt-2 text-[10px] uppercase tracking-widest",
                                        children: errors.name.message
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                        lineNumber: 116,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ...register("email"),
                                        type: "email",
                                        placeholder: "Return_Vector (Email)",
                                        className: "w-full p-4 bg-transparent border-b border-white/20 focus:border-white focus:outline-none text-xs text-white placeholder:text-white/20 tracking-widest uppercase transition-colors"
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 mt-2 text-[10px] uppercase tracking-widest",
                                        children: errors.email.message
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                        lineNumber: 125,
                                        columnNumber: 30
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        ...register("message"),
                                        placeholder: "Enter Data Payload...",
                                        rows: 4,
                                        className: "w-full p-4 bg-transparent border-b border-white/20 focus:border-white focus:outline-none text-xs text-white placeholder:text-white/20 tracking-widest uppercase transition-colors resize-none"
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    errors.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 mt-2 text-[10px] uppercase tracking-widest",
                                        children: errors.message.message
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                        lineNumber: 134,
                                        columnNumber: 32
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "w-full py-4 mt-4 bg-white text-black text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#222] hover:text-white hover:border-white border border-transparent transition-all",
                                children: "Transmit Data"
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Contact.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Contact;
}),
"[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/ban-ts-comment */ // @ts-nocheck
__turbopack_context__.s([
    "default",
    ()=>SystemDiagram
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$aba3c3d1$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/@react-three/fiber/dist/events-aba3c3d1.esm.js [app-ssr] (ecmascript) <export C as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/@react-three/drei/core/OrbitControls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/@react-three/drei/web/Html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/@react-three/drei/core/Float.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Edges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/@react-three/drei/core/Edges.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Trail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/@react-three/drei/core/Trail.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
// Data Packets (Particles) system
function FlowParticles({ source, target, color, active }) {
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$aba3c3d1$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"])((_, delta)=>{
        if (!active) {
            if (meshRef.current) meshRef.current.visible = false;
            return;
        }
        if (meshRef.current) {
            meshRef.current.visible = true;
            setProgress((p)=>p >= 1 ? 0 : p + delta * 1.5);
            meshRef.current.position.lerpVectors(source, target, progress);
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Trail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trail"], {
        width: 1.5,
        length: 4,
        color: new __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](color),
        attenuation: (t)=>t * t,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
            ref: meshRef,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                    args: [
                        0.08
                    ]
                }, void 0, false, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                    color: color
                }, void 0, false, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
const NodeLabel = ({ text, subtext })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Html"], {
        position: [
            0,
            -1.8,
            0
        ],
        center: true,
        zIndexRange: [
            100,
            0
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-black/90 border border-white/20 px-3 py-2 text-center shadow-[0_0_15px_rgba(0,0,0,0.8)] backdrop-blur-md min-w-[120px] select-none pointer-events-none group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white text-[9px] font-bold tracking-widest uppercase font-mono",
                    children: text
                }, void 0, false, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                    lineNumber: 42,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white/40 text-[7px] tracking-widest mt-1 uppercase font-mono",
                    children: subtext
                }, void 0, false, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                    lineNumber: 43,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
            lineNumber: 41,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
        lineNumber: 40,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const SciFiNode = ({ position, color, text, subtext, active, shape = "octahedron" })=>{
    const coreRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ringRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$aba3c3d1$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"])((_, delta)=>{
        if (coreRef.current) {
            coreRef.current.rotation.y += delta * (active ? 2 : 0.5);
            coreRef.current.rotation.x += delta * (active ? 1 : 0.2);
        }
        if (ringRef.current) {
            ringRef.current.rotation.z -= delta * (active ? 1 : 0.2);
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: position,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: coreRef,
                children: [
                    shape === "octahedron" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("octahedronGeometry", {
                        args: [
                            0.6,
                            0
                        ]
                    }, void 0, false, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : shape === "cylinder" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.5,
                            0.5,
                            1,
                            16
                        ]
                    }, void 0, false, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.8,
                            0.8,
                            0.8
                        ]
                    }, void 0, false, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: color,
                        emissive: color,
                        emissiveIntensity: active ? 2 : 0.5,
                        wireframe: shape !== "cylinder",
                        transparent: true,
                        opacity: 0.8
                    }, void 0, false, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Edges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Edges"], {
                        color: "#ffffff",
                        opacity: 0.2,
                        transparent: true
                    }, void 0, false, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: ringRef,
                "rotation-x": Math.PI / 2,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("torusGeometry", {
                        args: [
                            1.2,
                            0.02,
                            16,
                            100
                        ]
                    }, void 0, false, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: color,
                        transparent: true,
                        opacity: active ? 0.8 : 0.2
                    }, void 0, false, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                "rotation-x": Math.PI / 2,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ringGeometry", {
                        args: [
                            1.4,
                            1.42,
                            64
                        ]
                    }, void 0, false, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                        lineNumber: 88,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#ffffff",
                        transparent: true,
                        opacity: 0.1,
                        side: __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"]
                    }, void 0, false, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                        lineNumber: 89,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NodeLabel, {
                text: text,
                subtext: subtext
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
function ArchitectureScene({ flowState }) {
    // Master Expanded Node Positions
    const posUser = new __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 6, 0);
    const posLB = new __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 3, 0);
    const posApp1 = new __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](-4, 0, 0);
    const posApp2 = new __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](4, 0, 0);
    const posRedis = new __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](6, -3, 0);
    const posDbMaster = new __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](-5, -6, 0);
    const posDbRep1 = new __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, -6, -2);
    const posDbRep2 = new __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](5, -6, -2);
    const posS3 = new __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](-8, -8, -4);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: [
            0,
            0.5,
            0
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {
                        attach: "geometry",
                        ...new __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferGeometry"]().setFromPoints(Array.from({
                            length: 1000
                        }, ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]((Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30, (Math.random() - 0.5) * 15 - 5)))
                    }, void 0, false, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pointsMaterial", {
                        attach: "material",
                        color: "#ffffff",
                        size: 0.05,
                        transparent: true,
                        opacity: 0.1
                    }, void 0, false, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Float"], {
                speed: 2,
                floatIntensity: 0.5,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SciFiNode, {
                    position: posUser,
                    color: "#ffffff",
                    text: "Client Node",
                    subtext: "Secure Requests",
                    active: flowState !== "IDLE",
                    shape: "octahedron"
                }, void 0, false, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SciFiNode, {
                position: posLB,
                color: "#aaaaaa",
                text: "HAProxy LB",
                subtext: "Traffic Routing",
                active: flowState !== "IDLE",
                shape: "box"
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SciFiNode, {
                position: posApp1,
                color: "#aaaaff",
                text: "App Core 01",
                subtext: "Kubernetes Pod",
                active: flowState !== "IDLE",
                shape: "box"
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SciFiNode, {
                position: posApp2,
                color: "#aaaaff",
                text: "App Core 02",
                subtext: "Kubernetes Pod",
                active: flowState !== "IDLE",
                shape: "box"
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SciFiNode, {
                position: posRedis,
                color: "#bb00ff",
                text: "Redis Cluster",
                subtext: "In-Memory Cache",
                active: flowState === "READ",
                shape: "octahedron"
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SciFiNode, {
                position: posDbMaster,
                color: flowState === "WRITE" ? "#ff4400" : flowState === "FAILOVER" ? "#ff0000" : "#ff8800",
                text: "Primary DB",
                subtext: "MySQL Write Protocol",
                active: flowState === "WRITE" || flowState === "FAILOVER",
                shape: "cylinder"
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SciFiNode, {
                position: posDbRep1,
                color: flowState === "FAILOVER" ? "#ff3333" : "#00ffff",
                text: "Replica 01",
                subtext: "Async Read Node",
                active: flowState === "READ" || flowState === "FAILOVER",
                shape: "cylinder"
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SciFiNode, {
                position: posDbRep2,
                color: "#00ffff",
                text: "Replica 02",
                subtext: "Async Read Node",
                active: flowState === "READ",
                shape: "cylinder"
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SciFiNode, {
                position: posS3,
                color: "#44aa44",
                text: "Cloud Storage",
                subtext: "S3 Cold Backup",
                active: flowState === "WRITE" || flowState === "IDLE",
                shape: "box"
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            [
                [
                    posUser,
                    posLB
                ],
                [
                    posLB,
                    posApp1
                ],
                [
                    posLB,
                    posApp2
                ]
            ].map((pts, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {
                            attach: "geometry",
                            ...new __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferGeometry"]().setFromPoints(pts)
                        }, void 0, false, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                            lineNumber: 139,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineBasicMaterial", {
                            attach: "material",
                            color: "#ffffff",
                            opacity: 0.15,
                            transparent: true
                        }, void 0, false, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                            lineNumber: 140,
                            columnNumber: 12
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)),
            [
                posApp1,
                posApp2
            ].map((app, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowParticles, {
                            source: posUser,
                            target: posLB,
                            color: "#ffffff",
                            active: flowState !== "IDLE"
                        }, void 0, false, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                            lineNumber: 147,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowParticles, {
                            source: posLB,
                            target: app,
                            color: "#ffffff",
                            active: flowState !== "IDLE"
                        }, void 0, false, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                            lineNumber: 148,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowParticles, {
                            source: app,
                            target: posDbMaster,
                            color: "#ff4400",
                            active: flowState === "WRITE"
                        }, void 0, false, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                            lineNumber: 151,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowParticles, {
                            source: app,
                            target: posDbRep1,
                            color: "#00ffff",
                            active: flowState === "READ"
                        }, void 0, false, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                            lineNumber: 152,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowParticles, {
                            source: app,
                            target: posDbRep2,
                            color: "#00ffff",
                            active: flowState === "READ"
                        }, void 0, false, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                            lineNumber: 153,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowParticles, {
                            source: app,
                            target: posRedis,
                            color: "#bb00ff",
                            active: flowState === "READ"
                        }, void 0, false, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                    lineNumber: 146,
                    columnNumber: 10
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowParticles, {
                source: posDbMaster,
                target: posS3,
                color: "#44aa44",
                active: flowState === "WRITE"
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowParticles, {
                source: posDbMaster,
                target: posDbRep1,
                color: "#ffffff",
                active: flowState === "WRITE"
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowParticles, {
                source: posDbMaster,
                target: posDbRep2,
                color: "#ffffff",
                active: flowState === "WRITE"
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
function SystemDiagram() {
    const [flowState, setFlowState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("IDLE");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "architecture",
        className: "py-24 px-4 max-w-7xl mx-auto border-t border-white/10 font-mono relative z-10 w-full overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-12 flex flex-col md:flex-row justify-between items-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase mix-blend-difference",
                        children: [
                            "Active ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                                lineNumber: 172,
                                columnNumber: 18
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-white/30 tracking-widest italic",
                                children: "[Topology_Render]"
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-4 mt-8 md:mt-0 z-20 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setFlowState("WRITE"),
                                className: `px-4 py-2 border text-xs tracking-widest uppercase transition-all ${flowState === "WRITE" ? "bg-[#ff4400]/20 border-[#ff4400] text-[#ff4400] shadow-[0_0_15px_rgba(255,68,0,0.5)]" : "border-white/20 text-white/50 hover:border-white/50"}`,
                                children: ">_ Write Flow"
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setFlowState("READ"),
                                className: `px-4 py-2 border text-xs tracking-widest uppercase transition-all ${flowState === "READ" ? "bg-[#00ffff]/20 border-[#00ffff] text-[#00ffff] shadow-[0_0_15px_rgba(0,255,255,0.5)]" : "border-white/20 text-white/50 hover:border-white/50"}`,
                                children: ">_ Read Flow"
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setFlowState("FAILOVER"),
                                className: `px-4 py-2 border text-xs tracking-widest uppercase transition-all ${flowState === "FAILOVER" ? "bg-[#ff0000]/20 border-[#ff0000] text-[#ff0000] shadow-[0_0_15px_rgba(255,0,0,0.5)] animate-pulse" : "border-white/20 text-white/50 hover:border-white/50"}`,
                                children: "[X] Failover"
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setFlowState("IDLE"),
                                className: "px-4 py-2 border border-white/20 text-white/50 text-xs tracking-widest uppercase hover:text-white",
                                children: "Reset"
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-[600px] bg-black border border-white/20 relative rounded-none shadow-[0_0_30px_rgba(255,255,255,0.02)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3vw_3vw] pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                        camera: {
                            position: [
                                0,
                                4,
                                18
                            ],
                            fov: 60
                        },
                        dpr: [
                            1,
                            2
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                                intensity: 0.2
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                                position: [
                                    0,
                                    10,
                                    5
                                ],
                                intensity: 0.5
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ArchitectureScene, {
                                flowState: flowState
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrbitControls"], {
                                enableZoom: false,
                                maxPolarAngle: Math.PI / 1.5,
                                minPolarAngle: Math.PI / 4,
                                enablePan: false
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 left-4 flex flex-col gap-2 pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-[8px] uppercase tracking-widest text-white/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-full bg-[#ff4400] shadow-[0_0_5px_#ff4400]"
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                                        lineNumber: 221,
                                        columnNumber: 14
                                    }, this),
                                    " Primary Write"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-[8px] uppercase tracking-widest text-white/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-full bg-[#00ffff] shadow-[0_0_5px_#00ffff]"
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                                        lineNumber: 224,
                                        columnNumber: 14
                                    }, this),
                                    " Async Read"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-[8px] uppercase tracking-widest text-white/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-full bg-[#bb00ff] shadow-[0_0_5px_#bb00ff]"
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                                        lineNumber: 227,
                                        columnNumber: 14
                                    }, this),
                                    " In-Memory Cache"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
}),
"[project]/rohithpeyarusahib.github.io/app/components/Architecture.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Architecture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$components$2f$ui$2f$FadeIn$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/app/components/ui/FadeIn.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$components$2f$SystemDiagram$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/app/components/SystemDiagram.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/lucide-react/dist/esm/icons/server.js [app-ssr] (ecmascript) <export default as Server>");
"use client";
;
;
;
;
function Architecture() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-24 bg-background relative overflow-hidden border-y border-border/50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/5 blur-[150px] rounded-[100%] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Architecture.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-4 relative z-10 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$components$2f$ui$2f$FadeIn$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        direction: "down",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-16 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg",
                                    children: [
                                        "System ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-accent underline decoration-accent/30 decoration-4 underline-offset-8",
                                            children: "Architecture"
                                        }, void 0, false, {
                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Architecture.tsx",
                                            lineNumber: 16,
                                            columnNumber: 22
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Architecture.tsx",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-foreground/70 max-w-2xl mx-auto text-lg pt-4",
                                    children: "Designing highly scalable, fault-tolerant infrastructure tailored for massive throughput and zero-downtime."
                                }, void 0, false, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Architecture.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Architecture.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Architecture.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$components$2f$ui$2f$FadeIn$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        delay: 0.2,
                        className: "relative z-20 flex justify-center w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$components$2f$SystemDiagram$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Architecture.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Architecture.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$components$2f$ui$2f$FadeIn$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "mt-20 flex justify-center gap-8 text-sm font-mono text-accent/80 flex-wrap pb-10",
                        delay: 0.4,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-border hover:border-accent/50 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Architecture.tsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, this),
                                    " Disaster Recovery"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Architecture.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-border hover:border-accent/50 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Architecture.tsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this),
                                    " Active Monitoring"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Architecture.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-border hover:border-accent/50 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Architecture.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this),
                                    " Automated Failover"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Architecture.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Architecture.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Architecture.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Architecture.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/rohithpeyarusahib.github.io/app/components/ui/AnimatedCounter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedCounter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function AnimatedCounter({ value, suffix = "", prefix = "" }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const motionValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const springValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(motionValue, {
        stiffness: 50,
        damping: 20
    });
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-100px"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isInView) {
            motionValue.set(value);
        }
    }, [
        isInView,
        value,
        motionValue
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return springValue.on("change", (latest)=>{
            if (ref.current) {
                ref.current.textContent = `${prefix}${Intl.NumberFormat('en-US', {
                    maximumFractionDigits: 0
                }).format(latest)}${suffix}`;
            }
        });
    }, [
        springValue,
        prefix,
        suffix
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        children: [
            prefix,
            "0",
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/rohithpeyarusahib.github.io/app/components/ui/AnimatedCounter.tsx",
        lineNumber: 26,
        columnNumber: 10
    }, this);
}
}),
"[project]/rohithpeyarusahib.github.io/app/components/Metrics.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Metrics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$components$2f$ui$2f$FadeIn$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/app/components/ui/FadeIn.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$components$2f$ui$2f$AnimatedCounter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/app/components/ui/AnimatedCounter.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function Metrics() {
    const metrics = [
        {
            label: "Sys.Node.Active",
            value: 500,
            suffix: "+"
        },
        {
            label: "Uptime Guaranteed",
            value: 99,
            suffix: ".99%"
        },
        {
            label: "Query Speed Optimized",
            value: 60,
            suffix: "%"
        },
        {
            label: "Terabytes Migrated",
            value: 50,
            suffix: "TB+"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-24 bg-black border-y border-white/10 relative overflow-hidden flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4vw_4vw]"
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Metrics.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 relative z-10 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$components$2f$ui$2f$FadeIn$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 mb-10 text-[10px] font-mono text-white/40 uppercase tracking-[0.3em]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-8 h-[1px] bg-white/40"
                                }, void 0, false, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Metrics.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                "Active Telemetry Readout",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex-1 border-b border-dashed border-white/10"
                                }, void 0, false, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Metrics.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Metrics.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-4 gap-0 border border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-[#020202]",
                            children: metrics.map((metric, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-start p-8 group hover:bg-white/5 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] text-white/50 font-mono uppercase tracking-[0.2em] mb-6 flex justify-between w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: metric.label
                                                }, void 0, false, {
                                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Metrics.tsx",
                                                    lineNumber: 32,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "opacity-0 group-hover:opacity-100 transition-opacity animate-pulse text-white",
                                                    children: ">_"
                                                }, void 0, false, {
                                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Metrics.tsx",
                                                    lineNumber: 33,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Metrics.tsx",
                                            lineNumber: 31,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-5xl lg:text-6xl font-bold text-white tracking-tighter",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$components$2f$ui$2f$AnimatedCounter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                value: metric.value,
                                                suffix: metric.suffix
                                            }, void 0, false, {
                                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Metrics.tsx",
                                                lineNumber: 36,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Metrics.tsx",
                                            lineNumber: 35,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Metrics.tsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Metrics.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Metrics.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Metrics.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Metrics.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/rohithpeyarusahib.github.io/app/components/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$components$2f$ui$2f$FadeIn$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/app/components/ui/FadeIn.tsx [app-ssr] (ecmascript)");
;
"use client";
;
;
;
;
const HeroCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        className: "relative h-[100svh] flex items-center justify-center overflow-hidden bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 opacity-80 mix-blend-screen hidden lg:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroCanvas, {}, void 0, false, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Hero.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Hero.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 -z-10 lg:hidden bg-black"
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Hero.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between h-full pointer-events-none pb-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full md:w-1/2 flex flex-col items-start text-left pt-20 md:pt-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$components$2f$ui$2f$FadeIn$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                delay: 0,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-[2px] bg-white/50"
                                            }, void 0, false, {
                                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Hero.tsx",
                                                lineNumber: 25,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white/40 font-mono tracking-[0.4em] uppercase text-xs",
                                                children: "Sys.Root_Access"
                                            }, void 0, false, {
                                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Hero.tsx",
                                                lineNumber: 26,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Hero.tsx",
                                        lineNumber: 24,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.9] font-black tracking-tighter mb-4 text-white uppercase",
                                        children: [
                                            "Rohith ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Hero.tsx",
                                                lineNumber: 29,
                                                columnNumber: 22
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/30 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] block mt-2",
                                                children: "Database Engineer"
                                            }, void 0, false, {
                                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Hero.tsx",
                                                lineNumber: 30,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Hero.tsx",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Hero.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$components$2f$ui$2f$FadeIn$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                delay: 0.2,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs md:text-sm text-white/60 max-w-md font-mono tracking-[0.2em] uppercase mt-8 border-l border-white/20 pl-4 py-1",
                                    children: "Master Data Architect & Ops Engineer. Designing High-Concurrency Architecture."
                                }, void 0, false, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Hero.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Hero.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$app$2f$components$2f$ui$2f$FadeIn$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                delay: 0.4,
                                className: "mt-12 pointer-events-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#projects",
                                            className: "group relative px-8 py-4 bg-white text-black font-semibold rounded-none overflow-hidden transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.1)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "relative z-10 uppercase tracking-widest text-xs font-mono group-hover:text-white transition-colors",
                                                    children: "View Topology"
                                                }, void 0, false, {
                                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Hero.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-[#111] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Hero.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Hero.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#contact",
                                            className: "group px-8 py-4 border border-white/20 text-white font-semibold rounded-none hover:bg-white/5 transition-all uppercase tracking-widest text-xs backdrop-blur-sm font-mono flex items-center justify-center",
                                            children: "Initialize Auth"
                                        }, void 0, false, {
                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Hero.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Hero.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Hero.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Hero.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:block w-1/2 h-full"
                    }, void 0, false, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Hero.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Hero.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none opacity-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] tracking-[0.5em] uppercase mb-4 text-white",
                        children: "Scroll"
                    }, void 0, false, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Hero.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "w-[1px] h-16 bg-gradient-to-b from-white to-transparent",
                        animate: {
                            opacity: [
                                0.2,
                                1,
                                0.2
                            ]
                        },
                        transition: {
                            repeat: Infinity,
                            duration: 2
                        }
                    }, void 0, false, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Hero.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Hero.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Hero.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/rohithpeyarusahib.github.io/app/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Navbar = ()=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const navItems = [
        {
            name: "About",
            href: "#about"
        },
        {
            name: "Experience",
            href: "#experience"
        },
        {
            name: "Topology",
            href: "#architecture"
        },
        {
            name: "Capabilities",
            href: "#services"
        },
        {
            name: "Protocols",
            href: "#skills"
        },
        {
            name: "Hashes",
            href: "#certifications"
        },
        {
            name: "Ping",
            href: "#contact"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 w-full bg-black border-b border-white/10 z-50 font-mono select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#hero",
                                className: "text-xl font-bold flex items-center gap-2 text-white hover:text-white/80 transition-opacity",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 bg-white animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Navbar.tsx",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "SYS.ADM_",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/40",
                                        children: "RP"
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Navbar.tsx",
                                        lineNumber: 27,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Navbar.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Navbar.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:block",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-10 flex items-baseline space-x-6",
                                children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: item.href,
                                        className: "text-white/50 hover:text-white uppercase tracking-[0.2em] text-[10px] py-2 transition-colors relative group",
                                        children: [
                                            item.name,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Navbar.tsx",
                                                lineNumber: 41,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, item.name, true, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Navbar.tsx",
                                        lineNumber: 35,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Navbar.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Navbar.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(!isOpen),
                                className: "p-2 text-white/70 hover:text-white transition-colors",
                                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Navbar.tsx",
                                    lineNumber: 53,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Navbar.tsx",
                                    lineNumber: 53,
                                    columnNumber: 43
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Navbar.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Navbar.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Navbar.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Navbar.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: "100vh"
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    className: "md:hidden bg-black border-t border-white/10 w-full overflow-hidden absolute top-16 left-0 flex flex-col",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-8 space-y-4 flex-1 flex flex-col items-center justify-center relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:5vw_5vw] pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Navbar.tsx",
                                lineNumber: 69,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            navItems.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: item.href,
                                    onClick: ()=>setIsOpen(false),
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: i * 0.05
                                    },
                                    className: "text-white/60 hover:text-white block px-3 py-4 text-xl font-bold uppercase tracking-widest transition-colors w-full text-center border-b border-white/5 last:border-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/20 text-xs mr-4 font-mono select-none",
                                            children: [
                                                "0",
                                                i + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/Navbar.tsx",
                                            lineNumber: 80,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        item.name
                                    ]
                                }, item.name, true, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Navbar.tsx",
                                    lineNumber: 71,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Navbar.tsx",
                        lineNumber: 68,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/Navbar.tsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/Navbar.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/rohithpeyarusahib.github.io/app/components/Navbar.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Navbar;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__233054c6._.js.map