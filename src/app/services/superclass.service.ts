import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { apiEndpoints, environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SuperClass } from '../models/superclass.model';

@Injectable()
export class SuperClassService {

    constructor(private http: HttpClient) {
    }

    get(id: number): Observable<SuperClass> {
        return this.http.get<SuperClass>(environment.apiUrl + apiEndpoints.superClass.get + id);
    }

    getAll(): Observable<SuperClass[]> {
        return this.http.get<SuperClass[]>(environment.apiUrl + apiEndpoints.superClass.getAll);
    }
}