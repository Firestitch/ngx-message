var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { MatDialogModule, MatIconModule, MatButtonModule } from '@angular/material';
import { FsMessage } from './fsmessage.service';
import { FsMessageDialogComponent } from './components/fsmessagedialog/fsmessagedialog.component';
import { FsMessagesComponent } from './components/fsmessages/fsmessages.component';
import { FsMessageComponent } from './components/fsmessage/fsmessage.component';
var FsMessageModule = (function () {
    function FsMessageModule() {
    }
    FsMessageModule_1 = FsMessageModule;
    FsMessageModule.forRoot = function () {
        return {
            ngModule: FsMessageModule_1,
            providers: [FsMessage]
        };
    };
    FsMessageModule = FsMessageModule_1 = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ToastrModule.forRoot({ preventDuplicates: true }),
                MatDialogModule,
                MatIconModule,
                MatButtonModule
            ],
            exports: [
                FsMessagesComponent,
                FsMessageComponent
            ],
            entryComponents: [
                FsMessageDialogComponent
            ],
            declarations: [
                FsMessagesComponent,
                FsMessageComponent,
                FsMessageDialogComponent
            ],
            providers: [
                FsMessage,
                ToastrService
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], FsMessageModule);
    return FsMessageModule;
    var FsMessageModule_1;
}());
export { FsMessageModule };
//# sourceMappingURL=fsmessage.module.js.map