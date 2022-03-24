import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { apiEndpoints, environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Response } from '../response-utilities/response';

@Injectable()
export class ApiService {

    private response: Response;

    constructor(private http: HttpClient) {
        this.response = new Response();
    }

    get(url: string) {
        return this.http.get<Response>(url);
    }

}