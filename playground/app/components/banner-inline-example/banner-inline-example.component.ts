import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banner-inline-example',
  templateUrl: './banner-inline-example.component.html',
  styleUrls: ['./banner-inline-example.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerInlineExampleComponent {
}
