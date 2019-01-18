import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fs-message',
  templateUrl: './message.component.html'
})
export class FsMessageComponent implements OnInit {

  @Input('fsType') public fsType = 'info';
  @Input('fsMessage') public fsMessage: string;

  public icon = 'info';

  private icons = { success: 'done', error: 'report_problem', info: 'info', warning: 'report_problem' };

  constructor() { }

  public ngOnInit() {
    this.icon = this.icons[this.fsType];
  }

}
