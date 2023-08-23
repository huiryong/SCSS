/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

eval("// const modalOpenButton = document.getElementById(\"modal-open\");\n// const modal = document.getElementsByClassName(\"modal\")[0];\n// const modalCloseButton = document.getElementById(\"modal-close\");\n\n// modalOpenButton.addEventListener(\"click\", function () {\n//   modal.style.display = \"block\";\n// });\n\n// modalCloseButton.addEventListener(\"click\", function () {\n//   modal.style.display = \"none\";\n// });\n\n// function test() {\n//   console.log(\"aaa\");\n// }\n\n// {\n//   function dialogOpen() {\n//     document.querySelector(\".jsModal\"), classList.add(\"isShow\");\n//   }\n//   document.querySelector(\".btn\").addEventListener(\"click\", dialogOpen);\n// }\n\n$(document).ready(function () {\n  $(\".jsButton\").on(\"click\", function () {\n    $(\".jsModal\").addClass(\"isShow\");\n  });\n\n  $(\".isModalClose\").on(\"click\", function () {\n    $(\".jsModal\").removeClass(\"isShow\");\n  });\n});\n\n\n//# sourceURL=webpack://20230703/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"]();
/******/ 	
/******/ })()
;