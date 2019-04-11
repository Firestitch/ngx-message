import { Component, OnInit } from '@angular/core';
import { FsMessage } from '../../message.service';
import { remove } from 'lodash-es';


@Component({
  selector: 'fs-messages',
  template: `<fs-message *ngFor="let item of messages" [fsType]="item.type" [fsMessage]="item.msg"></fs-message>`
})
export class FsMessagesComponent implements OnInit {

  public messages = [];

  constructor(
    private _fsMessage: FsMessage) {}

  public ngOnInit () {
    this._fsMessage.bannerMessages$
    .subscribe((message: any) => {
      this.messages.push(message);

      if (message.timeout) {
        setTimeout(() => {
          remove(this.messages, (item) => {
            return item === message;
          });
        }, message.timeout);
      }
    })
  }
}
