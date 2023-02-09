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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_scroll_width__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/scroll-width */ \"./js/utils/scroll-width.js\");\n/* harmony import */ var _utils_ios_vh_fix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/ios-vh-fix */ \"./js/utils/ios-vh-fix.js\");\n/* harmony import */ var _modules_powers_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/powers-slider */ \"./js/modules/powers-slider.js\");\n/* harmony import */ var _modules_ticker_1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/ticker-1 */ \"./js/modules/ticker-1.js\");\n/* harmony import */ var _modules_ticker_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/ticker-2 */ \"./js/modules/ticker-2.js\");\n/* harmony import */ var _modules_ticker_3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/ticker-3 */ \"./js/modules/ticker-3.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/modal */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu */ \"./js/modules/menu.js\");\n\n\n\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  Object(_utils_scroll_width__WEBPACK_IMPORTED_MODULE_0__[\"setScrollWidth\"])();\n  Object(_utils_ios_vh_fix__WEBPACK_IMPORTED_MODULE_1__[\"iosVhFix\"])();\n});\n\n// в load следует добавить скрипты, не участвующие в работе первого экрана\nwindow.addEventListener('load', () => {\n  // powersSlider();\n  // ticker1();\n  // ticker2();\n  // ticker3();\n  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_6__[\"modal\"])();\n  Object(_modules_menu__WEBPACK_IMPORTED_MODULE_7__[\"menu\"])();\n});\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/modules/menu.js":
/*!****************************!*\
  !*** ./js/modules/menu.js ***!
  \****************************/
/*! exports provided: menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menu\", function() { return menu; });\nconst menu = () => {\n  const menu = document.querySelector('.menu');\n  const menuClose = document.querySelector('.menu__close');\n  const menuOpen = document.querySelectorAll('.menu__open');\n  const html = document.querySelector(\"html\");\n  menuOpen.forEach(item => {\n    item.addEventListener('click', () => {\n      menu.classList.add('open');\n      html.classList.add('open');\n    });\n  });\n  menuClose.addEventListener('click', () => {\n    menu.classList.remove('open');\n    html.classList.add('open');\n  });\n};\n\n\n//# sourceURL=webpack:///./js/modules/menu.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! exports provided: modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modal\", function() { return modal; });\nconst modal = () => {\n  const modal = document.querySelector('.modal');\n  const modalClose = document.querySelector('.modal__close');\n  const modalOpen = document.querySelectorAll('.modal__open');\n  const html = document.querySelector(\"html\");\n  modalOpen.forEach(item => {\n    item.addEventListener('click', () => {\n      modal.classList.add('open');\n      html.classList.add('open');\n    });\n  });\n  modalClose.addEventListener('click', () => {\n    modal.classList.remove('open');\n    html.classList.add('open');\n  });\n};\n\n\n//# sourceURL=webpack:///./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/powers-slider.js":
/*!*************************************!*\
  !*** ./js/modules/powers-slider.js ***!
  \*************************************/
/*! exports provided: powersSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"powersSlider\", function() { return powersSlider; });\nfunction powersSlider() {\n  const swiper = new Swiper('.powers__slider', {\n    loop: true,\n    speed: 1500,\n    slidesPerView: '2',\n    autoplay: {\n      delay: 3000,\n      disableOnInteraction: false\n    },\n    navigation: {\n      nextEl: '.powers__btn--next',\n      prevEl: '.powers__btn--prev'\n    }\n  });\n}\n\n\n//# sourceURL=webpack:///./js/modules/powers-slider.js?");

/***/ }),

/***/ "./js/modules/ticker-1.js":
/*!********************************!*\
  !*** ./js/modules/ticker-1.js ***!
  \********************************/
/*! exports provided: ticker1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ticker1\", function() { return ticker1; });\nconst ticker1 = () => {\n  const page = document.querySelector('.page');\n  const cursor = document.querySelector('.cursor');\n  const tickerWrapper = document.querySelector('#wrapper_1');\n  const ticker = document.querySelector('#ticker_1');\n  let list;\n  const speed = 1;\n  const width = ticker.offsetWidth;\n  let x = 0;\n  let x2 = width;\n  function clone() {\n    list = ticker.cloneNode(true);\n    tickerWrapper.appendChild(list);\n    list.style.transform = `translateX(${width}px)`;\n  }\n  function moveFirst() {\n    x -= speed;\n    if (width >= Math.abs(x)) {\n      ticker.style.transform = `translateX(${x}px)`;\n    } else {\n      x = width;\n    }\n  }\n  function moveSecond() {\n    x2 -= speed;\n    if (list.offsetWidth >= Math.abs(x2)) {\n      list.style.transform = `translateX(${x2}px)`;\n    } else {\n      x2 = width;\n    }\n  }\n  document.addEventListener('wheel', () => {\n    let pos = window.scrollY - page.scrollHeight;\n    ticker.style.left = `${pos}px`;\n    list.style.left = `${pos}px`;\n  });\n  document.addEventListener('mousemove', e => {\n    cursor.style.left = e.clientX + 'px';\n    cursor.style.top = e.clientY + 'px';\n  });\n  clone();\n  setInterval(moveFirst, 20);\n  setInterval(moveSecond, 20);\n};\n\n\n//# sourceURL=webpack:///./js/modules/ticker-1.js?");

/***/ }),

/***/ "./js/modules/ticker-2.js":
/*!********************************!*\
  !*** ./js/modules/ticker-2.js ***!
  \********************************/
/*! exports provided: ticker2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ticker2\", function() { return ticker2; });\nconst ticker2 = () => {\n  const page = document.querySelector('.page');\n  const cursor = document.querySelector('.cursor');\n  const tickerWrapper = document.querySelector('#wrapper_2');\n  const ticker = document.querySelector('#ticker_2');\n  let list;\n  const speed = 1;\n  const width = ticker.offsetWidth;\n  let x = 0;\n  let x2 = width;\n  function clone() {\n    list = ticker.cloneNode(true);\n    tickerWrapper.appendChild(list);\n    list.style.transform = `translateX(${-width}px)`;\n  }\n  function moveFirst() {\n    x -= speed;\n    if (width >= Math.abs(x)) {\n      ticker.style.transform = `translateX(${-x}px)`;\n    } else {\n      x = width;\n    }\n  }\n  function moveSecond() {\n    x2 -= speed;\n    if (list.offsetWidth >= Math.abs(x2)) {\n      list.style.transform = `translateX(${-x2}px)`;\n    } else {\n      x2 = width;\n    }\n  }\n  document.addEventListener('wheel', () => {\n    let pos = window.scrollY - page.scrollHeight;\n    ticker.style.right = `${pos}px`;\n    list.style.right = `${pos}px`;\n  });\n  document.addEventListener('mousemove', e => {\n    cursor.style.left = e.clientX + 'px';\n    cursor.style.top = e.clientY + 'px';\n  });\n  clone();\n  setInterval(moveFirst, 20);\n  setInterval(moveSecond, 20);\n};\n\n\n//# sourceURL=webpack:///./js/modules/ticker-2.js?");

/***/ }),

/***/ "./js/modules/ticker-3.js":
/*!********************************!*\
  !*** ./js/modules/ticker-3.js ***!
  \********************************/
/*! exports provided: ticker3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ticker3\", function() { return ticker3; });\nconst ticker3 = () => {\n  const page = document.querySelector('.page');\n  const cursor = document.querySelector('.cursor');\n  const tickerWrapper = document.querySelector('#wrapper_3');\n  const ticker = document.querySelector('#ticker_3');\n  let list;\n  const speed = 1;\n  const width = ticker.offsetWidth;\n  let x = 0;\n  let x2 = width;\n  function clone() {\n    list = ticker.cloneNode(true);\n    tickerWrapper.appendChild(list);\n    list.style.transform = `translateX(${width}px)`;\n  }\n  function moveFirst() {\n    x -= speed;\n    if (width >= Math.abs(x)) {\n      ticker.style.transform = `translateX(${x}px)`;\n    } else {\n      x = width;\n    }\n  }\n  function moveSecond() {\n    x2 -= speed;\n    if (list.offsetWidth >= Math.abs(x2)) {\n      list.style.transform = `translateX(${x2}px)`;\n    } else {\n      x2 = width;\n    }\n  }\n  document.addEventListener('wheel', () => {\n    let pos = window.scrollY - page.scrollHeight;\n    ticker.style.left = `${pos}px`;\n    list.style.left = `${pos}px`;\n  });\n  document.addEventListener('mousemove', e => {\n    cursor.style.left = e.clientX + 'px';\n    cursor.style.top = e.clientY + 'px';\n  });\n  clone();\n  setInterval(moveFirst, 20);\n  setInterval(moveSecond, 20);\n};\n\n\n//# sourceURL=webpack:///./js/modules/ticker-3.js?");

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