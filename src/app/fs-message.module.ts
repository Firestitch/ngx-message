import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatIconModule, MatButtonModule } from '@angular/material';

import { merge } from 'lodash-es';

import { FsMessageDialogComponent } from './components/message-dialog/message-dialog.component';
import { FsMessagesComponent } from './components/messages/messages.component';
import { FsMessageComponent } from './components/message/message.component';
import { FsMessage } from './message.service';
import { FsMessageConfig } from './interfaces/message-config';
import { FS_MESSAGE_CONFIG, FS_MESSAGE_DEFAULT_CONFIG } from './injectors/message-config';


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
        { provide: FS_MESSAGE_DEFAULT_CONFIG, useValue: config },
        {
          provide: FS_MESSAGE_CONFIG,
          useFactory: FsMessageConfigFactory,
          deps: [FS_MESSAGE_DEFAULT_CONFIG]
        },
      ]
    };
  }
}


export function FsMessageConfigFactory(config: FsMessageConfig) {
  return merge({ toastTimeout: 5 }, config);
}

