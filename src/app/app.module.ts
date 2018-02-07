import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {appRouting} from './app.routing';
import {DesktopModule} from './desktop/desktop.module';
import {MobileModule} from './mobile/mobile.module';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouting),
    DesktopModule,
    MobileModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
