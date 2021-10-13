import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
    label: string;
    nome: string;
    email: string;
}  

@Component({
    selector: 'services-router',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})

export class ServicesComponent implements AfterViewInit{

    private imageWidth: number = 210;

    @ViewChild("servicesGridList") servicesGridList!: ElementRef;
    @ViewChild("initialServicesGridItem") initialServicesGridItem!: ElementRef;
    @ViewChild("initialServicesGridItemImage") initialServicesGridItemImage!: ElementRef;
    

    constructor(public dialog: MatDialog) {
    }

    ngAfterViewInit() {
        this.onWindowResize();
    }

    onWindowResize() {
        var itemWidth = this.initialServicesGridItem.nativeElement.offsetWidth;
        
        this.servicesGridList.nativeElement.style = "padding-left: " + ((itemWidth - this.imageWidth) / 2) + "px;";
    }

    openDialog(label: string): void {
      const dialogRef = this.dialog.open(DialogOverview_ServicesReport, {
        data: {label: label}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

}

@Component({
    selector: 'services-report-dialog',
    templateUrl: 'services-report-dialog.html',
})

export class DialogOverview_ServicesReport {
  
    constructor(
      public dialogRef: MatDialogRef<DialogOverview_ServicesReport>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
}