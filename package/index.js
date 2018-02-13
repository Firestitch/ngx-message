(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/material"), require("@angular/core"), require("rxjs/Observable"), require("@angular/animations"), require("rxjs/Subject"), require("@angular/platform-browser"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define("@firestitch/message", ["@angular/material", "@angular/core", "rxjs/Observable", "@angular/animations", "rxjs/Subject", "@angular/platform-browser", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["@firestitch/message"] = factory(require("@angular/material"), require("@angular/core"), require("rxjs/Observable"), require("@angular/animations"), require("rxjs/Subject"), require("@angular/platform-browser"), require("@angular/common"));
	else
		root["@firestitch/message"] = factory(root["@angular/material"], root["@angular/core"], root["rxjs/Observable"], root["@angular/animations"], root["rxjs/Subject"], root["@angular/platform-browser"], root["@angular/common"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__angular_material__, __WEBPACK_EXTERNAL_MODULE__angular_core__, __WEBPACK_EXTERNAL_MODULE_rxjs_Observable__, __WEBPACK_EXTERNAL_MODULE__angular_animations__, __WEBPACK_EXTERNAL_MODULE_rxjs_Subject__, __WEBPACK_EXTERNAL_MODULE__angular_platform_browser__, __WEBPACK_EXTERNAL_MODULE__angular_common__) {
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

/***/ "../node_modules/ngx-toastr/toastr.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentPortal", function() { return ComponentPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePortalHost", function() { return BasePortalHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVERLAY_PROVIDERS", function() { return OVERLAY_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayContainer", function() { return OverlayContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayRef", function() { return OverlayRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastContainerDirective", function() { return ToastContainerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastContainerModule", function() { return ToastContainerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrService", function() { return ToastrService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastPackage", function() { return ToastPackage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultGlobalConfig", function() { return DefaultGlobalConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrModule", function() { return ToastrModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastRef", function() { return ToastRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastInjector", function() { return ToastInjector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOAST_CONFIG", function() { return TOAST_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastNoAnimation", function() { return ToastNoAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastNoAnimationModule", function() { return ToastNoAnimationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("@angular/core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("@angular/animations");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_animations__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("rxjs/Subject");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("@angular/platform-browser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("@angular/common");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_common__);






var ComponentPortal = (function () {
    function ComponentPortal(component, injector) {
        this.component = component;
        this.injector = injector;
    }
    ComponentPortal.prototype.attach = function (host, newestOnTop) {
        this._attachedHost = host;
        return host.attach(this, newestOnTop);
    };
    ComponentPortal.prototype.detach = function () {
        var host = this._attachedHost;
        if (host) {
            this._attachedHost = undefined;
            return host.detach();
        }
    };
    Object.defineProperty(ComponentPortal.prototype, "isAttached", {
        get: function () {
            return this._attachedHost != null;
        },
        enumerable: true,
        configurable: true
    });
    ComponentPortal.prototype.setAttachedHost = function (host) {
        this._attachedHost = host;
    };
    return ComponentPortal;
}());
var BasePortalHost = (function () {
    function BasePortalHost() {
    }
    BasePortalHost.prototype.attach = function (portal, newestOnTop) {
        this._attachedPortal = portal;
        return this.attachComponentPortal(portal, newestOnTop);
    };
    BasePortalHost.prototype.detach = function () {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost();
        }
        this._attachedPortal = undefined;
        if (this._disposeFn) {
            this._disposeFn();
            this._disposeFn = undefined;
        }
    };
    BasePortalHost.prototype.setDisposeFn = function (fn) {
        this._disposeFn = fn;
    };
    return BasePortalHost;
}());

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DomPortalHost = (function (_super) {
    __extends(DomPortalHost, _super);
    function DomPortalHost(_hostDomElement, _componentFactoryResolver, _appRef) {
        var _this = _super.call(this) || this;
        _this._hostDomElement = _hostDomElement;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._appRef = _appRef;
        return _this;
    }
    DomPortalHost.prototype.attachComponentPortal = function (portal, newestOnTop) {
        var _this = this;
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        var componentRef;
        componentRef = componentFactory.create(portal.injector);
        this._appRef.attachView(componentRef.hostView);
        this.setDisposeFn(function () {
            _this._appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        });
        if (newestOnTop) {
            this._hostDomElement.insertBefore(this._getComponentRootNode(componentRef), this._hostDomElement.firstChild);
        }
        else {
            this._hostDomElement.appendChild(this._getComponentRootNode(componentRef));
        }
        return componentRef;
    };
    DomPortalHost.prototype._getComponentRootNode = function (componentRef) {
        return componentRef.hostView.rootNodes[0];
    };
    return DomPortalHost;
}(BasePortalHost));

var OverlayRef = (function () {
    function OverlayRef(_portalHost) {
        this._portalHost = _portalHost;
    }
    OverlayRef.prototype.attach = function (portal, newestOnTop) {
        if (newestOnTop === void 0) { newestOnTop = true; }
        return this._portalHost.attach(portal, newestOnTop);
    };
    OverlayRef.prototype.detach = function () {
        return this._portalHost.detach();
    };
    return OverlayRef;
}());

var OverlayContainer = (function () {
    function OverlayContainer() {
    }
    OverlayContainer.prototype.getContainerElement = function () {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    };
    OverlayContainer.prototype._createContainer = function () {
        var container = document.createElement('div');
        container.classList.add('overlay-container');
        document.body.appendChild(container);
        this._containerElement = container;
    };
    return OverlayContainer;
}());

var Overlay = (function () {
    function Overlay(_overlayContainer, _componentFactoryResolver, _appRef) {
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._paneElements = {};
    }
    Overlay.prototype.create = function (positionClass, overlayContainer) {
        return this._createOverlayRef(this.getPaneElement(positionClass, overlayContainer));
    };
    Overlay.prototype.getPaneElement = function (positionClass, overlayContainer) {
        if (positionClass === void 0) { positionClass = ''; }
        if (!this._paneElements[positionClass]) {
            this._paneElements[positionClass] = this._createPaneElement(positionClass, overlayContainer);
        }
        return this._paneElements[positionClass];
    };
    Overlay.prototype._createPaneElement = function (positionClass, overlayContainer) {
        var pane = document.createElement('div');
        pane.id = 'toast-container';
        pane.classList.add(positionClass);
        if (!overlayContainer) {
            this._overlayContainer.getContainerElement().appendChild(pane);
        }
        else {
            overlayContainer.getContainerElement().appendChild(pane);
        }
        return pane;
    };
    Overlay.prototype._createPortalHost = function (pane) {
        return new DomPortalHost(pane, this._componentFactoryResolver, this._appRef);
    };
    Overlay.prototype._createOverlayRef = function (pane) {
        return new OverlayRef(this._createPortalHost(pane));
    };
    Overlay.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    Overlay.ctorParameters = function () { return [
        { type: OverlayContainer, },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], },
    ]; };
    return Overlay;
}());
var OVERLAY_PROVIDERS = [
    Overlay,
    OverlayContainer,
];

var ToastContainerDirective = (function () {
    function ToastContainerDirective(el) {
        this.el = el;
    }
    ToastContainerDirective.prototype.getContainerElement = function () {
        return this.el.nativeElement;
    };
    ToastContainerDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[toastContainer]',
                    exportAs: 'toastContainer',
                },] },
    ];
    ToastContainerDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    return ToastContainerDirective;
}());
var ToastContainerModule = (function () {
    function ToastContainerModule() {
    }
    ToastContainerModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [ToastContainerDirective],
                    exports: [ToastContainerDirective],
                },] },
    ];
    ToastContainerModule.ctorParameters = function () { return []; };
    return ToastContainerModule;
}());

var ToastPackage = (function () {
    function ToastPackage(toastId, config, message, title, toastType, toastRef) {
        var _this = this;
        this.toastId = toastId;
        this.config = config;
        this.message = message;
        this.title = title;
        this.toastType = toastType;
        this.toastRef = toastRef;
        this._onTap = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this._onAction = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.toastRef.afterClosed().subscribe(function () {
            _this._onAction.complete();
            _this._onTap.complete();
        });
    }
    ToastPackage.prototype.triggerTap = function () {
        this._onTap.next();
        this._onTap.complete();
    };
    ToastPackage.prototype.onTap = function () {
        return this._onTap.asObservable();
    };
    ToastPackage.prototype.triggerAction = function (action) {
        this._onAction.next(action);
    };
    ToastPackage.prototype.onAction = function () {
        return this._onAction.asObservable();
    };
    return ToastPackage;
}());

var ToastRef = (function () {
    function ToastRef(_overlayRef) {
        this._overlayRef = _overlayRef;
        this._afterClosed = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this._activate = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this._manualClose = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    ToastRef.prototype.manualClose = function () {
        this._manualClose.next();
        this._manualClose.complete();
    };
    ToastRef.prototype.manualClosed = function () {
        return this._manualClose.asObservable();
    };
    ToastRef.prototype.close = function () {
        this._overlayRef.detach();
        this._afterClosed.next();
        this._afterClosed.complete();
        this._manualClose.complete();
        this._activate.complete();
    };
    ToastRef.prototype.afterClosed = function () {
        return this._afterClosed.asObservable();
    };
    ToastRef.prototype.isInactive = function () {
        return this._activate.isStopped;
    };
    ToastRef.prototype.activate = function () {
        this._activate.next();
        this._activate.complete();
    };
    ToastRef.prototype.afterActivate = function () {
        return this._activate.asObservable();
    };
    return ToastRef;
}());
var ToastInjector = (function () {
    function ToastInjector(_toastPackage, _parentInjector) {
        this._toastPackage = _toastPackage;
        this._parentInjector = _parentInjector;
    }
    ToastInjector.prototype.get = function (token, notFoundValue) {
        if (token === ToastPackage && this._toastPackage) {
            return this._toastPackage;
        }
        return this._parentInjector.get(token, notFoundValue);
    };
    return ToastInjector;
}());

var TOAST_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('ToastConfig');

var __assign$1 = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var ToastrService = (function () {
    function ToastrService(token, overlay, _injector, sanitizer, ngZone) {
        this.overlay = overlay;
        this._injector = _injector;
        this.sanitizer = sanitizer;
        this.ngZone = ngZone;
        this.currentlyActive = 0;
        this.toasts = [];
        this.index = 0;
        var defaultConfig = new token.defaults;
        this.toastrConfig = __assign$1({}, defaultConfig, token.config);
        this.toastrConfig.iconClasses = __assign$1({}, defaultConfig.iconClasses, token.config.iconClasses);
    }
    ToastrService.prototype.show = function (message, title, override, type) {
        if (override === void 0) { override = {}; }
        if (type === void 0) { type = ''; }
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    };
    ToastrService.prototype.success = function (message, title, override) {
        if (override === void 0) { override = {}; }
        var type = this.toastrConfig.iconClasses.success || '';
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    };
    ToastrService.prototype.error = function (message, title, override) {
        if (override === void 0) { override = {}; }
        var type = this.toastrConfig.iconClasses.error || '';
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    };
    ToastrService.prototype.info = function (message, title, override) {
        if (override === void 0) { override = {}; }
        var type = this.toastrConfig.iconClasses.info || '';
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    };
    ToastrService.prototype.warning = function (message, title, override) {
        if (override === void 0) { override = {}; }
        var type = this.toastrConfig.iconClasses.warning || '';
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    };
    ToastrService.prototype.clear = function (toastId) {
        for (var _i = 0, _a = this.toasts; _i < _a.length; _i++) {
            var toast = _a[_i];
            if (toastId !== undefined) {
                if (toast.toastId === toastId) {
                    toast.toastRef.manualClose();
                    return;
                }
            }
            else {
                toast.toastRef.manualClose();
            }
        }
    };
    ToastrService.prototype.remove = function (toastId) {
        var found = this._findToast(toastId);
        if (!found) {
            return false;
        }
        found.activeToast.toastRef.close();
        this.toasts.splice(found.index, 1);
        this.currentlyActive = this.currentlyActive - 1;
        if (!this.toastrConfig.maxOpened || !this.toasts.length) {
            return false;
        }
        if (this.currentlyActive <= +this.toastrConfig.maxOpened && this.toasts[this.currentlyActive]) {
            var p = this.toasts[this.currentlyActive].toastRef;
            if (!p.isInactive()) {
                this.currentlyActive = this.currentlyActive + 1;
                p.activate();
            }
        }
        return true;
    };
    ToastrService.prototype.isDuplicate = function (message) {
        for (var i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].message === message) {
                return true;
            }
        }
        return false;
    };
    ToastrService.prototype.applyConfig = function (override) {
        if (override === void 0) { override = {}; }
        return __assign$1({}, this.toastrConfig, override);
    };
    ToastrService.prototype._findToast = function (toastId) {
        for (var i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].toastId === toastId) {
                return { index: i, activeToast: this.toasts[i] };
            }
        }
        return null;
    };
    ToastrService.prototype._preBuildNotification = function (toastType, message, title, config) {
        var _this = this;
        if (config.onActivateTick) {
            return this.ngZone.run(function () { return _this._buildNotification(toastType, message, title, config); });
        }
        return this._buildNotification(toastType, message, title, config);
    };
    ToastrService.prototype._buildNotification = function (toastType, message, title, config) {
        var _this = this;
        if (!config.toastComponent) {
            throw new Error('toastComponent required');
        }
        if (message && this.toastrConfig.preventDuplicates && this.isDuplicate(message)) {
            return null;
        }
        this.previousToastMessage = message;
        var keepInactive = false;
        if (this.toastrConfig.maxOpened && this.currentlyActive >= this.toastrConfig.maxOpened) {
            keepInactive = true;
            if (this.toastrConfig.autoDismiss) {
                this.clear(this.toasts[this.toasts.length - 1].toastId);
            }
        }
        var overlayRef = this.overlay.create(config.positionClass, this.overlayContainer);
        this.index = this.index + 1;
        var sanitizedMessage = message;
        if (message && config.enableHtml) {
            sanitizedMessage = this.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SecurityContext"].HTML, message);
        }
        var toastRef = new ToastRef(overlayRef);
        var toastPackage = new ToastPackage(this.index, config, sanitizedMessage, title, toastType, toastRef);
        var toastInjector = new ToastInjector(toastPackage, this._injector);
        var component = new ComponentPortal(config.toastComponent, toastInjector);
        var ins = {
            toastId: this.index,
            message: message || '',
            toastRef: toastRef,
            onShown: toastRef.afterActivate(),
            onHidden: toastRef.afterClosed(),
            onTap: toastPackage.onTap(),
            onAction: toastPackage.onAction(),
            portal: overlayRef.attach(component, this.toastrConfig.newestOnTop),
        };
        if (!keepInactive) {
            setTimeout(function () {
                ins.toastRef.activate();
                _this.currentlyActive = _this.currentlyActive + 1;
            });
        }
        this.toasts.push(ins);
        return ins;
    };
    ToastrService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    ToastrService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [TOAST_CONFIG,] },] },
        { type: Overlay, },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["DomSanitizer"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
    ]; };
    return ToastrService;
}());

var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var Toast = (function () {
    function Toast(toastrService, toastPackage) {
        var _this = this;
        this.toastrService = toastrService;
        this.toastPackage = toastPackage;
        this.width = -1;
        this.toastClasses = '';
        this.state = {
            value: 'inactive',
            params: {
                easeTime: this.toastPackage.config.easeTime,
                easing: 'ease-in',
            },
        };
        this.message = toastPackage.message;
        this.title = toastPackage.title;
        this.options = toastPackage.config;
        this.toastClasses = toastPackage.toastType + " " + toastPackage.config.toastClass;
        this.sub = toastPackage.toastRef.afterActivate().subscribe(function () {
            _this.activateToast();
        });
        this.sub1 = toastPackage.toastRef.manualClosed().subscribe(function () {
            _this.remove();
        });
    }
    Toast.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
    };
    Toast.prototype.activateToast = function () {
        var _this = this;
        this.state = __assign({}, this.state, { value: 'active' });
        if (!this.options.disableTimeOut && this.options.timeOut) {
            this.timeout = setTimeout(function () {
                _this.remove();
            }, this.options.timeOut);
            this.hideTime = new Date().getTime() + this.options.timeOut;
            if (this.options.progressBar) {
                this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
            }
        }
    };
    Toast.prototype.updateProgress = function () {
        if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
            return;
        }
        var now = new Date().getTime();
        var remaining = this.hideTime - now;
        this.width = (remaining / this.options.timeOut) * 100;
        if (this.options.progressAnimation === 'increasing') {
            this.width = 100 - this.width;
        }
        if (this.width <= 0) {
            this.width = 0;
        }
        if (this.width >= 100) {
            this.width = 100;
        }
    };
    Toast.prototype.remove = function () {
        var _this = this;
        if (this.state.value === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.state = __assign({}, this.state, { value: 'removed' });
        this.timeout = setTimeout(function () {
            return _this.toastrService.remove(_this.toastPackage.toastId);
        }, this.toastPackage.config.easeTime);
    };
    Toast.prototype.tapToast = function () {
        if (this.state.value === 'removed') {
            return;
        }
        this.toastPackage.triggerTap();
        if (this.options.tapToDismiss) {
            this.remove();
        }
    };
    Toast.prototype.stickAround = function () {
        if (this.state.value === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.options.timeOut = 0;
        this.hideTime = 0;
        clearInterval(this.intervalId);
        this.width = 0;
    };
    Toast.prototype.delayedHideToast = function () {
        var _this = this;
        if (this.options.disableTimeOut
            || this.options.extendedTimeOut === 0
            || this.state.value === 'removed') {
            return;
        }
        this.timeout = setTimeout(function () { return _this.remove(); }, this.options.extendedTimeOut);
        this.options.timeOut = this.options.extendedTimeOut;
        this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
        this.width = -1;
        if (this.options.progressBar) {
            this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
        }
    };
    Toast.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: '[toast-component]',
                    template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\">\n    &times;\n  </button>\n  <div *ngIf=\"title\" [class]=\"options.titleClass\" [attr.aria-label]=\"title\">\n    {{ title }}\n  </div>\n  <div *ngIf=\"message && options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [innerHTML]=\"message\">\n  </div>\n  <div *ngIf=\"message && !options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [attr.aria-label]=\"message\">\n    {{ message }}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width]=\"width + '%'\"></div>\n  </div>\n  ",
                    animations: [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('flyInOut', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                display: 'none',
                                opacity: 0,
                            })),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 1 })),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('removed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 0 })),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('{{ easeTime }}ms {{ easing }}')),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('active => removed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('{{ easeTime }}ms {{ easing }}')),
                        ]),
                    ],
                    preserveWhitespaces: false,
                },] },
    ];
    Toast.ctorParameters = function () { return [
        { type: ToastrService, },
        { type: ToastPackage, },
    ]; };
    Toast.propDecorators = {
        "toastClasses": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class',] },],
        "state": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['@flyInOut',] },],
        "tapToast": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
        "stickAround": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mouseenter',] },],
        "delayedHideToast": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mouseleave',] },],
    };
    return Toast;
}());

var DefaultGlobalConfig = (function () {
    function DefaultGlobalConfig() {
        this.maxOpened = 0;
        this.autoDismiss = false;
        this.newestOnTop = true;
        this.preventDuplicates = false;
        this.iconClasses = {
            error: 'toast-error',
            info: 'toast-info',
            success: 'toast-success',
            warning: 'toast-warning',
        };
        this.toastComponent = Toast;
        this.closeButton = false;
        this.timeOut = 5000;
        this.extendedTimeOut = 1000;
        this.enableHtml = false;
        this.progressBar = false;
        this.toastClass = 'toast';
        this.positionClass = 'toast-top-right';
        this.titleClass = 'toast-title';
        this.messageClass = 'toast-message';
        this.easing = 'ease-in';
        this.easeTime = 300;
        this.tapToDismiss = true;
        this.onActivateTick = false;
        this.progressAnimation = 'decreasing';
    }
    return DefaultGlobalConfig;
}());

var ToastrModule = (function () {
    function ToastrModule(parentModule) {
        if (parentModule) {
            throw new Error('ToastrModule is already loaded. It should only be imported in your application\'s main module.');
        }
    }
    ToastrModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: ToastrModule,
            providers: [
                { provide: TOAST_CONFIG, useValue: { config: config, defaults: DefaultGlobalConfig } },
                OverlayContainer,
                Overlay,
                ToastrService,
            ],
        };
    };
    ToastrModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"]],
                    exports: [Toast],
                    declarations: [Toast],
                    entryComponents: [Toast],
                },] },
    ];
    ToastrModule.ctorParameters = function () { return [
        { type: ToastrModule, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"] },] },
    ]; };
    return ToastrModule;
}());

var ToastNoAnimation = (function () {
    function ToastNoAnimation(toastrService, toastPackage, appRef) {
        var _this = this;
        this.toastrService = toastrService;
        this.toastPackage = toastPackage;
        this.appRef = appRef;
        this.width = -1;
        this.toastClasses = '';
        this.state = 'inactive';
        this.message = toastPackage.message;
        this.title = toastPackage.title;
        this.options = toastPackage.config;
        this.toastClasses = toastPackage.toastType + " " + toastPackage.config.toastClass;
        this.sub = toastPackage.toastRef.afterActivate().subscribe(function () {
            _this.activateToast();
        });
        this.sub1 = toastPackage.toastRef.manualClosed().subscribe(function () {
            _this.remove();
        });
    }
    ToastNoAnimation.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
    };
    ToastNoAnimation.prototype.activateToast = function () {
        var _this = this;
        this.state = 'active';
        if (!this.options.disableTimeOut && this.options.timeOut) {
            this.timeout = setTimeout(function () {
                _this.remove();
            }, this.options.timeOut);
            this.hideTime = new Date().getTime() + this.options.timeOut;
            if (this.options.progressBar) {
                this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
            }
        }
        if (this.options.onActivateTick) {
            this.appRef.tick();
        }
    };
    ToastNoAnimation.prototype.updateProgress = function () {
        if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
            return;
        }
        var now = new Date().getTime();
        var remaining = this.hideTime - now;
        this.width = remaining / this.options.timeOut * 100;
        if (this.options.progressAnimation === 'increasing') {
            this.width = 100 - this.width;
        }
        if (this.width <= 0) {
            this.width = 0;
        }
        if (this.width >= 100) {
            this.width = 100;
        }
    };
    ToastNoAnimation.prototype.remove = function () {
        var _this = this;
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.state = 'removed';
        this.timeout = setTimeout(function () { return _this.toastrService.remove(_this.toastPackage.toastId); });
    };
    ToastNoAnimation.prototype.tapToast = function () {
        if (this.state === 'removed') {
            return;
        }
        this.toastPackage.triggerTap();
        if (this.options.tapToDismiss) {
            this.remove();
        }
    };
    ToastNoAnimation.prototype.stickAround = function () {
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.options.timeOut = 0;
        this.hideTime = 0;
        clearInterval(this.intervalId);
        this.width = 0;
    };
    ToastNoAnimation.prototype.delayedHideToast = function () {
        var _this = this;
        if (this.options.disableTimeOut
            || this.options.extendedTimeOut === 0
            || this.state === 'removed') {
            return;
        }
        this.timeout = setTimeout(function () { return _this.remove(); }, this.options.extendedTimeOut);
        this.options.timeOut = this.options.extendedTimeOut;
        this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
        this.width = -1;
        if (this.options.progressBar) {
            this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
        }
    };
    ToastNoAnimation.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: '[toast-component]',
                    template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\">\n    &times;\n  </button>\n  <div *ngIf=\"title\" [class]=\"options.titleClass\" [attr.aria-label]=\"title\">\n    {{ title }}\n  </div>\n  <div *ngIf=\"message && options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [innerHTML]=\"message\">\n  </div>\n  <div *ngIf=\"message && !options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [attr.aria-label]=\"message\">\n    {{ message }}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width]=\"width + '%'\"></div>\n  </div>\n  ",
                },] },
    ];
    ToastNoAnimation.ctorParameters = function () { return [
        { type: ToastrService, },
        { type: ToastPackage, },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], },
    ]; };
    ToastNoAnimation.propDecorators = {
        "toastClasses": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class',] },],
        "tapToast": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
        "stickAround": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mouseenter',] },],
        "delayedHideToast": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mouseleave',] },],
    };
    return ToastNoAnimation;
}());
var ToastNoAnimationModule = (function () {
    function ToastNoAnimationModule() {
    }
    ToastNoAnimationModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"]],
                    declarations: [ToastNoAnimation],
                    exports: [ToastNoAnimation],
                    entryComponents: [ToastNoAnimation],
                },] },
    ];
    ToastNoAnimationModule.ctorParameters = function () { return []; };
    return ToastNoAnimationModule;
}());


//# sourceMappingURL=toastr.es5.js.map


/***/ }),

/***/ "./fsmessage.component.ts":
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
var ngx_toastr_1 = __webpack_require__("../node_modules/ngx-toastr/toastr.es5.js");
var material_1 = __webpack_require__("@angular/material");
var fsmessage_component_1 = __webpack_require__("./fsmessage.component.ts");
var fsmessage_service_1 = __webpack_require__("./fsmessage.service.ts");
var fsmessagedialog_component_1 = __webpack_require__("./fsmessagedialog.component.ts");
var fsmessages_component_1 = __webpack_require__("./fsmessages.component.ts");
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
var ngx_toastr_1 = __webpack_require__("../node_modules/ngx-toastr/toastr.es5.js");
var Observable_1 = __webpack_require__("rxjs/Observable");
var material_1 = __webpack_require__("@angular/material");
var fsmessagedialog_component_1 = __webpack_require__("./fsmessagedialog.component.ts");
var FsMessage = (function () {
    function FsMessage(toastr, dialog) {
        this.toastr = toastr;
        this.dialog = dialog;
        this._modals = 0;
        this._alerts = [];
        this._options = {
            success: {
                mode: 'toast',
                message: '',
                toastHideDelay: 5,
                bannerHideDelay: 10
            },
            warning: {
                mode: 'toast',
                message: '',
                toastHideDelay: 5,
                bannerHideDelay: 10
            },
            info: {
                mode: 'toast',
                message: '',
                toastHideDelay: 5,
                bannerHideDelay: 10
            },
            error: {
                mode: 'modal',
                message: '',
                toastHideDelay: 5,
                bannerHideDelay: 10
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
        else if (options.mode === 'modal') {
            this.modal(type, message, options);
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
        options.timeOut = (options.timeOut === undefined ? this._options[type].toastHideDelay : options.timeOut) * 1000;
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
        var timeout = this._options[type].bannerHideDelay * 1000;
        if (timeout) {
            setTimeout(function () {
                _this.clear();
            }, 10000);
        }
    };
    FsMessage.prototype.modal = function (type, message, options) {
        var _this = this;
        this._modals++;
        var dialogRef = this.dialog.open(fsmessagedialog_component_1.FsMessageDialogComponent, {
            disableClose: true,
            data: { type: type, message: message, options: options, icon: this.getIconName(type) }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this._modals--;
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

/***/ "./fsmessagedialog.component.ts":
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
    FsMessageDialogComponent.prototype.ngOnInit = function () {
    };
    FsMessageDialogComponent.prototype.hide = function () {
        this.dialogRef.close();
    };
    FsMessageDialogComponent = __decorate([
        core_1.Component({
            selector: 'fs-message-dialog',
            template: "<div class=\"fs-message-{{ data.type }}\">\n              <h2 mat-dialog-title fxLayoutAlign=\"start center\">\n                <mat-icon>{{ data.icon }}</mat-icon>{{ data.options.title || 'Attention' }}\n              </h2>\n              <mat-dialog-content [innerHTML]=\"data.message\"></mat-dialog-content>\n              <mat-dialog-actions>\n                <div fxFlex></div>\n                <button mat-button (click)=\"hide()\">OK</button>\n              </mat-dialog-actions>\n            </div>"
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object])
    ], FsMessageDialogComponent);
    return FsMessageDialogComponent;
}());
exports.FsMessageDialogComponent = FsMessageDialogComponent;


/***/ }),

/***/ "./fsmessages.component.ts":
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
    function FsMessagesComponent(FsMessage, _iterableDiffers) {
        this.FsMessage = FsMessage;
        this._iterableDiffers = _iterableDiffers;
        this.messages = [];
        this.iterableDiffer = this._iterableDiffers.find([]).create(null);
    }
    FsMessagesComponent.prototype.ngOnInit = function () {
    };
    FsMessagesComponent.prototype.ngDoCheck = function () {
        var changes = this.iterableDiffer.diff(this.FsMessage.alerts);
        if (changes) {
            this.messages = this.FsMessage.alerts;
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

/***/ "./index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./fsmessage.module.ts"));
__export(__webpack_require__("./fsmessage.component.ts"));
__export(__webpack_require__("./fsmessage.service.ts"));
__export(__webpack_require__("./fsmessagedialog.component.ts"));
__export(__webpack_require__("./fsmessages.component.ts"));


/***/ }),

/***/ "@angular/animations":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_animations__;

/***/ }),

/***/ "@angular/common":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_common__;

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_core__;

/***/ }),

/***/ "@angular/material":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_material__;

/***/ }),

/***/ "@angular/platform-browser":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_platform_browser__;

/***/ }),

/***/ "rxjs/Observable":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs_Observable__;

/***/ }),

/***/ "rxjs/Subject":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs_Subject__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.map