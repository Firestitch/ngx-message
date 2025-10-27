import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { MessageType } from '../../enums';
import { FsMessage } from '../../services/message.service';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'fs-message',
    templateUrl: './message.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatIcon],
})
export class FsMessageComponent implements OnInit {

  @Input() public type = MessageType.Info;
  @Input() public message: string;

  @Input('fsType')
  public set fsType(value) {
    this.type = value;
  }

  @Input('fsMessage')
  public set fsMessage(value) {
    this.message = value;
  }

  public icon = 'info';

  constructor(private _fsMessage: FsMessage) { }

  public ngOnInit() {
    this.icon = this._fsMessage.getIconName(this.type);
  }
}
