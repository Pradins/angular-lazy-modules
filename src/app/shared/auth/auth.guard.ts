import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) {
  }

  canActivate() {
    if (this.authService.tokenExpires) {
      if (this.authService.checkExpiration()) {
        return true;
      } else {
        this.authService.logout();
        return false;
      }
    } else if (!this.authService.loggedIn()) {
      this.authService.logout();
    } else {
      return true;
    }
  }
}
