import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from 'app/lazy/counter-component';

@Component({
    selector: 'lazy-comp',
    template: `
        <h2>Lazy loaded counter {{ counter }}</h2>
        <button (click)="increment()">Increment</button>
    `
})
export class LazyComponent extends CounterComponent {

}

@NgModule({
    imports: [CommonModule],
    declarations: [LazyComponent],
    entryComponents: [LazyComponent]
})
export class LazyModule {
    static entry = LazyComponent;
}
