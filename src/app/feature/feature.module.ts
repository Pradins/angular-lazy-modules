import { DynamicPlatformModule } from '../dynamic-platform/dynamic-platform.module';
import { CounterMobileComponent } from './counter/mobile/counter.mobile.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';

export const IDENTIFIER = 'app/feature/feature.module#FeatureModule';
@NgModule({
	imports: [
		CommonModule,
		DynamicPlatformModule.forRoot({
			module: IDENTIFIER,
			desktop: [
				{ selector: 'app-counter', class: CounterComponent }
			],
			mobile: [
				{ selector: 'app-counter', class: CounterMobileComponent }
			]
		}),
		RouterModule.forChild([
			{path: 'feature',  component: DemoComponent
		}
		])
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [ DemoComponent]
})
export class FeatureModule { }
