import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { apiEndpoints, environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SuperClass } from '../models/superclass.model';
import { Response } from '../response-utilities/response';

@Injectable()
export class SuperClassService {

    private response: Response;

    constructor(private http: HttpClient) {
        this.response = new Response();
    }

    get(id: number) {
        return this.http.get<Response>(environment.apiUrl + apiEndpoints.superClass.get + id);
    }

    getAll() {
        return this.http.get<Response>(environment.apiUrl + apiEndpoints.superClass.getAll);
    }
}