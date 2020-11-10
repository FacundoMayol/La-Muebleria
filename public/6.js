(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ViewMessage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ViewMessage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TheTitleBanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/TheTitleBanner */ "./resources/js/views/components/TheTitleBanner.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
    messageId: {
      type: String | Number,
      validator: function validator(value) {
        return !isNaN(value) && !isNaN(parseInt(value));
      }
    }
  },
  data: function data() {
    return {
      loading: false,
      message: null,
      error: null
    };
  },
  created: function created() {
    this.fetchData();
  },
  watch: {
    $route: function $route() {
      this.loading = false;
      this.message = null;
      this.error = null;
      this.fetchData();
    }
  },
  methods: {
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
                return axios.get('/api/messages/' + this.messageId);

              case 4:
                data = _context.sent.data;
                this.message = data;
                document.title = data.title + ' | KakeraGaming';
                _context.next = 15;
                break;

              case 9:
                _context.prev = 9;
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
                document.title = 'Error al cargar producto | KakeraGaming';

              case 15:
                _context.prev = 15;
                this.loading = false;
                return _context.finish(15);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 9, 15, 18]]);
      }));

      function fetchData() {
        return _fetchData.apply(this, arguments);
      }

      return fetchData;
    }(),
    remove: function () {
      var _remove = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var tempError;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios["delete"]('/api/messages/' + this.message.id);

              case 3:
                console.log("Mensaje eliminado");
                this.$notify({
                  group: 'messages',
                  type: 'success',
                  title: 'Mensaje eliminado exitosamente'
                });
                this.$router.push({
                  name: 'admin-contact'
                });
                _context2.next = 14;
                break;

              case 8:
                _context2.prev = 8;
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

                this.$notify({
                  group: 'messages',
                  type: 'error',
                  title: 'Error',
                  text: tempError + ' (' + _context2.t0.message + ')'
                });

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function remove() {
        return _remove.apply(this, arguments);
      }

      return remove;
    }()
  },
  components: {
    TitleBanner: _components_TheTitleBanner__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ViewMessage.vue?vue&type=template&id=ee16ef5a&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ViewMessage.vue?vue&type=template&id=ee16ef5a& ***!
  \*********************************************************************************************************************************************************************************************************/
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
    { staticClass: "flex flex-1 flex-col" },
    [
      _c("TitleBanner", [_vm._v("Ver mensaje")]),
      _vm._v(" "),
      _vm.error
        ? [
            _c(
              "div",
              {
                staticClass: "flex flex-1 flex-col justify-center items-center"
              },
              [
                _c(
                  "h1",
                  {
                    staticClass:
                      "text-orange-500 text-xl sm:text-2xl lg:text-3xl font-semibold text-center"
                  },
                  [_vm._v(_vm._s(_vm.error))]
                )
              ]
            )
          ]
        : _vm.loading
        ? [_vm._m(0)]
        : [
            _c(
              "div",
              {
                staticClass:
                  "container mx-auto p-5 mt-2 lg:mt-5 flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0"
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "lg:w-9/12 border rounded-md bg-gray-200 p-4 space-y-3"
                  },
                  [
                    _c(
                      "h1",
                      { staticClass: "text-orange-500 text-center text-4xl" },
                      [_vm._v(_vm._s(_vm.message.title))]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-orange-400 text-lg" }, [
                      _vm._v("Creado por: "),
                      _c("span", { staticClass: "font-semibold" }, [
                        _vm._v(
                          _vm._s(_vm.message.name) +
                            " (" +
                            _vm._s(_vm.message.email) +
                            ")"
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-gray-800" }, [
                      _vm._v(_vm._s(_vm.message.message))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "lg:w-3/12" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn-outlined btn-outlined-orange px-2 py-1 w-full",
                      on: {
                        click: function($event) {
                          return _vm.remove()
                        }
                      }
                    },
                    [
                      _c("font-awesome-icon", { attrs: { icon: "times" } }),
                      _vm._v(" Eliminar")
                    ],
                    1
                  )
                ])
              ]
            )
          ]
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "flex flex-1 flex-col justify-center items-center" },
      [_c("span", { staticClass: "spinner w-12 h-12" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/TheTitleBanner.vue?vue&type=template&id=7ca42e86&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components/TheTitleBanner.vue?vue&type=template&id=7ca42e86& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    {
      staticClass:
        "flex justify-center items-center w-full py-3 lg:py-5 bg-orange-400 shadow-md"
    },
    [
      _c(
        "h1",
        { staticClass: "font-semibold text-2xl lg:text-4xl text-white" },
        [_vm._t("default")],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/ViewMessage.vue":
/*!********************************************!*\
  !*** ./resources/js/views/ViewMessage.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewMessage_vue_vue_type_template_id_ee16ef5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewMessage.vue?vue&type=template&id=ee16ef5a& */ "./resources/js/views/ViewMessage.vue?vue&type=template&id=ee16ef5a&");
/* harmony import */ var _ViewMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewMessage.vue?vue&type=script&lang=js& */ "./resources/js/views/ViewMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ViewMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ViewMessage_vue_vue_type_template_id_ee16ef5a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ViewMessage_vue_vue_type_template_id_ee16ef5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ViewMessage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ViewMessage.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/ViewMessage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ViewMessage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ViewMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ViewMessage.vue?vue&type=template&id=ee16ef5a&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/ViewMessage.vue?vue&type=template&id=ee16ef5a& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewMessage_vue_vue_type_template_id_ee16ef5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ViewMessage.vue?vue&type=template&id=ee16ef5a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ViewMessage.vue?vue&type=template&id=ee16ef5a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewMessage_vue_vue_type_template_id_ee16ef5a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewMessage_vue_vue_type_template_id_ee16ef5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/components/TheTitleBanner.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/components/TheTitleBanner.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheTitleBanner_vue_vue_type_template_id_7ca42e86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheTitleBanner.vue?vue&type=template&id=7ca42e86& */ "./resources/js/views/components/TheTitleBanner.vue?vue&type=template&id=7ca42e86&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _TheTitleBanner_vue_vue_type_template_id_7ca42e86___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheTitleBanner_vue_vue_type_template_id_7ca42e86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/components/TheTitleBanner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/components/TheTitleBanner.vue?vue&type=template&id=7ca42e86&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/components/TheTitleBanner.vue?vue&type=template&id=7ca42e86& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheTitleBanner_vue_vue_type_template_id_7ca42e86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheTitleBanner.vue?vue&type=template&id=7ca42e86& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/TheTitleBanner.vue?vue&type=template&id=7ca42e86&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheTitleBanner_vue_vue_type_template_id_7ca42e86___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheTitleBanner_vue_vue_type_template_id_7ca42e86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);