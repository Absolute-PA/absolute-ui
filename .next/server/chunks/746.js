"use strict";
exports.id = 746;
exports.ids = [746];
exports.modules = {

/***/ 9294:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ AuthLayout)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4243);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__]);
([_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }





const StyledPageName = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  true ? {
  target: "e1vwdecx0"
} : 0)( true ? {
  name: "it7igo",
  styles: "position:absolute;bottom:8rem;left:2.5rem;z-index:10;font-size:3rem;line-height:1;font-weight:700;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));;text-shadow:var(--colorTextBase) 2px 2px 0;&:before{position:absolute;bottom:-1.25rem;left:0px;height:0.25rem;width:100%;--tw-bg-opacity:1;background-color:rgb(64 130 255 / var(--tw-bg-opacity));--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);;content:'';}"
} : 0);

var _ref =  true ? {
  name: "44hlzp",
  styles: "display:flex;height:100vh;align-items:center;justify-content:center"
} : 0;

var _ref2 =  true ? {
  name: "9aw0au",
  styles: "display:flex;flex-direction:column;justify-content:center;padding-left:1rem;padding-right:1rem;padding-top:3rem;padding-bottom:3rem;@media (min-width: 480px){padding-left:1.5rem;padding-right:1.5rem;}@media (min-width: 976px){flex:none;padding-left:5rem;padding-right:5rem;}@media (min-width: 1280px){padding-left:6rem;padding-right:6rem;}"
} : 0;

var _ref3 =  true ? {
  name: "12y8yhg",
  styles: "margin-left:auto;margin-right:auto;width:100%;max-width:24rem;@media (min-width: 976px){width:24rem;}"
} : 0;

var _ref4 =  true ? {
  name: "iopm2z",
  styles: "height:120px"
} : 0;

const AuthLayout = ({
  children,
  pageName
}) => {
  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    css: _ref,
    children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      css: _ref2,
      children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        css: _ref3,
        children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
          css: _ref4,
          src: "/img/absolute-pa-logo.png",
          alt: "AbsolutePA"
        })
      }), children]
    })
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 391:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ LoginForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3377);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7811);
/* harmony import */ var _utils_apiHelpers_getBackendURL__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7107);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_4__, _utils_auth__WEBPACK_IMPORTED_MODULE_5__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__]);
([_store__WEBPACK_IMPORTED_MODULE_4__, _utils_auth__WEBPACK_IMPORTED_MODULE_5__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


 // import { signInWithEmailAndPassword } from 'firebase/auth';









var _ref =  true ? {
  name: "12y8yhg",
  styles: "margin-left:auto;margin-right:auto;width:100%;max-width:24rem;@media (min-width: 976px){width:24rem;}"
} : 0;

var _ref2 =  true ? {
  name: "17ta6mb",
  styles: "margin-top:0.25rem;font-size:1.5rem;line-height:2rem;font-weight:700;--tw-text-opacity:1;color:rgb(17 24 39 / var(--tw-text-opacity))"
} : 0;

var _ref3 =  true ? {
  name: "1fo50kt",
  styles: "margin-top:1.5rem"
} : 0;

var _ref4 =  true ? {
  name: "1wk3rb1",
  styles: "> :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse));}"
} : 0;

const LoginForm = ({
  onLoginSuccess,
  onClickForgotPassword
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const [loginWithUsernameAndPassword, {
    isFetching,
    error,
    isLoading,
    data
  }] = (0,_store__WEBPACK_IMPORTED_MODULE_4__/* .useLazyPostLoginQuery */ .lR)();

  if (error && typeof error === 'object' && 'data' in error && error.data === 'Network Error') {
    location.href = `${(0,_utils_apiHelpers_getBackendURL__WEBPACK_IMPORTED_MODULE_7__/* .getBackendURL */ .L)()}/by-pass-api?redirectURL=${location.origin}`;
  }

  const handleSubmitForm = async ({
    username,
    password
  }) => {
    loginWithUsernameAndPassword({
      username: username,
      password: password
    });
  };

  if (data) {
    (0,_utils_auth__WEBPACK_IMPORTED_MODULE_5__/* .saveAccessToken */ .j1)(data.access_token);
    const page = router.query['redirectUrl'] || '/';
    router.push(page);
  }

  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    css: _ref,
    children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      css: _ref2,
      children: "Sign in to your account"
    }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      css: _ref3,
      children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Form, {
        css: _ref4,
        name: "login-form",
        layout: "vertical",
        onFinish: handleSubmitForm,
        children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
          name: "username",
          label: "Username",
          rules: [{
            required: true,
            message: 'Please input your username'
          }],
          children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
            prefix: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UserOutlined, {}),
            placeholder: "Username"
          })
        }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
          className: "password-input",
          name: "password",
          label: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            className: "password",
            children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
              children: 'Password'
            })
          }),
          rules: [{
            required: true,
            message: 'Please input your password'
          }],
          children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input.Password, {
            prefix: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.LockOutlined, {}),
            type: "password",
            placeholder: "Password"
          })
        }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
            type: "primary",
            htmlType: "submit",
            loading: isLoading,
            block: true,
            children: "Sign in"
          })
        }), !!error && _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Alert, {
          style: {
            marginBottom: '16px'
          },
          message: `${error?.data?.message}`,
          type: "error",
          showIcon: true
        })]
      })
    })]
  });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (LoginForm)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3435:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AuthLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9294);
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(391);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AuthLayout__WEBPACK_IMPORTED_MODULE_1__, _LoginForm__WEBPACK_IMPORTED_MODULE_2__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__]);
([_AuthLayout__WEBPACK_IMPORTED_MODULE_1__, _LoginForm__WEBPACK_IMPORTED_MODULE_2__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const LoginPage = ({
  className = '',
  pageName,
  onLoginSuccess
}) => {
  const {
    0: isShowLoginForm,
    1: setIsShowLoginForm
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);

  const handleShowLoginForm = () => {
    setIsShowLoginForm(!isShowLoginForm);
  };

  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_AuthLayout__WEBPACK_IMPORTED_MODULE_1__/* .AuthLayout */ .g, {
    pageName: pageName,
    children: isShowLoginForm ? _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_LoginForm__WEBPACK_IMPORTED_MODULE_2__/* .LoginForm */ .U, {
      onLoginSuccess: onLoginSuccess,
      onClickForgotPassword: handleShowLoginForm
    }) : _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h1", {
      children: "Reset Password Form here"
    })
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7216:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ LogoutButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7811);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_auth__WEBPACK_IMPORTED_MODULE_3__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__]);
([_utils_auth__WEBPACK_IMPORTED_MODULE_3__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }








var _ref2 =  true ? {
  name: "1j389vi",
  styles: "font-weight:700"
} : 0;

const LogoutButton = _ref => {
  let props = Object.assign({}, _ref);

  const logout = () => {
    (0,_utils_auth__WEBPACK_IMPORTED_MODULE_3__/* .removeAccessToken */ .yL)();
    window.location.href = '/login';
  };

  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, _objectSpread(_objectSpread({
    onClick: logout
  }, props), {}, {
    children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
      css: _ref2,
      children: "Logout"
    }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.LogoutOutlined, {})]
  }));
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7600:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProtectedPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7811);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3377);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_auth__WEBPACK_IMPORTED_MODULE_3__, _store__WEBPACK_IMPORTED_MODULE_4__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__]);
([_utils_auth__WEBPACK_IMPORTED_MODULE_3__, _store__WEBPACK_IMPORTED_MODULE_4__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }









var _ref =  true ? {
  name: "1fc63jq",
  styles: "display:flex;min-height:100vh;align-items:center;justify-content:center"
} : 0;

const ProtectedPage = ({
  children
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    data: currentUser
  } = (0,_store__WEBPACK_IMPORTED_MODULE_4__/* .useGetCurrentUserQuery */ .XC)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // If no session exists, display access denied message
    const token = (0,_utils_auth__WEBPACK_IMPORTED_MODULE_3__/* .getAccessToken */ .hP)();

    if (!token) {
      const page = router.query['redirectUrl'] || '/login';
      router.push(page);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  return currentUser ? _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: children
  }) : _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
    css: _ref,
    children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Spin, {
      size: "large"
    })
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3805:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ RegisterForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3377);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_4__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__]);
([_store__WEBPACK_IMPORTED_MODULE_4__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }









var _ref =  true ? {
  name: "17ta6mb",
  styles: "margin-top:0.25rem;font-size:1.5rem;line-height:2rem;font-weight:700;--tw-text-opacity:1;color:rgb(17 24 39 / var(--tw-text-opacity))"
} : 0;

var _ref2 =  true ? {
  name: "1wk3rb1",
  styles: "> :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse));}"
} : 0;

const RegisterForm = ({
  onRegisterSuccess: onLoginSuccess,
  title = 'Sign up',
  hasSpacing = true,
  hasBlockBtn = true,
  confirmBtnPosition
}) => {
  const [form] = antd__WEBPACK_IMPORTED_MODULE_2__.Form.useForm();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [register] = (0,_store__WEBPACK_IMPORTED_MODULE_4__/* .usePostRegisterMutation */ .Ml)();

  const handleSubmitForm = async values => {
    setIsLoading(true);
    setError(null);
    register({
      username: values.username,
      password: values.password,
      email: values.email
    }).then(data => {
      setIsLoading(false);

      if ('error' in data) {
        const msg = data.error?.data?.error;
        antd__WEBPACK_IMPORTED_MODULE_2__.message.error(msg);
        return;
      }

      antd__WEBPACK_IMPORTED_MODULE_2__.message.success('Sucess create new user');
    });
  };

  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [title !== 'none' && _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      css: _ref,
      children: title
    }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      css: [hasSpacing && {
        "marginTop": "1.5rem"
      },  true ? "" : 0,  true ? "" : 0],
      children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Form, {
        css: _ref2,
        name: "login-form",
        layout: "vertical",
        onFinish: handleSubmitForm,
        form: form,
        children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
          name: "username",
          label: "Username",
          rules: [{
            required: true,
            message: 'Please input your username'
          }],
          children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
            prefix: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UserOutlined, {}),
            placeholder: "Username"
          })
        }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
          name: "email",
          label: "Email",
          rules: [{
            required: true,
            message: 'Please input your email'
          }],
          children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
            prefix: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UserOutlined, {}),
            placeholder: "Email"
          })
        }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
          className: "password-input",
          name: "password",
          label: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: "password",
            children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
              children: 'Password'
            })
          }),
          rules: [{
            required: true,
            message: 'Please input your password'
          }],
          children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input.Password, {
            prefix: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.LockOutlined, {}),
            type: "password",
            placeholder: "Password"
          })
        }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          css: ["text-align:center;", confirmBtnPosition === 'left' && {
            "textAlign": "left"
          }, confirmBtnPosition === 'right' && {
            "textAlign": "right"
          },  true ? "" : 0,  true ? "" : 0],
          children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
            type: "primary",
            htmlType: "submit",
            loading: isLoading,
            block: hasBlockBtn,
            children: "Register"
          })
        }), !!error && _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Alert, {
          style: {
            marginBottom: '16px'
          },
          message: error,
          type: "error",
          showIcon: true
        })]
      })
    })]
  });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (RegisterForm)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8746:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2": () => (/* reexport safe */ _RegisterForm__WEBPACK_IMPORTED_MODULE_3__.B),
/* harmony export */   "Xs": () => (/* reexport safe */ _LoginPage__WEBPACK_IMPORTED_MODULE_2__.X),
/* harmony export */   "ZF": () => (/* reexport safe */ _ProtectedPage__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "g1": () => (/* reexport safe */ _AuthLayout__WEBPACK_IMPORTED_MODULE_1__.g),
/* harmony export */   "sv": () => (/* reexport safe */ _LogoutButton__WEBPACK_IMPORTED_MODULE_5__.s)
/* harmony export */ });
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(391);
/* harmony import */ var _AuthLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9294);
/* harmony import */ var _LoginPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3435);
/* harmony import */ var _RegisterForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3805);
/* harmony import */ var _ProtectedPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7600);
/* harmony import */ var _LogoutButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7216);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LoginForm__WEBPACK_IMPORTED_MODULE_0__, _AuthLayout__WEBPACK_IMPORTED_MODULE_1__, _LoginPage__WEBPACK_IMPORTED_MODULE_2__, _RegisterForm__WEBPACK_IMPORTED_MODULE_3__, _ProtectedPage__WEBPACK_IMPORTED_MODULE_4__, _LogoutButton__WEBPACK_IMPORTED_MODULE_5__]);
([_LoginForm__WEBPACK_IMPORTED_MODULE_0__, _AuthLayout__WEBPACK_IMPORTED_MODULE_1__, _LoginPage__WEBPACK_IMPORTED_MODULE_2__, _RegisterForm__WEBPACK_IMPORTED_MODULE_3__, _ProtectedPage__WEBPACK_IMPORTED_MODULE_4__, _LogoutButton__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;