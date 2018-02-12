import {environment} from '../../../environments/environment';

export class AuthConstants {

  public static TENANT_HEADER = 'X-AUTH-TENANT';
  public static LOGIN_URL: string = environment.login_host + '/myprofile/login';
  public static LOGIN_PAGE_URL: string = environment.login_url;
  public static REFRESH_TOKEN: string = environment.login_host + '/sso/authentication/regenerate';
  public static LOGOUT_URL = '/sso/authentication/logout';
  public static AUTH_TOKEN_REALM = 'realm-token';
  public static AUTH_TOKEN = 'auth-token';
  public static TOKEN_EXPIRES = 'token-expires';
}
