(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Search.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Search.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
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
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    searchQuery: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      loading: false,
      search: this.$route.query.s,
      page: !isNaN(parseInt(this.$route.query.p, 10)) ? parseInt(this.$route.query.p, 10) : 0,
      nPages: 0,
      totalItems: 0,
      items: [],
      error: ''
    };
  },
  created: function created() {
    this.fetchData();
    this.updateQueryDebounced = _.debounce(this.updateQuery, 500);
  },
  watch: {
    $route: function $route() {
      this.page = !isNaN(parseInt(this.$route.query.p, 10)) ? parseInt(this.$route.query.p, 10) : 0;
      this.search = this.$route.query.s;
      this.nPages = 0;
      this.totalItems = 0;
      this.items = [];
      this.error = '';
      this.fetchData();
    },
    page: function page() {
      this.updateQueryDebounced();
    },
    search: function search() {
      if (this.$route.query.s !== this.search) {
        this.updateQueryDebounced();
        this.page = 0;
      }
    }
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('cart', {
    addToCartAction: 'addToCart'
  })), {}, {
    updateQuery: function updateQuery() {
      this.$router.push({
        query: {
          s: this.search,
          p: this.page
        }
      });
    },
    fetchData: function () {
      var _fetchData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var data, tempError;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.loading = true;
                _context.prev = 1;
                _context.next = 4;
                return axios.get('/api/products', {
                  params: {
                    s: this.searchQuery,
                    p: this.page
                  }
                });

              case 4:
                data = _context.sent.data;
                this.items = data['data'];
                this.nPages = data['n_pages'];
                this.totalItems = data['total'];
                _context.next = 15;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);
                tempError = "";

                if (_context.t0.response) {
                  if (_context.t0.response.status == 404) tempError += "El recurso solicitado no existe";else if (_context.t0.response.status == 401 || _context.t0.response.status == 403) tempError += "No posee acceso al recurso solicitado";
                } else if (_context.t0.request) {
                  tempError = "El servidor tardó en responder";
                } else {
                  tempError = "No se pudo comunicar con el servidor";
                }

                this.error = tempError + " (" + _context.t0.message + ")";

              case 15:
                _context.prev = 15;
                this.loading = false;
                return _context.finish(15);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 10, 15, 18]]);
      }));

      function fetchData() {
        return _fetchData.apply(this, arguments);
      }

      return fetchData;
    }(),
    addToCart: function () {
      var _addToCart = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(product) {
        var tempError;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.addToCartAction(product);

              case 3:
                console.log("Producto añadido");
                _context2.next = 12;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);
                tempError = "";

                if (_context2.t0.response) {
                  if (_context2.t0.response.status == 404) tempError += "El recurso solicitado no existe";else if (_context2.t0.response.status == 401 || _context2.t0.response.status == 403) tempError += "No posee acceso al recurso solicitado";
                } else if (_context2.t0.request) {
                  tempError = "El servidor tardó en responder";
                } else {
                  tempError = "No se pudo comunicar con el servidor";
                }

                this.error = tempError + " (" + _context2.t0.message + ")";

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 6]]);
      }));

      function addToCart(_x) {
        return _addToCart.apply(this, arguments);
      }

      return addToCart;
    }()
  }),
  components: {
    TitleBanner: _components_TheTitleBanner__WEBPACK_IMPORTED_MODULE_2__["default"],
    SearchRowItem: _components_Search_SearchRow__WEBPACK_IMPORTED_MODULE_3__["default"],
    PaginationItem: _components_ThePagination__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Search.vue?vue&type=template&id=e7b7e8f2&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Search.vue?vue&type=template&id=e7b7e8f2& ***!
  \****************************************************************************************************************************************************************************************************/
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
      _c("TitleBanner", [_vm._v("Búsqueda")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container mx-auto p-5" },
        [
          _c("div", { staticClass: "flex mb-3" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.search,
                  expression: "search"
                }
              ],
              staticClass:
                "flex-1 mx-2 p-2 bg-gray-100 border-gray-400 placeholder-gray-600 text-gray-700 rounded-md border",
              attrs: { placeholder: "Búsqueda" },
              domProps: { value: _vm.search },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.search = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
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
                    "div",
                    { staticClass: "mt-4 flex justify-center items-center" },
                    [
                      _c("PaginationItem", {
                        attrs: { pages: _vm.nPages },
                        model: {
                          value: _vm.page,
                          callback: function($$v) {
                            _vm.page = $$v
                          },
                          expression: "page"
                        }
                      })
                    ],
                    1
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

/***/ "./resources/js/views/Search.vue":
/*!***************************************!*\
  !*** ./resources/js/views/Search.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Search_vue_vue_type_template_id_e7b7e8f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search.vue?vue&type=template&id=e7b7e8f2& */ "./resources/js/views/Search.vue?vue&type=template&id=e7b7e8f2&");
/* harmony import */ var _Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search.vue?vue&type=script&lang=js& */ "./resources/js/views/Search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Search_vue_vue_type_template_id_e7b7e8f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Search_vue_vue_type_template_id_e7b7e8f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Search.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/views/Search.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Search.vue?vue&type=template&id=e7b7e8f2&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Search.vue?vue&type=template&id=e7b7e8f2& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_e7b7e8f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Search.vue?vue&type=template&id=e7b7e8f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Search.vue?vue&type=template&id=e7b7e8f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_e7b7e8f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_e7b7e8f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);