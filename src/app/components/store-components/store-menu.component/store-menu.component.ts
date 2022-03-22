import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SuperClassService } from 'src/app/services/superclass.service';
import { ClassService } from 'src/app/services/class.service';
import { SuperClass } from 'src/app/models/superclass.model';

@Component({
    selector: 'store-menu',
    templateUrl: './store-menu.component.html',
    styleUrls: ['./store-menu.component.css']
})

export class StoreMenuComponent{

    private superClassService: SuperClassService;
    private classService: ClassService;
    superClasses: any = [];
    classes: any;
    selectedSuperClassId: number = 1;

    constructor(private http: HttpClient) {
        this.superClassService = new SuperClassService(http);
        this.classService = new ClassService(http);
    }

    ngOnInit(): void {
        this.superClassService.getAll().subscribe(data => {
            this.superClasses = data
        });
        this.classService.getAll().subscribe(data => {
            this.classes = data
        });
    }

    selectSuperClass(id: number): void {
        this.selectedSuperClassId = id;
        console.log(id);
 
    }

}