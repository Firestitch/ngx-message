import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FsMessageSuccessComponent } from '../../../../src/app/components/message/message-success/message-success.component';
import { FsMessageWarningComponent } from '../../../../src/app/components/message/message-warning/message-warning.component';
import { FsMessageInfoComponent } from '../../../../src/app/components/message/message-info/message-info.component';
import { FsMessageErrorComponent } from '../../../../src/app/components/message/message-error/message-error.component';

@Component({
    selector: 'banner-inline-example',
    templateUrl: './banner-inline-example.component.html',
    styleUrls: ['./banner-inline-example.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FsMessageSuccessComponent,
        FsMessageWarningComponent,
        FsMessageInfoComponent,
        FsMessageErrorComponent,
    ],
})
export class BannerInlineExampleComponent {
}
