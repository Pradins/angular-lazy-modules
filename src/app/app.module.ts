import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {appRouting} from './app.routing';
import {DesktopModule} from './desktop/desktop.module';
import {MobileModule} from './mobile/mobile.module';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRouting),
    DesktopModule,
    MobileModule,
    ServiceWorkerModule.register('ngsw-worker.js'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
