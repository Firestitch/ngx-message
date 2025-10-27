import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { remove } from 'lodash-es';

import { FsMessage } from '../../services/message.service';
import { FsMessageComponent } from '../message/message.component';


@Component({
    selector: 'fs-messages',
    template: '@for (item of messages; track item) {<fs-message [fsType]="item.type" [fsMessage]="item.msg"></fs-message>}',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FsMessageComponent],
})
export class FsMessagesComponent implements OnInit, OnDestroy {

  public messages = [];

  private _destroy$ = new Subject<void>();

  constructor(
    private _message: FsMessage,
    private _cdRef: ChangeDetectorRef,
  ) {}

  public ngOnInit () {
    this._message
      .bannerMessages$
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe((message: any) => {
        if (!message) {
          this.messages = [];
        } else {
          this.messages.push(message);

          if (message.timeout) {
            setTimeout(() => {
              remove(this.messages, (item) => {
                return item === message;
              });

              this._cdRef.markForCheck();
            }, message.timeout);
          }
        }

        this._cdRef.markForCheck();
      });
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
}
