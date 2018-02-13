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
var core_1 = require("@angular/core");
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
//# sourceMappingURL=fsmessage.component.js.map