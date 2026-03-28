"use strict";
exports.id = 942;
exports.ids = [942];
exports.modules = {

/***/ 553:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ CreatePlaylistButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4399);
/* harmony import */ var _PlaylistForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5574);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_3__, _PlaylistForm__WEBPACK_IMPORTED_MODULE_4__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__]);
([_components__WEBPACK_IMPORTED_MODULE_3__, _PlaylistForm__WEBPACK_IMPORTED_MODULE_4__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const CreatePlaylistButton = ({
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
      children: "Create Playlist"
    }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .Drawer */ .dy, {
      title: "Create a new playlist",
      open: open,
      onClose: handleCloseDrawer,
      destroyOnClose: true,
      children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_PlaylistForm__WEBPACK_IMPORTED_MODULE_4__/* .PlaylistUpsertForm */ .yl, {
        onSuccess: handleCloseDrawer,
        children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
          type: "primary",
          htmlType: "submit",
          block: true,
          children: "Create Playlist"
        })
      })
    })]
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4580:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* reexport safe */ _CreatePlaylistButton__WEBPACK_IMPORTED_MODULE_0__.z)
/* harmony export */ });
/* harmony import */ var _CreatePlaylistButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(553);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CreatePlaylistButton__WEBPACK_IMPORTED_MODULE_0__]);
_CreatePlaylistButton__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 531:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ PlaylistName)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3377);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_1__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__]);
([_store__WEBPACK_IMPORTED_MODULE_1__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const PlaylistName = ({
  playlistId
}) => {
  const {
    data: playlists
  } = (0,_store__WEBPACK_IMPORTED_MODULE_1__/* .useGetPlaylistListQuery */ .a9)();
  const playlist = playlists?.find(playlist => playlist._id === playlistId);
  if (!playlist) return null;
  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
    children: playlist.name
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1623:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* reexport safe */ _PlaylistName__WEBPACK_IMPORTED_MODULE_0__.f)
/* harmony export */ });
/* harmony import */ var _PlaylistName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(531);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PlaylistName__WEBPACK_IMPORTED_MODULE_0__]);
_PlaylistName__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export PlaylistForm */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__]);
_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
const _excluded = (/* unused pure expression or super */ null && (["onFinish", "children"]));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const PlaylistForm = _ref => {
  let {
    onFinish,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const handleOnFinish = useCallback(values => {
    onFinish?.(values);
  }, [onFinish]);
  return _jsx(Form, _objectSpread(_objectSpread({
    name: "playlist-form",
    layout: "vertical",
    onFinish: handleOnFinish
  }, props), {}, {
    children: _jsx(Form.Item, {
      name: "name",
      label: "Name",
      rules: [{
        required: true
      }],
      children: _jsx(Input, {})
    })
  }));
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6278:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ PlaylistUpsertForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_api_playlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9570);
/* harmony import */ var _store_api_sound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7510);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_api_playlist__WEBPACK_IMPORTED_MODULE_2__, _store_api_sound__WEBPACK_IMPORTED_MODULE_3__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__]);
([_store_api_playlist__WEBPACK_IMPORTED_MODULE_2__, _store_api_sound__WEBPACK_IMPORTED_MODULE_3__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
const _excluded = ["id", "onFinish", "onSuccess", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const PlaylistUpsertForm = _ref => {
  let {
    id,
    onFinish,
    onSuccess,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [form] = antd__WEBPACK_IMPORTED_MODULE_1__.Form.useForm();
  const isEdit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => !!id, [id]); // Queries

  const {
    data: existingPlaylist,
    isLoading: isLoadingPlaylist
  } = (0,_store_api_playlist__WEBPACK_IMPORTED_MODULE_2__/* .useGetPlaylistQuery */ .$B)({
    id: id
  }, {
    skip: !id
  });
  const {
    data: songs,
    isLoading: isLoadingSongs
  } = (0,_store_api_sound__WEBPACK_IMPORTED_MODULE_3__/* .useGetSongsQuery */ .wi)(); // Mutations

  const [createPlaylist, {
    isLoading: isCreating
  }] = (0,_store_api_playlist__WEBPACK_IMPORTED_MODULE_2__/* .useCreatePlaylistMutation */ .tS)();
  const [updatePlaylist, {
    isLoading: isUpdating
  }] = (0,_store_api_playlist__WEBPACK_IMPORTED_MODULE_2__/* .useUpdatePlaylistMutation */ .Xc)();
  const isLoading = isLoadingPlaylist || isLoadingSongs || isCreating || isUpdating;
  const songOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return songs?.map(song => ({
      label: song.name,
      value: song._id
    }));
  }, [songs]); // Prefill form when editing

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isEdit && existingPlaylist) {
      form.setFieldsValue({
        name: existingPlaylist.name,
        songIds: existingPlaylist.sounds?.map(sound => sound._id) || []
      });
    }
  }, [isEdit, existingPlaylist, form]);
  const handleOnFinish = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async values => {
    try {
      if (isEdit && id) {
        await updatePlaylist({
          id,
          data: {
            name: values.name,
            soundIds: values.songIds
          }
        });
      } else {
        await createPlaylist({
          data: {
            name: values.name,
            soundIds: values.songIds
          }
        });
      }

      onFinish?.(values);
      onSuccess?.();
    } catch (error) {
      console.error('Error saving playlist:', error);
    }
  }, [isEdit, id, createPlaylist, updatePlaylist, onFinish, onSuccess]);

  if (isLoadingPlaylist || isLoadingSongs) {
    return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Spin, {});
  }

  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Form, _objectSpread(_objectSpread({
    form: form,
    name: "playlist-upsert-form",
    layout: "vertical",
    onFinish: handleOnFinish
  }, props), {}, {
    children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
      name: "name",
      label: "Playlist Name",
      rules: [{
        required: true,
        message: 'This field is required'
      }],
      children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
        placeholder: "Enter playlist name"
      })
    }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
      name: "songIds",
      label: "Select Songs",
      rules: [{
        required: true,
        message: 'Please select at least one song'
      }],
      children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
        mode: "multiple",
        allowClear: true,
        style: {
          width: '100%'
        },
        placeholder: "Please select songs",
        options: songOptions
      })
    }), children]
  }));
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4593:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export SelectSongsForm */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_api_sound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7510);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_api_sound__WEBPACK_IMPORTED_MODULE_2__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__]);
([_store_api_sound__WEBPACK_IMPORTED_MODULE_2__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
const _excluded = (/* unused pure expression or super */ null && (["playlistId", "onFinish", "children"]));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const SelectSongsForm = _ref => {
  let {
    playlistId,
    onFinish,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    data: songs,
    isLoading
  } = useGetSongsQuery();
  const songOptions = useMemo(() => {
    return songs?.map(song => ({
      label: song.name,
      value: song._id
    }));
  }, [songs]);
  const handleOnFinish = useCallback(values => {
    onFinish?.(values);
  }, [onFinish]);
  if (isLoading) return _jsx(Spin, {});
  return _jsx(Form, _objectSpread(_objectSpread({
    name: "SelectSongs-form",
    layout: "vertical",
    onFinish: handleOnFinish
  }, props), {}, {
    children: _jsx(Form.Item, {
      name: "songIds",
      label: "Select Songs",
      rules: [{
        required: true
      }],
      children: _jsx(Select, {
        mode: "multiple",
        allowClear: true,
        style: {
          width: '100%'
        },
        placeholder: "Please select",
        options: songOptions
      })
    })
  }));
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5574:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yl": () => (/* reexport safe */ _PlaylistUpsertForm__WEBPACK_IMPORTED_MODULE_2__.y)
/* harmony export */ });
/* harmony import */ var _PlaylistForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3369);
/* harmony import */ var _SelectSongsForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4593);
/* harmony import */ var _PlaylistUpsertForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6278);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PlaylistForm__WEBPACK_IMPORTED_MODULE_0__, _SelectSongsForm__WEBPACK_IMPORTED_MODULE_1__, _PlaylistUpsertForm__WEBPACK_IMPORTED_MODULE_2__]);
([_PlaylistForm__WEBPACK_IMPORTED_MODULE_0__, _SelectSongsForm__WEBPACK_IMPORTED_MODULE_1__, _PlaylistUpsertForm__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3397:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ PlaylistDeleteButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1806);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_api__WEBPACK_IMPORTED_MODULE_2__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__]);
([_store_api__WEBPACK_IMPORTED_MODULE_2__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const PlaylistDeleteButton = ({
  className,
  playlistId
}) => {
  const [deletePlaylist] = (0,_store_api__WEBPACK_IMPORTED_MODULE_2__/* .useDeletePlaylistMutation */ .R8)();

  const handleConfirm = () => {
    deletePlaylist({
      id: playlistId,
      data: undefined
    });
  };

  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Popconfirm, {
    className: className,
    title: "Delete the playlist",
    description: "Are you sure to delete this playlist?",
    onConfirm: handleConfirm,
    okText: "Yes",
    cancelText: "No",
    children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
      children: "Delete"
    })
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3378:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ PlaylistEditButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4399);
/* harmony import */ var _PlaylistForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5574);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__, _PlaylistForm__WEBPACK_IMPORTED_MODULE_3__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__]);
([_components__WEBPACK_IMPORTED_MODULE_2__, _PlaylistForm__WEBPACK_IMPORTED_MODULE_3__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const PlaylistEditButton = ({
  className,
  playlistId
}) => {
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const handleOpenDrawer = () => setOpen(true);

  const handleCloseDrawer = () => setOpen(false);

  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
      onClick: handleOpenDrawer,
      children: "Edit"
    }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Drawer */ .dy, {
      title: "Edit Playlist",
      open: open,
      onClose: handleCloseDrawer,
      destroyOnClose: true,
      children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_PlaylistForm__WEBPACK_IMPORTED_MODULE_3__/* .PlaylistUpsertForm */ .yl, {
        id: playlistId,
        onSuccess: handleCloseDrawer,
        children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
          type: "primary",
          htmlType: "submit",
          block: true,
          children: "Save Changes"
        })
      })
    })]
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3839:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ PlaylistList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3377);
/* harmony import */ var _PlaylistDeleteButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3397);
/* harmony import */ var _PlaylistEditButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3378);
/* harmony import */ var _PlaylistPlayStopButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(566);
/* harmony import */ var _PlaylistShuffleSwitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1138);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_2__, _PlaylistDeleteButton__WEBPACK_IMPORTED_MODULE_3__, _PlaylistEditButton__WEBPACK_IMPORTED_MODULE_4__, _PlaylistPlayStopButton__WEBPACK_IMPORTED_MODULE_5__, _PlaylistShuffleSwitch__WEBPACK_IMPORTED_MODULE_6__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__]);
([_store__WEBPACK_IMPORTED_MODULE_2__, _PlaylistDeleteButton__WEBPACK_IMPORTED_MODULE_3__, _PlaylistEditButton__WEBPACK_IMPORTED_MODULE_4__, _PlaylistPlayStopButton__WEBPACK_IMPORTED_MODULE_5__, _PlaylistShuffleSwitch__WEBPACK_IMPORTED_MODULE_6__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
    children: text
  })
}, {
  title: 'Songs',
  dataIndex: 'sounds',
  key: 'sounds',
  width: 500,
  render: (sounds, record) => _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: sounds.map(item => _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Tag, {
      children: item.name
    }, item._id))
  })
}, {
  title: 'Shuffle',
  dataIndex: 'isShuffle',
  key: 'isShuffle',
  width: 160,
  render: (_, record) => _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_PlaylistShuffleSwitch__WEBPACK_IMPORTED_MODULE_6__/* .PlaylistShuffleSwitch */ .W, {
    playlist: record
  })
}, {
  title: 'Actions',
  key: 'actions',
  render: (_, record) => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Space, {
    size: "middle",
    children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_PlaylistPlayStopButton__WEBPACK_IMPORTED_MODULE_5__/* .PlaylistPlayStopButton */ .H, {
      playlist: record
    }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_PlaylistEditButton__WEBPACK_IMPORTED_MODULE_4__/* .PlaylistEditButton */ .w, {
      playlistId: record._id
    }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_PlaylistDeleteButton__WEBPACK_IMPORTED_MODULE_3__/* .PlaylistDeleteButton */ .N, {
      playlistId: record._id
    })]
  })
}];
const PlaylistList = ({
  className,
  title
}) => {
  const {
    data,
    isLoading
  } = (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .useGetPlaylistListQuery */ .a9)();
  const scroll = {
    x: 'max-content'
  };
  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Table, {
    scroll: scroll,
    caption: title,
    className: className,
    loading: isLoading,
    columns: columns,
    dataSource: data,
    rowKey: record => record._id
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 566:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ PlaylistPlayStopButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1806);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8473);
/* harmony import */ var _hooks_usePlayingClientEvent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3957);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_api__WEBPACK_IMPORTED_MODULE_1__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__]);
([_store_api__WEBPACK_IMPORTED_MODULE_1__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const PlaylistPlayStopButton = ({
  playlist
}) => {
  const [operatePlaylist] = (0,_store_api__WEBPACK_IMPORTED_MODULE_1__/* .useOperatePlaylistMutation */ .dZ)();
  const eventData = (0,_hooks_usePlayingClientEvent__WEBPACK_IMPORTED_MODULE_3__/* .usePlayingClientEvent */ .M)(playlist._id);
  const isPlaying = eventData?.isPlaying !== undefined ? eventData.isPlaying : !!playlist.jobId;

  const handleOperation = async () => {
    await operatePlaylist({
      id: playlist?._id,
      operation: isPlaying ? _types__WEBPACK_IMPORTED_MODULE_2__.PlaylistOperation.Stop : _types__WEBPACK_IMPORTED_MODULE_2__.PlaylistOperation.Play
    });
  };

  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
    onClick: handleOperation,
    children: isPlaying ? 'Stop' : 'Play'
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1138:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ PlaylistShuffleSwitch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4563);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3377);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__, _store__WEBPACK_IMPORTED_MODULE_4__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__, _store__WEBPACK_IMPORTED_MODULE_4__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }









var _ref =  true ? {
  name: "9o98sf",
  styles: "display:flex;align-items:center;column-gap:0.375rem"
} : 0;

const PlaylistShuffleSwitch = ({
  playlist
}) => {
  const [updatePlaylist] = (0,_store__WEBPACK_IMPORTED_MODULE_4__/* .useUpdatePlaylistMutation */ .Xc)();
  const {
    0: isShuffling,
    1: setIsShuffling
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!!playlist?.isShuffle);

  const handleSwitchChange = checked => {
    setIsShuffling(checked);
    updatePlaylist({
      id: playlist?._id,
      data: {
        isShuffle: checked
      }
    });
  };

  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    css: _ref,
    children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Switch, {
      defaultChecked: !!playlist?.isShuffle,
      onChange: handleSwitchChange
    }), isShuffling && _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faShuffle
    }), isShuffling && _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
      children: "Shuffle"
    })]
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5341:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PX": () => (/* reexport safe */ _PlaylistList__WEBPACK_IMPORTED_MODULE_0__.P)
/* harmony export */ });
/* harmony import */ var _PlaylistList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3839);
/* harmony import */ var _PlaylistEditButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3378);
/* harmony import */ var _PlaylistDeleteButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3397);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PlaylistList__WEBPACK_IMPORTED_MODULE_0__, _PlaylistEditButton__WEBPACK_IMPORTED_MODULE_1__, _PlaylistDeleteButton__WEBPACK_IMPORTED_MODULE_2__]);
([_PlaylistList__WEBPACK_IMPORTED_MODULE_0__, _PlaylistEditButton__WEBPACK_IMPORTED_MODULE_1__, _PlaylistDeleteButton__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 942:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PX": () => (/* reexport safe */ _PlaylistList__WEBPACK_IMPORTED_MODULE_1__.PX),
/* harmony export */   "fG": () => (/* reexport safe */ _PlaylistDetails__WEBPACK_IMPORTED_MODULE_2__.f),
/* harmony export */   "z": () => (/* reexport safe */ _CreatePlaylist__WEBPACK_IMPORTED_MODULE_0__.z)
/* harmony export */ });
/* harmony import */ var _CreatePlaylist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4580);
/* harmony import */ var _PlaylistList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5341);
/* harmony import */ var _PlaylistDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1623);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CreatePlaylist__WEBPACK_IMPORTED_MODULE_0__, _PlaylistList__WEBPACK_IMPORTED_MODULE_1__, _PlaylistDetails__WEBPACK_IMPORTED_MODULE_2__]);
([_CreatePlaylist__WEBPACK_IMPORTED_MODULE_0__, _PlaylistList__WEBPACK_IMPORTED_MODULE_1__, _PlaylistDetails__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;