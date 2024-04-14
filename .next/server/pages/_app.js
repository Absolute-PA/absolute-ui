(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2564:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MainLayout)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4243);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_antHelpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2345);
/* harmony import */ var _utils_pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8340);
/* harmony import */ var _features_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3640);
/* harmony import */ var _features_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8746);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3377);
/* harmony import */ var _store_api_setting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8366);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__, _utils_pages__WEBPACK_IMPORTED_MODULE_4__, _features_settings__WEBPACK_IMPORTED_MODULE_5__, _features_auth__WEBPACK_IMPORTED_MODULE_6__, _store__WEBPACK_IMPORTED_MODULE_7__, _store_api_setting__WEBPACK_IMPORTED_MODULE_8__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__]);
([_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__, _utils_pages__WEBPACK_IMPORTED_MODULE_4__, _features_settings__WEBPACK_IMPORTED_MODULE_5__, _features_auth__WEBPACK_IMPORTED_MODULE_6__, _store__WEBPACK_IMPORTED_MODULE_7__, _store_api_setting__WEBPACK_IMPORTED_MODULE_8__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }












const {
  Header,
  Content,
  Footer,
  Sider
} = antd__WEBPACK_IMPORTED_MODULE_2__.Layout;

const StyledSider = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(Sider,  true ? {
  target: "e1a5ijdq2"
} : 0)( true ? {
  name: "1482z8d",
  styles: "--tw-bg-opacity:1 !important;background-color:rgb(255 255 255 / var(--tw-bg-opacity)) !important;text-align:center; .ant-layout-sider-trigger{--tw-bg-opacity:1 !important;background-color:rgb(255 255 255 / var(--tw-bg-opacity)) !important; color:#FF7F00!important;}"
} : 0);

const StyledMenuWrapper = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  true ? {
  target: "e1a5ijdq1"
} : 0)( true ? {
  name: "106t15n",
  styles: ".ant-menu-item{font-family:'Nunito',sans-serif!important;}.ant-menu-item-selected{color:#fff!important;background-color:#ff7f00!important;}"
} : 0);

const StyledLayout = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__.Layout,  true ? {
  target: "e1a5ijdq0"
} : 0)( true ? {
  name: "8fvpkj",
  styles: "background:linear-gradient(0.4turn, #fef3e8, #fff, #f4ecff)!important"
} : 0);

var _ref =  true ? {
  name: "1uiai01",
  styles: "min-height:100vh"
} : 0;

var _ref2 =  true ? {
  name: "1ggzhur",
  styles: "display:flex;height:64px;align-items:center"
} : 0;

var _ref3 =  true ? {
  name: "1i6r44a",
  styles: "--tw-bg-opacity:1;background-color:rgb(242 243 245 / var(--tw-bg-opacity))"
} : 0;

var _ref4 =  true ? {
  name: "1xqlehg",
  styles: "background-color:transparent !important"
} : 0;

var _ref5 =  true ? {
  name: "7hlr7u",
  styles: "display:flex;height:100%;flex-direction:row;align-items:center;justify-content:space-between"
} : 0;

var _ref6 =  true ? {
  name: "gke1dx",
  styles: "margin-top:0.5rem;font-weight:700"
} : 0;

var _ref7 =  true ? {
  name: "1d7vfed",
  styles: "height:100%;overflow-y:auto;padding:1.25rem"
} : 0;

const MainLayout = ({
  children
}) => {
  const {
    0: collapsed,
    1: setCollapsed
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    data: currentUser
  } = (0,_store__WEBPACK_IMPORTED_MODULE_7__/* .useGetCurrentUserQuery */ .XC)();
  const {
    data: setting
  } = (0,_store_api_setting__WEBPACK_IMPORTED_MODULE_8__/* .useGetSettingQuery */ .Rf)();
  const pageId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => router.pathname.split('/')[1] || 'home', [router.pathname]);
  const items = _utils_pages__WEBPACK_IMPORTED_MODULE_4__/* .NAVIGATION_PAGES.filter */ .F.filter(item => item.roles ? item.roles.some(r => currentUser?.roles.includes(r)) : true).map(page => (0,_utils_antHelpers__WEBPACK_IMPORTED_MODULE_10__/* .getMenuItem */ .L)({
    label: page.pageName,
    key: page.id,
    icon: page.icon
  }));

  const onClick = e => {
    router.push(_utils_pages__WEBPACK_IMPORTED_MODULE_4__/* .NAVIGATION_PAGES.find */ .F.find(page => page.id === e.key)?.url ?? '/');
  };

  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Layout, {
    css: _ref,
    children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(StyledSider, {
      collapsible: true,
      collapsed: collapsed,
      onCollapse: value => setCollapsed(value),
      breakpoint: "xs",
      onBreakpoint: broken => setCollapsed(broken),
      width: 250,
      children: [collapsed ? _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
        css: _ref2,
        children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Image, {
          preview: false,
          alt: "Logo",
          src: "/img/absolute-pa-logo-simple.png"
        })
      }) : _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Image, {
        height: 64,
        preview: false,
        alt: "Logo",
        src: "/img/absolute-pa-logo.png"
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(StyledMenuWrapper, {
        children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {
          onClick: onClick,
          selectedKeys: [pageId],
          mode: "inline",
          items: items
        })
      })]
    }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(StyledLayout, {
      css: _ref3,
      children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Header, {
        css: _ref4,
        children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          css: _ref5,
          children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            style: {
              lineHeight: '14px'
            },
            children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              children: ["Licensed to ", setting?.schoolId]
            }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
              css: _ref6,
              children: currentUser?.username
            })]
          }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_features_auth__WEBPACK_IMPORTED_MODULE_6__/* .LogoutButton */ .sv, {
            type: "text"
          })]
        })
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_features_settings__WEBPACK_IMPORTED_MODULE_5__/* .LicenseKeyBanner */ .Mz, {
        banner: true
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Content, {
        css: _ref7,
        children: children
      })]
    })]
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8372:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _MainLayout__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _MainLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2564);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainLayout__WEBPACK_IMPORTED_MODULE_0__]);
_MainLayout__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3376:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2727);
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3377);
/* harmony import */ var _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2580);
/* harmony import */ var _styles_themeConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9469);
/* harmony import */ var _features_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8372);
/* harmony import */ var _features_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8746);
/* harmony import */ var _utils_pages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8340);
/* harmony import */ var antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9107);
/* harmony import */ var antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_5__, _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_6__, _features_layout__WEBPACK_IMPORTED_MODULE_8__, _features_auth__WEBPACK_IMPORTED_MODULE_9__, _utils_pages__WEBPACK_IMPORTED_MODULE_10__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__]);
([_store__WEBPACK_IMPORTED_MODULE_5__, _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_6__, _features_layout__WEBPACK_IMPORTED_MODULE_8__, _features_auth__WEBPACK_IMPORTED_MODULE_9__, _utils_pages__WEBPACK_IMPORTED_MODULE_10__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
const _excluded = ["Component"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
















function App(_ref) {
  let {
    Component
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const {
    store,
    props
  } = _store__WEBPACK_IMPORTED_MODULE_5__/* .storeWrapper.useWrappedStore */ .CO.useWrappedStore(rest);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("main", {
    className: "app",
    children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("title", {
        children: "AbsolutePA"
      })
    }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_6__/* .GlobalStyles */ .n, {}), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_0__.Provider, {
      store: store,
      children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.ConfigProvider, {
        theme: {
          token: _styles_themeConfig__WEBPACK_IMPORTED_MODULE_7__/* .themeToken */ .U
        },
        children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_2__.StyleProvider, {
          hashPriority: "high",
          children: _utils_pages__WEBPACK_IMPORTED_MODULE_10__/* .NON_PROTECTED_PAGES.includes */ .e.includes(router.pathname) ? _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(Component, _objectSpread({}, props.pageProps)) : _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_features_auth__WEBPACK_IMPORTED_MODULE_9__/* .ProtectedPage */ .ZF, {
            children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_features_layout__WEBPACK_IMPORTED_MODULE_8__/* .MainLayout */ .Z, {
              children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(Component, _objectSpread({}, props.pageProps))
            })
          })
        })
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2580:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ GlobalStyles)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3139);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react__WEBPACK_IMPORTED_MODULE_0__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__]);
([_emotion_react__WEBPACK_IMPORTED_MODULE_0__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }




var _ref =  true ? {
  name: "7g2iyk",
  styles: "*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:var(--tw-empty,/*!*/ /*!*/);--tw-pan-y:var(--tw-empty,/*!*/ /*!*/);--tw-pinch-zoom:var(--tw-empty,/*!*/ /*!*/);--tw-scroll-snap-strictness:proximity;--tw-ordinal:var(--tw-empty,/*!*/ /*!*/);--tw-slashed-zero:var(--tw-empty,/*!*/ /*!*/);--tw-numeric-figure:var(--tw-empty,/*!*/ /*!*/);--tw-numeric-spacing:var(--tw-empty,/*!*/ /*!*/);--tw-numeric-fraction:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(94 129 244 / 0.5);--tw-blur:var(--tw-empty,/*!*/ /*!*/);--tw-brightness:var(--tw-empty,/*!*/ /*!*/);--tw-contrast:var(--tw-empty,/*!*/ /*!*/);--tw-grayscale:var(--tw-empty,/*!*/ /*!*/);--tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/);--tw-invert:var(--tw-empty,/*!*/ /*!*/);--tw-saturate:var(--tw-empty,/*!*/ /*!*/);--tw-sepia:var(--tw-empty,/*!*/ /*!*/);--tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-blur:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-brightness:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-contrast:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-grayscale:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-hue-rotate:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-invert:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-opacity:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-saturate:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-sepia:var(--tw-empty,/*!*/ /*!*/);}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:var(--tw-empty,/*!*/ /*!*/);--tw-pan-y:var(--tw-empty,/*!*/ /*!*/);--tw-pinch-zoom:var(--tw-empty,/*!*/ /*!*/);--tw-scroll-snap-strictness:proximity;--tw-ordinal:var(--tw-empty,/*!*/ /*!*/);--tw-slashed-zero:var(--tw-empty,/*!*/ /*!*/);--tw-numeric-figure:var(--tw-empty,/*!*/ /*!*/);--tw-numeric-spacing:var(--tw-empty,/*!*/ /*!*/);--tw-numeric-fraction:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(94 129 244 / 0.5);--tw-blur:var(--tw-empty,/*!*/ /*!*/);--tw-brightness:var(--tw-empty,/*!*/ /*!*/);--tw-contrast:var(--tw-empty,/*!*/ /*!*/);--tw-grayscale:var(--tw-empty,/*!*/ /*!*/);--tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/);--tw-invert:var(--tw-empty,/*!*/ /*!*/);--tw-saturate:var(--tw-empty,/*!*/ /*!*/);--tw-sepia:var(--tw-empty,/*!*/ /*!*/);--tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-blur:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-brightness:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-contrast:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-grayscale:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-hue-rotate:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-invert:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-opacity:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-saturate:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-sepia:var(--tw-empty,/*!*/ /*!*/);}"
} : 0;

const _GlobalStyles = () => _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_0__.Global, {
  styles: _ref
});






const customStyles =  true ? {
  name: "1kawr7x",
  styles: "@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500&display=swap');{}body{font-size:var(--fontSizeBase);line-height:var(--lineHeightBase);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale; div{font-family:'Nunito',sans-serif;}}#__next,.app{height:100%; &>section{height:100%;;}}svg{vertical-align:baseline!important;}"
} : 0;
const GlobalStyles = () => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
  children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_GlobalStyles, {}), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_0__.Global, {
    styles: customStyles
  })]
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ themeToken)
/* harmony export */ });
/* unused harmony export rootCssVar */
const pxToNumber = px => Number(px.replace('px', ''));

const rootCssVar = {
  // sizes
  '--borderRadiusSM': '4px',
  '--borderRadius': '8px',
  '--fontSizeXS': '12px',
  '--fontSizeSM': '14px',
  '--fontSizeBase': '16px',
  '--fontSizeLG': '18px',
  '--fontSizeXL': '20px',
  '--lineHeightXS': '14px',
  '--lineHeightBase': '22px',
  '--lineHeightLG': '27x',
  // colors
  '--colorPrimary': '#4082ff',
  '--colorPrimaryBg': '#EFF2FE',
  '--colorSecondary': '#E9E9EE',
  '--controlItemBgHover': 'rgba(94,129,244,0.1)',
  '--colorTextBase': '#1c1d21',
  '--colorTextLabel': '#6B6F79',
  '--colorSuccess': '#52c41a',
  '--colorError': '#ff4d4f',
  '--colorWarning': '#ffb800',
  '--colorInfo': '#4082ff'
};
const themeToken = {
  // antd sizes
  borderRadiusSM: pxToNumber(rootCssVar['--borderRadiusSM']),
  borderRadius: pxToNumber(rootCssVar['--borderRadius']),
  fontSizeBase: pxToNumber(rootCssVar['--fontSizeSM']),
  // antd colors
  colorPrimary: rootCssVar['--colorPrimary'],
  colorPrimaryBg: rootCssVar['--colorPrimaryBg'],
  controlItemBgHover: rootCssVar['--controlItemBgHover'],
  colorTextBase: rootCssVar['--colorTextBase'],
  colorTextLabel: rootCssVar['--colorTextLabel'],
  colorSuccess: rootCssVar['--colorSuccess'],
  colorError: rootCssVar['--colorError'],
  colorWarning: rootCssVar['--colorWarning'],
  colorInfo: rootCssVar['--colorInfo']
};

/***/ }),

/***/ 2345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ getMenuItem)
/* harmony export */ });
const getMenuItem = ({
  key,
  label,
  children,
  icon,
  disabled
}) => {
  const item = {
    key,
    children,
    label,
    icon,
    disabled
  };
  return item;
};

/***/ }),

/***/ 8340:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ NAVIGATION_PAGES),
/* harmony export */   "e": () => (/* binding */ NON_PROTECTED_PAGES)
/* harmony export */ });
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4563);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const NAVIGATION_PAGES = [{
  id: 'home',
  url: '/',
  pageName: 'Dashboard',
  icon: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__.HomeFilled, {})
}, {
  id: 'schedule',
  url: '/schedule',
  pageName: 'Schedule',
  icon: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__.CalendarOutlined, {})
}, {
  id: 'sound',
  url: '/sound',
  pageName: 'Sound Management',
  icon: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__.BellFilled, {})
}, {
  id: 'music',
  url: '/music',
  pageName: 'Music Management',
  icon: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__.PlayCircleOutlined, {})
}, {
  id: 'livetalk',
  url: '/liveTalk',
  pageName: 'Live Paging',
  icon: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faPhoneVolume
  })
}, {
  id: 'text-to-audio',
  url: '/text-to-audio',
  pageName: 'Text to audio',
  icon: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__.MessageOutlined, {})
}, {
  id: 'voice-record',
  url: '/voice-record',
  pageName: 'Voice Record',
  icon: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faMicrophone
  })
}, {
  id: 'user',
  url: '/user',
  pageName: 'User Management',
  icon: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faUsers
  }),
  roles: ['master', 'admin']
}, {
  id: 'settings',
  url: '/settings',
  pageName: 'Settings',
  icon: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faGear
  })
}];
const NON_PROTECTED_PAGES = ['/login', '/register'];
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9107:
/***/ (() => {



/***/ }),

/***/ 2727:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/cssinjs");

/***/ }),

/***/ 7066:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 4335:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ 5725:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ 5599:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isArray");

/***/ }),

/***/ 5648:
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 3139:
/***/ ((module) => {

"use strict";
module.exports = import("@emotion/react");;

/***/ }),

/***/ 7101:
/***/ ((module) => {

"use strict";
module.exports = import("@emotion/react/jsx-runtime");;

/***/ }),

/***/ 4243:
/***/ ((module) => {

"use strict";
module.exports = import("@emotion/styled/base");;

/***/ }),

/***/ 4563:
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,399,746,640], () => (__webpack_exec__(3376)));
module.exports = __webpack_exports__;

})();