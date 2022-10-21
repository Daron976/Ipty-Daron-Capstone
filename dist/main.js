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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nhtml,\\nbody {\\n  background:\\n    radial-gradient(rgb(116, 87, 71, 0.7), rgb(150, 96, 68, 0.7)),\\n    url(https://images.unsplash.com/photo-1537567563737-dc995720616f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80);\\n  height: max-content;\\n  z-index: -1;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  color: white;\\n}\\n\\nbody {\\n  font-family: 'Cairo', sans-serif;\\n}\\n\\n/* desktop version */\\n.flex {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.nav-bar,\\n.footer-info {\\n  font-family: 'Cairo', sans-serif;\\n  flex-direction: row;\\n  background-color: #543124;\\n  justify-content: space-around;\\n  align-items: center;\\n  padding: 1rem;\\n  color: white;\\n}\\n\\n.web-logo {\\n  width: 40px;\\n}\\n\\n.links {\\n  flex-direction: row;\\n  gap: 2.5rem;\\n  align-items: center;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: inherit;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\n.footer-info {\\n  bottom: 0;\\n  width: 100%;\\n}\\n\\n.homepage-content {\\n  flex-direction: row;\\n  justify-content: space-around;\\n  align-items: center;\\n  padding: 5rem 10rem;\\n}\\n\\n.like-btn {\\n  background: none;\\n  border: none;\\n  color: var(--text-color-3);\\n  font-size: 1.2rem;\\n  margin-right: 0.5rem;\\n  cursor: pointer;\\n}\\n\\n.like-btn .fa-heart {\\n  margin-right: 0.75rem;\\n}\\n\\n/* home page */\\n\\n.bre-img {\\n  width: 100%;\\n  height: 15rem;\\n  border-top-left-radius: 5%;\\n  border-top-right-radius: 5%;\\n}\\n\\narticle {\\n  background-color: rgb(150, 96, 68, 0.5);\\n  width: 18rem;\\n  height: 100%;\\n  padding-bottom: 1rem;\\n  align-items: center;\\n  justify-content: flex-start;\\n  margin-bottom: 2rem;\\n  border-radius: 5%;\\n  filter: drop-shadow(2px 4px 6px black);\\n}\\n\\n.article-details {\\n  align-items: center;\\n  gap: 1rem;\\n}\\n\\n.article-content {\\n  align-items: center;\\n  flex-direction: column;\\n  gap: 1rem;\\n}\\n\\n.name-with-likes {\\n  flex-direction: row;\\n  gap: 1rem;\\n  margin-top: 1rem;\\n  align-items: center;\\n}\\n\\n.btn {\\n  font-size: 0.85rem;\\n  font-weight: 700;\\n  padding: 0.85rem 1rem;\\n  background-color: #b39b65;\\n  border: none;\\n  border-radius: 8px;\\n  color: #543124;\\n  transition: all;\\n  transition-duration: 0.3s;\\n}\\n\\n.btn:hover {\\n  font-size: 1rem;\\n  padding: 0.95rem 1.1rem;\\n  background-color: #543124;\\n  color: #b39b65;\\n}\\n\\n#comment-submission {\\n  background-color: #543124;\\n  color: #b39b65;\\n}\\n\\n#comment-submission:hover {\\n  background-color: #b39b65;\\n  color: #543124;\\n}\\n\\n/* popup styling */\\n\\n.popup-window {\\n  align-items: center;\\n  justify-content: center;\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  left: 0;\\n  bottom: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: #ffffff63;\\n  z-index: 2;\\n  cursor: pointer;\\n  backdrop-filter: blur(10px);\\n}\\n\\n.data-img {\\n  flex-direction: row;\\n  justify-content: space-between;\\n  width: 100%;\\n}\\n\\n.data-img img {\\n  width: 30rem;\\n  height: 25rem;\\n  border-radius: 20px;\\n}\\n\\n.top-layer {\\n  background-color: rgb(253, 253, 253, 0.6);\\n  border-radius: 20px;\\n  font-size: 1.2rem;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin: 1rem;\\n  padding: 1rem;\\n  width: 55%;\\n  color: #543124;\\n}\\n\\n.popup-info {\\n  display: grid;\\n  grid-template-columns: auto auto;\\n  column-gap: 5rem;\\n  justify-items: center;\\n  margin: 2rem 2rem;\\n}\\n\\n.info-item {\\n  margin-bottom: 1rem;\\n}\\n\\n.popup-window h2 {\\n  display: flex;\\n  font-size: 2rem;\\n  margin: 2rem;\\n  justify-content: center;\\n}\\n\\n.comments {\\n  margin-top: 1rem;\\n}\\n\\nlabel {\\n  display: none;\\n  visibility: hidden;\\n}\\n\\ninput,\\ntextarea {\\n  max-width: 250px;\\n  line-height: 1rem;\\n  border: none;\\n  border-radius: 10px;\\n}\\n\\ninput {\\n  height: 1.7rem;\\n}\\n\\ntextarea::placeholder,\\ninput::placeholder {\\n  color: #543124;\\n  font-size: 0.9rem;\\n  font-style: italic;\\n  padding: 0.5rem;\\n}\\n\\ntextarea:focus,\\ninput:focus {\\n  outline: none;\\n}\\n\\nh3 {\\n  justify-content: flex-start;\\n}\\n\\n.material-symbols-outlined {\\n  font-size: 2.5rem;\\n}\\n\\n.user-input {\\n  display: grid;\\n  grid-template-columns: auto auto;\\n  column-gap: 5rem;\\n  row-gap: 1rem;\\n  justify-items: center;\\n  margin: 2rem 2rem;\\n}\\n\\n.form-data,\\n.form-data form {\\n  gap: 1rem;\\n}\\n\\n.form-data h3 {\\n  margin-top: 1rem;\\n}\\n\\n.comment-details {\\n  padding: 1rem 0;\\n  gap: 0.5rem;\\n  max-height: 10rem;\\n  overflow-y: auto;\\n  max-width: 250px;\\n}\\n\\n#mobile-menu {\\n  display: none;\\n}\\n\\n#menu-open {\\n  display: none;\\n}\\n\\n#empty-fields {\\n  display: none;\\n  color: #3d3132;\\n  padding: 0.25rem;\\n  font-size: 0.9rem;\\n  background: #e57373;\\n  border-radius: 5px;\\n  max-width: 11.5rem;\\n  align-items: center;\\n}\\n\\n#empty-fields .material-symbols-outlined {\\n  font-size: 2rem;\\n}\\n\\n@media screen and (max-width: 768px) {\\n  .desktop-items {\\n    display: none;\\n  }\\n\\n  .links {\\n    flex-direction: column;\\n    font-size: 1.2rem;\\n  }\\n\\n  #menu-open {\\n    display: flex;\\n  }\\n\\n  .nav-bar {\\n    align-items: flex-start;\\n    position: fixed;\\n    width: 100%;\\n    padding-bottom: 1rem;\\n    z-index: 4;\\n  }\\n  \\n  .mobile-menu {\\n    display: none;\\n    padding-bottom: 5rem;\\n    animation: slide 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\\n  }\\n\\n  .homepage-content {\\n    flex-direction: column;\\n    padding-top: 7rem;\\n  }\\n\\n  .data-img img {\\n    width: 100%;\\n    height: 15rem;\\n  }\\n\\n  .data-img {\\n    flex-direction: column-reverse;\\n    gap: 1rem;\\n  }\\n\\n  .top-layer {\\n    width: fit-content;\\n    overflow-y: auto;\\n    margin-top: 5.5rem;\\n  }\\n\\n  .popup-info {\\n    display: flex;\\n    flex-direction: column;\\n  }\\n\\n  .user-input {\\n    display: flex;\\n    flex-direction: column;\\n    margin: 2rem;\\n  }\\n\\n  .comment-details {\\n    width: max-content;\\n  }\\n\\n  .btn:hover {\\n    font-size: 0.85rem;\\n    padding: 0.85rem 1rem;\\n    background-color: #b39b65;\\n    color: #543124;\\n  }\\n\\n  #comment-submission:hover {\\n    background-color: #543124;\\n    color: #b39b65;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/API.js */ \"./src/modules/API.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_displayPopUp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/displayPopUp.js */ \"./src/modules/displayPopUp.js\");\n/* harmony import */ var _modules_likesget_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/likesget.js */ \"./src/modules/likesget.js\");\n// eslint-disable-next-line\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_modules_API_js__WEBPACK_IMPORTED_MODULE_0__.getList)()\n    .then((data) => {\n      const nameHolder = document.querySelectorAll('.brewery-name');\n      const breweryImg = document.querySelectorAll('.bre-img');\n      const arr = Array.from(nameHolder);\n      arr.forEach((task, i) => {\n        if ((task.id === data[i].id) && (_modules_displayPopUp_js__WEBPACK_IMPORTED_MODULE_2__.imgUrl[i].id === data[i].id)) {\n          task.innerHTML += data[i].name;\n          breweryImg[i].setAttribute('src', _modules_displayPopUp_js__WEBPACK_IMPORTED_MODULE_2__.imgUrl[i].url);\n          breweryImg[i].setAttribute('alt', data[i].name);\n        }\n      });\n    });\n  (0,_modules_API_js__WEBPACK_IMPORTED_MODULE_0__.getList)()\n    .then((data) => (0,_modules_displayPopUp_js__WEBPACK_IMPORTED_MODULE_2__.displayPopUp)(data));\n  (0,_modules_API_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)()\n    .then((likes) => (0,_modules_likesget_js__WEBPACK_IMPORTED_MODULE_3__.displayLikes)(likes));\n});\n\n(0,_modules_displayPopUp_js__WEBPACK_IMPORTED_MODULE_2__.displayPopUp)();\n\n(0,_modules_likesget_js__WEBPACK_IMPORTED_MODULE_3__.likeInteraction)();\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/API.js":
/*!****************************!*\
  !*** ./src/modules/API.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAPI\": () => (/* binding */ getAPI),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"getList\": () => (/* binding */ getList),\n/* harmony export */   \"postAPI\": () => (/* binding */ postAPI)\n/* harmony export */ });\nconst getList = async () => {\n  const response = await fetch('https://api.openbrewerydb.org/breweries?by_type=nano&per_page=6');\n  const data = await response.json();\n\n  return data;\n};\n\nconst postAPI = async (url, dataObj) => {\n  const response = await fetch(url, {\n    method: 'POST',\n    body: JSON.stringify(dataObj),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n\n  return response;\n};\n\nconst getAPI = async (id) => {\n  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HXa9GIOD94bm1hT63nt8/comments?item_id=${id}`)\n    .then((res) => res.json());\n\n  return response;\n};\n\nconst getLikes = async () => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HXa9GIOD94bm1hT63nt8/likes')\n    .then((res) => res.json());\n\n  return response;\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/API.js?");

/***/ }),

/***/ "./src/modules/displayPopUp.js":
/*!*************************************!*\
  !*** ./src/modules/displayPopUp.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayPopUp\": () => (/* binding */ displayPopUp),\n/* harmony export */   \"imgUrl\": () => (/* binding */ imgUrl)\n/* harmony export */ });\n/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API.js */ \"./src/modules/API.js\");\n\n\nconst imgUrl = [\n  {\n    id: '4-stitch-brewing-co-bothell',\n    url: 'https://i.pinimg.com/564x/ec/61/e1/ec61e14cdffe29b9d101746777147836.jpg',\n  },\n  {\n    id: 'brockopp-brewing-valley-city',\n    url: 'https://i.pinimg.com/564x/93/c3/76/93c37604ff7280e5c7977399def0d1ca.jpg',\n  },\n  {\n    id: 'brouwerij-les-deplorables-woodinville',\n    url: 'https://i.pinimg.com/564x/95/c0/8e/95c08eb331e50847b6be8e2de19e3afe.jpg',\n  },\n  {\n    id: 'gnarly-cedar-brewing-greenleaf',\n    url: 'https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',\n  },\n  {\n    id: 'oxford-brewing-company-grand-forks',\n    url: 'https://i.pinimg.com/564x/07/2a/dd/072add42318c1aaefd083bc258503568.jpg',\n  },\n];\n\nconst commentBtn = document.querySelectorAll('.comment-btn');\nconst commentArray = Array.from(commentBtn);\n\nconst displayPopUp = async (dataArr) => commentArray.forEach((btn, i) => {\n  btn.addEventListener('click', (e) => {\n    e.target.value = imgUrl[i].id;\n    for (let i = 0; i < imgUrl.length; i += 1) {\n      if ((dataArr[i].id === e.target.value) && (imgUrl[i].id === e.target.value)) {\n        const popupContent = `\n          <div class=\"popup-window flex\">\n            <div class=\"top-layer\">\n              <div class=\"data-img flex\">\n                <img \n                src=\"${imgUrl[i].url}\"; \n                alt=\"brewery with alcohol tanks\">\n                <span class=\"material-symbols-outlined close-popup\">cancel</span>\n              </div>\n              <div>\n                <h2 class=\"popup-window-header\">\n                  ${dataArr[i].name}\n                </h2>\n                <div class=\"popup-info\">\n                  <div class=\"popup-info-section\">\n                    <p class=\"info-item\"><strong>Brewery type</strong>: ${dataArr[i].brewery_type}</p>\n                    <p class=\"info-item\"><strong>Country</strong>: ${dataArr[i].country}</p>\n                    <p class=\"info-item\"><strong>State</strong>: ${dataArr[i].state}</p>\n                  </div>\n                  <div class=\"popup-info-section\">\n                    <p class=\"info-item\"><strong>City</strong>: ${dataArr[i].city}</p>\n                    <p class=\"info-item\"><strong>Webpage</strong>: <a href=\"${dataArr[i].webpage_url}\">${dataArr[i].name}</a></p>\n                    <p class=\"info-item\"><strong>Phone</strong>: ${dataArr[i].phone}</p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"user-input\">\n                <div class=\"comments\">\n                  <h3>Comments (<span class=\"comment-counter\">0</span>)</h3>\n                  <div class=\"comment-details flex\"></div>\n                </div>\n                <div class=\"form-data flex\">\n                  <h3>Add a comment</h3>\n                  <form action=\"#\" class=\"flex\">\n                    <label for=\"name\"></label>\n                    <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Your name\">\n                    <label for=\"text\"></label>\n                    <textarea name=\"text\" id=\"text\" cols=\"30\" rows=\"5\" placeholder=\"Your comment\"></textarea>\n                    <small id=\"empty-fields\"><span class=\"material-symbols-outlined\">error</span> All fields are required</small>\n                    <div class=\"btn-width\">\n                      <button type=\"button\" class=\"btn\" id=\"comment-submission\">Comment</button>\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>`;\n\n        document.querySelector('body').style.overflow = 'hidden';\n\n        const popUpHolder = document.querySelector('.popup-holder');\n\n        popUpHolder.insertAdjacentHTML('afterbegin', popupContent);\n\n        document.querySelector('.close-popup').addEventListener('click', () => {\n          const removed = document.querySelector('.popup-window');\n          popUpHolder.removeChild(removed);\n          document.querySelector('body').style.overflow = 'initial';\n        });\n\n        document.querySelector('#comment-submission').addEventListener('click', () => {\n          const commentName = document.querySelector('#name');\n          const commentText = document.querySelector('#text');\n          let counterValue = parseInt(document.querySelector('.comment-counter').textContent, 10);\n\n          if ((commentName.value === '') || (commentText.value === '')) {\n            document.getElementById('empty-fields').style.display = 'flex';\n          } else {\n            document.getElementById('empty-fields').style.display = 'none';\n            const commentObj = {\n              item_id: dataArr[i].id,\n              username: commentName.value,\n              comment: commentText.value,\n            };\n\n            (0,_API_js__WEBPACK_IMPORTED_MODULE_0__.postAPI)('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HXa9GIOD94bm1hT63nt8/comments', commentObj)\n              .then((response) => response.json())\n              .then((json) => json);\n\n            document.querySelector('.comment-details').innerHTML += `\n              <p>${commentName.value}: ${commentText.value}</p>\n            `;\n            counterValue += 1;\n            document.querySelector('.comment-counter').innerHTML = counterValue;\n          }\n        });\n\n        (0,_API_js__WEBPACK_IMPORTED_MODULE_0__.getAPI)(dataArr[i].id)\n          .then((data) => {\n            data.forEach((task) => {\n              document.querySelector('.comment-details').innerHTML += `\n                <p>${task.username}: ${task.comment}</p>\n              `;\n              if (data.length !== 0) {\n                document.querySelector('.comment-counter').innerHTML = `${data.length}`;\n              }\n            });\n          });\n      }\n    }\n  });\n});\n\n//# sourceURL=webpack://to-do-list/./src/modules/displayPopUp.js?");

/***/ }),

/***/ "./src/modules/likesget.js":
/*!*********************************!*\
  !*** ./src/modules/likesget.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayLikes\": () => (/* binding */ displayLikes),\n/* harmony export */   \"likeInteraction\": () => (/* binding */ likeInteraction)\n/* harmony export */ });\n/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API.js */ \"./src/modules/API.js\");\n\n\nconst likeBtns = document.querySelectorAll('.like-btn');\nconst likeAmount = document.querySelectorAll('.like-amount');\n\nconst likeInteraction = () => {\n  likeBtns.forEach((btn, index) => {\n    btn.addEventListener('click', (e) => {\n      const targetParent = e.target.parentNode.parentNode.lastElementChild;\n      // eslint-disable-next-line\n      const id = targetParent.firstElementChild.id;\n      let likeVal = 0;\n\n      if (likeAmount[index].innerHTML === '') {\n        likeVal += 1;\n        likeAmount[index].innerHTML = likeVal;\n      } else {\n        likeVal = parseInt(likeAmount[index].textContent, 10);\n        likeVal += 1;\n        likeAmount[index].innerHTML = likeVal;\n      }\n\n      const idObj = {\n        item_id: id,\n      };\n      (0,_API_js__WEBPACK_IMPORTED_MODULE_0__.postAPI)('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HXa9GIOD94bm1hT63nt8/likes', idObj);\n    });\n  });\n};\n\nconst displayLikes = (arr) => {\n  for (let i = 0; i < arr.length; i += 1) {\n    for (let j = 0; j < likeAmount.length; j += 1) {\n      if (arr[i].item_id === likeAmount[j].id) {\n        likeAmount[j].innerHTML = arr[i].likes;\n      }\n    }\n  }\n};\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/likesget.js?");

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