import { IterableDiffers, DoCheck } from '@angular/core';
import { FsMessage } from './../../fsmessage.service';
export declare class FsMessagesComponent implements DoCheck {
    private fsMessage;
    private _iterableDiffers;
    private iterableDiffer;
    messages: any[];
    constructor(fsMessage: FsMessage, _iterableDiffers: IterableDiffers);
    ngDoCheck(): void;
}
