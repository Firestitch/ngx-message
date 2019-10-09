import { MessageMode } from '../enums';

export interface MessageConfig {
  mode?: MessageMode,
  icon?: string,
  message?: string,
  title?: string
}
