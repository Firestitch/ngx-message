import { Component } from '@angular/core';
import { FsMessage } from '../../../../src/fs-message.service';

@Component({
  selector: 'toast-example',
  templateUrl: 'toast-example.component.html',
  styleUrls: [ 'toast-example.component.css' ]
})
export class ToastExampleComponent {

  constructor(private FsMessage: FsMessage) { }

  error() {
    this.FsMessage.error('Error message<br>HTML', { mode: 'toast', enableHtml: true });
  }

  warning() {
    this.FsMessage.warning('Warning message');
  }

  info() {
    this.FsMessage.info('Info message');
  }

  success() {
    this.FsMessage.success('Success message');
  }

  progress() {
    this.FsMessage.info('Progress Bar...', { timeOut: 5, progressBar: true, progressAnimation: 'decreasing' });
  }
}
