import {Inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {CookieService} from 'ngx-cookie';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DOCUMENT} from '@angular/common';
import 'rxjs/add/observable/of';
import {AuthConstants} from '../../core/constants/auth.constants';

@Injectable()
export class AuthService {

  public tokenExpires: string;
  public authToken: string;
  softExpiration: Date;
  hardExpiration: Date;

  constructor(private router: Router,
              private http: HttpClient,
              @Inject(DOCUMENT) private document: any,
              private cookieService: CookieService) {
    this.setCookies();
  }

  public cleanStorage(): void {
    this.cookieService.remove(AuthConstants.TOKEN_EXPIRES);
    this.cookieService.remove(AuthConstants.AUTH_TOKEN);
  }

  public checkExpiration(): boolean {
    const currentDate: Date = new Date();
    if (this.softExpiration && this.softExpiration > currentDate) {
      return true;
    } else if (this.softExpiration && this.hardExpiration && this.softExpiration < currentDate && currentDate < this.hardExpiration) {
      this.refreshToken().subscribe(
        () => {
          this.setCookies(true);
          return true;
        }, () => {
          return false;
        }
      );
    }
    return true;
  }

  public goToLogin() {
    this.document.location.href = AuthConstants.LOGIN_PAGE_URL;
  }

  public loggedIn() {
    return this.cookieService.get(AuthConstants.AUTH_TOKEN) || this.cookieService.get(AuthConstants.AUTH_TOKEN_REALM)
      || this.cookieService.get(AuthConstants.TOKEN_EXPIRES);
  }

  public login(credentials: string, tenantId: string) {
    const headers = new HttpHeaders().set(AuthConstants.TENANT_HEADER, tenantId);

    this.http.post(AuthConstants.LOGIN_URL, credentials, {headers: headers})
      .subscribe(
        () => {
          this.router.navigate(['myprofile'], {queryParamsHandling: 'merge'});
        },
        error => {
          // console.log(error);
        }
      );
  }

  public logout() {
    this.cleanStorage();
    if (this.loggedIn()) {
      this.http.post(AuthConstants.LOGOUT_URL, {}).subscribe(() => {
        document.location.href = AuthConstants.LOGIN_PAGE_URL;
      });
    } else {
      document.location.href = AuthConstants.LOGIN_PAGE_URL;
    }

    return Observable.of({});
  }

  public refreshToken(): Observable<any> {
    return this.http.post(AuthConstants.REFRESH_TOKEN, {});
  }

  public setCookies(refresh: boolean = false): void {
    this.tokenExpires = (this.tokenExpires && !refresh) ? this.tokenExpires : this.cookieService.get(AuthConstants.TOKEN_EXPIRES);
    this.authToken = (this.authToken && !refresh) ? this.authToken : this.cookieService.get(AuthConstants.AUTH_TOKEN);
    if (this.tokenExpires) {
      this.softExpiration = new Date(Number(this.tokenExpires
        .substr(0, this.tokenExpires.indexOf('-'))) * 1000);
      this.hardExpiration = new Date(Number(this.tokenExpires
        .substr(this.tokenExpires.indexOf('-') + 1,
          this.tokenExpires.length)) * 1000);
    }
  }
}
