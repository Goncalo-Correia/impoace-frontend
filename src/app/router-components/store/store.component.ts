import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'store-router',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit{

    storeMenuDataStructure: any = [];

    constructor(private httpClient: HttpClient) {

    }

    ngOnInit() {
        this.fetch();
    }

    fetch(){
        this.httpClient.get("assets/store-menu-datastructure.json").subscribe(data =>{
          this.storeMenuDataStructure = data;
          console.log(this.storeMenuDataStructure);
          
        })
    }

}