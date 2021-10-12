import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';

export interface DialogData {
    label: 'panda' | 'unicorn' | 'lion';
}

@Component({
    selector: 'services-router',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})

export class ServicesComponent implements AfterViewInit{

    private imageWidth: number = 210;

    @ViewChild("servicesGridList") servicesGridList!: ElementRef;
    @ViewChild("initialServicesGridItem") initialServicesGridItem!: ElementRef;
    @ViewChild("initialServicesGridItemImage") initialServicesGridItemImage!: ElementRef;
    

    constructor() {
    }

    ngAfterViewInit() {
        this.onWindowResize();
    }

    onWindowResize() {
        var itemWidth = this.initialServicesGridItem.nativeElement.offsetWidth;
        
        this.servicesGridList.nativeElement.style = "padding-left: " + ((itemWidth - this.imageWidth) / 2) + "px;";
    }

    openDialog() {
    }

}