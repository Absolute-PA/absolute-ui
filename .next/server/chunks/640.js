"use strict";
exports.id = 640;
exports.ids = [640];
exports.modules = {

/***/ 2781:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export ResetJobsButton */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_api_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8366);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_api_setting__WEBPACK_IMPORTED_MODULE_2__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__]);
([_store_api_setting__WEBPACK_IMPORTED_MODULE_2__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const ResetJobsButton = props => {
  const [resetJobs] = useResetJobsMutation();
  const [notify, contextHolder] = notification.useNotification();

  const resetJobConfirm = async () => {
    const result = await resetJobs();

    if ('data' in result) {
      notify.success({
        message: 'Stop Schedules',
        description: 'Stopped schedules successfully'
      });
    }
  };

  return _jsxs(_Fragment, {
    children: [contextHolder, _jsx(Popconfirm, {
      title: "Stop running schedules",
      description: "Are you sure to stop running schedules?",
      onConfirm: resetJobConfirm,
      okText: "Yes",
      cancelText: "No",
      children: _jsx(Button, _objectSpread(_objectSpread({
        danger: true
      }, props), {}, {
        children: "Stop Schedules"
      }))
    })]
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8205:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _ResetJobsButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2781);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ResetJobsButton__WEBPACK_IMPORTED_MODULE_0__]);
_ResetJobsButton__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7737:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ LicenseKeyBanner)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_api_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8366);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_api_setting__WEBPACK_IMPORTED_MODULE_2__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__]);
([_store_api_setting__WEBPACK_IMPORTED_MODULE_2__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
const _excluded = ["className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const LicenseKeyBanner = _ref => {
  let {
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    data: setting
  } = (0,_store_api_setting__WEBPACK_IMPORTED_MODULE_2__/* .useGetSettingQuery */ .Rf)();
  if (!setting?.isExpired) return null;
  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Alert, _objectSpread({
    message: "Something went wrong, please reset the server."
  }, props));
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3659:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ LicenseKeyForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4399);
/* harmony import */ var _store_api_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8366);
/* harmony import */ var _hooks_useAuthorization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8801);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_3__, _store_api_setting__WEBPACK_IMPORTED_MODULE_4__, _hooks_useAuthorization__WEBPACK_IMPORTED_MODULE_5__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__]);
([_components__WEBPACK_IMPORTED_MODULE_3__, _store_api_setting__WEBPACK_IMPORTED_MODULE_4__, _hooks_useAuthorization__WEBPACK_IMPORTED_MODULE_5__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const LicenseKeyFormInternal = ({
  className,
  header
}) => {
  const {
    isEditing,
    setEditing
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components__WEBPACK_IMPORTED_MODULE_3__/* .CardFormContext */ .j8);
  const {
    data: setting
  } = (0,_store_api_setting__WEBPACK_IMPORTED_MODULE_4__/* .useGetSettingQuery */ .Rf)();
  const [update] = (0,_store_api_setting__WEBPACK_IMPORTED_MODULE_4__/* .useUpdateLicenseKeyMutation */ .Xt)();
  const [form] = antd__WEBPACK_IMPORTED_MODULE_1__.Form.useForm();
  const {
    isAuthorized
  } = (0,_hooks_useAuthorization__WEBPACK_IMPORTED_MODULE_5__/* .useAuthorization */ .o)();
  const initialValues = {
    schoolId: setting?.schoolId,
    licenseKey: setting?.licenseKey,
    expiryDate: setting?.expiryDate
  };

  const handleFinish = async formValues => {
    const res = await update({
      id: setting?._id,
      data: formValues
    });

    if ('error' in res) {
      form.resetFields();
    } else {
      form.setFieldValue('expiryDate', res.data.expiryDate);
      setEditing(false);
    }
  };

  const renderForm = () => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .CollapseCard.EditButton */ .Uf.EditButton, {
      onClick: () => setEditing(!isEditing)
    }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_3__/* .CardForm */ .Tr, {
      form: form,
      initialValues: initialValues,
      onFinish: handleFinish,
      children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_3__/* .CardForm.Row */ .Tr.Row, {
        children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .CardForm.Item */ .Tr.Item, {
          name: ['schoolId'],
          label: "School Name",
          rules: [{
            required: true
          }],
          children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
            disabled: !isAuthorized(['master'])
          })
        }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .CardForm.Item */ .Tr.Item, {
          name: ['licenseKey'],
          label: "License Key",
          rules: [{
            required: true
          }],
          children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {})
        })]
      }), isEditing && _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .CollapseCard.FooterActions */ .Uf.FooterActions, {
        children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .CardForm.Actions */ .Tr.Actions, {})
      })]
    })]
  });

  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_3__/* .CollapseCard */ .Uf, {
    className: className,
    header: header || 'License Key',
    icon: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.KeyOutlined, {}),
    defaultActive: true,
    children: [!setting && _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Spin, {}), !!setting && renderForm()]
  });
};

const LicenseKeyForm = (0,_components__WEBPACK_IMPORTED_MODULE_3__/* .withCardFormContext */ .h4)(LicenseKeyFormInternal);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5012:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* reexport safe */ _LicenseKeyForm__WEBPACK_IMPORTED_MODULE_0__.K),
/* harmony export */   "M": () => (/* reexport safe */ _LicenseKeyBanner__WEBPACK_IMPORTED_MODULE_1__.M)
/* harmony export */ });
/* harmony import */ var _LicenseKeyForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3659);
/* harmony import */ var _LicenseKeyBanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7737);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LicenseKeyForm__WEBPACK_IMPORTED_MODULE_0__, _LicenseKeyBanner__WEBPACK_IMPORTED_MODULE_1__]);
([_LicenseKeyForm__WEBPACK_IMPORTED_MODULE_0__, _LicenseKeyBanner__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6098:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ UserSettingForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4399);
/* harmony import */ var _store_api_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8366);
/* harmony import */ var _hooks_useAuthorization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8801);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_3__, _store_api_setting__WEBPACK_IMPORTED_MODULE_4__, _hooks_useAuthorization__WEBPACK_IMPORTED_MODULE_5__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__]);
([_components__WEBPACK_IMPORTED_MODULE_3__, _store_api_setting__WEBPACK_IMPORTED_MODULE_4__, _hooks_useAuthorization__WEBPACK_IMPORTED_MODULE_5__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const UserSettingFormInternal = ({
  className,
  header
}) => {
  const {
    isEditing,
    setEditing
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components__WEBPACK_IMPORTED_MODULE_3__/* .CardFormContext */ .j8);
  const {
    data: setting
  } = (0,_store_api_setting__WEBPACK_IMPORTED_MODULE_4__/* .useGetSettingQuery */ .Rf)();
  const [update] = (0,_store_api_setting__WEBPACK_IMPORTED_MODULE_4__/* .useUpdateUserSettingMutation */ .Bw)();
  const [form] = antd__WEBPACK_IMPORTED_MODULE_1__.Form.useForm();
  const {
    isAuthorized
  } = (0,_hooks_useAuthorization__WEBPACK_IMPORTED_MODULE_5__/* .useAuthorization */ .o)();
  const initialValues = {
    maxUser: setting?.userSetting?.maxUser
  };

  const handleFinish = async formValues => {
    const res = await update({
      id: setting?._id,
      data: formValues
    });

    if ('error' in res) {
      form.resetFields();
    } else {
      setEditing(false);
    }
  };

  const renderForm = () => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .CollapseCard.EditButton */ .Uf.EditButton, {
      onClick: () => setEditing(!isEditing)
    }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_3__/* .CardForm */ .Tr, {
      form: form,
      initialValues: initialValues,
      onFinish: handleFinish,
      children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .CardForm.Row */ .Tr.Row, {
        children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .CardForm.Item */ .Tr.Item, {
          name: ['maxUser'],
          label: "Max number of users",
          rules: [{
            required: true
          }],
          children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.InputNumber, {})
        })
      }), isEditing && _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .CollapseCard.FooterActions */ .Uf.FooterActions, {
        children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .CardForm.Actions */ .Tr.Actions, {})
      })]
    })]
  });

  if (!isAuthorized(['master'])) {
    return null;
  }

  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_3__/* .CollapseCard */ .Uf, {
    className: className,
    header: header || 'User Setting',
    icon: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.UserOutlined, {}),
    defaultActive: true,
    children: [!setting && _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Spin, {}), !!setting && renderForm()]
  });
};

const UserSettingForm = (0,_components__WEBPACK_IMPORTED_MODULE_3__/* .withCardFormContext */ .h4)(UserSettingFormInternal);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4323:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* reexport safe */ _UserSettingForm__WEBPACK_IMPORTED_MODULE_0__.O)
/* harmony export */ });
/* harmony import */ var _UserSettingForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6098);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UserSettingForm__WEBPACK_IMPORTED_MODULE_0__]);
_UserSettingForm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3640:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K2": () => (/* reexport safe */ _LicenseKey__WEBPACK_IMPORTED_MODULE_0__.K),
/* harmony export */   "Mz": () => (/* reexport safe */ _LicenseKey__WEBPACK_IMPORTED_MODULE_0__.M),
/* harmony export */   "O5": () => (/* reexport safe */ _UserSetting__WEBPACK_IMPORTED_MODULE_2__.O)
/* harmony export */ });
/* harmony import */ var _LicenseKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5012);
/* harmony import */ var _Job__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8205);
/* harmony import */ var _UserSetting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4323);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LicenseKey__WEBPACK_IMPORTED_MODULE_0__, _Job__WEBPACK_IMPORTED_MODULE_1__, _UserSetting__WEBPACK_IMPORTED_MODULE_2__]);
([_LicenseKey__WEBPACK_IMPORTED_MODULE_0__, _Job__WEBPACK_IMPORTED_MODULE_1__, _UserSetting__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8801:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ useAuthorization)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3377);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_0__]);
_store__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useAuthorization = () => {
  const {
    data: currentUser
  } = (0,_store__WEBPACK_IMPORTED_MODULE_0__/* .useGetCurrentUserQuery */ .XC)();

  const isAuthorized = roles => {
    if (!currentUser) return false;
    return roles.some(role => currentUser.roles.includes(role));
  };

  return {
    isAuthorized
  };
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2863:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rf": () => (/* binding */ useGetSettingQuery)
/* harmony export */ });
/* unused harmony export getSetting */
/* harmony import */ var _utils_apiHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7640);
/* harmony import */ var _rootApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6159);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_apiHelpers__WEBPACK_IMPORTED_MODULE_0__, _rootApi__WEBPACK_IMPORTED_MODULE_1__]);
([_utils_apiHelpers__WEBPACK_IMPORTED_MODULE_0__, _rootApi__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const api = _rootApi__WEBPACK_IMPORTED_MODULE_1__/* .rootApi.injectEndpoints */ .e.injectEndpoints({
  endpoints: builder => ({
    getSetting: builder.query({
      query: () => _utils_apiHelpers__WEBPACK_IMPORTED_MODULE_0__/* .http.get */ .dJ.get(`/setting`),
      providesTags: () => [{
        type: _rootApi__WEBPACK_IMPORTED_MODULE_1__/* .Tags.Setting */ .$.Setting,
        id: 'LIST'
      }]
    })
  })
});
const {
  useGetSettingQuery,
  endpoints: {
    getSetting
  }
} = api;
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (api)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8366:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bw": () => (/* reexport safe */ _updateUserSetting__WEBPACK_IMPORTED_MODULE_3__.Bw),
/* harmony export */   "Rf": () => (/* reexport safe */ _getSetting__WEBPACK_IMPORTED_MODULE_0__.Rf),
/* harmony export */   "Xt": () => (/* reexport safe */ _updateLicenseKey__WEBPACK_IMPORTED_MODULE_1__.Xt)
/* harmony export */ });
/* harmony import */ var _getSetting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2863);
/* harmony import */ var _updateLicenseKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3111);
/* harmony import */ var _resetJobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3523);
/* harmony import */ var _updateUserSetting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1028);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getSetting__WEBPACK_IMPORTED_MODULE_0__, _updateLicenseKey__WEBPACK_IMPORTED_MODULE_1__, _resetJobs__WEBPACK_IMPORTED_MODULE_2__, _updateUserSetting__WEBPACK_IMPORTED_MODULE_3__]);
([_getSetting__WEBPACK_IMPORTED_MODULE_0__, _updateLicenseKey__WEBPACK_IMPORTED_MODULE_1__, _resetJobs__WEBPACK_IMPORTED_MODULE_2__, _updateUserSetting__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3523:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony exports useResetJobsMutation, resetJobs */
/* harmony import */ var _utils_apiHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7640);
/* harmony import */ var _rootApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6159);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_apiHelpers__WEBPACK_IMPORTED_MODULE_0__, _rootApi__WEBPACK_IMPORTED_MODULE_1__]);
([_utils_apiHelpers__WEBPACK_IMPORTED_MODULE_0__, _rootApi__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const api = _rootApi__WEBPACK_IMPORTED_MODULE_1__/* .rootApi.injectEndpoints */ .e.injectEndpoints({
  endpoints: builder => ({
    resetJobs: builder.mutation({
      query: () => _utils_apiHelpers__WEBPACK_IMPORTED_MODULE_0__/* .http.post */ .dJ.post(`/setting/kill-jobs`)
    })
  })
});
const {
  useResetJobsMutation,
  endpoints: {
    resetJobs
  }
} = api;
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (api)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3111:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Xt": () => (/* binding */ useUpdateLicenseKeyMutation)
/* harmony export */ });
/* unused harmony export updateLicenseKey */
/* harmony import */ var _utils_apiHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7640);
/* harmony import */ var _rootApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6159);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_apiHelpers__WEBPACK_IMPORTED_MODULE_0__, _rootApi__WEBPACK_IMPORTED_MODULE_1__]);
([_utils_apiHelpers__WEBPACK_IMPORTED_MODULE_0__, _rootApi__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const api = _rootApi__WEBPACK_IMPORTED_MODULE_1__/* .rootApi.injectEndpoints */ .e.injectEndpoints({
  endpoints: builder => ({
    updateLicenseKey: builder.mutation({
      query: ({
        id,
        data
      }) => _utils_apiHelpers__WEBPACK_IMPORTED_MODULE_0__/* .http.patch */ .dJ.patch(`/setting/${id}/license`, {
        data
      }),
      invalidatesTags: () => [{
        type: _rootApi__WEBPACK_IMPORTED_MODULE_1__/* .Tags.Setting */ .$.Setting,
        id: 'LIST'
      }]
    })
  })
});
const {
  useUpdateLicenseKeyMutation,
  endpoints: {
    updateLicenseKey
  }
} = api;
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (api)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1028:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bw": () => (/* binding */ useUpdateUserSettingMutation)
/* harmony export */ });
/* unused harmony export updateUserSetting */
/* harmony import */ var _utils_apiHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7640);
/* harmony import */ var _rootApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6159);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_apiHelpers__WEBPACK_IMPORTED_MODULE_0__, _rootApi__WEBPACK_IMPORTED_MODULE_1__]);
([_utils_apiHelpers__WEBPACK_IMPORTED_MODULE_0__, _rootApi__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const api = _rootApi__WEBPACK_IMPORTED_MODULE_1__/* .rootApi.injectEndpoints */ .e.injectEndpoints({
  endpoints: builder => ({
    updateUserSetting: builder.mutation({
      query: ({
        id,
        data
      }) => _utils_apiHelpers__WEBPACK_IMPORTED_MODULE_0__/* .http.patch */ .dJ.patch(`/setting/${id}/user-setting`, {
        data
      }),
      invalidatesTags: () => [{
        type: _rootApi__WEBPACK_IMPORTED_MODULE_1__/* .Tags.Setting */ .$.Setting,
        id: 'LIST'
      }]
    })
  })
});
const {
  useUpdateUserSettingMutation,
  endpoints: {
    updateUserSetting
  }
} = api;
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (api)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;