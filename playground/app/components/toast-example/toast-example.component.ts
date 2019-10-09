import { Component } from '@angular/core';
import { FsMessage, MessageMode } from '@firestitch/message';

@Component({
  selector: 'toast-example',
  templateUrl: 'toast-example.component.html',
  styleUrls: [ 'toast-example.component.scss' ]
})
export class ToastExampleComponent {

  constructor(private FsMessage: FsMessage) { }

  error() {
    this.FsMessage.error('<div class="heading">Heading</div>Error message', { mode: MessageMode.Toast });
  }

  warning() {
    this.FsMessage.warning('<div class="heading">Heading</div>Warning message');
  }

  info() {
    this.FsMessage.info('<div class="heading">Heading</div>Info message');
  }

  success() {
    this.FsMessage.success('<div class="heading">Heading</div>Success message');
  }

  progress() {
    this.FsMessage.info('Progress Bar...', { timeout: 20, progressBar: true, progressAnimation: 'decreasing' });
  }

  icon() {
    this.FsMessage.success('Successfully Sent', { icon: 'send' });
  }
}
