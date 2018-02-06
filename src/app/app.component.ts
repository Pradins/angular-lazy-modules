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
	constructor() {
	}

	ngOnInit() {
	}
}
