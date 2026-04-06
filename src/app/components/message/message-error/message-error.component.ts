import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatIcon } from '@angular/material/icon';

import { MessageType } from '../../../enums';
import { FsMessageComponent } from '../message.component';


@Component({
  selector: 'fs-message-error',
  templateUrl: './../message.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatIcon],
})
export class FsMessageErrorComponent extends FsMessageComponent {

  public type = MessageType.Error;
}
