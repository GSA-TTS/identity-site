/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/touchpoints_translations.js":
/*!***********************************************!*\
  !*** ./assets/js/touchpoints_translations.js ***!
  \***********************************************/
/***/ (function() {

eval("var yesButton = document.querySelector('input[type=submit][value=yes]');\nvar noButton = document.querySelector('input[type=submit][value=no]');\nvar touchpointsRoot = document.getElementById('touchpoints_feedback');\n\nif (touchpointsRoot) {\n  var label = touchpointsRoot.querySelector('label');\n  yesButton.value = touchpointsRoot.dataset.yes;\n  noButton.value = touchpointsRoot.dataset.no;\n\n  if (label) {\n    label.innerText = touchpointsRoot.dataset.question;\n  }\n}\n\n//# sourceURL=webpack://identity-site/./assets/js/touchpoints_translations.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/js/touchpoints_translations.js"]();
/******/ 	
/******/ })()
;