import { Injectable, OnDestroy, Inject } from '@angular/core';
import { ToastrService, TOAST_CONFIG, ToastToken } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';

import { Observable, Subject, of } from 'rxjs';

import { FsMessageDialogComponent } from './components/message-dialog/message-dialog.component';
import { takeUntil } from 'rxjs/operators';
import { MessageType, MessageMode } from './enums';
import { FS_MESSAGE_CONFIG } from './injectors/message-config';
import { FsMessageConfig } from './interfaces';
import { MessageDialogConfig } from './interfaces/message-dialog-config';
import { MessageToastConfig } from './interfaces/message-toast-config';
import { MessageBannerConfig } from './interfaces/message-banner-config';


@Injectable()
export class FsMessage implements OnDestroy {

  private _dialogs = 0;
  private _dialogsMessagesQueue = [];
  public bannerMessages$ = new Subject();

  private _destroy$ = new Subject<void>();

  constructor(private toastr: ToastrService,
              private matDialog: MatDialog,
              @Inject(TOAST_CONFIG) private _toastToken: ToastToken,
              @Inject(FS_MESSAGE_CONFIG) private _config: FsMessageConfig) {}

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public success(message: string, options: MessageDialogConfig | MessageToastConfig | MessageBannerConfig = {}): Observable<any> {
    return this.show(MessageType.Success, message, Object.assign({ title: 'Success', mode: this._config.successMode }, options));
  }

  public info(message: string, options: MessageDialogConfig | MessageToastConfig | MessageBannerConfig = {}): Observable<any> {
    return this.show(MessageType.Info, message, Object.assign({ title: 'Information', mode: this._config.infoMode }, options));
  }

  public error(message: string, options: MessageDialogConfig | MessageToastConfig | MessageBannerConfig = {}): Observable<any> {
    return this.show(MessageType.Error, message, Object.assign({ title: 'Attention', mode: this._config.errorMode }, options));
  }

  public warning(message: string, options: MessageDialogConfig | MessageToastConfig | MessageBannerConfig = {}): Observable<any> {
    return this.show(MessageType.Warning, message, Object.assign({ title: 'Warning', mode: this._config.warningMode }, options));
  }

  public show(type: string, message: string, options: MessageDialogConfig | MessageToastConfig | MessageBannerConfig): Observable<any> {

    options = options || {};
    if (options.icon === undefined) {
      options.icon = this.getIconName(type);
    }

    if (options.mode === MessageMode.Toast) {
      this.toast(type, message, options);

    } else if (options.mode === MessageMode.Banner) {
      this.banner(type, message, options);

    } else if (options.mode === MessageMode.Dialog) {
      this.dialog(type, message, options);
    }

    return of();
  }

  public hide(): void {
    this.toastr.clear();
    this.bannerMessages$.next();
    this.matDialog.closeAll();
  }

  public toast(type: string, message: string, options: MessageToastConfig): void {

    const opts: any = options;
    opts.enableHtml = true;
    opts.positionClass = options.positionClass || this._toastToken.config.positionClass || 'toast-bottom-left';
    opts.timeOut = (options.timeout || this._config.toastTimeout) * 1000;

    const icon = opts.icon ? `<div class="mat-icon material-icons">${ opts.icon }</div>` : '';

    const template = `<div class="mat-toast-content">${icon}<div class="message">${message}</div></div>`;

    this.toastr[type](template, '', opts);
  }

  public banner(type: string, message: string, options: MessageBannerConfig): void {

    this.bannerMessages$.next({
        type: type,
        msg: message,
        timeout: (options.timeout || this._config.bannerTimeout || 5) * 1000
    });
  }

  public dialog(type: string, message: string, options: MessageDialogConfig): void {

    const typeMessage = type + message;

    if (this._dialogsMessagesQueue.indexOf(typeMessage) > -1) {
      return
    }

    this._dialogsMessagesQueue.push(typeMessage);
    this._dialogs++;

    const dialogRef = this.matDialog.open(FsMessageDialogComponent, {
      /* Waiting for MatDialog to support array of classes like panelClass
      backdropClass: ['fs-message-backdrop',
                      'fs-message-backdrop-' + type,
                      options.backdropClass], */
      backdropClass: options.backdropClass,
      disableClose: !!options.buttons,
      width: options.width || this._config.dialogWidth,
      data: { type: type, message: message, options: options, icon: this.getIconName(type) },
      panelClass: [ 'fs-message-pane',
                    'fs-message-pane-' + type,
                    options.panelClass],
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
