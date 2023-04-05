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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Scene\": function() { return /* binding */ Scene; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pixi_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pixi/react */ \"./node_modules/@pixi/react/module.js\");\n/* harmony import */ var _pixi_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pixi_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _pixi_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pixi/events */ \"./node_modules/@pixi/events/lib/index.mjs\");\n/* harmony import */ var _pixi_filter_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pixi/filter-outline */ \"./node_modules/@pixi/filter-outline/dist/filter-outline.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/index.mjs\");\n\n\n\n\n\n\nconst Scene = (param)=>{\n    let { width , height  } = param;\n    const onDragStart = (event)=>{\n        const sprite = event.currentTarget;\n        sprite.alpha = 0.5;\n        sprite.data = event.data;\n        sprite.dragging = true;\n    };\n    //@ts-ignore\n    const onDragEnd = (event)=>{\n        const sprite = event.currentTarget;\n        sprite.alpha = 1;\n        sprite.dragging = false;\n        sprite.data = null;\n    };\n    //@ts-ignore\n    const onDragMove = (event)=>{\n        const sprite = event.currentTarget;\n        if (sprite.dragging) {\n            const newPosition = sprite.data.getLocalPosition(sprite.parent);\n            sprite.x = newPosition.x;\n            sprite.y = newPosition.y;\n        }\n    };\n    const Filters = (0,_pixi_react__WEBPACK_IMPORTED_MODULE_5__.withFilters)(_pixi_react__WEBPACK_IMPORTED_MODULE_5__.Container, {\n        adjust: _pixi_filter_outline__WEBPACK_IMPORTED_MODULE_2__.OutlineFilter\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pixi_react__WEBPACK_IMPORTED_MODULE_5__.Stage, {\n        width: width,\n        height: height,\n        options: {\n            autoDensity: true,\n            backgroundColor: 0xffffff\n        },\n        onMount: (app)=>{\n            app.renderer.addSystem(_pixi_events__WEBPACK_IMPORTED_MODULE_1__.EventSystem, \"events2\");\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pixi_react__WEBPACK_IMPORTED_MODULE_5__.Sprite, {\n                image: \"./img/nike.png\",\n                x: width / 3 * 2,\n                y: height / 2,\n                scale: 0.1,\n                anchor: 0.5,\n                interactive: true,\n                pointerdown: onDragStart,\n                pointerup: onDragEnd,\n                pointerupoutside: onDragEnd,\n                pointermove: onDragMove\n            }, void 0, false, {\n                fileName: \"/Users/sejinoh/Documents/GitHub/PixiJS-Test/client/src/components/canvas/Scene.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pixi_react__WEBPACK_IMPORTED_MODULE_5__.Sprite, {\n                image: \"./img/tv.png\",\n                x: width / 3,\n                y: height / 3 * 2,\n                scale: 0.09,\n                anchor: 0.5,\n                interactive: true,\n                pointerdown: onDragStart,\n                pointerup: onDragEnd,\n                pointerupoutside: onDragEnd,\n                pointermove: onDragMove\n            }, void 0, false, {\n                fileName: \"/Users/sejinoh/Documents/GitHub/PixiJS-Test/client/src/components/canvas/Scene.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pixi_react__WEBPACK_IMPORTED_MODULE_5__.Sprite, {\n                image: \"./img/smile.png\",\n                x: width / 3,\n                y: height / 3,\n                scale: 0.08,\n                anchor: 0.5,\n                interactive: true,\n                pointerdown: onDragStart,\n                pointerup: onDragEnd,\n                pointerupoutside: onDragEnd,\n                pointermove: onDragMove\n            }, void 0, false, {\n                fileName: \"/Users/sejinoh/Documents/GitHub/PixiJS-Test/client/src/components/canvas/Scene.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pixi_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                text: \"Hello World\",\n                anchor: 0.5,\n                x: width / 2,\n                y: height / 2,\n                interactive: true,\n                pointerdown: onDragStart,\n                pointerup: onDragEnd,\n                pointerupoutside: onDragEnd,\n                pointermove: onDragMove,\n                style: new pixi_js__WEBPACK_IMPORTED_MODULE_4__.TextStyle({\n                    align: \"center\",\n                    fontFamily: \"Helvetica, sans-serif\",\n                    fontSize: 50,\n                    fill: [\n                        \"#ffffff\",\n                        \"#00ff99\"\n                    ],\n                    stroke: \"#000000\",\n                    strokeThickness: 1,\n                    letterSpacing: 20,\n                    wordWrap: true,\n                    wordWrapWidth: 440\n                })\n            }, void 0, false, {\n                fileName: \"/Users/sejinoh/Documents/GitHub/PixiJS-Test/client/src/components/canvas/Scene.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sejinoh/Documents/GitHub/PixiJS-Test/client/src/components/canvas/Scene.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Scene;\nvar _c;\n$RefreshReg$(_c, \"Scene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZUFBZTtvQkFDZkMsVUFBVSxJQUFJO29CQUNkQyxlQUFlO2dCQUNqQjs7Ozs7Ozs7Ozs7O0FBS1YsRUFBRTtLQXZHVzdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NhbnZhcy9TY2VuZS50c3g/YTg0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIsIFN0YWdlLCBTcHJpdGUsIFRleHQsIHdpdGhGaWx0ZXJzIH0gZnJvbSBcIkBwaXhpL3JlYWN0XCI7XG5pbXBvcnQgeyBFdmVudFN5c3RlbSB9IGZyb20gXCJAcGl4aS9ldmVudHNcIjtcbmltcG9ydCB7IE91dGxpbmVGaWx0ZXIgfSBmcm9tIFwiQHBpeGkvZmlsdGVyLW91dGxpbmVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgUElYSSBmcm9tIFwicGl4aS5qc1wiO1xuXG5pbnRlcmZhY2UgRHJhZ2dhYmxlIGV4dGVuZHMgUElYSS5EaXNwbGF5T2JqZWN0IHtcbiAgLy9AdHMtaWdub3JlXG4gIGRhdGE6IFBJWEkuSW50ZXJhY3Rpb25EYXRhIHwgbnVsbDtcbiAgZHJhZ2dpbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBTY2VuZSA9ICh7IHdpZHRoLCBoZWlnaHQgfSkgPT4ge1xuICBjb25zdCBvbkRyYWdTdGFydCA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHNwcml0ZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgRHJhZ2dhYmxlO1xuICAgIHNwcml0ZS5hbHBoYSA9IDAuNTtcbiAgICBzcHJpdGUuZGF0YSA9IGV2ZW50LmRhdGE7XG4gICAgc3ByaXRlLmRyYWdnaW5nID0gdHJ1ZTtcbiAgfTtcblxuICAvL0B0cy1pZ25vcmVcbiAgY29uc3Qgb25EcmFnRW5kID0gKGV2ZW50OiBQSVhJLkludGVyYWN0aW9uRXZlbnQpID0+IHtcbiAgICBjb25zdCBzcHJpdGUgPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIERyYWdnYWJsZTtcbiAgICBzcHJpdGUuYWxwaGEgPSAxO1xuICAgIHNwcml0ZS5kcmFnZ2luZyA9IGZhbHNlO1xuICAgIHNwcml0ZS5kYXRhID0gbnVsbDtcbiAgfTtcblxuICAvL0B0cy1pZ25vcmVcbiAgY29uc3Qgb25EcmFnTW92ZSA9IChldmVudDogUElYSS5JbnRlcmFjdGlvbkV2ZW50KSA9PiB7XG4gICAgY29uc3Qgc3ByaXRlID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBEcmFnZ2FibGU7XG4gICAgaWYgKHNwcml0ZS5kcmFnZ2luZykge1xuICAgICAgY29uc3QgbmV3UG9zaXRpb24gPSBzcHJpdGUuZGF0YSEuZ2V0TG9jYWxQb3NpdGlvbihzcHJpdGUucGFyZW50KTtcbiAgICAgIHNwcml0ZS54ID0gbmV3UG9zaXRpb24ueDtcbiAgICAgIHNwcml0ZS55ID0gbmV3UG9zaXRpb24ueTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgRmlsdGVycyA9IHdpdGhGaWx0ZXJzKENvbnRhaW5lciwge1xuICAgIGFkanVzdDogT3V0bGluZUZpbHRlcixcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhZ2VcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgb3B0aW9ucz17eyBhdXRvRGVuc2l0eTogdHJ1ZSwgYmFja2dyb3VuZENvbG9yOiAweGZmZmZmZiB9fVxuICAgICAgb25Nb3VudD17KGFwcCkgPT4ge1xuICAgICAgICBhcHAucmVuZGVyZXIuYWRkU3lzdGVtKEV2ZW50U3lzdGVtLCBcImV2ZW50czJcIik7XG4gICAgICB9fVxuICAgID5cbiAgICAgIHsvKiA8RmlsdGVycyBzY2FsZT17Mn0+ICovfVxuICAgICAgPFNwcml0ZVxuICAgICAgICBpbWFnZT1cIi4vaW1nL25pa2UucG5nXCJcbiAgICAgICAgeD17KHdpZHRoIC8gMykgKiAyfVxuICAgICAgICB5PXtoZWlnaHQgLyAyfVxuICAgICAgICBzY2FsZT17MC4xfVxuICAgICAgICBhbmNob3I9ezAuNX1cbiAgICAgICAgaW50ZXJhY3RpdmU9e3RydWV9XG4gICAgICAgIHBvaW50ZXJkb3duPXtvbkRyYWdTdGFydH1cbiAgICAgICAgcG9pbnRlcnVwPXtvbkRyYWdFbmR9XG4gICAgICAgIHBvaW50ZXJ1cG91dHNpZGU9e29uRHJhZ0VuZH1cbiAgICAgICAgcG9pbnRlcm1vdmU9e29uRHJhZ01vdmV9XG4gICAgICAvPlxuICAgICAgey8qIDwvRmlsdGVycz4gKi99XG4gICAgICA8U3ByaXRlXG4gICAgICAgIGltYWdlPVwiLi9pbWcvdHYucG5nXCJcbiAgICAgICAgeD17d2lkdGggLyAzfVxuICAgICAgICB5PXsoaGVpZ2h0IC8gMykgKiAyfVxuICAgICAgICBzY2FsZT17MC4wOX1cbiAgICAgICAgYW5jaG9yPXswLjV9XG4gICAgICAgIGludGVyYWN0aXZlPXt0cnVlfVxuICAgICAgICBwb2ludGVyZG93bj17b25EcmFnU3RhcnR9XG4gICAgICAgIHBvaW50ZXJ1cD17b25EcmFnRW5kfVxuICAgICAgICBwb2ludGVydXBvdXRzaWRlPXtvbkRyYWdFbmR9XG4gICAgICAgIHBvaW50ZXJtb3ZlPXtvbkRyYWdNb3ZlfVxuICAgICAgLz5cbiAgICAgIDxTcHJpdGVcbiAgICAgICAgaW1hZ2U9XCIuL2ltZy9zbWlsZS5wbmdcIlxuICAgICAgICB4PXt3aWR0aCAvIDN9XG4gICAgICAgIHk9e2hlaWdodCAvIDN9XG4gICAgICAgIHNjYWxlPXswLjA4fVxuICAgICAgICBhbmNob3I9ezAuNX1cbiAgICAgICAgaW50ZXJhY3RpdmU9e3RydWV9XG4gICAgICAgIHBvaW50ZXJkb3duPXtvbkRyYWdTdGFydH1cbiAgICAgICAgcG9pbnRlcnVwPXtvbkRyYWdFbmR9XG4gICAgICAgIHBvaW50ZXJ1cG91dHNpZGU9e29uRHJhZ0VuZH1cbiAgICAgICAgcG9pbnRlcm1vdmU9e29uRHJhZ01vdmV9XG4gICAgICAvPlxuICAgICAgPFRleHRcbiAgICAgICAgdGV4dD1cIkhlbGxvIFdvcmxkXCJcbiAgICAgICAgYW5jaG9yPXswLjV9XG4gICAgICAgIHg9e3dpZHRoIC8gMn1cbiAgICAgICAgeT17aGVpZ2h0IC8gMn1cbiAgICAgICAgaW50ZXJhY3RpdmU9e3RydWV9XG4gICAgICAgIHBvaW50ZXJkb3duPXtvbkRyYWdTdGFydH1cbiAgICAgICAgcG9pbnRlcnVwPXtvbkRyYWdFbmR9XG4gICAgICAgIHBvaW50ZXJ1cG91dHNpZGU9e29uRHJhZ0VuZH1cbiAgICAgICAgcG9pbnRlcm1vdmU9e29uRHJhZ01vdmV9XG4gICAgICAgIHN0eWxlPXtcbiAgICAgICAgICBuZXcgUElYSS5UZXh0U3R5bGUoe1xuICAgICAgICAgICAgYWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkhlbHZldGljYSwgc2Fucy1zZXJpZlwiLFxuICAgICAgICAgICAgZm9udFNpemU6IDUwLFxuICAgICAgICAgICAgZmlsbDogW1wiI2ZmZmZmZlwiLCBcIiMwMGZmOTlcIl0sIC8vIGdyYWRpZW50XG4gICAgICAgICAgICBzdHJva2U6IFwiIzAwMDAwMFwiLFxuICAgICAgICAgICAgc3Ryb2tlVGhpY2tuZXNzOiAxLFxuICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogMjAsXG4gICAgICAgICAgICB3b3JkV3JhcDogdHJ1ZSxcbiAgICAgICAgICAgIHdvcmRXcmFwV2lkdGg6IDQ0MCxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgIDwvU3RhZ2U+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIlN0YWdlIiwiU3ByaXRlIiwiVGV4dCIsIndpdGhGaWx0ZXJzIiwiRXZlbnRTeXN0ZW0iLCJPdXRsaW5lRmlsdGVyIiwiUmVhY3QiLCJQSVhJIiwiU2NlbmUiLCJ3aWR0aCIsImhlaWdodCIsIm9uRHJhZ1N0YXJ0IiwiZXZlbnQiLCJzcHJpdGUiLCJjdXJyZW50VGFyZ2V0IiwiYWxwaGEiLCJkYXRhIiwiZHJhZ2dpbmciLCJvbkRyYWdFbmQiLCJvbkRyYWdNb3ZlIiwibmV3UG9zaXRpb24iLCJnZXRMb2NhbFBvc2l0aW9uIiwicGFyZW50IiwieCIsInkiLCJGaWx0ZXJzIiwiYWRqdXN0Iiwib3B0aW9ucyIsImF1dG9EZW5zaXR5IiwiYmFja2dyb3VuZENvbG9yIiwib25Nb3VudCIsImFwcCIsInJlbmRlcmVyIiwiYWRkU3lzdGVtIiwiaW1hZ2UiLCJzY2FsZSIsImFuY2hvciIsImludGVyYWN0aXZlIiwicG9pbnRlcmRvd24iLCJwb2ludGVydXAiLCJwb2ludGVydXBvdXRzaWRlIiwicG9pbnRlcm1vdmUiLCJ0ZXh0Iiwic3R5bGUiLCJUZXh0U3R5bGUiLCJhbGlnbiIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VUaGlja25lc3MiLCJsZXR0ZXJTcGFjaW5nIiwid29yZFdyYXAiLCJ3b3JkV3JhcFdpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/canvas/Scene.tsx\n"));

/***/ })

});