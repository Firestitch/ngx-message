(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@firestitch/message", [], factory);
	else if(typeof exports === 'object')
		exports["@firestitch/message"] = factory();
	else
		root["@firestitch/message"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/index.js??ref--5-1!../node_modules/ngx-toastr/toastr.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/* based on angular-toastr css https://github.com/Foxandxss/angular-toastr/blob/cb508fe6801d6b288d3afc525bb40fee1b101650/dist/angular-toastr.css */\n\n/* position */\n.toast-center-center {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-top-left {\n  top: 12px;\n  left: 12px;\n}\n.toast-top-right {\n  top: 12px;\n  right: 12px;\n}\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px;\n}\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px;\n}\n\n/* toast styles */\n.toast-title {\n  font-weight: bold;\n}\n.toast-message {\n  word-wrap: break-word;\n}\n.toast-message a,\n.toast-message label {\n  color: #FFFFFF;\n}\n.toast-message a:hover {\n  color: #CCCCCC;\n  text-decoration: none;\n}\n.toast-close-button {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-shadow: 0 1px 0 #ffffff;\n  /* opacity: 0.8; */\n}\n.toast-close-button:hover,\n.toast-close-button:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4;\n}\n/*Additional properties for button version\n iOS requires the button element instead of an anchor tag.\n If you want the anchor version, it requires `href=\"#\"`.*/\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n.toast-container {\n  pointer-events: none;\n  position: fixed;\n  z-index: 999999;\n}\n.toast-container * {\n  box-sizing: border-box;\n}\n.toast-container .toast {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  border-radius: 3px 3px 3px 3px;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  background-size: 24px;\n  box-shadow: 0 0 12px #999999;\n  color: #FFFFFF;\n}\n.toast-container .toast:hover {\n  box-shadow: 0 0 12px #000000;\n  opacity: 1;\n  cursor: pointer;\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/info-circle.svg */\n.toast-info {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'/%3E%3C/svg%3E\");\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/times-circle.svg */\n.toast-error {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'/%3E%3C/svg%3E\");\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/check.svg */\n.toast-success {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E\");\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/exclamation-triangle.svg */\n.toast-warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='576' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\");\n}\n.toast-container.toast-top-center .toast,\n.toast-container.toast-bottom-center .toast {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.toast-container.toast-top-full-width .toast,\n.toast-container.toast-bottom-full-width .toast {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.toast {\n  background-color: #030303;\n  pointer-events: auto;\n}\n.toast-success {\n  background-color: #51A351;\n}\n.toast-error {\n  background-color: #BD362F;\n}\n.toast-info {\n  background-color: #2F96B4;\n}\n.toast-warning {\n  background-color: #F89406;\n}\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000000;\n  opacity: 0.4;\n}\n/* Responsive Design */\n@media all and (max-width: 240px) {\n  .toast-container .toast.div {\n    padding: 8px 8px 8px 50px;\n    width: 11em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n@media all and (min-width: 241px) and (max-width: 480px) {\n  .toast-container .toast.div {\n    padding: 8px 8px 8px 50px;\n    width: 18em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n@media all and (min-width: 481px) and (max-width: 768px) {\n  .toast-container .toast.div {\n    padding: 15px 15px 15px 50px;\n    width: 25em;\n  }\n}\n", "", {"version":3,"sources":["/Users/Basters/dev/firestitch/fs-message/node_modules/ngx-toastr/toastr.css"],"names":[],"mappings":"AAAA,mJAAmJ;;AAEnJ,cAAc;AACd;EACE,SAAS;EACT,UAAU;EACV,iCAAiC;CAClC;AACD;EACE,OAAO;EACP,SAAS;EACT,YAAY;CACb;AACD;EACE,UAAU;EACV,SAAS;EACT,YAAY;CACb;AACD;EACE,OAAO;EACP,SAAS;EACT,YAAY;CACb;AACD;EACE,UAAU;EACV,SAAS;EACT,YAAY;CACb;AACD;EACE,UAAU;EACV,WAAW;CACZ;AACD;EACE,UAAU;EACV,YAAY;CACb;AACD;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,aAAa;EACb,WAAW;CACZ;;AAED,kBAAkB;AAClB;EACE,kBAAkB;CACnB;AACD;EACE,sBAAsB;CACvB;AACD;;EAEE,eAAe;CAChB;AACD;EACE,eAAe;EACf,sBAAsB;CACvB;AACD;EACE,mBAAmB;EACnB,cAAc;EACd,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,6BAA6B;EAC7B,mBAAmB;CACpB;AACD;;EAEE,eAAe;EACf,sBAAsB;EACtB,gBAAgB;EAChB,aAAa;CACd;AACD;;0DAE0D;AAC1D;EACE,WAAW;EACX,gBAAgB;EAChB,wBAAwB;EACxB,UAAU;CACX;AACD;EACE,qBAAqB;EACrB,gBAAgB;EAChB,gBAAgB;CACjB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,6BAA6B;EAC7B,aAAa;EACb,+BAA+B;EAC/B,iCAAiC;EACjC,6BAA6B;EAC7B,sBAAsB;EACtB,6BAA6B;EAC7B,eAAe;CAChB;AACD;EACE,6BAA6B;EAC7B,WAAW;EACX,gBAAgB;CACjB;AACD,kHAAkH;AAClH;EACE,slBAAslB;CACvlB;AACD,mHAAmH;AACnH;EACE,8jBAA8jB;CAC/jB;AACD,4GAA4G;AAC5G;EACE,ydAAyd;CAC1d;AACD,2HAA2H;AAC3H;EACE,uoBAAuoB;CACxoB;AACD;;EAEE,aAAa;EACb,kBAAkB;EAClB,mBAAmB;CACpB;AACD;;EAEE,WAAW;EACX,kBAAkB;EAClB,mBAAmB;CACpB;AACD;EACE,0BAA0B;EAC1B,qBAAqB;CACtB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,mBAAmB;EACnB,QAAQ;EACR,UAAU;EACV,YAAY;EACZ,0BAA0B;EAC1B,aAAa;CACd;AACD,uBAAuB;AACvB;EACE;IACE,0BAA0B;IAC1B,YAAY;GACb;EACD;IACE,cAAc;IACd,YAAY;GACb;CACF;AACD;EACE;IACE,0BAA0B;IAC1B,YAAY;GACb;EACD;IACE,cAAc;IACd,YAAY;GACb;CACF;AACD;EACE;IACE,6BAA6B;IAC7B,YAAY;GACb;CACF","file":"toastr.css","sourcesContent":["/* based on angular-toastr css https://github.com/Foxandxss/angular-toastr/blob/cb508fe6801d6b288d3afc525bb40fee1b101650/dist/angular-toastr.css */\n\n/* position */\n.toast-center-center {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-top-left {\n  top: 12px;\n  left: 12px;\n}\n.toast-top-right {\n  top: 12px;\n  right: 12px;\n}\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px;\n}\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px;\n}\n\n/* toast styles */\n.toast-title {\n  font-weight: bold;\n}\n.toast-message {\n  word-wrap: break-word;\n}\n.toast-message a,\n.toast-message label {\n  color: #FFFFFF;\n}\n.toast-message a:hover {\n  color: #CCCCCC;\n  text-decoration: none;\n}\n.toast-close-button {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-shadow: 0 1px 0 #ffffff;\n  /* opacity: 0.8; */\n}\n.toast-close-button:hover,\n.toast-close-button:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4;\n}\n/*Additional properties for button version\n iOS requires the button element instead of an anchor tag.\n If you want the anchor version, it requires `href=\"#\"`.*/\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n.toast-container {\n  pointer-events: none;\n  position: fixed;\n  z-index: 999999;\n}\n.toast-container * {\n  box-sizing: border-box;\n}\n.toast-container .toast {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  border-radius: 3px 3px 3px 3px;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  background-size: 24px;\n  box-shadow: 0 0 12px #999999;\n  color: #FFFFFF;\n}\n.toast-container .toast:hover {\n  box-shadow: 0 0 12px #000000;\n  opacity: 1;\n  cursor: pointer;\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/info-circle.svg */\n.toast-info {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'/%3E%3C/svg%3E\");\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/times-circle.svg */\n.toast-error {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'/%3E%3C/svg%3E\");\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/check.svg */\n.toast-success {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E\");\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/exclamation-triangle.svg */\n.toast-warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='576' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\");\n}\n.toast-container.toast-top-center .toast,\n.toast-container.toast-bottom-center .toast {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.toast-container.toast-top-full-width .toast,\n.toast-container.toast-bottom-full-width .toast {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.toast {\n  background-color: #030303;\n  pointer-events: auto;\n}\n.toast-success {\n  background-color: #51A351;\n}\n.toast-error {\n  background-color: #BD362F;\n}\n.toast-info {\n  background-color: #2F96B4;\n}\n.toast-warning {\n  background-color: #F89406;\n}\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000000;\n  opacity: 0.4;\n}\n/* Responsive Design */\n@media all and (max-width: 240px) {\n  .toast-container .toast.div {\n    padding: 8px 8px 8px 50px;\n    width: 11em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n@media all and (min-width: 241px) and (max-width: 480px) {\n  .toast-container .toast.div {\n    padding: 8px 8px 8px 50px;\n    width: 18em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n@media all and (min-width: 481px) and (max-width: 768px) {\n  .toast-container .toast.div {\n    padding: 15px 15px 15px 50px;\n    width: 25em;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js??ref--5-1!../node_modules/postcss-loader/lib/index.js??ref--5-2!../node_modules/resolve-url-loader/index.js??ref--5-3!../node_modules/sass-loader/lib/loader.js??ref--5-4!./styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports
exports.i(__webpack_require__("../node_modules/css-loader/index.js??ref--5-1!../node_modules/ngx-toastr/toastr.css"), "");

// module
exports.push([module.i, "#toast-container .mat-toast-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#toast-container .mat-icon {\n  vertical-align: middle;\n  margin: 0 10px 0 0;\n  color: #fff;\n}\n\n#toast-container .toast {\n  padding: 15px 15px 15px 25px;\n  background-color: #030303;\n  pointer-events: auto;\n}\n\n#toast-container .toast.toast-info {\n  background-image: none !important;\n  background-color: #29B7FF;\n}\n\n#toast-container .toast.toast-error {\n  background-image: none !important;\n  background-color: #FA7567;\n}\n\n#toast-container .toast.toast-success {\n  background-image: none !important;\n  background-color: #34BD43;\n}\n\n#toast-container .toast.toast-warning {\n  background-image: none !important;\n  background-color: #F2C91B;\n}\n\n.fs-message-banner {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-grid-row-align: center;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  max-width: 100%;\n  padding: 15px;\n  border: 1px solid transparent;\n  border-radius: 3px;\n}\n\n.fs-message-banner * {\n  color: #fff;\n}\n\n.fs-message-banner mat-icon {\n  margin-right: 10px;\n}\n\n.fs-message-banner:nth-child(1n+2) {\n  margin-top: 5px;\n}\n\n.fs-message-banner.fs-message-success {\n  background-color: #34BD43;\n}\n\n.fs-message-banner.fs-message-error {\n  background-color: #FA7567;\n}\n\n.fs-message-banner.fs-message-info {\n  background-color: #29B7FF;\n}\n\n.fs-message-banner.fs-message-warning {\n  background-color: #F2C91B;\n}\n\nfs-message-dialog > div {\n  min-width: 240px;\n}\n\nfs-message-dialog mat-icon {\n  margin-right: 10px;\n}\n\nfs-message-dialog .fs-message-success .mat-icon {\n  color: #34BD43;\n}\n\nfs-message-dialog .fs-message-error .mat-icon {\n  color: #FA7567;\n}\n\nfs-message-dialog .fs-message-info .mat-icon {\n  color: #29B7FF;\n}\n\nfs-message-dialog .fs-message-warning .mat-icon {\n  color: #F2C91B;\n}\n\n", "", {"version":3,"sources":["/Users/Basters/dev/firestitch/fs-message/src/src/styles.scss","/Users/Basters/dev/firestitch/fs-message/styles.scss"],"names":[],"mappings":"AAEA;EACE,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,0BAAA;MAAA,uBAAA;UAAA,oBAAA;CCCD;;ADED;EACE,uBAAA;EACA,mBAAA;EACA,YAAA;CCCD;;ADED;EACE,6BAAA;EACA,0BAAA;EACA,qBAAA;CCCD;;ADED;EACE,kCAAA;EACA,0BAAA;CCCD;;ADED;EACE,kCAAA;EACA,0BAAA;CCCD;;ADED;EACE,kCAAA;EACA,0BAAA;CCCD;;ADED;EACE,kCAAA;EACA,0BAAA;CCCD;;ADED;EACE,+BAAA;EACA,8BAAA;EAEA,wBAAA;MAAA,oBAAA;EACA,+BAAA;UAAA,uBAAA;EACA,qBAAA;EAEA,qBAAA;EAAA,cAAA;EACA,0BAAA;EACA,4BAAA;EACA,2BAAA;EACA,uBAAA;MAAA,oBAAA;EAEA,2BAAA;MAAA,sBAAA;EACA,gBAAA;EACA,cAAA;EACA,8BAAA;EACA,mBAAA;CCCD;;ADED;EACE,YAAA;CCCD;;ADED;EACE,mBAAA;CCCD;;ADED;EACI,gBAAA;CCCH;;ADED;EACI,0BAAA;CCCH;;ADED;EACI,0BAAA;CCCH;;ADED;EACI,0BAAA;CCCH;;ADED;EACI,0BAAA;CCCH;;ADEmB;EAClB,iBAAA;CCCD;;ADEiB;EAChB,mBAAA;CCCD;;ADEqC;EACpC,eAAA;CCCD;;ADED;EACE,eAAA;CCCD;;ADED;EACE,eAAA;CCCD;;ADEqC;EACpC,eAAA;CCCD","file":"styles.scss","sourcesContent":["@import '~ngx-toastr/toastr.css';\n\n#toast-container .mat-toast-content {\n  display: flex;\n  align-items: center;\n}\n\n#toast-container .mat-icon {\n  vertical-align: middle;\n  margin: 0 10px 0 0;\n  color: #fff;\n}\n\n#toast-container .toast {\n  padding: 15px 15px 15px 25px;\n  background-color: #030303;\n  pointer-events: auto;\n}\n\n#toast-container .toast.toast-info {\n  background-image: none !important;\n  background-color: #29B7FF;\n}\n\n#toast-container .toast.toast-error {\n  background-image: none !important;\n  background-color: #FA7567;\n}\n\n#toast-container .toast.toast-success {\n  background-image: none !important;\n  background-color: #34BD43;\n}\n\n#toast-container .toast.toast-warning {\n  background-image: none !important;\n  background-color: #F2C91B;\n}\n\n.fs-message-banner {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  flex-direction: row;\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-grid-row-align: center;\n  align-items: center;\n  -webkit-align-content: center;\n  align-content: center;\n  max-width: 100%;\n  padding: 15px;\n  border: 1px solid transparent;\n  border-radius: 3px;\n}\n\n.fs-message-banner * {\n  color: #fff;\n}\n\n.fs-message-banner mat-icon {\n  margin-right: 10px;\n}\n\n.fs-message-banner:nth-child(1n+2) {\n    margin-top: 5px;\n}\n\n.fs-message-banner.fs-message-success {\n    background-color: #34BD43;\n}\n\n.fs-message-banner.fs-message-error {\n    background-color: #FA7567;\n}\n\n.fs-message-banner.fs-message-info {\n    background-color: #29B7FF;\n}\n\n.fs-message-banner.fs-message-warning {\n    background-color: #F2C91B;\n}\n\nfs-message-dialog > div {\n  min-width: 240px;\n}\n\nfs-message-dialog mat-icon {\n  margin-right: 10px;\n}\n\nfs-message-dialog .fs-message-success .mat-icon {\n  color: #34BD43;\n}\n\nfs-message-dialog .fs-message-error .mat-icon {\n  color: #FA7567;\n}\n\nfs-message-dialog .fs-message-info .mat-icon {\n  color: #29B7FF;\n}\n\nfs-message-dialog .fs-message-warning .mat-icon {\n  color: #F2C91B;\n}\n","@import url(~ngx-toastr/toastr.css);\n\n#toast-container .mat-toast-content {\n  display: flex;\n  align-items: center;\n}\n\n#toast-container .mat-icon {\n  vertical-align: middle;\n  margin: 0 10px 0 0;\n  color: #fff;\n}\n\n#toast-container .toast {\n  padding: 15px 15px 15px 25px;\n  background-color: #030303;\n  pointer-events: auto;\n}\n\n#toast-container .toast.toast-info {\n  background-image: none !important;\n  background-color: #29B7FF;\n}\n\n#toast-container .toast.toast-error {\n  background-image: none !important;\n  background-color: #FA7567;\n}\n\n#toast-container .toast.toast-success {\n  background-image: none !important;\n  background-color: #34BD43;\n}\n\n#toast-container .toast.toast-warning {\n  background-image: none !important;\n  background-color: #F2C91B;\n}\n\n.fs-message-banner {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  flex-direction: row;\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-grid-row-align: center;\n  align-items: center;\n  -webkit-align-content: center;\n  align-content: center;\n  max-width: 100%;\n  padding: 15px;\n  border: 1px solid transparent;\n  border-radius: 3px;\n}\n\n.fs-message-banner * {\n  color: #fff;\n}\n\n.fs-message-banner mat-icon {\n  margin-right: 10px;\n}\n\n.fs-message-banner:nth-child(1n+2) {\n  margin-top: 5px;\n}\n\n.fs-message-banner.fs-message-success {\n  background-color: #34BD43;\n}\n\n.fs-message-banner.fs-message-error {\n  background-color: #FA7567;\n}\n\n.fs-message-banner.fs-message-info {\n  background-color: #29B7FF;\n}\n\n.fs-message-banner.fs-message-warning {\n  background-color: #F2C91B;\n}\n\nfs-message-dialog > div {\n  min-width: 240px;\n}\n\nfs-message-dialog mat-icon {\n  margin-right: 10px;\n}\n\nfs-message-dialog .fs-message-success .mat-icon {\n  color: #34BD43;\n}\n\nfs-message-dialog .fs-message-error .mat-icon {\n  color: #FA7567;\n}\n\nfs-message-dialog .fs-message-info .mat-icon {\n  color: #29B7FF;\n}\n\nfs-message-dialog .fs-message-warning .mat-icon {\n  color: #F2C91B;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./components/fsmessage/fsmessage.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var FsMessageComponent = (function () {
    function FsMessageComponent() {
        this.fsType = 'info';
        this.icons = { success: 'done', error: 'report_problem', info: 'info', warning: 'report_problem' };
        this.icon = 'info';
    }
    FsMessageComponent.prototype.ngOnInit = function () {
        this.icon = this.icons[this.fsType];
    };
    __decorate([
        core_1.Input('fsType'),
        __metadata("design:type", Object)
    ], FsMessageComponent.prototype, "fsType", void 0);
    __decorate([
        core_1.Input('fsMessage'),
        __metadata("design:type", String)
    ], FsMessageComponent.prototype, "fsMessage", void 0);
    FsMessageComponent = __decorate([
        core_1.Component({
            selector: 'fs-message',
            template: "<div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"fs-message-banner fs-message-{{ fsType }}\">\n      <div>\n        <mat-icon *ngIf=\"icon\" class=\"mat-icon material-icons\" role=\"img\">{{ icon }}</mat-icon>\n      </div>\n      <div *ngIf=\"fsMessage\">{{ fsMessage }}</div>\n    </div>"
        }),
        __metadata("design:paramtypes", [])
    ], FsMessageComponent);
    return FsMessageComponent;
}());
exports.FsMessageComponent = FsMessageComponent;


/***/ }),

/***/ "./components/fsmessagedialog/fsmessagedialog.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var material_1 = __webpack_require__("@angular/material");
var FsMessageDialogComponent = (function () {
    function FsMessageDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    FsMessageDialogComponent.prototype.hide = function () {
        this.dialogRef.close();
    };
    FsMessageDialogComponent = __decorate([
        core_1.Component({
            selector: 'fs-message-dialog',
            template: "<div class=\"fs-message-{{ data.type }}\">\n              <div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon>{{ data.icon }}</mat-icon>\n                <span>{{ data.options.title || 'Attention' }}</span>\n              </div>\n              <mat-dialog-content [innerHTML]=\"data.message\"></mat-dialog-content>\n              <mat-dialog-actions>\n                <button mat-button (click)=\"hide()\">OK</button>\n              </mat-dialog-actions>\n            </div>",
            styles: [":host .mat-dialog-title {\n              display: flex;\n              flex-direction: row;\n              align-items: center;\n            }"]
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object])
    ], FsMessageDialogComponent);
    return FsMessageDialogComponent;
}());
exports.FsMessageDialogComponent = FsMessageDialogComponent;


/***/ }),

/***/ "./components/fsmessages/fsmessages.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var fsmessage_service_1 = __webpack_require__("./fsmessage.service.ts");
var FsMessagesComponent = (function () {
    function FsMessagesComponent(fsMessage, _iterableDiffers) {
        this.fsMessage = fsMessage;
        this._iterableDiffers = _iterableDiffers;
        this.messages = [];
        this.iterableDiffer = this._iterableDiffers.find([]).create(null);
    }
    FsMessagesComponent.prototype.ngDoCheck = function () {
        var changes = this.iterableDiffer.diff(this.fsMessage.alerts);
        if (changes) {
            this.messages = this.fsMessage.alerts;
        }
        else {
            this.messages = [];
        }
    };
    FsMessagesComponent = __decorate([
        core_1.Component({
            selector: 'fs-messages',
            template: "<fs-message *ngFor=\"let item of messages\" [fsType]=\"item.type\" [fsMessage]=\"item.msg\"></fs-message>"
        }),
        __metadata("design:paramtypes", [fsmessage_service_1.FsMessage, core_1.IterableDiffers])
    ], FsMessagesComponent);
    return FsMessagesComponent;
}());
exports.FsMessagesComponent = FsMessagesComponent;


/***/ }),

/***/ "./fsmessage.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var common_1 = __webpack_require__("@angular/common");
var ngx_toastr_1 = __webpack_require__("ngx-toastr");
var material_1 = __webpack_require__("@angular/material");
var fsmessage_service_1 = __webpack_require__("./fsmessage.service.ts");
var fsmessagedialog_component_1 = __webpack_require__("./components/fsmessagedialog/fsmessagedialog.component.ts");
var fsmessages_component_1 = __webpack_require__("./components/fsmessages/fsmessages.component.ts");
var fsmessage_component_1 = __webpack_require__("./components/fsmessage/fsmessage.component.ts");
__webpack_require__("./styles.scss");
var FsMessageModule = (function () {
    function FsMessageModule() {
    }
    FsMessageModule_1 = FsMessageModule;
    FsMessageModule.forRoot = function () {
        return {
            ngModule: FsMessageModule_1,
            providers: [fsmessage_service_1.FsMessage]
        };
    };
    FsMessageModule = FsMessageModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ngx_toastr_1.ToastrModule.forRoot({ preventDuplicates: true }),
                material_1.MatDialogModule,
                material_1.MatIconModule,
                material_1.MatButtonModule
            ],
            exports: [
                fsmessages_component_1.FsMessagesComponent,
                fsmessage_component_1.FsMessageComponent
            ],
            entryComponents: [
                fsmessagedialog_component_1.FsMessageDialogComponent
            ],
            declarations: [
                fsmessages_component_1.FsMessagesComponent,
                fsmessage_component_1.FsMessageComponent,
                fsmessagedialog_component_1.FsMessageDialogComponent
            ],
            providers: [
                fsmessage_service_1.FsMessage,
                ngx_toastr_1.ToastrService
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], FsMessageModule);
    return FsMessageModule;
    var FsMessageModule_1;
}());
exports.FsMessageModule = FsMessageModule;


/***/ }),

/***/ "./fsmessage.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var ngx_toastr_1 = __webpack_require__("ngx-toastr");
var Observable_1 = __webpack_require__("rxjs/Observable");
var material_1 = __webpack_require__("@angular/material");
var fsmessagedialog_component_1 = __webpack_require__("./components/fsmessagedialog/fsmessagedialog.component.ts");
var FsMessage = (function () {
    function FsMessage(toastr, matDialog) {
        this.toastr = toastr;
        this.matDialog = matDialog;
        this._dialogs = 0;
        this._alerts = [];
        this._options = {
            success: {
                mode: 'toast',
                message: '',
                timeout: 5
            },
            warning: {
                mode: 'toast',
                message: '',
                timeout: 5
            },
            info: {
                mode: 'toast',
                message: '',
                timeout: 5
            },
            error: {
                mode: 'dialog',
                message: '',
                timeout: 5
            }
        };
    }
    Object.defineProperty(FsMessage.prototype, "alerts", {
        get: function () {
            return this._alerts;
        },
        enumerable: true,
        configurable: true
    });
    FsMessage.prototype.success = function (message, options) {
        if (options === void 0) { options = {}; }
        return this.show('success', message, options);
    };
    FsMessage.prototype.info = function (message, options) {
        if (options === void 0) { options = {}; }
        return this.show('info', message, options);
    };
    FsMessage.prototype.error = function (message, options) {
        if (options === void 0) { options = {}; }
        return this.show('error', message, options);
    };
    FsMessage.prototype.warning = function (message, options) {
        if (options === void 0) { options = {}; }
        return this.show('warning', message, options);
    };
    FsMessage.prototype.show = function (type, message, options) {
        options = Object.assign({}, this._options[type] || {}, options || {});
        if (options.icon === undefined) {
            options.icon = this.getIconName(type);
        }
        if (!message) {
            message = options.message;
        }
        if (options.mode === 'toast') {
            this.toast(type, message, options);
        }
        else if (options.mode === 'banner') {
            this.banner(type, message, options);
        }
        else if (options.mode === 'dialog') {
            this.dialog(type, message, options);
        }
        return Observable_1.Observable.create();
    };
    FsMessage.prototype.getIconName = function (type) {
        if (type === 'success') {
            return 'done';
        }
        else if (type === 'error') {
            return 'report_problem';
        }
        else if (type === 'info') {
            return 'info';
        }
        else if (type === 'warning') {
            return 'report_problem';
        }
    };
    FsMessage.prototype.toast = function (type, message, options) {
        options.enableHtml = true;
        options.positionClass = options.positionClass || 'toast-bottom-left';
        options.timeOut = (options.timeOut === undefined ? this._options[type].timeout : options.timeOut) * 1000;
        // toastr library removing all custom HTML tags from template
        var icon = options.icon ? "<div class=\"mat-icon material-icons\" role=\"img\" aria-hidden=\"true\">" + options.icon + "</div>" : '';
        var template = "<div class=\"mat-toast-content\">\n                        " + icon + "\n                        <div class=\"message\">" + message + "</div>\n                      </div>";
        this.toastr[type](template, options.title, options);
    };
    FsMessage.prototype.banner = function (type, message, options) {
        var _this = this;
        options.clear = options.clear === undefined ? true : options.clear;
        if (options.clear) {
            this.clear();
        }
        this._alerts.push({
            type: type,
            msg: message,
            close: this.clear
        });
        var timeout = this._options[type].timeout * 1000;
        if (timeout) {
            setTimeout(function () {
                _this.clear();
            }, 10000);
        }
    };
    FsMessage.prototype.dialog = function (type, message, options) {
        var _this = this;
        this._dialogs++;
        var dialogRef = this.matDialog.open(fsmessagedialog_component_1.FsMessageDialogComponent, {
            /* Waiting for MatDialog to support array of classes like panelClass
            backdropClass: ['fs-message-backdrop',
                            'fs-message-backdrop-' + type,
                            options.backdropClass].filter(function(e){return e}), */
            backdropClass: options.backdropClass,
            data: { type: type, message: message, options: options, icon: this.getIconName(type) },
            panelClass: ['fs-message-pane',
                'fs-message-pane-' + type,
                options.panelClass].filter(function (e) { return e; }),
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this._dialogs--;
        });
    };
    FsMessage.prototype.clear = function () {
        this._alerts = [];
    };
    FsMessage = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [ngx_toastr_1.ToastrService, material_1.MatDialog])
    ], FsMessage);
    return FsMessage;
}());
exports.FsMessage = FsMessage;


/***/ }),

/***/ "./index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./fsmessage.module.ts"));
__export(__webpack_require__("./fsmessage.service.ts"));
__export(__webpack_require__("./components/fsmessagedialog/fsmessagedialog.component.ts"));
__export(__webpack_require__("./components/fsmessages/fsmessages.component.ts"));
__export(__webpack_require__("./components/fsmessage/fsmessage.component.ts"));


/***/ }),

/***/ "./styles.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js??ref--5-1!../node_modules/postcss-loader/lib/index.js??ref--5-2!../node_modules/resolve-url-loader/index.js??ref--5-3!../node_modules/sass-loader/lib/loader.js??ref--5-4!./styles.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "@angular/common":
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/material":
/***/ (function(module, exports) {

module.exports = require("@angular/material");

/***/ }),

/***/ "ngx-toastr":
/***/ (function(module, exports) {

module.exports = require("ngx-toastr");

/***/ }),

/***/ "rxjs/Observable":
/***/ (function(module, exports) {

module.exports = require("rxjs/Observable");

/***/ })

/******/ });
});
//# sourceMappingURL=index.map