import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'menu-bar',
    styleUrls: ['./menu.component.css'],
    templateUrl: './menu.component.html'
})

export class MenuComponent implements OnInit {

    private minDesktopWidth: number = 600;
    isDesktop: boolean = true;
    showSidebar: boolean = false;
    showStoreMenu: boolean = false;

    ngOnInit() {
        this.isDesktop = window.innerWidth >= this.minDesktopWidth;
        console.log(this.showStoreMenu);
        
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.isDesktop = window.innerWidth >= this.minDesktopWidth;
    }

    toggleSidebar() {
        this.showSidebar = !this.showSidebar;
    }

    hideStore() {
        this.showStoreMenu = false;
    }

    showStore() {
        this.showStoreMenu = true;
    }
}