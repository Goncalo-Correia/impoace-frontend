import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { StoreComponent } from './router-components/store/store.component';
import { DialogOverview_ServicesReport } from './router-components/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    DialogOverview_ServicesReport
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatListModule,
    MatExpansionModule,
    MatDialogModule,
    MatInputModule
  ],
  entryComponents: [
    DialogOverview_ServicesReport
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
