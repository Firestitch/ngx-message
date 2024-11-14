import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MessageType } from '../../../enums';
import { FsMessageComponent } from '../message.component';


@Component({
  selector: 'fs-message-success',
  templateUrl: './../message.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsMessageSuccessComponent extends FsMessageComponent {

  public type = MessageType.Success;
}
