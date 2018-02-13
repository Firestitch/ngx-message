import { Component } from '@angular/core';
import { FsMessage } from './../../../../src/fsmessage.service';

@Component({
  selector: 'modal-example',
  templateUrl: 'modal-example.component.html',
  styleUrls: [ 'modal-example.component.css' ]
})
export class ModalExampleComponent {

  constructor(private FsMessage: FsMessage) { }

  error() {
    this.FsMessage.error('Error message', { mode: 'modal' });
  }

  warning() {
    this.FsMessage.warning('Warning message', { mode: 'modal', title: 'Warning' });
  }

  info() {
    this.FsMessage.info('Info message', { mode: 'modal', title: 'Information' });
  }

  success() {
    this.FsMessage.success('Success message', { mode: 'modal', title: 'Success' });
  }
}
