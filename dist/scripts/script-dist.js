/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/script.js":
/*!*******************************!*\
  !*** ./src/scripts/script.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/scripts/storage.js");

new Vue({
  el: '#app',
  data: {
    storage: new _storage__WEBPACK_IMPORTED_MODULE_0__.Storage(),
    deletePageDisplay: 'none',
    newTaskDisplay: 'none',
    helpDisplay: 'none',
    line: 'none',
    taskName: '',
    taskDesc: '',
    taskDay: '',
    taskMonth: '',
    taskYear: '',
    taskNotifs: '',
    taskColor: '#000000',
    taskDone: false,
    tasks: []
  },
  created: function created() {
    this.tasks = this.storage.get();
  },
  methods: {
    addNewTask: function addNewTask() {
      this.tasks.push({
        taskName: this.taskName,
        taskDesc: this.taskDesc,
        taskDay: this.taskDay + 'th',
        taskMonth: this.taskMonth,
        taskYear: this.taskYear,
        taskNotifs: this.taskNotifs,
        taskColor: this.taskColor,
        taskTime: this.writeCurrentTime(),
        taskDone: false
      });
      localStorage.setItem('task-storage', JSON.stringify(this.tasks));
      this.newTaskDisplay = 'none';
    },
    deleteTask: function deleteTask(index) {
      if (this.tasks.taskDone === true) {
        this.tasks.splice(index, 1);
        this.storage.add(this.tasks);
        this.deletePageDisplay = 'none';
      } else {
        alert('This task isn`t done');
      }
    },
    showDeletePageDisplay: function showDeletePageDisplay(index) {
      this.taskIndex = index;
      this.deletePageDisplay = 'flex';
      this.tasks.taskDone = this.tasks[index].taskDone;
      this.tasks.taskColor = this.tasks[index].taskColor;
      localStorage.setItem('task-storage', JSON.stringify(this.tasks));
      this.fillTaskInfo(index);
      this.lineThrough();
    },
    fillTaskInfo: function fillTaskInfo(index) {
      this.tasks.taskName = this.tasks[index].taskName;
      this.tasks.taskTime = this.tasks[index].taskTime;
      this.tasks.taskDate = this.tasks[index].taskDay + ' ' + this.tasks[index].taskMonth;
      this.tasks.taskDesc = this.tasks[index].taskDesc;
    },
    completeTask: function completeTask(index) {
      this.tasks[index].taskDone = true;
      this.tasks.taskDone = this.tasks[index].taskDone;
      localStorage.setItem('task-storage', JSON.stringify(this.tasks));
      this.lineThrough();
    },
    lineThrough: function lineThrough() {
      if (this.tasks[this.taskIndex].taskDone === true) {
        this.line = 'line-through';
      } else {
        this.line = 'none';
      }
    },
    writeStrHours: function writeStrHours() {
      var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var am = arguments.length > 1 ? arguments[1] : undefined;
      var pm = arguments.length > 2 ? arguments[2] : undefined;

      if (count >= 0 && count < 12) {
        return am;
      }

      return pm;
    },
    writeCurrentTime: function writeCurrentTime() {
      var date = new Date(),
          hour = date.getHours();
      var strHour = this.writeStrHours(hour, 'am', 'pm');

      if (hour === 0) {
        hour = 12;
      }

      if (hour > 12) {
        hour = hour - 12;
      }

      return hour + ' ' + strHour;
    },
    hideDeletePageDisplay: function hideDeletePageDisplay() {
      this.deletePageDisplay = 'none';
    },
    showNewTaskDisplay: function showNewTaskDisplay() {
      this.newTaskDisplay = 'flex';
    },
    hideNewTaskDisplay: function hideNewTaskDisplay() {
      this.newTaskDisplay = 'none';
    },
    showHelpDisplay: function showHelpDisplay() {
      this.helpDisplay = 'flex';
    },
    closeHelpDisplay: function closeHelpDisplay() {
      this.helpDisplay = 'none';
    }
  }
});

/***/ }),

/***/ "./src/scripts/storage.js":
/*!********************************!*\
  !*** ./src/scripts/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Storage": () => (/* binding */ Storage)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Storage = /*#__PURE__*/function () {
  function Storage() {
    _classCallCheck(this, Storage);
  }

  _createClass(Storage, [{
    key: "get",
    value: function get() {
      return JSON.parse(localStorage.getItem('task-storage') || '[]');
    }
  }, {
    key: "add",
    value: function add(tasks) {
      localStorage.setItem('task-storage', JSON.stringify(tasks));
    }
  }]);

  return Storage;
}();

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/scripts/script-dist": 0,
/******/ 			"dist/styles/style": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknewVue"] = self["webpackChunknewVue"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/styles/style"], () => (__webpack_require__("./src/scripts/script.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/styles/style"], () => (__webpack_require__("./src/styles/style.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;