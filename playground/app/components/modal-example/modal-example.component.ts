import { Component } from '@angular/core';
import { FsMessage, MessageMode } from '@firestitch/message';

@Component({
  selector: 'modal-example',
  templateUrl: 'modal-example.component.html',
  styleUrls: [ 'modal-example.component.css' ]
})
export class ModalExampleComponent {

  constructor(private FsMessage: FsMessage) { }

  error() {
    this.FsMessage.error('Error message', { mode: MessageMode.Dialog });
  }

  warning() {
    this.FsMessage.warning('Warning message', { mode: MessageMode.Dialog });
  }

  info() {
    this.FsMessage.info('Info message', { mode: MessageMode.Dialog });
  }

  success() {
    this.FsMessage.success('Success message', { mode: MessageMode.Dialog });
  }

  buttons() {
    this.FsMessage.success('Success message',
    {
      mode: MessageMode.Dialog,
      buttons: [
        {
          label: 'Custom Button',
          click: () => {
            alert('Clicked');
          }
        },
        {
          label: 'Another Custom Button',
          click: () => {
            alert('Clicked');
          }
        }
      ]
    });
  }
}
