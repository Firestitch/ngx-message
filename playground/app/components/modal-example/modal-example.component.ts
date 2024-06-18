import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FsMessage, MessageMode } from '@firestitch/message';

import { of, throwError } from 'rxjs';

@Component({
  selector: 'modal-example',
  templateUrl: './modal-example.component.html',
  styleUrls: ['./modal-example.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalExampleComponent {

  constructor(private _message: FsMessage) { }

  public error() {
    this._message.error('Error message<br><br>Custom HTML', { mode: MessageMode.Dialog });
  }

  public warning() {
    this._message.warning('Warning message<br><br>Custom HTML', { mode: MessageMode.Dialog });
  }

  public info() {
    this._message.info('Info message<br><br>Custom HTML', { mode: MessageMode.Dialog });
  }

  public success() {
    this._message.success('Success message<br><br>Custom HTML', { mode: MessageMode.Dialog });
  }

  public buttons() {
    this._message.success('Success message',
      {
        mode: MessageMode.Dialog,
        buttons: [
          {
            label: 'Ok',
            color: 'primary',
            click: () => {
              return of(true);
            },
          },
          {
            label: 'Close',
            click: () => {
              alert('Close');
            },
          },
          {
            label: 'Keep Open',
            click: () => {
              alert('Keep Open');

              return throwError(null);
            },
          },
        ],
      });
  }

  public closeAll() {
    this._message.hide();
  }
}
