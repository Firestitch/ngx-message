import './../tools/assets/playground.scss';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FsMessageModule } from '../src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app/material.module';
import { BannerExampleComponent } from './app/components/banner-example/banner-example.component';
import { BannerInlineExampleComponent } from './app/components/banner-inline-example/banner-inline-example.component';
import { ModalExampleComponent } from './app/components/modal-example/modal-example.component';
import { ToastExampleComponent } from './app/components/toast-example/toast-example.component';
import { FsExampleModule } from '@firestitch/example';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsMessageModule.forRoot(),
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule,
    ToastrModule.forRoot({ preventDuplicates: true }),
  ],
  entryComponents: [
  ],
  declarations: [
    AppComponent,
    BannerExampleComponent,
    BannerInlineExampleComponent,
    ModalExampleComponent,
    ToastExampleComponent
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}
