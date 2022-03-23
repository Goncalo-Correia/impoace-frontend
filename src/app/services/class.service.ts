import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { apiEndpoints, environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Class } from '../models/class.model';
import { Response } from '../response-utilities/response';

@Injectable()
export class ClassService {

    private response: Response;

    constructor(private http: HttpClient) {
        this.response = new Response();
    }

    get(id: number) {
        return this.http.get<Response>(environment.apiUrl + apiEndpoints.class.get + id);
    }

    getAll() {
        return this.http.get<Response>(environment.apiUrl + apiEndpoints.class.getAll);
    }

    getClassesBySuperClassId(id: number | undefined) {
        return this.http.get<Response>(environment.apiUrl + apiEndpoints.class.getClassesBySuperClassId + id);
    }
}