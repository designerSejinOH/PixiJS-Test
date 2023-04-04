(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./src/config.tsx


const titleDefault = "SEJIN OH";
const url = "https://designersejinoh.github.io";
const description = "PIXI JS";
const author = "Author";
function Header({ title =titleDefault  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                charSet: "utf-8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "language",
                content: "english"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                httpEquiv: "content-type",
                content: "text/html"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "author",
                content: author
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "designer",
                content: author
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "publisher",
                content: author
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "keywords",
                content: "Designer, Graphic Designer, Interaction, Interactive Designer, UI, UX, User Interface, User Experience, Web, Web Designer, Web Development, Web Developer, Front End, Front End Developer, Front End Development, Frontend, Frontend Developer, Frontend Development, React, ReactJS, React.js, React.js Developer, React.js Development, NextJS, Next.js, Next.js Developer, Next.js Development, NextJS Developer, NextJS Development, ThreeJS, Three.js, Three.js Developer, Three.js Development, ThreeJS Developer, ThreeJS Development, ThreeJS Starter, Three.js Starter, Three.js Starter Kit, ThreeJS Starter Kit, React Three Fiber, React Three Fiber Starter, React Three Fiber Starter Kit"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "robots",
                content: "index,follow"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "distribution",
                content: "web"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "og:title",
                content: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "og:type",
                content: "site"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "og:url",
                content: url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "og:image",
                content: "/icons/share.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "og:site_name",
                content: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "og:description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                href: "/icons/apple-touch-icon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "16x16",
                href: "/icons/favicon-16x16.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "32x32",
                href: "/icons/favicon-32x32.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/icons/apple-touch-icon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "manifest",
                href: "/manifest.json"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "mask-icon",
                color: "#000000",
                href: "/icons/safari-pinned-tab.svg"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-startup-image",
                href: "/startup.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "viewport",
                content: "width=device-width, minimum-scale=1, initial-scale=1.0"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "theme-color",
                content: "#000"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "shortcut icon",
                href: "/icons/favicon.ico"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:card",
                content: "summary"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:site",
                content: "@onirenaud"
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/styles/index.css
var styles = __webpack_require__(729);
;// CONCATENATED MODULE: ./src/components/dom/Layout.tsx


const Layout = /*#__PURE__*/ (0,external_react_.forwardRef)(({ children , ...props }, ref)=>{
    const localRef = (0,external_react_.useRef)();
    (0,external_react_.useImperativeHandle)(ref, ()=>localRef.current);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        ...props,
        ref: localRef,
        className: "flex flex-col w-screen h-full",
        children: children
    });
});
Layout.displayName = "Layout";
/* harmony default export */ const dom_Layout = (Layout);

;// CONCATENATED MODULE: ./src/pages/_app.tsx





function App({ Component , pageProps ={
    title: "SEJIN OH"
}  }) {
    const ref = (0,external_react_.useRef)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                title: pageProps.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(dom_Layout, {
                ref: ref,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}


/***/ }),

/***/ 729:
/***/ (() => {



/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(888));
module.exports = __webpack_exports__;

})();