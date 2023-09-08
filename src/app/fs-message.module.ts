import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { merge } from 'lodash-es';
import { ToastrModule } from 'ngx-toastr';

import { FsMessageDialogComponent } from './components/message-dialog/message-dialog.component';
import { FsMessagesComponent } from './components/messages/messages.component';
import { FsMessageComponent } from './components/message/message.component';
import { FsMessage } from './services/message.service';
import { FsMessageConfig } from './interfaces/fs-message-config';
import { FS_MESSAGE_CONFIG, FS_MESSAGE_DEFAULT_CONFIG } from './injectors/message-config';
import { MessageMode } from './enums';
import { FsMessageErrorComponent, FsMessageInfoComponent, FsMessageSuccessComponent, FsMessageWarningComponent } from './components';


@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    FsMessagesComponent,
    FsMessageComponent,
    FsMessageInfoComponent,
    FsMessageWarningComponent,
    FsMessageSuccessComponent,
    FsMessageErrorComponent,
  ],
  declarations: [
    FsMessagesComponent,
    FsMessageComponent,
    FsMessageDialogComponent,
    FsMessageInfoComponent,
    FsMessageWarningComponent,
    FsMessageSuccessComponent,
    FsMessageErrorComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FsMessageModule {

static forRoot(config: FsMessageConfig = {}): ModuleWithProviders<FsMessageModule> {
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
        ToastrModule.forRoot({
          preventDuplicates: true,
          positionClass: 'toast-bottom-right',
        }).providers,
      ]
    };
  }
}

export function FsMessageConfigFactory(config: FsMessageConfig) {
  return merge({
    toastTimeout: 5,
    bannerTimeout: 5,
    dialogWidth: '500px',
    successMode: MessageMode.Toast,
    errorMode: MessageMode.Dialog,
    warningMode: MessageMode.Toast,
    infoMode: MessageMode.Toast
  }, config);
}
