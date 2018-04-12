import { Component, IterableDiffers, DoCheck } from '@angular/core';
import { FsMessage } from './../../fsmessage.service';

@Component({
  selector: 'fs-messages',
  template: `<fs-message *ngFor="let item of messages" [fsType]="item.type" [fsMessage]="item.msg"></fs-message>`
})
export class FsMessagesComponent implements DoCheck {

  private iterableDiffer;
  messages = [];

  constructor(private fsMessage: FsMessage, private _iterableDiffers: IterableDiffers) {
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }

  ngDoCheck() {
    const changes = this.iterableDiffer.diff(this.fsMessage.alerts);
    if (changes) {
      this.messages = this.fsMessage.alerts;
    } else {
      this.messages = [];
    }
  }
}
