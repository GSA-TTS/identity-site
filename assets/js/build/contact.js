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

/***/ "./assets/js/contact.js":
/*!******************************!*\
  !*** ./assets/js/contact.js ***!
  \******************************/
/***/ (function() {

eval("function verifyCanSubmitEntry() {\n  const debug = Array.prototype.slice.apply(document.getElementsByName('debug'))[0];\n\n  if (debug && +debug.value) {\n    return;\n  }\n\n  const form = document.getElementById('contact-us-form');\n  const error = document.getElementById('captcha-error-message');\n  const piiError = document.getElementById('pii-warning');\n  const piiErrorText = document.getElementById('pii-warning-message');\n  const descriptionInput = document.getElementById('description');\n  let alreadyAttemptedSubmission = false;\n  form.addEventListener('submit', event => {\n    const captcha = document.getElementById('g-recaptcha-response');\n\n    if (!captcha || !captcha.value) {\n      event.preventDefault();\n      error.textContent = error.dataset.error;\n      error.classList.remove('display-none');\n    } else if (descriptionInput.value.match(/\\d{4,}/) && !alreadyAttemptedSubmission) {\n      alreadyAttemptedSubmission = true;\n      event.preventDefault();\n      piiError.classList.remove('display-none');\n      piiErrorText.textContent = piiErrorText.dataset.error;\n    }\n  });\n  descriptionInput.addEventListener('change', _ => {\n    alreadyAttemptedSubmission = false;\n\n    if (piiErrorText.textContent) {\n      piiError.classList.add('display-none');\n      piiErrorText.textContent = '';\n    }\n  });\n}\n\ndocument.addEventListener('DOMContentLoaded', verifyCanSubmitEntry);\n\nwindow.clearCaptchaError = () => {\n  const error = document.getElementById('captcha-error-message');\n\n  if (error.textContent) {\n    error.textContent = '';\n    error.classList.add('display-none');\n  }\n};\n\n//# sourceURL=webpack://identity-site/./assets/js/contact.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/js/contact.js"]();
/******/ 	
/******/ })()
;