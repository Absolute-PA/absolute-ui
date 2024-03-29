"use strict";
exports.id = 159;
exports.ids = [159];
exports.modules = {

/***/ 6159:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Tags),
/* harmony export */   "e": () => (/* binding */ rootApi)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_apiHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7640);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_apiHelpers__WEBPACK_IMPORTED_MODULE_1__]);
_utils_apiHelpers__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


let Tags;

(function (Tags) {
  Tags["Login"] = "Auth/Login";
  Tags["Register"] = "Auth/Register";
  Tags["CurrentUser"] = "Auth/CurrentUser";
  Tags["Stream"] = "Stream";
  Tags["TextToAudio"] = "TextToAudio";
  Tags["VoiceRecord"] = "VoiceRecord";
  Tags["ScheduleList"] = "Schedule/ScheduleList";
  Tags["ScheduleByDate"] = "Schedule/ScheduleByDate";
  Tags["UserList"] = "User/UserList";
  Tags["UpdateUser"] = "User/UpdateUser";
  Tags["DeleteUser"] = "DeleteUser";
  Tags["ResetPassword"] = "ResetPassword";
  Tags["Playlist"] = "Sound/Playlist";
  Tags["TuneList"] = "Sound/Tunelist";
  Tags["SongList"] = "Sound/Songlist";
  Tags["Setting"] = "Setting/Setting";
  Tags["History"] = "Audit/History";
})(Tags || (Tags = {}));

const rootApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
  baseQuery: (0,_utils_apiHelpers__WEBPACK_IMPORTED_MODULE_1__/* .axiosBaseQuery */ .Z1)(),
  endpoints: () => ({}),
  reducerPath: 'rootApi',
  tagTypes: [...Object.values(Tags)]
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ getBackendURL)
/* harmony export */ });
function getBackendURL() {
  return `${window.location.protocol}//${window.location.hostname}:${"8080"}`;
}

/***/ }),

/***/ 9774:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z1": () => (/* binding */ axiosBaseQuery),
/* harmony export */   "dJ": () => (/* binding */ http)
/* harmony export */ });
/* unused harmony export getAxiosInstance */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8269);
/* harmony import */ var _getBackendURL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7107);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/**
 * Get a custom axios instance which has Authorization header with access token
 * @param {string} [accessTokenKey] - name of the token in cookie
 * @param {string} [baseURL] - base url for the request
 * @returns {AxiosInstance} a custom axios instance
 */
const getAxiosInstance = (baseURL = (0,_getBackendURL__WEBPACK_IMPORTED_MODULE_2__/* .getBackendURL */ .L)(), accessTokenKey = _constants__WEBPACK_IMPORTED_MODULE_3__/* .AUTH_ACCESS_TOKEN_KEY */ ._) => {
  const instance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL
  });

  if (accessTokenKey) {
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_3__/* .AUTH_ACCESS_TOKEN_KEY */ ._);

    if (token) {
      instance.interceptors.request.use(config => {
        const instanceConfig = _objectSpread({}, config);

        instanceConfig.headers['Authorization'] = `Bearer ${token}`;
        return instanceConfig;
      });
    }
  }

  return instance;
};
const axiosBaseQuery = options => async ({
  url,
  method,
  data,
  params,
  responseType
}) => {
  try {
    const baseUrl = (0,_getBackendURL__WEBPACK_IMPORTED_MODULE_2__/* .getBackendURL */ .L)();
    const axios = getAxiosInstance(baseUrl, options?.accessTokenKey); // normal axios request

    const result = await axios({
      url,
      method,
      data,
      params,
      responseType
    });
    return {
      data: result.data
    };
  } catch (axiosError) {
    const err = axiosError;
    return {
      error: {
        status: err.response?.status,
        data: err.response?.data || err.message
      }
    };
  }
};
const http = {
  get: (url, config) => _objectSpread({
    method: 'GET',
    url
  }, config),
  post: (url, config) => _objectSpread({
    method: 'POST',
    url
  }, config),
  delete: (url, config) => _objectSpread({
    method: 'DELETE',
    url
  }, config),
  put: (url, config) => _objectSpread({
    method: 'PUT',
    url
  }, config),
  patch: (url, config) => _objectSpread({
    method: 'PATCH',
    url
  }, config)
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7640:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z1": () => (/* reexport safe */ _http__WEBPACK_IMPORTED_MODULE_0__.Z1),
/* harmony export */   "dJ": () => (/* reexport safe */ _http__WEBPACK_IMPORTED_MODULE_0__.dJ)
/* harmony export */ });
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9774);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_http__WEBPACK_IMPORTED_MODULE_0__]);
_http__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ AUTH_ACCESS_TOKEN_KEY)
/* harmony export */ });
const AUTH_ACCESS_TOKEN_KEY = 'accessToken';

/***/ })

};
;