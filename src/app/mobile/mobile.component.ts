import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GoogleMapsLoaderService} from '../core/services/loadGoogleMapsApi/loadGoogleMapsApi';

@Component({
  selector: 'app-root-mobile',
  templateUrl: './mobile.component.html'
})
export class MobileComponent implements OnInit {

  userFullName: string;

  constructor(private http: HttpClient,
              private loadGoogleApi: GoogleMapsLoaderService) {
  }

  ngOnInit() {
    this.callGoogleApi();
    this.http.get('https://peopleos-4200.develop.umantis.com/mdm/rest/identities/details').subscribe((response) => {
      if (response['first_name'] && response['last_name']) {
        this.userFullName = response['first_name'] + response['last_name'];
      }
    }, (error) => {
      this.userFullName = 'SYSTEM DATA OFFLINE';
    });
  }

  callGoogleApi() {
    this.loadGoogleApi.load().then(() => {
      console.log('google api loaded');
    });
  }
}
