(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Categories.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TheTitleBanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/TheTitleBanner */ "./resources/js/views/components/TheTitleBanner.vue");
/* harmony import */ var _components_Categories_CategoriesBigButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Categories/CategoriesBigButton */ "./resources/js/views/components/Categories/CategoriesBigButton.vue");
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
  components: {
    ProductItem: _components_Categories_CategoriesBigButton__WEBPACK_IMPORTED_MODULE_1__["default"],
    TitleBanner: _components_TheTitleBanner__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/Categories/CategoriesBigButton.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components/Categories/CategoriesBigButton.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    product: String,
    title: String,
    image: String
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Categories.vue?vue&type=template&id=53f0967b& ***!
  \********************************************************************************************************************************************************************************************************/
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
      _c("TitleBanner", [_vm._v("Productos")]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "container mx-auto mt-10 flex flex-row justify-center md:justify-evenly flex-wrap"
        },
        [
          _c("ProductItem", {
            attrs: {
              product: "case",
              title: "Gabinetes",
              image: "/images/case.png"
            }
          }),
          _vm._v(" "),
          _c("ProductItem", {
            attrs: { product: "CPU", title: "CPUs", image: "/images/CPU.png" }
          }),
          _vm._v(" "),
          _c("ProductItem", {
            attrs: { product: "GPU", title: "GPUs", image: "/images/GPU.png" }
          }),
          _vm._v(" "),
          _c("ProductItem", {
            attrs: {
              product: "motherboard",
              title: "Placas madre",
              image: "/images/motherboard.png"
            }
          }),
          _vm._v(" "),
          _c("ProductItem", {
            attrs: {
              product: "RAM",
              title: "Memorias RAM",
              image: "/images/RAM.png"
            }
          }),
          _vm._v(" "),
          _c("ProductItem", {
            attrs: {
              product: "storage",
              title: "Unidades de almacenamiento",
              image: "/images/SSD.png"
            }
          }),
          _vm._v(" "),
          _c("ProductItem", {
            attrs: {
              product: "PSU",
              title: "Fuentes de alimentación",
              image: "/images/PSU.png"
            }
          }),
          _vm._v(" "),
          _c("ProductItem", {
            attrs: {
              product: "cooler",
              title: "Refrigeración",
              image: "/images/cooler.png"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "h2",
        {
          staticClass:
            "mt-10 text-4xl text-orange-500 font-semibold text-center"
        },
        [_vm._v("Otros componentes")]
      ),
      _vm._v(" "),
      _vm._m(0)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container mx-auto my-10" }, [
      _c(
        "p",
        { staticClass: "text-orange-500 text-3xl font-semibold text-center" },
        [_vm._v("Proximamente")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/Categories/CategoriesBigButton.vue?vue&type=template&id=a7c79166&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components/Categories/CategoriesBigButton.vue?vue&type=template&id=a7c79166& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    "router-link",
    {
      staticClass:
        "group relative h-40 w-40 flex p-5 m-4 justify-center items-center border hover:border-orange-600 focus:border-orange-600 transition duration-500 ease-in-out",
      attrs: { to: { name: _vm.product } }
    },
    [
      _c("img", {
        staticClass: "flex-1 object-center object-scale-down",
        attrs: { src: _vm.image, alt: "product" }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "opacity-0 group-hover:opacity-100 group-focus:opacity-100 absolute inset-0 bg-orange-600 transition duration-500 ease-in-out flex justify-center items-center"
        },
        [
          _c(
            "span",
            {
              staticClass:
                "text-white text-xl font-medium text-center align-middle"
            },
            [_vm._v(_vm._s(_vm.title))]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
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

/***/ "./resources/js/views/Categories.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Categories.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categories.vue?vue&type=template&id=53f0967b& */ "./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&");
/* harmony import */ var _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Categories.vue?vue&type=script&lang=js& */ "./resources/js/views/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Categories.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Categories.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Categories.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Categories.vue?vue&type=template&id=53f0967b& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=template&id=53f0967b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/components/Categories/CategoriesBigButton.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/views/components/Categories/CategoriesBigButton.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoriesBigButton_vue_vue_type_template_id_a7c79166___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoriesBigButton.vue?vue&type=template&id=a7c79166& */ "./resources/js/views/components/Categories/CategoriesBigButton.vue?vue&type=template&id=a7c79166&");
/* harmony import */ var _CategoriesBigButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoriesBigButton.vue?vue&type=script&lang=js& */ "./resources/js/views/components/Categories/CategoriesBigButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CategoriesBigButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategoriesBigButton_vue_vue_type_template_id_a7c79166___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategoriesBigButton_vue_vue_type_template_id_a7c79166___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/components/Categories/CategoriesBigButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/components/Categories/CategoriesBigButton.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/components/Categories/CategoriesBigButton.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesBigButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoriesBigButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/Categories/CategoriesBigButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesBigButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/components/Categories/CategoriesBigButton.vue?vue&type=template&id=a7c79166&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/components/Categories/CategoriesBigButton.vue?vue&type=template&id=a7c79166& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesBigButton_vue_vue_type_template_id_a7c79166___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoriesBigButton.vue?vue&type=template&id=a7c79166& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/Categories/CategoriesBigButton.vue?vue&type=template&id=a7c79166&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesBigButton_vue_vue_type_template_id_a7c79166___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesBigButton_vue_vue_type_template_id_a7c79166___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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