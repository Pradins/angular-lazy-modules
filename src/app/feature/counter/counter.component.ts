import { Component } from '@angular/core';
import { Counter } from './counter.logic';

@Component({
	selector: 'app-desktop-counter',
	templateUrl: './counter.component.html'
})
export class CounterComponent extends Counter {
}
