/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FsMessageModule, FsMessage }  from '@firestitch/message';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  templateUrl: 'template.html',
  styleUrls: [ 'styles.css' ],
  encapsulation: ViewEncapsulation.None
})
class AppComponent {

  constructor(private FsMessage: FsMessage) {}

  error() {
    this.FsMessage.error('Error message');
  }

  warning() {
    this.FsMessage.warning('Warning message');
  }

  info() {
    this.FsMessage.info('Info message');
  }

  success() {
    this.FsMessage.success('Success message');
  }

  progress() {
    this.FsMessage.info('Loading...', { timeOut: 60, progressBar: true, progressAnimation: 'decreasing' });
  }
}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, FsMessageModule, BrowserAnimationsModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
