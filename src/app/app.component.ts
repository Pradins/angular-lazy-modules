import {
    Component, Injector, NgModuleFactory, OnInit, SystemJsNgModuleLoader, ViewChild,
    ViewContainerRef
} from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Angular cli Example SystemJsNgModuleLoader.load';

    @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

    constructor(private loader: SystemJsNgModuleLoader, private inj: Injector) {
    }

    ngOnInit() {
        let route = 'app/lazy/lazy.module#LazyModule';

        if (navigator.userAgent.indexOf('Chrome') !== -1) {
            route = 'app/lazy/mobileLazy.module#MobileLazyModule';
        }

        console.log('que ruta cargo: ', route);

        this.loader.load(route).then((moduleFactory: NgModuleFactory<any>) => {
            const entryComponent = (<any>moduleFactory.moduleType).entry;
            const moduleRef = moduleFactory.create(this.inj);

            const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
            this.container.createComponent(compFactory);
        });
    }
}
