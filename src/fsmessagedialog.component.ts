import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'fs-message-dialog',
  template: `<div class="fs-message-{{ data.type }}">
              <h2 mat-dialog-title fxLayoutAlign="start center">
                <mat-icon>{{ data.icon }}</mat-icon>{{ data.options.title || 'Attention' }}
              </h2>
              <mat-dialog-content [innerHTML]="data.message"></mat-dialog-content>
              <mat-dialog-actions>
                <div fxFlex></div>
                <button mat-button (click)="hide()">OK</button>
              </mat-dialog-actions>
            </div>`
})
export class FsMessageDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FsMessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  hide() {
    this.dialogRef.close();
  }

}
