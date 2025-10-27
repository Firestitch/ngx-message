import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { merge } from 'lodash-es';
import { ToastrModule } from 'ngx-toastr';

import { FsMessageErrorComponent, FsMessageInfoComponent, FsMessageSuccessComponent, FsMessageWarningComponent } from './components';
import { FsMessageDialogComponent } from './components/message-dialog/message-dialog.component';
import { FsMessageComponent } from './components/message/message.component';
import { FsMessagesComponent } from './components/messages/messages.component';
import { ToastMessageComponent } from './components/toast-message';
import { MessageMode } from './enums';
import { FS_MESSAGE_CONFIG, FS_MESSAGE_DEFAULT_CONFIG } from './injectors/message-config';
import { FsMessageConfig } from './interfaces/fs-message-config';


@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
        FsMessagesComponent,
        FsMessageComponent,
        FsMessageDialogComponent,
        FsMessageInfoComponent,
        FsMessageWarningComponent,
        FsMessageSuccessComponent,
        FsMessageErrorComponent,
        ToastMessageComponent,
    ],
    exports: [
        FsMessagesComponent,
        FsMessageComponent,
        FsMessageInfoComponent,
        FsMessageWarningComponent,
        FsMessageSuccessComponent,
        FsMessageErrorComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FsMessageModule {

  public static forRoot(config: FsMessageConfig = {}): ModuleWithProviders<FsMessageModule> {
    return {
      ngModule: FsMessageModule,
      providers: [
        { provide: FS_MESSAGE_DEFAULT_CONFIG, useValue: config },
        {
          provide: FS_MESSAGE_CONFIG,
          useFactory: FsMessageConfigFactory,
          deps: [FS_MESSAGE_DEFAULT_CONFIG],
        },
        ToastrModule.forRoot({
          preventDuplicates: true,
          positionClass: config.positionClass || 'toast-bottom-right',
          toastComponent: ToastMessageComponent,
        }).providers,
      ],
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
    infoMode: MessageMode.Toast,
  }, config);
}
