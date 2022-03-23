import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SuperClassService } from 'src/app/services/superclass.service';
import { ClassService } from 'src/app/services/class.service';
import { SuperClass } from 'src/app/models/superclass.model';
import { Class } from 'src/app/models/class.model';

@Component({
    selector: 'store-menu',
    templateUrl: './store-menu.component.html',
    styleUrls: ['./store-menu.component.css']
})

export class StoreMenuComponent{

    private superClassService: SuperClassService;
    private classService: ClassService;
    superClasses: SuperClass[] | undefined;
    classes: Class[] | undefined;
    isToShowClasses: boolean = false;
    hasClasses: boolean = false;

    constructor(private http: HttpClient) {
        this.superClassService = new SuperClassService(http);
        this.classService = new ClassService(http);
    }

    ngOnInit(): void {
        this.superClassService_getSuperClasses();
    }

    onClick_selectSuperClass(superClassId: number | undefined) {
        this.classService_getClassesBySuperClassId(superClassId);
    }

    private superClassService_getSuperClasses() {
        this.superClassService.getAll().subscribe(data => {
            this.superClasses = data.superClasses;
        }, error => {
            this.superClasses = error.superClasses;
        });
    }

    private classService_getClassesBySuperClassId(id: number | undefined): void {
        this.classService.getClassesBySuperClassId(id).subscribe(data => {
            this.classes = data.classes;
        }, error => {
            this.classes = error.classes;
        });
    }

}