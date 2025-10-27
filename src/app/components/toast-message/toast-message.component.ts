import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';

import { MatIcon } from '@angular/material/icon';

import { Toast, ToastPackage } from 'ngx-toastr';

@Component({
  templateUrl: './toast-message.component.html',
  styleUrl: './toast-message.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatIcon],
})
export class ToastMessageComponent extends Toast implements OnInit  {
  
  public icon: string;
  private _toastPackage = inject(ToastPackage);

  public ngOnInit(): void {
    this.icon = (this._toastPackage.config as any).icon;
  }
}
