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
var fsmessage_service_1 = require("./../../fsmessage.service");
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
//# sourceMappingURL=fsmessages.component.js.map