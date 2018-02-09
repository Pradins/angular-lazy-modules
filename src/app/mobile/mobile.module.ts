import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mobileRouting } from './mobile.routing';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { GoalsModule } from './goals/goals.module';
import { TalksModule } from './talks/talks.module';
import { MobileComponent } from './mobile.component';
import {GoogleMapsLoaderService} from '../core/services/loadGoogleMapsApi/loadGoogleMapsApi';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mobileRouting),
    CoreModule,
    GoalsModule,
    TalksModule,
  ],
  providers: [
    GoogleMapsLoaderService
  ],
  declarations: [MobileComponent],
  exports: [RouterModule]
})

export class MobileModule { }
