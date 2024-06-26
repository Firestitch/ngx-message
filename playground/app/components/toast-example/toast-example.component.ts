import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FsMessage, MessageMode } from '@firestitch/message';

@Component({
  selector: 'toast-example',
  templateUrl: './toast-example.component.html',
  styleUrls: ['./toast-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastExampleComponent {

  constructor(private _message: FsMessage) { }

  public error() {
    this._message.error('<div class="heading">Heading</div>Error message', { mode: MessageMode.Toast });
  }

  public warning() {
    this._message.warning('<div class="heading">Heading</div>Warning message');
  }

  public info() {
    this._message.info('<div class="heading">Heading</div>Info message');
  }

  public success() {
    this._message.success('<div class="heading">Heading</div>Success message');
  }

  public progress() {
    this._message.info('Progress Bar...', { timeout: 120, progressBar: true, progressAnimation: 'decreasing' });
  }

  public icon() {
    this._message.success('Successfully Sent', { icon: 'send' });
  }

  public closeAll() {
    this._message.hide();
  }
}
