/*
 * Public API Surface of fs-menu
 */

// Modules
export { FsMessageModule } from './app/fs-message.module';

// Components
export { FsMessagesComponent } from './app/components/messages/messages.component';
export { FsMessageComponent } from './app/components/message/message.component';

// Services
export { FsMessage } from './app/message.service';
export { MessageMode, MessageType, MessageConfig } from './app/enums';

export { FsMessageConfig } from './app/interfaces/fs-message-config';
export { MessageBannerConfig } from './app/interfaces/message-banner-config';
export { MessageDialogConfig } from './app/interfaces/message-dialog-config';
export { MessageToastConfig } from './app/interfaces/message-toast-config';

export { 
  FsMessageInfoComponent,
  FsMessageWarningComponent,
  FsMessageSuccessComponent,
  FsMessageErrorComponent,
} from './app/components';
