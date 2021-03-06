import { ThemePalette } from '@angular/material/core';
import { Observable } from 'rxjs';

import { BaseMessageConfig } from './message-config';


export interface MessageDialogConfig extends BaseMessageConfig {
  buttons?: {
    label: string,
    click: () => Observable<any> | void,
    color?: ThemePalette,
  }[],
  backdropClass?: string,
  panelClass?: string,
  width?: string
}
