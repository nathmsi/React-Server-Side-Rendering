/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _middlewares_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _db_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38);
// import 'babel/polyfill';





 // load db


var main = express__WEBPACK_IMPORTED_MODULE_1___default()();
main.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({
  extended: false
}));
main.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());
main.use(cors__WEBPACK_IMPORTED_MODULE_3___default()({
  origin: true
})); // main.post('/users', (req,res) => res.send(req.body));

main.use('/api-v1', _server__WEBPACK_IMPORTED_MODULE_6__["default"]); // api request

main.use('/', _middlewares_render__WEBPACK_IMPORTED_MODULE_4__["default"]); // render page html
// set port, listen for requests

var PORT = 3000;
main.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT, "."));
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _client_Routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_9__);











var express = __webpack_require__(2);

var renderRouter = express.Router();
renderRouter.use(express["static"]('public'));

var renderer = function renderer(req, store, context) {
  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__["renderToString"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["StaticRouter"], {
    location: req.path,
    context: context
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_5__["renderRoutes"])(_client_Routes__WEBPACK_IMPORTED_MODULE_8__["default"])))));
  var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_9__["Helmet"].renderStatic();
  return "\n  <html>\n      <head>\n          ".concat(helmet.title.toString(), "\n          ").concat(helmet.meta.toString(), "\n          <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css\">\n      </head>\n      <body>\n          <div id=\"root\">").concat(content, "</div>\n          <script>\n              window.INITIAL_STATE=").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_7___default()(store.getState()), "\n          </script>\n          <script src=\"bundle.js\"> </script>\n      </body>\n  </html>\n  ");
};

renderRouter.get('*', function (req, res) {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_client_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], {});
  var context = {};
  var content = renderer(req, store, context);
  res.send(content);
});
/* harmony default export */ __webpack_exports__["default"] = (renderRouter);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _userReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _adminReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);




/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  users: _userReducers__WEBPACK_IMPORTED_MODULE_1__["default"],
  auth: _authReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  admins: _adminReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_USERS"]:
      return action.payload.data;

    default:
      return state;
  }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USERS", function() { return FETCH_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CURRENT_USER", function() { return FETCH_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCurrentUser", function() { return fetchCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ADMINS", function() { return FETCH_ADMINS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAdmins", function() { return fetchAdmins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USERS_LOGIN", function() { return FETCH_USERS_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsersLogin", function() { return fetchUsersLogin; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var FETCH_USERS = 'fetch_users';
var fetchUsers = function fetchUsers() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get('/users');

            case 2:
              res = _context.sent;
              dispatch({
                type: FETCH_USERS,
                payload: res
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};
var FETCH_CURRENT_USER = 'fetch_current_user';
var fetchCurrentUser = function fetchCurrentUser() {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return api.get('/current_user');

            case 2:
              res = _context2.sent;
              dispatch({
                type: FETCH_CURRENT_USER,
                payload: res
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var FETCH_ADMINS = 'fetch_admins';
var fetchAdmins = function fetchAdmins() {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return api.get('/admins');

            case 2:
              res = _context3.sent;
              //console.log(res);
              dispatch({
                type: FETCH_ADMINS,
                payload: res
              });

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var FETCH_USERS_LOGIN = 'login_users_login';
var fetchUsersLogin = function fetchUsersLogin() {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getState, api) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              console.log('hihihi');
              api.post('api-v1/auth/signin', {
                "firstName": "nathan",
                "password": "123456",
                "email": "nathan@gmail.com"
              }).then(function (result) {
                dispatch({
                  type: FETCH_USERS_LOGIN,
                  payload: {
                    token: result.data
                  }
                });
              })["catch"](function (error) {
                dispatch({
                  type: FETCH_USERS_LOGIN,
                  payload: {
                    error: error
                  }
                });
              });

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x10, _x11, _x12) {
      return _ref4.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_CURRENT_USER"]:
      return action.payload.data || false;

    case _actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_USERS_LOGIN"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        token: action.payload
      });

    default:
      return state;
  }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_ADMINS"]:
      return action.payload.data;

    default:
      return state;
  }
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _pages_HomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _pages_UsersListPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var _pages_NotFoundPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* harmony import */ var _pages_AdminListPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/* harmony default export */ __webpack_exports__["default"] = ([_objectSpread(_objectSpread({}, _App__WEBPACK_IMPORTED_MODULE_0__["default"]), {}, {
  routes: [_objectSpread(_objectSpread({}, _pages_HomePage__WEBPACK_IMPORTED_MODULE_1__["default"]), {}, {
    path: '/',
    exact: true
  }), _objectSpread(_objectSpread({}, _pages_UsersListPage__WEBPACK_IMPORTED_MODULE_2__["default"]), {}, {
    path: '/users'
  }), _objectSpread(_objectSpread({}, _pages_AdminListPage__WEBPACK_IMPORTED_MODULE_4__["default"]), {}, {
    path: '/admins'
  }), _objectSpread({}, _pages_NotFoundPage__WEBPACK_IMPORTED_MODULE_3__["default"])]
})]);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);





var App = function App(_ref) {
  var route = _ref.route;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__["renderRoutes"])(route.routes));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  component: App,
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["fetchCurrentUser"])());
  }
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    menuButton: {
      color: '#fff'
    },
    title: {
      flexGrow: 1,
      color: '#fff'
    }
  };
});

function Headers() {
  var classes = useStyles();
  var auth = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.auth;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "static",
    color: "primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"],
    to: "/",
    variant: "h6",
    className: classes.title
  }, "React SSR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"],
    to: "/users",
    className: classes.menuButton
  }, "Users"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"],
    to: "/admins",
    className: classes.menuButton
  }, "Admins"), auth ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    href: "/api/logout",
    className: classes.menuButton
  }, "Logout") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    href: "/api/auth/google",
    className: classes.menuButton
  }, "Login "))));
}

/* harmony default export */ __webpack_exports__["default"] = (Headers);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);




var login = new Promise(function (resolve, reject) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('api-v1/auth/signin', {
    "firstName": "nathan",
    "password": "123456",
    "email": "nathan@gmail.com"
  }).then(function (reuslt) {
    return resolve(reuslt.data);
  })["catch"](function (error) {
    return reject(error);
  });
});

var config = function config(token) {
  return {
    headers: {
      Authorization: "Bearer ".concat(token)
    }
  };
};

var Home = function Home() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(function () {
    console.log('hi');
    Object(_actions__WEBPACK_IMPORTED_MODULE_2__["fetchUsersLogin"])(dispatch);
    login.then(function (_ref) {
      var token = _ref.token;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('api-v1/candidates', config(token)).then(function (result) {
        console.log(result);
      });
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "center-align",
    style: {
      marginTop: '200px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Welcome"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Check out these awesome features"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  component: Home
});

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {
      margin: theme.spacing(10),
      flexDirection: 'column',
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  };
});

function UsersList() {
  var classes = useStyles();
  var users = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.users;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["fetchUsers"])());
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__["Helmet"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "".concat(users.length, " Users Loaded")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: "Users App"
  })), "Here's a big list of users:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5___default.a, null));
}

function loadData(store) {
  return store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["fetchUsers"])());
}

/* harmony default export */ __webpack_exports__["default"] = ({
  loadData: loadData,
  component: UsersList
});

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var NotFoundPage = function NotFoundPage(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === void 0 ? {} : _ref$staticContext;
  staticContext.notFound = true;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Ooops, route not found.");
};

/* harmony default export */ __webpack_exports__["default"] = ({
  component: NotFoundPage
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _components_hocs_requireAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__);








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {
      margin: theme.spacing(10),
      flexDirection: 'column',
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  };
});

function AdminsListPage() {
  var classes = useStyles();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var admins = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.admins;
  });
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["fetchAdmins"])());
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Protected list of admins"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5___default.a, null, admins.map(function (admin) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
      key: admin.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
      primary: admin.name,
      secondary: admin.id
    }));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = ({
  loadData: function loadData(_ref) {
    var dispatch = _ref.dispatch;
    return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["fetchAdmins"])());
  },
  component: Object(_components_hocs_requireAuth__WEBPACK_IMPORTED_MODULE_3__["default"])(AdminsListPage)
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (ChildComponent) {
  function RequireAuth(props) {
    switch (props.auth) {
      case false:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
          to: "/"
        });

      case null:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...");

      default:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChildComponent, props);
    }
  }

  function mapStateToProps(_ref) {
    var auth = _ref.auth;
    return {
      auth: auth
    };
  }

  return Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(RequireAuth);
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var sqlite3 = __webpack_require__(37).verbose();

var DBSOURCE = "./src/server/db/db.sqlite";
var db = new sqlite3.Database(DBSOURCE, function (err) {
  if (err) {
    // Cannot open database
    console.error(err.message); // throw err
  } else {
    console.log('Connected to the SQLite database.');
  }
});
/* harmony default export */ __webpack_exports__["default"] = (db);

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("sqlite3");

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes_authRoute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
/* harmony import */ var _routes_candidatesRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);



var api = express__WEBPACK_IMPORTED_MODULE_0___default()();
api.use('/auth', _routes_authRoute__WEBPACK_IMPORTED_MODULE_1__["default"]);
api.use('/candidates', _routes_candidatesRoute__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_authController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);

var userRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
 // POST

userRouter.post('/signin', _controllers_authController__WEBPACK_IMPORTED_MODULE_1__["signin"]);
userRouter.post('/signup', _controllers_authController__WEBPACK_IMPORTED_MODULE_1__["signup"]);
/* harmony default export */ __webpack_exports__["default"] = (userRouter);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signin", function() { return signin; });
/* harmony import */ var _db_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
// import admin from'firebase-admin');



var SECRET_KEY = 'some key'; // process.env.SECRET_KEY

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

;
var signup = function signup(req, res) {
  try {
    var _req$body = req.body,
        password = _req$body.password,
        username = _req$body.username,
        email = _req$body.email;

    if (!validateEmail(email)) {
      res.status(200).json({
        success: false,
        message: "Error was found email input not correct"
      });
    }

    bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.hash(password, 10, function (err, hash) {
      // hash the password
      if (err) {
        res.status(200).json({
          success: false,
          message: "Error was found input not correct"
        });
      } // insert into table user with password hashed


      _db_database__WEBPACK_IMPORTED_MODULE_0__["default"].run("INSERT INTO user (username, email, password)\n                VALUES (?, ?, ?)", [username, email, hash], function (error, rows) {
        if (error) {
          res.status(200).json({
            success: false,
            message: "Error was found input not correct or user already exist"
          });
        } else {
          var token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign({
            email: email
          }, SECRET_KEY); // generate token from jwt

          res.status(200).json({
            success: true,
            token: token
          });
        }
      });
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "Error was found input not correct"
    });
  }
};
var signin = function signin(req, res) {
  try {
    var _req$body2 = req.body,
        password = _req$body2.password,
        email = _req$body2.email;

    if (!validateEmail(email)) {
      res.status(200).json({
        success: false,
        message: "Error was found email input not correct"
      });
    }

    _db_database__WEBPACK_IMPORTED_MODULE_0__["default"].get("SELECT * FROM user WHERE email  = ?", [email], function (err, row) {
      // verify if user exist
      if (err) {
        res.status(200).json({
          success: false,
          message: "Error was found",
          errorMessage: err
        });
      } else if (row) {
        bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.compare(password, row.password, function (err, result) {
          // compare hashed password from db with the password
          if (result) {
            // Passwords match
            var token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign({
              email: email
            }, SECRET_KEY); // generate token from jwt

            res.status(200).json({
              success: true,
              token: token
            });
          } else {
            // Passwords don't match
            res.status(200).json({
              success: false,
              message: "Error password incorrect"
            });
          }
        });
      } else {
        res.status(200).json({
          success: false,
          message: "Error user not found"
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: "Error was found",
      errorMessage: error.errorMessage
    });
  }
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_candidatesController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);
/* harmony import */ var _middlewares_requireAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);

var candidateRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();

 // GET

candidateRouter.get('/', _middlewares_requireAuth__WEBPACK_IMPORTED_MODULE_2__["default"], _controllers_candidatesController__WEBPACK_IMPORTED_MODULE_1__["getlistCandidates"]); // with middleware auth require

/* harmony default export */ __webpack_exports__["default"] = (candidateRouter);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getlistCandidates", function() { return getlistCandidates; });
/* harmony import */ var _db_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);

var getlistCandidates = function getlistCandidates(req, res) {
  try {
    _db_database__WEBPACK_IMPORTED_MODULE_0__["default"].all("SELECT * FROM candidate", [], function (err, rows) {
      // get from table candidate 
      if (err) {
        res.status(401).json({
          success: false,
          message: "error get list candidates"
        });
      }

      res.status(200).json({
        success: true,
        candidates: rows
      });
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "error get list candidates"
    });
  }
};

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var SECRET_KEY = 'some key'; // process.env.SECRET_KEY

function requireAuth(req, res, next) {
  try {
    if (req.headers) {
      var authorization = req.headers.authorization;

      if (!authorization) {
        // exist authorization in header
        res.status(401).json({
          success: false,
          message: "token not found"
        });
      }

      var token = authorization.replace('Bearer ', '');
      jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(token, SECRET_KEY, /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(err, payload) {
          var email;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // jwt verify token
                  if (err) {
                    res.status(401).json({
                      success: false,
                      message: "token not valid"
                    });
                  } else {
                    email = payload.email; //console.log(`email ${email} authorization access`);

                    _db_database__WEBPACK_IMPORTED_MODULE_1__["default"].get("SELECT * FROM user WHERE email  = ?", [email], function (err, row) {
                      // user email exist in the database table user
                      if (err) {
                        res.status(401).json({
                          success: false,
                          message: "token failed user not found"
                        });
                      } else if (row) {
                        req.email = email;
                        next();
                      } else {
                        res.status(401).json({
                          success: false,
                          message: "token failed user not found"
                        });
                      }
                    });
                  }

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    } else {
      res.status(401).json({
        success: false,
        message: "token failed"
      });
    }
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "token failed"
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (requireAuth);

/***/ })
/******/ ]);