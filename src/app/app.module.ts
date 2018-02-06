import { OtherComponent } from 'app/other/other.component';
import { BrowserModule } from '@angular/platform-browser';
import { SystemJsNgModuleLoader, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { provideRoutes, RouterModule } from '@angular/router';
import { FeatureModule, IDENTIFIER as FEATURE_MODULE } from 'app/feature/feature.module';



@NgModule({
	declarations: [
		AppComponent,
		OtherComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		FeatureModule,
		RouterModule.forRoot([
			{ path: '', pathMatch: 'full', component: OtherComponent },
			{ loadChildren: 'app/feature/feature.module#FeatureModule' }
		])
	],
	providers: [
		SystemJsNgModuleLoader,

	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	entryComponents: [OtherComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }
