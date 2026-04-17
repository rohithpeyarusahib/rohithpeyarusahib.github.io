(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/ban-ts-comment */ // @ts-nocheck
__turbopack_context__.s([
    "default",
    ()=>HeroCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$aba3c3d1$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/@react-three/fiber/dist/events-aba3c3d1.esm.js [app-client] (ecmascript) <export C as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$aba3c3d1$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__A__as__useThree$3e$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/@react-three/fiber/dist/events-aba3c3d1.esm.js [app-client] (ecmascript) <export A as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/@react-three/drei/core/Float.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Edges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/@react-three/drei/core/Edges.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function DataAvatar() {
    _s();
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const innerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const ringRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const { mouse, viewport } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$aba3c3d1$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__A__as__useThree$3e$__["useThree"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$aba3c3d1$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"])({
        "DataAvatar.useFrame": (state, delta)=>{
            // Smooth dynamic tracking based on viewport width
            if (groupRef.current) {
                const responsivenessOffsetX = viewport.width > 8 ? 3.5 : 0;
                const targetX = responsivenessOffsetX + mouse.x * 1.5;
                const targetY = mouse.y * 1.5;
                groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05;
                groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.05;
                groupRef.current.rotation.y = __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(groupRef.current.rotation.y, mouse.x * Math.PI * 0.2, 0.05);
                groupRef.current.rotation.x = __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(groupRef.current.rotation.x, -mouse.y * Math.PI * 0.2, 0.05);
            }
            if (innerRef.current) {
                innerRef.current.rotation.y -= delta * 0.4;
                innerRef.current.rotation.x += delta * 0.2;
            }
            if (ringRef.current) {
                ringRef.current.rotation.x += delta * 0.3;
                ringRef.current.rotation.y += delta * 0.15;
            }
        }
    }["DataAvatar.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef,
        position: [
            3.5,
            0,
            0
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float"], {
            speed: 2,
            rotationIntensity: 0.5,
            floatIntensity: 1.5,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    ref: innerRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("icosahedronGeometry", {
                                    args: [
                                        1.2,
                                        2
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                                    lineNumber: 50,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                    color: "#000000",
                                    emissive: "#ffffff",
                                    emissiveIntensity: 0.05,
                                    roughness: 0.1,
                                    metalness: 1
                                }, void 0, false, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                                    lineNumber: 51,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Edges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Edges"], {
                                    color: "#ffffff",
                                    threshold: 10,
                                    opacity: 0.3,
                                    transparent: true,
                                    scale: 1.02
                                }, void 0, false, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                                    lineNumber: 58,
                                    columnNumber: 14
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("icosahedronGeometry", {
                                    args: [
                                        0.8,
                                        1
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                                    lineNumber: 62,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                    color: "#00ffff",
                                    emissive: "#00ffff",
                                    emissiveIntensity: 2,
                                    wireframe: true
                                }, void 0, false, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                                    lineNumber: 63,
                                    columnNumber: 14
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    ref: ringRef,
                    children: [
                        [
                            ...Array(4)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                                rotation: [
                                    Math.PI / (i + 1.5),
                                    Math.PI / (i + 1),
                                    0
                                ],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("torusGeometry", {
                                        args: [
                                            1.8 + i * 0.6,
                                            0.005,
                                            16,
                                            150
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                        color: i === 1 ? "#00ffff" : "#ffffff",
                                        transparent: true,
                                        opacity: 0.4,
                                        side: __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, "ring-".concat(i), true, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this)),
                        [
                            ...Array(80)
                        ].map((_, i)=>{
                            const phi = Math.acos(-1 + 2 * i / 80);
                            const theta = Math.sqrt(80 * Math.PI) * phi;
                            const radius = 2.5 + Math.random() * 0.5;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                                position: [
                                    radius * Math.cos(theta) * Math.sin(phi),
                                    radius * Math.sin(theta) * Math.sin(phi),
                                    radius * Math.cos(phi)
                                ],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                        args: [
                                            Math.random() > 0.8 ? 0.08 : 0.03,
                                            Math.random() > 0.8 ? 0.08 : 0.03,
                                            Math.random() > 0.8 ? 0.08 : 0.03
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                        color: "#ffffff",
                                        opacity: 0.7,
                                        transparent: true
                                    }, void 0, false, {
                                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, "node-".concat(i), true, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(DataAvatar, "+ahE34g/UxTl96fq9JbH3KisdJA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$aba3c3d1$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__A__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$aba3c3d1$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"]
    ];
});
_c = DataAvatar;
function DataGrid() {
    _s1();
    const pointsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    // Create a structured massive grid mimicking infinite storage arrays
    const particles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DataGrid.useMemo[particles]": ()=>{
            const geo = new __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            const count = 3000;
            const positions = new Float32Array(count * 3);
            for(let i = 0; i < count; i++){
                positions[i * 3] = (Math.random() - 0.5) * 50;
                positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
                positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
            }
            geo.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](positions, 3));
            return geo;
        }
    }["DataGrid.useMemo[particles]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$aba3c3d1$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"])({
        "DataGrid.useFrame": (_, delta)=>{
            if (pointsRef.current) {
                pointsRef.current.rotation.y += delta * 0.01;
            }
        }
    }["DataGrid.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        ref: pointsRef,
        geometry: particles,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointsMaterial", {
            size: 0.03,
            color: "#ffffff",
            transparent: true,
            opacity: 0.3,
            sizeAttenuation: true
        }, void 0, false, {
            fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
            lineNumber: 127,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_s1(DataGrid, "k3CNW3lhn88pPP3Q7Rpia6GUBSA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$aba3c3d1$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = DataGrid;
function HeroCanvas() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            camera: {
                position: [
                    0,
                    0,
                    8
                ],
                fov: 50
            },
            gl: {
                antialias: true,
                alpha: true
            },
            dpr: [
                1,
                1.5
            ],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                    intensity: 0.8
                }, void 0, false, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    position: [
                        10,
                        10,
                        5
                    ],
                    intensity: 1.5
                }, void 0, false, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    position: [
                        -10,
                        -10,
                        -5
                    ],
                    intensity: 0.5,
                    color: "#ffffff"
                }, void 0, false, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DataGrid, {}, void 0, false, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: null,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DataAvatar, {}, void 0, false, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
            lineNumber: 141,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
_c2 = HeroCanvas;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "DataAvatar");
__turbopack_context__.k.register(_c1, "DataGrid");
__turbopack_context__.k.register(_c2, "HeroCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=rohithpeyarusahib_github_io_app_components_canvas_HeroCanvas_tsx_035507d5._.js.map