"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 5539:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyDocument)
/* harmony export */ });
/* harmony import */ var newrelic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1711);
/* harmony import */ var newrelic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(newrelic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6859);
/* harmony import */ var _emotion_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6097);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_server__WEBPACK_IMPORTED_MODULE_3__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__]);
([_emotion_server__WEBPACK_IMPORTED_MODULE_3__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







// https://codesandbox.io/s/wmrk2?file=/pages/_document.js
class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_2__["default"] {
  static async getInitialProps(ctx) {
    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_2__["default"].getInitialProps(ctx);
    const page = await ctx.renderPage();
    const styles = (0,_emotion_server__WEBPACK_IMPORTED_MODULE_3__.extractCritical)(page.html); // Property 'agent' does not exist on type 'typeof import("/Users/tuan/Code/AbsolutePA/nodeweb-master-ui/node_modules/@types/newrelic/index")'.
    // @ts-ignore

    if (!newrelic__WEBPACK_IMPORTED_MODULE_0___default().agent.collector.isConnected()) {
      await new Promise(resolve => {
        // @ts-ignore
        newrelic__WEBPACK_IMPORTED_MODULE_0___default().agent.on('connected', resolve);
      });
    }

    const browserTimingHeader = newrelic__WEBPACK_IMPORTED_MODULE_0___default().getBrowserTimingHeader({
      hasToRemoveScriptWrapper: true,
      // Argument of type '{ hasToRemoveScriptWrapper: true; allowTransactionlessInjection: boolean; }' is not assignable to parameter of type '{ nonce?: string | undefined; hasToRemoveScriptWrapper?: boolean | undefined; }'.
      // @ts-ignore
      allowTransactionlessInjection: true
    });
    return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, initialProps), page), styles), {}, {
      browserTimingHeader
    });
  }

  render() {
    return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {
      lang: "en",
      children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {
        children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("style", {
          "data-emotion-css": this.props.ids?.join(' '),
          dangerouslySetInnerHTML: {
            __html: this.props.css || ''
          }
        }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("script", {
          type: "text/javascript",
          dangerouslySetInnerHTML: {
            __html: this.props.browserTimingHeader
          }
        })]
      }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("body", {
        children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {})]
      })]
    });
  }

}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1711:
/***/ ((module) => {

module.exports = require("newrelic");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7101:
/***/ ((module) => {

module.exports = import("@emotion/react/jsx-runtime");;

/***/ }),

/***/ 6097:
/***/ ((module) => {

module.exports = import("@emotion/server");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [859], () => (__webpack_exec__(5539)));
module.exports = __webpack_exports__;

})();