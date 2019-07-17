import { Injectable, OnDestroy, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material';

import { Observable, Subject } from 'rxjs';

import { FsMessageDialogComponent } from './components/message-dialog/message-dialog.component';
import { takeUntil } from 'rxjs/operators';
import { MessageType, MessageMode } from './enums';
import { FS_MESSAGE_CONFIG } from './injectors/message-config';


@Injectable()
export class FsMessage implements OnDestroy {

  private _dialogs = 0;
  private _dialogsMessagesQueue = [];
  public bannerMessages$ = new Subject();

  private _options = {};

  private _destroy$ = new Subject<void>();

  constructor(private toastr: ToastrService,
              private matDialog: MatDialog,
              @Inject(FS_MESSAGE_CONFIG) private config) {

    this._options = {
      success: {
        mode: MessageMode.Toast,
        message: '',
        timeout: config.toastTimeout
      },
      warning: {
        mode: MessageMode.Toast,
        message: '',
        timeout: config.toastTimeout
      },
      info: {
        mode: MessageMode.Toast,
        message: '',
        timeout: config.toastTimeout
      },
      error: {
        mode: MessageMode.Dialog,
        message: '',
        timeout: config.toastTimeout
      }
    }

  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public success(message: string, options: object = {}): Observable<any> {
    return this.show(MessageType.Success, message, options);
  }

  public info(message: string, options: object = {}): Observable<any> {
    return this.show(MessageType.Info, message, options);
  }

  public error(message: string, options: object = {}): Observable<any> {
    return this.show(MessageType.Error, message, options);
  }

  public warning(message: string, options: object = {}): Observable<any> {
    return this.show(MessageType.Warning, message, options);
  }

  public show(type: string, message: string, options): Observable<any> {

    options = Object.assign({}, this._options[type] || {}, options || {});

    if (!options.title) {
      if (type === MessageType.Error) {
        options.title = 'Attention';
      }

      if (type === MessageType.Info) {
        options.title = 'Information';
      }

      if (type === MessageType.Success) {
        options.title = 'Success';
      }

      if (type === MessageType.Warning) {
        options.title = 'Warning';
      }
    }

    if (options.icon === undefined) {
      options.icon = this.getIconName(type);
    }

    if (!message) {
      message = options.message;
    }

    if (options.mode === MessageMode.Toast) {
      this.toast(type, message, options);

    } else if (options.mode === MessageMode.Banner) {
      this.banner(type, message, options);

    } else if (options.mode === MessageMode.Dialog) {
        this.dialog(type, message, options);
    }

    return Observable.create();
  }

  public toast(type: string, message: string, options): void {

    options.enableHtml = true;
    options.positionClass = options.positionClass || 'toast-bottom-left';
    options.timeOut = (options.timeout === undefined ? this._options[type].timeout : options.timeout) * 1000;

    const icon = options.icon ? `<div class="mat-icon material-icons">${ options.icon }</div>` : '';

    const template = `<div class="mat-toast-content">${icon}<div class="message">${message}</div></div>`;

    this.toastr[type](template, '', options);
  }

  public banner(type: string, message: string, options): void {

    const timeout = this._options[type].timeout * 1000;

    this.bannerMessages$.next({
        type: type,
        msg: message,
        timeout: timeout
    });
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
      disableClose: options.buttons,
      data: { type: type, message: message, options: options, icon: this.getIconName(type) },
      panelClass: [ 'fs-message-pane',
                    'fs-message-pane-' + type,
                    options.panelClass].filter(function(e) { return e }),
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

  public getIconName(type: string): string {
    if (type === MessageType.Success) {
      return 'done';
    } else if (type === MessageType.Error) {
      return 'report_problem';
    } else if (type === MessageType.Info) {
      return 'info';
    } else if (type === MessageType.Warning) {
      return 'report_problem';
    }
  }
}
