import { ChangeDetectionStrategy, Component, OnDestroy, inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions } from '@angular/material/dialog';

import { isObservable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatIcon } from '@angular/material/icon';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'fs-message-dialog',
    templateUrl: './message-dialog.component.html',
    styleUrls: ['./message-dialog.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatDialogTitle,
        MatIcon,
        CdkScrollable,
        MatDialogContent,
        MatDialogActions,
        MatButton,
    ],
})
export class FsMessageDialogComponent implements OnDestroy {
  data = inject(MAT_DIALOG_DATA);
  private _dialogRef = inject<MatDialogRef<FsMessageDialogComponent>>(MatDialogRef);


  private _destroy$ = new Subject();

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
    this._destroy$.next(null);
    this._destroy$.complete();
  }

}
