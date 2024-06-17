import { Injectable } from '@angular/core';


import { Observable, of, throwError } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http';
import { FsMessage } from './message.service';
import { MessageDialogConfig } from '../interfaces';
import { MessageMode } from '../enums';


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

    if (e.error?.message) {
      return this.showErrorMessage(e.error.message, e.error.exception);
    }

    let message;
    const config: MessageDialogConfig = {};

    if (e.error?.text) {
      e.error.text = e.error.text.trim().replace(/(^<br[^>]*>|<br[^>]*>$)/ig, '');
      message = `<pre>${e.error.text}</pre>`;
      config.width = '90%';
    } else if (typeof e.error === 'string') {
      message = `<pre>${e.error}</pre>`;
      config.width = '90%';
    } else {
      message = 'Please check your network connection and try again.';
      config.title = 'Poor Connection';
      config.mode = MessageMode.Toast;

      if(e.statusText) {
        console.error(e.statusText);
      }
    }

    return this._message.error(message, config);
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
