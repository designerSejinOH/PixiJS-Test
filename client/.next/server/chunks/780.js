"use strict";
exports.id = 780;
exports.ids = [780];
exports.modules = {

/***/ 780:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scene": () => (/* binding */ Scene)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pixi_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(254);
/* harmony import */ var _pixi_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pixi_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pixi_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(837);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pixi_events__WEBPACK_IMPORTED_MODULE_2__]);
_pixi_events__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Scene = ({ width , height  })=>{
    const onDragStart = (event)=>{
        const sprite = event.currentTarget;
        sprite.alpha = 0.5;
        sprite.data = event.data;
        sprite.dragging = true;
    };
    //@ts-ignore
    const onDragEnd = (event)=>{
        const sprite = event.currentTarget;
        sprite.alpha = 1;
        sprite.dragging = false;
        sprite.data = null;
    };
    //@ts-ignore
    const onDragMove = (event)=>{
        const sprite = event.currentTarget;
        if (sprite.dragging) {
            const newPosition = sprite.data.getLocalPosition(sprite.parent);
            sprite.x = newPosition.x;
            sprite.y = newPosition.y;
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pixi_react__WEBPACK_IMPORTED_MODULE_1__.Stage, {
        width: width,
        height: height,
        options: {
            autoDensity: true,
            backgroundColor: 0xffffff
        },
        onMount: (app)=>{
            app.renderer.addSystem(_pixi_events__WEBPACK_IMPORTED_MODULE_2__.EventSystem, "events2");
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pixi_react__WEBPACK_IMPORTED_MODULE_1__.Sprite, {
                image: "./img/nike.png",
                x: width / 3 * 2,
                y: height / 2,
                scale: 0.1,
                anchor: 0.5,
                interactive: true,
                pointerdown: onDragStart,
                pointerup: onDragEnd,
                pointerupoutside: onDragEnd,
                pointermove: onDragMove
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pixi_react__WEBPACK_IMPORTED_MODULE_1__.Sprite, {
                image: "./img/tv.png",
                x: width / 3,
                y: height / 3 * 2,
                scale: 0.09,
                anchor: 0.5,
                interactive: true,
                pointerdown: onDragStart,
                pointerup: onDragEnd,
                pointerupoutside: onDragEnd,
                pointermove: onDragMove
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pixi_react__WEBPACK_IMPORTED_MODULE_1__.Sprite, {
                image: "./img/smile.png",
                x: width / 3,
                y: height / 3,
                scale: 0.08,
                anchor: 0.5,
                interactive: true,
                pointerdown: onDragStart,
                pointerup: onDragEnd,
                pointerupoutside: onDragEnd,
                pointermove: onDragMove
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;