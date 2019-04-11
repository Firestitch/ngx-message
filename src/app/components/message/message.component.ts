import { Component, OnInit, Input } from '@angular/core';
import { MessageType } from '../../enums';
import { FsMessage } from '../../message.service';

@Component({
  selector: 'fs-message',
  templateUrl: './message.component.html'
})
export class FsMessageComponent implements OnInit {

  @Input() public type = MessageType.Info;
  @Input() public message: string;

  @Input('fsType')
  set fsType(value) {
    this.type = value;
  }

  @Input('fsMessage')
  set fsMessage(value) {
    this.message = value;
  }

  public icon = 'info';

  constructor(private _fsMessage: FsMessage) { }

  public ngOnInit() {
    this.icon = this._fsMessage.getIconName(this.type);
  }
}
