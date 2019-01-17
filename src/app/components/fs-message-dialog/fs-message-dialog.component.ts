import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'fs-message-dialog',
  templateUrl: './fs-message-dialog.component.html',
  styleUrls: ['./fs-message-dialog.component.css']
})
export class FsMessageDialogComponent {

  constructor(private dialogRef: MatDialogRef<FsMessageDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  hide() {
    this.dialogRef.close();
  }
}
