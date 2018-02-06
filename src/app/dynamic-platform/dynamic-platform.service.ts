import { Injectable, Injector, NgModuleFactory, ComponentFactoryResolver, NgModuleRef, SystemJsNgModuleLoader } from '@angular/core';
import { ComponentFactory } from '@angular/core/src/linker/component_factory';
import { Component } from './index';
import { OtherComponent } from 'app/other/other.component';

@Injectable()
export class DynamicPlatformService {

	platformMap = new Map<string, any>();
	isDesktop = true;

	constructor(
		private injector: Injector,
		private loader: SystemJsNgModuleLoader,
		private moduleId: string,
		private desktop: Component[],
		private mobile: Component[]) {
		this.setMobileOrDesktop();
	}

	public getComponent(componentName: string): Promise<ComponentFactory<any>> {
		/* const promise = new Promise<ComponentFactory<any>>((resolve, reject) => {
			// const entryComponent = OtherComponent; // this.platformMap[componentName];
			// const component = this.module.componentFactoryResolver.resolveComponentFactory(entryComponent);
			resolve(component);
		}); */

		const promise = new Promise<ComponentFactory<any>>((resolve, reject) => {
			this.loader.load(this.moduleId).then((moduleFactory: NgModuleFactory<any>) => {

				const entryComponent = this.platformMap[componentName];
				const moduleRef = moduleFactory.create(this.injector);

				const component = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
				resolve(component);


			});

		});


		return promise;
	}


	private setMobileOrDesktop() {
		let components = this.desktop;
		if (navigator.userAgent.indexOf('Chrome') !== -1) {
			this.isDesktop = false;
			components = this.mobile;
		}
		components.forEach((component) => {
			this.platformMap.set(component.selector, { module: this.moduleId, class: component.class });
		});
	}
}
