import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GoogleMapsLoaderService {

  private static promise;

  constructor(private http: HttpClient) {
  }

  public load() {
    // First time 'load' is called?
    if (!GoogleMapsLoaderService.promise) {

      // Make promise to load
      GoogleMapsLoaderService.promise = new Promise(resolve => {

        // Set callback for when google maps is loaded.
        window['__onGoogleLoaded'] = (ev) => {
          resolve(true);
        };

        this.http.get('/myprofile/v1/static/key.json').subscribe(response => {
          if (response['key']) {
            this.loadApi(response['key']);

          } else {
            this.loadApi('AIzaSyCz7SkOaxuY2RopNHcuRfCTqOLKguYHqRg');
          }
        }, error => {
          this.loadApi('AIzaSyCz7SkOaxuY2RopNHcuRfCTqOLKguYHqRg');
        });
      });
    }

    // Always return promise. When 'load' is called many times, the promise is already resolved.
    return GoogleMapsLoaderService.promise;
  }

  private loadApi(key) {
    const url = 'https://maps.googleapis.com/maps/api/js?key=' + key +
      '&libraries=places&callback=__onGoogleLoaded&language=en';
    const node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
