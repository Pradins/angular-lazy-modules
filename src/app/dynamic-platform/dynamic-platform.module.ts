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
export const MODULE_ID = new InjectionToken<Component[]>('MODULE_ID');


@NgModule({ declarations: [DynamicPlatformDirective], exports: [DynamicPlatformDirective] })
export class DynamicPlatformModule {

	static configure(config: PlatformConfig): ModuleWithProviders {
		return {
			ngModule: DynamicPlatformModule,
			providers: [

				{ provide: MODULE_ID, useValue: config.module },
				{ provide: DESKTOP_COMPONENTS, useValue: config.desktop },
				{ provide: MOBILE_COMPONENTS, useValue: config.mobile },
				{
					provide: DynamicPlatformService,
					useFactory: setupPlatformService,
					deps: [Injector, SystemJsNgModuleLoader, MODULE_ID, DESKTOP_COMPONENTS, MOBILE_COMPONENTS]
				}
			],
		};
	}

}
export function setupPlatformService(injector: Injector, loader: SystemJsNgModuleLoader, moduleId: string,
	desktop: Component[], mobile: Component[]) {
	const service = new DynamicPlatformService(injector, loader, moduleId, desktop, mobile);
	return service;
}
