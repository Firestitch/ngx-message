import { FsMessage } from './fsmessage.service';
import { FsMessageDialogComponent } from './fsmessagedialog.component';
import { FsMessageComponent } from './fsmessage.component';
import { FsMessagesComponent } from './fsmessages.component';

import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material';

export * from './fsmessage.service';
export * from './fsmessagedialog.component';
export * from './fsmessage.component';
export * from './fsmessages.component';

@NgModule({
  imports: [
    CommonModule,
    ToastrModule.forRoot({ preventDuplicates: true }),
    MatDialogModule
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
entryComponents: [
  FsMessageDialogComponent
],
exports: [
  FsMessagesComponent,
  FsMessageComponent
],
schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FsMessageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsMessageModule,
      providers: [FsMessage]
    };
  }
}
