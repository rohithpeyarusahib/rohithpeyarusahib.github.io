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
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/@react-three/drei/core/Texture.js [app-client] (ecmascript)");
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
    // Load the Anime Avatar Image perfectly as a 3D Texture
    const texture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTexture"])("/rohith_anime_avatar.png");
    const { mouse, viewport } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$aba3c3d1$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__A__as__useThree$3e$__["useThree"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$aba3c3d1$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"])({
        "DataAvatar.useFrame": (state, delta)=>{
            // The avatar core tracks the mouse smoothly
            if (groupRef.current) {
                // Keep it anchored dynamically on the right side of the screen
                const responsivenessOffsetX = viewport.width > 8 ? 3 : 0;
                const targetX = responsivenessOffsetX + mouse.x * 0.5;
                const targetY = mouse.y * 0.5;
                groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05;
                groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.05;
                // Look at cursor
                groupRef.current.rotation.y = __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(groupRef.current.rotation.y, mouse.x * Math.PI * 0.1, 0.05);
                groupRef.current.rotation.x = __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(groupRef.current.rotation.x, -mouse.y * Math.PI * 0.1, 0.05);
            }
            if (innerRef.current) {
                innerRef.current.rotation.z += delta * 0.1;
            }
            if (ringRef.current) {
                ringRef.current.rotation.x += delta * 0.2;
                ringRef.current.rotation.y += delta * 0.1;
            }
        }
    }["DataAvatar.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef,
        position: [
            3,
            0,
            0
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float"], {
            speed: 1.5,
            rotationIntensity: 0.1,
            floatIntensity: 1,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        castShadow: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                                args: [
                                    4.5,
                                    4.5
                                ]
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                                lineNumber: 52,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                map: texture,
                                transparent: true,
                                opacity: 0.9,
                                emissive: new __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#222")
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                                lineNumber: 53,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Edges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Edges"], {
                                color: "#ffffff",
                                threshold: 15,
                                opacity: 0.3,
                                transparent: true,
                                scale: 1.01
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                                lineNumber: 59,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            0,
                            0,
                            -0.2
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                args: [
                                    4.8,
                                    4.8,
                                    0.1
                                ]
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#000",
                                metalness: 0.8,
                                roughness: 0.2,
                                transparent: true,
                                opacity: 0.8
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Edges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Edges"], {
                                color: "#ffffff",
                                opacity: 0.1,
                                transparent: true
                            }, void 0, false, {
                                fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                        ref: ringRef,
                        children: [
                            [
                                ...Array(3)
                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                                    rotation: [
                                        Math.PI / (i + 1.2),
                                        0,
                                        Math.PI / i
                                    ],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("torusGeometry", {
                                            args: [
                                                3.8 + i * 0.5,
                                                0.003,
                                                16,
                                                120
                                            ]
                                        }, void 0, false, {
                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                            color: "#ffffff",
                                            transparent: true,
                                            opacity: 0.3,
                                            side: __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
                                        }, void 0, false, {
                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this)),
                            [
                                ...Array(15)
                            ].map((_, i)=>{
                                const angle = i / 15 * Math.PI * 2;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                                    position: [
                                        Math.cos(angle) * 4,
                                        Math.sin(angle) * 4,
                                        Math.sin(angle * 3) * 1.5
                                    ],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                            args: [
                                                0.08,
                                                0.08,
                                                0.08
                                            ]
                                        }, void 0, false, {
                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                                            lineNumber: 82,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                            color: "#ffffff",
                                            opacity: 0.5,
                                            transparent: true
                                        }, void 0, false, {
                                            fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                                            lineNumber: 83,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                                    lineNumber: 81,
                                    columnNumber: 17
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(DataAvatar, "6bYozPZvQzm0pr7ZUxxUos3oeAo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTexture"],
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
            lineNumber: 120,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
        lineNumber: 119,
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
                    lineNumber: 135,
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
                    lineNumber: 136,
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
                    lineNumber: 137,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DataGrid, {}, void 0, false, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: null,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DataAvatar, {}, void 0, false, {
                        fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
            lineNumber: 134,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/rohithpeyarusahib.github.io/app/components/canvas/HeroCanvas.tsx",
        lineNumber: 133,
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
"[project]/rohithpeyarusahib.github.io/node_modules/@react-three/fiber/dist/events-aba3c3d1.esm.js [app-client] (ecmascript) <export F as useLoader>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLoader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$aba3c3d1$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$aba3c3d1$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/@react-three/fiber/dist/events-aba3c3d1.esm.js [app-client] (ecmascript)");
}),
"[project]/rohithpeyarusahib.github.io/node_modules/@react-three/drei/core/Texture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IsObject",
    ()=>IsObject,
    "Texture",
    ()=>Texture,
    "useTexture",
    ()=>useTexture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$aba3c3d1$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__A__as__useThree$3e$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/@react-three/fiber/dist/events-aba3c3d1.esm.js [app-client] (ecmascript) <export A as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$aba3c3d1$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useLoader$3e$__ = __turbopack_context__.i("[project]/rohithpeyarusahib.github.io/node_modules/@react-three/fiber/dist/events-aba3c3d1.esm.js [app-client] (ecmascript) <export F as useLoader>");
;
;
;
;
const IsObject = (url)=>url === Object(url) && !Array.isArray(url) && typeof url !== 'function';
function useTexture(input, onLoad) {
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$aba3c3d1$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__A__as__useThree$3e$__["useThree"])({
        "useTexture.useThree[gl]": (state)=>state.gl
    }["useTexture.useThree[gl]"]);
    const textures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$aba3c3d1$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useLoader$3e$__["useLoader"])(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"], IsObject(input) ? Object.values(input) : input);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useTexture.useLayoutEffect": ()=>{
            onLoad == null || onLoad(textures);
        }
    }["useTexture.useLayoutEffect"], [
        onLoad
    ]);
    // https://github.com/mrdoob/three.js/issues/22696
    // Upload the texture to the GPU immediately instead of waiting for the first render
    // NOTE: only available for WebGLRenderer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTexture.useEffect": ()=>{
            if ('initTexture' in gl) {
                let textureArray = [];
                if (Array.isArray(textures)) {
                    textureArray = textures;
                } else if (textures instanceof __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"]) {
                    textureArray = [
                        textures
                    ];
                } else if (IsObject(textures)) {
                    textureArray = Object.values(textures);
                }
                textureArray.forEach({
                    "useTexture.useEffect": (texture)=>{
                        if (texture instanceof __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"]) {
                            gl.initTexture(texture);
                        }
                    }
                }["useTexture.useEffect"]);
            }
        }
    }["useTexture.useEffect"], [
        gl,
        textures
    ]);
    const mappedTextures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useTexture.useMemo[mappedTextures]": ()=>{
            if (IsObject(input)) {
                const keyed = {};
                let i = 0;
                for(const key in input)keyed[key] = textures[i++];
                return keyed;
            } else {
                return textures;
            }
        }
    }["useTexture.useMemo[mappedTextures]"], [
        input,
        textures
    ]);
    return mappedTextures;
}
useTexture.preload = (url)=>__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$aba3c3d1$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useLoader$3e$__["useLoader"].preload(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"], url);
useTexture.clear = (input)=>__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$aba3c3d1$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useLoader$3e$__["useLoader"].clear(__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"], input);
//
const Texture = (param)=>{
    let { children, input, onLoad } = param;
    const ret = useTexture(input, onLoad);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$rohithpeyarusahib$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, children == null ? void 0 : children(ret));
};
;
}),
]);

//# sourceMappingURL=rohithpeyarusahib_github_io_fe676560._.js.map