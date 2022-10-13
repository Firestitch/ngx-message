import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MessageType } from '../../../enums';
import { FsMessageComponent } from '../message.component';


@Component({
  selector: 'fs-message-error',
  templateUrl: './../message.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsMessageErrorComponent extends FsMessageComponent {

  public type = MessageType.Error;
}
