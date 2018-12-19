import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fs-message',
  templateUrl: './fs-message.component.html'
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
