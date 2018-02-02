import { Directive, SystemJsNgModuleLoader, Injector, ElementRef, NgModuleFactory, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[dynamicPlatform]'
})
export class DynamicPlatformDirective {
    constructor(
        private viewContainer: ViewContainerRef,
        private el: ElementRef,
        private loader: SystemJsNgModuleLoader,
        private inj: Injector) {

        // TODO: MOVE REGISTER COMPONENTS FOR MODULE IN SERVICE/MODULE CONFIG    
        let route = 'app/lazy/lazy.module#LazyModule';

        if (navigator.userAgent.indexOf('Chrome') !== -1) {
            route = 'app/lazy/mobileLazy.module#MobileLazyModule';
        }

        console.log('que ruta cargo: ', route);

        this.loader.load(route).then((moduleFactory: NgModuleFactory<any>) => {
            const entryComponent = (<any>moduleFactory.moduleType).componentList[el.nativeElement.localName];
            const moduleRef = moduleFactory.create(this.inj);

            const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
            viewContainer.createComponent(compFactory);
            el.nativeElement.remove();

        });


    }
}