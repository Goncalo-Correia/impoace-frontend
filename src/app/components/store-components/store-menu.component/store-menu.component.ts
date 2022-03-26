import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { SuperClass } from 'src/app/models/superclass.model';
import { Class } from 'src/app/models/class.model';
import { apiEndpoints, environment } from 'src/environments/environment';

@Component({
    selector: 'store-menu',
    templateUrl: './store-menu.component.html',
    styleUrls: ['./store-menu.component.css']
})

export class StoreMenuComponent{

    private apiService: ApiService;
    superClasses: SuperClass[] | undefined;
    classes: Class[] | undefined;
    isToShowClasses: boolean = false;
    hasClasses: boolean = false;

    constructor(private http: HttpClient) {
        this.apiService = new ApiService(http);
    }

    ngOnInit(): void {
        this.superClassService_getSuperClasses();
    }

    onClick_selectSuperClass(superClassId: number | undefined) {
        this.classService_getClassesBySuperClassId(superClassId);
    }

    private superClassService_getSuperClasses() {
        this.apiService.get(environment.apiUrl + apiEndpoints.superClass.getAll).subscribe(data => {
            this.superClasses = data.superClasses;
        }, error => {
            this.superClasses = error.superClasses;
        });
    }

    private classService_getClassesBySuperClassId(id: number | undefined): void {
        this.apiService.get(environment.apiUrl + apiEndpoints.class.getClassesBySuperClassId + id).subscribe(data => {
            this.classes = data.classes;
        }, error => {
            this.classes = error.classes;
        });
    }

}