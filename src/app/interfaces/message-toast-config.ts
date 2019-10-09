import { MessageConfig } from './message-config';

export interface MessageToastConfig extends MessageConfig {
  timeout?: number,
  progressBar?: boolean,
  progressAnimation?: 'decreasing' | 'increasing',
  positionClass?: string
}
