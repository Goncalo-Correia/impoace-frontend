import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface StoreMenuDataStructureInterface {
    id: number,
    label: string,
    categories: [
        {
            id: number,
            label: string,
            subCategories: [
                string
            ]
        }
    ]
}

@Component({
    selector: 'store-menu',
    templateUrl: './store-menu.component.html',
    styleUrls: ['./store-menu.component.css']
})

export class StoreMenuComponent{

    private _jsonURL = '../../../assets/store-menu-datastructure.json';
    
    menuDataStructure : StoreMenuDataStructureInterface[] = [{id: 0, label:"", categories: [{id: 0, label: "", subCategories: [""]}]}];
    selectedMenuItem : StoreMenuDataStructureInterface = {id: 0, label:"", categories: [{id: 0, label: "", subCategories: [""]}]};
    categories: [string] = [""];

    constructor(private http: HttpClient) {
        this.getJSON().subscribe(data => {
            this.menuDataStructure = data;
        });
    }

    private getJSON(): Observable<any> {
        return this.http.get(this._jsonURL);
    }

    public onClick_menuItem(index: number) {
        this.selectedMenuItem = this.menuDataStructure[index];
        this.categories = [""];
    }

    public onClick_category(index: number) {
        this.categories = this.selectedMenuItem.categories[index].subCategories;
    }

}