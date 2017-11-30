import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fs-message',
  template: `<div fxLayout="row" fxLayoutAlign="start center" class="fs-message-banner fs-message-{{ fsType }}">
      <div>
        <mat-icon *ngIf="icon" class="mat-icon material-icons" role="img">{{ icon }}</mat-icon>
      </div>
      <div *ngIf="fsMessage">{{ fsMessage }}</div>
    </div>`
})
export class FsMessageComponent implements OnInit {

  @Input('fsType') fsType = 'info';
  @Input('fsMessage') fsMessage: string;

  private icons = { success: 'done', error: 'report_problem', info: 'info', warning: 'report_problem' };
  icon = 'info';

  constructor() { }

  ngOnInit() {
    this.icon = this.icons[this.fsType];
  }

}
