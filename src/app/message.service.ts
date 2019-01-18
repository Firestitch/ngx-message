import { Injectable, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material';

import { Observable, Subject } from 'rxjs';

import { FsMessageDialogComponent } from './components/message-dialog/message-dialog.component';
import { takeUntil } from 'rxjs/operators';


@Injectable()
export class FsMessage implements OnDestroy {

  private _dialogs = 0;
  private _dialogsMessagesQueue = [];
  private _alerts = [];

  private _options = {
    success: {
      mode: 'toast',
      message: '',
      timeout: 5
    },
    warning: {
      mode: 'toast',
      message: '',
      timeout: 5
    },
    info: {
      mode: 'toast',
      message: '',
      timeout: 5
    },
    error: {
      mode: 'dialog',
      message: '',
      timeout: 5
    }
  };

  private _destroy$ = new Subject<void>();

  constructor(private toastr: ToastrService, private matDialog: MatDialog) {}

  get alerts() {
    return this._alerts;
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public success(message: string, options: object = {}): Observable<any> {
    return this.show('success', message, options);
  }

  public info(message: string, options: object = {}): Observable<any> {
    return this.show('info', message, options);
  }

  public error(message: string, options: object = {}): Observable<any> {
    return this.show('error', message, options);
  }

  public warning(message: string, options: object = {}): Observable<any> {
    return this.show('warning', message, options);
  }

  public show(type: string, message: string, options): Observable<any> {

    options = Object.assign({}, this._options[type] || {}, options || {});

    if (options.icon === undefined) {
      options.icon = this.getIconName(type);
    }

    if (!message) {
      message = options.message;
    }

    if (options.mode === 'toast') {
      this.toast(type, message, options);
    } else if (options.mode === 'banner') {
      this.banner(type, message, options);
    } else if (options.mode === 'dialog') {
        this.dialog(type, message, options);
    }

    return Observable.create();
  }

  public toast(type: string, message: string, options): void {

    options.enableHtml = true;
    options.positionClass = options.positionClass || 'toast-bottom-left';
    options.timeOut = (options.timeOut === undefined ? this._options[type].timeout : options.timeOut) * 1000;

    // toastr library removing all custom HTML tags from template
    const icon = options.icon
      ? `<div class="mat-icon material-icons" role="img" aria-hidden="true">${ options.icon }</div>`
      : '';
    const template = `<div class="mat-toast-content">
                        ${ icon }
                        <div class="message">${ message }</div>
                      </div>`;
    this.toastr[type](template, options.title, options);
  }

  public banner(type: string, message: string, options): void {

    options.clear = options.clear === undefined ? true : options.clear;

    if (options.clear) {
      this.clear();
    }

    this._alerts.push({
        type: type,
        msg: message,
        close: this.clear
    });

    const timeout = this._options[type].timeout * 1000;
    if (timeout) {
        setTimeout(() => {
          this.clear();
        }, 10000);
    }
  }

  public dialog(type: string, message: string, options): void {

    const typeMessage = type + message;

    if (this._dialogsMessagesQueue.indexOf(typeMessage) > -1) { return }

    this._dialogsMessagesQueue.push(typeMessage);
    this._dialogs++;

    const dialogRef = this.matDialog.open(FsMessageDialogComponent, {
      /* Waiting for MatDialog to support array of classes like panelClass
      backdropClass: ['fs-message-backdrop',
                      'fs-message-backdrop-' + type,
                      options.backdropClass].filter(function(e){return e}), */
      backdropClass: options.backdropClass,
      data: { type: type, message: message, options: options, icon: this.getIconName(type) },
      panelClass: [ 'fs-message-pane',
                    'fs-message-pane-' + type,
                    options.panelClass].filter(function(e){return e}),
    });

    dialogRef.afterClosed()
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe(result => {
      this._dialogs--;

      const dialogMessageIdx = this._dialogsMessagesQueue.indexOf(typeMessage);
      if (dialogMessageIdx > -1) {
        this._dialogsMessagesQueue.splice(dialogMessageIdx, 1);
      }
    });
  }

  private clear() {
    this._alerts = [];
  }

  private getIconName(type: string): string {
    if (type === 'success') {
      return 'done';
    } else if (type === 'error') {
      return 'report_problem';
    } else if (type === 'info') {
      return 'info';
    } else if (type === 'warning') {
      return 'report_problem';
    }
  }
}
