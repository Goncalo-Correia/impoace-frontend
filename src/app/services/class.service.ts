import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { apiEndpoints, environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Class } from '../models/class.model';

@Injectable()
export class ClassService {

    constructor(private http: HttpClient) {
    }

    get(id: number) {
        return this.http.get<Class>(environment.apiUrl + apiEndpoints.class.get + id);
    }

    getAll() {
        return this.http.get<Class>(environment.apiUrl + apiEndpoints.class.getAll);
    }
}