import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';

import { ToastrModule } from 'ngx-toastr';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FsMaterialModule } from './material.module';
import { BannerExampleComponent } from './components/banner-example/banner-example.component';
import { BannerInlineExampleComponent } from './components/banner-inline-example/banner-inline-example.component';
import { ModalExampleComponent } from './components/modal-example/modal-example.component';
import { ToastExampleComponent } from './components/toast-example/toast-example.component';


@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsMessageModule.forRoot({
      toastTimeout: 3
    }),
    BrowserAnimationsModule,
    FsMaterialModule,
    FormsModule,
    FsExampleModule.forRoot(),
    FlexLayoutModule,
    ToastrModule.forRoot({ preventDuplicates: true, positionClass: 'toast-top-center' }),
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
