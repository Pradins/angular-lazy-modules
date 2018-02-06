import { DynamicPlatformModule } from '../dynamic-platform/dynamic-platform.module';
import { CounterMobileComponent } from './counter/mobile/counter.mobile.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';

export const IDENTIFIER = 'app/feature2/feature2.module#Feature2Module';

const platformComponents: ModuleWithProviders = DynamicPlatformModule.configure({
	module: IDENTIFIER,
	desktop: [
		{ selector: 'app-counter', class: CounterComponent }
	],
	mobile: [
		{ selector: 'app-counter', class: CounterMobileComponent }
	]
});

@NgModule({
	imports: [
		CommonModule,
		platformComponents,
		RouterModule.forChild([
			{
				path: '', component: DemoComponent
			}
		])
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	entryComponents: [CounterComponent, CounterMobileComponent],
	declarations: [DemoComponent, CounterComponent, CounterMobileComponent]
})
export class Feature2Module { }
