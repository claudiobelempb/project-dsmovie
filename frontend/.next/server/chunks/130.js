exports.id = 130;
exports.ids = [130];
exports.modules = {

/***/ 5019:
/***/ ((module) => {

// Exports
module.exports = {
	"brand__img": "styles_brand__img__MS_8M"
};


/***/ }),

/***/ 6360:
/***/ ((module) => {

// Exports
module.exports = {
	"brand__text": "styles_brand__text__xtBw_"
};


/***/ }),

/***/ 6114:
/***/ ((module) => {

// Exports
module.exports = {
	"button__container": "styles_button__container__aCCFx",
	"button__container_full": "styles_button__container_full__f3cRF",
	"button__container_large": "styles_button__container_large__GZyzb",
	"button__container_medium": "styles_button__container_medium__bhL30",
	"button__container_small": "styles_button__container_small__zM1DW",
	"button__container_link": "styles_button__container_link__SUfRP",
	"button__container_close": "styles_button__container_close__g8enV",
	"button__container_icon": "styles_button__container_icon__z7DPm",
	"button__default": "styles_button__default__atAUX"
};


/***/ }),

/***/ 6176:
/***/ ((module) => {

// Exports
module.exports = {
	"header__container": "styles_header__container__8C8W5",
	"header__container_perfil": "styles_header__container_perfil__f4hkr"
};


/***/ }),

/***/ 6204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ ButtonDefault)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6114);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const ButtonDefault = ({ size , title , color , bgcolor , children , className , href , disabled , ...props })=>{
    const isColor = color ?? '';
    const isBgColor = bgcolor ?? '';
    const isHref = href ?? '';
    switch(size){
        case 'full':
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button__container)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button__container_full)}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    onClick: props.onClick,
                    type: props.type ? props.type : 'button',
                    className: `${isBgColor} ${isColor} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button__container_full)} ${className}`,
                    disabled: disabled,
                    children: [
                        title ? title : '',
                        children
                    ]
                })
            }));
        case 'large':
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button__container)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button__container_large)}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    onClick: props.onClick,
                    type: props.type ? props.type : 'button',
                    className: `${isBgColor} ${isColor} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button__default_large)} ${className}`,
                    disabled: disabled,
                    children: [
                        title ? title : '',
                        children
                    ]
                })
            }));
        case 'medium':
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button__container)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button__container_medium)}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    onClick: props.onClick,
                    type: props.type ? props.type : 'button',
                    className: `${isBgColor} ${isColor} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button__container_medium)} ${className}`,
                    disabled: disabled,
                    children: [
                        title ? title : '',
                        children
                    ]
                })
            }));
        case 'small':
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button__container)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button__container_small)}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    onClick: props.onClick,
                    type: props.type ? props.type : 'button',
                    className: `${isBgColor} ${isColor} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button__container_small)} ${className}`,
                    disabled: disabled,
                    children: [
                        children,
                        title ? title : ''
                    ]
                })
            }));
        case 'close':
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button__container)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button__container_close)}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    onClick: props.onClick,
                    type: props.type ? props.type : 'button',
                    className: `${isBgColor} ${isColor} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button__container_close)} ${className}`,
                    disabled: disabled,
                    children: [
                        children,
                        title ? title : ''
                    ]
                })
            }));
        case 'icon':
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button__container)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button__container_icon)}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    onClick: props.onClick,
                    type: props.type ? props.type : 'button',
                    className: `${isBgColor} ${isColor} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button__default_icon)} ${className}`,
                    disabled: disabled,
                    children: [
                        children,
                        title ? title : ''
                    ]
                })
            }));
        case 'link':
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `
           ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button__container)}
            ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button__container_link)}
          `,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: isHref,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: `${isBgColor} ${isColor} ${className}`,
                        children: [
                            title ? title : '',
                            children
                        ]
                    })
                })
            }));
        default:
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button__container)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button__container_medium)}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    onClick: props.onClick,
                    type: props.type ? props.type : 'button',
                    className: `${isBgColor} ${isColor} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button__default_full)} ${className}`,
                    disabled: disabled,
                    children: [
                        title ? title : '',
                        children
                    ]
                })
            }));
    }
};



/***/ }),

/***/ 7604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O": () => (/* binding */ HeaderDsMovie)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: ./src/components/HeaderDsMovie/styles.module.scss
var styles_module = __webpack_require__(6176);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/components/BrandDefault/BrandImg/styles.module.scss
var BrandImg_styles_module = __webpack_require__(5019);
var BrandImg_styles_module_default = /*#__PURE__*/__webpack_require__.n(BrandImg_styles_module);
;// CONCATENATED MODULE: ./src/components/BrandDefault/BrandImg/index.tsx



const BrandImg = ({ href  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `${(BrandImg_styles_module_default()).brand__img}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
            href: href,
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            })
        })
    }));
};


// EXTERNAL MODULE: ./src/components/BrandDefault/BrandText/styles.module.scss
var BrandText_styles_module = __webpack_require__(6360);
var BrandText_styles_module_default = /*#__PURE__*/__webpack_require__.n(BrandText_styles_module);
;// CONCATENATED MODULE: ./src/components/BrandDefault/BrandText/index.tsx



const BrandText = ({ href , title  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `${(BrandText_styles_module_default()).brand__text}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
            href: href,
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: title
                })
            })
        })
    }));
};


;// CONCATENATED MODULE: ./src/components/BrandDefault/index.tsx



const BrandDefault = ({ ...props })=>{
    switch(props.type){
        case "brand-img":
            return(/*#__PURE__*/ jsx_runtime_.jsx(BrandImg, {
                href: props.href
            }));
        case "brand-text":
            return(/*#__PURE__*/ jsx_runtime_.jsx(BrandText, {
                title: props.title ? props.title : "Brand Default",
                href: props.href ? props.href : "/"
            }));
        default:
            return(/*#__PURE__*/ jsx_runtime_.jsx(BrandText, {
                href: props.href ? props.href : "/",
                title: props.title ? props.title : "Brand Default"
            }));
    }
};


// EXTERNAL MODULE: ./src/components/ButtonDefault/index.tsx
var ButtonDefault = __webpack_require__(6204);
;// CONCATENATED MODULE: ./src/components/HeaderDsMovie/index.tsx







const HeaderDsMovie = ({ title  })=>{
    const { 0: isLogin , 1: setIsLogin  } = (0,external_react_.useState)(false);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `container ${(styles_module_default()).header__container}`,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "content grid grid_2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(BrandDefault, {
                                href: "/",
                                type: "brand-text",
                                title: "DSMovie"
                            }),
                            isLogin ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `${(styles_module_default()).header__container_perfil}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonDefault/* ButtonDefault */.t, {
                                    size: "small",
                                    type: "button",
                                    title: "Ol\xe1 Matheus",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaTimes, {
                                        width: 32,
                                        height: 32
                                    })
                                })
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(ButtonDefault/* ButtonDefault */.t, {
                                size: "small",
                                type: "button",
                                title: "Entrar com github",
                                className: "dflex ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaGithub, {
                                    width: 32,
                                    height: 32
                                })
                            })
                        ]
                    })
                })
            })
        ]
    }));
};



/***/ }),

/***/ 8469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ api)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080/api';
const api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: BASE_URL
});


/***/ })

};
;