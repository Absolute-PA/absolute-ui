"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/text-to-audio",{

/***/ "./features/message/VoiceMessageUpdateVolume.tsx":
/*!*******************************************************!*\
  !*** ./features/message/VoiceMessageUpdateVolume.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"VoiceMessageUpdateVolume\": function() { return /* binding */ VoiceMessageUpdateVolume; }\n/* harmony export */ });\n/* harmony import */ var _Users_tienbuiminh_Documents_projects_nodeweb_master_ui_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_tienbuiminh_Documents_projects_nodeweb_master_ui_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _store_api_sound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/api/sound */ \"./store/api/sound/index.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n\n\n\nvar _jsxFileName = \"/Users/tienbuiminh/Documents/projects/nodeweb-master-ui/features/message/VoiceMessageUpdateVolume.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return \"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\"; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_Users_tienbuiminh_Documents_projects_nodeweb_master_ui_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\nvar marks = {\n  0: '0',\n  50: '50',\n  100: {\n    style: {\n      color: '#f50'\n    },\n    label: '100'\n  }\n};\n\nvar _ref =  false ? 0 : {\n  name: \"hraydf-VoiceMessageUpdateVolume\",\n  styles: \"display:flex;align-items:center;justify-content:center;label:VoiceMessageUpdateVolume;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref2 =  false ? 0 : {\n  name: \"1916753-VoiceMessageUpdateVolume\",\n  styles: \"width:100%;label:VoiceMessageUpdateVolume;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref3 =  false ? 0 : {\n  name: \"srptir-VoiceMessageUpdateVolume\",\n  styles: \"margin-left:1rem;label:VoiceMessageUpdateVolume;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar VoiceMessageUpdateVolume = function VoiceMessageUpdateVolume(voiceData) {\n  _s();\n\n  var _useUpdateVolumeMutat = (0,_store_api_sound__WEBPACK_IMPORTED_MODULE_3__.useUpdateVolumeMutation)(),\n      _useUpdateVolumeMutat2 = (0,_Users_tienbuiminh_Documents_projects_nodeweb_master_ui_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useUpdateVolumeMutat, 1),\n      updateTextToAudio = _useUpdateVolumeMutat2[0];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(voiceData.volume),\n      volume = _useState[0],\n      setVolume = _useState[1];\n\n  var handleUpdateVolume = function handleUpdateVolume(updatedVolume) {\n    setVolume(updatedVolume);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var delayUpdateVolume = setTimeout(function () {\n      updateTextToAudio({\n        id: voiceData.id,\n        data: _objectSpread(_objectSpread({}, voiceData), {}, {\n          volume: volume\n        })\n      });\n    }, 500);\n    return function () {\n      return clearTimeout(delayUpdateVolume);\n    };\n  }, [volume]);\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    css: _ref,\n    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Slider, {\n      css: _ref2,\n      defaultValue: 50,\n      onChange: handleUpdateVolume,\n      value: volume,\n      marks: marks\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      css: _ref3,\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Badge, {\n        count: volume,\n        color: \"rgb(45, 183, 245)\",\n        showZero: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(VoiceMessageUpdateVolume, \"hOw/Zg3WmzB300u919+gytyGRPI=\", false, function () {\n  return [_store_api_sound__WEBPACK_IMPORTED_MODULE_3__.useUpdateVolumeMutation];\n});\n\n_c = VoiceMessageUpdateVolume;\n\nvar _c;\n\n$RefreshReg$(_c, \"VoiceMessageUpdateVolume\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZWF0dXJlcy9tZXNzYWdlL1ZvaWNlTWVzc2FnZVVwZGF0ZVZvbHVtZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUtBLElBQU1NLEtBQWtCLEdBQUc7RUFDekIsR0FBRyxHQURzQjtFQUV6QixJQUFJLElBRnFCO0VBR3pCLEtBQUs7SUFDSEMsS0FBSyxFQUFFO01BQ0xDLEtBQUssRUFBRTtJQURGLENBREo7SUFJSEMsS0FBSyxFQUFFO0VBSko7QUFIb0IsQ0FBM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV08sSUFBTUMsd0JBQTZDLEdBQUcsU0FBaERBLHdCQUFnRCxDQUFDQyxTQUFELEVBQWU7RUFBQTs7RUFDMUUsNEJBQTRCTix5RUFBdUIsRUFBbkQ7RUFBQTtFQUFBLElBQU9PLGlCQUFQOztFQUNBLGdCQUE0QlYsK0NBQVEsQ0FBQ1MsU0FBUyxDQUFDRSxNQUFYLENBQXBDO0VBQUEsSUFBT0EsTUFBUDtFQUFBLElBQWVDLFNBQWY7O0VBQ0EsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxhQUFELEVBQTJCO0lBQ3BERixTQUFTLENBQUNFLGFBQUQsQ0FBVDtFQUNELENBRkQ7O0VBR0FmLGdEQUFTLENBQUMsWUFBTTtJQUNkLElBQU1nQixpQkFBaUIsR0FBR0MsVUFBVSxDQUFDLFlBQU07TUFDekNOLGlCQUFpQixDQUFDO1FBQUVPLEVBQUUsRUFBRVIsU0FBUyxDQUFDUSxFQUFoQjtRQUFvQkMsSUFBSSxrQ0FBT1QsU0FBUDtVQUFrQkUsTUFBTSxFQUFOQTtRQUFsQjtNQUF4QixDQUFELENBQWpCO0lBQ0QsQ0FGbUMsRUFFakMsR0FGaUMsQ0FBcEM7SUFHQSxPQUFPO01BQUEsT0FBTVEsWUFBWSxDQUFDSixpQkFBRCxDQUFsQjtJQUFBLENBQVA7RUFDRCxDQUxRLEVBS04sQ0FBQ0osTUFBRCxDQUxNLENBQVQ7RUFPQSxPQUNFO0lBQUE7SUFBQSxXQUNFLHVFQUFDLHdDQUFEO01BQUE7TUFFRSxZQUFZLEVBQUUsRUFGaEI7TUFHRSxRQUFRLEVBQUVFLGtCQUhaO01BSUUsS0FBSyxFQUFFRixNQUpUO01BS0UsS0FBSyxFQUFFUDtJQUxUO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FERixFQVFFO01BQUE7TUFBQSxVQUNFLHVFQUFDLHVDQUFEO1FBQU8sS0FBSyxFQUFFTyxNQUFkO1FBQXNCLEtBQUssRUFBQyxtQkFBNUI7UUFBZ0QsUUFBUTtNQUF4RDtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxTQVJGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBY0QsQ0EzQk07O0dBQU1IO1VBQ2lCTDs7O0tBRGpCSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9mZWF0dXJlcy9tZXNzYWdlL1ZvaWNlTWVzc2FnZVVwZGF0ZVZvbHVtZS50c3g/Y2Y5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQb3Bjb25maXJtLCBTbGlkZXIsIEJhZGdlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgdHlwZSB7IFNsaWRlck1hcmtzIH0gZnJvbSAnYW50ZC9lcy9zbGlkZXInO1xuaW1wb3J0IHsgdXNlVXBkYXRlVm9sdW1lTXV0YXRpb24gfSBmcm9tICdAL3N0b3JlL2FwaS9zb3VuZCc7XG5pbXBvcnQgeyBTb3VuZENvbnRyYWN0IH0gZnJvbSAnQC90eXBlcyc7XG5pbXBvcnQgeyBWb2ljZURhdGEgfSBmcm9tICcuL1NhdmVkTWVzc2FnZXMnO1xuaW1wb3J0IHsgdXBkYXRlVGV4dFRvQXVkaW8gfSBmcm9tICdAL3N0b3JlJztcblxuY29uc3QgbWFya3M6IFNsaWRlck1hcmtzID0ge1xuICAwOiAnMCcsXG4gIDUwOiAnNTAnLFxuICAxMDA6IHtcbiAgICBzdHlsZToge1xuICAgICAgY29sb3I6ICcjZjUwJyxcbiAgICB9LFxuICAgIGxhYmVsOiAnMTAwJyxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBWb2ljZU1lc3NhZ2VVcGRhdGVWb2x1bWU6IFJlYWN0LkZDPFZvaWNlRGF0YT4gPSAodm9pY2VEYXRhKSA9PiB7XG4gIGNvbnN0IFt1cGRhdGVUZXh0VG9BdWRpb10gPSB1c2VVcGRhdGVWb2x1bWVNdXRhdGlvbigpO1xuICBjb25zdCBbdm9sdW1lLCBzZXRWb2x1bWVdID0gdXNlU3RhdGUodm9pY2VEYXRhLnZvbHVtZSk7XG4gIGNvbnN0IGhhbmRsZVVwZGF0ZVZvbHVtZSA9ICh1cGRhdGVkVm9sdW1lOiBudW1iZXIpID0+IHtcbiAgICBzZXRWb2x1bWUodXBkYXRlZFZvbHVtZSk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGVsYXlVcGRhdGVWb2x1bWUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHVwZGF0ZVRleHRUb0F1ZGlvKHsgaWQ6IHZvaWNlRGF0YS5pZCwgZGF0YTogeyAuLi52b2ljZURhdGEsIHZvbHVtZSB9IH0pO1xuICAgIH0sIDUwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dChkZWxheVVwZGF0ZVZvbHVtZSk7XG4gIH0sIFt2b2x1bWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxTbGlkZXJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgZGVmYXVsdFZhbHVlPXs1MH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVVwZGF0ZVZvbHVtZX1cbiAgICAgICAgdmFsdWU9e3ZvbHVtZX1cbiAgICAgICAgbWFya3M9e21hcmtzfVxuICAgICAgPjwvU2xpZGVyPlxuICAgICAgPGRpdiB0dz1cIm1sLTRcIj5cbiAgICAgICAgPEJhZGdlIGNvdW50PXt2b2x1bWV9IGNvbG9yPVwicmdiKDQ1LCAxODMsIDI0NSlcIiBzaG93WmVybyAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTbGlkZXIiLCJCYWRnZSIsInVzZVVwZGF0ZVZvbHVtZU11dGF0aW9uIiwibWFya3MiLCJzdHlsZSIsImNvbG9yIiwibGFiZWwiLCJWb2ljZU1lc3NhZ2VVcGRhdGVWb2x1bWUiLCJ2b2ljZURhdGEiLCJ1cGRhdGVUZXh0VG9BdWRpbyIsInZvbHVtZSIsInNldFZvbHVtZSIsImhhbmRsZVVwZGF0ZVZvbHVtZSIsInVwZGF0ZWRWb2x1bWUiLCJkZWxheVVwZGF0ZVZvbHVtZSIsInNldFRpbWVvdXQiLCJpZCIsImRhdGEiLCJjbGVhclRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./features/message/VoiceMessageUpdateVolume.tsx\n"));

/***/ })

});