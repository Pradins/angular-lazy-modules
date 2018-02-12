import { Routes } from '@angular/router';
import { MobileComponent } from './mobile.component';
import {AuthGuard} from '../shared/auth/auth.guard';

export const mobileRouting: Routes = [
  {
    path: 'mobile',
    component: MobileComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'tracker',
    loadChildren: 'app/mobile/goals/goals.module#GoalsModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'talks',
    loadChildren: 'app/mobile/talks/talks.module#TalksModule',
    canActivate: [AuthGuard]
  }
];


// loadChildren: 'app/mobile/goals/goals.module#GoalsModule'
