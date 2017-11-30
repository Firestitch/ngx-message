import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatButtonModule, MatDialogModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FsMessage } from './fsmessage.service';
import { FsMessagesComponent } from './fsmessages.component';
import { FsMessageComponent } from './fsmessage.component';
import { FsMessageDialogComponent } from './fsmessagedialog.component';

/**
 * Source library: https://scttcper.github.io/ngx-toastr/
 */
@NgModule({
    imports: [
      CommonModule,
      MatButtonModule,
      MatDialogModule,
      MatIconModule,
      FlexLayoutModule,
      ToastrModule.forRoot({ preventDuplicates: true })
    ],
    declarations: [
      FsMessagesComponent,
      FsMessageComponent,
      FsMessageDialogComponent
    ],
    providers: [
      FsMessage
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

}
