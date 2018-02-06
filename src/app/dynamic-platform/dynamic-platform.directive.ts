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
	) {

		dynamicPlatformService.getComponent(el.nativeElement.localName).then((compFactory) => {
			viewContainer.createComponent(compFactory);
			el.nativeElement.remove();
		});
	}
}
