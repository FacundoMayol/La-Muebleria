(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Build.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Build.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_TheTitleBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TheTitleBanner */ "./resources/js/views/components/TheTitleBanner.vue");
/* harmony import */ var _components_Search_SearchRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Search/SearchRow */ "./resources/js/views/components/Search/SearchRow.vue");
/* harmony import */ var _components_ThePagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ThePagination */ "./resources/js/views/components/ThePagination.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: false,
      totalItems: 0,
      totalCost: 0,
      items: [],
      error: ''
    };
  },
  created: function created() {
    this.fetchData();
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('cart', {
    retrieveProducts: 'retrieveProducts'
  })), {}, {
    fetchData: function () {
      var _fetchData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var items, tempError;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.loading = true;
                _context.prev = 1;
                _context.next = 4;
                return this.retrieveProducts();

              case 4:
                items = _context.sent;
                console.log(items);
                this.items = items.data;
                this.totalItems = items.total_items;
                this.totalCost = items.total_cost;
                _context.next = 17;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);
                tempError = "";

                if (_context.t0.response) {
                  if (_context.t0.response.status == 404) tempError += "El recurso solicitado no existe";else if (_context.t0.response.status == 401 || _context.t0.response.status == 403) tempError += "No posee acceso al recurso solicitado";
                } else if (_context.t0.request) {
                  tempError = "El servidor tardó en responder";
                } else {
                  tempError = "No se pudo comunicar con el servidor";
                }

                this.error = tempError + " (" + _context.t0.message + ")";

              case 17:
                _context.prev = 17;
                this.loading = false;
                return _context.finish(17);

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 11, 17, 20]]);
      }));

      function fetchData() {
        return _fetchData.apply(this, arguments);
      }

      return fetchData;
    }(),
    addToCart: function addToCart(product) {
      console.log("Sos down no¡");
    }
  }),
  components: {
    TitleBanner: _components_TheTitleBanner__WEBPACK_IMPORTED_MODULE_2__["default"],
    SearchRowItem: _components_Search_SearchRow__WEBPACK_IMPORTED_MODULE_3__["default"],
    PaginationItem: _components_ThePagination__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Build.vue?vue&type=template&id=25ee05df&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Build.vue?vue&type=template&id=25ee05df& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("TitleBanner", [_vm._v("Items en carrito")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container mx-auto p-5" },
        [
          _c("div", [
            _c(
              "h3",
              {
                staticClass:
                  "text-sm md:text-base font-bold uppercase tracking-tighter"
              },
              [
                _vm._v(
                  "\n                " +
                    _vm._s(
                      _vm.loading
                        ? "Cargando..."
                        : _vm.totalItems == 0
                        ? "Sin productos encontrados"
                        : _vm.totalItems == 1
                        ? "1 producto encontrado"
                        : _vm.totalItems + " productos encontrados"
                    ) +
                    "\n            "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("hr", { staticClass: "border-gray-500 my-2" }),
          _vm._v(" "),
          _c("transition", { attrs: { name: "fade", mode: "out-in" } }, [
            _vm.loading
              ? _c(
                  "div",
                  {
                    key: 0,
                    staticClass:
                      "flex justify-center items-center text-center align-middle py-8 text-xl font-semibold text-orange-600"
                  },
                  [
                    _c("span", { staticClass: "spinner w-8 h-8 mx-2" }),
                    _vm._v("\n                Cargando\n            ")
                  ]
                )
              : _vm.error != ""
              ? _c(
                  "div",
                  {
                    key: 1,
                    staticClass:
                      "flex justify-center items-center text-center align-middle py-8 text-xl font-semibold text-orange-600"
                  },
                  [
                    _vm._v(
                      "\n                Error al obtener los productos de la base de datos: " +
                        _vm._s(_vm.error) +
                        "\n            "
                    )
                  ]
                )
              : _vm.items.length == 0
              ? _c(
                  "div",
                  {
                    key: 2,
                    staticClass:
                      "flex justify-center items-center text-center align-middle py-8 text-xl font-semibold text-orange-600"
                  },
                  [
                    _vm._v(
                      "\n                No se encontraron productos que coincidan con tu busqueda\n            "
                    )
                  ]
                )
              : _c("div", { key: 3 }, [
                  _c(
                    "div",
                    { staticClass: "flex-col divide-y divide-gray-400" },
                    _vm._l(_vm.items, function(item, index) {
                      return _c("SearchRowItem", {
                        key: index,
                        attrs: {
                          to: {
                            name: "product",
                            params: { productId: item.id }
                          },
                          product: item
                        },
                        on: {
                          add: function($event) {
                            return _vm.addToCart(item)
                          }
                        }
                      })
                    }),
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    { staticClass: "text-center text-xl font-semibold" },
                    [_vm._v(_vm._s(_vm.totalCost))]
                  )
                ])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Build.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Build.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Build_vue_vue_type_template_id_25ee05df___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Build.vue?vue&type=template&id=25ee05df& */ "./resources/js/views/Build.vue?vue&type=template&id=25ee05df&");
/* harmony import */ var _Build_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Build.vue?vue&type=script&lang=js& */ "./resources/js/views/Build.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Build_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Build_vue_vue_type_template_id_25ee05df___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Build_vue_vue_type_template_id_25ee05df___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Build.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Build.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Build.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Build_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Build.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Build.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Build_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Build.vue?vue&type=template&id=25ee05df&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Build.vue?vue&type=template&id=25ee05df& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Build_vue_vue_type_template_id_25ee05df___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Build.vue?vue&type=template&id=25ee05df& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Build.vue?vue&type=template&id=25ee05df&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Build_vue_vue_type_template_id_25ee05df___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Build_vue_vue_type_template_id_25ee05df___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);