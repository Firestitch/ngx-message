import { Injectable } from '@angular/core';


import { Observable, of, throwError } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http';

import { MessageMode } from '../enums';
import { MessageDialogConfig } from '../interfaces';

import { FsMessage } from './message.service';


@Injectable({
  providedIn: 'root',
})
export class FsErrorMessage {

  constructor(
    private _message: FsMessage,
  ) { }

  public showErrorMessage(message: string, exception?: any): Observable<any> {
    const config: MessageDialogConfig = {};

    if (message.length > 100) {
      config.width = '80%';
    }

    if (exception) {
      config.buttons = [
        {
          click: () => {
            return of(true);
          },
          label: 'Ok',
        },
        {
          click: () => {
            this._message.info(`<pre>${exception.trace.join('<br>')}</pre>`,
              {
                title: 'Debug Message',
                width: '90%',
                mode: MessageMode.Dialog,
              });

            return throwError(null);
          },
          label: 'View Debug Message',
          color: 'warn',
        },
      ];
    }

    return this._message.error(message, config);
  }

  public processHttpErrorResponse(e: HttpErrorResponse): Observable<any> {
    if (e.status > 500 || !e.status) {
      return of(true);
    }

    const exception = e.error?.exception;
    const reason = e.error?.data?.reason;
    const ignore = ['Framework\\Db\\Exception\\DbConnectionException']
      .some((cls) => cls.indexOf(exception?.class) !== -1);

    if (e.error?.message && !ignore) {
      return this.showErrorMessage(e.error.message, exception);
    }

    if(e.headers.has('X-System-Mode-Debug')) {
      const message = typeof e.error === 'string' ? e.error : (e.error?.text || e.statusText);

      return this.showErrorMessage(message);
    }

    if(e.error.text) {
      console.error(e.error.text, reason);
    } else if (typeof e.error === 'string') {
      console.error(e.error, reason);
    } else if(e.statusText) {
      console.error(e.statusText, reason);
    }

    return this._message
      .error('Please check your network connection and try again.', { mode: MessageMode.Toast });
  }

  public showError(message: string, config: MessageDialogConfig = {}): Observable<any> {
    config = {
      title: 'Attention',
      width: '400px',
      panelClass: 'system-error-message',
      buttons: [
        {
          click: () => {
            return of(true);
          },
          label: 'Ok',
        },
      ],
      ...config,
    };

    return this._message.error(`<pre>${message}</pre>`, config);
  }

}
