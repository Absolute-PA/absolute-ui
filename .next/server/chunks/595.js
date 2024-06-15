"use strict";
exports.id = 595;
exports.ids = [595];
exports.modules = {

/***/ 8354:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ CreateUserButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4399);
/* harmony import */ var _features_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8746);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_3__, _features_auth__WEBPACK_IMPORTED_MODULE_4__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__]);
([_components__WEBPACK_IMPORTED_MODULE_3__, _features_auth__WEBPACK_IMPORTED_MODULE_4__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const CreateUserButton = ({
  className
}) => {
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const handleOpenDrawer = () => setOpen(true);

  const handleCloseDrawer = () => setOpen(false);

  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
      className: className,
      type: "primary",
      onClick: handleOpenDrawer,
      icon: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.PlusOutlined, {}),
      children: "Create User"
    }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .Drawer */ .dy, {
      title: "Create new user",
      open: open,
      onClose: handleCloseDrawer,
      destroyOnClose: true,
      children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_features_auth__WEBPACK_IMPORTED_MODULE_4__/* .RegisterForm */ .B2, {
        title: "none",
        hasSpacing: false,
        hasBlockBtn: false,
        confirmBtnPosition: "right"
      })
    })]
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6033:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ EditableCell)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6343);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__]);
_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
const _excluded = ["editing", "dataIndex", "title", "inputType", "record", "index", "children", "form"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_0__.Select;
const EditableCell = _ref => {
  let {
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    form
  } = _ref,
      restProps = _objectWithoutProperties(_ref, _excluded);

  const handleChange = value => {
    form.setFieldsValue({
      roles: value
    });
  };

  const inputNode = inputType === 'multi-select' ? _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Select, {
    mode: "multiple",
    placeholder: "Please select",
    onChange: handleChange,
    options: _utils_constants__WEBPACK_IMPORTED_MODULE_1__/* .ROLE_OPTIONS */ .l
  }) : _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Input, {});
  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("td", _objectSpread(_objectSpread({}, restProps), {}, {
    children: editing ? _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
      name: dataIndex,
      style: {
        margin: 0
      },
      rules: [{
        required: true,
        message: `Please Input ${title}!`
      }],
      children: inputNode
    }) : children
  }));
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2435:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ UserCredentialForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4399);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3377);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_3__, _store__WEBPACK_IMPORTED_MODULE_4__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__]);
([_components__WEBPACK_IMPORTED_MODULE_3__, _store__WEBPACK_IMPORTED_MODULE_4__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }










var _ref =  true ? {
  name: "1j389vi",
  styles: "font-weight:700"
} : 0;

var _ref2 =  true ? {
  name: "1j389vi",
  styles: "font-weight:700"
} : 0;

const UserCredentialFormInternal = ({
  className,
  header
}) => {
  const {
    isEditing,
    setEditing
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components__WEBPACK_IMPORTED_MODULE_3__/* .CardFormContext */ .j8);
  const {
    data: currentUser
  } = (0,_store__WEBPACK_IMPORTED_MODULE_4__/* .useGetCurrentUserQuery */ .XC)();
  const [form] = antd__WEBPACK_IMPORTED_MODULE_1__.Form.useForm();
  const [updatePassword] = (0,_store__WEBPACK_IMPORTED_MODULE_4__/* .useLazyPostUpdatePasswordQuery */ .We)();

  const handleFinish = async formValues => {
    const res = await updatePassword(formValues);

    if ('data' in res) {
      antd__WEBPACK_IMPORTED_MODULE_1__.message.success('Updated password successfully.');
      setEditing(false);
    }
  };

  const renderForm = () => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .CollapseCard.EditButton */ .Uf.EditButton, {
      onClick: () => setEditing(!isEditing)
    }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_3__/* .CardForm */ .Tr, {
      form: form,
      initialValues: currentUser,
      onFinish: handleFinish,
      children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_3__/* .CardForm.Row */ .Tr.Row, {
        children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .CardForm.Item */ .Tr.Item, {
          name: ['username'],
          label: "User name",
          isEditing: false,
          children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {})
        }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .CardForm.Item */ .Tr.Item, {
          name: ['email'],
          label: "Email",
          isEditing: false,
          children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {})
        }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .CardForm.Item */ .Tr.Item, {
          name: ['newPassword'],
          label: "New Password",
          rules: [{
            required: true
          }],
          renderViewValue: () => _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            css: _ref,
            children: "********"
          }),
          children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input.Password, {
            prefix: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.LockOutlined, {}),
            type: "password",
            placeholder: "New Password"
          })
        }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .CardForm.Item */ .Tr.Item, {
          name: ['confirmPassword'],
          dependencies: ['newPassword'],
          label: "Confirm Password",
          renderViewValue: () => _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            css: _ref2,
            children: "********"
          }),
          rules: [{
            required: true,
            message: 'Please confirm your password!'
          }, ({
            getFieldValue
          }) => ({
            validator(_, value) {
              if (!value || getFieldValue('newPassword') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The new password that you entered do not match!'));
            }

          })],
          children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input.Password, {
            prefix: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.LockOutlined, {}),
            type: "password",
            placeholder: "Confirm Password"
          })
        })]
      }), isEditing && _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .CollapseCard.FooterActions */ .Uf.FooterActions, {
        children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .CardForm.Actions */ .Tr.Actions, {})
      })]
    })]
  });

  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_3__/* .CollapseCard */ .Uf, {
    className: className,
    header: header || 'User',
    icon: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.UserOutlined, {}),
    defaultActive: true,
    children: [!currentUser && _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Spin, {}), !!currentUser && renderForm()]
  });
};

const UserCredentialForm = (0,_components__WEBPACK_IMPORTED_MODULE_3__/* .withCardFormContext */ .h4)(UserCredentialFormInternal);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5938:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ ViewUser)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_api_user_updateUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9309);
/* harmony import */ var _store_api_user_deleteUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(990);
/* harmony import */ var _store_api_user_resetPasswordUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6807);
/* harmony import */ var _EditableCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6033);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_api_user_updateUser__WEBPACK_IMPORTED_MODULE_2__, _store_api_user_deleteUser__WEBPACK_IMPORTED_MODULE_3__, _store_api_user_resetPasswordUser__WEBPACK_IMPORTED_MODULE_4__, _EditableCell__WEBPACK_IMPORTED_MODULE_5__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__]);
([_store_api_user_updateUser__WEBPACK_IMPORTED_MODULE_2__, _store_api_user_deleteUser__WEBPACK_IMPORTED_MODULE_3__, _store_api_user_resetPasswordUser__WEBPACK_IMPORTED_MODULE_4__, _EditableCell__WEBPACK_IMPORTED_MODULE_5__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const ViewUser = ({
  users
}) => {
  const originData = users.map(user => ({
    key: user.email,
    email: user.email,
    username: user.username,
    roles: user.roles,
    id: user.id
  }));
  const [form] = antd__WEBPACK_IMPORTED_MODULE_1__.Form.useForm();
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(originData);
  const {
    0: editingKey,
    1: setEditingKey
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [updateUser, {
    isSuccess: isSuccessUpdateUser
  }] = (0,_store_api_user_updateUser__WEBPACK_IMPORTED_MODULE_2__/* .useUpdateUserMutation */ .kD)();
  const [deleteUser, {
    isSuccess: isSuccessDeleteUser
  }] = (0,_store_api_user_deleteUser__WEBPACK_IMPORTED_MODULE_3__/* .useDeleteUserMutation */ .I1)();
  const [resetPasswordUser, {
    isSuccess: isSuccessResetPasswordUser
  }] = (0,_store_api_user_resetPasswordUser__WEBPACK_IMPORTED_MODULE_4__/* .useLazyResetPasswordUserQuery */ .PI)();

  const isEditing = record => record.email === editingKey;

  const edit = record => {
    form.setFieldsValue(_objectSpread({}, record));
    record.email && setEditingKey(record.email);
  };

  const save = async key => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex(item => key === item.email);

      if (index > -1) {
        const item = newData[index];

        const newUser = _objectSpread(_objectSpread({}, item), row);

        newData.splice(index, 1, newUser);
        setData(newData);
        updateUser(newUser).unwrap().then(response => {
          antd__WEBPACK_IMPORTED_MODULE_1__.message.success('Success update user');
          setEditingKey('');
        }).catch(() => antd__WEBPACK_IMPORTED_MODULE_1__.message.error('Something is wrong'));
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const cancel = () => {
    setEditingKey('');
  };

  const confirmDeleteUser = async id => {
    deleteUser(id).unwrap().then(() => {
      antd__WEBPACK_IMPORTED_MODULE_1__.message.success('Success delete user');
    }).catch(() => antd__WEBPACK_IMPORTED_MODULE_1__.message.error('Something is wrong'));
  };

  const confirmResetPasswordUser = async id => {
    const response = await resetPasswordUser(id);
    response.isSuccess ? antd__WEBPACK_IMPORTED_MODULE_1__.message.success('Success reset password user. Please use the default password to login.') : antd__WEBPACK_IMPORTED_MODULE_1__.message.error('Something is wrong');
  };

  const cancelDeleteUser = () => {};

  const cancelResetPasswordUser = () => {};

  const removeUser = email => {
    // TODO
    console.log('Remove user ', email);
  };

  const columns = [{
    title: 'Username',
    dataIndex: 'username',
    key: 'username'
  }, {
    title: 'Email',
    dataIndex: 'email',
    key: 'email'
  }, {
    title: 'Roles',
    dataIndex: 'roles',
    key: 'roles',
    render: roles => roles.map(role => _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
      children: role
    }, role))
  }, {
    title: 'Actions',
    key: 'actions',
    dataIndex: 'actions',
    render: (_, record) => {
      const editable = isEditing(record);
      return editable ? (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
        children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Link, {
          onClick: () => save(record.email),
          style: {
            marginRight: 8
          },
          children: "Save"
        }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Popconfirm, {
          title: "Sure to cancel?",
          onConfirm: cancel,
          children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
            children: "Cancel"
          })
        })]
      }) : (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Space, {
        size: "middle",
        children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Popconfirm, {
          title: "Delete the user",
          description: "Are you sure to delete this user?",
          onConfirm: () => confirmDeleteUser(record.id),
          onCancel: cancelDeleteUser,
          okText: "Yes",
          cancelText: "No",
          children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
            type: "link",
            children: "Delete"
          })
        }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
          type: "link",
          onClick: () => edit(_objectSpread(_objectSpread({}, record), {}, {
            key: record.email
          })),
          children: "Edit"
        }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Popconfirm, {
          title: "Reset password",
          description: "Are you sure to reset password for this user?",
          onConfirm: () => confirmResetPasswordUser(record.id),
          onCancel: cancelResetPasswordUser,
          okText: "Yes",
          cancelText: "No",
          children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
            type: "link",
            children: "Reset Password"
          })
        })]
      });
    }
  }];
  const mergedColumns = columns.map(col => {
    if (['actions'].includes(col.key)) return col;
    return _objectSpread(_objectSpread({}, col), {}, {
      onCell: record => ({
        record,
        inputType: col.dataIndex === 'roles' ? 'multi-select' : 'text',
        dataIndex: col.dataIndex,
        title: col.title || '',
        editing: isEditing(record),
        form
      })
    });
  });
  const scroll = {
    x: 'max-content'
  };
  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form, {
      form: form,
      component: false,
      children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Table, {
        scroll: scroll,
        components: {
          body: {
            cell: _EditableCell__WEBPACK_IMPORTED_MODULE_5__/* .EditableCell */ .n
          }
        },
        bordered: true,
        dataSource: data,
        columns: mergedColumns,
        rowClassName: "editable-row",
        pagination: {
          onChange: cancel
        }
      })
    })
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6595:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ol": () => (/* reexport safe */ _ViewUser__WEBPACK_IMPORTED_MODULE_1__.o),
/* harmony export */   "vU": () => (/* reexport safe */ _CreateUserButton__WEBPACK_IMPORTED_MODULE_3__.v),
/* harmony export */   "xF": () => (/* reexport safe */ _UserCredentialForm__WEBPACK_IMPORTED_MODULE_2__.x)
/* harmony export */ });
/* harmony import */ var _EditableCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6033);
/* harmony import */ var _ViewUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5938);
/* harmony import */ var _UserCredentialForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2435);
/* harmony import */ var _CreateUserButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8354);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_EditableCell__WEBPACK_IMPORTED_MODULE_0__, _ViewUser__WEBPACK_IMPORTED_MODULE_1__, _UserCredentialForm__WEBPACK_IMPORTED_MODULE_2__, _CreateUserButton__WEBPACK_IMPORTED_MODULE_3__]);
([_EditableCell__WEBPACK_IMPORTED_MODULE_0__, _ViewUser__WEBPACK_IMPORTED_MODULE_1__, _UserCredentialForm__WEBPACK_IMPORTED_MODULE_2__, _CreateUserButton__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;