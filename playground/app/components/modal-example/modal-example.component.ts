import { Component } from '@angular/core';
import { FsMessage, MessageMode } from '@firestitch/message';
import { of, throwError } from 'rxjs';

@Component({
  selector: 'modal-example',
  templateUrl: 'modal-example.component.html',
  styleUrls: [ 'modal-example.component.css' ]
})
export class ModalExampleComponent {

  constructor(private FsMessage: FsMessage) { }

  error() {
    this.FsMessage.error('Error message<br><br>Custom HTML', { mode: MessageMode.Dialog });
  }

  warning() {
    this.FsMessage.warning('Warning message<br><br>Custom HTML', { mode: MessageMode.Dialog });
  }

  info() {
    this.FsMessage.info('Info message<br><br>Custom HTML', { mode: MessageMode.Dialog });
  }

  success() {
    this.FsMessage.success('Success message<br><br>Custom HTML', { mode: MessageMode.Dialog });
  }

  buttons() {
    this.FsMessage.success('Success message',
    {
      mode: MessageMode.Dialog,
      buttons: [
        {
          label: 'Ok',
          color: 'primary',
          click: () => {
            return of(true);
          }
        },
        {
          label: 'Close',
          click: () => {
            alert('Close');
          }
        },
        {
          label: 'Keep Open',
          click: () => {
            alert('Keep Open');
            return throwError(null);
          }
        }
      ]
    });
  }

  closeAll() {
    this.FsMessage.hide();
  }
}
