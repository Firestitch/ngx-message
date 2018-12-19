import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material';
import { FsMessageDialogComponent } from './components/fs-message-dialog/fs-message-dialog.component';

@Injectable()
export class FsMessage {

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

  constructor(private toastr: ToastrService, private matDialog: MatDialog) {}

  get alerts() {
    return this._alerts;
  }

  success(message: string, options: object = {}): Observable<any> {
    return this.show('success', message, options);
  }

  info(message: string, options: object = {}): Observable<any> {
    return this.show('info', message, options);
  }

  error(message: string, options: object = {}): Observable<any> {
    return this.show('error', message, options);
  }

  warning(message: string, options: object = {}): Observable<any> {
    return this.show('warning', message, options);
  }

  show(type: string, message: string, options): Observable<any> {

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

  toast(type: string, message: string, options): void {

    options.enableHtml = true;
    options.positionClass = options.positionClass || 'toast-bottom-left';
    options.timeOut = (options.timeOut === undefined ? this._options[type].timeout : options.timeOut) * 1000;

    // toastr library removing all custom HTML tags from template
    const icon = options.icon ? `<div class="mat-icon material-icons" role="img" aria-hidden="true">${ options.icon }</div>` : '';
    const template = `<div class="mat-toast-content">
                        ${ icon }
                        <div class="message">${ message }</div>
                      </div>`;
    this.toastr[type](template, options.title, options);
  }

  banner(type: string, message: string, options): void {

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

  dialog(type: string, message: string, options): void {

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

    dialogRef.afterClosed().subscribe(result => {
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
}
