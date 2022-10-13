import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MessageType } from '../../../enums';
import { FsMessageComponent } from '../message.component';


@Component({
  selector: 'fs-message-info',
  templateUrl: './../message.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsMessageInfoComponent extends FsMessageComponent {

  public type = MessageType.Info;
}
