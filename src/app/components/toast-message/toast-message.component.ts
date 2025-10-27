import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Toast, ToastPackage, ToastrService } from 'ngx-toastr';
import { MatIcon } from '@angular/material/icon';

@Component({
    templateUrl: './toast-message.component.html',
    styleUrl: './toast-message.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatIcon],
})
export class ToastMessageComponent extends Toast {

  public icon: string;

  constructor( 
    protected _toastrService: ToastrService,
    public toastPackage: ToastPackage,
  ) {
    super(_toastrService, toastPackage);
    this.icon = (toastPackage.config as any).icon;
  }
}
