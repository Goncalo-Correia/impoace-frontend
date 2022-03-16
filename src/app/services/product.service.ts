import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Product } from '../models/product.model';
import { apiEndpoints, environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) {
    }

    get(id: number) {
        return this.http.get<Product>(environment.apiUrl + apiEndpoints.product.get + id);
    }
}