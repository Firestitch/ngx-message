import { CUSTOM_ELEMENTS_SCHEMA, Component, Inject, Injectable, Input, IterableDiffers, NgModule } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable as Observable$1 } from 'rxjs/Observable';
import { MAT_DIALOG_DATA, MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialog, MatDialogModule, MatDialogRef, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSlideToggleModule, MatSliderModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FsMessageDialogComponent = (function () {
    function FsMessageDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    FsMessageDialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FsMessageDialogComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    FsMessageDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fs-message-dialog',
                    template: "<div class=\"fs-message-{{ data.type }}\">\n              <h2 mat-dialog-title fxLayoutAlign=\"start center\">\n                <mat-icon>{{ data.icon }}</mat-icon>{{ data.options.title || 'Attention' }}\n              </h2>\n              <mat-dialog-content [innerHTML]=\"data.message\"></mat-dialog-content>\n              <mat-dialog-actions>\n                <div fxFlex></div>\n                <button mat-button (click)=\"hide()\">OK</button>\n              </mat-dialog-actions>\n            </div>"
                },] },
    ];
    /** @nocollapse */
    FsMessageDialogComponent.ctorParameters = function () { return [
        { type: MatDialogRef, },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] },] },
    ]; };
    return FsMessageDialogComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
        get: /**
         * @return {?}
         */
        function () {
            return this._alerts;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    FsMessage.prototype.success = /**
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    function (message, options) {
        if (options === void 0) { options = {}; }
        return this.show('success', message, options);
    };
    /**
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    FsMessage.prototype.info = /**
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    function (message, options) {
        if (options === void 0) { options = {}; }
        return this.show('info', message, options);
    };
    /**
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    FsMessage.prototype.error = /**
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    function (message, options) {
        if (options === void 0) { options = {}; }
        return this.show('error', message, options);
    };
    /**
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    FsMessage.prototype.warning = /**
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    function (message, options) {
        if (options === void 0) { options = {}; }
        return this.show('warning', message, options);
    };
    /**
     * @param {?} type
     * @param {?} message
     * @param {?} options
     * @return {?}
     */
    FsMessage.prototype.show = /**
     * @param {?} type
     * @param {?} message
     * @param {?} options
     * @return {?}
     */
    function (type, message, options) {
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
        return Observable$1.create();
    };
    /**
     * @param {?} type
     * @return {?}
     */
    FsMessage.prototype.getIconName = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
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
    /**
     * @param {?} type
     * @param {?} message
     * @param {?} options
     * @return {?}
     */
    FsMessage.prototype.toast = /**
     * @param {?} type
     * @param {?} message
     * @param {?} options
     * @return {?}
     */
    function (type, message, options) {
        options.enableHtml = true;
        options.positionClass = options.positionClass || 'toast-bottom-left';
        options.timeOut = (options.timeOut === undefined ? this._options[type].toastHideDelay : options.timeOut) * 1000;
        // toastr library removing all custom HTML tags from template
        var /** @type {?} */ icon = options.icon ? "<div class=\"mat-icon material-icons\" role=\"img\" aria-hidden=\"true\">" + options.icon + "</div>" : '';
        var /** @type {?} */ template = "<div class=\"mat-toast-content\">\n                        " + icon + "\n                        <div class=\"message\">" + message + "</div>\n                      </div>";
        this.toastr[type](template, options.title, options);
    };
    /**
     * @param {?} type
     * @param {?} message
     * @param {?} options
     * @return {?}
     */
    FsMessage.prototype.banner = /**
     * @param {?} type
     * @param {?} message
     * @param {?} options
     * @return {?}
     */
    function (type, message, options) {
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
        var /** @type {?} */ timeout = this._options[type].bannerHideDelay * 1000;
        if (timeout) {
            setTimeout(function () {
                _this.clear();
            }, 10000);
        }
    };
    /**
     * @param {?} type
     * @param {?} message
     * @param {?} options
     * @return {?}
     */
    FsMessage.prototype.modal = /**
     * @param {?} type
     * @param {?} message
     * @param {?} options
     * @return {?}
     */
    function (type, message, options) {
        var _this = this;
        this._modals++;
        var /** @type {?} */ dialogRef = this.dialog.open(FsMessageDialogComponent, {
            disableClose: true,
            data: { type: type, message: message, options: options, icon: this.getIconName(type) }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this._modals--;
        });
    };
    /**
     * @return {?}
     */
    FsMessage.prototype.clear = /**
     * @return {?}
     */
    function () {
        this._alerts = [];
    };
    FsMessage.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    FsMessage.ctorParameters = function () { return [
        { type: ToastrService, },
        { type: MatDialog, },
    ]; };
    return FsMessage;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FsMessageComponent = (function () {
    function FsMessageComponent() {
        this.fsType = 'info';
        this.icons = { success: 'done', error: 'report_problem', info: 'info', warning: 'report_problem' };
        this.icon = 'info';
    }
    /**
     * @return {?}
     */
    FsMessageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.icon = this.icons[this.fsType];
    };
    FsMessageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fs-message',
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"fs-message-banner fs-message-{{ fsType }}\">\n      <div>\n        <mat-icon *ngIf=\"icon\" class=\"mat-icon material-icons\" role=\"img\">{{ icon }}</mat-icon>\n      </div>\n      <div *ngIf=\"fsMessage\">{{ fsMessage }}</div>\n    </div>"
                },] },
    ];
    /** @nocollapse */
    FsMessageComponent.ctorParameters = function () { return []; };
    FsMessageComponent.propDecorators = {
        "fsType": [{ type: Input, args: ['fsType',] },],
        "fsMessage": [{ type: Input, args: ['fsMessage',] },],
    };
    return FsMessageComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FsMessagesComponent = (function () {
    function FsMessagesComponent(FsMessage$$1, _iterableDiffers) {
        this.FsMessage = FsMessage$$1;
        this._iterableDiffers = _iterableDiffers;
        this.messages = [];
        this.iterableDiffer = this._iterableDiffers.find([]).create(null);
    }
    /**
     * @return {?}
     */
    FsMessagesComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FsMessagesComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ changes = this.iterableDiffer.diff(this.FsMessage.alerts);
        if (changes) {
            this.messages = this.FsMessage.alerts;
        }
        else {
            this.messages = [];
        }
    };
    FsMessagesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fs-messages',
                    template: "<fs-message *ngFor=\"let item of messages\" [fsType]=\"item.type\" [fsMessage]=\"item.msg\"></fs-message>"
                },] },
    ];
    /** @nocollapse */
    FsMessagesComponent.ctorParameters = function () { return [
        { type: FsMessage, },
        { type: IterableDiffers, },
    ]; };
    return FsMessagesComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FsMessageModule = (function () {
    function FsMessageModule() {
    }
    /**
     * @return {?}
     */
    FsMessageModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: FsMessageModule,
            providers: [FsMessage]
        };
    };
    FsMessageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        MatAutocompleteModule,
                        MatButtonModule,
                        MatButtonToggleModule,
                        MatCardModule,
                        MatCheckboxModule,
                        MatChipsModule,
                        MatStepperModule,
                        MatDatepickerModule,
                        MatDialogModule,
                        MatExpansionModule,
                        MatGridListModule,
                        MatIconModule,
                        MatInputModule,
                        MatListModule,
                        MatMenuModule,
                        MatNativeDateModule,
                        MatPaginatorModule,
                        MatProgressBarModule,
                        MatProgressSpinnerModule,
                        MatRadioModule,
                        MatRippleModule,
                        MatSelectModule,
                        MatSidenavModule,
                        MatSliderModule,
                        MatSlideToggleModule,
                        MatSnackBarModule,
                        MatSortModule,
                        MatTableModule,
                        MatTabsModule,
                        MatToolbarModule,
                        MatTooltipModule,
                        FlexLayoutModule
                        //MATERIAL END
                    ],
                    declarations: [
                        FsMessagesComponent,
                        FsMessageComponent,
                        FsMessageDialogComponent
                    ],
                    providers: [
                        FsMessage
                    ],
                    entryComponents: [
                        FsMessageDialogComponent
                    ],
                    exports: [
                        FsMessagesComponent,
                        FsMessageComponent
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                },] },
    ];
    /** @nocollapse */
    FsMessageModule.ctorParameters = function () { return []; };
    return FsMessageModule;
}());

export { FsMessageModule, FsMessage, FsMessageDialogComponent, FsMessageComponent, FsMessagesComponent };
