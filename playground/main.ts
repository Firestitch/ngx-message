import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { provideRouter } from '@angular/router';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FsMessageModule } from '@firestitch/message';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FsExampleModule } from '@firestitch/example';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, FsMessageModule.forRoot({
            toastTimeout: 3,
            defaultMessage: {
                success: 'Saved changes',
            }
        }), FormsModule, FsExampleModule.forRoot()),
        provideRouter([]),
        provideAnimations(),
    ]
})
  .catch(err => console.error(err));

