import { Routes } from '@angular/router';
import { MobileComponent } from './mobile.component';

export const mobileRouting: Routes = [
  {
    path: 'mobile',
    component: MobileComponent
  },
  {
    path: 'tracker',
    loadChildren: 'app/mobile/goals/goals.module#GoalsModule'
  },
  {
    path: 'talks',
    loadChildren: 'app/mobile/talks/talks.module#TalksModule'
  }
];


// loadChildren: 'app/mobile/goals/goals.module#GoalsModule'
