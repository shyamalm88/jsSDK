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

/***/ "./src/MouseEventSDK.js":
/*!******************************!*\
  !*** ./src/MouseEventSDK.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n// MouseEventSDK.js\nvar MouseEventSDK = /*#__PURE__*/function () {\n  function MouseEventSDK() {\n    _classCallCheck(this, MouseEventSDK);\n    this.mouseEvents = [];\n    this.isCollecting = false;\n\n    // Bind the methods to ensure the correct 'this' context\n    this.start = this.start.bind(this);\n    this.stop = this.stop.bind(this);\n    this.getData = this.getData.bind(this);\n    this._collectMouseEvent = this._collectMouseEvent.bind(this);\n  }\n  return _createClass(MouseEventSDK, [{\n    key: \"start\",\n    value: function start() {\n      if (this.isCollecting) return;\n      this.isCollecting = true;\n\n      // Add event listeners for mouse events\n      window.addEventListener(\"mousemove\", this._collectMouseEvent);\n      window.addEventListener(\"mousedown\", this._collectMouseEvent);\n      window.addEventListener(\"mouseup\", this._collectMouseEvent);\n      window.addEventListener(\"click\", this._collectMouseEvent);\n      window.addEventListener(\"dblclick\", this._collectMouseEvent);\n      window.addEventListener(\"contextmenu\", this._collectMouseEvent);\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      if (!this.isCollecting) return;\n      this.isCollecting = false;\n\n      // Remove event listeners for mouse events\n      window.removeEventListener(\"mousemove\", this._collectMouseEvent);\n      window.removeEventListener(\"mousedown\", this._collectMouseEvent);\n      window.removeEventListener(\"mouseup\", this._collectMouseEvent);\n      window.removeEventListener(\"click\", this._collectMouseEvent);\n      window.removeEventListener(\"dblclick\", this._collectMouseEvent);\n      window.removeEventListener(\"contextmenu\", this._collectMouseEvent);\n    }\n  }, {\n    key: \"getData\",\n    value: function getData() {\n      return this.mouseEvents;\n    }\n  }, {\n    key: \"_collectMouseEvent\",\n    value: function _collectMouseEvent(event) {\n      var type = event.type,\n        clientX = event.clientX,\n        clientY = event.clientY,\n        timeStamp = event.timeStamp;\n      this.mouseEvents.push({\n        type: type,\n        clientX: clientX,\n        clientY: clientY,\n        timeStamp: timeStamp\n      });\n    }\n  }]);\n}(); // Export the SDK\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MouseEventSDK);\n\n//# sourceURL=webpack://jssdk/./src/MouseEventSDK.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MouseEventSDK__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MouseEventSDK */ \"./src/MouseEventSDK.js\");\n\nvar sdk = new _MouseEventSDK__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar textarea = document.getElementById(\"text-area\");\ndocument.getElementById(\"start-btn\").addEventListener(\"click\", sdk.start);\ndocument.getElementById(\"stop-btn\").addEventListener(\"click\", sdk.stop);\ndocument.getElementById(\"get-data-btn\").addEventListener(\"click\", function () {\n  textarea.value = JSON.stringify(sdk.getData());\n  console.log(sdk.getData());\n});\n\n//# sourceURL=webpack://jssdk/./src/script.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;