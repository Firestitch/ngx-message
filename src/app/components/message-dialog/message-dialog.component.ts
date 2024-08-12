import { ChangeDetectionStrategy, Component, Inject, OnDestroy } from '@angular/core';

import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

import { isObservable, of, Subject } from 'rxjs';
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
    private _dialogRef: MatDialogRef<FsMessageDialogComponent>,
  ) {}

  public hide() {
    this._dialogRef.close();
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
