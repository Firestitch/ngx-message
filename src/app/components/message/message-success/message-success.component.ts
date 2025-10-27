import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MessageType } from '../../../enums';
import { FsMessageComponent } from '../message.component';
import { MatIcon } from '@angular/material/icon';


@Component({
    selector: 'fs-message-success',
    templateUrl: './../message.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatIcon],
})
export class FsMessageSuccessComponent extends FsMessageComponent {

  public type = MessageType.Success;
}
