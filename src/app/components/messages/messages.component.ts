import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { remove } from 'lodash-es';
import { FsMessage } from '../../message.service';


@Component({
  selector: 'fs-messages',
  template: `<fs-message *ngFor="let item of messages" [fsType]="item.type" [fsMessage]="item.msg"></fs-message>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsMessagesComponent implements OnInit {

  public messages = [];

  constructor(
    private _fsMessage: FsMessage,
    private _cdRef: ChangeDetectorRef,
  ) {}

  public ngOnInit () {
    this._fsMessage.bannerMessages$
    .subscribe((message: any) => {
      this.messages.push(message);

      this._cdRef.markForCheck();

      if (message.timeout) {
        setTimeout(() => {
          remove(this.messages, (item) => {
            return item === message;
          });

          this._cdRef.markForCheck();
        }, message.timeout);
      }
    })
  }
}
