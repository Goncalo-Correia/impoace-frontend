import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api.service';
import { apiEndpoints, environment } from 'src/environments/environment';

@Component({
    selector: 'store-products',
    templateUrl: './store-products.component.html',
    styleUrls: ['./store-products.component.css']
})

export class StoreProductsComponent implements OnInit {

    private apiService: ApiService;
    product: any;
    products: any;

    constructor(private http: HttpClient) {
        this.apiService = new ApiService(http);
    }

    ngOnInit(): void {
        this.apiService.get(environment.apiUrl + apiEndpoints).subscribe(data => {
            this.products = data.products
        });
    }

}