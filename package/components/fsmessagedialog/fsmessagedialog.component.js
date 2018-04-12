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
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
var FsMessageDialogComponent = (function () {
    function FsMessageDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    FsMessageDialogComponent.prototype.hide = function () {
        this.dialogRef.close();
    };
    FsMessageDialogComponent = __decorate([
        Component({
            selector: 'fs-message-dialog',
            template: "<div class=\"fs-message-{{ data.type }}\">\n              <div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon>{{ data.icon }}</mat-icon>\n                <span>{{ data.options.title || 'Attention' }}</span>\n              </div>\n              <mat-dialog-content [innerHTML]=\"data.message\"></mat-dialog-content>\n              <mat-dialog-actions>\n                <button mat-button (click)=\"hide()\">OK</button>\n              </mat-dialog-actions>\n            </div>",
            styles: [":host .mat-dialog-title {\n              display: flex;\n              flex-direction: row;\n              align-items: center;\n            }"]
        }),
        __param(1, Inject(MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [MatDialogRef, Object])
    ], FsMessageDialogComponent);
    return FsMessageDialogComponent;
}());
export { FsMessageDialogComponent };
//# sourceMappingURL=fsmessagedialog.component.js.map