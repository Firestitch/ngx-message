import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FsMessage, MessageMode } from '@firestitch/message';


@Component({
  selector: 'banner-example',
  templateUrl: './banner-example.component.html',
  styleUrls: ['./banner-example.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerExampleComponent {

  constructor(private _message: FsMessage) { }

  public success() {
    this._message.success('Success message', { mode: MessageMode.Banner });
  }

  public info() {
    this._message.info('Info message', { mode: MessageMode.Banner });
  }

  public warning() {
    this._message.warning('Warning message', { mode: MessageMode.Banner });
  }

  public error() {
    this._message.error('Error message', { mode: MessageMode.Banner });
  }

  public closeAll() {
    this._message.hide();
  }
}
