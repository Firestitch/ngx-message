import { MessageConfig } from './message-config';
import { ThemePalette } from '@angular/material/core';

export interface MessageDialogConfig extends MessageConfig {
  buttons?: { label: string, click: Function, color?: ThemePalette }[],
  backdropClass?: string,
  panelClass?: string,
  width?: string
}
