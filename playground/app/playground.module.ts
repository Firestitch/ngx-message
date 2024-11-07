import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';

import { AppComponent } from './app.component';
import { BannerExampleComponent } from './components/banner-example/banner-example.component';
import { BannerInlineExampleComponent } from './components/banner-inline-example/banner-inline-example.component';
import { ModalExampleComponent } from './components/modal-example/modal-example.component';
import { ToastExampleComponent } from './components/toast-example/toast-example.component';
import { FsMaterialModule } from './material.module';


@NgModule({
  bootstrap: [AppComponent],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    FsMessageModule.forRoot({
      toastTimeout: 3,
      defaultMessage: {
        success: 'Saved changes',
      }
    }),
    BrowserAnimationsModule,
    FsMaterialModule,
    FormsModule,
    FsExampleModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    BannerExampleComponent,
    BannerInlineExampleComponent,
    ModalExampleComponent,
    ToastExampleComponent
  ],
})
export class PlaygroundModule {
}
