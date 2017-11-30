import { Component, IterableDiffers, OnInit, DoCheck } from '@angular/core';
import { FsMessage } from './fsmessage.service';

@Component({
  selector: 'fs-messages',
  template: `<fs-message *ngFor="let item of messages" [fsType]="item.type" [fsMessage]="item.msg"></fs-message>`
})
export class FsMessagesComponent implements OnInit, DoCheck {

  private iterableDiffer;
  messages = [];

  constructor(private FsMessage: FsMessage, private _iterableDiffers: IterableDiffers) {
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }

  ngOnInit() {
  }

  ngDoCheck() {
    const changes = this.iterableDiffer.diff(this.FsMessage.alerts);
    if (changes) {
      this.messages = this.FsMessage.alerts;
    }else {
      this.messages = [];
    }
  }
}
