import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { FsExampleModule } from '@firestitch/example';
import { ModalExampleComponent } from './components/modal-example/modal-example.component';
import { ToastExampleComponent } from './components/toast-example/toast-example.component';
import { BannerExampleComponent } from './components/banner-example/banner-example.component';
import { BannerInlineExampleComponent } from './components/banner-inline-example/banner-inline-example.component';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    standalone: true,
    imports: [FsExampleModule, ModalExampleComponent, ToastExampleComponent, BannerExampleComponent, BannerInlineExampleComponent]
})
export class AppComponent {
  public config = environment;
}