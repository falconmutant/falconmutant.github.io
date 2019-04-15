webpackHotUpdate("static/development/pages/promovido.js",{

/***/ "./actions/auth.js":
/*!*************************!*\
  !*** ./actions/auth.js ***!
  \*************************/
/*! exports provided: login, logout, withAuthSync, auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAuthSync", function() { return withAuthSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/dist/next-cookies.browser.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./types */ "./actions/types.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16__);












var _jsxFileName = "/Users/rodrigo/WebstormProjects/Proceso/actions/auth.js";





var login = function login(username, password) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.mark(function _callee(dispatch) {
        var response, state;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16___default()("".concat(_types__WEBPACK_IMPORTED_MODULE_15__["URL"], "/auth/login/"), {
                  method: 'POST',
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_10___default()({
                    'target': 'auth',
                    'action': 'login',
                    'depth': 1,
                    'model': {
                      username: username,
                      password: password
                    }
                  })
                });

              case 2:
                response = _context.sent;

                if (!response.ok) {
                  _context.next = 20;
                  break;
                }

                next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push('/');
                _context.t0 = dispatch;
                _context.t1 = _types__WEBPACK_IMPORTED_MODULE_15__["actionTypes"].LOGIN_SUCCESS;
                _context.next = 9;
                return response.json();

              case 9:
                _context.t2 = _context.sent;
                _context.t3 = {
                  type: _context.t1,
                  payload: _context.t2
                };
                state = (0, _context.t0)(_context.t3);
                state = state.payload;
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_15__["actionTypes"].GLOBAL_GET_PROCESS,
                  payload: state.profile.process
                });
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_15__["actionTypes"].GLOBAL_SET_PROCESS,
                  payload: state.profile.process[0].id
                });
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_15__["actionTypes"].GLOBAL_GET_CANDIDATES,
                  payload: state.profile.process[0].candidates
                });
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_15__["actionTypes"].GLOBAL_SET_CANDIDATE,
                  payload: state.profile.process[0].candidates[0].id
                });
                return _context.abrupt("return", state);

              case 20:
                return _context.abrupt("return", dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_15__["actionTypes"].AUTH_ERROR
                }));

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
var logout = function logout(token) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.mark(function _callee2(dispatch) {
        var response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16___default()('http://10.0.0.5:8000/auth/logout/', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Token ".concat(token)
                  },
                  body: null
                });

              case 2:
                response = _context2.sent;
                next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push('/login');
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_15__["actionTypes"].LOGOUT_SUCCESS
                });
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_15__["actionTypes"].DELETE_NOMINAL_LIST
                });
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_15__["actionTypes"].DELETE_PROMOTED
                });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}; // Gets the display name of a JSX component for dev tools

var getDisplayName = function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
};

var withAuthSync = function withAuthSync(WrappedComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(_class, _Component);

    Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(_class, null, [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.mark(function _callee3(ctx) {
          var token, componentProps;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  token = auth(ctx);
                  _context3.t0 = WrappedComponent.getInitialProps;

                  if (!_context3.t0) {
                    _context3.next = 6;
                    break;
                  }

                  _context3.next = 5;
                  return WrappedComponent.getInitialProps(ctx);

                case 5:
                  _context3.t0 = _context3.sent;

                case 6:
                  componentProps = _context3.t0;
                  return _context3.abrupt("return", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, componentProps, {
                    token: token
                  }));

                case 8:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        function getInitialProps(_x3) {
          return _getInitialProps.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function _class(props) {
      var _this;

      Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _class);

      _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(_class).call(this, props));
      _this.syncLogout = _this.syncLogout.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
      return _this;
    }

    Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        window.addEventListener('storage', this.syncLogout);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener('storage', this.syncLogout);
        window.localStorage.removeItem('logout');
      }
    }, {
      key: "syncLogout",
      value: function syncLogout(event) {
        if (event.key === 'logout') {
          console.log('logged out from storage!');
          next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push('/login');
        }
      }
    }, {
      key: "render",
      value: function render() {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(WrappedComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }));
      }
    }]);

    return _class;
  }(react__WEBPACK_IMPORTED_MODULE_12__["Component"]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_class, "displayName", "withAuthSync(".concat(getDisplayName(WrappedComponent), ")")), _temp;
};
var auth = function auth(ctx) {
  var _nextCookie = next_cookies__WEBPACK_IMPORTED_MODULE_14___default()(ctx),
      token = _nextCookie.token;
  /*
   * This happens on server only, ctx.req is available means it's being
   * rendered on server. If we are on server and token is not available,
   * means user is not logged in.
   */


  if (ctx.req && !token) {
    ctx.res.writeHead(302, {
      Location: '/login'
    });
    ctx.res.end();
    return;
  } // We already checked for server. This should only happen on client.


  if (!token) {
    next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push('/login');
  }

  return token;
};

/***/ }),

/***/ "./actions/types.js":
/*!**************************!*\
  !*** ./actions/types.js ***!
  \**************************/
/*! exports provided: actionTypes, URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
var actionTypes = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  AUTH_ERROR: 'AUTH_ERROR',
  LOAD_MENU: 'LOAD_MENU',
  GET_SECTIONS: 'GET_SECTIONS',
  GET_POLLING_STATIONS: 'GET_POLLING_STATIONS',
  GET_NOMINAL_LIST: 'GET_NOMINAL_LIST',
  DELETE_NOMINAL_LIST: 'DELETE_NOMINAL_LIST',
  DELETE_PROMOTED: 'DELETE_PROMOTED',
  GLOBAL_SET_PROCESS: 'GLOBAL_SET_PROCESS',
  GLOBAL_SET_CANDIDATE: 'GLOBAL_SET_CANDIDATE',
  GLOBAL_GET_PROCESS: 'GLOBAL_GET_PROCESS',
  GLOBAL_GET_CANDIDATES: 'GLOBAL_GET_CANDIDATES',
  GLOBAL_GET_NEW_PROCESS: 'GLOBAL_GET_NEW_PROCESS',
  PROMOTED_GET_SECTIONS: 'PROMOTED_GET_SECTIONS',
  PROMOTED_GET_ZONES: 'PROMOTED_GET_ZONES',
  PROMOTED_GET_AREAS: 'PROMOTED_GET_AREAS',
  PROMOTED_GET_PERSONS: 'PROMOTED_GET_PERSONS',
  PROMOTED_SET_FORM: 'PROMOTED_SET_FORM',
  SAVE_PROMOTED: 'SAVE_PROMOTED',
  GET_PROMOTED: 'GET_PROMOTED'
};
var URL = 'http://174.138.68.40';

/***/ })

})
//# sourceMappingURL=promovido.js.a12939b5d497caa5b3c0.hot-update.js.map