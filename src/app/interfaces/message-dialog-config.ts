import { BaseMessageConfig } from './message-config';
import { ThemePalette } from '@angular/material/core';

export interface MessageDialogConfig extends BaseMessageConfig {
  buttons?: { label: string, click: Function, color?: ThemePalette }[],
  backdropClass?: string,
  panelClass?: string,
  width?: string
}
