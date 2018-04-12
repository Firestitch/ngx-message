var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material';
import { FsMessageDialogComponent } from './components/fsmessagedialog/fsmessagedialog.component';
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
        return Observable.create();
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
        var dialogRef = this.matDialog.open(FsMessageDialogComponent, {
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
        Injectable(),
        __metadata("design:paramtypes", [ToastrService, MatDialog])
    ], FsMessage);
    return FsMessage;
}());
export { FsMessage };
//# sourceMappingURL=fsmessage.service.js.map