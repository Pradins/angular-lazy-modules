import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SystemJsNgModuleLoader, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { provideRoutes } from '@angular/router';
import { DynamicPlatformDirective } from 'app/dynamic.directive';



@NgModule({
  declarations: [
    DynamicPlatformDirective,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
      SystemJsNgModuleLoader,
      provideRoutes([ { loadChildren: 'app/lazy/lazy.module#LazyModule' },
      { loadChildren: 'app/lazy/mobileLazy.module#MobileLazyModule' }])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
