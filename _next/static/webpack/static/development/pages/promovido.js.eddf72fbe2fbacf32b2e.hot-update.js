webpackHotUpdate("static/development/pages/promovido.js",{

/***/ "./actions/promovido.js":
/*!******************************!*\
  !*** ./actions/promovido.js ***!
  \******************************/
/*! exports provided: get_zones, get_promoted, get_areas, get_sections, get_persons, set_formPromoted, save_promoted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_zones", function() { return get_zones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_promoted", function() { return get_promoted; });
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
var get_promoted = function get_promoted(token) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(dispatch) {
        var response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
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

              case 2:
                response = _context2.sent;

                if (!response.ok) {
                  _context2.next = 11;
                  break;
                }

                _context2.t0 = dispatch;
                _context2.t1 = _types__WEBPACK_IMPORTED_MODULE_5__["actionTypes"].GET_PROMOTED;
                _context2.next = 8;
                return response.json();

              case 8:
                _context2.t2 = _context2.sent;
                _context2.t3 = {
                  type: _context2.t1,
                  payload: _context2.t2
                };
                return _context2.abrupt("return", (0, _context2.t0)(_context2.t3));

              case 11:
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
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(dispatch) {
        var name_section, response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                Data.map(function (data) {
                  if (form.zone == data.id) data.area.map(function (area) {
                    if (form.area == area.id) area.section.map(function (section) {
                      if (form.section == section.id) name_section = section.section;
                    });
                  });
                });
                _context3.next = 3;
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
                response = _context3.sent;

                if (!response.ok) {
                  _context3.next = 12;
                  break;
                }

                _context3.t0 = dispatch;
                _context3.t1 = _types__WEBPACK_IMPORTED_MODULE_5__["actionTypes"].PROMOTED_GET_PERSONS;
                _context3.next = 9;
                return response.json();

              case 9:
                _context3.t2 = _context3.sent;
                _context3.t3 = {
                  type: _context3.t1,
                  payload: _context3.t2
                };
                return _context3.abrupt("return", (0, _context3.t0)(_context3.t3));

              case 12:
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
      var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(dispatch) {
        var body, formPromoted, _response, person, response;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                formPromoted = state.promovido.formPromoted;

                if (!(formPromoted.userExist != null)) {
                  _context4.next = 5;
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
                _context4.next = 16;
                break;

              case 5:
                _context4.next = 7;
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
                _response = _context4.sent;

                if (!_response.ok) {
                  _context4.next = 15;
                  break;
                }

                _context4.next = 11;
                return _response.json();

              case 11:
                person = _context4.sent;
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
                _context4.next = 16;
                break;

              case 15:
                return _context4.abrupt("return", {
                  error: 'error'
                });

              case 16:
                _context4.next = 18;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('http://10.0.0.5:8000/api/', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Token ".concat(state.auth.token)
                  },
                  body: body
                });

              case 18:
                response = _context4.sent;

                if (!response.ok) {
                  _context4.next = 21;
                  break;
                }

                return _context4.abrupt("return", dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_5__["actionTypes"].SAVE_PROMOTED
                }));

              case 21:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./components/Promovidos/Filter.js":
/*!*****************************************!*\
  !*** ./components/Promovidos/Filter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_select2_wrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-select2-wrapper */ "./node_modules/react-select2-wrapper/lib/components/Select2.js");
/* harmony import */ var react_select2_wrapper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_select2_wrapper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _actions_promovido__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../actions/promovido */ "./actions/promovido.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "/Users/rodrigo/WebstormProjects/Proceso/components/Promovidos/Filter.js";







var Filter =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Filter, _Component);

  function Filter(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Filter);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Filter).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChangeZone", function (e) {
      e.preventDefault();
      _this.props.forms.zone = e.target.value;

      _this.props.get_areas(_this.props.Data, _this.props.forms.zone);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChangeArea", function (e) {
      e.preventDefault();
      _this.props.forms.area = e.target.value;

      _this.props.get_sections(_this.props.Data, _this.props.forms);
    });

    _this.onChangeZone = _this.onChangeZone.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onChangeArea = _this.onChangeArea.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onChangeSection = _this.onChangeSection.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Filter, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.get_zones(this.props.token);
      this.props.get_promoted(this.props.token);
    }
  }, {
    key: "onChangeSection",
    value: function onChangeSection(e) {
      e.preventDefault();
      this.props.forms.section = e.target.value;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$forms = this.props.forms,
          zone = _this$props$forms.zone,
          area = _this$props$forms.area,
          section = _this$props$forms.section;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "box-header with-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        className: "box-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "\xC1rea de Promoci\xF3n"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "box-controls pull-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "box-btn-slide",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "box-body pb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-4 col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Zona"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_select2_wrapper__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: "form-control select2",
        data: this.props.Zones,
        onChange: this.onChangeZone,
        value: zone,
        options: {
          placeholder: 'Elige una zona'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-4 col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Area"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_select2_wrapper__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: "form-control select2",
        data: this.props.Areas,
        onChange: this.onChangeArea,
        value: area,
        options: {
          placeholder: 'Elige un área'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-4 col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Secci\xF3n"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_select2_wrapper__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: "form-control select2",
        data: this.props.Sections,
        onChange: this.onChangeSection,
        value: section,
        options: {
          placeholder: 'Elige una sección'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }))))))));
    }
  }]);

  return Filter;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Filter, "propTypes", {
  get_zones: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func.isRequired,
  get_areas: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func.isRequired,
  get_sections: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func.isRequired,
  get_promoted: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func.isRequired,
  Zones: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.array,
  Areas: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.array,
  Sections: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.array,
  Persons: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.array,
  Data: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.array,
  token: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
  forms: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    token: state.auth.token,
    Zones: state.promovido.Zones,
    Areas: state.promovido.Areas,
    Sections: state.promovido.Sections,
    Data: state.promovido.Data,
    forms: state.promovido.forms
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    get_zones: Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])(_actions_promovido__WEBPACK_IMPORTED_MODULE_11__["get_zones"], dispatch),
    get_areas: Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])(_actions_promovido__WEBPACK_IMPORTED_MODULE_11__["get_areas"], dispatch),
    get_sections: Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])(_actions_promovido__WEBPACK_IMPORTED_MODULE_11__["get_sections"], dispatch),
    get_promoted: Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])(_actions_promovido__WEBPACK_IMPORTED_MODULE_11__["get_promoted"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Filter));

/***/ })

})
//# sourceMappingURL=promovido.js.eddf72fbe2fbacf32b2e.hot-update.js.map