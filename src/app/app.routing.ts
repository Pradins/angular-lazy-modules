import {Routes} from '@angular/router';
import {AuthGuard} from './shared/auth/auth.guard';

export const appRouting: Routes = [
  {
    path: 'mobile',
    loadChildren: 'app/mobile/mobile.module#MobileModule',
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'mobile',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'desktop',
    loadChildren: 'app/desktop/desktop.module#DesktopModule'
  }
];
