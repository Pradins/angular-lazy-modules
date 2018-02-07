import { Routes } from '@angular/router';

export const appRouting: Routes = [
  {
    path: 'mobile',
    loadChildren: 'app/mobile/mobile.module#MobileModule'
  },
  {
    path: 'desktop',
    loadChildren: 'app/desktop/desktop.module#DesktopModule'
  }
];
