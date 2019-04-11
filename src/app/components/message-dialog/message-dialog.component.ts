import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'fs-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css']
})
export class FsMessageDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<FsMessageDialogComponent>,
  ) {}

  public hide() {
    this.dialogRef.close();
  }

  public buttonClick(button) {
    if (button.click) {
      button.click();
    }

    this.hide();
  }
}
