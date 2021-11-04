import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface DialogData {
    label: string;
    nome: string;
    email: string;
}  

@Component({
    selector: 'home-router',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {

    constructor(public dialog: MatDialog, private router: Router) {

    }

    openDialog(): void {
        const dialogRef = this.dialog.open(Dialog_HomeReport, {
          data: {label: "máquina"}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
    }

    routerChange(): void {
      this.router.navigateByUrl('/Store');
    }

}

@Component({
    selector: 'home-report-dialog',
    templateUrl: 'home-report-dialog.html',
})

export class Dialog_HomeReport {
  
    constructor(
      public dialogRef: MatDialogRef<Dialog_HomeReport>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
}
