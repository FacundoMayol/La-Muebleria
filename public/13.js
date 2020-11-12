(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UpdateProduct.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/UpdateProduct.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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
    productId: {
      type: String | Number,
      validator: function validator(value) {
        return !isNaN(value) && !isNaN(parseInt(value));
      }
    }
  },
  data: function data() {
    return {
      submiting: false,
      loading: false,
      loadingError: '',
      product: null,
      categories: [],
      form: {
        name: '',
        model: '',
        description: '',
        price: null,
        thumbnail: null,
        details: [],
        category: ''
      },
      validationErrors: {
        name: [],
        model: [],
        description: [],
        price: [],
        thumbnail: [],
        details: [],
        category: []
      },
      generalError: '',
      detailsC: null
    };
  },
  created: function created() {
    this.fetchCategories();
    var vm = this;
    this.fetchData().then(function () {
      if (vm.product) {
        document.title = 'Editando "' + vm.product.name + '" | La mueblería';
        vm.form.name = vm.product.name;
        vm.form.model = vm.product.model;
        vm.form.description = vm.product.description;
        vm.form.price = vm.product.price;
        vm.form.category = vm.product.category.id;
      }
    });
  },
  watch: {
    $route: function $route() {
      this.submiting = false;
      this.loading = false;
      this.loadingError = '';
      this.product = null;
      this.categories = [];
      this.form.name = '';
      this.form.model = '';
      this.form.description = '';
      this.form.price = null;
      this.form.thumbnail = null;
      this.form.details = [];
      this.form.category = '';
      this.validationErrors.name = [];
      this.validationErrors.model = [];
      this.validationErrors.description = [];
      this.validationErrors.price = [];
      this.validationErrors.thumbnail = [];
      this.validationErrors.details = [];
      this.validationErrors.category = [];
      this.generalError = '';
      this.detailsC = null;
      this.fetchCategories();
      var vm = this;
      this.fetchData().then(function () {
        if (vm.product) {
          document.title = 'Editando "' + vm.product.name + '" | La mueblería';
          vm.form.name = vm.product.name;
          vm.form.model = vm.product.model;
          vm.form.description = vm.product.description;
          vm.form.price = vm.product.price;
          vm.form.category = vm.product.category.id;
        }
      });
    }
  },
  methods: {
    setDetailsImages: function setDetailsImages(files) {
      this.form.details = files;
      this.detailsC = _.map(files, this.getImage);
    },
    getImage: function getImage(imageFile) {
      return URL.createObjectURL(imageFile);
    },
    onlyNumbers: function onlyNumbers(event) {
      event = event ? event : window.event;
      var charCode = event.which ? event.which : event.keyCode;

      if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
        event.preventDefault();
      } else {
        return true;
      }
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
                return axios.get('/api/products/' + this.productId);

              case 4:
                data = _context.sent.data.data;
                this.product = data;
                _context.next = 14;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                tempError = "";

                if (_context.t0.response) {
                  if (_context.t0.response.status == 404) tempError += "El recurso solicitado no existe";else if (_context.t0.response.status == 401 || _context.t0.response.status == 403) tempError += "No posee acceso al recurso solicitado";
                } else if (_context.t0.request) {
                  tempError = "El servidor tardó en responder";
                } else {
                  tempError = "No se pudo comunicar con el servidor";
                }

                this.loadingError = tempError + " (" + _context.t0.message + ")";
                document.title = 'Error al cargar producto | La mueblería';

              case 14:
                _context.prev = 14;
                this.loading = false;
                return _context.finish(14);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 8, 14, 17]]);
      }));

      function fetchData() {
        return _fetchData.apply(this, arguments);
      }

      return fetchData;
    }(),
    fetchCategories: function () {
      var _fetchCategories = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var tempError;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios.get('/api/categories/');

              case 3:
                this.categories = _context2.sent.data;
                _context2.next = 11;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
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
                  title: 'Error al cargar las categorias',
                  text: tempError + ' (' + _context2.t0.message + ')'
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 6]]);
      }));

      function fetchCategories() {
        return _fetchCategories.apply(this, arguments);
      }

      return fetchCategories;
    }(),
    submitForm: function () {
      var _submitForm = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var formData, vm, tempError;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.submiting = true;
                _context3.prev = 1;
                formData = new FormData();
                vm = this;
                Object.keys(this.form).forEach(function (input) {
                  if (vm.form[input] && input != 'details') formData.append(input, vm.form[input]);else if (input == 'details') _.forEach(vm.form[input], function (file, index) {
                    formData.append('details[' + index + ']', file);
                  });
                });
                formData.append('_method', 'PUT');
                _context3.next = 8;
                return axios.post('/api/products/' + this.productId, formData, {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                });

              case 8:
                console.log("Producto modificado");
                this.$notify({
                  group: 'messages',
                  type: 'success',
                  title: 'Producto editado exitosamente'
                });
                this.$router.push({
                  name: 'product',
                  params: {
                    productId: this.productId
                  }
                });
                _context3.next = 16;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](1);

                if (_context3.t0.response) {
                  if (_context3.t0.response.status == 401 || _context3.t0.response.status == 403) this.generalError = "No posee acceso al recurso solicitado";else _.extend(this.validationErrors, _context3.t0.response.data.errors);
                } else {
                  tempError = "";

                  if (_context3.t0.request) {
                    tempError = "El servidor tardó en responder";
                  } else {
                    tempError = "No se pudo comunicar con el servidor";
                  }

                  this.generalError = tempError + " (" + _context3.t0.message + ")";
                }

              case 16:
                _context3.prev = 16;
                this.submiting = false;
                return _context3.finish(16);

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 13, 16, 19]]);
      }));

      function submitForm() {
        return _submitForm.apply(this, arguments);
      }

      return submitForm;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UpdateProduct.vue?vue&type=template&id=6f117b52&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/UpdateProduct.vue?vue&type=template&id=6f117b52& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _vm.loadingError
    ? _c(
        "div",
        { staticClass: "flex flex-1 flex-col justify-center items-center" },
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
    : _vm.loading
    ? _c(
        "div",
        { staticClass: "flex flex-1 flex-col justify-center items-center" },
        [_c("span", { staticClass: "spinner w-12 h-12" })]
      )
    : _c(
        "div",
        {
          staticClass:
            "flex flex-1 flex-col sm:justify-center items-center sm:bg-orange-400"
        },
        [
          _c(
            "div",
            {
              staticClass:
                "bg-white sm:border sm:border-orange-500 sm:rounded-md sm:shadow-lg w-full max-w-full sm:max-w-sm lg:max-w-lg"
            },
            [
              _c(
                "h1",
                {
                  staticClass:
                    "bg-orange-500 text-white font-semibold text-3xl text-center p-4"
                },
                [_vm._v("Modificar producto")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "px-8 py-6" }, [
                _vm.product
                  ? _c("p", { staticClass: "text-orange-300 text-sm" }, [
                      _vm._v("Producto #" + _vm._s(_vm.product.id))
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    staticClass: "space-y-6",
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.submitForm($event)
                      }
                    }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "space-y-2" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.form.name,
                              expression: "form.name",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass:
                            "w-full border-b border-orange-300 focus:border-orange-400 py-2 px-1 placeholder-gray-700 text-orange-500 transition duration-300 ease-in-out",
                          attrs: {
                            type: "text",
                            maxlength: "100",
                            placeholder: "Nombre"
                          },
                          domProps: { value: _vm.form.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "name",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm._l(_vm.validationErrors.name, function(
                          error,
                          index
                        ) {
                          return _c(
                            "p",
                            { key: index, staticClass: "text-red-600" },
                            [_vm._v(_vm._s(error))]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "space-y-2" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.form.model,
                              expression: "form.model",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass:
                            "w-full border-b border-orange-300 focus:border-orange-400 py-2 px-1 placeholder-gray-700 text-orange-500 transition duration-300 ease-in-out",
                          attrs: {
                            type: "text",
                            maxlength: "100",
                            placeholder: "Modelo"
                          },
                          domProps: { value: _vm.form.model },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "model",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm._l(_vm.validationErrors.model, function(
                          error,
                          index
                        ) {
                          return _c(
                            "p",
                            { key: index, staticClass: "text-red-600" },
                            [_vm._v(_vm._s(error))]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "space-y-2" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.number",
                              value: _vm.form.price,
                              expression: "form.price",
                              modifiers: { number: true }
                            }
                          ],
                          staticClass:
                            "w-full border-b border-orange-300 focus:border-orange-400 py-2 px-1 placeholder-gray-700 text-orange-500 transition duration-300 ease-in-out",
                          attrs: { type: "text", placeholder: "Precio" },
                          domProps: { value: _vm.form.price },
                          on: {
                            keypress: function($event) {
                              return _vm.onlyNumbers($event)
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "price",
                                _vm._n($event.target.value)
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm._l(_vm.validationErrors.price, function(
                          error,
                          index
                        ) {
                          return _c(
                            "p",
                            { key: index, staticClass: "text-red-600" },
                            [_vm._v(_vm._s(error))]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "space-y-2" },
                      [
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.form.description,
                              expression: "form.description",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass:
                            "w-full border-b border-orange-300 focus:border-orange-400 py-2 px-1 placeholder-gray-700 text-orange-500 transition duration-300 ease-in-out",
                          attrs: { placeholder: "Descripción" },
                          domProps: { value: _vm.form.description },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "description",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm._l(_vm.validationErrors.description, function(
                          error,
                          index
                        ) {
                          return _c(
                            "p",
                            { key: index, staticClass: "text-red-600" },
                            [_vm._v(_vm._s(error))]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "space-y-2" },
                      [
                        _c("label", [
                          _c("span", { staticClass: "text-orange-500" }, [
                            _vm._v("Imágen:")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            ref: "thumbnail",
                            attrs: { type: "file", accept: "image/*" },
                            on: {
                              change: function($event) {
                                _vm.form.thumbnail = $event.target.files[0]
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _vm.form.thumbnail
                          ? _c("div", { staticClass: "w-3/12 h-auto p-2" }, [
                              _c("img", {
                                staticClass:
                                  "border border-orange-600 rounded-md shadow-md",
                                attrs: { src: _vm.getImage(_vm.form.thumbnail) }
                              })
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.form.thumbnail
                          ? _c(
                              "button",
                              {
                                staticClass:
                                  "text-blue-500 hover:text-blue-600 focus:text-blue-600 text-sm",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    _vm.$refs.thumbnail.value = ""
                                    _vm.form.thumbnail = null
                                  }
                                }
                              },
                              [_vm._v("Borrar imágenes")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm._l(_vm.validationErrors.thumbnail, function(
                          error,
                          index
                        ) {
                          return _c(
                            "p",
                            { key: index, staticClass: "text-red-600" },
                            [_vm._v(_vm._s(error))]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "space-y-2" },
                      [
                        _c("label", [
                          _c("span", { staticClass: "text-orange-500" }, [
                            _vm._v("Imágenes de detalle:")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            ref: "details",
                            attrs: {
                              type: "file",
                              accept: "image/*",
                              multiple: ""
                            },
                            on: {
                              change: function($event) {
                                return _vm.setDetailsImages($event.target.files)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _vm.detailsC
                          ? _c(
                              "div",
                              { staticClass: "flex flex-row flex-wrap" },
                              _vm._l(_vm.detailsC, function(image, index) {
                                return _c(
                                  "div",
                                  {
                                    key: index,
                                    staticClass: "w-3/12 h-auto p-2"
                                  },
                                  [
                                    _c("img", {
                                      staticClass:
                                        "border border-orange-600 rounded-md shadow-md",
                                      attrs: { src: image }
                                    })
                                  ]
                                )
                              }),
                              0
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.form.details.length > 0
                          ? _c(
                              "button",
                              {
                                staticClass:
                                  "text-blue-500 hover:text-blue-600 focus:text-blue-600 text-sm",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    _vm.$refs.details.value = ""
                                    _vm.form.details = []
                                    _vm.detailsC = null
                                  }
                                }
                              },
                              [_vm._v("Borrar imágenes")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm._l(_vm.validationErrors.details, function(
                          error,
                          index
                        ) {
                          return _c(
                            "p",
                            { key: index, staticClass: "text-red-600" },
                            [_vm._v(_vm._s(error))]
                          )
                        }),
                        _vm._v(" "),
                        _vm.form.details.length == 0
                          ? _c(
                              "span",
                              { staticClass: "text-red-600 text-sm" },
                              [
                                _vm._v(
                                  "(Incluir archivos en esta categoría eliminará todas las imágenes actuales del producto, exceptuando la imágen principal)"
                                )
                              ]
                            )
                          : _vm._e()
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "space-y-2" },
                      [
                        _c("label", [
                          _c("span", { staticClass: "text-orange-500" }, [
                            _vm._v("Categoría:")
                          ]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.category,
                                  expression: "form.category"
                                }
                              ],
                              staticClass: "text-gray-800",
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "category",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c(
                                "option",
                                { attrs: { disabled: "", value: "" } },
                                [_vm._v("Seleccione alguna categoría")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.categories, function(category, index) {
                                return _c(
                                  "option",
                                  {
                                    key: index,
                                    domProps: { value: category.id }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(category.name) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          )
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.validationErrors.category, function(
                          error,
                          index
                        ) {
                          return _c(
                            "p",
                            { key: index, staticClass: "text-red-600" },
                            [_vm._v(_vm._s(error))]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _vm.generalError
                      ? _c("p", { staticClass: "text-red-600" }, [
                          _vm._v(_vm._s(_vm.generalError))
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "w-full btn-outlined btn-outlined-orange font-semibold text-center px-3 py-2",
                        attrs: { disabled: _vm.submiting, type: "submit" }
                      },
                      [
                        _vm.submiting
                          ? [
                              _c("span", {
                                staticClass:
                                  "spinner spinner-disabled w-6 h-6 mx-2"
                              })
                            ]
                          : [
                              _vm._v(
                                "\n                        Modificar producto\n                    "
                              )
                            ]
                      ],
                      2
                    )
                  ]
                )
              ])
            ]
          )
        ]
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/UpdateProduct.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/UpdateProduct.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpdateProduct_vue_vue_type_template_id_6f117b52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateProduct.vue?vue&type=template&id=6f117b52& */ "./resources/js/views/UpdateProduct.vue?vue&type=template&id=6f117b52&");
/* harmony import */ var _UpdateProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateProduct.vue?vue&type=script&lang=js& */ "./resources/js/views/UpdateProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UpdateProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdateProduct_vue_vue_type_template_id_6f117b52___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UpdateProduct_vue_vue_type_template_id_6f117b52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/UpdateProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/UpdateProduct.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/UpdateProduct.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UpdateProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/UpdateProduct.vue?vue&type=template&id=6f117b52&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/UpdateProduct.vue?vue&type=template&id=6f117b52& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProduct_vue_vue_type_template_id_6f117b52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateProduct.vue?vue&type=template&id=6f117b52& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UpdateProduct.vue?vue&type=template&id=6f117b52&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProduct_vue_vue_type_template_id_6f117b52___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProduct_vue_vue_type_template_id_6f117b52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);