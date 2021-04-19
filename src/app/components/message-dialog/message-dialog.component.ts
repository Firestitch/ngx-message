import { ChangeDetectionStrategy, Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { isObservable, Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'fs-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsMessageDialogComponent implements OnDestroy {

  private _destroy$ = new Subject();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<FsMessageDialogComponent>,
  ) {}

  public hide() {
    this.dialogRef.close();
  }

  public buttonClick(button) {
    if (button.click) {
      const result = button.click();
      const observable$ = isObservable(result) ? result : of(true);

      observable$
        .pipe(
          takeUntil(this._destroy$),
        )
        .subscribe(() => {
          this.hide();
        });

    } else {
      this.hide();
    }
  }

  public ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

}
