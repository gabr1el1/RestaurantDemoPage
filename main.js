/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./tacos_bg.jpg */ "./src/tacos_bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./mexcellent/mexcellent3d.otf */ "./src/mexcellent/mexcellent3d.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n    user-select: none;\n}\n:root{\n    --main-red: rgb(222, 50, 50);\n    --main-green: rgb(0, 99, 65);\n    --secondary-green: greenyellow;\n}\nbody,html{\n    min-height: 100vh;\n    min-width: 100vw;\n}\nbody{\n    display: flex;\n    flex-direction: column;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;    \n}\n@font-face {\n    font-family: mexico;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n#content{\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n}\nheader{\n    font-family: mexico ,'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n    background-color: rgb(222, 50, 50);\n    border: thick double var(--main-green);\n}\n\nheader li{\n    list-style-type: none;\n}\n\nheader h1{\n    font-size: 5vw;\n    color: white;\n}\n\nheader :not(h1){\n    font-size: 3vw;\n    color: var(--secondary-green);\n}\n\nheader li a{\n    position: relative;\n    top: 0px;\n    text-decoration: none;\n    transition: all ease 0.5s;\n}\n\nheader li a:hover{\n    top: -5px;\n    color: white;\n}\n\nheader ul{\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    gap: 3vw;\n    align-items: center;\n}\nmain{\n    flex: 1;\n    padding: 10px;\n}\n.about{\n    display: flex;\n    gap: 10px;\n    flex-wrap: wrap;\n}\n\n.about > *{\n    flex: 1;\n    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.465);\n    min-width: 450px;\n    \n}\n\n.fa-brands{\n    transition: opacity 0.4s ease;\n}\n.fa-brands:hover{\n    opacity: 0.7;\n}\n\n.info{\n    background: var(--main-green);\n    color: white;\n    border: thick double var(--main-red);\n    padding: 20px;\n    border-radius: 10px;\n    text-align: justify;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 10px;\n}\n\n.info h1{\n    margin-bottom: 20px;\n}\n\n.socials{\n    list-style-type: none;\n    display: flex;\n    gap: 10px;\n}\n.socials img{\n    width: 1.5rem;\n    fill: white;\n}\n\n.socials li{\n    display: flex;\n    align-items: center;\n}\na:visited,:active{\n    color: white;\n}\n\n.menu{\n    display: grid;\n    grid-template-columns: repeat(auto-fit,minmax(200px, 1fr));\n    gap: 10px;\n}\n\n.menu > div{\n    background: rgba(211, 211, 211, 0.924);\n    border-radius: 5px;\n    padding: 10px;\n    border: thick double var(--main-red);\n    height: min-content;\n}\n\n.item-menu{\n    display: flex;\n    flex-direction: column;\n    transition: background 0.3s ease;\n    padding: 15px;\n    gap: 10px;\n}\n\n.item-menu > div{\n    text-align: center;\n}\n\n.item-menu:hover{\n    background: grey;\n}\n.item-menu > div > img{\n    width: 80%;\n}\n\np:first-line {\n    line-height:0 !important;\n}\n\n\nfooter{\n    padding: 10px;\n    background-color: rgba(128, 128, 128, 0.417);\n    color: white;\n    display: flex;\n    justify-content: center;\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,iBAAiB;AACrB;AACA;IACI,4BAA4B;IAC5B,4BAA4B;IAC5B,8BAA8B;AAClC;AACA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,6EAA6E;IAC7E,yDAAqC;IACrC,sBAAsB;AAC1B;AACA;IACI,mBAAmB;IACnB,4CAAuC;AAC3C;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,OAAO;AACX;AACA;IACI,qFAAqF;IACrF,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,kCAAkC;IAClC,sCAAsC;AAC1C;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,cAAc;IACd,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA;IACI,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,OAAO;IACP,aAAa;IACb,uBAAuB;IACvB,QAAQ;IACR,mBAAmB;AACvB;AACA;IACI,OAAO;IACP,aAAa;AACjB;AACA;IACI,aAAa;IACb,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,OAAO;IACP,6CAA6C;IAC7C,gBAAgB;;AAEpB;;AAEA;IACI,6BAA6B;AACjC;AACA;IACI,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,SAAS;AACb;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,SAAS;AACb;AACA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,0DAA0D;IAC1D,SAAS;AACb;;AAEA;IACI,sCAAsC;IACtC,kBAAkB;IAClB,aAAa;IACb,oCAAoC;IACpC,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,gCAAgC;IAChC,aAAa;IACb,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;AACA;IACI,UAAU;AACd;;AAEA;IACI,wBAAwB;AAC5B;;;AAGA;IACI,aAAa;IACb,4CAA4C;IAC5C,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B","sourcesContent":["*{\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n    user-select: none;\n}\n:root{\n    --main-red: rgb(222, 50, 50);\n    --main-green: rgb(0, 99, 65);\n    --secondary-green: greenyellow;\n}\nbody,html{\n    min-height: 100vh;\n    min-width: 100vw;\n}\nbody{\n    display: flex;\n    flex-direction: column;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    background-image: url(./tacos_bg.jpg);\n    background-size: cover;    \n}\n@font-face {\n    font-family: mexico;\n    src: url(./mexcellent/mexcellent3d.otf);\n}\n#content{\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n}\nheader{\n    font-family: mexico ,'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n    background-color: rgb(222, 50, 50);\n    border: thick double var(--main-green);\n}\n\nheader li{\n    list-style-type: none;\n}\n\nheader h1{\n    font-size: 5vw;\n    color: white;\n}\n\nheader :not(h1){\n    font-size: 3vw;\n    color: var(--secondary-green);\n}\n\nheader li a{\n    position: relative;\n    top: 0px;\n    text-decoration: none;\n    transition: all ease 0.5s;\n}\n\nheader li a:hover{\n    top: -5px;\n    color: white;\n}\n\nheader ul{\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    gap: 3vw;\n    align-items: center;\n}\nmain{\n    flex: 1;\n    padding: 10px;\n}\n.about{\n    display: flex;\n    gap: 10px;\n    flex-wrap: wrap;\n}\n\n.about > *{\n    flex: 1;\n    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.465);\n    min-width: 450px;\n    \n}\n\n.fa-brands{\n    transition: opacity 0.4s ease;\n}\n.fa-brands:hover{\n    opacity: 0.7;\n}\n\n.info{\n    background: var(--main-green);\n    color: white;\n    border: thick double var(--main-red);\n    padding: 20px;\n    border-radius: 10px;\n    text-align: justify;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 10px;\n}\n\n.info h1{\n    margin-bottom: 20px;\n}\n\n.socials{\n    list-style-type: none;\n    display: flex;\n    gap: 10px;\n}\n.socials img{\n    width: 1.5rem;\n    fill: white;\n}\n\n.socials li{\n    display: flex;\n    align-items: center;\n}\na:visited,:active{\n    color: white;\n}\n\n.menu{\n    display: grid;\n    grid-template-columns: repeat(auto-fit,minmax(200px, 1fr));\n    gap: 10px;\n}\n\n.menu > div{\n    background: rgba(211, 211, 211, 0.924);\n    border-radius: 5px;\n    padding: 10px;\n    border: thick double var(--main-red);\n    height: min-content;\n}\n\n.item-menu{\n    display: flex;\n    flex-direction: column;\n    transition: background 0.3s ease;\n    padding: 15px;\n    gap: 10px;\n}\n\n.item-menu > div{\n    text-align: center;\n}\n\n.item-menu:hover{\n    background: grey;\n}\n.item-menu > div > img{\n    width: 80%;\n}\n\np:first-line {\n    line-height:0 !important;\n}\n\n\nfooter{\n    padding: 10px;\n    background-color: rgba(128, 128, 128, 0.417);\n    color: white;\n    display: flex;\n    justify-content: center;\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aboutComponent": () => (/* binding */ aboutComponent)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");

function aboutComponent(){

    const main = document.querySelector("main");
    main.innerHTML = "";

    const aboutComponent = document.createElement("div");
    aboutComponent.classList.add("about");
    
    let mapa = document.createElement("div");
    mapa.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14952.751013518327!2d-103.43752041284174!3d20.45748030000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f51975154be2b%3A0xa4b5aff12a03c2b6!2sTacos%20Arandas!5e0!3m2!1ses-419!2smx!4v1683561986971!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    mapa = mapa.firstElementChild;
    const infoSection = document.createElement("div");
    const copy = document.createElement("div");
    const titleCopy = document.createElement("h1");
    titleCopy.innerText = "Who are we?";
    const paragCopy = document.createElement("p");
    paragCopy.innerText = `
    Welcome to our tacos restaurant, 
    
    Our tacos are a true work of art, made with your choice of juicy meat or fresh vegetables, and topped with a variety of flavorful and colorful toppings. From the classic carne asada to the spicy and tangy al pastor, our tacos are sure to satisfy your cravings and leave you wanting more.
    
    Come visit us today and experience the joy of authentic Mexican cuisine. Our friendly staff is ready to welcome you with open arms and show you what makes our restaurant so wonderful. We can't wait to serve you!`;
    const contact = document.createElement("div");
    const contactTitle = document.createElement("h1");
    contactTitle.innerText = "Contact Us";
    const socials = document.createElement("ul");
    socials.classList.add("socials");
    

    const twitter = document.createElement("li");
    twitter.innerHTML = "<a href='#'><i class='fa-brands fa-twitter fa-xl'></i></a>";

    const facebook = document.createElement("li");
    facebook.innerHTML = "<a href='#'><i class='fa-brands fa-facebook fa-xl'></i></a>";
    

    const tiktok = document.createElement("li");
    tiktok.innerHTML = "<a href='#'><i class='fa-brands fa-tiktok fa-xl'></i></a>";

    const youtube = document.createElement("li");
    youtube.innerHTML = "<a href='#'><i class='fa-brands fa-youtube fa-xl'></i></a>";

    const whatsapp = document.createElement("li");
    whatsapp.innerHTML = "<a href='#'><i class='fa-brands fa-whatsapp fa-xl'></i></a>";


    socials.appendChild(twitter);
    socials.appendChild(facebook);
    socials.appendChild(tiktok);
    socials.appendChild(youtube);
    socials.appendChild(whatsapp);


    copy.appendChild(titleCopy);
    copy.appendChild(paragCopy);
    contact.appendChild(contactTitle);
    contact.appendChild(socials);
    infoSection.appendChild(copy);
    infoSection.appendChild(contact);
    infoSection.classList.add("info");
    aboutComponent.appendChild(mapa);
    aboutComponent.appendChild(infoSection);
    main.appendChild(aboutComponent);
}



/***/ }),

/***/ "./src/initial-page.js":
/*!*****************************!*\
  !*** ./src/initial-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialSetUp": () => (/* binding */ initialSetUp)
/* harmony export */ });
function initialSetUp(){
    const content = document.querySelector("#content");
    const header = document.createElement("header");
    const listHeader = document.createElement("ul");
    const itemMenu = document.createElement("li");
    const itemLogo = document.createElement("li");
    const itemAbout = document.createElement("li");
    const linkMenu = document.createElement("a");
    linkMenu.setAttribute("id","linkMenu");
    const headingMenu = document.createElement("h1");
    const linkAbout = document.createElement("a");
    linkAbout.setAttribute("id","linkAbout");
    const info = document.createElement("main");
    const footer = document.createElement("footer");

    header.appendChild(listHeader);
    listHeader.appendChild(itemMenu);
    listHeader.appendChild(itemLogo);
    listHeader.appendChild(itemAbout);
    itemMenu.appendChild(linkMenu);
    itemLogo.appendChild(headingMenu);
    itemAbout.appendChild(linkAbout);

    linkMenu.innerText = "Menu";
    headingMenu.innerText = "Tacos";
    linkAbout.innerText = "About";
    footer.innerHTML = "<span>Hi there, Made by GBRLHZ(gabr1el1)</span><a href='https://github.com/gabr1el1'><i class='fa-brands fa-github'></i></a>"

    content.appendChild(header);
    content.appendChild(info);
    content.appendChild(footer);
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuComponent": () => (/* binding */ menuComponent)
/* harmony export */ });
/* harmony import */ var _images_menu_tacos_bistec_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/menu/tacos-bistec.jpg */ "./src/images/menu/tacos-bistec.jpg");
/* harmony import */ var _images_menu_tacos_chorizo_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/menu/tacos-chorizo.jpg */ "./src/images/menu/tacos-chorizo.jpg");
/* harmony import */ var _images_menu_tacos_lengua_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/menu/tacos-lengua.jpg */ "./src/images/menu/tacos-lengua.jpg");
/* harmony import */ var _images_menu_tacos_pastor_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/menu/tacos-pastor.jpg */ "./src/images/menu/tacos-pastor.jpg");
/* harmony import */ var _images_menu_tacos_suadero_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/menu/tacos-suadero.jpg */ "./src/images/menu/tacos-suadero.jpg");
/* harmony import */ var _images_menu_horchata_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/menu/horchata.jpg */ "./src/images/menu/horchata.jpg");
/* harmony import */ var _images_menu_jamaica_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/menu/jamaica.jpg */ "./src/images/menu/jamaica.jpg");
/* harmony import */ var _images_menu_arroz_con_leche_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/menu/arroz-con-leche.jpg */ "./src/images/menu/arroz-con-leche.jpg");
/* harmony import */ var _images_menu_jericalla_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/menu/jericalla.jpg */ "./src/images/menu/jericalla.jpg");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");










function menuComponent(){
    const main = document.querySelector("main");
    main.innerHTML = "";

    const menuComponent = document.createElement("div");
    menuComponent.classList.add("menu");
    
    const tacosList = [
    {"name":"Tacos de Bistec","price":1.0,"imageURL":_images_menu_tacos_bistec_jpg__WEBPACK_IMPORTED_MODULE_0__},
    {"name":"Tacos de Chorizo","price":1.0,"imageURL":_images_menu_tacos_chorizo_jpg__WEBPACK_IMPORTED_MODULE_1__},
    {"name":"Tacos de Lengua","price":1.5,"imageURL":_images_menu_tacos_lengua_jpg__WEBPACK_IMPORTED_MODULE_2__},
    {"name":"Tacos de Pastor","price":1.5,"imageURL":_images_menu_tacos_pastor_jpg__WEBPACK_IMPORTED_MODULE_3__},
    {"name":"Tacos de Suadero","price":0.9,"imageURL":_images_menu_tacos_suadero_jpg__WEBPACK_IMPORTED_MODULE_4__}
    ];
    
    const drinksList = [
    {"name":"Agua de horchata","price":2.0,"imageURL":_images_menu_horchata_jpg__WEBPACK_IMPORTED_MODULE_5__},
    {"name":"Agua de jamaica","price":1.8,"imageURL":_images_menu_jamaica_jpg__WEBPACK_IMPORTED_MODULE_6__}
    ];

    const dessertsList = [
    {"name":"Arroz con leche","price":1.0,"imageURL":_images_menu_arroz_con_leche_jpg__WEBPACK_IMPORTED_MODULE_7__},
    {"name":"Jericalla","price":0.7,"imageURL":_images_menu_jericalla_jpg__WEBPACK_IMPORTED_MODULE_8__}
    ]

    
    const tacos = document.createElement("div");
    const drinks = document.createElement("div");
    const desserts = document.createElement("div");
    
    const tacosTitle = document.createElement("h1");
    tacosTitle.innerText = "Tacos";
    const drinksTitle = document.createElement("h1");
    drinksTitle.innerText = "Drinks";
    const dessertsTitle = document.createElement("h1");
    dessertsTitle.innerText = "Desserts"

    tacos.appendChild(tacosTitle);
    drinks.appendChild(drinksTitle);
    desserts.appendChild(dessertsTitle);

    loadToCategory(tacos, tacosList);
    loadToCategory(drinks,drinksList);
    loadToCategory(desserts, dessertsList);

    menuComponent.appendChild(tacos);
    menuComponent.appendChild(drinks);
    menuComponent.appendChild(desserts);


    main.appendChild(menuComponent);
}

function loadToCategory(category, listItems){
    listItems.forEach(element => {
        const item = document.createElement("div");
        const html = 
        `<div><h2>${element.name}</h2></div>
        <div><img src=${element.imageURL}></div>
        <div> <p>$${element.price}</p></div>`;
        item.innerHTML = html;
        item.classList.add("item-menu");
        category.appendChild(item);
    });
}







/***/ }),

/***/ "./src/images/menu/arroz-con-leche.jpg":
/*!*********************************************!*\
  !*** ./src/images/menu/arroz-con-leche.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "862298fb55324b1f4015.jpg";

/***/ }),

/***/ "./src/images/menu/horchata.jpg":
/*!**************************************!*\
  !*** ./src/images/menu/horchata.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6960044e3ab40eca2faa.jpg";

/***/ }),

/***/ "./src/images/menu/jamaica.jpg":
/*!*************************************!*\
  !*** ./src/images/menu/jamaica.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "316f9300545b07738893.jpg";

/***/ }),

/***/ "./src/images/menu/jericalla.jpg":
/*!***************************************!*\
  !*** ./src/images/menu/jericalla.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d65e431af7783a14b061.jpg";

/***/ }),

/***/ "./src/images/menu/tacos-bistec.jpg":
/*!******************************************!*\
  !*** ./src/images/menu/tacos-bistec.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "101592e908be2a1e245c.jpg";

/***/ }),

/***/ "./src/images/menu/tacos-chorizo.jpg":
/*!*******************************************!*\
  !*** ./src/images/menu/tacos-chorizo.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a414624c059297b2bf8.jpg";

/***/ }),

/***/ "./src/images/menu/tacos-lengua.jpg":
/*!******************************************!*\
  !*** ./src/images/menu/tacos-lengua.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c5ae65e538e35ad71583.jpg";

/***/ }),

/***/ "./src/images/menu/tacos-pastor.jpg":
/*!******************************************!*\
  !*** ./src/images/menu/tacos-pastor.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f9b83975089a46a0f1c.jpg";

/***/ }),

/***/ "./src/images/menu/tacos-suadero.jpg":
/*!*******************************************!*\
  !*** ./src/images/menu/tacos-suadero.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37002053b3daa3b19d6c.jpg";

/***/ }),

/***/ "./src/mexcellent/mexcellent3d.otf":
/*!*****************************************!*\
  !*** ./src/mexcellent/mexcellent3d.otf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de80edcbe458cad701ab.otf";

/***/ }),

/***/ "./src/tacos_bg.jpg":
/*!**************************!*\
  !*** ./src/tacos_bg.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b54408dc6d0ec5b0bd8f.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initial_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-page */ "./src/initial-page.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");
//console.log("hol ");




(0,_initial_page__WEBPACK_IMPORTED_MODULE_0__.initialSetUp)();
(0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuComponent)();
document.querySelector("#linkMenu").addEventListener("click",_menu__WEBPACK_IMPORTED_MODULE_1__.menuComponent);
document.querySelector("#linkAbout").addEventListener("click",_about__WEBPACK_IMPORTED_MODULE_2__.aboutComponent);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSw4REFBOEQsa0RBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luaXRpYWwtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3RhY29zX2JnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vbWV4Y2VsbGVudC9tZXhjZWxsZW50M2Qub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG46cm9vdHtcXG4gICAgLS1tYWluLXJlZDogcmdiKDIyMiwgNTAsIDUwKTtcXG4gICAgLS1tYWluLWdyZWVuOiByZ2IoMCwgOTksIDY1KTtcXG4gICAgLS1zZWNvbmRhcnktZ3JlZW46IGdyZWVueWVsbG93O1xcbn1cXG5ib2R5LGh0bWx7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbn1cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgICAgXFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogbWV4aWNvO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAxO1xcbn1cXG5oZWFkZXJ7XFxuICAgIGZvbnQtZmFtaWx5OiBtZXhpY28gLCdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjIsIDUwLCA1MCk7XFxuICAgIGJvcmRlcjogdGhpY2sgZG91YmxlIHZhcigtLW1haW4tZ3JlZW4pO1xcbn1cXG5cXG5oZWFkZXIgbGl7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuaGVhZGVyIGgxe1xcbiAgICBmb250LXNpemU6IDV2dztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5oZWFkZXIgOm5vdChoMSl7XFxuICAgIGZvbnQtc2l6ZTogM3Z3O1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyZWVuKTtcXG59XFxuXFxuaGVhZGVyIGxpIGF7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAwcHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC41cztcXG59XFxuXFxuaGVhZGVyIGxpIGE6aG92ZXJ7XFxuICAgIHRvcDogLTVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5oZWFkZXIgdWx7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDN2dztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbntcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuLmFib3V0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmFib3V0ID4gKntcXG4gICAgZmxleDogMTtcXG4gICAgYm94LXNoYWRvdzogLTVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC40NjUpO1xcbiAgICBtaW4td2lkdGg6IDQ1MHB4O1xcbiAgICBcXG59XFxuXFxuLmZhLWJyYW5kc3tcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2U7XFxufVxcbi5mYS1icmFuZHM6aG92ZXJ7XFxuICAgIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLmluZm97XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tZ3JlZW4pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogdGhpY2sgZG91YmxlIHZhcigtLW1haW4tcmVkKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5pbmZvIGgxe1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uc29jaWFsc3tcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5zb2NpYWxzIGltZ3tcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgZmlsbDogd2hpdGU7XFxufVxcblxcbi5zb2NpYWxzIGxpe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5hOnZpc2l0ZWQsOmFjdGl2ZXtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWVudXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsbWlubWF4KDIwMHB4LCAxZnIpKTtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubWVudSA+IGRpdntcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMTEsIDIxMSwgMjExLCAwLjkyNCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiB0aGljayBkb3VibGUgdmFyKC0tbWFpbi1yZWQpO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uaXRlbS1tZW51e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uaXRlbS1tZW51ID4gZGl2e1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pdGVtLW1lbnU6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6IGdyZXk7XFxufVxcbi5pdGVtLW1lbnUgPiBkaXYgPiBpbWd7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbnA6Zmlyc3QtbGluZSB7XFxuICAgIGxpbmUtaGVpZ2h0OjAgIWltcG9ydGFudDtcXG59XFxuXFxuXFxuZm9vdGVye1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDE3KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZFQUE2RTtJQUM3RSx5REFBcUM7SUFDckMsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsNENBQXVDO0FBQzNDO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLE9BQU87QUFDWDtBQUNBO0lBQ0kscUZBQXFGO0lBQ3JGLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtDQUFrQztJQUNsQyxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLE9BQU87SUFDUCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsNkNBQTZDO0lBQzdDLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMERBQTBEO0lBQzFELFNBQVM7QUFDYjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLDRDQUE0QztJQUM1QyxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuOnJvb3R7XFxuICAgIC0tbWFpbi1yZWQ6IHJnYigyMjIsIDUwLCA1MCk7XFxuICAgIC0tbWFpbi1ncmVlbjogcmdiKDAsIDk5LCA2NSk7XFxuICAgIC0tc2Vjb25kYXJ5LWdyZWVuOiBncmVlbnllbGxvdztcXG59XFxuYm9keSxodG1se1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG59XFxuYm9keXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL3RhY29zX2JnLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICAgIFxcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IG1leGljbztcXG4gICAgc3JjOiB1cmwoLi9tZXhjZWxsZW50L21leGNlbGxlbnQzZC5vdGYpO1xcbn1cXG4jY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMTtcXG59XFxuaGVhZGVye1xcbiAgICBmb250LWZhbWlseTogbWV4aWNvICwnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIyLCA1MCwgNTApO1xcbiAgICBib3JkZXI6IHRoaWNrIGRvdWJsZSB2YXIoLS1tYWluLWdyZWVuKTtcXG59XFxuXFxuaGVhZGVyIGxpe1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmhlYWRlciBoMXtcXG4gICAgZm9udC1zaXplOiA1dnc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaGVhZGVyIDpub3QoaDEpe1xcbiAgICBmb250LXNpemU6IDN2dztcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1ncmVlbik7XFxufVxcblxcbmhlYWRlciBsaSBhe1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMHB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNXM7XFxufVxcblxcbmhlYWRlciBsaSBhOmhvdmVye1xcbiAgICB0b3A6IC01cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaGVhZGVyIHVse1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAzdnc7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW57XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5hYm91dHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5hYm91dCA+ICp7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJveC1zaGFkb3c6IC01cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNDY1KTtcXG4gICAgbWluLXdpZHRoOiA0NTBweDtcXG4gICAgXFxufVxcblxcbi5mYS1icmFuZHN7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlO1xcbn1cXG4uZmEtYnJhbmRzOmhvdmVye1xcbiAgICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5pbmZve1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWdyZWVuKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IHRoaWNrIGRvdWJsZSB2YXIoLS1tYWluLXJlZCk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uaW5mbyBoMXtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnNvY2lhbHN7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4uc29jaWFscyBpbWd7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGZpbGw6IHdoaXRlO1xcbn1cXG5cXG4uc29jaWFscyBsaXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuYTp2aXNpdGVkLDphY3RpdmV7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1lbnV7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LG1pbm1heCgyMDBweCwgMWZyKSk7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLm1lbnUgPiBkaXZ7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjExLCAyMTEsIDIxMSwgMC45MjQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogdGhpY2sgZG91YmxlIHZhcigtLW1haW4tcmVkKTtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuXFxuLml0ZW0tbWVudXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLml0ZW0tbWVudSA+IGRpdntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaXRlbS1tZW51OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xcbn1cXG4uaXRlbS1tZW51ID4gZGl2ID4gaW1ne1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG5wOmZpcnN0LWxpbmUge1xcbiAgICBsaW5lLWhlaWdodDowICFpbXBvcnRhbnQ7XFxufVxcblxcblxcbmZvb3RlcntcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjQxNyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5mdW5jdGlvbiBhYm91dENvbXBvbmVudCgpe1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGNvbnN0IGFib3V0Q29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhYm91dENvbXBvbmVudC5jbGFzc0xpc3QuYWRkKFwiYWJvdXRcIik7XG4gICAgXG4gICAgbGV0IG1hcGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1hcGEuaW5uZXJIVE1MID0gYDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMTQ5NTIuNzUxMDEzNTE4MzI3ITJkLTEwMy40Mzc1MjA0MTI4NDE3NCEzZDIwLjQ1NzQ4MDMwMDAwMDAzITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg4NDJmNTE5NzUxNTRiZTJiJTNBMHhhNGI1YWZmMTJhMDNjMmI2ITJzVGFjb3MlMjBBcmFuZGFzITVlMCEzbTIhMXNlcy00MTkhMnNteCE0djE2ODM1NjE5ODY5NzEhNW0yITFzZXMtNDE5ITJzbXhcIiB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjQ1MFwiIHN0eWxlPVwiYm9yZGVyOjA7XCIgYWxsb3dmdWxsc2NyZWVuPVwiXCIgbG9hZGluZz1cImxhenlcIiByZWZlcnJlcnBvbGljeT1cIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCI+PC9pZnJhbWU+YDtcbiAgICBtYXBhID0gbWFwYS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBjb25zdCBpbmZvU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGl0bGVDb3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlQ29weS5pbm5lclRleHQgPSBcIldobyBhcmUgd2U/XCI7XG4gICAgY29uc3QgcGFyYWdDb3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGFyYWdDb3B5LmlubmVyVGV4dCA9IGBcbiAgICBXZWxjb21lIHRvIG91ciB0YWNvcyByZXN0YXVyYW50LCBcbiAgICBcbiAgICBPdXIgdGFjb3MgYXJlIGEgdHJ1ZSB3b3JrIG9mIGFydCwgbWFkZSB3aXRoIHlvdXIgY2hvaWNlIG9mIGp1aWN5IG1lYXQgb3IgZnJlc2ggdmVnZXRhYmxlcywgYW5kIHRvcHBlZCB3aXRoIGEgdmFyaWV0eSBvZiBmbGF2b3JmdWwgYW5kIGNvbG9yZnVsIHRvcHBpbmdzLiBGcm9tIHRoZSBjbGFzc2ljIGNhcm5lIGFzYWRhIHRvIHRoZSBzcGljeSBhbmQgdGFuZ3kgYWwgcGFzdG9yLCBvdXIgdGFjb3MgYXJlIHN1cmUgdG8gc2F0aXNmeSB5b3VyIGNyYXZpbmdzIGFuZCBsZWF2ZSB5b3Ugd2FudGluZyBtb3JlLlxuICAgIFxuICAgIENvbWUgdmlzaXQgdXMgdG9kYXkgYW5kIGV4cGVyaWVuY2UgdGhlIGpveSBvZiBhdXRoZW50aWMgTWV4aWNhbiBjdWlzaW5lLiBPdXIgZnJpZW5kbHkgc3RhZmYgaXMgcmVhZHkgdG8gd2VsY29tZSB5b3Ugd2l0aCBvcGVuIGFybXMgYW5kIHNob3cgeW91IHdoYXQgbWFrZXMgb3VyIHJlc3RhdXJhbnQgc28gd29uZGVyZnVsLiBXZSBjYW4ndCB3YWl0IHRvIHNlcnZlIHlvdSFgO1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb250YWN0VGl0bGUuaW5uZXJUZXh0ID0gXCJDb250YWN0IFVzXCI7XG4gICAgY29uc3Qgc29jaWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBzb2NpYWxzLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWxzXCIpO1xuICAgIFxuXG4gICAgY29uc3QgdHdpdHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICB0d2l0dGVyLmlubmVySFRNTCA9IFwiPGEgaHJlZj0nIyc+PGkgY2xhc3M9J2ZhLWJyYW5kcyBmYS10d2l0dGVyIGZhLXhsJz48L2k+PC9hPlwiO1xuXG4gICAgY29uc3QgZmFjZWJvb2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgZmFjZWJvb2suaW5uZXJIVE1MID0gXCI8YSBocmVmPScjJz48aSBjbGFzcz0nZmEtYnJhbmRzIGZhLWZhY2Vib29rIGZhLXhsJz48L2k+PC9hPlwiO1xuICAgIFxuXG4gICAgY29uc3QgdGlrdG9rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHRpa3Rvay5pbm5lckhUTUwgPSBcIjxhIGhyZWY9JyMnPjxpIGNsYXNzPSdmYS1icmFuZHMgZmEtdGlrdG9rIGZhLXhsJz48L2k+PC9hPlwiO1xuXG4gICAgY29uc3QgeW91dHViZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICB5b3V0dWJlLmlubmVySFRNTCA9IFwiPGEgaHJlZj0nIyc+PGkgY2xhc3M9J2ZhLWJyYW5kcyBmYS15b3V0dWJlIGZhLXhsJz48L2k+PC9hPlwiO1xuXG4gICAgY29uc3Qgd2hhdHNhcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgd2hhdHNhcHAuaW5uZXJIVE1MID0gXCI8YSBocmVmPScjJz48aSBjbGFzcz0nZmEtYnJhbmRzIGZhLXdoYXRzYXBwIGZhLXhsJz48L2k+PC9hPlwiO1xuXG5cbiAgICBzb2NpYWxzLmFwcGVuZENoaWxkKHR3aXR0ZXIpO1xuICAgIHNvY2lhbHMuYXBwZW5kQ2hpbGQoZmFjZWJvb2spO1xuICAgIHNvY2lhbHMuYXBwZW5kQ2hpbGQodGlrdG9rKTtcbiAgICBzb2NpYWxzLmFwcGVuZENoaWxkKHlvdXR1YmUpO1xuICAgIHNvY2lhbHMuYXBwZW5kQ2hpbGQod2hhdHNhcHApO1xuXG5cbiAgICBjb3B5LmFwcGVuZENoaWxkKHRpdGxlQ29weSk7XG4gICAgY29weS5hcHBlbmRDaGlsZChwYXJhZ0NvcHkpO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKHNvY2lhbHMpO1xuICAgIGluZm9TZWN0aW9uLmFwcGVuZENoaWxkKGNvcHkpO1xuICAgIGluZm9TZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuICAgIGluZm9TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICAgIGFib3V0Q29tcG9uZW50LmFwcGVuZENoaWxkKG1hcGEpO1xuICAgIGFib3V0Q29tcG9uZW50LmFwcGVuZENoaWxkKGluZm9TZWN0aW9uKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGFib3V0Q29tcG9uZW50KTtcbn1cblxuZXhwb3J0IHthYm91dENvbXBvbmVudH07IiwiZnVuY3Rpb24gaW5pdGlhbFNldFVwKCl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IGxpc3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgY29uc3QgaXRlbU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgaXRlbUxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgaXRlbUFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGxpbmtNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbGlua01lbnUuc2V0QXR0cmlidXRlKFwiaWRcIixcImxpbmtNZW51XCIpO1xuICAgIGNvbnN0IGhlYWRpbmdNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGNvbnN0IGxpbmtBYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpbmtBYm91dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibGlua0Fib3V0XCIpO1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxpc3RIZWFkZXIpO1xuICAgIGxpc3RIZWFkZXIuYXBwZW5kQ2hpbGQoaXRlbU1lbnUpO1xuICAgIGxpc3RIZWFkZXIuYXBwZW5kQ2hpbGQoaXRlbUxvZ28pO1xuICAgIGxpc3RIZWFkZXIuYXBwZW5kQ2hpbGQoaXRlbUFib3V0KTtcbiAgICBpdGVtTWVudS5hcHBlbmRDaGlsZChsaW5rTWVudSk7XG4gICAgaXRlbUxvZ28uYXBwZW5kQ2hpbGQoaGVhZGluZ01lbnUpO1xuICAgIGl0ZW1BYm91dC5hcHBlbmRDaGlsZChsaW5rQWJvdXQpO1xuXG4gICAgbGlua01lbnUuaW5uZXJUZXh0ID0gXCJNZW51XCI7XG4gICAgaGVhZGluZ01lbnUuaW5uZXJUZXh0ID0gXCJUYWNvc1wiO1xuICAgIGxpbmtBYm91dC5pbm5lclRleHQgPSBcIkFib3V0XCI7XG4gICAgZm9vdGVyLmlubmVySFRNTCA9IFwiPHNwYW4+SGkgdGhlcmUsIE1hZGUgYnkgR0JSTEhaKGdhYnIxZWwxKTwvc3Bhbj48YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vZ2FicjFlbDEnPjxpIGNsYXNzPSdmYS1icmFuZHMgZmEtZ2l0aHViJz48L2k+PC9hPlwiXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbmZvKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmV4cG9ydCB7aW5pdGlhbFNldFVwfTsiLCJpbXBvcnQgdGFjb3NCaXN0ZWMgZnJvbSAnLi9pbWFnZXMvbWVudS90YWNvcy1iaXN0ZWMuanBnJztcbmltcG9ydCB0YWNvc0Nob3Jpem8gZnJvbSAnLi9pbWFnZXMvbWVudS90YWNvcy1jaG9yaXpvLmpwZyc7XG5pbXBvcnQgdGFjb3NMZW5ndWEgZnJvbSAnLi9pbWFnZXMvbWVudS90YWNvcy1sZW5ndWEuanBnJztcbmltcG9ydCB0YWNvc1Bhc3RvciBmcm9tICcuL2ltYWdlcy9tZW51L3RhY29zLXBhc3Rvci5qcGcnO1xuaW1wb3J0IHRhY29zU3VhZGVybyBmcm9tICcuL2ltYWdlcy9tZW51L3RhY29zLXN1YWRlcm8uanBnJztcbmltcG9ydCBob3JjaGF0YSBmcm9tICcuL2ltYWdlcy9tZW51L2hvcmNoYXRhLmpwZyc7XG5pbXBvcnQgamFtYWljYSBmcm9tICcuL2ltYWdlcy9tZW51L2phbWFpY2EuanBnJztcbmltcG9ydCBhcnJvekNvbkxlY2hlIGZyb20gJy4vaW1hZ2VzL21lbnUvYXJyb3otY29uLWxlY2hlLmpwZyc7XG5pbXBvcnQgamVyaWNhbGxhIGZyb20gJy4vaW1hZ2VzL21lbnUvamVyaWNhbGxhLmpwZyc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5mdW5jdGlvbiBtZW51Q29tcG9uZW50KCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGNvbnN0IG1lbnVDb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVDb21wb25lbnQuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gICAgXG4gICAgY29uc3QgdGFjb3NMaXN0ID0gW1xuICAgIHtcIm5hbWVcIjpcIlRhY29zIGRlIEJpc3RlY1wiLFwicHJpY2VcIjoxLjAsXCJpbWFnZVVSTFwiOnRhY29zQmlzdGVjfSxcbiAgICB7XCJuYW1lXCI6XCJUYWNvcyBkZSBDaG9yaXpvXCIsXCJwcmljZVwiOjEuMCxcImltYWdlVVJMXCI6dGFjb3NDaG9yaXpvfSxcbiAgICB7XCJuYW1lXCI6XCJUYWNvcyBkZSBMZW5ndWFcIixcInByaWNlXCI6MS41LFwiaW1hZ2VVUkxcIjp0YWNvc0xlbmd1YX0sXG4gICAge1wibmFtZVwiOlwiVGFjb3MgZGUgUGFzdG9yXCIsXCJwcmljZVwiOjEuNSxcImltYWdlVVJMXCI6dGFjb3NQYXN0b3J9LFxuICAgIHtcIm5hbWVcIjpcIlRhY29zIGRlIFN1YWRlcm9cIixcInByaWNlXCI6MC45LFwiaW1hZ2VVUkxcIjp0YWNvc1N1YWRlcm99XG4gICAgXTtcbiAgICBcbiAgICBjb25zdCBkcmlua3NMaXN0ID0gW1xuICAgIHtcIm5hbWVcIjpcIkFndWEgZGUgaG9yY2hhdGFcIixcInByaWNlXCI6Mi4wLFwiaW1hZ2VVUkxcIjpob3JjaGF0YX0sXG4gICAge1wibmFtZVwiOlwiQWd1YSBkZSBqYW1haWNhXCIsXCJwcmljZVwiOjEuOCxcImltYWdlVVJMXCI6amFtYWljYX1cbiAgICBdO1xuXG4gICAgY29uc3QgZGVzc2VydHNMaXN0ID0gW1xuICAgIHtcIm5hbWVcIjpcIkFycm96IGNvbiBsZWNoZVwiLFwicHJpY2VcIjoxLjAsXCJpbWFnZVVSTFwiOmFycm96Q29uTGVjaGV9LFxuICAgIHtcIm5hbWVcIjpcIkplcmljYWxsYVwiLFwicHJpY2VcIjowLjcsXCJpbWFnZVVSTFwiOmplcmljYWxsYX1cbiAgICBdXG5cbiAgICBcbiAgICBjb25zdCB0YWNvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZHJpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkZXNzZXJ0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgXG4gICAgY29uc3QgdGFjb3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0YWNvc1RpdGxlLmlubmVyVGV4dCA9IFwiVGFjb3NcIjtcbiAgICBjb25zdCBkcmlua3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBkcmlua3NUaXRsZS5pbm5lclRleHQgPSBcIkRyaW5rc1wiO1xuICAgIGNvbnN0IGRlc3NlcnRzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgZGVzc2VydHNUaXRsZS5pbm5lclRleHQgPSBcIkRlc3NlcnRzXCJcblxuICAgIHRhY29zLmFwcGVuZENoaWxkKHRhY29zVGl0bGUpO1xuICAgIGRyaW5rcy5hcHBlbmRDaGlsZChkcmlua3NUaXRsZSk7XG4gICAgZGVzc2VydHMuYXBwZW5kQ2hpbGQoZGVzc2VydHNUaXRsZSk7XG5cbiAgICBsb2FkVG9DYXRlZ29yeSh0YWNvcywgdGFjb3NMaXN0KTtcbiAgICBsb2FkVG9DYXRlZ29yeShkcmlua3MsZHJpbmtzTGlzdCk7XG4gICAgbG9hZFRvQ2F0ZWdvcnkoZGVzc2VydHMsIGRlc3NlcnRzTGlzdCk7XG5cbiAgICBtZW51Q29tcG9uZW50LmFwcGVuZENoaWxkKHRhY29zKTtcbiAgICBtZW51Q29tcG9uZW50LmFwcGVuZENoaWxkKGRyaW5rcyk7XG4gICAgbWVudUNvbXBvbmVudC5hcHBlbmRDaGlsZChkZXNzZXJ0cyk7XG5cblxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudUNvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRUb0NhdGVnb3J5KGNhdGVnb3J5LCBsaXN0SXRlbXMpe1xuICAgIGxpc3RJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgaHRtbCA9IFxuICAgICAgICBgPGRpdj48aDI+JHtlbGVtZW50Lm5hbWV9PC9oMj48L2Rpdj5cbiAgICAgICAgPGRpdj48aW1nIHNyYz0ke2VsZW1lbnQuaW1hZ2VVUkx9PjwvZGl2PlxuICAgICAgICA8ZGl2PiA8cD4kJHtlbGVtZW50LnByaWNlfTwvcD48L2Rpdj5gO1xuICAgICAgICBpdGVtLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcIml0ZW0tbWVudVwiKTtcbiAgICAgICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfSk7XG59XG5cblxuXG5cbmV4cG9ydCB7bWVudUNvbXBvbmVudH1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vY29uc29sZS5sb2coXCJob2wgXCIpO1xuaW1wb3J0IHsgaW5pdGlhbFNldFVwIH0gZnJvbSBcIi4vaW5pdGlhbC1wYWdlXCI7XG5pbXBvcnQgeyBtZW51Q29tcG9uZW50IH0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHsgYWJvdXRDb21wb25lbnQgfSBmcm9tIFwiLi9hYm91dFwiO1xuXG5pbml0aWFsU2V0VXAoKTtcbm1lbnVDb21wb25lbnQoKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlua01lbnVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsbWVudUNvbXBvbmVudCk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpbmtBYm91dFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixhYm91dENvbXBvbmVudCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=