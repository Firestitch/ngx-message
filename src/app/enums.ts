import { MessageBannerConfig, MessageDialogConfig, MessageToastConfig } from './interfaces';

export enum MessageType {
  Success = 'success',
  Info = 'info',
  Error = 'error',
  Warning = 'warning'
}

export enum MessageMode {
  Dialog = 'dialog',
  Toast = 'toast',
  Banner = 'banner'
}

export type MessageConfig = MessageDialogConfig | MessageToastConfig | MessageBannerConfig;
