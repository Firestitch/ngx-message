/*
 * Public API Surface of fs-menu
 */

// Modules
export { FsMessageModule } from './app/fs-message.module';

// Services
export { FsMessage } from './app/message.service';
export { MessageMode, MessageType } from './app/enums';


export { FsMessageConfig } from './app/interfaces/fs-message-config';
export { MessageConfig } from './app/interfaces/message-config';
export { MessageBannerConfig } from './app/interfaces/message-banner-config';
export { MessageDialogConfig } from './app/interfaces/message-dialog-config';
export { MessageToastConfig } from './app/interfaces/message-toast-config';

