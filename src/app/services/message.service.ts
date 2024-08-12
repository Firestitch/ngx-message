import { Inject, Injectable, OnDestroy } from '@angular/core';

import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';

import { Observable, Subject, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TOAST_CONFIG, ToastToken, ToastrService } from 'ngx-toastr';

import { FsMessageDialogComponent } from '../components/message-dialog/message-dialog.component';
import { MessageConfig, MessageMode, MessageType } from '../enums';
import { FS_MESSAGE_CONFIG } from '../injectors/message-config';
import { FsMessageConfig } from '../interfaces';
import { MessageBannerConfig } from '../interfaces/message-banner-config';
import { MessageDialogConfig } from '../interfaces/message-dialog-config';
import { MessageToastConfig } from '../interfaces/message-toast-config';


@Injectable({
  providedIn: 'root',
})
export class FsMessage implements OnDestroy {

  private _dialogs = 0;
  private _dialogsMessagesQueue = [];
  private _destroy$ = new Subject<void>();
  private _bannerMessages$ = new Subject();

  constructor(
    private _toastr: ToastrService,
    private _matDialog: MatDialog,
    @Inject(TOAST_CONFIG) private _toastToken: ToastToken,
    @Inject(FS_MESSAGE_CONFIG) private _config: FsMessageConfig,
  ) { }

  public success(message?: string, options: MessageConfig = {}): Observable<any> {
    return this.show(MessageType.Success, message, { title: 'Success', mode: this._config.successMode, ...options });
  }

  public info(message?: string, options: MessageConfig = {}): Observable<any> {
    return this.show(MessageType.Info, message, { title: 'Information', mode: this._config.infoMode, ...options });
  }

  public error(message?: string, options: MessageConfig = {}): Observable<any> {
    return this.show(MessageType.Error, message, { title: 'Attention', mode: this._config.errorMode, ...options });
  }

  public warning(message?: string, options: MessageConfig = {}): Observable<any> {
    return this.show(MessageType.Warning, message, { title: 'Warning', mode: this._config.warningMode, ...options });
  }

  public show(type: string, message: string, options: MessageConfig): Observable<any> {
    if(!message && this._config.defaultMessage) {
      message = this._config.defaultMessage[type];
    }

    options = options || {};
    if (options.icon === undefined) {
      options.icon = this.getIconName(type);
    }

    switch (options.mode) {
      case MessageMode.Toast:
        this.toast(type, message, options);
        break;
      case MessageMode.Banner:
        this.banner(type, message, options);
        break;
      case MessageMode.Dialog:
        return this.dialog(type, message, options);
    }

    return of();
  }

  public hide(): void {
    this._toastr.clear();
    this._bannerMessages$.next();
    this._matDialog.closeAll();
  }

  public toast(type: string, message: string, options: MessageToastConfig): void {
    const opts: any = options;
    opts.enableHtml = true;
    opts.positionClass = options.positionClass || this._toastToken.config.positionClass || 'toast-bottom-left';
    opts.timeOut = (options.timeout || this._config.toastTimeout) * 1000;

    const icon = opts.icon ? `<div class="mat-icon material-icons">${ opts.icon }</div>` : '';
    const template = `<div class="mat-toast-content">${icon}<div class="message">${message}</div></div>`;

    this._toastr[type](template, '', opts);
  }

  public banner(type: string, message: string, options: MessageBannerConfig): void {
    this._bannerMessages$.next({
      type: type,
      msg: message,
      timeout: (options.timeout || this._config.bannerTimeout || 5) * 1000,
    });
  }

  public dialog(type: string, message: string, options: MessageDialogConfig): Observable<any> {
    const typeMessage = type + message;

    if (this._dialogsMessagesQueue.indexOf(typeMessage) > -1) {
      return of(true);
    }

    this._dialogsMessagesQueue.push(typeMessage);
    this._dialogs++;

    const activeElement: any = document.activeElement;

    if(activeElement?.blur) {
      activeElement.blur();
    }

    const dialogRef = this._matDialog.open(FsMessageDialogComponent, {
      /* Waiting for MatDialog to support array of classes like panelClass
      backdropClass: ['fs-message-backdrop',
                      'fs-message-backdrop-' + type,
                      options.backdropClass], */
      backdropClass: options.backdropClass,
      width: options.width || this._config.dialogWidth,
      data: { type: type, message: message, options: options, icon: this.getIconName(type) },
      panelClass: [
        'fs-message-pane',
        `fs-message-pane-${  type}`,
        options.panelClass,
      ],
    });

    dialogRef.afterClosed()
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe(() => {
        this._dialogs--;

        const dialogMessageIdx = this._dialogsMessagesQueue.indexOf(typeMessage);
        if (dialogMessageIdx > -1) {
          this._dialogsMessagesQueue.splice(dialogMessageIdx, 1);
        }
      });

    return dialogRef.afterClosed();
  }

  public getIconName(type: string): string {
    switch (type) {
      case MessageType.Success:
        return 'done';
      case MessageType.Error:
        return 'report_problem';
      case MessageType.Info:
        return 'info';
      case MessageType.Warning:
        return 'report_problem';
    }
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public get bannerMessages$(): Observable<any> {
    return this._bannerMessages$.asObservable();
  }

}
