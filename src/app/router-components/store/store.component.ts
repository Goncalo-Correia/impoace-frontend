import { Component, NgModule, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'store-router',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit {

    checkboxColor: string = "#00836c";
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