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
import {SharedModule} from './shared/shared.module';
import {CookieModule, CookieService} from 'ngx-cookie';

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
    SharedModule,
    CookieModule.forRoot(),
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
