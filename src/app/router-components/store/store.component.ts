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
    selector: 'store-router',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.css']
})

export class StoreComponent{

    private _jsonURL = '../../../assets/store-menu-datastructure.json';
    
    menuDataStructure : StoreMenuDataStructureInterface[] = [{id: 0, label:"", categories: [{id: 0, label: "", subCategories: [""]}]}];
    menuItem : StoreMenuDataStructureInterface = {id: 0, label:"", categories: [{id: 0, label: "", subCategories: [""]}]};
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
        this.menuItem = this.menuDataStructure[index];
        this.categories = [""];
    }

    public onClick_category(index: number) {
        this.categories = this.menuItem.categories[index].subCategories;
    }

}