// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  host: 'https://peopleos-4200.develop.umantis.com',
  pepr_api_host: 'https://peopleos-4200.develop.umantis.com',
  datareference_api_host: 'http://10.72.10.59:8535',
  social_api_host: 'http://10.72.10.59:8560',
  login_url: '/sso/authentication/init?success_url=/myprofile&failure_url=failure',
  login_host: '',
  assetsPath: '/',
  googleApiKey: 'AIzaSyCz7SkOaxuY2RopNHcuRfCTqOLKguYHqRg'
};
