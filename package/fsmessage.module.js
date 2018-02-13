"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ngx_toastr_1 = require("ngx-toastr");
var material_1 = require("@angular/material");
var fsmessage_component_1 = require("./fsmessage.component");
var fsmessage_service_1 = require("./fsmessage.service");
var fsmessagedialog_component_1 = require("./fsmessagedialog.component");
var fsmessages_component_1 = require("./fsmessages.component");
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
//# sourceMappingURL=fsmessage.module.js.map