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
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
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
//# sourceMappingURL=fsmessagedialog.component.js.map