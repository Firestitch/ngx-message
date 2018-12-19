import { Component } from '@angular/core';
import { FsMessage } from '../../../../src/fs-message.service';

@Component({
  selector: 'modal-example',
  templateUrl: 'modal-example.component.html',
  styleUrls: [ 'modal-example.component.css' ]
})
export class ModalExampleComponent {

  constructor(private FsMessage: FsMessage) { }

  error() {
    this.FsMessage.error('Error message', { mode: 'dialog' });
  }

  warning() {
    this.FsMessage.warning('Warning message', { mode: 'dialog', title: 'Warning' });
  }

  info() {
    this.FsMessage.info('Info message', { mode: 'dialog', title: 'Information' });
  }

  success() {
    this.FsMessage.success('Success message', { mode: 'dialog', title: 'Success' });
  }
}
