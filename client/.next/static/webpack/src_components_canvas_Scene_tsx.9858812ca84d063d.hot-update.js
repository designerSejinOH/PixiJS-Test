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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Scene\": function() { return /* binding */ Scene; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pixi_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pixi/react */ \"./node_modules/@pixi/react/module.js\");\n/* harmony import */ var _pixi_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pixi_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _pixi_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pixi/events */ \"./node_modules/@pixi/events/lib/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Scene = (param)=>{\n    let { width , height  } = param;\n    const onDragStart = (event)=>{\n        const sprite = event.currentTarget;\n        sprite.alpha = 0.5;\n        sprite.data = event.data;\n        sprite.dragging = true;\n    };\n    const onDragEnd = (event)=>{\n        const sprite = event.currentTarget;\n        sprite.alpha = 1;\n        sprite.dragging = false;\n        sprite.data = null;\n    };\n    const onDragMove = (event)=>{\n        const sprite = event.currentTarget;\n        if (sprite.dragging) {\n            const newPosition = sprite.data.getLocalPosition(sprite.parent);\n            sprite.x = newPosition.x;\n            sprite.y = newPosition.y;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pixi_react__WEBPACK_IMPORTED_MODULE_3__.Stage, {\n        width: width,\n        height: height,\n        options: {\n            autoDensity: true,\n            backgroundColor: 0x01262a\n        },\n        onMount: (app)=>{\n            app.renderer.addSystem(_pixi_events__WEBPACK_IMPORTED_MODULE_1__.EventSystem, \"events2\");\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pixi_react__WEBPACK_IMPORTED_MODULE_3__.Sprite, {\n            image: \"./img/nike.png\",\n            x: width / 2,\n            y: height / 2,\n            scale: 0.1,\n            anchor: 0.5,\n            interactive: true,\n            pointerdown: onDragStart,\n            pointerup: onDragEnd,\n            pointerupoutside: onDragEnd,\n            pointermove: onDragMove\n        }, void 0, false, {\n            fileName: \"/Users/sejinoh/Documents/GitHub/PixiJS-Test/client/src/components/canvas/Scene.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/sejinoh/Documents/GitHub/PixiJS-Test/client/src/components/canvas/Scene.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Scene;\nvar _c;\n$RefreshReg$(_c, \"Scene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYW52YXMvU2NlbmUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBNEM7QUFDRDtBQUNIO0FBUWpDLE1BQU1JLFFBQVEsU0FBdUI7UUFBdEIsRUFBRUMsTUFBSyxFQUFFQyxPQUFNLEVBQUU7SUFDckMsTUFBTUMsY0FBYyxDQUFDQyxRQUFpQztRQUNwRCxNQUFNQyxTQUFTRCxNQUFNRSxhQUFhO1FBQ2xDRCxPQUFPRSxLQUFLLEdBQUc7UUFDZkYsT0FBT0csSUFBSSxHQUFHSixNQUFNSSxJQUFJO1FBQ3hCSCxPQUFPSSxRQUFRLEdBQUcsSUFBSTtJQUN4QjtJQUVBLE1BQU1DLFlBQVksQ0FBQ04sUUFBaUM7UUFDbEQsTUFBTUMsU0FBU0QsTUFBTUUsYUFBYTtRQUNsQ0QsT0FBT0UsS0FBSyxHQUFHO1FBQ2ZGLE9BQU9JLFFBQVEsR0FBRyxLQUFLO1FBQ3ZCSixPQUFPRyxJQUFJLEdBQUcsSUFBSTtJQUNwQjtJQUVBLE1BQU1HLGFBQWEsQ0FBQ1AsUUFBaUM7UUFDbkQsTUFBTUMsU0FBU0QsTUFBTUUsYUFBYTtRQUNsQyxJQUFJRCxPQUFPSSxRQUFRLEVBQUU7WUFDbkIsTUFBTUcsY0FBY1AsT0FBT0csSUFBSSxDQUFFSyxnQkFBZ0IsQ0FBQ1IsT0FBT1MsTUFBTTtZQUMvRFQsT0FBT1UsQ0FBQyxHQUFHSCxZQUFZRyxDQUFDO1lBQ3hCVixPQUFPVyxDQUFDLEdBQUdKLFlBQVlJLENBQUM7UUFDMUIsQ0FBQztJQUNIO0lBRUEscUJBQ0UsOERBQUNwQiw4Q0FBS0E7UUFDSkssT0FBT0E7UUFDUEMsUUFBUUE7UUFDUmUsU0FBUztZQUFFQyxhQUFhLElBQUk7WUFBRUMsaUJBQWlCO1FBQVM7UUFDeERDLFNBQVMsQ0FBQ0MsTUFBUTtZQUNoQkEsSUFBSUMsUUFBUSxDQUFDQyxTQUFTLENBQUN6QixxREFBV0EsRUFBRTtRQUN0QztrQkFFQSw0RUFBQ0QsK0NBQU1BO1lBQ0wyQixPQUFNO1lBQ05ULEdBQUdkLFFBQVE7WUFDWGUsR0FBR2QsU0FBUztZQUNadUIsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLGFBQWEsSUFBSTtZQUNqQkMsYUFBYXpCO1lBQ2IwQixXQUFXbkI7WUFDWG9CLGtCQUFrQnBCO1lBQ2xCcUIsYUFBYXBCOzs7Ozs7Ozs7OztBQUlyQixFQUFFO0tBL0NXWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYW52YXMvU2NlbmUudHN4P2E4NDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhZ2UsIFNwcml0ZSB9IGZyb20gXCJAcGl4aS9yZWFjdFwiO1xuaW1wb3J0IHsgRXZlbnRTeXN0ZW0gfSBmcm9tIFwiQHBpeGkvZXZlbnRzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFBJWEkgZnJvbSBcInBpeGkuanNcIjtcblxuaW50ZXJmYWNlIERyYWdnYWJsZSBleHRlbmRzIFBJWEkuRGlzcGxheU9iamVjdCB7XG4gIGRhdGE6IFBJWEkuSW50ZXJhY3Rpb25EYXRhIHwgbnVsbDtcbiAgZHJhZ2dpbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBTY2VuZSA9ICh7IHdpZHRoLCBoZWlnaHQgfSkgPT4ge1xuICBjb25zdCBvbkRyYWdTdGFydCA9IChldmVudDogUElYSS5JbnRlcmFjdGlvbkV2ZW50KSA9PiB7XG4gICAgY29uc3Qgc3ByaXRlID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBEcmFnZ2FibGU7XG4gICAgc3ByaXRlLmFscGhhID0gMC41O1xuICAgIHNwcml0ZS5kYXRhID0gZXZlbnQuZGF0YTtcbiAgICBzcHJpdGUuZHJhZ2dpbmcgPSB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IG9uRHJhZ0VuZCA9IChldmVudDogUElYSS5JbnRlcmFjdGlvbkV2ZW50KSA9PiB7XG4gICAgY29uc3Qgc3ByaXRlID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBEcmFnZ2FibGU7XG4gICAgc3ByaXRlLmFscGhhID0gMTtcbiAgICBzcHJpdGUuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICBzcHJpdGUuZGF0YSA9IG51bGw7XG4gIH07XG5cbiAgY29uc3Qgb25EcmFnTW92ZSA9IChldmVudDogUElYSS5JbnRlcmFjdGlvbkV2ZW50KSA9PiB7XG4gICAgY29uc3Qgc3ByaXRlID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBEcmFnZ2FibGU7XG4gICAgaWYgKHNwcml0ZS5kcmFnZ2luZykge1xuICAgICAgY29uc3QgbmV3UG9zaXRpb24gPSBzcHJpdGUuZGF0YSEuZ2V0TG9jYWxQb3NpdGlvbihzcHJpdGUucGFyZW50KTtcbiAgICAgIHNwcml0ZS54ID0gbmV3UG9zaXRpb24ueDtcbiAgICAgIHNwcml0ZS55ID0gbmV3UG9zaXRpb24ueTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhZ2VcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgb3B0aW9ucz17eyBhdXRvRGVuc2l0eTogdHJ1ZSwgYmFja2dyb3VuZENvbG9yOiAweDAxMjYyYSB9fVxuICAgICAgb25Nb3VudD17KGFwcCkgPT4ge1xuICAgICAgICBhcHAucmVuZGVyZXIuYWRkU3lzdGVtKEV2ZW50U3lzdGVtLCBcImV2ZW50czJcIik7XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxTcHJpdGVcbiAgICAgICAgaW1hZ2U9XCIuL2ltZy9uaWtlLnBuZ1wiXG4gICAgICAgIHg9e3dpZHRoIC8gMn1cbiAgICAgICAgeT17aGVpZ2h0IC8gMn1cbiAgICAgICAgc2NhbGU9ezAuMX1cbiAgICAgICAgYW5jaG9yPXswLjV9XG4gICAgICAgIGludGVyYWN0aXZlPXt0cnVlfVxuICAgICAgICBwb2ludGVyZG93bj17b25EcmFnU3RhcnR9XG4gICAgICAgIHBvaW50ZXJ1cD17b25EcmFnRW5kfVxuICAgICAgICBwb2ludGVydXBvdXRzaWRlPXtvbkRyYWdFbmR9XG4gICAgICAgIHBvaW50ZXJtb3ZlPXtvbkRyYWdNb3ZlfVxuICAgICAgLz5cbiAgICA8L1N0YWdlPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJTdGFnZSIsIlNwcml0ZSIsIkV2ZW50U3lzdGVtIiwiUmVhY3QiLCJTY2VuZSIsIndpZHRoIiwiaGVpZ2h0Iiwib25EcmFnU3RhcnQiLCJldmVudCIsInNwcml0ZSIsImN1cnJlbnRUYXJnZXQiLCJhbHBoYSIsImRhdGEiLCJkcmFnZ2luZyIsIm9uRHJhZ0VuZCIsIm9uRHJhZ01vdmUiLCJuZXdQb3NpdGlvbiIsImdldExvY2FsUG9zaXRpb24iLCJwYXJlbnQiLCJ4IiwieSIsIm9wdGlvbnMiLCJhdXRvRGVuc2l0eSIsImJhY2tncm91bmRDb2xvciIsIm9uTW91bnQiLCJhcHAiLCJyZW5kZXJlciIsImFkZFN5c3RlbSIsImltYWdlIiwic2NhbGUiLCJhbmNob3IiLCJpbnRlcmFjdGl2ZSIsInBvaW50ZXJkb3duIiwicG9pbnRlcnVwIiwicG9pbnRlcnVwb3V0c2lkZSIsInBvaW50ZXJtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/canvas/Scene.tsx\n"));

/***/ })

});