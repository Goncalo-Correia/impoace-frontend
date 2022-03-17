import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'menu-bar',
    styleUrls: ['./menu.component.css'],
    templateUrl: './menu.component.html'
})

export class MenuComponent implements OnInit {

    private minDesktopWidth: number = 480;
    public isDesktop: boolean = true;
    public showSidebar: boolean = false;

    ngOnInit() {
        this.isDesktop = window.innerWidth >= this.minDesktopWidth;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.isDesktop = window.innerWidth >= this.minDesktopWidth;
    }

    toggleSidebar() {
        this.showSidebar = !this.showSidebar;
    }
}