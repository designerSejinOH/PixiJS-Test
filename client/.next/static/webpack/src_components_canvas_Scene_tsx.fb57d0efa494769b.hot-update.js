"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_canvas_Scene_tsx",{

/***/ "./src/components/canvas/Scene.tsx":
/*!*****************************************!*\
  !*** ./src/components/canvas/Scene.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Scene\": function() { return /* binding */ Scene; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pixi_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pixi/react */ \"./node_modules/@pixi/react/module.js\");\n/* harmony import */ var _pixi_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pixi_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Scene = (param)=>{\n    let { width , height  } = param;\n    var _s = $RefreshSig$();\n    let i = 0;\n    const Bunny = ()=>{\n        _s();\n        // states\n        const [x, setX] = useState(0);\n        const [y, setY] = useState(0);\n        const [rotation, setRotation] = useState(0);\n        // custom ticker\n        useTick((delta)=>{\n            i += 0.05 * delta;\n            setX(Math.sin(i) * 100);\n            setY(Math.sin(i / 1.5) * 100);\n            setRotation(-10 + Math.sin(i / 10 + Math.PI * 2) * 10);\n        });\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pixi_react__WEBPACK_IMPORTED_MODULE_2__.Sprite, {\n            image: \"https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png\",\n            anchor: 0.5,\n            x: x,\n            y: y,\n            rotation: rotation\n        }, void 0, false, {\n            fileName: \"/Users/sejinoh/Documents/GitHub/PixiJS-Test/client/src/components/canvas/Scene.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined);\n    };\n    _s(Bunny, \"d9yDlWvo7Oea7v1MpfaVvWQegzE=\", true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pixi_react__WEBPACK_IMPORTED_MODULE_2__.Stage, {\n        width: 300,\n        height: 300,\n        options: {\n            autoDensity: true,\n            backgroundColor: 0x01262a\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pixi_react__WEBPACK_IMPORTED_MODULE_2__.Container, {\n            x: 150,\n            y: 150,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Bunny, {}, void 0, false, {\n                fileName: \"/Users/sejinoh/Documents/GitHub/PixiJS-Test/client/src/components/canvas/Scene.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/sejinoh/Documents/GitHub/PixiJS-Test/client/src/components/canvas/Scene.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/sejinoh/Documents/GitHub/PixiJS-Test/client/src/components/canvas/Scene.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Scene;\nvar _c;\n$RefreshReg$(_c, \"Scene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYW52YXMvU2NlbmUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUE2RDtBQUNuQztBQUVuQixNQUFNSSxRQUFRLFNBQXVCO1FBQXRCLEVBQUVDLE1BQUssRUFBRUMsT0FBTSxFQUFFOztJQUNyQyxJQUFJQyxJQUFJO0lBRVIsTUFBTUMsUUFBUSxJQUFNOztRQUNsQixTQUFTO1FBQ1QsTUFBTSxDQUFDQyxHQUFHQyxLQUFLLEdBQUdDLFNBQVM7UUFDM0IsTUFBTSxDQUFDQyxHQUFHQyxLQUFLLEdBQUdGLFNBQVM7UUFDM0IsTUFBTSxDQUFDRyxVQUFVQyxZQUFZLEdBQUdKLFNBQVM7UUFFekMsZ0JBQWdCO1FBQ2hCSyxRQUFRLENBQUNDLFFBQVU7WUFDakJWLEtBQUssT0FBT1U7WUFFWlAsS0FBS1EsS0FBS0MsR0FBRyxDQUFDWixLQUFLO1lBQ25CTSxLQUFLSyxLQUFLQyxHQUFHLENBQUNaLElBQUksT0FBTztZQUN6QlEsWUFBWSxDQUFDLEtBQUtHLEtBQUtDLEdBQUcsQ0FBQ1osSUFBSSxLQUFLVyxLQUFLRSxFQUFFLEdBQUcsS0FBSztRQUNyRDtRQUVBLHFCQUNFLDhEQUFDbEIsK0NBQU1BO1lBQ0xtQixPQUFNO1lBQ05DLFFBQVE7WUFDUmIsR0FBR0E7WUFDSEcsR0FBR0E7WUFDSEUsVUFBVUE7Ozs7OztJQUdoQjtPQXhCTU47SUEwQk4scUJBQ0UsOERBQUNSLDhDQUFLQTtRQUNKSyxPQUFPO1FBQ1BDLFFBQVE7UUFDUmlCLFNBQVM7WUFBRUMsYUFBYSxJQUFJO1lBQUVDLGlCQUFpQjtRQUFTO2tCQUV4RCw0RUFBQ3hCLGtEQUFTQTtZQUFDUSxHQUFHO1lBQUtHLEdBQUc7c0JBQ3BCLDRFQUFDSjs7Ozs7Ozs7Ozs7Ozs7O0FBSVQsRUFBRTtLQXhDV0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FudmFzL1NjZW5lLnRzeD9hODQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YWdlLCBDb250YWluZXIsIFNwcml0ZSwgVGV4dCB9IGZyb20gXCJAcGl4aS9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgU2NlbmUgPSAoeyB3aWR0aCwgaGVpZ2h0IH0pID0+IHtcbiAgbGV0IGkgPSAwO1xuXG4gIGNvbnN0IEJ1bm55ID0gKCkgPT4ge1xuICAgIC8vIHN0YXRlc1xuICAgIGNvbnN0IFt4LCBzZXRYXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFt5LCBzZXRZXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtyb3RhdGlvbiwgc2V0Um90YXRpb25dID0gdXNlU3RhdGUoMCk7XG5cbiAgICAvLyBjdXN0b20gdGlja2VyXG4gICAgdXNlVGljaygoZGVsdGEpID0+IHtcbiAgICAgIGkgKz0gMC4wNSAqIGRlbHRhO1xuXG4gICAgICBzZXRYKE1hdGguc2luKGkpICogMTAwKTtcbiAgICAgIHNldFkoTWF0aC5zaW4oaSAvIDEuNSkgKiAxMDApO1xuICAgICAgc2V0Um90YXRpb24oLTEwICsgTWF0aC5zaW4oaSAvIDEwICsgTWF0aC5QSSAqIDIpICogMTApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTcHJpdGVcbiAgICAgICAgaW1hZ2U9XCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby82OTM2MTIvSWFVcnR0ai5wbmdcIlxuICAgICAgICBhbmNob3I9ezAuNX1cbiAgICAgICAgeD17eH1cbiAgICAgICAgeT17eX1cbiAgICAgICAgcm90YXRpb249e3JvdGF0aW9ufVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFN0YWdlXG4gICAgICB3aWR0aD17MzAwfVxuICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICBvcHRpb25zPXt7IGF1dG9EZW5zaXR5OiB0cnVlLCBiYWNrZ3JvdW5kQ29sb3I6IDB4MDEyNjJhIH19XG4gICAgPlxuICAgICAgPENvbnRhaW5lciB4PXsxNTB9IHk9ezE1MH0+XG4gICAgICAgIDxCdW5ueSAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9TdGFnZT5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiU3RhZ2UiLCJDb250YWluZXIiLCJTcHJpdGUiLCJSZWFjdCIsIlNjZW5lIiwid2lkdGgiLCJoZWlnaHQiLCJpIiwiQnVubnkiLCJ4Iiwic2V0WCIsInVzZVN0YXRlIiwieSIsInNldFkiLCJyb3RhdGlvbiIsInNldFJvdGF0aW9uIiwidXNlVGljayIsImRlbHRhIiwiTWF0aCIsInNpbiIsIlBJIiwiaW1hZ2UiLCJhbmNob3IiLCJvcHRpb25zIiwiYXV0b0RlbnNpdHkiLCJiYWNrZ3JvdW5kQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/canvas/Scene.tsx\n"));

/***/ })

});