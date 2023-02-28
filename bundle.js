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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\nconst taskList = document.getElementById('task-list');\n\nfunction loadTasks() {\n  const tasks = JSON.parse(localStorage.getItem('tasks'));\n  tasks.forEach((task) => {\n    taskList.appendChild((0,_tasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(task));\n  });\n}\n\nconst inputField = document.getElementById('input-field');\nconst form = document.getElementById('input-container');\n\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  taskList.appendChild((0,_tasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(inputField.value));\n  inputField.value = '';\n});\n// localStorage.clear();\nif (localStorage.length > 0) {\n  window.onload = loadTasks();\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTask)\n/* harmony export */ });\n/* harmony import */ var _assets_images_icon_cross_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/icon-cross.svg */ \"./src/assets/images/icon-cross.svg\");\n\n\nconst storageArray = [];\n\nfunction removeTask(target) {\n  const label = target.previousSibling;\n  storageArray.splice(storageArray.indexOf(label.textContent), 1);\n  localStorage.setItem('tasks', JSON.stringify(storageArray));\n  target.closest('.task').remove();\n}\nfunction storeTask(task) {\n  storageArray.push(task);\n  localStorage.setItem('tasks', JSON.stringify(storageArray));\n}\n\nfunction createTask(task) {\n  const container = document.createElement('li');\n  container.classList.add('task');\n\n  const checkBox = document.createElement('input');\n  checkBox.classList.add('check-box');\n  checkBox.type = 'checkbox';\n\n  const description = document.createElement('label');\n  description.classList.add('checkbox-label');\n  description.textContent = task;\n  const deleteIcon = document.createElement('img');\n  deleteIcon.classList.add('delete-icon');\n  deleteIcon.src = _assets_images_icon_cross_svg__WEBPACK_IMPORTED_MODULE_0__;\n  deleteIcon.alt = 'A cross image that will delete your task when clicked';\n  deleteIcon.addEventListener('click', (e) => {\n    removeTask(e.target);\n  });\n\n  container.append(checkBox, description, deleteIcon);\n  storeTask(task);\n  return container;\n}\n\n\n//# sourceURL=webpack:///./src/tasks.js?");

/***/ }),

/***/ "./src/assets/images/icon-cross.svg":
/*!******************************************!*\
  !*** ./src/assets/images/icon-cross.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/6ee81d30b75cab19d6f7.svg\";\n\n//# sourceURL=webpack:///./src/assets/images/icon-cross.svg?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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