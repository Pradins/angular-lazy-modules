import { DynamicPlatformService } from './dynamic-platform.service';
import {
	NgModule,
	ModuleWithProviders,
	InjectionToken,
	Injector,
	NgModuleFactory,
	ComponentFactoryResolver,
	SystemJsNgModuleLoader,
	NgModuleRef
} from '@angular/core';
import { Component } from './index';
import { DynamicPlatformDirective } from './dynamic-platform.directive';

// export type Components = Component[];
class PlatformConfig {
	module: any;
	mobile?: Component[];
	desktop?: Component[];
}

export const DESKTOP_COMPONENTS = new InjectionToken<Component[]>('DESKTOP_COMPONENTS');
export const MOBILE_COMPONENTS = new InjectionToken<Component[]>('MOBILE_COMPONENTS');
export const MODULE = new InjectionToken<Component[]>('MODULE');


@NgModule({ declarations: [DynamicPlatformDirective], exports: [DynamicPlatformDirective] })
export class DynamicPlatformModule {

	static forRoot(config: PlatformConfig): ModuleWithProviders {
		console.log(config);
		return {
			ngModule: DynamicPlatformModule,
			providers: [

				{ provide: MODULE, useValue: config.module },
				{ provide: DESKTOP_COMPONENTS, useValue: config.desktop },
				{ provide: MOBILE_COMPONENTS, useValue: config.mobile },
				{
					provide: DynamicPlatformService,
					useFactory: setupPlatformService,
					deps: [Injector, MODULE, DESKTOP_COMPONENTS, MOBILE_COMPONENTS]
				}
			],
		};
	}

}
export function setupPlatformService(injector: Injector, loader: SystemJsNgModuleLoader, moduleId: string,
	desktop: Component[], mobile: Component[]) {
	const router = new DynamicPlatformService(injector, loader, moduleId, desktop, mobile);
	console.log(module);
	return router;
}