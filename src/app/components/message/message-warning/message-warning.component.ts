import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MessageType } from '../../../enums';
import { FsMessageComponent } from '../message.component';


@Component({
  selector: 'fs-message-warning',
  templateUrl: './../message.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsMessageWarningComponent extends FsMessageComponent {

  public type = MessageType.Warning;
}
