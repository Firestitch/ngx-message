import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatIconModule, MatButtonModule } from '@angular/material';

import { FsMessageDialogComponent } from './components/message-dialog/message-dialog.component';
import { FsMessagesComponent } from './components/messages/messages.component';
import { FsMessageComponent } from './components/message/message.component';
import { FsMessage } from './message.service';
import { FsMessageConfig } from './interfaces/message-config';
import { FS_MESSAGE_CONFIG } from './injectors/message-config';

const FS_MESSAGE_DEFAULT_CONFIG = {
  toastTimeout: 5
}

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
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FsMessageModule {

  static forRoot(config: FsMessageConfig = {}): ModuleWithProviders {
    return {
      ngModule: FsMessageModule,
      providers: [
        FsMessage,
        {
          provide: FS_MESSAGE_CONFIG,
          useValue: Object.assign(
            {},
            FS_MESSAGE_DEFAULT_CONFIG,
            config || {}
          )
        }
      ]
    };
  }
}


