import { Component, IterableDiffers, DoCheck } from '@angular/core';
import { FsMessage } from '../../message.service';

@Component({
  selector: 'fs-messages',
  template: `<fs-message *ngFor="let item of messages" [fsType]="item.type" [fsMessage]="item.msg"></fs-message>`
})
export class FsMessagesComponent implements DoCheck {

  public messages = [];
  private iterableDiffer;

  constructor(
    private _fsMessage: FsMessage,
    private _iterableDiffers: IterableDiffers
  ) {
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }

  public ngDoCheck() {
    const changes = this.iterableDiffer.diff(this._fsMessage.alerts);
    if (changes) {
      this.messages = this._fsMessage.alerts;
    } else {
      this.messages = [];
    }
  }
}
