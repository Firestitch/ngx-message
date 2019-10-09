import { Component } from '@angular/core';
import { FsMessage, MessageMode } from '@firestitch/message';

@Component({
  selector: 'banner-example',
  templateUrl: 'banner-example.component.html',
  styleUrls: [ 'banner-example.component.css' ]
})
export class BannerExampleComponent {

  constructor(private FsMessage: FsMessage) { }

  success() {
    this.FsMessage.success('Success message', { mode: MessageMode.Banner });
  }

  info() {
    this.FsMessage.info('Info message', { mode: MessageMode.Banner });
  }

  warning() {
    this.FsMessage.warning('Warning message', { mode: MessageMode.Banner });
  }

  error() {
    this.FsMessage.error('Error message', { mode: MessageMode.Banner });
  }
}
