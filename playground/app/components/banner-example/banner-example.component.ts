import { Component } from '@angular/core';
import { FsMessage } from '@firestitch/message';

@Component({
  selector: 'banner-example',
  templateUrl: 'banner-example.component.html',
  styleUrls: [ 'banner-example.component.css' ]
})
export class BannerExampleComponent {

  constructor(private FsMessage: FsMessage) { }

  success() {
    this.FsMessage.success('Success message', { mode: 'banner' });
  }

  info() {
    this.FsMessage.info('Info message', { mode: 'banner' });
  }

  warning() {
    this.FsMessage.warning('Warning message', { mode: 'banner' });
  }

  error() {
    this.FsMessage.error('Error message', { mode: 'banner' });
  }
}
