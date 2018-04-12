import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'fs-message-dialog',
  template: `<div class="fs-message-{{ data.type }}">
              <div mat-dialog-title fxLayout="row" fxLayoutAlign="start center">
                <mat-icon>{{ data.icon }}</mat-icon>
                <span>{{ data.options.title || 'Attention' }}</span>
              </div>
              <mat-dialog-content [innerHTML]="data.message"></mat-dialog-content>
              <mat-dialog-actions>
                <button mat-button (click)="hide()">OK</button>
              </mat-dialog-actions>
            </div>`,
  styles: [`:host .mat-dialog-title {
              display: flex;
              flex-direction: row;
              align-items: center;
            }`]
})
export class FsMessageDialogComponent {

  constructor(private dialogRef: MatDialogRef<FsMessageDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  hide() {
    this.dialogRef.close();
  }
}
