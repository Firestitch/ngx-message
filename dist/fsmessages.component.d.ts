import { IterableDiffers, OnInit, DoCheck } from '@angular/core';
import { FsMessage } from './fsmessage.service';
export declare class FsMessagesComponent implements OnInit, DoCheck {
    private FsMessage;
    private _iterableDiffers;
    private iterableDiffer;
    messages: any[];
    constructor(FsMessage: FsMessage, _iterableDiffers: IterableDiffers);
    ngOnInit(): void;
    ngDoCheck(): void;
}
