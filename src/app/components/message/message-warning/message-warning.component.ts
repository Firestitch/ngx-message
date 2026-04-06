import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatIcon } from '@angular/material/icon';

import { MessageType } from '../../../enums';
import { FsMessageComponent } from '../message.component';


@Component({
  selector: 'fs-message-warning',
  templateUrl: './../message.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatIcon],
})
export class FsMessageWarningComponent extends FsMessageComponent {

  public type = MessageType.Warning;
}
