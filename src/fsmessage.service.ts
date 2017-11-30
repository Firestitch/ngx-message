import { Injectable } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material';
import { FsMessageDialogComponent } from './fsmessagedialog.component';

@Injectable()
export class FsMessage {

  private _modals = 0;

  private _alerts = [];

  private _options = {
    success: {
      mode: 'toast',
      message: '',
      toastHideDelay: 5,
      bannerHideDelay: 10
    },
    warning: {
      mode: 'toast',
      message: '',
      toastHideDelay: 5,
      bannerHideDelay: 10
    },
    info: {
      mode: 'toast',
      message: '',
      toastHideDelay: 5,
      bannerHideDelay: 10
    },
    error: {
      mode: 'modal',
      message: '',
      toastHideDelay: 5,
      bannerHideDelay: 10
    }
  };

  constructor(private toastr: ToastrService, private dialog: MatDialog) {}

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

  private show(type: string, message: string, options): Observable<any> {

      options = Object.assign({}, this._options[type] || {}, options || {});

      if(options.icon === undefined) {
        options.icon = this.getIconName(type);
      }

      if (!message) {
        message = options.message;
      }

      if (options.mode === 'toast') {
        this.toast(type, message, options);
      } else if (options.mode === 'banner') {
        this.banner(type, message, options);
      } else if (options.mode === 'modal') {
          this.modal(type, message, options);
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
    options.timeOut = (options.timeOut === undefined ? this._options[type].toastHideDelay : options.timeOut) * 1000;

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

    const timeout = this._options[type].bannerHideDelay * 1000;
    if (timeout) {
        setTimeout(() => {
          this.clear();
        }, 10000);
    }
  }

  modal(type: string, message: string, options): void {

    this._modals++;
    const dialogRef = this.dialog.open(FsMessageDialogComponent, {
      disableClose: true,
      data: { type: type, message: message, options: options, icon: this.getIconName(type) }
    });

    dialogRef.afterClosed().subscribe(result => {
      this._modals--;
    });
  }

  private clear() {
    this._alerts = [];
  }
}
