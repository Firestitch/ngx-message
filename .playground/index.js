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
/**
 * This is only for local test
 */
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var message_1 = require("@firestitch/message");
var animations_1 = require("@angular/platform-browser/animations");
var AppComponent = (function () {
    function AppComponent(FsMessage) {
        this.FsMessage = FsMessage;
    }
    AppComponent.prototype.error = function () {
        this.FsMessage.error('Error message');
    };
    AppComponent.prototype.warning = function () {
        this.FsMessage.warning('Warning message');
    };
    AppComponent.prototype.info = function () {
        this.FsMessage.info('Info message');
    };
    AppComponent.prototype.success = function () {
        this.FsMessage.success('Success message');
    };
    AppComponent.prototype.progress = function () {
        this.FsMessage.info('Loading...', { timeOut: 60, progressBar: true, progressAnimation: 'decreasing' });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: 'template.html',
            styleUrls: ['styles.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof message_1.FsMessage !== "undefined" && message_1.FsMessage) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [AppComponent],
            declarations: [AppComponent],
            imports: [platform_browser_1.BrowserModule, message_1.FsMessageModule, animations_1.BrowserAnimationsModule]
        })
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=index.js.map