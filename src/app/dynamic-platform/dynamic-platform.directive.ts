import { DynamicPlatformService } from './dynamic-platform.service';
import { Directive, SystemJsNgModuleLoader, Injector, ElementRef, NgModuleFactory, ViewContainerRef, ComponentFactoryResolver, NgModuleRef } from '@angular/core';

@Directive({
	selector: '[dynamicPlatform]'
})
export class DynamicPlatformDirective {
	constructor(
		private viewContainer: ViewContainerRef,
		private el: ElementRef,
		private dynamicPlatformService: DynamicPlatformService,
		private componentFactoryResolver: ComponentFactoryResolver,
		private module: NgModuleRef<any>,
		// private moduleFactory: NgModuleFactory<any>
	) {

		// TODO: MOVE REGISTER COMPONENTS FOR MODULE IN SERVICE/MODULE CONFIG
		// TRY TO MOVE THE MODULE INSTANCE TO THE SERVICE AND CHECK PERFORMANCE
		// console.log(componentFactoryResolver);
		// console.log(module);
		// console.log(moduleFactory);
		dynamicPlatformService.getComponent(el.nativeElement.localName).then((compFactory) => {
			viewContainer.createComponent(compFactory);
			el.nativeElement.remove();
		});

		/* let route = 'app/lazy/lazy.module#LazyModule';

		if (navigator.userAgent.indexOf('Chrome') !== -1) {
			route = 'app/lazy/mobileLazy.module#MobileLazyModule';
		}

		console.log('que ruta cargo: ', route);

		this.loader.load(route).then((moduleFactory: NgModuleFactory<any>) => {

			const entryComponent = dynamicPlatformService.getComponent(el.nativeElement.localName);
			const moduleRef = moduleFactory.create(this.injector);

			const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
			viewContainer.createComponent(compFactory);
			el.nativeElement.remove();

		}); */


	}
}