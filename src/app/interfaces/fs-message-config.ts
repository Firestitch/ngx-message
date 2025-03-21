import { MessageMode } from '../enums';

export interface FsMessageConfig {
  toastTimeout?: number,
  bannerTimeout?: number,
  dialogWidth?: string,
  successMode?: MessageMode,
  errorMode?: MessageMode,
  infoMode?: MessageMode,
  warningMode?: MessageMode,
  positionClass?: string,
  defaultMessage?: {
    success?: string,
    wanring?: string,
    error?: string,
    info?: string,
  }
}
