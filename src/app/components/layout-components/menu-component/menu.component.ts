import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api.service';
import { apiEndpoints, environment } from 'src/environments/environment';

export interface DialogData {
    label: string;
    products: Array<Product>
}  

@Component({
    selector: 'menu-bar',
    styleUrls: ['./menu.component.css'],
    templateUrl: './menu.component.html'
})

export class MenuComponent implements OnInit {

    private minDesktopWidth: number = 600;
    isDesktop: boolean = true;
    showMenuSidebar: boolean = false;
    showCartSidebar: boolean = false;
    showStoreMenu: boolean = false;
    showSearchMenu: boolean = false;

    constructor(public dialog: MatDialog) {
    }

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

    onClick_openMenuSearchDialog(): void {
        const dialogRef = this.dialog.open(Dialog_MenuSearch, {
          data: {label: "Pesquise na nossa loja"}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
    }

    onClick_hideStore() {
        this.showStoreMenu = false;
    }

    onClick_showStore() {
        this.showStoreMenu = true;
    }
}

@Component({
    selector: 'menu-search-dialog',
    styleUrls: ['./menu.component.css'],
    templateUrl: 'menu-search-dialog.html'
})

export class Dialog_MenuSearch {

    private minSearchLength: number = 3;
    private apiService: ApiService;
    products: Array<Product> | undefined;

    searchText: string | undefined;
    searchText_hasMinimumLength: boolean = false;

    constructor(
      public dialogRef: MatDialogRef<Dialog_MenuSearch>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
      private http: HttpClient) {
        this.apiService = new ApiService(http);
      }
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    onChange_searchInput(event: any) {
        this.searchText = event.target.value;
        
        if (event.target.value.length > this.minSearchLength) {
            this.apiService_searchProducts(event.target.value);
        }
    }

    private apiService_searchProducts(searchText: string) {
        this.apiService.get(environment.apiUrl + apiEndpoints.product.searchProducts + searchText).subscribe(data => {
            this.products = data.products;
        }, error => {
            this.products = error.products;
        });
    }
  
}