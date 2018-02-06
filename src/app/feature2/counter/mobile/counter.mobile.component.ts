import { Component } from '@angular/core';
import { Counter } from '../counter.logic';

@Component({
	selector: 'app-mobile-counter',
	templateUrl: './counter.mobile.component.html'

})
export class CounterMobileComponent extends Counter {
}
