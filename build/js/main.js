/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_scroll_width__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/scroll-width */ \"./js/utils/scroll-width.js\");\n/* harmony import */ var _utils_ios_vh_fix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/ios-vh-fix */ \"./js/utils/ios-vh-fix.js\");\n/* harmony import */ var _modules_ticker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ticker */ \"./js/modules/ticker.js\");\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  Object(_utils_scroll_width__WEBPACK_IMPORTED_MODULE_0__[\"setScrollWidth\"])();\n  Object(_utils_ios_vh_fix__WEBPACK_IMPORTED_MODULE_1__[\"iosVhFix\"])();\n});\n\n// в load следует добавить скрипты, не участвующие в работе первого экрана\nwindow.addEventListener('load', () => {\n  Object(_modules_ticker__WEBPACK_IMPORTED_MODULE_2__[\"ticker\"])();\n});\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/modules/ticker.js":
/*!******************************!*\
  !*** ./js/modules/ticker.js ***!
  \******************************/
/*! exports provided: ticker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ticker\", function() { return ticker; });\nconst ticker = () => {\n  const tickerLeft = document.querySelectorAll('.ticker-left');\n  const tickerRight = document.querySelector('.ticker-right');\n  const cursor = document.querySelector('.cursor');\n\n  // Scroll\n  window.onscroll = () => {\n    let pos = window.scrollY - 800;\n    tickerRight.style.right = `${pos}px`;\n    tickerLeft.forEach(item => {\n      item.style.left = `${pos}px`;\n    });\n  };\n\n  // Cursor\n  document.addEventListener('mousemove', e => {\n    cursor.style.left = e.clientX + 'px';\n    cursor.style.top = e.clientY + 'px';\n  });\n};\n\n\n//# sourceURL=webpack:///./js/modules/ticker.js?");

/***/ }),

/***/ "./js/utils/ios-checker.js":
/*!*********************************!*\
  !*** ./js/utils/ios-checker.js ***!
  \*********************************/
/*! exports provided: iosChecker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"iosChecker\", function() { return iosChecker; });\nconst iosChecker = () => {\n  return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform)\n  // iPad on iOS 13 detection\n  || navigator.userAgent.includes('Mac') && 'ontouchend' in document;\n};\n\n//# sourceURL=webpack:///./js/utils/ios-checker.js?");

/***/ }),

/***/ "./js/utils/ios-vh-fix.js":
/*!********************************!*\
  !*** ./js/utils/ios-vh-fix.js ***!
  \********************************/
/*! exports provided: iosVhFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"iosVhFix\", function() { return iosVhFix; });\n/* harmony import */ var _ios_checker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ios-checker */ \"./js/utils/ios-checker.js\");\n\nconst iosVhFix = () => {\n  if (!(!!window.MSInputMethodContext && !!document.documentMode)) {\n    if (Object(_ios_checker__WEBPACK_IMPORTED_MODULE_0__[\"iosChecker\"])()) {\n      let vh = window.innerHeight * 0.01;\n      document.documentElement.style.setProperty('--vh', `${vh}px`);\n      window.addEventListener('resize', function () {\n        vh = window.innerHeight * 0.01;\n        document.documentElement.style.setProperty('--vh', `${vh}px`);\n      });\n    }\n  }\n};\n\n\n//# sourceURL=webpack:///./js/utils/ios-vh-fix.js?");

/***/ }),

/***/ "./js/utils/scroll-width.js":
/*!**********************************!*\
  !*** ./js/utils/scroll-width.js ***!
  \**********************************/
/*! exports provided: setScrollWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setScrollWidth\", function() { return setScrollWidth; });\nconst setScrollWidth = () => {\n  return document.documentElement.style.setProperty('--scroll-width', `${getScrollbarWidth()}px`);\n};\nfunction getScrollbarWidth() {\n  const outer = document.createElement('div');\n  outer.style.visibility = 'hidden';\n  outer.style.width = '100px';\n  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps\n\n  document.body.appendChild(outer);\n  const widthNoScroll = outer.offsetWidth;\n  outer.style.overflow = 'scroll';\n\n  // add innerdiv\n  const inner = document.createElement('div');\n  inner.style.width = '100%';\n  outer.appendChild(inner);\n  const widthWithScroll = inner.offsetWidth;\n\n  // remove divs\n  outer.parentNode.removeChild(outer);\n  return widthNoScroll - widthWithScroll;\n}\n\n\n//# sourceURL=webpack:///./js/utils/scroll-width.js?");

/***/ })

/******/ });