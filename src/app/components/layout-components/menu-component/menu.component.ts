import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'menu-bar',
    styleUrls: ['./menu.component.css'],
    templateUrl: './menu.component.html'
})

export class MenuComponent implements OnInit {

    private minDesktopWidth: number = 600;
    private minSearchLength: number = 3;
    isDesktop: boolean = true;
    showMenuSidebar: boolean = false;
    showCartSidebar: boolean = false;
    showStoreMenu: boolean = false;
    showSearchMenu: boolean = false;
    searchText: string | undefined;
    searchText_hasMinimumLength: boolean = false;

    ngOnInit() {
        this.onResize();
        console.log(this.showStoreMenu);
    }

    @HostListener('window:resize', ['$event'])
    private onResize() {
        this.isDesktop = window.innerWidth >= this.minDesktopWidth;
    }

    onClick_toggleMenuSidebar() {
        this.showMenuSidebar = !this.showMenuSidebar;
    }

    onClick_toggleCartSidebar() {
        this.showCartSidebar = !this.showCartSidebar;
    }

    onClick_toggleSearchMenu() {
        this.showSearchMenu = !this.showSearchMenu;
    }

    onClick_hideStore() {
        this.showStoreMenu = false;
    }

    onClick_showStore() {
        this.showStoreMenu = true;
    }

    onChange_searchInput(event: any) {
        this.searchText = event.target.value;
        console.log(event.target.value);
    }
}