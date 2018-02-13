webpackJsonp([2],{

/***/ "../node_modules/css-loader/index.js??ref--2-1!../node_modules/postcss-loader/lib/index.js??ref--2-2!../node_modules/resolve-url-loader/index.js??ref--2-3!./app/components/banner-example/banner-example.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".alerts-container {\n  padding: 20px;\n  border: 3px dashed #ccc;\n  margin-bottom: 30px;\n  position: relative;\n}", "", {"version":3,"sources":["/Users/mendor/work/fs-message/banner-example.component.css"],"names":[],"mappings":"AAAA;EACE,cAAA;EACA,wBAAA;EACA,oBAAA;EACA,mBAAA;CACD","file":"banner-example.component.css","sourcesContent":[".alerts-container {\n  padding: 20px;\n  border: 3px dashed #ccc;\n  margin-bottom: 30px;\n  position: relative;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js??ref--2-1!../node_modules/postcss-loader/lib/index.js??ref--2-2!../node_modules/resolve-url-loader/index.js??ref--2-3!./app/components/banner-inline-example/banner-inline-example.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"banner-inline-example.component.css","sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js??ref--2-1!../node_modules/postcss-loader/lib/index.js??ref--2-2!../node_modules/resolve-url-loader/index.js??ref--2-3!./app/components/modal-example/modal-example.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"modal-example.component.css","sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js??ref--2-1!../node_modules/postcss-loader/lib/index.js??ref--2-2!../node_modules/resolve-url-loader/index.js??ref--2-3!./app/components/toast-example/toast-example.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"toast-example.component.css","sourceRoot":""}]);

// exports


/***/ }),

/***/ "../src/fsmessage.component.ts":
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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
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

/***/ "../src/fsmessage.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var common_1 = __webpack_require__("../node_modules/@angular/common/esm2015/common.js");
var ngx_toastr_1 = __webpack_require__("../node_modules/ngx-toastr/toastr.es2015.js");
var material_1 = __webpack_require__("../node_modules/@angular/material/esm2015/material.js");
var fsmessage_component_1 = __webpack_require__("../src/fsmessage.component.ts");
var fsmessage_service_1 = __webpack_require__("../src/fsmessage.service.ts");
var fsmessagedialog_component_1 = __webpack_require__("../src/fsmessagedialog.component.ts");
var fsmessages_component_1 = __webpack_require__("../src/fsmessages.component.ts");
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

/***/ "../src/fsmessage.service.ts":
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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var ngx_toastr_1 = __webpack_require__("../node_modules/ngx-toastr/toastr.es2015.js");
var Observable_1 = __webpack_require__("../node_modules/rxjs/Observable.js");
var material_1 = __webpack_require__("../node_modules/@angular/material/esm2015/material.js");
var fsmessagedialog_component_1 = __webpack_require__("../src/fsmessagedialog.component.ts");
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

/***/ "../src/fsmessagedialog.component.ts":
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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var material_1 = __webpack_require__("../node_modules/@angular/material/esm2015/material.js");
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

/***/ "../src/fsmessages.component.ts":
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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var fsmessage_service_1 = __webpack_require__("../src/fsmessage.service.ts");
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

/***/ "../src/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/fsmessage.module.ts"));
__export(__webpack_require__("../src/fsmessage.component.ts"));
__export(__webpack_require__("../src/fsmessage.service.ts"));
__export(__webpack_require__("../src/fsmessagedialog.component.ts"));
__export(__webpack_require__("../src/fsmessages.component.ts"));


/***/ }),

/***/ "../tools lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../tools lazy recursive";

/***/ }),

/***/ "../tools/assets/playground.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>FsMessage Examples</h1>\n<div class=\"example\">\n    <fs-example title=\"Banner Example\" componentName=\"banner-example\">\n        <banner-example></banner-example>\n    </fs-example>\n</div>\n<div class=\"example\">\n    <fs-example title=\"Banner Inline Example\" componentName=\"banner-inline-example\">\n        <banner-inline-example></banner-inline-example>\n    </fs-example>\n</div>\n<div class=\"example\">\n    <fs-example title=\"Modal Example\" componentName=\"modal-example\">\n        <modal-example></modal-example>\n    </fs-example>\n</div>\n<div class=\"example\">\n    <fs-example title=\"Toast Example\" componentName=\"toast-example\">\n        <toast-example></toast-example>\n    </fs-example>\n</div>\n"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./app/components/banner-example/banner-example.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js??ref--2-1!../node_modules/postcss-loader/lib/index.js??ref--2-2!../node_modules/resolve-url-loader/index.js??ref--2-3!./app/components/banner-example/banner-example.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./app/components/banner-example/banner-example.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alerts-container\">\n    <fs-messages></fs-messages>\n</div>\n<div>\n  <button mat-raised-button color=\"primary\" (click)=\"success()\">Toast Success</button>\n  <button mat-raised-button color=\"primary\" (click)=\"warning()\">Toast Warning</button>\n  <button mat-raised-button color=\"primary\" (click)=\"info()\">Toast Info</button>\n  <button mat-raised-button color=\"primary\" (click)=\"error()\">Toast Error</button>\n</div>\n"

/***/ }),

/***/ "./app/components/banner-example/banner-example.component.ts":
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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var fsmessage_service_1 = __webpack_require__("../src/fsmessage.service.ts");
var BannerExampleComponent = (function () {
    function BannerExampleComponent(FsMessage) {
        this.FsMessage = FsMessage;
    }
    BannerExampleComponent.prototype.success = function () {
        this.FsMessage.success('Success message', { mode: 'banner' });
    };
    BannerExampleComponent.prototype.info = function () {
        this.FsMessage.info('Info message', { mode: 'banner' });
    };
    BannerExampleComponent.prototype.warning = function () {
        this.FsMessage.warning('Warning message', { mode: 'banner' });
    };
    BannerExampleComponent.prototype.error = function () {
        this.FsMessage.error('Error message', { mode: 'banner' });
    };
    BannerExampleComponent = __decorate([
        core_1.Component({
            selector: 'banner-example',
            template: __webpack_require__("./app/components/banner-example/banner-example.component.html"),
            styles: [__webpack_require__("./app/components/banner-example/banner-example.component.css")]
        }),
        __metadata("design:paramtypes", [fsmessage_service_1.FsMessage])
    ], BannerExampleComponent);
    return BannerExampleComponent;
}());
exports.BannerExampleComponent = BannerExampleComponent;


/***/ }),

/***/ "./app/components/banner-inline-example/banner-inline-example.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js??ref--2-1!../node_modules/postcss-loader/lib/index.js??ref--2-2!../node_modules/resolve-url-loader/index.js??ref--2-3!./app/components/banner-inline-example/banner-inline-example.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./app/components/banner-inline-example/banner-inline-example.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <fs-message fsType=\"success\" fsMessage=\"fs-message inline component success\"></fs-message>\n  <fs-message fsType=\"warning\" fsMessage=\"fs-message inline component warning\"></fs-message>\n  <fs-message fsType=\"info\" fsMessage=\"fs-message inline component info\"></fs-message>\n  <fs-message fsType=\"error\" fsMessage=\"fs-message inline component error\"></fs-message>\n</div>\n"

/***/ }),

/***/ "./app/components/banner-inline-example/banner-inline-example.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var BannerInlineExampleComponent = (function () {
    function BannerInlineExampleComponent() {
    }
    BannerInlineExampleComponent = __decorate([
        core_1.Component({
            selector: 'banner-inline-example',
            template: __webpack_require__("./app/components/banner-inline-example/banner-inline-example.component.html"),
            styles: [__webpack_require__("./app/components/banner-inline-example/banner-inline-example.component.css")]
        })
    ], BannerInlineExampleComponent);
    return BannerInlineExampleComponent;
}());
exports.BannerInlineExampleComponent = BannerInlineExampleComponent;


/***/ }),

/***/ "./app/components/modal-example/modal-example.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js??ref--2-1!../node_modules/postcss-loader/lib/index.js??ref--2-2!../node_modules/resolve-url-loader/index.js??ref--2-3!./app/components/modal-example/modal-example.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./app/components/modal-example/modal-example.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <button mat-raised-button color=\"primary\" (click)=\"success()\">Success</button>\n  <button mat-raised-button color=\"primary\" (click)=\"warning()\">Warning</button>\n  <button mat-raised-button color=\"primary\" (click)=\"info()\">Info</button>\n  <button mat-raised-button color=\"primary\" (click)=\"error()\">Error</button>\n</div>\n"

/***/ }),

/***/ "./app/components/modal-example/modal-example.component.ts":
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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var fsmessage_service_1 = __webpack_require__("../src/fsmessage.service.ts");
var ModalExampleComponent = (function () {
    function ModalExampleComponent(FsMessage) {
        this.FsMessage = FsMessage;
    }
    ModalExampleComponent.prototype.error = function () {
        this.FsMessage.error('Error message', { mode: 'modal' });
    };
    ModalExampleComponent.prototype.warning = function () {
        this.FsMessage.warning('Warning message', { mode: 'modal', title: 'Warning' });
    };
    ModalExampleComponent.prototype.info = function () {
        this.FsMessage.info('Info message', { mode: 'modal', title: 'Information' });
    };
    ModalExampleComponent.prototype.success = function () {
        this.FsMessage.success('Success message', { mode: 'modal', title: 'Success' });
    };
    ModalExampleComponent = __decorate([
        core_1.Component({
            selector: 'modal-example',
            template: __webpack_require__("./app/components/modal-example/modal-example.component.html"),
            styles: [__webpack_require__("./app/components/modal-example/modal-example.component.css")]
        }),
        __metadata("design:paramtypes", [fsmessage_service_1.FsMessage])
    ], ModalExampleComponent);
    return ModalExampleComponent;
}());
exports.ModalExampleComponent = ModalExampleComponent;


/***/ }),

/***/ "./app/components/toast-example/toast-example.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js??ref--2-1!../node_modules/postcss-loader/lib/index.js??ref--2-2!../node_modules/resolve-url-loader/index.js??ref--2-3!./app/components/toast-example/toast-example.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./app/components/toast-example/toast-example.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <button mat-raised-button color=\"primary\" (click)=\"success()\">Toast Success</button>\n  <button mat-raised-button color=\"primary\" (click)=\"warning()\">Toast Warning</button>\n  <button mat-raised-button color=\"primary\" (click)=\"info()\">Toast Info</button>\n  <button mat-raised-button color=\"primary\" (click)=\"error()\">Toast Error</button>\n  <button mat-raised-button color=\"primary\" (click)=\"progress()\">Progress Bar</button>\n</div>\n"

/***/ }),

/***/ "./app/components/toast-example/toast-example.component.ts":
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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var fsmessage_service_1 = __webpack_require__("../src/fsmessage.service.ts");
var ToastExampleComponent = (function () {
    function ToastExampleComponent(FsMessage) {
        this.FsMessage = FsMessage;
    }
    ToastExampleComponent.prototype.error = function () {
        this.FsMessage.error('Error message<br>HTML', { mode: 'toast', enableHtml: true });
    };
    ToastExampleComponent.prototype.warning = function () {
        this.FsMessage.warning('Warning message');
    };
    ToastExampleComponent.prototype.info = function () {
        this.FsMessage.info('Info message');
    };
    ToastExampleComponent.prototype.success = function () {
        this.FsMessage.success('Success message');
    };
    ToastExampleComponent.prototype.progress = function () {
        this.FsMessage.info('Progress Bar...', { timeOut: 5, progressBar: true, progressAnimation: 'decreasing' });
    };
    ToastExampleComponent = __decorate([
        core_1.Component({
            selector: 'toast-example',
            template: __webpack_require__("./app/components/toast-example/toast-example.component.html"),
            styles: [__webpack_require__("./app/components/toast-example/toast-example.component.css")]
        }),
        __metadata("design:paramtypes", [fsmessage_service_1.FsMessage])
    ], ToastExampleComponent);
    return ToastExampleComponent;
}());
exports.ToastExampleComponent = ToastExampleComponent;


/***/ }),

/***/ "./app/material.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = __webpack_require__("../node_modules/@angular/material/esm2015/material.js");
//import { FlexLayoutModule } from '@angular/flex-layout';
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var table_1 = __webpack_require__("../node_modules/@angular/cdk/esm2015/table.js");
var AppMaterialModule = (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        core_1.NgModule({
            exports: [
                table_1.CdkTableModule,
                material_1.MatAutocompleteModule,
                material_1.MatButtonModule,
                material_1.MatButtonToggleModule,
                material_1.MatCardModule,
                material_1.MatCheckboxModule,
                material_1.MatChipsModule,
                material_1.MatStepperModule,
                material_1.MatDatepickerModule,
                material_1.MatDialogModule,
                material_1.MatExpansionModule,
                material_1.MatGridListModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatListModule,
                material_1.MatMenuModule,
                material_1.MatNativeDateModule,
                material_1.MatPaginatorModule,
                material_1.MatProgressBarModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatRadioModule,
                material_1.MatRippleModule,
                material_1.MatSelectModule,
                material_1.MatSidenavModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatSnackBarModule,
                material_1.MatSortModule,
                material_1.MatTableModule,
                material_1.MatTabsModule,
                material_1.MatToolbarModule,
                material_1.MatTooltipModule,
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());
exports.AppMaterialModule = AppMaterialModule;


/***/ }),

/***/ "./main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var playground_module_1 = __webpack_require__("./playground.module.ts");
var platform_browser_dynamic_1 = __webpack_require__("../node_modules/@angular/platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
var platform_browser_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
/**
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    platform_browser_dynamic_1.platformBrowserDynamic()
        .bootstrapModule(playground_module_1.PlaygroundModule)
        .then(decorateModuleRef)
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
/**
 * Needed for hmr
 * in prod this is replace for document ready
 */
switch (document.readyState) {
    case 'loading':
        document.addEventListener('DOMContentLoaded', _domReadyHandler, false);
        break;
    case 'interactive':
    case 'complete':
    default:
        main();
}
function _domReadyHandler() {
    document.removeEventListener('DOMContentLoaded', _domReadyHandler, false);
    main();
}
function decorateModuleRef(modRef) {
    var appRef = modRef.injector.get(core_1.ApplicationRef);
    var cmpRef = appRef.components[0];
    var _ng = window.ng;
    platform_browser_1.enableDebugTools(cmpRef);
    window.ng.probe = _ng.probe;
    window.ng.coreTokens = _ng.coreTokens;
    return modRef;
}


/***/ }),

/***/ "./playground.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("../tools/assets/playground.scss");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var forms_1 = __webpack_require__("../node_modules/@angular/forms/esm2015/forms.js");
var app_component_1 = __webpack_require__("./app/app.component.ts");
var platform_browser_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var src_1 = __webpack_require__("../src/index.ts");
var animations_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/animations.js");
var material_module_1 = __webpack_require__("./app/material.module.ts");
var banner_example_component_1 = __webpack_require__("./app/components/banner-example/banner-example.component.ts");
var banner_inline_example_component_1 = __webpack_require__("./app/components/banner-inline-example/banner-inline-example.component.ts");
var modal_example_component_1 = __webpack_require__("./app/components/modal-example/modal-example.component.ts");
var toast_example_component_1 = __webpack_require__("./app/components/toast-example/toast-example.component.ts");
var example_1 = __webpack_require__("../node_modules/@firestitch/example/package/index.js");
var PlaygroundModule = (function () {
    function PlaygroundModule() {
    }
    PlaygroundModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            imports: [
                platform_browser_1.BrowserModule,
                src_1.FsMessageModule,
                animations_1.BrowserAnimationsModule,
                material_module_1.AppMaterialModule,
                forms_1.FormsModule,
                example_1.FsExampleModule
            ],
            entryComponents: [],
            declarations: [
                app_component_1.AppComponent,
                banner_example_component_1.BannerExampleComponent,
                banner_inline_example_component_1.BannerInlineExampleComponent,
                modal_example_component_1.ModalExampleComponent,
                toast_example_component_1.ToastExampleComponent
            ],
            providers: [],
        })
    ], PlaygroundModule);
    return PlaygroundModule;
}());
exports.PlaygroundModule = PlaygroundModule;


/***/ })

},["./main.ts"]);
//# sourceMappingURL=main.map