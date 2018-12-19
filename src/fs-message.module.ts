import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatIconModule, MatButtonModule } from '@angular/material';

import { FsMessage } from './fs-message.service';
import { FsMessageDialogComponent } from './components/fs-message-dialog/fs-message-dialog.component';
import { FsMessagesComponent } from './components/fs-messages/fs-messages.component';
import { FsMessageComponent } from './components/fs-message/fs-message.component';

import './styles.scss';


@NgModule({
  imports: [
    CommonModule,
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
