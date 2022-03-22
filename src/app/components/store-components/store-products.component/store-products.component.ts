import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
    selector: 'store-products',
    templateUrl: './store-products.component.html',
    styleUrls: ['./store-products.component.css']
})

export class StoreProductsComponent implements OnInit {

    private productService: ProductService;
    product: any;
    products: any;

    constructor(private http: HttpClient) {
        this.productService = new ProductService(http);
    }

    ngOnInit(): void {
        this.productService.get(1).subscribe(data => {
            this.product = data as Product
        });
    }

}