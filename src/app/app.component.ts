import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isMobile: boolean = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());

  constructor(private router: Router) {
    if (this.isMobile) {
      this.router.navigate(['mobile']);
    } else {
      this.router.navigate(['desktop']);
    }
  }
}
