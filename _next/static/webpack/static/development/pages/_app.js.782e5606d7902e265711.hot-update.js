webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reducers/promovido.js":
/*!*******************************!*\
  !*** ./reducers/promovido.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/types */ "./actions/types.js");




var initialState = {
  Data: [],
  Zones: [],
  Areas: [],
  Sections: [],
  Persons: [],
  forms: {
    zone: '',
    area: '',
    section: ''
  },
  formPromoted: {}
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].PROMOTED_GET_ZONES:
      var Zones = [];
      action.payload.map(function (zone) {
        Zones.push({
          text: zone.name,
          id: zone.id
        });
      });
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
        Data: action.payload,
        Zones: Zones
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].PROMOTED_GET_AREAS:
      var Areas = [];
      action.payload.map(function (area) {
        Areas.push({
          text: area.name,
          id: area.id
        });
      });
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
        Areas: Areas
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].PROMOTED_GET_SECTIONS:
      var Sections = [];
      action.payload.map(function (section) {
        Sections.push({
          text: section.section,
          id: section.id
        });
      });
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
        Sections: Sections
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].PROMOTED_GET_PERSONS:
      console.log(action.payload);
      console.log(Object(_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(action.payload));
      var Persons = [];

      if (!_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(action.payload)) {
        var person = action.payload;
        var date = person.cve.substr(6, 6);
        date = date.substr(0, 2) + '/' + date.substr(2, 2) + '/' + date.substr(4, 2);
        Persons.push({
          id: person.id,
          full: "".concat(person.last_name, " ").concat(person.second_last_name, " ").concat(person.name),
          name: person.name,
          last_name: person.last_name,
          second_last_name: person.second_last_name,
          date: date
        });
      } else if (action.payload.length > 0) action.payload.forEach(function (person) {
        var date = person.cve.substr(6, 6);
        date = date.substr(0, 2) + '/' + date.substr(2, 2) + '/' + date.substr(4, 2);
        Persons.push({
          id: person.id,
          full: "".concat(person.last_name, " ").concat(person.second_last_name, " ").concat(person.name),
          name: person.name,
          last_name: person.last_name,
          second_last_name: person.second_last_name,
          date: date
        });
      });

      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
        Persons: Persons
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].PROMOTED_SET_FORM:
      var formPromoted = state.formPromoted;
      if (action.target == 'name') formPromoted['name'] = action.value;
      if (action.target == 'last_name') formPromoted['last_name'] = action.value;
      if (action.target == 'second_last_name') formPromoted['second_last_name'] = action.value;
      if (action.target == 'day') formPromoted['day'] = action.value;
      if (action.target == 'month') formPromoted['month'] = action.value;
      if (action.target == 'year') formPromoted['year'] = action.value;
      if (action.target == 'phone') formPromoted['phone'] = action.value;
      if (action.target == 'userExist') formPromoted['userExist'] = action.value;
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
        formPromoted: formPromoted
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].SAVE_PROMOTED:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
        Persons: [],
        formPromoted: {
          name: '',
          last_name: '',
          second_last_name: '',
          day: '',
          month: '',
          year: '',
          phone: ''
        }
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].DELETE_PROMOTED:
      return {
        Data: [],
        Zones: [],
        Areas: [],
        Sections: [],
        Persons: [],
        forms: {
          zone: '',
          area: '',
          section: ''
        },
        formPromoted: {}
      };

    default:
      return state;
  }
});

/***/ })

})
//# sourceMappingURL=_app.js.782e5606d7902e265711.hot-update.js.map