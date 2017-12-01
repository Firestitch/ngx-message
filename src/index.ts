import { FsMessage } from './fsmessage.service';
import { FsMessageDialogComponent } from './fsmessagedialog.component';
import { FsMessageComponent } from './fsmessage.component';
import { FsMessagesComponent } from './fsmessages.component';
import { HttpClientModule } from '@angular/common/http';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

export * from './fsmessage.service';
export * from './fsmessagedialog.component';
export * from './fsmessage.component';
export * from './fsmessages.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    //MATERIAL
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    FlexLayoutModule
    //MATERIAL END
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
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsMessageModule,
      providers: [FsMessage]
    };
  }
}
