import { Component } from '@angular/core';
import { Counter } from '../counter.logic';

@Component({
	selector: 'app-counter',
	templateUrl: './counter.mobile.component.html'

})
export class CounterMobileComponent extends Counter {
}
