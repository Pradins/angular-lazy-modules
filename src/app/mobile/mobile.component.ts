import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root-mobile',
  templateUrl: './mobile.component.html'
})
export class MobileComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    console.log('called');
    this.http.get('/mdm/rest/reference_data/details').subscribe((response) => {
      console.log(response);
    });
  }
}
