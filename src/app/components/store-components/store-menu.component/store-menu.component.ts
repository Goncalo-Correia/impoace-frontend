import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'store-menu',
    templateUrl: './store-menu.component.html',
    styleUrls: ['./store-menu.component.css']
})

export class StoreMenuComponent{

    constructor(private http: HttpClient) {
    }

}