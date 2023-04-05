"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Page),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/components/dom/Header.tsx

const Header = ({ title , info  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full fixed py-2 px-4 h-fit border border-black text-black rounded-3xl flex flex-row justify-between items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-xl font-medium",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-2xl font-medium",
                children: info
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./src/pages/index.tsx




const Scene = dynamic_default()(()=>__webpack_require__.e(/* import() */ 780).then(__webpack_require__.bind(__webpack_require__, 780)).then((mod)=>mod.Scene), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "@/components/canvas/Scene"
        ]
    }
});
function Page(props) {
    const [windowSize, setWindowSize] = (0,external_react_.useState)([
         false ? 0 : null,
         false ? 0 : null
    ]);
    const width = windowSize[0];
    const height = windowSize[1];
    (0,external_react_.useEffect)(()=>{
        const handleWindowResize = ()=>{
            setWindowSize([
                window.innerWidth,
                window.innerHeight
            ]);
        };
        window.addEventListener("resize", handleWindowResize);
        return ()=>{
            window.removeEventListener("resize", handleWindowResize);
        };
    });
    console.log(width, height);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                title: "PIXI.JS",
                info: "IT'S DEMO"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Scene, {
                width: width,
                height: height
            })
        ]
    });
}
async function getStaticProps() {
    return {
        props: {
            title: "SEJIN OH"
        }
    };
}


/***/ }),

/***/ 254:
/***/ ((module) => {

module.exports = require("@pixi/react");

/***/ }),

/***/ 832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 837:
/***/ ((module) => {

module.exports = import("@pixi/events");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152], () => (__webpack_exec__(777)));
module.exports = __webpack_exports__;

})();