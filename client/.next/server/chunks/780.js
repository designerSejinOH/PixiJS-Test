"use strict";
exports.id = 780;
exports.ids = [780];
exports.modules = {

/***/ 780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scene": () => (/* binding */ Scene)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pixi_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(254);
/* harmony import */ var _pixi_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pixi_react__WEBPACK_IMPORTED_MODULE_1__);


const Scene = ({ width , height  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pixi_react__WEBPACK_IMPORTED_MODULE_1__.Stage, {
        width: width,
        height: height,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pixi_react__WEBPACK_IMPORTED_MODULE_1__.Sprite, {
            image: "https://pixijs.io/pixi-react/img/bunny.png",
            x: width / 2,
            y: height / 2,
            anchor: {
                x: 0.5,
                y: 0.5
            }
        })
    });
};


/***/ })

};
;