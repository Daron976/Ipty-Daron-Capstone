/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nhtml,\\r\\nbody {\\r\\n  background:\\r\\n    radial-gradient(rgb(116, 87, 71, 0.7), rgb(150, 96, 68, 0.7)),\\r\\n    url(https://images.unsplash.com/photo-1537567563737-dc995720616f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80);\\r\\n  height: max-content;\\r\\n  z-index: -1;\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: cover;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Cairo', sans-serif;\\r\\n}\\r\\n\\r\\n/* desktop version */\\r\\n.flex {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.nav-bar,\\r\\n.footer-info {\\r\\n  font-family: 'Cairo', sans-serif;\\r\\n  flex-direction: row;\\r\\n  background-color: #543124;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n  padding: 1rem;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.web-logo {\\r\\n  width: 40px;\\r\\n}\\r\\n\\r\\n.links {\\r\\n  flex-direction: row;\\r\\n  gap: 2.5rem;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n  color: inherit;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.footer-info {\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.homepage-content {\\r\\n  flex-direction: row;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n  padding: 5rem 10rem;\\r\\n}\\r\\n\\r\\n.like-btn {\\r\\n  background: none;\\r\\n  border: none;\\r\\n  color: var(--text-color-3);\\r\\n  font-size: 1.2rem;\\r\\n  margin-right: 0.5rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.like-btn .fa-heart {\\r\\n  margin-right: 0.75rem;\\r\\n}\\r\\n\\r\\n/* home page */\\r\\n\\r\\n.bre-img {\\r\\n  width: 100%;\\r\\n  height: 15rem;\\r\\n  border-top-left-radius: 5%;\\r\\n  border-top-right-radius: 5%;\\r\\n}\\r\\n\\r\\narticle {\\r\\n  background-color: rgb(150, 96, 68, 0.5);\\r\\n  width: 18rem;\\r\\n  height: 100%;\\r\\n  padding-bottom: 1rem;\\r\\n  align-items: center;\\r\\n  justify-content: flex-start;\\r\\n  margin-bottom: 2rem;\\r\\n  border-radius: 5%;\\r\\n  filter: drop-shadow(2px 4px 6px black);\\r\\n}\\r\\n\\r\\n.article-details {\\r\\n  align-items: center;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.article-content {\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.name-with-likes {\\r\\n  flex-direction: row;\\r\\n  gap: 1rem;\\r\\n  margin-top: 1rem;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  font-size: 0.85rem;\\r\\n  font-weight: 700;\\r\\n  padding: 0.85rem 1rem;\\r\\n  background-color: #b39b65;\\r\\n  border: none;\\r\\n  border-radius: 8px;\\r\\n  color: #543124;\\r\\n  transition: all;\\r\\n  transition-duration: 0.3s;\\r\\n}\\r\\n\\r\\n.btn:hover {\\r\\n  font-size: 1rem;\\r\\n  padding: 0.95rem 1.1rem;\\r\\n  background-color: #543124;\\r\\n  color: #b39b65;\\r\\n}\\r\\n\\r\\n#comment-submission {\\r\\n  background-color: #543124;\\r\\n  color: #b39b65;\\r\\n}\\r\\n\\r\\n#comment-submission:hover {\\r\\n  background-color: #b39b65;\\r\\n  color: #543124;\\r\\n}\\r\\n\\r\\n/* popup styling */\\r\\n\\r\\n.popup-window {\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  right: 0;\\r\\n  left: 0;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  background-color: #ffffff63;\\r\\n  z-index: 2;\\r\\n  cursor: pointer;\\r\\n  backdrop-filter: blur(10px);\\r\\n}\\r\\n\\r\\n.data-img {\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.data-img img {\\r\\n  width: 30rem;\\r\\n  height: 25rem;\\r\\n  border-radius: 20px;\\r\\n}\\r\\n\\r\\n.top-layer {\\r\\n  background-color: rgb(253, 253, 253, 0.6);\\r\\n  border-radius: 20px;\\r\\n  font-size: 1.2rem;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  margin: 1rem;\\r\\n  padding: 1rem;\\r\\n  width: 55%;\\r\\n  color: #543124;\\r\\n}\\r\\n\\r\\n.popup-info {\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto;\\r\\n  column-gap: 5rem;\\r\\n  justify-items: center;\\r\\n  margin: 2rem 2rem;\\r\\n}\\r\\n\\r\\n.info-item {\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.popup-window h2 {\\r\\n  display: flex;\\r\\n  font-size: 2rem;\\r\\n  margin: 2rem;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  margin-top: 1rem;\\r\\n}\\r\\n\\r\\nlabel {\\r\\n  display: none;\\r\\n  visibility: hidden;\\r\\n}\\r\\n\\r\\ninput,\\r\\ntextarea {\\r\\n  max-width: 250px;\\r\\n  line-height: 1rem;\\r\\n  border: none;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  height: 1.7rem;\\r\\n}\\r\\n\\r\\ntextarea::placeholder,\\r\\ninput::placeholder {\\r\\n  color: #543124;\\r\\n  font-size: 0.9rem;\\r\\n  font-style: italic;\\r\\n  padding: 0.5rem;\\r\\n}\\r\\n\\r\\ntextarea:focus,\\r\\ninput:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\nh3 {\\r\\n  justify-content: flex-start;\\r\\n}\\r\\n\\r\\n.material-symbols-outlined {\\r\\n  font-size: 2.5rem;\\r\\n}\\r\\n\\r\\n.user-input {\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto;\\r\\n  column-gap: 5rem;\\r\\n  row-gap: 1rem;\\r\\n  justify-items: center;\\r\\n  margin: 2rem 2rem;\\r\\n}\\r\\n\\r\\n.form-data,\\r\\n.form-data form {\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.form-data h3 {\\r\\n  margin-top: 1rem;\\r\\n}\\r\\n\\r\\n.comment-details {\\r\\n  padding: 1rem 0;\\r\\n  gap: 0.5rem;\\r\\n  max-height: 10rem;\\r\\n  overflow-y: auto;\\r\\n  max-width: 250px;\\r\\n}\\r\\n\\r\\n#mobile-menu {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#menu-open {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#empty-fields {\\r\\n  display: none;\\r\\n  color: #3d3132;\\r\\n  padding: 0.25rem;\\r\\n  font-size: 0.9rem;\\r\\n  background: #e57373;\\r\\n  border-radius: 5px;\\r\\n  max-width: 11.5rem;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#empty-fields .material-symbols-outlined {\\r\\n  font-size: 2rem;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 768px) {\\r\\n  .desktop-items {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .links {\\r\\n    flex-direction: column;\\r\\n    font-size: 1.2rem;\\r\\n  }\\r\\n\\r\\n  #menu-open {\\r\\n    display: block;\\r\\n  }\\r\\n\\r\\n  .nav-bar {\\r\\n    align-items: flex-start;\\r\\n  }\\r\\n\\r\\n  .mobile-menu {\\r\\n    display: none;\\r\\n    padding-bottom: 5rem;\\r\\n  }\\r\\n\\r\\n  .homepage-content {\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  .data-img img {\\r\\n    width: 100%;\\r\\n    height: 15rem;\\r\\n  }\\r\\n\\r\\n  .data-img {\\r\\n    flex-direction: column-reverse;\\r\\n    gap: 1rem;\\r\\n  }\\r\\n\\r\\n  .top-layer {\\r\\n    width: fit-content;\\r\\n    overflow-y: auto;\\r\\n  }\\r\\n\\r\\n  .popup-info {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  .user-input {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    margin: 2rem;\\r\\n  }\\r\\n\\r\\n  .comment-details {\\r\\n    width: max-content;\\r\\n  }\\r\\n\\r\\n  .btn:hover {\\r\\n    font-size: 0.85rem;\\r\\n    padding: 0.85rem 1rem;\\r\\n    background-color: #b39b65;\\r\\n    color: #543124;\\r\\n  }\\r\\n\\r\\n  #comment-submission:hover {\\r\\n    background-color: #543124;\\r\\n    color: #b39b65;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/API.js */ \"./src/modules/API.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_displayPopUp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/displayPopUp.js */ \"./src/modules/displayPopUp.js\");\n/* harmony import */ var _modules_itemsCount_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/itemsCount.js */ \"./src/modules/itemsCount.js\");\n// eslint-disable-next-line\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst homepage = document.querySelector('#home');\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  (0,_modules_API_js__WEBPACK_IMPORTED_MODULE_0__.getList)()\r\n    .then((data) => {\r\n      const nameHolder = document.querySelectorAll('.brewery-name');\r\n      const breweryImg = document.querySelectorAll('.bre-img');\r\n      const arr = Array.from(nameHolder);\r\n      arr.forEach((task, i) => {\r\n        if ((task.id === data[i].id) && (_modules_displayPopUp_js__WEBPACK_IMPORTED_MODULE_2__.imgUrl[i].id === data[i].id)) {\r\n          task.innerHTML += data[i].name;\r\n          breweryImg[i].setAttribute('src', _modules_displayPopUp_js__WEBPACK_IMPORTED_MODULE_2__.imgUrl[i].url);\r\n          breweryImg[i].setAttribute('alt', data[i].name);\r\n        }\r\n      });\r\n    });\r\n  (0,_modules_API_js__WEBPACK_IMPORTED_MODULE_0__.getList)()\r\n    .then((data) => (0,_modules_displayPopUp_js__WEBPACK_IMPORTED_MODULE_2__.displayPopUp)(data));\r\n});\r\n\r\n(0,_modules_displayPopUp_js__WEBPACK_IMPORTED_MODULE_2__.displayPopUp)();\r\n\r\nlet itemCounter = 0;\r\n\r\nsetTimeout(async () => {\r\n  itemCounter = await (0,_modules_itemsCount_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n  homepage.innerHTML = `Home (${itemCounter})`;\r\n}, 5000);\r\n\r\ndocument.getElementById('menu-open').addEventListener('click', () => {\r\n  document.getElementById('mobile-menu').style.display = 'flex';\r\n  document.getElementById('menu-open').style.display = 'none';\r\n});\r\n\r\ndocument.querySelector('#menu-close').addEventListener('click', () => {\r\n  document.getElementById('mobile-menu').style.display = 'none';\r\n  document.getElementById('menu-open').style.display = 'flex';\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/API.js":
/*!****************************!*\
  !*** ./src/modules/API.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComment\": () => (/* binding */ getComment),\n/* harmony export */   \"getList\": () => (/* binding */ getList),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment)\n/* harmony export */ });\nconst getList = async () => {\r\n  const response = await fetch('https://api.openbrewerydb.org/breweries?by_type=nano&per_page=6');\r\n  const data = await response.json();\r\n\r\n  return data;\r\n};\r\n\r\nconst postComment = async (url, dataObj) => {\r\n  const response = await fetch(url, {\r\n    method: 'POST',\r\n    body: JSON.stringify(dataObj),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n\r\n  return response;\r\n};\r\n\r\nconst getComment = async (id) => {\r\n  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WeiwNxFf2zcjWHsPu3w9/comments?item_id=${id}`)\r\n    .then((res) => res.json());\r\n\r\n  return response;\r\n};\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/API.js?");

/***/ }),

/***/ "./src/modules/displayPopUp.js":
/*!*************************************!*\
  !*** ./src/modules/displayPopUp.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayPopUp\": () => (/* binding */ displayPopUp),\n/* harmony export */   \"imgUrl\": () => (/* binding */ imgUrl)\n/* harmony export */ });\n/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API.js */ \"./src/modules/API.js\");\n\r\n\r\nconst imgUrl = [\r\n  {\r\n    id: '4-stitch-brewing-co-bothell',\r\n    url: 'https://i.pinimg.com/564x/ec/61/e1/ec61e14cdffe29b9d101746777147836.jpg',\r\n  },\r\n  {\r\n    id: 'brockopp-brewing-valley-city',\r\n    url: 'https://i.pinimg.com/564x/93/c3/76/93c37604ff7280e5c7977399def0d1ca.jpg',\r\n  },\r\n  {\r\n    id: 'brouwerij-les-deplorables-woodinville',\r\n    url: 'https://i.pinimg.com/564x/95/c0/8e/95c08eb331e50847b6be8e2de19e3afe.jpg',\r\n  },\r\n  {\r\n    id: 'gnarly-cedar-brewing-greenleaf',\r\n    url: 'https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',\r\n  },\r\n  {\r\n    id: 'oxford-brewing-company-grand-forks',\r\n    url: 'https://i.pinimg.com/564x/07/2a/dd/072add42318c1aaefd083bc258503568.jpg',\r\n  },\r\n];\r\n\r\nconst commentBtn = document.querySelectorAll('.comment-btn');\r\nconst commentArray = Array.from(commentBtn);\r\n\r\nconst displayPopUp = async (dataArr) => commentArray.forEach((btn, i) => {\r\n  btn.addEventListener('click', (e) => {\r\n    e.target.value = imgUrl[i].id;\r\n    for (let i = 0; i < imgUrl.length; i += 1) {\r\n      if ((dataArr[i].id === e.target.value) && (imgUrl[i].id === e.target.value)) {\r\n        const popupContent = `\r\n          <div class=\"popup-window flex\">\r\n            <div class=\"top-layer\">\r\n              <div class=\"data-img flex\">\r\n                <img \r\n                src=\"${imgUrl[i].url}\"; \r\n                alt=\"brewery with alcohol tanks\">\r\n                <span class=\"material-symbols-outlined close-popup\">cancel</span>\r\n              </div>\r\n              <div>\r\n                <h2 class=\"popup-window-header\">\r\n                  ${dataArr[i].name}\r\n                </h2>\r\n                <div class=\"popup-info\">\r\n                  <div class=\"popup-info-section\">\r\n                    <p class=\"info-item\"><strong>Brewery type</strong>: ${dataArr[i].brewery_type}</p>\r\n                    <p class=\"info-item\"><strong>Country</strong>: ${dataArr[i].country}</p>\r\n                    <p class=\"info-item\"><strong>State</strong>: ${dataArr[i].state}</p>\r\n                  </div>\r\n                  <div class=\"popup-info-section\">\r\n                    <p class=\"info-item\"><strong>City</strong>: ${dataArr[i].city}</p>\r\n                    <p class=\"info-item\"><strong>Webpage</strong>: <a href=\"${dataArr[i].webpage_url}\">${dataArr[i].name}</a></p>\r\n                    <p class=\"info-item\"><strong>Phone</strong>: ${dataArr[i].phone}</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"user-input\">\r\n                <div class=\"comments\">\r\n                  <h3>Comments (<span class=\"comment-counter\">...</span>)</h3>\r\n                  <div class=\"comment-details flex\"></div>\r\n                </div>\r\n                <div class=\"form-data flex\">\r\n                  <h3>Add a comment</h3>\r\n                  <form action=\"#\" class=\"flex\">\r\n                    <label for=\"name\"></label>\r\n                    <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Your name\">\r\n                    <label for=\"text\"></label>\r\n                    <textarea name=\"text\" id=\"text\" cols=\"30\" rows=\"5\" placeholder=\"Your comment\"></textarea>\r\n                    <small id=\"empty-fields\"><span class=\"material-symbols-outlined\">error</span> All fields are required</small>\r\n                    <div class=\"btn-width\">\r\n                      <button type=\"button\" class=\"btn\" id=\"comment-submission\">Comment</button>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>`;\r\n\r\n        document.querySelector('body').style.overflow = 'hidden';\r\n\r\n        const popUpHolder = document.querySelector('.popup-holder');\r\n\r\n        popUpHolder.insertAdjacentHTML('afterbegin', popupContent);\r\n\r\n        document.querySelector('.close-popup').addEventListener('click', () => {\r\n          const removed = document.querySelector('.popup-window');\r\n          popUpHolder.removeChild(removed);\r\n          document.querySelector('body').style.overflow = 'initial';\r\n        });\r\n\r\n        document.querySelector('#comment-submission').addEventListener('click', () => {\r\n          const commentName = document.querySelector('#name');\r\n          const commentText = document.querySelector('#text');\r\n          let counterValue = parseInt(document.querySelector('.comment-counter').textContent, 10);\r\n\r\n          if ((commentName.value === '') || (commentText.value === '')) {\r\n            document.getElementById('empty-fields').style.display = 'flex';\r\n          } else {\r\n            document.getElementById('empty-fields').style.display = 'none';\r\n            const commentObj = {\r\n              item_id: dataArr[i].id,\r\n              username: commentName.value,\r\n              comment: commentText.value,\r\n            };\r\n\r\n            (0,_API_js__WEBPACK_IMPORTED_MODULE_0__.postComment)('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WeiwNxFf2zcjWHsPu3w9/comments', commentObj)\r\n              .then((response) => response.json())\r\n              .then((json) => json);\r\n\r\n            document.querySelector('.comment-details').innerHTML += `\r\n              <p>${commentName.value}: ${commentText.value}</p>\r\n            `;\r\n            counterValue += 1;\r\n            document.querySelector('.comment-counter').innerHTML = counterValue;\r\n          }\r\n        });\r\n\r\n        (0,_API_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(dataArr[i].id)\r\n          .then((data) => {\r\n            data.forEach((task) => {\r\n              document.querySelector('.comment-details').innerHTML += `\r\n                <p>${task.username}: ${task.comment}</p>\r\n              `;\r\n              if (data.length !== 0) {\r\n                document.querySelector('.comment-counter').innerHTML = `${data.length}`;\r\n              }\r\n            });\r\n          });\r\n      }\r\n    }\r\n  });\r\n});\n\n//# sourceURL=webpack://to-do-list/./src/modules/displayPopUp.js?");

/***/ }),

/***/ "./src/modules/itemsCount.js":
/*!***********************************!*\
  !*** ./src/modules/itemsCount.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst itemCounterFunction = () => {\r\n    const breweryinfo = document.querySelector('.homepage-content flex');\r\n    let counter = 0;\r\n    counter = breweryinfo.getElementsByTagName('img').length;\r\n    return counter;\r\n  };\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCounterFunction);\n\n//# sourceURL=webpack://to-do-list/./src/modules/itemsCount.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;