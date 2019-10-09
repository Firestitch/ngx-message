import { MessageConfig } from './message-config';

export interface MessageDialogConfig extends MessageConfig {
  buttons?: { label: string, click: Function }[],
  backdropClass?: string,
  panelClass?: string,
  width?: string
}
