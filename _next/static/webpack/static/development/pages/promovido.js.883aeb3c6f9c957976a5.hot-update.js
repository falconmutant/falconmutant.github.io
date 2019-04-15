webpackHotUpdate("static/development/pages/promovido.js",{

/***/ "./actions/promovido.js":
/*!******************************!*\
  !*** ./actions/promovido.js ***!
  \******************************/
/*! exports provided: get_zones, get_areas, get_sections, get_persons, set_formPromoted, save_promoted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_zones", function() { return get_zones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_areas", function() { return get_areas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_sections", function() { return get_sections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_persons", function() { return get_persons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_formPromoted", function() { return set_formPromoted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save_promoted", function() { return save_promoted; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types */ "./actions/types.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);







var get_zones = function get_zones(token) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(dispatch) {
        var response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('http://10.0.0.5:8000/api/', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Token ".concat(token)
                  },
                  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()({
                    app: 'territory',
                    target: 'zone',
                    action: 'all',
                    depth: 2
                  })
                });

              case 2:
                response = _context.sent;

                if (!response.ok) {
                  _context.next = 11;
                  break;
                }

                _context.t0 = dispatch;
                _context.t1 = _types__WEBPACK_IMPORTED_MODULE_5__["actionTypes"].PROMOTED_GET_ZONES;
                _context.next = 8;
                return response.json();

              case 8:
                _context.t2 = _context.sent;
                _context.t3 = {
                  type: _context.t1,
                  payload: _context.t2
                };
                return _context.abrupt("return", (0, _context.t0)(_context.t3));

              case 11:
                _context.next = 13;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('http://10.0.0.5:8000/api/', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Token ".concat(token)
                  },
                  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()({
                    app: 'api',
                    target: 'promoted',
                    action: 'all',
                    depth: 2
                  })
                });

              case 13:
                response = _context.sent;

                if (!response.ok) {
                  _context.next = 22;
                  break;
                }

                _context.t4 = dispatch;
                _context.t5 = _types__WEBPACK_IMPORTED_MODULE_5__["actionTypes"].GET_PROMOTED;
                _context.next = 19;
                return response.json();

              case 19:
                _context.t6 = _context.sent;
                _context.t7 = {
                  type: _context.t5,
                  payload: _context.t6
                };
                return _context.abrupt("return", (0, _context.t4)(_context.t7));

              case 22:
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
var get_areas = function get_areas(Data, zone) {
  return function (dispatch) {
    Data.map(function (data) {
      if (zone == data.id) return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_5__["actionTypes"].PROMOTED_GET_AREAS,
        payload: data.area
      });
    });
  };
};
var get_sections = function get_sections(Data, form) {
  return function (dispatch) {
    Data.map(function (data) {
      if (form.zone == data.id) data.area.map(function (area) {
        if (form.area == area.id) return dispatch({
          type: _types__WEBPACK_IMPORTED_MODULE_5__["actionTypes"].PROMOTED_GET_SECTIONS,
          payload: area.section
        });
      });
    });
  };
};
var get_persons = function get_persons(Data, token, form, name) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(dispatch) {
        var name_section, response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                Data.map(function (data) {
                  if (form.zone == data.id) data.area.map(function (area) {
                    if (form.area == area.id) area.section.map(function (section) {
                      if (form.section == section.id) name_section = section.section;
                    });
                  });
                });
                _context2.next = 3;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('http://10.0.0.5:8000/api/', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Token ".concat(token)
                  },
                  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()({
                    app: 'api',
                    target: 'census',
                    action: 'get',
                    model: {
                      search: {
                        "search": name,
                        "address__Seccion": "".concat(name_section)
                      }
                    }
                  })
                });

              case 3:
                response = _context2.sent;

                if (!response.ok) {
                  _context2.next = 12;
                  break;
                }

                _context2.t0 = dispatch;
                _context2.t1 = _types__WEBPACK_IMPORTED_MODULE_5__["actionTypes"].PROMOTED_GET_PERSONS;
                _context2.next = 9;
                return response.json();

              case 9:
                _context2.t2 = _context2.sent;
                _context2.t3 = {
                  type: _context2.t1,
                  payload: _context2.t2
                };
                return _context2.abrupt("return", (0, _context2.t0)(_context2.t3));

              case 12:
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
};
var set_formPromoted = function set_formPromoted(target, value) {
  return function (dispatch) {
    return dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_5__["actionTypes"].PROMOTED_SET_FORM,
      target: target,
      value: value
    });
  };
};
var save_promoted = function save_promoted(state) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(dispatch) {
        var body, formPromoted, _response, person, response;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                formPromoted = state.promovido.formPromoted;

                if (!(formPromoted.userExist != null)) {
                  _context3.next = 5;
                  break;
                }

                body = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()({
                  app: 'api',
                  target: 'promoted',
                  action: 'add',
                  model: {
                    person: formPromoted.userExist,
                    phone: formPromoted.phone,
                    status: 'S',
                    candidate: [state.global.active_candidate]
                  }
                });
                _context3.next = 16;
                break;

              case 5:
                _context3.next = 7;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('http://10.0.0.5:8000/api/', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Token ".concat(state.auth.token)
                  },
                  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()({
                    app: 'api',
                    target: 'census',
                    action: 'add',
                    model: {
                      last_name: formPromoted.last_name,
                      second_last_name: formPromoted.second_last_name,
                      name: formPromoted.name,
                      address: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.promovido.forms, {
                        birthday: "".concat(formPromoted.day, "/").concat(formPromoted.month, "/").concat(formPromoted.year)
                      })
                    }
                  })
                });

              case 7:
                _response = _context3.sent;

                if (!_response.ok) {
                  _context3.next = 15;
                  break;
                }

                _context3.next = 11;
                return _response.json();

              case 11:
                person = _context3.sent;
                body = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()({
                  app: 'api',
                  target: 'promoted',
                  action: 'add',
                  model: {
                    person: person.id,
                    phone: formPromoted.phone,
                    status: 'S',
                    candidate: [state.global.active_candidate]
                  }
                });
                _context3.next = 16;
                break;

              case 15:
                return _context3.abrupt("return", {
                  error: 'error'
                });

              case 16:
                _context3.next = 18;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('http://10.0.0.5:8000/api/', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Token ".concat(state.auth.token)
                  },
                  body: body
                });

              case 18:
                response = _context3.sent;

                if (!response.ok) {
                  _context3.next = 21;
                  break;
                }

                return _context3.abrupt("return", dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_5__["actionTypes"].SAVE_PROMOTED
                }));

              case 21:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./actions/types.js":
/*!**************************!*\
  !*** ./actions/types.js ***!
  \**************************/
/*! exports provided: actionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
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

/***/ }),

/***/ "./pages/promovido.js":
/*!****************************!*\
  !*** ./pages/promovido.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _components_Promovidos_Table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Promovidos/Table */ "./components/Promovidos/Table.js");
/* harmony import */ var _components_Promovidos_Filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Promovidos/Filter */ "./components/Promovidos/Filter.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions/auth */ "./actions/auth.js");
/* harmony import */ var react_md__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-md */ "./node_modules/react-md/es/index.js");






var _jsxFileName = "/Users/rodrigo/WebstormProjects/Proceso/pages/promovido.js";








var Promovido =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Promovido, _Component);

  function Promovido(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Promovido);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Promovido).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Promovido, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        breadcrumb: "Nuevo Promovido"
      }, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Promovidos_Filter__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Promovidos_Table__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DataTable, {
        noHeader: true,
        columns: [{
          name: 'id',
          selector: 'id',
          sortable: true
        }, {
          name: 'Nombre',
          selector: 'full',
          sortable: true
        }],
        data: this.props.Promoteds,
        noDataComponent: "SIN PROMOVIDOS",
        selectableRows: true,
        selectableRowsComponent: react_md__WEBPACK_IMPORTED_MODULE_12__["Checkbox"],
        selectableRowsComponentProps: {
          uncheckedIcon: '',
          checkedIcon: ''
        },
        onTableUpdate: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }))));
    }
  }]);

  return Promovido;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    Promoteds: state.promovido.Promoteds
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps)(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_11__["withAuthSync"])(Promovido)));

/***/ })

})
//# sourceMappingURL=promovido.js.883aeb3c6f9c957976a5.hot-update.js.map