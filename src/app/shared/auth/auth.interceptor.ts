import {
  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
  HttpXsrfTokenExtractor
} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable, Injector} from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import {AuthService} from './auth.service';
import {AuthConstants} from '../../core/constants/auth.constants';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector,
              private httpXSRF: HttpXsrfTokenExtractor) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.httpXSRF.getToken() && !request.headers.get('X-XSRF-TOKEN')) {
      request = request.clone({headers: request.headers.append('X-XSRF-TOKEN', this.httpXSRF.getToken())});
    }
    return this.nextHandle(request, next);
  }

  private nextHandle(request: HttpRequest<any>, next: HttpHandler) {
    const authService = this.injector.get(AuthService);
    return next.handle(request)
      .catch((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            if (request.url.indexOf(AuthConstants.REFRESH_TOKEN) === -1) {
              return this.authenticate(request, next);
            }  else {
              authService.logout();
            }
          } else {
            return Observable.throw(err);
          }
        }
      });
  }

  private authenticate(request, next) {
    const authService = this.injector.get(AuthService);
    if (authService.loggedIn()) {
      return authService.refreshToken()
        .flatMap(() => {
          return this.nextHandle(request, next);
        })
        .catch(() => {
          return authService.logout();
        });
    } else {
      return authService.logout();
    }
  }
}
